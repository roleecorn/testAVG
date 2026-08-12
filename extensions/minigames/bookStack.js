(function () {
	"use strict";

	window.MotaMiniGames = window.MotaMiniGames || {};

	var WORLD_WIDTH = 480;
	var WORLD_HEIGHT = 520;
	var FLOOR_Y = 480;
	var BOOK_COLORS = [
		{ cover: "#cf4f47", pages: "#fff1cf", pageLine: "#d7b986", accent: "#7f1d1d", ribbon: "#facc15" },
		{ cover: "#287a78", pages: "#f6edcf", pageLine: "#c8ad7e", accent: "#134e4a", ribbon: "#f97316" },
		{ cover: "#d59a28", pages: "#fff8dc", pageLine: "#d8bd80", accent: "#854d0e", ribbon: "#b91c1c" },
		{ cover: "#596fb0", pages: "#f5eedb", pageLine: "#c4ae86", accent: "#312e81", ribbon: "#f59e0b" },
		{ cover: "#8f5a9f", pages: "#fff4df", pageLine: "#d0b484", accent: "#581c87", ribbon: "#22c55e" },
		{ cover: "#5d8b4b", pages: "#f5efd4", pageLine: "#c7b082", accent: "#365314", ribbon: "#ef4444" }
	];

	function makeButton(label, background) {
		var button = document.createElement("button");
		button.type = "button";
		button.textContent = label;
		button.style.cssText = [
			"min-height:38px", "border:1px solid rgba(255,255,255,0.28)", "border-radius:8px",
			"padding:5px 12px", "background:" + background, "color:#fff", "font-weight:900",
			"cursor:pointer", "touch-action:manipulation", "-webkit-tap-highlight-color:transparent",
			"box-sizing:border-box"
		].join(";");
		return button;
	}

	function clamp(value, min, max) {
		return Math.max(min, Math.min(max, value));
	}

	function BookStackGame(options, onFinish) {
		this.options = options || {};
		this.onFinish = onFinish || function () {};
		this.title = this.options.title || "疊書挑戰";
		this.minClearBooks = Math.max(1, Number(this.options.minClearBooks) || 8);
		this.maxSeconds = Math.max(15, Number(this.options.seconds) || 90);
		this.random = typeof this.options.random === "function" ? this.options.random : Math.random;
		this.placedBooks = [];
		this.movingBook = null;
		this.nextDirection = 1;
		this.elapsedMs = 0;
		this.secondsLeft = this.maxSeconds;
		this.score = 0;
		this.stabilityRisk = 0;
		this.wobbleStrength = 0;
		this.wobblePhase = 0;
		this.started = false;
		this.collapsing = false;
		this.collapseElapsed = 0;
		this.collapseDirection = 1;
		this.collapseReason = null;
		this.ended = false;
		this.destroyed = false;
		this.result = null;
		this.lockedBeforeStart = false;
		this.overlay = null;
		this.panel = null;
		this.board = null;
		this.canvas = null;
		this.context = null;
		this.progress = null;
		this.status = null;
		this.footer = null;
		this.dropButton = null;
		this.resizeHandler = null;
		this.keyHandler = null;
		this.pointerHandler = null;
		this.rafId = null;
		this.lastFrameAt = 0;
	}

	BookStackGame.prototype.start = function () {
		this.lockedBeforeStart = !!(core.status && core.status.lockControl);
		core.lockControl();
		this.resetRun();
		this.createOverlay();
		this.started = true;
		this.lastFrameAt = Date.now();
		this.updateProgress();
		this.draw();
		this.beginLoop();
	}

	BookStackGame.prototype.resetRun = function () {
		this.placedBooks = [];
		this.nextDirection = this.random() < 0.5 ? 1 : -1;
		this.elapsedMs = 0;
		this.secondsLeft = this.maxSeconds;
		this.score = 0;
		this.stabilityRisk = 0;
		this.wobbleStrength = 0;
		this.wobblePhase = 0;
		this.collapsing = false;
		this.collapseElapsed = 0;
		this.spawnMovingBook();
	}

	BookStackGame.prototype.makeBook = function (index) {
		var width = Math.round(132 + this.random() * 66);
		var height = Math.round(22 + this.random() * 10);
		return {
			x: 0,
			y: FLOOR_Y - height,
			width: width,
			height: height,
			weight: width * height,
			style: BOOK_COLORS[index % BOOK_COLORS.length],
			angle: 0
		};
	}

	BookStackGame.prototype.spawnMovingBook = function () {
		var book = this.makeBook(this.placedBooks.length);
		var topY = this.placedBooks.length ? this.placedBooks[this.placedBooks.length - 1].y : FLOOR_Y;
		book.y = topY - book.height;
		book.direction = this.nextDirection;
		book.speed = Math.min(265, 108 + this.placedBooks.length * 11);
		book.x = book.direction > 0 ? -book.width - 8 : WORLD_WIDTH + 8;
		this.nextDirection *= -1;
		this.movingBook = book;
	}

	BookStackGame.prototype.createOverlay = function () {
		var self = this;
		var overlay = document.createElement("div");
		overlay.id = "bookStackMiniGame";
		overlay.setAttribute("role", "dialog");
		overlay.setAttribute("aria-label", this.title);
		overlay.style.cssText = [
			"position:fixed", "left:0", "top:0", "right:0", "bottom:0", "width:100vw", "height:100vh", "z-index:10000",
			"display:flex", "align-items:center", "justify-content:center", "overflow:hidden",
			"background:radial-gradient(circle at 50% 35%,rgba(180,113,48,0.22),rgba(28,17,13,0.97) 68%),#1c110d",
			"font-family:Arial,'Microsoft JhengHei','Microsoft YaHei',sans-serif", "color:#fff7e6",
			"pointer-events:auto", "touch-action:none"
		].join(";");

		var panel = document.createElement("div");
		panel.style.cssText = [
			"width:900px", "height:700px", "box-sizing:border-box", "padding:14px", "border-radius:10px",
			"border:2px solid rgba(245,190,104,0.48)", "background:linear-gradient(160deg,#593622,#271711 72%,#160d0a)",
			"box-shadow:0 20px 54px rgba(0,0,0,0.7),inset 0 0 34px rgba(245,158,11,0.1)",
			"display:flex", "flex-direction:column", "gap:5px", "overflow:hidden"
		].join(";");

		var header = document.createElement("div");
		header.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:8px;flex:0 0 auto;min-height:34px";
		var title = document.createElement("div");
		title.textContent = this.title;
		title.style.cssText = "font-size:24px;font-weight:900;color:#f8cf87;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-shadow:0 2px 8px rgba(0,0,0,0.55)";
		header.appendChild(title);
		var close = makeButton("×", "#692f2f");
		close.title = "取消並返回地圖";
		close.setAttribute("aria-label", "取消並返回地圖");
		close.style.minWidth = "38px";
		close.style.padding = "0";
		close.style.fontSize = "22px";
		close.onclick = function () {
			self.destroy(self.result || { result: "cancel", reason: "close", score: self.score, books: self.placedBooks.length });
		};
		header.appendChild(close);
		panel.appendChild(header);

		var progress = document.createElement("div");
		progress.style.cssText = "flex:0 0 auto;min-height:22px;font-size:14px;line-height:1.2;color:#fde68a;white-space:pre-line;overflow:hidden";
		panel.appendChild(progress);

		var status = document.createElement("div");
		status.textContent = "書本從兩側滑入時點擊放下；疊滿 " + this.minClearBooks + " 本後，撐到倒塌即可通關。";
		status.style.cssText = "flex:0 0 auto;min-height:32px;font-size:14px;line-height:1.25;color:#f5e7d0;overflow:hidden";
		panel.appendChild(status);

		var board = document.createElement("div");
		board.style.cssText = "position:relative;flex:1 1 auto;min-height:0;overflow:hidden;border:2px solid #8b5e34;border-radius:9px;background:#ead8b7;box-shadow:inset 0 0 34px rgba(75,44,22,0.28)";
		var canvas = document.createElement("canvas");
		canvas.width = WORLD_WIDTH;
		canvas.height = WORLD_HEIGHT;
		canvas.setAttribute("aria-label", "疊書區，點擊放下滑動中的書本");
		canvas.style.cssText = "display:block;width:100%;height:100%;cursor:pointer;touch-action:none";
		board.appendChild(canvas);
		panel.appendChild(board);

		var footer = document.createElement("div");
		footer.style.cssText = "display:flex;gap:6px;flex:0 0 auto;min-height:38px";
		var drop = makeButton("放下書本", "#a45b28");
		drop.style.flex = "1";
		drop.onclick = function () { self.dropBook(); };
		footer.appendChild(drop);
		panel.appendChild(footer);

		overlay.appendChild(panel);
		(document.body || core.dom.gameDraw).appendChild(overlay);
		this.overlay = overlay;
		this.panel = panel;
		this.board = board;
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.progress = progress;
		this.status = status;
		this.footer = footer;
		this.dropButton = drop;

		this.pointerHandler = function (event) {
			if (event && event.preventDefault) event.preventDefault();
			self.dropBook();
		};
		canvas.addEventListener("pointerdown", this.pointerHandler);
		this.keyHandler = function (event) {
			if (event.key === "Escape") self.destroy({ result: "cancel", reason: "escape", score: self.score, books: self.placedBooks.length });
			if (event.key === " " || event.key === "Enter") {
				event.preventDefault();
				self.dropBook();
			}
		};
		document.addEventListener("keydown", this.keyHandler);
		this.resizeHandler = function () {
			self.applyResponsiveLayout();
			self.updateProgress();
			self.draw();
		};
		window.addEventListener("resize", this.resizeHandler);
		this.applyResponsiveLayout();
	}

	BookStackGame.prototype.applyResponsiveLayout = function () {
		if (!this.overlay || !this.panel) return;
		var width = this.overlay.clientWidth || window.innerWidth || 416;
		var height = this.overlay.clientHeight || window.innerHeight || 416;
		var margin = Math.max(8, Math.min(width, height) * 0.035);
		var panelWidth = Math.min(Math.max(180, Math.floor(width - margin * 2)), 980);
		var panelHeight = Math.min(Math.max(180, Math.floor(height - margin * 2)), 720);
		var unit = Math.min(panelWidth, panelHeight) / 13;
		this.panel.style.width = panelWidth + "px";
		this.panel.style.height = panelHeight + "px";
		this.panel.style.padding = Math.max(8, unit * 0.28) + "px";
		this.panel.style.gap = Math.max(3, unit * 0.14) + "px";
		var buttons = this.panel.querySelectorAll("button");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.fontSize = Math.max(9, unit * 0.42) + "px";
			buttons[i].style.minHeight = Math.max(32, unit * 1.12) + "px";
		}
		if (this.progress) {
			this.progress.style.fontSize = Math.max(10, unit * 0.38) + "px";
			this.progress.style.minHeight = panelWidth < 300 ? Math.max(32, unit * 1.36) + "px" : Math.max(20, unit * 0.72) + "px";
		}
	}

	BookStackGame.prototype.beginLoop = function () {
		var self = this;
		function frame() {
			if (self.ended || self.destroyed) return;
			var now = Date.now();
			var dt = Math.min(0.034, Math.max(0, (now - self.lastFrameAt) / 1000));
			self.lastFrameAt = now;
			self.step(dt);
			if (!self.ended && !self.destroyed) self.rafId = window.requestAnimationFrame(frame);
		}
		this.rafId = window.requestAnimationFrame(frame);
	}

	BookStackGame.prototype.step = function (dt) {
		if (this.ended || !this.started) return;
		this.elapsedMs += dt * 1000;
		this.secondsLeft = Math.max(0, Math.ceil(this.maxSeconds - this.elapsedMs / 1000));
		this.wobblePhase += dt * (2.2 + this.placedBooks.length * 0.08);

		if (this.collapsing) {
			this.collapseElapsed += dt;
			if (this.collapseElapsed >= 1.15) {
				this.finishCollapse();
				return;
			}
		} else {
			this.moveIncomingBook(dt);
			if (this.placedBooks.length > 1) {
				var liveRisk = this.stabilityRisk + Math.abs(Math.sin(this.wobblePhase)) * this.wobbleStrength;
				if (liveRisk >= 1) this.beginCollapse("imbalance", this.getTowerLeanDirection());
			}
			if (!this.collapsing && this.elapsedMs >= this.maxSeconds * 1000) {
				this.beginCollapse("timeout", this.getTowerLeanDirection());
			}
		}
		this.updateProgress();
		this.draw();
	}

	BookStackGame.prototype.moveIncomingBook = function (dt) {
		if (!this.movingBook) return;
		var book = this.movingBook;
		book.x += book.direction * book.speed * dt;
		if (book.direction > 0 && book.x > WORLD_WIDTH + 8) book.x = -book.width - 8;
		if (book.direction < 0 && book.x + book.width < -8) book.x = WORLD_WIDTH + 8;
	}

	BookStackGame.prototype.getSupport = function () {
		if (this.placedBooks.length) return this.placedBooks[this.placedBooks.length - 1];
		return { x: 90, y: FLOOR_Y, width: 300, height: 0, weight: 1 };
	}

	BookStackGame.prototype.dropBook = function () {
		if (this.ended || this.collapsing || !this.movingBook) return;
		var book = this.movingBook;
		var support = this.getSupport();
		var overlapLeft = Math.max(book.x, support.x);
		var overlapRight = Math.min(book.x + book.width, support.x + support.width);
		var overlap = overlapRight - overlapLeft;
		if (overlap <= Math.max(10, book.width * 0.16)) {
			this.movingBook = null;
			this.beginCollapse("miss", book.x + book.width / 2 < support.x + support.width / 2 ? -1 : 1);
			return;
		}

		book.x = clamp(book.x, -book.width * 0.45, WORLD_WIDTH - book.width * 0.55);
		book.direction = 0;
		this.placedBooks.push(book);
		this.movingBook = null;
		var centerError = Math.abs((book.x + book.width / 2) - (support.x + support.width / 2));
		var precision = clamp(1 - centerError / Math.max(1, (book.width + support.width) / 2), 0, 1);
		this.score += Math.round(70 + precision * 80 + this.placedBooks.length * 5);
		this.calculateStability();
		if (this.stabilityRisk >= 1) {
			this.beginCollapse("imbalance", this.getTowerLeanDirection());
			return;
		}
		this.spawnMovingBook();
		this.status.textContent = precision > 0.88 ? "漂亮！書脊和支撐面幾乎完全對齊。" : "有點偏了，注意下一本書的陰影落點。";
		this.updateProgress();
		this.draw();
	}

	BookStackGame.prototype.calculateStability = function () {
		var books = this.placedBooks;
		var worstRisk = 0;
		for (var supportIndex = -1; supportIndex < books.length - 1; supportIndex++) {
			var support = supportIndex < 0 ? { x: 90, width: 300 } : books[supportIndex];
			var firstAbove = books[supportIndex + 1];
			var contactLeft = Math.max(support.x, firstAbove.x);
			var contactRight = Math.min(support.x + support.width, firstAbove.x + firstAbove.width);
			var contactHalf = Math.max(1, (contactRight - contactLeft) / 2);
			var totalWeight = 0;
			var weightedCenter = 0;
			for (var i = supportIndex + 1; i < books.length; i++) {
				totalWeight += books[i].weight;
				weightedCenter += (books[i].x + books[i].width / 2) * books[i].weight;
			}
			var center = weightedCenter / Math.max(1, totalWeight);
			var contactCenter = (contactLeft + contactRight) / 2;
			var layerRisk = Math.abs(center - contactCenter) / contactHalf;
			worstRisk = Math.max(worstRisk, layerRisk);
		}
		this.stabilityRisk = worstRisk;
		this.wobbleStrength = Math.min(0.42, 0.018 * books.length + worstRisk * 0.18);
	}

	BookStackGame.prototype.getTowerLeanDirection = function () {
		if (!this.placedBooks.length) return this.collapseDirection || 1;
		var totalWeight = 0;
		var weightedCenter = 0;
		for (var i = 0; i < this.placedBooks.length; i++) {
			totalWeight += this.placedBooks[i].weight;
			weightedCenter += (this.placedBooks[i].x + this.placedBooks[i].width / 2) * this.placedBooks[i].weight;
		}
		return weightedCenter / Math.max(1, totalWeight) < WORLD_WIDTH / 2 ? -1 : 1;
	}

	BookStackGame.prototype.beginCollapse = function (reason, direction) {
		if (this.collapsing || this.ended) return;
		this.collapsing = true;
		this.collapseElapsed = 0;
		this.collapseReason = reason || "topple";
		this.collapseDirection = direction || 1;
		this.movingBook = null;
		this.status.textContent = this.placedBooks.length >= this.minClearBooks ? "達標了！書塔轟然倒下。" : "失去平衡！書塔倒下了……";
		this.status.style.color = this.placedBooks.length >= this.minClearBooks ? "#bbf7d0" : "#fecaca";
		if (this.dropButton) this.dropButton.textContent = "書塔倒塌中……";
	}

	BookStackGame.prototype.finishCollapse = function () {
		var cleared = this.placedBooks.length >= this.minClearBooks;
		this.finish(cleared ? "win" : "lose", this.collapseReason || "topple");
	}

	BookStackGame.prototype.updateProgress = function () {
		if (!this.progress) return;
		var stability = Math.round(clamp(1 - this.stabilityRisk - this.wobbleStrength, 0, 1) * 100);
		var narrow = (this.overlay && (this.overlay.clientWidth || window.innerWidth || 416) < 300);
		this.progress.textContent = narrow
			? "書本 " + this.placedBooks.length + "/" + this.minClearBooks + "　穩定 " + stability + "%\n剩餘 " + this.secondsLeft + " 秒　得分 " + this.score
			: "書本 " + this.placedBooks.length + "/" + this.minClearBooks + "　穩定度 " + stability + "%　剩餘 " + this.secondsLeft + " 秒　得分 " + this.score;
	}

	BookStackGame.prototype.getCameraOffset = function () {
		var topY = this.movingBook ? this.movingBook.y : (this.placedBooks.length ? this.placedBooks[this.placedBooks.length - 1].y : FLOOR_Y);
		return Math.max(0, 135 - topY);
	}

	BookStackGame.prototype.drawLandingGuide = function (ctx, support, movingBook) {
		var guideY = support.y - movingBook.height;
		var guideW = Math.min(movingBook.width, support.width);
		var guideX = support.x + support.width / 2 - guideW / 2;
		ctx.save();
		ctx.globalAlpha = 0.72;
		ctx.fillStyle = "rgba(96,54,28,0.2)";
		ctx.fillRect(guideX, guideY + movingBook.height + 3, guideW, 6);
		ctx.strokeStyle = "rgba(80,47,25,0.62)";
		ctx.setLineDash([7, 6]);
		ctx.strokeRect(guideX, guideY, guideW, movingBook.height);
		ctx.setLineDash([]);
		ctx.fillStyle = "rgba(255,244,220,0.48)";
		ctx.fillRect(guideX + 8, guideY + 5, Math.max(0, guideW - 16), Math.max(3, movingBook.height - 10));
		ctx.restore();
	}

	BookStackGame.prototype.drawBook = function (ctx, book) {
		var x = book.x;
		var y = book.y;
		var w = book.width;
		var h = book.height;
		var sideDepth = Math.max(4, Math.min(9, h * 0.28));
		var spineW = Math.max(9, Math.min(18, w * 0.11));
		var coverInset = Math.max(5, Math.min(10, h * 0.28));
		ctx.fillStyle = "rgba(38,22,14,0.28)";
		ctx.fillRect(x + 7, y + h - 1, w - 5, sideDepth + 3);
		ctx.fillStyle = book.style.accent;
		ctx.fillRect(x + 3, y + h - sideDepth, w - 1, sideDepth);
		ctx.fillStyle = "rgba(255,255,255,0.1)";
		ctx.fillRect(x + 8, y + h - sideDepth + 1, w - 15, 1);
		ctx.fillStyle = book.style.cover;
		ctx.fillRect(x, y, w, h);
		ctx.fillStyle = "rgba(255,255,255,0.18)";
		ctx.fillRect(x + 3, y + 3, w - 6, 2);
		ctx.fillStyle = "rgba(0,0,0,0.16)";
		ctx.fillRect(x + 3, y + h - 5, w - 6, 2);

		ctx.fillStyle = book.style.pages;
		ctx.fillRect(x + spineW + 3, y + coverInset, w - spineW - coverInset - 4, Math.max(5, h - coverInset * 2));
		ctx.fillStyle = book.style.pageLine;
		for (var pageY = y + coverInset + 3; pageY < y + h - coverInset; pageY += 4) {
			ctx.fillRect(x + spineW + 8, pageY, Math.max(0, w - spineW - coverInset - 13), 1);
		}

		ctx.fillStyle = book.style.accent;
		ctx.fillRect(x, y, spineW, h);
		ctx.fillRect(x + w - 5, y, 5, h);
		ctx.fillRect(x, y, w, 4);
		ctx.fillRect(x, y + h - 4, w, 4);
		ctx.fillStyle = "rgba(255,255,255,0.2)";
		ctx.fillRect(x + Math.max(3, spineW * 0.36), y + 5, 2, Math.max(0, h - 10));
		ctx.fillStyle = "rgba(0,0,0,0.14)";
		ctx.fillRect(x + spineW + 1, y + 4, 2, Math.max(0, h - 8));
		ctx.fillStyle = book.style.ribbon;
		ctx.fillRect(x + w * 0.72, y + 4, Math.max(3, w * 0.035), Math.max(5, h - 8));
		ctx.fillStyle = "rgba(255,255,255,0.16)";
		ctx.fillRect(x + spineW + 10, y + 6, Math.max(12, w * 0.22), 3);
	}

	BookStackGame.prototype.draw = function () {
		if (!this.context) return;
		var ctx = this.context;
		ctx.clearRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
		var sky = ctx.createLinearGradient ? ctx.createLinearGradient(0, 0, 0, WORLD_HEIGHT) : null;
		if (sky && sky.addColorStop) {
			sky.addColorStop(0, "#f8efd9");
			sky.addColorStop(1, "#c99a63");
			ctx.fillStyle = sky;
		} else ctx.fillStyle = "#ead8b7";
		ctx.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

		ctx.fillStyle = "rgba(103,62,32,0.13)";
		for (var shelfY = 70; shelfY < WORLD_HEIGHT; shelfY += 105) {
			ctx.fillRect(0, shelfY, WORLD_WIDTH, 7);
			for (var shelfX = 12; shelfX < WORLD_WIDTH; shelfX += 31) {
				var bookHeight = 42 + ((shelfX + shelfY) % 31);
				ctx.fillRect(shelfX, shelfY - bookHeight, 19, bookHeight);
			}
		}

		var cameraOffset = this.getCameraOffset();
		ctx.save();
		ctx.translate(0, cameraOffset);
		ctx.fillStyle = "#5b371f";
		ctx.fillRect(0, FLOOR_Y, WORLD_WIDTH, 40);
		ctx.fillStyle = "#a86f3f";
		ctx.fillRect(0, FLOOR_Y, WORLD_WIDTH, 8);
		ctx.fillStyle = "#714528";
		ctx.fillRect(90, FLOOR_Y - 10, 300, 10);

		if (this.movingBook && !this.collapsing) this.drawLandingGuide(ctx, this.getSupport(), this.movingBook);

		var swayAngle = Math.sin(this.wobblePhase) * this.wobbleStrength * 0.12;
		var collapseProgress = this.collapsing ? clamp(this.collapseElapsed / 1.15, 0, 1) : 0;
		var towerAngle = swayAngle + this.collapseDirection * collapseProgress * collapseProgress * 1.18;
		var towerDrop = collapseProgress * collapseProgress * 175;
		ctx.save();
		ctx.translate(WORLD_WIDTH / 2, FLOOR_Y);
		ctx.rotate(towerAngle);
		ctx.translate(-WORLD_WIDTH / 2, -FLOOR_Y + towerDrop);
		for (var i = 0; i < this.placedBooks.length; i++) {
			var book = this.placedBooks[i];
			ctx.save();
			if (collapseProgress > 0) {
				var scatter = collapseProgress * collapseProgress * (i + 1) * 3.2;
				ctx.translate(this.collapseDirection * scatter, -scatter * 0.22);
				ctx.rotate(this.collapseDirection * collapseProgress * i * 0.025);
			}
			this.drawBook(ctx, book);
			ctx.restore();
		}
		ctx.restore();

		if (this.movingBook && !this.collapsing) {
			ctx.save();
			ctx.globalAlpha = 0.96;
			ctx.fillStyle = "rgba(47,29,18,0.22)";
			ctx.fillRect(this.movingBook.x + 9, this.movingBook.y + this.movingBook.height + 4, this.movingBook.width - 8, 6);
			this.drawBook(ctx, this.movingBook);
			ctx.restore();
			ctx.strokeStyle = "rgba(121,72,37,0.42)";
			ctx.setLineDash([6, 7]);
			ctx.beginPath();
			ctx.moveTo(WORLD_WIDTH / 2, this.movingBook.y - 12);
			ctx.lineTo(WORLD_WIDTH / 2, FLOOR_Y);
			ctx.stroke();
			ctx.setLineDash([]);
		}
		ctx.restore();

		if (!this.placedBooks.length && !this.collapsing) {
			ctx.fillStyle = "rgba(48,29,19,0.78)";
			ctx.fillRect(105, 214, 270, 64);
			ctx.fillStyle = "#fff4dc";
			ctx.font = "bold 19px Arial,'Microsoft JhengHei'";
			ctx.textAlign = "center";
			ctx.fillText("對準桌面，點擊放下書本", WORLD_WIDTH / 2, 252);
		}
	}

	BookStackGame.prototype.finish = function (result, reason) {
		if (this.ended) return;
		this.ended = true;
		if (this.rafId !== null) window.cancelAnimationFrame(this.rafId);
		this.rafId = null;
		this.result = {
			result: result,
			reason: reason,
			score: Math.max(0, Math.round(this.score)),
			books: this.placedBooks.length,
			minClearBooks: this.minClearBooks,
			secondsLeft: this.secondsLeft,
			gameTitle: this.title
		};
		this.status.textContent = result === "win" ? "挑戰成功！你在倒塌前疊出了令人驚嘆的書塔。" : "書塔太早倒下了，再試著讓每本書的中心更接近。";
		this.status.style.color = result === "win" ? "#bbf7d0" : "#fecaca";
		this.footer.innerHTML = "";
		var self = this;
		var retry = makeButton("再疊一次", "#a45b28");
		retry.style.flex = "1";
		retry.onclick = function () { self.restart(); };
		var back = makeButton("返回地圖", result === "win" ? "#3f7d48" : "#66564c");
		back.style.flex = "1";
		back.onclick = function () { self.destroy(self.result); };
		this.footer.appendChild(retry);
		this.footer.appendChild(back);
		this.updateProgress();
		this.draw();
		this.applyResponsiveLayout();
	}

	BookStackGame.prototype.restart = function () {
		if (this.destroyed) return;
		this.ended = false;
		this.result = null;
		this.started = true;
		this.status.style.color = "#f5e7d0";
		this.status.textContent = "書本從兩側滑入時點擊放下；疊滿 " + this.minClearBooks + " 本後，撐到倒塌即可通關。";
		this.footer.innerHTML = "";
		var self = this;
		var drop = makeButton("放下書本", "#a45b28");
		drop.style.flex = "1";
		drop.onclick = function () { self.dropBook(); };
		this.footer.appendChild(drop);
		this.dropButton = drop;
		this.resetRun();
		this.lastFrameAt = Date.now();
		this.updateProgress();
		this.draw();
		this.applyResponsiveLayout();
		this.beginLoop();
	}

	BookStackGame.prototype.destroy = function (result) {
		if (this.destroyed) return;
		this.destroyed = true;
		if (this.rafId !== null) window.cancelAnimationFrame(this.rafId);
		this.rafId = null;
		if (this.canvas && this.pointerHandler) this.canvas.removeEventListener("pointerdown", this.pointerHandler);
		if (this.keyHandler) document.removeEventListener("keydown", this.keyHandler);
		if (this.resizeHandler) window.removeEventListener("resize", this.resizeHandler);
		if (this.overlay && this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
		if (!this.lockedBeforeStart) core.unlockControl();
		this.onFinish(result || this.result || { result: "cancel", reason: "destroy", score: this.score, books: this.placedBooks.length });
	}

	window.MotaMiniGames.bookStack = {
		start: function (options, onFinish) {
			var game = new BookStackGame(options, onFinish);
			game.start();
			return game;
		}
	};
})();
