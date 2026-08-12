const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const STORY_IR_VERSION = 1;

function sha256File(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function canonicalPath(root, file) {
  return path.relative(root, file).split(path.sep).join("/");
}

function sourceRecords(root, files) {
  return files.map((file) => ({ path: canonicalPath(root, file), sha256: sha256File(file) }));
}

function textToIr(value) {
  const match = value.match(/^\t\[([^\]]+)\]([\s\S]*)$/);
  return match
    ? { kind: "dialogue", speaker: match[1], text: match[2] }
    : { kind: "narration", text: value };
}

function irToText(node) {
  return node.kind === "dialogue" ? `\t[${node.speaker}]${node.text}` : node.text;
}

function eventToIr(event) {
  if (typeof event === "string") return textToIr(event);
  if (!event || typeof event !== "object" || Array.isArray(event)) throw new Error("Story IR only accepts string or object events");
  switch (event.type) {
    case "text": {
      const node = textToIr(event.text || "");
      node.presentation = Object.fromEntries(Object.entries(event).filter(([key]) => key !== "type" && key !== "text"));
      return node;
    }
    case "setText":
      return { kind: "layout.set", value: Object.fromEntries(Object.entries(event).filter(([key]) => key !== "type")) };
    case "playBgm": return { kind: "bgm.play", name: event.name, keep: event.keep };
    case "pauseBgm": return { kind: "bgm.pause" };
    case "resumeBgm": return { kind: "bgm.resume" };
    case "playSound": return { kind: "sound.play", name: event.name, stop: event.stop, pitch: event.pitch, sync: event.sync };
    case "stopSound": return { kind: "sound.stop" };
    case "showImage":
      return {
        kind: event.code === 1 ? "background.show" : "image.show",
        role: event.code === 10 || event.code === 11 || event.code === 12 || event.code === 20 ? "portrait" : event.code === 30 || event.code >= 90 ? "cg" : "image",
        code: event.code, image: event.image, sloc: event.sloc,
        loc: event.code === 10 || event.code === 11 || event.code === 12 || event.code === 20 ? ["portraitSpeakerX", "portraitSpeakerY"] : event.loc,
        opacity: event.opacity, time: event.time,
      };
    case "hideImage": return { kind: "image.hide", code: event.code, time: event.time, async: event.async };
    case "sleep": return { kind: "wait", time: event.time, noSkip: event.noSkip };
    case "changeFloor":
      return { kind: "goto", floorId: event.floorId, loc: event.loc, direction: event.direction, time: event.time };
    case "comment": return { kind: "comment", text: event.text || event.comment || "" };
    case "function": return { kind: "function.call", function: event.function, async: event.async };
    case "playTransitionVideo":
      return { kind: "transition.video", name: event.name, time: event.time };
    case "choices":
      return {
        kind: "choice",
        prompt: event.text || "",
        options: (event.choices || []).map((choice) => ({
          text: choice.text,
          color: choice.color,
          need: choice.need,
          events: (choice.action || []).map(eventToIr),
        })),
      };
    default:
      throw new Error(`Unsupported engine event type for Story IR: ${event.type || "(missing type)"}`);
  }
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
        sloc: node.sloc,
        loc: node.role === "portrait" || node.code === 10 || node.code === 11 || node.code === 12 || node.code === 20
          ? ["portraitSpeakerX", "portraitSpeakerY"]
          : node.loc,
        opacity: node.opacity,
        time: node.time,
      });
    case "image.hide": return cleanUndefined({ type: "hideImage", code: node.code, time: node.time, async: node.async });
    case "wait": return cleanUndefined({ type: "sleep", time: node.time, noSkip: node.noSkip });
    case "goto": return cleanUndefined({ type: "changeFloor", floorId: node.floorId, loc: node.loc, direction: node.direction, time: node.time });
    case "comment": return { type: "comment", text: node.text };
    case "function.call": return cleanUndefined({ type: "function", function: node.function, async: node.async });
    case "transition.video": return cleanUndefined({ type: "playTransitionVideo", name: node.name, time: node.time });
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

const ALLOWED_KINDS = new Set([
  "narration", "dialogue", "layout.set", "bgm.play", "bgm.pause", "bgm.resume",
  "sound.play", "sound.stop", "background.show", "image.show", "image.hide", "wait",
  "goto", "comment", "function.call", "transition.video", "choice",
]);

function validateNode(node, location) {
  if (!node || typeof node !== "object" || Array.isArray(node)) throw new Error(`${location}: node must be an object`);
  if (!ALLOWED_KINDS.has(node.kind)) throw new Error(`${location}: unsupported kind ${node.kind}`);
  if ((node.kind === "narration" || node.kind === "dialogue" || node.kind === "comment") && typeof node.text !== "string") {
    throw new Error(`${location}: ${node.kind}.text must be a string`);
  }
  if (node.kind === "dialogue" && typeof node.speaker !== "string") throw new Error(`${location}: dialogue.speaker must be a string`);
  if ((node.kind === "bgm.play" || node.kind === "sound.play") && typeof node.name !== "string") {
    throw new Error(`${location}: ${node.kind}.name must be a string`);
  }
  if ((node.kind === "background.show" || node.kind === "image.show") && (typeof node.code !== "number" || typeof node.image !== "string")) {
    throw new Error(`${location}: ${node.kind} requires numeric code and image`);
  }
  if (node.kind === "choice") {
    if (!Array.isArray(node.options) || !node.options.length) throw new Error(`${location}: choice requires options`);
    node.options.forEach((option, index) => {
      if (typeof option.text !== "string" || !Array.isArray(option.events)) throw new Error(`${location}.options[${index}]: invalid option`);
      option.events.forEach((child, childIndex) => validateNode(child, `${location}.options[${index}].events[${childIndex}]`));
    });
  }
}

function validateBundle(bundle) {
  if (!bundle || bundle.storyIrVersion !== STORY_IR_VERSION) throw new Error(`Story IR version must be ${STORY_IR_VERSION}`);
  if (!bundle.source || !Array.isArray(bundle.source.files) || !bundle.source.files.length) throw new Error("Story IR requires source.files");
  if (!Array.isArray(bundle.scenes) || !bundle.scenes.length) throw new Error("Story IR requires scenes");
  const ids = new Set();
  bundle.scenes.forEach((scene, index) => {
    if (!scene.id || ids.has(scene.id)) throw new Error(`scenes[${index}]: missing or duplicate id`);
    ids.add(scene.id);
    if (!scene.floor || typeof scene.floor !== "object" || !Array.isArray(scene.events)) throw new Error(`scenes[${index}]: floor/events missing`);
    scene.events.forEach((node, nodeIndex) => validateNode(node, `scenes[${index}].events[${nodeIndex}]`));
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
    for (const image of scene.floor.images || []) {
      if (!images.has(image.name) || !fs.existsSync(path.join(root, "project", "images", image.name))) {
        throw new Error(`scenes[${sceneIndex}].floor.images: unregistered or missing image ${image.name}`);
      }
    }
    scene.events.forEach((node, nodeIndex) => visit(node, `scenes[${sceneIndex}].events[${nodeIndex}]`));
  });
}

function verifySources(root, bundle) {
  for (const source of bundle.source.files) {
    const file = path.join(root, ...source.path.split("/"));
    if (!fs.existsSync(file)) throw new Error(`Story IR source is missing: ${source.path}`);
    const actual = sha256File(file);
    if (actual !== source.sha256) throw new Error(`Story IR is stale for ${source.path}; refresh the semantic IR before emitting engine events`);
  }
}

function createBundle(root, sourceFiles, floors, sourceKind) {
  return validateBundle(cleanUndefined({
    storyIrVersion: STORY_IR_VERSION,
    source: { kind: sourceKind, files: sourceRecords(root, sourceFiles) },
    scenes: floors.map((floor) => ({
      id: floor.floorId,
      floor: Object.fromEntries(Object.entries(floor).filter(([key]) => key !== "eachArrive")),
      events: (floor.eachArrive || []).map(eventToIr),
    })),
  }));
}

function bundleToFloors(bundle) {
  validateBundle(bundle);
  return bundle.scenes.map((scene) => ({ ...scene.floor, eachArrive: scene.events.map(irToEvent) }));
}

function readBundle(root, file) {
  const bundle = validateBundle(JSON.parse(fs.readFileSync(file, "utf8")));
  verifySources(root, bundle);
  return bundle;
}

function writeBundle(file, bundle) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(validateBundle(bundle), null, 2) + "\n", "utf8");
}

module.exports = { createBundle, bundleToFloors, readBundle, validateBundle, validateProjectReferences, verifySources, writeBundle };
