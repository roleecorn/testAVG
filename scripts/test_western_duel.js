const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "extensions", "minigames", "westernDuel.js"), "utf8");

class FakeElement {
  constructor(tagName, width = 416, height = 416) {
    this.tagName = String(tagName || "div").toUpperCase();
    this.clientWidth = width;
    this.clientHeight = height;
    this.children = [];
    this.parentNode = null;
    this.style = { cssText: "" };
    this.attributes = {};
    this.listeners = new Map();
    this.textContent = "";
    this.onclick = null;
  }

  appendChild(child) {
    child.parentNode = this;
    if (/width:100%/.test(child.style.cssText || "")) child.clientWidth = this.clientWidth;
    if (/height:100%/.test(child.style.cssText || "")) child.clientHeight = this.clientHeight;
    this.children.push(child);
    return child;
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index >= 0) this.children.splice(index, 1);
    child.parentNode = null;
    return child;
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
  }

  addEventListener(name, callback) {
    this.listeners.set(callback, name);
  }

  removeEventListener(name, callback) {
    this.listeners.delete(callback);
  }

  querySelectorAll(selector) {
    const matches = [];
    const wanted = String(selector).toUpperCase();
    function visit(node) {
      for (const child of node.children) {
        if (child.tagName === wanted) matches.push(child);
        visit(child);
      }
    }
    visit(this);
    return matches;
  }

  set innerHTML(value) {
    this.children.forEach((child) => { child.parentNode = null; });
    this.children = [];
    this._innerHTML = String(value);
  }

  get innerHTML() {
    return this._innerHTML || "";
  }
}

function createEnvironment(width, height) {
  const rootElement = new FakeElement("div", width, height);
  const body = new FakeElement("body", width, height);
  const windowListeners = new Map();
  const documentListeners = new Map();
  const animationFrames = new Map();
  let nextFrameId = 1;
  let clock = 0;
  let lockCount = 0;
  let unlockCount = 0;

  const context = {
    window: {
      MotaMiniGames: {},
      innerWidth: width,
      innerHeight: height,
      performance: { now: () => clock },
      addEventListener(name, callback) { windowListeners.set(callback, name); },
      removeEventListener(name, callback) { windowListeners.delete(callback); },
      requestAnimationFrame(callback) {
        const id = nextFrameId++;
        animationFrames.set(id, callback);
        return id;
      },
      cancelAnimationFrame(id) { animationFrames.delete(id); },
    },
    document: {
      body,
      createElement(tagName) { return new FakeElement(tagName, width, height); },
      addEventListener(name, callback) { documentListeners.set(callback, name); },
      removeEventListener(name, callback) { documentListeners.delete(callback); },
    },
    core: {
      status: { lockControl: false },
      dom: { gameDraw: rootElement },
      lockControl() { lockCount++; this.status.lockControl = true; },
      unlockControl() { unlockCount++; this.status.lockControl = false; },
    },
    console,
    Date,
    Math,
  };
  vm.runInNewContext(source, context, { filename: "westernDuel.js" });
  return {
    game: context.window.MotaMiniGames.westernDuel,
    rootElement,
    body,
    windowListeners,
    documentListeners,
    animationFrames,
    setClock(value) { clock = value; },
    lockCount: () => lockCount,
    unlockCount: () => unlockCount,
  };
}

function expectedPanelSize(width, height) {
  const margin = Math.max(8, Math.min(width, height) * 0.035);
  return {
    width: `${Math.min(Math.max(180, Math.floor(width - margin * 2)), 980)}px`,
    height: `${Math.min(Math.max(180, Math.floor(height - margin * 2)), 720)}px`,
  };
}

function testStartsResponsivelyAndUsesCompletePack(width, height) {
  const env = createEnvironment(width, height);
  let result = null;
  const instance = env.game.start({ random: () => 0, toleranceMs: 100 }, (value) => { result = value; });
  assert.equal(env.body.children.length, 1);
  assert.equal(env.rootElement.children.length, 0);
  const expected = expectedPanelSize(width, height);
  assert.equal(instance.panel.style.width, expected.width);
  assert.equal(instance.panel.style.height, expected.height);
  assert(instance.panel.querySelectorAll("BUTTON").length >= 2, "mouse controls missing");
  assert(instance.stage.children.length >= 14, "western scene should include layered visual polish");
  assert.equal(instance.targetMs, 5000);
  assert.equal(instance.toleranceMs, 100);
  for (const assetPath of Object.values(instance.assetPaths)) {
    const diskPath = path.join(root, ...decodeURIComponent(assetPath).split("/"));
    assert(fs.existsSync(diskPath), `missing western asset: ${assetPath}`);
  }
  instance.destroy({ result: "cancel", reason: "test", score: 0 });
  assert.equal(result.result, "cancel");
  assert.equal(env.body.children.length, 0);
  assert.equal(env.windowListeners.size, 0);
  assert.equal(env.documentListeners.size, 0);
  assert.equal(env.animationFrames.size, 0);
  assert.equal(env.lockCount(), 1);
  assert.equal(env.unlockCount(), 1);
}

function testBullseyeAndExplicitReturn() {
  const env = createEnvironment(416, 416);
  let callbackResult = null;
  const instance = env.game.start({ random: () => 0, toleranceMs: 100 }, (value) => { callbackResult = value; });
  instance.beginDuel(1000);
  const result = instance.stopDuel(6000);
  assert.equal(result.result, "win");
  assert.equal(result.reason, "bullseye");
  assert.equal(result.elapsedMs, 5000);
  assert.equal(result.targetSeconds, 5);
  assert.equal(result.deltaMs, 0);
  assert.equal(env.body.children.length, 1, "result must remain visible until return");
  const resultButtons = instance.footer.querySelectorAll("BUTTON");
  assert.equal(resultButtons.length, 2);
  resultButtons[1].onclick();
  assert.equal(callbackResult.result, "win");
  assert.equal(env.body.children.length, 0);
}

function testEarlyLateAndToleranceJudgment() {
  const earlyEnv = createEnvironment(416, 416);
  const early = earlyEnv.game.start({ random: () => 0, toleranceMs: 100 }, function () {});
  early.beginDuel(0);
  early.stopDuel(4800);
  assert.equal(early.result.result, "lose");
  assert.equal(early.result.reason, "early");
  assert.equal(early.result.deltaMs, -200);
  early.destroy(early.result);

  const lateEnv = createEnvironment(416, 416);
  const late = lateEnv.game.start({ random: () => 0, toleranceMs: 100 }, function () {});
  late.beginDuel(0);
  late.stopDuel(5125);
  assert.equal(late.result.result, "lose");
  assert.equal(late.result.reason, "late");
  assert.equal(late.result.deltaMs, 125);
  late.destroy(late.result);

  const clearEnv = createEnvironment(416, 416);
  const clear = clearEnv.game.start({ random: () => 0, toleranceMs: 100 }, function () {});
  clear.beginDuel(0);
  clear.stopDuel(5099);
  assert.equal(clear.result.result, "win");
  assert.equal(clear.result.reason, "clear");
  assert.equal(clear.result.absoluteErrorMs, 99);
  clear.destroy(clear.result);
}

function testConcealmentAndFiniteTimeout() {
  const env = createEnvironment(416, 416);
  const instance = env.game.start({ random: () => 0, concealAfterMs: 800 }, function () {});
  instance.beginDuel(0);
  instance.updateFrame(700);
  assert.equal(instance.timer.textContent, "0.700");
  instance.updateFrame(801);
  assert.equal(instance.timer.textContent, "?.???");
  instance.updateFrame(8000);
  assert.equal(instance.result.result, "lose");
  assert.equal(instance.result.reason, "timeout");
  instance.destroy(instance.result);
}

function testTargetsAreIntegersFromFiveThroughTenAndRetryRerolls() {
  const rolls = [0, 0.17, 0.34, 0.51, 0.68, 0.999999];
  const targets = [];
  for (const roll of rolls) {
    const env = createEnvironment(416, 416);
    const instance = env.game.start({ random: () => roll }, function () {});
    targets.push(instance.targetSeconds);
    assert(Number.isInteger(instance.targetSeconds));
    assert(instance.targetSeconds >= 5 && instance.targetSeconds <= 10);
    assert.equal(instance.targetMs, instance.targetSeconds * 1000);
    instance.destroy({ result: "cancel", reason: "test", score: 0 });
  }
  assert.deepEqual(targets, [5, 6, 7, 8, 9, 10]);

  const retryEnv = createEnvironment(416, 416);
  const retryRolls = [0, 0.999999];
  const retry = retryEnv.game.start({ random: () => retryRolls.shift() }, function () {});
  assert.equal(retry.targetSeconds, 5);
  retry.resetRound();
  assert.equal(retry.targetSeconds, 10);
  assert.equal(retry.targetMs, 10000);
  retry.destroy({ result: "cancel", reason: "test", score: 0 });
}

testStartsResponsivelyAndUsesCompletePack(416, 416);
testStartsResponsivelyAndUsesCompletePack(208, 416);
testBullseyeAndExplicitReturn();
testEarlyLateAndToleranceJudgment();
testConcealmentAndFiniteTimeout();
testTargetsAreIntegersFromFiveThroughTenAndRetryRerolls();

console.log("Western duel minigame tests passed (5-10 integer targets, assets, responsive, timing, tolerance, timeout, cleanup).");
