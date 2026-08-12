const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "extensions", "minigames", "bookStack.js"), "utf8");

function fakeContext2d() {
  const context = {};
  for (const method of [
    "clearRect", "fillRect", "beginPath", "moveTo", "lineTo", "stroke", "fill", "save", "restore",
    "translate", "rotate", "fillText", "setLineDash", "strokeRect",
  ]) {
    context[method] = function () {};
  }
  return context;
}

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
    this.width = width;
    this.height = height;
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

  getContext() {
    return fakeContext2d();
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
  let lockCount = 0;
  let unlockCount = 0;

  const stableMath = Object.create(Math);
  stableMath.random = () => 0.5;
  const context = {
    window: {
      MotaMiniGames: {},
      innerWidth: width,
      innerHeight: height,
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
    Math: stableMath,
    Date,
  };
  vm.runInNewContext(source, context, { filename: "bookStack.js" });
  return {
    game: context.window.MotaMiniGames.bookStack,
    rootElement,
    body,
    windowListeners,
    documentListeners,
    animationFrames,
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

function centerMovingBook(instance) {
  const support = instance.getSupport();
  instance.movingBook.x = support.x + support.width / 2 - instance.movingBook.width / 2;
}

function stackCenteredBooks(instance, count) {
  for (let i = 0; i < count; i++) {
    centerMovingBook(instance);
    instance.dropBook();
    assert.equal(instance.placedBooks.length, i + 1);
    assert.equal(instance.collapsing, false);
  }
}

function testStartsResponsivelyAndCleansUp(width, height) {
  const env = createEnvironment(width, height);
  let result = null;
  const instance = env.game.start({ minClearBooks: 8, seconds: 90 }, (value) => { result = value; });
  assert.equal(env.body.children.length, 1);
  assert.equal(env.rootElement.children.length, 0);
  const expected = expectedPanelSize(width, height);
  assert.equal(instance.panel.style.width, expected.width);
  assert.equal(instance.panel.style.height, expected.height);
  assert(instance.panel.querySelectorAll("BUTTON").length >= 2, "pointer controls missing");
  assert.equal(instance.canvas.listeners.size, 1, "canvas pointer listener missing");
  assert.equal(env.animationFrames.size, 1, "animation frame missing");
  instance.destroy({ result: "cancel", reason: "test", score: 0 });
  assert.equal(result.result, "cancel");
  assert.equal(env.body.children.length, 0);
  assert.equal(env.windowListeners.size, 0);
  assert.equal(env.documentListeners.size, 0);
  assert.equal(instance.canvas.listeners.size, 0);
  assert.equal(env.animationFrames.size, 0);
  assert.equal(env.lockCount(), 1);
  assert.equal(env.unlockCount(), 1);
}

function testBooksAlternateSidesAndStackHigher() {
  const env = createEnvironment(416, 416);
  const instance = env.game.start({}, function () {});
  const firstDirection = instance.movingBook.direction;
  assert.equal(Object.prototype.hasOwnProperty.call(instance.movingBook, "label"), false, "books should not use numeric cover labels");
  centerMovingBook(instance);
  const firstY = instance.movingBook.y;
  instance.dropBook();
  assert.equal(instance.movingBook.direction, -firstDirection);
  assert(instance.movingBook.y < firstY, "next book should be higher");
  centerMovingBook(instance);
  instance.dropBook();
  assert(instance.wobbleStrength > 0, "stack height should introduce wobble");
  instance.destroy({ result: "cancel", reason: "test", score: instance.score });
}

function testMissTopplesAndLosesBelowThreshold() {
  const env = createEnvironment(416, 416);
  let result = null;
  const instance = env.game.start({ minClearBooks: 3 }, (value) => { result = value; });
  stackCenteredBooks(instance, 1);
  instance.movingBook.x = -instance.movingBook.width - 20;
  instance.dropBook();
  assert.equal(instance.collapsing, true);
  assert.equal(instance.collapseReason, "miss");
  instance.step(1.2);
  assert.equal(instance.result.result, "lose");
  assert.equal(instance.result.books, 1);
  instance.footer.querySelectorAll("BUTTON")[1].onclick();
  assert.equal(result.result, "lose");
}

function testClearThresholdStillEndsWithCollapse() {
  const env = createEnvironment(416, 416);
  let result = null;
  const instance = env.game.start({ minClearBooks: 3 }, (value) => { result = value; });
  stackCenteredBooks(instance, 3);
  instance.beginCollapse("imbalance", 1);
  instance.step(1.2);
  assert.equal(instance.result.result, "win");
  assert.equal(instance.result.books, 3);
  assert.equal(env.body.children.length, 1, "result must remain until return");
  instance.footer.querySelectorAll("BUTTON")[1].onclick();
  assert.equal(result.result, "win");
  assert.equal(env.body.children.length, 0);
}

function testSevereOffsetTriggersImbalance() {
  const env = createEnvironment(416, 416);
  const instance = env.game.start({ minClearBooks: 8 }, function () {});
  stackCenteredBooks(instance, 1);
  const support = instance.getSupport();
  instance.movingBook.x = support.x + support.width - instance.movingBook.width * 0.17;
  instance.dropBook();
  assert.equal(instance.collapsing, true);
  assert.equal(instance.collapseReason, "imbalance");
  instance.destroy({ result: "cancel", reason: "test", score: instance.score });
}

function testTimeoutIsFiniteAndRetryDoesNotDuplicateListeners() {
  const env = createEnvironment(416, 416);
  const instance = env.game.start({ seconds: 15 }, function () {});
  instance.elapsedMs = 15000;
  instance.step(0);
  assert.equal(instance.collapsing, true);
  assert.equal(instance.collapseReason, "timeout");
  instance.step(1.2);
  assert.equal(instance.result.result, "lose");
  instance.footer.querySelectorAll("BUTTON")[0].onclick();
  assert.equal(instance.ended, false);
  assert.equal(instance.placedBooks.length, 0);
  assert.equal(env.windowListeners.size, 1);
  assert.equal(env.documentListeners.size, 1);
  instance.destroy({ result: "cancel", reason: "test", score: 0 });
}

testStartsResponsivelyAndCleansUp(416, 416);
testStartsResponsivelyAndCleansUp(208, 416);
testBooksAlternateSidesAndStackHigher();
testMissTopplesAndLosesBelowThreshold();
testClearThresholdStillEndsWithCollapse();
testSevereOffsetTriggersImbalance();
testTimeoutIsFiniteAndRetryDoesNotDuplicateListeners();

console.log("Book stack minigame tests passed (responsive, alternating motion, stacking, wobble, collapse, threshold, timeout, retry, cleanup).");
