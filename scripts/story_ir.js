const fs = require("fs");
const path = require("path");
const vm = require("vm");

const STORY_IR_VERSION = 1;
const AVG_MAP_WIDTH = 17;
const AVG_MAP_HEIGHT = 13;
const AVG_BACKGROUND_WIDTH = 544;
const AVG_BACKGROUND_HEIGHT = 416;
const PORTRAIT_CODES = new Set([10, 11, 12, 20]);
const PORTRAIT_OPACITY = 1;
const PORTRAIT_TIME = 0;
const PORTRAIT_OUTPUT_COMPAT_FILE = path.join(__dirname, "portrait-output-compat.json");
const DEFAULT_AVG_LAYOUT = Object.freeze({
  kind: "layout.set",
  value: {
    avg: true,
    position: "down",
    offset: 0,
    align: "left",
    bold: true,
    background: "winskin.png",
    title: [255, 225, 80, 1],
    text: [255, 255, 255, 1],
    titlefont: 22,
    textfont: 16,
    lineHeight: 22,
    time: 10,
    letterSpacing: 0,
    animateTime: 120,
  },
});
const COMMON_AVG_MAP = Object.freeze(Array.from(
  { length: AVG_MAP_HEIGHT },
  () => Object.freeze(Array(AVG_MAP_WIDTH).fill(0)),
));
const COMMON_PRESENTATION = Object.freeze({
  transitions: Object.freeze({
    "【過場】": Object.freeze({ kind: "fade", color: Object.freeze([0, 0, 0, 1]), time: 500 }),
    "【過場：一段時間過後】": Object.freeze({ kind: "clock", name: "floor-transition.mp4" }),
    "【白色慢速過場】": Object.freeze({ kind: "fade", color: Object.freeze([255, 255, 255, 1]), time: 2000 }),
    "TODO: 【白色慢速過場】": Object.freeze({ kind: "fade", color: Object.freeze([255, 255, 255, 1]), time: 2000 }),
  }),
});

function readUInt24LE(buffer, offset) {
  return buffer[offset] | (buffer[offset + 1] << 8) | (buffer[offset + 2] << 16);
}

function imageDimensionsFromBuffer(buffer) {
  if (buffer.length >= 24 && buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }
  if (buffer.length >= 10 && (buffer.subarray(0, 6).toString("ascii") === "GIF87a" || buffer.subarray(0, 6).toString("ascii") === "GIF89a")) {
    return { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
  }
  if (buffer.length >= 30 && buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP") {
    if (buffer.subarray(12, 16).toString("ascii") === "VP8X") {
      return { width: readUInt24LE(buffer, 24) + 1, height: readUInt24LE(buffer, 27) + 1 };
    }
    return null;
  }
  if (buffer.length >= 2 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset + 3 < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      while (buffer[offset] === 0xff) offset += 1;
      const marker = buffer[offset];
      offset += 1;
      if (marker === 0xd8 || marker === 0xd9 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;
      if (offset + 1 >= buffer.length) return null;
      const segmentLength = buffer.readUInt16BE(offset);
      if (segmentLength < 2 || offset + segmentLength > buffer.length) return null;
      const isStartOfFrame = (marker >= 0xc0 && marker <= 0xc3)
        || (marker >= 0xc5 && marker <= 0xc7)
        || (marker >= 0xc9 && marker <= 0xcb)
        || (marker >= 0xcd && marker <= 0xcf);
      if (isStartOfFrame && segmentLength >= 7) {
        return { width: buffer.readUInt16BE(offset + 5), height: buffer.readUInt16BE(offset + 3) };
      }
      offset += segmentLength;
    }
  }
  return null;
}

function readImageDimensions(file) {
  return imageDimensionsFromBuffer(fs.readFileSync(file));
}

function validateBackgroundImageSize(file, location) {
  const dimensions = readImageDimensions(file);
  if (!dimensions) {
    throw new Error(`${location}: unable to read background image dimensions for ${path.basename(file)}`);
  }
  if (dimensions.width !== AVG_BACKGROUND_WIDTH || dimensions.height !== AVG_BACKGROUND_HEIGHT) {
    throw new Error(`${location}: background image ${path.basename(file)} must be ${AVG_BACKGROUND_WIDTH}x${AVG_BACKGROUND_HEIGHT}; got ${dimensions.width}x${dimensions.height}`);
  }
  return dimensions;
}

function irToText(node) {
  return node.kind === "dialogue" ? `\t[${node.speaker}]${node.text}` : node.text;
}

function cleanUndefined(value) {
  if (Array.isArray(value)) return value.map(cleanUndefined);
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(Object.entries(value)
    .filter(([, child]) => child !== undefined)
    .map(([key, child]) => [key, cleanUndefined(child)]));
}

let portraitOutputCompat;

function readPortraitOutputCompat() {
  if (portraitOutputCompat !== undefined) return portraitOutputCompat;
  portraitOutputCompat = validatePortraitOutputCompat(JSON.parse(fs.readFileSync(PORTRAIT_OUTPUT_COMPAT_FILE, "utf8")));
  return portraitOutputCompat;
}

function validatePortraitOutputCompat(metadata, sceneIds) {
  if (!metadata || metadata.version !== 1 || !Array.isArray(metadata.omitCommonFieldsForScenes)) {
    throw new Error("Invalid portrait output compatibility metadata");
  }
  const ids = metadata.omitCommonFieldsForScenes;
  if (ids.some((sceneId) => typeof sceneId !== "string" || !sceneId)) {
    throw new Error("Portrait output compatibility scene IDs must be non-empty strings");
  }
  if (new Set(ids).size !== ids.length) {
    throw new Error("Portrait output compatibility contains duplicate scene IDs");
  }
  if (sceneIds) {
    for (const sceneId of ids) {
      if (!sceneIds.has(sceneId)) throw new Error(`Portrait output compatibility references unknown scene ${sceneId}`);
    }
  }
  return metadata;
}

function irToEvent(node, options = {}) {
  const includePortraitCommonFields = options.portraitCommonFields !== false;
  switch (node.kind) {
    case "narration":
    case "dialogue": {
      const value = irToText(node);
      return node.presentation && Object.keys(node.presentation).length
        ? { type: "text", text: value, ...node.presentation }
        : value;
    }
    case "layout.set": return { type: "setText", ...node.value };
    case "bgm.play": return cleanUndefined({ type: "playBgm", name: node.name, keep: node.keep, loop: node.loop });
    case "bgm.pause": return { type: "pauseBgm" };
    case "bgm.resume": return { type: "resumeBgm" };
    case "sound.play": return cleanUndefined({ type: "playSound", name: node.name, stop: node.stop, pitch: node.pitch, sync: node.sync });
    case "sound.stop": return { type: "stopSound" };
    case "background.show":
    case "image.show":
      return cleanUndefined({
        type: "showImage",
        code: node.code,
        image: node.image,
        expression: node.expression,
        sloc: node.sloc,
        loc: node.role === "portrait" || node.code === 10 || node.code === 11 || node.code === 12 || node.code === 20
          ? ["portraitSpeakerX", "portraitSpeakerY"]
          : node.loc,
        opacity: isPortraitShow(node)
          ? (includePortraitCommonFields ? PORTRAIT_OPACITY : undefined)
          : node.opacity,
        time: isPortraitShow(node)
          ? (includePortraitCommonFields ? PORTRAIT_TIME : undefined)
          : node.time,
      });
    case "image.hide": return cleanUndefined({
      type: "hideImage",
      code: node.code,
      time: PORTRAIT_CODES.has(node.code) ? PORTRAIT_TIME : node.time,
      async: node.async,
    });
    case "wait": return cleanUndefined({ type: "sleep", time: node.time, noSkip: node.noSkip });
    case "ending.roll": return cleanUndefined({ type: "endingRoll", code: node.code, image: node.image, width: node.width, x: node.x, y: node.y });
    case "control.lock": return { type: "lockControl" };
    case "control.unlock": return { type: "unlockControl" };
    case "toolbar.hide": return { type: "hideToolbar" };
    case "toolbar.show": return { type: "showToolbar" };
    case "goto": return cleanUndefined({ type: "changeFloor", floorId: node.floorId, loc: node.loc, direction: node.direction, time: node.time, silent: true });
    case "comment": return { type: "comment", text: node.text };
    case "function.call": return cleanUndefined({ type: "function", function: node.function, async: node.async });
    case "character.exchange": {
      const destination = JSON.stringify(node.destination);
      const targetCount = node.targetCount == null ? "" : `, ${node.targetCount}`;
      return {
        type: "function",
        function: `function () { core.plugin.beginCharacterExchange(${destination}${targetCount}); }`,
      };
    }
    case "akiba.event.complete": return { type: "function", function: `function () { core.plugin.completeAkibaEvent('${node.eventId}'); }` };
    case "akiba.return": return { type: "function", function: "function () { core.plugin.returnToAkiba(); }" };
    case "transition.video": return cleanUndefined({ type: "playTransitionVideo", name: node.name, time: node.time, standalone: node.standalone });
    case "choice":
      return cleanUndefined({
        type: "choices",
        text: node.prompt,
        choices: node.options.map((option) => ({
          text: option.text,
          color: option.color,
          need: option.need,
          action: irToEvents(option.events, {}, options),
        })),
      });
    default: throw new Error(`Unsupported Story IR kind: ${node.kind || "(missing kind)"}`);
  }
}

function transitionEvent(node, transition) {
  if (!transition) return null;
  if (transition.kind === "clock") {
    if (typeof transition.name !== "string" || !transition.name) {
      throw new Error(`Invalid clock transition name for ${node.text}`);
    }
    return {
      type: "playTransitionVideo",
      name: transition.name,
      standalone: true,
    };
  }
  if (transition.kind !== "fade") return null;
  if (!Array.isArray(transition.color) || transition.color.length !== 4) {
    throw new Error(`Invalid fade transition color for ${node.text}`);
  }
  if (!Number.isFinite(transition.time) || transition.time < 0) {
    throw new Error(`Invalid fade transition time for ${node.text}`);
  }
  return {
    type: "setCurtain",
    color: transition.color,
    time: transition.time,
  };
}

function irToEvents(nodes, transitions = {}, options = {}) {
  const events = [];
  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    if (node.kind === "choice") {
      events.push(cleanUndefined({
        type: "choices",
        text: node.prompt,
        choices: node.options.map((option) => ({
          text: option.text,
          color: option.color,
          need: option.need,
          action: irToEvents(option.events, transitions, options),
        })),
      }));
      continue;
    }

    if (node.kind === "comment" && transitions[node.text]) {
      const transition = transitions[node.text];
      const fade = transitionEvent(node, transition);
      if (!fade) throw new Error(`Unsupported transition for ${node.text}`);
      events.push(fade);
      if (transition.kind === "clock") continue;
      if (node.holdUntilBackground) {
        let nextIndex = index + 1;
        while (nextIndex < nodes.length
          && [
            "comment",
            "bgm.play",
            "bgm.pause",
            "bgm.resume",
            "sound.play",
            "sound.stop",
          ].includes(nodes[nextIndex].kind)
          && !(
            nodes[nextIndex].kind === "comment"
            && transitions[nodes[nextIndex].text]
          )) {
          nextIndex += 1;
        }
        if (nodes[nextIndex] && nodes[nextIndex].kind === "background.show") {
          for (let passthroughIndex = index + 1; passthroughIndex < nextIndex; passthroughIndex += 1) {
            events.push(irToEvent(nodes[passthroughIndex], options));
          }
          events.push(irToEvent(nodes[nextIndex], options));
          index = nextIndex;
        }
      } else {
        const next = nodes[index + 1];
        if (next && next.kind === "background.show") {
          events.push(irToEvent(next, options));
          index += 1;
        }
      }
      events.push(cleanUndefined({
        type: "setCurtain",
        color: [0, 0, 0, 0],
        time: transition.time,
      }));
      continue;
    }

    events.push(irToEvent(node, options));
  }
  return events;
}

function isPortraitShow(node) {
  return node && node.kind === "image.show"
    && (node.role === "portrait" || PORTRAIT_CODES.has(node.code));
}

function normalizePortraitLifecycle(events) {
  const normalized = [];
  const visiblePortraitCodes = new Set();

  const hideVisiblePortraits = () => {
    for (const code of visiblePortraitCodes) {
      normalized.push({ kind: "image.hide", code, time: 0 });
    }
    visiblePortraitCodes.clear();
  };

  for (const node of events) {
    if (node.kind === "choice") {
      hideVisiblePortraits();
      normalized.push({
        ...node,
        options: node.options.map((option) => ({
          ...option,
          events: normalizePortraitLifecycle(option.events),
        })),
      });
      continue;
    }

    if (isPortraitShow(node)) {
      if (visiblePortraitCodes.has(node.code)) {
        normalized.push({ kind: "image.hide", code: node.code, time: 0 });
      }
      normalized.push(node);
      visiblePortraitCodes.add(node.code);
      continue;
    }

    if (node.kind === "image.hide" && PORTRAIT_CODES.has(node.code)) {
      if (visiblePortraitCodes.delete(node.code)) normalized.push(node);
      continue;
    }

    if (node.kind === "narration") hideVisiblePortraits();
    if (node.kind === "dialogue" && node.portrait) {
      const portrait = {
        kind: "image.show",
        role: "portrait",
        code: node.portrait.code,
        image: node.portrait.image,
        expression: node.portrait.expression,
        opacity: PORTRAIT_OPACITY,
        time: PORTRAIT_TIME,
      };
      normalized.push(portrait);
      visiblePortraitCodes.add(portrait.code);
    }
    normalized.push(node);
    if (node.kind === "dialogue") hideVisiblePortraits();
  }

  hideVisiblePortraits();
  return normalized;
}

function normalizeBundlePortraitLifecycle(bundle) {
  return {
    ...bundle,
    scenes: bundle.scenes.map((scene) => ({
      ...scene,
      events: normalizeBgmLifecycle(normalizePortraitLifecycle(scene.events)),
    })),
  };
}

function normalizeBgmLifecycle(events) {
  const normalized = [];
  let backgroundScopedPause = false;

  for (let index = 0; index < events.length; index += 1) {
    const node = events[index];
    if (node.kind === "bgm.pause" && node.until === "background") {
      backgroundScopedPause = true;
      normalized.push({ kind: "bgm.pause", until: "background" });
      continue;
    }
    if (node.kind === "bgm.play") {
      backgroundScopedPause = false;
      normalized.push(node);
      continue;
    }
    normalized.push(node);
    if (backgroundScopedPause && node.kind === "background.show") {
      if (!events[index + 1] || events[index + 1].kind !== "bgm.resume") {
        normalized.push({ kind: "bgm.resume" });
      }
      backgroundScopedPause = false;
    }
  }
  return normalized;
}

function ensureAvgLayout(events) {
  if (events.some((node) => node.kind === "layout.set")) return events;
  return [{ ...DEFAULT_AVG_LAYOUT, value: { ...DEFAULT_AVG_LAYOUT.value } }, ...events];
}

const ALLOWED_KINDS = new Set([
  "narration", "dialogue", "layout.set", "bgm.play", "bgm.pause", "bgm.resume",
  "sound.play", "sound.stop", "background.show", "image.show", "image.hide", "wait",
  "ending.roll", "control.lock", "control.unlock", "toolbar.hide", "toolbar.show",
  "goto", "comment", "function.call", "character.exchange", "akiba.event.complete", "akiba.return", "transition.video", "choice",
]);

function validateNode(node, location) {
  if (!node || typeof node !== "object" || Array.isArray(node)) throw new Error(`${location}: node must be an object`);
  if (!ALLOWED_KINDS.has(node.kind)) throw new Error(`${location}: unsupported kind ${node.kind}`);
  if ((node.kind === "narration" || node.kind === "dialogue" || node.kind === "comment") && typeof node.text !== "string") {
    throw new Error(`${location}: ${node.kind}.text must be a string`);
  }
  if ((node.kind === "narration" || node.kind === "dialogue") && /【[^】]*】/.test(node.text || "")) {
    throw new Error(`${location}: bracketed scene directive must not be player-visible text`);
  }
  if (node.kind === "dialogue" && typeof node.speaker !== "string") throw new Error(`${location}: dialogue.speaker must be a string`);
  if (node.kind === "dialogue" && node.portrait !== undefined) {
    if (!node.portrait || typeof node.portrait !== "object" || Array.isArray(node.portrait)) {
      throw new Error(`${location}: dialogue.portrait must be an object`);
    }
    if (typeof node.portrait.code !== "number" || typeof node.portrait.image !== "string") {
      throw new Error(`${location}: dialogue.portrait requires numeric code and image`);
    }
    if (node.portrait.expression !== undefined && typeof node.portrait.expression !== "string") {
      throw new Error(`${location}: dialogue.portrait.expression must be a string when provided`);
    }
    if (node.portrait.opacity !== undefined || node.portrait.time !== undefined) {
      throw new Error(`${location}: dialogue.portrait opacity/time are generator-owned common fields`);
    }
  }
  if (node.kind === "dialogue" && /【[^】]*】/.test(node.speaker)) {
    throw new Error(`${location}: bracketed scene directive must not be a dialogue speaker`);
  }
  if (node.kind === "akiba.event.complete" && (typeof node.eventId !== "string" || !node.eventId)) {
    throw new Error(`${location}: akiba.event.complete requires eventId`);
  }
  if (node.kind === "character.exchange") {
    const destination = node.destination;
    if (!destination || typeof destination !== "object" || Array.isArray(destination)) {
      throw new Error(`${location}: character.exchange.destination must be an object`);
    }
    if (typeof destination.floorId !== "string" || !destination.floorId) {
      throw new Error(`${location}: character.exchange.destination.floorId is required`);
    }
    if (!Array.isArray(destination.loc) || destination.loc.length !== 2 || destination.loc.some((value) => !Number.isFinite(value))) {
      throw new Error(`${location}: character.exchange.destination.loc must contain two numbers`);
    }
    if (typeof destination.direction !== "string" || !destination.direction) {
      throw new Error(`${location}: character.exchange.destination.direction is required`);
    }
    if (destination.time !== undefined && (!Number.isFinite(destination.time) || destination.time < 0)) {
      throw new Error(`${location}: character.exchange.destination.time must be a non-negative number`);
    }
    if (destination.transitionVideo !== undefined && typeof destination.transitionVideo !== "boolean") {
      throw new Error(`${location}: character.exchange.destination.transitionVideo must be boolean`);
    }
    if (node.targetCount !== undefined && (!Number.isInteger(node.targetCount) || node.targetCount <= 0)) {
      throw new Error(`${location}: character.exchange.targetCount must be a positive integer`);
    }
  }
  if ((node.kind === "bgm.play" || node.kind === "sound.play") && typeof node.name !== "string") {
    throw new Error(`${location}: ${node.kind}.name must be a string`);
  }
  if (node.kind === "bgm.play" && node.loop !== undefined && typeof node.loop !== "boolean") {
    throw new Error(`${location}: bgm.play.loop must be boolean when provided`);
  }
  if (node.kind === "ending.roll") {
    if (!Number.isInteger(node.code) || typeof node.image !== "string" || !node.image) {
      throw new Error(`${location}: ending.roll requires integer code and image`);
    }
    for (const field of ["width", "x", "y"]) {
      if (node[field] !== undefined && (!Number.isFinite(node[field]) || (field === "width" && node[field] <= 0))) {
        throw new Error(`${location}: ending.roll.${field} must be numeric${field === "width" ? " and positive" : ""}`);
      }
    }
  }
  if ((node.kind === "background.show" || node.kind === "image.show") && (typeof node.code !== "number" || typeof node.image !== "string")) {
    throw new Error(`${location}: ${node.kind} requires numeric code and image`);
  }
  if ((node.kind === "background.show" || node.kind === "image.show") && node.expression !== undefined && typeof node.expression !== "string") {
    throw new Error(`${location}: image expression must be a string when provided`);
  }
  if (node.kind === "choice") {
    if (!Array.isArray(node.options) || !node.options.length) throw new Error(`${location}: choice requires options`);
    node.options.forEach((option, index) => {
      if (typeof option.text !== "string" || !Array.isArray(option.events)) throw new Error(`${location}.options[${index}]: invalid option`);
      option.events.forEach((child, childIndex) => validateNode(child, `${location}.options[${index}].events[${childIndex}]`));
    });
  }
}

function getAkibaLifecycleCall(node) {
  if (node.kind === "akiba.event.complete") return { kind: "complete", eventId: node.eventId };
  if (node.kind === "akiba.return") return { kind: "return" };
  if (node.kind !== "function.call" || typeof node.function !== "string") return null;
  const completion = node.function.match(/core\.plugin\.completeAkibaEvent\(\s*['\"]([^'\"]+)['\"]\s*\)/);
  if (completion) return { kind: "complete", eventId: completion[1], legacy: true };
  return /core\.plugin\.returnToAkiba\(\s*\)/.test(node.function) ? { kind: "return", legacy: true } : null;
}

function terminalPaths(events) {
  let paths = [[]];
  for (const node of events) {
    if (node.kind !== "choice") {
      paths = paths.map((path) => path.concat(node));
      continue;
    }
    const options = node.options.flatMap((option) => terminalPaths(option.events));
    paths = paths.flatMap((path) => options.map((option) => path.concat(option)));
  }
  return paths;
}

function validateCharacterSceneLifecycle(scene, location, { allowLegacyLifecycle = true } = {}) {
  for (const [pathIndex, path] of terminalPaths(scene.events).entries()) {
    const calls = path.map(getAkibaLifecycleCall);
    if (!allowLegacyLifecycle && calls.some((call) => call && call.legacy)) {
      throw new Error(`${location}.terminalPaths[${pathIndex}]: legacy Akiba lifecycle function.call must use semantic nodes`);
    }
    const completions = calls.map((call, index) => ({ call, index })).filter(({ call }) => call && call.kind === "complete");
    if (completions.length !== 1) {
      throw new Error(`${location}.terminalPaths[${pathIndex}]: expected exactly one Akiba completion`);
    }
    const completion = completions[0];
    if (completion.call.eventId !== scene.id) {
      throw new Error(`${location}.terminalPaths[${pathIndex}]: completion id ${completion.call.eventId} must match scene id ${scene.id}`);
    }
    if (!calls.slice(completion.index + 1).some((call) => call && call.kind === "return")) {
      throw new Error(`${location}.terminalPaths[${pathIndex}]: completeAkibaEvent must be followed by returnToAkiba`);
    }
  }
}

function validateAvgFloorDimensions(floor, location) {
  const label = location || (floor && floor.floorId) || "floor";
  if (!floor || typeof floor !== "object" || Array.isArray(floor)) {
    throw new Error(`${label}: floor must be an object`);
  }
  if (floor.width !== AVG_MAP_WIDTH || floor.height !== AVG_MAP_HEIGHT) {
    throw new Error(`${label}: expected ${AVG_MAP_WIDTH}x${AVG_MAP_HEIGHT}`);
  }
  if (floor.map !== undefined && (!Array.isArray(floor.map) || floor.map.length !== AVG_MAP_HEIGHT || floor.map.some((row) => !Array.isArray(row) || row.length !== AVG_MAP_WIDTH))) {
    throw new Error(`${label}: map dimensions do not match ${AVG_MAP_WIDTH}x${AVG_MAP_HEIGHT}`);
  }
}

function floorWithCommonFields(floor) {
  const result = {};
  let mapInserted = false;
  const mapAnchor = floor.bgmap !== undefined || floor.fgmap !== undefined ? "ratio" : "height";
  for (const [key, value] of Object.entries(floor)) {
    if (key === "map") continue;
    result[key] = value;
    if (key === mapAnchor) {
      result.map = COMMON_AVG_MAP.map((row) => [...row]);
      mapInserted = true;
    }
  }
  if (!mapInserted) result.map = COMMON_AVG_MAP.map((row) => [...row]);
  return result;
}

function validatePortraitPositionFields(node, location, allowPortraitPosition) {
  if (!allowPortraitPosition && isPortraitShow(node) && (node.loc !== undefined || node.sloc !== undefined)) {
    throw new Error(`${location}: portrait position is generator-owned and must not be stored in Story IR`);
  }
  if (!allowPortraitPosition && isPortraitShow(node) && (node.opacity !== undefined || node.time !== undefined)) {
    throw new Error(`${location}: portrait opacity/time are generator-owned common fields`);
  }
  if (node.kind === "choice") {
    node.options.forEach((option, optionIndex) => option.events.forEach((child, childIndex) => {
      validatePortraitPositionFields(child, `${location}.options[${optionIndex}].events[${childIndex}]`, allowPortraitPosition);
    }));
  }
}

function validateCharacterStoryKinds(nodes, location) {
  for (const [index, node] of (nodes || []).entries()) {
    if (node.kind === "character.exchange") {
      throw new Error(`${location}[${index}]: character.exchange is main-story-only`);
    }
    if (node.kind === "choice") {
      node.options.forEach((option, optionIndex) => validateCharacterStoryKinds(
        option.events,
        `${location}[${index}].options[${optionIndex}].events`,
      ));
    }
  }
}

function validateBundle(bundle, {
  allowGeneratorOwnedFields = true,
  allowPortraitPosition = true,
  allowLegacyLifecycle = true,
} = {}) {
  if (!bundle || bundle.storyIrVersion !== STORY_IR_VERSION) throw new Error(`Story IR version must be ${STORY_IR_VERSION}`);
  if (!bundle.source || !Array.isArray(bundle.source.files) || !bundle.source.files.length) throw new Error("Story IR requires source.files");
  if (!Array.isArray(bundle.scenes) || !bundle.scenes.length) throw new Error("Story IR requires scenes");
  if (!allowGeneratorOwnedFields && Object.prototype.hasOwnProperty.call(bundle, "presentation")) {
    throw new Error("Story IR must not contain generator-owned bundle presentation");
  }
  const ids = new Set();
  bundle.scenes.forEach((scene, index) => {
    if (!scene.id || ids.has(scene.id)) throw new Error(`scenes[${index}]: missing or duplicate id`);
    ids.add(scene.id);
    if (!scene.floor || typeof scene.floor !== "object" || !Array.isArray(scene.events)) throw new Error(`scenes[${index}]: floor/events missing`);
    if (!allowGeneratorOwnedFields && Object.prototype.hasOwnProperty.call(scene.floor, "map")) {
      throw new Error(`scenes[${index}].floor must not contain generator-owned map`);
    }
    validateAvgFloorDimensions(scene.floor, `scenes[${index}].floor`);
    scene.events.forEach((node, nodeIndex) => validateNode(node, `scenes[${index}].events[${nodeIndex}]`));
    scene.events.forEach((node, nodeIndex) => validatePortraitPositionFields(
      node,
      `scenes[${index}].events[${nodeIndex}]`,
      allowPortraitPosition,
    ));
    if (bundle.source.kind === "character") {
      validateCharacterStoryKinds(scene.events, `scenes[${index}].events`);
      validateCharacterSceneLifecycle(scene, `scenes[${index}]`, { allowLegacyLifecycle });
    }
  });
  return bundle;
}

function validateProjectReferences(root, bundle) {
  const context = {};
  vm.runInNewContext(fs.readFileSync(path.join(root, "project", "data.js"), "utf8"), context);
  const data = Object.values(context)[0].main;
  const images = new Set(data.images || []);
  const bgms = new Set(data.bgms || []);
  const sounds = new Set(data.sounds || []);
  const floorIds = new Set(data.floorIds || []);
  const validatedBackgrounds = new Set();
  const validateImageReference = (image, location, isBackground) => {
    const file = path.join(root, "project", "images", image);
    if (!images.has(image) || !fs.existsSync(file)) {
      throw new Error(`${location}: unregistered or missing image ${image}`);
    }
    if (isBackground && !validatedBackgrounds.has(image)) {
      validateBackgroundImageSize(file, location);
      validatedBackgrounds.add(image);
    }
  };
  const visit = (node, location) => {
    if (node.kind === "background.show" || node.kind === "image.show") {
      validateImageReference(node.image, location, node.kind === "background.show");
    }
    if (node.kind === "ending.roll" && (!images.has(node.image) || !fs.existsSync(path.join(root, "project", "images", node.image)))) {
      throw new Error(`${location}: unregistered or missing image ${node.image}`);
    }
    if (node.kind === "bgm.play" && (!bgms.has(node.name) || !fs.existsSync(path.join(root, "project", "bgms", node.name)))) {
      throw new Error(`${location}: unregistered or missing BGM ${node.name}`);
    }
    if (node.kind === "sound.play" && (!sounds.has(node.name) || !fs.existsSync(path.join(root, "project", "sounds", node.name)))) {
      throw new Error(`${location}: unregistered or missing sound ${node.name}`);
    }
    if (node.kind === "goto" && typeof node.floorId === "string" && !node.floorId.startsWith(":")) {
      if (!floorIds.has(node.floorId)) throw new Error(`${location}: unregistered target floor ${node.floorId}`);
    }
    if (node.kind === "function.call" && typeof node.function !== "string") throw new Error(`${location}: function.call requires source code`);
    if (node.kind === "choice") node.options.forEach((option, optionIndex) => {
      option.events.forEach((child, childIndex) => visit(child, `${location}.options[${optionIndex}].events[${childIndex}]`));
    });
  };
  bundle.scenes.forEach((scene, sceneIndex) => {
    if (!floorIds.has(scene.id)) {
      throw new Error(`scenes[${sceneIndex}]: unregistered floor ${scene.id}`);
    }
    if (scene.floor.bgm && (!bgms.has(scene.floor.bgm) || !fs.existsSync(path.join(root, "project", "bgms", scene.floor.bgm)))) {
      throw new Error(`scenes[${sceneIndex}].floor.bgm: unregistered or missing BGM ${scene.floor.bgm}`);
    }
    for (const image of scene.floor.images || []) {
      validateImageReference(image.name, `scenes[${sceneIndex}].floor.images`, image.canvas === "bg");
    }
    scene.events.forEach((node, nodeIndex) => visit(node, `scenes[${sceneIndex}].events[${nodeIndex}]`));
  });
}

function bundleToFloors(bundle) {
  validateBundle(bundle);
  const transitions = COMMON_PRESENTATION.transitions;
  const outputCompat = readPortraitOutputCompat();
  return bundle.scenes.map((scene) => ({
    ...floorWithCommonFields(scene.floor),
    eachArrive: irToEvents(
      ensureAvgLayout(normalizeBgmLifecycle(normalizePortraitLifecycle(scene.events))),
      transitions,
      { portraitCommonFields: !outputCompat.omitCommonFieldsForScenes.includes(scene.id) },
    ),
  }));
}

function readBundle(file, { allowLegacyLifecycle = false } = {}) {
  return validateBundle(JSON.parse(fs.readFileSync(file, "utf8")), {
    allowGeneratorOwnedFields: false,
    allowPortraitPosition: false,
    allowLegacyLifecycle,
  });
}

module.exports = { bundleToFloors, floorWithCommonFields, imageDimensionsFromBuffer, normalizeBundlePortraitLifecycle, normalizePortraitLifecycle, readBundle, readImageDimensions, validateAvgFloorDimensions, validateBackgroundImageSize, validateBundle, validateCharacterSceneLifecycle, validatePortraitOutputCompat, validateProjectReferences };
