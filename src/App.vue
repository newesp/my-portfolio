<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  import('./portfolio.js')
})
</script>

<template>
<div class="side-rail right" data-od-id="rail-right"><span class="rail-text">Song Ching Lin — Portfolio · Taipei · 2026</span></div>
<div class="side-rail left" data-od-id="rail-left"><span class="rail-text">MarTech · Automation · AI · Full-stack</span></div>
<div class="shell">

<div class="topbar" data-od-id="topbar">
  <div class="container topbar-inner">
    <span><b>SCL / 2026</b><span class="topbar-sub"> &nbsp;·&nbsp; Vol. 01 / Portfolio</span></span>
    <span class="mid"><span>Filed under <b class="coral" data-i18n="topbarFiledUnder">工程 · 自動化</b></span><span data-i18n="topbarLocation">台北 · 可遠端協作</span></span>
    <span class="right">
      <span class="topbar-status"><span class="pulse"></span><span data-i18n="topbarStatus">目前可聯絡</span></span>
      <span>
        <button type="button" class="lang-btn active" data-lang="zh-Hant">繁中</button>
        ·
        <button type="button" class="lang-btn" data-lang="en">EN</button>
      </span>
    </span>
  </div>
</div>

<header class="nav" data-od-id="nav">
  <div class="container nav-inner">
    <a href="#top" class="brand" data-od-id="brand-home">
      <span class="brand-mark">S</span>
      <span>Song Ching Lin</span>
      <span class="brand-meta">
        <b data-i18n="navMetaTitle">程式作品集</b>
        <span>MarTech / AI / Automation</span>
      </span>
    </a>
    <nav aria-label="主要導覽">
      <ul class="nav-links">
        <li><a href="#professional-work"><span data-i18n="navWork">專業工作</span></a></li>
        <li><a href="#projects"><span data-i18n="navProjects">個人專案</span></a></li>
        <li><a href="#skills"><span data-i18n="navSkills">專業技能</span></a></li>
        <li><a href="#certifications"><span data-i18n="navCerts">證照</span></a></li>
        <li><a href="#contact"><span data-i18n="navContact">聯絡</span></a></li>
      </ul>
    </nav>
    <div class="nav-side">
      <span class="status-dot" aria-hidden="true"></span>
    </div>
  </div>
</header>

<!-- SECTION I: HERO -->
<section class="hero" id="top" data-od-id="hero">
  <div class="container"><div class="sec-rule"><span class="roman">I.</span><span class="meta-grp"><span data-i18n="heroSecRule">封面 / 工程實踐</span><span class="dot-mark">•</span><span>Song Ching Lin</span></span><span>001 / 006</span></div></div>
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="label" data-reveal><span data-i18n="heroLabel">自動化與全端工程師</span> <span class="ix">· Nº 01</span></span>
      <h2 class="display" data-reveal data-i18n="heroTitle">把複雜流程做成<em>可靠系統</em><span class="dot">.</span></h2>
      <p class="lead" data-reveal data-i18n="heroLede">我主要做 MarTech、系統整合與 AI 輔助開發，從釐清需求、寫程式、測試到上線，讓流程真的能用，也方便後續維護。</p>
      <div class="hero-actions" data-reveal>
        <a class="btn btn-primary" data-od-id="cta-view-projects" href="#projects"><span data-i18n="heroCtaProj">查看專案</span> <span class="arrow">→</span></a>
        <a class="btn btn-ghost" href="https://github.com/newesp" target="_blank" rel="noopener noreferrer"><span data-i18n="heroCtaGithub">GitHub 個人頁面</span> <span class="arrow">↗</span></a>
      </div>
      <div class="hero-foot" data-reveal><span class="meta" data-i18n="heroFootMeta">↳ 需求探索 → 系統架構 → 部署上線 → 持續迭代</span></div>
    </div>
    <div class="hero-art" data-reveal="scale">
      <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
      <span class="annot annot-tl coord">FIG. 01 / SCL-26</span><span class="annot annot-tr">Plate Nº 01</span><span class="annot annot-bl coord">TAIPEI · TW</span><span class="annot annot-br">Loop Engineering</span>
      <div class="hero-visual">
        <img class="hero-image" src="/assets/images/hero-1.png" width="1024" height="1024" alt="抽象紙雕拼貼，象徵 AI、自動化與系統思考" />
        <svg class="hero-mantra" viewBox="0 0 1024 1024" aria-hidden="true">
          <defs>
            <path id="hero-mantra-path" d="M 630,118 A 362,362 0 1,1 629.9,118" />
          </defs>
          <g class="hero-mantra-rotor">
            <circle class="mantra-guide" cx="630" cy="480" r="362" />
            <text textLength="2225" lengthAdjust="spacing">
              <textPath href="#hero-mantra-path" startOffset="0">AI-DRIVEN SOFTWARE DEVELOPMENT · REQUIREMENT DISCOVERY · SPEC-DRIVEN DEVELOPMENT · AI CODING · AI CODE REVIEW · TESTING &amp; DEBUGGING · HUMAN ACCEPTANCE · </textPath>
            </text>
          </g>
        </svg>
        <img class="hero-cloud" src="/assets/images/hero-cloud.png" width="1024" height="1024" alt="" aria-hidden="true" />
      </div>
      <div class="index"><span><span class="n">01</span><span data-i18n="stage1">探索</span></span><span class="on"><span class="n">02</span><span data-i18n="stage2">規格</span></span><span><span class="n">03</span><span data-i18n="stage3">實作</span></span><span><span class="n">04</span><span data-i18n="stage4">驗收</span></span></div>
    </div>
  </div>
</section>

<!-- WIRE TICKER -->
<section class="wire" data-od-id="wire" aria-label="核心技術流動帶">
  <div class="container wire-inner">
    <div class="wire-left">
      <span class="wire-mark"><span class="wire-pulse"></span></span>
      <span class="wire-title"><b>Engineering loop</b><span data-i18n="wireSub">從需求到測試與上線</span></span>
    </div>
    <div class="wire-rows">
      <div class="wire-row">
        <div class="marquee-track">
          <span class="wire-item"><span class="wire-dot">·</span><span class="wire-name">MarTech</span></span>
          <span class="wire-item"><span class="wire-dot">·</span><span class="wire-name">Automation</span></span>
          <span class="wire-item"><span class="wire-dot">·</span><span class="wire-name">AI Coding</span></span>
          <span class="wire-item"><span class="wire-dot">·</span><span class="wire-name">Full-stack</span></span>
          <span class="wire-item"><span class="wire-dot">·</span><span class="wire-name">Testing</span></span>
          <span class="wire-item"><span class="wire-dot">·</span><span class="wire-name">MarTech</span></span>
          <span class="wire-item"><span class="wire-dot">·</span><span class="wire-name">Automation</span></span>
          <span class="wire-item"><span class="wire-dot">·</span><span class="wire-name">AI Coding</span></span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION II: PROFESSIONAL WORK -->
<section class="capabilities" id="professional-work" data-od-id="professional-work">
  <div class="container"><div class="sec-rule"><span class="roman">II.</span><span class="meta-grp"><span data-i18n="workSecRule">專業工作 / Greenpeace Taiwan</span><span class="dot-mark">•</span><span data-i18n="workSecSub">網站、數據、整合</span></span><span>002 / 006</span></div></div>
  <div class="container capabilities-grid">
    <div class="capabilities-art" data-reveal="left">
      <span class="corner tl"></span><span class="corner br"></span>
      <img src="/assets/images/capabilities.png" width="1024" height="1024" alt="抽象模組拼貼，象徵跨平台整合" />
      <div class="ribbon"><b data-i18n="workRole">WEB DEVELOPMENT · MARTECH · AUTOMATION · System Integration</b></div>
    </div>
    <div class="capabilities-copy" data-reveal>
      <span class="label"><span data-i18n="workCompany">Greenpeace Taiwan</span> <span class="ix">· Nº 02</span></span>
      <h2 class="display" data-i18n="workHeading">在綠色和平的工作<span class="dot">.</span></h2>
      <p class="lead" style="margin-bottom:8px;"><b data-i18n="workPeriod">任職期間｜2016/10 – 2026/06</b></p>
      <p class="lead" data-i18n="workBio">參與綠色和平的網站開發與數位平台維運，涵蓋前端頁面、MarTech、數據追蹤、CRM、API 跨系統整合、自動化工作流程與跨平台問題排查，並與各部門合作推動方案落地。</p>
      <div class="cards">
        <article class="card" data-reveal data-od-id="capability-card-web">
          <div class="num">01<span class="tag">Web</span></div>
          <h3 data-i18n="work1Title">網站與數位倡議</h3>
          <p data-i18n="work1Desc">負責網站、倡議與募款相關頁面的開發、維護與問題排查，支援連署與募款 Campaign 上線。</p>
        </article>
        <article class="card" data-reveal data-od-id="capability-card-martech">
          <div class="num">02<span class="tag">Data</span></div>
          <h3 data-i18n="work2Title">MarTech 與數據追蹤</h3>
          <p data-i18n="work2Desc">管理與整合 GA4、Google Tag Manager、Google Ads、Google Search Console、HubSpot、Salesforce Marketing Cloud 等數位平台的數據追蹤。</p>
        </article>
        <article class="card" data-reveal data-od-id="capability-card-debug">
          <div class="num">03<span class="tag">RCA</span></div>
          <h3 data-i18n="work3Title">跨平台問題調查與排除</h3>
          <p data-i18n="work3Desc">調查並解決跨平台之間的資料不一致與串接異常，找出根本原因並協調相關人員修復。</p>
        </article>
        <article class="card" data-reveal data-od-id="capability-card-automation">
          <div class="num">04<span class="tag">Ops</span></div>
          <h3 data-i18n="work4Title">系統整合與自動化</h3>
          <p data-i18n="work4Desc">透過 API、n8n、Cloud Run 與自動化流程處理跨系統資料同步、定期排程檢查，以及網站、內容與流量異常監控。</p>
        </article>
      </div>
      <div class="delivery-commitment" data-reveal>
        <b data-i18n="work5Title">跨部門需求與交付</b>：
        <span data-i18n="work5Desc">同時負責跨部門需求與交付：與各部門合作，將業務需求轉換為可執行的網站、數據與系統方案，並完成測試、驗收與後續維運。</span>
      </div>
    </div>
  </div>
</section>

<!-- SECTION III: PROJECTS -->
<section class="labs" id="projects" data-od-id="representative-work">
  <div class="container"><div class="sec-rule"><span class="roman">III.</span><span class="meta-grp"><span data-i18n="projSecRule">成果索引 / 代表性頁面與專案</span><span class="dot-mark">•</span><span>05 entries</span></span><span>003 / 006</span></div></div>
  <div class="container">
    <div class="labs-head">
      <div data-reveal>
        <span class="label" data-i18n="projIndexLabel">成果索引 <span class="ix">· Nº 03</span></span>
        <h2 class="display" style="margin-top:20px;" data-i18n="projIndexTitle">做過的專案<span class="dot">.</span></h2>
      </div>
      </div>
    <div class="labs-meta">
      <span class="ring">05</span>
      <div class="meta-text" data-i18n="labsMetaText"><b>Selected outputs</b>網站開發<br/>自動化流程<br/>AI 與 ML 實作</div>
    </div>

    <!-- Tier 1: Labs 5 Cards -->
    <div class="labs-grid">
      <!-- Card 1: Online Donation -->
      <article class="lab" data-category="work" data-reveal data-od-id="lab-donation">
        <div class="lab-img">
          <span class="badge" data-i18n="badgeWork">網站</span>
          <img src="/assets/images/lab-1.png" width="768" height="1024" alt="抽象編輯拼貼，象徵線上捐款流程" />
        </div>
        <div class="num-row"><span>Nº 01</span><span>Greenpeace</span></div>
        <h4 data-i18n="rep1Title">🌳 線上捐款頁面</h4>
        <p data-i18n="rep1Desc">參與綠色和平線上募款網站的開發與維護，負責頁面實作、數據與事件追蹤，以及與既有數位平台和相關系統的串接。</p>
        <a class="arrow-mark" href="https://www.greenpeace.org.tw/donation-general-general" target="_blank" rel="noopener noreferrer" aria-label="查看 Greenpeace Taiwan 線上捐款頁面">↗</a>
      </article>

      <!-- Card 2: Ocean Protection Petition -->
      <article class="lab" data-category="work" data-reveal data-od-id="lab-oceans">
        <div class="lab-img">
          <span class="badge" data-i18n="badgeWork">網站</span>
          <img src="/assets/images/lab-2.png" width="768" height="1024" alt="抽象編輯拼貼，象徵海洋保護倡議" />
        </div>
        <div class="num-row"><span>Nº 02</span><span>Greenpeace</span></div>
        <h4 data-i18n="rep2Title">🐋 海洋保護連署頁面</h4>
        <p data-i18n="rep2Desc">參與線上連署頁面的開發與維護，追蹤數據、支持者紀錄與後續 CRM／行銷流程。</p>
        <a class="arrow-mark" href="https://www.greenpeace.org.tw/petition-oceans-sanctuaries-mw" target="_blank" rel="noopener noreferrer" aria-label="查看 Greenpeace Taiwan 海洋保護連署頁面">↗</a>
      </article>

      <!-- Card 3: myBookLM -->
      <article class="lab" data-category="ai" data-reveal data-od-id="lab-mybooklm">
        <div class="lab-img">
          <span class="badge">AI / RAG</span>
          <img src="/assets/images/lab-3.png" width="768" height="1024" alt="抽象編輯拼貼，象徵知識庫問答" />
        </div>
        <div class="num-row"><span>Nº 03</span><span>myBookLM</span></div>
        <h4 data-i18n="cardMyBookLMTitle">myBookLM</h4>
        <p data-i18n="cardMyBookLMDesc">可在本機使用的 NotebookLM 替代方案。使用者可自行選擇 AI Provider，匯入 PDF 建立知識庫，再用 RAG 檢索與問答。</p>
        <a class="arrow-mark" href="https://github.com/newesp/myBookLM" target="_blank" rel="noopener noreferrer" aria-label="查看 myBookLM 原始碼庫">↗</a>
      </article>

      <!-- Card 4: ai-social-publisher -->
      <article class="lab" data-category="ai" data-reveal data-od-id="lab-social">
        <div class="lab-img">
          <span class="badge">AI / Agent</span>
          <img src="/assets/images/lab-4.png" width="768" height="1024" alt="抽象編輯拼貼，象徵社群媒體發布平台" />
        </div>
        <div class="num-row"><span>Nº 04</span><span data-i18n="cardSocialTitle">AI 社群發文與 AI LINE 客服</span></div>
        <h4 data-i18n="cardSocialTitle">AI 社群發文與 AI LINE 客服</h4>
        <p data-i18n="cardSocialDesc">產生社群貼文與圖片並排程發布；LINE AI 客服可自動回覆，需要時由真人接手。</p>
        <a class="arrow-mark" href="https://github.com/newesp/ai-social-publisher" target="_blank" rel="noopener noreferrer" aria-label="查看 ai-social-publisher 原始碼庫">↗</a>
      </article>

      <!-- Card 5: GitHub Public Repos -->
      <article class="lab" data-category="all" data-reveal data-od-id="lab-github">
        <div class="lab-img">
          <span class="badge" data-i18n="badgeCode">Github</span>
          <img src="/assets/images/lab-5.png" width="768" height="1024" alt="抽象編輯拼貼，象徵公開原始碼專案" />
        </div>
        <div class="num-row"><span>Nº 05</span><span>GitHub</span></div>
        <h4 data-i18n="cardGithubTitle">公開原始碼庫</h4>
        <p data-i18n="cardGithubDesc">收錄我做過的 AI、自動化、資料處理與全端開發專案。</p>
        <a class="arrow-mark" href="https://github.com/newesp" target="_blank" rel="noopener noreferrer" aria-label="查看 GitHub 公開原始碼庫">↗</a>
      </article>
    </div>

    <!-- Tier 2: Selected AI Projects -->
    <section class="tight" data-od-id="selected-projects">
      <div class="work">
        <div class="work-rule">
          <span class="roman">VI.</span>
          <span style="display:inline-flex;gap:24px;">
            <span data-i18n="featKicker">精選 AI 專案</span>
            <span style="color:var(--coral);">•</span>
            <span data-i18n="featKickerSub">實作與案例</span>
          </span>
          </div>
        <div class="work-grid">
          <div class="work-copy" data-reveal>
            <span class="label" data-i18n="featLabel">個人專案</span>
            <h2 data-i18n="featTitle">兩個有趣的 <em>AI 專案</em><span class="dot">.</span></h2>
            <a class="work-link" data-i18n="featViewAll" href="https://github.com/newesp" target="_blank" rel="noopener noreferrer">查看所有公開專案</a>
          </div>
        <div class="work-card" data-reveal data-od-id="project-novel-generator">
          <div class="label-row">
            <span class="small-label" data-i18n="feat1Tag">AI 影片展示</span>
            <span class="index">01 / 02</span>
          </div>
          <h3 data-i18n="feat1Title">小說生成器</h3>
          <p data-i18n="feat1Desc">從故事、章節與分鏡開始，接著產生 AI 圖像，最後輸出影片。</p>
          <div class="img">
            <img src="/assets/images/work-1.png" width="480" height="360" alt="novel-generator 完成影片的 YouTube 縮圖" />
          </div>
          <div class="meta-row">
              <a href="https://youtu.be/m1XNqvH0ew8" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:none;" data-i18n="feat1Cta1">觀看影片 ↗</a>
              <a href="https://github.com/newesp/novel-generator" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:none;" data-i18n="feat1Cta2">查看原始碼庫 ↗</a>
            </div>
        </div>
        <div class="work-card alt" data-reveal data-od-id="project-lottery-ml">
          <div class="label-row">
            <span class="small-label" data-i18n="feat2Tag">機器學習案例</span>
            <span class="index">02 / 02</span>
          </div>
          <h3 data-i18n="feat2Title">台灣威力彩機器學習案例</h3>
          <p data-i18n="feat2Desc">以台灣威力彩資料示範收集、清洗與模型訓練；重點是完整的機器學習流程，不宣稱能預測開獎結果。</p>
          <div class="img">
            <img src="/assets/images/work-2.png" width="1200" height="600" alt="Lottery-ML-Portfolio GitHub 專案預覽圖" />
          </div>
          <div class="meta-row">
              <a href="https://newesp.github.io/Lottery-ML-Portfolio/" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:none;" data-i18n="feat2Cta1">專案展示 ↗</a>
              <a href="https://github.com/newesp/Lottery-ML-Portfolio" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:none;" data-i18n="feat2Cta2">查看原始碼庫 ↗</a>
            </div>
        </div>
        </div>
      </div>
    </section>

    <!-- Tier 3: Dynamic GitHub Pipeline -->
    <div class="github-pipeline" id="github-projects" data-reveal>
      <div class="gh-header">
        <div class="gh-title-group">
          <span class="kicker" data-i18n="ghSectionKicker">開放原始碼 · OPEN SOURCE</span>
          <h3 data-i18n="ghSectionTitle">GitHub 專案</h3>
        </div>
        <div class="gh-search-wrap">
          <input
            type="text"
            id="project-search"
            class="gh-search-input"
            placeholder="輸入名稱、描述、語言或主題…"
            data-i18n-placeholder="ghSearchPlaceholder"
            aria-label="搜尋專案"
            data-i18n-aria="ghSearchLabel"
          />
          <button type="button" class="clear-search" hidden title="清除搜尋" data-i18n-title="ghClearSearch">✕</button>
        </div>
      </div>
      <div id="result-count" class="gh-count" data-i18n="ghStatusConnecting">正在連線 GitHub…</div>
      <div id="project-live" class="visually-hidden" aria-live="polite"></div>
      <div id="project-list" class="gh-list-grid" aria-busy="true">
        <div class="status-panel" role="status">
          <div class="loader" aria-hidden="true"></div>
          <h3 data-i18n="ghLoadingTitle">正在載入專案</h3>
          <p data-i18n="ghLoadingDesc">從 GitHub 取得公開原始碼庫…</p>
        </div>
      </div>
      <nav id="pagination" class="pagination" hidden aria-label="專案分頁導覽"></nav>
    </div>

  </div>
</section>

<!-- SECTION IV: METHOD & SKILLS MATRIX -->
<section class="method" id="skills" data-od-id="method">
  <div class="container"><div class="sec-rule"><span class="roman">IV.</span><span class="meta-grp"><span data-i18n="methodSecRule">方法 / Loop Engineering & 專業技能</span><span class="dot-mark">•</span><span>04 stages</span></span><span>004 / 006</span></div></div>
  <div class="container">
    <div class="method-head">
      <div data-reveal>
        <span class="label" data-i18n="methodLabel">工程方法 <span class="ix">· Nº 04</span></span>
        <h2 class="display" style="margin-top:20px;" data-i18n="methodTitle">使用 AI 加速開發流程<span class="dot">.</span></h2>
      </div>
      <div class="right" data-reveal="right">
        <span class="plus">+</span>
        <p data-i18n="methodQuote">用 AI 來加速流程：開規格、實作、測試、Code Review 和人工驗收用來確認品質。</p>
      </div>
    </div>

    <!-- 4 Stages -->
    <div class="method-grid">
      <article class="method-step" data-reveal>
        <div class="num">01</div>
        <h4 data-i18n="step1Title">需求探索 <span class="arrow-r">→</span></h4>
        <p data-i18n="step1Desc">先釐清要解決的問題、限制與風險，再寫規格、排出系統架構。</p>
        <div class="img"><img src="/assets/images/method-1.png" width="816" height="816" alt="抽象拼貼，象徵需求探索" /></div>
      </article>
      <article class="method-step" data-reveal>
        <div class="num">02</div>
        <h4 data-i18n="step2Title">AI 輔助開發 <span class="arrow-r">→</span></h4>
        <p data-i18n="step2Desc">依照規格使用 AI Coding 與自動化腳本完成實作。</p>
        <div class="img"><img src="/assets/images/method-2.png" width="816" height="816" alt="抽象拼貼，象徵 AI 輔助開發" /></div>
      </article>
      <article class="method-step" data-reveal>
        <div class="num">03</div>
        <h4 data-i18n="step3Title">測試與檢查 <span class="arrow-r">→</span></h4>
        <p data-i18n="step3Desc">使用 pytest、Jest、單元／整合測試、Coverage Gate 與 AI Code Review 找出問題。</p>
        <div class="img"><img src="/assets/images/method-3.png" width="816" height="816" alt="抽象拼貼，象徵測試與除錯" /></div>
      </article>
      <article class="method-step" data-reveal>
        <div class="num">04</div>
        <h4 data-i18n="step4Title">部署與迭代</h4>
        <p data-i18n="step4Desc">透過 CI/CD、Cloud Build 與 Cloud Run 上線，再由人工驗收並持續監控。</p>
        <div class="img"><img src="/assets/images/method-4.png" width="816" height="816" alt="抽象拼貼，象徵部署與迭代" /></div>
      </article>
    </div>

    <!-- Skills Matrix (6 Groups) -->
    <div class="skills-matrix-wrap" data-reveal>
      <div class="skills-matrix-header">
        <span class="matrix-kicker" data-i18n="skillsKicker">核心技術 · CAPABILITY MATRIX</span>
        <h3 data-i18n="skillsTitle">專業技能</h3>
      </div>
      <div class="skills-matrix-grid">
        <!-- Group 1 -->
        <article class="skill-matrix-card">
          <div class="num">01 · AI Engineering</div>
          <h3 data-i18n="skill1Group">AI 驅動軟體開發</h3>
          <ul>
            <li data-i18n="skill_loop_eng">Loop Engineering</li>
            <li data-i18n="skill_spec_dev">Spec-driven Development</li>
            <li data-i18n="skill_ai_coding">AI Coding</li>
            <li data-i18n="skill_ai_review">AI Code Review</li>
            <li data-i18n="skill_ai_test">AI-assisted Testing &amp; Debugging</li>
            <li data-i18n="skill_human_acc">Human Acceptance</li>
          </ul>
        </article>

        <!-- Group 2 -->
        <article class="skill-matrix-card">
          <div class="num">02 · Automation</div>
          <h3 data-i18n="skill2Group">自動化與系統整合</h3>
          <ul>
            <li data-i18n="skill_rest_api">REST API</li>
            <li data-i18n="skill_api_int">API 整合</li>
            <li data-i18n="skill_n8n">n8n</li>
            <li data-i18n="skill_auto_script">自動化腳本</li>
            <li data-i18n="skill_cron">排程任務</li>
            <li data-i18n="skill_data_proc">資料處理</li>
            <li data-i18n="skill_sync">跨平台資料同步</li>
            <li data-i18n="skill_monitor">異常監控</li>
          </ul>
        </article>

        <!-- Group 3 -->
        <article class="skill-matrix-card">
          <div class="num">03 · Full-Stack</div>
          <h3 data-i18n="skill3Group">Web 與應用程式開發</h3>
          <ul>
            <li data-i18n="skill_react">React</li>
            <li data-i18n="skill_next">Next.js</li>
            <li data-i18n="skill_node">Node.js</li>
            <li data-i18n="skill_python">Python</li>
            <li data-i18n="skill_php">PHP</li>
            <li data-i18n="skill_web_app">Web Application Development</li>
          </ul>
        </article>

        <!-- Group 4 -->
        <article class="skill-matrix-card">
          <div class="num">04 · Quality</div>
          <h3 data-i18n="skill4Group">測試與工程品質</h3>
          <ul>
            <li data-i18n="skill_pytest">pytest</li>
            <li data-i18n="skill_jest">Jest</li>
            <li data-i18n="skill_unit_test">Unit Test</li>
            <li data-i18n="skill_int_test">Integration Test</li>
            <li data-i18n="skill_cov_gate">Coverage Gate</li>
            <li data-i18n="skill_code_rev">Code Review</li>
            <li data-i18n="skill_rca">Root Cause Analysis</li>
            <li data-i18n="skill_cicd">CI/CD</li>
          </ul>
        </article>

        <!-- Group 5 -->
        <article class="skill-matrix-card">
          <div class="num">05 · Growth &amp; MarTech</div>
          <h3 data-i18n="skill5Group">MarTech 與數位平台</h3>
          <ul>
            <li data-i18n="skill_ga4">GA4</li>
            <li data-i18n="skill_gtm">Google Tag Manager</li>
            <li data-i18n="skill_gads">Google Ads</li>
            <li data-i18n="skill_gsc">Google Search Console</li>
            <li data-i18n="skill_hubspot">HubSpot</li>
            <li data-i18n="skill_sfmc">Salesforce Marketing Cloud</li>
            <li data-i18n="skill_sfl">Salesforce Lightning</li>
            <li data-i18n="skill_wp">WordPress</li>
          </ul>
        </article>

        <!-- Group 6 -->
        <article class="skill-matrix-card">
          <div class="num">06 · DevOps</div>
          <h3 data-i18n="skill6Group">Cloud 與 CI/CD</h3>
          <ul>
            <li data-i18n="skill_docker">Docker</li>
            <li data-i18n="skill_gha">GitHub Actions</li>
            <li data-i18n="skill_gcb">Google Cloud Build</li>
            <li data-i18n="skill_cloudrun">Cloud Run</li>
          </ul>
        </article>
      </div>
    </div>

  </div>
</section>

<!-- SECTION V: CERTIFICATIONS -->
<section class="testimonial" id="certifications" data-od-id="certifications">
  <div class="container"><div class="sec-rule"><span class="roman">V.</span><span class="meta-grp"><span data-i18n="certsSecRule">證照與認證 / Credentials</span><span class="dot-mark">•</span><span data-i18n="certsSecSub">專業能力檢定</span></span><span>005 / 006</span></div></div>
  <div class="container">
    <div class="testimonial-grid">
      <div class="testimonial-copy" data-reveal>
        <span class="label" data-i18n="certsTitle">證照與認證</span>

        <div class="divider"></div>
        <div class="certs-container">
          <div class="cert-card-wrap">
            <div class="cert-info">
              <h3 data-i18n="cert1Title">🎓 iPAS AI 應用規劃師（機器學習）－中級</h3>
              <p class="cert-issuer" data-i18n="cert1Issuer">經濟部產業人才能力鑑定（iPAS）</p>
            </div>
            <div class="cert-actions">
              <a href="/assets/images/cert-ipas-ai.jpg" class="cert-btn glightbox" data-type="image" target="_blank" rel="noopener noreferrer" data-i18n="cert1Cta">查看證書 ↗</a>

            </div>
          </div>
        </div>
      </div>
      <div class="testimonial-art" data-reveal="right" style="background-image: url('/assets/images/testimonial.png'); background-size: contain; background-repeat: no-repeat; background-position: center;" role="img" aria-label="抽象編輯拼貼，象徵持續學習與技術認證">
      </div>
    </div>
  </div>
</section>

<!-- SECTION VI: CONTACT -->
<section class="cta" id="contact" data-od-id="contact">
  <div class="container"><div class="sec-rule"><span class="roman">VI.</span><span class="meta-grp"><span data-i18n="contactSecRule">聯絡 / 合作</span><span class="dot-mark">•</span><span data-i18n="contactSecSub">開始對話</span></span><span>006 / 006</span></div></div>
  <div class="container">
    <div class="cta-grid">
      <div data-reveal>
        <span class="label" data-i18n="contactLabel">聯絡我 <span class="ix">· Nº 06</span></span>
        <h2 class="display" data-i18n="contactTitle">正在找能把需求做成系統的人？<em>歡迎找我聊聊</em><span class="dot">.</span></h2>
        <p class="lead" data-i18n="contactLead">我熟悉網站開發、MarTech、API 整合、自動化與 AI 應用，也能從需求釐清一路做到測試與上線。</p>
        <div class="cta-actions">
          <a class="btn btn-primary" data-od-id="cta-email" href="mailto:newesp@gmail.com"><span data-i18n="contactCtaEmail">寄信給我</span> <span class="arrow">→</span></a>
          <a class="email-pill" href="https://github.com/newesp" target="_blank" rel="noopener noreferrer"><span data-i18n="contactCtaGithub">查看 GitHub</span> <span class="arrow-circle">↗</span></a>
        </div>
        <div class="cta-foot">
          <span>EMAIL：newesp@gmail.com</span>
          <span style="margin-left:auto;">Taipei · 2026</span>
        </div>
      </div>
      <div class="cta-art" data-reveal="right">
        <img src="/assets/images/cta.png" width="1024" height="1024" alt="抽象拼貼，象徵新的合作與產品啟動" />
        <div class="index">Nº 06</div>
        <div class="ribbon">SONG CHING LIN · FIN.</div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->

</div>

<!-- SCRIPTS -->
</template>
