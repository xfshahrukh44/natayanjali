(function(e) {
	var t = function(e, o, s, n, i, a, d, r, l, u, _, c, p) {
		'use strict';
		var h = this,
			b = t.prototype;
		h.icon_img = o, h.useHEX = _, h.nBC = c, h.sBC = p, h.borderNColor_str = a, h.borderSColor_str = d, h.adsBackgroundPath_str = r, h.position_str = i, h.textNormalColor_str = l, h.textSelectedColor_str = u, h.text_str = n, h.iconOverPath_str = s, h.totalWidth = 215, h.totalHeight = 64, h.fontSize = 12, h.isMbl = FWDUVPUtils.isMobile, h.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, h.init = function() {
			h.setOverflow("visible"), h.setupMainContainers(), h.hide(!1, !0)
		}, h.setupMainContainers = function() {
			h.main_do = new FWDUVPDisplayObject("div"), h.main_do.hasTransform3d_bl = !1, h.main_do.hasTransform2d_bl = !1, h.main_do.setBackfaceVisibility(), h.bk_do = new FWDUVPDisplayObject("div"), h.bk_do.getStyle().background = "url('" + h.adsBackgroundPath_str + "')", h.text_do = new FWDUVPDisplayObject("div"), h.text_do.screen.className = "UVP-skip", h.text_do.hasTransform3d_bl = !1, h.text_do.hasTransform2d_bl = !1, h.text_do.setBackfaceVisibility(), h.text_do.setOverflow("visible"), h.text_do.getStyle().display = "inline", h.text_do.getStyle().fontFamily = "Arial", h.text_do.getStyle().fontSize = "22px", h.text_do.getStyle().whiteSpace = "nowrap", h.text_do.getStyle().color = h.textNormalColor_str, h.text_do.getStyle().fontSmoothing = "antialiased", h.text_do.getStyle().webkitFontSmoothing = "antialiased", h.text_do.getStyle().textRendering = "optimizeLegibility", h.thumbHolder_do = new FWDUVPDisplayObject("div"), h.thumbHolder_do.setWidth(h.totalHeight - 8), h.thumbHolder_do.setHeight(h.totalHeight - 8), h.thumbHolder_do.setX(h.totalWidth - h.thumbHolder_do.w - 4), h.thumbHolder_do.setY(4), h.border_do = new FWDUVPDisplayObject("div"), h.border_do.getStyle().border = "1px solid " + h.borderNColor_str + "", h.border_do.setButtonMode(!0), h.main_do.setWidth(h.totalWidth), h.main_do.setHeight(h.totalHeight), h.bk_do.setWidth(h.totalWidth), h.bk_do.setHeight(h.totalHeight), "left" == h.position_str ? (h.border_do.setX(-1), h.border_do.setWidth(h.totalWidth - 1), h.border_do.setHeight(h.totalHeight - 2)) : (h.border_do.setWidth(h.totalWidth), h.border_do.setHeight(h.totalHeight - 2)), h.setWidth(h.totalWidth), h.setHeight(h.totalHeight), h.useHEX ? (h.icon_do = new FWDUVPDisplayObject("div"), h.icon_do.setWidth(h.icon_img.width), h.icon_do.setHeight(h.icon_img.height), h.icon_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(h.icon_img, h.nBC).canvas, h.icon_do.screen.appendChild(h.icon_do_canvas)) : (h.icon_do = new FWDUVPDisplayObject("img"), h.icon_do.setScreen(h.icon_img), h.icon_do.setWidth(h.icon_img.width), h.icon_do.setHeight(h.icon_img.height)), h.iconS_img = new Image, h.iconS_img.src = h.iconOverPath_str, h.useHEX ? (h.iconS_do = new FWDUVPDisplayObject("div"), h.iconS_do.setWidth(h.icon_do.w), h.iconS_do.setHeight(h.icon_do.h), h.iconS_img.onload = function() {
				h.iconS_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(h.iconS_img, h.sBC).canvas, h.iconS_do.screen.appendChild(h.iconS_do_canvas)
			}) : (h.iconS_do = new FWDUVPDisplayObject("img"), h.iconS_do.setScreen(h.iconS_img), h.iconS_do.setWidth(h.icon_do.w), h.iconS_do.setHeight(h.icon_do.h)), h.iconS_do.setAlpha(0), h.main_do.addChild(h.bk_do), h.main_do.addChild(h.text_do), h.main_do.addChild(h.thumbHolder_do), h.main_do.addChild(h.icon_do), h.main_do.addChild(h.iconS_do), h.main_do.addChild(h.border_do), FWDUVPUtils.isIEAndLessThen9 && (h.dumy_do = new FWDUVPDisplayObject("div"), h.dumy_do.setBkColor("#00FF00"), h.dumy_do.setAlpha(1e-4), h.dumy_do.setWidth(h.totalWidth), h.dumy_do.setHeight(h.totalHeight), h.dumy_do.setButtonMode(!0), h.main_do.addChild(h.dumy_do)), h.addChild(h.main_do), h.updateText(h.text_str), FWDUVPUtils.isIEAndLessThen9 ? h.isMbl ? h.hasPointerEvent_bl ? (h.dumy_do.screen.addEventListener("pointerup", h.onMouseUp), h.dumy_do.screen.addEventListener("pointerover", h.onMouseOver), h.dumy_do.screen.addEventListener("pointerout", h.onMouseOut)) : h.dumy_do.screen.addEventListener("touchend", h.onMouseUp) : h.dumy_do.screen.addEventListener ? (h.dumy_do.screen.addEventListener("mouseover", h.onMouseOver), h.dumy_do.screen.addEventListener("mouseout", h.onMouseOut), h.dumy_do.screen.addEventListener("mouseup", h.onMouseUp)) : h.dumy_do.screen.attachEvent && (h.dumy_do.screen.attachEvent("onmouseover", h.onMouseOver), h.dumy_do.screen.attachEvent("onmouseout", h.onMouseOut), h.dumy_do.screen.attachEvent("onmouseup", h.onMouseUp)) : h.isMbl ? h.hasPointerEvent_bl ? (h.border_do.screen.addEventListener("pointerup", h.onMouseUp), h.border_do.screen.addEventListener("pointerover", h.onMouseOver), h.border_do.screen.addEventListener("pointerout", h.onMouseOut)) : h.border_do.screen.addEventListener("touchend", h.onMouseUp) : h.border_do.screen.addEventListener ? (h.border_do.screen.addEventListener("mouseover", h.onMouseOver), h.border_do.screen.addEventListener("mouseout", h.onMouseOut), h.border_do.screen.addEventListener("mouseup", h.onMouseUp)) : h.border_do.screen.attachEvent && (h.border_do.screen.attachEvent("onmouseover", h.onMouseOver), h.border_do.screen.attachEvent("onmouseout", h.onMouseOut), h.border_do.screen.attachEvent("onmouseup", h.onMouseUp))
		}, h.onMouseOver = function(t) {
			t.pointerType && t.pointerType != t.MSPOINTER_TYPE_MOUSE && "mouse" != t.pointerType || h.setSelectedState()
		}, h.onMouseOut = function(t) {
			t.pointerType && t.pointerType != t.MSPOINTER_TYPE_MOUSE && "mouse" != t.pointerType || h.setNormalState()
		}, h.onMouseUp = function(o) {
			o.preventDefault && o.preventDefault();
			2 != o.button && h.isShowed_bl && h.dispatchEvent(t.MOUSE_UP)
		}, h.updateText = function(e) {
			h.text_do.setInnerHTML(e), h.positionInside()
		}, h.positionInside = function() {
			var e;
			e = h.text_do.getWidth() + 8 + h.iconS_do.w, h.text_do.setX(parseInt(h.totalWidth - e) / 2), h.text_do.setY(parseInt((h.totalHeight - h.text_do.getHeight()) / 2) + 2), h.icon_do.setX(h.text_do.x + e - h.iconS_do.w), h.icon_do.setY(parseInt((h.totalHeight - h.iconS_do.h) / 2) + 2), h.iconS_do.setX(h.text_do.x + e - h.iconS_do.w), h.iconS_do.setY(parseInt((h.totalHeight - h.iconS_do.h) / 2) + 2)
		}, h.prevW, h.resize = function(t) {
			var o = h.totalWidth,
				t;
			h.prvW = e.sW, 600 > e.sW && (t = !0), t ? (h.totalWidth = 64, o = 64) : (h.totalWidth = 215, o = 215), h.isShWithDl || "right" != h.position_str || h.main_do.setX(-h.totalWidth), h.prevW != h.totalWidth && h.positionInside(), h.prevW = h.totalWidth, t ? (h.text_do.setVisible(!1), h.icon_do.setX(Math.round((o - h.iconS_do.w) / 2) - 1), h.icon_do.setY(Math.round((h.totalHeight - h.iconS_do.h) / 2))) : (h.text_do.setVisible(!0), h.icon_do.setX(h.text_do.x + h.text_do.getWidth() + 8 + h.iconS_do.w - h.iconS_do.w), h.icon_do.setY(parseInt((h.totalHeight - h.iconS_do.h) / 2) + 2)), h.iconS_do.setX(h.icon_do.x), h.iconS_do.setY(h.icon_do.y), h.setWidth(o), h.main_do.setWidth(o), h.bk_do.setWidth(o), h.border_do.setWidth(o - 1)
		}, h.setNormalState = function() {
			FWDAnimation.to(h.iconS_do, .5, {
				alpha: 0,
				ease: Expo.easeOut
			}), FWDAnimation.to(h.text_do.screen, .5, {
				css: {
					color: h.textNormalColor_str
				},
				ease: Expo.easeOut
			}), FWDAnimation.to(h.border_do.screen, .5, {
				css: {
					borderColor: h.borderNColor_str
				},
				ease: Expo.easeOut
			})
		}, h.setSelectedState = function() {
			FWDAnimation.to(h.iconS_do, .5, {
				alpha: 1,
				ease: Expo.easeOut
			}), FWDAnimation.to(h.text_do.screen, .5, {
				css: {
					color: h.textSelectedColor_str
				},
				ease: Expo.easeOut
			}), FWDAnimation.to(h.border_do.screen, .5, {
				css: {
					borderColor: h.borderSColor_str
				},
				ease: Expo.easeOut
			})
		}, h.show = function(e) {
			h.isShowed_bl || (h.isShowed_bl = !0, h.isShWithDl = !0, h.resize(), setTimeout(function() {
				h.isShWithDl = !1
			}, 500), h.setVisible(!0), FWDAnimation.killTweensOf(h.main_do), e && !h.isMobile_bl ? "left" == h.position_str ? FWDAnimation.to(h.main_do, .8, {
				x: 0,
				delay: .8,
				ease: Expo.easeInOut
			}) : FWDAnimation.to(h.main_do, .8, {
				x: -h.totalWidth,
				delay: .8,
				ease: Expo.easeInOut
			}) : "left" == h.position_str ? h.main_do.setX(0) : h.main_do.setX(-h.totalWidth))
		}, h.hide = function(e, t) {
			(h.isShowed_bl || t) && (h.isShowed_bl = !1, h.isShWithDl = !0, h.hasThumbanil_bl = !1, FWDAnimation.killTweensOf(h.main_do), e && !h.isMobile_bl ? "left" == h.position_str ? FWDAnimation.to(h.main_do, .8, {
				x: -h.totalWidth,
				ease: Expo.easeInOut,
				onComplete: h.hideCompleteHandler
			}) : FWDAnimation.to(h.main_do, .8, {
				x: 0,
				ease: Expo.easeInOut,
				onComplete: h.hideCompleteHandler
			}) : ("left" == h.position_str ? h.main_do.setX(-h.totalWidth) : h.main_do.setX(0), h.hideCompleteHandler()))
		}, h.hideCompleteHandler = function() {
			h.smallImage_img && (h.smallImage_img.onload = null, h.smallImage_img.src = "", FWDAnimation.killTweensOf(h.icon_do)), 1 != h.main_do.alpha && h.main_do.setAlpha(1), h.thumbHolder_do.setVisible(!1), h.setVisible(!1), h.setX(-500)
		}, h.hideWithOpacity = function() {
			FWDUVPUtils.isIEAndLessThen9 || FWDAnimation.to(h.main_do, .8, {
				alpha: .5
			})
		}, h.showWithOpacity = function() {
			FWDUVPUtils.isIEAndLessThen9 || FWDAnimation.to(h.main_do, .8, {
				alpha: 1
			})
		}, h.init()
	};
	t.setPrototype = function() {
		t.prototype = null, t.prototype = new FWDUVPTransformDisplayObject("div")
	}, t.CLICK = "onClick", t.MOUSE_OVER = "onMouseOver", t.SHOW_TOOLTIP = "showTooltip", t.MOUSE_OUT = "onMouseOut", t.MOUSE_UP = "onMouseDown", t.prototype = null, e.FWDUVPAdsButton = t
})(window),
function(e) {
	var t = function(e, o, s, n, i) {
		'use strict';
		var a = this,
			d = t.prototype;
		a.borderNColor_str = o, a.borderSColor_str = s, a.adsBackgroundPath_str = n, a.position_str = e, a.timeColor_str = i, a.totalWidth = 215, a.totalHeight = 64, a.fontSize = 12, a.isMbl = FWDUVPUtils.isMobile, a.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, a.init = function() {
			a.setOverflow("visible"), a.setupMainContainers(), a.hide(!1, !0)
		}, a.setupMainContainers = function() {
			a.main_do = new FWDUVPDisplayObject("div"), a.main_do.hasTransform3d_bl = !1, a.main_do.hasTransform2d_bl = !1, a.main_do.setBackfaceVisibility(), a.bk_do = new FWDUVPDisplayObject("div"), a.bk_do.getStyle().background = "url('" + a.adsBackgroundPath_str + "')", a.text_do = new FWDUVPDisplayObject("div"), a.text_do.screen.className = "UVP-skip-in", a.text_do.hasTransform3d_bl = !1, a.text_do.hasTransform2d_bl = !1, a.text_do.setBackfaceVisibility(), a.text_do.getStyle().fontFamily = "Arial", a.text_do.getStyle().fontSize = "12px", a.text_do.getStyle().lineHeight = "18px", a.text_do.getStyle().textAlign = "center", a.text_do.getStyle().color = a.timeColor_str, a.text_do.getStyle().fontSmoothing = "antialiased", a.text_do.getStyle().webkitFontSmoothing = "antialiased", a.text_do.getStyle().textRendering = "optimizeLegibility", a.text_do.setInnerHTML("..."), a.thumbHolder_do = new FWDUVPDisplayObject("div"), a.thumbHolder_do.setWidth(a.totalHeight - 8), a.thumbHolder_do.setHeight(a.totalHeight - 8), a.thumbHolder_do.setX(a.totalWidth - a.thumbHolder_do.w - 4), a.thumbHolder_do.setY(4), a.border_do = new FWDUVPDisplayObject("div"), a.border_do.getStyle().border = "1px solid " + a.borderNColor_str + "", a.main_do.setWidth(a.totalWidth), a.main_do.setHeight(a.totalHeight), a.bk_do.setWidth(a.totalWidth), a.bk_do.setHeight(a.totalHeight), "left" == a.position_str ? (a.border_do.setX(-1), a.border_do.setWidth(a.totalWidth - 1), a.border_do.setHeight(a.totalHeight - 2)) : (a.border_do.setWidth(a.totalWidth), a.border_do.setHeight(a.totalHeight - 2)), a.setWidth(a.totalWidth), a.setHeight(a.totalHeight), a.main_do.addChild(a.bk_do), a.main_do.addChild(a.text_do), a.main_do.addChild(a.thumbHolder_do), a.main_do.addChild(a.border_do), a.addChild(a.main_do)
		}, a.loadThumbnail = function(e) {
			if (a.hasThumbanil_bl = !0, a.smallImage_img) {
				a.smallImage_img.removeAttribute("width"), a.smallImage_img.removeAttribute("height"), a.smallImage_img.onload = null, a.smallImage_img.src = "";
				try {
					FWDUVPUtils.isIE || a.thumbHolder_do.removeChild(a.thumbnail_do)
				} catch (t) {}
			}
			a.thumbnail_do || (a.thumbnail_do = new FWDUVPDisplayObject("img"), a.smallImage_img = new Image), a.thumbHolder_do.setVisible(!0), a.smallImage_img.onload = a.onSmallImageLoad, a.smallImage_img.src = e
		}, a.onSmallImageLoad = function() {
			a.smallImageOriginalW = a.smallImage_img.width, a.smallImageOriginalH = a.smallImage_img.height, a.thumbnail_do.setScreen(a.smallImage_img), a.thumbHolder_do.addChild(a.thumbnail_do);
			var e = a.thumbHolder_do.w / a.smallImageOriginalW,
				t = a.thumbHolder_do.h / a.smallImageOriginalH,
				o = 0;
			e >= t ? o = e : e <= t && (o = t), a.thumbnail_do.setWidth(Math.round(a.smallImageOriginalW * o)), a.thumbnail_do.setHeight(Math.round(a.smallImageOriginalH * o)), a.thumbnail_do.setX(Math.round((a.thumbHolder_do.w - a.thumbnail_do.w) / 2)), a.thumbnail_do.setY(Math.round((a.thumbHolder_do.h - a.thumbnail_do.h) / 2)), a.thumbnail_do.setAlpha(0), FWDAnimation.to(a.thumbnail_do, .8, {
				alpha: 1
			}), a.updateText()
		}, a.updateText = function(e) {
			e && a.text_do.setInnerHTML(e), a.hasThumbanil_bl ? (a.text_do.setX(16), a.text_do.setWidth(a.totalWidth - a.totalHeight - 26)) : (a.text_do.setX(8), a.text_do.setWidth(a.totalWidth - 16)), a.text_do.setY(parseInt((a.totalHeight - a.text_do.getHeight()) / 2))
		}, a.show = function(e) {
			a.isShowed_bl || (a.isShowed_bl = !0, a.setVisible(!0), FWDAnimation.killTweensOf(a.main_do), e && !a.isMbl ? "left" == a.position_str ? FWDAnimation.to(a.main_do, .8, {
				x: 0,
				delay: .2,
				ease: Expo.easeInOut
			}) : FWDAnimation.to(a.main_do, .8, {
				x: -a.totalWidth + 1,
				delay: .2,
				ease: Expo.easeInOut
			}) : "left" == a.position_str ? a.main_do.setX(0) : a.main_do.setX(-a.totalWidth))
		}, a.hide = function(e, t) {
			(a.isShowed_bl || t) && (a.isShowed_bl = !1, a.hasThumbanil_bl = !1, FWDAnimation.killTweensOf(a.main_do), e && !a.isMbl ? "left" == a.position_str ? FWDAnimation.to(a.main_do, .8, {
				x: -a.totalWidth,
				ease: Expo.easeInOut,
				onComplete: a.hideCompleteHandler
			}) : FWDAnimation.to(a.main_do, .8, {
				x: 0,
				ease: Expo.easeInOut,
				onComplete: a.hideCompleteHandler
			}) : ("left" == a.position_str ? a.main_do.setX(-a.totalWidth) : a.main_do.setX(0), a.hideCompleteHandler()))
		}, a.hideCompleteHandler = function() {
			a.smallImage_img && (a.smallImage_img.onload = null, a.smallImage_img.src = "", FWDAnimation.killTweensOf(a.thumbnail_do)), 1 != a.main_do.alpha && a.main_do.setAlpha(1), a.thumbHolder_do.setVisible(!1), a.setVisible(!1)
		}, a.hideWithOpacity = function() {
			FWDUVPUtils.isIEAndLessThen9 || FWDAnimation.to(a.main_do, .8, {
				alpha: .5
			})
		}, a.showWithOpacity = function() {
			FWDUVPUtils.isIEAndLessThen9 || FWDAnimation.to(a.main_do, .8, {
				alpha: 1
			})
		}, a.init()
	};
	t.setPrototype = function() {
		t.prototype = null, t.prototype = new FWDUVPTransformDisplayObject("div")
	}, t.CLICK = "onClick", t.MOUSE_OVER = "onMouseOver", t.SHOW_TOOLTIP = "showTooltip", t.MOUSE_OUT = "onMouseOut", t.MOUSE_UP = "onMouseDown", t.prototype = null, e.FWDUVPAdsStart = t
}(window),
function(window) {
	var FWDUVPAnnotation = function(props_obj) {
		'use strict';
		var _s = this,
			prototype = FWDUVPAnnotation.prototype;
		_s.id = props_obj.id, _s.startTime = props_obj.start, _s.endTime = props_obj.end, _s.htmlContent_str = props_obj.content, _s.left = props_obj.left, _s.top = props_obj.top, _s.showCloseButton_bl = props_obj.showCloseButton_bl, _s.clickSource = props_obj.clickSource, _s.clickSourceTarget = props_obj.clickSourceTarget, _s.closeButtonNpath = props_obj.closeButtonNpath, _s.closeButtonSPath = props_obj.closeButtonSPath, _s.normalStateClass = props_obj.normalStateClass, _s.selectedStateClass = props_obj.selectedStateClass, _s.showAnnotationsPositionTool_bl = props_obj.showAnnotationsPositionTool_bl, _s.prt = props_obj.prt, _s.curX = _s.left, _s.curY = _s.top, _s._d = props_obj._d, _s.useHEX = props_obj.useHEX, _s.nBC = props_obj.nBC, _s.sBC = props_obj.sBC, _s.handPath_str = props_obj.handPath_str, _s.grabPath_str = props_obj.grabPath_str, _s.init = function() {
			-1 != _s._d.sknPth.indexOf("hex_white") && (_s.sBC = "#FFFFFF"), _s.setOverflow("visible"), _s.setAlpha(0), _s.setVisible(!1), FWDUVPUtils.hasTransform2d && (_s.getStyle().transformOrigin = "0% 0%"), _s.screen.innerHTML = _s.htmlContent_str, _s.screen.className = _s.normalStateClass, _s.setBackfaceVisibility(), _s.getStyle().fontSmoothing = "antialiased", _s.getStyle().webkitFontSmoothing = "antialiased", _s.getStyle().textRendering = "optimizeLegibility", _s.dummy_do = new FWDUVPDisplayObject("div"), _s.dummy_do.getStyle().width = "100%", _s.dummy_do.getStyle().height = "100%", _s.addChild(_s.dummy_do), setTimeout(function() {
				_s.w = _s.getWidth(), _s.h = _s.getHeight()
			}, 100), _s.showCloseButton_bl && !_s.showAnnotationsPositionTool_bl && (FWDUVPSimpleSizeButton.setPrototype(), _s.clsBtn = new FWDUVPSimpleSizeButton(_s.closeButtonNpath, _s.closeButtonSPath, 26, 26, _s.useHEX, _s.nBC, _s.sBC, !0), _s.clsBtn.setScale2(0), _s.clsBtn.addListener(FWDUVPSimpleSizeButton.MOUSE_UP, _s.closeClickButtonCloseHandler), _s.clsBtn.getStyle().position = "absolute", _s.addChild(_s.clsBtn)), _s.showAnnotationsPositionTool_bl && (_s.info_do = new FWDUVPDisplayObject("div"), _s.info_do.getStyle().backgroundColor = "#FFFFFF", _s.info_do.getStyle().boxShadow = "2px 2px 2px #888888;", _s.info_do.getStyle().fontSmoothing = "antialiased", _s.info_do.getStyle().webkitFontSmoothing = "antialiased", _s.info_do.getStyle().textRendering = "optimizeLegibility", _s.addChild(_s.info_do), setTimeout(function() {
				_s.info_do.screen.innerHTML = "<div style='padding:4px; maring:4px; color:#000000'> _d-left=" + Math.round(_s.curX * _s.prt.scaleInverse) + "</div><div style='padding:4px; margin:4px; color:#000000;'> _d-top=" + Math.round(_s.curY * _s.prt.scaleInverse) + "</div>", _s.setX(Math.round(_s.curX * _s.prt.scale)), _s.setY(Math.round(_s.curY * _s.prt.scale))
			}, 100), _s.isMbl ? _s.hasPointerEvent_bl ? _s.screen.addEventListener("pointerdown", _s.selfOnDownHandler) : _s.screen.addEventListener("touchdown", _s.selfOnDownHandler) : window.addEventListener && _s.screen.addEventListener("mousedown", _s.selfOnDownHandler), _s.getStyle().cursor = "url(" + _s.handPath_str + "), default"), _s.clickSource && !_s.showAnnotationsPositionTool_bl && (_s.dummy_do.setButtonMode(!0), _s.dummy_do.screen.addEventListener("click", _s.onClickHandler), _s.dummy_do.screen.addEventListener("mouseover", _s.onMouseOverHandler), _s.dummy_do.screen.addEventListener("mouseout", _s.onMouseOutHandler))
		}, _s.selfOnDownHandler = function(t) {
			t.preventDefault && t.preventDefault(), _s.getStyle().cursor = "url(" + _s.grabPath_str + "), default", _s.prt.addChild(_s);
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			_s.startX = e.screenX - _s.prt.getGlobalX(), _s.startY = e.screenY - _s.prt.getGlobalY(), _s.curX = _s.x, _s.curY = _s.y, _s.isMbl ? _s.hasPointerEvent_bl ? (window.addEventListener("pointermove", _s.selfMoveHandler), window.addEventListener("pointerup", _s.selfEndHandler)) : (window.addEventListener("touchmove", _s.selfMoveHandler), window.addEventListener("touchend", _s.selfEndHandler)) : window.addEventListener && (window.addEventListener("mousemove", _s.selfMoveHandler), window.addEventListener("mouseup", _s.selfEndHandler))
		}, _s.selfMoveHandler = function(t) {
			t.preventDefault && t.preventDefault();
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			_s.localX = e.screenX - _s.prt.getGlobalX(), _s.localY = e.screenY - _s.prt.getGlobalY(), _s.curX = _s.x, _s.curY = _s.y, _s.curX += _s.localX - _s.startX, _s.curY += _s.localY - _s.startY, _s.setX(_s.curX), _s.setY(_s.curY), _s.startX = e.screenX - _s.prt.getGlobalX(), _s.startY = e.screenY - _s.prt.getGlobalY(), _s.info_do.screen.innerHTML = "<div style='padding:4px; maring:4px; color:#000000'> _d-left=" + Math.round(_s.curX * _s.prt.scaleInverse) + "</div><div style='padding:4px; margin:4px; color:#000000;'> _d-top=" + Math.round(_s.curY * _s.prt.scaleInverse) + "</div>"
		}, _s.selfEndHandler = function() {
			_s.getStyle().cursor = "url(" + _s.handPath_str + "), default", _s.isMbl ? _s.hasPointerEvent_bl ? (window.removeEventListener("pointermove", _s.selfMoveHandler), window.removeEventListener("pointerup", _s.selfEndHandler)) : (window.removeEventListener("touchmove", _s.selfMoveHandler), window.removeEventListener("touchend", _s.selfEndHandler)) : window.removeEventListener && (window.removeEventListener("mousemove", _s.selfMoveHandler), window.removeEventListener("mouseup", _s.selfEndHandler))
		}, _s.onMouseOverHandler = function() {
			_s.setSelectedAtate()
		}, _s.onMouseOutHandler = function() {
			_s.setNormalState()
		}, _s.onClickHandler = function() {
			-1 != _s.clickSource.indexOf("https") || -1 != _s.clickSource.indexOf("http") ? window.open(_s.clickSource, _s.clickSourceTarget) : eval(_s.clickSource)
		}, _s.closeClickButtonCloseHandler = function() {
			_s.hide(), _s.isClsd = !0
		}, _s.show = function() {
			_s.isShowed_bl || _s.isClsd || (_s.isShowed_bl = !0, _s.setVisible(!0), FWDAnimation.killTweensOf(_s), FWDAnimation.to(_s, .8, {
				alpha: 1,
				ease: Quint.easeOut
			}), _s.clsBtn && FWDAnimation.to(_s.clsBtn, .8, {
				scale: 1,
				delay: .2,
				ease: Elastic.easeOut
			}))
		}, _s.hide = function() {
			_s.isShowed_bl && (FWDAnimation.killTweensOf(_s), _s.isShowed_bl = !1, _s.setVisible(!1), _s.setAlpha(0), _s.clsBtn && (FWDAnimation.killTweensOf(_s.clsBtn), _s.clsBtn.setScale2(0)))
		}, _s.setNormalState = function() {
			_s.selectedStateClass && FWDAnimation.to(_s.screen, .8, {
				className: _s.normalStateClass,
				ease: Quint.easeOut
			})
		}, _s.setSelectedAtate = function() {
			_s.selectedStateClass && FWDAnimation.to(_s.screen, .8, {
				className: _s.selectedStateClass,
				ease: Quint.easeOut
			})
		}, _s.updateHEXColors = function(e, t) {
			_s.clsBtn && _s.clsBtn.updateHEXColors(e, t, _s.buttonWidth, _s.buttonHeight)
		}, _s.init()
	};
	FWDUVPAnnotation.setPrototype = function() {
		FWDUVPAnnotation.prototype = null, FWDUVPAnnotation.prototype = FWDUVPUtils.hasTransform2d ? new FWDUVPTransformDisplayObject("div") : new FWDUVPDisplayObject("div")
	}, FWDUVPAnnotation.prototype = null, window.FWDUVPAnnotation = FWDUVPAnnotation
}(window),
function(e) {
	var t = function(o, s) {
		'use strict';
		var n = this,
			i = t.prototype;
		n.nBC = s.nBC, n.sBC = s.sBC, n.ann_ar = [], n.showAnnotationsPositionTool_bl = s.showAnnotationsPositionTool_bl, n.init = function() {
			n.setOverflow("visible")
		}, n.setupAnnotations = function(t) {
			if (n.ann_ar)
				for (var o = 0; o < n.ann_ar.length; o++) try {
					n.removeChild(n.ann_ar[o])
				} catch (t) {}
			if (n.source_ar = t, null == t) return void n.setVisible(!1);
			n.setVisible(!0), n.source_ar = t, n.ann_ar = [], n.totalAnnotations = n.source_ar.length;
			var a = s.annotationAddCloseNPath_str;
			e.isWhite && (a = "content/hex_white/annotation-close-button-normal.png");
			for (var o = 0; o < n.totalAnnotations; o++) {
				FWDUVPAnnotation.setPrototype();
				var d = new FWDUVPAnnotation({
					id: o,
					start: n.source_ar[o].start,
					end: n.source_ar[o].end,
					left: n.source_ar[o].left,
					top: n.source_ar[o].top,
					clickSource: n.source_ar[o].clickSource,
					clickSourceTarget: n.source_ar[o].clickSourceTarget,
					content: n.source_ar[o].content,
					showCloseButton_bl: n.source_ar[o].showCloseButton_bl,
					closeButtonNpath: a,
					closeButtonSPath: s.annotationAddCloseSPath_str,
					normalStateClass: n.source_ar[o].normalStateClass,
					selectedStateClass: n.source_ar[o].selectedStateClass,
					showAnnotationsPositionTool_bl: n.showAnnotationsPositionTool_bl,
					prt: n,
					handPath_str: s.handPath_str,
					grabPath_str: s.grabPath_str,
					useHEX: s.useHEX,
					nBC: n.nBC,
					sBC: n.sBC,
					_d: s
				});
				n.ann_ar[o] = d, n.addChild(d)
			}
		}, n.update = function(e) {
			if (0 != n.totalAnnotations)
				for (var t = 0, o; t < n.totalAnnotations; t++) o = n.ann_ar[t], 0 >= e ? o.hide() : e >= o.startTime && e <= o.endTime ? (o.show(), n.position()) : o.hide()
		}, n.position = function(e) {
			var t = o.sW / o.maxWidth;
			if (n.setX(Math.round((o.sW - t * o.maxWidth) / 2)), n.setY(Math.round((o.tempVidStageHeight - t * o.maxHeight) / 2)), n.scale = o.sW / o.maxWidth, n.scaleY = n.scale, n.scaleX = n.scale, n.scaleInverse = o.maxWidth / o.sW, !n.showAnnotationsPositionTool_bl)
				for (var s = 0; s < n.totalAnnotations; s++) {
					var a = n.ann_ar[s];
					a.setScale2(n.scale), a.finalX = Math.floor(a.left * n.scaleX), o.playlist_do && o.isPlaylistShowed_bl && "right" == o.tempPlaylistPosition_str && !o.isFullScreen_bl && a.left > o.maxWidth / 3 && (a.finalX -= o.playlistWidth + o.spaceBetweenControllerAndPlaylist), a.finalY = Math.floor(a.top * n.scaleY), a.clsBtn && (a.clsBtn.setWidth(Math.round(a.clsBtn.buttonWidth * n.scaleInverse)), a.clsBtn.setHeight(Math.round(a.clsBtn.buttonHeight * n.scaleInverse)), a.clsBtn.n_do.setWidth(Math.round(a.clsBtn.buttonWidth * n.scaleInverse)), a.clsBtn.n_do.setHeight(Math.round(a.clsBtn.buttonHeight * n.scaleInverse)), a.clsBtn.n_do_canvas && (a.clsBtn.n_do_canvas.style.width = Math.round(a.clsBtn.buttonWidth * n.scaleInverse) + "px", a.clsBtn.n_do_canvas.style.height = Math.round(a.clsBtn.buttonheight * n.scaleInverse) + "px", a.clsBtn.s_do_canvas.style.width = Math.round(a.clsBtn.buttonWidth * n.scaleInverse) + "px", a.clsBtn.s_do_canvas.style.height = Math.round(a.clsBtn.buttonheight * n.scaleInverse) + "px"), a.clsBtn.s_do.setWidth(Math.round(a.clsBtn.buttonWidth * n.scaleInverse)), a.clsBtn.s_do.setHeight(Math.round(a.clsBtn.buttonHeight * n.scaleInverse)), a.clsBtn.setX(Math.floor(a.getWidth() - a.clsBtn.w / 2)), a.clsBtn.setY(Math.floor(-(a.clsBtn.h / 2)))), a.prevFinalX != a.finalX && (e ? FWDAnimation.to(a, .8, {
						x: a.finalX,
						ease: Expo.easeInOut
					}) : a.setX(a.finalX)), a.prevFinalY != a.finalY && (e ? FWDAnimation.to(a, .8, {
						y: a.finalY,
						ease: Expo.easeInOut
					}) : a.setY(a.finalY)), a.prevFinalX = a.finalX, a.prevFinalY = a.finalY
				}
		}, n.updateHEXColors = function(e, t) {
			if (n.nBC = e, n.sBC = t, n.ann_ar)
				for (var o = 0; o < n.ann_ar.length; o++) n.ann_ar[o].updateHEXColors(e, t)
		}, n.init()
	};
	t.setPrototype = function() {
		t.prototype = null, t.prototype = new FWDUVPDisplayObject("div", "absolute")
	}, t.prototype = null, e.FWDUVPAnnotations = t
}(window),
function(t) {
	var o = function(e, s) {
		'use strict';
		var n = this,
			i = o.prototype;
		n.lastPercentPlayed = 0, n.volume = s, n.curDuration = 0, n.countNormalMp3Errors = 0, n.countShoutCastErrors = 0, n.maxShoutCastCountErrors = 5, n.maxNormalCountErrors = 1, n.testShoutCastId_to, n.audioVisualizerLinesColor_str = FWDUVPUtils.hexToRgb(e._d.audioVisualizerLinesColor_str), n.audioVisualizerCircleColor_str = FWDUVPUtils.hexToRgb(e._d.audioVisualizerCircleColor_str), n.hasError_bl = !0, n.isStopped_bl = !0, n.init = function() {
			n.setupAudio()
		}, n.resizeAndPosition = function(e, t) {
			e && (n.sW = e, n.sH = t), n.setWidth(n.sW), n.setHeight(n.sH), n.resizeSpectrumCanvas()
		}, n.setupAudio = function() {
			null == n.audio_el && (n.audio_el = document.createElement("audio"), n.screen.appendChild(n.audio_el), n.audio_el.controls = !1, n.audio_el.preload = "auto", n.audio_el.volume = n.volume, !FWDUVPUtils.isLocal && (n.audio_el.crossOrigin = "*"), n.setPlaybackRate(e._d.defaultPlaybackRate_ar[e._d.startAtPlaybackIndex])), n.audio_el.addEventListener("error", n.errorHandler), n.audio_el.addEventListener("canplay", n.safeToBeControlled), n.audio_el.addEventListener("canplaythrough", n.safeToBeControlled), n.audio_el.addEventListener("progress", n.updateProgress), n.audio_el.addEventListener("timeupdate", n.updateAudio), n.audio_el.addEventListener("pause", n.pauseHandler), n.audio_el.addEventListener("play", n.playHandler), n.audio_el.addEventListener("ended", n.endedHandler)
		}, n.destroyAudio = function() {
			n.audio_el && (n.audio_el.removeEventListener("error", n.errorHandler), n.audio_el.removeEventListener("canplay", n.safeToBeControlled), n.audio_el.removeEventListener("canplaythrough", n.safeToBeControlled), n.audio_el.removeEventListener("progress", n.updateProgress), n.audio_el.removeEventListener("timeupdate", n.updateAudio), n.audio_el.removeEventListener("pause", n.pauseHandler), n.audio_el.removeEventListener("play", n.playHandler), n.audio_el.removeEventListener("ended", n.endedHandler), n.audio_el.removeEventListener("waiting", n.startToBuffer), n.audio_el.removeEventListener("playing", n.stopToBuffer), n.audio_el.src = "", n.audio_el.load())
		}, n.startToBuffer = function() {
			n.dispatchEvent(FWDUVPVideoScreen.START_TO_BUFFER)
		}, n.stopToBuffer = function() {
			n.dispatchEvent(FWDUVPVideoScreen.STOP_TO_BUFFER)
		}, n.togglePlayPause = function() {
			null != n && n.isSafeToBeControlled_bl && (n.isPlaying_bl ? n.pause() : n.play())
		}, n.updateLinesColor = function(e) {
			n.audioVisualizerLinesColor_str = e
		}, n.errorHandler = function(s) {
			if (null != n.sourcePath_str && null != n.sourcePath_str) {
				if (n.isNormalMp3_bl && n.countNormalMp3Errors <= n.maxNormalCountErrors) return n.stop(), n.testShoutCastId_to = setTimeout(n.play, 200), void n.countNormalMp3Errors++;
				if (n.isShoutcast_bl && n.countShoutCastErrors <= n.maxShoutCastCountErrors && 0 == n.audio_el.networkState) return n.testShoutCastId_to = setTimeout(n.play, 200), void n.countShoutCastErrors++;
				var e;
				n.hasError_bl = !0, n.stop(), e = 0 == n.audio_el.networkState ? "error '_s.audio_el.networkState = 1'" : 1 == n.audio_el.networkState ? "error '_s.audio_el.networkState = 1'" : 2 == n.audio_el.networkState ? "'_s.audio_el.networkState = 2'" : 3 == n.audio_el.networkState ? "source not found" : s, t.console && t.console.log(n.audio_el.networkState), n.dispatchEvent(o.ERROR, {
					text: e
				})
			}
		}, n.setSource = function(e) {
			n.sourcePath_str = e, clearTimeout(n.testShoutCastId_to), -1 == n.sourcePath_str.indexOf(";") ? n.isShoutcast_bl = !1 : (n.isShoutcast_bl = !0, n.countShoutCastErrors = 0), -1 == n.sourcePath_str.indexOf(";") ? (n.isNormalMp3_bl = !0, n.countNormalMp3Errors = 0) : n.isNormalMp3_bl = !1, n.lastPercentPlayed = 0, n.audio_el && n.stop(!0)
		}, n.play = function(e) {
			if (n.isStopped_bl) n.isPlaying_bl = !1, n.hasError_bl = !1, n.allowScrubing_bl = !1, n.isStopped_bl = !1, n.setupAudio(), n.audio_el.src = n.sourcePath_str, n.play(), n.setVisible(!0);
			else if (!n.audio_el.ended || e) try {
				n.isPlaying_bl = !0, n.hasPlayedOnce_bl = !0;
				var t = n.audio_el.play();
				void 0 !== t && t.then(function() {}, function() {}), FWDUVPUtils.isIE && n.dispatchEvent(o.PLAY)
			} catch (t) {
				console.log(t)
			}
		}, n.resume = function() {
			n.isStopped_bl || n.play()
		}, n.pause = function() {
			null != n && null != n.audio_el && (n.audio_el.ended || (n.audio_el.pause(), n.isPlaying_bl = !1, FWDUVPUtils.isIE && n.dispatchEvent(o.PAUSE)))
		}, n.pauseHandler = function() {
			n.allowScrubing_bl || (n.stopSpectrum(), n.dispatchEvent(o.PAUSE))
		}, n.playHandler = function() {
			n.allowScrubing_bl || (!n.isStartEventDispatched_bl && (n.dispatchEvent(o.START), n.isStartEventDispatched_bl = !0), n.startSpectrum(), n.dispatchEvent(o.PLAY))
		}, n.endedHandler = function() {
			n.dispatchEvent(o.PLAY_COMPLETE)
		}, n.stop = function(e) {
			(null == n || null == n.audio_el || n.isStopped_bl) && !e || (n.isPlaying_bl = !1, n.isStopped_bl = !0, n.hasPlayedOnce_bl = !0, n.isSafeToBeControlled_bl = !1, n.isStartEventDispatched_bl = !1, n.setVisible(!1), clearTimeout(n.testShoutCastId_to), n.stopToUpdateSubtitles(), n.stopSpectrum(), n.audio_el.pause(), n.destroyAudio(), n.dispatchEvent(o.STOP), n.dispatchEvent(o.LOAD_PROGRESS, {
				percent: 0
			}))
		}, n.safeToBeControlled = function() {
			n.isSafeToBeControlled_bl || (n.hasHours_bl = 0 < Math.floor(n.audio_el.duration / 3600), n.isPlaying_bl = !0, n.isSafeToBeControlled_bl = !0, n.startToUpdateSubtitles(), n.dispatchEvent(o.SAFE_TO_SCRUBB), n.dispatchEvent(o.SAFE_TO_UPDATE_VOLUME))
		}, n.updateProgress = function() {
			var e = 0,
				t;
			0 < n.audio_el.buffered.length && (t = n.audio_el.buffered.end(n.audio_el.buffered.length - 1), e = t.toFixed(1) / n.audio_el.duration.toFixed(1), (isNaN(e) || !e) && (e = 0)), 1 == e && n.audio_el.removeEventListener("progress", n.updateProgress), n.dispatchEvent(o.LOAD_PROGRESS, {
				percent: e
			})
		}, n.updateAudio = function() {
			var e;
			n.allowScrubing_bl || (e = n.audio_el.currentTime / n.audio_el.duration, n.dispatchEvent(o.UPDATE, {
				percent: e
			}));
			var t = FWDUVPUtils.formatTime(n.audio_el.duration),
				s = FWDUVPUtils.formatTime(n.audio_el.currentTime);
			isNaN(n.audio_el.duration) ? n.dispatchEvent(FWDUVPVideoScreen.UPDATE_TIME, {
				curTime: "00:00",
				totalTime: "00:00",
				seconds: 0,
				totalTimeInSeconds: 0
			}) : n.dispatchEvent(FWDUVPVideoScreen.UPDATE_TIME, {
				curTime: s,
				totalTime: t,
				seconds: n.audio_el.currentTime,
				totalTimeInSeconds: n.audio_el.duration
			}), n.lastPercentPlayed = e, n.curDuration = s
		}, n.startToScrub = function() {
			n.allowScrubing_bl = !0
		}, n.stopToScrub = function() {
			n.allowScrubing_bl = !1
		}, n.scrubbAtTime = function(e) {
			n.audio_el.currentTime = e;
			var t = FWDUVPUtils.formatTime(n.audio_el.duration),
				o = FWDUVPUtils.formatTime(n.audio_el.currentTime);
			n.dispatchEvent(FWDUVPVideoScreen.UPDATE_TIME, {
				curTime: o,
				totalTime: t
			})
		}, n.scrub = function(t, s) {
			if (null != n.audio_el && n.audio_el.duration) {
				s && n.startToScrub();
				try {
					n.audio_el.currentTime = n.audio_el.duration * t;
					var e = FWDUVPUtils.formatTime(n.audio_el.duration),
						i = FWDUVPUtils.formatTime(n.audio_el.currentTime);
					n.dispatchEvent(o.UPDATE_TIME, {
						curTime: i,
						totalTime: e
					})
				} catch (t) {}
			}
		}, n.replay = function() {
			n.scrub(0), n.play()
		}, n.stopToUpdateSubtitles = function() {
			clearInterval(n.startToUpdateSubtitleId_int)
		}, n.startToUpdateSubtitles = function() {
			clearInterval(n.startToUpdateSubtitleId_int), n.startToUpdateSubtitleId_int = setInterval(n.updateSubtitleHandler, 10)
		}, n.updateSubtitleHandler = function() {
			n.dispatchEvent(o.UPDATE_SUBTITLE, {
				curTime: n.audio_el.currentTime
			})
		}, n.setVolume = function(e) {
			e != null && (n.volume = e), n.audio_el && (n.audio_el.volume = n.volume)
		}, n.setPlaybackRate = function(e) {
			n.audio_el && (.25 == e && (e = "0.5"), n.audio_el.defaultPlaybackRate = e, n.audio_el.playbackRate = e)
		}, n.setupSpectrum = function() {
			if (!FWDUVPUtils.isIOS && !e.useWithoutVideoScreen_bl) {
				var s = t.AudioContext || t.webkitAudioContext;
				!n.canvas_do && s && (3 < o.countAudioContext || (o.countAudioContext++, n.canvas_do = new FWDUVPDisplayObject("canvas"), n.addChild(n.canvas_do), n.canvas = n.canvas_do.screen, n.ctx = n.canvas.getContext("2d"), n.resizeSpectrumCanvas(), s && (n.context = new s, n.analyser = n.context.createAnalyser(), n.source = n.context.createMediaElementSource(n.audio_el), n.source.connect(n.analyser), n.analyser.connect(n.context.destination), n.fbc_array = new Uint8Array(n.analyser.frequencyBinCount), n.renderSpectrum())))
			}
		}, n.resizeSpectrumCanvas = function() {
			n.canvas_do && (n.canvas_do.setWidth(n.sW), n.canvas_do.setHeight(n.sH), n.canvas.width = n.sW, n.canvas.height = n.sH)
		}, n.bars = 200, FWDUVPUtils.isMobile && (n.bars = 100), n.react_x = 0, n.react_y = 0, n.radius = 0, n.deltarad = 0, n.shockwave = 0, n.rot = 0, n.intensity = 0, n.isSeeking = 0, n.center_x, n.center_y, n.renderSpectrum = function() {
			if (n.canvas_do) {
				n.resizeSpectrumCanvas();
				var e = n.ctx.createLinearGradient(0, 0, 0, n.canvas.height);
				e.addColorStop(0, "rgba(0, 0, 0, 1)"), e.addColorStop(1, "rgba(0, 0, 0, 1)"), n.ctx.fillStyle = e, n.ctx.fillRect(0, 0, n.canvas.width, n.canvas.height), n.ctx.fillStyle = "rgba(255, 255, 255, " + (125e-7 * n.intensity - .4) + ")", n.ctx.fillRect(0, 0, n.canvas.width, n.canvas.height), n.rot += 1e-7 * n.intensity, n.react_x = 0, n.react_y = 0, n.intensity = 0, n.analyser.getByteFrequencyData(n.fbc_array);
				for (var t = 0; t < n.bars; t++) {
					var o = 2 * Math.PI / n.bars,
						s = n.center_x,
						a = n.center_y,
						d = n.sH / 3;
					isNaN(d) && (d = 10);
					var r = Math.round(n.fbc_array[t] / 256 * d),
						l = Math.round(.02 * r),
						u = n.center_x + Math.cos(o * t + n.rot) * (n.radius + r),
						_ = n.center_y + Math.sin(o * t + n.rot) * (n.radius + r);
					n.ctx.save();
					var c = n.audioVisualizerLinesColor_str;
					n.ctx.strokeStyle = c, n.ctx.lineWidth = l, n.ctx.beginPath(), n.ctx.moveTo(s, a), n.ctx.lineTo(u, _), n.ctx.stroke(), n.react_x += Math.cos(o * t + n.rot) * (n.radius + r), n.react_y += Math.sin(o * t + n.rot) * (n.radius + r), n.intensity += r
				}
				n.center_x = n.canvas.width / 2 - .007 * n.react_x, n.center_y = n.canvas.height / 2 - .007 * n.react_y;
				var p = n.radius;
				n.radius = 25 + .002 * n.intensity, n.deltarad = n.radius - p, n.ctx.fillStyle = n.audioVisualizerCircleColor_str, n.ctx.beginPath(), n.ctx.arc(n.center_x, n.center_y, n.radius + 2, 0, 2 * Math.PI, !1), n.ctx.fill(), n.shockwave += 60, n.ctx.lineWidth = 15, n.ctx.strokeStyle = n.audioVisualizerCircleColor_str, n.ctx.beginPath(), n.ctx.arc(n.center_x, n.center_y, n.shockwave + n.radius, 0, 2 * Math.PI, !1), n.ctx.stroke(), 15 < n.deltarad && (n.shockwave = 0, n.ctx.fillStyle = "rgba(255, 255, 255, 0.7)", n.ctx.fillRect(0, 0, n.canvas.width, n.canvas.height), n.rot += .4), n.startSpectrum()
			}
		}, n.startSpectrum = function() {
			n.canvas_do && (n.stopSpectrum(), n.spectrumAnimationFrameId = t.requestAnimationFrame(n.renderSpectrum))
		}, n.stopSpectrum = function() {
			n.canvas_do && cancelAnimationFrame(n.spectrumAnimationFrameId)
		}, n.init()
	};
	o.setPrototype = function() {
		o.prototype = new FWDUVPDisplayObject("div")
	}, o.UPDATE_SUBTITLE = "updateSubtitle", o.ERROR = "error", o.UPDATE = "update", o.UPDATE = "update", o.UPDATE_TIME = "updateTime", o.SAFE_TO_SCRUBB = "safeToControll", o.SAFE_TO_UPDATE_VOLUME = "safeToUpdateVolume", o.LOAD_PROGRESS = "loadProgress", o.START = "start", o.PLAY = "play", o.PAUSE = "pause", o.STOP = "stop", o.PLAY_COMPLETE = "playComplete", o.countAudioContext = 0, t.FWDUVPAudioScreen = o
}(window),
function() {
	var e = function(t, o) {
		'use strict';
		var s = this,
			n = e.prototype;
		s.image_img, s.catThumbBk_img = t.catThumbBk_img, s.catNextN_img = t.catNextN_img, s.catPrevN_img = t.catPrevN_img, s.catCloseN_img = t.catCloseN_img, s.thumbs_ar = [], s.categories_ar = t.cats_ar, s.catBkPath_str = t.catBkPath_str, s.id = 0, s.mouseX = 0, s.mouseY = 0, s.dif = 0, s.tempId = s.id, s.sW = 0, s.sH = 0, s.thumbW = 0, s.thumbH = 0, s.buttonsMargins = t.buttonsMargins, s.thumbnailMaxWidth = t.thumbnailMaxWidth, s.thumbnailMaxHeight = t.thumbnailMaxHeight, s.spacerH = t.horizontalSpaceBetweenThumbnails, s.spacerV = t.verticalSpaceBetweenThumbnails, s.dl, s.howManyThumbsToDisplayH = 0, s.howManyThumbsToDisplayV = 0, s.catNextN_img && (s.categoriesOffsetTotalWidth = 2 * s.catNextN_img.width + 40 + 2 * s.buttonsMargins, s.categoriesOffsetTotalHeight = s.catNextN_img.height + 40), s.totalThumbnails = s.categories_ar.length, s.delayRate = .06, s.countLoadedThumbs = 0, s.inputBackgroundColor_str = t.searchInputBackgroundColor_str, s.inputColor_str = t.searchInputColor_str, s.showSearchInpt = t.showPlaylistsSearchInput_bl, s.isMbl = FWDUVPUtils.isMobile, s.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, s.useVectorIcons_bl = t.useVectorIcons_bl, s.init = function() {
			s.screen.className = "fwduvp fwduvp-categories", s.sBC = -1 == t.sknPth.indexOf("hex_white") ? t.sBC : "#FFFFFF", s.getStyle().zIndex = 2147483647, s.getStyle().msTouchAction = "none", s.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", s.getStyle().width = "100%", s.mainHld = new FWDUVPDisplayObject("div"), s.mainHld.screen.className = "fwduvp-categories-background", s.mainHld.getStyle().background = "url('" + s.catBkPath_str + "')", s.mainHld.setY(-3e3), s.addChild(s.mainHld), s.setupButtons(), s.setupDisable(), s.isMbl && s.setupMobileMove(), (!s.isMbl || s.isMbl && s.hasPointerEvent_bl) && s.setSelectable(!1), window.addEventListener ? (s.screen.addEventListener("mousewheel", s.mouseWheelDumyHandler), s.screen.addEventListener("DOMMouseScroll", s.mouseWheelDumyHandler)) : document.attachEvent && s.screen.attachEvent("onmousewheel", s.mouseWheelDumyHandler), s.showSearchInpt && s.setupInput()
		}, s.mouseWheelDumyHandler = function(t) {
			var e;
			if (FWDAnimation.isTweening(s.mainHld)) return t.preventDefault && t.preventDefault(), !1;
			for (var o = 0; o < s.totalThumbnails; o++)
				if (e = s.thumbs_ar[o], FWDAnimation.isTweening(e)) return t.preventDefault && t.preventDefault(), !1;
			var n = t.detail || t.wheelDelta;
			if (t.wheelDelta && (n *= -1), FWDUVPUtils.isOpera && (n *= -1), 0 < n) s.nextButtonOnMouseUpHandler();
			else if (0 > n) {
				if (0 >= s.leftId) return;
				s.prevButtonOnMouseUpHandler()
			}
			return !!t.preventDefault && void t.preventDefault()
		}, s.resizeAndPosition = function(e) {
			if (s.isShowed_bl || e) {
				var t = FWDUVPUtils.getScrollOffsets(),
					n = FWDUVPUtils.getViewportSize();
				s.sW = n.w, s.sH = n.h, FWDAnimation.killTweensOf(s.mainHld), s.mainHld.setX(0), s.mainHld.setWidth(s.sW), s.mainHld.setHeight(s.sH), s.setX(t.x), s.setY(t.y), s.setHeight(s.sH), (s.isMbl || o.isEmbedded_bl) && s.setWidth(s.sW), s.positionButtons(), s.tempId = s.id, s.resizeAndPositionThumbnails(), s.disableEnableNextAndPrevButtons(), s.input_do && (s.input_do.setX(s.sW - s.input_do.getWidth() - s.buttonsMargins), s.input_do.setY(s.sH - s.input_do.getHeight() - s.buttonsMargins), s.inputArrow_do.setX(s.input_do.x + s.input_do.getWidth() - 20), s.inputArrow_do.setY(s.input_do.y + s.input_do.getHeight() / 2 - s.inputArrow_do.getHeight() / 2))
			}
		}, s.onScrollHandler = function() {
			var e = FWDUVPUtils.getScrollOffsets();
			s.setX(e.x), s.setY(e.y)
		}, s.setupInput = function() {
			s.input_do = new FWDUVPDisplayObject("input"), s.input_do.screen.className = "fwduvp-search", s.input_do.screen.maxLength = 20, s.input_do.getStyle().textAlign = "left", s.input_do.getStyle().outline = "none", s.input_do.getStyle().boxShadow = "none", s.input_do.getStyle().fontFamily = "Arial", s.input_do.getStyle().fontSize = "12px", s.input_do.getStyle().padding = "14px 10px", s.input_do.getStyle().boxSizing = "border-box", s.input_do.getStyle().backgroundColor = s.inputBackgroundColor_str, s.input_do.getStyle().color = s.inputColor_str, s.input_do.screen.value = "Search", s.input_do.setHeight(20), s.input_do.setX(18), s.noSearchFound_do = new FWDUVPDisplayObject("div"), s.noSearchFound_do.screen.className = "fwduvp-search-not-found", s.noSearchFound_do.setX(0), s.noSearchFound_do.getStyle().textAlign = "center", s.noSearchFound_do.getStyle().width = "100%", s.noSearchFound_do.getStyle().fontFamily = "Arial", s.noSearchFound_do.getStyle().fontSize = "12px", s.noSearchFound_do.getStyle().color = s.inputColor_str, s.noSearchFound_do.setInnerHTML("NOTHING FOUND!"), s.noSearchFound_do.setVisible(!1), s.addChild(s.noSearchFound_do);
			var e = new Image;
			e.src = t.inputArrowPath_str, s.inputArrow_do = new FWDUVPDisplayObject("img"), s.inputArrow_do.setScreen(e), s.inputArrow_do.setWidth(12), s.inputArrow_do.setHeight(12), s.hasPointerEvent_bl ? s.input_do.screen.addEventListener("pointerdown", s.inputFocusInHandler) : s.input_do.screen.addEventListener && (s.input_do.screen.addEventListener("mousedown", s.inputFocusInHandler), s.input_do.screen.addEventListener("touchstart", s.inputFocusInHandler)), s.input_do.screen.addEventListener("keyup", s.keyUpHandler), s.mainHld.addChild(s.input_do), s.mainHld.addChild(s.inputArrow_do)
		}, s.inputFocusInHandler = function() {
			s.hasInputFocus_bl || (s.hasInputFocus_bl = !0, "Search" == s.input_do.screen.value && (s.input_do.screen.value = ""), s.input_do.screen.focus(), setTimeout(function() {
				s.hasPointerEvent_bl ? window.addEventListener("pointerdown", s.inputFocusOutHandler) : window.addEventListener && (window.addEventListener("mousedown", s.inputFocusOutHandler), window.addEventListener("touchstart", s.inputFocusOutHandler))
			}, 50))
		}, s.inputFocusOutHandler = function(t) {
			if (s.hasInputFocus_bl) {
				var e = FWDUVPUtils.getViewportMouseCoordinates(t);
				if (!FWDUVPUtils.hitTest(s.input_do.screen, e.screenX, e.screenY)) return s.hasInputFocus_bl = !1, void("" == s.input_do.screen.value && (s.input_do.screen.value = "Search", s.hasPointerEvent_bl ? window.removeEventListener("pointerdown", s.inputFocusOutHandler) : window.removeEventListener && (window.removeEventListener("mousedown", s.inputFocusOutHandler), window.removeEventListener("touchstart", s.inputFocusOutHandler))))
			}
		}, s.keyUpHandler = function(t) {
			t.stopPropagation && t.stopPropagation(), s.prevInputValue_str != s.input_do.screen.value && (clearTimeout(s.keyPressedId_to), s.keyPressed_bl = !0, clearTimeout(s.rsId_to), s.rsId_to = setTimeout(function() {
				s.resizeAndPositionThumbnails(!0), s.disableEnableNextAndPrevButtons()
			}, 400)), s.prevInputValue_str = s.input_do.screen.value, s.keyPressedId_to = setTimeout(function() {
				s.keyPressed_bl = !1
			}, 450)
		}, s.showNothingFound = function() {
			s.isShowNothingFound_bl || (s.isShowNothingFound_bl = !0, s.noSearchFound_do.setVisible(!0), s.noSearchFound_do.setY(parseInt((s.sH - s.noSearchFound_do.getHeight()) / 2)), s.noSearchFound_do.setAlpha(0), FWDAnimation.to(s.noSearchFound_do, .1, {
				alpha: 1,
				yoyo: !0,
				repeat: 4
			}))
		}, s.hideNothingFound = function() {
			s.isShowNothingFound_bl && (s.isShowNothingFound_bl = !1, FWDAnimation.killTweensOf(s.noSearchFound_do), s.noSearchFound_do.setVisible(!1))
		}, s.setupDisable = function() {
			s.disable_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (s.disable_do.setBkColor("#FFFFFF"), s.disable_do.setAlpha(.01)), s.addChild(s.disable_do)
		}, s.showDisable = function() {
			s.disable_do.w == s.sW || (s.disable_do.setWidth(s.sW), s.disable_do.setHeight(s.sH))
		}, s.hideDisable = function() {
			0 == s.disable_do.w || (s.disable_do.setWidth(0), s.disable_do.setHeight(0))
		}, s.setupButtons = function() {
			s.clsBtn || (s.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), s.clsBtn = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCategoriesNextAndPrevNormalState", "UVPCategoriesNextAndPrevSelectedState")) : (FWDUVPSimpleButton.setPrototype(), s.clsBtn = new FWDUVPSimpleButton(s.catCloseN_img, t.catCloseSPath_str, void 0, !0, t.useHEX, t.nBC, s.sBC, !1, !1, !1, !1, !0)), s.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, s.closeButtonOnMouseUpHandler), s.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), s.nextButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-FF-right'></span></div>", void 0, "UVPCategoriesNextAndPrevNormalState", "UVPCategoriesNextAndPrevSelectedState")) : (FWDUVPSimpleButton.setPrototype(), s.nextButton_do = new FWDUVPSimpleButton(s.catNextN_img, t.catNextSPath_str, void 0, !0, t.useHEX, t.nBC, s.sBC, !1, !1, !1, !1, !0)), s.nextButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, s.nextButtonOnMouseUpHandler), s.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), s.prevButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-FF-left'></span></div>", void 0, "UVPCategoriesNextAndPrevNormalState", "UVPCategoriesNextAndPrevSelectedState")) : (FWDUVPSimpleButton.setPrototype(), s.prevButton_do = new FWDUVPSimpleButton(s.catPrevN_img, t.catPrevSPath_str, void 0, !0, t.useHEX, t.nBC, s.sBC, !1, !1, !1, !1, !0)), s.prevButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, s.prevButtonOnMouseUpHandler))
		}, s.closeButtonOnMouseUpHandler = function() {
			s.hide()
		}, s.nextButtonOnMouseUpHandler = function() {
			var e = s.howManyThumbsToDisplayH * s.howManyThumbsToDisplayV;
			s.tempId += e, s.tempId > s.totalThumbnails - 1 && (s.tempId = s.totalThumbnails - 1);
			var t = Math.floor(s.tempId / e);
			s.tempId = t * e, s.resizeAndPositionThumbnails(!0, "next"), s.disableEnableNextAndPrevButtons(!1, !0)
		}, s.prevButtonOnMouseUpHandler = function() {
			var e = s.howManyThumbsToDisplayH * s.howManyThumbsToDisplayV;
			s.tempId -= e, 0 > s.tempId && (s.tempId = 0);
			var t = Math.floor(s.tempId / e);
			s.tempId = t * e, s.resizeAndPositionThumbnails(!0, "prev"), s.disableEnableNextAndPrevButtons(!0, !1)
		}, s.positionButtons = function() {
			s.clsBtn.setX(s.sW - s.clsBtn.w - s.buttonsMargins), s.clsBtn.setY(s.buttonsMargins), s.nextButton_do.setX(s.sW - s.nextButton_do.w - s.buttonsMargins), s.nextButton_do.setY(parseInt((s.sH - s.nextButton_do.h) / 2)), s.prevButton_do.setX(s.buttonsMargins), s.prevButton_do.setY(parseInt((s.sH - s.prevButton_do.h) / 2))
		}, s.disableEnableNextAndPrevButtons = function(e, t) {
			var o = s.howManyThumbsToDisplayH * s.howManyThumbsToDisplayV,
				n = Math.floor(s.tempId / o),
				i = Math.ceil(s.totalThumbnails / o) - 1,
				a = s.howManyThumbsToDisplayH * n,
				d = i * s.howManyThumbsToDisplayH;
			o >= s.totalThumbnails ? (s.nextButton_do.disable(), s.prevButton_do.disable(), s.nextButton_do.setDisabledState(), s.prevButton_do.setDisabledState()) : 0 == n ? (s.nextButton_do.enable(), s.prevButton_do.disable(), s.nextButton_do.setEnabledState(), s.prevButton_do.setDisabledState()) : n == i ? (s.nextButton_do.disable(), s.prevButton_do.enable(), s.nextButton_do.setDisabledState(), s.prevButton_do.setEnabledState()) : (s.nextButton_do.enable(), s.prevButton_do.enable(), s.nextButton_do.setEnabledState(), s.prevButton_do.setEnabledState()), e || s.prevButton_do.setNormalState(), t || s.nextButton_do.setNormalState()
		}, s.setupMobileMove = function() {
			s.hasPointerEvent_bl ? s.screen.addEventListener("pointerdown", s.mobileDownHandler) : s.screen.addEventListener("touchstart", s.mobileDownHandler)
		}, s.mobileDownHandler = function(t) {
			if (!(t.touches && 1 != t.touches.length)) {
				var e = FWDUVPUtils.getViewportMouseCoordinates(t);
				s.mouseX = e.screenX, s.mouseY = e.screenY, s.hasPointerEvent_bl ? (window.addEventListener("pointerup", s.mobileUpHandler), window.addEventListener("pointermove", s.mobileMoveHandler)) : (window.addEventListener("touchend", s.mobileUpHandler), window.addEventListener("touchmove", s.mobileMoveHandler, {
					passive: !1
				}))
			}
		}, s.mobileMoveHandler = function(t) {
			if (t.preventDefault && t.preventDefault(), !(t.touches && 1 != t.touches.length)) {
				s.showDisable();
				var e = FWDUVPUtils.getViewportMouseCoordinates(t);
				s.dif = s.mouseX - e.screenX, s.mouseX = e.screenX, s.mouseY = e.screenY
			}
		}, s.mobileUpHandler = function() {
			s.hideDisable(), 10 < s.dif ? s.nextButtonOnMouseUpHandler() : -10 > s.dif && s.prevButtonOnMouseUpHandler(), s.dif = 0, s.hasPointerEvent_bl ? (window.removeEventListener("pointerup", s.mobileUpHandler), window.removeEventListener("pointermove", s.mobileMoveHandler)) : (window.removeEventListener("touchend", s.mobileUpHandler), window.removeEventListener("touchmove", s.mobileMoveHandler))
		}, s.setupThumbnails = function() {
			if (!s.areThumbnailsCreated_bl) {
				s.areThumbnailsCreated_bl = !0;
				for (var e = 0, o; e < s.totalThumbnails; e++) FWDUVPCategoriesThumb.setPrototype(), o = new FWDUVPCategoriesThumb(s, e, t.catThumbBkPath_str, t.catThumbBkTextPath_str, t.thumbnailSelectedType_str, s.categories_ar[e].htmlContent, s.categories_ar[e].htmlText_str), o.addListener(FWDUVPCategoriesThumb.MOUSE_UP, s.thumbnailOnMouseUpHandler), s.thumbs_ar[e] = o, s.mainHld.addChild(o);
				s.mainHld.addChild(s.clsBtn), s.mainHld.addChild(s.nextButton_do), s.mainHld.addChild(s.prevButton_do)
			}
		}, s.thumbnailOnMouseUpHandler = function(t) {
			s.id = t.id, s.disableOrEnableThumbnails(), s.hide()
		}, s.resizeAndPositionThumbnails = function(e, t) {
			if (s.areThumbnailsCreated_bl) {
				var o = [].concat(s.thumbs_ar),
					n, a, d, r, a, l, u, _, c, p;
				if (s.isSearched_bl = !1, s.input_do) {
					var h = s.input_do.screen.value.toLowerCase();
					if (h != "Search".toLowerCase())
						for (var b = 0; b < o.length; b++) n = o[b], -1 == n.htmlText_str.toLowerCase().indexOf(h.toLowerCase()) && (FWDAnimation.killTweensOf(n), n.hide(), o.splice(b, 1), b--)
				}
				s.totalThumbnails = o.length, s.totalThumbnails != s.thumbs_ar.length && (s.isSearched_bl = !0), 0 == s.totalThumbnails ? s.showNothingFound() : s.hideNothingFound(), s.remainWidthSpace = s.sW - a;
				var m = s.sW - s.categoriesOffsetTotalWidth,
					g = s.sH - s.categoriesOffsetTotalHeight;
				s.howManyThumbsToDisplayH = Math.ceil((m - s.spacerH) / (s.thumbnailMaxWidth + s.spacerH)), s.thumbW = Math.floor((m - s.spacerH * (s.howManyThumbsToDisplayH - 1)) / s.howManyThumbsToDisplayH), s.thumbW > s.thumbnailMaxWidth && (s.howManyThumbsToDisplayH += 1, s.thumbW = Math.floor((m - s.spacerH * (s.howManyThumbsToDisplayH - 1)) / s.howManyThumbsToDisplayH)), s.thumbH = Math.floor(s.thumbW / s.thumbnailMaxWidth * s.thumbnailMaxHeight), s.howManyThumbsToDisplayV = Math.floor(g / (s.thumbH + s.spacerV)), 1 > s.howManyThumbsToDisplayV && (s.howManyThumbsToDisplayV = 1), a = Math.min(s.howManyThumbsToDisplayH, s.totalThumbnails) * (s.thumbW + s.spacerH) - s.spacerH, l = Math.min(Math.ceil(s.totalThumbnails / s.howManyThumbsToDisplayH), s.howManyThumbsToDisplayV) * (s.thumbH + s.spacerV) - s.spacerV, u = s.howManyThumbsToDisplayH > s.totalThumbnails ? 0 : m - a, s.howManyThumbsToDisplayH > s.totalThumbnails && (s.howManyThumbsToDisplayH = s.totalThumbnails), p = s.howManyThumbsToDisplayH * s.howManyThumbsToDisplayV, d = Math.floor(s.tempId / p), s.isSearched_bl && (d = 0), c = s.howManyThumbsToDisplayH * d;
				var y = d * p,
					_ = y + p;
				_ > s.totalThumbnails && (_ = s.totalThumbnails);
				for (var b = 0; b < s.totalThumbnails; b++) {
					if (n = o[b], n.finalW = s.thumbW, b % s.howManyThumbsToDisplayH == s.howManyThumbsToDisplayH - 1 && (n.finalW += u), n.finalH = s.thumbH, n.finalX = b % s.howManyThumbsToDisplayH * (s.thumbW + s.spacerH), n.finalX += Math.floor(b / p) * s.howManyThumbsToDisplayH * (s.thumbW + s.spacerH), n.finalX += (s.sW - a) / 2, n.finalX = Math.floor(n.finalX - c * (s.thumbW + s.spacerH)), n.finalY = b % p, n.finalY = Math.floor(n.finalY / s.howManyThumbsToDisplayH) * (s.thumbH + s.spacerV), n.finalY += (g - l) / 2, n.finalY += s.categoriesOffsetTotalHeight / 2, n.finalY = Math.floor(n.finalY), r = Math.floor(b / p), r > d ? n.finalX += 150 : r < d && (n.finalX -= 150), !e) n.resizeAndPosition();
					else if (b >= y && b < _) {
						if ("next" == t) var S = b % p * s.delayRate + .1;
						else var S = (p - b % p) * s.delayRate + .1;
						s.keyPressed_bl && (S = 0), n.resizeAndPosition(!0, S)
					} else n.resizeAndPosition(!0, 0);
					n.show()
				}
				s.howManyThumbsToDisplayH * s.howManyThumbsToDisplayV >= s.totalThumbnails ? (s.nextButton_do.setVisible(!1), s.prevButton_do.setVisible(!1)) : (s.nextButton_do.setVisible(!0), s.prevButton_do.setVisible(!0))
			}
		}, s.loadImages = function() {
			s.countLoadedThumbs > s.totalThumbnails - 1 || (s.image_img && (s.image_img.onload = null, s.image_img.onerror = null), s.image_img = new Image, s.image_img.onerror = s.onImageLoadError, s.image_img.onload = s.onImageLoadComplete, s.image_img.src = s.categories_ar[s.countLoadedThumbs].thumbnailPath)
		}, s.onImageLoadError = function() {}, s.onImageLoadComplete = function() {
			var e = s.thumbs_ar[s.countLoadedThumbs];
			e.setImage(s.image_img), s.countLoadedThumbs++, s.loadWithDelayId_to = setTimeout(s.loadImages, 40)
		}, s.disableOrEnableThumbnails = function() {
			for (var e = 0, t; e < s.totalThumbnails; e++) t = s.thumbs_ar[e], e == s.id ? t.disable() : t.enable()
		}, s.show = function(e) {
			s.isShowed_bl || (s.isShowed_bl = !0, s.isOnDOM_bl = !0, s.id = e, o.isFullScreen_bl ? o.main_do.addChild(s) : document.documentElement.appendChild(s.screen), window.addEventListener ? window.addEventListener("scroll", s.onScrollHandler) : window.attachEvent && window.attachEvent("onscroll", s.onScrollHandler), s.setupThumbnails(), s.useVectorIcons_bl ? (s.clsBtn.setFinalSize(!0), s.nextButton_do.setFinalSize(!0), s.prevButton_do.setFinalSize(!0), s.checkButtonsId_to = setInterval(function() {
				0 != s.clsBtn.w && (s.categoriesOffsetTotalWidth = 2 * s.clsBtn.w + 40 + 2 * s.buttonsMargins, s.categoriesOffsetTotalHeight = s.clsBtn.h, s.resizeAndPosition(!0), s.showDisable(), s.disableOrEnableThumbnails(), clearTimeout(s.hideCompleteId_to), clearTimeout(s.showCompleteId_to), s.mainHld.setY(-s.sH), s.isMbl ? (s.showCompleteId_to = setTimeout(s.showCompleteHandler, 1200), FWDAnimation.to(s.mainHld, .8, {
					y: 0,
					delay: .4,
					ease: Expo.easeInOut
				})) : (s.showCompleteId_to = setTimeout(s.showCompleteHandler, 800), FWDAnimation.to(s.mainHld, .8, {
					y: 0,
					ease: Expo.easeInOut
				})), clearInterval(s.checkButtonsId_to))
			}, 50)) : (s.resizeAndPosition(!0), s.showDisable(), s.disableOrEnableThumbnails(), clearTimeout(s.hideCompleteId_to), clearTimeout(s.showCompleteId_to), s.mainHld.setY(-s.sH), s.isMbl ? (s.showCompleteId_to = setTimeout(s.showCompleteHandler, 1200), FWDAnimation.to(s.mainHld, .8, {
				y: 0,
				delay: .4,
				ease: Expo.easeInOut
			})) : (s.showCompleteId_to = setTimeout(s.showCompleteHandler, 800), FWDAnimation.to(s.mainHld, .8, {
				y: 0,
				ease: Expo.easeInOut
			}))))
		}, s.showCompleteHandler = function() {
			s.mainHld.setY(0), s.hideDisable(), FWDUVPUtils.isIphone && (o.videoScreen_do && o.videoScreen_do.setY(-5e3), o.ytb_do && o.ytb_do.setY(-5e3)), s.resizeAndPosition(!0), s.areThumbnailsLoaded_bl || (s.loadImages(), s.areThumbnailsLoaded_bl = !0)
		}, s.hide = function() {
			s.isShowed_bl && (s.isShowed_bl = !1, FWDUVPUtils.isIphone && (o.videoScreen_do && o.videoScreen_do.setY(0), o.ytb_do && o.ytb_do.setY(0)), clearTimeout(s.hideCompleteId_to), clearTimeout(s.showCompleteId_to), s.showDisable(), s.hideCompleteId_to = setTimeout(s.hideCompleteHandler, 800), FWDAnimation.killTweensOf(s.mainHld), FWDAnimation.to(s.mainHld, .8, {
				y: -s.sH,
				ease: Expo.easeInOut
			}), window.addEventListener ? window.removeEventListener("scroll", s.onScrollHandler) : window.detachEvent && window.detachEvent("onscroll", s.onScrollHandler), s.resizeAndPosition())
		}, s.hideCompleteHandler = function() {
			o.main_do.contains(s) ? o.main_do.removeChild(s) : document.documentElement.removeChild(s.screen), s.isOnDOM_bl = !1, s.dispatchEvent(e.HIDE_COMPLETE)
		}, s.init()
	};
	e.setPrototype = function() {
		e.prototype = new FWDUVPDisplayObject("div")
	}, e.HIDE_COMPLETE = "hideComplete", e.prototype = null, window.FWDUVPCategories = e
}(),
function(e) {
	var t = function(e, o, s, n, i, a, d) {
		'use strict';
		var l = this,
			r = t.prototype;
		l.backgroundImagePath_str = s, l.catThumbTextBkPath_str = n, l.canvas_el = null, l.htmlContent = a, l.htmlText_str = d, l.thumbnailSelectedType_str = i, l.id = o, l.isDark = !0, -1 == s.indexOf("dark") && (l.isDark = !1), l.dispatchShowWithDelayId_to, l.hasCanvas_bl = FWDUVPlayer.hasCanvas, l.isMbl = FWDUVPUtils.isMobile, l.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, l.init = function() {
			l.getStyle().background = "url('" + l.backgroundImagePath_str + "')", l.screen.className = "fwduvp-categories-thumbnail-background", l.setupMainContainers(), l.setupDescription(), l.setupDumy()
		}, l.setupMainContainers = function() {
			l.imageHolder_do = new FWDUVPDisplayObject("div"), l.addChild(l.imageHolder_do)
		}, l.setupDumy = function() {
			l.dumy_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (l.dumy_do.setBkColor("#FFFFFF"), l.dumy_do.setAlpha(0)), l.addChild(l.dumy_do)
		}, l.setupDescription = function() {
			l.simpleText_do = new FWDUVPDisplayObject("div"), l.simpleText_do.getStyle().background = "url('" + l.catThumbTextBkPath_str + "')";
			var e = "fwduvp-categories-white-text";
			l.isDark && (e = "fwduvp-categories-dark-text"), l.simpleText_do.screen.className = e, l.slTitle = l.simpleText_do.screen.className, FWDUVPUtils.isFirefox && (l.simpleText_do.hasTransform3d_bl = !1, l.simpleText_do.hasTransform2d_bl = !1), l.simpleText_do.setBackfaceVisibility(), l.simpleText_do.getStyle().width = "100%", l.simpleText_do.getStyle().fontFamily = "Arial", l.simpleText_do.getStyle().fontSize = "12px", l.simpleText_do.getStyle().textAlign = "left", l.simpleText_do.getStyle().color = "#FFFFFF", l.simpleText_do.setInnerHTML(l.htmlContent), l.addChild(l.simpleText_do)
		}, l.positionDescription = function() {
			l.simpleText_do.setY(parseInt(l.finalH - l.simpleText_do.getHeight()))
		}, l.setupBlackAndWhiteImage = function(e) {
			if (l.hasCanvas_bl && "opacity" != l.thumbnailSelectedType_str) {
				var t = document.createElement("canvas"),
					o = t.getContext("2d");
				t.width = l.imageOriginalW, t.height = l.imageOriginalH, o.drawImage(e, 0, 0);
				var s = o.getImageData(0, 0, t.width, t.height),
					n = s._d;
				if ("threshold" == l.thumbnailSelectedType_str)
					for (var a = 0; a < n.length; a += 4) {
						var d = n[a],
							u = n[a + 1],
							_ = n[a + 2],
							c = 150 <= .2126 * d + .7152 * u + .0722 * _ ? 255 : 0;
						n[a] = n[a + 1] = n[a + 2] = c
					} else if ("blackAndWhite" == l.thumbnailSelectedType_str)
						for (var a = 0; a < n.length; a += 4) {
							var d = n[a],
								u = n[a + 1],
								_ = n[a + 2],
								c = .2126 * d + .7152 * u + .0722 * _;
							n[a] = n[a + 1] = n[a + 2] = c
						}
				o.putImageData(s, 0, 0, 0, 0, s.width, s.height), l.effectImage_do = new FWDUVPDisplayObject("canvas"), l.effectImage_do.screen = t, l.effectImage_do.setAlpha(.9), l.effectImage_do.setMainProperties()
			}
		}, l.setImage = function(t) {
			l.normalImage_do = new FWDUVPDisplayObject("img"), l.normalImage_do.setScreen(t), l.imageOriginalW = l.normalImage_do.w, l.imageOriginalH = l.normalImage_do.h, l.setButtonMode(!0), l.setupBlackAndWhiteImage(t), l.resizeImage(), l.imageHolder_do.setX(parseInt(l.finalW / 2)), l.imageHolder_do.setY(parseInt(l.finalH / 2)), l.imageHolder_do.setWidth(0), l.imageHolder_do.setHeight(0), l.normalImage_do.setX(-parseInt(l.normalImage_do.w / 2)), l.normalImage_do.setY(-parseInt(l.normalImage_do.h / 2)), l.normalImage_do.setAlpha(0), l.effectImage_do && (l.effectImage_do.setX(-parseInt(l.normalImage_do.w / 2)), l.effectImage_do.setY(-parseInt(l.normalImage_do.h / 2)), l.effectImage_do.setAlpha(.01)), FWDAnimation.to(l.imageHolder_do, .8, {
				x: 0,
				y: 0,
				w: l.finalW,
				h: l.finalH,
				ease: Expo.easeInOut
			}), FWDAnimation.to(l.normalImage_do, .8, {
				alpha: 1,
				x: l.imageFinalX,
				y: l.imageFinalY,
				ease: Expo.easeInOut
			}), l.effectImage_do && FWDAnimation.to(l.effectImage_do, .8, {
				x: l.imageFinalX,
				y: l.imageFinalY,
				ease: Expo.easeInOut
			}), l.hasPointerEvent_bl ? (l.screen.addEventListener("pointerup", l.onMouseUp), l.screen.addEventListener("pointerover", l.onMouseOver), l.screen.addEventListener("pointerout", l.onMouseOut)) : l.screen.addEventListener && (!l.isMbl && (l.screen.addEventListener("mouseover", l.onMouseOver), l.screen.addEventListener("mouseout", l.onMouseOut), l.screen.addEventListener("mouseup", l.onMouseUp)), l.screen.addEventListener("touchend", l.onMouseUp)), l.imageHolder_do.addChild(l.normalImage_do), l.effectImage_do && l.imageHolder_do.addChild(l.effectImage_do), l.hasImage_bl = !0, l.id == e.id && l.disable()
		}, l.onMouseOver = function(t) {
			l.isDisabled_bl || (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) && l.setSelectedState(!0)
		}, l.onMouseOut = function(t) {
			l.isDisabled_bl || (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) && l.setNormalState(!0)
		}, l.onMouseUp = function(o) {
			l.isDisabled_bl || 2 == o.button || (o.preventDefault && o.preventDefault(), l.dispatchEvent(t.MOUSE_UP, {
				id: l.id
			}))
		}, l.resizeAndPosition = function(e, t) {
			FWDAnimation.killTweensOf(l), FWDAnimation.killTweensOf(l.imageHolder_do), e ? FWDAnimation.to(l, .8, {
				x: l.finalX,
				y: l.finalY,
				delay: t,
				ease: Expo.easeInOut
			}) : (l.setX(l.finalX), l.setY(l.finalY)), l.setWidth(l.finalW), l.setHeight(l.finalH), l.imageHolder_do.setX(0), l.imageHolder_do.setY(0), l.imageHolder_do.setWidth(l.finalW), l.imageHolder_do.setHeight(l.finalH), l.dumy_do.setWidth(l.finalW), l.dumy_do.setHeight(l.finalH), l.resizeImage(), l.positionDescription()
		}, l.resizeImage = function() {
			if (l.normalImage_do) {
				FWDAnimation.killTweensOf(l.normalImage_do);
				var e = l.finalW / l.imageOriginalW,
					t = l.finalH / l.imageOriginalH,
					o;
				o = e >= t ? e : t, l.imageFinalW = Math.ceil(o * l.imageOriginalW), l.imageFinalH = Math.ceil(o * l.imageOriginalH), l.imageFinalX = Math.round((l.finalW - l.imageFinalW) / 2), l.imageFinalY = Math.round((l.finalH - l.imageFinalH) / 2), l.effectImage_do && (FWDAnimation.killTweensOf(l.effectImage_do), l.effectImage_do.setX(l.imageFinalX), l.effectImage_do.setY(l.imageFinalY), l.effectImage_do.setWidth(l.imageFinalW), l.effectImage_do.setHeight(l.imageFinalH), l.isDisabled_bl && l.setSelectedState(!1, !0)), l.normalImage_do.setX(l.imageFinalX), l.normalImage_do.setY(l.imageFinalY), l.normalImage_do.setWidth(l.imageFinalW + 1), l.normalImage_do.setHeight(l.imageFinalH), l.isDisabled_bl ? l.normalImage_do.setAlpha(.3) : l.normalImage_do.setAlpha(1)
			}
		}, l.setNormalState = function(e) {
			l.isSelected_bl && (l.isSelected_bl = !1, l.slTitle && (l.simpleText_do.screen.className = l.slTitle), "threshold" == l.thumbnailSelectedType_str || "blackAndWhite" == l.thumbnailSelectedType_str ? e ? FWDAnimation.to(l.effectImage_do, 1, {
				alpha: .01,
				ease: Quart.easeOut
			}) : l.effectImage_do.setAlpha(.01) : "opacity" == l.thumbnailSelectedType_str && (e ? FWDAnimation.to(l.normalImage_do, 1, {
				alpha: 1,
				ease: Quart.easeOut
			}) : l.normalImage_do.setAlpha(1)))
		}, l.setSelectedState = function(e, t) {
			l.isSelected_bl && !t || (l.isSelected_bl = !0, l.setTitleSelectedClass(), "threshold" == l.thumbnailSelectedType_str || "blackAndWhite" == l.thumbnailSelectedType_str ? e ? FWDAnimation.to(l.effectImage_do, 1, {
				alpha: 1,
				ease: Expo.easeOut
			}) : l.effectImage_do.setAlpha(1) : "opacity" == l.thumbnailSelectedType_str && (e ? FWDAnimation.to(l.normalImage_do, 1, {
				alpha: .3,
				ease: Expo.easeOut
			}) : l.normalImage_do.setAlpha(.3)))
		}, l.show = function() {
			FWDAnimation.to(l, .8, {
				scale: 1,
				ease: Expo.easeInOut
			})
		}, l.hide = function() {
			FWDAnimation.to(l, .8, {
				scale: 0,
				ease: Expo.easeInOut
			})
		}, l.enable = function() {
			l.hasImage_bl && (l.isDisabled_bl = !1, l.setButtonMode(!0), l.setNormalState(!0))
		}, l.disable = function() {
			l.hasImage_bl && (l.isDisabled_bl = !0, l.setButtonMode(!1), l.setSelectedState(!0), l.setTitleSelectedClass())
		}, l.setTitleSelectedClass = function() {
			l.slTitle && (l.simpleText_do.screen.className = l.slTitle + " active")
		}, l.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPTransformDisplayObject("div")
	}, t.MOUSE_UP = "onMouseUp", t.prototype = null, e.FWDUVPCategoriesThumb = t
}(window),
function(t) {
	var o = function(s, n) {
		'use strict';
		var a = this,
			e = o.prototype;
		a.categories_ar = n.categories_ar, a.buttons_ar = [], a.arrowW = n.arrowW, a.arrowH = n.arrowH, a.useHEX = s._d.useHEX, a.nBC = s._d.nBC, a.sBC = s._d.sBC, a.arrowN_str = n.arrowN_str, a.arrowS_str = n.arrowS_str, a.selLabel = n.selectorLabel, a.selBkColN = n.selectorBackgroundNormalColor, a.selBkColS = n.selectorBackgroundSelectedColor, a.selTxtColN = n.selectorTextNormalColor, a.selTxtColS = n.selectorTextSelectedColor, a.itmBkClrN = n.buttonBackgroundNormalColor, a.itmBkClrS = n.buttonBackgroundSelectedColor, a.itmTxtClrN = n.buttonTextNormalColor, a.itmTxtClrS = n.buttonTextSelectedColor, a.scrBarHandY = 0, a.ttBtns = a.categories_ar.length, a.curId = n.startAtPlaylist, a.btnsHldW = 0, a.btnsHldH = 0, a.totalWidth = s.sW, a.buttonHeight = n.buttonHeight, a.ttBtnH = 0, a.spcBtwBtns = 1, a.thmbsFinY = 0, a.vy = 0, a.vy2 = 0, a.frc = .9, a.addMouseWheelSupport_bl = s._d.addMouseWheelSupport_bl, a.scollbarSpeedSensitivity = s._d.scollbarSpeedSensitivity, a.hasPointEvt = FWDUVPUtils.hasPointerEvent, a.isMbl = FWDUVPUtils.isMobile, a.init = function() {
			a.setOverflow("visible"), a.setupMainContainers(), a.setupScrollLogic(), a.getMaxWidthResizeAndPosition(), a.mainButtonsHolder_do.setVisible(!1), a.bk_do.setVisible(!1)
		}, a.setupMainContainers = function() {
			var e;
			if (a.mainHld = new FWDUVPDisplayObject("div"), a.mainHld.setOverflow("visible"), a.addChild(a.mainHld), a.bk_do = new FWDUVPDisplayObject("div"), a.bk_do.screen.className = "fwduvp-combobox-background", a.bk_do.setY(a.buttonHeight), a.bk_do.setBkColor(s.playlistBackgroundColor_str), a.bk_do.setAlpha(0), a.mainHld.addChild(a.bk_do), a.mainButtonsHolder_do = new FWDUVPDisplayObject("div"), a.mainButtonsHolder_do.setY(a.buttonHeight), a.mainHld.addChild(a.mainButtonsHolder_do), s.repeatBackground_bl) a.dummyBk_do = new FWDUVPDisplayObject("div"), a.dummyBk_do.getStyle().background = "url('" + s.bkPath_str + "')";
			else {
				a.dummyBk_do = new FWDUVPDisplayObject("img");
				var t = new Image;
				t.src = s.bkPath_str, a.dummyBk_do.setScreen(t)
			}
			a.dummyBk_do.setHeight(a.buttonHeight), a.mainHld.addChild(a.dummyBk_do), a.buttonsHolder_do = new FWDUVPDisplayObject("div"), a.mainButtonsHolder_do.addChild(a.buttonsHolder_do);
			var o = a.selLabel;
			"default" == a.selLabel && (o = a.categories_ar[a.curId]), FWDUVPComboBoxSelector.setPrototype(), a.selector_do = new FWDUVPComboBoxSelector(11, 6, n.arrowN_str, n.arrowS_str, o, a.selBkColN, a.selBkColS, a.selTxtColN, a.selTxtColS, a.buttonHeight, a.useHEX, a.nBC, a.sBC), a.mainHld.addChild(a.selector_do), a.selector_do.setNormalState(!1), a.selector_do.addListener(FWDUVPComboBoxSelector.CLICK, a.openMenuHandler);
			for (var d = 0; d < a.ttBtns; d++) FWDUVPComboBoxButton.setPrototype(), e = new FWDUVPComboBoxButton(a, a.categories_ar[d], a.itmBkClrN, a.itmBkClrS, a.itmTxtClrN, a.itmTxtClrS, d, a.buttonHeight), a.buttons_ar[d] = e, e.addListener(FWDUVPComboBoxButton.CLICK, a.buttonOnMouseDownHandler), a.buttonsHolder_do.addChild(e)
		}, a.buttonOnMouseDownHandler = function(s) {
			a.curId = s.id, clearTimeout(a.hideMenuTimeOutId_to), a.hide(!0), a.selector_do.enable(), a.hasPointEvt ? t.removeEventListener("pointerdown", a.checkOpenedMenu) : (t.removeEventListener("touchstart", a.checkOpenedMenu), !a.isMbl && (t.removeEventListener("mousedown", a.checkOpenedMenu), t.removeEventListener("mousemove", a.checkOpenedMenu))), a.selector_do.setText(a.buttons_ar[a.curId].label1_str), a.dispatchEvent(o.BUTTON_PRESSED, {
				id: a.curId
			})
		}, a.openMenuHandler = function(t) {
			FWDAnimation.isTweening(a.mainButtonsHolder_do) || (a.isShd ? a.checkOpenedMenu(t.e, !0) : (a.selector_do.disable(), a.show(!0), a.startToCheckOpenedMenu(), a.dispatchEvent(o.OPEN)))
		}, a.setButtonsStateBasedOnId = function(e) {
			a.curId = e;
			for (var t = 0, o; t < a.ttBtns; t++) o = a.buttons_ar[t], t == a.curId ? o.disable() : o.enable();
			a.selector_do.setText(a.buttons_ar[a.curId].label1_str), a.scrHandler_do ? (a.updateScrollBarSizeActiveAndDeactivate(), a.updateScrollBarHandlerAndContent(!1, !0)) : a.thmbsFinY = 0
		}, a.setValue = function(e) {
			a.curId = e, a.setButtonsStateBasedOnId()
		}, a.startToCheckOpenedMenu = function() {
			a.hasPointEvt ? t.addEventListener("pointerdown", a.checkOpenedMenu) : (t.addEventListener("touchstart", a.checkOpenedMenu), !a.isMbl && t.addEventListener("mousedown", a.checkOpenedMenu))
		}, a.checkOpenedMenu = function(o, e) {
			var s = FWDUVPUtils.getViewportMouseCoordinates(o),
				n = 1e3;
			"mousedown" == o.type && (n = 0), (FWDUVPUtils.hitTest(a.screen, s.screenX, s.screenY) || FWDUVPUtils.hitTest(a.mainButtonsHolder_do.screen, s.screenX, s.screenY)) && !e ? clearTimeout(a.hideMenuTimeOutId_to) : (a.hide(!0), a.selector_do.enable(), a.hasPointEvt ? t.removeEventListener("pointerdown", a.checkOpenedMenu) : (!a.isMbl && (t.removeEventListener("touchstart", a.checkOpenedMenu), t.removeEventListener("mousemove", a.checkOpenedMenu)), t.removeEventListener("mousedown", a.checkOpenedMenu))), FWDUVPUtils.hitTest(a.selector_do.screen, s.screenX, s.screenY) && !a.isMbl && setTimeout(function() {
				a.selector_do.setSelectedState(!0)
			}, 50)
		}, a.getMaxWidthResizeAndPosition = function() {
			var e;
			a.ttBtnH = 0;
			for (var t = 0; t < a.ttBtns; t++) e = a.buttons_ar[t], e.setY(t * (e.totalHeight + a.spcBtwBtns)), a.totalWidth = a.allowToScrollAndScrollBarIsActive_bl && !a.isMbl ? s.sW : s.sW, e.totalWidth = a.totalWidth, e.setWidth(a.totalWidth), e.centerText();
			a.ttBtnH = e.getY() + e.totalHeight - a.spcBtwBtns;
			var o = 2;
			a.isMbl && (o = 0), a.dummyBk_do.setWidth(a.totalWidth + o), a.setWidth(a.totalWidth), a.setHeight(a.buttonHeight), a.selector_do.totalWidth = a.totalWidth + o, a.selector_do.setWidth(a.totalWidth + o), a.selector_do.centerText(), a.buttonsHolder_do.setWidth(a.totalWidth), a.buttonsHolder_do.setHeight(a.ttBtnH)
		}, a.position = function() {
			FWDUVPUtils.isAndroid ? (a.setX(Math.floor(a.finalX)), a.setY(Math.floor(a.finalY - 1)), setTimeout(a.poscombo - box, 100)) : a.poscombo - box()
		}, a.resizeAndPosition = function() {
			a.sW = s.sW, a.sH = s.sH, a.bk_do.setWidth(a.sW), a.bk_do.setHeight(a.sH - s.removeFromThumbsHolderHeight + 5), a.mainButtonsHolder_do.setWidth(a.sW), a.mainButtonsHolder_do.setHeight(a.sH - s.removeFromThumbsHolderHeight), a.allowToScrollAndScrollBarIsActive_bl = !!(a.ttBtnH > a.mainButtonsHolder_do.h), !a.allowToScrollAndScrollBarIsActive_bl && a.scrMainHolder_do ? a.scrMainHolder_do.setVisible(!1) : a.allowToScrollAndScrollBarIsActive_bl && a.scrMainHolder_do && a.isShd && a.scrMainHolder_do.setVisible(!0), a.scrHandler_do && a.updateScrollBarSizeActiveAndDeactivate(), a.getMaxWidthResizeAndPosition(), a.updateScrollBarHandlerAndContent()
		}, a.hide = function(e, t) {
			(a.isShd || t) && (FWDAnimation.killTweensOf(a), a.isShd = !1, FWDAnimation.killTweensOf(a.mainButtonsHolder_do), FWDAnimation.killTweensOf(a.bk_do), e ? (FWDAnimation.to(a.mainButtonsHolder_do, .8, {
				y: -a.ttBtnH,
				ease: Expo.easeInOut,
				onComplete: a.hideComplete
			}), FWDAnimation.to(a.bk_do, .8, {
				alpha: 0
			})) : (a.mainButtonsHolder_do.setY(a.buttonHeight - a.ttBtnH), a.bk_do.setAlpha(0), a.setHeight(a.buttonHeight)))
		}, a.hideComplete = function() {
			a.mainButtonsHolder_do.setVisible(!1), a.bk_do.setVisible(!1)
		}, a.show = function(e, t) {
			a.isShd && !t || (FWDAnimation.killTweensOf(a), a.mainButtonsHolder_do.setY(-a.ttBtnH), a.isShd = !0, a.mainButtonsHolder_do.setVisible(!0), a.bk_do.setVisible(!0), a.resizeAndPosition(), FWDAnimation.killTweensOf(a.mainButtonsHolder_do), FWDAnimation.killTweensOf(a.bk_do), a.scrMainHolder_do && a.allowToScrollAndScrollBarIsActive_bl && a.scrMainHolder_do.setVisible(!0), e ? (FWDAnimation.to(a.bk_do, .8, {
				alpha: 1
			}), FWDAnimation.to(a.mainButtonsHolder_do, .8, {
				y: a.buttonHeight + s.spaceBetweenThumbnails,
				ease: Expo.easeInOut
			})) : (a.bk_do.setAlpha(1), a.mainButtonsHolder_do.setY(a.buttonHeight + s.spaceBetweenThumbnails)))
		}, a.setupScrollLogic = function() {
			a.setupMobileScrollbar(), a.isMbl || a.setupScrollbar(), a.addMouseWheelSupport_bl && a.addMouseWheelSupport()
		}, a.setupMobileScrollbar = function() {
			a.hasPointEvt ? a.mainButtonsHolder_do.screen.addEventListener("pointerdown", a.scrollBarTouchStartHandler) : a.mainButtonsHolder_do.screen.addEventListener("touchstart", a.scrollBarTouchStartHandler), a.isMbl && (a.updateMobileScrollBarId_int = setInterval(a.updateMobileScrollBar, 16))
		}, a.scrollBarTouchStartHandler = function(o) {
			o.preventDefault && o.preventDefault(), a.isScrollingOnMove_bl = !1, FWDAnimation.killTweensOf(a.buttonsHolder_do);
			var e = FWDUVPUtils.getViewportMouseCoordinates(o);
			a.isDragging_bl = !0, a.lastPresedY = e.screenY, a.checkLastPresedY = e.screenY, a.hasPointEvt ? (t.addEventListener("pointerup", a.scrollBarTouchEndHandler), t.addEventListener("pointermove", a.scrollBarTouchMoveHandler)) : (t.addEventListener("touchend", a.scrollBarTouchEndHandler), t.addEventListener("touchmove", a.scrollBarTouchMoveHandler, {
				passive: !1
			})), t.addEventListener("mouseup", a.scrollBarTouchEndHandler), t.addEventListener("mousemove", a.scrollBarTouchMoveHandler), clearInterval(a.updateMoveMobileScrollbarId_int), a.updateMoveMobileScrollbarId_int = setInterval(a.updateMoveMobileScrollbar, 20)
		}, a.scrollBarTouchMoveHandler = function(t) {
			if (t.preventDefault && t.preventDefault(), t.stopImmediatePropagation(), !(a.ttBtnH < a.mainButtonsHolder_do.h)) {
				s.prt.showDisable();
				var e = FWDUVPUtils.getViewportMouseCoordinates(t);
				(e.screenY >= a.checkLastPresedY + 6 || e.screenY <= a.checkLastPresedY - 6) && (a.isScrollingOnMove_bl = !0);
				var o = e.screenY - a.lastPresedY;
				if (a.thmbsFinY += o, a.thmbsFinY = Math.round(a.thmbsFinY), a.lastPresedY = e.screenY, a.vy = 2 * o, !a.isMobile) {
					0 < a.thmbsFinY ? a.thmbsFinY = 0 : a.thmbsFinY < a.mainButtonsHolder_do.h - a.ttBtnH && (a.thmbsFinY = a.mainButtonsHolder_do.h - a.ttBtnH);
					var n = Math.max(0, a.thmbsFinY / (a.mainButtonsHolder_do.h - a.ttBtnH));
					a.scrMainHolder_do && (a.scrBarHandY = Math.round((a.scrMainHolder_do.h - a.scrHandler_do.h) * n), 0 > a.scrBarHandY ? a.scrBarHandY = 0 : a.scrBarHandY > a.scrMainHolder_do.h - a.scrHandler_do.h - 1 && (a.scrBarHandY = a.scrMainHolder_do.h - a.scrHandler_do.h - 1), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.killTweensOf(a.scrHandlerLines_do), a.scrHandler_do.setY(a.scrBarHandY), a.scrHandlerLines_do.setY(a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLinesN_do.h) / 2)))
				}
			}
		}, a.scrollBarTouchEndHandler = function() {
			a.isDragging_bl = !1, clearInterval(a.updateMoveMobileScrollbarId_int), clearTimeout(a.disableOnMoveId_to), a.disableOnMoveId_to = setTimeout(function() {
				s.prt.hideDisable()
			}, 100), a.hasPointEvt ? (t.removeEventListener("pointerup", a.scrollBarTouchEndHandler), t.removeEventListener("pointermove", a.scrollBarTouchMoveHandler)) : (t.removeEventListener("touchend", a.scrollBarTouchEndHandler), t.removeEventListener("touchmove", a.scrollBarTouchMoveHandler)), t.removeEventListener("mousemove", a.scrollBarTouchMoveHandler)
		}, a.updateMoveMobileScrollbar = function() {
			a.buttonsHolder_do.setY(a.thmbsFinY)
		}, a.updateMobileScrollBar = function() {
			a.isDragging_bl || (a.ttBtnH < a.mainButtonsHolder_do.h && (a.thmbsFinY = .01), a.vy *= a.frc, a.thmbsFinY += a.vy, 0 < a.thmbsFinY ? (a.vy2 = .3 * (0 - a.thmbsFinY), a.vy *= a.frc, a.thmbsFinY += a.vy2) : a.thmbsFinY < a.mainButtonsHolder_do.h - a.ttBtnH && (a.vy2 = .3 * (a.mainButtonsHolder_do.h - a.ttBtnH - a.thmbsFinY), a.vy *= a.frc, a.thmbsFinY += a.vy2), a.buttonsHolder_do.setY(Math.round(a.thmbsFinY)))
		}, a.setupScrollbar = function() {
			a.scrMainHolder_do = new FWDUVPDisplayObject("div"), a.scrMainHolder_do.setVisible(!1), a.scrMainHolder_do.setWidth(s.scrWidth), a.scrTrack_do = new FWDUVPDisplayObject("div"), a.scrTrack_do.setWidth(s.scrWidth);
			var e = new Image;
			e.src = s.scrBkTop_img.src, a.scrTrackTop_do = new FWDUVPDisplayObject("img"), a.scrTrackTop_do.setWidth(s.scrTrackTop_do.w), a.scrTrackTop_do.setHeight(s.scrTrackTop_do.h), a.scrTrackTop_do.setScreen(e), a.scrTrackMiddle_do = new FWDUVPDisplayObject("div"), a.scrTrackMiddle_do.getStyle().background = "url('" + s._d.scrBkMiddlePath_str + "')", a.scrTrackMiddle_do.setWidth(s.scrWidth), a.scrTrackMiddle_do.setY(a.scrTrackTop_do.h);
			var t = new Image;
			t.src = s._d.scrBkBottomPath_str, a.scrTrackBottom_do = new FWDUVPDisplayObject("img"), a.scrTrackBottom_do.setScreen(t), a.scrTrackBottom_do.setWidth(a.scrTrackTop_do.w), a.scrTrackBottom_do.setHeight(a.scrTrackTop_do.h), a.scrHandler_do = new FWDUVPDisplayObject("div"), a.scrHandler_do.setWidth(s.scrWidth), a.scrDragTop_img = new Image, a.scrDragTop_img.src = s.scrDragTop_img.src, a.scrDragTop_img.width = s.scrDragTop_img.width, a.scrDragTop_img.height = s.scrDragTop_img.height, a.scrHandlerTop_do = new FWDUVPDisplayObject("img"), a.useHEX ? (a.scrHandlerTop_do = new FWDUVPDisplayObject("div"), a.scrHandlerTop_do.setWidth(a.scrDragTop_img.width), a.scrHandlerTop_do.setHeight(a.scrDragTop_img.height), a.mainScrubberDragTop_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.scrDragTop_img, a.nBC).canvas, a.scrHandlerTop_do.screen.appendChild(a.mainScrubberDragTop_canvas)) : (a.scrHandlerTop_do = new FWDUVPDisplayObject("img"), a.scrHandlerTop_do.setScreen(a.scrDragTop_img)), a.scrHandlerMiddle_do = new FWDUVPDisplayObject("div"), a.middleImage = new Image, a.middleImage.src = s._d.scrDragMiddlePath_str, a.useHEX ? a.middleImage.onload = function() {
				a.scrubberDragMiddle_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.middleImage, a.nBC, !0), a.scrubberDragImage_img = a.scrubberDragMiddle_canvas.image, a.scrHandlerMiddle_do.getStyle().background = "url('" + a.scrubberDragImage_img.src + "') repeat-y"
			} : a.scrHandlerMiddle_do.getStyle().background = "url('" + s._d.scrDragMiddlePath_str + "')", a.scrHandlerMiddle_do.setWidth(s.scrWidth), a.scrHandlerMiddle_do.setY(a.scrHandlerTop_do.h), a.scrHandlerBottom_do = new FWDUVPDisplayObject("div"), a.bottomImage = new Image, a.bottomImage.src = s._d.scrDragMiddlePath_str, a.useHEX ? a.bottomImage.onload = function() {
				a.scrubberDragBottom_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.bottomImage, a.nBC, !0), a.scrubberDragBottomImage_img = a.scrubberDragBottom_canvas.image, a.scrHandlerBottom_do.getStyle().background = "url('" + a.scrubberDragBottomImage_img.src + "') repeat-y"
			} : a.scrHandlerBottom_do.getStyle().background = "url('" + s._d.scrDragBottomPath_str + "')", a.scrHandlerBottom_do.setWidth(s.scrWidth), a.scrHandlerBottom_do.setY(a.scrHandlerTop_do.h), a.scrHandlerBottom_do.setWidth(a.scrHandlerTop_do.w), a.scrHandlerBottom_do.setHeight(a.scrHandlerTop_do.h), a.scrHandler_do.setButtonMode(!0), a.scrLinesN_img = new Image, a.scrLinesN_img.src = s.scrLinesN_img.src, a.scrLinesN_img.width = s.scrLinesN_img.width, a.scrLinesN_img.height = s.scrLinesN_img.height, a.useHEX ? (a.scrHandlerLinesN_do = new FWDUVPDisplayObject("div"), a.scrHandlerLinesN_do.setWidth(a.scrLinesN_img.width), a.scrHandlerLinesN_do.setHeight(a.scrLinesN_img.height), a.mainhandlerN_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.scrLinesN_img, a.sBC).canvas, a.scrHandlerLinesN_do.screen.appendChild(a.mainhandlerN_canvas)) : (a.scrHandlerLinesN_do = new FWDUVPDisplayObject("img"), a.scrHandlerLinesN_do.setScreen(a.scrLinesN_img)), a.scrHandlerLinesS_img = new Image, a.scrHandlerLinesS_img.src = s._d.scrLinesSPath_str, a.useHEX ? (a.scrHandlerLinesS_do = new FWDUVPDisplayObject("div"), a.scrHandlerLinesS_img.onload = function() {
				a.scrHandlerLinesS_do.setWidth(a.scrHandlerLinesN_do.w), a.scrHandlerLinesS_do.setHeight(a.scrHandlerLinesN_do.h), a.scrubberLines_s_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.scrHandlerLinesS_img, a.sBC, !0), a.scrubbelinesSImage_img = a.scrubberLines_s_canvas.image, a.scrHandlerLinesS_do.getStyle().background = "url('" + a.scrubbelinesSImage_img.src + "') repeat-y"
			}) : (a.scrHandlerLinesS_do = new FWDUVPDisplayObject("img"), a.scrHandlerLinesS_do.setScreen(a.scrHandlerLinesS_img), a.scrHandlerLinesS_do.setWidth(a.scrHandlerLinesN_do.w), a.scrHandlerLinesS_do.setHeight(a.scrHandlerLinesN_do.h)), a.scrHandlerLinesS_do.setAlpha(0), a.scrHandlerLines_do = new FWDUVPDisplayObject("div"), a.scrHandlerLines_do.setWidth(a.scrHandlerLinesN_do.w), a.scrHandlerLines_do.setHeight(a.scrHandlerLinesN_do.h), a.scrHandlerLines_do.setButtonMode(!0), a.scrTrack_do.addChild(a.scrTrackTop_do), a.scrTrack_do.addChild(a.scrTrackMiddle_do), a.scrTrack_do.addChild(a.scrTrackBottom_do), a.scrHandler_do.addChild(a.scrHandlerTop_do), a.scrHandler_do.addChild(a.scrHandlerMiddle_do), a.scrHandler_do.addChild(a.scrHandlerBottom_do), a.scrHandlerLines_do.addChild(a.scrHandlerLinesN_do), a.scrHandlerLines_do.addChild(a.scrHandlerLinesS_do), a.scrMainHolder_do.addChild(a.scrTrack_do), a.scrMainHolder_do.addChild(a.scrHandler_do), a.scrMainHolder_do.addChild(a.scrHandlerLines_do), a.mainButtonsHolder_do.addChild(a.scrMainHolder_do), a.scrHandler_do.screen.addEventListener("mouseover", a.scrollBarHandlerOnMouseOver), a.scrHandler_do.screen.addEventListener("mouseout", a.scrollBarHandlerOnMouseOut), a.scrHandler_do.screen.addEventListener("mousedown", a.scrollBarHandlerOnMouseDown), a.scrHandlerLines_do.screen.addEventListener("mouseover", a.scrollBarHandlerOnMouseOver), a.scrHandlerLines_do.screen.addEventListener("mouseout", a.scrollBarHandlerOnMouseOut), a.scrHandlerLines_do.screen.addEventListener("mousedown", a.scrollBarHandlerOnMouseDown)
		}, a.scrollBarHandlerOnMouseOver = function() {
			a.allowToScrollAndScrollBarIsActive_bl && (FWDAnimation.killTweensOf(a.scrHandlerLinesN_do), FWDAnimation.killTweensOf(a.scrHandlerLinesS_do), FWDAnimation.to(a.scrHandlerLinesN_do, .8, {
				alpha: 0,
				ease: Expo.easeOut
			}), FWDAnimation.to(a.scrHandlerLinesS_do, .8, {
				alpha: 1,
				ease: Expo.easeOut
			}))
		}, a.scrollBarHandlerOnMouseOut = function() {
			a.isDragging_bl || !a.allowToScrollAndScrollBarIsActive_bl || (FWDAnimation.killTweensOf(a.scrHandlerLinesN_do), FWDAnimation.killTweensOf(a.scrHandlerLinesS_do), FWDAnimation.to(a.scrHandlerLinesN_do, .8, {
				alpha: 1,
				ease: Expo.easeOut
			}), FWDAnimation.to(a.scrHandlerLinesS_do, .8, {
				alpha: 0,
				ease: Expo.easeOut
			}))
		}, a.scrollBarHandlerOnMouseDown = function(o) {
			if (a.allowToScrollAndScrollBarIsActive_bl) {
				var e = FWDUVPUtils.getViewportMouseCoordinates(o);
				a.isDragging_bl = !0, a.yPositionOnPress = a.scrHandler_do.y, a.lastPresedY = e.screenY, FWDAnimation.killTweensOf(a.scrHandler_do), s.prt.showDisable(), t.addEventListener ? (t.addEventListener("mousemove", a.scrollBarHandlerMoveHandler), t.addEventListener("mouseup", a.scrollBarHandlerEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", a.scrollBarHandlerMoveHandler), document.attachEvent("onmouseup", a.scrollBarHandlerEndHandler))
			}
		}, a.scrollBarHandlerMoveHandler = function(t) {
			t.preventDefault && t.preventDefault();
			var e = FWDUVPUtils.getViewportMouseCoordinates(t),
				o = a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLines_do.h) / 2);
			a.scrBarHandY = Math.round(a.yPositionOnPress + e.screenY - a.lastPresedY), a.scrBarHandY >= a.scrTrack_do.h - a.scrHandler_do.h ? a.scrBarHandY = a.scrTrack_do.h - a.scrHandler_do.h : 0 >= a.scrBarHandY && (a.scrBarHandY = 0), a.scrHandler_do.setY(a.scrBarHandY), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.to(a.scrHandlerLines_do, .8, {
				y: o,
				ease: Quart.easeOut
			}), a.updateScrollBarHandlerAndContent(!0)
		}, a.scrollBarHandlerEndHandler = function(o) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(o);
			a.isDragging_bl = !1, FWDUVPUtils.hitTest(a.scrHandler_do.screen, e.screenX, e.screenY) || (FWDAnimation.killTweensOf(a.scrHandlerLinesN_do), FWDAnimation.killTweensOf(a.scrHandlerLinesS_do), FWDAnimation.to(a.scrHandlerLinesN_do, .8, {
				alpha: 1,
				ease: Expo.easeOut
			}), FWDAnimation.to(a.scrHandlerLinesS_do, .8, {
				alpha: 0,
				ease: Expo.easeOut
			})), s.prt.hideDisable(), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.to(a.scrHandler_do, .4, {
				y: a.scrBarHandY,
				ease: Quart.easeOut
			}), t.removeEventListener ? (t.removeEventListener("mousemove", a.scrollBarHandlerMoveHandler), t.removeEventListener("mouseup", a.scrollBarHandlerEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", a.scrollBarHandlerMoveHandler), document.detachEvent("onmouseup", a.scrollBarHandlerEndHandler))
		}, a.updateScrollBarSizeActiveAndDeactivate = function() {
			a.disableForAWhileAfterThumbClick_bl || (a.allowToScrollAndScrollBarIsActive_bl ? (a.allowToScrollAndScrollBarIsActive_bl = !0, a.scrMainHolder_do.setX(a.sW - a.scrMainHolder_do.w), a.scrMainHolder_do.setHeight(a.mainButtonsHolder_do.h), a.scrTrack_do.setHeight(a.scrMainHolder_do.h), a.scrTrackMiddle_do.setHeight(a.scrTrack_do.h - 2 * a.scrTrackTop_do.h), a.scrTrackBottom_do.setY(a.scrTrackMiddle_do.y + a.scrTrackMiddle_do.h), a.scrMainHolder_do.setAlpha(1), a.scrHandler_do.setButtonMode(!0), a.scrHandlerLines_do.setButtonMode(!0)) : (a.allowToScrollAndScrollBarIsActive_bl = !1, a.scrMainHolder_do.setX(a.sW - a.scrMainHolder_do.w), a.scrMainHolder_do.setHeight(a.mainButtonsHolder_do.h), a.scrTrack_do.setHeight(a.scrMainHolder_do.h), a.scrTrackMiddle_do.setHeight(a.scrTrack_do.h - 2 * a.scrTrackTop_do.h), a.scrTrackBottom_do.setY(a.scrTrackMiddle_do.y + a.scrTrackMiddle_do.h), a.scrMainHolder_do.setAlpha(.5), a.scrHandler_do.setY(0), a.scrHandler_do.setButtonMode(!1), a.scrHandlerLines_do.setButtonMode(!1)), a.scrHandler_do.setHeight(Math.max(120, Math.round(Math.min(1, a.scrMainHolder_do.h / a.ttBtnH) * a.scrMainHolder_do.h))), a.scrHandlerMiddle_do.setHeight(a.scrHandler_do.h - 2 * a.scrHandlerTop_do.h), a.scrHandlerBottom_do.setY(a.scrHandlerMiddle_do.y + a.scrHandlerMiddle_do.h), FWDAnimation.killTweensOf(a.scrHandlerLines_do), a.scrHandlerLines_do.setY(a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLines_do.h) / 2)), a.scrHandlerBottom_do.setY(a.scrHandler_do.h - a.scrHandlerBottom_do.h))
		}, a.addMouseWheelSupport = function() {
			a.screen.addEventListener ? (a.screen.addEventListener("DOMMouseScroll", a.mouseWheelHandler), a.screen.addEventListener("mousewheel", a.mouseWheelHandler)) : a.screen.attachEvent && a.screen.attachEvent("onmousewheel", a.mouseWheelHandler)
		}, a.mouseWheelHandler = function(t) {
			if (t.preventDefault && t.preventDefault(), a.disableMouseWheel_bl || a.isDragging_bl) return !1;
			var e = t.detail || t.wheelDelta;
			t.wheelDelta && (e *= -1), 0 < e ? a.scrBarHandY += Math.round(160 * a.scollbarSpeedSensitivity * (a.mainButtonsHolder_do.h / a.ttBtnH)) : 0 > e && (a.scrBarHandY -= Math.round(160 * a.scollbarSpeedSensitivity * (a.mainButtonsHolder_do.h / a.ttBtnH))), a.scrBarHandY >= a.scrTrack_do.h - a.scrHandler_do.h ? a.scrBarHandY = a.scrTrack_do.h - a.scrHandler_do.h : 0 >= a.scrBarHandY && (a.scrBarHandY = 0);
			var o = a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLines_do.h) / 2);
			return FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.killTweensOf(a.scrHandlerLines_do), FWDAnimation.to(a.scrHandlerLines_do, .8, {
				y: o,
				ease: Quart.easeOut
			}), FWDAnimation.to(a.scrHandler_do, .5, {
				y: a.scrBarHandY,
				ease: Quart.easeOut
			}), a.isDragging_bl = !0, a.updateScrollBarHandlerAndContent(!0), a.isDragging_bl = !1, !!t.preventDefault && void t.preventDefault()
		}, a.updateScrollBarHandlerAndContent = function(e, t) {
			if (!a.disableForAWhileAfterThumbClick_bl && (a.allowToScrollAndScrollBarIsActive_bl || t)) {
				var o = 0;
				a.isDragging_bl && !a.isMbl ? (o = a.scrBarHandY / (a.scrMainHolder_do.h - a.scrHandler_do.h), "Infinity" == o && (o = 0), a.thmbsFinY = -1 * Math.round(o * (a.ttBtnH - a.mainButtonsHolder_do.h)), 0 == a.mainButtonsHolder_do.h && (a.thmbsFinY = 0)) : (o = a.curId / (a.ttBtns - 1), a.thmbsFinY = Math.min(0, -1 * Math.round(o * (a.ttBtnH - a.mainButtonsHolder_do.h))), 0 == a.mainButtonsHolder_do.h && (a.thmbsFinY = 0), a.scrMainHolder_do && (a.scrBarHandY = Math.round((a.scrMainHolder_do.h - a.scrHandler_do.h) * o), 0 > a.scrBarHandY ? a.scrBarHandY = 0 : a.scrBarHandY > a.scrMainHolder_do.h - a.scrHandler_do.h - 1 && (a.scrBarHandY = a.scrMainHolder_do.h - a.scrHandler_do.h - 1), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.killTweensOf(a.scrHandlerLines_do), e ? (FWDAnimation.to(a.scrHandler_do, .4, {
					y: a.scrBarHandY,
					ease: Quart.easeOut
				}), FWDAnimation.to(a.scrHandlerLines_do, .8, {
					y: a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLinesN_do.h) / 2),
					ease: Quart.easeOut
				})) : (a.scrHandler_do.setY(a.scrBarHandY), a.scrHandlerLines_do.setY(a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLinesN_do.h) / 2))))), a.lastThumbnailFinalY != a.thmbsFinY && (FWDAnimation.killTweensOf(a.buttonsHolder_do), e ? FWDAnimation.to(a.buttonsHolder_do, .5, {
					y: a.thmbsFinY,
					ease: Quart.easeOut
				}) : a.buttonsHolder_do.setY(a.thmbsFinY)), a.lastThumbnailFinalY = a.thmbsFinY
			}
		}, a.init()
	};
	o.setPrototype = function() {
		o.prototype = new FWDUVPDisplayObject("div")
	}, o.OPEN = "open", o.HIDE_COMPLETE = "infoWindowHideComplete", o.BUTTON_PRESSED = "buttonPressed", o.prototype = null, t.FWDUVPComboBox = o
}(window),
function() {
	var t = function(o, s, n, i, a, d, r, e) {
		'use strict';
		var l = this,
			u = t.prototype;
		l.label1_str = s, l.bkNClr = n, l.bkSClr = i, l.txtNClr = a, l.txtSClr = d, l.totalWidth = 400, l.totalHeight = e, l.id = r, l.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, l.isMbl = FWDUVPUtils.isMobile, l.init = function() {
			l.setBackfaceVisibility(), l.setButtonMode(!0), l.setupMainContainers(), l.setWidth(l.totalWidth), l.setHeight(l.totalHeight), l.setNormalState()
		}, l.setupMainContainers = function() {
			l.bk_sdo = new FWDUVPDisplayObject("div"), l.bk_sdo.setBkColor(l.bkNClr), l.addChild(l.bk_sdo), l.text_sdo = new FWDUVPDisplayObject("div"), l.text_sdo.getStyle().whiteSpace = "nowrap", l.text_sdo.screen.className = "fwduvp-cb-button", l.text_sdo.setBackfaceVisibility(), l.text_sdo.setOverflow("visible"), l.text_sdo.setDisplay("inline-block"), l.text_sdo.getStyle().fontFamily = "Arial", l.text_sdo.getStyle().fontSize = "13px", l.text_sdo.getStyle().padding = "6px", l.text_sdo.getStyle().fontWeight = "100", l.text_sdo.getStyle().color = l.nBC, l.text_sdo.getStyle().fontSmoothing = "antialiased", l.text_sdo.getStyle().webkitFontSmoothing = "antialiased", l.text_sdo.getStyle().textRendering = "optimizeLegibility", FWDUVPUtils.isIEAndLessThen9 ? l.text_sdo.screen.innerText = l.label1_str : l.text_sdo.setInnerHTML(l.label1_str), l.addChild(l.text_sdo), l.dumy_sdo = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (l.dumy_sdo.setBkColor("#FF0000"), l.dumy_sdo.setAlpha(0));
			l.addChild(l.dumy_sdo), l.hasPointerEvent_bl ? (l.screen.addEventListener("pointerup", l.onClick), l.screen.addEventListener("pointerover", l.onMouseOver), l.screen.addEventListener("pointerout", l.onMouseOut)) : l.screen.addEventListener && (!l.isMbl && (l.screen.addEventListener("mouseover", l.onMouseOver), l.screen.addEventListener("mouseout", l.onMouseOut), l.screen.addEventListener("mouseup", l.onClick)), l.screen.addEventListener("touchend", l.onClick))
		}, l.onMouseOver = function(o) {
			l.isDisabled_bl || (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE) && (FWDAnimation.killTweensOf(l.text_sdo), l.setSelectedState(!0), l.dispatchEvent(t.MOUSE_OVER))
		}, l.onMouseOut = function(o) {
			l.isDisabled_bl || (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE) && (FWDAnimation.killTweensOf(l.text_sdo), l.setNormalState(!0), l.dispatchEvent(t.MOUSE_OUT))
		}, l.onClick = function(s) {
			l.isDisabled_bl || o.isScrollingOnMove_bl || (s.preventDefault && s.preventDefault(), l.dispatchEvent(t.CLICK, {
				id: l.id
			}))
		}, l.onMouseDown = function(s) {
			l.isDisabled_bl || o.isScrollingOnMove_bl || (s.preventDefault && s.preventDefault(), l.dispatchEvent(t.MOUSE_DOWN, {
				id: l.id
			}))
		}, l.setSelectedState = function(e) {
			FWDAnimation.killTweensOf(l.bk_sdo.screen), FWDAnimation.killTweensOf(l.text_sdo.screen), e ? (FWDAnimation.to(l.bk_sdo.screen, .6, {
				css: {
					backgroundColor: l.bkSClr
				},
				ease: Quart.easeOut
			}), FWDAnimation.to(l.text_sdo.screen, .6, {
				css: {
					color: l.txtSClr
				},
				ease: Quart.easeOut
			})) : (l.bk_sdo.setBkColor(l.bkSClr), l.text_sdo.getStyle().color = l.txtSClr)
		}, l.setNormalState = function(e) {
			FWDAnimation.killTweensOf(l.bk_sdo.screen), FWDAnimation.killTweensOf(l.text_sdo.screen), e ? (FWDAnimation.to(l.bk_sdo.screen, .6, {
				css: {
					backgroundColor: l.bkNClr
				},
				ease: Quart.easeOut
			}), FWDAnimation.to(l.text_sdo.screen, .6, {
				css: {
					color: l.txtNClr
				},
				ease: Quart.easeOut
			})) : (l.bk_sdo.setBkColor(l.bkNClr), l.text_sdo.getStyle().color = l.txtNClr)
		}, l.centerText = function() {
			l.dumy_sdo.setWidth(l.totalWidth), l.dumy_sdo.setHeight(l.totalHeight), l.bk_sdo.setWidth(l.totalWidth), l.bk_sdo.setHeight(l.totalHeight), l.text_sdo.setX(4), l.text_sdo.setY(Math.round((l.totalHeight - l.text_sdo.getHeight()) / 2))
		}, l.getMaxTextWidth = function() {
			return l.text_sdo.getWidth()
		}, l.disable = function() {
			l.isDisabled_bl = !0, l.setButtonMode(!1), l.setSelectedState(!0)
		}, l.enable = function() {
			l.isDisabled_bl = !1, l.setNormalState(!0), l.setButtonMode(!0)
		}, l.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.FIRST_BUTTON_CLICK = "onFirstClick", t.SECOND_BUTTON_CLICK = "secondButtonOnClick", t.MOUSE_OVER = "onMouseOver", t.MOUSE_OUT = "onMouseOut", t.MOUSE_DOWN = "onMouseDown", t.CLICK = "onClick", t.prototype = null, window.FWDUVPComboBoxButton = t
}(window),
function() {
	var t = function(e, o, s, n, i, a, d, r, l, u, _, c, p) {
		'use strict';
		var h = this,
			b = t.prototype;
		h.arrowN_str = s, h.arrowS_str = n, h.label1_str = i, h.bkNColor = a, h.bkSColor = d, h.tNColor = r, h.tSColor = l, h.useHEX = _, h.nBC = c, h.sBC = p, h.totalWidth = 400, h.totalHeight = u, h.arrowWidth = e, h.arrowHeight = o, h.hasPointEvt = FWDUVPUtils.hasPointerEvent, h.isMbl = FWDUVPUtils.isMobile, h.init = function() {
			h.setBackfaceVisibility(), h.setButtonMode(!0), h.setupMainContainers(), h.setWidth(h.totalWidth), h.setHeight(h.totalHeight)
		}, h.setupMainContainers = function() {
			h.bk_sdo = new FWDUVPDisplayObject("div"), h.bk_sdo.getStyle().backgroundColor = h.bkNColor, h.addChild(h.bk_sdo), h.text_sdo = new FWDUVPDisplayObject("div"), h.text_sdo.getStyle().whiteSpace = "nowrap", h.text_sdo.screen.className = "fwduvp-cb-selector", h.text_sdo.setBackfaceVisibility(), h.text_sdo.setOverflow("visible"), h.text_sdo.setDisplay("inline-block"), h.text_sdo.getStyle().fontFamily = "Arial", h.text_sdo.getStyle().fontSize = "13px", h.text_sdo.getStyle().fontWeight = "100", h.text_sdo.getStyle().padding = "6px", h.text_sdo.getStyle().color = h.nBC, h.text_sdo.getStyle().fontSmoothing = "antialiased", h.text_sdo.getStyle().webkitFontSmoothing = "antialiased", h.text_sdo.getStyle().textRendering = "optimizeLegibility", FWDUVPUtils.isIEAndLessThen9 ? h.text_sdo.screen.innerText = h.label1_str : h.text_sdo.setInnerHTML(h.label1_str), h.addChild(h.text_sdo), h.arrow_do = new FWDUVPDisplayObject("div"), h.arrow_do.screen.className = "arrow", h.arrow_do.setOverflow("visible"), h.useHEX ? (h.arrowN_img = new Image, h.arrowN_img.src = h.arrowN_str, h.arrowS_img = new Image, h.arrowS_img.src = h.arrowS_str, h.arrowN_sdo = new FWDUVPDisplayObject("div"), h.arrowS_sdo = new FWDUVPDisplayObject("div"), h.arrowS_img.onload = function() {
				h.arrowN_sdo.setWidth(h.arrowN_img.width), h.arrowN_sdo.setHeight(h.arrowN_img.height), h.nBC = h.bkNColor, h.scrubberLines_n_canvas = FWDUVPUtils.getCanvasWithModifiedColor(h.arrowN_img, h.nBC, !0), h.scrubbelinesNImage_img = h.scrubberLines_n_canvas.image, h.arrowN_sdo.getStyle().background = "url('" + h.scrubbelinesNImage_img.src + "') repeat-y", h.arrowS_sdo.setWidth(h.arrowS_img.width), h.arrowS_sdo.setHeight(h.arrowS_img.height), h.sBC = h.arrowS_str, h.scrubberLines_s_canvas = FWDUVPUtils.getCanvasWithModifiedColor(h.arrowS_img, h.sBC, !0), h.scrubbelinesSImage_img = h.scrubberLines_s_canvas.image, h.arrowS_sdo.getStyle().background = "url('" + h.scrubbelinesSImage_img.src + "') repeat-y"
			}) : (h.arrowN_sdo = new FWDUVPDisplayObject("div"), h.arrowN_sdo.screen.style.backgroundImage = "url(" + h.arrowN_str + ")", h.arrowS_sdo = new FWDUVPDisplayObject("div"), h.arrowS_sdo.screen.style.backgroundImage = "url(" + h.arrowS_str + ")"), h.arrowS_sdo.setAlpha(0), h.arrow_do.addChild(h.arrowN_sdo), h.arrow_do.addChild(h.arrowS_sdo), h.addChild(h.arrow_do), h.arrowN_sdo.setWidth(h.arrowWidth), h.arrowN_sdo.setHeight(h.arrowHeight), h.arrowS_sdo.setWidth(h.arrowWidth), h.arrowS_sdo.setHeight(h.arrowHeight), h.dumy_sdo = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (h.dumy_sdo.setBkColor("#FF0000"), h.dumy_sdo.setAlpha(0));
			h.addChild(h.dumy_sdo), h.hasPointEvt ? (h.screen.addEventListener("pointerup", h.onClick), h.screen.addEventListener("pointerover", h.onMouseOver), h.screen.addEventListener("pointerout", h.onMouseOut)) : h.screen.addEventListener && (h.screen.addEventListener("mouseover", h.onMouseOver), h.screen.addEventListener("mouseout", h.onMouseOut), h.screen.addEventListener("mouseup", h.onClick), h.screen.addEventListener("touchend", h.onClick))
		}, h.onMouseOver = function(o) {
			h.isDble || (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE) && (FWDAnimation.killTweensOf(h.text_sdo), h.setSelectedState(!0, 0), h.dispatchEvent(t.MOUSE_OVER))
		}, h.onMouseOut = function(o) {
			h.isDble || (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE) && (FWDAnimation.killTweensOf(h.text_sdo), h.setNormalState(!0, !0), h.dispatchEvent(t.MOUSE_OUT))
		}, h.onClick = function(o) {
            alert(h.isDeveleper_bl)
			return h.isDeveleper_bl ? void window.open("http://www.webdesign-flash.ro", "_blank") : void(o.preventDefault && o.preventDefault(), h.dispatchEvent(t.CLICK, {
				e: o
			}))
		}, h.onMouseDown = function(o) {
			o.preventDefault && o.preventDefault(), h.dispatchEvent(t.MOUSE_DOWN, {
				e: o
			})
		}, h.setSelectedState = function(e) {
			e ? (FWDAnimation.to(h.bk_sdo, .6, {
				alpha: 1,
				ease: Expo.easeOut
			}), FWDAnimation.to(h.text_sdo.screen, .6, {
				css: {
					color: h.tSColor
				},
				ease: Expo.easeOut
			}), FWDAnimation.to(h.arrowS_sdo, .6, {
				alpha: 1,
				ease: Expo.easeOut
			})) : (h.bk_sdo.setAlpha(1), h.text_sdo.getStyle().color = h.tSColor, h.arrowS_sdo.alpha = 1)
		}, h.setNormalState = function(e, t) {
			var o = .6;
			t && (o = 0), o = 0, FWDAnimation.killTweensOf(h.bk_sdo), FWDAnimation.killTweensOf(h.text_sdo.screen), FWDAnimation.killTweensOf(h.arrowS_sdo), e ? (FWDAnimation.to(h.bk_sdo, .6, {
				alpha: 0,
				delay: o,
				ease: Expo.easeOut
			}), FWDAnimation.to(h.text_sdo.screen, .6, {
				css: {
					color: h.tNColor
				},
				delay: o,
				ease: Expo.easeOut
			}), FWDAnimation.to(h.arrowS_sdo, .6, {
				alpha: 0,
				delay: o,
				ease: Expo.easeOut
			})) : (h.bk_sdo.setAlpha(0), h.text_sdo.getStyle().color = h.tNColor, h.arrowS_sdo.alpha = 0)
		}, h.centerText = function() {
			h.dumy_sdo.setWidth(h.totalWidth), h.dumy_sdo.setHeight(h.totalHeight), h.bk_sdo.setWidth(h.totalWidth), h.bk_sdo.setHeight(h.totalHeight), h.text_sdo.setX(2), h.text_sdo.setY(Math.round((h.totalHeight - h.text_sdo.getHeight()) / 2)), h.arrow_do.setX(h.totalWidth - h.arrowWidth - 5), h.arrow_do.setY(Math.round((h.totalHeight - h.arrowHeight) / 2))
		}, h.getMaxTextWidth = function() {
			return h.text_sdo.getWidth()
		}, h.disable = function() {
			h.isDble = !0, h.setSelectedState(!0), FWDUVPUtils.hasTransform2d && (FWDAnimation.to(h.arrowN_sdo.screen, .8, {
				css: {
					rotation: 180
				},
				ease: Quart.easeOut
			}), FWDAnimation.to(h.arrowS_sdo.screen, .8, {
				css: {
					rotation: 180
				},
				ease: Quart.easeOut
			})), h.setNormalState(!0)
		}, h.enable = function() {
			h.isDble = !1, FWDUVPUtils.hasTransform2d && (FWDAnimation.to(h.arrowN_sdo.screen, .8, {
				css: {
					rotation: 0
				},
				ease: Quart.easeOut
			}), FWDAnimation.to(h.arrowS_sdo.screen, .8, {
				css: {
					rotation: 0
				},
				ease: Quart.easeOut
			})), h.setButtonMode(!0)
		}, h.setText = function(e) {
			FWDUVPUtils.isIEAndLessThen9 ? h.text_sdo.screen.innerText = e : h.text_sdo.setInnerHTML(e)
		}, h.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.FIRST_BUTTON_CLICK = "onFirstClick", t.SECOND_BUTTON_CLICK = "secondButtonOnClick", t.MOUSE_OVER = "onMouseOver", t.MOUSE_OUT = "onMouseOut", t.MOUSE_DOWN = "onMouseDown", t.CLICK = "onClick", t.prototype = null, window.FWDUVPComboBoxSelector = t
}(window),
function() {
	var t = function(e, o, s, n, i, a, d, r, l, u, _, c) {
		'use strict';
		var p = this,
			h = t.prototype;
		p.iconCSSString = l, p.icon2CSSString = u, p.normalCalssName = _, p.selectedCalssName = c, p.n1Img = e, p.s1Path_str = o, p.n2Img = s, p.s2Path_str = n, p.n1Img && (p.buttonWidth = p.n1Img.width, p.buttonHeight = p.n1Img.height), p.useHEX = a, p.nBC = d, p.sBC = r, p.currentState = 1, p.disptachMainEvent_bl = i, p.isMbl = FWDUVPUtils.isMobile, p.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, p.allowToCreateSecondButton_bl = !p.isMbl || p.hasPointerEvent_bl, p.useFontAwesome_bl = !!p.iconCSSString, p.init = function() {
			p.hasTransform2d_bl = !1, p.setButtonMode(!0), p.setWidth(p.buttonWidth), p.setHeight(p.buttonHeight), p.setupMainContainers(), p.secondButton_do.setVisible(!1), p.setNormalState()
		}, p.setupMainContainers = function() {
			p.useFontAwesome_bl ? (p.setOverflow("visible"), p.firstButton_do = new FWDUVPDisplayObject("div"), p.firstButton_do.setOverflow("visible"), p.n1_do = new FWDUVPDisplayObject("div"), p.n1_do.setInnerHTML(p.iconCSSString), p.firstButton_do.addChild(p.n1_do), p.secondButton_do = new FWDUVPDisplayObject("div"), p.secondButton_do.setOverflow("visible"), p.n2_do = new FWDUVPDisplayObject("div"), p.n2_do.setInnerHTML(p.icon2CSSString), p.secondButton_do.addChild(p.n2_do), p.setFinalSize()) : (p.firstButton_do = new FWDUVPDisplayObject("div"), p.firstButton_do.setWidth(p.buttonWidth), p.firstButton_do.setHeight(p.buttonHeight), p.useHEX ? (p.n1_do = new FWDUVPDisplayObject("div"), p.n1_do.setWidth(p.buttonWidth), p.n1_do.setHeight(p.buttonHeight), p.n1_sdo_canvas = FWDUVPUtils.getCanvasWithModifiedColor(p.n1Img, p.nBC).canvas, p.n1_do.screen.appendChild(p.n1_sdo_canvas)) : (p.n1_do = new FWDUVPDisplayObject("img"), p.n1_do.setScreen(p.n1Img)), p.firstButton_do.addChild(p.n1_do), p.allowToCreateSecondButton_bl && (p.s1_img = new Image, p.s1_img.src = p.s1Path_str, p.useHEX ? (p.s1_do = new FWDUVPTransformDisplayObject("div"), p.s1_do.setWidth(p.buttonWidth), p.s1_do.setHeight(p.buttonHeight), p.s1_img.onload = function() {
				p.s1_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(p.s1_img, p.sBC).canvas, p.s1_do.screen.appendChild(p.s1_do_canvas)
			}, p.s1_do.setAlpha(0)) : (p.s1_do = new FWDUVPDisplayObject("img"), p.s1_do.setScreen(p.s1_img), p.s1_do.setWidth(p.buttonWidth), p.s1_do.setHeight(p.buttonHeight), p.s1_do.setAlpha(0)), p.firstButton_do.addChild(p.s1_do)), p.secondButton_do = new FWDUVPDisplayObject("div"), p.secondButton_do.setWidth(p.buttonWidth), p.secondButton_do.setHeight(p.buttonHeight), p.useHEX ? (p.n2_do = new FWDUVPDisplayObject("div"), p.n2_do.setWidth(p.buttonWidth), p.n2_do.setHeight(p.buttonHeight), p.n2_sdo_canvas = FWDUVPUtils.getCanvasWithModifiedColor(p.n2Img, p.nBC).canvas, p.n2_do.screen.appendChild(p.n2_sdo_canvas)) : (p.n2_do = new FWDUVPDisplayObject("img"), p.n2_do.setScreen(p.n2Img)), p.secondButton_do.addChild(p.n2_do), p.allowToCreateSecondButton_bl && (p.s2_img = new Image, p.s2_img.src = p.s2Path_str, p.useHEX ? (p.s2_do = new FWDUVPTransformDisplayObject("div"), p.s2_do.setWidth(p.buttonWidth), p.s2_do.setHeight(p.buttonHeight), p.s2_img.onload = function() {
				p.s2_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(p.s2_img, p.sBC).canvas, p.s2_do.screen.appendChild(p.s2_do_canvas)
			}, p.s2_do.setAlpha(0)) : (p.s2_do = new FWDUVPDisplayObject("img"), p.s2_do.setScreen(p.s2_img), p.s2_do.setWidth(p.buttonWidth), p.s2_do.setHeight(p.buttonHeight), p.s2_do.setAlpha(0)), p.secondButton_do.addChild(p.s2_do))), p.addChild(p.secondButton_do), p.addChild(p.firstButton_do), p.hasPointerEvent_bl ? (p.screen.addEventListener("pointerup", p.onMouseUp), p.screen.addEventListener("pointerover", p.onMouseOver), p.screen.addEventListener("pointerout", p.onMouseOut)) : p.screen.addEventListener && (!p.isMbl && (p.screen.addEventListener("mouseover", p.onMouseOver), p.screen.addEventListener("mouseout", p.onMouseOut), p.screen.addEventListener("mouseup", p.onMouseUp)), p.screen.addEventListener("toustart", p.onDown), p.screen.addEventListener("touchend", p.onMouseUp))
		}, p.onMouseOver = function(o) {
			p.isDisabled_bl || p.isSelectedState_bl || (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType) && (p.dispatchEvent(t.MOUSE_OVER, {
				e: o
			}), p.dispatchEvent(t.SHOW_TOOLTIP, {
				e: o
			}), p.setSelectedState(!0))
		}, p.onMouseOut = function(o) {
			!p.isDisabled_bl && p.isSelectedState_bl && (o.pointerType && o.pointerType != o.MSPOINTER_TYPE_MOUSE && "mouse" != o.pointerType || (p.setNormalState(!0), p.dispatchEvent(t.MOUSE_OUT)))
		}, p.onDown = function(t) {
			t.preventDefault && t.preventDefault()
		}, p.onMouseUp = function(o) {
			p.isDisabled_bl || 2 == o.button || (o.preventDefault && o.preventDefault(), !p.isMbl && p.onMouseOver(o, !1), p.disptachMainEvent_bl && p.dispatchEvent(t.MOUSE_UP, {
				e: o
			}))
		}, p.checkCount = 0, p.setFinalSize = function() {
			if ((clearInterval(p.checkId_int), p.lastWidth = p.n1_do.screen.firstChild.offsetWidth, !(5 < p.checkCount)) && (p.checkCount++, p.checkId_int = setInterval(function() {
					p.setFinalSize()
				}, 100), p.prevWidth != p.lastWidth && 0 != p.lastWidth)) {
				var e = Math.max(p.n1_do.screen.firstChild.offsetWidth, p.n2_do.screen.firstChild.offsetWidth),
					t = Math.max(p.n1_do.screen.offsetHeight, p.n2_do.screen.firstChild.offsetHeight);
				p.buttonWidth = e, p.buttonHeight = t, p.setWidth(e), p.setHeight(t), p.firstButton_do.setWidth(p.w), p.firstButton_do.setHeight(p.h), p.secondButton_do.setWidth(p.w), p.secondButton_do.setHeight(p.h), p.n1_do.setX(Math.round((e - p.n1_do.getWidth()) / 2)), p.n1_do.setY(Math.round((t - p.n1_do.getHeight()) / 2)), p.n2_do.setX(Math.round((e - p.n2_do.getWidth()) / 2)), p.n2_do.setY(Math.round((t - p.n2_do.getHeight()) / 2)), p.prevWidth = p.lastWidth
			}
		}, p.toggleButton = function() {
			1 == p.currentState ? (p.firstButton_do.setVisible(!1), p.secondButton_do.setVisible(!0), p.currentState = 0, p.dispatchEvent(t.FIRST_BUTTON_CLICK)) : (p.firstButton_do.setVisible(!0), p.secondButton_do.setVisible(!1), p.currentState = 1, p.dispatchEvent(t.SECOND_BUTTON_CLICK))
		}, p.setButtonState = function(e) {
			1 == e ? (p.firstButton_do.setVisible(!0), p.secondButton_do.setVisible(!1), p.currentState = 1) : (p.firstButton_do.setVisible(!1), p.secondButton_do.setVisible(!0), p.currentState = 0)
		}, p.setNormalState = function(e) {
			(!p.isMbl || p.hasPointerEvent_bl || p.useFontAwesome_bl) && (p.isSelectedState_bl = !1, FWDAnimation.killTweensOf(p.s1_do), FWDAnimation.killTweensOf(p.s2_do), p.useFontAwesome_bl ? (FWDAnimation.killTweensOf(p.n1_do.screen), FWDAnimation.killTweensOf(p.n2_do.screen), e ? (FWDAnimation.to(p.n1_do.screen, .8, {
				className: p.normalCalssName,
				ease: Expo.easeOut
			}), FWDAnimation.to(p.n2_do.screen, .8, {
				className: p.normalCalssName,
				ease: Expo.easeOut
			})) : (p.n1_do.screen.className = p.normalCalssName, p.n2_do.screen.className = p.normalCalssName)) : (FWDAnimation.to(p.s1_do, .5, {
				alpha: 0,
				ease: Expo.easeOut
			}), FWDAnimation.to(p.s2_do, .5, {
				alpha: 0,
				ease: Expo.easeOut
			})))
		}, p.setSelectedState = function(e) {
			p.isSelectedState_bl = !0, FWDAnimation.killTweensOf(p.s1_do), FWDAnimation.killTweensOf(p.s2_do), p.useFontAwesome_bl ? (FWDAnimation.killTweensOf(p.n1_do.screen), FWDAnimation.killTweensOf(p.n2_do.screen), e ? (FWDAnimation.to(p.n1_do.screen, .8, {
				className: p.selectedCalssName,
				ease: Expo.easeOut
			}), FWDAnimation.to(p.n2_do.screen, .8, {
				className: p.selectedCalssName,
				ease: Expo.easeOut
			})) : (p.n1_do.screen.className = p.selectedCalssName, p.n2_do.screen.className = p.selectedCalssName)) : (FWDAnimation.to(p.s1_do, .5, {
				alpha: 1,
				delay: .1,
				ease: Expo.easeOut
			}), FWDAnimation.to(p.s2_do, .5, {
				alpha: 1,
				delay: .1,
				ease: Expo.easeOut
			}))
		}, p.disable = function() {
			p.isDisabled_bl || (p.isDisabled_bl = !0, p.setButtonMode(!1), FWDAnimation.killTweensOf(p), FWDAnimation.to(p, .6, {
				alpha: .4
			}), p.setNormalState())
		}, p.enable = function() {
			p.isDisabled_bl && (p.isDisabled_bl = !1, p.setButtonMode(!0), FWDAnimation.killTweensOf(p), FWDAnimation.to(p, .6, {
				alpha: 1
			}))
		}, p.updateHEXColors = function(e, t) {
			FWDUVPUtils.changeCanvasHEXColor(p.n1Img, p.n1_sdo_canvas, e), FWDUVPUtils.changeCanvasHEXColor(p.s1_img, p.s1_do_canvas, t), FWDUVPUtils.changeCanvasHEXColor(p.n2Img, p.n2_sdo_canvas, e), FWDUVPUtils.changeCanvasHEXColor(p.s2_img, p.s2_do_canvas, t)
		}, p.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.FIRST_BUTTON_CLICK = "onFirstClick", t.SECOND_BUTTON_CLICK = "secondButtonOnClick", t.MOUSE_OVER = "onMouseOver", t.MOUSE_OUT = "onMouseOut", t.MOUSE_UP = "onMouseUp", t.CLICK = "onClick", t.SHOW_TOOLTIP = "showTooltip", t.prototype = null, window.FWDUVPComplexButton = t
}(window),
function() {
	var e = function(t, o) {
		'use strict';
		var s = this,
			n = e.prototype;
		s.prt = t, s.buttonsTest_ar = ["copy_url", "copy_url_time", "fullscreen"], s.itemsLabels_ar = ["Copy video URL", "Copy video URL at current time", "Fullscreen/Normalscreen"], s.items_ar = [], s.spacers_ar = [], s.backgroundColor_str = o.contextMenuBackgroundColor_str, s.borderColor_str = o.contextMenuBorderColor_str, s.spacerColor_str = o.contextMenuSpacerColor_str, s.itemNormalColor_str = o.contextMenuItemNormalColor_str, s.itemSelectedColor_str = o.contextMenuItemSelectedColor_str, s.itemDisabledColor_str = o.contextMenuItemDisabledColor_str, s.draggingMode_str = o.startDraggingMode_str, s.link_str = o.link_str, s.borderRadius = 0, s.biggestWidth, s.totalWidth = 400, s.totalHeight = 400, s.sapaceBetweenButtons = 7, s.padding = 6, s.inverseNextAndPrevRotation_bl = o.inverseNextAndPrevRotation_bl, s.showScriptDeveloper_bl = o.showScriptDeveloper_bl, s.init = function() {
			(s.itemsLabels_ar || s.showScriptDeveloper_bl) && (s.show_bl = !0, s.setWidth(s.totalWidth), s.setHeight(s.totalHeight), s.setBkColor(s.backgroundColor_str), s.getStyle().borderColor = s.borderColor_str, s.getStyle().borderStyle = "solid", s.getStyle().borderRadius = s.borderRadius + "px", s.getStyle().borderWidth = "1px", s.setVisible(!1), s.setY(-2e3), s.prt.main_do.addChild(s), s.setupLabels(), s.setupDeveloperButton(), s.setupSpacers(), s.disable(), s.getMaxWidthResizeAndPositionId_to = setTimeout(s.getMaxWidthResizeAndPosition, 200)), s.addContextEvent()
		}, s.copyText = function(e) {
			var t = document.createElement("textarea");
			t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
		}, s.setupLabels = function() {
			var e = s.buttonsTest_ar.length,
				t = "",
				n = "",
				a;
			if (s.itemsLabels_ar)
				for (var d = 0; d < e; d++)
					if (a = s.buttonsTest_ar[d], "copy_url" == a) t = s.itemsLabels_ar[d], FWDUVPContextMenuButton.setPrototype(), s.copyURL_do = new FWDUVPContextMenuButton(t, void 0, s.itemNormalColor_str, s.itemSelectedColor_str, s.itemDisabledColor_str), s.items_ar.push(s.copyURL_do), s.copyURL_do.addListener(FWDUVPContextMenuButton.MOUSE_DOWN, s.copyURLHandler), s.addChild(s.copyURL_do);
					else if ("copy_url_time" == a) t = s.itemsLabels_ar[d], FWDUVPContextMenuButton.setPrototype(), s.copyURLTime_do = new FWDUVPContextMenuButton(t, void 0, s.itemNormalColor_str, s.itemSelectedColor_str, s.itemDisabledColor_str), s.items_ar.push(s.copyURLTime_do), s.copyURLTime_do.addListener(FWDUVPContextMenuButton.MOUSE_DOWN, s.copyURLAtTimeHandler), s.addChild(s.copyURLTime_do);
			else if ("fullscreen" == a && o.showFullScreenButton_bl) {
				var r = s.itemsLabels_ar[d];
				t = r.substr(0, r.indexOf("/")), n = r.substr(r.indexOf("/") + 1), FWDUVPContextMenuButton.setPrototype(), s.fullScreenButton_do = new FWDUVPContextMenuButton(t, n, s.itemNormalColor_str, s.itemSelectedColor_str, s.itemDisabledColor_str), s.items_ar.push(s.fullScreenButton_do), s.fullScreenButton_do.addListener(FWDUVPContextMenuButton.MOUSE_DOWN, s.fullScreenStartHandler), s.addChild(s.fullScreenButton_do)
			}
		}, s.setupDeveloperButton = function() {
			if (s.showScriptDeveloper_bl) {
				s.itemsLabels_ar || (s.itemsLabels_ar = []), s.itemsLabels_ar.push("&#0169; made by FWD");
				FWDUVPContextMenuButton.setPrototype(), s.developerButton_do = new FWDUVPContextMenuButton("&#0169; made by FWD", void 0, s.itemNormalColor_str, s.itemSelectedColor_str, s.itemDisabledColor_str), s.developerButton_do.isDeveleper_bl = !0, s.items_ar.push(s.developerButton_do), s.addChild(s.developerButton_do)
			}
		}, s.copyURLAtTimeHandler = function() {
			var e = t.curTime;
			5 == e.length && (e = "00:" + e);
			for (var o = (e + "").split(":"), n = 0; n < o.length; n++) "00" == o[n] && (o[n] = "0");
			var a = FWDUVPUtils.getHashUrlArgs(window.location.hash),
				d = location.href;
			d = d.replace(/&uvpi=.*/i, ""), d = d.replace(/&playlistId=.*/i, ""), d = d.replace(/playlistId=.*/i, ""), d = d.replace(/&t=.*/i, ""), e = -1 == location.href.indexOf("?") ? 1 < FWDUVPlayer.instaces_ar.length ? d + "?uvpi=" + t.instanceName_str + "&playlistId=" + t.catId + "&videoId=" + t.id : d + "?playlistId=" + t.catId + "&videoId=" + t.id : 1 < FWDUVPlayer.instaces_ar.length ? d + "&uvpi=" + t.instanceName_str + "&playlistId=" + t.catId + "&videoId=" + t.id : d + "&playlistId=" + t.catId + "&videoId=" + t.id, -1 == e.indexOf("t=") && (e = e + "&t=" + o[0] + "h" + o[1] + "m" + o[2] + "s"), s.copyText(e), s.removeMenuId_to = setTimeout(s.removeFromDOM, 150)
		}, s.copyURLHandler = function() {
			s.copyText(location.href), s.removeMenuId_to = setTimeout(s.removeFromDOM, 150)
		}, s.fullScreenStartHandler = function() {
			0 == s.fullScreenButton_do.currentState ? t.goFullScreen() : 1 == s.fullScreenButton_do.currentState && t.goNormalScreen(), s.fullScreenButton_do.onMouseOut()
		}, s.updateFullScreenButton = function(e) {
			s.fullScreenButton_do && (0 == e ? s.fullScreenButton_do.setButtonState(0) : s.fullScreenButton_do.setButtonState(1), s.removeMenuId_to = setTimeout(s.removeFromDOM, 150))
		}, s.setupSpacers = function() {
			for (var e = s.items_ar.length - 1, t = 0, o; t < e; t++) o = new FWDUVPDisplayObject("div"), s.spacers_ar[t] = o, o.setHeight(1), o.setBkColor(s.spacerColor_str), s.addChild(o)
		}, s.getMaxWidthResizeAndPosition = function() {
			var e = s.items_ar.length,
				t, o;
			s.totalWidth = 0, s.totalHeight = 0;
			for (var n = 0; n < e; n++) t = s.items_ar[n], t.getMaxTextWidth() > s.totalWidth && (s.totalWidth = t.getMaxTextWidth());
			for (var n = 0; n < e; n++) o = s.spacers_ar[n - 1], t = s.items_ar[n], t.setX(s.padding), t.setY(10 + n * (t.totalHeight + s.sapaceBetweenButtons) - s.padding), o && (o.setWidth(s.totalWidth + 2), o.setX(s.padding), o.setY(parseInt(t.getY() - s.sapaceBetweenButtons / 2) - 1)), t.setWidth(s.totalWidth + 2), t.centerText();
			s.totalHeight = t.getY() + t.totalHeight + 2, s.setWidth(s.totalWidth + 2 * s.padding + 4), s.setHeight(s.totalHeight), s.setVisible(!0), s.removeMenuId_to = setTimeout(s.removeFromDOM, 150)
		}, s.addContextEvent = function() {
			s.prt.main_do.screen.addEventListener ? s.prt.main_do.screen.addEventListener("contextmenu", s.contextMenuHandler) : s.prt.main_do.screen.attachEvent("oncontextmenu", s.contextMenuHandler)
		}, s.contextMenuHandler = function(t) {
			if (!s.show_bl || !o.showContextmenu_bl) {
				if (t.preventDefault) t.preventDefault();
				else return !1;
				return
			}
			return clearTimeout(s.removeMenuId_to), s.prt.main_do.addChild(s), s.positionButtons(t), s.setAlpha(0), FWDAnimation.to(s, .4, {
				alpha: 1,
				ease: Quart.easeOut
			}), window.addEventListener ? (window.addEventListener("mousedown", s.contextMenuWindowOnMouseDownHandler), window.addEventListener("mouseup", s.contextMenuWindowOnMouseDownHandler)) : (document.documentElement.attachEvent("onmousedown", s.contextMenuWindowOnMouseDownHandler), document.documentElement.attachEvent("onmouseup", s.contextMenuWindowOnMouseDownHandler)), !!t.preventDefault && void t.preventDefault()
		}, s.contextMenuWindowOnMouseDownHandler = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t),
				o = e.screenX,
				n = e.screenY;
			FWDUVPUtils.hitTest(s.screen, o, n) || (window.removeEventListener ? (window.removeEventListener("mousedown", s.contextMenuWindowOnMouseDownHandler), window.removeEventListener("mouseup", s.contextMenuWindowOnMouseDownHandler)) : (document.documentElement.detachEvent("onmousedown", s.contextMenuWindowOnMouseDownHandler), document.documentElement.detachEvent("onmouseup", s.contextMenuWindowOnMouseDownHandler)), s.removeMenuId_to = setTimeout(s.removeFromDOM, 150))
		}, s.positionButtons = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t),
				o = s.prt.main_do.getWidth(),
				n = s.prt.main_do.getHeight(),
				i = e.screenX - s.prt.main_do.getGlobalX(),
				a = e.screenY - s.prt.main_do.getGlobalY(),
				d = i - 2,
				r = a - 2;
			s.totalWidth = s.getWidth(), s.totalHeight = s.getHeight(), d + s.totalWidth > o - 2 && (d = i - s.totalWidth), 0 > d && (d = parseInt((o - s.totalWidth) / 2)), 0 > d && (d = 0), r + s.totalHeight > n - 2 && (r = a - s.totalHeight), 0 > r && (r = parseInt((n - s.totalHeight) / 2)), 0 > r && (r = 0), s.setX(d), s.setY(r)
		}, s.disable = function() {
			s.copyURL_do && s.copyURL_do.disable(), s.copyURLTime_do && s.copyURLTime_do.disable()
		}, s.enable = function() {
			s.copyURL_do && s.copyURL_do.enable(), s.copyURLTime_do && s.copyURLTime_do.enable()
		}, s.removeFromDOM = function() {
			s.setX(-5e3)
		}, s.init()
	};
	e.setPrototype = function() {
		e.prototype = new FWDUVPDisplayObject("div")
	}, e.prototype = null, window.FWDUVPContextMenu = e
}(window),
function() {
	var t = function(e, o, s, n, i) {
		'use strict';
		var a = this,
			d = t.prototype;
		a.label1_str = e, a.label2_str = o, a.nBC = s, a.sBC = n, a.disabledColor_str = i, a.totalWidth = 400, a.totalHeight = 20, a.isMbl = FWDUVPUtils.isMobile, a.currentState = 1, a.showSecondButton_bl = o != null, a.init = function() {
			a.setBackfaceVisibility(), a.setButtonMode(!0), a.setupMainContainers(), a.setWidth(a.totalWidth), a.setHeight(a.totalHeight), a.setButtonState(0)
		}, a.setupMainContainers = function() {
			a.text1_sdo = new FWDUVPDisplayObject("div"), a.text1_sdo.setBackfaceVisibility(), a.text1_sdo.setDisplay("inline-block"), a.text1_sdo.getStyle().fontFamily = "Arial", a.text1_sdo.getStyle().fontSize = "12px", a.text1_sdo.getStyle().color = a.nBC, a.text1_sdo.getStyle().fontSmoothing = "antialiased", a.text1_sdo.setInnerHTML(a.label1_str), a.addChild(a.text1_sdo), a.showSecondButton_bl && (a.text2_sdo = new FWDUVPDisplayObject("div"), a.text2_sdo.setBackfaceVisibility(), a.text2_sdo.setDisplay("inline-block"), a.text2_sdo.getStyle().fontFamily = "Arial", a.text2_sdo.getStyle().fontSize = "12px", a.text2_sdo.getStyle().color = a.nBC, a.text2_sdo.getStyle().fontSmoothing = "antialiased", a.text2_sdo.setInnerHTML(a.label2_str), a.addChild(a.text2_sdo)), a.dumy_sdo = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (a.dumy_sdo.setBkColor("#FF0000"), a.dumy_sdo.setAlpha(0));
			a.addChild(a.dumy_sdo), a.isMbl ? a.screen.addEventListener("touchstart", a.onMouseDown) : a.screen.addEventListener && (a.screen.addEventListener("mouseover", a.onMouseOver), a.screen.addEventListener("mouseout", a.onMouseOut), a.screen.addEventListener("mousedown", a.onMouseDown), a.screen.addEventListener("click", a.onClick))
		}, a.onMouseOver = function(e) {
			a.isDisabled_bl || (FWDAnimation.killTweensOf(a.text1_sdo), e ? (FWDAnimation.to(a.text1_sdo.screen, .5, {
				css: {
					color: a.sBC
				},
				ease: Expo.easeOut
			}), a.showSecondButton_bl && FWDAnimation.to(a.text2_sdo.screen, .5, {
				css: {
					color: a.sBC
				},
				ease: Expo.easeOut
			})) : (a.text1_sdo.getStyle().color = a.sBC, a.showSecondButton_bl && (FWDAnimation.killTweensOf(a.text2_sdo), a.text2_sdo.getStyle().color = a.sBC)), a.dispatchEvent(t.MOUSE_OVER))
		}, a.onMouseOut = function() {
			a.isDisabled_bl || (FWDAnimation.killTweensOf(a.text1_sdo), FWDAnimation.to(a.text1_sdo.screen, .5, {
				css: {
					color: a.nBC
				},
				ease: Expo.easeOut
			}), a.showSecondButton_bl && (FWDAnimation.killTweensOf(a.text2_sdo), FWDAnimation.to(a.text2_sdo.screen, .5, {
				css: {
					color: a.nBC
				},
				ease: Expo.easeOut
			})), a.dispatchEvent(t.MOUSE_OUT))
		}, a.onClick = function(o) {
            alert(a.isDeveleper_bl)
			return a.isDeveleper_bl ? void window.open("http://www.webdesign-flash.ro", "_blank") : void(a.isDisabled_bl || (o.preventDefault && o.preventDefault(), a.dispatchEvent(t.CLICK)))
		}, a.onMouseDown = function(o) {
			a.isDisabled_bl || (o.preventDefault && o.preventDefault(), a.dispatchEvent(t.MOUSE_DOWN, {
				e: o
			}))
		}, a.toggleButton = function() {
			a.showSecondButton_bl && (1 == a.currentState ? (a.text1_sdo.setVisible(!0), a.text2_sdo.setVisible(!1), a.currentState = 0, a.dispatchEvent(t.FIRST_BUTTON_CLICK)) : (a.text1_sdo.setVisible(!1), a.text2_sdo.setVisible(!0), a.currentState = 1, a.dispatchEvent(t.SECOND_BUTTON_CLICK)))
		}, a.setButtonState = function(e) {
			0 == e ? (a.text1_sdo.setVisible(!0), a.showSecondButton_bl && a.text2_sdo.setVisible(!1), a.currentState = 0) : 1 == e && (a.text1_sdo.setVisible(!1), a.showSecondButton_bl && a.text2_sdo.setVisible(!0), a.currentState = 1)
		}, a.centerText = function() {
			a.dumy_sdo.setWidth(a.totalWidth), a.dumy_sdo.setHeight(a.totalHeight), FWDUVPUtils.isIEAndLessThen9 ? (a.text1_sdo.setY(Math.round((a.totalHeight - a.text1_sdo.getHeight()) / 2) - 1), a.showSecondButton_bl && a.text2_sdo.setY(Math.round((a.totalHeight - a.text2_sdo.getHeight()) / 2) - 1)) : (a.text1_sdo.setY(Math.round((a.totalHeight - a.text1_sdo.getHeight()) / 2)), a.showSecondButton_bl && a.text2_sdo.setY(Math.round((a.totalHeight - a.text2_sdo.getHeight()) / 2))), a.text1_sdo.setHeight(a.totalHeight + 2), a.showSecondButton_bl && a.text2_sdo.setHeight(a.totalHeight + 2)
		}, a.getMaxTextWidth = function() {
			var e = a.text1_sdo.getWidth(),
				t = 0;
			return a.showSecondButton_bl && (t = a.text2_sdo.getWidth()), Math.max(e, t)
		}, a.disable = function() {
			a.isDisabled_bl = !0, FWDAnimation.killTweensOf(a.text1_sdo), FWDAnimation.to(a.text1_sdo.screen, .5, {
				css: {
					color: a.disabledColor_str
				},
				ease: Expo.easeOut
			}), a.setButtonMode(!1)
		}, a.enable = function() {
			a.isDisabled_bl = !1, FWDAnimation.killTweensOf(a.text1_sdo), FWDAnimation.to(a.text1_sdo.screen, .5, {
				css: {
					color: a.nBC
				},
				ease: Expo.easeOut
			}), a.setButtonMode(!0)
		}, a.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.FIRST_BUTTON_CLICK = "onFirstClick", t.SECOND_BUTTON_CLICK = "secondButtonOnClick", t.MOUSE_OVER = "onMouseOver", t.MOUSE_OUT = "onMouseOut", t.MOUSE_DOWN = "onMouseDown", t.CLICK = "onClick", t.prototype = null, window.FWDUVPContextMenuButton = t
}(window),
function() {
	var t = function(o, s) {
		'use strict';
		var n = this,
			e = t.prototype;
		n._d = o, n.bkLeft_img = o.bkLeft_img, n.bkRight_img = o.bkRight_img, n.playN_img = o.playN_img, n.pauseN_img = o.pauseN_img, n.mainScrubberBkLeft_img = o.mainScrubberBkLeft_img, n.mainScrubberDragLeft_img = o.mainScrubberDragLeft_img, n.mainScrubberDragLeftSource = o.mainScrubberDragLeft_img.src, n.mainScrubberLine_img = o.mainScrubberLine_img, n.volumeScrubberBkLeft_img = o.volumeScrubberBkLeft_img, n.volumeScrubberDragBottom_img = o.volumeScrubberDragBottom_img, n.volumeScrubberLine_img = o.volumeScrubberLine_img, n.volumeN_img = o.volumeN_img, n.progressLeft_img = o.progressLeft_img, n.categoriesN_img = o.categoriesN_img, n.prt = s, n.playlistN_img = o.playlistN_img, n.ytbQualityN_img = o.ytbQualityN_img, n.infoN_img = o.infoN_img, n.downloadN_img = o.downloadN_img, n.facebookN_img = o.facebookN_img, n.fullScreenN_img = o.fullScreenN_img, n.normalScreenN_img = o.normalScreenN_img, n.hidePlaylistN_img = o.hidePlaylistN_img, n.showPlaylistN_img = o.showPlaylistN_img, n.embedN_img = o.embedN_img, n.buttons_ar = [], n.useHEX = o.useHEX, n.nBC = o.nBC, n.sBC = o.sBC, n.bkMiddlePath_str = o.bkMiddlePath_str, n.mainScrubberBkMiddlePath_str = o.mainScrubberBkMiddlePath_str, n.volumeScrubberBkMiddlePath_str = o.volumeScrubberBkMiddlePath_str, n.mainScrubberDragMiddlePath_str = o.mainScrubberDragMiddlePath_str, n.volumeScrubberDragMiddlePath_str = o.volumeScrubberDragMiddlePath_str, n.timeColor_str = o.timeColor_str, n.progressMiddlePath_str = o.progressMiddlePath_str, n.youtubeQualityButtonNormalColor_str = o.youtubeQualityButtonNormalColor_str, n.youtubeQualityButtonSelectedColor_str = o.youtubeQualityButtonSelectedColor_str, n.youtubeQualityArrowPath_str = o.youtubeQualityArrowPath_str, n.controllerBkPath_str = o.controllerBkPath_str, n.ytbQualityButtonPointerPath_str = o.ytbQualityButtonPointerPath_str, n.buttonsToolTipFontColor_str = o.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay = o.buttonsToolTipHideDelay, n.ttYtbBtns = 0, n.sW = 0, n.sH = o.controllerHeight, n.scrbsBkLARW = n.mainScrubberBkLeft_img.width, n.maiScrbW = 0, n.mainScrbMinW = 100, n.volumeScrubberOfsetHeight = o.volumeScrubberOfsetHeight, n.volumeScrubberHeight = o.volumeScrubberHeight + n.volumeScrubberOfsetHeight, n.volScrbW = n.mainScrubberBkLeft_img.height, n.mainScrbH = n.mainScrubberBkLeft_img.height, n.mainScrbDrgLW = n.mainScrubberDragLeft_img.width, n.scrubbersOffsetWidth = o.scrubbersOffsetWidth, n.volume = o.volume, n.lastVolume = n.volume, n.startSpaceBetweenButtons = o.startSpaceBetweenButtons, n.spaceBetweenButtons = o.spaceBetweenButtons, n.percentPlayed = 0, n.percentLoaded = 0, n.lastTimeLength = 0, n.prevYtbQualityButtonsLength = 0, n.pointerWidth = 8, n.pointerHeight = 5, n.timeOffsetLeftWidth = o.timeOffsetLeftWidth, n.timeOffsetRightWidth = o.timeOffsetRightWidth, n.timeOffsetTop = o.timeOffsetTop, n.mainScrubberOffestTop = o.mainScrubberOffestTop, n.isVolumeScrubberShowed_bl = !0, n.volumeScrubberIsDragging_bl = !1, n.showButtonsToolTip_bl = o.showButtonsToolTip_bl, n.showPlaylistsButtonAndPlaylists_bl = o.showPlaylistsButtonAndPlaylists_bl, n.showPlaylistButtonAndPlaylist_bl = o.showPlaylistButtonAndPlaylist_bl, n.showEmbedButton_bl = o.showEmbedButton_bl, n.showPlaylistByDefault_bl = o.showPlaylistByDefault_bl, n.showShuffleButton_bl = o.showShuffleButton_bl, n.showLoopButton_bl = o.showLoopButton_bl, n.showNP_bl = s._d.showNextAndPrevButtonsInController_bl, n.showNextAndPrevButtonsInController_bl = o.showNextAndPrevButtonsInController_bl, n.showFullScreenButton_bl = o.showFullScreenButton_bl, n.disableVideoScrubber_bl = o.disableVideoScrubber_bl, n.showYoutubeQualityButton_bl = o.showYoutubeQualityButton_bl, n.showShareButton_bl = o.showShareButton_bl, n.showInfoButton_bl = o.showInfoButton_bl, n.showDownloadVideoButton_bl = o.showDownloadVideoButton_bl, n.showVolumeScrubber_bl = o.showVolumeScrubber_bl, n.allowToChangeVolume_bl = o.allowToChangeVolume_bl, n.showTime_bl = o.showTime_bl, n.showVolumeButton_bl = o.showVolumeButton_bl, n.showControllerWhenVideoIsStopped_bl = o.showControllerWhenVideoIsStopped_bl, n.showRewindButton_bl = o.showRewindButton_bl, n.showSubBtn = o.showSubBtn, n.muted = s._d.autoPlay_bl, n.isShowed_bl = !0, n.showNextAndPrevButtons_bl = o.showNextAndPrevButtons_bl, n.isPlaylistShowed_bl = o.isPlaylistShowed_bl, n.areYtbQualityButtonsShowed_bl = !0, n.repeatBackground_bl = o.repeatBackground_bl, n.isMbl = FWDUVPUtils.isMobile, n.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, n.useVectorIcons_bl = o.useVectorIcons_bl, n.init = function() {
			if (n.setOverflow("visible"), n.mainHld = new FWDUVPDisplayObject("div"), o.useAToB && n.setupATB(), n.repeatBackground_bl) n.bk_do = new FWDUVPDisplayObject("div"), n.bk_do.getStyle().background = "url('" + n.controllerBkPath_str + "')";
			else {
				n.bk_do = new FWDUVPDisplayObject("img");
				var e = new Image;
				e.src = n.controllerBkPath_str, n.bk_do.setScreen(e)
			}
			n.mainHld.addChild(n.bk_do), n.mainHld.setOverflow("visible"), n.mainHld.getStyle().zIndex = 1, n.addChild(n.mainHld), n.showYoutubeQualityButton_bl && (n.ytbQuality_ar = ["hd4320", "hd2880", "hd2160", "hd1440", "highres", "hd1080", "hd720", "large", "medium", "small", "tiny"], n.ytbButtons_ar = [], n.ttYtbBtns = n.ytbQuality_ar.length, n.setupYtbButtons()), n.showNextAndPrevButtonsInController_bl && n.setupPrevButton(), n.setupPlayPauseButton(), n.showRewindButton_bl && n.setupRewindButton(), n.showNextAndPrevButtonsInController_bl && n.setupNextButton(), n.setupMainScrubber(), n.showTime_bl && n.setupTime(), n.showVolumeButton_bl && n.setupVolumeButton(), n.showPlaylistsButtonAndPlaylists_bl && n.setupCategoriesButton(), n.showPlaylistButtonAndPlaylist_bl && n.setupPlaylistButton(), n.showYoutubeQualityButton_bl && n.setupYoutubeQualityButton(), n.showShareButton_bl && n.setupShareButton(), n.showEmbedButton_bl && n.setupEmbedButton(), o.useAToB && n.setupAtbButton(), n.showInfoButton_bl && n.setupInfoButton(), o.showPlaybackRateButton_bl && n.setupPlaybackRateButton(), n.showDownloadVideoButton_bl && n.setupDownloadButton(), n.showSubBtn && n.setupSubtitleButton(), o.showChromecastButton_bl && n.setupChromecastButton(), o.showAudioTracksButton_bl && n.setupAudioTracksButton(), o.show360DegreeVideoVrButton_bl && n.setupVrButton(), n.showFullScreenButton_bl && n.setupFullscreenButton(), n.showButtonsToolTip_bl && n.setupToolTips(), n.showVolumeScrubber_bl && (n.setupVolumeScrubber(), n.hideVolumeScrubber()), n.hide(!1)
		}, n.resizeAndPosition = function() {
			n.sW = s.tempVidStageWidth, n.positionButtons(), n.setY(s.tempVidStageHeight - n.sH), n.hideQualityButtons(!1), n.ytbButtonsHolder_do && (FWDAnimation.killTweensOf(n.ytbButtonsHolder_do), n.ytbButtonsHolder_do.setY(s.tempStageHeight)), n.subtitlesButtonsHolder_do && (FWDAnimation.killTweensOf(n.subtitlesButtonsHolder_do), n.subtitlesButtonsHolder_do.setY(s.sH)), n.ATBButtonsHolder_do && (FWDAnimation.killTweensOf(n.ATBButtonsHolder_do), n.ATBButtonsHolder_do.setY(s.sH)), n.playbackRatesButtonsHolder_do && (FWDAnimation.killTweensOf(n.playbackRatesButtonsHolder_do), n.playbackRatesButtonsHolder_do.setY(s.sH)), n.positionAdsLines()
		}, n.getButtonIndex = function(e) {
			return FWDUVPUtils.indexOfArray(n.buttons_ar, e)
		}, n.positionButtons = function() {
			if (n.sW) {
				var e = 0,
					t = 0,
					a = 0,
					d = 0,
					r = n.showTime_bl,
					l, u, _;
				if (o.playlist_ar && o.playlist_ar[s.id]) {
					if (s.is360 && n.vrButton_do ? n.addVrButton() : n.removeVrButton(), n.showDownloadVideoButton_bl)
						if (o.playlist_ar[s.id].downloadable) - 1 == n.getButtonIndex(n.downloadButton_do) && (n.ccBtn_do && -1 != n.getButtonIndex(n.ccBtn_do) ? (_ = n.getButtonIndex(n.ccBtn_do), n.buttons_ar.splice(_, 0, n.downloadButton_do)) : n.vrButton_do ? (_ = n.getButtonIndex(n.vrButton_do), n.buttons_ar.splice(_, 0, n.downloadButton_do)) : n.fullScreenButton_do ? (_ = n.getButtonIndex(n.fullScreenButton_do), n.buttons_ar.splice(_, 0, n.downloadButton_do)) : n.buttons_ar.splice(n.buttons_ar.length, 0, n.downloadButton_do), n.downloadButton_do.setVisible(!0));
						else {
							var c = n.getButtonIndex(n.downloadButton_do); - 1 != c && (n.buttons_ar.splice(c, 1), n.downloadButton_do.setVisible(!1))
						} if (n.showInfoButton_bl)
						if (o.playlist_ar[s.id].desc) - 1 == n.getButtonIndex(n.infoButton_do) && (n.downloadButton_do && -1 != n.getButtonIndex(n.downloadButton_do) ? (_ = n.getButtonIndex(n.downloadButton_do), n.buttons_ar.splice(_, 0, n.infoButton_do)) : n.ccBtn_do && -1 != n.getButtonIndex(n.ccBtn_do) ? (_ = n.getButtonIndex(n.ccBtn_do), n.buttons_ar.splice(_, 0, n.infoButton_do)) : n.vrButton_do ? (_ = n.getButtonIndex(n.vrButton_do), n.buttons_ar.splice(_, 0, n.infoButton_do)) : n.fullScreenButton_do ? (_ = n.getButtonIndex(n.fullScreenButton_do), n.buttons_ar.splice(_, 0, n.infoButton_do)) : n.buttons_ar.splice(n.buttons_ar.length, 0, n.infoButton_do), n.infoButton_do.setVisible(!0));
						else {
							var c = n.getButtonIndex(n.infoButton_do); - 1 != c && (n.buttons_ar.splice(c, 1), n.infoButton_do.setVisible(!1))
						} if (o.useAToB)
						if (o.playlist_ar[s.id].atb) - 1 == FWDUVPUtils.indexOfArray(n.buttons_ar, n.atbButton_do) && (n.infoButton_do && -1 != n.getButtonIndex(n.infoButton_do) ? (_ = n.getButtonIndex(n.infoButton_do), n.buttons_ar.splice(_, 0, n.atbButton_do)) : n.downloadButton_do && -1 != n.getButtonIndex(n.downloadButton_do) ? (_ = n.getButtonIndex(n.downloadButton_do), n.buttons_ar.splice(_, 0, n.atbButton_do)) : n.ccBtn_do && -1 != n.getButtonIndex(n.ccBtn_do) ? (_ = n.getButtonIndex(n.ccBtn_do), n.buttons_ar.splice(_, 0, n.atbButton_do)) : n.vrButton_do ? (_ = n.getButtonIndex(n.vrButton_do), n.buttons_ar.splice(_, 0, n.atbButton_do)) : n.fullScreenButton_do ? (_ = n.getButtonIndex(n.fullScreenButton_do), n.buttons_ar.splice(_, 0, n.atbButton_do)) : n.buttons_ar.splice(n.buttons_ar.length, 0, n.atbButton_do), n.atbButton_do.setVisible(!0));
						else {
							var p = FWDUVPUtils.indexOfArray(n.buttons_ar, n.atbButton_do); - 1 != p && (n.buttons_ar.splice(p, 1), n.atbButton_do.setVisible(!1), n.atb.hide(!0))
						} if (n.showSubBtn)
						if (o.playlist_ar[s.id].subtitleSource) - 1 == FWDUVPUtils.indexOfArray(n.buttons_ar, n.subtitleButton_do) && (n.playbackRateButton_do && -1 != n.getButtonIndex(n.playbackRateButton_do) ? (_ = n.getButtonIndex(n.playbackRateButton_do), n.buttons_ar.splice(_, 0, n.subtitleButton_do)) : n.atbButton_do && -1 != n.getButtonIndex(n.atbButton_do) ? (_ = n.getButtonIndex(n.atbButton_do), n.buttons_ar.splice(_, 0, n.subtitleButton_do)) : n.infoButton_do && -1 != n.getButtonIndex(n.infoButton_do) ? (_ = n.getButtonIndex(n.infoButton_do), n.buttons_ar.splice(_, 0, n.subtitleButton_do)) : n.downloadButton_do && -1 != n.getButtonIndex(n.downloadButton_do) ? (_ = n.getButtonIndex(n.downloadButton_do), n.buttons_ar.splice(_, 0, n.subtitleButton_do)) : n.ccBtn_do && -1 != n.getButtonIndex(n.ccBtn_do) ? (_ = n.getButtonIndex(n.ccBtn_do), n.buttons_ar.splice(_, 0, n.subtitleButton_do)) : n.vrButton_do ? (_ = n.getButtonIndex(n.vrButton_do), n.buttons_ar.splice(_, 0, n.subtitleButton_do)) : n.fullScreenButton_do ? (_ = n.getButtonIndex(n.fullScreenButton_do), n.buttons_ar.splice(_, 0, n.subtitleButton_do)) : n.buttons_ar.splice(n.buttons_ar.length, 0, n.subtitleButton_do), n.subtitleButton_do.setVisible(!0));
						else {
							var h = FWDUVPUtils.indexOfArray(n.buttons_ar, n.subtitleButton_do); - 1 != h && (n.buttons_ar.splice(h, 1), n.subtitleButton_do.setVisible(!1), n.subtitleButton_do.setX(-5e3))
						} if (s.videoType_str == FWDUVPlayer.VIMEO && !o.showDefaultControllerForVimeo_bl) {
						var b = FWDUVPUtils.indexOfArray(n.buttons_ar, n.playPauseButton_do); - 1 != b && (n.buttons_ar.splice(b, 1), n.playPauseButton_do.setVisible(!1), n.playPauseButton_do.setX(-500)), n.mainScrubber_do.setVisible(!1)
					} else - 1 == FWDUVPUtils.indexOfArray(n.buttons_ar, n.playPauseButton_do) && n.playPauseButton_do && (_ = 0, n.buttons_ar.splice(_, 0, n.playPauseButton_do), n.playPauseButton_do.setVisible(!0)), -1 == FWDUVPUtils.indexOfArray(n.buttons_ar, n.rewindButton_do) && n.rewindButton_do && (_ = FWDUVPUtils.indexOfArray(n.buttons_ar, n.playPauseButton_do), n.buttons_ar.splice(_, 0, n.rewindButton_do), n.rewindButton_do.setVisible(!0)), n.showVolumeButton_bl && (n.showTime_bl ? -1 == FWDUVPUtils.indexOfArray(n.buttons_ar, n.volBtn) && (_ = FWDUVPUtils.indexOfArray(n.buttons_ar, n.time_do) + 1, n.buttons_ar.splice(_, 0, n.volBtn), n.volBtn.setVisible(!0)) : -1 == FWDUVPUtils.indexOfArray(n.buttons_ar, n.volBtn) && (_ = FWDUVPUtils.indexOfArray(n.buttons_ar, n.mainScrubber_do) + 1, n.buttons_ar.splice(_, 0, n.volBtn), n.volBtn.setVisible(!0))), n.mainScrubber_do.setVisible(!0);
					for (var m = [], g = 0; g < n.buttons_ar.length; g++) m[g] = n.buttons_ar[g];
					"right" == s.tempPlaylistPosition_str && n.showNextAndPrevButtonsInController_bl && !n.showNP_bl && -1 != FWDUVPUtils.indexOfArray(m, n.nextButton_do) && (m.splice(FWDUVPUtils.indexOfArray(m, n.nextButton_do), 1), m.splice(FWDUVPUtils.indexOfArray(m, n.prevButton_do), 1), n.nextButton_do.setX(-1e3), n.prevButton_do.setX(-1e3)), n.maiScrbW = n.sW - 2 * n.startSpaceBetweenButtons;
					for (var g = 0; g < m.length; g++) l = m[g], l != n.mainScrubber_do && (n.maiScrbW -= l.w + n.spaceBetweenButtons);
					if (s.videoType_str == FWDUVPlayer.VIMEO && 120 <= n.maiScrbW && !o.showDefaultControllerForVimeo_bl) {
						n.mainScrubber_do && -1 != FWDUVPUtils.indexOfArray(m, n.mainScrubber_do) && (m.splice(FWDUVPUtils.indexOfArray(m, n.mainScrubber_do), 1), n.positionScrollBarOnTopOfTheController()), n.time_do && -1 != FWDUVPUtils.indexOfArray(m, n.time_do) && (m.splice(FWDUVPUtils.indexOfArray(m, n.time_do), 1), n.time_do.setX(-1e3)), e = m.length;
						for (var g = 0; g < e; g++) t += m[g].w;
						a = n.spaceBetweenButtons, d = n.sW - m[e - 1].w - n.startSpaceBetweenButtons - 2;
						for (var g = e - 1; 0 <= g; g--) l = m[g], g == e - 1 ? l.setX(d) : (u = m[g + 1], l.setX(u.x - l.w - a))
					} else if (120 >= n.maiScrbW || s.videoType_str == FWDUVPlayer.VIMEO && !o.showDefaultControllerForVimeo_bl) {
						n.mainScrubber_do && -1 != FWDUVPUtils.indexOfArray(m, n.mainScrubber_do) && (m.splice(FWDUVPUtils.indexOfArray(m, n.mainScrubber_do), 1), n.positionScrollBarOnTopOfTheController()), n.time_do && -1 != FWDUVPUtils.indexOfArray(m, n.time_do) && (m.splice(FWDUVPUtils.indexOfArray(m, n.time_do), 1), n.time_do.setX(-1e3)), e = m.length;
						for (var g = 0; g < e; g++) t += m[g].w;
						a = parseInt((n.sW - t - 2 * n.startSpaceBetweenButtons) / (e - 1)), d = parseInt((n.sW - t - (e - 1) * a) / 2);
						for (var g = 0; g < e; g++) l = m[g], 0 == g ? l.setX(d) : (u = m[g - 1], l.setX(u.x + u.w + a))
					} else {
						for (; n.maiScrbW < n.mainScrbMinW;) {
							n.maiScrbW = n.sW - 2 * n.startSpaceBetweenButtons, n.time_do && -1 != FWDUVPUtils.indexOfArray(m, n.time_do) ? (m.splice(FWDUVPUtils.indexOfArray(m, n.time_do), 1), n.time_do.setX(-1e3), r = !1) : n.shareButton_do && -1 != FWDUVPUtils.indexOfArray(m, n.shareButton_do) ? (m.splice(FWDUVPUtils.indexOfArray(m, n.shareButton_do), 1), n.shareButton_do.setX(-1e3)) : n.downloadButton_do && -1 != FWDUVPUtils.indexOfArray(m, n.downloadButton_do) ? (m.splice(FWDUVPUtils.indexOfArray(m, n.downloadButton_do), 1), n.downloadButton_do.setX(-1e3)) : n.embedButton_do && -1 != FWDUVPUtils.indexOfArray(m, n.embedButton_do) ? (m.splice(FWDUVPUtils.indexOfArray(m, n.embedButton_do), 1), n.embedButton_do.setX(-1e3)) : n.volBtn && -1 != FWDUVPUtils.indexOfArray(m, n.volBtn) ? (m.splice(FWDUVPUtils.indexOfArray(m, n.volBtn), 1), n.volBtn.setX(-1e3)) : n.playbackRateButton_do && -1 != FWDUVPUtils.indexOfArray(m, n.playbackRateButton_do) ? (m.splice(FWDUVPUtils.indexOfArray(m, n.playbackRateButton_do), 1), n.playbackRateButton_do.setX(-1e3)) : n.ytbQualityButton_do && -1 != FWDUVPUtils.indexOfArray(m, n.ytbQualityButton_do) ? (m.splice(FWDUVPUtils.indexOfArray(m, n.ytbQualityButton_do), 1), n.ytbQualityButton_do.setX(-1e3)) : n.playlistButton_do && -1 != FWDUVPUtils.indexOfArray(m, n.playlistButton_do) ? (m.splice(FWDUVPUtils.indexOfArray(m, n.playlistButton_do), 1), n.playlistButton_do.setX(-1e3)) : n.infoButton_do && -1 != FWDUVPUtils.indexOfArray(m, n.infoButton_do) ? (m.splice(FWDUVPUtils.indexOfArray(m, n.infoButton_do), 1), n.infoButton_do.setX(-1e3)) : n.categoriesButton_do && -1 != FWDUVPUtils.indexOfArray(m, n.categoriesButton_do) && (m.splice(FWDUVPUtils.indexOfArray(m, n.categoriesButton_do), 1), n.categoriesButton_do.setX(-1e3)), e = m.length;
							for (var g = 0; g < e; g++) l = m[g], l != n.mainScrubber_do && (n.maiScrbW -= l.w + n.spaceBetweenButtons)
						}
						n.showNextAndPrevButtonsInController_bl && 120 < n.maiScrbW, r && (n.maiScrbW -= 2 * n.timeOffsetLeftWidth), e = m.length;
						for (var g = 0; g < e; g++)
							if (l = m[g], 0 == g) l.setX(n.startSpaceBetweenButtons);
							else if (l == n.mainScrubber_do) u = m[g - 1], FWDAnimation.killTweensOf(n.mainScrubber_do), n.mainScrubber_do.setX(u.x + u.w + n.spaceBetweenButtons), n.mainScrubber_do.setY(parseInt((n.sH - n.mainScrbH) / 2)), n.mainScrubber_do.setWidth(n.maiScrbW + 1), n.mainScrubberBkMiddle_do.setWidth(n.maiScrbW - 2 * n.scrbsBkLARW), n.mainScrubberBkRight_do.setX(n.maiScrbW - n.scrbsBkLARW), n.mainScrubberDragMiddle_do.setWidth(n.maiScrbW - n.scrbsBkLARW - n.scrubbersOffsetWidth);
						else if (l == n.time_do) {
							u = m[g - 1], l.setX(u.x + u.w + n.spaceBetweenButtons + n.timeOffsetLeftWidth);
							var y = 0;
							n.isLive && (y = 1), l.setY(parseInt((n.sH - l.h) / 2) + y)
						} else l == n.volBtn && r ? (u = m[g - 1], l.setX(u.x + u.w + n.spaceBetweenButtons + n.timeOffsetRightWidth)) : (u = m[g - 1], l.setX(u.x + u.w + n.spaceBetweenButtons));
						n.isShowed_bl ? n.isMainScrubberOnTop_bl = !1 : (n.isMainScrubberOnTop_bl = !0, n.positionScrollBarOnTopOfTheController())
					}
					n.bk_do && (n.bk_do.setWidth(n.sW), n.bk_do.setHeight(n.sH)), n.progressMiddle_do && n.progressMiddle_do.setWidth(Math.max(n.maiScrbW - n.scrbsBkLARW - n.scrubbersOffsetWidth, 0)), n.updateMainScrubber(n.percentPlayed), n.updatePreloaderBar(n.percentLoaded), n.mainHld.setWidth(n.sW), n.mainHld.setHeight(n.sH), n.setWidth(n.sW), n.setHeight(n.sH), n.atb && n.atb.resize()
				}
			}
		}, n.positionScrollBarOnTopOfTheController = function() {
			n.maiScrbW = n.sW, n.updatePreloaderBar(n.percentLoaded), n.mainScrubber_do.setWidth(n.maiScrbW + 1), n.mainScrubberBkMiddle_do.setWidth(n.maiScrbW - 2 * n.scrbsBkLARW), n.mainScrubberBkRight_do.setX(n.maiScrbW - n.scrbsBkLARW), n.mainScrubberDragMiddle_do.setWidth(n.maiScrbW - n.scrbsBkLARW - n.scrubbersOffsetWidth);
			var e = 0;
			n.atb && n.atb.isShowed_bl && (e = n.sH), FWDAnimation.killTweensOf(n.mainScrubber_do), n.mainScrubber_do.setX(0), n.mainScrubber_do.setAlpha(1), n.isMainScrubberOnTop_bl || n.isShowed_bl ? (n.atb && n.atb.isShowed_bl && !n.isShowed_bl ? e += n.mainScrubberOffestTop : e = 0, FWDAnimation.killTweensOf(n.mainScrubber_do), n.isShowed_bl ? n.mainScrubber_do.setY(-n.mainScrubberOffestTop - e) : FWDAnimation.to(n.mainScrubber_do, .8, {
				y: -n.mainScrubberOffestTop - e,
				ease: Expo.easeOut
			})) : !n.isLive && FWDAnimation.to(n.mainScrubber_do, .8, {
				y: -n.mainScrubberOffestTop - e,
				ease: Expo.easeOut
			}), n.isMainScrubberOnTop_bl = !0
		}, n.setupToolTips = function() {
			FWDUVPToolTip.setPrototype(), n.playPauseToolTip_do = new FWDUVPToolTip(n.playPauseButton_do, o.toopTipBk_str, o.toopTipPointer_str, "play / pause", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.playPauseToolTip_do.screen), n.showControllerWhenVideoIsStopped_bl && (FWDUVPToolTip.setPrototype(), n.prevButtonToolTip_do = new FWDUVPToolTip(n.prevButton_do, o.toopTipBk_str, o.toopTipPointer_str, "previous video", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.prevButtonToolTip_do.screen), FWDUVPToolTip.setPrototype(), n.nextButtonToolTip_do = new FWDUVPToolTip(n.nextButton_do, o.toopTipBk_str, o.toopTipPointer_str, "next video", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.nextButtonToolTip_do.screen)), n.showPlaylistsButtonAndPlaylists_bl && (FWDUVPToolTip.setPrototype(), n.playlistsButtonToolTip_do = new FWDUVPToolTip(n.categoriesButton_do, o.toopTipBk_str, o.toopTipPointer_str, "show playlists", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.playlistsButtonToolTip_do.screen)), n.showPlaylistButtonAndPlaylist_bl && (FWDUVPToolTip.setPrototype(), n.playlistButtonToolTip_do = new FWDUVPToolTip(n.playlistButton_do, o.toopTipBk_str, o.toopTipPointer_str, "show / hide playlist", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.playlistButtonToolTip_do.screen)), n.showEmbedButton_bl && (FWDUVPToolTip.setPrototype(), n.embedButtonToolTip_do = new FWDUVPToolTip(n.embedButton_do, o.toopTipBk_str, o.toopTipPointer_str, "show embed window", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.embedButtonToolTip_do.screen)), n.showShareButton_bl && (FWDUVPToolTip.setPrototype(), n.facebookButtonToolTip_do = new FWDUVPToolTip(n.shareButton_do, o.toopTipBk_str, o.toopTipPointer_str, "share", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.facebookButtonToolTip_do.screen)), o.showChromecastButton_bl && (FWDUVPToolTip.setPrototype(), n.castButtonToolTip_do = new FWDUVPToolTip(n.ccBtn_do, o.toopTipBk_str, o.toopTipPointer_str, "chromecast", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.castButtonToolTip_do.screen)), FWDUVPToolTip.setPrototype(), n.atbButtonToolTip_do = new FWDUVPToolTip(n.atbButton_do, o.toopTipBk_str, o.toopTipPointer_str, "a to b loop", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.atbButtonToolTip_do.screen), n.showSubBtn && (FWDUVPToolTip.setPrototype(), n.subtitleButtonToolTip_do = new FWDUVPToolTip(n.subtitleButton_do, o.toopTipBk_str, o.toopTipPointer_str, "show / hide subtitle", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.subtitleButtonToolTip_do.screen)), n.showInfoButton_bl && (FWDUVPToolTip.setPrototype(), n.infoButtonToolTip_do = new FWDUVPToolTip(n.infoButton_do, o.toopTipBk_str, o.toopTipPointer_str, "more info", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.infoButtonToolTip_do.screen)), n.showDownloadVideoButton_bl && (FWDUVPToolTip.setPrototype(), n.downloadButtonToolTip_do = new FWDUVPToolTip(n.downloadButton_do, o.toopTipBk_str, o.toopTipPointer_str, "download video", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.downloadButtonToolTip_do.screen)), n.fullScreenButton_do && (FWDUVPToolTip.setPrototype(), n.fullscreenButtonToolTip_do = new FWDUVPToolTip(n.fullScreenButton_do, o.toopTipBk_str, o.toopTipPointer_str, "fullscreen / normalscreen", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.fullscreenButtonToolTip_do.screen)), n.vrButton_do && (FWDUVPToolTip.setPrototype(), n.vrToolTip_do = new FWDUVPToolTip(n.vrButton_do, o.toopTipBk_str, o.toopTipPointer_str, "VR", n.buttonsToolTipFontColor_str, n.buttonsToolTipHideDelay), document.documentElement.appendChild(n.vrToolTip_do.screen))
		}, n.showToolTip = function(t, o, s) {
			if (n.showButtonsToolTip_bl) {
				var e = FWDUVPUtils.getViewportSize(),
					i = FWDUVPUtils.getViewportMouseCoordinates(s),
					a, d;
				3 > t.screen.offsetWidth ? (a = parseInt(100 * t.getGlobalX() + t.w / 2 - o.w / 2), d = parseInt(100 * t.getGlobalY() - o.h - 8)) : (a = parseInt(t.getGlobalX() + t.w / 2 - o.w / 2), d = parseInt(t.getGlobalY() - o.h - 8));
				var r = 0;
				0 > a ? (r = a, a = 0) : a + o.w > e.w && (r = -1 * (e.w - (a + o.w)), a += -1 * r), o.positionPointer(r, !1), o.setX(a), o.setY(d), o.show()
			}
		}, n.setupAdsLines = function(e, t, s, a) {
			if (!n.createdAdsOnce_bl && (n.curLinesId != t || n.curLinesCat != s || a) && (n.curLinesId = t, n.curLinesCat = s, !!e)) {
				if (n.resetsAdsLines(), n.linesHolder_do || (n.linesHolder_do = new FWDUVPDisplayObject("div"), n.linesHolder_do.setOverflow("visible"), n.mainScrubber_do.addChild(n.linesHolder_do)), n.createdAdsOnce_bl = !0, n.lines_ar = e, n.lines_ar) {
					var d;
					n.line_ar = [];
					for (var r = 0; r < n.lines_ar.length; r++) {
						d = new FWDUVPDisplayObject("div"), d.screen.className = "uvp-ad-line";
						var l = o.adLinePat_str;
						n.useHEX && window.isWhite && (l = o.sknPth + "ad-line-dark.png"), d.getStyle().background = "url('" + l + "') repeat-x", d.timeStart = e[r].timeStart, d.setWidth(2), d.setHeight(n.mainScrubberDragLeft_img.height), d.isUsed_bl = !1, d.isShowed_bl = !1, n.lines_ar[r].played_bl && d.setVisible(!1), d.setAlpha(0), n.line_ar[r] = d, n.linesHolder_do.addChild(d)
					}
				}
				n.totalDuration = 0
			}
		}, n.hideAdsLines = function() {
			if (n.linesHolder_do && n.linesHolder_do.setX(-5e3), n.line_ar)
				for (var e = 0; e < n.line_ar.length; e++) n.line_ar[e].setAlpha(0), n.line_ar[e].isShowed_bl = !1
		}, n.positionAdsLines = function() {
			if (n.linesHolder_do && s.totalDuration && n.createdAdsOnce_bl && (n.totalDuration = s.totalDuration, s.isAdd_bl ? n.linesHolder_do.setX(-5e3) : n.linesHolder_do.setX(0), n.line_ar))
				for (var e = 0, t; e < n.line_ar.length; e++) {
					t = n.line_ar[e];
					var o = Math.round(t.timeStart / n.totalDuration * n.maiScrbW) - 1;
					t.setX(o), 0 > t.x && t.setX(0), t.isUsed_bl || 0 == n.totalDuration || t.isShowed_bl || (FWDAnimation.to(t, 1, {
						alpha: 1,
						delay: 1,
						ease: Expo.easeOut
					}), t.isShowed_bl = !0)
				}
		}, n.resetsAdsLines = function() {
			if (n.line_ar) {
				for (var e = 0; e < n.line_ar.length; e++) FWDAnimation.killTweensOf(n.line_ar[e]), n.linesHolder_do.removeChild(n.line_ar[e]);
				n.createdAdsOnce_bl = !1, n.curLinesId = -1, n.line_ar = null, n.hadLInes = !1
			}
		}, n.playbackRatesSource_ar = o.defaultPlaybackRate_ar, n.playbackRateButtons_ar = [], n.totalPlaybackRateButtons = 6, n.arePlaybackRateButtonsShowed_bl = !0, n.showPlaybackRateButton_bl || (n.arePlaybackRateButtonsShowed_bl = !1), n.setupPlaybackRateButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.playbackRateButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-watch-later'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.playbackRateButton_do = new FWDUVPSimpleButton(o.playbackRateNPath_img, o.playbackRateSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), n.playbackRateButton_do.screen.className = "fwduvp-playback-rate-button", n.playbackRateButton_do.setY(parseInt((n.sH - n.playbackRateButton_do.h) / 2));
			var e = setInterval(function() {
				0 < n.playbackRateButton_do.buttonHeight && (clearInterval(e), n.playbackRateButton_do.setY(parseInt((n.sH - n.playbackRateButton_do.buttonHeight) / 2)))
			}, 50);
			n.playbackRateButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.playbackRateButtonMouseUpHandler), n.mainHld.addChild(n.playbackRateButton_do), n.playbackRateButton_do.setX(-500), n.disablePlaybackRateButton(), n.setupPlaybackRateButtons()
		}, n.playbackRateButtonMouseUpHandler = function() {
			n.arePlaybackRateButtonsShowed_bl ? n.hidePlaybackRateButtons(!0) : (n.showPlaybackRateButtons(!0), n.hideMainScrubberTop())
		}, n.disablePlaybackRateButton = function() {
			n.playbackRateButton_do && n.playbackRateButton_do.disable()
		}, n.enablePlaybackRateButton = function() {
			n.playbackRateButton_do && n.playbackRateButton_do.enable()
		}, n.removePlaybackRateButton = function() {
			n.playbackRateButton_do && (-1 == FWDUVPUtils.indexOfArray(n.buttons_ar, n.playbackRateButton_do) || (n.buttons_ar.splice(FWDUVPUtils.indexOfArray(n.buttons_ar, n.playbackRateButton_do), 1), n.playbackRateButton_do.setX(-300), n.positionButtons()))
		}, n.addPlaybackRateButton = function(e) {
			if (n.playbackRateButton_do && -1 == FWDUVPUtils.indexOfArray(n.buttons_ar, n.playbackRateButton_do)) {
				var t;
				n.atbButton_do && -1 != n.getButtonIndex(n.atbButton_do) ? (t = n.getButtonIndex(n.atbButton_do), n.buttons_ar.splice(t, 0, n.playbackRateButton_do)) : n.infoButton_do && -1 != n.getButtonIndex(n.infoButton_do) ? (t = n.getButtonIndex(n.infoButton_do), n.buttons_ar.splice(t, 0, n.playbackRateButton_do)) : n.downloadButton_do && -1 != n.getButtonIndex(n.downloadButton_do) ? (t = n.getButtonIndex(n.downloadButton_do), n.buttons_ar.splice(t, 0, n.playbackRateButton_do)) : n.ccBtn_do && -1 != n.getButtonIndex(n.ccBtn_do) ? (t = n.getButtonIndex(n.ccBtn_do), n.buttons_ar.splice(t, 0, n.playbackRateButton_do)) : n.vrButton_do ? (t = n.getButtonIndex(n.vrButton_do), n.buttons_ar.splice(t, 0, n.playbackRateButton_do)) : n.fullScreenButton_do ? (t = n.getButtonIndex(n.fullScreenButton_do), n.buttons_ar.splice(t, 0, n.playbackRateButton_do)) : n.buttons_ar.splice(n.buttons_ar.length, 0, n.playbackRateButton_do), n.updatePlaybackRateButtons(e)
			}
		}, n.updatePlaybackRateButtons = function(e) {
			n.playbackRateButton_do && (setTimeout(function() {
				n.disablePlaybackRateButtons(e)
			}, 65), n.prevplaybackRateIndex = e)
		}, n.setupPlaybackRateButtons = function() {
			if (n.playbackRatesButtonsHolder_do = new FWDUVPDisplayObject("div"), n.playbackRatesButtonsHolder_do.setOverflow("visible"), n.repeatBackground_bl) n.playbackRatesButtonsHolder_do.getStyle().background = "url('" + n.controllerBkPath_str + "')";
			else {
				n.playbackRatesButtonsBackground_do = new FWDUVPDisplayObject("img");
				var e = new Image;
				e.src = n.controllerBkPath_str, n.playbackRatesButtonsBackground_do.setScreen(e), n.playbackRatesButtonsHolder_do.addChild(n.playbackRatesButtonsBackground_do)
			}
			n.playbackRatesButtonsHolder_do.setX(300), n.playbackRatesButtonsHolder_do.setY(-300), s.videoHolder_do.addChild(n.playbackRatesButtonsHolder_do);
			var e = new Image;
			e.src = n.ytbQualityButtonPointerPath_str, n.playbackRatesPonter_do = new FWDUVPDisplayObject("img"), n.playbackRatesPonter_do.setScreen(e), n.playbackRatesPonter_do.setWidth(n.pointerWidth), n.playbackRatesPonter_do.setHeight(n.pointerHeight), n.playbackRatesButtonsHolder_do.addChild(n.playbackRatesPonter_do);
			var e = new Image;
			e.src = n.youtubeQualityArrowPath_str, n.playbackRateQualityArrow_do = new FWDUVPDisplayObject("img"), n.playbackRateQualityArrow_do.setScreen(e), n.playbackRateQualityArrow_do.setX(7), n.playbackRateQualityArrow_do.setWidth(5), n.playbackRateQualityArrow_do.setHeight(7), n.playbackRatesButtonsHolder_do.addChild(n.playbackRateQualityArrow_do);
			for (var t = 0, o; t < n.totalPlaybackRateButtons; t++) FWDUVPYTBQButton.setPrototype(), o = new FWDUVPYTBQButton("no source", n.youtubeQualityButtonNormalColor_str, n.youtubeQualityButtonSelectedColor_str, void 0, t), o.addListener(FWDUVPYTBQButton.MOUSE_OVER, n.plbkQualityOver), o.addListener(FWDUVPYTBQButton.MOUSE_OUT, n.plbkQualityOut), o.addListener(FWDUVPYTBQButton.CLICK, n.plbkQualityClick), n.playbackRateButtons_ar[t] = o, n.playbackRatesButtonsHolder_do.addChild(o);
			n.positionAndResizePlaybackRateButtons(n.playbackRatesSource_ar), n.hidePlaybackRateButtons(!1)
		}, n.plbkQualityOver = function(t) {
			n.setPlaybackRateArrowPosition(t.target)
		}, n.plbkQualityOut = function() {
			n.setPlaybackRateArrowPosition(void 0)
		}, n.plbkQualityClick = function(o) {
			n.startAtPlaybackRate = o.id, n.disablePlaybackRateButtons(n.startAtPlaybackRate), n.hidePlaybackRateButtons(!0), n.dispatchEvent(t.CHANGE_PLAYBACK_RATES, {
				rate: n.playbackRatesSource_ar[o.id]
			})
		}, n.positionAndResizePlaybackRateButtons = function(e) {
			if (e) {
				var t = e.length;
				if (n.prevplaybackRatesQualityButtonsLength != t) {
					n.prevplaybackRatesQualityButtonsLength = t;
					for (var o = 5, s = 0, a = 0, d = 0, r; d < t; d++) r = n.playbackRateButtons_ar[d], 1 == e[d] ? r.updateText("normal") : r.updateText(e[d]), r.setFinalSize();
					setTimeout(function() {
						for (var e = 0; e < t; e++) r = n.playbackRateButtons_ar[e], e < t ? (0 != r.x && r.setX(0), r.w > s && (s = r.w), r.setY(o), o += r.h) : -3e3 != r.x && r.setX(-3e3);
						for (var e = 0; e < t; e++) r = n.playbackRateButtons_ar[e], r.dumy_do.w < s && (r.setWidth(s), r.dumy_do.setWidth(s));
						a = o + 5, n.playbackRatesPonter_do.setX(parseInt((s - n.playbackRatesPonter_do.w) / 2)), n.playbackRatesPonter_do.setY(a), n.playbackRatesButtonsBackground_do && (n.playbackRatesButtonsBackground_do.setWidth(s), n.playbackRatesButtonsBackground_do.setHeight(a)), n.playbackRatesButtonsHolder_do.setWidth(s), n.playbackRatesButtonsHolder_do.setHeight(a)
					}, 60)
				}
			}
		}, n.disablePlaybackRateButtons = function(e) {
			if (null != e)
				for (var t = 0, o; t < n.totalPlaybackRateButtons; t++) o = n.playbackRateButtons_ar[t], t == e ? (FWDAnimation.killTweensOf(n.playbackRateQualityArrow_do), n.playbackRateQualityArrow_do.setY(o.y + parseInt((o.h - n.playbackRateQualityArrow_do.h) / 2) - 1), o.disable(), n.playbackRateDisabledButton_do = o) : o.enable()
		}, n.setPlaybackRateArrowPosition = function(e) {
			var t = 0;
			t = e ? e.y + parseInt((e.h - n.playbackRateQualityArrow_do.h) / 2 - 1) : n.playbackRateDisabledButton_do.y + parseInt((n.playbackRateDisabledButton_do.h - n.playbackRateQualityArrow_do.h) / 2 - 1), FWDAnimation.killTweensOf(n.playbackRateQualityArrow_do), FWDAnimation.to(n.playbackRateQualityArrow_do, .6, {
				y: t,
				delay: .1,
				ease: Expo.easeInOut
			})
		}, n.showPlaybackRateButtons = function(e) {
			if (!n.arePlaybackRateButtonsShowed_bl) {
				n.hideQualityButtons(), n.arePlaybackRateButtonsShowed_bl = !0;
				var t = parseInt(n.playbackRateButton_do.x + parseInt(n.playbackRateButton_do.w - n.playbackRatesButtonsHolder_do.w) / 2),
					o = parseInt(s.tempVidStageHeight - n.sH - n.playbackRatesButtonsHolder_do.h - 6);
				n.hasPointerEvent_bl ? window.addEventListener("pointerdown", n.hideplaybackRatesButtonsHandler) : (!n.isMbl && window.addEventListener("mousedown", n.hideplaybackRatesButtonsHandler), window.addEventListener("touchstart", n.hideplaybackRatesButtonsHandler)), n.playbackRatesButtonsHolder_do.setX(t), e ? FWDAnimation.to(n.playbackRatesButtonsHolder_do, .6, {
					y: o,
					ease: Expo.easeInOut
				}) : (FWDAnimation.killTweensOf(n.playbackRatesButtonsHolder_do), n.playbackRatesButtonsHolder_do.setY(o))
			}
		}, n.hidePlaybackRateButtons = function(e) {
			n.arePlaybackRateButtonsShowed_bl && n.playbackRatesButtonsHolder_do && (n.arePlaybackRateButtonsShowed_bl = !1, n.showMainScrubberOnTop(), e ? FWDAnimation.to(n.playbackRatesButtonsHolder_do, .6, {
				y: s.sH,
				ease: Expo.easeInOut
			}) : (FWDAnimation.killTweensOf(n.playbackRatesButtonsHolder_do), n.playbackRatesButtonsHolder_do.setY(s.sH)), n.hasPointerEvent_bl ? window.removeEventListener("pointerdown", n.hideplaybackRatesButtonsHandler) : (!n.isMbl && window.removeEventListener("mousedown", n.hideplaybackRatesButtonsHandler), window.removeEventListener("touchstart", n.hideplaybackRatesButtonsHandler)))
		}, n.hideplaybackRatesButtonsHandler = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			FWDUVPUtils.hitTest(n.playbackRateButton_do.screen, e.screenX, e.screenY) || FWDUVPUtils.hitTest(n.playbackRatesButtonsHolder_do.screen, e.screenX, e.screenY) || n.hidePlaybackRateButtons(!0)
		}, n.setIsLive = function(e) {
			n.isLive = e, e ? !n.mainScrubber_do.contains(n.live_do) && (n.mainScrubber_do.setAlpha(.2), n.mainHld.addChild(n.live_do), setTimeout(function() {
				n.live_do.setX(4), n.live_do.setY(-n.live_do.getHeight() - 4)
			}, 100), n.disableMainScrubber()) : n.mainHld.contains(n.live_do) && (n.mainHld.removeChild(n.live_do), n.mainScrubber_do.setAlpha(1), n.enableMainScrubber())
		}, n.setupMainScrubber = function() {
			n.mainScrubber_do = new FWDUVPDisplayObject("div"), n.mainScrubber_do.screen.className = "fwduvp-main-scrubber", n.mainScrubber_do.setY(parseInt((n.sH - n.mainScrbH) / 2)), n.mainScrubber_do.setHeight(n.mainScrbH), n.mainScrubberBkLeft_do = new FWDUVPDisplayObject("img"), n.mainScrubberBkLeft_do.setScreen(n.mainScrubberBkLeft_img);
			var e = new Image;
			e.src = o.mainScrubberBkRightPath_str, n.mainScrubberBkRight_do = new FWDUVPDisplayObject("img"), n.mainScrubberBkRight_do.setScreen(e), n.mainScrubberBkRight_do.setWidth(n.mainScrubberBkLeft_do.w), n.mainScrubberBkRight_do.setHeight(n.mainScrubberBkLeft_do.h);
			var t = new Image;
			t.src = n.mainScrubberBkMiddlePath_str, n.mainScrubberBkMiddle_do = new FWDUVPDisplayObject("div"), n.mainScrubberBkMiddle_do.getStyle().background = "url('" + n.mainScrubberBkMiddlePath_str + "') repeat-x", n.mainScrubberBkMiddle_do.setHeight(n.mainScrbH), n.mainScrubberBkMiddle_do.setX(n.scrbsBkLARW), n.mainProgress_do = new FWDUVPDisplayObject("div"), n.mainProgress_do.setHeight(n.mainScrbH), n.progressLeft_do = new FWDUVPDisplayObject("img"), n.progressLeft_do.setScreen(n.progress), t = new Image, t.src = n.progressMiddlePath_str, n.progressMiddle_do = new FWDUVPDisplayObject("div"), n.progressMiddle_do.getStyle().background = "url('" + n.progressMiddlePath_str + "') repeat-x", n.progressMiddle_do.setHeight(n.mainScrbH), n.progressMiddle_do.setX(n.mainScrbDrgLW), n.mainScrubberDrag_do = new FWDUVPDisplayObject("div"), n.mainScrubberDrag_do.setHeight(n.mainScrbH), n.useHEX ? (n.mainScrubberDragLeft_do = new FWDUVPDisplayObject("div"), n.mainScrubberDragLeft_do.setWidth(n.mainScrubberDragLeft_img.width), n.mainScrubberDragLeft_do.setHeight(n.mainScrubberDragLeft_img.height), n.mainScrubberDragLeft_canvas = FWDUVPUtils.getCanvasWithModifiedColor(n.mainScrubberDragLeft_img, n.nBC).canvas, n.mainScrubberDragLeft_do.screen.appendChild(n.mainScrubberDragLeft_canvas)) : (n.mainScrubberDragLeft_do = new FWDUVPDisplayObject("img"), n.mainScrubberDragLeft_do.setScreen(n.mainScrubberDragLeft_img)), n.mainScrubberMiddleImage = new Image, n.mainScrubberMiddleImage.src = n.mainScrubberDragMiddlePath_str, n.volumeScrubberDragMiddle_do = new FWDUVPDisplayObject("div"), n.useHEX ? (n.mainScrubberDragMiddle_do = new FWDUVPDisplayObject("div"), n.mainScrubberMiddleImage.onload = function() {
				var e = FWDUVPUtils.getCanvasWithModifiedColor(n.mainScrubberMiddleImage, n.nBC, !0);
				n.mainSCrubberMiddleCanvas = e.canvas, n.mainSCrubberDragMiddleImageBackground = e.image, n.mainScrubberDragMiddle_do.getStyle().background = "url('" + n.mainSCrubberDragMiddleImageBackground.src + "') repeat-x"
			}) : (n.mainScrubberDragMiddle_do = new FWDUVPDisplayObject("div"), n.mainScrubberDragMiddle_do.getStyle().background = "url('" + n.mainScrubberDragMiddlePath_str + "') repeat-x"), n.mainScrubberDragMiddle_do.setHeight(n.mainScrbH), n.mainScrubberDragMiddle_do.setX(n.mainScrbDrgLW), n.mainScrubberBarLine_do = new FWDUVPDisplayObject("img"), n.mainScrubberBarLine_do.setScreen(n.mainScrubberLine_img), n.mainScrubberBarLine_do.setAlpha(0), n.mainScrubberBarLine_do.hasTransform3d_bl = !1, n.mainScrubberBarLine_do.hasTransform2d_bl = !1, n.buttons_ar.push(n.mainScrubber_do), n.live_do = new FWDUVPDisplayObject("div"), n.live_do.hasTransform3d_bl = !1, n.live_do.hasTransform2d_bl = !1, n.live_do.setBackfaceVisibility(), n.live_do.getStyle().fontFamily = "Arial", n.live_do.getStyle().fontSize = "12px", n.live_do.getStyle().whiteSpace = "nowrap", n.live_do.getStyle().textAlign = "center", n.live_do.getStyle().padding = "4px", n.live_do.getStyle().paddingLeft = "6px", n.live_do.getStyle().paddingRIght = "6px", n.live_do.getStyle().color = "#FFFFFF", n.live_do.getStyle().fontSmoothing = "antialiased", n.live_do.getStyle().webkitFontSmoothing = "antialiased", n.live_do.getStyle().textRendering = "optimizeLegibility", n.live_do.getStyle().backgroundColor = "rgba(255,0,0,0.8)", n.live_do.setInnerHTML("&#x25C9; LIVE"), n.mainScrubber_do.addChild(n.mainScrubberBkLeft_do), n.mainScrubber_do.addChild(n.mainScrubberBkMiddle_do), n.mainScrubber_do.addChild(n.mainScrubberBkRight_do), n.mainScrubber_do.addChild(n.mainScrubberBarLine_do), n.mainScrubberDrag_do.addChild(n.mainScrubberDragLeft_do), n.mainScrubberDrag_do.addChild(n.mainScrubberDragMiddle_do), n.mainProgress_do.addChild(n.progressLeft_do), n.mainProgress_do.addChild(n.progressMiddle_do), n.mainScrubber_do.addChild(n.mainProgress_do), n.mainScrubber_do.addChild(n.mainScrubberDrag_do), n.mainScrubber_do.addChild(n.mainScrubberBarLine_do), n.mainHld.addChild(n.mainScrubber_do), n.disableVideoScrubber_bl || (n.hasPointerEvent_bl ? (n.mainScrubber_do.screen.addEventListener("pointerover", n.mainScrubberOnOverHandler), n.mainScrubber_do.screen.addEventListener("pointerout", n.mainScrubberOnOutHandler), n.mainScrubber_do.screen.addEventListener("pointerdown", n.mainScrubberOnDownHandler)) : n.screen.addEventListener && (!n.isMbl && (n.mainScrubber_do.screen.addEventListener("mouseover", n.mainScrubberOnOverHandler), n.mainScrubber_do.screen.addEventListener("mousemove", n.updateTooltipOnMove), n.mainScrubber_do.screen.addEventListener("mouseout", n.mainScrubberOnOutHandler), n.mainScrubber_do.screen.addEventListener("mousedown", n.mainScrubberOnDownHandler)), n.mainScrubber_do.screen.addEventListener("touchstart", n.mainScrubberOnDownHandler))), n.disableMainScrubber(), n.updateMainScrubber(0), FWDUVPScrubberToolip.setPrototype(), n.ttm = new FWDUVPScrubberToolip(n.mainScrubber_do, o.scrubbersToolTipLabelBackgroundColor, o.scrubbersToolTipLabelFontColor), n.addChild(n.ttm)
		}, n.updateToolTip = function(e, t) {
			o.showMainScrubberToolTipLabel_bl && (s.isCasting ? n.ttm.setLabel(FWDUVPUtils.formatTime(Math.round(s.cc.getDuration() * t))) : n.ttm.setLabel(FWDUVPUtils.formatTime(Math.round(s.totalDuration * t))), n.ttm.setX(Math.round(n.mainScrubber_do.x + e - n.ttm.getWidth() / 2) + 1), n.ttm.setY(n.mainScrubber_do.y - n.ttm.h - 2))
		}, n.updateThumbnailsPreview = function(e, t) {
			if (n.thumbnailsPreview_do && s.hasThumbnailsPreview) {
				var o = 0,
					i = Math.round(n.mainScrubber_do.x + e - n.thumbnailsPreview_do.getWidth() / 2) + 1;
				1 > i ? (o = i, i = 1) : i > n.sW - n.thumbnailsPreview_do.w - 1 && (o = i - n.sW + n.thumbnailsPreview_do.w, i = n.sW - n.thumbnailsPreview_do.w - 1), n.thumbnailsPreview_do.setLabel(FWDUVPUtils.formatTime(Math.round(s.totalDuration * t)), Math.round(s.totalDuration * t), o), n.thumbnailsPreview_do.setX(i), n.thumbnailsPreview_do.setY(n.mainScrubber_do.y - n.thumbnailsPreview_do.h - 2)
			}
		}, n.updateTooltipOnMove = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t),
				o = e.screenX - n.mainScrubber_do.getGlobalX();
			0 > o ? o = 0 : o > n.maiScrbW - n.scrubbersOffsetWidth && (o = n.maiScrbW - n.scrubbersOffsetWidth);
			var s = o / n.maiScrbW;
			n.updateToolTip(o, s), n.updateThumbnailsPreview(o, s)
		}, n.mainScrubberWMouseMove = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			n.vcX = e.screenX, n.vcY = e.screenY, FWDUVPUtils.hitTest(n.mainScrubber_do.screen, n.vcX, n.vcY) || n.isMainScrubberScrubbing_bl || (window.removeEventListener("mousemove", n.mainScrubberWMouseMove), n.ttm.hide());
			var o = FWDUVPUtils.getViewportMouseCoordinates(t),
				s = o.screenX - n.mainScrubber_do.getGlobalX();
			0 > s ? s = 0 : s > n.maiScrbW - n.scrubbersOffsetWidth && (s = n.maiScrbW - n.scrubbersOffsetWidth);
			var i = s / n.maiScrbW;
			n.updateThumbnailsPreview(s, i)
		}, n.mainScrubberOnOverHandler = function(t) {
			if (!n.isMainScrubberDisabled_bl) {
				o.showMainScrubberToolTipLabel_bl && !s.hasThumbnailsPreview && n.ttm.show(), n.thumbnailsPreview_do && s.hasThumbnailsPreview && n.thumbnailsPreview_do.show(), !n.isMbl && (n.ttm || n.thumbnailsPreview_do) && (window.removeEventListener("mousemove", n.mainScrubberWMouseMove), window.addEventListener("mousemove", n.mainScrubberWMouseMove));
				var e = FWDUVPUtils.getViewportMouseCoordinates(t),
					i = e.screenX - n.mainScrubber_do.getGlobalX();
				0 > i ? i = 0 : i > n.maiScrbW - n.scrubbersOffsetWidth && (i = n.maiScrbW - n.scrubbersOffsetWidth);
				var a = i / n.maiScrbW;
				n.updateToolTip(i, a), n.updateThumbnailsPreview(i, a)
			}
		}, n.mainScrubberOnOutHandler = function() {
			n.isMainScrubberScrubbing_bl || (n.ttm && n.ttm.hide(), n.thumbnailsPreview_do && s.hasThumbnailsPreview && n.thumbnailsPreview_do.hide())
		}, n.mainScrubberOnDownHandler = function(i) {
			if (!(n.isMainScrubberDisabled_bl || 2 == i.button)) {
				s.showDisable(), i.preventDefault && i.preventDefault(), n.isMainScrubberScrubbing_bl = !0;
				var e = FWDUVPUtils.getViewportMouseCoordinates(i),
					a = e.screenX - n.mainScrubber_do.getGlobalX();
				0 > a ? a = 0 : a > n.maiScrbW - n.scrubbersOffsetWidth && (a = n.maiScrbW - n.scrubbersOffsetWidth);
				var d = a / n.maiScrbW;
				o.showMainScrubberToolTipLabel_bl && !s.hasThumbnailsPreview && n.ttm.show(), n.thumbnailsPreview_do && s.hasThumbnailsPreview && n.thumbnailsPreview_do.show(), n.updateToolTip(a, d), n.updateMainScrubber(d), n.updateThumbnailsPreview(a, d), n.dispatchEvent(t.START_TO_SCRUB), n.dispatchEvent(t.SCRUB, {
					percent: d
				}), n.hasPointerEvent_bl ? (window.addEventListener("pointermove", n.mainScrubberMoveHandler), window.addEventListener("pointerup", n.mainScrubberEndHandler)) : (window.addEventListener("mousemove", n.mainScrubberMoveHandler), window.addEventListener("mouseup", n.mainScrubberEndHandler), window.addEventListener("touchmove", n.mainScrubberMoveHandler, {
					passive: !1
				}), window.addEventListener("touchend", n.mainScrubberEndHandler))
			}
		}, n.mainScrubberMoveHandler = function(o) {
			o.preventDefault && o.preventDefault();
			var e = FWDUVPUtils.getViewportMouseCoordinates(o),
				s = e.screenX - n.mainScrubber_do.getGlobalX();
			0 > s ? s = 0 : s > n.maiScrbW - n.scrubbersOffsetWidth && (s = n.maiScrbW - n.scrubbersOffsetWidth);
			var i = s / n.maiScrbW;
			n.updateToolTip(s, i), n.updateMainScrubber(i), n.updateThumbnailsPreview(s, i), n.dispatchEvent(t.SCRUB, {
				percent: i
			})
		}, n.mainScrubberEndHandler = function(o) {
			if (s.hideDisable(), o) {
				var e = FWDUVPUtils.getViewportMouseCoordinates(o);
				FWDUVPUtils.hitTest(n.mainScrubber_do.screen, e.screenX, e.screenY) || (n.ttm && n.ttm.hide(), n.thumbnailsPreview_do && s.hasThumbnailsPreview && n.thumbnailsPreview_do.hide())
			}
			n.isMainScrubberScrubbing_bl = !1, n.dispatchEvent(t.STOP_TO_SCRUB), n.hasPointerEvent_bl ? (window.removeEventListener("pointermove", n.mainScrubberMoveHandler), window.removeEventListener("pointerup", n.mainScrubberEndHandler)) : (window.removeEventListener("mousemove", n.mainScrubberMoveHandler), window.removeEventListener("mouseup", n.mainScrubberEndHandler), window.removeEventListener("touchmove", n.mainScrubberMoveHandler), window.removeEventListener("touchend", n.mainScrubberEndHandler))
		}, n.disableMainScrubber = function() {
			n.mainScrubber_do && (n.isMainScrubberDisabled_bl = !0, n.mainScrubber_do.setButtonMode(!1), n.mainScrubberEndHandler(), n.mainScrubberOnOutHandler(), n.updateMainScrubber(0), n.updatePreloaderBar(0))
		}, n.enableMainScrubber = function() {
			!n.mainScrubber_do || n.isLive || (n.isMainScrubberDisabled_bl = !1, !n.disableVideoScrubber_bl && n.mainScrubber_do.setButtonMode(!0))
		}, n.updateMainScrubber = function(e) {
			if (n.mainScrubber_do) {
				n.isLive && (e = 0);
				var t = parseInt(e * n.maiScrbW);
				isNaN(t) || null == t || (0 > t && (t = 0), n.percentPlayed = e, !FWDUVPlayer.hasHTML5Video && t >= n.mainProgress_do.w && (t = n.mainProgress_do.w), 1 > t && n.isMainScrubberLineVisible_bl ? (n.isMainScrubberLineVisible_bl = !1, FWDAnimation.to(n.mainScrubberBarLine_do, .5, {
					alpha: 0
				})) : 1 < t && !n.isMainScrubberLineVisible_bl && (n.isMainScrubberLineVisible_bl = !0, FWDAnimation.to(n.mainScrubberBarLine_do, .5, {
					alpha: 1
				})), n.mainScrubberDrag_do.setWidth(t), t > n.maiScrbW - n.scrubbersOffsetWidth && (t = n.maiScrbW - n.scrubbersOffsetWidth), 0 > t && (t = 0), FWDAnimation.to(n.mainScrubberBarLine_do, .8, {
					x: t + 1,
					ease: Expo.easeOut
				}))
			}
		}, n.updatePreloaderBar = function(e) {
			if (n.mainProgress_do) {
				n.isLive && (e = 0), n.percentLoaded = e;
				var t = parseInt(n.percentLoaded * n.maiScrbW);
				isNaN(t) || null == t || (0 > t && (t = 0), .98 <= n.percentLoaded ? (n.percentLoaded = 1, n.mainProgress_do.setY(-30)) : 0 != n.mainProgress_do.y && 1 != n.percentLoaded && n.mainProgress_do.setY(0), t > n.maiScrbW - n.scrubbersOffsetWidth && (t = n.maiScrbW - n.scrubbersOffsetWidth), 0 > t && (t = 0), n.mainProgress_do.setWidth(t))
			}
		}, n.setupPrevButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.prevButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-FF-left'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.prevButton_do = new FWDUVPSimpleButton(o.prev2N_img, o.prevSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), n.prevButton_do.screen.className = "fwduvp-prev-button", n.prevButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, n.prevButtonShowTooltipHandler), n.prevButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.prevButtonOnMouseUpHandler), n.prevButton_do.setY(parseInt((n.sH - n.prevButton_do.h) / 2));
			var e = setInterval(function() {
				0 < n.prevButton_do.buttonHeight && (clearInterval(e), n.prevButton_do.setY(parseInt((n.sH - n.prevButton_do.buttonHeight) / 2)))
			}, 50);
			n.buttons_ar.push(n.prevButton_do), n.mainHld.addChild(n.prevButton_do)
		}, n.prevButtonShowTooltipHandler = function(t) {
			n.showToolTip(n.prevButton_do, n.prevButtonToolTip_do, t.e)
		}, n.prevButtonOnMouseUpHandler = function() {
			n.dispatchEvent(FWDUVPPlaylist.PLAY_PREV_VIDEO)
		}, n.setupNextButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.nextButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-FF-right'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.nextButton_do = new FWDUVPSimpleButton(o.next2N_img, o.nextSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), n.nextButton_do.screen.className = "fwduvp-next-button", n.nextButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, n.nextButtonShowTooltipHandler), n.nextButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.nextButtonOnMouseUpHandler), n.nextButton_do.setY(parseInt((n.sH - n.nextButton_do.h) / 2));
			var e = setInterval(function() {
				0 < n.nextButton_do.buttonHeight && (clearInterval(e), n.nextButton_do.setY(parseInt((n.sH - n.nextButton_do.buttonHeight) / 2)))
			}, 50);
			n.buttons_ar.push(n.nextButton_do), n.mainHld.addChild(n.nextButton_do)
		}, n.nextButtonShowTooltipHandler = function(t) {
			n.showToolTip(n.nextButton_do, n.nextButtonToolTip_do, t.e)
		}, n.nextButtonOnMouseUpHandler = function() {
			n.dispatchEvent(FWDUVPPlaylist.PLAY_NEXT_VIDEO)
		}, n.setupPlayPauseButton = function() {
			n.useVectorIcons_bl ? (FWDUVPComplexButton.setPrototype(), n.playPauseButton_do = new FWDUVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-play'></span>", "<span class='fwdicon fwdicon-pause'></span>", "UVPMainButtonsNormalState play", "UVPMainButtonsSelectedState play")) : (FWDUVPComplexButton.setPrototype(), n.playPauseButton_do = new FWDUVPComplexButton(n.playN_img, o.playSPath_str, n.pauseN_img, o.pauseSPath_str, !0, n.useHEX, n.nBC, n.sBC)), n.buttons_ar.push(n.playPauseButton_do), n.playPauseButton_do.setY(parseInt((n.sH - n.playPauseButton_do.buttonHeight) / 2));
			var e = setInterval(function() {
				0 < n.playPauseButton_do.buttonHeight && (clearInterval(e), n.playPauseButton_do.setY(parseInt((n.sH - n.playPauseButton_do.buttonHeight) / 2)))
			}, 50);
			n.playPauseButton_do.screen.className = "fwduvp-play-button", n.playPauseButton_do.addListener(FWDUVPComplexButton.SHOW_TOOLTIP, n.playButtonShowTooltipHandler), n.playPauseButton_do.addListener(FWDUVPComplexButton.MOUSE_UP, n.playButtonMouseUpHandler), n.mainHld.addChild(n.playPauseButton_do)
		}, n.playButtonShowTooltipHandler = function(t) {
			n.showToolTip(n.playPauseButton_do, n.playPauseToolTip_do, t.e)
		}, n.showPlayButton = function() {
			n.playPauseButton_do && n.playPauseButton_do.setButtonState(1)
		}, n.showPauseButton = function() {
			n.playPauseButton_do && n.playPauseButton_do.setButtonState(0)
		}, n.playButtonMouseUpHandler = function() {
			0 == n.playPauseButton_do.currentState ? n.dispatchEvent(t.PAUSE) : n.dispatchEvent(t.PLAY)
		}, n.disablePlayButton = function() {
			n.playPauseButton_do.disable(), n.playPauseButton_do.setNormalState(), n.showPlayButton()
		}, n.enablePlayButton = function() {
			n.playPauseButton_do.enable()
		}, n.setupCategoriesButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.categoriesButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-playlist'></span>", void 0, "UVPMainButtonsNormalState cats", "UVPMainButtonsSelectedState cats")) : (FWDUVPSimpleButton.setPrototype(), n.categoriesButton_do = new FWDUVPSimpleButton(n.categoriesN_img, o.categoriesSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), n.categoriesButton_do.screen.className = "fwduvp-categories-button", n.categoriesButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, n.categoriesButtonShowTooltipHandler), n.categoriesButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.categoriesButtonOnMouseUpHandler), n.categoriesButton_do.setY(parseInt((n.sH - n.categoriesButton_do.h) / 2));
			var e = setInterval(function() {
				0 < n.categoriesButton_do.buttonHeight && (clearInterval(e), n.categoriesButton_do.setY(parseInt((n.sH - n.categoriesButton_do.buttonHeight) / 2)))
			}, 50);
			n.buttons_ar.push(n.categoriesButton_do), n.mainHld.addChild(n.categoriesButton_do)
		}, n.categoriesButtonShowTooltipHandler = function(t) {
			n.showToolTip(n.categoriesButton_do, n.playlistsButtonToolTip_do, t.e)
		}, n.categoriesButtonOnMouseUpHandler = function() {
			n.dispatchEvent(t.SHOW_CATEGORIES)
		}, n.setCategoriesButtonState = function(e) {
			n.categoriesButton_do && ("selected" == e ? n.categoriesButton_do.setSelected() : "unselected" == e && n.categoriesButton_do.setUnselected())
		}, n.setupPlaylistButton = function() {
			n.useVectorIcons_bl ? (FWDUVPComplexButton.setPrototype(), n.playlistButton_do = new FWDUVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-playlist-sidebar'></span>", "<span class='fwdicon fwdicon-playlist-close-sidebar'></span>", "UVPMainButtonsNormalState playlist", "UVPMainButtonsSelectedState playlist")) : (FWDUVPComplexButton.setPrototype(), n.playlistButton_do = new FWDUVPComplexButton(n.hidePlaylistN_img, o.hidePlaylistSPath_str, n.showPlaylistN_img, o.showPlaylistSPath_str, !0, n.useHEX, n.nBC, n.sBC)), n.buttons_ar.push(n.playlistButton_do), n.playlistButton_do.setY(parseInt((n.sH - n.playlistButton_do.buttonHeight) / 2));
			var e = setInterval(function() {
				0 < n.playlistButton_do.buttonHeight && (clearInterval(e), n.playlistButton_do.setY(parseInt((n.sH - n.playlistButton_do.buttonHeight) / 2)))
			}, 50);
			n.playlistButton_do.screen.className = "fwduvp-playlist-button", n.playlistButton_do.addListener(FWDUVPComplexButton.SHOW_TOOLTIP, n.playlistButtonShowToolTipHandler), n.playlistButton_do.addListener(FWDUVPComplexButton.MOUSE_UP, n.playlistButtonMouseUpHandler), n.showPlaylistByDefault_bl || n.playlistButton_do.setButtonState(0), n.mainHld.addChild(n.playlistButton_do)
		}, n.playlistButtonShowToolTipHandler = function(t) {
			n.showToolTip(n.playlistButton_do, n.playlistButtonToolTip_do, t.e)
		}, n.showShowPlaylistButton = function() {
			n.playlistButton_do && n.playlistButton_do.setButtonState(1)
		}, n.showHidePlaylistButton = function() {
			n.playlistButton_do && n.playlistButton_do.setButtonState(0)
		}, n.playlistButtonMouseUpHandler = function() {
			1 == n.playlistButton_do.currentState ? n.dispatchEvent(t.SHOW_PLAYLIST) : n.dispatchEvent(t.HIDE_PLAYLIST), n.playlistButton_do.setNormalState(!0), n.playlistButtonToolTip_do && n.playlistButtonToolTip_do.hide()
		}, n.disablePlaylistButton = function() {
			n.playlistButton_do && (n.playlistButton_do.disable(), n.playlistButton_do.setAlpha(.4))
		}, n.enablePlaylistButton = function() {
			n.playlistButton_do && (n.playlistButton_do.enable(), n.playlistButton_do.setAlpha(1))
		}, n.setupEmbedButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.embedButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-embed'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.embedButton_do = new FWDUVPSimpleButton(n.embedN_img, o.embedPathS_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), n.embedButton_do.screen.className = "fwduvp-embed-button", n.embedButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, n.embedButtonShowToolTipHandler), n.embedButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.embedButtonOnMouseUpHandler), n.embedButton_do.setY(parseInt((n.sH - n.embedButton_do.h) / 2));
			var e = setInterval(function() {
				0 < n.embedButton_do.buttonHeight && (clearInterval(e), n.embedButton_do.setY(parseInt((n.sH - n.embedButton_do.buttonHeight) / 2)))
			}, 50);
			n.buttons_ar.push(n.embedButton_do), n.mainHld.addChild(n.embedButton_do)
		}, n.embedButtonShowToolTipHandler = function(t) {
			n.showToolTip(n.embedButton_do, n.embedButtonToolTip_do, t.e)
		}, n.embedButtonOnMouseUpHandler = function() {
			n.dispatchEvent(t.SHOW_EMBED_WINDOW), n.embedButtonToolTip_do && n.embedButtonToolTip_do.hide()
		}, n.setupYtbButtons = function() {
			if (n.ytbButtonsHolder_do = new FWDUVPDisplayObject("div"), n.ytbButtonsHolder_do.setOverflow("visible"), n.repeatBackground_bl) n.ytbButtonsHolder_do.getStyle().background = "url('" + n.controllerBkPath_str + "')";
			else {
				n.ytbButtonBackground_do = new FWDUVPDisplayObject("img");
				var e = new Image;
				e.src = n.controllerBkPath_str, n.ytbButtonBackground_do.setScreen(e), n.ytbButtonsHolder_do.addChild(n.ytbButtonBackground_do)
			}
			n.ytbButtonsHolder_do.setX(300), n.ytbButtonsHolder_do.setY(-300), s.videoHolder_do.addChild(n.ytbButtonsHolder_do, 0);
			var e = new Image;
			e.src = n.ytbQualityButtonPointerPath_str, n.pointer_do = new FWDUVPDisplayObject("img"), n.pointer_do.setScreen(e), n.pointer_do.setWidth(n.pointerWidth), n.pointer_do.setHeight(n.pointerHeight), n.ytbButtonsHolder_do.addChild(n.pointer_do);
			var e = new Image;
			e.src = n.youtubeQualityArrowPath_str, n.ytbQualityArrow_do = new FWDUVPDisplayObject("img"), n.ytbQualityArrow_do.setScreen(e), n.ytbQualityArrow_do.setX(7), n.ytbQualityArrow_do.setWidth(5), n.ytbQualityArrow_do.setHeight(7), n.ytbButtonsHolder_do.addChild(n.ytbQualityArrow_do);
			for (var t = 0, a; t < n.ttYtbBtns; t++) {
				FWDUVPYTBQButton.setPrototype();
				var a = new FWDUVPYTBQButton(n.ytbQuality_ar[t], n.youtubeQualityButtonNormalColor_str, n.youtubeQualityButtonSelectedColor_str, o.hdPath_str, t);
				a.addListener(FWDUVPYTBQButton.MOUSE_OVER, n.ytbQualityOver), a.addListener(FWDUVPYTBQButton.MOUSE_OUT, n.ytbQualityOut), a.addListener(FWDUVPYTBQButton.CLICK, n.ytbQualityClick), n.ytbButtons_ar[t] = a, n.ytbButtonsHolder_do.addChild(a)
			}
			n.hideQualityButtons(!1)
		}, n.ytbQualityOver = function(t) {
			n.setYtbQualityArrowPosition(t.target)
		}, n.ytbQualityOut = function() {
			n.setYtbQualityArrowPosition(void 0)
		}, n.ytbQualityClick = function(o) {
			n.hideQualityButtons(!0), n.dispatchEvent(t.CHANGE_YOUTUBE_QUALITY, {
				quality: o.target.label_str,
				id: o.id
			})
		}, n.positionAndResizeYtbQualityButtons = function(e) {
			if (e) {
				var t = e.length;
				if (n.prevYtbQualityButtonsLength != t) {
					n.prevYtbQualityButtonsLength = t;
					for (var o = 5, s = 0, a = 0, d = 0, r; d < t; d++) r = n.ytbButtons_ar[d], r && r.updateText(e[d]);
					setTimeout(function() {
						for (var e = 0; e < n.ttYtbBtns; e++) r = n.ytbButtons_ar[e], r.setFinalSize(), e < t ? (0 != r.x && r.setX(0), r.w > s && (s = r.w), r.setY(o), o += r.h) : -3e3 != r.x && r.setX(-3e3);
						for (var e = 0; e < n.ttYtbBtns; e++) r = n.ytbButtons_ar[e], r.dumy_do.w < s && (r.setWidth(s), r.dumy_do.setWidth(s));
						a = o + 5, n.pointer_do.setX(parseInt((s - n.pointer_do.w) / 2)), n.pointer_do.setY(a), n.ytbButtonBackground_do && (n.ytbButtonBackground_do.setWidth(s), n.ytbButtonBackground_do.setHeight(a)), n.ytbButtonsHolder_do.setWidth(s), n.ytbButtonsHolder_do.setHeight(a)
					}, 300)
				}
			}
		}, n.disableQualityButtons = function(e, t) {
			n.showHDIcon(e);
			for (var o = 0, s; o < n.ttYtbBtns; o++) s = n.ytbButtons_ar[o], s.label_str == e || s.id === t ? (FWDAnimation.killTweensOf(n.ytbQualityArrow_do), void 0 !== t && s.id === t && n.showHDIcon(n.ytbButtons_ar[t].label_str), 0 != s.y && (n.ytbQualityArrow_do.setY(s.y + Math.round((s.h - n.ytbQualityArrow_do.h) / 2)), n.ytbDisabledButton_do = s), s.disable()) : s.enable()
		}, n.showHDIcon = function(e) {
			"highres" == e || "hd720" == e || "hd1080" == e || "hd1440" == e || "hd2160" == e || "hd2880" == e ? n.ytbQualityButton_do.showDisabledState() : n.ytbQualityButton_do.hideDisabledState()
		}, n.setYtbQualityArrowPosition = function(e) {
			var t = 0;
			t = e ? e.y + parseInt((e.h - n.ytbQualityArrow_do.h) / 2) : n.ytbDisabledButton_do.y + parseInt((n.ytbDisabledButton_do.h - n.ytbQualityArrow_do.h) / 2), FWDAnimation.killTweensOf(n.ytbQualityArrow_do), FWDAnimation.to(n.ytbQualityArrow_do, .6, {
				y: t,
				delay: .1,
				ease: Expo.easeInOut
			})
		}, n.showQualityButtons = function(e) {
			if (!n.areYtbQualityButtonsShowed_bl && n.showYoutubeQualityButton_bl) {
				n.hideSubtitleButtons(), n.hideMainScrubberTop(), n.areYtbQualityButtonsShowed_bl = !0;
				var t = parseInt(n.ytbQualityButton_do.x + parseInt(n.ytbQualityButton_do.w - n.ytbButtonsHolder_do.w) / 2),
					o = parseInt(s.tempVidStageHeight - n.sH - n.ytbButtonsHolder_do.h - 6);
				window.hasPointerEvent_bl ? window.addEventListener("pointerdown", n.hideQualityButtonsHandler) : (!n.isMbl && window.addEventListener("mousedown", n.hideQualityButtonsHandler), window.addEventListener("touchstart", n.hideQualityButtonsHandler)), n.ytbButtonsHolder_do.setX(t), e ? FWDAnimation.to(n.ytbButtonsHolder_do, .6, {
					y: o,
					ease: Expo.easeInOut
				}) : (FWDAnimation.killTweensOf(n.ytbButtonsHolder_do), n.ytbButtonsHolder_do.setY(o))
			}
		}, n.hideQualityButtons = function(e) {
			n.areYtbQualityButtonsShowed_bl && n.showYoutubeQualityButton_bl && (n.hideSubtitleButtons(), n.areYtbQualityButtonsShowed_bl = !1, e ? FWDAnimation.to(n.ytbButtonsHolder_do, .6, {
				y: s.sH,
				ease: Expo.easeInOut
			}) : (FWDAnimation.killTweensOf(n.ytbButtonsHolder_do), n.ytbButtonsHolder_do.setY(s.sH)), window.hasPointerEvent_bl ? window.removeEventListener("pointerdown", n.hideQualityButtonsHandler) : (!n.isMbl && window.removeEventListener("mousedown", n.hideQualityButtonsHandler), window.removeEventListener("touchstart", n.hideQualityButtonsHandler)))
		}, n.subtitlesSource_ar = o.subtitles_ar, n.subtitleButtons_ar = [], n.totalSubttleButtons = 10, n.setupSubtitleButton = function() {
			n.useVectorIcons_bl ? (FWDUVPComplexButton.setPrototype(), n.subtitleButton_do = new FWDUVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-CC'></span>", "<span class='fwdicon fwdicon-CC-off'></span>", "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPComplexButton.setPrototype(), n.subtitleButton_do = new FWDUVPComplexButton(o.showSubtitleNPath_img, o.showSubtitleSPath_str, o.hideSubtitleNPath_img, o.hideSubtitleSPath_str, !0, n.useHEX, n.nBC, n.sBC));
			var e = setInterval(function() {
				0 < n.subtitleButton_do.buttonHeight && (clearInterval(e), n.subtitleButton_do.setY(parseInt((n.sH - n.subtitleButton_do.buttonHeight) / 2)))
			}, 50);
			n.subtitleButton_do.screen.className = "fwduvp-subtitle-button", n.buttons_ar.push(n.subtitleButton_do), n.subtitleButton_do.setY(parseInt((n.sH - n.subtitleButton_do.h) / 2)), n.subtitleButton_do.addListener(FWDUVPComplexButton.MOUSE_UP, n.subtitleButtonMouseUpHandler), n.mainHld.addChild(n.subtitleButton_do), n.setupSubtitleButtons(), -1 != location.protocol.indexOf("file:") && n.disableSubtitleButton(), s.subtitle_do.showSubtitileByDefault_bl && n.subtitleButton_do.setButtonState(0)
		}, n.subtitleButtonMouseUpHandler = function() {
			n.areSubtitleButtonsShowed_bl ? n.hideSubtitleButtons(!0) : n.showSubtitleButtons(!0)
		}, n.disableSubtitleButton = function() {
			n.subtitleButton_do && n.subtitleButton_do.disable()
		}, n.enableSubtitleButton = function() {
			n.subtitleButton_do && n.subtitleButton_do.enable()
		}, n.updateSubtitleButtons = function(e, t) {
			n.subtitleButton_do && (n.subtitlesSource_ar = e, n.positionAndResizeSubtitleButtons(e), setTimeout(function() {
				t = n.subtitlesSource_ar.length - 1 - t, n.disableSubtitleButtons(t)
			}, 65), n.prevSubtitleIndex = t)
		}, n.setupSubtitleButtons = function() {
			if (n.subtitlesButtonsHolder_do = new FWDUVPDisplayObject("div"), n.subtitlesButtonsHolder_do.setOverflow("visible"), n.repeatBackground_bl) n.subtitlesButtonsHolder_do.getStyle().background = "url('" + n.controllerBkPath_str + "')";
			else {
				n.subtitlesButtonsBackground_do = new FWDUVPDisplayObject("img");
				var e = new Image;
				e.src = n.controllerBkPath_str, n.subtitlesButtonsBackground_do.setScreen(e), n.subtitlesButtonsHolder_do.addChild(n.subtitlesButtonsBackground_do)
			}
			n.subtitlesButtonsHolder_do.setX(300), n.subtitlesButtonsHolder_do.setY(-300), s.videoHolder_do.addChild(n.subtitlesButtonsHolder_do, 0);
			var e = new Image;
			e.src = n.ytbQualityButtonPointerPath_str, n.subtitlesPonter_do = new FWDUVPDisplayObject("img"), n.subtitlesPonter_do.setScreen(e), n.subtitlesPonter_do.setWidth(n.pointerWidth), n.subtitlesPonter_do.setHeight(n.pointerHeight), n.subtitlesButtonsHolder_do.addChild(n.subtitlesPonter_do);
			var e = new Image;
			e.src = n.youtubeQualityArrowPath_str, n.subtitleQualityArrow_do = new FWDUVPDisplayObject("img"), n.subtitleQualityArrow_do.setScreen(e), n.subtitleQualityArrow_do.setX(7), n.subtitleQualityArrow_do.setWidth(5), n.subtitleQualityArrow_do.setHeight(7), n.subtitlesButtonsHolder_do.addChild(n.subtitleQualityArrow_do);
			for (var t = 0; t < n.totalSubttleButtons; t++) {
				FWDUVPYTBQButton.setPrototype();
				var a = new FWDUVPYTBQButton("no source", n.youtubeQualityButtonNormalColor_str, n.youtubeQualityButtonSelectedColor_str, o.hdPath_str, t);
				a.addListener(FWDUVPYTBQButton.MOUSE_OVER, n.sbtQualityOver), a.addListener(FWDUVPYTBQButton.MOUSE_OUT, n.sbtQualityOut), a.addListener(FWDUVPYTBQButton.CLICK, n.sbtQualityClick), n.subtitleButtons_ar[t] = a, n.subtitlesButtonsHolder_do.addChild(a)
			}
			n.hideSubtitleButtons(!1)
		}, n.sbtQualityOver = function(t) {
			n.setSubtitleArrowPosition(t.target)
		}, n.sbtQualityOut = function() {
			n.setSubtitleArrowPosition(void 0)
		}, n.sbtQualityClick = function(o) {
			n.startAtSubtitle = o.id, n.disableSubtitleButtons(n.startAtSubtitle), n.hideSubtitleButtons(!0), n.dispatchEvent(t.CHANGE_SUBTITLE, {
				id: n.subtitlesSource_ar.length - 1 - o.id
			})
		}, n.positionAndResizeSubtitleButtons = function(e) {
			if (e) {
				var t = e.length;
				if (n.prevSubtitlesQualityButtonsLength != t) {
					n.prevSubtitlesQualityButtonsLength = t;
					for (var o = 5, s = 0, a = 0, d = 0, r; d < t; d++) r = n.subtitleButtons_ar[d], r.updateText(e[d].label), r.setFinalSize();
					setTimeout(function() {
						for (var e = 0; e < n.totalSubttleButtons; e++) r = n.subtitleButtons_ar[e], e < t ? (0 != r.x && r.setX(0), r.w > s && (s = r.w), r.setY(o), o += r.h) : -3e3 != r.x && r.setX(-3e3);
						for (var e = 0; e < n.totalSubttleButtons; e++) r = n.subtitleButtons_ar[e], r.dumy_do.w < s && (r.setWidth(s), r.dumy_do.setWidth(s));
						a = o + 5, n.subtitlesPonter_do.setX(parseInt((s - n.subtitlesPonter_do.w) / 2)), n.subtitlesPonter_do.setY(a), n.subtitlesButtonsBackground_do && (n.subtitlesButtonsBackground_do.setWidth(s), n.subtitlesButtonsBackground_do.setHeight(a)), n.subtitlesButtonsHolder_do.setWidth(s), n.subtitlesButtonsHolder_do.setHeight(a)
					}, 60)
				}
			}
		}, n.disableSubtitleButtons = function(e) {
			for (var t = 0, o; t < n.totalSubttleButtons; t++) o = n.subtitleButtons_ar[t], t == e ? (FWDAnimation.killTweensOf(n.subtitleQualityArrow_do), n.subtitleQualityArrow_do.setY(o.y + parseInt((o.h - n.subtitleQualityArrow_do.h) / 2) + 1), o.disable(), n.subtitleDisabledButton_do = o) : o.enable();
			0 == n.subtitlesSource_ar.length - 1 - e ? n.subtitleButton_do.setButtonState(0) : n.subtitleButton_do.setButtonState(1)
		}, n.setSubtitleArrowPosition = function(e) {
			var t = 0;
			t = e ? e.y + parseInt((e.h - n.subtitleQualityArrow_do.h) / 2) : n.subtitleDisabledButton_do.y + parseInt((n.subtitleDisabledButton_do.h - n.subtitleQualityArrow_do.h) / 2), FWDAnimation.killTweensOf(n.subtitleQualityArrow_do), FWDAnimation.to(n.subtitleQualityArrow_do, .6, {
				y: t,
				delay: .1,
				ease: Expo.easeInOut
			})
		}, n.showSubtitleButtons = function(e) {
			if (!n.areSubtitleButtonsShowed_bl) {
				n.hideQualityButtons(), n.hideMainScrubberTop(), n.areSubtitleButtonsShowed_bl = !0;
				var t = parseInt(n.subtitleButton_do.x + parseInt(n.subtitleButton_do.w - n.subtitlesButtonsHolder_do.w) / 2),
					o = parseInt(s.tempVidStageHeight - n.sH - n.subtitlesButtonsHolder_do.h - 6);
				n.hasPointerEvent_bl ? window.addEventListener("pointerdown", n.hideSubtitlesButtonsHandler) : (!n.isMbl && window.addEventListener("mousedown", n.hideSubtitlesButtonsHandler), window.addEventListener("touchstart", n.hideSubtitlesButtonsHandler)), n.subtitlesButtonsHolder_do.setX(t), e ? FWDAnimation.to(n.subtitlesButtonsHolder_do, .6, {
					y: o,
					ease: Expo.easeInOut
				}) : (FWDAnimation.killTweensOf(n.subtitlesButtonsHolder_do), n.subtitlesButtonsHolder_do.setY(o))
			}
		}, n.hideSubtitleButtons = function(e) {
			n.areSubtitleButtonsShowed_bl && n.subtitlesButtonsHolder_do && (n.areSubtitleButtonsShowed_bl = !1, e ? FWDAnimation.to(n.subtitlesButtonsHolder_do, .6, {
				y: s.sH,
				ease: Expo.easeInOut
			}) : (FWDAnimation.killTweensOf(n.subtitlesButtonsHolder_do), n.subtitlesButtonsHolder_do.setY(s.sH)), n.hasPointerEvent_bl ? window.removeEventListener("pointerdown", n.hideSubtitlesButtonsHandler) : (!n.isMbl && window.removeEventListener("mousedown", n.hideSubtitlesButtonsHandler), window.removeEventListener("touchstart", n.hideSubtitlesButtonsHandler)), n.showMainScrubberOnTop())
		}, n.hideSubtitlesButtonsHandler = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			FWDUVPUtils.hitTest(n.subtitleButton_do.screen, e.screenX, e.screenY) || FWDUVPUtils.hitTest(n.subtitlesButtonsHolder_do.screen, e.screenX, e.screenY) || n.hideSubtitleButtons(!0)
		}, n.setupYoutubeQualityButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.ytbQualityButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-settings'></span>", o.hdIcn, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.ytbQualityButton_do = new FWDUVPSimpleButton(n.ytbQualityN_img, o.ytbQualitySPath_str, o.ytbQualityDPath_str, !0, n.useHEX, n.nBC, n.sBC)), n.ytbQualityButton_do.screen.className = "fwduvp-quality-button", n.ytbQualityButton_do.setX(-300), n.ytbQualityButton_do.setY(parseInt((n.sH - n.ytbQualityButton_do.h) / 2));
			var e = setInterval(function() {
				0 < n.ytbQualityButton_do.buttonHeight && (clearInterval(e), n.ytbQualityButton_do.setY(parseInt((n.sH - n.ytbQualityButton_do.buttonHeight) / 2)))
			}, 50);
			n.ytbQualityButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.ytbQualityMouseUpHandler), n.mainHld.addChild(n.ytbQualityButton_do)
		}, n.ytbQualityMouseUpHandler = function() {
			n.areYtbQualityButtonsShowed_bl ? (n.hideQualityButtons(!0), n.isMainScrubberOnTop_bl && (n.mainScrubber_do.setX(0), FWDAnimation.to(n.mainScrubber_do, .6, {
				alpha: 1
			}))) : n.showQualityButtons(!0)
		}, n.hideQualityButtonsHandler = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			FWDUVPUtils.hitTest(n.ytbQualityButton_do.screen, e.screenX, e.screenY) || FWDUVPUtils.hitTest(n.ytbButtonsHolder_do.screen, e.screenX, e.screenY) || (n.hideQualityButtons(!0), n.showMainScrubberOnTop())
		}, n.addYtbQualityButton = function() {
			if (!n.hasYtbButton_bl && n.showYoutubeQualityButton_bl) {
				n.hasYtbButton_bl = !0;
				var e;
				n.subtitleButton_do && -1 != n.getButtonIndex(n.subtitleButton_do) ? (e = n.getButtonIndex(n.subtitleButton_do), n.buttons_ar.splice(e, 0, n.ytbQualityButton_do)) : n.playbackRateButton_do && -1 != n.getButtonIndex(n.playbackRateButton_do) ? (e = n.getButtonIndex(n.playbackRateButton_do), n.buttons_ar.splice(e, 0, n.ytbQualityButton_do)) : n.atbButton_do && -1 != n.getButtonIndex(n.atbButton_do) ? (e = n.getButtonIndex(n.atbButton_do), n.buttons_ar.splice(e, 0, n.ytbQualityButton_do)) : n.infoButton_do && -1 != n.getButtonIndex(n.infoButton_do) ? (e = n.getButtonIndex(n.infoButton_do), n.buttons_ar.splice(e, 0, n.ytbQualityButton_do)) : n.downloadButton_do && -1 != n.getButtonIndex(n.downloadButton_do) ? (e = n.getButtonIndex(n.ytbQualityButton_do), n.buttons_ar.splice(e, 0, n.ytbQualityButton_do)) : n.ccBtn_do && -1 != n.getButtonIndex(n.ccBtn_do) ? (e = n.getButtonIndex(n.ccBtn_do), n.buttons_ar.splice(e, 0, n.ytbQualityButton_do)) : n.vrButton_do ? (e = n.getButtonIndex(n.vrButton_do), n.buttons_ar.splice(e, 0, n.ytbQualityButton_do)) : n.fullScreenButton_do ? (e = n.getButtonIndex(n.fullScreenButton_do), n.buttons_ar.splice(e, 0, n.ytbQualityButton_do)) : n.buttons_ar.splice(n.buttons_ar.length, 0, n.ytbQualityButton_do), n.ytbQualityButton_do.disable(), n.ytbQualityButton_do.rotation = 0, n.ytbQualityButton_do.setRotation(n.ytbQualityButton_do.rotation), n.ytbQualityButton_do.hideDisabledState(), n.hideQualityButtons(!1), n.positionButtons()
			}
		}, n.removeYtbQualityButton = function() {
			n.hasYtbButton_bl && n.showYoutubeQualityButton_bl && (n.hasYtbButton_bl = !1, n.buttons_ar.splice(FWDUVPUtils.indexOfArray(n.buttons_ar, n.ytbQualityButton_do), 1), n.ytbQualityButton_do.setX(-300), n.ytbQualityButton_do.hideDisabledState(), n.hideQualityButtons(!1), n.positionButtons())
		}, n.updateQuality = function(e, t, o) {
			n.hasYtbButton_bl && n.showYoutubeQualityButton_bl && (n.positionAndResizeYtbQualityButtons(e), setTimeout(function() {
				n.disableQualityButtons(t, o)
			}, 300))
		}, n.setupInfoButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.infoButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-info'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.infoButton_do = new FWDUVPSimpleButton(n.infoN_img, o.infoSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), n.infoButton_do.screen.className = "fwduvp-ifon-button";
			var e = setInterval(function() {
				0 < n.infoButton_do.buttonHeight && (clearInterval(e), n.infoButton_do.setY(parseInt((n.sH - n.infoButton_do.buttonHeight) / 2)))
			}, 50);
			n.infoButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, n.infoButtonShowToolTipHandler), n.infoButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.infoButtonOnMouseUpHandler), n.infoButton_do.setX(-300), n.infoButton_do.setY(parseInt((n.sH - n.infoButton_do.h) / 2)), n.mainHld.addChild(n.infoButton_do)
		}, n.infoButtonShowToolTipHandler = function(t) {
			n.showToolTip(n.infoButton_do, n.infoButtonToolTip_do, t.e)
		}, n.infoButtonOnMouseUpHandler = function() {
			n.dispatchEvent(t.SHOW_INFO_WINDOW)
		}, n.enableQualtyButton = function() {
			n.ytbQualityButton_do && n.ytbQualityButton_do.enable()
		}, n.disableQualtyButton = function() {
			n.ytbQualityButton_do && n.ytbQualityButton_do.disable()
		}, n.setupDownloadButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.downloadButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-download'></span>", void 0, "UVPMainButtonsNormalState dw", "UVPMainButtonsSelectedState dw")) : (FWDUVPSimpleButton.setPrototype(), n.downloadButton_do = new FWDUVPSimpleButton(n.downloadN_img, o.downloadSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), n.downloadButton_do.screen.className = "fwduvp-download-button", n.downloadButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, n.downloadButtonShowToolTipHandler), n.downloadButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.downloadButtonOnMouseUpHandler), n.downloadButton_do.setX(-300), n.downloadButton_do.setY(parseInt((n.sH - n.downloadButton_do.h) / 2));
			var e = setInterval(function() {
				0 < n.downloadButton_do.buttonHeight && (clearInterval(e), n.downloadButton_do.setY(parseInt((n.sH - n.downloadButton_do.buttonHeight) / 2)))
			}, 50);
			n.mainHld.addChild(n.downloadButton_do)
		}, n.downloadButtonShowToolTipHandler = function(t) {
			n.showToolTip(n.downloadButton_do, n.downloadButtonToolTip_do, t.e)
		}, n.downloadButtonOnMouseUpHandler = function() {
			n.dispatchEvent(t.DOWNLOAD_VIDEO)
		}, n.setupThumbnailsPreview = function() {
			n.thumbnailsPreview_do || !window.FWDUVPThumbnailsPreview || (FWDUVPThumbnailsPreview.setPrototype(), n.thumbnailsPreview_do = new FWDUVPThumbnailsPreview(n), n.thumbnailsPreview_do.addListener(FWDUVPData.LOAD_ERROR, function(t) {
				n.dispatchEvent(FWDUVPData.LOAD_ERROR, {
					text: t.text
				})
			}))
		}, n.setupATB = function() {
			FWDUVPATB.setPrototype(), n.atb = new FWDUVPATB(n), n.mainHld.addChild(n.atb), n.atb.addListener(FWDUVPATB.START_TO_SCRUB, n.atbStartToScrub), n.atb.addListener(FWDUVPATB.STOP_TO_SCRUB, n.atbStopToScrub)
		}, n.atbStartToScrub = function() {
			s.showDisable()
		}, n.atbStopToScrub = function() {
			s.hideDisable()
		}, n.setupAtbButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.atbButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-AB'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.atbButton_do = new FWDUVPSimpleButton(o.atbNPath_img, o.atbSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), n.atbButton_do.screen.className = "fwduvp-a-to-b-button", n.atbButton_do.setX(-5e3), n.atbButton_do.setY(parseInt((n.sH - n.atbButton_do.h) / 2));
			var e = setInterval(function() {
				0 < n.atbButton_do.buttonHeight && (clearInterval(e), n.atbButton_do.setY(parseInt((n.sH - n.atbButton_do.buttonHeight) / 2)))
			}, 50);
			n.atbButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, n.atbButtonShowTooltipHandler), n.atbButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.atbButtonMouseUpHandler), n.mainHld.addChild(n.atbButton_do)
		}, n.atbButtonShowTooltipHandler = function(t) {
			n.showToolTip(n.atbButton_do, n.atbButtonToolTip_do, t.e)
		}, n.atbButtonMouseUpHandler = function() {
			n.atbButton_do.isSelected ? (n.atbButton_do.doNotallowToSetNormal = !1, n.atbButton_do.isSelected = !1, n.atb.hide(!0), n.isMbl && n.atbButton_do.setNormalState()) : (n.atbButton_do.isSelected = !0, n.atbButton_do.doNotallowToSetNormal = !0, n.atbButton_do.setSelectedState(), n.atb.show(!0))
		}, n.disableAtbButton = function() {
			n.atbButton_do && n.atbButton_do.disable()
		}, n.enableAtbButton = function() {
			n.atbButton_do && n.atbButton_do.enable()
		}, n.setupShareButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.shareButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-share'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.shareButton_do = new FWDUVPSimpleButton(o.shareN_img, o.shareSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), n.shareButton_do.screen.className = "fwduvp-share-button", n.buttons_ar.push(n.shareButton_do), n.shareButton_do.setY(parseInt((n.sH - n.shareButton_do.h) / 2));
			var e = setInterval(function() {
				0 < n.shareButton_do.buttonHeight && (clearInterval(e), n.shareButton_do.setY(parseInt((n.sH - n.shareButton_do.buttonHeight) / 2)))
			}, 50);
			n.shareButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, n.facebookButtonShowTooltipHandler), n.shareButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.facebookButtonMouseUpHandler), n.mainHld.addChild(n.shareButton_do)
		}, n.facebookButtonShowTooltipHandler = function(t) {
			n.showToolTip(n.shareButton_do, n.facebookButtonToolTip_do, t.e)
		}, n.facebookButtonMouseUpHandler = function() {
			n.dispatchEvent(t.SHOW_SHARE_WINDOW)
		}, n.setupChromecastButton = function() {
			n.useVectorIcons_bl ? (FWDUVPComplexButton.setPrototype(), n.ccBtn_do = new FWDUVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-cast'></span>", "<span class='fwdicon fwdicon-uncast'></span>", "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPComplexButton.setPrototype(), n.ccBtn_do = new FWDUVPComplexButton(o.castN_img, o.castSPath_str, o.uncastN_img, o.uncastSPath_str, !0, n.useHEX, n.nBC, n.sBC));
			var e = setInterval(function() {
				0 < n.ccBtn_do.buttonHeight && (clearInterval(e), n.ccBtn_do.setY(parseInt((n.sH - n.ccBtn_do.buttonHeight) / 2)))
			}, 50);
			n.ccBtn_do.screen.className = "fwduvp-chromecast-button", n.ccBtn_do.setY(parseInt((n.sH - n.ccBtn_do.buttonHeight) / 2)), n.ccBtn_do.addListener(FWDUVPComplexButton.MOUSE_UP, n.chormecastMouseUpHandler), n.ccBtn_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, n.castTooltipHandler), n.ccBtn_do.setX(-500), n.mainHld.addChild(n.ccBtn_do)
		}, n.castTooltipHandler = function(t) {
			n.showToolTip(n.ccBtn_do, n.castButtonToolTip_do, t.e)
		}, n.chormecastMouseUpHandler = function() {
			0 == n.ccBtn_do.currentState ? n.dispatchEvent(t.UNCAST) : n.dispatchEvent(t.CAST)
		}, n.removeCCButton = function() {
			n.ccBtn_do && (-1 == FWDUVPUtils.indexOfArray(n.buttons_ar, n.ccBtn_do) || (n.buttons_ar.splice(FWDUVPUtils.indexOfArray(n.buttons_ar, n.ccBtn_do), 1), n.ccBtn_do.setX(-300), n.positionButtons()))
		}, n.addCCButton = function() {
			if (n.ccBtn_do && -1 == FWDUVPUtils.indexOfArray(n.buttons_ar, n.ccBtn_do)) {
				if (n.vrButton_do) {
					var e = n.getButtonIndex(n.vrButton_do);
					n.buttons_ar.splice(e, 0, n.ccBtn_do)
				} else n.fullScreenButton_do && -1 != FWDUVPUtils.indexOfArray(n.buttons_ar, n.fullScreenButton_do) ? n.buttons_ar.splice(FWDUVPUtils.indexOfArray(n.buttons_ar, n.fullScreenButton_do), 0, n.ccBtn_do) : n.buttons_ar.splice(n.buttons_ar.length, 0, n.ccBtn_do);
				n.positionButtons()
			}
		}, n.setupAudioTracksButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.atButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-headephone'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState"), n.atButton_do.screen.className = "fwduvp-audio-tracks-button vector") : (FWDUVPSimpleButton.setPrototype(), n.atButton_do = new FWDUVPSimpleButton(o.at_img, o.atSPath_img, void 0, !0, n.useHEX, n.nBC, n.sBC), n.atButton_do.screen.className = "fwduvp-audio-tracks-button");
			var e = setInterval(function() {
				0 < n.atButton_do.buttonHeight && (clearInterval(e), n.atButton_do.setY(parseInt((n.sH - n.atButton_do.buttonHeight) / 2)))
			}, 50);
			n.atButton_do.screen.className = "fwduvp-audio-tracks-button", n.atButton_do.setY(parseInt((n.sH - n.atButton_do.h) / 2)), n.atButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.atButtonMouseUpHandler), n.atButton_do.setX(-300), n.mainHld.addChild(n.atButton_do), n.setupATBButtons(), n.disableAtButton()
		}, n.atButtonMouseUpHandler = function() {
			n.showATBButtons(!0)
		}, n.disableAtButton = function() {
			n.atButton_do && n.atButton_do.disable()
		}, n.enableAtButton = function() {
			n.atButton_do && n.atButton_do.enable()
		}, n.removeAtButton = function() {
			n.atButton_do && (-1 == n.getButtonIndex(n.atButton_do) || (n.buttons_ar.splice(n.getButtonIndex(n.atButton_do), 1), n.atButton_do.setX(-300)))
		}, n.addAtButton = function() {
			if (n.atButton_do && -1 == n.getButtonIndex(n.atButton_do)) {
				if (n.disableAtButton(), n.ytbQualityButton_do && -1 != n.getButtonIndex(n.ytbQualityButton_do)) {
					var e = n.getButtonIndex(n.ytbQualityButton_do);
					n.buttons_ar.splice(e, 0, n.atButton_do)
				} else if (n.fullScreenButton_do && -1 != n.getButtonIndex(n.fullScreenButton_do)) {
					var e = n.getButtonIndex(n.fullScreenButton_do);
					n.buttons_ar.splice(e, 0, n.atButton_do)
				} else n.buttons_ar.splice(n.buttons_ar.length, 0, n.atButton_do);
				n.positionButtons()
			}
		}, n.totalATBButtons = 10, n.areATBButtonsShowed_bl = !1, n.updateATBButtons = function(e, t) {
			n.atButton_do && (n.ATBSource_ar = e, n.positionAndResizeATBButtons(e), setTimeout(function() {
				t = n.ATBSource_ar.length - 1 - t, n.disableATBButtons(t)
			}, 65), n.prevATBIndex = t)
		}, n.setupATBButtons = function() {
			if (n.ATBButtons_ar = [], n.ATBButtonsHolder_do = new FWDUVPDisplayObject("div"), n.ATBButtonsHolder_do.setOverflow("visible"), n.repeatBackground_bl) n.ATBButtonsHolder_do.getStyle().background = "url('" + n.controllerBkPath_str + "')";
			else {
				n.ATBButtonsBackground_do = new FWDUVPDisplayObject("img");
				var e = new Image;
				e.src = n.controllerBkPath_str, n.ATBButtonsBackground_do.setScreen(e), n.ATBButtonsHolder_do.addChild(n.ATBButtonsBackground_do)
			}
			n.ATBButtonsHolder_do.setX(300), n.ATBButtonsHolder_do.setY(-300), s.videoHolder_do.addChild(n.ATBButtonsHolder_do, 0);
			var e = new Image;
			e.src = n.ytbQualityButtonPointerPath_str, n.ATBPonter_do = new FWDUVPDisplayObject("img"), n.ATBPonter_do.setScreen(e), n.ATBPonter_do.setWidth(n.pointerWidth), n.ATBPonter_do.setHeight(n.pointerHeight), n.ATBButtonsHolder_do.addChild(n.ATBPonter_do);
			var e = new Image;
			e.src = n.youtubeQualityArrowPath_str, n.ABTQualityArrow_do = new FWDUVPDisplayObject("img"), n.ABTQualityArrow_do.setScreen(e), n.ABTQualityArrow_do.setX(7), n.ABTQualityArrow_do.setWidth(5), n.ABTQualityArrow_do.setHeight(7), n.ATBButtonsHolder_do.addChild(n.ABTQualityArrow_do);
			for (var t = 0; t < n.totalATBButtons; t++) {
				FWDUVPYTBQButton.setPrototype();
				var a = new FWDUVPYTBQButton("no source", n.youtubeQualityButtonNormalColor_str, n.youtubeQualityButtonSelectedColor_str, o.hdPath_str, t);
				a.addListener(FWDUVPYTBQButton.MOUSE_OVER, n.ATBQualityOver), a.addListener(FWDUVPYTBQButton.MOUSE_OUT, n.ATBQualityOut), a.addListener(FWDUVPYTBQButton.CLICK, n.ATBQualityClick), n.ATBButtons_ar[t] = a, n.ATBButtonsHolder_do.addChild(a)
			}
			n.hideATBButtons(!1)
		}, n.ATBQualityOver = function(t) {
			n.setATBArrowPosition(t.target)
		}, n.ATBQualityOut = function() {
			n.setATBArrowPosition(void 0)
		}, n.ATBQualityClick = function(o) {
			n.startAtATB = o.id, n.disableATBButtons(n.startAtATB), n.hideATBButtons(!0), n.dispatchEvent(t.CHANGE_AUDIO_TRACKS, {
				id: n.ATBSource_ar.length - 1 - o.id
			})
		}, n.positionAndResizeATBButtons = function(e) {
			if (e) {
				var t = e.length;
				if (n.prevATBButtonsLength != t) {
					n.prevATBButtonsLength = t;
					for (var o = 5, s = 0, a = 0, d = 0, r; d < t; d++) r = n.ATBButtons_ar[d], r.updateText(e[d].label), r.setFinalSize();
					setTimeout(function() {
						for (var e = 0; e < n.totalATBButtons; e++) r = n.ATBButtons_ar[e], e < t ? (0 != r.x && r.setX(0), r.w > s && (s = r.w), r.setY(o), o += r.h) : -3e3 != r.x && r.setX(-3e3);
						for (var e = 0; e < n.totalATBButtons; e++) r = n.ATBButtons_ar[e], r.dumy_do.w < s && (r.setWidth(s), r.dumy_do.setWidth(s));
						a = o + 5, n.ATBPonter_do.setX(parseInt((s - n.ATBPonter_do.w) / 2)), n.ATBPonter_do.setY(a), n.ATBButtonsBackground_do && (n.ATBButtonsBackground_do.setWidth(s), n.ATBButtonsBackground_do.setHeight(a)), n.ATBButtonsHolder_do.setWidth(s), n.ATBButtonsHolder_do.setHeight(a)
					}, 60)
				}
			}
		}, n.disableATBButtons = function(e) {
			for (var t = 0, o; t < n.totalATBButtons; t++) o = n.ATBButtons_ar[t], t == e ? (FWDAnimation.killTweensOf(n.ABTQualityArrow_do), n.ABTQualityArrow_do.setY(o.y + parseInt((o.h - n.ABTQualityArrow_do.h) / 2) + 1), o.disable(), n.ABTDisabledButton_do = o) : o.enable()
		}, n.setATBArrowPosition = function(e) {
			var t = 0;
			t = e ? e.y + parseInt((e.h - n.ABTQualityArrow_do.h) / 2) : n.ABTDisabledButton_do.y + parseInt((n.ABTDisabledButton_do.h - n.ABTQualityArrow_do.h) / 2), FWDAnimation.killTweensOf(n.ABTQualityArrow_do), FWDAnimation.to(n.ABTQualityArrow_do, .6, {
				y: t,
				delay: .1,
				ease: Expo.easeInOut
			})
		}, n.showATBButtons = function(e) {
			n.hideATBButtons(), n.hideMainScrubberTop(), n.areATBButtonsShowed_bl = !0;
			var t = parseInt(n.atButton_do.x + parseInt(n.atButton_do.w - n.ATBButtonsHolder_do.w) / 2),
				o = parseInt(s.tempVidStageHeight - n.sH - n.ATBButtonsHolder_do.h - 6);
			n.hasPointerEvent_bl ? window.addEventListener("pointerdown", n.hideATBsButtonsHandler) : (!n.isMbl && window.addEventListener("mousedown", n.hideATBsButtonsHandler), window.addEventListener("touchstart", n.hideATBsButtonsHandler)), n.ATBButtonsHolder_do.setX(t), e ? FWDAnimation.to(n.ATBButtonsHolder_do, .6, {
				y: o,
				ease: Expo.easeInOut
			}) : (FWDAnimation.killTweensOf(n.ATBButtonsHolder_do), n.ATBButtonsHolder_do.setY(o))
		}, n.hideATBButtons = function(e) {
			n.ATBButtonsHolder_do && (n.areATBButtonsShowed_bl = !1, e ? FWDAnimation.to(n.ATBButtonsHolder_do, .6, {
				y: s.sH,
				ease: Expo.easeInOut
			}) : (FWDAnimation.killTweensOf(n.ATBButtonsHolder_do), n.ATBButtonsHolder_do.setY(s.sH)), n.hasPointerEvent_bl ? window.removeEventListener("pointerdown", n.hideATBsButtonsHandler) : (!n.isMbl && window.removeEventListener("mousedown", n.hideATBsButtonsHandler), window.removeEventListener("touchstart", n.hideATBsButtonsHandler)), n.showMainScrubberOnTop())
		}, n.hideATBsButtonsHandler = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			FWDUVPUtils.hitTest(n.atButton_do.screen, e.screenX, e.screenY) || FWDUVPUtils.hitTest(n.ATBButtonsHolder_do.screen, e.screenX, e.screenY) || n.hideATBButtons(!0)
		}, n.setupVrButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.vrButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-vr'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState"), n.vrButton_do.screen.className = "FWDUVP-vr-button vector") : (FWDUVPSimpleButton.setPrototype(), n.vrButton_do = new FWDUVPSimpleButton(o.vr_img, o.vrSPath_img, void 0, !0, n.useHEX, n.nBC, n.sBC), n.vrButton_do.screen.className = "FWDUVP-vr-button"), n.vrButton_do.screen.className = "fwduvp-vr-button", n.vrButton_do.setY(parseInt((n.sH - n.vrButton_do.h) / 2)), n.vrButton_do.addListener(FWDUVPComplexButton.SHOW_TOOLTIP, n.vrButtonShowToolTipHandler), n.vrButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.vrButtonMouseUpHandler), n.mainHld.addChild(n.vrButton_do), n.vrButton_do.setX(-300), n.disableVrButton()
		}, n.vrButtonShowToolTipHandler = function(t) {
			n.showToolTip(n.vrButton_do, n.vrToolTip_do, t.e)
		}, n.vrButtonMouseUpHandler = function() {
			n.dispatchEvent(t.VR)
		}, n.disableVrButton = function() {
			n.vrButton_do && n.vrButton_do.disable()
		}, n.enableVrButton = function() {
			n.vrButton_do && n.vrButton_do.enable()
		}, n.removeVrButton = function() {
			n.vrButton_do && (-1 == n.getButtonIndex(n.vrButton_do) || (n.buttons_ar.splice(n.getButtonIndex(n.vrButton_do), 1), n.vrButton_do.setX(-300)))
		}, n.addVrButton = function() {
			if (n.vrButton_do && -1 == n.getButtonIndex(n.vrButton_do))
				if (n.disableVrButton(), n.fullScreenButton_do && -1 != n.getButtonIndex(n.fullScreenButton_do)) {
					var e = n.getButtonIndex(n.fullScreenButton_do);
					n.buttons_ar.splice(e, 0, n.vrButton_do)
				} else n.buttons_ar.splice(n.buttons_ar.length, 0, n.infoButton_do)
		}, n.setupFullscreenButton = function() {
			n.useVectorIcons_bl ? (FWDUVPComplexButton.setPrototype(), n.fullScreenButton_do = new FWDUVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-fullscreen'></span>", "<span class='fwdicon fwdicon-normalscreen'></span>", "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPComplexButton.setPrototype(), n.fullScreenButton_do = new FWDUVPComplexButton(n.fullScreenN_img, o.fullScreenSPath_str, n.normalScreenN_img, o.normalScreenSPath_str, !0, n.useHEX, n.nBC, n.sBC)), n.buttons_ar.push(n.fullScreenButton_do), n.fullScreenButton_do.setY(parseInt((n.sH - n.fullScreenButton_do.buttonHeight) / 2));
			var e = setInterval(function() {
				0 < n.fullScreenButton_do.buttonHeight && (clearInterval(e), n.fullScreenButton_do.setY(parseInt((n.sH - n.fullScreenButton_do.buttonHeight) / 2)))
			}, 50);
			n.fullScreenButton_do.screen.className = "fwduvp-fullscreen-button", n.fullScreenButton_do.addListener(FWDUVPComplexButton.SHOW_TOOLTIP, n.fullscreenButtonShowToolTipHandler), n.fullScreenButton_do.addListener(FWDUVPComplexButton.MOUSE_UP, n.fullScreenButtonMouseUpHandler), n.mainHld.addChild(n.fullScreenButton_do)
		}, n.fullscreenButtonShowToolTipHandler = function(t) {
			n.showToolTip(n.fullScreenButton_do, n.fullscreenButtonToolTip_do, t.e)
		}, n.showFullScreenButton = function() {
			n.fullScreenButton_do && n.fullScreenButton_do.setButtonState(1)
		}, n.showNormalScreenButton = function() {
			n.fullScreenButton_do && n.fullScreenButton_do.setButtonState(0)
		}, n.setNormalStateToFullScreenButton = function() {
			n.fullScreenButton_do && (n.fullScreenButton_do.setNormalState(!0), n.hideQualityButtons(!1))
		}, n.fullScreenButtonMouseUpHandler = function() {
			n.fullscreenButtonToolTip_do && n.fullscreenButtonToolTip_do.hide(), 1 == n.fullScreenButton_do.currentState ? n.dispatchEvent(t.FULL_SCREEN) : n.dispatchEvent(t.NORMAL_SCREEN)
		}, n.setupTime = function() {
			n.time_do = new FWDUVPDisplayObject("div"), n.time_do.screen.className = "fwduvp-time", n.time_do.hasTransform3d_bl = !1, n.time_do.hasTransform2d_bl = !1, n.time_do.setBackfaceVisibility(), n.time_do.getStyle().fontFamily = "Arial", n.time_do.getStyle().fontSize = "12px", n.time_do.getStyle().whiteSpace = "nowrap", n.time_do.getStyle().textAlign = "center", n.time_do.getStyle().color = n.timeColor_str, n.time_do.getStyle().fontSmoothing = "antialiased", n.time_do.getStyle().webkitFontSmoothing = "antialiased", n.time_do.getStyle().textRendering = "optimizeLegibility", n.mainHld.addChild(n.time_do), n.updateTime("00:00/00:00"), n.buttons_ar.push(n.time_do)
		}, n.updateTime = function(e) {
			n.time_do && (n.isLive && (e = e.substr(0, e.indexOf("/"))), n.time_do.setInnerHTML(e), n.lastTimeLength != e.length && (n.time_do.w = n.time_do.getWidth(), n.positionButtons(), setTimeout(function() {
				n.time_do.w = n.time_do.getWidth(), n.time_do.h = n.time_do.getHeight(), n.time_do.setY(parseInt((n.sH - n.time_do.h) / 2) + 1 + n.timeOffsetTop), n.positionButtons()
			}, 50), n.lastTimeLength = e.length))
		}, n.setupRewindButton = function() {
			n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.rewindButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-10'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.rewindButton_do = new FWDUVPSimpleButton(o.rewindN_img, o.rewindSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), n.rewindButton_do.screen.className = "fwduvp-rewind-button", n.buttons_ar.push(n.rewindButton_do), n.rewindButton_do.setY(parseInt((n.sH - n.rewindButton_do.h) / 2));
			var e = setInterval(function() {
				0 < n.rewindButton_do.buttonHeight && (clearInterval(e), n.rewindButton_do.setY(parseInt((n.sH - n.rewindButton_do.buttonHeight) / 2)))
			}, 50);
			n.rewindButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.rewindButtonMouseUpHandler), n.mainHld.addChild(n.rewindButton_do)
		}, n.rewindButtonMouseUpHandler = function() {
			n.dispatchEvent(t.REWIND)
		}, n.disableRewindButton = function() {
			n.rewindButton_do && n.rewindButton_do.disable()
		}, n.enableRewindButton = function() {
			n.rewindButton_do && n.rewindButton_do.enable()
		}, n.setupVolumeButton = function() {
			n.useVectorIcons_bl ? (FWDUVPVolumeButton.setPrototype(), n.volBtn = new FWDUVPVolumeButton(void 0, void 0, void 0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-sound'></span>", "<span class='fwdicon fwdicon-sound-off'></span>", "UVPMainButtonsNormalState volume", "UVPMainButtonsSelectedState volume")) : (FWDUVPVolumeButton.setPrototype(), n.volBtn = new FWDUVPVolumeButton(n.volumeN_img, o.volumeSPath_str, o.volumeDPath_str, n.useHEX, n.nBC, n.sBC)), n.volBtn.addListener(FWDUVPVolumeButton.SHOW_TOOLTIP, n.volumeButtonShowTooltipHandler), n.volBtn.addListener(FWDUVPVolumeButton.MOUSE_OVER, n.volumeOnMouseOverHandler);
			n.volBtn.addListener(FWDUVPVolumeButton.MOUSE_UP, n.volumeOnMouseUpHandler), n.volBtn.setY(parseInt((n.sH - n.volBtn.h) / 2));
			var e = setInterval(function() {
				0 < n.volBtn.buttonHeight && (clearInterval(e), n.volBtn.setY(parseInt((n.sH - n.volBtn.buttonHeight) / 2)))
			}, 50);
			n.buttons_ar.push(n.volBtn), n.mainHld.addChild(n.volBtn), 0 == n.volume && n.volBtn.setDisabledState()
		}, n.volumeButtonShowTooltipHandler = function() {}, n.hideMainScrubberTop = function() {
			n.isMainScrubberOnTop_bl && FWDAnimation.to(n.mainScrubber_do, .4, {
				alpha: 0,
				onComplete: function() {
					n.mainScrubber_do.setX(-5e3)
				}
			})
		}, n.showMainScrubberOnTop = function() {
			n.isMainScrubberOnTop_bl && (n.mainScrubber_do.setX(0), FWDAnimation.to(n.mainScrubber_do, .6, {
				alpha: 1
			}))
		}, n.volumeOnMouseOverHandler = function() {
			n.showVolumeScrubber(!0), n.hideQualityButtons(!0), n.hideSubtitleButtons(!0), n.hideATBButtons(!0), n.hidePlaybackRateButtons(!0), n.hideMainScrubberTop()
		}, n.volumeOnMouseUpHandler = function() {
			var e = n.lastVolume;
			if (n.isMbl) return void(n.isVolumeScrubberShowed_bl || n.volumeOnMouseOverHandler());
			n.muted ? (e = n.lastVolume, n.muted = !1) : (e = 1e-6, n.muted = !0);
			n.updateVolume(e)
		}, n.setupVolumeScrubber = function() {
			if (n.volumeScrubberHolder_do = new FWDUVPDisplayObject("div"), n.repeatBackground_bl) n.volumeBk_do = new FWDUVPDisplayObject("div"), n.volumeBk_do.getStyle().background = "url('" + n.controllerBkPath_str + "')";
			else {
				n.volumeBk_do = new FWDUVPDisplayObject("img");
				var e = new Image;
				e.src = n.controllerBkPath_str, n.volumeBk_do.setScreen(e)
			}
			n.volumeScrubberHolder_do.addChild(n.volumeBk_do), n.volumeScrubber_do = new FWDUVPDisplayObject("div"), n.volumeScrubber_do.setHeight(n.mainScrbH), n.volumeScrubber_do.setY(parseInt(n.volumeScrubberOfsetHeight / 2));
			var t = new Image;
			t.src = o.volumeScrubberBkBottomPath_str, n.volumeScrubberBkBottom_do = new FWDUVPDisplayObject("img"), n.volumeScrubberBkBottom_do.setScreen(t), n.volumeScrubberBkBottom_do.setWidth(n.mainScrubberBkLeft_img.height), n.volumeScrubberBkBottom_do.setHeight(n.mainScrubberBkLeft_img.width), n.volumeScrubberBkBottom_do.setY(n.volumeScrubberHeight - n.volumeScrubberOfsetHeight - n.volumeScrubberBkBottom_do.h);
			var s = new Image;
			s.src = o.volumeScrubberBkTopPath_str, n.volumeScrubberBkTop_do = new FWDUVPDisplayObject("img"), n.volumeScrubberBkTop_do.setScreen(s), n.volumeScrubberBkTop_do.setWidth(n.volumeScrubberBkBottom_do.w), n.volumeScrubberBkTop_do.setHeight(n.volumeScrubberBkBottom_do.h);
			var i = new Image;
			i.src = o.volumeScrubberBkMiddlePath_str, n.isMbl ? (n.volumeScrubberBkMiddle_do = new FWDUVPDisplayObject("div"), n.volumeScrubberBkMiddle_do.getStyle().background = "url('" + n.volumeScrubberBkMiddlePath_str + "') repeat-y") : (n.volumeScrubberBkMiddle_do = new FWDUVPDisplayObject("img"), n.volumeScrubberBkMiddle_do.setScreen(i)), n.volumeScrubberBkMiddle_do.setWidth(n.volumeScrubberBkBottom_do.w), n.volumeScrubberBkMiddle_do.setHeight(n.volumeScrubberHeight - n.volumeScrubberOfsetHeight - 2 * n.volumeScrubberBkTop_do.h), n.volumeScrubberBkMiddle_do.setY(n.volumeScrubberBkTop_do.h), n.volumeScrubberDrag_do = new FWDUVPDisplayObject("div"), n.volumeScrubberDrag_do.setWidth(n.volumeScrubberBkBottom_do.w), n.useHEX ? (n.volumeScrubberDragBottom_do = new FWDUVPDisplayObject("div"), n.volumeScrubberDragBottom_do.setWidth(n.volumeScrubberDragBottom_img.width), n.volumeScrubberDragBottom_do.setHeight(n.volumeScrubberDragBottom_img.height), n.volumeScrubberDragBottom_canvas = FWDUVPUtils.getCanvasWithModifiedColor(n.volumeScrubberDragBottom_img, n.nBC).canvas, n.volumeScrubberDragBottom_do.screen.appendChild(n.volumeScrubberDragBottom_canvas)) : (n.volumeScrubberDragBottom_do = new FWDUVPDisplayObject("img"), n.volumeScrubberDragBottom_do.setScreen(n.volumeScrubberDragBottom_img)), n.volumeScrubberDragBottom_do.setWidth(n.mainScrubberDragLeft_img.height), n.volumeScrubberDragBottom_do.setHeight(n.mainScrubberDragLeft_img.width), n.volumeScrubberDragBottom_do.setY(n.volumeScrubberHeight - n.volumeScrubberOfsetHeight - n.volumeScrubberDragBottom_do.h), n.middleImage = new Image, n.middleImage.src = n.volumeScrubberDragMiddlePath_str, n.useHEX ? (n.volumeScrubberDragMiddle_do = new FWDUVPDisplayObject("div"), n.middleImage.onload = function() {
				n.volumeScrubberDragMiddle_canvas = FWDUVPUtils.getCanvasWithModifiedColor(n.middleImage, n.nBC, !0), n.volumeScrubberDragImage_img = n.volumeScrubberDragMiddle_canvas.image, n.volumeScrubberDragMiddle_do.getStyle().background = "url('" + n.volumeScrubberDragImage_img.src + "') repeat-y"
			}) : (n.volumeScrubberDragMiddle_do = new FWDUVPDisplayObject("img"), n.volumeScrubberDragMiddle_do.setScreen(n.middleImage)), n.volumeScrubberDragMiddle_do.setWidth(n.volumeScrubberDragBottom_do.w), n.volumeScrubberDragMiddle_do.setHeight(n.volumeScrubberHeight);
			var a = new Image;
			a.src = o.volumeScrubberLinePath_str, n.volumeScrubberBarLine_do = new FWDUVPDisplayObject("img"), n.volumeScrubberBarLine_do.setScreen(a), n.volumeScrubberBarLine_do.setWidth(n.mainScrubberLine_img.height), n.volumeScrubberBarLine_do.setHeight(n.mainScrubberLine_img.width), n.volumeScrubberBarLine_do.setAlpha(0), n.volumeScrubberBarLine_do.hasTransform3d_bl = !1, n.volumeScrubberBarLine_do.hasTransform2d_bl = !1, n.volumeScrubberHolder_do.setWidth(n.volScrbW), n.volumeScrubberHolder_do.setHeight(n.volumeScrubberHeight + n.sH), n.volumeBk_do.setWidth(n.volScrbW), n.volumeBk_do.setHeight(n.volumeScrubberHeight + n.sH), n.volumeScrubber_do.setWidth(n.volScrbW), n.volumeScrubber_do.setHeight(n.volumeScrubberHeight - n.volumeScrubberOfsetHeight), n.volumeScrubber_do.addChild(n.volumeScrubberBkBottom_do), n.volumeScrubber_do.addChild(n.volumeScrubberBkMiddle_do), n.volumeScrubber_do.addChild(n.volumeScrubberBkTop_do), n.volumeScrubber_do.addChild(n.volumeScrubberBarLine_do), n.volumeScrubber_do.addChild(n.volumeScrubberDragBottom_do), n.volumeScrubberDrag_do.addChild(n.volumeScrubberDragMiddle_do), n.volumeScrubber_do.addChild(n.volumeScrubberDrag_do), n.volumeScrubber_do.addChild(n.volumeScrubberBarLine_do), n.volumeScrubberHolder_do.addChild(n.volumeScrubber_do), n.addChild(n.volumeScrubberHolder_do), n.isMbl ? n.hasPointerEvent_bl ? (n.volumeScrubber_do.screen.addEventListener("pointerover", n.volumeScrubberOnOverHandler), n.volumeScrubber_do.screen.addEventListener("pointerout", n.volumeScrubberOnOutHandler), n.volumeScrubber_do.screen.addEventListener("pointerdown", n.volumeScrubberOnDownHandler)) : n.volumeScrubber_do.screen.addEventListener("touchstart", n.volumeScrubberOnDownHandler) : n.screen.addEventListener && (n.volumeScrubber_do.screen.addEventListener("mouseover", n.volumeScrubberOnOverHandler), n.volumeScrubber_do.screen.addEventListener("mouseout", n.volumeScrubberOnOutHandler), n.volumeScrubber_do.screen.addEventListener("mousedown", n.volumeScrubberOnDownHandler)), n.enableVolumeScrubber(), n.updateVolumeScrubber(n.volume)
		}, n.volumeScrubberOnOverHandler = function() {
			n.isVolumeScrubberDisabled_bl
		}, n.volumeScrubberOnOutHandler = function() {
			n.isVolumeScrubberDisabled_bl
		}, n.volumeScrubberOnDownHandler = function(t) {
			if (!(n.isVolumeScrubberDisabled_bl || 2 == t.button)) {
				t.preventDefault && t.preventDefault(), n.volumeScrubberIsDragging_bl = !0;
				var e = FWDUVPUtils.getViewportMouseCoordinates(t),
					o = e.screenY - n.volumeScrubber_do.getGlobalY();
				s.showDisable(), 0 > o ? o = 0 : o > n.volumeScrubber_do.h - n.scrubbersOffsetWidth && (o = n.volumeScrubber_do.h - n.scrubbersOffsetWidth);
				var i = 1 - o / n.volumeScrubber_do.h;
				n.lastVolume = i, n.updateVolume(i), n.isMbl ? n.hasPointerEvent_bl ? (window.addEventListener("MSPointerMove", n.volumeScrubberMoveHandler), window.addEventListener("pointerup", n.volumeScrubberEndHandler)) : (window.addEventListener("touchmove", n.volumeScrubberMoveHandler, {
					passive: !1
				}), window.addEventListener("touchend", n.volumeScrubberEndHandler)) : (window.addEventListener("mousemove", n.volumeScrubberMoveHandler), window.addEventListener("mouseup", n.volumeScrubberEndHandler))
			}
		}, n.volumeScrubberMoveHandler = function(t) {
			if (!n.isVolumeScrubberDisabled_bl) {
				t.preventDefault && t.preventDefault();
				var e = FWDUVPUtils.getViewportMouseCoordinates(t),
					o = e.screenY - n.volumeScrubber_do.getGlobalY();
				o < n.scrubbersOffsetWidth ? o = n.scrubbersOffsetWidth : o > n.volumeScrubber_do.h && (o = n.volumeScrubber_do.h);
				var s = 1 - o / n.volumeScrubber_do.h;
				n.lastVolume = s, n.updateVolume(s)
			}
		}, n.volumeScrubberEndHandler = function() {
			s.hideDisable(), n.volumeScrubberIsDragging_bl = !1, n.isMbl ? n.hasPointerEvent_bl ? (window.removeEventListener("MSPointerMove", n.volumeScrubberMoveHandler), window.removeEventListener("pointerup", n.volumeScrubberEndHandler)) : (window.removeEventListener("touchmove", n.volumeScrubberMoveHandler), window.removeEventListener("touchend", n.volumeScrubberEndHandler)) : (window.removeEventListener("mousemove", n.volumeScrubberMoveHandler), window.removeEventListener("mouseup", n.volumeScrubberEndHandler))
		}, n.disableVolumeScrubber = function() {
			n.isVolumeScrubberDisabled_bl = !0, n.volumeScrubber_do.setButtonMode(!1), n.volumeScrubberEndHandler()
		}, n.enableVolumeScrubber = function() {
			n.isVolumeScrubberDisabled_bl = !1, n.volumeScrubber_do.setButtonMode(!0)
		}, n.updateVolumeScrubber = function(e) {
			var t = n.volumeScrubberHeight - n.volumeScrubberOfsetHeight,
				o = Math.round(e * t);
			n.volumeScrubberDrag_do.setHeight(Math.max(0, o - n.volumeScrubberDragBottom_do.h)), n.volumeScrubberDrag_do.setY(t - o), 1 > o && n.isVolumeScrubberLineVisible_bl ? (n.isVolumeScrubberLineVisible_bl = !1, FWDAnimation.to(n.volumeScrubberBarLine_do, .5, {
				alpha: 0
			}), FWDAnimation.to(n.volumeScrubberDragBottom_do, .5, {
				alpha: 0
			})) : 1 < o && !n.isVolumeScrubberLineVisible_bl && (n.isVolumeScrubberLineVisible_bl = !0, FWDAnimation.to(n.volumeScrubberBarLine_do, .5, {
				alpha: 1
			}), FWDAnimation.to(n.volumeScrubberDragBottom_do, .5, {
				alpha: 1
			})), o > t && (o = t), FWDAnimation.to(n.volumeScrubberBarLine_do, .8, {
				y: t - o - 2,
				ease: Expo.easeOut
			})
		}, n.updateVolume = function(e, o) {
			n.showVolumeScrubber_bl && (n.volume = e, 1e-6 >= n.volume ? (n.muted = !0, n.volume = 0) : 1 <= n.voume ? (n.muted = !1, n.volume = 1, s.removeAPT()) : (n.muted = !1, s.removeAPT()), 0 == n.volume ? n.volBtn && n.volBtn.setDisabledState() : n.volBtn && n.volBtn.setEnabledState(), n.volumeScrubberBarLine_do && n.updateVolumeScrubber(n.volume), !o && n.dispatchEvent(t.CHANGE_VOLUME, {
				percent: n.volume
			}))
		}, n.showVolumeScrubber = function(e) {
			if (!n.isVolumeScrubberShowed_bl) {
				n.isVolumeScrubberShowed_bl = !0;
				var t = -n.volumeScrubberHolder_do.h + n.h;
				n.volumeScrubberHolder_do.setVisible(!0), n.isMbl ? setTimeout(function() {
					window.addEventListener("touchstart", n.hideVolumeSchubberOnMoveHandler)
				}, 50) : window.addEventListener("mousemove", n.hideVolumeSchubberOnMoveHandler), n.volumeScrubberHolder_do.setX(parseInt(n.volBtn.x + (n.volBtn.w - n.volumeScrubberHolder_do.w) / 2)), e ? FWDAnimation.to(n.volumeScrubberHolder_do, .6, {
					y: t,
					ease: Expo.easeInOut
				}) : (FWDAnimation.killTweensOf(n.volumeScrubberHolder_do), n.volumeScrubberHolder_do.setY(t))
			}
		}, n.hideVolumeSchubberOnMoveHandler = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			(FWDUVPUtils.hitTest(n.volumeScrubberHolder_do.screen, e.screenX, e.screenY) || FWDUVPUtils.hitTest(n.volBtn.screen, e.screenX, e.screenY)) && !n.isMbl || FWDUVPUtils.hitTest(n.volumeScrubber_do.screen, e.screenX, e.screenY) && n.isMbl || n.volumeScrubberIsDragging_bl || (n.hideVolumeScrubber(!0), n.isMainScrubberOnTop_bl && (n.mainScrubber_do.setX(0), FWDAnimation.to(n.mainScrubber_do, .6, {
				alpha: 1
			})))
		}, n.hideVolumeScrubber = function(e) {
			n.isVolumeScrubberShowed_bl && (n.isVolumeScrubberShowed_bl = !1, n.volBtn.setNormalState(!0), e ? FWDAnimation.to(n.volumeScrubberHolder_do, .6, {
				y: s.sH,
				ease: Expo.easeInOut,
				onComplete: function() {
					n.volumeScrubberHolder_do.setVisible(!1)
				}
			}) : (FWDAnimation.killTweensOf(n.ytbButtonsHolder_do), n.volumeScrubberHolder_do.setY(s.sH), n.volumeScrubberHolder_do.setVisible(!1)), n.isMbl ? window.removeEventListener("touchstart", n.hideVolumeSchubberOnMoveHandler) : window.removeEventListener("mousemove", n.hideVolumeSchubberOnMoveHandler))
		}, n.show = function(e) {
			n.isShowed_bl || (n.isShowed_bl = !0, n.setX(0), e ? FWDAnimation.to(n.mainHld, .8, {
				y: 0,
				ease: Expo.easeInOut
			}) : (FWDAnimation.killTweensOf(n.mainHld), n.mainHld.setY(0)), n.disableCtrl_to = setTimeout(function() {
				n.positionButtons(), n.getStyle().pointerEvents = "auto"
			}, 200))
		}, n.hide = function(e, t) {
			n.isShowed_bl && (!t && (t = 0), n.atb && n.atb.isShowed_bl && (t += n.h + 1), n.isMainScrubberOnTop_bl && n.atb && n.atb.isShowed_bl && (t += n.mainScrubberOffestTop), !o.showScrubberWhenControllerIsHidden_bl && (t += n.mainScrubber_do.h - 14), n.isShowed_bl = !1, clearTimeout(n.disableCtrl_to), n.getStyle().pointerEvents = "none", e ? FWDAnimation.to(n.mainHld, .8, {
				y: n.sH + t,
				ease: Expo.easeInOut
			}) : (FWDAnimation.killTweensOf(n.mainHld), n.mainHld.setY(n.sH + t)), n.hideQualityButtons(!0), n.hideSubtitleButtons(!0), n.hideATBButtons(!0), n.hidePlaybackRateButtons(!0))
		}, n.mainScrubberDragMiddleAddPath_str = o.mainScrubberDragMiddleAddPath_str, n.updateHexColorForScrubber = function(e) {
			if (e) n.mainScrubberDragMiddle_do.getStyle().background = "url('" + n.mainScrubberDragMiddleAddPath_str + "') repeat-x", n.mainScrubberDragLeft_do.screen.src = o.mainScrubberDragLeftAddPath_str;
			else if (n.useHEX && n.mainSCrubberMiddleCanvas) {
				var t = FWDUVPUtils.changeCanvasHEXColor(n.mainScrubberMiddleImage, n.mainSCrubberMiddleCanvas, n.nBC, !0);
				n.mainScrubberDragMiddle_do.getStyle().background = "url('" + t.src + "') repeat-x"
			} else n.mainScrubberDragMiddle_do.getStyle().background = "url('" + n.mainScrubberDragMiddlePath_str + "') repeat-x", n.mainScrubberDragLeft_do.screen.src = n.mainScrubberDragLeftSource
		}, n.updateHEXColors = function(e, t) {
			n.nBC = e, n.sBC = t
		}, n.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.VR = "vr", t.UNCAST = "uncast", t.CAST = "cast", t.SHOW_SHARE_WINDOW = "showShareWindow", t.SHOW_SUBTITLE = "showSubtitle", t.HIDE_SUBTITLE = "hideSubtitle", t.SHOW_PLAYLIST = "showPlaylist", t.HIDE_PLAYLIST = "hidePlaylist", t.SHOW_CATEGORIES = "showCategories", t.DOWNLOAD_VIDEO = "downloadVideo", t.UNCAST = "uncast", t.REWIND = "rewind", t.FULL_SCREEN = "fullScreen", t.NORMAL_SCREEN = "normalScreen", t.PLAY = "play", t.PAUSE = "pause", t.START_TO_SCRUB = "startToScrub", t.SCRUB = "scrub", t.STOP_TO_SCRUB = "stopToScrub", t.CHANGE_VOLUME = "changeVolume", t.CHANGE_YOUTUBE_QUALITY = "changeYoutubeQuality", t.SHOW_EMBED_WINDOW = "showEmbedWindow", t.SHOW_INFO_WINDOW = "showInfoWindow", t.CHANGE_SUBTITLE = "changeSubtitle", t.CHANGE_PLAYBACK_RATES = "changePlaybackRate", t.CHANGE_AUDIO_TRACKS = "changeAudioTracks", t.prototype = null, window.FWDUVPController = t
}(),
function(window) {
	var FWDUVPData = function(props, playListElement, prt) {
		'use strict';
		var _s = this,
			prototype = FWDUVPData.prototype;
		_s.props = props, _s.skinPaths_ar = [], _s.images_ar = [], _s.cats_ar = [], _s.catsRef_ar = [], _s.controllerHeight = 0, _s.countLoadedSkinImages = 0, _s.volume = 1, _s.controllerHideDelay = 0, _s.startSpaceBetweenButtons = 0, _s.spaceBetweenButtons = 0, _s.scrubbersOffsetWidth = 0, _s.volumeScrubberOffsetTopWidth = 0, _s.timeOffsetLeftWidth = 0, _s.timeOffsetTop = 0, _s.logoMargins = 0, _s.startAtPlaylist = 0, _s.startAtVideo = 0, _s.playlistBottomHeight = 0, _s.maxPlaylistItems = 0, _s.totalPlaylists = 0, _s.thumbnailMaxWidth = 0, _s.buttonsMargins = 0, _s.nextAndPrevSetButtonsMargins = 0, _s.thumbnailMaxHeight = 0, _s.horizontalSpaceBetweenThumbnails = 0, _s.verticalSpaceBetweenThumbnails = 0, _s.buttonsToolTipHideDelay = 0, _s.thumbnailWidth = 0, _s.thumbnailHeight = 0, _s.timeOffsetTop = 0, _s.embedWindowCloseButtonMargins = 0, _s.plsCache_ar = [], _s.isMbl = FWDUVPUtils.isMobile, _s.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, _s.init = function() {
			_s.parseProperties()
		}, _s.parseProperties = function() {
			if (_s.useHEX = _s.props.useHEXColorsForSkin, _s.useHEX = "yes" == _s.useHEX, -1 != location.protocol.indexOf("file:") && (_s.useHEX = !1), _s.categoriesId_str = _s.props.playlistsId, !_s.categoriesId_str) return void setTimeout(function() {
				if (null != _s) {
					_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "The <font color='#ff0000'>playlistsId</font> property is not defined in the constructor function!"
					})
				}
			}, 50);
			if (_s.mainFolderPath_str = _s.props.mainFolderPath, !_s.mainFolderPath_str) return void setTimeout(function() {
				if (null != _s) {
					_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "The <font color='#ff0000'>mainFolderPath</font> property is not defined in the constructor function!"
					})
				}
			}, 50);
			if (_s.mainFolderPath_str.lastIndexOf("/") + 1 != _s.mainFolderPath_str.length && (_s.mainFolderPath_str += "/"), _s.sknPth = _s.props.skinPath, !_s.sknPth) return void setTimeout(function() {
				if (null != _s) {
					_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "The <font color='#ff0000'>skinPath</font> property is not defined in the constructor function!"
					})
				}
			}, 50);
			if (_s.sknPth.lastIndexOf("/") + 1 != _s.sknPth.length && (_s.sknPth += "/"), _s.sknPth = _s.mainFolderPath_str + _s.sknPth, _s.flashPath_str = _s.mainFolderPath_str + "flashlsChromeless.swf", _s.flashCopyToCBPath_str = _s.mainFolderPath_str + "cb.swf", _s.proxyPath_str = _s.mainFolderPath_str + "proxy.php", _s.proxyFolderPath_str = _s.mainFolderPath_str + "proxyFolder.php", _s.mailPath_str = _s.mainFolderPath_str + "sendMail.php", _s.sendToAFriendPath_str = _s.mainFolderPath_str + "sendMailToAFriend.php", _s.videoDownloaderPath_str = _s.mainFolderPath_str + "downloader.php", _s.handPath_str = _s.sknPth + "hand.cur", _s.grabPath_str = _s.sknPth + "grab.cur", -1 != _s.sknPth.indexOf("white") && (_s.isWhite = !0), _s.categories_el = document.getElementById(_s.categoriesId_str), !_s.categories_el) return void setTimeout(function() {
				if (null != _s) {
					var e = "The playlist with the id <font color='#ff0000'>" + _s.categoriesId_str + "</font> is not found!";
					_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: e
					})
				}
			}, 50);
			var e = FWDUVPUtils.getChildren(_s.categories_el);
			if (_s.totalCats = e.length, 0 == _s.totalCats) return void setTimeout(function() {
				if (null != _s) {
					_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "At least one playlist is required!"
					})
				}
			}, 50);
			for (var t = 0; t < _s.totalCats; t++) {
				var o = {},
					s = null,
					n = e[t];
				if (!FWDUVPUtils.hasAttribute(n, "data-source")) return void setTimeout(function() {
					null == _s || _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "Attribute <font color='#ff0000'>data-source</font> is required in the plalists html element at position <font color='#ff0000'>" + (t + 1)
					})
				}, 50);
				if (!FWDUVPUtils.hasAttribute(n, "data-thumbnail-path")) return void setTimeout(function() {
					null == _s || _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "Attribute <font color='#ff0000'>data-thumbnail-path</font> is required in the playlists html element at position <font color='#ff0000'>" + (t + 1)
					})
				}, 50);
				o.source = FWDUVPUtils.getAttributeValue(n, "data-source"), s = -1 == o.source.indexOf("=") && -1 == o.source.indexOf(".xml") && -1 == o.source.indexOf("vimeo.com") && -1 == o.source.indexOf("youtube.") ? document.getElementById(o.source) : o.source, _s.catsRef_ar.push(s), o.thumbnailPath = FWDUVPUtils.getAttributeValue(n, "data-thumbnail-path"), o.htmlContent = n.innerHTML, o.htmlText_str = n.innerText, o.vimeoUserId = FWDUVPUtils.getAttributeValue(n, "data-user-id"), o.clientId = FWDUVPUtils.getAttributeValue(n, "data-client-id"), o.vimeoSecret = FWDUVPUtils.getAttributeValue(n, "data-vimeo-secret"), o.vimeoToken = FWDUVPUtils.getAttributeValue(n, "data-vimeo-token"), o.playlistName = FWDUVPUtils.hasAttribute(n, "data-playlist-name") ? FWDUVPUtils.getAttributeValue(n, "data-playlist-name") : "not defined!", o.pass = FWDUVPUtils.getAttributeValue(n, "data-password"), _s.cats_ar[t] = o
			}
			for (var t = 0; t < _s.totalCats; t++) {
				var o = {},
					s = null;
				n = e[t], s = document.getElementById(FWDUVPUtils.getAttributeValue(n, "data-source"))
			}
			_s.startAtPlaylist = _s.props.startAtPlaylist || 0, isNaN(_s.startAtPlaylist) && (_s.startAtPlaylist = 0), 0 > _s.startAtPlaylist ? _s.startAtPlaylist = 0 : _s.startAtPlaylist > _s.totalCats - 1 && (_s.startAtPlaylist = _s.totalCats - 1), _s.playlistBottomHeight = _s.props.playlistBottomHeight || 0, _s.playlistBottomHeight = Math.min(800, _s.playlistBottomHeight), _s.subtitlesOffLabel_str = _s.props.subtitlesOffLabel || "Subtitle off", _s.videoSourcePath_str = _s.props.videoSourcePath || void 0, _s.timeColor_str = _s.props.timeColor || "#FF0000", _s.youtubeQualityButtonNormalColor_str = _s.props.youtubeQualityButtonNormalColor || "#FF0000", _s.youtubeQualityButtonSelectedColor_str = _s.props.youtubeQualityButtonSelectedColor || "#FF0000", _s.posterBackgroundColor_str = _s.props.posterBackgroundColor || "transparent", _s.showPlaylistButtonAndPlaylist_bl = _s.props.showPlaylistButtonAndPlaylist, _s.showPlaylistButtonAndPlaylist_bl = "no" != _s.showPlaylistButtonAndPlaylist_bl, _s.showYoutubeRelAndInfo_bl = _s.props.showYoutubeRelAndInfo, _s.showYoutubeRelAndInfo_bl = "no" != _s.showYoutubeRelAndInfo_bl, _s.useResumeOnPlay_bl = _s.props.useResumeOnPlay, _s.useResumeOnPlay_bl = "yes" == _s.useResumeOnPlay_bl, _s.useResumeOnPlay_bl = _s.props.useResumeOnPlay, _s.useResumeOnPlay_bl = "yes" == _s.useResumeOnPlay_bl, _s.showOnlyThumbnail = _s.props.showOnlyThumbnail, _s.showOnlyThumbnail = "yes" == _s.showOnlyThumbnail, _s.showThumbnail_bl = _s.props.showThumbnail, _s.showThumbnail_bl = "no" != _s.showThumbnail_bl, _s.showOnlyThumbnail && (_s.showThumbnail_bl = !0), _s.showPlaylistOnFullScreen = _s.props.showPlaylistOnFullScreen, _s.showPlaylistOnFullScreen = "yes" == _s.showPlaylistOnFullScreen, _s.stopAfterLastVideoHasPlayed_bl = _s.props.stopAfterLastVideoHasPlayed, _s.stopAfterLastVideoHasPlayed_bl = "yes" == _s.stopAfterLastVideoHasPlayed_bl, _s.usePlaylistsSelectBox_bl = _s.props.usePlaylistsSelectBox, _s.usePlaylistsSelectBox_bl = "yes" == _s.usePlaylistsSelectBox_bl, _s.executeCuepointsOnlyOnce_bl = _s.props.executeCuepointsOnlyOnce, _s.executeCuepointsOnlyOnce_bl = "yes" == _s.executeCuepointsOnlyOnce_bl, _s.showPlaylistByDefault_bl = _s.props.showPlaylistByDefault, _s.showPlaylistByDefault_bl = "no" != _s.showPlaylistByDefault_bl, _s.playAfterVideoStop_bl = _s.props.playAfterVideoStop, _s.playAfterVideoStop_bl = "no" != _s.playAfterVideoStop_bl, _s.openerAlignment_str = _s.props.openerAlignment, _s.openerEqulizerOffsetTop = _s.props.openerEqulizerOffsetTop || 0, _s.openerEqulizerOffsetLeft = _s.props.openerEqulizerOffsetLeft || 0, _s.showOpener_bl = _s.props.showOpener, _s.showOpener_bl = "yes" == _s.showOpener_bl, _s.stickyOnScrollShowOpener_bl = _s.props.stickyOnScrollShowOpener, _s.stickyOnScrollShowOpener_bl = "yes" == _s.stickyOnScrollShowOpener_bl, _s.showOpenerPlayPauseButton_bl = _s.props.showOpenerPlayPauseButton, _s.showOpenerPlayPauseButton_bl = "yes" == _s.showOpenerPlayPauseButton_bl, _s.animate_bl = _s.props.animatePlayer, _s.animate_bl = "yes" == _s.animate_bl, _s.showChromecastButton_bl = _s.props.showChromecastButton, _s.showChromecastButton_bl = "yes" == _s.showChromecastButton_bl, (!FWDUVPUtils.isChrome || FWDUVPUtils.isLocal || -1 == location.href.indexOf("https:")) && (_s.showChromecastButton_bl = !1), _s.show360DegreeVideoVrButton_bl = _s.props.show360DegreeVideoVrButton, _s.show360DegreeVideoVrButton_bl = "yes" == _s.show360DegreeVideoVrButton_bl, _s.showAnnotationsPositionTool_bl = _s.props.showAnnotationsPositionTool, _s.showAnnotationsPositionTool_bl = "yes" == _s.showAnnotationsPositionTool_bl, _s.showAnnotationsPositionTool_bl && (_s.showPlaylistByDefault_bl = !1), _s.showPlaylistName_bl = _s.props.showPlaylistName, _s.showPlaylistName_bl = "no" != _s.showPlaylistName_bl, _s.showSearchInpt = _s.props.showSearchInput, _s.showSearchInpt = "no" != _s.showSearchInpt, _s.showSubByDflt = _s.props.showSubtitleByDefault, _s.showSubByDflt = "no" != _s.showSubByDflt, _s.showSubBtn = _s.props.showSubtitleButton, _s.showSubBtn = "no" != _s.showSubBtn, _s.forceDisableDownloadButtonForFolder_bl = _s.props.forceDisableDownloadButtonForFolder, _s.forceDisableDownloadButtonForFolder_bl = "yes" == _s.forceDisableDownloadButtonForFolder_bl, _s.nBC = _s.props.normalHEXButtonsColor || "#FFFFFF", _s.sBC = -1 == _s.sknPth.indexOf("dark") ? "#000000" : "#FFFFFF", _s.playlistPosition_str = _s.props.playlistPosition || "bottom";
			var a = "bottom" == _s.playlistPosition_str || "right" == _s.playlistPosition_str;
			a || (_s.playlistPosition_str = "right"), _s.folderVideoLabel_str = _s.props.folderVideoLabel || "Video ", _s.logoPosition_str = _s.props.logoPosition || "topleft", _s.logoPosition_str = (_s.logoPosition_str + "").toLowerCase(), a = "topleft" == _s.logoPosition_str || "topright" == _s.logoPosition_str || "bottomleft" == _s.logoPosition_str || "bottomright" == _s.logoPosition_str, a || (_s.logoPosition_str = "topleft"), _s.thumbnailSelectedType_str = _s.props.thumbnailSelectedType || "opacity", "blackAndWhite" != _s.thumbnailSelectedType_str && "threshold" != _s.thumbnailSelectedType_str && "opacity" != _s.thumbnailSelectedType_str && (_s.thumbnailSelectedType_str = "opacity"), (_s.isMbl || FWDUVPUtils.isIEAndLessThen9) && (_s.thumbnailSelectedType_str = "opacity"), "file:" == document.location.protocol && (_s.thumbnailSelectedType_str = "opacity"), _s.adsButtonsPosition_str = _s.props.adsButtonsPosition || "left", _s.adsButtonsPosition_str = (_s.adsButtonsPosition_str + "").toLowerCase(), a = "left" == _s.adsButtonsPosition_str || "right" == _s.adsButtonsPosition_str, a || (_s.adsButtonsPosition_str = "left"), _s.skipToVideoButtonText_str = _s.props.skipToVideoButtonText || "not defined", _s.skipToVideoText_str = _s.props.skipToVideoText, _s.adsTextNormalColor = _s.props.adsTextNormalColor || "#FF0000", _s.adsTextSelectedColor = _s.props.adsTextSelectedColor || "#FF0000", _s.adsBorderNormalColor_str = _s.props.adsBorderNormalColor || "#FF0000", _s.adsBorderSelectedColor_str = _s.props.adsBorderSelectedColor || "#FF0000", _s.volume = _s.props.volume, (null == _s.volume || isNaN(_s.volume)) && (_s.volume = 1), 1 < _s.volume ? _s.volume = 1 : 0 >= _s.volume && (_s.volume = 0), _s.rewTm = _s.props.rewindTime, (null == _s.rewTm || isNaN(_s.rewTm)) && (_s.rewTm = 10), 1 >= _s.rewTm && (_s.rewTm = 1), _s.buttonsToolTipFontColor_str = _s.props.buttonsToolTipFontColor || "#FF0000", _s.toolTipsButtonFontColor_str = _s.props.toolTipsButtonFontColor || "#FF0000", _s.shareAndEmbedTextColor_str = _s.props.shareAndEmbedTextColor || "#FF0000", _s.inputBackgroundColor_str = _s.props.inputBackgroundColor || "#FF0000", _s.inputColor_str = _s.props.inputColor || "#FF0000", _s.searchInputBackgroundColor_str = _s.props.searchInputBackgroundColor || "#FF0000", _s.borderColor_str = _s.props.borderColor || "#FF0000", _s.searchInputColor_str = _s.props.searchInputColor || "#FF0000", _s.youtubeAndFolderVideoTitleColor_str = _s.props.youtubeAndFolderVideoTitleColor || "#FF0000", _s.folderAudioSecondTitleColor_str = _s.props.folderAudioSecondTitleColor || "#666666", _s.youtubeDescriptionColor_str = _s.props.youtubeDescriptionColor || "#FF0000", _s.youtubeOwnerColor_str = _s.props.youtubeOwnerColor || "#FF0000", _s.secondaryLabelsColor_str = _s.props.secondaryLabelsColor || "#FF0000", _s.mainLabelsColor_str = _s.props.mainLabelsColor || "#FF0000", _s.playlistBackgroundColor_str = _s.props.playlistBackgroundColor || "#FF0000", _s.thumbnailNormalBackgroundColor_str = _s.props.thumbnailNormalBackgroundColor || "#FF0000", _s.playlistNameColor_str = _s.props.playlistNameColor || "#FF0000", _s.thumbnailHoverBackgroundColor_str = _s.props.thumbnailHoverBackgroundColor || "#FF0000", _s.thumbnailDisabledBackgroundColor_str = _s.props.thumbnailDisabledBackgroundColor || "#FF0000", _s.mainSelectorBackgroundSelectedColor = _s.props.mainSelectorBackgroundSelectedColor || "#FFFFFF", _s.mainSelectorTextNormalColor = _s.props.mainSelectorTextNormalColor || "#FFFFFF", _s.mainSelectorTextSelectedColor = _s.props.mainSelectorTextSelectedColor || "#000000", _s.mainButtonBackgroundNormalColor = _s.props.mainButtonBackgroundNormalColor || "#212021", _s.mainButtonBackgroundSelectedColor = _s.props.mainButtonBackgroundSelectedColor || "#FFFFFF", _s.mainButtonTextNormalColor = _s.props.mainButtonTextNormalColor || "#FFFFFF", _s.mainButtonTextSelectedColor = _s.props.mainButtonTextSelectedColor || "#000000", _s.logoLink_str = _s.props.logoLink || "none", _s.startAtVideo = parseInt(_s.props.startAtVideo) || 0, _s.audioVisualizerLinesColor_str = _s.props.audioVisualizerLinesColor || "#0099FF", _s.audioVisualizerCircleColor_str = _s.props.audioVisualizerCircleColor || "#FFFFFF", _s.privateVideoPassword_str = _s.props.privateVideoPassword, _s.youtubeAPIKey = _s.props.youtubeAPIKey || "AIzaSyCgbixU3aIWCkiZ76h_E-XpEGig5mFhnVY", _s.contextMenuBackgroundColor_str = _s.props.contextMenuBackgroundColor || "#000000", _s.contextMenuBorderColor_str = _s.props.contextMenuBorderColor || "#FF0000", _s.contextMenuSpacerColor_str = _s.props.contextMenuSpacerColor || "#FF0000", _s.contextMenuItemNormalColor_str = _s.props.contextMenuItemNormalColor || "#FF0000", _s.contextMenuItemSelectedColor_str = _s.props.contextMenuItemSelectedColor || "#FF0000", _s.contextMenuItemDisabledColor_str = _s.props.contextMenuItemDisabledColor || "#FF0000", _s.showScriptDeveloper_bl = _s.props.showScriptDeveloper, _s.showScriptDeveloper_bl = "yes" == _s.showScriptDeveloper_bl, _s.showContextmenu_bl = _s.props.showContextmenu, _s.showContextmenu_bl = "no" != _s.showContextmenu_bl, _s.useFingerPrintStamp = _s.props.useFingerPrintStamp, _s.useFingerPrintStamp = "yes" == _s.useFingerPrintStamp, window.fwduvpFingerPrintStamp || (_s.useFingerPrintStamp = !1), _s.frequencyOfFingerPrintStamp = _s.props.frequencyOfFingerPrintStamp || 5e3, _s.durationOfFingerPrintStamp = _s.props.durationOfFingerPrintStamp || 400, _s.nextAndPrevSetButtonsMargins = _s.props.nextAndPrevSetButtonsMargins || 0, _s.buttonsMargins = _s.props.buttonsMargins || 0, _s.thumbnailMaxWidth = _s.props.thumbnailMaxWidth || 330, _s.thumbnailMaxHeight = _s.props.thumbnailMaxHeight || 330, _s.horizontalSpaceBetweenThumbnails = _s.props.horizontalSpaceBetweenThumbnails, _s.verticalSpaceBetweenThumbnails = _s.props.verticalSpaceBetweenThumbnails, _s.totalPlaylists = _s.cats_ar.length, _s.controllerHeight = _s.props.controllerHeight || 50, _s.startSpaceBetweenButtons = _s.props.startSpaceBetweenButtons || 0, _s.controllerHideDelay = _s.props.controllerHideDelay || 2, _s.controllerHideDelay *= 1e3, _s.spaceBetweenButtons = _s.props.spaceBetweenButtons || 0, _s.scrubbersOffsetWidth = _s.props.scrubbersOffsetWidth || 0, _s.mainScrubberOffestTop = _s.props.mainScrubberOffestTop || 0, _s.volumeScrubberOffsetTopWidth = _s.props.volumeScrubberOffsetTopWidth || 0, _s.timeOffsetLeftWidth = _s.props.timeOffsetLeftWidth || 0, _s.timeOffsetRightWidth = _s.props.timeOffsetRightWidth || 0, _s.timeOffsetTop = _s.props.timeOffsetTop || 0, _s.embedWindowCloseButtonMargins = _s.props.embedAndInfoWindowCloseButtonMargins || 0, _s.logoMargins = _s.props.logoMargins || 0, _s.maxPlaylistItems = _s.props.maxPlaylistItems || 50, _s.volumeScrubberHeight = _s.props.volumeScrubberHeight || 10, _s.volumeScrubberOfsetHeight = _s.props.volumeScrubberOfsetHeight || 0, 200 < _s.volumeScrubberHeight && (_s.volumeScrubberHeight = 200), _s.buttonsToolTipHideDelay = _s.props.buttonsToolTipHideDelay || 1.5, _s.thumbnailWidth = _s.props.thumbnailWidth || 80, _s.thumbnailHeight = _s.props.thumbnailHeight || 80, _s.spaceBetweenThumbnails = _s.props.spaceBetweenThumbnails || 0, _s.timeOffsetTop = _s.props.timeOffsetTop || 0, _s.scrollbarOffestWidth = _s.props.scrollbarOffestWidth || 0, _s.scollbarSpeedSensitivity = _s.props.scollbarSpeedSensitivity || .5, _s.facebookAppId_str = _s.props.facebookAppId, _s.aopwBorderSize = _s.props.aopwBorderSize || 0, _s.aopwTitle = _s.props.aopwTitle || "Advertisement", _s.aopwTitleColor_str = _s.props.aopwTitleColor || "#FFFFFF", _s.aopwWidth = _s.props.aopwWidth || 200, _s.aopwHeight = _s.props.aopwHeight || 200, _s.fillEntireVideoScreen_bl = _s.props.fillEntireVideoScreen, _s.fillEntireVideoScreen_bl = "yes" == _s.fillEntireVideoScreen_bl, _s.fillEntireposterScreen_bl = _s.props.fillEntireposterScreen, _s.fillEntireposterScreen_bl = "yes" == _s.fillEntireposterScreen_bl, _s.goFullScreenOnPlay_bl = _s.props.goFullScreenOnButtonPlay, _s.goFullScreenOnPlay_bl = "yes" == _s.goFullScreenOnPlay_bl, _s.showContextMenu_bl = _s.props.showContextMenu, _s.showContextMenu_bl = "no" != _s.showContextMenu_bl, _s.showController_bl = _s.props.showController, _s.showController_bl = "no" != _s.showController_bl, _s.showButtonsToolTip_bl = _s.props.showButtonsToolTips, _s.showButtonsToolTip_bl = "no" != _s.showButtonsToolTip_bl, _s.isMbl && (_s.showButtonsToolTip_bl = !1), _s.addKeyboardSupport_bl = _s.props.addKeyboardSupport, _s.addKeyboardSupport_bl = "no" != _s.addKeyboardSupport_bl, _s.playsinline = "yes" == _s.props.playsinline, _s.useAToB = "yes" == _s.props.useAToB, _s.atbTimeBackgroundColor = _s.props.atbTimeBackgroundColor || "transparent", _s.atbTimeTextColorNormal = _s.props.atbTimeTextColorNormal || "#888888", _s.atbTimeTextColorSelected = _s.props.atbTimeTextColorSelected || "#FFFFFF", _s.atbButtonTextNormalColor = _s.props.atbButtonTextNormalColor || "#888888", _s.atbButtonTextSelectedColor = _s.props.atbButtonTextSelectedColor || "#FFFFFF", _s.atbButtonBackgroundNormalColor = _s.props.atbButtonBackgroundNormalColor || "#FFFFFF", _s.atbButtonBackgroundSelectedColor = _s.props.atbButtonBackgroundSelectedColor || "#000000", _s.addMouseWheelSupport_bl = _s.props.addMouseWheelSupport, _s.addMouseWheelSupport_bl = "no" != _s.addMouseWheelSupport_bl, _s.addScrOnMM_bl = _s.props.addScrollOnMouseMove, _s.addScrOnMM_bl = "yes" == _s.addScrOnMM_bl, _s.showPlaylistsSearchInput_bl = _s.props.showPlaylistsSearchInput, _s.showPlaylistsSearchInput_bl = "yes" == _s.showPlaylistsSearchInput_bl, _s.scrubbersToolTipLabelBackgroundColor = _s.props.scrubbersToolTipLabelBackgroundColor || "#FFFFFF", _s.scrubbersToolTipLabelFontColor = _s.props.scrubbersToolTipLabelFontColor || "#000000", _s.autoPlay_bl = _s.props.autoPlay, _s.autoPlay_bl = "yes" == _s.autoPlay_bl, _s.autoPlayText = _s.props.autoPlayText || "", _s.showNextAndPrevButtons_bl = _s.props.showNextAndPrevButtons, _s.showNextAndPrevButtons_bl = "no" != _s.showNextAndPrevButtons_bl, _s.showPlaylistsButtonAndPlaylists_bl = _s.props.showPlaylistsButtonAndPlaylists, _s.showPlaylistsButtonAndPlaylists_bl = "no" != _s.showPlaylistsButtonAndPlaylists_bl, _s.showEmbedButton_bl = _s.props.showEmbedButton, _s.showEmbedButton_bl = "no" != _s.showEmbedButton_bl, _s.showScrubberWhenControllerIsHidden_bl = _s.props.showScrubberWhenControllerIsHidden, _s.showScrubberWhenControllerIsHidden_bl = "no" != _s.showScrubberWhenControllerIsHidden_bl, _s.showMainScrubberToolTipLabel_bl = _s.props.showMainScrubberToolTipLabel, _s.showMainScrubberToolTipLabel_bl = "yes" == _s.showMainScrubberToolTipLabel_bl, _s.showPlaylistsByDefault_bl = _s.props.showPlaylistsByDefault, _s.showPlaylistsByDefault_bl = "yes" == _s.showPlaylistsByDefault_bl, _s.loop_bl = _s.props.loop, _s.loop_bl = "yes" == _s.loop_bl, _s.shuffle_bl = _s.props.shuffle, _s.shuffle_bl = "yes" == _s.shuffle_bl, _s.showLoopButton_bl = _s.props.showLoopButton, _s.showLoopButton_bl = "no" != _s.props.showLoopButton, _s.showShuffleButton_bl = _s.props.showShuffleButton, _s.showShuffleButton_bl = "no" != _s.props.showShuffleButton, _s.showDownloadVideoButton_bl = _s.props.showDownloadButton, _s.showDownloadVideoButton_bl = "no" != _s.showDownloadVideoButton_bl, _s.randomizePlaylist_bl = _s.props.randomizePlaylist, _s.randomizePlaylist_bl = "yes" == _s.randomizePlaylist_bl, _s.showDefaultControllerForVimeo_bl = _s.props.showDefaultControllerForVimeo, _s.showDefaultControllerForVimeo_bl = "yes" == _s.showDefaultControllerForVimeo_bl, _s.showInfoButton_bl = _s.props.showInfoButton, _s.showInfoButton_bl = "no" != _s.showInfoButton_bl, _s.showLogo_bl = _s.props.showLogo, _s.showLogo_bl = "yes" == _s.showLogo_bl, _s.hideLogoWithController_bl = _s.props.hideLogoWithController, _s.hideLogoWithController_bl = "yes" == _s.hideLogoWithController_bl, _s.showPoster_bl = _s.props.showPoster, _s.showPoster_bl = "yes" == _s.showPoster_bl, _s.useVectorIcons_bl = _s.props.useVectorIcons, _s.useVectorIcons_bl = "yes" == _s.useVectorIcons_bl, _s.showVolumeButton_bl = _s.props.showVolumeButton, _s.showVolumeButton_bl = "no" != _s.showVolumeButton_bl, _s.showVolumeScrubber_bl = _s.showVolumeButton_bl, _s.showControllerWhenVideoIsStopped_bl = _s.props.showControllerWhenVideoIsStopped, _s.showControllerWhenVideoIsStopped_bl = "yes" == _s.showControllerWhenVideoIsStopped_bl, _s.showNextAndPrevButtonsInController_bl = _s.props.showNextAndPrevButtonsInController, _s.showNextAndPrevButtonsInController_bl = "yes" == _s.showNextAndPrevButtonsInController_bl, _s.showTime_bl = _s.props.showTime, _s.showTime_bl = "no" != _s.showTime_bl, _s.shwPpoppAdClsBtn = _s.props.showPopupAdsCloseButton, _s.shwPpoppAdClsBtn = "no" != _s.shwPpoppAdClsBtn, _s.showRewindButton_bl = _s.props.showRewindButton, _s.showRewindButton_bl = "no" != _s.showRewindButton_bl, _s.disableVideoScrubber_bl = _s.props.disableVideoScrubber, _s.disableVideoScrubber_bl = "yes" == _s.disableVideoScrubber_bl, _s.showPlaybackRateButton_bl = _s.props.showPlaybackRateButton, _s.showPlaybackRateButton_bl = "yes" == _s.showPlaybackRateButton_bl, _s.defaultPlaybackRate_str = _s.props.defaultPlaybackRate, null == _s.defaultPlaybackRate_str && (_s.defaultPlaybackRate_str = 1), _s.defaultPlaybackRate_ar = ["0.25", "0.5", "1", "1.25", "1.5", "2"], _s.defaultPlaybackRate_ar.reverse();
			for (var d = !1, t = 0; t < _s.defaultPlaybackRate_ar.length; t++) _s.defaultPlaybackRate_ar[t] == _s.defaultPlaybackRate_str && (d = !0, _s.startAtPlaybackIndex = t);
			if (d || (_s.startAtPlaybackIndex = 3, _s.defaultPlaybackRate_str = _s.defaultPlaybackRate_ar[_s.startAtPlaybackIndex]), _s.showFullScreenButton_bl = _s.props.showFullScreenButton, _s.showFullScreenButton_bl = "no" != _s.showFullScreenButton_bl, _s.repeatBackground_bl = _s.props.repeatBackground, _s.repeatBackground_bl = "no" != _s.repeatBackground_bl, _s.playVideoOnlyWhenLoggedIn_bl = _s.props.playVideoOnlyWhenLoggedIn, _s.playVideoOnlyWhenLoggedIn_bl = "yes" == _s.playVideoOnlyWhenLoggedIn_bl, _s.playIfLoggedIn = _s.props.playIfLoggedIn, _s.playIfLoggedIn = "yes" == _s.playIfLoggedIn, _s.playIfLoggedInMessage = _s.props.playIfLoggedInMessage || "Please loggin", _s.showShareButton_bl = _s.props.showShareButton, _s.showShareButton_bl = "no" != _s.showShareButton_bl, _s.openNewPageAtTheEndOfTheAds_bl = _s.props.openNewPageAtTheEndOfTheAds, _s.openNewPageAtTheEndOfTheAds_bl = "yes" == _s.openNewPageAtTheEndOfTheAds_bl, _s.playAdsOnlyOnce_bl = _s.props.playAdsOnlyOnce, _s.playAdsOnlyOnce_bl = "yes" == _s.playAdsOnlyOnce_bl, _s.startAtRandomVideo_bl = _s.props.startAtRandomVideo, _s.startAtRandomVideo_bl = "yes" == _s.startAtRandomVideo_bl, _s.stopVideoWhenPlayComplete_bl = _s.props.stopVideoWhenPlayComplete, _s.stopVideoWhenPlayComplete_bl = "yes" == _s.stopVideoWhenPlayComplete_bl, _s.closeLightBoxWhenPlayComplete = _s.props.closeLightBoxWhenPlayComplete, _s.closeLightBoxWhenPlayComplete = "yes" == _s.closeLightBoxWhenPlayComplete, _s.showYoutubeQualityButton_bl = _s.props.showQualityButton, _s.showYoutubeQualityButton_bl = "no" != _s.showYoutubeQualityButton_bl, _s.showAudioTracksButton_bl = _s.props.showAudioTracksButton, _s.showAudioTracksButton_bl = "no" != _s.showAudioTracksButton_bl, _s.thumbnailsPreviewWidth = _s.props.thumbnailsPreviewWidth || 300, _s.thumbnailsPreviewHeight = _s.props.thumbnailsPreviewHeight || 168, _s.thumbnailsPreviewBackgroundColor = _s.props.thumbnailsPreviewBackgroundColor || "#000", _s.thumbnailsPreviewBorderColor = _s.props.thumbnailsPreviewBorderColor || "#333", _s.thumbnailsPreviewLabelBackgroundColor = _s.props.thumbnailsPreviewLabelBackgroundColor || "#FFF", _s.thumbnailsPreviewLabelFontColor = _s.props.thumbnailsPreviewLabelFontColor || "#000", _s.arrowN_str = _s.sknPth + "combobox-arrow-normal.png", _s.arrowS_str = _s.sknPth + "combobox-arrow-selected.png", _s.hlsPath_str = _s.mainFolderPath_str + "java/hls.js", _s.dashPath_str = _s.mainFolderPath_str + "java/dash.all.min.js", _s.threeJsPath_str = _s.mainFolderPath_str + "java/three.js", _s.threeJsControlsPath_str = _s.mainFolderPath_str + "java/threeControled.js", _s.isDark = !0, -1 == _s.sknPth.indexOf("dark") && (_s.isDark = !1), _s.logoPath_str = _s.sknPth + "logo.png", _s.adLinePat_str = _s.sknPth + "ad-line.png", _s.props.logoPath && (_s.logoPath_str = _s.props.logoPath), _s.mainScrubberDragLeftAddPath_str = _s.sknPth + "scrubber-left-drag-add.png", _s.mainScrubberDragMiddleAddPath_str = _s.sknPth + "scrubber-middle-drag-add.png", _s.mainPreloader_img = new Image, _s.mainPreloader_img.onerror = _s.onSkinLoadErrorHandler, _s.mainPreloader_img.onload = _s.onPreloaderLoadHandler, _s.mainPreloader_img.src = _s.sknPth + "preloader.jpg", _s.hdIcn = _s.sknPth + "hd.png", _s.skinPaths_ar = [{
					img: _s.skipIconPath_img = new Image,
					src: _s.sknPth + "skip-icon.png"
				}, {
					img: _s.mainScrubberBkLeft_img = new Image,
					src: _s.sknPth + "scrubber-left-background.png"
				}, {
					img: _s.mainScrubberDragLeft_img = new Image,
					src: _s.sknPth + "scrubber-left-drag.png"
				}, {
					img: _s.mainScrubberLine_img = new Image,
					src: _s.sknPth + "scrubber-line.png"
				}, {
					img: _s.progressLeft_img = new Image,
					src: _s.sknPth + "progress-left.png"
				}, {
					img: _s.volumeScrubberDragBottom_img = new Image,
					src: _s.sknPth + "volume-scrubber-bottom-drag.png"
				}, {
					img: _s.popwColseN_img = new Image,
					src: _s.sknPth + "popw-close-button.png"
				}, {
					img: _s.embedColoseN_img = new Image,
					src: _s.sknPth + "embed-close-button.png"
				}], _s.useVectorIcons_bl || (_s.skinPaths_ar.push({
					img: _s.prevN_img = new Image,
					src: _s.sknPth + "prev-video.png"
				}, {
					img: _s.nextN_img = new Image,
					src: _s.sknPth + "next-video.png"
				}, {
					img: _s.playN_img = new Image,
					src: _s.sknPth + "play.png"
				}, {
					img: _s.pauseN_img = new Image,
					src: _s.sknPth + "pause.png"
				}, {
					img: _s.volumeN_img = new Image,
					src: _s.sknPth + "volume.png"
				}, {
					img: _s.largePlayN_img = new Image,
					src: _s.sknPth + "large-play.png"
				}, {
					img: _s.categoriesN_img = new Image,
					src: _s.sknPth + "categories-button.png"
				}, {
					img: _s.replayN_img = new Image,
					src: _s.sknPth + "replay-button.png"
				}, {
					img: _s.shuffleN_img = new Image,
					src: _s.sknPth + "shuffle-button.png"
				}, {
					img: _s.fullScreenN_img = new Image,
					src: _s.sknPth + "full-screen.png"
				}, {
					img: _s.ytbQualityN_img = new Image,
					src: _s.sknPth + "youtube-quality.png"
				}, {
					img: _s.shareN_img = new Image,
					src: _s.sknPth + "share.png"
				}, {
					img: _s.facebookN_img = new Image,
					src: _s.sknPth + "facebook.png"
				}, {
					img: _s.infoN_img = new Image,
					src: _s.sknPth + "info-button.png"
				}, {
					img: _s.downloadN_img = new Image,
					src: _s.sknPth + "download-button.png"
				}, {
					img: _s.normalScreenN_img = new Image,
					src: _s.sknPth + "normal-screen.png"
				}, {
					img: _s.embedN_img = new Image,
					src: _s.sknPth + "embed.png"
				}, {
					img: _s.passColoseN_img = new Image,
					src: _s.sknPth + "embed-close-button.png"
				}, {
					img: _s.showSubtitleNPath_img = new Image,
					src: _s.sknPth + "show-subtitle-icon.png"
				}, {
					img: _s.hideSubtitleNPath_img = new Image,
					src: _s.sknPth + "hide-subtitle-icon.png"
				}, {
					img: _s.playbackRateNPath_img = new Image,
					src: _s.sknPth + "playback-rate-normal.png"
				}), _s.useAToB && _s.skinPaths_ar.push({
					img: _s.atbNPath_img = new Image,
					src: _s.sknPth + "a-to-b-button.png"
				})), (_s.showOpener_bl && prt.displayType == FWDUVPlayer.STICKY || _s.stickyOnScrollShowOpener_bl && prt.stickyOnScroll) && (_s.skinPaths_ar.push({
					img: _s.openerPauseN_img = new Image,
					src: _s.sknPth + "open-pause-button-normal.png"
				}, {
					img: _s.openerPlayN_img = new Image,
					src: _s.sknPth + "open-play-button-normal.png"
				}, {
					img: _s.animationPath_img = new Image,
					src: _s.sknPth + "equalizer.png"
				}, {
					img: _s.closeN_img = new Image,
					src: _s.sknPth + "opener-close.png"
				}, {
					img: _s.openTopN_img = new Image,
					src: _s.sknPth + "open-button-normal-top.png"
				}, {
					img: _s.openBottomN_img = new Image,
					src: _s.sknPth + "open-button-normal-bottom.png"
				}), _s.openerPauseS_str = _s.sknPth + "open-pause-button-selected.png", _s.openerPlayS_str = _s.sknPth + "open-play-button-selected.png", _s.openerAnimationPath_str = _s.sknPth + "equalizer.png", _s.openTopSPath_str = _s.sknPth + "open-button-selected-top.png", _s.openBottomSPath_str = _s.sknPth + "open-button-selected-bottom.png", _s.openTopSPath_str = _s.sknPth + "open-button-selected-top.png", _s.openBottomSPath_str = _s.sknPth + "open-button-selected-bottom.png", _s.closeSPath_str = _s.sknPth + "opener-close-over.png"), _s.showRewindButton_bl && (_s.skinPaths_ar.push({
					img: _s.rewindN_img = new Image,
					src: _s.sknPth + "rewind.png"
				}), _s.rewindSPath_str = _s.sknPth + "rewind-over.png"), _s.showInfoButton_bl && _s.skinPaths_ar.push({
					img: _s.infoWindowClooseN_img = new Image,
					src: _s.sknPth + "embed-close-button.png"
				}), _s.showNextAndPrevButtonsInController_bl && !_s.useVectorIcons_bl && _s.skinPaths_ar.push({
					img: _s.next2N_img = new Image,
					src: _s.sknPth + "next-video.png"
				}, {
					img: _s.prev2N_img = new Image,
					src: _s.sknPth + "prev-video.png"
				}), _s.show360DegreeVideoVrButton_bl && (_s.skinPaths_ar.push({
					img: _s.vr_img = new Image,
					src: _s.sknPth + "vr.png"
				}), _s.vrSPath_img = _s.sknPth + "vr-over.png"), _s.showAudioTracksButton_bl && (_s.skinPaths_ar.push({
					img: _s.at_img = new Image,
					src: _s.sknPth + "at.png"
				}), _s.atSPath_img = _s.sknPth + "at-over.png"), _s.showShareButton_bl && !_s.useVectorIcons_bl && (_s.skinPaths_ar.push({
					img: _s.shareClooseN_img = new Image,
					src: _s.sknPth + "embed-close-button.png"
				}, {
					img: _s.facebookN_img = new Image,
					src: _s.sknPth + "facebook.png"
				}, {
					img: _s.googleN_img = new Image,
					src: _s.sknPth + "google-plus.png"
				}, {
					img: _s.twitterN_img = new Image,
					src: _s.sknPth + "twitter.png"
				}, {
					img: _s.likedInkN_img = new Image,
					src: _s.sknPth + "likedin.png"
				}, {
					img: _s.bufferkN_img = new Image,
					src: _s.sknPth + "buffer.png"
				}, {
					img: _s.diggN_img = new Image,
					src: _s.sknPth + "digg.png"
				}, {
					img: _s.redditN_img = new Image,
					src: _s.sknPth + "reddit.png"
				}, {
					img: _s.thumbrlN_img = new Image,
					src: _s.sknPth + "thumbrl.png"
				}), _s.facebookSPath_str = _s.sknPth + "facebook-over.png", _s.googleSPath_str = _s.sknPth + "google-plus-over.png", _s.twitterSPath_str = _s.sknPth + "twitter-over.png", _s.likedInSPath_str = _s.sknPth + "likedin-over.png", _s.bufferSPath_str = _s.sknPth + "buffer-over.png", _s.diggSPath_str = _s.sknPth + "digg-over.png", _s.redditSPath_str = _s.sknPth + "reddit-over.png", _s.thumbrlSPath_str = _s.sknPth + "thumbrl-over.png"), _s.atbSPath_str = _s.sknPth + "a-to-b-button-over.png", _s.popwColseSPath_str = _s.sknPth + "popw-close-button-over.png", _s.popwWindowBackgroundPath_str = _s.sknPth + "popw-window-background.png", _s.popwBarBackgroundPath_str = _s.sknPth + "popw-bar-background.png", _s.playbackRateSPath_str = _s.sknPth + "playback-rate-selected.png", _s.prevSPath_str = _s.sknPth + "prev-video-over.png", _s.nextSPath_str = _s.sknPth + "next-video-over.png", _s.playSPath_str = _s.sknPth + "play-over.png", _s.pauseSPath_str = _s.sknPth + "pause-over.png", _s.bkMiddlePath_str = _s.sknPth + "controller-middle.png", _s.hdPath_str = _s.sknPth + "hd.png", _s.youtubeQualityArrowPath_str = _s.sknPth + "youtube-quality-arrow.png", _s.ytbQualityButtonPointerPath_str = _s.sknPth + "youtube-quality-pointer.png", _s.controllerBkPath_str = _s.sknPth + "controller-background.png", _s.skipIconSPath_str = _s.sknPth + "skip-icon-over.png", _s.adsBackgroundPath_str = _s.sknPth + "ads-background.png", _s.shareSPath_str = _s.sknPth + "share-over.png", _s.mainScrubberBkRightPath_str = _s.sknPth + "scrubber-right-background.png", _s.mainScrubberBkMiddlePath_str = _s.sknPth + "scrubber-middle-background.png", _s.mainScrubberDragMiddlePath_str = _s.sknPth + "scrubber-middle-drag.png", _s.volumeScrubberBkBottomPath_str = _s.sknPth + "volume-scrubber-bottom-background.png", _s.volumeScrubberBkMiddlePath_str = _s.sknPth + "volume-scrubber-middle-background.png", _s.volumeScrubberBkTopPath_str = _s.sknPth + "volume-scrubber-top-background.png", _s.volumeScrubberDragBottomPath_str = _s.sknPth + "volume-scrubber-bottom-drag.png", _s.volumeScrubberLinePath_str = _s.sknPth + "volume-scrubber-line.png", _s.volumeScrubberDragMiddlePath_str = _s.sknPth + "volume-scrubber-middle-drag.png", _s.volumeSPath_str = _s.sknPth + "volume-over.png", _s.volumeDPath_str = _s.sknPth + "volume-disabled.png", _s.categoriesSPath_str = _s.sknPth + "categories-button-over.png", _s.replaySPath_str = _s.sknPth + "replay-button-over.png", _s.toopTipBk_str = _s.sknPth + "tooltip-background.png", _s.toopTipPointer_str = _s.sknPth + "tooltip-pointer.png", _s.shufflePathS_str = _s.sknPth + "shuffle-button-over.png", _s.passButtonNPath_str = _s.sknPth + "pass-button.png", _s.passButtonSPath_str = _s.sknPth + "pass-button-over.png", _s.largePlayS_str = _s.sknPth + "large-play-over.png", _s.fullScreenSPath_str = _s.sknPth + "full-screen-over.png", _s.ytbQualitySPath_str = _s.sknPth + "youtube-quality-over.png", _s.ytbQualityDPath_str = _s.sknPth + "youtube-quality-hd.png", _s.facebookSPath_str = _s.sknPth + "facebook-over.png", _s.infoSPath_str = _s.sknPth + "info-button-over.png", _s.downloadSPath_str = _s.sknPth + "download-button-over.png", _s.normalScreenSPath_str = _s.sknPth + "normal-screen-over.png", _s.progressMiddlePath_str = _s.sknPth + "progress-middle.png", _s.embedPathS_str = _s.sknPth + "embed-over.png", _s.embedWindowClosePathS_str = _s.sknPth + "embed-close-button-over.png", _s.embedWindowInputBackgroundPath_str = _s.sknPth + "embed-window-input-background.png", _s.embedCopyButtonNPath_str = _s.sknPth + "embed-copy-button.png", _s.embedCopyButtonSPath_str = _s.sknPth + "embed-copy-button-over.png", _s.sendButtonNPath_str = _s.sknPth + "send-button.png", _s.sendButtonSPath_str = _s.sknPth + "send-button-over.png", _s.embedWindowBackground_str = _s.sknPth + "embed-window-background.png", _s.showSubtitleSPath_str = _s.sknPth + "show-subtitle-icon-over.png", _s.hideSubtitleSPath_str = _s.sknPth + "hide-subtitle-icon-over.png", _s.inputArrowPath_str = _s.sknPth + "input-arrow.png", _s.showPlaylistsButtonAndPlaylists_bl && (_s.skinPaths_ar.push({
					img: new Image,
					src: _s.sknPth + "categories-background.png"
				}), !_s.useVectorIcons_bl && _s.skinPaths_ar.push({
					img: _s.catNextN_img = new Image,
					src: _s.sknPth + "categories-next-button.png"
				}, {
					img: _s.catPrevN_img = new Image,
					src: _s.sknPth + "categories-prev-button.png"
				}, {
					img: _s.catCloseN_img = new Image,
					src: _s.sknPth + "categories-close-button.png"
				}), _s.catBkPath_str = _s.sknPth + "categories-background.png", _s.catThumbBkPath_str = _s.sknPth + "categories-thumbnail-background.png", _s.catThumbBkTextPath_str = _s.sknPth + "categories-thumbnail-text-backgorund.png", _s.catNextSPath_str = _s.sknPth + "categories-next-button-over.png", _s.catPrevSPath_str = _s.sknPth + "categories-prev-button-over.png", _s.catCloseSPath_str = _s.sknPth + "categories-close-button-over.png"), _s.poppAdClsNPth = _s.sknPth + "close-button-normal.png", _s.poppAdClsSPth = _s.sknPth + "close-button-selected.png", _s.annotationAddCloseNPath_str = _s.sknPth + "annotation-close-button-normal.png", _s.annotationAddCloseSPath_str = _s.sknPth + "annotation-close-button-selected.png", _s.showPlaylistButtonAndPlaylist_bl) {
				_s.playlistThumbnailsBkPath_str = _s.sknPth + "playlist-thumbnail-background.png", _s.playlistBkPath_str = _s.sknPth + "playlist-background.png", "bottom" == _s.playlistPosition_str ? (_s.skinPaths_ar.push({
					img: _s.hidePlaylistN_img = new Image,
					src: _s.sknPth + "hide-horizontal-playlist.png"
				}, {
					img: _s.showPlaylistN_img = new Image,
					src: _s.sknPth + "show-horizontal-playlist.png"
				}), _s.hidePlaylistSPath_str = _s.sknPth + "hide-horizontal-playlist-over.png", _s.showPlaylistSPath_str = _s.sknPth + "show-horizontal-playlist-over.png") : (_s.skinPaths_ar.push({
					img: _s.hidePlaylistN_img = new Image,
					src: _s.sknPth + "hide-vertical-playlist.png"
				}, {
					img: _s.showPlaylistN_img = new Image,
					src: _s.sknPth + "show-vertical-playlist.png"
				}), _s.hidePlaylistSPath_str = _s.sknPth + "hide-vertical-playlist-over.png", _s.showPlaylistSPath_str = _s.sknPth + "show-vertical-playlist-over.png"), _s.skinPaths_ar.push({
					img: _s.scrBkTop_img = new Image,
					src: _s.sknPth + "playlist-scrollbar-background-top.png"
				}, {
					img: _s.scrDragTop_img = new Image,
					src: _s.sknPth + "playlist-scrollbar-drag-top.png"
				}, {
					img: _s.scrLinesN_img = new Image,
					src: _s.sknPth + "playlist-scrollbar-lines.png"
				}), _s.scrBkMiddlePath_str = _s.sknPth + "playlist-scrollbar-background-middle.png", _s.scrBkBottomPath_str = _s.sknPth + "playlist-scrollbar-background-bottom.png", _s.scrDragMiddlePath_str = _s.sknPth + "playlist-scrollbar-drag-middle.png", _s.scrDragBottomPath_str = _s.sknPth + "playlist-scrollbar-drag-bottom.png", _s.scrLinesSPath_str = _s.sknPth + "playlist-scrollbar-lines-over.png", _s.inputArrowPath_str = _s.sknPth + "input-arrow.png"
			}
			_s.showChromecastButton_bl && (_s.skinPaths_ar.push({
				img: _s.castN_img = new Image,
				src: _s.sknPth + "cast.png"
			}, {
				img: _s.uncastN_img = new Image,
				src: _s.sknPth + "uncast.png"
			}), _s.castSPath_str = _s.sknPth + "cast-over.png", _s.uncastSPath_str = _s.sknPth + "uncast-over.png"), _s.totalGraphics = _s.skinPaths_ar.length
		}, _s.onPreloaderLoadHandler = function() {
			_s.countLoadedSCript = 0, _s.scripts = [], _s.useAToB && _s.scripts.push("FWDUVPATB.js"), _s.thumbnailsPreview && _s.scripts.push("FWDUVPThumbnailsPreview.js"), _s.showChromecastButton_bl && (_s.scripts.push("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"), _s.scripts.push("FWDUVPCC.js")), _s.useFingerPrintStamp && _s.scripts.push("FWDUVPFPS.js"), _s.totalScripts = _s.scripts.length, _s.dispatchEvent(FWDUVPData.PRELOADER_LOAD_DONE), _s.loadPlugin()
		}, _s.loadPlugin = function() {
			if (_s.countLoadedSCript == _s.totalScripts) _s.loadSkin();
			else {
				var e = document.createElement("script"),
					t = _s.scripts[_s.countLoadedSCript];
				t += /\?/.test(t) ? "&version=" + FWDUVPlayer.V : "?version=" + FWDUVPlayer.V, document.head.appendChild(e), e.src = -1 == t.indexOf("gstatic") ? _s.mainFolderPath_str + "java/" + t : t, e.onload = _s.loadPlugin, e.onerror = function(o) {
					console.log(o), "FWDUVPFPS.js" == t ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "You have enabled the FingerPrintstamp plugin, the fingerpintstamp js file named <font color=\"#FF0000\">FWDUVPFPS.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color=\"#FF0000\">FWDUVPFPS.js</font> file. "
					}) : "FWDUVPATB.js" == t ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "You have enabled the A to B plugin, the A to B js file named <font color=\"#FF0000\">FWDUVPATB.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color=\"#FF0000\">FWDUVPATB.js</font> file. "
					}) : "FWDUVPThumbnailsPreview.js" == t ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "You have enabled the thumbnal preview plugin, the thumbnail preview js file named <font color=\"#FF0000\">FWDUVPThumbnailsPreview.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color=\"#FF0000\">FWDUVPThumbnailsPreview.js</font> file. "
					}) : "FWDUVPCC.js" == t ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "You have enabled the chromecast plugin, the js file named <font color=\"#FF0000\">FWDUVPCC.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color=\"#FF0000\">FWDUVPCC.js</font> file."
					}) : -1 != t.indexOf("gstatic.js") && _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "Choromecast framework javascript file can't be loaded<font color=\"#FF0000\"> " + t + " </font>"
					})
				}
			}
			_s.countLoadedSCript++
		}, _s.countImaLoadedSCript = 0, _s.startToLoadIMA = function() {
			_s.imaScripts || (_s.imaScripts = ["//imasdk.googleapis.com/js/sdkloader/ima3.js", _s.mainFolderPath_str + "java/FWDUVPIMA.js"], _s.totalImaScripts = _s.imaScripts.length, _s.loadIMA())
		}, _s.loadIMA = function() {
			if (_s.countImaLoadedSCript == _s.totalImaScripts) _s.imaReady = !0, _s.dispatchEvent(FWDUVPData.IMA_READY);
			else {
				var e = document.createElement("script"),
					t = _s.imaScripts[_s.countImaLoadedSCript];
				document.head.appendChild(e), e.src = t, e.onload = _s.loadIMA, e.onerror = function() {
					1 == _s.countImaLoadedSCript ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "IMA SDK can't be loaded"
					}) : 2 == _s.countImaLoadedSCript && _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "IMA file <font color=\"#FF0000\">FWDUVPIMA.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color=\"#FF0000\">FWDUVPIMA.js</font> file. "
					}), _s.dispatchEvent(FWDUVPData.IMA_ERROR)
				}, _s.countImaLoadedSCript++
			}
		}, _s.loadSkin = function() {
			for (var e = 0, t, o; e < _s.totalGraphics; e++) t = _s.skinPaths_ar[e].img, o = _s.skinPaths_ar[e].src, t.onload = _s.onSkinLoadHandler, t.onerror = _s.onSkinLoadErrorHandler, t.src = o
		}, _s.onSkinLoadHandler = function() {
			_s.countLoadedSkinImages++, _s.countLoadedSkinImages == _s.totalGraphics && (_s.showOnlyThumbnail && (_s.thumbnailWidth -= _s.scrBkTop_img.width, _s.showSearchInpt = !1), setTimeout(function() {
				_s.dispatchEvent(FWDUVPData.SKIN_LOAD_COMPLETE)
			}, 50))
		}, _s.onSkinLoadErrorHandler = function(t) {
			var e;
			e = FWDUVPUtils.isIEAndLessThen9 ? "Graphics image not found!" : "The skin icon with label <font color='#ff0000'>" + t.target.src + "</font> can't be loaded, check path!", window.console && console.log(t);
			var o = {
				text: e
			};
			setTimeout(function() {
				_s.dispatchEvent(FWDUVPData.LOAD_ERROR, o)
			}, 50)
		}, _s.downloadVideo = function(e, t) {
			if (FWDUVPUtils.isLocal) {
				_s.isPlaylistDispatchingError_bl = !0;
				var o = setTimeout(function() {
					_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "Downloading video files local is not allowed or possible! To function properly please test online."
					}), _s.isPlaylistDispatchingError_bl = !1
				}, 50);
				return
			}
			if (!e) {
				_s.isPlaylistDispatchingError_bl = !0;
				var o = setTimeout(function() {
					_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "Not allowed to download _s video!"
					}), _s.isPlaylistDispatchingError_bl = !1
				}, 50);
				return
			}
			if (!e.match(/\.mp3|\.mp4/ig)) {
				_s.isPlaylistDispatchingError_bl = !0;
				var o = setTimeout(function() {
					_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "Only mp4 video files hosted on your server can be downloaded."
					}), _s.isPlaylistDispatchingError_bl = !1
				}, 50);
				return
			}
			var s = e,
				n = location.origin,
				i = location.pathname; - 1 != i.indexOf(".") && (i = i.substr(0, i.lastIndexOf("/") + 1));
			var a = -1 == e.indexOf("http:") && -1 == e.indexOf("https:");
			if (a && (e = n + i + e), !!t) {
				t = decodeURIComponent(t), t = t.replace(/[^A-Z0-9\-\_\.]+/ig, "_"), e = FWDUVPUtils.getValidSource(e);
				var d = _s.videoDownloaderPath_str;
				if (_s.dlIframe || (_s.dlIframe = document.createElement("IFRAME"), _s.dlIframe.style.display = "none", document.documentElement.appendChild(_s.dlIframe)), _s.isMbl && !FWDUVPUtils.isAndroid) {
					if (_s.openDownloadLinkOnMobile_bl) return void window.open(s, "_blank");
					var r = _s.getValidEmail();
					if (!r) return;
					if (null != _s.emailXHR) {
						try {
							_s.emailXHR.abort()
						} catch (t) {}
						_s.emailXHR.onreadystatechange = null, _s.emailXHR.onerror = null, _s.emailXHR = null
					}
					return _s.emailXHR = new XMLHttpRequest, _s.emailXHR.onreadystatechange = function() {
						4 == _s.emailXHR.readyState && (200 == _s.emailXHR.status ? "sent" == _s.emailXHR.responseText ? alert("Email sent.") : alert("Error sending email, _s is a server side error, the php file can't send the email!") : alert("Error sending email: " + _s.emailXHR.status + ": " + _s.emailXHR.statusText))
					}, _s.emailXHR.onerror = function(t) {
						try {
							window.console && console.log(t), window.console && console.log(t.message)
						} catch (t) {}
						alert("Error sending email: " + t.message)
					}, _s.emailXHR.open("get", _s.mailPath_str + "?mail=" + r + "&name=" + t + "&path=" + e, !0), void _s.emailXHR.send()
				}
				_s.dlIframe.src = d + "?path=" + e + "&name=" + t
			}
		}, _s.getValidEmail = function() {
			for (var e = prompt("Please enter your email address where the video download link will be sent:"); !/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e) || "" == e;) {
				if (null === e) return;
				e = prompt("Please enter a valid email address:")
			}
			return e
		}, _s.loadPlaylist = function(e) {
			if (_s.id = e, _s.playlist_ar = void 0, _s.stopToLoadPlaylist(), !_s.isPlaylistDispatchingError_bl) {
				clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to);
				var t = _s.catsRef_ar[e];
				if (void 0 === t) {
					_s.isPlaylistDispatchingError_bl = !0;
					var o = setTimeout(function() {
						_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
							text: "<font color='#ff0000'>loadPlaylist()</font> - Please specify a DOM playlist id or youtube playlist id!"
						}), _s.isPlaylistDispatchingError_bl = !1
					}, 50);
					return
				}
				if (null === t) {
					_s.isPlaylistDispatchingError_bl = !0;
					var o = setTimeout(function() {
						_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
							text: "The playlist with id <font color='#ff0000'>" + _s.cats_ar[e].source + "</font> is not found in the DOM."
						}), _s.isPlaylistDispatchingError_bl = !1
					}, 50);
					return
				}
				if (!isNaN(t)) {
					_s.isPlaylistDispatchingError_bl = !0;
					var o = setTimeout(function() {
						_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
							text: "<font color='#ff0000'>loadPlaylist()</font> - The parameter must be of type string!"
						}), _s.isPlaylistDispatchingError_bl = !1
					}, 50);
					return
				}
				if (_s.resetYutubeVimeoPlaylistLoader(), _s.isYoutbe_bl = !1, _s.loadFromFolder_bl = !1, _s.isVimeoAlbum_bl = !1, _s.playlist_ar = [], _s.playlistPass = _s.cats_ar[e].pass, !t.length) _s.parseDOMPlaylist(t, _s.cats_ar[e].source);
				else if (-1 != t.indexOf("list=") || -1 != t.indexOf("youtube.")) _s.isYoutbe_bl = !0, _s.playlist_ar = _s.plsCache_ar[_s.id], _s.playlist_ar ? _s.youtubePlLoadComplete() : _s.loadYoutubePlaylist(t);
				else if (-1 != t.indexOf("vimeo.com")) _s.isVimeo_bl = !0, _s.loadVimeoPlaylist(t, _s.cats_ar[e].vimeoUserId, _s.cats_ar[e].clientId, _s.cats_ar[e].vimeoSecret, _s.cats_ar[e].vimeoToken);
				else {
					if (-1 != t.indexOf("list=")) {
						_s.isPlaylistDispatchingError_bl = !0;
						var o = setTimeout(function() {
							_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
								text: "Loading youtube playlist is only possible by setting <font color='#ff0000'>useYoutube=\"yes\"</font>."
							}), _s.isPlaylistDispatchingError_bl = !1
						}, 50);
						return
					} - 1 == t.indexOf("folder=") ? (-1 != t.indexOf(".xml") || -1 != t.indexOf("http:") || -1 != t.indexOf("https:") || -1 != t.indexOf("www.")) && _s.loadXMLPlaylist(t) : _s.loadFolderPlaylist(t)
				}
			}
		}, _s.loadXMLPlaylist = function(e) {
			if (!_s.isPlaylistDispatchingError_bl) {
				if ("file:" == document.location.protocol) {
					_s.isPlaylistDispatchingError_bl = !0;
					setTimeout(function() {
						_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
							text: "Loading XML files local is not allowed or possible!. To function properly please test online."
						}), _s.isPlaylistDispatchingError_bl = !1
					}, 50);
					return
				}
				_s.sourceURL_str = e, _s.xhr = new XMLHttpRequest, _s.xhr.onreadystatechange = _s.ajaxOnLoadHandler, _s.xhr.onerror = _s.ajaxOnErrorHandler;
				try {
					_s.xhr.open("get", _s.proxyPath_str + "?url=" + _s.sourceURL_str + "&rand=" + parseInt(99999999 * Math.random()), !0), _s.xhr.setRequestHeader("Content-Type", "text/xml"), _s.xhr.send()
				} catch (o) {
					var t = o;
					o && o.message && (t = o.message), _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "XML file can't be loaded! <font color='#ff0000'>" + _s.sourceURL_str + "</font>. " + t
					})
				}
			}
		}, _s.loadFolderPlaylist = function(e) {
			if (!_s.isPlaylistDispatchingError_bl) {
				if ("file:" == document.location.protocol) {
					_s.isPlaylistDispatchingError_bl = !0;
					setTimeout(function() {
						_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
							text: "Creating a video playlist from a folder is not allowed or possible local! To function properly please test online."
						}), _s.isPlaylistDispatchingError_bl = !1
					}, 50);
					return
				}
				_s.loadFromFolder_bl = !0, _s.sourceURL_str = e.substr(e.indexOf("=") + 1), _s.xhr = new XMLHttpRequest, _s.xhr.onreadystatechange = _s.ajaxOnLoadHandler, _s.xhr.onerror = _s.ajaxOnErrorHandler;
				try {
					_s.xhr.open("get", _s.proxyFolderPath_str + "?dir=" + encodeURIComponent(_s.sourceURL_str) + "&videoLabel=" + _s.folderVideoLabel_str + "&rand=" + parseInt(9999999 * Math.random()), !0), _s.xhr.send()
				} catch (o) {
					var t = o;
					o && o.message && (t = o.message), _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "Please make sure the folder exists and it has video or audio files in it: <font color='#ff0000'>" + encodeURIComponent(_s.sourceURL_str) + "</font>"
					})
				}
			}
		}, _s.loadVimeoPlaylist = function(e, t, o, s, n) {
			if ("file:" == document.location.protocol) {
				_s.isPlaylistDispatchingError_bl = !0;
				setTimeout(function() {
					_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "Loading Vimeo albums local is not allowed or possible! To function properly please test online."
					}), _s.isPlaylistDispatchingError_bl = !1
				}, 50);
				return
			}
			_s.isVimeoAlbum_bl = !0, e && (_s.vimeoAlbumURL = e), t && (_s.userId = t), o && (_s.clientId = o), s && (_s.vimeoSecret = s), n && (_s.vimeoToken = n);
			var i = _s.vimeoAlbumURL.match(/\/[\d]+/ig);
			i = i[0].substr(1);
			var a = "";
			_s.clientId && (a = "&client_id=" + _s.clientId + "&vimeo_secret=" + _s.vimeoSecret + "&vimeo_token=" + _s.vimeoToken), _s.sourceURL_str = _s.nextPageToken_str ? _s.mainFolderPath_str + "vimeo/data.php?rand=" + Math.round(99999999 * Math.random()) + "&type=vimeo_user_album&user=" + _s.userId + "&album_id=" + i + "&page=" + _s.nextPageToken_str + "&per_page=50" + a : _s.mainFolderPath_str + "vimeo/data.php?rand=" + Math.round(99999999 * Math.random()) + "&type=vimeo_user_album&user=" + _s.userId + "&album_id=" + i + "&page=1&per_page=50" + a, _s.xhr = new XMLHttpRequest, _s.xhr.onreadystatechange = _s.ajaxOnLoadHandler, _s.xhr.onerror = _s.ajaxOnErrorHandler;
			try {
				_s.xhr.open("get", _s.sourceURL_str, !0), _s.xhr.send()
			} catch (t) {
				var d = t;
				t && t.message && (d = t.message), _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
					text: "Error loading vimeo album! <font color='#ff0000'>" + _s.vimeoAlbumURL + "</font>"
				})
			}
		}, _s.parseVimeoPlaylist = function(e) {
			if (_s.stopToLoadPlaylist(), e.body.error) return void _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
				text: e.body.error + " " + e.body.developer_message
			});
			e = e.body;
			var t, o;
			_s.vimeoObject_ar || (_s.vimeoObject_ar = []);
			for (var s = 0; s < e.data.length; s++) _s.vimeoObject_ar.push(e.data[s]);
			if (t = _s.vimeoObject_ar.length, e.paging.next) return _s.nextPageToken_str = +e.page + 1, void _s.loadVimeoPlaylist();
			for (var s = 0, n; s < t; s++) {
				n = {}, o = _s.vimeoObject_ar[s];
				var a = o.uri.match(/\/[\d]+/ig)[0].substr(1);
				n.startAtVideo = 0, n.videoSource = [{
					source: "https://vimeo.com/" + a
				}], n.atb = "yes", n.gaStr = o.name, n.title = "<p class='ytbChangeColor fwduvp-ytb-info-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + ";'>" + o.name + "</p>";
				var d = o.description;
				d || (d = ""), d = 165 < n.title.length ? d.substr(0, 60) : d.substr(0, 90), d = d.substr(0, d.lastIndexOf(" ")) + " ...", n.titleText = o.name, n.titleText = o.name, n.desc = void 0, n.desc = "<p class='fwduvp-ytb-info-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + ";'>" + o.name + "</p><p class='fwduvp-ytb-info-p' style='color:" + _s.youtubeDescriptionColor_str + ";'>" + o.description + "</p>", n.downloadable = !1;
				try {
					n.thumbSource = o.pictures.sizes[2].link
				} catch (t) {}
				n.posterSource = "none", n.downloadable = !1, _s.playlist_ar.push(n)
			}
			_s.randomizePlaylist_bl && (_s.playlist_ar = FWDUVPUtils.randomizeArray(_s.playlist_ar)), _s.maxPlaylistItems < _s.playlist_ar.length && (_s.playlist_ar = _s.playlist_ar.splice(0, _s.maxPlaylistItems)), clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to), _s.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function() {
				_s.dispatchEvent(FWDUVPData.PLAYLIST_LOAD_COMPLETE)
			}, 50), _s.isDataLoaded_bl = !0
		}, _s.loadYoutubePlaylist = function(e) {
			if (!_s.isPlaylistDispatchingError_bl || _s.isYoutbe_bl) {
				if (_s.isChannel = -1 != e.indexOf("channel/"), _s.url = e, !_s.youtubeUrl_str) {
					if (-1 != e.indexOf("list=")) var t = /list=(.*?)(?:&|$)/i,
						o = t.exec(e);
					else var t = /channel\/(.*?)(?:&|$)/i,
						o = t.exec(e);
					e = o[1], _s.youtubeUrl_str = e
				}
				if (_s.sourceURL_str = _s.nextPageToken_str ? _s.isChannel ? "https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=" + _s.nextPageToken_str + "&channelId=" + _s.youtubeUrl_str + "&key=" + _s.youtubeAPIKey + "&maxResults=50&callback=" + prt.instanceName_str + "._d.parseYoutubePlaylist" : "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken=" + _s.nextPageToken_str + "&playlistId=" + _s.youtubeUrl_str + "&key=" + _s.youtubeAPIKey + "&maxResults=50&callback=" + prt.instanceName_str + "._d.parseYoutubePlaylist" : _s.isChannel ? "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + _s.youtubeUrl_str + "&key=" + _s.youtubeAPIKey + "&maxResults=50&callback=" + prt.instanceName_str + "._d.parseYoutubePlaylist" : "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + _s.youtubeUrl_str + "&key=" + _s.youtubeAPIKey + "&maxResults=50&callback=" + prt.instanceName_str + "._d.parseYoutubePlaylist", null == _s.scs_el) try {
					_s.scs_el = document.createElement("script"), _s.scs_el.src = _s.sourceURL_str, _s.scs_el.id = prt.instanceName_str + "._d.parseYoutubePlaylist", document.documentElement.appendChild(_s.scs_el)
				} catch (t) {}
				_s.JSONPRequestTimeoutId_to = setTimeout(function() {
					var e;
					_s.isChannel && (e = "channel"), _s.JSONPRequestTimeoutError("Error loading youtube " + e + "!<font color='#ff0000'>" + _s.youtubeUrl_str + "</font>")
				}, 6e3)
			}
		}, _s.JSONPRequestTimeoutError = function(e) {
			_s.stopToLoadPlaylist(), _s.isPlaylistDispatchingError_bl = !0;
			setTimeout(function() {
				_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
					text: e
				}), _s.isPlaylistDispatchingError_bl = !1
			}, 50)
		}, _s.resetYutubeVimeoPlaylistLoader = function() {
			_s.isYoutbe_bl = !1, _s.youtubeObject_ar = null, _s.vimeoObject_ar = null, _s.nextPageToken_str = null, _s.youtubeUrl_str = null
		}, _s.ajaxOnErrorHandler = function(t) {
			try {
				window.console && console.log(t), window.console && console.log(t.message)
			} catch (t) {}
			_s.isVimeoAlbum_bl ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
				text: "Error loading vimeo album! <font color='#ff0000'>" + _s.vimeoAlbumURL + "</font>"
			}) : _s.loadFromFolder_bl ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
				text: "Error loading file : <font color='#ff0000'>" + _s.proxyFolderPath_str + "</font>. Make sure the path is correct"
			}) : _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
				text: "Error loading file : <font color='#ff0000'>" + _s.proxyPath_str + "</font>. Make sure the path is correct"
			})
		}, _s.ajaxOnLoadHandler = function(e) {
			var isXML = !1,
				response;
			if (4 == _s.xhr.readyState)
				if (404 == _s.xhr.status) _s.isVimeoAlbum_bl ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
					text: "Error loading vimeo album! <font color='#ff0000'>" + _s.vimeoAlbumURL + "</font>"
				}) : _s.loadFromFolder_bl ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
					text: "Folder proxy file path is not found: <font color='#ff0000'>" + _s.proxyFolderPath_str + "</font>"
				}) : _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
					text: "Proxy file path is not found: <font color='#ff0000'>" + _s.proxyPath_str + "</font>"
				});
				else if (408 == _s.xhr.status) _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
				text: "Server has timeout!"
			});
			else if (200 == _s.xhr.status) {
				if (-1 != _s.xhr.responseText.indexOf("<b>Warning</b>:")) return void _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
					text: "Error loading folder: <font color='#ff0000'>" + _s.sourceURL_str + "</font>. Make sure that the folder path is correct!"
				});
				response = window.JSON ? JSON.parse(_s.xhr.responseText) : eval("(" + _s.xhr.responseText + ")"), response.body ? _s.parseVimeoPlaylist(response) : response.folder ? _s.parseFolderJSON(response) : response.li ? _s.parseXML(response) : response.error && _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
					text: "Error loading file: <font color='#ff0000'>" + _s.sourceURL_str + "</font>. Make sure the file path (xml or podcast) is correct and well formatted!"
				})
			}
		}, _s.parseYoutubePlaylist = function(e) {
			if (!_s.isPlaylistDispatchingError_bl && _s.isYoutbe_bl) {
				if (e.error) {
					var t;
					return _s.isChannel && (t = "channel"), _s.JSONPRequestTimeoutError("Error loading youtube " + t + "! <font color='#ff0000'>" + _s.youtubeUrl_str + "</font>"), void(console && console.log(e))
				}
				_s.playlist_ar = [];
				var o, s;
				_s.youtubeObject_ar || (_s.youtubeObject_ar = []);
				for (var n = 0; n < e.items.length; n++) _s.youtubeObject_ar.push(e.items[n]);
				if (o = _s.youtubeObject_ar.length, _s.stopToLoadPlaylist(), e.nextPageToken) return _s.nextPageToken_str = e.nextPageToken, void _s.loadYoutubePlaylist(_s.url);
				for (var n = 0, a; n < o; n++)
					if (a = {}, s = _s.youtubeObject_ar[n], s.snippet.thumbnails) {
						a.videoSource = _s.isChannel ? s.id.videoId : s.snippet.resourceId.videoId, a.startAtVideo = 0, a.videoSource = [{
							source: "https://www.youtube.com/watch?v=" + a.videoSource
						}], a.owner = s.snippet.channelTitle, a.gaStr = s.snippet.title, window.isWhite ? _s.youtubeAndFolderVideoTitleColor_str = "#000000" : window.isDark && (_s.youtubeAndFolderVideoTitleColor_str = "#FFFFFF"), a.title = "<p class='ytbChangeColor fwduvp-ytb-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + ";'>" + s.snippet.title + "</p>";
						var d = s.snippet.description;
						d = 190 < a.title.length ? d.substr(0, 20) : 165 < a.title.length ? d.substr(0, 60) : d.substr(0, 90), d = d.substr(0, d.lastIndexOf(" ")) + " ...", a.title += "<p class='fwduvp-ytb-p' style='color:" + _s.youtubeOwnerColor_str + ";'> " + d + "</p>", a.titleText = s.snippet.title, a.titleText = s.snippet.title, a.desc = void 0, a.desc = "<p class='fwduvp-ytb-info-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + ";'>" + s.snippet.title + "</p><p class='fwduvp-ytb-info-p' style='color:" + _s.youtubeDescriptionColor_str + ";'>" + s.snippet.description + "</p>", a.downloadable = !1;
						try {
							a.thumbSource = s.snippet.thumbnails["default"].url, _s.showOnlyThumbnail && (s.snippet.thumbnails.standard ? a.thumbSource = s.snippet.thumbnails.standard.url : s.snippet.thumbnails.high && (a.thumbSource = s.snippet.thumbnails.high.url))
						} catch (t) {}
						a.posterSource = "none", -1 == s.snippet.title.indexOf("eleted video") && -1 == s.snippet.title.indexOf("his video is unavailable") && _s.playlist_ar.push(a)
					} _s.randomizePlaylist_bl && (_s.playlist_ar = FWDUVPUtils.randomizeArray(_s.playlist_ar)), _s.maxPlaylistItems < _s.playlist_ar.length && (_s.playlist_ar = _s.playlist_ar.splice(0, _s.maxPlaylistItems)), _s.plsCache_ar[_s.id] = _s.playlist_ar, _s.youtubePlLoadComplete()
			}
		}, _s.youtubePlLoadComplete = function() {
			clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to), _s.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function() {
				_s.dispatchEvent(FWDUVPData.PLAYLIST_LOAD_COMPLETE)
			}, 50), _s.isDataLoaded_bl = !0
		}, _s.isDataLoaded_bl = !0, _s.setYoutubePlaylistHEXColor = function(e) {
			_s.youtubeAndFolderVideoTitleColor_str = e
		}, _s.closeJsonPLoader = function() {
			clearTimeout(_s.JSONPRequestTimeoutId_to)
		}, _s.parseDOMPlaylist = function(element, id) {
			if (!_s.isPlaylistDispatchingError_bl) {
				var children_ar = FWDUVPUtils.getChildren(element),
					totalChildren = children_ar.length,
					has360Video = !1,
					child;
				if (_s.playlist_ar = [], 0 == totalChildren) {
					var showLoadPlaylistErrorId_to = setTimeout(function() {
						_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
							text: "At least one video is required in the playlist with id: <font color='#ff0000'>" + id + "</font>"
						}), _s.isPlaylistDispatchingError_bl = !1
					}, 50);
					return
				}
				for (var i = 0; i < totalChildren; i++) {
					var obj = {},
						adsObj;
					if (child = children_ar[i], !FWDUVPUtils.hasAttribute(child, "data-thumb-source")) {
						_s.isPlaylistDispatchingError_bl = !0;
						var showLoadPlaylistErrorId_to = setTimeout(function() {
							_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
								text: "Attribute <font color='#ff0000'>data-thumb-source</font> is required in the playlist at position <font color='#ff0000'>" + (i + 1)
							})
						}, 50);
						return
					}
					if (!FWDUVPUtils.hasAttribute(child, "data-video-source")) {
						_s.isPlaylistDispatchingError_bl = !0;
						var showLoadPlaylistErrorId_to = setTimeout(function() {
							_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
								text: "Attribute <font color='#ff0000'>data-video-source</font> is required in the playlist at position <font color='#ff0000'>" + (i + 1)
							})
						}, 50);
						return
					}
					if (obj.thumbSource = encodeURI(FWDUVPUtils.getAttributeValue(child, "data-thumb-source")), obj.videoSource = FWDUVPUtils.getAttributeValue(child, "data-video-source"), obj._dPlaybackRate = FWDUVPUtils.getAttributeValue(child, "data-playback-rate"), obj.startAtVideo = FWDUVPUtils.getAttributeValue(child, "data-start-at-video") || 0, obj.isLive = FWDUVPUtils.getAttributeValue(child, "data-is-live"), obj.atb = "yes" == FWDUVPUtils.getAttributeValue(child, "data-use-a-to-b"), obj.thumbnailsPreview = FWDUVPUtils.getAttributeValue(child, "data-thumbnails-preview"), _s.useAToB || (obj.atb = !1), obj.isLive = "yes" == obj.isLive, obj.isPrivate = FWDUVPUtils.getAttributeValue(child, "data-is-private"), obj.isPrivate = "yes" == obj.isPrivate, obj.redirectURL = FWDUVPUtils.getAttributeValue(child, "data-redirect-url"), obj.redirectTarget = FWDUVPUtils.getAttributeValue(child, "data-redirect-target"), obj.privateVideoPassword_str = FWDUVPUtils.getAttributeValue(child, "data-private-video-password"), obj.startAtTime = FWDUVPUtils.getAttributeValue(child, "data-start-at-time"), "00:00:00" != obj.startAtTime && FWDUVPUtils.checkTime(obj.startAtTime) || (obj.startAtTime = void 0), obj.stopAtTime = FWDUVPUtils.getAttributeValue(child, "data-stop-at-time"), "00:00:00" != obj.stopAtTime && FWDUVPUtils.checkTime(obj.stopAtTime) || (obj.stopAtTime = void 0), -1 != obj.videoSource.indexOf("{source:")) try {
						obj.videoLabels_ar = [], obj.videoSource = eval(obj.videoSource);
						for (var m = 0; m < obj.videoSource.length; m++) obj.videoLabels_ar[m] = obj.videoSource[m].label;
						for (var m = 0, src; m < obj.videoSource.length; m++) {
							src = obj.videoSource[m].source, -1 != src.indexOf("encrypt:") && (src = atob(src.substr(8))), obj.videoSource[m].source = FWDUVPUtils.getValidSource(src);
							var mm = obj.videoSource[m].startWhenPlayButtonClick360DegreeVideo;
							mm = "yes" == mm, obj.videoSource[m].startWhenPlayButtonClick360DegreeVideo = mm;
							var rr = obj.videoSource[m].rotationY360DegreeVideo;
							rr = null == rr ? -90 : +obj.videoSource[m].rotationY360DegreeVideo, obj.videoSource[m].rotationY360DegreeVideo = rr
						}
						for (var m = 0; m < obj.videoSource.length; m++) obj.videoSource[m].is360 = obj.videoSource[m].is360, "yes" == obj.videoSource[m].is360 && (obj.videoSource[m].is360 = !0), "no" == obj.videoSource[m].is360 && (obj.videoSource[m].is360 = !1), !0 == obj.videoSource[m].is360 && (has360Video = !0);
						obj.videoLabels_ar.reverse()
					} catch (t) {
						_s.isPlaylistDispatchingError_bl = !0;
						var showLoadPlaylistErrorId_to = setTimeout(function() {
							_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
								text: "Please make sure that the <font color='#ff0000'>data-video-source</font> attribute contains an array of videos at position <font color='#ff0000'>" + (i + 1) + "</font>"
							})
						}, 50);
						return
					} else src = obj.videoSource, -1 != src.indexOf("encrypt:") && (src = atob(src.substr(8))), obj.videoSource = [{
						source: FWDUVPUtils.getValidSource(src)
					}];
					if (FWDUVPUtils.hasAttribute(child, "data-subtitle-soruce")) {
						if (obj.subtitleSource = FWDUVPUtils.getAttributeValue(child, "data-subtitle-soruce"), -1 == obj.subtitleSource.indexOf("{source:")) obj.subtitleSource = [{
							source: obj.subtitleSource
						}];
						else if (obj.startAtSubtitle = FWDUVPUtils.getAttributeValue(child, "data-start-at-subtitle") || 0, -1 != obj.subtitleSource.indexOf("{source:")) {
							try {
								obj.subtitleSource = eval(obj.subtitleSource)
							} catch (t) {
								_s.isPlaylistDispatchingError_bl = !0;
								var showLoadPlaylistErrorId_to = setTimeout(function() {
									_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
										text: "Please make sure that the <font color='#ff0000'>data-subtitle-source</font> attribute contains an array of subtitles at position <font color='#ff0000'>" + (i + 1) + "</font>"
									})
								}, 50);
								return
							}
							obj.subtitleSource.splice(0, 0, {
								source: "none",
								label: _s.subtitlesOffLabel_str
							}), obj.subtitleSource.reverse()
						}
						if (obj.subtitleSource)
							for (var x = 0, source; x < obj.subtitleSource.length; x++) source = obj.subtitleSource[x].source, -1 != source.indexOf("encrypt:") && (obj.subtitleSource[x].source = atob(source.substr(8)))
					}
					obj._dAdvertisementOnPauseSource = FWDUVPUtils.getAttributeValue(child, "data-advertisement-on-pause-source"), obj.scrubAtTimeAtFirstPlay = FWDUVPUtils.getAttributeValue(child, "data-scrub-at-time-at-first-play") || "none", obj.scrubAtTimeAtFirstPlay = /^((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$)/g.test(obj.scrubAtTimeAtFirstPlay) ? FWDUVPUtils.getSecondsFromString(obj.scrubAtTimeAtFirstPlay) : void 0, obj.posterSource = FWDUVPUtils.hasAttribute(child, "data-poster-source") ? encodeURI(FWDUVPUtils.getAttributeValue(child, "data-poster-source")) : "none", obj.downloadPath = obj.videoSource[obj.startAtVideo], FWDUVPUtils.hasAttribute(child, "data-downloadable") && _s.showDownloadVideoButton_bl ? (obj.downloadable = "yes" == FWDUVPUtils.getAttributeValue(child, "data-downloadable"), -1 == obj.downloadPath.source.indexOf(".") && (obj.downloadable = !1)) : obj.downloadable = !1, FWDUVPUtils.hasAttribute(child, "data-play-if-logged-in") && (obj.playIfLoggedIn = FWDUVPUtils.getAttributeValue(child, "data-play-if-logged-in"), "no" == obj.playIfLoggedIn && (obj.playIfLoggedIn = void 0));
					for (var mainPopupAds_ar = FWDUVPUtils.getChildren(child), k = 0, annotations_ar, tempPopupAds_ar, popupAds_ar, popupOrAnnotationChild, finalPopupChild, popupObj; k < mainPopupAds_ar.length; k++) {
						if (popupOrAnnotationChild = mainPopupAds_ar[k], FWDUVPUtils.hasAttribute(popupOrAnnotationChild, "data-add-popup")) {
							tempPopupAds_ar = FWDUVPUtils.getChildren(popupOrAnnotationChild), popupAds_ar = [];
							for (var x = 0; x < tempPopupAds_ar.length; x++) finalPopupChild = tempPopupAds_ar[x], finalPopupChild && (popupObj = {}, popupObj.source = FWDUVPUtils.getValidSource(FWDUVPUtils.getAttributeValue(finalPopupChild, "data-image-path")), popupObj.timeStart = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(finalPopupChild, "data-time-start")), popupObj.timeEnd = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(finalPopupChild, "data-time-end")), popupObj.link = FWDUVPUtils.getAttributeValue(finalPopupChild, "data-link"), popupObj.target = FWDUVPUtils.getAttributeValue(finalPopupChild, "data-target"), popupObj.google_ad_width = parseInt(FWDUVPUtils.getAttributeValue(finalPopupChild, "data-google-ad-width")) || 600, popupObj.google_ad_height = parseInt(FWDUVPUtils.getAttributeValue(finalPopupChild, "data-google-ad-height")) || 200, popupObj.google_ad_client = FWDUVPUtils.getAttributeValue(finalPopupChild, "data-google-ad-client"), popupObj.google_ad_slot = FWDUVPUtils.getAttributeValue(finalPopupChild, "data-google-ad-slot"), popupAds_ar.push(popupObj));
							obj.popupAds_ar = popupAds_ar
						}
						if (FWDUVPUtils.hasAttribute(popupOrAnnotationChild, "data-ads")) {
							for (var adsData_ar = FWDUVPUtils.getChildren(popupOrAnnotationChild), ads_ar = [], tt = adsData_ar.length, m = 0, adsChild, adsObj; m < tt; m++) adsObj = {}, adsChild = adsData_ar[m], adsObj.timeStart = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(adsChild, "data-time-start")), FWDUVPUtils.hasAttribute(adsChild, "data-add-duration") && (adsObj.addDuration = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(adsChild, "data-add-duration"))), adsObj.thumbnailSource = FWDUVPUtils.getAttributeValue(adsChild, "data-thumbnail-source"), ("" == adsObj.thumbnailSource || " " == adsObj.thumbnailSource) && (adsObj.thumbnailSource = void 0), adsObj.timeToHoldAds = parseInt(FWDUVPUtils.getAttributeValue(adsChild, "data-time-to-hold-ads") || 4), adsObj.source = FWDUVPUtils.getValidSource(FWDUVPUtils.getAttributeValue(adsChild, "data-source")), adsObj.link = FWDUVPUtils.getAttributeValue(adsChild, "data-link"), adsObj.target = FWDUVPUtils.getAttributeValue(adsChild, "data-target"), ads_ar[m] = adsObj;
							obj.ads_ar = ads_ar
						}
						if (FWDUVPUtils.hasAttribute(child, "data-vast-url")) {
							obj.ads_ar = void 0;
							var vsrc = FWDUVPUtils.getAttributeValue(child, "data-vast-url");
							FWDUVPUtils.isIMA(vsrc) ? obj.imaURL = vsrc : (obj.vastURL = vsrc, obj.vastClickTroughTarget = FWDUVPUtils.getAttributeValue(child, "data-vast-clicktrough-target") || "_blank", obj.vastLinearStartTime = FWDUVPUtils.getAttributeValue(child, "data-vast-linear-astart-at-time") || "00:00:00")
						}
						if (FWDUVPUtils.hasAttribute(popupOrAnnotationChild, "data-cuepoints")) {
							for (var cuepointsData_ar = FWDUVPUtils.getChildren(popupOrAnnotationChild), cuepoints_ar = [], tt = cuepointsData_ar.length, m = 0, cuepointsChild, cuepointsObj; m < tt; m++) cuepointsObj = {}, cuepointsChild = cuepointsData_ar[m], cuepointsObj.timeStart = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(cuepointsChild, "data-time-start")), cuepointsObj.javascriptCall = FWDUVPUtils.getAttributeValue(cuepointsChild, "data-javascript-call"), cuepointsObj.isPlayed_bl = !1, cuepoints_ar[m] = cuepointsObj;
							obj.cuepoints_ar = cuepoints_ar
						}
						if (FWDUVPUtils.hasAttribute(popupOrAnnotationChild, "data-annotations")) {
							annotations_ar = FWDUVPUtils.getChildren(popupOrAnnotationChild);
							for (var tt = annotations_ar.length, m = 0, annotationChild, annotationObj; m < tt; m++) annotationObj = {}, annotationChild = annotations_ar[m], annotationObj.start = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(annotationChild, "data-start-time")), annotationObj.end = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(annotationChild, "data-end-time")), annotationObj.left = parseInt(FWDUVPUtils.getAttributeValue(annotationChild, "data-left"), 10), annotationObj.top = parseInt(FWDUVPUtils.getAttributeValue(annotationChild, "data-top"), 10), annotationObj.showCloseButton_bl = "yes" == FWDUVPUtils.getAttributeValue(annotationChild, "data-show-close-button"), annotationObj.clickSource = FWDUVPUtils.getAttributeValue(annotationChild, "data-click-source"), annotationObj.clickSourceTarget = FWDUVPUtils.getAttributeValue(annotationChild, "data-click-source-target"), annotationObj.normalStateClass = FWDUVPUtils.getAttributeValue(annotationChild, "data-normal-state-class"), annotationObj.selectedStateClass = FWDUVPUtils.getAttributeValue(annotationChild, "data-selected-state-class"), annotationObj.content = annotationChild.innerHTML, annotations_ar[m] = annotationObj;
							obj.annotations_ar = annotations_ar
						}
					}
					var descChidren_ar = FWDUVPUtils.getChildren(child),
						descChild;
					obj.title = "not defined!", obj.titleText = "not defined!";
					for (var k = 0; k < descChidren_ar.length; k++) descChild = descChidren_ar[k], FWDUVPUtils.hasAttribute(descChild, "data-video-short-description") ? (obj.title = descChild.innerHTML, obj.titleText = descChild.textContent, obj.titleText = obj.titleText.replace(/^\s+/g, "")) : FWDUVPUtils.hasAttribute(descChild, "data-video-long-description") && (obj.desc = descChild.innerHTML);
					for (var gaStr = obj.titleText.split("\n"), x = 0; x < gaStr.length; x++)
						if (2 < gaStr[x].length) {
							obj.gaStr = gaStr[x];
							break
						} FWDUVPUtils.hasAttribute(child, "data-ads-source") && (adsObj = {}, adsObj.source = FWDUVPUtils.getValidSource(FWDUVPUtils.getAttributeValue(child, "data-ads-source")), adsObj.pageToOpen = FWDUVPUtils.getAttributeValue(child, "data-ads-page-to-open-url"), adsObj.pageTarget = FWDUVPUtils.getAttributeValue(child, "data-ads-page-target") || "_blank", adsObj.timeToHoldAds = parseInt(FWDUVPUtils.getAttributeValue(child, "data-time-to-hold-ads")) || 0, obj.ads = adsObj), _s.playlist_ar[i] = obj
				}
				_s.randomizePlaylist_bl && (_s.playlist_ar = FWDUVPUtils.randomizeArray(_s.playlist_ar)), _s.maxPlaylistItems < _s.playlist_ar.length && (_s.playlist_ar = _s.playlist_ar.splice(0, _s.maxPlaylistItems)), clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to), _s.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function() {
					_s.dispatchEvent(FWDUVPData.PLAYLIST_LOAD_COMPLETE)
				}, 50), _s.isDataLoaded_bl = !0
			}
		}, _s.parseFolderJSON = function(e) {
			_s.playlist_ar = [];
			var t = e.folder,
				o;
			if (t && !t.length) return void _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
				text: "Please make sure the folder exists and it has video or audio files in it: <font color='#ff0000'>" + encodeURIComponent(_s.sourceURL_str) + "</font>"
			});
			for (var s = 0; s < t.length; s++) o = {}, o.videoSource = encodeURI(t[s]["@attributes"]["data-video-path"]), o.videoSource = t[s]["@attributes"]["data-video-path"], o._dPlaybackRate = t[s]["@attributes"]["data-playback-rate"], o.startAtVideo = t[s]["@attributes"]["data-start-at-video"] || 0, o.videoSource = [{
				source: FWDUVPUtils.getValidSource(o.videoSource)
			}], o.thumbSource = encodeURI(t[s]["@attributes"]["data-thumb-path"]), o.posterSource = encodeURI(t[s]["@attributes"]["data-poster-path"]), o.downloadPath = encodeURIComponent(t[s]["@attributes"]["download-path"]), o.downloadable = _s.showDownloadVideoButton_bl, _s.forceDisableDownloadButtonForFolder_bl && (o.downloadable = !1), o.titleText = "...", o.title = "<p class='fwduvp-thumbnail-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + "'>...</p>", o.titleText = t[s]["@attributes"]["data-title"], o.title = "<p class='fwduvp-thumbnail-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + "'>" + t[s]["@attributes"]["data-title"] + "</p>", o.desc = void 0, _s.playlist_ar[s] = o;
			_s.randomizePlaylist_bl && (_s.playlist_ar = FWDUVPUtils.randomizeArray(_s.playlist_ar)), _s.maxPlaylistItems < _s.playlist_ar.length && (_s.playlist_ar = _s.playlist_ar.splice(0, _s.maxPlaylistItems)), clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to), _s.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function() {
				_s.dispatchEvent(FWDUVPData.PLAYLIST_LOAD_COMPLETE)
			}, 50), _s.isDataLoaded_bl = !0
		}, _s.parseXML = function(response) {
			_s.playlist_ar = [];
			var obj_ar = response.li,
				has360Video = !1,
				obj;
			obj_ar.length || (obj_ar = [obj_ar]);
			for (var i = 0; i < obj_ar.length; i++) {
				if (obj = {}, obj.videoSource = obj_ar[i]["@attributes"]["data-video-source"], obj.startAtVideo = obj_ar[i]["@attributes"]["data-start-at-video"] || 0, obj.startWhenPlayButtonClick360DegreeVideo = obj_ar[i]["@attributes"]["data-start-when-play-button-click-60D-degree-video"], "yes" == obj.startWhenPlayButtonClick360DegreeVideo && (obj.startWhenPlayButtonClick360DegreeVideo = !0), obj.rotationY360DegreeVideo = obj_ar[i]["@attributes"]["data-rotation-y-360-degree-video"], void 0 === obj.rotationY360DegreeVideo && (obj.rotationY360DegreeVideo = -90), obj.isLive = obj_ar[i]["@attributes"]["data-is-live"], obj.atb = "yes" == obj_ar[i]["@attributes"]["data-use-a-to-b"], _s.useAToB || (obj.atb = !1), obj.isPrivate = obj_ar[i]["@attributes"]["data-is-private"], obj.isPrivate = "yes" == obj.isPrivate, obj_ar[i]["@attributes"]["data-play-if-logged-in"] && (obj.playIfLoggedIn = obj_ar[i]["@attributes"]["data-play-if-logged-in"], "no" == obj.playIfLoggedIn && (obj.playIfLoggedIn = void 0)), obj.privateVideoPassword_str = obj_ar[i]["@attributes"]["data-private-video-password"], obj.startAtTime = obj_ar[i]["@attributes"]["data-start-at-time"], "00:00:00" != obj.startAtTime && FWDUVPUtils.checkTime(obj.startAtTime) || (obj.startAtTime = void 0), obj.stopAtTime = obj_ar[i]["@attributes"]["data-stop-at-time"], "00:00:00" != obj.stopAtTime && FWDUVPUtils.checkTime(obj.stopAtTime) || (obj.stopAtTime = void 0), -1 != obj.videoSource.indexOf("{source:")) try {
					obj.videoLabels_ar = [], obj.videoSource = eval(obj.videoSource);
					for (var m = 0; m < obj.videoSource.length; m++) obj.videoLabels_ar[m] = obj.videoSource[m].label;
					for (var m = 0, src; m < obj.videoSource.length; m++) src = obj.videoSource[m].source, -1 != src.indexOf("encrypt:") && (src = atob(src.substr(8))), obj.videoSource[m].source = FWDUVPUtils.getValidSource(src);
					for (var m = 0; m < obj.videoSource.length; m++) obj.videoSource[m].is360 = obj.videoSource[m].is360, "yes" == obj.videoSource[m].is360 && (obj.videoSource[m].is360 = !0), "no" == obj.videoSource[m].is360 && (obj.videoSource[m].is360 = !1), !0 == obj.videoSource[m].is360 && (has360Video = !0);
					obj.videoLabels_ar.reverse()
				} catch (t) {
					_s.isPlaylistDispatchingError_bl = !0;
					var showLoadPlaylistErrorId_to = setTimeout(function() {
						_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
							text: "Please make sure that the <font color='#ff0000'>data-video-source</font> attribute contains an array of videos at position <font color='#ff0000'>" + (i + 1) + "</font>"
						})
					}, 50);
					return
				} else {
					var src = obj.videoSource; - 1 != src.indexOf("encrypt:") && (src = atob(src.substr(8))), obj.videoSource = [{
						source: FWDUVPUtils.getValidSource(src)
					}]
				}
				if (obj.subtitleSource = obj_ar[i]["@attributes"]["data-subtitle-soruce"], obj.startAtSubtitle = obj_ar[i]["@attributes"]["data-start-at-subtitle"] || 0, obj.subtitleSource) {
					if (-1 == obj.subtitleSource.indexOf("{source:")) obj.subtitleSource = [{
						source: obj.subtitleSource
					}];
					else if (-1 != obj.subtitleSource.indexOf("{source:")) {
						try {
							obj.subtitleSource = eval(obj.subtitleSource), -1 != obj.subtitleSource.indexOf("encrypt:") && (obj.subtitleSource = atob(src.substr(8)))
						} catch (t) {
							_s.isPlaylistDispatchingError_bl = !0;
							var showLoadPlaylistErrorId_to = setTimeout(function() {
								_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
									text: "Please make sure that the <font color='#ff0000'>data-subtitle-source</font> attribute contains an array of subtitles at position <font color='#ff0000'>" + (i + 1) + "</font>"
								})
							}, 50);
							return
						}
						obj.subtitleSource.splice(0, 0, {
							source: "none",
							label: _s.subtitlesOffLabel_str
						}), obj.subtitleSource.reverse()
					}
					if (obj.subtitleSource)
						for (var x = 0, source; x < obj.subtitleSource.length; x++) source = obj.subtitleSource[x].source, -1 != source.indexOf("encrypt:") && (obj.subtitleSource[x].source = atob(source.substr(8)))
				}
				if (obj._dAdvertisementOnPauseSource = obj_ar[i]["@attributes"]["data-advertisement-on-pause-source"], obj.scrubAtTimeAtFirstPlay = obj_ar[i]["@attributes"]["data-scrub-at-time-at-first-play"], obj.scrubAtTimeAtFirstPlay && /^((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$)/g.test(obj.scrubAtTimeAtFirstPlay) && (obj.scrubAtTimeAtFirstPlay = FWDUVPUtils.getSecondsFromString(obj.scrubAtTimeAtFirstPlay)), obj.downloadPath = obj.videoSource[obj.startAtVideo], obj.downloadable = "yes" == obj_ar[i]["@attributes"]["data-downloadable"], -1 == obj.videoSource[0].source.indexOf(".") && (obj.downloadable = !1), obj.posterSource = encodeURI(obj_ar[i]["@attributes"]["data-poster-source"]), obj.thumbSource = obj_ar[i]["@attributes"]["data-thumb-source"], obj.title = obj_ar[i]["@attributes"]["data-title"], obj.titleText = obj_ar[i]["@attributes"]["data-title"], obj.desc = obj_ar[i]["@attributes"]["data-desc"], obj.gaStr = obj.titleText, obj_ar[i]["@attributes"]["data-ads-source"]) {
					var adsObj = {};
					adsObj.source = FWDUVPUtils.getValidSource(obj_ar[i]["@attributes"]["data-ads-source"]), adsObj.pageToOpen = obj_ar[i]["@attributes"]["data-ads-page-to-open-url"], adsObj.pageTarget = obj_ar[i]["@attributes"]["data-ads-page-target"] || "_blank", adsObj.timeToHoldAds = obj_ar[i]["@attributes"]["data-time-to-hold-ads"] || 0, obj.ads = adsObj
				}
				if (obj_ar[i]["@attributes"]["data-vast-url"]) {
					obj.ads_ar = void 0;
					var vsrc = obj_ar[i]["@attributes"]["data-vast-url"];
					FWDUVPUtils.isIMA(vsrc) ? obj.imaURL = vsrc : (obj.vastURL = vsrc, obj.vastClickTroughTarget = obj_ar[i]["@attributes"]["data-vast-clicktrough-target"], obj.vastLinearStartTime = obj_ar[i]["@attributes"]["data-vast-linear-astart-at-time"] || "00:00:00")
				}
				obj_ar[i]["@attributes"]["data-cuepoints"] && (adsObj = {}, adsObj.timeStart = obj_ar[i]["@attributes"]["data-time-start"], adsObj.javascriptCall = obj_ar[i]["@attributes"]["data-javascript-call"], adsObj.isPlayed_bl = !1, obj.cuepoints_ar = adsObj), _s.playlist_ar[i] = obj
			}
			_s.randomizePlaylist_bl && (_s.playlist_ar = FWDUVPUtils.randomizeArray(_s.playlist_ar)), _s.maxPlaylistItems < _s.playlist_ar.length && (_s.playlist_ar = _s.playlist_ar.splice(0, _s.maxPlaylistItems)), clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to), _s.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function() {
				_s.dispatchEvent(FWDUVPData.PLAYLIST_LOAD_COMPLETE)
			}, 50), _s.isDataLoaded_bl = !0
		}, _s.setVastSource = function(e, t) {
			if (!_s.vastLoaded_bl) {
				_s.vastScript = document.createElement("script");
				_s.scripts[_s.countLoadedSCript];
				return document.head.appendChild(_s.vastScript), _s.vastScript.src = _s.mainFolderPath_str + "java/FWDUVPVast.js", _s.vastScript.onload = function() {
					FWDUVPVast.setPrototype(), _s.vast = new FWDUVPVast(_s), _s.vast.setSource(e, t)
				}, _s.vastScript.onerror = function() {
					_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
						text: "VAST js plugin named <font color=\"#FF0000\">FWDUVPVast.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color=\"#FF0000\">FWDUVPVast.js</font> file. "
					})
				}, void(_s.vastLoaded_bl = !0)
			}
			_s.vast.setSource(e)
		}, _s.closeVast = function() {
			_s.vast && _s.vast.closeVast()
		}, _s.fixVmapTimes = function(e, t, o, s) {
			_s.vast && _s.vast.fixVmapTimes(e, t, o, s)
		}, _s.resetVastId = function() {
			_s.vast && (_s.vast.id = -1)
		}, _s.showPropertyError = function(e) {
			_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
				text: "The property called <font color='#FF0000'>" + e + "</font> is not defined."
			})
		}, _s.stopToLoadPlaylist = function() {
			_s.closeJsonPLoader();
			try {
				_s.scs_el.src = null, document.documentElement.removeChild(_s.scs_el), _s.scs_el = null
			} catch (t) {}
			if (null != _s.xhr) {
				try {
					_s.xhr.abort()
				} catch (t) {}
				_s.xhr.onreadystatechange = null, _s.xhr.onerror = null, _s.xhr = null
			}
		}, _s.showPropertyError = function(e) {
			_s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
				text: "The property called <font color='#ff0000'>" + e + "</font> is not defined."
			})
		}, _s.init()
	};
	FWDUVPData.setPrototype = function() {
		FWDUVPData.prototype = new FWDUVPEventDispatcher
	}, FWDUVPData.VAST_LOADING = "vastLoading", FWDUVPData.VAST_LOADED = "vastLoaded", FWDUVPData.PLAYLIST_LOAD_COMPLETE = "playlistLoadComplete", FWDUVPData.PRELOADER_LOAD_DONE = "onPreloaderLoadDone", FWDUVPData.LOAD_DONE = "onLoadDone", FWDUVPData.LOAD_ERROR = "onLoadError", FWDUVPData.IMAGE_LOADED = "onImageLoaded", FWDUVPData.SKIN_LOAD_COMPLETE = "onSkinLoadComplete", FWDUVPData.SKIN_PROGRESS = "onSkinProgress", FWDUVPData.IMAGES_PROGRESS = "onImagesPogress", FWDUVPData.IMA_READY = "imaReady", FWDUVPData.IMA_ERROR = "ima_error", window.FWDUVPData = FWDUVPData
}(window),
function(e) {
	e.FWDUVPDisplayObject = function(e, t, o, s) {
		'use strict';
		var n = this;
		if (n.listeners = {
				events_ar: []
			}, "div" == e || "img" == e || "canvas" == e || "input") n.type = e;
		else throw Error("Type is not valid! " + e);
		n.children_ar = [], n.position = t || "absolute", n.overflow = o || "hidden", n.display = s || "inline-block", n.visible = !0, n.buttonMode, n.x = 0, n.y = 0, n.w = 0, n.h = 0, n.rect, n.alpha = 1, n.innerHTML = "", n.opacityType = "", n.hasTransform3d_bl = FWDUVPUtils.hasTransform3d, n.hasTransform2d_bl = FWDUVPUtils.hasTransform2d, n.hasBeenSetSelectable_bl = !1, n.init = function() {
			n.setScreen()
		}, n.getTransform = function() {
			for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"], t; t = e.shift();)
				if ("undefined" != typeof n.screen.style[t]) return t;
			return !1
		}, n.getOpacityType = function() {
			var e;
			return e = "undefined" == typeof n.screen.style.opacity ? "filter" : "opacity", e
		}, n.setScreen = function(e) {
			"img" == n.type && e ? (n.screen = null, n.screen = e, n.setMainProperties()) : (n.screen = document.createElement(n.type), n.setMainProperties())
		}, n.setMainProperties = function() {
			n.transform = n.getTransform(), n.setPosition(n.position), n.setOverflow(n.overflow), n.opacityType = n.getOpacityType(), "opacity" == n.opacityType && (n.isHtml5_bl = !0), "filter" == n.opacityType && (n.screen.style.filter = "inherit"), n.screen.style.left = "0px", n.screen.style.top = "0px", n.screen.style.margin = "0px", n.screen.style.padding = "0px", n.screen.style.maxWidth = "none", n.screen.style.maxHeight = "none", n.screen.style.border = "none", n.screen.style.lineHeight = "1", n.screen.style.backfaceVisibility = "hidden", n.screen.style.webkitBackfaceVisibility = "hidden", n.screen.style.MozBackfaceVisibility = "hidden", "img" == e && (n.setWidth(n.screen.width), n.setHeight(n.screen.height))
		}, n.setBackfaceVisibility = function() {
			n.screen.style.backfaceVisibility = "visible", n.screen.style.webkitBackfaceVisibility = "visible", n.screen.style.MozBackfaceVisibility = "visible"
		}, n.setSelectable = function(e) {
			e ? (FWDUVPUtils.isFirefox || FWDUVPUtils.isIE ? (n.screen.style.userSelect = "element", n.screen.style.MozUserSelect = "element", n.screen.style.msUserSelect = "element") : FWDUVPUtils.isSafari ? (n.screen.style.userSelect = "text", n.screen.style.webkitUserSelect = "text") : (n.screen.style.userSelect = "auto", n.screen.style.webkitUserSelect = "auto"), n.screen.style.khtmlUserSelect = "auto", n.screen.style.oUserSelect = "auto", FWDUVPUtils.isIEAndLessThen9 ? (n.screen.ondragstart = null, n.screen.onselectstart = null, n.screen.ontouchstart = null) : (n.screen.ondragstart = void 0, n.screen.onselectstart = void 0, n.screen.ontouchstart = void 0), n.screen.style.webkitTouchCallout = "default", n.hasBeenSetSelectable_bl = !1) : (n.screen.style.userSelect = "none", n.screen.style.MozUserSelect = "none", n.screen.style.webkitUserSelect = "none", n.screen.style.khtmlUserSelect = "none", n.screen.style.oUserSelect = "none", n.screen.style.msUserSelect = "none", n.screen.msUserSelect = "none", n.screen.ondragstart = function() {
				return !1
			}, n.screen.onselectstart = function() {
				return !1
			}, n.screen.ontouchstart = function() {
				return !1
			}, n.screen.style.webkitTouchCallout = "none", n.hasBeenSetSelectable_bl = !0)
		}, n.getScreen = function() {
			return n.screen
		}, n.setVisible = function(e) {
			n.visible = e, n.screen.style.visibility = !0 == n.visible ? "visible" : "hidden"
		}, n.getVisible = function() {
			return n.visible
		}, n.setResizableSizeAfterParent = function() {
			n.screen.style.width = "100%", n.screen.style.height = "100%"
		}, n.getStyle = function() {
			return n.screen.style
		}, n.setOverflow = function(e) {
			n.overflow = e, n.screen.style.overflow = n.overflow
		}, n.setPosition = function(e) {
			n.position = e, n.screen.style.position = n.position
		}, n.setDisplay = function(e) {
			n.display = e, n.screen.style.display = n.display
		}, n.setButtonMode = function(e) {
			n.buttonMode = e, n.screen.style.cursor = !0 == n.buttonMode ? "pointer" : "default"
		}, n.setBkColor = function(e) {
			n.screen.style.backgroundColor = e
		}, n.setInnerHTML = function(e) {
			n.innerHTML = e, n.screen.innerHTML = n.innerHTML
		}, n.getInnerHTML = function() {
			return n.innerHTML
		}, n.getRect = function() {
			return n.screen.getBoundingClientRect()
		}, n.setAlpha = function(e) {
			n.alpha = e, "opacity" == n.opacityType ? n.screen.style.opacity = n.alpha : "filter" == n.opacityType && (n.screen.style.filter = "alpha(opacity=" + 100 * n.alpha + ")", n.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * n.alpha) + ")")
		}, n.getAlpha = function() {
			return n.alpha
		}, n.getRect = function() {
			return n.screen.getBoundingClientRect()
		}, n.getGlobalX = function() {
			return n.getRect().left
		}, n.getGlobalY = function() {
			return n.getRect().top
		}, n.setX = function(e) {
			n.x = e, n.hasTransform3d_bl ? n.screen.style[n.transform] = "translate3d(" + n.x + "px," + n.y + "px,0)" : n.hasTransform2d_bl ? n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px)" : n.screen.style.left = n.x + "px"
		}, n.getX = function() {
			return n.x
		}, n.setY = function(e) {
			n.y = e, n.hasTransform3d_bl ? n.screen.style[n.transform] = "translate3d(" + n.x + "px," + n.y + "px,0)" : n.hasTransform2d_bl ? n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px)" : n.screen.style.top = n.y + "px"
		}, n.getY = function() {
			return n.y
		}, n.setWidth = function(e) {
			n.w = e, "img" == n.type ? (n.screen.width = n.w, n.screen.style.width = n.w + "px") : n.screen.style.width = n.w + "px"
		}, n.getWidth = function() {
			return "div" == n.type || "input" == n.type ? 0 == n.screen.offsetWidth ? n.w : n.screen.offsetWidth : "img" == n.type ? 0 == n.screen.offsetWidth ? 0 == n.screen.width ? n._w : n.screen.width : n.screen.offsetWidth : "canvas" == n.type ? 0 == n.screen.offsetWidth ? n.w : n.screen.offsetWidth : void 0
		}, n.setHeight = function(e) {
			n.h = e, "img" == n.type ? (n.screen.height = n.h, n.screen.style.height = n.h + "px") : n.screen.style.height = n.h + "px"
		}, n.getHeight = function() {
			return "div" == n.type || "input" == n.type ? 0 == n.screen.offsetHeight ? n.h : n.screen.offsetHeight : "img" == n.type ? 0 == n.screen.offsetHeight ? 0 == n.screen.height ? n.h : n.screen.height : n.screen.offsetHeight : "canvas" == n.type ? 0 == n.screen.offsetHeight ? n.h : n.screen.offsetHeight : void 0
		}, n.addChild = function(t) {
			n.contains(t) ? (n.children_ar.splice(FWDUVPUtils.indexOfArray(n.children_ar, t), 1), n.children_ar.push(t), n.screen.appendChild(t.screen)) : (n.children_ar.push(t), n.screen.appendChild(t.screen))
		}, n.removeChild = function(t) {
			if (n.contains(t)) n.children_ar.splice(FWDUVPUtils.indexOfArray(n.children_ar, t), 1), n.screen.removeChild(t.screen);
			else throw Error("##removeChild()## Child dose't exist, it can't be removed!")
		}, n.contains = function(t) {
			return -1 != FWDUVPUtils.indexOfArray(n.children_ar, t)
		}, n.addChildAt = function(t, e) {
			if (0 == n.getNumChildren()) n.children_ar.push(t), n.screen.appendChild(t.screen);
			else if (1 == e) n.screen.insertBefore(t.screen, n.children_ar[0].screen), n.screen.insertBefore(n.children_ar[0].screen, t.screen), n.contains(t) ? n.children_ar.splice(FWDUVPUtils.indexOfArray(n.children_ar, t), 1, t) : n.children_ar.splice(FWDUVPUtils.indexOfArray(n.children_ar, t), 0, t);
			else {
				if (0 > e || e > n.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
				n.screen.insertBefore(t.screen, n.children_ar[e].screen), n.contains(t) ? n.children_ar.splice(FWDUVPUtils.indexOfArray(n.children_ar, t), 1, t) : n.children_ar.splice(FWDUVPUtils.indexOfArray(n.children_ar, t), 0, t)
			}
		}, n.getChildAt = function(e) {
			if (0 > e || e > n.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
			if (0 == n.getNumChildren()) throw Error("##getChildAt## Child dose not exist!");
			return n.children_ar[e]
		}, n.getChildIndex = function(e) {
			return n.contains(e) ? FWDUVPUtils.indexOfArray(n.children_ar, e) : 0
		}, n.removeChildAtZero = function() {
			n.screen.removeChild(n.children_ar[0].screen), n.children_ar.shift()
		}, n.getNumChildren = function() {
			return n.children_ar.length
		}, n.addListener = function(e, t) {
			if (null == e) throw Error("type is required.");
			if ("object" == typeof e) throw Error("type must be of type String.");
			if ("function" != typeof t) throw Error("listener must be of type Function.");
			var o = {};
			o.type = e, o.listener = t, o.target = n, n.listeners.events_ar.push(o)
		}, n.dispatchEvent = function(e, t) {
			if (null != n.listeners) {
				if (null == e) throw Error("type is required.");
				if ("object" == typeof e) throw Error("type must be of type String.");
				for (var o = 0, s = n.listeners.events_ar.length; o < s; o++)
					if (n.listeners.events_ar[o].target === n && n.listeners.events_ar[o].type === e) {
						if (t)
							for (var a in t) n.listeners.events_ar[o][a] = t[a];
						n.listeners.events_ar[o].listener.call(n, n.listeners.events_ar[o])
					}
			}
		}, n.removeListener = function(e, t) {
			if (null == e) throw Error("type is required.");
			if ("object" == typeof e) throw Error("type must be of type String.");
			if ("function" != typeof t) throw Error("listener must be of type Function." + e);
			for (var o = 0, s = n.listeners.events_ar.length; o < s; o++)
				if (n.listeners.events_ar[o].target === n && n.listeners.events_ar[o].type === e && n.listeners.events_ar[o].listener === t) {
					n.listeners.events_ar.splice(o, 1);
					break
				}
		}, n.disposeImage = function() {
			"img" == n.type && (n.screen.src = null)
		}, n.destroy = function() {
			n.hasBeenSetSelectable_bl && (n.screen.ondragstart = null, n.screen.onselectstart = null, n.screen.ontouchstart = null), n.screen.removeAttribute("style"), n.listeners = [], n.listeners = null, n.children_ar = [], n.children_ar = null, n.style = null, n.screen = null, n.transform = null, n.position = null, n.overflow = null, n.display = null, n.visible = null, n.buttonMode = null, n.x = null, n.y = null, n.w = null, n.h = null, n.rect = null, n.alpha = null, n.innerHTML = null, n.opacityType = null, n.isHtml5_bl = null, n.hasTransform3d_bl = null, n.hasTransform2d_bl = null, n = null
		}, n.init()
	}
}(window),
function(t) {
	var o = function(e, s) {
		'use strict';

		function n(e) {
			if (!(t.top != t && FWDEVPUtils.isIE)) {
				e || (e = i);
				var o, s;
				document.body.createTextRange ? (o = document.body.createTextRange(), o.moveToElementText(e), o.select()) : t.getSelection && document.createRange && (s = t.getSelection(), o = document.createRange(), o.selectNodeContents(e), s.removeAllRanges(), s.addRange(o))
			}
		}
		var i = this,
			a = o.prototype;
		i.embedColoseN_img = e.embedColoseN_img, i.useHEX = e.useHEX, i.nBC = e.nBC, i.sBC = e.sBC, i.embedWindowBackground_str = e.embedWindowBackground_str, i.embedWindowInputBackgroundPath_str = e.embedWindowInputBackgroundPath_str, i.secondaryLabelsColor_str = e.secondaryLabelsColor_str, i.inputColor_str = e.inputColor_str, i.mainLabelsColor_str = e.mainLabelsColor_str, i.sendButtonNPath_str = e.sendButtonNPath_str, i.sendButtonSPath_str = e.sendButtonSPath_str, i.inputBackgroundColor_str = e.inputBackgroundColor_str, i.borderColor_str = e.borderColor_str, i.sendToAFriendPath_str = e.sendToAFriendPath_str, i.maxTextWidth = 0, i.totalWidth = 0, i.sW = 0, i.sH = 0, i.buttonWidth = 44, i.buttonHeight = 19, i.embedWindowCloseButtonMargins = e.embedWindowCloseButtonMargins, i.shareAndEmbedTextColor_str = e.shareAndEmbedTextColor_str, i.isMbl = FWDUVPUtils.isMobile, i.useVectorIcons_bl = e.useVectorIcons_bl, i.init = function() {
			i.clsBtn || (-1 != e.sknPth.indexOf("hex_white") && (i.sBC = "#FFFFFF"), i.setBackfaceVisibility(), i.mainHld = new FWDUVPDisplayObject("div"), i.bk_do = new FWDUVPDisplayObject("div"), i.bk_do.getStyle().width = "100%", i.bk_do.getStyle().height = "100%", i.bk_do.setAlpha(.9), i.bk_do.getStyle().background = "url('" + i.embedWindowBackground_str + "')", i.linkAndEmbedHld = new FWDUVPDisplayObject("div"), i.lnkAndEbdHldBk = new FWDUVPDisplayObject("div"), i.lnkAndEbdHldBk.getStyle().background = "url('" + i.embedWindowBackground_str + "')", i.lnkAndEbdHldBk.getStyle().borderStyle = "solid", i.lnkAndEbdHldBk.getStyle().borderWidth = "1px", i.lnkAndEbdHldBk.getStyle().borderColor = i.borderColor_str, i.mainLbl = new FWDUVPDisplayObject("div"), i.mainLbl.setBackfaceVisibility(), i.mainLbl.getStyle().fontFamily = "Arial", i.mainLbl.getStyle().fontSize = "12px", i.mainLbl.getStyle().color = i.mainLabelsColor_str, i.mainLbl.getStyle().whiteSpace = "nowrap", i.mainLbl.getStyle().fontSmoothing = "antialiased", i.mainLbl.getStyle().webkitFontSmoothing = "antialiased", i.mainLbl.getStyle().textRendering = "optimizeLegibility", i.mainLbl.getStyle().padding = "0px", i.mainLbl.screen.className = "UVP-main-label", i.mainLbl.setInnerHTML("SHARE & EMBED"), i.linkLbl = new FWDUVPDisplayObject("div"), i.linkLbl.screen.className = "UVP-secnd-label", i.linkLbl.setBackfaceVisibility(), i.linkLbl.getStyle().fontFamily = "Arial", i.linkLbl.getStyle().fontSize = "12px", i.linkLbl.getStyle().color = i.secondaryLabelsColor_str, i.linkLbl.getStyle().whiteSpace = "nowrap", i.linkLbl.getStyle().fontSmoothing = "antialiased", i.linkLbl.getStyle().webkitFontSmoothing = "antialiased", i.linkLbl.getStyle().textRendering = "optimizeLegibility", i.linkLbl.getStyle().padding = "0px", i.linkLbl.setInnerHTML("Link to _s video:"), i.linkTxt = new FWDUVPDisplayObject("div"), i.linkTxt.screen.className = "UVP-embed-inpt", i.linkTxt.setBackfaceVisibility(), i.linkTxt.getStyle().fontFamily = "Arial", i.linkTxt.getStyle().fontSize = "12px", i.linkTxt.getStyle().color = i.shareAndEmbedTextColor_str, !FWDUVPUtils.isIEAndLessThen9 && (i.linkTxt.getStyle().wordBreak = "break-all"), i.linkTxt.getStyle().fontSmoothing = "antialiased", i.linkTxt.getStyle().webkitFontSmoothing = "antialiased", i.linkTxt.getStyle().textRendering = "optimizeLegibility", i.linkTxt.getStyle().padding = "6px", i.linkTxt.getStyle().paddingTop = "4px", i.linkTxt.getStyle().paddingBottom = "4px", i.linkTxt.getStyle().backgroundColor = i.inputBackgroundColor_str, i.linkTxt.screen.addEventListener("touchstart", function() {
				n(i.linkTxt.screen)
			}), i.embedLbl = new FWDUVPDisplayObject("div"), i.embedLbl.setBackfaceVisibility(), i.embedLbl.screen.className = "UVP-secnd-label", i.embedLbl.getStyle().fontFamily = "Arial", i.embedLbl.getStyle().fontSize = "12px", i.embedLbl.getStyle().color = i.secondaryLabelsColor_str, i.embedLbl.getStyle().whiteSpace = "nowrap", i.embedLbl.getStyle().fontSmoothing = "antialiased", i.embedLbl.getStyle().webkitFontSmoothing = "antialiased", i.embedLbl.getStyle().textRendering = "optimizeLegibility", i.embedLbl.getStyle().padding = "0px", i.embedLbl.setInnerHTML("Embed _s video:"), i.embdTxt = new FWDUVPDisplayObject("div"), i.embdTxt.screen.className = "UVP-embed-inpt", i.embdTxt.setBackfaceVisibility(), !FWDUVPUtils.isIEAndLessThen9 && (i.embdTxt.getStyle().wordBreak = "break-all"), i.embdTxt.getStyle().fontFamily = "Arial", i.embdTxt.getStyle().fontSize = "12px", i.embdTxt.getStyle().lineHeight = "16px", i.embdTxt.getStyle().color = i.shareAndEmbedTextColor_str, i.embdTxt.getStyle().fontSmoothing = "antialiased", i.embdTxt.getStyle().webkitFontSmoothing = "antialiased", i.embdTxt.getStyle().textRendering = "optimizeLegibility", i.embdTxt.getStyle().backgroundColor = i.inputBackgroundColor_str, i.embdTxt.getStyle().padding = "6px", i.embdTxt.getStyle().paddingTop = "4px", i.embdTxt.getStyle().paddingBottom = "4px", i.embdTxt.screen.addEventListener("touchstart", function() {
				n(i.embdTxt.screen)
			}), FWDUVPSimpleSizeButton.setPrototype(), i.copyLinkBtn = new FWDUVPSimpleSizeButton(e.embedCopyButtonNPath_str, e.embedCopyButtonSPath_str, i.buttonWidth, i.buttonHeight, e.useHEX, e.nBC, e.sBC, !0), i.copyLinkBtn.screen.style.position = "absolute", i.copyLinkBtn.addListener(FWDUVPSimpleSizeButton.CLICK, function() {
				i.copyToClipboard(i.linkTxt.screen)
			}), FWDUVPSimpleSizeButton.setPrototype(), i.copyEmbedBtn = new FWDUVPSimpleSizeButton(e.embedCopyButtonNPath_str, e.embedCopyButtonSPath_str, i.buttonWidth, i.buttonHeight, e.useHEX, e.nBC, e.sBC, !0), i.copyEmbedBtn.screen.style.position = "absolute", i.copyEmbedBtn.addListener(FWDUVPSimpleSizeButton.CLICK, function() {
				i.copyToClipboard(i.embdTxt.screen)
			}), i.sendMainHld = new FWDUVPDisplayObject("div"), i.sendMainHldBk = new FWDUVPDisplayObject("div"), i.sendMainHldBk.getStyle().background = "url('" + i.embedWindowBackground_str + "')", i.sendMainHldBk.getStyle().borderStyle = "solid", i.sendMainHldBk.getStyle().borderWidth = "1px", i.sendMainHldBk.getStyle().borderColor = i.borderColor_str, i.sendMainLbl = new FWDUVPDisplayObject("div"), i.sendMainLbl.setBackfaceVisibility(), i.sendMainLbl.getStyle().fontFamily = "Arial", i.sendMainLbl.getStyle().fontSize = "12px", i.sendMainLbl.getStyle().color = i.mainLabelsColor_str, i.sendMainLbl.getStyle().whiteSpace = "nowrap", i.sendMainLbl.getStyle().fontSmoothing = "antialiased", i.sendMainLbl.getStyle().webkitFontSmoothing = "antialiased", i.sendMainLbl.getStyle().textRendering = "optimizeLegibility", i.sendMainLbl.getStyle().padding = "0px", i.sendMainLbl.screen.className = "UVP-main-label", i.sendMainLbl.setInnerHTML("SEND TO A FRIEND"), i.yourEmailLabel_do = new FWDUVPDisplayObject("div"), i.yourEmailLabel_do.setBackfaceVisibility(), i.yourEmailLabel_do.screen.className = "UVP-secnd-label", i.yourEmailLabel_do.getStyle().fontFamily = "Arial", i.yourEmailLabel_do.getStyle().fontSize = "12px", i.yourEmailLabel_do.getStyle().color = i.secondaryLabelsColor_str, i.yourEmailLabel_do.getStyle().whiteSpace = "nowrap", i.yourEmailLabel_do.getStyle().padding = "0px", i.yourEmailLabel_do.setInnerHTML("Your email:"), i.yourEmailInpt = new FWDUVPDisplayObject("input"), i.yourEmailInpt.screen.className = "UVP-embed-inpt", i.yourEmailInpt.setBackfaceVisibility(), i.yourEmailInpt.getStyle().fontFamily = "Arial", i.yourEmailInpt.getStyle().fontSize = "12px", i.yourEmailInpt.getStyle().backgroundColor = i.inputBackgroundColor_str, i.yourEmailInpt.getStyle().color = i.inputColor_str, i.yourEmailInpt.getStyle().outline = 0, i.yourEmailInpt.getStyle().whiteSpace = "nowrap", i.yourEmailInpt.getStyle().padding = "6px", i.yourEmailInpt.getStyle().paddingTop = "4px", i.yourEmailInpt.getStyle().paddingBottom = "4px", i.friendEmailLbl = new FWDUVPDisplayObject("div"), i.friendEmailLbl.setBackfaceVisibility(), i.friendEmailLbl.screen.className = "UVP-secnd-label", i.friendEmailLbl.getStyle().fontFamily = "Arial", i.friendEmailLbl.getStyle().fontSize = "12px", i.friendEmailLbl.getStyle().color = i.secondaryLabelsColor_str, i.friendEmailLbl.getStyle().whiteSpace = "nowrap", i.friendEmailLbl.getStyle().padding = "0px", i.friendEmailLbl.setInnerHTML("Your friend's email:"), i.friendEmailInpt = new FWDUVPDisplayObject("input"), i.friendEmailInpt.screen.className = "UVP-embed-inpt", i.friendEmailInpt.setBackfaceVisibility(), i.friendEmailInpt.getStyle().fontFamily = "Arial", i.friendEmailInpt.getStyle().fontSize = "12px", i.friendEmailInpt.getStyle().backgroundColor = i.inputBackgroundColor_str, i.friendEmailInpt.getStyle().color = i.inputColor_str, i.friendEmailInpt.getStyle().outline = 0, i.friendEmailInpt.getStyle().whiteSpace = "nowrap", i.friendEmailInpt.getStyle().padding = "6px", i.friendEmailInpt.getStyle().paddingTop = "4px", i.friendEmailInpt.getStyle().paddingBottom = "4px", FWDUVPSimpleSizeButton.setPrototype(), i.sndBtn = new FWDUVPSimpleSizeButton(i.sendButtonNPath_str, i.sendButtonSPath_str, i.buttonWidth, i.buttonHeight, i.useHEX, e.nBC, e.sBC, !0), i.sndBtn.addListener(FWDUVPSimpleSizeButton.MOUSE_UP, i.sendClickHandler), i.infoText_do = new FWDUVPDisplayObject("div"), i.infoText_do.setBackfaceVisibility(), i.infoText_do.getStyle().fontFamily = "Arial", i.infoText_do.getStyle().fontSize = "12px", i.infoText_do.getStyle().color = i.secondaryLabelsColor_str, i.infoText_do.getStyle().whiteSpace = "nowrap", i.infoText_do.getStyle().fontSmoothing = "antialiased", i.infoText_do.getStyle().webkitFontSmoothing = "antialiased", i.infoText_do.getStyle().textRendering = "optimizeLegibility", i.infoText_do.getStyle().padding = "0px", i.infoText_do.getStyle().paddingTop = "4px", i.infoText_do.getStyle().textAlign = "center", i.infoText_do.getStyle().color = i.mainLabelsColor_str, i.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), i.clsBtn = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCloseButtonNormalState", "UVPCloseButtonSelectedState")) : (FWDUVPSimpleButton.setPrototype(), i.clsBtn = new FWDUVPSimpleButton(e.embedColoseN_img, e.embedWindowClosePathS_str, void 0, !0, e.useHEX, e.nBC, e.sBC, !1, !1, !1, !1, !0)), i.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, i.closeButtonOnMouseUpHandler), i.addChild(i.mainHld), i.mainHld.addChild(i.bk_do), i.linkAndEmbedHld.addChild(i.lnkAndEbdHldBk), i.linkAndEmbedHld.addChild(i.mainLbl), i.linkAndEmbedHld.addChild(i.linkLbl), i.linkAndEmbedHld.addChild(i.linkTxt), i.linkAndEmbedHld.addChild(i.embedLbl), i.linkAndEmbedHld.addChild(i.embdTxt), i.linkAndEmbedHld.addChild(i.copyLinkBtn), i.linkAndEmbedHld.addChild(i.copyEmbedBtn), i.sendMainHld.addChild(i.sendMainHldBk), i.sendMainHld.addChild(i.sendMainLbl), i.sendMainHld.addChild(i.yourEmailLabel_do), i.sendMainHld.addChild(i.yourEmailInpt), i.sendMainHld.addChild(i.friendEmailLbl), i.sendMainHld.addChild(i.friendEmailInpt), i.sendMainHld.addChild(i.sndBtn), i.mainHld.addChild(i.linkAndEmbedHld), i.mainHld.addChild(i.sendMainHld), i.mainHld.addChild(i.clsBtn))
		}, i.closeButtonOnMouseUpHandler = function() {
			i.isShowed_bl && i.hide()
		}, i.copyToClipboard = function(e) {
			n(e), document.execCommand("copy")
		};
		i.positionAndResize = function() {
			i.sW = s.sW, i.sH = s.sH, i.maxTextWidth = Math.min(i.sW - 150, 500), i.totalWidth = i.maxTextWidth + i.buttonWidth + 40, i.isMbl ? (i.linkTxt.setWidth(i.maxTextWidth + 52), i.embdTxt.setWidth(i.maxTextWidth + 52)) : (i.linkTxt.setWidth(i.maxTextWidth), i.embdTxt.setWidth(i.maxTextWidth)), i.positionFinal(), i.clsBtn.setX(i.sW - i.clsBtn.w - i.embedWindowCloseButtonMargins), i.clsBtn.setY(i.embedWindowCloseButtonMargins), i.setWidth(i.sW), i.setHeight(i.sH), i.mainHld.setWidth(i.sW), i.mainHld.setHeight(i.sH)
		}, i.positionFinal = function() {
			var e = !1,
				t;
			360 > i.sH || 350 > i.sW ? (i.linkTxt.getStyle().whiteSpace = "nowrap", i.embdTxt.getStyle().whiteSpace = "nowrap") : (i.linkTxt.getStyle().whiteSpace = "normal", i.embdTxt.getStyle().whiteSpace = "normal"), 6 > i.linkLbl.screen.offsetHeight && (e = !0);
			var o;
			o = e ? Math.round(100 * i.mainLbl.screen.getBoundingClientRect().height) : i.mainLbl.getHeight(), i.mainLbl.setX(16), i.linkLbl.setX(16), i.linkLbl.setY(o + 14);
			var s, n;
			e ? (s = Math.round(100 * i.linkLbl.screen.getBoundingClientRect().height), n = Math.round(100 * i.linkTxt.screen.getBoundingClientRect().height)) : (s = i.linkLbl.getHeight(), n = i.linkTxt.getHeight()), i.linkTxt.setX(10), i.linkTxt.setY(i.linkLbl.y + s + 5), i.isMbl ? i.copyLinkBtn.setX(-100) : i.copyLinkBtn.setX(i.maxTextWidth + 30), i.copyLinkBtn.setY(i.linkTxt.y + n - i.buttonHeight), i.embedLbl.setX(16), i.embedLbl.setY(i.copyLinkBtn.y + i.copyLinkBtn.h + 14);
			var a;
			a = e ? Math.round(100 * i.embdTxt.screen.getBoundingClientRect().height) : i.embdTxt.getHeight(), i.embdTxt.setX(10), i.embdTxt.setY(i.embedLbl.y + s + 5), i.isMbl ? i.copyEmbedBtn.setX(-100) : i.copyEmbedBtn.setX(i.maxTextWidth + 30), i.copyEmbedBtn.setY(i.embdTxt.y + a - i.buttonHeight), i.lnkAndEbdHldBk.setY(i.linkLbl.y - 9), i.lnkAndEbdHldBk.setWidth(i.totalWidth - 2), i.lnkAndEbdHldBk.setHeight(i.embdTxt.y + a - 9), i.linkAndEmbedHld.setWidth(i.totalWidth), i.linkAndEmbedHld.setHeight(i.embdTxt.y + a + 14);
			var d, r;
			e ? (d = Math.round(100 * i.sendMainLbl.screen.getBoundingClientRect().height), r = Math.round(100 * i.yourEmailInpt.screen.getBoundingClientRect().height)) : (d = i.sendMainLbl.getHeight(), r = i.yourEmailInpt.getHeight()), i.sendMainLbl.setX(16), i.yourEmailLabel_do.setX(16), i.yourEmailLabel_do.setY(d + 14), 400 < i.sW ? (i.yourEmailInpt.setX(10), i.yourEmailInpt.setWidth(parseInt(i.totalWidth - 52 - i.buttonWidth) / 2), i.yourEmailInpt.setY(i.yourEmailLabel_do.y + s + 5), i.friendEmailLbl.setX(i.yourEmailInpt.x + i.yourEmailInpt.w + 26), i.friendEmailLbl.setY(i.yourEmailLabel_do.y), i.friendEmailInpt.setX(i.yourEmailInpt.x + i.yourEmailInpt.w + 20), i.friendEmailInpt.setWidth(parseInt((i.maxTextWidth - 30) / 2)), i.friendEmailInpt.setY(i.yourEmailLabel_do.y + s + 5), i.sndBtn.setX(i.friendEmailInpt.x + i.yourEmailInpt.w + 10), i.sndBtn.setY(i.friendEmailInpt.y + r - i.buttonHeight)) : (i.yourEmailInpt.setX(10), i.yourEmailInpt.setWidth(i.totalWidth - 32), i.yourEmailInpt.setY(i.yourEmailLabel_do.y + s + 5), i.friendEmailLbl.setX(16), i.friendEmailLbl.setY(i.yourEmailInpt.y + r + 14), i.friendEmailInpt.setX(10), i.friendEmailInpt.setY(i.friendEmailLbl.y + s + 5), i.friendEmailInpt.setWidth(i.totalWidth - 32), i.sndBtn.setX(i.totalWidth - i.buttonWidth - 10), i.sndBtn.setY(i.friendEmailInpt.y + r + 10)), i.sendMainHldBk.setY(i.yourEmailLabel_do.y - 9), i.sendMainHldBk.setWidth(i.totalWidth - 2), i.sendMainHldBk.setHeight(i.sndBtn.y + i.sndBtn.h - 9), i.sendMainHld.setWidth(i.totalWidth), i.sendMainHld.setHeight(i.sndBtn.y + i.sndBtn.h + 14), t = e ? Math.round(100 * i.linkAndEmbedHld.screen.getBoundingClientRect().height + 100 * i.sendMainHld.screen.getBoundingClientRect().height) : i.linkAndEmbedHld.getHeight() + i.sendMainHld.getHeight(), i.linkAndEmbedHld.setX(parseInt((i.sW - i.totalWidth) / 2)), i.linkAndEmbedHld.setY(parseInt((i.sH - t) / 2) - 8), i.sendMainHld.setX(parseInt((i.sW - i.totalWidth) / 2)), e ? i.sendMainHld.setY(Math.round(i.linkAndEmbedHld.y + 100 * i.linkAndEmbedHld.screen.getBoundingClientRect().height + 20)) : i.sendMainHld.setY(i.linkAndEmbedHld.y + i.linkAndEmbedHld.getHeight() + 20)
		}, i.sendClickHandler = function() {
			var e = !1;
			if (!i.getValidEmail(i.yourEmailInpt.screen.value)) {
				if (FWDAnimation.isTweening(i.yourEmailInpt.screen)) return;
				FWDAnimation.to(i.yourEmailInpt.screen, .1, {
					css: {
						backgroundColor: "#FF0000"
					},
					yoyo: !0,
					repeat: 3
				}), e = !0
			}
			if (!i.getValidEmail(i.friendEmailInpt.screen.value)) {
				if (FWDAnimation.isTweening(i.friendEmailInpt.screen)) return;
				FWDAnimation.to(i.friendEmailInpt.screen, .1, {
					css: {
						backgroundColor: "#FF0000"
					},
					yoyo: !0,
					repeat: 3
				}), e = !0
			}
			e || i.sendEmail()
		}, i.sendEmail = function() {
			if (!i.isSending_bl) {
				i.isSending_bl = !0, i.xhr = new XMLHttpRequest, i.xhr.onreadystatechange = i.onChange, i.xhr.onerror = i.ajaxOnErrorHandler;
				try {
					i.xhr.open("get", i.sendToAFriendPath_str + "?friendMail=" + i.friendEmailInpt.screen.value + "&yourMail=" + i.yourEmailInpt.screen.value + "&link=" + encodeURI(i.linkToVideo_str), !0), i.xhr.send()
				} catch (o) {
					i.showInfo("ERROR", !0), console && console.log(o), o.message && t.console && console.log(o.message)
				}
				i.resetInputs()
			}
		}, i.ajaxOnErrorHandler = function(o) {
			i.showInfo("ERROR", !0);
			try {
				t.console && console.log(o), t.console && console.log(o.message)
			} catch (t) {}
			i.isSending_bl = !1
		}, i.onChange = function() {
			4 == i.xhr.readyState && 200 == i.xhr.status && ("sent" == i.xhr.responseText ? i.showInfo("SENT") : (i.showInfo("ERROR", !0), t.console && console.log("Error The server can't send the email!")), i.isSending_bl = !1)
		}, i.resetInputs = function() {
			i.yourEmailInpt.screen.value = "", i.friendEmailInpt.screen.value = ""
		}, i.getValidEmail = function(e) {
			return !!(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e) && "" != e)
		}, i.setEmbedData = function() {
			var e = location.href,
				t = location.protocol + "//" + location.host,
				o = location.pathname,
				n = location.hash,
				a = location.search,
				d = t + o;
			a = a.replace(/&?UVPInstanceName=.+UVPVideoId=[0-9]+/g, ""), e = e.replace(/&?UVPInstanceName=.+UVPVideoId=[0-9]+/g, ""), i.finalEmbedPath_str = a ? n ? d + a + "&UVPInstanceName=" + s.instanceName_str + "&UVPPlaylistId=" + s.catId + "&UVPVideoId=" + s.id + n : d + a + "&UVPInstanceName=" + s.instanceName_str + "&UVPPlaylistId=" + s.catId + "&UVPVideoId=" + s.id : n ? d + "?UVPInstanceName=" + s.instanceName_str + "&UVPPlaylistId=" + s.catId + "&UVPVideoId=" + s.id + n : d + "?UVPInstanceName=" + s.instanceName_str + "&UVPPlaylistId=" + s.catId + "&UVPVideoId=" + s.id;
			i.linkToVideo_str = n ? -1 == n.indexOf("playlistId=") ? d + a + n + "&playlistId=" + s.catId + "&videoId=" + s.id : e : e + "#/?playlistId=" + s.catId + "&videoId=" + s.id;
			i.finalEmbedPath_str = encodeURI(i.finalEmbedPath_str), i.linkToVideo_str = encodeURI(i.linkToVideo_str), i.finalEmbedCode_str = "<iframe src='" + i.finalEmbedPath_str + "' width='" + s.sW + "' height='" + s.sH + "' frameborder='0' scrolling='no' allowfullscreen></iframe>", FWDUVPUtils.isIE ? (i.linkTxt.screen.innerText = i.linkToVideo_str, i.embdTxt.screen.innerText = i.finalEmbedCode_str) : (i.linkTxt.screen.textContent = i.linkToVideo_str, i.embdTxt.screen.textContent = i.finalEmbedCode_str)
		}, i.showInfo = function(e, t) {
			i.infoText_do.setInnerHTML(e), i.sendMainHld.addChild(i.infoText_do), i.infoText_do.setWidth(i.buttonWidth), i.infoText_do.setHeight(i.buttonHeight - 4), i.infoText_do.setX(i.sndBtn.x), i.infoText_do.setY(i.sndBtn.y - 23), i.infoText_do.setAlpha(0), i.infoText_do.getStyle().color = t ? "#FF0000" : i.mainLabelsColor_str, FWDAnimation.killTweensOf(i.infoText_do), FWDAnimation.to(i.infoText_do, .16, {
				alpha: 1,
				yoyo: !0,
				repeat: 7
			})
		}, i.show = function() {
			i.isShowed_bl || (i.isShowed_bl = !0, s.main_do.addChild(i), i.init(), i.resetInputs(), i.setEmbedData(), (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && s.main_do.setSelectable(!0), i.useVectorIcons_bl ? i.checkButtonsId_to = setInterval(function() {
				0 != i.clsBtn.w && (i.positionAndResize(), clearInterval(i.checkButtonsId_to), clearTimeout(i.hideCompleteId_to), clearTimeout(i.showCompleteId_to), i.mainHld.setY(-i.sH), i.showCompleteId_to = setTimeout(i.showCompleteHandler, 900), setTimeout(function() {
					FWDAnimation.to(i.mainHld, .8, {
						y: 0,
						delay: .1,
						ease: Expo.easeInOut
					})
				}, 100))
			}, 50) : (i.positionAndResize(), clearTimeout(i.hideCompleteId_to), clearTimeout(i.showCompleteId_to), i.mainHld.setY(-i.sH), i.showCompleteId_to = setTimeout(i.showCompleteHandler, 900), setTimeout(function() {
				FWDAnimation.to(i.mainHld, .8, {
					y: 0,
					delay: .1,
					ease: Expo.easeInOut
				})
			}, 100)))
		}, i.showCompleteHandler = function() {}, i.hide = function() {
			i.isShowed_bl && (i.isShowed_bl = !1, s.customContextMenu_do && s.customContextMenu_do.enable(), i.positionAndResize(), clearTimeout(i.hideCompleteId_to), clearTimeout(i.showCompleteId_to), (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && s.main_do.setSelectable(!1), i.hideCompleteId_to = setTimeout(i.hideCompleteHandler, 800), FWDAnimation.killTweensOf(i.mainHld), FWDAnimation.to(i.mainHld, .8, {
				y: -i.sH,
				ease: Expo.easeInOut
			}))
		}, i.hideCompleteHandler = function() {
			s.main_do.removeChild(i), i.dispatchEvent(o.HIDE_COMPLETE)
		}, i.useHEX && i.init()
	};
	o.setPrototype = function() {
		o.prototype = new FWDUVPDisplayObject("div")
	}, o.ERROR = "error", o.HIDE_COMPLETE = "hideComplete", o.prototype = null, t.FWDUVPEmbedWindow = o
}(window),
function() {
	window.FWDUVPEventDispatcher = function() {
		'use strict';
		this.listeners = {
			events_ar: []
		}, this.addListener = function(e, t) {
			if (e == null) throw Error("type is required.");
			if ("object" == typeof e) throw Error("type must be of type String.");
			if ("function" != typeof t) throw Error("listener must be of type Function.");
			var o = {};
			o.type = e, o.listener = t, o.target = this, this.listeners.events_ar.push(o)
		}, this.dispatchEvent = function(e, t) {
			if (null != this.listeners) {
				if (null == e) throw Error("type is required.");
				if ("object" == typeof e) throw Error("type must be of type String.");
				for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
					if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
						if (t)
							for (var n in t) this.listeners.events_ar[o][n] = t[n];
						this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
					}
			}
		}, this.removeListener = function(e, t) {
			if (e == null) throw Error("type is required.");
			if ("object" == typeof e) throw Error("type must be of type String.");
			if ("function" != typeof t) throw Error("listener must be of type Function." + e);
			for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
				if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
					this.listeners.events_ar.splice(o, 1);
					break
				}
		}, this.destroy = function() {
			this.listeners = null, this.addListener = null, this.dispatchEvent = null, this.removeListener = null
		}
	}
}(window),
function(e) {
	var t = function(o, s, n) {
		'use strict';
		var i = this,
			a = t.prototype;
		i.screenToTest = o, i.screenToTest2 = s, i.hideDelay = n, i.globalX = 0, i.globalY = 0, i.dispatchOnceShow_bl = !0, i.isStopped_bl = !0, i.isMbl = FWDUVPUtils.isMobile, i.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, i.init = function() {}, i.start = function() {
			i.currentTime = new Date().getTime(), clearInterval(i.checkIntervalId_int), i.checkIntervalId_int = setInterval(i.update, 100), i.addMouseOrTouchCheck(), i.isStopped_bl = !1
		}, i.stop = function() {
			clearInterval(i.checkIntervalId_int), i.isStopped_bl = !0, i.removeMouseOrTouchCheck(), i.removeMouseOrTouchCheck2()
		}, i.addMouseOrTouchCheck = function() {
			i.hasInitialTestEvents_bl || (i.hasInitialTestEvents_bl = !0, i.isMbl ? i.hasPointerEvent_bl ? (i.screenToTest.screen.addEventListener("pointerdown", i.onMouseOrTouchUpdate), i.screenToTest.screen.addEventListener("MSPointerMove", i.onMouseOrTouchUpdate)) : i.screenToTest.screen.addEventListener("touchstart", i.onMouseOrTouchUpdate) : e.addEventListener ? e.addEventListener("mousemove", i.onMouseOrTouchUpdate) : document.attachEvent && document.attachEvent("onmousemove", i.onMouseOrTouchUpdate))
		}, i.removeMouseOrTouchCheck = function() {
			i.hasInitialTestEvents_bl && (i.hasInitialTestEvents_bl = !1, i.isMbl ? i.hasPointerEvent_bl ? (i.screenToTest.screen.removeEventListener("pointerdown", i.onMouseOrTouchUpdate), i.screenToTest.screen.removeEventListener("MSPointerMove", i.onMouseOrTouchUpdate)) : i.screenToTest.screen.removeEventListener("touchstart", i.onMouseOrTouchUpdate) : e.removeEventListener ? e.removeEventListener("mousemove", i.onMouseOrTouchUpdate) : document.detachEvent && document.detachEvent("onmousemove", i.onMouseOrTouchUpdate))
		}, i.addMouseOrTouchCheck2 = function() {
			i.addSecondTestEvents_bl || (i.addSecondTestEvents_bl = !0, i.screenToTest.screen.addEventListener ? i.screenToTest.screen.addEventListener("mousemove", i.secondTestMoveDummy) : i.screenToTest.screen.attachEvent && i.screenToTest.screen.attachEvent("onmousemove", i.secondTestMoveDummy))
		}, i.removeMouseOrTouchCheck2 = function() {
			i.addSecondTestEvents_bl && (i.addSecondTestEvents_bl = !1, i.screenToTest.screen.removeEventListener ? i.screenToTest.screen.removeEventListener("mousemove", i.secondTestMoveDummy) : i.screenToTest.screen.detachEvent && i.screenToTest.screen.detachEvent("onmousemove", i.secondTestMoveDummy))
		}, i.secondTestMoveDummy = function() {
			i.removeMouseOrTouchCheck2(), i.addMouseOrTouchCheck()
		}, i.onMouseOrTouchUpdate = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			i.globalX != e.screenX && i.globalY != e.screenY && (i.currentTime = new Date().getTime()), i.globalX = e.screenX, i.globalY = e.screenY, i.isMbl || FWDUVPUtils.hitTest(i.screenToTest.screen, i.globalX, i.globalY) || (i.removeMouseOrTouchCheck(), i.addMouseOrTouchCheck2())
		}, i.update = function() {
			new Date().getTime() > i.currentTime + i.hideDelay ? i.dispatchOnceShow_bl && (i.dispatchOnceHide_bl = !0, i.dispatchOnceShow_bl = !1, i.dispatchEvent(t.HIDE), clearTimeout(i.hideCompleteId_to), i.hideCompleteId_to = setTimeout(function() {
				i.dispatchEvent(t.HIDE_COMPLETE)
			}, 1e3)) : i.dispatchOnceHide_bl && (clearTimeout(i.hideCompleteId_to), i.dispatchOnceHide_bl = !1, i.dispatchOnceShow_bl = !0, i.dispatchEvent(t.SHOW))
		}, i.reset = function() {
			clearTimeout(i.hideCompleteId_to), i.currentTime = new Date().getTime(), i.dispatchEvent(t.SHOW)
		}, i.init()
	};
	t.HIDE = "hide", t.SHOW = "show", t.HIDE_COMPLETE = "hideComplete", t.setPrototype = function() {
		t.prototype = new FWDUVPEventDispatcher
	}, e.FWDUVPHider = t
}(window),
function(e) {
	var t = function(e, o, s) {
		'use strict';
		var n = this,
			i = t.prototype;
		n.warningIconPath_str = o, n.showErrorInfo_bl = s, n.allowToRemove_bl = !0, n.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, n.init = function() {
			n.setResizableSizeAfterParent(), n.bk_do = new FWDUVPDisplayObject("div"), n.bk_do.setAlpha(.6), n.bk_do.setBkColor("#000000"), n.addChild(n.bk_do), n.textHolder_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIEAndLessThen9 || (n.textHolder_do.getStyle().font = "Arial"), n.textHolder_do.getStyle().wordWrap = "break-word", n.textHolder_do.getStyle().padding = "10px", n.textHolder_do.getStyle().paddingLeft = "42px", n.textHolder_do.getStyle().lineHeight = "18px", n.textHolder_do.getStyle().color = "#000000", n.textHolder_do.setBkColor("#EEEEEE");
			var e = new Image;
			e.src = n.warningIconPath_str, n.img_do = new FWDUVPDisplayObject("img"), n.img_do.setScreen(e), n.img_do.setWidth(28), n.img_do.setHeight(28), n.addChild(n.textHolder_do), n.addChild(n.img_do)
		}, n.showText = function(e) {
			n.isShowedOnce_bl || (n.hasPointerEvent_bl ? n.screen.addEventListener("pointerdown", n.closeWindow) : (n.screen.addEventListener("click", n.closeWindow), n.screen.addEventListener("touchend", n.closeWindow)), n.isShowedOnce_bl = !0), n.setVisible(!1), n.textHolder_do.getStyle().paddingBottom = "10px", n.textHolder_do.setInnerHTML(e), clearTimeout(n.show_to), n.show_to = setTimeout(n.show, 60), setTimeout(function() {
				n.positionAndResize()
			}, 10)
		}, n.show = function() {
			var t = Math.min(640, e.sW - 120);
			n.isShowed_bl = !0, n.textHolder_do.setWidth(t), setTimeout(function() {
				n.showErrorInfo_bl && n.setVisible(!0), n.positionAndResize()
			}, 100)
		}, n.positionAndResize = function() {
			var t = n.textHolder_do.getWidth(),
				o = n.textHolder_do.getHeight(),
				s = parseInt((e.sW - t) / 2),
				i = parseInt((e.sH - o) / 2);
			n.bk_do.setWidth(e.sW), n.bk_do.setHeight(e.sH), n.textHolder_do.setX(s), n.textHolder_do.setY(i), n.img_do.setX(s + 6), n.img_do.setY(i + parseInt((n.textHolder_do.getHeight() - n.img_do.h) / 2))
		}, n.closeWindow = function() {
			n.allowToRemove_bl && (n.isShowed_bl = !1, clearTimeout(n.show_to), setTimeout(function() {
				try {
					e.main_do.removeChild(n)
				} catch (t) {}
			}, 100))
		}, n.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div", "relative")
	}, t.prototype = null, e.FWDUVPInfo = t
}(window),
function(e) {
	var t = function(e, o) {
		'use strict';
		var s = this,
			n = t.prototype;
		s.embedColoseN_img = o.embedColoseN_img, s.embedWindowBackground_str = o.embedWindowBackground_str, s.embedWindowInputBackgroundPath_str = o.embedWindowInputBackgroundPath_str, s.secondaryLabelsColor_str = o.secondaryLabelsColor_str, s.inputColor_str = o.inputColor_str, s.sendButtonNPath_str = o.sendButtonNPath_str, s.sendButtonSPath_str = o.sendButtonSPath_str, s.inputBackgroundColor_str = o.inputBackgroundColor_str, s.borderColor_str = o.borderColor_str, s.sendToAFriendPath_str = o.sendToAFriendPath_str, s.maxTextWidth = 0, s.totalWidth = 0, s.sW = 0, s.sH = 0, s.buttonWidth = 44, s.buttonHeight = 19, s.embedWindowCloseButtonMargins = o.embedWindowCloseButtonMargins, s.shareAndEmbedTextColor_str = o.shareAndEmbedTextColor_str, s.isDark = !0, -1 == s.embedWindowBackground_str.indexOf("dark") && (s.isDark = !1), s.isMbl = FWDUVPUtils.isMobile, s.useVectorIcons_bl = o.useVectorIcons_bl, s.init = function() {
			s.setBackfaceVisibility(), s.mainHld = new FWDUVPDisplayObject("div");
			var e = "fwduvp-info-window-white";
			s.isDark && (e = "fwduvp-info-window-dark"), s.mainHld.screen.className = e, s.mainBk_do = new FWDUVPDisplayObject("div"), s.mainBk_do.getStyle().width = "100%", s.mainBk_do.getStyle().height = "100%", s.mainBk_do.setAlpha(.9), s.mainBk_do.getStyle().background = "url('" + s.embedWindowBackground_str + "')", s.mainTextHolder_do = new FWDUVPDisplayObject("div", "absolute"), s.bk_do = new FWDUVPDisplayObject("div"), s.bk_do.getStyle().background = "url('" + s.embedWindowBackground_str + "')", s.bk_do.getStyle().borderStyle = "solid", s.bk_do.getStyle().borderWidth = "1px", s.bk_do.getStyle().borderColor = s.borderColor_str, s.text_do = new FWDUVPDisplayObject("div", "relative"), s.text_do.hasTransform3d_bl = !1, s.text_do.hasTransform2d_bl = !1, s.text_do.getStyle().fontFamily = "Arial", s.text_do.getStyle().fontSize = "12px", s.text_do.getStyle().fontSmoothing = "antialiased", s.text_do.getStyle().webkitFontSmoothing = "antialiased", s.text_do.getStyle().textRendering = "optimizeLegibility", s.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), s.clsBtn = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCloseButtonNormalState", "UVPCloseButtonSelectedState")) : (FWDUVPSimpleButton.setPrototype(), s.clsBtn = new FWDUVPSimpleButton(o.infoWindowClooseN_img, o.embedWindowClosePathS_str, void 0, !0, o.useHEX, o.nBC, o.sBC, !1, !1, !1, !1, !0)), s.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, s.closeButtonOnMouseUpHandler), s.mainHld.addChild(s.mainBk_do), s.mainTextHolder_do.addChild(s.bk_do), s.mainTextHolder_do.addChild(s.text_do), s.mainHld.addChild(s.mainTextHolder_do), s.addChild(s.mainHld), s.mainHld.addChild(s.clsBtn)
		}, s.closeButtonOnMouseUpHandler = function() {
			s.isShowed_bl && s.hide()
		}, s.positionAndResize = function() {
			s.sW = e.sW, s.sH = e.sH, s.maxTextWidth = Math.min(s.sW - 150, 500), s.totalWidth = s.maxTextWidth + s.buttonWidth + 40, s.positionFinal(), s.clsBtn.setX(s.sW - s.clsBtn.w - s.embedWindowCloseButtonMargins), s.clsBtn.setY(s.embedWindowCloseButtonMargins), s.setWidth(s.sW), s.setHeight(s.sH), s.mainHld.setWidth(s.sW), s.mainHld.setHeight(s.sH)
		}, s.positionFinal = function() {
			var e;
			s.mainTextHolder_do.setWidth(s.totalWidth), e = s.mainTextHolder_do.getHeight(), s.bk_do.setWidth(s.totalWidth - 2), s.bk_do.setHeight(e - 2), s.mainTextHolder_do.setX(parseInt((s.sW - s.totalWidth) / 2)), s.mainTextHolder_do.setY(parseInt((s.sH - e) / 2) - 8)
		}, s.show = function(t) {
			s.isShowed_bl || (s.isShowed_bl = !0, e.main_do.addChild(s), s.text_do.setInnerHTML(t), s.positionAndResize(), clearTimeout(s.hideCompleteId_to), clearTimeout(s.showCompleteId_to), s.mainHld.setY(-s.sH), s.showCompleteId_to = setTimeout(s.showCompleteHandler, 900), setTimeout(function() {
				FWDAnimation.to(s.mainHld, .8, {
					y: 0,
					delay: .1,
					ease: Expo.easeInOut
				})
			}, 100))
		}, s.showCompleteHandler = function() {}, s.hide = function() {
			s.isShowed_bl && (s.isShowed_bl = !1, e.customContextMenu_do && e.customContextMenu_do.enable(), s.positionAndResize(), clearTimeout(s.hideCompleteId_to), clearTimeout(s.showCompleteId_to), s.hideCompleteId_to = setTimeout(s.hideCompleteHandler, 800), FWDAnimation.killTweensOf(s.mainHld), FWDAnimation.to(s.mainHld, .8, {
				y: -s.sH,
				ease: Expo.easeInOut
			}))
		}, s.hideCompleteHandler = function() {
			e.main_do.removeChild(s), s.dispatchEvent(t.HIDE_COMPLETE)
		}, s.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.ERROR = "error", t.HIDE_COMPLETE = "hideComplete", t.prototype = null, e.FWDUVPInfoWindow = t
}(window),
function(window) {
	var FWDUVPlayer = function(props) {
		'use strict';
		FWDUVPlayer.V = "8.4";
		var _s = this;
		_s.isInstantiate_bl = !1, _s.displayType = props.displayType || FWDUVPlayer.RESPONSIVE, _s.displayType.toLowerCase() != FWDUVPlayer.RESPONSIVE && _s.displayType.toLowerCase() != FWDUVPlayer.FULL_SCREEN && _s.displayType.toLowerCase() != FWDUVPlayer.STICKY && _s.displayType.toLowerCase() != FWDUVPlayer.AFTER_PARENT && _s.displayType.toLowerCase() != FWDUVPlayer.LIGHTBOX && (_s.displayType = FWDUVPlayer.RESPONSIVE), _s.displayType = _s.displayType.toLowerCase(), _s.stickyOnScroll = props.stickyOnScroll || "no", _s.stickyOnScroll = "yes" == _s.stickyOnScroll, _s.displayType != FWDUVPlayer.RESPONSIVE && (_s.stickyOnScroll = !1), _s.isMinShowed = !0, _s.stickyOnScrollWidth = props.stickyOnScrollWidth || 700, _s.stickyOnScrollHeight = props.stickyOnScrollHeight || 394, _s.maxWidth = props.maxWidth || 640, _s.maxHeight = props.maxHeight || 380, _s.useYoutube_bl = props.useYoutube || "no", _s.useYoutube_bl = "yes" == _s.useYoutube_bl, _s.useVimeo_bl = props.useVimeo || "no", _s.useVimeo_bl = "yes" == _s.useVimeo_bl, _s.mainFolderPath_str = props.mainFolderPath, _s.mainFolderPath_str.lastIndexOf("/") + 1 != _s.mainFolderPath_str.length && (_s.mainFolderPath_str += "/"), _s.sknPth = props.skinPath, _s.sknPth.lastIndexOf("/") + 1 != _s.sknPth.length && (_s.sknPth += "/"), _s.warningIconPath_str = _s.mainFolderPath_str + _s.sknPth + "warningIcon.png", FWDUVPlayer.YTAPIReady = !1, _s.fillEntireVideoScreen_bl = !1, _s.init = function() {
			if (!_s.isInstantiate_bl) return (FWDUVPlayer.instaces_ar.push(_s), FWDTweenLite.ticker.useRAF(!1), _s.props = props, _s.instanceName_str = _s.props.instanceName, !_s.instanceName_str) ? void alert("FWDUVPlayer instance name is required please make sure that the instanceName parameter exsists and it's value is uinique.") : window[_s.instanceName_str] ? void alert("FWDUVPlayer instance name " + _s.instanceName_str + " is already defined and contains a different instance reference, set a different instance name.") : (window[_s.instanceName_str] = _s, !_s.props) ? void alert("FWDUVPlayer constructor properties object is not defined!") : _s.props.parentId ? (_s.displayType == FWDUVPlayer.RESPONSIVE && (_s.mustHaveHolderDiv_bl = !0), _s.mustHaveHolderDiv_bl && !FWDUVPUtils.getChildById(_s.props.parentId) ? void alert("FWDUVPlayer holder div is not found, please make sure that the div exsists and the id is correct! " + _s.props.parentId) : void(_s.body = document.getElementsByTagName("body")[0], _s.displayType == FWDUVPlayer.STICKY ? (_s.stageContainer = document.createElement("div"), _s.stageContainer.style.position = "fixed", _s.stageContainer.style.width = "100%", _s.stageContainer.style.zIndex = "999999", _s.stageContainer.style.height = "0px", document.documentElement.appendChild(_s.stageContainer), _s.stageContainer.style.overflow = "visible") : _s.displayType == FWDUVPlayer.FULL_SCREEN || _s.displayType == FWDUVPlayer.LIGHTBOX ? _s.stageContainer = document.documentElement : _s.stageContainer = FWDUVPUtils.getChildById(_s.props.parentId), _s.position_str = _s.props.verticalPosition, !_s.position_str && (_s.position_str = FWDUVPlayer.POSITION_TOP), _s.position_str = "bottom" == _s.position_str ? FWDUVPlayer.POSITION_BOTTOM : FWDUVPlayer.POSITION_TOP, _s.horizontalPosition_str = _s.props.horizontalPosition, !_s.horizontalPosition_str && (_s.horizontalPosition_str = FWDUVPlayer.CENTER), _s.horizontalPosition_str = "center" == _s.horizontalPosition_str ? FWDUVPlayer.CENTER : "left" == _s.horizontalPosition_str ? FWDUVPlayer.LEFT : "right" == _s.horizontalPosition_str ? FWDUVPlayer.RIGHT : FWDUVPlayer.CENTER, _s.isEmbedded_bl && (_s.displayType = FWDUVPlayer.FULL_SCREEN), _s.listeners = {
				events_ar: []
			}, _s.spaceBetweenControllerAndPlaylist = _s.props.spaceBetweenControllerAndPlaylist || 1, _s.autoScale_bl = _s.props.autoScale, _s.autoScale_bl = "yes" == _s.autoScale_bl, _s.ec = document.getElementById("fwduvp_extra_content"), _s.showPreloader_bl = _s.props.showPreloader, _s.showPreloader_bl = "yes" == _s.showPreloader_bl, _s.preloaderColors = _s.props.preloaderColors || ["#666666", "#FFFFFF"], _s.backgroundColor_str = _s.props.backgroundColor || "transparent", _s.videoBackgroundColor_str = _s.props.videoBackgroundColor || "transparent", _s.mainBackgroundImagePath_str = _s.props.mainBackgroundImagePath, _s.mainBackgroundImagePath_str && 3 > _s.mainBackgroundImagePath_str.length && (_s.mainBackgroundImagePath_str = void 0), _s.animate_bl = !0, _s.isShowedFirstTime_bl = !0, _s.offsetX = parseInt(_s.props.offsetX) || 0, _s.offsetY = parseInt(_s.props.offsetY) || 0, _s.lastX = 0, _s.lastY = 0, _s.tempStageWidth = 0, _s.tempStageHeight = 0, _s.tempVidStageWidth = 0, _s.tempVidStageHeight = 0, _s.sW = 0, _s.sH = 0, _s.vidStageWidth = 0, _s.vidStageHeight = 0, _s.catId = -1, _s.id = -1, _s.totaadsIdeos = 0, _s.prevCatId = -1, _s.totalTimePlayed = 0, _s.videoSourcePath_str = "", _s.prevVideoSourcePath_str, _s.posterPath_str = _s.props.posterPath, _s.playListThumbnailWidth = _s.props.thumbnailWidth || 80, _s.playListThumbnailHeight = _s.props.thumbnailHeight || 80, _s.showOnlyThumbnail = _s.props.showOnlyThumbnail, _s.showOnlyThumbnail = "yes" == _s.showOnlyThumbnail, _s.playlistWidth = _s.props.playlistRightWidth || 250, _s.playlistHeight = 0, _s.showPlaylistButtonAndPlaylist_bl = _s.props.showPlaylistButtonAndPlaylist, _s.showPlaylistButtonAndPlaylist_bl = "no" != _s.showPlaylistButtonAndPlaylist_bl, _s.isPlaylistShowed_bl = _s.props.showPlaylistByDefault, _s.isPlaylistShowed_bl = "no" != _s.isPlaylistShowed_bl, _s.showErrorInfo_bl = _s.props.showErrorInfo, _s.showErrorInfo_bl = "no" != _s.showErrorInfo_bl, _s.showAnnotationsPositionTool_bl = _s.props.showAnnotationsPositionTool, _s.showAnnotationsPositionTool_bl = "yes" == _s.showAnnotationsPositionTool_bl, _s.showAnnotationsPositionTool_bl && (_s.isPlaylistShowed_bl = !1), "pause" != FWDUVPlayer.videoStartBehaviour && "stop" != FWDUVPlayer.videoStartBehaviour && "default" != FWDUVPlayer.videoStartBehaviour && (FWDUVPlayer.videoStartBehaviour = "pause"), _s.lightBoxBackgroundOpacity = _s.props.lightBoxBackgroundOpacity || 1, _s.lightBoxBackgroundColor_str = _s.props.lightBoxBackgroundColor || "transparent", _s.preloaderBackgroundColor = _s.props.preloaderBackgroundColor || "#000000", _s.preloaderFillColor = _s.props.preloaderFillColor || "#FFFFFF", _s.addPrevId = 999999999 * Math.random(), _s.orintationChangeComplete_bl = !0, _s.isInstantiate_bl = !0, _s.useDeepLinking_bl = _s.props.useDeepLinking, _s.useDeepLinking_bl = "yes" == _s.useDeepLinking_bl, _s.isMbl = FWDUVPUtils.isMobile, _s.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, _s.lightBoxWidth = _s.props.maxWidth || 500, _s.lightBoxHeight = _s.props.maxHeight || 400, _s.isShowed_bl = _s.props.showPlayerByDefault, _s.isShowed_bl = "yes" == _s.isShowed_bl, _s.googleAnalyticsTrackingCode = _s.props.googleAnalyticsTrackingCode, !window.ga && _s.googleAnalyticsTrackingCode ? (function(e, t, s, o, n, i, d) {
				e.GoogleAnalyticsObject = n, e[n] = e[n] || function() {
					(e[n].q = e[n].q || []).push(arguments)
				}, e[n].l = 1 * new Date, i = t.createElement(s), d = t.getElementsByTagName(s)[0], i.async = 1, i.src = o, d.parentNode.insertBefore(i, d)
			}(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", _s.googleAnalyticsTrackingCode, "auto"), ga("send", "pageview")) : window.ga && _s.googleAnalyticsTrackingCode && (ga("create", _s.googleAnalyticsTrackingCode, "auto"), ga("send", "pageview")), _s.displayType == FWDUVPlayer.LIGHTBOX ? _s.setupLightBox() : _s.displayType == FWDUVPlayer.STICKY ? (_s.setupPlayer(), _s.startResizeHandler()) : _s.initializeOnlyWhenVisible_bl ? (_s.startResizeHandler(), window.addEventListener("scroll", _s.onInitlalizeScrollHandler), setTimeout(_s.onInitlalizeScrollHandler, 500)) : (_s.setupPlayer(), _s.startResizeHandler()))) : void alert("Property parentId is not defined in the FWDUVPlayer constructor, _s property represents the div id into which the megazoom is added as a child!")
		}, _s.addMinOnScroll = function() {
			_s.displayType != FWDUVPlayer.RESPONSIVE || _s.stickyOnScroll && window.addEventListener("scroll", _s.minimizeOnScrollHandler)
		}, _s.removeMinOnScroll = function() {
			_s.stickyOnScroll && window.removeEventListener("scroll", _s.minimizeOnScrollHandler)
		}, _s.minimizeOnScrollHandler = function() {
			var e = FWDUVPUtils.getScrollOffsets();
			_s.pageXOffset = e.x, _s.pageYOffset = e.y, 0 > _s.stageContainer.getBoundingClientRect().bottom ? _s.setMinimized() : _s.setNormal()
		}, _s.setMinimized = function() {
			_s.isMin || _s.isFullscreen_bl || (_s.isMin = !0, _s.main_do.getStyle().position = "fixed", _s.main_do.getStyle().zIndex = 9999999999999, _s.main_do.setAlpha(0), _s.startPosisionOnMin())
		}, _s.startPosisionOnMin = function() {
			_s.wasPlaylistShowed_bl = _s.isPlaylistShowed_bl, _s.showPlaylist(), _s.resizeHandler(), _s.positionOnMin()
		}, _s.setNormal = function() {
			_s.isMin && (_s.isMinShowed = !0, _s.isMin = !1, _s.main_do.getStyle().position = "relative", _s.main_do.getStyle().zIndex = 0, FWDAnimation.killTweensOf(_s.main_do), _s.main_do.setAlpha(1), _s.main_do.setX(0), _s.main_do.setY(0), _s.opener_do && _s.opener_do.setX(-1e3), _s.startPosisionOnNormal())
		}, _s.startPosisionOnNormal = function() {
			_s.opener_do && _s.opener_do.showCloseButton(), _s.isPlaylistShowed_bl = _s.wasPlaylistShowed_bl, _s.isPlaylistShowed_bl && _s.hidePlaylist(!0), _s.resizeHandler()
		}, _s.positionOnMin = function(e) {
			if (_s.isMin || e) {
				var t = 5,
					o = .2;
				_s.isMbl && (t = 0);
				var s = 0;
				if (_s.isMinShowed || (o = 0, s = Math.round(_s.tempStageHeight) + t), _s.opener_do) var n = _s.ws.w - _s.opener_do.w - t,
					i = _s.ws.h - _s.tempStageHeight - t + s - _s.opener_do.h;
				_s.main_do.setX(_s.ws.w - _s.tempStageWidth - t), 0 == _s.main_do.alpha || e ? (0 == _s.main_do.alpha && (_s.main_do.setY(_s.ws.h), _s.opener_do && (_s.opener_do.setX(n), _s.opener_do.setY(_s.ws.h))), FWDAnimation.to(_s.main_do, .8, {
					alpha: 1,
					y: _s.ws.h - _s.tempStageHeight - t + s,
					delay: o,
					ease: Expo.easeInOut
				}), _s.opener_do && (FWDAnimation.killTweensOf(_s.opener_do), FWDAnimation.to(_s.opener_do, .8, {
					x: n,
					y: i,
					delay: o,
					ease: Expo.easeInOut
				}))) : (FWDAnimation.killTweensOf(_s.main_do), _s.main_do.setAlpha(1), _s.main_do.setY(_s.ws.h - _s.tempStageHeight - t + s), _s.opener_do && (FWDAnimation.killTweensOf(_s.opener_do), _s.opener_do.setX(n), _s.opener_do.setY(i)))
			}
		}, _s.onInitlalizeScrollHandler = function() {
			var e = FWDUVPUtils.getScrollOffsets();
			_s.pageXOffset = e.x, _s.pageYOffset = e.y, _s.main_do.getRect().top >= -_s.sH && _s.main_do.getRect().top < _s.ws.h && (window.removeEventListener("scroll", _s.onInitlalizeScrollHandler), _s.setupPlayer())
		}, _s.setupPlayer = function() {
			_s.main_do || (_s.setupMainDo(), _s.setupInfo(), _s.setupData())
		}, _s.setupLightBox = function() {
			FWDUVPLightBox.setPrototype(), _s.lightBox_do = new FWDUVPLightBox(_s, _s.lightBoxBackgroundColor_str, _s.backgroundColor_str, _s.lightBoxBackgroundOpacity, _s.lightBoxWidth, _s.lightBoxHeight), _s.lightBox_do.addListener(FWDUVPLightBox.SHOW, _s.lightBoxShowHandler), _s.lightBox_do.addListener(FWDUVPLightBox.CLOSE, _s.lightBoxCloseHandler), _s.lightBox_do.addListener(FWDUVPLightBox.HIDE_COMPLETE, _s.lightBoxHideCompleteHandler), _s.setupPlayer()
		}, _s.lightBoxShowHandler = function() {}, _s.lightBoxCloseHandler = function() {
			_s.stop(), _s.stopResizeHandler()
		}, _s.lightBoxHideCompleteHandler = function() {
			_s.dispatchEvent(FWDUVPlayer.HIDE_LIGHTBOX_COMPLETE)
		}, _s.setupMainDo = function() {
			_s.main_do = new FWDUVPDisplayObject("div", "relative"), _s.main_do.screen.className = "fwduvp", _s.hasPointerEvent_bl && (_s.main_do.getStyle().touchAction = "none"), _s.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", _s.main_do.getStyle().webkitFocusRingColor = "rgba(0, 0, 0, 0)", _s.main_do.getStyle().width = "100%", _s.main_do.getStyle().height = "100%", _s.main_do.setBackfaceVisibility(), _s.main_do.setBkColor(_s.backgroundColor_str), (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && _s.main_do.setSelectable(!1), _s.videoHolder_do = new FWDUVPDisplayObject("div"), _s.main_do.addChild(_s.videoHolder_do), _s.displayType == FWDUVPlayer.STICKY ? (_s.background_do = new FWDUVPDisplayObject("div"), _s.background_do.getStyle().width = "100%", _s.mainBackgroundImagePath_str && (_s.mainBackground_do = new FWDUVPDisplayObject("div"), _s.stageContainer.appendChild(_s.mainBackground_do.screen)), _s.stageContainer.appendChild(_s.background_do.screen), _s.stageContainer.appendChild(_s.main_do.screen)) : _s.displayType == FWDUVPlayer.FULL_SCREEN ? (_s.stageContainer.style.overflow = "hidden", _s.main_do.getStyle().position = "absolute", document.documentElement.appendChild(_s.main_do.screen), _s.stageContainer.style.zIndex = 9999999999998, _s.main_do.getStyle().zIndex = 9999999999998) : _s.displayType == FWDUVPlayer.BACKGROUND_VIDEO ? (document.documentElement.appendChild(_s.main_do.screen), _s.main_do.getStyle().zIndex = -9999999999998, _s.main_do.getStyle().position = "fixed", document.documentElement.insertBefore(_s.main_do.screen, document.documentElement.firstChild)) : _s.displayType == FWDUVPlayer.LIGHTBOX ? (_s.main_do.getStyle().position = "absolute", _s.stageContainer = _s.lightBox_do.mainLightBox_do.screen, _s.stageContainer.appendChild(_s.main_do.screen), _s.main_do.setX(-1e4), _s.main_do.setY(-1e4), _s.main_do.setWidth(0), _s.main_do.setHeight(0)) : (_s.stageContainer.style.overflow = "hidden", _s.stageContainer.appendChild(_s.main_do.screen)), _s.isEmbedded_bl && (_s.main_do.getStyle().zIndex = 9999999999998)
		}, _s.setupInfo = function() {
			FWDUVPInfo.setPrototype(), _s.info_do = new FWDUVPInfo(_s, _s.warningIconPath_str, _s.showErrorInfo_bl), _s.info_do.getStyle().zIndex = "9999999999999999"
		}, _s.startResizeHandler = function() {
			_s.displayType == FWDUVPlayer.STICKY && (FWDUVPUtils.isAndroid && window.addEventListener("orientationchange", _s.orientationChange), window.addEventListener("scroll", _s.onScrollHandler)), _s.displayType == FWDUVPlayer.LIGHTBOX && window.addEventListener("scroll", _s.onScrollHandler), window.addEventListener("resize", _s.onResizeHandler), _s.onResizeHandler(!0), _s.resizeHandlerId_to = setTimeout(function() {
				_s.resizeHandler()
			}, 500)
		}, _s.orientationChange = function() {
			_s.orintationChangeComplete_bl = !1, clearTimeout(_s.resizeHandlerId_to), clearTimeout(_s.resizeHandler2Id_to), clearTimeout(_s.orientationChangeId_to), _s.orientationChangeId_to = setTimeout(function() {
				_s.orintationChangeComplete_bl = !0, _s.stageContainer.style.left = "0", _s.resizeHandler(!0)
			}, 1e3), _s.stageContainer.style.left = "-5000px", _s.preloader_do && _s.preloader_do.setX(-5e3)
		}, _s.onScrollHandler = function() {
			if (_s.displayType == FWDUVPlayer.STICKY && _s.isMbl && _s.onResizeHandler(), !_s.lightBox_do || _s.lightBox_do.isShowed_bl) {
				_s.scrollHandler();
				var e = FWDUVPUtils.getScrollOffsets();
				_s.scrollOffsets = e
			}
		}, _s.scrollHandler = function() {
			var e = FWDUVPUtils.getScrollOffsets();
			_s.pageXOffset = e.x, _s.pageYOffset = e.y, _s.displayType == FWDUVPlayer.LIGHTBOX ? (_s.lightBox_do.setX(e.x), _s.lightBox_do.setY(e.y)) : (_s.isFullScreen_bl || _s.displayType == FWDUVPlayer.FULL_SCREEN) && (_s.main_do.setX(e.x), _s.main_do.setY(e.y))
		}, _s.stopResizeHandler = function() {
			window.removeEventListener ? window.removeEventListener("resize", _s.onResizeHandler) : window.detachEvent && window.detachEvent("onresize", _s.onResizeHandler), clearTimeout(_s.resizeHandlerId_to)
		}, _s.onResizeHandler = function() {
			_s.resizeHandler(), clearTimeout(_s.resizeHandler2Id_to), _s.resizeHandler2Id_to = setTimeout(function() {
				_s.resizeHandler()
			}, 300)
		}, _s.prevVpW, _s.resizeHandler = function(e, t) {
			_s.tempPlaylistPosition_str;
			var o = FWDUVPUtils.getViewportSize(),
				s = FWDUVPUtils.getScrollOffsets();
			if (_s.ws = o, _s.showPlaylistOnFullScreen = _s._d.showPlaylistOnFullScreen, 1e3 > _s.ws.w && (_s.showPlaylistOnFullScreen = !1), _s.displayType == FWDUVPlayer.STICKY && !_s.isFullScreen_bl) _s.main_do.getStyle().width = "100%", _s.main_do.getWidth() > _s.maxWidth && _s.main_do.setWidth(_s.maxWidth), _s.sW = _s.main_do.getWidth(), _s.sH = _s.autoScale_bl ? parseInt(_s.maxHeight * (_s.sW / _s.maxWidth)) : _s.maxHeight;
			else if (_s.displayType == FWDUVPlayer.LIGHTBOX && !_s.isFullScreen_bl) {
				if (!_s.lightBox_do.isShowed_bl || !_s.main_do) return;
				_s.lightBoxWidth > o.w ? (_s.finalLightBoxWidth = o.w, _s.finalLightBoxHeight = parseInt(_s.lightBoxHeight * (o.w / _s.lightBoxWidth))) : (_s.finalLightBoxWidth = _s.lightBoxWidth, _s.finalLightBoxHeight = _s.lightBoxHeight), _s.lightBox_do.setWidth(o.w), _s.lightBox_do.setHeight(o.h), _s.lightBox_do.setX(s.x), _s.lightBox_do.setY(s.y), _s.lightBox_do.mainLightBox_do.setX(parseInt((o.w - _s.finalLightBoxWidth) / 2)), _s.lightBox_do.mainLightBox_do.setY(parseInt((o.h - _s.finalLightBoxHeight) / 2)), _s.lightBox_do.clsBtn && _s.lightBox_do.isShowed_bl && (_s.lightBox_do.clsBtn.setX(o.w - _s.lightBox_do.clsBtn.w - 15), _s.lightBox_do.clsBtn.setY(15)), _s.main_do.setX(0), _s.main_do.setY(0), _s.lightBox_do.mainLightBox_do.setWidth(_s.finalLightBoxWidth), _s.lightBox_do.mainLightBox_do.setHeight(_s.finalLightBoxHeight), _s.sW = _s.finalLightBoxWidth, _s.sH = _s.finalLightBoxHeight
			} else _s.isFullScreen_bl || _s.displayType == FWDUVPlayer.FULL_SCREEN ? (_s.main_do.setX(0), _s.main_do.setY(0), _s.sW = o.w, _s.sH = o.h) : _s.displayType == FWDUVPlayer.AFTER_PARENT ? (_s.main_do.setX(0), _s.main_do.setY(0), _s.sW = _s.stageContainer.offsetWidth, _s.sH = _s.stageContainer.offsetHeight) : (_s.stageContainer.style.width = "100%", _s.stageContainer.offsetWidth > _s.maxWidth && (_s.stageContainer.style.width = _s.maxWidth + "px"), _s.sW = _s.stageContainer.offsetWidth, _s.autoScale_bl ? (_s.sH = parseInt(_s.maxHeight * (_s.sW / _s.maxWidth)), _s.tempStageHeight = _s.sH) : (_s.sH = _s.maxHeight, _s.tempStageHeight = _s.sH));
			_s.sH > o.h && _s.isFullScreen_bl && (_s.sH = o.h), _s._d && _s.playlist_do && (_s.playlistHeight = parseInt(_s._d.playlistBottomHeight)), _s.isMin && !_s.isFullScreen_bl && (_s.sW = Math.min(_s.stickyOnScrollWidth - 10, _s.ws.w - 10), _s.sH = parseInt(_s.stickyOnScrollHeight * (_s.sW / _s.stickyOnScrollWidth)), _s.tempStageHeight = _s.sH), _s._d && (_s.tempPlaylistPosition_str = _s._d.playlistPosition_str, (800 > _s.sW || _s.ec && 600 > _s.sH) && (_s.tempPlaylistPosition_str = "bottom"), _s.playlistPosition_str = _s.tempPlaylistPosition_str, _s.playlist_do && (_s.playlist_do.position_str = _s.tempPlaylistPosition_str)), _s.playlist_do && _s.isPlaylistShowed_bl ? "bottom" == _s.playlistPosition_str ? (_s.vidStageWidth = _s.sW, _s.sH += _s.playlistHeight + _s.spaceBetweenControllerAndPlaylist, _s.vidStageHeight = _s.sH - _s.playlistHeight - _s.spaceBetweenControllerAndPlaylist, _s.displayType == FWDUVPlayer.FULL_SCREEN && _s.controller_do.disablePlaylistButton()) : "right" == _s.playlistPosition_str && (_s.vidStageWidth = _s.isFullScreen_bl && !_s.showPlaylistOnFullScreen ? _s.sW : _s.sW - _s.playlistWidth - _s.spaceBetweenControllerAndPlaylist, _s.controller_do && _s.controller_do.enablePlaylistButton(), _s.vidStageHeight = _s.sH) : (_s.vidStageWidth = _s.sW, _s.vidStageHeight = _s.sH), _s.controller_do && _s.playlist_do && ("right" == _s.playlistPosition_str ? _s.isFullScreen_bl && !_s.showPlaylistOnFullScreen ? _s.controller_do.disablePlaylistButton() : _s.controller_do.enablePlaylistButton() : _s.isEmbedded_bl && _s.controller_do.disablePlaylistButton()), _s.mainBackground_do && (_s.mainBackground_do.setWidth(_s.ws.w), _s.mainBackground_do.setHeight(_s.sH)), e || (FWDAnimation.killTweensOf(_s), _s.tempStageWidth = _s.sW, _s.tempStageHeight = _s.sH, _s.tempVidStageWidth = _s.vidStageWidth, _s.tempVidStageHeight = Math.max(0, _s.vidStageHeight), _s.resizeFinal(t), (_s.prevVpW != o.w || _s.displayType != FWDUVPlayer.STICKY) && _s.setStageContainerFinalHeightAndPosition(t)), setTimeout(function() {
				_s.prevVpW = o.w
			}, 50)
		}, _s.resizeFinal = function(e) {
			_s.displayType == FWDUVPlayer.STICKY || _s.isMin || (_s.stageContainer.style.height = _s.tempStageHeight + "px"), _s.mainBackground_do && (_s.mainBackground_do.setWidth(_s.ws.w), _s.mainBackground_do.setHeight(_s.tempStageHeight)), _s.main_do.setWidth(_s.tempStageWidth), _s.videoHolder_do.setWidth(_s.tempVidStageWidth), _s.videoHolder_do.setHeight(_s.tempVidStageHeight), _s.showPlaylistButtonAndPlaylist_bl && _s.isPlaylistShowed_bl && "bottom" == _s.playlistPosition_str ? _s.main_do.setHeight(_s.tempStageHeight) : _s.main_do.setHeight(_s.tempStageHeight), _s.displayType == FWDUVPlayer.LIGHTBOX && _s.lightBox_do.mainLightBox_do.setY(parseInt((_s.ws.h - _s.tempStageHeight) / 2)), _s.audioScreen_do && _s.videoType_str == FWDUVPlayer.MP3 && _s.audioScreen_do.resizeAndPosition(_s.tempVidStageWidth, _s.tempVidStageHeight), _s.ytb_do && _s.videoType_str == FWDUVPlayer.YOUTUBE && (_s.ytb_do.setWidth(_s.tempVidStageWidth), _s.ytb_do.setHeight(_s.tempVidStageHeight)), _s.logo_do && _s.logo_do.positionAndResize(), _s.playlist_do && !FWDAnimation.isTweening(_s) && _s.playlist_do.resizeAndPosition(e), _s.annotations_do && (FWDAnimation.isTweening(_s) ? _s.annotations_do.position(!0) : _s.annotations_do.position(!1)), _s.controller_do && _s.controller_do.resizeAndPosition(), _s.categories_do && _s.categories_do.resizeAndPosition(), _s.videoScreen_do && (_s.videoType_str == FWDUVPlayer.VIDEO || _s.videoType_str == FWDUVPlayer.HLS_JS || _s.videoType_str == FWDUVPlayer.DASH) && (_s.finaadsIdeoScreenW = _s.tempVidStageWidth, _s.finaadsIdeoScreenH = _s.tempVidStageHeight, _s.finaadsIdeoScreenX = _s.finaadsIdeoScreenY = 0, _s.videoScreen_do.resizeAndPosition(_s.finaadsIdeoScreenW, _s.finaadsIdeoScreenH, _s.finaadsIdeoScreenX, _s.finaadsIdeoScreenY)), _s.isIMA && _s.IMA && _s.IMA.resizeAndPosition(), _s.ytb_do && _s.ytb_do.ytb && _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do.resizeAndPosition(), _s.vimeo_do && _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do.resizeAndPosition(), _s.preloader_do && _s.positionPreloader(), _s.dClk_do && (_s.is360 && _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.dClk_do.setWidth(0) : _s.videoType_str != FWDUVPlayer.VIMEO || _s._d.showDefaultControllerForVimeo_bl ? (_s.dClk_do.setWidth(_s.tempVidStageWidth), _s.isMbl ? _s.dClk_do.setHeight(_s.tempVidStageHeight) : _s.videoType_str != FWDUVPlayer.YOUTUBE || _s.isAdd_bl ? _s.dClk_do.setHeight(_s.tempVidStageHeight) : _s.dClk_do.setHeight(_s.tempVidStageHeight)) : _s.dClk_do.setWidth(0)), _s.videoHider_do && _s.resizeVideoHider(), _s.lrgPlayBtn && _s.positionLargePlayButton(), _s.videoPoster_do && _s.videoPoster_do.allowToShow_bl && _s.videoPoster_do.positionAndResize(), _s.popw_do && _s.popw_do.isShowed_bl && _s.popw_do.positionAndResize(), _s.embedWindow_do && _s.embedWindow_do.isShowed_bl && _s.embedWindow_do.positionAndResize(), _s.passWindow_do && _s.passWindow_do.isShowed_bl && _s.passWindow_do.positionAndResize(), _s.lg_do && _s.lg_do.isShowed_bl && _s.lg_do.positionAndResize(), _s.infoWindow_do && _s.infoWindow_do.isShowed_bl && _s.infoWindow_do.positionAndResize(), _s.info_do && _s.info_do.isShowed_bl && _s.info_do.positionAndResize(), _s.shareWindow_do && _s.shareWindow_do.isShowed_bl && _s.shareWindow_do.positionAndResize(), _s.adsStart_do && _s.isAdd_bl && _s.positionAds(), _s.subtitle_do && _s.subtitle_do.position(e), _s.popupAds_do && _s.popupAds_do.position(e), _s.positionAdsImage(), _s.positionOnMin()
		}, _s.setStageContainerFinalHeightAndPosition = function(e) {
			_s.displayType != FWDUVPlayer.STICKY || (_s.allowToResizeAndPosition_bl = !0, clearTimeout(_s.showPlaylistWithDelayId_to), _s.horizontalPosition_str == FWDUVPlayer.LEFT ? (_s.main_do.setX(_s.offsetX), _s.opener_do && ("right" == _s._d.openerAlignment_str ? _s.opener_do.setX(Math.round(_s.sW - _s.opener_do.w + _s.offsetX)) : _s.opener_do.setX(_s.offsetX))) : _s.horizontalPosition_str == FWDUVPlayer.CENTER ? (_s.main_do.setX(Math.round((_s.ws.w - _s.sW) / 2)), _s.opener_do && ("right" == _s._d.openerAlignment_str ? _s.opener_do.setX(parseInt((_s.ws.w - _s.sW) / 2) + _s.sW - _s.opener_do.w) : _s.opener_do.setX(_s.main_do.x))) : _s.horizontalPosition_str == FWDUVPlayer.RIGHT && (_s.main_do.setX(Math.round(_s.ws.w - _s.sW - _s.offsetX)), _s.opener_do && ("right" == _s._d.openerAlignment_str ? _s.opener_do.setX(Math.round(_s.ws.w - _s.opener_do.w - _s.offsetX)) : _s.opener_do.setX(Math.round(_s.ws.w - _s.sW - _s.offsetX)))), e ? _s.position_str == FWDUVPlayer.POSITION_TOP ? (_s.isShowed_bl && !_s.isShowedFirstTime_bl ? FWDAnimation.to(_s.stageContainer, .8, {
				css: {
					top: _s.offsetY
				},
				ease: Expo.easeInOut
			}) : FWDAnimation.to(_s.stageContainer, .8, {
				css: {
					top: -_s.sH
				},
				ease: Expo.easeInOut
			}), _s.isShowedFirstTime_bl ? _s.opener_do && FWDAnimation.to(_s.opener_do, .8, {
				y: _s.sH - _s.opener_do.h,
				ease: Expo.easeInOut
			}) : _s.opener_do && FWDAnimation.to(_s.opener_do, .8, {
				y: _s.sH,
				ease: Expo.easeInOut
			})) : (_s.isShowed_bl && !_s.isShowedFirstTime_bl ? FWDAnimation.to(_s.stageContainer, .8, {
				css: {
					top: _s.ws.h - _s.sH - _s.offsetY
				},
				ease: Expo.easeInOut
			}) : FWDAnimation.to(_s.stageContainer, .8, {
				css: {
					top: _s.ws.h
				},
				ease: Expo.easeInOut,
				onComplete: _s.moveWheyLeft
			}), _s.isShowedFirstTime_bl ? _s.opener_do && FWDAnimation.to(_s.opener_do, .8, {
				y: 0,
				ease: Expo.easeInOut
			}) : _s.opener_do && FWDAnimation.to(_s.opener_do, .8, {
				y: -_s.opener_do.h,
				ease: Expo.easeInOut
			})) : (FWDAnimation.killTweensOf(_s.stageContainer), _s.position_str == FWDUVPlayer.POSITION_TOP ? (_s.stageContainer.style.top = _s.isShowed_bl && !_s.isShowedFirstTime_bl ? _s.offsetY + "px" : -_s.sH + "px", _s.isShowedFirstTime_bl ? _s.opener_do && _s.opener_do.setY(_s.sH - _s.opener_do.h) : _s.opener_do && _s.opener_do.setY(_s.sH)) : (_s.stageContainer.style.top = _s.isShowed_bl && !_s.isShowedFirstTime_bl ? _s.ws.h - _s.sH - _s.offsetY + "px" : _s.ws.h + "px", _s.isShowedFirstTime_bl ? _s.opener_do && _s.opener_do.setY(0) : _s.opener_do && _s.opener_do.setY(-_s.opener_do.h))))
		}, _s.setupClickScreen = function() {
			_s.dClk_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && _s.dClk_do.setBkColor("rgba(255,0,0,.00001"), _s.hasPointerEvent_bl ? (_s.dClk_do.screen.addEventListener("pointerdown", _s.playPauseDownHandler), _s.dClk_do.screen.addEventListener("pointerup", _s.playPauseClickHandler), _s.dClk_do.screen.addEventListener("pointermove", _s.playPauseMoveHandler)) : _s.isMbl ? _s.dClk_do.screen.addEventListener("click", _s.playPauseClickHandler) : (_s.dClk_do.screen.addEventListener("mousedown", _s.playPauseDownHandler), _s.dClk_do.screen.addEventListener("mouseup", _s.playPauseClickHandler), _s.dClk_do.screen.addEventListener("mousemove", _s.playPauseMoveHandler)), _s.hideClickScreen(), _s.videoHolder_do.addChild(_s.dClk_do)
		}, _s.playPauseDownHandler = function(t) {
			_s.isClickHandlerMoved_bl = !1;
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			_s.firstDommyTapX = e.screenX, _s.firstDommyTapY = e.screenY, _s.is360 && (_s.dClk_do.getStyle().cursor = "url(" + _s._d.grabPath_str + "), default")
		}, _s.playPauseMoveHandler = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t),
				o, s;
			t.touches && 1 != t.touches.length || (o = Math.abs(e.screenX - _s.firstDommyTapX), s = Math.abs(e.screenY - _s.firstDommyTapY), _s.isMbl && (10 < o || 10 < s) ? _s.isClickHandlerMoved_bl = !0 : !_s.isMbl && (2 < o || 2 < s) && (_s.isClickHandlerMoved_bl = !0))
		}, _s.playPauseClickHandler = function(t) {
			if ((_s.is360 && (_s.dClk_do.getStyle().cursor = "url(" + _s._d.handPath_str + "), default"), 2 != t.button) && !_s.isClickHandlerMoved_bl) {
				if (_s.isAdd_bl) return void(_s._d.adsPageToOpenURL_str && "none" != _s._d.adsPageToOpenURL_str && (_s.ClickTracking && _s.executeVastEvent(_s.ClickTracking), window.open(_s._d.adsPageToOpenURL_str, _s._d.adsPageToOpenTarget_str), _s.pause()));
				_s.disableClick_bl || (_s.firstTapPlaying_bl = _s.isPlaying_bl, FWDUVPlayer.keyboardCurInstance = _s, _s.controller_do && 0 != _s.controller_do.mainHld.y && _s.isMbl || (!_s.isMbl && (FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.PAUSE_ALL_VIDEOS ? FWDUVPlayer.pauseAllVideos(_s) : FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.STOP_ALL_VIDEOS && FWDUVPlayer.stopAllVideos(_s)), _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.ytb_do.togglePlayPause() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do.togglePlayPause() : _s.videoType_str == FWDUVPlayer.VIMEO ? _s.vimeo_do.togglePlayPause() : _s.videoScreen_do && _s.videoScreen_do.togglePlayPause()))
			}
		}, _s.showClickScreen = function() {
			_s.dClk_do.setVisible(!0), _s.isAdd_bl && _s._d.adsPageToOpenURL_str && "none" != _s._d.adsPageToOpenURL_str ? _s.dClk_do.setButtonMode(!0) : _s.is360 ? _s.dClk_do.getStyle().cursor = "url(" + _s._d.handPath_str + "), default" : _s.dClk_do.setButtonMode(!1)
		}, _s.hideClickScreen = function() {
			_s.dClk_do.setVisible(!1)
		}, _s.setupDisableClick = function() {
			_s.disableClick_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && _s.disableClick_do.setBkColor("rgba(0,255,0,.0001"), _s.main_do.addChild(_s.disableClick_do)
		}, _s.disableClick = function() {
			_s.disableClick_bl = !0, clearTimeout(_s.disableClickId_to), _s.disableClick_do && (_s.disableClick_do.setWidth(_s.sW), _s.disableClick_do.setHeight(_s.sH)), _s.disableClickId_to = setTimeout(function() {
				_s.disableClick_do && (_s.disableClick_do.setWidth(0), _s.disableClick_do.setHeight(0)), _s.disableClick_bl = !1
			}, 500)
		}, _s.showDisable = function() {
			_s.disableClick_do.setWidth(_s.sW), _s.disableClick_do.setHeight(_s.sH)
		}, _s.hideDisable = function() {
			_s.disableClick_do && 0 != _s.disableClick_do.w && (_s.disableClick_do.setWidth(0), _s.disableClick_do.setHeight(0))
		}, _s.addDoubleClickSupport = function() {
			_s.hasPointerEvent_bl ? _s.dClk_do.screen.addEventListener("pointerdown", _s.onFirstDown) : (!_s.isMbl && _s.dClk_do.screen.addEventListener("mousedown", _s.onFirstDown), _s.dClk_do.screen.addEventListener("touchstart", _s.onFirstDown)), _s.setupVisualization()
		}, _s.onFirstDown = function(t) {
			if (2 != t.button) {
				_s.isFullscreen_bl && t.preventDefault && t.preventDefault();
				var e = FWDUVPUtils.getViewportMouseCoordinates(t);
				_s.firstTapX = e.screenX - _s.main_do.getGlobalX(), _s.firstTapY = e.screenY - _s.main_do.getGlobalY(), _s.firstTapPlaying_bl = _s.isPlaying_bl, FWDUVPUtils.isIEWebKit || (_s.hasPointerEvent_bl ? (_s.dClk_do.screen.removeEventListener("pointerdown", _s.onFirstDown), _s.dClk_do.screen.addEventListener("pointerdown", _s.onSecondDown)) : (!_s.isMbl && (_s.dClk_do.screen.addEventListener("mousedown", _s.onSecondDown), _s.dClk_do.screen.removeEventListener("mousedown", _s.onFirstDown)), _s.dClk_do.screen.addEventListener("touchstart", _s.onSecondDown), _s.dClk_do.screen.removeEventListener("touchstart", _s.onFirstDown)), clearTimeout(_s.secondTapId_to), _s.secondTapId_to = setTimeout(_s.doubleTapExpired, 500))
			}
		}, _s.doubleTapExpired = function() {
			clearTimeout(_s.secondTapId_to), _s.hasPointerEvent_bl ? (_s.dClk_do.screen.removeEventListener("pointerdown", _s.onSecondDown), _s.dClk_do.screen.addEventListener("pointerdown", _s.onFirstDown)) : (_s.dClk_do.screen.removeEventListener("touchstart", _s.onSecondDown), _s.dClk_do.screen.addEventListener("touchstart", _s.onFirstDown), !_s.isMbl && (_s.dClk_do.screen.removeEventListener("mousedown", _s.onSecondDown), _s.dClk_do.screen.addEventListener("mousedown", _s.onFirstDown)))
		}, _s.onSecondDown = function(t) {
			t.preventDefault && t.preventDefault();
			var e = FWDUVPUtils.getViewportMouseCoordinates(t),
				o, s;
			(FWDUVPUtils.isIEWebKit && (_s.firstTapPlaying_bl = _s.isPlaying_bl), !(t.touches && 1 != t.touches.length)) && (o = Math.abs(e.screenX - _s.main_do.getGlobalX() - _s.firstTapX), s = Math.abs(e.screenY - _s.main_do.getGlobalY() - _s.firstTapY), 10 < o || 10 < s || (_s.firstTapX < .33 * _s.tempVidStageWidth ? !_s.isPlaying_bl && (_s.skipOnDb_bl = !0, _s.rewind(_s._d.rewTm), _s.addVisualization("left"), setTimeout(function() {
				_s.isPlaying_bl || _s.play()
			}, 200), setTimeout(function() {
				_s.skipOnDb_bl = !1
			}, 500)) : _s.firstTapX > .67 * _s.tempVidStageWidth ? !_s.isPlaying_bl && (_s.skipOnDb_bl = !0, _s.rewind(-_s._d.rewTm), _s.addVisualization("right"), setTimeout(function() {
				_s.isPlaying_bl || _s.play()
			}, 200), setTimeout(function() {
				_s.skipOnDb_bl = !1
			}, 500)) : (_s.switchFullScreenOnDoubleClick(), _s.firstTapPlaying_bl ? _s.play() : _s.pause())))
		}, _s.switchFullScreenOnDoubleClick = function() {
			_s.disableClick(), _s.isFullScreen_bl ? _s.goNormalScreen() : _s.goFullScreen()
		}, _s.lasPosition, _s.setupVisualization = function() {
			_s.mainVz_do = new FWDUVPDisplayObject("div"), _s.mainVz_do.getStyle().pointerEvents = "none", _s.mainVz_do.getStyle().backgroundColor = "rgba(0,0,0,0.01)", _s.mainVzBackgrond_do = new FWDUVPDisplayObject("div"), _s.mainVzBackgrond_do.getStyle().width = "100%", _s.mainVzBackgrond_do.getStyle().height = "100%", _s.mainVzBackgrond_do.getStyle().backgroundColor = "rgba(255,255,255, .15)", _s.mainVz_do.getStyle().borderRadius = "100%", _s.mainVz_do.addChild(_s.mainVzBackgrond_do), _s.circle_do = new FWDUVPTransformDisplayObject("div"), _s.circle_do.getStyle().backgroundColor = "rgba(255,255,255, .15)", _s.circle_do.getStyle().borderRadius = "100%", _s.mainVz_do.addChild(_s.circle_do);
			var e = new Image;
			e.src = _s.mainFolderPath_str + _s.sknPth + "vis.png", _s.vzImg1_do = new FWDUVPTransformDisplayObject("img"), _s.vzImg1_do.setScreen(e), _s.vzImg1_do.setWidth(17), _s.vzImg1_do.setHeight(23), _s.mainVz_do.addChild(_s.vzImg1_do);
			var t = new Image;
			t.src = _s.mainFolderPath_str + _s.sknPth + "vis.png", _s.vzImg2_do = new FWDUVPTransformDisplayObject("img"), _s.vzImg2_do.setScreen(t), _s.vzImg2_do.setWidth(17), _s.vzImg2_do.setHeight(23), _s.mainVz_do.addChild(_s.vzImg2_do);
			var o = new Image;
			o.src = _s.mainFolderPath_str + _s.sknPth + "vis.png", _s.vzImg3_do = new FWDUVPTransformDisplayObject("img"), _s.vzImg3_do.setScreen(o), _s.vzImg3_do.setWidth(17), _s.vzImg3_do.setHeight(23), _s.mainVz_do.addChild(_s.vzImg3_do)
		}, _s.addVisualization = function(e) {
			clearTimeout(_s.vizFinisedId_to), clearTimeout(_s.vizFinished2Id_to);
			var t = Math.round(_s.tempVidStageWidth / 2),
				o = Math.round(1.5 * _s.tempVidStageHeight);
			FWDAnimation.killTweensOf(_s.mainVzBackgrond_do), _s.lasPosition != e && _s.mainVzBackgrond_do.setAlpha(0), FWDAnimation.to(_s.mainVzBackgrond_do, .4, {
				alpha: 1
			}), _s.mainVz_do.setVisible(!0), _s.mainVz_do.setWidth(t), _s.mainVz_do.setHeight(o), _s.mainVz_do.setY((_s.tempVidStageHeight - o) / 2);
			var s = Math.abs(_s.mainVz_do.y);
			_s.controller_do && _s.controller_do.isShowed_bl && (s -= _s.controller_do.sH / 2), _s.videoHolder_do.contains(_s.mainVz_do) || (_s.controller_do ? _s.videoHolder_do.addChildAt(_s.mainVz_do, _s.videoHolder_do.getChildIndex(_s.controller_do) - 1) : _s.videoHolder_do.addChild(_s.mainVz_do)), "right" == e ? (_s.mainVz_do.getStyle().borderRadius = "100% 0% 0% 100%", _s.mainVz_do.setX(t), _s.vzImg1_do.setRotation(0), _s.vzImg2_do.setRotation(0), _s.vzImg3_do.setRotation(0)) : (_s.mainVz_do.getStyle().borderRadius = "0% 100% 100% 0%", _s.mainVz_do.setX(0), _s.vzImg1_do.setRotation(180), _s.vzImg2_do.setRotation(180), _s.vzImg3_do.setRotation(180)), _s.vzImg1_do.setX(Math.round(t - 3 * _s.vzImg1_do.w) / 2), _s.vzImg1_do.setY(Math.round(s + (_s.tempVidStageHeight - _s.vzImg1_do.h) / 2)), _s.vzImg2_do.setX(_s.vzImg1_do.x + _s.vzImg1_do.w), _s.vzImg2_do.setY(_s.vzImg1_do.y), _s.vzImg3_do.setX(_s.vzImg2_do.x + _s.vzImg2_do.w), _s.vzImg3_do.setY(_s.vzImg2_do.y), FWDAnimation.killTweensOf(_s.vzImg1_do), FWDAnimation.killTweensOf(_s.vzImg2_do), FWDAnimation.killTweensOf(_s.vzImg3_do), _s.vzImg1_do.setAlpha(0), _s.vzImg2_do.setAlpha(0), _s.vzImg3_do.setAlpha(0), "right" == e ? (FWDAnimation.to(_s.vzImg1_do, .4, {
				alpha: 1
			}), FWDAnimation.to(_s.vzImg1_do, .4, {
				alpha: 0,
				delay: .3
			}), FWDAnimation.to(_s.vzImg2_do, .4, {
				alpha: 1,
				delay: .3
			}), FWDAnimation.to(_s.vzImg2_do, .4, {
				alpha: 0,
				delay: .6
			}), FWDAnimation.to(_s.vzImg3_do, .4, {
				alpha: 1,
				delay: .6
			}), FWDAnimation.to(_s.vzImg3_do, .4, {
				alpha: 0,
				delay: .9
			})) : (FWDAnimation.to(_s.vzImg3_do, .4, {
				alpha: 1
			}), FWDAnimation.to(_s.vzImg3_do, .4, {
				alpha: 0,
				delay: .3
			}), FWDAnimation.to(_s.vzImg2_do, .4, {
				alpha: 1,
				delay: .3
			}), FWDAnimation.to(_s.vzImg2_do, .4, {
				alpha: 0,
				delay: .6
			}), FWDAnimation.to(_s.vzImg1_do, .4, {
				alpha: 1,
				delay: .6
			}), FWDAnimation.to(_s.vzImg1_do, .4, {
				alpha: 0,
				delay: .9
			})), FWDAnimation.killTweensOf(_s.circle_do), _s.circle_do.setAlpha(1), _s.circle_do.setScale2(1), _s.circle_do.setWidth(t), _s.circle_do.setHeight(t), _s.circle_do.setScale2(0), _s.circle_do.setX(_s.firstTapX - _s.mainVz_do.x - _s.circle_do.w / 2), _s.circle_do.setY(_s.firstTapY + s - _s.circle_do.w / 2), FWDAnimation.to(_s.circle_do, .8, {
				scale: 2,
				ease: Expo.easeInOut
			}), _s.vizFinisedId_to = setTimeout(function() {
				FWDAnimation.to(_s.mainVzBackgrond_do, .4, {
					alpha: 0
				}), FWDAnimation.to(_s.circle_do, .4, {
					alpha: 0
				}), _s.vizFinished2Id_to = setTimeout(function() {
					_s.mainVz_do.setVisible(!1)
				}, 400)
			}, 800), _s.lasPosition = e
		}, _s.stopVisualization = function() {
			_s.mainVz_do && (clearTimeout(_s.vizFinisedId_to), clearTimeout(_s.vizFinished2Id_to), _s.mainVz_do.setVisible(!1))
		}, _s.setupVideoHider = function() {
			_s.videoHider_do = new FWDUVPDisplayObject("div"), _s.videoHolder_do.addChild(_s.videoHider_do)
		}, _s.showVideoHider = function() {
			_s.isVideoHiderShowed_bl || !_s.videoHider_do || (_s.isVideoHiderShowed_bl = !0, _s.videoHider_do.setVisible(!0), _s.resizeVideoHider())
		}, _s.hideVideoHider = function() {
			_s.isVideoHiderShowed_bl && (_s.isVideoHiderShowed_bl = !1, clearTimeout(_s.videoHilderId_to), _s.videoHilderId_to = setTimeout(function() {
				_s.videoHider_do.setVisible(!1)
			}, 300))
		}, _s.resizeVideoHider = function() {
			_s.isVideoHiderShowed_bl && (_s.videoHider_do.setWidth(_s.tempStageWidth), _s.videoHider_do.setHeight(_s.tempStageHeight))
		}, _s.setupYoutubeAPI = function() {
			if (!_s.ytb_do) {
				if ("undefined" != typeof YT && YT.Player) return void _s.setupYoutubePlayer();
				if (FWDUVPlayer.isYoutubeAPILoadedOnce_bl) return void(_s.keepCheckingYoutubeAPI_int = setInterval(function() {
					"undefined" != typeof YT && YT && YT.Player && (-1 == _s.videoSourcePath_str.indexOf("youtube.") && clearInterval(_s.keepCheckingYoutubeAPI_int), clearInterval(_s.keepCheckingYoutubeAPI_int), _s.setupYoutubePlayer())
				}, 50));
				var e = document.createElement("script");
				e.src = "https://www.youtube.com/iframe_api";
				var t = document.getElementsByTagName("script")[0];
				t.parentNode.insertBefore(e, t), e.onload = function() {
					_s.checkIfYoutubePlayerIsReadyId_int = setInterval(function() {
						YT && YT.Player && (clearInterval(_s.checkIfYoutubePlayerIsReadyId_int), _s.setupYoutubePlayer())
					}, 50)
				}, e.onerror = function() {
					setTimeout(function() {
						_s.showSourceError("Error loading Youtube API")
					}, 500)
				}, FWDUVPlayer.isYoutubeAPILoadedOnce_bl = !0
			}
		}, _s.setupYoutubePlayer = function() {
			_s.ytb_do || (FWDUVPYoutubeScreen.setPrototype(), _s.ytb_do = new FWDUVPYoutubeScreen(_s, _s._d.volume), _s.ytb_do.addListener(FWDUVPYoutubeScreen.READY, _s.youtubeReadyHandler), _s.ytb_do.addListener(FWDUVPVideoScreen.ERROR, _s.videoScreenErrorHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.SAFE_TO_SCRUBB, _s.videoScreenSafeToScrubbHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.STOP, _s.videoScreenStopHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.PLAY, _s.videoScreenPlayHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.PAUSE, _s.videoScreenPauseHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.UPDATE, _s.videoScreenUpdateHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.UPDATE_TIME, _s.videoScreenUpdateTimeHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.LOAD_PROGRESS, _s.videoScreenLoadProgressHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.PLAY_COMPLETE, _s.videoScreenPlayCompleteHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.CUED, _s.youtubeScreenCuedHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.QUALITY_CHANGE, _s.youtubeScreenQualityChangeHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.UPDATE_SUBTITLE, _s.videoScreenUpdateSubtitleHandler))
		}, _s.youtubeReadyHandler = function() {
			_s.isYoutubeReady_bl = !0, _s.hidePreloaderId_to = setTimeout(function() {
				_s.preloader_do && _s.preloader_do.hide(!0)
			}, 50), _s.isTempYoutubeAdd_bl = _s.isAdd_bl, _s.isAdd_bl ? _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.setSource(_s.addSource_str) : _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.updateAds(0, !0)
		}, _s.youtubeScreenCuedHandler = function() {
			_s.main_do && _s.main_do.contains(_s.info_do) && _s.main_do.removeChild(_s.info_do)
		}, _s.youtubeScreenQualityChangeHandler = function(t) {
			_s.videoType_str == FWDUVPlayer.VIDEO && (_s.curDurration = _s.videoScreen_do.curDuration), _s.controller_do && _s.controller_do.updateQuality(t.levels, t.qualityLevel)
		}, _s.setupVimeoAPI = function() {
			if (!_s.vimeo_do) {
				if ("undefined" != typeof Vimeo && Vimeo.Player) return void _s.setupVimeoPlayer();
				if (FWDUVPlayer.isVimeoAPILoadedOnce_bl) return void(_s.keepCheckingVimeoAPI_int = setInterval(function() {
					"undefined" != typeof Vimeo && Vimeo && Vimeo.Player && (-1 == _s.videoSourcePath_str.indexOf("vimeo.") && clearInterval(_s.keepCheckingVimeoAPI_int), clearInterval(_s.keepCheckingVimeoAPI_int), _s.setupVimeoPlayer())
				}, 50));
				var e = document.createElement("script");
				e.src = "https://player.vimeo.com/api/player.js";
				var t = document.getElementsByTagName("script")[0];
				t.parentNode.insertBefore(e, t), e.onload = function() {
					_s.keepCheckingVimeoAPI_int = setInterval(function() {
						"undefined" != typeof Vimeo && Vimeo && Vimeo.Player && (clearInterval(_s.keepCheckingVimeoAPI_int), _s.setupVimeoPlayer())
					}, 50)
				}, e.onerror = function() {
					setTimeout(function() {
						_s.showSourceError("Error loading Vimeo API")
					}, 500)
				}, FWDUVPlayer.isVimeoAPILoadedOnce_bl = !0
			}
		}, _s.setupVimeoPlayer = function() {
			_s.vimeo_do || (FWDUVPVimeoScreen.setPrototype(), _s.vimeo_do = new FWDUVPVimeoScreen(_s, _s._d.volume), _s.vimeo_do.addListener(FWDUVPVimeoScreen.ERROR, _s.vimeoInitErrorHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.READY, _s.vimeoReadyHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.SAFE_TO_SCRUBB, _s.videoScreenSafeToScrubbHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.STOP, _s.videoScreenStopHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.PLAY, _s.videoScreenPlayHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.PAUSE, _s.videoScreenPauseHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.UPDATE, _s.videoScreenUpdateHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.UPDATE_TIME, _s.videoScreenUpdateTimeHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.LOAD_PROGRESS, _s.videoScreenLoadProgressHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.PLAY_COMPLETE, _s.videoScreenPlayCompleteHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.UPDATE_SUBTITLE, _s.videoScreenUpdateSubtitleHandler))
		}, _s.vimeoInitErrorHandler = function(t) {
			_s.showSourceError(t.error)
		}, _s.vimeoReadyHandler = function() {
			_s.isVimeoReady_bl = !0, clearInterval(_s.hidePreloaderId_to), _s.hidePreloaderId_to = setTimeout(function() {
				_s.preloader_do && _s.preloader_do.hide(!0)
			}, 50), _s.isAdd_bl ? _s.videoType_str == FWDUVPlayer.VIMEO && _s.setSource(_s.addSource_str) : _s.videoType_str == FWDUVPlayer.VIMEO && _s.updateAds(0, !0)
		}, _s.setupContextMenu = function() {
			FWDUVPContextMenu.setPrototype(), _s.customContextMenu_do = new FWDUVPContextMenu(_s, _s._d)
		}, _s.setupRSM = function() {
			window.addEventListener("beforeunload", function() {
				1e3 * Math.random();
				if (_s.isPlaying_bl && !_s.isAdd_bl) {
					document.cookie = "fwduvp_video_path=" + _s.videoSourcePath_str + "; expires=Thu, 18 Dec 2040 00:00:01 GMT; path=/";
					var e = _s.getCurrentTime();
					5 == e.length && (e = "00:" + e), document.cookie = "fwduvp_time=" + e + "; expires=Thu, 18 Dec 2040 00:00:01 GMT; path=/"
				}
			})
		}, _s.setupData = function() {
			FWDUVPData.setPrototype(), _s._d = new FWDUVPData(_s.props, _s.rootElement_el, _s), _s._d.useYoutube_bl = _s.useYoutube_bl, _s.mainBackground_do && (_s.mainBackground_do.getStyle().background = "url('" + _s.mainBackgroundImagePath_str + "')"), _s._d.addListener(FWDUVPData.VAST_LOADED, _s.vastLoaded), _s._d.addListener(FWDUVPData.PRELOADER_LOAD_DONE, _s.onPreloaderLoadDone), _s._d.addListener(FWDUVPData.LOAD_ERROR, _s._dLoadError), _s._d.addListener(FWDUVPData.SKIN_PROGRESS, _s._dSkinProgressHandler), _s._d.addListener(FWDUVPData.SKIN_LOAD_COMPLETE, _s._dSkinLoadComplete), _s._d.addListener(FWDUVPData.PLAYLIST_LOAD_COMPLETE, _s._dPlayListLoadComplete), _s._d.addListener(FWDUVPData.IMA_READY, _s._dImaReady), _s._d.addListener(FWDUVPData.IMA_ERROR, _s._dImaError)
		}, _s.vastLoaded = function(t) {
			_s.isAdd_bl = !1, _s.isVastLoading_bl = !1, _s._d.playlist_ar[_s.id].popupAds_ar = t.popupAds, _s._d.playlist_ar[_s.id].ads_ar = t.ads, _s.adsId = -1, _s.updateAds(0), _s.dispatchEvent(FWDUVPData.VAST_LOADED)
		}, _s.onPreloaderLoadDone = function() {
			_s.showPreloader_bl && _s.setupPreloader(), _s.isMbl || _s.setupContextMenu(), _s.fillEntireVideoScreen_bl = _s._d.fillEntireVideoScreen_bl, _s.resizeHandler()
		}, _s._dLoadError = function(t) {
			_s.showSourceError(t.text), _s.playlist_do && (_s.playlist_do.catId = -1), _s.dispatchEvent(FWDUVPlayer.ERROR, {
				error: t.text
			})
		}, _s._dSkinProgressHandler = function() {}, _s._dSkinLoadComplete = function() {
			if (-1 != location.protocol.indexOf("file:") && (FWDUVPUtils.isOpera || FWDUVPUtils.isIEAndLessThen9)) return void _s.showSourceError("This browser can't play video local, please test online or use a browser like Firefox of Chrome.");
			if (_s.showOnlyThumbnail && (_s.playlistWidth = _s.playListThumbnailWidth), _s.volume = _s._d.volume, _s.playlistHeight = _s._d.playlistBottomHeight, _s.displayType != FWDUVPlayer.FULL_SCREEN || FWDUVPUtils.hasFullScreen || (_s._d.showFullScreenButton_bl = !1), _s.isEmbedded_bl && (_s.useDeepLinking_bl = !1, _s._d.playlistPosition_str = "right"), FWDUVPlayer.atLeastOnePlayerHasDeeplinking_bl && (_s.useDeepLinking_bl = !1), _s.useDeepLinking_bl && (FWDUVPlayer.atLeastOnePlayerHasDeeplinking_bl = !0), _s.useDeepLinking_bl) setTimeout(function() {
				_s.setupDL()
			}, 200);
			else {
				if (_s.isEmbedded_bl) _s.catId = _s.embeddedPlaylistId, _s.id = _s.embeddedVideoId;
				else {
					var e = FWDUVPUtils.getHashUrlArgs(window.location.hash);
					_s.useDeepLinking_bl && void 0 !== e.playlistId && void 0 !== e.videoId ? (_s.catId = e.playlistId, _s.id = e.videoId) : (_s.id = e.videoId ? e.videoId : _s._d.startAtVideo, _s.catId = e.playlistId ? e.playlistId : _s._d.startAtPlaylist)
				}
				_s.loadInternalPlaylist()
			}
		}, _s._dPlayListLoadComplete = function() {
			_s._d.cats_ar[_s.catId].pass && (_s.playlistPass = _s._d.cats_ar[_s.catId].pass), _s.loadAddFirstTime_bl = !0, _s.isPlaylistLoadedFirstTime_bl || (_s.setupNormalVideoPlayers(), !FWDUVPUtils.isIEAndLessThen9 && _s.updatePlaylist()), _s.isPlaylistLoadedFirstTime_bl && _s.updatePlaylist(), _s.isPlaylistLoaded_bl = !0, _s.videoHolder_do.setY(0), _s.resizeHandler(), setTimeout(function() {
				_s.positionLargePlayButton(), _s.controller_do && _s.controller_do.resizeAndPosition(), _s.playlist_do && _s.playlist_do.resizeAndPosition()
			}, 350)
		}, _s.updatePlaylist = function() {
			if (_s.videoType_str = "none", _s._d.playlist_ar && _s._d.playlist_ar[_s.id]) return _s.main_do && _s.main_do.contains(_s.info_do) && _s.main_do.removeChild(_s.info_do), _s.preloader_do && _s.preloader_do.hide(!0), _s.totaadsIdeos = _s._d.playlist_ar.length, 0 > _s.id ? _s.id = 0 : _s.id > _s.totaadsIdeos - 1 && (_s.id = _s.totaadsIdeos - 1), _s.playlist_do && _s.playlist_do.updatePlaylist(_s._d.playlist_ar, _s.catId, _s.id, _s._d.cats_ar[_s.catId].playlistName), _s.hideVideoHider(), _s._d.startAtRandomVideo_bl && (_s.id = parseInt(Math.random() * _s._d.playlist_ar.length), _s.useDeepLinking_bl) ? void FWDUVPDL.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id) : void(_s.plPassPassed = !1, _s.prevSource = 99999999999 * Math.random(), _s.posterPath_str = _s._d.playlist_ar[_s.id].posterSource, _s.updateAds(0), _s.isFirstPlaylistLoaded_bl && !_s.isMbl && !_s._d.startAtRandomVideo_bl && _s._d.autoPlay_bl && _s.play(), _s._d.startAtRandomVideo_bl = !1, _s.isFirstPlaylistLoaded_bl = !0, _s.dispatchEvent(FWDUVPlayer.LOAD_PLAYLIST_COMPLETE), _s.displayType == FWDUVPlayer.STICKY && setTimeout(function() {
				_s.isShowedFirstTime_bl = !1, _s.setStageContainerFinalHeightAndPosition(_s.animate_bl)
			}, 50))
		}, _s._dImaReady = function() {
			_s.isIMA && _s.setSource(_s.videoSourcePath_str)
		}, _s._dImaError = function() {
			_s.errorImaSDK = !0, _s.setSource(_s.videoSourcePath_str)
		}, _s.loadInternalPlaylist = function() {
			_s.isPlaylistLoaded_bl = !1, _s.playlistPass = !1, _s.isAdd_bl = !1, _s.adsId = -1, _s.prvAdSource = 999999999 * Math.random(), _s.prevCatId == _s.catId || (_s.prevCatId = _s.catId, _s.preloader_do && (_s.positionPreloader(), _s.preloader_do.show(!1)), _s.stop(), _s.videoHolder_do.setY(-5e3), _s.hider && _s.hider.stop(), _s.setPosterSource("none"), _s.videoPoster_do && (_s.videoPoster_do.id = -1, _s.videoPoster_do.hide(!0)), _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), _s.controller_do && _s.controller_do.hide(!1, 10), _s.showVideoHider(), _s._d.resetVastId(), _s.popupAds_do && _s.popupAds_do.resetId(), _s._d.loadPlaylist(_s.catId), _s.logo_do && _s.logo_do.hide(!1, !0), _s.isAdd_bl && (_s.adsSkip_do.hide(!1), _s.adsStart_do.hide(!1)), _s.playlist_do && _s.playlist_do.destroyPlaylist(), _s.isAPIReady_bl && _s.dispatchEvent(FWDUVPlayer.START_TO_LOAD_PLAYLIST))
		}, _s.setupDL = function() {
			_s.initFirstDL = !0, FWDUVPDL.onChange = _s.dlChangeHandler, _s.isEmbedded_bl && FWDUVPDL.setValue("?playlistId=" + _s.embeddedPlaylistId + "&videoId=" + _s.embeddedVideoId), _s.dlChangeHandler()
		}, _s.dlChangeHandler = function() {
			if (!_s.hasOpenedInPopup_bl) {
				var e = !1;
				if (_s.categories_do && _s.categories_do.isOnDOM_bl) return void _s.categories_do.hide();
				_s.prevId = _s.id, _s.prevEventCatId = _s.catId, _s.catId = parseInt(FWDUVPDL.getParameter("playlistId")), _s.id = parseInt(FWDUVPDL.getParameter("videoId")), (null == _s.catId || null == _s.id || isNaN(_s.catId) || isNaN(_s.id)) && (_s.catId = _s._d.startAtPlaylist, _s.id = _s._d.startAtVideo, e = !0), (0 > _s.catId || _s.catId > _s._d.totalCategories - 1 && !e) && (_s.catId = _s._d.startAtPlaylist, _s.id = _s._d.startAtVideo, e = !0), _s._d.playlist_ar && (0 > _s.id && !e ? (_s.id = _s._d.startAtVideo, e = !0) : _s.prevCatId == _s.catId && _s.id > _s._d.playlist_ar.length - 1 && !e && (_s.id = _s._d.playlist_ar.length - 1, e = !0)), _s.totalDuration = 0;
				var t = _s.catId + " - " + _s.id;
				return e ? void FWDUVPDL.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id) : void(_s.lastValue == t || (_s.lastValue = _s.catId + " - " + _s.id, -1 == _s.prevId && (_s.prevId = _s.id), -1 == _s.prevEventCatId && (_s.prevEventCatId = _s.catId), _s.prevCatId == _s.catId ? (_s.stop(), _s.isThumbClick_bl = !0, _s.updateAds(0, !0), _s._d.startAtRandomVideo_bl = !1) : (_s.loadInternalPlaylist(), _s.prevCatId = _s.catId), _s.pastHref = window.location.href))
			}
		}, _s.setupNormalVideoPlayers = function() {
			_s.videoScreen_do || (_s.isAPIReady_bl = !0, _s.setupRSM(), _s.setupVideoScreen(), _s.setupAudioScreen(), _s.setupVideoPoster(), _s.preloader_do && _s.main_do.addChild(_s.preloader_do), _s.setupSubtitle(), _s.setupClickScreen(), _s.setupPopupAds(), _s._d.showLogo_bl && _s.setupLogo(), _s.addDoubleClickSupport(), _s.setupVideoHider(), _s.setupAnnotations(), _s._d.showController_bl && _s.setupController(), _s.setupAdsStart(), _s._d.showPlaylistButtonAndPlaylist_bl && _s.setupPlaylist(), _s.setupLargePlayPauseButton(), _s._d.showChromecastButton_bl && _s.setupChormecast(), _s._d.showController_bl && _s.setupHider(), _s._d.showPlaylistsButtonAndPlaylists_bl && _s.setupCategories(), _s.setupDisableClick(), _s._d.showEmbedButton_bl && _s.setupEmbedWindow(), _s.setupPasswordWindow(), !_s._d.isLoggedIn_bl && _s._d.showController_bl && _s.setupLoginWindow(), _s._d.showShareButton_bl && _s.setupShareWindow(), _s.setupAopw(), _s._d.showInfoButton_bl && _s.setupInfoWindow(), (_s._d.showOpener_bl && _s.displayType == FWDUVPlayer.STICKY || _s._d.stickyOnScrollShowOpener_bl && _s.stickyOnScroll) && _s.setupOpener(), _s._d.useFingerPrintStamp && _s.setupFingerPrintStamp(), "no" == FWDUVPlayer.useYoutube && (_s.isPlaylistLoadedFirstTime_bl = !0), _s.addMinOnScroll(), _s.isAPIReady_bl = !0, _s.dispatchEvent(FWDUVPlayer.READY), _s._d.addKeyboardSupport_bl && _s.addKeyboardSupport())
		}, _s.setupFingerPrintStamp = function() {
			FWDUVPFPS.setPrototype(), _s.fps = new FWDUVPFPS(_s), _s.videoHolder_do.addChild(_s.fps)
		}, _s.setupOpener = function() {
			FWDUVPOpener.setPrototype(), _s.opener_do = new FWDUVPOpener(_s._d, _s.position_str, _s.isShowed_bl), _s.opener_do.getStyle().zIndex = FWDUVPUtils.isIEAndLessThen9 ? "2147483634" : "99999999994", _s.opener_do.setX(-1e4), _s.isShowed_bl ? _s.opener_do.showCloseButton() : _s.opener_do.showOpenButton(), _s.opener_do.addListener(FWDUVPOpener.SHOW, _s.openerShowHandler), _s.opener_do.addListener(FWDUVPOpener.HIDE, _s.openerHideHandler), _s.opener_do.addListener(FWDUVPController.PLAY, _s.controllerOnPlayHandler), _s.opener_do.addListener(FWDUVPController.PAUSE, _s.controllerOnPauseHandler), _s.stageContainer.appendChild(_s.opener_do.screen), _s.stickyOnScroll && (_s.opener_do.getStyle().position = "fixed", document.documentElement.appendChild(_s.opener_do.screen))
		}, _s.openerShowHandler = function() {
			_s.showPlayer()
		}, _s.openerHideHandler = function() {
			_s.hidePlayer()
		}, _s.setupPreloader = function() {
			FWDUVPPreloader.setPrototype(), _s.preloader_do = new FWDUVPPreloader(_s, "center", 10, _s.preloaderBackgroundColor, _s.preloaderFillColor, 3, .8), _s.preloader_do.show(!1), _s.showPreloader_bl && (_s.displayType == FWDUVPlayer.STICKY ? document.documentElement.appendChild(_s.preloader_do.screen) : _s.main_do.addChild(_s.preloader_do))
		}, _s.positionPreloader = function() {
			function e() {
				var e;
				e = _s.isPlaylistLoaded_bl ? _s.tempVidStageWidth : _s.sW, _s.preloader_do.setX(parseInt((e - _s.preloader_do.w) / 2)), _s.preloader_do.setY(parseInt((_s.tempVidStageHeight - _s.preloader_do.h) / 2))
			}
			_s.displayType == FWDUVPlayer.STICKY ? _s.main_do.contains(_s.preloader_do) ? e() : (_s.preloader_do.setX(Math.round((_s.ws.w - _s.preloader_do.w) / 2)), _s.position_str == FWDUVPlayer.POSITION_BOTTOM ? _s.preloader_do.setY(Math.round(_s.ws.h - _s.preloader_do.h - 10) + FWDUVPUtils.getScrollOffsets().y) : _s.preloader_do.setY(10)) : e()
		}, _s.setupCategories = function() {
			FWDUVPCategories.setPrototype(), _s.categories_do = new FWDUVPCategories(_s._d, _s), _s.categories_do.getStyle().zIndex = "2147483647", _s.categories_do.addListener(FWDUVPCategories.HIDE_COMPLETE, _s.categoriesHideCompleteHandler), _s._d.showPlaylistsByDefault_bl && (_s.showCatWidthDelayId_to = setTimeout(function() {
				_s.showCategories()
			}, 1400))
		}, _s.categoriesHideCompleteHandler = function() {
			if (_s.controller_do && (_s.controller_do.setCategoriesButtonState("unselected"), _s.controller_do.categoriesButton_do.setNormalState(!0)), !_s.useDeepLinking_bl) {
				if (_s.catId == _s.categories_do.id) return;
				_s.catId = _s.categories_do.id, _s.id = 0, _s.loadInternalPlaylist(_s.catId)
			} else if (_s.categories_do.id != _s.catId) return _s.catId = _s.categories_do.id, _s.id = 0, void FWDUVPDL.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id);
			_s.isVideoPlayingWhenOpenWindows_bl && _s.resume()
		}, _s.setupVideoPoster = function() {
			FWDUVPPoster.setPrototype(), _s.videoPoster_do = new FWDUVPPoster(_s, _s._d.show, _s._d.posterBackgroundColor_str), _s.videoHolder_do.addChild(_s.videoPoster_do)
		}, _s.setupInfoWindow = function() {
			FWDUVPInfoWindow.setPrototype(), _s.infoWindow_do = new FWDUVPInfoWindow(_s, _s._d), _s.infoWindow_do.addListener(FWDUVPInfoWindow.HIDE_COMPLETE, _s.infoWindowHideCompleteHandler), _s.main_do.addChild(_s.infoWindow_do)
		}, _s.infoWindowHideCompleteHandler = function() {
			_s.isVideoPlayingWhenOpenWindows_bl && _s.resume(), _s.controller_do && !_s.isMbl && (_s.controller_do.infoButton_do.isDisabled_bl = !1, _s.controller_do.infoButton_do.setNormalState(!0))
		}, _s.setupChormecast = function() {
			_s._d.showController_bl && (FWDUVPCC.setPrototype(), _s.cc = new FWDUVPCC(_s.controller_do))
		}, _s.setupLargePlayPauseButton = function() {
			_s._d.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), _s.lrgPlayBtn = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-play'></span></div>", void 0, "UVPLargePlayButtonNormalState", "UVPLargePlayButtonSelectedState")) : (FWDUVPSimpleButton.setPrototype(), _s.lrgPlayBtn = -1 == _s.sknPth.indexOf("hex_white") ? new FWDUVPSimpleButton(_s._d.largePlayN_img, _s._d.largePlayS_str, void 0, !0, _s._d.useHEX, _s._d.nBC, _s._d.sBC, !1, !1, !1, !1, !0) : new FWDUVPSimpleButton(_s._d.largePlayN_img, _s._d.largePlayS_str, void 0, !0, _s._d.useHEX, _s._d.nBC, "#FFFFFF", !1, !1, !1, !1, !0)), _s.lrgPlayBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, _s.largePlayButtonUpHandler), _s.lrgPlayBtn.setOverflow("visible"), _s.lrgPlayBtn.hide(!1), _s.main_do.addChild(_s.lrgPlayBtn)
		}, _s.largePlayButtonUpHandler = function() {
			_s.isIMA && _s.IMA && !_s.IMA.isReady || (_s.isThumbClick_bl = !0, _s.disableClick(), _s.lrgPlayBtn.hide(), _s.play(), _s._d.goFullScreenOnPlay_bl && _s.goFullScreen())
		}, _s.positionLargePlayButton = function() {
			_s.lrgPlayBtn.setX(parseInt((_s.tempVidStageWidth - _s.lrgPlayBtn.w) / 2)), _s.lrgPlayBtn.setY(parseInt((_s.tempVidStageHeight - _s.lrgPlayBtn.h) / 2))
		}, _s.setupLogo = function() {
			FWDUVPLogo.setPrototype(), _s.logo_do = new FWDUVPLogo(_s, _s._d.logoPath_str, _s._d.logoPosition_str, _s._d.logoMargins), _s.main_do.addChild(_s.logo_do)
		}, _s.setupPlaylist = function() {
			FWDUVPPlaylist.setPrototype(), _s.playlist_do = new FWDUVPPlaylist(_s, _s._d), _s.playlist_do.addListener(FWDUVPPlaylist.THUMB_MOUSE_UP, _s.playlistThumbMouseUpHandler), _s.playlist_do.addListener(FWDUVPPlaylist.PLAY_PREV_VIDEO, _s.playPrevVideoHandler), _s.playlist_do.addListener(FWDUVPPlaylist.PLAY_NEXT_VIDEO, _s.playNextVideoHandler), _s.playlist_do.addListener(FWDUVPPlaylist.ENABLE_SHUFFLE, _s.enableShuffleHandler), _s.playlist_do.addListener(FWDUVPPlaylist.DISABLE_SHUFFLE, _s.disableShuffleHandler), _s.playlist_do.addListener(FWDUVPPlaylist.ENABLE_LOOP, _s.enableLoopHandler), _s.playlist_do.addListener(FWDUVPPlaylist.DISABLE_LOOP, _s.disableLoopHandler), _s.playlist_do.addListener(FWDUVPPlaylist.CHANGE_PLAYLIST, _s.changePlaylistHandler), _s.main_do.addChildAt(_s.playlist_do, 0), _s._d.useVectorIcons_bl && setTimeout(function() {
				_s.playlist_do.resizeAndPosition(!0)
			}, 340)
		}, _s.changePlaylistHandler = function(t) {
			_s.loadPlaylist(t.id)
		}, _s.playlistThumbMouseUpHandler = function(t) {
			_s.disableClick_bl || (_s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.totalDuration = 0, _s.useDeepLinking_bl && _s.id != t.id ? (FWDUVPDL.setValue("?playlistId=" + _s.catId + "&videoId=" + t.id), _s.id = t.id, _s.isThumbClick_bl = !0) : (_s.stop(), _s.id = t.id, _s.changeHLS_bl = !0, _s.isThumbClick_bl = !0, _s.isAdd_bl = !1, _s.updateAds(0)), _s._d.goFullScreenOnPlay_bl && _s.goFullScreen())
		}, _s.playPrevVideoHandler = function() {
			_s.isThumbClick_bl = !0, _s._d.shuffle_bl ? _s.playShuffle() : _s.playPrev()
		}, _s.playNextVideoHandler = function() {
			_s.isThumbClick_bl = !0, _s._d.shuffle_bl ? _s.playShuffle() : _s.playNext()
		}, _s.enableShuffleHandler = function() {
			_s._d.shuffle_bl = !0, _s._d.loop_bl = !1, _s.playlist_do.setShuffleButtonState("selected"), _s.playlist_do.setLoopStateButton("unselected")
		}, _s.disableShuffleHandler = function() {
			_s._d.shuffle_bl = !1, _s.playlist_do.setShuffleButtonState("unselected")
		}, _s.enableLoopHandler = function() {
			_s._d.loop_bl = !0, _s._d.shuffle_bl = !1, _s.playlist_do.setLoopStateButton("selected"), _s.playlist_do.setShuffleButtonState("unselected")
		}, _s.disableLoopHandler = function() {
			_s._d.loop_bl = !1, _s.playlist_do.setLoopStateButton("unselected")
		}, _s.setupAPT = function() {
			!_s.apt && _s._d.autoPlayText && _s._d.autoPlay_bl && (_s.apt = new FWDUVPTransformDisplayObject("div"), _s.apt.screen.className = "fwduvp-autoplay-text", _s.apt.setButtonMode(!0), _s.apt.setInnerHTML(_s._d.autoPlayText + "<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M9.4272 0.430497C9.4272 0.267667 9.33293 0.113407 9.18724 0.0448468C9.03298 -0.0322832 8.86158 -0.00657319 8.73303 0.0962667L4.93652 3.12147L9.4272 7.61215V0.430497Z\" fill=\"black\"/><path d=\"M11.8742 11.2702L0.733188 0.129242C0.566073 -0.0378725 0.294404 -0.0378725 0.127289 0.129242C-0.0398256 0.296357 -0.0398256 0.568026 0.127289 0.735141L2.82341 3.43212H2.57231C2.30664 3.43212 2.07525 3.5521 1.92099 3.74064C1.79244 3.88633 1.71531 4.08344 1.71531 4.28912V7.71712C1.71531 8.18847 2.10096 8.57412 2.57231 8.57412H4.56055L8.73413 11.9078C8.81126 11.9678 8.90553 12.0021 8.9998 12.0021C9.05979 12.0021 9.12835 11.985 9.18834 11.9593C9.33403 11.8907 9.4283 11.7364 9.4283 11.5736V10.037L11.2674 11.8761C11.3514 11.9601 11.4611 12.0021 11.5708 12.0021C11.6805 12.0021 11.7902 11.9601 11.8742 11.877C12.0413 11.709 12.0413 11.4382 11.8742 11.2702Z\" fill=\"black\"/></g></svg>"), _s.main_do.addChild(_s.apt), _s.apt.screen.addEventListener("click", function() {
				_s.setVolume(_s._d.volume, !0)
			})), _s.showAPT()
		}, _s.removeAPT = function() {
			_s.apt && _s.main_do.contains(_s.apt) && _s.main_do.removeChild(_s.apt), _s.aptRemoved = !0
		}, _s.hideAPT = function() {
			_s.apt && _s.apt.setX(-5e3)
		}, _s.showAPT = function() {
			_s.apt && !_s.aptRemoved && (_s.apt.setX(0), _s.apt.setScale2(0), FWDAnimation.to(_s.apt, 1, {
				scale: 1,
				ease: Elastic.easeInOut
			}))
		}, _s.setupPopupAds = function() {
			FWDUVPPupupAds.setPrototype(), _s.popupAds_do = new FWDUVPPupupAds(_s, _s._d), _s.videoHolder_do.addChild(_s.popupAds_do)
		}, _s.setupSubtitle = function() {
			FWDUVPSubtitle.setPrototype(), _s.subtitle_do = new FWDUVPSubtitle(_s, _s._d), _s.subtitle_do.addListener(FWDUVPSubtitle.LOAD_COMPLETE, _s.subtitleLoadComplete)
		}, _s.subtitleLoadComplete = function() {
			_s.subtitle_do.show(), _s.controller_do && _s.controller_do.enableSubtitleButton()
		}, _s.loadSubtitle = function(e) {
			return _s.isCasting ? void _s.cc.loadSubtitle() : void(_s.controller_do && _s.controller_do.disableSubtitleButton(), e && (_s.subtitle_do.loadSubtitle(e), _s.videoHolder_do.addChildAt(_s.subtitle_do, _s.videoHolder_do.getChildIndex(_s.dClk_do) - 1)))
		}, _s.setupController = function() {
			FWDUVPController.setPrototype(), _s.controller_do = new FWDUVPController(_s._d, _s), _s.controller_do.addListener(FWDUVPController.CHANGE_AUDIO_TRACKS, _s.audioTracksHanlder), _s.controller_do.addListener(FWDUVPController.VR, _s.vrHanlder), _s.controller_do.addListener(FWDUVPData.LOAD_ERROR, _s.controllerErrorHandler), _s.controller_do.addListener(FWDUVPController.REWIND, _s.rewindHandler), _s.controller_do.addListener(FWDUVPController.CHANGE_PLAYBACK_RATES, _s.changePlaybackRateHandler), _s.controller_do.addListener(FWDUVPController.CHANGE_SUBTITLE, _s.changeSubtitileHandler), _s.controller_do.addListener(FWDUVPController.SHOW_CATEGORIES, _s.showCategoriesHandler), _s.controller_do.addListener(FWDUVPController.SHOW_PLAYLIST, _s.showPlaylistHandler), _s.controller_do.addListener(FWDUVPController.HIDE_PLAYLIST, _s.hidePlaylistHandler), _s.controller_do.addListener(FWDUVPController.PLAY, _s.controllerOnPlayHandler), _s.controller_do.addListener(FWDUVPController.PAUSE, _s.controllerOnPauseHandler), _s.controller_do.addListener(FWDUVPController.START_TO_SCRUB, _s.controllerStartToScrubbHandler), _s.controller_do.addListener(FWDUVPController.SCRUB, _s.controllerScrubbHandler), _s.controller_do.addListener(FWDUVPController.STOP_TO_SCRUB, _s.controllerStopToScrubbHandler), _s.controller_do.addListener(FWDUVPController.CHANGE_VOLUME, _s.controllerChangeVolumeHandler), _s.controller_do.addListener(FWDUVPController.DOWNLOAD_VIDEO, _s.controllerDownloadVideoHandler), _s.controller_do.addListener(FWDUVPController.CHANGE_YOUTUBE_QUALITY, _s.controllerChangeYoutubeQualityHandler), _s.controller_do.addListener(FWDUVPController.FULL_SCREEN, _s.controllerFullScreenHandler), _s.controller_do.addListener(FWDUVPController.NORMAL_SCREEN, _s.controllerNormalScreenHandler), _s.controller_do.addListener(FWDUVPPlaylist.PLAY_PREV_VIDEO, _s.playPrevVideoHandler), _s.controller_do.addListener(FWDUVPPlaylist.PLAY_NEXT_VIDEO, _s.playNextVideoHandler), _s.controller_do.addListener(FWDUVPController.SHOW_EMBED_WINDOW, _s.showEmbedWindowHandler), _s.controller_do.addListener(FWDUVPController.SHOW_INFO_WINDOW, _s.showInfoWindowHandler), _s.controller_do.addListener(FWDUVPController.SHOW_SHARE_WINDOW, _s.controllerShareHandler), _s.controller_do.addListener(FWDUVPController.SHOW_SUBTITLE, _s.showSubtitleHandler), _s.controller_do.addListener(FWDUVPController.HIDE_SUBTITLE, _s.hideSubtitleHandler), _s.videoHolder_do.addChild(_s.controller_do)
		}, _s.audioTracksHanlder = function(t) {
			_s.hlsJS ? _s.hlsJS.audioTrack = t.id : _s.videoScreen_do.setAudioTrack(t.id)
		}, _s.vrHanlder = function() {
			_s.play(), _s.videoScreen_do.vrSupport_bl ? _s.videoScreen_do.startVR() : _s.videoScreen_do.showVrMessage()
		}, _s.controllerErrorHandler = function(t) {
			_s.showSourceError(t.text)
		}, _s.rewindHandler = function() {
			_s.rewind(_s._d.rewTm)
		}, _s.rewind = function(e) {
			var t = _s.getCurrentTime();
			5 == t.length && (t = "00:" + t), 7 == t.length && (t = "0" + t), t = FWDUVPUtils.getSecondsFromString(t), t -= e, t = FWDUVPUtils.formatTime(t), 5 == t.length && (t = "00:" + t), 7 == t.length && (t = "0" + t), _s.scrubbAtTime(t)
		}, _s.changePlaybackRateHandler = function(t) {
			_s.setPlaybackRate(t.rate)
		}, _s.changeSubtitileHandler = function(t) {
			_s._d.playlist_ar[_s.id].startAtSubtitle = t.id, _s.controller_do.updateSubtitleButtons(_s._d.playlist_ar[_s.id].subtitleSource, _s._d.playlist_ar[_s.id].startAtSubtitle), _s.ccSS = +(_s._d.playlist_ar[_s.id].subtitleSource.length - t.id), _s.isAdd_bl || _s.loadSubtitle(_s._d.playlist_ar[_s.id].subtitleSource[_s._d.playlist_ar[_s.id].subtitleSource.length - 1 - _s._d.playlist_ar[_s.id].startAtSubtitle].source)
		}, _s.showSubtitleHandler = function() {
			_s.subtitle_do.show(), _s.subtitle_do.isShowed_bl = !0
		}, _s.hideSubtitleHandler = function() {
			_s.subtitle_do.isShowed_bl = !1, _s.subtitle_do.hide()
		}, _s.showCategoriesHandler = function() {
			_s.showCategories(), _s.controller_do && _s.controller_do.setCategoriesButtonState("selected")
		}, _s.showPlaylistHandler = function() {
			_s.disableClick(), _s.showPlaylist()
		}, _s.hidePlaylistHandler = function() {
			_s.disableClick(), _s.hidePlaylist()
		}, _s.controllerOnPlayHandler = function() {
			_s.play(), _s._d.goFullScreenOnPlay_bl && _s.goFullScreen()
		}, _s.controllerOnPauseHandler = function() {
			_s.pause()
		}, _s.controllerStartToScrubbHandler = function() {
			return _s.isCasting ? void _s.cc.startToScrub() : void _s.startToScrub()
		}, _s.controllerScrubbHandler = function(t) {
			return _s.isCasting ? void _s.cc.seek(t.percent) : void _s.scrub(t.percent)
		}, _s.controllerStopToScrubbHandler = function() {
			return _s.isCasting ? void _s.cc.stopToScrub() : void _s.stopToScrub()
		}, _s.controllerChangeVolumeHandler = function(t) {
			_s.setVolume(t.percent)
		}, _s.controllerDownloadVideoHandler = function() {
			_s.downloadVideo()
		}, _s.controllerShareHandler = function() {
			_s.setVideoPlayingStateOnWindowShow(), _s.pause(), _s.shareWindow_do.show(), _s.controller_do && !_s.isMbl && (_s.controller_do.shareButton_do.setSelectedState(), _s.controller_do.shareButton_do.isDisabled_bl = !0)
		}, _s.controllerChangeYoutubeQualityHandler = function(t) {
			_s.videoType_str == FWDUVPlayer.HLS_JS ? (_s.curHlsLevel = Math.abs(t.id - _s.hlsLevels_ar.length + 1), _s.hlsJS.currentLevel = _s.curHlsLevel) : _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.ytb_do.setQuality(t.quality) : (_s.curDurration = _s.curTimeInSecond, _s._d.playlist_ar[_s.id].startAtVideo = _s._d.playlist_ar[_s.id].videoSource.length - 1 - t.id, _s.setSource(_s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source, !1, _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].is360), _s.isQualityChanging_bl = !0, _s.play())
		}, _s.controllerFullScreenHandler = function() {
			_s.goFullScreen()
		}, _s.controllerNormalScreenHandler = function() {
			_s.goNormalScreen()
		}, _s.showEmbedWindowHandler = function() {
			_s.setVideoPlayingStateOnWindowShow(), _s.pause(), _s.embedWindow_do.show(), _s.controller_do && !_s.isMbl && (_s.controller_do.embedButton_do.setSelectedState(), _s.controller_do.embedButton_do.isDisabled_bl = !0)
		}, _s.showInfoWindowHandler = function() {
			_s.setVideoPlayingStateOnWindowShow(), _s.pause(), _s.infoWindow_do.show(_s._d.playlist_ar[_s.id].desc), _s.controller_do && !_s.isMbl && (_s.controller_do.infoButton_do.setSelectedState(), _s.controller_do.infoButton_do.isDisabled_bl = !0)
		}, _s.setVideoPlayingStateOnWindowShow = function() {
			_s.isCasting ? _s.isVideoPlayingWhenOpenWindows_bl = "PLAYING" == _s.cc.playerState : _s.isIMA && _s.IMA.started ? _s.isVideoPlayingWhenOpenWindows_bl = _s.IMA.isPlaying : _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do ? _s.isVideoPlayingWhenOpenWindows_bl = _s.ytb_do.isPlaying_bl : _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do ? _s.isVideoPlayingWhenOpenWindows_bl = _s.vimeo_do.isPlaying_bl : _s.videoScreen_do && (_s.isVideoPlayingWhenOpenWindows_bl = _s.videoScreen_do.isPlaying_bl)
		}, _s.setupAudioScreen = function() {
			_s.audioScreen_do || (FWDUVPAudioScreen.setPrototype(), _s.audioScreen_do = new FWDUVPAudioScreen(_s, _s._d.volume), _s.audioScreen_do.addListener(FWDUVPAudioScreen.ERROR, _s.videoScreenErrorHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.SAFE_TO_SCRUBB, _s.videoScreenSafeToScrubbHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.STOP, _s.videoScreenStopHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.PLAY, _s.videoScreenPlayHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.PAUSE, _s.videoScreenPauseHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.UPDATE, _s.videoScreenUpdateHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.UPDATE_TIME, _s.videoScreenUpdateTimeHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.LOAD_PROGRESS, _s.videoScreenLoadProgressHandler), _s.audioScreen_do.addListener(FWDUVPVideoScreen.START_TO_BUFFER, _s.videoScreenStartToBuferHandler), _s.audioScreen_do.addListener(FWDUVPVideoScreen.STOP_TO_BUFFER, _s.videoScreenStopToBuferHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.PLAY_COMPLETE, _s.videoScreenPlayCompleteHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.UPDATE_SUBTITLE, _s.videoScreenUpdateSubtitleHandler), _s.videoHolder_do.addChild(_s.audioScreen_do))
		}, _s.setupVideoScreen = function() {
			FWDUVPVideoScreen.setPrototype(), _s.videoScreen_do = new FWDUVPVideoScreen(_s, _s._d.volume), _s.videoScreen_do.addListener(FWDUVPVideoScreen.ERROR, _s.videoScreenErrorHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.SAFE_TO_SCRUBB, _s.videoScreenSafeToScrubbHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.STOP, _s.videoScreenStopHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.PLAY, _s.videoScreenPlayHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.PAUSE, _s.videoScreenPauseHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.UPDATE, _s.videoScreenUpdateHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.UPDATE_TIME, _s.videoScreenUpdateTimeHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.LOAD_PROGRESS, _s.videoScreenLoadProgressHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.START_TO_BUFFER, _s.videoScreenStartToBuferHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.STOP_TO_BUFFER, _s.videoScreenStopToBuferHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.PLAY_COMPLETE, _s.videoScreenPlayCompleteHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.UPDATE_SUBTITLE, _s.videoScreenUpdateSubtitleHandler), _s.videoHolder_do.addChild(_s.videoScreen_do)
		}, _s.videoScreenErrorHandler = function(t) {
			var e;
			_s.isPlaying_bl = !1, FWDUVPlayer.hasHTML5Video || _s.videoType_str == FWDUVPlayer.YOUTUBE ? (e = t.text, window.console && console.log(t.text), _s.showSourceError(e), _s.controller_do && (_s.controller_do.disableMainScrubber(), _s.controller_do.disablePlayButton(), !_s._d.showControllerWhenVideoIsStopped_bl && _s.controller_do.hide(!_s.isMbl), _s.lrgPlayBtn.hide(), _s.hideClickScreen(), _s.hider && _s.hider.stop())) : (e = t, _s.showSourceError(e)), _s.logo_do && _s.logo_do.hide(!1), _s.preloader_do && _s.preloader_do.hide(!1), _s.showCursor(), _s.dispatchEvent(FWDUVPlayer.ERROR, {
				error: e
			})
		}, _s.videoScreenSafeToScrubbHandler = function() {
			var e = _s._d.playlist_ar[_s.id];
			if (_s.preloader_do && _s.preloader_do.hide(), _s.controller_do && (_s.isAdd_bl ? (_s.controller_do.disableMainScrubber(), _s._d.timeToHoldAds && _s.adsStart_do.show(!0), _s._d.adsThumbnailPath_str && "none" != _s._d.adsThumbnailPath_str && _s.adsStart_do.loadThumbnail(_s._d.adsThumbnailPath_str), _s.positionAds()) : _s.controller_do.enableMainScrubber(), _s.controller_do.enablePlayButton(), _s.controller_do.show(!0), !_s.isAdd_bl && (_s.controller_do.ytbQualityButton_do && (_s.controller_do.ytbQualityButton_do.enable(), _s.controller_do.enablePlaybackRateButton()), _s.controller_do.enableAtButton()), !_s.isAdd_bl && _s.controller_do.playbackRateButton_do && _s.controller_do.enablePlaybackRateButton(), !_s.isAdd_bl && (_s.controller_do.downloadButton_do && _s.controller_do.downloadButton_do.enable(), _s.controller_do.rewindButton_do && _s.controller_do.rewindButton_do.enable()), _s.hider && _s.hider.start()), !_s.isAdd_bl && !_s.isIMA && e && e.subtitleSource && _s.loadSubtitle(e.subtitleSource[e.subtitleSource.length - 1 - e.startAtSubtitle].source), _s.isAdd_bl || (_s.customContextMenu_do && _s.customContextMenu_do.enable(), (_s.controller_do && _s.controller_do.thumbnailsPreview_do && e.thumbnailsPreview || _s.controller_do && _s.controller_do.thumbnailsPreview_do && "auto" == e.thumbnailsPreview && (_s.videoType_str == FWDUVPlayer.VIDEO || _s.videoType_str == FWDUVPlayer.HLS_JS)) && (_s._d.tempShowMainScrubberToolTipLabel_bl = !1, _s.controller_do.thumbnailsPreview_do.load(e.thumbnailsPreview, _s.videoType_str, _s.videoSourcePath_str, _s.videoScreen_do.video_el))), _s.controller_do && (!_s.isQualityChanging_bl && _s.controller_do.disableSubtitleButton(), _s.controller_do.enableAtbButton(), _s.isAdd_bl && window.FWDUVPCC && FWDUVPCC.disableButton()), _s.isMbl && _s.adsSkip_do.hide(!1), _s.isQualityChanging_bl && !_s.isAdd_bl && (_s.scrubbAtTime(_s.curDurration), _s.curDurration = 0, _s.isQualityChanging_bl = !1), _s.videoPoster_do.hide(!0), _s.callVastEvent("start"), _s.executeVastEvent(_s.Impression), _s.showClickScreen(), setTimeout(function() {
					_s.totalDuration && _s.controller_do && _s.controller_do.positionAdsLines(_s.totalDuration)
				}, 1500), "00:00:00" != _s.getStartTimeStamp("t") && (args.uvpi ? args.uvpi == _s.instanceName_str && _s.scrubbAtTime(_s.getStartTimeStamp("t")) : _s.scrubbAtTime(_s.getStartTimeStamp("t"))), document.cookie && _s._d.useResumeOnPlay_bl && !_s.isAdd_bl) {
				if (FWDUVPUtils.getCookie("fwduvp_video_path") && FWDUVPUtils.getCookie("fwduvp_time") && FWDUVPUtils.getCookie("fwduvp_video_path") == _s.videoSourcePath_str) {
					FWDUVPUtils.getCookie("fwduvp_time");
					_s.rmsPlayed_bl || _s.scrubbAtTime(FWDUVPUtils.getCookie("fwduvp_time"))
				}
				_s.rmsPlayed_bl = !0
			}
			_s.dispatchEvent(FWDUVPlayer.SAFE_TO_SCRUB)
		}, _s.videoScreenUpdateSubtitleHandler = function(t) {
			_s.subtitle_do && _s.subtitle_do.updateSubtitle(t.curTime)
		}, _s.videoScreenStopHandler = function() {
			_s.main_do && _s.main_do.contains(_s.info_do) && _s.main_do.removeChild(_s.info_do), _s.videoPoster_do.allowToShow_bl = !0, _s.isPlaying_bl = !1, _s.controller_do && (_s.controller_do.disableMainScrubber(), _s.controller_do.showPlayButton(), _s._d.showControllerWhenVideoIsStopped_bl ? _s.controller_do.show(!_s.isMbl) : _s.controller_do.hide(!_s.isMbl), _s.hider && _s.hider.stop()), _s.useYoutube_bl && _s.ytb_do && (_s.isMbl ? _s.ytb_do.destroyYoutube() : _s.ytb_do.stopVideo()), _s.logo_do && _s.logo_do.hide(!0), _s.hideClickScreen(), _s.isMbl && _s.videoType_str == FWDUVPlayer.YOUTUBE && (_s.videoPoster_do.hide(), _s.lrgPlayBtn.hide()), _s.isMbl && (_s.adsSkip_do.hide(!1), _s.adsStart_do.hide(!1)), _s.showCursor(), _s.dispatchEvent(FWDUVPlayer.STOP)
		}, _s.videoScreenPlayHandler = function() {
			_s.preloader_do && _s.preloader_do.hide(), _s.is360 && (_s.dClk_do.getStyle().cursor = "url(" + _s._d.handPath_str + "), default"), FWDUVPlayer.keyboardCurInstance = _s, _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isStopped_bl || (_s.setupAPT(), _s.callVastEvent("resume"), _s.isMbl ? FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.STOP_ALL_VIDEOS && FWDUVPlayer.stopAllVideos(_s) : FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.PAUSE_ALL_VIDEOS && FWDUVPlayer.pauseAllVideos(_s), _s.logo_do && _s.logo_do.show(!0), _s.controller_do && (_s.controller_do.showPauseButton(), _s.controller_do.show(!0)), _s.playAtTime_bl = !1, _s.hasHlsPlayedOnce_bl = !0, _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), _s.hider && _s.hider.start(), _s.showCursor(), _s.videoScreenStopToBuferHandler(), _s.popw_do && _s.popw_do.hide(), (!_s.hasStartedToPlay_bl && _s._d.playlist_ar[_s.id] && _s._d.playlist_ar[_s.id].startAtTime && !_s.isAdd_bl && !_s.wasAdd_bl || _s._d.playlist_ar[_s.id].startAtTime && !_s.isAdd_bl && _s.addStartAtZero) && _s.scrubbAtTime(_s._d.playlist_ar[_s.id].startAtTime), (!_s.isMbl || -1 == _s.source.indexOf(".m3u") || _s.isMbl && -1 == _s.source.indexOf(".m3u")) && _s.resumeAfterAd(), !_s.hasStartedToPlay_bl && _s.castStartAtTime && !_s.isAdd_bl && (_s.scrubbAtTime(_s.castStartAtTime), _s.castStartAtTime = void 0), _s.isPlaying_bl = !0, _s.isThumbClick_bl = !1, _s.loadAddFirstTime_bl = !1, _s.hasStartedToPlay_bl = !0, _s.opener_do && _s.opener_do.showPauseButton(), _s.fps && _s.fps.start(), _s.dispatchEvent(FWDUVPlayer.PLAY))
		}, _s.resumeAfterAd = function() {
			_s.wasAdd_bl && (FWDUVPUtils.isSafari ? setTimeout(function() {
				_s.scrubbAtTime(_s.scrubAfterAddDuration)
			}, 500) : _s.videoType_str == FWDUVPlayer.VIMEO ? setTimeout(function() {
				_s.scrubbAtTime(_s.scrubAfterAddDuration)
			}, 500) : _s.scrubbAtTime(_s.scrubAfterAddDuration), _s.wasAdd_bl = _s.addStartAtZero = !1)
		}, _s.videoScreenPauseHandler = function() {
			if (!(_s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isStopped_bl) && !(_s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do && _s.vimeo_do.isStopped_bl)) {
				_s.callVastEvent("pause"), _s.preloader_do && _s.preloader_do.hide(), _s.isPlaying_bl = !1, _s.controller_do && (_s.controller_do.showPlayButton(), _s.controller_do.show(!0));
				var e = _s.shareWindow_do && _s.shareWindow_do.isShowed_bl,
					t = _s.embedWindow_do && _s.embedWindow_do.isShowed_bl;
				e || t || !_s.showPopW_bl || _s.popw_do.show(_s.popwSource), _s.lrgPlayBtn && !_s._d.showAnnotationsPositionTool_bl && _s.lrgPlayBtn.show(), _s.hider && (_s.hider.reset(), _s.hider.stop()), _s.showClickScreen(), _s.showCursor(), _s.opener_do && _s.opener_do.showPlayButton(), _s.fps && _s.fps.stop(), _s.dispatchEvent(FWDUVPlayer.PAUSE)
			}
		}, _s.videoScreenUpdateHandler = function(t) {
			var e;
			FWDUVPlayer.hasHTML5Video || _s.videoType_str == FWDUVPlayer.YOUTUBE ? (e = t.percent, _s.controller_do && _s.controller_do.updateMainScrubber(e)) : (e = t, console.log(t), _s.controller_do && _s.controller_do.updateMainScrubber(e)), _s.dispatchEvent(FWDUVPlayer.UPDATE, {
				percent: e
			})
		}, _s.videoScreenUpdateTimeHandler = function(e, e2, e3) {
			if (!_s.isStopped_bl) {
				if (_s.prevSeconds != Math.round(e.seconds) && (_s.totalTimePlayed += 1), _s.totalTimeInSeconds = Math.round(e.totalTimeInSeconds), _s.totalTimeInMilliseconds = e.totalTimeInSeconds, _s.curTimeInSecond = Math.round(e.seconds), _s.curTimeInmilliseconds = e.seconds, _s.prevSeconds = Math.round(e.seconds), _s.totalPercentPlayed = _s.totalTimePlayed / e.totalTimeInSeconds, isFinite(_s.totalPercentPlayed) || (_s.totalPercentPlayed = 0), FWDUVPUtils.getSecondsFromString(_s.getStartTimeStamp("e")) && _s.curTimeInSecond >= parseInt(FWDUVPUtils.getSecondsFromString(_s.getStartTimeStamp("e"))) && _s.stop(), _s.controller_do && !_s.controller_do.isMainScrubberScrubbing_bl && _s.controller_do.atb && _s.controller_do.atb.isShowed_bl && !_s.controller_do.atb.scrub) {
					var a = Math.round(_s.totalTimeInSeconds * _s.controller_do.atb.pa),
						b = Math.round(_s.totalTimeInSeconds * _s.controller_do.atb.pb);
					_s.prevCurTimeInSeconds != _s.curTimeInSecond && (_s.prevCurTimeInSeconds = _s.curTimeInSecond, _s.curTimeInSecond < a ? _s.scrub(_s.controller_do.atb.pa) : _s.curTimeInSecond > b && _s.scrub(_s.controller_do.atb.pa))
				}
				_s.isAdd_bl && (.25 <= _s.totalPercentPlayed && _s.callFirstQuartile ? (_s.callVastEvent("firstQuartile"), _s.callFirstQuartile = !1) : .5 <= _s.totalPercentPlayed && _s.callMidpoint ? (_s.callVastEvent("midpoint"), _s.callMidpoint = !1) : .75 <= _s.totalPercentPlayed && _s.callThirdQuartile && (_s.callVastEvent("thirdQuartile"), _s.callThirdQuartile = !1));
				var time, seconds;
				if (FWDUVPlayer.hasHTML5Video || _s.videoType_str == FWDUVPlayer.YOUTUBE || _s.videoType_str == FWDUVPlayer.VIMEO ? (_s.curTime = e.curTime, _s.totalTime = e.totalTime, time = _s.curTime + "/" + _s.totalTime, seconds = _s.curTimeInSecond, _s.controller_do && _s.controller_do.updateTime(time)) : (_s.curTime = e, _s.totalTime = e2, time = _s.curTime + "/" + _s.totalTime, (null == e || null == e2) && (time = "00:00/00:00"), seconds = Math.round(e3), _s.controller_do && _s.controller_do.updateTime(time)), _s.currentSecconds = e.seconds, _s.popupAds_do && !_s.isAdd_bl && _s.popupAds_do.update(_s.curTimeInSecond), _s.annotations_do && !_s.isAdd_bl && _s.annotations_do.update(_s.curTimeInSecond), _s._d.playlist_ar && _s._d.playlist_ar[_s.id] && (_s.cuePointsSource_ar = _s._d.playlist_ar[_s.id].cuepoints_ar), _s.cuePointsSource_ar && !_s.isAdd_bl)
					for (var length = _s.cuePointsSource_ar.length, i = 0; i < length; i++)
						if (_s.cuePointsSource_ar) {
							var cuePoint = _s.cuePointsSource_ar[i];
							cuePoint.timeStart != _s.curTimeInSecond || cuePoint.played_bl || (_s._d.executeCuepointsOnlyOnce_bl ? !cuePoint.played_bl && eval(cuePoint.javascriptCall) : eval(cuePoint.javascriptCall), cuePoint.played_bl = !0)
						} _s.isAdd_bl || (5 < _s.totalTime.length ? _s.totalDuration = FWDUVPUtils.getSecondsFromString(_s.totalTime) : _s.totalDuration = FWDUVPUtils.getSecondsFromString("00:" + _s.totalTime)), _s.isIMA && _s.IMA.updateCuepointLines(seconds), _s.isAdd_bl ? _s._d.timeToHoldAds > seconds ? (_s.adsStart_do.updateText(_s._d.skipToVideoText_str + Math.abs(_s._d.timeToHoldAds - seconds)), _s.isMbl && _s.adsSkip_do.hide(!1), (_s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME) && _s.adsStart_do.show(!0)) : _s.isPlaying_bl && (_s.adsStart_do.hide(!0), _s._d.timeToHoldAds && _s.adsSkip_do.show(!0)) : (_s.adsStart_do.hide(!0), _s.adsSkip_do.hide(!0)), 0 != seconds && _s.updateAds(seconds), _s.isPlaying_bl && _s._d.playlist_ar[_s.id] && FWDUVPUtils.getSecondsFromString(_s._d.playlist_ar[_s.id].stopAtTime) <= e.seconds && (_s._d.playAfterVideoStop_bl ? _s._d.stopAfterLastVideoHasPlayed_bl && _s._d.playlist_ar.length - 1 == _s.id ? _s.stop() : _s.playNext() : !_s._d.stopAfterLastVideoHasPlayed_bl && _s._d.playlist_ar.length - 1 == _s.id && 1 < _s._d.playlist_ar.length ? _s.playNext() : _s.stop()), _s.dispatchEvent(FWDUVPlayer.UPDATE_TIME, {
					currentTime: _s.curTime,
					totalTime: _s.totalTime
				})
			}
		}, _s.videoScreenLoadProgressHandler = function(t) {
			FWDUVPlayer.hasHTML5Video || _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.controller_do && _s.controller_do.updatePreloaderBar(t.percent) : _s.controller_do && _s.controller_do.updatePreloaderBar(t)
		}, _s.videoScreenStartToBuferHandler = function() {
			_s.preloader_do && _s.preloader_do.show(!1)
		}, _s.videoScreenStopToBuferHandler = function() {
			_s.preloader_do && _s.isPlaylistLoaded_bl && _s.preloader_do.hide(!0)
		}, _s.videoScreenPlayCompleteHandler = function(t, e) {
			if (_s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.stopedAtComplete = !0, _s.callVastEvent("complete"), _s.isIMA && _s.IMA.hasPostRoll && _s.curTimeInSecond >= _s.totalTimeInSeconds - 1) return void _s.IMA.playPostRoll();
			!_s.isAdd_bl && _s._d.playlist_ar[_s.id].redirectURL && ("_self" == _s._d.playlist_ar[_s.id].redirectTarget ? location.replace(_s._d.playlist_ar[_s.id].redirectURL) : window.open(_s._d.playlist_ar[_s.id].redirectURL, _s._d.playlist_ar[_s.id].redirectTarget));
			var o = _s.isAdd_bl;
			_s.isAdd_bl && (_s.isThumbClick_bl = !0, _s._d.openNewPageAtTheEndOfTheAds_bl && "none" != _s._d.adsPageToOpenURL_str && !e && ("_self" == _s._d.adsPageToOpenTarget_str ? location.href = _s._d.adsPageToOpenURL_str : window.open(_s._d.adsPageToOpenURL_str, _s._d.adsPageToOpenTarget_str)), _s.isAdd_bl = !1, _s.updateAds(0), _s.wasAdd_bl = !0, e && _s.videoType_str == FWDUVPlayer.VIDEO ? _s.play() : !_s.isMbl && _s.videoType_str != FWDUVPlayer.DASH && _s.videoType_str != FWDUVPlayer.VIMEO && _s.play()), o || (_s.lightBox_do && _s.lightBox_do.isShowed_bl && _s._d.closeLightBoxWhenPlayComplete && (_s.stop(), _s.lightBox_do.closeButtonOnStartHandler()), _s._d.loop_bl ? _s.videoType_str == FWDUVPlayer.HLS_JS || _s.videoType_str == FWDUVPlayer.DASH ? setTimeout(function() {
				_s.scrub(0), _s.resume()
			}, 50) : (_s.scrub(0), _s.play()) : _s._d.stopVideoWhenPlayComplete_bl || 1 == _s._d.playlist_ar.length || _s._d.stopAfterLastVideoHasPlayed_bl && _s._d.playlist_ar.length - 1 == _s.id ? _s.stop() : _s._d.shuffle_bl ? (_s.playShuffle(), _s.isMbl && _s.stop(), _s.videoType_str == FWDUVPlayer.DASH && _s.setSource(_s.source)) : (_s.playNext(), _s.isMbl && (_s.stop(), _s.videoType_str == FWDUVPlayer.DASH && _s.setSource(_s.source)))), _s.hider && _s.hider.reset(), _s.dispatchEvent(FWDUVPlayer.PLAY_COMPLETE)
		}, _s.setupAnnotations = function() {
			FWDUVPAnnotations.setPrototype(), _s.annotations_do = new FWDUVPAnnotations(_s, _s._d), _s.videoHolder_do.setBkColor = props.backgroundColor, _s.videoHolder_do.screen.className = "fwduvp-video-holder", _s.videoHolder_do.addChild(_s.annotations_do)
		}, _s.setupAdsStart = function() {
			FWDUVPAdsStart.setPrototype(), _s.adsStart_do = new FWDUVPAdsStart(_s._d.adsButtonsPosition_str, _s._d.adsBorderNormalColor_str, "", _s._d.adsBackgroundPath_str, _s._d.adsTextNormalColor), FWDUVPAdsButton.setPrototype(), _s.adsSkip_do = new FWDUVPAdsButton(_s, _s._d.skipIconPath_img, _s._d.skipIconSPath_str, _s._d.skipToVideoButtonText_str, _s._d.adsButtonsPosition_str, _s._d.adsBorderNormalColor_str, _s._d.adsBorderSelectedColor_str, _s._d.adsBackgroundPath_str, _s._d.adsTextNormalColor, _s._d.adsTextSelectedColor, _s._d.useHEX, _s._d.nBC, _s._d.sBC), _s.adsSkip_do.addListener(FWDUVPAdsButton.MOUSE_UP, _s.skipAdsMouseUpHandler), _s.videoHolder_do.addChild(_s.adsSkip_do), _s.videoHolder_do.addChild(_s.adsStart_do)
		}, _s.skipAdsMouseUpHandler = function() {
			_s.isThumbClick_bl = !0, _s.callVastEvent("skip"), _s.videoScreenPlayCompleteHandler(null, !0)
		}, _s.positionAds = function(e) {
			var t, o;
			t = "left" == _s._d.adsButtonsPosition_str ? 0 : _s.tempVidStageWidth, o = _s.controller_do ? _s.controller_do.isShowed_bl ? _s.tempVidStageHeight - _s.adsStart_do.h - _s._d.controllerHeight - 30 : _s.tempVidStageHeight - _s.adsStart_do.h - _s._d.controllerHeight : _s.tempVidStageHeight - _s.adsStart_do.h, FWDAnimation.killTweensOf(_s.adsStart_do), e ? FWDAnimation.to(_s.adsStart_do, .8, {
				y: o,
				ease: Expo.easeInOut
			}) : _s.adsStart_do.setY(o), _s.adsStart_do.setX(t);
			var s = !1;
			600 > _s.tempStageWidth && (s = !0), _s.adsSkip_do.resize(s), t = "left" == _s._d.adsButtonsPosition_str ? 0 : _s.tempVidStageWidth, o = _s.controller_do ? _s.controller_do.isShowed_bl ? _s.tempVidStageHeight - _s.adsSkip_do.h - _s._d.controllerHeight - 30 : _s.tempVidStageHeight - _s.adsSkip_do.h - _s._d.controllerHeight : _s.tempVidStageHeight - _s.adsSkip_do.h, FWDAnimation.killTweensOf(_s.adsSkip_do), e ? FWDAnimation.to(_s.adsSkip_do, .8, {
				y: o,
				ease: Expo.easeInOut
			}) : _s.adsSkip_do.setY(o), _s.adsSkip_do.setX(t)
		}, _s.setupShareWindow = function() {
			FWDUVPShareWindow.setPrototype(), _s.shareWindow_do = new FWDUVPShareWindow(_s._d, _s), _s.shareWindow_do.addListener(FWDUVPShareWindow.HIDE_COMPLETE, _s.shareWindowHideCompleteHandler)
		}, _s.shareWindowHideCompleteHandler = function() {
			_s.isVideoPlayingWhenOpenWindows_bl && _s.resume(), _s.controller_do && !_s.isMbl && (_s.controller_do.shareButton_do.isDisabled_bl = !1, _s.controller_do.shareButton_do.setNormalState(!0))
		}, _s.setupLoginWindow = function() {
			FWDUVPPassword.setPrototype(), _s.lg_do = new FWDUVPPassword(_s._d, _s, !0)
		}, _s.setupPasswordWindow = function() {
			FWDUVPPassword.setPrototype(), _s.passWindow_do = new FWDUVPPassword(_s._d, _s), _s.passWindow_do.addListener(FWDUVPPassword.CORRECT, _s.passordCorrect)
		}, _s.passordCorrect = function() {
			_s.passWindow_do.hide(), _s.hasPassedPassowrd_bl = !0, _s.play()
		}, _s.checkPassWindow = function() {
			return _s.isAdd_bl || !_s._d.playlist_ar[_s.id].isPrivate && !_s.playlistPass || _s.hasPassedPassowrd_bl || !_s.passWindow_do || _s.plPassPassed || (_s.lrgPlayBtn && _s.lrgPlayBtn.show(), _s.passWindow_do.show(), void _s.videoPoster_do.show())
		}, _s.setupEmbedWindow = function() {
			FWDUVPEmbedWindow.setPrototype(), _s.embedWindow_do = new FWDUVPEmbedWindow(_s._d, _s), _s.embedWindow_do.addListener(FWDUVPEmbedWindow.ERROR, _s.embedWindowErrorHandler), _s.embedWindow_do.addListener(FWDUVPEmbedWindow.HIDE_COMPLETE, _s.embedWindowHideCompleteHandler)
		}, _s.embedWindowErrorHandler = function(t) {
			_s.showSourceError(t.error)
		}, _s.embedWindowHideCompleteHandler = function() {
			_s.isVideoPlayingWhenOpenWindows_bl && _s.resume(), _s.controller_do && !_s.isMbl && (_s.controller_do.embedButton_do.isDisabled_bl = !1, _s.controller_do.embedButton_do.setNormalState(!0))
		}, _s.copyLinkButtonOnMouseOver = function() {
			_s.embedWindow_do.copyLinkButton_do.setSelectedState()
		}, _s.copyLinkButtonOnMouseOut = function() {
			_s.embedWindow_do.copyLinkButton_do.setNormalState()
		}, _s.getLinkCopyPath = function() {
			return _s.embedWindow_do.linkToVideo_str
		}, _s.embedkButtonOnMouseOver = function() {
			_s.embedWindow_do.copyEmbedButton_do.setSelectedState()
		}, _s.embedButtonOnMouseOut = function() {
			_s.embedWindow_do.copyEmbedButton_do.setNormalState()
		}, _s.getEmbedCopyPath = function() {
			return _s.embedWindow_do.finalEmbedCode_str
		}, _s.setInputs = function() {
			for (var e = document.querySelectorAll("input"), t = 0; t < e.length; t++) e[t].addEventListener("mousedown", _s.inputFocusInHandler), e[t].addEventListener("touchstart", _s.inputFocusInHandler);
			for (var o = document.querySelectorAll("textarea"), t = 0; t < o.length; t++) o[t].addEventListener("mousedown", _s.inputFocusInHandler), o[t].addEventListener("touchstart", _s.inputFocusInHandler)
		}, _s.inputFocusInHandler = function(t) {
			_s.curInput = t.target, setTimeout(function() {
				_s.hasPointerEvent_bl ? window.addEventListener("pointerdown", _s.inputFocusOutHandler) : window.addEventListener && (window.addEventListener("mousedown", _s.inputFocusOutHandler), window.addEventListener("touchstart", _s.inputFocusOutHandler)), FWDUVPlayer.isSearchedFocused_bl = !0
			}, 50)
		}, _s.inputFocusOutHandler = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			if (!FWDUVPUtils.hitTest(_s.curInput, e.screenX, e.screenY)) return _s.hasPointerEvent_bl ? window.removeEventListener("pointerdown", _s.inputFocusOutHandler) : window.removeEventListener && (window.removeEventListener("mousedown", _s.inputFocusOutHandler), window.removeEventListener("touchstart", _s.inputFocusOutHandler)), void(FWDUVPlayer.isSearchedFocused_bl = !1)
		}, _s.addKeyboardSupport = function() {
			_s.setInputs(), document.addEventListener("keydown", _s.onKeyDownHandler), document.addEventListener("keyup", _s.onKeyUpHandler)
		}, _s.onKeyDownHandler = function(t) {
			if ((!_s.isSpaceDown_bl && _s.hasStartedToPlay_bl && !FWDUVPlayer.isSearchedFocused_bl || _s.isCasting) && (_s == FWDUVPlayer.keyboardCurInstance || "pause" != FWDUVPlayer.videoStartBehaviour && "none" != FWDUVPlayer.videoStartBehaviour) && !(_s.embedWindow_do && _s.embedWindow_do.isShowed_bl)) {
				if (_s.isSpaceDown_bl = !0, t.preventDefault && t.preventDefault(), 32 == t.keyCode) {
					if (_s.stickOnCurrentInstanceKey_bl = !0, _s.isCasting) _s.cc.togglePlayPause();
					else if (_s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME) _s.isImageAdsPlaying_bl ? _s.stopUpdateImageInterval() : _s.startUpdateImageInterval();
					else if (_s.isIMA && _s.IMA.started) _s.IMA.togglePlayPause();
					else if (_s.videoType_str == FWDUVPlayer.YOUTUBE) {
						if (!_s.ytb_do.isSafeToBeControlled_bl) return;
						_s.ytb_do.togglePlayPause()
					} else if (_s.videoType_str == FWDUVPlayer.VIMEO) {
						if (!_s.vimeo_do.isSafeToBeControlled_bl) return;
						_s.vimeo_do.togglePlayPause()
					} else if (_s.videoType_str == FWDUVPlayer.MP3) {
						if (!_s.audioScreen_do.isSafeToBeControlled_bl) return;
						_s.audioScreen_do.togglePlayPause()
					} else if (FWDUVPlayer.hasHTML5Video) {
						if (!_s.videoScreen_do.isSafeToBeControlled_bl) return;
						_s.videoScreen_do && _s.videoScreen_do.togglePlayPause()
					}
					return t.preventDefault && t.preventDefault(), !1
				}
				if (70 == t.keyCode) _s.isFullScreen_bl ? _s.goNormalScreen() : _s.goFullScreen();
				else if (77 == t.keyCode) 0 != _s.volume && (_s.lastVolume = _s.volume), _s.volume = 0 == _s.volume ? _s.lastVolume : 0, _s.setVolume(_s.volume);
				else if (38 == t.keyCode) _s.volume += .1, 1 < _s.volume && (_s.volume = 1), _s.setVolume(_s.volume);
				else if (40 == t.keyCode) _s.volume -= .1, 0 > _s.volume && (_s.volume = 0), _s.setVolume(_s.volume);
				else if (77 == t.keyCode) 0 > _s.volume && (_s.volume = 0), _s.setVolume(_s.volume);
				else if (39 == t.keyCode && !_s.isAdd_bl && !_s.isIMA) {
					var e = _s.getCurrentTime();
					5 == e.length && (e = "00:" + e), 7 == e.length && (e = "0" + e), e = FWDUVPUtils.getSecondsFromString(e), e += 5, e = FWDUVPUtils.formatTime(e), 5 == e.length && (e = "00:" + e), 7 == e.length && (e = "0" + e), _s.scrubbAtTime(e)
				} else if (37 == t.keyCode && !_s.isAdd_bl && !_s.isIMA) {
					var e = _s.getCurrentTime();
					5 == e.length && (e = "00:" + e), 7 == e.length && (e = "0" + e), e = FWDUVPUtils.getSecondsFromString(e), e -= 5, e = FWDUVPUtils.formatTime(e), 5 == e.length && (e = "00:" + e), 7 == e.length && (e = "0" + e), _s.scrubbAtTime(e)
				}
			}
		}, _s.onKeyUpHandler = function() {
			_s.isSpaceDown_bl = !1
		}, _s.setupAopw = function() {
			FWDUVPOPWindow.setPrototype(), _s.popw_do = new FWDUVPOPWindow(_s._d, _s)
		}, _s.setupHider = function() {
			FWDUVPHider.setPrototype(), _s.hider = new FWDUVPHider(_s.main_do, _s.controller_do, _s._d.controllerHideDelay), _s.hider.addListener(FWDUVPHider.SHOW, _s.hiderShowHandler), _s.hider.addListener(FWDUVPHider.HIDE, _s.hiderHideHandler), _s.hider.addListener(FWDUVPHider.HIDE_COMPLETE, _s.hiderHideCompleteHandler)
		}, _s.hiderShowHandler = function() {
			_s.controller_do && _s.isPlaying_bl && _s.controller_do.show(!0), _s.logo_do && _s._d.hideLogoWithController_bl && _s.isPlaying_bl && _s.logo_do.show(!0), _s.showCursor(), _s.isAdd_bl && (_s.positionAds(!0), _s.adsStart_do.showWithOpacity(), _s.adsSkip_do.showWithOpacity()), _s.subtitle_do && _s.subtitle_do.position(!0), _s.popupAds_do && _s.popupAds_do.position(!0)
		}, _s.hiderHideHandler = function() {
			return _s.controller_do.volumeScrubber_do && _s.controller_do.isVolumeScrubberShowed_bl ? void _s.hider.reset() : _s.controller_do.atb && _s.controller_do.atb.isShowed_bl && FWDUVPUtils.hitTest(_s.controller_do.atb.mainHld.screen, _s.hider.globalX, _s.hider.globalY) ? void _s.hider.reset() : _s._d.showYoutubeQualityButton_bl && FWDUVPUtils.hitTest(_s.controller_do.ytbButtonsHolder_do.screen, _s.hider.globalX, _s.hider.globalY) ? void _s.hider.reset() : _s._d.showPlaybackRateButton_bl && _s.controller_do && FWDUVPUtils.hitTest(_s.controller_do.playbackRatesButtonsHolder_do.screen, _s.hider.globalX, _s.hider.globalY) ? void _s.hider.reset() : _s._d.showAudioTracksButton_bl && _s.controller_do && FWDUVPUtils.hitTest(_s.controller_do.ATBButtonsHolder_do.screen, _s.hider.globalX, _s.hider.globalY) ? void _s.hider.reset() : _s.controller_do && _s._d.showSubBtn && FWDUVPUtils.hitTest(_s.controller_do.subtitlesButtonsHolder_do.screen, _s.hider.globalX, _s.hider.globalY) ? void _s.hider.reset() : FWDUVPUtils.hitTest(_s.controller_do.screen, _s.hider.globalX, _s.hider.globalY) ? void _s.hider.reset() : FWDUVPUtils.hitTest(_s.controller_do.mainScrubber_do.screen, _s.hider.globalX, _s.hider.globalY) ? void _s.hider.reset() : void((_s._d.showDefaultControllerForVimeo_bl || _s.videoType_str != FWDUVPlayer.VIMEO) && _s.controller_do.hide(!0), _s.logo_do && _s._d.hideLogoWithController_bl && _s.logo_do.hide(!0), _s.isFullScreen_bl && _s.hideCursor(), _s.isAdd_bl && (_s.positionAds(!0), _s.adsStart_do.hideWithOpacity(), _s.adsSkip_do.hideWithOpacity()), _s.subtitle_do.position(!0), _s.popupAds_do && _s.popupAds_do.position(!0))
		}, _s.hiderHideCompleteHandler = function() {
			_s.controller_do.positionScrollBarOnTopOfTheController()
		}, _s.play = function() {
			if (_s.isAPIReady_bl) {
				if (_s.isCasting) return void _s.cc.play();
				if (!_s.isMbl || _s.videoType_str != FWDUVPlayer.YOUTUBE || !_s.ytb_do || _s.ytb_do.isSafeToBeControlled_bl || _s._d.autoPlay_bl) {
					if (_s.videoType_str == FWDUVPlayer.HLS_JS && 0 <= location.protocol.indexOf("file:")) return void _s.showSourceError("HLS m3u8 videos can't be played local on _s browser, please test it online!.");
					var e = _s.checkPassWindow();
					if (e) {
						if (_s.hasPassedPassowrd_bl = !0, _s._d.playIfLoggedIn || _s._d.playlist_ar[_s.id].playIfLoggedIn) return _s.lg_do.show(), void _s.videoPoster_do.show();
						if (_s.isMbl ? FWDUVPlayer.stopAllVideos(_s) : FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.PAUSE_ALL_VIDEOS ? FWDUVPlayer.pauseAllVideos(_s) : FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.STOP_ALL_VIDEOS && FWDUVPlayer.stopAllVideos(_s), _s.isIMA) {
							if (_s.isIMA && _s.IMA && !_s.IMA.isReady) return;
							_s.IMA.play()
						} else _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.startUpdateImageInterval() : _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.ytb_do && _s.ytb_do.play() : _s.videoType_str == FWDUVPlayer.MP3 ? (_s.audioScreen_do && _s.audioScreen_do.play(), FWDUVPUtils.isLocal || _s.audioScreen_do.setupSpectrum()) : _s.videoType_str == FWDUVPlayer.VIMEO ? _s.vimeo_do && _s.vimeo_do.play() : FWDUVPlayer.hasHTML5Video && (_s.videoType_str != FWDUVPlayer.HLS_JS || _s.isHLSManifestReady_bl ? _s.videoType_str != FWDUVPlayer.DASH || _s.isDASHManifestReady_bl ? _s.videoScreen_do.play() : (_s.videoScreen_do.initVideo(), window.dashjs && (_s.setupDASH(), _s.dashJS.initialize(_s.videoScreen_do.video_el, _s.videoSourcePath_str, !1), _s.dashJS.attachSource(_s.videoSourcePath_str), _s.dashJS.on(dashjs.MediaPlayer.events.MANIFEST_LOADED, function() {
							_s.isDASHManifestReady_bl = !0, _s.videoType_str == FWDUVPlayer.DASH && setTimeout(_s.play, 100)
						}))) : (_s.videoScreen_do.initVideo(), window.Hls && (_s.setupHLS(), _s.hlsJS.loadSource(_s.videoSourcePath_str), _s.hlsJS.attachMedia(_s.videoScreen_do.video_el), _s.hlsJS.on(Hls.Events.MANIFEST_PARSED, function() {
							_s.isHLSManifestReady_bl = !0, _s.videoType_str == FWDUVPlayer.HLS_JS && (_s.play(), _s.parseLevels())
						}))));
						_s.lrgPlayBtn.hide(), _s.videoPoster_do.hide()
					}
				}
			}
		}, _s.pause = function() {
			return _s.isAPIReady_bl ? _s.isCasting ? void _s.cc.pause() : void(_s.isIMA ? _s.IMA.pause() : _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.stopUpdateImageInterval() : _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.ytb_do.pause() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.pause() : _s.videoType_str == FWDUVPlayer.VIMEO ? _s.vimeo_do.pause() : FWDUVPlayer.hasHTML5Video && _s.videoScreen_do && _s.videoScreen_do.pause()) : void 0
		}, _s.resume = function() {
			_s.isAPIReady_bl && (_s.isCasting ? _s.cc.play() : _s.isIMA && _s.IMA.started ? _s.IMA.play() : _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.startUpdateImageInterval() : _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do ? _s.ytb_do.resume() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.resume() : _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do ? _s.vimeo_do.resume() : FWDUVPlayer.hasHTML5Video && _s.videoScreen_do && _s.videoScreen_do.resume())
		}, _s.sendPlayEvent = function() {}, _s.sendGAPlayedEvent = function() {
			if (!isNaN(_s.totalPercentPlayed) && window.ga && Math.round(100 * _s.totalPercentPlayed)) {
				var e = "videoName:" + _s.videoNameGa + ", percentPlayed:" + Math.round(100 * _s.totalPercentPlayed) + ", stoppedAtTime:" + _s.getCurrentTime() + ", fullScreen:" + _s.isFullScreen_bl + "";
				ga("send", {
					hitType: "event",
					eventCategory: _s.videoCat,
					eventAction: "played",
					eventLabel: e,
					nonInteraction: !0
				}), _s.totalTimePlayed = 0, _s.totalPercentPlayed = 0
			}
		}, _s.stop = function(e) {
			!_s.isAPIReady_bl || _s.isStopped_bl || (_s.sendGAPlayedEvent(), _s.isCasting && _s.cc.stop(), _s.IMA && _s.IMA.stop(), FWDUVPPassword.isCorect = !0, _s.totalTimePlayed = 0, _s.totalDuration = 0, _s.isIMA = void 0, _s.hlsLevels_ar = null, _s.hasPassedPassowrd_bl = !1, _s.isHLSManifestReady_bl = !1, _s.isDASHManifestReady_bl = !1, clearInterval(_s.tryHLS_int), clearInterval(_s.checkIfYoutubePlayerIsReadyId_int), clearInterval(_s.keepCheckingYoutubeAPI_int), _s.hideAPT(), _s.destroyDASH(), _s.destroyHLS(), _s._d.closeVast(), _s.fps && _s.fps.stop(), _s.isPlaying_bl = !1, _s.customContextMenu_do && _s.customContextMenu_do.disable(), _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.stopUpdateImageInterval() : _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do ? _s.ytb_do.stop() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.stop() : _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do ? _s.vimeo_do.stop() : FWDUVPlayer.hasHTML5Video && _s.videoScreen_do.stop(), clearTimeout(_s.playVimeoWhenLoadedId_to), _s.popw_do && _s.popw_do.hide(), _s._d.playlist_ar[_s.id] && (_s.posterPath_str = _s._d.playlist_ar[_s.id].posterSource), _s.isMbl ? (_s._d.showControllerWhenVideoIsStopped_bl && _s.controller_do && _s.controller_do.show(!0), e || _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.useYoutube_bl && _s.ytb_do && !_s.ytb_do.ytb && _s.ytb_do.setupVideo() : (_s.videoPoster_do.show(), _s.lrgPlayBtn.show())) : !_s.isThumbClick_bl && (_s.controller_do && _s._d.showControllerWhenVideoIsStopped_bl && _s.controller_do.show(!0), _s.videoPoster_do && _s.videoPoster_do.show(), _s.lrgPlayBtn && _s.lrgPlayBtn.show()), _s.controller_do && (_s.controller_do.atb && _s.controller_do.atb.hide(!0), _s.controller_do.subtitleButton_do && (_s.controller_do.disableSubtitleButton(), _s.subtitle_do && (_s.subtitle_do.showSubByDflt ? _s.controller_do.subtitleButton_do.setButtonState(0) : _s.controller_do.subtitleButton_do.setButtonState(1))), _s.controller_do.thumbnailsPreview_do && _s.controller_do.thumbnailsPreview_do.remove(), _s.controller_do.atbButton_do && (_s.controller_do.atbButton_do.doNotallowToSetNormal = !1, _s.controller_do.atbButton_do.isSelected = !1, _s.controller_do.atbButton_do.setNormalState()), _s.controller_do.disableAtbButton(), _s.controller_do.ttm && _s.controller_do.ttm.hide(), _s.controller_do.ytbQualityButton_do && _s.controller_do.ytbQualityButton_do.disable(), _s.controller_do.playbackRateButton_do && _s.controller_do.playbackRateButton_do.disable(), _s.controller_do && _s.controller_do.rewindButton_do && _s.controller_do.rewindButton_do.disable()), _s.popupAds_do && _s.popupAds_do.hideAllPopupButtons(!1), _s.hasHlsPlayedOnce_bl = !1, _s.isSafeToScrub_bl = !1, _s.hlsState = void 0, _s.changeHLS_bl = !1, _s.totalDuration = 0, _s.hasStartedToPlay_bl = !1, _s.controller_do && (_s.controller_do.disablePlaybackRateButton(), _s.controller_do.disableAtButton()), _s.subtitle_do && _s.subtitle_do.hide(), _s.annotations_do && _s.annotations_do.update(-1), _s.hider && _s.hider.reset(), _s.showCursor(), _s.adsStart_do && _s.adsStart_do.hide(!0), _s.adsSkip_do && _s.adsSkip_do.hide(!0), _s.controller_do && _s.controller_do.hideAdsLines(), _s.stopVisualization(), _s.isStopped_bl = !1)
		}, _s.startToScrub = function() {
			_s.isAPIReady_bl && (_s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isSafeToBeControlled_bl ? _s.ytb_do.startToScrub() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.startToScrub() : _s.videoScreen_do && _s.videoScreen_do.startToScrub())
		}, _s.stopToScrub = function() {
			_s.isAPIReady_bl && (_s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isSafeToBeControlled_bl ? _s.ytb_do.stopToScrub() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.stopToScrub() : _s.videoScreen_do && _s.videoScreen_do.stopToScrub())
		}, _s.scrubbAtTime = function(e) {
			_s.isAPIReady_bl && e && (-1 != (e + "").indexOf(":") && (e = FWDUVPUtils.getSecondsFromString(e)), _s.isCasting ? _s.cc.scrubbAtTime(e) : _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isSafeToBeControlled_bl ? _s.ytb_do.scrubbAtTime(e) : _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do ? _s.vimeo_do.scrubbAtTime(e) : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.scrubbAtTime(e) : FWDUVPlayer.hasHTML5Video && _s.videoScreen_do && _s.videoScreen_do.scrubbAtTime(e))
		}, _s.scrub = function(e) {
			!_s.isAPIReady_bl || isNaN(e) || (0 > e ? e = 0 : 1 < e && (e = 1), _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isSafeToBeControlled_bl ? _s.ytb_do.scrub(e) : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.scrub(e) : _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do && _s.vimeo_do.isSafeToBeControlled_bl ? _s.vimeo_do.scrub(e) : _s.videoScreen_do && _s.videoScreen_do.scrub(e))
		}, _s.setVolume = function(e, t) {
			_s.isAPIReady_bl && (_s.volume = e, e && t && (_s._d.autoPlay_bl = !1, _s.removeAPT()), _s.controller_do && _s.controller_do.updateVolume(e, !0), _s.isIMA && _s.IMA.setVolume(e), _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.setVolume(e), _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do && _s.vimeo_do.setVolume(e), _s.audioScreen_do && _s.audioScreen_do.setVolume(e), FWDUVPlayer.hasHTML5Video && _s.videoScreen_do && _s.videoScreen_do.setVolume(e), _s.isCasting && _s.cc.setVolume(), _s.dispatchEvent(FWDUVPlayer.VOLUME_SET, {
				volume: e
			}))
		}, _s.showCategories = function() {
			_s.isAPIReady_bl && (_s.setVideoPlayingStateOnWindowShow(), _s.categories_do && (_s.categories_do.show(_s.catId), _s.controller_do && _s.controller_do.setCategoriesButtonState("selected"), _s.pause()))
		}, _s.hideCategories = function() {
			!_s.isAPIReady_bl || _s.categories_do && (_s.categories_do.hide(), _s.controller_do && _s.controller_do.setCategoriesButtonState("unselected"))
		}, _s.showPlaylist = function() {
			_s.isAPIReady_bl && _s.showPlaylistButtonAndPlaylist_bl && (_s.isPlaylistShowed_bl = !1, _s.controller_do && _s.controller_do.showHidePlaylistButton(), _s.playlist_do.hide(_s.animate_bl), "right" == _s.playlistPosition_str && _s.resizeHandler(!_s.isMbl), _s.sH = _s.vidStageHeight, _s.setStageContainerFinalHeightAndPosition(_s.animate_bl), FWDAnimation.to(_s, .8, {
				tempStageWidth: _s.sW,
				tempStageHeight: _s.sH,
				tempVidStageWidth: _s.vidStageWidth,
				tempVidStageHeight: _s.vidStageHeight,
				ease: Expo.easeInOut,
				onUpdate: _s.resizeFinal
			}))
		}, _s.hidePlaylist = function(e) {
			_s.isAPIReady_bl && _s.showPlaylistButtonAndPlaylist_bl && (_s.isPlaylistShowed_bl = !0, _s.controller_do && _s.controller_do.showShowPlaylistButton(), e ? _s.playlist_do.show(!1) : _s.playlist_do.show(_s.animate_bl), _s.resizeHandler(_s.animate_bl), _s.setStageContainerFinalHeightAndPosition(_s.animate_bl), FWDAnimation.to(_s, .8, {
				tempStageWidth: _s.sW,
				tempStageHeight: _s.sH,
				tempVidStageWidth: _s.vidStageWidth,
				tempVidStageHeight: _s.vidStageHeight,
				ease: Expo.easeInOut,
				onUpdate: _s.resizeFinal
			}))
		}, _s.setPosterSource = function(e) {
			if (_s.isAPIReady_bl && e && "none" != _s.videoType_str) {
				var t = e.split(",");
				e = _s.isMbl && null != t[1] ? t[1] : t[0], _s.videoPoster_do && (_s.posterPath_str = e, -1 == _s.videoSourcePath_str.indexOf(".") && _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.isMbl ? (_s.posterPath_str = "youtubemobile", _s.videoPoster_do.setPoster(_s.posterPath_str)) : (_s.videoPoster_do.setPoster(_s.posterPath_str), _s.prUVPosterSource_str != e && _s.dispatchEvent(FWDUVPlayer.UPDATE_POSTER_SOURCE)), _s.prUVPosterSource_str = e)
			}
		}, _s.setThumbnailPreviewSource = function(e) {
			if (_s.isAPIReady_bl && !FWDUVPUtils.isLocal && _s.controller_do) {
				if (!_s.thumbnailsPreviewLoaded_bl) {
					var t = document.createElement("script");
					return t.src = _s.mainFolderPath_str + "java/FWDUVPThumbnailsPreview.js", document.head.appendChild(t), void(t.onload = function() {
						_s.thumbnailsPreviewLoaded_bl = !0, _s.setThumbnailPreviewSource(e)
					})
				}
				_s.hasThumbnailsPreview = !0, _s.controller_do.setupThumbnailsPreview(), _s.controller_do.thumbnailsPreview_do.load(e)
			}
		}, _s.updateAds = function(e, t) {
			if (_s._d.vastXML && !_s._d.isVastXMLParsed_bl) return _s.controller_do && (_s.controller_do.hideAdsLines(), _s.controller_do.resetsAdsLines()), void _s._d.setVastSource(_s._d.vastXML);
			if (_s._d.playlist_ar[_s.id]) {
				_s.curAddData = _s._d.playlist_ar[_s.id].ads_ar, _s.curPopupAdsData = _s._d.playlist_ar[_s.id].popupAds_ar;
				var o = _s.curPopupAdsData && 0 < _s.curPopupAdsData.length;
				if (_s.adsId != _s.id && (_s.popupAds_do && _s.popupAds_do.hideAllPopupButtons(!0), _s.controller_do && _s.controller_do.resetsAdsLines()), _s._d.playlist_ar[_s.id].vastURL && !_s.curAddData) return _s.adsId != _s.id && _s._d.setVastSource(_s._d.playlist_ar[_s.id].vastURL, _s._d.playlist_ar[_s.id].vastLinearStartTime), void(_s.adsId = _s.id);
				if (_s.adsId = _s.id, _s.isAdd_bl || (_s.TrackingEvents = void 0, _s.Impression = void 0, _s.ClickTracking = void 0, _s.curAddData && (_s.callFirstQuartile = !0, _s.callMidpoint = !0, _s.callThirdQuartile = !0)), !!_s.isAdd_bl) _s.curSource = _s.isAdd_bl ? "FWDUVPDummy" + new Date().getTime() : _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source;
				else if (_s.controller_do && _s.totalDuration && (_s._d.fixVmapTimes(_s.totalDuration, _s.curAddData, _s.curPopupAdsData, _s.id), _s.controller_do.setupAdsLines(_s.curAddData, _s.id, _s.catId), _s.totalDuration && _s.controller_do.positionAdsLines(_s.totalDuration), o && (_s.popupAds_do.resetPopups(_s.curPopupAdsData, _s.id), _s.popupAds_do.id = _s.id)), _s.curSource = _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source, _s.curAddData)
					for (var s = 0; s < _s.curAddData.length; s++)
						if (e >= _s.curAddData[s].timeStart && e <= _s.curAddData[s].timeStart + 1 && !_s.curAddData[s].played_bl && e != _s.prevDuration) return _s.addId = s, 0 == _s.curAddData[s].timeStart ? (t = !1, _s.addStartAtZero = !0) : _s.addStartAtZero = !1, _s.isAdd_bl = !0, _s.addSource_str = _s.curAddData[s].source, _s.curAddData[_s.addId].played_bl = !0, _s.adDuation = e, _s._d.adsThumbnailPath_str = _s.curAddData[s].thumbnailSource, _s._d.timeToHoldAds = _s.curAddData[s].timeToHoldAds, _s._d.adsPageToOpenURL_str = _s.curAddData[s].link, _s._d.adsPageToOpenTarget_str = _s.curAddData[s].target, _s.TrackingEvents = _s.curAddData[s].TrackingEvents, _s.Impression = _s.curAddData[s].Impression, _s.ClickTracking = _s.curAddData[s].ClickTracking, _s.scrubAfterAddDuration = _s.curAddData[s].timeStart, _s.curImageTotalTime = _s.curAddData[s].addDuration, _s.setSource(_s.addSource_str), _s.controller_do && _s.controller_do.line_ar && _s.controller_do.line_ar[s].setVisible(!1), void(_s.prvAdSource = _s.addSource_str);
				_s.isLive = _s._d.playlist_ar[_s.id].isLive, (!_s.isAdd_bl && _s.prevSource != _s.curSource && -1 == _s.curSource.indexOf("FWDUVPDummy") || t) && (t && (_s.isAdd_bl = !1, _s.curSource = _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source), _s.setSource(_s.curSource, !1, _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].is360)), _s.controller_do && _s.controller_do.positionAdsLines(_s.curDuration), _s.prevDuration = e, _s.prevSource = _s.curSource
			}
		}, _s.updateImageScreen = function(e) {
			return _s.videoType_str == FWDUVPlayer.IFRAME ? (_s.ifr_do || (_s.ifr_do = new FWDUVPDisplayObject("iframe"), _s.ifr_do.hasTransform3d_bl = !1, _s.ifr_do.hasTransform2d_bl = !1, _s.ifr_do.setBackfaceVisibility()), _s.videoHolder_do.addChildAt(_s.ifr_do, _s.videoHolder_do.getChildIndex(_s.dClk_do) + 1), _s.showClickScreen(), _s.ifr_do.screen.src = e, _s.ifr_do.setBkColor("#000000"), _s.positionAdsImage(), void _s.startToUpdateAdsButton()) : void(!_s.imgH_do && (_s.imgH_do = new FWDUVPDisplayObject("div"), _s.imgH_do.setX(0), _s.imgH_do.setY(0), _s.imgH_do.setBkColor("#000000")), _s.videoHolder_do.addChildAt(_s.imgH_do, _s.videoHolder_do.getChildIndex(_s.dClk_do) - 1), _s.showClickScreen(), _s.imgH_do.contains(_s.imageScreen_do) && _s.imgH_do.removeChild(_s.imageScreen_do), _s.imageScreen_do = null, _s.imageScreen_do = new FWDUVPDisplayObject("img"), _s.imageAdd_img = new Image, _s.imageAdd_img.src = e, _s.preloader_do && _s.preloader_do.show(!1), _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), _s.imageAdd_img.onload = function() {
				_s.imageScreen_do.setScreen(_s.imageAdd_img), _s.imageScreen_do.setAlpha(0), FWDAnimation.to(_s.imageScreen_do, 1, {
					alpha: 1
				}), _s.imageAddOriginalWidth = _s.imageAdd_img.width, _s.imageAddOriginalHeight = _s.imageAdd_img.height, _s.preloader_do && _s.preloader_do.hide(), _s.imgH_do.addChild(_s.imageScreen_do), _s.positionAdsImage(), _s.startToUpdateAdsButton()
			}, _s.imageAdd_img.onerror = function() {
				_s.showSourceError("Advertisment image with path " + e + " can't be found")
			})
		}, _s.positionAdsImage = function() {
			if (_s.videoType_str == FWDUVPlayer.IFRAME && _s.ifr_do && (_s.ifr_do.setWidth(_s.tempVidStageWidth), _s.ifr_do.setHeight(_s.tempVidStageHeight)), _s.imageScreen_do && _s.videoType_str == FWDUVPlayer.IMAGE) {
				var e = _s.tempVidStageWidth / _s.imageAddOriginalWidth,
					t = _s.tempVidStageHeight / _s.imageAddOriginalHeight,
					o = 0;
				e >= t ? o = e : e <= t && (o = t);
				var s = parseInt(_s.imageAddOriginalWidth * o),
					n = parseInt(_s.imageAddOriginalHeight * o),
					i = parseInt((_s.tempVidStageWidth - s) / 2),
					a = parseInt((_s.tempVidStageHeight - n) / 2);
				_s.imageScreen_do.setWidth(s), _s.imageScreen_do.setHeight(n), _s.imageScreen_do.setX(i), _s.imageScreen_do.setY(a), _s.imgH_do.setWidth(_s.tempVidStageWidth), _s.imgH_do.setHeight(_s.tempVidStageHeight)
			}
		}, _s.startToUpdateAdsButton = function() {
			_s.curImageTime = 0, _s.updateAdsButton(), _s.stopUpdateImageInterval(), (_s._d.autoPlay_bl || _s.adDuation || _s.isThumbClick_bl) && (_s.startUpdateImageInterval(), _s.setPlayAndPauseButtonState())
		}, _s.stopUpdateImageInterval = function() {
			_s.isImageAdsPlaying_bl = !1, clearInterval(_s.startUpdateAdsId_int), _s.setPlayAndPauseButtonState(), _s.isPlaying_bl = !1, _s.hider.stop()
		}, _s.startUpdateImageInterval = function() {
			_s.isImageAdsPlaying_bl = !0, _s.startUpdateAdsId_int = setInterval(_s.updateAdsButton, 1e3), _s.setPlayAndPauseButtonState(), _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), _s.isPlaying_bl = !0, _s.hider.start()
		}, _s.updateAdsButton = function() {
			_s.videoScreenUpdateTimeHandler({
				curTime: FWDUVPUtils.formatTime(_s.curImageTime),
				totalTime: FWDUVPUtils.formatTime(_s.curImageTotalTime),
				seconds: _s.curImageTime
			}), _s.videoScreenUpdateHandler({
				percent: _s.curImageTime / _s.curImageTotalTime
			}), _s.curImageTime == _s.curImageTotalTime && _s.videoScreenPlayCompleteHandler(), _s.curImageTime += 1
		}, _s.setPlayAndPauseButtonState = function() {
			_s.isImageAdsPlaying_bl ? _s.controller_do && _s.controller_do.showPauseButton() : _s.controller_do && _s.controller_do.showPlayButton()
		}, _s.showSourceError = function(e) {
			_s.main_do.addChild(_s.info_do), _s.info_do.showText(e), _s.preloader_do && _s.preloader_do.hide(), _s.resizeHandler()
		}, _s.setSource = function(e, t, o) {
			if (e && (_s.source = e), _s._d.playlist_ar && _s._d.playlist_ar[_s.id] && !_s._d.playlist_ar[_s.id].playIfLoggedIn && _s.lg_do && _s.lg_do.hide(), _s.is360 = o, _s._d.playlist_ar && _s._d.playlist_ar[_s.id].thumbnailsPreview && (-1 != location.protocol.indexOf("file:") && setTimeout(function() {
					_s.showSourceError("This browser doesn't allow thumbnails preview videos local, please test online.")
				}, 50), 2 < _s._d.playlist_ar[_s.id].thumbnailsPreview.length && -1 == location.protocol.indexOf("file:") && !_s.thumbnailsPreviewLoaded_bl)) {
				var s = document.createElement("script");
				return s.src = _s.mainFolderPath_str + "java/FWDUVPThumbnailsPreview.js", document.head.appendChild(s), s.onerror = function() {
					_s.main_do.addChild(_s.info_do), _s.showSourceError("The thumbnails preview javascript file named <font color=\"#FF0000\">FWDUVPThumbnailsPreview.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color=\"#FF0000\">FWDUVPThumbnailsPreview.js</font> file.")
				}, void(s.onload = function() {
					_s.thumbnailsPreviewLoaded_bl = !0, _s.setSource(_s.source, !1, _s.is360)
				})
			}
			if ((_s.hasThumbnailsPreview = !1, _s._d.playlist_ar[_s.id].thumbnailsPreview && 2 < _s._d.playlist_ar[_s.id].thumbnailsPreview.length && (_s.hasThumbnailsPreview = !0, _s.controller_do && _s.controller_do.setupThumbnailsPreview()), _s.isAPIReady_bl && -1 != _s.id) && (0 > _s.id ? _s.id = 0 : _s.id > _s.totaadsIdeos - 1 && (_s.id = _s.totaadsIdeos - 1), null != _s._d.playlist_ar[_s.id])) {
				if (_s.stop(e), _s.isThumbClick_bl && !_s.aptRemoved && (_s._d.autoPlay_bl = !1, _s.removeAPT(), _s.setVolume(_s._d.volume, !0)), _s.controller_do && _s.controller_do.setIsLive(_s.isLive), _s.cuePointsSource_ar = _s._d.playlist_ar[_s.id].cuepoints_ar, _s.playlist_do && _s.playlist_do.curId != _s.id) {
					if (_s.prvAdSource = 999999999 * Math.random(), !_s._d.playAdsOnlyOnce_bl)
						for (var n = 0; n < _s._d.playlist_ar.length; n++) {
							if (_s._d.playlist_ar[n].ads_ar)
								for (var a = 0; a < _s._d.playlist_ar[n].ads_ar.length; a++) _s._d.playlist_ar[n].ads_ar[a].played_bl = !1;
							if (_s._d.playlist_ar[n].popupAds_ar)
								for (var a = 0; a < _s._d.playlist_ar[n].popupAds_ar.length; a++) _s._d.playlist_ar[n].popupAds_ar[a].isClsd = !1
						}
					if (!_s._d.executeCuepointsOnlyOnce_bl && _s.cuePointsSource_ar)
						for (var n = 0; n < _s.cuePointsSource_ar.length; n++) _s.cuePointsSource_ar[n].played_bl = !1
				} - 1 != e.toLowerCase().indexOf("vimeo.com") && -1 == e.toLowerCase().indexOf(".m3u8") && -1 == e.toLowerCase().indexOf(".mp4") ? _s.videoType_str = FWDUVPlayer.VIMEO : -1 == e.toLowerCase().indexOf("youtube.") ? -1 == e.toLowerCase().indexOf(".mp3") ? -1 != e.toLowerCase().indexOf(".jpg") || -1 != e.toLowerCase().indexOf(".jpeg") || -1 != e.toLowerCase().indexOf(".png") ? (_s.videoType_str = FWDUVPlayer.IMAGE, _s.controller_do && _s.controller_do.setX(0)) : e.match(/\.mpd|\.m3u8|\.mp4|\.mov|google.com|lh3.|myqnapcloud/ig) ? (_s.controller_do && _s.controller_do.setX(0), _s.videoType_str = FWDUVPlayer.hasHTMLHLS || -1 == e.toLowerCase().indexOf(".m3u8") ? -1 == e.toLowerCase().indexOf(".mpd") ? FWDUVPlayer.VIDEO : FWDUVPlayer.DASH : FWDUVPlayer.HLS_JS) : (_s.videoType_str = FWDUVPlayer.IFRAME, _s.controller_do && _s.controller_do.setX(0)) : (_s.videoType_str = FWDUVPlayer.MP3, _s.controller_do && _s.controller_do.setX(0)) : _s.videoType_str = FWDUVPlayer.YOUTUBE, _s.videoSourcePath_str = e, _s.finalVideoPath_str = e, _s.posterPath_str = _s._d.playlist_ar[_s.id].posterSource;
				var d = _s._d.playlist_ar[_s.id].imaURL;
				if ((_s.videoType_str != FWDUVPlayer.VIDEO || _s.errorImaSDK) && (d = !1), d) {
					if (_s.isIMA = d, !_s._d.imaReady) return void _s._d.startToLoadIMA();
					_s.IMA || (FWDUVPIMA.setPrototype(), _s.IMA = new FWDUVPIMA(_s))
				}
				if (_s.IMA || (_s.isIMA = !1), _s.cc && _s.cc.checkButtonState(), -1 != e.indexOf(".mpd") && !_s.isDASHLoaded_bl && !FWDUVPlayer.isDASHLoaded_bl) {
					if (-1 != location.protocol.indexOf("file:")) return void _s.showSourceError("This browser doesn't allow playing MPEG DASH videos local, please test online.");
					var s = document.createElement("script");
					return s.src = _s._d.dashPath_str, document.head.appendChild(s), s.onerror = function() {
						_s.showSourceError("Error loading MPEG DASH library <font color='#FF0000'>" + _s._d.dashPath_str + "</font>.")
					}, s.onload = function() {
						_s.isDASHLoaded_bl = !0, FWDUVPlayer.isDASHLoaded_bl = !0, _s.setupDASH(), _s.setSource(e, !1, _s.is360)
					}, _s.isMbl && (_s.isThumbClick_bl = !1), void(_s._d.autoPlay_bl || _s.isThumbClick_bl || (_s.setPosterSource(_s.posterPath_str), _s.videoPoster_do && _s.videoPoster_do.show(), _s.lrgPlayBtn && _s.lrgPlayBtn.show()))
				}
				if (!FWDUVPlayer.hasHTMLHLS && -1 != e.indexOf(".m3u8") && !_s.isHLSJsLoaded_bl && !FWDUVPlayer.isHLSJsLoaded_bl) {
					if (-1 != location.protocol.indexOf("file:")) return void _s.showSourceError("This browser doesn't allow playing HLS videos local, please test online.");
					var s = document.createElement("script");
					return s.src = _s._d.hlsPath_str, document.head.appendChild(s), s.onerror = function() {
						return 3, void _s.showSourceError("Error loading HLS library <font color='#FF0000'>" + _s._d.hlsPath_str + "</font>.")
					}, s.onload = function() {
						_s.isHLSJsLoaded_bl = !0, FWDUVPlayer.isHLSJsLoaded_bl = !0, _s.setupHLS(), _s.setSource(e, !1, _s.is360)
					}, void(_s._d.autoPlay_bl || _s.isThumbClick_bl || (_s.setPosterSource(_s.posterPath_str), _s.videoPoster_do && _s.videoPoster_do.show(), _s.lrgPlayBtn && _s.lrgPlayBtn.show()))
				}
				if (-1 != e.indexOf("youtube.") && !_s.ytb_do) return (setTimeout(function() {
					_s.showPreloader_bl && (_s.main_do.addChild(_s.preloader_do), _s.preloader_do && _s.preloader_do.show(!1), _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), -1 != location.protocol.indexOf("file:") && FWDUVPUtils.isIE && _s.main_do.addChild(_s.info_do))
				}, 50), -1 != location.protocol.indexOf("file:") && FWDUVPUtils.isIE) ? void _s.showSourceError("This browser doesn't allow the Youtube API to run local, please test it online or in another browser like Firefox or Chrome.") : void _s.setupYoutubeAPI();
				if (-1 != e.indexOf("vimeo.") && !_s.vimeo_do && _s.videoType_str == FWDUVPlayer.VIMEO) return -1 == location.protocol.indexOf("file:") ? (_s.showPreloader_bl && (_s.main_do.addChild(_s.preloader_do), _s.preloader_do && _s.preloader_do.show(!1)), _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), void _s.setupVimeoAPI()) : void _s.showSourceError("This browser doesn't allow playing Vimeo videos local, please test online.");
				if (_s.is360 && !_s.isThreeJsOrbigLoaded_bl && _s.videoType_str == FWDUVPlayer.VIDEO && _s.videoType_str != FWDUVPlayer.HLS_JS) {
					if (FWDUVPUtils.isLocal) return void _s.showSourceError("This browser doesn't allow playing 360 videos local, please test online.");
					if (!FWDUVPUtils.hasWEBGL) return void _s.showSourceError("Playing 360 videos in _s browser is not possible because it doesn't support WEBGL.");
					if (!_s.isThreeJsLoaded_bl && !FWDUVPlayer.hasThreeJsLoaded_bl) {
						var s = document.createElement("script");
						return s.src = _s._d.threeJsPath_str, s.onerror = function() {
							_s.showSourceError("Error loading 360 degree library <font color='#FF0000'>" + _s._d.threeJsPath_str + "</font>.")
						}, s.onload = function() {
							_s.isThreeJsOrbigLoaded_bl = !0;
							var t = document.createElement("script");
							t.src = _s._d.threeJsControlsPath_str, t.onerror = function() {
								_s.showSourceError("Error loading three.js from <font color='#FF0000'>" + _s._d.threeJsControlsPath_str + "</font>.")
							}, t.onload = function() {
								FWDUVPlayer.hasThreeJsLoaded_bl = !0, _s.isThreeJsOrbitLoaded_bl = !0, _s.isThreeJsOrbigLoaded_bl && _s.isThreeJsOrbitLoaded_bl && _s.setSource(e, !0, !0), clearTimeout(_s.load360ScriptsId_to), _s.preloader_do && _s.preloader_do.hide()
							}, document.head.appendChild(t)
						}, document.head.appendChild(s), void(_s.load360ScriptsId_to = setTimeout(function() {
							_s.showPreloader_bl && _s.preloader_do && _s.preloader_do.show(!1)
						}, 1e3))
					}
				}
				if (_s.dClk_do.getStyle().cursor = _s.is360 ? "url(" + _s._d.handPath_str + "), default" : "auto", _s.rotationY360DegreeVideo = _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].rotationY360DegreeVideo, _s.startWhenPlayButtonClick360DegreeVideo = _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].startWhenPlayButtonClick360DegreeVideo, _s._d.playlist_ar[_s.id] && _s._d.playlist_ar[_s.id].scrubAtTimeAtFirstPlay && (_s.playAtTime_bl = !0), _s.controller_do && _s.controller_do.rewindButton_do && _s.controller_do.rewindButton_do.disable(), _s.popwSource = _s._d.playlist_ar[_s.id]._dAdvertisementOnPauseSource, _s.showPopW_bl = !!(_s._d.playlist_ar[_s.id] && _s._d.playlist_ar[_s.id]._dAdvertisementOnPauseSource), e || (e = _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source), -1 != e.indexOf("youtube.")) {
					e = e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]
				}
				return (_s.controller_do && _s.controller_do.enablePlayButton(), _s.prevVideoSource_str = e, !e) ? void _s.showSourceError("Video source is not defined!") : (_s.playlist_do && (_s.playlist_do.curId = _s.id, _s.playlist_do.checkThumbsState()), _s.controller_do && _s._d.playlist_ar[_s.id].subtitleSource && 1 < _s._d.playlist_ar[_s.id].subtitleSource.length && (_s.subsSource_ar = _s._d.playlist_ar[_s.id].subtitleSource, _s.subsStartAtSubtitle = +_s._d.playlist_ar[_s.id].startAtSubtitle, _s.controller_do.updateSubtitleButtons(_s.subsSource_ar, _s.subsStartAtSubtitle), _s.ccSS = +(_s._d.playlist_ar[_s.id].subtitleSource.length - _s._d.playlist_ar[_s.id].startAtSubtitle)), _s.subtitle_do.stopToLoadSubtitle(), _s.controller_do && (_s.controller_do.updateHexColorForScrubber(_s.isAdd_bl), _s.controller_do.removeAtButton()), _s.annotations_ar = _s._d.playlist_ar[_s.id].annotations_ar, _s.annotations_do.setupAnnotations(_s.annotations_ar), _s.startAtPlaybackIndex = _s._d.startAtPlaybackIndex, "0.25" == _s._d.playlist_ar[_s.id]._dPlaybackRate ? _s.startAtPlaybackIndex = 5 : "0.5" == _s._d.playlist_ar[_s.id]._dPlaybackRate ? _s.startAtPlaybackIndex = 4 : "1" == _s._d.playlist_ar[_s.id]._dPlaybackRate ? _s.startAtPlaybackIndex = 3 : "1.25" == _s._d.playlist_ar[_s.id]._dPlaybackRate ? _s.startAtPlaybackIndex = 2 : "1.5" == _s._d.playlist_ar[_s.id]._dPlaybackRate ? _s.startAtPlaybackIndex = 1 : "2" == _s._d.playlist_ar[_s.id]._dPlaybackRate && (_s.startAtPlaybackIndex = 0), _s.prevVideoSourcePath_str = _s.videoSourcePath_str, _s.resizeHandler(!1, !0), _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME) ? (_s.updateImageScreen(_s.videoSourcePath_str), void(_s.videoPoster_do && _s.videoPoster_do.setX(-5e3))) : (_s.videoHolder_do.contains(_s.ifr_do) && _s.videoHolder_do.removeChild(_s.ifr_do), _s.videoHolder_do.contains(_s.imgH_do) && _s.videoHolder_do.removeChild(_s.imgH_do), _s.videoPoster_do && _s.videoPoster_do.setX(0), (_s.getVideoSource() && _s.dispatchEvent(FWDUVPlayer.UPDATE_VIDEO_SOURCE), _s.videoType_str == FWDUVPlayer.VIMEO ? (_s.ytb_do && _s.ytb_do.setX(-5e3), _s.videoScreen_do && _s.videoScreen_do.setX(-5e3), 0 != _s.vimeo_do.x && _s.vimeo_do.setX(0), _s.isAdd_bl ? _s.showClickScreen() : _s.hideClickScreen(), _s.audioScreen_do && _s.audioScreen_do.setX(-5e3), _s.audioScreen_do.setVisible(!1), _s.videoScreen_do && _s.videoScreen_do.setVisible(!1), _s.controller_do && _s.controller_do.removePlaybackRateButton(), _s.controller_do && (_s.controller_do.hideQualityButtons(!1), _s.controller_do.removeYtbQualityButton()), _s.videoPoster_do.hide(!0), _s.setPosterSource(_s.posterPath_str), _s.vimeo_do.setSource(e), _s.getVideoSource() && _s.dispatchEvent(FWDUVPlayer.UPDATE_VIDEO_SOURCE), void _s.resizeHandler()) : _s.videoType_str == FWDUVPlayer.YOUTUBE ? (_s.vimeo_do && _s.vimeo_do.setX(-5e3), _s.videoScreen_do.setX(-5e3), _s.videoScreen_do.setVisible(!1), _s.audioScreen_do && _s.audioScreen_do.setX(-5e3), _s.audioScreen_do.setVisible(!1), _s.ytb_do && _s.ytb_do.setX(0), _s.videoPoster_do.hide(!0), _s.setPosterSource(_s.posterPath_str), _s.isTempYoutubeAdd_bl = !1, _s.ytb_do.setSource(e), _s.controller_do && (_s.controller_do.addYtbQualityButton(), _s.controller_do && (_s.videoType_str == FWDUVPlayer.VIMEO || _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.controller_do.removePlaybackRateButton() : _s.controller_do.addPlaybackRateButton(_s.startAtPlaybackIndex))), _s.isAdd_bl ? _s.setPlaybackRate(1) : _s.setPlaybackRate(_s._d.defaultPlaybackRate_ar[_s._d.startAtPlaybackIndex]), _s.controller_do && _s._d.showPlaybackRateButton_bl && _s.controller_do.updatePlaybackRateButtons(_s.startAtPlaybackIndex), _s.resizeHandler(!1, !0), void(_s.getVideoSource() && _s.dispatchEvent(FWDUVPlayer.UPDATE_VIDEO_SOURCE))) : void(_s.finalVideoPath_str = e, _s.videoType_str == FWDUVPlayer.MP3 && (_s.vimeo_do && _s.vimeo_do.setX(-5e3), _s.ytb_do && _s.ytb_do.setX(-5e3), _s.audioScreen_do && _s.audioScreen_do.setX(-5e3), _s.audioScreen_do.setVisible(!1), _s.videoScreen_do.setVisible(!0), _s.controller_do && 1 < _s._d.playlist_ar[_s.id].videoSource.length ? (_s.controller_do.updatePreloaderBar(0), _s.controller_do && _s.controller_do.addYtbQualityButton(), _s.controller_do.updateQuality(_s._d.playlist_ar[_s.id].videoLabels_ar, _s._d.playlist_ar[_s.id].videoLabels_ar[_s._d.playlist_ar[_s.id].videoLabels_ar.length - 1 - _s._d.playlist_ar[_s.id].startAtVideo])) : _s.controller_do && _s.controller_do.removeYtbQualityButton(), _s.controller_do && (_s.videoType_str == FWDUVPlayer.VIMEO || _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IMAGE ? _s.controller_do.removePlaybackRateButton() : _s.controller_do.addPlaybackRateButton(_s.startAtPlaybackIndex)), _s._d.autoPlay_bl = !1, _s.removeAPT(), _s.audioScreen_do.setX(0), _s.audioScreen_do.setVisible(!0), !_s.isAdd_bl && window.FWDUVPCC && FWDUVPCC.enableButton(), _s.videoPoster_do.hide(!0), _s.setPosterSource(_s.posterPath_str), _s.audioScreen_do.setSource(e), _s.isAdd_bl && !_s.isMbl ? _s.play() : _s.isThumbClick_bl ? (_s.displayType != FWDUVPlayer.LIGHTBOX || _s.lightBox_do.isShowed_bl) && _s.play() : (_s.videoPoster_do && _s.videoPoster_do.show(), _s.lrgPlayBtn && _s.lrgPlayBtn.show())), (FWDUVPlayer.hasHTML5Video && _s.videoType_str == FWDUVPlayer.VIDEO || _s.videoType_str == FWDUVPlayer.HLS_JS || _s.videoType_str == FWDUVPlayer.DASH) && (_s.vimeo_do && _s.vimeo_do.setX(-5e3), _s.ytb_do && _s.ytb_do.setX(-5e3), _s.audioScreen_do && _s.audioScreen_do.setX(-5e3), _s.audioScreen_do.setVisible(!1), _s.videoScreen_do.setVisible(!0), _s.controller_do && 1 < _s._d.playlist_ar[_s.id].videoSource.length ? (_s.controller_do.updatePreloaderBar(0), _s.controller_do && _s.controller_do.addYtbQualityButton(), _s.controller_do.updateQuality(_s._d.playlist_ar[_s.id].videoLabels_ar, _s._d.playlist_ar[_s.id].videoLabels_ar[_s._d.playlist_ar[_s.id].videoLabels_ar.length - 1 - _s._d.playlist_ar[_s.id].startAtVideo])) : _s.controller_do && _s.controller_do.removeYtbQualityButton(), _s.controller_do && _s.controller_do && (_s.videoType_str == FWDUVPlayer.VIMEO || _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.controller_do.removePlaybackRateButton() : _s.controller_do.addPlaybackRateButton(_s.startAtPlaybackIndex)), _s.videoType_str == FWDUVPlayer.DASH ? (_s.setPosterSource(_s.posterPath_str), (_s._d.autoPlay_bl || _s.isThumbClick_bl || !_s.isMbl && _s.isAdd_bl && !_s.loadAddFirstTime_bl) && _s.videoPoster_do.hide(!0), _s.videoScreen_do.setSource(e), _s.videoScreen_do.initVideo(), _s.setupDASH(), _s.dashJS.initialize(_s.videoScreen_do.video_el, _s.videoSourcePath_str, !1), _s.dashJS.attachSource(_s.videoSourcePath_str), _s.dashJS.on(dashjs.MediaPlayer.events.MANIFEST_LOADED, function() {
					_s.isDASHManifestReady_bl = !0, _s.isMbl || !_s.isAdd_bl || _s.loadAddFirstTime_bl || setTimeout(_s.play, 100), _s._d.autoPlay_bl || _s.isThumbClick_bl ? (_s.isThumbClick_bl && _s.videoType_str == FWDUVPlayer.DASH && setTimeout(_s.play, 100), _s._d.autoPlay_bl && (_s.controller_do && _s.controller_do.updateVolume(0), (_s.displayType != FWDUVPlayer.LIGHTBOX || _s.lightBox_do.isShowed_bl) && _s.videoType_str == FWDUVPlayer.DASH && setTimeout(_s.play, 100))) : (_s.videoPoster_do.show(!0), _s.lrgPlayBtn.show()), _s.isAdd_bl ? _s.setPlaybackRate(1) : _s.setPlaybackRate(_s._d.defaultPlaybackRate_ar[_s.startAtPlaybackIndex]), _s.controller_do && _s._d.showPlaybackRateButton_bl && _s.controller_do.updatePlaybackRateButtons(_s.startAtPlaybackIndex)
				})) : _s.videoType_str == FWDUVPlayer.HLS_JS ? (_s.setPosterSource(_s.posterPath_str), (_s._d.autoPlay_bl || _s.isThumbClick_bl || !_s.isMbl && _s.isAdd_bl && !_s.loadAddFirstTime_bl) && _s.videoPoster_do.hide(!0), _s.videoScreen_do.setSource(e), _s.videoScreen_do.initVideo(), _s.setupHLS(), _s.hlsJS.loadSource(_s.videoSourcePath_str), _s.hlsJS.attachMedia(_s.videoScreen_do.video_el), _s.hlsJS.on(Hls.Events.MANIFEST_PARSED, function() {
					_s.videoType_str == FWDUVPlayer.HLS_JS && (_s.isHLSManifestReady_bl = !0, _s.controller_do && _s.controller_do.addYtbQualityButton(), _s.isAdd_bl && !_s.loadAddFirstTime_bl && _s.play(), (_s._d.autoPlay_bl || _s.isThumbClick_bl) && (_s.isThumbClick_bl && _s.play(), _s._d.autoPlay_bl && (_s.controller_do && _s.controller_do.updateVolume(0), (_s.displayType != FWDUVPlayer.LIGHTBOX || _s.lightBox_do.isShowed_bl) && _s.play())), _s.isAdd_bl ? _s.setPlaybackRate(1) : _s.setPlaybackRate(_s._d.defaultPlaybackRate_ar[_s.startAtPlaybackIndex]), _s.controller_do && _s._d.showPlaybackRateButton_bl && _s.controller_do.updatePlaybackRateButtons(_s.startAtPlaybackIndex), _s.parseLevels())
				})) : (!_s.isAdd_bl && window.FWDUVPCC && FWDUVPCC.enableButton(), _s.setPosterSource(_s.posterPath_str), _s.videoPoster_do.hide(!0), _s.videoScreen_do.setSource(e), _s.isAdd_bl && !_s.loadAddFirstTime_bl && _s.play(), _s._d.autoPlay_bl || _s.isThumbClick_bl ? (_s.isThumbClick_bl && _s.play(), _s._d.autoPlay_bl && (_s.controller_do && _s.controller_do.updateVolume(0), (_s.displayType != FWDUVPlayer.LIGHTBOX || _s.lightBox_do.isShowed_bl) && _s.play()), _s.isCasting && _s.videoPoster_do.show()) : (_s.videoPoster_do.show(!0), _s.lrgPlayBtn.show()), _s.isAdd_bl ? _s.setPlaybackRate(1) : _s.setPlaybackRate(_s._d.defaultPlaybackRate_ar[_s.startAtPlaybackIndex]), _s.controller_do && _s._d.showPlaybackRateButton_bl && _s.controller_do.updatePlaybackRateButtons(_s.startAtPlaybackIndex)), _s.isIMA && _s.IMA.setSource(_s.isIMA)), _s.resizeHandler())))
			}
		}, _s.setupDASH = function() {
			_s.dashJS || (_s.isDASHLoaded_bl = !0, _s.dashJS = dashjs.MediaPlayer().create(), _s.dashJS.on(dashjs.MediaPlayer.events.ERROR, function(t) {
				console.log(t), _s.main_do.addChild(_s.info_do), _s.info_do.showText(t.error.message)
			}))
		}, _s.destroyDASH = function() {
			if (_s.dashJS) {
				try {
					_s.dashJS.reset()
				} catch (t) {}
				_s.dashJS = null
			}
		}, _s.destroyHLS = function() {
			_s.hlsJS && (_s.hlsJS.destroy(), _s.hlsJS = null)
		}, _s.setupHLS = function() {
			_s.hlsJS || !window.Hls || (_s.isHLSJsLoaded_bl = !0, _s.hlsJS = new Hls, FWDUVPRegisterHLSError(_s), _s.hlsJS.on(Hls.Events.MANIFEST_LOADED, function() {
				_s.setAudioTracks(_s.hlsJS.audioTracks)
			}), _s.hlsJS.on(Hls.Events.LEVEL_UPDATED, function(e, t) {
				_s.curHlsLevel = t.level, _s.updateHlsControllerLevels()
			}), _s.hlsJS.on(Hls.Events.LEVEL_SWITCHING, function(e, t) {
				_s.curHlsLevel = t.level, _s.updateHlsControllerLevels()
			}))
		}, _s.setAudioTracks = function(e) {
			e && 1 < e.length && (_s.controller_do.addAtButton(), _s.audioTracks_ar = [], e.forEach((e, t) => {
				_s.audioTracks_ar[t] = {
					label: e.name || e.label
				}
			}), _s.audioTracks_ar.reverse(), _s.controller_do.updateATBButtons(_s.audioTracks_ar, 0))
		}, _s.updateHlsControllerLevels = function() {
			_s.controller_do && _s.hlsLevels_ar && (_s.curHlsLevel = Math.abs(_s.curHlsLevel - _s.hlsLevels_ar.length + 1), _s.controller_do.disableQualityButtons("", _s.curHlsLevel))
		}, _s.parseLevels = function() {
			var e = _s.hlsJS.levels;
			_s.hlsLevels_ar = [], setTimeout(function() {
				e.forEach(function(e) {
					var t = "",
						o = e.width,
						s = e.height;
					t = 320 == o ? "tiny" : 480 == o ? "small" : 640 == o ? "medium" : 960 == o ? "large" : 1280 == o ? "hd720" : 1920 == o ? "hd1080" : 2560 == o ? "hd1440p" : 3840 == o ? "hd2160" : 3840 == o ? "hd2160" : 5120 == o ? "hd2880" : 7680 == o ? "hd4320" : o + "x" + s, _s.hlsLevels_ar.push(t)
				}), _s.hlsLevels_ar && (_s.hlsLevels_ar.reverse(), _s.controller_do && (_s.curHlsLevel = Math.abs(_s.hlsLevels_ar.length - _s.hlsLevels_ar.length), _s.curHlsLevel = _s.curHlsLevel, _s.controller_do.updateQuality(_s.hlsLevels_ar, _s.curHlsLevel, _s.curHlsLevel)))
			}, 500)
		}, _s.goFullScreen = function() {
			if (_s.isAPIReady_bl) {
				_s.wasMin = _s.isMin, _s.isFullScreen_bl = !0, _s.removeMinOnScroll(), document.addEventListener && (document.addEventListener("fullscreenchange", _s.onFullScreenChange), document.addEventListener("mozfullscreenchange", _s.onFullScreenChange), document.addEventListener("webkitfullscreenchange", _s.onFullScreenChange), document.addEventListener("MSFullscreenChange", _s.onFullScreenChange)), FWDUVPUtils.isSafari && FWDUVPUtils.isWin || (document.documentElement.requestFullScreen ? _s.main_do.screen.requestFullScreen() : document.documentElement.mozRequestFullScreen ? _s.main_do.screen.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen ? _s.main_do.screen.webkitRequestFullScreen() : document.documentElement.msRequestFullscreen && _s.main_do.screen.msRequestFullscreen()), _s.callVastEvent("playerExpand"), _s.stopVisualization(), _s.disableClick(), _s.isEmbedded_bl || (_s.main_do.getStyle().position = "fixed", document.documentElement.style.overflow = "hidden", _s.main_do.getStyle().zIndex = 2147483641), _s.controller_do && (_s.controller_do.showNormalScreenButton(), _s.controller_do.setNormalStateToFullScreenButton()), _s.customContextMenu_do && _s.customContextMenu_do.updateFullScreenButton(1);
				var e = FWDUVPUtils.getScrollOffsets();
				_s.lastX = e.x, _s.lastY = e.y, window.scrollTo(0, 0), _s.isMbl && window.addEventListener("touchmove", _s.disableFullScreenOnMobileHandler), _s.dispatchEvent(FWDUVPlayer.GO_FULLSCREEN), _s.resizeHandler()
			}
		}, _s.disableFullScreenOnMobileHandler = function(t) {
			t.preventDefault && t.preventDefault()
		}, _s.goNormalScreen = function() {
			_s.isAPIReady_bl && (document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), _s.disableClick(), _s.addMainDoToTheOriginalParent(), _s.isFullScreen_bl = !1)
		}, _s.addMainDoToTheOriginalParent = function() {
			if (_s.isFullScreen_bl) {
				if (document.removeEventListener && (document.removeEventListener("fullscreenchange", _s.onFullScreenChange), document.removeEventListener("mozfullscreenchange", _s.onFullScreenChange), document.removeEventListener("webkitfullscreenchange", _s.onFullScreenChange), document.removeEventListener("MSFullscreenChange", _s.onFullScreenChange)), _s.callVastEvent("playerCollapse"), _s.controller_do && _s.controller_do.setNormalStateToFullScreenButton(), _s.categories_do && _s.categories_do.isShowed_bl) {
					try {
						_s.main_do.removeChild(_s.categories_do)
					} catch (t) {}
					document.documentElement.appendChild(_s.categories_do.screen)
				}
				_s.isEmbedded_bl || (_s.displayType == FWDUVPlayer.RESPONSIVE || _s.displayType == FWDUVPlayer.AFTER_PARENT || _s.displayType == FWDUVPlayer.LIGHTBOX || _s.displayType == FWDUVPlayer.STICKY ? (document.documentElement.style.overflow = "visible", _s.isMin ? (_s.main_do.getStyle().position = "fixed", _s.main_do.getStyle().zIndex = 9999999999999) : (_s.main_do.getStyle().position = "relative", _s.main_do.getStyle().zIndex = 0)) : (_s.main_do.getStyle().position = "absolute", _s.main_do.getStyle().zIndex = 9999999999998)), _s.displayType != FWDUVPlayer.FULL_SCREEN && _s.controller_do.enablePlaylistButton(), _s.customContextMenu_do && _s.customContextMenu_do.updateFullScreenButton(0), _s.controller_do.showFullScreenButton(), window.scrollTo(_s.lastX, _s.lastY), _s.showCursor(), _s.resizeHandler(), setTimeout(function() {
					_s.addMinOnScroll(), _s.resizeHandler()
				}, 500), window.scrollTo(_s.lastX, _s.lastY), FWDUVPUtils.isIE || setTimeout(function() {
					window.scrollTo(_s.lastX, _s.lastY)
				}, 150), _s.isMbl && window.removeEventListener("touchmove", _s.disableFullScreenOnMobileHandler), _s.dispatchEvent(FWDUVPlayer.GO_NORMALSCREEN)
			}
		}, _s.onFullScreenChange = function() {
			document.fullScreen || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen || (_s.controller_do.showNormalScreenButton(), _s.addMainDoToTheOriginalParent(), _s.isFullScreen_bl = !1)
		}, _s.loadPlaylist = function(e) {
			_s.isAPIReady_bl && _s._d.prevId != e && (_s._d.playlist_ar && _s._d.playlist_ar[_s.id] && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.catId = e, _s.id = 0, 0 > _s.catId ? _s.catId = 0 : _s.catId > _s._d.totalPlaylists - 1 && (_s.catId = _s._d.totalPlaylists - 1), _s.useDeepLinking_bl ? FWDUVPDL.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id) : _s.loadInternalPlaylist())
		}, _s.playNext = function() {
			_s.isAPIReady_bl && _s.isPlaylistLoaded_bl && (_s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.id++, _s.executePlayNextPrevOrShuffle())
		}, _s.playPrev = function() {
			_s.isAPIReady_bl && _s.isPlaylistLoaded_bl && (_s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.id--, _s.executePlayNextPrevOrShuffle())
		}, _s.playShuffle = function() {
			if (_s.isAPIReady_bl && _s.isPlaylistLoaded_bl) {
				_s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName);
				for (var e = parseInt(Math.random() * _s.totaadsIdeos); e == _s.id;) e = parseInt(Math.random() * _s.totaadsIdeos);
				_s.id = e, _s.executePlayNextPrevOrShuffle()
			}
		}, _s.executePlayNextPrevOrShuffle = function() {
			_s._d.isVastXMLParsed_bl = !1, _s.totalDuration = 0, 0 > _s.id ? _s.id = _s.totaadsIdeos - 1 : _s.id > _s.totaadsIdeos - 1 && (_s.id = 0), _s.useDeepLinking_bl ? FWDUVPDL.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id) : (_s.isThumbClick_bl = !0, _s.updateAds(0, !0))
		}, _s.playVideo = function(e) {
			_s.isAPIReady_bl && _s.isPlaylistLoaded_bl && (_s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.id = e, 0 > _s.id ? _s.id = _s.totaadsIdeos - 1 : _s.id > _s.totaadsIdeos - 1 && (_s.id = 0), _s.useDeepLinking_bl ? FWDUVPDL.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id) : (_s.updateAds(0, !0), _s.isMbl && _s.videoType_str == FWDUVPlayer.VIDEO && _s.play(), !_s.isMbl && _s.play()))
		}, _s.setVideoSource = function(e, t, o) {
			_s.isAdd_bl = !1;
			var s = "no";
			t && (s = "yes"), _s.isLive = o, _s.setSource(e, !1, t)
		}, _s.downloadVideo = function(e) {
			var t = _s.checkPassWindow();
			if (t) {
				_s.hasPassedPassowrd_bl = !0, null == e && (e = _s.id);
				var o = _s._d.playlist_ar[e].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source,
					s; - 1 != o.indexOf("encrypt:") + "" && (o = atob(o.substr(8))), s = -1 == o.indexOf("/") ? o : o.substr(o.lastIndexOf("/") + 1);
				var n = "videoName:" + _s._d.playlist_ar[_s.id].gaStr;
				window.ga && ga("send", {
					hitType: "event",
					eventCategory: _s._d.cats_ar[_s.catId].playlistName,
					eventAction: "downloaded",
					eventLabel: n,
					nonInteraction: !0
				}), _s._d.downloadVideo(o, s)
			}
		}, _s.share = function() {
			_s.isAPIReady_bl && _s.controllerShareHandler()
		}, _s.getVideoSource = function() {
			return _s.isAPIReady_bl ? _s.finalVideoPath_str : void 0
		}, _s.getPosterSource = function() {
			return _s.isAPIReady_bl ? _s.posterPath_str : void 0
		}, _s.getPlaylistId = function() {
			return _s.catId
		}, _s.getVideoId = function() {
			return _s.id
		}, _s.getCurrentTime = function(e) {
			e || (e = "text");
			var t;
			return "milliseconds" == e ? (t = _s.curTimeInmilliseconds ? _s.curTimeInmilliseconds : 0, _s.isCasting && (t = _s.cc.getCurrentTime())) : "seconds" == e ? (t = _s.curTimeInSecond ? _s.curTimeInSecond : 0, _s.isCasting && (t = _s.cc.getCurrentTime())) : (t = _s.curTime ? _s.curTime : "00:00", _s.isCasting && (t = FWDUVPUtils.formatTime(_s.cc.getCurrentTime()))), t
		}, _s.getTotalTime = function(e) {
			e || (e = "text");
			var t;
			return "milliseconds" == e ? (t = _s.totalTimeInMilliseconds ? _s.totalTimeInMilliseconds : 0, _s.isCasting && (t = _s.cc.getCurrentTime())) : "seconds" == e ? (t = Math.round(_s.totalTimeInSeconds), _s.isCasting && (t = _s.cc.getDuration())) : (t = _s.totalTime ? _s.totalTime : "00:00", _s.isCasting && (t = FWDUVPUtils.formatTime(_s.cc.getDuration()))), t
		}, _s.setPlaybackRate = function(e) {
			_s.isAPIReady_bl && (_s.videoScreen_do && _s.videoType_str == FWDUVPlayer.VIDEO || _s.videoType_str == FWDUVPlayer.HLS_JS || _s.videoType_str == FWDUVPlayer.DASH ? _s.videoScreen_do.setPlaybackRate(e) : _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.ytb_do.setPlaybackRate(e) : _s.videoType_str == FWDUVPlayer.MP3 && _s.audioScreen_do.setPlaybackRate(e))
		}, _s.showLightbox = function() {
			_s.lightBox_do && _s.lightBox_do.show()
		}, _s.fillEntireVideoScreen = function(e) {
			_s.fillEntireVideoScreen_bl = e, _s.resizeHandler()
		}, _s.hideCursor = function() {
			document.documentElement.style.cursor = "none", document.getElementsByTagName("body")[0].style.cursor = "none", _s.isAdd_bl || (_s.dClk_do.getStyle().cursor = "none")
		}, _s.showCursor = function() {
			document.documentElement.style.cursor = "auto", document.getElementsByTagName("body")[0].style.cursor = "auto", _s.isAdd_bl ? _s.dClk_do.setButtonMode(!0) : _s.is360 ? _s.dClk_do.getStyle().cursor = "url(" + _s._d.handPath_str + "), default" : _s.dClk_do.getStyle().cursor = "auto"
		}, _s.showPlayer = function() {
			_s.isAPIReady_bl && (_s.isShowed_bl = !0, _s.opener_do.showCloseButton(), _s.setStageContainerFinalHeightAndPosition(_s.animate_bl), _s.isMin && (_s.isMinShowed = !0, _s.positionOnMin(!0)))
		}, _s.hidePlayer = function() {
			_s.isAPIReady_bl && (_s.isShowed_bl = !1, _s.opener_do.showOpenButton(), _s.setStageContainerFinalHeightAndPosition(_s.animate_bl), _s.isMin && (_s.isMinShowed = !1, _s.positionOnMin(!0)))
		}, _s.getStartTimeStamp = function(e) {
			var t = window.location.href;
			if (t = t.substr(t.indexOf(e + "=") + 2), -1 != t.indexOf("&") && (t = t.substr(0, t.indexOf("&"))), -1 != t.indexOf("s&") && (t = t.substr(0, t.indexOf("s&") + 1)), !(10 < t.length)) {
				var o = /\d+h/g,
					s = t.match(o);
				try {
					s = t.match(o)[0]
				} catch (t) {}
				s && (s = s.substr(0, s.length - 1), 1 == s.length && 10 > parseInt(s) && (s = "0" + s), 59 < parseInt(s) && (s = 59)), s = s ? s : "00";
				var o = /h\d+m/g,
					n = t.match(o);
				try {
					n = t.match(o)[0].substr(1)
				} catch (t) {}
				n && (n = n.substr(0, n.length - 1), 1 == n.length && 10 > parseInt(n) && (n = "0" + n), 59 < parseInt(n) && (n = 59)), n = n ? n : "00";
				var o = /\d+s/g,
					i = t.match(o);
				try {
					i = t.match(o)[0]
				} catch (t) {}
				return i && (i = i.substr(0, i.length - 1), 1 == i.length && 10 > parseInt(i) && (i = "0" + i), 59 < parseInt(i) && (i = 59)), i = i ? i : "00", s + ":" + n + ":" + i
			}
		}, _s.setVastSource = function(e) {
			_s.isAPIReady_bl && (_s.isAdd_bl = !1, _s.adDone_bl = !1, _s.stop(), _s.prevDuration = -1, _s._d.vastXML = e, _s._d.isVastXMLParsed_bl = !1, _s._d.vast.id = -1, _s.updateAds())
		}, _s.addListener = function(e, t) {
			if (null == e) throw Error("type is required.");
			if ("object" == typeof e) throw Error("type must be of type String.");
			if ("function" != typeof t) throw Error("listener must be of type Function.");
			var o = {};
			o.type = e, o.listener = t, o.target = _s, _s.listeners.events_ar.push(o)
		}, _s.dispatchEvent = function(e, t) {
			if (null != _s.listeners) {
				if (null == e) throw Error("type is required.");
				if ("object" == typeof e) throw Error("type must be of type String.");
				for (var o = 0, s = _s.listeners.events_ar.length; o < s; o++)
					if (_s.listeners.events_ar[o].target === _s && _s.listeners.events_ar[o].type === e) {
						if (t)
							for (var n in t) _s.listeners.events_ar[o][n] = t[n];
						_s.listeners.events_ar[o].listener.call(_s, _s.listeners.events_ar[o])
					}
			}
		}, _s.removeListener = function(e, t) {
			if (null == e) throw Error("type is required.");
			if ("object" == typeof e) throw Error("type must be of type String.");
			if ("function" != typeof t) throw Error("listener must be of type Function." + e);
			for (var o = 0, s = _s.listeners.events_ar.length; o < s; o++)
				if (_s.listeners.events_ar[o].target === _s && _s.listeners.events_ar[o].type === e && _s.listeners.events_ar[o].listener === t) {
					_s.listeners.events_ar.splice(o, 1);
					break
				}
		}, _s.callVastEvent = function(e) {
			if (_s.TrackingEvents) {
				for (var t = 0, o; t < _s.TrackingEvents.length; t++) e == _s.TrackingEvents[t].event && (o = _s.TrackingEvents[t].URI);
				o && _s.executeVastEvent(o)
			}
		}, _s.executeVastEvent = function(e) {
			if (e) {
				var t = new Image;
				t.src = e
			}
		}, _s.cleanMainEvents = function() {
			window.removeEventListener ? window.removeEventListener("resize", _s.onResizeHandler) : window.detachEvent && window.detachEvent("onresize", _s.onResizeHandler), clearTimeout(_s.resizeHandlerId_to), clearTimeout(_s.resizeHandler2Id_to), clearTimeout(_s.hidePreloaderId_to), clearTimeout(_s.orientationChangeId_to)
		};
		var args = FWDUVPUtils.getUrlArgs(window.location.search),
			embedTest = args.UVPInstanceName,
			instanceName = args.UVPInstanceName;
		if (embedTest && (_s.isEmbedded_bl = props.instanceName == instanceName), _s.isEmbedded_bl) {
			var ws = FWDUVPUtils.getViewportSize();
			_s.embeddedPlaylistId = parseInt(args.UVPPlaylistId), _s.embeddedVideoId = parseInt(args.UVPVideoId);
			var dumy_do = new FWDUVPDisplayObject("div");
			dumy_do.setBkColor(props.backgroundColor), dumy_do.setWidth(ws.w), dumy_do.setHeight(ws.h), document.documentElement.style.overflow = "hidden", document.getElementsByTagName("body")[0].style.overflow = "hidden", FWDUVPUtils.isIEAndLessThen9 ? document.getElementsByTagName("body")[0].appendChild(dumy_do.screen) : document.documentElement.appendChild(dumy_do.screen)
		}
		_s.init()
	};
	FWDUVPlayer.setPrototype = function() {
		FWDUVPlayer.prototype = new FWDUVPEventDispatcher
	}, FWDUVPlayer.stopAllVideos = function(e) {
		for (var t = FWDUVPlayer.instaces_ar.length, o = 0, s; o < t; o++) s = FWDUVPlayer.instaces_ar[o], s != e && s.stop()
	}, FWDUVPlayer.pauseAllVideos = function(e) {
		for (var t = FWDUVPlayer.instaces_ar.length, o = 0, s; o < t; o++) s = FWDUVPlayer.instaces_ar[o], s != e && s.pause()
	}, FWDUVPlayer.hasHTML5Video = !0, FWDUVPlayer.hasCanvas = function() {
		return !!document.createElement("canvas")
	}(), FWDUVPlayer.instaces_ar = [], FWDUVPlayer.hasHTMLHLS = function() {
		return navigator.userAgent.match(/(iPhone|iPod)/g)
	}(), FWDUVPlayer.areMainInstancesInitialized_bl = !1, FWDUVPlayer.curInstance = null, FWDUVPlayer.keyboardCurInstance = null, FWDUVPlayer.isYoutubeAPICreated_bl = !1, FWDUVPlayer.HLS_JS = "HLS", FWDUVPlayer.DASH = "DASH", FWDUVPlayer.PAUSE_ALL_VIDEOS = "pause", FWDUVPlayer.STOP_ALL_VIDEOS = "stop", FWDUVPlayer.DO_NOTHING = "none", FWDUVPlayer.YOUTUBE = "youtube", FWDUVPlayer.VIMEO = "vimeo", FWDUVPlayer.VIDEO = "video", FWDUVPlayer.IFRAME = "iframe", FWDUVPlayer.atLeastOnePlayerHasDeeplinking_bl = !1, FWDUVPlayer.MP3 = "mp3", FWDUVPlayer.CENTER = "center", FWDUVPlayer.RIGHT = "right", FWDUVPlayer.LEFT = "left", FWDUVPlayer.POSITION_BOTTOM = "bottom", FWDUVPlayer.POSITION_TOP = "top", FWDUVPlayer.HIDE_LIGHTBOX_COMPLETE = "lightboxHideComplete", FWDUVPlayer.START_TO_LOAD_PLAYLIST = "startToLoadPlaylist", FWDUVPlayer.LOAD_PLAYLIST_COMPLETE = "loadPlaylistComplete", FWDUVPlayer.READY = "ready", FWDUVPlayer.STOP = "stop", FWDUVPlayer.PLAY = "play", FWDUVPlayer.PAUSE = "pause", FWDUVPlayer.UPDATE = "update", FWDUVPlayer.UPDATE_TIME = "updateTime", FWDUVPlayer.UPDATE_VIDEO_SOURCE = "updateVideoSource", FWDUVPlayer.UPDATE_POSTER_SOURCE = "udpatePosterSource", FWDUVPlayer.ERROR = "error", FWDUVPlayer.PLAY_COMPLETE = "playComplete", FWDUVPlayer.VOLUME_SET = "volumeSet", FWDUVPlayer.GO_FULLSCREEN = "goFullScreen", FWDUVPlayer.GO_NORMALSCREEN = "goNormalScreen", FWDUVPlayer.IMAGE = "image", FWDUVPlayer.HLS_JS = "hls_flash", FWDUVPlayer.SAFE_TO_SCRUB = "safeToScrub", FWDUVPlayer.LIGHTBOX = "lightbox", FWDUVPlayer.STICKY = "sticky", FWDUVPlayer.RESPONSIVE = "responsive", FWDUVPlayer.FULL_SCREEN = "fullscreen", FWDUVPlayer.AFTER_PARENT = "afterparent", window.FWDUVPlayer = FWDUVPlayer
}(window),
function(e) {
	'use strict';
	var t = function(e, o, s, n, i, a) {
		var d = this,
			r = t.prototype;
		d.mainBackgroundColor_str = o, d.holderBackgroundColor_str = s, d.lightBoxBackgroundOpacity = n, d.lightBoxWidth = i, d.lightBoxHeight = a, d.isMbl = FWDUVPUtils.isMobile, d.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, d.closeButtonIsTweening_bl = !0, d.init = function() {
			d.getStyle().zIndex = 9999999, d.setupMainContainers()
		}, d.setupMainContainers = function() {
			d.isMbl && d.hasPointerEvent_bl && (d.getStyle().msTouchAction = "none"), d.lightBoxBackground_sdo = new FWDUVPDisplayObject("div"), d.lightBoxBackground_sdo.setResizableSizeAfterParent(), d.lightBoxBackground_sdo.setBkColor(d.mainBackgroundColor_str), d.lightBoxBackground_sdo.screen.addEventListener("click", d.closeButtonOnStartHandler), d.addChild(d.lightBoxBackground_sdo), d.mainLightBox_do = new FWDUVPDisplayObject("div"), d.mainLightBox_do.setBkColor(d.holderBackgroundColor_str), d.mainLightBox_do.setWidth(1), d.mainLightBox_do.setHeight(1), d.addChild(d.mainLightBox_do), document.documentElement.appendChild(d.screen), d.setX(-1e4), d.setY(-1e4), d.setWidth(0), d.setHeight(0)
		}, d.show = function() {
			if (!d.isShowed_bl) {
				d.clsBtn ? (d.hideCloseButton(!1), d.showCloseButton(!0), d.clsBtn.setX(-200)) : d.loadClsoeButtonImage();
				var o = FWDUVPUtils.getViewportSize(),
					s = FWDUVPUtils.getScrollOffsets();
				d.setWidth(o.w), d.setHeight(o.h), d.setX(s.x), d.setY(s.y), d.lightBoxBackground_sdo.setAlpha(0), FWDAnimation.to(d.lightBoxBackground_sdo, .8, {
					alpha: d.lightBoxBackgroundOpacity
				}), d.setX(s.x), d.setY(s.y), d.mainLightBox_do.setX(parseInt(o.w / 2)), d.mainLightBox_do.setY(parseInt(o.h / 2)), d.lightBoxWidth > o.w ? (d.finalLightBoxWidth = o.w, d.finalLightBoxHeight = parseInt(d.lightBoxHeight * (o.w / d.lightBoxWidth))) : (d.finalLightBoxWidth = d.lightBoxWidth, d.finalLightBoxHeight = d.lightBoxHeight), FWDAnimation.to(d.mainLightBox_do, .8, {
					w: d.finalLightBoxWidth,
					h: d.finalLightBoxHeight,
					x: parseInt((o.w - d.finalLightBoxWidth) / 2),
					y: parseInt((o.h - d.finalLightBoxHeight) / 2),
					delay: .4,
					onComplete: d.showComplete,
					ease: Expo.easeInOut
				}), e.main_do && e.main_do.setX(-5e3), d.dispatchEvent(t.SHOW)
			}
		}, d.showComplete = function() {
			d.isShowed_bl = !0, d.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, d.closeButtonOnStartHandler), d.addKeyboardSupport(), e.startResizeHandler(), console.log("complete " + d.wasAutoPlay), e.isPlaylistLoaded_bl && (e._d.autoPlay_bl || d.wasAutoPlay) && (!d.setWAP && (d.wasAutoPlay = e._d.autoPlay_bl), d.setWAP = !0, e.play())
		}, d.addKeyboardSupport = function() {
			document.addEventListener("keydown", d.onKeyDownHandler)
		}, d.onKeyDownHandler = function(t) {
			27 == t.keyCode && d.closeButtonOnStartHandler()
		}, d.loadClsoeButtonImage = function() {
			d.closeN_img = new Image, d.closeN_img.onload = d.setupCloseButton, d.closeN_img.src = e.mainFolderPath_str + e.sknPth + "embed-close-button.png", d.closeSPath_str = e.mainFolderPath_str + e.sknPth + "embed-close-button-over.png"
		}, d.setupCloseButton = function() {
			var e = FWDUVPUtils.getViewportSize();
			FWDUVPSimpleButton.setPrototype(), d.clsBtn = new FWDUVPSimpleButton(d.closeN_img, d.closeSPath_str, void 0, !0), d.hideCloseButton(!1), d.showCloseButton(!0), d.clsBtn.setX(e.w - d.clsBtn.w - 15), d.clsBtn.setY(15), d.addChild(d.clsBtn)
		}, d.showCloseButtonComplete = function() {
			d.closeButtonIsTweening_bl = !1
		}, d.hideCloseButton = function(e) {
			FWDAnimation.killTweensOf(d.clsBtn), e ? FWDAnimation.to(d.clsBtn, .9, {
				alpha: 0
			}) : d.clsBtn.setAlpha(0)
		}, d.showCloseButton = function(e) {
			FWDAnimation.killTweensOf(d.clsBtn), e ? FWDAnimation.to(d.clsBtn, .9, {
				alpha: 1,
				delay: .8
			}) : d.clsBtn.setAlpha(1)
		}, d.mouseDummyHandler = function(t) {
			return !!t.preventDefault && void t.preventDefault()
		}, d.closeButtonOnStartHandler = function() {
			if (d.isShowed_bl) {
				d.isShowed_bl = !1;
				var o = FWDUVPUtils.getViewportSize();
				d.clsBtn.removeListener(FWDUVPSimpleButton.MOUSE_UP, d.closeButtonOnStartHandler), FWDAnimation.to(d.clsBtn, .9, {
					alpha: 0
				}), FWDAnimation.to(d.mainLightBox_do, .8, {
					w: 0,
					h: 0,
					x: parseInt(o.w / 2),
					y: parseInt(o.h / 2),
					delay: .4,
					ease: Expo.easeInOut
				}), FWDAnimation.to(d.lightBoxBackground_sdo, .8, {
					alpha: 0,
					delay: .8
				}), FWDAnimation.to(e.main_do, .8, {
					x: -e.main_do.w / 2,
					y: -e.main_do.h / 2,
					ease: Expo.easeInOut,
					delay: .4
				}), d.lighboxAnimDoneId_to = setTimeout(d.lighboxHideAnimationDone, 1600), d.dispatchEvent(t.CLOSE)
			}
		}, d.lighboxHideAnimationDone = function() {
			d.setX(-1e4), d.setY(-1e4), d.setWidth(0), d.setHeight(0), d.dispatchEvent(t.HIDE_COMPLETE)
		}, d.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.CLOSE = "ligtBoxClose", t.SHOW = "show", t.HIDE_COMPLETE = "hideComplete", t.prototype = null, e.FWDUVPLightBox = t
}(window),
function(e) {
	'use strict';
	var t = function(o, s, n, i) {
		var a = this,
			d = t.prototype;
		a.position_str = n, a.source_str = s, a.logoLink_str = o._d.logoLink_str, a.margins = i, a.isShowed_bl = !0, a.allowToShow_bl = !0, a.init = function() {
			"none" == a.logoLink_str ? a.getStyle().pointerEvents = "none" : (a.setButtonMode(!0), a.screen.onclick = function() {
				e.open(a.logoLink_str, "_blank")
			}), a.logoImage_do = new FWDUVPDisplayObject("img"), a.img_img = new Image, a.img_img.onerror = null, a.img_img.onload = a.loadDone, a.img_img.src = a.source_str + "?" + new Date().getTime(), a.hide()
		}, a.loadDone = function() {
			a.setWidth(a.img_img.width), a.setHeight(a.img_img.height), a.logoImage_do.setScreen(a.img_img), a.addChild(a.logoImage_do), a.logoImage_do.setWidth(a.img_img.width), a.logoImage_do.setHeight(a.img_img.height), a.positionAndResize()
		}, a.positionAndResize = function() {
			o.tempVidStageWidth && ("topleft" == a.position_str ? (a.finalX = a.margins, a.finalY = a.margins) : "topright" == a.position_str ? (a.finalX = o.tempVidStageWidth - a.w - a.margins, a.finalY = a.margins) : "bottomright" == a.position_str ? (a.finalX = o.tempVidStageWidth - a.w - a.margins, a.finalY = o.tempVidStageHeight - a.h - a.margins) : "bottomleft" == a.position_str && (a.finalX = a.margins, a.finalY = o.tempVidStageHeight - a.h - a.margins), a.setX(a.finalX), a.setY(a.finalY))
		}, a.show = function(e) {
			a.isShowed_bl || (a.isShowed_bl = !0, a.setVisible(!0), FWDAnimation.killTweensOf(a), e ? FWDAnimation.to(a, .8, {
				alpha: 1,
				ease: Expo.easeInOut
			}) : a.setAlpha(1))
		}, a.hide = function(e, t) {
			(a.isShowed_bl || t) && (a.isShowed_bl = !1, FWDAnimation.killTweensOf(a), e ? FWDAnimation.to(a, .8, {
				alpha: 0,
				ease: Expo.easeInOut,
				onComplete: function() {
					a.setVisible(!1)
				}
			}) : (a.setAlpha(0), a.setVisible(!1)))
		}, a.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.prototype = null, e.FWDUVPLogo = t
}(window),
function() {
	var t = function(e, o, s) {
		'use strict';
		var n = this;
		n.animation_img = e.openerAnimation_img, o == FWDUVPlayer.POSITION_TOP ? (n.openN_img = e.openTopN_img, n.openSPath_str = e.openTopSPath_str) : (n.openN_img = e.openBottomN_img, n.openSPath_str = e.openBottomSPath_str), n.openerPauseN_img = e.openerPauseN_img, n.openerPlayN_img = e.openerPlayN_img, n.closeN_img = e.closeN_img, n.useHEX = e.useHEX, n.nBC = e.nBC, n.sBC = e.sBC, n.openerPauseS_str = e.openerPauseS_str, n.openerPlaySPath_str = e.openerPlayS_str, n.closeSPath_str = e.closeSPath_str, n.animationPath_img = e.animationPath_img;
		try {
			n.totalWidth = n.openN_img.width, n.totalHeight = n.openN_img.height
		} catch (t) {}
		n.position_str = o, n.alignment_str = e.openerAlignment_str, n.openerEqulizerOffsetLeft = e.openerEqulizerOffsetLeft, n.openerEqulizerOffsetTop = e.openerEqulizerOffsetTop, n.showFirstTime_bl = !0, n.playerIsShowed_bl = s, n.showOpenerPlayPauseButton_bl = e.showOpenerPlayPauseButton_bl, n.isMbl = FWDUVPUtils.isMobile, n.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, n.init = function() {
			n.sBC = -1 == e.sknPth.indexOf("hex_white") ? e.sBC : "#FFFFFF", n.hasTransform3d_bl = !1, n.hasTransform2d_bl = !1, n.setBackfaceVisibility(), n.getStyle().msTouchAction = "none", n.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", n.setupStuff(), n.showOpenerPlayPauseButton_bl && n.setupPlayPauseButton(), n.playerIsShowed_bl && n.showCloseButton(), n.showOpenerPlayPauseButton_bl ? n.setWidth(n.totalWidth + n.openerPauseN_img.width + 1) : n.setWidth(n.totalWidth), n.setHeight(n.totalHeight)
		}, n.setupStuff = function() {
			n.mainHld = new FWDUVPDisplayObject("div"), n.mainHld.hasTransform3d_bl = !1, n.mainHld.hasTransform2d_bl = !1, n.mainHld.setBackfaceVisibility(), n.showOpenerPlayPauseButton_bl ? n.mainHld.setWidth(n.totalWidth + n.openerPauseN_img.width + 1) : n.mainHld.setWidth(n.totalWidth), n.mainHld.setHeight(n.totalHeight), n.useHEX ? (n.openN_do = new FWDUVPDisplayObject("div"), n.openN_canvas = FWDUVPUtils.getCanvasWithModifiedColor(n.openN_img, n.nBC).canvas, n.openN_do.screen.appendChild(n.openN_canvas)) : (n.openN_do = new FWDUVPDisplayObject("img"), n.openN_do.setScreen(n.openN_img)), n.openN_do.setWidth(n.openN_img.width), n.openN_do.setHeight(n.openN_img.height), n.openS_img = new Image, n.openS_img.src = n.openSPath_str, n.useHEX ? (n.openS_do = new FWDUVPDisplayObject("div"), n.openS_img.onload = function() {
				n.openS_canvas = FWDUVPUtils.getCanvasWithModifiedColor(n.openS_img, n.sBC).canvas, n.openS_do.setWidth(n.openS_img.width), n.openS_do.setHeight(n.openS_img.height), n.openS_do.screen.appendChild(n.openS_canvas)
			}) : (n.openS_do = new FWDUVPDisplayObject("img"), n.openS_do.setScreen(n.openS_img)), n.openS_do.setWidth(n.openN_do.w), n.openS_do.setHeight(n.openN_do.h), n.openS_do.setAlpha(0), n.useHEX ? (n.closeN_do = new FWDUVPDisplayObject("div"), n.closeN_canvas = FWDUVPUtils.getCanvasWithModifiedColor(n.closeN_img, n.nBC).canvas, n.closeN_do.screen.appendChild(n.closeN_canvas)) : (n.closeN_do = new FWDUVPDisplayObject("img"), n.closeN_do.setScreen(n.closeN_img)), n.closeN_do.setWidth(n.closeN_img.width), n.closeN_do.setHeight(n.closeN_img.height), n.closeN_do.hasTransform3d_bl = !1, n.closeN_do.hasTransform2d_bl = !1, n.closeN_do.setBackfaceVisibility(), n.closeS_img = new Image, n.closeS_img.src = n.closeSPath_str, n.useHEX ? (n.closeS_do = new FWDUVPDisplayObject("div"), n.closeS_img.onload = function() {
				n.closeS_canvas = FWDUVPUtils.getCanvasWithModifiedColor(n.closeS_img, n.sBC).canvas, n.closeS_do.setWidth(n.closeN_img.width), n.closeS_do.setHeight(n.closeN_img.height), n.closeS_do.screen.appendChild(n.closeS_canvas)
			}) : (n.closeS_do = new FWDUVPDisplayObject("img"), n.closeS_do.setScreen(n.closeS_img)), n.closeS_do.setWidth(n.closeN_img.width), n.closeS_do.setHeight(n.closeN_img.height), n.closeS_do.setAlpha(0), n.closeS_do.hasTransform3d_bl = !1, n.closeS_do.hasTransform2d_bl = !1, FWDUVPPreloader2.setPrototype(), n.animation_do = new FWDUVPPreloader2(n.animationPath_img, 29, 22, 31, 80, !0), n.animation_do.setY(n.openerEqulizerOffsetTop), n.animation_do.show(!1), n.animation_do.stop(), n.dumy_do = new FWDUVPDisplayObject("div"), n.dumy_do.setWidth(n.totalWidth), n.dumy_do.setHeight(n.totalHeight), n.dumy_do.getStyle().zIndex = 2, n.dumy_do.hasTransform3d_bl = !1, n.dumy_do.hasTransform2d_bl = !1, n.dumy_do.setBackfaceVisibility(), n.dumy_do.setButtonMode(!0), (FWDUVPUtils.isIE || FWDUVPUtils.isAndroid) && (n.dumy_do.setBkColor("#FF0000"), n.dumy_do.setAlpha(.01)), n.hasPointerEvent_bl ? (n.mainHld.screen.addEventListener("pointerup", n.onMouseUp), n.mainHld.screen.addEventListener("pointerover", n.onMouseOver), n.mainHld.screen.addEventListener("pointerout", n.onMouseOut)) : n.screen.addEventListener && (!n.isMbl && (n.mainHld.screen.addEventListener("mouseover", n.onMouseOver), n.mainHld.screen.addEventListener("mouseout", n.onMouseOut), n.mainHld.screen.addEventListener("mouseup", n.onMouseUp)), n.screen.addEventListener("touchend", n.onMouseUp)), n.mainHld.addChild(n.openN_do), n.mainHld.addChild(n.openS_do), n.mainHld.addChild(n.closeN_do), n.mainHld.addChild(n.closeS_do), n.mainHld.addChild(n.animation_do), n.mainHld.addChild(n.dumy_do), n.addChild(n.mainHld)
		}, n.showOpener = function() {}, n.onMouseOver = function(t) {
			t.pointerType && t.pointerType != t.MSPOINTER_TYPE_MOUSE && "mouse" != t.pointerType || n.setSelectedState()
		}, n.onMouseOut = function(t) {
			t.pointerType && t.pointerType != t.MSPOINTER_TYPE_MOUSE && "mouse" != t.pointerType || n.setNormalState()
		}, n.onMouseUp = function(o) {
			o.preventDefault && o.preventDefault(), n.playerIsShowed_bl ? (n.playerIsShowed_bl = !1, n.dispatchEvent(t.HIDE)) : (n.playerIsShowed_bl = !0, n.dispatchEvent(t.SHOW))
		}, n.setupPlayPauseButton = function() {
			FWDUVPComplexButton.setPrototype(), n.playPauseButton_do = new FWDUVPComplexButton(n.openerPlayN_img, n.openerPlaySPath_str, n.openerPauseN_img, n.openerPauseS_str, !0, n.useHEX, n.nBC, n.sBC), n.playPauseButton_do.addListener(FWDUVPComplexButton.MOUSE_UP, n.playButtonMouseUpHandler), n.addChild(n.playPauseButton_do)
		}, n.showPlayButton = function() {
			n.playPauseButton_do && n.playPauseButton_do.setButtonState(1), n.animation_do.stop()
		}, n.showPauseButton = function() {
			n.playPauseButton_do && n.playPauseButton_do.setButtonState(0), n.animation_do.start(0)
		}, n.playButtonMouseUpHandler = function() {
			0 == n.playPauseButton_do.currentState ? n.dispatchEvent(FWDUVPController.PAUSE) : n.dispatchEvent(FWDUVPController.PLAY)
		}, n.setNormalState = function() {
			n.isMbl && !n.hasPointerEvent_bl || (FWDAnimation.killTweensOf(n.openS_do), FWDAnimation.killTweensOf(n.closeS_do), FWDAnimation.to(n.openS_do, .5, {
				alpha: 0,
				ease: Expo.easeOut
			}), FWDAnimation.to(n.closeS_do, .5, {
				alpha: 0,
				ease: Expo.easeOut
			}))
		}, n.setSelectedState = function() {
			FWDAnimation.killTweensOf(n.openS_do), FWDAnimation.killTweensOf(n.closeS_do), FWDAnimation.to(n.openS_do, .5, {
				alpha: 1,
				ease: Expo.easeOut
			}), FWDAnimation.to(n.closeS_do, .5, {
				alpha: 1,
				ease: Expo.easeOut
			})
		}, n.showOpenButton = function() {
			n.playerIsShowed_bl = !1, n.closeN_do.setX(150), n.closeS_do.setX(150), n.playPauseButton_do ? "right" == n.alignment_str ? (n.playPauseButton_do.setX(0), n.openN_do.setX(n.playPauseButton_do.w + 1), n.openS_do.setX(n.playPauseButton_do.w + 1), n.dumy_do.setX(n.playPauseButton_do.w + 1), n.dumy_do.setWidth(n.totalWidth), n.animation_do.setX(n.playPauseButton_do.w + 1 + n.openerEqulizerOffsetLeft)) : (n.playPauseButton_do.setX(n.openN_do.w + 1), n.openN_do.setX(0), n.openS_do.setX(0), n.dumy_do.setX(0), n.dumy_do.setWidth(n.totalWidth), n.animation_do.setX(n.openerEqulizerOffsetLeft)) : (n.openN_do.setX(0), n.openS_do.setX(0), n.dumy_do.setX(0), n.dumy_do.setWidth(n.totalWidth), n.animation_do.setX(n.openerEqulizerOffsetLeft)), n.animation_do.setVisible(!0)
		}, n.showCloseButton = function() {
			n.playerIsShowed_bl = !0, n.openN_do.setX(150), n.openS_do.setX(150), n.dumy_do.setWidth(n.closeN_do.w), "right" == n.alignment_str ? n.playPauseButton_do ? (n.closeN_do.setX(n.totalWidth + 1), n.closeS_do.setX(n.totalWidth + 1), n.dumy_do.setX(n.totalWidth + 1)) : (n.closeN_do.setX(n.totalWidth - n.closeN_do.w), n.closeS_do.setX(n.totalWidth - n.closeN_do.w), n.dumy_do.setX(n.totalWidth - n.closeN_do.w)) : (n.closeN_do.setX(0), n.closeS_do.setX(0), n.dumy_do.setX(0)), n.playPauseButton_do && n.playPauseButton_do.setX(150), n.animation_do.setX(150), n.animation_do.setVisible(!1)
		}, n.hide = function() {
			n.mainHld.setX(150)
		}, n.show = function() {
			n.mainHld.setX(0)
		}, n.updateHEXColors = function(e, t) {
			n.nBC = e, n.sBC = t, n.playPauseButton_do.updateHEXColors(e, t), FWDUVPUtils.changeCanvasHEXColor(n.openN_img, n.openN_canvas, e), FWDUVPUtils.changeCanvasHEXColor(n.closeN_img, n.closeN_canvas, e), FWDUVPUtils.changeCanvasHEXColor(n.openS_img, n.openS_canvas, t), FWDUVPUtils.changeCanvasHEXColor(n.closeS_img, n.closeS_canvas, t)
		}, n.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.SHOW = "show", t.HIDE = "hise", t.PLAY = "play", t.PAUSE = "pause", t.prototype = null, window.FWDUVPOpener = t
}(window),
function(e) {
	var t = function(e, o) {
		'use strict';
		var s = this,
			n = t.prototype;
		s.buttons_ar = [], s.maxWidth = e.aopwWidth, s.maxHeight = e.aopwHeight + e.popwColseN_img.height + 1, s.sW = 0, s.sH = 0, s.aopwSource = e.aopwSource, s.aopwTitle = e.aopwTitle, s.aopwTitleColor_str = e.aopwTitleColor_str, s.aopwBorderSize = e.aopwBorderSize, s.isMbl = FWDUVPUtils.isMobile, s.init = function() {
			s.setBackfaceVisibility(), s.mainBar_do = new FWDUVPDisplayObject("div"), s.bar_do = new FWDUVPDisplayObject("div"), s.bar_do.getStyle().background = "url('" + e.popwBarBackgroundPath_str + "')", s.adHolder_do = new FWDUVPDisplayObject("div"), s.adBk_do = new FWDUVPDisplayObject("div"), s.adBk_do.getStyle().background = "url('" + e.popwWindowBackgroundPath_str + "')", FWDUVPSimpleButton.setPrototype(), s.clsBtn = new FWDUVPSimpleButton(e.popwColseN_img, e.popwColseSPath_str, void 0, !0, e.useHEX, e.nBC, e.sBC, !1, !1, !1, !1, !0), s.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, s.closeButtonOnMouseUpHandler), s.title_do = new FWDUVPDisplayObject("div"), s.title_do.getStyle().width = "100%", s.title_do.getStyle().textAlign = "left", s.title_do.getStyle().fontFamily = "Arial", s.title_do.getStyle().fontSize = "14px", s.title_do.getStyle().fontWeight = "100", s.title_do.getStyle().color = s.aopwTitleColor_str, s.title_do.setInnerHTML(s.aopwTitle), s.bar_do.addChild(s.title_do), s.addChild(s.adBk_do), s.mainBar_do.addChild(s.bar_do), s.mainBar_do.addChild(s.clsBtn), s.mainBar_do.setHeight(s.clsBtn.h), s.addChild(s.mainBar_do), s.addChild(s.adHolder_do), s.bar_do.setHeight(s.mainBar_do.h)
		}, s.closeButtonOnMouseUpHandler = function() {
			s.isShowed_bl && (s.hide(), o.play())
		}, s.positionAndResize = function() {
			s.sW = Math.min(o.tempVidStageWidth, s.maxWidth), s.sH = Math.min(o.tempVidStageHeight, s.maxHeight);
			var e = 1,
				t = o.tempVidStageWidth / s.maxWidth,
				n = o.tempVidStageHeight / s.maxHeight;
			t < n ? e = t : t > n && (e = n), 1 < e && (e = 1), s.sW = e * s.maxWidth, s.sH = e * s.maxHeight, s.setWidth(s.sW), s.setHeight(s.sH), s.setHeight(s.sH), s.setX(Math.round((o.tempVidStageWidth - s.sW) / 2)), s.setY(Math.round((o.tempVidStageHeight - s.sH) / 2)), s.mainBar_do.setWidth(s.sW), s.clsBtn.setX(s.sW - s.clsBtn.w), s.bar_do.setWidth(s.sW - s.clsBtn.w - 1), s.adBk_do.setWidth(s.sW), s.adBk_do.setHeight(s.sH - s.mainBar_do.h - 1), s.adBk_do.setY(s.mainBar_do.h + 1), s.adHolder_do.setWidth(s.sW - 2 * s.aopwBorderSize), s.adHolder_do.setX(s.aopwBorderSize), s.adHolder_do.setY(s.mainBar_do.h + s.aopwBorderSize + 1), s.adHolder_do.setHeight(s.sH - s.mainBar_do.h - 2 * s.aopwBorderSize - 1)
		}, s.show = function(e) {
			s.isShowed_bl || (s.isShowed_bl = !0, e && (s.aopwSource = e), o.main_do.addChild(s), s.adHolder_do.setInnerHTML("<iframe width='100%' height='100%' scrolling='no' frameBorder='0' src=" + s.aopwSource + "></iframe>"), s.positionAndResize(), s.title_do.setX(8), s.title_do.setY(Math.round((s.bar_do.h - s.title_do.getHeight()) / 2)))
		}, s.showCompleteHandler = function() {}, s.hide = function() {
			s.isShowed_bl && (s.isShowed_bl = !1, o.main_do.contains(s) && o.main_do.removeChild(s))
		}, s.hideCompleteHandler = function() {
			o.main_do.removeChild(s), s.dispatchEvent(t.HIDE_COMPLETE)
		}, s.updateHEXColors = function(e, t) {
			s.clsBtn.updateHEXColors(e, t)
		}, s.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.HIDE_COMPLETE = "hideComplete", t.prototype = null, e.FWDUVPOPWindow = t
}(window),
function(e) {
	var t = function(e, o, s) {
		'use strict';
		var n = this,
			i = t.prototype;
		n.passColoseN_img = e.passColoseN_img, n.privateVideoPassword_str = e.privateVideoPassword_str, n.embedWindowBackground_str = e.embedWindowBackground_str, n.secondaryLabelsColor_str = e.secondaryLabelsColor_str, n.inputColor_str = e.inputColor_str, n.mainLabelsColor_str = e.mainLabelsColor_str, n.passButtonNPath_str = e.passButtonNPath_str, n.passButtonSPath_str = e.passButtonSPath_str, n.inputBackgroundColor_str = e.inputBackgroundColor_str, n.borderColor_str = e.borderColor_str, n.maxTextWidth = 0, n.totalWidth = 0, n.sW = 0, n.sH = 0, n.buttonWidth = 28, n.buttonHeight = 19, n.embedWindowCloseButtonMargins = e.embedWindowCloseButtonMargins, n.finalEmbedPath_str = null, n.useVectorIcons_bl = e.useVectorIcons_bl, n.isMobile_bl = FWDUVPUtils.isMobile, n.init = function() {
			if (!n.clsBtn) {
				if (n.setBackfaceVisibility(), n.mainHld = new FWDUVPDisplayObject("div"), n.mainHld.hasTransform3d_bl = !1, n.mainHld.hasTransform2d_bl = !1, n.mainHld.setBackfaceVisibility(), n.bk_do = new FWDUVPDisplayObject("div"), n.bk_do.getStyle().width = "100%", n.bk_do.getStyle().height = "100%", n.bk_do.setAlpha(.9), n.bk_do.getStyle().background = "url('" + n.embedWindowBackground_str + "')", n.passMainHolder_do = new FWDUVPDisplayObject("div"), n.passMainHldBk = new FWDUVPDisplayObject("div"), n.passMainHldBk.getStyle().background = "url('" + n.embedWindowBackground_str + "')", n.passMainHldBk.getStyle().borderStyle = "solid", n.passMainHldBk.getStyle().borderWidth = "1px", n.passMainHldBk.getStyle().borderColor = n.borderColor_str, n.passMainLabel_do = new FWDUVPDisplayObject("div"), n.passMainLabel_do.screen.className = "UVP-main-label", n.passMainLabel_do.setBackfaceVisibility(), n.passMainLabel_do.screen.className = "fwdeap-main-label", n.passMainLabel_do.getStyle().fontFamily = "Arial", n.passMainLabel_do.getStyle().fontSize = "12px", n.passMainLabel_do.getStyle().color = n.mainLabelsColor_str, n.passMainLabel_do.getStyle().whiteSpace = "nowrap", n.passMainLabel_do.getStyle().padding = "0px", n.passMainLabel_do.setInnerHTML("PRIVATE VIDEO"), n.passLabel_do = new FWDUVPDisplayObject("div"), n.passMainLabel_do.screen.className = "UVP-main-label", n.passLabel_do.setBackfaceVisibility(), n.passLabel_do.screen.className = "fwdeap-label", n.passLabel_do.getStyle().fontFamily = "Arial", n.passLabel_do.getStyle().fontSize = "12px", n.passLabel_do.getStyle().color = n.secondaryLabelsColor_str, n.passLabel_do.getStyle().whiteSpace = "nowrap", n.passLabel_do.getStyle().padding = "0px", n.passLabel_do.setInnerHTML("Please enter password:"), n.passInput_do = new FWDUVPDisplayObject("input"), n.passInput_do.screen.className = "UVP-embed-inpt", n.passInput_do.setBackfaceVisibility(), n.passInput_do.getStyle().fontFamily = "Arial", n.passInput_do.getStyle().fontSize = "12px", n.passInput_do.getStyle().backgroundColor = n.inputBackgroundColor_str, n.passInput_do.getStyle().color = n.inputColor_str, n.passInput_do.getStyle().outline = 0, n.passInput_do.getStyle().whiteSpace = "nowrap", n.passInput_do.getStyle().padding = "6px", n.passInput_do.getStyle().paddingTop = "4px", n.passInput_do.getStyle().paddingBottom = "4px", n.passInput_do.screen.setAttribute("type", "password"), !s) FWDUVPSimpleSizeButton.setPrototype(), n.passBtn = new FWDUVPSimpleSizeButton(n.passButtonNPath_str, n.passButtonSPath_str, n.buttonWidth, n.buttonHeight, e.useHEX, e.nBC, e.sBC, !0), n.passBtn.getStyle().position = "absolute", n.passMainLabel_do.screen.className = "fwduvp-ok-button", n.passBtn.addListener(FWDUVPSimpleSizeButton.CLICK, n.passClickHandler), FWDUVPSimpleButton.setPrototype(), n.useVectorIcons_bl ? (n.clsBtn = new FWDUVPSimpleButton(0, 0, 0, !0, 0, 0, 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCloseButtonNormalState", "UVPCloseButtonSelectedState"), n.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, n.closeButtonOnMouseUpHandler), n.mainHld.addChild(n.clsBtn)) : (FWDUVPSimpleButton.setPrototype(), n.clsBtn = new FWDUVPSimpleButton(n.passColoseN_img, e.embedWindowClosePathS_str, 0, !0, e.useHEX, e.nBC, e.sBC, 0, 0, 0, 0, !0)), n.clsBtn.screen.className = "fwduvp-close-button", n.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, n.closeButtonOnMouseUpHandler), n.addChild(n.mainHld), n.mainHld.addChild(n.bk_do), n.passMainHolder_do.addChild(n.passMainHldBk), n.passMainHolder_do.addChild(n.passMainLabel_do), n.passMainHolder_do.addChild(n.passLabel_do), n.passMainHolder_do.addChild(n.passInput_do), n.passMainHolder_do.addChild(n.passBtn), n.mainHld.addChild(n.passMainHolder_do), n.mainHld.addChild(n.clsBtn);
				else {
					n.addChild(n.mainHld), n.mainHld.addChild(n.bk_do), n.mainHld.addChild(n.passLabel_do), n.passLabel_do.getStyle().whiteSpace = "normal", n.passLabel_do.getStyle().width = "calc(100% - 40px)", n.passLabel_do.getStyle().textAlign = "center", n.passLabel_do.setInnerHTML(e.playIfLoggedInMessage);
					var t = "fwduvp-loggedin-message-white";
					if (e.isDark && (t = "fwduvp-loggedin-message-dark"), n.passLabel_do.screen.className = t, n.passLabel_do.setOverflow("visible"), FWDUVPSimpleButton.setPrototype(), n.useVectorIcons_bl) n.clsBtn = new FWDUVPSimpleButton(0, 0, 0, !0, 0, 0, 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCloseButtonNormalState", "UVPCloseButtonSelectedState"), n.clsBtn.screen.className = "fwduvp-close-button", n.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, n.closeButtonOnMouseUpHandler), n.mainHld.addChild(n.clsBtn);
					else {
						var o = new Image;
						o.src = n.passColoseN_img.src, o.onload = function() {
							FWDUVPSimpleButton.setPrototype(), n.clsBtn = new FWDUVPSimpleButton(o, e.embedWindowClosePathS_str, void 0, !0, e.useHEX, e.nBC, e.sBC, 0, 0, 0, 0, !0), n.clsBtn.screen.className = "fwduvp-close-button", n.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, n.closeButtonOnMouseUpHandler), n.mainHld.addChild(n.clsBtn), o.onload = null, n.posClsBtn()
						}
					}
				}
				n.posClsBtn()
			}
		}, n.closeButtonOnMouseUpHandler = function() {
			n.isShowed_bl && n.hide()
		};
		n.positionAndResize = function() {
			n.sW = o.sW, n.sH = o.sH, n.maxTextWidth = Math.min(n.sW - 150, 300), n.totalWidth = n.maxTextWidth + n.buttonWidth, n.positionFinal(), n.setWidth(n.sW), n.setHeight(n.sH), n.mainHld.setWidth(n.sW), n.mainHld.setHeight(n.sH)
		}, n.posClsBtn = function() {
			n.clsBtn && (n.clsBtn.getStyle().left = "auto", n.clsBtn.getStyle().right = n.embedWindowCloseButtonMargins + "px", n.clsBtn.getStyle().top = n.embedWindowCloseButtonMargins + "px")
		}, n.positionFinal = function() {
			var e = n.passLabel_do.getHeight(),
				t, o;
			o = n.passMainLabel_do.getHeight(), s ? (n.passLabel_do.setX(Math.round((n.sW - n.passLabel_do.getWidth()) / 2)), n.passLabel_do.setY(Math.round((n.sH - n.passLabel_do.getHeight()) / 2))) : (n.passMainLabel_do.setX(14), n.passLabel_do.setX(14), n.passLabel_do.setY(o + 14), n.passInput_do.setX(10), n.passInput_do.setWidth(parseInt(n.totalWidth - 40 - n.buttonWidth)), n.passInput_do.setY(n.passLabel_do.y + e + 5), n.passBtn.setX(10 + n.passInput_do.w + 20), n.passBtn.setY(n.passLabel_do.y + e + 7), n.passMainHldBk.setY(n.passLabel_do.y - 9), n.passMainHldBk.setWidth(n.totalWidth - 2), n.passMainHldBk.setHeight(n.passBtn.y + n.passBtn.h - 9), n.passMainHolder_do.setWidth(n.totalWidth), n.passMainHolder_do.setHeight(n.passBtn.y + n.passBtn.h + 14), n.passMainHolder_do.setX(Math.round((n.sW - n.totalWidth) / 2)), t = n.passMainHldBk.getHeight(), n.passMainHolder_do.setY(Math.round((n.sH - t) / 2) - 10))
		}, n.passClickHandler = function() {
			var e = !0,
				s = o._d.playlist_ar[o.id].privateVideoPassword_str,
				i = o.playlistPass;
			return i ? i == FWDUVPUtils.MD5(n.passInput_do.screen.value) ? o.plPassPassed = !0 : e = !1 : s ? s != FWDUVPUtils.MD5(n.passInput_do.screen.value) && (e = !1) : n.privateVideoPassword_str != FWDUVPUtils.MD5(n.passInput_do.screen.value) && (e = !1), e ? void n.dispatchEvent(t.CORRECT) : void(FWDAnimation.isTweening(n.passInput_do.screen) || FWDAnimation.to(n.passInput_do.screen, .1, {
				css: {
					backgroundColor: "#FF0000"
				},
				yoyo: !0,
				repeat: 3
			}))
		}, n.updateHEXColors = function(e, t) {
			n.passBtn.updateHEXColors(e, t), n.clsBtn.updateHEXColors(e, t)
		}, n.showInfo = function(e, t) {
			n.infoText_do.setInnerHTML(e), n.passMainHolder_do.addChild(n.infoText_do), n.infoText_do.setWidth(n.buttonWidth), n.infoText_do.setHeight(n.buttonHeight - 4), n.infoText_do.setX(n.passBtn.x), n.infoText_do.setY(n.passBtn.y - 23), n.infoText_do.setAlpha(0), n.infoText_do.getStyle().color = t ? "#FF0000" : n.mainLabelsColor_str, FWDAnimation.killTweensOf(n.infoText_do), FWDAnimation.to(n.infoText_do, .16, {
				alpha: 1,
				yoyo: !0,
				repeat: 7
			})
		}, n.show = function() {
			n.isShowed_bl || (n.isShowed_bl = !0, o.main_do.addChild(n), n.init(), n.passBtn && (n.passBtn.setSelectedState(), n.passInput_do.setInnerHTML("")), (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && o.main_do.setSelectable(!0), n.positionAndResize(), clearTimeout(n.hideCompleteId_to), clearTimeout(n.showCompleteId_to), n.mainHld.setY(-n.sH), n.passBtn && n.passBtn.setNormalState(), n.showCompleteId_to = setTimeout(n.showCompleteHandler, 900), setTimeout(function() {
				n.positionAndResize(), FWDAnimation.to(n.mainHld, .8, {
					y: 0,
					delay: .1,
					ease: Expo.easeInOut
				})
			}, 100))
		}, n.showCompleteHandler = function() {}, n.hide = function() {
			n.isShowed_bl && (n.isShowed_bl = !1, o.customContextMenu_do && o.customContextMenu_do.enable(), n.positionAndResize(), clearTimeout(n.hideCompleteId_to), clearTimeout(n.showCompleteId_to), (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && o.main_do.setSelectable(!1), n.hideCompleteId_to = setTimeout(n.hideCompleteHandler, 800), FWDAnimation.killTweensOf(n.mainHld), FWDAnimation.to(n.mainHld, .8, {
				y: -n.sH,
				ease: Expo.easeInOut
			}))
		}, n.hideCompleteHandler = function() {
			o.main_do.removeChild(n), n.dispatchEvent(t.HIDE_COMPLETE)
		}, e.useHEX && n.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.ERROR = "error", t.CORRECT = "correct", t.HIDE_COMPLETE = "hideComplete", t.prototype = null, e.FWDUVPPassword = t
}(window),
function(t) {
	var o = function(s, n) {
		'use strict';
		var a = this,
			e = o.prototype;
		a.prt = s, a._d = n, a.prevN_img = n.prevN_img, a.nextN_img = n.nextN_img, a.replayN_img = n.replayN_img, a.shuffleN_img = n.shuffleN_img, a.scrBkTop_img = n.scrBkTop_img, a.scrDragTop_img = n.scrDragTop_img, a.scrLinesN_img = n.scrLinesN_img, a.buttons_ar = [], a.useHEX = n.useHEX, a.nBC = n.nBC, a.sBC = n.sBC, a.bkPath_str = n.controllerBkPath_str, a.position_str = s.playlistPosition_str, a.playlistBackgroundColor_str = n.playlistBackgroundColor_str, a.inputBackgroundColor_str = n.searchInputBackgroundColor_str, a.inputColor_str = n.searchInputColor_str, a.prevInputValue_str = "none", a.showOnlyThmb = n.showOnlyThumbnail, a.scrWidth = a.scrBkTop_img.width, a.mouseX = 0, a.mouseY = 0, a.catId = -1, a.dif = 0, a.countLoadedThumbs = 0, a.curId = -1, a.finalX = 0, a.finalY = 0, a.controlBarHeight = n.controllerHeight, a.totalThumbs = 0, a.totalWidth = s.playlistWidth, a.totalHeight = s.playlistHeight, a.dThumbW = a.thumbImageW = n.thumbnailWidth, a.dThumbH = a.thumbImageH = n.thumbnailHeight, a.thumbInPadding = 3, a.spaceBetweenThumbnails = n.spaceBetweenThumbnails, a.startSpaceBetweenButtons = n.startSpaceBetweenButtons, a.spaceBetweenButtons = n.spaceBetweenButtons, a.totalButtons = 0, a.buttonsToolTipHideDelay = n.buttonsToolTipHideDelay, a.removeFromThumbsHolderHeight = 0, a.totalThumbsHeight = 0, a.scrollBarHandlerFinalY = 0, a.sW = a.totalWidth, a.sH = a.totalHeight, a.scrollbarOffestWidth = n.scrollbarOffestWidth, a.lastThumbnailFinalY = -1, a.thumbsFinalY = 0, a.scollbarSpeedSensitivity = n.scollbarSpeedSensitivity, a.vy = 0, a.vy2 = 0, a.friction = .9, a.showThumbnail_bl = n.showThumbnail_bl, a.showPlaylistName_bl = n.showPlaylistName_bl, a.showController_bl = n.showSearchInpt || n.showNextAndPrevButtons_bl || n.showLoopButton_bl || n.showShuffleButton_bl, a.loop_bl = n.loop_bl, a.shuffle_bl = n.shuffle_bl, a.showSearchInpt = n.showSearchInpt, a.allowToScrollAndScrollBarIsActive_bl = !0, a.showPlaylistToolTips_bl = n.showPlaylistToolTips_bl, a.showPlaylistByDefault_bl = n.showPlaylistByDefault_bl, a.repeatBackground_bl = n.repeatBackground_bl, a.addMouseWheelSupport_bl = n.addMouseWheelSupport_bl, a.showNextAndPrevButtons_bl = n.showNextAndPrevButtons_bl, a.showShuffleButton_bl = n.showShuffleButton_bl, a.showLoopButton_bl = n.showLoopButton_bl, a.showButtonsToolTip_bl = n.showButtonsToolTip_bl, a.isShowed_bl = !0, a.usePlaylistsSelectBox_bl = n.usePlaylistsSelectBox_bl, a.isMbl = FWDUVPUtils.isMobile, a.addScrOnMM_bl = n.addScrOnMM_bl, a.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, a.useVectorIcons_bl = n.useVectorIcons_bl, a.init = function() {
			if (a.setOverflow("hidden"), a.screen.className = "fwduvp-playlist", a.mainHld = new FWDUVPDisplayObject("div"), a.mainHld.screen.className = "fwduvp-playlist-background", n.isWhite && (a.mainHld.screen.className = "fwduvp-playlist-background white"), a.mainHld.setBkColor(a.playlistBackgroundColor_str), a.mainThumbsHolder_do = new FWDUVPDisplayObject("div"), a.mainThumbsHolder_do.screen.className = "fwduvp-playlist-thumbs-holder", a.mainThumbsHolder_do.setBkColor(a.playlistBackgroundColor_str), a.thumbsHolder_do = new FWDUVPDisplayObject("div"), a.thumbsHolder_do.setOverflow("visible"), a.mainThumbsHolder_do.addChild(a.thumbsHolder_do), a.mainHld.addChild(a.mainThumbsHolder_do), a.addChild(a.mainHld), a.showController_bl) {
				if (a.controllBar_do = new FWDUVPDisplayObject("div"), a.repeatBackground_bl) a.controllerBk_do = new FWDUVPDisplayObject("div"), a.controllerBk_do.getStyle().background = "url('" + a.bkPath_str + "')";
				else {
					a.controllerBk_do = new FWDUVPDisplayObject("img");
					var e = new Image;
					e.src = a.bkPath_str, a.controllerBk_do.setScreen(e)
				}
				a.controllerBk_do.setHeight(a.controlBarHeight), a.controllerBk_do.getStyle().width = "100%", a.controllBar_do.addChild(a.controllerBk_do), a.controllBar_do.setHeight(a.controlBarHeight), a.mainHld.addChild(a.controllBar_do)
			}
			a.showShuffleButton_bl && a.setupShuffleButton(), a.showLoopButton_bl && a.setupLoopButton(), a.showNextAndPrevButtons_bl && (a.setupPrevButton(), a.setupNextButton()), a.showButtonsToolTip_bl && a.setupToolTips(), a.totalButtons = a.buttons_ar.length, a.showSearchInpt && a.showController_bl && a.setupInput(), a.showController_bl && (a.removeFromThumbsHolderHeight = a.controllBar_do.h + a.spaceBetweenThumbnails), a.setupMobileScrollbar(), a.isMbl || a.setupScrollbar(), a.addMouseWheelSupport_bl && a.addMouseWheelSupport(), a.showPlaylistName_bl && (a.setupPlaylistName(), a.removeFromThumbsHolderHeight += a.controlBarHeight + a.spaceBetweenThumbnails, a.mainThumbsHolder_do.setY(a.controlBarHeight + a.spaceBetweenThumbnails), a.scrMainHolder_do && a.scrMainHolder_do.setY(a.mainThumbsHolder_do.y));
			var t = s.ec;
			t && (a.ec = new FWDUVPDisplayObject("div", "relative"), a.ec.setInnerHTML(t.innerHTML), s.main_do.addChild(a.ec), a.positionEc()), a.showPlaylistByDefault_bl || a.hide()
		}, a.positionEc = function() {
			a.ec && (a.ec.setWidth(a.sW), a.ec.setX(s.sW - a.sW), a.ec.setY(0))
		}, a.resizeAndPosition = function(e) {
			if (s.sW) {
				var t = 0;
				a.ec && (t = Math.round(a.ec.getHeight()), a.positionEc()), "bottom" == a.position_str ? (a.sW = s.sW, a.sH = s.playlistHeight, a.showOnlyThmb && (a.thumbImageW = a.sW - a.scrWidth), a.finalX = 0, a.finalY = s.tempVidStageHeight + s.spaceBetweenControllerAndPlaylist) : (a.sW = a.totalWidth, a.showOnlyThmb && (a.thumbImageW = a.sW - a.scrWidth), a.sH = s.sH - t, a.finalX = s.sW - a.totalWidth, a.finalY = 0), a.comboBox_do && a.comboBox_do.resizeAndPosition(), a.bk_do && (a.bk_do.setWidth(a.sW), a.bk_do.setHeight(a.sH)), a.positionThumbs(e), a.allowToScrollAndScrollBarIsActive_bl && a.scrMainHolder_do ? a.mainThumbsHolder_do.setWidth(a.sW - a.scrollbarOffestWidth + 1) : a.mainThumbsHolder_do.setWidth(a.sW), a.mainThumbsHolder_do.setHeight(a.sH - a.removeFromThumbsHolderHeight), a.scrHandler_do && a.updateScrollBarSizeActiveAndDeactivate(), a.controllBar_do && a.positionControllBar(), a.updateScrollBarHandlerAndContent(e), a.setWidth(a.sW), a.setHeight(a.sH + t), a.setX(a.finalX), a.setY(a.finalY + t), a.mainHld.setWidth(a.sW), a.mainHld.setHeight(a.sH)
			}
		}, a.updatePlaylist = function(e, t, o, s) {
			clearTimeout(a.populateNextItemId_to), a.hasPlaylist_bl = !0, a.catId = t, a.curId = o, a.playlist_ar = e, a.countLoadedThumbs = 0, a.allowToScrollAndScrollBarIsActive_bl = !1, a.input_do && (a.hasInputFocus_bl = !1, a.input_do.screen.value = "Search"), a.setupThumbnails(), a.updatePlaylistName(s), a.showThumbnail_bl && a.loadImages(), a.comboBox_do && a.comboBox_do.setButtonsStateBasedOnId(a.catId), a.hideAndShow(!0), a.thumbsHolder_do.setY(0), a.resizeAndPosition(), a.scrHandler_do && (a.updateScrollBarSizeActiveAndDeactivate(), a.updateScrollBarHandlerAndContent(!1, !0))
		}, a.destroyPlaylist = function() {
			if (a.thumbs_ar) {
				var e;
				a.stopToUpdateDrag(), a.hasPlaylist_bl = !1, a.image_img && (a.image_img.onerror = null, a.image_img.onload = null), FWDAnimation.killTweensOf(a.mainHld), "bottom" == a.position_str ? a.mainHld.setY(-a.sH - 5) : a.mainHld.setX(-a.sW - 5), a.ec && a.ec.setX(-5e3), clearTimeout(a.loadWithDelayId_to);
				for (var t = 0; t < a.totalThumbs; t++) e = a.thumbs_ar[t], a.thumbsHolder_do.removeChild(e), e.destroy();
				a.thumbs_ar = null
			}
		}, a.setupcomboBox = function() {
			a.labels_ar = [];
			for (var e = 0; e < n.cats_ar.length; e++) a.labels_ar[e] = n.cats_ar[e].playlistName;
			var t = {
				categories_ar: a.labels_ar,
				selectorLabel: a.labels_ar[0],
				selectorBackgroundNormalColor: n.mainSelectorBackgroundSelectedColor,
				selectorTextNormalColor: n.mainSelectorTextNormalColor,
				selectorTextSelectedColor: n.mainSelectorTextSelectedColor,
				buttonBackgroundNormalColor: n.mainButtonBackgroundNormalColor,
				buttonBackgroundSelectedColor: n.mainButtonBackgroundSelectedColor,
				buttonTextNormalColor: n.mainButtonTextNormalColor,
				buttonTextSelectedColor: n.mainButtonTextSelectedColor,
				buttonHeight: a.controlBarHeight,
				arrowN_str: n.arrowN_str,
				arrowS_str: n.arrowS_str,
				arrowW: 11,
				arrowH: 6
			};
			FWDUVPComboBox.setPrototype(), a.comboBox_do = new FWDUVPComboBox(a, t), a.comboBox_do.addListener(FWDUVPComboBox.BUTTON_PRESSED, a.changePlaylistOnClick), a.mainHld.addChild(a.comboBox_do)
		}, a.changePlaylistOnClick = function(t) {
			a.dispatchEvent(o.CHANGE_PLAYLIST, {
				id: t.id
			})
		}, a.setupPlaylistName = function() {
			if (a.playlistNameHolder_do = new FWDUVPDisplayObject("div"), a.playlistNameHolder_do.setHeight(a.controlBarHeight), a.playlistNameHolder_do.getStyle().width = "100%", a.repeatBackground_bl) a.playlistNameBk_do = new FWDUVPDisplayObject("div"), a.playlistNameBk_do.getStyle().background = "url('" + a.bkPath_str + "')";
			else {
				a.playlistNameBk_do = new FWDUVPDisplayObject("img");
				var e = new Image;
				e.src = a.bkPath_str, a.playlistNameBk_do.setScreen(e)
			}
			a.playlistNameBk_do.getStyle().width = "100%", a.playlistNameBk_do.getStyle().height = "100%", a.playlistName_do = new FWDUVPDisplayObject("div"), a.playlistName_do.getStyle().width = "100%", a.playlistName_do.screen.className = "fwduvp-playlist-name", a.playlistName_do.getStyle().textAlign = "center", a.playlistName_do.getStyle().fontSmoothing = "antialiased", a.playlistName_do.getStyle().webkitFontSmoothing = "antialiased", a.playlistName_do.getStyle().textRendering = "optimizeLegibility", a.playlistName_do.getStyle().fontFamily = "Arial", a.playlistName_do.getStyle().fontSize = "14px", a.playlistName_do.getStyle().color = n.playlistNameColor_str, a.playlistNameHolder_do.addChild(a.playlistNameBk_do), a.usePlaylistsSelectBox_bl || a.playlistNameHolder_do.addChild(a.playlistName_do), a.mainHld.addChild(a.playlistNameHolder_do), a.usePlaylistsSelectBox_bl && (a.setupcomboBox(), a.controllBar_do && a.mainHld.addChild(a.controllBar_do))
		}, a.updatePlaylistName = function(e) {
			a.playlistName_do && (a.playlistName_do.setInnerHTML(e), setTimeout(function() {
				a.playlistName_do.setY(parseInt((a.playlistNameHolder_do.h - a.playlistName_do.getHeight()) / 2) + 1)
			}, 50))
		}, a.setupInput = function() {
			a.input_do = new FWDUVPDisplayObject("input"), a.input_do.screen.maxLength = 20, a.input_do.screen.className = "fwduvp-search", a.input_do.getStyle().textAlign = "left", a.input_do.getStyle().outline = "none", a.input_do.getStyle().boxShadow = "none", a.input_do.getStyle().fontFamily = "Arial", a.input_do.getStyle().fontSize = "12px", a.input_do.getStyle().padding = "7px 10px 7px", a.input_do.getStyle().boxSizing = "border-box", FWDUVPUtils.isIEAndLessThen9 || (a.input_do.getStyle().paddingRight = "-6px"), a.input_do.getStyle().backgroundColor = a.inputBackgroundColor_str, a.input_do.getStyle().color = a.inputColor_str, a.input_do.screen.value = "Search", a.noSearchFound_do = new FWDUVPDisplayObject("div"), a.noSearchFound_do.setX(0), a.noSearchFound_do.screen.className = "fwduvp-search-not-found", a.noSearchFound_do.getStyle().textAlign = "center", a.noSearchFound_do.getStyle().width = "100%", a.noSearchFound_do.getStyle().fontFamily = "Arial", a.noSearchFound_do.getStyle().fontSize = "12px", a.noSearchFound_do.getStyle().color = a.inputColor_str, a.noSearchFound_do.setInnerHTML("NOTHING FOUND!"), a.noSearchFound_do.setVisible(!1), a.mainHld.addChild(a.noSearchFound_do), a.hasPointerEvent_bl ? a.input_do.screen.addEventListener("pointerdown", a.inputFocusInHandler) : a.input_do.screen.addEventListener && (a.input_do.screen.addEventListener("mousedown", a.inputFocusInHandler), a.input_do.screen.addEventListener("touchstart", a.inputFocusInHandler)), a.input_do.screen.addEventListener("keyup", a.keyUpHandler);
			var e = new Image;
			e.src = n.inputArrowPath_str, a.inputArrow_do = new FWDUVPDisplayObject("img"), a.inputArrow_do.setScreen(e), a.inputArrow_do.setWidth(12), a.inputArrow_do.setHeight(12), a.controllBar_do.addChild(a.input_do), a.controllBar_do.addChild(a.inputArrow_do)
		}, a.inputFocusInHandler = function() {
			a.hasInputFocus_bl || (a.hasInputFocus_bl = !0, "Search" == a.input_do.screen.value && (a.input_do.screen.value = ""), a.input_do.screen.focus(), setTimeout(function() {
				a.hasPointerEvent_bl ? t.addEventListener("pointerdown", a.inputFocusOutHandler) : t.addEventListener && (t.addEventListener("mousedown", a.inputFocusOutHandler), t.addEventListener("touchstart", a.inputFocusOutHandler)), FWDUVPlayer.isSearchedFocused_bl = !0
			}, 50))
		}, a.inputFocusOutHandler = function(o) {
			if (FWDUVPlayer.isSearchedFocused_bl = !1, !!a.hasInputFocus_bl) {
				var e = FWDUVPUtils.getViewportMouseCoordinates(o);
				if (!FWDUVPUtils.hitTest(a.input_do.screen, e.screenX, e.screenY)) return a.hasInputFocus_bl = !1, void("" == a.input_do.screen.value && (a.input_do.screen.value = "Search", a.hasPointerEvent_bl ? t.removeEventListener("pointerdown", a.inputFocusOutHandler) : t.removeEventListener && (t.removeEventListener("mousedown", a.inputFocusOutHandler), t.removeEventListener("touchstart", a.inputFocusOutHandler))))
			}
		}, a.keyUpHandler = function(t) {
			t.stopPropagation && t.stopPropagation(), a.prevInputValue_str != a.input_do.screen.value && (a.isMbl ? (a.positionThumbs(!1), a.thumbsFinalY = -1 * Math.round(a.curId / (a.totalThumbs - 1) * (a.totalThumbsHeight - a.mainThumbsHolder_do.h))) : a.positionThumbs(!0)), a.prevInputValue_str = a.input_do.screen.value, a.scrHandler_do && (a.updateScrollBarSizeActiveAndDeactivate(), a.updateScrollBarHandlerAndContent(!0, !0))
		}, a.showNothingFound = function() {
			a.isShowNothingFound_bl || (a.isShowNothingFound_bl = !0, a.noSearchFound_do.setVisible(!0), a.noSearchFound_do.setY(parseInt((a.sH - a.noSearchFound_do.getHeight()) / 2)), a.noSearchFound_do.setAlpha(0), FWDAnimation.to(a.noSearchFound_do, .1, {
				alpha: 1,
				yoyo: !0,
				repeat: 4
			}))
		}, a.hideNothingFound = function() {
			a.isShowNothingFound_bl && (a.isShowNothingFound_bl = !1, FWDAnimation.killTweensOf(a.noSearchFound_do), a.noSearchFound_do.setVisible(!1))
		}, a.positionControllBar = function() {
			var e, t, o;
			if (a.input_do && 340 >= a.sW) {
				e = a.sW - 2 * a.startSpaceBetweenButtons, a.nextButton_do && (e -= a.nextButton_do.w + a.spaceBetweenButtons), a.prevButton_do && (e -= a.prevButton_do.w + a.spaceBetweenButtons), a.shuffleButton_do && (e -= a.shuffleButton_do.w + a.spaceBetweenButtons), a.loopButton_do && (e -= a.loopButton_do.w + a.spaceBetweenButtons);
				for (var s = 0; s < a.totalButtons; s++) t = a.buttons_ar[a.totalButtons - 1 - s], o = a.buttons_ar[a.totalButtons - s], 0 == s ? t.setX(a.sW - t.w - a.startSpaceBetweenButtons) : t.setX(o.x - o.w - a.spaceBetweenButtons), t.setY(parseInt((a.controllBar_do.h - t.h) / 2))
			} else if (a.input_do && 340 < a.sW) {
				e = a.sW - 2 * a.startSpaceBetweenButtons + a.spaceBetweenButtons - 2, 350 < e && (e = 350), a.nextButton_do && (e -= a.nextButton_do.w + a.spaceBetweenButtons), a.prevButton_do && (e -= a.prevButton_do.w + a.spaceBetweenButtons), a.shuffleButton_do && (e -= a.shuffleButton_do.w + a.spaceBetweenButtons), a.loopButton_do && (e -= a.loopButton_do.w + a.spaceBetweenButtons);
				for (var s = 0; s < a.totalButtons; s++) t = a.buttons_ar[a.totalButtons - 1 - s], o = a.buttons_ar[a.totalButtons - s], 0 == s ? t.setX(a.sW - t.w - a.startSpaceBetweenButtons) : t.setX(o.x - o.w - a.spaceBetweenButtons), t.setY(parseInt((a.controllBar_do.h - t.h) / 2))
			} else a.shuffleButton_do ? (a.shuffleButton_do.setX(a.spaceBetweenButtons), a.shuffleButton_do.setY(parseInt((a.controllBar_do.h - a.shuffleButton_do.h) / 2)), a.loopButton_do && (a.loopButton_do.setX(a.shuffleButton_do.x + a.shuffleButton_do.w + a.spaceBetweenButtons), a.loopButton_do.setY(parseInt((a.controllBar_do.h - a.shuffleButton_do.h) / 2)))) : a.loopButton_do && (a.loopButton_do.setX(a.spaceBetweenButtons), a.loopButton_do.setY(parseInt((a.controllBar_do.h - a.loopButton_do.h) / 2))), a.nextButton_do && (a.nextButton_do.setX(a.sW - a.nextButton_do.w - a.startSpaceBetweenButtons), a.nextButton_do.setY(parseInt((a.controllBar_do.h - a.nextButton_do.h) / 2)), a.prevButton_do.setX(a.nextButton_do.x - a.nextButton_do.w - a.spaceBetweenButtons), a.prevButton_do.setY(parseInt((a.controllBar_do.h - a.prevButton_do.h) / 2)));
			a.input_do && (a.input_do.setWidth(e), a.input_do.setX(a.startSpaceBetweenButtons), a.input_do.setY(parseInt((a.controllBar_do.h - a.input_do.getHeight()) / 2)), a.inputArrow_do.setX(parseInt(a.input_do.x + a.input_do.getWidth()) - a.inputArrow_do.w - 7), a.inputArrow_do.setY(parseInt((a.controllBar_do.h - a.inputArrow_do.h) / 2))), a.controllBar_do.setWidth(a.sW), a.controllBar_do.setY(a.sH - a.controllBar_do.h)
		}, a.setupPrevButton = function() {
			a.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), a.prevButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-FF-left'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), a.prevButton_do = new FWDUVPSimpleButton(a.prevN_img, n.prevSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), a.prevButton_do.screen.className = "fwduvp-prev-button", a.prevButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, a.prevButtonShowTooltipHandler), a.prevButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, a.prevButtonOnMouseUpHandler), a.buttons_ar.push(a.prevButton_do), a.controllBar_do.addChild(a.prevButton_do)
		}, a.prevButtonShowTooltipHandler = function(t) {
			a.showToolTip(a.prevButton_do, a.prevButtonToolTip_do, t.e)
		}, a.prevButtonOnMouseUpHandler = function() {
			a.dispatchEvent(o.PLAY_PREV_VIDEO)
		}, a.setupNextButton = function() {
			a.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), a.nextButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-FF-right'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), a.nextButton_do = new FWDUVPSimpleButton(a.nextN_img, n.nextSPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), a.nextButton_do.screen.className = "fwduvp-next-button", a.nextButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, a.nextButtonShowTooltipHandler), a.nextButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, a.nextButtonOnMouseUpHandler), a.buttons_ar.push(a.nextButton_do), a.controllBar_do.addChild(a.nextButton_do)
		}, a.nextButtonShowTooltipHandler = function(t) {
			a.showToolTip(a.nextButton_do, a.nextButtonToolTip_do, t.e)
		}, a.nextButtonOnMouseUpHandler = function() {
			a.dispatchEvent(o.PLAY_NEXT_VIDEO)
		}, a.setupShuffleButton = function() {
			a.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), a.shuffleButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-shuffle'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), a.shuffleButton_do = new FWDUVPSimpleButton(a.shuffleN_img, n.shufflePathS_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), a.shuffleButton_do.screen.className = "fwduvp-shuffle-button", a.shuffleButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, a.shuffleButtonShowToolTipHandler), a.shuffleButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, a.shuffleButtonOnMouseUpHandler), a.buttons_ar.push(a.shuffleButton_do), a.controllBar_do.addChild(a.shuffleButton_do), !a.loop_bl && a.shuffle_bl && a.setShuffleButtonState("selected")
		}, a.shuffleButtonShowToolTipHandler = function(t) {
			a.showToolTip(a.shuffleButton_do, a.shuffleButtonToolTip_do, t.e)
		}, a.shuffleButtonOnMouseUpHandler = function() {
			a.shuffleButton_do.isSelectedFinal_bl ? a.dispatchEvent(o.DISABLE_SHUFFLE) : a.dispatchEvent(o.ENABLE_SHUFFLE)
		}, a.setShuffleButtonState = function(e) {
			a.shuffleButton_do && ("selected" == e ? a.shuffleButton_do.setSelected() : "unselected" == e && a.shuffleButton_do.setUnselected())
		}, a.setupLoopButton = function() {
			a.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), a.loopButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-loop'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), a.loopButton_do = new FWDUVPSimpleButton(a.replayN_img, n.replaySPath_str, void 0, !0, n.useHEX, n.nBC, n.sBC)), a.loopButton_do.screen.className = "fwduvp-loop-button", a.loopButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, a.loopButtonShowTooltipHandler), a.loopButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, a.loopButtonOnMouseUpHandler), a.buttons_ar.push(a.loopButton_do), a.controllBar_do.addChild(a.loopButton_do), a.loop_bl && a.setLoopStateButton("selected")
		}, a.loopButtonShowTooltipHandler = function(t) {
			a.showToolTip(a.loopButton_do, a.loopButtonToolTip_do, t.e)
		}, a.loopButtonOnMouseUpHandler = function() {
			a.loopButton_do.isSelectedFinal_bl ? a.dispatchEvent(o.DISABLE_LOOP) : a.dispatchEvent(o.ENABLE_LOOP)
		}, a.setLoopStateButton = function(e) {
			a.loopButton_do && ("selected" == e ? a.loopButton_do.setSelected() : "unselected" == e && a.loopButton_do.setUnselected())
		}, a.setupToolTips = function() {
			a.showNextAndPrevButtons_bl && (FWDUVPToolTip.setPrototype(), a.prevButtonToolTip_do = new FWDUVPToolTip(a.prevButton_do, n.toopTipBk_str, n.toopTipPointer_str, "previous video", n.buttonsToolTipFontColor_str, a.buttonsToolTipHideDelay), document.documentElement.appendChild(a.prevButtonToolTip_do.screen), FWDUVPToolTip.setPrototype(), a.nextButtonToolTip_do = new FWDUVPToolTip(a.nextButton_do, n.toopTipBk_str, n.toopTipPointer_str, "next video", n.buttonsToolTipFontColor_str, a.buttonsToolTipHideDelay), document.documentElement.appendChild(a.nextButtonToolTip_do.screen)), a.showShuffleButton_bl && (FWDUVPToolTip.setPrototype(), a.shuffleButtonToolTip_do = new FWDUVPToolTip(a.shuffleButton_do, n.toopTipBk_str, n.toopTipPointer_str, "shuffle", n.buttonsToolTipFontColor_str, a.buttonsToolTipHideDelay), document.documentElement.appendChild(a.shuffleButtonToolTip_do.screen)), a.showLoopButton_bl && (FWDUVPToolTip.setPrototype(), a.loopButtonToolTip_do = new FWDUVPToolTip(a.loopButton_do, n.toopTipBk_str, n.toopTipPointer_str, "loop", n.buttonsToolTipFontColor_str, a.buttonsToolTipHideDelay), document.documentElement.appendChild(a.loopButtonToolTip_do.screen))
		}, a.showToolTip = function(t, o, s) {
			if (a.showButtonsToolTip_bl) {
				var e = FWDUVPUtils.getViewportSize(),
					n = FWDUVPUtils.getViewportMouseCoordinates(s),
					i, d;
				3 > t.screen.offsetWidth ? (i = parseInt(100 * t.getGlobalX() + t.w / 2 - o.w / 2), d = parseInt(100 * t.getGlobalY() - o.h - 8)) : (i = parseInt(t.getGlobalX() + t.w / 2 - o.w / 2), d = parseInt(t.getGlobalY() - o.h - 8));
				var r = 0;
				0 > i ? (r = i, i = 0) : i + o.w > e.w && (r = -1 * (e.w - (i + o.w)), i += -1 * r), o.positionPointer(r, !1), o.setX(i), o.setY(d), o.show()
			}
		}, a.setupThumbnails = function() {
			a.totalThumbs = a.playlist_ar.length, a.thumbs_ar = [];
			var e = n.thumbnailNormalBackgroundColor_str,
				o = n.thumbnailHoverBackgroundColor_str,
				s = n.thumbnailDisabledBackgroundColor_str,
				d;
			t.isWhite && (e = "#FFFFFF", o = s = "#EEEEEE");
			for (var r = 0; r < a.totalThumbs; r++) FWDUVPPlaylistThumb.setPrototype(), d = new FWDUVPPlaylistThumb(a, r, n.playlistThumbnailsBkPath_str, e, o, s, a.thumbImageW, a.thumbImageH, a.thumbInPadding, a.playlist_ar[r].title, a.playlist_ar[r].titleText, a.showThumbnail_bl), a.thumbs_ar[r] = d, d.addListener(FWDUVPPlaylistThumb.MOUSE_UP, a.thumbMouseUpHandler), a.thumbsHolder_do.addChild(d)
		}, a.thumbMouseUpHandler = function(t) {
			a.disableThumbs_bl || (a.disableForAWhileAfterThumbClick_bl = !0, clearTimeout(a.disableForAWhileAfterThumbClickId_to), a.disableForAWhileAfterThumbClickId_to = setTimeout(function() {
				a.disableForAWhileAfterThumbClick_bl = !1
			}, 200), a.dispatchEvent(o.THUMB_MOUSE_UP, {
				id: t.id
			}))
		}, a.loadImages = function() {
			a.playlist_ar[a.countLoadedThumbs] && (a.image_img && (a.image_img.onload = null, a.image_img.onerror = null), a.image_img = new Image, a.image_img.onerror = a.onImageLoadError, a.image_img.onload = a.onImageLoadComplete, a.image_img.src = a.playlist_ar[a.countLoadedThumbs].thumbSource)
		}, a.onImageLoadError = function() {}, a.onImageLoadComplete = function() {
			var e = a.thumbs_ar[a.countLoadedThumbs];
			e.setImage(a.image_img), a.countLoadedThumbs++, a.loadWithDelayId_to = setTimeout(a.loadImages, 40)
		}, a.checkThumbsState = function() {
			if (a.thumbs_ar)
				for (var e = 0, t; e < a.totalThumbs; e++) t = a.thumbs_ar[e], e == a.curId ? t.disable() : t.enable()
		}, a.positionThumbs = function(e) {
			if (a.thumbs_ar) {
				var t = a.spaceBetweenThumbnails,
					o = [].concat(a.thumbs_ar),
					s, n;
				if (a.isSearched_bl = !1, a.input_do && (n = a.input_do.screen.value.toLowerCase(), n.toLowerCase() != "Search".toLowerCase()))
					for (var d = 0; d < o.length; d++) s = o[d], -1 == s.htmlText_str.indexOf(n) && (FWDAnimation.killTweensOf(s), s.setX(-s.w - 20), o.splice(d, 1), d--);
				var r = o.length;
				a.totalThumbs != r && (a.isSearched_bl = !0);
				for (var d = 0; d < r; d++) s = o[d], s.thumbImageWidth = a.thumbImageW, s.thumbImageHeight = a.thumbImageH, s.finalW = a.sW, s.finalX = 0, s.finalY = d * (s.finalH + t), s.resizeAndPosition(e);
				0 == r ? a.showNothingFound() : a.hideNothingFound(), s && (a.totalThumbsHeight = Math.max(0, r * (s.h + a.spaceBetweenThumbnails) - a.spaceBetweenThumbnails), a.allowToScrollAndScrollBarIsActive_bl = !!(a.totalThumbsHeight > a.sH - a.removeFromThumbsHolderHeight))
			}
		}, a.setupMobileScrollbar = function() {
			a.isMbl && (a.hasPointerEvent_bl ? a.mainThumbsHolder_do.screen.addEventListener("pointerdown", a.scrollBarTouchStartHandler) : a.mainThumbsHolder_do.screen.addEventListener("touchstart", a.scrollBarTouchStartHandler))
		}, a.scrollBarTouchStartHandler = function(o) {
			a.isScrollingOnMove_bl = !1, FWDAnimation.killTweensOf(a.thumbsHolder_do);
			var e = FWDUVPUtils.getViewportMouseCoordinates(o);
			a.isDragging_bl = !0, a.thumbsFinalY = a.lastThumbsFinalY = a.thumbsHolder_do.y, a.lastPresedY = a.lastPresedY2 = e.screenY, a.startToUpdateDrag(), a.hasPointerEvent_bl ? (t.addEventListener("pointerup", a.scrollBarTouchEndHandler), t.addEventListener("pointermove", a.scrollBarTouchMoveHandler)) : (t.addEventListener("touchend", a.scrollBarTouchEndHandler), t.addEventListener("touchmove", a.scrollBarTouchMoveHandler, {
				passive: !1
			}))
		}, a.scrollBarTouchMoveHandler = function(t) {
			if ((t.preventDefault && t.preventDefault(), t.stopImmediatePropagation(), !(a.totalThumbsHeight < a.mainThumbsHolder_do.h)) && !(a.comboBox_do && a.comboBox_do.isShowed_bl)) {
				var e = FWDUVPUtils.getViewportMouseCoordinates(t),
					o = e.screenY - a.lastPresedY;
				a.thumbsFinalY += o, a.thumbsFinalY = Math.round(a.thumbsFinalY);
				var n = e.screenY - a.lastPresedY2;
				a.lastPresedY = e.screenY, 5 < Math.abs(n) && s.showDisable(), FWDAnimation.killTweensOf(a.thumbsHolder_do), a.thumbsHolder_do.setY(a.thumbsFinalY)
			}
		}, a.scrollBarTouchEndHandler = function() {
			a.isDragging_bl = !1, clearTimeout(a.disableOnMoveId_to), a.disableOnMoveId_to = setTimeout(function() {
				s.hideDisable()
			}, 50), a.hasPointerEvent_bl ? (t.removeEventListener("pointerup", a.scrollBarTouchEndHandler), t.removeEventListener("pointermove", a.scrollBarTouchMoveHandler)) : (t.removeEventListener("touchend", a.scrollBarTouchEndHandler), t.removeEventListener("touchmove", a.scrollBarTouchMoveHandler))
		}, a.stopToUpdateDrag = function() {
			FWDAnimation.killTweensOf(a.thumbsHld_do), cancelAnimationFrame(a.updateMov_af)
		}, a.startToUpdateDrag = function() {
			a.stopToUpdateDrag(), a.updateDrag()
		}, a.updateDrag = function() {
			a.updateMov_af = requestAnimationFrame(a.updateDrag), a.isDragging_bl ? (a.vy = a.thumbsFinalY - a.lastThumbsFinalY, a.lastThumbsFinalY = a.thumbsFinalY, 20 > Math.abs(a.vy) && (a.vy = 0)) : (a.vy *= a.friction, a.thumbsFinalY += a.vy, a.mainThumbsHolder_do.h <= a.totalThumbsHeight && (0 < a.thumbsFinalY ? (a.vy2 = .3 * (0 - a.thumbsFinalY), a.vy *= a.friction, a.thumbsFinalY += a.vy2) : a.thumbsFinalY <= a.mainThumbsHolder_do.h - a.totalThumbsHeight && (a.vy2 = .3 * (a.mainThumbsHolder_do.h - a.totalThumbsHeight - a.thumbsFinalY), a.vy *= a.friction, a.thumbsFinalY += a.vy2)), a.thumbsFinalY = parseFloat(a.thumbsFinalY.toFixed(2)), a.prevThumbsFinalY == a.thumbsFinalY && (a.stopToUpdateDrag(), a.thumbsFinalY = Math.round(a.thumbsFinalY)), FWDAnimation.killTweensOf(a.thumbsHolder_do), a.thumbsHolder_do.setY(a.thumbsFinalY), a.prevThumbsFinalY = a.thumbsFinalY)
		}, a.setupScrollbar = function() {
			a.scrMainHolder_do = new FWDUVPDisplayObject("div"), a.scrMainHolder_do.setWidth(a.scrWidth), a.scrTrack_do = new FWDUVPDisplayObject("div"), a.scrTrack_do.setWidth(a.scrWidth), a.scrTrackTop_do = new FWDUVPDisplayObject("img"), a.scrTrackTop_do.setScreen(a.scrBkTop_img), a.scrTrackMiddle_do = new FWDUVPDisplayObject("div"), a.scrTrackMiddle_do.getStyle().background = "url('" + n.scrBkMiddlePath_str + "')", a.scrTrackMiddle_do.setWidth(a.scrWidth), a.scrTrackMiddle_do.setY(a.scrTrackTop_do.h);
			var e = new Image;
			e.src = n.scrBkBottomPath_str, a.scrTrackBottom_do = new FWDUVPDisplayObject("img"), a.scrTrackBottom_do.setScreen(e), a.scrTrackBottom_do.setWidth(a.scrTrackTop_do.w), a.scrTrackBottom_do.setHeight(a.scrTrackTop_do.h), a.scrHandler_do = new FWDUVPDisplayObject("div"), a.scrHandler_do.setWidth(a.scrWidth), a.scrHandlerTop_do = new FWDUVPDisplayObject("img"), a.useHEX ? (a.scrHandlerTop_do = new FWDUVPDisplayObject("div"), a.scrHandlerTop_do.setWidth(a.scrDragTop_img.width), a.scrHandlerTop_do.setHeight(a.scrDragTop_img.height), a.mainScrubberDragTop_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.scrDragTop_img, a.nBC).canvas, a.scrHandlerTop_do.screen.appendChild(a.mainScrubberDragTop_canvas)) : (a.scrHandlerTop_do = new FWDUVPDisplayObject("img"), a.scrHandlerTop_do.setScreen(a.scrDragTop_img)), a.scrHandlerMiddle_do = new FWDUVPDisplayObject("div"), a.middleImage = new Image, a.middleImage.src = n.scrDragMiddlePath_str, a.useHEX ? a.middleImage.onload = function() {
				a.scrubberDragMiddle_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.middleImage, a.nBC, !0), a.scrubberDragImage_img = a.scrubberDragMiddle_canvas.image, a.scrHandlerMiddle_do.getStyle().background = "url('" + a.scrubberDragImage_img.src + "') repeat-y"
			} : a.scrHandlerMiddle_do.getStyle().background = "url('" + n.scrDragMiddlePath_str + "')", a.scrHandlerMiddle_do.setWidth(a.scrWidth), a.scrHandlerMiddle_do.setY(a.scrHandlerTop_do.h), a.scrHandlerBottom_do = new FWDUVPDisplayObject("div"), a.bottomImage = new Image, a.bottomImage.src = n.scrDragMiddlePath_str, a.useHEX ? a.bottomImage.onload = function() {
				a.scrubberDragBottom_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.bottomImage, a.nBC, !0), a.scrubberDragBottomImage_img = a.scrubberDragBottom_canvas.image, a.scrHandlerBottom_do.getStyle().background = "url('" + a.scrubberDragBottomImage_img.src + "') repeat-y"
			} : a.scrHandlerBottom_do.getStyle().background = "url('" + n.scrDragBottomPath_str + "')", a.scrHandlerBottom_do.setWidth(a.scrWidth), a.scrHandlerBottom_do.setY(a.scrHandlerTop_do.h), a.scrHandlerBottom_do.setWidth(a.scrHandlerTop_do.w), a.scrHandlerBottom_do.setHeight(a.scrHandlerTop_do.h), a.useHEX ? (a.scrHandlerLinesN_do = new FWDUVPDisplayObject("div"), a.scrHandlerLinesN_do.setWidth(a.scrLinesN_img.width), a.scrHandlerLinesN_do.setHeight(a.scrLinesN_img.height), a.mainhandlerN_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.scrLinesN_img, a.sBC).canvas, a.scrHandlerLinesN_do.screen.appendChild(a.mainhandlerN_canvas)) : (a.scrHandlerLinesN_do = new FWDUVPDisplayObject("img"), a.scrHandlerLinesN_do.setScreen(a.scrLinesN_img)), a.scrHandlerLinesS_img = new Image, a.scrHandlerLinesS_img.src = n.scrLinesSPath_str, a.useHEX ? (a.scrHandlerLinesS_do = new FWDUVPDisplayObject("div"), a.scrHandlerLinesS_img.onload = function() {
				a.scrHandlerLinesS_do.setWidth(a.scrHandlerLinesN_do.w), a.scrHandlerLinesS_do.setHeight(a.scrHandlerLinesN_do.h), a.scrubberLines_s_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.scrHandlerLinesS_img, a.sBC, !0), a.scrubbelinesSImage_img = a.scrubberLines_s_canvas.image, a.scrHandlerLinesS_do.getStyle().background = "url('" + a.scrubbelinesSImage_img.src + "') repeat-y"
			}) : (a.scrHandlerLinesS_do = new FWDUVPDisplayObject("img"), a.scrHandlerLinesS_do.setScreen(a.scrHandlerLinesS_img), a.scrHandlerLinesS_do.setWidth(a.scrHandlerLinesN_do.w), a.scrHandlerLinesS_do.setHeight(a.scrHandlerLinesN_do.h)), a.scrHandlerLinesS_do.setAlpha(0), a.scrHandlerLines_do = new FWDUVPDisplayObject("div"), a.scrHandlerLines_do.setWidth(a.scrHandlerLinesN_do.w), a.scrHandlerLines_do.setHeight(a.scrHandlerLinesN_do.h), a.scrTrack_do.addChild(a.scrTrackTop_do), a.scrTrack_do.addChild(a.scrTrackMiddle_do), a.scrTrack_do.addChild(a.scrTrackBottom_do), a.scrHandler_do.addChild(a.scrHandlerTop_do), a.scrHandler_do.addChild(a.scrHandlerMiddle_do), a.scrHandler_do.addChild(a.scrHandlerBottom_do), a.scrHandlerLines_do.addChild(a.scrHandlerLinesN_do), a.scrHandlerLines_do.addChild(a.scrHandlerLinesS_do), a.scrMainHolder_do.addChild(a.scrTrack_do), a.scrMainHolder_do.addChild(a.scrHandler_do), a.scrMainHolder_do.addChild(a.scrHandlerLines_do), a.mainHld.addChild(a.scrMainHolder_do), a.scrHandler_do.screen.addEventListener("mouseover", a.scrollBarHandlerOnMouseOver), a.scrHandler_do.screen.addEventListener("mouseout", a.scrollBarHandlerOnMouseOut), a.scrHandler_do.screen.addEventListener("mousedown", a.scrollBarHandlerOnMouseDown), a.scrHandlerLines_do.screen.addEventListener("mouseover", a.scrollBarHandlerOnMouseOver), a.scrHandlerLines_do.screen.addEventListener("mouseout", a.scrollBarHandlerOnMouseOut), a.scrHandlerLines_do.screen.addEventListener("mousedown", a.scrollBarHandlerOnMouseDown), a.addScrOnMM_bl && t.addEventListener("mousemove", a.scrOnMM)
		}, a.scrOnMM = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			FWDUVPUtils.hitTest(a.mainThumbsHolder_do.screen, e.screenX, e.screenY) ? (a.isDragging_bl = !0, a.scrollBarHandlerMoveHandler(t)) : a.isDragging_bl = !1
		}, a.scrollBarHandlerOnMouseOver = function() {
			!a.allowToScrollAndScrollBarIsActive_bl || a.addScrOnMM_bl || (FWDAnimation.killTweensOf(a.scrHandlerLinesN_do), FWDAnimation.killTweensOf(a.scrHandlerLinesS_do), FWDAnimation.to(a.scrHandlerLinesN_do, .8, {
				alpha: 0,
				ease: Expo.easeOut
			}), FWDAnimation.to(a.scrHandlerLinesS_do, .8, {
				alpha: 1,
				ease: Expo.easeOut
			}))
		}, a.scrollBarHandlerOnMouseOut = function() {
			a.isDragging_bl || !a.allowToScrollAndScrollBarIsActive_bl || (FWDAnimation.killTweensOf(a.scrHandlerLinesN_do), FWDAnimation.killTweensOf(a.scrHandlerLinesS_do), FWDAnimation.to(a.scrHandlerLinesN_do, .8, {
				alpha: 1,
				ease: Expo.easeOut
			}), FWDAnimation.to(a.scrHandlerLinesS_do, .8, {
				alpha: 0,
				ease: Expo.easeOut
			}))
		}, a.scrollBarHandlerOnMouseDown = function(o) {
			if (a.allowToScrollAndScrollBarIsActive_bl && !a.addScrOnMM_bl) {
				var e = FWDUVPUtils.getViewportMouseCoordinates(o);
				a.isDragging_bl = !0, a.yPositionOnPress = a.scrHandler_do.y, a.lastPresedY = e.screenY, FWDAnimation.killTweensOf(a.scrHandler_do), s.showDisable(), t.addEventListener && (t.addEventListener("mousemove", a.scrollBarHandlerMoveHandler), t.addEventListener("mouseup", a.scrollBarHandlerEndHandler))
			}
		}, a.scrollBarHandlerMoveHandler = function(t) {
			t.preventDefault && t.preventDefault();
			var e = FWDUVPUtils.getViewportMouseCoordinates(t),
				o = a.scrollBarHandlerFinalY + parseInt((a.scrHandler_do.h - a.scrHandlerLines_do.h) / 2);
			a.scrollBarHandlerFinalY = a.addScrOnMM_bl ? Math.round(e.screenY - a.mainThumbsHolder_do.getGlobalY() - a.scrHandler_do.h / 2) : Math.round(a.yPositionOnPress + e.screenY - a.lastPresedY), a.scrollBarHandlerFinalY >= a.scrTrack_do.h - a.scrHandler_do.h ? a.scrollBarHandlerFinalY = a.scrTrack_do.h - a.scrHandler_do.h : 0 >= a.scrollBarHandlerFinalY && (a.scrollBarHandlerFinalY = 0), a.scrHandler_do.setY(a.scrollBarHandlerFinalY), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.to(a.scrHandlerLines_do, .8, {
				y: o,
				ease: Quart.easeOut
			}), a.updateScrollBarHandlerAndContent(!0)
		}, a.scrollBarHandlerEndHandler = function(o) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(o);
			a.isDragging_bl = !1, FWDUVPUtils.hitTest(a.scrHandler_do.screen, e.screenX, e.screenY) || (FWDAnimation.killTweensOf(a.scrHandlerLinesN_do), FWDAnimation.killTweensOf(a.scrHandlerLinesS_do), FWDAnimation.to(a.scrHandlerLinesN_do, .8, {
				alpha: 1,
				ease: Expo.easeOut
			}), FWDAnimation.to(a.scrHandlerLinesS_do, .8, {
				alpha: 0,
				ease: Expo.easeOut
			})), s.hideDisable(), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.to(a.scrHandler_do, .4, {
				y: a.scrollBarHandlerFinalY,
				ease: Quart.easeOut
			}), t.removeEventListener && (t.removeEventListener("mousemove", a.scrollBarHandlerMoveHandler), t.removeEventListener("mouseup", a.scrollBarHandlerEndHandler))
		}, a.updateScrollBarSizeActiveAndDeactivate = function() {
			a.disableForAWhileAfterThumbClick_bl || (a.allowToScrollAndScrollBarIsActive_bl ? (a.allowToScrollAndScrollBarIsActive_bl = !0, a.scrMainHolder_do.setX(a.sW - a.scrMainHolder_do.w), a.scrMainHolder_do.setHeight(a.sH - a.removeFromThumbsHolderHeight), a.scrTrack_do.setHeight(a.scrMainHolder_do.h), a.scrTrackMiddle_do.setHeight(a.scrTrack_do.h - 2 * a.scrTrackTop_do.h), a.scrTrackBottom_do.setY(a.scrTrackMiddle_do.y + a.scrTrackMiddle_do.h), a.scrMainHolder_do.setAlpha(1), !a.addScrOnMM_bl && (a.scrHandler_do.setButtonMode(!0), a.scrHandlerLines_do.setButtonMode(!0))) : (a.allowToScrollAndScrollBarIsActive_bl = !1, a.scrMainHolder_do.setX(a.sW - a.scrMainHolder_do.w), a.scrMainHolder_do.setHeight(a.sH - a.removeFromThumbsHolderHeight), a.scrTrack_do.setHeight(a.scrMainHolder_do.h), a.scrTrackMiddle_do.setHeight(a.scrTrack_do.h - 2 * a.scrTrackTop_do.h), a.scrTrackBottom_do.setY(a.scrTrackMiddle_do.y + a.scrTrackMiddle_do.h), a.scrMainHolder_do.setAlpha(.5), a.scrHandler_do.setY(0), a.scrHandler_do.setButtonMode(!1), a.scrHandlerLines_do.setButtonMode(!1)), a.scrHandler_do.setHeight(Math.max(120, Math.round(Math.min(1, a.scrMainHolder_do.h / a.totalThumbsHeight) * a.scrMainHolder_do.h))), a.scrHandlerMiddle_do.setHeight(a.scrHandler_do.h - 2 * a.scrHandlerTop_do.h), a.scrHandlerBottom_do.setY(a.scrHandlerMiddle_do.y + a.scrHandlerMiddle_do.h), FWDAnimation.killTweensOf(a.scrHandlerLines_do), a.scrHandlerLines_do.setY(a.scrollBarHandlerFinalY + parseInt((a.scrHandler_do.h - a.scrHandlerLines_do.h) / 2)), a.scrHandlerBottom_do.setY(a.scrHandler_do.h - a.scrHandlerBottom_do.h))
		}, a.updateScrollBarHandlerAndContent = function(e, t) {
			if (!(a.isMbl && a.disableForAWhileAfterThumbClick_bl) && (a.allowToScrollAndScrollBarIsActive_bl || t)) {
				var o = 0;
				a.isDragging_bl && !a.isMbl ? (o = a.scrollBarHandlerFinalY / (a.scrMainHolder_do.h - a.scrHandler_do.h), "Infinity" == o ? o = 0 : 1 <= o && (o = 1), a.thumbsFinalY = -1 * Math.round(o * (a.totalThumbsHeight - a.mainThumbsHolder_do.h))) : (a.isSearched_bl ? (a.percentScrolled = 0, o = 0) : o = a.curId / (a.totalThumbs - 1), a.thumbsFinalY = Math.min(0, -1 * Math.round(o * (a.totalThumbsHeight - a.mainThumbsHolder_do.h))), a.scrMainHolder_do && (a.scrollBarHandlerFinalY = Math.round((a.scrMainHolder_do.h - a.scrHandler_do.h) * o), 0 > a.scrollBarHandlerFinalY ? a.scrollBarHandlerFinalY = 0 : a.scrollBarHandlerFinalY > a.scrMainHolder_do.h - a.scrHandler_do.h - 1 && (a.scrollBarHandlerFinalY = a.scrMainHolder_do.h - a.scrHandler_do.h - 1), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.killTweensOf(a.scrHandlerLines_do), e ? (FWDAnimation.to(a.scrHandler_do, .4, {
					y: a.scrollBarHandlerFinalY,
					ease: Quart.easeOut
				}), FWDAnimation.to(a.scrHandlerLines_do, .8, {
					y: a.scrollBarHandlerFinalY + parseInt((a.scrHandler_do.h - a.scrHandlerLinesN_do.h) / 2),
					ease: Quart.easeOut
				})) : (a.scrHandler_do.setY(a.scrollBarHandlerFinalY), a.scrHandlerLines_do.setY(a.scrollBarHandlerFinalY + parseInt((a.scrHandler_do.h - a.scrHandlerLinesN_do.h) / 2))))), a.lastThumbnailFinalY != a.thumbsFinalY && (FWDAnimation.killTweensOf(a.thumbsHolder_do), e ? FWDAnimation.to(a.thumbsHolder_do, .5, {
					y: a.thumbsFinalY,
					ease: Quart.easeOut
				}) : a.thumbsHolder_do.setY(a.thumbsFinalY)), a.lastThumbnailFinalY = a.thumbsFinalY
			}
		}, a.addMouseWheelSupport = function() {
			a.screen.addEventListener && (a.screen.addEventListener("DOMMouseScroll", a.mouseWheelHandler), a.screen.addEventListener("mousewheel", a.mouseWheelHandler))
		}, a.mouseWheelHandler = function(t) {
			if (t.preventDefault && t.preventDefault(), a.disableMouseWheel_bl || a.isDragging_bl) return !1;
			if (!(a.comboBox_do && a.comboBox_do.isShowed_bl)) {
				var e = t.detail || t.wheelDelta;
				t.wheelDelta && (e *= -1), 0 < e ? a.scrollBarHandlerFinalY += Math.round(160 * a.scollbarSpeedSensitivity * (a.mainThumbsHolder_do.h / a.totalThumbsHeight)) : 0 > e && (a.scrollBarHandlerFinalY -= Math.round(160 * a.scollbarSpeedSensitivity * (a.mainThumbsHolder_do.h / a.totalThumbsHeight))), a.scrollBarHandlerFinalY >= a.scrTrack_do.h - a.scrHandler_do.h ? a.scrollBarHandlerFinalY = a.scrTrack_do.h - a.scrHandler_do.h : 0 >= a.scrollBarHandlerFinalY && (a.scrollBarHandlerFinalY = 0);
				var o = a.scrollBarHandlerFinalY + parseInt((a.scrHandler_do.h - a.scrHandlerLines_do.h) / 2);
				return FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.killTweensOf(a.scrHandlerLines_do), FWDAnimation.to(a.scrHandlerLines_do, .8, {
					y: o,
					ease: Quart.easeOut
				}), FWDAnimation.to(a.scrHandler_do, .5, {
					y: a.scrollBarHandlerFinalY,
					ease: Quart.easeOut
				}), a.isDragging_bl = !0, a.updateScrollBarHandlerAndContent(!0), a.isDragging_bl = !1, !!t.preventDefault && void t.preventDefault()
			}
		}, a.hideAndShow = function() {
			"bottom" == a.position_str ? (a.mainHld.setY(-a.sH), FWDAnimation.to(a.mainHld, .8, {
				y: 0,
				delay: .3,
				ease: Expo.easeInOut
			})) : (a.mainHld.setX(-a.sW - 2), FWDAnimation.to(a.mainHld, .8, {
				x: 0,
				delay: .3,
				ease: Expo.easeInOut
			}), a.ec && (a.positionEc(), a.ec.setAlpha(0), FWDAnimation.to(a.ec, .8, {
				alpha: 1,
				delay: .3,
				ease: Expo.easeInOut
			})))
		}, a.hide = function(e) {
			a.isShowed_bl = !1, e ? "bottom" == a.position_str && FWDAnimation.to(a.mainHld, .8, {
				y: -a.sH,
				ease: Expo.easeInOut
			}) : (FWDAnimation.killTweensOf(a.mainHld), "bottom" == a.position_str && a.mainHld.setY(-a.sH))
		}, a.show = function(e) {
			a.isShowed_bl = !0, FWDAnimation.isTweening(a.mainHld) || a.hide(!1), e ? "bottom" == a.position_str ? FWDAnimation.to(a.mainHld, .8, {
				y: 0,
				ease: Expo.easeInOut
			}) : a.mainHld.setY(0) : (FWDAnimation.killTweensOf(a.mainHld), a.mainHld.setX(0), a.mainHld.setY(0), clearTimeout(a.disableThumbsId_to), a.disableThumbsId_to = setTimeout(function() {
				a.disableThumbs_bl = !1
			}, 200), a.disableThumbs_bl = !0)
		}, a.init()
	};
	o.setPrototype = function() {
		o.prototype = new FWDUVPDisplayObject("div", "absolute", "visible")
	}, o.THUMB_MOUSE_UP = "thumbMouseOut", o.PLAY_PREV_VIDEO = "playPrevVideo", o.PLAY_NEXT_VIDEO = "playNextVideo", o.DISABLE_LOOP = "disableLoop", o.ENABLE_LOOP = "enableLoop", o.DISABLE_SHUFFLE = "disableShuffle", o.ENABLE_SHUFFLE = "enableShuffle", o.CHANGE_PLAYLIST = "changePlaylist", o.prototype = null, t.FWDUVPPlaylist = o
}(window),
function(e) {
	var t = function(e, o, s, n, i, a, d, r, l, u, _, c) {
		'use strict';
		var p = this,
			h = t.prototype;
		p.backgroundImagePath_str = s, p.thumbnailNormalBackgroundColor_str = n, p.thumbnailHoverBackgroundColor_str = i, p.thumbnailDisabledBackgroundColor_str = a, p.htmlContent_str = u, p.htmlText_str = _.toLowerCase(), p.curStt = "none", p.id = o, p.padding = l, p.thumbImageWidth = d, p.thumbImageHeight = r, p.finalH = 2 * p.padding + p.thumbImageHeight, p.isDark = !0, -1 == s.indexOf("dark") && (p.isDark = !1), p.hasCanvas_bl = FWDUVPlayer.hasCanvas, p.isMbl = FWDUVPUtils.isMobile, p.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, p.showThumbnail_bl = c, p.init = function() {
			p.setupMainContainers(), p.setButtonMode(!0), p.setNormalState(), p.hasPointerEvent_bl ? (p.screen.addEventListener("pointerover", p.onMouseOver), p.screen.addEventListener("pointerout", p.onMouseOut), p.screen.addEventListener("pointerup", p.onMouseUp)) : p.screen.addEventListener && (p.screen.addEventListener("mouseover", p.onMouseOver), p.screen.addEventListener("mouseout", p.onMouseOut), p.screen.addEventListener("click", p.onMouseUp))
		}, p.onMouseUp = function(o) {
			p.isDisabled_bl || 2 == o.button || (o.preventDefault && o.preventDefault(), p.dispatchEvent(t.MOUSE_UP, {
				id: p.id
			}))
		}, p.onMouseOver = function(t) {
			if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
				if (p.isDisabled_bl) return;
				p.setSelectedState(!0)
			}
		}, p.onMouseOut = function(t) {
			if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
				if (p.isDisabled_bl) return;
				p.setNormalState(!0)
			}
		}, p.setupMainContainers = function() {
			p.mainImgHld = new FWDUVPDisplayObject("div"), p.mainImgHld.screen.className = "fwduvp-playlist-thumbnail", p.mainImgHld.getStyle().background = "url('" + p.backgroundImagePath_str + "')", p.mainImgHld.setX(p.padding), p.mainImgHld.setY(p.padding), p.mainImgHld.setWidth(p.thumbImageWidth), p.mainImgHld.setHeight(p.thumbImageHeight), p.imageHolder_do = new FWDUVPDisplayObject("div"), p.txt = new FWDUVPDisplayObject("div");
			var t = "fwduvp-playlist-thumbnail-white-text";
			p.isDark && (t = "fwduvp-playlist-thumbnail-dark-text"), p.txt.screen.className = t, p.txt.hasTransform3d_bl = !1, p.txt.hasTransform2d_bl = !1, p.txt.setHeight(p.finalH - 6), p.txt.setBackfaceVisibility(), p.txt.getStyle().fontFamily = "Arial", p.txt.getStyle().fontSize = "12px", p.txt.getStyle().color = p.fontColor_str, p.txt.getStyle().fontSmoothing = "antialiased", p.txt.getStyle().webkitFontSmoothing = "antialiased", p.txt.getStyle().textRendering = "optimizeLegibility", p.slTitle = p.txt.screen.className, p.showThumbnail_bl ? p.txt.setX(2 * p.padding + p.thumbImageWidth + 4) : p.txt.setX(2 * p.padding), p.txt.setInnerHTML(p.htmlContent_str), e.showOnlyThmb || p.addChild(p.txt), p.dumy_do = new FWDUVPDisplayObject("div"), p.dumy_do.getStyle().width = "100%", p.dumy_do.getStyle().height = "100%", FWDUVPUtils.isIE && (p.dumy_do.setBkColor("#FF0000"), p.dumy_do.setAlpha(.01)), p.showThumbnail_bl && p.addChild(p.mainImgHld), p.mainImgHld.addChild(p.imageHolder_do), p.addChild(p.dumy_do)
		}, p.updateText = function(e) {
			try {
				p.htmlContent_str = e, p.txt.setInnerHTML(p.htmlContent_str)
			} catch (t) {}
		}, p.setImage = function(t) {
			if (p.normalImage_do = new FWDUVPDisplayObject("img"), p.normalImage_do.setScreen(t), p.imageOriginalW = p.normalImage_do.w, p.imageOriginalH = p.normalImage_do.h, p.resizeImage(), p.imageHolder_do.setX(parseInt(p.thumbImageWidth / 2)), p.imageHolder_do.setY(parseInt(p.thumbImageHeight / 2)), p.imageHolder_do.setWidth(0), p.imageHolder_do.setHeight(0), p.normalImage_do.setX(-parseInt(p.normalImage_do.w / 2)), p.normalImage_do.setY(-parseInt(p.normalImage_do.h / 2)), FWDAnimation.to(p.imageHolder_do, .8, {
					x: 0,
					y: 0,
					w: p.thumbImageWidth,
					h: p.thumbImageHeight,
					ease: Expo.easeInOut
				}), p.normalImage_do.setAlpha(0), p.isMbl) {
				var o;
				o = p.id == e.curId ? .3 : 1, FWDAnimation.to(p.normalImage_do, .8, {
					alpha: o,
					x: p.imageFinalX,
					y: p.imageFinalY,
					ease: Expo.easeInOut
				})
			} else FWDAnimation.to(p.normalImage_do, .8, {
				alpha: 1,
				x: p.imageFinalX,
				y: p.imageFinalY,
				ease: Expo.easeInOut
			});
			p.imageHolder_do.addChild(p.normalImage_do), p.hasImage_bl = !0
		}, p.resizeAndPosition = function(e) {
			p.showThumbnail_bl ? p.txt.setWidth(p.finalW - (2 * p.padding + p.thumbImageWidth) - 16) : p.txt.setWidth(p.finalW - 2 * p.padding - 16), p.setWidth(p.finalW), p.setHeight(p.finalH), e ? FWDAnimation.to(p, .6, {
				x: p.finalX,
				y: p.finalY,
				ease: Expo.easeInOut
			}) : (FWDAnimation.killTweensOf(p), p.setX(p.finalX), p.setY(p.finalY)), p.resizeImage()
		}, p.resizeImage = function() {
			if (e.showOnlyThmb && (p.mainImgHld.setWidth(p.thumbImageWidth), p.mainImgHld.setHeight(p.thumbImageHeight), p.imageHolder_do.setWidth(p.thumbImageWidth), p.imageHolder_do.setHeight(p.thumbImageHeight)), !!p.normalImage_do) {
				p.isMbl ? 1 != p.normalImage_do.alpha && !p.isDisabled_bl && p.normalImage_do.setAlpha(1) : 1 != p.imageHolder_do.alpha && !p.isDisabled_bl && p.imageHolder_do.setAlpha(1);
				var t = p.thumbImageWidth / p.imageOriginalW,
					o = p.thumbImageHeight / p.imageOriginalH,
					s;
				s = t >= o ? t : o, p.imageFinalW = Math.ceil(s * p.imageOriginalW), p.imageFinalH = Math.ceil(s * p.imageOriginalH), p.imageFinalX = Math.round((p.thumbImageWidth - p.imageFinalW) / 2), p.imageFinalY = Math.round((p.thumbImageHeight - p.imageFinalH) / 2), p.normalImage_do.setX(p.imageFinalX), p.normalImage_do.setY(p.imageFinalY), p.normalImage_do.setWidth(p.imageFinalW), p.normalImage_do.setHeight(p.imageFinalH)
			}
		}, p.setNormalState = function(e) {
			"normal" == p.curStt || (p.curStt = "normal", p.slTitle && (p.txt.screen.className = p.slTitle), e ? FWDAnimation.to(p.screen, .8, {
				css: {
					backgroundColor: p.thumbnailNormalBackgroundColor_str
				},
				ease: Expo.easeOut
			}) : (FWDAnimation.killTweensOf(p.screen), p.getStyle().backgroundColor = p.thumbnailNormalBackgroundColor_str))
		}, p.setSelectedState = function(e) {
			"selected" == p.curStt || (p.curStt = "selected", p.setTitleSelectedClass(), e ? FWDAnimation.to(p.screen, .8, {
				css: {
					backgroundColor: p.thumbnailHoverBackgroundColor_str
				},
				ease: Expo.easeOut
			}) : (FWDAnimation.killTweensOf(p.screen), p.getStyle().backgroundColor = p.thumbnailNormalBackgroundColor_str))
		}, p.setDisabledState = function(e) {
			"disabled" == p.curStt || (p.curStt = "disabled", p.setTitleSelectedClass(), e ? FWDAnimation.to(p.screen, .8, {
				css: {
					backgroundColor: p.thumbnailDisabledBackgroundColor_str
				},
				ease: Expo.easeOut
			}) : (FWDAnimation.killTweensOf(p.screen), p.getStyle().backgroundColor = p.thumbnailNormalBackgroundColor_str))
		}, p.setTitleSelectedClass = function() {
			p.slTitle && (p.txt.screen.className = p.slTitle + " active")
		}, p.enable = function() {
			p.isDisabled_bl && (p.isDisabled_bl = !1, p.setButtonMode(!0), p.setNormalState(!0), p.isMbl ? p.normalImage_do && p.normalImage_do.setAlpha(1) : FWDAnimation.to(p.imageHolder_do, .6, {
				alpha: 1
			}))
		}, p.disable = function() {
			p.isDisabled_bl || (p.disableForAWhile_bl = !0, clearTimeout(p.disableForAWhileId_to), p.disableForAWhileId_to = setTimeout(function() {
				p.disableForAWhile_bl = !1
			}, 200), p.isDisabled_bl = !0, p.setButtonMode(!1), p.setDisabledState(!0), p.isMbl ? p.normalImage_do && p.normalImage_do.setAlpha(.3) : FWDAnimation.to(p.imageHolder_do, .6, {
				alpha: .3
			}))
		}, p.destroy = function() {
			FWDAnimation.killTweensOf(p), p.normalImage_do && (FWDAnimation.killTweensOf(p.normalImage_do), p.normalImage_do.destroy()), FWDAnimation.killTweensOf(p.imageHolder_do), p.imageHolder_do.destroy(), p.dumy_do.destroy(), p.txt.destroy(), p.backgroundImagePath_str = s, p.imageHolder_do = null, p.normalImage_do = null, p.dumy_do = null, p.txt = null, p.htmlContent_str = null, p.htmlText_str = null, p.curStt = null
		}, p.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.SHOW_TOOL_TIP = "showToolTip", t.HIDE_TOOL_TIP = "hideToolTip", t.MOUSE_UP = "onMouseUp", t.prototype = null, e.FWDUVPPlaylistThumb = t
}(window),
function() {
	var e = function(t, o, s, n, i, a, d, r, l, u, _, c, p, h, b, m, g, y, S) {
		'use strict';
		var v = this,
			f = e.prototype;
		v.clsBtn, v.image_do, v.imgSrc = o, v.link = i, v.target = a, v.start = s, v.end = n, v.google_ad_client = l, v.google_ad_slot = u, v.originalW = v.google_ad_width = _, v.originalH = v.google_ad_height = c, v.tracking = p, v.finalW = 0, v.finalH = 0, v.type = !v.google_ad_client ? v.imgSrc.match(/.png|.jpg|.jpeg/ig) ? "image" : "iframe" : "adsense", v.id = r, v.shwPpoppAdClsBtn = m, v.poppAdClsNPth = h, v.poppAdClsSPth = b, v.isClsd = d, v.isLded = !1, v.isShowed_bl = !1, v.init = function() {
			v.setBkColor("rgba(0, 0, 0, 0.6)"), v.setX(-5e3);
			var e = v.poppAdClsNPth;
			window.isWhite && (e = "content/hex_white/close-button-normal.png"), v.shwPpoppAdClsBtn && (FWDUVPSimpleSizeButton.setPrototype(), v.clsBtn = new FWDUVPSimpleSizeButton(e, v.poppAdClsSPth, 22, 21, g, y, S, !0), v.clsBtn.addListener(FWDUVPSimpleSizeButton.MOUSE_UP, v.closeClickButtonCloseHandler)), "image" == v.type ? (v.image = new Image, v.image.src = v.imgSrc, v.image.onload = v.onLoadHandler) : (v.isLded = !0, v.setWidth(v.originalW), v.setHeight(v.originalH)), v.clsBtn && (v.addChild(v.clsBtn), v.clsBtn.setX(-300)), v.link && v.setButtonMode(!0)
		}, v.closeClickButtonCloseHandler = function() {
			v.hide(), v.isClsd = !0, t.popupAds_ar[v.id].isClosed = !0
		}, v.clickHandler = function() {
			v.link && (t.prt.pause(), window.open(v.link, v.target))
		}, v.onLoadHandler = function() {
			v.originalW = v.image.width, v.originalH = v.image.height, v.image_do = new FWDUVPDisplayObject("img"), v.image_do.setScreen(v.image), v.image_do.setWidth(v.originalW), v.image_do.setHeight(v.originalH), v.addChild(v.image_do), v.isLded = !0, v.clsBtn && (v.addChild(v.clsBtn), v.clsBtn.setX(-300)), v.screen.addEventListener ? v.image_do.screen.addEventListener("click", v.clickHandler) : v.image_do.screen.attachEvent("onclick", v.clickHandler)
		}, v.hide = function(e) {
			if (v.isShowed_bl) {
				v.isShowed_bl = !1;
				var o = Math.min(1, t.prt.tempVidStageWidth / v.originalW),
					s = parseInt(o * v.originalH),
					n = parseInt(t.prt.tempVidStageHeight);
				t.setY(n), v.setX(-5e3), FWDAnimation.killTweensOf(t), e ? (t.removeChild(v), t.setWidth(0), t.setHeight(0)) : (v.setWidth(0), v.setHeight(0), t.setVisible(!1), v.setVisible(!1))
			}
		}, v.show = function() {
			v.isShowed_bl || v.isClsd || !v.isLded || (v.isShowed_bl = !0, v.setX(0), setTimeout(function() {
				if (FWDAnimation.killTweensOf(t), t.setVisible(!0), v.setVisible(!0), "adsense" == v.type && !v.isGooglAdCreated_bl) {
					v.isGooglAdCreated_bl = !0, window.google_ad_client = v.google_ad_client, window.google_ad_slot = v.google_ad_slot, window.google_ad_width = v.originalW, window.google_ad_height = v.originalH, v.container = new FWDUVPTransformDisplayObject("div"), v.container.setWidth(v.originalW), v.container.setHeight(v.originalH), v.addChild(v.container);
					var e = document.write;
					document.write = function(t) {
						v.container.screen.innerHTML = t, document.write = e
					};
					var o = document.createElement("script");
					o.type = "text/javascript", o.src = -1 == location.href.indexOf("https") ? "http://pagead2.googlesyndication.com/pagead/show_ads.js" : "https://pagead2.googlesyndication.com/pagead/show_ads.js", document.body.appendChild(o), v.clsBtn && (v.addChild(v.clsBtn), v.clsBtn.setX(-300))
				} else "iframe" == v.type && (v.container = new FWDUVPTransformDisplayObject("div"), v.container.setWidth(v.originalW), v.container.setHeight(v.originalH), v.ifr = new FWDUVPTransformDisplayObject("iframe"), v.ifr.screen.scrolling = "no", v.ifr.setWidth(v.originalW), v.ifr.setHeight(v.originalH), v.ifr.screen.src = v.imgSrc, v.container.addChild(v.ifr), v.link && (v.clicker = new FWDUVPDisplayObject("div"), v.clicker.screen.style.width = "100%", v.clicker.screen.style.height = "100%", v.container.addChild(v.clicker), v.container.addChild(v.clicker), v.container.screen.addEventListener("click", v.clickHandler)), v.addChild(v.container), v.clsBtn && (v.addChild(v.clsBtn), v.clsBtn.setX(-300)));
				var s = Math.min(1, t.prt.tempVidStageWidth / v.originalW),
					n = parseInt(s * v.originalH) - 2;
				if (t.prt.controller_do.isShowed_bl) var i = parseInt(t.prt.tempVidStageHeight - t.prt.controller_do.h - v.originalH * s + 2 + n);
				else var i = parseInt(t.prt.tempVidStageHeight - v.originalH * s + 2 + n);
				t.setY(i), v.resizeAndPosition(!0)
			}, 100))
		}, v.resizeAndPosition = function(e) {
			if (v.isLded && !v.isClsd && v.isShowed_bl) {
				var o = !FWDUVPUtils.isIEAndLessThen9,
					s = 1,
					n;
				s = Math.min(1, t.prt.tempVidStageWidth / v.originalW), v.finalW = parseInt(s * v.originalW), v.finalH = parseInt(s * v.originalH), v.finalW == v.prevFinalW && v.finalH == v.prevFinalH || (v.setWidth(v.finalW), v.setHeight(v.finalH), "image" == v.type ? (v.image_do.setWidth(v.finalW), v.image_do.setHeight(v.finalH)) : v.container && (v.container.setScale2(s), v.container.setX((v.finalW - v.originalW) / 2), v.container.setY((v.finalH - v.originalH) / 2)), n = t.prt.controller_do ? t.prt.controller_do.isShowed_bl ? parseInt(t.prt.tempVidStageHeight - t.prt.controller_do.h - v.originalH * s - 10) : parseInt(t.prt.tempVidStageHeight - v.originalH * s - 10) : parseInt(t.prt.tempVidStageHeight - v.originalH * s), t.setX(parseInt((t.prt.tempVidStageWidth - v.finalW) / 2)), FWDAnimation.killTweensOf(t), e ? FWDAnimation.to(t, .8, {
					y: n,
					ease: Expo.easeInOut
				}) : t.setY(n), v.clsBtn && (v.clsBtn.setY(5), v.clsBtn.setX(parseInt(v.finalW - 21 - 5))), v.prevFinalW = v.finalW, v.prevFinallH = v.finalH, t.setWidth(v.finalW), t.setHeight(v.finalH))
			}
		}, v.init()
	};
	e.setPrototype = function() {
		e.prototype = new FWDUVPDisplayObject("div", "absolute", "visible")
	}, e.MOUSE_OVER = "onMouseOver", e.MOUSE_OUT = "onMouseOut", e.CLICK = "onClick", e.prototype = null, window.FWDUVPPopupAddButton = e
}(window),
function(e) {
	var t = function(e, o, s) {
		'use strict';
		var n = this,
			i = t.prototype;
		n.img_img = new Image, n.img_do = null, n.imgW = 0, n.imgH = 0, n.finalW = 0, n.finalH = 0, n.finalX = 0, n.finalY = 0, n.curPath_str, n.posterBackgroundColor_str = s, n.isTransparent_bl = !1, n.showPoster_bl = o, n.showOrLoadOnMobile_bl = !1, n.isShowed_bl = !0, n.allowToShow_bl = !0, n.isMbl = FWDUVPUtils.isMobile, n.init = function() {
			n.img_img = new Image, n.img_do = new FWDUVPDisplayObject("img"), n.hide()
		}, n.positionAndResize = function() {
			if (e.vidStageWidth && (n.setWidth(e.tempVidStageWidth), n.setHeight(e.tempVidStageHeight), !!n.imgW)) {
				var t = e.tempVidStageWidth / n.imgW,
					o = e.tempVidStageHeight / n.imgH,
					s;
				s = t <= o ? t : o, e._d.fillEntireposterScreen_bl && (t >= o ? s = t : s = o), n.finalW = Math.round(s * n.imgW), n.finalH = Math.round(s * n.imgH), n.finalX = parseInt((e.tempVidStageWidth - n.finalW) / 2), n.finalY = parseInt((e.tempVidStageHeight - n.finalH) / 2), n.img_do.setX(n.finalX), n.img_do.setY(n.finalY), n.img_do.setWidth(n.finalW), n.img_do.setHeight(n.finalH)
			}
		}, n.setPoster = function(t) {
			if (n.id != e.id && t) {
				if (n.id = e.id, t && "" == FWDUVPUtils.trim(t) || "none" == t) return n.showOrLoadOnMobile_bl = !0, n.isTransparent_bl = !0, void n.show();
				if ("youtubemobile" == t && n.isMbl) return n.isTransparent_bl = !1, n.showOrLoadOnMobile_bl = !1, n.img_img.src = null, void(n.imgW = 0);
				t == n.curPath_str ? (n.isTransparent_bl = !1, n.showOrLoadOnMobile_bl = !0) : n.isTransparent_bl = !1, n.getStyle().backgroundColor = n.isTransparent_bl ? "transparent" : n.posterBackgroundColor_str, n.isTransparent_bl = !1, n.showOrLoadOnMobile_bl = !0, n.curPath_str = t, n.allowToShow_bl && (n.isShowed_bl = !1);
				try {
					n.removeChild(n.img_do)
				} catch (t) {}
				n.img_img = new Image, n.img_img.onload = n.posterLoadHandler, n.img_img.src = n.curPath_str
			}
		}, n.posterLoadHandler = function() {
			n.imgW = n.img_img.width, n.imgH = n.img_img.height, n.img_do.setScreen(n.img_img), n.addChild(n.img_do), n.positionAndResize(), n.isShowed_bl && n.show()
		}, n.show = function() {
			n.allowToShow_bl && !n.isShowed_bl && n.showOrLoadOnMobile_bl && (n.isShowed_bl = !0, n.isTransparent_bl ? 0 != n.alpha && n.setAlpha(0) : 1 != n.alpha && n.setAlpha(1), n.setVisible(!0), !n.isMbl && !n.isTransparent_bl && (FWDAnimation.killTweensOf(n), n.setAlpha(0), FWDAnimation.to(n, .6, {
				alpha: 1,
				delay: .4
			})), n.positionAndResize())
		}, n.hide = function(e) {
			(n.isShowed_bl || e) && (FWDAnimation.killTweensOf(n), n.isShowed_bl = !1, n.setVisible(!1))
		}, n.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.prototype = null, e.FWDUVPPoster = t
}(window),
function(e) {
	var t = function(e, o, s, n, i, a, d) {
		'use strict';
		var r = this,
			l = t.prototype;
		r.preloaderPostion = o, r.backgroundColor = n, r.fillColor = i, r.radius = s, r.strokeSize = a, r.animDuration = d || 300, r.strtAngle = 270, r.countAnimation = 0, r.isShowed_bl = !0, r.slideshowAngle = {
			n: 0
		}, r.init = function() {
			r.main_do = new FWDUVPDisplayObject("div"), r.main_do.setOverflow("visible"), r.main_do.setWidth(2 * r.radius + r.strokeSize), r.main_do.setHeight(2 * r.radius + r.strokeSize), r.addChild(r.main_do), r.setOverflow("visible"), r.setWidth(2 * r.radius + r.strokeSize), r.setHeight(2 * r.radius + r.strokeSize), r.bkCanvas = new FWDUVPDisplayObject("canvas"), r.bkCanvasContext = r.bkCanvas.screen.getContext("2d"), r.fillCircleCanvas = new FWDUVPDisplayObject("canvas"), r.fillCircleCanvasContext = r.fillCircleCanvas.screen.getContext("2d"), r.main_do.screen.style.transformOrigin = "50% 50%", r.main_do.addChild(r.bkCanvas), r.main_do.addChild(r.fillCircleCanvas), r.drawBackground(), r.drawFill(), r.hide()
		}, r.positionAndResize = function() {
			"bottomleft" == r.preloaderPostion ? (r.setX(e.offsetPreloader), r.setY(e.sH - r.h - e.offsetPreloader)) : "bottomright" == r.preloaderPostion ? (r.setX(e.sW - r.w - e.offsetPreloader), r.setY(e.sH - r.h - e.offsetPreloader)) : "topright" == r.preloaderPostion ? (r.setX(e.sW - r.w - e.offsetPreloader), r.setY(e.offsetPreloader)) : "topleft" == r.preloaderPostion ? (r.setX(e.offsetPreloader), r.setY(e.offsetPreloader)) : "center" == r.preloaderPostion && (r.setX(Math.round(e.sW - r.w) / 2), r.setY(Math.round(Math.min(e.sH, e.viewportSize.h) - r.h) / 2))
		}, r.drawBackground = function() {
			r.bkCanvas.screen.width = 2 * r.radius + 2 * r.strokeSize, r.bkCanvas.screen.height = 2 * r.radius + 2 * r.strokeSize, r.bkCanvasContext.lineWidth = r.thicknessSize, r.bkCanvasContext.translate(r.strokeSize / 2, r.strokeSize / 2), r.bkCanvasContext.shadowColor = "#333333", r.bkCanvasContext.shadowBlur = 1, r.bkCanvasContext.lineWidth = r.strokeSize, r.bkCanvasContext.strokeStyle = r.backgroundColor, r.bkCanvasContext.beginPath(), r.bkCanvasContext.arc(r.radius, r.radius, r.radius, 0 * (Math.PI / 180), 360 * (Math.PI / 180), !1), r.bkCanvasContext.stroke(), r.bkCanvasContext.closePath()
		}, r.drawFill = function() {
			r.fillCircleCanvas.screen.width = 2 * r.radius + 2 * r.strokeSize, r.fillCircleCanvas.screen.height = 2 * r.radius + 2 * r.strokeSize, r.fillCircleCanvasContext.lineWidth = r.thicknessSize, r.fillCircleCanvasContext.translate(r.strokeSize / 2, r.strokeSize / 2), r.fillCircleCanvasContext.lineWidth = r.strokeSize, r.fillCircleCanvasContext.strokeStyle = r.fillColor, r.fillCircleCanvasContext.beginPath(), r.fillCircleCanvasContext.arc(r.radius, r.radius, r.radius, Math.PI / 180 * r.strtAngle, Math.PI / 180 * (r.strtAngle + r.slideshowAngle.n), !1), r.fillCircleCanvasContext.stroke(), r.fillCircleCanvasContext.closePath()
		}, r.startSlideshow = function() {
			null == r || (FWDAnimation.killTweensOf(r.slideshowAngle), FWDAnimation.to(r.slideshowAngle, r.animDuration, {
				n: 360,
				onUpdate: r.drawFill,
				onComplete: r.stopSlideshow
			}))
		}, r.stopSlideshow = function() {
			FWDAnimation.killTweensOf(r.slideshowAngle), FWDAnimation.to(r.slideshowAngle, .8, {
				n: 0,
				onupdate: r.drawFill,
				onUpdate: r.drawFill,
				ease: Expo.easiInOut
			})
		}, r.startPreloader = function() {
			r.stopPreloader(), r.slideshowAngle = {
				n: 0
			}, FWDAnimation.to(r.slideshowAngle, r.animDuration, {
				n: 360,
				onUpdate: r.drawFill,
				repeat: 100,
				yoyo: !0,
				ease: Expo.easInOut
			}), FWDAnimation.to(r.main_do.screen, r.animDuration, {
				rotation: 360,
				repeat: 100
			})
		}, r.stopPreloader = function() {
			FWDAnimation.killTweensOf(r.slideshowAngle), FWDAnimation.killTweensOf(r.main_do.screen), FWDAnimation.to(r.main_do.screen, 1e-5, {
				rotation: 0
			})
		}, r.show = function() {
			r.isShowed_bl || (r.setVisible(!0), FWDAnimation.killTweensOf(r), FWDAnimation.to(r, 1, {
				alpha: 1,
				delay: .2
			}), r.stopPreloader(), r.startPreloader(), r.isShowed_bl = !0)
		}, r.hide = function(e) {
			r.isShowed_bl && (FWDAnimation.killTweensOf(r), e ? FWDAnimation.to(r, .2, {
				alpha: 0,
				onComplete: r.onHideComplete
			}) : (r.setVisible(!1), r.setAlpha(0)), r.isShowed_bl = !1)
		}, r.onHideComplete = function() {
			r.setVisible(!1), r.stopPreloader(), r.dispatchEvent(t.HIDE_COMPLETE)
		}, r.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.HIDE_COMPLETE = "hideComplete", t.prototype = null, e.FWDUVPPreloader = t
}(window),
function(e) {
	var t = function(e, o, s, n, i) {
		'use strict';
		var a = this,
			d = t.prototype;
		a.imageSource_img = e, a.segmentWidth = o, a.segmentHeight = s, a.totalSegments = n, a.animDelay = i || 300, a.count = 0, a.delayTimerId_int, a.isShowed_bl = !1, a.init = function() {
			a.setWidth(a.segmentWidth), a.setHeight(a.segmentHeight), a.image_sdo = new FWDUVPDisplayObject("img"), a.image_sdo.setScreen(a.imageSource_img), a.addChild(a.image_sdo), a.hide(!1)
		}, a.start = function() {
			null == a || (clearInterval(a.delayTimerId_int), a.delayTimerId_int = setInterval(a.updatePreloader, a.animDelay))
		}, a.stop = function() {
			clearInterval(a.delayTimerId_int)
		}, a.updatePreloader = function() {
			if (null != a) {
				a.count++, a.count > a.totalSegments - 1 && (a.count = 0);
				var e = a.count * a.segmentWidth;
				a.image_sdo.setX(-e)
			}
		}, a.show = function() {
			a.isShowed_bl || (a.setVisible(!0), a.start(), FWDAnimation.killTweensOf(a), FWDAnimation.to(a, 1, {
				alpha: 1,
				delay: .2
			}), a.isShowed_bl = !0)
		}, a.hide = function(e) {
			a.isShowed_bl && (FWDAnimation.killTweensOf(a), e ? FWDAnimation.to(a, 1, {
				alpha: 0,
				onComplete: a.onHideComplete
			}) : (a.setVisible(!1), a.setAlpha(0)), a.isShowed_bl = !1)
		}, a.onHideComplete = function() {
			a.setVisible(!1), a.stop(), a.dispatchEvent(t.HIDE_COMPLETE)
		}, a.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.HIDE_COMPLETE = "hideComplete", t.prototype = null, e.FWDUVPPreloader2 = t
}(window),
function(e) {
	var t = function(e, o) {
		'use strict';
		var s = this,
			n = t.prototype;
		s.prt = e, s.totalAds = 0, s.isMbl = FWDUVPUtils.isMobile, s.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, s.showSubByDflt = o.showSubByDflt, s.nBC = o.nBC, s.sBC = o.sBC, s.init = function() {
			-1 != o.sknPth.indexOf("hex_white") && (s.sBC = "#FFFFFF"), s.setOverflow("visible"), s.getStyle().cursor = "default", s.setVisible(!1)
		}, s.resetPopups = function(e, t) {
			if (s.id != t) {
				s.hideAllPopupButtons(!0), s.popupAds_ar = e, s.totalAds = s.popupAds_ar.length;
				var n;
				s.popupAdsButtons_ar = [];
				for (var a = 0; a < s.totalAds; a++) FWDUVPPopupAddButton.setPrototype(), n = new FWDUVPPopupAddButton(s, s.popupAds_ar[a].source, s.popupAds_ar[a].timeStart, s.popupAds_ar[a].timeEnd, s.popupAds_ar[a].link, s.popupAds_ar[a].trget, s.popupAds_ar[a].isClosed, a, s.popupAds_ar[a].google_ad_client, s.popupAds_ar[a].google_ad_slot, s.popupAds_ar[a].google_ad_width, s.popupAds_ar[a].google_ad_height, s.popupAds_ar[a].tracking, o.poppAdClsNPth, o.poppAdClsSPth, o.shwPpoppAdClsBtn, o.useHEX, s.nBC, s.sBC), s.popupAdsButtons_ar[a] = n, s.addChild(n)
			}
		}, s.update = function(e) {
			if (0 != s.totalAds)
				for (var t = 0, o; t < s.totalAds; t++) o = s.popupAdsButtons_ar[t], s.curAdId = t, e >= o.start && e < o.end ? o.show() : o.hide()
		}, s.position = function(e) {
			if (0 != s.totalAds)
				for (var t = 0, o; t < s.totalAds; t++) o = s.popupAdsButtons_ar[t], o.resizeAndPosition(e)
		}, s.hideAllPopupButtons = function(e) {
			if (0 != s.totalAds) {
				for (var t = 0, o; t < s.totalAds; t++) o = s.popupAdsButtons_ar[t], o.hide(e);
				e && (s.popupAdsButtons_ar = null, s.totalAds = 0), s.id = -1
			}
		}, s.resetId = function() {
			s.id = -1
		}, s.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.LOAD_ERROR = "error", t.LOAD_COMPLETE = "complete", t.prototype = null, e.FWDUVPPupupAds = t
}(window),
function(e) {
	var t = function(e, o, s, n, i) {
		'use strict';
		var a = this,
			d = t.prototype;
		a.buttonRef_do = e, a.bkColor = o, a.fontColor_str = s, a.toolTipLabel_str = n, a.toolTipsButtonsHideDelay = 1e3 * i, a.pointerWidth = 7, a.pointerHeight = 4, a.isMbl = FWDUVPUtils.isMobile, a.isShowed_bl = !0, a.init = function() {
			a.setOverflow("visible"), a.screen.className = "UVP-tooltip-bk", a.setupMainContainers(), a.setLabel("0"), a.hide(), a.setVisible(!1), a.getStyle().backgroundColor = a.bkColor, a.getStyle().zIndex = 9999999999999, a.getStyle().pointerEvents = "none"
		}, a.setupMainContainers = function() {
			a.pointerHolder_do = new FWDUVPDisplayObject("div"), a.pointerHolder_do.setOverflow("visible"), a.addChild(a.pointerHolder_do), a.text_do = new FWDUVPDisplayObject("div"), a.text_do.screen.className = "UVP-tooltip-text", a.text_do.hasTransform3d_bl = !1, a.text_do.hasTransform2d_bl = !1, a.text_do.setBackfaceVisibility(), a.text_do.setDisplay("inline-block"), a.text_do.getStyle().fontFamily = "Arial", a.text_do.getStyle().fontSize = "12px", a.text_do.getStyle().color = a.fontColor_str, a.text_do.getStyle().whiteSpace = "nowrap", a.text_do.getStyle().padding = "6px", a.text_do.getStyle().paddingTop = "4px", a.text_do.getStyle().paddingBottom = "4px", a.addChild(a.text_do), a.pointer_do = new FWDUVPDisplayObject("div"), a.pointer_do.screen.className = "UVP-scrubber-pointer", a.pointer_do.setBkColor(a.bkColor), a.pointer_do.screen.style = "border: 4px solid transparent; border-top-color: " + a.bkColor + ";", a.pointerHolder_do.addChild(a.pointer_do)
		}, a.setLabel = function(e) {
			void 0 !== e && (a.text_do.setInnerHTML(e), null == a || (a.setWidth(a.text_do.getWidth()), a.setHeight(a.text_do.getHeight()), a.positionPointer()))
		}, a.positionPointer = function(e) {
			var t, o;
			e || (e = 0), t = parseInt((a.w - 8) / 2) + e, o = a.h, a.pointerHolder_do.setX(t), a.pointerHolder_do.setY(o)
		}, a.show = function() {
			a.isShowed_bl = !0, clearTimeout(a.hideWithDelayId_to), FWDAnimation.killTweensOf(a), clearTimeout(a.showWithDelayId_to), a.showWithDelayId_to = setTimeout(a.showFinal, a.toolTipsButtonsHideDelay)
		}, a.showFinal = function() {
			a.setVisible(!0), FWDAnimation.to(a, .4, {
				alpha: 1,
				onComplete: function() {
					a.setVisible(!0)
				},
				ease: Quart.easeOut
			})
		}, a.hide = function() {
			a.isShowed_bl && (clearTimeout(a.showWithDelayId_to), clearTimeout(a.hideWithDelayId_to), a.hideWithDelayId_to = setTimeout(function() {
				FWDAnimation.killTweensOf(a), a.setVisible(!1), a.isShowed_bl = !1, a.setAlpha(0)
			}, 100))
		}, a.init()
	};
	t.setPrototype = function() {
		t.prototype = null, t.prototype = new FWDUVPDisplayObject("div")
	}, t.CLICK = "onClick", t.MOUSE_DOWN = "onMouseDown", t.prototype = null, e.FWDUVPScrubberToolip = t
}(window),
function(e) {
	var t = function(o, s) {
		'use strict';
		var n = this,
			i = t.prototype;
		n.embedColoseN_img = o.embedColoseN_img, n.btns_ar = [], n.embedWindowBackground_str = o.embedWindowBackground_str, n.embedWindowCloseButtonMargins = o.embedWindowCloseButtonMargins, n.totalWidth = 0, n.sW = 0, n.sH = 0, n.minMrgXSpc = 20, n.hSpace = 20, n.minHSpace = 10, n.vSpace = 15, n.isMbl = FWDUVPUtils.isMobile, n.useVectorIcons_bl = o.useVectorIcons_bl, n.init = function() {
			n.setupButtons()
		}, n.stpInit = function() {
			if (!n.clsBtn) {
				var t = o.sBC;
				e.isWhite && (t = "#000000"), n.setBackfaceVisibility(), n.mainHld = new FWDUVPDisplayObject("div"), n.mainHld.hasTransform3d_bl = !1, n.mainHld.hasTransform2d_bl = !1, n.mainHld.setBackfaceVisibility(), n.bk_do = new FWDUVPDisplayObject("div"), n.bk_do.getStyle().width = "100%", n.bk_do.getStyle().height = "100%", n.bk_do.setAlpha(.9);
				var s = n.embedWindowBackground_str;
				e.isWhite && (s = "content/hex_white/embed-window-background.png"), n.bk_do.getStyle().background = "url('" + s + "')", n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.clsBtn = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCloseButtonNormalState", "UVPCloseButtonSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.clsBtn = new FWDUVPSimpleButton(o.shareClooseN_img, o.embedWindowClosePathS_str, void 0, !0, o.useHEX, o.nBC, t, !1, !1, !1, !1, !0)), n.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, n.closeButtonOnMouseUpHandler), n.addChild(n.mainHld), n.mainHld.addChild(n.bk_do), n.mainHld.addChild(n.clsBtn)
			}
		}, n.closeButtonOnMouseUpHandler = function() {
			n.isShowed_bl && n.hide()
		}, n.positionAndResize = function() {
			n.sW = s.sW, n.sH = s.sH, n.clsBtn.setX(n.sW - n.clsBtn.w - n.embedWindowCloseButtonMargins), n.clsBtn.setY(n.embedWindowCloseButtonMargins), n.setWidth(n.sW), n.setHeight(n.sH), n.mainHld.setWidth(n.sW), n.mainHld.setHeight(n.sH), setTimeout(function() {
				n.positionButtons()
			}, 100)
		}, n.setupButtons = function() {
			if (!n.btsCrted) {
				n.stpInit(), n.btsCrted = !0;
				var t = o.sBC;
				e.isWhite && (t = "#000000"), n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.facebookButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-facebook'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.facebookButton_do = new FWDUVPSimpleButton(o.facebookN_img, o.facebookSPath_str, void 0, !0, o.useHEX, o.nBC, t)), n.facebookButton_do.screen.className = "fwduvp-facebook-share-button", n.facebookButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.facebookOnMouseUpHandler), n.addBtnToArray(n.facebookButton_do), n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.twitterButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-twitter'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.twitterButton_do = new FWDUVPSimpleButton(o.twitterN_img, o.twitterSPath_str, void 0, !0, o.useHEX, o.nBC, t)), n.twitterButton_do.screen.className = "fwduvp-twitter-share-button", n.twitterButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.twitterOnMouseUpHandler), n.addBtnToArray(n.twitterButton_do), n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.likedinButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-linkedin'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.likedinButton_do = new FWDUVPSimpleButton(o.likedInkN_img, o.likedInSPath_str, void 0, !0, o.useHEX, o.nBC, t)), n.likedinButton_do.screen.className = "fwduvp-likedin-share-button", n.likedinButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.likedinOnMouseUpHandler), n.addBtnToArray(n.likedinButton_do), n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.bufferButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-comments'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.bufferButton_do = new FWDUVPSimpleButton(o.bufferkN_img, o.bufferSPath_str, void 0, !0, o.useHEX, o.nBC, t)), n.bufferButton_do.screen.className = "fwduvp-buffer-share-button", n.bufferButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.bufferOnMouseUpHandler), n.addBtnToArray(n.bufferButton_do), n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.diggButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-digg'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.diggButton_do = new FWDUVPSimpleButton(o.diggN_img, o.diggSPath_str, void 0, !0, o.useHEX, o.nBC, t)), n.diggButton_do.screen.className = "fwduvp-digg-share-button", n.diggButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.diggOnMouseUpHandler), n.addBtnToArray(n.diggButton_do), n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.redditButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-reddit'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.redditButton_do = new FWDUVPSimpleButton(o.redditN_img, o.redditSPath_str, void 0, !0, o.useHEX, o.nBC, t)), n.redditButton_do.screen.className = "fwduvp-reddit-share-button", n.redditButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.redditOnMouseUpHandler), n.addBtnToArray(n.redditButton_do), n.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), n.thumbrlButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-tumblr'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), n.thumbrlButton_do = new FWDUVPSimpleButton(o.thumbrlN_img, o.thumbrlSPath_str, void 0, !0, o.useHEX, o.nBC, t)), n.thumbrlButton_do.screen.className = "fwduvp-thumbrl-share-button", n.addBtnToArray(n.thumbrlButton_do), n.thumbrlButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, n.thumbrlOnMouseUpHandler), n.mainHld.addChild(n.facebookButton_do), n.mainHld.addChild(n.twitterButton_do), n.mainHld.addChild(n.likedinButton_do), n.mainHld.addChild(n.bufferButton_do), n.mainHld.addChild(n.diggButton_do), n.mainHld.addChild(n.redditButton_do), n.mainHld.addChild(n.thumbrlButton_do)
			}
		}, n.facebookOnMouseUpHandler = function() {
			var t = "http://www.facebook.com/share.php?u=" + encodeURIComponent(location.href);
			e.open(t, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
		}, n.twitterOnMouseUpHandler = function() {
			var t = "http://twitter.com/home?status=" + encodeURIComponent(location.href);
			e.open(t, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
		}, n.likedinOnMouseUpHandler = function() {
			var t = "https://www.linkedin.com/cws/share?url=" + location.href;
			e.open(t, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
		}, n.bufferOnMouseUpHandler = function() {
			var t = "https://buffer.com/add?url=" + location.href;
			e.open(t, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
		}, n.diggOnMouseUpHandler = function() {
			var t = "http://digg.com/submit?url=" + location.href;
			e.open(t, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
		}, n.redditOnMouseUpHandler = function() {
			var t = "https://www.reddit.com/?submit=" + location.href;
			e.open(t, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
		}, n.thumbrlOnMouseUpHandler = function() {
			var t = "http://www.tumblr.com/share/link?url=" + location.href;
			e.open(t, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
		}, n.addBtnToArray = function(t) {
			setTimeout(function() {
				"none" != e.getComputedStyle(t.screen).display && n.btns_ar.push(t)
			}, 50)
		}, n.positionButtons = function() {
			var e = [],
				t = [],
				o = [],
				s = 0,
				a = 0,
				d = 0,
				r, l, u;
			if (n.btns_ar.length) {
				if (1 == n.btns_ar.length) return r = n.btns_ar[0], r.setX(Math.round((n.sW - r.getWidth()) / 2)), void r.setY(parseInt((n.sH - ((d + 1) * (r.totalHeight + n.vSpace) - n.vSpace)) / 2));
				e[d] = [0], t[d] = n.btns_ar[0].totalWidth, o[d] = n.btns_ar[0].totalWidth, n.totalButtons = n.btns_ar.length;
				for (var _ = 1; _ < n.totalButtons; _++) r = n.btns_ar[_], t[d] + r.totalWidth + n.minHSpace > n.sW - n.minMrgXSpc ? (d++, e[d] = [], e[d].push(_), t[d] = r.totalWidth, o[d] = r.totalWidth) : (e[d].push(_), t[d] += r.totalWidth + n.minHSpace, o[d] += r.totalWidth);
				s = parseInt((n.sH - ((d + 1) * (r.totalHeight + n.vSpace) - n.vSpace)) / 2);
				for (var _ = 0; _ < d + 1; _++) {
					var c = 0,
						p;
					if (1 < e[_].length) {
						p = Math.min((n.sW - n.minMrgXSpc - o[_]) / (e[_].length - 1), n.hSpace);
						var h = o[_] + p * (e[_].length - 1);
						c = parseInt((n.sW - h) / 2)
					} else c = parseInt((n.sW - t[_]) / 2);
					0 < _ && (s += r.h + n.vSpace);
					for (var b = 0; b < e[_].length; b++) r = n.btns_ar[e[_][b]], 0 == b ? u = c : (l = n.btns_ar[e[_][b] - 1], u = l.finalX + l.screen.offsetWidth + p), r.finalX = u, r.finalY = s, a < r.finalY && (a = r.finalY), n.buttonsBarTotalHeight = a + r.totalHeight + n.startY, r.setX(r.finalX), r.setY(r.finalY)
				}
			}
		}, n.show = function() {
			n.isShowed_bl || (n.isShowed_bl = !0, s.main_do.addChild(n), n.init(), n.useVectorIcons_bl ? n.checkButtonsId_to = setInterval(function() {
				0 != n.clsBtn.w && (n.positionAndResize(), clearInterval(n.checkButtonsId_to), clearTimeout(n.hideCompleteId_to), clearTimeout(n.showCompleteId_to), n.mainHld.setY(-n.sH), n.showCompleteId_to = setTimeout(n.showCompleteHandler, 900), FWDAnimation.to(n.mainHld, .8, {
					y: 0,
					delay: .1,
					ease: Expo.easeInOut
				}))
			}, 50) : (n.positionAndResize(), clearTimeout(n.hideCompleteId_to), clearTimeout(n.showCompleteId_to), n.mainHld.setY(-n.sH), n.showCompleteId_to = setTimeout(n.showCompleteHandler, 900), setTimeout(function() {
				FWDAnimation.to(n.mainHld, .8, {
					y: 0,
					delay: .1,
					ease: Expo.easeInOut
				})
			}, 100)))
		}, n.showCompleteHandler = function() {}, n.hide = function() {
			n.isShowed_bl && (n.isShowed_bl = !1, (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && s.main_do.setSelectable(!1), s.customContextMenu_do && s.customContextMenu_do.enable(), n.positionAndResize(), clearTimeout(n.hideCompleteId_to), clearTimeout(n.showCompleteId_to), n.hideCompleteId_to = setTimeout(n.hideCompleteHandler, 800), FWDAnimation.killTweensOf(n.mainHld), FWDAnimation.to(n.mainHld, .8, {
				y: -n.sH,
				ease: Expo.easeInOut
			}))
		}, n.hideCompleteHandler = function() {
			s.main_do.removeChild(n), n.dispatchEvent(t.HIDE_COMPLETE)
		}, o.useHEX && n.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.HIDE_COMPLETE = "hideComplete", t.prototype = null, e.FWDUVPShareWindow = t
}(window),
function(e) {
	var t = function(e, o, s, n, i, a, d, r, l, u, _, c) {
		'use strict';
		var p = this,
			h = t.prototype;
		p.iconCSSString = r, p.showHDIcon = l, p.nImg = e, p.sPath_str = o, p.dPath_str = s, p.testButton = !(-1 == (p.iconCSSString + "").indexOf("download")), p.showOver = c, i || (p.showOver = !1), p.nImg && (p.totalWidth = p.nImg.width, p.totalHeight = p.nImg.height, p.buttonWidth = p.totalWidth, p.buttonHeight = p.totalHeight), p.normalCalssName = u, p.selectedCalssName = _, p.useHEX = i, p.nBC = a, p.sBC = d, p.isShowed_bl = !0, p.isMbl = FWDUVPUtils.isMobile, p.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, p.allowToCreateSecondButton_bl = !p.isMbl || p.hasPointerEvent_bl || n, p.useFontAwesome_bl = !!p.iconCSSString, p.init = function() {
			p.iconCSSString && p.setOverflow("visible"), p.setupMainContainers(), p.setNormalState()
		}, p.setupMainContainers = function() {
			if (p.useFontAwesome_bl) {
				if (p.setOverflow("visible"), p.n_do = new FWDUVPTransformDisplayObject("div"), p.n_do.setInnerHTML(p.iconCSSString), p.addChild(p.n_do), p.showHDIcon) {
					var e = new Image;
					e.src = l, p.hd_do = new FWDUVPDisplayObject("img"), p.hd_do.setScreen(e), p.hd_do.setWidth(7), p.hd_do.setHeight(5), p.setOverflow("visible"), p.addChild(p.hd_do)
				}
				p.setFinalSize()
			} else if (p.useHEX && !p.showOver ? (p.n_do = new FWDUVPTransformDisplayObject("div"), p.n_do.setWidth(p.totalWidth), p.n_do.setHeight(p.totalHeight), p.n_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(p.nImg, p.nBC).canvas, p.n_do.screen.appendChild(p.n_do_canvas), p.addChild(p.n_do)) : (p.n_do = new FWDUVPTransformDisplayObject("img"), p.n_do.setScreen(p.nImg), p.addChild(p.n_do)), p.allowToCreateSecondButton_bl) {
				p.img1 = new Image, p.img1.src = p.sPath_str;
				var t = new Image;
				if (p.sImg = t, p.useHEX) {
					p.s_sdo = new FWDUVPTransformDisplayObject("div"), p.s_sdo.setWidth(p.totalWidth), p.s_sdo.setHeight(p.totalHeight);
					var o = p.sBC;
					p.showOver && (o = p.nBC), p.img1.onload = function() {
						p.s_sdo_canvas = FWDUVPUtils.getCanvasWithModifiedColor(p.img1, o).canvas, p.s_sdo.screen.appendChild(p.s_sdo_canvas)
					}, p.showOver || p.s_sdo.setAlpha(0), p.addChild(p.s_sdo)
				} else p.s_sdo = new FWDUVPDisplayObject("img"), p.s_sdo.setScreen(p.img1), p.s_sdo.setWidth(p.totalWidth), p.s_sdo.setHeight(p.totalHeight), p.useHEX || p.s_sdo.setAlpha(0), p.addChild(p.s_sdo);
				p.dPath_str && (t.src = p.dPath_str, p.d_sdo = new FWDUVPDisplayObject("img"), p.d_sdo.setScreen(t), p.d_sdo.setWidth(p.totalWidth), p.d_sdo.setHeight(p.totalHeight), p.d_sdo.setX(-100), p.addChild(p.d_sdo)), p.setWidth(p.totalWidth), p.setHeight(p.totalHeight)
			}
			p.setButtonMode(!0), p.screen.style.yellowOverlayPointerEvents = "none", p.hasPointerEvent_bl ? (p.screen.addEventListener("pointerup", p.onMouseUp), p.screen.addEventListener("pointerover", p.onMouseOver), p.screen.addEventListener("pointerout", p.onMouseOut)) : p.screen.addEventListener && (!p.isMbl && (p.screen.addEventListener("mouseover", p.onMouseOver), p.screen.addEventListener("mouseout", p.onMouseOut), p.screen.addEventListener("mouseup", p.onMouseUp)), p.screen.addEventListener("touchend", p.onMouseUp))
		}, p.onMouseOver = function(o) {
			if ((p.dispatchEvent(t.SHOW_TOOLTIP, {
					e: o
				}), !p.isDisabledForGood_bl) && (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType)) {
				if (p.isDisabled_bl || p.isSelectedFinal_bl) return;
				p.dispatchEvent(t.MOUSE_OVER, {
					e: o
				}), p.setSelectedState(!0)
			}
		}, p.onMouseOut = function(o) {
			if (!p.isDisabledForGood_bl && (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType)) {
				if (p.isDisabled_bl || p.isSelectedFinal_bl) return;
				p.dispatchEvent(t.MOUSE_OUT, {
					e: o
				}), p.setNormalState(!0)
			}
		}, p.onMouseUp = function(o) {
			p.isDisabledForGood_bl || (o.preventDefault && o.preventDefault(), p.isDisabled_bl || 2 == o.button || p.dispatchEvent(t.MOUSE_UP, {
				e: o
			}))
		}, p.checkCount = 0, p.setFinalSize = function(e) {
			(e && (p.checkCount = 0), clearInterval(p.checkId_int), !(6 < p.checkCount)) && (p.lastWidth = p.n_do.screen.firstChild.offsetWidth, p.checkCount += 1, p.checkId_int = setInterval(function() {
				p.setFinalSize()
			}, 100), p.prevWidth == p.lastWidth || 0 == p.lastWidth || (p.setWidth(p.n_do.screen.firstChild.offsetWidth), p.setHeight(p.n_do.screen.firstChild.offsetHeight), p.n_do.setWidth(p.w), p.n_do.setHeight(p.h), p.buttonWidth = p.w, p.buttonHeight = p.h, p.totalWidth = p.w, p.totalHeight = p.h, p.hd_do && (p.hd_do.setX(p.w - p.hd_do.w + 2), p.hd_do.setY(-2)), p.prevWidth = p.lastWidth))
		}, p.setSelected = function() {
			p.isSelectedFinal_bl = !0;
			p.s_sdo && (FWDAnimation.killTweensOf(p.s_sdo), FWDAnimation.to(p.s_sdo, .8, {
				alpha: 1,
				ease: Expo.easeOut
			}))
		}, p.setUnselected = function() {
			p.isSelectedFinal_bl = !1;
			p.s_sdo && FWDAnimation.to(p.s_sdo, .8, {
				alpha: 0,
				delay: .1,
				ease: Expo.easeOut
			})
		}, p.setNormalState = function(e) {
			p.doNotallowToSetNormal || (p.useFontAwesome_bl ? (FWDAnimation.killTweensOf(p.n_do.screen), e ? FWDAnimation.to(p.n_do.screen, .6, {
				className: p.normalCalssName,
				ease: Quart.easeOut
			}) : p.n_do.screen.className = p.normalCalssName) : p.showOver ? (FWDAnimation.killTweensOf(p.s_sdo), FWDAnimation.to(p.s_sdo, .6, {
				alpha: 1,
				ease: Quart.easeOut
			})) : (FWDAnimation.killTweensOf(p.s_sdo), FWDAnimation.to(p.s_sdo, .6, {
				alpha: 0,
				ease: Quart.easeOut
			})))
		}, p.setSelectedState = function(e) {
			p.useFontAwesome_bl ? (FWDAnimation.killTweensOf(p.n_do.screen), e ? FWDAnimation.to(p.n_do.screen, .6, {
				className: p.selectedCalssName,
				ease: Quart.easeOut
			}) : p.n_do.screen.className = p.selectedCalssName) : p.showOver ? (FWDAnimation.killTweensOf(p.s_sdo), FWDAnimation.to(p.s_sdo, .6, {
				alpha: 0,
				ease: Quart.easeOut
			})) : (FWDAnimation.killTweensOf(p.s_sdo), FWDAnimation.to(p.s_sdo, .6, {
				alpha: 1,
				delay: .1,
				ease: Quart.easeOut
			}))
		}, p.setDisabledState = function() {
			p.isSetToDisabledState_bl || (p.isSetToDisabledState_bl = !0, p.d_sdo && p.d_sdo.setX(0), p.hd_do && p.hd_do.setX(p.w - p.hd_do.w))
		}, p.setEnabledState = function() {
			p.isSetToDisabledState_bl && (p.isSetToDisabledState_bl = !1, p.d_sdo && p.d_sdo.setX(-100), p.hd_do && p.hd_do.setX(-1e5))
		}, p.disable = function() {
			p.isDisabledForGood_bl || p.isDisabled_bl || (p.isDisabled_bl = !0, p.setButtonMode(!1), FWDAnimation.killTweensOf(p), FWDAnimation.to(p, .6, {
				alpha: .4
			}), p.setNormalState(!0))
		}, p.enable = function() {
			p.isDisabledForGood_bl || !p.isDisabled_bl || (p.isDisabled_bl = !1, p.setButtonMode(!0), FWDAnimation.killTweensOf(p), FWDAnimation.to(p, .6, {
				alpha: 1
			}))
		}, p.disableForGood = function() {
			p.isDisabledForGood_bl = !0, p.setButtonMode(!1)
		}, p.showDisabledState = function() {
			p.d_sdo && 0 != p.d_sdo.x && p.d_sdo.setX(0), p.hd_do && p.hd_do.setX(p.w - p.hd_do.w + 2)
		}, p.hideDisabledState = function() {
			p.d_sdo && -100 != p.d_sdo.x && p.d_sdo.setX(-100), p.hd_do && p.hd_do.setX(-1e4)
		}, p.show = function() {
			p.isShowed_bl || (p.isShowed_bl = !0, FWDAnimation.killTweensOf(p), FWDUVPUtils.isIEAndLessThen9 ? FWDUVPUtils.isIEAndLessThen9 ? p.setVisible(!0) : (p.setAlpha(0), FWDAnimation.to(p, .4, {
				alpha: 1,
				delay: .4
			}), p.setVisible(!0)) : FWDUVPUtils.isIEWebKit ? (FWDAnimation.killTweensOf(p.n_do), p.n_do.setScale2(0), FWDAnimation.to(p.n_do, .8, {
				scale: 1,
				delay: .4,
				onStart: function() {
					p.setVisible(!0)
				},
				ease: Elastic.easeOut
			})) : (p.setScale2(0), FWDAnimation.to(p, .8, {
				scale: 1,
				delay: .4,
				onStart: function() {
					p.setVisible(!0)
				},
				ease: Elastic.easeOut
			})))
		}, p.hide = function() {
			p.isShowed_bl && (p.isShowed_bl = !1, FWDAnimation.killTweensOf(p), FWDAnimation.killTweensOf(p.n_do), p.setVisible(!1))
		}, p.updateHEXColors = function(e, t) {
			p.n_do_canvas && FWDUVPUtils.changeCanvasHEXColor(p.nImg, p.n_do_canvas, e), p.s_sdo_canvas && FWDUVPUtils.changeCanvasHEXColor(p.img1, p.s_sdo_canvas, t)
		}, p.init()
	};
	t.setPrototype = function() {
		t.prototype = null, t.prototype = new FWDUVPTransformDisplayObject("div")
	}, t.CLICK = "onClick", t.MOUSE_OVER = "onMouseOver", t.SHOW_TOOLTIP = "showTooltip", t.MOUSE_OUT = "onMouseOut", t.MOUSE_UP = "onMouseDown", t.prototype = null, e.FWDUVPSimpleButton = t
}(window),
function(e) {
	var t = function(e, o, s, n, i, a, d, r) {
		'use strict';
		var l = this,
			u = t.prototype;
		l.useHEX = i, l.nBC = a, l.sBC = d, l.nImgPath_str = e, l.sImgPath_str = o, l.buttonWidth = s, l.buttonHeight = n, l.showOver = r, i || (l.showOver = !1), l.isMbl = FWDUVPUtils.isMobile, l.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, l.isDisabled_bl = !1, l.init = function() {
			l.setupMainContainers(), l.setWidth(l.buttonWidth), l.setHeight(l.buttonHeight), l.setButtonMode(!0)
		}, l.setupMainContainers = function() {
			l.nImg = new Image, l.nImg.src = l.nImgPath_str, l.useHEX && !l.showOver ? (l.n_do = new FWDUVPTransformDisplayObject("div"), l.n_do.setWidth(l.buttonWidth), l.n_do.setHeight(l.buttonHeight), l.nImg.onload = function() {
				l.n_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(l.nImg, l.nBC).canvas, l.n_do.screen.appendChild(l.n_do_canvas)
			}, l.addChild(l.n_do)) : (l.n_do = new FWDUVPDisplayObject("img"), l.n_do.setScreen(l.nImg), l.n_do.setWidth(l.buttonWidth), l.n_do.setHeight(l.buttonHeight), l.addChild(l.n_do)), l.sImg = new Image, l.sImg.src = l.sImgPath_str, l.useHEX ? (l.s_do = new FWDUVPTransformDisplayObject("div"), l.s_do.setWidth(l.buttonWidth), l.s_do.setHeight(l.buttonHeight), l.sImg.onload = function() {
				l.s_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(l.sImg, l.nBC).canvas, l.s_do.screen.appendChild(l.s_do_canvas)
			}, !l.showOver && l.s_do.setAlpha(0), l.addChild(l.s_do)) : (l.s_do = new FWDUVPDisplayObject("img"), l.s_do.setScreen(l.sImg), l.s_do.setWidth(l.buttonWidth), l.s_do.setHeight(l.buttonHeight), l.addChild(l.s_do), !l.useHEX && l.s_do.setAlpha(0)), l.showOver && l.addChild(l.s_do), l.hasPointerEvent_bl ? (l.screen.addEventListener("pointerup", l.onMouseUp), l.screen.addEventListener("pointerover", l.setSelectedState), l.screen.addEventListener("pointerout", l.setNormalState)) : l.screen.addEventListener && (!l.isMbl && (l.screen.addEventListener("mouseover", l.setSelectedState), l.screen.addEventListener("mouseout", l.setNormalState), l.screen.addEventListener("mouseup", l.onMouseUp)), l.screen.addEventListener("touchend", l.onMouseUp))
		}, l.setNormalState = function() {
			l.showOver ? (FWDAnimation.killTweensOf(l.s_do), FWDAnimation.to(l.s_do, .6, {
				alpha: 1,
				ease: Quart.easeOut
			})) : (FWDAnimation.killTweensOf(l.s_do), FWDAnimation.to(l.s_do, .6, {
				alpha: 0,
				ease: Quart.easeOut
			}))
		}, l.setSelectedState = function() {
			l.showOver ? (FWDAnimation.killTweensOf(l.s_do), FWDAnimation.to(l.s_do, .6, {
				alpha: 0,
				ease: Quart.easeOut
			})) : (FWDAnimation.killTweensOf(l.s_do), FWDAnimation.to(l.s_do, .6, {
				alpha: 1,
				ease: Quart.easeOut
			}))
		}, l.onMouseUp = function() {
			l.dispatchEvent(t.MOUSE_UP), l.dispatchEvent(t.CLICK)
		}, l.updateHEXColors = function(e, t) {
			l.n_do_canvas && FWDUVPUtils.changeCanvasHEXColor(l.nImg, l.n_do_canvas, e);
			var o = t;
			l.showOver && (o = e), FWDUVPUtils.changeCanvasHEXColor(l.sImg, l.s_do_canvas, o)
		}, l.init()
	};
	t.setPrototype = function() {
		t.prototype = null, t.prototype = new FWDUVPTransformDisplayObject("div", "relative")
	}, t.MOUSE_UP = "onClick", t.CLICK = "onClick", t.prototype = null, e.FWDUVPSimpleSizeButton = t
}(window),
function(t) {
	var o = function(e, s) {
		'use strict';
		var a = this,
			n = o.prototype;
		a.isMbl = FWDUVPUtils.isMobile, a.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, a.showSubtitileByDefault_bl = s.showSubtitileByDefault_bl, a.init = function() {
			a.setOverflow("visible"), a.getStyle().pointerEvents = "none", a.getStyle().cursor = "default", a.setupTextContainer(), a.getStyle().margin = "auto", a.hide()
		}, a.setupTextContainer = function() {
			a.text_do = new FWDUVPTransformDisplayObject("div"), a.text_do.getStyle().pointerEvents = "none", a.text_do.hasTransform3d_bl = !1, a.text_do.setBackfaceVisibility(), a.text_do.getStyle().transformOrigin = "50% 0%", a.text_do.getStyle().textAlign = "center", a.addChild(a.text_do)
		}, a.loadSubtitle = function(e) {
			if (a.text_do.setX(-5e3), -1 == location.protocol.indexOf("file:")) {
				a.subtitiles_ar = [], a.stopToLoadSubtitle(), a.sourceURL_str = e, a.xhr = new XMLHttpRequest, a.xhr.onreadystatechange = a.onLoad, a.xhr.onerror = a.onError;
				try {
					a.xhr.open("get", a.sourceURL_str + "?rand=" + parseInt(99999999 * Math.random()), !0), a.xhr.send()
				} catch (o) {
					var t = o;
					o && o.message && (t = o.message)
				}
			}
		}, a.onLoad = function() {
			4 == a.xhr.readyState && (404 == a.xhr.status ? a.dispatchEvent(FWDUVPData.LOAD_ERROR, {
				text: "Subtitle file path is not found: <font color='#FF0000'>" + a.sourceURL_str + "</font>"
			}) : 408 == a.xhr.status ? a.dispatchEvent(FWDUVPData.LOAD_ERROR, {
				text: "Loadiong subtitle file file request load timeout!"
			}) : 200 == a.xhr.status && (a.subtitle_txt = t.JSON ? a.xhr.responseText : a.xhr.responseText, a.isShowed_bl && a.show(), a.parseSubtitle(a.subtitle_txt), a.prevText = "none", a.shId_to = setTimeout(function() {
				a.show(), a.text_do.setX(0), a.updateSubtitle(e.currentSecconds)
			}, 400))), a.dispatchEvent(o.LOAD_COMPLETE)
		}, a.onError = function(s) {
			try {
				t.console && console.log(s), t.console && console.log(s.message)
			} catch (t) {}
			a.dispatchEvent(o.LOAD_ERROR, {
				text: "Error loading subtitle file : <font color='#FF0000'>" + a.sourceURL_str + "</font>."
			})
		}, a.stopToLoadSubtitle = function() {
			if (null != a.xhr) {
				try {
					a.xhr.abort()
				} catch (t) {}
				a.xhr.onreadystatechange = null, a.xhr.onerror = null, a.xhr = null
			}
			a.hide(), a.isLded = !1
		}, a.parseSubtitle = function(e) {
			function d(e) {
				return null == e ? "" : e.replace(/^\s+|\s+$/g, "")
			}
			a.isLded = !0, e = e.replace(/\r\n|\r|\n/g, "\n"), e = d(e);
			var r = e.split("\n\n"),
				l = 0;
			for (var u in r) {
				var s = r[u].split("\n");
				if (2 <= s.length) {
					var _ = s[0],
						n = d(s[1].split(" --> ")[0]),
						c = d(s[1].split(" --> ")[1]),
						o = s[2];
					if (2 < s.length)
						for (var p = 3; p < s.length; p++) o += "<br>" + s[p];
					a.subtitiles_ar[l] = {}, a.subtitiles_ar[l].number = _, a.subtitiles_ar[l].start = n, a.subtitiles_ar[l].end = c, a.subtitiles_ar[l].startDuration = FWDUVPUtils.formatTimeWithMiliseconds(n), a.subtitiles_ar[l].endDuration = FWDUVPUtils.formatTimeWithMiliseconds(c), a.subtitiles_ar[l].text = "<p class='fwduvp-subtitle'>" + o + "</p>"
				}
				l++
			}
			for (var n = 0; n < a.subtitiles_ar.length; n++) a.subtitiles_ar[n] || (a.subtitiles_ar.splice(n, 1), n--)
		}, a.updateSubtitle = function(t) {
			if (a.isLded) {
				for (var o = "", s = 0, n, d; s < a.subtitiles_ar.length; s++)
					if (n = a.subtitiles_ar[s].startDuration, d = a.subtitiles_ar[s].endDuration, n < t && d > t) {
						o = a.subtitiles_ar[s].text;
						break
					} if (260 > e.sW ? a.setVisible(!1) : a.setVisible(!0), o = 600 >= e.tempStageWidth ? o.replace("fwduvp-subtitle", "fwduvp-subtitle phone") : 1e3 >= e.tempStageWidth ? o.replace("fwduvp-subtitle", "fwduvp-subtitle tablet") : 1800 >= e.tempStageWidth ? o.replace("fwduvp-subtitle", "fwduvp-subtitle normal") : o.replace("fwduvp-subtitle", "fwduvp-subtitle large"), a.prevText != o) {
					a.text_do.setInnerHTML(o), a.setAlpha(0), setTimeout(function() {
						a.setAlpha(1), a.position()
					}, 300), a.hasText_bl = !0
				}
				a.prevText = o
			}
		}, a.position = function(t) {
			if (a.isLded) {
				var o;
				a.setWidth(e.tempVidStageWidth), a.text_do.setWidth(e.tempVidStageWidth), a.setX(Math.round((e.tempVidStageWidth - a.w) / 2));
				var s = a.text_do.getHeight();
				o = e.controller_do ? e.controller_do.isShowed_bl ? parseInt(e.vidStageHeight - e.controller_do.h - s) : parseInt(e.vidStageHeight - s - 10) : parseInt(e.vidStageHeight - s), FWDAnimation.killTweensOf(a.text_do), t ? FWDAnimation.to(a.text_do, .8, {
					y: o,
					ease: Expo.easeInOut
				}) : a.text_do.setY(o), a.text_do.setX(0)
			}
		}, a.show = function() {
			a.setVisible(!0)
		}, a.hide = function() {
			clearTimeout(a.shId_to), a.setVisible(!1)
		}, a.init()
	};
	o.getDuration = function(e) {
		var t = 0,
			o = 0,
			s = 0;
		return e = e.split(":"), t = e[0], "0" == t[0] && "0" != t[1] && (t = parseInt(t[1])), "00" == t && (t = 0), o = e[1], "0" == o[0] && "0" != o[1] && (o = parseInt(o[1])), "00" == o && (o = 0), secs = parseInt(e[2].replace(/,.*/ig, "")), "0" == secs[0] && "0" != secs[1] && (secs = parseInt(secs[1])), "00" == secs && (secs = 0), 0 != t && (s += 60 * (60 * t)), 0 != o && (s += 60 * o), s += secs, s
	}, o.setPrototype = function() {
		o.prototype = null, o.prototype = new FWDUVPTransformDisplayObject("div")
	}, o.LOAD_ERROR = "error", o.LOAD_COMPLETE = "complete", o.prototype = null, t.FWDUVPSubtitle = o
}(window),
function(e) {
	var t = function(o, s, n, i, a, d) {
		'use strict';
		var r = this,
			l = t.prototype;
		r.buttonRef_do = o, r.bkPath_str = s, r.pointerPath_str = n, r.fontColor_str = a, r.toolTipLabel_str = i, r.toolTipsButtonsHideDelay = 1e3 * d, r.pointerWidth = 7, r.pointerHeight = 4, r.isMbl = FWDUVPUtils.isMobile, r.isShowed_bl = !0, r.init = function() {
			r.setOverflow("visible"), r.screen.className = "UVP-tooltip-bk", r.setupMainContainers(), r.setLabel(r.toolTipLabel_str), r.hide(), r.getStyle().background = "url('" + r.bkPath_str + "')", r.getStyle().zIndex = 9999999999999
		}, r.setupMainContainers = function() {
			r.text_do = new FWDUVPDisplayObject("div"), r.text_do.screen.className = "UVP-tooltip-text", r.text_do.hasTransform3d_bl = !1, r.text_do.hasTransform2d_bl = !1, r.text_do.setBackfaceVisibility(), r.text_do.setDisplay("inline"), r.text_do.getStyle().fontFamily = "Arial", r.text_do.getStyle().fontSize = "12px", r.text_do.getStyle().color = r.fontColor_str, r.text_do.getStyle().whiteSpace = "nowrap", r.text_do.getStyle().padding = "6px", r.text_do.getStyle().paddingTop = "4px", r.text_do.getStyle().paddingBottom = "4px", r.setLabel(), r.addChild(r.text_do), r.pointer_do = new FWDUVPDisplayObject("div"), r.pointer_do.screen.className = "UVP-tooltip-pointer", r.pointer_do.getStyle().background = "url('" + r.pointerPath_str + "')", r.pointer_do.setWidth(r.pointerWidth), r.pointer_do.setHeight(r.pointerHeight), r.addChild(r.pointer_do)
		}, r.setLabel = function() {
			r.text_do.setInnerHTML(i), setTimeout(function() {
				null == r || (r.setWidth(r.text_do.getWidth()), r.setHeight(r.text_do.getHeight()), r.positionPointer())
			}, 50)
		}, r.positionPointer = function(e) {
			var t, o;
			e || (e = 0), t = parseInt((r.w - r.pointerWidth) / 2) + e, o = r.h, r.pointer_do.setX(t), r.pointer_do.setY(o)
		}, r.show = function() {
			r.isShowed_bl || (r.isShowed_bl = !0, FWDAnimation.killTweensOf(r), clearTimeout(r.showWithDelayId_to), r.showWithDelayId_to = setTimeout(r.showFinal, r.toolTipsButtonsHideDelay), r.setMVId_to = setTimeout(function() {
				e.addEventListener("mousemove", r.moveHandler)
			}, 50))
		}, r.showFinal = function() {
			r.setVisible(!0), r.setAlpha(0), FWDAnimation.to(r, .4, {
				alpha: 1,
				onComplete: function() {
					r.setVisible(!0)
				},
				ease: Quart.easeOut
			})
		}, r.moveHandler = function(t) {
			var e = FWDUVPUtils.getViewportMouseCoordinates(t);
			FWDUVPUtils.hitTest(r.buttonRef_do.screen, e.screenX, e.screenY) || r.hide()
		}, r.hide = function() {
			r.isShowed_bl && (clearTimeout(r.setMVId_to), clearTimeout(r.showWithDelayId_to), e.removeEventListener("mousemove", r.moveHandler), FWDAnimation.killTweensOf(r), r.setVisible(!1), r.isShowed_bl = !1)
		}, r.init()
	};
	t.setPrototype = function() {
		t.prototype = null, t.prototype = new FWDUVPDisplayObject("div", "fixed")
	}, t.CLICK = "onClick", t.MOUSE_DOWN = "onMouseDown", t.prototype = null, e.FWDUVPToolTip = t
}(window),
function(e) {
	e.FWDUVPTransformDisplayObject = function(e, t, o, s) {
		'use strict';
		var n = this;
		if (n.listeners = {
				events_ar: []
			}, "div" == e || "img" == e || "canvas" == e || "iframe" == e) n.type = e;
		else throw Error("Type is not valid! " + e);
		n.children_ar = [], n.position = t || "absolute", n.overflow = o || "hidden", n.display = s || "block", n.visible = !0, n.buttonMode, n.x = 0, n.y = 0, n.scale = 1, n.rotation = 0, n.w = 0, n.h = 0, n.alpha = 1, n.innerHTML = "", n.opacityType = "", n.isHtml5_bl = !1, n.hasTransform2d_bl = FWDUVPUtils.hasTransform2d, n.init = function() {
			n.setScreen()
		}, n.getTransform = function() {
			for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"], t; t = e.shift();)
				if ("undefined" != typeof n.screen.style[t]) return t;
			return !1
		}, n.getOpacityType = function() {
			var e;
			return e = "undefined" == typeof n.screen.style.opacity ? "filter" : "opacity", e
		}, n.setScreen = function(e) {
			"img" == n.type && e ? (n.screen = e, n.setMainProperties()) : (n.screen = document.createElement(n.type), n.setMainProperties())
		}, n.setMainProperties = function() {
			n.transform = n.getTransform(), n.setPosition(n.position), n.setOverflow(n.overflow), n.opacityType = n.getOpacityType(), "opacity" == n.opacityType && (n.isHtml5_bl = !0), "filter" == n.opacityType && (n.screen.style.filter = "inherit"), n.screen.style.left = "0px", n.screen.style.top = "0px", n.screen.style.margin = "0px", n.screen.style.padding = "0px", n.screen.style.maxWidth = "none", n.screen.style.maxHeight = "none", n.screen.style.border = "none", n.screen.style.lineHeight = "1", n.screen.style.backfaceVisibility = "hidden", n.screen.style.webkitBackfaceVisibility = "hidden", n.screen.style.MozBackfaceVisibility = "hidden", n.screen.style.MozImageRendering = "optimizeSpeed", n.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == e && (n.setWidth(n.screen.width), n.setHeight(n.screen.height), n.screen.onmousedown = function() {
				return !1
			})
		}, n.setBackfaceVisibility = function() {
			n.screen.style.backfaceVisibility = "visible", n.screen.style.webkitBackfaceVisibility = "visible", n.screen.style.MozBackfaceVisibility = "visible"
		}, n.removeBackfaceVisibility = function() {
			n.screen.style.backfaceVisibility = "hidden", n.screen.style.webkitBackfaceVisibility = "hidden", n.screen.style.MozBackfaceVisibility = "hidden"
		}, n.setSelectable = function(e) {
			if (!e) {
				try {
					n.screen.style.userSelect = "none"
				} catch (t) {}
				try {
					n.screen.style.MozUserSelect = "none"
				} catch (t) {}
				try {
					n.screen.style.webkitUserSelect = "none"
				} catch (t) {}
				try {
					n.screen.style.khtmlUserSelect = "none"
				} catch (t) {}
				try {
					n.screen.style.oUserSelect = "none"
				} catch (t) {}
				try {
					n.screen.style.msUserSelect = "none"
				} catch (t) {}
				try {
					n.screen.msUserSelect = "none"
				} catch (t) {}
				n.screen.ondragstart = function() {
					return !1
				}, n.screen.onselectstart = function() {
					return !1
				}, n.screen.style.webkitTouchCallout = "none"
			}
		}, n.getScreen = function() {
			return n.screen
		}, n.setVisible = function(e) {
			n.visible = e, n.screen.style.visibility = !0 == n.visible ? "visible" : "hidden"
		}, n.getVisible = function() {
			return n.visible
		}, n.setResizableSizeAfterParent = function() {
			n.screen.style.width = "100%", n.screen.style.height = "100%"
		}, n.getStyle = function() {
			return n.screen.style
		}, n.setOverflow = function(e) {
			n.overflow = e, n.screen.style.overflow = n.overflow
		}, n.setPosition = function(e) {
			n.position = e, n.screen.style.position = n.position
		}, n.setDisplay = function(e) {
			n.display = e, n.screen.style.display = n.display
		}, n.setButtonMode = function(e) {
			n.buttonMode = e, n.screen.style.cursor = !0 == n.buttonMode ? "pointer" : "default"
		}, n.setBkColor = function(e) {
			n.screen.style.backgroundColor = e
		}, n.setInnerHTML = function(e) {
			n.innerHTML = e, n.screen.innerHTML = n.innerHTML
		}, n.getInnerHTML = function() {
			return n.innerHTML
		}, n.getRect = function() {
			return n.screen.getBoundingClientRect()
		}, n.setAlpha = function(e) {
			n.alpha = e, "opacity" == n.opacityType ? n.screen.style.opacity = n.alpha : "filter" == n.opacityType && (n.screen.style.filter = "alpha(opacity=" + 100 * n.alpha + ")", n.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * n.alpha) + ")")
		}, n.getAlpha = function() {
			return n.alpha
		}, n.getRect = function() {
			return n.screen.getBoundingClientRect()
		}, n.getGlobalX = function() {
			return n.getRect().left
		}, n.getGlobalY = function() {
			return n.getRect().top
		}, n.setX = function(e) {
			n.x = e, n.hasTransform2d_bl ? n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px) scale(" + n.scale + " , " + n.scale + ") rotate(" + n.rotation + "deg)" : n.screen.style.left = n.x + "px"
		}, n.getX = function() {
			return n.x
		}, n.setY = function(e) {
			n.y = e, n.hasTransform2d_bl ? n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px) scale(" + n.scale + " , " + n.scale + ") rotate(" + n.rotation + "deg)" : n.screen.style.top = n.y + "px"
		}, n.getY = function() {
			return n.y
		}, n.setScale2 = function(e) {
			n.scale = e, n.hasTransform2d_bl && (n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px) scale(" + n.scale + " , " + n.scale + ") rotate(" + n.rotation + "deg)")
		}, n.getScale = function() {
			return n.scale
		}, n.setRotation = function(e) {
			n.rotation = e, n.hasTransform2d_bl && (n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px) scale(" + n.scale + " , " + n.scale + ") rotate(" + n.rotation + "deg)")
		}, n.setWidth = function(e) {
			n.w = e, "img" == n.type ? (n.screen.width = n.w, n.screen.style.width = n.w + "px") : n.screen.style.width = n.w + "px"
		}, n.getWidth = function() {
			return "div" == n.type ? 0 == n.screen.offsetWidth ? n.w : n.screen.offsetWidth : "img" == n.type ? 0 == n.screen.offsetWidth ? 0 == n.screen.width ? n._w : n.screen.width : n.screen.offsetWidth : "canvas" == n.type ? 0 == n.screen.offsetWidth ? n.w : n.screen.offsetWidth : void 0
		}, n.setHeight = function(e) {
			n.h = e, "img" == n.type ? (n.screen.height = n.h, n.screen.style.height = n.h + "px") : n.screen.style.height = n.h + "px"
		}, n.getHeight = function() {
			return "div" == n.type ? 0 == n.screen.offsetHeight ? n.h : n.screen.offsetHeight : "img" == n.type ? 0 == n.screen.offsetHeight ? 0 == n.screen.height ? n.h : n.screen.height : n.screen.offsetHeight : "canvas" == n.type ? 0 == n.screen.offsetHeight ? n.h : n.screen.offsetHeight : void 0
		}, n.getNumChildren = function() {
			return n.children_ar.length
		}, n.addChild = function(t) {
			n.contains(t) ? (n.children_ar.splice(FWDUVPUtils.indexOfArray(n.children_ar, t), 1), n.children_ar.push(t), n.screen.appendChild(t.screen)) : (n.children_ar.push(t), n.screen.appendChild(t.screen))
		}, n.removeChild = function(t) {
			if (n.contains(t)) n.children_ar.splice(FWDUVPUtils.indexOfArray(n.children_ar, t), 1), n.screen.removeChild(t.screen);
			else throw Error("##removeChild()## Child doesn't exist, it can't be removed!")
		}, n.contains = function(t) {
			return -1 != FWDUVPUtils.indexOfArray(n.children_ar, t)
		}, n.addChildAtZero = function(t) {
			0 == n.numChildren ? (n.children_ar.push(t), n.screen.appendChild(t.screen)) : (n.screen.insertBefore(t.screen, n.children_ar[0].screen), n.contains(t) && n.children_ar.splice(FWDUVPUtils.indexOfArray(n.children_ar, t), 1), n.children_ar.unshift(t))
		}, n.getChildAt = function(e) {
			if (0 > e || e > n.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
			if (0 == n.numChildren) throw Errror("##getChildAt## Child dose not exist!");
			return n.children_ar[e]
		}, n.removeChildAtZero = function() {
			n.screen.removeChild(n.children_ar[0].screen), n.children_ar.shift()
		}, n.addListener = function(e, t) {
			if (null == e) throw Error("type is required.");
			if ("object" == typeof e) throw Error("type must be of type String.");
			if ("function" != typeof t) throw Error("listener must be of type Function.");
			var o = {};
			o.type = e, o.listener = t, o.target = n, n.listeners.events_ar.push(o)
		}, n.dispatchEvent = function(e, t) {
			if (null == e) throw Error("type is required.");
			if ("object" == typeof e) throw Error("type must be of type String.");
			for (var o = 0, s = n.listeners.events_ar.length; o < s; o++)
				if (n.listeners.events_ar[o].target === n && n.listeners.events_ar[o].type === e) {
					if (t)
						for (var a in t) n.listeners.events_ar[o][a] = t[a];
					n.listeners.events_ar[o].listener.call(n, n.listeners.events_ar[o]);
					break
				}
		}, n.removeListener = function(e, t) {
			if (null == e) throw Error("type is required.");
			if ("object" == typeof e) throw Error("type must be of type String.");
			if ("function" != typeof t) throw Error("listener must be of type Function." + e);
			for (var o = 0, s = n.listeners.events_ar.length; o < s; o++)
				if (n.listeners.events_ar[o].target === n && n.listeners.events_ar[o].type === e && n.listeners.events_ar[o].listener === t) {
					n.listeners.events_ar.splice(o, 1);
					break
				}
		}, n.disposeImage = function() {
			"img" == n.type && (n.screen.src = null)
		}, n.destroy = function() {
			try {
				n.screen.parentNode.removeChild(n.screen)
			} catch (t) {}
			n.screen.onselectstart = null, n.screen.ondragstart = null, n.screen.ontouchstart = null, n.screen.ontouchmove = null, n.screen.ontouchend = null, n.screen.onmouseover = null, n.screen.onmouseout = null, n.screen.onmouseup = null, n.screen.onmousedown = null, n.screen.onmousemove = null, n.screen.onclick = null, delete n.screen, delete n.style, delete n.rect, delete n.selectable, delete n.buttonMode, delete n.position, delete n.overflow, delete n.visible, delete n.innerHTML, delete n.numChildren, delete n.x, delete n.y, delete n.w, delete n.h, delete n.opacityType, delete n.isHtml5_bl, delete n.hasTransform2d_bl, n.children_ar = null, n.style = null, n.screen = null, n.numChildren = null, n.transform = null, n.position = null, n.overflow = null, n.display = null, n.visible = null, n.buttonMode = null, n.globalX = null, n.globalY = null, n.x = null, n.y = null, n.w = null, n.h = null, n.rect = null, n.alpha = null, n.innerHTML = null, n.opacityType = null, n.isHtml5_bl = null, n.hasTransform3d_bl = null, n.hasTransform2d_bl = null, n = null
		}, n.init()
	}
}(window),
function(e) {
	function t() {
		for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"], t, o; t = e.shift();)
			if ("undefined" != typeof s.dumy.style[t] && (s.dumy.style.position = "absolute", o = s.dumy.getBoundingClientRect().left, s.dumy.style[t] = "translate3d(500px, 0px, 0px)", o = Math.abs(s.dumy.getBoundingClientRect().left - o), 100 < o && 900 > o)) {
				try {
					document.documentElement.removeChild(s.dumy)
				} catch (t) {}
				return !0
			} try {
			document.documentElement.removeChild(s.dumy)
		} catch (t) {}
		return !1
	}

	function o() {
		for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"], t; t = e.shift();)
			if ("undefined" != typeof s.dumy.style[t]) return !0;
		try {
			document.documentElement.removeChild(s.dumy)
		} catch (t) {}
		return !1
	}
	var s = function() {
		'use strict'
	};
	s.dumy = document.createElement("div"), s.trim = function(e) {
		return e.replace(/\s/gi, "")
	}, s.trimAndFormatUrl = function(e) {
		return e = e.toLocaleLowerCase(), e = e.replace(/ /g, "-"), e
	}, s.storArrayBasedOnObjectValue = function(e, t) {
		e.sort(function(e) {
			var t = 1;
			return "-" === e[0] && (t = -1, e = e.substr(1)),
				function(o, s) {
					var n = o[e] < s[e] ? -1 : o[e] > s[e] ? 1 : 0;
					return n * t
				}
		}(t))
	}, s.getCookie = function(e) {
		for (var t = e + "=", o = document.cookie.split(";"), s = 0, n; s < o.length; s++) {
			for (n = o[s];
				" " == n.charAt(0);) n = n.substring(1, n.length);
			if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
		}
		return null
	}, s.hexToRgb = function(e) {
		e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, o, s) {
			return t + t + o + o + s + s
		});
		var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
		return t = t ? {
			r: parseInt(t[1], 16),
			g: parseInt(t[2], 16),
			b: parseInt(t[3], 16)
		} : null, "rgb(" + t.r + "," + t.g + "," + t.b + ")"
	}, s.splitAndTrim = function(e, t) {
		for (var o = e.split(","), n = o.length, a = 0; a < n; a++) t && (o[a] = s.trim(o[a]));
		return o
	}, s.checkTime = function(e) {
		return !!/^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/.test(e)
	}, s.formatTimeWithMiliseconds = function(e) {
		var o = parseInt(e.split(":")[0]),
			s = parseInt(e.split(":")[1]),
			n = parseInt(e.split(":")[2]),
			i = parseInt(e.split(",")[1] || e.split(".")[1]),
			a = 60 * (60 * o) + 60 * s + n + i / 1e3;
		return a = Math.round(100 * a) / 100, a
	}, s.formatTime = function(e, t) {
		e = Math.round(e);
		var o = Math.floor(e / 3600),
			s = e % 3600,
			n = Math.floor(s / 60),
			i = Math.ceil(s % 60);
		return n = 10 <= n ? n : "0" + n, i = 10 <= i ? i : "0" + i, 60 == i && (i = 59), isNaN(i) ? "00:00" : o || t ? "0" + o + ":" + n + ":" + i : n + ":" + i
	}, s.MD5 = function(e) {
		function t(e, t) {
			return e << t | e >>> 32 - t
		}

		function o(e, t) {
			var o, s, n, i, a;
			return n = 2147483648 & e, i = 2147483648 & t, o = 1073741824 & e, s = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), o & s ? 2147483648 ^ a ^ n ^ i : o | s ? 1073741824 & a ? 3221225472 ^ a ^ n ^ i : 1073741824 ^ a ^ n ^ i : a ^ n ^ i
		}

		function n(e, t, o) {
			return e & t | ~e & o
		}

		function i(e, t, o) {
			return e & o | t & ~o
		}

		function r(e, t, o) {
			return e ^ t ^ o
		}

		function l(e, t, o) {
			return t ^ (e | ~o)
		}

		function s(e, i, r, l, d, u, s) {
			return e = o(e, o(o(n(i, r, l), d), s)), o(t(e, u), i)
		}

		function u(e, n, r, l, d, u, s) {
			return e = o(e, o(o(i(n, r, l), d), s)), o(t(e, u), n)
		}

		function _(e, n, i, l, d, u, s) {
			return e = o(e, o(o(r(n, i, l), d), s)), o(t(e, u), n)
		}

		function p(e, n, i, r, d, u, s) {
			return e = o(e, o(o(l(n, i, r), d), s)), o(t(e, u), n)
		}

		function h(e) {
			for (var t = e.length, o = t + 8, s = 16 * ((o - o % 64) / 64 + 1), n = Array(s - 1), i = 0, a = 0, d; a < t;) d = (a - a % 4) / 4, i = 8 * (a % 4), n[d] |= e.charCodeAt(a) << i, a++;
			return d = (a - a % 4) / 4, i = 8 * (a % 4), n[d] |= 128 << i, n[s - 2] = t << 3, n[s - 1] = t >>> 29, n
		}

		function m(e) {
			var t = "",
				o = "",
				s, n;
			for (n = 0; 3 >= n; n++) s = 255 & e >>> 8 * n, o = "0" + s.toString(16), t += o.substr(o.length - 2, 2);
			return t
		}

		function g(e) {
			e = e.replace(/\r\n/g, "\n");
			for (var t = "", o = 0, s; o < e.length; o++) s = e.charCodeAt(o), 128 > s ? t += String.fromCharCode(s) : 127 < s && 2048 > s ? (t += String.fromCharCode(192 | s >> 6), t += String.fromCharCode(128 | 63 & s)) : (t += String.fromCharCode(224 | s >> 12), t += String.fromCharCode(128 | 63 & s >> 6), t += String.fromCharCode(128 | 63 & s));
			return t
		}
		var y = [],
			S = 7,
			v = 12,
			f = 17,
			B = 22,
			T = 5,
			P = 9,
			w = 14,
			H = 20,
			C = 4,
			E = 11,
			O = 16,
			L = 23,
			A = 6,
			I = 10,
			M = 15,
			W = 21,
			D, V, R, F, N, U, Y, X, z;
		for (e = g(e), y = h(e), U = 1732584193, Y = 4023233417, X = 2562383102, z = 271733878, D = 0; D < y.length; D += 16) V = U, R = Y, F = X, N = z, U = s(U, Y, X, z, y[D + 0], S, 3614090360), z = s(z, U, Y, X, y[D + 1], v, 3905402710), X = s(X, z, U, Y, y[D + 2], f, 606105819), Y = s(Y, X, z, U, y[D + 3], B, 3250441966), U = s(U, Y, X, z, y[D + 4], S, 4118548399), z = s(z, U, Y, X, y[D + 5], v, 1200080426), X = s(X, z, U, Y, y[D + 6], f, 2821735955), Y = s(Y, X, z, U, y[D + 7], B, 4249261313), U = s(U, Y, X, z, y[D + 8], S, 1770035416), z = s(z, U, Y, X, y[D + 9], v, 2336552879), X = s(X, z, U, Y, y[D + 10], f, 4294925233), Y = s(Y, X, z, U, y[D + 11], B, 2304563134), U = s(U, Y, X, z, y[D + 12], S, 1804603682), z = s(z, U, Y, X, y[D + 13], v, 4254626195), X = s(X, z, U, Y, y[D + 14], f, 2792965006), Y = s(Y, X, z, U, y[D + 15], B, 1236535329), U = u(U, Y, X, z, y[D + 1], T, 4129170786), z = u(z, U, Y, X, y[D + 6], P, 3225465664), X = u(X, z, U, Y, y[D + 11], w, 643717713), Y = u(Y, X, z, U, y[D + 0], H, 3921069994), U = u(U, Y, X, z, y[D + 5], T, 3593408605), z = u(z, U, Y, X, y[D + 10], P, 38016083), X = u(X, z, U, Y, y[D + 15], w, 3634488961), Y = u(Y, X, z, U, y[D + 4], H, 3889429448), U = u(U, Y, X, z, y[D + 9], T, 568446438), z = u(z, U, Y, X, y[D + 14], P, 3275163606), X = u(X, z, U, Y, y[D + 3], w, 4107603335), Y = u(Y, X, z, U, y[D + 8], H, 1163531501), U = u(U, Y, X, z, y[D + 13], T, 2850285829), z = u(z, U, Y, X, y[D + 2], P, 4243563512), X = u(X, z, U, Y, y[D + 7], w, 1735328473), Y = u(Y, X, z, U, y[D + 12], H, 2368359562), U = _(U, Y, X, z, y[D + 5], C, 4294588738), z = _(z, U, Y, X, y[D + 8], E, 2272392833), X = _(X, z, U, Y, y[D + 11], O, 1839030562), Y = _(Y, X, z, U, y[D + 14], L, 4259657740), U = _(U, Y, X, z, y[D + 1], C, 2763975236), z = _(z, U, Y, X, y[D + 4], E, 1272893353), X = _(X, z, U, Y, y[D + 7], O, 4139469664), Y = _(Y, X, z, U, y[D + 10], L, 3200236656), U = _(U, Y, X, z, y[D + 13], C, 681279174), z = _(z, U, Y, X, y[D + 0], E, 3936430074), X = _(X, z, U, Y, y[D + 3], O, 3572445317), Y = _(Y, X, z, U, y[D + 6], L, 76029189), U = _(U, Y, X, z, y[D + 9], C, 3654602809), z = _(z, U, Y, X, y[D + 12], E, 3873151461), X = _(X, z, U, Y, y[D + 15], O, 530742520), Y = _(Y, X, z, U, y[D + 2], L, 3299628645), U = p(U, Y, X, z, y[D + 0], A, 4096336452), z = p(z, U, Y, X, y[D + 7], I, 1126891415), X = p(X, z, U, Y, y[D + 14], M, 2878612391), Y = p(Y, X, z, U, y[D + 5], W, 4237533241), U = p(U, Y, X, z, y[D + 12], A, 1700485571), z = p(z, U, Y, X, y[D + 3], I, 2399980690), X = p(X, z, U, Y, y[D + 10], M, 4293915773), Y = p(Y, X, z, U, y[D + 1], W, 2240044497), U = p(U, Y, X, z, y[D + 8], A, 1873313359), z = p(z, U, Y, X, y[D + 15], I, 4264355552), X = p(X, z, U, Y, y[D + 6], M, 2734768916), Y = p(Y, X, z, U, y[D + 13], W, 1309151649), U = p(U, Y, X, z, y[D + 4], A, 4149444226), z = p(z, U, Y, X, y[D + 11], I, 3174756917), X = p(X, z, U, Y, y[D + 2], M, 718787259), Y = p(Y, X, z, U, y[D + 9], W, 3951481745), U = o(U, V), Y = o(Y, R), X = o(X, F), z = o(z, N);
		var Q = m(U) + m(Y) + m(X) + m(z);
		return Q.toLowerCase()
	}, s.getSecondsFromString = function(e) {
		var t = 0,
			o = 0,
			s = 0;
		if (e) return e = e.split(":"), t = e[0], "0" == t[0] && "0" != t[1] && (t = parseInt(t[1])), "00" == t && (t = 0), o = e[1], "0" == o[0] && "0" != o[1] && (o = parseInt(o[1])), "00" == o && (o = 0), secs = parseInt(e[2].replace(/,.*/ig, "")), "0" == secs[0] && "0" != secs[1] && (secs = parseInt(secs[1])), "00" == secs && (secs = 0), 0 != t && (s += 60 * (60 * t)), 0 != o && (s += 60 * o), s += secs, s
	}, s.getCanvasWithModifiedColor = function(e, t, o, s, n) {
		if (e) {
			var i = document.createElement("canvas"),
				a = i.getContext("2d"),
				d = null,
				r = null,
				l = parseInt(t.replace(/^#/, ""), 16),
				u = {
					R: 255 & l >>> 16,
					G: 255 & l >>> 8,
					B: 255 & l
				},
				_;
			i.style.position = "absolute", i.style.left = "0px", i.style.top = "0px", i.style.margin = "0px", i.style.padding = "0px", i.style.maxWidth = "none", i.style.maxHeight = "none", i.style.border = "none", i.style.lineHeight = "1", i.style.backgroundColor = "transparent", i.style.backfaceVisibility = "hidden", i.style.webkitBackfaceVisibility = "hidden", i.style.MozBackfaceVisibility = "hidden", i.style.MozImageRendering = "optimizeSpeed", i.style.WebkitImageRendering = "optimizeSpeed", null == s && (s = e.width, n = e.height), i.width = s, i.height = n, a.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, s, n), d = a.getImageData(0, 0, s, n), r = a.getImageData(0, 0, s, n);
			for (var c = 0, p = d.data.length; c < p; c += 4) 0 < r.data[c + 3] && (r.data[c] = d.data[c] / 255 * u.R, r.data[c + 1] = d.data[c + 1] / 255 * u.G, r.data[c + 2] = d.data[c + 2] / 255 * u.B);
			return a.globalAlpha = .5, a.putImageData(r, 0, 0), a.drawImage(i, 0, 0), o && (_ = new Image, _.src = i.toDataURL()), {
				canvas: i,
				image: _
			}
		}
	}, s.xmlToJson = function(e) {
		var t = {};
		if (!(1 == e.nodeType)) 3 == e.nodeType ? t = e.nodeValue.trim() : 4 == e.nodeType && (t = e.nodeValue);
		else if (0 < e.attributes.length) {
			t["@attributes"] = {};
			for (var o = 0, n; o < e.attributes.length; o++) n = e.attributes.item(o), t["@attributes"][n.nodeName] = n.nodeValue
		}
		if (e.hasChildNodes())
			for (var a = 0; a < e.childNodes.length; a++) {
				var d = e.childNodes.item(a),
					r = d.nodeName;
				if ("undefined" == typeof t[r]) t[r] = s.xmlToJson(d);
				else {
					if ("undefined" == typeof t[r].length) {
						var l = t[r];
						t[r] = [], t[r].push(l)
					}
					"object" == typeof t[r] && t[r].push(s.xmlToJson(d))
				}
			}
		return t
	}, s.isIMA = function(e) {
		return !!e.match(/doubleclick.net/ig) || void 0
	}, s.isURLEncoded = function(e) {
		try {
			var t = decodeURIComponent(e);
			if (t != e && -1 != e.indexOf("%")) return !0
		} catch (t) {}
		return !1
	}, s.getValidSource = function(e) {
		if (e) {
			var t = "null" == location.origin ? "" : location.origin,
				o = location.pathname; - 1 != o.indexOf(".") && (o = o.substr(0, o.lastIndexOf("/") + 1));
			var n = -1 != e.indexOf("http:") || -1 != e.indexOf("https:") || s.isLocal;
			n || (e = t + o + e);
			var i = e.substr(0, e.lastIndexOf("/") + 1);
			s.isURLEncoded(i) || (i = encodeURI(i));
			var a = e.substr(e.lastIndexOf("/") + 1);
			return a = e.match(/\.mp3|\.mp4|\.m3u8|\.txt|\.srt|\.vtt|\.jpg|\.jpeg|\.png/ig) && !e.match(/\.s3|\drive.|dropbox|cloudfront.|\?/ig) ? s.isURLEncoded(a) ? e.substr(e.lastIndexOf("/") + 1) : encodeURI(e.substr(e.lastIndexOf("/") + 1)) : e.substr(e.lastIndexOf("/") + 1), e = i + a, e
		}
	}, s.changeCanvasHEXColor = function(e, t, o, s, n, i) {
		if (e) {
			var t = t,
				a = t.getContext("2d"),
				d = null,
				r = null,
				l = parseInt(o.replace(/^#/, ""), 16),
				u = {
					R: 255 & l >>> 16,
					G: 255 & l >>> 8,
					B: 255 & l
				};
			n || (n = e.width, i = e.height), t.width = n, t.height = i, a.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, n, i), d = a.getImageData(0, 0, n, i), r = a.getImageData(0, 0, n, i);
			for (var _ = 0, c = d.data.length; _ < c; _ += 4) 0 < r.data[_ + 3] && (r.data[_] = d.data[_] / 255 * u.R, r.data[_ + 1] = d.data[_ + 1] / 255 * u.G, r.data[_ + 2] = d.data[_ + 2] / 255 * u.B);
			if (a.globalAlpha = .5, a.putImageData(r, 0, 0), a.drawImage(t, 0, 0), s) {
				var p = new Image;
				return p.src = t.toDataURL(), p
			}
		}
	}, s.indexOfArray = function(e, t) {
		for (var o = e.length, s = 0; s < o; s++)
			if (e[s] === t) return s;
		return -1
	}, s.randomizeArray = function(e) {
		for (var t = [], o = e.concat(), s = o.length, n = 0, a; n < s; n++) a = Math.floor(Math.random() * o.length), t.push(o[a]), o.splice(a, 1);
		return t
	}, s.prt = function(t, o) {
		for (void 0 === o && (o = 1); o-- && t;) t = t.parentNode;
		return t && 1 === t.nodeType ? t : null
	}, s.sibling = function(t, o) {
		for (; t && 0 !== o;)
			if (0 < o) {
				if (t.nextElementSibling) t = t.nextElementSibling;
				else
					for (var t = t.nextSibling; t && 1 !== t.nodeType; t = t.nextSibling);
				o--
			} else {
				if (t.previousElementSibling) t = t.previousElementSibling;
				else
					for (var t = t.previousSibling; t && 1 !== t.nodeType; t = t.previousSibling);
				o++
			} return t
	}, s.getChildAt = function(t, e) {
		var o = s.getChildren(t);
		return 0 > e && (e += o.length), 0 > e ? null : o[e]
	}, s.getChildById = function(e) {
		return document.getElementById(e) || void 0
	}, s.getChildren = function(t, e) {
		for (var o = [], s = t.firstChild; null != s; s = s.nextSibling) e ? o.push(s) : 1 === s.nodeType && o.push(s);
		return o
	}, s.getChildrenFromAttribute = function(t, e, o) {
		for (var n = [], i = t.firstChild; null != i; i = i.nextSibling) o && s.hasAttribute(i, e) ? n.push(i) : 1 === i.nodeType && s.hasAttribute(i, e) && n.push(i);
		return 0 == n.length ? void 0 : n
	}, s.getChildFromNodeListFromAttribute = function(t, e, o) {
		for (var n = t.firstChild; null != n; n = n.nextSibling) {
			if (o && s.hasAttribute(n, e)) return n;
			if (1 === n.nodeType && s.hasAttribute(n, e)) return n
		}
	}, s.getAttributeValue = function(t, e) {
		return s.hasAttribute(t, e) ? t.getAttribute(e) : void 0
	}, s.hasAttribute = function(t, e) {
		if (t.hasAttribute) return t.hasAttribute(e);
		var o = t.attributes[e];
		return !!o
	}, s.insertNodeAt = function(e, t, o) {
		var n = s.children(e);
		if (0 > o || o > n.length) throw new Error("invalid index!");
		else e.insertBefore(t, n[o])
	}, s.hasCanvas = function() {
		return !!document.createElement("canvas")
	}, s.hitTest = function(e, t, o) {
		if (!e) throw Error("Hit test target is null!");
		var s = e.getBoundingClientRect();
		return !!(t >= parseInt(s.left) && t <= parseInt(s.left + (s.right - s.left)) && o >= parseInt(s.top) && o <= parseInt(s.top + (s.bottom - s.top)))
	}, s.hitBuggyTest = function(e) {
		if (!e) throw Error("Hit test target is null!");
		e.getBoundingClientRect();
		return !1
	}, s.hasWEBGL = function() {
		try {
			var t = document.createElement("canvas");
			return !!e.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
		} catch (t) {
			return !1
		}
	}(), s.isLocal = function() {
		return !("file:" != document.location.protocol)
	}(), s.getScrollOffsets = function() {
		return null == e.pageXOffset ? "CSS1Compat" == document.compatMode ? {
			x: document.documentElement.scrollLeft,
			y: document.documentElement.scrollTop
		} : void 0 : {
			x: e.pageXOffset,
			y: e.pageYOffset
		}
	}, s.getViewportSize = function() {
		return s.hasPointerEvent && 1 < navigator.msMaxTouchPoints ? {
			w: document.documentElement.clientWidth || e.innerWidth,
			h: document.documentElement.clientHeight || e.innerHeight
		} : s.isMobile ? {
			w: e.innerWidth,
			h: e.innerHeight
		} : {
			w: document.documentElement.clientWidth || e.innerWidth,
			h: document.documentElement.clientHeight || e.innerHeight
		}
	}, s.getViewportMouseCoordinates = function(t) {
		var e = s.getScrollOffsets();
		return t.touches ? {
			screenX: null == t.touches[0] ? t.touches.pageX - e.x : t.touches[0].pageX - e.x,
			screenY: null == t.touches[0] ? t.touches.pageY - e.y : t.touches[0].pageY - e.y
		} : {
			screenX: t.clientX == null ? t.pageX - e.x : t.clientX,
			screenY: t.clientY == null ? t.pageY - e.y : t.clientY
		}
	}, s.hasPointerEvent = function() {
		return !!e.navigator.msPointerEnabled || !!e.navigator.pointerEnabled
	}(), s.isMobile = function() {
		var t = ["android", "webos", "iphone", "ipad", "blackberry", "kfsowi"];
		for (var o in t)
			if (-1 != navigator.userAgent.toLowerCase().indexOf((t[o] + "").toLowerCase())) return !0;
		return !("macintel" !== navigator.platform.toLowerCase() || !(1 < navigator.maxTouchPoints) || e.MSStream)
	}(), s.isIE = function() {
		var e = !(-1 == navigator.userAgent.toLowerCase().indexOf("msie")) || !(-1 == navigator.userAgent.toLowerCase().indexOf("edge"));
		return e || !!document.documentElement.msRequestFullscreen
	}(), s.isAndroid = function() {
		return -1 != navigator.userAgent.toLowerCase().indexOf("android".toLowerCase())
	}(), s.isChrome = function() {
		if (!s.isIE) {
			var e = navigator.userAgent.toLowerCase();
			return e.match(/browser/ig) ? void 0 : e.match(/chrome/ig)
		}
	}(), s.isSafari = function() {
		return -1 != navigator.userAgent.toLowerCase().indexOf("safari") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome")
	}(), s.isOpera = function() {
		return -1 != navigator.userAgent.toLowerCase().indexOf("opr")
	}(), s.isFirefox = function() {
		return -1 != navigator.userAgent.toLowerCase().indexOf("firefox")
	}(), s.isIEWebKit = function() {
		return !!document.documentElement.msRequestFullscreen
	}(), s.isIEAndLessThen9 = function() {
		return !(-1 == navigator.userAgent.toLowerCase().indexOf("msie 7")) || !(-1 == navigator.userAgent.toLowerCase().indexOf("msie 8"))
	}(), s.isIEAnd9OrLess = function() {
		return !(-1 == navigator.userAgent.toLowerCase().indexOf("msie 7")) || !(-1 == navigator.userAgent.toLowerCase().indexOf("msie 8")) || !(-1 == navigator.userAgent.toLowerCase().indexOf("msie 9"))
	}(), s.isIE7 = function() {
		return !(-1 == navigator.userAgent.toLowerCase().indexOf("msie 7"))
	}(), s.isMac = function() {
		return !(-1 == navigator.appVersion.toLowerCase().indexOf("mac"))
	}(), s.isWin = function() {
		return !(-1 == navigator.appVersion.toLowerCase().indexOf("win"))
	}(), s.isIOS = function() {
		return !!("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) || navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
	}(), s.isIphone = function() {
		return navigator.userAgent.match(/(iPhone|iPod)/g)
	}(), s.hasFullScreen = function() {
		return s.dumy.requestFullScreen || s.dumy.mozRequestFullScreen || s.dumy.webkitRequestFullScreen || s.dumy.msieRequestFullScreen
	}();
	s.volumeCanBeSet = function() {
		var e = document.createElement("audio");
		if (e) return e.volume = 0, 0 == e.volume
	}(), s.getVideoFormat = function() {
		var e = document.createElement("video");
		if (e.canPlayType) {
			var t;
			return "probably" == e.canPlayType("video/mp4") || "maybe" == e.canPlayType("video/mp4") ? t = ".mp4" : "probably" == e.canPlayType("video/ogg") || "maybe" == e.canPlayType("video/ogg") ? t = ".ogg" : ("probably" == e.canPlayType("video/webm") || "maybe" == e.canPlayType("video/webm")) && (t = ".webm"), e = null, t
		}
	}(), s.onReady = function(e) {
		document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
			s.checkIfHasTransofrms(), s.hasFullScreen = s.checkIfHasFullscreen(), setTimeout(e, 100)
		}) : document.onreadystatechange = function() {
			s.checkIfHasTransofrms(), s.hasFullScreen = s.checkIfHasFullscreen(), "complete" == document.readyState && setTimeout(e, 100)
		}
	}, s.checkIfHasTransofrms = function() {
		document.documentElement.appendChild(s.dumy), s.hasTransform3d = t(), s.hasTransform2d = o(), s.isReadyMethodCalled_bl = !0
	}, s.checkIfHasFullscreen = function() {
		return !!(document.documentElement.requestFullScreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.msRequestFullscreen)
	}, s.disableElementSelection = function(t) {
		try {
			t.style.userSelect = "none"
		} catch (t) {}
		try {
			t.style.MozUserSelect = "none"
		} catch (t) {}
		try {
			t.style.webkitUserSelect = "none"
		} catch (t) {}
		try {
			t.style.khtmlUserSelect = "none"
		} catch (t) {}
		try {
			t.style.oUserSelect = "none"
		} catch (t) {}
		try {
			t.style.msUserSelect = "none"
		} catch (t) {}
		try {
			t.msUserSelect = "none"
		} catch (t) {}
		t.onselectstart = function() {
			return !1
		}
	}, s.getUrlArgs = function(e) {
		var t = {},
			o = e.substr(e.indexOf("?") + 1) || location.search.substring(1);
		o = o.replace(/(\?*)(\/*)/g, "");
		for (var s = o.split("&"), n = 0; n < s.length; n++) {
			var a = s[n].indexOf("="),
				d = s[n].substring(0, a),
				r = s[n].substring(a + 1);
			r = decodeURIComponent(r), t[d] = r
		}
		return t
	}, s.getHashUrlArgs = function(e) {
		var t = {},
			o = e.substr(e.indexOf("#") + 1) || location.search.substring(1);
		o = o.replace(/(\?*)(\/*)/g, "");
		for (var s = o.split("&"), n = 0; n < s.length; n++) {
			var a = s[n].indexOf("="),
				d = s[n].substring(0, a),
				r = s[n].substring(a + 1);
			r = decodeURIComponent(r), t[d] = r
		}
		return t
	}, s.validateEmail = function(e) {
		return !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)
	}, s.isReadyMethodCalled_bl = !1, e.FWDUVPUtils = s
}(window),
function(t) {
	var o = function(s, n) {
		'use strict';
		var a = this,
			e = o.prototype;
		a.controllerHeight = s._d.controllerHeight, a.sW = 0, a.sH = 0, a.lastPercentPlayed = 0, a.volume = n, a.curDuration = 0, a.countNormalMp3Errors = 0, a.countShoutCastErrors = 0, a.maxShoutCastCountErrors = 5, a.maxNormalCountErrors = 1, a.hasError_bl = !0, a.isStopped_bl = !0, a.currentSession = null, a.isMbl = FWDUVPUtils.isMobile, a.init = function() {
			a.setBkColor(s.videoBackgroundColor_str), a.setupVideo(), a.testVr()
		}, a.setupVideo = function() {
			if (null == a.video_el) {
				if (a.video_el = document.createElement("video"), a.video_el.controls = !1, a.video_el.volume = a.volume, s.is360 || s._d.playsinline) a.video_el.setAttribute("playsinline", "");
				else try {
					a.video_el.removeAttribute("playsinline")
				} catch (t) {}
				s.fillEntireVideoScreen_bl && (a.video_el.style.objectFit = "cover"), s._d.autoPlay_bl && (a.video_el.muted = !0), a.video_el.style.position = "absolute", a.video_el.style.left = "0px", a.video_el.style.top = "0px", a.video_el.style.width = "100%", a.video_el.style.height = "100%", a.video_el.style.margin = "0px", a.video_el.style.padding = "0px", a.video_el.style.maxWidth = "none", a.video_el.style.maxHeight = "none", a.video_el.style.border = "none", a.video_el.style.lineHeight = "0", a.video_el.style.msTouchAction = "none", a.screen.appendChild(a.video_el)
			}!s._d.playsinline && FWDUVPUtils.isIOS && s.subsSource_ar && s.subsSource_ar.forEach(function(e, t) {
				if ("none" != e.source) {
					const n = document.createElement("track");
					var o = Math.abs(s.subsStartAtSubtitle - s.subsSource_ar.length) - 1;
					n.kind = "subtitles", n.label = e.label, n.src = e.source, t == o ? (n.default = !0, n.mode = "showing") : n.mode = "disabled", a.video_el.appendChild(n)
				}
			}), a.video_el.addEventListener("error", a.errorHandler), a.video_el.addEventListener("progress", a.updateProgress), a.video_el.addEventListener("timeupdate", a.updateVideo), a.video_el.addEventListener("pause", a.pauseHandler), a.video_el.addEventListener("canplay", a.canPlayStart), a.video_el.addEventListener("play", a.playHandler), FWDUVPUtils.isIE || a.video_el.addEventListener("waiting", a.startToBuffer), a.video_el.addEventListener("playing", a.stopToBuffer), a.video_el.addEventListener("canplaythrough", a.stopToBuffer), a.video_el.addEventListener("ended", a.endedHandler), a.video_el.removeEventListener("canplay", a.canPlayLoop), a.resizeAndPosition()
		}, a.destroyVideo = function() {
			clearTimeout(a.showErrorWithDelayId_to), a.video_el && (a.stopToUpdateSubtitles(), a.video_el.removeEventListener("error", a.errorHandler), a.video_el.removeEventListener("progress", a.updateProgress), a.video_el.removeEventListener("timeupdate", a.updateVideo), a.video_el.removeEventListener("pause", a.pauseHandler), a.video_el.removeEventListener("play", a.playHandler), !FWDUVPUtils.isIE && a.video_el.removeEventListener("waiting", a.startToBuffer), a.video_el.removeEventListener("playing", a.stopToBuffer), a.video_el.removeEventListener("canplay", a.canPlayStart), a.video_el.removeEventListener("canplaythrough", a.stopToBuffer), a.video_el.removeEventListener("ended", a.endedHandler), a.video_el.addEventListener("canplay", a.canPlayLoop), a.video_el.style.visibility = "hidden", a.video_el.src = "", a.video_el.load())
		}, a.startToBuffer = function() {
			a.dispatchEvent(o.START_TO_BUFFER)
		}, a.stopToBuffer = function() {
			a.dispatchEvent(o.STOP_TO_BUFFER)
		}, a.canPlayStart = function() {
			a.addAudioTracks(), s.is360 && (a.add360Vid(), setTimeout(function() {
				a.render()
			}, 200)), a.dispatchEvent(o.STOP_TO_BUFFER)
		}, a.canPlayLoop = function() {
			s.is360 && a.isStopped_bl && (a.add360Vid(), setTimeout(function() {
				a.render()
			}, 200)), a.dispatchEvent(o.STOP_TO_BUFFER)
		}, a.addAudioTracks = function() {
			if (!a.audioTracks && a.video_el.audioTracks) {
				a.audioTracks = a.video_el.audioTracks;
				var e = Array.from(a.audioTracks);
				s.setAudioTracks(e)
			}
		}, a.errorHandler = function(n) {
			if ("DASH" != s.videoType_str) {
				var e;
				a.hasError_bl = !0, e = 0 == a.video_el.networkState ? "error '_s.video_el.networkState = 0'" : 1 == a.video_el.networkState ? "error '_s.video_el.networkState = 1'" : 3 == a.video_el.networkState ? "source not found" : n, t.console && t.console.log(a.video_el.networkState), clearTimeout(a.showErrorWithDelayId_to), a.showErrorWithDelayId_to = setTimeout(function() {
					a.dispatchEvent(o.ERROR, {
						text: e
					})
				}, 200)
			}
		}, a.resizeAndPosition = function(e, t, o, n) {
			e && (a.sW = e, a.sH = t), a.setWidth(a.sW), a.setHeight(a.sH), a.setX(o), a.setY(n), s.is360 && a.renderer && a.resizeRenderer()
		}, a.setSource = function(e) {
			a.stopToUpdateSubtitles(), a.sourcePath_str = e, s.is360 && a.video_el && (a.video_el.style.visibility = "hidden"), a.video_el && a.stop(), a.initVideo()
		}, a.play = function(e) {
			var t;
			if (clearTimeout(a.playWithDelayId_to), FWDUVPlayer.curInstance = s, a.isStopped_bl) a.initVideo(), a.setVolume(), a.isMbl ? a.play() : a.playWithDelayId_to = setTimeout(a.play, 1e3), a.hasStrtLivStrm = !0, a.startToBuffer(!0), a.isPlaying_bl = !0;
			else if (!a.video_el.ended || e) try {
				a.hasStrtLivStrm = !0, a.isPlaying_bl = !0, a.hasPlayedOnce_bl = !0, t = a.video_el.play(), void 0 !== t && t.then(function() {}, function() {}), FWDUVPUtils.isIE && a.dispatchEvent(o.PLAY)
			} catch (t) {}
			s.is360 && (a.add360Vid(), s.startWhenPlayButtonClick360DegreeVideo && a.startVR())
		}, a.initVideo = function() {
			a.setupVideo(), a.setVolume(), a.isPlaying_bl = !1, a.hasError_bl = !1, a.allowScrubing_bl = !1, a.isStopped_bl = !1, a.video_el.src != a.sourcePath_str && (a.video_el.src = a.sourcePath_str)
		}, a.pause = function() {
			if (!(null == a || a.isStopped_bl || a.hasError_bl) && !a.video_el.ended) try {
				a.video_el.pause(), a.isPlaying_bl = !1, FWDUVPUtils.isIE && a.dispatchEvent(o.PAUSE)
			} catch (t) {}
		}, a.togglePlayPause = function() {
			null != a && a.isSafeToBeControlled_bl && (a.isPlaying_bl ? a.pause() : a.play())
		}, a.resume = function() {
			a.isStopped_bl || a.play()
		}, a.pauseHandler = function() {
			a.allowScrubing_bl || a.dispatchEvent(o.PAUSE)
		}, a.playHandler = function() {
			a.allowScrubing_bl || (!a.isStartEventDispatched_bl && (a.dispatchEvent(o.START), a.isStartEventDispatched_bl = !0), s.is360 && a.start360Render(), a.startToUpdateSubtitles(), a.stopToBuffer(), a.stopBufferId_to = setTimeout(function() {
				a.stopToBuffer()
			}, 1e3), a.dispatchEvent(o.PLAY))
		}, a.endedHandler = function() {
			a.stopToUpdateSubtitles(), a.dispatchEvent(o.PLAY_COMPLETE)
		}, a.stop = function(e) {
			(null == a || null == a.video_el || a.isStopped_bl) && !e || (clearTimeout(a.sizeId_to), a.isPlaying_bl = !1, a.isStopped_bl = !0, a.hasPlayedOnce_bl = !0, a.hasStrtLivStrm = !1, a.isSafeToBeControlled_bl = !1, a.isStartEventDispatched_bl = !1, a.audioTracks = null, a.stopToUpdateSubtitles(), clearTimeout(a.playWithDelayId_to), clearTimeout(a.stopBufferId_to), a.endVRSesion(), a.stop360Render(), a.destroyVideo(), a.dispatchEvent(o.LOAD_PROGRESS, {
				percent: 0
			}), a.dispatchEvent(o.UPDATE_TIME, {
				curTime: "00:00",
				totalTime: "00:00"
			}), a.dispatchEvent(o.STOP), a.stopToBuffer())
		}, a.safeToBeControlled = function() {
			(s.videoType_str != FWDUVPlayer.HLS_JS && s.videoType_str != FWDUVPlayer.DASH || a.hasStrtLivStrm) && (a.isSafeToBeControlled_bl || (a.stopToScrub(), a.resizeAndPosition(), a.hasHours_bl = 0 < Math.floor(a.video_el.duration / 3600), a.isPlaying_bl = !0, a.isSafeToBeControlled_bl = !0, !s.is360 && (a.video_el.style.visibility = "visible"), setTimeout(function() {
				a.renderer && (a.renderer.domElement.style.left = "0px")
			}, 1e3), s.fillEntireVideoScreen_bl ? a.sizeId_to = setTimeout(function() {
				a.dispatchEvent(o.SAFE_TO_SCRUBB)
			}, 500) : a.dispatchEvent(o.SAFE_TO_SCRUBB)))
		}, a.updateProgress = function() {
			if (s.videoType_str != FWDUVPlayer.HLS_JS || a.hasStrtLivStrm) {
				var e = 0,
					t;
				0 < a.video_el.buffered.length && (t = a.video_el.buffered.end(a.video_el.buffered.length - 1), e = t.toFixed(1) / a.video_el.duration.toFixed(1), (isNaN(e) || !e) && (e = 0)), 1 == e && a.video_el.removeEventListener("progress", a.updateProgress), a.dispatchEvent(o.LOAD_PROGRESS, {
					percent: e
				})
			}
		}, a.updateVideo = function() {
			var e;
			a.allowScrubing_bl || (e = a.video_el.currentTime / a.video_el.duration, a.dispatchEvent(o.UPDATE, {
				percent: e
			}));
			var t = FWDUVPUtils.formatTime(a.video_el.duration),
				n = FWDUVPUtils.formatTime(a.video_el.currentTime);
			a.video_el.currentTime && a.safeToBeControlled(), isNaN(a.video_el.duration) || s.videoType_str != FWDUVPlayer.VIDEO && s.videoType_str != FWDUVPlayer.HLS_JS && s.videoType_str != FWDUVPlayer.DASH ? a.dispatchEvent(o.UPDATE_TIME, {
				curTime: "00:00",
				totalTime: "00:00",
				seconds: 0,
				totalTimeInSeconds: 0
			}) : a.dispatchEvent(o.UPDATE_TIME, {
				curTime: n,
				totalTime: t,
				seconds: a.video_el.currentTime,
				totalTimeInSeconds: a.video_el.duration
			}), a.lastPercentPlayed = e, a.curDuration = n
		}, a.startToScrub = function() {
			a.allowScrubing_bl = !0
		}, a.stopToScrub = function() {
			a.allowScrubing_bl = !1
		}, a.scrubbAtTime = function(e) {
			a.video_el.currentTime = e;
			var t = FWDUVPUtils.formatTime(a.video_el.duration),
				s = FWDUVPUtils.formatTime(a.video_el.currentTime);
			a.dispatchEvent(o.UPDATE_TIME, {
				curTime: s,
				totalTime: t
			})
		}, a.scrub = function(t, s) {
			s && a.startToScrub();
			try {
				a.video_el.currentTime = a.video_el.duration * t;
				var e = FWDUVPUtils.formatTime(a.video_el.duration),
					n = FWDUVPUtils.formatTime(a.video_el.currentTime);
				a.dispatchEvent(o.UPDATE_TIME, {
					curTime: n,
					totalTime: e
				})
			} catch (t) {}
		}, a.replay = function() {
			a.scrub(0), a.play()
		}, a.setVolume = function(e) {
			e != null && (a.volume = e), a.video_el && (a.video_el.volume = a.volume, e && (a.video_el.muted = !1))
		}, a.setPlaybackRate = function(e) {
			a.video_el && (a.video_el.defaultPlaybackRate = e, a.video_el.playbackRate = e)
		}, a.start360Render = function() {
			a.is360Rendering_bl = !0, a.video_el.style.visibility = "hidden", a.renderer.setAnimationLoop(a.render)
		}, a.stop360Render = function() {
			if (a.renderer) {
				a.is360Rendering_bl = !1;
				try {
					a.screen.removeChild(a.renderer.domElement)
				} catch (t) {}
				a.pause360Render(), a.videoTexture.dispose(), a.renderer.dispose(), a.renderer = null, a.cameraL = null, a.scene = null
			}
		}, a.pause360Render = function() {
			a.renderer.setAnimationLoop(null)
		}, a.add360Vid = function() {
			if (s.controller_do.vrButton_do && s.controller_do.enableVrButton(), !a.cameraL) {
				try {
					a.screen.removeChild(a.renderer.domElement)
				} catch (t) {}
				a.cameraL = new THREE.PerspectiveCamera(45, a.sW / a.sH, .1, 1e4), a.cameraL.aspect = a.sW / a.sH, a.cameraL.position.set(0, 0, 500), a.videoTexture || (a.video_el.setAttribute("crossorigin", "anonymous"), a.videoTexture = new THREE.VideoTexture(a.video_el)), a.sphereGeopmetry = new THREE.SphereGeometry(500, 60, 40), a.sphereMat = new THREE.MeshBasicMaterial({
					map: a.videoTexture
				}), a.sphereMat.side = THREE.BackSide, a.sphere = new THREE.Mesh(a.sphereGeopmetry, a.sphereMat), a.sphere.scale.x = -1, a.sphere.rotateY(s.rotationY360DegreeVideo), a.renderer = new THREE.WebGLRenderer({
					antialias: !0
				}), a.renderer.setPixelRatio(t.devicePixelRatio), a.renderer.xr.enabled = !0, a.renderer.xr.setReferenceSpaceType("local"), a.screen.appendChild(a.renderer.domElement), a.scene = new THREE.Scene, a.scene.background = new THREE.Color(0), a.scene.add(a.cameraL), a.scene.add(a.sphere), a.controls = new THREE.OrbitControls(a.cameraL, s.dClk_do.screen), a.controls.enableDamping = !0, a.controls.enableZoom = !0, a.controls.dampingFactor = .25, a.controls.maxDistance = 500, a.controls.minDistance = 500, a.controls.maxAzimuthAngle = 1 / 0, a.controls.enabled = !0, a.render()
			}
		}, a.render = function() {
			a.cameraL && (a.resizeRenderer(), a.renderer.render(a.scene, a.cameraL), a.controls.update())
		}, a.resizeRenderer = function() {
			if (a.cameraL) {
				var e = a.sW,
					o = a.sH;
				a.currentSession && (e = t.innerWidth, o = t.innerHeight), a.renderer.setSize(e, o), a.renderer.domElement.style.width = "100%", a.renderer.domElement.style.height = "100%", a.cameraL.aspect = e / o, a.cameraL.updateProjectionMatrix()
			}
		}, a.showVrMessage = function() {
			var e = a.vrMessage + " - <a href=\"https://immersiveweb.dev/\" target=\"_blank\">read more about WebXR</a>";
			s.main_do && s.main_do.addChild(s.info_do), s.info_do && s.info_do.showText(e)
		}, a.startVR = function() {
			async function e(e) {
				a.resizeRenderer(), e.addEventListener("end", o), e.isImmersive = !0, await a.renderer.xr.setSession(e), a.currentSession = e, t.scrollTo(0, 0)
			}

			function o() {
				a.currentSession.removeEventListener("end", o), a.currentSession = null
			}
			if (!a.vrSupport_bl && !a.showdVRMessage) return a.showVrMessage(), void(a.showdVRMessage = !0);
			if (s.isFullScreen_bl) return void s.goNormalScreen();
			if (!a.currentSession && "xr" in navigator)
				if (null === a.currentSession) {
					navigator.xr.requestSession("immersive-vr", {
						optionalFeatures: ["local-floor", "bounded-floor", "hand-tracking", "layers"]
					}).then(e)
				} else a.currentSession.end()
		}, a.endVRSesion = async function() {
			a.currentSession && (await a.currentSession.end())
		}, a.testVr = function() {
			navigator.xr ? navigator.xr.isSessionSupported("immersive-vr").then(function(e) {
				e ? (a.vrSupport_bl = !0, a.vrMessage = void 0) : (a.vrSupport_bl = !1, a.vrMessage = "VR not supported")
			}).catch(function() {
				a.vrSupport_bl = !1, a.vrMessage = "VR not allowed"
			}) : (a.vrSupport_bl = !1, a.vrMessage = "VR not supported")
		}, a.setAudioTrack = function(e) {
			for (var t = a.audioTracks[e], o = 0, s; o < a.audioTracks.length; o++) s = a.audioTracks[o], s.enabled = o == e
		}, a.stopToUpdateSubtitles = function() {
			clearInterval(a.startToUpdateSubtitleId_int)
		}, a.startToUpdateSubtitles = function() {
			clearInterval(a.startToUpdateSubtitleId_int), a.startToUpdateSubtitleId_int = setInterval(a.updateSubtitleHandler, 10)
		}, a.updateSubtitleHandler = function() {
			a.dispatchEvent(o.UPDATE_SUBTITLE, {
				curTime: a.video_el.currentTime
			})
		}, a.init()
	};
	o.setPrototype = function() {
		o.prototype = new FWDUVPDisplayObject("div")
	}, o.UPDATE_SUBTITLE = "updateSubtitle", o.ERROR = "error", o.UPDATE = "update", o.UPDATE_TIME = "updateTime", o.SAFE_TO_SCRUBB = "safeToControll", o.LOAD_PROGRESS = "loadProgress", o.START = "start", o.PLAY = "play", o.PAUSE = "pause", o.STOP = "stop", o.PLAY_COMPLETE = "playComplete", o.START_TO_BUFFER = "startToBuffer", o.STOP_TO_BUFFER = "stopToBuffer", t.FWDUVPVideoScreen = o
}(window),
function(e) {
	var t = function(e, o) {
		'use strict';
		var s = this,
			n = t.prototype;
		s.lastQuality_str = "auto", s.volume = o, s.controllerHeight = e._d.controllerHeight, s.hasBeenCreatedOnce_bl = !0, s.isStopped_bl = !0, s.isPausedInEvent_bl = !0, s.isShowed_bl = !0, s.isMbl = FWDUVPUtils.isMobile, s.init = function() {
			s.hasTransform3d_bl = !1, s.hasTransform2d_bl = !1, s.setBkColor(e.videoBackgroundColor_str), s.setBackfaceVisibility(), e.videoHolder_do.addChildAt(s, 0), s.resizeAndPosition(), s.setupVideo(), s.setupDisableClick()
		}, s.setupDisableClick = function() {
			s.disableClick_do = new FWDUVPDisplayObject("div"), s.disableClick_do.setBkColor(e.backgroundColor_str), s.disableClick_do.setAlpha(1e-8), s.addChild(s.disableClick_do)
		}, s.showDisable = function() {
			e.tempVidStageWidth && s.disableClick_do.w != s.sW && (s.disableClick_do.setWidth(e.tempVidStageWidth), FWDUVPUtils.isIphone ? s.disableClick_do.setHeight(e.tempVidStageHeight - s.controllerHeight) : s.disableClick_do.setHeight(e.tempVidStageHeight))
		}, s.hideDisable = function() {
			0 == s.disableClick_do.w || (s.disableClick_do.setWidth(0), s.disableClick_do.setHeight(0))
		}, s.setupVideo = function() {
			if (!s.vimeoPlayer) {
				s.iframe_do = new FWDUVPDisplayObject("IFRAME"), s.iframe_do.hasTransform3d_bl = !1, s.iframe_do.hasTransform2d_bl = !1, s.iframe_do.screen.setAttribute("id", e.instanceName_str + "vimeo"), s.isMbl && (s.iframe_do.screen.setAttribute("webkitallowfullscreen", "1"), s.iframe_do.screen.setAttribute("mozallowfullscreen", "1"), s.iframe_do.screen.setAttribute("allowfullscreen", "1"));
				var t = 0;
				e._d.showDefaultControllerForVimeo_bl && !s.isMobile_bl && (t = 1);
				var o = 0;
				e._d.playsinline && (o = 1), s.iframe_do.screen.setAttribute("src", "https://player.vimeo.com/video/76979871?player_id=" + e.instanceName_str + "vimeo&playsinline=" + o + "&muted=0&autoplay=0&background=" + t + ""), s.iframe_do.screen.setAttribute("id", e.instanceName_str + "vimeo"), s.iframe_do.screen.setAttribute("frameborder", "0"), s.iframe_do.screen.setAttribute("allow", "fullscreen; autoplay;"), s.iframe_do.screen.dataset.ready = "true", e._d.autoPlay_bl && s.iframe_do.screen.setAttribute("muted", "1"), s.iframe_do.getStyle().width = "100%", s.iframe_do.getStyle().height = "100%", s.iframe_do.setBackfaceVisibility(), s.addChild(s.iframe_do), s.vimeoPlayer = new Vimeo.Player(s.iframe_do.screen), s.vimeoPlayer.on("play", function() {
					s.playHandler()
				}), s.vimeoPlayer.on("pause", function() {
					s.pauseHandler()
				}), s.vimeoPlayer.on("loadProgress", function() {
					s.loadProgressHandler()
				}), s.vimeoPlayer.on("loaded", function() {
					s.loadedHandler()
				}), s.vimeoPlayer.ready().then(function() {
					s.readyHandler()
				}), s.blackOverlay_do = new FWDUVPDisplayObject("div"), s.blackOverlay_do.getStyle().backgroundColor = "#000000", s.blackOverlay_do.getStyle().width = "100%", s.blackOverlay_do.getStyle().height = "100%", s.addChild(s.blackOverlay_do)
			}
		}, s.resizeAndPosition = function() {
			e.tempVidStageWidth && (s.setWidth(e.tempVidStageWidth), s.setHeight(e.tempVidStageHeight), !e._d.showDefaultControllerForVimeo_bl && e.controller_do && s.setHeight(e.tempVidStageHeight - e.controller_do.h))
		}, s.setSource = function(o) {
			o && (s.sourcePath_str = o), s.stopToUpdateSubtitles();
			var n = s.sourcePath_str.match(/[^\/]+$/i);
			s.vimeoPlayer.loadVideo(n).then(function() {
				e._d.autoPlay_bl || e.isThumbClick_bl ? (e.isThumbClick_bl && (e.videoPoster_do.hide(!0), e.play()), e._d.autoPlay_bl && (e.controller_do && e.controller_do.updateVolume(0), (e.displayType != FWDUVPlayer.LIGHTBOX || e.lightBox_do.isShowed_bl) && (e.videoPoster_do.hide(!0), e.play()))) : (e.videoPoster_do.show(), e.lrgPlayBtn && e.lrgPlayBtn.show()), s.isMbl || !e.isAdd_bl || e.loadAddFirstTime_bl || (e.play(), e.videoPoster_do.hide(!0)), s.setVolume(e.volume)
			}).catch(function(e) {
				console && console.log(e), s.displayErrorId_to = setTimeout(function() {
					s.dispatchEvent(t.ERROR, {
						error: e.name
					})
				}, 2e3), console && console.log(e)
			})
		}, s.readyHandler = function() {
			if (clearTimeout(s.intitErrorId_to), s.contains(s.blackOverlay_do) && (clearTimeout(s.removeChildWithDelayId_to), s.removeChildWithDelayId_to = setTimeout(function() {
					s.removeChild(s.blackOverlay_do)
				}, 1500)), s.resizeAndPosition(), s.isReady_bl) {
				try {
					s.vimeoPlayer.api("setColor", "#FFFFFF")
				} catch (t) {}
				return e.videoType_str == FWDUVPlayer.VIMEO && s.setX(0), void(e._d.autoPlay_bl && e.play())
			}
			s.isReady_bl = !0, s.dispatchEvent(t.READY)
		}, s.loadedHandler = function() {
			s.isVideoLoaded_bl = !0
		}, s.playHandler = function() {
			clearInterval(s.startToPlayWithDelayId_to), clearTimeout(s.displayErrorId_to), s.isStopped_bl = !1, s.isSafeToBeControlled_bl = !0, s.isPlaying_bl = !0, s.startToUpdateSubtitles(), s.startToUpdate(), s.dispatchEvent(t.SAFE_TO_SCRUBB), s.dispatchEvent(t.PLAY), s.hasHours_bl = 0 < Math.floor(s.getDuration() / 3600)
		}, s.loadProgressHandler = function(o) {
			s.isShowed_bl || s.dispatchEvent(t.LOAD_PROGRESS, {
				percent: o.percent
			})
		}, s.pauseHandler = function() {
			s.isPlaying_bl && (s.isPlaying_bl = !1, clearInterval(s.startToPlayWithDelayId_to), s.dispatchEvent(t.PAUSE), s.stopToUpdate())
		}, s.finishHandler = function() {
			e._d.loop_bl && !e.isAdd_bl && (s.stop(), setTimeout(s.play, 200)), s.dispatchEvent(t.PLAY_COMPLETE)
		}, s.play = function() {
			FWDUVPlayer.curInstance = e, s.hasError_bl = !1, s.vimeoPlayer.play(), s.isMbl || (s.isStopped_bl = !1)
		}, s.pause = function() {
			s.isStopped_bl || s.hasError_bl || (clearInterval(s.startToPlayWithDelayId_to), s.vimeoPlayer.pause(), s.stopToUpdate())
		}, s.togglePlayPause = function() {
			s.isPlaying_bl ? s.pause() : s.play()
		}, s.resume = function() {
			s.isStopped_bl || s.play()
		}, s.startToUpdate = function() {
			clearInterval(s.updateVideoId_int), s.updateVideoId_int = setInterval(s.updateVideo, 50)
		}, s.stopToUpdate = function() {
			clearInterval(s.updateVideoId_int)
		}, s.updateVideo = function() {
			var e;
			if (!s.vimeoPlayer) return void stopToUpdate();
			var o = FWDUVPUtils.formatTime(s.getDuration()),
				n = FWDUVPUtils.formatTime(s.getCurrentTime());
			return e = s.getCurrentTime() / s.getDuration(), isNaN(e) && (e = 0), s.getCurrentTime() == s.getDuration() ? void s.finishHandler() : void(s.dispatchEvent(FWDUVPYoutubeScreen.UPDATE, {
				percent: e
			}), s.dispatchEvent(t.UPDATE_TIME, {
				curTime: n,
				totalTime: o,
				seconds: s.getCurrentTime(),
				totalTimeInSeconds: s.getDuration()
			}))
		}, s.stop = function(e) {
			s.isVideoLoaded_bl = !1;
			s.isStopped_bl || (clearInterval(s.startToPlayWithDelayId_to), clearTimeout(s.displayErrorId_to), s.stopVideo(), s.stopToUpdateSubtitles(), s.isPlaying_bl = !1, s.isStopped_bl = !0, s.isCued_bl = !1, s.allowScrubing_bl = !1, s.isSafeToBeControlled_bl = !1, s.isPausedInEvent_bl = !0, s.stopToUpdate(), !e && (s.stopVideo(), s.dispatchEvent(t.STOP)))
		}, s.destroy = function() {
			s.iframe_do && (s.iframe_do.screen.removeAttribute("id", e.instanceName_str + "vimeo"), s.removeChild(s.iframe_do), s.iframe_do.destroy(), s.iframe_do = null), s.vimeoPlayer = null
		}, s.stopVideo = function() {
			s.vimeoPlayer.unload().then(function() {}).catch(function(t) {
				console.log(t)
			})
		}, s.startToScrub = function() {
			s.isSafeToBeControlled_bl && (s.allowScrubing_bl = !0)
		}, s.stopToScrub = function() {
			s.isSafeToBeControlled_bl && (s.allowScrubing_bl = !1)
		}, s.scrubbAtTime = function(e) {
			s.vimeoPlayer.setCurrentTime(e).then(function() {})
		}, s.scrub = function(e) {
			s.isSafeToBeControlled_bl && s.vimeoPlayer.setCurrentTime(e * s.getDuration()).then(function() {})
		}, s.setVolume = function(e) {
			e != null && (s.volume = e), s.vimeoPlayer && s.vimeoPlayer.setVolume(s.volume)
		}, s.getDuration = function() {
			if (s.isSafeToBeControlled_bl) return s.vimeoPlayer.getDuration().then(function(e) {
				s.duration = Math.round(e)
			}), s.duration
		}, s.getCurrentTime = function() {
			if (s.isSafeToBeControlled_bl) return s.vimeoPlayer.getCurrentTime().then(function(e) {
				s.currentTime = Math.round(e)
			}), s.currentTime
		}, s.stopToUpdateSubtitles = function() {
			clearInterval(s.startToUpdateSubtitleId_int)
		}, s.startToUpdateSubtitles = function() {
			clearInterval(s.startToUpdateSubtitleId_int), s.startToUpdateSubtitleId_int = setInterval(s.updateSubtitleHandler, 10)
		}, s.updateSubtitleHandler = function() {
			s.getCurrentTime() && s.dispatchEvent(t.UPDATE_SUBTITLE, {
				curTime: s.getCurrentTime()
			})
		}, s.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.UPDATE_SUBTITLE = "updateSubtitle", t.SAFE_TO_SCRUBB = "safeToScrub", t.READY = "ready", t.ERROR = "initError", t.UPDATE = "update", t.UPDATE_TIME = "updateTime", t.LOAD_PROGRESS = "loadProgress", t.PLAY = "play", t.PAUSE = "pause", t.STOP = "stop", t.PLAY_COMPLETE = "playComplete", t.CUED = "cued", t.QUALITY_CHANGE = "qualityChange", e.FWDUVPVimeoScreen = t
}(window),
function(e) {
	var t = function(e, o, s, n, i, a, d, r, l, u) {
		'use strict';
		var _ = this,
			c = t.prototype;
		_.iconCSSString1 = d, _.iconCSSString2 = r, _.nImg = e, _.sPath_str = o, _.dPath_str = s, _.toolTipLabel_str, _.nImg && (_.totalWidth = _.nImg.width, _.totalHeight = _.nImg.height), _.normalCalssName = l, _.selectedCalssName = u, _.useHEX = n, _.nBC = i, _.sBC = a, _.isMbl = FWDUVPUtils.isMobile, _.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, _.allowToCreateSecondButton_bl = !0, _.useFontAwesome_bl = !!_.iconCSSString1, _.init = function() {
			_.setupMainContainers(), _.setNormalState(!1), _.setEnabledState()
		}, _.setupMainContainers = function() {
			if (_.useFontAwesome_bl) _.setOverflow("visible"), _.n_sdo = new FWDUVPTransformDisplayObject("div"), _.n_sdo.setInnerHTML(_.iconCSSString1), _.addChild(_.n_sdo), _.d_sdo = new FWDUVPTransformDisplayObject("div"), _.d_sdo.setInnerHTML(_.iconCSSString2), _.addChild(_.d_sdo), _.setFinalSize();
			else if (_.useHEX ? (_.n_sdo = new FWDUVPTransformDisplayObject("div"), _.n_sdo.setWidth(_.totalWidth), _.n_sdo.setHeight(_.totalHeight), _.n_sdo_canvas = FWDUVPUtils.getCanvasWithModifiedColor(_.nImg, _.nBC).canvas, _.n_sdo.screen.appendChild(_.n_sdo_canvas), _.addChild(_.n_sdo)) : (_.n_sdo = new FWDUVPTransformDisplayObject("img"), _.n_sdo.setScreen(_.nImg), _.addChild(_.n_sdo)), _.allowToCreateSecondButton_bl) {
				_.img1 = new Image, _.img1.src = _.sPath_str;
				var e = new Image;
				_.sImg = e, _.useHEX ? (_.s_sdo = new FWDUVPTransformDisplayObject("div"), _.s_sdo.setWidth(_.totalWidth), _.s_sdo.setHeight(_.totalHeight), _.img1.onload = function() {
					_.s_sdo_canvas = FWDUVPUtils.getCanvasWithModifiedColor(_.img1, _.sBC).canvas, _.s_sdo.screen.appendChild(_.s_sdo_canvas)
				}, _.s_sdo.setAlpha(0), _.addChild(_.s_sdo)) : (_.s_sdo = new FWDUVPDisplayObject("img"), _.s_sdo.setScreen(_.img1), _.s_sdo.setWidth(_.totalWidth), _.s_sdo.setHeight(_.totalHeight), _.s_sdo.setAlpha(0), _.addChild(_.s_sdo)), _.dPath_str && (e.src = _.dPath_str, _.d_sdo = new FWDUVPDisplayObject("img"), _.d_sdo.setScreen(e), _.d_sdo.setWidth(_.totalWidth), _.d_sdo.setHeight(_.totalHeight), _.d_sdo.setX(-100), _.addChild(_.d_sdo))
			}
			_.setWidth(_.totalWidth), _.setHeight(_.totalHeight), _.setButtonMode(!0), _.hasPointerEvent_bl ? (_.screen.addEventListener("pointerup", _.onMouseUp), _.screen.addEventListener("pointerover", _.onMouseOver), _.screen.addEventListener("pointerout", _.onMouseOut)) : _.screen.addEventListener && (_.screen.addEventListener("mouseover", _.onMouseOver), _.screen.addEventListener("mouseout", _.onMouseOut), _.screen.addEventListener("mouseup", _.onMouseUp), _.screen.addEventListener("touchstart", _.onMouseDown), _.screen.addEventListener("touchstart", _.onMouseUp))
		}, _.setFinalSize = function() {
			_.setWidth(_.n_sdo.getWidth()), _.setHeight(_.n_sdo.getHeight()), _.buttonWidth = _.w, _.buttonHeight = _.h, 0 == _.w && setTimeout(function() {
				_.setFinalSize()
			}, 300)
		}, _.setNormalState = function(e) {
			_.useFontAwesome_bl ? (FWDAnimation.killTweensOf(_.n_sdo.screen), FWDAnimation.killTweensOf(_.d_sdo.screen), e ? (FWDAnimation.to(_.n_sdo.screen, .8, {
				className: _.normalCalssName,
				ease: Expo.easeOut
			}), FWDAnimation.to(_.d_sdo.screen, .8, {
				className: _.normalCalssName,
				ease: Expo.easeOut
			})) : (_.n_sdo.screen.className = _.normalCalssName, _.d_sdo.screen.className = _.normalCalssName)) : (FWDAnimation.killTweensOf(_.s_sdo), FWDAnimation.to(_.s_sdo, .5, {
				alpha: 0,
				ease: Expo.easeOut
			}))
		}, _.setSelectedState = function(e) {
			_.useFontAwesome_bl ? (FWDAnimation.killTweensOf(_.n_sdo.screen), FWDAnimation.killTweensOf(_.d_sdo.screen), e ? (FWDAnimation.to(_.n_sdo.screen, .8, {
				className: _.selectedCalssName,
				ease: Expo.easeOut
			}), FWDAnimation.to(_.d_sdo.screen, .8, {
				className: _.selectedCalssName,
				ease: Expo.easeOut
			})) : (_.n_sdo.screen.className = _.selectedCalssName, _.d_sdo.screen.className = _.selectedCalssName)) : (FWDAnimation.killTweensOf(_.s_sdo), FWDAnimation.to(_.s_sdo, .5, {
				alpha: 1,
				delay: .1,
				ease: Expo.easeOut
			}))
		}, _.onMouseOver = function(o) {
			if (!o.pointerType || "mouse" == o.pointerType) {
				if (_.isDisabled_bl || _.isSelectedFinal_bl) return;
				_.dispatchEvent(t.MOUSE_OVER, {
					e: o
				}), _.setSelectedState(!0)
			}
		}, _.onMouseOut = function(o) {
			if (!o.pointerType || "mouse" == o.pointerType) {
				if (_.isDisabled_bl || _.isSelectedFinal_bl) return;
				_.dispatchEvent(t.MOUSE_OUT, {
					e: o
				}), _.setNormalState(!0)
			}
		}, _.onMouseDown = function(o) {
			o.preventDefault && o.preventDefault();
			_.isDisabled_bl || 2 == o.button || _.isSelectedFinal_bl || _.dispatchEvent(t.MOUSE_DOWN, {
				e: o
			})
		}, _.onMouseUp = function(o) {
			o.preventDefault && o.preventDefault();
			_.isDisabled_bl || 2 == o.button || _.isSelectedFinal_bl || _.dispatchEvent(t.MOUSE_UP, {
				e: o
			})
		}, _.setSelctedFinal = function() {
			_.isSelectedFinal_bl = !0, FWDAnimation.killTweensOf(_.s_sdo), FWDAnimation.to(_.s_sdo, .8, {
				alpha: 1,
				ease: Expo.easeOut
			}), _.setButtonMode(!1)
		}, _.setUnselctedFinal = function() {
			_.isSelectedFinal_bl = !1, FWDAnimation.to(_.s_sdo, .8, {
				alpha: 0,
				delay: .1,
				ease: Expo.easeOut
			}), _.setButtonMode(!0)
		}, _.setDisabledState = function() {
			_.isSetToDisabledState_bl = !0, _.useFontAwesome_bl ? (_.n_sdo.setX(-1e4), _.d_sdo.setX(0)) : (_.d_sdo.setX(0), FWDAnimation.killTweensOf(_.d_sdo), FWDAnimation.to(_.d_sdo, .8, {
				alpha: 1,
				ease: Expo.easeOut
			}))
		}, _.setEnabledState = function() {
			_.isSetToDisabledState_bl = !1, _.useFontAwesome_bl ? (_.n_sdo.setX(0), _.d_sdo.setX(-1e4)) : (_.d_sdo.setX(-100), FWDAnimation.killTweensOf(_.d_sdo), FWDAnimation.to(_.d_sdo, .8, {
				alpha: 0,
				delay: .1,
				ease: Expo.easeOut
			}))
		}, _.disable = function() {
			_.isDisabled_bl = !0, _.setButtonMode(!1)
		}, _.enable = function() {
			_.isDisabled_bl = !1, _.setButtonMode(!0)
		}, _.updateHEXColors = function(e, t) {
			FWDUVPUtils.changeCanvasHEXColor(_.nImg, _.n_sdo_canvas, e), FWDUVPUtils.changeCanvasHEXColor(_.img1, _.s_sdo_canvas, t)
		}, _.destroy = function() {
			_.isMbl ? _.hasPointerEvent_bl ? (_.screen.removeEventListener("pointerdown", _.onMouseUp), _.screen.removeEventListener("pointerover", _.onMouseOver), _.screen.removeEventListener("pointerout", _.onMouseOut)) : (_.screen.removeEventListener("touchstart", _.onMouseDown), _.screen.removeEventListener("touchend", _.onMouseUp)) : _.screen.removeEventListener && (_.screen.removeEventListener("mouseover", _.onMouseOver), _.screen.removeEventListener("mouseout", _.onMouseOut), _.screen.removeEventListener("mousedown", _.onMouseUp)), FWDAnimation.killTweensOf(_.s_sdo), _.n_sdo.destroy(), _.s_sdo.destroy(), _.d_sdo && (FWDAnimation.killTweensOf(_.d_sdo), _.d_sdo.destroy()), _.nImg = null, _.sImg = null, _.dImg = null, _.n_sdo = null, _.s_sdo = null, _.d_sdo = null, e = null, sImg = null, dImg = null, _.toolTipLabel_str = null, _.init = null, _.setupMainContainers = null, _.onMouseOver = null, _.onMouseOut = null, _.onClick = null, _.onMouseDown = null, _.setSelctedFinal = null, _.setUnselctedFinal = null, _.setInnerHTML(""), c.destroy(), _ = null, c = null, t.prototype = null
		}, _.init()
	};
	t.setPrototype = function() {
		t.prototype = null, t.prototype = new FWDUVPDisplayObject("div")
	}, t.SHOW_TOOLTIP = "showTooltip", t.CLICK = "onClick", t.MOUSE_OVER = "onMouseOver", t.MOUSE_OUT = "onMouseOut", t.MOUSE_UP = "onMouseUp", t.MOUSE_DOWN = "onMouseDown", t.prototype = null, e.FWDUVPVolumeButton = t
}(window),
function(e) {
	var t = function() {
		'use strict';
		var o = this,
			s = t.prototype;
		o.main_do = null, o.init = function() {
			o.setupScreen(), e.onerror = o.showError, o.screen.style.zIndex = 1e25, setTimeout(o.addConsoleToDom, 100), setInterval(o.position, 100)
		}, o.position = function() {
			var e = FWDUVPUtils.getScrollOffsets();
			o.setX(e.x), o.setY(e.y)
		}, o.addConsoleToDom = function() {
			-1 == navigator.userAgent.toLowerCase().indexOf("msie 7") ? document.documentElement.appendChild(o.screen) : document.getElementsByTagName("body")[0].appendChild(o.screen)
		}, o.setupScreen = function() {
			o.main_do = new FWDUVPDisplayObject("div", "absolute"), o.main_do.setOverflow("auto"), o.main_do.setWidth(300), o.main_do.setHeight(100), o.setWidth(300), o.setHeight(100), o.main_do.setBkColor("#FFFFFF"), o.addChild(o.main_do)
		}, o.showError = function(e, t, s) {
			var n = o.main_do.getInnerHTML() + "<br>JavaScript error: " + e + " on line " + s + " for " + t;
			o.main_do.setInnerHTML(n), o.main_do.screen.scrollTop = o.main_do.screen.scrollHeight
		}, o.log = function(e) {
			var t = o.main_do.getInnerHTML() + "<br>" + e;
			o.main_do.setInnerHTML(t), o.main_do.getScreen().scrollTop = 1e4
		}, o.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div", "absolute")
	}, t.prototype = null, e.FWDConsole = t
}(window),
function(e) {
	var t = function(o, s) {
		'use strict';
		var n = this,
			e = t.prototype;
		n.lastQuality_str = "auto", n.volume = s, n.controllerHeight = o._d.controllerHeight, n.isStopped_bl = !0, n.isPausedInEvent_bl = !0, n.isShowed_bl = !0, n.isQualityArrayDisapatched_bl = !1, n.playsinline = o._d.playsinline ? 1 : 0, n.isMbl = FWDUVPUtils.isMobile, n.init = function() {
			n.hasTransform3d_bl = !1, n.hasTransform2d_bl = !1, n.setBkColor("#000"), n.setBackfaceVisibility(), o.videoHolder_do.addChildAt(n, 0), n.resizeAndPosition(), n.setupVideo()
		}, n.setupVideo = function() {
			n.videoHolder_do = new FWDUVPDisplayObject("div"), n.videoHolder_do.hasTransform3d_bl = !1, n.videoHolder_do.hasTransform2d_bl = !1, n.videoHolder_do.screen.setAttribute("id", o.instanceName_str + "youtube"), n.videoHolder_do.getStyle().width = "100%", n.videoHolder_do.getStyle().height = "100%", n.videoHolder_do.setBackfaceVisibility(), n.addChild(n.videoHolder_do), n.ytb = new YT.Player(o.instanceName_str + "youtube", {
				width: "100%",
				height: "100%",
				playerVars: {
					rel: 0,
					playsinline: n.playsinline,
					wmode: "transparent",
					controls: 0,
					enablejsapi: 1,
					iv_load_policy: 3,
					modestbranding: 0,
					showinfo: 0,
					autohide: 1
				},
				events: {
					onReady: n.playerReadyHandler,
					onError: n.playerErrorHandler,
					onStateChange: n.stateChangeHandler,
					onPlaybackQualityChange: n.qualityChangeHandler
				}
			}), n.setBkColor("#000"), n.ytbIframe = document.getElementById(o.instanceName_str + "youtube")
		}, n.playerReadyHandler = function() {
			o._d.autoPlay_bl && n.ytb.mute(), n.resizeAndPosition(), n.dispatchEvent(t.READY), n.hasBeenCreatedOnce_bl = !0
		}, n.stateChangeHandler = function(s) {
			if (-1 == s.data && n.isCued_bl && n.isMbl && (n.isStopped_bl = !1, FWDUVPlayer.stopAllVideos(o)), s.data == YT.PlayerState.PLAYING) n.isSafeToBeControlled_bl || (n.isStopped_bl = !1, n.isSafeToBeControlled_bl = !0, n.isPlaying_bl = !0, n.hasHours_bl = 0 < Math.floor(n.ytb.getDuration() / 3600), n.setVolume(o.volume), n.startToUpdate(), n.startToPreload(), n.scrub(1e-5), !n.isMbl && n.setQuality(n.lastQuality_str), n.ytb.getAvailableQualityLevels() && 0 != n.ytb.getAvailableQualityLevels().length && n.dispatchEvent(t.QUALITY_CHANGE, {
				qualityLevel: n.ytb.getPlaybackQuality(),
				levels: n.ytb.getAvailableQualityLevels()
			}), n.startToUpdateSubtitles(), n.dispatchEvent(t.SAFE_TO_SCRUBB)), n.resizeAndPosition(), n.isPausedInEvent_bl && n.dispatchEvent(t.PLAY), n.isPausedInEvent_bl = !1, n.hasError_bl = !1;
			else if (s.data == YT.PlayerState.PAUSED) {
				if (!n.isSafeToBeControlled_bl) return;
				n.isStopped_bl = !1, n.isPausedInEvent_bl || n.dispatchEvent(t.PAUSE), n.isPausedInEvent_bl = !0
			} else s.data == YT.PlayerState.ENDED ? n.ytb.getCurrentTime() && 0 < n.ytb.getCurrentTime() && (n.isStopped_bl = !1, n.stopToUpdateSubtitles(), setTimeout(function() {
				n.dispatchEvent(t.PLAY_COMPLETE)
			}, 100)) : s.data == YT.PlayerState.CUED && (n.isStopped_bl || n.dispatchEvent(t.CUED), n.isCued_bl = !0, n.stopp || (o._d.autoPlay_bl || o.isThumbClick_bl ? (o.isThumbClick_bl && o.play(), o._d.autoPlay_bl && (o.controller_do && o.controller_do.updateVolume(0), (o.displayType != FWDUVPlayer.LIGHTBOX || o.lightBox_do.isShowed_bl) && o.play())) : !n.isMbl && (o.videoPoster_do.show(), o.lrgPlayBtn && o.lrgPlayBtn.show()), !n.isMbl && o.isAdd_bl && !o.loadAddFirstTime_bl && (o.play(), o.videoPoster_do.hide(!0))), n.resizeAndPosition())
		}, n.qualityChangeHandler = function() {
			n.ytb.getAvailableQualityLevels() && 0 != n.ytb.getAvailableQualityLevels().length && n.dispatchEvent(t.QUALITY_CHANGE, {
				qualityLevel: n.ytb.getPlaybackQuality()
			})
		}, n.playerErrorHandler = function(o) {
			if (n.isPausedInEvent_bl = !0, !(n.isStopped_bl || n.hasError_bl)) {
				var e = "";
				n.hasError_bl = !0, 2 == o.data ? e = "The youtube id is not well formatted, make sure it has exactly 11 characters and that it dosn't contain invalid characters such as exclamation points or asterisks." : 5 == o.data ? e = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred." : 100 == o.data ? e = "The youtube video request was not found, probably the video ID is incorrect." : (101 == o.data || 150 == o.data) && (e = "The owner of the requested video does not allow it to be played in embedded players."), n.dispatchEvent(t.ERROR, {
					text: e
				})
			}
		}, n.resizeAndPosition = function() {
			n.setWidth(o.tempVidStageWidth), n.setHeight(o.tempVidStageHeight), n.videoHolder_do && !o._d.showYoutubeRelAndInfo_bl && (n.isSafeToBeControlled_bl ? (n.ytbIframe.style.height = 1.776 * o.tempVidStageHeight + "px", n.ytbIframe.style.top = (o.tempVidStageHeight - 1.776 * o.tempVidStageHeight) / 2 + "px") : (n.ytbIframe.style.height = o.tempVidStageHeight + 110 + "px", n.ytbIframe.style.top = "-55px"))
		}, n.setSource = function(e) {
			e && (n.sourcePath_str = e), n.stopp = !1, clearInterval(n.setSourceId_int), n.setSourceId_int = setInterval(function() {
				n.ytb.cueVideoById && n.ytb.setPlaybackRate && (n.ytb.cueVideoById(n.sourcePath_str), n.isMbl && !o._d.autoPlay_bl && setTimeout(function() {
					o.videoPoster_do.hide(), o.lrgPlayBtn.hide()
				}, 100), clearInterval(n.setSourceId_int))
			}, 50)
		}, n.play = function() {
			FWDUVPlayer.curInstance = o, n.isPlaying_bl = !0, n.hasError_bl = !1, n.hasStarted_bl = !0;
			try {
				n.ytb.playVideo(), n.startToUpdate()
			} catch (t) {}
			n.isStopped_bl = !1
		}, n.pause = function() {
			if (!(n.isStopped_bl || n.hasError_bl)) {
				n.isPlaying_bl = !1;
				try {
					n.ytb.pauseVideo()
				} catch (t) {}
				n.stopToUpdate()
			}
		}, n.togglePlayPause = function() {
			n.isPlaying_bl ? n.pause() : n.play()
		}, n.resume = function() {
			n.isStopped_bl || n.play()
		}, n.startToUpdate = function() {
			clearInterval(n.updateVideoId_int), n.updateVideoId_int = setInterval(n.updateVideo, 500)
		}, n.stopToUpdate = function() {
			clearInterval(n.updateVideoId_int)
		}, n.updateVideo = function() {
			var e;
			if (!n.ytb) return void stopToUpdate();
			n.allowScrubing_bl || (e = n.ytb.getCurrentTime() / n.ytb.getDuration(), n.dispatchEvent(t.UPDATE, {
				percent: e
			}));
			var o = FWDUVPUtils.formatTime(n.ytb.getDuration()),
				s = FWDUVPUtils.formatTime(n.ytb.getCurrentTime());
			n.dispatchEvent(t.UPDATE_TIME, {
				curTime: s,
				totalTime: o,
				seconds: n.ytb.getCurrentTime(),
				totalTimeInSeconds: n.ytb.getDuration()
			})
		}, n.startToPreload = function() {
			clearInterval(n.preloadVideoId_int), n.updatePreloadId_int = setInterval(n.updateProgress, 500)
		}, n.stopToPreload = function() {
			clearInterval(n.updatePreloadId_int)
		}, n.updateProgress = function() {
			if (!n.ytb) return void stopToPreload();
			var e = n.ytb.getVideoLoadedFraction();
			n.dispatchEvent(t.LOAD_PROGRESS, {
				percent: e
			})
		}, n.stop = function() {
			n.isStopped_bl || (n.isPlaying_bl = !1, n.isStopped_bl = !0, n.hasStarted_bl = !1, n.isCued_bl = !1, clearInterval(n.setSourceId_int), n.allowScrubing_bl = !1, n.isSafeToBeControlled_bl = !1, n.isQualityArrayDisapatched_bl = !1, n.isPausedInEvent_bl = !0, n.stopToUpdateSubtitles(), n.stopToUpdate(), n.stopToPreload(), n.stopVideo(), n.dispatchEvent(t.STOP), n.dispatchEvent(t.LOAD_PROGRESS, {
				percent: 0
			}))
		}, n.destroyYoutube = function() {
			n.videoHolder_do && (n.videoHolder_do.screen.removeAttribute("id", o.instanceName_str + "youtube"), n.videoHolder_do.destroy(), n.videoHolder_do = null), n.ytb && n.ytb.destroy(), n.ytb = null
		}, n.stopVideo = function() {
			n.stopp = !0, n.ytb.cueVideoById(n.sourcePath_str)
		}, n.setPlaybackRate = function(e) {
			!n.ytb || n.isMbl || (e && (n.rate = e), n.ytb.setPlaybackRate && n.ytb.setPlaybackRate(+n.rate))
		}, n.stopToUpdateSubtitles = function() {
			clearInterval(n.startToUpdateSubtitleId_int)
		}, n.startToUpdateSubtitles = function() {
			clearInterval(n.startToUpdateSubtitleId_int), n.startToUpdateSubtitleId_int = setInterval(n.updateSubtitleHandler, 10)
		}, n.updateSubtitleHandler = function() {
			n.dispatchEvent(t.UPDATE_SUBTITLE, {
				curTime: n.ytb.getCurrentTime()
			})
		}, n.startToScrub = function() {
			n.isSafeToBeControlled_bl && (n.allowScrubing_bl = !0)
		}, n.stopToScrub = function() {
			n.isSafeToBeControlled_bl && (n.allowScrubing_bl = !1)
		}, n.scrubbAtTime = function(e) {
			n.isSafeToBeControlled_bl && n.ytb.seekTo(e)
		}, n.scrub = function(e) {
			n.isSafeToBeControlled_bl && n.ytb.seekTo(e * n.ytb.getDuration())
		}, n.setVolume = function(e) {
			e != null && (n.volume = e), n.ytb && n.ytb.setVolume && (n.ytb.setVolume(100 * e), e && n.ytb.unMute())
		}, n.setQuality = function(e) {
			n.lastQuality_str = e, n.ytb.setPlaybackQuality(e)
		}, n.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.UPDATE_SUBTITLE = "updateSubtitle", t.READY = "ready", t.ERROR = "error", t.UPDATE = "update", t.UPDATE_TIME = "updateTime", t.SAFE_TO_SCRUBB = "safeToControll", t.LOAD_PROGRESS = "loadProgress", t.PLAY = "play", t.PAUSE = "pause", t.STOP = "stop", t.PLAY_COMPLETE = "playComplete", t.CUED = "cued", t.QUALITY_CHANGE = "qualityChange", e.FWDUVPYoutubeScreen = t
}(window),
function() {
	var t = function(e, o, s, n, i) {
		'use strict';
		var a = this,
			d = t.prototype;
		a.label_str = e, a.nBC = o, a.sBC = s, a.hdPath_str = n, a.id = i, a.totalWidth = 0, a.totalHeight = 23, a.hdWidth = 7, a.hdHeight = 5, a.hasHd_bl = a.hdPath_str, a.isMbl = FWDUVPUtils.isMobile, a.isDisabled_bl = !1, a.init = function() {
			a.setBackfaceVisibility(), a.setupMainContainers(), a.setHeight(a.totalHeight)
		}, a.setupMainContainers = function() {
			if (a.text_do = new FWDUVPDisplayObject("div"), a.text_do.setBackfaceVisibility(), a.text_do.hasTransform3d_bl = !1, a.text_do.hasTransform2d_bl = !1, a.text_do.getStyle().display = "inline-block", a.text_do.getStyle().whiteSpace = "nowrap", a.text_do.getStyle().fontFamily = "Arial", a.text_do.getStyle().fontSize = "12px", a.text_do.getStyle().color = a.nBC, a.text_do.setInnerHTML(a.label_str), a.addChild(a.text_do), a.hasHd_bl) {
				var e = new Image;
				e.src = a.hdPath_str, a.hd_do = new FWDUVPDisplayObject("img"), a.hd_do.setScreen(e), a.hd_do.setWidth(a.hdWidth), a.hd_do.setHeight(a.hdHeight), a.addChild(a.hd_do)
			}
			a.dumy_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (a.dumy_do.setBkColor("#FF0000"), a.dumy_do.setAlpha(1e-4)), a.dumy_do.setButtonMode(!0), a.dumy_do.setHeight(a.totalHeight), a.addChild(a.dumy_do), a.hasPointerEvent_bl ? (a.screen.addEventListener("pointerup", a.onMouseUp), a.screen.addEventListener("pointerover", a.onMouseOver), a.screen.addEventListener("pointerout", a.onMouseOut)) : a.screen.addEventListener && (!a.isMbl && (a.screen.addEventListener("mouseover", a.onMouseOver), a.screen.addEventListener("mouseout", a.onMouseOut), a.screen.addEventListener("mouseup", a.onMouseUp)), a.screen.addEventListener("touchend", a.onMouseUp))
		}, a.onMouseOver = function(o) {
			a.isDisabled_bl || (a.setSelectedState(!0), a.dispatchEvent(t.MOUSE_OVER, {
				e: o,
				id: a.id
			}))
		}, a.onMouseOut = function(o) {
			a.isDisabled_bl || (a.setNormalState(!0), a.dispatchEvent(t.MOUSE_OUT, {
				e: o,
				id: a.id
			}))
		}, a.onMouseUp = function(o) {
			a.isDisabled_bl || 2 == o.button || (o.preventDefault && o.preventDefault(), a.dispatchEvent(t.CLICK, {
				e: o,
				id: a.id
			}))
		}, a.setFinalSize = function() {
			var e = a.text_do.getWidth() + 34,
				t = a.text_do.getHeight();
			a.text_do.setX(18), a.text_do.setY(parseInt((a.totalHeight - t) / 2)), a.hd_do && (a.hd_do.setX(e - 12), a.hd_do.setY(a.text_do.y + 1)), a.dumy_do.setWidth(e), a.setWidth(e)
		}, a.updateText = function(e) {
			a.label_str = e, a.text_do.setInnerHTML(a.label_str), a.hd_do && ("highres" == a.label_str || "hd1080" == a.label_str || "hd720" == a.label_str || "hd1440" == a.label_str || "hd2160" == a.label_str ? a.hd_do.setVisible(!0) : a.hd_do.setVisible(!1))
		}, a.setSelectedState = function(e) {
			a.isSelected_bl = !0, FWDAnimation.killTweensOf(a.text_do), e ? FWDAnimation.to(a.text_do.screen, .5, {
				css: {
					color: a.sBC
				},
				ease: Expo.easeOut
			}) : a.text_do.getStyle().color = a.sBC
		}, a.setNormalState = function(e) {
			a.isSelected_bl = !1, FWDAnimation.killTweensOf(a.text_do), e ? FWDAnimation.to(a.text_do.screen, .5, {
				css: {
					color: a.nBC
				},
				ease: Expo.easeOut
			}) : a.text_do.getStyle().color = a.nBC
		}, a.disable = function() {
			a.isDisabled_bl = !0, FWDAnimation.killTweensOf(a.text_do), a.setSelectedState(!0), a.dumy_do.setButtonMode(!1)
		}, a.enable = function() {
			a.isDisabled_bl = !1, FWDAnimation.killTweensOf(a.text_do), a.setNormalState(!0), a.dumy_do.setButtonMode(!0)
		}, a.init()
	};
	t.setPrototype = function() {
		t.prototype = new FWDUVPDisplayObject("div")
	}, t.MOUSE_OVER = "onMouseOver", t.MOUSE_OUT = "onMouseOut", t.CLICK = "onClick", t.prototype = null, window.FWDUVPYTBQButton = t
}(window);
var _fwd_fwdScope;
if (window.FWDAnimation || (((_fwd_fwdScope = "undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window)._fwd_fwdQueue || (_fwd_fwdScope._fwd_fwdQueue = [])).push(function() {
		"use strict";

		function u(o, t, s, n) {
			s === n && (s = n - (n - t) / 1e6), o === t && (t = o + (s - o) / 1e6), this.a = o, this.b = t, this.c = s, this.d = n, this.da = n - o, this.ca = s - o, this.ba = t - o
		}

		function S(d, t, e, i) {
			var r = {
					a: d
				},
				s = {},
				n = {},
				a = {
					c: i
				},
				o = (d + t) / 2,
				l = (t + e) / 2,
				c = (e + i) / 2,
				h = (o + l) / 2,
				u = (l + c) / 2,
				p = (u - h) / 8;
			return r.b = o + (d - o) / 4, s.b = h + p, r.c = s.a = (r.b + s.b) / 2, s.c = n.a = (h + u) / 2, n.b = u - p, a.b = c + (i - c) / 4, n.c = a.a = (n.b + a.b) / 2, [r, s, n, a]
		}

		function d(b, g, y, i, r, v) {
			var T = {},
				c = [],
				d = v || b[0],
				m, P, C, E, k, O, x, L;
			for (P in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == g && (g = 1), b[0]) c.push(P);
			if (1 < b.length) {
				for (L = b[b.length - 1], x = !0, m = c.length; - 1 < --m;)
					if (P = c[m], .05 < Math.abs(d[P] - L[P])) {
						x = !1;
						break
					} x && (b = b.concat(), v && b.unshift(v), b.push(b[1]), v = b[b.length - 3])
			}
			for (B.length = w.length = H.length = 0, m = c.length; - 1 < --m;) P = c[m], _[P] = -1 !== r.indexOf("," + P + ","), T[P] = function(d, _, e, i) {
				var r = [],
					c, p, b, m, g, y;
				if (i)
					for (p = (d = [i].concat(d)).length; - 1 < --p;) "string" == typeof(y = d[p][_]) && "=" === y.charAt(1) && (d[p][_] = i[_] + +(y.charAt(0) + y.substr(2)));
				if (0 > (c = d.length - 2)) return r[0] = new u(d[0][_], 0, 0, d[-1 > c ? 0 : 1][_]), r;
				for (p = 0; p < c; p++) b = d[p][_], m = d[p + 1][_], r[p] = new u(b, 0, 0, m), e && (g = d[p + 2][_], B[p] = (B[p] || 0) + (m - b) * (m - b), w[p] = (w[p] || 0) + (g - m) * (g - m));
				return r[p] = new u(d[p][_], 0, 0, d[p + 1][_]), r
			}(b, P, _[P], v);
			for (m = B.length; - 1 < --m;) B[m] = Math.sqrt(B[m]), w[m] = Math.sqrt(w[m]);
			if (!i) {
				for (m = c.length; - 1 < --m;)
					if (_[P])
						for (O = (C = T[c[m]]).length - 1, E = 0; E < O; E++) k = C[E + 1].da / w[E] + C[E].da / B[E] || 0, H[E] = (H[E] || 0) + k * k;
				for (m = H.length; - 1 < --m;) H[m] = Math.sqrt(H[m])
			}
			for (m = c.length, E = y ? 4 : 1; - 1 < --m;)(function(b, t, e, i, r) {
				for (var s = b.length - 1, g = 0, T = b[0].a, P = 0, C, E, k, O, L, A, I, M, W, D, V, R; P < s; P++) C = (O = b[g]).a, E = O.d, k = b[g + 1].d, I = r ? (D = B[P], R = .25 * (((V = w[P]) + D) * t) / (!i && H[P] || .5), E - ((L = E - (E - C) * (i ? .5 * t : 0 === D ? 0 : R / D)) + (((A = E + (k - E) * (i ? .5 * t : 0 === V ? 0 : R / V)) - L) * (3 * D / (D + V) + .5) / 4 || 0))) : E - ((L = E - .5 * ((E - C) * t)) + (A = E + .5 * ((k - E) * t))) / 2, L += I, A += I, O.c = M = L, O.b = 0 == P ? T = O.a + .6 * (O.c - O.a) : T, O.da = E - C, O.ca = M - C, O.ba = T - C, e ? (W = S(C, T, M, E), b.splice(g, 1, W[0], W[1], W[2], W[3]), g += 4) : g++, T = A;
				(O = b[g]).b = T, O.c = T + .4 * (O.d - T), O.da = O.d - O.a, O.ca = O.c - O.a, O.ba = T - O.a, e && (W = S(O.a, T, O.c, O.d), b.splice(g, 1, W[0], W[1], W[2], W[3]))
			})(C = T[P = c[m]], g, y, i, _[P]), x && (C.splice(0, E), C.splice(C.length - E, E));
			return T
		}
		var o, B, w, H, _, s, y, e;
		_fwd_fwdScope.FWDFWD_fwdDefine("FWDAnimation", ["core.FWDAnimation", "core.FWDSimpleTimeline", "FWDTweenLite"], function(S, d, B) {
			function g(o) {
				for (var t = [], e = o.length, s = 0; s !== e; t.push(o[s++]));
				return t
			}

			function a(o, t, e) {
				var i = o.cycle,
					n, a;
				for (n in i) a = i[n], o[n] = "function" == typeof a ? a(e, t[e]) : a[e % a.length];
				delete o.cycle
			}

			function o(u, t, _, p) {
				t = !1 !== t, _ = !1 !== _;
				for (var h = c(p = !1 !== p), a = t && _ && p, o = h.length, b, m; - 1 < --o;) m = h[o], (a || m instanceof d || (b = m.target === m.vars.onComplete) && _ || t && !b) && m.paused(u)
			}
			var S = function(o, t, e) {
					B.call(this, o, t, e), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = S.prototype.render
				},
				y = 1e-10,
				l = B._internals,
				v = l.isSelector,
				T = l.isArray,
				e = S.prototype = B.to({}, .1, {}),
				t = [];
			S.version = "1.19.0", e.constructor = S, e.kill()._gc = !1, S.killTweensOf = S.killDelayedCallsTo = B.killTweensOf, S.getTweensOf = B.getTweensOf, S.lagSmoothing = B.lagSmoothing, S.ticker = B.ticker, S.render = B.render, e.invalidate = function() {
				return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), B.prototype.invalidate.call(this)
			}, e.updateTo = function(o, t) {
				var e = this.ratio,
					d = this.vars.immediateRender || o.immediateRender,
					s;
				for (s in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), o) this.vars[s] = o[s];
				if (this._initted || d)
					if (t) this._initted = !1, d && this.render(0, !0, !0);
					else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && B._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
					var r = this._totalTime;
					this.render(0, !0, !1), this._initted = !1, this.render(r, !0, !1)
				} else if (this._initted = !1, this._init(), 0 < this._time || d)
					for (var n = this._firstPT, u; n;) u = n.s + n.c, n.c *= 1 / (1 - e), n.s = u - n.c, n = n._next;
				return this
			}, e.render = function(b, S, e) {
				this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
				var v = this._dirty ? this.totalDuration() : this._totalDuration,
					p = this._time,
					_ = this._totalTime,
					c = this._cycle,
					d = this._duration,
					m = this._rawPrevTime,
					g, B, T, P, w, H, C, E, k;
				if (v - 1e-7 <= b ? (this._totalTime = v, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = d, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (g = !0, B = "onComplete", e = e || this._timeline.autoRemoveChildren), 0 === d && (!this._initted && this.vars.lazy && !e || (this._startTime === this._timeline._duration && (b = 0), (0 > m || 0 >= b && -1e-7 <= b || m === y && "isPause" !== this.data) && m !== b && (e = !0, y < m && (B = "onReverseComplete")), this._rawPrevTime = E = !S || b || m === b ? b : y))) : 1e-7 > b ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === d && 0 < m) && (B = "onReverseComplete", g = this._reversed), 0 > b && (this._active = !1, 0 === d && (!this._initted && this.vars.lazy && !e || (0 <= m && (e = !0), this._rawPrevTime = E = !S || b || m === b ? b : y))), this._initted || (e = !0)) : (this._totalTime = this._time = b, 0 !== this._repeat && (P = d + this._repeatDelay, this._cycle = this._totalTime / P >> 0, 0 !== this._cycle && this._cycle === this._totalTime / P && _ <= b && this._cycle--, this._time = this._totalTime - this._cycle * P, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? this._time = d : 0 > this._time && (this._time = 0)), this._easeType ? (w = this._time / d, (1 === (H = this._easeType) || 3 === H && .5 <= w) && (w = 1 - w), 3 === H && (w *= 2), 1 === (C = this._easePower) ? w *= w : 2 === C ? w *= w * w : 3 === C ? w *= w * w * w : 4 === C && (w *= w * w * w * w), this.ratio = 1 === H ? 1 - w : 2 === H ? w : .5 > this._time / d ? w / 2 : 1 - w / 2) : this.ratio = this._ease.getRatio(this._time / d)), p !== this._time || e || c !== this._cycle) {
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!e && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = _, this._rawPrevTime = m, this._cycle = c, l.lazyTweens.push(this), void(this._lazy = [b, S]);
						this._time && !g ? this.ratio = this._ease.getRatio(this._time / d) : g && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== p && 0 <= b && (this._active = !0), 0 === _ && (2 === this._initted && 0 < b && this._init(), this._startAt && (0 <= b ? this._startAt.render(b, S, e) : B = B || "_dummyGS"), this.vars.onStart && (0 === this._totalTime && 0 !== d || S || this._callback("onStart"))), T = this._firstPT; T;) T.f ? T.t[T.p](T.c * this.ratio + T.s) : (k = T.c * this.ratio + T.s, "x" == T.p ? T.t.setX(k) : "y" == T.p ? T.t.setY(k) : "z" == T.p ? T.t.setZ(k) : "angleX" == T.p ? T.t.setAngleX(k) : "angleY" == T.p ? T.t.setAngleY(k) : "angleZ" == T.p ? T.t.setAngleZ(k) : "w" == T.p ? T.t.setWidth(k) : "h" == T.p ? T.t.setHeight(k) : "alpha" == T.p ? T.t.setAlpha(k) : "scale" == T.p ? T.t.setScale2(k) : T.t[T.p] = k), T = T._next;
					this._onUpdate && (0 > b && this._startAt && this._startTime && this._startAt.render(b, S, e), S || this._totalTime === _ && !B || this._callback("onUpdate")), this._cycle !== c && (S || this._gc || this.vars.onRepeat && this._callback("onRepeat")), B && (this._gc && !e || (0 > b && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(b, S, e), g && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !S && this.vars[B] && this._callback(B), 0 === d && this._rawPrevTime === y && E !== y && (this._rawPrevTime = 0)))
				} else _ !== this._totalTime && this._onUpdate && (S || this._callback("onUpdate"))
			}, S.to = function(o, t, e) {
				return new S(o, t, e)
			}, S.from = function(o, t, e) {
				return e.runBackwards = !0, e.immediateRender = 0 != e.immediateRender, new S(o, t, e)
			}, S.fromTo = function(o, t, e, s) {
				return s.startAt = e, s.immediateRender = 0 != s.immediateRender && 0 != e.immediateRender, new S(o, t, s)
			}, S.staggerTo = S.allTo = function(b, m, y, i, P, s, n) {
				function w() {
					y.onComplete && y.onComplete.apply(y.onCompleteScope || this, arguments), P.apply(n || y.callbackScope || this, s || t)
				}
				i = i || 0;
				var o = 0,
					H = [],
					_ = y.cycle,
					c = y.startAt && y.startAt.cycle,
					C, E, k, O;
				for (T(b) || ("string" == typeof b && (b = B.selector(b) || b), v(b) && (b = g(b))), b = b || [], 0 > i && ((b = g(b)).reverse(), i *= -1), C = b.length - 1, k = 0; k <= C; k++) {
					for (O in E = {}, y) E[O] = y[O];
					if (_ && (a(E, b, k), null != E.duration && (m = E.duration, delete E.duration)), c) {
						for (O in c = E.startAt = {}, y.startAt) c[O] = y.startAt[O];
						a(E.startAt, b, k)
					}
					E.delay = o + (E.delay || 0), k === C && P && (E.onComplete = w), H[k] = new S(b[k], m, E), o += i
				}
				return H
			}, S.staggerFrom = S.allFrom = function(o, t, e, i, d, s, n) {
				return e.runBackwards = !0, e.immediateRender = 0 != e.immediateRender, S.staggerTo(o, t, e, i, d, s, n)
			}, S.staggerFromTo = S.allFromTo = function(d, t, e, i, r, s, n, a) {
				return i.startAt = e, i.immediateRender = 0 != i.immediateRender && 0 != e.immediateRender, S.staggerTo(d, t, i, r, s, n, a)
			}, S.delayedCall = function(o, t, e, n, i) {
				return new S(t, 0, {
					delay: o,
					onComplete: t,
					onCompleteParams: e,
					callbackScope: n,
					onReverseComplete: t,
					onReverseCompleteParams: e,
					immediateRender: !1,
					useFrames: i,
					overwrite: 0
				})
			}, S.set = function(o, t) {
				return new S(o, 0, t)
			}, S.isTweening = function(e) {
				return 0 < B.getTweensOf(e, !0).length
			};
			var _ = function(o, t) {
					for (var e = [], n = 0, a = o._first; a;) a instanceof B ? e[n++] = a : (t && (e[n++] = a), n = (e = e.concat(_(a, t))).length), a = a._next;
					return e
				},
				c = S.getAllTweens = function(e) {
					return _(S._rootTimeline, e).concat(_(S._rootFramesTimeline, e))
				};
			return S.killAll = function(u, t, _, p) {
				null == t && (t = !0), null == _ && (_ = !0);
				for (var r = c(0 != p), a = r.length, o = t && _ && p, l = 0, b, m; l < a; l++) m = r[l], (o || m instanceof d || (b = m.target === m.vars.onComplete) && _ || t && !b) && (u ? m.totalTime(m._reversed ? 0 : m.totalDuration()) : m._enabled(!1, !1))
			}, S.killChildTweensOf = function(d, u) {
				if (null != d) {
					var e = l.tweenLookup,
						o, _, c, p, h;
					if ("string" == typeof d && (d = B.selector(d) || d), v(d) && (d = g(d)), T(d))
						for (p = d.length; - 1 < --p;) S.killChildTweensOf(d[p], u);
					else {
						for (c in o = [], e)
							for (_ = e[c].target.parentNode; _;) _ === d && (o = o.concat(e[c].tweens)), _ = _.parentNode;
						for (h = o.length, p = 0; p < h; p++) u && o[p].totalTime(o[p].totalDuration()), o[p]._enabled(!1, !1)
					}
				}
			}, (S.pauseAll = function(s, t, e) {
				o(!0, s, t, e)
			}, S.resumeAll = function(s, t, e) {
				o(!1, s, t, e)
			}, S.globalTimeScale = function(o) {
				var s = S._rootTimeline,
					n = B.ticker.time;
				return arguments.length ? (o = o || y, s._startTime = n - (n - s._startTime) * s._timeScale / o, s = S._rootFramesTimeline, n = B.ticker.frame, s._startTime = n - (n - s._startTime) * s._timeScale / o, s._timeScale = S._rootTimeline._timeScale = o) : s._timeScale
			}, e.progress = function(o, t) {
				return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - o : o) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
			}, e.totalProgress = function(o, t) {
				return arguments.length ? this.totalTime(this.totalDuration() * o, t) : this._totalTime / this.totalDuration()
			}, e.time = function(o, s) {
				return arguments.length ? (this._dirty && this.totalDuration(), o > this._duration && (o = this._duration), this._yoyo && 0 != (1 & this._cycle) ? o = this._duration - o + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (o += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(o, s)) : this._time
			}, e.duration = function(e) {
				return arguments.length ? S.prototype.duration.call(this, e) : this._duration
			}, e.totalDuration = function(e) {
				return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
			}, e.repeat = function(e) {
				return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
			}, e.repeatDelay = function(e) {
				return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
			}, e.yoyo = function(e) {
				return arguments.length ? (this._yoyo = e, this) : this._yoyo
			}, S)
		}, !0), o = 180 / Math.PI, B = [], w = [], H = [], _ = {}, s = _fwd_fwdScope.FWDFWD_fwdDefine.globals, y = _fwd_fwdScope.FWDFWD_fwdDefine.plugin({
			propName: "bezier",
			priority: -1,
			version: "1.3.7",
			API: 2,
			fwd_global: !0,
			init: function(_, t, c) {
				this._target = _, t instanceof Array && (t = {
					values: t
				}), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
				var i = t.values || [],
					h = {},
					b = i[0],
					m = t.autoRotate || c.vars.orientToBezier,
					g, y, S, v, f, B;
				for (g in this._autoRotate = m ? m instanceof Array ? m : [
						["x", "y", "rotation", !0 !== m && +m || 0]
					] : null, b) this._props.push(g);
				for (S = this._props.length; - 1 < --S;) g = this._props[S], this._overwriteProps.push(g), y = this._func[g] = "function" == typeof _[g], h[g] = y ? _[g.indexOf("set") || "function" != typeof _["get" + g.substr(3)] ? g : "get" + g.substr(3)]() : parseFloat(_[g]), f || h[g] !== i[0][g] && (f = h);
				if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? d(i, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, f) : function(b, y, S) {
						var i = {},
							c = "cubic" === (y = y || "soft") ? 3 : 2,
							d = "soft" === y,
							m = [],
							g, v, B, T, P, w, H, C, E, k, O;
						if (d && S && (b = [S].concat(b)), null == b || b.length < 1 + c) throw "invalid Bezier data";
						for (E in b[0]) m.push(E);
						for (w = m.length; - 1 < --w;) {
							for (i[E = m[w]] = P = [], k = 0, C = b.length, H = 0; H < C; H++) g = null == S ? b[H][E] : "string" == typeof(O = b[H][E]) && "=" === O.charAt(1) ? S[E] + +(O.charAt(0) + O.substr(2)) : +O, d && 1 < H && H < C - 1 && (P[k++] = (g + P[k - 2]) / 2), P[k++] = g;
							for (C = k - c + 1, H = k = 0; H < C; H += c) g = P[H], v = P[H + 1], B = P[H + 2], T = 2 == c ? 0 : P[H + 3], P[k++] = O = 3 == c ? new u(g, v, B, T) : new u(g, (2 * v + g) / 3, (2 * v + B) / 3, B);
							P.length = k
						}
						return i
					}(i, t.type, h), this._segCount = this._beziers[g].length, this._timeRes && (B = function(d, t) {
						var _ = [],
							a = [],
							o = 0,
							c = 0,
							b = (t = t >> 0 || 6) - 1,
							m = [],
							u = [],
							g, y, S, v;
						for (g in d) ! function(c, t, e) {
							for (var i = c.length, b, m, g, y, S, v, B, T, P, w, H; - 1 < --i;)
								for (g = (w = c[i]).a, y = w.d - g, S = w.c - g, v = w.b - g, b = m = 0, T = 1; T <= e; T++) b = m - (m = ((B = 1 / e * T) * B * y + 3 * (P = 1 - B) * (B * S + P * v)) * B), t[H = i * e + T - 1] = (t[H] || 0) + b * b
						}(d[g], _, t);
						for (S = _.length, y = 0; y < S; y++) o += Math.sqrt(_[y]), u[v = y % t] = o, v === b && (c += o, m[v = y / t >> 0] = u, a[v] = c, o = 0, u = []);
						return {
							length: c,
							lengths: a,
							segments: m
						}
					}(this._beziers, this._timeRes), this._length = B.length, this._lengths = B.lengths, this._segments = B.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length), m = this._autoRotate)
					for (this._initialRotations = [], m[0] instanceof Array || (this._autoRotate = m = [m]), S = m.length; - 1 < --S;) {
						for (v = 0; 3 > v; v++) g = m[S][v], this._func[g] = "function" == typeof _[g] && _[g.indexOf("set") || "function" != typeof _["get" + g.substr(3)] ? g : "get" + g.substr(3)];
						g = m[S][2], this._initialRotations[S] = (this._func[g] ? this._func[g].call(this._target) : this._target[g]) || 0, this._overwriteProps.push(g)
					}
				return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
			},
			set: function(b) {
				var S = this._segCount,
					f = this._func,
					u = this._target,
					p = b !== this._startRatio,
					_, B, P, H, C, E, k, O, L;
				if (this._timeRes) {
					if (O = this._lengths, L = this._curSeg, b *= this._length, w = this._li, b > this._l2 && w < S - 1) {
						for (k = S - 1; w < k && (this._l2 = O[++w]) <= b;);
						this._l1 = O[w - 1], this._li = w, this._curSeg = L = this._segments[w], this._s2 = L[this._s1 = this._si = 0]
					} else if (b < this._l1 && 0 < w) {
						for (; 0 < w && (this._l1 = O[--w]) >= b;);
						0 === w && b < this._l1 ? this._l1 = 0 : w++, this._l2 = O[w], this._li = w, this._curSeg = L = this._segments[w], this._s1 = L[(this._si = L.length - 1) - 1] || 0, this._s2 = L[this._si]
					}
					if (_ = w, b -= this._l1, w = this._si, b > this._s2 && w < L.length - 1) {
						for (k = L.length - 1; w < k && (this._s2 = L[++w]) <= b;);
						this._s1 = L[w - 1], this._si = w
					} else if (b < this._s1 && 0 < w) {
						for (; 0 < w && (this._s1 = L[--w]) >= b;);
						0 === w && b < this._s1 ? this._s1 = 0 : w++, this._s2 = L[w], this._si = w
					}
					C = (w + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
				} else C = (b - (_ = 0 > b ? 0 : 1 <= b ? S - 1 : S * b >> 0) * (1 / S)) * S;
				for (B = 1 - C, w = this._props.length; - 1 < --w;) P = this._props[w], E = (C * C * (H = this._beziers[P][_]).da + 3 * B * (C * H.ca + B * H.ba)) * C + H.a, this._mod[P] && (E = this._mod[P](E, u)), f[P] ? u[P](E) : "x" == P ? u.setX(E) : "y" == P ? u.setY(E) : "z" == P ? u.setZ(E) : "angleX" == P ? u.setAngleX(E) : "angleY" == P ? u.setAngleY(E) : "angleZ" == P ? u.setAngleZ(E) : "w" == P ? u.setWidth(E) : "h" == P ? u.setHeight(E) : "alpha" == P ? u.setAlpha(E) : "scale" == P ? u.setScale2(E) : u[P] = E;
				if (this._autoRotate)
					for (var A = this._autoRotate, w = A.length, I, M, W, D, V, R, F; - 1 < --w;) P = A[w][2], R = A[w][3] || 0, F = !0 === A[w][4] ? 1 : o, H = this._beziers[A[w][0]], I = this._beziers[A[w][1]], H && I && (H = H[_], I = I[_], M = H.a + (H.b - H.a) * C, M += ((D = H.b + (H.c - H.b) * C) - M) * C, D += (H.c + (H.d - H.c) * C - D) * C, W = I.a + (I.b - I.a) * C, W += ((V = I.b + (I.c - I.b) * C) - W) * C, V += (I.c + (I.d - I.c) * C - V) * C, E = p ? Math.atan2(V - W, D - M) * F + R : this._initialRotations[w], this._mod[P] && (E = this._mod[P](E, u)), f[P] ? u[P](E) : u[P] = E)
			}
		}), e = y.prototype, y.bezierThrough = d, y.cubicToQuadratic = S, y._autoCSS = !0, y.quadraticToCubic = function(o, t, e) {
			return new u(o, (2 * t + o) / 3, (2 * t + e) / 3, e)
		}, y._cssRegister = function() {
			var o = s.CSSPlugin,
				e, i, b, m;
			o && (e = o._internals, i = e._parseToProxy, b = e._setPluginRatio, m = e.CSSPropTween, e._registerComplexSpecialProp("bezier", {
				parser: function(d, t, _, c, r, g) {
					t instanceof Array && (t = {
						values: t
					}), g = new y;
					var S = t.values,
						h = S.length - 1,
						v = [],
						u = {},
						p, f, B;
					if (0 > h) return r;
					for (p = 0; p <= h; p++) B = i(d, S[p], c, r, g, h !== p), v[p] = B.end;
					for (f in t) u[f] = t[f];
					return u.values = v, (r = new m(d, "bezier", 0, 0, B.pt, 2)).data = B, r.plugin = g, r.setRatio = b, 0 === u.autoRotate && (u.autoRotate = !0), !u.autoRotate || u.autoRotate instanceof Array || (p = !0 === u.autoRotate ? 0 : +u.autoRotate, u.autoRotate = null == B.end.left ? null != B.end.x && [
						["x", "y", "rotation", p, !1]
					] : [
						["left", "top", "rotation", p, !1]
					]), u.autoRotate && (c._transform || c._enableTransforms(!1), B.autoRotate = c._target._fwdTransform, B.proxy.rotation = B.autoRotate.rotation || 0, c._overwriteProps.push("rotation")), g._onInitTween(B.proxy, u, c._tween), r
				}
			}))
		}, e._mod = function(o) {
			for (var t = this._overwriteProps, s = t.length, n; - 1 < --s;)(n = o[t[s]]) && "function" == typeof n && (this._mod[t[s]] = n)
		}, e._kill = function(o) {
			var t = this._props,
				s, n;
			for (s in this._beziers)
				if (s in o)
					for (delete this._beziers[s], delete this._func[s], n = t.length; - 1 < --n;) t[n] === s && t.splice(n, 1);
			if (t = this._autoRotate)
				for (n = t.length; - 1 < --n;) o[t[n][2]] && t.splice(n, 1);
			return this._super._kill.call(this, o)
		}, _fwd_fwdScope.FWDFWD_fwdDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "FWDTweenLite"], function(E, L) {
			function B(o, t) {
				return t.toUpperCase()
			}

			function n(e) {
				return ce.createElementNS ? ce.createElementNS("http://www.w3.org/1999/xhtml", e) : ce.createElement(e)
			}

			function a(e) {
				return I.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
			}

			function V(e) {
				window.console && console.log(e)
			}

			function j(o, n) {
				var a = (n = n || K).style,
					s, d;
				if (void 0 !== a[o]) return o;
				for (o = o.charAt(0).toUpperCase() + o.substr(1), s = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; - 1 < --d && void 0 === a[s[d] + o];);
				return 0 <= d ? (be = "-" + (me = 3 === d ? "ms" : s[d]).toLowerCase() + "-", me + o) : null
			}

			function g(o, t) {
				var d = {},
					n, l, _;
				if (t = t || ge(o, null)) {
					if (n = t.length)
						for (; - 1 < --n;) - 1 !== (_ = t[n]).indexOf("-transform") && ze !== _ || (d[_.replace(u, B)] = t.getPropertyValue(_));
					else
						for (n in t) - 1 !== n.indexOf("Transform") && Xe !== n || (d[n] = t[n]);
				} else if (t = o.currentStyle || o.style)
					for (n in t) "string" == typeof n && void 0 === d[n] && (d[n.replace(u, B)] = t[n]);
				return he || (d.opacity = a(o)), l = tt(o, t, !1), d.rotation = l.rotation, d.skewX = l.skewX, d.scaleX = l.scaleX, d.scaleY = l.scaleY, d.x = l.x, d.y = l.y, Ge && (d.z = l.z, d.rotationX = l.rotationX, d.rotationY = l.rotationY, d.scaleZ = l.scaleZ), d.filters && delete d.filters, d
			}

			function y(d, t, e, i, r) {
				var s = {},
					l = d.style,
					u, _, c;
				for (_ in e) "cssText" !== _ && "length" !== _ && isNaN(_) && (t[_] !== (u = e[_]) || r && r[_]) && -1 === _.indexOf("Origin") && ("number" != typeof u && "string" != typeof u || (s[_] = "auto" !== u || "left" !== _ && "top" !== _ ? "" !== u && "auto" !== u && "none" !== u || "string" != typeof t[_] || "" === t[_].replace(b, "") ? u : 0 : ve(d, _), void 0 !== l[_] && (c = new De(l, _, l[_], c))));
				if (i)
					for (_ in i) "className" !== _ && (s[_] = i[_]);
				return {
					difs: s,
					firstMPT: c
				}
			}

			function e(o, s) {
				return "function" == typeof o && (o = o(Ie, Ae)), "string" == typeof o && "=" === o.charAt(1) ? parseInt(o.charAt(0) + "1", 10) * parseFloat(o.substr(2)) : parseFloat(o) - parseFloat(s) || 0
			}

			function k(o, s) {
				return "function" == typeof o && (o = o(Ie, Ae)), null == o ? s : "string" == typeof o && "=" === o.charAt(1) ? parseInt(o.charAt(0) + "1", 10) * parseFloat(o.substr(2)) + s : parseFloat(o) || 0
			}

			function o(d, u, e, i) {
				var r, _, c, p, h;
				return "function" == typeof d && (d = d(Ie, Ae)), 1e-6 > (p = null == d ? u : "number" == typeof d ? d : (r = 360, _ = d.split("_"), c = ((h = "=" === d.charAt(1)) ? parseInt(d.charAt(0) + "1", 10) * parseFloat(_[0].substr(2)) : parseFloat(_[0])) * (-1 === d.indexOf("rad") ? 1 : Q) - (h ? 0 : u), _.length && (i && (i[e] = u + c), -1 !== d.indexOf("short") && (c %= r) !== c % 180 && (c = 0 > c ? c + r : c - r), -1 !== d.indexOf("_cw") && 0 > c ? c = (c + 3599999999640) % r - (0 | c / r) * r : -1 !== d.indexOf("ccw") && 0 < c && (c = (c - 3599999999640) % r - (0 | c / r) * r)), u + c)) && -1e-6 < p && (p = 0), p
			}

			function S(o, s, e) {
				return 0 | 255 * (1 > 6 * (o = 0 > o ? o + 1 : 1 < o ? o - 1 : o) ? s + 6 * ((e - s) * o) : .5 > o ? e : 2 > 3 * o ? s + 6 * ((e - s) * (2 / 3 - o)) : s) + .5
			}

			function _(d, t) {
				for (var e = d.match(He) || [], s = 0, l = e.length ? "" : d, u = 0, _, c; u < e.length; u++) _ = e[u], s += (c = d.substr(s, d.indexOf(_, s) - s)).length + _.length, 3 === (_ = we(_, t)).length && _.push(1), l += c + (t ? "hsla(" + _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : "rgba(" + _.join(",")) + ")";
				return l + d.substr(s)
			}

			function r(s, t, d, n) {
				if (null == s) return function(e) {
					return e
				};
				var a = t ? (s.match(He) || [""])[0] : "",
					l = s.split(a).join("").match(X) || [],
					h = s.substr(0, s.indexOf(l[0])),
					b = ")" === s.charAt(s.length - 1) ? ")" : "",
					u = -1 === s.indexOf(" ") ? "," : " ",
					p = l.length,
					_ = 0 < p ? l[0].replace(ue, "") : "",
					e;
				return p ? e = t ? function(o) {
					var c, m, g, y;
					if ("number" == typeof o) o += _;
					else if (n && Z.test(o)) {
						for (y = o.replace(Z, "|").split("|"), g = 0; g < y.length; g++) y[g] = e(y[g]);
						return y.join(",")
					}
					if (c = (o.match(He) || [a])[0], g = (m = o.split(c).join("").match(X) || []).length, p > g--)
						for (; ++g < p;) m[g] = d ? m[0 | (g - 1) / 2] : l[g];
					return h + m.join(u) + u + c + b + (-1 === o.indexOf("inset") ? "" : " inset")
				} : function(o) {
					var s, a, c;
					if ("number" == typeof o) o += _;
					else if (n && Z.test(o)) {
						for (a = o.replace(Z, "|").split("|"), c = 0; c < a.length; c++) a[c] = e(a[c]);
						return a.join(",")
					}
					if (c = (s = o.match(X) || []).length, p > c--)
						for (; ++c < p;) s[c] = d ? s[0 | (c - 1) / 2] : l[c];
					return h + s.join(u) + b
				} : function(e) {
					return e
				}
			}

			function v(e) {
				return e = e.split(","),
					function(d, t, u, i, r, s, n) {
						var _ = (t + "").split(" "),
							l;
						for (n = {}, l = 0; 4 > l; l++) n[e[l]] = _[l] = _[l] || _[(l - 1) / 2 >> 0];
						return i.parse(d, n, r, s)
					}
			}

			function A(o, t, e, i, d, s) {
				var n = new Ve(o, t, e, i - e, d, -1, s);
				return n.b = e, n.e = n.xs0 = i, n
			}

			function R(o, t) {
				t = t || {}, this.p = t.prefix && j(o) || o, (ae[o] = ae[this.p] = this).format = t.formatter || r(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
			}

			function q(o, t, e) {
				var n = ce.createElementNS("http://www.w3.org/2000/svg", o),
					s;
				for (s in e) n.setAttributeNS(null, s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), e[s]);
				return t.appendChild(n), n
			}

			function $(b, t, S, i, r, s) {
				var n = b._fwdTransform,
					B = et(b, !0),
					T, P, w, H, C, E, k, O, L, A, I, M, W, D;
				n && (W = n.xOrigin, D = n.yOrigin), (!i || 2 > (T = i.split(" ")).length) && (k = b.getBBox(), T = [(-1 === (t = Te(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) : parseFloat(t[0]) / 100 * k.width) + k.x, (-1 === t[1].indexOf("%") ? parseFloat(t[1]) : parseFloat(t[1]) / 100 * k.height) + k.y]), S.xOrigin = H = parseFloat(T[0]), S.yOrigin = C = parseFloat(T[1]), i && B !== $e && (E = B[0], k = B[1], O = B[2], L = B[3], A = B[4], P = H * (L / (M = E * L - k * O)) + C * (-O / M) + (O * (I = B[5]) - L * A) / M, w = H * (-k / M) + C * (E / M) - (E * I - k * A) / M, H = S.xOrigin = T[0] = P, C = S.yOrigin = T[1] = w), n && (s && (S.xOffset = n.xOffset, S.yOffset = n.yOffset, n = S), r || !1 !== r && !1 !== ie.defaultSmoothOrigin ? (P = H - W, w = C - D, n.xOffset += P * B[0] + w * B[2] - P, n.yOffset += P * B[1] + w * B[3] - w) : n.xOffset = n.yOffset = 0), s || b.setAttribute("data-svg-origin", T.join(" "))
			}

			function ee(a) {
				var t = this.data,
					r = -t.rotation * U,
					s = r + t.skewX * U,
					n = (0 | Math.cos(r) * t.scaleX * 100000) / 100000,
					o = (0 | Math.sin(r) * t.scaleX * 100000) / 100000,
					S = (0 | Math.sin(s) * -t.scaleY * 100000) / 100000,
					B = (0 | Math.cos(s) * t.scaleY * 100000) / 100000,
					f = this.t.style,
					u = this.t.currentStyle,
					p, H;
				if (u) {
					H = o, o = -S, S = -H, p = u.filter, f.filter = "";
					var C = this.t.offsetWidth,
						_ = this.t.offsetHeight,
						c = "absolute" !== u.position,
						d = "progid:DXImageTransform.Microsoft.Matrix(M11=" + n + ", M12=" + o + ", M21=" + S + ", M22=" + B,
						E = t.x + C * t.xPercent / 100,
						k = t.y + _ * t.yPercent / 100;
					if (null != t.ox && (E += (T = (t.oxp ? .01 * (C * t.ox) : t.ox) - C / 2) - (T * n + (L = (t.oyp ? .01 * (_ * t.oy) : t.oy) - _ / 2) * o), k += L - (T * S + L * B)), d += c ? ", Dx=" + ((T = C / 2) - (T * n + (L = _ / 2) * o) + E) + ", Dy=" + (L - (T * S + L * B) + k) + ")" : ", sizingMethod='auto expand')", f.filter = -1 === p.indexOf("DXImageTransform.Microsoft.Matrix(") ? d + " " + p : p.replace(N, d), 0 !== a && 1 !== a || 1 == n && 0 === o && 0 === S && 1 == B && (c && -1 === d.indexOf("Dx=0, Dy=0") || I.test(p) && 100 !== parseFloat(RegExp.$1) || -1 === p.indexOf(p.indexOf("Alpha")) && f.removeAttribute("filter")), !c) {
						var O = 8 > Le ? 1 : -1,
							T = t.ieOffsetX || 0,
							L = t.ieOffsetY || 0,
							A, M, W;
						for (t.ieOffsetX = Math.round((C - ((0 > n ? -n : n) * C + (0 > o ? -o : o) * _)) / 2 + E), t.ieOffsetY = Math.round((_ - ((0 > B ? -B : B) * _ + (0 > S ? -S : S) * C)) / 2 + k), Fe = 0; 4 > Fe; Fe++) W = (H = -1 === (A = u[M = Be[Fe]]).indexOf("px") ? Se(this.t, M, parseFloat(A), A.replace(_e, "")) || 0 : parseFloat(A)) === t[M] ? 2 > Fe ? T - t.ieOffsetX : L - t.ieOffsetY : 2 > Fe ? -t.ieOffsetX : -t.ieOffsetY, f[M] = (t[M] = Math.round(H - W * (0 === Fe || 2 === Fe ? 1 : O))) + "px"
					}
				}
			}

			function te(o) {
				var t = this.t,
					n = t.filter || ye(this.data, "filter") || "",
					i = 0 | this.s + this.c * o,
					s;
				100 == i && (s = -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (t.removeAttribute("filter"), !ye(this.data, "filter")) : (t.filter = n.replace(f, ""), !0)), s || (this.xn1 && (t.filter = n = n || "alpha(opacity=" + i + ")"), -1 === n.indexOf("pacity") ? 0 == i && this.xn1 || (t.filter = n + " alpha(opacity=" + i + ")") : t.filter = n.replace(I, "opacity=" + i))
			}

			function oe(o) {
				if (this.t._fwdClassPT = this, 1 === o || 0 === o) {
					this.t.setAttribute("class", 0 === o ? this.b : this.e);
					for (var t = this.data, s = this.t.style; t;) t.v ? s[t.p] = t.v : _t(s, t.p), t = t._next;
					1 === o && this.t._fwdClassPT === this && (this.t._fwdClassPT = null)
				} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
			}

			function se(d) {
				if ((1 === d || 0 === d) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
					var t = this.t.style,
						a = ae.transform.parse,
						o, l, u, _, c;
					if ("all" === this.e) _ = !(t.cssText = "");
					else
						for (u = (o = this.e.split(" ").join("").split(",")).length; - 1 < --u;) l = o[u], ae[l] && (ae[l].parse === a ? _ = !0 : l = "transformOrigin" === l ? Qe : ae[l].p), _t(t, l);
					_ && (_t(t, Xe), (c = this.t._fwdTransform) && (c.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._fwdTransform))
				}
			}

			function ne() {
				this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
			}
			var ie = function() {
					E.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = ie.prototype.setRatio
				},
				W = _fwd_fwdScope.FWDFWD_fwdDefine.globals,
				ae = {},
				h = ie.prototype = new E("css"),
				m, de, re, le;
			(h.constructor = ie).version = "1.19.0", ie.API = 2, ie.defaultTransformPerspective = 0, ie.defaultSkewType = "compensated", ie.defaultSmoothOrigin = !0, h = "px", ie.suffixMap = {
				top: h,
				right: h,
				bottom: h,
				left: h,
				width: h,
				height: h,
				fontSize: h,
				padding: h,
				margin: h,
				perspective: h,
				lineHeight: ""
			};
			var ue = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
				z = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
				X = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
				b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
				_e = /(?:\d|\-|\+|=|#|\.)*/g,
				I = /opacity *= *([^)]*)/i,
				f = /alpha\(opacity *=.+?\)/i,
				l = /([A-Z])/g,
				u = /-([a-z])/gi,
				N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
				Z = /,(?=[^\)]*(?:\(|$))/gi,
				U = Math.PI / 180,
				Q = 180 / Math.PI,
				G = {},
				ce = document,
				K = n("div"),
				p = n("img"),
				J = ie._internals = {
					_specialProps: ae
				},
				pe = navigator.userAgent,
				he = (Me = pe.indexOf("Android"), We = n("a"), ke = -1 !== pe.indexOf("Safari") && -1 === pe.indexOf("Chrome") && (-1 === Me || 3 < +pe.substr(Me + 8, 1)), xe = ke && 6 > +pe.substr(pe.indexOf("Version/") + 8, 1), Oe = -1 !== pe.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(pe) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(pe)) && (Le = parseFloat(RegExp.$1)), !!We && (We.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(We.style.opacity))),
				be = "",
				me = "",
				ge = ce.defaultView ? ce.defaultView.getComputedStyle : function() {},
				ye = ie.getStyle = function(o, t, e, d, r) {
					var s;
					return he || "opacity" !== t ? (!d && o.style[t] ? s = o.style[t] : (e = e || ge(o)) ? s = e[t] || e.getPropertyValue(t) || e.getPropertyValue(t.replace(l, "-$1").toLowerCase()) : o.currentStyle && (s = o.currentStyle[t]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : a(o)
				},
				Se = J.convertToPixels = function(d, t, e, _, r) {
					if ("px" === _ || !_) return e;
					if ("auto" === _ || !e) return 0;
					var s = /(?:Left|Right|Width)/i.test(t),
						l = d,
						c = K.style,
						b = 0 > e,
						u = 1 === e,
						p, m, g;
					if (b && (e = -e), u && (e *= 100), "%" === _ && -1 !== t.indexOf("border")) p = e / 100 * (s ? d.clientWidth : d.clientHeight);
					else {
						if (c.cssText = "border:0 solid red;position:" + ye(d, "position") + ";line-height:0;", "%" !== _ && l.appendChild && "v" !== _.charAt(0) && "rem" !== _) c[s ? "borderLeftWidth" : "borderTopWidth"] = e + _;
						else {
							if (m = (l = d.parentNode || ce.body)._fwdCache, g = L.ticker.frame, m && s && m.time === g) return m.width * e / 100;
							c[s ? "width" : "height"] = e + _
						}
						l.appendChild(K), p = parseFloat(K[s ? "offsetWidth" : "offsetHeight"]), l.removeChild(K), s && "%" === _ && !1 !== ie.cacheWidths && ((m = l._fwdCache = l._fwdCache || {}).time = g, m.width = 100 * (p / e)), 0 !== p || r || (p = Se(d, t, e, _, !0))
					}
					return u && (p /= 100), b ? -p : p
				},
				ve = J.calculateOffset = function(o, t, e) {
					if ("absolute" !== ye(o, "position", e)) return 0;
					var n = "left" === t ? "Left" : "Top",
						i = ye(o, "margin" + n, e);
					return o["offset" + n] - (Se(o, t, parseFloat(i), i.replace(_e, "")) || 0)
				},
				fe = {
					width: ["Left", "Right"],
					height: ["Top", "Bottom"]
				},
				Be = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
				Te = function(o, a) {
					if ("contain" === o || "auto" === o || "auto auto" === o) return o + " ";
					null != o && "" !== o || (o = "0 0");
					var e = o.split(" "),
						d = -1 === o.indexOf("left") ? -1 === o.indexOf("right") ? e[0] : "100%" : "0%",
						l = -1 === o.indexOf("top") ? -1 === o.indexOf("bottom") ? e[1] : "100%" : "0%",
						u;
					if (3 < e.length && !a) {
						for (e = o.split(", ").join(",").split(","), o = [], u = 0; u < e.length; u++) o.push(Te(e[u]));
						return o.join(",")
					}
					return null == l ? l = "center" === d ? "50%" : "0" : "center" === l && (l = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), o = d + " " + l + (2 < e.length ? " " + e[2] : ""), a && (a.oxp = -1 !== d.indexOf("%"), a.oyp = -1 !== l.indexOf("%"), a.oxr = "=" === d.charAt(1), a.oyr = "=" === l.charAt(1), a.ox = parseFloat(d.replace(b, "")), a.oy = parseFloat(l.replace(b, "")), a.v = o), a || o
				},
				Pe = {
					aqua: [0, 255, 255],
					lime: [0, 255, 0],
					silver: [192, 192, 192],
					black: [0, 0, 0],
					maroon: [128, 0, 0],
					teal: [0, 128, 128],
					blue: [0, 0, 255],
					navy: [0, 0, 128],
					white: [255, 255, 255],
					fuchsia: [255, 0, 255],
					olive: [128, 128, 0],
					yellow: [255, 255, 0],
					orange: [255, 165, 0],
					gray: [128, 128, 128],
					purple: [128, 0, 128],
					green: [0, 128, 0],
					red: [255, 0, 0],
					pink: [255, 192, 203],
					cyan: [0, 255, 255],
					transparent: [255, 255, 255, 0]
				},
				we = ie.parseColor = function(d, _) {
					var e, c, b, m, g, y, v, B, T, P, w;
					if (!d) e = Pe.black;
					else if ("number" == typeof d) e = [d >> 16, 255 & d >> 8, 255 & d];
					else {
						if ("," === d.charAt(d.length - 1) && (d = d.substr(0, d.length - 1)), Pe[d]) e = Pe[d];
						else if ("#" === d.charAt(0)) 4 === d.length && (d = "#" + (c = d.charAt(1)) + c + (b = d.charAt(2)) + b + (m = d.charAt(3)) + m), e = [(d = parseInt(d.substr(1), 16)) >> 16, 255 & d >> 8, 255 & d];
						else if (!("hsl" === d.substr(0, 3))) e = d.match(ue) || Pe.transparent;
						else if (!(e = w = d.match(ue), _)) g = +e[0] % 360 / 360, y = +e[1] / 100, c = 2 * (v = +e[2] / 100) - (b = .5 >= v ? v * (y + 1) : v + y - v * y), 3 < e.length && (e[3] = +d[3]), e[0] = S(g + 1 / 3, c, b), e[1] = S(g, c, b), e[2] = S(g - 1 / 3, c, b);
						else if (-1 !== d.indexOf("=")) return d.match(z);
						e[0] = +e[0], e[1] = +e[1], e[2] = +e[2], 3 < e.length && (e[3] = +e[3])
					}
					return _ && !w && (c = e[0] / 255, b = e[1] / 255, m = e[2] / 255, v = ((B = Math.max(c, b, m)) + (T = Math.min(c, b, m))) / 2, B === T ? g = y = 0 : (P = B - T, y = .5 < v ? P / (2 - B - T) : P / (B + T), g = B === c ? (b - m) / P + (b < m ? 6 : 0) : B === b ? (m - c) / P + 2 : (c - b) / P + 4, g *= 60), e[0] = 0 | g + .5, e[1] = 0 | 100 * y + .5, e[2] = 0 | 100 * v + .5), e
				},
				He = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
				Ce, Ee, ke, Oe, xe, Le, Ae, Ie, Me, We;
			for (h in Pe) He += "|" + h + "\\b";
			He = new RegExp(He + ")", "gi"), ie.colorStringFilter = function(o) {
				var t = o[0] + o[1],
					s;
				He.test(t) && (s = -1 !== t.indexOf("hsl(") || -1 !== t.indexOf("hsla("), o[0] = _(o[0], s), o[1] = _(o[1], s)), He.lastIndex = 0
			}, L.defaultStringFilter || (L.defaultStringFilter = ie.colorStringFilter), J._setPluginRatio = function(d) {
				this.plugin.setRatio(d);
				for (var t = this.data, a = t.proxy, o = t.firstMPT, u, _, c, p, h; o;) u = a[o.v], o.r ? u = Math.round(u) : 1e-6 > u && -1e-6 < u && (u = 0), o.t[o.p] = u, o = o._next;
				if (t.autoRotate && (t.autoRotate.rotation = t.mod ? t.mod(a.rotation, this.t) : a.rotation), 1 === d || 0 === d)
					for (o = t.firstMPT, h = 1 === d ? "e" : "b"; o;) {
						if (!(_ = o.t).type) _[h] = _.s + _.xs0;
						else if (1 === _.type) {
							for (p = _.xs0 + _.s + _.xs1, c = 1; c < _.l; c++) p += _["xn" + c] + _["xs" + (c + 1)];
							_[h] = p
						}
						o = o._next
					}
			};
			var De = function(o, t, e, n, i) {
					this.t = o, this.p = t, this.v = e, this.r = i, n && ((n._prev = this)._next = n)
				},
				Ve = (J._parseToProxy = function(b, t, e, i, m, s) {
					var n = i,
						u = {},
						p = {},
						_ = e._transform,
						c = G,
						d, g, y, S, v;
					for (e._transform = null, G = t, i = v = e.parse(b, t, i, m), G = c, s && (e._transform = _, n && (n._prev = null, n._prev && (n._prev._next = null))); i && i !== n;) {
						if (1 >= i.type && (p[g = i.p] = i.s + i.c, u[g] = i.s, s || (S = new De(i, "s", g, S, i.r), i.c = 0), 1 === i.type))
							for (d = i.l; 0 < --d;) y = "xn" + d, p[g = i.p + "_" + y] = i.data[y], u[g] = i[y], s || (S = new De(i, y, g, S, i.rxp[y]));
						i = i._next
					}
					return {
						proxy: u,
						end: p,
						firstMPT: S,
						pt: v
					}
				}, J.CSSPropTween = function(d, t, e, i, r, s, n, a, o, l, u) {
					this.t = d, this.p = t, this.s = e, this.c = i, this.n = n || t, d instanceof Ve || le.push(this.n), this.r = a, this.type = s || 0, o && (this.pr = o, m = !0), this.b = void 0 === l ? e : l, this.e = void 0 === u ? e + i : u, r && ((this._next = r)._prev = this)
				}),
				Re = ie.parseComplex = function(S, t, B, H, C, s, n, E, o, l) {
					B = B || s || "", "function" == typeof H && (H = H(Ie, Ae)), n = new Ve(S, t, 0, 0, n, l ? 2 : 1, null, !1, E, B, H), H += "", C && He.test(H + B) && (H = [B, H], ie.colorStringFilter(H), B = H[0], H = H[1]);
					var h = B.split(", ").join(",").split(" "),
						L = H.split(", ").join(",").split(" "),
						A = h.length,
						I = !1 !== Ce,
						k, M, W, D, V, R, F, N, U, Y, X, Q, G;
					for (-1 === H.indexOf(",") && -1 === B.indexOf(",") || (h = h.join(" ").replace(Z, ", ").split(" "), L = L.join(" ").replace(Z, ", ").split(" "), A = h.length), A !== L.length && (A = (h = (s || "").split(" ")).length), n.plugin = o, n.setRatio = l, k = He.lastIndex = 0; k < A; k++)
						if (D = h[k], V = L[k], (N = parseFloat(D)) || 0 === N) n.appendXtra("", N, e(V, N), V.replace(z, ""), I && -1 !== V.indexOf("px"), !0);
						else if (C && He.test(D)) Q = ")" + ((Q = V.indexOf(")") + 1) ? V.substr(Q) : ""), G = -1 !== V.indexOf("hsl") && he, D = we(D, G), V = we(V, G), (U = 6 < D.length + V.length) && !he && 0 === V[3] ? (n["xs" + n.l] += n.l ? " transparent" : "transparent", n.e = n.e.split(L[k]).join("transparent")) : (he || (U = !1), G ? n.appendXtra(U ? "hsla(" : "hsl(", D[0], e(V[0], D[0]), ",", !1, !0).appendXtra("", D[1], e(V[1], D[1]), "%,", !1).appendXtra("", D[2], e(V[2], D[2]), U ? "%," : "%" + Q, !1) : n.appendXtra(U ? "rgba(" : "rgb(", D[0], V[0] - D[0], ",", !0, !0).appendXtra("", D[1], V[1] - D[1], ",", !0).appendXtra("", D[2], V[2] - D[2], U ? "," : Q, !0), U && (D = 4 > D.length ? 1 : D[3], n.appendXtra("", D, (4 > V.length ? 1 : V[3]) - D, Q, !1))), He.lastIndex = 0;
					else if (R = D.match(ue)) {
						if (!(F = V.match(z)) || F.length !== R.length) return n;
						for (M = W = 0; M < R.length; M++) X = R[M], Y = D.indexOf(X, W), n.appendXtra(D.substr(W, Y - W), +X, e(F[M], X), "", I && "px" === D.substr(Y + X.length, 2), 0 === M), W = Y + X.length;
						n["xs" + n.l] += D.substr(W)
					} else n["xs" + n.l] += n.l || n["xs" + n.l] ? " " + V : V;
					if (-1 !== H.indexOf("=") && n.data) {
						for (Q = n.xs0 + n.data.s, k = 1; k < n.l; k++) Q += n["xs" + k] + n.data["xn" + k];
						n.e = Q + n["xs" + k]
					}
					return n.l || (n.type = -1, n.xs0 = n.e), n.xfirst || n
				},
				Fe = 9;
			for ((h = Ve.prototype).l = h.pr = 0; 0 < --Fe;) h["xn" + Fe] = 0, h["xs" + Fe] = "";
			h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(d, t, e, i, r, s) {
				var n = this,
					a = n.l;
				return n["xs" + a] += s && (a || n["xs" + a]) ? " " + d : d || "", e || 0 === a || n.plugin ? (n.l++, n.type = n.setRatio ? 2 : 1, n["xs" + n.l] = i || "", 0 < a ? (n.data["xn" + a] = t + e, n.rxp["xn" + a] = r, n["xn" + a] = t, n.plugin || (n.xfirst = new Ve(n, "xn" + a, t, e, n.xfirst || n, 0, n.n, r, n.pr), n.xfirst.xs0 = 0)) : (n.data = {
					s: t + e
				}, n.rxp = {}, n.s = t, n.c = e, n.r = r), n) : (n["xs" + a] += t + (i || ""), n)
			};
			var Ne = J._registerComplexSpecialProp = function(o, t, a) {
					"object" != typeof t && (t = {
						parser: a
					});
					var d = o.split(","),
						s = t.defaultValue,
						n;
					for (a = a || [s], n = 0; n < d.length; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = a[n] || s, new R(d[n], t)
				},
				Ue = J._registerPluginProp = function(e) {
					var d;
					ae[e] || (d = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin", Ne(e, {
						parser: function(l, t, e, i, r, s, n) {
							var a = W.com.fwd.plugins[d];
							return a ? (a._cssRegister(), ae[e].parse(l, t, e, i, r, s, n)) : (V("Error: " + d + " js file not loaded."), r)
						}
					}))
				};
			(h = R.prototype).parseComplex = function(d, t, _, c, r, s) {
				var n = this.keyword,
					p, b, m, g, y, S;
				if (this.multi && (Z.test(_) || Z.test(t) ? (b = t.replace(Z, "|").split("|"), m = _.replace(Z, "|").split("|")) : n && (b = [t], m = [_])), m) {
					for (g = m.length > b.length ? m.length : b.length, p = 0; p < g; p++) t = b[p] = b[p] || this.dflt, _ = m[p] = m[p] || this.dflt, n && (y = t.indexOf(n)) !== (S = _.indexOf(n)) && (-1 === S ? b[p] = b[p].split(n).join("") : -1 === y && (b[p] += " " + n));
					t = b.join(", "), _ = m.join(", ")
				}
				return Re(d, this.p, t, _, this.clrs, this.dflt, c, this.pr, r, s)
			}, h.parse = function(o, t, e, i, a, s) {
				return this.parseComplex(o.style, this.format(ye(o, this.p, re, !1, this.dflt)), this.format(t), a, s)
			}, ie.registerSpecialProp = function(e, a, d) {
				Ne(e, {
					parser: function(l, t, e, i, r, s) {
						var n = new Ve(l, e, 0, 0, r, 2, e, !1, d);
						return n.plugin = s, n.setRatio = a(l, t, i._tween, e), n
					},
					priority: d
				})
			}, ie.useSVGTransformAttr = ke || Oe;
			var Ye = ["scaleX", "scaleY", "scaleZ", "x", "y", "z", "skewX", "skewY", "rotation", "rotationX", "rotationY", "perspective", "xPercent", "yPercent"],
				Xe = j("transform"),
				ze = be + "transform",
				Qe = j("transformOrigin"),
				Ge = null !== j("perspective"),
				je = J.Transform = function() {
					this.perspective = parseFloat(ie.defaultTransformPerspective) || 0, this.force3D = !1 !== ie.defaultForce3D && Ge && (ie.defaultForce3D || "auto")
				},
				qe = window.SVGElement,
				Ke = ce.documentElement,
				Je = (ut = Le || /Android/i.test(pe) && !window.chrome, ce.createElementNS && !ut && (at = q("svg", Ke), lt = (rt = q("rect", at, {
					width: 100,
					height: 50,
					x: 100
				})).getBoundingClientRect().width, rt.style[Qe] = "50% 50%", rt.style[Xe] = "scaleX(0.5)", ut = lt === rt.getBoundingClientRect().width && !(Oe && Ge), Ke.removeChild(at)), ut),
				Ze = function(e) {
					return !!(qe && e.getBBox && e.getCTM && function(e) {
						try {
							return e.getBBox()
						} catch (e) {}
					}(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
				},
				$e = [1, 0, 0, 1, 0, 0],
				et = function(d, t) {
					var e = d._fwdTransform || new je,
						l = d.style,
						u, _, c, p, h, b;
					if (Xe ? _ = ye(d, ze, null, !0) : d.currentStyle && (_ = (_ = d.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi)) && 4 === _.length ? [_[0].substr(4), +_[2].substr(4), +_[1].substr(4), _[3].substr(4), e.x || 0, e.y || 0].join(",") : ""), (u = !_ || "none" === _ || "matrix(1, 0, 0, 1, 0, 0)" === _) && Xe && ((b = "none" === ge(d).display) || !d.parentNode) && (b && (p = l.display, l.display = "block"), d.parentNode || (h = 1, Ke.appendChild(d)), u = !(_ = ye(d, ze, null, !0)) || "none" === _ || "matrix(1, 0, 0, 1, 0, 0)" === _, p ? l.display = p : b && _t(l, "display"), h && Ke.removeChild(d)), (e.svg || d.getBBox && Ze(d)) && (u && -1 !== (l[Xe] + "").indexOf("matrix") && (_ = l[Xe], u = 0), c = d.getAttribute("transform"), u && c && (-1 === c.indexOf("matrix") ? -1 !== c.indexOf("translate") && (_ = "matrix(1,0,0,1," + c.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", u = 0) : (_ = c, u = 0))), u) return $e;
					for (c = (_ || "").match(ue) || [], Fe = c.length; - 1 < --Fe;) p = +c[Fe], c[Fe] = (h = p - (p |= 0)) ? (0 | 1e5 * h + (0 > h ? -.5 : .5)) / 1e5 + p : p;
					return t && 6 < c.length ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c
				},
				tt = J.getTransform = function(B, t, e, i) {
					if (B._fwdTransform && e && !i) return B._fwdTransform;
					var r = e && B._fwdTransform || new je,
						H = 0 > r.scaleX,
						I = Ge && (parseFloat(ye(B, Qe, t, !1, "0 0 0").split(" ")[2]) || r.zOrigin) || 0,
						W = parseFloat(ie.defaultTransformPerspective) || 0,
						E, V, N, U, Y, G, j, q, K, J, Z, ee, te, oe, se, ne, ae, de, re, le, ue, _e, ce, pe, he, be, me, ge, Se, ve, fe, Be;
					if (r.svg = B.getBBox && Ze(B), r.svg && ($(B, ye(B, Qe, t, !1, "50% 50%") + "", r, B.getAttribute("data-svg-origin")), it = ie.useSVGTransformAttr || Je), (E = et(B)) !== $e)
						for (V in 16 === E.length ? (j = E[0], q = E[1], K = E[2], J = E[3], Z = E[4], ee = E[5], te = E[6], oe = E[7], se = E[8], ne = E[9], ae = E[10], de = E[12], re = E[13], le = E[14], ue = E[11], _e = Math.atan2(te, ae), r.zOrigin && (de = se * (le = -r.zOrigin) - E[12], re = ne * le - E[13], le = ae * le + r.zOrigin - E[14]), r.rotationX = _e * Q, _e && (ce = Z * (be = Math.cos(-_e)) + se * (me = Math.sin(-_e)), pe = ee * be + ne * me, he = te * be + ae * me, se = Z * -me + se * be, ne = ee * -me + ne * be, ae = te * -me + ae * be, ue = oe * -me + ue * be, Z = ce, ee = pe, te = he), _e = Math.atan2(-K, ae), r.rotationY = _e * Q, _e && (pe = q * (be = Math.cos(-_e)) - ne * (me = Math.sin(-_e)), he = K * be - ae * me, ne = q * me + ne * be, ae = K * me + ae * be, ue = J * me + ue * be, j = ce = j * be - se * me, q = pe, K = he), _e = Math.atan2(q, j), r.rotation = _e * Q, _e && (j = j * (be = Math.cos(-_e)) + Z * (me = Math.sin(-_e)), pe = q * be + ee * me, ee = q * -me + ee * be, te = K * -me + te * be, q = pe), r.rotationX && 359.9 < Math.abs(r.rotationX) + Math.abs(r.rotation) && (r.rotationX = r.rotation = 0, r.rotationY = 180 - r.rotationY), r.scaleX = (0 | 1e5 * Math.sqrt(j * j + q * q) + .5) / 1e5, r.scaleY = (0 | 1e5 * Math.sqrt(ee * ee + ne * ne) + .5) / 1e5, r.scaleZ = (0 | 1e5 * Math.sqrt(te * te + ae * ae) + .5) / 1e5, r.rotationX || r.rotationY ? r.skewX = 0 : (r.skewX = Z || ee ? Math.atan2(Z, ee) * Q + r.rotation : r.skewX || 0, 90 < Math.abs(r.skewX) && 270 > Math.abs(r.skewX) && (H ? (r.scaleX *= -1, r.skewX += 0 >= r.rotation ? 180 : -180, r.rotation += 0 >= r.rotation ? 180 : -180) : (r.scaleY *= -1, r.skewX += 0 >= r.skewX ? 180 : -180))), r.perspective = ue ? 1 / (0 > ue ? -ue : ue) : 0, r.x = de, r.y = re, r.z = le, r.svg && (r.x -= r.xOrigin - (r.xOrigin * j - r.yOrigin * Z), r.y -= r.yOrigin - (r.yOrigin * q - r.xOrigin * ee))) : Ge && !i && E.length && r.x === E[4] && r.y === E[5] && (r.rotationX || r.rotationY) || (Se = (ge = 6 <= E.length) ? E[0] : 1, ve = E[1] || 0, fe = E[2] || 0, Be = ge ? E[3] : 1, r.x = E[4] || 0, r.y = E[5] || 0, N = Math.sqrt(Se * Se + ve * ve), U = Math.sqrt(Be * Be + fe * fe), Y = Se || ve ? Math.atan2(ve, Se) * Q : r.rotation || 0, G = fe || Be ? Math.atan2(fe, Be) * Q + Y : r.skewX || 0, 90 < Math.abs(G) && 270 > Math.abs(G) && (H ? (N *= -1, G += 0 >= Y ? 180 : -180, Y += 0 >= Y ? 180 : -180) : (U *= -1, G += 0 >= G ? 180 : -180)), r.scaleX = N, r.scaleY = U, r.rotation = Y, r.skewX = G, Ge && (r.rotationX = r.rotationY = r.z = 0, r.perspective = W, r.scaleZ = 1), r.svg && (r.x -= r.xOrigin - (r.xOrigin * Se + r.yOrigin * fe), r.y -= r.yOrigin - (r.xOrigin * ve + r.yOrigin * Be))), r.zOrigin = I, r) 2e-5 > r[V] && -2e-5 < r[V] && (r[V] = 0);
					return e && (B._fwdTransform = r).svg && (it && B.style[Xe] ? L.delayedCall(.001, function() {
						_t(B.style, Xe)
					}) : !it && B.getAttribute("transform") && L.delayedCall(.001, function() {
						B.removeAttribute("transform")
					})), r
				},
				ot = J.set3DTransformRatio = J.setTransformRatio = function(B) {
					var t = this.data,
						P = this.t.style,
						H = t.rotation,
						E = t.rotationX,
						O = t.rotationY,
						S = t.scaleX,
						L = t.scaleY,
						W = t.scaleZ,
						V = t.x,
						R = t.y,
						Y = t.z,
						Q = t.svg,
						X = t.perspective,
						G = t.force3D,
						N, j, q, K, J, Z, $, ee, te, oe, se, ne, ie, ae, de, re, le, ue, _e, ce, pe, he, be;
					if (!((1 !== B && 0 !== B || "auto" !== G || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && G || Y || X || O || E || 1 !== W) || it && Q || !Ge) H || t.skewX || Q ? (H *= U, he = t.skewX * U, be = 1e5, N = Math.cos(H) * S, K = Math.sin(H) * S, j = Math.sin(H - he) * -L, J = Math.cos(H - he) * L, he && "simple" === t.skewType && (le = Math.tan(he - t.skewY * U), j *= le = Math.sqrt(1 + le * le), J *= le, t.skewY && (le = Math.tan(t.skewY * U), N *= le = Math.sqrt(1 + le * le), K *= le)), Q && (V += t.xOrigin - (t.xOrigin * N + t.yOrigin * j) + t.xOffset, R += t.yOrigin - (t.xOrigin * K + t.yOrigin * J) + t.yOffset, it && (t.xPercent || t.yPercent) && (ae = this.t.getBBox(), V += .01 * t.xPercent * ae.width, R += .01 * t.yPercent * ae.height), V < (ae = 1e-6) && -ae < V && (V = 0), R < ae && -ae < R && (R = 0)), _e = (0 | N * be) / be + "," + (0 | K * be) / be + "," + (0 | j * be) / be + "," + (0 | J * be) / be + "," + V + "," + R + ")", Q && it ? this.t.setAttribute("transform", "matrix(" + _e) : P[Xe] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + _e) : P[Xe] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + S + ",0,0," + L + "," + V + "," + R + ")";
					else {
						if (Oe && (S < (ae = 1e-4) && -ae < S && (S = W = 2e-5), L < ae && -ae < L && (L = W = 2e-5), !X || t.z || t.rotationX || t.rotationY || (X = 0)), H || t.skewX) H *= U, de = N = Math.cos(H), re = K = Math.sin(H), t.skewX && (H -= t.skewX * U, de = Math.cos(H), re = Math.sin(H), "simple" === t.skewType && (le = Math.tan((t.skewX - t.skewY) * U), de *= le = Math.sqrt(1 + le * le), re *= le, t.skewY && (le = Math.tan(t.skewY * U), N *= le = Math.sqrt(1 + le * le), K *= le))), j = -re, J = de;
						else {
							if (!(O || E || 1 !== W || X || Q)) return void(P[Xe] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + V + "px," + R + "px," + Y + "px)" + (1 !== S || 1 !== L ? " scale(" + S + "," + L + ")" : ""));
							N = J = 1, j = K = 0
						}
						te = 1, q = Z = $ = ee = oe = se = 0, ne = X ? -1 / X : 0, ie = t.zOrigin, ae = 1e-6, ce = ",", pe = "0", (H = O * U) && (de = Math.cos(H), oe = ne * ($ = -(re = Math.sin(H))), q = N * re, Z = K * re, ne *= te = de, N *= de, K *= de), (H = E * U) && (le = j * (de = Math.cos(H)) + q * (re = Math.sin(H)), ue = J * de + Z * re, ee = te * re, se = ne * re, q = j * -re + q * de, Z = J * -re + Z * de, te *= de, ne *= de, j = le, J = ue), 1 !== W && (q *= W, Z *= W, te *= W, ne *= W), 1 !== L && (j *= L, J *= L, ee *= L, se *= L), 1 !== S && (N *= S, K *= S, $ *= S, oe *= S), (ie || Q) && (ie && (V += q * -ie, R += Z * -ie, Y += te * -ie + ie), Q && (V += t.xOrigin - (t.xOrigin * N + t.yOrigin * j) + t.xOffset, R += t.yOrigin - (t.xOrigin * K + t.yOrigin * J) + t.yOffset), V < ae && -ae < V && (V = pe), R < ae && -ae < R && (R = pe), Y < ae && -ae < Y && (Y = 0)), _e = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(", _e += (N < ae && -ae < N ? pe : N) + ce + (K < ae && -ae < K ? pe : K) + ce + ($ < ae && -ae < $ ? pe : $), _e += ce + (oe < ae && -ae < oe ? pe : oe) + ce + (j < ae && -ae < j ? pe : j) + ce + (J < ae && -ae < J ? pe : J), E || O || 1 !== W ? (_e += ce + (ee < ae && -ae < ee ? pe : ee) + ce + (se < ae && -ae < se ? pe : se) + ce + (q < ae && -ae < q ? pe : q), _e += ce + (Z < ae && -ae < Z ? pe : Z) + ce + (te < ae && -ae < te ? pe : te) + ce + (ne < ae && -ae < ne ? pe : ne) + ce) : _e += ",0,0,0,0,1,0,", _e += V + ce + R + ce + Y + ce + (X ? 1 + -Y / X : 1) + ")", P[Xe] = _e
					}
				},
				it, at, rt, lt, ut;
			(h = je.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Ne("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
				parser: function(S, t, e, i, r, B, n) {
					if (i._lastParsedTransform === n) return r;
					var a;
					"function" == typeof(i._lastParsedTransform = n)[e] && (a = n[e], n[e] = t);
					var T = S._fwdTransform,
						g = S.style,
						y = Ye.length,
						H = n,
						C = {},
						w = tt(S, re, !0, H.parseTransform),
						b = H.transform && ("function" == typeof H.transform ? H.transform(Ie, Ae) : H.transform),
						E, O, x, L, I, M, W, D, V;
					if (i._transform = w, b && "string" == typeof b && Xe)(O = K.style)[Xe] = b, O.display = "block", O.position = "absolute", ce.body.appendChild(K), E = tt(K, null, !1), w.svg && (M = w.xOrigin, W = w.yOrigin, E.x -= w.xOffset, E.y -= w.yOffset, (H.transformOrigin || H.svgOrigin) && (b = {}, $(S, Te(H.transformOrigin), b, H.svgOrigin, H.smoothOrigin, !0), M = b.xOrigin, W = b.yOrigin, E.x -= b.xOffset - w.xOffset, E.y -= b.yOffset - w.yOffset), (M || W) && (D = et(K, !0), E.x -= M - (M * D[0] + W * D[2]), E.y -= W - (M * D[1] + W * D[3]))), ce.body.removeChild(K), E.perspective || (E.perspective = w.perspective), null != H.xPercent && (E.xPercent = k(H.xPercent, w.xPercent)), null != H.yPercent && (E.yPercent = k(H.yPercent, w.yPercent));
					else if ("object" == typeof H) {
						if (E = {
								scaleX: k(null == H.scaleX ? H.scale : H.scaleX, w.scaleX),
								scaleY: k(null == H.scaleY ? H.scale : H.scaleY, w.scaleY),
								scaleZ: k(H.scaleZ, w.scaleZ),
								x: k(H.x, w.x),
								y: k(H.y, w.y),
								z: k(H.z, w.z),
								xPercent: k(H.xPercent, w.xPercent),
								yPercent: k(H.yPercent, w.yPercent),
								perspective: k(H.transformPerspective, w.perspective)
							}, null != (I = H.directionalRotation))
							if ("object" == typeof I)
								for (O in I) H[O] = I[O];
							else H.rotation = I;
						"string" == typeof H.x && -1 !== H.x.indexOf("%") && (E.x = 0, E.xPercent = k(H.x, w.xPercent)), "string" == typeof H.y && -1 !== H.y.indexOf("%") && (E.y = 0, E.yPercent = k(H.y, w.yPercent)), E.rotation = o("rotation" in H ? H.rotation : "shortRotation" in H ? H.shortRotation + "_short" : "rotationZ" in H ? H.rotationZ : w.rotation - w.skewY, w.rotation - w.skewY, "rotation", C), Ge && (E.rotationX = o("rotationX" in H ? H.rotationX : "shortRotationX" in H ? H.shortRotationX + "_short" : w.rotationX || 0, w.rotationX, "rotationX", C), E.rotationY = o("rotationY" in H ? H.rotationY : "shortRotationY" in H ? H.shortRotationY + "_short" : w.rotationY || 0, w.rotationY, "rotationY", C)), E.skewX = o(H.skewX, w.skewX - w.skewY), (E.skewY = o(H.skewY, w.skewY)) && (E.skewX += E.skewY, E.rotation += E.skewY)
					}
					for (Ge && null != H.force3D && (w.force3D = H.force3D, L = !0), w.skewType = H.skewType || w.skewType || ie.defaultSkewType, (x = w.force3D || w.z || w.rotationX || w.rotationY || E.z || E.rotationX || E.rotationY || E.perspective) || null == H.scale || (E.scaleZ = 1); - 1 < --y;)(1e-6 < (b = E[V = Ye[y]] - w[V]) || -1e-6 > b || null != H[V] || null != G[V]) && (L = !0, r = new Ve(w, V, w[V], b, r), V in C && (r.e = C[V]), r.xs0 = 0, r.plugin = B, i._overwriteProps.push(r.n));
					return b = H.transformOrigin, w.svg && (b || H.svgOrigin) && (M = w.xOffset, W = w.yOffset, $(S, Te(b), E, H.svgOrigin, H.smoothOrigin), r = A(w, "xOrigin", (T ? w : E).xOrigin, E.xOrigin, r, "transformOrigin"), r = A(w, "yOrigin", (T ? w : E).yOrigin, E.yOrigin, r, "transformOrigin"), M === w.xOffset && W === w.yOffset || (r = A(w, "xOffset", T ? M : w.xOffset, w.xOffset, r, "transformOrigin"), r = A(w, "yOffset", T ? W : w.yOffset, w.yOffset, r, "transformOrigin")), b = it ? null : "0px 0px"), (b || Ge && x && w.zOrigin) && (Xe ? (L = !0, V = Qe, b = (b || ye(S, V, re, !1, "50% 50%")) + "", (r = new Ve(g, V, 0, 0, r, -1, "transformOrigin")).b = g[V], r.plugin = B, Ge ? (O = w.zOrigin, b = b.split(" "), w.zOrigin = (2 < b.length && (0 === O || "0px" !== b[2]) ? parseFloat(b[2]) : O) || 0, r.xs0 = r.e = b[0] + " " + (b[1] || "50%") + " 0px", (r = new Ve(w, "zOrigin", 0, 0, r, -1, r.n)).b = O, r.xs0 = r.e = w.zOrigin) : r.xs0 = r.e = b) : Te(b + "", w)), L && (i._transformType = w.svg && it || !x && 3 !== this._transformType ? 2 : 3), a && (n[e] = a), r
				},
				prefix: !0
			}), Ne("boxShadow", {
				defaultValue: "0px 0px 0px 0px #999",
				prefix: !0,
				color: !0,
				multi: !0,
				keyword: "inset"
			}), Ne("borderRadius", {
				defaultValue: "0px",
				parser: function(n, t, S, i, r) {
					t = this.format(t);
					for (var B = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], y = n.style, v = parseFloat(n.offsetWidth), P = parseFloat(n.offsetHeight), w = t.split(" "), T = 0, H, C, E, k, O, x, L, A, I, M, W, D; T < B.length; T++) this.p.indexOf("border") && (B[T] = j(B[T])), -1 !== (E = C = ye(n, B[T], re, !1, "0px")).indexOf(" ") && (E = (C = E.split(" "))[0], C = C[1]), k = H = w[T], O = parseFloat(E), A = E.substr((O + "").length), "" === (L = (I = "=" === k.charAt(1)) ? (x = parseInt(k.charAt(0) + "1", 10), k = k.substr(2), x *= parseFloat(k), k.substr((x + "").length - (0 > x ? 1 : 0)) || "") : (x = parseFloat(k), k.substr((x + "").length))) && (L = de[S] || A), L !== A && (M = Se(n, "borderLeft", O, A), W = Se(n, "borderTop", O, A), C = "%" === L ? (E = 100 * (M / v) + "%", 100 * (W / P) + "%") : "em" === L ? (E = M / (D = Se(n, "borderLeft", 1, "em")) + "em", W / D + "em") : (E = M + "px", W + "px"), I && (k = parseFloat(E) + x + L, H = parseFloat(C) + x + L)), r = Re(y, B[T], E + " " + C, k + " " + H, !1, "0px", r);
					return r
				},
				prefix: !0,
				formatter: r("0px 0px 0px 0px", !1, !0)
			}), Ne("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
				defaultValue: "0px",
				parser: function(o, t, e, n, i) {
					return Re(o.style, e, this.format(ye(o, e, re, !1, "0px 0px")), this.format(t), !1, "0px", i)
				},
				prefix: !0,
				formatter: r("0px 0px", !1, !0)
			}), Ne("backgroundPosition", {
				defaultValue: "0 0",
				parser: function(b, t, e, i, r, s) {
					var n = re || ge(b, null),
						_ = this.format((n ? Le ? n.getPropertyValue("background-position-x") + " " + n.getPropertyValue("background-position-y") : n.getPropertyValue("background-position") : b.currentStyle.backgroundPositionX + " " + b.currentStyle.backgroundPositionY) || "0 0"),
						m = this.format(t),
						d, g, y, S, v, B;
					if (-1 !== _.indexOf("%") != (-1 !== m.indexOf("%")) && 2 > m.split(",").length && (B = ye(b, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) && "none" !== B) {
						for (d = _.split(" "), g = m.split(" "), p.setAttribute("src", B), y = 2; - 1 < --y;)(S = -1 !== (_ = d[y]).indexOf("%")) != (-1 !== g[y].indexOf("%")) && (v = 0 === y ? b.offsetWidth - p.width : b.offsetHeight - p.height, d[y] = S ? parseFloat(_) / 100 * v + "px" : 100 * (parseFloat(_) / v) + "%");
						_ = d.join(" ")
					}
					return this.parseComplex(b.style, _, m, r, s)
				},
				formatter: Te
			}), Ne("backgroundSize", {
				defaultValue: "0 0",
				formatter: function(e) {
					return Te(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
				}
			}), Ne("perspective", {
				defaultValue: "0px",
				prefix: !0
			}), Ne("perspectiveOrigin", {
				defaultValue: "50% 50%",
				prefix: !0
			}), Ne("transformStyle", {
				prefix: !0
			}), Ne("backfaceVisibility", {
				prefix: !0
			}), Ne("userSelect", {
				prefix: !0
			}), Ne("margin", {
				parser: v("marginTop,marginRight,marginBottom,marginLeft")
			}), Ne("padding", {
				parser: v("paddingTop,paddingRight,paddingBottom,paddingLeft")
			}), Ne("clip", {
				defaultValue: "rect(0px,0px,0px,0px)",
				parser: function(d, t, u, i, r, s) {
					var n, _, c;
					return t = 9 > Le ? (_ = d.currentStyle, c = 8 > Le ? " " : ",", n = "rect(" + _.clipTop + c + _.clipRight + c + _.clipBottom + c + _.clipLeft + ")", this.format(t).split(",").join(c)) : (n = this.format(ye(d, this.p, re, !1, this.dflt)), this.format(t)), this.parseComplex(d.style, n, t, r, s)
				}
			}), Ne("textShadow", {
				defaultValue: "0px 0px 0px #999",
				color: !0,
				multi: !0
			}), Ne("autoRound,strictUnits", {
				parser: function(o, t, e, n, i) {
					return i
				}
			}), Ne("border", {
				defaultValue: "0px solid #000",
				parser: function(d, t, e, i, r, s) {
					var n = ye(d, "borderTopWidth", re, !1, "0px"),
						u = this.format(t).split(" "),
						o = u[0].replace(_e, "");
					return "px" !== o && (n = parseFloat(n) / Se(d, "borderTopWidth", 1, o) + o), this.parseComplex(d.style, this.format(n + " " + ye(d, "borderTopStyle", re, !1, "solid") + " " + ye(d, "borderTopColor", re, !1, "#000")), u.join(" "), r, s)
				},
				color: !0,
				formatter: function(o) {
					var t = o.split(" ");
					return t[0] + " " + (t[1] || "solid") + " " + (o.match(He) || ["#000"])[0]
				}
			}), Ne("borderWidth", {
				parser: v("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
			}), Ne("float,cssFloat,styleFloat", {
				parser: function(n, t, e, i, d) {
					var s = n.style,
						a = "cssFloat" in s ? "cssFloat" : "styleFloat";
					return new Ve(s, a, 0, 0, d, -1, e, !1, 0, s[a], t)
				}
			}), Ne("opacity,alpha,autoAlpha", {
				defaultValue: "1",
				parser: function(d, t, u, i, r, _) {
					var n = parseFloat(ye(d, "opacity", re, !1, "1")),
						c = d.style,
						o = "autoAlpha" === u;
					return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + n), o && 1 === n && "hidden" === ye(d, "visibility", re) && 0 !== t && (n = 0), he ? r = new Ve(c, "opacity", n, t - n, r) : ((r = new Ve(c, "opacity", 100 * n, 100 * (t - n), r)).xn1 = o ? 1 : 0, c.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = d, r.plugin = _, r.setRatio = te), o && ((r = new Ve(c, "visibility", 0, 0, r, -1, null, !1, 0, 0 === n ? "hidden" : "inherit", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", i._overwriteProps.push(r.n), i._overwriteProps.push(u)), r
				}
			});
			var _t = function(o, t) {
				t && (o.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), o.removeProperty(t.replace(l, "-$1").toLowerCase())) : o.removeAttribute(t))
			};
			for (Ne("className", {
					parser: function(d, t, e, i, r, c, n) {
						var a = d.getAttribute("class") || "",
							p = d.style.cssText,
							_, b, S, v, B;
						if ((r = i._classNamePT = new Ve(d, e, 0, 0, r, 2)).setRatio = oe, r.pr = -11, m = !0, r.b = a, b = g(d, re), S = d._fwdClassPT) {
							for (v = {}, B = S.data; B;) v[B.p] = 1, B = B._next;
							S.setRatio(1)
						}
						return (d._fwdClassPT = r).e = "=" === t.charAt(1) ? a.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : "") : t, d.setAttribute("class", r.e), _ = y(d, b, g(d), n, v), d.setAttribute("class", a), r.data = _.firstMPT, d.style.cssText = p, r = r.xfirst = i.parse(d, _.difs, r, c)
					}
				}), Ne("clearProps", {
					parser: function(o, t, e, n, i) {
						return (i = new Ve(o, e, 0, 0, i, 2)).setRatio = se, i.e = t, i.pr = -10, i.data = n._tween, m = !0, i
					}
				}), h = ["bezier", "throwProps", "physicsProps", "physics2D"], Fe = h.length; Fe--;) Ue(h[Fe]);
			(h = ie.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(d, t, c, i) {
				if (!d.nodeType) return !1;
				this._target = Ae = d, this._tween = c, this._vars = t, Ie = i, Ce = t.autoRound, m = !1, de = t.suffixMap || ie.suffixMap, re = ge(d, ""), le = this._overwriteProps;
				var r = d.style,
					_, b, S, v, B, T, P, w, H;
				if (Ee && "" === r.zIndex && ("auto" !== (_ = ye(d, "zIndex", re)) && "" !== _ || this._addLazySet(r, "zIndex", 0)), "string" == typeof t && (v = r.cssText, _ = g(d, re), r.cssText = v + ";" + t, _ = y(d, _, g(d)).difs, !he && /opacity:([^;]*)/i.test(t) && (_.opacity = parseFloat(RegExp.$1)), t = _, r.cssText = v), this._firstPT = t.className ? b = ae.className.parse(d, t.className, "className", this, null, null, t) : b = this.parse(d, t, null), this._transformType) {
					for (H = 3 === this._transformType, Xe ? ke && (Ee = !0, "" === r.zIndex && ("auto" !== (P = ye(d, "zIndex", re)) && "" !== P || this._addLazySet(r, "zIndex", 0)), xe && this._addLazySet(r, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (H ? "visible" : "hidden"))) : r.zoom = 1, S = b; S && S._next;) S = S._next;
					w = new Ve(d, "transform", 0, 0, null, 2), this._linkCSSP(w, null, S), w.setRatio = Xe ? ot : ee, w.data = this._transform || tt(d, re, !0), w.tween = c, w.pr = -1, le.pop()
				}
				if (m) {
					for (; b;) {
						for (T = b._next, S = v; S && S.pr > b.pr;) S = S._next;
						(b._prev = S ? S._prev : B) ? b._prev._next = b: v = b, (b._next = S) ? S._prev = b : B = b, b = T
					}
					this._firstPT = v
				}
				return !0
			}, h.parse = function(d, t, e, b) {
				var r = d.style,
					c, m, g, y, S, v, B, T, P, w;
				for (c in t) "function" == typeof(v = t[c]) && (v = v(Ie, Ae)), (m = ae[c]) ? e = m.parse(d, v, c, this, e, b, t) : (S = ye(d, c, re) + "", P = "string" == typeof v, "color" === c || "fill" === c || "stroke" === c || -1 !== c.indexOf("Color") || P && /^(rgb|hsl)/.test(v) ? (P || (v = (3 < (v = we(v)).length ? "rgba(" : "rgb(") + v.join(",") + ")"), e = Re(r, c, S, v, !0, "transparent", e, 0, b)) : P && /[\s,\(]/i.test(v) ? e = Re(r, c, S, v, !0, null, e, 0, b) : (B = (g = parseFloat(S)) || 0 === g ? S.substr((g + "").length) : "", "" !== S && "auto" !== S || (B = "width" === c || "height" === c ? (g = function(o, t, e) {
					if ("svg" === (o.nodeName + "").toLowerCase()) return (e || ge(o))[t] || 0;
					if (o.getBBox && Ze(o)) return o.getBBox()[t] || 0;
					var a = parseFloat("width" === t ? o.offsetWidth : o.offsetHeight),
						d = fe[t],
						s = d.length;
					for (e = e || ge(o, null); - 1 < --s;) a -= parseFloat(ye(o, "padding" + d[s], e, !0)) || 0, a -= parseFloat(ye(o, "border" + d[s] + "Width", e, !0)) || 0;
					return a
				}(d, c, re), "px") : "left" === c || "top" === c ? (g = ve(d, c, re), "px") : (g = "opacity" === c ? 1 : 0, "")), "" === (T = (w = P && "=" === v.charAt(1)) ? (y = parseInt(v.charAt(0) + "1", 10), v = v.substr(2), y *= parseFloat(v), v.replace(_e, "")) : (y = parseFloat(v), P ? v.replace(_e, "") : "")) && (T = c in de ? de[c] : B), v = y || 0 === y ? (w ? y + g : y) + T : t[c], B !== T && "" !== T && (y || 0 === y) && g && (g = Se(d, c, g, B), "%" === T ? (g /= Se(d, c, 100, "%") / 100, !0 !== t.strictUnits && (S = g + "%")) : "em" === T || "rem" === T || "vw" === T || "vh" === T ? g /= Se(d, c, 1, T) : "px" !== T && (y = Se(d, c, y, T), T = "px"), w && (!y && 0 !== y || (v = y + g + T))), w && (y += g), (g || 0 === g) && (y || 0 === y) ? (e = new Ve(r, c, g, y - g, e, 0, c, !1 !== Ce && ("px" === T || "zIndex" === c), 0, S, v)).xs0 = T : void 0 !== r[c] && (v || "NaN" != v + "" && null != v) ? (e = new Ve(r, c, y || g || 0, 0, e, -1, c, !1, 0, S, v)).xs0 = "none" !== v || "display" !== c && -1 === c.indexOf("Style") ? v : S : V("invalid " + c + " tween value: " + t[c]))), b && e && !e.plugin && (e.plugin = b);
				return e
			}, h.setRatio = function(o) {
				var t = this._firstPT,
					n, a, d;
				if (!(1 !== o || this._tween._time !== this._tween._duration && 0 !== this._tween._time))
					for (; t;) {
						if (!(2 !== t.type)) t.setRatio(o);
						else if (!(t.r && -1 !== t.type)) t.t[t.p] = t.e;
						else if (!(n = Math.round(t.s + t.c), t.type)) t.t[t.p] = n + t.xs0;
						else if (1 === t.type) {
							for (d = t.l, a = t.xs0 + n + t.xs1, d = 1; d < t.l; d++) a += t["xn" + d] + t["xs" + (d + 1)];
							t.t[t.p] = a
						}
						t = t._next
					} else if (o || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
						for (; t;) {
							if (!(n = t.c * o + t.s, t.r ? n = Math.round(n) : 1e-6 > n && -1e-6 < n && (n = 0), t.type)) t.t[t.p] = n + t.xs0;
							else if (!(1 === t.type)) - 1 === t.type ? t.t[t.p] = t.xs0 : t.setRatio && t.setRatio(o);
							else if (2 === (d = t.l)) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2;
							else if (3 === d) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3;
							else if (4 === d) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4;
							else if (5 === d) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5;
							else {
								for (a = t.xs0 + n + t.xs1, d = 1; d < t.l; d++) a += t["xn" + d] + t["xs" + (d + 1)];
								t.t[t.p] = a
							}
							t = t._next
						} else
							for (; t;) 2 === t.type ? t.setRatio(o) : t.t[t.p] = t.b, t = t._next
			}, h._enableTransforms = function(e) {
				this._transform = this._transform || tt(this._target, re, !0), this._transformType = this._transform.svg && it || !e && 3 !== this._transformType ? 2 : 3
			}, h._addLazySet = function(o, t, e) {
				var s = this._firstPT = new Ve(o, t, 0, 0, this._firstPT, 2);
				s.e = e, s.setRatio = ne, s.data = this
			}, h._linkCSSP = function(o, t, e, s) {
				return o && (t && (t._prev = o), o._next && (o._next._prev = o._prev), o._prev ? o._prev._next = o._next : this._firstPT === o && (this._firstPT = o._next, s = !0), e ? e._next = o : s || null !== this._firstPT || (this._firstPT = o), o._next = t, o._prev = e), o
			}, h._mod = function(o) {
				for (var t = this._firstPT; t;) "function" == typeof o[t.p] && o[t.p] === Math.round && (t.r = 1), t = t._next
			}, h._kill = function(o) {
				var t = o,
					n, a, d;
				if (o.autoAlpha || o.alpha) {
					for (a in t = {}, o) t[a] = o[a];
					t.opacity = 1, t.autoAlpha && (t.visibility = 1)
				}
				for (o.className && (n = this._classNamePT) && ((d = n.xfirst) && d._prev ? this._linkCSSP(d._prev, n._next, d._prev._prev) : d === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, d._prev), this._classNamePT = null), n = this._firstPT; n;) n.plugin && n.plugin !== a && n.plugin._kill && (n.plugin._kill(o), a = n.plugin), n = n._next;
				return E.prototype._kill.call(this, t)
			};
			var ct = function(o, t, e) {
				var i, d, l, u;
				if (o.slice)
					for (d = o.length; - 1 < --d;) ct(o[d], t, e);
				else
					for (d = (i = o.childNodes).length; - 1 < --d;) u = (l = i[d]).type, l.style && (t.push(g(l)), e && e.push(l)), (1 === u || 9 === u || 11 === u) && l.childNodes.length && ct(l, t, e)
			};
			return ie.cascadeTo = function(d, _, e) {
				var i = L.to(d, _, e),
					o = [i],
					l = [],
					c = [],
					h = [],
					u = L._internals.reservedProps,
					p, b, m, g;
				for (d = i._targets || i.target, ct(d, l, h), i.render(_, !0, !0), ct(d, c), i.render(0, !0, !0), i._enabled(!0), p = h.length; - 1 < --p;)
					if ((b = y(h[p], l[p], c[p])).firstMPT) {
						for (m in b = b.difs, e) u[m] && (b[m] = e[m]);
						for (m in g = {}, b) g[m] = l[p][m];
						o.push(L.fromTo(h[p], _, g, b))
					} return o
			}, E.activate([ie]), ie
		}, !0), _fwd_fwdScope.FWDFWD_fwdDefine("easing.Back", ["easing.Ease"], function(b) {
			function d(o, t) {
				var e = h("easing." + o, function() {}, !0),
					s = e.prototype = new b;
				return s.constructor = e, s.getRatio = t, e
			}

			function t(o, t, e, s) {
				var i = h("easing." + o, {
					easeOut: new t,
					easeIn: new e,
					easeInOut: new s
				}, !0);
				return g(i, o), i
			}

			function m(o, t, e) {
				this.t = o, this.v = t, e && (((this.next = e).prev = this).c = e.v - t, this.gap = e.t - o)
			}

			function e(o, t) {
				var e = h("easing." + o, function(e) {
						this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
					}, !0),
					s = e.prototype = new b;
				return s.constructor = e, s.getRatio = t, s.config = function(o) {
					return new e(o)
				}, e
			}
			var i = _fwd_fwdScope.FWDGlobals || _fwd_fwdScope,
				a = i.com.fwd,
				o = 2 * Math.PI,
				l = Math.PI / 2,
				h = a._class,
				g = b.register || function() {},
				u = t("Back", e("BackOut", function(e) {
					return --e * e * ((this._p1 + 1) * e + this._p1) + 1
				}), e("BackIn", function(e) {
					return e * e * ((this._p1 + 1) * e - this._p1)
				}), e("BackInOut", function(e) {
					return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
				})),
				p = h("easing.SlowMo", function(o, s, n) {
					s = s || 0 === s ? s : .7, null == o ? o = .7 : 1 < o && (o = 1), this._p = 1 === o ? 0 : s, this._p1 = (1 - o) / 2, this._p2 = o, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n
				}, !0),
				_ = p.prototype = new b,
				y, S, v;
			return _.constructor = p, _.getRatio = function(o) {
				var s = o + (.5 - o) * this._p;
				return o < this._p1 ? this._calcEnd ? 1 - (o = 1 - o / this._p1) * o : s - (o = 1 - o / this._p1) * o * o * o * s : o > this._p3 ? this._calcEnd ? 1 - (o = (o - this._p3) / this._p1) * o : s + (o - s) * (o = (o - this._p3) / this._p1) * o * o * o : this._calcEnd ? 1 : s
			}, p.ease = new p(.7, .7), _.config = p.config = function(o, t, e) {
				return new p(o, t, e)
			}, (_ = (y = h("easing.SteppedEase", function(e) {
				e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
			}, !0)).prototype = new b).constructor = y, _.getRatio = function(e) {
				return 0 > e ? e = 0 : 1 <= e && (e = .999999999), (this._p2 * e >> 0) * this._p1
			}, _.config = y.config = function(e) {
				return new y(e)
			}, (_ = (S = h("easing.RoughEase", function(g) {
				for (var y = (g = g || {}).taper || "none", o = [], l = 0, S = 0 | (g.points || 20), v = S, f = !1 !== g.randomize, p = !0 === g.clamp, _ = g.template instanceof b ? g.template : null, c = "number" == typeof g.strength ? .4 * g.strength : .4, d, B, T, P, w, H; - 1 < --v;) d = f ? Math.random() : 1 / S * v, B = _ ? _.getRatio(d) : d, T = "none" === y ? c : "out" === y ? (P = 1 - d) * P * c : "in" === y ? d * d * c : .5 > d ? .5 * ((P = 2 * d) * P) * c : .5 * ((P = 2 * (1 - d)) * P) * c, f ? B += Math.random() * T - .5 * T : v % 2 ? B += .5 * T : B -= .5 * T, p && (1 < B ? B = 1 : 0 > B && (B = 0)), o[l++] = {
					x: d,
					y: B
				};
				for (o.sort(function(o, t) {
						return o.x - t.x
					}), H = new m(1, 1, null), v = S; - 1 < --v;) w = o[v], H = new m(w.x, w.y, H);
				this._prev = new m(0, 0, 0 === H.t ? H.next : H)
			}, !0)).prototype = new b).constructor = S, _.getRatio = function(o) {
				var t = this._prev;
				if (o > t.t) {
					for (; t.next && o >= t.t;) t = t.next;
					t = t.prev
				} else
					for (; t.prev && o <= t.t;) t = t.prev;
				return (this._prev = t).v + (o - t.t) / t.gap * t.c
			}, _.config = function(e) {
				return new S(e)
			}, S.ease = new S, t("Bounce", d("BounceOut", function(e) {
				return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
			}), d("BounceIn", function(e) {
				return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
			}), d("BounceInOut", function(o) {
				var s = .5 > o;
				return (o = s ? 1 - 2 * o : 2 * o - 1) < 1 / 2.75 ? o *= 7.5625 * o : o = o < 2 / 2.75 ? 7.5625 * (o -= 1.5 / 2.75) * o + .75 : o < 2.5 / 2.75 ? 7.5625 * (o -= 2.25 / 2.75) * o + .9375 : 7.5625 * (o -= 2.625 / 2.75) * o + .984375, s ? .5 * (1 - o) : .5 * o + .5
			})), t("Circ", d("CircOut", function(e) {
				return Math.sqrt(1 - --e * e)
			}), d("CircIn", function(e) {
				return -(Math.sqrt(1 - e * e) - 1)
			}), d("CircInOut", function(e) {
				return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
			})), t("Elastic", (v = function(n, t, a) {
				var i = h("easing." + n, function(s, t) {
						this._p1 = 1 <= s ? s : 1, this._p2 = (t || a) / (1 > s ? s : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
					}, !0),
					e = i.prototype = new b;
				return e.constructor = i, e.getRatio = t, e.config = function(o, t) {
					return new i(o, t)
				}, i
			})("ElasticOut", function(e) {
				return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
			}, .3), v("ElasticIn", function(e) {
				return -(this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2))
			}, .3), v("ElasticInOut", function(e) {
				return 1 > (e *= 2) ? -.5 * (this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2)) : .5 * (this._p1 * Math.pow(2, -10 * --e) * Math.sin((e - this._p3) * this._p2)) + 1
			}, .45)), t("Expo", d("ExpoOut", function(e) {
				return 1 - Math.pow(2, -10 * e)
			}), d("ExpoIn", function(e) {
				return Math.pow(2, 10 * (e - 1)) - .001
			}), d("ExpoInOut", function(e) {
				return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
			})), t("Sine", d("SineOut", function(e) {
				return Math.sin(e * l)
			}), d("SineIn", function(e) {
				return 1 - Math.cos(e * l)
			}), d("SineInOut", function(e) {
				return -.5 * (Math.cos(Math.PI * e) - 1)
			})), h("easing.EaseLookup", {
				find: function(e) {
					return b.map[e]
				}
			}, !0), g(i.SlowMo, "SlowMo", "ease,"), g(S, "RoughEase", "ease,"), g(y, "SteppedEase", "ease,"), u
		}, !0)
	}), _fwd_fwdScope.FWDFWD_fwdDefine && _fwd_fwdScope._fwd_fwdQueue.pop()(), function(ee, _) {
		"use strict";
		var c = {},
			d = ee.FWDGlobals = ee.FWDGlobals || ee;
		if (!d.FWDTweenLite) {
			var m = function(o) {
					for (var t = o.split("."), e = d, s = 0; s < t.length; s++) e[t[s]] = e = e[t[s]] || {};
					return e
				},
				y = m("com.fwd"),
				te = 1e-10,
				u = function(o) {
					for (var t = [], e = o.length, s = 0; s !== e; t.push(o[s++]));
					return t
				},
				v = function() {},
				oe = (s = Object.prototype.toString, x = s.call([]), function(e) {
					return null != e && (e instanceof Array || "object" == typeof e && !!e.push && s.call(e) === x)
				}),
				r = {},
				l = function(e, s, h, t) {
					this.sc = r[e] ? r[e].sc : [], (r[e] = this).gsClass = null, this.func = h;
					var u = [];
					this.check = function(p) {
						for (var b = s.length, g = b, y, S, v, f, B; - 1 < --b;)(y = r[s[b]] || new l(s[b], [])).gsClass ? (u[b] = y.gsClass, g--) : p && y.sc.push(this);
						if (0 === g && h) {
							if (v = (S = ("com.fwd." + e).split(".")).pop(), f = m(S.join("."))[v] = this.gsClass = h.apply(h, u), t)
								if (d[v] = c[v] = f, !(B = "undefined" != typeof fwd_module && fwd_module.exports) && "function" == typeof define && define.amd) define((ee.FWDAMDPath ? ee.FWDAMDPath + "/" : "") + e.split(".").pop(), [], function() {
									return f
								});
								else if (B)
								if (e === _)
									for (b in fwd_module.exports = c[_] = f, c) f[b] = c[b];
								else c[_] && (c[_][v] = f);
							for (b = 0; b < this.sc.length; b++) this.sc[b].check()
						}
					}, this.check(!0)
				},
				T = ee.FWDFWD_fwdDefine = function(o, t, e, s) {
					return new l(o, t, e, s)
				},
				w = y._class = function(o, t, s) {
					return t = t || function() {}, T(o, [], function() {
						return t
					}, s), t
				},
				p, s, x;
			T.globals = d;
			var se = [0, 0, 1, 1],
				ne = w("easing.Ease", function(o, t, e, s) {
					this._func = o, this._type = e || 0, this._power = s || 0, this._params = t ? se.concat(t) : se
				}, !0),
				b = ne.map = {},
				n = ne.register = function(d, t, e, i) {
					for (var r = t.split(","), l = r.length, u = (e || "easeIn,easeOut,easeInOut").split(","), _, c, p, m; - 1 < --l;)
						for (c = r[l], _ = i ? w("easing." + c, null, !0) : y.easing[c] || {}, p = u.length; - 1 < --p;) m = u[p], b[c + "." + m] = b[m + c] = _[m] = d.getRatio ? d : d[m] || new d
				},
				a;
			for ((a = ne.prototype)._calcEnd = !1, a.getRatio = function(o) {
					if (this._func) return this._params[0] = o, this._func.apply(null, this._params);
					var t = this._type,
						e = this._power,
						s = 1 === t ? 1 - o : 2 === t ? o : .5 > o ? 2 * o : 2 * (1 - o);
					return 1 === e ? s *= s : 2 === e ? s *= s * s : 3 === e ? s *= s * s * s : 4 === e && (s *= s * s * s * s), 1 === t ? 1 - s : 2 === t ? s : .5 > o ? s / 2 : 1 - s / 2
				}, de = (re = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --de;) a = re[de] + ",Power" + de, n(new ne(null, null, 1, de), a, "easeOut", !0), n(new ne(null, null, 2, de), a, "easeIn" + (0 === de ? ",easeNone" : "")), n(new ne(null, null, 3, de), a, "easeInOut");
			b.linear = y.easing.Linear.easeIn, b.swing = y.easing.Quad.easeInOut;
			var P = w("events.EventDispatcher", function(e) {
				this._listeners = {}, this._eventTarget = e || this
			});
			(a = P.prototype).addEventListener = function(d, t, e, i, r) {
				r = r || 0;
				var u = this._listeners[d],
					_ = 0,
					c, h;
				for (this !== f || p || f.wake(), null == u && (this._listeners[d] = u = []), h = u.length; - 1 < --h;)(c = u[h]).c === t && c.s === e ? u.splice(h, 1) : 0 === _ && c.pr < r && (_ = h + 1);
				u.splice(_, 0, {
					c: t,
					s: e,
					up: i,
					pr: r
				})
			}, a.removeEventListener = function(o, t) {
				var e = this._listeners[o],
					s;
				if (e)
					for (s = e.length; - 1 < --s;)
						if (e[s].c === t) return void e.splice(s, 1)
			}, a.dispatchEvent = function(o) {
				var t = this._listeners[o],
					n, a, d;
				if (t)
					for (1 < (n = t.length) && (t = t.slice(0)), a = this._eventTarget; - 1 < --n;)(d = t[n]) && (d.up ? d.c.call(d.s || a, {
						type: o,
						target: a
					}) : d.c.call(d.s || a))
			};
			for (var O = ee.requestAnimationFrame, ie = ee.cancelAnimationFrame, ae = Date.now || function() {
					return new Date().getTime()
				}, S = ae(), de = (re = ["ms", "moz", "webkit", "o"]).length, re; - 1 < --de && !O;) O = ee[re[de] + "RequestAnimationFrame"], ie = ee[re[de] + "CancelAnimationFrame"] || ee[re[de] + "CancelRequestAnimationFrame"];
			w("Ticker", function(d, t) {
				var c = this,
					h = ae(),
					e = !1 !== t && O && "auto",
					b = 500,
					m = 33,
					g = function(o) {
						var t = ae() - S,
							s, n;
						b < t && (h += t - m), S += t, c.time = (S - h) / 1e3, s = c.time - w, (!_ || 0 < s || !0 === o) && (c.frame++, w += s + (T <= s ? .004 : T - s), n = !0), !0 !== o && (B = y(g)), n && c.dispatchEvent("tick")
					},
					_, y, B, T, w;
				P.call(c), c.time = c.frame = 0, c.tick = function() {
					g(!0)
				}, c.lagSmoothing = function(o, t) {
					b = o || 1e10, m = Math.min(t, b, 0)
				}, c.sleep = function() {
					null != B && ((e && ie ? ie : clearTimeout)(B), y = v, B = null, c === f && (p = !1))
				}, c.wake = function(o) {
					null === B ? o ? h += -S + (S = ae()) : 10 < c.frame && (S = ae() - b + 5) : c.sleep(), y = 0 === _ ? v : e && O ? O : function(e) {
						return setTimeout(e, 0 | 1e3 * (w - c.time) + 1)
					}, c === f && (p = !0), g(2)
				}, c.fps = function(e) {
					return arguments.length ? void(T = 1 / ((_ = e) || 60), w = this.time + T, c.wake()) : _
				}, c.useRAF = function(o) {
					return arguments.length ? void(c.sleep(), e = o, c.fps(_)) : e
				}, c.fps(d), setTimeout(function() {
					"auto" === e && 5 > c.frame && "hidden" !== document.visibilityState && c.useRAF(!1)
				}, 1500)
			}), (a = y.Ticker.prototype = new y.events.EventDispatcher).constructor = y.Ticker;
			var le = w("core.FWDAnimation", function(o, t) {
					var s;
					this.vars = t = t || {}, this._duration = this._totalDuration = o || 0, this._delay = +t.delay || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, U && (p || f.wake(), (s = this.vars.useFrames ? Z : U).add(this, s._time), this.vars.paused && this.paused(!0))
				}),
				f = le.ticker = new y.Ticker;
			(a = le.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
			var M = function() {
				p && 2e3 < ae() - S && f.wake(), setTimeout(M, 2e3)
			};
			M(), a.play = function(o, t) {
				return null != o && this.seek(o, t), this.reversed(!1).paused(!1)
			}, a.pause = function(o, t) {
				return null != o && this.seek(o, t), this.paused(!0)
			}, a.resume = function(o, t) {
				return null != o && this.seek(o, t), this.paused(!1)
			}, a.seek = function(o, t) {
				return this.totalTime(+o, !1 !== t)
			}, a.restart = function(o, t) {
				return this.reversed(!1).paused(!1).totalTime(o ? -this._delay : 0, !1 !== t, !0)
			}, a.reverse = function(o, t) {
				return null != o && this.seek(o || this.totalDuration(), t), this.reversed(!0).paused(!1)
			}, a.render = function() {}, a.invalidate = function() {
				return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
			}, a.isActive = function() {
				var o = this._timeline,
					e = this._startTime,
					s;
				return !o || !this._gc && !this._paused && o.isActive() && (s = o.rawTime()) >= e && s < e + this.totalDuration() / this._timeScale
			}, a._enabled = function(o, t) {
				return p || f.wake(), this._gc = !o, this._active = this.isActive(), !0 !== t && (o && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !o && this.timeline && this._timeline._remove(this, !0)), !1
			}, a._kill = function() {
				return this._enabled(!1, !1)
			}, a.kill = function(o, t) {
				return this._kill(o, t), this
			}, a._uncache = function(o) {
				for (var t = o ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
				return this
			}, a._swapSelfInParams = function(o) {
				for (var t = o.length, s = o.concat(); - 1 < --t;) "{self}" === o[t] && (s[t] = this);
				return s
			}, a._callback = function(o) {
				var t = this.vars,
					e = t[o],
					n = t[o + "Params"],
					i = t[o + "Scope"] || t.callbackScope || this;
				switch (n ? n.length : 0) {
					case 0:
						e.call(i);
						break;
					case 1:
						e.call(i, n[0]);
						break;
					case 2:
						e.call(i, n[0], n[1]);
						break;
					default:
						e.apply(i, n);
				}
			}, a.eventCallback = function(o, t, e, n) {
				if ("on" === (o || "").substr(0, 2)) {
					var i = this.vars;
					if (1 === arguments.length) return i[o];
					null == t ? delete i[o] : (i[o] = t, i[o + "Params"] = oe(e) && -1 !== e.join("").indexOf("{self}") ? this._swapSelfInParams(e) : e, i[o + "Scope"] = n), "onUpdate" === o && (this._onUpdate = t)
				}
				return this
			}, a.delay = function(e) {
				return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
			}, a.duration = function(e) {
				return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
			}, a.totalDuration = function(e) {
				return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
			}, a.time = function(o, t) {
				return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(o > this._duration ? this._duration : o, t)) : this._time
			}, a.totalTime = function(o, n, e) {
				if (p || f.wake(), !arguments.length) return this._totalTime;
				if (this._timeline) {
					if (0 > o && !e && (o += this.totalDuration()), this._timeline.smoothChildTiming) {
						this._dirty && this.totalDuration();
						var i = this._totalDuration,
							a = this._timeline;
						if (i < o && !e && (o = i), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? i - o : o) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
							for (; a._timeline;) a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
					}
					this._gc && this._enabled(!0, !1), this._totalTime === o && 0 !== this._duration || (z.length && ce(), this.render(o, n, !1), z.length && ce())
				}
				return this
			}, a.progress = a.totalProgress = function(o, t) {
				var e = this.duration();
				return arguments.length ? this.totalTime(e * o, t) : e ? this._time / e : this.ratio
			}, a.startTime = function(e) {
				return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
			}, a.endTime = function(e) {
				return this._startTime + (0 == e ? this.duration() : this.totalDuration()) / this._timeScale
			}, a.timeScale = function(o) {
				return arguments.length ? (o = o || te, this._timeline && this._timeline.smoothChildTiming && (n = (s = this._pauseTime) || 0 === s ? s : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / o), this._timeScale = o, this._uncache(!1)) : this._timeScale;
				var s, n
			}, a.reversed = function(e) {
				return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
			}, a.paused = function(o) {
				if (!arguments.length) return this._paused;
				var t = this._timeline,
					s, n;
				return o != this._paused && t && (p || o || f.wake(), n = (s = t.rawTime()) - this._pauseTime, !o && t.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = o ? s : null, this._paused = o, this._active = this.isActive(), !o && 0 != n && this._initted && this.duration() && (s = t.smoothChildTiming ? this._totalTime : (s - this._startTime) / this._timeScale, this.render(s, s === this._totalTime, !0))), this._gc && !o && this._enabled(!0, !1), this
			};
			var C = w("core.FWDSimpleTimeline", function(e) {
				le.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
			});
			(a = C.prototype = new le).constructor = C, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(o, t) {
				var e, i;
				if (o._startTime = +(t || 0) + o._delay, o._paused && this !== o._timeline && (o._pauseTime = o._startTime + (this.rawTime() - o._startTime) / o._timeScale), o.timeline && o.timeline._remove(o, !0), o.timeline = o._timeline = this, o._gc && o._enabled(!0, !0), e = this._last, this._sortChildren)
					for (i = o._startTime; e && e._startTime > i;) e = e._prev;
				return e ? (o._next = e._next, e._next = o) : (o._next = this._first, this._first = o), o._next ? o._next._prev = o : this._last = o, o._prev = e, this._recent = o, this._timeline && this._uncache(!0), this
			}, a._remove = function(o, t) {
				return o.timeline === this && (t || o._enabled(!1, !0), o._prev ? o._prev._next = o._next : this._first === o && (this._first = o._next), o._next ? o._next._prev = o._prev : this._last === o && (this._last = o._prev), o._next = o._prev = o.timeline = null, o === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
			}, a.render = function(o, t, e) {
				var n = this._first,
					i;
				for (this._totalTime = this._time = this._rawPrevTime = o; n;) i = n._next, (n._active || o >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (o - n._startTime) * n._timeScale, t, e) : n.render((o - n._startTime) * n._timeScale, t, e)), n = i
			}, a.rawTime = function() {
				return p || f.wake(), this._totalTime
			};
			var F = w("FWDTweenLite", function(d, l, e) {
					if (le.call(this, l, e), this.render = F.prototype.render, null == d) throw "Cannot tween a null target.";
					this.target = d = "string" == typeof d && F.selector(d) || d;
					var i = d.jquery || d.length && d !== ee && d[0] && (d[0] === ee || d[0].nodeType && d[0].style && !d.nodeType),
						a = this.vars.overwrite,
						_, c, p;
					if (this._overwrite = a = null == a ? q[F.defaultOverwrite] : "number" == typeof a ? a >> 0 : q[a], (i || d instanceof Array || d.push && oe(d)) && "number" != typeof d[0])
						for (this._targets = p = u(d), this._propLookup = [], this._siblings = [], _ = 0; _ < p.length; _++)(c = p[_]) ? "string" == typeof c ? "string" == typeof(c = p[_--] = F.selector(c)) && p.splice(_ + 1, 1) : c.length && c !== ee && c[0] && (c[0] === ee || c[0].nodeType && c[0].style && !c.nodeType) ? (p.splice(_--, 1), this._targets = p = p.concat(u(c))) : (this._siblings[_] = G(c, this, !1), 1 === a && 1 < this._siblings[_].length && K(c, this, null, 1, this._siblings[_])) : p.splice(_--, 1);
					else this._propLookup = {}, this._siblings = G(d, this, !1), 1 === a && 1 < this._siblings.length && K(d, this, null, 1, this._siblings);
					(this.vars.immediateRender || 0 === l && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -te, this.render(Math.min(0, -this._delay)))
				}, !0),
				D = function(e) {
					return e && e.length && e !== ee && e[0] && (e[0] === ee || e[0].nodeType && e[0].style && !e.nodeType)
				};
			(a = F.prototype = new le).constructor = F, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, F.version = "1.19.0", F.defaultEase = a._ease = new ne(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = f, F.autoSleep = 120, F.lagSmoothing = function(o, t) {
				f.lagSmoothing(o, t)
			}, F.selector = ee.$ || ee.jQuery || function(o) {
				var t = ee.$ || ee.jQuery;
				return t ? (F.selector = t)(o) : "undefined" == typeof document ? o : document.querySelectorAll ? document.querySelectorAll(o) : document.getElementById("#" === o.charAt(0) ? o.substr(1) : o)
			};
			var z = [],
				X = {},
				ue = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				N = function(o) {
					for (var t = this._firstPT, s; t;) s = t.blob ? o ? this.join("") : this.start : t.c * o + t.s, t.m ? s = t.m(s, this._target || t.t) : 1e-6 > s && -1e-6 < s && (s = 0), t.f ? t.fp ? t.t[t.p](t.fp, s) : t.t[t.p](s) : t.t[t.p] = s, t = t._next
				},
				Y = function(d, b, m, i) {
					var r = [d, b],
						u = 0,
						g = "",
						y = 0,
						S, v, B, T, P, w, H;
					for (r.start = d, m && (m(r), d = r[0], b = r[1]), r.length = 0, S = d.match(ue) || [], v = b.match(ue) || [], i && (i._next = null, i.blob = 1, r._firstPT = r._applyPT = i), P = v.length, T = 0; T < P; T++) H = v[T], g += (w = b.substr(u, b.indexOf(H, u) - u)) || !T ? w : ",", u += w.length, y ? y = (y + 1) % 5 : "rgba(" === w.substr(-5) && (y = 1), H === S[T] || S.length <= T ? g += H : (g && (r.push(g), g = ""), B = parseFloat(S[T]), r.push(B), r._firstPT = {
						_next: r._firstPT,
						t: r,
						p: r.length - 1,
						s: B,
						c: ("=" === H.charAt(1) ? parseInt(H.charAt(0) + "1", 10) * parseFloat(H.substr(2)) : parseFloat(H) - B) || 0,
						f: 0,
						m: y && 4 > y ? Math.round : 0
					}), u += H.length;
					return (g += b.substr(u)) && r.push(g), r.setRatio = N, r
				},
				E = function(d, t, e, i, c, s, n, a, o) {
					"function" == typeof i && (i = i(o || 0, d));
					var l = "get" === e ? d[t] : e,
						b = typeof d[t],
						u = "string" == typeof i && "=" === i.charAt(1),
						p = {
							t: d,
							p: t,
							s: l,
							f: "function" == b,
							pg: 0,
							n: c || t,
							m: s ? "function" == typeof s ? s : Math.round : 0,
							pr: 0,
							c: u ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - l || 0
						},
						m;
					if ("number" != b && ("function" == b && "get" === e && (m = t.indexOf("set") || "function" != typeof d["get" + t.substr(3)] ? t : "get" + t.substr(3), p.s = l = n ? d[m](n) : d[m]()), "string" == typeof l && (n || isNaN(l)) ? (p.fp = n, p = {
							t: Y(l, i, a || F.defaultStringFilter, p),
							p: "setRatio",
							s: 0,
							c: 1,
							f: 2,
							pg: 0,
							n: c || t,
							pr: 0,
							m: 0
						}) : u || (p.s = parseFloat(l), p.c = parseFloat(i) - p.s || 0)), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p
				},
				B = F._internals = {
					isArray: oe,
					isSelector: D,
					lazyTweens: z,
					blobDif: Y
				},
				W = F._plugins = {},
				L = B.tweenLookup = {},
				j = 0,
				_e = B.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1,
					id: 1
				},
				q = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					true: 1,
					false: 0
				},
				Z = le._rootFramesTimeline = new C,
				U = le._rootTimeline = new C,
				$ = 30,
				ce = B.lazyRender = function() {
					var o = z.length,
						s;
					for (X = {}; - 1 < --o;)(s = z[o]) && !1 !== s._lazy && (s.render(s._lazy[0], s._lazy[1], !0), s._lazy = !1);
					z.length = 0
				};
			U._startTime = f.time, Z._startTime = f.frame, U._active = Z._active = !0, setTimeout(ce, 1), le._updateRoot = F.render = function() {
				var o, s, n;
				if (z.length && ce(), U.render((f.time - U._startTime) * U._timeScale, !1, !1), Z.render((f.frame - Z._startTime) * Z._timeScale, !1, !1), z.length && ce(), f.frame >= $) {
					for (n in $ = f.frame + (parseInt(F.autoSleep, 10) || 120), L) {
						for (o = (s = L[n].tweens).length; - 1 < --o;) s[o]._gc && s.splice(o, 1);
						0 === s.length && delete L[n]
					}
					if ((!(n = U._first) || n._paused) && F.autoSleep && !Z._first && 1 === f._listeners.tick.length) {
						for (; n && n._paused;) n = n._next;
						n || f.sleep()
					}
				}
			}, f.addEventListener("tick", le._updateRoot);
			var G = function(o, t, e) {
					var i = o._fwdTweenID,
						a, d;
					if (L[i || (o._fwdTweenID = i = "t" + j++)] || (L[i] = {
							target: o,
							tweens: []
						}), t && ((a = L[i].tweens)[d = a.length] = t, e))
						for (; - 1 < --d;) a[d] === t && a.splice(d, 1);
					return L[i].tweens
				},
				H = function(o, t, e, i) {
					var d = o.vars.onOverwrite,
						r, l;
					return d && (r = d(o, t, e, i)), (d = F.onOverwrite) && (l = d(o, t, e, i)), !1 !== r && !1 !== l
				},
				K = function(d, t, e, i, r) {
					var s, c, b;
					if (1 === i || 4 <= i) {
						for (b = r.length, p = 0; p < b; p++)
							if ((c = r[p]) !== t) c._gc || c._kill(null, d, t) && (s = !0);
							else if (5 === i) break;
						return s
					}
					for (var m = t._startTime + te, h = [], g = 0, y = 0 === t._duration, p = r.length, S; - 1 < --p;)(c = r[p]) === t || c._gc || c._paused || (c._timeline === t._timeline ? c._startTime <= m && c._startTime + c.totalDuration() / c._timeScale > m && ((y || !c._initted) && 2e-10 >= m - c._startTime || (h[g++] = c)) : (S = S || J(t, 0, y), 0 === J(c, S, y) && (h[g++] = c)));
					for (p = g; - 1 < --p;)
						if (c = h[p], 2 === i && c._kill(e, d, t) && (s = !0), 2 !== i || !c._firstPT && c._initted) {
							if (2 !== i && !H(c, t)) continue;
							c._enabled(!1, !1) && (s = !0)
						} return s
				},
				J = function(o, t, e) {
					for (var i = o._timeline, a = i._timeScale, d = o._startTime; i._timeline;) {
						if (d += i._startTime, a *= i._timeScale, i._paused) return -100;
						i = i._timeline
					}
					return t < (d /= a) ? d - t : e && d === t || !o._initted && d - t < 2 * te ? te : (d += o.totalDuration() / o._timeScale / a) > t + te ? 0 : d - t - te
				};
			a._init = function() {
				var d = this.vars,
					a = this._overwrittenProps,
					o = this._duration,
					l = !!d.immediateRender,
					u = d.ease,
					_, c, p, m, g, y;
				if (d.startAt) {
					for (m in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), g = {}, d.startAt) g[m] = d.startAt[m];
					if (g.overwrite = !1, g.immediateRender = !0, g.lazy = l && !1 !== d.lazy, g.startAt = g.delay = null, this._startAt = F.to(this.target, 0, g), l)
						if (0 < this._time) this._startAt = null;
						else if (0 !== o) return
				} else if (d.runBackwards && 0 !== o)
					if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
					else {
						for (m in 0 !== this._time && (l = !1), p = {}, d) _e[m] && "autoCSS" !== m || (p[m] = d[m]);
						if (!(p.overwrite = 0, p.data = "isFromStart", p.lazy = l && !1 !== d.lazy, p.immediateRender = l, this._startAt = F.to(this.target, 0, p), l)) this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
						else if (0 === this._time) return
					} if (this._ease = u = u ? u instanceof ne ? u : "function" == typeof u ? new ne(u, d.easeParams) : b[u] || F.defaultEase : F.defaultEase, d.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, d.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
					for (y = this._targets.length, _ = 0; _ < y; _++) this._initProps(this._targets[_], this._propLookup[_] = {}, this._siblings[_], a ? a[_] : null, _) && (c = !0);
				else c = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
				if (c && F._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), d.runBackwards)
					for (p = this._firstPT; p;) p.s += p.c, p.c = -p.c, p = p._next;
				this._onUpdate = d.onUpdate, this._initted = !0
			}, a._initProps = function(d, t, e, i, r) {
				var s, u, _, c, p, b;
				if (null == d) return !1;
				for (s in X[d._fwdTweenID] && ce(), this.vars.css || d.style && d !== ee && d.nodeType && W.css && !1 !== this.vars.autoCSS && function(o, t) {
						var e = {},
							s;
						for (s in o) _e[s] || s in t && "transform" !== s && "x" !== s && "y" !== s && "width" !== s && "height" !== s && "className" !== s && "border" !== s || !(!W[s] || W[s] && W[s]._autoCSS) || (e[s] = o[s], delete o[s]);
						o.css = e
					}(this.vars, d), this.vars)
					if (b = this.vars[s], _e[s]) b && (b instanceof Array || b.push && oe(b)) && -1 !== b.join("").indexOf("{self}") && (this.vars[s] = b = this._swapSelfInParams(b, this));
					else if (W[s] && (c = new W[s])._onInitTween(d, this.vars[s], this, r)) {
					for (this._firstPT = p = {
							_next: this._firstPT,
							t: c,
							p: "setRatio",
							s: 0,
							c: 1,
							f: 1,
							n: s,
							pg: 1,
							pr: c._priority,
							m: 0
						}, u = c._overwriteProps.length; - 1 < --u;) t[c._overwriteProps[u]] = this._firstPT;
					(c._priority || c._onInitAllProps) && (_ = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), p._next && (p._next._prev = p)
				} else t[s] = E.call(this, d, s, "get", b, s, 0, null, this.vars.stringFilter, r);
				return i && this._kill(i, d) ? this._initProps(d, t, e, i, r) : 1 < this._overwrite && this._firstPT && 1 < e.length && K(d, this, t, this._overwrite, e) ? (this._kill(t, d), this._initProps(d, t, e, i, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (X[d._fwdTweenID] = !0), _)
			}, a.render = function(d, _, e) {
				var c = this._time,
					b = this._duration,
					u = this._rawPrevTime,
					p, m, g, y, S, v, f;
				if (b - 1e-7 <= d ? (this._totalTime = this._time = b, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (p = !0, m = "onComplete", e = e || this._timeline.autoRemoveChildren), 0 === b && (!this._initted && this.vars.lazy && !e || (this._startTime === this._timeline._duration && (d = 0), (0 > u || 0 >= d && -1e-7 <= d || u === te && "isPause" !== this.data) && u !== d && (e = !0, te < u && (m = "onReverseComplete")), this._rawPrevTime = y = !_ || d || u === d ? d : te))) : 1e-7 > d ? (this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== c || 0 === b && 0 < u) && (m = "onReverseComplete", p = this._reversed), 0 > d && (this._active = !1, 0 === b && (!this._initted && this.vars.lazy && !e || (0 <= u && (u !== te || "isPause" !== this.data) && (e = !0), this._rawPrevTime = y = !_ || d || u === d ? d : te))), this._initted || (e = !0)) : (this._totalTime = this._time = d, this._easeType ? (S = d / b, (1 === (v = this._easeType) || 3 === v && .5 <= S) && (S = 1 - S), 3 === v && (S *= 2), 1 === (f = this._easePower) ? S *= S : 2 === f ? S *= S * S : 3 === f ? S *= S * S * S : 4 === f && (S *= S * S * S * S), this.ratio = 1 === v ? 1 - S : 2 === v ? S : .5 > d / b ? S / 2 : 1 - S / 2) : this.ratio = this._ease.getRatio(d / b)), this._time !== c || e) {
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!e && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = c, this._rawPrevTime = u, z.push(this), void(this._lazy = [d, _]);
						this._time && !p ? this.ratio = this._ease.getRatio(this._time / b) : p && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== c && 0 <= d && (this._active = !0), 0 === c && (this._startAt && (0 <= d ? this._startAt.render(d, _, e) : m = m || "_dummyGS"), this.vars.onStart && (0 === this._time && 0 !== b || _ || this._callback("onStart"))), g = this._firstPT; g;) g.f ? g.t[g.p](g.c * this.ratio + g.s) : g.t[g.p] = g.c * this.ratio + g.s, g = g._next;
					this._onUpdate && (0 > d && this._startAt && -1e-4 !== d && this._startAt.render(d, _, e), _ || (this._time !== c || p || e) && this._callback("onUpdate")), m && (this._gc && !e || (0 > d && this._startAt && !this._onUpdate && -1e-4 !== d && this._startAt.render(d, _, e), p && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !_ && this.vars[m] && this._callback(m), 0 === b && this._rawPrevTime === te && y !== te && (this._rawPrevTime = 0)))
				}
			}, a._kill = function(d, _, c) {
				if ("all" === d && (d = null), null == d && (null == _ || _ === this.target)) return this._lazy = !1, this._enabled(!1, !1);
				_ = "string" == typeof _ ? F.selector(_) || _ : _ || this._targets || this.target;
				var i = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline,
					p, b, m, g, y, S, v, B, T;
				if ((oe(_) || D(_)) && "number" != typeof _[0])
					for (p = _.length; - 1 < --p;) this._kill(d, _[p], c) && (S = !0);
				else {
					if (this._targets) {
						for (p = this._targets.length; - 1 < --p;)
							if (_ === this._targets[p]) {
								y = this._propLookup[p] || {}, this._overwrittenProps = this._overwrittenProps || [], b = this._overwrittenProps[p] = d ? this._overwrittenProps[p] || {} : "all";
								break
							}
					} else {
						if (_ !== this.target) return !1;
						y = this._propLookup, b = this._overwrittenProps = d ? this._overwrittenProps || {} : "all"
					}
					if (y) {
						if (v = d || y, B = d !== b && "all" !== b && d !== y && ("object" != typeof d || !d._tempKill), c && (F.onOverwrite || this.vars.onOverwrite)) {
							for (m in v) y[m] && (T = T || []).push(m);
							if ((T || !d) && !H(this, c, _, T)) return !1
						}
						for (m in v)(g = y[m]) && (i && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, S = !0), g.pg && g.t._kill(v) && (S = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete y[m]), B && (b[m] = 1);
						!this._firstPT && this._initted && this._enabled(!1, !1)
					}
				}
				return S
			}, a.invalidate = function() {
				return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], le.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -te, this.render(Math.min(0, -this._delay))), this
			}, a._enabled = function(o, t) {
				if (p || f.wake(), o && this._gc) {
					var e = this._targets,
						s;
					if (e)
						for (s = e.length; - 1 < --s;) this._siblings[s] = G(e[s], this, !0);
					else this._siblings = G(this.target, this, !0)
				}
				return le.prototype._enabled.call(this, o, t), this._notifyPluginsOfEnabled && this._firstPT && F._onPluginEvent(o ? "_onEnable" : "_onDisable", this)
			}, F.to = function(o, t, e) {
				return new F(o, t, e)
			}, F.from = function(o, t, e) {
				return e.runBackwards = !0, e.immediateRender = 0 != e.immediateRender, new F(o, t, e)
			}, F.fromTo = function(o, t, e, s) {
				return s.startAt = e, s.immediateRender = 0 != s.immediateRender && 0 != e.immediateRender, new F(o, t, s)
			}, F.delayedCall = function(o, t, e, n, i) {
				return new F(t, 0, {
					delay: o,
					onComplete: t,
					onCompleteParams: e,
					callbackScope: n,
					onReverseComplete: t,
					onReverseCompleteParams: e,
					immediateRender: !1,
					lazy: !1,
					useFrames: i,
					overwrite: 0
				})
			}, F.set = function(o, t) {
				return new F(o, 0, t)
			}, F.getTweensOf = function(o, a) {
				if (null == o) return [];
				var e, d, l, u;
				if (o = "string" == typeof o && F.selector(o) || o, (oe(o) || D(o)) && "number" != typeof o[0]) {
					for (e = o.length, d = []; - 1 < --e;) d = d.concat(F.getTweensOf(o[e], a));
					for (e = d.length; - 1 < --e;)
						for (u = d[e], l = e; - 1 < --l;) u === d[l] && d.splice(e, 1)
				} else
					for (e = (d = G(o).concat()).length; - 1 < --e;)(d[e]._gc || a && !d[e].isActive()) && d.splice(e, 1);
				return d
			}, F.killTweensOf = F.killDelayedCallsTo = function(o, t, n) {
				"object" == typeof t && (n = t, t = !1);
				for (var a = F.getTweensOf(o, t), d = a.length; - 1 < --d;) a[d]._kill(n, o)
			};
			var pe = w("plugins.TweenPlugin", function(o, t) {
				this._overwriteProps = (o || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = pe.prototype
			}, !0);
			if (a = pe.prototype, pe.version = "1.19.0", pe.API = 2, a._firstPT = null, a._addTween = E, a.setRatio = N, a._kill = function(o) {
					var t = this._overwriteProps,
						s = this._firstPT,
						n;
					if (null != o[this._propName]) this._overwriteProps = [];
					else
						for (n = t.length; - 1 < --n;) null != o[t[n]] && t.splice(n, 1);
					for (; s;) null != o[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
					return !1
				}, a._mod = a._roundProps = function(o) {
					for (var t = this._firstPT, s; t;)(s = o[this._propName] || null != t.n && o[t.n.split(this._propName + "_").join("")]) && "function" == typeof s && (2 === t.f ? t.t._applyPT.m = s : t.m = s), t = t._next
				}, F._onPluginEvent = function(d, t) {
					var e = t._firstPT,
						l, u, _, c, p;
					if ("_onInitAllProps" === d) {
						for (; e;) {
							for (p = e._next, u = _; u && u.pr > e.pr;) u = u._next;
							(e._prev = u ? u._prev : c) ? e._prev._next = e: _ = e, (e._next = u) ? u._prev = e : c = e, e = p
						}
						e = t._firstPT = _
					}
					for (; e;) e.pg && "function" == typeof e.t[d] && e.t[d]() && (l = !0), e = e._next;
					return l
				}, pe.activate = function(o) {
					for (var t = o.length; - 1 < --t;) o[t].API === pe.API && (W[new o[t]()._propName] = o[t]);
					return !0
				}, T.plugin = function(d) {
					if (!(d && d.propName && d.init && d.API)) throw "illegal plugin definition.";
					var t = d.propName,
						i = d.priority || 0,
						r = d.overwriteProps,
						s = {
							init: "_onInitTween",
							set: "setRatio",
							kill: "_kill",
							round: "_mod",
							mod: "_mod",
							initAll: "_onInitAllProps"
						},
						n = w("plugins." + t.charAt(0).toUpperCase() + t.substr(1) + "Plugin", function() {
							pe.call(this, t, i), this._overwriteProps = r || []
						}, !0 === d.fwd_global),
						a = n.prototype = new pe(t),
						o;
					for (o in (a.constructor = n).API = d.API, s) "function" == typeof d[o] && (a[s[o]] = d[o]);
					return n.version = d.version, pe.activate([n]), n
				}, re = ee._fwd_fwdQueue) {
				for (de = 0; de < re.length; de++) re[de]();
				for (a in r) r[a].func || ee.console.log("FWDAnimation encountered missing dependency: " + a)
			}
			p = !1
		}
	}("undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window, "FWDAnimation")), "undefined" == typeof fwdal) var fwdal = {};
"undefined" == typeof fwdal.util && (fwdal.util = {}), fwdal.util.Browser = new function() {
	var t = navigator.userAgent.toLowerCase(),
		o = /webkit/.test(t),
		s = /opera/.test(t),
		e = /msie/.test(t) && !/opera/.test(t),
		n = /mozilla/.test(t) && !/(compatible|webkit)/.test(t),
		i = parseFloat(e ? t.substr(t.indexOf("msie") + 4) : (t.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]);
	this.toString = function() {
		return "[class Browser]"
	}, this.getVersion = function() {
		return i
	}, this.isMSIE = function() {
		return e
	}, this.isSafari = function() {
		return o
	}, this.isOpera = function() {
		return s
	}, this.isMozilla = function() {
		return n
	}
}, fwdal.util.Events = new function() {
	var t = window,
		o = document,
		s = [],
		n = fwdal.util,
		a = n.Browser,
		e = a.isMSIE(),
		d = a.isSafari();
	this.toString = function() {
		return "[class Events]"
	}, this.addListener = function(t, o, n) {
		s.push({
			o: t,
			t: o,
			l: n
		}), o == "DOMContentLoaded" && (e || d) || (t.addEventListener ? t.addEventListener(o, n, !1) : t.attachEvent && t.attachEvent("on" + o, n))
	}, this.removeListener = function(t, i, a) {
		for (var n = 0, r; r = s[n]; n++)
			if (r.o == t && r.t == i && r.l == a) {
				s.splice(n, 1);
				break
			} i == "DOMContentLoaded" && (e || d) || (t.removeEventListener ? t.removeEventListener(i, a, !1) : t.detachEvent && t.detachEvent("on" + i, a))
	};
	var r = function() {
		for (var e = 0, t; t = s[e]; e++) "DOMContentLoaded" != t.t && n.Events.removeListener(t.o, t.t, t.l)
	};
	(e || d) && function() {
		try {
			(e && o.body || !/loaded|complete/.test(o.readyState)) && o.documentElement.doScroll("left")
		} catch (e) {
			return setTimeout(arguments.callee, 0)
		}
		for (var t = 0, n; n = s[t]; t++) "DOMContentLoaded" == n.t && n.l.call(null)
	}(), e && t.attachEvent && t.attachEvent("onbeforeunload", function() {
		if ("interactive" == o.readyState) {
			function e() {
				o.detachEvent("onstop", e), r()
			}
			o.attachEvent("onstop", e), t.setTimeout(function() {
				o.detachEvent("onstop", e)
			}, 0)
		}
	}), this.addListener(t, "unload", r)
}, fwdal.util.Functions = new function() {
	this.toString = function() {
		return "[class Functions]"
	}, this.bind = function(e, t) {
		for (var o = 2, s = [], n; n = arguments[o]; o++) s.push(n);
		return function() {
			return e.apply(t, s)
		}
	}
};
var FWDUVPEvent = function(e) {
	this.toString = function() {
		return "[object FWDUVPEvent]"
	}, this.type = e, this.target = FWDUVPDL, this.value = FWDUVPDL.getValue(), this.path = FWDUVPDL.getPath(), this.pathNames = FWDUVPDL.getPathNames(), this.parameters = {};
	for (var t = FWDUVPDL.getParameterNames(), o = 0, s = t.length; o < s; o++) this.parameters[t[o]] = FWDUVPDL.getParameter(t[o]);
	this.parameterNames = t
};
FWDUVPEvent.INIT = "init", FWDUVPEvent.CHANGE = "change", FWDUVPEvent.INTERNAL_CHANGE = "internalChange", FWDUVPEvent.EXTERNAL_CHANGE = "externalChange";
var FWDUVPDL = new function() {
	'use strict';
	var _getHash = function() {
			var e = _l.href.indexOf("#");
			return -1 == e ? "" : _ec(_dc(_l.href.substr(e + 1)))
		},
		_getWindow = function() {
			try {
				return top.document, top
			} catch (t) {
				return window
			}
		},
		_strictCheck = function(e, t) {
			return _opts.strict && (e = t ? "/" == e.substr(0, 1) ? e : "/" + e : "" == e ? "/" : e), e
		},
		_ieLocal = function(e, t) {
			return _msie && "file:" == _l.protocol ? t ? _value.replace(/\?/, "%3F") : _value.replace(/%253F/, "?") : e
		},
		_searchScript = function(e) {
			if (e.childNodes)
				for (var t = 0, o = e.childNodes.length, n; t < o; t++)
					if (e.childNodes[t].src && (_url = e.childNodes[t].src + ""), n = _searchScript(e.childNodes[t])) return n
		},
		_titleCheck = function() {
			_d.title != _title && -1 != _d.title.indexOf("#") && (_d.title = _title)
		},
		_listen = function() {
			if (!_silent) {
				var e = _getHash(),
					t = _value != e;
				_safari && 523 > _version ? _length != _h.length && (_length = _h.length, typeof _stack[_length - 1] != UNDEFINED && (_value = _stack[_length - 1]), _update.call(this, !1)) : _msie && t ? 7 > _version ? _l.reload() : this.setValue(e) : t && (_value = e, _update.call(this, !1)), _msie && _titleCheck.call(this)
			}
		},
		_bodyClick = function(e) {
			if (0 < _popup.length) {
				var popup = window.open(_popup[0], _popup[1], eval(_popup[2]));
				typeof _popup[3] != UNDEFINED && eval(_popup[3])
			}
			_popup = []
		},
		_swfChange = function() {
			for (var e = 0, t = FWDUVPDL.getValue(), o = "setFWDUVPAddressValue", s, n; s = _ids[e]; e++)
				if (n = document.getElementById(s), !n)(n = document[s]) && typeof n[o] != UNDEFINED && n[o](t);
				else if (n.parentNode && typeof n.parentNode.so != UNDEFINED) n.parentNode.so.call(o, t);
			else {
				if (!(n && typeof n[o] != UNDEFINED)) {
					var a = n.getElementsByTagName("object"),
						d = n.getElementsByTagName("embed");
					n = a[0] && typeof a[0][o] != UNDEFINED ? a[0] : d[0] && typeof d[0][o] != UNDEFINED ? d[0] : null
				}
				n && n[o](t)
			}
		},
		_jsDispatch = function(e) {
			this.dispatchEvent(new FWDUVPEvent(e)), e = e.substr(0, 1).toUpperCase() + e.substr(1), typeof this["on" + e] == FUNCTION && this["on" + e]()
		},
		_jsInit = function() {
			_util.Browser.isSafari() && _d.body.addEventListener("click", _bodyClick), _jsDispatch.call(this, "init")
		},
		_jsChange = function() {
			_swfChange(), _jsDispatch.call(this, "change")
		},
		_update = function(e) {
			_jsChange.call(this), e ? _jsDispatch.call(this, "internalChange") : _jsDispatch.call(this, "externalChange"), _st(_functions.bind(_track, this), 10)
		},
		_track = function() {
			var e = (_l.pathname + (/\/$/.test(_l.pathname) ? "" : "/") + this.getValue()).replace(/\/\//, "/").replace(/^\/$/, ""),
				t = _t[_opts.tracker];
			typeof t == FUNCTION ? t(e) : typeof _t.pageTracker != UNDEFINED && typeof _t.pageTracker._trackPageview == FUNCTION ? _t.pageTracker._trackPageview(e) : typeof _t.urchinTracker == FUNCTION && _t.urchinTracker(e)
		},
		_htmlWrite = function() {
			var e = _frame.contentWindow.document;
			e.open(), e.write("<html><head><title>" + _d.title + "</title><script>var " + ID + " = \"" + _getHash() + "\";</script></head></html>"), e.close()
		},
		_htmlLoad = function() {
			var e = _frame.contentWindow,
				t = e.location.href;
			_value = typeof e[ID] == UNDEFINED ? "" : e[ID], _value != _getHash() && (_update.call(FWDUVPDL, !1), _l.hash = _ieLocal(_value, TRUE))
		},
		_load = function() {
			if (!_loaded) {
				if (_loaded = TRUE, _msie && 8 > _version) {
					var e = _d.getElementsByTagName("frameset")[0];
					_frame = _d.createElement((e ? "" : "i") + "frame"), e ? (e.insertAdjacentElement("beforeEnd", _frame), e[e.cols ? "cols" : "rows"] += ",0", _frame.src = "javascript:false", _frame.noResize = !0, _frame.frameBorder = _frame.frameSpacing = 0) : (_frame.src = "javascript:false", _frame.style.display = "none", _d.body.insertAdjacentElement("afterBegin", _frame)), _st(function() {
						_events.addListener(_frame, "load", _htmlLoad), typeof _frame.contentWindow[ID] == UNDEFINED && _htmlWrite()
					}, 50)
				} else _safari && (418 > _version && (_d.body.innerHTML += "<form id=\"" + ID + "\" style=\"position:absolute;top:-9999px;\" method=\"get\"></form>", _form = _d.getElementById(ID)), typeof _l[ID] == UNDEFINED && (_l[ID] = {}), typeof _l[ID][_l.pathname] != UNDEFINED && (_stack = _l[ID][_l.pathname].split(",")));
				_st(_functions.bind(function() {
					_jsInit.call(_s), _jsChange.call(_s), _track.call(_s)
				}, _s), 1), _msie && 8 <= _version ? (_d.body.onhashchange = _functions.bind(_listen, _s), _si(_functions.bind(_titleCheck, _s), 50)) : _si(_functions.bind(_listen, _s), 50)
			}
		},
		ID = "swfaddress",
		FUNCTION = "function",
		UNDEFINED = "undefined",
		TRUE = !0,
		FALSE = !1,
		_util = fwdal.util,
		_browser = _util.Browser,
		_events = _util.Events,
		_functions = _util.Functions,
		_version = _browser.getVersion(),
		_msie = _browser.isMSIE(),
		_mozilla = _browser.isMozilla(),
		_opera = _browser.isOpera(),
		_safari = _browser.isSafari(),
		_supported = TRUE,
		_t = _getWindow(),
		_d = _t.document,
		_h = _t.history,
		_l = _t.location,
		_si = setInterval,
		_st = setTimeout,
		_dc = decodeURI,
		_ec = encodeURI,
		_title = _d.title,
		_length = _h.length,
		_silent = FALSE,
		_loaded = FALSE,
		_justset = TRUE,
		_juststart = TRUE,
		_ref = this,
		_stack = [],
		_ids = [],
		_popup = [],
		_listeners = {},
		_value = _getHash(),
		_opts = {
			history: TRUE,
			strict: TRUE
		},
		_frame, _form, _url;
	_msie && _d.documentMode && _d.documentMode != _version && (_version = 8 == _d.documentMode ? 8 : 7);
	var _s = this;
	if (_supported) {
		_opera && (history.navigationMode = "compatible");
		for (var i = 1; i < _length; i++) _stack.push("");
		_stack.push(_getHash()), _msie && _l.hash != _getHash() && (_l.hash = "#" + _ieLocal(_getHash(), TRUE)), _searchScript(document);
		var _qi = _url ? _url.indexOf("?") : -1;
		if (-1 != _qi)
			for (var params = _url.substr(_qi + 1).split("&"), i = 0, param, p; p = params[i]; i++) param = p.split("="), /^(history|strict)$/.test(param[0]) && (_opts[param[0]] = isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : 0 != parseInt(param[1])), /^tracker$/.test(param[0]) && (_opts[param[0]] = param[1]);
		_msie && _titleCheck.call(this), window == _t && _events.addListener(document, "DOMContentLoaded", _functions.bind(_load, this)), _events.addListener(_t, "load", _functions.bind(_load, this)), "complete" == document.readyState && _load()
	} else !_supported && -1 != _l.href.indexOf("#") || _safari && 418 > _version && -1 != _l.href.indexOf("#") && "" != _l.search ? (_d.open(), _d.write("<html><head><meta http-equiv=\"refresh\" content=\"0;url=" + _l.href.substr(0, _l.href.indexOf("#")) + "\" /></head></html>"), _d.close()) : _track();
	this.toString = function() {
			return "[class FWDUVPDL]"
		}, this.back = function() {
			_h.back()
		}, this.forward = function() {
			_h.forward()
		}, this.up = function() {
			var e = this.getPath();
			this.setValue(e.substr(0, e.lastIndexOf("/", e.length - 2) + ("/" == e.substr(e.length - 1) ? 1 : 0)))
		}, this.go = function(e) {
			_h.go(e)
		}, this.href = function(e, t) {
			t = typeof t == UNDEFINED ? "_self" : t, "_self" == t ? self.location.href = e : "_top" == t ? _l.href = e : "_blank" == t ? window.open(e) : _t.frames[t].location.href = e
		}, this.popup = function(url, name, options, handler) {
			try {
				var popup = window.open(url, name, eval(options));
				typeof handler != UNDEFINED && eval(handler)
			} catch (e) {}
			_popup = arguments
		}, this.getIds = function() {
			return _ids
		}, this.getId = function() {
			return _ids[0]
		}, this.setId = function(e) {
			_ids[0] = e
		}, this.addId = function(e) {
			this.removeId(e), _ids.push(e)
		}, this.removeId = function(e) {
			for (var t = 0; t < _ids.length; t++)
				if (e == _ids[t]) {
					_ids.splice(t, 1);
					break
				}
		}, this.addEventListener = function(e, t) {
			typeof _listeners[e] == UNDEFINED && (_listeners[e] = []), _listeners[e].push(t)
		}, this.removeEventListener = function(e, t) {
			if (typeof _listeners[e] != UNDEFINED) {
				for (var o = 0, s;
					(s = _listeners[e][o]) && !(s == t); o++);
				_listeners[e].splice(o, 1)
			}
		}, this.dispatchEvent = function(e) {
			if (this.hasEventListener(e.type)) {
				e.target = this;
				for (var t = 0, o; o = _listeners[e.type][t]; t++) o(e);
				return TRUE
			}
			return FALSE
		}, this.hasEventListener = function(e) {
			return typeof _listeners[e] != UNDEFINED && 0 < _listeners[e].length
		}, this.getBaseURL = function() {
			var e = _l.href;
			return -1 != e.indexOf("#") && (e = e.substr(0, e.indexOf("#"))), "/" == e.substr(e.length - 1) && (e = e.substr(0, e.length - 1)), e
		}, this.getStrict = function() {
			return _opts.strict
		}, this.setStrict = function(e) {
			_opts.strict = e
		}, this.getHistory = function() {
			return _opts.history
		}, this.setHistory = function(e) {
			_opts.history = e
		}, this.getTracker = function() {
			return _opts.tracker
		}, this.setTracker = function(e) {
			_opts.tracker = e
		}, this.getTitle = function() {
			return _d.title
		}, this.setTitle = function(e) {
			return void(typeof e == UNDEFINED || ("null" == e && (e = ""), e = _dc(e), _st(function() {
				_title = _d.title = e, _juststart && _frame && _frame.contentWindow && _frame.contentWindow.document && (_frame.contentWindow.document.title = e, _juststart = FALSE), !_justset && _mozilla && _l.replace(-1 == _l.href.indexOf("#") ? _l.href + "#" : _l.href), _justset = FALSE
			}, 10)))
		}, this.getStatus = function() {
			return _t.status
		}, this.setStatus = function(e) {
			if (!_supported) return null;
			if (typeof e != UNDEFINED && ("null" == e && (e = ""), e = _dc(e), !_safari)) {
				if (e = _strictCheck("null" == e ? "" : e, TRUE), "/" == e && (e = ""), !/http(s)?:\/\//.test(e)) {
					var t = _l.href.indexOf("#");
					e = (-1 == t ? _l.href : _l.href.substr(0, t)) + "#" + e
				}
				_t.status = e
			}
		}, this.resetStatus = function() {
			_t.status = ""
		}, this.getValue = function() {
			return _dc(_strictCheck(_ieLocal(_value, FALSE), FALSE))
		}, this.setValue = function(e) {
			if (!_supported) return null;
			typeof e != UNDEFINED && ("null" == e && (e = ""), e = _ec(_dc(_strictCheck(e, TRUE))), "/" == e && (e = ""), _value == e || (_justset = TRUE, _value = e, _silent = TRUE, _update.call(FWDUVPDL, !0), _stack[_h.length] = _value, _value != _getHash() && (_opts.history ? _l.hash = "#" + _dc(_ieLocal(_value, TRUE)) : _l.replace("#" + _dc(_value))), _msie && 8 > _version && _opts.history && _st(_htmlWrite, 50), _safari ? _st(function() {
				_silent = FALSE
			}, 1) : _silent = FALSE))
		}, this.getPath = function() {
			var e = this.getValue();
			return -1 == e.indexOf("?") ? -1 == e.indexOf("#") ? e : e.split("#")[0] : e.split("?")[0]
		}, this.getPathNames = function() {
			var e = this.getPath(),
				t = e.split("/");
			return ("/" == e.substr(0, 1) || 0 == e.length) && t.splice(0, 1), "/" == e.substr(e.length - 1, 1) && t.splice(t.length - 1, 1), t
		}, this.getQueryString = function() {
			var e = this.getValue(),
				t = e.indexOf("?");
			if (-1 != t && t < e.length) return e.substr(t + 1)
		}, this.getParameter = function(e) {
			var t = this.getValue(),
				o = t.indexOf("?");
			if (-1 != o) {
				t = t.substr(o + 1);
				for (var s = t.split("&"), n = s.length, a = [], d; n--;) d = s[n].split("="), d[0] == e && a.push(d[1]);
				if (0 != a.length) return 1 == a.length ? a[0] : a
			}
		}, this.getParameterNames = function() {
			var e = this.getValue(),
				t = e.indexOf("?"),
				o = [];
			if (-1 != t && (e = e.substr(t + 1), "" != e && -1 != e.indexOf("=")))
				for (var s = e.split("&"), n = 0; n < s.length;) o.push(s[n].split("=")[0]), n++;
			return o
		}, this.onInit = null, this.onChange = null, this.onInternalChange = null, this.onExternalChange = null,
		function() {
			var e;
			if (typeof FlashObject != UNDEFINED && (SWFObject = FlashObject), typeof SWFObject != UNDEFINED && SWFObject.prototype && SWFObject.prototype.write) {
				var t = SWFObject.prototype.write;
				SWFObject.prototype.write = function() {
					e = arguments, 8 > this.getAttribute("version").major && (this.addVariable("$swfaddress", FWDUVPDL.getValue()), ("string" == typeof e[0] ? document.getElementById(e[0]) : e[0]).so = this);
					var o;
					return (o = t.apply(this, e)) && _ref.addId(this.getAttribute("id")), o
				}
			}
			if (typeof swfobject != UNDEFINED) {
				var o = swfobject.registerObject;
				swfobject.registerObject = function() {
					e = arguments, o.apply(this, e), _ref.addId(e[0])
				};
				var s = swfobject.createSWF;
				swfobject.createSWF = function() {
					e = arguments;
					var t = s.apply(this, e);
					return t && _ref.addId(e[0].id), t
				};
				var n = swfobject.embedSWF;
				swfobject.embedSWF = function() {
					e = arguments, typeof e[8] == UNDEFINED && (e[8] = {}), typeof e[8].id == UNDEFINED && (e[8].id = e[1]), n.apply(this, e), _ref.addId(e[8].id)
				}
			}
			if (typeof UFO != UNDEFINED) {
				var i = UFO.create;
				UFO.create = function() {
					e = arguments, i.apply(this, e), _ref.addId(e[0].id)
				}
			}
			if (typeof AC_FL_RunContent != UNDEFINED) {
				var a = AC_FL_RunContent;
				AC_FL_RunContent = function() {
					e = arguments, a.apply(this, e);
					for (var t = 0, o = e.length; t < o; t++) "id" == e[t] && _ref.addId(e[t + 1])
				}
			}
		}()
};
