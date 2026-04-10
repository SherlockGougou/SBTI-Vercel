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

function showScreen(name) {
  Object.entries(screens).forEach(function(entry) {
    entry[1].classList.toggle('active', entry[0] === name);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shuffle(array) {
  var arr = array.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

function getVisibleQuestions() {
  var visible = app.shuffledQuestions.slice();
  var gateIndex = visible.findIndex(function(q) { return q.id === 'drink_gate_q1'; });
  if (gateIndex !== -1 && app.answers['drink_gate_q1'] === 3) {
    visible.splice(gateIndex + 1, 0, specialQuestions[1]);
  }
  return visible;
}

function getQuestionMetaLabel(q) {
  if (q.special) return '补充题';
  return app.previewMode ? dimensionMeta[q.dim].name : '维度已隐藏';
}

function renderQuestions() {
  var visibleQuestions = getVisibleQuestions();
  questionList.innerHTML = '';
  visibleQuestions.forEach(function(q, index) {
    var card = document.createElement('article');
    card.className = 'question';
    card.innerHTML =
      '<div class="question-meta">' +
        '<div class="badge">第 ' + (index + 1) + ' 题</div>' +
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

      if (name === 'drink_gate_q1') {
        if (value !== 3) {
          delete app.answers['drink_gate_q2'];
        }
        renderQuestions();
        return;
      }

      updateProgress();
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
  progressText.textContent = done + ' / ' + total;
  var complete = done === total && total > 0;
  submitBtn.disabled = !complete;
  testHint.textContent = complete
    ? '都做完了。现在可以把你的电子魂魄交给结果页审判。'
    : '全选完才会放行。世界已经够乱了，起码把题做完整。';
}

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
    modeKicker   = '隐藏人格已激活';
    badge        = '匹配度 100% · 酒精异常因子已接管';
    sub          = '乙醇亲和性过强，系统已直接跳过常规人格审判。';
    special      = true;
  } else if (bestNormal.similarity < 60) {
    finalType  = TYPE_LIBRARY.HHHH;
    modeKicker = '系统强制兜底';
    badge      = '标准人格库最高匹配仅 ' + bestNormal.similarity + '%';
    sub        = '标准人格库对你的脑回路集体罢工了，于是系统把你强制分配给了 HHHH。';
    special    = true;
  } else {
    finalType  = bestNormal;
    modeKicker = '你的主类型';
    badge      = '匹配度 ' + bestNormal.similarity + '% · 精准命中 ' + bestNormal.exact + '/15 维';
    sub        = '维度命中度较高，当前结果可视为你的第一人格画像。';
    special    = false;
  }

  return { rawScores: rawScores, levels: levels, ranked: ranked, bestNormal: bestNormal,
           finalType: finalType, modeKicker: modeKicker, badge: badge, sub: sub,
           special: special, secondaryType: secondaryType };
}

function renderDimList(result) {
  var dimList = document.getElementById('dimList');
  dimList.innerHTML = dimensionOrder.map(function(dim) {
    var level       = result.levels[dim];
    var explanation = DIM_EXPLANATIONS[dim][level];
    return '<div class="dim-item">' +
      '<div class="dim-item-top">' +
        '<div class="dim-item-name">' + dimensionMeta[dim].name + '</div>' +
        '<div class="dim-item-score">' + level + ' / ' + result.rawScores[dim] + '分</div>' +
      '</div>' +
      '<p>' + explanation + '</p>' +
      '</div>';
  }).join('');
}

function renderResult() {
  var result = computeResult();
  var type   = result.finalType;

  document.getElementById('resultModeKicker').textContent = result.modeKicker;
  document.getElementById('resultTypeName').textContent   = type.code + '（' + type.cn + '）';
  document.getElementById('matchBadge').textContent       = result.badge;
  document.getElementById('resultTypeSub').textContent    = result.sub;
  document.getElementById('resultDesc').textContent       = type.desc;
  document.getElementById('posterCaption').textContent    = type.intro;
  document.getElementById('funNote').textContent = result.special
    ? '本测试仅供娱乐。隐藏人格和傻乐兜底都属于作者故意埋的损招，请勿把它当成医学、心理学、相学、命理学或灵异学依据。'
    : '本测试仅供娱乐，别拿它当诊断、面试、相亲、分手、招魂、算命或人生判决书。你可以笑，但别太当真。';

  var posterBox   = document.getElementById('posterBox');
  var posterImage = document.getElementById('posterImage');
  var imageSrc    = TYPE_IMAGES[type.code];
  if (imageSrc) {
    posterImage.src = imageSrc;
    posterImage.alt = type.code + '（' + type.cn + '）';
    posterBox.classList.remove('no-image');
  } else {
    posterImage.removeAttribute('src');
    posterImage.alt = '';
    posterBox.classList.add('no-image');
  }

  renderDimList(result);
  showScreen('result');
}

function startTest(preview) {
  app.previewMode = !!preview;
  app.answers = {};
  var shuffledRegular = shuffle(questions);
  var insertIndex = Math.floor(Math.random() * shuffledRegular.length) + 1;
  app.shuffledQuestions = shuffledRegular.slice(0, insertIndex)
    .concat([specialQuestions[0]])
    .concat(shuffledRegular.slice(insertIndex));
  renderQuestions();
  showScreen('test');
}

document.getElementById('startBtn').addEventListener('click',    function() { startTest(false); });
document.getElementById('backIntroBtn').addEventListener('click', function() { showScreen('intro'); });
document.getElementById('submitBtn').addEventListener('click',    renderResult);
document.getElementById('restartBtn').addEventListener('click',   function() { startTest(false); });
document.getElementById('toTopBtn').addEventListener('click',     function() { showScreen('intro'); });
