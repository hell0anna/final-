class g {
  constructor(i) {
    this._map = /* @__PURE__ */ new Map(), this._roundAverageSize = !1, this.totalSize = 0, i?.roundAverageSize === !0 && (this._roundAverageSize = !0);
  }
  set(i, t) {
    const s = this._map.get(i) || 0;
    this._map.set(i, t), this.totalSize += t - s;
  }
  get averageSize() {
    if (this._map.size > 0) {
      const i = this.totalSize / this._map.size;
      return this._roundAverageSize ? Math.round(i) : i;
    }
    return 0;
  }
  getSize(i) {
    return this._map.get(i);
  }
  clear() {
    this._map.clear(), this.totalSize = 0;
  }
}
function f(n) {
  return n === "horizontal" ? "width" : "height";
}
class d {
  _getDefaultConfig() {
    return {
      direction: "vertical"
    };
  }
  constructor(i, t) {
    this._latestCoords = { left: 0, top: 0 }, this._direction = null, this._viewportSize = { width: 0, height: 0 }, this.totalScrollSize = { width: 0, height: 0 }, this.offsetWithinScroller = { left: 0, top: 0 }, this._pendingReflow = !1, this._pendingLayoutUpdate = !1, this._pin = null, this._firstVisible = 0, this._lastVisible = 0, this._physicalMin = 0, this._physicalMax = 0, this._first = -1, this._last = -1, this._sizeDim = "height", this._secondarySizeDim = "width", this._positionDim = "top", this._secondaryPositionDim = "left", this._scrollPosition = 0, this._scrollError = 0, this._items = [], this._scrollSize = 1, this._overhang = 1e3, this._hostSink = i, Promise.resolve().then(() => this.config = t || this._getDefaultConfig());
  }
  set config(i) {
    Object.assign(this, Object.assign({}, this._getDefaultConfig(), i));
  }
  get config() {
    return {
      direction: this.direction
    };
  }
  /**
   * Maximum index of children + 1, to help estimate total height of the scroll
   * space.
   */
  get items() {
    return this._items;
  }
  set items(i) {
    this._setItems(i);
  }
  _setItems(i) {
    i !== this._items && (this._items = i, this._scheduleReflow());
  }
  /**
   * Primary scrolling direction.
   */
  get direction() {
    return this._direction;
  }
  set direction(i) {
    i = i === "horizontal" ? i : "vertical", i !== this._direction && (this._direction = i, this._sizeDim = i === "horizontal" ? "width" : "height", this._secondarySizeDim = i === "horizontal" ? "height" : "width", this._positionDim = i === "horizontal" ? "left" : "top", this._secondaryPositionDim = i === "horizontal" ? "top" : "left", this._triggerReflow());
  }
  /**
   * Height and width of the viewport.
   */
  get viewportSize() {
    return this._viewportSize;
  }
  set viewportSize(i) {
    const { _viewDim1: t, _viewDim2: s } = this;
    Object.assign(this._viewportSize, i), s !== this._viewDim2 ? this._scheduleLayoutUpdate() : t !== this._viewDim1 && this._checkThresholds();
  }
  /**
   * Scroll offset of the viewport.
   */
  get viewportScroll() {
    return this._latestCoords;
  }
  set viewportScroll(i) {
    Object.assign(this._latestCoords, i);
    const t = this._scrollPosition;
    this._scrollPosition = this._latestCoords[this._positionDim], Math.abs(t - this._scrollPosition) >= 1 && this._checkThresholds();
  }
  /**
   * Perform a reflow if one has been scheduled.
   */
  reflowIfNeeded(i = !1) {
    (i || this._pendingReflow) && (this._pendingReflow = !1, this._reflow());
  }
  set pin(i) {
    this._pin = i, this._triggerReflow();
  }
  get pin() {
    if (this._pin !== null) {
      const { index: i, block: t } = this._pin;
      return {
        index: Math.max(0, Math.min(i, this.items.length - 1)),
        block: t
      };
    }
    return null;
  }
  _clampScrollPosition(i) {
    return Math.max(-this.offsetWithinScroller[this._positionDim], Math.min(i, this.totalScrollSize[f(this.direction)] - this._viewDim1));
  }
  unpin() {
    this._pin !== null && (this._sendUnpinnedMessage(), this._pin = null);
  }
  _updateLayout() {
  }
  // protected _viewDim2Changed(): void {
  //   this._scheduleLayoutUpdate();
  // }
  /**
   * The height or width of the viewport, whichever corresponds to the scrolling direction.
   */
  get _viewDim1() {
    return this._viewportSize[this._sizeDim];
  }
  /**
   * The height or width of the viewport, whichever does NOT correspond to the scrolling direction.
   */
  get _viewDim2() {
    return this._viewportSize[this._secondarySizeDim];
  }
  _scheduleReflow() {
    this._pendingReflow = !0;
  }
  _scheduleLayoutUpdate() {
    this._pendingLayoutUpdate = !0, this._scheduleReflow();
  }
  // For triggering a reflow based on incoming changes to
  // the layout config.
  _triggerReflow() {
    this._scheduleLayoutUpdate(), Promise.resolve().then(() => this.reflowIfNeeded());
  }
  _reflow() {
    this._pendingLayoutUpdate && (this._updateLayout(), this._pendingLayoutUpdate = !1), this._updateScrollSize(), this._setPositionFromPin(), this._getActiveItems(), this._updateVisibleIndices(), this._sendStateChangedMessage();
  }
  /**
   * If we are supposed to be pinned to a particular
   * item or set of coordinates, we set `_scrollPosition`
   * accordingly and adjust `_scrollError` as needed
   * so that the virtualizer can keep the scroll
   * position in the DOM in sync
   */
  _setPositionFromPin() {
    if (this.pin !== null) {
      const i = this._scrollPosition, { index: t, block: s } = this.pin;
      this._scrollPosition = this._calculateScrollIntoViewPosition({
        index: t,
        block: s || "start"
      }) - this.offsetWithinScroller[this._positionDim], this._scrollError = i - this._scrollPosition;
    }
  }
  /**
   * Calculate the coordinates to scroll to, given
   * a request to scroll to the element at a specific
   * index.
   *
   * Supports the same positioning options (`start`,
   * `center`, `end`, `nearest`) as the standard
   * `Element.scrollIntoView()` method, but currently
   * only considers the provided value in the `block`
   * dimension, since we don't yet have any layouts
   * that support virtualization in two dimensions.
   */
  _calculateScrollIntoViewPosition(i) {
    const { block: t } = i, s = Math.min(this.items.length, Math.max(0, i.index)), e = this._getItemPosition(s)[this._positionDim];
    let h = e;
    if (t !== "start") {
      const o = this._getItemSize(s)[this._sizeDim];
      if (t === "center")
        h = e - 0.5 * this._viewDim1 + 0.5 * o;
      else {
        const l = e - this._viewDim1 + o;
        if (t === "end")
          h = l;
        else {
          const r = this._scrollPosition;
          h = Math.abs(r - e) < Math.abs(r - l) ? e : l;
        }
      }
    }
    return h += this.offsetWithinScroller[this._positionDim], this._clampScrollPosition(h);
  }
  getScrollIntoViewCoordinates(i) {
    return {
      [this._positionDim]: this._calculateScrollIntoViewPosition(i)
    };
  }
  _sendUnpinnedMessage() {
    this._hostSink({
      type: "unpinned"
    });
  }
  _sendVisibilityChangedMessage() {
    this._hostSink({
      type: "visibilityChanged",
      firstVisible: this._firstVisible,
      lastVisible: this._lastVisible
    });
  }
  _sendStateChangedMessage() {
    const i = /* @__PURE__ */ new Map();
    if (this._first !== -1 && this._last !== -1)
      for (let s = this._first; s <= this._last; s++)
        i.set(s, this._getItemPosition(s));
    const t = {
      type: "stateChanged",
      scrollSize: {
        [this._sizeDim]: this._scrollSize,
        [this._secondarySizeDim]: null
      },
      range: {
        first: this._first,
        last: this._last,
        firstVisible: this._firstVisible,
        lastVisible: this._lastVisible
      },
      childPositions: i
    };
    this._scrollError && (t.scrollError = {
      [this._positionDim]: this._scrollError,
      [this._secondaryPositionDim]: 0
    }, this._scrollError = 0), this._hostSink(t);
  }
  /**
   * Number of items to display.
   */
  get _num() {
    return this._first === -1 || this._last === -1 ? 0 : this._last - this._first + 1;
  }
  _checkThresholds() {
    if (this._viewDim1 === 0 && this._num > 0 || this._pin !== null)
      this._scheduleReflow();
    else {
      const i = Math.max(0, this._scrollPosition - this._overhang), t = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
      this._physicalMin > i || this._physicalMax < t ? this._scheduleReflow() : this._updateVisibleIndices({ emit: !0 });
    }
  }
  /**
   * Find the indices of the first and last items to intersect the viewport.
   * Emit a visibleindiceschange event when either index changes.
   */
  _updateVisibleIndices(i) {
    if (this._first === -1 || this._last === -1)
      return;
    let t = this._first;
    for (; t < this._last && Math.round(this._getItemPosition(t)[this._positionDim] + this._getItemSize(t)[this._sizeDim]) <= Math.round(this._scrollPosition); )
      t++;
    let s = this._last;
    for (; s > this._first && Math.round(this._getItemPosition(s)[this._positionDim]) >= Math.round(this._scrollPosition + this._viewDim1); )
      s--;
    (t !== this._firstVisible || s !== this._lastVisible) && (this._firstVisible = t, this._lastVisible = s, i && i.emit && this._sendVisibilityChangedMessage());
  }
}
function m(n) {
  return n === "horizontal" ? "marginLeft" : "marginTop";
}
function u(n) {
  return n === "horizontal" ? "marginRight" : "marginBottom";
}
function S(n) {
  return n === "horizontal" ? "xOffset" : "yOffset";
}
function z(n, i) {
  const t = [n, i].sort();
  return t[1] <= 0 ? Math.min(...t) : t[0] >= 0 ? Math.max(...t) : t[0] + t[1];
}
class p {
  constructor() {
    this._childSizeCache = new g(), this._marginSizeCache = new g(), this._metricsCache = /* @__PURE__ */ new Map();
  }
  update(i, t) {
    const s = /* @__PURE__ */ new Set();
    Object.keys(i).forEach((e) => {
      const h = Number(e);
      this._metricsCache.set(h, i[h]), this._childSizeCache.set(h, i[h][f(t)]), s.add(h), s.add(h + 1);
    });
    for (const e of s) {
      const h = this._metricsCache.get(e)?.[m(t)] || 0, o = this._metricsCache.get(e - 1)?.[u(t)] || 0;
      this._marginSizeCache.set(e, z(h, o));
    }
  }
  get averageChildSize() {
    return this._childSizeCache.averageSize;
  }
  get totalChildSize() {
    return this._childSizeCache.totalSize;
  }
  get averageMarginSize() {
    return this._marginSizeCache.averageSize;
  }
  get totalMarginSize() {
    return this._marginSizeCache.totalSize;
  }
  getLeadingMarginValue(i, t) {
    return this._metricsCache.get(i)?.[m(t)] || 0;
  }
  getChildSize(i) {
    return this._childSizeCache.getSize(i);
  }
  getMarginSize(i) {
    return this._marginSizeCache.getSize(i);
  }
  clear() {
    this._childSizeCache.clear(), this._marginSizeCache.clear(), this._metricsCache.clear();
  }
}
class M extends d {
  constructor() {
    super(...arguments), this._itemSize = { width: 100, height: 100 }, this._physicalItems = /* @__PURE__ */ new Map(), this._newPhysicalItems = /* @__PURE__ */ new Map(), this._metricsCache = new p(), this._anchorIdx = null, this._anchorPos = null, this._stable = !0, this._measureChildren = !0, this._estimate = !0;
  }
  // protected _defaultConfig: BaseLayoutConfig = Object.assign({}, super._defaultConfig, {
  // })
  // constructor(config: Layout1dConfig) {
  //   super(config);
  // }
  get measureChildren() {
    return this._measureChildren;
  }
  /**
   * Determine the average size of all children represented in the sizes
   * argument.
   */
  updateItemSizes(i) {
    this._metricsCache.update(i, this.direction), this._scheduleReflow();
  }
  /**
   * Set the average item size based on the total length and number of children
   * in range.
   */
  // _updateItemSize() {
  //   // Keep integer values.
  //   this._itemSize[this._sizeDim] = this._metricsCache.averageChildSize;
  // }
  _getPhysicalItem(i) {
    return this._newPhysicalItems.get(i) ?? this._physicalItems.get(i);
  }
  _getSize(i) {
    return this._getPhysicalItem(i) && this._metricsCache.getChildSize(i);
  }
  _getAverageSize() {
    return this._metricsCache.averageChildSize || this._itemSize[this._sizeDim];
  }
  _estimatePosition(i) {
    const t = this._metricsCache;
    if (this._first === -1 || this._last === -1)
      return t.averageMarginSize + i * (t.averageMarginSize + this._getAverageSize());
    if (i < this._first) {
      const s = this._first - i;
      return this._getPhysicalItem(this._first).pos - (t.getMarginSize(this._first - 1) || t.averageMarginSize) - (s * t.averageChildSize + (s - 1) * t.averageMarginSize);
    } else {
      const s = i - this._last;
      return this._getPhysicalItem(this._last).pos + (t.getChildSize(this._last) || t.averageChildSize) + (t.getMarginSize(this._last) || t.averageMarginSize) + s * (t.averageChildSize + t.averageMarginSize);
    }
  }
  /**
   * Returns the position in the scrolling direction of the item at idx.
   * Estimates it if the item at idx is not in the DOM.
   */
  _getPosition(i) {
    const t = this._getPhysicalItem(i), { averageMarginSize: s } = this._metricsCache;
    return i === 0 ? this._metricsCache.getMarginSize(0) ?? s : t ? t.pos : this._estimatePosition(i);
  }
  _calculateAnchor(i, t) {
    return i <= 0 ? 0 : t > this._scrollSize - this._viewDim1 ? this.items.length - 1 : Math.max(0, Math.min(this.items.length - 1, Math.floor((i + t) / 2 / this._delta)));
  }
  _getAnchor(i, t) {
    if (this._physicalItems.size === 0)
      return this._calculateAnchor(i, t);
    if (this._first < 0)
      return this._calculateAnchor(i, t);
    if (this._last < 0)
      return this._calculateAnchor(i, t);
    const s = this._getPhysicalItem(this._first), e = this._getPhysicalItem(this._last), h = s.pos;
    if (e.pos + this._metricsCache.getChildSize(this._last) < i)
      return this._calculateAnchor(i, t);
    if (h > t)
      return this._calculateAnchor(i, t);
    let r = this._firstVisible - 1, a = -1 / 0;
    for (; a < i; )
      a = this._getPhysicalItem(++r).pos + this._metricsCache.getChildSize(r);
    return r;
  }
  /**
   * Updates _first and _last based on items that should be in the current
   * viewed range.
   */
  _getActiveItems() {
    this._viewDim1 === 0 || this.items.length === 0 ? this._clearItems() : this._getItems();
  }
  /**
   * Sets the range to empty.
   */
  _clearItems() {
    this._first = -1, this._last = -1, this._physicalMin = 0, this._physicalMax = 0;
    const i = this._newPhysicalItems;
    this._newPhysicalItems = this._physicalItems, this._newPhysicalItems.clear(), this._physicalItems = i, this._stable = !0;
  }
  /*
   * Updates _first and _last based on items that should be in the given range.
   */
  _getItems() {
    const i = this._newPhysicalItems;
    this._stable = !0;
    let t, s;
    if (this.pin !== null) {
      const { index: a } = this.pin;
      this._anchorIdx = a, this._anchorPos = this._getPosition(a);
    }
    if (t = this._scrollPosition - this._overhang, s = this._scrollPosition + this._viewDim1 + this._overhang, s < 0 || t > this._scrollSize) {
      this._clearItems();
      return;
    }
    (this._anchorIdx === null || this._anchorPos === null) && (this._anchorIdx = this._getAnchor(t, s), this._anchorPos = this._getPosition(this._anchorIdx));
    let e = this._getSize(this._anchorIdx);
    e === void 0 && (this._stable = !1, e = this._getAverageSize());
    const h = this._metricsCache.getMarginSize(this._anchorIdx) ?? this._metricsCache.averageMarginSize, o = this._metricsCache.getMarginSize(this._anchorIdx + 1) ?? this._metricsCache.averageMarginSize;
    this._anchorIdx === 0 && (this._anchorPos = h), this._anchorIdx === this.items.length - 1 && (this._anchorPos = this._scrollSize - o - e);
    let l = 0;
    for (this._anchorPos + e + o < t && (l = t - (this._anchorPos + e + o)), this._anchorPos - h > s && (l = s - (this._anchorPos - h)), l && (this._scrollPosition -= l, t -= l, s -= l, this._scrollError += l), i.set(this._anchorIdx, { pos: this._anchorPos, size: e }), this._first = this._last = this._anchorIdx, this._physicalMin = this._anchorPos - h, this._physicalMax = this._anchorPos + e + o; this._physicalMin > t && this._first > 0; ) {
      let a = this._getSize(--this._first);
      a === void 0 && (this._stable = !1, a = this._getAverageSize());
      let _ = this._metricsCache.getMarginSize(this._first);
      _ === void 0 && (this._stable = !1, _ = this._metricsCache.averageMarginSize), this._physicalMin -= a;
      const c = this._physicalMin;
      if (i.set(this._first, { pos: c, size: a }), this._physicalMin -= _, this._stable === !1 && this._estimate === !1)
        break;
    }
    for (; this._physicalMax < s && this._last < this.items.length - 1; ) {
      let a = this._getSize(++this._last);
      a === void 0 && (this._stable = !1, a = this._getAverageSize());
      let _ = this._metricsCache.getMarginSize(this._last);
      _ === void 0 && (this._stable = !1, _ = this._metricsCache.averageMarginSize);
      const c = this._physicalMax;
      if (i.set(this._last, { pos: c, size: a }), this._physicalMax += a + _, !this._stable && !this._estimate)
        break;
    }
    const r = this._calculateError();
    r && (this._physicalMin -= r, this._physicalMax -= r, this._anchorPos -= r, this._scrollPosition -= r, i.forEach((a) => a.pos -= r), this._scrollError += r), this._stable && (this._newPhysicalItems = this._physicalItems, this._newPhysicalItems.clear(), this._physicalItems = i);
  }
  _calculateError() {
    return this._first === 0 ? this._physicalMin : this._physicalMin <= 0 ? this._physicalMin - this._first * this._delta : this._last === this.items.length - 1 ? this._physicalMax - this._scrollSize : this._physicalMax >= this._scrollSize ? this._physicalMax - this._scrollSize + (this.items.length - 1 - this._last) * this._delta : 0;
  }
  _reflow() {
    const { _first: i, _last: t } = this;
    super._reflow(), (this._first === -1 && this._last == -1 || this._first === i && this._last === t) && this._resetReflowState();
  }
  _resetReflowState() {
    this._anchorIdx = null, this._anchorPos = null, this._stable = !0;
  }
  _updateScrollSize() {
    const { averageMarginSize: i } = this._metricsCache;
    this._scrollSize = Math.max(1, this.items.length * (i + this._getAverageSize()) + i);
  }
  /**
   * Returns the average size (precise or estimated) of an item in the scrolling direction,
   * including any surrounding space.
   */
  get _delta() {
    const { averageMarginSize: i } = this._metricsCache;
    return this._getAverageSize() + i;
  }
  /**
   * Returns the top and left positioning of the item at idx.
   */
  _getItemPosition(i) {
    return {
      [this._positionDim]: this._getPosition(i),
      [this._secondaryPositionDim]: 0,
      [S(this.direction)]: -(this._metricsCache.getLeadingMarginValue(i, this.direction) ?? this._metricsCache.averageMarginSize)
    };
  }
  /**
   * Returns the height and width of the item at idx.
   */
  _getItemSize(i) {
    return {
      [this._sizeDim]: this._getSize(i) || this._getAverageSize(),
      [this._secondarySizeDim]: this._itemSize[this._secondarySizeDim]
    };
  }
  _viewDim2Changed() {
    this._metricsCache.clear(), this._scheduleReflow();
  }
}
export {
  M as FlowLayout
};
//# sourceMappingURL=flow.mjs.map
