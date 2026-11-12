/* ============================================================
   小七游戏 · 集合站脚本
   所有内容由下方 GAMES 数组驱动：新增游戏 = 数组里追加一条
   ============================================================ */
(function () {
  'use strict';

  var GAMES = [
    {
      id: 'luna',
      index: '01',
      name: '露娜2：拾光之约',
      short: '露娜2',
      latin: 'LUNA 2',
      accent: '#5BA8E8',
      genre: 'Q版卡通 · MMORPG',
      tags: ['Q版治愈', '自由转职', '社交冒险', '正版续作'],
      hook: '月光落回艾里温，这一次，我们再拾一次光。',
      cardHook: '战士、刺客、法师三系自由转，一个角色玩出三种江湖。',
      hero: { src: 'assets/img/luna-hero.webp', alt: '《露娜2：拾光之约》主视觉：Q 版四人组站在草原上，旁边一只大白猫举着剑' },
      card: { src: 'assets/img/luna-card.webp', alt: '《露娜2：拾光之约》冒险家大集结海报：五位主角与启程礼包面板' },
      icon: 'assets/img/luna-icon.webp',
      desc: '当年那款 Q 版卡通 MMORPG 回来了。战士前排硬刚、刺客匕首背刺、法师元素群攻，三系分支自由转；家族、组队、亲密配对一步到位，老朋友圈子还在原地等你。正版授权不魔改，童话城堡骑宠穿搭，一口回到十几年前的夏天。',
      feats: [
        ['自由转职', '战士、刺客、法师三系多分支，战士能转坦克、法师能转奶妈，一个号玩出三种职业体验。'],
        ['社交满格', '家族、组队、亲密配对样样齐全，当年一起蹲村口的朋友，这一次再喊一次就上线。'],
        ['原汁原味', '正版授权深耕，数值不魔改、活动不堆氪，老玩家进游戏不用重新学一遍。'],
        ['Q 萌画风', '治愈系童话城堡、骑宠穿搭随便搭，红发剑士、白发刺客、绿弓手各有各的萌点。']
      ],
      gallery: [
        { src: 'assets/img/luna-g1.webp', alt: 'Q 版多人站在城堡前庆祝：弓手、战士、法师、刺客全员到齐', cap: '全员到齐 · 城堡前合影' },
        { src: 'assets/img/luna-g2.webp', alt: '金发白衣天使跪坐在彩虹森林中，白鸽与野花环绕', cap: '彩虹森林 · LUNA 回忆录' },
        { src: 'assets/img/luna-g3.webp', alt: '五位 2D 立绘主角围坐山坡旁，右侧是冒险家启程礼包面板', cap: '冒险家大集结 · 启程礼包' },
        { src: 'assets/img/luna-g4.webp', alt: 'Q 版五人在村庄广场上打扫，菜芽精与小乌龟在旁边围观', cap: '社交满格 · 家族日常' },
        { src: 'assets/img/luna-g5.webp', alt: '六名 Q 版职业角色站在浮空岛上空，背后是云海城堡', cap: '自由转职 · 一角多面' },
        { src: 'assets/img/luna-g6.webp', alt: '三名少女坐在森林溪边聊天，旁边是刺猬和白猫玩偶', cap: '超萌画风 · 林间小憩' },
        { src: 'assets/img/luna-g7.webp', alt: 'Q 版小红帽与红发双马尾站在白城堡前，旁边是狼装少年', cap: '乐享欢闹 · 城堡游园' },
        { src: 'assets/img/luna-g8.webp', alt: '十名 Q 版角色大合影，机甲、猫娘、弓手、法师全部到齐', cap: '原汁原味 · 全员集结' },
        { src: 'assets/img/luna-job1.webp', alt: '紫袍白发刺客双人立绘，男女刺客持匕首发突进姿态', cap: '刺客系 · 紫影双杀' },
        { src: 'assets/img/luna-job3.webp', alt: '红发双马尾女剑士与黑发红甲男剑士并肩持剑立绘', cap: '战士系 · 红衣双剑' }
      ],
      promos: ['公测定档 · 12 月 10 日', '预约开启 · 享多重福利', '冒险家启程 · 登录领好礼'],
      dlStatus: '官网预约 · 待开放',
      downloads: [],
      dlNote: '下载链接稍后补充，开服活动与版本动态以小七直播间公告为准。'
    },
    {
      id: 'elf',
      index: '02',
      name: '精灵永恒',
      short: '精灵永恒',
      latin: 'JINGLING YONGHENG',
      accent: '#9C7BD8',
      genre: '西方魔幻 · MMORPG',
      tags: ['西方魔幻', 'MMORPG', '组队副本'],
      hook: '老味道的西方魔幻。组队进本，特化靠手打。',
      cardHook: '圣物、时装、坐骑，一样都得自己攒。',
      hero: { src: 'assets/img/elf-hero.webp', alt: '《精灵永恒》主视觉：暗紫洞窟中的圣骑士、弓手、天使与刺客' },
      card: { src: 'assets/img/elf-card.webp', alt: '《精灵永恒》战士围攻巨龙的血战海报' },
      icon: 'assets/img/elf-icon.webp',
      desc: '天使、骑士、精灵女王同框的暗紫魔幻。魔族入侵、日常副本轮着打，装备与材料从怪身上掉；圣物、时装、坐骑一级一级往上堆。',
      feats: [
        ['副本', '魔族入侵、日常副本，装备材料靠打。'],
        ['组队', '世界频道随时喊人，人不够就再喊。'],
        ['养成', '圣物、时装、坐骑，战力一点点堆起来。']
      ],
      gallery: [
        { src: 'assets/img/elf-g1.webp', alt: '暗紫洞窟中四人同框的宝箱场景', cap: '暗紫群像 · 宝箱场景' },
        { src: 'assets/img/elf-g2.webp', alt: '版本更新主题封面', cap: '版本更新 · 直播封面' },
        { src: 'assets/img/elf-g3.webp', alt: '圣物攻略主题封面', cap: '刷圣物攻略 · 直播封面' }
      ],
      video: { src: 'assets/video/elf-demo.mp4', poster: 'assets/video/elf-demo.webp', len: '18 秒' },
      dlStatus: '安卓直链 · 直达',
      downloads: [
        { platform: '安卓 APK', label: '下载安装包（官方直链）', url: 'https://sdkn-res.39sdk.com/GamePack/1793758159game_package312-2026.apk', primary: true }
      ],
      dlNote: '本链接为安卓直装包；iOS 与后续版本以官方渠道及小七直播间公告为准。'
    },
    {
      id: 'ice',
      index: '03',
      name: '小小屠龙 · 冰雪传奇',
      short: '小小屠龙',
      latin: 'BINGXUE CHUANQI',
      accent: '#5FA8D3',
      genre: '传奇 · 冰雪复古',
      tags: ['传奇', '冰雪复古', '攻沙'],
      hook: '首杀抢宝，攻沙夺鼎。行会一喊人，沙城就热闹。',
      cardHook: '千人同屏的攻城，屠龙之路从这里开始。',
      hero: { src: 'assets/img/ice-hero.webp', alt: '《小小屠龙·冰雪传奇》主视觉：冰雪沙城前的攻沙夺鼎' },
      card: { src: 'assets/img/ice-card.webp', alt: '《小小屠龙·冰雪传奇》首杀抢宝海报' },
      icon: 'assets/img/ice-icon.webp',
      desc: '冰雪复古那一套热血：世界 BOSS 首杀抢宝、行会集结攻沙夺鼎、龙域秘境开荒。神装、坐骑、灵姬，一路打一路收。',
      feats: [
        ['首杀', '世界 BOSS 首杀抢宝，稀罕材料先到先得。'],
        ['攻沙', '行会集结攻沙夺鼎，千人同屏。'],
        ['秘境', '龙域秘境开荒，神装与坐骑一并收。']
      ],
      gallery: [
        { src: 'assets/img/ice-g1.webp', alt: '冰雪传奇新区集结海报', cap: '新区集结 · 开服海报' },
        { src: 'assets/img/ice-g2.webp', alt: '寒月剑仙职业立绘', cap: '寒月剑仙 · 职业立绘' },
        { src: 'assets/img/ice-g3.webp', alt: '霜华龙神的神装与龙翼', cap: '霜华龙神 · 龙域神装' }
      ],
      video: { src: 'assets/video/ice-demo.mp4', poster: 'assets/video/ice-demo.webp', len: '12 秒' },
      dlStatus: '渠道下载页 · 直达',
      downloads: [
        { platform: '渠道下载页', label: '打开页面选择安装包下载', url: 'https://231287.youxin75.com/qudao.php?s=/Download/f/WzUxOTEsNTE5MCwyMzEyODdd', primary: true }
      ],
      dlNote: '链接为渠道服下载页，打开后按页面提示选择版本下载；开服活动与版本更新以小七直播间公告为准。'
    },
    {
      id: 'lian',
      index: '04',
      name: '英雄连城',
      short: '英雄连城',
      latin: 'YINGXIONG LIANCHENG',
      accent: '#3FA88F',
      genre: '奇迹怀旧 · 西方魔幻 MMORPG',
      tags: ['奇迹怀旧', '六大职业', '冰风谷'],
      hook: '那个夏天，我们在冰风谷相遇。经典回归，只为奇迹情怀发烧友而生。',
      cardHook: '六大经典职业重聚，老玩家一眼泪目。',
      hero: { src: 'assets/img/lx-hero.webp', alt: '《英雄连城》主视觉：金翼弓箭手伫立雪山古堡前，冰原旷野' },
      card: { src: 'assets/img/lx-card.webp', alt: '《英雄连城》海报：白发金翼女弓箭手立于冰雪城堡前' },
      icon: 'assets/img/lx-icon.webp',
      desc: '剑士、魔法师、弓箭手、魔剑士、圣导师、召唤师——奇迹里那六大经典职业一个不少。冰风谷的雪、勇者大陆的风，老地图原汁原味搬回来。怀旧服无广子纯干货，攻城守连城，行会一喊人就开。',
      feats: [
        ['职业', '六大经典职业重聚，剑士、法师、弓手、魔剑、圣导、召唤，当年选哪个现在还选哪个。'],
        ['怀旧', '冰风谷、勇者大陆那些老地图原汁原味回来，老玩家一眼认出那个夏天。'],
        ['经典', '奇迹情怀老服，无广子纯干货，不堆乱七八糟的新系统。'],
        ['城战', '连城攻守争夺，行会集结，主城是你的也是兄弟们的。']
      ],
      gallery: [
        { src: 'assets/img/lx-g1.webp', alt: '六大经典职业列队：剑士、魔法师、弓箭手、魔剑士、圣导师、召唤师', cap: '六大经典职业 · 列队' },
        { src: 'assets/img/lx-g2.webp', alt: '展翅女战士背影眺望冰风谷古堡，落雪满山', cap: '冰风谷 · 那个夏天' },
        { src: 'assets/img/lx-g3.webp', alt: '离线挂机界面：挂机点与离线助手，自动收益', cap: '离线挂机 · 收益自动领' },
        { src: 'assets/img/lx-g4.webp', alt: '官方公告：角色转职三转路线', cap: '角色转职 · 三转路线图' },
        { src: 'assets/img/lx-g5.webp', alt: '连续七日登录好礼界面', cap: '七日登录 · 领专属好礼' },
        { src: 'assets/img/lx-g6.webp', alt: '首充豪礼：龙魂神器与五重好礼', cap: '首充豪礼 · 龙魂神器' }
      ],
      promos: ['七日登录 · 领专属好礼', '首充8元 · 龙魂神器', '150级三转 · 经典回归'],
      video: {
        segments: [
          { src: 'assets/video/lx-demo-1.mp4', poster: 'assets/video/lx-demo-1.webp', label: '开场 · 角色与场景' },
          { src: 'assets/video/lx-demo-2.mp4', poster: 'assets/video/lx-demo-2.webp', label: '战斗 · 实机操作' },
          { src: 'assets/video/lx-demo-3.mp4', poster: 'assets/video/lx-demo-3.webp', label: '系统 · 界面展示' }
        ],
        len: '3 段 · 43 秒'
      },
      dlStatus: '渠道下载页 · 直达',
      downloads: [
        { platform: '渠道下载页', label: '打开页面选择安装包下载', url: 'https://231287.youxin75.com/qudao.php?s=/Download/f/WzUyMDQsNTIwMywyMzEyODdd', primary: true }
      ],
      dlNote: '链接为渠道服下载页，打开后按页面提示选择版本下载；开服活动与版本更新以小七直播间公告为准。'
    },
    {
      id: 'taoyuan',
      index: '05',
      name: '桃园将帅录',
      short: '桃园将帅录',
      latin: 'TAOYUAN JIANGSHUALU',
      accent: '#C4453A',
      genre: 'Q版三国 · 卡牌回合',
      tags: ['Q版三国', '卡牌回合', '三端互通'],
      hook: '点将封侯，萌宠随行。Q 版三国，把桃园结义搬进口袋。',
      cardHook: '50 抽保底五星，开局就有一队能打的人。',
      hero: { src: 'assets/img/ty-hero.webp', alt: '《桃园将帅录》主视觉：桃园花海、石桥与两侧的 Q 版萌将' },
      card: { src: 'assets/img/ty-card.webp', alt: '《桃园将帅录》桃园结义主题海报' },
      icon: 'assets/img/ty-icon.webp',
      desc: '点将台 50 抽保底五星，宠物蛋四选一；回合二倍速挂机，通勤十分钟也能推完一轮。安卓、iOS、PC 三端同服，换设备接着打。',
      feats: [
        ['点将台', '50 抽保底五星，开局就有一队能打的人。'],
        ['宠物', '宠物蛋四选一，萌宠随行，养成不只看数值。'],
        ['节奏', '回合二倍速挂机，碎片时间也能推图。'],
        ['三端', '安卓 / iOS / PC 互通，换设备接着打。']
      ],
      gallery: [
        { src: 'assets/img/ty-g1.webp', alt: '妙计指点江山的玩法界面', cap: '妙计指点江山 · 玩法界面' },
        { src: 'assets/img/ty-g2.webp', alt: '沙场兄弟并肩的组队画面', cap: '沙场兄弟并肩 · 组队画面' },
        { src: 'assets/img/ty-g3.webp', alt: '点将台保底五星的界面', cap: '点将台 · 保底 5 星' },
        { src: 'assets/img/ty-g4.webp', alt: '宠物蛋四选一界面', cap: '宠物蛋 · 四选一' }
      ],
      video: { src: 'assets/video/ty-demo.mp4', poster: 'assets/video/ty-demo.webp', len: '10 秒' },
      dlStatus: '官方双端 · 直达',
      downloads: [
        { platform: '安卓 APK', label: '下载安装包（官方直链）', url: 'https://sdkn-res.39sdk.com/GamePack/1793758200game_package321-2026.apk', primary: true },
        { platform: 'App Store', label: 'iPhone / iPad 官方页', url: 'https://apps.apple.com/cn/app/id6812216260' }
      ],
      dlNote: '安卓包与 App Store 入口均来自官方渠道，下载前请确认设备型号与系统版本。'
    }
  ];

  /* ---------- 下载入口工具：首选链接与渠道类型（由现有字段派生，无需新增数据） ---------- */
  function primaryEntry(g) {
    if (!g.downloads || !g.downloads.length) return null;
    for (var k = 0; k < g.downloads.length; k++) {
      if (g.downloads[k].primary) return g.downloads[k];
    }
    return g.downloads[0];
  }
  function entryKind(d) {
    var p = d.platform || '';
    if (p.indexOf('App Store') >= 0) return 'iOS 商店';
    if (p.indexOf('渠道') >= 0) return '渠道下载页';
    if (p.indexOf('APK') >= 0 || p.indexOf('安卓') >= 0) return '安卓直装';
    return '下载入口';
  }
  function heroMainLabel(d) {
    var k = entryKind(d);
    if (k === 'iOS 商店') return '下载 iOS 版';
    if (k === '渠道下载页') return '前往下载页';
    if (k === '安卓直装') return '下载安卓版';
    return '立即下载';
  }
  /* iOS 设备优先打开 App Store；其余设备沿用 primary 首选；档案下载面板始终列出全部渠道 */
  var isIOS = (function () {
    var ua = navigator.userAgent || '';
    if (/iPad|iPhone|iPod/.test(ua)) return true;
    if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) return true;
    return false;
  })();
  function preferredEntry(g) {
    if (!g.downloads || !g.downloads.length) return null;
    if (isIOS) {
      for (var k = 0; k < g.downloads.length; k++) {
        if ((g.downloads[k].platform || '').indexOf('App Store') >= 0) return g.downloads[k];
      }
    }
    return primaryEntry(g);
  }
  function shortKind(k) {
    if (k === 'iOS 商店') return 'iOS';
    if (k === '安卓直装') return '安卓';
    if (k === '渠道下载页') return '渠道页';
    return '下载';
  }
  function cardPlatforms(g) {
    var out = [], seen = [];
    (g.downloads || []).forEach(function (d) {
      var k = entryKind(d);
      if (seen.indexOf(k) < 0) { seen.push(k); out.push(shortKind(k)); }
    });
    return out;
  }

  /* ---------- 元素 ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var screening = $('#screening');
  var stage = $('#stage');
  var stripTrack = $('#stripTrack');
  var reelNo = $('#reelNo');
  var heroTitle = $('#heroTitle');
  var heroLatin = $('#heroLatin');
  var heroTags = $('#heroTags');
  var heroHook = $('#heroHook');
  var copy = $('#heroCopy');
  var progressBar = $('#progressBar');
  var readBar = $('#readBar');
  var cardsBox = $('#cards');
  var filterChips = $('#filterChips');
  var dossiersBox = $('#dossiers');
  var heroDlBtn = $('#heroDlBtn');
  var heroDlMain = $('#heroDlMain');
  var heroDlSub = $('#heroDlSub');
  var dlBand = $('#dlBand');
  var modal = $('#modal');
  var mEyebrow = $('#mEyebrow');
  var mTitle = $('#mTitle');
  var mBody = $('#mBody');
  var toast = $('#toast');
  var header = $('#head');
  var burger = $('#burger');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a'));

  var current = 0;
  var paused = false;
  var heroVisible = true;
  var modalOpen = false;
  var lastFocus = null;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 构建放映厅 ---------- */
  stage.innerHTML = GAMES.map(function (g, i) {
    return '<div class="shot' + (i === 0 ? ' active' : '') + '" data-i="' + i + '">' +
      '<img src="' + g.hero.src + '" alt="' + g.hero.alt + '"' + (i === 0 ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">' +
      '</div>';
  }).join('');
  var shots = Array.prototype.slice.call(stage.querySelectorAll('.shot'));

  stripTrack.innerHTML = GAMES.map(function (g, i) {
    return '<button type="button" class="strip-item' + (i === 0 ? ' active' : '') + '" ' +
      'aria-pressed="' + (i === 0) + '" data-i="' + i + '" aria-label="切换到 ' + g.name + '">' +
      '<img src="' + g.card.src + '" alt="" loading="lazy" decoding="async">' +
      '<span class="si-meta"><b>' + g.index + '</b><span>' + (g.short || g.name) + '</span></span>' +
      '</button>';
  }).join('');

  /* ---------- 构建游戏矩阵 ---------- */
  var nextNo = String(GAMES.length + 1).padStart(2, '0');
  cardsBox.innerHTML = GAMES.map(function (g, i) {
    return '<article class="card reveal' + (i === 0 ? ' featured' : '') + '" data-i="' + i + '" data-tags="' + g.tags.join(' ') + '" tabindex="0" aria-label="查看《' + g.name + '》档案" style="--accent:' + g.accent + '">' +
      '<div class="card-figure"><img src="' + g.card.src + '" alt="' + g.card.alt + '" loading="lazy" decoding="async">' +
      '<span class="card-flag">' + g.index + '</span></div>' +
      '<div class="card-body">' +
      (g.icon ? '<img class="card-icon" src="' + g.icon + '" alt="" loading="lazy" decoding="async">' : '') +
      '<p class="card-genre">' + g.genre + '</p>' +
      '<h3 class="card-title">' + g.name + '</h3>' +
      '<p class="card-hook">' + g.cardHook + '</p>' +
      '<div class="card-meta"><span class="card-status"><i aria-hidden="true"></i>' + g.dlStatus + '</span>' +
        cardPlatforms(g).map(function (p) { return '<span class="card-plat">' + p + '</span>'; }).join('') + '</div>' +
      '<ul class="card-tags">' + g.tags.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' +
      '<span class="card-more"><span>查看档案</span>' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"></path></svg></span>' +
      '<div class="card-actions">' +
        '<button type="button" class="card-act" data-card-act="video" data-i="' + i + '">实机演示</button>' +
        '<button type="button" class="card-act alt" data-card-act="download" data-i="' + i + '">直接下载</button>' +
      '</div>' +
      '</div></article>';
  }).join('') +
  '<div class="card add reveal" aria-label="席位预留">' +
    '<span class="add-plus" aria-hidden="true"></span>' +
    '<span class="add-no">' + nextNo + ' · 席位预留</span>' +
    '<p class="add-title">下一款作品<br>在这里就位</p>' +
    '<p class="add-note">主视觉、一句钩子、一段实机，按同一套版式补齐即可。</p>' +
  '</div>';

  /* ---------- 构建游戏档案 ---------- */
  /* 今日运势话术池：骰子点数 1–6 对应 */
  var FORTUNES = [
    { level: '下下签', text: '今日宜攒资源不宜上头，首充明天再氪。' },
    { level: '平签', text: '运势平平，适合挂机收菜，别跟 Boss 硬刚。' },
    { level: '小吉', text: '小吉临门，单抽可能出金，十连看脸。' },
    { level: '中吉', text: '中吉！今日组队胜率偏高，喊上兄弟发车。' },
    { level: '大吉', text: '大吉！爆率暗改今日份，刷哪哪掉装。' },
    { level: '欧皇签', text: '欧皇附体！今日全服最靓的仔，放心冲。' }
  ];

  dossiersBox.innerHTML = GAMES.map(function (g, i) {
    var total = String(g.gallery.length).padStart(2, '0');
    return '<article class="dossier reveal" id="game-' + g.id + '" style="--accent:' + g.accent + '">' +
      '<div class="d-copy">' +
        '<div class="d-head"><span class="d-index">' + g.index + '</span><span class="d-rule"></span>' +
        '<span class="d-genre">' + g.genre + '</span></div>' +
        '<h3 class="d-title">' + (g.icon ? '<img class="d-icon" src="' + g.icon + '" alt="" loading="lazy" decoding="async">' : '') + g.name + '</h3>' +
        '<p class="d-latin">' + g.latin + '</p>' +
        '<p class="d-desc">' + g.desc + '</p>' +
        '<ul class="d-feats">' + g.feats.map(function (f) {
          return '<li><b>' + f[0] + '</b><span>' + f[1] + '</span></li>';
        }).join('') + '</ul>' +
        (g.promos ? '<ul class="d-promos">' + g.promos.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' : '') +
        '<div class="d-actions">' +
          (g.video ? '<button class="btn solid small" type="button" data-i="' + i + '" data-act="video">实机演示' +
          '<span style="font-family:var(--cond);letter-spacing:.1em;opacity:.72">' + g.video.len + '</span></button>' : '<button class="btn ghost small" type="button" disabled>实机演示 · 待录制</button>') +
          '<button class="btn ghost small" type="button" data-i="' + i + '" data-act="gallery">图集 ' + total + '</button>' +
        '</div>' +
        '<div class="dl-panel">' +
          '<div class="dl-head"><span class="dl-eyebrow"><i></i>下载与入口 · DOWNLOAD</span>' +
          '<span class="dl-status"><i></i>' + g.dlStatus + '</span></div>' +
          '<div class="dl-rows">' + g.downloads.map(function (d, k) {
            return '<a class="dl-btn' + (d.primary ? ' primary' : '') + '" href="' + d.url + '" target="_blank" rel="noopener noreferrer">' +
              '<span class="dl-text">' +
                '<span class="dl-topline"><b class="dl-platform">' + d.platform + '</b><i class="dl-kind">' + entryKind(d) + '</i></span>' +
                '<span class="dl-label">' + d.label + '</span>' +
              '</span>' +
              '<span class="dl-go"><em>' + (k === 0 ? '下载' : '前往') + '</em>' +
              '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14"/></svg></span>' +
            '</a>';
          }).join('') + '</div>' +
          '<p class="dl-note">' + g.dlNote + '</p>' +
        '</div>' +
        '<div class="d-fortune">' +
          '<div class="dice" id="dice-' + g.id + '" aria-hidden="true">?</div>' +
          '<div class="f-body"><span class="f-title">今日运势 · LUCKY DICE</span>' +
          '<p class="f-result" id="fres-' + g.id + '">点「摇一摇」，测测今天适不适合冲</p></div>' +
          '<button class="btn ghost small f-roll" type="button" data-i="' + i + '">摇一摇</button>' +
        '</div>' +
      '</div>' +
      '<div class="d-media">' +
        '<figure class="still"><img id="still-' + g.id + '" src="' + g.gallery[0].src + '" alt="' + g.gallery[0].alt + '" loading="lazy" decoding="async">' +
        '<figcaption id="cap-' + g.id + '">' + g.gallery[0].cap + '</figcaption>' +
        '<span class="still-idx" id="idx-' + g.id + '">01 / ' + total + '</span></figure>' +
        '<div class="thumbs" id="thumbs-' + g.id + '" style="grid-template-columns:repeat(' + g.gallery.length + ',1fr)">' +
        g.gallery.map(function (im, j) {
          return '<button type="button" class="' + (j === 0 ? 'active' : '') + '" data-i="' + i + '" data-j="' + j + '" ' +
            'aria-label="查看：' + im.cap + '"><img src="' + im.src + '" alt="" loading="lazy" decoding="async"></button>';
        }).join('') +
        '</div>' +
      '</div></article>';
  }).join('');

  /* ---------- 筛选 chips：由各款 tags 去重派生，新增游戏自动出现 ---------- */
  if (filterChips) {
    var allTags = [];
    GAMES.forEach(function (g) {
      g.tags.forEach(function (t) { if (allTags.indexOf(t) < 0) allTags.push(t); });
    });
    filterChips.innerHTML = '<button type="button" class="chip active" data-tag="" aria-pressed="true">全部</button>' +
      allTags.map(function (t) {
        return '<button type="button" class="chip" data-tag="' + t + '" aria-pressed="false">' + t + '</button>';
      }).join('');
  }

  /* ---------- 收尾下载带：随 GAMES 数组自动增减 ---------- */
  if (dlBand) {
    dlBand.innerHTML = GAMES.map(function (g) {
      var d = preferredEntry(g);
      if (!d) return '';
      var kind = entryKind(d);
      var verb = kind === '渠道下载页' ? '前往' : '下载';
      return '<a class="dl-chip reveal" href="' + d.url + '" target="_blank" rel="noopener noreferrer" style="--accent:' + g.accent + '" aria-label="' + g.name + ' ' + kind + '">' +
        '<span class="dc-index">' + g.index + '</span>' +
        '<span class="dc-body"><b>' + g.name + '</b><span>' + kind + ' · ' + g.genre + '</span></span>' +
        '<span class="dc-go">' + verb +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"></path></svg></span>' +
      '</a>';
    }).filter(Boolean).join('');
  }

  /* ---------- 切换游戏 ---------- */
  function activate(i, restart) {
    i = (i + GAMES.length) % GAMES.length;
    current = i;
    var g = GAMES[i];

    shots.forEach(function (s, k) {
      if (k === i) { s.classList.remove('leaving'); s.classList.add('active'); }
      else {
        if (s.classList.contains('active')) s.classList.add('leaving');
        s.classList.remove('active');
      }
    });
    Array.prototype.forEach.call(stripTrack.children, function (b, k) {
      b.classList.toggle('active', k === i);
      b.setAttribute('aria-pressed', String(k === i));
    });

    screening.style.setProperty('--accent', g.accent);
    reelNo.textContent = 'REEL ' + g.index;
    heroTitle.textContent = g.name;
    heroLatin.textContent = g.latin;
    heroTags.innerHTML = g.tags.map(function (t) { return '<li>' + t + '</li>'; }).join('');
    heroHook.textContent = g.hook;

    var pd = preferredEntry(g);
    if (heroDlBtn) {
      if (pd && pd.url) {
        heroDlBtn.style.display = '';
        heroDlBtn.dataset.url = pd.url;
        heroDlMain.textContent = heroMainLabel(pd);
        heroDlSub.textContent = entryKind(pd);
      } else {
        heroDlBtn.style.display = 'none';
      }
    }

    copy.classList.remove('anim');
    void copy.offsetWidth;
    copy.classList.add('anim');

    if (restart !== false) restartBar();
  }

  function restartBar() {
    progressBar.classList.remove('run');
    progressBar.style.animationPlayState = '';
    void progressBar.offsetWidth;
    if (!reduced && !paused && !modalOpen && heroVisible) {
      progressBar.classList.add('run');
    }
  }

  function nextGame() { activate(current + 1); }
  function prevGame() { activate(current - 1); }

  progressBar.addEventListener('animationend', function () {
    if (!paused && !modalOpen && heroVisible) nextGame();
  });

  stripTrack.addEventListener('click', function (e) {
    var b = e.target.closest('.strip-item');
    if (b) activate(Number(b.dataset.i));
  });
  $('#nextBtn').addEventListener('click', nextGame);
  $('#prevBtn').addEventListener('click', prevGame);

  /* 悬停暂停，移开继续 */
  var frame = $('.frame');
  frame.addEventListener('pointerenter', function () {
    if (modalOpen) return;
    paused = true;
    progressBar.style.animationPlayState = 'paused';
  });
  frame.addEventListener('pointerleave', function () {
    paused = false;
    if (!modalOpen) progressBar.style.animationPlayState = '';
  });

  /* 首屏海报跟手微视差：仅精细指针且未减弱动效时启用 */
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduced) {
    stage.style.transition = 'transform .25s ease-out';
    frame.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      stage.style.transform = 'translate3d(' + (x * 10).toFixed(1) + 'px,' + (y * 7).toFixed(1) + 'px,0) scale(1.02)';
    });
    frame.addEventListener('pointerleave', function () {
      stage.style.transform = '';
    });
  }

  /* ---------- 滚动跳转 ---------- */
  function gotoDossier(i) {
    var g = GAMES[i];
    var el = document.getElementById('game-' + g.id);
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.pageYOffset - 92;
    window.scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
  }

  /* ---------- 档案内图集 ---------- */
  function setStill(i, j) {
    var g = GAMES[i];
    var im = g.gallery[j];
    var img = document.getElementById('still-' + g.id);
    var cap = document.getElementById('cap-' + g.id);
    var idx = document.getElementById('idx-' + g.id);
    if (!img) return;
    img.src = im.src;
    img.alt = im.alt;
    cap.textContent = im.cap;
    idx.textContent = String(j + 1).padStart(2, '0') + ' / ' + String(g.gallery.length).padStart(2, '0');
    Array.prototype.forEach.call(document.querySelectorAll('#thumbs-' + g.id + ' button'), function (b, k) {
      b.classList.toggle('active', k === j);
    });
  }

  /* ---------- 弹层 ---------- */
  function lockBody(on) {
    document.body.style.overflow = on ? 'hidden' : '';
  }

  function openModal(eyebrow, title, content) {
    lastFocus = document.activeElement;
    mEyebrow.textContent = eyebrow;
    mTitle.textContent = title;
    mBody.innerHTML = content;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modalOpen = true;
    lockBody(true);
    progressBar.style.animationPlayState = 'paused';
    var closeBtn = modal.querySelector('.m-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modalOpen) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalOpen = false;
    var vid = mBody.querySelector('video');
    if (vid) { vid.pause(); vid.removeAttribute('src'); }
    mBody.innerHTML = '';
    lockBody(false);
    progressBar.style.animationPlayState = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  modal.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeModal(); closeMenu(); return; }
    if (!modalOpen) {
      if ((e.key === 'Enter' || e.key === ' ') && e.target && e.target.closest) {
        var cardEl = e.target.closest('.card[data-i]');
        if (cardEl && e.target === cardEl) {
          e.preventDefault();
          gotoDossier(Number(cardEl.dataset.i));
        }
      }
      return;
    }
    var prev = modal.querySelector('#gPrev'), nxt = modal.querySelector('#gNext');
    if (e.key === 'ArrowLeft' && prev) prev.click();
    if (e.key === 'ArrowRight' && nxt) nxt.click();
  });

  /* 实机演示 */
  function openVideo(i) {
    var g = GAMES[i];
    if (!g.video) { alert(g.name + ' 的实机演示还在录制中，敬请期待。'); return; }
    var body;
    if (g.video.segments) {
      body = g.video.segments.map(function (s, k) {
        return '<div class="video-wrap"><div class="v-seg">' + s.label + '</div><video controls muted playsinline preload="metadata" ' +
          'poster="' + s.poster + '" src="' + s.src + '"></video></div>';
      }).join('');
    } else {
      body = '<div class="video-wrap"><video controls autoplay muted playsinline preload="metadata" ' +
        'poster="' + g.video.poster + '" src="' + g.video.src + '"></video></div>';
    }
    openModal('实机演示 / GAMEPLAY', g.name, body +
      '<p class="video-note">' + g.name + ' · 实机录屏 ' + g.video.len + '，取自小七直播片段，已压缩为 720p。</p>');
  }

  /* 图集 */
  function openGallery(i, start) {
    var g = GAMES[i];
    start = start || 0;
    openModal('图集 / STILLS', g.name,
      '<div class="g-main"><img id="gImg" src="' + g.gallery[start].src + '" alt="' + g.gallery[start].alt + '">' +
      '<button class="g-nav prev" type="button" id="gPrev" aria-label="上一张"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"></path></svg></button>' +
      '<button class="g-nav next" type="button" id="gNext" aria-label="下一张"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"></path></svg></button></div>' +
      '<div class="g-cap"><span id="gCapText">' + g.gallery[start].cap + '</span>' +
      '<span class="g-count" id="gCount">' + String(start + 1).padStart(2, '0') + ' / ' + String(g.gallery.length).padStart(2, '0') + '</span></div>' +
      '<div class="g-thumbs" id="gThumbs" style="grid-template-columns:repeat(' + g.gallery.length + ',1fr)">' +
      g.gallery.map(function (im, j) {
        return '<button type="button" class="' + (j === start ? 'active' : '') + '" data-j="' + j + '">' +
          '<img src="' + im.src + '" alt="" loading="lazy"></button>';
      }).join('') + '</div>');

    var pos = start;
    function show(j) {
      pos = (j + g.gallery.length) % g.gallery.length;
      var im = g.gallery[pos];
      $('#gImg').src = im.src;
      $('#gImg').alt = im.alt;
      $('#gCapText').textContent = im.cap;
      $('#gCount').textContent = String(pos + 1).padStart(2, '0') + ' / ' + String(g.gallery.length).padStart(2, '0');
      Array.prototype.forEach.call(document.querySelectorAll('#gThumbs button'), function (b, k) {
        b.classList.toggle('active', k === pos);
      });
    }
    $('#gPrev').addEventListener('click', function () { show(pos - 1); });
    $('#gNext').addEventListener('click', function () { show(pos + 1); });
    $('#gThumbs').addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (b) show(Number(b.dataset.j));
    });
  }

  /* ---------- 全局点击 ---------- */
  document.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip[data-tag]');
    if (chip) {
      Array.prototype.forEach.call(document.querySelectorAll('.chip[data-tag]'), function (b) {
        var on = b === chip;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      var sel = chip.dataset.tag;
      Array.prototype.forEach.call(document.querySelectorAll('.card[data-i]'), function (c) {
        var tags = (c.dataset.tags || '').split(' ');
        c.classList.toggle('hide', !(!sel || tags.indexOf(sel) >= 0));
      });
      if (!reduced) {
        var popIdx = 0;
        Array.prototype.forEach.call(document.querySelectorAll('.card[data-i]'), function (c) {
          c.classList.remove('pop');
          if (!c.classList.contains('hide')) {
            c.style.animationDelay = (popIdx * 60) + 'ms';
            popIdx++;
            void c.offsetWidth;
            c.classList.add('pop');
          } else {
            c.style.animationDelay = '';
          }
        });
      }
      return;
    }

    var thumb = e.target.closest('.thumbs button');
    if (thumb) { setStill(Number(thumb.dataset.i), Number(thumb.dataset.j)); return; }

    var froll = e.target.closest('.f-roll');
    if (froll) { rollFortune(Number(froll.dataset.i)); return; }

    var act = e.target.closest('[data-act]');
    if (act) {
      var i = act.dataset.i ? Number(act.dataset.i) : current;
      var kind = act.dataset.act;
      if (kind === 'video') openVideo(i);
      else if (kind === 'gallery') openGallery(i);
      else if (kind === 'archive') gotoDossier(i);
      else if (kind === 'download' && act.dataset.url) window.open(act.dataset.url, '_blank', 'noopener');
      return;
    }

    var cact = e.target.closest('[data-card-act]');
    if (cact) {
      var ci = Number(cact.dataset.i);
      if (cact.dataset.cardAct === 'video') openVideo(ci);
      else if (cact.dataset.cardAct === 'download') {
        var cd = preferredEntry(GAMES[ci]);
        if (cd && cd.url) window.open(cd.url, '_blank', 'noopener');
      }
      return;
    }

    var card = e.target.closest('.card[data-i]');
    if (card) { gotoDossier(Number(card.dataset.i)); return; }
  });

  /* ---------- 今日运势摇骰 ---------- */
  function rollFortune(i) {
    var g = GAMES[i];
    var dice = $('#dice-' + g.id);
    var res = $('#fres-' + g.id);
    var n = 1 + Math.floor(Math.random() * 6);
    if (reduced) {
      dice.textContent = n;
      res.innerHTML = '<b>' + FORTUNES[n - 1].level + '</b> · ' + FORTUNES[n - 1].text;
      return;
    }
    dice.classList.add('rolling');
    var ticks = 0;
    var spin = setInterval(function () {
      dice.textContent = 1 + Math.floor(Math.random() * 6);
      if (++ticks >= 6) {
        clearInterval(spin);
        dice.classList.remove('rolling');
        dice.textContent = n;
        res.innerHTML = '<b>' + FORTUNES[n - 1].level + '</b> · ' + FORTUNES[n - 1].text;
      }
    }, 90);
  }

  /* ---------- 导航与页头 ---------- */
  var menuOpen = false;
  function closeMenu() {
    if (!menuOpen) return;
    menuOpen = false;
    header.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    menuOpen = !menuOpen;
    header.classList.toggle('menu-open', menuOpen);
    burger.setAttribute('aria-expanded', String(menuOpen));
  });
  navLinks.forEach(function (a) { a.addEventListener('click', closeMenu); });

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      header.classList.toggle('scrolled', window.pageYOffset > 40);
      if (readBar) {
        var docH = document.documentElement;
        var max = docH.scrollHeight - window.innerHeight;
        var p = max > 0 ? window.pageYOffset / max : 0;
        readBar.style.transform = 'scaleX(' + p + ')';
      }
      if (!reduced) {
        var py = Math.min(window.pageYOffset * 0.05, 42);
        screening.style.setProperty('--par', py + 'px');
      }
      ticking = false;
    });
  }, { passive: true });

  /* 导航高亮 */
  if ('IntersectionObserver' in window) {
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          navLinks.forEach(function (a) {
            a.classList.toggle('active', a.dataset.nav === en.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['screening', 'lineup', 'archive', 'about'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) navIO.observe(el);
    });

    /* 入场动画 */
    var revIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          revIO.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { revIO.observe(el); });

    /* 放映厅离开视口时暂停 */
    var heroIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        heroVisible = en.isIntersecting;
        if (heroVisible) {
          if (!paused && !modalOpen) { progressBar.style.animationPlayState = ''; }
        } else {
          progressBar.style.animationPlayState = 'paused';
        }
      });
    }, { threshold: 0.25 });
    heroIO.observe(screening);
  } else {
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { el.classList.add('in'); });
  }

  /* ---------- 启动 ---------- */
  function setCounts() {
    var n = String(GAMES.length).padStart(2, '0');
    var seat = String(GAMES.length + 1).padStart(2, '0');
    var ids = { totalCount: n, cornerCount: n, lineupCount: n, seatCount: seat };
    Object.keys(ids).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = ids[id];
    });
  }
  setCounts();
  activate(0);
  restartBar();
})();
