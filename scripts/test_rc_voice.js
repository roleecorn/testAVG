"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const jsonPath = path.join(root, "project", "rc-voice-demo.json");
const modulePath = path.join(root, "extensions", "rcVoice.js");
const pluginPath = path.join(root, "project", "plugins.js");
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

if (!Array.isArray(data.members) || !Array.isArray(data.messages)) throw new Error("RC Voice JSON must contain members and messages arrays.");
const members = new Set();
data.members.forEach((member, index) => {
	if (!member || !member.id || !member.name || !member.avatar) throw new Error("Invalid member at index " + index);
	if (members.has(member.id)) throw new Error("Duplicate member id: " + member.id);
	members.add(member.id);
});
data.messages.forEach((message, index) => {
	if (!message || !members.has(message.speaker) || typeof message.content !== "string") throw new Error("Invalid message at index " + index);
});

const moduleSource = fs.readFileSync(modulePath, "utf8");
const pluginSource = fs.readFileSync(pluginPath, "utf8");
[
	"window.MotaRcVoice",
	"function loadJson(path, callback)",
	"function normalizeData(raw)",
	"每位成員必須有 id、name 與 avatar",
	"speaker 不在 members 中",
	"▰▰▰▰▰ 語音區",
	"按住 F2 開始說話",
	"故事展示模式：此區不提供輸入"
].forEach((needle) => {
	if (!moduleSource.includes(needle)) throw new Error("RC Voice module is missing: " + needle);
});
[
	"\"RC_Voice\": function ()",
	"this.openRcVoice = function",
	"this.startRcVoiceStoryEvent = function",
	"this.startAkibaRcVoiceDemo = function",
	"core.plugin.restoreAkibaHeroAfterLocationInteraction",
	"RC Voice 缺少 JSON 資料路徑"
].forEach((needle) => {
	if (!pluginSource.includes(needle)) throw new Error("RC Voice plugin integration is missing: " + needle);
});
if (pluginSource.includes('jsonPath = jsonPath || "project/rc-voice-demo.json"')) {
	throw new Error("RC Voice must not fall back to one fixed JSON path.");
}

console.log("rc voice json and integration surface ok");
