const fs = require("fs");
const path = require("path");
const vm = require("vm");

const STORY_IR_VERSION = 1;
const AVG_MAP_WIDTH = 17;
const AVG_MAP_HEIGHT = 13;
const PORTRAIT_CODES = new Set([10, 11, 12, 20]);
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

function irToEvent(node) {
  switch (node.kind) {
    case "narration":
    case "dialogue": {
      const value = irToText(node);
      return node.presentation && Object.keys(node.presentation).length
        ? { type: "text", text: value, ...node.presentation }
        : value;
    }
    case "layout.set": return { type: "setText", ...node.value };
    case "bgm.play": return cleanUndefined({ type: "playBgm", name: node.name, keep: node.keep });
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
        opacity: node.opacity,
        time: node.time,
      });
    case "image.hide": return cleanUndefined({ type: "hideImage", code: node.code, time: node.time, async: node.async });
    case "wait": return cleanUndefined({ type: "sleep", time: node.time, noSkip: node.noSkip });
    case "goto": return cleanUndefined({ type: "changeFloor", floorId: node.floorId, loc: node.loc, direction: node.direction, time: node.time, silent: true });
    case "comment": return { type: "comment", text: node.text };
    case "function.call": return cleanUndefined({ type: "function", function: node.function, async: node.async });
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
          action: option.events.map(irToEvent),
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

function irToEvents(nodes, transitions = {}) {
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
          action: irToEvents(option.events, transitions),
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
      const next = nodes[index + 1];
      if (next && next.kind === "background.show") {
        events.push(irToEvent(next));
        index += 1;
      }
      events.push(cleanUndefined({
        type: "setCurtain",
        color: [0, 0, 0, 0],
        time: transition.time,
      }));
      continue;
    }

    events.push(irToEvent(node));
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
  "goto", "comment", "function.call", "akiba.event.complete", "akiba.return", "transition.video", "choice",
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
  if (node.kind === "dialogue" && /【[^】]*】/.test(node.speaker)) {
    throw new Error(`${location}: bracketed scene directive must not be a dialogue speaker`);
  }
  if (node.kind === "akiba.event.complete" && (typeof node.eventId !== "string" || !node.eventId)) {
    throw new Error(`${location}: akiba.event.complete requires eventId`);
  }
  if ((node.kind === "bgm.play" || node.kind === "sound.play") && typeof node.name !== "string") {
    throw new Error(`${location}: ${node.kind}.name must be a string`);
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
  if (completion) return { kind: "complete", eventId: completion[1] };
  return /core\.plugin\.returnToAkiba\(\s*\)/.test(node.function) ? { kind: "return" } : null;
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

function validateCharacterSceneLifecycle(scene, location) {
  for (const [pathIndex, path] of terminalPaths(scene.events).entries()) {
    const calls = path.map(getAkibaLifecycleCall);
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

function validateBundle(bundle, { allowGeneratorOwnedFields = true } = {}) {
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
    if (bundle.source.kind === "character") validateCharacterSceneLifecycle(scene, `scenes[${index}]`);
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
  const visit = (node, location) => {
    if (node.kind === "background.show" || node.kind === "image.show") {
      if (!images.has(node.image) || !fs.existsSync(path.join(root, "project", "images", node.image))) {
        throw new Error(`${location}: unregistered or missing image ${node.image}`);
      }
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
      if (!images.has(image.name) || !fs.existsSync(path.join(root, "project", "images", image.name))) {
        throw new Error(`scenes[${sceneIndex}].floor.images: unregistered or missing image ${image.name}`);
      }
    }
    scene.events.forEach((node, nodeIndex) => visit(node, `scenes[${sceneIndex}].events[${nodeIndex}]`));
  });
}

function bundleToFloors(bundle) {
  validateBundle(bundle);
  const transitions = COMMON_PRESENTATION.transitions;
  return bundle.scenes.map((scene) => ({
    ...floorWithCommonFields(scene.floor),
    eachArrive: irToEvents(ensureAvgLayout(normalizeBgmLifecycle(normalizePortraitLifecycle(scene.events))), transitions),
  }));
}

function readBundle(file) {
  return validateBundle(JSON.parse(fs.readFileSync(file, "utf8")), { allowGeneratorOwnedFields: false });
}

module.exports = { bundleToFloors, floorWithCommonFields, normalizeBundlePortraitLifecycle, normalizePortraitLifecycle, readBundle, validateAvgFloorDimensions, validateBundle, validateCharacterSceneLifecycle, validateProjectReferences };
