import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectFiles = [
  'index.html',
  'package.json',
  'vite.config.js',
  'src/main.js',
  'src/App.vue',
  'src/portfolio.js',
];
const htmlContent = projectFiles
  .map((file) => fs.readFileSync(path.resolve(file), 'utf8'))
  .join('\n');

test('Vue 3 and Vite entry points are configured', () => {
  const packageJson = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8'));
  assert.match(packageJson.dependencies.vue, /^3\./);
  assert.equal(packageJson.scripts.build, 'vite build');
  assert.match(htmlContent, /createApp\(App\)\.mount\('#app'\)/);
  assert.match(htmlContent, /import vue from '@vitejs\/plugin-vue'/);
});

test('Every portfolio image reference resolves to a public asset', () => {
  const appSource = fs.readFileSync(path.resolve('src/App.vue'), 'utf8');
  const imagePaths = [...appSource.matchAll(/\/assets\/images\/([^)'"\s]+)/g)]
    .map((match) => match[1]);

  assert.ok(imagePaths.length > 0, 'portfolio image references exist');
  for (const imagePath of imagePaths) {
    assert.ok(
      fs.existsSync(path.resolve('public/assets/images', imagePath)),
      `public asset exists for ${imagePath}`,
    );
  }
});

test('Checklist: Skills section has 6 capability groups and removes ML algorithms from skills', () => {
  // Check 6 skill categories exis
  assert.match(htmlContent, /AI\s*驅動軟體開發/);
  assert.match(htmlContent, /自動化與系統整合/);
  assert.match(htmlContent, /Web\s*與應用程式開發/);
  assert.match(htmlContent, /測試與工程品質/);
  assert.match(htmlContent, /MarTech\s*與數位平台/);
  assert.match(htmlContent, /Cloud\s*與\s*CI\/CD/);

  // Check group order
  const aiIndex = htmlContent.indexOf('AI 驅動軟體開發');
  const autoIndex = htmlContent.indexOf('自動化與系統整合');
  const webIndex = htmlContent.indexOf('Web 與應用程式開發');
  const testIndex = htmlContent.indexOf('測試與工程品質');
  const martechIndex = htmlContent.indexOf('MarTech 與數位平台');
  const cloudIndex = htmlContent.indexOf('Cloud 與 CI/CD');

  assert.ok(aiIndex > 0, 'AI 驅動軟體開發 exists');
  assert.ok(aiIndex < autoIndex, 'AI 驅動軟體開發 is the first skill group');
  assert.ok(autoIndex < webIndex, '自動化與系統整合 follows AI group');
  assert.ok(webIndex < testIndex, 'Web 與應用程式開發 follows auto group');
  assert.ok(testIndex < martechIndex, '測試與工程品質 follows web group');
  assert.ok(martechIndex < cloudIndex, 'MarTech follows test group');

  // Verify all specific skills from the spec
  const expectedSkills = [
    'Loop Engineering', 'Spec-driven Development', 'AI Coding', 'AI Code Review', 'AI-assisted Testing & Debugging', 'Human Acceptance',
    'REST API', 'API 整合', 'n8n', '自動化腳本', '排程任務', '資料處理', '跨平台資料同步', '異常監控',
    'React', 'Next.js', 'Node.js', 'Python', 'PHP', 'Web Application Development',
    'pytest', 'Jest', 'Unit Test', 'Integration Test', 'Coverage Gate', 'Code Review', 'Root Cause Analysis', 'CI/CD',
    'GA4', 'Google Tag Manager', 'Google Ads', 'Google Search Console', 'HubSpot', 'Salesforce Marketing Cloud', 'Salesforce Lightning', 'WordPress',
    'Docker', 'GitHub Actions', 'Google Cloud Build', 'Cloud Run'
  ];
  for (const skill of expectedSkills) {
    assert.ok(htmlContent.includes(skill), `Skills section should contain "${skill}"`);
  }

  // Skills section must NOT contain standalone ML algorithms
  const skillsMatch = htmlContent.match(/<section[^>]*id=["']skills["'][\s\S]*?<\/section>/i);
  assert.ok(skillsMatch, 'Skills section must exist with id="skills"');
  const skillsHtml = skillsMatch[0];
  const bannedMlSkills = [
    'scikit-learn', 'LightGBM', 'Random Forest', 'Logistic Regression',
    'Feature Engineering', 'Time Series Cross Validation', 'Model Evaluation', 'Data Leakage Cross-Validation'
  ];
  for (const banned of bannedMlSkills) {
    assert.ok(!skillsHtml.includes(banned), `Skills section must not contain "${banned}"`);
  }

  // Verify ML project (Lottery-ML-Portfolio) retains ML tags & conten
  assert.ok(htmlContent.includes('Lottery-ML-Portfolio'), 'Lottery-ML-Portfolio project must be preserved');
  assert.ok(htmlContent.includes('機器學習'), 'Lottery-ML-Portfolio must retain 機器學習 tag/text');
});

test('Checklist: Professional Work section positioned before Projects with Greenpeace Taiwan & work items', () => {
  const profWorkIndex = htmlContent.indexOf('id="professional-work"');
  const projectsIndex = htmlContent.indexOf('id="projects"');

  assert.ok(profWorkIndex > 0, 'Professional Work section (#professional-work) exists');
  assert.ok(projectsIndex > 0, 'Projects section (#projects) exists');
  assert.ok(profWorkIndex < projectsIndex, 'Professional Work must be placed BEFORE Projects');

  // Verify Greenpeace Taiwan, role and tenure
  assert.match(htmlContent, /Greenpeace Taiwan/);
  assert.match(htmlContent, /WEB DEVELOPMENT · MARTECH · AUTOMATION · System Integration/);
  assert.match(htmlContent, /任職期間｜2016\/10 – 2026\/06/);
  assert.match(htmlContent, /參與綠色和平的網站開發與數位平台維運/);

  // Verify 4 capability items
  assert.match(htmlContent, /網站與數位倡議/);
  assert.match(htmlContent, /負責網站、倡議與募款相關頁面的開發、維護與問題排查/);

  assert.match(htmlContent, /MarTech 與數據追蹤/);
  assert.match(htmlContent, /管理與整合 GA4、Google Tag Manager/);

  assert.match(htmlContent, /跨平台問題調查與排除/);
  assert.match(htmlContent, /調查並解決跨平台之間的資料不一致與串接異常/);

  assert.match(htmlContent, /系統整合與自動化/);
  assert.match(htmlContent, /透過 API、n8n、Cloud Run 與自動化流程處理跨系統資料同步/);

  // Verify cross-functional delivery commitmen
  assert.match(htmlContent, /跨部門需求與交付/);
  assert.match(htmlContent, /與各部門合作，將業務需求轉換為可執行的網站、數據與系統方案/);

  // Verify collage artwork image exists in professional-work
  const profWorkBlock = htmlContent.substring(profWorkIndex, projectsIndex);
  assert.ok(profWorkBlock.includes('assets/images/capabilities.png'), 'Professional Work section contains capabilities artwork');
});

test('Checklist: Representative Pages under Projects with 🌳 Donation & 🐋 Ocean Petition', () => {
  const projectsIndex = htmlContent.indexOf('id="projects"');
  const skillsIndex = htmlContent.indexOf('id="skills"');
  const projectsBlock = htmlContent.substring(projectsIndex, skillsIndex);

  // Online Donation Page
  assert.match(projectsBlock, /🌳/);
  assert.match(projectsBlock, /線上捐款頁面/);
  assert.match(projectsBlock, /https:\/\/www\.greenpeace\.org\.tw\/donation-general-general/);
  assert.match(projectsBlock, /參與綠色和平線上募款網站的開發與維護/);

  // Ocean Protection Petition Page
  assert.match(projectsBlock, /🐋/);
  assert.match(projectsBlock, /海洋保護連署頁面/);
  assert.match(projectsBlock, /https:\/\/www\.greenpeace\.org\.tw\/petition-oceans-sanctuaries-mw/);
  assert.match(projectsBlock, /參與線上連署頁面的開發與維護/);

  // Both links have target="_blank" and rel="noopener noreferrer"
  assert.ok(projectsBlock.includes('target="_blank"'), 'Links must open in a new tab');
  assert.ok(projectsBlock.includes('rel="noopener noreferrer"'), 'Links must have rel="noopener noreferrer"');
});

test('Checklist: Navbar contains ordered section links including contact link', () => {
  const navMatch = htmlContent.match(/<nav[^>]*>([\s\S]*?)<\/nav>/i);
  assert.ok(navMatch, 'Navbar exists');
  const navHtml = navMatch[1];

  // Verify all links exis
  assert.ok(navHtml.includes('href="#professional-work"'), 'Navbar has professional-work link');
  assert.ok(navHtml.includes('href="#projects"'), 'Navbar has projects link');
  assert.ok(navHtml.includes('href="#skills"'), 'Navbar has skills link');
  assert.ok(navHtml.includes('href="#certifications"'), 'Navbar has certifications link');
  assert.ok(navHtml.includes('href="#contact"'), 'Navbar has contact link');

  // Verify link order matches page layou
  const workPos = navHtml.indexOf('href="#professional-work"');
  const projPos = navHtml.indexOf('href="#projects"');
  const skillsPos = navHtml.indexOf('href="#skills"');
  const certsPos = navHtml.indexOf('href="#certifications"');
  const contactPos = navHtml.indexOf('href="#contact"');

  assert.ok(workPos < projPos, 'professional-work link comes before projects');
  assert.ok(projPos < skillsPos, 'projects link comes before skills');
  assert.ok(skillsPos < certsPos, 'skills link comes before certifications');
  assert.ok(certsPos < contactPos, 'certifications link comes before contact');
});

test('Checklist: GitHub dynamic loader and project pipeline preserved without regressions', () => {
  assert.ok(htmlContent.includes('id="project-search"'), 'Project search input preserved');
  assert.ok(htmlContent.includes('id="project-list"'), 'Project list container preserved');
  assert.ok(htmlContent.includes('id="pagination"'), 'Pagination container preserved');
  assert.ok(htmlContent.includes('/api/github-repos'), 'API url preserved');
  assert.ok(htmlContent.includes('PortfolioApp'), 'PortfolioApp global object preserved');
});

test('Checklist: Bilingual i18n Dictionary completeness and translation parity', () => {
  // Extract I18N dictionary from scrip
  const i18nMatch = htmlContent.match(/const I18N = (\{[\s\S]*?\n\s*\});/);
  assert.ok(i18nMatch, 'I18N object defined in script');

  // Parse dictionary safely
  const evalDict = new Function(`return ${i18nMatch[1]}`)();
  assert.ok(evalDict['zh-Hant'], 'zh-Hant locale exists in dictionary');
  assert.ok(evalDict['en'], 'en locale exists in dictionary');

  const zhKeys = Object.keys(evalDict['zh-Hant']);
  const enKeys = Object.keys(evalDict['en']);

  assert.equal(zhKeys.length, enKeys.length, 'All keys in zh-Hant must have corresponding en translations');
  for (const key of zhKeys) {
    assert.ok(evalDict['en'][key], `en translation exists for key "${key}"`);
    assert.ok(evalDict['en'][key].length > 0, `en translation is non-empty for key "${key}"`);
  }

  // Find all data-i18n attributes in HTML and assert they are in the dictionary
  const dataI18nMatches = [...htmlContent.matchAll(/data-i18n=["']([^"']+)["']/g)];
  assert.ok(dataI18nMatches.length > 0, 'Found data-i18n elements in HTML');
  for (const match of dataI18nMatches) {
    const key = match[1];
    assert.ok(evalDict['zh-Hant'][key], `data-i18n key "${key}" exists in zh-Hant dictionary`);
    assert.ok(evalDict['en'][key], `data-i18n key "${key}" exists in en dictionary`);
  }

  // Check English translations for major sections
  assert.equal(evalDict['en'].workSectionTitle, 'Professional Work');
  assert.equal(evalDict['en'].workCompany, 'Greenpeace Taiwan');
  assert.equal(evalDict['en'].workRole, 'WEB DEVELOPMENT · MARTECH · AUTOMATION · System Integration');
  assert.equal(evalDict['en'].workPeriod, 'Tenure | 2016/10 – 2026/06');
  assert.equal(evalDict['en'].skill1Group, 'AI-Driven Software Development');
  assert.equal(evalDict['en'].skill2Group, 'Automation & System Integration');
  assert.equal(evalDict['en'].skill3Group, 'Web & Application Development');
  assert.equal(evalDict['en'].skill4Group, 'Testing & Engineering Quality');
  assert.equal(evalDict['en'].skill5Group, 'MarTech & Digital Platforms');
  assert.equal(evalDict['en'].skill6Group, 'Cloud & CI/CD');
  assert.equal(evalDict['en'].certsTitle, 'Certifications & Credentials');
  assert.equal(evalDict['en'].cert1Title, '🎓 iPAS AI Application Planner (Machine Learning) – Specialist Level');
  assert.equal(evalDict['en'].cert1Issuer, 'MOEA Industry Professional Assessment System (iPAS)');
  assert.equal(evalDict['en'].cert1Cta, 'View Certificate ↗');
});

test('Checklist: Certifications section positioned after Skills, with iPAS credential, Google Drive link, and no raw img', () => {
  const skillsIndex = htmlContent.indexOf('id="skills"');
  const certsIndex = htmlContent.indexOf('id="certifications"');
  const contactIndex = htmlContent.indexOf('id="contact"');

  assert.ok(skillsIndex > 0, 'Skills section (#skills) exists');
  assert.ok(certsIndex > 0, 'Certifications section (#certifications) exists');
  assert.ok(contactIndex > 0, 'Contact section (#contact) exists');

  // Verify position: Skills -> Certifications -> Contac
  assert.ok(skillsIndex < certsIndex, 'Certifications must be placed AFTER Skills');
  assert.ok(certsIndex < contactIndex, 'Certifications must be placed BEFORE Contact');

  // Verify section conten
  const certsMatch = htmlContent.match(/<section[^>]*id=["']certifications["'][\s\S]*?<\/section>/i);
  assert.ok(certsMatch, 'Certifications section markup found');
  const certsHtml = certsMatch[0];

  assert.match(certsHtml, /🎓/);
  assert.match(certsHtml, /iPAS\s*AI\s*應用規劃師（機器學習）－中級/);
  assert.match(certsHtml, /經濟部產業人才能力鑑定（iPAS）/);

  // Verify local certificate image link & GLightbox popup integration
  assert.ok(certsHtml.includes('assets/images/cert-ipas-ai.jpg'), 'Certificate link points to local image');
  assert.match(certsHtml, /class=["'][^"']*glightbox[^"']*["']/);
  assert.match(certsHtml, /data-type=["']image["']/);
  assert.match(certsHtml, /target=["']_blank["']/);
  assert.match(certsHtml, /rel=["'][^"']*noopener[^"']*["']/);
  assert.match(certsHtml, /查看證書/);

  // Verify GLightbox dependency, CSS import, and initialization
  assert.match(htmlContent, /"glightbox"\s*:\s*"3\.3\.1"/);
  assert.match(htmlContent, /glightbox\/dist\/css\/glightbox\.min\.css/);
  assert.match(htmlContent, /import GLightbox from 'glightbox'/);
  assert.match(htmlContent, /GLightbox\(\{/);

  // Verify no <img> tags in certifications section
  assert.ok(!/<img\s/i.test(certsHtml), 'Certifications section must not embed full <img> tags');
});
