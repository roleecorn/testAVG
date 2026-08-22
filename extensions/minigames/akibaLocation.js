(function () {
	"use strict";

	window.MotaMiniGames = window.MotaMiniGames || {};

	var CONFIGS = {
		kaidan_cave: {
			title: "幽靈找不同", type: "hunt", seconds: 60, targetCount: 5, mistakeLimit: 3,
			instruction: "找出洋館窗景中 5 個不尋常的東西。",
			targets: ["👻", "🕯️", "🦇", "🕸️", "👁️"], decoys: ["🪟", "🖼️", "🪞"]
		},
		hotel: {
			title: "行李送房", type: "sort", seconds: 60, mistakeLimit: 3,
			instruction: "把行李拖到房卡指定的樓層；也可以先點行李再點樓層。",
			bins: [{ id: "1F", label: "1 樓" }, { id: "2F", label: "2 樓" }, { id: "3F", label: "3 樓" }],
			items: [["101 房・紅行李", "1F"], ["203 房・藍行李", "2F"], ["302 房・帽箱", "3F"], ["105 房・旅行袋", "1F"], ["208 房・樂器箱", "2F"], ["311 房・皮箱", "3F"], ["201 房・背包", "2F"], ["108 房・紙袋", "1F"]]
		},
		warehouse_district: {
			title: "倉庫裝箱", type: "sort", seconds: 75, mistakeLimit: 3,
			instruction: "依貨物標示放進正確貨區。",
			bins: [{ id: "fragile", label: "易碎區" }, { id: "cold", label: "冷藏區" }, { id: "heavy", label: "重貨區" }],
			items: [["玻璃杯 📦", "fragile"], ["冰淇淋 🍨", "cold"], ["啞鈴 🏋️", "heavy"], ["相機 📷", "fragile"], ["鮮奶 🥛", "cold"], ["鐵砧 ⚒️", "heavy"], ["瓷盤 🍽️", "fragile"], ["冷凍魚 🐟", "cold"], ["齒輪 ⚙️", "heavy"]]
		},
		elevated_train: {
			title: "轉轍調度", type: "sort", seconds: 55, mistakeLimit: 2,
			instruction: "依列車目的地點擊正確月台，避免誤入支線。",
			bins: [{ id: "north", label: "北線" }, { id: "central", label: "中央線" }, { id: "south", label: "南線" }],
			items: [["快速・北城 🚆", "north"], ["普通・中央街 🚃", "central"], ["特急・南港 🚄", "south"], ["普通・北門 🚃", "north"], ["快速・南橋 🚆", "south"], ["普通・中央街 🚃", "central"], ["特急・北城 🚄", "north"]]
		},
		music_venue: {
			title: "舞台打拍", type: "timing", seconds: 55, attempts: 12, required: 9, targetWidth: 0.18,
			instruction: "游標進入亮色節拍區時點擊「打拍」。", actionLabel: "打拍 🎵"
		},
		sento: {
			title: "湯溫調節", type: "balance", seconds: 45, startValue: 36, targetMin: 39, targetMax: 42,
			stableMs: 7000, safeMin: 31, safeMax: 49, step: 1.35, drift: -0.12,
			instruction: "用冷、熱水把湯溫維持在 39～42°C，累計 7 秒。",
			lowLabel: "加冷水 ❄️", highLabel: "加熱水 🔥", unitLabel: "°C"
		},
		mahjong_parlor: {
			title: "麻將牌消除", type: "tileMatch", seconds: 120, mistakeLimit: 4,
			instruction: "每排只能取最左或最右的牌；消除 9 對相同麻將牌。",
			symbols: ["一萬", "九萬", "一筒", "九筒", "一索", "九索", "東", "南", "中"]
		},
		chinese_restaurant: {
			title: "中華快炒", type: "sequence", seconds: 80, rounds: 5, required: 4,
			instruction: "記住下鍋順序，再依序點選材料。",
			choices: ["🥬", "🥕", "🥚", "🍖", "🍤", "🧄"]
		},
		park: {
			title: "公園清潔隊", type: "hunt", seconds: 45, targetCount: 12, mistakeLimit: 5,
			instruction: "把草地上的 12 件垃圾全部撿走。",
			targets: ["🥤", "🧃", "📰", "🍬", "🥫", "🧻"], decoys: ["🌿", "🌼", "🍀", "🌱"]
		},
		prize_exchange: {
			title: "真偽鑑定", type: "sort", seconds: 70, mistakeLimit: 3,
			instruction: "依描述判斷商品是否值得收購。",
			bins: [{ id: "buy", label: "收購" }, { id: "reject", label: "拒絕" }],
			items: [["原廠雷射標籤・盒況佳", "buy"], ["序號遭刮除", "reject"], ["限定版完整未拆", "buy"], ["明顯仿冒商標", "reject"], ["附購買證明", "buy"], ["嚴重缺件", "reject"], ["絕版初回特典", "buy"], ["大量褪色受潮", "reject"], ["正版壓印清晰", "buy"], ["封條重貼", "reject"]]
		},
		maid_cafe: {
			title: "女僕點單記憶", type: "sequence", seconds: 80, rounds: 5, required: 4,
			instruction: "記住客人的餐點順序，再依序送上。",
			choices: ["☕", "🍰", "🍮", "🥞", "🍓", "🍨"]
		},
		melon_shop: {
			title: "新刊搶購", type: "hunt", seconds: 45, targetCount: 8, mistakeLimit: 3,
			instruction: "從書海中搶到 8 本紅色目標新刊。",
			targets: ["📕"], decoys: ["📗", "📘", "📙", "📓", "📔"]
		},
		shrine: {
			title: "奉納投幣", type: "timing", seconds: 40, attempts: 5, required: 3, targetWidth: 0.2,
			instruction: "抓準力道，讓香油錢落進賽錢箱。", actionLabel: "投幣 🪙"
		},
		convenience_24h: {
			title: "超商結帳", type: "sort", seconds: 60, mistakeLimit: 3,
			instruction: "掃碼後把商品送往正確處理區。",
			bins: [{ id: "hot", label: "加熱" }, { id: "cold", label: "冷藏袋" }, { id: "normal", label: "一般袋" }],
			items: [["便當 🍱", "hot"], ["冰咖啡 🧋", "cold"], ["雜誌 📰", "normal"], ["冷凍甜點 🍨", "cold"], ["飯糰 🍙", "hot"], ["電池 🔋", "normal"]]
		},
		police_station: {
			title: "派出所巡邏", type: "sequence", seconds: 60, rounds: 5, required: 4,
			instruction: "依序確認巡邏回報的地點。",
			choices: ["車站", "劇場", "公園", "倉庫區", "神社", "旅館"]
		},
		restaurant: {
			title: "餐盤送桌", type: "sort", seconds: 70, mistakeLimit: 3,
			instruction: "依桌號把料理送到正確區域。",
			bins: [{ id: "window", label: "窗邊桌" }, { id: "center", label: "中央桌" }, { id: "booth", label: "沙發桌" }],
			items: [["窗 1・漢堡排", "window"], ["沙 2・聖代", "booth"], ["中 3・義大利麵", "center"], ["窗 4・咖哩飯", "window"], ["中 5・兒童餐", "center"], ["沙 6・鬆餅", "booth"]]
		},
		horses_knee: {
			title: "漫畫連號排架", type: "sort", seconds: 75, mistakeLimit: 3,
			instruction: "依集數把漫畫放回正確書架。",
			bins: [{ id: "early", label: "1～4 集" }, { id: "middle", label: "5～8 集" }, { id: "late", label: "9～12 集" }],
			items: [["第 7 集", "middle"], ["第 1 集", "early"], ["第 12 集", "late"], ["第 4 集", "early"], ["第 9 集", "late"], ["第 6 集", "middle"], ["第 2 集", "early"], ["第 10 集", "late"], ["第 5 集", "middle"], ["第 3 集", "early"], ["第 8 集", "middle"], ["第 11 集", "late"]]
		},
		rabbit_house: {
			title: "炭火烤蜜瓜麵包", type: "timing", seconds: 45, attempts: 6, required: 5, targetWidth: 0.24,
			instruction: "麵包進入金黃色火候區時點擊起鍋。", actionLabel: "起鍋 🍞"
		}
	};

	function clone(value) {
		return JSON.parse(JSON.stringify(value));
	}

	function shuffle(values) {
		var array = values.slice();
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	function makeButton(label, background) {
		var button = document.createElement("button");
		button.type = "button";
		button.textContent = label;
		button.style.cssText = [
			"min-height:38px", "border:1px solid rgba(255,255,255,0.24)", "border-radius:7px",
			"padding:5px 8px", "background:" + (background || "linear-gradient(#475569,#334155)"), "color:#fff",
			"font-weight:700", "cursor:pointer", "touch-action:manipulation",
			"-webkit-tap-highlight-color:transparent", "box-sizing:border-box",
			"box-shadow:inset 0 0 0 1px rgba(255,255,255,0.08),0 3px 0 rgba(2,6,23,0.35)"
		].join(";");
		return button;
	}

	var MODE_THEMES = {
		hunt: {
			accent: "#22c55e",
			soft: "rgba(34,197,94,0.22)",
			board: "radial-gradient(circle at 22% 18%,rgba(34,197,94,0.28),transparent 34%),linear-gradient(135deg,#11261d,#0f172a 70%)",
			card: "linear-gradient(#f0fdf4,#bbf7d0)",
			cardText: "#12351f"
		},
		sort: {
			accent: "#60a5fa",
			soft: "rgba(96,165,250,0.22)",
			board: "radial-gradient(circle at 78% 18%,rgba(96,165,250,0.24),transparent 35%),linear-gradient(135deg,#10223f,#0f172a 72%)",
			card: "linear-gradient(#dbeafe,#93c5fd)",
			cardText: "#0f2747"
		},
		memory: {
			accent: "#a78bfa",
			soft: "rgba(167,139,250,0.22)",
			board: "radial-gradient(circle at 50% 26%,rgba(167,139,250,0.28),transparent 36%),linear-gradient(135deg,#22183f,#0f172a 72%)",
			card: "linear-gradient(#ede9fe,#c4b5fd)",
			cardText: "#271552"
		},
		sequence: {
			accent: "#fb7185",
			soft: "rgba(251,113,133,0.2)",
			board: "radial-gradient(circle at 48% 18%,rgba(251,113,133,0.25),transparent 34%),linear-gradient(135deg,#3a1426,#0f172a 72%)",
			card: "linear-gradient(#ffe4e6,#fda4af)",
			cardText: "#4c1021"
		},
		timing: {
			accent: "#facc15",
			soft: "rgba(250,204,21,0.22)",
			board: "radial-gradient(circle at 50% 20%,rgba(250,204,21,0.22),transparent 35%),linear-gradient(135deg,#35270b,#0f172a 72%)",
			card: "linear-gradient(#fef3c7,#facc15)",
			cardText: "#3f2d08"
		},
		balance: {
			accent: "#38bdf8",
			soft: "rgba(56,189,248,0.2)",
			board: "radial-gradient(circle at 28% 22%,rgba(56,189,248,0.26),transparent 34%),linear-gradient(135deg,#082f49,#0f172a 72%)",
			card: "linear-gradient(#e0f2fe,#7dd3fc)",
			cardText: "#082f49"
		},
		tileMatch: {
			accent: "#f59e0b",
			soft: "rgba(245,158,11,0.2)",
			board: "radial-gradient(circle at 52% 24%,rgba(245,158,11,0.23),transparent 36%),linear-gradient(135deg,#33200d,#0f172a 72%)",
			card: "linear-gradient(#fff7ed,#fed7aa)",
			cardText: "#3f2610"
		}
	};

	function themedButton(button, theme, kind) {
		var accent = theme && theme.accent || "#60a5fa";
		var card = theme && theme.card || "linear-gradient(#dbeafe,#93c5fd)";
		var text = theme && theme.cardText || "#0f172a";
		button.style.border = "1px solid rgba(255,255,255,0.32)";
		button.style.background = kind === "card" ? card : kind === "dark" ? "linear-gradient(#1e293b,#0f172a)" : "linear-gradient(180deg," + accent + ",#334155)";
		button.style.color = kind === "card" ? text : "#fff";
		button.style.boxShadow = "inset 0 0 0 1px rgba(255,255,255,0.16),0 4px 0 rgba(2,6,23,0.34),0 0 16px " + (theme && theme.soft || "rgba(96,165,250,0.2)");
	}

	function makeModeFrame(theme, style) {
		var frame = document.createElement("div");
		frame.style.cssText = [
			"position:relative", "width:96%", "height:96%", "box-sizing:border-box", "padding:12px",
			"border:1px solid rgba(255,255,255,0.18)", "border-radius:10px",
			"background:" + (theme && theme.board || "linear-gradient(135deg,#1e293b,#0f172a)"),
			"box-shadow:inset 0 0 30px rgba(2,6,23,0.55),0 10px 24px rgba(2,6,23,0.28)",
			"overflow:hidden", style || ""
		].join(";");
		return frame;
	}

	function AkibaLocationGame(options, onFinish) {
		this.options = options || {};
		this.locationId = this.options.locationId || "";
		this.config = CONFIGS[this.locationId];
		this.theme = MODE_THEMES[this.config && this.config.type] || MODE_THEMES.sort;
		this.onFinish = onFinish || function () {};
		this.lockedBeforeStart = false;
		this.overlay = null;
		this.panel = null;
		this.board = null;
		this.status = null;
		this.progress = null;
		this.footer = null;
		this.closeButton = null;
		this.resizeHandler = null;
		this.intervals = [];
		this.timeouts = [];
		this.secondsLeft = 0;
		this.ended = false;
		this.destroyed = false;
		this.result = null;
		this.score = 0;
		this.mistakes = 0;
	}

	AkibaLocationGame.prototype.start = function () {
		if (!this.config) {
			this.destroyed = true;
			this.onFinish({ result: "error", reason: "unknownLocation", locationId: this.locationId, score: 0 });
			return;
		}
		this.lockedBeforeStart = !!(core.status && core.status.lockControl);
		core.lockControl();
		this.createOverlay();
		this.initializeMode();
		this.startCountdown();
	}

	AkibaLocationGame.prototype.createOverlay = function () {
		var self = this;
		var overlay = document.createElement("div");
		overlay.id = "akibaLocationMiniGame";
		overlay.setAttribute("role", "dialog");
		overlay.setAttribute("aria-label", this.config.title);
		overlay.style.cssText = [
			"position:fixed", "left:0", "top:0", "right:0", "bottom:0", "width:100vw", "height:100vh", "z-index:225",
			"display:flex", "align-items:center", "justify-content:center", "overflow:hidden",
			"background:radial-gradient(circle at 18% 16%,rgba(56,189,248,0.18),transparent 34%),radial-gradient(circle at 84% 74%,rgba(250,204,21,0.16),transparent 38%),rgba(5,10,20,0.93)",
			"font-family:Arial,'Microsoft JhengHei','Microsoft YaHei',sans-serif",
			"color:#f8fafc", "pointer-events:auto", "touch-action:none"
		].join(";");

		var panel = document.createElement("div");
		panel.style.cssText = [
			"width:900px", "height:640px", "box-sizing:border-box", "padding:14px", "border-radius:8px",
			"border:1px solid rgba(148,163,184,0.34)", "background:linear-gradient(160deg,rgba(30,41,59,0.98),rgba(15,23,42,0.98) 72%,rgba(8,13,26,0.98))",
			"box-shadow:0 18px 52px rgba(0,0,0,0.58),inset 0 0 34px rgba(56,189,248,0.08)",
			"display:flex", "flex-direction:column", "gap:6px", "overflow:hidden"
		].join(";");

		var header = document.createElement("div");
		header.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:8px;flex:0 0 auto;min-height:34px";
		var title = document.createElement("div");
		title.textContent = this.config.title;
		title.style.cssText = "font-size:24px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#e0f2fe;text-shadow:0 0 12px rgba(56,189,248,0.45)";
		header.appendChild(title);

		var close = makeButton("×", "#3f2b3b");
		close.title = "取消並返回地圖";
		close.setAttribute("aria-label", "取消並返回地圖");
		close.style.minWidth = "38px";
		close.style.padding = "0";
		close.style.fontSize = "22px";
		close.onclick = function () {
			self.destroy(self.result || { result: "cancel", reason: "close", score: self.score, locationId: self.locationId });
		};
		header.appendChild(close);
		panel.appendChild(header);

		var progress = document.createElement("div");
		progress.style.cssText = [
			"flex:0 0 auto", "min-height:24px", "font-size:14px", "color:#facc15", "white-space:nowrap",
			"overflow:hidden", "text-overflow:ellipsis", "padding:3px 8px", "box-sizing:border-box",
			"border:1px solid rgba(250,204,21,0.22)", "border-radius:6px", "background:rgba(15,23,42,0.72)"
		].join(";");
		panel.appendChild(progress);

		var status = document.createElement("div");
		status.textContent = this.config.instruction;
		status.style.cssText = "flex:0 0 auto;min-height:34px;font-size:14px;line-height:1.3;color:#cbd5e1;overflow:hidden;padding:0 4px";
		panel.appendChild(status);

		var board = document.createElement("div");
		board.style.cssText = [
			"position:relative", "flex:1 1 auto", "min-height:0", "overflow:hidden", "display:flex",
			"align-items:center", "justify-content:center", "border:1px solid rgba(148,163,184,0.22)",
			"border-radius:8px", "background:" + (this.theme && this.theme.board || "linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.82))") + ",repeating-linear-gradient(45deg,rgba(255,255,255,0.035) 0 2px,transparent 2px 18px)",
			"box-shadow:inset 0 0 28px rgba(2,6,23,0.55)"
		].join(";");
		panel.appendChild(board);

		var footer = document.createElement("div");
		footer.style.cssText = "display:flex;gap:6px;flex:0 0 auto;min-height:38px";
		panel.appendChild(footer);

		overlay.appendChild(panel);
		(document.body || core.dom.gameDraw).appendChild(overlay);
		this.overlay = overlay;
		this.panel = panel;
		this.board = board;
		this.status = status;
		this.progress = progress;
		this.footer = footer;
		this.closeButton = close;

		this.resizeHandler = function () { self.applyResponsiveLayout(); };
		window.addEventListener("resize", this.resizeHandler);
		this.applyResponsiveLayout();
	}

	AkibaLocationGame.prototype.applyResponsiveLayout = function () {
		if (!this.overlay || !this.panel) return;
		var width = this.overlay.clientWidth || window.innerWidth || 416;
		var height = this.overlay.clientHeight || window.innerHeight || 416;
		var margin = Math.max(8, Math.min(width, height) * 0.035);
		var panelWidth = Math.max(180, Math.floor(width - margin * 2));
		var panelHeight = Math.max(180, Math.floor(height - margin * 2));
		panelWidth = Math.min(panelWidth, 980);
		panelHeight = Math.min(panelHeight, 720);
		var unit = Math.min(panelWidth, panelHeight) / 13;
		this.panel.style.width = panelWidth + "px";
		this.panel.style.height = panelHeight + "px";
		this.panel.style.padding = Math.max(8, unit * 0.28) + "px";
		this.panel.style.gap = Math.max(4, unit * 0.14) + "px";
		var buttons = this.panel.querySelectorAll("button");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.fontSize = Math.max(9, unit * 0.42) + "px";
			buttons[i].style.minHeight = Math.max(32, unit * 1.12) + "px";
		}
	}

	AkibaLocationGame.prototype.initializeMode = function () {
		var type = this.config.type;
		if (type === "hunt") this.startHunt();
		else if (type === "sort") this.startSort();
		else if (type === "memory") this.startMemory();
		else if (type === "sequence") this.startSequence();
		else if (type === "timing") this.startTiming();
		else if (type === "balance") this.startBalance();
		else if (type === "tileMatch") this.startTileMatch();
		else this.finish("error", "unknownType");
	}

	AkibaLocationGame.prototype.startCountdown = function () {
		var self = this;
		this.secondsLeft = this.config.seconds || 60;
		this.updateProgress();
		this.intervals.push(setInterval(function () {
			if (self.ended) return;
			self.secondsLeft--;
			self.updateProgress();
			if (self.secondsLeft <= 0) self.finish("lose", "timeout");
		}, 1000));
	}

	AkibaLocationGame.prototype.updateProgress = function () {
		if (!this.progress) return;
		var detail = "";
		if (this.config.type === "hunt") detail = "找到 " + (this.found || 0) + "/" + this.config.targetCount + "　誤點 " + this.mistakes + "/" + this.config.mistakeLimit;
		else if (this.config.type === "sort") detail = "完成 " + (this.sortIndex || 0) + "/" + this.config.items.length + "　錯誤 " + this.mistakes + "/" + this.config.mistakeLimit;
		else if (this.config.type === "memory") detail = "配對 " + (this.matchedPairs || 0) + "/" + this.config.symbols.length + "　步數 " + (this.moves || 0) + "/" + this.config.moveLimit;
		else if (this.config.type === "sequence") detail = "回合 " + Math.min((this.sequenceRound || 0) + 1, this.config.rounds) + "/" + this.config.rounds + "　成功 " + (this.sequenceWins || 0);
		else if (this.config.type === "timing") detail = "命中 " + (this.timingHits || 0) + "/" + this.config.required + "　次數 " + (this.timingAttempts || 0) + "/" + this.config.attempts;
		else if (this.config.type === "balance") detail = "穩定 " + Math.floor((this.stableElapsed || 0) / 1000) + "/" + Math.ceil(this.config.stableMs / 1000) + " 秒";
		else if (this.config.type === "tileMatch") detail = "消除 " + (this.tilePairs || 0) + "/9　錯誤 " + this.mistakes + "/" + this.config.mistakeLimit;
		this.progress.textContent = "剩餘 " + Math.max(0, this.secondsLeft) + " 秒　" + detail;
	}

	AkibaLocationGame.prototype.startHunt = function () {
		var self = this;
		this.found = 0;
		var theme = this.theme;
		var cells = Math.max(16, this.config.targetCount + 8);
		var targets = [];
		for (var i = 0; i < this.config.targetCount; i++) targets.push(true);
		while (targets.length < cells) targets.push(false);
		targets = shuffle(targets);
		var grid = makeModeFrame(theme, "display:grid;grid-template-columns:repeat(4,1fr);gap:8px");
		targets.forEach(function (isTarget, index) {
			var icons = isTarget ? self.config.targets : self.config.decoys;
			var button = makeButton(icons[index % icons.length], isTarget ? theme.card : "linear-gradient(#1e293b,#0f172a)");
			themedButton(button, theme, isTarget ? "card" : "dark");
			button.dataset.target = isTarget ? "1" : "0";
			button.style.fontSize = "24px";
			button.style.borderRadius = "10px";
			button.onclick = function () {
				if (self.ended || this.disabled) return;
				if (this.dataset.target === "1") {
					this.disabled = true;
					this.textContent = "✓";
					this.style.background = "linear-gradient(#86efac,#16a34a)";
					self.found++;
					self.score += 100;
					if (self.found >= self.config.targetCount) self.finish("win", "clear");
				} else {
					self.mistakes++;
					this.style.background = "linear-gradient(#fca5a5,#7f1d1d)";
					self.addTimeout(function () {
						if (!self.ended) themedButton(button, theme, "dark");
					}, 220);
					if (self.mistakes >= self.config.mistakeLimit) self.finish("lose", "mistakes");
				}
				self.updateProgress();
			};
			grid.appendChild(button);
		});
		this.board.appendChild(grid);
	}

	AkibaLocationGame.prototype.startSort = function () {
		this.sortItems = shuffle(this.config.items);
		this.sortIndex = 0;
		this.renderSortItem();
	}

	AkibaLocationGame.prototype.renderSortItem = function () {
		var self = this;
		var theme = this.theme;
		if (this.ended) return;
		if (this.sortIndex >= this.sortItems.length) {
			this.finish("win", "clear");
			return;
		}
		this.board.innerHTML = "";
		this.footer.innerHTML = "";
		var wrap = makeModeFrame(theme, "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px");
		var item = document.createElement("div");
		item.textContent = this.sortItems[this.sortIndex][0];
		item.draggable = true;
		item.style.cssText = [
			"width:82%", "min-height:76px", "display:flex", "align-items:center", "justify-content:center",
			"text-align:center", "padding:12px", "box-sizing:border-box", "border:2px solid " + theme.accent,
			"border-radius:12px", "background:" + theme.card, "color:" + theme.cardText,
			"font-size:20px", "font-weight:900", "cursor:grab", "touch-action:none",
			"box-shadow:0 8px 0 rgba(2,6,23,0.32),0 0 24px " + theme.soft
		].join(";");
		item.ondragstart = function (event) { event.dataTransfer.setData("text/plain", "active"); };
		wrap.appendChild(item);
		var hint = document.createElement("div");
		hint.textContent = "拖曳或點擊正確目的地";
		hint.style.cssText = "font-size:12px;color:#94a3b8";
		wrap.appendChild(hint);
		var bins = document.createElement("div");
		bins.style.cssText = "display:grid;grid-template-columns:repeat(" + this.config.bins.length + ",1fr);gap:6px;width:100%";
		this.config.bins.forEach(function (bin) {
			var button = makeButton(bin.label, "#334155");
			themedButton(button, theme, "normal");
			button.ondragover = function (event) { event.preventDefault(); };
			button.ondrop = function (event) { event.preventDefault(); self.chooseSortBin(bin.id); };
			button.onclick = function () { self.chooseSortBin(bin.id); };
			bins.appendChild(button);
		});
		wrap.appendChild(bins);
		this.board.appendChild(wrap);
		this.updateProgress();
		this.applyResponsiveLayout();
	}

	AkibaLocationGame.prototype.chooseSortBin = function (binId) {
		if (this.ended || this.sortIndex >= this.sortItems.length) return;
		var correct = this.sortItems[this.sortIndex][1] === binId;
		if (correct) {
			this.sortIndex++;
			this.score += 100;
			this.status.textContent = "正確！下一件。";
			this.renderSortItem();
		} else {
			this.mistakes++;
			this.status.textContent = "放錯位置，再看看標示。";
			if (this.mistakes >= this.config.mistakeLimit) this.finish("lose", "mistakes");
		}
		this.updateProgress();
	}

	AkibaLocationGame.prototype.startMemory = function () {
		var self = this;
		var theme = this.theme;
		this.moves = 0;
		this.matchedPairs = 0;
		this.memoryOpen = [];
		this.memoryBusy = false;
		var values = shuffle(this.config.symbols.concat(this.config.symbols));
		var grid = makeModeFrame(theme, "display:grid;grid-template-columns:repeat(4,1fr);gap:8px");
		values.forEach(function (value, index) {
			var button = makeButton("？", "linear-gradient(#312e81,#1e1b4b)");
			themedButton(button, theme, "dark");
			button.dataset.value = value;
			button.dataset.index = index;
			button.style.fontSize = "26px";
			button.style.borderRadius = "12px";
			button.onclick = function () { self.flipMemoryCard(button); };
			grid.appendChild(button);
		});
		this.memoryButtons = Array.prototype.slice.call(grid.children);
		this.board.appendChild(grid);
	}

	AkibaLocationGame.prototype.flipMemoryCard = function (button) {
		var self = this;
		if (this.ended || this.memoryBusy || button.disabled || this.memoryOpen.indexOf(button) >= 0) return;
		button.textContent = button.dataset.value;
		themedButton(button, this.theme, "card");
		this.memoryOpen.push(button);
		if (this.memoryOpen.length < 2) return;
		this.moves++;
		this.memoryBusy = true;
		var first = this.memoryOpen[0];
		var second = this.memoryOpen[1];
		if (first.dataset.value === second.dataset.value) {
			first.disabled = true;
			second.disabled = true;
			first.style.background = second.style.background = "linear-gradient(#bbf7d0,#16a34a)";
			this.matchedPairs++;
			this.score += 150;
			this.memoryOpen = [];
			this.memoryBusy = false;
			if (this.matchedPairs >= this.config.symbols.length) this.finish("win", "clear");
		} else {
			this.addTimeout(function () {
				first.textContent = second.textContent = "？";
				themedButton(first, self.theme, "dark");
				themedButton(second, self.theme, "dark");
				self.memoryOpen = [];
				self.memoryBusy = false;
			}, 650);
		}
		if (!this.ended && this.moves >= this.config.moveLimit && this.matchedPairs < this.config.symbols.length) this.finish("lose", "moveLimit");
		this.updateProgress();
	}

	AkibaLocationGame.prototype.startSequence = function () {
		this.sequenceRound = 0;
		this.sequenceWins = 0;
		this.sequenceInput = 0;
		this.startSequenceRound();
	}

	AkibaLocationGame.prototype.startSequenceRound = function () {
		var self = this;
		var theme = this.theme;
		if (this.ended) return;
		if (this.sequenceRound >= this.config.rounds) {
			this.finish(this.sequenceWins >= this.config.required ? "win" : "lose", "roundsComplete");
			return;
		}
		var length = Math.min(4, 2 + Math.floor(this.sequenceRound / 2));
		this.currentSequence = [];
		for (var i = 0; i < length; i++) this.currentSequence.push(this.config.choices[Math.floor(Math.random() * this.config.choices.length)]);
		this.sequenceInput = 0;
		this.board.innerHTML = "";
		this.footer.innerHTML = "";
		var wrap = makeModeFrame(theme, "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px");
		var preview = document.createElement("div");
		preview.textContent = this.currentSequence.join("　");
		preview.style.cssText = [
			"width:92%", "min-height:82px", "display:flex", "align-items:center", "justify-content:center",
			"border-radius:12px", "background:" + theme.card, "color:" + theme.cardText,
			"font-size:32px", "letter-spacing:4px", "font-weight:900",
			"box-shadow:0 8px 0 rgba(2,6,23,0.3),0 0 24px " + theme.soft
		].join(";");
		wrap.appendChild(preview);
		var choices = document.createElement("div");
		choices.style.cssText = "display:grid;grid-template-columns:repeat(3,1fr);gap:6px;width:92%";
		this.config.choices.forEach(function (choice) {
			var button = makeButton(choice, "#334155");
			themedButton(button, theme, "normal");
			button.style.fontSize = "24px";
			button.disabled = true;
			button.onclick = function () { self.chooseSequence(choice); };
			choices.appendChild(button);
		});
		wrap.appendChild(choices);
		this.board.appendChild(wrap);
		this.status.textContent = "先記住順序……";
		this.updateProgress();
		this.addTimeout(function () {
			if (self.ended) return;
			preview.textContent = "請依序點選";
			self.status.textContent = self.config.instruction;
			for (var j = 0; j < choices.children.length; j++) choices.children[j].disabled = false;
		}, 1500);
		this.applyResponsiveLayout();
	}

	AkibaLocationGame.prototype.chooseSequence = function (choice) {
		var self = this;
		if (this.ended || !this.currentSequence) return;
		if (choice !== this.currentSequence[this.sequenceInput]) {
			this.status.textContent = "順序錯了，準備下一位。";
			this.sequenceRound++;
			this.currentSequence = null;
			this.addTimeout(function () { self.startSequenceRound(); }, 550);
			this.updateProgress();
			return;
		}
		this.sequenceInput++;
		if (this.sequenceInput >= this.currentSequence.length) {
			this.sequenceWins++;
			this.sequenceRound++;
			this.score += 200;
			this.currentSequence = null;
			this.status.textContent = "順序正確！";
			this.addTimeout(function () { self.startSequenceRound(); }, 450);
		}
		this.updateProgress();
	}

	AkibaLocationGame.prototype.startTiming = function () {
		var self = this;
		var theme = this.theme;
		this.timingHits = 0;
		this.timingAttempts = 0;
		this.markerValue = 0;
		this.markerDirection = 1;
		this.randomizeTimingTarget();
		var wrap = makeModeFrame(theme, "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px");
		var gauge = document.createElement("div");
		gauge.style.cssText = [
			"position:relative", "width:94%", "height:68px", "border-radius:14px",
			"background:linear-gradient(90deg,#1e293b,#111827)", "border:2px solid " + theme.accent,
			"overflow:hidden", "box-shadow:inset 0 0 24px rgba(2,6,23,0.62),0 0 24px " + theme.soft
		].join(";");
		var target = document.createElement("div");
		target.style.cssText = "position:absolute;top:0;height:100%;background:linear-gradient(90deg,rgba(34,197,94,0.3),rgba(134,239,172,0.8),rgba(34,197,94,0.3));box-shadow:0 0 18px rgba(134,239,172,0.8)";
		var marker = document.createElement("div");
		marker.style.cssText = "position:absolute;top:0;width:6px;height:100%;background:#fff7ad;box-shadow:0 0 12px #facc15,0 0 24px #facc15";
		gauge.appendChild(target);
		gauge.appendChild(marker);
		wrap.appendChild(gauge);
		var action = makeButton(this.config.actionLabel || "停止", "#be123c");
		themedButton(action, theme, "normal");
		action.style.width = "70%";
		action.onclick = function () { self.takeTimingAttempt(); };
		wrap.appendChild(action);
		this.board.appendChild(wrap);
		this.timingTargetElement = target;
		this.timingMarkerElement = marker;
		this.renderTiming();
		this.intervals.push(setInterval(function () {
			if (self.ended) return;
			self.markerValue += self.markerDirection * 0.018;
			if (self.markerValue >= 1) { self.markerValue = 1; self.markerDirection = -1; }
			if (self.markerValue <= 0) { self.markerValue = 0; self.markerDirection = 1; }
			self.renderTiming();
		}, 30));
	}

	AkibaLocationGame.prototype.randomizeTimingTarget = function () {
		var width = this.config.targetWidth || 0.2;
		var center = width / 2 + Math.random() * (1 - width);
		this.targetStart = center - width / 2;
		this.targetEnd = center + width / 2;
	}

	AkibaLocationGame.prototype.renderTiming = function () {
		if (!this.timingTargetElement || !this.timingMarkerElement) return;
		this.timingTargetElement.style.left = (this.targetStart * 100) + "%";
		this.timingTargetElement.style.width = ((this.targetEnd - this.targetStart) * 100) + "%";
		this.timingMarkerElement.style.left = "calc(" + (this.markerValue * 100) + "% - 2px)";
	}

	AkibaLocationGame.prototype.takeTimingAttempt = function () {
		if (this.ended || this.timingAttempts >= this.config.attempts) return;
		var hit = this.markerValue >= this.targetStart && this.markerValue <= this.targetEnd;
		this.timingAttempts++;
		if (hit) {
			this.timingHits++;
			this.score += 200;
			this.status.textContent = "命中！";
		} else {
			this.status.textContent = "差一點，再抓準時機。";
		}
		if (this.timingAttempts >= this.config.attempts) {
			this.finish(this.timingHits >= this.config.required ? "win" : "lose", "attemptsComplete");
			return;
		}
		this.randomizeTimingTarget();
		this.renderTiming();
		this.updateProgress();
	}

	AkibaLocationGame.prototype.startBalance = function () {
		var self = this;
		var theme = this.theme;
		this.balanceValue = this.config.startValue;
		this.stableElapsed = 0;
		var wrap = makeModeFrame(theme, "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px");
		var value = document.createElement("div");
		value.style.cssText = "font-size:34px;font-weight:900;color:#f8fafc;text-shadow:0 0 14px " + theme.soft;
		wrap.appendChild(value);
		var gauge = document.createElement("div");
		gauge.style.cssText = [
			"position:relative", "width:94%", "height:62px", "border-radius:14px",
			"background:linear-gradient(90deg,#1e293b,#0f172a)", "border:2px solid " + theme.accent,
			"overflow:hidden", "box-shadow:inset 0 0 24px rgba(2,6,23,0.6),0 0 20px " + theme.soft
		].join(";");
		var target = document.createElement("div");
		target.style.cssText = "position:absolute;top:0;height:100%;background:linear-gradient(90deg,rgba(34,197,94,0.35),rgba(134,239,172,0.82),rgba(34,197,94,0.35))";
		var marker = document.createElement("div");
		marker.style.cssText = "position:absolute;top:0;width:7px;height:100%;background:#facc15;box-shadow:0 0 14px #facc15";
		gauge.appendChild(target);
		gauge.appendChild(marker);
		wrap.appendChild(gauge);
		var controls = document.createElement("div");
		controls.style.cssText = "display:flex;gap:8px;width:94%";
		var low = makeButton(this.config.lowLabel, "#2563eb");
		var high = makeButton(this.config.highLabel, "#dc2626");
		themedButton(low, theme, "normal");
		themedButton(high, theme, "normal");
		low.style.flex = high.style.flex = "1";
		low.onclick = function () { self.adjustBalance(-self.config.step); };
		high.onclick = function () { self.adjustBalance(self.config.step); };
		controls.appendChild(low);
		controls.appendChild(high);
		wrap.appendChild(controls);
		this.board.appendChild(wrap);
		this.balanceValueElement = value;
		this.balanceTargetElement = target;
		this.balanceMarkerElement = marker;
		this.renderBalance();
		this.intervals.push(setInterval(function () { self.tickBalance(); }, 250));
	}

	AkibaLocationGame.prototype.adjustBalance = function (amount) {
		if (this.ended) return;
		this.balanceValue += amount;
		this.renderBalance();
	}

	AkibaLocationGame.prototype.tickBalance = function () {
		if (this.ended) return;
		this.balanceValue += this.config.drift + (Math.random() - 0.5) * 0.5;
		if (this.balanceValue >= this.config.targetMin && this.balanceValue <= this.config.targetMax) {
			this.stableElapsed += 250;
			this.score += 5;
		} else {
			this.stableElapsed = Math.max(0, this.stableElapsed - 125);
		}
		if (this.balanceValue < this.config.safeMin || this.balanceValue > this.config.safeMax) {
			this.finish("lose", "unsafeValue");
			return;
		}
		if (this.stableElapsed >= this.config.stableMs) {
			this.finish("win", "stable");
			return;
		}
		this.renderBalance();
		this.updateProgress();
	}

	AkibaLocationGame.prototype.renderBalance = function () {
		if (!this.balanceValueElement) return;
		var range = this.config.safeMax - this.config.safeMin;
		var marker = Math.max(0, Math.min(1, (this.balanceValue - this.config.safeMin) / range));
		var targetStart = (this.config.targetMin - this.config.safeMin) / range;
		var targetWidth = (this.config.targetMax - this.config.targetMin) / range;
		this.balanceValueElement.textContent = this.balanceValue.toFixed(1) + this.config.unitLabel;
		this.balanceMarkerElement.style.left = "calc(" + (marker * 100) + "% - 3px)";
		this.balanceTargetElement.style.left = (targetStart * 100) + "%";
		this.balanceTargetElement.style.width = (targetWidth * 100) + "%";
	}

	AkibaLocationGame.prototype.startTileMatch = function () {
		var self = this;
		var theme = this.theme;
		this.tilePairs = 0;
		this.tileSelected = null;
		this.tileRows = [];
		var symbols = shuffle(this.config.symbols);
		for (var row = 0; row < 3; row++) {
			var a = symbols[row * 3];
			var b = symbols[row * 3 + 1];
			var c = symbols[row * 3 + 2];
			this.tileRows.push([a, b, c, c, b, a].map(function (value) { return { value: value, removed: false, button: null }; }));
		}
		var grid = makeModeFrame(theme, "display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(3,1fr);gap:8px");
		this.tileRows.forEach(function (tiles, rowIndex) {
			tiles.forEach(function (tile, colIndex) {
				var button = makeButton(tile.value, theme.card);
				themedButton(button, theme, "card");
				button.style.color = theme.cardText;
				button.style.fontWeight = "900";
				button.style.border = "2px solid rgba(120,53,15,0.42)";
				button.style.borderRadius = "10px";
				button.dataset.row = rowIndex;
				button.dataset.col = colIndex;
				button.onclick = function () { self.chooseTile(rowIndex, colIndex); };
				tile.button = button;
				grid.appendChild(button);
			});
		});
		this.board.appendChild(grid);
		this.refreshTileAvailability();
	}

	AkibaLocationGame.prototype.isTileExposed = function (rowIndex, colIndex) {
		var row = this.tileRows[rowIndex];
		if (!row || row[colIndex].removed) return false;
		var left = -1;
		var right = -1;
		for (var i = 0; i < row.length; i++) {
			if (!row[i].removed) { if (left < 0) left = i; right = i; }
		}
		return colIndex === left || colIndex === right;
	}

	AkibaLocationGame.prototype.refreshTileAvailability = function () {
		for (var row = 0; row < this.tileRows.length; row++) {
			for (var col = 0; col < this.tileRows[row].length; col++) {
				var tile = this.tileRows[row][col];
				if (tile.removed) continue;
				var exposed = this.isTileExposed(row, col);
				tile.button.disabled = !exposed;
				tile.button.style.opacity = exposed ? "1" : "0.45";
			}
		}
	}

	AkibaLocationGame.prototype.chooseTile = function (rowIndex, colIndex) {
		if (this.ended || !this.isTileExposed(rowIndex, colIndex)) return;
		var tile = this.tileRows[rowIndex][colIndex];
		if (!this.tileSelected) {
			this.tileSelected = { row: rowIndex, col: colIndex, tile: tile };
			tile.button.style.outline = "3px solid #38bdf8";
			return;
		}
		var selected = this.tileSelected;
		selected.tile.button.style.outline = "none";
		this.tileSelected = null;
		if (selected.row === rowIndex && selected.col === colIndex) return;
		if (selected.tile.value !== tile.value) {
			this.mistakes++;
			this.status.textContent = "兩張牌不同。";
			if (this.mistakes >= this.config.mistakeLimit) this.finish("lose", "mistakes");
			this.updateProgress();
			return;
		}
		selected.tile.removed = true;
		tile.removed = true;
		selected.tile.button.style.visibility = "hidden";
		tile.button.style.visibility = "hidden";
		this.tilePairs++;
		this.score += 180;
		this.refreshTileAvailability();
		if (this.tilePairs >= 9) this.finish("win", "clear");
		this.updateProgress();
	}

	AkibaLocationGame.prototype.addTimeout = function (callback, delay) {
		var id = setTimeout(callback, delay);
		this.timeouts.push(id);
		return id;
	}

	AkibaLocationGame.prototype.clearAsync = function () {
		for (var i = 0; i < this.intervals.length; i++) clearInterval(this.intervals[i]);
		for (var j = 0; j < this.timeouts.length; j++) clearTimeout(this.timeouts[j]);
		this.intervals = [];
		this.timeouts = [];
	}

	AkibaLocationGame.prototype.finish = function (result, reason) {
		var self = this;
		if (this.ended) return;
		this.ended = true;
		this.clearAsync();
		this.result = {
			result: result,
			reason: reason,
			score: Math.max(0, Math.round(this.score + Math.max(0, this.secondsLeft) * (result === "win" ? 5 : 0))),
			locationId: this.locationId,
			gameTitle: this.config ? this.config.title : this.locationId,
			secondsLeft: Math.max(0, this.secondsLeft)
		};
		if (this.status) {
			this.status.textContent = result === "win" ? "挑戰成功！按下返回即可回到秋葉原。" : result === "lose" ? "挑戰結束，這次沒有通關。" : "小遊戲發生錯誤。";
			this.status.style.color = result === "win" ? "#86efac" : "#fca5a5";
		}
		if (this.board) this.board.style.opacity = "0.55";
		if (this.footer) {
			this.footer.innerHTML = "";
			var back = makeButton("返回地圖", result === "win" ? "#15803d" : "#475569");
			back.style.flex = "1";
			back.onclick = function () { self.destroy(self.result); };
			this.footer.appendChild(back);
		}
		this.updateProgress();
		this.applyResponsiveLayout();
	}

	AkibaLocationGame.prototype.destroy = function (result) {
		if (this.destroyed) return;
		this.destroyed = true;
		this.clearAsync();
		if (this.resizeHandler) window.removeEventListener("resize", this.resizeHandler);
		if (this.overlay && this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
		if (!this.lockedBeforeStart) core.unlockControl();
		this.onFinish(result || this.result || { result: "cancel", reason: "destroy", score: this.score, locationId: this.locationId });
	}

	window.MotaMiniGames.akibaLocation = {
		start: function (options, onFinish) {
			var game = new AkibaLocationGame(options, onFinish);
			game.start();
			return game;
		},
		getConfig: function (locationId) {
			return CONFIGS[locationId] ? clone(CONFIGS[locationId]) : null;
		},
		listLocationIds: function () {
			return Object.keys(CONFIGS);
		}
	};
})();
