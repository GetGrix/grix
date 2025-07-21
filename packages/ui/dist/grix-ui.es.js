var _t = Object.defineProperty;
var qt = (n, t, s) => t in n ? _t(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var ie = (n, t, s) => qt(n, typeof t != "symbol" ? t + "" : t, s);
import Qe, { createContext as Lt, useState as te, useRef as Re, useEffect as me, useContext as Wt, useCallback as Ce } from "react";
var gt = { exports: {} }, ct = {};
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
  if (Ct) return ct;
  Ct = 1;
  var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(i, r, o) {
    var c = null;
    if (o !== void 0 && (c = "" + o), r.key !== void 0 && (c = "" + r.key), "key" in r) {
      o = {};
      for (var a in r)
        a !== "key" && (o[a] = r[a]);
    } else o = r;
    return r = o.ref, {
      $$typeof: n,
      type: i,
      key: c,
      ref: r !== void 0 ? r : null,
      props: o
    };
  }
  return ct.Fragment = t, ct.jsx = s, ct.jsxs = s, ct;
}
var lt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function Xt() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && function() {
    function n(y) {
      if (y == null) return null;
      if (typeof y == "function")
        return y.$$typeof === R ? null : y.displayName || y.name || null;
      if (typeof y == "string") return y;
      switch (y) {
        case X:
          return "Fragment";
        case f:
          return "Profiler";
        case l:
          return "StrictMode";
        case b:
          return "Suspense";
        case Y:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof y == "object")
        switch (typeof y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), y.$$typeof) {
          case z:
            return "Portal";
          case _:
            return (y.displayName || "Context") + ".Provider";
          case p:
            return (y._context.displayName || "Context") + ".Consumer";
          case k:
            var V = y.render;
            return y = y.displayName, y || (y = V.displayName || V.name || "", y = y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef"), y;
          case $:
            return V = y.displayName || null, V !== null ? V : n(y.type) || "Memo";
          case A:
            V = y._payload, y = y._init;
            try {
              return n(y(V));
            } catch {
            }
        }
      return null;
    }
    function t(y) {
      return "" + y;
    }
    function s(y) {
      try {
        t(y);
        var V = !1;
      } catch {
        V = !0;
      }
      if (V) {
        V = console;
        var de = V.error, fe = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return de.call(
          V,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          fe
        ), t(y);
      }
    }
    function i(y) {
      if (y === X) return "<>";
      if (typeof y == "object" && y !== null && y.$$typeof === A)
        return "<...>";
      try {
        var V = n(y);
        return V ? "<" + V + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var y = J.A;
      return y === null ? null : y.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function c(y) {
      if (u.call(y, "key")) {
        var V = Object.getOwnPropertyDescriptor(y, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return y.key !== void 0;
    }
    function a(y, V) {
      function de() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          V
        ));
      }
      de.isReactWarning = !0, Object.defineProperty(y, "key", {
        get: de,
        configurable: !0
      });
    }
    function d() {
      var y = n(this.type);
      return Oe[y] || (Oe[y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), y = this.props.ref, y !== void 0 ? y : null;
    }
    function h(y, V, de, fe, ze, Z, ke, Be) {
      return de = Z.ref, y = {
        $$typeof: m,
        type: y,
        key: V,
        props: Z,
        _owner: ze
      }, (de !== void 0 ? de : null) !== null ? Object.defineProperty(y, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(y, "ref", { enumerable: !1, value: null }), y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(y, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ke
      }), Object.defineProperty(y, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Be
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    }
    function v(y, V, de, fe, ze, Z, ke, Be) {
      var oe = V.children;
      if (oe !== void 0)
        if (fe)
          if (j(oe)) {
            for (fe = 0; fe < oe.length; fe++)
              O(oe[fe]);
            Object.freeze && Object.freeze(oe);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(oe);
      if (u.call(V, "key")) {
        oe = n(y);
        var re = Object.keys(V).filter(function(be) {
          return be !== "key";
        });
        fe = 0 < re.length ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}", ce[oe + fe] || (re = 0 < re.length ? "{" + re.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          fe,
          oe,
          re,
          oe
        ), ce[oe + fe] = !0);
      }
      if (oe = null, de !== void 0 && (s(de), oe = "" + de), c(V) && (s(V.key), oe = "" + V.key), "key" in V) {
        de = {};
        for (var ye in V)
          ye !== "key" && (de[ye] = V[ye]);
      } else de = V;
      return oe && a(
        de,
        typeof y == "function" ? y.displayName || y.name || "Unknown" : y
      ), h(
        y,
        oe,
        Z,
        ze,
        r(),
        de,
        ke,
        Be
      );
    }
    function O(y) {
      typeof y == "object" && y !== null && y.$$typeof === m && y._store && (y._store.validated = 1);
    }
    var C = Qe, m = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), R = Symbol.for("react.client.reference"), J = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, u = Object.prototype.hasOwnProperty, j = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      "react-stack-bottom-frame": function(y) {
        return y();
      }
    };
    var ue, Oe = {}, ge = C["react-stack-bottom-frame"].bind(
      C,
      o
    )(), L = ne(i(o)), ce = {};
    lt.Fragment = X, lt.jsx = function(y, V, de, fe, ze) {
      var Z = 1e4 > J.recentlyCreatedOwnerStacks++;
      return v(
        y,
        V,
        de,
        !1,
        fe,
        ze,
        Z ? Error("react-stack-top-frame") : ge,
        Z ? ne(i(y)) : L
      );
    }, lt.jsxs = function(y, V, de, fe, ze) {
      var Z = 1e4 > J.recentlyCreatedOwnerStacks++;
      return v(
        y,
        V,
        de,
        !0,
        fe,
        ze,
        Z ? Error("react-stack-top-frame") : ge,
        Z ? ne(i(y)) : L
      );
    };
  }()), lt;
}
var Mt;
function Ut() {
  return Mt || (Mt = 1, process.env.NODE_ENV === "production" ? gt.exports = Yt() : gt.exports = Xt()), gt.exports;
}
var e = Ut();
const st = {
  // Vector operations
  distance(n, t) {
    const s = t.x - n.x, i = t.y - n.y;
    return Math.sqrt(s * s + i * i);
  },
  slope(n, t) {
    const s = t.x - n.x, i = t.y - n.y;
    return Math.abs(s) < Number.EPSILON ? s === 0 || s > 0 ? 1 / 0 : -1 / 0 : i / s;
  },
  angle(n, t) {
    const s = t.x - n.x, i = t.y - n.y;
    return Math.atan2(i, s);
  },
  magnitude(n) {
    return Math.sqrt(n.x * n.x + n.y * n.y);
  },
  normalize(n) {
    const t = this.magnitude(n);
    return t === 0 ? { x: 0, y: 0 } : { x: n.x / t, y: n.y / t };
  },
  // Grid operations
  snapToGrid(n, t) {
    return {
      x: Math.round(n.x / t) * t,
      y: Math.round(n.y / t) * t
    };
  },
  // Rectangle operations
  calculateArea(n) {
    return Math.abs(n.properties.width * n.properties.height);
  },
  boundsContainPoint(n, t) {
    return t.x >= n.x && t.x <= n.x + n.width && t.y >= n.y && t.y <= n.y + n.height;
  },
  boundsIntersect(n, t) {
    return !(n.x + n.width < t.x || t.x + t.width < n.x || n.y + n.height < t.y || t.y + t.height < n.y);
  },
  // Fraction utilities for educational features
  gcd(n, t) {
    for (n = Math.abs(n), t = Math.abs(t); t !== 0; ) {
      const s = t;
      t = n % t, n = s;
    }
    return n;
  },
  simplifyFraction(n, t) {
    if (t === 0)
      return [n, 1];
    const s = this.gcd(n, t);
    return [n / s, t / s];
  },
  // Coordinate transformations
  worldToScreen(n, t, s) {
    const i = s.width / 2, r = s.height / 2, o = (n.x - t.center.x) * t.zoom, c = (n.y - t.center.y) * t.zoom;
    return {
      x: i + o,
      y: r - c
      // Flip Y axis for mathematical coordinates
    };
  },
  screenToWorld(n, t, s) {
    const i = s.width / 2, r = s.height / 2, o = (n.x - i) / t.zoom, c = (r - n.y) / t.zoom;
    return {
      x: t.center.x + o,
      y: t.center.y + c
    };
  }
}, tt = {
  // Detect device capabilities
  detectCapabilities() {
    const n = "ontouchstart" in window || navigator.maxTouchPoints > 0, t = n && navigator.maxTouchPoints > 1, s = !0, i = window.matchMedia("(hover: hover)").matches;
    return {
      hasTouch: n,
      hasPencil: t,
      hasKeyboard: s,
      hasHover: i,
      maxTouchPoints: navigator.maxTouchPoints || 0,
      supportsPressure: "force" in Touch.prototype,
      supportsTilt: "altitudeAngle" in Touch.prototype
    };
  },
  // Normalize pointer events across input types
  normalizePointerEvent(n) {
    let t = "mouse";
    return n.pointerType === "touch" ? t = "touch" : n.pointerType === "pen" && (t = "pen"), {
      type: t,
      pressure: n.pressure || 0,
      tiltX: n.tiltX || 0,
      tiltY: n.tiltY || 0,
      x: n.clientX,
      y: n.clientY,
      timestamp: n.timeStamp,
      isPrimary: n.isPrimary,
      pointerId: n.pointerId
    };
  },
  // Calculate appropriate touch target size based on device
  getTouchTargetSize(n) {
    switch (n) {
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
    const i = this.listeners.get(t);
    if (i) {
      const r = i.indexOf(s);
      r > -1 && i.splice(r, 1);
    }
  }
  emit(t, s) {
    const i = this.listeners.get(t);
    i && i.forEach((r) => {
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
const kt = (n) => {
  let t;
  const s = /* @__PURE__ */ new Set(), i = (h, v) => {
    const O = typeof h == "function" ? h(t) : h;
    if (!Object.is(O, t)) {
      const C = t;
      t = v ?? (typeof O != "object" || O === null) ? O : Object.assign({}, t, O), s.forEach((m) => m(t, C));
    }
  }, r = () => t, a = { setState: i, getState: r, getInitialState: () => d, subscribe: (h) => (s.add(h), () => s.delete(h)) }, d = t = n(i, r, a);
  return a;
}, Vt = (n) => n ? kt(n) : kt, Zt = (n) => n;
function Kt(n, t = Zt) {
  const s = Qe.useSyncExternalStore(
    n.subscribe,
    () => t(n.getState()),
    () => t(n.getInitialState())
  );
  return Qe.useDebugValue(s), s;
}
const Pt = (n) => {
  const t = Vt(n), s = (i) => Kt(t, i);
  return Object.assign(s, t), s;
}, vt = (n) => n ? Pt(n) : Pt, Ke = class Ke {
  constructor() {
    ie(this, "STORAGE_KEY", "grix-app-state");
    ie(this, "VERSION_KEY", "grix-version");
    ie(this, "SESSION_KEY", "grix-session");
    ie(this, "CURRENT_VERSION", "1.0.0");
    ie(this, "options", {
      autoSave: !0,
      saveInterval: 2e3,
      // 2 seconds
      maxStorageSize: 10 * 1024 * 1024,
      // 10MB
      compressionEnabled: !0
    });
    ie(this, "autoSaveTimer", null);
    ie(this, "pendingSave", !1);
    ie(this, "sessionId");
    this.sessionId = this.generateSessionId(), this.initializeStorage(), this.setupAutoSave(), this.setupStorageEventListener();
  }
  static getInstance() {
    return Ke.instance || (Ke.instance = new Ke()), Ke.instance;
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
      const s = this.loadState(), i = {
        objects: t.objects ?? (s == null ? void 0 : s.objects) ?? [],
        selectedObjects: t.selectedObjects ?? (s == null ? void 0 : s.selectedObjects) ?? [],
        viewport: t.viewport ?? (s == null ? void 0 : s.viewport) ?? { zoom: 20, center: { x: 0, y: 0 } },
        visualizationSettings: t.visualizationSettings ?? (s == null ? void 0 : s.visualizationSettings) ?? {},
        activeTool: t.activeTool ?? (s == null ? void 0 : s.activeTool) ?? null,
        version: this.CURRENT_VERSION,
        timestamp: Date.now(),
        sessionId: this.sessionId
      }, r = JSON.stringify(i);
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
      let i = 0;
      for (let o in localStorage)
        localStorage.hasOwnProperty(o) && (i += localStorage[o].length + o.length);
      const r = this.loadState();
      return {
        isAvailable: typeof Storage < "u",
        usedSpace: i,
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
    const i = this.loadState();
    i && (i.version = s, this.saveState(i));
  }
};
ie(Ke, "instance");
let yt = Ke;
const ae = yt.getInstance(), Te = vt((n, t) => ({
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
  gridDensity: "fine",
  canvasSize: { width: 800, height: 600 },
  // Viewport actions
  setViewport: (s) => {
    n((i) => ({
      viewport: { ...i.viewport, ...s }
    })), ae.scheduleSave();
  },
  // Object management
  addObject: (s) => {
    n((i) => ({
      objects: [...i.objects, s]
    })), ae.scheduleSave();
  },
  removeObject: (s) => {
    n((i) => ({
      objects: i.objects.filter((r) => r.id !== s),
      selectedObjects: i.selectedObjects.filter((r) => r !== s)
    })), ae.scheduleSave();
  },
  updateObject: (s, i) => {
    n((r) => ({
      objects: r.objects.map(
        (o) => o.id === s ? { ...o, ...i } : o
      )
    })), ae.scheduleSave();
  },
  // Selection management
  selectObject: (s, i = !1) => {
    n((r) => i ? {
      selectedObjects: r.selectedObjects.includes(s) ? r.selectedObjects.filter((c) => c !== s) : [...r.selectedObjects, s]
    } : { selectedObjects: [s] });
  },
  clearSelection: () => {
    n({ selectedObjects: [] });
  },
  // Grid settings
  setSnapToGrid: (s) => {
    n({ snapToGrid: s });
  },
  setGridDensity: (s) => {
    n({ gridDensity: s });
  },
  // Canvas size
  setCanvasSize: (s) => {
    n({ canvasSize: s });
  },
  // Helper methods
  getObject: (s) => t().objects.find((i) => i.id === s),
  getAllObjects: () => t().objects,
  getSelectedObjects: () => {
    const s = t();
    return s.objects.filter((i) => s.selectedObjects.includes(i.id));
  },
  screenToWorld: (s) => {
    const { viewport: i, canvasSize: r } = t();
    return st.screenToWorld(s, i, r);
  },
  worldToScreen: (s) => {
    const { viewport: i, canvasSize: r } = t();
    return st.worldToScreen(s, i, r);
  },
  // Layer management
  bringToFront: (s) => {
    n((i) => {
      const r = Math.max(...i.objects.map((o) => o.zIndex || 0));
      return {
        objects: i.objects.map(
          (o) => o.id === s ? { ...o, zIndex: r + 1 } : o
        )
      };
    });
  },
  sendToBack: (s) => {
    n((i) => {
      const r = Math.min(...i.objects.map((o) => o.zIndex || 0));
      return {
        objects: i.objects.map(
          (o) => o.id === s ? { ...o, zIndex: r - 1 } : o
        )
      };
    });
  },
  bringForward: (s) => {
    n((i) => {
      const r = i.objects.find((a) => a.id === s);
      if (!r) return i;
      const o = i.objects.filter((a) => (a.zIndex || 0) > (r.zIndex || 0));
      if (o.length === 0) return i;
      const c = Math.min(...o.map((a) => a.zIndex || 0));
      return {
        objects: i.objects.map(
          (a) => a.id === s ? { ...a, zIndex: c + 0.1 } : a
        )
      };
    });
  },
  sendBackward: (s) => {
    n((i) => {
      const r = i.objects.find((a) => a.id === s);
      if (!r) return i;
      const o = i.objects.filter((a) => (a.zIndex || 0) < (r.zIndex || 0));
      if (o.length === 0) return i;
      const c = Math.max(...o.map((a) => a.zIndex || 0));
      return {
        objects: i.objects.map(
          (a) => a.id === s ? { ...a, zIndex: c - 0.1 } : a
        )
      };
    });
  },
  // State persistence methods
  clearObjects: () => {
    n({ objects: [], selectedObjects: [] }), ae.scheduleSave();
  },
  loadState: () => {
    const s = ae.loadState();
    s && n({
      objects: s.objects,
      selectedObjects: s.selectedObjects,
      viewport: s.viewport
    });
  },
  saveState: () => {
    const s = t();
    ae.saveState({
      objects: s.objects,
      selectedObjects: s.selectedObjects,
      viewport: s.viewport
    });
  }
})), Jt = () => ({
  addObject: (n) => Te.getState().addObject(n),
  removeObject: (n) => Te.getState().removeObject(n),
  updateObject: (n, t) => Te.getState().updateObject(n, t),
  getObject: (n) => Te.getState().getObject(n),
  getAllObjects: () => Te.getState().getAllObjects(),
  screenToWorld: (n) => Te.getState().screenToWorld(n),
  worldToScreen: (n) => Te.getState().worldToScreen(n)
}), Qt = () => ({
  getState: () => {
    const n = Te.getState();
    return {
      viewport: n.viewport,
      objects: n.objects,
      selectedObjects: n.selectedObjects,
      snapToGrid: n.snapToGrid,
      gridDensity: n.gridDensity
    };
  },
  setState: (n) => {
    Te.setState(n);
  },
  subscribe: (n) => Te.subscribe((t) => {
    n({
      viewport: t.viewport,
      objects: t.objects,
      selectedObjects: t.selectedObjects,
      snapToGrid: t.snapToGrid,
      gridDensity: t.gridDensity
    });
  })
}), $t = Lt(null);
function ft() {
  const n = Wt($t);
  if (!n)
    throw new Error("usePluginManager must be used within PluginManagerProvider");
  return n;
}
function es({ children: n }) {
  const [t] = te(() => new Ht()), [s] = te(() => /* @__PURE__ */ new Map()), [i] = te(() => /* @__PURE__ */ new Map()), [r, o] = te(null), c = Re(), a = Re(), d = Re();
  c.current || (c.current = Jt()), a.current || (a.current = Qt()), d.current || (d.current = {
    distance: st.distance,
    slope: st.slope,
    snapToGrid: st.snapToGrid,
    calculateArea: st.calculateArea
  });
  const h = c.current, v = a.current, O = d.current, C = (l) => {
    if (s.has(l.id)) {
      console.warn(`Plugin ${l.id} is already registered`);
      return;
    }
    const f = {
      canvas: h,
      events: t,
      state: v,
      math: O
    };
    s.set(l.id, l), i.set(l.id, f);
    try {
      l.init(f), console.log(`Plugin ${l.id} initialized successfully`);
    } catch (p) {
      console.error(`Failed to initialize plugin ${l.id}:`, p), s.delete(l.id), i.delete(l.id);
    }
  }, m = (l) => {
    var p;
    const f = s.get(l);
    if (f) {
      try {
        (p = f.destroy) == null || p.call(f);
      } catch (_) {
        console.error(`Error destroying plugin ${l}:`, _);
      }
      s.delete(l), i.delete(l), r === l && o(null);
    }
  }, z = () => Array.from(s.values());
  me(() => {
    t.emit("tool:changed", { previous: null, current: r });
  }, [r, t]), me(() => {
    const l = (k) => (b) => {
      var $, A, H, R, J, u;
      const Y = r ? s.get(r) : null;
      if (Y)
        try {
          switch (k) {
            case "pointer:down":
              ($ = Y.onPointerDown) == null || $.call(Y, b);
              break;
            case "pointer:move":
              (A = Y.onPointerMove) == null || A.call(Y, b);
              break;
            case "pointer:up":
              (H = Y.onPointerUp) == null || H.call(Y, b);
              break;
          }
        } catch (j) {
          console.error(`Error in plugin ${r} handling ${k}:`, j);
        }
      else {
        const j = v.getState().selectedObjects;
        try {
          let ne;
          if (j.length === 1) {
            const ue = h.getObject(j[0]);
            (ue == null ? void 0 : ue.type) === "ray" ? ne = s.get("ray-tool") : (ue == null ? void 0 : ue.type) === "rectangle" ? ne = s.get("rectangle-tool") : (ue == null ? void 0 : ue.type) === "circle" ? ne = s.get("circle-tool") : (ue == null ? void 0 : ue.type) === "triangle" ? ne = s.get("triangle-tool") : (ue == null ? void 0 : ue.type) === "function" && (ne = s.get("function-tool"));
          }
          if (ne)
            switch (k) {
              case "pointer:down":
                (R = ne.onPointerDown) == null || R.call(ne, b);
                break;
              case "pointer:move":
                (J = ne.onPointerMove) == null || J.call(ne, b);
                break;
              case "pointer:up":
                (u = ne.onPointerUp) == null || u.call(ne, b);
                break;
            }
        } catch (ne) {
          console.error(`Error in tool handling ${k} for manipulation:`, ne);
        }
      }
    }, f = l("pointer:down"), p = l("pointer:move"), _ = l("pointer:up");
    return t.on("pointer:down", f), t.on("pointer:move", p), t.on("pointer:up", _), () => {
      t.off("pointer:down", f), t.off("pointer:move", p), t.off("pointer:up", _);
    };
  }, [r, s, t, v, h]);
  const X = {
    eventBus: t,
    registerPlugin: C,
    unregisterPlugin: m,
    getActivePlugins: z,
    activeTool: r,
    setActiveTool: o
  };
  return /* @__PURE__ */ e.jsx($t.Provider, { value: X, children: n });
}
function ts() {
  const { eventBus: n } = ft();
  return {
    handlePointerDown: (r) => {
      n.emit("pointer:down", r);
    },
    handlePointerMove: (r) => {
      n.emit("pointer:move", r);
    },
    handlePointerUp: (r) => {
      n.emit("pointer:up", r);
    }
  };
}
function ss(n, t, s = {}) {
  const [i, r] = te(null), [o, c] = te(/* @__PURE__ */ new Map()), a = {
    enableGestures: !0,
    touchTargetSize: 44,
    preventScrolling: !0,
    ...s
  };
  me(() => {
    const l = tt.detectCapabilities();
    r(l);
  }, []);
  const [d, h] = te({
    isGesturing: !1,
    startTime: 0,
    startDistance: 0,
    lastTapTime: 0,
    tapCount: 0,
    initialCenter: null,
    wasRecentlyGesturing: !1
  }), v = Ce((l) => {
    const f = Array.from(l.values());
    if (f.length < 2) return 0;
    const p = f[0], _ = f[1];
    if (!p || !_) return 0;
    const k = p.x - _.x, b = p.y - _.y;
    return Math.sqrt(k * k + b * b);
  }, []), O = Ce((l) => {
    const f = Array.from(l.values());
    if (f.length === 0) return { x: 0, y: 0 };
    const p = f.reduce((_, k) => ({ x: _.x + k.x, y: _.y + k.y }), { x: 0, y: 0 });
    return { x: p.x / f.length, y: p.y / f.length };
  }, []), C = Ce((l) => {
    var b;
    if (!n.current) return;
    a.preventScrolling && l.preventDefault();
    const f = n.current.getBoundingClientRect(), p = l.clientX - f.left, _ = l.clientY - f.top, k = tt.normalizePointerEvent(l);
    k.x = p, k.y = _, c((Y) => {
      const $ = new Map(Y);
      if ($.set(l.pointerId, k), a.enableGestures && $.size >= 2) {
        const A = v($), H = O($);
        h((R) => ({
          ...R,
          isGesturing: !0,
          startTime: l.timeStamp,
          startDistance: A,
          initialCenter: H,
          wasRecentlyGesturing: !1
        }));
      }
      return $;
    }), n.current.setPointerCapture(l.pointerId), (b = t.onPointerDown) == null || b.call(t, k);
  }, [n, t, a, v]), m = Ce((l) => {
    var b;
    if (!n.current) return;
    const f = n.current.getBoundingClientRect(), p = l.clientX - f.left, _ = l.clientY - f.top, k = tt.normalizePointerEvent(l);
    k.x = p, k.y = _, c((Y) => {
      var A, H;
      const $ = new Map(Y);
      if ($.set(l.pointerId, k), a.enableGestures && $.size >= 2) {
        const R = v($), J = O($);
        if (d.isGesturing && d.startDistance > 0 && d.initialCenter) {
          const u = R / d.startDistance, j = {
            x: d.initialCenter.x * 0.7 + J.x * 0.3,
            y: d.initialCenter.y * 0.7 + J.y * 0.3
          };
          (A = t.onGesture) == null || A.call(t, {
            type: "pinch",
            center: j,
            scale: u,
            touches: $.size
          });
        }
      } else if (!($.size === 1 && d.wasRecentlyGesturing)) {
        if ($.size === 1 && d.isGesturing) {
          const R = O($);
          (H = t.onGesture) == null || H.call(t, {
            type: "pan",
            center: R,
            touches: $.size
          });
        }
      }
      return $;
    }), (b = t.onPointerMove) == null || b.call(t, k);
  }, [t, a, v, O, d]), z = Ce((l) => {
    var b;
    if (!n.current) return;
    const f = n.current.getBoundingClientRect(), p = l.clientX - f.left, _ = l.clientY - f.top, k = tt.normalizePointerEvent(l);
    k.x = p, k.y = _, c((Y) => {
      var A;
      const $ = new Map(Y);
      if ($.delete(l.pointerId), $.size < 2 && d.isGesturing && (h((H) => ({
        ...H,
        isGesturing: !1,
        wasRecentlyGesturing: !0,
        initialCenter: null
      })), setTimeout(() => {
        h((H) => ({
          ...H,
          wasRecentlyGesturing: !1
        }));
      }, 100)), a.enableGestures && $.size === 0) {
        const R = l.timeStamp - d.startTime < 200 && !d.wasRecentlyGesturing, J = l.timeStamp - d.lastTapTime;
        R && !d.isGesturing && (J < 300 ? h((u) => ({ ...u, tapCount: u.tapCount + 1 })) : ((A = t.onGesture) == null || A.call(t, {
          type: "tap",
          center: { x: k.x, y: k.y },
          touches: 1
        }), h((u) => ({
          ...u,
          tapCount: 1,
          lastTapTime: l.timeStamp
        })))), h((u) => ({ ...u, isGesturing: !1 }));
      }
      return $;
    }), n.current && n.current.releasePointerCapture(l.pointerId), (b = t.onPointerUp) == null || b.call(t, k);
  }, [n, t, a, d]), X = Ce((l) => {
    var b;
    if (!n.current) return;
    const f = n.current.getBoundingClientRect(), p = l.clientX - f.left, _ = l.clientY - f.top, k = tt.normalizePointerEvent(l);
    k.x = p, k.y = _, c((Y) => {
      const $ = new Map(Y);
      return $.delete(l.pointerId), $;
    }), h((Y) => ({ ...Y, isGesturing: !1 })), (b = t.onPointerCancel) == null || b.call(t, k);
  }, [t]);
  return me(() => {
    const l = n.current;
    if (!l) return;
    l.addEventListener("pointerdown", C), l.addEventListener("pointermove", m), l.addEventListener("pointerup", z), l.addEventListener("pointercancel", X);
    const f = (p) => p.preventDefault();
    return l.addEventListener("contextmenu", f), () => {
      l.removeEventListener("pointerdown", C), l.removeEventListener("pointermove", m), l.removeEventListener("pointerup", z), l.removeEventListener("pointercancel", X), l.removeEventListener("contextmenu", f);
    };
  }, [n, C, m, z, X]), {
    capabilities: i,
    activePointers: Array.from(o.values()),
    isGesturing: d.isGesturing,
    touchTargetSize: i ? tt.getTouchTargetSize(i.hasTouch ? "touch" : "mouse") : a.touchTargetSize
  };
}
function Gt(n, t = {
  minSpacing: 8,
  maxSpacing: 80,
  labelMinSpacing: 40
}) {
  const s = n.zoom;
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
function Tt(n) {
  if (n < 1)
    return n >= 0.5 ? 2 : n >= 0.2 ? 2.5 : (n >= 0.1, 2);
  if (n < 10)
    return n >= 5 ? 2 : n >= 2 ? 2.5 : (n >= 1, 2);
  {
    const t = Math.pow(10, Math.floor(Math.log10(n))), s = n / t;
    return s >= 5 ? 2 : s >= 2 ? 2.5 : (s >= 1, 2);
  }
}
function ns(n) {
  if (n <= 1)
    return n <= 0.1 || n <= 0.2 ? 2 : n <= 0.5 ? 2.5 : (n <= 1, 2);
  if (n <= 10)
    return n <= 2 ? 2 : n <= 5 ? 2.5 : (n <= 10, 2);
  {
    const t = Math.pow(10, Math.floor(Math.log10(n))), s = n / t;
    return s <= 2 ? 2 : s <= 5 ? 2.5 : (s <= 10, 2);
  }
}
function is(n, t, s, i, r = !0) {
  const { gridSize: o } = s, c = {
    left: n.center.x - t.width / 2 / n.zoom,
    right: n.center.x + t.width / 2 / n.zoom,
    top: n.center.y + t.height / 2 / n.zoom,
    bottom: n.center.y - t.height / 2 / n.zoom
  }, a = [], d = [], h = Math.floor(c.left / o) * o, v = Math.ceil(c.right / o) * o;
  for (let m = h; m <= v; m += o) {
    const z = i({ x: m, y: 0 }).x, X = Math.abs(m) < o / 2, l = Math.abs(m % (o * 5)) < o / 2;
    a.push({ x: z, isAxis: X, isMajor: l, isInteger: !1, value: m });
  }
  if (r && (o >= 2 || o < 1)) {
    const m = Math.floor(c.left), z = Math.ceil(c.right);
    for (let X = m; X <= z; X += 1)
      if (Math.abs(X % o) > 1e-3) {
        const l = i({ x: X, y: 0 }).x, f = Math.abs(X) < 0.5;
        a.push({ x: l, isAxis: f, isMajor: !1, isInteger: !0, value: X });
      }
  }
  const O = Math.floor(c.bottom / o) * o, C = Math.ceil(c.top / o) * o;
  for (let m = O; m <= C; m += o) {
    const z = i({ x: 0, y: m }).y, X = Math.abs(m) < o / 2, l = Math.abs(m % (o * 5)) < o / 2;
    d.push({ y: z, isAxis: X, isMajor: l, isInteger: !1, value: m });
  }
  if (r && (o >= 2 || o < 1)) {
    const m = Math.floor(c.bottom), z = Math.ceil(c.top);
    for (let X = m; X <= z; X += 1)
      if (Math.abs(X % o) > 1e-3) {
        const l = i({ x: 0, y: X }).y, f = Math.abs(X) < 0.5;
        d.push({ y: l, isAxis: f, isMajor: !1, isInteger: !0, value: X });
      }
  }
  return { verticalLines: a, horizontalLines: d };
}
function we(n, t = 3) {
  if (Number.isInteger(n))
    return n.toString();
  const s = n.toFixed(t);
  return parseFloat(s).toString();
}
function dt(n, t, s) {
  const i = s.x - t.x, r = s.y - t.y, o = Math.sqrt(i * i + r * r);
  if (o === 0) return Math.sqrt((n.x - t.x) ** 2 + (n.y - t.y) ** 2);
  const c = Math.max(0, Math.min(1, ((n.x - t.x) * i + (n.y - t.y) * r) / (o * o))), a = {
    x: t.x + c * i,
    y: t.y + c * r
  };
  return Math.sqrt((n.x - a.x) ** 2 + (n.y - a.y) ** 2);
}
function Nt(n, t) {
  const [s, i, r] = t, o = (i.y - r.y) * (s.x - r.x) + (r.x - i.x) * (s.y - r.y), c = ((i.y - r.y) * (n.x - r.x) + (r.x - i.x) * (n.y - r.y)) / o, a = ((r.y - s.y) * (n.x - r.x) + (s.x - r.x) * (n.y - r.y)) / o, d = 1 - c - a;
  return c >= 0 && a >= 0 && d >= 0;
}
function At(n, t, s) {
  const i = Math.sqrt((n.x - t.x) ** 2 + (n.y - t.y) ** 2);
  return Math.abs(i - s);
}
function ee(n, t) {
  return t >= 1 ? n.toFixed(0) : t >= 0.1 ? n.toFixed(1) : t >= 0.01 ? n.toFixed(2) : n.toFixed(3);
}
function it(n, t, s) {
  if (s !== "adaptive")
    switch (s) {
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
  const r = Gt(n, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }).gridSize / t;
  return r <= 0.1 ? r : r <= 0.5 ? 0.1 : r <= 2 ? 0.25 : 1;
}
const Ft = {
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
  gridScale: 1,
  // Snapping settings
  snapPrecision: "whole",
  // Coordinate system settings
  coordinateSystem: "cartesian",
  showPolarGrid: !1,
  customOrigin: null,
  // Zoom behavior settings
  zoomSensitivity: "medium"
}, Le = vt((n) => ({
  ...Ft,
  toggleSetting: (t) => {
    n((s) => ({
      [t]: !s[t]
    })), ae.scheduleSave();
  },
  setFontScale: (t) => {
    n({ fontScale: t }), ae.scheduleSave();
  },
  setGridScale: (t) => {
    n({ gridScale: t }), ae.scheduleSave();
  },
  setSnapPrecision: (t) => {
    n({ snapPrecision: t }), ae.scheduleSave();
  },
  setCoordinateSystem: (t) => {
    n({ coordinateSystem: t }), ae.scheduleSave();
  },
  setCustomOrigin: (t) => {
    n({ customOrigin: t }), ae.scheduleSave();
  },
  setZoomSensitivity: (t) => {
    n({ zoomSensitivity: t }), ae.scheduleSave();
  },
  resetToDefaults: () => {
    n(Ft), ae.scheduleSave();
  }
}));
function rs({ viewport: n, canvasSize: t, worldToScreen: s, objects: i = [] }) {
  const r = Le(), o = (l) => Math.round(l * r.fontScale), c = Gt(n, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }), a = {
    gridSize: c.gridSize / r.gridScale,
    labelStep: c.labelStep / r.gridScale
  }, { verticalLines: d, horizontalLines: h } = is(
    n,
    t,
    a,
    s,
    !1
    // Never show integer grid lines
  );
  if (!c.shouldShowGrid)
    return null;
  const v = [];
  if (r.coordinateSystem === "polar" || r.coordinateSystem === "both") {
    const l = s({ x: 0, y: 0 }), f = Math.max(
      Math.abs(n.center.x) + t.width / (2 * n.zoom),
      Math.abs(n.center.y) + t.height / (2 * n.zoom)
    );
    for (let p = a.gridSize; p <= f; p += a.gridSize) {
      const _ = p * n.zoom;
      _ >= 10 && v.push(
        /* @__PURE__ */ e.jsx(
          "circle",
          {
            cx: l.x,
            cy: l.y,
            r: _,
            fill: "none",
            stroke: "#9CA3AF",
            strokeWidth: "0.5",
            opacity: 0.4
          },
          `polar-circle-${p}`
        )
      );
    }
    for (let p = 0; p < 360; p += 30) {
      const _ = p * Math.PI / 180, k = l.x + f * n.zoom * Math.cos(_), b = l.y - f * n.zoom * Math.sin(_);
      v.push(
        /* @__PURE__ */ e.jsx(
          "line",
          {
            x1: l.x,
            y1: l.y,
            x2: k,
            y2: b,
            stroke: "#9CA3AF",
            strokeWidth: "0.5",
            opacity: 0.3
          },
          `polar-line-${p}`
        )
      );
    }
  }
  const O = [];
  i.forEach((l) => {
    if (l.type === "ray") {
      const { startPoint: f, endPoint: p } = l.properties;
      if (Math.abs(f.x) < 1e-3 && Math.abs(f.y) < 1e-3) {
        const _ = p.x - f.x, k = p.y - f.y;
        if (Math.abs(_) > 1e-3) {
          const b = 1 / _;
          if (b > 0 && b <= 1) {
            const Y = f.y + b * k, $ = s({ x: 1, y: Y });
            O.push({ y: Y, screenY: $.y });
          }
        }
      }
    }
  });
  const C = d.map((l) => {
    const p = Math.abs(l.value - 1) < 1e-3 && r.showDivisionAnswer, _ = l.isAxis ? "#374151" : p ? "#60A5FA" : (
      // Light blue for x=1 when division answer is shown
      l.isMajor ? "#9CA3AF" : "#E5E7EB"
    ), k = l.isAxis ? 2 : p ? 1.5 : l.isMajor ? 1 : 0.5, b = l.isAxis ? 1 : p ? 0.8 : l.isMajor ? 0.6 * c.opacity : 0.3 * c.opacity;
    return /* @__PURE__ */ e.jsx(
      "line",
      {
        x1: l.x,
        y1: 0,
        x2: l.x,
        y2: t.height,
        stroke: _,
        strokeWidth: k,
        opacity: b
      },
      `v${l.value}`
    );
  }), m = h.map((l) => /* @__PURE__ */ e.jsx(
    "line",
    {
      x1: 0,
      y1: l.y,
      x2: t.width,
      y2: l.y,
      stroke: l.isAxis ? "#374151" : l.isMajor ? "#9CA3AF" : "#E5E7EB",
      strokeWidth: l.isAxis ? 2 : l.isMajor ? 1 : 0.5,
      opacity: l.isAxis ? 1 : l.isMajor ? 0.6 * c.opacity : 0.3 * c.opacity
    },
    `h${l.value}`
  )), z = r.showReferenceLineY_equals_X ? (() => {
    const l = {
      left: n.center.x - t.width / 2 / n.zoom,
      right: n.center.x + t.width / 2 / n.zoom,
      top: n.center.y + t.height / 2 / n.zoom,
      bottom: n.center.y - t.height / 2 / n.zoom
    }, f = Math.min(l.left, l.bottom), p = Math.max(l.right, l.top), _ = s({ x: f, y: f }), k = s({ x: p, y: p });
    return { lineStart: _, lineEnd: k };
  })() : null, X = r.showLatticePoints ? (() => {
    const l = {
      left: n.center.x - t.width / 2 / n.zoom,
      right: n.center.x + t.width / 2 / n.zoom,
      top: n.center.y + t.height / 2 / n.zoom,
      bottom: n.center.y - t.height / 2 / n.zoom
    }, f = [], p = Math.max(-20, Math.floor(l.left)), _ = Math.min(20, Math.ceil(l.right)), k = Math.max(-20, Math.floor(l.bottom)), b = Math.min(20, Math.ceil(l.top)), Y = (_ - p + 1) * (b - k + 1);
    if (Y > 200) {
      const $ = Math.ceil(Math.sqrt(Y / 200));
      for (let A = p; A <= _; A += $)
        for (let H = k; H <= b; H += $) {
          const R = s({ x: A, y: H });
          R.x >= -20 && R.x <= t.width + 20 && R.y >= -20 && R.y <= t.height + 20 && f.push(R);
        }
    } else
      for (let $ = p; $ <= _; $++)
        for (let A = k; A <= b; A++) {
          const H = s({ x: $, y: A });
          H.x >= -20 && H.x <= t.width + 20 && H.y >= -20 && H.y <= t.height + 20 && f.push(H);
        }
    return f;
  })() : [];
  return /* @__PURE__ */ e.jsxs("g", { className: "grid", children: [
    (r.coordinateSystem === "polar" || r.coordinateSystem === "both") && /* @__PURE__ */ e.jsx("g", { className: "polar-grid", children: v }),
    (r.coordinateSystem === "cartesian" || r.coordinateSystem === "both") && /* @__PURE__ */ e.jsxs("g", { className: "cartesian-grid", children: [
      C,
      m
    ] }),
    X.map((l, f) => /* @__PURE__ */ e.jsx(
      "circle",
      {
        cx: l.x,
        cy: l.y,
        r: "1.5",
        fill: "#9CA3AF",
        opacity: "0.3"
      },
      `lattice-${f}`
    )),
    z && /* @__PURE__ */ e.jsx(
      "line",
      {
        x1: z.lineStart.x,
        y1: z.lineStart.y,
        x2: z.lineEnd.x,
        y2: z.lineEnd.y,
        stroke: "#A78BFA",
        strokeWidth: "1.5",
        opacity: "0.6",
        strokeDasharray: "5,5"
      }
    ),
    c.shouldShowLabels && /* @__PURE__ */ e.jsxs("g", { className: "labels", fontSize: "12", fill: "#374151", children: [
      d.filter((l) => {
        const f = Math.abs(l.value % a.labelStep) < a.gridSize / 10, p = Math.abs(l.value) >= a.labelStep / 2;
        return f && p;
      }).filter((l, f, p) => !p.slice(0, f).some(
        (_) => Math.abs(_.value - l.value) < 1e-3
      )).map((l) => /* @__PURE__ */ e.jsx(
        "text",
        {
          x: l.x,
          y: s({ x: 0, y: 0 }).y + 20,
          textAnchor: "middle",
          fontSize: o(11),
          fontWeight: "500",
          opacity: Math.max(0.7, c.opacity),
          children: ee(l.value, c.gridSize)
        },
        `xlabel${l.value}`
      )),
      h.filter((l) => {
        const f = Math.abs(l.value % a.labelStep) < a.gridSize / 10, p = Math.abs(l.value) >= a.labelStep / 2;
        return f && p;
      }).filter((l, f, p) => !p.slice(0, f).some(
        (_) => Math.abs(_.value - l.value) < 1e-3
      )).map((l) => /* @__PURE__ */ e.jsx(
        "text",
        {
          x: s({ x: 0, y: 0 }).x - 15,
          y: l.y + 4,
          textAnchor: "middle",
          fontSize: o(11),
          fontWeight: "500",
          opacity: Math.max(0.7, c.opacity),
          children: ee(l.value, c.gridSize)
        },
        `ylabel${l.value}`
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
      r.showDivisionAnswer && O.map((l, f) => {
        const p = s({ x: 1, y: 0 }).x;
        return /* @__PURE__ */ e.jsxs("g", { children: [
          /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: p,
              cy: l.screenY,
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
              x: p + 15,
              y: l.screenY + 4,
              fontSize: o(10),
              fontWeight: "600",
              fill: "#60A5FA",
              opacity: "0.9",
              children: [
                "y = ",
                l.y.toFixed(2)
              ]
            }
          )
        ] }, `ray-intersection-${f}`);
      })
    ] })
  ] });
}
const pt = [
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
  // Common
  "common.loading": "Loading...",
  "common.shapes": "shapes",
  "common.shape": "shape",
  "common.onCanvas": "on canvas",
  "common.dismiss": "Dismiss permanently",
  // Special/fallback
  "translation.missing": "Translation needed"
}, Ot = "en";
class as {
  constructor() {
    ie(this, "currentLanguage", Ot);
    ie(this, "translations", /* @__PURE__ */ new Map());
    ie(this, "fallbackTranslations", os);
    ie(this, "isInitialized", !1);
    this.initialize();
  }
  async initialize() {
    try {
      await this.loadLanguage(Ot);
      const t = localStorage.getItem("grix-language");
      if (t && pt.some((s) => s.code === t))
        await this.setLanguage(t);
      else {
        const s = navigator.language.split("-")[0];
        pt.some((i) => i.code === s) && await this.setLanguage(s);
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
      const i = await s.json();
      return this.translations.set(t, i), !0;
    } catch (s) {
      return console.error(`Failed to load language ${t}:`, s), !1;
    }
  }
  async setLanguage(t) {
    if (await this.loadLanguage(t)) {
      this.currentLanguage = t, localStorage.setItem("grix-language", t);
      const i = pt.find((r) => r.code === t);
      return i && (document.documentElement.dir = i.direction), window.dispatchEvent(new CustomEvent("languageChanged", {
        detail: { language: t }
      })), !0;
    }
    return !1;
  }
  getCurrentLanguage() {
    return this.currentLanguage;
  }
  getAvailableLanguages() {
    return pt;
  }
  translate(t, s) {
    const i = this.translations.get(this.currentLanguage);
    let r = i == null ? void 0 : i[t];
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
const mt = new as();
function Ze() {
  const [n, t] = te(mt.getCurrentLanguage()), [, s] = te({});
  me(() => {
    const c = (d) => {
      t(d.detail.language), s({});
    }, a = () => {
      s({});
    };
    return window.addEventListener("languageChanged", c), window.addEventListener("translationsReady", a), () => {
      window.removeEventListener("languageChanged", c), window.removeEventListener("translationsReady", a);
    };
  }, []);
  const i = Ce((c, a) => mt.t(c, a), [n]), r = Ce(async (c) => await mt.setLanguage(c), []), o = Ce(() => mt.getAvailableLanguages(), []);
  return {
    t: i,
    language: n,
    changeLanguage: r,
    availableLanguages: o()
  };
}
function cs({ viewport: n, onZoomIn: t, onZoomOut: s, onZoomReset: i, onCenterOnly: r }) {
  const { t: o } = Ze(), [c, a] = te(0), d = Re(null), h = () => {
    const v = Date.now();
    v - c < 500 ? (d.current && (clearTimeout(d.current), d.current = null), i()) : d.current = window.setTimeout(() => {
      r(), d.current = null;
    }, 300), a(v);
  };
  return me(() => () => {
    d.current && clearTimeout(d.current);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-4 right-4 flex flex-col gap-2", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: t,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors",
        title: o("zoom.zoomIn"),
        disabled: n.zoom >= 1e3,
        children: "+"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: s,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors",
        title: o("zoom.zoomOut"),
        disabled: n.zoom <= 0.01,
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
    /* @__PURE__ */ e.jsxs("div", { className: `w-12 h-8 border rounded text-xs flex flex-col items-center justify-center transition-colors ${n.zoom < 0.5 ? "bg-red-50 border-red-200 text-red-700" : n.zoom > 100 ? "bg-orange-50 border-orange-200 text-orange-700" : "bg-white/90 border-gray-300 text-gray-600"}`, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "font-semibold", children: [
        n.zoom >= 1 ? Math.round(n.zoom) : n.zoom.toFixed(1),
        "×"
      ] }),
      n.zoom < 0.5 && /* @__PURE__ */ e.jsx("div", { className: "text-[8px] leading-none", children: o("zoom.far") }),
      n.zoom > 100 && /* @__PURE__ */ e.jsx("div", { className: "text-[8px] leading-none", children: o("zoom.close") })
    ] }),
    n.zoom < 0.5 || n.zoom > 100 ? /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => i(),
        className: "w-10 h-6 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded font-medium transition-colors",
        title: o("zoom.centerView"),
        children: o("zoom.fix")
      }
    ) : null
  ] });
}
function ls({
  objects: n,
  viewport: t,
  touchTargetSize: s,
  worldToScreen: i,
  selectedObjects: r = [],
  canvasSize: o
}) {
  const c = Le(), a = (u) => Math.round(u * c.fontScale), d = it(
    t,
    c.gridScale,
    c.snapPrecision
  ), h = d, [v, O] = te(null), [C, m] = te(null), [z, X] = te(null), [l, f] = te(null), [p, _] = te(null), [k, b] = te(
    null
  ), [Y, $] = te(null), [A, H] = te(
    null
  ), R = Qe.useRef(null);
  Qe.useEffect(() => {
    const u = (j) => {
      const ne = j.target;
      l && !(ne != null && ne.closest("circle")) && f(null);
    };
    if (l)
      return document.addEventListener("touchstart", u), () => document.removeEventListener("touchstart", u);
  }, [l]), Qe.useEffect(() => () => {
    R.current && clearTimeout(R.current);
  }, []);
  const J = (u) => {
    var ne, ue;
    const j = r.includes(u.id);
    switch (u.type) {
      case "ray":
        const Oe = i(u.properties.startPoint), ge = i(u.properties.endPoint);
        return /* @__PURE__ */ e.jsxs("g", { children: [
          j && /* @__PURE__ */ e.jsx(
            "line",
            {
              x1: Oe.x,
              y1: Oe.y,
              x2: ge.x,
              y2: ge.y,
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ e.jsx(
            "line",
            {
              x1: Oe.x,
              y1: Oe.y,
              x2: ge.x,
              y2: ge.y,
              stroke: j ? "#1D4ED8" : "#2563eb",
              strokeWidth: j ? 3 : 2
            }
          ),
          c.showCoordinateProjections && Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: ge.x,
                y1: ge.y,
                x2: ge.x,
                y2: i({ x: u.properties.endPoint.x, y: 0 }).y,
                stroke: "#9CA3AF",
                strokeWidth: "1",
                strokeDasharray: "2,3",
                opacity: "0.6"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: ge.x,
                y1: ge.y,
                x2: i({ x: 0, y: u.properties.endPoint.y }).x,
                y2: ge.y,
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
                cx: Oe.x,
                cy: Oe.y,
                r: s / 4,
                fill: j ? "#1D4ED8" : "#2563eb",
                stroke: j ? "#60A5FA" : "none",
                strokeWidth: j ? 2 : 0,
                style: { cursor: "move" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: Oe.x,
                cy: Oe.y,
                r: Math.max(12, s / 2),
                fill: "transparent",
                style: { cursor: "move" },
                onMouseEnter: () => O(`${u.id}-start`),
                onMouseLeave: () => O(null)
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: ge.x,
                cy: ge.y,
                r: s / 4,
                fill: j ? "#1D4ED8" : "#2563eb",
                stroke: j ? "#60A5FA" : "none",
                strokeWidth: j ? 2 : 0,
                style: { cursor: "move" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: ge.x,
                cy: ge.y,
                r: Math.max(12, s / 2),
                fill: "transparent",
                style: { cursor: "move" },
                onMouseEnter: () => O(`${u.id}-end`),
                onMouseLeave: () => O(null)
              }
            )
          ] }),
          !(Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3) && v === `${u.id}-start` && /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: Oe.x - 5,
              y: Oe.y - 10,
              fontSize: a(10),
              fontWeight: "500",
              fill: j ? "#1D4ED8" : "#2563eb",
              textAnchor: "middle",
              opacity: "0.8",
              style: { pointerEvents: "none" },
              children: [
                "(",
                ee(u.properties.startPoint.x, h),
                ",",
                " ",
                ee(u.properties.startPoint.y, h),
                ")"
              ]
            }
          ),
          v === `${u.id}-end` && /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3 ? ge.x - 20 : ge.x + 5,
              y: (() => {
                const M = Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3;
                return ge.y - 10;
              })(),
              fontSize: a(10),
              fontWeight: "500",
              fill: j ? "#1D4ED8" : "#2563eb",
              textAnchor: Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3 ? "end" : "middle",
              opacity: "0.8",
              style: { pointerEvents: "none" },
              children: [
                "(",
                ee(u.properties.endPoint.x, h),
                ",",
                " ",
                ee(u.properties.endPoint.y, h),
                ")"
              ]
            }
          ),
          (() => {
            const M = u.properties.endPoint.x - u.properties.startPoint.x;
            u.properties.endPoint.y - u.properties.startPoint.y;
            const x = Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3;
            if (Math.abs(M) > 1e-3) {
              const S = ge.x, G = ge.y;
              if (x) {
                const w = u.properties.endPoint.x, E = u.properties.endPoint.y, W = ee(E, h), T = ee(w, h);
                return /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "text",
                    {
                      x: S + 15,
                      y: G - 25,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: j ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: W
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "line",
                    {
                      x1: S + 8,
                      y1: G - 19,
                      x2: S + 22,
                      y2: G - 19,
                      stroke: j ? "#1D4ED8" : "#2563eb",
                      strokeWidth: "1",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "text",
                    {
                      x: S + 15,
                      y: G - 9,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: j ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: T
                    }
                  )
                ] });
              } else
                return null;
            }
            return null;
          })(),
          (() => {
            if (!(Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3)) return null;
            const x = u.properties.endPoint.x, S = u.properties.endPoint.y;
            if (Math.abs(x) < 1e-3 && Math.abs(S) < 1e-3) return null;
            const G = x, w = S, E = {
              left: t.center.x - o.width / 2 / t.zoom,
              right: t.center.x + o.width / 2 / t.zoom,
              top: t.center.y + o.height / 2 / t.zoom,
              bottom: t.center.y - o.height / 2 / t.zoom
            }, W = Math.max(
              Math.abs(E.left),
              Math.abs(E.right),
              Math.abs(E.top),
              Math.abs(E.bottom)
            ) * 2, T = Math.sqrt(G * G + w * w);
            if (T === 0) return null;
            const g = G / T, N = w / T, F = {
              x: W * g,
              y: W * N
            }, I = i(F), D = [];
            if (Math.abs(x) > 1e-3 && Math.abs(S) > 1e-3) {
              const P = x, B = S;
              for (let q = 2; q <= 50; q++) {
                const U = P * q, K = B * q, le = Math.round(U / d) * d, xe = Math.round(K / d) * d;
                if (Math.abs(U - le) < d / 10 && Math.abs(K - xe) < d / 10 && le > 0 && xe > 0 && le <= Math.min(100, Math.abs(W)) && xe <= Math.min(100, Math.abs(W))) {
                  const Me = i({ x: le, y: xe });
                  Me.x >= -100 && Me.x <= o.width + 100 && Me.y >= -100 && Me.y <= o.height + 100 && D.push({
                    world: { x: le, y: xe },
                    screen: Me,
                    fraction: {
                      num: ee(xe, d),
                      den: ee(le, d)
                    }
                  });
                }
              }
            }
            const se = Math.sqrt(x * x + S * S), Q = [];
            if (se > 0 && c.showLengthMultiples)
              for (let P = 2; P <= 5; P++) {
                const B = x * P, q = S * P, U = i({
                  x: B,
                  y: q
                });
                U.x >= -50 && U.x <= o.width + 50 && U.y >= -50 && U.y <= o.height + 50 && Q.push({
                  screen: U,
                  multiple: P
                });
              }
            return /* @__PURE__ */ e.jsxs("g", { children: [
              c.showEquivalentFractions && /* @__PURE__ */ e.jsx(
                "line",
                {
                  x1: ge.x,
                  y1: ge.y,
                  x2: I.x,
                  y2: I.y,
                  stroke: j ? "#1D4ED8" : "#2563eb",
                  strokeWidth: "1",
                  opacity: "0.3",
                  strokeDasharray: "3,3"
                }
              ),
              Q.map((P, B) => /* @__PURE__ */ e.jsxs("g", { children: [
                /* @__PURE__ */ e.jsx(
                  "circle",
                  {
                    cx: P.screen.x,
                    cy: P.screen.y,
                    r: "2",
                    fill: j ? "#1D4ED8" : "#2563eb",
                    opacity: "0.4",
                    style: { pointerEvents: "none" }
                  }
                ),
                /* @__PURE__ */ e.jsxs(
                  "text",
                  {
                    x: P.screen.x + 8,
                    y: P.screen.y - 8,
                    fontSize: a(7),
                    fontWeight: "400",
                    fill: j ? "#1D4ED8" : "#2563eb",
                    textAnchor: "start",
                    opacity: "0.5",
                    style: { pointerEvents: "none" },
                    children: [
                      "×",
                      P.multiple
                    ]
                  }
                )
              ] }, `length-${B}`)),
              c.showAreaRectangle && (() => {
                if (x > 0 && S > 0) {
                  const P = i({ x: 0, y: 0 }), B = i({
                    x,
                    y: S
                  }), q = Math.abs(
                    B.x - P.x
                  ), U = Math.abs(
                    B.y - P.y
                  ), K = Math.min(
                    P.x,
                    B.x
                  ), le = Math.min(
                    P.y,
                    B.y
                  ), xe = x * S;
                  return /* @__PURE__ */ e.jsxs("g", { children: [
                    /* @__PURE__ */ e.jsx(
                      "rect",
                      {
                        x: K,
                        y: le,
                        width: q,
                        height: U,
                        fill: j ? "#1D4ED8" : "#2563eb",
                        opacity: "0.08",
                        stroke: j ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "0.5",
                        strokeOpacity: "0.15"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: K + q / 2,
                        y: le + 15,
                        fontSize: a(10),
                        fontWeight: "400",
                        fill: j ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.6",
                        children: [
                          ee(S, h),
                          " ×",
                          " ",
                          ee(x, h),
                          " =",
                          " ",
                          ee(xe, h)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showDivisionMultiples && c.showDivisionAnswer && (() => {
                if (!(Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3) || x <= 0) return null;
                const B = S / x, q = 0.15, U = 25;
                if (B < q) return null;
                const K = i({ x: 0, y: 0 }), le = i({ x: 1, y: 0 }), xe = [], Me = Math.min(
                  Math.floor(S / B),
                  U
                );
                for (let Ee = 1; Ee <= Me; Ee++) {
                  const Ne = Ee * B, Ie = i({ x: 0, y: Ne }).y, We = Math.abs(Ne - B) < 0.01;
                  if (!c.showAreaRectangle) {
                    const Se = Math.abs(Ie - K.y) / Ee, je = Math.abs(
                      le.x - K.x
                    );
                    xe.push(
                      /* @__PURE__ */ e.jsx(
                        "rect",
                        {
                          x: K.x,
                          y: Ie,
                          width: je,
                          height: Se,
                          fill: j ? "#1D4ED8" : "#2563eb",
                          opacity: "0.08",
                          stroke: j ? "#1D4ED8" : "#2563eb",
                          strokeWidth: "0.5",
                          strokeOpacity: "0.15"
                        },
                        `division-box-${Ee}`
                      )
                    );
                  }
                  xe.push(
                    /* @__PURE__ */ e.jsxs("g", { children: [
                      /* @__PURE__ */ e.jsx(
                        "line",
                        {
                          x1: K.x,
                          y1: Ie,
                          x2: le.x,
                          y2: Ie,
                          stroke: j ? "#1D4ED8" : "#2563eb",
                          strokeWidth: "1",
                          opacity: "0.3",
                          strokeDasharray: We ? "4,2" : "2,2"
                        }
                      ),
                      !We && /* @__PURE__ */ e.jsx(
                        "text",
                        {
                          x: le.x + 8,
                          y: Ie - 5,
                          fontSize: a(8),
                          fontWeight: "400",
                          fill: j ? "#1D4ED8" : "#2563eb",
                          textAnchor: "start",
                          opacity: "0.5",
                          children: we(Ne)
                        }
                      )
                    ] }, `division-marker-${Ee}`)
                  );
                }
                return /* @__PURE__ */ e.jsx("g", { children: xe });
              })(),
              c.showRiseRunTriangle && (() => {
                if (x > 0 && S > 0) {
                  const P = i({ x: 0, y: 0 }), B = i({ x, y: 0 }), q = i({ x, y: S });
                  return /* @__PURE__ */ e.jsxs("g", { children: [
                    /* @__PURE__ */ e.jsx(
                      "path",
                      {
                        d: `M ${P.x},${P.y} L ${B.x},${B.y} L ${q.x},${q.y} Z`,
                        fill: "none",
                        stroke: j ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "1",
                        opacity: "0.4",
                        strokeDasharray: "2,2",
                        style: { pointerEvents: "none" }
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: B.x + 12,
                        y: (B.y + q.y) / 2,
                        fontSize: a(9),
                        fontWeight: "500",
                        fill: j ? "#1D4ED8" : "#2563eb",
                        textAnchor: "start",
                        opacity: "0.7",
                        style: { pointerEvents: "none" },
                        children: [
                          "rise: ",
                          ee(S, h)
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: (P.x + B.x) / 2,
                        y: B.y + 10,
                        fontSize: a(9),
                        fontWeight: "500",
                        fill: j ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.7",
                        style: { pointerEvents: "none" },
                        children: [
                          "run: ",
                          ee(x, h)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showDistanceMarkers && (() => {
                const P = [], B = Math.sqrt(x * x + S * S);
                if (B > 0) {
                  const q = i({ x: 0, y: 0 });
                  let U = Math.atan2(S, x);
                  U < 0 && (U = U + 2 * Math.PI);
                  const K = [];
                  for (let xe = 1; xe <= Math.floor(B); xe++)
                    K.push({ radius: xe, isUnit: !0 });
                  K.push({ radius: B, isUnit: !1 }), K.forEach(({ radius: xe, isUnit: Me }, Ee) => {
                    const Ne = xe * t.zoom;
                    if (Ne >= 15 && Ne <= 800 && Math.abs(U) > 0.05) {
                      const Ie = U > Math.PI ? 1 : 0, Se = `M ${q.x + Ne},${q.y} A ${Ne},${Ne} 0 ${Ie},0 ${q.x + Ne * Math.cos(U)},${q.y - Ne * Math.sin(U)}`;
                      P.push(
                        /* @__PURE__ */ e.jsx(
                          "path",
                          {
                            d: Se,
                            fill: "none",
                            stroke: j ? "#1D4ED8" : "#2563eb",
                            strokeWidth: Me ? "1" : "1.5",
                            opacity: Me ? "0.3" : "0.6",
                            strokeDasharray: Me ? "2,2" : "none"
                          },
                          `radial-${u.id}-${xe.toFixed(
                            3
                          )}-${U.toFixed(3)}-${Ee}`
                        )
                      );
                    }
                  });
                  const le = i({
                    x: B,
                    y: 0
                  });
                  P.push(
                    /* @__PURE__ */ e.jsxs("g", { children: [
                      /* @__PURE__ */ e.jsx(
                        "path",
                        {
                          d: `M ${le.x},${q.y} L ${le.x - 4},${q.y + 8} L ${le.x + 4},${q.y + 8} Z`,
                          fill: j ? "#1D4ED8" : "#2563eb",
                          opacity: "0.7"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "text",
                        {
                          x: le.x + 15,
                          y: q.y - 8,
                          fontSize: a(10),
                          fontWeight: "600",
                          fill: j ? "#1D4ED8" : "#2563eb",
                          textAnchor: "start",
                          opacity: "0.8",
                          children: [
                            "d = ",
                            B.toFixed(3).replace(/\.?0+$/, "")
                          ]
                        }
                      )
                    ] }, `distance-${u.id}`)
                  );
                }
                return /* @__PURE__ */ e.jsx("g", { children: P });
              })(),
              c.showAngleArc && (() => {
                let P = Math.atan2(S, x);
                if (P < 0 && (P = P + 2 * Math.PI), Math.abs(x) > 0.05 || Math.abs(S) > 0.05) {
                  const B = i({ x: 0, y: 0 }), q = 50, U = (P * 180 / Math.PI).toFixed(1), K = P, le = P > Math.PI ? 1 : 0, xe = `M ${B.x + q},${B.y} A ${q},${q} 0 ${le},0 ${B.x + q * Math.cos(K)},${B.y - q * Math.sin(K)}`, Me = P / 2, Ee = q * 0.7, Ne = B.x + Ee * Math.cos(Me), Ie = B.y - Ee * Math.sin(Me);
                  return /* @__PURE__ */ e.jsxs("g", { children: [
                    /* @__PURE__ */ e.jsx(
                      "path",
                      {
                        d: xe,
                        fill: "none",
                        stroke: j ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "2",
                        opacity: "0.6"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: Ne,
                        y: Ie,
                        fontSize: a(11),
                        fontWeight: "600",
                        fill: j ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.8",
                        children: [
                          "θ = ",
                          U,
                          "°"
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showEquivalentFractions && D.map((P, B) => {
                const U = Math.abs(P.world.x - 1) < 0.1 && c.showDivisionAnswer, K = Math.abs(P.world.x - x) < 0.1 && Math.abs(P.world.y - S) < 0.1;
                return U || K ? null : /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "circle",
                    {
                      cx: P.screen.x,
                      cy: P.screen.y,
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
                      x: P.screen.x + 15,
                      y: P.screen.y + 4,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: "#22C55E",
                      textAnchor: "start",
                      opacity: "0.8",
                      style: { pointerEvents: "none" },
                      children: [
                        P.fraction.num,
                        "/",
                        P.fraction.den
                      ]
                    }
                  )
                ] }, `equiv-${B}`);
              })
            ] });
          })()
        ] }, u.id);
      case "rectangle":
        const L = i({
          x: u.properties.x,
          y: u.properties.y + u.properties.height
        }), ce = u.properties.width * t.zoom, y = u.properties.height * t.zoom, V = { x: u.properties.x, y: u.properties.y }, de = {
          x: u.properties.x + u.properties.width,
          y: u.properties.y
        }, fe = {
          x: u.properties.x,
          y: u.properties.y + u.properties.height
        }, ze = {
          x: u.properties.x + u.properties.width,
          y: u.properties.y + u.properties.height
        };
        return /* @__PURE__ */ e.jsxs("g", { children: [
          j && /* @__PURE__ */ e.jsx(
            "rect",
            {
              x: L.x - 3,
              y: L.y - 3,
              width: ce + 6,
              height: y + 6,
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
              x: L.x,
              y: L.y,
              width: ce,
              height: y,
              fill: j ? "rgba(34, 197, 94, 0.3)" : "rgba(34, 197, 94, 0.2)",
              stroke: j ? "#16A34A" : "#22c55e",
              strokeWidth: j ? 3 : 2,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: L.x,
                cy: L.y,
                r: Math.max(6, s / 6),
                fill: j ? "#16A34A" : "#22c55e",
                stroke: j ? "#60A5FA" : "none",
                strokeWidth: j ? 2 : 0,
                style: { cursor: "nw-resize" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: L.x,
                cy: L.y,
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
                cx: L.x + ce,
                cy: L.y,
                r: Math.max(6, s / 6),
                fill: j ? "#16A34A" : "#22c55e",
                stroke: j ? "#60A5FA" : "none",
                strokeWidth: j ? 2 : 0,
                style: { cursor: "ne-resize" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: L.x + ce,
                cy: L.y,
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
                cx: L.x,
                cy: L.y + y,
                r: Math.max(6, s / 6),
                fill: j ? "#16A34A" : "#22c55e",
                stroke: j ? "#60A5FA" : "none",
                strokeWidth: j ? 2 : 0,
                style: { cursor: "sw-resize" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: L.x,
                cy: L.y + y,
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
                cx: L.x + ce,
                cy: L.y + y,
                r: Math.max(6, s / 6),
                fill: j ? "#16A34A" : "#22c55e",
                stroke: j ? "#60A5FA" : "none",
                strokeWidth: j ? 2 : 0,
                style: { cursor: "se-resize" }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: L.x + ce,
                cy: L.y + y,
                r: s / 2,
                fill: "transparent",
                style: { cursor: "se-resize" }
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: L.x - 10,
              y: L.y - 5,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                ee(fe.x, h),
                ",",
                " ",
                ee(fe.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: L.x + ce + 10,
              y: L.y - 5,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                ee(ze.x, h),
                ",",
                " ",
                ee(ze.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: L.x - 10,
              y: L.y + y + 15,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                ee(V.x, h),
                ",",
                " ",
                ee(V.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: L.x + ce + 10,
              y: L.y + y + 15,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                ee(de.x, h),
                ",",
                " ",
                ee(de.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: L.x + ce / 2,
              y: L.y + y / 2,
              fontSize: a(12),
              fontWeight: "600",
              fill: "#22c55e",
              textAnchor: "middle",
              opacity: "0.9",
              children: [
                ee(u.properties.height, h),
                " ×",
                " ",
                ee(u.properties.width, h),
                " =",
                " ",
                ee(u.properties.area, h)
              ]
            }
          ),
          (() => {
            const M = u.properties.width, x = u.properties.height, S = u.properties.area;
            if (M <= 0 || x <= 0 || M !== Math.floor(M) || x !== Math.floor(x))
              return null;
            const G = [];
            if (c.showFactorPairs && S > 1 && S <= 50) {
              const w = [];
              for (let E = 1; E <= Math.sqrt(S); E++)
                if (S % E === 0) {
                  const W = S / E;
                  (E !== M || W !== x) && w.push({ w: E, h: W });
                }
              w.forEach((E, W) => {
                const T = (W + 1) * (ce + 20), g = {
                  x: L.x + T,
                  y: L.y,
                  width: E.w * t.zoom,
                  height: E.h * t.zoom
                };
                G.push(
                  /* @__PURE__ */ e.jsx(
                    "rect",
                    {
                      x: g.x,
                      y: g.y,
                      width: g.width,
                      height: g.height,
                      fill: "rgba(168, 85, 247, 0.15)",
                      stroke: "#A855F7",
                      strokeWidth: "1",
                      strokeDasharray: "3,3",
                      opacity: "0.7"
                    },
                    `factor-${W}`
                  )
                );
              });
            }
            if (c.showCommutativeProperty && M !== x) {
              const w = {
                x: L.x - y - 30,
                y: L.y,
                width: x * t.zoom,
                height: M * t.zoom
              };
              G.push(
                /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "rect",
                    {
                      x: w.x,
                      y: w.y,
                      width: w.width,
                      height: w.height,
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
                      d: `M ${w.x + w.width + 5},${w.y + w.height / 2} L ${L.x - 5},${L.y + y / 2}`,
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
            if (c.showPrimeComposite && S > 1 && S <= 100) {
              const w = S > 1 && ![...Array(Math.floor(Math.sqrt(S)) + 1).keys()].slice(2).some((E) => S % E === 0);
              G.push(
                /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "circle",
                    {
                      cx: L.x + ce + 15,
                      cy: L.y - 15,
                      r: "8",
                      fill: w ? "#10B981" : "#F59E0B",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "text",
                    {
                      x: L.x + ce + 15,
                      y: L.y - 11,
                      fontSize: a(8),
                      fontWeight: "600",
                      fill: "white",
                      textAnchor: "middle",
                      children: w ? "P" : "C"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "text",
                    {
                      x: L.x + ce + 30,
                      y: L.y - 10,
                      fontSize: a(8),
                      fontWeight: "500",
                      fill: w ? "#10B981" : "#F59E0B",
                      textAnchor: "start",
                      opacity: "0.8",
                      children: w ? "Prime" : "Composite"
                    }
                  )
                ] }, "prime-composite")
              );
            }
            if (c.showGCF && M > 1 && x > 1) {
              const w = (W, T) => T === 0 ? W : w(T, W % T), E = w(M, x);
              if (E > 1) {
                const W = E * t.zoom, T = M / E, g = x / E, N = [];
                for (let F = 0; F < T; F++)
                  for (let I = 0; I < g; I++)
                    N.push(
                      /* @__PURE__ */ e.jsx(
                        "rect",
                        {
                          x: L.x + F * W,
                          y: L.y + I * W,
                          width: W,
                          height: W,
                          fill: "none",
                          stroke: "#10B981",
                          strokeWidth: "1.5",
                          opacity: "0.6"
                        },
                        `gcf-${F}-${I}`
                      )
                    );
                G.push(
                  /* @__PURE__ */ e.jsxs("g", { children: [
                    N,
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: L.x + ce / 2,
                        y: L.y - 25,
                        fontSize: a(10),
                        fontWeight: "600",
                        fill: "#10B981",
                        textAnchor: "middle",
                        opacity: "0.9",
                        children: [
                          "GCF(",
                          M,
                          ", ",
                          x,
                          ") = ",
                          E
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: L.x + ce / 2,
                        y: L.y - 10,
                        fontSize: a(8),
                        fontWeight: "500",
                        fill: "#10B981",
                        textAnchor: "middle",
                        opacity: "0.7",
                        children: [
                          g,
                          " × ",
                          T,
                          " squares (side = ",
                          E,
                          ")"
                        ]
                      }
                    )
                  ] }, "gcf")
                );
              }
            }
            if (c.showLCM && M > 1 && x > 1) {
              const w = (T, g) => g === 0 ? T : w(g, T % g), W = ((T, g) => T * g / w(T, g))(M, x);
              if (W > Math.max(M, x) && W <= 100) {
                const T = W * t.zoom, g = W * t.zoom, N = L.x, F = L.y + y - g, I = W / M, D = W / x, se = [];
                for (let Q = 0; Q < D; Q++)
                  for (let P = 0; P < I; P++) {
                    const B = N + P * (M * t.zoom), q = F + Q * (x * t.zoom);
                    se.push(
                      /* @__PURE__ */ e.jsx(
                        "rect",
                        {
                          x: B,
                          y: q,
                          width: M * t.zoom,
                          height: x * t.zoom,
                          fill: "rgba(245, 158, 11, 0.1)",
                          stroke: "#F59E0B",
                          strokeWidth: "1",
                          strokeDasharray: "2,2",
                          opacity: "0.6",
                          pointerEvents: "none"
                        },
                        `shadow-${Q}-${P}`
                      )
                    );
                  }
                G.push(
                  /* @__PURE__ */ e.jsxs("g", { children: [
                    /* @__PURE__ */ e.jsx(
                      "rect",
                      {
                        x: N,
                        y: F,
                        width: T,
                        height: g,
                        fill: "none",
                        stroke: "#F59E0B",
                        strokeWidth: "2",
                        strokeDasharray: "5,5",
                        opacity: "0.8",
                        pointerEvents: "none"
                      }
                    ),
                    se,
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: N + T / 2,
                        y: F - 15,
                        fontSize: a(10),
                        fontWeight: "600",
                        fill: "#F59E0B",
                        textAnchor: "middle",
                        opacity: "0.9",
                        pointerEvents: "none",
                        children: [
                          "LCM(",
                          M,
                          ", ",
                          x,
                          ") = ",
                          W
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "text",
                      {
                        x: N + T / 2,
                        y: F - 2,
                        fontSize: a(8),
                        fontWeight: "500",
                        fill: "#F59E0B",
                        textAnchor: "middle",
                        opacity: "0.7",
                        pointerEvents: "none",
                        children: [
                          I,
                          " × ",
                          D,
                          " =",
                          " ",
                          I * D,
                          " rectangles"
                        ]
                      }
                    )
                  ] }, "lcm")
                );
              }
            }
            if (c.showDistributiveProperty && M > 2 && x > 1) {
              const w = Math.floor(M / 2), E = w * t.zoom, W = (M - w) * t.zoom;
              G.push(
                /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "line",
                    {
                      x1: L.x + E,
                      y1: L.y,
                      x2: L.x + E,
                      y2: L.y + y,
                      stroke: "#EF4444",
                      strokeWidth: "2",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "text",
                    {
                      x: L.x + E / 2,
                      y: L.y + y + 20,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: [
                        x,
                        " × ",
                        w,
                        " = ",
                        x * w
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "text",
                    {
                      x: L.x + E + W / 2,
                      y: L.y + y + 20,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: [
                        x,
                        " × ",
                        M - w,
                        " = ",
                        x * (M - w)
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "text",
                    {
                      x: L.x + ce / 2,
                      y: L.y + y + 40,
                      fontSize: a(10),
                      fontWeight: "600",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.9",
                      children: [
                        x,
                        " × (",
                        w,
                        " + ",
                        M - w,
                        ") = ",
                        x * w,
                        " ",
                        "+ ",
                        x * (M - w),
                        " = ",
                        S
                      ]
                    }
                  )
                ] }, "distributive")
              );
            }
            return G;
          })()
        ] }, u.id);
      case "circle":
        const Z = i(u.properties.center), ke = u.properties.radius * t.zoom, Be = c.showTangentLines && (z === u.id && C || l && l.circleId === u.id);
        let oe = null;
        if (Be) {
          let M = null;
          if (l && l.circleId === u.id ? M = l.point : C && z === u.id && (M = {
            x: (C.x - o.width / 2) / t.zoom + t.center.x,
            y: -(C.y - o.height / 2) / t.zoom + t.center.y
          }), M) {
            const x = M.x - u.properties.center.x, S = M.y - u.properties.center.y, G = Math.atan2(S, x), w = {
              x: u.properties.center.x + u.properties.radius * Math.cos(G),
              y: u.properties.center.y + u.properties.radius * Math.sin(G)
            }, E = S / x, W = isFinite(E) && E !== 0 ? -1 / E : null, T = Math.max(o.width, o.height) / t.zoom, g = {
              x: w.x - T * Math.cos(G + Math.PI / 2),
              y: w.y - T * Math.sin(G + Math.PI / 2)
            }, N = {
              x: w.x + T * Math.cos(G + Math.PI / 2),
              y: w.y + T * Math.sin(G + Math.PI / 2)
            };
            oe = {
              point: w,
              start: g,
              end: N,
              slope: W,
              angle: G
            };
          }
        }
        return /* @__PURE__ */ e.jsxs("g", { children: [
          j && /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: Z.x,
              cy: Z.y,
              r: ke + 3,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 4,
              opacity: 0.5
            }
          ),
          /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: Z.x,
              cy: Z.y,
              r: ke * 1.8,
              fill: "transparent",
              style: { cursor: "pointer" },
              onMouseEnter: () => {
                R.current && (clearTimeout(R.current), R.current = null), X(u.id);
              },
              onMouseLeave: () => {
                R.current = setTimeout(() => {
                  X(null), m(null);
                }, 100);
              },
              onMouseMove: (M) => {
                var x;
                if (c.showTangentLines && z === u.id) {
                  const S = (x = M.currentTarget.ownerSVGElement) == null ? void 0 : x.getBoundingClientRect();
                  S && m({
                    x: M.clientX - S.left,
                    y: M.clientY - S.top
                  });
                }
              },
              onTouchStart: (M) => {
                var x;
                if (c.showTangentLines) {
                  M.preventDefault();
                  const S = (x = M.currentTarget.ownerSVGElement) == null ? void 0 : x.getBoundingClientRect();
                  if (S && M.touches[0]) {
                    const G = {
                      x: M.touches[0].clientX - S.left,
                      y: M.touches[0].clientY - S.top
                    }, w = {
                      x: (G.x - o.width / 2) / t.zoom + t.center.x,
                      y: -(G.y - o.height / 2) / t.zoom + t.center.y
                    }, E = w.x - u.properties.center.x, T = (w.y - u.properties.center.y) / E, g = isFinite(T) ? -1 / T : null;
                    f({
                      circleId: u.id,
                      point: w,
                      slope: g
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
              cx: Z.x,
              cy: Z.y,
              r: ke,
              fill: j ? "rgba(168, 85, 247, 0.15)" : "rgba(168, 85, 247, 0.1)",
              stroke: j ? "#7C3AED" : "#A855F7",
              strokeWidth: j ? 3 : 2,
              style: { cursor: "pointer", pointerEvents: "none" }
            }
          ),
          oe && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: i(oe.start).x,
                y1: i(oe.start).y,
                x2: i(oe.end).x,
                y2: i(oe.end).y,
                stroke: "#EF4444",
                strokeWidth: "2",
                opacity: "0.7",
                strokeDasharray: "4,2"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: i(oe.point).x,
                cy: i(oe.point).y,
                r: "3",
                fill: "#EF4444",
                opacity: "0.8"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: Z.x,
                y1: Z.y,
                x2: i(oe.point).x,
                y2: i(oe.point).y,
                stroke: "#EF4444",
                strokeWidth: "1",
                opacity: "0.5",
                strokeDasharray: "2,2"
              }
            ),
            oe.slope !== null && isFinite(oe.slope) && /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: i(oe.point).x + 15,
                y: i(oe.point).y - 10,
                fontSize: a(10),
                fontWeight: "500",
                fill: "#EF4444",
                textAnchor: "start",
                opacity: "0.9",
                children: [
                  "slope = ",
                  oe.slope.toFixed(2)
                ]
              }
            ),
            (oe.slope === null || !isFinite(oe.slope)) && /* @__PURE__ */ e.jsx(
              "text",
              {
                x: i(oe.point).x + 15,
                y: i(oe.point).y - 10,
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
              cx: Z.x,
              cy: Z.y,
              r: s / 6,
              fill: j ? "#7C3AED" : "#A855F7",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "move" }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: Z.x + ke,
              cy: Z.y,
              r: s / 6,
              fill: j ? "#7C3AED" : "#A855F7",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "ew-resize" }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "line",
            {
              x1: Z.x,
              y1: Z.y,
              x2: Z.x + ke,
              y2: Z.y,
              stroke: j ? "#7C3AED" : "#A855F7",
              strokeWidth: "1",
              opacity: "0.6",
              strokeDasharray: "2,2"
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: Z.x,
              y: Z.y - ke - 25,
              fontSize: a(10),
              fontWeight: "500",
              fill: j ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "r = ",
                we(u.properties.radius)
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: Z.x,
              y: Z.y - ke - 15,
              fontSize: a(9),
              fontWeight: "400",
              fill: j ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.7",
              children: [
                "A = ",
                we(u.properties.area)
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: Z.x,
              y: Z.y - ke - 5,
              fontSize: a(9),
              fontWeight: "400",
              fill: j ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.7",
              children: [
                "C = ",
                we(u.properties.circumference)
              ]
            }
          )
        ] }, u.id);
      case "triangle":
        const re = u.properties.vertices.map(i), [ye, be, ve] = re, Ge = u.properties.vertices, pe = (() => {
          const [M, x, S] = Ge, G = Math.sqrt((x.x - S.x) ** 2 + (x.y - S.y) ** 2), w = Math.sqrt((M.x - S.x) ** 2 + (M.y - S.y) ** 2), E = Math.sqrt((M.x - x.x) ** 2 + (M.y - x.y) ** 2), W = Math.acos(
            (w ** 2 + E ** 2 - G ** 2) / (2 * w * E)
          ) * 180 / Math.PI, T = Math.acos(
            (G ** 2 + E ** 2 - w ** 2) / (2 * G * E)
          ) * 180 / Math.PI, g = 180 - W - T, N = 1;
          let F = "scalene", I = !1, D = !1, se = "";
          Math.abs(W - 90) < N || Math.abs(T - 90) < N || Math.abs(g - 90) < N ? (I = !0, F = "right") : W > 90 || T > 90 || g > 90 ? F = "obtuse" : F = "acute", Math.abs(G - w) < 0.1 && Math.abs(w - E) < 0.1 ? F = "equilateral" : (Math.abs(G - w) < 0.1 || Math.abs(w - E) < 0.1 || Math.abs(G - E) < 0.1) && (F = "isosceles");
          const Q = [W, T, g].sort((P, B) => P - B);
          return Math.abs(Q[0] - 30) < N && Math.abs(Q[1] - 60) < N && Math.abs(Q[2] - 90) < N ? (D = !0, se = "30-60-90") : Math.abs(Q[0] - 45) < N && Math.abs(Q[1] - 45) < N && Math.abs(Q[2] - 90) < N && (D = !0, se = "45-45-90"), {
            sideA: G,
            sideB: w,
            sideC: E,
            angleA: W,
            angleB: T,
            angleC: g,
            classification: F,
            isRight: I,
            isSpecial: D,
            specialType: se,
            area: u.properties.area
          };
        })(), he = (() => {
          if (!c.showSOHCAHTOA || !pe.isRight)
            return null;
          const M = [
            { index: 0, value: pe.angleA },
            { index: 1, value: pe.angleB },
            { index: 2, value: pe.angleC }
          ], x = M.find((T) => Math.abs(T.value - 90) < 1), S = M.filter((T) => T.value < 89);
          if (!x || S.length < 2) return null;
          const G = S.reduce(
            (T, g) => g.value > T.value ? g : T
          ), w = x.index, E = G.index, W = [0, 1, 2].find(
            (T) => T !== w && T !== E
          );
          return {
            referenceAngle: G,
            rightVertex: w,
            refVertex: E,
            thirdVertex: W,
            // Hypotenuse is ALWAYS opposite the right angle
            hypotenuseStart: E,
            hypotenuseEnd: W,
            // Opposite side is opposite the reference angle
            oppositeStart: w,
            oppositeEnd: W,
            // Adjacent side touches reference angle but isn't hypotenuse
            adjacentStart: E,
            adjacentEnd: w
          };
        })();
        return /* @__PURE__ */ e.jsxs("g", { children: [
          c.showSpecialTriangles && pe.isSpecial && /* @__PURE__ */ e.jsx(
            "path",
            {
              d: `M ${ye.x},${ye.y} L ${be.x},${be.y} L ${ve.x},${ve.y} Z`,
              fill: "rgba(255, 215, 0, 0.15)",
              stroke: "none"
            }
          ),
          j && /* @__PURE__ */ e.jsx(
            "path",
            {
              d: `M ${ye.x},${ye.y} L ${be.x},${be.y} L ${ve.x},${ve.y} Z`,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ e.jsx(
            "path",
            {
              d: `M ${ye.x},${ye.y} L ${be.x},${be.y} L ${ve.x},${ve.y} Z`,
              fill: j ? "rgba(245, 101, 101, 0.15)" : "rgba(245, 101, 101, 0.1)",
              stroke: j ? "#DC2626" : "#F56565",
              strokeWidth: j ? 3 : 2,
              style: { cursor: "pointer" },
              onMouseEnter: () => {
                c.showTrigValues && _(u.id);
              },
              onMouseLeave: () => {
                _(null), b(null);
              },
              onMouseMove: (M) => {
                var x;
                if (c.showTrigValues && p === u.id) {
                  const S = (x = M.currentTarget.ownerSVGElement) == null ? void 0 : x.getBoundingClientRect();
                  S && b({
                    x: M.clientX - S.left,
                    y: M.clientY - S.top
                  });
                }
              }
            }
          ),
          he && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: re[he.referenceAngle.index].x,
                cy: re[he.referenceAngle.index].y,
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
                  x1: re[he.hypotenuseStart].x,
                  y1: re[he.hypotenuseStart].y,
                  x2: re[he.hypotenuseEnd].x,
                  y2: re[he.hypotenuseEnd].y,
                  stroke: "#00AA00",
                  strokeWidth: "5",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "text",
                {
                  x: (re[he.hypotenuseStart].x + re[he.hypotenuseEnd].x) / 2,
                  y: (re[he.hypotenuseStart].y + re[he.hypotenuseEnd].y) / 2 - 15,
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
                  x1: re[he.oppositeStart].x,
                  y1: re[he.oppositeStart].y,
                  x2: re[he.oppositeEnd].x,
                  y2: re[he.oppositeEnd].y,
                  stroke: "#FF0000",
                  strokeWidth: "4",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "text",
                {
                  x: (re[he.oppositeStart].x + re[he.oppositeEnd].x) / 2 + 15,
                  y: (re[he.oppositeStart].y + re[he.oppositeEnd].y) / 2,
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
                  x1: re[he.adjacentStart].x,
                  y1: re[he.adjacentStart].y,
                  x2: re[he.adjacentEnd].x,
                  y2: re[he.adjacentEnd].y,
                  stroke: "#0000FF",
                  strokeWidth: "4",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "text",
                {
                  x: (re[he.adjacentStart].x + re[he.adjacentEnd].x) / 2,
                  y: (re[he.adjacentStart].y + re[he.adjacentEnd].y) / 2 + 20,
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
                  x: re[he.refVertex].x,
                  y: re[he.refVertex].y - 25,
                  fontSize: a(10),
                  fontWeight: "700",
                  fill: "#FFA500",
                  textAnchor: "middle",
                  children: [
                    "Reference Angle:",
                    " ",
                    he.referenceAngle.value.toFixed(1),
                    "°"
                  ]
                }
              )
            ] })
          ] }),
          c.showPythagoreanSquares && pe.isRight && /* @__PURE__ */ e.jsx("g", { children: (() => {
            var He;
            const M = (He = [
              { index: 0, angle: pe.angleA },
              { index: 1, angle: pe.angleB },
              { index: 2, angle: pe.angleC }
            ].find((Fe) => Math.abs(Fe.angle - 90) < 1)) == null ? void 0 : He.index;
            if (M === void 0) return null;
            const x = Ge[M], S = Ge[(M + 1) % 3], G = Ge[(M + 2) % 3], w = Math.sqrt(
              (x.x - S.x) ** 2 + (x.y - S.y) ** 2
            ), E = Math.sqrt(
              (x.x - G.x) ** 2 + (x.y - G.y) ** 2
            ), W = Math.sqrt(
              (S.x - G.x) ** 2 + (S.y - G.y) ** 2
            ), T = {
              x: (S.x - x.x) / w,
              y: (S.y - x.y) / w
            }, g = {
              x: (G.x - x.x) / E,
              y: (G.y - x.y) / E
            }, N = {
              x: (G.x - S.x) / W,
              y: (G.y - S.y) / W
            }, F = (Fe, De, _e, Ve) => {
              const Xe = (at, St, ut) => (at.x - ut.x) * (St.y - ut.y) - (St.x - ut.x) * (at.y - ut.y), et = Xe(Fe, De, _e), ot = Xe(Fe, _e, Ve), qe = Xe(Fe, Ve, De), xt = et < 0 || ot < 0 || qe < 0, $e = et > 0 || ot > 0 || qe > 0;
              return !(xt && $e);
            }, I = { x: -T.y, y: T.x }, D = { x: T.y, y: -T.x }, se = { x: -g.y, y: g.x }, Q = { x: g.y, y: -g.x }, P = { x: -N.y, y: N.x }, B = { x: N.y, y: -N.x }, q = {
              x: x.x + w * I.x * 0.1,
              y: x.y + w * I.y * 0.1
            };
            x.x + w * D.x * 0.1, x.y + w * D.y * 0.1;
            const U = F(
              q,
              x,
              S,
              G
            ) ? D : I, K = {
              x: x.x + E * se.x * 0.1,
              y: x.y + E * se.y * 0.1
            };
            x.x + E * Q.x * 0.1, x.y + E * Q.y * 0.1;
            const le = F(
              K,
              x,
              S,
              G
            ) ? Q : se, xe = {
              x: (S.x + G.x) / 2,
              y: (S.y + G.y) / 2
            }, Me = {
              x: xe.x + W * P.x * 0.1,
              y: xe.y + W * P.y * 0.1
            }, Ee = F(
              Me,
              x,
              S,
              G
            ) ? B : P, Ne = [
              x,
              {
                x: x.x + w * T.x,
                y: x.y + w * T.y
              },
              {
                x: x.x + w * T.x + w * U.x,
                y: x.y + w * T.y + w * U.y
              },
              {
                x: x.x + w * U.x,
                y: x.y + w * U.y
              }
            ], Ie = [
              x,
              {
                x: x.x + E * g.x,
                y: x.y + E * g.y
              },
              {
                x: x.x + E * g.x + E * le.x,
                y: x.y + E * g.y + E * le.y
              },
              {
                x: x.x + E * le.x,
                y: x.y + E * le.y
              }
            ], We = [
              S,
              G,
              {
                x: G.x + W * Ee.x,
                y: G.y + W * Ee.y
              },
              {
                x: S.x + W * Ee.x,
                y: S.y + W * Ee.y
              }
            ], Se = Ne.map(i), je = Ie.map(i), Ae = We.map(i);
            return /* @__PURE__ */ e.jsxs("g", { children: [
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: `M ${Se[0].x},${Se[0].y} L ${Se[1].x},${Se[1].y} L ${Se[2].x},${Se[2].y} L ${Se[3].x},${Se[3].y} Z`,
                  fill: "rgba(59, 130, 246, 0.3)",
                  stroke: "#3B82F6",
                  strokeWidth: "2",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: (Se[0].x + Se[1].x + Se[2].x + Se[3].x) / 4,
                  y: (Se[0].y + Se[1].y + Se[2].y + Se[3].y) / 4,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#1D4ED8",
                  textAnchor: "middle",
                  children: [
                    "a² = ",
                    (w ** 2).toFixed(1)
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: `M ${je[0].x},${je[0].y} L ${je[1].x},${je[1].y} L ${je[2].x},${je[2].y} L ${je[3].x},${je[3].y} Z`,
                  fill: "rgba(239, 68, 68, 0.3)",
                  stroke: "#EF4444",
                  strokeWidth: "2",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: (je[0].x + je[1].x + je[2].x + je[3].x) / 4,
                  y: (je[0].y + je[1].y + je[2].y + je[3].y) / 4,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#DC2626",
                  textAnchor: "middle",
                  children: [
                    "b² = ",
                    (E ** 2).toFixed(1)
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: `M ${Ae[0].x},${Ae[0].y} L ${Ae[1].x},${Ae[1].y} L ${Ae[2].x},${Ae[2].y} L ${Ae[3].x},${Ae[3].y} Z`,
                  fill: "rgba(34, 197, 94, 0.3)",
                  stroke: "#22C55E",
                  strokeWidth: "2",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: (Ae[0].x + Ae[1].x + Ae[2].x + Ae[3].x) / 4,
                  y: (Ae[0].y + Ae[1].y + Ae[2].y + Ae[3].y) / 4,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#16A34A",
                  textAnchor: "middle",
                  children: [
                    "c² = ",
                    (W ** 2).toFixed(1)
                  ]
                }
              ),
              (() => {
                const Fe = {
                  x: (ye.x + be.x + ve.x) / 3,
                  y: (ye.y + be.y + ve.y) / 3
                }, De = [
                  ...Se,
                  ...je,
                  ...Ae
                ], _e = Math.min(
                  ...De.map(($e) => $e.x)
                ), Ve = Math.max(
                  ...De.map(($e) => $e.x)
                ), Xe = Math.min(
                  ...De.map(($e) => $e.y)
                ), et = Math.max(
                  ...De.map(($e) => $e.y)
                ), ot = [
                  {
                    x: (_e + Ve) / 2,
                    y: et + 40,
                    label: "below"
                  },
                  {
                    x: (_e + Ve) / 2,
                    y: Xe - 40,
                    label: "above"
                  },
                  { x: _e - 80, y: (Xe + et) / 2, label: "left" },
                  {
                    x: Ve + 80,
                    y: (Xe + et) / 2,
                    label: "right"
                  }
                ];
                let qe = ot[0], xt = 1 / 0;
                return ot.forEach(($e) => {
                  const at = Math.sqrt(
                    ($e.x - Fe.x) ** 2 + ($e.y - Fe.y) ** 2
                  );
                  at < xt && (xt = at, qe = $e);
                }), /* @__PURE__ */ e.jsxs("g", { children: [
                  /* @__PURE__ */ e.jsx(
                    "rect",
                    {
                      x: qe.x - 85,
                      y: qe.y - 20,
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
                      x: qe.x,
                      y: qe.y - 5,
                      fontSize: a(11),
                      fontWeight: "700",
                      fill: "#374151",
                      textAnchor: "middle",
                      opacity: "1",
                      children: [
                        (w ** 2).toFixed(1),
                        " +",
                        " ",
                        (E ** 2).toFixed(1),
                        " =",
                        " ",
                        (W ** 2).toFixed(1)
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "text",
                    {
                      x: qe.x,
                      y: qe.y + 10,
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
          c.showTriangleAltitudes && /* @__PURE__ */ e.jsx("g", { children: Ge.map((M, x) => {
            const S = Ge[(x + 1) % 3], G = Ge[(x + 2) % 3], w = G.x - S.x, E = G.y - S.y, W = Math.sqrt(w * w + E * E);
            if (W === 0) return null;
            const T = ((M.x - S.x) * w + (M.y - S.y) * E) / (W * W), g = {
              x: S.x + T * w,
              y: S.y + T * E
            }, N = i(M), F = i(g);
            return /* @__PURE__ */ e.jsxs("g", { children: [
              /* @__PURE__ */ e.jsx(
                "line",
                {
                  x1: N.x,
                  y1: N.y,
                  x2: F.x,
                  y2: F.y,
                  stroke: "#9CA3AF",
                  strokeWidth: "1",
                  strokeDasharray: "3,3",
                  opacity: "0.7"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  cx: F.x,
                  cy: F.y,
                  r: "2",
                  fill: "#9CA3AF",
                  opacity: "0.7"
                }
              )
            ] }, `altitude-${x}`);
          }) }),
          re.map((M, x) => /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: M.x,
              cy: M.y,
              r: s / 6,
              fill: j ? "#DC2626" : "#F56565",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "move" }
            },
            `vertex-${x}`
          )),
          c.showTriangleAngles && /* @__PURE__ */ e.jsxs("g", { children: [
            [
              { vertex: ye, angle: pe.angleA, label: "A" },
              { vertex: be, angle: pe.angleB, label: "B" },
              { vertex: ve, angle: pe.angleC, label: "C" }
            ].map((M, x) => /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: M.vertex.x + (x === 0 ? -25 : x === 1 ? 25 : 0),
                y: M.vertex.y + (x === 2 ? 25 : -15),
                fontSize: a(9),
                fontWeight: "600",
                fill: j ? "#DC2626" : "#F56565",
                textAnchor: "middle",
                opacity: "0.9",
                children: [
                  M.label,
                  ": ",
                  M.angle.toFixed(1),
                  "°"
                ]
              },
              `angle-${x}`
            )),
            /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: (ye.x + be.x + ve.x) / 3,
                y: (ye.y + be.y + ve.y) / 3 + 20,
                fontSize: a(8),
                fontWeight: "400",
                fill: j ? "#DC2626" : "#F56565",
                textAnchor: "middle",
                opacity: "0.6",
                children: [
                  "Sum:",
                  " ",
                  (pe.angleA + pe.angleB + pe.angleC).toFixed(1),
                  "°"
                ]
              }
            )
          ] }),
          c.showTriangleClassification && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "text",
              {
                x: (ye.x + be.x + ve.x) / 3,
                y: (ye.y + be.y + ve.y) / 3 - 15,
                fontSize: a(11),
                fontWeight: "600",
                fill: pe.isSpecial ? "#FFA500" : j ? "#DC2626" : "#F56565",
                textAnchor: "middle",
                opacity: "0.9",
                children: pe.isSpecial ? pe.specialType : pe.classification
              }
            ),
            pe.isSpecial && /* @__PURE__ */ e.jsx(
              "text",
              {
                x: (ye.x + be.x + ve.x) / 3,
                y: (ye.y + be.y + ve.y) / 3 - 2,
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
              x: (ye.x + be.x + ve.x) / 3,
              y: (ye.y + be.y + ve.y) / 3 + (c.showTriangleAngles ? 35 : 8),
              fontSize: a(10),
              fontWeight: "500",
              fill: j ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "Area = ",
                we(pe.area)
              ]
            }
          ),
          c.showTrigValues && p === u.id && k && /* @__PURE__ */ e.jsx("g", { children: (() => {
            const M = [
              { label: "A", value: pe.angleA, index: 0 },
              { label: "B", value: pe.angleB, index: 1 },
              { label: "C", value: pe.angleC, index: 2 }
            ];
            let x = M[0], S = 1 / 0;
            M.forEach((T) => {
              const g = re[T.index], N = Math.sqrt(
                (k.x - g.x) ** 2 + (k.y - g.y) ** 2
              );
              N < S && (S = N, x = T);
            });
            const G = x.value * Math.PI / 180, w = Math.sin(G), E = Math.cos(G), W = Math.tan(G);
            return /* @__PURE__ */ e.jsxs("g", { children: [
              /* @__PURE__ */ e.jsx(
                "rect",
                {
                  x: k.x + 10,
                  y: k.y - 55,
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
                  x: k.x + 80,
                  y: k.y - 40,
                  fontSize: a(9),
                  fontWeight: "600",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "Angle ",
                    x.label,
                    ":",
                    " ",
                    x.value.toFixed(1),
                    "°"
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: k.x + 80,
                  y: k.y - 28,
                  fontSize: a(8),
                  fontWeight: "500",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "sin = ",
                    w.toFixed(3)
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: k.x + 80,
                  y: k.y - 16,
                  fontSize: a(8),
                  fontWeight: "500",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "cos = ",
                    E.toFixed(3)
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "text",
                {
                  x: k.x + 80,
                  y: k.y - 4,
                  fontSize: a(8),
                  fontWeight: "500",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "tan = ",
                    isFinite(W) ? W.toFixed(3) : "∞"
                  ]
                }
              )
            ] });
          })() }),
          /* @__PURE__ */ e.jsx(
            "text",
            {
              x: (ye.x + be.x) / 2,
              y: (ye.y + be.y) / 2 - 10,
              fontSize: a(8),
              fontWeight: "400",
              fill: j ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: we(pe.sideC)
            }
          ),
          /* @__PURE__ */ e.jsx(
            "text",
            {
              x: (be.x + ve.x) / 2 + 10,
              y: (be.y + ve.y) / 2,
              fontSize: a(8),
              fontWeight: "400",
              fill: j ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: we(pe.sideA)
            }
          ),
          /* @__PURE__ */ e.jsx(
            "text",
            {
              x: (ye.x + ve.x) / 2 - 10,
              y: (ye.y + ve.y) / 2,
              fontSize: a(8),
              fontWeight: "400",
              fill: j ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: we(pe.sideB)
            }
          )
        ] }, u.id);
      case "function":
        const Pe = u, Ye = Pe.properties.points;
        if (!Ye || Ye.length < 2) return null;
        const rt = Ye.map(i).reduce((M, x, S) => S === 0 ? `M ${x.x} ${x.y}` : `${M} L ${x.x} ${x.y}`, ""), Ue = i({
          x: Pe.properties.domain.min,
          y: ((ne = Ye[0]) == null ? void 0 : ne.y) || 0
        }), ht = i({
          x: Pe.properties.domain.max,
          y: ((ue = Ye[Ye.length - 1]) == null ? void 0 : ue.y) || 0
        });
        return /* @__PURE__ */ e.jsxs("g", { children: [
          c.showFunctionExtensions && (() => {
            const M = (w, E) => {
              try {
                const W = w.replace(/\bx\b/g, `(${E})`).replace(/\^/g, "**").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/log/g, "Math.log").replace(/ln/g, "Math.log").replace(/exp/g, "Math.exp").replace(/sqrt/g, "Math.sqrt").replace(/abs/g, "Math.abs").replace(/pi/g, "Math.PI").replace(/e\b/g, "Math.E"), g = new Function("x", `return ${W}`)(E);
                return typeof g == "number" && !isNaN(g) && isFinite(g) ? g : null;
              } catch {
                return null;
              }
            }, x = {
              left: t.center.x - o.width / 2 / t.zoom,
              right: t.center.x + o.width / 2 / t.zoom
            }, S = Pe.properties.equation, G = [];
            if (Pe.properties.domain.min > x.left) {
              const w = [], E = Math.max(
                x.left,
                Pe.properties.domain.min - 6
              ), W = (Pe.properties.domain.min - E) / 15;
              for (let T = E; T <= Pe.properties.domain.min; T += W) {
                const g = M(S, T);
                g !== null && w.push(i({ x: T, y: g }));
              }
              if (w.length > 1) {
                const T = w.reduce(
                  (g, N, F) => g + (F === 0 ? `M ${N.x} ${N.y}` : ` L ${N.x} ${N.y}`),
                  ""
                );
                G.push(T);
              }
            }
            if (Pe.properties.domain.max < x.right) {
              const w = [], E = Math.min(
                x.right,
                Pe.properties.domain.max + 6
              ), W = (E - Pe.properties.domain.max) / 15;
              for (let T = Pe.properties.domain.max; T <= E; T += W) {
                const g = M(S, T);
                g !== null && w.push(i({ x: T, y: g }));
              }
              if (w.length > 1) {
                const T = w.reduce(
                  (g, N, F) => g + (F === 0 ? `M ${N.x} ${N.y}` : ` L ${N.x} ${N.y}`),
                  ""
                );
                G.push(T);
              }
            }
            return /* @__PURE__ */ e.jsx("g", { children: G.map((w, E) => /* @__PURE__ */ e.jsx(
              "path",
              {
                d: w,
                fill: "none",
                stroke: Pe.properties.color || "#2563eb",
                strokeWidth: 1,
                strokeDasharray: "4,4",
                opacity: 0.5,
                strokeLinecap: "round"
              },
              `ext-${E}`
            )) });
          })(),
          j && /* @__PURE__ */ e.jsx(
            "path",
            {
              d: rt,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ e.jsx(
            "path",
            {
              d: rt,
              fill: "none",
              stroke: "transparent",
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: { pointerEvents: "stroke" },
              onMouseEnter: () => $(u.id),
              onMouseLeave: () => {
                $(null), H(null);
              },
              onMouseMove: (M) => {
                var x;
                if (Y === u.id) {
                  const S = (x = M.currentTarget.ownerSVGElement) == null ? void 0 : x.getBoundingClientRect();
                  if (S) {
                    const G = M.clientX - S.left, w = M.clientY - S.top;
                    t.center.x + (G - o.width / 2) / t.zoom, t.center.y - (w - o.height / 2) / t.zoom;
                    let E = null, W = 1 / 0;
                    for (const T of Ye) {
                      const g = i(T), N = Math.sqrt(
                        (G - g.x) ** 2 + (w - g.y) ** 2
                      );
                      N < W && (W = N, E = T);
                    }
                    E && H(E);
                  }
                }
              }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "path",
            {
              d: rt,
              fill: "none",
              stroke: j ? "#1D4ED8" : Pe.properties.color || "#2563eb",
              strokeWidth: j ? 3 : Pe.properties.strokeWidth || 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: { pointerEvents: "none" }
            }
          ),
          j && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: Ue.x,
                cy: Ue.y,
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
                cx: ht.x,
                cy: ht.y,
                r: "6",
                fill: "#1D4ED8",
                stroke: "white",
                strokeWidth: "2",
                opacity: 0.8
              }
            )
          ] }),
          Y === u.id && A && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: i(A).x,
                cy: i(A).y,
                r: "4",
                fill: Pe.properties.color || "#2563eb",
                stroke: "white",
                strokeWidth: "2"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "rect",
              {
                x: i(A).x - 70,
                y: i(A).y - 55,
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
                x: i(A).x,
                y: i(A).y - 40,
                fontSize: a(9),
                fontWeight: "600",
                fill: "#374151",
                textAnchor: "middle",
                children: [
                  "(",
                  ee(A.x, h),
                  ",",
                  " ",
                  ee(A.y, h),
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: i(A).x,
                y: i(A).y - 28,
                fontSize: a(8),
                fontWeight: "500",
                fill: "#374151",
                textAnchor: "middle",
                children: [
                  "f(",
                  ee(A.x, h),
                  ") =",
                  " ",
                  ee(A.y, h)
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "text",
              {
                x: i(A).x,
                y: i(A).y - 16,
                fontSize: a(8),
                fontWeight: "400",
                fill: "#666",
                textAnchor: "middle",
                children: [
                  "f(x) = ",
                  Pe.properties.equation
                ]
              }
            )
          ] }),
          (j || v === u.id) && /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "rect",
              {
                x: Ue.x - 40,
                y: Ue.y - 35,
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
                x: Ue.x,
                y: Ue.y - 20,
                fontSize: a(10),
                fontWeight: "600",
                fill: "#374151",
                textAnchor: "middle",
                children: [
                  "f(x) = ",
                  Pe.properties.equation
                ]
              }
            )
          ] })
        ] }, u.id);
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
    /* @__PURE__ */ e.jsx("g", { className: "objects", children: n.map(J) })
  ] });
}
function ds({ capabilities: n, viewport: t, activeTool: s, selectedObjectsCount: i }) {
  return n ? /* @__PURE__ */ e.jsxs("div", { className: "absolute top-2 left-2 text-xs text-gray-500 bg-white/80 p-2 rounded shadow-sm", children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      "Input: ",
      n.hasTouch ? "👆" : "🖱️",
      " ",
      n.hasPencil ? "✏️" : ""
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      "Zoom: ",
      t.zoom >= 1 ? t.zoom.toFixed(1) : t.zoom.toFixed(2),
      "×"
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      "Center: (",
      t.center.x.toFixed(1),
      ", ",
      t.center.y.toFixed(1),
      ")"
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      "Tool: ",
      s || "Pan Mode"
    ] }),
    i > 0 && /* @__PURE__ */ e.jsxs("div", { children: [
      "Selected: ",
      i,
      " object",
      i !== 1 ? "s" : ""
    ] })
  ] }) : null;
}
function hs({ selectedObject: n, onDelete: t, onUpdate: s, onClose: i }) {
  const r = "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768, [o, c] = te(() => {
    var z;
    const C = ae.loadState(), m = (z = C == null ? void 0 : C.uiSettings) == null ? void 0 : z.contextMenuCollapsed;
    if (m !== void 0)
      return m;
    try {
      const X = localStorage.getItem("grix-ui-collapsed");
      if (X !== null)
        return X === "true";
    } catch {
    }
    return r;
  });
  me(() => {
    var m;
    const C = ae.loadState();
    if (((m = C == null ? void 0 : C.uiSettings) == null ? void 0 : m.contextMenuCollapsed) === void 0) {
      const z = r, X = {
        ...C,
        uiSettings: {
          ...C == null ? void 0 : C.uiSettings,
          contextMenuCollapsed: z
        }
      };
      ae.saveState(X), ae.scheduleSave(), c(z);
    }
  }, [r]);
  const a = () => {
    const C = !o;
    c(C);
    const m = ae.loadState() || {}, z = {
      ...m,
      uiSettings: {
        ...m.uiSettings,
        contextMenuCollapsed: C
      }
    };
    ae.saveState(z), ae.scheduleSave();
    try {
      localStorage.setItem("grix-ui-collapsed", C.toString());
    } catch {
      console.warn("Could not save collapsed state to localStorage");
    }
  };
  if (!n) return null;
  const d = () => {
    t(), i();
  }, h = (C, m) => {
    try {
      const z = (k, b) => {
        try {
          const Y = k.replace(/\bx\b/g, `(${b})`).replace(/\^/g, "**").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/log/g, "Math.log").replace(/ln/g, "Math.log").replace(/exp/g, "Math.exp").replace(/sqrt/g, "Math.sqrt").replace(/abs/g, "Math.abs").replace(/pi/g, "Math.PI").replace(/e\b/g, "Math.E"), A = new Function("x", `return ${Y}`)(b);
          return typeof A == "number" && !isNaN(A) && isFinite(A) ? A : null;
        } catch {
          return null;
        }
      }, X = (k) => k.includes("sin") || k.includes("cos") || k.includes("tan") ? "trigonometric" : k.includes("exp") || k.includes("e^") ? "exponential" : k.includes("log") || k.includes("ln") ? "logarithmic" : /x\^\d+|x\*\*\d+/.test(k) ? "polynomial" : "custom", l = C.properties.domain, f = C.properties.resolution || 20, p = [], _ = (l.max - l.min) / (f * (l.max - l.min));
      for (let k = l.min; k <= l.max; k += _) {
        const b = z(m, k);
        b !== null && p.push({ x: k, y: b });
      }
      return {
        properties: {
          ...C.properties,
          equation: m,
          functionType: X(m),
          points: p
        }
      };
    } catch (z) {
      return console.error("Failed to update function equation:", z), null;
    }
  }, v = () => {
    switch (n.type) {
      case "ray":
        const { startPoint: C, endPoint: m, slope: z } = n.properties, X = Math.abs(C.x) < 1e-3 && Math.abs(C.y) < 1e-3;
        return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Line Details" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Start: (",
              ee(C.x, 1),
              ", ",
              ee(C.y, 1),
              ")"
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "End: (",
              ee(m.x, 1),
              ", ",
              ee(m.y, 1),
              ")"
            ] }),
            X && /* @__PURE__ */ e.jsxs("div", { children: [
              "Fraction: ",
              Math.round(m.y),
              "/",
              Math.round(m.x)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Slope: ",
              isFinite(z) ? z.toFixed(3) : "undefined"
            ] })
          ] })
        ] });
      case "rectangle":
        const { x: l, y: f, width: p, height: _, area: k } = n.properties;
        return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Rectangle Details" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Position: (",
              ee(l, 1),
              ", ",
              ee(f, 1),
              ")"
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Size: ",
              ee(p, 1),
              " × ",
              ee(_, 1)
            ] })
          ] })
        ] });
      case "circle":
        const { center: b, radius: Y, diameter: $, circumference: A, area: H } = n.properties;
        return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Circle Details" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Center: (",
              ee(b.x, 1),
              ", ",
              ee(b.y, 1),
              ")"
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Radius: ",
              we(Y)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Diameter: ",
              we($)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Circumference: ",
              we(A)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Area: ",
              we(H)
            ] })
          ] })
        ] });
      case "triangle":
        const { vertices: R, sideA: J, sideB: u, sideC: j, angleA: ne, angleB: ue, angleC: Oe, area: ge, perimeter: L, type: ce } = n.properties;
        return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Triangle Details" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Type: ",
              ce
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Vertices:" }),
            /* @__PURE__ */ e.jsxs("div", { className: "ml-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                "A: (",
                ee(R[0].x, 1),
                ", ",
                ee(R[0].y, 1),
                ")"
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                "B: (",
                ee(R[1].x, 1),
                ", ",
                ee(R[1].y, 1),
                ")"
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                "C: (",
                ee(R[2].x, 1),
                ", ",
                ee(R[2].y, 1),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Sides: ",
              we(J),
              ", ",
              we(u),
              ", ",
              we(j)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Angles: ",
              we(ne),
              "°, ",
              we(ue),
              "°, ",
              we(Oe),
              "°"
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Area: ",
              we(ge)
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Perimeter: ",
              we(L)
            ] })
          ] })
        ] });
      case "function":
        const y = n, { equation: V, functionType: de, domain: fe, points: ze } = y.properties;
        return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Function Details" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Equation: f(x) = ",
              V
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Type: ",
              de
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              "Domain: [",
              ee(fe.min, 1),
              ", ",
              ee(fe.max, 1),
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
                defaultValue: V,
                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500",
                placeholder: "e.g., x^2, sin(x), 2*x + 1",
                onKeyDown: (Z) => {
                  if (Z.stopPropagation(), Z.key === "Enter") {
                    const ke = Z.target.value.trim();
                    if (ke && ke !== V) {
                      const Be = h(y, ke);
                      Be && s(n.id, { properties: Be.properties });
                    }
                    Z.target.blur();
                  } else Z.key === "Escape" && Z.target.blur();
                },
                onKeyUp: (Z) => {
                  Z.stopPropagation();
                },
                onKeyPress: (Z) => {
                  Z.stopPropagation();
                },
                onFocus: (Z) => {
                  Z.target.select();
                }
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 mt-1", children: "Press Enter to apply. Examples: x^2, sin(x), cos(x), log(x), exp(x)" })
          ] })
        ] });
      default:
        return null;
    }
  }, O = () => {
    switch (n.type) {
      case "ray":
        return `Line: slope ${we(n.properties.slope)}`;
      case "rectangle":
        const C = n;
        return `Rectangle: ${we(C.properties.width)} × ${we(C.properties.height)}`;
      case "circle":
        return `Circle: r=${we(n.properties.radius)}`;
      case "triangle":
        return "Triangle";
      case "function":
        return `Function: ${n.properties.equation}`;
      default:
        return n.type;
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
    /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: O() }),
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
        onClick: i,
        className: "text-gray-400 hover:text-gray-600",
        title: "Close",
        children: "✕"
      }
    )
  ] }) }) : /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "fixed top-20 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 min-w-48",
      onKeyDown: (C) => {
        C.stopPropagation();
      },
      onKeyUp: (C) => {
        C.stopPropagation();
      },
      onKeyPress: (C) => {
        C.stopPropagation();
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-semibold text-gray-700", children: [
            n.type.charAt(0).toUpperCase() + n.type.slice(1),
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
        v(),
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
              onClick: i,
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
function xs({ isOpen: n, onToggle: t } = {}) {
  const [s, i] = te(!1), r = n !== void 0 ? n : s, [o, c] = te("all"), a = Re(null), d = Le(), { toggleSetting: h, setFontScale: v, setGridScale: O, setSnapPrecision: C, setCoordinateSystem: m, setZoomSensitivity: z, resetToDefaults: X } = d, { t: l, language: f, changeLanguage: p, availableLanguages: _ } = Ze(), k = () => {
    t ? t() : i(!s);
  };
  me(() => {
    function A(H) {
      a.current && !a.current.contains(H.target) && (t ? t() : i(!1));
    }
    if (r)
      return document.addEventListener("mousedown", A, !0), document.addEventListener("click", A, !0), () => {
        document.removeEventListener("mousedown", A, !0), document.removeEventListener("click", A, !0);
      };
  }, [r, t]);
  const b = [
    {
      title: l("settings.sections.originLines"),
      subtitle: l("settings.sections.originLines.subtitle"),
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
          key: "showDivisionMultiples",
          label: l("settings.divisionMultiples"),
          description: l("settings.divisionMultiples.description")
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
        }
      ]
    },
    {
      title: l("settings.sections.divisionFractions"),
      subtitle: l("settings.sections.divisionFractions.subtitle"),
      settings: [
        {
          key: "showDivisionAnswer",
          label: l("settings.divisionAnswer"),
          description: l("settings.divisionAnswer.description")
        }
      ]
    },
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
    {
      title: l("settings.sections.circlesConcepts"),
      subtitle: l("settings.sections.circlesConcepts.subtitle"),
      settings: [
        {
          key: "showTangentLines",
          label: l("settings.tangentLines"),
          description: l("settings.tangentLines.description")
        }
      ]
    },
    {
      title: l("settings.sections.functionConcepts"),
      subtitle: l("settings.sections.functionConcepts.subtitle"),
      settings: [
        {
          key: "showFunctionExtensions",
          label: l("settings.functionExtensions"),
          description: l("settings.functionExtensions.description")
        }
      ]
    },
    {
      title: l("settings.sections.triangleConcepts"),
      subtitle: l("settings.sections.triangleConcepts.subtitle"),
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
    {
      title: l("settings.sections.rectangleConcepts"),
      subtitle: l("settings.sections.rectangleConcepts.subtitle"),
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
        }
      ]
    },
    {
      title: l("settings.sections.display"),
      subtitle: l("settings.sections.display.subtitle"),
      settings: []
      // No checkboxes for this section
    }
  ], Y = o === "all" ? b : b.filter((A) => A.title.toLowerCase().replace(/[^a-z0-9]/g, "-") === o), $ = [
    { id: "all", name: l("settings.allSettings") },
    ...b.map((A) => ({
      id: A.title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      name: A.title
    }))
  ];
  return /* @__PURE__ */ e.jsxs("div", { ref: a, className: "relative", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: k,
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
              onClick: X,
              className: "text-xs text-blue-600 hover:text-blue-800 font-medium",
              children: l("settings.resetAll")
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "px-4 pt-2", children: /* @__PURE__ */ e.jsx(
          "select",
          {
            value: o,
            onChange: (A) => c(A.target.value),
            className: "w-full text-xs border border-gray-200 rounded px-2 py-1 bg-white",
            children: $.map((A) => /* @__PURE__ */ e.jsx("option", { value: A.id, children: A.name }, A.id))
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "settings-scrollable p-4 space-y-5", children: Y.map((A, H) => /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: `${H > 0 ? "border-t border-gray-100 pt-4" : ""} mb-3`, children: [
          /* @__PURE__ */ e.jsx("h4", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wide", children: A.title }),
          A.subtitle && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: A.subtitle })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
          A.settings.map((R) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "checkbox",
                checked: d[R.key],
                onChange: () => h(R.key),
                className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: R.label }),
              /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: R.description })
            ] })
          ] }, R.key)),
          A.title === l("settings.sections.display") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
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
                  onChange: (R) => v(parseFloat(R.target.value)),
                  className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-600", children: "A" })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: l("settings.fontSize.description") }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: l("settings.gridDensity") }),
                /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-500 font-mono", children: [
                  Math.round(d.gridScale * 100),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-400", children: l("settings.gridSparse") }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "range",
                    min: "0.2",
                    max: "5.0",
                    step: "0.1",
                    value: d.gridScale,
                    onChange: (R) => O(parseFloat(R.target.value)),
                    className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600", children: l("settings.gridDense") })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: l("settings.gridDensity.description") })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: l("settings.coordinateSystem") }),
              /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [
                { value: "cartesian", label: l("settings.cartesianOnly"), desc: l("settings.cartesianOnly.description") },
                { value: "polar", label: l("settings.polarOnly"), desc: l("settings.polarOnly.description") },
                { value: "both", label: l("settings.bothSystems"), desc: l("settings.bothSystems.description") }
              ].map((R) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "coordinateSystem",
                    value: R.value,
                    checked: d.coordinateSystem === R.value,
                    onChange: (J) => m(J.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: R.label }),
                  /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500", children: R.desc })
                ] })
              ] }, R.value)) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: l("settings.snapPrecision") }),
              /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [
                { value: "adaptive", label: l("settings.adaptive"), desc: l("settings.adaptive.description") },
                { value: "whole", label: l("settings.wholeNumbers"), desc: l("settings.wholeNumbers.description") },
                { value: "half", label: l("settings.halfUnits"), desc: l("settings.halfUnits.description") },
                { value: "quarter", label: l("settings.quarterUnits"), desc: l("settings.quarterUnits.description") },
                { value: "tenth", label: l("settings.tenthUnits"), desc: l("settings.tenthUnits.description") }
              ].map((R) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "snapPrecision",
                    value: R.value,
                    checked: d.snapPrecision === R.value,
                    onChange: (J) => C(J.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: R.label }),
                  /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500", children: R.desc })
                ] })
              ] }, R.value)) }),
              /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: l("settings.snapPrecision.description") })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: l("settings.zoomSensitivity") }),
              /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 gap-1", children: [
                { value: "low", label: l("settings.low"), desc: l("settings.low.description") },
                { value: "medium", label: l("settings.medium"), desc: l("settings.medium.description") },
                { value: "high", label: l("settings.high"), desc: l("settings.high.description") }
              ].map((R) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-start gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer group", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "zoomSensitivity",
                    value: R.value,
                    checked: d.zoomSensitivity === R.value,
                    onChange: (J) => z(J.target.value),
                    className: "mt-0.5"
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-900 group-hover:text-gray-700", children: R.label }),
                  /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500", children: R.desc })
                ] })
              ] }, R.value)) }),
              /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: l("settings.zoomSensitivity.description") })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: l("settings.language") }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: f,
                  onChange: (R) => p(R.target.value),
                  className: "w-full text-sm border border-gray-200 rounded px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  children: _.map((R) => /* @__PURE__ */ e.jsxs("option", { value: R.code, children: [
                    R.nativeName,
                    " (",
                    R.name,
                    ")"
                  ] }, R.code))
                }
              ),
              /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: l("settings.language.description") })
            ] })
          ] })
        ] })
      ] }, A.title)) }),
      /* @__PURE__ */ e.jsx("div", { className: "sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg", children: /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 text-center", children: l("settings.footerText") }) })
    ] })
  ] });
}
const Je = class Je {
  constructor() {
    ie(this, "examplesData", null);
    ie(this, "isLoading", !1);
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
      for (const i of s.examples)
        if (!i.id || !i.title || !i.objects || !Array.isArray(i.objects))
          throw new Error(`Invalid example: ${i.id || "unknown"}`);
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
    return (await this.getExamples()).find((i) => i.id === t) || null;
  }
  async getExamplesByCategory(t) {
    return (await this.getExamples()).filter((i) => i.category === t);
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
        return {
          ...s,
          type: "circle",
          properties: {
            center: t.properties.center,
            radius: t.properties.radius,
            diameter: t.properties.diameter,
            circumference: t.properties.circumference,
            area: t.properties.area
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
    const i = Te.getState(), r = Le.getState();
    try {
      i.getAllObjects().forEach((c) => {
        i.removeObject(c.id);
      }), i.clearSelection(), s.viewport && i.setViewport(s.viewport), Object.entries(s.settings).forEach(([c, a]) => {
        c in r && typeof a == "boolean" ? (r.toggleSetting(c), r[c] !== a && r.toggleSetting(c)) : c === "snapPrecision" && typeof a == "string" ? r.setSnapPrecision(a) : c === "coordinateSystem" && typeof a == "string" ? r.setCoordinateSystem(a) : c === "fontScale" && typeof a == "number" ? r.setFontScale(a) : c === "gridScale" && typeof a == "number" && r.setGridScale(a);
      }), s.objects.forEach((c) => {
        const a = this.convertExampleObjectToMathObject(c);
        i.addObject(a);
      }), console.log(`Applied example: ${s.title}`);
    } catch (o) {
      throw console.error("Failed to apply example:", o), new Error(`Failed to apply example "${s.title}": ${o.message}`);
    }
  }
  async clearCanvas() {
    const t = Te.getState(), s = Le.getState();
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
    const i = Math.floor(Math.random() * s.length);
    return s[i];
  }
};
ie(Je, "instance");
let bt = Je;
const nt = bt.getInstance(), zt = "grix-tutorial-completed";
function us() {
  const [n, t] = te(!1), [s, i] = te(0), [r, o] = te(!1);
  me(() => {
    localStorage.getItem(zt) || t(!0);
  }, []);
  const c = [
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
  ], a = () => {
    s < c.length - 1 ? i(s + 1) : h();
  }, d = () => {
    h();
  }, h = () => {
    localStorage.setItem(zt, "true"), t(!1);
  }, v = async () => {
    try {
      o(!0);
      const m = await nt.getBeginnerExamples();
      m.length > 0 && await nt.applyExample(m[0].id), h();
    } catch (m) {
      console.error("Failed to load example:", m), h();
    } finally {
      o(!1);
    }
  };
  if (!n) return null;
  const O = c[s], C = s === c.length - 1;
  return /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-md mx-4 p-6 relative", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex gap-2 mb-4", children: c.map((m, z) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `h-2 flex-1 rounded-full ${z <= s ? "bg-blue-500" : "bg-gray-200"}`
        },
        z
      )) }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-3", children: O.title }),
        /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 leading-relaxed mb-6", children: O.content })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: d,
            className: "flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors",
            disabled: r,
            children: "Skip Tutorial"
          }
        ),
        C ? /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: v,
            className: "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50",
            disabled: r,
            children: r ? "Loading..." : "Try an Example!"
          }
        ) : /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: a,
            className: "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors",
            children: "Next"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-center mt-4 text-sm text-gray-500", children: [
        "Step ",
        s + 1,
        " of ",
        c.length
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: d,
          className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100",
          title: "Close tutorial",
          children: "×"
        }
      )
    ] }),
    O.highlight && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      O.highlight === "examples" && /* @__PURE__ */ e.jsx("div", { className: "fixed top-0 right-0 z-[10000] pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 right-2 w-32 h-12 border-4 border-yellow-400 rounded-lg animate-pulse" }) }),
      O.highlight === "settings" && /* @__PURE__ */ e.jsx("div", { className: "fixed bottom-4 left-4 z-[10000] pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "w-12 h-12 border-4 border-yellow-400 rounded-full animate-pulse" }) }),
      O.highlight === "toolbar" && /* @__PURE__ */ e.jsx("div", { className: "fixed top-0 left-0 z-[10000] pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 left-32 w-24 h-12 border-4 border-yellow-400 rounded-lg animate-pulse" }) })
    ] })
  ] });
}
function gs() {
  const { t: n } = Ze(), [t, s] = te(!1), i = Re(null);
  me(() => {
    function c(a) {
      i.current && !i.current.contains(a.target) && s(!1);
    }
    if (t)
      return document.addEventListener("mousedown", c, !0), document.addEventListener("click", c, !0), document.body.style.overflow = "hidden", () => {
        document.removeEventListener("mousedown", c, !0), document.removeEventListener("click", c, !0), document.body.style.overflow = "unset";
      };
  }, [t]), me(() => {
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
        title: n("info.about"),
        children: /* @__PURE__ */ e.jsx("span", { className: "text-sm font-bold text-blue-600", children: "ℹ️" })
      }
    ),
    t && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: i,
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
              /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold text-gray-900", children: n("info.about") })
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
              /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: n("info.subtitle") }),
              /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 leading-relaxed", children: n("info.description") })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h4", { className: "text-md font-semibold text-gray-800 mb-2", children: n("info.keyFeatures") }),
              /* @__PURE__ */ e.jsxs("ul", { className: "text-gray-600 space-y-1 text-sm", children: [
                /* @__PURE__ */ e.jsxs("li", { children: [
                  "• ",
                  n("info.features.interactive")
                ] }),
                /* @__PURE__ */ e.jsxs("li", { children: [
                  "• ",
                  n("info.features.realtime")
                ] }),
                /* @__PURE__ */ e.jsxs("li", { children: [
                  "• ",
                  n("info.features.educational")
                ] }),
                /* @__PURE__ */ e.jsxs("li", { children: [
                  "• ",
                  n("info.features.touch")
                ] }),
                /* @__PURE__ */ e.jsxs("li", { children: [
                  "• ",
                  n("info.features.progressive")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: [
              /* @__PURE__ */ e.jsxs("h4", { className: "text-md font-semibold text-green-800 mb-2", children: [
                "🌟 ",
                n("info.opensource")
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-green-700 text-sm mb-3", children: n("info.opensource.description") }),
              /* @__PURE__ */ e.jsxs(
                "a",
                {
                  href: "https://github.com/getgrix/grix",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium text-sm underline",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { children: "📁" }),
                    n("info.viewGithub")
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h4", { className: "text-md font-semibold text-gray-800 mb-2", children: n("info.contact") }),
              /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 text-sm mb-2", children: n("info.contact.description") }),
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
            /* @__PURE__ */ e.jsx("div", { className: "pt-4 border-t border-gray-200", children: /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 text-center", children: n("info.madeWith") }) })
          ] })
        ]
      }
    ) })
  ] });
}
function ps({ onClearBoard: n, onExportImage: t, onImportState: s, isOpen: i, onToggle: r }) {
  const [o, c] = te(!1), a = i !== void 0 ? i : o, [d, h] = te(!1), [v, O] = te(null), C = Re(null), m = Re(null), { objects: z, clearObjects: X, clearSelection: l } = Te(), { resetToDefaults: f } = Le(), p = () => {
    r ? r() : c(!o);
  };
  me(() => {
    function J(u) {
      C.current && !C.current.contains(u.target) && (r ? r() : c(!1), h(!1));
    }
    if (a)
      return document.addEventListener("mousedown", J, !0), document.addEventListener("click", J, !0), document.addEventListener("touchstart", J, !0), document.addEventListener("touchend", J, !0), () => {
        document.removeEventListener("mousedown", J, !0), document.removeEventListener("click", J, !0), document.removeEventListener("touchstart", J, !0), document.removeEventListener("touchend", J, !0);
      };
  }, [a, r]), me(() => {
    if (a) {
      const J = ae.getStorageInfo();
      O(J);
    }
  }, [a]);
  const _ = () => {
    r ? r() : c(!1);
  }, k = () => {
    X(), l(), f(), ae.clearState(), h(!1), _();
  }, b = () => {
    const J = ae.exportState();
    if (J) {
      const u = new Blob([J], { type: "application/json" }), j = URL.createObjectURL(u), ne = document.createElement("a");
      ne.href = j, ne.download = `grix-session-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.appendChild(ne), ne.click(), document.body.removeChild(ne), URL.revokeObjectURL(j);
    }
    _();
  }, Y = () => {
    var J;
    (J = m.current) == null || J.click();
  }, $ = async (J) => {
    var j;
    const u = (j = J.target.files) == null ? void 0 : j[0];
    if (u) {
      try {
        const ne = await u.text();
        await ae.importState(ne) ? window.location.reload() : alert("Failed to import state. Please check the file format.");
      } catch {
        alert("Failed to read file. Please select a valid Grix export file.");
      }
      m.current && (m.current.value = ""), _();
    }
  }, A = () => {
    t == null || t(), _();
  }, H = (J) => {
    if (J === 0) return "0 B";
    const u = 1024, j = ["B", "KB", "MB", "GB"], ne = Math.floor(Math.log(J) / Math.log(u));
    return parseFloat((J / Math.pow(u, ne)).toFixed(1)) + " " + j[ne];
  }, R = (J) => new Date(J).toLocaleString();
  return d ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: C,
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
              onClick: k,
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
        onClick: p,
        className: "w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl flex items-center justify-center",
        title: "Actions & Tools",
        children: /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "⚡" })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: m,
        type: "file",
        accept: ".json",
        onChange: $,
        className: "hidden"
      }
    ),
    a && /* @__PURE__ */ e.jsxs("div", { ref: C, className: "absolute bottom-full left-0 mb-2 z-50 bg-white border border-gray-200 rounded-lg shadow-xl min-w-64 max-w-80", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 border-b border-gray-100", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-semibold text-gray-800", children: "Actions & Tools" }),
        /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
          z.length,
          " shape",
          z.length !== 1 ? "s" : "",
          " on canvas"
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-2", children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => h(!0),
            className: "w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600",
            disabled: z.length === 0,
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
            onClick: b,
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
            onClick: Y,
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
            onClick: A,
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
        v && /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-xs font-medium text-gray-700 mb-2", children: "Storage Status" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Session size:" }),
              /* @__PURE__ */ e.jsx("span", { children: H(v.stateSize) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Total used:" }),
              /* @__PURE__ */ e.jsx("span", { children: H(v.usedSpace) })
            ] }),
            v.lastSaved && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Last saved:" }),
              /* @__PURE__ */ e.jsx("span", { children: R(v.lastSaved) })
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
function ms({ isVisible: n, onDismiss: t }) {
  const { t: s } = Ze(), [i, r] = te(!1);
  me(() => {
    n && r(!0);
  }, [n]);
  const o = (c = !1) => {
    if (c) {
      const a = ae.loadState() || {}, d = {
        ...a,
        tutorialSettings: {
          ...a.tutorialSettings,
          lineToolTutorialSeen: !0
        }
      };
      ae.saveState(d), ae.scheduleSave();
    }
    r(!1), setTimeout(() => t(), 300);
  };
  return n ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `bg-white rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 transform transition-all duration-300 ${i ? "scale-100 opacity-100" : "scale-95 opacity-0"}`,
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
function fs({ isVisible: n, onDismiss: t }) {
  const { t: s } = Ze(), [i, r] = te(!1);
  me(() => {
    n && r(!0);
  }, [n]);
  const o = (c = !1) => {
    if (c) {
      const a = ae.loadState() || {}, d = {
        ...a,
        tutorialSettings: {
          ...a.tutorialSettings,
          homeButtonTutorialSeen: !0
        }
      };
      ae.saveState(d), ae.scheduleSave();
    }
    r(!1), setTimeout(() => t(), 300);
  };
  return n ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `bg-white rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 transform transition-all duration-300 ${i ? "scale-100 opacity-100" : "scale-95 opacity-0"}`,
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
function ys({ onDismiss: n }) {
  const { worldToScreen: t, objects: s } = Te(), { t: i } = Ze(), [r, o] = te(!0), c = s.find((C) => C.id.startsWith("ray_default_")), a = (c == null ? void 0 : c.properties.endPoint) || { x: 3, y: 9 }, d = { x: a.x, y: a.y - 3 };
  me(() => {
    const C = setTimeout(() => {
      h();
    }, 3e4), m = () => {
      clearTimeout(C), setTimeout(() => h(), 500);
    };
    return document.addEventListener("mousedown", m), document.addEventListener("touchstart", m), () => {
      clearTimeout(C), document.removeEventListener("mousedown", m), document.removeEventListener("touchstart", m);
    };
  }, []);
  const h = () => {
    o(!1), setTimeout(() => n(), 300);
  };
  if (!r) return null;
  const v = t(d), O = window.innerWidth < 768;
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
          left: v.x - 16,
          top: v.y - 16
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
        className: `fixed z-50 transition-all duration-300 ease-out ${r ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${O ? "bottom-20 left-4 right-4" : "bottom-8 left-1/2 transform -translate-x-1/2"}`,
        style: O ? {} : { width: "400px", maxWidth: "90vw" },
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
              /* @__PURE__ */ e.jsx("div", { className: "font-semibold text-gray-800 text-sm", children: i("endpoint.tooltip.title") })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "text-gray-600 text-sm leading-relaxed", children: i("endpoint.tooltip.message") })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 pointer-events-none" })
        ] })
      }
    )
  ] }) : null;
}
const Dt = (n, t) => {
  const s = t * Math.PI / 180, i = Math.cos(s), r = Math.sin(s);
  return {
    x: n.x * i - n.y * r,
    y: n.x * r + n.y * i
  };
}, bs = (n, t) => ({
  x: n.x * t,
  y: n.y * t
}), Rt = (n, t) => {
  switch (t) {
    case "x":
      return { x: n.x, y: -n.y };
    case "y":
      return { x: -n.x, y: n.y };
    case "origin":
      return { x: -n.x, y: -n.y };
    default:
      return n;
  }
}, vs = vt((n, t) => ({
  isTransforming: !1,
  activeTransform: null,
  selectedObject: null,
  rotateObject: (s, i, r) => {
    if (!r) {
      console.log(`No canvas API provided for rotation of ${s}`);
      return;
    }
    const o = r.getObject(s);
    if (o) {
      if (o.type === "ray") {
        if (Math.abs(o.properties.startPoint.x) < 1e-3 && Math.abs(o.properties.startPoint.y) < 1e-3) {
          const a = Dt(o.properties.endPoint, i);
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
        }, h = Dt(d, i);
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
  scaleObject: (s, i, r) => {
    if (!r) {
      console.log(`No canvas API provided for scaling of ${s}`);
      return;
    }
    const o = r.getObject(s);
    if (o)
      if (o.type === "ray") {
        if (Math.abs(o.properties.startPoint.x) < 1e-3 && Math.abs(o.properties.startPoint.y) < 1e-3) {
          const a = bs(o.properties.endPoint, i);
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
          width: o.properties.width * i,
          height: o.properties.height * i,
          area: o.properties.width * i * o.properties.height * i
        }
      });
  },
  reflectObject: (s, i, r) => {
    if (!r) {
      console.log(`No canvas API provided for reflection of ${s}`);
      return;
    }
    const o = r.getObject(s);
    if (o) {
      if (o.type === "ray") {
        if (Math.abs(o.properties.startPoint.x) < 1e-3 && Math.abs(o.properties.startPoint.y) < 1e-3) {
          const a = Rt(o.properties.endPoint, i);
          r.updateObject(s, {
            properties: {
              ...o.properties,
              endPoint: a
            }
          });
        }
      } else if (o.type === "rectangle") {
        const c = Rt({ x: o.properties.x, y: o.properties.y }, i);
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
  rotate90: (s, i) => {
    t().rotateObject(s, 90, i);
  },
  rotate180: (s, i) => {
    t().rotateObject(s, 180, i);
  },
  rotate270: (s, i) => {
    t().rotateObject(s, 270, i);
  },
  setActiveTransform: (s) => {
    n({
      activeTransform: s,
      isTransforming: s !== null
    });
  },
  setSelectedObject: (s) => {
    n({ selectedObject: s });
  },
  clearTransform: () => {
    n({
      isTransforming: !1,
      activeTransform: null,
      selectedObject: null
    });
  }
})), Bt = Lt(void 0);
function js({ children: n }) {
  const [t, s] = te(null);
  return /* @__PURE__ */ e.jsx(Bt.Provider, { value: { openMenu: t, setOpenMenu: s }, children: n });
}
function jt() {
  const n = Wt(Bt);
  if (!n)
    throw new Error("useMenuState must be used within a MenuStateProvider");
  return n;
}
function ws({
  width: n = 800,
  height: t = 600,
  className: s = "",
  onObjectInteraction: i
}) {
  const r = Re(null), { openMenu: o, setOpenMenu: c } = jt(), {
    viewport: a,
    setViewport: d,
    objects: h,
    selectedObjects: v,
    snapToGrid: O,
    gridDensity: C,
    canvasSize: m,
    setCanvasSize: z,
    removeObject: X,
    clearSelection: l,
    selectObject: f,
    screenToWorld: p,
    worldToScreen: _,
    getObject: k,
    updateObject: b
  } = Te(), Y = ts(), { activeTool: $, setActiveTool: A, eventBus: H } = ft(), { rotate90: R, rotate180: J, rotate270: u, scaleObject: j, setSelectedObject: ne } = vs(), { zoomSensitivity: ue } = Le(), [Oe, ge] = te(!1);
  me(() => {
    const g = () => {
      const I = localStorage.getItem("grix-show-endpoint-tooltip"), D = localStorage.getItem("grix-tutorial-completed");
      return console.log("Endpoint tooltip check:", {
        shouldShow: I,
        tutorialCompleted: D,
        willShow: I === "true" && D === "true"
      }), I === "true" && D === "true" ? (console.log("Showing endpoint tooltip in 1 second..."), setTimeout(() => {
        ge(!0);
      }, 1e3)) : null;
    }, N = g(), F = (I) => {
      if (I.key === "grix-tutorial-completed") {
        const D = g();
        return N && clearTimeout(N), D;
      }
    };
    return window.addEventListener("storage", F), () => {
      N && clearTimeout(N), window.removeEventListener("storage", F);
    };
  }, []), me(() => {
    z({ width: n, height: t });
  }, [n, t, z]);
  const L = Re({
    isPanning: !1,
    startPoint: { x: 0, y: 0 },
    startCenter: { x: 0, y: 0 }
  }), ce = Re({
    isDown: !1,
    startPoint: { x: 0, y: 0 },
    hasMoved: !1,
    dragThreshold: 5,
    // pixels
    pendingSelection: null
  }), [y, V] = te(null), [de, fe] = te(!1), [ze, Z] = te(!1), [ke, Be] = te(!1), [oe, re] = te(!1), [ye, be] = te(!1), ve = Re(0), Ge = Re({
    worldPoint: { x: 0, y: 0 },
    timestamp: 0,
    overlappingObjects: [],
    currentIndex: 0
  }), pe = Ce((g, N = 0.5) => {
    const F = [];
    for (const I of h) {
      let D = 0, se = 1 / 0, Q = !1;
      switch (I.type) {
        case "ray":
          const P = dt(
            g,
            I.properties.startPoint,
            I.properties.endPoint
          );
          P <= N && (D = 100, se = P, Q = !0);
          break;
        case "rectangle":
          const { x: B, y: q, width: U, height: K } = I.properties, le = [
            { start: { x: B, y: q }, end: { x: B + U, y: q } },
            // bottom
            { start: { x: B + U, y: q }, end: { x: B + U, y: q + K } },
            // right
            { start: { x: B + U, y: q + K }, end: { x: B, y: q + K } },
            // top
            { start: { x: B, y: q + K }, end: { x: B, y: q } }
            // left
          ];
          let xe = 1 / 0;
          for (const Fe of le) {
            const De = dt(g, Fe.start, Fe.end);
            xe = Math.min(xe, De);
          }
          xe <= N ? (D = 100, se = xe, Q = !0) : g.x >= B && g.x <= B + U && g.y >= q && g.y <= q + K && (D = 50, se = 0, Q = !0);
          break;
        case "circle":
          const { center: Me, radius: Ee } = I.properties, Ne = Math.sqrt(
            (g.x - Me.x) ** 2 + (g.y - Me.y) ** 2
          ), Ie = At(g, Me, Ee);
          Ie <= N ? (D = 100, se = Ie, Q = !0) : Ne <= Ee && (D = 50, se = Ee - Ne, Q = !0);
          break;
        case "triangle":
          const { vertices: We } = I.properties, Se = [
            [We[0], We[1]],
            [We[1], We[2]],
            [We[2], We[0]]
          ];
          let je = 1 / 0;
          for (const [Fe, De] of Se) {
            const _e = dt(g, Fe, De);
            je = Math.min(je, _e);
          }
          je <= N ? (D = 100, se = je, Q = !0) : Nt(g, We) && (D = 50, se = 0, Q = !0);
          break;
        case "function":
          const He = I.properties.points;
          if (He && He.length > 1) {
            let Fe = 1 / 0;
            for (let De = 0; De < He.length - 1; De++) {
              const _e = He[De], Ve = He[De + 1], Xe = dt(g, _e, Ve);
              Fe = Math.min(Fe, Xe);
            }
            Fe <= N && (D = 100, se = Fe, Q = !0);
          }
          break;
      }
      Q && F.push({ object: I, priority: D, distance: se });
    }
    return F.sort((I, D) => I.priority !== D.priority ? D.priority - I.priority : I.distance !== D.distance ? I.distance - D.distance : (D.object.zIndex || 0) - (I.object.zIndex || 0)), F.map((I) => I.object);
  }, [h, dt, Nt, At]), he = Ce((g) => {
    const N = { x: g.x, y: g.y };
    ce.current = {
      isDown: !0,
      startPoint: N,
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    };
    const F = p(N), D = pe(F, 0.5);
    let se = !1, Q = null;
    if (D.length > 0) {
      se = !0;
      const P = Date.now(), B = Ge.current, q = Math.abs(F.x - B.worldPoint.x) < 0.1 && Math.abs(F.y - B.worldPoint.y) < 0.1, U = P - B.timestamp < 500;
      if (q && U && B.overlappingObjects.length > 1) {
        const K = (B.currentIndex + 1) % B.overlappingObjects.length, le = B.overlappingObjects[K];
        Q = D.find((xe) => xe.id === le) || D[0], Ge.current = {
          worldPoint: F,
          timestamp: P,
          overlappingObjects: B.overlappingObjects,
          currentIndex: K
        };
      } else
        Q = D[0], Ge.current = {
          worldPoint: F,
          timestamp: P,
          overlappingObjects: D.map((K) => K.id),
          currentIndex: 0
        };
      ce.current.pendingSelection = {
        objectId: Q.id,
        type: Q.type
      }, f(Q.id);
    } else
      Ge.current = {
        worldPoint: { x: 0, y: 0 },
        timestamp: 0,
        overlappingObjects: [],
        currentIndex: 0
      };
    (!se && !$ || !se && $) && l(), ($ || se) && Y.handlePointerDown(g), !se && !$ && (g.type === "touch" || g.type === "mouse") && (L.current = {
      isPanning: !0,
      startPoint: { x: g.x, y: g.y },
      startCenter: { ...a.center }
    });
  }, [a.center, Y, $, A, h, p, _, a.zoom]), Pe = Ce((g) => {
    const N = { x: g.x, y: g.y };
    if (g.type === "mouse" && $ ? V(N) : $ || V(null), ce.current.isDown && !ce.current.hasMoved) {
      const F = Math.abs(g.x - ce.current.startPoint.x), I = Math.abs(g.y - ce.current.startPoint.y);
      Math.sqrt(F * F + I * I) >= ce.current.dragThreshold && (ce.current.hasMoved = !0, Be(!0), ce.current.pendingSelection = null);
    }
    if (Y.handlePointerMove(g), !$ && L.current.isPanning) {
      const F = (g.x - L.current.startPoint.x) / a.zoom, I = (g.y - L.current.startPoint.y) / a.zoom;
      d({
        center: {
          x: L.current.startCenter.x - F,
          y: L.current.startCenter.y + I
          // Flip Y for mathematical coordinates
        }
      });
    }
  }, [a.zoom, d, Y, $, V]), Ye = Ce((g) => {
    Be(!1), ce.current = {
      isDown: !1,
      startPoint: { x: 0, y: 0 },
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    }, Y.handlePointerUp(g), L.current.isPanning = !1;
  }, [Y, A]), wt = Ce((g) => {
    switch (g.type) {
      case "pinch":
        if (g.scale && g.center) {
          const N = h.length, F = () => {
            const K = N > 50 ? 100 : N > 20 ? 200 : 500;
            return a.zoom < 1 ? { min: 0.1, max: Math.min(50, K) } : a.zoom > 100 ? { min: 5, max: K } : { min: 0.1, max: K };
          }, { min: I, max: D } = F();
          let se = 1;
          if (g.touches && g.touches > 1) {
            const U = /iPad|iPhone|iPod/.test(navigator.userAgent), K = (() => {
              switch (ue) {
                case "low":
                  return U ? 0.15 : 0.25;
                case "medium":
                  return U ? 0.25 : 0.35;
                case "high":
                  return U ? 0.4 : 0.5;
                default:
                  return U ? 0.25 : 0.35;
              }
            })(), le = a.zoom < 0.5 || a.zoom > 50 ? 0.7 : 1, Ee = Math.abs(g.scale - 1) > (ue === "high" ? 0.5 : 0.3) ? 0.6 : 1;
            se = K * le * Ee;
          }
          const Q = g.scale - 1, P = ue === "high" ? 0.01 : ue === "low" ? 0.03 : 0.02;
          if (Math.abs(Q) < P) return;
          const B = 1 + Q * se;
          let q = a.zoom * B;
          if (q > D * 0.9) {
            const U = (q - D * 0.9) / (D * 0.1);
            q = D * 0.9 + D * 0.1 * (1 - Math.exp(-U));
          }
          if (q < I * 1.1) {
            const U = (I * 1.1 - q) / (I * 0.1);
            q = I * 1.1 - I * 0.1 * (1 - Math.exp(-U));
          }
          if (q = Math.max(I, Math.min(D, q)), Math.abs(q - a.zoom) > 1e-3) {
            const U = q / a.zoom, K = p(g.center), le = {
              x: K.x + (a.center.x - K.x) / U,
              y: K.y + (a.center.y - K.y) / U
            };
            d({
              zoom: q,
              center: le
            });
          }
        }
        break;
    }
  }, [a.zoom, a.center, d, h.length, p, ue]), { capabilities: rt, touchTargetSize: Ue } = ss(
    r,
    {
      onPointerDown: he,
      onPointerMove: Pe,
      onPointerUp: Ye,
      onGesture: wt
    },
    {
      enableGestures: !0,
      preventScrolling: !0
    }
  );
  me(() => {
    const g = (F) => {
      switch (F.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
          if (v.length > 0) {
            F.preventDefault();
            const I = F.shiftKey ? 0.1 : 1;
            let D = 0, se = 0;
            switch (F.key) {
              case "ArrowUp":
                se = I;
                break;
              case "ArrowDown":
                se = -I;
                break;
              case "ArrowLeft":
                D = -I;
                break;
              case "ArrowRight":
                D = I;
                break;
            }
            v.forEach((Q) => {
              const P = k(Q);
              if (P)
                switch (P.type) {
                  case "ray":
                    b(Q, {
                      properties: {
                        ...P.properties,
                        startPoint: {
                          x: P.properties.startPoint.x + D,
                          y: P.properties.startPoint.y + se
                        },
                        endPoint: {
                          x: P.properties.endPoint.x + D,
                          y: P.properties.endPoint.y + se
                        }
                      }
                    });
                    break;
                  case "rectangle":
                    b(Q, {
                      properties: {
                        ...P.properties,
                        x: P.properties.x + D,
                        y: P.properties.y + se
                      }
                    });
                    break;
                  case "circle":
                    b(Q, {
                      properties: {
                        ...P.properties,
                        center: {
                          x: P.properties.center.x + D,
                          y: P.properties.center.y + se
                        }
                      }
                    });
                    break;
                  case "triangle":
                    const B = P.properties.vertices.map((K) => ({
                      x: K.x + D,
                      y: K.y + se
                    }));
                    b(Q, {
                      properties: {
                        ...P.properties,
                        vertices: B
                      }
                    });
                    break;
                  case "function":
                    const q = {
                      min: P.properties.domain.min + D,
                      max: P.properties.domain.max + D
                    }, U = P.properties.points.map((K) => ({
                      x: K.x + D,
                      y: K.y + se
                    }));
                    b(Q, {
                      properties: {
                        ...P.properties,
                        domain: q,
                        points: U
                      }
                    });
                    break;
                }
            });
          }
          break;
        case "Escape":
          $ && (H.emit("tool:cancel", { toolId: $ }), A(null));
          break;
        case "Delete":
        case "Backspace":
          v.length > 0 && (console.log("Deleting objects:", v), v.forEach((I) => {
            H.emit("object:removed", { objectId: I }), X(I);
          }), l(), A(null));
          break;
        case "r":
        case "R":
          if (v.length > 0 && !F.ctrlKey) {
            F.preventDefault();
            const I = { getObject: k, updateObject: b };
            v.forEach((D) => {
              F.shiftKey ? u(D, I) : R(D, I);
            });
          }
          break;
        case "f":
        case "F":
          if (v.length > 0 && !F.ctrlKey) {
            F.preventDefault();
            const I = { getObject: k, updateObject: b };
            v.forEach((D) => {
              J(D, I);
            });
          }
          break;
        case "=":
        case "+":
          if (v.length > 0 && !F.ctrlKey) {
            F.preventDefault();
            const I = { getObject: k, updateObject: b };
            v.forEach((D) => {
              j(D, 2, I);
            });
          }
          break;
        case "-":
        case "_":
          if (v.length > 0 && !F.ctrlKey) {
            F.preventDefault();
            const I = { getObject: k, updateObject: b };
            v.forEach((D) => {
              j(D, 0.5, I);
            });
          }
          break;
      }
    }, N = (F) => {
      l(), A(null);
    };
    return document.addEventListener("keydown", g), H.on("tool:creation-complete", N), () => {
      document.removeEventListener("keydown", g), H.off("tool:creation-complete", N);
    };
  }, [$, A, H, v, X, l]), me(() => {
    v.length === 1 && !ke && !ze ? fe(!0) : (v.length !== 1 || ke) && (fe(!1), Z(!1));
  }, [v, ke, ze]), me(() => {
    o && de && fe(!1);
  }, [o, de]), me(() => {
    var g;
    if ($ === "ray-tool") {
      const N = ae.loadState();
      if (!((g = N == null ? void 0 : N.tutorialSettings) == null ? void 0 : g.lineToolTutorialSeen)) {
        const I = setTimeout(() => {
          re(!0);
        }, 300);
        return () => clearTimeout(I);
      }
    }
  }, [$]);
  const ht = Ce(() => {
    fe(!1), Z(!0);
  }, []), M = Ce(() => {
    v.length > 0 && (v.forEach((g) => {
      H.emit("object:removed", { objectId: g }), X(g);
    }), l());
  }, [v, X, l, H]), x = Ce((g, N) => {
    b(g, N);
  }, [b]), S = Ce(() => {
    re(!1);
  }, []), G = Ce(() => {
    be(!1);
  }, []), w = Ce(() => {
    const g = Math.min(1e3, a.zoom * 1.4);
    d({ zoom: g });
  }, [a.zoom, d]), E = Ce(() => {
    const g = Math.max(0.01, a.zoom / 1.4);
    d({ zoom: g });
  }, [a.zoom, d]), W = Ce(() => {
    d({ zoom: 20, center: { x: 0, y: 0 } });
  }, [d]), T = Ce(() => {
    var g;
    if (d({ center: { x: 0, y: 0 } }), ve.current += 1, ve.current === 1) {
      const N = ae.loadState();
      ((g = N == null ? void 0 : N.tutorialSettings) == null ? void 0 : g.homeButtonTutorialSeen) || setTimeout(() => {
        be(!0);
      }, 300);
    }
  }, [d]);
  return me(() => {
    const g = (F) => {
      F.preventDefault();
      const D = Te.getState().viewport;
      if (F.ctrlKey || F.metaKey) {
        const se = F.deltaY > 0 ? 0.9 : 1.1, Q = Math.max(0.01, Math.min(1e3, D.zoom * se));
        d({ zoom: Q });
      } else {
        const Q = F.shiftKey ? F.deltaY : 0, P = F.shiftKey ? 0 : F.deltaY, B = Q * 1 / D.zoom, q = P * 1 / D.zoom;
        d({
          center: {
            x: D.center.x + B,
            y: D.center.y - q
            // subtract because scroll down should move view down
          }
        });
      }
    }, N = r.current;
    if (N)
      return N.addEventListener("wheel", g, { passive: !1 }), () => {
        N.removeEventListener("wheel", g);
      };
  }, [d]), /* @__PURE__ */ e.jsxs("div", { className: `relative ${s}`, style: { width: n, height: t }, children: [
    /* @__PURE__ */ e.jsxs(
      "svg",
      {
        ref: r,
        width: n,
        height: t,
        className: "absolute inset-0 bg-white",
        style: { touchAction: "none" },
        children: [
          /* @__PURE__ */ e.jsx(
            rs,
            {
              viewport: a,
              canvasSize: { width: n, height: t },
              worldToScreen: _,
              objects: h
            }
          ),
          /* @__PURE__ */ e.jsx(
            ls,
            {
              objects: h,
              viewport: a,
              touchTargetSize: Ue,
              worldToScreen: _,
              selectedObjects: v,
              canvasSize: { width: n, height: t }
            }
          ),
          $ && y && !ce.current.isDown && /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: y.x,
              cy: y.y,
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
        capabilities: rt,
        viewport: a,
        activeTool: $,
        selectedObjectsCount: v.length
      }
    ),
    /* @__PURE__ */ e.jsx(
      cs,
      {
        viewport: a,
        onZoomIn: w,
        onZoomOut: E,
        onZoomReset: W,
        onCenterOnly: T
      }
    ),
    de && v.length === 1 && /* @__PURE__ */ e.jsx(
      hs,
      {
        selectedObject: h.find((g) => g.id === v[0]) || null,
        onDelete: M,
        onUpdate: x,
        onClose: ht
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
        isVisible: oe,
        onDismiss: S
      }
    ),
    /* @__PURE__ */ e.jsx(
      fs,
      {
        isVisible: ye,
        onDismiss: G
      }
    ),
    Oe && /* @__PURE__ */ e.jsx(
      ys,
      {
        onDismiss: () => {
          ge(!1), localStorage.removeItem("grix-show-endpoint-tooltip");
        }
      }
    )
  ] });
}
function Ss() {
  const { t: n } = Ze(), { openMenu: t, setOpenMenu: s } = jt(), i = t === "examples", [r, o] = te([]), [c, a] = te([]), [d, h] = te("all"), [v, O] = te(!1), [C, m] = te(null), z = Re(null);
  me(() => {
    function b(Y) {
      z.current && !z.current.contains(Y.target) && s(null);
    }
    if (i)
      return document.addEventListener("mousedown", b, !0), document.addEventListener("click", b, !0), () => {
        document.removeEventListener("mousedown", b, !0), document.removeEventListener("click", b, !0);
      };
  }, [i, s]), me(() => {
    (async () => {
      try {
        O(!0), m(null);
        const [Y, $] = await Promise.all([
          nt.getExamples(),
          nt.getCategories()
        ]);
        o(Y), a($);
      } catch (Y) {
        console.error("Failed to load examples:", Y), m("Failed to load examples");
      } finally {
        O(!1);
      }
    })();
  }, []);
  const X = async (b) => {
    try {
      O(!0), m(null), await nt.applyExample(b.id), s(null);
    } catch (Y) {
      console.error("Failed to apply example:", Y), m(`Failed to load "${b.title}"`);
    } finally {
      O(!1);
    }
  }, l = async () => {
    try {
      O(!0), m(null), await nt.clearCanvas(), s(null);
    } catch (b) {
      console.error("Failed to clear canvas:", b), m("Failed to clear canvas");
    } finally {
      O(!1);
    }
  }, f = d === "all" ? r : r.filter((b) => b.category === d), p = (b) => {
    switch (b) {
      case "beginner":
        return "text-green-600 bg-green-50";
      case "intermediate":
        return "text-yellow-600 bg-yellow-50";
      case "advanced":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  }, _ = (b) => {
    switch (b) {
      case "beginner":
        return "●";
      case "intermediate":
        return "●●";
      case "advanced":
        return "●●●";
      default:
        return "?";
    }
  }, k = (b) => {
    const Y = {
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
    }, $ = b.id.toLowerCase().replace(/[^a-z0-9]/g, ""), A = b.name.toLowerCase().replace(/[^a-z0-9]/g, ""), H = Y[$] || Y[A];
    if (H) {
      const R = n(H);
      return R === H ? b.name : R;
    }
    return b.name;
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: z, className: "relative z-50", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => s(t === "examples" ? null : "examples"),
        className: "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100",
        title: n("toolbar.examples"),
        disabled: v,
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "📚" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium text-gray-700", children: n("toolbar.examples") }),
          /* @__PURE__ */ e.jsx("span", { className: `text-xs transition-transform ${i ? "rotate-180" : ""}`, children: "▼" })
        ]
      }
    ),
    i && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[32rem] overflow-hidden", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-semibold text-gray-800", children: n("tutorial.examples.title") }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: l,
              className: "text-xs text-red-600 hover:text-red-800 font-medium",
              disabled: v,
              children: n("actions.clearBoard")
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-2", children: /* @__PURE__ */ e.jsxs(
          "select",
          {
            value: d,
            onChange: (b) => h(b.target.value),
            className: "w-full text-xs border border-gray-200 rounded px-2 py-1 bg-white",
            disabled: v,
            children: [
              /* @__PURE__ */ e.jsx("option", { value: "all", children: (() => {
                const b = n("examples.allCategories");
                return b === "examples.allCategories" ? "All Categories" : b;
              })() }),
              c.map((b) => /* @__PURE__ */ e.jsx("option", { value: b.id, children: k(b) }, b.id))
            ]
          }
        ) })
      ] }),
      C && /* @__PURE__ */ e.jsx("div", { className: "px-4 py-2 bg-red-50 border-b border-red-100", children: /* @__PURE__ */ e.jsx("p", { className: "text-xs text-red-600", children: C }) }),
      /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto max-h-80 examples-scrollable", children: v ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500", children: n("tutorial.loading") }) }) : f.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500", children: n("examples.noExamples") }) }) : /* @__PURE__ */ e.jsx("div", { className: "p-2 space-y-1", children: f.map((b) => /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => X(b),
          className: "w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors group",
          disabled: v,
          children: /* @__PURE__ */ e.jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("h4", { className: "text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate", children: b.title }),
              /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: `text-xs px-1.5 py-0.5 rounded font-medium ${p(b.difficulty)}`,
                  title: `${b.difficulty} difficulty`,
                  children: _(b.difficulty)
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 mt-1 line-clamp-2", children: b.description }),
            c.find((Y) => Y.id === b.category) && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-400", children: (() => {
                const Y = c.find(($) => $.id === b.category);
                return Y ? k(Y) : "";
              })() }),
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-300", children: "•" }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-400", children: [
                b.objects.length,
                " object",
                b.objects.length !== 1 ? "s" : ""
              ] })
            ] })
          ] }) })
        },
        b.id
      )) }) }),
      /* @__PURE__ */ e.jsx("div", { className: "sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg", children: /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Click an example to explore mathematical concepts" }) })
    ] })
  ] });
}
function Cs({ className: n = "" }) {
  const { activeTool: t, setActiveTool: s } = ft(), { openMenu: i, setOpenMenu: r } = jt(), { t: o } = Ze(), c = i === "build", a = Re(null), d = [
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
  ], h = (m) => {
    s(m), r(null);
  }, v = () => {
    s(null), r(null);
  }, O = () => {
    r(i === "build" ? null : "build");
  }, C = d.find((m) => m.id === t);
  return me(() => {
    const m = (z) => {
      a.current && !a.current.contains(z.target) && r(null);
    };
    if (c)
      return document.addEventListener("mousedown", m, !0), document.addEventListener("touchstart", m, !0), document.addEventListener("click", m, !0), () => {
        document.removeEventListener("mousedown", m, !0), document.removeEventListener("touchstart", m, !0), document.removeEventListener("click", m, !0);
      };
  }, [c, r]), /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-2 p-2 bg-white border-b border-gray-200 ${n}`, children: [
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
          onClick: O,
          className: `
            flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
            ${t ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}
          `,
          children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: "🏗️" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: C ? C.name : o("toolbar.build") }),
            /* @__PURE__ */ e.jsx("span", { className: `text-xs transition-transform ${c ? "rotate-180" : ""}`, children: "▼" })
          ]
        }
      ),
      c && /* @__PURE__ */ e.jsx("div", { className: "build-dropdown absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48 max-h-80 overflow-y-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "build-dropdown-scrollable", children: [
        d.map((m) => /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => h(m.id),
            className: `
                    w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg transition-colors
                    ${t === m.id ? "bg-blue-50 text-blue-700" : "text-gray-700"}
                  `,
            title: m.description,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: m.icon }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium", children: m.name }),
                /* @__PURE__ */ e.jsx("div", { className: "text-xs text-gray-500", children: m.description })
              ] })
            ]
          },
          m.id
        )),
        t && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("div", { className: "border-t border-gray-100" }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: v,
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
      const i = this.props.fallback;
      return i ? /* @__PURE__ */ e.jsx(i, { error: this.state.error }) : /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center h-full bg-red-50 text-red-700 p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
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
function Es({ children: n }) {
  const [t, s] = te(!1), [i, r] = te(navigator.onLine), [o, c] = te(null), { loadState: a, saveState: d } = Te(), h = Le();
  me(() => {
    "serviceWorker" in navigator && v(), O(), C(), m(), z(), s(!0);
  }, []);
  const v = async () => {
    try {
      const f = await navigator.serviceWorker.register("/sw.js", {
        scope: "/"
      });
      console.log("🎯 Grix PWA: Service Worker registered successfully:", f.scope), f.addEventListener("updatefound", () => {
        const p = f.installing;
        p && p.addEventListener("statechange", () => {
          p.state === "installed" && navigator.serviceWorker.controller && (console.log("🔄 Grix PWA: New version available"), X());
        });
      });
    } catch (f) {
      console.error("❌ Grix PWA: Service Worker registration failed:", f);
    }
  }, O = () => {
    try {
      const f = ae.loadState();
      if (f)
        (f.objects || f.viewport) && a(), f.visualizationSettings && Object.entries(f.visualizationSettings).forEach(([p, _]) => {
          p in h && typeof h[p] == typeof _ && (h[p] = _);
        }), console.log("📂 Grix PWA: Restored saved state from previous session");
      else {
        const p = Te.getState();
        if (p.objects.length === 0) {
          const _ = {
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
          p.addObject(_), console.log("🎯 Grix PWA: Created default line (0,0) to (3,9) for first-time user"), localStorage.setItem("grix-show-endpoint-tooltip", "true");
        }
      }
    } catch (f) {
      console.error("❌ Grix PWA: Failed to load saved state:", f);
    }
  }, C = () => {
    window.addEventListener("grix:auto-save-requested", () => {
      const f = Te.getState(), p = Le.getState();
      ae.saveState({
        objects: f.objects,
        selectedObjects: f.selectedObjects,
        viewport: f.viewport,
        visualizationSettings: {
          showEquivalentFractions: p.showEquivalentFractions,
          showLengthMultiples: p.showLengthMultiples,
          showAreaRectangle: p.showAreaRectangle,
          showDivisionMultiples: p.showDivisionMultiples,
          showRiseRunTriangle: p.showRiseRunTriangle,
          showDistanceMarkers: p.showDistanceMarkers,
          showAngleArc: p.showAngleArc,
          showCoordinateProjections: p.showCoordinateProjections,
          showDivisionAnswer: p.showDivisionAnswer,
          showLatticePoints: p.showLatticePoints,
          showReferenceLineY_equals_X: p.showReferenceLineY_equals_X,
          showTangentLines: p.showTangentLines,
          showFunctionExtensions: p.showFunctionExtensions,
          showTriangleAngles: p.showTriangleAngles,
          showTriangleClassification: p.showTriangleClassification,
          showSpecialTriangles: p.showSpecialTriangles,
          showSOHCAHTOA: p.showSOHCAHTOA,
          showTrigValues: p.showTrigValues,
          showTriangleAltitudes: p.showTriangleAltitudes,
          showPythagoreanSquares: p.showPythagoreanSquares,
          fontScale: p.fontScale,
          gridScale: p.gridScale,
          snapPrecision: p.snapPrecision,
          coordinateSystem: p.coordinateSystem
        }
      });
    });
  }, m = () => {
    const f = () => {
      r(!0), console.log("🌐 Grix PWA: Back online");
    }, p = () => {
      r(!1), console.log("📱 Grix PWA: Now offline");
    };
    return window.addEventListener("online", f), window.addEventListener("offline", p), () => {
      window.removeEventListener("online", f), window.removeEventListener("offline", p);
    };
  }, z = () => {
    const f = (p) => {
      p.preventDefault(), c(p), console.log("📱 Grix PWA: Install prompt available");
    };
    return window.addEventListener("beforeinstallprompt", f), () => {
      window.removeEventListener("beforeinstallprompt", f);
    };
  }, X = () => {
    console.log("🔄 Grix PWA: New version available - refresh to update");
  }, l = async () => {
    if (o)
      try {
        const f = await o.prompt();
        console.log("📱 Grix PWA: Install prompt result:", f.outcome), c(null);
      } catch (f) {
        console.error("❌ Grix PWA: Install failed:", f);
      }
  };
  return t ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
    n,
    !i && /* @__PURE__ */ e.jsx("div", { className: "fixed top-0 left-0 right-0 bg-yellow-500 text-white text-center py-2 z-50", children: /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: "📱 You're offline - Grix continues to work with saved data" }) }),
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
            onClick: l,
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
class Ms {
  constructor() {
    ie(this, "id", "ray-tool");
    ie(this, "name", "Line Builder");
    ie(this, "context");
    ie(this, "state", {
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
      const o = Le.getState(), c = it(
        s.viewport,
        o.gridScale,
        o.snapPrecision
      );
      return this.context.math.snapToGrid(t, c);
    }
    return t;
  }
  findNearestHandle(t, s = 20) {
    this.context.canvas.screenToWorld(t);
    const i = this.context.canvas.getAllObjects();
    for (const r of i)
      if (r.type === "ray") {
        const o = r, c = this.context.canvas.worldToScreen(o.properties.startPoint), a = this.context.canvas.worldToScreen(o.properties.endPoint), d = this.context.math.distance(t, c), h = this.context.math.distance(t, a);
        if (d <= s)
          return { rayId: o.id, handle: "start" };
        if (h <= s)
          return { rayId: o.id, handle: "end" };
        const v = 8, O = a.x - c.x, C = a.y - c.y, m = Math.sqrt(O * O + C * C);
        if (m > 0) {
          const z = Math.max(0, Math.min(1, ((t.x - c.x) * O + (t.y - c.y) * C) / (m * m))), X = {
            x: c.x + z * O,
            y: c.y + z * C
          };
          if (this.context.math.distance(t, X) <= v)
            return { rayId: o.id, handle: "move" };
        }
      }
    return null;
  }
  onPointerDown(t) {
    const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.findNearestHandle(s);
    if (r) {
      const o = this.context.canvas.getObject(r.rayId), c = this.context.state.getState().selectedObjects;
      if (o && c.includes(r.rayId)) {
        this.state.currentRay = o, this.state.dragTarget = r.handle, this.state.isCreating = !1, r.handle === "move" && (this.state.dragOffset = {
          x: i.x - o.properties.startPoint.x,
          y: i.y - o.properties.startPoint.y
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
      this.state.isCreating = !0, this.state.startPoint = i;
      const a = {
        id: this.generateId(),
        type: "ray",
        properties: {
          startPoint: i,
          endPoint: { ...i },
          // Start with same point
          slope: 0,
          yIntercept: i.y
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
    const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating) {
      const r = this.context.math.slope(this.state.currentRay.properties.startPoint, i), o = i.y - r * i.x;
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: {
          ...this.state.currentRay.properties,
          endPoint: i,
          slope: r,
          yIntercept: isFinite(r) ? o : this.state.currentRay.properties.startPoint.y
        }
      });
    } else if (this.state.dragTarget) {
      const r = this.context.canvas.getObject(this.state.currentRay.id);
      if (!r) return;
      const o = { ...r.properties };
      if (this.state.dragTarget === "start")
        o.startPoint = i;
      else if (this.state.dragTarget === "end")
        o.endPoint = i;
      else if (this.state.dragTarget === "move" && this.state.dragOffset) {
        const c = i.x - this.state.dragOffset.x - r.properties.startPoint.x, a = i.y - this.state.dragOffset.y - r.properties.startPoint.y;
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
      const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.state.currentRay.properties.startPoint;
      this.context.math.distance(r, i) < 0.1 ? this.context.canvas.removeObject(this.state.currentRay.id) : (this.context.events.emit("ray:created", {
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
function ks() {
  return new Ms();
}
class Ps {
  constructor() {
    ie(this, "id", "rectangle-tool");
    ie(this, "name", "Rectangle Builder");
    ie(this, "context");
    ie(this, "state", {
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
      const o = Le.getState(), c = it(
        s.viewport,
        o.gridScale,
        o.snapPrecision
      );
      return this.context.math.snapToGrid(t, c);
    }
    return t;
  }
  findRectangleAtPoint(t) {
    const s = this.context.canvas.getAllObjects();
    for (const i of s)
      if (i.type === "rectangle") {
        const r = i, { x: o, y: c, width: a, height: d } = r.properties;
        if (t.x >= o && t.x <= o + a && t.y >= c && t.y <= c + d)
          return r;
      }
    return null;
  }
  findNearestCorner(t, s, i = 0.5) {
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
      if (this.context.math.distance(t, h.point) <= i)
        return h.type;
    return null;
  }
  onPointerDown(t) {
    const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.findRectangleAtPoint(i);
    if (r && this.context.state.getState().selectedObjects.includes(r.id)) {
      const h = this.findNearestCorner(i, r);
      if (h) {
        this.state.currentRectangle = r, this.state.dragTarget = h, this.state.isCreating = !1;
        const { x: v, y: O, width: C, height: m } = r.properties;
        switch (h) {
          case "corner-tl":
            this.state.lockedCorner = { x: v + C, y: O };
            break;
          case "corner-tr":
            this.state.lockedCorner = { x: v, y: O };
            break;
          case "corner-bl":
            this.state.lockedCorner = { x: v + C, y: O + m };
            break;
          case "corner-br":
            this.state.lockedCorner = { x: v, y: O + m };
            break;
        }
        return;
      } else {
        this.state.currentRectangle = r, this.state.dragTarget = "move", this.state.dragOffset = {
          x: i.x - r.properties.x,
          y: i.y - r.properties.y
        }, this.state.isCreating = !1;
        return;
      }
    }
    if (this.context.state.getState().selectedObjects.some((d) => {
      const h = this.context.canvas.getObject(d);
      return (h == null ? void 0 : h.type) === "rectangle";
    }))
      return;
    this.state.isCreating = !0, this.state.startPoint = i;
    const a = {
      id: this.generateId(),
      type: "rectangle",
      properties: {
        x: i.x,
        y: i.y,
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
    const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.startPoint) {
      const r = Math.min(this.state.startPoint.x, i.x), o = Math.min(this.state.startPoint.y, i.y), c = Math.abs(i.x - this.state.startPoint.x), a = Math.abs(i.y - this.state.startPoint.y), d = c * a;
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
      const r = i.x - this.state.dragOffset.x, o = i.y - this.state.dragOffset.y;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          ...this.state.currentRectangle.properties,
          x: r,
          y: o
        }
      });
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith("corner-") && this.state.lockedCorner) {
      const r = this.state.lockedCorner, o = Math.min(i.x, r.x), c = Math.max(i.x, r.x), a = Math.min(i.y, r.y), d = Math.max(i.y, r.y), h = o, v = a, O = c - o, C = d - a, m = Math.max(0.1, O), z = Math.max(0.1, C), X = m * z;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: h,
          y: v,
          width: m,
          height: z,
          area: X
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
  return new Ps();
}
class Ns {
  constructor() {
    ie(this, "id", "circle-tool");
    ie(this, "name", "Circle Builder");
    ie(this, "context");
    ie(this, "state", {
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
      const o = Le.getState(), c = it(
        s.viewport,
        o.gridScale,
        o.snapPrecision
      );
      return this.context.math.snapToGrid(t, c);
    }
    return t;
  }
  calculateCircleProperties(t, s) {
    const i = this.context.math.distance(t, s), r = i * 2, o = 2 * Math.PI * i, c = Math.PI * i * i;
    return { radius: i, diameter: r, circumference: o, area: c };
  }
  findCircleAtPoint(t) {
    const s = this.context.canvas.getAllObjects();
    for (const i of s)
      if (i.type === "circle") {
        const r = i;
        if (this.context.math.distance(t, r.properties.center) <= r.properties.radius + 0.5)
          return r;
      }
    return null;
  }
  findNearestHandle(t, s, i = 0.5) {
    const { center: r, radius: o } = s.properties;
    if (this.context.math.distance(t, r) <= i)
      return "center";
    const c = { x: r.x + o, y: r.y };
    return this.context.math.distance(t, c) <= i ? "radius" : null;
  }
  onPointerDown(t) {
    const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.findCircleAtPoint(i);
    if (r && !this.context.state.getState().selectedObjects.includes(r.id))
      return;
    if (r && this.context.state.getState().selectedObjects.includes(r.id)) {
      const h = this.findNearestHandle(i, r);
      if (h) {
        this.state.currentCircle = r, this.state.dragTarget = h, this.state.isCreating = !1, h === "center" && (this.state.dragOffset = {
          x: i.x - r.properties.center.x,
          y: i.y - r.properties.center.y
        });
        return;
      } else {
        this.state.currentCircle = r, this.state.dragTarget = "center", this.state.isCreating = !1, this.state.dragOffset = {
          x: i.x - r.properties.center.x,
          y: i.y - r.properties.center.y
        };
        return;
      }
    }
    if (this.context.state.getState().selectedObjects.some((d) => {
      const h = this.context.canvas.getObject(d);
      return (h == null ? void 0 : h.type) === "circle";
    }))
      return;
    this.state.isCreating = !0, this.state.center = i;
    const a = {
      id: this.generateId(),
      type: "circle",
      properties: {
        center: i,
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
    const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.center) {
      const r = this.calculateCircleProperties(this.state.center, i);
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          center: this.state.center,
          ...r
        }
      });
    } else if (this.state.dragTarget === "center" && this.state.dragOffset) {
      const r = {
        x: i.x - this.state.dragOffset.x,
        y: i.y - this.state.dragOffset.y
      };
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          ...this.state.currentCircle.properties,
          center: r
        }
      });
    } else if (this.state.dragTarget === "radius") {
      const r = this.state.currentCircle.properties.center, o = this.calculateCircleProperties(r, i);
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
function As() {
  return new Ns();
}
class Fs {
  constructor() {
    ie(this, "id", "triangle-tool");
    ie(this, "name", "Triangle Builder");
    ie(this, "context");
    ie(this, "state", {
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
      const o = Le.getState(), c = it(
        s.viewport,
        o.gridScale,
        o.snapPrecision
      );
      return this.context.math.snapToGrid(t, c);
    }
    return t;
  }
  calculateTriangleProperties(t) {
    const [s, i, r] = t, o = this.context.math.distance(i, r), c = this.context.math.distance(s, r), a = this.context.math.distance(s, i), d = Math.acos((c * c + a * a - o * o) / (2 * c * a)) * 180 / Math.PI, h = Math.acos((o * o + a * a - c * c) / (2 * o * a)) * 180 / Math.PI, v = 180 - d - h, O = Math.abs((i.x - s.x) * (r.y - s.y) - (r.x - s.x) * (i.y - s.y)) / 2, C = o + c + a;
    let m = "scalene";
    const z = 0.1;
    return Math.abs(d - 90) < z || Math.abs(h - 90) < z || Math.abs(v - 90) < z ? m = "right" : d > 90 || h > 90 || v > 90 ? m = "obtuse" : d < 90 && h < 90 && v < 90 && (m = "acute"), Math.abs(o - c) < z && Math.abs(c - a) < z ? m = "equilateral" : (Math.abs(o - c) < z || Math.abs(c - a) < z || Math.abs(o - a) < z) && (m = "isosceles"), {
      sideA: o,
      sideB: c,
      sideC: a,
      angleA: d,
      angleB: h,
      angleC: v,
      area: O,
      perimeter: C,
      type: m
    };
  }
  findTriangleAtPoint(t) {
    const s = this.context.canvas.getAllObjects();
    for (const i of s)
      if (i.type === "triangle") {
        const r = i, [o, c, a] = r.properties.vertices, d = (c.y - a.y) * (o.x - a.x) + (a.x - c.x) * (o.y - a.y), h = ((c.y - a.y) * (t.x - a.x) + (a.x - c.x) * (t.y - a.y)) / d, v = ((a.y - o.y) * (t.x - a.x) + (o.x - a.x) * (t.y - a.y)) / d, O = 1 - h - v;
        if (h >= 0 && v >= 0 && O >= 0)
          return r;
      }
    return null;
  }
  findNearestVertex(t, s, i = 0.5) {
    const r = s.properties.vertices;
    for (let o = 0; o < r.length; o++)
      if (this.context.math.distance(t, r[o]) <= i)
        return `vertex${o}`;
    return null;
  }
  onPointerDown(t) {
    const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.findTriangleAtPoint(i);
    if (r && this.context.state.getState().selectedObjects.includes(r.id)) {
      const c = this.findNearestVertex(i, r);
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
          x: i.x - a.x,
          y: i.y - a.y
        }, this.state.isCreating = !1;
        return;
      }
    }
    if (!this.state.isCreating) {
      if (this.context.state.getState().selectedObjects.some((h) => {
        const v = this.context.canvas.getObject(h);
        return (v == null ? void 0 : v.type) === "triangle";
      }))
        return;
      this.state.isCreating = !0, this.state.creationStep = 0, this.state.vertices = [i, null, null];
      const a = { x: i.x + 3, y: i.y };
      this.state.vertices[1] = a, this.state.creationStep = 1;
      const d = {
        id: this.generateId(),
        type: "triangle",
        properties: {
          vertices: [i, a, i],
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
    const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.creationStep === 1) {
      const [r, o] = this.state.vertices;
      if (r && o) {
        const c = { x: o.x, y: i.y }, a = [r, o, c], d = this.calculateTriangleProperties(a);
        this.context.canvas.updateObject(this.state.currentTriangle.id, {
          properties: {
            vertices: a,
            ...d
          }
        });
      }
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith("vertex")) {
      const r = parseInt(this.state.dragTarget.replace("vertex", "")), o = [...this.state.currentTriangle.properties.vertices];
      o[r] = i;
      const c = this.calculateTriangleProperties(o);
      this.context.canvas.updateObject(this.state.currentTriangle.id, {
        properties: {
          vertices: o,
          ...c
        }
      });
    } else if (this.state.dragTarget === "move" && this.state.dragOffset) {
      const r = {
        x: i.x - this.state.dragOffset.x,
        y: i.y - this.state.dragOffset.y
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
function Os() {
  return new Fs();
}
class zs {
  constructor() {
    ie(this, "id", "function-tool");
    ie(this, "name", "Function Grapher");
    ie(this, "context");
    ie(this, "state", {
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
      const i = Le.getState(), r = it(
        s.viewport,
        i.gridScale,
        i.snapPrecision
      );
      return this.context.math.snapToGrid(t, r);
    }
    return t;
  }
  evaluateFunction(t, s) {
    try {
      const i = t.replace(/\bx\b/g, `(${s})`).replace(/\^/g, "**").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/log/g, "Math.log").replace(/ln/g, "Math.log").replace(/exp/g, "Math.exp").replace(/sqrt/g, "Math.sqrt").replace(/abs/g, "Math.abs").replace(/pi/g, "Math.PI").replace(/e\b/g, "Math.E"), o = new Function("x", `return ${i}`)(s);
      if (typeof o == "number" && !isNaN(o) && isFinite(o))
        return o;
    } catch {
    }
    return null;
  }
  generateFunctionPoints(t, s, i) {
    const r = [], o = (s.max - s.min) / (i * (s.max - s.min));
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
    const s = this.context.canvas.getAllObjects(), i = 0.3;
    for (const r of s)
      if (r.type === "function") {
        const o = r;
        for (let c = 0; c < o.properties.points.length - 1; c++) {
          const a = o.properties.points[c], d = o.properties.points[c + 1];
          if (!a || !d) continue;
          const h = d.x - a.x, v = d.y - a.y, O = Math.sqrt(h * h + v * v);
          if (O === 0) continue;
          const C = Math.max(0, Math.min(1, ((t.x - a.x) * h + (t.y - a.y) * v) / (O * O))), m = {
            x: a.x + C * h,
            y: a.y + C * v
          };
          if (Math.sqrt(
            (t.x - m.x) ** 2 + (t.y - m.y) ** 2
          ) <= i)
            return o;
        }
      }
    return null;
  }
  onPointerDown(t) {
    const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s)), r = this.findFunctionAtPoint(i);
    if (r && this.context.state.getState().selectedObjects.includes(r.id)) {
      const c = r.properties.domain, a = this.evaluateFunction(r.properties.equation, c.min), d = this.evaluateFunction(r.properties.equation, c.max);
      if (a !== null && Math.abs(i.x - c.min) < 0.5 && Math.abs(i.y - a) < 0.5) {
        this.state.currentFunction = r, this.state.dragTarget = "domain-start", this.state.isCreating = !1;
        return;
      } else if (d !== null && Math.abs(i.x - c.max) < 0.5 && Math.abs(i.y - d) < 0.5) {
        this.state.currentFunction = r, this.state.dragTarget = "domain-end", this.state.isCreating = !1;
        return;
      } else {
        this.state.currentFunction = r, this.state.dragTarget = "move", this.state.dragOffset = { x: 0, y: 0 }, this.state.isCreating = !1;
        return;
      }
    }
    if (!this.state.isCreating) {
      if (this.context.state.getState().selectedObjects.some((O) => {
        const C = this.context.canvas.getObject(O);
        return (C == null ? void 0 : C.type) === "function";
      }))
        return;
      this.state.isCreating = !0, this.state.equation = this.getDefaultEquation(this.state.functionType);
      const a = 8, d = {
        min: i.x - a / 2,
        max: i.x + a / 2
      }, h = this.generateFunctionPoints(this.state.equation, d, 20), v = {
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
      this.state.currentFunction = v, this.context.canvas.addObject(v);
    }
  }
  onPointerMove(t) {
    if (!this.state.currentFunction) return;
    const s = { x: t.x, y: t.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.dragTarget === "domain-start") {
      const r = {
        min: Math.min(i.x, this.state.currentFunction.properties.domain.max - 0.1),
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
        max: Math.max(i.x, this.state.currentFunction.properties.domain.min + 0.1)
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
        this.state.dragOffset = { x: i.x - d, y: 0 };
      }
      (this.state.currentFunction.properties.domain.min + this.state.currentFunction.properties.domain.max) / 2;
      const r = i.x - this.state.dragOffset.x, o = this.state.currentFunction.properties.domain.max - this.state.currentFunction.properties.domain.min, c = {
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
    ie(this, "id", "area-counter");
    ie(this, "name", "Area Counter");
    ie(this, "context");
    ie(this, "badges", /* @__PURE__ */ new Map());
    ie(this, "badgeElements", /* @__PURE__ */ new Map());
  }
  init(t) {
    this.context = t, t.events.on("rectangle:created", this.handleRectangleCreated.bind(this)), t.events.on("rectangle:update", this.handleRectangleUpdated.bind(this)), t.events.on("object:removed", this.handleObjectRemoved.bind(this)), this.createBadgesForExistingRectangles();
    const s = t.state.subscribe((i) => {
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
    const i = t.x + t.width / 2, r = t.y + t.height / 2, o = this.context.canvas.worldToScreen({ x: i, y: r }), c = this.formatArea(t.area, t.width, t.height);
    s.textContent = c;
    const a = s.getBoundingClientRect();
    s.style.left = `${o.x - a.width / 2}px`, s.style.top = `${o.y - a.height / 2}px`, s.style.display = "none";
  }
  formatArea(t, s, i) {
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
      const i = this.badgeElements.get(t);
      i && (i.style.display = "none");
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
  const { registerPlugin: n } = ft(), t = Re(!1);
  return me(() => {
    if (t.current) return;
    const s = ks(), i = Ts(), r = As(), o = Os(), c = Ds(), a = Is();
    return n(s), n(i), n(r), n(o), n(c), n(a), t.current = !0, () => {
    };
  }, [n]), /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-screen bg-gray-50", children: [
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
function Gs() {
  return /* @__PURE__ */ e.jsx(It, { children: /* @__PURE__ */ e.jsx(Es, { children: /* @__PURE__ */ e.jsx(js, { children: /* @__PURE__ */ e.jsx(es, { children: /* @__PURE__ */ e.jsx(It, { children: /* @__PURE__ */ e.jsx(Ls, {}) }) }) }) }) });
}
const Bs = "0.1.0";
export {
  ws as Canvas,
  Gs as GrixApp,
  es as PluginManagerProvider,
  Cs as ToolBar,
  Is as createAreaCounter,
  ks as createRayTool,
  Ts as createRectangleTool,
  Te as useCanvasStore,
  ss as useInputSystem,
  ft as usePluginManager,
  Bs as version
};
