/* ─────────────────────────────────────────────
   SBTI – main script with i18n support
   ───────────────────────────────────────────── */

var currentLang = (function() {
  try {
    var saved = localStorage.getItem('sbti_lang');
    if (saved === 'en' || saved === 'zh') return saved;
  } catch(e) {}
  // Auto-detect from browser language
  var navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (navLang.indexOf('zh') === 0) return 'zh';
  return 'en';
})();

/* ── Theme management ── */

var THEME_CYCLE = ['auto', 'light', 'dark']; // 点击按钮时循环的顺序

function getStoredTheme() {
  try {
    var saved = localStorage.getItem('sbti_theme');
    if (saved === 'auto' || saved === 'light' || saved === 'dark') return saved;
  } catch(e) {}
  return 'auto';
}

function resolveTheme(preference) {
  if (preference === 'auto') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return preference;
}

function applyTheme(preference) {
  var resolved = resolveTheme(preference);
  document.documentElement.setAttribute('data-theme', resolved);
  // Update meta theme-color
  var metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.content = resolved === 'dark' ? '#141c17' : '#f6faf6';
  }
  // Update button label
  var btn = document.getElementById('themeToggleBtn');
  if (btn) {
    var icons = { auto: '🌓', light: '☀️', dark: '🌙' };
    btn.textContent = icons[preference] || '🌓';
    btn.setAttribute('aria-label', t('themeLabel_' + preference));
  }
}

function setTheme(preference) {
  try { localStorage.setItem('sbti_theme', preference); } catch(e) {}
  applyTheme(preference);
}

function cycleTheme() {
  var current = getStoredTheme();
  var idx = THEME_CYCLE.indexOf(current);
  var next = THEME_CYCLE[(idx + 1) % THEME_CYCLE.length];
  setTheme(next);
}

// Listen for system color-scheme changes (for auto mode)
try {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
    if (getStoredTheme() === 'auto') {
      applyTheme('auto');
    }
  });
} catch(e) {}

var app = {
  shuffledQuestions: [],
  answers: {},
  previewMode: false
};

var screens = {
  intro: document.getElementById('intro'),
  test:  document.getElementById('test'),
  result: document.getElementById('result')
};

var questionList = document.getElementById('questionList');
var progressBar  = document.getElementById('progressBar');
var progressText = document.getElementById('progressText');
var submitBtn    = document.getElementById('submitBtn');
var testHint     = document.getElementById('testHint');

/* ── i18n helpers ── */

function t(key) {
  return I18N.ui[currentLang][key] || I18N.ui.zh[key] || key;
}

function tFormat(key, replacements) {
  var str = t(key);
  Object.keys(replacements).forEach(function(k) {
    str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), replacements[k]);
  });
  return str;
}

/* ── Language switch ── */

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('sbti_lang', lang); } catch(e) {}
  rebuildQuestionData();
  TYPE_LIBRARY = buildTypeLibrary();
  refreshUI();
}

function toggleLang() {
  setLang(currentLang === 'zh' ? 'en' : 'zh');
}

function refreshUI() {
  var lang = currentLang;

  // HTML lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Page title & meta
  document.title = t('pageTitle');
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t('pageDesc');
  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = t('ogTitle');
  var ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = t('ogDesc');

  // Lang toggle button
  var langBtn = document.getElementById('langToggleBtn');
  if (langBtn) langBtn.textContent = t('langToggle');

  // Intro screen
  var heroTitle = document.querySelector('#intro h1');
  if (heroTitle) heroTitle.textContent = t('heroTitle');
  var startBtn = document.getElementById('startBtn');
  if (startBtn) startBtn.textContent = t('startBtn');
  // Test screen
  var backIntroBtn = document.getElementById('backIntroBtn');
  if (backIntroBtn) backIntroBtn.textContent = t('backHome');
  var submitBtnEl = document.getElementById('submitBtn');
  if (submitBtnEl) submitBtnEl.textContent = t('submitBtn');

  // Result screen
  var analysisTitle = document.querySelector('.analysis-box h3');
  if (analysisTitle) analysisTitle.textContent = t('analysisTitle');
  var dimTitle = document.querySelector('.dim-box h3');
  if (dimTitle) dimTitle.textContent = t('dimTitle');
  var noteTitle = document.querySelector('.note-box h3');
  if (noteTitle) noteTitle.textContent = t('noteTitle');
  var authorSummary = document.querySelector('.author-box summary');
  if (authorSummary) authorSummary.textContent = t('authorBoxSummary');

  // Author box content
  var authorP1 = document.getElementById('authorP1');
  if (authorP1) authorP1.textContent = t('authorP1');
  var authorP2 = document.getElementById('authorP2');
  if (authorP2) authorP2.textContent = t('authorP2');
  var authorP3 = document.getElementById('authorP3');
  if (authorP3) authorP3.textContent = t('authorP3');
  var authorP4 = document.getElementById('authorP4');
  if (authorP4) authorP4.textContent = t('authorP4');

  var restartBtn = document.getElementById('restartBtn');
  if (restartBtn) restartBtn.textContent = t('restartBtn');
  var toTopBtn = document.getElementById('toTopBtn');
  if (toTopBtn) toTopBtn.textContent = t('toTopBtn');

  // Author box expand/collapse CSS pseudo-element content
  var styleEl = document.getElementById('dynamicLangStyle');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'dynamicLangStyle';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent =
    '.author-box summary::after { content: "' + t('authorBoxExpand') + '"; }' +
    '.author-box[open] summary::after { content: "' + t('authorBoxCollapse') + '"; }';

  // Re-render questions if on test screen
  if (screens.test.classList.contains('active')) {
    // Rebuild shuffled questions with new language text while preserving answer state
    var newQuestions = buildQuestions();
    var newSpecial = buildSpecialQuestions();
    app.shuffledQuestions = app.shuffledQuestions.map(function(sq) {
      if (sq.special) {
        return newSpecial.find(function(ns) { return ns.id === sq.id; }) || sq;
      }
      return newQuestions.find(function(nq) { return nq.id === sq.id; }) || sq;
    });
    renderQuestions();
  }

  // Re-render result if on result screen
  if (screens.result.classList.contains('active') && app._lastResult) {
    renderResultWith(app._lastResult);
  }

  updateProgress();
}

/* ── Screen management ── */

function showScreen(name) {
  Object.entries(screens).forEach(function(entry) {
    entry[1].classList.toggle('active', entry[0] === name);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'intro') {
    setTimeout(function() { window.scrollTo(0, 1); }, 100);
  }
}

/* ── Shuffle ── */

function shuffle(array) {
  var arr = array.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

/* ── Question rendering ── */

function getVisibleQuestions() {
  var visible = app.shuffledQuestions.slice();
  var gateIndex = visible.findIndex(function(q) { return q.id === 'drink_gate_q1'; });
  if (gateIndex !== -1 && app.answers['drink_gate_q1'] === 3) {
    visible.splice(gateIndex + 1, 0, specialQuestions[1]);
  }
  return visible;
}

function getQuestionMetaLabel(q) {
  if (q.special) return t('questionMetaSpecial');
  return app.previewMode ? dimensionMeta[q.dim].name : t('questionMetaDimHidden');
}

function renderQuestions() {
  var visibleQuestions = getVisibleQuestions();
  questionList.innerHTML = '';
  visibleQuestions.forEach(function(q, index) {
    var card = document.createElement('article');
    card.className = 'question';
    card.innerHTML =
      '<div class="question-meta">' +
        '<div class="badge">' + tFormat('questionBadge', { n: index + 1 }) + '</div>' +
        '<div>' + getQuestionMetaLabel(q) + '</div>' +
      '</div>' +
      '<div class="question-title">' + q.text + '</div>' +
      '<div class="options">' +
        q.options.map(function(opt, i) {
          var code = ['A', 'B', 'C', 'D'][i] || String(i + 1);
          var checked = app.answers[q.id] === opt.value ? 'checked' : '';
          return '<label class="option">' +
            '<input type="radio" name="' + q.id + '" value="' + opt.value + '" ' + checked + ' />' +
            '<div class="option-code">' + code + '</div>' +
            '<div>' + opt.label + '</div>' +
            '</label>';
        }).join('') +
      '</div>';
    questionList.appendChild(card);
  });

  questionList.querySelectorAll('input[type="radio"]').forEach(function(input) {
    input.addEventListener('change', function(e) {
      var name  = e.target.name;
      var value = Number(e.target.value);
      app.answers[name] = value;

      var questionCard = e.target.closest('.question');
      questionCard.querySelectorAll('.option').forEach(function(opt) {
        opt.classList.remove('selected');
      });
      e.target.closest('.option').classList.add('selected');

      if (name === 'drink_gate_q1') {
        if (value !== 3) {
          delete app.answers['drink_gate_q2'];
        }
        renderQuestions();
        return;
      }

      updateProgress();

      if (window.innerWidth <= 600) {
        var nextCard = questionCard.nextElementSibling;
        if (nextCard) {
          setTimeout(function() {
            nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 250);
        } else {
          setTimeout(function() {
            document.querySelector('.actions-bottom').scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 250);
        }
      }
    });
  });

  updateProgress();
}

function updateProgress() {
  var visibleQuestions = getVisibleQuestions();
  var total = visibleQuestions.length;
  var done  = visibleQuestions.filter(function(q) { return app.answers[q.id] !== undefined; }).length;
  var percent = total ? (done / total) * 100 : 0;
  progressBar.style.width = percent + '%';
  progressText.textContent = tFormat('progressText', { done: done, total: total });
  var complete = done === total && total > 0;
  submitBtn.disabled = !complete;
  testHint.textContent = complete ? t('testHintComplete') : t('testHintIncomplete');
}

/* ── Score computation ── */

function sumToLevel(score) {
  if (score <= 3) return 'L';
  if (score === 4) return 'M';
  return 'H';
}

function levelNum(level) {
  return { L: 1, M: 2, H: 3 }[level];
}

function parsePattern(pattern) {
  return pattern.replace(/-/g, '').split('');
}

function getDrunkTriggered() {
  return app.answers[DRUNK_TRIGGER_QUESTION_ID] === 2;
}

function computeResult() {
  var rawScores = {};
  var levels = {};
  Object.keys(dimensionMeta).forEach(function(dim) { rawScores[dim] = 0; });

  questions.forEach(function(q) {
    rawScores[q.dim] += Number(app.answers[q.id] || 0);
  });

  Object.entries(rawScores).forEach(function(entry) {
    levels[entry[0]] = sumToLevel(entry[1]);
  });

  var userVector = dimensionOrder.map(function(dim) { return levelNum(levels[dim]); });

  var ranked = NORMAL_TYPES.map(function(type) {
    var vector = parsePattern(type.pattern).map(levelNum);
    var distance = 0;
    var exact = 0;
    for (var i = 0; i < vector.length; i++) {
      var diff = Math.abs(userVector[i] - vector[i]);
      distance += diff;
      if (diff === 0) exact++;
    }
    var similarity = Math.max(0, Math.round((1 - distance / 30) * 100));
    return Object.assign({}, type, TYPE_LIBRARY[type.code], { distance: distance, exact: exact, similarity: similarity });
  }).sort(function(a, b) {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (b.exact !== a.exact) return b.exact - a.exact;
    return b.similarity - a.similarity;
  });

  var bestNormal = ranked[0];
  var drunkTriggered = getDrunkTriggered();

  var finalType, modeKicker, badge, sub, special, secondaryType;
  secondaryType = null;

  if (drunkTriggered) {
    finalType    = TYPE_LIBRARY.DRUNK;
    secondaryType = bestNormal;
    modeKicker   = t('resultModeKickerDrunk');
    badge        = t('matchBadgeDrunk');
    sub          = t('subDrunk');
    special      = true;
  } else if (bestNormal.similarity < 60) {
    finalType  = TYPE_LIBRARY.HHHH;
    modeKicker = t('resultModeKickerFallback');
    badge      = tFormat('matchBadgeFallback', { similarity: bestNormal.similarity });
    sub        = t('subFallback');
    special    = true;
  } else {
    finalType  = bestNormal;
    modeKicker = t('resultModeKickerNormal');
    badge      = tFormat('matchBadgeNormal', { similarity: bestNormal.similarity, exact: bestNormal.exact });
    sub        = t('subNormal');
    special    = false;
  }

  return { rawScores: rawScores, levels: levels, ranked: ranked, bestNormal: bestNormal,
           finalType: finalType, modeKicker: modeKicker, badge: badge, sub: sub,
           special: special, secondaryType: secondaryType };
}

/* ── Render dimension list ── */

function renderDimList(result) {
  var dimListEl = document.getElementById('dimList');
  var explanations = DIM_EXPLANATIONS;
  dimListEl.innerHTML = dimensionOrder.map(function(dim) {
    var level       = result.levels[dim];
    var explanation = explanations[dim][level];
    return '<div class="dim-item">' +
      '<div class="dim-item-top">' +
        '<div class="dim-item-name">' + dimensionMeta[dim].name + '</div>' +
        '<div class="dim-item-score">' + tFormat('dimScore', { level: level, score: result.rawScores[dim] }) + '</div>' +
      '</div>' +
      '<p>' + explanation + '</p>' +
      '</div>';
  }).join('');
}

/* ── Render result ── */

function renderResultWith(result) {
  var type = result.finalType;

  document.getElementById('resultModeKicker').textContent = result.modeKicker;

  // Type name: show code + localized name
  var typeNameText = currentLang === 'zh'
    ? type.code + '（' + type.cn + '）'
    : type.code + ' (' + type.cn + ')';
  document.getElementById('resultTypeName').textContent = typeNameText;

  document.getElementById('matchBadge').textContent = result.badge;
  document.getElementById('resultTypeSub').textContent = result.sub;
  document.getElementById('resultDesc').textContent = type.desc;
  document.getElementById('posterCaption').textContent = type.intro;
  document.getElementById('funNote').textContent = result.special
    ? t('funNoteSpecial')
    : t('funNoteNormal');

  var posterBox   = document.getElementById('posterBox');
  var posterImage = document.getElementById('posterImage');
  var imageSrc    = TYPE_IMAGES[type.code];
  if (imageSrc) {
    posterImage.src = imageSrc;
    posterImage.alt = typeNameText;
    posterBox.classList.remove('no-image');
  } else {
    posterImage.removeAttribute('src');
    posterImage.alt = '';
    posterBox.classList.add('no-image');
  }

  renderDimList(result);
}

function renderResult() {
  var result = computeResult();
  app._lastResult = result;  // cache for re-render on lang switch
  renderResultWith(result);
  showScreen('result');
}

/* ── Start test ── */

function startTest(preview) {
  app.previewMode = !!preview;
  app.answers = {};
  app._lastResult = null;
  var shuffledRegular = shuffle(questions);
  var insertIndex = Math.floor(Math.random() * shuffledRegular.length) + 1;
  app.shuffledQuestions = shuffledRegular.slice(0, insertIndex)
    .concat([specialQuestions[0]])
    .concat(shuffledRegular.slice(insertIndex));
  renderQuestions();
  showScreen('test');
}

/* ── Event bindings ── */

document.getElementById('startBtn').addEventListener('click', function() { startTest(false); });
document.getElementById('backIntroBtn').addEventListener('click', function() { showScreen('intro'); });
document.getElementById('submitBtn').addEventListener('click', renderResult);
document.getElementById('restartBtn').addEventListener('click', function() { startTest(false); });
document.getElementById('toTopBtn').addEventListener('click', function() { showScreen('intro'); });
document.getElementById('langToggleBtn').addEventListener('click', toggleLang);
document.getElementById('themeToggleBtn').addEventListener('click', cycleTheme);

/* ── Initial UI refresh ── */
applyTheme(getStoredTheme());
refreshUI();
