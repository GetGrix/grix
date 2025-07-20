var Te = Object.defineProperty;
var Re = (t, e, s) => e in t ? Te(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var J = (t, e, s) => Re(t, typeof e != "symbol" ? e + "" : e, s);
import xe, { createContext as Ne, useState as Q, useRef as se, useEffect as te, useContext as De, useCallback as K } from "react";
var ue = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function ze() {
  if (be) return le;
  be = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function s(r, o, i) {
    var c = null;
    if (i !== void 0 && (c = "" + i), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      i = {};
      for (var l in o)
        l !== "key" && (i[l] = o[l]);
    } else i = o;
    return o = i.ref, {
      $$typeof: t,
      type: r,
      key: c,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return le.Fragment = e, le.jsx = s, le.jsxs = s, le;
}
var de = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Fe() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    function t(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === _ ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case M:
          return "Fragment";
        case p:
          return "Profiler";
        case a:
          return "StrictMode";
        case C:
          return "Suspense";
        case $:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case O:
            return "Portal";
          case f:
            return (x.displayName || "Context") + ".Provider";
          case y:
            return (x._context.displayName || "Context") + ".Consumer";
          case v:
            var A = x.render;
            return x = x.displayName, x || (x = A.displayName || A.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case E:
            return A = x.displayName || null, A !== null ? A : t(x.type) || "Memo";
          case P:
            A = x._payload, x = x._init;
            try {
              return t(x(A));
            } catch {
            }
        }
      return null;
    }
    function e(x) {
      return "" + x;
    }
    function s(x) {
      try {
        e(x);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var g = A.error, b = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return g.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), e(x);
      }
    }
    function r(x) {
      if (x === M) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === P)
        return "<...>";
      try {
        var A = t(x);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var x = G.A;
      return x === null ? null : x.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function c(x) {
      if (R.call(x, "key")) {
        var A = Object.getOwnPropertyDescriptor(x, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function l(x, A) {
      function g() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      g.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: g,
        configurable: !0
      });
    }
    function h() {
      var x = t(this.type);
      return Z[x] || (Z[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function m(x, A, g, b, N, D, q, U) {
      return g = D.ref, x = {
        $$typeof: d,
        type: x,
        key: A,
        props: D,
        _owner: N
      }, (g !== void 0 ? g : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function j(x, A, g, b, N, D, q, U) {
      var Y = A.children;
      if (Y !== void 0)
        if (b)
          if (X(Y)) {
            for (b = 0; b < Y.length; b++)
              k(Y[b]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(Y);
      if (R.call(A, "key")) {
        Y = t(x);
        var w = Object.keys(A).filter(function(T) {
          return T !== "key";
        });
        b = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", ie[Y + b] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          Y,
          w,
          Y
        ), ie[Y + b] = !0);
      }
      if (Y = null, g !== void 0 && (s(g), Y = "" + g), c(A) && (s(A.key), Y = "" + A.key), "key" in A) {
        g = {};
        for (var I in A)
          I !== "key" && (g[I] = A[I]);
      } else g = A;
      return Y && l(
        g,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), m(
        x,
        Y,
        D,
        N,
        o(),
        g,
        q,
        U
      );
    }
    function k(x) {
      typeof x == "object" && x !== null && x.$$typeof === d && x._store && (x._store.validated = 1);
    }
    var u = xe, d = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), f = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), G = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.prototype.hasOwnProperty, X = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    u = {
      "react-stack-bottom-frame": function(x) {
        return x();
      }
    };
    var B, Z = {}, ne = u["react-stack-bottom-frame"].bind(
      u,
      i
    )(), re = W(r(i)), ie = {};
    de.Fragment = M, de.jsx = function(x, A, g, b, N) {
      var D = 1e4 > G.recentlyCreatedOwnerStacks++;
      return j(
        x,
        A,
        g,
        !1,
        b,
        N,
        D ? Error("react-stack-top-frame") : ne,
        D ? W(r(x)) : re
      );
    }, de.jsxs = function(x, A, g, b, N) {
      var D = 1e4 > G.recentlyCreatedOwnerStacks++;
      return j(
        x,
        A,
        g,
        !0,
        b,
        N,
        D ? Error("react-stack-top-frame") : ne,
        D ? W(r(x)) : re
      );
    };
  }()), de;
}
var ve;
function $e() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? ue.exports = ze() : ue.exports = Fe()), ue.exports;
}
var n = $e();
const ce = {
  // Vector operations
  distance(t, e) {
    const s = e.x - t.x, r = e.y - t.y;
    return Math.sqrt(s * s + r * r);
  },
  slope(t, e) {
    const s = e.x - t.x, r = e.y - t.y;
    return Math.abs(s) < Number.EPSILON ? s === 0 || s > 0 ? 1 / 0 : -1 / 0 : r / s;
  },
  angle(t, e) {
    const s = e.x - t.x, r = e.y - t.y;
    return Math.atan2(r, s);
  },
  magnitude(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  },
  normalize(t) {
    const e = this.magnitude(t);
    return e === 0 ? { x: 0, y: 0 } : { x: t.x / e, y: t.y / e };
  },
  // Grid operations
  snapToGrid(t, e) {
    return {
      x: Math.round(t.x / e) * e,
      y: Math.round(t.y / e) * e
    };
  },
  // Rectangle operations
  calculateArea(t) {
    return Math.abs(t.properties.width * t.properties.height);
  },
  boundsContainPoint(t, e) {
    return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
  },
  boundsIntersect(t, e) {
    return !(t.x + t.width < e.x || e.x + e.width < t.x || t.y + t.height < e.y || e.y + e.height < t.y);
  },
  // Fraction utilities for educational features
  gcd(t, e) {
    for (t = Math.abs(t), e = Math.abs(e); e !== 0; ) {
      const s = e;
      e = t % e, t = s;
    }
    return t;
  },
  simplifyFraction(t, e) {
    if (e === 0)
      return [t, 1];
    const s = this.gcd(t, e);
    return [t / s, e / s];
  },
  // Coordinate transformations
  worldToScreen(t, e, s) {
    const r = s.width / 2, o = s.height / 2, i = (t.x - e.center.x) * e.zoom, c = (t.y - e.center.y) * e.zoom;
    return {
      x: r + i,
      y: o - c
      // Flip Y axis for mathematical coordinates
    };
  },
  screenToWorld(t, e, s) {
    const r = s.width / 2, o = s.height / 2, i = (t.x - r) / e.zoom, c = (o - t.y) / e.zoom;
    return {
      x: e.center.x + i,
      y: e.center.y + c
    };
  }
}, ae = {
  // Detect device capabilities
  detectCapabilities() {
    const t = "ontouchstart" in window || navigator.maxTouchPoints > 0, e = t && navigator.maxTouchPoints > 1, s = !0, r = window.matchMedia("(hover: hover)").matches;
    return {
      hasTouch: t,
      hasPencil: e,
      hasKeyboard: s,
      hasHover: r,
      maxTouchPoints: navigator.maxTouchPoints || 0,
      supportsPressure: "force" in Touch.prototype,
      supportsTilt: "altitudeAngle" in Touch.prototype
    };
  },
  // Normalize pointer events across input types
  normalizePointerEvent(t) {
    let e = "mouse";
    return t.pointerType === "touch" ? e = "touch" : t.pointerType === "pen" && (e = "pen"), {
      type: e,
      pressure: t.pressure || 0,
      tiltX: t.tiltX || 0,
      tiltY: t.tiltY || 0,
      x: t.clientX,
      y: t.clientY,
      timestamp: t.timeStamp,
      isPrimary: t.isPrimary,
      pointerId: t.pointerId
    };
  },
  // Calculate appropriate touch target size based on device
  getTouchTargetSize(t) {
    switch (t) {
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
class Ie {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
  }
  on(e, s) {
    this.listeners.has(e) || this.listeners.set(e, []), this.listeners.get(e).push(s);
  }
  off(e, s) {
    const r = this.listeners.get(e);
    if (r) {
      const o = r.indexOf(s);
      o > -1 && r.splice(o, 1);
    }
  }
  emit(e, s) {
    const r = this.listeners.get(e);
    r && r.forEach((o) => {
      try {
        o(s);
      } catch (i) {
        console.error(`Error in event handler for ${e}:`, i);
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
  getListenerCount(e) {
    var s;
    return ((s = this.listeners.get(e)) == null ? void 0 : s.length) || 0;
  }
}
const Me = (t) => {
  let e;
  const s = /* @__PURE__ */ new Set(), r = (m, j) => {
    const k = typeof m == "function" ? m(e) : m;
    if (!Object.is(k, e)) {
      const u = e;
      e = j ?? (typeof k != "object" || k === null) ? k : Object.assign({}, e, k), s.forEach((d) => d(e, u));
    }
  }, o = () => e, l = { setState: r, getState: o, getInitialState: () => h, subscribe: (m) => (s.add(m), () => s.delete(m)) }, h = e = t(r, o, l);
  return l;
}, We = (t) => t ? Me(t) : Me, Le = (t) => t;
function Ye(t, e = Le) {
  const s = xe.useSyncExternalStore(
    t.subscribe,
    () => e(t.getState()),
    () => e(t.getInitialState())
  );
  return xe.useDebugValue(s), s;
}
const Pe = (t) => {
  const e = We(t), s = (r) => Ye(e, r);
  return Object.assign(s, e), s;
}, fe = (t) => t ? Pe(t) : Pe, V = fe((t, e) => ({
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
    t((r) => ({
      viewport: { ...r.viewport, ...s }
    }));
  },
  // Object management
  addObject: (s) => {
    t((r) => ({
      objects: [...r.objects, s]
    }));
  },
  removeObject: (s) => {
    t((r) => ({
      objects: r.objects.filter((o) => o.id !== s),
      selectedObjects: r.selectedObjects.filter((o) => o !== s)
    }));
  },
  updateObject: (s, r) => {
    t((o) => ({
      objects: o.objects.map(
        (i) => i.id === s ? { ...i, ...r } : i
      )
    }));
  },
  // Selection management
  selectObject: (s, r = !1) => {
    t((o) => r ? {
      selectedObjects: o.selectedObjects.includes(s) ? o.selectedObjects.filter((c) => c !== s) : [...o.selectedObjects, s]
    } : { selectedObjects: [s] });
  },
  clearSelection: () => {
    t({ selectedObjects: [] });
  },
  // Grid settings
  setSnapToGrid: (s) => {
    t({ snapToGrid: s });
  },
  setGridDensity: (s) => {
    t({ gridDensity: s });
  },
  // Canvas size
  setCanvasSize: (s) => {
    t({ canvasSize: s });
  },
  // Helper methods
  getObject: (s) => e().objects.find((r) => r.id === s),
  getAllObjects: () => e().objects,
  getSelectedObjects: () => {
    const s = e();
    return s.objects.filter((r) => s.selectedObjects.includes(r.id));
  },
  screenToWorld: (s) => {
    const { viewport: r, canvasSize: o } = e();
    return ce.screenToWorld(s, r, o);
  },
  worldToScreen: (s) => {
    const { viewport: r, canvasSize: o } = e();
    return ce.worldToScreen(s, r, o);
  }
})), _e = () => ({
  addObject: (t) => V.getState().addObject(t),
  removeObject: (t) => V.getState().removeObject(t),
  updateObject: (t, e) => V.getState().updateObject(t, e),
  getObject: (t) => V.getState().getObject(t),
  getAllObjects: () => V.getState().getAllObjects(),
  screenToWorld: (t) => V.getState().screenToWorld(t),
  worldToScreen: (t) => V.getState().worldToScreen(t)
}), Ge = () => ({
  getState: () => {
    const t = V.getState();
    return {
      viewport: t.viewport,
      objects: t.objects,
      selectedObjects: t.selectedObjects,
      snapToGrid: t.snapToGrid,
      gridDensity: t.gridDensity
    };
  },
  setState: (t) => {
    V.setState(t);
  },
  subscribe: (t) => V.subscribe((e) => {
    t({
      viewport: e.viewport,
      objects: e.objects,
      selectedObjects: e.selectedObjects,
      snapToGrid: e.snapToGrid,
      gridDensity: e.gridDensity
    });
  })
}), Ae = Ne(null);
function pe() {
  const t = De(Ae);
  if (!t)
    throw new Error("usePluginManager must be used within PluginManagerProvider");
  return t;
}
function Be({ children: t }) {
  const [e] = Q(() => new Ie()), [s] = Q(() => /* @__PURE__ */ new Map()), [r] = Q(() => /* @__PURE__ */ new Map()), [o, i] = Q(null), c = se(), l = se(), h = se();
  c.current || (c.current = _e()), l.current || (l.current = Ge()), h.current || (h.current = {
    distance: ce.distance,
    slope: ce.slope,
    snapToGrid: ce.snapToGrid,
    calculateArea: ce.calculateArea
  });
  const m = c.current, j = l.current, k = h.current, u = (a) => {
    if (s.has(a.id)) {
      console.warn(`Plugin ${a.id} is already registered`);
      return;
    }
    const p = {
      canvas: m,
      events: e,
      state: j,
      math: k
    };
    s.set(a.id, a), r.set(a.id, p);
    try {
      a.init(p), console.log(`Plugin ${a.id} initialized successfully`);
    } catch (y) {
      console.error(`Failed to initialize plugin ${a.id}:`, y), s.delete(a.id), r.delete(a.id);
    }
  }, d = (a) => {
    var y;
    const p = s.get(a);
    if (p) {
      try {
        (y = p.destroy) == null || y.call(p);
      } catch (f) {
        console.error(`Error destroying plugin ${a}:`, f);
      }
      s.delete(a), r.delete(a), o === a && i(null);
    }
  }, O = () => Array.from(s.values());
  te(() => {
    e.emit("tool:changed", { previous: null, current: o });
  }, [o, e]), te(() => {
    const a = (v) => (C) => {
      var E, P, S, _, G, R;
      const $ = o ? s.get(o) : null;
      if ($)
        try {
          switch (v) {
            case "pointer:down":
              (E = $.onPointerDown) == null || E.call($, C);
              break;
            case "pointer:move":
              (P = $.onPointerMove) == null || P.call($, C);
              break;
            case "pointer:up":
              (S = $.onPointerUp) == null || S.call($, C);
              break;
          }
        } catch (X) {
          console.error(`Error in plugin ${o} handling ${v}:`, X);
        }
      else {
        const X = j.getState().selectedObjects;
        try {
          let W;
          if (X.length === 1) {
            const B = m.getObject(X[0]);
            (B == null ? void 0 : B.type) === "ray" ? W = s.get("ray-tool") : (B == null ? void 0 : B.type) === "rectangle" && (W = s.get("rectangle-tool"));
          }
          if (W)
            switch (v) {
              case "pointer:down":
                (_ = W.onPointerDown) == null || _.call(W, C);
                break;
              case "pointer:move":
                (G = W.onPointerMove) == null || G.call(W, C);
                break;
              case "pointer:up":
                (R = W.onPointerUp) == null || R.call(W, C);
                break;
            }
        } catch (W) {
          console.error(`Error in tool handling ${v} for manipulation:`, W);
        }
      }
    }, p = a("pointer:down"), y = a("pointer:move"), f = a("pointer:up");
    return e.on("pointer:down", p), e.on("pointer:move", y), e.on("pointer:up", f), () => {
      e.off("pointer:down", p), e.off("pointer:move", y), e.off("pointer:up", f);
    };
  }, [o, s, e]);
  const M = {
    eventBus: e,
    registerPlugin: u,
    unregisterPlugin: d,
    getActivePlugins: O,
    activeTool: o,
    setActiveTool: i
  };
  return /* @__PURE__ */ n.jsx(Ae.Provider, { value: M, children: t });
}
function Xe() {
  const { eventBus: t } = pe();
  return {
    handlePointerDown: (o) => {
      t.emit("pointer:down", o);
    },
    handlePointerMove: (o) => {
      t.emit("pointer:move", o);
    },
    handlePointerUp: (o) => {
      t.emit("pointer:up", o);
    }
  };
}
function qe(t, e, s = {}) {
  const [r, o] = Q(null), [i, c] = Q(/* @__PURE__ */ new Map()), l = {
    enableGestures: !0,
    touchTargetSize: 44,
    preventScrolling: !0,
    ...s
  };
  te(() => {
    const a = ae.detectCapabilities();
    o(a);
  }, []);
  const [h, m] = Q({
    isGesturing: !1,
    startTime: 0,
    startDistance: 0,
    lastTapTime: 0,
    tapCount: 0
  }), j = K((a) => {
    const p = Array.from(a.values());
    if (p.length < 2) return 0;
    const y = p[0], f = p[1];
    if (!y || !f) return 0;
    const v = y.x - f.x, C = y.y - f.y;
    return Math.sqrt(v * v + C * C);
  }, []), k = K((a) => {
    const p = Array.from(a.values());
    if (p.length === 0) return { x: 0, y: 0 };
    const y = p.reduce((f, v) => ({ x: f.x + v.x, y: f.y + v.y }), { x: 0, y: 0 });
    return { x: y.x / p.length, y: y.y / p.length };
  }, []), u = K((a) => {
    var C;
    if (!t.current) return;
    l.preventScrolling && a.preventDefault();
    const p = t.current.getBoundingClientRect(), y = a.clientX - p.left, f = a.clientY - p.top, v = ae.normalizePointerEvent(a);
    v.x = y, v.y = f, c(($) => {
      const E = new Map($);
      if (E.set(a.pointerId, v), l.enableGestures && E.size >= 2) {
        const P = j(E);
        m((S) => ({
          ...S,
          isGesturing: !0,
          startTime: a.timeStamp,
          startDistance: P
        }));
      }
      return E;
    }), t.current.setPointerCapture(a.pointerId), (C = e.onPointerDown) == null || C.call(e, v);
  }, [t, e, l, j]), d = K((a) => {
    var C;
    if (!t.current) return;
    const p = t.current.getBoundingClientRect(), y = a.clientX - p.left, f = a.clientY - p.top, v = ae.normalizePointerEvent(a);
    v.x = y, v.y = f, c(($) => {
      var P, S;
      const E = new Map($);
      if (E.set(a.pointerId, v), l.enableGestures && E.size >= 2) {
        const _ = j(E), G = k(E);
        if (h.isGesturing && h.startDistance > 0) {
          const R = _ / h.startDistance;
          (P = e.onGesture) == null || P.call(e, {
            type: "pinch",
            center: G,
            scale: R,
            touches: E.size
          });
        }
      } else if (E.size === 1 && h.isGesturing) {
        const _ = k(E);
        (S = e.onGesture) == null || S.call(e, {
          type: "pan",
          center: _,
          touches: E.size
        });
      }
      return E;
    }), (C = e.onPointerMove) == null || C.call(e, v);
  }, [e, l, j, k, h]), O = K((a) => {
    var C;
    if (!t.current) return;
    const p = t.current.getBoundingClientRect(), y = a.clientX - p.left, f = a.clientY - p.top, v = ae.normalizePointerEvent(a);
    v.x = y, v.y = f, c(($) => {
      var P;
      const E = new Map($);
      if (E.delete(a.pointerId), l.enableGestures && E.size === 0) {
        const _ = a.timeStamp - h.startTime < 200, G = a.timeStamp - h.lastTapTime;
        _ && !h.isGesturing && (G < 300 ? m((R) => ({ ...R, tapCount: R.tapCount + 1 })) : ((P = e.onGesture) == null || P.call(e, {
          type: "tap",
          center: { x: v.x, y: v.y },
          touches: 1
        }), m((R) => ({
          ...R,
          tapCount: 1,
          lastTapTime: a.timeStamp
        })))), m((R) => ({ ...R, isGesturing: !1 }));
      }
      return E;
    }), t.current && t.current.releasePointerCapture(a.pointerId), (C = e.onPointerUp) == null || C.call(e, v);
  }, [t, e, l, h]), M = K((a) => {
    var C;
    if (!t.current) return;
    const p = t.current.getBoundingClientRect(), y = a.clientX - p.left, f = a.clientY - p.top, v = ae.normalizePointerEvent(a);
    v.x = y, v.y = f, c(($) => {
      const E = new Map($);
      return E.delete(a.pointerId), E;
    }), m(($) => ({ ...$, isGesturing: !1 })), (C = e.onPointerCancel) == null || C.call(e, v);
  }, [e]);
  return te(() => {
    const a = t.current;
    if (!a) return;
    a.addEventListener("pointerdown", u), a.addEventListener("pointermove", d), a.addEventListener("pointerup", O), a.addEventListener("pointercancel", M);
    const p = (y) => y.preventDefault();
    return a.addEventListener("contextmenu", p), () => {
      a.removeEventListener("pointerdown", u), a.removeEventListener("pointermove", d), a.removeEventListener("pointerup", O), a.removeEventListener("pointercancel", M), a.removeEventListener("contextmenu", p);
    };
  }, [t, u, d, O, M]), {
    capabilities: r,
    activePointers: Array.from(i.values()),
    isGesturing: h.isGesturing,
    touchTargetSize: r ? ae.getTouchTargetSize(r.hasTouch ? "touch" : "mouse") : l.touchTargetSize
  };
}
function Ue(t, e = {
  minSpacing: 8,
  maxSpacing: 80,
  labelMinSpacing: 40
}) {
  const s = t.zoom;
  let o = 1, i = o * s;
  for (; i < e.minSpacing && o < 1e4; )
    o *= we(o), i = o * s;
  for (; i > e.maxSpacing && o > 1e-4; )
    o /= He(o), i = o * s;
  let c = o, l = c * s;
  for (; l < e.labelMinSpacing && c < o * 100; )
    c *= we(c), l = c * s;
  const h = Math.max(0.1, Math.min(1, (i - e.minSpacing) / (e.maxSpacing - e.minSpacing)));
  return {
    gridSize: o,
    labelStep: c,
    shouldShowGrid: i >= e.minSpacing,
    shouldShowLabels: l >= e.labelMinSpacing,
    opacity: h
  };
}
function we(t) {
  if (t < 1)
    return t >= 0.5 ? 2 : t >= 0.2 ? 2.5 : (t >= 0.1, 2);
  if (t < 10)
    return t >= 5 ? 2 : t >= 2 ? 2.5 : (t >= 1, 2);
  {
    const e = Math.pow(10, Math.floor(Math.log10(t))), s = t / e;
    return s >= 5 ? 2 : s >= 2 ? 2.5 : (s >= 1, 2);
  }
}
function He(t) {
  if (t <= 1)
    return t <= 0.1 || t <= 0.2 ? 2 : t <= 0.5 ? 2.5 : (t <= 1, 2);
  if (t <= 10)
    return t <= 2 ? 2 : t <= 5 ? 2.5 : (t <= 10, 2);
  {
    const e = Math.pow(10, Math.floor(Math.log10(t))), s = t / e;
    return s <= 2 ? 2 : s <= 5 ? 2.5 : (s <= 10, 2);
  }
}
function Ze(t, e, s, r, o = !0) {
  const { gridSize: i } = s, c = {
    left: t.center.x - e.width / 2 / t.zoom,
    right: t.center.x + e.width / 2 / t.zoom,
    top: t.center.y + e.height / 2 / t.zoom,
    bottom: t.center.y - e.height / 2 / t.zoom
  }, l = [], h = [], m = Math.floor(c.left / i) * i, j = Math.ceil(c.right / i) * i;
  for (let d = m; d <= j; d += i) {
    const O = r({ x: d, y: 0 }).x, M = Math.abs(d) < i / 2, a = Math.abs(d % (i * 5)) < i / 2;
    l.push({ x: O, isAxis: M, isMajor: a, isInteger: !1, value: d });
  }
  if (i >= 2 && o) {
    const d = Math.floor(c.left), O = Math.ceil(c.right);
    for (let M = d; M <= O; M += 1)
      if (Math.abs(M % i) > 1e-3) {
        const a = r({ x: M, y: 0 }).x, p = Math.abs(M) < 0.5;
        l.push({ x: a, isAxis: p, isMajor: !1, isInteger: !0, value: M });
      }
  }
  const k = Math.floor(c.bottom / i) * i, u = Math.ceil(c.top / i) * i;
  for (let d = k; d <= u; d += i) {
    const O = r({ x: 0, y: d }).y, M = Math.abs(d) < i / 2, a = Math.abs(d % (i * 5)) < i / 2;
    h.push({ y: O, isAxis: M, isMajor: a, isInteger: !1, value: d });
  }
  if (i >= 2 && o) {
    const d = Math.floor(c.bottom), O = Math.ceil(c.top);
    for (let M = d; M <= O; M += 1)
      if (Math.abs(M % i) > 1e-3) {
        const a = r({ x: 0, y: M }).y, p = Math.abs(M) < 0.5;
        h.push({ y: a, isAxis: p, isMajor: !1, isInteger: !0, value: M });
      }
  }
  return { verticalLines: l, horizontalLines: h };
}
function z(t, e) {
  return e >= 1 ? t.toFixed(0) : e >= 0.1 ? t.toFixed(1) : e >= 0.01 ? t.toFixed(2) : t.toFixed(3);
}
const Se = {
  // Origin line enhancements - start with most basic ones enabled
  showEquivalentFractions: !0,
  showLengthMultiples: !0,
  showAreaRectangle: !0,
  showRiseRunTriangle: !1,
  showDistanceMarkers: !1,
  showAngleArc: !1,
  // Division visualization
  showDivisionAnswer: !0,
  // Grid enhancements
  showLatticePoints: !1,
  showIntegerGridLines: !0,
  showReferenceLineY_equals_X: !0,
  // Display settings
  fontScale: 1,
  gridScale: 1,
  // Snapping settings
  snapPrecision: "adaptive",
  // Coordinate system settings
  coordinateSystem: "cartesian",
  showPolarGrid: !1,
  customOrigin: null
}, me = fe((t) => ({
  ...Se,
  toggleSetting: (e) => {
    t((s) => ({
      [e]: !s[e]
    }));
  },
  setFontScale: (e) => {
    t({ fontScale: e });
  },
  setGridScale: (e) => {
    t({ gridScale: e });
  },
  setSnapPrecision: (e) => {
    t({ snapPrecision: e });
  },
  setCoordinateSystem: (e) => {
    t({ coordinateSystem: e });
  },
  setCustomOrigin: (e) => {
    t({ customOrigin: e });
  },
  resetToDefaults: () => {
    t(Se);
  }
}));
function Ke({ viewport: t, canvasSize: e, worldToScreen: s, objects: r = [] }) {
  const o = me(), i = (a) => Math.round(a * o.fontScale), c = Ue(t, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }), l = {
    gridSize: c.gridSize / o.gridScale,
    labelStep: c.labelStep / o.gridScale
  }, { verticalLines: h, horizontalLines: m } = Ze(
    t,
    e,
    l,
    s,
    o.showIntegerGridLines
  );
  if (!c.shouldShowGrid)
    return null;
  const j = [];
  if (o.coordinateSystem === "polar" || o.coordinateSystem === "both") {
    const a = s({ x: 0, y: 0 }), p = Math.max(
      Math.abs(t.center.x) + e.width / (2 * t.zoom),
      Math.abs(t.center.y) + e.height / (2 * t.zoom)
    );
    for (let y = l.gridSize; y <= p; y += l.gridSize) {
      const f = y * t.zoom;
      f >= 10 && j.push(
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: a.x,
            cy: a.y,
            r: f,
            fill: "none",
            stroke: "#9CA3AF",
            strokeWidth: "0.5",
            opacity: 0.4
          },
          `polar-circle-${y}`
        )
      );
    }
    for (let y = 0; y < 360; y += 30) {
      const f = y * Math.PI / 180, v = a.x + p * t.zoom * Math.cos(f), C = a.y - p * t.zoom * Math.sin(f);
      j.push(
        /* @__PURE__ */ n.jsx(
          "line",
          {
            x1: a.x,
            y1: a.y,
            x2: v,
            y2: C,
            stroke: "#9CA3AF",
            strokeWidth: "0.5",
            opacity: 0.3
          },
          `polar-line-${y}`
        )
      );
    }
  }
  const k = [];
  r.forEach((a) => {
    if (a.type === "ray") {
      const { startPoint: p, endPoint: y } = a.properties;
      if (Math.abs(p.x) < 1e-3 && Math.abs(p.y) < 1e-3) {
        const f = y.x - p.x, v = y.y - p.y;
        if (Math.abs(f) > 1e-3) {
          const C = 1 / f;
          if (C > 0 && C <= 1) {
            const $ = p.y + C * v, E = s({ x: 1, y: $ });
            k.push({ y: $, screenY: E.y });
          }
        }
      }
    }
  });
  const u = h.map((a) => {
    const p = Math.abs(a.value - 1) < 1e-3, y = a.isAxis ? "#374151" : p ? "#60A5FA" : (
      // Light blue for x=1
      a.isInteger ? "#E5E7EB" : (
        // Very faint for integer lines
        a.isMajor ? "#9CA3AF" : "#E5E7EB"
      )
    ), f = a.isAxis ? 2 : p ? 1.5 : a.isInteger ? Math.max(1, t.zoom * 0.05) : a.isMajor ? 1 : 0.5, v = a.isAxis ? 1 : p ? 0.8 : a.isInteger ? Math.max(0.6, 0.4 * c.opacity) : (
      // Ensure minimum visibility
      a.isMajor ? 0.6 * c.opacity : 0.3 * c.opacity
    );
    return /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: a.x,
        y1: 0,
        x2: a.x,
        y2: e.height,
        stroke: y,
        strokeWidth: f,
        opacity: v
      },
      `v${a.value}`
    );
  }), d = m.map((a) => /* @__PURE__ */ n.jsx(
    "line",
    {
      x1: 0,
      y1: a.y,
      x2: e.width,
      y2: a.y,
      stroke: a.isAxis ? "#374151" : a.isInteger ? "#E5E7EB" : (
        // Very faint for integer lines
        a.isMajor ? "#9CA3AF" : "#E5E7EB"
      ),
      strokeWidth: a.isAxis ? 2 : a.isInteger ? Math.max(1, t.zoom * 0.05) : a.isMajor ? 1 : 0.5,
      opacity: a.isAxis ? 1 : a.isInteger ? Math.max(0.6, 0.4 * c.opacity) : (
        // Ensure minimum visibility
        a.isMajor ? 0.6 * c.opacity : 0.3 * c.opacity
      )
    },
    `h${a.value}`
  )), O = o.showReferenceLineY_equals_X ? (() => {
    const a = {
      left: t.center.x - e.width / 2 / t.zoom,
      right: t.center.x + e.width / 2 / t.zoom,
      top: t.center.y + e.height / 2 / t.zoom,
      bottom: t.center.y - e.height / 2 / t.zoom
    }, p = Math.min(a.left, a.bottom), y = Math.max(a.right, a.top), f = s({ x: p, y: p }), v = s({ x: y, y });
    return { lineStart: f, lineEnd: v };
  })() : null, M = o.showLatticePoints ? (() => {
    const a = {
      left: t.center.x - e.width / 2 / t.zoom,
      right: t.center.x + e.width / 2 / t.zoom,
      top: t.center.y + e.height / 2 / t.zoom,
      bottom: t.center.y - e.height / 2 / t.zoom
    }, p = [], y = Math.max(-20, Math.floor(a.left)), f = Math.min(20, Math.ceil(a.right)), v = Math.max(-20, Math.floor(a.bottom)), C = Math.min(20, Math.ceil(a.top)), $ = (f - y + 1) * (C - v + 1);
    if ($ > 200) {
      const E = Math.ceil(Math.sqrt($ / 200));
      for (let P = y; P <= f; P += E)
        for (let S = v; S <= C; S += E) {
          const _ = s({ x: P, y: S });
          _.x >= -20 && _.x <= e.width + 20 && _.y >= -20 && _.y <= e.height + 20 && p.push(_);
        }
    } else
      for (let E = y; E <= f; E++)
        for (let P = v; P <= C; P++) {
          const S = s({ x: E, y: P });
          S.x >= -20 && S.x <= e.width + 20 && S.y >= -20 && S.y <= e.height + 20 && p.push(S);
        }
    return p;
  })() : [];
  return /* @__PURE__ */ n.jsxs("g", { className: "grid", children: [
    (o.coordinateSystem === "polar" || o.coordinateSystem === "both") && /* @__PURE__ */ n.jsx("g", { className: "polar-grid", children: j }),
    (o.coordinateSystem === "cartesian" || o.coordinateSystem === "both") && /* @__PURE__ */ n.jsxs("g", { className: "cartesian-grid", children: [
      u,
      d
    ] }),
    M.map((a, p) => /* @__PURE__ */ n.jsx(
      "circle",
      {
        cx: a.x,
        cy: a.y,
        r: "1.5",
        fill: "#9CA3AF",
        opacity: "0.3"
      },
      `lattice-${p}`
    )),
    O && /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: O.lineStart.x,
        y1: O.lineStart.y,
        x2: O.lineEnd.x,
        y2: O.lineEnd.y,
        stroke: "#A78BFA",
        strokeWidth: "1.5",
        opacity: "0.6",
        strokeDasharray: "5,5"
      }
    ),
    c.shouldShowLabels && /* @__PURE__ */ n.jsxs("g", { className: "labels", fontSize: "12", fill: "#374151", children: [
      h.filter((a) => {
        const p = Math.abs(a.value % l.labelStep) < l.gridSize / 10, y = Math.abs(a.value) >= l.labelStep / 2;
        return p && y;
      }).filter((a, p, y) => !y.slice(0, p).some(
        (f) => Math.abs(f.value - a.value) < 1e-3
      )).map((a) => /* @__PURE__ */ n.jsx(
        "text",
        {
          x: a.x,
          y: s({ x: 0, y: 0 }).y + 20,
          textAnchor: "middle",
          fontSize: i(11),
          fontWeight: "500",
          opacity: Math.max(0.7, c.opacity),
          children: z(a.value, c.gridSize)
        },
        `xlabel${a.value}`
      )),
      m.filter((a) => {
        const p = Math.abs(a.value % l.labelStep) < l.gridSize / 10, y = Math.abs(a.value) >= l.labelStep / 2;
        return p && y;
      }).filter((a, p, y) => !y.slice(0, p).some(
        (f) => Math.abs(f.value - a.value) < 1e-3
      )).map((a) => /* @__PURE__ */ n.jsx(
        "text",
        {
          x: s({ x: 0, y: 0 }).x - 15,
          y: a.y + 4,
          textAnchor: "middle",
          fontSize: i(11),
          fontWeight: "500",
          opacity: Math.max(0.7, c.opacity),
          children: z(a.value, c.gridSize)
        },
        `ylabel${a.value}`
      )),
      /* @__PURE__ */ n.jsx(
        "text",
        {
          x: s({ x: 0, y: 0 }).x - 25,
          y: s({ x: 0, y: 0 }).y - 10,
          fontSize: i(11),
          fontWeight: "600",
          fill: "#374151",
          opacity: Math.max(0.8, c.opacity),
          children: "(0,0)"
        }
      ),
      o.showDivisionAnswer && k.map((a, p) => {
        const y = s({ x: 1, y: 0 }).x;
        return /* @__PURE__ */ n.jsxs("g", { children: [
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: y,
              cy: a.screenY,
              r: "4",
              fill: "white",
              stroke: "#60A5FA",
              strokeWidth: "2",
              opacity: "0.9"
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: y + 15,
              y: a.screenY + 4,
              fontSize: i(10),
              fontWeight: "600",
              fill: "#60A5FA",
              opacity: "0.9",
              children: [
                "y = ",
                a.y.toFixed(2)
              ]
            }
          )
        ] }, `ray-intersection-${p}`);
      })
    ] })
  ] });
}
function Je({ viewport: t, onZoomIn: e, onZoomOut: s, onZoomReset: r, onCenterOnly: o }) {
  const [i, c] = Q(0), l = se(null), h = () => {
    const m = Date.now();
    m - i < 500 ? (l.current && (clearTimeout(l.current), l.current = null), r()) : l.current = window.setTimeout(() => {
      o(), l.current = null;
    }, 300), c(m);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "absolute bottom-4 right-4 flex flex-col gap-2", children: [
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: e,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors",
        title: "Zoom in (Ctrl+scroll up)",
        disabled: t.zoom >= 1e3,
        children: "+"
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: s,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors",
        title: "Zoom out (Ctrl+scroll down)",
        disabled: t.zoom <= 0.01,
        children: "−"
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: h,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-600 text-xs transition-colors",
        title: "Center view (single click) or Reset zoom (double click)",
        children: "⌂"
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "w-10 h-6 bg-white/90 border border-gray-300 rounded text-xs flex items-center justify-center text-gray-600", children: [
      t.zoom >= 1 ? Math.round(t.zoom) : t.zoom.toFixed(1),
      "×"
    ] })
  ] });
}
function Qe({ objects: t, viewport: e, touchTargetSize: s, worldToScreen: r, selectedObjects: o = [], canvasSize: i }) {
  const c = me(), l = (u) => Math.round(u * c.fontScale), h = e.zoom > 50 ? 0.1 : e.zoom > 10 ? 1 : 10, [m, j] = Q(null), k = (u) => {
    const d = o.includes(u.id);
    switch (u.type) {
      case "ray":
        const O = r(u.properties.startPoint), M = r(u.properties.endPoint);
        return /* @__PURE__ */ n.jsxs("g", { children: [
          d && /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: O.x,
              y1: O.y,
              x2: M.x,
              y2: M.y,
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: O.x,
              y1: O.y,
              x2: M.x,
              y2: M.y,
              stroke: d ? "#1D4ED8" : "#2563eb",
              strokeWidth: d ? 3 : 2
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: O.x,
              cy: O.y,
              r: s / 4,
              fill: d ? "#1D4ED8" : "#2563eb",
              stroke: d ? "#60A5FA" : "none",
              strokeWidth: d ? 2 : 0,
              style: { cursor: "move" },
              onMouseEnter: () => j(`${u.id}-start`),
              onMouseLeave: () => j(null)
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: M.x,
              cy: M.y,
              r: s / 4,
              fill: d ? "#1D4ED8" : "#2563eb",
              stroke: d ? "#60A5FA" : "none",
              strokeWidth: d ? 2 : 0,
              style: { cursor: "move" },
              onMouseEnter: () => j(`${u.id}-end`),
              onMouseLeave: () => j(null)
            }
          ),
          !(Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3) && m === `${u.id}-start` && /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: O.x - 5,
              y: O.y - 10,
              fontSize: l(10),
              fontWeight: "500",
              fill: d ? "#1D4ED8" : "#2563eb",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "(",
                z(u.properties.startPoint.x, h),
                ", ",
                z(u.properties.startPoint.y, h),
                ")"
              ]
            }
          ),
          m === `${u.id}-end` && /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3 ? M.x - 60 : M.x + 5,
              y: Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3 ? M.y + 4 : M.y - 10,
              fontSize: l(10),
              fontWeight: "500",
              fill: d ? "#1D4ED8" : "#2563eb",
              textAnchor: Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3 ? "end" : "middle",
              opacity: "0.8",
              children: [
                "(",
                z(u.properties.endPoint.x, h),
                ", ",
                z(u.properties.endPoint.y, h),
                ")"
              ]
            }
          ),
          (() => {
            const E = u.properties.endPoint.x - u.properties.startPoint.x;
            u.properties.endPoint.y - u.properties.startPoint.y;
            const P = Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3;
            if (Math.abs(E) > 1e-3) {
              const S = M.x, _ = M.y;
              if (P) {
                const G = u.properties.endPoint.x, R = u.properties.endPoint.y, X = z(R, h), W = z(G, h);
                return /* @__PURE__ */ n.jsxs("g", { children: [
                  /* @__PURE__ */ n.jsx(
                    "text",
                    {
                      x: S + 15,
                      y: _ - 25,
                      fontSize: l(9),
                      fontWeight: "500",
                      fill: d ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: X
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "line",
                    {
                      x1: S + 8,
                      y1: _ - 19,
                      x2: S + 22,
                      y2: _ - 19,
                      stroke: d ? "#1D4ED8" : "#2563eb",
                      strokeWidth: "1",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "text",
                    {
                      x: S + 15,
                      y: _ - 9,
                      fontSize: l(9),
                      fontWeight: "500",
                      fill: d ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: W
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
            const P = u.properties.endPoint.x, S = u.properties.endPoint.y;
            if (Math.abs(P) < 1e-3 && Math.abs(S) < 1e-3) return null;
            const _ = P, G = S, R = {
              left: e.center.x - i.width / 2 / e.zoom,
              right: e.center.x + i.width / 2 / e.zoom,
              top: e.center.y + i.height / 2 / e.zoom,
              bottom: e.center.y - i.height / 2 / e.zoom
            }, X = Math.max(
              Math.abs(R.left),
              Math.abs(R.right),
              Math.abs(R.top),
              Math.abs(R.bottom)
            ) * 2, W = Math.sqrt(_ * _ + G * G);
            if (W === 0) return null;
            const B = _ / W, Z = G / W, ne = {
              x: X * B,
              y: X * Z
            }, re = r(ne), ie = [];
            if (Math.abs(P) > 1e-3 && Math.abs(S) > 1e-3) {
              const g = S / P;
              for (let b = 1; b <= Math.min(20, Math.abs(X)); b++) {
                const N = g * b, D = Math.round(b / 0.25) * 0.25, q = Math.round(N / 0.25) * 0.25;
                if (Math.abs(b - D) < 0.1 && Math.abs(N - q) < 0.1 && Math.abs(D) <= X && Math.abs(q) <= X) {
                  const U = r({ x: D, y: q });
                  U.x >= -100 && U.x <= i.width + 100 && U.y >= -100 && U.y <= i.height + 100 && ie.push({
                    world: { x: D, y: q },
                    screen: U,
                    fraction: {
                      num: z(q, h),
                      den: z(D, h)
                    }
                  });
                }
              }
            }
            const x = Math.sqrt(P * P + S * S), A = [];
            if (x > 0 && c.showLengthMultiples)
              for (let g = 2; g <= 5; g++) {
                const b = P * g, N = S * g, D = r({ x: b, y: N });
                D.x >= -50 && D.x <= i.width + 50 && D.y >= -50 && D.y <= i.height + 50 && A.push({
                  screen: D,
                  multiple: g
                });
              }
            return /* @__PURE__ */ n.jsxs("g", { children: [
              c.showEquivalentFractions && /* @__PURE__ */ n.jsx(
                "line",
                {
                  x1: M.x,
                  y1: M.y,
                  x2: re.x,
                  y2: re.y,
                  stroke: d ? "#1D4ED8" : "#2563eb",
                  strokeWidth: "1",
                  opacity: "0.3",
                  strokeDasharray: "3,3"
                }
              ),
              A.map((g, b) => /* @__PURE__ */ n.jsxs("g", { children: [
                /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: g.screen.x,
                    cy: g.screen.y,
                    r: "2",
                    fill: d ? "#1D4ED8" : "#2563eb",
                    opacity: "0.4"
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    x: g.screen.x + 8,
                    y: g.screen.y - 8,
                    fontSize: l(7),
                    fontWeight: "400",
                    fill: d ? "#1D4ED8" : "#2563eb",
                    textAnchor: "start",
                    opacity: "0.5",
                    children: [
                      "×",
                      g.multiple
                    ]
                  }
                )
              ] }, `length-${b}`)),
              c.showAreaRectangle && (() => {
                if (P > 0 && S > 0) {
                  const g = r({ x: 0, y: 0 }), b = r({ x: P, y: S }), N = Math.abs(b.x - g.x), D = Math.abs(b.y - g.y), q = Math.min(g.x, b.x), U = Math.min(g.y, b.y), Y = P * S;
                  return /* @__PURE__ */ n.jsxs("g", { children: [
                    /* @__PURE__ */ n.jsx(
                      "rect",
                      {
                        x: q,
                        y: U,
                        width: N,
                        height: D,
                        fill: d ? "#1D4ED8" : "#2563eb",
                        opacity: "0.08",
                        stroke: d ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "0.5",
                        strokeOpacity: "0.15"
                      }
                    ),
                    /* @__PURE__ */ n.jsxs(
                      "text",
                      {
                        x: q + N / 2,
                        y: U + 15,
                        fontSize: l(10),
                        fontWeight: "400",
                        fill: d ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.6",
                        children: [
                          z(S, h),
                          " × ",
                          z(P, h),
                          " = ",
                          z(Y, h)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showRiseRunTriangle && (() => {
                if (P > 0 && S > 0) {
                  const g = r({ x: 0, y: 0 }), b = r({ x: P, y: 0 }), N = r({ x: P, y: S });
                  return /* @__PURE__ */ n.jsxs("g", { children: [
                    /* @__PURE__ */ n.jsx(
                      "path",
                      {
                        d: `M ${g.x},${g.y} L ${b.x},${b.y} L ${N.x},${N.y} Z`,
                        fill: "none",
                        stroke: d ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "1",
                        opacity: "0.4",
                        strokeDasharray: "2,2"
                      }
                    ),
                    /* @__PURE__ */ n.jsxs(
                      "text",
                      {
                        x: b.x + 10,
                        y: (b.y + N.y) / 2,
                        fontSize: l(9),
                        fontWeight: "500",
                        fill: d ? "#1D4ED8" : "#2563eb",
                        textAnchor: "start",
                        opacity: "0.7",
                        children: [
                          "rise: ",
                          z(S, h)
                        ]
                      }
                    ),
                    /* @__PURE__ */ n.jsxs(
                      "text",
                      {
                        x: (g.x + b.x) / 2,
                        y: b.y + 8,
                        fontSize: l(9),
                        fontWeight: "500",
                        fill: d ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.7",
                        children: [
                          "run: ",
                          z(P, h)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showDistanceMarkers && (() => {
                const g = [], b = Math.sqrt(P * P + S * S);
                if (b > 0) {
                  const N = r({ x: 0, y: 0 });
                  let D = Math.atan2(S, P);
                  D < 0 && (D = D + 2 * Math.PI);
                  const q = [];
                  for (let Y = 1; Y <= Math.floor(b); Y++)
                    q.push({ radius: Y, isUnit: !0 });
                  q.push({ radius: b, isUnit: !1 }), q.forEach(({ radius: Y, isUnit: w }, I) => {
                    const T = Y * e.zoom;
                    if (T >= 15 && T <= 800 && Math.abs(D) > 0.05) {
                      const L = D > Math.PI ? 1 : 0, H = `M ${N.x + T},${N.y} A ${T},${T} 0 ${L},0 ${N.x + T * Math.cos(D)},${N.y - T * Math.sin(D)}`;
                      g.push(
                        /* @__PURE__ */ n.jsx(
                          "path",
                          {
                            d: H,
                            fill: "none",
                            stroke: d ? "#1D4ED8" : "#2563eb",
                            strokeWidth: w ? "1" : "1.5",
                            opacity: w ? "0.3" : "0.6",
                            strokeDasharray: w ? "2,2" : "none"
                          },
                          `radial-${u.id}-${Y.toFixed(3)}-${D.toFixed(3)}-${I}`
                        )
                      );
                    }
                  });
                  const U = r({ x: b, y: 0 });
                  g.push(
                    /* @__PURE__ */ n.jsxs("g", { children: [
                      /* @__PURE__ */ n.jsx(
                        "path",
                        {
                          d: `M ${U.x},${N.y} L ${U.x - 4},${N.y + 8} L ${U.x + 4},${N.y + 8} Z`,
                          fill: d ? "#1D4ED8" : "#2563eb",
                          opacity: "0.7"
                        }
                      ),
                      /* @__PURE__ */ n.jsxs(
                        "text",
                        {
                          x: U.x - 15,
                          y: N.y - 8,
                          fontSize: l(8),
                          fontWeight: "600",
                          fill: d ? "#1D4ED8" : "#2563eb",
                          textAnchor: "end",
                          opacity: "0.8",
                          children: [
                            "d = ",
                            b.toFixed(2)
                          ]
                        }
                      )
                    ] }, `distance-${u.id}`)
                  );
                }
                return /* @__PURE__ */ n.jsx("g", { children: g });
              })(),
              c.showAngleArc && (() => {
                let g = Math.atan2(S, P);
                if (g < 0 && (g = g + 2 * Math.PI), Math.abs(P) > 0.05 || Math.abs(S) > 0.05) {
                  const b = r({ x: 0, y: 0 }), N = 50, D = (g * 180 / Math.PI).toFixed(1), q = g, U = g > Math.PI ? 1 : 0, Y = `M ${b.x + N},${b.y} A ${N},${N} 0 ${U},0 ${b.x + N * Math.cos(q)},${b.y - N * Math.sin(q)}`, w = g / 2, I = N * 0.7, T = b.x + I * Math.cos(w), L = b.y - I * Math.sin(w);
                  return /* @__PURE__ */ n.jsxs("g", { children: [
                    /* @__PURE__ */ n.jsx(
                      "path",
                      {
                        d: Y,
                        fill: "none",
                        stroke: d ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "2",
                        opacity: "0.6"
                      }
                    ),
                    /* @__PURE__ */ n.jsxs(
                      "text",
                      {
                        x: T,
                        y: L,
                        fontSize: l(11),
                        fontWeight: "600",
                        fill: d ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.8",
                        children: [
                          "θ = ",
                          D,
                          "°"
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showEquivalentFractions && ie.map((g, b) => {
                const D = Math.abs(g.world.x - 1) < 0.1 && c.showDivisionAnswer, q = Math.abs(g.world.x - P) < 0.1 && Math.abs(g.world.y - S) < 0.1;
                return D || q ? null : /* @__PURE__ */ n.jsxs("g", { children: [
                  /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: g.screen.x,
                      cy: g.screen.y,
                      r: "4",
                      fill: "white",
                      stroke: "#22C55E",
                      strokeWidth: "2",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ n.jsxs(
                    "text",
                    {
                      x: g.screen.x + 15,
                      y: g.screen.y + 4,
                      fontSize: l(9),
                      fontWeight: "500",
                      fill: "#22C55E",
                      textAnchor: "start",
                      opacity: "0.8",
                      children: [
                        g.fraction.num,
                        "/",
                        g.fraction.den
                      ]
                    }
                  )
                ] }, `equiv-${b}`);
              })
            ] });
          })(),
          d && (() => {
            const E = u.properties.endPoint.x, P = u.properties.endPoint.y;
            if (!(Math.abs(u.properties.startPoint.x) < 1e-3 && Math.abs(u.properties.startPoint.y) < 1e-3)) return null;
            const _ = Math.sqrt(E * E + P * P), G = Math.atan2(P, E), R = _ + 1, X = r({
              x: R * Math.cos(G),
              y: R * Math.sin(G)
            }), W = [0.5, 2].map((B) => ({
              factor: B,
              pos: r({
                x: E * B,
                y: P * B
              })
            }));
            return /* @__PURE__ */ n.jsxs("g", { className: "transformation-handles", children: [
              /* @__PURE__ */ n.jsx(
                "circle",
                {
                  cx: X.x,
                  cy: X.y,
                  r: "6",
                  fill: "white",
                  stroke: "#F59E0B",
                  strokeWidth: "2",
                  opacity: "0.9",
                  style: { cursor: "grab" },
                  className: "transform-handle rotation-handle"
                }
              ),
              /* @__PURE__ */ n.jsx(
                "text",
                {
                  x: X.x,
                  y: X.y + 2,
                  fontSize: l(8),
                  fontWeight: "600",
                  fill: "#F59E0B",
                  textAnchor: "middle",
                  opacity: "0.8",
                  style: { pointerEvents: "none" },
                  children: "↻"
                }
              ),
              W.map(({ factor: B, pos: Z }) => /* @__PURE__ */ n.jsxs("g", { children: [
                /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: Z.x,
                    cy: Z.y,
                    r: "5",
                    fill: "white",
                    stroke: "#8B5CF6",
                    strokeWidth: "2",
                    opacity: "0.8",
                    style: { cursor: "nesw-resize" },
                    className: "transform-handle scale-handle",
                    "data-scale-factor": B
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    x: Z.x,
                    y: Z.y + 1,
                    fontSize: l(6),
                    fontWeight: "600",
                    fill: "#8B5CF6",
                    textAnchor: "middle",
                    opacity: "0.7",
                    style: { pointerEvents: "none" },
                    children: [
                      B,
                      "×"
                    ]
                  }
                )
              ] }, `scale-${B}`)),
              [1, -1].map((B) => {
                const Z = G + Math.PI / 2, ne = r({
                  x: E * 0.75 + B * 0.8 * Math.cos(Z),
                  y: P * 0.75 + B * 0.8 * Math.sin(Z)
                });
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: ne.x,
                    cy: ne.y,
                    r: "4",
                    fill: "white",
                    stroke: "#EC4899",
                    strokeWidth: "2",
                    opacity: "0.7",
                    style: { cursor: "pointer" },
                    className: "transform-handle reflection-handle",
                    "data-reflection-axis": B === 1 ? "perpendicular" : "parallel"
                  },
                  `reflect-${B}`
                );
              })
            ] });
          })()
        ] }, u.id);
      case "rectangle":
        const a = r({
          x: u.properties.x,
          y: u.properties.y + u.properties.height
        }), p = u.properties.width * e.zoom, y = u.properties.height * e.zoom, f = { x: u.properties.x, y: u.properties.y }, v = { x: u.properties.x + u.properties.width, y: u.properties.y }, C = { x: u.properties.x, y: u.properties.y + u.properties.height }, $ = { x: u.properties.x + u.properties.width, y: u.properties.y + u.properties.height };
        return /* @__PURE__ */ n.jsxs("g", { children: [
          d && /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: a.x - 3,
              y: a.y - 3,
              width: p + 6,
              height: y + 6,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 4,
              opacity: 0.5,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: a.x,
              y: a.y,
              width: p,
              height: y,
              fill: d ? "rgba(34, 197, 94, 0.3)" : "rgba(34, 197, 94, 0.2)",
              stroke: d ? "#16A34A" : "#22c55e",
              strokeWidth: d ? 3 : 2,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: a.x,
              cy: a.y,
              r: s / 6,
              fill: d ? "#16A34A" : "#22c55e",
              stroke: d ? "#60A5FA" : "none",
              strokeWidth: d ? 2 : 0,
              style: { cursor: "nw-resize" }
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: a.x + p,
              cy: a.y,
              r: s / 6,
              fill: d ? "#16A34A" : "#22c55e",
              stroke: d ? "#60A5FA" : "none",
              strokeWidth: d ? 2 : 0,
              style: { cursor: "ne-resize" }
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: a.x,
              cy: a.y + y,
              r: s / 6,
              fill: d ? "#16A34A" : "#22c55e",
              stroke: d ? "#60A5FA" : "none",
              strokeWidth: d ? 2 : 0,
              style: { cursor: "sw-resize" }
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: a.x + p,
              cy: a.y + y,
              r: s / 6,
              fill: d ? "#16A34A" : "#22c55e",
              stroke: d ? "#60A5FA" : "none",
              strokeWidth: d ? 2 : 0,
              style: { cursor: "se-resize" }
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: a.x - 10,
              y: a.y - 5,
              fontSize: l(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                z(C.x, h),
                ", ",
                z(C.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: a.x + p + 10,
              y: a.y - 5,
              fontSize: l(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                z($.x, h),
                ", ",
                z($.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: a.x - 10,
              y: a.y + y + 15,
              fontSize: l(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                z(f.x, h),
                ", ",
                z(f.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: a.x + p + 10,
              y: a.y + y + 15,
              fontSize: l(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                z(v.x, h),
                ", ",
                z(v.y, h),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: a.x + p / 2,
              y: a.y + y / 2,
              fontSize: l(12),
              fontWeight: "600",
              fill: "#22c55e",
              textAnchor: "middle",
              opacity: "0.9",
              children: [
                z(u.properties.height, h),
                " × ",
                z(u.properties.width, h),
                " = ",
                z(u.properties.area, h)
              ]
            }
          )
        ] }, u.id);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("defs", {}),
    /* @__PURE__ */ n.jsx("g", { className: "objects", children: t.map(k) })
  ] });
}
function Ve({ capabilities: t, viewport: e, activeTool: s, selectedObjectsCount: r }) {
  return t ? /* @__PURE__ */ n.jsxs("div", { className: "absolute top-2 left-2 text-xs text-gray-500 bg-white/80 p-2 rounded shadow-sm", children: [
    /* @__PURE__ */ n.jsxs("div", { children: [
      "Input: ",
      t.hasTouch ? "👆" : "🖱️",
      " ",
      t.hasPencil ? "✏️" : ""
    ] }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      "Zoom: ",
      e.zoom >= 1 ? e.zoom.toFixed(1) : e.zoom.toFixed(2),
      "×"
    ] }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      "Center: (",
      e.center.x.toFixed(1),
      ", ",
      e.center.y.toFixed(1),
      ")"
    ] }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      "Tool: ",
      s || "Pan Mode"
    ] }),
    r > 0 && /* @__PURE__ */ n.jsxs("div", { children: [
      "Selected: ",
      r,
      " object",
      r !== 1 ? "s" : ""
    ] })
  ] }) : null;
}
function et({ selectedObject: t, onDelete: e, onClose: s }) {
  if (!t) return null;
  const r = () => {
    e(), s();
  }, o = () => {
    switch (t.type) {
      case "ray":
        const { startPoint: i, endPoint: c, slope: l } = t.properties, h = Math.abs(i.x) < 1e-3 && Math.abs(i.y) < 1e-3;
        return /* @__PURE__ */ n.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Line Details" }),
          /* @__PURE__ */ n.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ n.jsxs("div", { children: [
              "Start: (",
              z(i.x, 1),
              ", ",
              z(i.y, 1),
              ")"
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              "End: (",
              z(c.x, 1),
              ", ",
              z(c.y, 1),
              ")"
            ] }),
            h && /* @__PURE__ */ n.jsxs("div", { children: [
              "Fraction: ",
              Math.round(c.y),
              "/",
              Math.round(c.x)
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              "Slope: ",
              isFinite(l) ? l.toFixed(3) : "undefined"
            ] })
          ] })
        ] });
      case "rectangle":
        const { x: m, y: j, width: k, height: u, area: d } = t.properties;
        return /* @__PURE__ */ n.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Rectangle Details" }),
          /* @__PURE__ */ n.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ n.jsxs("div", { children: [
              "Position: (",
              z(m, 1),
              ", ",
              z(j, 1),
              ")"
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              "Size: ",
              z(k, 1),
              " × ",
              z(u, 1)
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              "Area: ",
              z(d, 1)
            ] })
          ] })
        ] });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fixed top-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 min-w-48", children: [
    o(),
    /* @__PURE__ */ n.jsxs("div", { className: "mt-3 pt-2 border-t border-gray-100 flex gap-2", children: [
      /* @__PURE__ */ n.jsxs(
        "button",
        {
          onClick: r,
          className: "flex items-center gap-1 px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded transition-colors",
          children: [
            /* @__PURE__ */ n.jsx("span", { children: "🗑️" }),
            "Delete"
          ]
        }
      ),
      /* @__PURE__ */ n.jsxs(
        "button",
        {
          onClick: s,
          className: "flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded transition-colors",
          children: [
            /* @__PURE__ */ n.jsx("span", { children: "✕" }),
            "Close"
          ]
        }
      )
    ] })
  ] });
}
function tt() {
  const [t, e] = Q(!1), s = se(null), r = me(), { toggleSetting: o, setFontScale: i, setGridScale: c, setSnapPrecision: l, setCoordinateSystem: h, resetToDefaults: m } = r;
  te(() => {
    function k(u) {
      s.current && !s.current.contains(u.target) && e(!1);
    }
    if (t)
      return document.addEventListener("mousedown", k), () => {
        document.removeEventListener("mousedown", k);
      };
  }, [t]);
  const j = [
    {
      title: "Origin Lines",
      subtitle: "Enhancements for lines from (0,0)",
      settings: [
        {
          key: "showEquivalentFractions",
          label: "Equivalent Fractions",
          description: "Green circles showing equivalent fractions"
        },
        {
          key: "showLengthMultiples",
          label: "Length Multiples",
          description: "Small dots at 2×, 3×, 4× line length"
        },
        {
          key: "showAreaRectangle",
          label: "Area Rectangle",
          description: "Soft rectangle showing multiplication"
        },
        {
          key: "showRiseRunTriangle",
          label: "Rise/Run Triangle",
          description: "Triangle showing slope components"
        },
        {
          key: "showDistanceMarkers",
          label: "Distance Markers",
          description: "Radial quarter-circles at unit distances"
        },
        {
          key: "showAngleArc",
          label: "Angle Arc",
          description: "Arc showing angle from x-axis with measurement"
        }
      ]
    },
    {
      title: "Division & Fractions",
      subtitle: "Visual fraction and division concepts",
      settings: [
        {
          key: "showDivisionAnswer",
          label: "Division Answer (x=1 line)",
          description: "Blue dot showing y-value at x=1"
        }
      ]
    },
    {
      title: "Grid & Reference",
      subtitle: "Grid enhancements and reference lines",
      settings: [
        {
          key: "showLatticePoints",
          label: "Lattice Points",
          description: "Dots at all integer coordinates"
        },
        {
          key: "showIntegerGridLines",
          label: "Integer Grid Lines",
          description: "Faint lines at whole numbers"
        },
        {
          key: "showReferenceLineY_equals_X",
          label: "y=x Reference Line",
          description: "Purple diagonal line for comparison"
        }
      ]
    },
    {
      title: "Display",
      subtitle: "Adjust visibility for classrooms and large screens",
      settings: []
      // No checkboxes for this section
    }
  ];
  return /* @__PURE__ */ n.jsxs("div", { ref: s, className: "fixed bottom-4 left-4 z-50", children: [
    /* @__PURE__ */ n.jsxs(
      "button",
      {
        onClick: () => e(!t),
        className: "flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors",
        title: "Visualization Settings",
        children: [
          /* @__PURE__ */ n.jsx("span", { className: "text-lg", children: "⚙️" }),
          /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Settings" }),
          /* @__PURE__ */ n.jsx("span", { className: `text-xs transition-transform ${t ? "" : "rotate-180"}`, children: "▼" })
        ]
      }
    ),
    t && /* @__PURE__ */ n.jsxs("div", { className: "absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[28rem] overflow-y-auto", children: [
      /* @__PURE__ */ n.jsx("div", { className: "sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ n.jsx("h3", { className: "text-sm font-semibold text-gray-800", children: "Visualization Settings" }),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: m,
            className: "text-xs text-blue-600 hover:text-blue-800 font-medium",
            children: "Reset All"
          }
        )
      ] }) }),
      /* @__PURE__ */ n.jsx("div", { className: "p-4 space-y-5", children: j.map((k, u) => /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsxs("div", { className: `${u > 0 ? "border-t border-gray-100 pt-4" : ""} mb-3`, children: [
          /* @__PURE__ */ n.jsx("h4", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wide", children: k.title }),
          k.subtitle && /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: k.subtitle })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "space-y-2.5", children: [
          k.settings.map((d) => /* @__PURE__ */ n.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "checkbox",
                checked: r[d.key],
                onChange: () => o(d.key),
                className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              }
            ),
            /* @__PURE__ */ n.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: d.label }),
              /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: d.description })
            ] })
          ] }, d.key)),
          k.title === "Display" && /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Font Size" }),
              /* @__PURE__ */ n.jsxs("span", { className: "text-xs text-gray-500 font-mono", children: [
                Math.round(r.fontScale * 100),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ n.jsx("span", { className: "text-xs text-gray-400", children: "A" }),
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "range",
                  min: "0.8",
                  max: "2.0",
                  step: "0.1",
                  value: r.fontScale,
                  onChange: (d) => i(parseFloat(d.target.value)),
                  className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-600", children: "A" })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: "Increase font size for better visibility on TVs and projectors" }),
            /* @__PURE__ */ n.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Grid Density" }),
                /* @__PURE__ */ n.jsxs("span", { className: "text-xs text-gray-500 font-mono", children: [
                  Math.round(r.gridScale * 100),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ n.jsx("span", { className: "text-xs text-gray-400", children: "Sparse" }),
                /* @__PURE__ */ n.jsx(
                  "input",
                  {
                    type: "range",
                    min: "0.2",
                    max: "5.0",
                    step: "0.1",
                    value: r.gridScale,
                    onChange: (d) => c(parseFloat(d.target.value)),
                    className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  }
                ),
                /* @__PURE__ */ n.jsx("span", { className: "text-xs text-gray-600", children: "Dense" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: "Adjust grid line spacing for different zoom levels and detail needs" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Coordinate System" }),
              /* @__PURE__ */ n.jsx("div", { className: "space-y-2", children: [
                { value: "cartesian", label: "Cartesian Only", desc: "Standard x-y grid" },
                { value: "polar", label: "Polar Only", desc: "Circular coordinate system" },
                { value: "both", label: "Both Systems", desc: "Overlay polar on Cartesian" }
              ].map((d) => /* @__PURE__ */ n.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ n.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "coordinateSystem",
                    value: d.value,
                    checked: r.coordinateSystem === d.value,
                    onChange: (O) => h(O.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ n.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: d.label }),
                  /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500", children: d.desc })
                ] })
              ] }, d.value)) })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Snap Precision" }),
              /* @__PURE__ */ n.jsx("div", { className: "space-y-2", children: [
                { value: "adaptive", label: "Adaptive", desc: "Automatically adjusts based on zoom level" },
                { value: "whole", label: "Whole Numbers", desc: "Snap to 1, 2, 3, etc." },
                { value: "half", label: "Half Units", desc: "Snap to 0.5, 1.0, 1.5, etc." },
                { value: "quarter", label: "Quarter Units", desc: "Snap to 0.25, 0.5, 0.75, etc." },
                { value: "tenth", label: "Tenth Units", desc: "Snap to 0.1, 0.2, 0.3, etc." }
              ].map((d) => /* @__PURE__ */ n.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ n.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "snapPrecision",
                    value: d.value,
                    checked: r.snapPrecision === d.value,
                    onChange: (O) => l(O.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ n.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: d.label }),
                  /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500", children: d.desc })
                ] })
              ] }, d.value)) }),
              /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: "Controls where objects can be placed when snap-to-grid is enabled" })
            ] })
          ] })
        ] })
      ] }, k.title)) }),
      /* @__PURE__ */ n.jsx("div", { className: "sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg", children: /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Toggle features to explore different mathematical concepts" }) })
    ] })
  ] });
}
const Ee = (t, e) => {
  const s = e * Math.PI / 180, r = Math.cos(s), o = Math.sin(s);
  return {
    x: t.x * r - t.y * o,
    y: t.x * o + t.y * r
  };
}, st = (t, e) => ({
  x: t.x * e,
  y: t.y * e
}), ke = (t, e) => {
  switch (e) {
    case "x":
      return { x: t.x, y: -t.y };
    case "y":
      return { x: -t.x, y: t.y };
    case "origin":
      return { x: -t.x, y: -t.y };
    default:
      return t;
  }
}, nt = fe((t, e) => ({
  isTransforming: !1,
  activeTransform: null,
  selectedObject: null,
  rotateObject: (s, r, o) => {
    if (!o) {
      console.log(`No canvas API provided for rotation of ${s}`);
      return;
    }
    const i = o.getObject(s);
    if (i) {
      if (i.type === "ray") {
        if (Math.abs(i.properties.startPoint.x) < 1e-3 && Math.abs(i.properties.startPoint.y) < 1e-3) {
          const l = Ee(i.properties.endPoint, r);
          o.updateObject(s, {
            properties: {
              ...i.properties,
              endPoint: l
            }
          });
        }
      } else if (i.type === "rectangle") {
        const c = i.properties.x + i.properties.width / 2, l = i.properties.y + i.properties.height / 2, h = {
          x: i.properties.x - c,
          y: i.properties.y - l
        }, m = Ee(h, r);
        o.updateObject(s, {
          properties: {
            ...i.properties,
            x: m.x + c,
            y: m.y + l
          }
        });
      }
    }
  },
  scaleObject: (s, r, o) => {
    if (!o) {
      console.log(`No canvas API provided for scaling of ${s}`);
      return;
    }
    const i = o.getObject(s);
    if (i)
      if (i.type === "ray") {
        if (Math.abs(i.properties.startPoint.x) < 1e-3 && Math.abs(i.properties.startPoint.y) < 1e-3) {
          const l = st(i.properties.endPoint, r);
          o.updateObject(s, {
            properties: {
              ...i.properties,
              endPoint: l
            }
          });
        }
      } else i.type === "rectangle" && o.updateObject(s, {
        properties: {
          ...i.properties,
          width: i.properties.width * r,
          height: i.properties.height * r,
          area: i.properties.width * r * i.properties.height * r
        }
      });
  },
  reflectObject: (s, r, o) => {
    if (!o) {
      console.log(`No canvas API provided for reflection of ${s}`);
      return;
    }
    const i = o.getObject(s);
    if (i) {
      if (i.type === "ray") {
        if (Math.abs(i.properties.startPoint.x) < 1e-3 && Math.abs(i.properties.startPoint.y) < 1e-3) {
          const l = ke(i.properties.endPoint, r);
          o.updateObject(s, {
            properties: {
              ...i.properties,
              endPoint: l
            }
          });
        }
      } else if (i.type === "rectangle") {
        const c = ke({ x: i.properties.x, y: i.properties.y }, r);
        o.updateObject(s, {
          properties: {
            ...i.properties,
            x: c.x,
            y: c.y
          }
        });
      }
    }
  },
  rotate90: (s, r) => {
    e().rotateObject(s, 90, r);
  },
  rotate180: (s, r) => {
    e().rotateObject(s, 180, r);
  },
  rotate270: (s, r) => {
    e().rotateObject(s, 270, r);
  },
  setActiveTransform: (s) => {
    t({
      activeTransform: s,
      isTransforming: s !== null
    });
  },
  setSelectedObject: (s) => {
    t({ selectedObject: s });
  },
  clearTransform: () => {
    t({
      isTransforming: !1,
      activeTransform: null,
      selectedObject: null
    });
  }
}));
function rt(t, e, s) {
  const r = s.x - e.x, o = s.y - e.y, i = Math.sqrt(r * r + o * o);
  if (i === 0) return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
  const c = Math.max(0, Math.min(1, ((t.x - e.x) * r + (t.y - e.y) * o) / (i * i))), l = {
    x: e.x + c * r,
    y: e.y + c * o
  };
  return Math.sqrt(Math.pow(t.x - l.x, 2) + Math.pow(t.y - l.y, 2));
}
function it({
  width: t = 800,
  height: e = 600,
  className: s = "",
  onObjectInteraction: r
}) {
  const o = se(null), {
    viewport: i,
    setViewport: c,
    objects: l,
    selectedObjects: h,
    snapToGrid: m,
    gridDensity: j,
    canvasSize: k,
    setCanvasSize: u,
    removeObject: d,
    clearSelection: O,
    selectObject: M,
    screenToWorld: a,
    worldToScreen: p
  } = V(), y = Xe(), { activeTool: f, setActiveTool: v, eventBus: C } = pe(), { rotate90: $, rotate180: E, rotate270: P, scaleObject: S, setSelectedObject: _ } = nt();
  te(() => {
    u({ width: t, height: e });
  }, [t, e, u]);
  const G = se({
    isPanning: !1,
    startPoint: { x: 0, y: 0 },
    startCenter: { x: 0, y: 0 }
  }), R = se({
    isDown: !1,
    startPoint: { x: 0, y: 0 },
    hasMoved: !1,
    dragThreshold: 5,
    // pixels
    pendingSelection: null
  }), [X, W] = Q(null), [B, Z] = Q(!1), ne = K((w) => {
    const I = { x: w.x, y: w.y };
    R.current = {
      isDown: !0,
      startPoint: I,
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    };
    const T = 22;
    a(I);
    let L = !1;
    for (const F of l)
      if (F.type === "ray") {
        const H = p(F.properties.startPoint), ee = p(F.properties.endPoint), oe = Math.sqrt(
          Math.pow(I.x - H.x, 2) + Math.pow(I.y - H.y, 2)
        ), he = Math.sqrt(
          Math.pow(I.x - ee.x, 2) + Math.pow(I.y - ee.y, 2)
        );
        if (oe <= T || he <= T) {
          L = !0, R.current.pendingSelection = { objectId: F.id, type: "ray" }, M(F.id);
          break;
        }
        if (rt(I, H, ee) <= 8) {
          L = !0, R.current.pendingSelection = { objectId: F.id, type: "ray" }, M(F.id);
          break;
        }
      } else if (F.type === "rectangle") {
        const H = p({
          x: F.properties.x,
          y: F.properties.y + F.properties.height
        }), ee = F.properties.width * i.zoom, oe = F.properties.height * i.zoom;
        if (I.x >= H.x && I.x <= H.x + ee && I.y >= H.y && I.y <= H.y + oe) {
          L = !0, R.current.pendingSelection = { objectId: F.id, type: "rectangle" }, M(F.id);
          break;
        }
        if ([
          { x: H.x, y: H.y },
          // top-left
          { x: H.x + ee, y: H.y },
          // top-right  
          { x: H.x, y: H.y + oe },
          // bottom-left
          { x: H.x + ee, y: H.y + oe }
          // bottom-right
        ].some((ge) => Math.sqrt(
          Math.pow(I.x - ge.x, 2) + Math.pow(I.y - ge.y, 2)
        ) <= T)) {
          L = !0, R.current.pendingSelection = { objectId: F.id, type: "rectangle" }, M(F.id);
          break;
        }
      }
    (!L && !f || !L && f) && O(), (f || L) && y.handlePointerDown(w), !L && !f && (w.type === "touch" || w.type === "mouse") && (G.current = {
      isPanning: !0,
      startPoint: { x: w.x, y: w.y },
      startCenter: { ...i.center }
    });
  }, [i.center, y, f, v, l, a, p, i.zoom]), re = K((w) => {
    const I = { x: w.x, y: w.y };
    if (w.type === "mouse" && f ? W(I) : f || W(null), R.current.isDown && !R.current.hasMoved) {
      const T = Math.abs(w.x - R.current.startPoint.x), L = Math.abs(w.y - R.current.startPoint.y);
      Math.sqrt(T * T + L * L) >= R.current.dragThreshold && (R.current.hasMoved = !0, R.current.pendingSelection = null);
    }
    if (y.handlePointerMove(w), !f && G.current.isPanning) {
      const T = (w.x - G.current.startPoint.x) / i.zoom, L = (w.y - G.current.startPoint.y) / i.zoom;
      c({
        center: {
          x: G.current.startCenter.x - T,
          y: G.current.startCenter.y + L
          // Flip Y for mathematical coordinates
        }
      });
    }
  }, [i.zoom, c, y, f, W]), ie = K((w) => {
    R.current = {
      isDown: !1,
      startPoint: { x: 0, y: 0 },
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    }, y.handlePointerUp(w), G.current.isPanning = !1;
  }, [y, v]), x = K((w) => {
    switch (w.type) {
      case "pinch":
        if (w.scale) {
          const I = Math.max(0.1, Math.min(10, i.zoom * w.scale));
          c({ zoom: I });
        }
        break;
    }
  }, [i.zoom, c]), { capabilities: A, touchTargetSize: g } = qe(
    o,
    {
      onPointerDown: ne,
      onPointerMove: re,
      onPointerUp: ie,
      onGesture: x
    },
    {
      enableGestures: !0,
      preventScrolling: !0
    }
  );
  te(() => {
    const w = (T) => {
      switch (T.key) {
        case "Escape":
          f && (C.emit("tool:cancel", { toolId: f }), v(null));
          break;
        case "Delete":
        case "Backspace":
          h.length > 0 && (console.log("Deleting objects:", h), h.forEach((L) => {
            C.emit("object:removed", { objectId: L }), d(L);
          }), O(), v(null));
          break;
        case "r":
        case "R":
          if (h.length > 0 && !T.ctrlKey) {
            T.preventDefault();
            const L = { getObject, updateObject };
            h.forEach((F) => {
              T.shiftKey ? P(F, L) : $(F, L);
            });
          }
          break;
        case "f":
        case "F":
          if (h.length > 0 && !T.ctrlKey) {
            T.preventDefault();
            const L = { getObject, updateObject };
            h.forEach((F) => {
              E(F, L);
            });
          }
          break;
        case "=":
        case "+":
          if (h.length > 0 && !T.ctrlKey) {
            T.preventDefault();
            const L = { getObject, updateObject };
            h.forEach((F) => {
              S(F, 2, L);
            });
          }
          break;
        case "-":
        case "_":
          if (h.length > 0 && !T.ctrlKey) {
            T.preventDefault();
            const L = { getObject, updateObject };
            h.forEach((F) => {
              S(F, 0.5, L);
            });
          }
          break;
      }
    }, I = (T) => {
      console.log("Object created, returning to pan mode:", T), O(), v(null);
    };
    return document.addEventListener("keydown", w), C.on("tool:creation-complete", I), () => {
      document.removeEventListener("keydown", w), C.off("tool:creation-complete", I);
    };
  }, [f, v, C, h, d, O]), te(() => {
    h.length === 1 ? Z(!0) : Z(!1);
  }, [h]);
  const b = K(() => {
    Z(!1);
  }, []), N = K(() => {
    h.length > 0 && (h.forEach((w) => {
      C.emit("object:removed", { objectId: w }), d(w);
    }), O());
  }, [h, d, O, C]), D = K(() => {
    const w = Math.min(1e3, i.zoom * 1.4);
    c({ zoom: w });
  }, [i.zoom, c]), q = K(() => {
    const w = Math.max(0.01, i.zoom / 1.4);
    c({ zoom: w });
  }, [i.zoom, c]), U = K(() => {
    c({ zoom: 20, center: { x: 0, y: 0 } });
  }, [c]), Y = K(() => {
    c({ center: { x: 0, y: 0 } });
  }, [c]);
  return te(() => {
    const w = (T) => {
      T.preventDefault();
      const F = V.getState().viewport;
      if (T.ctrlKey || T.metaKey) {
        const H = T.deltaY > 0 ? 0.9 : 1.1, ee = Math.max(0.01, Math.min(1e3, F.zoom * H));
        c({ zoom: ee });
      } else {
        const ee = T.shiftKey ? T.deltaY : 0, oe = T.shiftKey ? 0 : T.deltaY, he = ee * 1 / F.zoom, ye = oe * 1 / F.zoom;
        c({
          center: {
            x: F.center.x + he,
            y: F.center.y - ye
            // subtract because scroll down should move view down
          }
        });
      }
    }, I = o.current;
    if (I)
      return I.addEventListener("wheel", w, { passive: !1 }), () => {
        I.removeEventListener("wheel", w);
      };
  }, [c]), /* @__PURE__ */ n.jsxs("div", { className: `relative ${s}`, style: { width: t, height: e }, children: [
    /* @__PURE__ */ n.jsxs(
      "svg",
      {
        ref: o,
        width: t,
        height: e,
        className: "absolute inset-0 bg-white",
        style: { touchAction: "none" },
        children: [
          /* @__PURE__ */ n.jsx(
            Ke,
            {
              viewport: i,
              canvasSize: { width: t, height: e },
              worldToScreen: p,
              objects: l
            }
          ),
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              objects: l,
              viewport: i,
              touchTargetSize: g,
              worldToScreen: p,
              selectedObjects: h,
              canvasSize: { width: t, height: e }
            }
          ),
          f && X && !R.current.isDown && /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: X.x,
              cy: X.y,
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
    /* @__PURE__ */ n.jsx(
      Ve,
      {
        capabilities: A,
        viewport: i,
        activeTool: f,
        selectedObjectsCount: h.length
      }
    ),
    /* @__PURE__ */ n.jsx(
      Je,
      {
        viewport: i,
        onZoomIn: D,
        onZoomOut: q,
        onZoomReset: U,
        onCenterOnly: Y
      }
    ),
    B && h.length === 1 && /* @__PURE__ */ n.jsx(
      et,
      {
        selectedObject: l.find((w) => w.id === h[0]) || null,
        onDelete: N,
        onClose: b
      }
    ),
    /* @__PURE__ */ n.jsx(tt, {})
  ] });
}
const Oe = [
  {
    id: "ray-tool",
    name: "Line Builder",
    icon: "📏",
    description: "Create and edit lines to explore slopes and fractions"
  },
  {
    id: "rectangle-tool",
    name: "Rectangle Builder",
    icon: "⬜",
    description: "Create rectangles to explore area and multiplication"
  }
];
function ot({ className: t = "" }) {
  const { activeTool: e, setActiveTool: s } = pe(), [r, o] = Q(!1), i = se(null), c = (j) => {
    s(j), o(!1);
  }, l = () => {
    s(null), o(!1);
  }, h = () => {
    o(!r);
  }, m = Oe.find((j) => j.id === e);
  return te(() => {
    const j = (k) => {
      i.current && !i.current.contains(k.target) && o(!1);
    };
    return r && document.addEventListener("mousedown", j), () => {
      document.removeEventListener("mousedown", j);
    };
  }, [r]), /* @__PURE__ */ n.jsxs("div", { className: `flex items-center gap-2 p-2 bg-white border-b border-gray-200 ${t}`, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
      /* @__PURE__ */ n.jsx("div", { className: "text-2xl", children: "🟦" }),
      /* @__PURE__ */ n.jsx("h1", { className: "text-lg font-semibold text-gray-800", children: "Grix" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "relative", ref: i, children: [
      /* @__PURE__ */ n.jsxs(
        "button",
        {
          onClick: h,
          className: `
            flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
            ${e ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}
          `,
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "text-lg", children: "🏗️" }),
            /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium", children: m ? m.name : "Build" }),
            /* @__PURE__ */ n.jsx("span", { className: `text-xs transition-transform ${r ? "rotate-180" : ""}`, children: "▼" })
          ]
        }
      ),
      r && /* @__PURE__ */ n.jsxs("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48", children: [
        Oe.map((j) => /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: () => c(j.id),
            className: `
                  w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors
                  ${e === j.id ? "bg-blue-50 text-blue-700" : "text-gray-700"}
                `,
            title: j.description,
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "text-lg", children: j.icon }),
              /* @__PURE__ */ n.jsxs("div", { children: [
                /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium", children: j.name }),
                /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500", children: j.description })
              ] })
            ]
          },
          j.id
        )),
        e && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("div", { className: "border-t border-gray-100" }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: l,
              className: "w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg transition-colors text-gray-600",
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "text-lg", children: "✕" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm", children: "Clear selection" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "ml-auto flex items-center gap-4 text-sm text-gray-500", children: e ? /* @__PURE__ */ n.jsxs("span", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ n.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" }),
      (m == null ? void 0 : m.name) || "Active Tool"
    ] }) : /* @__PURE__ */ n.jsxs("span", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ n.jsx("div", { className: "w-2 h-2 bg-gray-300 rounded-full" }),
      "Click Build to start creating"
    ] }) })
  ] });
}
class Ce extends xe.Component {
  constructor(e) {
    super(e), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(e) {
    return {
      hasError: !0,
      error: e
    };
  }
  componentDidCatch(e, s) {
    console.error("Canvas Error Boundary caught an error:", e, s), this.setState({
      error: e,
      errorInfo: s
    });
  }
  render() {
    var e, s;
    if (this.state.hasError) {
      const r = this.props.fallback;
      return r ? /* @__PURE__ */ n.jsx(r, { error: this.state.error }) : /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-center h-full bg-red-50 text-red-700 p-8", children: /* @__PURE__ */ n.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ n.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Something went wrong with the Canvas" }),
        /* @__PURE__ */ n.jsxs("details", { className: "text-sm", children: [
          /* @__PURE__ */ n.jsx("summary", { className: "cursor-pointer mb-2", children: "Error Details" }),
          /* @__PURE__ */ n.jsxs("pre", { className: "whitespace-pre-wrap text-left bg-red-100 p-4 rounded", children: [
            (e = this.state.error) == null ? void 0 : e.toString(),
            (s = this.state.errorInfo) == null ? void 0 : s.componentStack
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
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
class at {
  constructor() {
    J(this, "id", "ray-tool");
    J(this, "name", "Line Builder");
    J(this, "context");
    J(this, "state", {
      isCreating: !1,
      startPoint: null,
      currentRay: null,
      dragTarget: null,
      dragOffset: null
    });
  }
  init(e) {
    this.context = e, e.events.on("tool:changed", this.handleToolChange.bind(this)), e.events.on("tool:cancel", this.handleToolCancel.bind(this));
  }
  destroy() {
    this.context.events.off("tool:changed", this.handleToolChange.bind(this)), this.context.events.off("tool:cancel", this.handleToolCancel.bind(this));
  }
  handleToolChange(e) {
    e.current !== this.id && this.cancelCreation();
  }
  handleToolCancel(e) {
    e.toolId === this.id && this.cancelCreation();
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
  snapPoint(e) {
    const s = this.context.state.getState();
    if (s.snapToGrid) {
      const r = s.viewport;
      let o;
      return r.zoom >= 50 ? o = 0.1 : r.zoom >= 20 ? o = 0.25 : r.zoom >= 10 ? o = 0.5 : o = s.gridDensity === "fine" ? 1 : 10, this.context.math.snapToGrid(e, o);
    }
    return e;
  }
  findNearestHandle(e, s = 20) {
    this.context.canvas.screenToWorld(e);
    const r = this.context.canvas.getAllObjects();
    for (const o of r)
      if (o.type === "ray") {
        const i = o, c = this.context.canvas.worldToScreen(i.properties.startPoint), l = this.context.canvas.worldToScreen(i.properties.endPoint), h = this.context.math.distance(e, c), m = this.context.math.distance(e, l);
        if (h <= s)
          return { rayId: i.id, handle: "start" };
        if (m <= s)
          return { rayId: i.id, handle: "end" };
        const j = 8, k = l.x - c.x, u = l.y - c.y, d = Math.sqrt(k * k + u * u);
        if (d > 0) {
          const O = Math.max(0, Math.min(1, ((e.x - c.x) * k + (e.y - c.y) * u) / (d * d))), M = {
            x: c.x + O * k,
            y: c.y + O * u
          };
          if (this.context.math.distance(e, M) <= j)
            return { rayId: i.id, handle: "move" };
        }
      }
    return null;
  }
  onPointerDown(e) {
    const s = { x: e.x, y: e.y }, r = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.findNearestHandle(s);
    if (o) {
      const i = this.context.canvas.getObject(o.rayId), c = this.context.state.getState().selectedObjects;
      if (i && c.includes(o.rayId)) {
        this.state.currentRay = i, this.state.dragTarget = o.handle, this.state.isCreating = !1, o.handle === "move" && (this.state.dragOffset = {
          x: r.x - i.properties.startPoint.x,
          y: r.y - i.properties.startPoint.y
        });
        return;
      }
    }
    if (!this.state.isCreating) {
      this.state.isCreating = !0, this.state.startPoint = r;
      const i = {
        id: this.generateId(),
        type: "ray",
        properties: {
          startPoint: r,
          endPoint: { ...r },
          // Start with same point
          slope: 0,
          yIntercept: r.y
        },
        visible: !0,
        selected: !1
      };
      this.state.currentRay = i, this.context.canvas.addObject(i);
    }
  }
  onPointerMove(e) {
    if (!this.state.currentRay) return;
    const s = { x: e.x, y: e.y }, r = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating) {
      const o = this.context.math.slope(this.state.currentRay.properties.startPoint, r), i = r.y - o * r.x;
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: {
          ...this.state.currentRay.properties,
          endPoint: r,
          slope: o,
          yIntercept: isFinite(o) ? i : this.state.currentRay.properties.startPoint.y
        }
      });
    } else if (this.state.dragTarget) {
      const o = this.context.canvas.getObject(this.state.currentRay.id);
      if (!o) return;
      const i = { ...o.properties };
      if (this.state.dragTarget === "start")
        i.startPoint = r;
      else if (this.state.dragTarget === "end")
        i.endPoint = r;
      else if (this.state.dragTarget === "move" && this.state.dragOffset) {
        const c = r.x - this.state.dragOffset.x - o.properties.startPoint.x, l = r.y - this.state.dragOffset.y - o.properties.startPoint.y;
        i.startPoint = {
          x: o.properties.startPoint.x + c,
          y: o.properties.startPoint.y + l
        }, i.endPoint = {
          x: o.properties.endPoint.x + c,
          y: o.properties.endPoint.y + l
        };
      }
      if (this.state.dragTarget === "start" || this.state.dragTarget === "end") {
        const c = this.context.math.slope(i.startPoint, i.endPoint);
        i.slope = c, i.yIntercept = isFinite(c) ? i.startPoint.y - c * i.startPoint.x : i.startPoint.y;
      }
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: i
      });
    }
    this.context.events.emit("ray:update", {
      rayId: this.state.currentRay.id,
      ray: this.context.canvas.getObject(this.state.currentRay.id)
    });
  }
  onPointerUp(e) {
    if (this.state.isCreating && this.state.currentRay) {
      const s = { x: e.x, y: e.y }, r = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.state.currentRay.properties.startPoint;
      this.context.math.distance(o, r) < 0.1 ? this.context.canvas.removeObject(this.state.currentRay.id) : (this.context.events.emit("ray:created", {
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
function ct() {
  return new at();
}
class lt {
  constructor() {
    J(this, "id", "rectangle-tool");
    J(this, "name", "Rectangle Builder");
    J(this, "context");
    J(this, "state", {
      isCreating: !1,
      startPoint: null,
      currentRectangle: null,
      dragTarget: null,
      dragOffset: null,
      lockedCorner: null
    });
  }
  init(e) {
    this.context = e, e.events.on("tool:changed", this.handleToolChange.bind(this)), e.events.on("tool:cancel", this.handleToolCancel.bind(this));
  }
  destroy() {
    this.context.events.off("tool:changed", this.handleToolChange.bind(this)), this.context.events.off("tool:cancel", this.handleToolCancel.bind(this));
  }
  handleToolChange(e) {
    e.current !== this.id && this.cancelCreation();
  }
  handleToolCancel(e) {
    e.toolId === this.id && this.cancelCreation();
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
  snapPoint(e) {
    const s = this.context.state.getState();
    if (s.snapToGrid) {
      const r = s.viewport;
      let o;
      return r.zoom >= 50 ? o = 0.1 : r.zoom >= 20 ? o = 0.25 : r.zoom >= 10 ? o = 0.5 : o = s.gridDensity === "fine" ? 1 : 10, this.context.math.snapToGrid(e, o);
    }
    return e;
  }
  findRectangleAtPoint(e) {
    const s = this.context.canvas.getAllObjects();
    for (const r of s)
      if (r.type === "rectangle") {
        const o = r, { x: i, y: c, width: l, height: h } = o.properties;
        if (e.x >= i && e.x <= i + l && e.y >= c && e.y <= c + h)
          return o;
      }
    return null;
  }
  findNearestCorner(e, s, r = 0.5) {
    const { x: o, y: i, width: c, height: l } = s.properties, h = [
      { point: { x: o, y: i }, type: "corner-bl" },
      // bottom-left
      { point: { x: o + c, y: i }, type: "corner-br" },
      // bottom-right
      { point: { x: o, y: i + l }, type: "corner-tl" },
      // top-left
      { point: { x: o + c, y: i + l }, type: "corner-tr" }
      // top-right
    ];
    for (const m of h)
      if (this.context.math.distance(e, m.point) <= r)
        return m.type;
    return null;
  }
  onPointerDown(e) {
    const s = { x: e.x, y: e.y }, r = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.findRectangleAtPoint(r);
    if (o && this.context.state.getState().selectedObjects.includes(o.id)) {
      const l = this.findNearestCorner(r, o);
      if (l) {
        this.state.currentRectangle = o, this.state.dragTarget = l, this.state.isCreating = !1;
        const { x: h, y: m, width: j, height: k } = o.properties;
        switch (l) {
          case "corner-tl":
            this.state.lockedCorner = { x: h + j, y: m };
            break;
          case "corner-tr":
            this.state.lockedCorner = { x: h, y: m };
            break;
          case "corner-bl":
            this.state.lockedCorner = { x: h + j, y: m + k };
            break;
          case "corner-br":
            this.state.lockedCorner = { x: h, y: m + k };
            break;
        }
        return;
      } else {
        this.state.currentRectangle = o, this.state.dragTarget = "move", this.state.dragOffset = {
          x: r.x - o.properties.x,
          y: r.y - o.properties.y
        }, this.state.isCreating = !1;
        return;
      }
    }
    this.state.isCreating = !0, this.state.startPoint = r;
    const i = {
      id: this.generateId(),
      type: "rectangle",
      properties: {
        x: r.x,
        y: r.y,
        width: 0,
        height: 0,
        area: 0
      },
      visible: !0,
      selected: !1
    };
    this.state.currentRectangle = i, this.context.canvas.addObject(i);
  }
  onPointerMove(e) {
    if (!this.state.currentRectangle) return;
    const s = { x: e.x, y: e.y }, r = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.startPoint) {
      const o = Math.min(this.state.startPoint.x, r.x), i = Math.min(this.state.startPoint.y, r.y), c = Math.abs(r.x - this.state.startPoint.x), l = Math.abs(r.y - this.state.startPoint.y), h = c * l;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: o,
          y: i,
          width: c,
          height: l,
          area: h
        }
      });
    } else if (this.state.dragTarget === "move" && this.state.dragOffset) {
      const o = r.x - this.state.dragOffset.x, i = r.y - this.state.dragOffset.y;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          ...this.state.currentRectangle.properties,
          x: o,
          y: i
        }
      });
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith("corner-") && this.state.lockedCorner) {
      const o = this.state.lockedCorner, i = Math.min(r.x, o.x), c = Math.max(r.x, o.x), l = Math.min(r.y, o.y), h = Math.max(r.y, o.y), m = i, j = l, k = c - i, u = h - l, d = Math.max(0.1, k), O = Math.max(0.1, u), M = d * O;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: m,
          y: j,
          width: d,
          height: O,
          area: M
        }
      });
    }
    this.context.events.emit("rectangle:update", {
      rectangleId: this.state.currentRectangle.id,
      rectangle: this.context.canvas.getObject(this.state.currentRectangle.id)
    });
  }
  onPointerUp(e) {
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
function dt() {
  return new lt();
}
class ht {
  constructor() {
    J(this, "id", "area-counter");
    J(this, "name", "Area Counter");
    J(this, "context");
    J(this, "badges", /* @__PURE__ */ new Map());
    J(this, "badgeElements", /* @__PURE__ */ new Map());
  }
  init(e) {
    this.context = e, e.events.on("rectangle:created", this.handleRectangleCreated.bind(this)), e.events.on("rectangle:update", this.handleRectangleUpdated.bind(this)), e.events.on("object:removed", this.handleObjectRemoved.bind(this)), this.createBadgesForExistingRectangles();
    const s = e.state.subscribe((r) => {
      this.updateBadgePositions();
    });
    this.unsubscribeFromState = s;
  }
  destroy() {
    this.context.events.off("rectangle:created", this.handleRectangleCreated.bind(this)), this.context.events.off("rectangle:update", this.handleRectangleUpdated.bind(this)), this.context.events.off("object:removed", this.handleObjectRemoved.bind(this)), this.unsubscribeFromState && this.unsubscribeFromState(), this.badgeElements.forEach((e) => {
      e.remove();
    }), this.badgeElements.clear(), this.badges.clear();
  }
  createBadgesForExistingRectangles() {
    this.context.canvas.getAllObjects().forEach((s) => {
      s.type === "rectangle" && this.createBadge(s);
    });
  }
  handleRectangleCreated(e) {
    this.createBadge(e.rectangle);
  }
  handleRectangleUpdated(e) {
    this.updateBadge(e.rectangle);
  }
  handleObjectRemoved(e) {
    this.removeBadge(e.objectId);
  }
  createBadge(e) {
    const s = {
      rectangleId: e.id,
      x: e.properties.x,
      y: e.properties.y,
      width: e.properties.width,
      height: e.properties.height,
      area: e.properties.area,
      visible: !0
    };
    this.badges.set(e.id, s), this.createBadgeElement(s);
  }
  updateBadge(e) {
    const s = this.badges.get(e.id);
    s && (s.x = e.properties.x, s.y = e.properties.y, s.width = e.properties.width, s.height = e.properties.height, s.area = e.properties.area, this.updateBadgeElement(s));
  }
  removeBadge(e) {
    const s = this.badgeElements.get(e);
    s && (s.remove(), this.badgeElements.delete(e)), this.badges.delete(e);
  }
  createBadgeElement(e) {
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
    `, (document.querySelector("[data-grix-canvas]") || document.body).appendChild(s), this.badgeElements.set(e.rectangleId, s), this.updateBadgeElement(e);
  }
  updateBadgeElement(e) {
    const s = this.badgeElements.get(e.rectangleId);
    if (!s) return;
    const r = e.x + e.width / 2, o = e.y + e.height / 2, i = this.context.canvas.worldToScreen({ x: r, y: o }), c = this.formatArea(e.area, e.width, e.height);
    s.textContent = c;
    const l = s.getBoundingClientRect();
    s.style.left = `${i.x - l.width / 2}px`, s.style.top = `${i.y - l.height / 2}px`;
    const h = this.context.state.getState(), m = 30, j = e.width * h.viewport.zoom, k = e.height * h.viewport.zoom;
    s.style.display = j >= m && k >= m ? "block" : "none";
  }
  formatArea(e, s, r) {
    const o = Math.abs(s - Math.round(s)) < 1e-3, i = Math.abs(r - Math.round(r)) < 1e-3;
    if (o && i) {
      const c = Math.round(s), l = Math.round(r);
      return `${l} × ${c} = ${l * c}`;
    }
    return e >= 1e3 ? `${e.toFixed(0)} sq units` : e >= 10 ? `${e.toFixed(1)} sq units` : `${e.toFixed(2)} sq units`;
  }
  updateBadgePositions() {
    this.badges.forEach((e) => {
      this.updateBadgeElement(e);
    });
  }
  // Additional public methods for external control
  showBadge(e) {
    const s = this.badges.get(e);
    s && (s.visible = !0, this.updateBadgeElement(s));
  }
  hideBadge(e) {
    const s = this.badges.get(e);
    if (s) {
      s.visible = !1;
      const r = this.badgeElements.get(e);
      r && (r.style.display = "none");
    }
  }
  showAllBadges() {
    this.badges.forEach((e, s) => {
      this.showBadge(s);
    });
  }
  hideAllBadges() {
    this.badges.forEach((e, s) => {
      this.hideBadge(s);
    });
  }
}
function ut() {
  return new ht();
}
function xt() {
  const { registerPlugin: t } = pe(), e = se(!1);
  return te(() => {
    if (e.current) return;
    const s = ct(), r = dt(), o = ut();
    return t(s), t(r), t(o), e.current = !0, () => {
    };
  }, [t]), /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col h-screen bg-gray-50", children: [
    /* @__PURE__ */ n.jsx(ot, {}),
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 relative", "data-grix-canvas": !0, children: /* @__PURE__ */ n.jsx(
      it,
      {
        width: window.innerWidth,
        height: window.innerHeight - 60,
        className: "absolute inset-0"
      }
    ) })
  ] });
}
function ft() {
  return /* @__PURE__ */ n.jsx(Ce, { children: /* @__PURE__ */ n.jsx(Be, { children: /* @__PURE__ */ n.jsx(Ce, { children: /* @__PURE__ */ n.jsx(xt, {}) }) }) });
}
const mt = "0.1.0";
export {
  it as Canvas,
  ft as GrixApp,
  Be as PluginManagerProvider,
  ot as ToolBar,
  ut as createAreaCounter,
  ct as createRayTool,
  dt as createRectangleTool,
  V as useCanvasStore,
  qe as useInputSystem,
  pe as usePluginManager,
  mt as version
};
