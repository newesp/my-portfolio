// Runtime behavior preserved from the original single-file portfolio.
/* GLightbox Init */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: false,
      closeOnOutsideClick: true
    });
  }

/* Scroll-reveal observer */
  (function () {
    var elements = document.querySelectorAll('[data-reveal]:not([data-revealed])');
    if (!elements.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      for (var i = 0; i < elements.length; i++) elements[i].dataset.revealed = 'true';
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting) continue;
        entries[i].target.dataset.revealed = 'true';
        observer.unobserve(entries[i].target);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    for (var j = 0; j < elements.length; j++) observer.observe(elements[j]);
  })();

  /* Headroom-style sticky header */
  (function () {
    var nav = document.querySelector('header.nav');
    if (!nav) return;
    var SHOW_TOP = 100;
    var DELTA = 6;
    var lastY = window.scrollY || 0;
    function onScroll() {
      var y = window.scrollY || 0;
      var d = y - lastY;
      if (y <= SHOW_TOP) {
        nav.classList.remove('is-hidden');
      } else if (d > DELTA) {
        nav.classList.add('is-hidden');
      } else if (d < -DELTA) {
        nav.classList.remove('is-hidden');
      }
      lastY = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  })();

(() => {
    'use strict';
    const I18N = {
    'zh-Hant': {
      docTitle: 'Song Ching Lin — 自動化、MarTech 與 AI 應用工程作品集',
      topbarFiledUnder: '工程 · 自動化',
      topbarLocation: '台北 · 可遠端協作',
      topbarStatus: '目前可聯絡',
      navMetaTitle: '程式作品集',
      navWork: '專業工作',
      navProjects: '個人專案',
      navSkills: '專業技能',
      navCerts: '證照與認證',
      navContact: '聯絡',
      heroSecRule: '封面 / 工程實踐',
      heroLabel: '自動化與全端工程師',
      heroTitle: '把複雜流程做成<em>可靠系統</em><span class="dot">.</span>',
      heroLede: '我主要做 MarTech、系統整合與 AI 輔助開發，從釐清需求、寫程式、測試到上線，讓流程真的能用，也方便後續維護。',
      heroCtaProj: '查看專案',
      heroCtaGithub: 'GitHub 個人頁面',
      heroFootMeta: '↳ 需求探索 → 系統架構 → 部署上線 → 持續迭代',
      stage1: '探索',
      stage2: '規格',
      stage3: '實作',
      stage4: '驗收',
      wireSub: '從需求到測試與上線',
      workSecRule: '專業工作 / Greenpeace Taiwan',
      workSecSub: '網站、數據、整合',
      workSectionTitle: '專業工作',
      workCompany: 'Greenpeace Taiwan',
      workRole: 'WEB DEVELOPMENT · MARTECH · AUTOMATION · System Integration',
      workPeriod: '任職期間｜2016/10 – 2026/06',
      workHeading: '在綠色和平的工作<span class="dot">.</span>',
      workBio: '參與綠色和平的網站開發與數位平台維運，涵蓋前端頁面、MarTech、數據追蹤、CRM、API 跨系統整合、自動化工作流程與跨平台問題排查，並與各部門合作推動方案落地。',
      work1Title: '網站與數位倡議',
      work1Desc: '負責網站、倡議與募款相關頁面的開發、維護與問題排查，支援連署與募款 Campaign 上線。',
      work2Title: 'MarTech 與數據追蹤',
      work2Desc: '管理與整合 GA4、Google Tag Manager、Google Ads、Google Search Console、HubSpot、Salesforce Marketing Cloud 等數位平台的數據追蹤。',
      work3Title: '跨平台問題調查與排除',
      work3Desc: '調查並解決跨平台之間的資料不一致與串接異常，找出根本原因並協調相關人員修復。',
      work4Title: '系統整合與自動化',
      work4Desc: '透過 API、n8n、Cloud Run 與自動化流程處理跨系統資料同步、定期排程檢查，以及網站、內容與流量異常監控。',
      work5Title: '跨部門需求與交付',
      work5Desc: '同時負責跨部門需求與交付：與各部門合作，將業務需求轉換為可執行的網站、數據與系統方案，並完成測試、驗收與後續維運。',
      projSecRule: '成果索引 / 代表性頁面與專案',
      projIndexLabel: '成果索引 · Nº 03',
      projIndexTitle: '做過的專案<span class="dot">.</span>',
      filterAll: '全部',
      filterWork: '網站',
      filterAi: 'AI',
      labsMetaText: '<b>Selected outputs</b>網站開發<br/>自動化流程<br/>AI & ML 實作',
      badgeWork: '網站',
      badgeCode: 'GITHUB',
      rep1Title: '🌳 線上捐款頁面',
      rep1Desc: '參與綠色和平線上募款網站的開發與維護，負責頁面實作、數據與事件追蹤，以及與既有數位平台和相關系統的串接。',
      rep2Title: '🐋 海洋保護連署頁面',
      rep2Desc: '參與線上連署頁面的開發與維護，追蹤數據、支持者紀錄與後續 CRM／行銷流程。',
      cardMyBookLMTitle: 'myBookLM',
      cardMyBookLMDesc: '可在本機使用的 NotebookLM 替代方案。使用者可自行選擇 AI Provider，匯入 PDF 建立知識庫，再用 RAG 檢索與問答。',
      cardSocialTitle: 'AI 社群發文與 AI LINE 客服',
      cardSocialDesc: '產生社群貼文與圖片並排程發布；LINE AI 客服可自動回覆，需要時由真人接手。',
      cardGithubTitle: '公開原始碼庫',
      cardGithubDesc: '收錄我做過的 AI、自動化、資料處理與全端開發專案。',
      featKicker: '精選 AI 專案',
      featKickerSub: '實作與案例',
      featLabel: '個人專案',
      featTitle: '兩個有趣的 <em>AI 專案</em><span class="dot">.</span>',
      feat1Title: '小說生成器',
      feat2Title: '台灣威力彩機器學習案例',
      featViewAll: '查看所有公開專案',
      feat1Tag: 'AI 影片展示',
      feat1Desc: '從故事、章節與分鏡開始，接著產生 AI 圖像，最後輸出影片。',
      feat1Cta1: '觀看影片 ↗',
      feat1Cta2: '查看原始碼庫 ↗',
      feat2Tag: '機器學習案例',
      feat2Desc: '以台灣威力彩資料示範收集、清洗與模型訓練；重點是完整的機器學習流程，不宣稱能預測開獎結果。',
      feat2Cta1: '專案展示 ↗',
      feat2Cta2: '查看原始碼庫 ↗',
      ghSectionKicker: '開放原始碼 · OPEN SOURCE',
      ghSectionTitle: 'GitHub 專案',
      ghSearchLabel: '搜尋專案',
      ghSearchPlaceholder: '輸入名稱、描述、語言或主題…',
      ghClearSearch: '清除搜尋',
      ghStatusConnecting: '正在連線 GitHub…',
      ghLoadingTitle: '正在載入專案',
      ghLoadingDesc: '從 GitHub 取得公開原始碼庫…',
      ghErrNetwork: '無法連線至伺服器，請檢查網路後重試。',
      ghErrBusy: '伺服器暫時忙碌，請稍後再試。',
      ghErrServer: '伺服器回傳錯誤（HTTP {0}）。',
      ghErrData: '伺服器回傳了無法辨識的資料格式。',
      ghErrLimit: 'GitHub API 額度已用完',
      ghErrLoad: '無法載入專案',
      ghErrUnknown: '發生未預期的錯誤，請稍後再試。',
      ghTimeUnknown: '更新時間未知',
      ghTimeFuture: '更新時間在未來',
      ghTimeToday: '今天更新',
      ghTimeDays: '{0} 天前更新',
      ghTimeMonths: '{0} 個月前更新',
      ghTimeYears: '{0} 年前更新',
      ghRepoLive: '已上線',
      ghRepoSrc: '原始碼',
      ghRepoDemo: '開啟展示 ↗',
      ghRepoLink: 'GitHub 原始碼庫 ↗',
      ghRepoNoDesc: '此 repository 尚未提供說明。',
      ghPagePrev: '← 上一頁',
      ghPageNext: '下一頁 →',
      ghPageAria: '第 {0} 頁',
      ghFound: '找到 {0} 個符合的專案',
      ghTotal: '共 {0} 個公開專案',
      ghNoResultTitle: '找不到符合的專案',
      ghNoResultDesc: '請改用其他名稱、描述、語言或 topic 關鍵字。',
      ghLoadFail: '載入失敗',
      ghPageStatus: '顯示第 {0} 頁，共 {1} 頁，{2} 個專案',
      ghRetry: '重新載入',
      ghRepoTotalAria: 'GitHub — {0} 個公開專案',
      methodSecRule: '方法 / Engineering Loop & 專業技能',
      methodLabel: '工程方法 · Nº 04',
      methodTitle: '使用 AI 加速開發流程<span class="dot">.</span>',
      methodQuote: '用 AI 來加速流程：開規格、實作、測試、Code Review 和人工驗收用來確認品質。',
      step1Title: '需求探索 →',
      step1Desc: '先釐清要解決的問題、限制與風險，再寫規格、排出系統架構。',
      step2Title: 'AI Coding →',
      step2Desc: '依照規格使用 AI Coding 與自動化腳本完成實作。',
      step3Title: '測試與檢查 →',
      step3Desc: '使用 pytest、Jest、單元／整合測試、Coverage Gate 與 AI Code Review 找出問題。',
      step4Title: '部署與迭代',
      step4Desc: '透過 CI/CD、Cloud Build 與 Cloud Run 上線，再由人工驗收並持續監控。',
      skillsKicker: '核心技術 · SKILLS MATRIX',
      skillsTitle: '專業技能',
      skill1Group: 'AI 驅動軟體開發',
      skill2Group: '自動化與系統整合',
      skill3Group: 'Web 與應用程式開發',
      skill4Group: '測試與工程品質',
      skill5Group: 'MarTech 與數位平台',
      skill6Group: 'Cloud 與 CI/CD',
      skill_loop_eng: 'Loop Engineering',
      skill_spec_dev: 'Spec-driven Development',
      skill_ai_coding: 'AI Coding',
      skill_ai_review: 'AI Code Review',
      skill_ai_test: 'AI-assisted Testing & Debugging',
      skill_human_acc: 'Human Acceptance',
      skill_rest_api: 'REST API',
      skill_api_int: 'API 整合',
      skill_n8n: 'n8n',
      skill_auto_script: '自動化腳本',
      skill_cron: '排程任務',
      skill_data_proc: '資料處理',
      skill_sync: '跨平台資料同步',
      skill_monitor: '異常監控',
      skill_react: 'React',
      skill_next: 'Next.js',
      skill_node: 'Node.js',
      skill_python: 'Python',
      skill_php: 'PHP',
      skill_web_app: 'Web Application Development',
      skill_pytest: 'pytest',
      skill_jest: 'Jest',
      skill_unit_test: 'Unit Test',
      skill_int_test: 'Integration Test',
      skill_cov_gate: 'Coverage Gate',
      skill_code_rev: 'Code Review',
      skill_rca: 'Root Cause Analysis',
      skill_cicd: 'CI/CD',
      skill_ga4: 'GA4',
      skill_gtm: 'Google Tag Manager',
      skill_gads: 'Google Ads',
      skill_gsc: 'Google Search Console',
      skill_hubspot: 'HubSpot',
      skill_sfmc: 'Salesforce Marketing Cloud',
      skill_sfl: 'Salesforce Lightning',
      skill_wp: 'WordPress',
      skill_docker: 'Docker',
      skill_gha: 'GitHub Actions',
      skill_gcb: 'Google Cloud Build',
      skill_cloudrun: 'Cloud Run',
      certsSecRule: '證照與認證 / Credentials',
      certsSecSub: '專業能力檢定',
      certsTitle: '證照與認證',
      certsHeading: '「讓 AI 進入完整開發迴圈，並以<em>測試與人工驗收</em>確保成果可信。」',
      authorRole: 'MarTech 與自動化工程師',
      cert1Title: '🎓 iPAS AI 應用規劃師（機器學習）－中級',
      cert1Issuer: '經濟部產業人才能力鑑定（iPAS）',
      cert1Cta: '查看證書 ↗',
      certVerifyLink: '雲端驗證 ↗',
      contactSecRule: '聯絡 / 合作',
      contactSecSub: '開始對話',
      contactLabel: '聯絡我 · Nº 06',
      contactTitle: '正在找能把需求做成系統的人？<em>歡迎找我聊聊</em><span class="dot">.</span>',
      contactLead: '我熟悉網站開發、MarTech、API 整合、自動化與 AI 應用，也能從需求釐清一路做到測試與上線。',
      contactCtaEmail: '寄信給我',
      contactCtaGithub: '查看 GitHub',
      footerBio: '這裡收錄我的 MarTech、自動化與 AI 專案，以及從需求、實作、測試到上線的工作方式。',
      footCol1: '作品集',
      footCol2: '專案作品',
      footCol3: '連結'
    },
    'en': {
      docTitle: 'Song Ching Lin — Automation, MarTech & AI Engineering Portfolio',
      topbarFiledUnder: 'Engineering · Automation',
      topbarLocation: 'Taipei · Open to Remote',
      topbarStatus: 'Available for work',
      navMetaTitle: 'Code Portfolio',
      navWork: 'Professional Work',
      navProjects: 'Projects',
      navSkills: 'Skills',
      navCerts: 'Certifications',
      navContact: 'Contact',
      heroSecRule: 'Cover / Engineering Practice',
      heroLabel: 'Automation & Full-Stack Engineer',
      heroTitle: 'Turning complex workflows into <em>reliable systems</em><span class="dot">.</span>',
      heroLede: 'My work spans MarTech, system integration, and AI-assisted development—from clarifying requirements and writing code to testing, launch, and maintenance.',
      heroCtaProj: 'View Projects',
      heroCtaGithub: 'GitHub Profile',
      heroFootMeta: '↳ Discovery → Architecture → Deployment → Iteration',
      stage1: 'Discovery',
      stage2: 'Spec',
      stage3: 'Code',
      stage4: 'Review',
      wireSub: 'From requirements to test and launch',
      workSecRule: 'Professional Work / Greenpeace Taiwan',
      workSecSub: 'Web, Data, Integration',
      workSectionTitle: 'Professional Work',
      workCompany: 'Greenpeace Taiwan',
      workRole: 'WEB DEVELOPMENT · MARTECH · AUTOMATION · System Integration',
      workPeriod: 'Tenure | 2016/10 – 2026/06',
      workHeading: 'Work at Greenpeace<span class="dot">.</span>',
      workBio: 'Participated in website development and digital platform maintenance for Greenpeace, covering frontend pages, MarTech, data tracking, CRM, API cross-system integration, automated workflows, and cross-platform troubleshooting, collaborating across teams to deliver solutions.',
      work1Title: 'Web & Digital Advocacy',
      work1Desc: 'Developed and maintained advocacy and fundraising pages, handled launches and troubleshooting, and supported campaigns across teams.',
      work2Title: 'MarTech & Data Tracking',
      work2Desc: 'Managed GA4, Google Tag Manager, Google Ads, Google Search Console, HubSpot, and Salesforce Marketing Cloud, including event tracking and data connections.',
      work3Title: 'Cross-Platform Issue Investigation & Troubleshooting',
      work3Desc: 'Traced data mismatches and integration errors across platforms, found where they started, and worked with the relevant teams to fix them.',
      work4Title: 'System Integration & Automation',
      work4Desc: 'Used APIs, n8n, and Cloud Run to sync data between systems, run scheduled checks, and monitor website, content, and traffic anomalies.',
      work5Title: 'Cross-Team Collaboration',
      work5Desc: 'Worked with requesting teams to clarify the problem and goal, then turned each request into concrete web, data, or system work through testing, acceptance, and maintenance.',
      projSecRule: 'Project Index / Representative Pages & Works',
      projIndexLabel: 'Project Index · Nº 03',
      projIndexTitle: 'Projects<span class="dot">.</span>',
      filterAll: 'All',
      filterWork: 'website',
      filterAi: 'AI',
      labsMetaText: '<b>Selected outputs</b>Web Dev<br/>Automated workflow<br/>AI & ML Works',
      badgeWork: 'website',
      badgeCode: 'GITHUB',
      rep1Title: '🌳 Donation Page',
      rep1Desc: 'Developed and maintained Greenpeace Taiwan\'s online donation pages, including page implementation, event tracking, and connections to existing digital platforms and backend systems.',
      rep2Title: '🐋 Oceans Petition Page',
      rep2Desc: 'Developed an ocean protection petition page and connected its interactions and event tracking to supporter records and later CRM and marketing work.',
      cardMyBookLMTitle: 'myBookLM',
      cardMyBookLMDesc: 'A local NotebookLM alternative. Users can choose an AI provider, import PDFs into a knowledge base, and search or ask questions with RAG.',
      cardSocialTitle: 'AI Social Publisher & LINE CS',
      cardSocialDesc: 'Generates social posts and images, schedules publishing, and answers LINE messages with AI while allowing a person to take over when needed.',
      cardGithubTitle: 'Public Repositories',
      cardGithubDesc: 'A collection of my AI, automation, data processing, and full-stack projects.',
      featKicker: 'Featured AI Projects',
      featKickerSub: 'IMPLEMENTATION & CASES',
      featLabel: 'Personal Projects',
      featTitle: 'Two interesting <em>AI projects</em><span class="dot">.</span>',
      feat1Title: 'Novel Generator',
      feat2Title: 'Taiwan Lottery ML Case',
      featViewAll: 'View All Public Repositories',
      feat1Tag: 'AI Video Showcase',
      feat1Desc: 'Starts with a story, chapters, and storyboards, then generates AI images and produces a video.',
      feat1Cta1: 'Watch Video ↗',
      feat1Cta2: 'View Source ↗',
      feat2Tag: 'Machine Learning',
      feat2Desc: 'Uses Taiwan Lottery data to demonstrate collection, cleaning, and model training. It shows the ML process without claiming to predict winning numbers.',
      feat2Cta1: 'Demo ↗',
      feat2Cta2: 'View Source ↗',
      ghSectionKicker: 'Open Source · PUBLIC REPOSITORIES',
      ghSectionTitle: 'GitHub Projects',
      ghSearchLabel: 'Search Projects',
      ghSearchPlaceholder: 'Enter name, description, language or topic...',
      ghClearSearch: 'Clear Search',
      ghStatusConnecting: 'Connecting to GitHub...',
      ghLoadingTitle: 'Loading Projects',
      ghLoadingDesc: 'Fetching public repositories from GitHub...',
      ghErrNetwork: 'Unable to connect to server, please check your network and try again.',
      ghErrBusy: 'Server is temporarily busy, please try again later.',
      ghErrServer: 'Server returned an error (HTTP {0}).',
      ghErrData: 'Server returned an unrecognizable data format.',
      ghErrLimit: 'GitHub API rate limit exceeded',
      ghErrLoad: 'Failed to load projects',
      ghErrUnknown: 'An unexpected error occurred, please try again later.',
      ghTimeUnknown: 'Update time unknown',
      ghTimeFuture: 'Update time in future',
      ghTimeToday: 'Updated today',
      ghTimeDays: 'Updated {0} days ago',
      ghTimeMonths: 'Updated {0} months ago',
      ghTimeYears: 'Updated {0} years ago',
      ghRepoLive: 'Live',
      ghRepoSrc: 'Source',
      ghRepoDemo: 'Open Demo ↗',
      ghRepoLink: 'GitHub Repository ↗',
      ghRepoNoDesc: 'This repository does not have a description yet.',
      ghPagePrev: '← Previous',
      ghPageNext: 'Next →',
      ghPageAria: 'Page {0}',
      ghFound: 'Found {0} matching projects',
      ghTotal: 'Total {0} public projects',
      ghNoResultTitle: 'No matching projects found',
      ghNoResultDesc: 'Please try a different name, description, language, or topic keyword.',
      ghLoadFail: 'Failed to load',
      ghPageStatus: 'Showing page {0} of {1}, {2} projects in total',
      ghRetry: 'Retry',
      ghRepoTotalAria: 'GitHub — {0} public repositories',
      methodSecRule: 'Method / Engineering Loop & Skills Matrix',
      methodLabel: 'Engineering Method · Nº 04',
      methodTitle: 'Accelerating Development with AI<span class="dot">.</span>',
      methodQuote: 'Accelerating the workflow with AI: specifications, implementation, testing, code review, and human acceptance to ensure quality.',
      step1Title: 'Requirement Discovery →',
      step1Desc: 'Clarify the problem, constraints, and risks, then write the specification and system architecture.',
      step2Title: 'AI Coding →',
      step2Desc: 'Follow the specification and implement it with AI Coding and automation scripts.',
      step3Title: 'Testing & Verification →',
      step3Desc: 'Use pytest, Jest, unit and integration tests, coverage gates, and AI Code Review to find problems.',
      step4Title: 'Deployment & Iteration',
      step4Desc: 'Deploy through CI/CD, Cloud Build, and Cloud Run, then complete human acceptance and continue monitoring.',
      skillsKicker: 'Core Capabilities · SKILLS MATRIX',
      skillsTitle: 'Technical Skills',
      skill1Group: 'AI-Driven Software Development',
      skill2Group: 'Automation & System Integration',
      skill3Group: 'Web & Application Development',
      skill4Group: 'Testing & Engineering Quality',
      skill5Group: 'MarTech & Digital Platforms',
      skill6Group: 'Cloud & CI/CD',
      skill_loop_eng: 'Loop Engineering',
      skill_spec_dev: 'Spec-driven Development',
      skill_ai_coding: 'AI Coding',
      skill_ai_review: 'AI Code Review',
      skill_ai_test: 'AI-assisted Testing & Debugging',
      skill_human_acc: 'Human Acceptance',
      skill_rest_api: 'REST API',
      skill_api_int: 'API Integration',
      skill_n8n: 'n8n',
      skill_auto_script: 'Automation Scripts',
      skill_cron: 'Scheduled Tasks / Cron',
      skill_data_proc: 'Data Processing',
      skill_sync: 'Cross-platform Data Sync',
      skill_monitor: 'Anomaly Monitoring',
      skill_react: 'React',
      skill_next: 'Next.js',
      skill_node: 'Node.js',
      skill_python: 'Python',
      skill_php: 'PHP',
      skill_web_app: 'Web Application Development',
      skill_pytest: 'pytest',
      skill_jest: 'Jest',
      skill_unit_test: 'Unit Test',
      skill_int_test: 'Integration Test',
      skill_cov_gate: 'Coverage Gate',
      skill_code_rev: 'Code Review',
      skill_rca: 'Root Cause Analysis',
      skill_cicd: 'CI/CD',
      skill_ga4: 'GA4',
      skill_gtm: 'Google Tag Manager',
      skill_gads: 'Google Ads',
      skill_gsc: 'Google Search Console',
      skill_hubspot: 'HubSpot',
      skill_sfmc: 'Salesforce Marketing Cloud',
      skill_sfl: 'Salesforce Lightning',
      skill_wp: 'WordPress',
      skill_docker: 'Docker',
      skill_gha: 'GitHub Actions',
      skill_gcb: 'Google Cloud Build',
      skill_cloudrun: 'Cloud Run',
      certsSecRule: 'Certifications & Credentials',
      certsSecSub: 'Official Accreditations',
      certsTitle: 'Certifications & Credentials',
      certsHeading: '“I use AI throughout development, then verify the result with tests and human acceptance.”',
      authorRole: 'MarTech & Automation Engineer',
      cert1Title: '🎓 iPAS AI Application Planner (Machine Learning) – Specialist Level',
      cert1Issuer: 'MOEA Industry Professional Assessment System (iPAS)',
      cert1Cta: 'View Certificate ↗',
      certVerifyLink: 'Cloud Verify ↗',
      contactSecRule: 'Contact / Collaboration',
      contactSecSub: 'Get in touch',
      contactLabel: 'Contact · Nº 06',
      contactTitle: 'Looking for someone to turn requirements into systems? <em>Let’s talk</em><span class="dot">.</span>',
      contactLead: 'I specialize in web development, MarTech, API integration, automation, and AI applications, delivering from requirement discovery to testing and launch.',
      contactCtaEmail: 'Send Email',
      contactCtaGithub: 'Visit GitHub',
      footerBio: 'My MarTech, automation, and AI projects, along with the way I take work from requirements through implementation, testing, and launch.',
      footCol1: 'Portfolio',
      footCol2: 'Projects',
      footCol3: 'Links'
    }
  };

    function setLanguage(lang) {
      const locale = I18N[lang] ? lang : 'zh-Hant';
      const dict = I18N[locale];
      document.documentElement.lang = locale;
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', locale);
        window.history.replaceState({}, '', url.toString());
      } catch (e) { }
    }

      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict && dict[key]) {
          if (dict[key].includes('<')) {
            el.innerHTML = dict[key];
          } else {
            el.textContent = dict[key];
          }
        }
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict && dict[key]) el.placeholder = dict[key];
      });
      document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
        const key = el.getAttribute('data-i18n-aria');
        if (dict && dict[key]) el.setAttribute('aria-label', dict[key]);
      });
      document.querySelectorAll('[data-i18n-title]').forEach((el) => {
        const key = el.getAttribute('data-i18n-title');
        if (dict && dict[key]) el.setAttribute('title', dict[key]);
      });
      document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.lang === locale);
      });








      document.dispatchEvent(new CustomEvent('languagechanged', { detail: locale }));
    }

    globalThis.PortfolioI18n = Object.freeze({
      I18N,
      setLanguage,
      t: function(key, ...args) {
        const locale = document.documentElement.lang || 'zh-Hant';
        let str = (I18N[locale] && I18N[locale][key]) ? I18N[locale][key] : key;
        args.forEach((arg, i) => {
          str = str.replace(`{${i}}`, arg);
        });
        return str;
      }
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const initialLang = params.get('lang') || document.documentElement.lang || 'zh-Hant';
      if (initialLang) {
          setLanguage(initialLang);
        }
    }
  })();

(() => {
    'use strict';

    const PAGE_SIZE = 30;
    const API_URL = '/api/github-repos';
    const BLOCKED_TOPICS = new Set(['practice', 'do-not-use', 'personal']);

    class PortfolioApiError extends Error {
      constructor(kind, message) {
        super(message);
        this.name = 'PortfolioApiError';
        this.kind = kind;
      }
    }

    function prepareRepos(repos) {
      return repos
        .filter((repo) => !repo.private)
        .filter((repo) => !repo.fork)
        .filter((repo) => !(repo.topics || []).some(
          (topic) => BLOCKED_TOPICS.has(String(topic).toLowerCase()),
        ))
        .sort((a, b) => (
          Number(Boolean(b.homepage && b.homepage.trim())) -
            Number(Boolean(a.homepage && a.homepage.trim())) ||
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        ));
    }

    function searchRepos(repos, query) {
      const normalized = String(query || '').trim().toLowerCase();
      if (!normalized) return repos.slice();
      return repos.filter((repo) => [
        repo.name,
        repo.description,
        repo.language,
        ...(repo.topics || []),
      ].some((value) => String(value || '').toLowerCase().includes(normalized)));
    }

    function paginate(repos, requestedPage, pageSize = PAGE_SIZE) {
      const totalPages = Math.max(1, Math.ceil(repos.length / pageSize));
      const page = Math.min(totalPages, Math.max(1, Number(requestedPage) || 1));
      const start = (page - 1) * pageSize;
      return {
        items: repos.slice(start, start + pageSize),
        page,
        pageSize,
        totalItems: repos.length,
        totalPages,
      };
    }

    function escapeHTML(value) {
      return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
    }

    function safeURL(value) {
      try {
        const url = new URL(String(value || ''));
        return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
      } catch {
        return '';
      }
    }

    async function fetchAllRepos(fetchImpl = fetch) {
      let response;
      const controller = typeof AbortController === 'undefined' ? null : new AbortController();
      const timeout = controller ? setTimeout(() => controller.abort(), 15000) : null;
      try {
        response = await fetchImpl(API_URL, { signal: controller?.signal });
      } catch (error) {
        throw new PortfolioApiError('network', PortfolioI18n.t('ghErrNetwork'));
      } finally {
        if (timeout) clearTimeout(timeout);
      }

      if (!response.ok) {
        const kind = response.status === 429 ? 'rate-limit' : 'api';
        const message = kind === 'rate-limit'
          ? PortfolioI18n.t('ghErrBusy')
          : PortfolioI18n.t('ghErrServer', response.status);
        throw new PortfolioApiError(kind, message);
      }

      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new PortfolioApiError('data', PortfolioI18n.t('ghErrData'));
      }
      return data;
    }

    function timeAgo(dateString) {
      const timestamp = new Date(dateString).getTime();
      if (!Number.isFinite(timestamp)) return PortfolioI18n.t('ghTimeUnknown');
      if (timestamp > Date.now() + 86400000) return PortfolioI18n.t('ghTimeFuture');
      const days = Math.max(0, Math.floor((Date.now() - timestamp) / 86400000));
      if (days === 0) return PortfolioI18n.t('ghTimeToday');
      if (days < 30) return PortfolioI18n.t('ghTimeDays', days);
      if (days < 365) return PortfolioI18n.t('ghTimeMonths', Math.floor(days / 30));
      return PortfolioI18n.t('ghTimeYears', Math.floor(days / 365));
    }

    const PortfolioApp = Object.freeze({
      PAGE_SIZE,
      prepareRepos,
      searchRepos,
      paginate,
      escapeHTML,
      safeURL,
      fetchAllRepos,
      PortfolioApiError,
    });
    globalThis.PortfolioApp = PortfolioApp;

    if (typeof document === 'undefined') return;

    const elements = {
      search: document.querySelector('#project-search'),
      clearSearch: document.querySelector('.clear-search'),
      count: document.querySelector('#result-count'),
      list: document.querySelector('#project-list'),
      pagination: document.querySelector('#pagination'),
      live: document.querySelector('#project-live'),
    };
    const state = { repos: [], query: '', page: 1 };
    const CACHE_KEY = 'newesp-portfolio-repos-v1';
    const CACHE_MAX_AGE = 5 * 60 * 1000;

    function readRepoCache() {
      try {
        const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
        return cached && Date.now() - cached.savedAt < CACHE_MAX_AGE && Array.isArray(cached.repos)
          ? cached.repos
          : null;
      } catch {
        return null;
      }
    }

    function writeRepoCache(repos) {
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), repos }));
      } catch { }
    }

    function cardMarkup(repo) {
      const homepage = safeURL(repo.homepage);
      const repository = safeURL(repo.html_url) || `https://github.com/newesp/${encodeURIComponent(repo.name)}`;
      const topics = (repo.topics || []).slice(0, 6);
      const topicMarkup = topics.map((topic) => `<span title="${escapeHTML(topic)}">${escapeHTML(topic)}</span>`).join('');
      const language = repo.language ? `<span>${escapeHTML(repo.language)}</span>` : '';
      const demoLink = homepage
        ? `<a href="${escapeHTML(homepage)}" target="_blank" rel="noopener noreferrer">${PortfolioI18n.t('ghRepoDemo')}</a>`
        : '';

      return `
        <article class="repo-card">
          <div>
            <div class="repo-card-top">
              <div class="repo-card-title">${escapeHTML(repo.name)}</div>
              <span class="repo-card-badge${homepage ? ' live' : ''}">${homepage ? PortfolioI18n.t('ghRepoLive') : PortfolioI18n.t('ghRepoSrc')}</span>
            </div>
            <p class="repo-card-desc">${escapeHTML(repo.description || PortfolioI18n.t('ghRepoNoDesc'))}</p>
          </div>
          <div>
            <div class="repo-card-meta">
              <span>${escapeHTML(timeAgo(repo.updated_at))}</span>
              ${language}
            </div>
            <div class="repo-card-tags">${topicMarkup}</div>
            <div class="repo-card-links">
              ${demoLink}
              <a href="${escapeHTML(repository)}" target="_blank" rel="noopener noreferrer">${PortfolioI18n.t('ghRepoLink')}</a>
            </div>
          </div>
        </article>`;
    }

    function visiblePageNumbers(current, total) {
      if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1);
      const candidates = new Set([1, total, current - 1, current, current + 1]);
      return [...candidates].filter((page) => page > 0 && page <= total).sort((a, b) => a - b);
    }

    function renderPagination(page, totalPages) {
      if (totalPages <= 1) {
        elements.pagination.hidden = true;
        elements.pagination.replaceChildren();
        return;
      }
      const pages = visiblePageNumbers(page, totalPages);
      let lastPage = 0;
      const controls = [];

      const previous = document.createElement('button');
      previous.className = 'page-button';
      previous.type = 'button';
      previous.textContent = PortfolioI18n.t('ghPagePrev');
      previous.dataset.i18n = 'ghPagePrev';
      previous.disabled = page === 1;
      previous.dataset.page = String(page - 1);
      controls.push(previous);

      pages.forEach((pageNumber) => {
        if (lastPage && pageNumber - lastPage > 1) {
          const gap = document.createElement('span');
          gap.className = 'mono';
          gap.textContent = '…';
          gap.setAttribute('aria-hidden', 'true');
          controls.push(gap);
        }
        const button = document.createElement('button');
        button.className = 'page-button';
        button.type = 'button';
        button.textContent = String(pageNumber);
        button.dataset.page = String(pageNumber);
        button.setAttribute('aria-label', PortfolioI18n.t('ghPageAria', pageNumber));
        if (pageNumber === page) button.setAttribute('aria-current', 'page');
        controls.push(button);
        lastPage = pageNumber;
      });

      const next = document.createElement('button');
      next.className = 'page-button';
      next.type = 'button';
      next.textContent = PortfolioI18n.t('ghPageNext');
      next.dataset.i18n = 'ghPageNext';
      next.disabled = page === totalPages;
      next.dataset.page = String(page + 1);
      controls.push(next);

      elements.pagination.replaceChildren(...controls);
      elements.pagination.hidden = false;
    }

    function render() {
      const searched = searchRepos(state.repos, state.query);
      const pageData = paginate(searched, state.page);
      state.page = pageData.page;
      delete elements.count.dataset.i18n;
      elements.count.textContent = state.query
        ? PortfolioI18n.t('ghFound', pageData.totalItems)
        : PortfolioI18n.t('ghTotal', pageData.totalItems);
      elements.list.setAttribute('aria-busy', 'false');

      if (!pageData.totalItems) {
        elements.list.innerHTML = `
          <div class="status-panel" role="status">
            <h3 data-i18n="ghNoResultTitle">${PortfolioI18n.t('ghNoResultTitle')}</h3>
            <p data-i18n="ghNoResultDesc">${PortfolioI18n.t('ghNoResultDesc')}</p>
            <button class="btn btn-ghost" type="button" data-clear-search data-i18n="ghClearSearch">${PortfolioI18n.t('ghClearSearch')}</button>
          </div>`;
        elements.pagination.hidden = true;
        elements.live.textContent = PortfolioI18n.t('ghNoResultTitle');
        return;
      }

      elements.list.innerHTML = pageData.items.map(cardMarkup).join('');
      renderPagination(pageData.page, pageData.totalPages);
      elements.live.textContent = PortfolioI18n.t('ghPageStatus', pageData.page, pageData.totalPages, pageData.totalItems);
    }

    function renderError(error) {
      const title = error.kind === 'rate-limit' ? PortfolioI18n.t('ghErrLimit') : PortfolioI18n.t('ghErrLoad');
      elements.list.setAttribute('aria-busy', 'false');
      elements.list.innerHTML = `
        <div class="status-panel" role="alert">
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(error.message || PortfolioI18n.t('ghErrUnknown'))}</p>
          <button class="btn btn-ghost" type="button" data-retry data-i18n="ghRetry">${PortfolioI18n.t('ghRetry')}</button>
        </div>`;
      elements.count.textContent = PortfolioI18n.t('ghLoadFail');
      elements.count.dataset.i18n = 'ghLoadFail';
      elements.pagination.hidden = true;
      elements.live.textContent = `${title}。${error.message || ''}`;
    }

    async function load() {
      elements.search.disabled = true;
      elements.count.textContent = PortfolioI18n.t('ghStatusConnecting');
      elements.count.dataset.i18n = 'ghStatusConnecting';
      elements.pagination.hidden = true;
      elements.list.setAttribute('aria-busy', 'true');
      elements.list.innerHTML = `
        <div class="status-panel" role="status">
          <div class="loader" aria-hidden="true"></div>
          <h3 data-i18n="ghLoadingTitle">${PortfolioI18n.t('ghLoadingTitle')}</h3>
          <p data-i18n="ghLoadingDesc">${PortfolioI18n.t('ghLoadingDesc')}</p>
        </div>`;
      try {
        const cached = readRepoCache();
        state.repos = cached || prepareRepos(await fetchAllRepos());
        if (!cached) writeRepoCache(state.repos);
        state.page = 1;
        elements.search.disabled = false;
        render();
      } catch (error) {
        renderError(error);
      }
    }

    elements.search.addEventListener('input', () => {
      state.query = elements.search.value;
      state.page = 1;
      elements.clearSearch.hidden = !state.query;
      render();
    });
    elements.clearSearch.addEventListener('click', () => {
      elements.search.value = '';
      elements.search.dispatchEvent(new Event('input'));
      elements.search.focus();
    });
    elements.pagination.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-page]');
      if (!button || button.disabled) return;
      state.page = Number(button.dataset.page);
      render();
      document.querySelector('#github-projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    elements.list.addEventListener('click', (event) => {
      if (event.target.closest('[data-retry]')) load();
      if (event.target.closest('[data-clear-search]')) elements.clearSearch.click();
    });

    document.addEventListener('languagechanged', () => {
      if (state.repos.length > 0) render();
    });

    load();
  })();
