const assert = require("assert/strict");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "libs", "events.js"), "utf8");
const actionsSource = fs.readFileSync(path.join(root, "libs", "actions.js"), "utf8");
const mainSource = fs.readFileSync(path.join(root, "main.js"), "utf8");
const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");

function trackedStyle(initialTransform = "") {
  const history = [];
  const target = {
    transform: initialTransform,
    webkitTransform: initialTransform,
    OTransform: initialTransform,
    MozTransform: initialTransform,
  };
  return {
    history,
    style: new Proxy(target, {
      set(object, key, value) {
        if (key === "transform") history.push(value);
        object[key] = value;
        return true;
      },
    }),
  };
}

async function main() {
  const background = trackedStyle("scale(1)");
  const portrait = trackedStyle();
  const ui = trackedStyle();
  const fixedTranslations = [];
  const sandbox = {
    console,
    clearInterval,
    setInterval,
    core: {
      addGameCanvasTranslate(x, y) {
        fixedTranslations.push([x, y]);
      },
      animateFrame: { asyncId: {} },
      domStyle: { scale: 2 },
      dymCanvas: {
        image5: { canvas: { style: background.style } },
        image20: { canvas: { style: portrait.style } },
        uievent: { canvas: { style: ui.style } },
      },
      isReplaying() {
        return false;
      },
    },
  };

  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: "libs/events.js" });
  sandbox.core.events = {
    _vibrate_update: sandbox.events.prototype._vibrate_update,
  };

  let callbackCount = 0;
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("avgShake did not finish")), 1000);
    sandbox.events.prototype.avgShake("horizontal", 30, 60, 4, () => {
      callbackCount += 1;
      clearTimeout(timeout);
      resolve();
    });
  });

  assert.equal(callbackCount, 1);
  assert.ok(fixedTranslations.some(([x, y]) => x !== 0 || y !== 0));
  assert.deepEqual(fixedTranslations.at(-1), [0, 0]);
  assert.ok(background.history.some((value) => value.startsWith("translate(")));
  assert.ok(portrait.history.some((value) => value.startsWith("translate(")));
  assert.equal(background.style.transform, "scale(1)");
  assert.equal(portrait.style.transform, "");
  assert.deepEqual(ui.history, []);

  const slideImages = [];
  const slideOpacities = [];
  const slideCanvases = {};
  let maxSlideCanvasCount = 0;
  let slideActionCount = 0;
  let slideCurrentTime = 0;
  const slideAudio = { currentTime: 0, duration: 2, ended: false, loop: true };
  const slideSandbox = {
    console,
    clearInterval,
    setInterval,
    window: { clearInterval, setInterval },
    core: {
      _PX_: 544,
      _PY_: 416,
      musicStatus: { playingBgm: "BGMED2.mp3" },
      material: {
        bgms: { "BGMED2.mp3": slideAudio },
        images: { images: { "ED2001.png": {}, "ED2002.png": {}, "ED2003.png": {}, "ED2004.png": {} } },
      },
      dymCanvas: slideCanvases,
      getMappedName(name) { return name; },
      getContextByName(name) { return slideCanvases[name] ? slideCanvases[name].ctx : null; },
      showImage(code, image, sloc, loc, opacity) {
        const name = "image" + (code + 100);
        slideImages.push({ image, time: slideAudio.currentTime });
        const style = { opacity };
        const ctx = { canvas: { style } };
        slideCanvases[name] = { ctx, canvas: ctx.canvas };
        maxSlideCanvasCount = Math.max(maxSlideCanvasCount, Object.keys(slideCanvases).length);
      },
      setOpacity(name, opacity) {
        if (slideCanvases[name]) {
          slideCanvases[name].ctx.canvas.style.opacity = opacity;
          slideOpacities.push([name, opacity]);
        }
      },
      deleteCanvas(name) { delete slideCanvases[name]; },
      status: { event: {} },
      doAction() { slideActionCount += 1; },
    },
  };
  vm.createContext(slideSandbox);
  vm.runInContext(source, slideSandbox, { filename: "libs/events.js" });
  const advanceAudio = setInterval(() => {
    slideCurrentTime += 0.01;
    slideAudio.currentTime = slideCurrentTime;
    if (slideCurrentTime >= slideAudio.duration) slideAudio.ended = true;
  }, 10);
  slideSandbox.events.prototype._action_endingSlideshow.call({}, {
    code: 2,
    images: ["ED2001.png", "ED2002.png", "ED2003.png", "ED2004.png"],
    width: 544,
    height: 416,
    transition: 100,
  });
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("endingSlideshow did not finish")), 4000);
    const check = setInterval(() => {
      if (slideActionCount === 1) {
        clearTimeout(timeout);
        clearInterval(check);
        resolve();
      }
    }, 10);
  });
  clearInterval(advanceAudio);
  assert.deepEqual(slideImages.map(({ image }) => image), ["ED2001.png", "ED2002.png", "ED2003.png", "ED2004.png"]);
  assert.equal(maxSlideCanvasCount, 1);
  assert.ok(slideOpacities.some(([, opacity]) => opacity > 0 && opacity < 1));
  assert.equal(slideAudio.loop, false);

  const actionSandbox = {
    console,
    core: {
      status: {
        lockControl: true,
        blockCtrlSkip: true,
        event: { id: "action", data: { type: "text" } },
      },
    },
  };
  vm.createContext(actionSandbox);
  vm.runInContext(actionsSource, actionSandbox, { filename: "libs/actions.js" });
  let ctrlSkipCalls = 0;
  const blockedKeyDown = actionSandbox.actions.prototype._sys_keyDown_lockControl.call({
    keyDownCtrl() { ctrlSkipCalls += 1; },
  }, 17);
  const blockedDirectCtrl = actionSandbox.actions.prototype._sys_keyDownCtrl.call({});
  assert.equal(blockedKeyDown, true);
  assert.equal(blockedDirectCtrl, true);
  assert.equal(ctrlSkipCalls, 0);

  const titleAttributes = {};
  let titleActionCount = 0;
  let titleAutoStopped = 0;
  const titleSandbox = {
    console,
    main: {
      styles: { startBackground: "project/images/bg.jpg", startVerticalBackground: "project/images/bg.jpg" },
      dom: {
        startBackground: {
          setAttribute(name, value) { titleAttributes[name] = value; },
          src: "",
        },
      },
    },
    core: {
      getMappedName(name) { return name; },
      control: { stopDialogueAuto() { titleAutoStopped += 1; } },
      doAction() { titleActionCount += 1; },
    },
  };
  vm.createContext(titleSandbox);
  vm.runInContext(source, titleSandbox, { filename: "libs/events.js" });
  titleSandbox.events.prototype._action_setTitleBackground.call({}, { image: "OP2.png" });
  assert.equal(titleSandbox.main.styles.startBackground, "project/images/OP2.png");
  assert.equal(titleSandbox.main.styles.startVerticalBackground, "project/images/OP2.png");
  assert.equal(titleAttributes.__src__, "project/images/OP2.png");
  assert.equal(titleSandbox.main.dom.startBackground.src, "project/images/OP2.png");
  assert.equal(titleAutoStopped, 1);
  assert.equal(titleActionCount, 1);

  const startTarget = {};
  let startCallbackCount = 0;
  const startSandbox = {
    console,
    main: { mode: "play", isCompetition: false },
    core: {
      firstData: {
        floorId: "mapo_1_1",
        hero: { loc: { direction: "up", x: 6, y: 10 } },
        name: "mapo_tofu",
        version: "Ver 2.10.3",
      },
      ui: { closePanel() {} },
      changeFloor(floorId, stair, heroLoc, time, callback) {
        startTarget.floorId = floorId;
        startTarget.heroLoc = heroLoc;
        callback();
      },
      insertAction() {},
    },
  };
  vm.createContext(startSandbox);
  vm.runInContext(source, startSandbox, { filename: "libs/events.js" });
  startSandbox.events.prototype._startGame_afterStart.call({
    _startGame_upload() {},
  }, () => {
    startCallbackCount += 1;
  }, {
    floorId: "main_ch8_bonus",
    heroLoc: { direction: "up", x: 6, y: 10 },
  });
  assert.equal(startTarget.floorId, "main_ch8_bonus");
  assert.deepEqual(startTarget.heroLoc, { direction: "up", x: 6, y: 10 });
  assert.equal(startCallbackCount, 1);

  assert.match(indexSource, /id='bonusGame'/);
  assert.match(indexSource, /main\.js\?v=2\.10\.3-mapo16/);
  assert.match(mainSource, /this\.version = '2\.10\.3-mapo16'/);
  assert.match(mainSource, /getLocalStorage\('main_ch8_bonus_unlocked', false\)/);
  assert.match(mainSource, /main\.core\.init\(coreData, function \(\) \{\s*main\.refreshBonusStartButton\(\)/);
  assert.doesNotMatch(mainSource, /bonusGame\.onclick[\s\S]{0,120}if \(!main\.refreshBonusStartButton\(\)\) return/);
  assert.match(mainSource, /floorId: 'main_ch8_bonus'/);

  console.log("AVG effect runtime tests passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
