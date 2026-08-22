const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const pluginSource = fs.readFileSync(path.join(root, "project", "plugins.js"), "utf8");
const pluginVar = pluginSource.match(/var\s+(plugins_[A-Za-z0-9_]+)\s*=/)[1];
const pluginDefinitions = Function(`${pluginSource}\nreturn ${pluginVar};`)();
const eventMeta = JSON.parse(fs.readFileSync(path.join(root, "project", "akiba-event-meta.json"), "utf8"));
const locationMappings = JSON.parse(fs.readFileSync(path.join(root, "project", "location-mappings.json"), "utf8"));

function createCore(initialFlags = {}, floorIds = []) {
  const flags = { ...initialFlags };
  const actions = [];
  return {
    flags,
    actions,
    floorIds,
    floors: Object.fromEntries(floorIds.map((id) => [id, {}])),
    status: { floorId: "Akiba", maps: {} },
    utils: { scan2: {} },
    events: {
      setEvents(value) {
        this.value = value;
      },
    },
    getFlag(name, fallback) {
      return Object.prototype.hasOwnProperty.call(flags, name) ? flags[name] : fallback;
    },
    setFlag(name, value) {
      flags[name] = value;
    },
    insertAction(action) {
      actions.push(action);
    },
    doAction() {
      this.doActionCount = (this.doActionCount || 0) + 1;
    },
    getHeroLoc(name) {
      return name === "direction" ? "down" : 0;
    },
  };
}

function createPlugin(initialFlags = {}, extraFloorIds = []) {
  const metaFloorIds = eventMeta.activeEvents.map((event) => event.floorId);
  const core = createCore(initialFlags, ["Akiba", ...metaFloorIds, ...extraFloorIds]);
  const plugin = {};
  global.core = core;
  global.main = { version: "test" };
  pluginDefinitions.locationMappings.call(plugin);
  pluginDefinitions.akibaEventManager.call(plugin);
  pluginDefinitions.Tic_Tac_Toe.call(plugin);
  pluginDefinitions.RC_Voice.call(plugin);
  plugin._akibaEventMeta = eventMeta;
  core.plugin = plugin;
  return { core, plugin };
}

function event(id, floorId = id) {
  return { id, title: id, locations: ["park"], floorId, once: true };
}

function testFreshInitialization() {
  const { core, plugin } = createPlugin();
  plugin.initAkibaEventState();
  assert.equal(core.flags.akiba_event_state_version, eventMeta.version);
  assert.deepEqual(core.flags.akiba_completed_events, []);
  assert.deepEqual(
    core.flags.akiba_active_events.map((entry) => entry.id),
    eventMeta.activeEvents.map((entry) => entry.id),
  );
}

function testVersionMigrationPreservesProgress() {
  const completed = ["huangmo_1", "juju_1"];
  const { core, plugin } = createPlugin({
    akiba_event_state_initialized: true,
    akiba_event_state_version: eventMeta.version - 1,
    akiba_completed_events: completed,
    akiba_active_events: [
      event("huangmo_2"),
      event("juju_2"),
      event("lei_2"),
    ],
  }, ["huangmo_2", "juju_2"]);

  plugin.initAkibaEventState();
  const activeIds = core.flags.akiba_active_events.map((entry) => entry.id);
  assert(activeIds.includes("huangmo_2"));
  assert(activeIds.includes("juju_2"));
  assert(!activeIds.includes("lei_2"));
  assert(!activeIds.includes("huangmo_1"));
  assert(!activeIds.includes("juju_1"));
  for (const initial of eventMeta.activeEvents) {
    if (!completed.includes(initial.id)) assert(activeIds.includes(initial.id));
  }
  assert.deepEqual(core.flags.akiba_completed_events, completed);
}

function testCompletionCountsOnlyOnce() {
  const { core, plugin } = createPlugin({
    akiba_event_state_initialized: true,
    akiba_event_state_version: eventMeta.version,
    akiba_completed_events: [],
    akiba_active_events: [event("noir_1")],
    mainline_exchange_active: true,
    mainline_exchange_count: 0,
    mainline_exchange_target: 2,
  });

  plugin.completeAkibaEvent("noir_1");
  plugin.completeAkibaEvent("noir_1");
  assert.equal(core.flags.mainline_exchange_count, 1);
  assert.deepEqual(core.flags.akiba_completed_events, ["noir_1"]);
}

function testCharacterExchangeDefaultsToTwoEvents() {
  const { core, plugin } = createPlugin({}, ["main_ch2_4_exchange_1"]);

  plugin.beginCharacterExchange({
    floorId: "main_ch2_4_exchange_1",
    loc: [6, 10],
    direction: "up",
  });

  assert.equal(core.flags.mainline_exchange_active, true);
  assert.equal(core.flags.mainline_exchange_count, 0);
  assert.equal(core.flags.mainline_exchange_target, 2);
  assert.deepEqual(core.events.value, []);
  assert.equal(core.actions.at(-1).type, "changeFloor");
  assert.equal(core.actions.at(-1).floorId, "Akiba");
}

function testIdleClockRestoresOrContinues() {
  const { core, plugin } = createPlugin({
    akiba_event_state_initialized: true,
    akiba_event_state_version: eventMeta.version,
    akiba_completed_events: [],
    akiba_active_events: [],
    akiba_restore_floorId: "Akiba",
    akiba_restore_x: 11,
    akiba_restore_y: 12,
    akiba_restore_direction: "left",
    akiba_return_x: 6,
    akiba_return_y: 10,
    mainline_exchange_active: true,
    mainline_exchange_count: 0,
    mainline_exchange_target: 2,
    mainline_exchange_destination: {
      floorId: "main_ch3_1_exchange_1",
      loc: [6, 10],
      direction: "up",
      time: 0,
    },
  }, ["main_ch3_1_exchange_1"]);

  assert.equal(plugin.advanceCharacterExchangeWithIdleClock(), true);
  assert.equal(core.flags.mainline_exchange_count, 1);
  assert.deepEqual(core.actions.at(-1), {
    type: "changePos",
    loc: [11, 12],
    direction: "left",
  });

  core.actions.length = 0;
  assert.equal(plugin.advanceCharacterExchangeWithIdleClock(), true);
  assert.equal(core.flags.mainline_exchange_active, false);
  assert.deepEqual(core.actions.at(-1), [{
    type: "changeFloor",
    floorId: "main_ch3_1_exchange_1",
    loc: [6, 10],
    direction: "up",
    time: 0,
  }]);
}

function testIdleClockDoesNotAdvanceOutsideExchange() {
  const { core, plugin } = createPlugin({
    akiba_restore_floorId: "Akiba",
    akiba_restore_x: 11,
    akiba_restore_y: 12,
    akiba_restore_direction: "left",
    mainline_exchange_active: false,
    mainline_exchange_count: 7,
  });
  assert.equal(plugin.advanceCharacterExchangeWithIdleClock(), false);
  assert.equal(core.flags.mainline_exchange_count, 7);
  assert.equal(core.actions.at(-1).type, "changePos");
}

function testEveryRegularLocationHasMiniGame() {
  const { plugin } = createPlugin();
  const locations = locationMappings.floors.Akiba.locations;
  for (const location of locations) {
    const definitions = plugin.getAkibaMiniGameDefinitions(location.id);
    const definition = plugin.getAkibaMiniGameDefinition(location.id);
    if (location.id === "idle_clock") {
      assert.deepEqual(definitions, []);
      assert.equal(definition, null);
    }
    else {
      assert(definition, `missing minigame for ${location.id}`);
      assert(definitions.length > 0, `missing minigame list for ${location.id}`);
      for (const one of definitions) {
        assert(one.title);
        assert(["akibaLocation", "slot777", "akibaFlapper", "westernDuel", "bookStack", "shootingRange"].includes(one.gameId));
      }
    }
  }
  assert.deepEqual(
    plugin.getAkibaMiniGameDefinitions("game_center").map((definition) => definition.gameId),
    ["slot777", "akibaFlapper"]
  );
  assert.deepEqual(
    plugin.getAkibaMiniGameDefinitions("music_venue").map((definition) => definition.gameId),
    ["akibaLocation", "westernDuel"]
  );
  assert.deepEqual(
    plugin.getAkibaMiniGameDefinitions("warehouse_district").map((definition) => definition.gameId),
    ["akibaLocation"]
  );
  assert.deepEqual(
    plugin.getAkibaMiniGameDefinitions("police_station").map((definition) => definition.gameId),
    ["shootingRange"]
  );
  assert.deepEqual(
    plugin.getAkibaMiniGameDefinitions("horses_knee").map((definition) => definition.gameId),
    ["akibaLocation", "bookStack"]
  );
}

function testLocationChoiceIncludesMiniGameWithoutStoryEvent() {
  const { core, plugin } = createPlugin({
    akiba_event_state_initialized: true,
    akiba_event_state_version: eventMeta.version,
    akiba_completed_events: [],
    akiba_active_events: [],
    akiba_last_locationId: "park",
    akiba_last_placeName: "公園",
  });
  plugin.showAkibaLocationEventChoices();
  const choiceEvent = core.actions.at(-1);
  assert.equal(choiceEvent.type, "choices");
  assert.deepEqual(choiceEvent.choices.map((choice) => choice.text), ["玩「公園清潔隊」", "離開"]);
  assert.equal(choiceEvent.choices[0].action[0].async, true);
}

function testLocationChoiceKeepsStoryEventAndMiniGame() {
  const storyEvent = event("park_story", "park_story");
  const { core, plugin } = createPlugin({
    akiba_event_state_initialized: true,
    akiba_event_state_version: eventMeta.version,
    akiba_completed_events: [],
    akiba_active_events: [storyEvent],
    akiba_last_locationId: "park",
    akiba_last_placeName: "公園",
  }, ["park_story"]);
  plugin.showAkibaLocationEventChoices();
  const choiceEvent = core.actions.at(-1);
  assert.deepEqual(choiceEvent.choices.map((choice) => choice.text), ["park_story", "玩「公園清潔隊」", "離開"]);
}

function testRabbitHouseOffersRcVoiceTest() {
  const { core, plugin } = createPlugin({
    akiba_event_state_initialized: true,
    akiba_event_state_version: eventMeta.version,
    akiba_completed_events: [],
    akiba_active_events: [],
    akiba_last_locationId: "rabbit_house",
    akiba_last_placeName: "炭烤蜜瓜兔子",
  });
  plugin.showAkibaLocationEventChoices();
  const choiceEvent = core.actions.at(-1);
  assert.deepEqual(choiceEvent.choices.map((choice) => choice.text), [
    "玩「炭火烤蜜瓜麵包」",
    "測試「RC Voice 展示」",
    "離開",
  ]);
  assert.equal(choiceEvent.choices[1].action[0].async, true);
  assert(choiceEvent.choices[1].action[0].function.includes("startAkibaRcVoiceDemo('project/rc-voice-demo.json')"));
}

function testRabbitHouseRcVoiceReturnsToInteractionOrigin() {
  const { core, plugin } = createPlugin();
  let openedPath = null;
  plugin.openRcVoice = (jsonPath, options, callback) => {
    openedPath = jsonPath;
    assert.deepEqual(options, {});
    callback({ result: "close", reason: "button" });
    return true;
  };

  plugin.startAkibaRcVoiceDemo("project/rc-voice-demo.json");
  assert.equal(openedPath, "project/rc-voice-demo.json");
  assert.equal(core.doActionCount, 1);
  assert.equal(core.actions.at(-1).type, "function");
  assert(core.actions.at(-1).function.includes("restoreAkibaHeroAfterLocationInteraction"));
}

function testStoryRcVoiceUsesCallerProvidedJsonPath() {
  const { core, plugin } = createPlugin();
  let openedPath = null;
  plugin.openRcVoice = (jsonPath, options, callback) => {
    openedPath = jsonPath;
    assert.deepEqual(options, {});
    callback({ result: "close", reason: "button" });
    return true;
  };

  assert.equal(plugin.startRcVoiceStoryEvent("project/rc-voice/noir-briefing.json"), true);
  assert.equal(openedPath, "project/rc-voice/noir-briefing.json");
  assert.equal(core.actions.at(-1).type, "update");
  assert.equal(core.doActionCount, 1);
}

function testGameCenterOffersBothArcadeGames() {
  const { core, plugin } = createPlugin({
    akiba_event_state_initialized: true,
    akiba_event_state_version: eventMeta.version,
    akiba_completed_events: [],
    akiba_active_events: [],
    akiba_last_locationId: "game_center",
    akiba_last_placeName: "電子遊樂場",
  });
  plugin.showAkibaLocationEventChoices();
  const choiceEvent = core.actions.at(-1);
  assert.deepEqual(choiceEvent.choices.map((choice) => choice.text), ["玩「777 拉霸」", "玩「電波飛鳥」", "離開"]);
  assert(choiceEvent.choices[1].action[0].function.includes("akibaFlapper"));
}

function testMusicVenueOffersStageTimingAndWesternDuel() {
  const { core, plugin } = createPlugin({
    akiba_event_state_initialized: true,
    akiba_event_state_version: eventMeta.version,
    akiba_completed_events: [],
    akiba_active_events: [],
    akiba_last_locationId: "music_venue",
    akiba_last_placeName: "劇場",
  });
  plugin.showAkibaLocationEventChoices();
  const choiceEvent = core.actions.at(-1);
  assert.deepEqual(choiceEvent.choices.map((choice) => choice.text), ["玩「舞台打拍」", "玩「正午對決」", "離開"]);
  assert(choiceEvent.choices[1].action[0].function.includes("westernDuel"));
}

function testWarehouseDistrictOffersPacking() {
  const { core, plugin } = createPlugin({
    akiba_event_state_initialized: true,
    akiba_event_state_version: eventMeta.version,
    akiba_completed_events: [],
    akiba_active_events: [],
    akiba_last_locationId: "warehouse_district",
    akiba_last_placeName: "倉庫區",
  });
  plugin.showAkibaLocationEventChoices();
  const choiceEvent = core.actions.at(-1);
  assert.deepEqual(choiceEvent.choices.map((choice) => choice.text), ["玩「倉庫裝箱」", "離開"]);
}

function testHorsesKneeOffersBookGames() {
  for (const [locationId, placeName, originalTitle] of [["horses_knee", "馬的膝蓋", "漫畫連號排架"]]) {
    const { core, plugin } = createPlugin({
      akiba_event_state_initialized: true,
      akiba_event_state_version: eventMeta.version,
      akiba_completed_events: [],
      akiba_active_events: [],
      akiba_last_locationId: locationId,
      akiba_last_placeName: placeName,
    });
    plugin.showAkibaLocationEventChoices();
    const choiceEvent = core.actions.at(-1);
    assert.deepEqual(choiceEvent.choices.map((choice) => choice.text), [
      `玩「${originalTitle}」`,
      "玩「疊書挑戰」",
      "離開",
    ]);
    assert(choiceEvent.choices[1].action[0].function.includes("bookStack"));
  }
}

function testMiniGameResultUsesSeparateProgressFlags() {
  const { core, plugin } = createPlugin();
  let launches = 0;
  plugin.startMiniGame = (gameId, options, callback) => {
    launches++;
    assert.equal(gameId, "akibaLocation");
    assert.equal(options.locationId, "park");
    callback({ result: "win", reason: "clear", score: launches === 1 ? 320 : 200 });
    return true;
  };

  assert.equal(plugin.startAkibaLocationMiniGame("park"), true);
  assert.equal(plugin.startAkibaLocationMiniGame("park"), true);
  assert.deepEqual(core.flags.akiba_minigame_cleared, ["park"]);
  assert.deepEqual(core.flags.akiba_minigame_best_scores, { park: 320 });
  assert.equal(core.flags.akiba_last_minigame_location_id, "park");
  assert.equal(core.flags.akiba_last_minigame_game_id, "akibaLocation");
  assert.equal(core.flags.lastMiniGameResult, "win");
  assert.equal(core.flags.lastMiniGameScore, 200);
  assert.equal(core.doActionCount, 2);
  assert.equal(core.flags.akiba_completed_events, undefined, "minigames must not alter story completion");
}

function testSecondGameAtSameLocationUsesSeparateProgressKey() {
  const { core, plugin } = createPlugin();
  plugin.startMiniGame = (gameId, options, callback) => {
    assert.equal(gameId, "akibaFlapper");
    assert.equal(options.locationId, "game_center");
    assert.equal(options.targetGates, 8);
    callback({ result: "win", reason: "clear", score: 888 });
    return true;
  };

  assert.equal(plugin.startAkibaLocationMiniGame("game_center", "akibaFlapper"), true);
  assert.deepEqual(core.flags.akiba_minigame_cleared, ["game_center:akibaFlapper"]);
  assert.deepEqual(core.flags.akiba_minigame_best_scores, { "game_center:akibaFlapper": 888 });
  assert.equal(core.flags.akiba_last_minigame_location_id, "game_center");
  assert.equal(core.flags.akiba_last_minigame_game_id, "akibaFlapper");
  assert.equal(core.flags.akiba_last_minigame_title, "電波飛鳥");
}

function testWesternDuelUsesTheatreProgressKeyAndOptions() {
  const { core, plugin } = createPlugin();
  plugin.startMiniGame = (gameId, options, callback) => {
    assert.equal(gameId, "westernDuel");
    assert.equal(options.locationId, "music_venue");
    assert.equal(options.targetSeconds, undefined);
    assert.equal(options.toleranceMs, 100);
    assert.equal(options.concealAfterMs, 800);
    callback({ result: "win", reason: "clear", score: 1998, deltaMs: 1 });
    return true;
  };

  assert.equal(plugin.startAkibaLocationMiniGame("music_venue", "westernDuel"), true);
  assert.deepEqual(core.flags.akiba_minigame_cleared, ["music_venue:westernDuel"]);
  assert.deepEqual(core.flags.akiba_minigame_best_scores, { "music_venue:westernDuel": 1998 });
  assert.equal(core.flags.akiba_last_minigame_game_id, "westernDuel");
  assert.equal(core.flags.akiba_last_minigame_title, "正午對決");
}

function testBookStackUsesHorsesKneeProgressKeyAndOptions() {
  for (const locationId of ["horses_knee"]) {
    const { core, plugin } = createPlugin();
    plugin.startMiniGame = (gameId, options, callback) => {
      assert.equal(gameId, "bookStack");
      assert.equal(options.locationId, locationId);
      assert.equal(options.minClearBooks, 8);
      assert.equal(options.seconds, 90);
      callback({ result: "win", reason: "imbalance", score: 1234, books: 9 });
      return true;
    };

    assert.equal(plugin.startAkibaLocationMiniGame(locationId, "bookStack"), true);
    assert.deepEqual(core.flags.akiba_minigame_cleared, [`${locationId}:bookStack`]);
    assert.deepEqual(core.flags.akiba_minigame_best_scores, { [`${locationId}:bookStack`]: 1234 });
    assert.equal(core.flags.akiba_last_minigame_game_id, "bookStack");
    assert.equal(core.flags.akiba_last_minigame_title, "疊書挑戰");
  }
}

function testPoliceStationOffersShootingRange() {
  const { core, plugin } = createPlugin();
  const definition = plugin.getAkibaMiniGameDefinition("police_station", "shootingRange");
  assert.equal(definition.title, "七靶射擊訓練");
  assert.equal(definition.progressKey, "police_station:shootingRange");
  assert.deepEqual(definition.options, {
    targetVisibleMs: 1200,
    shotCooldownMs: 450,
    interTargetDelayMs: 520,
    requiredHits: 7,
  });

  plugin.startMiniGame = (gameId, options, callback) => {
    assert.equal(gameId, "shootingRange");
    assert.equal(options.locationId, "police_station");
    assert.equal(options.targetVisibleMs, 1200);
    assert.equal(options.shotCooldownMs, 450);
    callback({ result: "win", reason: "clear", score: 1350, hits: 7, totalTargets: 7 });
    return true;
  };

  assert.equal(plugin.startAkibaLocationMiniGame("police_station", "shootingRange"), true);
  assert.deepEqual(core.flags.akiba_minigame_cleared, ["police_station:shootingRange"]);
  assert.deepEqual(core.flags.akiba_minigame_best_scores, { "police_station:shootingRange": 1350 });
  assert.equal(core.flags.akiba_last_minigame_game_id, "shootingRange");
  assert.equal(core.flags.akiba_last_minigame_title, "七靶射擊訓練");
}

testFreshInitialization();
testVersionMigrationPreservesProgress();
testCompletionCountsOnlyOnce();
testCharacterExchangeDefaultsToTwoEvents();
testIdleClockRestoresOrContinues();
testIdleClockDoesNotAdvanceOutsideExchange();
testEveryRegularLocationHasMiniGame();
testLocationChoiceIncludesMiniGameWithoutStoryEvent();
testLocationChoiceKeepsStoryEventAndMiniGame();
testRabbitHouseOffersRcVoiceTest();
testRabbitHouseRcVoiceReturnsToInteractionOrigin();
testStoryRcVoiceUsesCallerProvidedJsonPath();
testGameCenterOffersBothArcadeGames();
testMusicVenueOffersStageTimingAndWesternDuel();
testWarehouseDistrictOffersPacking();
testHorsesKneeOffersBookGames();
testMiniGameResultUsesSeparateProgressFlags();
testSecondGameAtSameLocationUsesSeparateProgressKey();
testWesternDuelUsesTheatreProgressKeyAndOptions();
testBookStackUsesHorsesKneeProgressKeyAndOptions();
testPoliceStationOffersShootingRange();

delete global.core;
delete global.main;
console.log("Akiba event manager tests passed.");
