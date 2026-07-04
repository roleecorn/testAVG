(function () {
	"use strict";

	window.MotaMiniGames = window.MotaMiniGames || {};

	function TicTacToeGame(options, onFinish) {
		this.options = options || {};
		this.onFinish = onFinish || function () {};
		this.board = ["", "", "", "", "", "", "", "", ""];
		this.turn = "X";
		this.ended = false;
		this.overlay = null;
		this.status = null;
		this.cells = [];
		this.lockedBeforeStart = false;
		this.keyHandler = null;
	}

	TicTacToeGame.prototype.start = function () {
		this.lockedBeforeStart = core.status.lockControl;
		core.lockControl();
		this.createOverlay();
		this.render();
	}

	TicTacToeGame.prototype.createOverlay = function () {
		var self = this;
		var overlay = document.createElement("div");
		overlay.id = "ticTacToeMiniGame";
		overlay.setAttribute("role", "dialog");
		overlay.setAttribute("aria-label", "Tic Tac Toe mini game");
		overlay.style.cssText = [
			"position:absolute",
			"left:0",
			"top:0",
			"width:100%",
			"height:100%",
			"z-index:220",
			"display:flex",
			"align-items:center",
			"justify-content:center",
			"background:rgba(8,12,18,0.78)",
			"font-family:Arial,'Microsoft JhengHei','Microsoft YaHei',sans-serif",
			"color:#f7f9fc",
			"pointer-events:auto"
		].join(";");

		var panel = document.createElement("div");
		panel.style.cssText = [
			"width:360px",
			"max-width:92%",
			"box-sizing:border-box",
			"padding:18px",
			"border:1px solid rgba(255,255,255,0.22)",
			"border-radius:8px",
			"background:#111827",
			"box-shadow:0 16px 40px rgba(0,0,0,0.42)"
		].join(";");

		var header = document.createElement("div");
		header.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px";

		var title = document.createElement("div");
		title.textContent = "圈圈叉叉";
		title.style.cssText = "font-size:20px;font-weight:700;line-height:1.2";
		header.appendChild(title);

		var close = document.createElement("button");
		close.type = "button";
		close.textContent = "x";
		close.title = "關閉";
		close.style.cssText = [
			"width:34px",
			"height:34px",
			"border:1px solid rgba(255,255,255,0.28)",
			"border-radius:6px",
			"background:#1f2937",
			"color:#fff",
			"font-size:22px",
			"line-height:28px",
			"cursor:pointer"
		].join(";");
		close.onclick = function () {
			self.destroy(self.result || { result: "cancel", reason: "close" });
		};
		header.appendChild(close);
		panel.appendChild(header);

		var status = document.createElement("div");
		status.style.cssText = "height:24px;margin-bottom:12px;font-size:14px;color:#cbd5e1";
		panel.appendChild(status);
		this.status = status;

		var board = document.createElement("div");
		board.style.cssText = [
			"display:grid",
			"grid-template-columns:repeat(3,1fr)",
			"gap:8px",
			"width:100%",
			"aspect-ratio:1/1"
		].join(";");
		for (var i = 0; i < 9; i++) {
			var cell = document.createElement("button");
			cell.type = "button";
			cell.dataset.index = i;
			cell.style.cssText = [
				"border:1px solid rgba(255,255,255,0.22)",
				"border-radius:8px",
				"background:#f8fafc",
				"color:#111827",
				"font-size:48px",
				"font-weight:800",
				"line-height:1",
				"cursor:pointer"
			].join(";");
			cell.onclick = function () {
				self.play(parseInt(this.dataset.index));
			};
			this.cells.push(cell);
			board.appendChild(cell);
		}
		panel.appendChild(board);

		var footer = document.createElement("div");
		footer.style.cssText = "display:flex;gap:8px;margin-top:14px";

		var restart = document.createElement("button");
		restart.type = "button";
		restart.textContent = "重開";
		restart.style.cssText = this.buttonCss("#2563eb");
		restart.onclick = function () {
			self.reset();
		};
		footer.appendChild(restart);

		var finish = document.createElement("button");
		finish.type = "button";
		finish.textContent = "返回";
		finish.style.cssText = this.buttonCss("#475569");
		finish.onclick = function () {
			self.destroy(self.result || { result: "cancel", reason: "back" });
		};
		footer.appendChild(finish);
		panel.appendChild(footer);

		overlay.appendChild(panel);
		(core.dom.gameDraw || document.body).appendChild(overlay);
		this.overlay = overlay;

		this.keyHandler = function (e) {
			if (e.key === "Escape") self.destroy({ result: "cancel", reason: "escape" });
			var index = parseInt(e.key, 10);
			if (index >= 1 && index <= 9) self.play(index - 1);
		};
		document.addEventListener("keydown", this.keyHandler);
	}

	TicTacToeGame.prototype.buttonCss = function (background) {
		return [
			"flex:1",
			"height:38px",
			"border:0",
			"border-radius:6px",
			"background:" + background,
			"color:#fff",
			"font-size:15px",
			"cursor:pointer"
		].join(";");
	}

	TicTacToeGame.prototype.play = function (index) {
		if (this.ended || this.board[index]) return;
		this.board[index] = this.turn;
		var winner = this.getWinner();
		if (winner) {
			this.finish(winner);
			return;
		}
		if (this.board.every(function (value) { return value; })) {
			this.finish("draw");
			return;
		}
		this.turn = this.turn === "X" ? "O" : "X";
		this.render();
	}

	TicTacToeGame.prototype.getWinner = function () {
		var lines = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [2, 4, 6]
		];
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			var value = this.board[line[0]];
			if (value && value === this.board[line[1]] && value === this.board[line[2]]) return value;
		}
		return null;
	}

	TicTacToeGame.prototype.finish = function (winner) {
		this.ended = true;
		this.render();
		var result = winner === "draw" ? "draw" : "win";
		if (this.status) this.status.textContent = winner === "draw" ? "平手" : winner + " 獲勝";
		this.result = {
			result: result,
			winner: winner,
			score: winner === "draw" ? 0 : 1,
			board: this.board.slice()
		};
	}

	TicTacToeGame.prototype.render = function () {
		for (var i = 0; i < this.cells.length; i++) {
			var value = this.board[i];
			this.cells[i].textContent = value;
			this.cells[i].disabled = this.ended || !!value;
			this.cells[i].style.color = value === "O" ? "#be123c" : "#111827";
			this.cells[i].style.opacity = this.cells[i].disabled && !value ? "0.85" : "1";
		}
		if (this.status && !this.ended) this.status.textContent = this.turn + " 的回合。可點格子，也可按 1-9。";
	}

	TicTacToeGame.prototype.reset = function () {
		this.board = ["", "", "", "", "", "", "", "", ""];
		this.turn = "X";
		this.ended = false;
		this.result = null;
		this.render();
	}

	TicTacToeGame.prototype.destroy = function (result) {
		var finalResult = result || this.result || { result: "cancel", reason: "destroy" };
		if (this.keyHandler) document.removeEventListener("keydown", this.keyHandler);
		if (this.overlay && this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
		if (!this.lockedBeforeStart) core.unlockControl();
		this.onFinish(finalResult);
	}

	window.MotaMiniGames.ticTacToe = {
		start: function (options, onFinish) {
			var game = new TicTacToeGame(options, onFinish);
			game.start();
			return game;
		}
	};
})();
