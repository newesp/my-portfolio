import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'
import handler from '../api/github-repos.js'

const originalFetch = globalThis.fetch
const originalToken = process.env.GITHUB_TOKEN

afterEach(() => {
  globalThis.fetch = originalFetch
  if (originalToken === undefined) {
    delete process.env.GITHUB_TOKEN
  } else {
    process.env.GITHUB_TOKEN = originalToken
  }
})

function createResponse() {
  return {
    body: undefined,
    headers: {},
    statusCode: undefined,
    setHeader(name, value) {
      this.headers[name] = value
    },
    status(code) {
      this.statusCode = code
      return this
    },
    json(body) {
      this.body = body
      return this
    },
  }
}

test('GitHub repository API reports a missing server token without making a request', async () => {
  delete process.env.GITHUB_TOKEN
  globalThis.fetch = () => {
    throw new Error('fetch must not run without a token')
  }
  const res = createResponse()

  await handler({}, res)

  assert.equal(res.statusCode, 500)
  assert.match(res.body.error, /GITHUB_TOKEN/)
})

test('GitHub repository API paginates, filters private repositories, and sets cache headers', async () => {
  process.env.GITHUB_TOKEN = 'test-token'
  const requests = []
  const firstPage = Array.from({ length: 100 }, (_, id) => ({ id, private: false }))
  const secondPage = [
    { id: 100, private: false },
    { id: 101, private: true },
  ]
  globalThis.fetch = async (url, options) => {
    requests.push({ url, options })
    const page = new URL(url).searchParams.get('page')
    return {
      ok: true,
      json: async () => (page === '1' ? firstPage : secondPage),
    }
  }
  const res = createResponse()

  await handler({}, res)

  assert.equal(res.statusCode, 200)
  assert.equal(requests.length, 2)
  assert.equal(requests[0].options.headers.Authorization, 'Bearer test-token')
  assert.equal(res.body.length, 101)
  assert.ok(res.body.every((repo) => !repo.private))
  assert.equal(res.headers['Vercel-CDN-Cache-Control'], 'public, max-age=86400')
  assert.equal(res.headers['Vercel-Cache-Tag'], 'github-repos')
})
