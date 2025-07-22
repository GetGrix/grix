var _t = Object.defineProperty;
var qt = (i, t, s) => t in i ? _t(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var ee = (i, t, s) => qt(i, typeof t != "symbol" ? t + "" : t, s);
import Qe, { createContext as Lt, useState as V, useRef as Re, useEffect as pe, useContext as Wt, useCallback as Me } from "react";
var ut = { exports: {} }, at = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function Yt() {
  if (Ct) return at;
  Ct = 1;
  var i = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(n, r, o) {
    var c = null;
    if (o !== void 0 && (c = "" + o), r.key !== void 0 && (c = "" + r.key), "key" in r) {
      o = {};
      for (var a in r)
        a !== "key" && (o[a] = r[a]);
    } else o = r;
    return r = o.ref, {
      $$typeof: i,
      type: n,
      key: c,
      ref: r !== void 0 ? r : null,
      props: o
    };
  }
  return at.Fragment = t, at.jsx = s, at.jsxs = s, at;
}
var ct = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt;
function Xt() {
  return Mt || (Mt = 1, process.env.NODE_ENV !== "production" && function() {
    function i(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === oe ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case m:
          return "Fragment";
        case f:
          return "Profiler";
        case g:
          return "StrictMode";
        case T:
          return "Suspense";
        case k:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case l:
            return "Portal";
          case G:
            return (b.displayName || "Context") + ".Provider";
          case w:
            return (b._context.displayName || "Context") + ".Consumer";
          case A:
            var X = b.render;
            return b = b.displayName, b || (b = X.displayName || X.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case B:
            return X = b.displayName || null, X !== null ? X : i(b.type) || "Memo";
          case D:
            X = b._payload, b = b._init;
            try {
              return i(b(X));
            } catch {
            }
        }
      return null;
    }
    function t(b) {
      return "" + b;
    }
    function s(b) {
      try {
        t(b);
        var X = !1;
      } catch {
        X = !0;
      }
      if (X) {
        X = console;
        var le = X.error, be = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return le.call(
          X,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          be
        ), t(b);
      }
    }
    function n(b) {
      if (b === m) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === D)
        return "<...>";
      try {
        var X = i(b);
        return X ? "<" + X + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var b = Z.A;
      return b === null ? null : b.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function c(b) {
      if (p.call(b, "key")) {
        var X = Object.getOwnPropertyDescriptor(b, "key").get;
        if (X && X.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function a(b, X) {
      function le() {
        me || (me = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          X
        ));
      }
      le.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: le,
        configurable: !0
      });
    }
    function d() {
      var b = i(this.type);
      return we[b] || (we[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function h(b, X, le, be, ze, U, Oe, $e) {
      return le = U.ref, b = {
        $$typeof: y,
        type: b,
        key: X,
        props: U,
        _owner: ze
      }, (le !== void 0 ? le : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Oe
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $e
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function S(b, X, le, be, ze, U, Oe, $e) {
      var ie = X.children;
      if (ie !== void 0)
        if (be)
          if (M(ie)) {
            for (be = 0; be < ie.length; be++)
              W(ie[be]);
            Object.freeze && Object.freeze(ie);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else W(ie);
      if (p.call(X, "key")) {
        ie = i(b);
        var te = Object.keys(X).filter(function(ge) {
          return ge !== "key";
        });
        be = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", ye[ie + be] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          be,
          ie,
          te,
          ie
        ), ye[ie + be] = !0);
      }
      if (ie = null, le !== void 0 && (s(le), ie = "" + le), c(X) && (s(X.key), ie = "" + X.key), "key" in X) {
        le = {};
        for (var ue in X)
          ue !== "key" && (le[ue] = X[ue]);
      } else le = X;
      return ie && a(
        le,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), h(
        b,
        ie,
        U,
        ze,
        r(),
        le,
        Oe,
        $e
      );
    }
    function W(b) {
      typeof b == "object" && b !== null && b.$$typeof === y && b._store && (b._store.validated = 1);
    }
    var P = Qe, y = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), G = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), Z = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = Object.prototype.hasOwnProperty, M = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      "react-stack-bottom-frame": function(b) {
        return b();
      }
    };
    var me, we = {}, se = P["react-stack-bottom-frame"].bind(
      P,
      o
    )(), $ = K(n(o)), ye = {};
    ct.Fragment = m, ct.jsx = function(b, X, le, be, ze) {
      var U = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return S(
        b,
        X,
        le,
        !1,
        be,
        ze,
        U ? Error("react-stack-top-frame") : se,
        U ? K(n(b)) : $
      );
    }, ct.jsxs = function(b, X, le, be, ze) {
      var U = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return S(
        b,
        X,
        le,
        !0,
        be,
        ze,
        U ? Error("react-stack-top-frame") : se,
        U ? K(n(b)) : $
      );
    };
  }()), ct;
}
var Et;
function Ut() {
  return Et || (Et = 1, process.env.NODE_ENV === "production" ? ut.exports = Yt() : ut.exports = Xt()), ut.exports;
}
var e = Ut();
const st = {
  // Vector operations
  distance(i, t) {
    const s = t.x - i.x, n = t.y - i.y;
    return Math.sqrt(s * s + n * n);
  },
  slope(i, t) {
    const s = t.x - i.x, n = t.y - i.y;
    return Math.abs(s) < Number.EPSILON ? s === 0 || s > 0 ? 1 / 0 : -1 / 0 : n / s;
  },
  angle(i, t) {
    const s = t.x - i.x, n = t.y - i.y;
    return Math.atan2(n, s);
  },
  magnitude(i) {
    return Math.sqrt(i.x * i.x + i.y * i.y);
  },
  normalize(i) {
    const t = this.magnitude(i);
    return t === 0 ? { x: 0, y: 0 } : { x: i.x / t, y: i.y / t };
  },
  // Grid operations
  snapToGrid(i, t) {
    return {
      x: Math.round(i.x / t) * t,
      y: Math.round(i.y / t) * t
    };
  },
  // Rectangle operations
  calculateArea(i) {
    return Math.abs(i.properties.width * i.properties.height);
  },
  boundsContainPoint(i, t) {
    return t.x >= i.x && t.x <= i.x + i.width && t.y >= i.y && t.y <= i.y + i.height;
  },
  boundsIntersect(i, t) {
    return !(i.x + i.width < t.x || t.x + t.width < i.x || i.y + i.height < t.y || t.y + t.height < i.y);
  },
  // Fraction utilities for educational features
  gcd(i, t) {
    for (i = Math.abs(i), t = Math.abs(t); t !== 0; ) {
      const s = t;
      t = i % t, i = s;
    }
    return i;
  },
  simplifyFraction(i, t) {
    if (t === 0)
      return [i, 1];
    const s = this.gcd(i, t);
    return [i / s, t / s];
  },
  // Coordinate transformations
  worldToScreen(i, t, s) {
    const n = s.width / 2, r = s.height / 2, o = (i.x - t.center.x) * t.zoom, c = (i.y - t.center.y) * t.zoom;
    return {
      x: n + o,
      y: r - c
      // Flip Y axis for mathematical coordinates
    };
  },
  screenToWorld(i, t, s) {
    const n = s.width / 2, r = s.height / 2, o = (i.x - n) / t.zoom, c = (r - i.y) / t.zoom;
    return {
      x: t.center.x + o,
      y: t.center.y + c
    };
  }
}, tt = {
  // Detect device capabilities
  detectCapabilities() {
    const i = "ontouchstart" in window || navigator.maxTouchPoints > 0, t = i && navigator.maxTouchPoints > 1, s = !0, n = window.matchMedia("(hover: hover)").matches;
    return {
      hasTouch: i,
      hasPencil: t,
      hasKeyboard: s,
      hasHover: n,
      maxTouchPoints: navigator.maxTouchPoints || 0,
      supportsPressure: "force" in Touch.prototype,
      supportsTilt: "altitudeAngle" in Touch.prototype
    };
  },
  // Normalize pointer events across input types
  normalizePointerEvent(i) {
    let t = "mouse";
    return i.pointerType === "touch" ? t = "touch" : i.pointerType === "pen" && (t = "pen"), {
      type: t,
      pressure: i.pressure || 0,
      tiltX: i.tiltX || 0,
      tiltY: i.tiltY || 0,
      x: i.clientX,
      y: i.clientY,
      timestamp: i.timeStamp,
      isPrimary: i.isPrimary,
      pointerId: i.pointerId
    };
  },
  // Calculate appropriate touch target size based on device
  getTouchTargetSize(i) {
    switch (i) {
      case "pen":
        return 32;
      // Smaller for precise pencil input
      case "touch":
        return 44;
      // Standard touch target size
      case "mouse":
        return 24;
      // Smaller for precise mouse input
      default:
        return 44;
    }
  }
};
class Ht {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
  }
  on(t, s) {
    this.listeners.has(t) || this.listeners.set(t, []), this.listeners.get(t).push(s);
  }
  off(t, s) {
    const n = this.listeners.get(t);
    if (n) {
      const r = n.indexOf(s);
      r > -1 && n.splice(r, 1);
    }
  }
  emit(t, s) {
    const n = this.listeners.get(t);
    n && n.forEach((r) => {
      try {
        r(s);
      } catch (o) {
        console.error(`Error in event handler for ${t}:`, o);
      }
    });
  }
  clear() {
    this.listeners.clear();
  }
  // Get all events (useful for debugging)
  getEvents() {
    return Array.from(this.listeners.keys());
  }
  // Get listener count for an event
  getListenerCount(t) {
    var s;
    return ((s = this.listeners.get(t)) == null ? void 0 : s.length) || 0;
  }
}
const Pt = (i) => {
  let t;
  const s = /* @__PURE__ */ new Set(), n = (h, S) => {
    const W = typeof h == "function" ? h(t) : h;
    if (!Object.is(W, t)) {
      const P = t;
      t = S ?? (typeof W != "object" || W === null) ? W : Object.assign({}, t, W), s.forEach((y) => y(t, P));
    }
  }, r = () => t, a = { setState: n, getState: r, getInitialState: () => d, subscribe: (h) => (s.add(h), () => s.delete(h)) }, d = t = i(n, r, a);
  return a;
}, Vt = (i) => i ? Pt(i) : Pt, Kt = (i) => i;
function Zt(i, t = Kt) {
  const s = Qe.useSyncExternalStore(
    i.subscribe,
    () => t(i.getState()),
    () => t(i.getInitialState())
  );
  return Qe.useDebugValue(s), s;
}
const kt = (i) => {
  const t = Vt(i), s = (n) => Zt(t, n);
  return Object.assign(s, t), s;
}, jt = (i) => i ? kt(i) : kt, Ze = class Ze {
  constructor() {
    ee(this, "STORAGE_KEY", "grix-app-state");
    ee(this, "VERSION_KEY", "grix-version");
    ee(this, "SESSION_KEY", "grix-session");
    ee(this, "CURRENT_VERSION", "1.0.0");
    ee(this, "options", {
      autoSave: !0,
      saveInterval: 2e3,
      // 2 seconds
      maxStorageSize: 10 * 1024 * 1024,
      // 10MB
      compressionEnabled: !0
    });
    ee(this, "autoSaveTimer", null);
    ee(this, "pendingSave", !1);
    ee(this, "sessionId");
    this.sessionId = this.generateSessionId(), this.initializeStorage(), this.setupAutoSave(), this.setupStorageEventListener();
  }
  static getInstance() {
    return Ze.instance || (Ze.instance = new Ze()), Ze.instance;
  }
  /**
   * Initialize storage system and handle version migrations
   */
  initializeStorage() {
    try {
      const t = localStorage.getItem(this.VERSION_KEY);
      t ? t !== this.CURRENT_VERSION ? (this.migrateStorage(t, this.CURRENT_VERSION), localStorage.setItem(this.VERSION_KEY, this.CURRENT_VERSION), console.log(`🔄 Grix: Storage migrated from ${t} to ${this.CURRENT_VERSION}`)) : console.log("✅ Grix: Storage ready (version " + this.CURRENT_VERSION + ")") : (localStorage.setItem(this.VERSION_KEY, this.CURRENT_VERSION), localStorage.setItem(this.SESSION_KEY, this.sessionId), console.log("🎯 Grix: Storage initialized for first time"));
    } catch (t) {
      console.warn("⚠️ Grix: Storage initialization failed:", t);
    }
  }
  /**
   * Save complete application state
   */
  async saveState(t) {
    try {
      const s = this.loadState(), n = {
        objects: t.objects ?? (s == null ? void 0 : s.objects) ?? [],
        selectedObjects: t.selectedObjects ?? (s == null ? void 0 : s.selectedObjects) ?? [],
        viewport: t.viewport ?? (s == null ? void 0 : s.viewport) ?? { zoom: 20, center: { x: 0, y: 0 } },
        visualizationSettings: t.visualizationSettings ?? (s == null ? void 0 : s.visualizationSettings) ?? {},
        activeTool: t.activeTool ?? (s == null ? void 0 : s.activeTool) ?? null,
        version: this.CURRENT_VERSION,
        timestamp: Date.now(),
        sessionId: this.sessionId
      }, r = JSON.stringify(n);
      return r.length > this.options.maxStorageSize ? (console.warn("⚠️ Grix: State too large for storage, compressing..."), !1) : (localStorage.setItem(this.STORAGE_KEY, r), console.log("💾 Grix: State saved successfully"), !0);
    } catch (s) {
      return console.error("❌ Grix: Failed to save state:", s), !1;
    }
  }
  /**
   * Load complete application state
   */
  loadState() {
    try {
      const t = localStorage.getItem(this.STORAGE_KEY);
      if (!t)
        return console.log("📭 Grix: No saved state found"), null;
      const s = JSON.parse(t);
      return this.validateState(s) ? (console.log("📂 Grix: State loaded successfully"), s) : (console.warn("⚠️ Grix: Invalid state structure, ignoring saved state"), null);
    } catch (t) {
      return console.error("❌ Grix: Failed to load state:", t), null;
    }
  }
  /**
   * Clear all stored state
   */
  clearState() {
    try {
      return localStorage.removeItem(this.STORAGE_KEY), console.log("🗑️ Grix: State cleared successfully"), !0;
    } catch (t) {
      return console.error("❌ Grix: Failed to clear state:", t), !1;
    }
  }
  /**
   * Get storage statistics
   */
  getStorageInfo() {
    try {
      const t = localStorage.getItem(this.STORAGE_KEY), s = t ? new Blob([t]).size : 0;
      let n = 0;
      for (let o in localStorage)
        localStorage.hasOwnProperty(o) && (n += localStorage[o].length + o.length);
      const r = this.loadState();
      return {
        isAvailable: typeof Storage < "u",
        usedSpace: n,
        totalSpace: 5 * 1024 * 1024,
        // Typical localStorage limit
        stateSize: s,
        lastSaved: (r == null ? void 0 : r.timestamp) ?? null
      };
    } catch {
      return {
        isAvailable: !1,
        usedSpace: 0,
        totalSpace: 0,
        stateSize: 0,
        lastSaved: null
      };
    }
  }
  /**
   * Configure storage options
   */
  configure(t) {
    this.options = { ...this.options, ...t }, t.autoSave !== void 0 && (t.autoSave ? this.setupAutoSave() : this.stopAutoSave());
  }
  /**
   * Trigger immediate save (bypasses auto-save timer)
   */
  saveNow(t) {
    return this.pendingSave = !1, this.saveState(t);
  }
  /**
   * Schedule a save for the next auto-save interval
   */
  scheduleSave() {
    this.options.autoSave && (this.pendingSave = !0);
  }
  /**
   * Export state as JSON for backup/sharing
   */
  exportState() {
    const t = this.loadState();
    if (!t) return null;
    const s = {
      ...t,
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      exportVersion: this.CURRENT_VERSION
    };
    return JSON.stringify(s, null, 2);
  }
  /**
   * Import state from JSON backup
   */
  async importState(t) {
    try {
      const s = JSON.parse(t);
      if (!this.validateState(s))
        throw new Error("Invalid state structure");
      return await this.saveState(s);
    } catch (s) {
      return console.error("❌ Grix: Failed to import state:", s), !1;
    }
  }
  // Private helper methods
  generateSessionId() {
    return "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
  }
  validateState(t) {
    return t && typeof t == "object" && Array.isArray(t.objects) && Array.isArray(t.selectedObjects) && t.viewport && typeof t.viewport.zoom == "number" && t.viewport.center && typeof t.viewport.center.x == "number" && typeof t.viewport.center.y == "number";
  }
  setupAutoSave() {
    this.autoSaveTimer && clearInterval(this.autoSaveTimer), this.options.autoSave && (this.autoSaveTimer = setInterval(() => {
      this.pendingSave && this.triggerAutoSave();
    }, this.options.saveInterval));
  }
  stopAutoSave() {
    this.autoSaveTimer && (clearInterval(this.autoSaveTimer), this.autoSaveTimer = null);
  }
  triggerAutoSave() {
    window.dispatchEvent(new CustomEvent("grix:auto-save-requested")), this.pendingSave = !1;
  }
  setupStorageEventListener() {
    window.addEventListener("storage", (t) => {
      t.key === this.STORAGE_KEY && (console.log("🔄 Grix: State updated by another tab"), window.dispatchEvent(new CustomEvent("grix:state-updated-externally")));
    });
  }
  migrateStorage(t, s) {
    console.log(`🔄 Grix: Migrating storage from ${t} to ${s}`);
    const n = this.loadState();
    n && (n.version = s, this.saveState(n));
  }
};
ee(Ze, "instance");
let bt = Ze;
const re = bt.getInstance(), Ne = jt((i, t) => ({
  // Initial state
  viewport: {
    center: { x: 0, y: 0 },
    zoom: 20,
    // Start zoomed in so grid is visible
    bounds: { x: -10, y: -10, width: 20, height: 20 }
  },
  objects: [],
  selectedObjects: [],
  snapToGrid: !0,
  canvasSize: { width: 800, height: 600 },
  // Viewport actions
  setViewport: (s) => {
    i((n) => ({
      viewport: { ...n.viewport, ...s }
    })), re.scheduleSave();
  },
  // Object management
  addObject: (s) => {
    i((n) => ({
      objects: [...n.objects, s]
    })), re.scheduleSave();
  },
  removeObject: (s) => {
    i((n) => ({
      objects: n.objects.filter((r) => r.id !== s),
      selectedObjects: n.selectedObjects.filter((r) => r !== s)
    })), re.scheduleSave();
  },
  updateObject: (s, n) => {
    i((r) => ({
      objects: r.objects.map(
        (o) => o.id === s ? { ...o, ...n } : o
      )
    })), re.scheduleSave();
  },
  // Selection management
  selectObject: (s, n = !1) => {
    i((r) => n ? {
      selectedObjects: r.selectedObjects.includes(s) ? r.selectedObjects.filter((c) => c !== s) : [...r.selectedObjects, s]
    } : { selectedObjects: [s] });
  },
  clearSelection: () => {
    i({ selectedObjects: [] });
  },
  // Grid settings
  setSnapToGrid: (s) => {
    i({ snapToGrid: s });
  },
  // Canvas size
  setCanvasSize: (s) => {
    i({ canvasSize: s });
  },
  // Helper methods
  getObject: (s) => t().objects.find((n) => n.id === s),
  getAllObjects: () => t().objects,
  getSelectedObjects: () => {
    const s = t();
    return s.objects.filter((n) => s.selectedObjects.includes(n.id));
  },
  screenToWorld: (s) => {
    const { viewport: n, canvasSize: r } = t();
    return st.screenToWorld(s, n, r);
  },
  worldToScreen: (s) => {
    const { viewport: n, canvasSize: r } = t();
    return st.worldToScreen(s, n, r);
  },
  // Layer management
  bringToFront: (s) => {
    i((n) => {
      const r = Math.max(...n.objects.map((o) => o.zIndex || 0));
      return {
        objects: n.objects.map(
          (o) => o.id === s ? { ...o, zIndex: r + 1 } : o
        )
      };
    });
  },
  sendToBack: (s) => {
    i((n) => {
      const r = Math.min(...n.objects.map((o) => o.zIndex || 0));
      return {
        objects: n.objects.map(
          (o) => o.id === s ? { ...o, zIndex: r - 1 } : o
        )
      };
    });
  },
  bringForward: (s) => {
    i((n) => {
      const r = n.objects.find((a) => a.id === s);
      if (!r) return n;
      const o = n.objects.filter((a) => (a.zIndex || 0) > (r.zIndex || 0));
      if (o.length === 0) return n;
      const c = Math.min(...o.map((a) => a.zIndex || 0));
      return {
        objects: n.objects.map(
          (a) => a.id === s ? { ...a, zIndex: c + 0.1 } : a
        )
      };
    });
  },
  sendBackward: (s) => {
    i((n) => {
      const r = n.objects.find((a) => a.id === s);
      if (!r) return n;
      const o = n.objects.filter((a) => (a.zIndex || 0) < (r.zIndex || 0));
      if (o.length === 0) return n;
      const c = Math.max(...o.map((a) => a.zIndex || 0));
      return {
        objects: n.objects.map(
          (a) => a.id === s ? { ...a, zIndex: c - 0.1 } : a
        )
      };
    });
  },
  // State persistence methods
  clearObjects: () => {
    i({ objects: [], selectedObjects: [] }), re.scheduleSave();
  },
  loadState: () => {
    const s = re.loadState();
    s && i({
      objects: s.objects,
      selectedObjects: s.selectedObjects,
      viewport: s.viewport
    });
  },
  saveState: () => {
    const s = t();
    re.saveState({
      objects: s.objects,
      selectedObjects: s.selectedObjects,
      viewport: s.viewport
    });
  }
})), Jt = () => ({
  addObject: (i) => Ne.getState().addObject(i),
  removeObject: (i) => Ne.getState().removeObject(i),
  updateObject: (i, t) => Ne.getState().updateObject(i, t),
  getObject: (i) => Ne.getState().getObject(i),
  getAllObjects: () => Ne.getState().getAllObjects(),
  screenToWorld: (i) => Ne.getState().screenToWorld(i),
  worldToScreen: (i) => Ne.getState().worldToScreen(i)
}), Qt = () => ({
  getState: () => {
    const i = Ne.getState();
    return {
      viewport: i.viewport,
      objects: i.objects,
      selectedObjects: i.selectedObjects,
      snapToGrid: i.snapToGrid
    };
  },
  setState: (i) => {
    Ne.setState(i);
  },
  subscribe: (i) => Ne.subscribe((t) => {
    i({
      viewport: t.viewport,
      objects: t.objects,
      selectedObjects: t.selectedObjects,
      snapToGrid: t.snapToGrid
    });
  })
}), $t = Lt(null);
function ft() {
  const i = Wt($t);
  if (!i)
    throw new Error("usePluginManager must be used within PluginManagerProvider");
  return i;
}
function es({ children: i }) {
  const [t] = V(() => new Ht()), [s] = V(() => /* @__PURE__ */ new Map()), [n] = V(() => /* @__PURE__ */ new Map()), [r, o] = V(null), c = Re(), a = Re(), d = Re();
  c.current || (c.current = Jt()), a.current || (a.current = Qt()), d.current || (d.current = {
    distance: st.distance,
    slope: st.slope,
    snapToGrid: st.snapToGrid,
    calculateArea: st.calculateArea
  });
  const h = c.current, S = a.current, W = d.current, P = (g) => {
    if (s.has(g.id)) {
      console.warn(`Plugin ${g.id} is already registered`);
      return;
    }
    const f = {
      canvas: h,
      events: t,
      state: S,
      math: W
    };
    s.set(g.id, g), n.set(g.id, f);
    try {
      g.init(f), console.log(`Plugin ${g.id} initialized successfully`);
    } catch (w) {
      console.error(`Failed to initialize plugin ${g.id}:`, w), s.delete(g.id), n.delete(g.id);
    }
  }, y = (g) => {
    var w;
    const f = s.get(g);
    if (f) {
      try {
        (w = f.destroy) == null || w.call(f);
      } catch (G) {
        console.error(`Error destroying plugin ${g}:`, G);
      }
      s.delete(g), n.delete(g), r === g && o(null);
    }
  }, l = () => Array.from(s.values());
  pe(() => {
    t.emit("tool:changed", { previous: null, current: r });
  }, [r, t]), pe(() => {
    const g = (A) => (T) => {
      var B, D, ne, oe, Z, p;
      const k = r ? s.get(r) : null;
      if (k)
        try {
          switch (A) {
            case "pointer:down":
              (B = k.onPointerDown) == null || B.call(k, T);
              break;
            case "pointer:move":
              (D = k.onPointerMove) == null || D.call(k, T);
              break;
            case "pointer:up":
              (ne = k.onPointerUp) == null || ne.call(k, T);
              break;
          }
        } catch (M) {
          console.error(`Error in plugin ${r} handling ${A}:`, M);
        }
      else {
        const M = S.getState().selectedObjects;
        try {
          let K;
          if (M.length === 1) {
            const me = h.getObject(M[0]);
            (me == null ? void 0 : me.type) === "ray" ? K = s.get("ray-tool") : (me == null ? void 0 : me.type) === "rectangle" ? K = s.get("rectangle-tool") : (me == null ? void 0 : me.type) === "circle" ? K = s.get("circle-tool") : (me == null ? void 0 : me.type) === "triangle" ? K = s.get("triangle-tool") : (me == null ? void 0 : me.type) === "function" && (K = s.get("function-tool"));
          }
          if (K)
            switch (A) {
              case "pointer:down":
                (oe = K.onPointerDown) == null || oe.call(K, T);
                break;
              case "pointer:move":
                (Z = K.onPointerMove) == null || Z.call(K, T);
                break;
              case "pointer:up":
                (p = K.onPointerUp) == null || p.call(K, T);
                break;
            }
        } catch (K) {
          console.error(`Error in tool handling ${A} for manipulation:`, K);
        }
      }
    }, f = g("pointer:down"), w = g("pointer:move"), G = g("pointer:up");
    return t.on("pointer:down", f), t.on("pointer:move", w), t.on("pointer:up", G), () => {
      t.off("pointer:down", f), t.off("pointer:move", w), t.off("pointer:up", G);
    };
  }, [r, s, t, S, h]);
  const m = {
    eventBus: t,
    registerPlugin: P,
    unregisterPlugin: y,
    getActivePlugins: l,
    activeTool: r,
    setActiveTool: o
  };
  return /* @__PURE__ */ e.jsx($t.Provider, { value: m, children: i });
}
function ts() {
  const { eventBus: i } = ft();
  return {
    handlePointerDown: (r) => {
      i.emit("pointer:down", r);
    },
    handlePointerMove: (r) => {
      i.emit("pointer:move", r);
    },
    handlePointerUp: (r) => {
      i.emit("pointer:up", r);
    }
  };
}
function ss(i, t, s = {}) {
  const [n, r] = V(null), [o, c] = V(/* @__PURE__ */ new Map()), a = {
    enableGestures: !0,
    touchTargetSize: 44,
    preventScrolling: !0,
    ...s
  };
  pe(() => {
    const g = tt.detectCapabilities();
    r(g);
  }, []);
  const [d, h] = V({
    isGesturing: !1,
    startTime: 0,
    startDistance: 0,
    lastTapTime: 0,
    tapCount: 0,
    initialCenter: null,
    wasRecentlyGesturing: !1
  }), S = Me((g) => {
    const f = Array.from(g.values());
    if (f.length < 2) return 0;
    const w = f[0], G = f[1];
    if (!w || !G) return 0;
    const A = w.x - G.x, T = w.y - G.y;
    return Math.sqrt(A * A + T * T);
  }, []), W = Me((g) => {
    const f = Array.from(g.values());
    if (f.length === 0) return { x: 0, y: 0 };
    const w = f.reduce((G, A) => ({ x: G.x + A.x, y: G.y + A.y }), { x: 0, y: 0 });
    return { x: w.x / f.length, y: w.y / f.length };
  }, []), P = Me((g) => {
    var T;
    if (!i.current) return;
    a.preventScrolling && g.preventDefault();
    const f = i.current.getBoundingClientRect(), w = g.clientX - f.left, G = g.clientY - f.top, A = tt.normalizePointerEvent(g);
    A.x = w, A.y = G, c((k) => {
      const B = new Map(k);
      if (B.set(g.pointerId, A), a.enableGestures && B.size >= 2) {
        const D = S(B), ne = W(B);
        h((oe) => ({
          ...oe,
          isGesturing: !0,
          startTime: g.timeStamp,
          startDistance: D,
          initialCenter: ne,
          wasRecentlyGesturing: !1
        }));
      }
      return B;
    }), i.current.setPointerCapture(g.pointerId), (T = t.onPointerDown) == null || T.call(t, A);
  }, [i, t, a, S]), y = Me((g) => {
    var T;
    if (!i.current) return;
    const f = i.current.getBoundingClientRect(), w = g.clientX - f.left, G = g.clientY - f.top, A = tt.normalizePointerEvent(g);
    A.x = w, A.y = G, c((k) => {
      var D, ne;
      const B = new Map(k);
      if (B.set(g.pointerId, A), a.enableGestures && B.size >= 2) {
        const oe = S(B), Z = W(B);
        if (d.isGesturing && d.startDistance > 0 && d.initialCenter) {
          const p = oe / d.startDistance, M = {
            x: d.initialCenter.x * 0.7 + Z.x * 0.3,
            y: d.initialCenter.y * 0.7 + Z.y * 0.3
          };
          (D = t.onGesture) == null || D.call(t, {
            type: "pinch",
            center: M,
            scale: p,
            touches: B.size
          });
        }
      } else if (!(B.size === 1 && d.wasRecentlyGesturing)) {
        if (B.size === 1 && d.isGesturing) {
          const oe = W(B);
          (ne = t.onGesture) == null || ne.call(t, {
            type: "pan",
            center: oe,
            touches: B.size
          });
        }
      }
      return B;
    }), (T = t.onPointerMove) == null || T.call(t, A);
  }, [t, a, S, W, d]), l = Me((g) => {
    var T;
    if (!i.current) return;
    const f = i.current.getBoundingClientRect(), w = g.clientX - f.left, G = g.clientY - f.top, A = tt.normalizePointerEvent(g);
    A.x = w, A.y = G, c((k) => {
      var D;
      const B = new Map(k);
      if (B.delete(g.pointerId), B.size < 2 && d.isGesturing && (h((ne) => ({
        ...ne,
        isGesturing: !1,
        wasRecentlyGesturing: !0,
        initialCenter: null
      })), setTimeout(() => {
        h((ne) => ({
          ...ne,
          wasRecentlyGesturing: !1
        }));
      }, 100)), a.enableGestures && B.size === 0) {
        const oe = g.timeStamp - d.startTime < 200 && !d.wasRecentlyGesturing, Z = g.timeStamp - d.lastTapTime;
        oe && !d.isGesturing && (Z < 300 ? h((p) => ({ ...p, tapCount: p.tapCount + 1 })) : ((D = t.onGesture) == null || D.call(t, {
          type: "tap",
          center: { x: A.x, y: A.y },
          touches: 1
        }), h((p) => ({
          ...p,
          tapCount: 1,
          lastTapTime: g.timeStamp
        })))), h((p) => ({ ...p, isGesturing: !1 }));
      }
      return B;
    }), i.current && i.current.releasePointerCapture(g.pointerId), (T = t.onPointerUp) == null || T.call(t, A);
  }, [i, t, a, d]), m = Me((g) => {
    var T;
    if (!i.current) return;
    const f = i.current.getBoundingClientRect(), w = g.clientX - f.left, G = g.clientY - f.top, A = tt.normalizePointerEvent(g);
    A.x = w, A.y = G, c((k) => {
      const B = new Map(k);
      return B.delete(g.pointerId), B;
    }), h((k) => ({ ...k, isGesturing: !1 })), (T = t.onPointerCancel) == null || T.call(t, A);
  }, [t]);
  return pe(() => {
    const g = i.current;
    if (!g) return;
    g.addEventListener("pointerdown", P), g.addEventListener("pointermove", y), g.addEventListener("pointerup", l), g.addEventListener("pointercancel", m);
    const f = (w) => w.preventDefault();
    return g.addEventListener("contextmenu", f), () => {
      g.removeEventListener("pointerdown", P), g.removeEventListener("pointermove", y), g.removeEventListener("pointerup", l), g.removeEventListener("pointercancel", m), g.removeEventListener("contextmenu", f);
    };
  }, [i, P, y, l, m]), {
    capabilities: n,
    activePointers: Array.from(o.values()),
    isGesturing: d.isGesturing,
    touchTargetSize: n ? tt.getTouchTargetSize(n.hasTouch ? "touch" : "mouse") : a.touchTargetSize
  };
}
function Bt(i, t = {
  minSpacing: 8,
  maxSpacing: 80,
  labelMinSpacing: 40
}) {
  const s = i.zoom;
  let r = 1, o = r * s;
  for (; o < t.minSpacing && r < 1e4; )
    r *= Tt(r), o = r * s;
  for (; o > t.maxSpacing && r > 1e-4; )
    r /= ns(r), o = r * s;
  let c = r, a = c * s;
  for (; a < t.labelMinSpacing && c < r * 100; )
    c *= Tt(c), a = c * s;
  const d = Math.max(0.1, Math.min(1, (o - t.minSpacing) / (t.maxSpacing - t.minSpacing)));
  return {
    gridSize: r,
    labelStep: c,
    shouldShowGrid: o >= t.minSpacing,
    shouldShowLabels: a >= t.labelMinSpacing,
    opacity: d
  };
}
function Tt(i) {
  if (i < 1)
    return i >= 0.5 ? 2 : i >= 0.2 ? 2.5 : (i >= 0.1, 2);
  if (i < 10)
    return i >= 5 ? 2 : i >= 2 ? 2.5 : (i >= 1, 2);
  {
    const t = Math.pow(10, Math.floor(Math.log10(i))), s = i / t;
    return s >= 5 ? 2 : s >= 2 ? 2.5 : (s >= 1, 2);
  }
}
function ns(i) {
  if (i <= 1)
    return i <= 0.1 || i <= 0.2 ? 2 : i <= 0.5 ? 2.5 : (i <= 1, 2);
  if (i <= 10)
    return i <= 2 ? 2 : i <= 5 ? 2.5 : (i <= 10, 2);
  {
    const t = Math.pow(10, Math.floor(Math.log10(i))), s = i / t;
    return s <= 2 ? 2 : s <= 5 ? 2.5 : (s <= 10, 2);
  }
}
function is(i, t, s, n, r = !0) {
  const { gridSize: o } = s, c = {
    left: i.center.x - t.width / 2 / i.zoom,
    right: i.center.x + t.width / 2 / i.zoom,
    top: i.center.y + t.height / 2 / i.zoom,
    bottom: i.center.y - t.height / 2 / i.zoom
  }, a = [], d = [], h = Math.floor(c.left / o) * o, S = Math.ceil(c.right / o) * o;
  for (let y = h; y <= S; y += o) {
    const l = n({ x: y, y: 0 }).x, m = Math.abs(y) < o / 2, g = Math.abs(y % (o * 5)) < o / 2;
    a.push({ x: l, isAxis: m, isMajor: g, isInteger: !1, value: y });
  }
  if (r && (o >= 2 || o < 1)) {
    const y = Math.floor(c.left), l = Math.ceil(c.right);
    for (let m = y; m <= l; m += 1)
      if (Math.abs(m % o) > 1e-3) {
        const g = n({ x: m, y: 0 }).x, f = Math.abs(m) < 0.5;
        a.push({ x: g, isAxis: f, isMajor: !1, isInteger: !0, value: m });
      }
  }
  const W = Math.floor(c.bottom / o) * o, P = Math.ceil(c.top / o) * o;
  for (let y = W; y <= P; y += o) {
    const l = n({ x: 0, y }).y, m = Math.abs(y) < o / 2, g = Math.abs(y % (o * 5)) < o / 2;
    d.push({ y: l, isAxis: m, isMajor: g, isInteger: !1, value: y });
  }
  if (r && (o >= 2 || o < 1)) {
    const y = Math.floor(c.bottom), l = Math.ceil(c.top);
    for (let m = y; m <= l; m += 1)
      if (Math.abs(m % o) > 1e-3) {
        const g = n({ x: 0, y: m }).y, f = Math.abs(m) < 0.5;
        d.push({ y: g, isAxis: f, isMajor: !1, isInteger: !0, value: m });
      }
  }
  return { verticalLines: a, horizontalLines: d };
}
function je(i, t = 3) {
  if (i == null || isNaN(i))
    return "0";
  if (Number.isInteger(i))
    return i.toString();
  const s = i.toFixed(t);
  return parseFloat(s).toString();
}
function lt(i, t, s) {
  const n = s.x - t.x, r = s.y - t.y, o = Math.sqrt(n * n + r * r);
  if (o === 0) return Math.sqrt((i.x - t.x) ** 2 + (i.y - t.y) ** 2);
  const c = Math.max(0, Math.min(1, ((i.x - t.x) * n + (i.y - t.y) * r) / (o * o))), a = {
    x: t.x + c * n,
    y: t.y + c * r
  };
  return Math.sqrt((i.x - a.x) ** 2 + (i.y - a.y) ** 2);
}
function At(i, t) {
  const [s, n, r] = t, o = (n.y - r.y) * (s.x - r.x) + (r.x - n.x) * (s.y - r.y), c = ((n.y - r.y) * (i.x - r.x) + (r.x - n.x) * (i.y - r.y)) / o, a = ((r.y - s.y) * (i.x - r.x) + (s.x - r.x) * (i.y - r.y)) / o, d = 1 - c - a;
  return c >= 0 && a >= 0 && d >= 0;
}
function Nt(i, t, s) {
  const n = Math.sqrt((i.x - t.x) ** 2 + (i.y - t.y) ** 2);
  return Math.abs(n - s);
}
function H(i, t) {
  return t >= 1 ? i.toFixed(0) : t >= 0.1 ? i.toFixed(1) : t >= 0.01 ? i.toFixed(2) : i.toFixed(3);
}
function nt(i, t) {
  if (t !== "adaptive")
    switch (t) {
      case "whole":
        return 1;
      case "half":
        return 0.5;
      case "quarter":
        return 0.25;
      case "tenth":
        return 0.1;
      default:
        return 1;
    }
  const s = Bt(i, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  });
  return s.gridSize <= 0.1 ? s.gridSize : s.gridSize <= 0.5 ? 0.1 : s.gridSize <= 2 ? 0.25 : 1;
}
const Ot = {
  // Origin line enhancements - enable key features by default
  showEquivalentFractions: !0,
  showLengthMultiples: !0,
  showAreaRectangle: !0,
  showDivisionMultiples: !0,
  showRiseRunTriangle: !0,
  showDistanceMarkers: !0,
  showAngleArc: !1,
  showCoordinateProjections: !0,
  // Circle enhancements
  showTangentLines: !1,
  // Function enhancements
  showFunctionExtensions: !0,
  // Triangle enhancements
  showTriangleAngles: !0,
  showSOHCAHTOA: !1,
  showTrigValues: !1,
  showTriangleClassification: !0,
  showTriangleAltitudes: !1,
  showSpecialTriangles: !0,
  showPythagoreanSquares: !1,
  // Division visualization
  showDivisionAnswer: !0,
  // Grid enhancements
  showLatticePoints: !1,
  showReferenceLineY_equals_X: !0,
  // Rectangle-based educational concepts
  showFactorPairs: !1,
  showCommutativeProperty: !1,
  showDistributiveProperty: !1,
  showPrimeComposite: !1,
  showGCF: !0,
  showLCM: !1,
  // Display settings
  fontScale: 1,
  // Snapping settings
  snapPrecision: "whole",
  // Coordinate system settings
  coordinateSystem: "cartesian",
  showPolarGrid: !1,
  customOrigin: null
}, Le = jt((i) => ({
  ...Ot,
  toggleSetting: (t) => {
    i((s) => ({
      [t]: !s[t]
    })), re.scheduleSave();
  },
  setFontScale: (t) => {
    i({ fontScale: t }), re.scheduleSave();
  },
  setSnapPrecision: (t) => {
    i({ snapPrecision: t }), re.scheduleSave();
  },
  setCoordinateSystem: (t) => {
    i({ coordinateSystem: t }), re.scheduleSave();
  },
  setCustomOrigin: (t) => {
    i({ customOrigin: t }), re.scheduleSave();
  },
  resetToDefaults: () => {
    i(Ot), re.scheduleSave();
  }
}));
function rs({ viewport: i, canvasSize: t, worldToScreen: s, objects: n = [] }) {
  const r = Le(), o = (m) => Math.round(m * r.fontScale), c = Bt(i, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }), { verticalLines: a, horizontalLines: d } = is(
    i,
    t,
    c,
    s,
    !1
    // Never show integer grid lines
  );
  if (!c.shouldShowGrid)
    return null;
  const h = [];
  if (r.coordinateSystem === "polar" || r.coordinateSystem === "both") {
    const m = s({ x: 0, y: 0 }), g = Math.max(
      Math.abs(i.center.x) + t.width / (2 * i.zoom),
      Math.abs(i.center.y) + t.height / (2 * i.zoom)
    );
    for (let f = scaledGridSystem.gridSize; f <= g; f += scaledGridSystem.gridSize) {
      const w = f * i.zoom;
      w >= 10 && h.push(
        /* @__PURE__ */ e.jsx(
          "circle",
          {
            cx: m.x,
            cy: m.y,
            r: w,
            fill: "none",
            stroke: "#9CA3AF",
            strokeWidth: "0.5",
            opacity: 0.4
          },
          `polar-circle-${f}`
        )
      );
    }
    for (let f = 0; f < 360; f += 30) {
      const w = f * Math.PI / 180, G = m.x + g * i.zoom * Math.cos(w), A = m.y - g * i.zoom * Math.sin(w);
      h.push(
        /* @__PURE__ */ e.jsx(
          "line",
          {
            x1: m.x,
            y1: m.y,
            x2: G,
            y2: A,
            stroke: "#9CA3AF",
            strokeWidth: "0.5",
            opacity: 0.3
          },
          `polar-line-${f}`
        )
      );
    }
  }
  const S = [];
  n.forEach((m) => {
    if (m.type === "ray") {
      const { startPoint: g, endPoint: f } = m.properties;
      if (Math.abs(g.x) < 1e-3 && Math.abs(g.y) < 1e-3) {
        const w = f.x - g.x, G = f.y - g.y;
        if (Math.abs(w) > 1e-3) {
          const A = 1 / w;
          if (A > 0 && A <= 1) {
            const T = g.y + A * G, k = s({ x: 1, y: T });
            S.push({ y: T, screenY: k.y });
          }
        }
      }
    }
  });
  const W = a.map((m) => {
    const f = Math.abs(m.value - 1) < 1e-3 && r.showDivisionAnswer, w = m.isAxis ? "#374151" : f ? "#60A5FA" : (
      // Light blue for x=1 when division answer is shown
      m.isMajor ? "#9CA3AF" : "#E5E7EB"
    ), G = m.isAxis ? 2 : f ? 1.5 : m.isMajor ? 1 : 0.5, A = m.isAxis ? 1 : f ? 0.8 : m.isMajor ? 0.6 * c.opacity : 0.3 * c.opacity;
    return /* @__PURE__ */ e.jsx(
      "line",
      {
        x1: m.x,
        y1: 0,
        x2: m.x,
        y2: t.height,
        stroke: w,
        strokeWidth: G,
        opacity: A
      },
      `v${m.value}`
    );
  }), P = d.map((m) => /* @__PURE__ */ e.jsx(
    "line",
    {
      x1: 0,
      y1: m.y,
      x2: t.width,
      y2: m.y,
      stroke: m.isAxis ? "#374151" : m.isMajor ? "#9CA3AF" : "#E5E7EB",
      strokeWidth: m.isAxis ? 2 : m.isMajor ? 1 : 0.5,
      opacity: m.isAxis ? 1 : m.isMajor ? 0.6 * c.opacity : 0.3 * c.opacity
    },
    `h${m.value}`
  )), y = r.showReferenceLineY_equals_X ? (() => {
    const m = {
      left: i.center.x - t.width / 2 / i.zoom,
      right: i.center.x + t.width / 2 / i.zoom,
      top: i.center.y + t.height / 2 / i.zoom,
      bottom: i.center.y - t.height / 2 / i.zoom
    }, g = Math.min(m.left, m.bottom), f = Math.max(m.right, m.top), w = s({ x: g, y: g }), G = s({ x: f, y: f });
    return { lineStart: w, lineEnd: G };
  })() : null, l = r.showLatticePoints ? (() => {
    const m = {
      left: i.center.x - t.width / 2 / i.zoom,
      right: i.center.x + t.width / 2 / i.zoom,
      top: i.center.y + t.height / 2 / i.zoom,
      bottom: i.center.y - t.height / 2 / i.zoom
    }, g = [], f = Math.max(-20, Math.floor(m.left)), w = Math.min(20, Math.ceil(m.right)), G = Math.max(-20, Math.floor(m.bottom)), A = Math.min(20, Math.ceil(m.top)), T = (w - f + 1) * (A - G + 1);
    if (T > 200) {
      const k = Math.ceil(Math.sqrt(T / 200));
      for (let B = f; B <= w; B += k)
        for (let D = G; D <= A; D += k) {
          const ne = s({ x: B, y: D });
          ne.x >= -20 && ne.x <= t.width + 20 && ne.y >= -20 && ne.y <= t.height + 20 && g.push(ne);
        }
    } else
      for (let k = f; k <= w; k++)
        for (let B = G; B <= A; B++) {
          const D = s({ x: k, y: B });
          D.x >= -20 && D.x <= t.width + 20 && D.y >= -20 && D.y <= t.height + 20 && g.push(D);
        }
    return g;
  })() : [];
  return /* @__PURE__ */ e.jsxs("g", { className: "grid", children: [
    (r.coordinateSystem === "polar" || r.coordinateSystem === "both") && /* @__PURE__ */ e.jsx("g", { className: "polar-grid", children: h }),
    (r.coordinateSystem === "cartesian" || r.coordinateSystem === "both") && /* @__PURE__ */ e.jsxs("g", { className: "cartesian-grid", children: [
      W,
      P
    ] }),
    l.map((m, g) => /* @__PURE__ */ e.jsx(
      "circle",
      {
        cx: m.x,
        cy: m.y,
        r: "1.5",
        fill: "#9CA3AF",
        opacity: "0.3"
      },
      `lattice-${g}`
    )),
    y && /* @__PURE__ */ e.jsx(
      "line",
      {
        x1: y.lineStart.x,
        y1: y.lineStart.y,
        x2: y.lineEnd.x,
        y2: y.lineEnd.y,
        stroke: "#A78BFA",
        strokeWidth: "1.5",
        opacity: "0.6",
        strokeDasharray: "5,5"
      }
    ),
    c.shouldShowLabels && /* @__PURE__ */ e.jsxs("g", { className: "labels", fontSize: "12", fill: "#374151", children: [
      a.filter((m) => {
        const g = Math.abs(m.value % c.labelStep) < c.gridSize / 10, f = Math.abs(m.value) >= c.labelStep / 2;
        return g && f;
      }).filter((m, g, f) => !f.slice(0, g).some(
        (w) => Math.abs(w.value - m.value) < 1e-3
      )).map((m) => /* @__PURE__ */ e.jsx(
        "text",
        {
          x: m.x,
          y: s({ x: 0, y: 0 }).y + 20,
          textAnchor: "middle",
          fontSize: o(11),
          fontWeight: "500",
          opacity: Math.max(0.7, c.opacity),
          children: H(m.value, c.gridSize)
        },
        `xlabel${m.value}`
      )),
      d.filter((m) => {
        const g = Math.abs(m.value % c.labelStep) < c.gridSize / 10, f = Math.abs(m.value) >= c.labelStep / 2;
        return g && f;
      }).filter((m, g, f) => !f.slice(0, g).some(
        (w) => Math.abs(w.value - m.value) < 1e-3
      )).map((m) => /* @__PURE__ */ e.jsx(
        "text",
        {
          x: s({ x: 0, y: 0 }).x - 15,
          y: m.y + 4,
          textAnchor: "middle",
          fontSize: o(11),
          fontWeight: "500",
          opacity: Math.max(0.7, c.opacity),
          children: H(m.value, c.gridSize)
        },
        `ylabel${m.value}`
      )),
      /* @__PURE__ */ e.jsxs("g", { children: [
        /* @__PURE__ */ e.jsx(
          "circle",
          {
            cx: s({ x: 0, y: 0 }).x,
            cy: s({ x: 0, y: 0 }).y,
            r: "3",
            fill: "#374151",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "text",
          {
            x: s({ x: 0, y: 0 }).x - 25,
            y: s({ x: 0, y: 0 }).y - 10,
            fontSize: o(11),
            fontWeight: "600",
            fill: "#374151",
            opacity: Math.max(0.8, c.opacity),
            children: "(0,0)"
          }
        )
      ] }),
      r.showDivisionAnswer && S.map((m, g) => {
        const f = s({ x: 1, y: 0 }).x;
        return /* @__PURE__ */ e.jsxs("g", { children: [
          /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: f,
              cy: m.screenY,
              r: "4",
              fill: "white",
              stroke: "#60A5FA",
              strokeWidth: "2",
              opacity: "0.9"
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: f + 15,
              y: m.screenY + 4,
              fontSize: o(10),
              fontWeight: "600",
              fill: "#60A5FA",
              opacity: "0.9",
              children: [
                "y = ",
                m.y.toFixed(2)
              ]
            }
          )
        ] }, `ray-intersection-${g}`);
      })
    ] })
  ] });
}
const gt = [
  { code: "en", name: "English", nativeName: "English", direction: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", direction: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", direction: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", direction: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Português", direction: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", direction: "ltr" },
  { code: "zh", name: "Chinese", nativeName: "中文", direction: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", direction: "rtl" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", direction: "ltr" }
], os = {
  // App name (usually not translated)
  "app.name": "Grix",
  // Toolbar
  "toolbar.build": "Build",
  "toolbar.examples": "Examples",
  // Build tools
  "tools.line": "Line Builder",
  "tools.line.description": "Create and edit lines to explore slopes and fractions",
  "tools.rectangle": "Rectangle Builder",
  "tools.rectangle.description": "Create rectangles to explore area and multiplication",
  "tools.circle": "Circle Builder",
  "tools.circle.description": "Create circles to explore circumference and area",
  "tools.triangle": "Triangle Builder",
  "tools.triangle.description": "Create triangles to explore angles and trigonometry",
  "tools.function": "Function Grapher",
  "tools.function.description": "Create function graphs like parabolas, sine waves, and more",
  // Settings
  "settings.title": "Visualization Settings",
  "settings.resetAll": "Reset All",
  "settings.allSettings": "All Settings",
  // Settings sections
  "settings.sections.originLines": "Origin Lines",
  "settings.sections.originLines.subtitle": "Enhancements for lines from (0,0)",
  "settings.sections.divisionFractions": "Division & Fractions",
  "settings.sections.divisionFractions.subtitle": "Visual fraction and division concepts",
  "settings.sections.gridReference": "Grid & Reference",
  "settings.sections.gridReference.subtitle": "Grid enhancements and reference lines",
  "settings.sections.circlesConcepts": "Circle Concepts",
  "settings.sections.circlesConcepts.subtitle": "Visual features for circles and curves",
  "settings.sections.functionConcepts": "Function Concepts",
  "settings.sections.functionConcepts.subtitle": "Mathematical function visualization features",
  "settings.sections.triangleConcepts": "Triangle Concepts",
  "settings.sections.triangleConcepts.subtitle": "Trigonometry and geometry learning features",
  "settings.sections.rectangleConcepts": "Rectangle Concepts",
  "settings.sections.rectangleConcepts.subtitle": "Educational features for rectangles and areas",
  "settings.sections.display": "Display",
  "settings.sections.display.subtitle": "Adjust visibility for classrooms and large screens",
  // Context menu
  "context.details": "Details",
  "context.delete": "Delete",
  "context.close": "Close",
  "context.expand": "Expand",
  "context.collapse": "Collapse",
  // Object types
  "objects.line": "Line",
  "objects.rectangle": "Rectangle",
  "objects.circle": "Circle",
  "objects.triangle": "Triangle",
  "objects.function": "Function",
  // Mathematical labels
  "math.slope": "slope",
  "math.area": "area",
  "math.radius": "radius",
  "math.diameter": "diameter",
  "math.circumference": "circumference",
  "math.perimeter": "perimeter",
  "math.angle": "angle",
  "math.degrees": "degrees",
  // Action menu
  "actions.title": "Actions & Tools",
  "actions.clearBoard": "Clear Board",
  "actions.clearBoard.description": "Remove all shapes and reset settings",
  "actions.exportSession": "Export Session",
  "actions.exportSession.description": "Save your work as a file",
  "actions.importSession": "Import Session",
  "actions.importSession.description": "Load saved work from file",
  "actions.exportImage": "Export Image",
  "actions.exportImage.description": "Save as PNG (coming soon)",
  // Confirmation dialogs
  "confirm.clearEverything": "Clear Everything?",
  "confirm.clearEverything.message": "This will remove all shapes, reset settings, and clear your saved work. This action cannot be undone.",
  "confirm.cancel": "Cancel",
  "confirm.clearAll": "Clear All",
  // Tutorial
  "tutorial.welcome.title": "Welcome to Grix! 🎯",
  "tutorial.welcome.content": "Grix is a mathematical visualization platform where you can explore concepts like slopes, fractions, multiplication, and more through interactive graphics.",
  "tutorial.examples.title": "Explore Examples 📚",
  "tutorial.examples.content": "Click the 'Examples' button in the toolbar to load pre-made mathematical demonstrations. Perfect for getting started!",
  "tutorial.settings.title": "Customize Visualizations ⚙️",
  "tutorial.settings.content": "Use the 'Settings' button in the bottom-left to enable different mathematical features like equivalent fractions, area calculations, and more.",
  "tutorial.tools.title": "Interactive Tools 🛠️",
  "tutorial.tools.content": "Use the toolbar to draw lines and rectangles. Zoom with Ctrl+scroll wheel, and pan by scrolling. On mobile, use pinch gestures.",
  "tutorial.skip": "Skip Tutorial",
  "tutorial.next": "Next",
  "tutorial.tryExample": "Try an Example!",
  "tutorial.loading": "Loading...",
  "tutorial.step": "Step",
  "tutorial.of": "of",
  // Info modal
  "info.about": "About Grix",
  "info.subtitle": "Mathematical Visualization Playground",
  "info.description": "Grix is a playground-first mathematical grid system that scales from 3rd-grade fractions to professional linear algebra. Explore slopes, areas, trigonometry, functions, and more through interactive visual learning.",
  "info.keyFeatures": "Key Features",
  "info.features.interactive": "Interactive mathematical shapes and functions",
  "info.features.realtime": "Real-time visualization of mathematical concepts",
  "info.features.educational": "Educational features for fractions, geometry, and algebra",
  "info.features.touch": "Touch-friendly interface for tablets and mobile devices",
  "info.features.progressive": "Progressive complexity from elementary to advanced math",
  "info.opensource": "Free & Open Source",
  "info.opensource.description": "Grix is completely free to use and open source under the MIT License. Anyone can contribute, modify, or use it for any purpose including commercial.",
  "info.viewGithub": "View on GitHub",
  "info.contact": "Get in Touch",
  "info.contact.description": "Have questions, suggestions, or want to contribute? We'd love to hear from you!",
  "info.madeWith": "Made with ❤️ for mathematical learning",
  // Zoom controls
  "zoom.zoomIn": "Zoom in (Ctrl+scroll up)",
  "zoom.zoomOut": "Zoom out (Ctrl+scroll down)",
  "zoom.centerView": "Center view (single click) or Reset zoom (double click)",
  "zoom.tip": "Tip:",
  "zoom.tipMessage": "Double-tap this button to reset zoom level too!",
  // Errors
  "error.loadExample": "Failed to load example",
  "error.importFile": "Failed to import state. Please check the file format.",
  "error.readFile": "Failed to read file. Please select a valid Grix export file.",
  // Debug info
  "debug.input": "Input",
  "debug.zoom": "Zoom",
  "debug.center": "Center",
  "debug.tool": "Tool",
  "debug.selected": "Selected",
  "debug.panMode": "Pan Mode",
  "debug.object": "object",
  "debug.objects": "objects",
  // Common
  "common.loading": "Loading...",
  "common.shapes": "shapes",
  "common.shape": "shape",
  "common.onCanvas": "on canvas",
  "common.dismiss": "Dismiss permanently",
  // Special/fallback
  "translation.missing": "Translation needed"
}, Ft = "en";
class as {
  constructor() {
    ee(this, "currentLanguage", Ft);
    ee(this, "translations", /* @__PURE__ */ new Map());
    ee(this, "fallbackTranslations", os);
    ee(this, "isInitialized", !1);
    this.initialize();
  }
  async initialize() {
    try {
      await this.loadLanguage(Ft);
      const t = localStorage.getItem("grix-language");
      if (t && gt.some((s) => s.code === t))
        await this.setLanguage(t);
      else {
        const s = navigator.language.split("-")[0];
        gt.some((n) => n.code === s) && await this.setLanguage(s);
      }
      this.isInitialized = !0, window.dispatchEvent(new CustomEvent("translationsReady"));
    } catch (t) {
      console.error("Failed to initialize translations:", t), this.isInitialized = !0, window.dispatchEvent(new CustomEvent("translationsReady"));
    }
  }
  async loadLanguage(t) {
    try {
      if (this.translations.has(t))
        return !0;
      const s = await fetch(`/locales/${t}.json`);
      if (!s.ok)
        return console.warn(`Translation file for ${t} not found`), !1;
      const n = await s.json();
      return this.translations.set(t, n), !0;
    } catch (s) {
      return console.error(`Failed to load language ${t}:`, s), !1;
    }
  }
  async setLanguage(t) {
    if (await this.loadLanguage(t)) {
      this.currentLanguage = t, localStorage.setItem("grix-language", t);
      const n = gt.find((r) => r.code === t);
      return n && (document.documentElement.dir = n.direction), window.dispatchEvent(new CustomEvent("languageChanged", {
        detail: { language: t }
      })), !0;
    }
    return !1;
  }
  getCurrentLanguage() {
    return this.currentLanguage;
  }
  getAvailableLanguages() {
    return gt;
  }
  translate(t, s) {
    const n = this.translations.get(this.currentLanguage);
    let r = n == null ? void 0 : n[t];
    return r || (r = this.fallbackTranslations[t]), r ? (s && Object.entries(s).forEach(([o, c]) => {
      r = r.replace(`{${o}}`, String(c));
    }), r) : (console.warn(`Missing translation for key: ${t}`), t);
  }
  // Shorthand method
  t(t, s) {
    return this.translate(t, s);
  }
  // Check if a translation exists
  hasTranslation(t) {
    const s = this.translations.get(this.currentLanguage);
    return !!(s != null && s[t] || this.fallbackTranslations[t]);
  }
  // Get all translations for current language (useful for debugging)
  getAllTranslations() {
    return this.translations.get(this.currentLanguage) || this.fallbackTranslations;
  }
}
const pt = new as();
function Ye() {
  const [i, t] = V(pt.getCurrentLanguage()), [, s] = V({});
  pe(() => {
    const c = (d) => {
      t(d.detail.language), s({});
    }, a = () => {
      s({});
    };
    return window.addEventListener("languageChanged", c), window.addEventListener("translationsReady", a), () => {
      window.removeEventListener("languageChanged", c), window.removeEventListener("translationsReady", a);
    };
  }, []);
  const n = Me((c, a) => pt.t(c, a), [i]), r = Me(async (c) => await pt.setLanguage(c), []), o = Me(() => pt.getAvailableLanguages(), []);
  return {
    t: n,
    language: i,
    changeLanguage: r,
    availableLanguages: o()
  };
}
function cs({ viewport: i, onZoomIn: t, onZoomOut: s, onZoomReset: n, onCenterOnly: r }) {
  const { t: o } = Ye(), [c, a] = V(0), d = Re(null), h = () => {
    const S = Date.now();
    S - c < 500 ? (d.current && (clearTimeout(d.current), d.current = null), n()) : d.current = window.setTimeout(() => {
      r(), d.current = null;
    }, 300), a(S);
  };
  return pe(() => () => {
    d.current && clearTimeout(d.current);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-4 right-4 flex flex-col gap-2", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: t,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors",
        title: o("zoom.zoomIn"),
        disabled: i.zoom >= 1e3,
        children: "+"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: s,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors",
        title: o("zoom.zoomOut"),
        disabled: i.zoom <= 0.01,
        children: "−"
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: h,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-600 text-lg transition-colors",
        title: o("zoom.centerView"),
        children: "🏠"
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: `w-12 h-8 border rounded text-xs flex flex-col items-center justify-center transition-colors ${i.zoom < 0.5 ? "bg-red-50 border-red-200 text-red-700" : i.zoom > 100 ? "bg-orange-50 border-orange-200 text-orange-700" : "bg-white/90 border-gray-300 text-gray-600"}`, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "font-semibold", children: [
        i.zoom >= 1 ? Math.round(i.zoom) : i.zoom.toFixed(1),
        "×"
      ] }),
      i.zoom < 0.5 && /* @__PURE__ */ e.jsx("div", { className: "text-[8px] leading-none", children: o("zoom.far") }),
      i.zoom > 100 && /* @__PURE__ */ e.jsx("div", { className: "text-[8px] leading-none", children: o("zoom.close") })
    ] }),
    i.zoom < 0.5 || i.zoom > 100 ? /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => n(),
        className: "w-10 h-6 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded font-medium transition-colors",
        title: o("zoom.centerView"),
        children: o("zoom.fix")
      }
    ) : null
  ] });
}
function ls({
  objects: i,
  viewport: t,
  touchTargetSize: s,
  worldToScreen: n,
  selectedObjects: r = [],
  canvasSize: o
}) {
  const c = Le(), a = (p) => Math.round(p * c.fontScale), d = nt(
    t,
    c.gridScale,
    c.snapPrecision
  ), h = d, [S, W] = V(null), [P, y] = V(null), [l, m] = V(null), [g, f] = V(null), [w, G] = V(null), [A, T] = V(
    null
  ), [k, B] = V(null), [D, ne] = V(
    null
  ), oe = Qe.useRef(null);
  Qe.useEffect(() => {
    const p = (M) => {
      const K = M.target;
      g && !(K != null && K.closest("circle")) && f(null);
    };
    if (g)
      return document.addEventListener("touchstart", p), () => document.removeEventListener("touchstart", p);
  }, [g]), Qe.useEffect(() => () => {
    oe.current && clearTimeout(oe.current);
  }, []);
  const Z = (p) => {
    var K, me;
    const M = r.includes(p.id);
    switch (p.type) {
      case "ray":
        const we = n(p.properties.startPoint), se = n(p.properties.endPoint);
        return /* @__PURE__ */ e.jsxs("g", { children: [
          M && /* @__PURE__ */ e.jsx(
            "line",
            {
              x1: we.x,
              y1: we.y,
              x2: se.x,
              y2: se.y,
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ e.jsx(
            "line",
            {
              x1: we.x,
              y1: we.y,
              x2: se.x,
              y2: se.y,
              stroke: M ? "#1D4ED8" : "#2563eb",
              strokeWidth: M ? 3 : 2
            }
          ),
          c.showCoordinateProjections && Math.abs(p.properties.startPoint.x) < 1e-3 && Math.abs(p.properties.startPoint.y) < 1e-3 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: se.x,
                y1: se.y,
                x2: se.x,
                y2: n({ x: p.properties.endPoint.x, y: 0 }).y,
                stroke: "#9CA3AF",
                strokeWidth: "1",
                strokeDasharray: "2,3",
                opacity: "0.6"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: se.x,
                y1: se.y,
                x2: n({ x: 0, y: p.properties.endPoint.y }).x,
                y2: se.y,
                stroke: "#9CA3AF",
                strokeWidth: "1",
                strokeDasharray: "2,3",
                opacity: "0.6"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: we.x,
                cy: we.y,
                r: s / 4,
                fill: M ? "#1D4ED8" : "#2563eb",
                stroke: M ? "#60A5FA" : "none",
                strokeWidth: M ? 2 : 0,
                style: { cursor: "move" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: we.x,
                cy: we.y,
                r: Math.max(12, s / 2),
                fill: "transparent",
                style: { cursor: "move" },
                onMouseEnter: () => W(`${p.id}-start`),
                onMouseLeave: () => W(null)
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: se.x,
                cy: se.y,
                r: s / 4,
                fill: M ? "#1D4ED8" : "#2563eb",
                stroke: M ? "#60A5FA" : "none",
                strokeWidth: M ? 2 : 0,
                style: { cursor: "move" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: se.x,
                cy: se.y,
                r: Math.max(12, s / 2),
                fill: "transparent",
                style: { cursor: "move" },
                onMouseEnter: () => W(`${p.id}-end`),
                onMouseLeave: () => W(null)
              }
            )
          ] }),
          !(Math.abs(p.properties.startPoint.x) < 1e-3 && Math.abs(p.properties.startPoint.y) < 1e-3) && S === `${p.id}-start` && /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: we.x - 5,
              y: we.y - 10,
              fontSize: a(10),
              fontWeight: "500",
              fill: M ? "#1D4ED8" : "#2563eb",
              textAnchor: "middle",
              opacity: "0.8",
              style: { pointerEvents: "none" },
              children: [
                "(",
                H(p.properties.startPoint.x, h),
                ",",
                " ",
                H(p.properties.startPoint.y, h),
                ")"
              ]
            }
          ),
          S === `${p.id}-end` && /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: Math.abs(p.properties.startPoint.x) < 1e-3 && Math.abs(p.properties.startPoint.y) < 1e-3 ? se.x - 20 : se.x + 5,
              y: (() => {
                const z = Math.abs(p.properties.startPoint.x) < 1e-3 && Math.abs(p.properties.startPoint.y) < 1e-3;
                return se.y - 10;
              })(),
              fontSize: a(10),
              fontWeight: "500",
              fill: M ? "#1D4ED8" : "#2563eb",
              textAnchor: Math.abs(p.properties.startPoint.x) < 1e-3 && Math.abs(p.properties.startPoint.y) < 1e-3 ? "end" : "middle",
              opacity: "0.8",
              style: { pointerEvents: "none" },
              children: [
                "(",
                H(p.properties.endPoint.x, h),
                ",",
                " ",
                H(p.properties.endPoint.y, h),
                ")"
              ]
            }
          ),
          (() => {
            const z = p.properties.endPoint.x - p.properties.startPoint.x;
            p.properties.endPoint.y - p.properties.startPoint.y;
            const u = Math.abs(p.properties.startPoint.x) < 1e-3 && Math.abs(p.properties.startPoint.y) < 1e-3;
            if (Math.abs(z) > 1e-3) {
              const E = se.x, L = se.y;
              if (u) {
                const C = p.properties.endPoint.x, N = p.properties.endPoint.y, x = H(N, h), v = H(C, h);
                return /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "text",
                    {
                      x: E + 15,
                      y: L - 25,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: M ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: x
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "line",
                    {
                      x1: E + 8,
                      y1: L - 19,
                      x2: E + 22,
                      y2: L - 19,
                      stroke: M ? "#1D4ED8" : "#2563eb",
                      strokeWidth: "1",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "text",
                    {
                      x: E + 15,
                      y: L - 9,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: M ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: v
                    }
                  )
                ] });
              } else
                return null;
            }
            return null;
          })(),
          (() => {
            if (!(Math.abs(p.properties.startPoint.x) < 1e-3 && Math.abs(p.properties.startPoint.y) < 1e-3)) return null;
            const u = p.properties.endPoint.x, E = p.properties.endPoint.y;
            if (Math.abs(u) < 1e-3 && Math.abs(E) < 1e-3) return null;
            const L = u, C = E, N = {
              left: t.center.x - o.width / 2 / t.zoom,
              right: t.center.x + o.width / 2 / t.zoom,
              top: t.center.y + o.height / 2 / t.zoom,
              bottom: t.center.y - o.height / 2 / t.zoom
            }, x = Math.max(
              Math.abs(N.left),
              Math.abs(N.right),
              Math.abs(N.top),
              Math.abs(N.bottom)
            ) * 2, v = Math.sqrt(L * L + C * C);
            if (v === 0) return null;
            const j = L / v, F = C / v, O = {
              x: x * j,
              y: x * F
            }, q = n(O), J = [];
            if (Math.abs(u) > 1e-3 && Math.abs(E) > 1e-3) {
              const R = u, I = E;
              for (let _ = 2; _ <= 50; _++) {
                const Q = R * _, ve = I * _, ce = Math.round(Q / d) * d, de = Math.round(ve / d) * d;
                if (Math.abs(Q - ce) < d / 10 && Math.abs(ve - de) < d / 10 && ce > 0 && de > 0 && ce <= Math.min(100, Math.abs(x)) && de <= Math.min(100, Math.abs(x))) {
                  const Pe = n({ x: ce, y: de });
                  Pe.x >= -100 && Pe.x <= o.width + 100 && Pe.y >= -100 && Pe.y <= o.height + 100 && J.push({
                    world: { x: ce, y: de },
                    screen: Pe,
                    fraction: {
                      num: H(de, d),
                      den: H(ce, d)
                    }
                  });
                }
              }
            }
            const Y = Math.sqrt(u * u + E * E), xe = [];
            if (Y > 0 && c.showLengthMultiples)
              for (let R = 2; R <= 5; R++) {
                const I = u * R, _ = E * R, Q = n({
                  x: I,
                  y: _
                });
                Q.x >= -50 && Q.x <= o.width + 50 && Q.y >= -50 && Q.y <= o.height + 50 && xe.push({
                  screen: Q,
                  multiple: R
                });
              }
            return /* @__PURE__ */ e.jsxs("g", { children: [
              c.showEquivalentFractions && /* @__PURE__ */ e.jsx(
                "line",
                {
                  x1: se.x,
                  y1: se.y,
                  x2: q.x,
                  y2: q.y,
                  stroke: M ? "#1D4ED8" : "#2563eb",
                  strokeWidth: "1",
                  opacity: "0.3",
                  strokeDasharray: "3,3"
                }
              ),
              xe.map((R, I) => /* @__PURE__ */ e.jsxs("g", { children: [
                /* @__PURE__ */ e.jsx(
                  "circle",
                  {
                    cx: R.screen.x,
                    cy: R.screen.y,
                    r: "2",
                    fill: M ? "#1D4ED8" : "#2563eb",
                    opacity: "0.4",
                    style: { pointerEvents: "none" }
                  }
                ),
                /* @__PURE__ */ e.jsxs(
                  "text",
                  {
                    x: R.screen.x + 8,
                    y: R.screen.y - 8,
                    fontSize: a(7),
                    fontWeight: "400",
                    fill: M ? "#1D4ED8" : "#2563eb",
                    textAnchor: "start",
                    opacity: "0.5",
                    style: { pointerEvents: "none" },
                    children: [
                      "×",
                      R.multiple
                    ]
                  }
                )
              ] }, `length-${I}`)),
              c.showAreaRectangle && (() => {
                if (u > 0 && E > 0) {
                  const R = n({ x: 0, y: 0 }), I = n({
                    x: u,
                    y: E
                  }), _ = Math.abs(
                    I.x - R.x
                  ), Q = Math.abs(
                    I.y - R.y
                  ), ve = Math.min(
                    R.x,
                    I.x
                  ), ce = Math.min(
                    R.y,
                    I.y
                  ), de = u * E;
                  return /* @__PURE__ */ e.jsxs("g", { children: [
                    /* @__PURE__ */ e.jsx(
                      "rect",
                      {
                        x: ve,
                        y: ce,
                        width: _,
                        height: Q,
                        fill: M ? "#1D4ED8" : "#2563eb",
                        opacity: "0.08",
                        stroke: M ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "0.5",
                        strokeOpacity: "0.15"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: ve + _ / 2,
                        y: ce + 15,
                        fontSize: a(10),
                        fontWeight: "400",
                        fill: M ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.6",
                        children: [
                          H(E, h),
                          " ×",
                          " ",
                          H(u, h),
                          " =",
                          " ",
                          H(de, h)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showDivisionMultiples && c.showDivisionAnswer && (() => {
                if (!(Math.abs(p.properties.startPoint.x) < 1e-3 && Math.abs(p.properties.startPoint.y) < 1e-3) || u <= 0) return null;
                const I = E / u, _ = 0.15, Q = 25;
                if (I < _) return null;
                const ve = n({ x: 0, y: 0 }), ce = n({ x: 1, y: 0 }), de = [], Pe = Math.min(
                  Math.floor(E / I),
                  Q
                );
                for (let Te = 1; Te <= Pe; Te++) {
                  const Fe = Te * I, Ae = n({ x: 0, y: Fe }).y, Ve = Math.abs(Fe - I) < 0.01;
                  if (!c.showAreaRectangle) {
                    const fe = Math.abs(Ae - ve.y) / Te, ke = Math.abs(
                      ce.x - ve.x
                    );
                    de.push(
                      /* @__PURE__ */ e.jsx(
                        "rect",
                        {
                          x: ve.x,
                          y: Ae,
                          width: ke,
                          height: fe,
                          fill: M ? "#1D4ED8" : "#2563eb",
                          opacity: "0.08",
                          stroke: M ? "#1D4ED8" : "#2563eb",
                          strokeWidth: "0.5",
                          strokeOpacity: "0.15"
                        },
                        `division-box-${Te}`
                      )
                    );
                  }
                  de.push(
                    /* @__PURE__ */ e.jsxs("g", { children: [
                      /* @__PURE__ */ e.jsx(
                        "line",
                        {
                          x1: ve.x,
                          y1: Ae,
                          x2: ce.x,
                          y2: Ae,
                          stroke: M ? "#1D4ED8" : "#2563eb",
                          strokeWidth: "1",
                          opacity: "0.3",
                          strokeDasharray: Ve ? "4,2" : "2,2"
                        }
                      ),
                      !Ve && /* @__PURE__ */ e.jsx(
                        "text",
                        {
                          x: ce.x + 8,
                          y: Ae - 5,
                          fontSize: a(8),
                          fontWeight: "400",
                          fill: M ? "#1D4ED8" : "#2563eb",
                          textAnchor: "start",
                          opacity: "0.5",
                          children: je(Fe)
                        }
                      )
                    ] }, `division-marker-${Te}`)
                  );
                }
                return /* @__PURE__ */ e.jsx("g", { children: de });
              })(),
              c.showRiseRunTriangle && (() => {
                if (u > 0 && E > 0) {
                  const R = n({ x: 0, y: 0 }), I = n({ x: u, y: 0 }), _ = n({ x: u, y: E });
                  return /* @__PURE__ */ e.jsxs("g", { children: [
                    /* @__PURE__ */ e.jsx(
                      "path",
                      {
                        d: `M ${R.x},${R.y} L ${I.x},${I.y} L ${_.x},${_.y} Z`,
                        fill: "none",
                        stroke: M ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "1",
                        opacity: "0.4",
                        strokeDasharray: "2,2",
                        style: { pointerEvents: "none" }
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: I.x + 12,
                        y: (I.y + _.y) / 2,
                        fontSize: a(9),
                        fontWeight: "500",
                        fill: M ? "#1D4ED8" : "#2563eb",
                        textAnchor: "start",
                        opacity: "0.7",
                        style: { pointerEvents: "none" },
                        children: [
                          "rise: ",
                          H(E, h)
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: (R.x + I.x) / 2,
                        y: I.y + 10,
                        fontSize: a(9),
                        fontWeight: "500",
                        fill: M ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.7",
                        style: { pointerEvents: "none" },
                        children: [
                          "run: ",
                          H(u, h)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showDistanceMarkers && (() => {
                const R = [], I = Math.sqrt(u * u + E * E);
                if (I > 0) {
                  const _ = n({ x: 0, y: 0 });
                  let Q = Math.atan2(E, u);
                  Q < 0 && (Q = Q + 2 * Math.PI);
                  const ve = [];
                  for (let de = 1; de <= Math.floor(I); de++)
                    ve.push({ radius: de, isUnit: !0 });
                  ve.push({ radius: I, isUnit: !1 }), ve.forEach(({ radius: de, isUnit: Pe }, Te) => {
                    const Fe = de * t.zoom;
                    if (Fe >= 15 && Fe <= 800 && Math.abs(Q) > 0.05) {
                      const Ae = Q > Math.PI ? 1 : 0, fe = `M ${_.x + Fe},${_.y} A ${Fe},${Fe} 0 ${Ae},0 ${_.x + Fe * Math.cos(Q)},${_.y - Fe * Math.sin(Q)}`;
                      R.push(
                        /* @__PURE__ */ e.jsx(
                          "path",
                          {
                            d: fe,
                            fill: "none",
                            stroke: M ? "#1D4ED8" : "#2563eb",
                            strokeWidth: Pe ? "1" : "1.5",
                            opacity: Pe ? "0.3" : "0.6",
                            strokeDasharray: Pe ? "2,2" : "none"
                          },
                          `radial-${p.id}-${de.toFixed(
                            3
                          )}-${Q.toFixed(3)}-${Te}`
                        )
                      );
                    }
                  });
                  const ce = n({
                    x: I,
                    y: 0
                  });
                  R.push(
                    /* @__PURE__ */ e.jsxs("g", { children: [
                      /* @__PURE__ */ e.jsx(
                        "path",
                        {
                          d: `M ${ce.x},${_.y} L ${ce.x - 4},${_.y + 8} L ${ce.x + 4},${_.y + 8} Z`,
                          fill: M ? "#1D4ED8" : "#2563eb",
                          opacity: "0.7"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "text",
                        {
                          x: ce.x + 15,
                          y: _.y - 8,
                          fontSize: a(10),
                          fontWeight: "600",
                          fill: M ? "#1D4ED8" : "#2563eb",
                          textAnchor: "start",
                          opacity: "0.8",
                          children: [
                            "d = ",
                            I.toFixed(3).replace(/\.?0+$/, "")
                          ]
                        }
                      )
                    ] }, `distance-${p.id}`)
                  );
                }
                return /* @__PURE__ */ e.jsx("g", { children: R });
              })(),
              c.showAngleArc && (() => {
                let R = Math.atan2(E, u);
                if (R < 0 && (R = R + 2 * Math.PI), Math.abs(u) > 0.05 || Math.abs(E) > 0.05) {
                  const I = n({ x: 0, y: 0 }), _ = 50, Q = (R * 180 / Math.PI).toFixed(1), ve = R, ce = R > Math.PI ? 1 : 0, de = `M ${I.x + _},${I.y} A ${_},${_} 0 ${ce},0 ${I.x + _ * Math.cos(ve)},${I.y - _ * Math.sin(ve)}`, Pe = R / 2, Te = _ * 0.7, Fe = I.x + Te * Math.cos(Pe), Ae = I.y - Te * Math.sin(Pe);
                  return /* @__PURE__ */ e.jsxs("g", { children: [
                    /* @__PURE__ */ e.jsx(
                      "path",
                      {
                        d: de,
                        fill: "none",
                        stroke: M ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "2",
                        opacity: "0.6"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: Fe,
                        y: Ae,
                        fontSize: a(11),
                        fontWeight: "600",
                        fill: M ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.8",
                        children: [
                          "θ = ",
                          Q,
                          "°"
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showEquivalentFractions && J.map((R, I) => {
                const Q = Math.abs(R.world.x - 1) < 0.1 && c.showDivisionAnswer, ve = Math.abs(R.world.x - u) < 0.1 && Math.abs(R.world.y - E) < 0.1;
                return Q || ve ? null : /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "circle",
                    {
                      cx: R.screen.x,
                      cy: R.screen.y,
                      r: "4",
                      fill: "white",
                      stroke: "#22C55E",
                      strokeWidth: "2",
                      opacity: "0.8",
                      style: { pointerEvents: "none" }
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "text",
                    {
                      x: R.screen.x + 15,
                      y: R.screen.y + 4,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: "#22C55E",
                      textAnchor: "start",
                      opacity: "0.8",
                      style: { pointerEvents: "none" },
                      children: [
                        R.fraction.num,
                        "/",
                        R.fraction.den
                      ]
                    }
                  )
                ] }, `equiv-${I}`);
              })
            ] });
          })()
        ] }, p.id);
      case "rectangle":
        const $ = n({
          x: p.properties.x,
          y: p.properties.y + p.properties.height
        }), ye = p.properties.width * t.zoom, b = p.properties.height * t.zoom, X = { x: p.properties.x, y: p.properties.y }, le = {
          x: p.properties.x + p.properties.width,
          y: p.properties.y
        }, be = {
          x: p.properties.x,
          y: p.properties.y + p.properties.height
        }, ze = {
          x: p.properties.x + p.properties.width,
          y: p.properties.y + p.properties.height
        };
        return /* @__PURE__ */ e.jsxs("g", { children: [
          M && /* @__PURE__ */ e.jsx(
            "rect",
            {
              x: $.x - 3,
              y: $.y - 3,
              width: ye + 6,
              height: b + 6,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 4,
              opacity: 0.5,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "rect",
            {
              x: $.x,
              y: $.y,
              width: ye,
              height: b,
              fill: M ? "rgba(34, 197, 94, 0.3)" : "rgba(34, 197, 94, 0.2)",
              stroke: M ? "#16A34A" : "#22c55e",
              strokeWidth: M ? 3 : 2,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: $.x,
                cy: $.y,
                r: Math.max(6, s / 6),
                fill: M ? "#16A34A" : "#22c55e",
                stroke: M ? "#60A5FA" : "none",
                strokeWidth: M ? 2 : 0,
                style: { cursor: "nw-resize" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: $.x,
                cy: $.y,
                r: s / 2,
                fill: "transparent",
                style: { cursor: "nw-resize" }
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: $.x + ye,
                cy: $.y,
                r: Math.max(6, s / 6),
                fill: M ? "#16A34A" : "#22c55e",
                stroke: M ? "#60A5FA" : "none",
                strokeWidth: M ? 2 : 0,
                style: { cursor: "ne-resize" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: $.x + ye,
                cy: $.y,
                r: s / 2,
                fill: "transparent",
                style: { cursor: "ne-resize" }
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: $.x,
                cy: $.y + b,
                r: Math.max(6, s / 6),
                fill: M ? "#16A34A" : "#22c55e",
                stroke: M ? "#60A5FA" : "none",
                strokeWidth: M ? 2 : 0,
                style: { cursor: "sw-resize" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: $.x,
                cy: $.y + b,
                r: s / 2,
                fill: "transparent",
                style: { cursor: "sw-resize" }
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: $.x + ye,
                cy: $.y + b,
                r: Math.max(6, s / 6),
                fill: M ? "#16A34A" : "#22c55e",
                stroke: M ? "#60A5FA" : "none",
                strokeWidth: M ? 2 : 0,
                style: { cursor: "se-resize" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: $.x + ye,
                cy: $.y + b,
                r: s / 2,
                fill: "transparent",
                style: { cursor: "se-resize" }
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: $.x - 10,
              y: $.y - 5,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                H(be.x, h),
                ",",
                " ",
                H(be.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: $.x + ye + 10,
              y: $.y - 5,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                H(ze.x, h),
                ",",
                " ",
                H(ze.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: $.x - 10,
              y: $.y + b + 15,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                H(X.x, h),
                ",",
                " ",
                H(X.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: $.x + ye + 10,
              y: $.y + b + 15,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                H(le.x, h),
                ",",
                " ",
                H(le.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: $.x + ye / 2,
              y: $.y + b / 2,
              fontSize: a(12),
              fontWeight: "600",
              fill: "#22c55e",
              textAnchor: "middle",
              opacity: "0.9",
              children: [
                H(p.properties.height, h),
                " ×",
                " ",
                H(p.properties.width, h),
                " =",
                " ",
                H(p.properties.area, h)
              ]
            }
          ),
          (() => {
            const z = p.properties.width, u = p.properties.height, E = p.properties.area;
            if (z <= 0 || u <= 0 || z !== Math.floor(z) || u !== Math.floor(u))
              return null;
            const L = [];
            if (c.showFactorPairs && E > 1 && E <= 50) {
              const C = [];
              for (let N = 1; N <= Math.sqrt(E); N++)
                if (E % N === 0) {
                  const x = E / N;
                  (N !== z || x !== u) && C.push({ w: N, h: x });
                }
              C.forEach((N, x) => {
                const v = (x + 1) * (ye + 20), j = {
                  x: $.x + v,
                  y: $.y,
                  width: N.w * t.zoom,
                  height: N.h * t.zoom
                };
                L.push(
                  /* @__PURE__ */ e.jsx(
                    "rect",
                    {
                      x: j.x,
                      y: j.y,
                      width: j.width,
                      height: j.height,
                      fill: "rgba(168, 85, 247, 0.15)",
                      stroke: "#A855F7",
                      strokeWidth: "1",
                      strokeDasharray: "3,3",
                      opacity: "0.7"
                    },
                    `factor-${x}`
                  )
                );
              });
            }
            if (c.showCommutativeProperty && z !== u) {
              const C = {
                x: $.x - b - 30,
                y: $.y,
                width: u * t.zoom,
                height: z * t.zoom
              };
              L.push(
                /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "rect",
                    {
                      x: C.x,
                      y: C.y,
                      width: C.width,
                      height: C.height,
                      fill: "rgba(59, 130, 246, 0.15)",
                      stroke: "#3B82F6",
                      strokeWidth: "1",
                      strokeDasharray: "4,2",
                      opacity: "0.7"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "path",
                    {
                      d: `M ${C.x + C.width + 5},${C.y + C.height / 2} L ${$.x - 5},${$.y + b / 2}`,
                      stroke: "#3B82F6",
                      strokeWidth: "1",
                      fill: "none",
                      markerEnd: "url(#arrowhead)",
                      opacity: "0.6"
                    }
                  )
                ] }, "commutative")
              );
            }
            if (c.showPrimeComposite && E > 1 && E <= 100) {
              const C = E > 1 && ![...Array(Math.floor(Math.sqrt(E)) + 1).keys()].slice(2).some((N) => E % N === 0);
              L.push(
                /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "circle",
                    {
                      cx: $.x + ye + 15,
                      cy: $.y - 15,
                      r: "8",
                      fill: C ? "#10B981" : "#F59E0B",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "text",
                    {
                      x: $.x + ye + 15,
                      y: $.y - 11,
                      fontSize: a(8),
                      fontWeight: "600",
                      fill: "white",
                      textAnchor: "middle",
                      children: C ? "P" : "C"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "text",
                    {
                      x: $.x + ye + 30,
                      y: $.y - 10,
                      fontSize: a(8),
                      fontWeight: "500",
                      fill: C ? "#10B981" : "#F59E0B",
                      textAnchor: "start",
                      opacity: "0.8",
                      children: C ? "Prime" : "Composite"
                    }
                  )
                ] }, "prime-composite")
              );
            }
            if (c.showGCF && z > 1 && u > 1) {
              const C = (x, v) => v === 0 ? x : C(v, x % v), N = C(z, u);
              if (N > 1) {
                const x = N * t.zoom, v = z / N, j = u / N, F = [];
                for (let O = 0; O < v; O++)
                  for (let q = 0; q < j; q++)
                    F.push(
                      /* @__PURE__ */ e.jsx(
                        "rect",
                        {
                          x: $.x + O * x,
                          y: $.y + q * x,
                          width: x,
                          height: x,
                          fill: "none",
                          stroke: "#10B981",
                          strokeWidth: "1.5",
                          opacity: "0.6"
                        },
                        `gcf-${O}-${q}`
                      )
                    );
                L.push(
                  /* @__PURE__ */ e.jsxs("g", { children: [
                    F,
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: $.x + ye / 2,
                        y: $.y - 25,
                        fontSize: a(10),
                        fontWeight: "600",
                        fill: "#10B981",
                        textAnchor: "middle",
                        opacity: "0.9",
                        children: [
                          "GCF(",
                          z,
                          ", ",
                          u,
                          ") = ",
                          N
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: $.x + ye / 2,
                        y: $.y - 10,
                        fontSize: a(8),
                        fontWeight: "500",
                        fill: "#10B981",
                        textAnchor: "middle",
                        opacity: "0.7",
                        children: [
                          j,
                          " × ",
                          v,
                          " squares (side = ",
                          N,
                          ")"
                        ]
                      }
                    )
                  ] }, "gcf")
                );
              }
            }
            if (c.showLCM && z > 1 && u > 1) {
              const C = (v, j) => j === 0 ? v : C(j, v % j), x = ((v, j) => v * j / C(v, j))(z, u);
              if (x > Math.max(z, u) && x <= 100) {
                const v = x * t.zoom, j = x * t.zoom, F = $.x, O = $.y + b - j, q = x / z, J = x / u, Y = [];
                for (let xe = 0; xe < J; xe++)
                  for (let R = 0; R < q; R++) {
                    const I = F + R * (z * t.zoom), _ = O + xe * (u * t.zoom);
                    Y.push(
                      /* @__PURE__ */ e.jsx(
                        "rect",
                        {
                          x: I,
                          y: _,
                          width: z * t.zoom,
                          height: u * t.zoom,
                          fill: "rgba(245, 158, 11, 0.1)",
                          stroke: "#F59E0B",
                          strokeWidth: "1",
                          strokeDasharray: "2,2",
                          opacity: "0.6",
                          pointerEvents: "none"
                        },
                        `shadow-${xe}-${R}`
                      )
                    );
                  }
                L.push(
                  /* @__PURE__ */ e.jsxs("g", { children: [
                    /* @__PURE__ */ e.jsx(
                      "rect",
                      {
                        x: F,
                        y: O,
                        width: v,
                        height: j,
                        fill: "none",
                        stroke: "#F59E0B",
                        strokeWidth: "2",
                        strokeDasharray: "5,5",
                        opacity: "0.8",
                        pointerEvents: "none"
                      }
                    ),
                    Y,
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: F + v / 2,
                        y: O - 15,
                        fontSize: a(10),
                        fontWeight: "600",
                        fill: "#F59E0B",
                        textAnchor: "middle",
                        opacity: "0.9",
                        pointerEvents: "none",
                        children: [
                          "LCM(",
                          z,
                          ", ",
                          u,
                          ") = ",
                          x
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: F + v / 2,
                        y: O - 2,
                        fontSize: a(8),
                        fontWeight: "500",
                        fill: "#F59E0B",
                        textAnchor: "middle",
                        opacity: "0.7",
                        pointerEvents: "none",
                        children: [
                          q,
                          " × ",
                          J,
                          " =",
                          " ",
                          q * J,
                          " rectangles"
                        ]
                      }
                    )
                  ] }, "lcm")
                );
              }
            }
            if (c.showDistributiveProperty && z > 2 && u > 1) {
              const C = Math.floor(z / 2), N = C * t.zoom, x = (z - C) * t.zoom;
              L.push(
                /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "line",
                    {
                      x1: $.x + N,
                      y1: $.y,
                      x2: $.x + N,
                      y2: $.y + b,
                      stroke: "#EF4444",
                      strokeWidth: "2",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "text",
                    {
                      x: $.x + N / 2,
                      y: $.y + b + 20,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: [
                        u,
                        " × ",
                        C,
                        " = ",
                        u * C
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "text",
                    {
                      x: $.x + N + x / 2,
                      y: $.y + b + 20,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: [
                        u,
                        " × ",
                        z - C,
                        " = ",
                        u * (z - C)
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "text",
                    {
                      x: $.x + ye / 2,
                      y: $.y + b + 40,
                      fontSize: a(10),
                      fontWeight: "600",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.9",
                      children: [
                        u,
                        " × (",
                        C,
                        " + ",
                        z - C,
                        ") = ",
                        u * C,
                        " ",
                        "+ ",
                        u * (z - C),
                        " = ",
                        E
                      ]
                    }
                  )
                ] }, "distributive")
              );
            }
            return L;
          })()
        ] }, p.id);
      case "circle":
        const U = n(p.properties.center), Oe = p.properties.radius * t.zoom, $e = c.showTangentLines && (l === p.id && P || g && g.circleId === p.id);
        let ie = null;
        if ($e) {
          let z = null;
          if (g && g.circleId === p.id ? z = g.point : P && l === p.id && (z = {
            x: (P.x - o.width / 2) / t.zoom + t.center.x,
            y: -(P.y - o.height / 2) / t.zoom + t.center.y
          }), z) {
            const u = z.x - p.properties.center.x, E = z.y - p.properties.center.y, L = Math.atan2(E, u), C = {
              x: p.properties.center.x + p.properties.radius * Math.cos(L),
              y: p.properties.center.y + p.properties.radius * Math.sin(L)
            }, N = E / u, x = isFinite(N) && N !== 0 ? -1 / N : null, v = Math.max(o.width, o.height) / t.zoom, j = {
              x: C.x - v * Math.cos(L + Math.PI / 2),
              y: C.y - v * Math.sin(L + Math.PI / 2)
            }, F = {
              x: C.x + v * Math.cos(L + Math.PI / 2),
              y: C.y + v * Math.sin(L + Math.PI / 2)
            };
            ie = {
              point: C,
              start: j,
              end: F,
              slope: x,
              angle: L
            };
          }
        }
        return /* @__PURE__ */ e.jsxs("g", { children: [
          M && /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: U.x,
              cy: U.y,
              r: Oe + 3,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 4,
              opacity: 0.5
            }
          ),
          /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: U.x,
              cy: U.y,
              r: Oe * 1.8,
              fill: "transparent",
              style: { cursor: "pointer" },
              onMouseEnter: () => {
                oe.current && (clearTimeout(oe.current), oe.current = null), m(p.id);
              },
              onMouseLeave: () => {
                oe.current = setTimeout(() => {
                  m(null), y(null);
                }, 100);
              },
              onMouseMove: (z) => {
                var u;
                if (c.showTangentLines && l === p.id) {
                  const E = (u = z.currentTarget.ownerSVGElement) == null ? void 0 : u.getBoundingClientRect();
                  E && y({
                    x: z.clientX - E.left,
                    y: z.clientY - E.top
                  });
                }
              },
              onTouchStart: (z) => {
                var u;
                if (c.showTangentLines) {
                  z.preventDefault();
                  const E = (u = z.currentTarget.ownerSVGElement) == null ? void 0 : u.getBoundingClientRect();
                  if (E && z.touches[0]) {
                    const L = {
                      x: z.touches[0].clientX - E.left,
                      y: z.touches[0].clientY - E.top
                    }, C = {
                      x: (L.x - o.width / 2) / t.zoom + t.center.x,
                      y: -(L.y - o.height / 2) / t.zoom + t.center.y
                    }, N = C.x - p.properties.center.x, v = (C.y - p.properties.center.y) / N, j = isFinite(v) ? -1 / v : null;
                    f({
                      circleId: p.id,
                      point: C,
                      slope: j
                    });
                  }
                }
              },
              onTouchEnd: () => {
                setTimeout(() => f(null), 100);
              }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: U.x,
              cy: U.y,
              r: Oe,
              fill: M ? "rgba(168, 85, 247, 0.15)" : "rgba(168, 85, 247, 0.1)",
              stroke: M ? "#7C3AED" : "#A855F7",
              strokeWidth: M ? 3 : 2,
              style: { cursor: "pointer", pointerEvents: "none" }
            }
          ),
          ie && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: n(ie.start).x,
                y1: n(ie.start).y,
                x2: n(ie.end).x,
                y2: n(ie.end).y,
                stroke: "#EF4444",
                strokeWidth: "2",
                opacity: "0.7",
                strokeDasharray: "4,2"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: n(ie.point).x,
                cy: n(ie.point).y,
                r: "3",
                fill: "#EF4444",
                opacity: "0.8"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: U.x,
                y1: U.y,
                x2: n(ie.point).x,
                y2: n(ie.point).y,
                stroke: "#EF4444",
                strokeWidth: "1",
                opacity: "0.5",
                strokeDasharray: "2,2"
              }
            ),
            ie.slope !== null && isFinite(ie.slope) && /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: n(ie.point).x + 15,
                y: n(ie.point).y - 10,
                fontSize: a(10),
                fontWeight: "500",
                fill: "#EF4444",
                textAnchor: "start",
                opacity: "0.9",
                children: [
                  "slope = ",
                  ie.slope.toFixed(2)
                ]
              }
            ),
            (ie.slope === null || !isFinite(ie.slope)) && /* @__PURE__ */ e.jsx(
              "text",
              {
                x: n(ie.point).x + 15,
                y: n(ie.point).y - 10,
                fontSize: a(10),
                fontWeight: "500",
                fill: "#EF4444",
                textAnchor: "start",
                opacity: "0.9",
                children: "slope = ∞"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: U.x,
              cy: U.y,
              r: s / 6,
              fill: M ? "#7C3AED" : "#A855F7",
              stroke: M ? "#60A5FA" : "none",
              strokeWidth: M ? 2 : 0,
              style: { cursor: "move" }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: U.x + Oe,
              cy: U.y,
              r: s / 6,
              fill: M ? "#7C3AED" : "#A855F7",
              stroke: M ? "#60A5FA" : "none",
              strokeWidth: M ? 2 : 0,
              style: { cursor: "ew-resize" }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "line",
            {
              x1: U.x,
              y1: U.y,
              x2: U.x + Oe,
              y2: U.y,
              stroke: M ? "#7C3AED" : "#A855F7",
              strokeWidth: "1",
              opacity: "0.6",
              strokeDasharray: "2,2"
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: U.x,
              y: U.y - Oe - 25,
              fontSize: a(10),
              fontWeight: "500",
              fill: M ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "r = ",
                je(p.properties.radius)
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: U.x,
              y: U.y - Oe - 15,
              fontSize: a(9),
              fontWeight: "400",
              fill: M ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.7",
              children: [
                "A = ",
                je(p.properties.area)
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: U.x,
              y: U.y - Oe - 5,
              fontSize: a(9),
              fontWeight: "400",
              fill: M ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.7",
              children: [
                "C = ",
                je(p.properties.circumference)
              ]
            }
          )
        ] }, p.id);
      case "triangle":
        const te = p.properties.vertices.map(n), [ue, ge, Se] = te, _e = p.properties.vertices, he = (() => {
          const [z, u, E] = _e, L = Math.sqrt((u.x - E.x) ** 2 + (u.y - E.y) ** 2), C = Math.sqrt((z.x - E.x) ** 2 + (z.y - E.y) ** 2), N = Math.sqrt((z.x - u.x) ** 2 + (z.y - u.y) ** 2), x = Math.acos(
            (C ** 2 + N ** 2 - L ** 2) / (2 * C * N)
          ) * 180 / Math.PI, v = Math.acos(
            (L ** 2 + N ** 2 - C ** 2) / (2 * L * N)
          ) * 180 / Math.PI, j = 180 - x - v, F = 1;
          let O = "scalene", q = !1, J = !1, Y = "";
          Math.abs(x - 90) < F || Math.abs(v - 90) < F || Math.abs(j - 90) < F ? (q = !0, O = "right") : x > 90 || v > 90 || j > 90 ? O = "obtuse" : O = "acute", Math.abs(L - C) < 0.1 && Math.abs(C - N) < 0.1 ? O = "equilateral" : (Math.abs(L - C) < 0.1 || Math.abs(C - N) < 0.1 || Math.abs(L - N) < 0.1) && (O = "isosceles");
          const xe = [x, v, j].sort((R, I) => R - I);
          return Math.abs(xe[0] - 30) < F && Math.abs(xe[1] - 60) < F && Math.abs(xe[2] - 90) < F ? (J = !0, Y = "30-60-90") : Math.abs(xe[0] - 45) < F && Math.abs(xe[1] - 45) < F && Math.abs(xe[2] - 90) < F && (J = !0, Y = "45-45-90"), {
            sideA: L,
            sideB: C,
            sideC: N,
            angleA: x,
            angleB: v,
            angleC: j,
            classification: O,
            isRight: q,
            isSpecial: J,
            specialType: Y,
            area: p.properties.area
          };
        })(), ae = (() => {
          if (!c.showSOHCAHTOA || !he.isRight)
            return null;
          const z = [
            { index: 0, value: he.angleA },
            { index: 1, value: he.angleB },
            { index: 2, value: he.angleC }
          ], u = z.find((v) => Math.abs(v.value - 90) < 1), E = z.filter((v) => v.value < 89);
          if (!u || E.length < 2) return null;
          const L = E.reduce(
            (v, j) => j.value > v.value ? j : v
          ), C = u.index, N = L.index, x = [0, 1, 2].find(
            (v) => v !== C && v !== N
          );
          return {
            referenceAngle: L,
            rightVertex: C,
            refVertex: N,
            thirdVertex: x,
            // Hypotenuse is ALWAYS opposite the right angle
            hypotenuseStart: N,
            hypotenuseEnd: x,
            // Opposite side is opposite the reference angle
            oppositeStart: C,
            oppositeEnd: x,
            // Adjacent side touches reference angle but isn't hypotenuse
            adjacentStart: N,
            adjacentEnd: C
          };
        })();
        return /* @__PURE__ */ e.jsxs("g", { children: [
          c.showSpecialTriangles && he.isSpecial && /* @__PURE__ */ e.jsx(
            "path",
            {
              d: `M ${ue.x},${ue.y} L ${ge.x},${ge.y} L ${Se.x},${Se.y} Z`,
              fill: "rgba(255, 215, 0, 0.15)",
              stroke: "none"
            }
          ),
          M && /* @__PURE__ */ e.jsx(
            "path",
            {
              d: `M ${ue.x},${ue.y} L ${ge.x},${ge.y} L ${Se.x},${Se.y} Z`,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ e.jsx(
            "path",
            {
              d: `M ${ue.x},${ue.y} L ${ge.x},${ge.y} L ${Se.x},${Se.y} Z`,
              fill: M ? "rgba(245, 101, 101, 0.15)" : "rgba(245, 101, 101, 0.1)",
              stroke: M ? "#DC2626" : "#F56565",
              strokeWidth: M ? 3 : 2,
              style: { cursor: "pointer" },
              onMouseEnter: () => {
                c.showTrigValues && G(p.id);
              },
              onMouseLeave: () => {
                G(null), T(null);
              },
              onMouseMove: (z) => {
                var u;
                if (c.showTrigValues && w === p.id) {
                  const E = (u = z.currentTarget.ownerSVGElement) == null ? void 0 : u.getBoundingClientRect();
                  E && T({
                    x: z.clientX - E.left,
                    y: z.clientY - E.top
                  });
                }
              }
            }
          ),
          ae && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: te[ae.referenceAngle.index].x,
                cy: te[ae.referenceAngle.index].y,
                r: "8",
                fill: "rgba(255, 215, 0, 0.3)",
                stroke: "#FFA500",
                strokeWidth: "2"
              }
            ),
            /* @__PURE__ */ e.jsxs("g", { children: [
              /* @__PURE__ */ e.jsx(
                "line",
                {
                  x1: te[ae.hypotenuseStart].x,
                  y1: te[ae.hypotenuseStart].y,
                  x2: te[ae.hypotenuseEnd].x,
                  y2: te[ae.hypotenuseEnd].y,
                  stroke: "#00AA00",
                  strokeWidth: "5",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "text",
                {
                  x: (te[ae.hypotenuseStart].x + te[ae.hypotenuseEnd].x) / 2,
                  y: (te[ae.hypotenuseStart].y + te[ae.hypotenuseEnd].y) / 2 - 15,
                  fontSize: a(11),
                  fontWeight: "700",
                  fill: "#00AA00",
                  textAnchor: "middle",
                  children: "HYPOTENUSE"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "line",
                {
                  x1: te[ae.oppositeStart].x,
                  y1: te[ae.oppositeStart].y,
                  x2: te[ae.oppositeEnd].x,
                  y2: te[ae.oppositeEnd].y,
                  stroke: "#FF0000",
                  strokeWidth: "4",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "text",
                {
                  x: (te[ae.oppositeStart].x + te[ae.oppositeEnd].x) / 2 + 15,
                  y: (te[ae.oppositeStart].y + te[ae.oppositeEnd].y) / 2,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#FF0000",
                  textAnchor: "middle",
                  children: "OPPOSITE"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "line",
                {
                  x1: te[ae.adjacentStart].x,
                  y1: te[ae.adjacentStart].y,
                  x2: te[ae.adjacentEnd].x,
                  y2: te[ae.adjacentEnd].y,
                  stroke: "#0000FF",
                  strokeWidth: "4",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "text",
                {
                  x: (te[ae.adjacentStart].x + te[ae.adjacentEnd].x) / 2,
                  y: (te[ae.adjacentStart].y + te[ae.adjacentEnd].y) / 2 + 20,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#0000FF",
                  textAnchor: "middle",
                  children: "ADJACENT"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: te[ae.refVertex].x,
                  y: te[ae.refVertex].y - 25,
                  fontSize: a(10),
                  fontWeight: "700",
                  fill: "#FFA500",
                  textAnchor: "middle",
                  children: [
                    "Reference Angle:",
                    " ",
                    ae.referenceAngle.value.toFixed(1),
                    "°"
                  ]
                }
              )
            ] })
          ] }),
          c.showPythagoreanSquares && he.isRight && /* @__PURE__ */ e.jsx("g", { children: (() => {
            var We;
            const z = (We = [
              { index: 0, angle: he.angleA },
              { index: 1, angle: he.angleB },
              { index: 2, angle: he.angleC }
            ].find((De) => Math.abs(De.angle - 90) < 1)) == null ? void 0 : We.index;
            if (z === void 0) return null;
            const u = _e[z], E = _e[(z + 1) % 3], L = _e[(z + 2) % 3], C = Math.sqrt(
              (u.x - E.x) ** 2 + (u.y - E.y) ** 2
            ), N = Math.sqrt(
              (u.x - L.x) ** 2 + (u.y - L.y) ** 2
            ), x = Math.sqrt(
              (E.x - L.x) ** 2 + (E.y - L.y) ** 2
            ), v = {
              x: (E.x - u.x) / C,
              y: (E.y - u.y) / C
            }, j = {
              x: (L.x - u.x) / N,
              y: (L.y - u.y) / N
            }, F = {
              x: (L.x - E.x) / x,
              y: (L.y - E.y) / x
            }, O = (De, Be, Ue, He) => {
              const Ke = (ot, St, xt) => (ot.x - xt.x) * (St.y - xt.y) - (St.x - xt.x) * (ot.y - xt.y), et = Ke(De, Be, Ue), rt = Ke(De, Ue, He), Ge = Ke(De, He, Be), ht = et < 0 || rt < 0 || Ge < 0, Ie = et > 0 || rt > 0 || Ge > 0;
              return !(ht && Ie);
            }, q = { x: -v.y, y: v.x }, J = { x: v.y, y: -v.x }, Y = { x: -j.y, y: j.x }, xe = { x: j.y, y: -j.x }, R = { x: -F.y, y: F.x }, I = { x: F.y, y: -F.x }, _ = {
              x: u.x + C * q.x * 0.1,
              y: u.y + C * q.y * 0.1
            };
            u.x + C * J.x * 0.1, u.y + C * J.y * 0.1;
            const Q = O(
              _,
              u,
              E,
              L
            ) ? J : q, ve = {
              x: u.x + N * Y.x * 0.1,
              y: u.y + N * Y.y * 0.1
            };
            u.x + N * xe.x * 0.1, u.y + N * xe.y * 0.1;
            const ce = O(
              ve,
              u,
              E,
              L
            ) ? xe : Y, de = {
              x: (E.x + L.x) / 2,
              y: (E.y + L.y) / 2
            }, Pe = {
              x: de.x + x * R.x * 0.1,
              y: de.y + x * R.y * 0.1
            }, Te = O(
              Pe,
              u,
              E,
              L
            ) ? I : R, Fe = [
              u,
              {
                x: u.x + C * v.x,
                y: u.y + C * v.y
              },
              {
                x: u.x + C * v.x + C * Q.x,
                y: u.y + C * v.y + C * Q.y
              },
              {
                x: u.x + C * Q.x,
                y: u.y + C * Q.y
              }
            ], Ae = [
              u,
              {
                x: u.x + N * j.x,
                y: u.y + N * j.y
              },
              {
                x: u.x + N * j.x + N * ce.x,
                y: u.y + N * j.y + N * ce.y
              },
              {
                x: u.x + N * ce.x,
                y: u.y + N * ce.y
              }
            ], Ve = [
              E,
              L,
              {
                x: L.x + x * Te.x,
                y: L.y + x * Te.y
              },
              {
                x: E.x + x * Te.x,
                y: E.y + x * Te.y
              }
            ], fe = Fe.map(n), ke = Ae.map(n), Ce = Ve.map(n);
            return /* @__PURE__ */ e.jsxs("g", { children: [
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: `M ${fe[0].x},${fe[0].y} L ${fe[1].x},${fe[1].y} L ${fe[2].x},${fe[2].y} L ${fe[3].x},${fe[3].y} Z`,
                  fill: "rgba(59, 130, 246, 0.3)",
                  stroke: "#3B82F6",
                  strokeWidth: "2",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: (fe[0].x + fe[1].x + fe[2].x + fe[3].x) / 4,
                  y: (fe[0].y + fe[1].y + fe[2].y + fe[3].y) / 4,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#1D4ED8",
                  textAnchor: "middle",
                  children: [
                    "a² = ",
                    (C ** 2).toFixed(1)
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: `M ${ke[0].x},${ke[0].y} L ${ke[1].x},${ke[1].y} L ${ke[2].x},${ke[2].y} L ${ke[3].x},${ke[3].y} Z`,
                  fill: "rgba(239, 68, 68, 0.3)",
                  stroke: "#EF4444",
                  strokeWidth: "2",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: (ke[0].x + ke[1].x + ke[2].x + ke[3].x) / 4,
                  y: (ke[0].y + ke[1].y + ke[2].y + ke[3].y) / 4,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#DC2626",
                  textAnchor: "middle",
                  children: [
                    "b² = ",
                    (N ** 2).toFixed(1)
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: `M ${Ce[0].x},${Ce[0].y} L ${Ce[1].x},${Ce[1].y} L ${Ce[2].x},${Ce[2].y} L ${Ce[3].x},${Ce[3].y} Z`,
                  fill: "rgba(34, 197, 94, 0.3)",
                  stroke: "#22C55E",
                  strokeWidth: "2",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: (Ce[0].x + Ce[1].x + Ce[2].x + Ce[3].x) / 4,
                  y: (Ce[0].y + Ce[1].y + Ce[2].y + Ce[3].y) / 4,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#16A34A",
                  textAnchor: "middle",
                  children: [
                    "c² = ",
                    (x ** 2).toFixed(1)
                  ]
                }
              ),
              (() => {
                const De = {
                  x: (ue.x + ge.x + Se.x) / 3,
                  y: (ue.y + ge.y + Se.y) / 3
                }, Be = [
                  ...fe,
                  ...ke,
                  ...Ce
                ], Ue = Math.min(
                  ...Be.map((Ie) => Ie.x)
                ), He = Math.max(
                  ...Be.map((Ie) => Ie.x)
                ), Ke = Math.min(
                  ...Be.map((Ie) => Ie.y)
                ), et = Math.max(
                  ...Be.map((Ie) => Ie.y)
                ), rt = [
                  {
                    x: (Ue + He) / 2,
                    y: et + 40,
                    label: "below"
                  },
                  {
                    x: (Ue + He) / 2,
                    y: Ke - 40,
                    label: "above"
                  },
                  { x: Ue - 80, y: (Ke + et) / 2, label: "left" },
                  {
                    x: He + 80,
                    y: (Ke + et) / 2,
                    label: "right"
                  }
                ];
                let Ge = rt[0], ht = 1 / 0;
                return rt.forEach((Ie) => {
                  const ot = Math.sqrt(
                    (Ie.x - De.x) ** 2 + (Ie.y - De.y) ** 2
                  );
                  ot < ht && (ht = ot, Ge = Ie);
                }), /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "rect",
                    {
                      x: Ge.x - 85,
                      y: Ge.y - 20,
                      width: "170",
                      height: "35",
                      fill: "rgba(255, 255, 255, 0.9)",
                      stroke: "#374151",
                      strokeWidth: "1",
                      rx: "6",
                      opacity: "0.95"
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "text",
                    {
                      x: Ge.x,
                      y: Ge.y - 5,
                      fontSize: a(11),
                      fontWeight: "700",
                      fill: "#374151",
                      textAnchor: "middle",
                      opacity: "1",
                      children: [
                        (C ** 2).toFixed(1),
                        " +",
                        " ",
                        (N ** 2).toFixed(1),
                        " =",
                        " ",
                        (x ** 2).toFixed(1)
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "text",
                    {
                      x: Ge.x,
                      y: Ge.y + 10,
                      fontSize: a(10),
                      fontWeight: "600",
                      fill: "#6B7280",
                      textAnchor: "middle",
                      opacity: "1",
                      children: "a² + b² = c²"
                    }
                  )
                ] });
              })()
            ] });
          })() }),
          c.showTriangleAltitudes && /* @__PURE__ */ e.jsx("g", { children: _e.map((z, u) => {
            const E = _e[(u + 1) % 3], L = _e[(u + 2) % 3], C = L.x - E.x, N = L.y - E.y, x = Math.sqrt(C * C + N * N);
            if (x === 0) return null;
            const v = ((z.x - E.x) * C + (z.y - E.y) * N) / (x * x), j = {
              x: E.x + v * C,
              y: E.y + v * N
            }, F = n(z), O = n(j);
            return /* @__PURE__ */ e.jsxs("g", { children: [
              /* @__PURE__ */ e.jsx(
                "line",
                {
                  x1: F.x,
                  y1: F.y,
                  x2: O.x,
                  y2: O.y,
                  stroke: "#9CA3AF",
                  strokeWidth: "1",
                  strokeDasharray: "3,3",
                  opacity: "0.7"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  cx: O.x,
                  cy: O.y,
                  r: "2",
                  fill: "#9CA3AF",
                  opacity: "0.7"
                }
              )
            ] }, `altitude-${u}`);
          }) }),
          te.map((z, u) => /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: z.x,
              cy: z.y,
              r: s / 6,
              fill: M ? "#DC2626" : "#F56565",
              stroke: M ? "#60A5FA" : "none",
              strokeWidth: M ? 2 : 0,
              style: { cursor: "move" }
            },
            `vertex-${u}`
          )),
          c.showTriangleAngles && /* @__PURE__ */ e.jsxs("g", { children: [
            [
              { vertex: ue, angle: he.angleA, label: "A" },
              { vertex: ge, angle: he.angleB, label: "B" },
              { vertex: Se, angle: he.angleC, label: "C" }
            ].map((z, u) => /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: z.vertex.x + (u === 0 ? -25 : u === 1 ? 25 : 0),
                y: z.vertex.y + (u === 2 ? 25 : -15),
                fontSize: a(9),
                fontWeight: "600",
                fill: M ? "#DC2626" : "#F56565",
                textAnchor: "middle",
                opacity: "0.9",
                children: [
                  z.label,
                  ": ",
                  z.angle.toFixed(1),
                  "°"
                ]
              },
              `angle-${u}`
            )),
            /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: (ue.x + ge.x + Se.x) / 3,
                y: (ue.y + ge.y + Se.y) / 3 + 20,
                fontSize: a(8),
                fontWeight: "400",
                fill: M ? "#DC2626" : "#F56565",
                textAnchor: "middle",
                opacity: "0.6",
                children: [
                  "Sum:",
                  " ",
                  (he.angleA + he.angleB + he.angleC).toFixed(1),
                  "°"
                ]
              }
            )
          ] }),
          c.showTriangleClassification && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "text",
              {
                x: (ue.x + ge.x + Se.x) / 3,
                y: (ue.y + ge.y + Se.y) / 3 - 15,
                fontSize: a(11),
                fontWeight: "600",
                fill: he.isSpecial ? "#FFA500" : M ? "#DC2626" : "#F56565",
                textAnchor: "middle",
                opacity: "0.9",
                children: he.isSpecial ? he.specialType : he.classification
              }
            ),
            he.isSpecial && /* @__PURE__ */ e.jsx(
              "text",
              {
                x: (ue.x + ge.x + Se.x) / 3,
                y: (ue.y + ge.y + Se.y) / 3 - 2,
                fontSize: a(9),
                fontWeight: "500",
                fill: "#FFA500",
                textAnchor: "middle",
                opacity: "0.8",
                children: "Special Triangle!"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: (ue.x + ge.x + Se.x) / 3,
              y: (ue.y + ge.y + Se.y) / 3 + (c.showTriangleAngles ? 35 : 8),
              fontSize: a(10),
              fontWeight: "500",
              fill: M ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "Area = ",
                je(he.area)
              ]
            }
          ),
          c.showTrigValues && w === p.id && A && /* @__PURE__ */ e.jsx("g", { children: (() => {
            const z = [
              { label: "A", value: he.angleA, index: 0 },
              { label: "B", value: he.angleB, index: 1 },
              { label: "C", value: he.angleC, index: 2 }
            ];
            let u = z[0], E = 1 / 0;
            z.forEach((v) => {
              const j = te[v.index], F = Math.sqrt(
                (A.x - j.x) ** 2 + (A.y - j.y) ** 2
              );
              F < E && (E = F, u = v);
            });
            const L = u.value * Math.PI / 180, C = Math.sin(L), N = Math.cos(L), x = Math.tan(L);
            return /* @__PURE__ */ e.jsxs("g", { children: [
              /* @__PURE__ */ e.jsx(
                "rect",
                {
                  x: A.x + 10,
                  y: A.y - 55,
                  width: "140",
                  height: "60",
                  fill: "rgba(255, 255, 255, 0.95)",
                  stroke: "#374151",
                  strokeWidth: "1",
                  rx: "4"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: A.x + 80,
                  y: A.y - 40,
                  fontSize: a(9),
                  fontWeight: "600",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "Angle ",
                    u.label,
                    ":",
                    " ",
                    u.value.toFixed(1),
                    "°"
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: A.x + 80,
                  y: A.y - 28,
                  fontSize: a(8),
                  fontWeight: "500",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "sin = ",
                    C.toFixed(3)
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: A.x + 80,
                  y: A.y - 16,
                  fontSize: a(8),
                  fontWeight: "500",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "cos = ",
                    N.toFixed(3)
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: A.x + 80,
                  y: A.y - 4,
                  fontSize: a(8),
                  fontWeight: "500",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "tan = ",
                    isFinite(x) ? x.toFixed(3) : "∞"
                  ]
                }
              )
            ] });
          })() }),
          /* @__PURE__ */ e.jsx(
            "text",
            {
              x: (ue.x + ge.x) / 2,
              y: (ue.y + ge.y) / 2 - 10,
              fontSize: a(8),
              fontWeight: "400",
              fill: M ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: je(he.sideC)
            }
          ),
          /* @__PURE__ */ e.jsx(
            "text",
            {
              x: (ge.x + Se.x) / 2 + 10,
              y: (ge.y + Se.y) / 2,
              fontSize: a(8),
              fontWeight: "400",
              fill: M ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: je(he.sideA)
            }
          ),
          /* @__PURE__ */ e.jsx(
            "text",
            {
              x: (ue.x + Se.x) / 2 - 10,
              y: (ue.y + Se.y) / 2,
              fontSize: a(8),
              fontWeight: "400",
              fill: M ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: je(he.sideB)
            }
          )
        ] }, p.id);
      case "function":
        const Ee = p, qe = Ee.properties.points;
        if (!qe || qe.length < 2) return null;
        const it = qe.map(n).reduce((z, u, E) => E === 0 ? `M ${u.x} ${u.y}` : `${z} L ${u.x} ${u.y}`, ""), Xe = n({
          x: Ee.properties.domain.min,
          y: ((K = qe[0]) == null ? void 0 : K.y) || 0
        }), dt = n({
          x: Ee.properties.domain.max,
          y: ((me = qe[qe.length - 1]) == null ? void 0 : me.y) || 0
        });
        return /* @__PURE__ */ e.jsxs("g", { children: [
          c.showFunctionExtensions && (() => {
            const z = (C, N) => {
              try {
                const x = C.replace(/\bx\b/g, `(${N})`).replace(/\^/g, "**").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/log/g, "Math.log").replace(/ln/g, "Math.log").replace(/exp/g, "Math.exp").replace(/sqrt/g, "Math.sqrt").replace(/abs/g, "Math.abs").replace(/pi/g, "Math.PI").replace(/e\b/g, "Math.E"), j = new Function("x", `return ${x}`)(N);
                return typeof j == "number" && !isNaN(j) && isFinite(j) ? j : null;
              } catch {
                return null;
              }
            }, u = {
              left: t.center.x - o.width / 2 / t.zoom,
              right: t.center.x + o.width / 2 / t.zoom
            }, E = Ee.properties.equation, L = [];
            if (Ee.properties.domain.min > u.left) {
              const C = [], N = Math.max(
                u.left,
                Ee.properties.domain.min - 6
              ), x = (Ee.properties.domain.min - N) / 15;
              for (let v = N; v <= Ee.properties.domain.min; v += x) {
                const j = z(E, v);
                j !== null && C.push(n({ x: v, y: j }));
              }
              if (C.length > 1) {
                const v = C.reduce(
                  (j, F, O) => j + (O === 0 ? `M ${F.x} ${F.y}` : ` L ${F.x} ${F.y}`),
                  ""
                );
                L.push(v);
              }
            }
            if (Ee.properties.domain.max < u.right) {
              const C = [], N = Math.min(
                u.right,
                Ee.properties.domain.max + 6
              ), x = (N - Ee.properties.domain.max) / 15;
              for (let v = Ee.properties.domain.max; v <= N; v += x) {
                const j = z(E, v);
                j !== null && C.push(n({ x: v, y: j }));
              }
              if (C.length > 1) {
                const v = C.reduce(
                  (j, F, O) => j + (O === 0 ? `M ${F.x} ${F.y}` : ` L ${F.x} ${F.y}`),
                  ""
                );
                L.push(v);
              }
            }
            return /* @__PURE__ */ e.jsx("g", { children: L.map((C, N) => /* @__PURE__ */ e.jsx(
              "path",
              {
                d: C,
                fill: "none",
                stroke: Ee.properties.color || "#2563eb",
                strokeWidth: 1,
                strokeDasharray: "4,4",
                opacity: 0.5,
                strokeLinecap: "round"
              },
              `ext-${N}`
            )) });
          })(),
          M && /* @__PURE__ */ e.jsx(
            "path",
            {
              d: it,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ e.jsx(
            "path",
            {
              d: it,
              fill: "none",
              stroke: "transparent",
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: { pointerEvents: "stroke" },
              onMouseEnter: () => B(p.id),
              onMouseLeave: () => {
                B(null), ne(null);
              },
              onMouseMove: (z) => {
                var u;
                if (k === p.id) {
                  const E = (u = z.currentTarget.ownerSVGElement) == null ? void 0 : u.getBoundingClientRect();
                  if (E) {
                    const L = z.clientX - E.left, C = z.clientY - E.top;
                    t.center.x + (L - o.width / 2) / t.zoom, t.center.y - (C - o.height / 2) / t.zoom;
                    let N = null, x = 1 / 0;
                    for (const v of qe) {
                      const j = n(v), F = Math.sqrt(
                        (L - j.x) ** 2 + (C - j.y) ** 2
                      );
                      F < x && (x = F, N = v);
                    }
                    N && ne(N);
                  }
                }
              }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "path",
            {
              d: it,
              fill: "none",
              stroke: M ? "#1D4ED8" : Ee.properties.color || "#2563eb",
              strokeWidth: M ? 3 : Ee.properties.strokeWidth || 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: { pointerEvents: "none" }
            }
          ),
          M && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: Xe.x,
                cy: Xe.y,
                r: "6",
                fill: "#1D4ED8",
                stroke: "white",
                strokeWidth: "2",
                opacity: 0.8
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: dt.x,
                cy: dt.y,
                r: "6",
                fill: "#1D4ED8",
                stroke: "white",
                strokeWidth: "2",
                opacity: 0.8
              }
            )
          ] }),
          k === p.id && D && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: n(D).x,
                cy: n(D).y,
                r: "4",
                fill: Ee.properties.color || "#2563eb",
                stroke: "white",
                strokeWidth: "2"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "rect",
              {
                x: n(D).x - 70,
                y: n(D).y - 55,
                width: "140",
                height: "45",
                fill: "rgba(255, 255, 255, 0.95)",
                stroke: "#374151",
                strokeWidth: "1",
                rx: "4"
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: n(D).x,
                y: n(D).y - 40,
                fontSize: a(9),
                fontWeight: "600",
                fill: "#374151",
                textAnchor: "middle",
                children: [
                  "(",
                  H(D.x, h),
                  ",",
                  " ",
                  H(D.y, h),
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: n(D).x,
                y: n(D).y - 28,
                fontSize: a(8),
                fontWeight: "500",
                fill: "#374151",
                textAnchor: "middle",
                children: [
                  "f(",
                  H(D.x, h),
                  ") =",
                  " ",
                  H(D.y, h)
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: n(D).x,
                y: n(D).y - 16,
                fontSize: a(8),
                fontWeight: "400",
                fill: "#666",
                textAnchor: "middle",
                children: [
                  "f(x) = ",
                  Ee.properties.equation
                ]
              }
            )
          ] }),
          (M || S === p.id) && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "rect",
              {
                x: Xe.x - 40,
                y: Xe.y - 35,
                width: "80",
                height: "25",
                fill: "rgba(255, 255, 255, 0.95)",
                stroke: "#374151",
                strokeWidth: "1",
                rx: "4"
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: Xe.x,
                y: Xe.y - 20,
                fontSize: a(10),
                fontWeight: "600",
                fill: "#374151",
                textAnchor: "middle",
                children: [
                  "f(x) = ",
                  Ee.properties.equation
                ]
              }
            )
          ] })
        ] }, p.id);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx(
      "marker",
      {
        id: "arrowhead",
        markerWidth: "10",
        markerHeight: "7",
        refX: "9",
        refY: "3.5",
        orient: "auto",
        children: /* @__PURE__ */ e.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: "#3B82F6", opacity: "0.6" })
      }
    ) }),
    /* @__PURE__ */ e.jsx("g", { className: "objects", children: i.map(Z) })
  ] });
}
function ds({ capabilities: i, viewport: t, activeTool: s, selectedObjectsCount: n }) {
  const { t: r } = Ye();
  return i ? /* @__PURE__ */ e.jsxs("div", { className: "absolute top-2 left-2 text-xs text-gray-500 bg-white/80 p-2 rounded shadow-sm", children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      r("debug.input"),
      ": ",
      i.hasTouch ? "👆" : "🖱️",
      " ",
      i.hasPencil ? "✏️" : ""
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      r("debug.zoom"),
      ": ",
      t.zoom >= 1 ? t.zoom.toFixed(1) : t.zoom.toFixed(2),
      "×"
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      r("debug.center"),
      ": (",
      t.center.x.toFixed(1),
      ", ",
      t.center.y.toFixed(1),
      ")"
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      r("debug.tool"),
      ": ",
      s || r("debug.panMode")
    ] }),
    n > 0 && /* @__PURE__ */ e.jsxs("div", { children: [
      r("debug.selected"),
      ": ",
      n,
      " ",
      r(n === 1 ? "debug.object" : "debug.objects")
    ] })
  ] }) : null;
}
function hs({ selectedObject: i, onDelete: t, onUpdate: s, onClose: n }) {
  const r = "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768, [o, c] = V(() => {
    var l;
    const P = re.loadState(), y = (l = P == null ? void 0 : P.uiSettings) == null ? void 0 : l.contextMenuCollapsed;
    if (y !== void 0)
      return y;
    try {
      const m = localStorage.getItem("grix-ui-collapsed");
      if (m !== null)
        return m === "true";
    } catch {
    }
    return r;
  });
  pe(() => {
    var y;
    const P = re.loadState();
    if (((y = P == null ? void 0 : P.uiSettings) == null ? void 0 : y.contextMenuCollapsed) === void 0) {
      const l = r, m = {
        ...P,
        uiSettings: {
          ...P == null ? void 0 : P.uiSettings,
          contextMenuCollapsed: l
        }
      };
      re.saveState(m), re.scheduleSave(), c(l);
    }
  }, [r]);
  const a = () => {
    const P = !o;
    c(P);
    const y = re.loadState() || {}, l = {
      ...y,
      uiSettings: {
        ...y.uiSettings,
        contextMenuCollapsed: P
      }
    };
    re.saveState(l), re.scheduleSave();
    try {
      localStorage.setItem("grix-ui-collapsed", P.toString());
    } catch {
      console.warn("Could not save collapsed state to localStorage");
    }
  };
  if (!i) return null;
  const d = () => {
    t(), n();
  }, h = (P, y) => {
    try {
      const l = (A, T) => {
        try {
          const k = A.replace(/\bx\b/g, `(${T})`).replace(/\^/g, "**").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/log/g, "Math.log").replace(/ln/g, "Math.log").replace(/exp/g, "Math.exp").replace(/sqrt/g, "Math.sqrt").replace(/abs/g, "Math.abs").replace(/pi/g, "Math.PI").replace(/e\b/g, "Math.E"), D = new Function("x", `return ${k}`)(T);
          return typeof D == "number" && !isNaN(D) && isFinite(D) ? D : null;
        } catch {
          return null;
        }
      }, m = (A) => A.includes("sin") || A.includes("cos") || A.includes("tan") ? "trigonometric" : A.includes("exp") || A.includes("e^") ? "exponential" : A.includes("log") || A.includes("ln") ? "logarithmic" : /x\^\d+|x\*\*\d+/.test(A) ? "polynomial" : "custom", g = P.properties.domain, f = P.properties.resolution || 20, w = [], G = (g.max - g.min) / (f * (g.max - g.min));
      for (let A = g.min; A <= g.max; A += G) {
        const T = l(y, A);
        T !== null && w.push({ x: A, y: T });
      }
      return {
        properties: {
          ...P.properties,
          equation: y,
          functionType: m(y),
          points: w
        }
      };
    } catch (l) {
      return console.error("Failed to update function equation:", l), null;
    }
  }, S = () => {
    switch (i.type) {
      case "ray":
        const { startPoint: P, endPoint: y, slope: l } = i.properties, m = Math.abs(P.x) < 1e-3 && Math.abs(P.y) < 1e-3;
        return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Line Details" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Start: (",
              H(P.x, 1),
              ", ",
              H(P.y, 1),
              ")"
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "End: (",
              H(y.x, 1),
              ", ",
              H(y.y, 1),
              ")"
            ] }),
            m && /* @__PURE__ */ e.jsxs("div", { children: [
              "Fraction: ",
              Math.round(y.y),
              "/",
              Math.round(y.x)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Slope: ",
              isFinite(l) ? l.toFixed(3) : "undefined"
            ] })
          ] })
        ] });
      case "rectangle":
        const { x: g, y: f, width: w, height: G, area: A } = i.properties;
        return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Rectangle Details" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Position: (",
              H(g, 1),
              ", ",
              H(f, 1),
              ")"
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Size: ",
              H(w, 1),
              " × ",
              H(G, 1)
            ] })
          ] })
        ] });
      case "circle":
        const { center: T, radius: k, diameter: B, circumference: D, area: ne } = i.properties;
        return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Circle Details" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Center: (",
              H(T.x, 1),
              ", ",
              H(T.y, 1),
              ")"
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Radius: ",
              je(k)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Diameter: ",
              je(B)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Circumference: ",
              je(D)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Area: ",
              je(ne)
            ] })
          ] })
        ] });
      case "triangle":
        const { vertices: oe, sideA: Z, sideB: p, sideC: M, angleA: K, angleB: me, angleC: we, area: se, perimeter: $, type: ye } = i.properties;
        return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Triangle Details" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Type: ",
              ye
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Vertices:" }),
            /* @__PURE__ */ e.jsxs("div", { className: "ml-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                "A: (",
                H(oe[0].x, 1),
                ", ",
                H(oe[0].y, 1),
                ")"
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                "B: (",
                H(oe[1].x, 1),
                ", ",
                H(oe[1].y, 1),
                ")"
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                "C: (",
                H(oe[2].x, 1),
                ", ",
                H(oe[2].y, 1),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Sides: ",
              je(Z),
              ", ",
              je(p),
              ", ",
              je(M)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Angles: ",
              je(K),
              "°, ",
              je(me),
              "°, ",
              je(we),
              "°"
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Area: ",
              je(se)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Perimeter: ",
              je($)
            ] })
          ] })
        ] });
      case "function":
        const b = i, { equation: X, functionType: le, domain: be, points: ze } = b.properties;
        return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Function Details" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Equation: f(x) = ",
              X
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Type: ",
              le
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Domain: [",
              H(be.min, 1),
              ", ",
              H(be.max, 1),
              "]"
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Points: ",
              ze.length
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-2 pt-2 border-t border-gray-100", children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-medium text-gray-700 mb-1", children: "Edit Equation:" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                defaultValue: X,
                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500",
                placeholder: "e.g., x^2, sin(x), 2*x + 1",
                onKeyDown: (U) => {
                  if (U.stopPropagation(), U.key === "Enter") {
                    const Oe = U.target.value.trim();
                    if (Oe && Oe !== X) {
                      const $e = h(b, Oe);
                      $e && s(i.id, { properties: $e.properties });
                    }
                    U.target.blur();
                  } else U.key === "Escape" && U.target.blur();
                },
                onKeyUp: (U) => {
                  U.stopPropagation();
                },
                onKeyPress: (U) => {
                  U.stopPropagation();
                },
                onFocus: (U) => {
                  U.target.select();
                }
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 mt-1", children: "Press Enter to apply. Examples: x^2, sin(x), cos(x), log(x), exp(x)" })
          ] })
        ] });
      default:
        return null;
    }
  }, W = () => {
    switch (i.type) {
      case "ray":
        return `Line: slope ${je(i.properties.slope)}`;
      case "rectangle":
        const P = i;
        return `Rectangle: ${je(P.properties.width)} × ${je(P.properties.height)}`;
      case "circle":
        return `Circle: r=${je(i.properties.radius)}`;
      case "triangle":
        return "Triangle";
      case "function":
        return `Function: ${i.properties.equation}`;
      default:
        return i.type;
    }
  };
  return o ? /* @__PURE__ */ e.jsx("div", { className: "fixed top-20 right-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 px-3 py-2", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: a,
        className: "text-gray-500 hover:text-gray-700",
        title: "Expand",
        children: "▶"
      }
    ),
    /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: W() }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: d,
        className: "ml-2 text-red-600 hover:text-red-700",
        title: "Delete",
        children: "🗑️"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: n,
        className: "text-gray-400 hover:text-gray-600",
        title: "Close",
        children: "✕"
      }
    )
  ] }) }) : /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "fixed top-20 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 min-w-48",
      onKeyDown: (P) => {
        P.stopPropagation();
      },
      onKeyUp: (P) => {
        P.stopPropagation();
      },
      onKeyPress: (P) => {
        P.stopPropagation();
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-semibold text-gray-700", children: [
            i.type.charAt(0).toUpperCase() + i.type.slice(1),
            " Details"
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: a,
              className: "text-gray-400 hover:text-gray-600 text-xs",
              title: "Collapse",
              children: "▼"
            }
          )
        ] }),
        S(),
        /* @__PURE__ */ e.jsxs("div", { className: "mt-3 pt-2 border-t border-gray-100 flex gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: d,
              className: "flex items-center gap-1 px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded transition-colors",
              children: [
                /* @__PURE__ */ e.jsx("span", { children: "🗑️" }),
                "Delete"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: n,
              className: "flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded transition-colors",
              children: [
                /* @__PURE__ */ e.jsx("span", { children: "✕" }),
                "Close"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function xs({ isOpen: i, onToggle: t } = {}) {
  const [s, n] = V(!1), r = i !== void 0 ? i : s, [o, c] = V("all"), a = Re(null), d = Le(), { toggleSetting: h, setFontScale: S, setSnapPrecision: W, setCoordinateSystem: P, resetToDefaults: y } = d, { t: l, language: m, changeLanguage: g, availableLanguages: f } = Ye(), w = () => {
    t ? t() : n(!s);
  };
  pe(() => {
    function k(B) {
      a.current && !a.current.contains(B.target) && (t ? t() : n(!1));
    }
    if (r)
      return document.addEventListener("mousedown", k, !0), document.addEventListener("click", k, !0), () => {
        document.removeEventListener("mousedown", k, !0), document.removeEventListener("click", k, !0);
      };
  }, [r, t]);
  const G = [
    // 1. LINE BUILDER SETTINGS
    {
      title: l("settings.sections.lineBuilder"),
      subtitle: l("settings.sections.lineBuilder.subtitle"),
      settings: [
        {
          key: "showEquivalentFractions",
          label: l("settings.equivalentFractions"),
          description: l("settings.equivalentFractions.description")
        },
        {
          key: "showLengthMultiples",
          label: l("settings.lengthMultiples"),
          description: l("settings.lengthMultiples.description")
        },
        {
          key: "showAreaRectangle",
          label: l("settings.areaRectangle"),
          description: l("settings.areaRectangle.description")
        },
        {
          key: "showRiseRunTriangle",
          label: l("settings.riseRunTriangle"),
          description: l("settings.riseRunTriangle.description")
        },
        {
          key: "showDistanceMarkers",
          label: l("settings.distanceMarkers"),
          description: l("settings.distanceMarkers.description")
        },
        {
          key: "showAngleArc",
          label: l("settings.angleArc"),
          description: l("settings.angleArc.description")
        },
        {
          key: "showCoordinateProjections",
          label: l("settings.coordinateProjections"),
          description: l("settings.coordinateProjections.description")
        },
        {
          key: "showDivisionAnswer",
          label: l("settings.divisionAnswer"),
          description: l("settings.divisionAnswer.description")
        }
      ]
    },
    // 2. RECTANGLE BUILDER SETTINGS
    {
      title: l("settings.sections.rectangleBuilder"),
      subtitle: l("settings.sections.rectangleBuilder.subtitle"),
      settings: [
        {
          key: "showFactorPairs",
          label: l("settings.factorPairs"),
          description: l("settings.factorPairs.description")
        },
        {
          key: "showCommutativeProperty",
          label: l("settings.commutativeProperty"),
          description: l("settings.commutativeProperty.description")
        },
        {
          key: "showDistributiveProperty",
          label: l("settings.distributiveProperty"),
          description: l("settings.distributiveProperty.description")
        },
        {
          key: "showPrimeComposite",
          label: l("settings.primeComposite"),
          description: l("settings.primeComposite.description")
        },
        {
          key: "showGCF",
          label: l("settings.gcf"),
          description: l("settings.gcf.description")
        },
        {
          key: "showLCM",
          label: l("settings.lcm"),
          description: l("settings.lcm.description")
        },
        {
          key: "showDivisionMultiples",
          label: l("settings.divisionMultiples"),
          description: l("settings.divisionMultiples.description")
        }
      ]
    },
    // 3. CIRCLE BUILDER SETTINGS
    {
      title: l("settings.sections.circleBuilder"),
      subtitle: l("settings.sections.circleBuilder.subtitle"),
      settings: [
        {
          key: "showTangentLines",
          label: l("settings.tangentLines"),
          description: l("settings.tangentLines.description")
        }
      ]
    },
    // 4. TRIANGLE BUILDER SETTINGS
    {
      title: l("settings.sections.triangleBuilder"),
      subtitle: l("settings.sections.triangleBuilder.subtitle"),
      settings: [
        {
          key: "showTriangleAngles",
          label: l("settings.triangleAngles"),
          description: l("settings.triangleAngles.description")
        },
        {
          key: "showTriangleClassification",
          label: l("settings.triangleClassification"),
          description: l("settings.triangleClassification.description")
        },
        {
          key: "showSpecialTriangles",
          label: l("settings.specialTriangles"),
          description: l("settings.specialTriangles.description")
        },
        {
          key: "showSOHCAHTOA",
          label: l("settings.sohcahtoa"),
          description: l("settings.sohcahtoa.description")
        },
        {
          key: "showTrigValues",
          label: l("settings.trigValues"),
          description: l("settings.trigValues.description")
        },
        {
          key: "showTriangleAltitudes",
          label: l("settings.triangleAltitudes"),
          description: l("settings.triangleAltitudes.description")
        },
        {
          key: "showPythagoreanSquares",
          label: l("settings.pythagoreanSquares"),
          description: l("settings.pythagoreanSquares.description")
        }
      ]
    },
    // 5. FUNCTION GRAPHER SETTINGS
    {
      title: l("settings.sections.functionGrapher"),
      subtitle: l("settings.sections.functionGrapher.subtitle"),
      settings: [
        {
          key: "showFunctionExtensions",
          label: l("settings.functionExtensions"),
          description: l("settings.functionExtensions.description")
        }
      ]
    },
    // 6. GRID & REFERENCE SETTINGS
    {
      title: l("settings.sections.gridReference"),
      subtitle: l("settings.sections.gridReference.subtitle"),
      settings: [
        {
          key: "showLatticePoints",
          label: l("settings.latticePoints"),
          description: l("settings.latticePoints.description")
        },
        {
          key: "showReferenceLineY_equals_X",
          label: l("settings.referenceLineY_equals_X"),
          description: l("settings.referenceLineY_equals_X.description")
        }
      ]
    },
    // 7. DISPLAY SETTINGS
    {
      title: l("settings.sections.display"),
      subtitle: l("settings.sections.display.subtitle"),
      settings: []
      // No checkboxes for this section
    }
  ], A = o === "all" ? G : G.filter((k) => k.title.toLowerCase().replace(/[^a-z0-9]/g, "-") === o), T = [
    { id: "all", name: l("settings.allSettings") },
    ...G.map((k) => ({
      id: k.title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      name: k.title
    }))
  ];
  return /* @__PURE__ */ e.jsxs("div", { ref: a, className: "relative", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: w,
        className: "w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl flex items-center justify-center",
        title: l("settings.title"),
        children: /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "⚙️" })
      }
    ),
    r && /* @__PURE__ */ e.jsxs("div", { className: "settings-panel absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[28rem] overflow-y-auto z-60", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-semibold text-gray-800", children: l("settings.title") }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: y,
              className: "text-xs text-blue-600 hover:text-blue-800 font-medium",
              children: l("settings.resetAll")
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "px-4 pt-2", children: /* @__PURE__ */ e.jsx(
          "select",
          {
            value: o,
            onChange: (k) => c(k.target.value),
            className: "w-full text-xs border border-gray-200 rounded px-2 py-1 bg-white",
            children: T.map((k) => /* @__PURE__ */ e.jsx("option", { value: k.id, children: k.name }, k.id))
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "settings-scrollable p-4 space-y-5", children: A.map((k, B) => /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: `${B > 0 ? "border-t border-gray-100 pt-4" : ""} mb-3`, children: [
          /* @__PURE__ */ e.jsx("h4", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wide", children: k.title }),
          k.subtitle && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: k.subtitle })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
          k.settings.map((D) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "checkbox",
                checked: d[D.key],
                onChange: () => h(D.key),
                className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: D.label }),
              /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: D.description })
            ] })
          ] }, D.key)),
          k.title === l("settings.sections.display") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: l("settings.fontSize") }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-500 font-mono", children: [
                Math.round(d.fontScale * 100),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-400", children: "A" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "range",
                  min: "0.8",
                  max: "2.0",
                  step: "0.1",
                  value: d.fontScale,
                  onChange: (D) => S(parseFloat(D.target.value)),
                  className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-600", children: "A" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: l("settings.fontSize.description") }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: l("settings.coordinateSystem") }),
              /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [
                { value: "cartesian", label: l("settings.cartesianOnly"), desc: l("settings.cartesianOnly.description") },
                { value: "polar", label: l("settings.polarOnly"), desc: l("settings.polarOnly.description") },
                { value: "both", label: l("settings.bothSystems"), desc: l("settings.bothSystems.description") }
              ].map((D) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "coordinateSystem",
                    value: D.value,
                    checked: d.coordinateSystem === D.value,
                    onChange: (ne) => P(ne.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: D.label }),
                  /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500", children: D.desc })
                ] })
              ] }, D.value)) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: l("settings.snapPrecision") }),
              /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [
                { value: "adaptive", label: l("settings.adaptive"), desc: l("settings.adaptive.description") },
                { value: "whole", label: l("settings.wholeNumbers"), desc: l("settings.wholeNumbers.description") },
                { value: "half", label: l("settings.halfUnits"), desc: l("settings.halfUnits.description") },
                { value: "quarter", label: l("settings.quarterUnits"), desc: l("settings.quarterUnits.description") },
                { value: "tenth", label: l("settings.tenthUnits"), desc: l("settings.tenthUnits.description") }
              ].map((D) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "snapPrecision",
                    value: D.value,
                    checked: d.snapPrecision === D.value,
                    onChange: (ne) => W(ne.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: D.label }),
                  /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500", children: D.desc })
                ] })
              ] }, D.value)) }),
              /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: l("settings.snapPrecision.description") })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: l("settings.language") }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: m,
                  onChange: (D) => g(D.target.value),
                  className: "w-full text-sm border border-gray-200 rounded px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  children: f.map((D) => /* @__PURE__ */ e.jsxs("option", { value: D.code, children: [
                    D.nativeName,
                    " (",
                    D.name,
                    ")"
                  ] }, D.code))
                }
              ),
              /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: l("settings.language.description") })
            ] })
          ] })
        ] })
      ] }, k.title)) }),
      /* @__PURE__ */ e.jsx("div", { className: "sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg", children: /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 text-center", children: l("settings.footerText") }) })
    ] })
  ] });
}
const zt = "grix-tutorial-completed";
function us() {
  const [i, t] = V(!1), [s, n] = V(0);
  pe(() => {
    localStorage.getItem(zt) || t(!0);
  }, []);
  const r = [
    {
      title: "Welcome to Grix! 🎯",
      content: "Grix is a mathematical visualization platform where you can explore concepts like slopes, fractions, multiplication, and more through interactive graphics.",
      highlight: null
    },
    {
      title: "Explore Examples 📚",
      content: "Click the 'Examples' button in the toolbar to load pre-made mathematical demonstrations. Perfect for getting started!",
      highlight: "examples"
    },
    {
      title: "Customize Visualizations ⚙️",
      content: "Use the 'Settings' button in the bottom-left to enable different mathematical features like equivalent fractions, area calculations, and more.",
      highlight: "settings"
    },
    {
      title: "Interactive Tools 🛠️",
      content: "Use the toolbar to draw lines and rectangles. Zoom with Ctrl+scroll wheel, and pan by scrolling. On mobile, use pinch gestures.",
      highlight: "toolbar"
    }
  ], o = () => {
    s < r.length - 1 ? n(s + 1) : a();
  }, c = () => {
    a();
  }, a = () => {
    localStorage.setItem(zt, "true"), t(!1);
  }, d = () => {
    a();
  };
  if (!i) return null;
  const h = r[s], S = s === r.length - 1;
  return /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-md mx-4 p-6 relative", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex gap-2 mb-4", children: r.map((W, P) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `h-2 flex-1 rounded-full ${P <= s ? "bg-blue-500" : "bg-gray-200"}`
        },
        P
      )) }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-3", children: h.title }),
        /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 leading-relaxed mb-6", children: h.content })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: c,
            className: "flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors",
            children: "Skip Tutorial"
          }
        ),
        S ? /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: d,
            className: "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors",
            children: "Get Started!"
          }
        ) : /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: o,
            className: "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors",
            children: "Next"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-center mt-4 text-sm text-gray-500", children: [
        "Step ",
        s + 1,
        " of ",
        r.length
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: c,
          className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100",
          title: "Close tutorial",
          children: "×"
        }
      )
    ] }),
    h.highlight && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      h.highlight === "examples" && /* @__PURE__ */ e.jsx("div", { className: "fixed top-0 right-0 z-[10000] pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 right-2 w-32 h-12 border-4 border-yellow-400 rounded-lg animate-pulse" }) }),
      h.highlight === "settings" && /* @__PURE__ */ e.jsx("div", { className: "fixed bottom-4 left-4 z-[10000] pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "w-12 h-12 border-4 border-yellow-400 rounded-full animate-pulse" }) }),
      h.highlight === "toolbar" && /* @__PURE__ */ e.jsx("div", { className: "fixed top-0 left-0 z-[10000] pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 left-32 w-24 h-12 border-4 border-yellow-400 rounded-lg animate-pulse" }) })
    ] })
  ] });
}
function gs() {
  const { t: i } = Ye(), [t, s] = V(!1), n = Re(null);
  pe(() => {
    function c(a) {
      n.current && !n.current.contains(a.target) && s(!1);
    }
    if (t)
      return document.addEventListener("mousedown", c, !0), document.addEventListener("click", c, !0), document.body.style.overflow = "hidden", () => {
        document.removeEventListener("mousedown", c, !0), document.removeEventListener("click", c, !0), document.body.style.overflow = "unset";
      };
  }, [t]), pe(() => {
    const c = (a) => {
      a.key === "Escape" && s(!1);
    };
    if (t)
      return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [t]);
  const o = ["GetGrix", "@", "gmail", ".", "com"].join("");
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => s(!0),
        className: "fixed bottom-4 right-20 z-40 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl flex items-center justify-center",
        title: i("info.about"),
        children: /* @__PURE__ */ e.jsx("span", { className: "text-sm font-bold text-blue-600", children: "ℹ️" })
      }
    ),
    t && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: n,
        className: "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto info-modal-scrollable",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e.jsxs(
                "svg",
                {
                  width: "32",
                  height: "32",
                  viewBox: "0 0 32 32",
                  className: "flex-shrink-0",
                  children: [
                    /* @__PURE__ */ e.jsx("rect", { width: "32", height: "32", fill: "#2563eb", rx: "6" }),
                    /* @__PURE__ */ e.jsxs("g", { stroke: "#60A5FA", strokeWidth: "0.5", opacity: "0.6", children: [
                      /* @__PURE__ */ e.jsx("line", { x1: "8", y1: "4", x2: "8", y2: "28" }),
                      /* @__PURE__ */ e.jsx("line", { x1: "16", y1: "4", x2: "16", y2: "28" }),
                      /* @__PURE__ */ e.jsx("line", { x1: "24", y1: "4", x2: "24", y2: "28" }),
                      /* @__PURE__ */ e.jsx("line", { x1: "4", y1: "8", x2: "28", y2: "8" }),
                      /* @__PURE__ */ e.jsx("line", { x1: "4", y1: "16", x2: "28", y2: "16" }),
                      /* @__PURE__ */ e.jsx("line", { x1: "4", y1: "24", x2: "28", y2: "24" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("g", { stroke: "#FFFFFF", strokeWidth: "1", children: [
                      /* @__PURE__ */ e.jsx("line", { x1: "16", y1: "4", x2: "16", y2: "28" }),
                      /* @__PURE__ */ e.jsx("line", { x1: "4", y1: "16", x2: "28", y2: "16" })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "line",
                      {
                        x1: "16",
                        y1: "16",
                        x2: "24",
                        y2: "8",
                        stroke: "#22C55E",
                        strokeWidth: "2"
                      }
                    ),
                    /* @__PURE__ */ e.jsx("circle", { cx: "16", cy: "16", r: "2", fill: "#FFFFFF" }),
                    /* @__PURE__ */ e.jsx("circle", { cx: "24", cy: "8", r: "1.5", fill: "#22C55E" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold text-gray-900", children: i("info.about") })
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => s(!1),
                className: "text-gray-400 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ e.jsx("span", { className: "text-xl", children: "✕" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: i("info.subtitle") }),
              /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 leading-relaxed", children: i("info.description") })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h4", { className: "text-md font-semibold text-gray-800 mb-2", children: i("info.keyFeatures") }),
              /* @__PURE__ */ e.jsxs("ul", { className: "text-gray-600 space-y-1 text-sm", children: [
                /* @__PURE__ */ e.jsxs("li", { children: [
                  "• ",
                  i("info.features.interactive")
                ] }),
                /* @__PURE__ */ e.jsxs("li", { children: [
                  "• ",
                  i("info.features.realtime")
                ] }),
                /* @__PURE__ */ e.jsxs("li", { children: [
                  "• ",
                  i("info.features.educational")
                ] }),
                /* @__PURE__ */ e.jsxs("li", { children: [
                  "• ",
                  i("info.features.touch")
                ] }),
                /* @__PURE__ */ e.jsxs("li", { children: [
                  "• ",
                  i("info.features.progressive")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: [
              /* @__PURE__ */ e.jsxs("h4", { className: "text-md font-semibold text-green-800 mb-2", children: [
                "🌟 ",
                i("info.opensource")
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-green-700 text-sm mb-3", children: i("info.opensource.description") }),
              /* @__PURE__ */ e.jsxs(
                "a",
                {
                  href: "https://github.com/getgrix/grix",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium text-sm underline",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { children: "📁" }),
                    i("info.viewGithub")
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h4", { className: "text-md font-semibold text-gray-800 mb-2", children: i("info.contact") }),
              /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 text-sm mb-2", children: i("info.contact.description") }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-500", children: "📧" }),
                /* @__PURE__ */ e.jsx(
                  "span",
                  {
                    className: "text-sm text-blue-600 cursor-pointer hover:text-blue-800",
                    onClick: () => {
                      const c = o;
                      window.location.href = `mailto:${c}?subject=Grix Feedback`;
                    },
                    title: "Click to send email",
                    children: o
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "pt-4 border-t border-gray-200", children: /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 text-center", children: i("info.madeWith") }) })
          ] })
        ]
      }
    ) })
  ] });
}
function ps({ onClearBoard: i, onExportImage: t, onImportState: s, isOpen: n, onToggle: r }) {
  const [o, c] = V(!1), a = n !== void 0 ? n : o, [d, h] = V(!1), [S, W] = V(null), P = Re(null), y = Re(null), { objects: l, clearObjects: m, clearSelection: g } = Ne(), { resetToDefaults: f } = Le(), w = () => {
    r ? r() : c(!o);
  };
  pe(() => {
    function Z(p) {
      P.current && !P.current.contains(p.target) && (r ? r() : c(!1), h(!1));
    }
    if (a)
      return document.addEventListener("mousedown", Z, !0), document.addEventListener("click", Z, !0), document.addEventListener("touchstart", Z, !0), document.addEventListener("touchend", Z, !0), () => {
        document.removeEventListener("mousedown", Z, !0), document.removeEventListener("click", Z, !0), document.removeEventListener("touchstart", Z, !0), document.removeEventListener("touchend", Z, !0);
      };
  }, [a, r]), pe(() => {
    if (a) {
      const Z = re.getStorageInfo();
      W(Z);
    }
  }, [a]);
  const G = () => {
    r ? r() : c(!1);
  }, A = () => {
    m(), g(), f(), re.clearState(), h(!1), G();
  }, T = () => {
    const Z = re.exportState();
    if (Z) {
      const p = new Blob([Z], { type: "application/json" }), M = URL.createObjectURL(p), K = document.createElement("a");
      K.href = M, K.download = `grix-session-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.appendChild(K), K.click(), document.body.removeChild(K), URL.revokeObjectURL(M);
    }
    G();
  }, k = () => {
    var Z;
    (Z = y.current) == null || Z.click();
  }, B = async (Z) => {
    var M;
    const p = (M = Z.target.files) == null ? void 0 : M[0];
    if (p) {
      try {
        const K = await p.text();
        await re.importState(K) ? window.location.reload() : alert("Failed to import state. Please check the file format.");
      } catch {
        alert("Failed to read file. Please select a valid Grix export file.");
      }
      y.current && (y.current.value = ""), G();
    }
  }, D = () => {
    t == null || t(), G();
  }, ne = (Z) => {
    if (Z === 0) return "0 B";
    const p = 1024, M = ["B", "KB", "MB", "GB"], K = Math.floor(Math.log(Z) / Math.log(p));
    return parseFloat((Z / Math.pow(p, K)).toFixed(1)) + " " + M[K];
  }, oe = (Z) => new Date(Z).toLocaleString();
  return d ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: P,
      className: "bg-white rounded-lg shadow-xl max-w-sm w-full p-6",
      children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Clear Everything?" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 mb-6", children: "This will remove all shapes, reset settings, and clear your saved work. This action cannot be undone." }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => h(!1),
              className: "flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: A,
              className: "flex-1 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors",
              children: "Clear All"
            }
          )
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: w,
        className: "w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl flex items-center justify-center",
        title: "Actions & Tools",
        children: /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "⚡" })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: y,
        type: "file",
        accept: ".json",
        onChange: B,
        className: "hidden"
      }
    ),
    a && /* @__PURE__ */ e.jsxs("div", { ref: P, className: "absolute bottom-full left-0 mb-2 z-50 bg-white border border-gray-200 rounded-lg shadow-xl min-w-64 max-w-80", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 border-b border-gray-100", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-semibold text-gray-800", children: "Actions & Tools" }),
        /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
          l.length,
          " shape",
          l.length !== 1 ? "s" : "",
          " on canvas"
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-2", children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => h(!0),
            className: "w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600",
            disabled: l.length === 0,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "🗑️" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium", children: "Clear Board" }),
                /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500", children: "Remove all shapes and reset settings" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "border-t border-gray-100 my-2" }),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: T,
            className: "w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors text-gray-700",
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "📤" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium", children: "Export Session" }),
                /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500", children: "Save your work as a file" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: k,
            className: "w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors text-gray-700",
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "📥" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium", children: "Import Session" }),
                /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500", children: "Load saved work from file" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: D,
            className: "w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors text-gray-400",
            disabled: !0,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "🖼️" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium", children: "Export Image" }),
                /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-400", children: "Save as PNG (coming soon)" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "border-t border-gray-100 my-2" }),
        S && /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-xs font-medium text-gray-700 mb-2", children: "Storage Status" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Session size:" }),
              /* @__PURE__ */ e.jsx("span", { children: ne(S.stateSize) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Total used:" }),
              /* @__PURE__ */ e.jsx("span", { children: ne(S.usedSpace) })
            ] }),
            S.lastSaved && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Last saved:" }),
              /* @__PURE__ */ e.jsx("span", { children: oe(S.lastSaved) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-2 text-xs text-green-600 flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx("span", { children: "●" }),
            /* @__PURE__ */ e.jsx("span", { children: "Auto-save enabled" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "px-4 py-2 bg-gray-50 border-t border-gray-100 rounded-b-lg", children: /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Works offline • Auto-saves your progress" }) })
    ] })
  ] });
}
function ms({ isVisible: i, onDismiss: t }) {
  const { t: s } = Ye(), [n, r] = V(!1);
  pe(() => {
    i && r(!0);
  }, [i]);
  const o = (c = !1) => {
    if (c) {
      const a = re.loadState() || {}, d = {
        ...a,
        tutorialSettings: {
          ...a.tutorialSettings,
          lineToolTutorialSeen: !0
        }
      };
      re.saveState(d), re.scheduleSave();
    }
    r(!1), setTimeout(() => t(), 300);
  };
  return i ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `bg-white rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 transform transition-all duration-300 ${n ? "scale-100 opacity-100" : "scale-95 opacity-0"}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 rounded-t-2xl relative overflow-hidden", children: [
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-black/20" }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-bold mb-1 text-white drop-shadow-sm", children: s("linetool.firstTime.title") }),
            /* @__PURE__ */ e.jsx("p", { className: "text-white/90 text-sm", children: s("linetool.firstTime.subtitle") })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 mb-6", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-start gap-3", children: /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: s("linetool.firstTime.feature1") }) }),
            /* @__PURE__ */ e.jsx("div", { className: "flex items-start gap-3", children: /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: s("linetool.firstTime.feature2") }) }),
            /* @__PURE__ */ e.jsx("div", { className: "flex items-start gap-3", children: /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: s("linetool.firstTime.feature3") }) }),
            /* @__PURE__ */ e.jsx("div", { className: "flex items-start gap-3", children: /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: s("linetool.firstTime.feature4") }) })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "bg-gray-50 rounded-lg p-4 mb-6 border-2 border-dashed border-gray-300", children: /* @__PURE__ */ e.jsxs("div", { className: "relative w-full h-24 flex items-center justify-center", children: [
            /* @__PURE__ */ e.jsxs("svg", { width: "120", height: "80", viewBox: "0 0 120 80", className: "absolute", children: [
              /* @__PURE__ */ e.jsxs("g", { stroke: "#E5E7EB", strokeWidth: "0.5", children: [
                /* @__PURE__ */ e.jsx("line", { x1: "20", y1: "0", x2: "20", y2: "80" }),
                /* @__PURE__ */ e.jsx("line", { x1: "40", y1: "0", x2: "40", y2: "80" }),
                /* @__PURE__ */ e.jsx("line", { x1: "60", y1: "0", x2: "60", y2: "80" }),
                /* @__PURE__ */ e.jsx("line", { x1: "80", y1: "0", x2: "80", y2: "80" }),
                /* @__PURE__ */ e.jsx("line", { x1: "100", y1: "0", x2: "100", y2: "80" }),
                /* @__PURE__ */ e.jsx("line", { x1: "0", y1: "20", x2: "120", y2: "20" }),
                /* @__PURE__ */ e.jsx("line", { x1: "0", y1: "40", x2: "120", y2: "40" }),
                /* @__PURE__ */ e.jsx("line", { x1: "0", y1: "60", x2: "120", y2: "60" })
              ] }),
              /* @__PURE__ */ e.jsxs("g", { stroke: "#374151", strokeWidth: "1", children: [
                /* @__PURE__ */ e.jsx("line", { x1: "60", y1: "0", x2: "60", y2: "80" }),
                /* @__PURE__ */ e.jsx("line", { x1: "0", y1: "40", x2: "120", y2: "40" })
              ] }),
              /* @__PURE__ */ e.jsx("circle", { cx: "60", cy: "40", r: "3", fill: "#EF4444", className: "animate-pulse", children: /* @__PURE__ */ e.jsx("animate", { attributeName: "r", values: "2;4;2", dur: "1.5s", repeatCount: "indefinite" }) }),
              /* @__PURE__ */ e.jsx("line", { x1: "60", y1: "40", x2: "100", y2: "20", stroke: "#2563eb", strokeWidth: "2" }),
              /* @__PURE__ */ e.jsxs("g", { transform: "translate(100, 15)", children: [
                /* @__PURE__ */ e.jsx("rect", { x: "-8", y: "-8", width: "16", height: "16", fill: "#60A5FA", rx: "2", opacity: "0.9" }),
                /* @__PURE__ */ e.jsx("text", { x: "0", y: "-2", fontSize: "6", fill: "white", textAnchor: "middle", children: "3" }),
                /* @__PURE__ */ e.jsx("line", { x1: "-6", y1: "0", x2: "6", y2: "0", stroke: "white", strokeWidth: "0.5" }),
                /* @__PURE__ */ e.jsx("text", { x: "0", y: "6", fontSize: "6", fill: "white", textAnchor: "middle", children: "2" })
              ] }),
              /* @__PURE__ */ e.jsx("circle", { cx: "80", cy: "30", r: "1.5", fill: "#22C55E", opacity: "0.7" }),
              /* @__PURE__ */ e.jsx("circle", { cx: "100", cy: "20", r: "1.5", fill: "#22C55E", opacity: "0.7" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-1 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600 bg-white px-2 py-1 rounded shadow", children: "Start here: (0,0)" }) })
          ] }) }),
          /* @__PURE__ */ e.jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6", children: /* @__PURE__ */ e.jsx("p", { className: "text-blue-800 text-sm font-medium text-center", children: s("linetool.firstTime.hint") }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => o(!1),
                className: "flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors",
                children: s("linetool.firstTime.dismiss")
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => o(!0),
                className: "px-4 py-3 text-gray-500 hover:text-gray-700 text-sm transition-colors",
                children: s("linetool.firstTime.dontShow")
              }
            )
          ] })
        ] })
      ]
    }
  ) }) : null;
}
function fs({ isVisible: i, onDismiss: t }) {
  const { t: s } = Ye(), [n, r] = V(!1);
  pe(() => {
    i && r(!0);
  }, [i]);
  const o = (c = !1) => {
    if (c) {
      const a = re.loadState() || {}, d = {
        ...a,
        tutorialSettings: {
          ...a.tutorialSettings,
          homeButtonTutorialSeen: !0
        }
      };
      re.saveState(d), re.scheduleSave();
    }
    r(!1), setTimeout(() => t(), 300);
  };
  return i ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `bg-white rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 transform transition-all duration-300 ${n ? "scale-100 opacity-100" : "scale-95 opacity-0"}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "bg-gradient-to-r from-green-600 to-blue-700 text-white p-6 rounded-t-2xl relative overflow-hidden", children: [
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-black/20" }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-bold mb-1 text-white drop-shadow-sm", children: s("homebutton.firstTime.title") }),
            /* @__PURE__ */ e.jsx("p", { className: "text-white/90 text-sm", children: s("homebutton.firstTime.subtitle") })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 mb-6", children: [
            /* @__PURE__ */ e.jsx("div", { className: "bg-gray-50 rounded-lg p-4 border border-gray-200", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "👆" }) }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ e.jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: s("homebutton.firstTime.singleClick") }),
                /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600", children: s("homebutton.firstTime.singleClickDesc") })
              ] })
            ] }) }),
            /* @__PURE__ */ e.jsx("div", { className: "bg-gray-50 rounded-lg p-4 border border-gray-200", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "👆👆" }) }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ e.jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: s("homebutton.firstTime.doubleClick") }),
                /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600", children: s("homebutton.firstTime.doubleClickDesc") })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4 mb-6 border-2 border-dashed border-blue-300", children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full h-32 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { width: "200", height: "100", viewBox: "0 0 200 100", className: "absolute", children: [
            /* @__PURE__ */ e.jsxs("g", { stroke: "#E5E7EB", strokeWidth: "0.5", children: [
              [40, 60, 80, 100, 120, 140, 160].map((c) => /* @__PURE__ */ e.jsx("line", { x1: c, y1: "0", x2: c, y2: "100" }, `v${c}`)),
              [20, 40, 60, 80].map((c) => /* @__PURE__ */ e.jsx("line", { x1: "0", y1: c, x2: "200", y2: c }, `h${c}`))
            ] }),
            /* @__PURE__ */ e.jsxs("g", { stroke: "#374151", strokeWidth: "1", children: [
              /* @__PURE__ */ e.jsx("line", { x1: "100", y1: "0", x2: "100", y2: "100" }),
              /* @__PURE__ */ e.jsx("line", { x1: "0", y1: "50", x2: "200", y2: "50" })
            ] }),
            /* @__PURE__ */ e.jsx("circle", { cx: "100", cy: "50", r: "3", fill: "#EF4444" }),
            /* @__PURE__ */ e.jsxs("g", { transform: "translate(170, 70)", children: [
              /* @__PURE__ */ e.jsx("rect", { x: "-15", y: "-15", width: "30", height: "30", rx: "15", fill: "#2563eb", opacity: "0.9" }),
              /* @__PURE__ */ e.jsx("text", { x: "0", y: "5", fontSize: "16", fill: "white", textAnchor: "middle", children: "🏠" }),
              /* @__PURE__ */ e.jsxs("circle", { cx: "0", cy: "0", r: "20", fill: "none", stroke: "#2563eb", strokeWidth: "2", opacity: "0.3", children: [
                /* @__PURE__ */ e.jsx("animate", { attributeName: "r", values: "15;25;15", dur: "2s", repeatCount: "indefinite" }),
                /* @__PURE__ */ e.jsx("animate", { attributeName: "opacity", values: "0.5;0;0.5", dur: "2s", repeatCount: "indefinite" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx(
              "path",
              {
                d: "M 130 50 L 110 50 M 110 50 L 115 45 M 110 50 L 115 55",
                stroke: "#10B981",
                strokeWidth: "2",
                fill: "none",
                strokeDasharray: "2,2",
                opacity: "0.7"
              }
            )
          ] }) }) }),
          /* @__PURE__ */ e.jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6", children: /* @__PURE__ */ e.jsx("p", { className: "text-blue-800 text-sm font-medium text-center", children: s("homebutton.firstTime.hint") }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => o(!1),
                className: "flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors",
                children: s("homebutton.firstTime.dismiss")
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => o(!0),
                className: "px-4 py-3 text-gray-500 hover:text-gray-700 text-sm transition-colors",
                children: s("homebutton.firstTime.dontShow")
              }
            )
          ] })
        ] })
      ]
    }
  ) }) : null;
}
function ys({ onDismiss: i }) {
  const { worldToScreen: t, objects: s } = Ne(), { t: n } = Ye(), [r, o] = V(!0), c = s.find((P) => P.id.startsWith("ray_default_")), a = (c == null ? void 0 : c.properties.endPoint) || { x: 3, y: 9 }, d = { x: a.x, y: a.y - 3 };
  pe(() => {
    const P = setTimeout(() => {
      h();
    }, 3e4), y = () => {
      clearTimeout(P), setTimeout(() => h(), 500);
    };
    return document.addEventListener("mousedown", y), document.addEventListener("touchstart", y), () => {
      clearTimeout(P), document.removeEventListener("mousedown", y), document.removeEventListener("touchstart", y);
    };
  }, []);
  const h = () => {
    o(!1), setTimeout(() => i(), 300);
  };
  if (!r) return null;
  const S = t(d), W = window.innerWidth < 768;
  return c ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 z-40 bg-black bg-opacity-10",
        onClick: h
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed z-45 pointer-events-none",
        style: {
          left: S.x - 16,
          top: S.y - 16
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "relative w-8 h-8", children: [
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-50" }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-1 bg-blue-500 rounded-full animate-ping opacity-40 animation-delay-200" }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-2 bg-white rounded-full border-2 border-blue-600 shadow-lg animate-pulse" }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-3 bg-blue-600 rounded-full" })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `fixed z-50 transition-all duration-300 ease-out ${r ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${W ? "bottom-20 left-4 right-4" : "bottom-8 left-1/2 transform -translate-x-1/2"}`,
        style: W ? {} : { width: "400px", maxWidth: "90vw" },
        children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white border border-blue-200 rounded-xl shadow-lg p-4 relative", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: h,
              className: "absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl leading-none w-6 h-6 flex items-center justify-center",
              children: "×"
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "pr-8", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse" }),
              /* @__PURE__ */ e.jsx("div", { className: "font-semibold text-gray-800 text-sm", children: n("endpoint.tooltip.title") })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "text-gray-600 text-sm leading-relaxed", children: n("endpoint.tooltip.message") })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 pointer-events-none" })
        ] })
      }
    )
  ] }) : null;
}
const Dt = (i, t) => {
  const s = t * Math.PI / 180, n = Math.cos(s), r = Math.sin(s);
  return {
    x: i.x * n - i.y * r,
    y: i.x * r + i.y * n
  };
}, bs = (i, t) => ({
  x: i.x * t,
  y: i.y * t
}), Rt = (i, t) => {
  switch (t) {
    case "x":
      return { x: i.x, y: -i.y };
    case "y":
      return { x: -i.x, y: i.y };
    case "origin":
      return { x: -i.x, y: -i.y };
    default:
      return i;
  }
}, vs = jt((i, t) => ({
  isTransforming: !1,
  activeTransform: null,
  selectedObject: null,
  rotateObject: (s, n, r) => {
    if (!r) {
      console.log(`No canvas API provided for rotation of ${s}`);
      return;
    }
    const o = r.getObject(s);
    if (o) {
      if (o.type === "ray") {
        if (Math.abs(o.properties.startPoint.x) < 1e-3 && Math.abs(o.properties.startPoint.y) < 1e-3) {
          const a = Dt(o.properties.endPoint, n);
          r.updateObject(s, {
            properties: {
              ...o.properties,
              endPoint: a
            }
          });
        }
      } else if (o.type === "rectangle") {
        const c = o.properties.x + o.properties.width / 2, a = o.properties.y + o.properties.height / 2, d = {
          x: o.properties.x - c,
          y: o.properties.y - a
        }, h = Dt(d, n);
        r.updateObject(s, {
          properties: {
            ...o.properties,
            x: h.x + c,
            y: h.y + a
          }
        });
      }
    }
  },
  scaleObject: (s, n, r) => {
    if (!r) {
      console.log(`No canvas API provided for scaling of ${s}`);
      return;
    }
    const o = r.getObject(s);
    if (o)
      if (o.type === "ray") {
        if (Math.abs(o.properties.startPoint.x) < 1e-3 && Math.abs(o.properties.startPoint.y) < 1e-3) {
          const a = bs(o.properties.endPoint, n);
          r.updateObject(s, {
            properties: {
              ...o.properties,
              endPoint: a
            }
          });
        }
      } else o.type === "rectangle" && r.updateObject(s, {
        properties: {
          ...o.properties,
          width: o.properties.width * n,
          height: o.properties.height * n,
          area: o.properties.width * n * o.properties.height * n
        }
      });
  },
  reflectObject: (s, n, r) => {
    if (!r) {
      console.log(`No canvas API provided for reflection of ${s}`);
      return;
    }
    const o = r.getObject(s);
    if (o) {
      if (o.type === "ray") {
        if (Math.abs(o.properties.startPoint.x) < 1e-3 && Math.abs(o.properties.startPoint.y) < 1e-3) {
          const a = Rt(o.properties.endPoint, n);
          r.updateObject(s, {
            properties: {
              ...o.properties,
              endPoint: a
            }
          });
        }
      } else if (o.type === "rectangle") {
        const c = Rt({ x: o.properties.x, y: o.properties.y }, n);
        r.updateObject(s, {
          properties: {
            ...o.properties,
            x: c.x,
            y: c.y
          }
        });
      }
    }
  },
  rotate90: (s, n) => {
    t().rotateObject(s, 90, n);
  },
  rotate180: (s, n) => {
    t().rotateObject(s, 180, n);
  },
  rotate270: (s, n) => {
    t().rotateObject(s, 270, n);
  },
  setActiveTransform: (s) => {
    i({
      activeTransform: s,
      isTransforming: s !== null
    });
  },
  setSelectedObject: (s) => {
    i({ selectedObject: s });
  },
  clearTransform: () => {
    i({
      isTransforming: !1,
      activeTransform: null,
      selectedObject: null
    });
  }
})), Gt = Lt(void 0);
function js({ children: i }) {
  const [t, s] = V(null);
  return /* @__PURE__ */ e.jsx(Gt.Provider, { value: { openMenu: t, setOpenMenu: s }, children: i });
}
function wt() {
  const i = Wt(Gt);
  if (!i)
    throw new Error("useMenuState must be used within a MenuStateProvider");
  return i;
}
function ws({
  width: i = 800,
  height: t = 600,
  className: s = "",
  onObjectInteraction: n
}) {
  const r = Re(null), { openMenu: o, setOpenMenu: c } = wt(), {
    viewport: a,
    setViewport: d,
    objects: h,
    selectedObjects: S,
    snapToGrid: W,
    canvasSize: P,
    setCanvasSize: y,
    removeObject: l,
    clearSelection: m,
    selectObject: g,
    screenToWorld: f,
    worldToScreen: w,
    getObject: G,
    updateObject: A
  } = Ne(), T = ts(), { activeTool: k, setActiveTool: B, eventBus: D } = ft(), { rotate90: ne, rotate180: oe, rotate270: Z, scaleObject: p, setSelectedObject: M } = vs(), [K, me] = V(!1);
  pe(() => {
    const x = () => {
      const F = localStorage.getItem("grix-show-endpoint-tooltip"), O = localStorage.getItem("grix-tutorial-completed");
      return F === "true" && O === "true" ? setTimeout(() => {
        me(!0);
      }, 1e3) : null;
    }, v = x(), j = (F) => {
      if (F.key === "grix-tutorial-completed") {
        const O = x();
        return v && clearTimeout(v), O;
      }
    };
    return window.addEventListener("storage", j), () => {
      v && clearTimeout(v), window.removeEventListener("storage", j);
    };
  }, []), pe(() => {
    y({ width: i, height: t });
  }, [i, t, y]);
  const we = Re({
    isPanning: !1,
    startPoint: { x: 0, y: 0 },
    startCenter: { x: 0, y: 0 }
  }), se = Re({
    isDown: !1,
    startPoint: { x: 0, y: 0 },
    hasMoved: !1,
    dragThreshold: 5,
    // pixels
    pendingSelection: null
  }), [$, ye] = V(null), [b, X] = V(!1), [le, be] = V(!1), [ze, U] = V(!1), [Oe, $e] = V(!1), [ie, te] = V(!1), ue = Re(0), ge = Re({
    worldPoint: { x: 0, y: 0 },
    timestamp: 0,
    overlappingObjects: [],
    currentIndex: 0
  }), Se = Me((x, v = 44) => {
    const j = v / a.zoom, F = [];
    for (const O of h) {
      let q = 0, J = 1 / 0, Y = !1;
      switch (O.type) {
        case "ray":
          const xe = lt(
            x,
            O.properties.startPoint,
            O.properties.endPoint
          );
          xe <= j && (q = 100, J = xe, Y = !0);
          break;
        case "rectangle":
          const { x: R, y: I, width: _, height: Q } = O.properties, ve = [
            { start: { x: R, y: I }, end: { x: R + _, y: I } },
            // bottom
            { start: { x: R + _, y: I }, end: { x: R + _, y: I + Q } },
            // right
            { start: { x: R + _, y: I + Q }, end: { x: R, y: I + Q } },
            // top
            { start: { x: R, y: I + Q }, end: { x: R, y: I } }
            // left
          ];
          let ce = 1 / 0;
          for (const We of ve) {
            const De = lt(x, We.start, We.end);
            ce = Math.min(ce, De);
          }
          ce <= j ? (q = 100, J = ce, Y = !0) : x.x >= R && x.x <= R + _ && x.y >= I && x.y <= I + Q && (q = 50, J = 0, Y = !0);
          break;
        case "circle":
          const { center: de, radius: Pe } = O.properties, Te = Math.sqrt(
            (x.x - de.x) ** 2 + (x.y - de.y) ** 2
          ), Fe = Nt(x, de, Pe);
          Fe <= j ? (q = 100, J = Fe, Y = !0) : Te <= Pe && (q = 50, J = Pe - Te, Y = !0);
          break;
        case "triangle":
          const { vertices: Ae } = O.properties, Ve = [
            [Ae[0], Ae[1]],
            [Ae[1], Ae[2]],
            [Ae[2], Ae[0]]
          ];
          let fe = 1 / 0;
          for (const [We, De] of Ve) {
            const Be = lt(x, We, De);
            fe = Math.min(fe, Be);
          }
          fe <= j ? (q = 100, J = fe, Y = !0) : At(x, Ae) && (q = 50, J = 0, Y = !0);
          break;
        case "function":
          const Ce = O.properties.points;
          if (Ce && Ce.length > 1) {
            let We = 1 / 0;
            for (let De = 0; De < Ce.length - 1; De++) {
              const Be = Ce[De], Ue = Ce[De + 1], He = lt(x, Be, Ue);
              We = Math.min(We, He);
            }
            We <= j && (q = 100, J = We, Y = !0);
          }
          break;
      }
      Y && F.push({ object: O, priority: q, distance: J });
    }
    return F.sort((O, q) => O.priority !== q.priority ? q.priority - O.priority : O.distance !== q.distance ? O.distance - q.distance : (q.object.zIndex || 0) - (O.object.zIndex || 0)), F.map((O) => O.object);
  }, [h, a.zoom, lt, At, Nt]), _e = Me((x) => {
    const v = { x: x.x, y: x.y };
    se.current = {
      isDown: !0,
      startPoint: v,
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    };
    const j = f(v), F = Se(j, yt);
    let O = !1, q = null;
    if (F.length > 0) {
      O = !0;
      const J = Date.now(), Y = ge.current, xe = Math.abs(j.x - Y.worldPoint.x) < 0.1 && Math.abs(j.y - Y.worldPoint.y) < 0.1, R = J - Y.timestamp < 500;
      if (xe && R && Y.overlappingObjects.length > 1) {
        const I = (Y.currentIndex + 1) % Y.overlappingObjects.length, _ = Y.overlappingObjects[I];
        q = F.find((Q) => Q.id === _) || F[0], ge.current = {
          worldPoint: j,
          timestamp: J,
          overlappingObjects: Y.overlappingObjects,
          currentIndex: I
        };
      } else
        q = F[0], ge.current = {
          worldPoint: j,
          timestamp: J,
          overlappingObjects: F.map((I) => I.id),
          currentIndex: 0
        };
      se.current.pendingSelection = {
        objectId: q.id,
        type: q.type
      }, g(q.id);
    } else
      ge.current = {
        worldPoint: { x: 0, y: 0 },
        timestamp: 0,
        overlappingObjects: [],
        currentIndex: 0
      };
    (!O && !k || !O && k) && m(), (k || O) && T.handlePointerDown(x), !O && !k && (x.type === "touch" || x.type === "mouse") && (we.current = {
      isPanning: !0,
      startPoint: { x: x.x, y: x.y },
      startCenter: { ...a.center }
    });
  }, [a.center, T, k, B, h, f, w, a.zoom]), he = Me((x) => {
    const v = { x: x.x, y: x.y };
    if (x.type === "mouse" && k ? ye(v) : k || ye(null), se.current.isDown && !se.current.hasMoved) {
      const j = Math.abs(x.x - se.current.startPoint.x), F = Math.abs(x.y - se.current.startPoint.y);
      Math.sqrt(j * j + F * F) >= se.current.dragThreshold && (se.current.hasMoved = !0, U(!0), se.current.pendingSelection = null);
    }
    if (T.handlePointerMove(x), !k && we.current.isPanning) {
      const j = (x.x - we.current.startPoint.x) / a.zoom, F = (x.y - we.current.startPoint.y) / a.zoom;
      d({
        center: {
          x: we.current.startCenter.x - j,
          y: we.current.startCenter.y + F
          // Flip Y for mathematical coordinates
        }
      });
    }
  }, [a.zoom, d, T, k, ye]), ae = Me((x) => {
    U(!1), se.current = {
      isDown: !1,
      startPoint: { x: 0, y: 0 },
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    }, T.handlePointerUp(x), we.current.isPanning = !1;
  }, [T, B]), Ee = Me((x) => {
    switch (x.type) {
      case "pinch":
        if (x.scale && x.center) {
          const v = h.length, j = () => {
            const _ = v > 50 ? 100 : v > 20 ? 200 : 500;
            return a.zoom < 1 ? { min: 0.1, max: Math.min(50, _) } : a.zoom > 100 ? { min: 5, max: _ } : { min: 0.1, max: _ };
          }, { min: F, max: O } = j();
          let q = 1;
          if (x.touches && x.touches > 1) {
            const I = /iPad|iPhone|iPod/.test(navigator.userAgent), _ = (() => {
              switch (zoomSensitivity) {
                case "low":
                  return I ? 0.15 : 0.25;
                case "medium":
                  return I ? 0.25 : 0.35;
                case "high":
                  return I ? 0.4 : 0.5;
                default:
                  return I ? 0.25 : 0.35;
              }
            })(), Q = a.zoom < 0.5 || a.zoom > 50 ? 0.7 : 1, ve = Math.abs(x.scale - 1), ce = zoomSensitivity === "high" ? 0.5 : 0.3, de = ve > ce ? 0.6 : 1;
            q = _ * Q * de;
          }
          const J = x.scale - 1, Y = zoomSensitivity === "high" ? 0.01 : zoomSensitivity === "low" ? 0.03 : 0.02;
          if (Math.abs(J) < Y) return;
          const xe = 1 + J * q;
          let R = a.zoom * xe;
          if (R > O * 0.9) {
            const I = (R - O * 0.9) / (O * 0.1);
            R = O * 0.9 + O * 0.1 * (1 - Math.exp(-I));
          }
          if (R < F * 1.1) {
            const I = (F * 1.1 - R) / (F * 0.1);
            R = F * 1.1 - F * 0.1 * (1 - Math.exp(-I));
          }
          if (R = Math.max(F, Math.min(O, R)), Math.abs(R - a.zoom) > 1e-3) {
            const I = R / a.zoom, _ = f(x.center), Q = {
              x: _.x + (a.center.x - _.x) / I,
              y: _.y + (a.center.y - _.y) / I
            };
            d({
              zoom: R,
              center: Q
            });
          }
        }
        break;
    }
  }, [a.zoom, a.center, d, h.length, f]), { capabilities: qe, touchTargetSize: yt } = ss(
    r,
    {
      onPointerDown: _e,
      onPointerMove: he,
      onPointerUp: ae,
      onGesture: Ee
    },
    {
      enableGestures: !0,
      preventScrolling: !0
    }
  );
  pe(() => {
    const x = (j) => {
      switch (j.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
          if (S.length > 0) {
            j.preventDefault();
            const F = j.shiftKey ? 0.1 : 1;
            let O = 0, q = 0;
            switch (j.key) {
              case "ArrowUp":
                q = F;
                break;
              case "ArrowDown":
                q = -F;
                break;
              case "ArrowLeft":
                O = -F;
                break;
              case "ArrowRight":
                O = F;
                break;
            }
            S.forEach((J) => {
              const Y = G(J);
              if (Y)
                switch (Y.type) {
                  case "ray":
                    A(J, {
                      properties: {
                        ...Y.properties,
                        startPoint: {
                          x: Y.properties.startPoint.x + O,
                          y: Y.properties.startPoint.y + q
                        },
                        endPoint: {
                          x: Y.properties.endPoint.x + O,
                          y: Y.properties.endPoint.y + q
                        }
                      }
                    });
                    break;
                  case "rectangle":
                    A(J, {
                      properties: {
                        ...Y.properties,
                        x: Y.properties.x + O,
                        y: Y.properties.y + q
                      }
                    });
                    break;
                  case "circle":
                    A(J, {
                      properties: {
                        ...Y.properties,
                        center: {
                          x: Y.properties.center.x + O,
                          y: Y.properties.center.y + q
                        }
                      }
                    });
                    break;
                  case "triangle":
                    const xe = Y.properties.vertices.map((_) => ({
                      x: _.x + O,
                      y: _.y + q
                    }));
                    A(J, {
                      properties: {
                        ...Y.properties,
                        vertices: xe
                      }
                    });
                    break;
                  case "function":
                    const R = {
                      min: Y.properties.domain.min + O,
                      max: Y.properties.domain.max + O
                    }, I = Y.properties.points.map((_) => ({
                      x: _.x + O,
                      y: _.y + q
                    }));
                    A(J, {
                      properties: {
                        ...Y.properties,
                        domain: R,
                        points: I
                      }
                    });
                    break;
                }
            });
          }
          break;
        case "Escape":
          k && (D.emit("tool:cancel", { toolId: k }), B(null));
          break;
        case "Delete":
        case "Backspace":
          S.length > 0 && (console.log("Deleting objects:", S), S.forEach((F) => {
            D.emit("object:removed", { objectId: F }), l(F);
          }), m(), B(null));
          break;
        case "r":
        case "R":
          if (S.length > 0 && !j.ctrlKey) {
            j.preventDefault();
            const F = { getObject: G, updateObject: A };
            S.forEach((O) => {
              j.shiftKey ? Z(O, F) : ne(O, F);
            });
          }
          break;
        case "f":
        case "F":
          if (S.length > 0 && !j.ctrlKey) {
            j.preventDefault();
            const F = { getObject: G, updateObject: A };
            S.forEach((O) => {
              oe(O, F);
            });
          }
          break;
        case "=":
        case "+":
          if (S.length > 0 && !j.ctrlKey) {
            j.preventDefault();
            const F = { getObject: G, updateObject: A };
            S.forEach((O) => {
              p(O, 2, F);
            });
          }
          break;
        case "-":
        case "_":
          if (S.length > 0 && !j.ctrlKey) {
            j.preventDefault();
            const F = { getObject: G, updateObject: A };
            S.forEach((O) => {
              p(O, 0.5, F);
            });
          }
          break;
      }
    }, v = (j) => {
      m(), B(null);
    };
    return document.addEventListener("keydown", x), D.on("tool:creation-complete", v), () => {
      document.removeEventListener("keydown", x), D.off("tool:creation-complete", v);
    };
  }, [k, B, D, S, l, m]), pe(() => {
    S.length === 1 && !ze && !le ? X(!0) : (S.length !== 1 || ze) && (X(!1), be(!1));
  }, [S, ze, le]), pe(() => {
    o && b && X(!1);
  }, [o, b]), pe(() => {
    var x;
    if (k === "ray-tool") {
      const v = re.loadState();
      if (!((x = v == null ? void 0 : v.tutorialSettings) == null ? void 0 : x.lineToolTutorialSeen)) {
        const F = setTimeout(() => {
          $e(!0);
        }, 300);
        return () => clearTimeout(F);
      }
    }
  }, [k]);
  const it = Me(() => {
    X(!1), be(!0);
  }, []), Xe = Me(() => {
    S.length > 0 && (S.forEach((x) => {
      D.emit("object:removed", { objectId: x }), l(x);
    }), m());
  }, [S, l, m, D]), dt = Me((x, v) => {
    A(x, v);
  }, [A]), z = Me(() => {
    $e(!1);
  }, []), u = Me(() => {
    te(!1);
  }, []), E = Me(() => {
    const x = Math.min(1e3, a.zoom * 1.4);
    d({ zoom: x });
  }, [a.zoom, d]), L = Me(() => {
    const x = Math.max(0.01, a.zoom / 1.4);
    d({ zoom: x });
  }, [a.zoom, d]), C = Me(() => {
    d({ zoom: 20, center: { x: 0, y: 0 } });
  }, [d]), N = Me(() => {
    var x;
    if (d({ center: { x: 0, y: 0 } }), ue.current += 1, ue.current === 1) {
      const v = re.loadState();
      ((x = v == null ? void 0 : v.tutorialSettings) == null ? void 0 : x.homeButtonTutorialSeen) || setTimeout(() => {
        te(!0);
      }, 300);
    }
  }, [d]);
  return pe(() => {
    const x = (j) => {
      j.preventDefault();
      const O = Ne.getState().viewport;
      if (j.ctrlKey || j.metaKey) {
        const q = j.deltaY > 0 ? 0.9 : 1.1, J = Math.max(0.01, Math.min(1e3, O.zoom * q));
        d({ zoom: J });
      } else {
        const J = j.shiftKey ? j.deltaY : 0, Y = j.shiftKey ? 0 : j.deltaY, xe = J * 1 / O.zoom, R = Y * 1 / O.zoom;
        d({
          center: {
            x: O.center.x + xe,
            y: O.center.y - R
            // subtract because scroll down should move view down
          }
        });
      }
    }, v = r.current;
    if (v)
      return v.addEventListener("wheel", x, { passive: !1 }), () => {
        v.removeEventListener("wheel", x);
      };
  }, [d]), /* @__PURE__ */ e.jsxs("div", { className: `relative ${s}`, style: { width: i, height: t }, children: [
    /* @__PURE__ */ e.jsxs(
      "svg",
      {
        ref: r,
        width: i,
        height: t,
        className: "absolute inset-0 bg-white",
        style: { touchAction: "none" },
        children: [
          /* @__PURE__ */ e.jsx(
            rs,
            {
              viewport: a,
              canvasSize: { width: i, height: t },
              worldToScreen: w,
              objects: h
            }
          ),
          /* @__PURE__ */ e.jsx(
            ls,
            {
              objects: h,
              viewport: a,
              touchTargetSize: yt,
              worldToScreen: w,
              selectedObjects: S,
              canvasSize: { width: i, height: t }
            }
          ),
          k && $ && !se.current.isDown && /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: $.x,
              cy: $.y,
              r: "4",
              fill: "rgba(37, 99, 235, 0.4)",
              stroke: "#2563eb",
              strokeWidth: "1",
              opacity: "0.8",
              style: { pointerEvents: "none" }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      ds,
      {
        capabilities: qe,
        viewport: a,
        activeTool: k,
        selectedObjectsCount: S.length
      }
    ),
    /* @__PURE__ */ e.jsx(
      cs,
      {
        viewport: a,
        onZoomIn: E,
        onZoomOut: L,
        onZoomReset: C,
        onCenterOnly: N
      }
    ),
    b && S.length === 1 && /* @__PURE__ */ e.jsx(
      hs,
      {
        selectedObject: h.find((x) => x.id === S[0]) || null,
        onDelete: Xe,
        onUpdate: dt,
        onClose: it
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "fixed bottom-4 left-4 z-50 flex gap-3", children: [
      /* @__PURE__ */ e.jsx(
        xs,
        {
          isOpen: o === "settings",
          onToggle: () => c(o === "settings" ? null : "settings")
        }
      ),
      /* @__PURE__ */ e.jsx(
        ps,
        {
          isOpen: o === "action",
          onToggle: () => c(o === "action" ? null : "action")
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(us, {}),
    /* @__PURE__ */ e.jsx(gs, {}),
    /* @__PURE__ */ e.jsx(
      ms,
      {
        isVisible: Oe,
        onDismiss: z
      }
    ),
    /* @__PURE__ */ e.jsx(
      fs,
      {
        isVisible: ie,
        onDismiss: u
      }
    ),
    K && /* @__PURE__ */ e.jsx(
      ys,
      {
        onDismiss: () => {
          me(!1), localStorage.removeItem("grix-show-endpoint-tooltip");
        }
      }
    )
  ] });
}
const Je = class Je {
  constructor() {
    ee(this, "examplesData", null);
    ee(this, "isLoading", !1);
  }
  static getInstance() {
    return Je.instance || (Je.instance = new Je()), Je.instance;
  }
  async loadExamples() {
    if (this.examplesData)
      return this.examplesData;
    if (this.isLoading)
      return await new Promise((t) => {
        const s = () => {
          this.isLoading ? setTimeout(s, 50) : t(void 0);
        };
        s();
      }), this.examplesData;
    this.isLoading = !0;
    try {
      const t = await fetch("/examples.json");
      if (!t.ok)
        throw new Error(`Failed to load examples: ${t.status}`);
      const s = await t.json();
      if (!s.examples || !Array.isArray(s.examples))
        throw new Error("Invalid examples data: missing examples array");
      if (!s.categories || !Array.isArray(s.categories))
        throw new Error("Invalid examples data: missing categories array");
      for (const n of s.examples)
        if (!n.id || !n.title || !n.objects || !Array.isArray(n.objects))
          throw new Error(`Invalid example: ${n.id || "unknown"}`);
      return this.examplesData = s, this.examplesData;
    } catch (t) {
      return console.error("Failed to load examples:", t), this.examplesData = {
        examples: [],
        categories: []
      }, this.examplesData;
    } finally {
      this.isLoading = !1;
    }
  }
  async getExamples() {
    return (await this.loadExamples()).examples;
  }
  async getCategories() {
    return (await this.loadExamples()).categories;
  }
  async getExampleById(t) {
    return (await this.getExamples()).find((n) => n.id === t) || null;
  }
  async getExamplesByCategory(t) {
    return (await this.getExamples()).filter((n) => n.category === t);
  }
  generateObjectId() {
    return `example_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  convertExampleObjectToMathObject(t) {
    const s = {
      id: this.generateObjectId(),
      type: t.type,
      visible: !0,
      selected: !1,
      zIndex: 0
    };
    switch (t.type) {
      case "ray":
        return {
          ...s,
          type: "ray",
          properties: {
            startPoint: t.properties.startPoint,
            endPoint: t.properties.endPoint,
            slope: (t.properties.endPoint.y - t.properties.startPoint.y) / (t.properties.endPoint.x - t.properties.startPoint.x)
          }
        };
      case "rectangle":
        return {
          ...s,
          type: "rectangle",
          properties: {
            x: t.properties.x,
            y: t.properties.y,
            width: t.properties.width,
            height: t.properties.height,
            area: t.properties.width * t.properties.height
          }
        };
      case "circle":
        const n = t.properties.radius;
        return {
          ...s,
          type: "circle",
          properties: {
            center: t.properties.center,
            radius: n,
            diameter: n * 2,
            circumference: 2 * Math.PI * n,
            area: Math.PI * n * n
          }
        };
      case "triangle":
        return {
          ...s,
          type: "triangle",
          properties: {
            vertices: t.properties.vertices,
            sideA: t.properties.sideA,
            sideB: t.properties.sideB,
            sideC: t.properties.sideC,
            angleA: t.properties.angleA,
            angleB: t.properties.angleB,
            angleC: t.properties.angleC,
            area: t.properties.area,
            perimeter: t.properties.perimeter,
            type: t.properties.type
          }
        };
      default:
        throw new Error(`Unknown object type: ${t.type}`);
    }
  }
  async applyExample(t) {
    const s = await this.getExampleById(t);
    if (!s)
      throw new Error(`Example not found: ${t}`);
    const n = Ne.getState(), r = Le.getState();
    try {
      n.getAllObjects().forEach((c) => {
        n.removeObject(c.id);
      }), n.clearSelection(), s.viewport && n.setViewport(s.viewport), Object.entries(s.settings).forEach(([c, a]) => {
        c in r && typeof a == "boolean" ? (r.toggleSetting(c), r[c] !== a && r.toggleSetting(c)) : c === "snapPrecision" && typeof a == "string" ? r.setSnapPrecision(a) : c === "coordinateSystem" && typeof a == "string" ? r.setCoordinateSystem(a) : c === "fontScale" && typeof a == "number" && r.setFontScale(a);
      }), s.objects.forEach((c) => {
        const a = this.convertExampleObjectToMathObject(c);
        n.addObject(a);
      }), console.log(`Applied example: ${s.title}`);
    } catch (o) {
      throw console.error("Failed to apply example:", o), new Error(`Failed to apply example "${s.title}": ${o.message}`);
    }
  }
  async clearCanvas() {
    const t = Ne.getState(), s = Le.getState();
    t.getAllObjects().forEach((r) => {
      t.removeObject(r.id);
    }), t.clearSelection(), t.setViewport({
      zoom: 20,
      center: { x: 0, y: 0 }
    }), s.resetToDefaults(), console.log("Canvas cleared and reset to defaults");
  }
  // Get examples suitable for first-time users
  async getBeginnerExamples() {
    return (await this.getExamples()).filter((s) => s.difficulty === "beginner");
  }
  // Get a random example from a specific category
  async getRandomExampleFromCategory(t) {
    const s = await this.getExamplesByCategory(t);
    if (s.length === 0) return null;
    const n = Math.floor(Math.random() * s.length);
    return s[n];
  }
};
ee(Je, "instance");
let vt = Je;
const mt = vt.getInstance();
function Ss() {
  const { t: i } = Ye(), { openMenu: t, setOpenMenu: s } = wt(), n = t === "examples", [r, o] = V([]), [c, a] = V([]), [d, h] = V("all"), [S, W] = V(!1), [P, y] = V(null), l = Re(null);
  pe(() => {
    function T(k) {
      l.current && !l.current.contains(k.target) && s(null);
    }
    if (n)
      return document.addEventListener("mousedown", T, !0), document.addEventListener("click", T, !0), () => {
        document.removeEventListener("mousedown", T, !0), document.removeEventListener("click", T, !0);
      };
  }, [n, s]), pe(() => {
    (async () => {
      try {
        W(!0), y(null);
        const [k, B] = await Promise.all([
          mt.getExamples(),
          mt.getCategories()
        ]);
        o(k), a(B);
      } catch (k) {
        console.error("Failed to load examples:", k), y("Failed to load examples");
      } finally {
        W(!1);
      }
    })();
  }, []);
  const m = async (T) => {
    try {
      W(!0), y(null), await mt.applyExample(T.id), s(null);
    } catch (k) {
      console.error("Failed to apply example:", k), y(`Failed to load "${T.title}"`);
    } finally {
      W(!1);
    }
  }, g = async () => {
    try {
      W(!0), y(null), await mt.clearCanvas(), s(null);
    } catch (T) {
      console.error("Failed to clear canvas:", T), y("Failed to clear canvas");
    } finally {
      W(!1);
    }
  }, f = d === "all" ? r : r.filter((T) => T.category === d), w = (T) => {
    switch (T) {
      case "beginner":
        return "text-green-600 bg-green-50";
      case "intermediate":
        return "text-yellow-600 bg-yellow-50";
      case "advanced":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  }, G = (T) => {
    switch (T) {
      case "beginner":
        return "●";
      case "intermediate":
        return "●●";
      case "advanced":
        return "●●●";
      default:
        return "?";
    }
  }, A = (T) => {
    const k = {
      fractions: "examples.category.fractions",
      geometry: "examples.category.geometry",
      algebra: "examples.category.algebra",
      trigonometry: "examples.category.trigonometry",
      calculus: "examples.category.calculus",
      statistics: "examples.category.statistics",
      basics: "examples.category.basics",
      advanced: "examples.category.advanced",
      "number theory": "examples.category.numbertheory",
      numbertheory: "examples.category.numbertheory",
      "number-theory": "examples.category.numbertheory",
      precalculus: "examples.category.precalculus",
      "pre-calculus": "examples.category.precalculus",
      linearalgebra: "examples.category.linearalgebra",
      "linear algebra": "examples.category.linearalgebra",
      "linear-algebra": "examples.category.linearalgebra",
      discrete: "examples.category.discrete",
      "discrete math": "examples.category.discrete",
      "discrete-math": "examples.category.discrete",
      discretemath: "examples.category.discrete",
      probability: "examples.category.probability",
      functions: "examples.category.functions"
    }, B = T.id.toLowerCase().replace(/[^a-z0-9]/g, ""), D = T.name.toLowerCase().replace(/[^a-z0-9]/g, ""), ne = k[B] || k[D];
    if (ne) {
      const oe = i(ne);
      return oe === ne ? T.name : oe;
    }
    return T.name;
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: l, className: "relative z-50", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => s(t === "examples" ? null : "examples"),
        className: "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100",
        title: i("toolbar.examples"),
        disabled: S,
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "📚" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium text-gray-700", children: i("toolbar.examples") }),
          /* @__PURE__ */ e.jsx("span", { className: `text-xs transition-transform ${n ? "rotate-180" : ""}`, children: "▼" })
        ]
      }
    ),
    n && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[32rem] overflow-hidden", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-semibold text-gray-800", children: i("tutorial.examples.title") }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: g,
              className: "text-xs text-red-600 hover:text-red-800 font-medium",
              disabled: S,
              children: i("actions.clearBoard")
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-2", children: /* @__PURE__ */ e.jsxs(
          "select",
          {
            value: d,
            onChange: (T) => h(T.target.value),
            className: "w-full text-xs border border-gray-200 rounded px-2 py-1 bg-white",
            disabled: S,
            children: [
              /* @__PURE__ */ e.jsx("option", { value: "all", children: (() => {
                const T = i("examples.allCategories");
                return T === "examples.allCategories" ? "All Categories" : T;
              })() }),
              c.map((T) => /* @__PURE__ */ e.jsx("option", { value: T.id, children: A(T) }, T.id))
            ]
          }
        ) })
      ] }),
      P && /* @__PURE__ */ e.jsx("div", { className: "px-4 py-2 bg-red-50 border-b border-red-100", children: /* @__PURE__ */ e.jsx("p", { className: "text-xs text-red-600", children: P }) }),
      /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto max-h-80 examples-scrollable", children: S ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500", children: i("tutorial.loading") }) }) : f.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500", children: i("examples.noExamples") }) }) : /* @__PURE__ */ e.jsx("div", { className: "p-2 space-y-1", children: f.map((T) => /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => m(T),
          className: "w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors group",
          disabled: S,
          children: /* @__PURE__ */ e.jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("h4", { className: "text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate", children: T.title }),
              /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: `text-xs px-1.5 py-0.5 rounded font-medium ${w(T.difficulty)}`,
                  title: `${T.difficulty} difficulty`,
                  children: G(T.difficulty)
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 mt-1 line-clamp-2", children: T.description }),
            c.find((k) => k.id === T.category) && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-400", children: (() => {
                const k = c.find((B) => B.id === T.category);
                return k ? A(k) : "";
              })() }),
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-300", children: "•" }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-400", children: [
                T.objects.length,
                " object",
                T.objects.length !== 1 ? "s" : ""
              ] })
            ] })
          ] }) })
        },
        T.id
      )) }) }),
      /* @__PURE__ */ e.jsx("div", { className: "sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg", children: /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Click an example to explore mathematical concepts" }) })
    ] })
  ] });
}
function Cs({ className: i = "" }) {
  const { activeTool: t, setActiveTool: s } = ft(), { openMenu: n, setOpenMenu: r } = wt(), { t: o } = Ye(), c = n === "build", a = Re(null), d = [
    {
      id: "ray-tool",
      name: o("tools.line"),
      icon: "📏",
      description: o("tools.line.description")
    },
    {
      id: "rectangle-tool",
      name: o("tools.rectangle"),
      icon: "⬜",
      description: o("tools.rectangle.description")
    },
    {
      id: "circle-tool",
      name: o("tools.circle"),
      icon: "⭕",
      description: o("tools.circle.description")
    },
    {
      id: "triangle-tool",
      name: o("tools.triangle"),
      icon: "🔺",
      description: o("tools.triangle.description")
    },
    {
      id: "function-tool",
      name: o("tools.function"),
      icon: "📈",
      description: o("tools.function.description")
    }
  ], h = (y) => {
    s(y), r(null);
  }, S = () => {
    s(null), r(null);
  }, W = () => {
    r(n === "build" ? null : "build");
  }, P = d.find((y) => y.id === t);
  return pe(() => {
    const y = (l) => {
      a.current && !a.current.contains(l.target) && r(null);
    };
    if (c)
      return document.addEventListener("mousedown", y, !0), document.addEventListener("touchstart", y, !0), document.addEventListener("click", y, !0), () => {
        document.removeEventListener("mousedown", y, !0), document.removeEventListener("touchstart", y, !0), document.removeEventListener("click", y, !0);
      };
  }, [c, r]), /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-2 p-2 bg-white border-b border-gray-200 ${i}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
      /* @__PURE__ */ e.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 32 32", className: "flex-shrink-0", children: [
        /* @__PURE__ */ e.jsx("rect", { width: "32", height: "32", fill: "#2563eb", rx: "6" }),
        /* @__PURE__ */ e.jsxs("g", { stroke: "#60A5FA", strokeWidth: "0.5", opacity: "0.6", children: [
          /* @__PURE__ */ e.jsx("line", { x1: "8", y1: "4", x2: "8", y2: "28" }),
          /* @__PURE__ */ e.jsx("line", { x1: "16", y1: "4", x2: "16", y2: "28" }),
          /* @__PURE__ */ e.jsx("line", { x1: "24", y1: "4", x2: "24", y2: "28" }),
          /* @__PURE__ */ e.jsx("line", { x1: "4", y1: "8", x2: "28", y2: "8" }),
          /* @__PURE__ */ e.jsx("line", { x1: "4", y1: "16", x2: "28", y2: "16" }),
          /* @__PURE__ */ e.jsx("line", { x1: "4", y1: "24", x2: "28", y2: "24" })
        ] }),
        /* @__PURE__ */ e.jsxs("g", { stroke: "#FFFFFF", strokeWidth: "1", children: [
          /* @__PURE__ */ e.jsx("line", { x1: "16", y1: "4", x2: "16", y2: "28" }),
          /* @__PURE__ */ e.jsx("line", { x1: "4", y1: "16", x2: "28", y2: "16" })
        ] }),
        /* @__PURE__ */ e.jsx("line", { x1: "16", y1: "16", x2: "24", y2: "8", stroke: "#22C55E", strokeWidth: "2" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "16", cy: "16", r: "2", fill: "#FFFFFF" }),
        /* @__PURE__ */ e.jsx("circle", { cx: "24", cy: "8", r: "1.5", fill: "#22C55E" })
      ] }),
      /* @__PURE__ */ e.jsx("h1", { className: "text-lg font-semibold text-gray-800", children: "Grix" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", ref: a, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: W,
          className: `
            flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
            ${t ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}
          `,
          children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "🏗️" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: P ? P.name : o("toolbar.build") }),
            /* @__PURE__ */ e.jsx("span", { className: `text-xs transition-transform ${c ? "rotate-180" : ""}`, children: "▼" })
          ]
        }
      ),
      c && /* @__PURE__ */ e.jsx("div", { className: "build-dropdown absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48 max-h-80 overflow-y-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "build-dropdown-scrollable", children: [
        d.map((y) => /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => h(y.id),
            className: `
                    w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg transition-colors
                    ${t === y.id ? "bg-blue-50 text-blue-700" : "text-gray-700"}
                  `,
            title: y.description,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: y.icon }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium", children: y.name }),
                /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500", children: y.description })
              ] })
            ]
          },
          y.id
        )),
        t && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("div", { className: "border-t border-gray-100" }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: S,
              className: "w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg transition-colors text-gray-600",
              children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "✕" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: o("toolbar.panMode") })
              ]
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ e.jsx(Ss, {}) })
  ] });
}
class It extends Qe.Component {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(t) {
    return {
      hasError: !0,
      error: t
    };
  }
  componentDidCatch(t, s) {
    console.error("Canvas Error Boundary caught an error:", t, s), this.setState({
      error: t,
      errorInfo: s
    });
  }
  render() {
    var t, s;
    if (this.state.hasError) {
      const n = this.props.fallback;
      return n ? /* @__PURE__ */ e.jsx(n, { error: this.state.error }) : /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center h-full bg-red-50 text-red-700 p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Something went wrong with the Canvas" }),
        /* @__PURE__ */ e.jsxs("details", { className: "text-sm", children: [
          /* @__PURE__ */ e.jsx("summary", { className: "cursor-pointer mb-2", children: "Error Details" }),
          /* @__PURE__ */ e.jsxs("pre", { className: "whitespace-pre-wrap text-left bg-red-100 p-4 rounded", children: [
            (t = this.state.error) == null ? void 0 : t.toString(),
            (s = this.state.errorInfo) == null ? void 0 : s.componentStack
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => window.location.reload(),
            className: "mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
            children: "Reload Page"
          }
        )
      ] }) });
    }
    return this.props.children;
  }
}
function Ms({ children: i }) {
  const [t, s] = V(!1), [n, r] = V(navigator.onLine), [o, c] = V(null), { loadState: a, saveState: d } = Ne(), h = Le();
  pe(() => {
    "serviceWorker" in navigator && S(), W(), P(), y(), l(), s(!0);
  }, []);
  const S = async () => {
    try {
      const f = await navigator.serviceWorker.register("/sw.js", {
        scope: "/"
      });
      console.log("🎯 Grix PWA: Service Worker registered successfully:", f.scope), f.addEventListener("updatefound", () => {
        const w = f.installing;
        w && w.addEventListener("statechange", () => {
          w.state === "installed" && navigator.serviceWorker.controller && (console.log("🔄 Grix PWA: New version available"), m());
        });
      });
    } catch (f) {
      console.error("❌ Grix PWA: Service Worker registration failed:", f);
    }
  }, W = () => {
    try {
      const f = re.loadState();
      if (f)
        (f.objects || f.viewport) && a(), f.visualizationSettings && Object.entries(f.visualizationSettings).forEach(([w, G]) => {
          w in h && typeof h[w] == typeof G && (h[w] = G);
        }), console.log("📂 Grix PWA: Restored saved state from previous session");
      else {
        const w = Ne.getState();
        if (w.objects.length === 0) {
          const G = {
            id: `ray_default_${Date.now()}`,
            type: "ray",
            properties: {
              startPoint: { x: 0, y: 0 },
              endPoint: { x: 3, y: 9 },
              slope: 3,
              // 9/3 = 3
              yIntercept: 0
            },
            visible: !0,
            selected: !1,
            zIndex: 0
          };
          w.addObject(G), console.log("🎯 Grix PWA: Created default line (0,0) to (3,9) for first-time user"), localStorage.setItem("grix-show-endpoint-tooltip", "true");
        }
      }
    } catch (f) {
      console.error("❌ Grix PWA: Failed to load saved state:", f);
    }
  }, P = () => {
    window.addEventListener("grix:auto-save-requested", () => {
      const f = Ne.getState(), w = Le.getState();
      re.saveState({
        objects: f.objects,
        selectedObjects: f.selectedObjects,
        viewport: f.viewport,
        visualizationSettings: {
          showEquivalentFractions: w.showEquivalentFractions,
          showLengthMultiples: w.showLengthMultiples,
          showAreaRectangle: w.showAreaRectangle,
          showDivisionMultiples: w.showDivisionMultiples,
          showRiseRunTriangle: w.showRiseRunTriangle,
          showDistanceMarkers: w.showDistanceMarkers,
          showAngleArc: w.showAngleArc,
          showCoordinateProjections: w.showCoordinateProjections,
          showDivisionAnswer: w.showDivisionAnswer,
          showLatticePoints: w.showLatticePoints,
          showReferenceLineY_equals_X: w.showReferenceLineY_equals_X,
          showTangentLines: w.showTangentLines,
          showFunctionExtensions: w.showFunctionExtensions,
          showTriangleAngles: w.showTriangleAngles,
          showTriangleClassification: w.showTriangleClassification,
          showSpecialTriangles: w.showSpecialTriangles,
          showSOHCAHTOA: w.showSOHCAHTOA,
          showTrigValues: w.showTrigValues,
          showTriangleAltitudes: w.showTriangleAltitudes,
          showPythagoreanSquares: w.showPythagoreanSquares,
          fontScale: w.fontScale,
          snapPrecision: w.snapPrecision,
          coordinateSystem: w.coordinateSystem
        }
      });
    });
  }, y = () => {
    const f = () => {
      r(!0), console.log("🌐 Grix PWA: Back online");
    }, w = () => {
      r(!1), console.log("📱 Grix PWA: Now offline");
    };
    return window.addEventListener("online", f), window.addEventListener("offline", w), () => {
      window.removeEventListener("online", f), window.removeEventListener("offline", w);
    };
  }, l = () => {
    const f = (w) => {
      w.preventDefault(), c(w), console.log("📱 Grix PWA: Install prompt available");
    };
    return window.addEventListener("beforeinstallprompt", f), () => {
      window.removeEventListener("beforeinstallprompt", f);
    };
  }, m = () => {
    console.log("🔄 Grix PWA: New version available - refresh to update");
  }, g = async () => {
    if (o)
      try {
        const f = await o.prompt();
        console.log("📱 Grix PWA: Install prompt result:", f.outcome), c(null);
      } catch (f) {
        console.error("❌ Grix PWA: Install failed:", f);
      }
  };
  return t ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
    i,
    !n && /* @__PURE__ */ e.jsx("div", { className: "fixed top-0 left-0 right-0 bg-yellow-500 text-white text-center py-2 z-50", children: /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: "📱 You're offline - Grix continues to work with saved data" }) }),
    o && /* @__PURE__ */ e.jsxs("div", { className: "fixed bottom-20 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-40 max-w-sm", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "font-semibold mb-2", children: "Install Grix App" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm mb-3", children: "Add Grix to your home screen for quick access and offline use." }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => c(null),
            className: "px-3 py-1 text-sm bg-blue-500 rounded hover:bg-blue-400",
            children: "Later"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: g,
            className: "px-3 py-1 text-sm bg-white text-blue-600 rounded hover:bg-gray-100",
            children: "Install"
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center min-h-screen bg-gray-50", children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto mb-4 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" }),
    /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Loading Grix" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600", children: "Preparing your mathematical playground..." })
  ] }) });
}
class Es {
  constructor() {
    ee(this, "id", "ray-tool");
    ee(this, "name", "Line Builder");
    ee(this, "context");
    ee(this, "state", {
      isCreating: !1,
      startPoint: null,
      currentRay: null,
      dragTarget: null,
      dragOffset: null
    });
  }
  init(t) {
    this.context = t, t.events.on("tool:changed", this.handleToolChange.bind(this)), t.events.on("tool:cancel", this.handleToolCancel.bind(this));
  }
  destroy() {
    this.context.events.off("tool:changed", this.handleToolChange.bind(this)), this.context.events.off("tool:cancel", this.handleToolCancel.bind(this));
  }
  handleToolChange(t) {
    t.current !== this.id && this.cancelCreation();
  }
  handleToolCancel(t) {
    t.toolId === this.id && this.cancelCreation();
  }
  cancelCreation() {
    this.state.currentRay && this.state.isCreating && this.context.canvas.removeObject(this.state.currentRay.id), this.state = {
      isCreating: !1,
      startPoint: null,
      currentRay: null,
      dragTarget: null,
      dragOffset: null
    };
  }
  generateId() {
    return `ray_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  snapPoint(t) {
    const s = this.context.state.getState();
    if (s.snapToGrid) {
      if (Math.sqrt(t.x * t.x + t.y * t.y) <= 0.75)
        return { x: 0, y: 0 };
      const o = Le.getState(), c = nt(
        s.viewport,
        o.snapPrecision
      );
      return this.context.math.snapToGrid(t, c);
    }
    return t;
  }
  findNearestHandle(t, s = 20) {
    this.context.canvas.screenToWorld(t);
    const n = this.context.canvas.getAllObjects();
    for (const r of n)
      if (r.type === "ray") {
        const o = r, c = this.context.canvas.worldToScreen(o.properties.startPoint), a = this.context.canvas.worldToScreen(o.properties.endPoint), d = this.context.math.distance(t, c), h = this.context.math.distance(t, a);
        if (d <= s)
          return { rayId: o.id, handle: "start" };
        if (h <= s)
          return { rayId: o.id, handle: "end" };
        const S = 8, W = a.x - c.x, P = a.y - c.y, y = Math.sqrt(W * W + P * P);
        if (y > 0) {
          const l = Math.max(0, Math.min(1, ((t.x - c.x) * W + (t.y - c.y) * P) / (y * y))), m = {
            x: c.x + l * W,
            y: c.y + l * P
          };
          if (this.context.math.distance(t, m) <= S)
            return { rayId: o.id, handle: "move" };
        }
      }
    return null;
  }
  onPointerDown(t) {
    const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.findNearestHandle(s);
    if (r) {
      const o = this.context.canvas.getObject(r.rayId), c = this.context.state.getState().selectedObjects;
      if (o && c.includes(r.rayId)) {
        this.state.currentRay = o, this.state.dragTarget = r.handle, this.state.isCreating = !1, r.handle === "move" && (this.state.dragOffset = {
          x: n.x - o.properties.startPoint.x,
          y: n.y - o.properties.startPoint.y
        });
        return;
      }
    }
    if (!this.state.isCreating) {
      if (this.context.state.getState().selectedObjects.some((d) => {
        const h = this.context.canvas.getObject(d);
        return (h == null ? void 0 : h.type) === "ray";
      }))
        return;
      this.state.isCreating = !0, this.state.startPoint = n;
      const a = {
        id: this.generateId(),
        type: "ray",
        properties: {
          startPoint: n,
          endPoint: { ...n },
          // Start with same point
          slope: 0,
          yIntercept: n.y
        },
        visible: !0,
        selected: !1,
        zIndex: 0
      };
      this.state.currentRay = a, this.context.canvas.addObject(a);
    }
  }
  onPointerMove(t) {
    if (!this.state.currentRay) return;
    const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating) {
      const r = this.context.math.slope(this.state.currentRay.properties.startPoint, n), o = n.y - r * n.x;
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: {
          ...this.state.currentRay.properties,
          endPoint: n,
          slope: r,
          yIntercept: isFinite(r) ? o : this.state.currentRay.properties.startPoint.y
        }
      });
    } else if (this.state.dragTarget) {
      const r = this.context.canvas.getObject(this.state.currentRay.id);
      if (!r) return;
      const o = { ...r.properties };
      if (this.state.dragTarget === "start")
        o.startPoint = n;
      else if (this.state.dragTarget === "end")
        o.endPoint = n;
      else if (this.state.dragTarget === "move" && this.state.dragOffset) {
        const c = n.x - this.state.dragOffset.x - r.properties.startPoint.x, a = n.y - this.state.dragOffset.y - r.properties.startPoint.y;
        o.startPoint = {
          x: r.properties.startPoint.x + c,
          y: r.properties.startPoint.y + a
        }, o.endPoint = {
          x: r.properties.endPoint.x + c,
          y: r.properties.endPoint.y + a
        };
      }
      if (this.state.dragTarget === "start" || this.state.dragTarget === "end") {
        const c = this.context.math.slope(o.startPoint, o.endPoint);
        o.slope = c, o.yIntercept = isFinite(c) ? o.startPoint.y - c * o.startPoint.x : o.startPoint.y;
      }
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: o
      });
    }
    this.context.events.emit("ray:update", {
      rayId: this.state.currentRay.id,
      ray: this.context.canvas.getObject(this.state.currentRay.id)
    });
  }
  onPointerUp(t) {
    if (this.state.isCreating && this.state.currentRay) {
      const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.state.currentRay.properties.startPoint;
      this.context.math.distance(r, n) < 0.1 ? this.context.canvas.removeObject(this.state.currentRay.id) : (this.context.events.emit("ray:created", {
        rayId: this.state.currentRay.id,
        ray: this.state.currentRay
      }), this.context.events.emit("tool:creation-complete", {
        toolId: this.id,
        objectId: this.state.currentRay.id
      }));
    }
    this.state = {
      isCreating: !1,
      startPoint: null,
      currentRay: null,
      dragTarget: null,
      dragOffset: null
    };
  }
}
function Ps() {
  return new Es();
}
class ks {
  constructor() {
    ee(this, "id", "rectangle-tool");
    ee(this, "name", "Rectangle Builder");
    ee(this, "context");
    ee(this, "state", {
      isCreating: !1,
      startPoint: null,
      currentRectangle: null,
      dragTarget: null,
      dragOffset: null,
      lockedCorner: null
    });
  }
  init(t) {
    this.context = t, t.events.on("tool:changed", this.handleToolChange.bind(this)), t.events.on("tool:cancel", this.handleToolCancel.bind(this));
  }
  destroy() {
    this.context.events.off("tool:changed", this.handleToolChange.bind(this)), this.context.events.off("tool:cancel", this.handleToolCancel.bind(this));
  }
  handleToolChange(t) {
    t.current !== this.id && this.cancelCreation();
  }
  handleToolCancel(t) {
    t.toolId === this.id && this.cancelCreation();
  }
  cancelCreation() {
    this.state.currentRectangle && this.state.isCreating && this.context.canvas.removeObject(this.state.currentRectangle.id), this.state = {
      isCreating: !1,
      startPoint: null,
      currentRectangle: null,
      dragTarget: null,
      dragOffset: null,
      lockedCorner: null
    };
  }
  generateId() {
    return `rect_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  snapPoint(t) {
    const s = this.context.state.getState();
    if (s.snapToGrid) {
      if (Math.sqrt(t.x * t.x + t.y * t.y) <= 0.75)
        return { x: 0, y: 0 };
      const o = Le.getState(), c = nt(
        s.viewport,
        o.snapPrecision
      );
      return this.context.math.snapToGrid(t, c);
    }
    return t;
  }
  findRectangleAtPoint(t) {
    const s = this.context.canvas.getAllObjects();
    for (const n of s)
      if (n.type === "rectangle") {
        const r = n, { x: o, y: c, width: a, height: d } = r.properties;
        if (t.x >= o && t.x <= o + a && t.y >= c && t.y <= c + d)
          return r;
      }
    return null;
  }
  findNearestCorner(t, s, n = 0.5) {
    const { x: r, y: o, width: c, height: a } = s.properties, d = [
      { point: { x: r, y: o }, type: "corner-bl" },
      // bottom-left
      { point: { x: r + c, y: o }, type: "corner-br" },
      // bottom-right
      { point: { x: r, y: o + a }, type: "corner-tl" },
      // top-left
      { point: { x: r + c, y: o + a }, type: "corner-tr" }
      // top-right
    ];
    for (const h of d)
      if (this.context.math.distance(t, h.point) <= n)
        return h.type;
    return null;
  }
  onPointerDown(t) {
    const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.findRectangleAtPoint(n);
    if (r && this.context.state.getState().selectedObjects.includes(r.id)) {
      const h = this.findNearestCorner(n, r);
      if (h) {
        this.state.currentRectangle = r, this.state.dragTarget = h, this.state.isCreating = !1;
        const { x: S, y: W, width: P, height: y } = r.properties;
        switch (h) {
          case "corner-tl":
            this.state.lockedCorner = { x: S + P, y: W };
            break;
          case "corner-tr":
            this.state.lockedCorner = { x: S, y: W };
            break;
          case "corner-bl":
            this.state.lockedCorner = { x: S + P, y: W + y };
            break;
          case "corner-br":
            this.state.lockedCorner = { x: S, y: W + y };
            break;
        }
        return;
      } else {
        this.state.currentRectangle = r, this.state.dragTarget = "move", this.state.dragOffset = {
          x: n.x - r.properties.x,
          y: n.y - r.properties.y
        }, this.state.isCreating = !1;
        return;
      }
    }
    if (this.context.state.getState().selectedObjects.some((d) => {
      const h = this.context.canvas.getObject(d);
      return (h == null ? void 0 : h.type) === "rectangle";
    }))
      return;
    this.state.isCreating = !0, this.state.startPoint = n;
    const a = {
      id: this.generateId(),
      type: "rectangle",
      properties: {
        x: n.x,
        y: n.y,
        width: 0,
        height: 0,
        area: 0
      },
      visible: !0,
      selected: !1,
      zIndex: 0
    };
    this.state.currentRectangle = a, this.context.canvas.addObject(a);
  }
  onPointerMove(t) {
    if (!this.state.currentRectangle) return;
    const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.startPoint) {
      const r = Math.min(this.state.startPoint.x, n.x), o = Math.min(this.state.startPoint.y, n.y), c = Math.abs(n.x - this.state.startPoint.x), a = Math.abs(n.y - this.state.startPoint.y), d = c * a;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: r,
          y: o,
          width: c,
          height: a,
          area: d
        }
      });
    } else if (this.state.dragTarget === "move" && this.state.dragOffset) {
      const r = n.x - this.state.dragOffset.x, o = n.y - this.state.dragOffset.y;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          ...this.state.currentRectangle.properties,
          x: r,
          y: o
        }
      });
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith("corner-") && this.state.lockedCorner) {
      const r = this.state.lockedCorner, o = Math.min(n.x, r.x), c = Math.max(n.x, r.x), a = Math.min(n.y, r.y), d = Math.max(n.y, r.y), h = o, S = a, W = c - o, P = d - a, y = Math.max(0.1, W), l = Math.max(0.1, P), m = y * l;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: h,
          y: S,
          width: y,
          height: l,
          area: m
        }
      });
    }
    this.context.events.emit("rectangle:update", {
      rectangleId: this.state.currentRectangle.id,
      rectangle: this.context.canvas.getObject(this.state.currentRectangle.id)
    });
  }
  onPointerUp(t) {
    if (this.state.isCreating && this.state.currentRectangle) {
      const s = this.context.canvas.getObject(this.state.currentRectangle.id);
      s && (s.properties.width < 0.1 || s.properties.height < 0.1 ? this.context.canvas.removeObject(this.state.currentRectangle.id) : (this.context.events.emit("rectangle:created", {
        rectangleId: this.state.currentRectangle.id,
        rectangle: s
      }), this.context.events.emit("tool:creation-complete", {
        toolId: this.id,
        objectId: this.state.currentRectangle.id
      })));
    }
    this.state = {
      isCreating: !1,
      startPoint: null,
      currentRectangle: null,
      dragTarget: null,
      dragOffset: null,
      lockedCorner: null
    };
  }
}
function Ts() {
  return new ks();
}
class As {
  constructor() {
    ee(this, "id", "circle-tool");
    ee(this, "name", "Circle Builder");
    ee(this, "context");
    ee(this, "state", {
      isCreating: !1,
      center: null,
      currentCircle: null,
      dragTarget: null,
      dragOffset: null
    });
  }
  init(t) {
    this.context = t, t.events.on("tool:changed", this.handleToolChange.bind(this)), t.events.on("tool:cancel", this.handleToolCancel.bind(this));
  }
  destroy() {
    this.context.events.off("tool:changed", this.handleToolChange.bind(this)), this.context.events.off("tool:cancel", this.handleToolCancel.bind(this));
  }
  handleToolChange(t) {
    t.current !== this.id && this.cancelCreation();
  }
  handleToolCancel(t) {
    t.toolId === this.id && this.cancelCreation();
  }
  cancelCreation() {
    this.state.currentCircle && this.state.isCreating && this.context.canvas.removeObject(this.state.currentCircle.id), this.state = {
      isCreating: !1,
      center: null,
      currentCircle: null,
      dragTarget: null,
      dragOffset: null
    };
  }
  generateId() {
    return `circle_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  snapPoint(t) {
    const s = this.context.state.getState();
    if (s.snapToGrid) {
      if (Math.sqrt(t.x * t.x + t.y * t.y) <= 0.75)
        return { x: 0, y: 0 };
      const o = Le.getState(), c = nt(
        s.viewport,
        o.snapPrecision
      );
      return this.context.math.snapToGrid(t, c);
    }
    return t;
  }
  calculateCircleProperties(t, s) {
    const n = this.context.math.distance(t, s), r = n * 2, o = 2 * Math.PI * n, c = Math.PI * n * n;
    return { radius: n, diameter: r, circumference: o, area: c };
  }
  findCircleAtPoint(t) {
    const s = this.context.canvas.getAllObjects();
    for (const n of s)
      if (n.type === "circle") {
        const r = n;
        if (this.context.math.distance(t, r.properties.center) <= r.properties.radius + 0.5)
          return r;
      }
    return null;
  }
  findNearestHandle(t, s, n = 0.5) {
    const { center: r, radius: o } = s.properties;
    if (this.context.math.distance(t, r) <= n)
      return "center";
    const c = { x: r.x + o, y: r.y };
    return this.context.math.distance(t, c) <= n ? "radius" : null;
  }
  onPointerDown(t) {
    const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.findCircleAtPoint(n);
    if (r && !this.context.state.getState().selectedObjects.includes(r.id))
      return;
    if (r && this.context.state.getState().selectedObjects.includes(r.id)) {
      const h = this.findNearestHandle(n, r);
      if (h) {
        this.state.currentCircle = r, this.state.dragTarget = h, this.state.isCreating = !1, h === "center" && (this.state.dragOffset = {
          x: n.x - r.properties.center.x,
          y: n.y - r.properties.center.y
        });
        return;
      } else {
        this.state.currentCircle = r, this.state.dragTarget = "center", this.state.isCreating = !1, this.state.dragOffset = {
          x: n.x - r.properties.center.x,
          y: n.y - r.properties.center.y
        };
        return;
      }
    }
    if (this.context.state.getState().selectedObjects.some((d) => {
      const h = this.context.canvas.getObject(d);
      return (h == null ? void 0 : h.type) === "circle";
    }))
      return;
    this.state.isCreating = !0, this.state.center = n;
    const a = {
      id: this.generateId(),
      type: "circle",
      properties: {
        center: n,
        radius: 0,
        diameter: 0,
        circumference: 0,
        area: 0
      },
      visible: !0,
      selected: !1,
      zIndex: 0
    };
    this.state.currentCircle = a, this.context.canvas.addObject(a);
  }
  onPointerMove(t) {
    if (!this.state.currentCircle) return;
    const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.center) {
      const r = this.calculateCircleProperties(this.state.center, n);
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          center: this.state.center,
          ...r
        }
      });
    } else if (this.state.dragTarget === "center" && this.state.dragOffset) {
      const r = {
        x: n.x - this.state.dragOffset.x,
        y: n.y - this.state.dragOffset.y
      };
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          ...this.state.currentCircle.properties,
          center: r
        }
      });
    } else if (this.state.dragTarget === "radius") {
      const r = this.state.currentCircle.properties.center, o = this.calculateCircleProperties(r, n);
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          center: r,
          ...o
        }
      });
    }
    this.context.events.emit("circle:update", {
      circleId: this.state.currentCircle.id,
      circle: this.context.canvas.getObject(this.state.currentCircle.id)
    });
  }
  onPointerUp(t) {
    if (this.state.isCreating && this.state.currentCircle) {
      const s = this.context.canvas.getObject(this.state.currentCircle.id);
      s && (s.properties.radius < 0.1 ? this.context.canvas.removeObject(this.state.currentCircle.id) : (this.context.events.emit("circle:created", {
        circleId: this.state.currentCircle.id,
        circle: s
      }), this.context.events.emit("tool:creation-complete", {
        toolId: this.id,
        objectId: this.state.currentCircle.id
      })));
    }
    this.state = {
      isCreating: !1,
      center: null,
      currentCircle: null,
      dragTarget: null,
      dragOffset: null
    };
  }
}
function Ns() {
  return new As();
}
class Os {
  constructor() {
    ee(this, "id", "triangle-tool");
    ee(this, "name", "Triangle Builder");
    ee(this, "context");
    ee(this, "state", {
      isCreating: !1,
      creationStep: 0,
      vertices: [null, null, null],
      currentTriangle: null,
      dragTarget: null,
      dragOffset: null
    });
  }
  init(t) {
    this.context = t, t.events.on("tool:changed", this.handleToolChange.bind(this)), t.events.on("tool:cancel", this.handleToolCancel.bind(this));
  }
  destroy() {
    this.context.events.off("tool:changed", this.handleToolChange.bind(this)), this.context.events.off("tool:cancel", this.handleToolCancel.bind(this));
  }
  handleToolChange(t) {
    t.current !== this.id && this.cancelCreation();
  }
  handleToolCancel(t) {
    t.toolId === this.id && this.cancelCreation();
  }
  cancelCreation() {
    this.state.currentTriangle && this.state.isCreating && this.context.canvas.removeObject(this.state.currentTriangle.id), this.state = {
      isCreating: !1,
      creationStep: 0,
      vertices: [null, null, null],
      currentTriangle: null,
      dragTarget: null,
      dragOffset: null
    };
  }
  generateId() {
    return `triangle_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  snapPoint(t) {
    const s = this.context.state.getState();
    if (s.snapToGrid) {
      if (Math.sqrt(t.x * t.x + t.y * t.y) <= 0.75)
        return { x: 0, y: 0 };
      const o = Le.getState(), c = nt(
        s.viewport,
        o.snapPrecision
      );
      return this.context.math.snapToGrid(t, c);
    }
    return t;
  }
  calculateTriangleProperties(t) {
    const [s, n, r] = t, o = this.context.math.distance(n, r), c = this.context.math.distance(s, r), a = this.context.math.distance(s, n), d = Math.acos((c * c + a * a - o * o) / (2 * c * a)) * 180 / Math.PI, h = Math.acos((o * o + a * a - c * c) / (2 * o * a)) * 180 / Math.PI, S = 180 - d - h, W = Math.abs((n.x - s.x) * (r.y - s.y) - (r.x - s.x) * (n.y - s.y)) / 2, P = o + c + a;
    let y = "scalene";
    const l = 0.1;
    return Math.abs(d - 90) < l || Math.abs(h - 90) < l || Math.abs(S - 90) < l ? y = "right" : d > 90 || h > 90 || S > 90 ? y = "obtuse" : d < 90 && h < 90 && S < 90 && (y = "acute"), Math.abs(o - c) < l && Math.abs(c - a) < l ? y = "equilateral" : (Math.abs(o - c) < l || Math.abs(c - a) < l || Math.abs(o - a) < l) && (y = "isosceles"), {
      sideA: o,
      sideB: c,
      sideC: a,
      angleA: d,
      angleB: h,
      angleC: S,
      area: W,
      perimeter: P,
      type: y
    };
  }
  findTriangleAtPoint(t) {
    const s = this.context.canvas.getAllObjects();
    for (const n of s)
      if (n.type === "triangle") {
        const r = n, [o, c, a] = r.properties.vertices, d = (c.y - a.y) * (o.x - a.x) + (a.x - c.x) * (o.y - a.y), h = ((c.y - a.y) * (t.x - a.x) + (a.x - c.x) * (t.y - a.y)) / d, S = ((a.y - o.y) * (t.x - a.x) + (o.x - a.x) * (t.y - a.y)) / d, W = 1 - h - S;
        if (h >= 0 && S >= 0 && W >= 0)
          return r;
      }
    return null;
  }
  findNearestVertex(t, s, n = 0.5) {
    const r = s.properties.vertices;
    for (let o = 0; o < r.length; o++)
      if (this.context.math.distance(t, r[o]) <= n)
        return `vertex${o}`;
    return null;
  }
  onPointerDown(t) {
    const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.findTriangleAtPoint(n);
    if (r && this.context.state.getState().selectedObjects.includes(r.id)) {
      const c = this.findNearestVertex(n, r);
      if (c) {
        this.state.currentTriangle = r, this.state.dragTarget = c, this.state.isCreating = !1;
        return;
      } else {
        this.state.currentTriangle = r, this.state.dragTarget = "move";
        const a = {
          x: (r.properties.vertices[0].x + r.properties.vertices[1].x + r.properties.vertices[2].x) / 3,
          y: (r.properties.vertices[0].y + r.properties.vertices[1].y + r.properties.vertices[2].y) / 3
        };
        this.state.dragOffset = {
          x: n.x - a.x,
          y: n.y - a.y
        }, this.state.isCreating = !1;
        return;
      }
    }
    if (!this.state.isCreating) {
      if (this.context.state.getState().selectedObjects.some((h) => {
        const S = this.context.canvas.getObject(h);
        return (S == null ? void 0 : S.type) === "triangle";
      }))
        return;
      this.state.isCreating = !0, this.state.creationStep = 0, this.state.vertices = [n, null, null];
      const a = { x: n.x + 3, y: n.y };
      this.state.vertices[1] = a, this.state.creationStep = 1;
      const d = {
        id: this.generateId(),
        type: "triangle",
        properties: {
          vertices: [n, a, n],
          sideA: 0,
          sideB: 0,
          sideC: 0,
          angleA: 0,
          angleB: 0,
          angleC: 0,
          area: 0,
          perimeter: 0,
          type: "scalene"
        },
        visible: !0,
        selected: !1,
        zIndex: 0
      };
      this.state.currentTriangle = d, this.context.canvas.addObject(d);
    }
  }
  onPointerMove(t) {
    if (!this.state.currentTriangle) return;
    const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.creationStep === 1) {
      const [r, o] = this.state.vertices;
      if (r && o) {
        const c = { x: o.x, y: n.y }, a = [r, o, c], d = this.calculateTriangleProperties(a);
        this.context.canvas.updateObject(this.state.currentTriangle.id, {
          properties: {
            vertices: a,
            ...d
          }
        });
      }
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith("vertex")) {
      const r = parseInt(this.state.dragTarget.replace("vertex", "")), o = [...this.state.currentTriangle.properties.vertices];
      o[r] = n;
      const c = this.calculateTriangleProperties(o);
      this.context.canvas.updateObject(this.state.currentTriangle.id, {
        properties: {
          vertices: o,
          ...c
        }
      });
    } else if (this.state.dragTarget === "move" && this.state.dragOffset) {
      const r = {
        x: n.x - this.state.dragOffset.x,
        y: n.y - this.state.dragOffset.y
      }, o = {
        x: (this.state.currentTriangle.properties.vertices[0].x + this.state.currentTriangle.properties.vertices[1].x + this.state.currentTriangle.properties.vertices[2].x) / 3,
        y: (this.state.currentTriangle.properties.vertices[0].y + this.state.currentTriangle.properties.vertices[1].y + this.state.currentTriangle.properties.vertices[2].y) / 3
      }, c = {
        x: r.x - o.x,
        y: r.y - o.y
      }, a = [
        { x: this.state.currentTriangle.properties.vertices[0].x + c.x, y: this.state.currentTriangle.properties.vertices[0].y + c.y },
        { x: this.state.currentTriangle.properties.vertices[1].x + c.x, y: this.state.currentTriangle.properties.vertices[1].y + c.y },
        { x: this.state.currentTriangle.properties.vertices[2].x + c.x, y: this.state.currentTriangle.properties.vertices[2].y + c.y }
      ];
      this.context.canvas.updateObject(this.state.currentTriangle.id, {
        properties: {
          ...this.state.currentTriangle.properties,
          vertices: a
        }
      });
    }
    this.context.events.emit("triangle:update", {
      triangleId: this.state.currentTriangle.id,
      triangle: this.context.canvas.getObject(this.state.currentTriangle.id)
    });
  }
  onPointerUp(t) {
    if (this.state.isCreating && this.state.currentTriangle && this.state.creationStep === 1) {
      const s = this.context.canvas.getObject(this.state.currentTriangle.id);
      s && (s.properties.area < 0.1 ? this.context.canvas.removeObject(this.state.currentTriangle.id) : (this.context.events.emit("triangle:created", {
        triangleId: this.state.currentTriangle.id,
        triangle: s
      }), this.context.events.emit("tool:creation-complete", {
        toolId: this.id,
        objectId: this.state.currentTriangle.id
      })));
    }
    this.state = {
      isCreating: !1,
      creationStep: 0,
      vertices: [null, null, null],
      currentTriangle: null,
      dragTarget: null,
      dragOffset: null
    };
  }
}
function Fs() {
  return new Os();
}
class zs {
  constructor() {
    ee(this, "id", "function-tool");
    ee(this, "name", "Function Grapher");
    ee(this, "context");
    ee(this, "state", {
      isCreating: !1,
      currentFunction: null,
      dragTarget: null,
      dragOffset: null,
      equation: "x^2",
      functionType: "polynomial"
    });
  }
  init(t) {
    this.context = t, t.events.on("tool:changed", this.handleToolChange.bind(this)), t.events.on("tool:cancel", this.handleToolCancel.bind(this));
  }
  destroy() {
    this.context.events.off("tool:changed", this.handleToolChange.bind(this)), this.context.events.off("tool:cancel", this.handleToolCancel.bind(this));
  }
  handleToolChange(t) {
    t.current !== this.id && this.cancelCreation();
  }
  handleToolCancel(t) {
    t.toolId === this.id && this.cancelCreation();
  }
  cancelCreation() {
    this.state.currentFunction && this.state.isCreating && this.context.canvas.removeObject(this.state.currentFunction.id), this.state = {
      isCreating: !1,
      currentFunction: null,
      dragTarget: null,
      dragOffset: null,
      equation: "x^2",
      functionType: "polynomial"
    };
  }
  generateId() {
    return `function_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  snapPoint(t) {
    const s = this.context.state.getState();
    if (s.snapToGrid) {
      const n = Le.getState(), r = nt(
        s.viewport,
        n.snapPrecision
      );
      return this.context.math.snapToGrid(t, r);
    }
    return t;
  }
  evaluateFunction(t, s) {
    try {
      const n = t.replace(/\bx\b/g, `(${s})`).replace(/\^/g, "**").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/log/g, "Math.log").replace(/ln/g, "Math.log").replace(/exp/g, "Math.exp").replace(/sqrt/g, "Math.sqrt").replace(/abs/g, "Math.abs").replace(/pi/g, "Math.PI").replace(/e\b/g, "Math.E"), o = new Function("x", `return ${n}`)(s);
      if (typeof o == "number" && !isNaN(o) && isFinite(o))
        return o;
    } catch {
    }
    return null;
  }
  generateFunctionPoints(t, s, n) {
    const r = [], o = (s.max - s.min) / (n * (s.max - s.min));
    for (let c = s.min; c <= s.max; c += o) {
      const a = this.evaluateFunction(t, c);
      a !== null && r.push({ x: c, y: a });
    }
    return r;
  }
  detectFunctionType(t) {
    return t.includes("sin") || t.includes("cos") || t.includes("tan") ? "trigonometric" : t.includes("exp") || t.includes("e^") ? "exponential" : t.includes("log") || t.includes("ln") ? "logarithmic" : /x\^\d+|x\*\*\d+/.test(t) ? "polynomial" : "custom";
  }
  getDefaultEquation(t) {
    switch (t) {
      case "polynomial":
        return "x^2";
      case "trigonometric":
        return "sin(x)";
      case "exponential":
        return "exp(x)";
      case "logarithmic":
        return "log(x)";
      default:
        return "x^2";
    }
  }
  findFunctionAtPoint(t) {
    const s = this.context.canvas.getAllObjects(), n = 0.3;
    for (const r of s)
      if (r.type === "function") {
        const o = r;
        for (let c = 0; c < o.properties.points.length - 1; c++) {
          const a = o.properties.points[c], d = o.properties.points[c + 1];
          if (!a || !d) continue;
          const h = d.x - a.x, S = d.y - a.y, W = Math.sqrt(h * h + S * S);
          if (W === 0) continue;
          const P = Math.max(0, Math.min(1, ((t.x - a.x) * h + (t.y - a.y) * S) / (W * W))), y = {
            x: a.x + P * h,
            y: a.y + P * S
          };
          if (Math.sqrt(
            (t.x - y.x) ** 2 + (t.y - y.y) ** 2
          ) <= n)
            return o;
        }
      }
    return null;
  }
  onPointerDown(t) {
    const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.findFunctionAtPoint(n);
    if (r && this.context.state.getState().selectedObjects.includes(r.id)) {
      const c = r.properties.domain, a = this.evaluateFunction(r.properties.equation, c.min), d = this.evaluateFunction(r.properties.equation, c.max);
      if (a !== null && Math.abs(n.x - c.min) < 0.5 && Math.abs(n.y - a) < 0.5) {
        this.state.currentFunction = r, this.state.dragTarget = "domain-start", this.state.isCreating = !1;
        return;
      } else if (d !== null && Math.abs(n.x - c.max) < 0.5 && Math.abs(n.y - d) < 0.5) {
        this.state.currentFunction = r, this.state.dragTarget = "domain-end", this.state.isCreating = !1;
        return;
      } else {
        this.state.currentFunction = r, this.state.dragTarget = "move", this.state.dragOffset = { x: 0, y: 0 }, this.state.isCreating = !1;
        return;
      }
    }
    if (!this.state.isCreating) {
      if (this.context.state.getState().selectedObjects.some((W) => {
        const P = this.context.canvas.getObject(W);
        return (P == null ? void 0 : P.type) === "function";
      }))
        return;
      this.state.isCreating = !0, this.state.equation = this.getDefaultEquation(this.state.functionType);
      const a = 8, d = {
        min: n.x - a / 2,
        max: n.x + a / 2
      }, h = this.generateFunctionPoints(this.state.equation, d, 20), S = {
        id: this.generateId(),
        type: "function",
        properties: {
          equation: this.state.equation,
          functionType: this.detectFunctionType(this.state.equation),
          domain: d,
          points: h,
          resolution: 20,
          color: "#2563eb",
          strokeWidth: 2
        },
        visible: !0,
        selected: !1,
        zIndex: 0
      };
      this.state.currentFunction = S, this.context.canvas.addObject(S);
    }
  }
  onPointerMove(t) {
    if (!this.state.currentFunction) return;
    const s = { x: t.x, y: t.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.dragTarget === "domain-start") {
      const r = {
        min: Math.min(n.x, this.state.currentFunction.properties.domain.max - 0.1),
        max: this.state.currentFunction.properties.domain.max
      }, o = this.generateFunctionPoints(
        this.state.currentFunction.properties.equation,
        r,
        this.state.currentFunction.properties.resolution
      );
      this.context.canvas.updateObject(this.state.currentFunction.id, {
        properties: {
          ...this.state.currentFunction.properties,
          domain: r,
          points: o
        }
      });
    } else if (this.state.dragTarget === "domain-end") {
      const r = {
        min: this.state.currentFunction.properties.domain.min,
        max: Math.max(n.x, this.state.currentFunction.properties.domain.min + 0.1)
      }, o = this.generateFunctionPoints(
        this.state.currentFunction.properties.equation,
        r,
        this.state.currentFunction.properties.resolution
      );
      this.context.canvas.updateObject(this.state.currentFunction.id, {
        properties: {
          ...this.state.currentFunction.properties,
          domain: r,
          points: o
        }
      });
    } else if (this.state.dragTarget === "move") {
      if (!this.state.dragOffset) {
        const d = (this.state.currentFunction.properties.domain.min + this.state.currentFunction.properties.domain.max) / 2;
        this.state.dragOffset = { x: n.x - d, y: 0 };
      }
      (this.state.currentFunction.properties.domain.min + this.state.currentFunction.properties.domain.max) / 2;
      const r = n.x - this.state.dragOffset.x, o = this.state.currentFunction.properties.domain.max - this.state.currentFunction.properties.domain.min, c = {
        min: r - o / 2,
        max: r + o / 2
      }, a = this.generateFunctionPoints(
        this.state.currentFunction.properties.equation,
        c,
        this.state.currentFunction.properties.resolution
      );
      this.context.canvas.updateObject(this.state.currentFunction.id, {
        properties: {
          ...this.state.currentFunction.properties,
          domain: c,
          points: a
        }
      });
    }
    this.context.events.emit("function:update", {
      functionId: this.state.currentFunction.id,
      function: this.context.canvas.getObject(this.state.currentFunction.id)
    });
  }
  onPointerUp(t) {
    this.state.isCreating && this.state.currentFunction && (this.context.events.emit("function:created", {
      functionId: this.state.currentFunction.id,
      function: this.context.canvas.getObject(this.state.currentFunction.id)
    }), this.context.events.emit("tool:creation-complete", {
      toolId: this.id,
      objectId: this.state.currentFunction.id
    })), this.state = {
      ...this.state,
      isCreating: !1,
      currentFunction: null,
      dragTarget: null,
      dragOffset: null
    };
  }
}
function Ds() {
  return new zs();
}
class Rs {
  constructor() {
    ee(this, "id", "area-counter");
    ee(this, "name", "Area Counter");
    ee(this, "context");
    ee(this, "badges", /* @__PURE__ */ new Map());
    ee(this, "badgeElements", /* @__PURE__ */ new Map());
  }
  init(t) {
    this.context = t, t.events.on("rectangle:created", this.handleRectangleCreated.bind(this)), t.events.on("rectangle:update", this.handleRectangleUpdated.bind(this)), t.events.on("object:removed", this.handleObjectRemoved.bind(this)), this.createBadgesForExistingRectangles();
    const s = t.state.subscribe((n) => {
      this.updateBadgePositions();
    });
    this.unsubscribeFromState = s;
  }
  destroy() {
    this.context.events.off("rectangle:created", this.handleRectangleCreated.bind(this)), this.context.events.off("rectangle:update", this.handleRectangleUpdated.bind(this)), this.context.events.off("object:removed", this.handleObjectRemoved.bind(this)), this.unsubscribeFromState && this.unsubscribeFromState(), this.badgeElements.forEach((t) => {
      t.remove();
    }), this.badgeElements.clear(), this.badges.clear();
  }
  createBadgesForExistingRectangles() {
    this.context.canvas.getAllObjects().forEach((s) => {
      s.type === "rectangle" && this.createBadge(s);
    });
  }
  handleRectangleCreated(t) {
    this.createBadge(t.rectangle);
  }
  handleRectangleUpdated(t) {
    this.updateBadge(t.rectangle);
  }
  handleObjectRemoved(t) {
    this.removeBadge(t.objectId);
  }
  createBadge(t) {
    const s = {
      rectangleId: t.id,
      x: t.properties.x,
      y: t.properties.y,
      width: t.properties.width,
      height: t.properties.height,
      area: t.properties.area,
      visible: !0
    };
    this.badges.set(t.id, s), this.createBadgeElement(s);
  }
  updateBadge(t) {
    const s = this.badges.get(t.id);
    s && (s.x = t.properties.x, s.y = t.properties.y, s.width = t.properties.width, s.height = t.properties.height, s.area = t.properties.area, this.updateBadgeElement(s));
  }
  removeBadge(t) {
    const s = this.badgeElements.get(t);
    s && (s.remove(), this.badgeElements.delete(t)), this.badges.delete(t);
  }
  createBadgeElement(t) {
    const s = document.createElement("div");
    s.className = "area-badge", s.style.cssText = `
      position: absolute;
      background: rgba(34, 197, 94, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      white-space: nowrap;
      pointer-events: none;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(34, 197, 94, 1);
    `, (document.querySelector("[data-grix-canvas]") || document.body).appendChild(s), this.badgeElements.set(t.rectangleId, s), this.updateBadgeElement(t);
  }
  updateBadgeElement(t) {
    const s = this.badgeElements.get(t.rectangleId);
    if (!s) return;
    const n = t.x + t.width / 2, r = t.y + t.height / 2, o = this.context.canvas.worldToScreen({ x: n, y: r }), c = this.formatArea(t.area, t.width, t.height);
    s.textContent = c;
    const a = s.getBoundingClientRect();
    s.style.left = `${o.x - a.width / 2}px`, s.style.top = `${o.y - a.height / 2}px`, s.style.display = "none";
  }
  formatArea(t, s, n) {
    return "";
  }
  updateBadgePositions() {
    this.badges.forEach((t) => {
      this.updateBadgeElement(t);
    });
  }
  // Additional public methods for external control
  showBadge(t) {
    const s = this.badges.get(t);
    s && (s.visible = !0, this.updateBadgeElement(s));
  }
  hideBadge(t) {
    const s = this.badges.get(t);
    if (s) {
      s.visible = !1;
      const n = this.badgeElements.get(t);
      n && (n.style.display = "none");
    }
  }
  showAllBadges() {
    this.badges.forEach((t, s) => {
      this.showBadge(s);
    });
  }
  hideAllBadges() {
    this.badges.forEach((t, s) => {
      this.hideBadge(s);
    });
  }
}
function Is() {
  return new Rs();
}
function Ls() {
  const { registerPlugin: i } = ft(), t = Re(!1);
  return pe(() => {
    if (t.current) return;
    const s = Ps(), n = Ts(), r = Ns(), o = Fs(), c = Ds(), a = Is();
    return i(s), i(n), i(r), i(o), i(c), i(a), t.current = !0, () => {
    };
  }, [i]), /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-screen bg-gray-50", children: [
    /* @__PURE__ */ e.jsx(Cs, {}),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 relative", "data-grix-canvas": !0, children: /* @__PURE__ */ e.jsx(
      ws,
      {
        width: window.innerWidth,
        height: window.innerHeight - 60,
        className: "absolute inset-0"
      }
    ) })
  ] });
}
function Bs() {
  return /* @__PURE__ */ e.jsx(It, { children: /* @__PURE__ */ e.jsx(Ms, { children: /* @__PURE__ */ e.jsx(js, { children: /* @__PURE__ */ e.jsx(es, { children: /* @__PURE__ */ e.jsx(It, { children: /* @__PURE__ */ e.jsx(Ls, {}) }) }) }) }) });
}
const Gs = "0.1.0";
export {
  ws as Canvas,
  Bs as GrixApp,
  es as PluginManagerProvider,
  Cs as ToolBar,
  Is as createAreaCounter,
  Ps as createRayTool,
  Ts as createRectangleTool,
  Ne as useCanvasStore,
  ss as useInputSystem,
  ft as usePluginManager,
  Gs as version
};
