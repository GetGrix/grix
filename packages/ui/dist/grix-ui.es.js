var at = Object.defineProperty;
var ot = (r, e, t) => e in r ? at(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Q = (r, e, t) => ot(r, typeof e != "symbol" ? e + "" : e, t);
import Ne, { createContext as ct, useState as se, useRef as pe, useEffect as xe, useContext as lt, useCallback as ce } from "react";
var ke = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function dt() {
  if (Ge) return Pe;
  Ge = 1;
  var r = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(n, a, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), a.key !== void 0 && (o = "" + a.key), "key" in a) {
      i = {};
      for (var c in a)
        c !== "key" && (i[c] = a[c]);
    } else i = a;
    return a = i.ref, {
      $$typeof: r,
      type: n,
      key: o,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return Pe.Fragment = e, Pe.jsx = t, Pe.jsxs = t, Pe;
}
var Me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function ht() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    function r(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === te ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case E:
          return "Fragment";
        case h:
          return "Profiler";
        case l:
          return "StrictMode";
        case M:
          return "Suspense";
        case $:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case x:
            return "Portal";
          case y:
            return (u.displayName || "Context") + ".Provider";
          case p:
            return (u._context.displayName || "Context") + ".Consumer";
          case S:
            var j = u.render;
            return u = u.displayName, u || (u = j.displayName || j.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case A:
            return j = u.displayName || null, j !== null ? j : r(u.type) || "Memo";
          case z:
            j = u._payload, u = u._init;
            try {
              return r(u(j));
            } catch {
            }
        }
      return null;
    }
    function e(u) {
      return "" + u;
    }
    function t(u) {
      try {
        e(u);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var D = j.error, X = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return D.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), e(u);
      }
    }
    function n(u) {
      if (u === E) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === z)
        return "<...>";
      try {
        var j = r(u);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var u = Z.A;
      return u === null ? null : u.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(u) {
      if (_.call(u, "key")) {
        var j = Object.getOwnPropertyDescriptor(u, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function c(u, j) {
      function D() {
        m || (m = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: D,
        configurable: !0
      });
    }
    function g() {
      var u = r(this.type);
      return O[u] || (O[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function f(u, j, D, X, re, ee, ue, ge) {
      return D = ee.ref, u = {
        $$typeof: d,
        type: u,
        key: j,
        props: ee,
        _owner: re
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function C(u, j, D, X, re, ee, ue, ge) {
      var H = j.children;
      if (H !== void 0)
        if (X)
          if (K(H)) {
            for (X = 0; X < H.length; X++)
              v(H[X]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(H);
      if (_.call(j, "key")) {
        H = r(u);
        var P = Object.keys(j).filter(function(B) {
          return B !== "key";
        });
        X = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", L[H + X] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          H,
          P,
          H
        ), L[H + X] = !0);
      }
      if (H = null, D !== void 0 && (t(D), H = "" + D), o(j) && (t(j.key), H = "" + j.key), "key" in j) {
        D = {};
        for (var W in j)
          W !== "key" && (D[W] = j[W]);
      } else D = j;
      return H && c(
        D,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), f(
        u,
        H,
        ee,
        re,
        a(),
        D,
        ue,
        ge
      );
    }
    function v(u) {
      typeof u == "object" && u !== null && u.$$typeof === d && u._store && (u._store.validated = 1);
    }
    var F = Ne, d = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), y = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), Z = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, K = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    F = {
      "react-stack-bottom-frame": function(u) {
        return u();
      }
    };
    var m, O = {}, ne = F["react-stack-bottom-frame"].bind(
      F,
      i
    )(), N = w(n(i)), L = {};
    Me.Fragment = E, Me.jsx = function(u, j, D, X, re) {
      var ee = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return C(
        u,
        j,
        D,
        !1,
        X,
        re,
        ee ? Error("react-stack-top-frame") : ne,
        ee ? w(n(u)) : N
      );
    }, Me.jsxs = function(u, j, D, X, re) {
      var ee = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return C(
        u,
        j,
        D,
        !0,
        X,
        re,
        ee ? Error("react-stack-top-frame") : ne,
        ee ? w(n(u)) : N
      );
    };
  }()), Me;
}
var _e;
function xt() {
  return _e || (_e = 1, process.env.NODE_ENV === "production" ? ke.exports = dt() : ke.exports = ht()), ke.exports;
}
var s = xt();
const Ce = {
  // Vector operations
  distance(r, e) {
    const t = e.x - r.x, n = e.y - r.y;
    return Math.sqrt(t * t + n * n);
  },
  slope(r, e) {
    const t = e.x - r.x, n = e.y - r.y;
    return Math.abs(t) < Number.EPSILON ? t === 0 || t > 0 ? 1 / 0 : -1 / 0 : n / t;
  },
  angle(r, e) {
    const t = e.x - r.x, n = e.y - r.y;
    return Math.atan2(n, t);
  },
  magnitude(r) {
    return Math.sqrt(r.x * r.x + r.y * r.y);
  },
  normalize(r) {
    const e = this.magnitude(r);
    return e === 0 ? { x: 0, y: 0 } : { x: r.x / e, y: r.y / e };
  },
  // Grid operations
  snapToGrid(r, e) {
    return {
      x: Math.round(r.x / e) * e,
      y: Math.round(r.y / e) * e
    };
  },
  // Rectangle operations
  calculateArea(r) {
    return Math.abs(r.properties.width * r.properties.height);
  },
  boundsContainPoint(r, e) {
    return e.x >= r.x && e.x <= r.x + r.width && e.y >= r.y && e.y <= r.y + r.height;
  },
  boundsIntersect(r, e) {
    return !(r.x + r.width < e.x || e.x + e.width < r.x || r.y + r.height < e.y || e.y + e.height < r.y);
  },
  // Fraction utilities for educational features
  gcd(r, e) {
    for (r = Math.abs(r), e = Math.abs(e); e !== 0; ) {
      const t = e;
      e = r % e, r = t;
    }
    return r;
  },
  simplifyFraction(r, e) {
    if (e === 0)
      return [r, 1];
    const t = this.gcd(r, e);
    return [r / t, e / t];
  },
  // Coordinate transformations
  worldToScreen(r, e, t) {
    const n = t.width / 2, a = t.height / 2, i = (r.x - e.center.x) * e.zoom, o = (r.y - e.center.y) * e.zoom;
    return {
      x: n + i,
      y: a - o
      // Flip Y axis for mathematical coordinates
    };
  },
  screenToWorld(r, e, t) {
    const n = t.width / 2, a = t.height / 2, i = (r.x - n) / e.zoom, o = (a - r.y) / e.zoom;
    return {
      x: e.center.x + i,
      y: e.center.y + o
    };
  }
}, we = {
  // Detect device capabilities
  detectCapabilities() {
    const r = "ontouchstart" in window || navigator.maxTouchPoints > 0, e = r && navigator.maxTouchPoints > 1, t = !0, n = window.matchMedia("(hover: hover)").matches;
    return {
      hasTouch: r,
      hasPencil: e,
      hasKeyboard: t,
      hasHover: n,
      maxTouchPoints: navigator.maxTouchPoints || 0,
      supportsPressure: "force" in Touch.prototype,
      supportsTilt: "altitudeAngle" in Touch.prototype
    };
  },
  // Normalize pointer events across input types
  normalizePointerEvent(r) {
    let e = "mouse";
    return r.pointerType === "touch" ? e = "touch" : r.pointerType === "pen" && (e = "pen"), {
      type: e,
      pressure: r.pressure || 0,
      tiltX: r.tiltX || 0,
      tiltY: r.tiltY || 0,
      x: r.clientX,
      y: r.clientY,
      timestamp: r.timeStamp,
      isPrimary: r.isPrimary,
      pointerId: r.pointerId
    };
  },
  // Calculate appropriate touch target size based on device
  getTouchTargetSize(r) {
    switch (r) {
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
class ut {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
  }
  on(e, t) {
    this.listeners.has(e) || this.listeners.set(e, []), this.listeners.get(e).push(t);
  }
  off(e, t) {
    const n = this.listeners.get(e);
    if (n) {
      const a = n.indexOf(t);
      a > -1 && n.splice(a, 1);
    }
  }
  emit(e, t) {
    const n = this.listeners.get(e);
    n && n.forEach((a) => {
      try {
        a(t);
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
    var t;
    return ((t = this.listeners.get(e)) == null ? void 0 : t.length) || 0;
  }
}
const Xe = (r) => {
  let e;
  const t = /* @__PURE__ */ new Set(), n = (f, C) => {
    const v = typeof f == "function" ? f(e) : f;
    if (!Object.is(v, e)) {
      const F = e;
      e = C ?? (typeof v != "object" || v === null) ? v : Object.assign({}, e, v), t.forEach((d) => d(e, F));
    }
  }, a = () => e, c = { setState: n, getState: a, getInitialState: () => g, subscribe: (f) => (t.add(f), () => t.delete(f)) }, g = e = r(n, a, c);
  return c;
}, pt = (r) => r ? Xe(r) : Xe, gt = (r) => r;
function ft(r, e = gt) {
  const t = Ne.useSyncExternalStore(
    r.subscribe,
    () => e(r.getState()),
    () => e(r.getInitialState())
  );
  return Ne.useDebugValue(t), t;
}
const qe = (r) => {
  const e = pt(r), t = (n) => ft(e, n);
  return Object.assign(t, e), t;
}, We = (r) => r ? qe(r) : qe, he = We((r, e) => ({
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
  setViewport: (t) => {
    r((n) => ({
      viewport: { ...n.viewport, ...t }
    }));
  },
  // Object management
  addObject: (t) => {
    r((n) => ({
      objects: [...n.objects, t]
    }));
  },
  removeObject: (t) => {
    r((n) => ({
      objects: n.objects.filter((a) => a.id !== t),
      selectedObjects: n.selectedObjects.filter((a) => a !== t)
    }));
  },
  updateObject: (t, n) => {
    r((a) => ({
      objects: a.objects.map(
        (i) => i.id === t ? { ...i, ...n } : i
      )
    }));
  },
  // Selection management
  selectObject: (t, n = !1) => {
    r((a) => n ? {
      selectedObjects: a.selectedObjects.includes(t) ? a.selectedObjects.filter((o) => o !== t) : [...a.selectedObjects, t]
    } : { selectedObjects: [t] });
  },
  clearSelection: () => {
    r({ selectedObjects: [] });
  },
  // Grid settings
  setSnapToGrid: (t) => {
    r({ snapToGrid: t });
  },
  setGridDensity: (t) => {
    r({ gridDensity: t });
  },
  // Canvas size
  setCanvasSize: (t) => {
    r({ canvasSize: t });
  },
  // Helper methods
  getObject: (t) => e().objects.find((n) => n.id === t),
  getAllObjects: () => e().objects,
  getSelectedObjects: () => {
    const t = e();
    return t.objects.filter((n) => t.selectedObjects.includes(n.id));
  },
  screenToWorld: (t) => {
    const { viewport: n, canvasSize: a } = e();
    return Ce.screenToWorld(t, n, a);
  },
  worldToScreen: (t) => {
    const { viewport: n, canvasSize: a } = e();
    return Ce.worldToScreen(t, n, a);
  },
  // Layer management
  bringToFront: (t) => {
    r((n) => {
      const a = Math.max(...n.objects.map((i) => i.zIndex || 0));
      return {
        objects: n.objects.map(
          (i) => i.id === t ? { ...i, zIndex: a + 1 } : i
        )
      };
    });
  },
  sendToBack: (t) => {
    r((n) => {
      const a = Math.min(...n.objects.map((i) => i.zIndex || 0));
      return {
        objects: n.objects.map(
          (i) => i.id === t ? { ...i, zIndex: a - 1 } : i
        )
      };
    });
  },
  bringForward: (t) => {
    r((n) => {
      const a = n.objects.find((c) => c.id === t);
      if (!a) return n;
      const i = n.objects.filter((c) => (c.zIndex || 0) > (a.zIndex || 0));
      if (i.length === 0) return n;
      const o = Math.min(...i.map((c) => c.zIndex || 0));
      return {
        objects: n.objects.map(
          (c) => c.id === t ? { ...c, zIndex: o + 0.1 } : c
        )
      };
    });
  },
  sendBackward: (t) => {
    r((n) => {
      const a = n.objects.find((c) => c.id === t);
      if (!a) return n;
      const i = n.objects.filter((c) => (c.zIndex || 0) < (a.zIndex || 0));
      if (i.length === 0) return n;
      const o = Math.max(...i.map((c) => c.zIndex || 0));
      return {
        objects: n.objects.map(
          (c) => c.id === t ? { ...c, zIndex: o - 0.1 } : c
        )
      };
    });
  }
})), yt = () => ({
  addObject: (r) => he.getState().addObject(r),
  removeObject: (r) => he.getState().removeObject(r),
  updateObject: (r, e) => he.getState().updateObject(r, e),
  getObject: (r) => he.getState().getObject(r),
  getAllObjects: () => he.getState().getAllObjects(),
  screenToWorld: (r) => he.getState().screenToWorld(r),
  worldToScreen: (r) => he.getState().worldToScreen(r)
}), mt = () => ({
  getState: () => {
    const r = he.getState();
    return {
      viewport: r.viewport,
      objects: r.objects,
      selectedObjects: r.selectedObjects,
      snapToGrid: r.snapToGrid,
      gridDensity: r.gridDensity
    };
  },
  setState: (r) => {
    he.setState(r);
  },
  subscribe: (r) => he.subscribe((e) => {
    r({
      viewport: e.viewport,
      objects: e.objects,
      selectedObjects: e.selectedObjects,
      snapToGrid: e.snapToGrid,
      gridDensity: e.gridDensity
    });
  })
}), st = ct(null);
function De() {
  const r = lt(st);
  if (!r)
    throw new Error("usePluginManager must be used within PluginManagerProvider");
  return r;
}
function bt({ children: r }) {
  const [e] = se(() => new ut()), [t] = se(() => /* @__PURE__ */ new Map()), [n] = se(() => /* @__PURE__ */ new Map()), [a, i] = se(null), o = pe(), c = pe(), g = pe();
  o.current || (o.current = yt()), c.current || (c.current = mt()), g.current || (g.current = {
    distance: Ce.distance,
    slope: Ce.slope,
    snapToGrid: Ce.snapToGrid,
    calculateArea: Ce.calculateArea
  });
  const f = o.current, C = c.current, v = g.current, F = (l) => {
    if (t.has(l.id)) {
      console.warn(`Plugin ${l.id} is already registered`);
      return;
    }
    const h = {
      canvas: f,
      events: e,
      state: C,
      math: v
    };
    t.set(l.id, l), n.set(l.id, h);
    try {
      l.init(h), console.log(`Plugin ${l.id} initialized successfully`);
    } catch (p) {
      console.error(`Failed to initialize plugin ${l.id}:`, p), t.delete(l.id), n.delete(l.id);
    }
  }, d = (l) => {
    var p;
    const h = t.get(l);
    if (h) {
      try {
        (p = h.destroy) == null || p.call(h);
      } catch (y) {
        console.error(`Error destroying plugin ${l}:`, y);
      }
      t.delete(l), n.delete(l), a === l && i(null);
    }
  }, x = () => Array.from(t.values());
  xe(() => {
    e.emit("tool:changed", { previous: null, current: a });
  }, [a, e]), xe(() => {
    const l = (S) => (M) => {
      var A, z, Y, te, Z, _;
      const $ = a ? t.get(a) : null;
      if ($)
        try {
          switch (S) {
            case "pointer:down":
              (A = $.onPointerDown) == null || A.call($, M);
              break;
            case "pointer:move":
              (z = $.onPointerMove) == null || z.call($, M);
              break;
            case "pointer:up":
              (Y = $.onPointerUp) == null || Y.call($, M);
              break;
          }
        } catch (K) {
          console.error(`Error in plugin ${a} handling ${S}:`, K);
        }
      else {
        const K = C.getState().selectedObjects;
        try {
          let w;
          if (K.length === 1) {
            const m = f.getObject(K[0]);
            (m == null ? void 0 : m.type) === "ray" ? w = t.get("ray-tool") : (m == null ? void 0 : m.type) === "rectangle" ? w = t.get("rectangle-tool") : (m == null ? void 0 : m.type) === "circle" ? w = t.get("circle-tool") : (m == null ? void 0 : m.type) === "triangle" && (w = t.get("triangle-tool"));
          }
          if (w)
            switch (S) {
              case "pointer:down":
                (te = w.onPointerDown) == null || te.call(w, M);
                break;
              case "pointer:move":
                (Z = w.onPointerMove) == null || Z.call(w, M);
                break;
              case "pointer:up":
                (_ = w.onPointerUp) == null || _.call(w, M);
                break;
            }
        } catch (w) {
          console.error(`Error in tool handling ${S} for manipulation:`, w);
        }
      }
    }, h = l("pointer:down"), p = l("pointer:move"), y = l("pointer:up");
    return e.on("pointer:down", h), e.on("pointer:move", p), e.on("pointer:up", y), () => {
      e.off("pointer:down", h), e.off("pointer:move", p), e.off("pointer:up", y);
    };
  }, [a, t, e]);
  const E = {
    eventBus: e,
    registerPlugin: F,
    unregisterPlugin: d,
    getActivePlugins: x,
    activeTool: a,
    setActiveTool: i
  };
  return /* @__PURE__ */ s.jsx(st.Provider, { value: E, children: r });
}
function vt() {
  const { eventBus: r } = De();
  return {
    handlePointerDown: (a) => {
      r.emit("pointer:down", a);
    },
    handlePointerMove: (a) => {
      r.emit("pointer:move", a);
    },
    handlePointerUp: (a) => {
      r.emit("pointer:up", a);
    }
  };
}
function jt(r, e, t = {}) {
  const [n, a] = se(null), [i, o] = se(/* @__PURE__ */ new Map()), c = {
    enableGestures: !0,
    touchTargetSize: 44,
    preventScrolling: !0,
    ...t
  };
  xe(() => {
    const l = we.detectCapabilities();
    a(l);
  }, []);
  const [g, f] = se({
    isGesturing: !1,
    startTime: 0,
    startDistance: 0,
    lastTapTime: 0,
    tapCount: 0
  }), C = ce((l) => {
    const h = Array.from(l.values());
    if (h.length < 2) return 0;
    const p = h[0], y = h[1];
    if (!p || !y) return 0;
    const S = p.x - y.x, M = p.y - y.y;
    return Math.sqrt(S * S + M * M);
  }, []), v = ce((l) => {
    const h = Array.from(l.values());
    if (h.length === 0) return { x: 0, y: 0 };
    const p = h.reduce((y, S) => ({ x: y.x + S.x, y: y.y + S.y }), { x: 0, y: 0 });
    return { x: p.x / h.length, y: p.y / h.length };
  }, []), F = ce((l) => {
    var M;
    if (!r.current) return;
    c.preventScrolling && l.preventDefault();
    const h = r.current.getBoundingClientRect(), p = l.clientX - h.left, y = l.clientY - h.top, S = we.normalizePointerEvent(l);
    S.x = p, S.y = y, o(($) => {
      const A = new Map($);
      if (A.set(l.pointerId, S), c.enableGestures && A.size >= 2) {
        const z = C(A);
        f((Y) => ({
          ...Y,
          isGesturing: !0,
          startTime: l.timeStamp,
          startDistance: z
        }));
      }
      return A;
    }), r.current.setPointerCapture(l.pointerId), (M = e.onPointerDown) == null || M.call(e, S);
  }, [r, e, c, C]), d = ce((l) => {
    var M;
    if (!r.current) return;
    const h = r.current.getBoundingClientRect(), p = l.clientX - h.left, y = l.clientY - h.top, S = we.normalizePointerEvent(l);
    S.x = p, S.y = y, o(($) => {
      var z, Y;
      const A = new Map($);
      if (A.set(l.pointerId, S), c.enableGestures && A.size >= 2) {
        const te = C(A), Z = v(A);
        if (g.isGesturing && g.startDistance > 0) {
          const _ = te / g.startDistance;
          (z = e.onGesture) == null || z.call(e, {
            type: "pinch",
            center: Z,
            scale: _,
            touches: A.size
          });
        }
      } else if (A.size === 1 && g.isGesturing) {
        const te = v(A);
        (Y = e.onGesture) == null || Y.call(e, {
          type: "pan",
          center: te,
          touches: A.size
        });
      }
      return A;
    }), (M = e.onPointerMove) == null || M.call(e, S);
  }, [e, c, C, v, g]), x = ce((l) => {
    var M;
    if (!r.current) return;
    const h = r.current.getBoundingClientRect(), p = l.clientX - h.left, y = l.clientY - h.top, S = we.normalizePointerEvent(l);
    S.x = p, S.y = y, o(($) => {
      var z;
      const A = new Map($);
      if (A.delete(l.pointerId), c.enableGestures && A.size === 0) {
        const te = l.timeStamp - g.startTime < 200, Z = l.timeStamp - g.lastTapTime;
        te && !g.isGesturing && (Z < 300 ? f((_) => ({ ..._, tapCount: _.tapCount + 1 })) : ((z = e.onGesture) == null || z.call(e, {
          type: "tap",
          center: { x: S.x, y: S.y },
          touches: 1
        }), f((_) => ({
          ..._,
          tapCount: 1,
          lastTapTime: l.timeStamp
        })))), f((_) => ({ ..._, isGesturing: !1 }));
      }
      return A;
    }), r.current && r.current.releasePointerCapture(l.pointerId), (M = e.onPointerUp) == null || M.call(e, S);
  }, [r, e, c, g]), E = ce((l) => {
    var M;
    if (!r.current) return;
    const h = r.current.getBoundingClientRect(), p = l.clientX - h.left, y = l.clientY - h.top, S = we.normalizePointerEvent(l);
    S.x = p, S.y = y, o(($) => {
      const A = new Map($);
      return A.delete(l.pointerId), A;
    }), f(($) => ({ ...$, isGesturing: !1 })), (M = e.onPointerCancel) == null || M.call(e, S);
  }, [e]);
  return xe(() => {
    const l = r.current;
    if (!l) return;
    l.addEventListener("pointerdown", F), l.addEventListener("pointermove", d), l.addEventListener("pointerup", x), l.addEventListener("pointercancel", E);
    const h = (p) => p.preventDefault();
    return l.addEventListener("contextmenu", h), () => {
      l.removeEventListener("pointerdown", F), l.removeEventListener("pointermove", d), l.removeEventListener("pointerup", x), l.removeEventListener("pointercancel", E), l.removeEventListener("contextmenu", h);
    };
  }, [r, F, d, x, E]), {
    capabilities: n,
    activePointers: Array.from(i.values()),
    isGesturing: g.isGesturing,
    touchTargetSize: n ? we.getTouchTargetSize(n.hasTouch ? "touch" : "mouse") : c.touchTargetSize
  };
}
function rt(r, e = {
  minSpacing: 8,
  maxSpacing: 80,
  labelMinSpacing: 40
}) {
  const t = r.zoom;
  let a = 1, i = a * t;
  for (; i < e.minSpacing && a < 1e4; )
    a *= Ue(a), i = a * t;
  for (; i > e.maxSpacing && a > 1e-4; )
    a /= wt(a), i = a * t;
  let o = a, c = o * t;
  for (; c < e.labelMinSpacing && o < a * 100; )
    o *= Ue(o), c = o * t;
  const g = Math.max(0.1, Math.min(1, (i - e.minSpacing) / (e.maxSpacing - e.minSpacing)));
  return {
    gridSize: a,
    labelStep: o,
    shouldShowGrid: i >= e.minSpacing,
    shouldShowLabels: c >= e.labelMinSpacing,
    opacity: g
  };
}
function Ue(r) {
  if (r < 1)
    return r >= 0.5 ? 2 : r >= 0.2 ? 2.5 : (r >= 0.1, 2);
  if (r < 10)
    return r >= 5 ? 2 : r >= 2 ? 2.5 : (r >= 1, 2);
  {
    const e = Math.pow(10, Math.floor(Math.log10(r))), t = r / e;
    return t >= 5 ? 2 : t >= 2 ? 2.5 : (t >= 1, 2);
  }
}
function wt(r) {
  if (r <= 1)
    return r <= 0.1 || r <= 0.2 ? 2 : r <= 0.5 ? 2.5 : (r <= 1, 2);
  if (r <= 10)
    return r <= 2 ? 2 : r <= 5 ? 2.5 : (r <= 10, 2);
  {
    const e = Math.pow(10, Math.floor(Math.log10(r))), t = r / e;
    return t <= 2 ? 2 : t <= 5 ? 2.5 : (t <= 10, 2);
  }
}
function Ct(r, e, t, n, a = !0) {
  const { gridSize: i } = t, o = {
    left: r.center.x - e.width / 2 / r.zoom,
    right: r.center.x + e.width / 2 / r.zoom,
    top: r.center.y + e.height / 2 / r.zoom,
    bottom: r.center.y - e.height / 2 / r.zoom
  }, c = [], g = [], f = Math.floor(o.left / i) * i, C = Math.ceil(o.right / i) * i;
  for (let d = f; d <= C; d += i) {
    const x = n({ x: d, y: 0 }).x, E = Math.abs(d) < i / 2, l = Math.abs(d % (i * 5)) < i / 2;
    c.push({ x, isAxis: E, isMajor: l, isInteger: !1, value: d });
  }
  if (a && (i >= 2 || i < 1)) {
    const d = Math.floor(o.left), x = Math.ceil(o.right);
    for (let E = d; E <= x; E += 1)
      if (Math.abs(E % i) > 1e-3) {
        const l = n({ x: E, y: 0 }).x, h = Math.abs(E) < 0.5;
        c.push({ x: l, isAxis: h, isMajor: !1, isInteger: !0, value: E });
      }
  }
  const v = Math.floor(o.bottom / i) * i, F = Math.ceil(o.top / i) * i;
  for (let d = v; d <= F; d += i) {
    const x = n({ x: 0, y: d }).y, E = Math.abs(d) < i / 2, l = Math.abs(d % (i * 5)) < i / 2;
    g.push({ y: x, isAxis: E, isMajor: l, isInteger: !1, value: d });
  }
  if (a && (i >= 2 || i < 1)) {
    const d = Math.floor(o.bottom), x = Math.ceil(o.top);
    for (let E = d; E <= x; E += 1)
      if (Math.abs(E % i) > 1e-3) {
        const l = n({ x: 0, y: E }).y, h = Math.abs(E) < 0.5;
        g.push({ y: l, isAxis: h, isMajor: !1, isInteger: !0, value: E });
      }
  }
  return { verticalLines: c, horizontalLines: g };
}
function ie(r, e = 3) {
  if (Number.isInteger(r))
    return r.toString();
  const t = r.toFixed(e);
  return parseFloat(t).toString();
}
function Oe(r, e, t) {
  const n = t.x - e.x, a = t.y - e.y, i = Math.sqrt(n * n + a * a);
  if (i === 0) return Math.sqrt((r.x - e.x) ** 2 + (r.y - e.y) ** 2);
  const o = Math.max(0, Math.min(1, ((r.x - e.x) * n + (r.y - e.y) * a) / (i * i))), c = {
    x: e.x + o * n,
    y: e.y + o * a
  };
  return Math.sqrt((r.x - c.x) ** 2 + (r.y - c.y) ** 2);
}
function Ze(r, e) {
  const [t, n, a] = e, i = (n.y - a.y) * (t.x - a.x) + (a.x - n.x) * (t.y - a.y), o = ((n.y - a.y) * (r.x - a.x) + (a.x - n.x) * (r.y - a.y)) / i, c = ((a.y - t.y) * (r.x - a.x) + (t.x - a.x) * (r.y - a.y)) / i, g = 1 - o - c;
  return o >= 0 && c >= 0 && g >= 0;
}
function He(r, e, t) {
  const n = Math.sqrt((r.x - e.x) ** 2 + (r.y - e.y) ** 2);
  return Math.abs(n - t);
}
function I(r, e) {
  return e >= 1 ? r.toFixed(0) : e >= 0.1 ? r.toFixed(1) : e >= 0.01 ? r.toFixed(2) : r.toFixed(3);
}
function Ee(r, e, t) {
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
  const a = rt(r, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }).gridSize / e;
  return a <= 0.1 ? a : a <= 0.5 ? 0.1 : a <= 2 ? 0.25 : 1;
}
const Ve = {
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
  customOrigin: null
}, ye = We((r) => ({
  ...Ve,
  toggleSetting: (e) => {
    r((t) => ({
      [e]: !t[e]
    }));
  },
  setFontScale: (e) => {
    r({ fontScale: e });
  },
  setGridScale: (e) => {
    r({ gridScale: e });
  },
  setSnapPrecision: (e) => {
    r({ snapPrecision: e });
  },
  setCoordinateSystem: (e) => {
    r({ coordinateSystem: e });
  },
  setCustomOrigin: (e) => {
    r({ customOrigin: e });
  },
  resetToDefaults: () => {
    r(Ve);
  }
}));
function St({ viewport: r, canvasSize: e, worldToScreen: t, objects: n = [] }) {
  const a = ye(), i = (l) => Math.round(l * a.fontScale), o = rt(r, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }), c = {
    gridSize: o.gridSize / a.gridScale,
    labelStep: o.labelStep / a.gridScale
  }, { verticalLines: g, horizontalLines: f } = Ct(
    r,
    e,
    c,
    t,
    a.showIntegerGridLines
  );
  if (!o.shouldShowGrid)
    return null;
  const C = [];
  if (a.coordinateSystem === "polar" || a.coordinateSystem === "both") {
    const l = t({ x: 0, y: 0 }), h = Math.max(
      Math.abs(r.center.x) + e.width / (2 * r.zoom),
      Math.abs(r.center.y) + e.height / (2 * r.zoom)
    );
    for (let p = c.gridSize; p <= h; p += c.gridSize) {
      const y = p * r.zoom;
      y >= 10 && C.push(
        /* @__PURE__ */ s.jsx(
          "circle",
          {
            cx: l.x,
            cy: l.y,
            r: y,
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
      const y = p * Math.PI / 180, S = l.x + h * r.zoom * Math.cos(y), M = l.y - h * r.zoom * Math.sin(y);
      C.push(
        /* @__PURE__ */ s.jsx(
          "line",
          {
            x1: l.x,
            y1: l.y,
            x2: S,
            y2: M,
            stroke: "#9CA3AF",
            strokeWidth: "0.5",
            opacity: 0.3
          },
          `polar-line-${p}`
        )
      );
    }
  }
  const v = [];
  n.forEach((l) => {
    if (l.type === "ray") {
      const { startPoint: h, endPoint: p } = l.properties;
      if (Math.abs(h.x) < 1e-3 && Math.abs(h.y) < 1e-3) {
        const y = p.x - h.x, S = p.y - h.y;
        if (Math.abs(y) > 1e-3) {
          const M = 1 / y;
          if (M > 0 && M <= 1) {
            const $ = h.y + M * S, A = t({ x: 1, y: $ });
            v.push({ y: $, screenY: A.y });
          }
        }
      }
    }
  });
  const F = g.map((l) => {
    const h = Math.abs(l.value - 1) < 1e-3, p = l.isAxis ? "#374151" : h ? "#60A5FA" : (
      // Light blue for x=1
      l.isInteger ? "#E5E7EB" : (
        // Very faint for integer lines
        l.isMajor ? "#9CA3AF" : "#E5E7EB"
      )
    ), y = l.isAxis ? 2 : h ? 1.5 : l.isInteger ? Math.max(1, r.zoom * 0.05) : l.isMajor ? 1 : 0.5, S = l.isAxis ? 1 : h ? 0.8 : l.isInteger ? 0.4 : (
      // Fixed visibility for integer lines
      l.isMajor ? 0.6 * o.opacity : 0.3 * o.opacity
    );
    return /* @__PURE__ */ s.jsx(
      "line",
      {
        x1: l.x,
        y1: 0,
        x2: l.x,
        y2: e.height,
        stroke: p,
        strokeWidth: y,
        opacity: S
      },
      `v${l.value}`
    );
  }), d = f.map((l) => /* @__PURE__ */ s.jsx(
    "line",
    {
      x1: 0,
      y1: l.y,
      x2: e.width,
      y2: l.y,
      stroke: l.isAxis ? "#374151" : l.isInteger ? "#E5E7EB" : (
        // Very faint for integer lines
        l.isMajor ? "#9CA3AF" : "#E5E7EB"
      ),
      strokeWidth: l.isAxis ? 2 : l.isInteger ? Math.max(1, r.zoom * 0.05) : l.isMajor ? 1 : 0.5,
      opacity: l.isAxis ? 1 : l.isInteger ? 0.4 : (
        // Fixed visibility for integer lines
        l.isMajor ? 0.6 * o.opacity : 0.3 * o.opacity
      )
    },
    `h${l.value}`
  )), x = a.showReferenceLineY_equals_X ? (() => {
    const l = {
      left: r.center.x - e.width / 2 / r.zoom,
      right: r.center.x + e.width / 2 / r.zoom,
      top: r.center.y + e.height / 2 / r.zoom,
      bottom: r.center.y - e.height / 2 / r.zoom
    }, h = Math.min(l.left, l.bottom), p = Math.max(l.right, l.top), y = t({ x: h, y: h }), S = t({ x: p, y: p });
    return { lineStart: y, lineEnd: S };
  })() : null, E = a.showLatticePoints ? (() => {
    const l = {
      left: r.center.x - e.width / 2 / r.zoom,
      right: r.center.x + e.width / 2 / r.zoom,
      top: r.center.y + e.height / 2 / r.zoom,
      bottom: r.center.y - e.height / 2 / r.zoom
    }, h = [], p = Math.max(-20, Math.floor(l.left)), y = Math.min(20, Math.ceil(l.right)), S = Math.max(-20, Math.floor(l.bottom)), M = Math.min(20, Math.ceil(l.top)), $ = (y - p + 1) * (M - S + 1);
    if ($ > 200) {
      const A = Math.ceil(Math.sqrt($ / 200));
      for (let z = p; z <= y; z += A)
        for (let Y = S; Y <= M; Y += A) {
          const te = t({ x: z, y: Y });
          te.x >= -20 && te.x <= e.width + 20 && te.y >= -20 && te.y <= e.height + 20 && h.push(te);
        }
    } else
      for (let A = p; A <= y; A++)
        for (let z = S; z <= M; z++) {
          const Y = t({ x: A, y: z });
          Y.x >= -20 && Y.x <= e.width + 20 && Y.y >= -20 && Y.y <= e.height + 20 && h.push(Y);
        }
    return h;
  })() : [];
  return /* @__PURE__ */ s.jsxs("g", { className: "grid", children: [
    (a.coordinateSystem === "polar" || a.coordinateSystem === "both") && /* @__PURE__ */ s.jsx("g", { className: "polar-grid", children: C }),
    (a.coordinateSystem === "cartesian" || a.coordinateSystem === "both") && /* @__PURE__ */ s.jsxs("g", { className: "cartesian-grid", children: [
      F,
      d
    ] }),
    E.map((l, h) => /* @__PURE__ */ s.jsx(
      "circle",
      {
        cx: l.x,
        cy: l.y,
        r: "1.5",
        fill: "#9CA3AF",
        opacity: "0.3"
      },
      `lattice-${h}`
    )),
    x && /* @__PURE__ */ s.jsx(
      "line",
      {
        x1: x.lineStart.x,
        y1: x.lineStart.y,
        x2: x.lineEnd.x,
        y2: x.lineEnd.y,
        stroke: "#A78BFA",
        strokeWidth: "1.5",
        opacity: "0.6",
        strokeDasharray: "5,5"
      }
    ),
    o.shouldShowLabels && /* @__PURE__ */ s.jsxs("g", { className: "labels", fontSize: "12", fill: "#374151", children: [
      g.filter((l) => {
        const h = Math.abs(l.value % c.labelStep) < c.gridSize / 10, p = Math.abs(l.value) >= c.labelStep / 2;
        return h && p;
      }).filter((l, h, p) => !p.slice(0, h).some(
        (y) => Math.abs(y.value - l.value) < 1e-3
      )).map((l) => /* @__PURE__ */ s.jsx(
        "text",
        {
          x: l.x,
          y: t({ x: 0, y: 0 }).y + 20,
          textAnchor: "middle",
          fontSize: i(11),
          fontWeight: "500",
          opacity: Math.max(0.7, o.opacity),
          children: I(l.value, o.gridSize)
        },
        `xlabel${l.value}`
      )),
      f.filter((l) => {
        const h = Math.abs(l.value % c.labelStep) < c.gridSize / 10, p = Math.abs(l.value) >= c.labelStep / 2;
        return h && p;
      }).filter((l, h, p) => !p.slice(0, h).some(
        (y) => Math.abs(y.value - l.value) < 1e-3
      )).map((l) => /* @__PURE__ */ s.jsx(
        "text",
        {
          x: t({ x: 0, y: 0 }).x - 15,
          y: l.y + 4,
          textAnchor: "middle",
          fontSize: i(11),
          fontWeight: "500",
          opacity: Math.max(0.7, o.opacity),
          children: I(l.value, o.gridSize)
        },
        `ylabel${l.value}`
      )),
      /* @__PURE__ */ s.jsxs("g", { children: [
        /* @__PURE__ */ s.jsx(
          "circle",
          {
            cx: t({ x: 0, y: 0 }).x,
            cy: t({ x: 0, y: 0 }).y,
            r: "3",
            fill: "#374151",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "text",
          {
            x: t({ x: 0, y: 0 }).x - 25,
            y: t({ x: 0, y: 0 }).y - 10,
            fontSize: i(11),
            fontWeight: "600",
            fill: "#374151",
            opacity: Math.max(0.8, o.opacity),
            children: "(0,0)"
          }
        )
      ] }),
      a.showDivisionAnswer && v.map((l, h) => {
        const p = t({ x: 1, y: 0 }).x;
        return /* @__PURE__ */ s.jsxs("g", { children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: p + 15,
              y: l.screenY + 4,
              fontSize: i(10),
              fontWeight: "600",
              fill: "#60A5FA",
              opacity: "0.9",
              children: [
                "y = ",
                l.y.toFixed(2)
              ]
            }
          )
        ] }, `ray-intersection-${h}`);
      })
    ] })
  ] });
}
function Pt({ viewport: r, onZoomIn: e, onZoomOut: t, onZoomReset: n, onCenterOnly: a }) {
  const [i, o] = se(0), c = pe(null), g = () => {
    const f = Date.now();
    f - i < 500 ? (c.current && (clearTimeout(c.current), c.current = null), n()) : c.current = window.setTimeout(() => {
      a(), c.current = null;
    }, 300), o(f);
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "absolute bottom-4 right-4 flex flex-col gap-2", children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: e,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors",
        title: "Zoom in (Ctrl+scroll up)",
        disabled: r.zoom >= 1e3,
        children: "+"
      }
    ),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: t,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors",
        title: "Zoom out (Ctrl+scroll down)",
        disabled: r.zoom <= 0.01,
        children: "−"
      }
    ),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: g,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-600 text-xs transition-colors",
        title: "Center view (single click) or Reset zoom (double click)",
        children: "⌂"
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { className: "w-10 h-6 bg-white/90 border border-gray-300 rounded text-xs flex items-center justify-center text-gray-600", children: [
      r.zoom >= 1 ? Math.round(r.zoom) : r.zoom.toFixed(1),
      "×"
    ] })
  ] });
}
function Mt({ objects: r, viewport: e, touchTargetSize: t, worldToScreen: n, selectedObjects: a = [], canvasSize: i }) {
  const o = ye(), c = (d) => Math.round(d * o.fontScale), g = Ee(e, o.gridScale, o.snapPrecision), f = g, [C, v] = se(null), F = (d) => {
    const x = a.includes(d.id);
    switch (d.type) {
      case "ray":
        const E = n(d.properties.startPoint), l = n(d.properties.endPoint);
        return /* @__PURE__ */ s.jsxs("g", { children: [
          x && /* @__PURE__ */ s.jsx(
            "line",
            {
              x1: E.x,
              y1: E.y,
              x2: l.x,
              y2: l.y,
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ s.jsx(
            "line",
            {
              x1: E.x,
              y1: E.y,
              x2: l.x,
              y2: l.y,
              stroke: x ? "#1D4ED8" : "#2563eb",
              strokeWidth: x ? 3 : 2
            }
          ),
          /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: E.x,
              cy: E.y,
              r: t / 4,
              fill: x ? "#1D4ED8" : "#2563eb",
              stroke: x ? "#60A5FA" : "none",
              strokeWidth: x ? 2 : 0,
              style: { cursor: "move" },
              onMouseEnter: () => v(`${d.id}-start`),
              onMouseLeave: () => v(null)
            }
          ),
          /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: l.x,
              cy: l.y,
              r: t / 4,
              fill: x ? "#1D4ED8" : "#2563eb",
              stroke: x ? "#60A5FA" : "none",
              strokeWidth: x ? 2 : 0,
              style: { cursor: "move" },
              onMouseEnter: () => v(`${d.id}-end`),
              onMouseLeave: () => v(null)
            }
          ),
          !(Math.abs(d.properties.startPoint.x) < 1e-3 && Math.abs(d.properties.startPoint.y) < 1e-3) && C === `${d.id}-start` && /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: E.x - 5,
              y: E.y - 10,
              fontSize: c(10),
              fontWeight: "500",
              fill: x ? "#1D4ED8" : "#2563eb",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "(",
                I(d.properties.startPoint.x, f),
                ", ",
                I(d.properties.startPoint.y, f),
                ")"
              ]
            }
          ),
          C === `${d.id}-end` && /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: Math.abs(d.properties.startPoint.x) < 1e-3 && Math.abs(d.properties.startPoint.y) < 1e-3 ? l.x - 60 : l.x + 5,
              y: Math.abs(d.properties.startPoint.x) < 1e-3 && Math.abs(d.properties.startPoint.y) < 1e-3 ? l.y + 4 : l.y - 10,
              fontSize: c(10),
              fontWeight: "500",
              fill: x ? "#1D4ED8" : "#2563eb",
              textAnchor: Math.abs(d.properties.startPoint.x) < 1e-3 && Math.abs(d.properties.startPoint.y) < 1e-3 ? "end" : "middle",
              opacity: "0.8",
              children: [
                "(",
                I(d.properties.endPoint.x, f),
                ", ",
                I(d.properties.endPoint.y, f),
                ")"
              ]
            }
          ),
          (() => {
            const w = d.properties.endPoint.x - d.properties.startPoint.x;
            d.properties.endPoint.y - d.properties.startPoint.y;
            const m = Math.abs(d.properties.startPoint.x) < 1e-3 && Math.abs(d.properties.startPoint.y) < 1e-3;
            if (Math.abs(w) > 1e-3) {
              const O = l.x, ne = l.y;
              if (m) {
                const N = d.properties.endPoint.x, L = d.properties.endPoint.y, u = I(L, f), j = I(N, f);
                return /* @__PURE__ */ s.jsxs("g", { children: [
                  /* @__PURE__ */ s.jsx(
                    "text",
                    {
                      x: O + 15,
                      y: ne - 25,
                      fontSize: c(9),
                      fontWeight: "500",
                      fill: x ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: u
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "line",
                    {
                      x1: O + 8,
                      y1: ne - 19,
                      x2: O + 22,
                      y2: ne - 19,
                      stroke: x ? "#1D4ED8" : "#2563eb",
                      strokeWidth: "1",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "text",
                    {
                      x: O + 15,
                      y: ne - 9,
                      fontSize: c(9),
                      fontWeight: "500",
                      fill: x ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: j
                    }
                  )
                ] });
              } else
                return null;
            }
            return null;
          })(),
          (() => {
            if (!(Math.abs(d.properties.startPoint.x) < 1e-3 && Math.abs(d.properties.startPoint.y) < 1e-3)) return null;
            const m = d.properties.endPoint.x, O = d.properties.endPoint.y;
            if (Math.abs(m) < 1e-3 && Math.abs(O) < 1e-3) return null;
            const ne = m, N = O, L = {
              left: e.center.x - i.width / 2 / e.zoom,
              right: e.center.x + i.width / 2 / e.zoom,
              top: e.center.y + i.height / 2 / e.zoom,
              bottom: e.center.y - i.height / 2 / e.zoom
            }, u = Math.max(
              Math.abs(L.left),
              Math.abs(L.right),
              Math.abs(L.top),
              Math.abs(L.bottom)
            ) * 2, j = Math.sqrt(ne * ne + N * N);
            if (j === 0) return null;
            const D = ne / j, X = N / j, re = {
              x: u * D,
              y: u * X
            }, ee = n(re), ue = [];
            if (Math.abs(m) > 1e-3 && Math.abs(O) > 1e-3) {
              const P = m, W = O;
              for (let B = 2; B <= 8; B++) {
                const J = P * B, le = W * B, ae = Math.round(J / g) * g, b = Math.round(le / g) * g;
                if (Math.abs(J - ae) < g / 10 && Math.abs(le - b) < g / 10 && ae > 0 && b > 0 && ae <= Math.min(20, Math.abs(u)) && b <= Math.min(20, Math.abs(u))) {
                  const G = n({ x: ae, y: b });
                  G.x >= -100 && G.x <= i.width + 100 && G.y >= -100 && G.y <= i.height + 100 && ue.push({
                    world: { x: ae, y: b },
                    screen: G,
                    fraction: {
                      num: I(b, g),
                      den: I(ae, g)
                    }
                  });
                }
              }
            }
            const ge = Math.sqrt(m * m + O * O), H = [];
            if (ge > 0 && o.showLengthMultiples)
              for (let P = 2; P <= 5; P++) {
                const W = m * P, B = O * P, J = n({ x: W, y: B });
                J.x >= -50 && J.x <= i.width + 50 && J.y >= -50 && J.y <= i.height + 50 && H.push({
                  screen: J,
                  multiple: P
                });
              }
            return /* @__PURE__ */ s.jsxs("g", { children: [
              o.showEquivalentFractions && /* @__PURE__ */ s.jsx(
                "line",
                {
                  x1: l.x,
                  y1: l.y,
                  x2: ee.x,
                  y2: ee.y,
                  stroke: x ? "#1D4ED8" : "#2563eb",
                  strokeWidth: "1",
                  opacity: "0.3",
                  strokeDasharray: "3,3"
                }
              ),
              H.map((P, W) => /* @__PURE__ */ s.jsxs("g", { children: [
                /* @__PURE__ */ s.jsx(
                  "circle",
                  {
                    cx: P.screen.x,
                    cy: P.screen.y,
                    r: "2",
                    fill: x ? "#1D4ED8" : "#2563eb",
                    opacity: "0.4"
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "text",
                  {
                    x: P.screen.x + 8,
                    y: P.screen.y - 8,
                    fontSize: c(7),
                    fontWeight: "400",
                    fill: x ? "#1D4ED8" : "#2563eb",
                    textAnchor: "start",
                    opacity: "0.5",
                    children: [
                      "×",
                      P.multiple
                    ]
                  }
                )
              ] }, `length-${W}`)),
              o.showAreaRectangle && (() => {
                if (m > 0 && O > 0) {
                  const P = n({ x: 0, y: 0 }), W = n({ x: m, y: O }), B = Math.abs(W.x - P.x), J = Math.abs(W.y - P.y), le = Math.min(P.x, W.x), ae = Math.min(P.y, W.y), b = m * O;
                  return /* @__PURE__ */ s.jsxs("g", { children: [
                    /* @__PURE__ */ s.jsx(
                      "rect",
                      {
                        x: le,
                        y: ae,
                        width: B,
                        height: J,
                        fill: x ? "#1D4ED8" : "#2563eb",
                        opacity: "0.08",
                        stroke: x ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "0.5",
                        strokeOpacity: "0.15"
                      }
                    ),
                    /* @__PURE__ */ s.jsxs(
                      "text",
                      {
                        x: le + B / 2,
                        y: ae + 15,
                        fontSize: c(10),
                        fontWeight: "400",
                        fill: x ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.6",
                        children: [
                          I(O, f),
                          " × ",
                          I(m, f),
                          " = ",
                          I(b, f)
                        ]
                      }
                    ),
                    (() => {
                      if (!(Math.abs(d.properties.startPoint.x) < 1e-3 && Math.abs(d.properties.startPoint.y) < 1e-3) || m <= 0) return null;
                      const k = O / m, T = n({ x: 1, y: 0 }), R = [];
                      for (let q = 1; q * k <= O; q++) {
                        const U = q * k, oe = n({ x: 0, y: U }).y, V = Math.abs(U - k) < 0.01;
                        R.push(
                          /* @__PURE__ */ s.jsxs("g", { children: [
                            /* @__PURE__ */ s.jsx(
                              "line",
                              {
                                x1: P.x,
                                y1: oe,
                                x2: T.x,
                                y2: oe,
                                stroke: x ? "#1D4ED8" : "#2563eb",
                                strokeWidth: "1",
                                opacity: V ? "0" : "0.3",
                                strokeDasharray: "2,2"
                              }
                            ),
                            !V && /* @__PURE__ */ s.jsx(
                              "text",
                              {
                                x: T.x + 8,
                                y: oe - 5,
                                fontSize: c(8),
                                fontWeight: "400",
                                fill: x ? "#1D4ED8" : "#2563eb",
                                textAnchor: "start",
                                opacity: "0.5",
                                children: ie(U)
                              }
                            )
                          ] }, `division-marker-${q}`)
                        );
                      }
                      return R;
                    })()
                  ] });
                }
                return null;
              })(),
              o.showRiseRunTriangle && (() => {
                if (m > 0 && O > 0) {
                  const P = n({ x: 0, y: 0 }), W = n({ x: m, y: 0 }), B = n({ x: m, y: O });
                  return /* @__PURE__ */ s.jsxs("g", { children: [
                    /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        d: `M ${P.x},${P.y} L ${W.x},${W.y} L ${B.x},${B.y} Z`,
                        fill: "none",
                        stroke: x ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "1",
                        opacity: "0.4",
                        strokeDasharray: "2,2"
                      }
                    ),
                    /* @__PURE__ */ s.jsxs(
                      "text",
                      {
                        x: W.x + 12,
                        y: (W.y + B.y) / 2,
                        fontSize: c(9),
                        fontWeight: "500",
                        fill: x ? "#1D4ED8" : "#2563eb",
                        textAnchor: "start",
                        opacity: "0.7",
                        children: [
                          "rise: ",
                          I(O, f)
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsxs(
                      "text",
                      {
                        x: (P.x + W.x) / 2,
                        y: W.y + 8,
                        fontSize: c(9),
                        fontWeight: "500",
                        fill: x ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.7",
                        children: [
                          "run: ",
                          I(m, f)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              o.showDistanceMarkers && (() => {
                const P = [], W = Math.sqrt(m * m + O * O);
                if (W > 0) {
                  const B = n({ x: 0, y: 0 });
                  let J = Math.atan2(O, m);
                  J < 0 && (J = J + 2 * Math.PI);
                  const le = [];
                  for (let b = 1; b <= Math.floor(W); b++)
                    le.push({ radius: b, isUnit: !0 });
                  le.push({ radius: W, isUnit: !1 }), le.forEach(({ radius: b, isUnit: G }, k) => {
                    const T = b * e.zoom;
                    if (T >= 15 && T <= 800 && Math.abs(J) > 0.05) {
                      const R = J > Math.PI ? 1 : 0, U = `M ${B.x + T},${B.y} A ${T},${T} 0 ${R},0 ${B.x + T * Math.cos(J)},${B.y - T * Math.sin(J)}`;
                      P.push(
                        /* @__PURE__ */ s.jsx(
                          "path",
                          {
                            d: U,
                            fill: "none",
                            stroke: x ? "#1D4ED8" : "#2563eb",
                            strokeWidth: G ? "1" : "1.5",
                            opacity: G ? "0.3" : "0.6",
                            strokeDasharray: G ? "2,2" : "none"
                          },
                          `radial-${d.id}-${b.toFixed(3)}-${J.toFixed(3)}-${k}`
                        )
                      );
                    }
                  });
                  const ae = n({ x: W, y: 0 });
                  P.push(
                    /* @__PURE__ */ s.jsxs("g", { children: [
                      /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          d: `M ${ae.x},${B.y} L ${ae.x - 4},${B.y + 8} L ${ae.x + 4},${B.y + 8} Z`,
                          fill: x ? "#1D4ED8" : "#2563eb",
                          opacity: "0.7"
                        }
                      ),
                      /* @__PURE__ */ s.jsxs(
                        "text",
                        {
                          x: ae.x + 15,
                          y: B.y - 8,
                          fontSize: c(10),
                          fontWeight: "600",
                          fill: x ? "#1D4ED8" : "#2563eb",
                          textAnchor: "start",
                          opacity: "0.8",
                          children: [
                            "d = ",
                            W.toFixed(2)
                          ]
                        }
                      )
                    ] }, `distance-${d.id}`)
                  );
                }
                return /* @__PURE__ */ s.jsx("g", { children: P });
              })(),
              o.showAngleArc && (() => {
                let P = Math.atan2(O, m);
                if (P < 0 && (P = P + 2 * Math.PI), Math.abs(m) > 0.05 || Math.abs(O) > 0.05) {
                  const W = n({ x: 0, y: 0 }), B = 50, J = (P * 180 / Math.PI).toFixed(1), le = P, ae = P > Math.PI ? 1 : 0, b = `M ${W.x + B},${W.y} A ${B},${B} 0 ${ae},0 ${W.x + B * Math.cos(le)},${W.y - B * Math.sin(le)}`, G = P / 2, k = B * 0.7, T = W.x + k * Math.cos(G), R = W.y - k * Math.sin(G);
                  return /* @__PURE__ */ s.jsxs("g", { children: [
                    /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        d: b,
                        fill: "none",
                        stroke: x ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "2",
                        opacity: "0.6"
                      }
                    ),
                    /* @__PURE__ */ s.jsxs(
                      "text",
                      {
                        x: T,
                        y: R,
                        fontSize: c(11),
                        fontWeight: "600",
                        fill: x ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.8",
                        children: [
                          "θ = ",
                          J,
                          "°"
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              o.showEquivalentFractions && ue.map((P, W) => {
                const J = Math.abs(P.world.x - 1) < 0.1 && o.showDivisionAnswer, le = Math.abs(P.world.x - m) < 0.1 && Math.abs(P.world.y - O) < 0.1;
                return J || le ? null : /* @__PURE__ */ s.jsxs("g", { children: [
                  /* @__PURE__ */ s.jsx(
                    "circle",
                    {
                      cx: P.screen.x,
                      cy: P.screen.y,
                      r: "4",
                      fill: "white",
                      stroke: "#22C55E",
                      strokeWidth: "2",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "text",
                    {
                      x: P.screen.x + 15,
                      y: P.screen.y + 4,
                      fontSize: c(9),
                      fontWeight: "500",
                      fill: "#22C55E",
                      textAnchor: "start",
                      opacity: "0.8",
                      children: [
                        P.fraction.num,
                        "/",
                        P.fraction.den
                      ]
                    }
                  )
                ] }, `equiv-${W}`);
              })
            ] });
          })()
        ] }, d.id);
      case "rectangle":
        const h = n({
          x: d.properties.x,
          y: d.properties.y + d.properties.height
        }), p = d.properties.width * e.zoom, y = d.properties.height * e.zoom, S = { x: d.properties.x, y: d.properties.y }, M = { x: d.properties.x + d.properties.width, y: d.properties.y }, $ = { x: d.properties.x, y: d.properties.y + d.properties.height }, A = { x: d.properties.x + d.properties.width, y: d.properties.y + d.properties.height };
        return /* @__PURE__ */ s.jsxs("g", { children: [
          x && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: h.x - 3,
              y: h.y - 3,
              width: p + 6,
              height: y + 6,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 4,
              opacity: 0.5,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: h.x,
              y: h.y,
              width: p,
              height: y,
              fill: x ? "rgba(34, 197, 94, 0.3)" : "rgba(34, 197, 94, 0.2)",
              stroke: x ? "#16A34A" : "#22c55e",
              strokeWidth: x ? 3 : 2,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: h.x,
              cy: h.y,
              r: t / 6,
              fill: x ? "#16A34A" : "#22c55e",
              stroke: x ? "#60A5FA" : "none",
              strokeWidth: x ? 2 : 0,
              style: { cursor: "nw-resize" }
            }
          ),
          /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: h.x + p,
              cy: h.y,
              r: t / 6,
              fill: x ? "#16A34A" : "#22c55e",
              stroke: x ? "#60A5FA" : "none",
              strokeWidth: x ? 2 : 0,
              style: { cursor: "ne-resize" }
            }
          ),
          /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: h.x,
              cy: h.y + y,
              r: t / 6,
              fill: x ? "#16A34A" : "#22c55e",
              stroke: x ? "#60A5FA" : "none",
              strokeWidth: x ? 2 : 0,
              style: { cursor: "sw-resize" }
            }
          ),
          /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: h.x + p,
              cy: h.y + y,
              r: t / 6,
              fill: x ? "#16A34A" : "#22c55e",
              stroke: x ? "#60A5FA" : "none",
              strokeWidth: x ? 2 : 0,
              style: { cursor: "se-resize" }
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: h.x - 10,
              y: h.y - 5,
              fontSize: c(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                I($.x, f),
                ", ",
                I($.y, f),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: h.x + p + 10,
              y: h.y - 5,
              fontSize: c(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                I(A.x, f),
                ", ",
                I(A.y, f),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: h.x - 10,
              y: h.y + y + 15,
              fontSize: c(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                I(S.x, f),
                ", ",
                I(S.y, f),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: h.x + p + 10,
              y: h.y + y + 15,
              fontSize: c(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                I(M.x, f),
                ", ",
                I(M.y, f),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: h.x + p / 2,
              y: h.y + y / 2,
              fontSize: c(12),
              fontWeight: "600",
              fill: "#22c55e",
              textAnchor: "middle",
              opacity: "0.9",
              children: [
                I(d.properties.height, f),
                " × ",
                I(d.properties.width, f),
                " = ",
                I(d.properties.area, f)
              ]
            }
          ),
          (() => {
            const w = d.properties.width, m = d.properties.height, O = d.properties.area;
            if (w <= 0 || m <= 0 || w !== Math.floor(w) || m !== Math.floor(m))
              return null;
            const ne = [];
            if (o.showFactorPairs && O > 1 && O <= 50) {
              const N = [];
              for (let L = 1; L <= Math.sqrt(O); L++)
                if (O % L === 0) {
                  const u = O / L;
                  (L !== w || u !== m) && N.push({ w: L, h: u });
                }
              N.forEach((L, u) => {
                const j = (u + 1) * (p + 20), D = {
                  x: h.x + j,
                  y: h.y,
                  width: L.w * e.zoom,
                  height: L.h * e.zoom
                };
                ne.push(
                  /* @__PURE__ */ s.jsx(
                    "rect",
                    {
                      x: D.x,
                      y: D.y,
                      width: D.width,
                      height: D.height,
                      fill: "rgba(168, 85, 247, 0.15)",
                      stroke: "#A855F7",
                      strokeWidth: "1",
                      strokeDasharray: "3,3",
                      opacity: "0.7"
                    },
                    `factor-${u}`
                  )
                );
              });
            }
            if (o.showCommutativeProperty && w !== m) {
              const N = {
                x: h.x - y - 30,
                y: h.y,
                width: m * e.zoom,
                height: w * e.zoom
              };
              ne.push(
                /* @__PURE__ */ s.jsxs("g", { children: [
                  /* @__PURE__ */ s.jsx(
                    "rect",
                    {
                      x: N.x,
                      y: N.y,
                      width: N.width,
                      height: N.height,
                      fill: "rgba(59, 130, 246, 0.15)",
                      stroke: "#3B82F6",
                      strokeWidth: "1",
                      strokeDasharray: "4,2",
                      opacity: "0.7"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      d: `M ${N.x + N.width + 5},${N.y + N.height / 2} L ${h.x - 5},${h.y + y / 2}`,
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
            if (o.showPrimeComposite && O > 1 && O <= 100) {
              const N = O > 1 && ![...Array(Math.floor(Math.sqrt(O)) + 1).keys()].slice(2).some((L) => O % L === 0);
              ne.push(
                /* @__PURE__ */ s.jsxs("g", { children: [
                  /* @__PURE__ */ s.jsx(
                    "circle",
                    {
                      cx: h.x + p + 15,
                      cy: h.y - 15,
                      r: "8",
                      fill: N ? "#10B981" : "#F59E0B",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "text",
                    {
                      x: h.x + p + 15,
                      y: h.y - 11,
                      fontSize: c(8),
                      fontWeight: "600",
                      fill: "white",
                      textAnchor: "middle",
                      children: N ? "P" : "C"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "text",
                    {
                      x: h.x + p + 30,
                      y: h.y - 10,
                      fontSize: c(8),
                      fontWeight: "500",
                      fill: N ? "#10B981" : "#F59E0B",
                      textAnchor: "start",
                      opacity: "0.8",
                      children: N ? "Prime" : "Composite"
                    }
                  )
                ] }, "prime-composite")
              );
            }
            if (o.showGCF && w > 1 && m > 1) {
              const N = (u, j) => j === 0 ? u : N(j, u % j), L = N(w, m);
              if (L > 1) {
                const u = L * e.zoom, j = w / L, D = m / L, X = [];
                for (let re = 0; re < j; re++)
                  for (let ee = 0; ee < D; ee++)
                    X.push(
                      /* @__PURE__ */ s.jsx(
                        "rect",
                        {
                          x: h.x + re * u,
                          y: h.y + ee * u,
                          width: u,
                          height: u,
                          fill: "none",
                          stroke: "#10B981",
                          strokeWidth: "1.5",
                          opacity: "0.6"
                        },
                        `gcf-${re}-${ee}`
                      )
                    );
                ne.push(
                  /* @__PURE__ */ s.jsxs("g", { children: [
                    X,
                    /* @__PURE__ */ s.jsxs(
                      "text",
                      {
                        x: h.x + p / 2,
                        y: h.y - 25,
                        fontSize: c(10),
                        fontWeight: "600",
                        fill: "#10B981",
                        textAnchor: "middle",
                        opacity: "0.9",
                        children: [
                          "GCF(",
                          w,
                          ", ",
                          m,
                          ") = ",
                          L
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsxs(
                      "text",
                      {
                        x: h.x + p / 2,
                        y: h.y - 10,
                        fontSize: c(8),
                        fontWeight: "500",
                        fill: "#10B981",
                        textAnchor: "middle",
                        opacity: "0.7",
                        children: [
                          j,
                          " × ",
                          D,
                          " = ",
                          j * D,
                          " squares"
                        ]
                      }
                    )
                  ] }, "gcf")
                );
              }
            }
            if (o.showLCM && w > 1 && m > 1) {
              const N = (j, D) => D === 0 ? j : N(D, j % D), u = ((j, D) => j * D / N(j, D))(w, m);
              if (u > Math.max(w, m) && u <= 100) {
                const j = u * e.zoom, D = u * e.zoom, X = h.x, re = h.y + y - D, ee = u / w, ue = u / m, ge = [];
                for (let H = 0; H < ue; H++)
                  for (let P = 0; P < ee; P++) {
                    const W = X + P * (w * e.zoom), B = re + H * (m * e.zoom);
                    ge.push(
                      /* @__PURE__ */ s.jsx(
                        "rect",
                        {
                          x: W,
                          y: B,
                          width: w * e.zoom,
                          height: m * e.zoom,
                          fill: "rgba(245, 158, 11, 0.1)",
                          stroke: "#F59E0B",
                          strokeWidth: "1",
                          strokeDasharray: "2,2",
                          opacity: "0.6",
                          pointerEvents: "none"
                        },
                        `shadow-${H}-${P}`
                      )
                    );
                  }
                ne.push(
                  /* @__PURE__ */ s.jsxs("g", { children: [
                    /* @__PURE__ */ s.jsx(
                      "rect",
                      {
                        x: X,
                        y: re,
                        width: j,
                        height: D,
                        fill: "none",
                        stroke: "#F59E0B",
                        strokeWidth: "2",
                        strokeDasharray: "5,5",
                        opacity: "0.8",
                        pointerEvents: "none"
                      }
                    ),
                    ge,
                    /* @__PURE__ */ s.jsxs(
                      "text",
                      {
                        x: X + j / 2,
                        y: re - 15,
                        fontSize: c(10),
                        fontWeight: "600",
                        fill: "#F59E0B",
                        textAnchor: "middle",
                        opacity: "0.9",
                        pointerEvents: "none",
                        children: [
                          "LCM(",
                          w,
                          ", ",
                          m,
                          ") = ",
                          u
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsxs(
                      "text",
                      {
                        x: X + j / 2,
                        y: re - 2,
                        fontSize: c(8),
                        fontWeight: "500",
                        fill: "#F59E0B",
                        textAnchor: "middle",
                        opacity: "0.7",
                        pointerEvents: "none",
                        children: [
                          ee,
                          " × ",
                          ue,
                          " = ",
                          ee * ue,
                          " rectangles"
                        ]
                      }
                    )
                  ] }, "lcm")
                );
              }
            }
            if (o.showDistributiveProperty && w > 2 && m > 1) {
              const N = Math.floor(w / 2), L = N * e.zoom, u = (w - N) * e.zoom;
              ne.push(
                /* @__PURE__ */ s.jsxs("g", { children: [
                  /* @__PURE__ */ s.jsx(
                    "line",
                    {
                      x1: h.x + L,
                      y1: h.y,
                      x2: h.x + L,
                      y2: h.y + y,
                      stroke: "#EF4444",
                      strokeWidth: "2",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "text",
                    {
                      x: h.x + L / 2,
                      y: h.y + y + 20,
                      fontSize: c(9),
                      fontWeight: "500",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: [
                        m,
                        " × ",
                        N,
                        " = ",
                        m * N
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "text",
                    {
                      x: h.x + L + u / 2,
                      y: h.y + y + 20,
                      fontSize: c(9),
                      fontWeight: "500",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: [
                        m,
                        " × ",
                        w - N,
                        " = ",
                        m * (w - N)
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "text",
                    {
                      x: h.x + p / 2,
                      y: h.y + y + 40,
                      fontSize: c(10),
                      fontWeight: "600",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.9",
                      children: [
                        m,
                        " × (",
                        N,
                        " + ",
                        w - N,
                        ") = ",
                        m * N,
                        " + ",
                        m * (w - N),
                        " = ",
                        O
                      ]
                    }
                  )
                ] }, "distributive")
              );
            }
            return ne;
          })()
        ] }, d.id);
      case "circle":
        const z = n(d.properties.center), Y = d.properties.radius * e.zoom;
        return /* @__PURE__ */ s.jsxs("g", { children: [
          x && /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: z.x,
              cy: z.y,
              r: Y + 3,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 4,
              opacity: 0.5
            }
          ),
          /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: z.x,
              cy: z.y,
              r: Y,
              fill: x ? "rgba(168, 85, 247, 0.15)" : "rgba(168, 85, 247, 0.1)",
              stroke: x ? "#7C3AED" : "#A855F7",
              strokeWidth: x ? 3 : 2,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: z.x,
              cy: z.y,
              r: t / 6,
              fill: x ? "#7C3AED" : "#A855F7",
              stroke: x ? "#60A5FA" : "none",
              strokeWidth: x ? 2 : 0,
              style: { cursor: "move" }
            }
          ),
          /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: z.x + Y,
              cy: z.y,
              r: t / 6,
              fill: x ? "#7C3AED" : "#A855F7",
              stroke: x ? "#60A5FA" : "none",
              strokeWidth: x ? 2 : 0,
              style: { cursor: "ew-resize" }
            }
          ),
          /* @__PURE__ */ s.jsx(
            "line",
            {
              x1: z.x,
              y1: z.y,
              x2: z.x + Y,
              y2: z.y,
              stroke: x ? "#7C3AED" : "#A855F7",
              strokeWidth: "1",
              opacity: "0.6",
              strokeDasharray: "2,2"
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: z.x,
              y: z.y - Y - 25,
              fontSize: c(10),
              fontWeight: "500",
              fill: x ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "r = ",
                ie(d.properties.radius)
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: z.x,
              y: z.y - Y - 15,
              fontSize: c(9),
              fontWeight: "400",
              fill: x ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.7",
              children: [
                "A = ",
                ie(d.properties.area)
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: z.x,
              y: z.y - Y - 5,
              fontSize: c(9),
              fontWeight: "400",
              fill: x ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.7",
              children: [
                "C = ",
                ie(d.properties.circumference)
              ]
            }
          )
        ] }, d.id);
      case "triangle":
        const te = d.properties.vertices.map(n), [Z, _, K] = te;
        return /* @__PURE__ */ s.jsxs("g", { children: [
          x && /* @__PURE__ */ s.jsx(
            "path",
            {
              d: `M ${Z.x},${Z.y} L ${_.x},${_.y} L ${K.x},${K.y} Z`,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ s.jsx(
            "path",
            {
              d: `M ${Z.x},${Z.y} L ${_.x},${_.y} L ${K.x},${K.y} Z`,
              fill: x ? "rgba(245, 101, 101, 0.15)" : "rgba(245, 101, 101, 0.1)",
              stroke: x ? "#DC2626" : "#F56565",
              strokeWidth: x ? 3 : 2,
              style: { cursor: "pointer" }
            }
          ),
          te.map((w, m) => /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: w.x,
              cy: w.y,
              r: t / 6,
              fill: x ? "#DC2626" : "#F56565",
              stroke: x ? "#60A5FA" : "none",
              strokeWidth: x ? 2 : 0,
              style: { cursor: "move" }
            },
            `vertex-${m}`
          )),
          /* @__PURE__ */ s.jsxs(
            "text",
            {
              x: (Z.x + _.x + K.x) / 3,
              y: (Z.y + _.y + K.y) / 3,
              fontSize: c(10),
              fontWeight: "500",
              fill: x ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "A = ",
                ie(d.properties.area)
              ]
            }
          ),
          /* @__PURE__ */ s.jsx(
            "text",
            {
              x: (Z.x + _.x) / 2,
              y: (Z.y + _.y) / 2 - 10,
              fontSize: c(8),
              fontWeight: "400",
              fill: x ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: ie(d.properties.sideC)
            }
          ),
          /* @__PURE__ */ s.jsx(
            "text",
            {
              x: (_.x + K.x) / 2 + 10,
              y: (_.y + K.y) / 2,
              fontSize: c(8),
              fontWeight: "400",
              fill: x ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: ie(d.properties.sideA)
            }
          ),
          /* @__PURE__ */ s.jsx(
            "text",
            {
              x: (Z.x + K.x) / 2 - 10,
              y: (Z.y + K.y) / 2,
              fontSize: c(8),
              fontWeight: "400",
              fill: x ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: ie(d.properties.sideB)
            }
          )
        ] }, d.id);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("defs", { children: /* @__PURE__ */ s.jsx(
      "marker",
      {
        id: "arrowhead",
        markerWidth: "10",
        markerHeight: "7",
        refX: "9",
        refY: "3.5",
        orient: "auto",
        children: /* @__PURE__ */ s.jsx(
          "polygon",
          {
            points: "0 0, 10 3.5, 0 7",
            fill: "#3B82F6",
            opacity: "0.6"
          }
        )
      }
    ) }),
    /* @__PURE__ */ s.jsx("g", { className: "objects", children: r.map(F) })
  ] });
}
function Et({ capabilities: r, viewport: e, activeTool: t, selectedObjectsCount: n }) {
  return r ? /* @__PURE__ */ s.jsxs("div", { className: "absolute top-2 left-2 text-xs text-gray-500 bg-white/80 p-2 rounded shadow-sm", children: [
    /* @__PURE__ */ s.jsxs("div", { children: [
      "Input: ",
      r.hasTouch ? "👆" : "🖱️",
      " ",
      r.hasPencil ? "✏️" : ""
    ] }),
    /* @__PURE__ */ s.jsxs("div", { children: [
      "Zoom: ",
      e.zoom >= 1 ? e.zoom.toFixed(1) : e.zoom.toFixed(2),
      "×"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { children: [
      "Center: (",
      e.center.x.toFixed(1),
      ", ",
      e.center.y.toFixed(1),
      ")"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { children: [
      "Tool: ",
      t || "Pan Mode"
    ] }),
    n > 0 && /* @__PURE__ */ s.jsxs("div", { children: [
      "Selected: ",
      n,
      " object",
      n !== 1 ? "s" : ""
    ] })
  ] }) : null;
}
function Tt({ selectedObject: r, onDelete: e, onClose: t }) {
  if (!r) return null;
  const n = () => {
    e(), t();
  }, a = () => {
    switch (r.type) {
      case "ray":
        const { startPoint: i, endPoint: o, slope: c } = r.properties, g = Math.abs(i.x) < 1e-3 && Math.abs(i.y) < 1e-3;
        return /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Line Details" }),
          /* @__PURE__ */ s.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Start: (",
              I(i.x, 1),
              ", ",
              I(i.y, 1),
              ")"
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "End: (",
              I(o.x, 1),
              ", ",
              I(o.y, 1),
              ")"
            ] }),
            g && /* @__PURE__ */ s.jsxs("div", { children: [
              "Fraction: ",
              Math.round(o.y),
              "/",
              Math.round(o.x)
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Slope: ",
              isFinite(c) ? c.toFixed(3) : "undefined"
            ] })
          ] })
        ] });
      case "rectangle":
        const { x: f, y: C, width: v, height: F, area: d } = r.properties;
        return /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Rectangle Details" }),
          /* @__PURE__ */ s.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Position: (",
              I(f, 1),
              ", ",
              I(C, 1),
              ")"
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Size: ",
              I(v, 1),
              " × ",
              I(F, 1)
            ] })
          ] })
        ] });
      case "circle":
        const { center: x, radius: E, diameter: l, circumference: h, area: p } = r.properties;
        return /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Circle Details" }),
          /* @__PURE__ */ s.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Center: (",
              I(x.x, 1),
              ", ",
              I(x.y, 1),
              ")"
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Radius: ",
              ie(E)
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Diameter: ",
              ie(l)
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Circumference: ",
              ie(h)
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Area: ",
              ie(p)
            ] })
          ] })
        ] });
      case "triangle":
        const { vertices: y, sideA: S, sideB: M, sideC: $, angleA: A, angleB: z, angleC: Y, area: te, perimeter: Z, type: _ } = r.properties;
        return /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Triangle Details" }),
          /* @__PURE__ */ s.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Type: ",
              _
            ] }),
            /* @__PURE__ */ s.jsx("div", { children: "Vertices:" }),
            /* @__PURE__ */ s.jsxs("div", { className: "ml-2", children: [
              /* @__PURE__ */ s.jsxs("div", { children: [
                "A: (",
                I(y[0].x, 1),
                ", ",
                I(y[0].y, 1),
                ")"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                "B: (",
                I(y[1].x, 1),
                ", ",
                I(y[1].y, 1),
                ")"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                "C: (",
                I(y[2].x, 1),
                ", ",
                I(y[2].y, 1),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Sides: ",
              ie(S),
              ", ",
              ie(M),
              ", ",
              ie($)
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Angles: ",
              ie(A),
              "°, ",
              ie(z),
              "°, ",
              ie(Y),
              "°"
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Area: ",
              ie(te)
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              "Perimeter: ",
              ie(Z)
            ] })
          ] })
        ] });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "fixed top-20 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 min-w-48", children: [
    a(),
    /* @__PURE__ */ s.jsxs("div", { className: "mt-3 pt-2 border-t border-gray-100 flex gap-2", children: [
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          onClick: n,
          className: "flex items-center gap-1 px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded transition-colors",
          children: [
            /* @__PURE__ */ s.jsx("span", { children: "🗑️" }),
            "Delete"
          ]
        }
      ),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          onClick: t,
          className: "flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded transition-colors",
          children: [
            /* @__PURE__ */ s.jsx("span", { children: "✕" }),
            "Close"
          ]
        }
      )
    ] })
  ] });
}
function At() {
  const [r, e] = se(!1), t = pe(null), n = ye(), { toggleSetting: a, setFontScale: i, setGridScale: o, setSnapPrecision: c, setCoordinateSystem: g, resetToDefaults: f } = n;
  xe(() => {
    function v(F) {
      t.current && !t.current.contains(F.target) && e(!1);
    }
    if (r)
      return document.addEventListener("mousedown", v, !0), document.addEventListener("click", v, !0), () => {
        document.removeEventListener("mousedown", v, !0), document.removeEventListener("click", v, !0);
      };
  }, [r]);
  const C = [
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
          label: "Slope/Division Answer (x=1)",
          description: "Blue dot showing slope value and division answer at x=1"
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
      title: "Rectangle Concepts",
      subtitle: "Educational features for rectangles and areas",
      settings: [
        {
          key: "showFactorPairs",
          label: "Factor Pairs",
          description: "Show all rectangles with the same area"
        },
        {
          key: "showCommutativeProperty",
          label: "Commutative Property",
          description: "Show flipped rectangle (w×h = h×w)"
        },
        {
          key: "showDistributiveProperty",
          label: "Distributive Property",
          description: "Split rectangle to show a(b+c) = ab+ac"
        },
        {
          key: "showPrimeComposite",
          label: "Prime vs Composite",
          description: "Badge showing if area is prime or composite"
        },
        {
          key: "showGCF",
          label: "Greatest Common Factor",
          description: "Largest square tiling both dimensions"
        },
        {
          key: "showLCM",
          label: "Least Common Multiple",
          description: "Smallest rectangle fitting both dimensions"
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
  return /* @__PURE__ */ s.jsxs("div", { ref: t, className: "fixed bottom-4 left-4 z-50", children: [
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        onClick: () => e(!r),
        className: "flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors",
        title: "Visualization Settings",
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-lg", children: "⚙️" }),
          /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Settings" }),
          /* @__PURE__ */ s.jsx("span", { className: `text-xs transition-transform ${r ? "" : "rotate-180"}`, children: "▼" })
        ]
      }
    ),
    r && /* @__PURE__ */ s.jsxs("div", { className: "settings-panel absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[28rem] overflow-y-auto", children: [
      /* @__PURE__ */ s.jsx("div", { className: "sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg", children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-semibold text-gray-800", children: "Visualization Settings" }),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: f,
            className: "text-xs text-blue-600 hover:text-blue-800 font-medium",
            children: "Reset All"
          }
        )
      ] }) }),
      /* @__PURE__ */ s.jsx("div", { className: "settings-scrollable p-4 space-y-5", children: C.map((v, F) => /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsxs("div", { className: `${F > 0 ? "border-t border-gray-100 pt-4" : ""} mb-3`, children: [
          /* @__PURE__ */ s.jsx("h4", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wide", children: v.title }),
          v.subtitle && /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: v.subtitle })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "space-y-2.5", children: [
          v.settings.map((d) => /* @__PURE__ */ s.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "checkbox",
                checked: n[d.key],
                onChange: () => a(d.key),
                className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              }
            ),
            /* @__PURE__ */ s.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ s.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: d.label }),
              /* @__PURE__ */ s.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: d.description })
            ] })
          ] }, d.key)),
          v.title === "Display" && /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Font Size" }),
              /* @__PURE__ */ s.jsxs("span", { className: "text-xs text-gray-500 font-mono", children: [
                Math.round(n.fontScale * 100),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-400", children: "A" }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "range",
                  min: "0.8",
                  max: "2.0",
                  step: "0.1",
                  value: n.fontScale,
                  onChange: (d) => i(parseFloat(d.target.value)),
                  className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-600", children: "A" })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: "Increase font size for better visibility on TVs and projectors" }),
            /* @__PURE__ */ s.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ s.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Grid Density" }),
                /* @__PURE__ */ s.jsxs("span", { className: "text-xs text-gray-500 font-mono", children: [
                  Math.round(n.gridScale * 100),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-400", children: "Sparse" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "range",
                    min: "0.2",
                    max: "5.0",
                    step: "0.1",
                    value: n.gridScale,
                    onChange: (d) => o(parseFloat(d.target.value)),
                    className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-600", children: "Dense" })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: "Adjust grid line spacing for different zoom levels and detail needs" })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ s.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Coordinate System" }),
              /* @__PURE__ */ s.jsx("div", { className: "space-y-2", children: [
                { value: "cartesian", label: "Cartesian Only", desc: "Standard x-y grid" },
                { value: "polar", label: "Polar Only", desc: "Circular coordinate system" },
                { value: "both", label: "Both Systems", desc: "Overlay polar on Cartesian" }
              ].map((d) => /* @__PURE__ */ s.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "coordinateSystem",
                    value: d.value,
                    checked: n.coordinateSystem === d.value,
                    onChange: (x) => g(x.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ s.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: d.label }),
                  /* @__PURE__ */ s.jsx("div", { className: "text-xs text-gray-500", children: d.desc })
                ] })
              ] }, d.value)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ s.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Snap Precision" }),
              /* @__PURE__ */ s.jsx("div", { className: "space-y-2", children: [
                { value: "adaptive", label: "Adaptive", desc: "Automatically adjusts based on zoom level" },
                { value: "whole", label: "Whole Numbers", desc: "Snap to 1, 2, 3, etc." },
                { value: "half", label: "Half Units", desc: "Snap to 0.5, 1.0, 1.5, etc." },
                { value: "quarter", label: "Quarter Units", desc: "Snap to 0.25, 0.5, 0.75, etc." },
                { value: "tenth", label: "Tenth Units", desc: "Snap to 0.1, 0.2, 0.3, etc." }
              ].map((d) => /* @__PURE__ */ s.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "snapPrecision",
                    value: d.value,
                    checked: n.snapPrecision === d.value,
                    onChange: (x) => c(x.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ s.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: d.label }),
                  /* @__PURE__ */ s.jsx("div", { className: "text-xs text-gray-500", children: d.desc })
                ] })
              ] }, d.value)) }),
              /* @__PURE__ */ s.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: "Controls where objects can be placed when snap-to-grid is enabled" })
            ] })
          ] })
        ] })
      ] }, v.title)) }),
      /* @__PURE__ */ s.jsx("div", { className: "sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg", children: /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Toggle features to explore different mathematical concepts" }) })
    ] })
  ] });
}
const ve = class ve {
  constructor() {
    Q(this, "examplesData", null);
    Q(this, "isLoading", !1);
  }
  static getInstance() {
    return ve.instance || (ve.instance = new ve()), ve.instance;
  }
  async loadExamples() {
    if (this.examplesData)
      return this.examplesData;
    if (this.isLoading)
      return await new Promise((e) => {
        const t = () => {
          this.isLoading ? setTimeout(t, 50) : e(void 0);
        };
        t();
      }), this.examplesData;
    this.isLoading = !0;
    try {
      const e = await fetch("/examples.json");
      if (!e.ok)
        throw new Error(`Failed to load examples: ${e.status}`);
      const t = await e.json();
      if (!t.examples || !Array.isArray(t.examples))
        throw new Error("Invalid examples data: missing examples array");
      if (!t.categories || !Array.isArray(t.categories))
        throw new Error("Invalid examples data: missing categories array");
      for (const n of t.examples)
        if (!n.id || !n.title || !n.objects || !Array.isArray(n.objects))
          throw new Error(`Invalid example: ${n.id || "unknown"}`);
      return this.examplesData = t, this.examplesData;
    } catch (e) {
      return console.error("Failed to load examples:", e), this.examplesData = {
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
  async getExampleById(e) {
    return (await this.getExamples()).find((n) => n.id === e) || null;
  }
  async getExamplesByCategory(e) {
    return (await this.getExamples()).filter((n) => n.category === e);
  }
  generateObjectId() {
    return `example_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  convertExampleObjectToMathObject(e) {
    const t = {
      id: this.generateObjectId(),
      type: e.type,
      visible: !0,
      selected: !1,
      zIndex: 0
    };
    switch (e.type) {
      case "ray":
        return {
          ...t,
          type: "ray",
          properties: {
            startPoint: e.properties.startPoint,
            endPoint: e.properties.endPoint,
            slope: (e.properties.endPoint.y - e.properties.startPoint.y) / (e.properties.endPoint.x - e.properties.startPoint.x)
          }
        };
      case "rectangle":
        return {
          ...t,
          type: "rectangle",
          properties: {
            x: e.properties.x,
            y: e.properties.y,
            width: e.properties.width,
            height: e.properties.height,
            area: e.properties.width * e.properties.height
          }
        };
      case "circle":
        return {
          ...t,
          type: "circle",
          properties: {
            center: e.properties.center,
            radius: e.properties.radius,
            diameter: e.properties.diameter,
            circumference: e.properties.circumference,
            area: e.properties.area
          }
        };
      case "triangle":
        return {
          ...t,
          type: "triangle",
          properties: {
            vertices: e.properties.vertices,
            sideA: e.properties.sideA,
            sideB: e.properties.sideB,
            sideC: e.properties.sideC,
            angleA: e.properties.angleA,
            angleB: e.properties.angleB,
            angleC: e.properties.angleC,
            area: e.properties.area,
            perimeter: e.properties.perimeter,
            type: e.properties.type
          }
        };
      default:
        throw new Error(`Unknown object type: ${e.type}`);
    }
  }
  async applyExample(e) {
    const t = await this.getExampleById(e);
    if (!t)
      throw new Error(`Example not found: ${e}`);
    const n = he.getState(), a = ye.getState();
    try {
      n.getAllObjects().forEach((o) => {
        n.removeObject(o.id);
      }), n.clearSelection(), t.viewport && n.setViewport(t.viewport), Object.entries(t.settings).forEach(([o, c]) => {
        o in a && typeof c == "boolean" ? (a.toggleSetting(o), a[o] !== c && a.toggleSetting(o)) : o === "snapPrecision" && typeof c == "string" ? a.setSnapPrecision(c) : o === "coordinateSystem" && typeof c == "string" ? a.setCoordinateSystem(c) : o === "fontScale" && typeof c == "number" ? a.setFontScale(c) : o === "gridScale" && typeof c == "number" && a.setGridScale(c);
      }), t.objects.forEach((o) => {
        const c = this.convertExampleObjectToMathObject(o);
        n.addObject(c);
      }), console.log(`Applied example: ${t.title}`);
    } catch (i) {
      throw console.error("Failed to apply example:", i), new Error(`Failed to apply example "${t.title}": ${i.message}`);
    }
  }
  async clearCanvas() {
    const e = he.getState(), t = ye.getState();
    e.getAllObjects().forEach((a) => {
      e.removeObject(a.id);
    }), e.clearSelection(), e.setViewport({
      zoom: 20,
      center: { x: 0, y: 0 }
    }), t.resetToDefaults(), console.log("Canvas cleared and reset to defaults");
  }
  // Get examples suitable for first-time users
  async getBeginnerExamples() {
    return (await this.getExamples()).filter((t) => t.difficulty === "beginner");
  }
  // Get a random example from a specific category
  async getRandomExampleFromCategory(e) {
    const t = await this.getExamplesByCategory(e);
    if (t.length === 0) return null;
    const n = Math.floor(Math.random() * t.length);
    return t[n];
  }
};
Q(ve, "instance");
let $e = ve;
const Se = $e.getInstance();
function kt() {
  const [r, e] = se(!1), [t, n] = se([]), [a, i] = se([]), [o, c] = se("all"), [g, f] = se(!1), [C, v] = se(null), F = pe(null);
  xe(() => {
    function p(y) {
      F.current && !F.current.contains(y.target) && e(!1);
    }
    if (r)
      return document.addEventListener("mousedown", p, !0), document.addEventListener("click", p, !0), () => {
        document.removeEventListener("mousedown", p, !0), document.removeEventListener("click", p, !0);
      };
  }, [r]), xe(() => {
    (async () => {
      try {
        f(!0), v(null);
        const [y, S] = await Promise.all([
          Se.getExamples(),
          Se.getCategories()
        ]);
        n(y), i(S);
      } catch (y) {
        console.error("Failed to load examples:", y), v("Failed to load examples");
      } finally {
        f(!1);
      }
    })();
  }, []);
  const d = async (p) => {
    try {
      f(!0), v(null), await Se.applyExample(p.id), e(!1);
    } catch (y) {
      console.error("Failed to apply example:", y), v(`Failed to load "${p.title}"`);
    } finally {
      f(!1);
    }
  }, x = async () => {
    try {
      f(!0), v(null), await Se.clearCanvas(), e(!1);
    } catch (p) {
      console.error("Failed to clear canvas:", p), v("Failed to clear canvas");
    } finally {
      f(!1);
    }
  }, E = o === "all" ? t : t.filter((p) => p.category === o), l = (p) => {
    switch (p) {
      case "beginner":
        return "text-green-600 bg-green-50";
      case "intermediate":
        return "text-yellow-600 bg-yellow-50";
      case "advanced":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  }, h = (p) => {
    switch (p) {
      case "beginner":
        return "●";
      case "intermediate":
        return "●●";
      case "advanced":
        return "●●●";
      default:
        return "?";
    }
  };
  return /* @__PURE__ */ s.jsxs("div", { ref: F, className: "fixed top-4 right-4 z-50", children: [
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        onClick: () => e(!r),
        className: "flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors",
        title: "Mathematical Examples",
        disabled: g,
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-lg", children: "📚" }),
          /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Examples" }),
          /* @__PURE__ */ s.jsx("span", { className: `text-xs transition-transform ${r ? "rotate-180" : ""}`, children: "▼" })
        ]
      }
    ),
    r && /* @__PURE__ */ s.jsxs("div", { className: "absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[32rem] overflow-hidden", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-semibold text-gray-800", children: "Mathematical Examples" }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: x,
              className: "text-xs text-red-600 hover:text-red-800 font-medium",
              disabled: g,
              children: "Clear All"
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "mt-2", children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            value: o,
            onChange: (p) => c(p.target.value),
            className: "w-full text-xs border border-gray-200 rounded px-2 py-1 bg-white",
            disabled: g,
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "all", children: "All Categories" }),
              a.map((p) => /* @__PURE__ */ s.jsx("option", { value: p.id, children: p.name }, p.id))
            ]
          }
        ) })
      ] }),
      C && /* @__PURE__ */ s.jsx("div", { className: "px-4 py-2 bg-red-50 border-b border-red-100", children: /* @__PURE__ */ s.jsx("p", { className: "text-xs text-red-600", children: C }) }),
      /* @__PURE__ */ s.jsx("div", { className: "overflow-y-auto max-h-80 examples-scrollable", children: g ? /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ s.jsx("div", { className: "text-sm text-gray-500", children: "Loading examples..." }) }) : E.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ s.jsx("div", { className: "text-sm text-gray-500", children: "No examples available" }) }) : /* @__PURE__ */ s.jsx("div", { className: "p-2 space-y-1", children: E.map((p) => {
        var y;
        return /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => d(p),
            className: "w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors group",
            disabled: g,
            children: /* @__PURE__ */ s.jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ s.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s.jsx("h4", { className: "text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate", children: p.title }),
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    className: `text-xs px-1.5 py-0.5 rounded font-medium ${l(p.difficulty)}`,
                    title: `${p.difficulty} difficulty`,
                    children: h(p.difficulty)
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500 mt-1 line-clamp-2", children: p.description }),
              a.find((S) => S.id === p.category) && /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-400", children: (y = a.find((S) => S.id === p.category)) == null ? void 0 : y.name }),
                /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-300", children: "•" }),
                /* @__PURE__ */ s.jsxs("span", { className: "text-xs text-gray-400", children: [
                  p.objects.length,
                  " object",
                  p.objects.length !== 1 ? "s" : ""
                ] })
              ] })
            ] }) })
          },
          p.id
        );
      }) }) }),
      /* @__PURE__ */ s.jsx("div", { className: "sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg", children: /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Click an example to explore mathematical concepts" }) })
    ] })
  ] });
}
const Ke = "grix-tutorial-completed";
function Ot() {
  const [r, e] = se(!1), [t, n] = se(0), [a, i] = se(!1);
  xe(() => {
    localStorage.getItem(Ke) || e(!0);
  }, []);
  const o = [
    {
      title: "Welcome to Grix! 🎯",
      content: "Grix is a mathematical visualization platform where you can explore concepts like slopes, fractions, multiplication, and more through interactive graphics.",
      highlight: null
    },
    {
      title: "Explore Examples 📚",
      content: "Click the 'Examples' button in the top-right corner to load pre-made mathematical demonstrations. Perfect for getting started!",
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
  ], c = () => {
    t < o.length - 1 ? n(t + 1) : f();
  }, g = () => {
    f();
  }, f = () => {
    localStorage.setItem(Ke, "true"), e(!1);
  }, C = async () => {
    try {
      i(!0);
      const d = await Se.getBeginnerExamples();
      d.length > 0 && await Se.applyExample(d[0].id), f();
    } catch (d) {
      console.error("Failed to load example:", d), f();
    } finally {
      i(!1);
    }
  };
  if (!r) return null;
  const v = o[t], F = t === o.length - 1;
  return /* @__PURE__ */ s.jsxs("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-md mx-4 p-6 relative", children: [
      /* @__PURE__ */ s.jsx("div", { className: "flex gap-2 mb-4", children: o.map((d, x) => /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `h-2 flex-1 rounded-full ${x <= t ? "bg-blue-500" : "bg-gray-200"}`
        },
        x
      )) }),
      /* @__PURE__ */ s.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ s.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-3", children: v.title }),
        /* @__PURE__ */ s.jsx("p", { className: "text-gray-600 leading-relaxed mb-6", children: v.content })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: g,
            className: "flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors",
            disabled: a,
            children: "Skip Tutorial"
          }
        ),
        F ? /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: C,
            className: "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50",
            disabled: a,
            children: a ? "Loading..." : "Try an Example!"
          }
        ) : /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: c,
            className: "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors",
            children: "Next"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "text-center mt-4 text-sm text-gray-500", children: [
        "Step ",
        t + 1,
        " of ",
        o.length
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: g,
          className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100",
          title: "Close tutorial",
          children: "×"
        }
      )
    ] }),
    v.highlight && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      v.highlight === "examples" && /* @__PURE__ */ s.jsx("div", { className: "fixed top-4 right-4 z-[10000] pointer-events-none", children: /* @__PURE__ */ s.jsx("div", { className: "w-24 h-12 border-4 border-yellow-400 rounded-lg animate-pulse" }) }),
      v.highlight === "settings" && /* @__PURE__ */ s.jsx("div", { className: "fixed bottom-4 left-4 z-[10000] pointer-events-none", children: /* @__PURE__ */ s.jsx("div", { className: "w-24 h-12 border-4 border-yellow-400 rounded-lg animate-pulse" }) }),
      v.highlight === "toolbar" && /* @__PURE__ */ s.jsx("div", { className: "fixed top-4 left-4 z-[10000] pointer-events-none", children: /* @__PURE__ */ s.jsx("div", { className: "w-48 h-12 border-4 border-yellow-400 rounded-lg animate-pulse" }) })
    ] })
  ] });
}
const Je = (r, e) => {
  const t = e * Math.PI / 180, n = Math.cos(t), a = Math.sin(t);
  return {
    x: r.x * n - r.y * a,
    y: r.x * a + r.y * n
  };
}, Nt = (r, e) => ({
  x: r.x * e,
  y: r.y * e
}), Qe = (r, e) => {
  switch (e) {
    case "x":
      return { x: r.x, y: -r.y };
    case "y":
      return { x: -r.x, y: r.y };
    case "origin":
      return { x: -r.x, y: -r.y };
    default:
      return r;
  }
}, Dt = We((r, e) => ({
  isTransforming: !1,
  activeTransform: null,
  selectedObject: null,
  rotateObject: (t, n, a) => {
    if (!a) {
      console.log(`No canvas API provided for rotation of ${t}`);
      return;
    }
    const i = a.getObject(t);
    if (i) {
      if (i.type === "ray") {
        if (Math.abs(i.properties.startPoint.x) < 1e-3 && Math.abs(i.properties.startPoint.y) < 1e-3) {
          const c = Je(i.properties.endPoint, n);
          a.updateObject(t, {
            properties: {
              ...i.properties,
              endPoint: c
            }
          });
        }
      } else if (i.type === "rectangle") {
        const o = i.properties.x + i.properties.width / 2, c = i.properties.y + i.properties.height / 2, g = {
          x: i.properties.x - o,
          y: i.properties.y - c
        }, f = Je(g, n);
        a.updateObject(t, {
          properties: {
            ...i.properties,
            x: f.x + o,
            y: f.y + c
          }
        });
      }
    }
  },
  scaleObject: (t, n, a) => {
    if (!a) {
      console.log(`No canvas API provided for scaling of ${t}`);
      return;
    }
    const i = a.getObject(t);
    if (i)
      if (i.type === "ray") {
        if (Math.abs(i.properties.startPoint.x) < 1e-3 && Math.abs(i.properties.startPoint.y) < 1e-3) {
          const c = Nt(i.properties.endPoint, n);
          a.updateObject(t, {
            properties: {
              ...i.properties,
              endPoint: c
            }
          });
        }
      } else i.type === "rectangle" && a.updateObject(t, {
        properties: {
          ...i.properties,
          width: i.properties.width * n,
          height: i.properties.height * n,
          area: i.properties.width * n * i.properties.height * n
        }
      });
  },
  reflectObject: (t, n, a) => {
    if (!a) {
      console.log(`No canvas API provided for reflection of ${t}`);
      return;
    }
    const i = a.getObject(t);
    if (i) {
      if (i.type === "ray") {
        if (Math.abs(i.properties.startPoint.x) < 1e-3 && Math.abs(i.properties.startPoint.y) < 1e-3) {
          const c = Qe(i.properties.endPoint, n);
          a.updateObject(t, {
            properties: {
              ...i.properties,
              endPoint: c
            }
          });
        }
      } else if (i.type === "rectangle") {
        const o = Qe({ x: i.properties.x, y: i.properties.y }, n);
        a.updateObject(t, {
          properties: {
            ...i.properties,
            x: o.x,
            y: o.y
          }
        });
      }
    }
  },
  rotate90: (t, n) => {
    e().rotateObject(t, 90, n);
  },
  rotate180: (t, n) => {
    e().rotateObject(t, 180, n);
  },
  rotate270: (t, n) => {
    e().rotateObject(t, 270, n);
  },
  setActiveTransform: (t) => {
    r({
      activeTransform: t,
      isTransforming: t !== null
    });
  },
  setSelectedObject: (t) => {
    r({ selectedObject: t });
  },
  clearTransform: () => {
    r({
      isTransforming: !1,
      activeTransform: null,
      selectedObject: null
    });
  }
}));
function zt({
  width: r = 800,
  height: e = 600,
  className: t = "",
  onObjectInteraction: n
}) {
  const a = pe(null), {
    viewport: i,
    setViewport: o,
    objects: c,
    selectedObjects: g,
    snapToGrid: f,
    gridDensity: C,
    canvasSize: v,
    setCanvasSize: F,
    removeObject: d,
    clearSelection: x,
    selectObject: E,
    screenToWorld: l,
    worldToScreen: h,
    getObject: p,
    updateObject: y
  } = he(), S = vt(), { activeTool: M, setActiveTool: $, eventBus: A } = De(), { rotate90: z, rotate180: Y, rotate270: te, scaleObject: Z, setSelectedObject: _ } = Dt();
  xe(() => {
    F({ width: r, height: e });
  }, [r, e, F]);
  const K = pe({
    isPanning: !1,
    startPoint: { x: 0, y: 0 },
    startCenter: { x: 0, y: 0 }
  }), w = pe({
    isDown: !1,
    startPoint: { x: 0, y: 0 },
    hasMoved: !1,
    dragThreshold: 5,
    // pixels
    pendingSelection: null
  }), [m, O] = se(null), [ne, N] = se(!1), [L, u] = se(!1), j = pe({
    worldPoint: { x: 0, y: 0 },
    timestamp: 0,
    overlappingObjects: [],
    currentIndex: 0
  }), D = ce((b, G = 0.5) => {
    const k = [];
    for (const T of c) {
      let R = 0, q = 1 / 0, U = !1;
      switch (T.type) {
        case "ray":
          const oe = Oe(
            b,
            T.properties.startPoint,
            T.properties.endPoint
          );
          oe <= G && (R = 100, q = oe, U = !0);
          break;
        case "rectangle":
          const { x: V, y: de, width: me, height: fe } = T.properties, ze = [
            { start: { x: V, y: de }, end: { x: V + me, y: de } },
            // bottom
            { start: { x: V + me, y: de }, end: { x: V + me, y: de + fe } },
            // right
            { start: { x: V + me, y: de + fe }, end: { x: V, y: de + fe } },
            // top
            { start: { x: V, y: de + fe }, end: { x: V, y: de } }
            // left
          ];
          let je = 1 / 0;
          for (const Ae of ze) {
            const Ie = Oe(b, Ae.start, Ae.end);
            je = Math.min(je, Ie);
          }
          je <= G ? (R = 100, q = je, U = !0) : b.x >= V && b.x <= V + me && b.y >= de && b.y <= de + fe && (R = 50, q = 0, U = !0);
          break;
        case "circle":
          const { center: Re, radius: Fe } = T.properties, Le = Math.sqrt(
            (b.x - Re.x) ** 2 + (b.y - Re.y) ** 2
          ), Be = He(b, Re, Fe);
          Be <= G ? (R = 100, q = Be, U = !0) : Le <= Fe && (R = 50, q = Fe - Le, U = !0);
          break;
        case "triangle":
          const { vertices: be } = T.properties, nt = [
            [be[0], be[1]],
            [be[1], be[2]],
            [be[2], be[0]]
          ];
          let Te = 1 / 0;
          for (const [Ae, Ie] of nt) {
            const it = Oe(b, Ae, Ie);
            Te = Math.min(Te, it);
          }
          Te <= G ? (R = 100, q = Te, U = !0) : Ze(b, be) && (R = 50, q = 0, U = !0);
          break;
      }
      U && k.push({ object: T, priority: R, distance: q });
    }
    return k.sort((T, R) => T.priority !== R.priority ? R.priority - T.priority : T.distance !== R.distance ? T.distance - R.distance : (R.object.zIndex || 0) - (T.object.zIndex || 0)), k.map((T) => T.object);
  }, [c, Oe, Ze, He]), X = ce((b) => {
    const G = { x: b.x, y: b.y };
    w.current = {
      isDown: !0,
      startPoint: G,
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    };
    const k = l(G), R = D(k, 0.5);
    let q = !1, U = null;
    if (R.length > 0) {
      q = !0;
      const oe = Date.now(), V = j.current, de = Math.abs(k.x - V.worldPoint.x) < 0.1 && Math.abs(k.y - V.worldPoint.y) < 0.1, me = oe - V.timestamp < 500;
      if (de && me && V.overlappingObjects.length > 1) {
        const fe = (V.currentIndex + 1) % V.overlappingObjects.length, ze = V.overlappingObjects[fe];
        U = R.find((je) => je.id === ze) || R[0], j.current = {
          worldPoint: k,
          timestamp: oe,
          overlappingObjects: V.overlappingObjects,
          currentIndex: fe
        };
      } else
        U = R[0], j.current = {
          worldPoint: k,
          timestamp: oe,
          overlappingObjects: R.map((fe) => fe.id),
          currentIndex: 0
        };
      w.current.pendingSelection = {
        objectId: U.id,
        type: U.type
      }, E(U.id);
    } else
      j.current = {
        worldPoint: { x: 0, y: 0 },
        timestamp: 0,
        overlappingObjects: [],
        currentIndex: 0
      };
    (!q && !M || !q && M) && x(), (M || q) && S.handlePointerDown(b), !q && !M && (b.type === "touch" || b.type === "mouse") && (K.current = {
      isPanning: !0,
      startPoint: { x: b.x, y: b.y },
      startCenter: { ...i.center }
    });
  }, [i.center, S, M, $, c, l, h, i.zoom]), re = ce((b) => {
    const G = { x: b.x, y: b.y };
    if (b.type === "mouse" && M ? O(G) : M || O(null), w.current.isDown && !w.current.hasMoved) {
      const k = Math.abs(b.x - w.current.startPoint.x), T = Math.abs(b.y - w.current.startPoint.y);
      Math.sqrt(k * k + T * T) >= w.current.dragThreshold && (w.current.hasMoved = !0, u(!0), w.current.pendingSelection = null);
    }
    if (S.handlePointerMove(b), !M && K.current.isPanning) {
      const k = (b.x - K.current.startPoint.x) / i.zoom, T = (b.y - K.current.startPoint.y) / i.zoom;
      o({
        center: {
          x: K.current.startCenter.x - k,
          y: K.current.startCenter.y + T
          // Flip Y for mathematical coordinates
        }
      });
    }
  }, [i.zoom, o, S, M, O]), ee = ce((b) => {
    u(!1), w.current = {
      isDown: !1,
      startPoint: { x: 0, y: 0 },
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    }, S.handlePointerUp(b), K.current.isPanning = !1;
  }, [S, $]), ue = ce((b) => {
    switch (b.type) {
      case "pinch":
        if (b.scale && b.center) {
          const G = c.length;
          let k = b.scale;
          b.touches && b.touches > 1 && (k = 1 + (b.scale - 1) * 0.25);
          const T = G > 50 ? 100 : G > 20 ? 200 : 500, q = Math.max(0.1, Math.min(T, i.zoom * k));
          if (Math.abs(q - i.zoom) > 1e-3) {
            const U = q / i.zoom, oe = l(b.center), V = {
              x: oe.x + (i.center.x - oe.x) / U,
              y: oe.y + (i.center.y - oe.y) / U
            };
            o({
              zoom: q,
              center: V
            });
          }
        }
        break;
    }
  }, [i.zoom, i.center, o, c.length, l]), { capabilities: ge, touchTargetSize: H } = jt(
    a,
    {
      onPointerDown: X,
      onPointerMove: re,
      onPointerUp: ee,
      onGesture: ue
    },
    {
      enableGestures: !0,
      preventScrolling: !0
    }
  );
  xe(() => {
    const b = (k) => {
      switch (k.key) {
        case "Escape":
          M && (A.emit("tool:cancel", { toolId: M }), $(null));
          break;
        case "Delete":
        case "Backspace":
          g.length > 0 && (console.log("Deleting objects:", g), g.forEach((T) => {
            A.emit("object:removed", { objectId: T }), d(T);
          }), x(), $(null));
          break;
        case "r":
        case "R":
          if (g.length > 0 && !k.ctrlKey) {
            k.preventDefault();
            const T = { getObject: p, updateObject: y };
            g.forEach((R) => {
              k.shiftKey ? te(R, T) : z(R, T);
            });
          }
          break;
        case "f":
        case "F":
          if (g.length > 0 && !k.ctrlKey) {
            k.preventDefault();
            const T = { getObject: p, updateObject: y };
            g.forEach((R) => {
              Y(R, T);
            });
          }
          break;
        case "=":
        case "+":
          if (g.length > 0 && !k.ctrlKey) {
            k.preventDefault();
            const T = { getObject: p, updateObject: y };
            g.forEach((R) => {
              Z(R, 2, T);
            });
          }
          break;
        case "-":
        case "_":
          if (g.length > 0 && !k.ctrlKey) {
            k.preventDefault();
            const T = { getObject: p, updateObject: y };
            g.forEach((R) => {
              Z(R, 0.5, T);
            });
          }
          break;
      }
    }, G = (k) => {
      console.log("Object created, returning to pan mode:", k), x(), $(null);
    };
    return document.addEventListener("keydown", b), A.on("tool:creation-complete", G), () => {
      document.removeEventListener("keydown", b), A.off("tool:creation-complete", G);
    };
  }, [M, $, A, g, d, x]), xe(() => {
    g.length === 1 && !L ? N(!0) : N(!1);
  }, [g, L]);
  const P = ce(() => {
    N(!1);
  }, []), W = ce(() => {
    g.length > 0 && (g.forEach((b) => {
      A.emit("object:removed", { objectId: b }), d(b);
    }), x());
  }, [g, d, x, A]), B = ce(() => {
    const b = Math.min(1e3, i.zoom * 1.4);
    o({ zoom: b });
  }, [i.zoom, o]), J = ce(() => {
    const b = Math.max(0.01, i.zoom / 1.4);
    o({ zoom: b });
  }, [i.zoom, o]), le = ce(() => {
    o({ zoom: 20, center: { x: 0, y: 0 } });
  }, [o]), ae = ce(() => {
    o({ center: { x: 0, y: 0 } });
  }, [o]);
  return xe(() => {
    const b = (k) => {
      k.preventDefault();
      const R = he.getState().viewport;
      if (k.ctrlKey || k.metaKey) {
        const q = k.deltaY > 0 ? 0.9 : 1.1, U = Math.max(0.01, Math.min(1e3, R.zoom * q));
        o({ zoom: U });
      } else {
        const U = k.shiftKey ? k.deltaY : 0, oe = k.shiftKey ? 0 : k.deltaY, V = U * 1 / R.zoom, de = oe * 1 / R.zoom;
        o({
          center: {
            x: R.center.x + V,
            y: R.center.y - de
            // subtract because scroll down should move view down
          }
        });
      }
    }, G = a.current;
    if (G)
      return G.addEventListener("wheel", b, { passive: !1 }), () => {
        G.removeEventListener("wheel", b);
      };
  }, [o]), /* @__PURE__ */ s.jsxs("div", { className: `relative ${t}`, style: { width: r, height: e }, children: [
    /* @__PURE__ */ s.jsxs(
      "svg",
      {
        ref: a,
        width: r,
        height: e,
        className: "absolute inset-0 bg-white",
        style: { touchAction: "none" },
        children: [
          /* @__PURE__ */ s.jsx(
            St,
            {
              viewport: i,
              canvasSize: { width: r, height: e },
              worldToScreen: h,
              objects: c
            }
          ),
          /* @__PURE__ */ s.jsx(
            Mt,
            {
              objects: c,
              viewport: i,
              touchTargetSize: H,
              worldToScreen: h,
              selectedObjects: g,
              canvasSize: { width: r, height: e }
            }
          ),
          M && m && !w.current.isDown && /* @__PURE__ */ s.jsx(
            "circle",
            {
              cx: m.x,
              cy: m.y,
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
    /* @__PURE__ */ s.jsx(
      Et,
      {
        capabilities: ge,
        viewport: i,
        activeTool: M,
        selectedObjectsCount: g.length
      }
    ),
    /* @__PURE__ */ s.jsx(
      Pt,
      {
        viewport: i,
        onZoomIn: B,
        onZoomOut: J,
        onZoomReset: le,
        onCenterOnly: ae
      }
    ),
    ne && g.length === 1 && /* @__PURE__ */ s.jsx(
      Tt,
      {
        selectedObject: c.find((b) => b.id === g[0]) || null,
        onDelete: W,
        onClose: P
      }
    ),
    /* @__PURE__ */ s.jsx(At, {}),
    /* @__PURE__ */ s.jsx(kt, {}),
    /* @__PURE__ */ s.jsx(Ot, {})
  ] });
}
const et = [
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
  },
  {
    id: "circle-tool",
    name: "Circle Builder",
    icon: "⭕",
    description: "Create circles to explore circumference and area"
  },
  {
    id: "triangle-tool",
    name: "Triangle Builder",
    icon: "🔺",
    description: "Create triangles to explore angles and trigonometry"
  }
];
function Rt({ className: r = "" }) {
  const { activeTool: e, setActiveTool: t } = De(), [n, a] = se(!1), i = pe(null), o = (C) => {
    t(C), a(!1);
  }, c = () => {
    t(null), a(!1);
  }, g = () => {
    a(!n);
  }, f = et.find((C) => C.id === e);
  return xe(() => {
    const C = (v) => {
      i.current && !i.current.contains(v.target) && a(!1);
    };
    return n && document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [n]), /* @__PURE__ */ s.jsxs("div", { className: `flex items-center gap-2 p-2 bg-white border-b border-gray-200 ${r}`, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
      /* @__PURE__ */ s.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 32 32", className: "flex-shrink-0", children: [
        /* @__PURE__ */ s.jsx("rect", { width: "32", height: "32", fill: "#2563eb", rx: "6" }),
        /* @__PURE__ */ s.jsxs("g", { stroke: "#60A5FA", strokeWidth: "0.5", opacity: "0.6", children: [
          /* @__PURE__ */ s.jsx("line", { x1: "8", y1: "4", x2: "8", y2: "28" }),
          /* @__PURE__ */ s.jsx("line", { x1: "16", y1: "4", x2: "16", y2: "28" }),
          /* @__PURE__ */ s.jsx("line", { x1: "24", y1: "4", x2: "24", y2: "28" }),
          /* @__PURE__ */ s.jsx("line", { x1: "4", y1: "8", x2: "28", y2: "8" }),
          /* @__PURE__ */ s.jsx("line", { x1: "4", y1: "16", x2: "28", y2: "16" }),
          /* @__PURE__ */ s.jsx("line", { x1: "4", y1: "24", x2: "28", y2: "24" })
        ] }),
        /* @__PURE__ */ s.jsxs("g", { stroke: "#FFFFFF", strokeWidth: "1", children: [
          /* @__PURE__ */ s.jsx("line", { x1: "16", y1: "4", x2: "16", y2: "28" }),
          /* @__PURE__ */ s.jsx("line", { x1: "4", y1: "16", x2: "28", y2: "16" })
        ] }),
        /* @__PURE__ */ s.jsx("line", { x1: "16", y1: "16", x2: "24", y2: "8", stroke: "#22C55E", strokeWidth: "2" }),
        /* @__PURE__ */ s.jsx("circle", { cx: "16", cy: "16", r: "2", fill: "#FFFFFF" }),
        /* @__PURE__ */ s.jsx("circle", { cx: "24", cy: "8", r: "1.5", fill: "#22C55E" })
      ] }),
      /* @__PURE__ */ s.jsx("h1", { className: "text-lg font-semibold text-gray-800", children: "Grix" })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "relative", ref: i, children: [
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          onClick: g,
          className: `
            flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
            ${e ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}
          `,
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "text-lg", children: "🏗️" }),
            /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium", children: f ? f.name : "Build" }),
            /* @__PURE__ */ s.jsx("span", { className: `text-xs transition-transform ${n ? "rotate-180" : ""}`, children: "▼" })
          ]
        }
      ),
      n && /* @__PURE__ */ s.jsxs("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48", children: [
        et.map((C) => /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => o(C.id),
            className: `
                  w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors
                  ${e === C.id ? "bg-blue-50 text-blue-700" : "text-gray-700"}
                `,
            title: C.description,
            children: [
              /* @__PURE__ */ s.jsx("span", { className: "text-lg", children: C.icon }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("div", { className: "text-sm font-medium", children: C.name }),
                /* @__PURE__ */ s.jsx("div", { className: "text-xs text-gray-500", children: C.description })
              ] })
            ]
          },
          C.id
        )),
        e && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("div", { className: "border-t border-gray-100" }),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              onClick: c,
              className: "w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg transition-colors text-gray-600",
              children: [
                /* @__PURE__ */ s.jsx("span", { className: "text-lg", children: "✕" }),
                /* @__PURE__ */ s.jsx("span", { className: "text-sm", children: "Clear selection" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
class tt extends Ne.Component {
  constructor(e) {
    super(e), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(e) {
    return {
      hasError: !0,
      error: e
    };
  }
  componentDidCatch(e, t) {
    console.error("Canvas Error Boundary caught an error:", e, t), this.setState({
      error: e,
      errorInfo: t
    });
  }
  render() {
    var e, t;
    if (this.state.hasError) {
      const n = this.props.fallback;
      return n ? /* @__PURE__ */ s.jsx(n, { error: this.state.error }) : /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-center h-full bg-red-50 text-red-700 p-8", children: /* @__PURE__ */ s.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ s.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Something went wrong with the Canvas" }),
        /* @__PURE__ */ s.jsxs("details", { className: "text-sm", children: [
          /* @__PURE__ */ s.jsx("summary", { className: "cursor-pointer mb-2", children: "Error Details" }),
          /* @__PURE__ */ s.jsxs("pre", { className: "whitespace-pre-wrap text-left bg-red-100 p-4 rounded", children: [
            (e = this.state.error) == null ? void 0 : e.toString(),
            (t = this.state.errorInfo) == null ? void 0 : t.componentStack
          ] })
        ] }),
        /* @__PURE__ */ s.jsx(
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
class Ft {
  constructor() {
    Q(this, "id", "ray-tool");
    Q(this, "name", "Line Builder");
    Q(this, "context");
    Q(this, "state", {
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
    const t = this.context.state.getState();
    if (t.snapToGrid) {
      if (Math.sqrt(e.x * e.x + e.y * e.y) <= 0.75)
        return { x: 0, y: 0 };
      const i = ye.getState(), o = Ee(
        t.viewport,
        i.gridScale,
        i.snapPrecision
      );
      return this.context.math.snapToGrid(e, o);
    }
    return e;
  }
  findNearestHandle(e, t = 20) {
    this.context.canvas.screenToWorld(e);
    const n = this.context.canvas.getAllObjects();
    for (const a of n)
      if (a.type === "ray") {
        const i = a, o = this.context.canvas.worldToScreen(i.properties.startPoint), c = this.context.canvas.worldToScreen(i.properties.endPoint), g = this.context.math.distance(e, o), f = this.context.math.distance(e, c);
        if (g <= t)
          return { rayId: i.id, handle: "start" };
        if (f <= t)
          return { rayId: i.id, handle: "end" };
        const C = 8, v = c.x - o.x, F = c.y - o.y, d = Math.sqrt(v * v + F * F);
        if (d > 0) {
          const x = Math.max(0, Math.min(1, ((e.x - o.x) * v + (e.y - o.y) * F) / (d * d))), E = {
            x: o.x + x * v,
            y: o.y + x * F
          };
          if (this.context.math.distance(e, E) <= C)
            return { rayId: i.id, handle: "move" };
        }
      }
    return null;
  }
  onPointerDown(e) {
    const t = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(t)), a = this.findNearestHandle(t);
    if (a) {
      const i = this.context.canvas.getObject(a.rayId), o = this.context.state.getState().selectedObjects;
      if (i && o.includes(a.rayId)) {
        this.state.currentRay = i, this.state.dragTarget = a.handle, this.state.isCreating = !1, a.handle === "move" && (this.state.dragOffset = {
          x: n.x - i.properties.startPoint.x,
          y: n.y - i.properties.startPoint.y
        });
        return;
      }
    }
    if (!this.state.isCreating) {
      this.state.isCreating = !0, this.state.startPoint = n;
      const i = {
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
      this.state.currentRay = i, this.context.canvas.addObject(i);
    }
  }
  onPointerMove(e) {
    if (!this.state.currentRay) return;
    const t = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(t));
    if (this.state.isCreating) {
      const a = this.context.math.slope(this.state.currentRay.properties.startPoint, n), i = n.y - a * n.x;
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: {
          ...this.state.currentRay.properties,
          endPoint: n,
          slope: a,
          yIntercept: isFinite(a) ? i : this.state.currentRay.properties.startPoint.y
        }
      });
    } else if (this.state.dragTarget) {
      const a = this.context.canvas.getObject(this.state.currentRay.id);
      if (!a) return;
      const i = { ...a.properties };
      if (this.state.dragTarget === "start")
        i.startPoint = n;
      else if (this.state.dragTarget === "end")
        i.endPoint = n;
      else if (this.state.dragTarget === "move" && this.state.dragOffset) {
        const o = n.x - this.state.dragOffset.x - a.properties.startPoint.x, c = n.y - this.state.dragOffset.y - a.properties.startPoint.y;
        i.startPoint = {
          x: a.properties.startPoint.x + o,
          y: a.properties.startPoint.y + c
        }, i.endPoint = {
          x: a.properties.endPoint.x + o,
          y: a.properties.endPoint.y + c
        };
      }
      if (this.state.dragTarget === "start" || this.state.dragTarget === "end") {
        const o = this.context.math.slope(i.startPoint, i.endPoint);
        i.slope = o, i.yIntercept = isFinite(o) ? i.startPoint.y - o * i.startPoint.x : i.startPoint.y;
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
      const t = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(t)), a = this.state.currentRay.properties.startPoint;
      this.context.math.distance(a, n) < 0.1 ? this.context.canvas.removeObject(this.state.currentRay.id) : (this.context.events.emit("ray:created", {
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
function It() {
  return new Ft();
}
class $t {
  constructor() {
    Q(this, "id", "rectangle-tool");
    Q(this, "name", "Rectangle Builder");
    Q(this, "context");
    Q(this, "state", {
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
    const t = this.context.state.getState();
    if (t.snapToGrid) {
      if (Math.sqrt(e.x * e.x + e.y * e.y) <= 0.75)
        return { x: 0, y: 0 };
      const i = ye.getState(), o = Ee(
        t.viewport,
        i.gridScale,
        i.snapPrecision
      );
      return this.context.math.snapToGrid(e, o);
    }
    return e;
  }
  findRectangleAtPoint(e) {
    const t = this.context.canvas.getAllObjects();
    for (const n of t)
      if (n.type === "rectangle") {
        const a = n, { x: i, y: o, width: c, height: g } = a.properties;
        if (e.x >= i && e.x <= i + c && e.y >= o && e.y <= o + g)
          return a;
      }
    return null;
  }
  findNearestCorner(e, t, n = 0.5) {
    const { x: a, y: i, width: o, height: c } = t.properties, g = [
      { point: { x: a, y: i }, type: "corner-bl" },
      // bottom-left
      { point: { x: a + o, y: i }, type: "corner-br" },
      // bottom-right
      { point: { x: a, y: i + c }, type: "corner-tl" },
      // top-left
      { point: { x: a + o, y: i + c }, type: "corner-tr" }
      // top-right
    ];
    for (const f of g)
      if (this.context.math.distance(e, f.point) <= n)
        return f.type;
    return null;
  }
  onPointerDown(e) {
    const t = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(t)), a = this.findRectangleAtPoint(n);
    if (a && this.context.state.getState().selectedObjects.includes(a.id)) {
      const c = this.findNearestCorner(n, a);
      if (c) {
        this.state.currentRectangle = a, this.state.dragTarget = c, this.state.isCreating = !1;
        const { x: g, y: f, width: C, height: v } = a.properties;
        switch (c) {
          case "corner-tl":
            this.state.lockedCorner = { x: g + C, y: f };
            break;
          case "corner-tr":
            this.state.lockedCorner = { x: g, y: f };
            break;
          case "corner-bl":
            this.state.lockedCorner = { x: g + C, y: f + v };
            break;
          case "corner-br":
            this.state.lockedCorner = { x: g, y: f + v };
            break;
        }
        return;
      } else {
        this.state.currentRectangle = a, this.state.dragTarget = "move", this.state.dragOffset = {
          x: n.x - a.properties.x,
          y: n.y - a.properties.y
        }, this.state.isCreating = !1;
        return;
      }
    }
    this.state.isCreating = !0, this.state.startPoint = n;
    const i = {
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
    this.state.currentRectangle = i, this.context.canvas.addObject(i);
  }
  onPointerMove(e) {
    if (!this.state.currentRectangle) return;
    const t = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(t));
    if (this.state.isCreating && this.state.startPoint) {
      const a = Math.min(this.state.startPoint.x, n.x), i = Math.min(this.state.startPoint.y, n.y), o = Math.abs(n.x - this.state.startPoint.x), c = Math.abs(n.y - this.state.startPoint.y), g = o * c;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: a,
          y: i,
          width: o,
          height: c,
          area: g
        }
      });
    } else if (this.state.dragTarget === "move" && this.state.dragOffset) {
      const a = n.x - this.state.dragOffset.x, i = n.y - this.state.dragOffset.y;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          ...this.state.currentRectangle.properties,
          x: a,
          y: i
        }
      });
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith("corner-") && this.state.lockedCorner) {
      const a = this.state.lockedCorner, i = Math.min(n.x, a.x), o = Math.max(n.x, a.x), c = Math.min(n.y, a.y), g = Math.max(n.y, a.y), f = i, C = c, v = o - i, F = g - c, d = Math.max(0.1, v), x = Math.max(0.1, F), E = d * x;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: f,
          y: C,
          width: d,
          height: x,
          area: E
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
      const t = this.context.canvas.getObject(this.state.currentRectangle.id);
      t && (t.properties.width < 0.1 || t.properties.height < 0.1 ? this.context.canvas.removeObject(this.state.currentRectangle.id) : (this.context.events.emit("rectangle:created", {
        rectangleId: this.state.currentRectangle.id,
        rectangle: t
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
function Wt() {
  return new $t();
}
class Lt {
  constructor() {
    Q(this, "id", "circle-tool");
    Q(this, "name", "Circle Builder");
    Q(this, "context");
    Q(this, "state", {
      isCreating: !1,
      center: null,
      currentCircle: null,
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
  snapPoint(e) {
    const t = this.context.state.getState();
    if (t.snapToGrid) {
      if (Math.sqrt(e.x * e.x + e.y * e.y) <= 0.75)
        return { x: 0, y: 0 };
      const i = ye.getState(), o = Ee(
        t.viewport,
        i.gridScale,
        i.snapPrecision
      );
      return this.context.math.snapToGrid(e, o);
    }
    return e;
  }
  calculateCircleProperties(e, t) {
    const n = this.context.math.distance(e, t), a = n * 2, i = 2 * Math.PI * n, o = Math.PI * n * n;
    return { radius: n, diameter: a, circumference: i, area: o };
  }
  findCircleAtPoint(e) {
    const t = this.context.canvas.getAllObjects();
    for (const n of t)
      if (n.type === "circle") {
        const a = n;
        if (this.context.math.distance(e, a.properties.center) <= a.properties.radius + 0.5)
          return a;
      }
    return null;
  }
  findNearestHandle(e, t, n = 0.5) {
    const { center: a, radius: i } = t.properties;
    if (this.context.math.distance(e, a) <= n)
      return "center";
    const o = { x: a.x + i, y: a.y };
    return this.context.math.distance(e, o) <= n ? "radius" : null;
  }
  onPointerDown(e) {
    const t = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(t)), a = this.findCircleAtPoint(n);
    if (a && !this.context.state.getState().selectedObjects.includes(a.id))
      return;
    if (a && this.context.state.getState().selectedObjects.includes(a.id)) {
      const c = this.findNearestHandle(n, a);
      if (c) {
        this.state.currentCircle = a, this.state.dragTarget = c, this.state.isCreating = !1, c === "center" && (this.state.dragOffset = {
          x: n.x - a.properties.center.x,
          y: n.y - a.properties.center.y
        });
        return;
      } else {
        this.state.currentCircle = a, this.state.dragTarget = "center", this.state.isCreating = !1, this.state.dragOffset = {
          x: n.x - a.properties.center.x,
          y: n.y - a.properties.center.y
        };
        return;
      }
    }
    this.state.isCreating = !0, this.state.center = n;
    const i = {
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
    this.state.currentCircle = i, this.context.canvas.addObject(i);
  }
  onPointerMove(e) {
    if (!this.state.currentCircle) return;
    const t = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(t));
    if (this.state.isCreating && this.state.center) {
      const a = this.calculateCircleProperties(this.state.center, n);
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          center: this.state.center,
          ...a
        }
      });
    } else if (this.state.dragTarget === "center" && this.state.dragOffset) {
      const a = {
        x: n.x - this.state.dragOffset.x,
        y: n.y - this.state.dragOffset.y
      };
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          ...this.state.currentCircle.properties,
          center: a
        }
      });
    } else if (this.state.dragTarget === "radius") {
      const a = this.state.currentCircle.properties.center, i = this.calculateCircleProperties(a, n);
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          center: a,
          ...i
        }
      });
    }
    this.context.events.emit("circle:update", {
      circleId: this.state.currentCircle.id,
      circle: this.context.canvas.getObject(this.state.currentCircle.id)
    });
  }
  onPointerUp(e) {
    if (this.state.isCreating && this.state.currentCircle) {
      const t = this.context.canvas.getObject(this.state.currentCircle.id);
      t && (t.properties.radius < 0.1 ? this.context.canvas.removeObject(this.state.currentCircle.id) : (this.context.events.emit("circle:created", {
        circleId: this.state.currentCircle.id,
        circle: t
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
function Bt() {
  return new Lt();
}
class Gt {
  constructor() {
    Q(this, "id", "triangle-tool");
    Q(this, "name", "Triangle Builder");
    Q(this, "context");
    Q(this, "state", {
      isCreating: !1,
      creationStep: 0,
      vertices: [null, null, null],
      currentTriangle: null,
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
  snapPoint(e) {
    const t = this.context.state.getState();
    if (t.snapToGrid) {
      if (Math.sqrt(e.x * e.x + e.y * e.y) <= 0.75)
        return { x: 0, y: 0 };
      const i = ye.getState(), o = Ee(
        t.viewport,
        i.gridScale,
        i.snapPrecision
      );
      return this.context.math.snapToGrid(e, o);
    }
    return e;
  }
  calculateTriangleProperties(e) {
    const [t, n, a] = e, i = this.context.math.distance(n, a), o = this.context.math.distance(t, a), c = this.context.math.distance(t, n), g = Math.acos((o * o + c * c - i * i) / (2 * o * c)) * 180 / Math.PI, f = Math.acos((i * i + c * c - o * o) / (2 * i * c)) * 180 / Math.PI, C = 180 - g - f, v = Math.abs((n.x - t.x) * (a.y - t.y) - (a.x - t.x) * (n.y - t.y)) / 2, F = i + o + c;
    let d = "scalene";
    const x = 0.1;
    return Math.abs(g - 90) < x || Math.abs(f - 90) < x || Math.abs(C - 90) < x ? d = "right" : g > 90 || f > 90 || C > 90 ? d = "obtuse" : g < 90 && f < 90 && C < 90 && (d = "acute"), Math.abs(i - o) < x && Math.abs(o - c) < x ? d = "equilateral" : (Math.abs(i - o) < x || Math.abs(o - c) < x || Math.abs(i - c) < x) && (d = "isosceles"), {
      sideA: i,
      sideB: o,
      sideC: c,
      angleA: g,
      angleB: f,
      angleC: C,
      area: v,
      perimeter: F,
      type: d
    };
  }
  findTriangleAtPoint(e) {
    const t = this.context.canvas.getAllObjects();
    for (const n of t)
      if (n.type === "triangle") {
        const a = n, [i, o, c] = a.properties.vertices, g = (o.y - c.y) * (i.x - c.x) + (c.x - o.x) * (i.y - c.y), f = ((o.y - c.y) * (e.x - c.x) + (c.x - o.x) * (e.y - c.y)) / g, C = ((c.y - i.y) * (e.x - c.x) + (i.x - c.x) * (e.y - c.y)) / g, v = 1 - f - C;
        if (f >= 0 && C >= 0 && v >= 0)
          return a;
      }
    return null;
  }
  findNearestVertex(e, t, n = 0.5) {
    const a = t.properties.vertices;
    for (let i = 0; i < a.length; i++)
      if (this.context.math.distance(e, a[i]) <= n)
        return `vertex${i}`;
    return null;
  }
  onPointerDown(e) {
    const t = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(t)), a = this.findTriangleAtPoint(n);
    if (a && this.context.state.getState().selectedObjects.includes(a.id)) {
      const o = this.findNearestVertex(n, a);
      if (o) {
        this.state.currentTriangle = a, this.state.dragTarget = o, this.state.isCreating = !1;
        return;
      } else {
        this.state.currentTriangle = a, this.state.dragTarget = "move";
        const c = {
          x: (a.properties.vertices[0].x + a.properties.vertices[1].x + a.properties.vertices[2].x) / 3,
          y: (a.properties.vertices[0].y + a.properties.vertices[1].y + a.properties.vertices[2].y) / 3
        };
        this.state.dragOffset = {
          x: n.x - c.x,
          y: n.y - c.y
        }, this.state.isCreating = !1;
        return;
      }
    }
    if (!this.state.isCreating) {
      this.state.isCreating = !0, this.state.creationStep = 0, this.state.vertices = [n, null, null];
      const i = { x: n.x + 3, y: n.y };
      this.state.vertices[1] = i, this.state.creationStep = 1;
      const o = {
        id: this.generateId(),
        type: "triangle",
        properties: {
          vertices: [n, i, n],
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
      this.state.currentTriangle = o, this.context.canvas.addObject(o);
    }
  }
  onPointerMove(e) {
    if (!this.state.currentTriangle) return;
    const t = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(t));
    if (this.state.isCreating && this.state.creationStep === 1) {
      const [a, i] = this.state.vertices;
      if (a && i) {
        const o = { x: i.x, y: n.y }, c = [a, i, o], g = this.calculateTriangleProperties(c);
        this.context.canvas.updateObject(this.state.currentTriangle.id, {
          properties: {
            vertices: c,
            ...g
          }
        });
      }
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith("vertex")) {
      const a = parseInt(this.state.dragTarget.replace("vertex", "")), i = [...this.state.currentTriangle.properties.vertices];
      i[a] = n;
      const o = this.calculateTriangleProperties(i);
      this.context.canvas.updateObject(this.state.currentTriangle.id, {
        properties: {
          vertices: i,
          ...o
        }
      });
    } else if (this.state.dragTarget === "move" && this.state.dragOffset) {
      const a = {
        x: n.x - this.state.dragOffset.x,
        y: n.y - this.state.dragOffset.y
      }, i = {
        x: (this.state.currentTriangle.properties.vertices[0].x + this.state.currentTriangle.properties.vertices[1].x + this.state.currentTriangle.properties.vertices[2].x) / 3,
        y: (this.state.currentTriangle.properties.vertices[0].y + this.state.currentTriangle.properties.vertices[1].y + this.state.currentTriangle.properties.vertices[2].y) / 3
      }, o = {
        x: a.x - i.x,
        y: a.y - i.y
      }, c = [
        { x: this.state.currentTriangle.properties.vertices[0].x + o.x, y: this.state.currentTriangle.properties.vertices[0].y + o.y },
        { x: this.state.currentTriangle.properties.vertices[1].x + o.x, y: this.state.currentTriangle.properties.vertices[1].y + o.y },
        { x: this.state.currentTriangle.properties.vertices[2].x + o.x, y: this.state.currentTriangle.properties.vertices[2].y + o.y }
      ];
      this.context.canvas.updateObject(this.state.currentTriangle.id, {
        properties: {
          ...this.state.currentTriangle.properties,
          vertices: c
        }
      });
    }
    this.context.events.emit("triangle:update", {
      triangleId: this.state.currentTriangle.id,
      triangle: this.context.canvas.getObject(this.state.currentTriangle.id)
    });
  }
  onPointerUp(e) {
    if (this.state.isCreating && this.state.currentTriangle && this.state.creationStep === 1) {
      const t = this.context.canvas.getObject(this.state.currentTriangle.id);
      t && (t.properties.area < 0.1 ? this.context.canvas.removeObject(this.state.currentTriangle.id) : (this.context.events.emit("triangle:created", {
        triangleId: this.state.currentTriangle.id,
        triangle: t
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
function Yt() {
  return new Gt();
}
class _t {
  constructor() {
    Q(this, "id", "area-counter");
    Q(this, "name", "Area Counter");
    Q(this, "context");
    Q(this, "badges", /* @__PURE__ */ new Map());
    Q(this, "badgeElements", /* @__PURE__ */ new Map());
  }
  init(e) {
    this.context = e, e.events.on("rectangle:created", this.handleRectangleCreated.bind(this)), e.events.on("rectangle:update", this.handleRectangleUpdated.bind(this)), e.events.on("object:removed", this.handleObjectRemoved.bind(this)), this.createBadgesForExistingRectangles();
    const t = e.state.subscribe((n) => {
      this.updateBadgePositions();
    });
    this.unsubscribeFromState = t;
  }
  destroy() {
    this.context.events.off("rectangle:created", this.handleRectangleCreated.bind(this)), this.context.events.off("rectangle:update", this.handleRectangleUpdated.bind(this)), this.context.events.off("object:removed", this.handleObjectRemoved.bind(this)), this.unsubscribeFromState && this.unsubscribeFromState(), this.badgeElements.forEach((e) => {
      e.remove();
    }), this.badgeElements.clear(), this.badges.clear();
  }
  createBadgesForExistingRectangles() {
    this.context.canvas.getAllObjects().forEach((t) => {
      t.type === "rectangle" && this.createBadge(t);
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
    const t = {
      rectangleId: e.id,
      x: e.properties.x,
      y: e.properties.y,
      width: e.properties.width,
      height: e.properties.height,
      area: e.properties.area,
      visible: !0
    };
    this.badges.set(e.id, t), this.createBadgeElement(t);
  }
  updateBadge(e) {
    const t = this.badges.get(e.id);
    t && (t.x = e.properties.x, t.y = e.properties.y, t.width = e.properties.width, t.height = e.properties.height, t.area = e.properties.area, this.updateBadgeElement(t));
  }
  removeBadge(e) {
    const t = this.badgeElements.get(e);
    t && (t.remove(), this.badgeElements.delete(e)), this.badges.delete(e);
  }
  createBadgeElement(e) {
    const t = document.createElement("div");
    t.className = "area-badge", t.style.cssText = `
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
    `, (document.querySelector("[data-grix-canvas]") || document.body).appendChild(t), this.badgeElements.set(e.rectangleId, t), this.updateBadgeElement(e);
  }
  updateBadgeElement(e) {
    const t = this.badgeElements.get(e.rectangleId);
    if (!t) return;
    const n = e.x + e.width / 2, a = e.y + e.height / 2, i = this.context.canvas.worldToScreen({ x: n, y: a }), o = this.formatArea(e.area, e.width, e.height);
    t.textContent = o;
    const c = t.getBoundingClientRect();
    t.style.left = `${i.x - c.width / 2}px`, t.style.top = `${i.y - c.height / 2}px`, t.style.display = "none";
  }
  formatArea(e, t, n) {
    return "";
  }
  updateBadgePositions() {
    this.badges.forEach((e) => {
      this.updateBadgeElement(e);
    });
  }
  // Additional public methods for external control
  showBadge(e) {
    const t = this.badges.get(e);
    t && (t.visible = !0, this.updateBadgeElement(t));
  }
  hideBadge(e) {
    const t = this.badges.get(e);
    if (t) {
      t.visible = !1;
      const n = this.badgeElements.get(e);
      n && (n.style.display = "none");
    }
  }
  showAllBadges() {
    this.badges.forEach((e, t) => {
      this.showBadge(t);
    });
  }
  hideAllBadges() {
    this.badges.forEach((e, t) => {
      this.hideBadge(t);
    });
  }
}
function Xt() {
  return new _t();
}
function qt() {
  const { registerPlugin: r } = De(), e = pe(!1);
  return xe(() => {
    if (e.current) return;
    const t = It(), n = Wt(), a = Bt(), i = Yt(), o = Xt();
    return r(t), r(n), r(a), r(i), r(o), e.current = !0, () => {
    };
  }, [r]), /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col h-screen bg-gray-50", children: [
    /* @__PURE__ */ s.jsx(Rt, {}),
    /* @__PURE__ */ s.jsx("div", { className: "flex-1 relative", "data-grix-canvas": !0, children: /* @__PURE__ */ s.jsx(
      zt,
      {
        width: window.innerWidth,
        height: window.innerHeight - 60,
        className: "absolute inset-0"
      }
    ) })
  ] });
}
function Ht() {
  return /* @__PURE__ */ s.jsx(tt, { children: /* @__PURE__ */ s.jsx(bt, { children: /* @__PURE__ */ s.jsx(tt, { children: /* @__PURE__ */ s.jsx(qt, {}) }) }) });
}
const Vt = "0.1.0";
export {
  zt as Canvas,
  Ht as GrixApp,
  bt as PluginManagerProvider,
  Rt as ToolBar,
  Xt as createAreaCounter,
  It as createRayTool,
  Wt as createRectangleTool,
  he as useCanvasStore,
  jt as useInputSystem,
  De as usePluginManager,
  Vt as version
};
