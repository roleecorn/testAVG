const PORTRAIT_CODE = 20;

const CHARACTER_PORTRAITS = {
  東山: {
    code: PORTRAIT_CODE,
    images: {
      normal: "dongshan_normal.png",
      smile: "dongshan_smile.png",
      angry: "dongshan_angry.png",
      sad: "dongshan_sad.png",
      surprised: "dongshan_surprised.png",
      panic: "dongshan_panic.png",
    },
  },
};

function resolvePortrait(speaker, expression = "normal") {
  const character = CHARACTER_PORTRAITS[speaker];
  if (!character) return null;
  if (!Object.hasOwn(character.images, expression)) {
    throw new Error(`Unknown portrait expression for ${speaker}: ${expression}`);
  }
  return {
    type: "showImage",
    code: character.code,
    image: character.images[expression],
    loc: ["portraitSpeakerX", "portraitSpeakerY"],
    opacity: 1,
    time: 0,
    expression,
  };
}

module.exports = { CHARACTER_PORTRAITS, resolvePortrait };
