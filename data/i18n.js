/* ─────────────────────────────────────────────
   SBTI i18n – Chinese / English translations
   ───────────────────────────────────────────── */

var I18N = {

/* ── UI strings ── */
ui: {
  zh: {
    pageTitle: 'SBTI 人格测试',
    pageDesc: 'SBTI 人格测试 —— 30题 + 隐藏关卡，15维度评分，25种人格结果。MBTI已经过时，来测测你真正是哪种人？',
    ogTitle: 'SBTI 人格测试',
    ogDesc: '30题 + 隐藏酒鬼关卡，15维度精准评分，25种辛辣人格结果，仅供娱乐。',
    heroTitle: 'MBTI已经过时，SBTI来了。',
    startBtn: '开始测试',
    authorLabel: '原作者：',
    authorLink: 'B站@蛆肉儿串儿',
    hosting: '托管：Cloudflare (免费)',
    domain: '域名：Spaceship (自费)',
    progressText: '{done} / {total}',
    testHintIncomplete: '全选完才会放行。世界已经够乱了，起码把题做完整。',
    testHintComplete: '都做完了。现在可以把你的电子魂魄交给结果页审判。',
    backHome: '返回首页',
    submitBtn: '提交并查看结果',
    posterAlt: '人格结果图',
    resultModeKickerNormal: '你的主类型',
    resultModeKickerDrunk: '隐藏人格已激活',
    resultModeKickerFallback: '系统强制兜底',
    matchBadgeDrunk: '匹配度 100% · 酒精异常因子已接管',
    matchBadgeFallback: '标准人格库最高匹配仅 {similarity}%',
    matchBadgeNormal: '匹配度 {similarity}% · 精准命中 {exact}/15 维',
    subDrunk: '乙醇亲和性过强，系统已直接跳过常规人格审判。',
    subFallback: '标准人格库对你的脑回路集体罢工了，于是系统把你强制分配给了 HHHH。',
    subNormal: '维度命中度较高，当前结果可视为你的第一人格画像。',
    analysisTitle: '该人格的简单解读',
    dimTitle: '十五维度评分',
    dimScore: '{level} / {score}分',
    noteTitle: '友情提示',
    funNoteNormal: '本测试仅供娱乐，别拿它当诊断、面试、相亲、分手、招魂、算命或人生判决书。你可以笑，但别太当真。',
    funNoteSpecial: '本测试仅供娱乐。隐藏人格和傻乐兜底都属于作者故意埋的损招，请勿把它当成医学、心理学、相学、命理学或灵异学依据。',
    authorBoxSummary: '作者的话',
    authorBoxExpand: '展开',
    authorBoxCollapse: '收起',
    authorP1: '本测试首发于b站up主蛆肉儿串儿（UID417038183），初衷是劝诫一位爱喝酒的朋友戒酒。',
    authorP2: '由于作者的人格是SHIT愤世者，所以平等的攻击了各位，在此抱歉！！不过我是一个绝世大美女，你们一定会原谅我，有B站的朋友们也可以关注我。',
    authorP3: '关于这个测试，我没法很好的平衡娱乐和专业性，因此对于一些人格的阐释较为模糊或完全不准（如屌丝可能并非真的屌丝），如有冒犯非常抱歉！！',
    authorP4: '再鉴于时间精力有限，就随便搞了一个先这样玩玩，后续会慢慢完善修改的，总之好玩为主，还请不要用于盈利呀。',
    restartBtn: '重新测试',
    toTopBtn: '回到首页',
    questionBadge: '第 {n} 题',
    questionMetaSpecial: '补充题',
    questionMetaDimHidden: '维度已隐藏',
    langToggle: 'EN',
    themeLabel_auto: '跟随系统',
    themeLabel_light: '日间模式',
    themeLabel_dark: '夜间模式'
  },
  en: {
    pageTitle: 'SBTI Personality Test',
    pageDesc: 'SBTI Personality Test — 30 questions + hidden level, 15-dimension scoring, 25 personality results. MBTI is outdated — find out who you really are!',
    ogTitle: 'SBTI Personality Test',
    ogDesc: '30 questions + hidden drunk level, 15-dimension scoring, 25 spicy personality results. For entertainment only.',
    heroTitle: 'MBTI is outdated. SBTI is here.',
    startBtn: 'Start Test',
    progressText: '{done} / {total}',
    testHintIncomplete: "Answer all questions before proceeding. The world's messy enough — at least finish the test.",
    testHintComplete: 'All done. Now surrender your digital soul to the result page for judgment.',
    backHome: 'Back to Home',
    submitBtn: 'Submit & View Results',
    posterAlt: 'Personality result image',
    resultModeKickerNormal: 'Your Primary Type',
    resultModeKickerDrunk: 'Hidden Personality Activated',
    resultModeKickerFallback: 'System Fallback',
    matchBadgeDrunk: '100% Match · Alcohol anomaly factor has taken over',
    matchBadgeFallback: 'Highest match in standard library only {similarity}%',
    matchBadgeNormal: '{similarity}% Match · {exact}/15 dimensions hit',
    subDrunk: 'Ethanol affinity too strong — the system skipped normal personality judgment.',
    subFallback: "The standard personality library collectively went on strike for your brain circuits, so the system forced you into HHHH.",
    subNormal: 'High dimension hit rate — this result can be treated as your primary personality portrait.',
    analysisTitle: 'Personality Brief',
    dimTitle: '15-Dimension Scores',
    dimScore: '{level} / {score} pts',
    noteTitle: 'Friendly Reminder',
    funNoteNormal: "This test is for entertainment only. Don't use it for diagnosis, job interviews, matchmaking, breakups, séances, fortune-telling, or life sentences. You can laugh, but don't take it too seriously.",
    funNoteSpecial: 'This test is for entertainment only. Hidden personalities and the HHHH fallback are deliberate tricks by the author — do not treat them as medical, psychological, physiognomic, numerological, or paranormal evidence.',
    authorBoxSummary: "Author's Note",
    authorBoxExpand: 'Expand',
    authorBoxCollapse: 'Collapse',
    authorP1: 'This test was first published by Bilibili creator 蛆肉儿串儿 (UID417038183). The original intention was to persuade a friend who loved drinking to quit.',
    authorP2: "Since the author's personality is SHIT (Cynic), everyone gets equally roasted — sorry about that!! But I'm a stunning beauty, so you'll definitely forgive me. Bilibili friends, feel free to follow me.",
    authorP3: "I couldn't perfectly balance entertainment and professionalism, so some personality descriptions are vague or inaccurate (e.g., Dior-s may not actually be a loser). Sorry if anything offends!!",
    authorP4: "Given limited time and energy, I just threw this together for fun. I'll refine it gradually. The main point is to have fun — please don't use it for profit.",
    restartBtn: 'Retake Test',
    toTopBtn: 'Back to Home',
    questionBadge: 'Q{n}',
    questionMetaSpecial: 'Bonus',
    questionMetaDimHidden: 'Dimension hidden',
    langToggle: '中文',
    themeLabel_auto: 'Follow System',
    themeLabel_light: 'Light Mode',
    themeLabel_dark: 'Dark Mode'
  }
},

/* ── Dimension meta ── */
dimensionMeta: {
  zh: {
    S1:  { name: 'S1 自尊自信',    model: '自我模型' },
    S2:  { name: 'S2 自我清晰度',  model: '自我模型' },
    S3:  { name: 'S3 核心价值',    model: '自我模型' },
    E1:  { name: 'E1 依恋安全感',  model: '情感模型' },
    E2:  { name: 'E2 情感投入度',  model: '情感模型' },
    E3:  { name: 'E3 边界与依赖',  model: '情感模型' },
    A1:  { name: 'A1 世界观倾向',  model: '态度模型' },
    A2:  { name: 'A2 规则与灵活度', model: '态度模型' },
    A3:  { name: 'A3 人生意义感',  model: '态度模型' },
    Ac1: { name: 'Ac1 动机导向',   model: '行动驱力模型' },
    Ac2: { name: 'Ac2 决策风格',   model: '行动驱力模型' },
    Ac3: { name: 'Ac3 执行模式',   model: '行动驱力模型' },
    So1: { name: 'So1 社交主动性', model: '社交模型' },
    So2: { name: 'So2 人际边界感', model: '社交模型' },
    So3: { name: 'So3 表达与真实度', model: '社交模型' }
  },
  en: {
    S1:  { name: 'S1 Self-Esteem',       model: 'Self Model' },
    S2:  { name: 'S2 Self-Clarity',      model: 'Self Model' },
    S3:  { name: 'S3 Core Values',       model: 'Self Model' },
    E1:  { name: 'E1 Attachment Security', model: 'Emotion Model' },
    E2:  { name: 'E2 Emotional Investment', model: 'Emotion Model' },
    E3:  { name: 'E3 Boundaries & Dependence', model: 'Emotion Model' },
    A1:  { name: 'A1 Worldview',         model: 'Attitude Model' },
    A2:  { name: 'A2 Rules & Flexibility', model: 'Attitude Model' },
    A3:  { name: 'A3 Meaning in Life',   model: 'Attitude Model' },
    Ac1: { name: 'Ac1 Motivation',       model: 'Action Model' },
    Ac2: { name: 'Ac2 Decision Style',   model: 'Action Model' },
    Ac3: { name: 'Ac3 Execution Mode',   model: 'Action Model' },
    So1: { name: 'So1 Social Initiative', model: 'Social Model' },
    So2: { name: 'So2 Interpersonal Boundaries', model: 'Social Model' },
    So3: { name: 'So3 Expression & Authenticity', model: 'Social Model' }
  }
},

/* ── Dimension explanations ── */
dimExplanations: {
  zh: {
    S1: {
      L: '对自己下手比别人还狠，夸你两句你都想先验明真伪。',
      M: '自信值随天气波动，顺风能飞，逆风先缩。',
      H: '心里对自己大致有数，不太会被路人一句话打散。'
    },
    S2: {
      L: '内心频道雪花较多，常在"我是谁"里循环缓存。',
      M: '平时还能认出自己，偶尔也会被情绪临时换号。',
      H: '对自己的脾气、欲望和底线都算门儿清。'
    },
    S3: {
      L: '更在意舒服和安全，没必要天天给人生开冲刺模式。',
      M: '想上进，也想躺会儿，价值排序经常内部开会。',
      H: '很容易被目标、成长或某种重要信念推着往前。'
    },
    E1: {
      L: '感情里警报器灵敏，已读不回都能脑补到大结局。',
      M: '一半信任，一半试探，感情里常在心里拉锯。',
      H: '更愿意相信关系本身，不会被一点风吹草动吓散。'
    },
    E2: {
      L: '感情投入偏克制，心门不是没开，是门禁太严。',
      M: '会投入，但会给自己留后手，不至于全盘梭哈。',
      H: '一旦认定就容易认真，情绪和精力都给得很足。'
    },
    E3: {
      L: '容易黏人也容易被黏，关系里的温度感很重要。',
      M: '亲密和独立都要一点，属于可调节型依赖。',
      H: '空间感很重要，再爱也得留一块属于自己的地。'
    },
    A1: {
      L: '看世界自带防御滤镜，先怀疑，再靠近。',
      M: '既不天真也不彻底阴谋论，观望是你的本能。',
      H: '更愿意相信人性和善意，遇事不急着把世界判死刑。'
    },
    A2: {
      L: '规则能绕就绕，舒服和自由往往排在前面。',
      M: '该守的时候守，该变通的时候也不死磕。',
      H: '秩序感较强，能按流程来就不爱即兴炸场。'
    },
    A3: {
      L: '意义感偏低，容易觉得很多事都像在走过场。',
      M: '偶尔有目标，偶尔也想摆烂，人生观处于半开机。',
      H: '做事更有方向，知道自己大概要往哪边走。'
    },
    Ac1: {
      L: '做事先考虑别翻车，避险系统比野心更先启动。',
      M: '有时想赢，有时只想别麻烦，动机比较混合。',
      H: '更容易被成果、成长和推进感点燃。'
    },
    Ac2: {
      L: '做决定前容易多转几圈，脑内会议常常超时。',
      M: '会想，但不至于想死机，属于正常犹豫。',
      H: '拍板速度快，决定一下就不爱回头磨叽。'
    },
    Ac3: {
      L: '执行力和死线有深厚感情，越晚越像要觉醒。',
      M: '能做，但状态看时机，偶尔稳偶尔摆。',
      H: '推进欲比较强，事情不落地心里都像卡了根刺。'
    },
    So1: {
      L: '社交启动慢热，主动出击这事通常得攒半天气。',
      M: '有人来就接，没人来也不硬凑，社交弹性一般。',
      H: '更愿意主动打开场子，在人群里不太怕露头。'
    },
    So2: {
      L: '关系里更想亲近和融合，熟了就容易把人划进内圈。',
      M: '既想亲近又想留缝，边界感看对象调节。',
      H: '边界感偏强，靠太近会先本能性后退半步。'
    },
    So3: {
      L: '表达更直接，心里有啥基本不爱绕。',
      M: '会看气氛说话，真实和体面通常各留一点。',
      H: '对不同场景的自我切换更熟练，真实感会分层发放。'
    }
  },
  en: {
    S1: {
      L: "Harsher on yourself than anyone else — compliments need verification before you'll accept them.",
      M: 'Confidence fluctuates with the weather: soaring in tailwinds, shrinking in headwinds.',
      H: "Generally know your own worth — a stranger's words won't easily shake you."
    },
    S2: {
      L: 'Inner channel mostly static — frequently buffering on "Who am I?"',
      M: 'Usually recognize yourself, but emotions occasionally hijack your identity.',
      H: 'Know your temper, desires, and boundaries quite well.'
    },
    S3: {
      L: 'Prefer comfort and safety — no need to sprint through life every day.',
      M: 'Want to achieve but also want to rest — values constantly in committee meeting.',
      H: 'Easily driven by goals, growth, or an important belief.'
    },
    E1: {
      L: 'Emotional alarm system on high alert — "read but not replied" spirals into a full saga.',
      M: 'Half trust, half testing — constant tug-of-war in relationships.',
      H: 'More willing to trust the relationship itself — not spooked by every little ripple.'
    },
    E2: {
      L: 'Emotional investment is restrained — the heart door has strict access control.',
      M: 'Will invest, but keeps an escape hatch — not going all in.',
      H: 'Once committed, gets serious — emotions and energy flow generously.'
    },
    E3: {
      L: 'Easily clingy and easily clung to — warmth in relationships matters a lot.',
      M: 'Want both intimacy and independence — adjustable dependence level.',
      H: 'Space matters — no matter how much you love someone, you need your own territory.'
    },
    A1: {
      L: 'View the world through a defense filter — suspect first, approach later.',
      M: 'Neither naive nor a full conspiracy theorist —观望 (wait-and-see) is your instinct.',
      H: 'More willing to believe in human goodness — not rushing to sentence the world to death.'
    },
    A2: {
      L: 'Rules are suggestions — comfort and freedom usually rank higher.',
      M: 'Follow rules when needed, improvise when needed — not stubborn about either.',
      H: 'Strong sense of order — if there\'s a process, why improvise?'
    },
    A3: {
      L: 'Low sense of meaning — many things feel like going through the motions.',
      M: 'Occasionally have goals, occasionally want to slack off — life philosophy in standby mode.',
      H: 'More purposeful — generally know which direction to head.'
    },
    Ac1: {
      L: 'Act to avoid disaster first — risk-aversion system boots up before ambition.',
      M: 'Sometimes want to win, sometimes just want no trouble — mixed motivations.',
      H: 'More easily ignited by results, growth, and the feeling of progress.'
    },
    Ac2: {
      L: 'Tend to overthink before deciding — internal meetings frequently run overtime.',
      M: 'Will think, but won\'t overheat — normal-level hesitation.',
      H: 'Quick to decide — once the call is made, no going back and forth.'
    },
    Ac3: {
      L: 'Execution and deadlines have a deep bond — the later, the more awakened.',
      M: 'Can get things done, but depends on timing — sometimes steady, sometimes slacking.',
      H: 'Strong drive to push forward — unfinished tasks feel like a splinter in the mind.'
    },
    So1: {
      L: 'Slow social startup — initiating takes building up courage for half a day.',
      M: 'Will engage if approached, won\'t force it if not — moderate social elasticity.',
      H: 'More willing to break the ice — not afraid to stand out in a crowd.'
    },
    So2: {
      L: 'Prefer closeness and fusion in relationships — once familiar, people quickly enter the inner circle.',
      M: 'Want closeness but also breathing room — boundary calibration depends on the person.',
      H: 'Strong sense of boundaries — instinctively step back if someone gets too close.'
    },
    So3: {
      L: 'More direct in expression — if something\'s on your mind, you don\'t beat around the bush.',
      M: 'Read the room before speaking — balance authenticity and politeness.',
      H: 'More skilled at switching between selves for different contexts — authenticity is metered out in layers.'
    }
  }
},

/* ── Question texts & options ── */
questions: {
  zh: [
    { text: '我不仅是屌丝，我还是joker,我还是咸鱼，这辈子没谈过一场恋爱，胆怯又自卑，我的青春就是一场又一场的意淫，每一天幻想着我也能有一个女孩子和我一起压马路，一起逛街，一起玩，现实却是爆了父母金币，读了个烂学校，混日子之后找班上，没有理想，没有目标，没有能力的三无人员，每次看到你能在网上开屌丝的玩笑，我都想哭，我就是地底下的老鼠，透过下水井的缝隙，窥探地上的各种美好，每一次看到这种都是对我心灵的一次伤害，对我生存空间的一次压缩，求求哥们给我们这种小丑一点活路吧，我真的不想在白天把枕巾哭湿一大片',
      options: ['我哭了。。', '这是什么。。', '这不是我！'] },
    { text: '我不够好，周围的人都比我优秀',
      options: ['确实', '有时', '不是'] },
    { text: '我很清楚真正的自己是什么样的',
      options: ['不认同', '中立', '认同'] },
    { text: '我内心有真正追求的东西',
      options: ['不认同', '中立', '认同'] },
    { text: '我一定要不断往上爬、变得更厉害',
      options: ['不认同', '中立', '认同'] },
    { text: '外人的评价对我来说无所吊谓。',
      options: ['不认同', '中立', '认同'] },
    { text: '对象超过5小时没回消息，说自己窜稀了，你会怎么想？',
      options: ['拉稀不可能5小时，也许ta隐瞒了我。', '在信任和怀疑之间摇摆。', '也许今天ta真的不太舒服。'] },
    { text: '我在感情里经常担心被对方抛弃',
      options: ['是的', '偶尔', '不是'] },
    { text: '我对天发誓，我对待每一份感情都是认真的！',
      options: ['并没有', '也许？', '是的！（问心无愧骄傲脸）'] },
    { text: '你的恋爱对象是一个尊老爱幼，温柔敦厚，洁身自好，光明磊落，大义凛然，能言善辩，口才流利，观察入微，见多识广，博学多才，诲人不倦，和蔼可亲，平易近人，心地善良，慈眉善目，积极进取，意气风发，玉树临风，国色天香，倾国倾城，花容月貌的人，此时你会？',
      options: ['就算ta再优秀我也不会陷入太深。', '会介于A和C之间。', '会非常珍惜ta，也许会变成恋爱脑。'] },
    { text: '恋爱后，对象非常黏人，你作何感想？',
      options: ['那很爽了', '都行无所谓', '我更喜欢保留独立空间'] },
    { text: '我在任何关系里都很重视个人空间',
      options: ['我更喜欢依赖与被依赖', '看情况', '是的！（斩钉截铁地说道）'] },
    { text: '大多数人是善良的',
      options: ['其实邪恶的人心比世界上的痔疮更多。', '也许吧。', '是的，我愿相信好人更多。'] },
    { text: '你走在街上，一位萌萌的小女孩蹦蹦跳跳地朝你走来（正脸、侧脸看都萌，用vivo、苹果、华为、OPPO手机看都萌，实在是非常萌的那种），她递给你一根棒棒糖，此时你作何感想？',
      options: ['呜呜她真好真可爱！居然给我棒棒糖！', '一脸懵逼，作挠头状', '这也许是一种新型诈骗？还是走开为好。'] },
    { text: '快考试了，学校规定必须上晚自习，请假会扣分，但今晚你约了女/男神一起玩《绝地求生：刺激战场》（一款刺激的游戏），你怎么办？',
      options: ['翘了！反正就一次！', '干脆请个假吧。', '都快考试了还去啥。'] },
    { text: '我喜欢打破常规，不喜欢被束缚',
      options: ['认同', '保持中立', '不认同'] },
    { text: '我做事通常有目标。',
      options: ['不认同', '中立', '认同'] },
    { text: '突然某一天，我意识到人生哪有什么他妈的狗屁意义，人不过是和动物一样被各种欲望支配着，纯纯是被激素控制的东西，饿了就吃，困了就睡，一发情就想交配，我们简直和猪狗一样没什么区别。',
      options: ['是这样的。', '也许是，也许不是。', '这简直是胡扯'] },
    { text: '我做事主要为了取得成果和进步，而不是避免麻烦和风险。',
      options: ['不认同', '中立', '认同'] },
    { text: '你因便秘坐在马桶上（已长达30分钟），拉不出很难受。此时你更像',
      options: ['再坐三十分钟看看，说不定就有了。', '用力拍打自己的屁股并说："死屁股，快拉啊！"', '使用开塞露，快点拉出来才好。'] },
    { text: '我做决定比较果断，不喜欢犹豫',
      options: ['不认同', '中立', '认同'] },
    { text: '此题没有题目，请盲选',
      options: ['反复思考后感觉应该选A？', '啊，要不选B？', '不会就选C？'] },
    { text: '别人说你"执行力强"，你内心更接近哪句？',
      options: ['我被逼到最后确实执行力超强。。。', '啊，有时候吧。', '是的，事情本来就该被推进'] },
    { text: '我做事常常有计划，____',
      options: ['然而计划不如变化快。', '有时能完成，有时不能。', '我讨厌被打破计划。'] },
    { text: '你因玩《第五人格》（一款刺激的游戏）而结识许多网友，并被邀请线下见面，你的想法是？',
      options: ['网上口嗨下就算了，真见面还是有点忐忑。', '见网友也挺好，反正谁来聊我就聊两句。', '我会打扮一番并热情聊天，万一呢，我是说万一呢？'] },
    { text: '朋友带了ta的朋友一起来玩，你最可能的状态是',
      options: ['对"朋友的朋友"天然有点距离感，怕影响二人关系', '看对方，能玩就玩。', '朋友的朋友应该也算我的朋友！要热情聊天'] },
    { text: '我和人相处主打一个电子围栏，靠太近会自动报警。',
      options: ['认同', '中立', '不认同'] },
    { text: '我渴望和我信任的人关系密切，熟得像失散多年的亲戚。',
      options: ['认同', '中立', '不认同'] },
    { text: '有时候你明明对一件事有不同的、负面的看法，但最后没说出来。多数情况下原因是：',
      options: ['这种情况较少。', '可能碍于情面或者关系。', '不想让别人知道自己是个阴暗的人。'] },
    { text: '我在不同人面前会表现出不一样的自己',
      options: ['不认同', '中立', '认同'] }
  ],
  en: [
    { text: "I'm not just a loser — I'm a joker, I'm a salted fish. Never had a real relationship in my life, timid and insecure. My youth was one fantasy after another, dreaming every day of having a girl to stroll the streets with, go shopping with, hang out with. Reality? I drained my parents' savings, went to a trashy school, drifted through and then looked for a job — no ideals, no goals, no abilities, a triple-zero entity. Every time I see someone making loser jokes online, I want to cry. I'm the rat underground, peeking through the sewer grate at all the beautiful things above. Each glimpse is another wound to my soul, another compression of my living space. Bro, please, give us clowns a way out. I really don't want to cry my pillow soaking wet in broad daylight.",
      options: ["I'm crying...", "What even is this...", "That's not me!"] },
    { text: "I'm not good enough — everyone around me is better.",
      options: ['True', 'Sometimes', "No"] },
    { text: "I clearly know who I really am.",
      options: ['Disagree', 'Neutral', 'Agree'] },
    { text: "I have something I truly pursue deep down.",
      options: ['Disagree', 'Neutral', 'Agree'] },
    { text: "I must keep climbing and becoming stronger.",
      options: ['Disagree', 'Neutral', 'Agree'] },
    { text: "Other people's opinions don't mean squat to me.",
      options: ['Disagree', 'Neutral', 'Agree'] },
    { text: "Your partner hasn't replied for 5+ hours and claims they had diarrhea. What do you think?",
      options: ["Diarrhea doesn't last 5 hours. They might be hiding something.", "Torn between trust and suspicion.", "Maybe they're genuinely not feeling well today."] },
    { text: "I often worry about being abandoned by my partner in relationships.",
      options: ['Yes', 'Occasionally', 'No'] },
    { text: "I swear on my life — I take every relationship seriously!",
      options: ['Not really', 'Maybe?', "Yes! (Proud face with clear conscience)"] },
    { text: "Your partner is filial, gentle, principled, upright, eloquent, observant, knowledgeable, approachable, kind-hearted, ambitious, gorgeous, stunningly beautiful — what do you do?",
      options: ["Even if they're amazing, I won't fall too deep.", "Somewhere between A and C.", "I'd cherish them deeply — might become love-brained."] },
    { text: "After dating, your partner becomes very clingy. How do you feel?",
      options: ["That's great!", "Whatever, fine either way", "I prefer keeping my independent space"] },
    { text: "I value personal space in any relationship.",
      options: ["I prefer mutual dependence", "Depends on the situation", "Yes! (Said resolutely)"] },
    { text: "Most people are kind.",
      options: ["Actually, evil hearts outnumber hemorrhoids worldwide.", "Maybe.", "Yes — I choose to believe good people are the majority."] },
    { text: "You're walking down the street and a super cute little girl bounces over to you (cute from every angle, on every phone brand — really, seriously cute). She hands you a lollipop. What do you think?",
      options: ["Aww she's so sweet and adorable! She gave me a lollipop!", "Totally bewildered, scratching head", "This might be a new type of scam? Better walk away."] },
    { text: "Exams are coming and the school requires evening study hall — skipping costs points. But tonight you've got a date with your crush to play PUBG (an exciting game). What do you do?",
      options: ["Skip it! It's just one time!", "Just ask for leave.", "Exams are coming — why would I go?"] },
    { text: "I like breaking conventions and dislike being constrained.",
      options: ['Agree', 'Neutral', 'Disagree'] },
    { text: "I usually have goals when doing things.",
      options: ['Disagree', 'Neutral', 'Agree'] },
    { text: "Suddenly one day, I realized life has no freaking meaning whatsoever. Humans are just animals driven by desires — purely hormone-controlled creatures. Eat when hungry, sleep when tired, want to mate when aroused. We're basically no different from pigs and dogs.",
      options: ["That's about right.", "Maybe, maybe not.", "That's total nonsense"] },
    { text: "I do things mainly to achieve results and progress, not to avoid trouble and risk.",
      options: ['Disagree', 'Neutral', 'Agree'] },
    { text: "You've been constipated on the toilet for 30 minutes and it's miserable. You're more like:",
      options: ["Sit another 30 minutes — maybe it'll come.", "Slap your own butt and yell: 'Dead butt, poop already!'", "Use a suppository — just get it out quickly."] },
    { text: "I make decisions decisively and dislike hesitation.",
      options: ['Disagree', 'Neutral', 'Agree'] },
    { text: "This question has no question. Please pick blindly.",
      options: ["After careful thought... maybe A?", "Uh, maybe B?", "When in doubt, pick C?"] },
    { text: 'When someone says you "get things done," which line resonates more?',
      options: ["When pushed to the very end, my execution is indeed super strong...", "Well, sometimes.", "Yes — things are meant to be pushed forward."] },
    { text: "I often make plans, ____",
      options: ["But plans can't keep up with changes.", "Sometimes I complete them, sometimes not.", "And I hate having my plans disrupted."] },
    { text: "You've made many online friends through Identity V (an exciting game) and get invited to meet IRL. Your thoughts?",
      options: ["Online banter is enough — meeting IRL is kinda nerve-wracking.", "Meeting online friends is fine — whoever wants to chat, I'll chat.", "I'll dress up and chat enthusiastically — you never know, I mean, you never know?"] },
    { text: "Your friend brings their friend along to hang out. You're most likely to:",
      options: ["Feel a natural distance toward 'friend\'s friend' — worry it might affect your duo dynamic", "Depends on the person — if we click, we click.", "A friend's friend should be my friend too! Gotta chat warmly"] },
    { text: "I run an electronic fence when interacting with people — get too close and the alarm goes off.",
      options: ['Agree', 'Neutral', 'Disagree'] },
    { text: "I crave closeness with people I trust — as familiar as long-lost relatives.",
      options: ['Agree', 'Neutral', 'Disagree'] },
    { text: "Sometimes you have a different, negative take on something but end up keeping quiet. Usually because:",
      options: ["This doesn't happen much.", "Probably out of face or relationship concerns.", "Don't want others to know I'm a dark-minded person."] },
    { text: "I show different sides of myself to different people.",
      options: ['Disagree', 'Neutral', 'Agree'] }
  ]
},

/* ── Special questions ── */
specialQuestions: {
  zh: [
    { text: '您平时有什么爱好？',
      options: ['吃喝拉撒', '艺术爱好', '饮酒', '健身'] },
    { text: '您对饮酒的态度是？',
      options: ['小酌怡情，喝不了太多。', '我习惯将白酒灌在保温杯，当白开水喝，酒精令我信服。'] }
  ],
  en: [
    { text: "What are your hobbies?",
      options: ['Eating & sleeping', 'Arts & culture', 'Drinking alcohol', 'Fitness'] },
    { text: "What's your attitude toward drinking?",
      options: ["A little drink is nice — can't handle much.", "I keep baijiu in a thermos and drink it like water. Alcohol makes me a believer."] }
  ]
},

/* ── Type library ── */
typeLibrary: {
  zh: {
    CTRL:   { cn: '拿捏者',   intro: '怎么样，被我拿捏了吧？', desc: '恭喜您，您测出了全中国最为罕见的人格，您是宇宙熵增定律的天然反抗者！全世界所谓成功人士里，99.99%都是您的拙劣模仿者。CTRL人格，是行走的人形自走任务管理器，普通人眼中的"规则"，在您这里只是出厂的基础参数设置；凡人所谓的"计划"，对您而言不过是心血来潮的随手涂鸦。拥有一个CTRL朋友意味着什么？意味着你的人生导航系统会变得更加精准、高效。因为CTRL最会拿捏了。CTRL会在你人生列车即将脱轨的前一秒，用一个"Ctrl+S"帮你硬核存档，再用一套无法拒绝的逻辑把你强行拽回正轨。他们是你混乱生活最后的备份盘，是宇宙崩塌前唯一还亮着的那个重启键。' },
    'ATM-er': { cn: '送钱者', intro: '你以为我很有钱吗？', desc: '恭喜您，您竟然测出了这个世界上最稀有的人格。您或将成为金融界的未解之谜——是的，ATM-er不一定真的"送钱"，但可能永远在"支付"。支付时间、支付精力、支付耐心、支付一个本该安宁的夜晚。因此像一部老旧但坚固的ATM机，插进去的是别人的焦虑和麻烦，吐出来的是"没事，有我"的安心保证。您的人生就是一场盛大的、无人喝彩的单人付账秀。您竟用磐石般的可靠，承受了瀑布般的索取，偶尔夜深人静才会对着账单——可能是精神上的——发出一声叹息：我这该死的、无处安放的责任心啊。' },
    'Dior-s': { cn: '屌丝', intro: '等着我屌丝逆袭。', desc: '恭喜！您并非屌丝，您是犬儒主义先贤第欧根尼失散多年的精神传人，因为屌丝的全称是 Diogenes\' Original Realist - sage。Dior-s人格，是对当代消费主义陷阱和成功学PUA最彻底的蔑视。他们不是"不求上进"，而是早已看穿一切"上进"的尽头不过是更高级的牢房。屌丝有着大智慧。当别人在追逐风口，被时代的巨浪拍得七荤八素时，Dior-s早已在自己的精神木桶里晒着太阳，达到了"人桶合一"的至高境界。他们信奉的不是空话，是经过亿万次实践检验的物理法则与生物本能：一、躺着比站着舒服；二、饭点到了就得干饭。' },
    BOSS:   { cn: '领导者', intro: '方向盘给我，我来开。', desc: 'BOSS是一个手里永远拿着方向盘的人。哪怕油箱已经亮了红灯，哪怕导航在胡说八道，你都会面无表情地说一句：我来开。然后真的把车开到了目的地。该人格拥有独立的物理法则——永恒向上定律。BOSS人格看世界，就像玩通关了的玩家在看新手教程。效率是他们的信仰，秩序是他们的呼吸。他们不是"自带领袖气场"，他们本身就是人形的气场发生器，方圆五米内，空气都会自动变得严肃而高效。他们眼中的"自我突破"，约等于普通人眼中的"自虐"。今天掌握一门新语言，明天考下一个专业证书，后天就计划殖民火星。你说这太卷了，他会用一种看弱鸡的眼神看着你：不是我太狠，是你太松。' },
    'THAN-K': { cn: '感恩者', intro: '我感谢苍天！我感谢大地！', desc: '恭喜您，您测出了全中国最为罕见的人格。您应当感谢我！感谢您在此刻拥有了生命的滋润！倘若您上班路上堵车了？您也应当说一句：我感谢这次堵车，它让我有更多时间聆听这首美妙的歌曲，并欣赏窗外每一张因焦虑而扭曲的脸庞，让我更珍惜内心的平静。是的，THAN-K拥有温润如玉的性格和海纳百川的胸怀。他们眼中的世界没有完全的坏人，只有"尚未被感恩光芒照耀到的朋友"。拥有一个THAN-K朋友，就像身边多了一个永不枯竭的正能量发射塔。TA甚至能帮你从墙角的霉斑里发现一幅梵高风格的星空图。' },
    'OH-NO':  { cn: '哦不人', intro: '哦不！我怎么会是这个人格？！', desc: '"哦不！"并非恐惧的尖叫，而是一种顶级的智慧。当普通人看到一个杯子放在桌沿，哦不人看到的是一场由"水渍-短路-火灾-全楼疏散-经济损失-蝴蝶效应-世界末日"构成的灾难史诗。于是，伴随着一声发自灵魂深处的 Oh, no!，他们会以迅雷不及掩耳之势把杯子挪到桌子正中央，然后再垫上一张吸水杯垫。哦不人对"边界"有一种近乎偏执的尊重：你的就是你的，我的就是我的。所有意外和风险都已经在他的"Oh, no!"声中，被扼杀在了萌芽状态。他们是秩序的守护神，是混乱世界里最后那批神经绷得很直的体面人。' },
    GOGO:   { cn: '行者', intro: 'gogogo~出发咯', desc: '经研究发现，GOGO人格的大脑构造与常人有根本性不同。GOGO活在一个极致的"所见即所得"世界里，人生信条简单粗暴到令人发指：只要我闭上眼睛，天就是黑的；只要我把钱都花了，我就没有钱了；只要我站在斑马线上，我现在就是行人了。逻辑完美闭环，根本无法反驳。别人还在为"先有鸡还是先有蛋"而辩论，GOGO行者已经把鸡和蛋一起做成了一盘"鸡生蛋，蛋生鸡之终极奥义盖浇饭"。他们不是在"解决问题"，他们是在"清除待办事项"。对他们来说，世界上只有两种状态：已完成，和即将被我完成。' },
    SEXY:   { cn: '尤物', intro: '您就是天生的尤物！', desc: '当您走进一个房间，照明系统会自动将您识别为天生的尤物，并自觉调暗亮度，以避免能源浪费。当您微笑时，您就变成了微笑着的尤物，周围的空气湿度也会显著下降，因为水蒸气都凝结成了人眼中的爱心。无论是谁，都容易对您的存在产生一种超标的注意力。传说，如果有足够多的SEXY人格聚集在一起开派对，其释放出的综合魅力能量足以暂时扭曲时空结构，让参加者产生"时间变慢了"的幸福错觉。他们不需要卖力表达，很多时候，单是存在本身就已经很像一篇华丽到过分的赋。' },
    'LOVE-R': { cn: '多情者', intro: '爱意太满，现实显得有点贫瘠。', desc: 'LOVE-R人格像远古神话时代幸存至今的珍稀物种，其存在概率比你在马桶里钓到作者胳膊的概率还低。您简直是这个钢铁森林时代最后的、也是最不合时宜的吟游诗人。因为您的情感处理器不是二进制的，而是彩虹制的。一片落叶，在常人眼里只是"秋天来了"，在LOVE-R眼中，则是一场关于轮回、牺牲与无言之爱的十三幕悲喜剧。您内心世界像一座永不关门的主题公园，一生都在寻找那个能看懂园区地图、并愿意陪你坐旋转木马直到宇宙尽头的灵魂伴侣。' },
    MUM:    { cn: '妈妈', intro: '或许...我可以叫你妈妈吗....?', desc: '恭喜您，您测出了全中国最稀有的妈妈人格。是的，在混沌未开、时间尚无姓名之前，在第一颗恒星打出第一个嗝之前，就已经有了妈妈。妈妈人格的底色是温柔，擅长感知情绪，具有超强共情力，知道什么时候该停下来，什么时候该对自己说一句"算了"。妈妈像一个医生，治愈了别人的不开心。只可惜，当妈妈落泪时，TA给自己的药，剂量总是比给别人小一号。MUM对自己的温柔，常常打了折。' },
    FAKE:   { cn: '伪人', intro: '已经，没有人类了。', desc: 'SCP基金会紧急报告：项目编号 SCP-CN-████ "伪人"。在社交场合，伪人是八面玲珑的存在，因为他们切换人格面具比切换手机输入法还快。上一秒还是推心置腹的铁哥们模式，下一秒领导来了，瞬间切换成沉稳可靠好员工模式，连脸上的光泽度和卷曲度都会发生微调。你以为你交到了一个真心懂你的朋友？醒醒。你只是幸运地遇到了一个善于伪装、高性能的仿生人罢了。夜深人静时，伪人把面具一层层摘下来，最后才发现，面具下空得很，正是这些面具构成了自己。' },
    OJBK:   { cn: '无所谓人', intro: '我说随便，是真的随便。', desc: '让我们直面这个词的粗犷本质：OJBK。这已经不是一种人格，而是一种统治哲学。当凡人面临"中午吃米饭还是面条"的世纪抉择时，大脑在激烈燃烧卡路里；而OJBK人格，会用一种批阅奏章般的淡然，轻飘飘地吐出两个字：都行。这不是没主见，这是在告诉你：尔等凡俗的选择，于朕而言，皆为蝼蚁。为什么不争执？因为跟草履虫辩论宇宙的未来毫无意义。为什么不较真？因为帝王不会在意脚下的尘埃是往左飘还是往右飘。' },
    MALO:   { cn: '吗喽', intro: '人生是个副本，而我只是一只吗喽。', desc: '朋友，你不是"童心未泯"，你压根就没进化。你的灵魂还停留在那个挂在树上荡秋千、看见香蕉就两眼放光的快乐时代。当人类祖先决定从树上下来、学会直立行走、穿上西装打领带时，吗喽人格的祖先在旁边的大树上看着他们，挠了挠屁股，嘴里发出一声不屑的"吱"。他们看透了一切：所谓的"文明"，不过是一场最无聊、最不好玩的付费游戏。规则偶尔是可以打破的，天花板是用来倒挂的，会议室是用来表演后空翻的。MALO本身就是一个从巨大脑洞里掉出来、忘了关门的奇思妙想。' },
    'JOKE-R': { cn: '小丑', intro: '原来我们都是小丑。', desc: '请注意，JOKE-R人格不是一个"人"，更像一个把笑话穿在身上的小丑。你打开一层，是个笑话；再打开一层，是个段子；你一层层打开，直到最后，你发现最里面……是空的，只剩下一点微弱的回声在说：哈，没想到吧。JOKE-R是社交场合的气氛组组长兼唯一指定火力输出。有他们在，场子就不会冷。所有人前仰后合地笑着，而笑得最开心的，往往也是他们自己——用最大的笑声，盖住心碎的声音。' },
    'WOC!':  { cn: '握草人', intro: '卧槽，我怎么是这个人格？', desc: '我们发现了一种神奇的生物——WOC!人。他们拥有两种完全独立的操作系统：一个叫"表面系统"，负责发出"我操""牛逼""啊？"等一系列大惊小怪的拟声词；另一个叫"后台系统"，负责冷静分析：嗯，果然不出我所料。WOC!人只会卧槽，不会多管闲事，因为他们深知，给傻逼讲道理，就像扶着烂泥上墙，不仅浪费体力，还弄自己一手屎。所以他们选择，握着一根智慧的大草，用一声饱含深情的"WOC！"来为这个疯狂的世界献上最高敬意。' },
    'THIN-K': { cn: '思考者', intro: '已深度思考100s。', desc: '经研究发现，THIN-K人格的大脑构造与常人有根本性不同。正如名称所示，您的大脑长时间处于思考状态。您十分会审判信息，注重论点、论据、逻辑推理、潜在偏见，乃至"作者本人三代以内思想背景调查报告"的全套材料。在这个信息爆炸的时代，您绝不会轻易盲从，会在关系中衡量利弊，也十分捍卫自己的自我空间。当别人看到您独处时在发呆？愚蠢，那不是发呆，那是您的大脑正在对今天接收到的所有信息进行分类、归档和销毁。' },
    SHIT:   { cn: '愤世者', intro: '这个世界，构石一坨。', desc: '恭喜您，SHIT人格是宇宙中已知的唯一一种稀有人格。所谓狗屎，并不是在抱怨，而是在进行一种神秘仪式。SHIT的行为模式是一场惊天动地的悖论戏剧。嘴上：这个项目简直是屎。手上：默默打开 Excel，开始建构函数模型和甘特图。嘴上：这帮同事都是 shit。手上：在同事搞砸之后，一边烦着，一边熬夜把烂摊子收拾得明明白白。嘴上：这个世界就是一坨 shit，赶紧毁灭吧。手上：第二天早上七点准时起床，挤上 shit 一样的地铁，去干那份 shit 一样的工作。别怕，那不是世界末日的警报，那是他马上要开始拯救世界的冲锋号。' },
    ZZZZ:   { cn: '装死者', intro: '我没死，我只是在睡觉。', desc: '恭喜您，您测出了全中国最稀有的装死人格。群里99+条消息您可以视而不见，但当有人发出"@全体成员 还有半小时就截止了"的最后通牒时，您也许会像刚从千年古墓里苏醒一样，缓缓地敲出一个"收到"，然后在29分钟内，交出一份虽然及格的答卷。是的，直到"死线"这个唯一的、最高权限的指令出现，您就真正爆发了，不鸣则已，一鸣惊人。您向宇宙证明了一个真理：有时什么都不做，就不会做错。' },
    POOR:   { cn: '贫困者', intro: '我穷，但我很专。', desc: '恭喜您，您测出了【POOR - 贫困者】。这个"贫困"不是钱包余额的判决书，更像一种欲望断舍离后的资源再分配。别人把精力撒成漫天二维码，你把精力压成一束激光，照哪儿，哪儿就开始冒烟。POOR的世界很简单：不重要的东西一律降噪，重要的东西狠狠干到底。热闹、社交、虚荣、到处刷存在感？抱歉，没空。你不是资源少，你是把资源全部灌进了一个坑里，所以看起来像贫困，实际上像矿井。一旦某件事被你认定值得钻，外界再吵也只是背景杂音。' },
    MONK:   { cn: '僧人', intro: '没有那种世俗的欲望。', desc: '当别人在KTV里参悟爱与恨的纠缠，MONK人格选择在家中参悟一份大道。MONK已然看破红尘，不希望闲人来扰其清修、破其道行。MONK的个人空间，是他们的结界，是他们的须弥山，是他们的绝对领域，神圣不可侵犯。踏入者，会感受到一种来自灵魂深处的窒息感。MONK们不黏不缠，因为在他们的世界观里，万物皆有其独立轨道。行星与行星之间保持着亿万公里的距离，才构成和谐宇宙，人与人之间为什么不行？' },
    IMSB:   { cn: '傻者', intro: '认真的么？我真的是傻逼么？', desc: '恭喜您！您根本不在人类范畴内！您测出了百万年一遇的【IMSB】人格。IMSB人格的大脑里住着两个不死不休的究极战士：一个叫"我他妈冲了！"，另一个叫"我是个傻逼！"。当IMSB面对一个有好感的人时，前者会说：冲啊！去要微信！去约饭！爱要大声说出来！后者接着说：人家凭什么看得上你？你去了就是自取其辱！最终结果：盯着对方背影直到消失，然后掏出手机搜索"如何克服社交恐惧症"。IMSB不是真的傻，只是您的内心戏，可能比漫威宇宙所有电影加起来都长。' },
    SOLO:   { cn: '孤儿', intro: '我哭了，我怎么会是孤儿？', desc: '恭喜您，您测出了全中国最稀有的【SOLO - 孤儿】人格。别急着哭，国王的加冕仪式，通常都是一个人。孤儿的自我价值感偏低，因此有时主动疏远他人，孤儿们在自己的灵魂外围建起了一座名为"莫挨老子"的万里长城。每一块砖，都是过去的一道伤口。孤儿就像一只把所有软肋都藏起来，然后用最硬的刺对着世界的刺猬。那满身的尖刺不是攻击，那是一句句说不出口的"别过来，我怕你也受伤"和"求求你，别离开"。' },
    FUCK:   { cn: '草者', intro: '操！这是什么人格？', desc: '恭喜您！您根本不在人类范畴内！您测出了百万年一遇的【FUCK】人格。人类文明城市里，出现了一株无法被任何除草剂杀死的、具有超级生命力的人形野草——那就是草者人格。它的学名，就叫 FUCK。在FUCK的世界观里，世俗规则简直毫无意义，并且FUCK的情绪开关是物理拨片式的：FUCK YEAH 和 FUCK OFF。FUCK追求的不只是当下快感，也在追求一种在体内横冲直撞的生命力。当所有人都被驯化成了温顺家禽，FUCK则是荒野上最后那一声狼嚎。' },
    DEAD:   { cn: '死者', intro: '我，还活着吗？', desc: '恭喜您，您测出了全中国最为罕见的人格，只是"死者"这个名字实在有点晦气，所以也可以叫：Don\'t Expect Any Drives。死者已经看透了那些无意义的哲学思考，因此显得对一切"失去"了兴趣。死者们看世界的眼神，就像一位顶级玩家通关了所有主线、支线、隐藏任务，删档重开了999次之后，终于发现：这游戏压根就没意思。死者是超越了欲望和目标的终极贤者。他们的存在，就是对这个喧嚣世界最沉默也最彻底的抗议。' },
    IMFW:   { cn: '废物', intro: '我真的...是废物吗？', desc: '恭喜您，您测出的不是一个普通人格，您是一种极其珍稀的、仅占世界人口0.0001％的——【废物】。废物们的自尊通常有些脆弱，缺乏安全感，偶尔也会缺乏主见，因此这种人格能精确地感知到周围最强的那个 WiFi 信号——也就是他们心里最可靠的人。走进【废物】人格的生活，就像走进了一个顶级兰花温室：需要精确控制温度、湿度，以及每天定时进行"我爱你"的言语光合作用。给废物一颗糖，他们会还你一个完全信任你、亮晶晶的眼神。你未必是废物，你只是太没防备，太容易认真。' },
    HHHH:   { cn: '傻乐者', intro: '哈哈哈哈哈哈。', desc: '恭喜您！由于您的思维回路过于清奇，标准人格库已全面崩溃。第一人格匹配率只有60％以下时，系统才会为您强制匹配这个人格——【HHHH - 傻乐者】。这个人格有什么特质？哈哈哈哈哈哈哈哈哈哈哈哈！对不起，这就是全部的特质了。您可以查看十五维度进行不专业的评估，实在是抱歉！作者设置人格时没有考虑全面，因此才会出现这样的状况。哈哈哈哈哈哈……笑着笑着，我便哭了出来。怎么会有人的脑回路这么新奇。' },
    DRUNK:  { cn: '酒鬼', intro: '烈酒烧喉，不得不醉。', desc: '您为什么走路摇摇晃晃？您为什么总是情绪高涨？您为什么看东西是重影的？因为您体内流淌的不是血液，是美味的五粮液！是国窖1573！是江小白！是陕西五粮液！哦，美味的白酒，每一滴都在燃烧，都在沸腾。您是否已经习惯了将白酒灌入保温杯，当作白开水一饮而下？多么伟大的白酒！它让您在饭桌上谈笑风生，在厕所里抱着马桶忏悔人生；它让您觉得自己是夜场诗人，是宇宙中心那团不灭的火，直到第二天上午十点，您的头像裂开的核桃，嘴角挂着食物残渣，灵魂缩在角落里。您终于明白，昨晚那个高谈阔论、拍桌怒吼的人，已经成为了一个酒鬼。' }
  },
  en: {
    CTRL:   { cn: 'Controller',   intro: "Gotcha. You've been CTRL'd.", desc: "Congratulations, you've unlocked the rarest personality in all of China. You are a natural rebel against the law of entropy! 99.99% of so-called successful people worldwide are but拙劣 imitators of you. The CTRL personality is a walking, self-propelled task manager. What ordinary people call 'rules' are just factory default settings to you; what mortals call 'plans' are mere doodles you scribble on a whim. What does having a CTRL friend mean? It means your life's navigation system gets sharper and more efficient. Because CTRL is the master of 拿捏 (control). CTRL will hit Ctrl+S for you one second before your life train derails, then drag you back on track with irrefutable logic. They are your chaotic life's last backup disk, the only restart button still glowing before the universe collapses." },
    'ATM-er': { cn: 'Payer',       intro: "You think I'm rich?", desc: "Congratulations, you've somehow tested into the world's rarest personality. You may become finance's greatest unsolved mystery — yes, ATM-er doesn't necessarily 'give money,' but may forever be 'paying.' Paying time, energy, patience, paying for what should have been a peaceful night. Like an old but sturdy ATM machine — you insert others' anxiety and trouble, and out comes the reassuring guarantee of 'It's fine, I've got this.' Your life is a grand, unapplauded solo bill-paying show. With rock-solid reliability, you withstand a waterfall of demands, occasionally sighing at the bill — the spiritual one — in the dead of night: My damn, nowhere-to-place sense of responsibility." },
    'Dior-s': { cn: 'Diogenes',    intro: 'Wait for my comeback.', desc: "Congratulations! You're not a loser — you're the long-lost spiritual heir of the Cynic sage Diogenes. Because Dior-s stands for Diogenes' Original Realist - sage. The Dior-s personality is the most thorough contempt for consumerist traps and success-story PUA. They're not 'unambitious' — they've already seen through how every 'ambition' leads to a fancier prison. Dior-s has great wisdom. While others chase trends and get battered by the waves of the era, Dior-s is already sunbathing in their spiritual barrel, achieving the supreme state of 'human-barrel unity.' Their creed isn't empty talk — it's physical laws and biological instincts validated through billions of trials: 1. Lying down beats standing up; 2. When it's mealtime, you eat." },
    BOSS:   { cn: 'Leader',       intro: 'Give me the wheel. I\'ll drive.', desc: "BOSS always has the steering wheel in hand. Even when the fuel gauge is flashing red, even when the GPS is spouting nonsense, they'll deadpan: I'll drive. And actually drive to the destination. This personality operates on its own laws of physics — the Eternal Upward Law. BOSS personalities view the world like a player who's beaten the game watching the tutorial. Efficiency is their faith, order is their breath. They don't just 'have leadership aura' — they ARE a humanoid aura generator. Within a five-meter radius, the air automatically becomes serious and efficient. Their idea of 'self-breakthrough' is roughly equivalent to normal people's idea of 'self-harm.' Today: learn a new language. Tomorrow: get a professional certificate. The day after: plan to colonize Mars. You say that's too intense? They'll give you a look reserved for weaklings: It's not that I'm too ruthless — it's that you're too soft." },
    'THAN-K': { cn: 'Grateful',    intro: 'I thank the heavens! I thank the earth!', desc: "Congratulations on unlocking China's rarest personality. You should thank me! Thank you for having life's nourishment at this moment! Stuck in traffic on your commute? You should say: I'm grateful for this traffic jam — it gives me more time to enjoy this beautiful song and admire every anxious, contorted face outside the window, making me cherish my inner peace more. Yes, THAN-K has a gentle nature and an ocean-wide heart. In their eyes, there are no completely bad people — only 'friends not yet illuminated by the light of gratitude.' Having a THAN-K friend is like having an inexhaustible positive-energy发射 tower beside you. They can even find a Van Gogh-style Starry Night in the mold on the corner of the wall." },
    'OH-NO':  { cn: 'Oh-No-er',   intro: 'Oh no! How am I this personality?!', desc: "\"Oh no!\" isn't a scream of fear — it's top-tier wisdom. When normal people see a cup on the edge of a table, Oh-No-ers see a disaster epic composed of 'water stain → short circuit → fire → building evacuation → economic loss → butterfly effect → apocalypse.' So, with a soul-deep 'Oh, no!', they'll move the cup to the center of the table at lightning speed, then add a coaster underneath. Oh-No-ers have an almost obsessive respect for 'boundaries': yours is yours, mine is mine. All accidents and risks have been strangled in their infancy by the sound of 'Oh, no!' They are the guardian deities of order — the last batch of decent people with tightly strung nerves in a chaotic world." },
    GOGO:   { cn: 'Goer',         intro: 'Gogogo~ Let\'s go!', desc: "Research shows that the GOGO personality's brain structure is fundamentally different from normal people. GOGO lives in an extreme 'what you see is what you get' world. Their life creed is simple and brutally shocking: If I close my eyes, it's dark; if I spend all my money, I have no money; if I stand on the crosswalk, I'm a pedestrian now. Perfect logical closed loop — completely irrefutable. While others debate 'chicken or egg first,' the GOGO Goer has already made both into 'The Ultimate Mystery of Chicken-Born-Egg, Egg-Born-Chicken Rice Bowl.' They don't 'solve problems' — they 'clear to-do items.' To them, the world has only two states: completed, and about to be completed by me." },
    SEXY:   { cn: 'Stunner',      intro: 'You are a natural stunner!', desc: "When you walk into a room, the lighting system automatically identifies you as a natural stunner and dims the brightness to save energy. When you smile, you become a smiling stunner, and the surrounding air humidity drops noticeably — because water vapor condenses into heart shapes in people's eyes. Anyone can easily develop excessive attention toward your existence. Legend has it that if enough SEXY personalities gather for a party, the combined charisma energy released could temporarily warp spacetime, giving attendees the blissful illusion that 'time has slowed down.' They don't need to try hard — often, simply existing is already like an overly ornate rhapsody." },
    'LOVE-R': { cn: 'Lover',       intro: 'So much love — reality feels a bit barren.', desc: "The LOVE-R personality is like a rare species surviving from ancient mythological times — their probability of existing is lower than fishing the author's arm out of a toilet. You're the last and most ill-timed wandering poet of this concrete jungle era. Because your emotional processor isn't binary — it's rainbow-scale. A falling leaf, to ordinary people, just means 'autumn is here'; to LOVE-R, it's a thirteen-act tragicomedy about reincarnation, sacrifice, and silent love. Your inner world is like a theme park that never closes — spending a lifetime searching for the soulmate who can read the park map and ride the carousel with you until the end of the universe." },
    MUM:    { cn: 'Mom',          intro: 'Maybe... can I call you Mom...?', desc: "Congratulations on testing into China's rarest Mom personality. Yes, before chaos began, before time had a name, before the first star burped, there was already Mom. The Mom personality's base color is gentleness — skilled at sensing emotions, possessing super-empathy, knowing when to stop and when to tell themselves 'forget it.' Mom is like a doctor, healing others' unhappiness. The pity is, when Mom sheds tears, the dose of medicine they give themselves is always one size smaller than what they give others. MUM's gentleness toward themselves is always discounted." },
    FAKE:   { cn: 'Faker',        intro: 'There are no humans left.', desc: "SCP Foundation Emergency Report: Item # SCP-CN-████ 'Faker.' In social situations, Fakers are smooth operators — they switch personality masks faster than switching phone keyboards. One second they're in 'bosom buddy' mode, the next the boss arrives and they instantly switch to 'reliable employee' mode — even their face's gloss and curl adjust slightly. Thought you made a friend who truly gets you? Wake up. You just lucked into meeting a high-performance仿生人 who's great at disguise. Late at night, the Faker peels off mask after mask, only to find — underneath, it's hollow. These masks are what constitutes the self." },
    OJBK:   { cn: 'Whatever-er',  intro: 'When I say whatever, I mean whatever.', desc: "Let's face the raw essence of this word: OJBK. This isn't just a personality — it's a ruling philosophy. When mortals face the century-defining dilemma of 'rice or noodles for lunch,' their brains burn calories fiercely; the OJBK personality, with the calm of an emperor reviewing memorials, lightly drops two words: whatever. This isn't having no opinion — this is telling you: your mundane choices are all ants beneath my feet. Why not argue? Because debating the future of the universe with a paramecium is pointless. Why not nitpick? Because empires don't care whether the dust underfoot drifts left or right." },
    MALO:   { cn: 'Monkey',       intro: 'Life is a dungeon, and I\'m just a monkey.', desc: "Friend, you're not 'young at heart' — you simply never evolved. Your soul is still stuck in that joyful era of swinging from trees and lighting up at the sight of bananas. When human ancestors decided to climb down from trees, walk upright, and wear suits and ties, the MALO personality's ancestors watched from the adjacent big tree, scratched their butts, and let out a dismissive 'Squeak.' They've seen through everything: so-called 'civilization' is just the most boring, least fun pay-to-play game. Rules are occasionally breakable, ceilings are for hanging upside down from, and meeting rooms are for performing backflips. MALO itself is a wild idea that fell out of a massive brain hole and forgot to close the door." },
    'JOKE-R': { cn: 'Joker',       intro: 'Turns out we\'re all jokers.', desc: "Please note: the JOKE-R personality isn't a 'person' — more like a joker wearing jokes as clothing. Peel back one layer — it's a joke; peel back another — it's a gag; you keep peeling until finally... it's empty, with only a faint echo saying: Ha, didn't see that coming. JOKE-R is the atmosphere team captain and sole designated firepower output at social gatherings. With them around, the vibe never dies. Everyone's laughing their heads off, and the one laughing hardest is often themselves — using the biggest laughter to cover the sound of a breaking heart." },
    'WOC!':  { cn: 'WOC-er',      intro: 'WOC! How am I this personality?', desc: "We've discovered a remarkable creature — the WOC! person. They possess two completely independent operating systems: one called the 'Surface System,' responsible for emitting exclamations like 'WTF!' 'Badass!' 'Huh?!'; the other called the 'Background System,' responsible for calm analysis: Hmm, just as I expected. WOC! people only say WOC and don't meddle — they know full well that reasoning with idiots is like propping up mud on a wall: wastes energy and gets shit on your hands. So they choose to grip a blade of wisdom and offer the highest tribute to this crazy world with an affectionate 'WOC!'" },
    'THIN-K': { cn: 'Thinker',     intro: 'Deep thinking complete — 100s.', desc: "Research shows the THIN-K personality's brain structure is fundamentally different from ordinary people. As the name suggests, your brain is in a prolonged thinking state. You excel at judging information — scrutinizing arguments, evidence, logical reasoning, potential biases, and even the 'author's three-generation ideological background investigation report' full package. In this age of information explosion, you never blindly follow. You weigh pros and cons in relationships and fiercely defend your personal space. When others see you spacing out alone? Fools — that's not spacing out. That's your brain categorizing, archiving, and destroying all the information received today." },
    SHIT:   { cn: 'Cynic',        intro: 'This world is one big pile of crap.', desc: "Congratulations — the SHIT personality is the only known rare personality in the universe. So-called dog shit isn't complaining — it's performing a mystical ritual. SHIT's behavioral pattern is an earth-shattering paradox drama. Mouth: This project is total shit. Hands: Silently opens Excel, starts building function models and Gantt charts. Mouth: These colleagues are all shit. Hands: After colleagues mess up, annoyed but pulling all-nighters to clean up the disaster spotlessly. Mouth: This world is a pile of shit, just destroy it already. Hands: 7 AM the next morning, up on time, squeezing onto the same shit subway, going to that same shit job. Don't be scared — that's not the apocalypse alarm. That's the bugle call for their impending world-saving charge." },
    ZZZZ:   { cn: 'Pretender',    intro: "I'm not dead — I'm just sleeping.", desc: "Congratulations on testing into China's rarest playing-dead personality. You can ignore 99+ group messages, but when someone sends '@All Members: 30 minutes until deadline,' you might slowly stir like someone waking from a millennium-old tomb, tap out a 'Received,' and then deliver a barely-passing submission within 29 minutes. Yes — until the 'deadline' supreme command appears, you truly explode. Silent one moment, stunning the next. You've proven a universal truth to the cosmos: sometimes, doing nothing means doing nothing wrong." },
    POOR:   { cn: 'Scarcer',      intro: "I'm broke, but I'm focused.", desc: "Congratulations on testing into [POOR - Scarcer]. This 'poverty' isn't a verdict on your wallet balance — it's more like resource reallocation after desire minimalism. Others scatter energy like QR codes in the wind; you compress it into a laser beam — wherever it points, things start smoking. POOR's world is simple: everything unimportant gets noise-cancelled; everything important gets pursued relentlessly. Partying, socializing, vanity, attention-seeking? Sorry, no time. You're not resource-poor — you've funneled everything into one shaft, so you look poor but are actually a mine. Once something is deemed worth drilling into, external noise is just background static." },
    MONK:   { cn: 'Monk',         intro: 'No such worldly desires.', desc: "While others contemplate love and hate in karaoke bars, the MONK personality contemplates the Great Dao at home. MONK has seen through the mortal world and doesn't want casual visitors disturbing their cultivation or breaking their spiritual practice. MONK's personal space is their barrier, their Mount Sumeru, their Absolute Territory — sacred and inviolable. Those who enter feel a suffocating pressure from the depths of the soul. MONK personalities don't cling or entangle — because in their worldview, all things have their independent orbits. Planets maintain billions of kilometers of distance to form a harmonious universe — why can't people?" },
    IMSB:   { cn: 'Fool',         intro: 'Seriously? Am I really an idiot?', desc: "Congratulations! You're not even in the human category! You've tested into the once-in-a-million-years [IMSB] personality. Inside the IMSB brain live two immortal ultimate warriors: one named 'I'm going for it!', the other named 'I'm an idiot!' When IMSB faces someone they're attracted to, the former says: Charge! Get their WeChat! Ask them out! Shout your love! The latter follows: Why would they look twice at you? You'll just humiliate yourself! End result: staring at their背影 until they disappear, then pulling out your phone to search 'how to overcome social anxiety.' IMSB isn't truly stupid — it's just that your inner drama might be longer than all Marvel movies combined." },
    SOLO:   { cn: 'Lone Wolf',    intro: 'I\'m crying — how am I a lone wolf?', desc: "Congratulations on testing into China's rarest [SOLO - Lone Wolf] personality. Don't cry just yet — kings' coronation ceremonies are usually solo affairs. Lone Wolves have lower self-worth, so they sometimes actively distance themselves from others. They build a Great Wall called 'Don't Touch Me' around their souls. Every brick is a past wound. The Lone Wolf is like a hedgehog that hides all soft spots and faces the world with the sharpest quills. Those quills aren't attacks — they're unspeakable 'Don't come closer, I'm afraid you'll get hurt too' and 'Please, don't leave.'" },
    FUCK:   { cn: 'Rebel',        intro: 'WTF! What personality is this?', desc: "Congratulations! You're not even in the human category! You've tested into the once-in-a-million-years [FUCK] personality. In civilized human cities, a weed has appeared that no herbicide can kill — a humanoid weed with super vitality. Its scientific name: FUCK. In FUCK's worldview, secular rules are completely meaningless, and FUCK's emotional switch is a physical toggle: FUCK YEAH and FUCK OFF. FUCK pursues not just immediate gratification but a life force rampaging through their body. When everyone has been domesticated into docile poultry, FUCK is the last wolf howl in the wilderness." },
    DEAD:   { cn: 'Deceased',     intro: 'Am I... still alive?', desc: "Congratulations on unlocking the rarest personality in all of China — though 'Deceased' is a rather ominous name, so it can also be called: Don't Expect Any Drives. The Deceased have seen through meaningless philosophical contemplation, appearing to have 'lost' interest in everything. They look at the world like a top player who's cleared all main quests, side quests, and hidden missions, deleted their save and restarted 999 times, finally realizing: this game simply isn't fun. The Deceased are ultimate sages who've transcended desire and goals. Their existence is the most silent and thorough protest against this noisy world." },
    IMFW:   { cn: 'Waste',        intro: 'Am I really... a waste?', desc: "Congratulations — you haven't tested into an ordinary personality, but an extremely rare one comprising only 0.0001% of the world's population — [Waste]. Waste personalities tend to have fragile self-esteem, lack security, and occasionally lack their own opinions, so this personality can precisely detect the strongest WiFi signal around — the person they find most reliable. Walking into a Waste personality's life is like entering a top-tier orchid greenhouse: precise temperature control, humidity control, and daily scheduled 'I love you' verbal photosynthesis. Give Waste a piece of candy, and they'll return a sparkling look of complete trust. You may not be waste — you're just too unguarded, too easily sincere." },
    HHHH:   { cn: 'Laugh-R',      intro: 'Hahahahahaha.', desc: "Congratulations! Your thought circuits are so unconventional that the standard personality library has completely crashed. When the primary personality match rate falls below 60%, the system forces you into this personality — [HHHH - Laugh-R]. What are this personality's traits? Hahahahahahahahahahahaha! Sorry, that's the entire trait. You can check the 15 dimensions for an amateur assessment — really sorry! The author didn't plan comprehensively when setting up personalities, which is why this happens. Hahahahaha... Laughing and laughing, I started crying. How can someone's brain circuits be this novel." },
    DRUNK:  { cn: 'Drunkard',     intro: 'Burning liquor down the throat — must get drunk.', desc: "Why do you walk unsteadily? Why are you always emotionally elevated? Why do you see double? Because what flows through your veins isn't blood — it's delicious Wuliangye! It's Guojiao 1573! It's Jiang Xiaobai! It's Shaanxi Wuliangye! Oh, delicious baijiu — every drop burns, every drop boils. Have you gotten used to pouring baijiu into a thermos and drinking it like water? What magnificent baijiu! It makes you the life of the dinner party, then hugging the toilet confessing your life's regrets; it makes you feel like a nightclub poet, the unextinguishable fire at the center of the universe — until 10 AM the next day, your head like a cracked walnut, food remnants at the corner of your mouth, soul shrinking in the corner. You finally understand: last night's pontificating, table-pounding roar-er has become a drunkard." }
  }
}

}; // end I18N
