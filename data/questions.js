/* ─────────────────────────────────────────────
   SBTI Questions – now powered by i18n.js
   Text content is loaded from I18N.questions / I18N.specialQuestions.
   ───────────────────────────────────────────── */

/* Dimension metadata is now loaded from I18N.dimensionMeta[lang].
   We keep dimensionOrder and the structural-only arrays here. */

var dimensionOrder = ['S1','S2','S3','E1','E2','E3','A1','A2','A3','Ac1','Ac2','Ac3','So1','So2','So3'];

/* Helper: current language (defaults to zh) */
function _qLang() {
  return (typeof currentLang !== 'undefined' && currentLang) || 'zh';
}

/* Helper: get dimension meta for current language */
function getDimensionMeta() {
  return I18N.dimensionMeta[_qLang()];
}

/* Helper: get DIM_EXPLANATIONS for current language */
function getDimExplanations() {
  return I18N.dimExplanations[_qLang()];
}

/* Build questions array with current-language text injected */
function buildQuestions() {
  var lang = _qLang();
  var texts = I18N.questions[lang];
  return [
    { id: 'q1',  dim: 'S1' },
    { id: 'q2',  dim: 'S1' },
    { id: 'q3',  dim: 'S2' },
    { id: 'q4',  dim: 'S2' },
    { id: 'q5',  dim: 'S3' },
    { id: 'q6',  dim: 'S3' },
    { id: 'q7',  dim: 'E1' },
    { id: 'q8',  dim: 'E1' },
    { id: 'q9',  dim: 'E2' },
    { id: 'q10', dim: 'E2' },
    { id: 'q11', dim: 'E3' },
    { id: 'q12', dim: 'E3' },
    { id: 'q13', dim: 'A1' },
    { id: 'q14', dim: 'A1' },
    { id: 'q15', dim: 'A2' },
    { id: 'q16', dim: 'A2' },
    { id: 'q17', dim: 'A3' },
    { id: 'q18', dim: 'A3' },
    { id: 'q19', dim: 'Ac1' },
    { id: 'q20', dim: 'Ac1' },
    { id: 'q21', dim: 'Ac2' },
    { id: 'q22', dim: 'Ac2' },
    { id: 'q23', dim: 'Ac3' },
    { id: 'q24', dim: 'Ac3' },
    { id: 'q25', dim: 'So1' },
    { id: 'q26', dim: 'So1' },
    { id: 'q27', dim: 'So2' },
    { id: 'q28', dim: 'So2' },
    { id: 'q29', dim: 'So3' },
    { id: 'q30', dim: 'So3' }
  ].map(function(skeleton, i) {
    var t = texts[i];
    var valueMap = [
      [1, 2, 3],      // most questions
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],      // q6 reversed handled by value in options
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [3, 2, 1],      // q14 reversed
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [3, 2, 1],      // q27 reversed
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]
    ];
    return {
      id: skeleton.id,
      dim: skeleton.dim,
      text: t.text,
      options: t.options.map(function(label, oi) {
        return { label: label, value: valueMap[i][oi] };
      })
    };
  });
}

/* Build special questions */
function buildSpecialQuestions() {
  var lang = _qLang();
  var texts = I18N.specialQuestions[lang];
  // q1 values: [1,2,3,4]  q2 values: [1,2]
  var valueMaps = [[1, 2, 3, 4], [1, 2]];
  return [
    { id: 'drink_gate_q1', special: true, kind: 'drink_gate' },
    { id: 'drink_gate_q2', special: true, kind: 'drink_trigger' }
  ].map(function(skeleton, i) {
    var t = texts[i];
    return {
      id: skeleton.id,
      special: skeleton.special,
      kind: skeleton.kind,
      text: t.text,
      options: t.options.map(function(label, oi) {
        return { label: label, value: valueMaps[i][oi] };
      })
    };
  });
}

/* Backward-compatible global references (rebuilt on lang switch) */
var questions, specialQuestions, dimensionMeta, DIM_EXPLANATIONS;

function rebuildQuestionData() {
  questions = buildQuestions();
  specialQuestions = buildSpecialQuestions();
  dimensionMeta = getDimensionMeta();
  DIM_EXPLANATIONS = getDimExplanations();
}

/* Initial build */
rebuildQuestionData();

/* ── TYPE_LIBRARY (i18n-aware) ── */
var TYPE_LIBRARY_BASE = {
  "CTRL":   { "code": "CTRL" },
  "ATM-er": { "code": "ATM-er" },
  "Dior-s": { "code": "Dior-s" },
  "BOSS":   { "code": "BOSS" },
  "THAN-K": { "code": "THAN-K" },
  "OH-NO":  { "code": "OH-NO" },
  "GOGO":   { "code": "GOGO" },
  "SEXY":   { "code": "SEXY" },
  "LOVE-R": { "code": "LOVE-R" },
  "MUM":    { "code": "MUM" },
  "FAKE":   { "code": "FAKE" },
  "OJBK":   { "code": "OJBK" },
  "MALO":   { "code": "MALO" },
  "JOKE-R": { "code": "JOKE-R" },
  "WOC!":   { "code": "WOC!" },
  "THIN-K": { "code": "THIN-K" },
  "SHIT":   { "code": "SHIT" },
  "ZZZZ":   { "code": "ZZZZ" },
  "POOR":   { "code": "POOR" },
  "MONK":   { "code": "MONK" },
  "IMSB":   { "code": "IMSB" },
  "SOLO":   { "code": "SOLO" },
  "FUCK":   { "code": "FUCK" },
  "DEAD":   { "code": "DEAD" },
  "IMFW":   { "code": "IMFW" },
  "HHHH":   { "code": "HHHH" },
  "DRUNK":  { "code": "DRUNK" }
};

var TYPE_IMAGES = {
  "IMSB":   "./image/IMSB.png",
  "BOSS":   "./image/BOSS.png",
  "MUM":    "./image/MUM.png",
  "FAKE":   "./image/FAKE.png",
  "Dior-s": "./image/Dior-s.jpg",
  "DEAD":   "./image/DEAD.png",
  "ZZZZ":   "./image/ZZZZ.png",
  "GOGO":   "./image/GOGO.png",
  "FUCK":   "./image/FUCK.png",
  "CTRL":   "./image/CTRL.png",
  "HHHH":   "./image/HHHH.png",
  "SEXY":   "./image/SEXY.png",
  "OJBK":   "./image/OJBK.png",
  "JOKE-R": "./image/JOKE-R.jpg",
  "POOR":   "./image/POOR.png",
  "OH-NO":  "./image/OH-NO.png",
  "MONK":   "./image/MONK.png",
  "SHIT":   "./image/SHIT.png",
  "THAN-K": "./image/THAN-K.png",
  "MALO":   "./image/MALO.png",
  "ATM-er": "./image/ATM-er.png",
  "THIN-K": "./image/THIN-K.png",
  "SOLO":   "./image/SOLO.png",
  "LOVE-R": "./image/LOVE-R.png",
  "WOC!":   "./image/WOC.png",
  "DRUNK":  "./image/DRUNK.png",
  "IMFW":   "./image/IMFW.png"
};

var NORMAL_TYPES = [
  { "code": "CTRL",   "pattern": "HHH-HMH-MHH-HHH-MHM" },
  { "code": "ATM-er", "pattern": "HHH-HHM-HHH-HMH-MHL" },
  { "code": "Dior-s", "pattern": "MHM-MMH-MHM-HMH-LHL" },
  { "code": "BOSS",   "pattern": "HHH-HMH-MMH-HHH-LHL" },
  { "code": "THAN-K", "pattern": "MHM-HMM-HHM-MMH-MHL" },
  { "code": "OH-NO",  "pattern": "HHL-LMH-LHH-HHM-LHL" },
  { "code": "GOGO",   "pattern": "HHM-HMH-MMH-HHH-MHM" },
  { "code": "SEXY",   "pattern": "HMH-HHL-HMM-HMM-HLH" },
  { "code": "LOVE-R", "pattern": "MLH-LHL-HLH-MLM-MLH" },
  { "code": "MUM",    "pattern": "MMH-MHL-HMM-LMM-HLL" },
  { "code": "FAKE",   "pattern": "HLM-MML-MLM-MLM-HLH" },
  { "code": "OJBK",   "pattern": "MMH-MMM-HML-LMM-MML" },
  { "code": "MALO",   "pattern": "MLH-MHM-MLH-MLH-LMH" },
  { "code": "JOKE-R", "pattern": "LLH-LHL-LML-LLL-MLM" },
  { "code": "WOC!",   "pattern": "HHL-HMH-MMH-HHM-LHH" },
  { "code": "THIN-K", "pattern": "HHL-HMH-MLH-MHM-LHH" },
  { "code": "SHIT",   "pattern": "HHL-HLH-LMM-HHM-LHH" },
  { "code": "ZZZZ",   "pattern": "MHL-MLH-LML-MML-LHM" },
  { "code": "POOR",   "pattern": "HHL-MLH-LMH-HHH-LHL" },
  { "code": "MONK",   "pattern": "HHL-LLH-LLM-MML-LHM" },
  { "code": "IMSB",   "pattern": "LLM-LMM-LLL-LLL-MLM" },
  { "code": "SOLO",   "pattern": "LML-LLH-LHL-LML-LHM" },
  { "code": "FUCK",   "pattern": "MLL-LHL-LLM-MLL-HLH" },
  { "code": "DEAD",   "pattern": "LLL-LLM-LML-LLL-LHM" },
  { "code": "IMFW",   "pattern": "LLH-LHL-LML-LLL-MLL" }
];

var DRUNK_TRIGGER_QUESTION_ID = 'drink_gate_q2';

/* Build TYPE_LIBRARY for current language */
function buildTypeLibrary() {
  var lang = _qLang();
  var lib = {};
  Object.keys(TYPE_LIBRARY_BASE).forEach(function(code) {
    var i18nData = I18N.typeLibrary[lang][code];
    lib[code] = {
      code: code,
      cn: i18nData.cn,
      intro: i18nData.intro,
      desc: i18nData.desc
    };
  });
  return lib;
}

var TYPE_LIBRARY = buildTypeLibrary();
