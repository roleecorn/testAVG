const PORTRAIT_CODE = 20;
const EXPRESSIONS = ["normal", "smile", "angry", "sad", "surprised", "panic"];

function portraitSet(id) {
  return {
    code: PORTRAIT_CODE,
    images: Object.fromEntries(EXPRESSIONS.map((expression) => [expression, `ms_portrait_${id}_${expression}.png`])),
  };
}

const CHARACTER_PORTRAITS = {
  東山: { code: PORTRAIT_CODE, images: {
    normal: "dongshan_normal.png", smile: "dongshan_smile.png", angry: "dongshan_angry.png",
    sad: "dongshan_sad.png", surprised: "dongshan_surprised.png", panic: "dongshan_panic.png",
  } },
  梗平: { code: PORTRAIT_CODE, images: {
    normal: "keng_neutral_portrait.png", smile: "keng_smile_portrait.png", angry: "keng_serious_portrait.png",
    sad: "keng_neutral_portrait.png", surprised: "keng_surprised_portrait.png", panic: "keng_panic_portrait.png",
  } },
  表妹: { code: PORTRAIT_CODE, images: {
    normal: "suou_happy_portrait.png", smile: "suou_smile_portrait.png", angry: "suou_angry_portrait.png",
    sad: "suou_sad_portrait.png", surprised: "suou_surprised_portrait.png", panic: "suou_goofy_portrait.png",
  } },
};

const GENERATED_PORTRAITS = {
  DIO: "dio", IB: "ib", IB哥哥: "ib_brother", "M‧A‧STER": "master", "『工作人員』": "staff",
  三日月: "mikazuki", 三角: "sankaku", 保鑣: "bodyguard", 修女: "nun", 克莉絲: "chris", 兵長: "captain",
  前輩: "senpai", "前輩(旗袍)": "senpai_qipao", 哈斯太: "hastur", 壯漢A: "strongman_a", 壯漢B: "strongman_b",
  女裝壯漢: "crossdress_strongman", 宿儺: "sukuna", 小將: "shogun", 小黑: "kuro", 店長: "tencho", 教主: "cult_leader",
  智乃: "chino", 書店店員: "bookstore_clerk", 桶至學長: "tongzhi", "桶至學長(女僕)": "tongzhi_maid",
  梅愛莉: "mei_aili", "梗平(女装)": "keng_female", "梗平(女裝)": "keng_female", "梗平(西裝)": "keng_suit",
  棉被怪: "quilt_monster", 眼神死掉的人: "dead_eyes", 肥宅: "otaku", 肥宅A: "otaku_a", 肥宅B: "otaku_b",
  肥宅C: "otaku_c", 色情刊物檢察官: "adult_book_prosecutor", 芹澤: "serizawa", 蘭斯: "lance", 記者: "reporter",
  警察: "police", 貝琪: "becky", "貝琪(婚紗)": "becky_wedding", 醫生: "doctor", 雜貨店老闆: "shopkeeper",
  香坂輪: "kousaka_rin", 麻婆: "mapo", 麻婆店長: "mapo",
  惠惠: "huihui", 來島澄: "laidao_cheng", 李嚴: "liyan",
};
for (const [speaker, id] of Object.entries(GENERATED_PORTRAITS)) CHARACTER_PORTRAITS[speaker] = portraitSet(id);

const SPEAKER_ALIASES = {
  壯漢Ａ: "壯漢A", 壯漢Ｂ: "壯漢B", "女裝壯\u200b\u200b漢": "女裝壯漢",
  "梗平（女裝）": "梗平(女裝)", "梗平（西裝）": "梗平(西裝)", "貝琪（婚紗）": "貝琪(婚紗)",
};

function resolvePortrait(speaker, expression = "normal") {
  const character = CHARACTER_PORTRAITS[SPEAKER_ALIASES[speaker] || speaker];
  if (!character) return null;
  if (!Object.hasOwn(character.images, expression)) throw new Error(`Unknown portrait expression for ${speaker}: ${expression}`);
  return { type: "showImage", code: character.code, image: character.images[expression], loc: ["portraitSpeakerX", "portraitSpeakerY"], opacity: 1, time: 0, expression };
}

module.exports = { CHARACTER_PORTRAITS, GENERATED_PORTRAITS, EXPRESSIONS, resolvePortrait };
