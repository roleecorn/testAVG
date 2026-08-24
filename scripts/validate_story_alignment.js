const fs = require("fs");
const path = require("path");
const { readMainStoryBundles } = require("./main_story_ir");

const root = path.resolve(__dirname, "..");
const lineAssetPattern = /^CH([1-7])_L(\d+)\.png$/;
const STORY_HEADING_PATTERN = /^\d+-\d+$/;
const HEADER_LINE_PATTERN = /^(?:旁白|簡訊|一般對話|內心想法|CG、背景、特效|例如↓|場景|彈出CG)\s*[＝=]/;

function normalizeText(value) {
  return String(value || "")
    .normalize("NFC")
    .replace(/\u3000/g, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();
}

function normalizeDirective(value) {
  return normalizeText(value)
    .replace(/^【\s*/, "【")
    .replace(/\s*】$/, "】")
    .replace(/\s*[：︰:]\s*/g, "：");
}

function parseSourceDirective(raw) {
  const match = raw.match(/【([^】]+)】/);
  if (!match) return null;
  const full = normalizeDirective(match[0]);
  const body = full.slice(1, -1).trim();
  const separator = body.match(/^([^：︰:]+)[：︰:]\s*(.*)$/);
  const head = (separator ? separator[1] : body).trim();
  const value = (separator ? separator[2] : "").trim();
  const normalizedHead = head.replace(/[\s_]+/g, "").toUpperCase();

  if (normalizedHead === "BGM") {
    const stop = /^(?:停止|stop)$/i.test(value);
    const playValue = value.replace(/\s+(?:播放|play)$/i, "").trim();
    return { kind: stop || !playValue ? "bgm.pause" : "bgm.play", name: playValue, full };
  }
  if (/^BGM(?:停止|STOP)$/i.test(body.replace(/[：︰:]/g, ""))) {
    return { kind: "bgm.pause", name: "", full };
  }
  if (normalizedHead === "背景") {
    return { kind: "background.show", name: value, full };
  }
  if (normalizedHead === "CG" || normalizedHead.startsWith("CG")) {
    let cg = separator ? value : body.replace(/^CG[_\s]*/i, "");
    const action = cg.match(/\s*(出現|消失)$/);
    if (action) cg = cg.slice(0, action.index).trim();
    return { kind: action && action[1] === "消失" ? "cg.hide" : "cg.show", name: cg, full };
  }
  if (/^過場(?:：.*)?$/.test(body)) return { kind: "transition", name: body, full };
  if (body === "人物交流時間") return { kind: "exchange", name: body, full };
  return { kind: "directive", name: body, full };
}

function sourceTextLine(raw) {
  let line = raw.trim();
  if (!line || line.startsWith("【") || HEADER_LINE_PATTERN.test(line)) return null;
  if (/^缺少(?:背景|CG)：/.test(line)) return null;
  if (/^\[.*(?:\]|］)$/.test(line)) {
    line = line.slice(1, -1).trim();
    const bracketDialogue = line.match(/^[^：:，。！？…]+[：:](.*)$/);
    return normalizeText(bracketDialogue ? bracketDialogue[1] : line) || null;
  }
  const dialogue = line.match(/^[^：:]+[：:](.*)$/);
  if (dialogue) return normalizeText(dialogue[1]) || null;
  const option = line.match(/^(?:[0-9０-９]+|[一二三四五六七八九十]+)[.．、。](.*)$/);
  if (option) return normalizeText(option[1]) || null;
  return null;
}

function firstAppearanceAssets(lines, chapter, globalAssets = new Map()) {
  const result = new Map();
  let storyStarted = false;
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (STORY_HEADING_PATTERN.test(trimmed)) storyStarted = true;
    if (!storyStarted) return;
    const directive = parseSourceDirective(line);
    if (!directive || !["background.show", "cg.show"].includes(directive.kind)) return;
    const key = `${directive.kind}:${normalizeText(directive.name)}`;
    const asset = `CH${chapter}_L${index + 1}.png`;
    if (!result.has(key)) result.set(key, asset);
    if (!globalAssets.has(key)) globalAssets.set(key, asset);
  });
  return result;
}

function resolveBgmName(name, data, mappings) {
  const normalized = normalizeText(name).replace(/\s+(?:播放|play)$/i, "");
  if (!normalized) return null;
  if (mappings.has(normalized)) return mappings.get(normalized);
  const aliases = data.nameMap || {};
  if (typeof aliases[normalized] === "string") return aliases[normalized];
  if (/\.(?:mp3|ogg|wav)$/i.test(normalized)) return normalized;
  const direct = `${normalized}.mp3`;
  if ((data.bgms || []).includes(direct)) return direct;
  const exact = (data.bgms || []).find((file) => path.basename(file, path.extname(file)) === normalized);
  return exact || null;
}

function buildBgmMappings(bundle) {
  const mappings = new Map();
  const visit = (nodes) => {
    for (const node of nodes || []) {
      if (node.kind === "comment" && typeof node.text === "string") {
        const match = node.text.match(/([^：:；;。]+?)\s*→\s*([A-Za-z0-9_.-]+\.(?:mp3|ogg|wav))/);
        if (match) mappings.set(normalizeText(match[1]), match[2]);
      }
      if (node.kind === "choice") node.options.forEach((option) => visit(option.events));
    }
  };
  bundle.scenes.forEach((scene) => visit(scene.events));
  return mappings;
}

function sourceAnchor(directive, chapter, assets, data, mappings, line) {
  if (directive.kind === "bgm.play") {
    const file = resolveBgmName(directive.name, data, mappings);
    return {
      key: file ? `bgm.play:${file}` : `bgm.source:${normalizeText(directive.name)}`,
      display: `${directive.full}${file ? ` → ${file}` : " (unresolved)"}`,
      line,
    };
  }
  if (directive.kind === "bgm.pause") return { key: "bgm.pause", display: directive.full, line };
  if (directive.kind === "background.show" || directive.kind === "cg.show" || directive.kind === "cg.hide") {
    const assetKey = `${directive.kind === "background.show" ? "background.show" : "cg.show"}:${normalizeText(directive.name)}`;
    const asset = assets.get(assetKey);
    const suffix = asset ? `:${asset}` : `:source:${normalizeText(directive.name)}`;
    return { key: `${directive.kind}${suffix}`, display: `${directive.full}${asset ? ` → ${asset}` : " (unresolved)"}`, line };
  }
  return { key: `${directive.kind}:${normalizeText(directive.name || directive.full)}`, display: directive.full, line };
}

function buildSourceTrace(lines, chapter, data, mappings, globalAssets = new Map()) {
  const localAssets = firstAppearanceAssets(lines, chapter, globalAssets);
  const assets = new Map(globalAssets);
  for (const [key, asset] of localAssets.entries()) if (!assets.has(key)) assets.set(key, asset);
  const items = [];
  let storyStarted = false;
  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const trimmed = line.trim();
    if (STORY_HEADING_PATTERN.test(trimmed)) storyStarted = true;
    if (!storyStarted) return;
    const directive = parseSourceDirective(line);
    if (trimmed === "分歧選項" || trimmed === "分岐選項") items.push({ type: "anchor", value: { key: "choice", display: trimmed, line: lineNumber } });
    else if (trimmed === "返回分歧選項" || trimmed === "【返回分歧選項】") items.push({ type: "anchor", value: { key: "choice.return", display: trimmed, line: lineNumber } });
    else if (directive) {
      const inline = line.match(/^(.*?)(【[^】]+】)\s*$/);
      if (inline && inline[1].trim()) {
        const text = sourceTextLine(inline[1]);
        if (text) items.push({ type: "text", value: text, line: lineNumber });
      }
      items.push({ type: "anchor", value: sourceAnchor(directive, chapter, assets, data, mappings, lineNumber) });
    }
    else {
      const option = trimmed.match(/^(?:[0-9０-９]+|[一二三四五六七八九十]+)[.．、。](.*)$/);
      if (option) items.push({ type: "choice-option", value: normalizeText(option[1]), line: lineNumber });
      else {
        const text = sourceTextLine(line);
        if (text) items.push({ type: "text", value: text, line: lineNumber });
      }
    }
  });
  return items;
}

function sourceAssetKind(image) {
  const match = String(image || "").match(lineAssetPattern);
  return match ? image : null;
}

function irAnchorForNode(node, context) {
  if (node.kind === "bgm.play") {
    return { key: `bgm.play:${node.name}`, display: `${node.kind} ${node.name}` };
  }
  if (node.kind === "bgm.pause") return { key: "bgm.pause", display: node.kind };
  if (node.kind === "bgm.resume") return { key: "bgm.resume", display: node.kind };
  if (node.kind === "character.exchange") {
    return { key: "exchange:人物交流時間", display: "beginCharacterExchange" };
  }
  if (node.kind === "background.show" || node.kind === "image.show") {
    if (node.kind === "image.show" && node.code >= 10 && node.code <= 20 && node.code !== 30) return null;
    const asset = sourceAssetKind(node.image);
    if (!asset) return null;
    if (node.kind === "background.show" || node.code === 1) {
      context.cgByCode.delete(node.code);
      return { key: `background.show:${asset}`, display: `${node.kind} ${asset}` };
    }
    context.cgByCode.set(node.code, asset);
    return { key: `cg.show:${asset}`, display: `${node.kind} ${asset}` };
  }
  if (node.kind === "image.hide" && node.code >= 25) {
    const asset = context.cgByCode.get(node.code);
    return asset ? { key: `cg.hide:${asset}`, display: `${node.kind} ${asset}` } : null;
  }
  if (node.kind === "choice") return { key: "choice", display: "choice" };
  if (node.kind === "comment") {
    const directive = parseSourceDirective(node.text || "");
    if (!directive || !context.sourceDirectives.has(directive.full)
      || ["bgm.play", "bgm.pause", "background.show", "cg.show", "cg.hide", "exchange"].includes(directive.kind)) return null;
    return { key: `${directive.kind}:${normalizeText(directive.name || directive.full)}`, display: node.text };
  }
  return null;
}

function buildIrTrace(bundle, chapter, data, mappings, sourceDirectives = new Map()) {
  const items = [];
  const context = { chapter, data, mappings, cgByCode: new Map(), sourceDirectives };
  const visit = (nodes, sceneId) => {
    let sceneStart = true;
    for (const node of nodes || []) {
      if (node.kind === "dialogue" || node.kind === "narration") {
        items.push({ type: "text", value: normalizeText(node.text), sceneId });
        sceneStart = false;
      }
      const anchor = irAnchorForNode(node, context);
      if (anchor) {
        const isRepeatedSceneBackground = anchor.key.startsWith("background.show:")
          && sceneStart && context.lastBackground === anchor.key;
        if (!isRepeatedSceneBackground) items.push({ type: "anchor", value: { ...anchor, sceneId } });
        if (anchor.key.startsWith("background.show:")) context.lastBackground = anchor.key;
        else if (!anchor.key.startsWith("bgm.play:") && anchor.key !== "bgm.pause" && anchor.key !== "bgm.resume") sceneStart = false;
      }
      if (node.kind === "choice") {
        sceneStart = false;
        node.options.forEach((option) => {
          if (option.text) items.push({ type: "choice-option", value: normalizeText(option.text), sceneId });
          visit(option.events, `${sceneId}/choice`);
        });
      }
    }
  };
  bundle.scenes.forEach((scene) => visit(scene.events, scene.id));
  return items;
}

function anchorItems(trace) {
  const result = [];
  for (const item of trace) {
    if (item.type !== "anchor") continue;
    const value = item.value;
    const previous = result[result.length - 1];
    if (previous && previous.key === value.key && value.key.startsWith("background.show:")) continue;
    result.push(value);
  }
  return result;
}

function semanticAnchorItems(trace) {
  return anchorItems(trace).filter((item) => (
    item.key.startsWith("bgm.play:")
    && !item.key.endsWith(":BGMWhisper.mp3")
    || item.key === "bgm.pause"
    || item.key === "bgm.resume"
    || item.key === "exchange:人物交流時間"
  ));
}

function textSignature(trace) {
  return trace.filter((item) => item.type === "text").map((item) => item.value).join("");
}

function firstDifference(left, right) {
  const max = Math.min(left.length, right.length);
  let index = 0;
  while (index < max && left[index] === right[index]) index += 1;
  return {
    index,
    left: left.slice(Math.max(0, index - 24), index + 48),
    right: right.slice(Math.max(0, index - 24), index + 48),
  };
}

function compareAnchors(source, ir, label) {
  const expected = semanticAnchorItems(source);
  const actual = semanticAnchorItems(ir);
  const errors = [];
  let sourceIndex = 0;
  let irIndex = 0;
  while (sourceIndex < expected.length && irIndex < actual.length) {
    if (expected[sourceIndex].key === actual[irIndex].key) {
      sourceIndex += 1;
      irIndex += 1;
      continue;
    }
    const expectedLater = actual.slice(irIndex).some((item) => item.key === expected[sourceIndex].key);
    const actualLater = expected.slice(sourceIndex).some((item) => item.key === actual[irIndex].key);
    if (expectedLater) {
      errors.push(`${label}: source line ${expected[sourceIndex].line} ${expected[sourceIndex].display} is missing or shifted before IR ${actual[irIndex].display} (${actual[irIndex].sceneId || "unknown scene"})`);
      sourceIndex += 1;
    } else if (actualLater) {
      errors.push(`${label}: IR ${actual[irIndex].display} (${actual[irIndex].sceneId || "unknown scene"}) is extra or shifted before source line ${expected[sourceIndex].line} ${expected[sourceIndex].display}`);
      irIndex += 1;
    } else {
      errors.push(`${label}: source line ${expected[sourceIndex].line} ${expected[sourceIndex].display} does not map to IR ${actual[irIndex].display} (${actual[irIndex].sceneId || "unknown scene"})`);
      sourceIndex += 1;
      irIndex += 1;
    }
    if (errors.length >= 12) break;
  }
  while (sourceIndex < expected.length && errors.length < 12) {
    errors.push(`${label}: source line ${expected[sourceIndex].line} ${expected[sourceIndex].display} has no IR mapping`);
    sourceIndex += 1;
  }
  while (irIndex < actual.length && errors.length < 12) {
    errors.push(`${label}: IR ${actual[irIndex].display} (${actual[irIndex].sceneId || "unknown scene"}) has no source mapping`);
    irIndex += 1;
  }
  return errors;
}

function choiceOptionItems(trace) {
  return trace
    .filter((item) => item.type === "choice-option")
    .map((item) => item.value)
    .filter(Boolean);
}

function countAnchors(trace, predicate) {
  return anchorItems(trace).filter(predicate).length;
}

function exchangeResumeBgmItems(trace) {
  const anchors = anchorItems(trace);
  const result = [];
  for (let index = 0; index < anchors.length; index += 1) {
    if (anchors[index].key !== "exchange:人物交流時間") continue;
    const nextExchange = anchors.slice(index + 1).findIndex((item) => item.key === "exchange:人物交流時間");
    const end = nextExchange < 0 ? anchors.length : index + 1 + nextExchange;
    const bgm = anchors.slice(index + 1, end).find((item) => item.key.startsWith("bgm.play:"));
    result.push(bgm || null);
  }
  return result;
}

function findMainlineExchangeDestinations(bundle) {
  const destinations = [];
  const visit = (nodes) => {
    for (const node of nodes || []) {
      if (node.kind === "character.exchange") {
        destinations.push(node.destination && node.destination.floorId ? node.destination.floorId : null);
      }
      if (node.kind === "choice") node.options.forEach((option) => visit(option.events));
    }
  };
  bundle.scenes.forEach((scene) => visit(scene.events));
  return destinations;
}

function validateExchangeResumeBgm(source, bundle, label) {
  const expected = exchangeResumeBgmItems(source);
  const destinations = findMainlineExchangeDestinations(bundle);
  const errors = [];
  if (expected.length !== destinations.length) return errors;
  expected.forEach((item, index) => {
    const destination = destinations[index];
    const scene = bundle.scenes.find((candidate) => candidate.id === destination);
    const actualEvent = scene && scene.events.find((node) => node.kind === "bgm.play");
    const actualName = actualEvent ? actualEvent.name : null;
    const actualFloorName = scene && scene.floor ? scene.floor.bgm || null : null;
    const expectedName = item ? item.key.slice("bgm.play:".length) : null;
    if (!scene || actualName !== expectedName || actualFloorName !== expectedName) {
      errors.push(`${label}: 人物交流時間 #${index + 1} should resume ${expectedName || "no BGM"} in continuation scene ${destination || "(missing)"}; event=${actualName || "(missing)"}; floor=${actualFloorName || "(missing)"}`);
    }
  });
  return errors;
}

function validateMainStoryAlignment(data) {
  const errors = [];
  const bundles = readMainStoryBundles();
  const sourceLinesByChapter = new Map();
  const globalAssets = new Map();
  for (let chapter = 1; chapter <= bundles.length; chapter += 1) {
    const sourcePath = path.join(root, "project", "mainStory", `CH${chapter}`);
    const lines = fs.readFileSync(sourcePath, "utf8").split(/\r?\n/);
    sourceLinesByChapter.set(chapter, lines);
    firstAppearanceAssets(lines, chapter, globalAssets);
  }
  for (const [index, bundle] of bundles.entries()) {
    const chapter = index + 1;
    const lines = sourceLinesByChapter.get(chapter);
    const mappings = buildBgmMappings(bundle);
    const source = buildSourceTrace(lines, chapter, data, mappings, globalAssets);
    const sourceDirectives = new Map();
    source.filter((item) => item.type === "anchor").forEach((item) => {
      const directiveText = item.value.display.split(" → ")[0];
      const directive = parseSourceDirective(directiveText);
      if (directive) sourceDirectives.set(directive.full, directive);
    });
    const ir = buildIrTrace(bundle, chapter, data, mappings, sourceDirectives);
    const label = `main CH${chapter}`;
    errors.push(...compareAnchors(source, ir, label));
    const sourceText = textSignature(source);
    const irText = textSignature(ir);
    if (sourceText !== irText) {
      const difference = firstDifference(sourceText, irText);
      errors.push(`${label}: text content is not bidirectionally mapped at offset ${difference.index}; source="${difference.left}"; IR="${difference.right}"`);
    }
    const sourceOptions = choiceOptionItems(source);
    const irOptions = choiceOptionItems(ir);
    if (sourceOptions.slice().sort().join("\u0000") !== irOptions.slice().sort().join("\u0000")) {
      errors.push(`${label}: choice options are not bidirectionally mapped; source=${JSON.stringify(sourceOptions)}; IR=${JSON.stringify(irOptions)}`);
    }
    const sourceChoices = countAnchors(source, (item) => item.key === "choice");
    const irChoices = countAnchors(ir, (item) => item.key === "choice");
    if (sourceChoices !== irChoices) {
      errors.push(`${label}: choice count is not bidirectionally mapped; source=${sourceChoices}; IR=${irChoices}`);
    }
    const sourceExchanges = countAnchors(source, (item) => item.key.startsWith("exchange:"));
    const irExchanges = countAnchors(ir, (item) => item.key.startsWith("exchange:"));
    if (sourceExchanges !== irExchanges) {
      errors.push(`${label}: 人物交流時間 count is not bidirectionally mapped; source=${sourceExchanges}; IR=${irExchanges}`);
    }
    errors.push(...validateExchangeResumeBgm(source, bundle, label));
  }
  if (errors.length) throw new Error(`Story source↔IR alignment failed:\n${errors.join("\n")}`);
  console.log("Validated bidirectional source↔IR alignment for main-story CH1–CH7.");
}

function readProjectData() {
  const vm = require("vm");
  const context = {};
  vm.runInNewContext(fs.readFileSync(path.join(root, "project", "data.js"), "utf8"), context);
  return Object.values(context)[0].main;
}

function main() {
  validateMainStoryAlignment(readProjectData());
}

if (require.main === module) main();

module.exports = {
  buildIrTrace,
  buildSourceTrace,
  compareAnchors,
  exchangeResumeBgmItems,
  findMainlineExchangeDestinations,
  normalizeText,
  parseSourceDirective,
  textSignature,
  validateMainStoryAlignment,
};
