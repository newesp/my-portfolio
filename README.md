# my-protfolio

Song Ching Lin 的 Vue 3 作品集。這個版本由原本的單一 `index.html` 遷移而來，保留 Atelier Zero 的版面、圖片、響應式規則、繁中／英文切換、GitHub 專案搜尋與證書 lightbox。

## 技術

- Vue 3 + Vite
- GLightbox
- Vercel Serverless Function：`api/github-repos.js`
- Node.js 原生測試：內容契約與 API handler

## 本機開發

需求：Node.js 22.12 以上。

```bash
npm install
npm run dev
```

`npm run dev` 會啟動 Vite 前端。若要在本機同時執行 `/api/github-repos`，請安裝 Vercel CLI、由 `.env.example` 建立未提交的 `.env.local`，填入 `GITHUB_TOKEN` 後執行：

```bash
vercel dev
```

不要提交 `.env.local` 或 GitHub token。

## 驗證

```bash
npm test
npm run build
```

production build 會輸出到 `dist/`。

## Vercel 部署

1. 在 Vercel 匯入 `https://github.com/newesp/my-protfolio`。
2. Framework Preset 使用 Vite；repo 的 `vercel.json` 已指定 `npm run build` 與 `dist`。
3. 在 Vercel 專案的 Environment Variables 新增 `GITHUB_TOKEN`，至少套用至 Production；若 Preview 也要顯示 GitHub 專案，亦套用至 Preview。
4. 部署後檢查首頁、`?lang=en`、證書 lightbox，以及 `/api/github-repos` 是否回傳 JSON。

## 目錄

```text
api/github-repos.js        Vercel GitHub API proxy
public/assets/images/      原頁面的公開圖片
src/App.vue                Vue 頁面模板
src/main.js                Vue 與 GLightbox 啟動點
src/portfolio.js           語系、專案清單與頁面互動
src/styles.css             原頁面的視覺系統與 RWD
tests/                     內容契約與 serverless API 測試
```
