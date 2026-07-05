(function () {
	"use strict";

	var DEFAULT_JSON = "project/timeline.json";
	var currentTimeline = null;
	var dataCache = {};

	function joinCss(list) {
		return list.join(";");
	}

	function resolveImage(image) {
		if (!image) return "";
		if (/^(https?:)?\/\//.test(image) || image.indexOf("data:") === 0) return image;
		if (image.indexOf("/") >= 0) return image;
		return "project/images/" + image;
	}

	function loadJson(path, callback) {
		path = path || DEFAULT_JSON;
		if (dataCache[path]) {
			callback(null, dataCache[path]);
			return;
		}
		var xhr = new XMLHttpRequest();
		xhr.open("GET", path + (path.indexOf("?") >= 0 ? "&" : "?") + "v=" + Date.now(), true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;
			if (xhr.status < 200 || xhr.status >= 300) {
				callback(new Error("timeline json load failed: " + xhr.status));
				return;
			}
			try {
				var data = JSON.parse(xhr.responseText);
				dataCache[path] = data;
				callback(null, data);
			} catch (e) {
				callback(e);
			}
		};
		xhr.onerror = function () {
			callback(new Error("timeline json load failed"));
		};
		xhr.send();
	}

	function normalizeData(raw) {
		var chapters = [];
		var nodes = [];
		var edges = [];
		var defaultGap = raw.nodeGap || 190;
		var defaultLaneGap = raw.laneGap || 132;
		var chapterPadding = raw.chapterPadding || 80;
		var x = raw.paddingLeft || 80;

		function addEdge(from, to) {
			if (!from || !to) return;
			edges.push({ from: from, to: to });
		}

		function addNode(node, chapter, localIndex, chapterIndex) {
			var copy = {};
			for (var key in node) copy[key] = node[key];
			copy.id = copy.id || copy.floorId || ("node_" + nodes.length);
			copy.chapterId = copy.chapterId || chapter.id || "";
			copy.chapterTitle = copy.chapterTitle || chapter.title || "";
			copy.floorId = copy.floorId || copy.id;
			copy.title = copy.title || copy.name || copy.floorId;
			copy.image = copy.image || chapter.image || raw.defaultImage || "";
			copy.lockedImage = copy.lockedImage || chapter.lockedImage || raw.lockedImage || copy.image;
			copy.loc = copy.loc || raw.defaultLoc || [6, 10];
			copy.direction = copy.direction || raw.defaultDirection || "up";
			copy.time = copy.time == null ? (raw.changeFloorTime == null ? 500 : raw.changeFloorTime) : copy.time;
			copy.x = copy.x == null ? x : copy.x;
			copy.y = copy.y == null ? (92 + (copy.lane || chapterIndex || 0) * defaultLaneGap) : copy.y;
			copy.index = nodes.length;
			nodes.push(copy);
			if (copy.next) {
				(copy.next instanceof Array ? copy.next : [copy.next]).forEach(function (to) {
					addEdge(copy.id, to);
				});
			}
			if (copy.parents) {
				(copy.parents instanceof Array ? copy.parents : [copy.parents]).forEach(function (from) {
					addEdge(from, copy.id);
				});
			}
			x = Math.max(x, copy.x + defaultGap);
		}

		if (raw.chapters instanceof Array) {
			raw.chapters.forEach(function (chapter, chapterIndex) {
				var startX = x;
				var chapterNodes = chapter.nodes || [];
				chapterNodes.forEach(function (node, localIndex) {
					addNode(node, chapter, localIndex, chapterIndex);
				});
				chapters.push({
					id: chapter.id || ("chapter_" + chapterIndex),
					title: chapter.title || "",
					x: startX,
					width: Math.max(defaultGap, x - startX - Math.floor(defaultGap / 2))
				});
				x += chapterPadding;
			});
		} else {
			(raw.nodes || []).forEach(function (node, localIndex) {
				addNode(node, {}, localIndex, 0);
			});
		}

		if (raw.edges instanceof Array) {
			raw.edges.forEach(function (edge) {
				if (edge instanceof Array) addEdge(edge[0], edge[1]);
				else addEdge(edge.from, edge.to);
			});
		}

		return {
			title: raw.title || "時間線",
			subtitle: raw.subtitle || "",
			nodes: nodes,
			edges: edges,
			chapters: chapters,
			width: Math.max(x + 160, 720),
			height: raw.height || 360,
			options: raw
		};
	}

	function isNodeUnlocked(node) {
		if (node.alwaysUnlocked) return true;
		if (node.unlockFlag) return !!core.getFlag(node.unlockFlag);
		return core.hasVisitedFloor(node.floorId);
	}

	function TimelineView(path, options, callback) {
		this.path = path || DEFAULT_JSON;
		this.options = options || {};
		this.callback = callback || function () {};
		this.overlay = null;
		this.viewport = null;
		this.content = null;
		this.svg = null;
		this.nodesById = {};
		this.nodeElements = [];
		this.lockedBeforeStart = false;
		this.data = null;
		this.offsetX = 0;
		this.minOffsetX = 0;
		this.maxOffsetX = 0;
		this.pointerId = null;
		this.pointerTarget = null;
		this.dragStartX = 0;
		this.dragStartOffset = 0;
		this.dragMoved = false;
		this.resizeHandler = null;
		this.keyHandler = null;
		this.selecting = false;
	}

	TimelineView.prototype.start = function () {
		var self = this;
		this.lockedBeforeStart = core.status.lockControl;
		core.lockControl();
		loadJson(this.path, function (error, raw) {
			if (error) {
				self.createError(error);
				return;
			}
			self.data = normalizeData(raw);
			self.createOverlay();
			self.render();
			self.centerCurrentFloor();
		});
	};

	TimelineView.prototype.createShell = function () {
		var overlay = document.createElement("div");
		overlay.id = "motaTimeline";
		overlay.setAttribute("role", "dialog");
		overlay.setAttribute("aria-label", "timeline");
		overlay.style.cssText = joinCss([
			"position:absolute",
			"left:0",
			"top:0",
			"width:100%",
			"height:100%",
			"z-index:230",
			"box-sizing:border-box",
			"padding:14px",
			"display:flex",
			"align-items:stretch",
			"justify-content:center",
			"overflow:hidden",
			"background:rgba(5,8,13,0.86)",
			"font-family:Arial,'Microsoft JhengHei','Microsoft YaHei',sans-serif",
			"color:#f8fafc",
			"pointer-events:auto",
			"user-select:none",
			"touch-action:none",
			"-webkit-tap-highlight-color:transparent"
		]);
		this.overlay = overlay;
		(core.dom.gameDraw || document.body).appendChild(overlay);
		return overlay;
	};

	TimelineView.prototype.createError = function (error) {
		var self = this;
		var overlay = this.createShell();
		var panel = document.createElement("div");
		panel.style.cssText = joinCss([
			"width:min(420px,100%)",
			"height:180px",
			"align-self:center",
			"box-sizing:border-box",
			"padding:18px",
			"border-radius:6px",
			"background:#111827",
			"box-shadow:0 18px 42px rgba(0,0,0,0.45)"
		]);
		var title = document.createElement("div");
		title.textContent = "時間線讀取失敗";
		title.style.cssText = "font-size:20px;font-weight:700;margin-bottom:10px";
		panel.appendChild(title);
		var detail = document.createElement("div");
		detail.textContent = String(error && error.message || error);
		detail.style.cssText = "font-size:14px;color:#cbd5e1;line-height:1.5;height:72px;overflow:hidden";
		panel.appendChild(detail);
		var close = document.createElement("button");
		close.type = "button";
		close.textContent = "關閉";
		close.style.cssText = this.buttonCss("#334155");
		close.onclick = function () {
			self.destroy({ result: "error", reason: "loadFailed" });
		};
		panel.appendChild(close);
		overlay.appendChild(panel);
	};

	TimelineView.prototype.createOverlay = function () {
		var self = this;
		var overlay = this.createShell();
		var panel = document.createElement("div");
		panel.style.cssText = joinCss([
			"position:relative",
			"width:100%",
			"height:100%",
			"max-width:760px",
			"box-sizing:border-box",
			"display:flex",
			"flex-direction:column",
			"overflow:hidden",
			"border-radius:6px",
			"background:#0f172a",
			"box-shadow:0 18px 48px rgba(0,0,0,0.48)"
		]);

		var header = document.createElement("div");
		header.style.cssText = joinCss([
			"height:54px",
			"box-sizing:border-box",
			"padding:10px 12px",
			"display:flex",
			"align-items:center",
			"justify-content:space-between",
			"gap:10px",
			"border-bottom:1px solid rgba(255,255,255,0.1)",
			"background:#111827"
		]);
		var titleWrap = document.createElement("div");
		titleWrap.style.cssText = "min-width:0;overflow:hidden";
		var title = document.createElement("div");
		title.textContent = this.data.title;
		title.style.cssText = "font-size:20px;font-weight:800;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		titleWrap.appendChild(title);
		if (this.data.subtitle) {
			var subtitle = document.createElement("div");
			subtitle.textContent = this.data.subtitle;
			subtitle.style.cssText = "font-size:12px;line-height:1.2;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:4px";
			titleWrap.appendChild(subtitle);
		}
		header.appendChild(titleWrap);
		var close = document.createElement("button");
		close.type = "button";
		close.textContent = "x";
		close.title = "關閉";
		close.style.cssText = this.iconButtonCss();
		close.onclick = function () {
			self.destroy({ result: "cancel", reason: "close" });
		};
		header.appendChild(close);
		panel.appendChild(header);

		var viewport = document.createElement("div");
		viewport.style.cssText = joinCss([
			"position:relative",
			"flex:1 1 auto",
			"overflow:hidden",
			"cursor:grab",
			"touch-action:none",
			"background:linear-gradient(180deg,#172033 0%,#101827 100%)"
		]);
		this.viewport = viewport;
		var content = document.createElement("div");
		content.style.cssText = joinCss([
			"position:absolute",
			"left:0",
			"top:0",
			"height:100%",
			"will-change:transform"
		]);
		this.content = content;
		viewport.appendChild(content);
		panel.appendChild(viewport);
		overlay.appendChild(panel);

		viewport.addEventListener("pointerdown", function (e) { self.onPointerDown(e); });
		viewport.addEventListener("pointermove", function (e) { self.onPointerMove(e); });
		viewport.addEventListener("pointerup", function (e) { self.onPointerUp(e); });
		viewport.addEventListener("pointercancel", function (e) { self.onPointerUp(e); });
		viewport.addEventListener("wheel", function (e) {
			e.preventDefault();
			self.setOffset(self.offsetX - (e.deltaX || e.deltaY));
		}, { passive: false });
		this.resizeHandler = function () { self.refreshBounds(); };
		window.addEventListener("resize", this.resizeHandler);
		this.keyHandler = function (e) {
			if (e.key === "Escape") self.destroy({ result: "cancel", reason: "escape" });
			if (e.key === "ArrowLeft") self.setOffset(self.offsetX + 80);
			if (e.key === "ArrowRight") self.setOffset(self.offsetX - 80);
		};
		document.addEventListener("keydown", this.keyHandler);
	};

	TimelineView.prototype.render = function () {
		var self = this;
		var content = this.content;
		content.style.width = this.data.width + "px";
		content.style.minWidth = this.data.width + "px";
		content.innerHTML = "";
		this.nodesById = {};
		this.nodeElements = [];
		this.data.nodes.forEach(function (node) {
			self.nodesById[node.id] = node;
		});

		this.renderChapterBands();
		this.renderEdges();
		this.data.nodes.forEach(function (node) {
			self.renderNode(node);
		});
		this.refreshBounds();
	};

	TimelineView.prototype.renderChapterBands = function () {
		var height = this.data.height;
		this.data.chapters.forEach(function (chapter) {
			var band = document.createElement("div");
			band.style.cssText = joinCss([
				"position:absolute",
				"left:" + chapter.x + "px",
				"top:0",
				"width:" + chapter.width + "px",
				"height:100%",
				"box-sizing:border-box",
				"border-left:1px solid rgba(148,163,184,0.16)",
				"pointer-events:none"
			]);
			var label = document.createElement("div");
			label.textContent = chapter.title;
			label.style.cssText = joinCss([
				"position:absolute",
				"left:0",
				"top:14px",
				"font-size:13px",
				"font-weight:700",
				"color:#cbd5e1",
				"white-space:nowrap",
				"overflow:hidden",
				"text-overflow:ellipsis",
				"max-width:" + Math.max(120, chapter.width - 20) + "px"
			]);
			band.appendChild(label);
			this.content.appendChild(band);
		}, this);
		this.content.style.height = height + "px";
	};

	TimelineView.prototype.renderEdges = function () {
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("width", this.data.width);
		svg.setAttribute("height", this.data.height);
		svg.style.cssText = "position:absolute;left:0;top:0;width:" + this.data.width + "px;height:" + this.data.height + "px;pointer-events:none;overflow:visible";
		this.data.edges.forEach(function (edge) {
			var from = this.nodesById[edge.from];
			var to = this.nodesById[edge.to];
			if (!from || !to) return;
			var line = document.createElementNS("http://www.w3.org/2000/svg", "path");
			var x1 = from.x + 118;
			var y1 = from.y + 54;
			var x2 = to.x;
			var y2 = to.y + 54;
			var mid = Math.max(24, Math.abs(x2 - x1) / 2);
			line.setAttribute("d", "M" + x1 + "," + y1 + " C" + (x1 + mid) + "," + y1 + " " + (x2 - mid) + "," + y2 + " " + x2 + "," + y2);
			line.setAttribute("fill", "none");
			line.setAttribute("stroke", "rgba(148,163,184,0.52)");
			line.setAttribute("stroke-width", "3");
			line.setAttribute("stroke-linecap", "round");
			svg.appendChild(line);
		}, this);
		this.content.appendChild(svg);
		this.svg = svg;
	};

	TimelineView.prototype.renderNode = function (node) {
		var self = this;
		var unlocked = isNodeUnlocked(node);
		var current = node.floorId === core.status.floorId;
		var card = document.createElement("button");
		card.type = "button";
		card.dataset.nodeId = node.id;
		card.setAttribute("aria-disabled", unlocked ? "false" : "true");
		card.style.cssText = joinCss([
			"position:absolute",
			"left:" + node.x + "px",
			"top:" + node.y + "px",
			"width:128px",
			"height:112px",
			"box-sizing:border-box",
			"padding:0",
			"border:" + (current ? "2px solid #facc15" : "1px solid rgba(255,255,255,0.2)"),
			"border-radius:6px",
			"background:#111827",
			"box-shadow:" + (current ? "0 0 0 3px rgba(250,204,21,0.18)" : "0 10px 24px rgba(0,0,0,0.26)"),
			"overflow:hidden",
			"cursor:" + (unlocked ? "pointer" : "default"),
			"color:#f8fafc",
			"text-align:left",
			"touch-action:none"
		]);
		card.addEventListener("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			if (self.dragMoved) return;
			self.chooseNode(node);
		});
		var image = document.createElement("div");
		image.style.cssText = joinCss([
			"width:100%",
			"height:74px",
			"background-color:#1f2937",
			"background-image:url('" + resolveImage(unlocked ? node.image : node.lockedImage) + "')",
			"background-size:cover",
			"background-position:center",
			"filter:" + (unlocked ? "none" : "grayscale(1) brightness(0.58)"),
			"opacity:" + (unlocked ? "1" : "0.82")
		]);
		card.appendChild(image);

		if (!unlocked) {
			var lock = document.createElement("div");
			lock.textContent = "LOCK";
			lock.style.cssText = joinCss([
				"position:absolute",
				"left:8px",
				"top:8px",
				"padding:3px 6px",
				"border-radius:4px",
				"background:rgba(15,23,42,0.82)",
				"font-size:11px",
				"font-weight:800",
				"letter-spacing:0",
				"color:#e5e7eb"
			]);
			card.appendChild(lock);
		}

		var footer = document.createElement("div");
		footer.style.cssText = joinCss([
			"height:38px",
			"box-sizing:border-box",
			"padding:5px 7px",
			"background:" + (unlocked ? "#111827" : "#1f2937"),
			"display:flex",
			"flex-direction:column",
			"justify-content:center",
			"gap:2px"
		]);
		var title = document.createElement("div");
		title.textContent = node.title;
		title.style.cssText = "font-size:13px;font-weight:700;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		footer.appendChild(title);
		var meta = document.createElement("div");
		meta.textContent = unlocked ? (current ? "目前章節" : "已解鎖") : "未解鎖";
		meta.style.cssText = "font-size:11px;line-height:1;color:" + (unlocked ? "#93c5fd" : "#94a3b8") + ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		footer.appendChild(meta);
		card.appendChild(footer);
		this.content.appendChild(card);
		this.nodeElements.push(card);
	};

	TimelineView.prototype.chooseNode = function (node) {
		if (this.selecting) return;
		if (!isNodeUnlocked(node)) {
			core.playSound("error.mp3");
			core.drawTip("章節尚未解鎖");
			return;
		}
		this.selecting = true;
		var loc = node.loc || [6, 10];
		var heroLoc = { x: loc[0], y: loc[1], direction: node.direction || "up" };
		this.destroy({ result: "changeFloor", floorId: node.floorId });
		if (core.status.event && core.status.event.id === "action") {
			core.events.startEvents([{
				"type": "changeFloor",
				"floorId": node.floorId,
				"loc": loc,
				"direction": node.direction || "up",
				"time": node.time
			}]);
			return;
		}
		core.changeFloor(node.floorId, null, heroLoc, node.time, function () {
			core.replay();
		});
	};

	TimelineView.prototype.onPointerDown = function (e) {
		this.pointerId = e.pointerId;
		this.pointerTarget = e.target;
		this.dragStartX = e.clientX;
		this.dragStartOffset = this.offsetX;
		this.dragMoved = false;
		this.viewport.style.cursor = "grabbing";
		if (this.viewport.setPointerCapture) this.viewport.setPointerCapture(e.pointerId);
	};

	TimelineView.prototype.onPointerMove = function (e) {
		if (this.pointerId !== e.pointerId) return;
		var dx = e.clientX - this.dragStartX;
		if (Math.abs(dx) > 6) this.dragMoved = true;
		this.setOffset(this.dragStartOffset + dx);
	};

	TimelineView.prototype.onPointerUp = function (e) {
		if (this.pointerId !== e.pointerId) return;
		var shouldChoose = !this.dragMoved;
		this.pointerId = null;
		this.viewport.style.cursor = "grab";
		if (shouldChoose) {
			var target = this.pointerTarget || e.target;
			while (target && target !== this.viewport && !(target.dataset && target.dataset.nodeId)) {
				target = target.parentElement;
			}
			if (target && target.dataset && target.dataset.nodeId) {
				var node = this.nodesById[target.dataset.nodeId];
				if (node) this.chooseNode(node);
			}
		}
		var self = this;
		setTimeout(function () {
			self.dragMoved = false;
			self.pointerTarget = null;
		}, 0);
	};

	TimelineView.prototype.refreshBounds = function () {
		if (!this.viewport || !this.content || !this.data) return;
		var viewportWidth = this.viewport.clientWidth || 1;
		this.maxOffsetX = 0;
		this.minOffsetX = Math.min(0, viewportWidth - this.data.width);
		this.setOffset(this.offsetX);
	};

	TimelineView.prototype.setOffset = function (value) {
		this.offsetX = Math.max(this.minOffsetX, Math.min(this.maxOffsetX, value));
		if (this.content) this.content.style.transform = "translate3d(" + this.offsetX + "px,0,0)";
	};

	TimelineView.prototype.centerCurrentFloor = function () {
		if (!this.data || !this.viewport) return;
		var current = null;
		this.data.nodes.forEach(function (node) {
			if (node.floorId === core.status.floorId) current = node;
		});
		if (!current) return;
		var target = Math.floor((this.viewport.clientWidth || 0) / 2 - current.x - 64);
		this.setOffset(target);
	};

	TimelineView.prototype.iconButtonCss = function () {
		return joinCss([
			"flex:0 0 auto",
			"width:34px",
			"height:34px",
			"border:1px solid rgba(255,255,255,0.28)",
			"border-radius:6px",
			"background:#1f2937",
			"color:#fff",
			"font-size:22px",
			"line-height:28px",
			"cursor:pointer"
		]);
	};

	TimelineView.prototype.buttonCss = function (background) {
		return joinCss([
			"width:100%",
			"height:38px",
			"border:0",
			"border-radius:6px",
			"background:" + background,
			"color:#fff",
			"font-size:15px",
			"font-weight:700",
			"cursor:pointer"
		]);
	};

	TimelineView.prototype.destroy = function (result) {
		if (this.keyHandler) document.removeEventListener("keydown", this.keyHandler);
		if (this.resizeHandler) window.removeEventListener("resize", this.resizeHandler);
		if (this.overlay && this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
		if (!this.lockedBeforeStart) core.unlockControl();
		if (currentTimeline === this) currentTimeline = null;
		this.callback(result || { result: "cancel", reason: "destroy" });
	};

	window.MotaTimeline = {
		open: function (path, options, callback) {
			if (currentTimeline) currentTimeline.destroy({ result: "cancel", reason: "replaced" });
			currentTimeline = new TimelineView(path, options, callback);
			currentTimeline.start();
			return currentTimeline;
		},
		clearCache: function () {
			dataCache = {};
		}
	};
})();
