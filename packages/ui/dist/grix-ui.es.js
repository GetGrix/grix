var ze = Object.defineProperty;
var Fe = (t, e, s) => e in t ? ze(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var J = (t, e, s) => Fe(t, typeof e != "symbol" ? e + "" : e, s);
import ye, { createContext as $e, useState as Q, useRef as ne, useEffect as se, useContext as Ie, useCallback as K } from "react";
var ge = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function Le() {
  if (Me) return he;
  Me = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function s(i, o, r) {
    var c = null;
    if (r !== void 0 && (c = "" + r), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      r = {};
      for (var d in o)
        d !== "key" && (r[d] = o[d]);
    } else r = o;
    return o = r.ref, {
      $$typeof: t,
      type: i,
      key: c,
      ref: o !== void 0 ? o : null,
      props: r
    };
  }
  return he.Fragment = e, he.jsx = s, he.jsxs = s, he;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function We() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    function t(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === k ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case P:
          return "Fragment";
        case h:
          return "Profiler";
        case a:
          return "StrictMode";
        case M:
          return "Suspense";
        case R:
          return "SuspenseList";
        case E:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case p:
            return "Portal";
          case m:
            return (u.displayName || "Context") + ".Provider";
          case y:
            return (u._context.displayName || "Context") + ".Consumer";
          case b:
            var O = u.render;
            return u = u.displayName, u || (u = O.displayName || O.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case S:
            return O = u.displayName || null, O !== null ? O : t(u.type) || "Memo";
          case W:
            O = u._payload, u = u._init;
            try {
              return t(u(O));
            } catch {
            }
        }
      return null;
    }
    function e(u) {
      return "" + u;
    }
    function s(u) {
      try {
        e(u);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var _ = O.error, f = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return _.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), e(u);
      }
    }
    function i(u) {
      if (u === P) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === W)
        return "<...>";
      try {
        var O = t(u);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var u = B.A;
      return u === null ? null : u.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function c(u) {
      if (X.call(u, "key")) {
        var O = Object.getOwnPropertyDescriptor(u, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function d(u, O) {
      function _() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: _,
        configurable: !0
      });
    }
    function x() {
      var u = t(this.type);
      return re[u] || (re[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function g(u, O, _, f, w, T, L, G) {
      return _ = T.ref, u = {
        $$typeof: l,
        type: u,
        key: O,
        props: T,
        _owner: w
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: x
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
        value: L
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function v(u, O, _, f, w, T, L, G) {
      var z = O.children;
      if (z !== void 0)
        if (f)
          if (q(z)) {
            for (f = 0; f < z.length; f++)
              j(z[f]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(z);
      if (X.call(O, "key")) {
        z = t(u);
        var H = Object.keys(O).filter(function(C) {
          return C !== "key";
        });
        f = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", oe[z + f] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          z,
          H,
          z
        ), oe[z + f] = !0);
      }
      if (z = null, _ !== void 0 && (s(_), z = "" + _), c(O) && (s(O.key), z = "" + O.key), "key" in O) {
        _ = {};
        for (var V in O)
          V !== "key" && (_[V] = O[V]);
      } else _ = O;
      return z && d(
        _,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), g(
        u,
        z,
        T,
        w,
        o(),
        _,
        L,
        G
      );
    }
    function j(u) {
      typeof u == "object" && u !== null && u.$$typeof === l && u._store && (u._store.validated = 1);
    }
    var N = ye, l = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), m = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), B = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, q = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    N = {
      "react-stack-bottom-frame": function(u) {
        return u();
      }
    };
    var U, re = {}, ce = N["react-stack-bottom-frame"].bind(
      N,
      r
    )(), ie = A(i(r)), oe = {};
    ue.Fragment = P, ue.jsx = function(u, O, _, f, w) {
      var T = 1e4 > B.recentlyCreatedOwnerStacks++;
      return v(
        u,
        O,
        _,
        !1,
        f,
        w,
        T ? Error("react-stack-top-frame") : ce,
        T ? A(i(u)) : ie
      );
    }, ue.jsxs = function(u, O, _, f, w) {
      var T = 1e4 > B.recentlyCreatedOwnerStacks++;
      return v(
        u,
        O,
        _,
        !0,
        f,
        w,
        T ? Error("react-stack-top-frame") : ce,
        T ? A(i(u)) : ie
      );
    };
  }()), ue;
}
var we;
function _e() {
  return we || (we = 1, process.env.NODE_ENV === "production" ? ge.exports = Le() : ge.exports = We()), ge.exports;
}
var n = _e();
const de = {
  // Vector operations
  distance(t, e) {
    const s = e.x - t.x, i = e.y - t.y;
    return Math.sqrt(s * s + i * i);
  },
  slope(t, e) {
    const s = e.x - t.x, i = e.y - t.y;
    return Math.abs(s) < Number.EPSILON ? s === 0 || s > 0 ? 1 / 0 : -1 / 0 : i / s;
  },
  angle(t, e) {
    const s = e.x - t.x, i = e.y - t.y;
    return Math.atan2(i, s);
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
    const i = s.width / 2, o = s.height / 2, r = (t.x - e.center.x) * e.zoom, c = (t.y - e.center.y) * e.zoom;
    return {
      x: i + r,
      y: o - c
      // Flip Y axis for mathematical coordinates
    };
  },
  screenToWorld(t, e, s) {
    const i = s.width / 2, o = s.height / 2, r = (t.x - i) / e.zoom, c = (o - t.y) / e.zoom;
    return {
      x: e.center.x + r,
      y: e.center.y + c
    };
  }
}, le = {
  // Detect device capabilities
  detectCapabilities() {
    const t = "ontouchstart" in window || navigator.maxTouchPoints > 0, e = t && navigator.maxTouchPoints > 1, s = !0, i = window.matchMedia("(hover: hover)").matches;
    return {
      hasTouch: t,
      hasPencil: e,
      hasKeyboard: s,
      hasHover: i,
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
class Ye {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
  }
  on(e, s) {
    this.listeners.has(e) || this.listeners.set(e, []), this.listeners.get(e).push(s);
  }
  off(e, s) {
    const i = this.listeners.get(e);
    if (i) {
      const o = i.indexOf(s);
      o > -1 && i.splice(o, 1);
    }
  }
  emit(e, s) {
    const i = this.listeners.get(e);
    i && i.forEach((o) => {
      try {
        o(s);
      } catch (r) {
        console.error(`Error in event handler for ${e}:`, r);
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
const Se = (t) => {
  let e;
  const s = /* @__PURE__ */ new Set(), i = (g, v) => {
    const j = typeof g == "function" ? g(e) : g;
    if (!Object.is(j, e)) {
      const N = e;
      e = v ?? (typeof j != "object" || j === null) ? j : Object.assign({}, e, j), s.forEach((l) => l(e, N));
    }
  }, o = () => e, d = { setState: i, getState: o, getInitialState: () => x, subscribe: (g) => (s.add(g), () => s.delete(g)) }, x = e = t(i, o, d);
  return d;
}, Ge = (t) => t ? Se(t) : Se, Be = (t) => t;
function Xe(t, e = Be) {
  const s = ye.useSyncExternalStore(
    t.subscribe,
    () => e(t.getState()),
    () => e(t.getInitialState())
  );
  return ye.useDebugValue(s), s;
}
const Ee = (t) => {
  const e = Ge(t), s = (i) => Xe(e, i);
  return Object.assign(s, e), s;
}, je = (t) => t ? Ee(t) : Ee, ee = je((t, e) => ({
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
    t((i) => ({
      viewport: { ...i.viewport, ...s }
    }));
  },
  // Object management
  addObject: (s) => {
    t((i) => ({
      objects: [...i.objects, s]
    }));
  },
  removeObject: (s) => {
    t((i) => ({
      objects: i.objects.filter((o) => o.id !== s),
      selectedObjects: i.selectedObjects.filter((o) => o !== s)
    }));
  },
  updateObject: (s, i) => {
    t((o) => ({
      objects: o.objects.map(
        (r) => r.id === s ? { ...r, ...i } : r
      )
    }));
  },
  // Selection management
  selectObject: (s, i = !1) => {
    t((o) => i ? {
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
  getObject: (s) => e().objects.find((i) => i.id === s),
  getAllObjects: () => e().objects,
  getSelectedObjects: () => {
    const s = e();
    return s.objects.filter((i) => s.selectedObjects.includes(i.id));
  },
  screenToWorld: (s) => {
    const { viewport: i, canvasSize: o } = e();
    return de.screenToWorld(s, i, o);
  },
  worldToScreen: (s) => {
    const { viewport: i, canvasSize: o } = e();
    return de.worldToScreen(s, i, o);
  }
})), qe = () => ({
  addObject: (t) => ee.getState().addObject(t),
  removeObject: (t) => ee.getState().removeObject(t),
  updateObject: (t, e) => ee.getState().updateObject(t, e),
  getObject: (t) => ee.getState().getObject(t),
  getAllObjects: () => ee.getState().getAllObjects(),
  screenToWorld: (t) => ee.getState().screenToWorld(t),
  worldToScreen: (t) => ee.getState().worldToScreen(t)
}), Ue = () => ({
  getState: () => {
    const t = ee.getState();
    return {
      viewport: t.viewport,
      objects: t.objects,
      selectedObjects: t.selectedObjects,
      snapToGrid: t.snapToGrid,
      gridDensity: t.gridDensity
    };
  },
  setState: (t) => {
    ee.setState(t);
  },
  subscribe: (t) => ee.subscribe((e) => {
    t({
      viewport: e.viewport,
      objects: e.objects,
      selectedObjects: e.selectedObjects,
      snapToGrid: e.snapToGrid,
      gridDensity: e.gridDensity
    });
  })
}), De = $e(null);
function fe() {
  const t = Ie(De);
  if (!t)
    throw new Error("usePluginManager must be used within PluginManagerProvider");
  return t;
}
function He({ children: t }) {
  const [e] = Q(() => new Ye()), [s] = Q(() => /* @__PURE__ */ new Map()), [i] = Q(() => /* @__PURE__ */ new Map()), [o, r] = Q(null), c = ne(), d = ne(), x = ne();
  c.current || (c.current = qe()), d.current || (d.current = Ue()), x.current || (x.current = {
    distance: de.distance,
    slope: de.slope,
    snapToGrid: de.snapToGrid,
    calculateArea: de.calculateArea
  });
  const g = c.current, v = d.current, j = x.current, N = (a) => {
    if (s.has(a.id)) {
      console.warn(`Plugin ${a.id} is already registered`);
      return;
    }
    const h = {
      canvas: g,
      events: e,
      state: v,
      math: j
    };
    s.set(a.id, a), i.set(a.id, h);
    try {
      a.init(h), console.log(`Plugin ${a.id} initialized successfully`);
    } catch (y) {
      console.error(`Failed to initialize plugin ${a.id}:`, y), s.delete(a.id), i.delete(a.id);
    }
  }, l = (a) => {
    var y;
    const h = s.get(a);
    if (h) {
      try {
        (y = h.destroy) == null || y.call(h);
      } catch (m) {
        console.error(`Error destroying plugin ${a}:`, m);
      }
      s.delete(a), i.delete(a), o === a && r(null);
    }
  }, p = () => Array.from(s.values());
  se(() => {
    e.emit("tool:changed", { previous: null, current: o });
  }, [o, e]), se(() => {
    const a = (b) => (M) => {
      var S, W, E, k, B, X;
      const R = o ? s.get(o) : null;
      if (R)
        try {
          switch (b) {
            case "pointer:down":
              (S = R.onPointerDown) == null || S.call(R, M);
              break;
            case "pointer:move":
              (W = R.onPointerMove) == null || W.call(R, M);
              break;
            case "pointer:up":
              (E = R.onPointerUp) == null || E.call(R, M);
              break;
          }
        } catch (q) {
          console.error(`Error in plugin ${o} handling ${b}:`, q);
        }
      else {
        const q = v.getState().selectedObjects;
        try {
          let A;
          if (q.length === 1) {
            const U = g.getObject(q[0]);
            (U == null ? void 0 : U.type) === "ray" ? A = s.get("ray-tool") : (U == null ? void 0 : U.type) === "rectangle" && (A = s.get("rectangle-tool"));
          }
          if (A)
            switch (b) {
              case "pointer:down":
                (k = A.onPointerDown) == null || k.call(A, M);
                break;
              case "pointer:move":
                (B = A.onPointerMove) == null || B.call(A, M);
                break;
              case "pointer:up":
                (X = A.onPointerUp) == null || X.call(A, M);
                break;
            }
        } catch (A) {
          console.error(`Error in tool handling ${b} for manipulation:`, A);
        }
      }
    }, h = a("pointer:down"), y = a("pointer:move"), m = a("pointer:up");
    return e.on("pointer:down", h), e.on("pointer:move", y), e.on("pointer:up", m), () => {
      e.off("pointer:down", h), e.off("pointer:move", y), e.off("pointer:up", m);
    };
  }, [o, s, e]);
  const P = {
    eventBus: e,
    registerPlugin: N,
    unregisterPlugin: l,
    getActivePlugins: p,
    activeTool: o,
    setActiveTool: r
  };
  return /* @__PURE__ */ n.jsx(De.Provider, { value: P, children: t });
}
function Ze() {
  const { eventBus: t } = fe();
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
function Ke(t, e, s = {}) {
  const [i, o] = Q(null), [r, c] = Q(/* @__PURE__ */ new Map()), d = {
    enableGestures: !0,
    touchTargetSize: 44,
    preventScrolling: !0,
    ...s
  };
  se(() => {
    const a = le.detectCapabilities();
    o(a);
  }, []);
  const [x, g] = Q({
    isGesturing: !1,
    startTime: 0,
    startDistance: 0,
    lastTapTime: 0,
    tapCount: 0
  }), v = K((a) => {
    const h = Array.from(a.values());
    if (h.length < 2) return 0;
    const y = h[0], m = h[1];
    if (!y || !m) return 0;
    const b = y.x - m.x, M = y.y - m.y;
    return Math.sqrt(b * b + M * M);
  }, []), j = K((a) => {
    const h = Array.from(a.values());
    if (h.length === 0) return { x: 0, y: 0 };
    const y = h.reduce((m, b) => ({ x: m.x + b.x, y: m.y + b.y }), { x: 0, y: 0 });
    return { x: y.x / h.length, y: y.y / h.length };
  }, []), N = K((a) => {
    var M;
    if (!t.current) return;
    d.preventScrolling && a.preventDefault();
    const h = t.current.getBoundingClientRect(), y = a.clientX - h.left, m = a.clientY - h.top, b = le.normalizePointerEvent(a);
    b.x = y, b.y = m, c((R) => {
      const S = new Map(R);
      if (S.set(a.pointerId, b), d.enableGestures && S.size >= 2) {
        const W = v(S);
        g((E) => ({
          ...E,
          isGesturing: !0,
          startTime: a.timeStamp,
          startDistance: W
        }));
      }
      return S;
    }), t.current.setPointerCapture(a.pointerId), (M = e.onPointerDown) == null || M.call(e, b);
  }, [t, e, d, v]), l = K((a) => {
    var M;
    if (!t.current) return;
    const h = t.current.getBoundingClientRect(), y = a.clientX - h.left, m = a.clientY - h.top, b = le.normalizePointerEvent(a);
    b.x = y, b.y = m, c((R) => {
      var W, E;
      const S = new Map(R);
      if (S.set(a.pointerId, b), d.enableGestures && S.size >= 2) {
        const k = v(S), B = j(S);
        if (x.isGesturing && x.startDistance > 0) {
          const X = k / x.startDistance;
          (W = e.onGesture) == null || W.call(e, {
            type: "pinch",
            center: B,
            scale: X,
            touches: S.size
          });
        }
      } else if (S.size === 1 && x.isGesturing) {
        const k = j(S);
        (E = e.onGesture) == null || E.call(e, {
          type: "pan",
          center: k,
          touches: S.size
        });
      }
      return S;
    }), (M = e.onPointerMove) == null || M.call(e, b);
  }, [e, d, v, j, x]), p = K((a) => {
    var M;
    if (!t.current) return;
    const h = t.current.getBoundingClientRect(), y = a.clientX - h.left, m = a.clientY - h.top, b = le.normalizePointerEvent(a);
    b.x = y, b.y = m, c((R) => {
      var W;
      const S = new Map(R);
      if (S.delete(a.pointerId), d.enableGestures && S.size === 0) {
        const k = a.timeStamp - x.startTime < 200, B = a.timeStamp - x.lastTapTime;
        k && !x.isGesturing && (B < 300 ? g((X) => ({ ...X, tapCount: X.tapCount + 1 })) : ((W = e.onGesture) == null || W.call(e, {
          type: "tap",
          center: { x: b.x, y: b.y },
          touches: 1
        }), g((X) => ({
          ...X,
          tapCount: 1,
          lastTapTime: a.timeStamp
        })))), g((X) => ({ ...X, isGesturing: !1 }));
      }
      return S;
    }), t.current && t.current.releasePointerCapture(a.pointerId), (M = e.onPointerUp) == null || M.call(e, b);
  }, [t, e, d, x]), P = K((a) => {
    var M;
    if (!t.current) return;
    const h = t.current.getBoundingClientRect(), y = a.clientX - h.left, m = a.clientY - h.top, b = le.normalizePointerEvent(a);
    b.x = y, b.y = m, c((R) => {
      const S = new Map(R);
      return S.delete(a.pointerId), S;
    }), g((R) => ({ ...R, isGesturing: !1 })), (M = e.onPointerCancel) == null || M.call(e, b);
  }, [e]);
  return se(() => {
    const a = t.current;
    if (!a) return;
    a.addEventListener("pointerdown", N), a.addEventListener("pointermove", l), a.addEventListener("pointerup", p), a.addEventListener("pointercancel", P);
    const h = (y) => y.preventDefault();
    return a.addEventListener("contextmenu", h), () => {
      a.removeEventListener("pointerdown", N), a.removeEventListener("pointermove", l), a.removeEventListener("pointerup", p), a.removeEventListener("pointercancel", P), a.removeEventListener("contextmenu", h);
    };
  }, [t, N, l, p, P]), {
    capabilities: i,
    activePointers: Array.from(r.values()),
    isGesturing: x.isGesturing,
    touchTargetSize: i ? le.getTouchTargetSize(i.hasTouch ? "touch" : "mouse") : d.touchTargetSize
  };
}
function Ne(t, e = {
  minSpacing: 8,
  maxSpacing: 80,
  labelMinSpacing: 40
}) {
  const s = t.zoom;
  let o = 1, r = o * s;
  for (; r < e.minSpacing && o < 1e4; )
    o *= ke(o), r = o * s;
  for (; r > e.maxSpacing && o > 1e-4; )
    o /= Je(o), r = o * s;
  let c = o, d = c * s;
  for (; d < e.labelMinSpacing && c < o * 100; )
    c *= ke(c), d = c * s;
  const x = Math.max(0.1, Math.min(1, (r - e.minSpacing) / (e.maxSpacing - e.minSpacing)));
  return {
    gridSize: o,
    labelStep: c,
    shouldShowGrid: r >= e.minSpacing,
    shouldShowLabels: d >= e.labelMinSpacing,
    opacity: x
  };
}
function ke(t) {
  if (t < 1)
    return t >= 0.5 ? 2 : t >= 0.2 ? 2.5 : (t >= 0.1, 2);
  if (t < 10)
    return t >= 5 ? 2 : t >= 2 ? 2.5 : (t >= 1, 2);
  {
    const e = Math.pow(10, Math.floor(Math.log10(t))), s = t / e;
    return s >= 5 ? 2 : s >= 2 ? 2.5 : (s >= 1, 2);
  }
}
function Je(t) {
  if (t <= 1)
    return t <= 0.1 || t <= 0.2 ? 2 : t <= 0.5 ? 2.5 : (t <= 1, 2);
  if (t <= 10)
    return t <= 2 ? 2 : t <= 5 ? 2.5 : (t <= 10, 2);
  {
    const e = Math.pow(10, Math.floor(Math.log10(t))), s = t / e;
    return s <= 2 ? 2 : s <= 5 ? 2.5 : (s <= 10, 2);
  }
}
function Qe(t, e, s, i, o = !0) {
  const { gridSize: r } = s, c = {
    left: t.center.x - e.width / 2 / t.zoom,
    right: t.center.x + e.width / 2 / t.zoom,
    top: t.center.y + e.height / 2 / t.zoom,
    bottom: t.center.y - e.height / 2 / t.zoom
  }, d = [], x = [], g = Math.floor(c.left / r) * r, v = Math.ceil(c.right / r) * r;
  for (let l = g; l <= v; l += r) {
    const p = i({ x: l, y: 0 }).x, P = Math.abs(l) < r / 2, a = Math.abs(l % (r * 5)) < r / 2;
    d.push({ x: p, isAxis: P, isMajor: a, isInteger: !1, value: l });
  }
  if (r >= 2 && o) {
    const l = Math.floor(c.left), p = Math.ceil(c.right);
    for (let P = l; P <= p; P += 1)
      if (Math.abs(P % r) > 1e-3) {
        const a = i({ x: P, y: 0 }).x, h = Math.abs(P) < 0.5;
        d.push({ x: a, isAxis: h, isMajor: !1, isInteger: !0, value: P });
      }
  }
  const j = Math.floor(c.bottom / r) * r, N = Math.ceil(c.top / r) * r;
  for (let l = j; l <= N; l += r) {
    const p = i({ x: 0, y: l }).y, P = Math.abs(l) < r / 2, a = Math.abs(l % (r * 5)) < r / 2;
    x.push({ y: p, isAxis: P, isMajor: a, isInteger: !1, value: l });
  }
  if (r >= 2 && o) {
    const l = Math.floor(c.bottom), p = Math.ceil(c.top);
    for (let P = l; P <= p; P += 1)
      if (Math.abs(P % r) > 1e-3) {
        const a = i({ x: 0, y: P }).y, h = Math.abs(P) < 0.5;
        x.push({ y: a, isAxis: h, isMajor: !1, isInteger: !0, value: P });
      }
  }
  return { verticalLines: d, horizontalLines: x };
}
function I(t, e) {
  return e >= 1 ? t.toFixed(0) : e >= 0.1 ? t.toFixed(1) : e >= 0.01 ? t.toFixed(2) : t.toFixed(3);
}
function ve(t, e, s) {
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
  const o = Ne(t, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }).gridSize / e;
  return o <= 0.1 ? o : o <= 0.5 ? 0.1 : o <= 2 ? 0.25 : 1;
}
const Ce = {
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
  snapPrecision: "whole",
  // Coordinate system settings
  coordinateSystem: "cartesian",
  showPolarGrid: !1,
  customOrigin: null
}, xe = je((t) => ({
  ...Ce,
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
    t(Ce);
  }
}));
function Ve({ viewport: t, canvasSize: e, worldToScreen: s, objects: i = [] }) {
  const o = xe(), r = (a) => Math.round(a * o.fontScale), c = Ne(t, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }), d = {
    gridSize: c.gridSize / o.gridScale,
    labelStep: c.labelStep / o.gridScale
  }, { verticalLines: x, horizontalLines: g } = Qe(
    t,
    e,
    d,
    s,
    o.showIntegerGridLines
  );
  if (!c.shouldShowGrid)
    return null;
  const v = [];
  if (o.coordinateSystem === "polar" || o.coordinateSystem === "both") {
    const a = s({ x: 0, y: 0 }), h = Math.max(
      Math.abs(t.center.x) + e.width / (2 * t.zoom),
      Math.abs(t.center.y) + e.height / (2 * t.zoom)
    );
    for (let y = d.gridSize; y <= h; y += d.gridSize) {
      const m = y * t.zoom;
      m >= 10 && v.push(
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: a.x,
            cy: a.y,
            r: m,
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
      const m = y * Math.PI / 180, b = a.x + h * t.zoom * Math.cos(m), M = a.y - h * t.zoom * Math.sin(m);
      v.push(
        /* @__PURE__ */ n.jsx(
          "line",
          {
            x1: a.x,
            y1: a.y,
            x2: b,
            y2: M,
            stroke: "#9CA3AF",
            strokeWidth: "0.5",
            opacity: 0.3
          },
          `polar-line-${y}`
        )
      );
    }
  }
  const j = [];
  i.forEach((a) => {
    if (a.type === "ray") {
      const { startPoint: h, endPoint: y } = a.properties;
      if (Math.abs(h.x) < 1e-3 && Math.abs(h.y) < 1e-3) {
        const m = y.x - h.x, b = y.y - h.y;
        if (Math.abs(m) > 1e-3) {
          const M = 1 / m;
          if (M > 0 && M <= 1) {
            const R = h.y + M * b, S = s({ x: 1, y: R });
            j.push({ y: R, screenY: S.y });
          }
        }
      }
    }
  });
  const N = x.map((a) => {
    const h = Math.abs(a.value - 1) < 1e-3, y = a.isAxis ? "#374151" : h ? "#60A5FA" : (
      // Light blue for x=1
      a.isInteger ? "#E5E7EB" : (
        // Very faint for integer lines
        a.isMajor ? "#9CA3AF" : "#E5E7EB"
      )
    ), m = a.isAxis ? 2 : h ? 1.5 : a.isInteger ? Math.max(1, t.zoom * 0.05) : a.isMajor ? 1 : 0.5, b = a.isAxis ? 1 : h ? 0.8 : a.isInteger ? Math.max(0.6, 0.4 * c.opacity) : (
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
        strokeWidth: m,
        opacity: b
      },
      `v${a.value}`
    );
  }), l = g.map((a) => /* @__PURE__ */ n.jsx(
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
  )), p = o.showReferenceLineY_equals_X ? (() => {
    const a = {
      left: t.center.x - e.width / 2 / t.zoom,
      right: t.center.x + e.width / 2 / t.zoom,
      top: t.center.y + e.height / 2 / t.zoom,
      bottom: t.center.y - e.height / 2 / t.zoom
    }, h = Math.min(a.left, a.bottom), y = Math.max(a.right, a.top), m = s({ x: h, y: h }), b = s({ x: y, y });
    return { lineStart: m, lineEnd: b };
  })() : null, P = o.showLatticePoints ? (() => {
    const a = {
      left: t.center.x - e.width / 2 / t.zoom,
      right: t.center.x + e.width / 2 / t.zoom,
      top: t.center.y + e.height / 2 / t.zoom,
      bottom: t.center.y - e.height / 2 / t.zoom
    }, h = [], y = Math.max(-20, Math.floor(a.left)), m = Math.min(20, Math.ceil(a.right)), b = Math.max(-20, Math.floor(a.bottom)), M = Math.min(20, Math.ceil(a.top)), R = (m - y + 1) * (M - b + 1);
    if (R > 200) {
      const S = Math.ceil(Math.sqrt(R / 200));
      for (let W = y; W <= m; W += S)
        for (let E = b; E <= M; E += S) {
          const k = s({ x: W, y: E });
          k.x >= -20 && k.x <= e.width + 20 && k.y >= -20 && k.y <= e.height + 20 && h.push(k);
        }
    } else
      for (let S = y; S <= m; S++)
        for (let W = b; W <= M; W++) {
          const E = s({ x: S, y: W });
          E.x >= -20 && E.x <= e.width + 20 && E.y >= -20 && E.y <= e.height + 20 && h.push(E);
        }
    return h;
  })() : [];
  return /* @__PURE__ */ n.jsxs("g", { className: "grid", children: [
    (o.coordinateSystem === "polar" || o.coordinateSystem === "both") && /* @__PURE__ */ n.jsx("g", { className: "polar-grid", children: v }),
    (o.coordinateSystem === "cartesian" || o.coordinateSystem === "both") && /* @__PURE__ */ n.jsxs("g", { className: "cartesian-grid", children: [
      N,
      l
    ] }),
    P.map((a, h) => /* @__PURE__ */ n.jsx(
      "circle",
      {
        cx: a.x,
        cy: a.y,
        r: "1.5",
        fill: "#9CA3AF",
        opacity: "0.3"
      },
      `lattice-${h}`
    )),
    p && /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: p.lineStart.x,
        y1: p.lineStart.y,
        x2: p.lineEnd.x,
        y2: p.lineEnd.y,
        stroke: "#A78BFA",
        strokeWidth: "1.5",
        opacity: "0.6",
        strokeDasharray: "5,5"
      }
    ),
    c.shouldShowLabels && /* @__PURE__ */ n.jsxs("g", { className: "labels", fontSize: "12", fill: "#374151", children: [
      x.filter((a) => {
        const h = Math.abs(a.value % d.labelStep) < d.gridSize / 10, y = Math.abs(a.value) >= d.labelStep / 2;
        return h && y;
      }).filter((a, h, y) => !y.slice(0, h).some(
        (m) => Math.abs(m.value - a.value) < 1e-3
      )).map((a) => /* @__PURE__ */ n.jsx(
        "text",
        {
          x: a.x,
          y: s({ x: 0, y: 0 }).y + 20,
          textAnchor: "middle",
          fontSize: r(11),
          fontWeight: "500",
          opacity: Math.max(0.7, c.opacity),
          children: I(a.value, c.gridSize)
        },
        `xlabel${a.value}`
      )),
      g.filter((a) => {
        const h = Math.abs(a.value % d.labelStep) < d.gridSize / 10, y = Math.abs(a.value) >= d.labelStep / 2;
        return h && y;
      }).filter((a, h, y) => !y.slice(0, h).some(
        (m) => Math.abs(m.value - a.value) < 1e-3
      )).map((a) => /* @__PURE__ */ n.jsx(
        "text",
        {
          x: s({ x: 0, y: 0 }).x - 15,
          y: a.y + 4,
          textAnchor: "middle",
          fontSize: r(11),
          fontWeight: "500",
          opacity: Math.max(0.7, c.opacity),
          children: I(a.value, c.gridSize)
        },
        `ylabel${a.value}`
      )),
      /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: s({ x: 0, y: 0 }).x,
            cy: s({ x: 0, y: 0 }).y,
            r: "3",
            fill: "#374151",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "text",
          {
            x: s({ x: 0, y: 0 }).x - 25,
            y: s({ x: 0, y: 0 }).y - 10,
            fontSize: r(11),
            fontWeight: "600",
            fill: "#374151",
            opacity: Math.max(0.8, c.opacity),
            children: "(0,0)"
          }
        )
      ] }),
      o.showDivisionAnswer && j.map((a, h) => {
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
              fontSize: r(10),
              fontWeight: "600",
              fill: "#60A5FA",
              opacity: "0.9",
              children: [
                "y = ",
                a.y.toFixed(2)
              ]
            }
          )
        ] }, `ray-intersection-${h}`);
      })
    ] })
  ] });
}
function et({ viewport: t, onZoomIn: e, onZoomOut: s, onZoomReset: i, onCenterOnly: o }) {
  const [r, c] = Q(0), d = ne(null), x = () => {
    const g = Date.now();
    g - r < 500 ? (d.current && (clearTimeout(d.current), d.current = null), i()) : d.current = window.setTimeout(() => {
      o(), d.current = null;
    }, 300), c(g);
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
        onClick: x,
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
function tt({ objects: t, viewport: e, touchTargetSize: s, worldToScreen: i, selectedObjects: o = [], canvasSize: r }) {
  const c = xe(), d = (l) => Math.round(l * c.fontScale), x = ve(e, c.gridScale, c.snapPrecision), g = x, [v, j] = Q(null), N = (l) => {
    const p = o.includes(l.id);
    switch (l.type) {
      case "ray":
        const P = i(l.properties.startPoint), a = i(l.properties.endPoint);
        return /* @__PURE__ */ n.jsxs("g", { children: [
          p && /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: P.x,
              y1: P.y,
              x2: a.x,
              y2: a.y,
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: P.x,
              y1: P.y,
              x2: a.x,
              y2: a.y,
              stroke: p ? "#1D4ED8" : "#2563eb",
              strokeWidth: p ? 3 : 2
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: P.x,
              cy: P.y,
              r: s / 4,
              fill: p ? "#1D4ED8" : "#2563eb",
              stroke: p ? "#60A5FA" : "none",
              strokeWidth: p ? 2 : 0,
              style: { cursor: "move" },
              onMouseEnter: () => j(`${l.id}-start`),
              onMouseLeave: () => j(null)
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: a.x,
              cy: a.y,
              r: s / 4,
              fill: p ? "#1D4ED8" : "#2563eb",
              stroke: p ? "#60A5FA" : "none",
              strokeWidth: p ? 2 : 0,
              style: { cursor: "move" },
              onMouseEnter: () => j(`${l.id}-end`),
              onMouseLeave: () => j(null)
            }
          ),
          !(Math.abs(l.properties.startPoint.x) < 1e-3 && Math.abs(l.properties.startPoint.y) < 1e-3) && v === `${l.id}-start` && /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: P.x - 5,
              y: P.y - 10,
              fontSize: d(10),
              fontWeight: "500",
              fill: p ? "#1D4ED8" : "#2563eb",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "(",
                I(l.properties.startPoint.x, g),
                ", ",
                I(l.properties.startPoint.y, g),
                ")"
              ]
            }
          ),
          v === `${l.id}-end` && /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: Math.abs(l.properties.startPoint.x) < 1e-3 && Math.abs(l.properties.startPoint.y) < 1e-3 ? a.x - 60 : a.x + 5,
              y: Math.abs(l.properties.startPoint.x) < 1e-3 && Math.abs(l.properties.startPoint.y) < 1e-3 ? a.y + 4 : a.y - 10,
              fontSize: d(10),
              fontWeight: "500",
              fill: p ? "#1D4ED8" : "#2563eb",
              textAnchor: Math.abs(l.properties.startPoint.x) < 1e-3 && Math.abs(l.properties.startPoint.y) < 1e-3 ? "end" : "middle",
              opacity: "0.8",
              children: [
                "(",
                I(l.properties.endPoint.x, g),
                ", ",
                I(l.properties.endPoint.y, g),
                ")"
              ]
            }
          ),
          (() => {
            const W = l.properties.endPoint.x - l.properties.startPoint.x;
            l.properties.endPoint.y - l.properties.startPoint.y;
            const E = Math.abs(l.properties.startPoint.x) < 1e-3 && Math.abs(l.properties.startPoint.y) < 1e-3;
            if (Math.abs(W) > 1e-3) {
              const k = a.x, B = a.y;
              if (E) {
                const X = l.properties.endPoint.x, q = l.properties.endPoint.y, A = I(q, g), U = I(X, g);
                return /* @__PURE__ */ n.jsxs("g", { children: [
                  /* @__PURE__ */ n.jsx(
                    "text",
                    {
                      x: k + 15,
                      y: B - 25,
                      fontSize: d(9),
                      fontWeight: "500",
                      fill: p ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: A
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "line",
                    {
                      x1: k + 8,
                      y1: B - 19,
                      x2: k + 22,
                      y2: B - 19,
                      stroke: p ? "#1D4ED8" : "#2563eb",
                      strokeWidth: "1",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "text",
                    {
                      x: k + 15,
                      y: B - 9,
                      fontSize: d(9),
                      fontWeight: "500",
                      fill: p ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: U
                    }
                  )
                ] });
              } else
                return null;
            }
            return null;
          })(),
          (() => {
            if (!(Math.abs(l.properties.startPoint.x) < 1e-3 && Math.abs(l.properties.startPoint.y) < 1e-3)) return null;
            const E = l.properties.endPoint.x, k = l.properties.endPoint.y;
            if (Math.abs(E) < 1e-3 && Math.abs(k) < 1e-3) return null;
            const B = E, X = k, q = {
              left: e.center.x - r.width / 2 / e.zoom,
              right: e.center.x + r.width / 2 / e.zoom,
              top: e.center.y + r.height / 2 / e.zoom,
              bottom: e.center.y - r.height / 2 / e.zoom
            }, A = Math.max(
              Math.abs(q.left),
              Math.abs(q.right),
              Math.abs(q.top),
              Math.abs(q.bottom)
            ) * 2, U = Math.sqrt(B * B + X * X);
            if (U === 0) return null;
            const re = B / U, ce = X / U, ie = {
              x: A * re,
              y: A * ce
            }, oe = i(ie), u = [];
            if (Math.abs(E) > 1e-3 && Math.abs(k) > 1e-3) {
              const f = k / E;
              for (let w = x; w <= Math.min(20, Math.abs(A)); w += x) {
                const T = f * w, L = Math.round(w / x) * x, G = Math.round(T / x) * x;
                if (Math.abs(w - L) < x / 10 && Math.abs(T - G) < x / 10 && Math.abs(L) <= A && Math.abs(G) <= A && L > 0 && G > 0) {
                  const z = i({ x: L, y: G });
                  z.x >= -100 && z.x <= r.width + 100 && z.y >= -100 && z.y <= r.height + 100 && u.push({
                    world: { x: L, y: G },
                    screen: z,
                    fraction: {
                      num: I(G, x),
                      den: I(L, x)
                    }
                  });
                }
              }
            }
            const O = Math.sqrt(E * E + k * k), _ = [];
            if (O > 0 && c.showLengthMultiples)
              for (let f = 2; f <= 5; f++) {
                const w = E * f, T = k * f, L = i({ x: w, y: T });
                L.x >= -50 && L.x <= r.width + 50 && L.y >= -50 && L.y <= r.height + 50 && _.push({
                  screen: L,
                  multiple: f
                });
              }
            return /* @__PURE__ */ n.jsxs("g", { children: [
              c.showEquivalentFractions && /* @__PURE__ */ n.jsx(
                "line",
                {
                  x1: a.x,
                  y1: a.y,
                  x2: oe.x,
                  y2: oe.y,
                  stroke: p ? "#1D4ED8" : "#2563eb",
                  strokeWidth: "1",
                  opacity: "0.3",
                  strokeDasharray: "3,3"
                }
              ),
              _.map((f, w) => /* @__PURE__ */ n.jsxs("g", { children: [
                /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: f.screen.x,
                    cy: f.screen.y,
                    r: "2",
                    fill: p ? "#1D4ED8" : "#2563eb",
                    opacity: "0.4"
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    x: f.screen.x + 8,
                    y: f.screen.y - 8,
                    fontSize: d(7),
                    fontWeight: "400",
                    fill: p ? "#1D4ED8" : "#2563eb",
                    textAnchor: "start",
                    opacity: "0.5",
                    children: [
                      "×",
                      f.multiple
                    ]
                  }
                )
              ] }, `length-${w}`)),
              c.showAreaRectangle && (() => {
                if (E > 0 && k > 0) {
                  const f = i({ x: 0, y: 0 }), w = i({ x: E, y: k }), T = Math.abs(w.x - f.x), L = Math.abs(w.y - f.y), G = Math.min(f.x, w.x), z = Math.min(f.y, w.y), H = E * k;
                  return /* @__PURE__ */ n.jsxs("g", { children: [
                    /* @__PURE__ */ n.jsx(
                      "rect",
                      {
                        x: G,
                        y: z,
                        width: T,
                        height: L,
                        fill: p ? "#1D4ED8" : "#2563eb",
                        opacity: "0.08",
                        stroke: p ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "0.5",
                        strokeOpacity: "0.15"
                      }
                    ),
                    /* @__PURE__ */ n.jsxs(
                      "text",
                      {
                        x: G + T / 2,
                        y: z + 15,
                        fontSize: d(10),
                        fontWeight: "400",
                        fill: p ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.6",
                        children: [
                          I(k, g),
                          " × ",
                          I(E, g),
                          " = ",
                          I(H, g)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showRiseRunTriangle && (() => {
                if (E > 0 && k > 0) {
                  const f = i({ x: 0, y: 0 }), w = i({ x: E, y: 0 }), T = i({ x: E, y: k });
                  return /* @__PURE__ */ n.jsxs("g", { children: [
                    /* @__PURE__ */ n.jsx(
                      "path",
                      {
                        d: `M ${f.x},${f.y} L ${w.x},${w.y} L ${T.x},${T.y} Z`,
                        fill: "none",
                        stroke: p ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "1",
                        opacity: "0.4",
                        strokeDasharray: "2,2"
                      }
                    ),
                    /* @__PURE__ */ n.jsxs(
                      "text",
                      {
                        x: w.x + 12,
                        y: (w.y + T.y) / 2,
                        fontSize: d(9),
                        fontWeight: "500",
                        fill: p ? "#1D4ED8" : "#2563eb",
                        textAnchor: "start",
                        opacity: "0.7",
                        children: [
                          "rise: ",
                          I(k, g)
                        ]
                      }
                    ),
                    /* @__PURE__ */ n.jsxs(
                      "text",
                      {
                        x: (f.x + w.x) / 2,
                        y: w.y + 8,
                        fontSize: d(9),
                        fontWeight: "500",
                        fill: p ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.7",
                        children: [
                          "run: ",
                          I(E, g)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showDistanceMarkers && (() => {
                const f = [], w = Math.sqrt(E * E + k * k);
                if (w > 0) {
                  const T = i({ x: 0, y: 0 });
                  let L = Math.atan2(k, E);
                  L < 0 && (L = L + 2 * Math.PI);
                  const G = [];
                  for (let H = 1; H <= Math.floor(w); H++)
                    G.push({ radius: H, isUnit: !0 });
                  G.push({ radius: w, isUnit: !1 }), G.forEach(({ radius: H, isUnit: V }, C) => {
                    const F = H * e.zoom;
                    if (F >= 15 && F <= 800 && Math.abs(L) > 0.05) {
                      const $ = L > Math.PI ? 1 : 0, D = `M ${T.x + F},${T.y} A ${F},${F} 0 ${$},0 ${T.x + F * Math.cos(L)},${T.y - F * Math.sin(L)}`;
                      f.push(
                        /* @__PURE__ */ n.jsx(
                          "path",
                          {
                            d: D,
                            fill: "none",
                            stroke: p ? "#1D4ED8" : "#2563eb",
                            strokeWidth: V ? "1" : "1.5",
                            opacity: V ? "0.3" : "0.6",
                            strokeDasharray: V ? "2,2" : "none"
                          },
                          `radial-${l.id}-${H.toFixed(3)}-${L.toFixed(3)}-${C}`
                        )
                      );
                    }
                  });
                  const z = i({ x: w, y: 0 });
                  f.push(
                    /* @__PURE__ */ n.jsxs("g", { children: [
                      /* @__PURE__ */ n.jsx(
                        "path",
                        {
                          d: `M ${z.x},${T.y} L ${z.x - 4},${T.y + 8} L ${z.x + 4},${T.y + 8} Z`,
                          fill: p ? "#1D4ED8" : "#2563eb",
                          opacity: "0.7"
                        }
                      ),
                      /* @__PURE__ */ n.jsxs(
                        "text",
                        {
                          x: z.x - 15,
                          y: T.y - 8,
                          fontSize: d(8),
                          fontWeight: "600",
                          fill: p ? "#1D4ED8" : "#2563eb",
                          textAnchor: "end",
                          opacity: "0.8",
                          children: [
                            "d = ",
                            w.toFixed(2)
                          ]
                        }
                      )
                    ] }, `distance-${l.id}`)
                  );
                }
                return /* @__PURE__ */ n.jsx("g", { children: f });
              })(),
              c.showAngleArc && (() => {
                let f = Math.atan2(k, E);
                if (f < 0 && (f = f + 2 * Math.PI), Math.abs(E) > 0.05 || Math.abs(k) > 0.05) {
                  const w = i({ x: 0, y: 0 }), T = 50, L = (f * 180 / Math.PI).toFixed(1), G = f, z = f > Math.PI ? 1 : 0, H = `M ${w.x + T},${w.y} A ${T},${T} 0 ${z},0 ${w.x + T * Math.cos(G)},${w.y - T * Math.sin(G)}`, V = f / 2, C = T * 0.7, F = w.x + C * Math.cos(V), $ = w.y - C * Math.sin(V);
                  return /* @__PURE__ */ n.jsxs("g", { children: [
                    /* @__PURE__ */ n.jsx(
                      "path",
                      {
                        d: H,
                        fill: "none",
                        stroke: p ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "2",
                        opacity: "0.6"
                      }
                    ),
                    /* @__PURE__ */ n.jsxs(
                      "text",
                      {
                        x: F,
                        y: $,
                        fontSize: d(11),
                        fontWeight: "600",
                        fill: p ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.8",
                        children: [
                          "θ = ",
                          L,
                          "°"
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showEquivalentFractions && u.map((f, w) => {
                const L = Math.abs(f.world.x - 1) < 0.1 && c.showDivisionAnswer, G = Math.abs(f.world.x - E) < 0.1 && Math.abs(f.world.y - k) < 0.1;
                return L || G ? null : /* @__PURE__ */ n.jsxs("g", { children: [
                  /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: f.screen.x,
                      cy: f.screen.y,
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
                      x: f.screen.x + 15,
                      y: f.screen.y + 4,
                      fontSize: d(9),
                      fontWeight: "500",
                      fill: "#22C55E",
                      textAnchor: "start",
                      opacity: "0.8",
                      children: [
                        f.fraction.num,
                        "/",
                        f.fraction.den
                      ]
                    }
                  )
                ] }, `equiv-${w}`);
              })
            ] });
          })()
        ] }, l.id);
      case "rectangle":
        const h = i({
          x: l.properties.x,
          y: l.properties.y + l.properties.height
        }), y = l.properties.width * e.zoom, m = l.properties.height * e.zoom, b = { x: l.properties.x, y: l.properties.y }, M = { x: l.properties.x + l.properties.width, y: l.properties.y }, R = { x: l.properties.x, y: l.properties.y + l.properties.height }, S = { x: l.properties.x + l.properties.width, y: l.properties.y + l.properties.height };
        return /* @__PURE__ */ n.jsxs("g", { children: [
          p && /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: h.x - 3,
              y: h.y - 3,
              width: y + 6,
              height: m + 6,
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
              x: h.x,
              y: h.y,
              width: y,
              height: m,
              fill: p ? "rgba(34, 197, 94, 0.3)" : "rgba(34, 197, 94, 0.2)",
              stroke: p ? "#16A34A" : "#22c55e",
              strokeWidth: p ? 3 : 2,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: h.x,
              cy: h.y,
              r: s / 6,
              fill: p ? "#16A34A" : "#22c55e",
              stroke: p ? "#60A5FA" : "none",
              strokeWidth: p ? 2 : 0,
              style: { cursor: "nw-resize" }
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: h.x + y,
              cy: h.y,
              r: s / 6,
              fill: p ? "#16A34A" : "#22c55e",
              stroke: p ? "#60A5FA" : "none",
              strokeWidth: p ? 2 : 0,
              style: { cursor: "ne-resize" }
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: h.x,
              cy: h.y + m,
              r: s / 6,
              fill: p ? "#16A34A" : "#22c55e",
              stroke: p ? "#60A5FA" : "none",
              strokeWidth: p ? 2 : 0,
              style: { cursor: "sw-resize" }
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: h.x + y,
              cy: h.y + m,
              r: s / 6,
              fill: p ? "#16A34A" : "#22c55e",
              stroke: p ? "#60A5FA" : "none",
              strokeWidth: p ? 2 : 0,
              style: { cursor: "se-resize" }
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: h.x - 10,
              y: h.y - 5,
              fontSize: d(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                I(R.x, g),
                ", ",
                I(R.y, g),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: h.x + y + 10,
              y: h.y - 5,
              fontSize: d(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                I(S.x, g),
                ", ",
                I(S.y, g),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: h.x - 10,
              y: h.y + m + 15,
              fontSize: d(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                I(b.x, g),
                ", ",
                I(b.y, g),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: h.x + y + 10,
              y: h.y + m + 15,
              fontSize: d(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                I(M.x, g),
                ", ",
                I(M.y, g),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "text",
            {
              x: h.x + y / 2,
              y: h.y + m / 2,
              fontSize: d(12),
              fontWeight: "600",
              fill: "#22c55e",
              textAnchor: "middle",
              opacity: "0.9",
              children: [
                I(l.properties.height, g),
                " × ",
                I(l.properties.width, g),
                " = ",
                I(l.properties.area, g)
              ]
            }
          )
        ] }, l.id);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("defs", {}),
    /* @__PURE__ */ n.jsx("g", { className: "objects", children: t.map(N) })
  ] });
}
function st({ capabilities: t, viewport: e, activeTool: s, selectedObjectsCount: i }) {
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
    i > 0 && /* @__PURE__ */ n.jsxs("div", { children: [
      "Selected: ",
      i,
      " object",
      i !== 1 ? "s" : ""
    ] })
  ] }) : null;
}
function nt({ selectedObject: t, onDelete: e, onClose: s }) {
  if (!t) return null;
  const i = () => {
    e(), s();
  }, o = () => {
    switch (t.type) {
      case "ray":
        const { startPoint: r, endPoint: c, slope: d } = t.properties, x = Math.abs(r.x) < 1e-3 && Math.abs(r.y) < 1e-3;
        return /* @__PURE__ */ n.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Line Details" }),
          /* @__PURE__ */ n.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ n.jsxs("div", { children: [
              "Start: (",
              I(r.x, 1),
              ", ",
              I(r.y, 1),
              ")"
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              "End: (",
              I(c.x, 1),
              ", ",
              I(c.y, 1),
              ")"
            ] }),
            x && /* @__PURE__ */ n.jsxs("div", { children: [
              "Fraction: ",
              Math.round(c.y),
              "/",
              Math.round(c.x)
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              "Slope: ",
              isFinite(d) ? d.toFixed(3) : "undefined"
            ] })
          ] })
        ] });
      case "rectangle":
        const { x: g, y: v, width: j, height: N, area: l } = t.properties;
        return /* @__PURE__ */ n.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Rectangle Details" }),
          /* @__PURE__ */ n.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ n.jsxs("div", { children: [
              "Position: (",
              I(g, 1),
              ", ",
              I(v, 1),
              ")"
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              "Size: ",
              I(j, 1),
              " × ",
              I(N, 1)
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
          onClick: i,
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
function rt() {
  const [t, e] = Q(!1), s = ne(null), i = xe(), { toggleSetting: o, setFontScale: r, setGridScale: c, setSnapPrecision: d, setCoordinateSystem: x, resetToDefaults: g } = i;
  se(() => {
    function j(N) {
      s.current && !s.current.contains(N.target) && e(!1);
    }
    if (t)
      return document.addEventListener("mousedown", j, !0), document.addEventListener("click", j, !0), () => {
        document.removeEventListener("mousedown", j, !0), document.removeEventListener("click", j, !0);
      };
  }, [t]);
  const v = [
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
            onClick: g,
            className: "text-xs text-blue-600 hover:text-blue-800 font-medium",
            children: "Reset All"
          }
        )
      ] }) }),
      /* @__PURE__ */ n.jsx("div", { className: "p-4 space-y-5", children: v.map((j, N) => /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsxs("div", { className: `${N > 0 ? "border-t border-gray-100 pt-4" : ""} mb-3`, children: [
          /* @__PURE__ */ n.jsx("h4", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wide", children: j.title }),
          j.subtitle && /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: j.subtitle })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "space-y-2.5", children: [
          j.settings.map((l) => /* @__PURE__ */ n.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "checkbox",
                checked: i[l.key],
                onChange: () => o(l.key),
                className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              }
            ),
            /* @__PURE__ */ n.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: l.label }),
              /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: l.description })
            ] })
          ] }, l.key)),
          j.title === "Display" && /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Font Size" }),
              /* @__PURE__ */ n.jsxs("span", { className: "text-xs text-gray-500 font-mono", children: [
                Math.round(i.fontScale * 100),
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
                  value: i.fontScale,
                  onChange: (l) => r(parseFloat(l.target.value)),
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
                  Math.round(i.gridScale * 100),
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
                    value: i.gridScale,
                    onChange: (l) => c(parseFloat(l.target.value)),
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
              ].map((l) => /* @__PURE__ */ n.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ n.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "coordinateSystem",
                    value: l.value,
                    checked: i.coordinateSystem === l.value,
                    onChange: (p) => x(p.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ n.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: l.label }),
                  /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500", children: l.desc })
                ] })
              ] }, l.value)) })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Snap Precision" }),
              /* @__PURE__ */ n.jsx("div", { className: "space-y-2", children: [
                { value: "adaptive", label: "Adaptive", desc: "Automatically adjusts based on zoom level" },
                { value: "whole", label: "Whole Numbers", desc: "Snap to 1, 2, 3, etc." },
                { value: "half", label: "Half Units", desc: "Snap to 0.5, 1.0, 1.5, etc." },
                { value: "quarter", label: "Quarter Units", desc: "Snap to 0.25, 0.5, 0.75, etc." },
                { value: "tenth", label: "Tenth Units", desc: "Snap to 0.1, 0.2, 0.3, etc." }
              ].map((l) => /* @__PURE__ */ n.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ n.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "snapPrecision",
                    value: l.value,
                    checked: i.snapPrecision === l.value,
                    onChange: (p) => d(p.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ n.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: l.label }),
                  /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500", children: l.desc })
                ] })
              ] }, l.value)) }),
              /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: "Controls where objects can be placed when snap-to-grid is enabled" })
            ] })
          ] })
        ] })
      ] }, j.title)) }),
      /* @__PURE__ */ n.jsx("div", { className: "sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg", children: /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Toggle features to explore different mathematical concepts" }) })
    ] })
  ] });
}
const Oe = (t, e) => {
  const s = e * Math.PI / 180, i = Math.cos(s), o = Math.sin(s);
  return {
    x: t.x * i - t.y * o,
    y: t.x * o + t.y * i
  };
}, it = (t, e) => ({
  x: t.x * e,
  y: t.y * e
}), Ae = (t, e) => {
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
}, ot = je((t, e) => ({
  isTransforming: !1,
  activeTransform: null,
  selectedObject: null,
  rotateObject: (s, i, o) => {
    if (!o) {
      console.log(`No canvas API provided for rotation of ${s}`);
      return;
    }
    const r = o.getObject(s);
    if (r) {
      if (r.type === "ray") {
        if (Math.abs(r.properties.startPoint.x) < 1e-3 && Math.abs(r.properties.startPoint.y) < 1e-3) {
          const d = Oe(r.properties.endPoint, i);
          o.updateObject(s, {
            properties: {
              ...r.properties,
              endPoint: d
            }
          });
        }
      } else if (r.type === "rectangle") {
        const c = r.properties.x + r.properties.width / 2, d = r.properties.y + r.properties.height / 2, x = {
          x: r.properties.x - c,
          y: r.properties.y - d
        }, g = Oe(x, i);
        o.updateObject(s, {
          properties: {
            ...r.properties,
            x: g.x + c,
            y: g.y + d
          }
        });
      }
    }
  },
  scaleObject: (s, i, o) => {
    if (!o) {
      console.log(`No canvas API provided for scaling of ${s}`);
      return;
    }
    const r = o.getObject(s);
    if (r)
      if (r.type === "ray") {
        if (Math.abs(r.properties.startPoint.x) < 1e-3 && Math.abs(r.properties.startPoint.y) < 1e-3) {
          const d = it(r.properties.endPoint, i);
          o.updateObject(s, {
            properties: {
              ...r.properties,
              endPoint: d
            }
          });
        }
      } else r.type === "rectangle" && o.updateObject(s, {
        properties: {
          ...r.properties,
          width: r.properties.width * i,
          height: r.properties.height * i,
          area: r.properties.width * i * r.properties.height * i
        }
      });
  },
  reflectObject: (s, i, o) => {
    if (!o) {
      console.log(`No canvas API provided for reflection of ${s}`);
      return;
    }
    const r = o.getObject(s);
    if (r) {
      if (r.type === "ray") {
        if (Math.abs(r.properties.startPoint.x) < 1e-3 && Math.abs(r.properties.startPoint.y) < 1e-3) {
          const d = Ae(r.properties.endPoint, i);
          o.updateObject(s, {
            properties: {
              ...r.properties,
              endPoint: d
            }
          });
        }
      } else if (r.type === "rectangle") {
        const c = Ae({ x: r.properties.x, y: r.properties.y }, i);
        o.updateObject(s, {
          properties: {
            ...r.properties,
            x: c.x,
            y: c.y
          }
        });
      }
    }
  },
  rotate90: (s, i) => {
    e().rotateObject(s, 90, i);
  },
  rotate180: (s, i) => {
    e().rotateObject(s, 180, i);
  },
  rotate270: (s, i) => {
    e().rotateObject(s, 270, i);
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
function at(t, e, s) {
  const i = s.x - e.x, o = s.y - e.y, r = Math.sqrt(i * i + o * o);
  if (r === 0) return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
  const c = Math.max(0, Math.min(1, ((t.x - e.x) * i + (t.y - e.y) * o) / (r * r))), d = {
    x: e.x + c * i,
    y: e.y + c * o
  };
  return Math.sqrt(Math.pow(t.x - d.x, 2) + Math.pow(t.y - d.y, 2));
}
function ct({
  width: t = 800,
  height: e = 600,
  className: s = "",
  onObjectInteraction: i
}) {
  const o = ne(null), {
    viewport: r,
    setViewport: c,
    objects: d,
    selectedObjects: x,
    snapToGrid: g,
    gridDensity: v,
    canvasSize: j,
    setCanvasSize: N,
    removeObject: l,
    clearSelection: p,
    selectObject: P,
    screenToWorld: a,
    worldToScreen: h,
    getObject: y,
    updateObject: m
  } = ee(), b = Ze(), { activeTool: M, setActiveTool: R, eventBus: S } = fe(), { rotate90: W, rotate180: E, rotate270: k, scaleObject: B, setSelectedObject: X } = ot();
  se(() => {
    N({ width: t, height: e });
  }, [t, e, N]);
  const q = ne({
    isPanning: !1,
    startPoint: { x: 0, y: 0 },
    startCenter: { x: 0, y: 0 }
  }), A = ne({
    isDown: !1,
    startPoint: { x: 0, y: 0 },
    hasMoved: !1,
    dragThreshold: 5,
    // pixels
    pendingSelection: null
  }), [U, re] = Q(null), [ce, ie] = Q(!1), oe = K((C) => {
    const F = { x: C.x, y: C.y };
    A.current = {
      isDown: !0,
      startPoint: F,
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    };
    const $ = 22;
    a(F);
    let Y = !1;
    for (const D of d)
      if (D.type === "ray") {
        const Z = h(D.properties.startPoint), te = h(D.properties.endPoint), ae = Math.sqrt(
          Math.pow(F.x - Z.x, 2) + Math.pow(F.y - Z.y, 2)
        ), pe = Math.sqrt(
          Math.pow(F.x - te.x, 2) + Math.pow(F.y - te.y, 2)
        );
        if (ae <= $ || pe <= $) {
          Y = !0, A.current.pendingSelection = { objectId: D.id, type: "ray" }, P(D.id);
          break;
        }
        if (at(F, Z, te) <= 8) {
          Y = !0, A.current.pendingSelection = { objectId: D.id, type: "ray" }, P(D.id);
          break;
        }
      } else if (D.type === "rectangle") {
        const Z = h({
          x: D.properties.x,
          y: D.properties.y + D.properties.height
        }), te = D.properties.width * r.zoom, ae = D.properties.height * r.zoom;
        if (F.x >= Z.x && F.x <= Z.x + te && F.y >= Z.y && F.y <= Z.y + ae) {
          Y = !0, A.current.pendingSelection = { objectId: D.id, type: "rectangle" }, P(D.id);
          break;
        }
        if ([
          { x: Z.x, y: Z.y },
          // top-left
          { x: Z.x + te, y: Z.y },
          // top-right  
          { x: Z.x, y: Z.y + ae },
          // bottom-left
          { x: Z.x + te, y: Z.y + ae }
          // bottom-right
        ].some((be) => Math.sqrt(
          Math.pow(F.x - be.x, 2) + Math.pow(F.y - be.y, 2)
        ) <= $)) {
          Y = !0, A.current.pendingSelection = { objectId: D.id, type: "rectangle" }, P(D.id);
          break;
        }
      }
    (!Y && !M || !Y && M) && p(), (M || Y) && b.handlePointerDown(C), !Y && !M && (C.type === "touch" || C.type === "mouse") && (q.current = {
      isPanning: !0,
      startPoint: { x: C.x, y: C.y },
      startCenter: { ...r.center }
    });
  }, [r.center, b, M, R, d, a, h, r.zoom]), u = K((C) => {
    const F = { x: C.x, y: C.y };
    if (C.type === "mouse" && M ? re(F) : M || re(null), A.current.isDown && !A.current.hasMoved) {
      const $ = Math.abs(C.x - A.current.startPoint.x), Y = Math.abs(C.y - A.current.startPoint.y);
      Math.sqrt($ * $ + Y * Y) >= A.current.dragThreshold && (A.current.hasMoved = !0, A.current.pendingSelection = null);
    }
    if (b.handlePointerMove(C), !M && q.current.isPanning) {
      const $ = (C.x - q.current.startPoint.x) / r.zoom, Y = (C.y - q.current.startPoint.y) / r.zoom;
      c({
        center: {
          x: q.current.startCenter.x - $,
          y: q.current.startCenter.y + Y
          // Flip Y for mathematical coordinates
        }
      });
    }
  }, [r.zoom, c, b, M, re]), O = K((C) => {
    A.current = {
      isDown: !1,
      startPoint: { x: 0, y: 0 },
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    }, b.handlePointerUp(C), q.current.isPanning = !1;
  }, [b, R]), _ = K((C) => {
    switch (C.type) {
      case "pinch":
        if (C.scale) {
          const F = Math.max(0.1, Math.min(10, r.zoom * C.scale));
          c({ zoom: F });
        }
        break;
    }
  }, [r.zoom, c]), { capabilities: f, touchTargetSize: w } = Ke(
    o,
    {
      onPointerDown: oe,
      onPointerMove: u,
      onPointerUp: O,
      onGesture: _
    },
    {
      enableGestures: !0,
      preventScrolling: !0
    }
  );
  se(() => {
    const C = ($) => {
      switch ($.key) {
        case "Escape":
          M && (S.emit("tool:cancel", { toolId: M }), R(null));
          break;
        case "Delete":
        case "Backspace":
          x.length > 0 && (console.log("Deleting objects:", x), x.forEach((Y) => {
            S.emit("object:removed", { objectId: Y }), l(Y);
          }), p(), R(null));
          break;
        case "r":
        case "R":
          if (x.length > 0 && !$.ctrlKey) {
            $.preventDefault();
            const Y = { getObject: y, updateObject: m };
            x.forEach((D) => {
              $.shiftKey ? k(D, Y) : W(D, Y);
            });
          }
          break;
        case "f":
        case "F":
          if (x.length > 0 && !$.ctrlKey) {
            $.preventDefault();
            const Y = { getObject: y, updateObject: m };
            x.forEach((D) => {
              E(D, Y);
            });
          }
          break;
        case "=":
        case "+":
          if (x.length > 0 && !$.ctrlKey) {
            $.preventDefault();
            const Y = { getObject: y, updateObject: m };
            x.forEach((D) => {
              B(D, 2, Y);
            });
          }
          break;
        case "-":
        case "_":
          if (x.length > 0 && !$.ctrlKey) {
            $.preventDefault();
            const Y = { getObject: y, updateObject: m };
            x.forEach((D) => {
              B(D, 0.5, Y);
            });
          }
          break;
      }
    }, F = ($) => {
      console.log("Object created, returning to pan mode:", $), p(), R(null);
    };
    return document.addEventListener("keydown", C), S.on("tool:creation-complete", F), () => {
      document.removeEventListener("keydown", C), S.off("tool:creation-complete", F);
    };
  }, [M, R, S, x, l, p]), se(() => {
    x.length === 1 ? ie(!0) : ie(!1);
  }, [x]);
  const T = K(() => {
    ie(!1);
  }, []), L = K(() => {
    x.length > 0 && (x.forEach((C) => {
      S.emit("object:removed", { objectId: C }), l(C);
    }), p());
  }, [x, l, p, S]), G = K(() => {
    const C = Math.min(1e3, r.zoom * 1.4);
    c({ zoom: C });
  }, [r.zoom, c]), z = K(() => {
    const C = Math.max(0.01, r.zoom / 1.4);
    c({ zoom: C });
  }, [r.zoom, c]), H = K(() => {
    c({ zoom: 20, center: { x: 0, y: 0 } });
  }, [c]), V = K(() => {
    c({ center: { x: 0, y: 0 } });
  }, [c]);
  return se(() => {
    const C = ($) => {
      $.preventDefault();
      const D = ee.getState().viewport;
      if ($.ctrlKey || $.metaKey) {
        const Z = $.deltaY > 0 ? 0.9 : 1.1, te = Math.max(0.01, Math.min(1e3, D.zoom * Z));
        c({ zoom: te });
      } else {
        const te = $.shiftKey ? $.deltaY : 0, ae = $.shiftKey ? 0 : $.deltaY, pe = te * 1 / D.zoom, me = ae * 1 / D.zoom;
        c({
          center: {
            x: D.center.x + pe,
            y: D.center.y - me
            // subtract because scroll down should move view down
          }
        });
      }
    }, F = o.current;
    if (F)
      return F.addEventListener("wheel", C, { passive: !1 }), () => {
        F.removeEventListener("wheel", C);
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
            Ve,
            {
              viewport: r,
              canvasSize: { width: t, height: e },
              worldToScreen: h,
              objects: d
            }
          ),
          /* @__PURE__ */ n.jsx(
            tt,
            {
              objects: d,
              viewport: r,
              touchTargetSize: w,
              worldToScreen: h,
              selectedObjects: x,
              canvasSize: { width: t, height: e }
            }
          ),
          M && U && !A.current.isDown && /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: U.x,
              cy: U.y,
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
      st,
      {
        capabilities: f,
        viewport: r,
        activeTool: M,
        selectedObjectsCount: x.length
      }
    ),
    /* @__PURE__ */ n.jsx(
      et,
      {
        viewport: r,
        onZoomIn: G,
        onZoomOut: z,
        onZoomReset: H,
        onCenterOnly: V
      }
    ),
    ce && x.length === 1 && /* @__PURE__ */ n.jsx(
      nt,
      {
        selectedObject: d.find((C) => C.id === x[0]) || null,
        onDelete: L,
        onClose: T
      }
    ),
    /* @__PURE__ */ n.jsx(rt, {})
  ] });
}
const Te = [
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
function lt({ className: t = "" }) {
  const { activeTool: e, setActiveTool: s } = fe(), [i, o] = Q(!1), r = ne(null), c = (v) => {
    s(v), o(!1);
  }, d = () => {
    s(null), o(!1);
  }, x = () => {
    o(!i);
  }, g = Te.find((v) => v.id === e);
  return se(() => {
    const v = (j) => {
      r.current && !r.current.contains(j.target) && o(!1);
    };
    return i && document.addEventListener("mousedown", v), () => {
      document.removeEventListener("mousedown", v);
    };
  }, [i]), /* @__PURE__ */ n.jsxs("div", { className: `flex items-center gap-2 p-2 bg-white border-b border-gray-200 ${t}`, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
      /* @__PURE__ */ n.jsx("div", { className: "text-2xl", children: "🟦" }),
      /* @__PURE__ */ n.jsx("h1", { className: "text-lg font-semibold text-gray-800", children: "Grix" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "relative", ref: r, children: [
      /* @__PURE__ */ n.jsxs(
        "button",
        {
          onClick: x,
          className: `
            flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
            ${e ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}
          `,
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "text-lg", children: "🏗️" }),
            /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium", children: g ? g.name : "Build" }),
            /* @__PURE__ */ n.jsx("span", { className: `text-xs transition-transform ${i ? "rotate-180" : ""}`, children: "▼" })
          ]
        }
      ),
      i && /* @__PURE__ */ n.jsxs("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48", children: [
        Te.map((v) => /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: () => c(v.id),
            className: `
                  w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors
                  ${e === v.id ? "bg-blue-50 text-blue-700" : "text-gray-700"}
                `,
            title: v.description,
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "text-lg", children: v.icon }),
              /* @__PURE__ */ n.jsxs("div", { children: [
                /* @__PURE__ */ n.jsx("div", { className: "text-sm font-medium", children: v.name }),
                /* @__PURE__ */ n.jsx("div", { className: "text-xs text-gray-500", children: v.description })
              ] })
            ]
          },
          v.id
        )),
        e && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("div", { className: "border-t border-gray-100" }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: d,
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
      (g == null ? void 0 : g.name) || "Active Tool"
    ] }) : /* @__PURE__ */ n.jsxs("span", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ n.jsx("div", { className: "w-2 h-2 bg-gray-300 rounded-full" }),
      "Click Build to start creating"
    ] }) })
  ] });
}
class Re extends ye.Component {
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
      const i = this.props.fallback;
      return i ? /* @__PURE__ */ n.jsx(i, { error: this.state.error }) : /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-center h-full bg-red-50 text-red-700 p-8", children: /* @__PURE__ */ n.jsxs("div", { className: "text-center", children: [
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
class dt {
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
      if (Math.sqrt(e.x * e.x + e.y * e.y) <= 0.75)
        return { x: 0, y: 0 };
      const r = xe.getState(), c = ve(
        s.viewport,
        r.gridScale,
        r.snapPrecision
      );
      return this.context.math.snapToGrid(e, c);
    }
    return e;
  }
  findNearestHandle(e, s = 20) {
    this.context.canvas.screenToWorld(e);
    const i = this.context.canvas.getAllObjects();
    for (const o of i)
      if (o.type === "ray") {
        const r = o, c = this.context.canvas.worldToScreen(r.properties.startPoint), d = this.context.canvas.worldToScreen(r.properties.endPoint), x = this.context.math.distance(e, c), g = this.context.math.distance(e, d);
        if (x <= s)
          return { rayId: r.id, handle: "start" };
        if (g <= s)
          return { rayId: r.id, handle: "end" };
        const v = 8, j = d.x - c.x, N = d.y - c.y, l = Math.sqrt(j * j + N * N);
        if (l > 0) {
          const p = Math.max(0, Math.min(1, ((e.x - c.x) * j + (e.y - c.y) * N) / (l * l))), P = {
            x: c.x + p * j,
            y: c.y + p * N
          };
          if (this.context.math.distance(e, P) <= v)
            return { rayId: r.id, handle: "move" };
        }
      }
    return null;
  }
  onPointerDown(e) {
    const s = { x: e.x, y: e.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.findNearestHandle(s);
    if (o) {
      const r = this.context.canvas.getObject(o.rayId), c = this.context.state.getState().selectedObjects;
      if (r && c.includes(o.rayId)) {
        this.state.currentRay = r, this.state.dragTarget = o.handle, this.state.isCreating = !1, o.handle === "move" && (this.state.dragOffset = {
          x: i.x - r.properties.startPoint.x,
          y: i.y - r.properties.startPoint.y
        });
        return;
      }
    }
    if (!this.state.isCreating) {
      this.state.isCreating = !0, this.state.startPoint = i;
      const r = {
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
        selected: !1
      };
      this.state.currentRay = r, this.context.canvas.addObject(r);
    }
  }
  onPointerMove(e) {
    if (!this.state.currentRay) return;
    const s = { x: e.x, y: e.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating) {
      const o = this.context.math.slope(this.state.currentRay.properties.startPoint, i), r = i.y - o * i.x;
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: {
          ...this.state.currentRay.properties,
          endPoint: i,
          slope: o,
          yIntercept: isFinite(o) ? r : this.state.currentRay.properties.startPoint.y
        }
      });
    } else if (this.state.dragTarget) {
      const o = this.context.canvas.getObject(this.state.currentRay.id);
      if (!o) return;
      const r = { ...o.properties };
      if (this.state.dragTarget === "start")
        r.startPoint = i;
      else if (this.state.dragTarget === "end")
        r.endPoint = i;
      else if (this.state.dragTarget === "move" && this.state.dragOffset) {
        const c = i.x - this.state.dragOffset.x - o.properties.startPoint.x, d = i.y - this.state.dragOffset.y - o.properties.startPoint.y;
        r.startPoint = {
          x: o.properties.startPoint.x + c,
          y: o.properties.startPoint.y + d
        }, r.endPoint = {
          x: o.properties.endPoint.x + c,
          y: o.properties.endPoint.y + d
        };
      }
      if (this.state.dragTarget === "start" || this.state.dragTarget === "end") {
        const c = this.context.math.slope(r.startPoint, r.endPoint);
        r.slope = c, r.yIntercept = isFinite(c) ? r.startPoint.y - c * r.startPoint.x : r.startPoint.y;
      }
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: r
      });
    }
    this.context.events.emit("ray:update", {
      rayId: this.state.currentRay.id,
      ray: this.context.canvas.getObject(this.state.currentRay.id)
    });
  }
  onPointerUp(e) {
    if (this.state.isCreating && this.state.currentRay) {
      const s = { x: e.x, y: e.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.state.currentRay.properties.startPoint;
      this.context.math.distance(o, i) < 0.1 ? this.context.canvas.removeObject(this.state.currentRay.id) : (this.context.events.emit("ray:created", {
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
function ht() {
  return new dt();
}
class ut {
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
      if (Math.sqrt(e.x * e.x + e.y * e.y) <= 0.75)
        return { x: 0, y: 0 };
      const r = xe.getState(), c = ve(
        s.viewport,
        r.gridScale,
        r.snapPrecision
      );
      return this.context.math.snapToGrid(e, c);
    }
    return e;
  }
  findRectangleAtPoint(e) {
    const s = this.context.canvas.getAllObjects();
    for (const i of s)
      if (i.type === "rectangle") {
        const o = i, { x: r, y: c, width: d, height: x } = o.properties;
        if (e.x >= r && e.x <= r + d && e.y >= c && e.y <= c + x)
          return o;
      }
    return null;
  }
  findNearestCorner(e, s, i = 0.5) {
    const { x: o, y: r, width: c, height: d } = s.properties, x = [
      { point: { x: o, y: r }, type: "corner-bl" },
      // bottom-left
      { point: { x: o + c, y: r }, type: "corner-br" },
      // bottom-right
      { point: { x: o, y: r + d }, type: "corner-tl" },
      // top-left
      { point: { x: o + c, y: r + d }, type: "corner-tr" }
      // top-right
    ];
    for (const g of x)
      if (this.context.math.distance(e, g.point) <= i)
        return g.type;
    return null;
  }
  onPointerDown(e) {
    const s = { x: e.x, y: e.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.findRectangleAtPoint(i);
    if (o && this.context.state.getState().selectedObjects.includes(o.id)) {
      const d = this.findNearestCorner(i, o);
      if (d) {
        this.state.currentRectangle = o, this.state.dragTarget = d, this.state.isCreating = !1;
        const { x, y: g, width: v, height: j } = o.properties;
        switch (d) {
          case "corner-tl":
            this.state.lockedCorner = { x: x + v, y: g };
            break;
          case "corner-tr":
            this.state.lockedCorner = { x, y: g };
            break;
          case "corner-bl":
            this.state.lockedCorner = { x: x + v, y: g + j };
            break;
          case "corner-br":
            this.state.lockedCorner = { x, y: g + j };
            break;
        }
        return;
      } else {
        this.state.currentRectangle = o, this.state.dragTarget = "move", this.state.dragOffset = {
          x: i.x - o.properties.x,
          y: i.y - o.properties.y
        }, this.state.isCreating = !1;
        return;
      }
    }
    this.state.isCreating = !0, this.state.startPoint = i;
    const r = {
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
      selected: !1
    };
    this.state.currentRectangle = r, this.context.canvas.addObject(r);
  }
  onPointerMove(e) {
    if (!this.state.currentRectangle) return;
    const s = { x: e.x, y: e.y }, i = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.startPoint) {
      const o = Math.min(this.state.startPoint.x, i.x), r = Math.min(this.state.startPoint.y, i.y), c = Math.abs(i.x - this.state.startPoint.x), d = Math.abs(i.y - this.state.startPoint.y), x = c * d;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: o,
          y: r,
          width: c,
          height: d,
          area: x
        }
      });
    } else if (this.state.dragTarget === "move" && this.state.dragOffset) {
      const o = i.x - this.state.dragOffset.x, r = i.y - this.state.dragOffset.y;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          ...this.state.currentRectangle.properties,
          x: o,
          y: r
        }
      });
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith("corner-") && this.state.lockedCorner) {
      const o = this.state.lockedCorner, r = Math.min(i.x, o.x), c = Math.max(i.x, o.x), d = Math.min(i.y, o.y), x = Math.max(i.y, o.y), g = r, v = d, j = c - r, N = x - d, l = Math.max(0.1, j), p = Math.max(0.1, N), P = l * p;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: g,
          y: v,
          width: l,
          height: p,
          area: P
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
function xt() {
  return new ut();
}
class pt {
  constructor() {
    J(this, "id", "area-counter");
    J(this, "name", "Area Counter");
    J(this, "context");
    J(this, "badges", /* @__PURE__ */ new Map());
    J(this, "badgeElements", /* @__PURE__ */ new Map());
  }
  init(e) {
    this.context = e, e.events.on("rectangle:created", this.handleRectangleCreated.bind(this)), e.events.on("rectangle:update", this.handleRectangleUpdated.bind(this)), e.events.on("object:removed", this.handleObjectRemoved.bind(this)), this.createBadgesForExistingRectangles();
    const s = e.state.subscribe((i) => {
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
    const i = e.x + e.width / 2, o = e.y + e.height / 2, r = this.context.canvas.worldToScreen({ x: i, y: o }), c = this.formatArea(e.area, e.width, e.height);
    s.textContent = c;
    const d = s.getBoundingClientRect();
    s.style.left = `${r.x - d.width / 2}px`, s.style.top = `${r.y - d.height / 2}px`;
    const x = this.context.state.getState(), g = 30, v = e.width * x.viewport.zoom, j = e.height * x.viewport.zoom;
    s.style.display = v >= g && j >= g ? "block" : "none";
  }
  formatArea(e, s, i) {
    const o = Math.abs(s - Math.round(s)) < 1e-3, r = Math.abs(i - Math.round(i)) < 1e-3;
    if (o && r) {
      const c = Math.round(s), d = Math.round(i);
      return `${d} × ${c} = ${d * c}`;
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
      const i = this.badgeElements.get(e);
      i && (i.style.display = "none");
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
function gt() {
  return new pt();
}
function yt() {
  const { registerPlugin: t } = fe(), e = ne(!1);
  return se(() => {
    if (e.current) return;
    const s = ht(), i = xt(), o = gt();
    return t(s), t(i), t(o), e.current = !0, () => {
    };
  }, [t]), /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col h-screen bg-gray-50", children: [
    /* @__PURE__ */ n.jsx(lt, {}),
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 relative", "data-grix-canvas": !0, children: /* @__PURE__ */ n.jsx(
      ct,
      {
        width: window.innerWidth,
        height: window.innerHeight - 60,
        className: "absolute inset-0"
      }
    ) })
  ] });
}
function jt() {
  return /* @__PURE__ */ n.jsx(Re, { children: /* @__PURE__ */ n.jsx(He, { children: /* @__PURE__ */ n.jsx(Re, { children: /* @__PURE__ */ n.jsx(yt, {}) }) }) });
}
const vt = "0.1.0";
export {
  ct as Canvas,
  jt as GrixApp,
  He as PluginManagerProvider,
  lt as ToolBar,
  gt as createAreaCounter,
  ht as createRayTool,
  xt as createRectangleTool,
  ee as useCanvasStore,
  Ke as useInputSystem,
  fe as usePluginManager,
  vt as version
};
