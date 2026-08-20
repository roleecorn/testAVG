(function () {
	"use strict";

	var currentView = null;
	var dataCache = {};

	function css(items) {
		return items.join(";");
	}

	function resolveAsset(path) {
		if (!path) return "";
		if (/^(https?:)?\/\//.test(path) || path.indexOf("data:") === 0 || path.indexOf("/") >= 0) return path;
		return "project/images/" + path;
	}

	function loadJson(path, callback) {
		if (dataCache[path]) {
			callback(null, dataCache[path]);
			return;
		}
		var xhr = new XMLHttpRequest();
		xhr.open("GET", path + (path.indexOf("?") >= 0 ? "&" : "?") + "v=" + Date.now(), true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;
			if (xhr.status < 200 || xhr.status >= 300) {
				callback(new Error("rc voice json load failed: " + xhr.status));
				return;
			}
			try {
				var data = JSON.parse(xhr.responseText);
				dataCache[path] = data;
				callback(null, data);
			} catch (error) {
				callback(error);
			}
		};
		xhr.onerror = function () {
			callback(new Error("rc voice json load failed"));
		};
		xhr.send();
	}

	function normalizeData(raw) {
		if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw new Error("資料根節點必須是物件。");
		if (!Array.isArray(raw.members)) throw new Error("缺少 members 成員清單。");
		if (!Array.isArray(raw.messages)) throw new Error("缺少 messages 發言清單。");
		if (!raw.members.length) throw new Error("members 至少要有一位成員。");

		var members = [];
		var membersById = {};
		raw.members.forEach(function (member, index) {
			if (!member || typeof member !== "object") throw new Error("members[" + index + "] 格式錯誤。");
			var id = String(member.id || "").trim();
			var name = String(member.name || "").trim();
			var avatar = String(member.avatar || "").trim();
			if (!id || !name || !avatar) throw new Error("每位成員必須有 id、name 與 avatar。");
			if (membersById[id]) throw new Error("成員 id 重複：" + id);
			var normalized = {
				id: id,
				name: name,
				avatar: avatar,
				accent: String(member.accent || "#5865f2"),
				status: String(member.status || "在線")
			};
			members.push(normalized);
			membersById[id] = normalized;
		});

		var messages = raw.messages.map(function (message, index) {
			if (!message || typeof message !== "object") throw new Error("messages[" + index + "] 格式錯誤。");
			var speaker = String(message.speaker || "").trim();
			if (!membersById[speaker]) throw new Error("messages[" + index + "] 的 speaker 不在 members 中：" + speaker);
			if (typeof message.content !== "string") throw new Error("messages[" + index + "] 缺少 content 文字。");
			return {
				speaker: speaker,
				content: message.content,
				timestamp: message.timestamp == null ? "" : String(message.timestamp)
			};
		});

		return {
			title: String(raw.title || "RC Voice"),
			roomName: String(raw.roomName || raw.channel || "故事語音頻道"),
			topic: String(raw.topic || ""),
			members: members,
			membersById: membersById,
			messages: messages
		};
	}

	function RcVoiceView(path, options, callback) {
		this.path = path;
		this.options = options || {};
		this.callback = callback || function () {};
		this.overlay = null;
		this.keyHandler = null;
		this.lockedBeforeStart = false;
		this.destroyed = false;
	}

	RcVoiceView.prototype.start = function () {
		var self = this;
		this.lockedBeforeStart = !!(core.status && core.status.lockControl);
		core.lockControl();
		loadJson(this.path, function (error, raw) {
			if (self.destroyed) return;
			if (error) {
				self.createError("無法讀取 JSON：" + error.message);
				return;
			}
			try {
				self.data = normalizeData(raw);
				self.createInterface();
			} catch (validationError) {
				self.createError("JSON 資料無效：" + validationError.message);
			}
		});
	};

	RcVoiceView.prototype.createShell = function () {
		var overlay = document.createElement("div");
		overlay.id = "motaRcVoice";
		overlay.setAttribute("role", "dialog");
		overlay.setAttribute("aria-label", "RC Voice story display");
		overlay.style.cssText = css([
			"position:fixed", "inset:0", "z-index:230", "box-sizing:border-box", "padding:clamp(8px,2vw,24px)",
			"display:flex", "align-items:center", "justify-content:center", "overflow:hidden",
			"background:rgba(5,8,16,0.88)", "font-family:Arial,'Microsoft JhengHei','Microsoft YaHei',sans-serif",
			"color:#f2f3f5", "pointer-events:auto", "user-select:none", "touch-action:manipulation",
			"-webkit-tap-highlight-color:transparent"
		]);
		this.overlay = overlay;
		document.body.appendChild(overlay);
		return overlay;
	};

	RcVoiceView.prototype.makeButton = function (label, background) {
		var button = document.createElement("button");
		button.type = "button";
		button.textContent = label;
		button.style.cssText = css([
			"min-height:38px", "padding:7px 13px", "border:0", "border-radius:6px", "background:" + background,
			"color:#fff", "font-size:14px", "font-weight:700", "cursor:pointer", "touch-action:manipulation"
		]);
		return button;
	};

	RcVoiceView.prototype.createError = function (message) {
		var self = this;
		var overlay = this.createShell();
		var panel = document.createElement("section");
		panel.style.cssText = css([
			"width:min(460px,100%)", "padding:24px", "border:1px solid rgba(255,255,255,0.12)",
			"border-radius:10px", "background:#1e1f22", "box-shadow:0 18px 54px rgba(0,0,0,0.4)", "box-sizing:border-box"
		]);
		var title = document.createElement("h2");
		title.textContent = "RC Voice 無法顯示";
		title.style.cssText = "margin:0 0 10px;font-size:19px";
		var text = document.createElement("p");
		text.textContent = message;
		text.style.cssText = "margin:0 0 18px;color:#c8cbd1;line-height:1.6;white-space:pre-wrap;word-break:break-word";
		var close = this.makeButton("關閉", "#5865f2");
		close.onclick = function () { self.destroy({ result: "error", reason: "invalidData" }); };
		panel.appendChild(title);
		panel.appendChild(text);
		panel.appendChild(close);
		overlay.appendChild(panel);
		this.bindCloseKey();
	};

	RcVoiceView.prototype.createAvatar = function (member, size, square) {
		var image = document.createElement("img");
		image.src = resolveAsset(member.avatar);
		image.alt = member.name + " 的頭像";
		image.style.cssText = css([
			"width:" + size + "px", "height:" + size + "px", "border-radius:" + (square ? "2px" : "50%"), "object-fit:cover", "object-position:center top",
			"background:" + member.accent, "border:1px solid #71a5ca", "box-sizing:border-box", "flex:0 0 auto"
		]);
		return image;
	};

	RcVoiceView.prototype.createInterface = function () {
		var self = this;
		var data = this.data;
		var overlay = this.createShell();
		var app = document.createElement("section");
		app.style.cssText = css([
			"width:min(1040px,100%)", "height:min(690px,100%)", "min-height:0", "display:grid",
			"grid-template-columns:270px minmax(0,1fr)", "grid-template-rows:38px 30px minmax(0,1fr) 86px",
			"overflow:hidden", "border:1px solid #4a95c9", "border-radius:5px", "background:#eef7ff",
			"box-shadow:0 18px 54px rgba(0,37,72,0.56)", "color:#16374c", "font-family:Arial,'Microsoft JhengHei','Microsoft YaHei',sans-serif"
		]);

		var titlebar = document.createElement("header");
		titlebar.style.cssText = css([
			"grid-column:1 / -1", "display:flex", "align-items:stretch", "overflow:hidden", "color:#113c5a",
			"background:linear-gradient(#c8edff 0%,#8bc9f0 52%,#66b2e2 53%,#a7dcf8 100%)", "border-bottom:1px solid #438fc5"
		]);
		var brand = document.createElement("div");
		brand.textContent = "◔ " + data.title;
		brand.style.cssText = "display:flex;align-items:center;padding:0 12px;font-size:16px;font-weight:900;text-shadow:0 1px #fff;white-space:nowrap;border-right:1px solid rgba(41,121,177,0.38)";
		titlebar.appendChild(brand);
		["語音群", "好友"].forEach(function (tabName, index) {
			var tab = document.createElement("div");
			tab.textContent = tabName;
			tab.style.cssText = css([
				"display:flex", "align-items:center", "padding:0 24px", "font-size:13px", "font-weight:700", "white-space:nowrap",
				"border-right:1px solid rgba(41,121,177,0.32)", "background:" + (index === 0 ? "rgba(255,255,255,0.38)" : "transparent")
			]);
			titlebar.appendChild(tab);
		});
		var roomTab = document.createElement("div");
		roomTab.textContent = "▣ " + data.roomName;
		roomTab.style.cssText = "display:flex;align-items:center;min-width:0;max-width:260px;padding:0 12px;font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:rgba(255,255,255,0.52);border-right:1px solid rgba(41,121,177,0.32)";
		titlebar.appendChild(roomTab);
		var windowTools = document.createElement("div");
		windowTools.style.cssText = "display:flex;align-items:center;justify-content:flex-end;gap:9px;flex:1;padding:0 11px;font-size:12px;color:#1c5780";
		["✉", "▣", "⚙"].forEach(function (icon) {
			var tool = document.createElement("span");
			tool.textContent = icon;
			tool.style.cssText = "font-size:14px";
			windowTools.appendChild(tool);
		});
		var close = document.createElement("button");
		close.type = "button";
		close.textContent = "×";
		close.title = "離開展示頁";
		close.style.cssText = "width:24px;height:21px;padding:0;border:1px solid #4d91bd;border-radius:3px;background:linear-gradient(#e6f7ff,#9ed9f6);color:#174d75;font-size:18px;line-height:16px;cursor:pointer";
		close.onclick = function () { self.destroy({ result: "close", reason: "button" }); };
		windowTools.appendChild(close);
		titlebar.appendChild(windowTools);

		var infoBar = document.createElement("div");
		infoBar.style.cssText = "grid-column:1 / -1;display:flex;align-items:center;gap:18px;padding:0 12px;background:linear-gradient(#fafdff,#d4ecfb);border-bottom:1px solid #9bc8e5;color:#21567e;font-size:12px;box-sizing:border-box";
		var presence = document.createElement("strong");
		presence.textContent = "● 語音　● 群組";
		presence.style.cssText = "color:#2f7fad;white-space:nowrap";
		var roomLabel = document.createElement("span");
		roomLabel.textContent = "ID:故事展示　 線上:" + data.members.length + "　 等級:2";
		roomLabel.style.cssText = "flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		var mode = document.createElement("span");
		mode.textContent = "♣ 自由模式　⌄ 頻道事件";
		mode.style.cssText = "white-space:nowrap";
		infoBar.appendChild(presence);
		infoBar.appendChild(roomLabel);
		infoBar.appendChild(mode);

		var channelTree = document.createElement("aside");
		channelTree.style.cssText = "grid-column:1;grid-row:3 / 5;min-width:0;min-height:0;overflow-y:auto;background:#eff8ff;border-right:1px solid #88bde0;box-sizing:border-box";
		var treeTitle = document.createElement("div");
		treeTitle.textContent = "⌂ " + data.title + "　›　故事人員";
		treeTitle.style.cssText = "padding:7px 9px 6px;font-size:12px;font-weight:700;color:#1f638f;border-bottom:1px solid #c5e1f2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		channelTree.appendChild(treeTitle);
		var voiceHeading = document.createElement("div");
		voiceHeading.textContent = "⊟　▰▰▰▰▰ 語音區";
		voiceHeading.style.cssText = "margin-top:4px;padding:4px 10px;color:#315b74;font-size:12px;font-weight:700;background:#dfedf8";
		channelTree.appendChild(voiceHeading);
		var currentRoom = document.createElement("div");
		currentRoom.textContent = "▣ " + data.roomName + "　(" + data.members.length + ")";
		currentRoom.style.cssText = "margin:2px 4px 0;padding:4px 7px;background:#fbe4ae;color:#c84625;font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		channelTree.appendChild(currentRoom);
		data.members.forEach(function (member) {
			var memberRow = document.createElement("div");
			memberRow.style.cssText = "display:flex;align-items:center;gap:5px;margin-left:19px;padding:3px 7px;color:#245778;font-size:12px;white-space:nowrap;overflow:hidden";
			var online = document.createElement("span");
			online.textContent = "●";
			online.style.cssText = "font-size:12px;color:#54bc3b;text-shadow:0 1px #fff";
			memberRow.appendChild(online);
			memberRow.appendChild(self.createAvatar(member, 18, true));
			var memberName = document.createElement("span");
			memberName.textContent = member.name + "　" + member.status;
			memberName.style.cssText = "overflow:hidden;text-overflow:ellipsis";
			memberRow.appendChild(memberName);
			channelTree.appendChild(memberRow);
		});
		var chatHeading = document.createElement("div");
		chatHeading.textContent = "⊟　▰▰▰▰▰ 聊天區";
		chatHeading.style.cssText = "margin-top:8px;padding:4px 10px;color:#315b74;font-size:12px;font-weight:700;background:#dfedf8";
		channelTree.appendChild(chatHeading);
		var textChannel = document.createElement("div");
		textChannel.textContent = "▣　故事文字紀錄　(" + data.messages.length + ")";
		textChannel.style.cssText = "padding:5px 16px;color:#2f6e95;font-size:12px";
		channelTree.appendChild(textChannel);

		var rightPane = document.createElement("main");
		rightPane.style.cssText = "grid-column:2;grid-row:3;min-width:0;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);background:#fff";
		var channelInfo = document.createElement("div");
		channelInfo.style.cssText = "display:flex;align-items:center;gap:10px;min-height:78px;padding:8px 12px;box-sizing:border-box;border-bottom:1px solid #a6cce5;background:linear-gradient(#fafeff,#edf8ff)";
		var featuredMember = data.membersById[data.messages.length ? data.messages[data.messages.length - 1].speaker : data.members[0].id];
		channelInfo.appendChild(self.createAvatar(featuredMember, 60, true));
		var channelText = document.createElement("div");
		channelText.style.cssText = "min-width:0;flex:1";
		var channelName = document.createElement("div");
		channelName.textContent = "▣ " + data.roomName;
		channelName.style.cssText = "color:#1671ae;font-size:13px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		var channelTopic = document.createElement("div");
		channelTopic.textContent = data.topic || "此頻道為故事展示用途。";
		channelTopic.style.cssText = "margin-top:5px;color:#4f6e83;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		var channelHint = document.createElement("div");
		channelHint.textContent = "ⓘ 此頻道為唯讀展示，不會啟動實際語音。";
		channelHint.style.cssText = "margin-top:6px;color:#1d7fc1;font-size:12px";
		channelText.appendChild(channelName);
		channelText.appendChild(channelTopic);
		channelText.appendChild(channelHint);
		channelInfo.appendChild(channelText);
		rightPane.appendChild(channelInfo);

		var conversation = document.createElement("div");
		conversation.style.cssText = "min-width:0;min-height:0;overflow-y:auto;padding:7px 12px 12px;background:#fff;overscroll-behavior:contain";
		if (!data.messages.length) {
			var empty = document.createElement("p");
			empty.textContent = "這個頻道目前沒有展示訊息。";
			empty.style.cssText = "margin:14px 0;color:#6c8699;font-size:12px";
			conversation.appendChild(empty);
		}
		data.messages.forEach(function (message) {
			var member = data.membersById[message.speaker];
			var row = document.createElement("article");
			row.style.cssText = "display:grid;grid-template-columns:20px minmax(0,1fr);gap:5px;padding:4px 2px;align-items:start;border-bottom:1px dotted #d3e3ef";
			row.appendChild(self.createAvatar(member, 18, true));
			var body = document.createElement("div");
			body.style.cssText = "min-width:0;font-size:12px;line-height:1.45;color:#20475f";
			var meta = document.createElement("span");
			meta.textContent = "◆ " + member.name + (message.timestamp ? "　" + message.timestamp : "") + "： ";
			meta.style.cssText = "font-weight:700;color:" + member.accent;
			var content = document.createElement("span");
			content.textContent = message.content;
			content.style.cssText = "white-space:pre-wrap;overflow-wrap:anywhere";
			body.appendChild(meta);
			body.appendChild(content);
			row.appendChild(body);
			conversation.appendChild(row);
		});
		rightPane.appendChild(conversation);

		var controlBar = document.createElement("footer");
		controlBar.style.cssText = "grid-column:2;grid-row:4;display:grid;grid-template-rows:31px 25px minmax(0,1fr);min-width:0;background:#f8fdff;border-top:1px solid #7fb8df";
		var volume = document.createElement("div");
		volume.style.cssText = "display:flex;align-items:center;gap:8px;padding:0 12px;border-bottom:1px solid #b4d5ea;color:#126bb0;font-size:12px";
		volume.appendChild(document.createTextNode("🔊"));
		["音量", "麥克風"].forEach(function (label) {
			var slider = document.createElement("span");
			slider.textContent = "";
			slider.title = label;
			slider.style.cssText = "width:78px;height:7px;border:1px solid #4b8cab;border-radius:5px;background:linear-gradient(90deg,#31b527 0%,#31b527 72%,#eff8fb 72%,#eff8fb 100%);box-shadow:inset 0 1px 2px rgba(0,0,0,0.24)";
			volume.appendChild(slider);
		});
		var volumeHint = document.createElement("span");
		volumeHint.textContent = "（語音音效）　按住 F2 開始說話";
		volumeHint.style.cssText = "margin-left:auto;color:#416c88;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		volume.appendChild(volumeHint);
		controlBar.appendChild(volume);
		var toolbar = document.createElement("div");
		toolbar.style.cssText = "display:flex;align-items:center;gap:13px;padding:0 12px;border-bottom:1px solid #b4d5ea;color:#1572b6;font-size:14px;background:linear-gradient(#fff,#eaf6ff)";
		["A", "☺", "♫ 音樂", "▥ 投票", "⦿ 錄音"].forEach(function (tool) {
			var item = document.createElement("span");
			item.textContent = tool;
			item.style.cssText = "white-space:nowrap";
			toolbar.appendChild(item);
		});
		var displayOnly = document.createElement("span");
		displayOnly.textContent = "語音設定　⌄";
		displayOnly.style.cssText = "margin-left:auto;padding:2px 6px;border:1px solid #91bddd;background:#f6fcff;color:#356887;font-size:11px;white-space:nowrap";
		toolbar.appendChild(displayOnly);
		controlBar.appendChild(toolbar);
		var compose = document.createElement("div");
		compose.style.cssText = "position:relative;min-height:0;margin:5px 9px 7px;border:1px solid #bad6e9;background:#fff";
		var composeHint = document.createElement("span");
		composeHint.textContent = "故事展示模式：此區不提供輸入";
		composeHint.style.cssText = "position:absolute;left:8px;top:7px;color:#a2b9ca;font-size:11px";
		var returnKey = document.createElement("span");
		returnKey.textContent = "↵";
		returnKey.style.cssText = "position:absolute;right:4px;bottom:3px;width:28px;height:24px;display:flex;align-items:center;justify-content:center;border:1px solid #8db9d8;border-radius:4px;background:linear-gradient(#fff,#d9efff);color:#28638c;font-size:17px";
		compose.appendChild(composeHint);
		compose.appendChild(returnKey);
		controlBar.appendChild(compose);

		var mobileStyle = document.createElement("style");
		mobileStyle.textContent = "@media (max-width:680px){#motaRcVoice section[role='presentation']{grid-template-columns:minmax(0,1fr)!important;grid-template-rows:38px 30px minmax(0,1fr) 82px!important}#motaRcVoice aside{display:none!important}#motaRcVoice header>div:nth-child(3),#motaRcVoice header>div:nth-child(4)>span{display:none!important}#motaRcVoice main{grid-column:1!important}#motaRcVoice footer{grid-column:1!important}#motaRcVoice .motaRcInfoMode{display:none!important}}";
		app.setAttribute("role", "presentation");
		infoBar.className = "motaRcInfoMode";
		app.appendChild(titlebar);
		app.appendChild(infoBar);
		app.appendChild(channelTree);
		app.appendChild(rightPane);
		app.appendChild(controlBar);
		overlay.appendChild(mobileStyle);
		overlay.appendChild(app);
		this.bindCloseKey();
	};

	RcVoiceView.prototype.bindCloseKey = function () {
		var self = this;
		this.keyHandler = function (event) {
			if (event.key === "Escape") self.destroy({ result: "close", reason: "escape" });
		};
		document.addEventListener("keydown", this.keyHandler);
	};

	RcVoiceView.prototype.destroy = function (result) {
		if (this.destroyed) return;
		this.destroyed = true;
		if (this.keyHandler) document.removeEventListener("keydown", this.keyHandler);
		if (this.overlay && this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
		if (!this.lockedBeforeStart) core.unlockControl();
		if (currentView === this) currentView = null;
		this.callback(result || { result: "close", reason: "destroy" });
	};

	window.MotaRcVoice = {
		open: function (path, options, callback) {
			if (currentView) currentView.destroy({ result: "close", reason: "replaced" });
			currentView = new RcVoiceView(path, options, callback);
			currentView.start();
			return currentView;
		},
		clearCache: function () {
			dataCache = {};
		}
	};
})();
