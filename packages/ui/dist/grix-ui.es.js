var Dt = Object.defineProperty;
var Nt = (r, e, s) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[e] = s;
var ae = (r, e, s) => Nt(r, typeof e != "symbol" ? e + "" : e, s);
import Ve, { createContext as zt, useState as ne, useRef as We, useEffect as Oe, useContext as Rt, useCallback as Ee } from "react";
var ht = { exports: {} }, ot = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function It() {
  if (ft) return ot;
  ft = 1;
  var r = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function s(n, o, i) {
    var c = null;
    if (i !== void 0 && (c = "" + i), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      i = {};
      for (var a in o)
        a !== "key" && (i[a] = o[a]);
    } else i = o;
    return o = i.ref, {
      $$typeof: r,
      type: n,
      key: c,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return ot.Fragment = e, ot.jsx = s, ot.jsxs = s, ot;
}
var at = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function $t() {
  return mt || (mt = 1, process.env.NODE_ENV !== "production" && function() {
    function r(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === de ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case P:
          return "Fragment";
        case m:
          return "Profiler";
        case l:
          return "StrictMode";
        case z:
          return "Suspense";
        case V:
          return "SuspenseList";
        case le:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case N:
            return "Portal";
          case E:
            return (p.displayName || "Context") + ".Provider";
          case b:
            return (p._context.displayName || "Context") + ".Consumer";
          case F:
            var W = p.render;
            return p = p.displayName, p || (p = W.displayName || W.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case G:
            return W = p.displayName || null, W !== null ? W : r(p.type) || "Memo";
          case U:
            W = p._payload, p = p._init;
            try {
              return r(p(W));
            } catch {
            }
        }
      return null;
    }
    function e(p) {
      return "" + p;
    }
    function s(p) {
      try {
        e(p);
        var W = !1;
      } catch {
        W = !0;
      }
      if (W) {
        W = console;
        var re = W.error, je = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return re.call(
          W,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          je
        ), e(p);
      }
    }
    function n(p) {
      if (p === P) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === U)
        return "<...>";
      try {
        var W = r(p);
        return W ? "<" + W + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var p = Ae.A;
      return p === null ? null : p.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function c(p) {
      if (g.call(p, "key")) {
        var W = Object.getOwnPropertyDescriptor(p, "key").get;
        if (W && W.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function a(p, W) {
      function re() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          W
        ));
      }
      re.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: re,
        configurable: !0
      });
    }
    function h() {
      var p = r(this.type);
      return Pe[p] || (Pe[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function x(p, W, re, je, Ie, Q, Ne, _e) {
      return re = Q.ref, p = {
        $$typeof: T,
        type: p,
        key: W,
        props: Q,
        _owner: Ie
      }, (re !== void 0 ? re : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(p, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(p, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ne
      }), Object.defineProperty(p, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _e
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function C(p, W, re, je, Ie, Q, Ne, _e) {
      var J = W.children;
      if (J !== void 0)
        if (je)
          if (j(J)) {
            for (je = 0; je < J.length; je++)
              k(J[je]);
            Object.freeze && Object.freeze(J);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(J);
      if (g.call(W, "key")) {
        J = r(p);
        var Z = Object.keys(W).filter(function(pe) {
          return pe !== "key";
        });
        je = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", me[J + je] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          je,
          J,
          Z,
          J
        ), me[J + je] = !0);
      }
      if (J = null, re !== void 0 && (s(re), J = "" + re), c(W) && (s(W.key), J = "" + W.key), "key" in W) {
        re = {};
        for (var he in W)
          he !== "key" && (re[he] = W[he]);
      } else re = W;
      return J && a(
        re,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), x(
        p,
        J,
        Q,
        Ie,
        o(),
        re,
        Ne,
        _e
      );
    }
    function k(p) {
      typeof p == "object" && p !== null && p.$$typeof === T && p._store && (p._store.validated = 1);
    }
    var R = Ve, T = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), E = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), Ae = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, j = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      "react-stack-bottom-frame": function(p) {
        return p();
      }
    };
    var ce, Pe = {}, ve = R["react-stack-bottom-frame"].bind(
      R,
      i
    )(), D = X(n(i)), me = {};
    at.Fragment = P, at.jsx = function(p, W, re, je, Ie) {
      var Q = 1e4 > Ae.recentlyCreatedOwnerStacks++;
      return C(
        p,
        W,
        re,
        !1,
        je,
        Ie,
        Q ? Error("react-stack-top-frame") : ve,
        Q ? X(n(p)) : D
      );
    }, at.jsxs = function(p, W, re, je, Ie) {
      var Q = 1e4 > Ae.recentlyCreatedOwnerStacks++;
      return C(
        p,
        W,
        re,
        !0,
        je,
        Ie,
        Q ? Error("react-stack-top-frame") : ve,
        Q ? X(n(p)) : D
      );
    };
  }()), at;
}
var bt;
function Wt() {
  return bt || (bt = 1, process.env.NODE_ENV === "production" ? ht.exports = It() : ht.exports = $t()), ht.exports;
}
var t = Wt();
const et = {
  // Vector operations
  distance(r, e) {
    const s = e.x - r.x, n = e.y - r.y;
    return Math.sqrt(s * s + n * n);
  },
  slope(r, e) {
    const s = e.x - r.x, n = e.y - r.y;
    return Math.abs(s) < Number.EPSILON ? s === 0 || s > 0 ? 1 / 0 : -1 / 0 : n / s;
  },
  angle(r, e) {
    const s = e.x - r.x, n = e.y - r.y;
    return Math.atan2(n, s);
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
      const s = e;
      e = r % e, r = s;
    }
    return r;
  },
  simplifyFraction(r, e) {
    if (e === 0)
      return [r, 1];
    const s = this.gcd(r, e);
    return [r / s, e / s];
  },
  // Coordinate transformations
  worldToScreen(r, e, s) {
    const n = s.width / 2, o = s.height / 2, i = (r.x - e.center.x) * e.zoom, c = (r.y - e.center.y) * e.zoom;
    return {
      x: n + i,
      y: o - c
      // Flip Y axis for mathematical coordinates
    };
  },
  screenToWorld(r, e, s) {
    const n = s.width / 2, o = s.height / 2, i = (r.x - n) / e.zoom, c = (o - r.y) / e.zoom;
    return {
      x: e.center.x + i,
      y: e.center.y + c
    };
  }
}, Qe = {
  // Detect device capabilities
  detectCapabilities() {
    const r = "ontouchstart" in window || navigator.maxTouchPoints > 0, e = r && navigator.maxTouchPoints > 1, s = !0, n = window.matchMedia("(hover: hover)").matches;
    return {
      hasTouch: r,
      hasPencil: e,
      hasKeyboard: s,
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
class Lt {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
  }
  on(e, s) {
    this.listeners.has(e) || this.listeners.set(e, []), this.listeners.get(e).push(s);
  }
  off(e, s) {
    const n = this.listeners.get(e);
    if (n) {
      const o = n.indexOf(s);
      o > -1 && n.splice(o, 1);
    }
  }
  emit(e, s) {
    const n = this.listeners.get(e);
    n && n.forEach((o) => {
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
const vt = (r) => {
  let e;
  const s = /* @__PURE__ */ new Set(), n = (x, C) => {
    const k = typeof x == "function" ? x(e) : x;
    if (!Object.is(k, e)) {
      const R = e;
      e = C ?? (typeof k != "object" || k === null) ? k : Object.assign({}, e, k), s.forEach((T) => T(e, R));
    }
  }, o = () => e, a = { setState: n, getState: o, getInitialState: () => h, subscribe: (x) => (s.add(x), () => s.delete(x)) }, h = e = r(n, o, a);
  return a;
}, Bt = (r) => r ? vt(r) : vt, Gt = (r) => r;
function qt(r, e = Gt) {
  const s = Ve.useSyncExternalStore(
    r.subscribe,
    () => e(r.getState()),
    () => e(r.getInitialState())
  );
  return Ve.useDebugValue(s), s;
}
const jt = (r) => {
  const e = Bt(r), s = (n) => qt(e, n);
  return Object.assign(s, e), s;
}, pt = (r) => r ? jt(r) : jt, Re = pt((r, e) => ({
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
    r((n) => ({
      viewport: { ...n.viewport, ...s }
    }));
  },
  // Object management
  addObject: (s) => {
    r((n) => ({
      objects: [...n.objects, s]
    }));
  },
  removeObject: (s) => {
    r((n) => ({
      objects: n.objects.filter((o) => o.id !== s),
      selectedObjects: n.selectedObjects.filter((o) => o !== s)
    }));
  },
  updateObject: (s, n) => {
    r((o) => ({
      objects: o.objects.map(
        (i) => i.id === s ? { ...i, ...n } : i
      )
    }));
  },
  // Selection management
  selectObject: (s, n = !1) => {
    r((o) => n ? {
      selectedObjects: o.selectedObjects.includes(s) ? o.selectedObjects.filter((c) => c !== s) : [...o.selectedObjects, s]
    } : { selectedObjects: [s] });
  },
  clearSelection: () => {
    r({ selectedObjects: [] });
  },
  // Grid settings
  setSnapToGrid: (s) => {
    r({ snapToGrid: s });
  },
  setGridDensity: (s) => {
    r({ gridDensity: s });
  },
  // Canvas size
  setCanvasSize: (s) => {
    r({ canvasSize: s });
  },
  // Helper methods
  getObject: (s) => e().objects.find((n) => n.id === s),
  getAllObjects: () => e().objects,
  getSelectedObjects: () => {
    const s = e();
    return s.objects.filter((n) => s.selectedObjects.includes(n.id));
  },
  screenToWorld: (s) => {
    const { viewport: n, canvasSize: o } = e();
    return et.screenToWorld(s, n, o);
  },
  worldToScreen: (s) => {
    const { viewport: n, canvasSize: o } = e();
    return et.worldToScreen(s, n, o);
  },
  // Layer management
  bringToFront: (s) => {
    r((n) => {
      const o = Math.max(...n.objects.map((i) => i.zIndex || 0));
      return {
        objects: n.objects.map(
          (i) => i.id === s ? { ...i, zIndex: o + 1 } : i
        )
      };
    });
  },
  sendToBack: (s) => {
    r((n) => {
      const o = Math.min(...n.objects.map((i) => i.zIndex || 0));
      return {
        objects: n.objects.map(
          (i) => i.id === s ? { ...i, zIndex: o - 1 } : i
        )
      };
    });
  },
  bringForward: (s) => {
    r((n) => {
      const o = n.objects.find((a) => a.id === s);
      if (!o) return n;
      const i = n.objects.filter((a) => (a.zIndex || 0) > (o.zIndex || 0));
      if (i.length === 0) return n;
      const c = Math.min(...i.map((a) => a.zIndex || 0));
      return {
        objects: n.objects.map(
          (a) => a.id === s ? { ...a, zIndex: c + 0.1 } : a
        )
      };
    });
  },
  sendBackward: (s) => {
    r((n) => {
      const o = n.objects.find((a) => a.id === s);
      if (!o) return n;
      const i = n.objects.filter((a) => (a.zIndex || 0) < (o.zIndex || 0));
      if (i.length === 0) return n;
      const c = Math.max(...i.map((a) => a.zIndex || 0));
      return {
        objects: n.objects.map(
          (a) => a.id === s ? { ...a, zIndex: c - 0.1 } : a
        )
      };
    });
  }
})), Yt = () => ({
  addObject: (r) => Re.getState().addObject(r),
  removeObject: (r) => Re.getState().removeObject(r),
  updateObject: (r, e) => Re.getState().updateObject(r, e),
  getObject: (r) => Re.getState().getObject(r),
  getAllObjects: () => Re.getState().getAllObjects(),
  screenToWorld: (r) => Re.getState().screenToWorld(r),
  worldToScreen: (r) => Re.getState().worldToScreen(r)
}), _t = () => ({
  getState: () => {
    const r = Re.getState();
    return {
      viewport: r.viewport,
      objects: r.objects,
      selectedObjects: r.selectedObjects,
      snapToGrid: r.snapToGrid,
      gridDensity: r.gridDensity
    };
  },
  setState: (r) => {
    Re.setState(r);
  },
  subscribe: (r) => Re.subscribe((e) => {
    r({
      viewport: e.viewport,
      objects: e.objects,
      selectedObjects: e.selectedObjects,
      snapToGrid: e.snapToGrid,
      gridDensity: e.gridDensity
    });
  })
}), Ft = zt(null);
function xt() {
  const r = Rt(Ft);
  if (!r)
    throw new Error("usePluginManager must be used within PluginManagerProvider");
  return r;
}
function Xt({ children: r }) {
  const [e] = ne(() => new Lt()), [s] = ne(() => /* @__PURE__ */ new Map()), [n] = ne(() => /* @__PURE__ */ new Map()), [o, i] = ne(null), c = We(), a = We(), h = We();
  c.current || (c.current = Yt()), a.current || (a.current = _t()), h.current || (h.current = {
    distance: et.distance,
    slope: et.slope,
    snapToGrid: et.snapToGrid,
    calculateArea: et.calculateArea
  });
  const x = c.current, C = a.current, k = h.current, R = (l) => {
    if (s.has(l.id)) {
      console.warn(`Plugin ${l.id} is already registered`);
      return;
    }
    const m = {
      canvas: x,
      events: e,
      state: C,
      math: k
    };
    s.set(l.id, l), n.set(l.id, m);
    try {
      l.init(m), console.log(`Plugin ${l.id} initialized successfully`);
    } catch (b) {
      console.error(`Failed to initialize plugin ${l.id}:`, b), s.delete(l.id), n.delete(l.id);
    }
  }, T = (l) => {
    var b;
    const m = s.get(l);
    if (m) {
      try {
        (b = m.destroy) == null || b.call(m);
      } catch (E) {
        console.error(`Error destroying plugin ${l}:`, E);
      }
      s.delete(l), n.delete(l), o === l && i(null);
    }
  }, N = () => Array.from(s.values());
  Oe(() => {
    e.emit("tool:changed", { previous: null, current: o });
  }, [o, e]), Oe(() => {
    const l = (F) => (z) => {
      var G, U, le, de, Ae, g;
      const V = o ? s.get(o) : null;
      if (V)
        try {
          switch (F) {
            case "pointer:down":
              (G = V.onPointerDown) == null || G.call(V, z);
              break;
            case "pointer:move":
              (U = V.onPointerMove) == null || U.call(V, z);
              break;
            case "pointer:up":
              (le = V.onPointerUp) == null || le.call(V, z);
              break;
          }
        } catch (j) {
          console.error(`Error in plugin ${o} handling ${F}:`, j);
        }
      else {
        const j = C.getState().selectedObjects;
        try {
          let X;
          if (j.length === 1) {
            const ce = x.getObject(j[0]);
            (ce == null ? void 0 : ce.type) === "ray" ? X = s.get("ray-tool") : (ce == null ? void 0 : ce.type) === "rectangle" ? X = s.get("rectangle-tool") : (ce == null ? void 0 : ce.type) === "circle" ? X = s.get("circle-tool") : (ce == null ? void 0 : ce.type) === "triangle" ? X = s.get("triangle-tool") : (ce == null ? void 0 : ce.type) === "function" && (X = s.get("function-tool"));
          }
          if (X)
            switch (F) {
              case "pointer:down":
                (de = X.onPointerDown) == null || de.call(X, z);
                break;
              case "pointer:move":
                (Ae = X.onPointerMove) == null || Ae.call(X, z);
                break;
              case "pointer:up":
                (g = X.onPointerUp) == null || g.call(X, z);
                break;
            }
        } catch (X) {
          console.error(`Error in tool handling ${F} for manipulation:`, X);
        }
      }
    }, m = l("pointer:down"), b = l("pointer:move"), E = l("pointer:up");
    return e.on("pointer:down", m), e.on("pointer:move", b), e.on("pointer:up", E), () => {
      e.off("pointer:down", m), e.off("pointer:move", b), e.off("pointer:up", E);
    };
  }, [o, s, e, C, x]);
  const P = {
    eventBus: e,
    registerPlugin: R,
    unregisterPlugin: T,
    getActivePlugins: N,
    activeTool: o,
    setActiveTool: i
  };
  return /* @__PURE__ */ t.jsx(Ft.Provider, { value: P, children: r });
}
function Ht() {
  const { eventBus: r } = xt();
  return {
    handlePointerDown: (o) => {
      r.emit("pointer:down", o);
    },
    handlePointerMove: (o) => {
      r.emit("pointer:move", o);
    },
    handlePointerUp: (o) => {
      r.emit("pointer:up", o);
    }
  };
}
function Ut(r, e, s = {}) {
  const [n, o] = ne(null), [i, c] = ne(/* @__PURE__ */ new Map()), a = {
    enableGestures: !0,
    touchTargetSize: 44,
    preventScrolling: !0,
    ...s
  };
  Oe(() => {
    const l = Qe.detectCapabilities();
    o(l);
  }, []);
  const [h, x] = ne({
    isGesturing: !1,
    startTime: 0,
    startDistance: 0,
    lastTapTime: 0,
    tapCount: 0
  }), C = Ee((l) => {
    const m = Array.from(l.values());
    if (m.length < 2) return 0;
    const b = m[0], E = m[1];
    if (!b || !E) return 0;
    const F = b.x - E.x, z = b.y - E.y;
    return Math.sqrt(F * F + z * z);
  }, []), k = Ee((l) => {
    const m = Array.from(l.values());
    if (m.length === 0) return { x: 0, y: 0 };
    const b = m.reduce((E, F) => ({ x: E.x + F.x, y: E.y + F.y }), { x: 0, y: 0 });
    return { x: b.x / m.length, y: b.y / m.length };
  }, []), R = Ee((l) => {
    var z;
    if (!r.current) return;
    a.preventScrolling && l.preventDefault();
    const m = r.current.getBoundingClientRect(), b = l.clientX - m.left, E = l.clientY - m.top, F = Qe.normalizePointerEvent(l);
    F.x = b, F.y = E, c((V) => {
      const G = new Map(V);
      if (G.set(l.pointerId, F), a.enableGestures && G.size >= 2) {
        const U = C(G);
        x((le) => ({
          ...le,
          isGesturing: !0,
          startTime: l.timeStamp,
          startDistance: U
        }));
      }
      return G;
    }), r.current.setPointerCapture(l.pointerId), (z = e.onPointerDown) == null || z.call(e, F);
  }, [r, e, a, C]), T = Ee((l) => {
    var z;
    if (!r.current) return;
    const m = r.current.getBoundingClientRect(), b = l.clientX - m.left, E = l.clientY - m.top, F = Qe.normalizePointerEvent(l);
    F.x = b, F.y = E, c((V) => {
      var U, le;
      const G = new Map(V);
      if (G.set(l.pointerId, F), a.enableGestures && G.size >= 2) {
        const de = C(G), Ae = k(G);
        if (h.isGesturing && h.startDistance > 0) {
          const g = de / h.startDistance;
          (U = e.onGesture) == null || U.call(e, {
            type: "pinch",
            center: Ae,
            scale: g,
            touches: G.size
          });
        }
      } else if (G.size === 1 && h.isGesturing) {
        const de = k(G);
        (le = e.onGesture) == null || le.call(e, {
          type: "pan",
          center: de,
          touches: G.size
        });
      }
      return G;
    }), (z = e.onPointerMove) == null || z.call(e, F);
  }, [e, a, C, k, h]), N = Ee((l) => {
    var z;
    if (!r.current) return;
    const m = r.current.getBoundingClientRect(), b = l.clientX - m.left, E = l.clientY - m.top, F = Qe.normalizePointerEvent(l);
    F.x = b, F.y = E, c((V) => {
      var U;
      const G = new Map(V);
      if (G.delete(l.pointerId), a.enableGestures && G.size === 0) {
        const de = l.timeStamp - h.startTime < 200, Ae = l.timeStamp - h.lastTapTime;
        de && !h.isGesturing && (Ae < 300 ? x((g) => ({ ...g, tapCount: g.tapCount + 1 })) : ((U = e.onGesture) == null || U.call(e, {
          type: "tap",
          center: { x: F.x, y: F.y },
          touches: 1
        }), x((g) => ({
          ...g,
          tapCount: 1,
          lastTapTime: l.timeStamp
        })))), x((g) => ({ ...g, isGesturing: !1 }));
      }
      return G;
    }), r.current && r.current.releasePointerCapture(l.pointerId), (z = e.onPointerUp) == null || z.call(e, F);
  }, [r, e, a, h]), P = Ee((l) => {
    var z;
    if (!r.current) return;
    const m = r.current.getBoundingClientRect(), b = l.clientX - m.left, E = l.clientY - m.top, F = Qe.normalizePointerEvent(l);
    F.x = b, F.y = E, c((V) => {
      const G = new Map(V);
      return G.delete(l.pointerId), G;
    }), x((V) => ({ ...V, isGesturing: !1 })), (z = e.onPointerCancel) == null || z.call(e, F);
  }, [e]);
  return Oe(() => {
    const l = r.current;
    if (!l) return;
    l.addEventListener("pointerdown", R), l.addEventListener("pointermove", T), l.addEventListener("pointerup", N), l.addEventListener("pointercancel", P);
    const m = (b) => b.preventDefault();
    return l.addEventListener("contextmenu", m), () => {
      l.removeEventListener("pointerdown", R), l.removeEventListener("pointermove", T), l.removeEventListener("pointerup", N), l.removeEventListener("pointercancel", P), l.removeEventListener("contextmenu", m);
    };
  }, [r, R, T, N, P]), {
    capabilities: n,
    activePointers: Array.from(i.values()),
    isGesturing: h.isGesturing,
    touchTargetSize: n ? Qe.getTouchTargetSize(n.hasTouch ? "touch" : "mouse") : a.touchTargetSize
  };
}
function Ot(r, e = {
  minSpacing: 8,
  maxSpacing: 80,
  labelMinSpacing: 40
}) {
  const s = r.zoom;
  let o = 1, i = o * s;
  for (; i < e.minSpacing && o < 1e4; )
    o *= wt(o), i = o * s;
  for (; i > e.maxSpacing && o > 1e-4; )
    o /= Vt(o), i = o * s;
  let c = o, a = c * s;
  for (; a < e.labelMinSpacing && c < o * 100; )
    c *= wt(c), a = c * s;
  const h = Math.max(0.1, Math.min(1, (i - e.minSpacing) / (e.maxSpacing - e.minSpacing)));
  return {
    gridSize: o,
    labelStep: c,
    shouldShowGrid: i >= e.minSpacing,
    shouldShowLabels: a >= e.labelMinSpacing,
    opacity: h
  };
}
function wt(r) {
  if (r < 1)
    return r >= 0.5 ? 2 : r >= 0.2 ? 2.5 : (r >= 0.1, 2);
  if (r < 10)
    return r >= 5 ? 2 : r >= 2 ? 2.5 : (r >= 1, 2);
  {
    const e = Math.pow(10, Math.floor(Math.log10(r))), s = r / e;
    return s >= 5 ? 2 : s >= 2 ? 2.5 : (s >= 1, 2);
  }
}
function Vt(r) {
  if (r <= 1)
    return r <= 0.1 || r <= 0.2 ? 2 : r <= 0.5 ? 2.5 : (r <= 1, 2);
  if (r <= 10)
    return r <= 2 ? 2 : r <= 5 ? 2.5 : (r <= 10, 2);
  {
    const e = Math.pow(10, Math.floor(Math.log10(r))), s = r / e;
    return s <= 2 ? 2 : s <= 5 ? 2.5 : (s <= 10, 2);
  }
}
function Zt(r, e, s, n, o = !0) {
  const { gridSize: i } = s, c = {
    left: r.center.x - e.width / 2 / r.zoom,
    right: r.center.x + e.width / 2 / r.zoom,
    top: r.center.y + e.height / 2 / r.zoom,
    bottom: r.center.y - e.height / 2 / r.zoom
  }, a = [], h = [], x = Math.floor(c.left / i) * i, C = Math.ceil(c.right / i) * i;
  for (let T = x; T <= C; T += i) {
    const N = n({ x: T, y: 0 }).x, P = Math.abs(T) < i / 2, l = Math.abs(T % (i * 5)) < i / 2;
    a.push({ x: N, isAxis: P, isMajor: l, isInteger: !1, value: T });
  }
  if (o && (i >= 2 || i < 1)) {
    const T = Math.floor(c.left), N = Math.ceil(c.right);
    for (let P = T; P <= N; P += 1)
      if (Math.abs(P % i) > 1e-3) {
        const l = n({ x: P, y: 0 }).x, m = Math.abs(P) < 0.5;
        a.push({ x: l, isAxis: m, isMajor: !1, isInteger: !0, value: P });
      }
  }
  const k = Math.floor(c.bottom / i) * i, R = Math.ceil(c.top / i) * i;
  for (let T = k; T <= R; T += i) {
    const N = n({ x: 0, y: T }).y, P = Math.abs(T) < i / 2, l = Math.abs(T % (i * 5)) < i / 2;
    h.push({ y: N, isAxis: P, isMajor: l, isInteger: !1, value: T });
  }
  if (o && (i >= 2 || i < 1)) {
    const T = Math.floor(c.bottom), N = Math.ceil(c.top);
    for (let P = T; P <= N; P += 1)
      if (Math.abs(P % i) > 1e-3) {
        const l = n({ x: 0, y: P }).y, m = Math.abs(P) < 0.5;
        h.push({ y: l, isAxis: m, isMajor: !1, isInteger: !0, value: P });
      }
  }
  return { verticalLines: a, horizontalLines: h };
}
function Ce(r, e = 3) {
  if (Number.isInteger(r))
    return r.toString();
  const s = r.toFixed(e);
  return parseFloat(s).toString();
}
function ct(r, e, s) {
  const n = s.x - e.x, o = s.y - e.y, i = Math.sqrt(n * n + o * o);
  if (i === 0) return Math.sqrt((r.x - e.x) ** 2 + (r.y - e.y) ** 2);
  const c = Math.max(0, Math.min(1, ((r.x - e.x) * n + (r.y - e.y) * o) / (i * i))), a = {
    x: e.x + c * n,
    y: e.y + c * o
  };
  return Math.sqrt((r.x - a.x) ** 2 + (r.y - a.y) ** 2);
}
function Mt(r, e) {
  const [s, n, o] = e, i = (n.y - o.y) * (s.x - o.x) + (o.x - n.x) * (s.y - o.y), c = ((n.y - o.y) * (r.x - o.x) + (o.x - n.x) * (r.y - o.y)) / i, a = ((o.y - s.y) * (r.x - o.x) + (s.x - o.x) * (r.y - o.y)) / i, h = 1 - c - a;
  return c >= 0 && a >= 0 && h >= 0;
}
function Ct(r, e, s) {
  const n = Math.sqrt((r.x - e.x) ** 2 + (r.y - e.y) ** 2);
  return Math.abs(n - s);
}
function q(r, e) {
  return e >= 1 ? r.toFixed(0) : e >= 0.1 ? r.toFixed(1) : e >= 0.01 ? r.toFixed(2) : r.toFixed(3);
}
function st(r, e, s) {
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
  const o = Ot(r, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }).gridSize / e;
  return o <= 0.1 ? o : o <= 0.5 ? 0.1 : o <= 2 ? 0.25 : 1;
}
const Pt = {
  // Origin line enhancements - start with most basic ones enabled
  showEquivalentFractions: !0,
  showLengthMultiples: !0,
  showAreaRectangle: !0,
  showDivisionMultiples: !0,
  showRiseRunTriangle: !1,
  showDistanceMarkers: !1,
  showAngleArc: !1,
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
}, Ge = pt((r) => ({
  ...Pt,
  toggleSetting: (e) => {
    r((s) => ({
      [e]: !s[e]
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
    r(Pt);
  }
}));
function Kt({ viewport: r, canvasSize: e, worldToScreen: s, objects: n = [] }) {
  const o = Ge(), i = (l) => Math.round(l * o.fontScale), c = Ot(r, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }), a = {
    gridSize: c.gridSize / o.gridScale,
    labelStep: c.labelStep / o.gridScale
  }, { verticalLines: h, horizontalLines: x } = Zt(
    r,
    e,
    a,
    s,
    o.showIntegerGridLines
  );
  if (!c.shouldShowGrid)
    return null;
  const C = [];
  if (o.coordinateSystem === "polar" || o.coordinateSystem === "both") {
    const l = s({ x: 0, y: 0 }), m = Math.max(
      Math.abs(r.center.x) + e.width / (2 * r.zoom),
      Math.abs(r.center.y) + e.height / (2 * r.zoom)
    );
    for (let b = a.gridSize; b <= m; b += a.gridSize) {
      const E = b * r.zoom;
      E >= 10 && C.push(
        /* @__PURE__ */ t.jsx(
          "circle",
          {
            cx: l.x,
            cy: l.y,
            r: E,
            fill: "none",
            stroke: "#9CA3AF",
            strokeWidth: "0.5",
            opacity: 0.4
          },
          `polar-circle-${b}`
        )
      );
    }
    for (let b = 0; b < 360; b += 30) {
      const E = b * Math.PI / 180, F = l.x + m * r.zoom * Math.cos(E), z = l.y - m * r.zoom * Math.sin(E);
      C.push(
        /* @__PURE__ */ t.jsx(
          "line",
          {
            x1: l.x,
            y1: l.y,
            x2: F,
            y2: z,
            stroke: "#9CA3AF",
            strokeWidth: "0.5",
            opacity: 0.3
          },
          `polar-line-${b}`
        )
      );
    }
  }
  const k = [];
  n.forEach((l) => {
    if (l.type === "ray") {
      const { startPoint: m, endPoint: b } = l.properties;
      if (Math.abs(m.x) < 1e-3 && Math.abs(m.y) < 1e-3) {
        const E = b.x - m.x, F = b.y - m.y;
        if (Math.abs(E) > 1e-3) {
          const z = 1 / E;
          if (z > 0 && z <= 1) {
            const V = m.y + z * F, G = s({ x: 1, y: V });
            k.push({ y: V, screenY: G.y });
          }
        }
      }
    }
  });
  const R = h.map((l) => {
    const m = Math.abs(l.value - 1) < 1e-3, b = l.isAxis ? "#374151" : m ? "#60A5FA" : (
      // Light blue for x=1
      l.isInteger ? "#D1D5DB" : (
        // Darker gray for better visibility
        l.isMajor ? "#9CA3AF" : "#E5E7EB"
      )
    ), E = l.isAxis ? 2 : m ? 1.5 : l.isInteger || // Fixed width for integer lines
    l.isMajor ? 1 : 0.5, F = l.isAxis ? 1 : m ? 0.8 : l.isInteger ? 0.5 : (
      // Increased visibility for integer lines
      l.isMajor ? 0.6 * c.opacity : 0.3 * c.opacity
    );
    return /* @__PURE__ */ t.jsx(
      "line",
      {
        x1: l.x,
        y1: 0,
        x2: l.x,
        y2: e.height,
        stroke: b,
        strokeWidth: E,
        opacity: F
      },
      `v${l.value}`
    );
  }), T = x.map((l) => /* @__PURE__ */ t.jsx(
    "line",
    {
      x1: 0,
      y1: l.y,
      x2: e.width,
      y2: l.y,
      stroke: l.isAxis ? "#374151" : l.isInteger ? "#D1D5DB" : (
        // Darker gray for better visibility
        l.isMajor ? "#9CA3AF" : "#E5E7EB"
      ),
      strokeWidth: l.isAxis ? 2 : l.isInteger || // Fixed width for integer lines
      l.isMajor ? 1 : 0.5,
      opacity: l.isAxis ? 1 : l.isInteger ? 0.5 : (
        // Increased visibility for integer lines
        l.isMajor ? 0.6 * c.opacity : 0.3 * c.opacity
      )
    },
    `h${l.value}`
  )), N = o.showReferenceLineY_equals_X ? (() => {
    const l = {
      left: r.center.x - e.width / 2 / r.zoom,
      right: r.center.x + e.width / 2 / r.zoom,
      top: r.center.y + e.height / 2 / r.zoom,
      bottom: r.center.y - e.height / 2 / r.zoom
    }, m = Math.min(l.left, l.bottom), b = Math.max(l.right, l.top), E = s({ x: m, y: m }), F = s({ x: b, y: b });
    return { lineStart: E, lineEnd: F };
  })() : null, P = o.showLatticePoints ? (() => {
    const l = {
      left: r.center.x - e.width / 2 / r.zoom,
      right: r.center.x + e.width / 2 / r.zoom,
      top: r.center.y + e.height / 2 / r.zoom,
      bottom: r.center.y - e.height / 2 / r.zoom
    }, m = [], b = Math.max(-20, Math.floor(l.left)), E = Math.min(20, Math.ceil(l.right)), F = Math.max(-20, Math.floor(l.bottom)), z = Math.min(20, Math.ceil(l.top)), V = (E - b + 1) * (z - F + 1);
    if (V > 200) {
      const G = Math.ceil(Math.sqrt(V / 200));
      for (let U = b; U <= E; U += G)
        for (let le = F; le <= z; le += G) {
          const de = s({ x: U, y: le });
          de.x >= -20 && de.x <= e.width + 20 && de.y >= -20 && de.y <= e.height + 20 && m.push(de);
        }
    } else
      for (let G = b; G <= E; G++)
        for (let U = F; U <= z; U++) {
          const le = s({ x: G, y: U });
          le.x >= -20 && le.x <= e.width + 20 && le.y >= -20 && le.y <= e.height + 20 && m.push(le);
        }
    return m;
  })() : [];
  return /* @__PURE__ */ t.jsxs("g", { className: "grid", children: [
    (o.coordinateSystem === "polar" || o.coordinateSystem === "both") && /* @__PURE__ */ t.jsx("g", { className: "polar-grid", children: C }),
    (o.coordinateSystem === "cartesian" || o.coordinateSystem === "both") && /* @__PURE__ */ t.jsxs("g", { className: "cartesian-grid", children: [
      R,
      T
    ] }),
    P.map((l, m) => /* @__PURE__ */ t.jsx(
      "circle",
      {
        cx: l.x,
        cy: l.y,
        r: "1.5",
        fill: "#9CA3AF",
        opacity: "0.3"
      },
      `lattice-${m}`
    )),
    N && /* @__PURE__ */ t.jsx(
      "line",
      {
        x1: N.lineStart.x,
        y1: N.lineStart.y,
        x2: N.lineEnd.x,
        y2: N.lineEnd.y,
        stroke: "#A78BFA",
        strokeWidth: "1.5",
        opacity: "0.6",
        strokeDasharray: "5,5"
      }
    ),
    c.shouldShowLabels && /* @__PURE__ */ t.jsxs("g", { className: "labels", fontSize: "12", fill: "#374151", children: [
      h.filter((l) => {
        const m = Math.abs(l.value % a.labelStep) < a.gridSize / 10, b = Math.abs(l.value) >= a.labelStep / 2;
        return m && b;
      }).filter((l, m, b) => !b.slice(0, m).some(
        (E) => Math.abs(E.value - l.value) < 1e-3
      )).map((l) => /* @__PURE__ */ t.jsx(
        "text",
        {
          x: l.x,
          y: s({ x: 0, y: 0 }).y + 20,
          textAnchor: "middle",
          fontSize: i(11),
          fontWeight: "500",
          opacity: Math.max(0.7, c.opacity),
          children: q(l.value, c.gridSize)
        },
        `xlabel${l.value}`
      )),
      x.filter((l) => {
        const m = Math.abs(l.value % a.labelStep) < a.gridSize / 10, b = Math.abs(l.value) >= a.labelStep / 2;
        return m && b;
      }).filter((l, m, b) => !b.slice(0, m).some(
        (E) => Math.abs(E.value - l.value) < 1e-3
      )).map((l) => /* @__PURE__ */ t.jsx(
        "text",
        {
          x: s({ x: 0, y: 0 }).x - 15,
          y: l.y + 4,
          textAnchor: "middle",
          fontSize: i(11),
          fontWeight: "500",
          opacity: Math.max(0.7, c.opacity),
          children: q(l.value, c.gridSize)
        },
        `ylabel${l.value}`
      )),
      /* @__PURE__ */ t.jsxs("g", { children: [
        /* @__PURE__ */ t.jsx(
          "circle",
          {
            cx: s({ x: 0, y: 0 }).x,
            cy: s({ x: 0, y: 0 }).y,
            r: "3",
            fill: "#374151",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ t.jsx(
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
        )
      ] }),
      o.showDivisionAnswer && k.map((l, m) => {
        const b = s({ x: 1, y: 0 }).x;
        return /* @__PURE__ */ t.jsxs("g", { children: [
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: b,
              cy: l.screenY,
              r: "4",
              fill: "white",
              stroke: "#60A5FA",
              strokeWidth: "2",
              opacity: "0.9"
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: b + 15,
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
        ] }, `ray-intersection-${m}`);
      })
    ] })
  ] });
}
function Jt({ viewport: r, onZoomIn: e, onZoomOut: s, onZoomReset: n, onCenterOnly: o }) {
  const [i, c] = ne(0), a = We(null), h = () => {
    const x = Date.now();
    x - i < 500 ? (a.current && (clearTimeout(a.current), a.current = null), n()) : a.current = window.setTimeout(() => {
      o(), a.current = null;
    }, 300), c(x);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "absolute bottom-4 right-4 flex flex-col gap-2", children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: e,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors",
        title: "Zoom in (Ctrl+scroll up)",
        disabled: r.zoom >= 1e3,
        children: "+"
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: s,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors",
        title: "Zoom out (Ctrl+scroll down)",
        disabled: r.zoom <= 0.01,
        children: "−"
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: h,
        className: "w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-600 text-xs transition-colors",
        title: "Center view (single click) or Reset zoom (double click)",
        children: "⌂"
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "w-10 h-6 bg-white/90 border border-gray-300 rounded text-xs flex items-center justify-center text-gray-600", children: [
      r.zoom >= 1 ? Math.round(r.zoom) : r.zoom.toFixed(1),
      "×"
    ] })
  ] });
}
function Qt({ objects: r, viewport: e, touchTargetSize: s, worldToScreen: n, selectedObjects: o = [], canvasSize: i }) {
  const c = Ge(), a = (g) => Math.round(g * c.fontScale), h = st(e, c.gridScale, c.snapPrecision), x = h, [C, k] = ne(null), [R, T] = ne(null), [N, P] = ne(null), [l, m] = ne(null), [b, E] = ne(null), [F, z] = ne(null), [V, G] = ne(null), [U, le] = ne(null), de = Ve.useRef(null);
  Ve.useEffect(() => {
    const g = (j) => {
      const X = j.target;
      l && !(X != null && X.closest("circle")) && m(null);
    };
    if (l)
      return document.addEventListener("touchstart", g), () => document.removeEventListener("touchstart", g);
  }, [l]), Ve.useEffect(() => () => {
    de.current && clearTimeout(de.current);
  }, []);
  const Ae = (g) => {
    var X, ce;
    const j = o.includes(g.id);
    switch (g.type) {
      case "ray":
        const Pe = n(g.properties.startPoint), ve = n(g.properties.endPoint);
        return /* @__PURE__ */ t.jsxs("g", { children: [
          j && /* @__PURE__ */ t.jsx(
            "line",
            {
              x1: Pe.x,
              y1: Pe.y,
              x2: ve.x,
              y2: ve.y,
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ t.jsx(
            "line",
            {
              x1: Pe.x,
              y1: Pe.y,
              x2: ve.x,
              y2: ve.y,
              stroke: j ? "#1D4ED8" : "#2563eb",
              strokeWidth: j ? 3 : 2
            }
          ),
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: Pe.x,
              cy: Pe.y,
              r: s / 4,
              fill: j ? "#1D4ED8" : "#2563eb",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "move" },
              onMouseEnter: () => k(`${g.id}-start`),
              onMouseLeave: () => k(null)
            }
          ),
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: ve.x,
              cy: ve.y,
              r: s / 4,
              fill: j ? "#1D4ED8" : "#2563eb",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "move" },
              onMouseEnter: () => k(`${g.id}-end`),
              onMouseLeave: () => k(null)
            }
          ),
          !(Math.abs(g.properties.startPoint.x) < 1e-3 && Math.abs(g.properties.startPoint.y) < 1e-3) && C === `${g.id}-start` && /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: Pe.x - 5,
              y: Pe.y - 10,
              fontSize: a(10),
              fontWeight: "500",
              fill: j ? "#1D4ED8" : "#2563eb",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "(",
                q(g.properties.startPoint.x, x),
                ", ",
                q(g.properties.startPoint.y, x),
                ")"
              ]
            }
          ),
          C === `${g.id}-end` && /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: Math.abs(g.properties.startPoint.x) < 1e-3 && Math.abs(g.properties.startPoint.y) < 1e-3 ? ve.x - 60 : ve.x + 5,
              y: Math.abs(g.properties.startPoint.x) < 1e-3 && Math.abs(g.properties.startPoint.y) < 1e-3 ? ve.y + 4 : ve.y - 10,
              fontSize: a(10),
              fontWeight: "500",
              fill: j ? "#1D4ED8" : "#2563eb",
              textAnchor: Math.abs(g.properties.startPoint.x) < 1e-3 && Math.abs(g.properties.startPoint.y) < 1e-3 ? "end" : "middle",
              opacity: "0.8",
              children: [
                "(",
                q(g.properties.endPoint.x, x),
                ", ",
                q(g.properties.endPoint.y, x),
                ")"
              ]
            }
          ),
          (() => {
            const y = g.properties.endPoint.x - g.properties.startPoint.x;
            g.properties.endPoint.y - g.properties.startPoint.y;
            const d = Math.abs(g.properties.startPoint.x) < 1e-3 && Math.abs(g.properties.startPoint.y) < 1e-3;
            if (Math.abs(y) > 1e-3) {
              const u = ve.x, M = ve.y;
              if (d) {
                const f = g.properties.endPoint.x, v = g.properties.endPoint.y, A = q(v, x), w = q(f, x);
                return /* @__PURE__ */ t.jsxs("g", { children: [
                  /* @__PURE__ */ t.jsx(
                    "text",
                    {
                      x: u + 15,
                      y: M - 25,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: j ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: A
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    "line",
                    {
                      x1: u + 8,
                      y1: M - 19,
                      x2: u + 22,
                      y2: M - 19,
                      stroke: j ? "#1D4ED8" : "#2563eb",
                      strokeWidth: "1",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    "text",
                    {
                      x: u + 15,
                      y: M - 9,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: j ? "#1D4ED8" : "#2563eb",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: w
                    }
                  )
                ] });
              } else
                return null;
            }
            return null;
          })(),
          (() => {
            if (!(Math.abs(g.properties.startPoint.x) < 1e-3 && Math.abs(g.properties.startPoint.y) < 1e-3)) return null;
            const d = g.properties.endPoint.x, u = g.properties.endPoint.y;
            if (Math.abs(d) < 1e-3 && Math.abs(u) < 1e-3) return null;
            const M = d, f = u, v = {
              left: e.center.x - i.width / 2 / e.zoom,
              right: e.center.x + i.width / 2 / e.zoom,
              top: e.center.y + i.height / 2 / e.zoom,
              bottom: e.center.y - i.height / 2 / e.zoom
            }, A = Math.max(
              Math.abs(v.left),
              Math.abs(v.right),
              Math.abs(v.top),
              Math.abs(v.bottom)
            ) * 2, w = Math.sqrt(M * M + f * f);
            if (w === 0) return null;
            const O = M / w, L = f / w, te = {
              x: A * O,
              y: A * L
            }, we = n(te), be = [];
            if (Math.abs(d) > 1e-3 && Math.abs(u) > 1e-3) {
              const I = d, B = u;
              for (let _ = 2; _ <= 8; _++) {
                const K = I * _, ge = B * _, xe = Math.round(K / h) * h, ue = Math.round(ge / h) * h;
                if (Math.abs(K - xe) < h / 10 && Math.abs(ge - ue) < h / 10 && xe > 0 && ue > 0 && xe <= Math.min(20, Math.abs(A)) && ue <= Math.min(20, Math.abs(A))) {
                  const Te = n({ x: xe, y: ue });
                  Te.x >= -100 && Te.x <= i.width + 100 && Te.y >= -100 && Te.y <= i.height + 100 && be.push({
                    world: { x: xe, y: ue },
                    screen: Te,
                    fraction: {
                      num: q(ue, h),
                      den: q(xe, h)
                    }
                  });
                }
              }
            }
            const ze = Math.sqrt(d * d + u * u), fe = [];
            if (ze > 0 && c.showLengthMultiples)
              for (let I = 2; I <= 5; I++) {
                const B = d * I, _ = u * I, K = n({ x: B, y: _ });
                K.x >= -50 && K.x <= i.width + 50 && K.y >= -50 && K.y <= i.height + 50 && fe.push({
                  screen: K,
                  multiple: I
                });
              }
            return /* @__PURE__ */ t.jsxs("g", { children: [
              c.showEquivalentFractions && /* @__PURE__ */ t.jsx(
                "line",
                {
                  x1: ve.x,
                  y1: ve.y,
                  x2: we.x,
                  y2: we.y,
                  stroke: j ? "#1D4ED8" : "#2563eb",
                  strokeWidth: "1",
                  opacity: "0.3",
                  strokeDasharray: "3,3"
                }
              ),
              fe.map((I, B) => /* @__PURE__ */ t.jsxs("g", { children: [
                /* @__PURE__ */ t.jsx(
                  "circle",
                  {
                    cx: I.screen.x,
                    cy: I.screen.y,
                    r: "2",
                    fill: j ? "#1D4ED8" : "#2563eb",
                    opacity: "0.4"
                  }
                ),
                /* @__PURE__ */ t.jsxs(
                  "text",
                  {
                    x: I.screen.x + 8,
                    y: I.screen.y - 8,
                    fontSize: a(7),
                    fontWeight: "400",
                    fill: j ? "#1D4ED8" : "#2563eb",
                    textAnchor: "start",
                    opacity: "0.5",
                    children: [
                      "×",
                      I.multiple
                    ]
                  }
                )
              ] }, `length-${B}`)),
              c.showAreaRectangle && (() => {
                if (d > 0 && u > 0) {
                  const I = n({ x: 0, y: 0 }), B = n({ x: d, y: u }), _ = Math.abs(B.x - I.x), K = Math.abs(B.y - I.y), ge = Math.min(I.x, B.x), xe = Math.min(I.y, B.y), ue = d * u;
                  return /* @__PURE__ */ t.jsxs("g", { children: [
                    /* @__PURE__ */ t.jsx(
                      "rect",
                      {
                        x: ge,
                        y: xe,
                        width: _,
                        height: K,
                        fill: j ? "#1D4ED8" : "#2563eb",
                        opacity: "0.08",
                        stroke: j ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "0.5",
                        strokeOpacity: "0.15"
                      }
                    ),
                    /* @__PURE__ */ t.jsxs(
                      "text",
                      {
                        x: ge + _ / 2,
                        y: xe + 15,
                        fontSize: a(10),
                        fontWeight: "400",
                        fill: j ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.6",
                        children: [
                          q(u, x),
                          " × ",
                          q(d, x),
                          " = ",
                          q(ue, x)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showDivisionMultiples && (() => {
                if (!(Math.abs(g.properties.startPoint.x) < 1e-3 && Math.abs(g.properties.startPoint.y) < 1e-3) || d <= 0) return null;
                const B = u / d, _ = 0.15, K = 25;
                if (B < _) return null;
                const ge = n({ x: 0, y: 0 }), xe = n({ x: 1, y: 0 }), ue = [], Te = Math.min(
                  Math.floor(u / B),
                  K
                );
                for (let Fe = 1; Fe <= Te; Fe++) {
                  const De = Fe * B, Le = n({ x: 0, y: De }).y, nt = Math.abs(De - B) < 0.01;
                  if (!c.showAreaRectangle) {
                    const Me = Math.abs(Le - ge.y) / Fe, Se = Math.abs(xe.x - ge.x);
                    ue.push(
                      /* @__PURE__ */ t.jsx(
                        "rect",
                        {
                          x: ge.x,
                          y: Le,
                          width: Se,
                          height: Me,
                          fill: j ? "#1D4ED8" : "#2563eb",
                          opacity: "0.08",
                          stroke: j ? "#1D4ED8" : "#2563eb",
                          strokeWidth: "0.5",
                          strokeOpacity: "0.15"
                        },
                        `division-box-${Fe}`
                      )
                    );
                  }
                  ue.push(
                    /* @__PURE__ */ t.jsxs("g", { children: [
                      /* @__PURE__ */ t.jsx(
                        "line",
                        {
                          x1: ge.x,
                          y1: Le,
                          x2: xe.x,
                          y2: Le,
                          stroke: j ? "#1D4ED8" : "#2563eb",
                          strokeWidth: "1",
                          opacity: "0.3",
                          strokeDasharray: nt ? "4,2" : "2,2"
                        }
                      ),
                      !nt && /* @__PURE__ */ t.jsx(
                        "text",
                        {
                          x: xe.x + 8,
                          y: Le - 5,
                          fontSize: a(8),
                          fontWeight: "400",
                          fill: j ? "#1D4ED8" : "#2563eb",
                          textAnchor: "start",
                          opacity: "0.5",
                          children: Ce(De)
                        }
                      )
                    ] }, `division-marker-${Fe}`)
                  );
                }
                return /* @__PURE__ */ t.jsx("g", { children: ue });
              })(),
              c.showRiseRunTriangle && (() => {
                if (d > 0 && u > 0) {
                  const I = n({ x: 0, y: 0 }), B = n({ x: d, y: 0 }), _ = n({ x: d, y: u });
                  return /* @__PURE__ */ t.jsxs("g", { children: [
                    /* @__PURE__ */ t.jsx(
                      "path",
                      {
                        d: `M ${I.x},${I.y} L ${B.x},${B.y} L ${_.x},${_.y} Z`,
                        fill: "none",
                        stroke: j ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "1",
                        opacity: "0.4",
                        strokeDasharray: "2,2"
                      }
                    ),
                    /* @__PURE__ */ t.jsxs(
                      "text",
                      {
                        x: B.x + 12,
                        y: (B.y + _.y) / 2,
                        fontSize: a(9),
                        fontWeight: "500",
                        fill: j ? "#1D4ED8" : "#2563eb",
                        textAnchor: "start",
                        opacity: "0.7",
                        children: [
                          "rise: ",
                          q(u, x)
                        ]
                      }
                    ),
                    /* @__PURE__ */ t.jsxs(
                      "text",
                      {
                        x: (I.x + B.x) / 2,
                        y: B.y + 8,
                        fontSize: a(9),
                        fontWeight: "500",
                        fill: j ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.7",
                        children: [
                          "run: ",
                          q(d, x)
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showDistanceMarkers && (() => {
                const I = [], B = Math.sqrt(d * d + u * u);
                if (B > 0) {
                  const _ = n({ x: 0, y: 0 });
                  let K = Math.atan2(u, d);
                  K < 0 && (K = K + 2 * Math.PI);
                  const ge = [];
                  for (let ue = 1; ue <= Math.floor(B); ue++)
                    ge.push({ radius: ue, isUnit: !0 });
                  ge.push({ radius: B, isUnit: !1 }), ge.forEach(({ radius: ue, isUnit: Te }, Fe) => {
                    const De = ue * e.zoom;
                    if (De >= 15 && De <= 800 && Math.abs(K) > 0.05) {
                      const Le = K > Math.PI ? 1 : 0, Me = `M ${_.x + De},${_.y} A ${De},${De} 0 ${Le},0 ${_.x + De * Math.cos(K)},${_.y - De * Math.sin(K)}`;
                      I.push(
                        /* @__PURE__ */ t.jsx(
                          "path",
                          {
                            d: Me,
                            fill: "none",
                            stroke: j ? "#1D4ED8" : "#2563eb",
                            strokeWidth: Te ? "1" : "1.5",
                            opacity: Te ? "0.3" : "0.6",
                            strokeDasharray: Te ? "2,2" : "none"
                          },
                          `radial-${g.id}-${ue.toFixed(3)}-${K.toFixed(3)}-${Fe}`
                        )
                      );
                    }
                  });
                  const xe = n({ x: B, y: 0 });
                  I.push(
                    /* @__PURE__ */ t.jsxs("g", { children: [
                      /* @__PURE__ */ t.jsx(
                        "path",
                        {
                          d: `M ${xe.x},${_.y} L ${xe.x - 4},${_.y + 8} L ${xe.x + 4},${_.y + 8} Z`,
                          fill: j ? "#1D4ED8" : "#2563eb",
                          opacity: "0.7"
                        }
                      ),
                      /* @__PURE__ */ t.jsxs(
                        "text",
                        {
                          x: xe.x + 15,
                          y: _.y - 8,
                          fontSize: a(10),
                          fontWeight: "600",
                          fill: j ? "#1D4ED8" : "#2563eb",
                          textAnchor: "start",
                          opacity: "0.8",
                          children: [
                            "d = ",
                            B.toFixed(2)
                          ]
                        }
                      )
                    ] }, `distance-${g.id}`)
                  );
                }
                return /* @__PURE__ */ t.jsx("g", { children: I });
              })(),
              c.showAngleArc && (() => {
                let I = Math.atan2(u, d);
                if (I < 0 && (I = I + 2 * Math.PI), Math.abs(d) > 0.05 || Math.abs(u) > 0.05) {
                  const B = n({ x: 0, y: 0 }), _ = 50, K = (I * 180 / Math.PI).toFixed(1), ge = I, xe = I > Math.PI ? 1 : 0, ue = `M ${B.x + _},${B.y} A ${_},${_} 0 ${xe},0 ${B.x + _ * Math.cos(ge)},${B.y - _ * Math.sin(ge)}`, Te = I / 2, Fe = _ * 0.7, De = B.x + Fe * Math.cos(Te), Le = B.y - Fe * Math.sin(Te);
                  return /* @__PURE__ */ t.jsxs("g", { children: [
                    /* @__PURE__ */ t.jsx(
                      "path",
                      {
                        d: ue,
                        fill: "none",
                        stroke: j ? "#1D4ED8" : "#2563eb",
                        strokeWidth: "2",
                        opacity: "0.6"
                      }
                    ),
                    /* @__PURE__ */ t.jsxs(
                      "text",
                      {
                        x: De,
                        y: Le,
                        fontSize: a(11),
                        fontWeight: "600",
                        fill: j ? "#1D4ED8" : "#2563eb",
                        textAnchor: "middle",
                        opacity: "0.8",
                        children: [
                          "θ = ",
                          K,
                          "°"
                        ]
                      }
                    )
                  ] });
                }
                return null;
              })(),
              c.showEquivalentFractions && be.map((I, B) => {
                const K = Math.abs(I.world.x - 1) < 0.1 && c.showDivisionAnswer, ge = Math.abs(I.world.x - d) < 0.1 && Math.abs(I.world.y - u) < 0.1;
                return K || ge ? null : /* @__PURE__ */ t.jsxs("g", { children: [
                  /* @__PURE__ */ t.jsx(
                    "circle",
                    {
                      cx: I.screen.x,
                      cy: I.screen.y,
                      r: "4",
                      fill: "white",
                      stroke: "#22C55E",
                      strokeWidth: "2",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ t.jsxs(
                    "text",
                    {
                      x: I.screen.x + 15,
                      y: I.screen.y + 4,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: "#22C55E",
                      textAnchor: "start",
                      opacity: "0.8",
                      children: [
                        I.fraction.num,
                        "/",
                        I.fraction.den
                      ]
                    }
                  )
                ] }, `equiv-${B}`);
              })
            ] });
          })()
        ] }, g.id);
      case "rectangle":
        const D = n({
          x: g.properties.x,
          y: g.properties.y + g.properties.height
        }), me = g.properties.width * e.zoom, p = g.properties.height * e.zoom, W = { x: g.properties.x, y: g.properties.y }, re = { x: g.properties.x + g.properties.width, y: g.properties.y }, je = { x: g.properties.x, y: g.properties.y + g.properties.height }, Ie = { x: g.properties.x + g.properties.width, y: g.properties.y + g.properties.height };
        return /* @__PURE__ */ t.jsxs("g", { children: [
          j && /* @__PURE__ */ t.jsx(
            "rect",
            {
              x: D.x - 3,
              y: D.y - 3,
              width: me + 6,
              height: p + 6,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 4,
              opacity: 0.5,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ t.jsx(
            "rect",
            {
              x: D.x,
              y: D.y,
              width: me,
              height: p,
              fill: j ? "rgba(34, 197, 94, 0.3)" : "rgba(34, 197, 94, 0.2)",
              stroke: j ? "#16A34A" : "#22c55e",
              strokeWidth: j ? 3 : 2,
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: D.x,
              cy: D.y,
              r: s / 6,
              fill: j ? "#16A34A" : "#22c55e",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "nw-resize" }
            }
          ),
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: D.x + me,
              cy: D.y,
              r: s / 6,
              fill: j ? "#16A34A" : "#22c55e",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "ne-resize" }
            }
          ),
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: D.x,
              cy: D.y + p,
              r: s / 6,
              fill: j ? "#16A34A" : "#22c55e",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "sw-resize" }
            }
          ),
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: D.x + me,
              cy: D.y + p,
              r: s / 6,
              fill: j ? "#16A34A" : "#22c55e",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "se-resize" }
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: D.x - 10,
              y: D.y - 5,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                q(je.x, x),
                ", ",
                q(je.y, x),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: D.x + me + 10,
              y: D.y - 5,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                q(Ie.x, x),
                ", ",
                q(Ie.y, x),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: D.x - 10,
              y: D.y + p + 15,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "end",
              opacity: "0.8",
              children: [
                "(",
                q(W.x, x),
                ", ",
                q(W.y, x),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: D.x + me + 10,
              y: D.y + p + 15,
              fontSize: a(9),
              fontWeight: "500",
              fill: "#22c55e",
              textAnchor: "start",
              opacity: "0.8",
              children: [
                "(",
                q(re.x, x),
                ", ",
                q(re.y, x),
                ")"
              ]
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: D.x + me / 2,
              y: D.y + p / 2,
              fontSize: a(12),
              fontWeight: "600",
              fill: "#22c55e",
              textAnchor: "middle",
              opacity: "0.9",
              children: [
                q(g.properties.height, x),
                " × ",
                q(g.properties.width, x),
                " = ",
                q(g.properties.area, x)
              ]
            }
          ),
          (() => {
            const y = g.properties.width, d = g.properties.height, u = g.properties.area;
            if (y <= 0 || d <= 0 || y !== Math.floor(y) || d !== Math.floor(d))
              return null;
            const M = [];
            if (c.showFactorPairs && u > 1 && u <= 50) {
              const f = [];
              for (let v = 1; v <= Math.sqrt(u); v++)
                if (u % v === 0) {
                  const A = u / v;
                  (v !== y || A !== d) && f.push({ w: v, h: A });
                }
              f.forEach((v, A) => {
                const w = (A + 1) * (me + 20), O = {
                  x: D.x + w,
                  y: D.y,
                  width: v.w * e.zoom,
                  height: v.h * e.zoom
                };
                M.push(
                  /* @__PURE__ */ t.jsx(
                    "rect",
                    {
                      x: O.x,
                      y: O.y,
                      width: O.width,
                      height: O.height,
                      fill: "rgba(168, 85, 247, 0.15)",
                      stroke: "#A855F7",
                      strokeWidth: "1",
                      strokeDasharray: "3,3",
                      opacity: "0.7"
                    },
                    `factor-${A}`
                  )
                );
              });
            }
            if (c.showCommutativeProperty && y !== d) {
              const f = {
                x: D.x - p - 30,
                y: D.y,
                width: d * e.zoom,
                height: y * e.zoom
              };
              M.push(
                /* @__PURE__ */ t.jsxs("g", { children: [
                  /* @__PURE__ */ t.jsx(
                    "rect",
                    {
                      x: f.x,
                      y: f.y,
                      width: f.width,
                      height: f.height,
                      fill: "rgba(59, 130, 246, 0.15)",
                      stroke: "#3B82F6",
                      strokeWidth: "1",
                      strokeDasharray: "4,2",
                      opacity: "0.7"
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    "path",
                    {
                      d: `M ${f.x + f.width + 5},${f.y + f.height / 2} L ${D.x - 5},${D.y + p / 2}`,
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
            if (c.showPrimeComposite && u > 1 && u <= 100) {
              const f = u > 1 && ![...Array(Math.floor(Math.sqrt(u)) + 1).keys()].slice(2).some((v) => u % v === 0);
              M.push(
                /* @__PURE__ */ t.jsxs("g", { children: [
                  /* @__PURE__ */ t.jsx(
                    "circle",
                    {
                      cx: D.x + me + 15,
                      cy: D.y - 15,
                      r: "8",
                      fill: f ? "#10B981" : "#F59E0B",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    "text",
                    {
                      x: D.x + me + 15,
                      y: D.y - 11,
                      fontSize: a(8),
                      fontWeight: "600",
                      fill: "white",
                      textAnchor: "middle",
                      children: f ? "P" : "C"
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    "text",
                    {
                      x: D.x + me + 30,
                      y: D.y - 10,
                      fontSize: a(8),
                      fontWeight: "500",
                      fill: f ? "#10B981" : "#F59E0B",
                      textAnchor: "start",
                      opacity: "0.8",
                      children: f ? "Prime" : "Composite"
                    }
                  )
                ] }, "prime-composite")
              );
            }
            if (c.showGCF && y > 1 && d > 1) {
              const f = (A, w) => w === 0 ? A : f(w, A % w), v = f(y, d);
              if (v > 1) {
                const A = v * e.zoom, w = y / v, O = d / v, L = [];
                for (let te = 0; te < w; te++)
                  for (let we = 0; we < O; we++)
                    L.push(
                      /* @__PURE__ */ t.jsx(
                        "rect",
                        {
                          x: D.x + te * A,
                          y: D.y + we * A,
                          width: A,
                          height: A,
                          fill: "none",
                          stroke: "#10B981",
                          strokeWidth: "1.5",
                          opacity: "0.6"
                        },
                        `gcf-${te}-${we}`
                      )
                    );
                M.push(
                  /* @__PURE__ */ t.jsxs("g", { children: [
                    L,
                    /* @__PURE__ */ t.jsxs(
                      "text",
                      {
                        x: D.x + me / 2,
                        y: D.y - 25,
                        fontSize: a(10),
                        fontWeight: "600",
                        fill: "#10B981",
                        textAnchor: "middle",
                        opacity: "0.9",
                        children: [
                          "GCF(",
                          y,
                          ", ",
                          d,
                          ") = ",
                          v
                        ]
                      }
                    ),
                    /* @__PURE__ */ t.jsxs(
                      "text",
                      {
                        x: D.x + me / 2,
                        y: D.y - 10,
                        fontSize: a(8),
                        fontWeight: "500",
                        fill: "#10B981",
                        textAnchor: "middle",
                        opacity: "0.7",
                        children: [
                          w,
                          " × ",
                          O,
                          " = ",
                          w * O,
                          " squares"
                        ]
                      }
                    )
                  ] }, "gcf")
                );
              }
            }
            if (c.showLCM && y > 1 && d > 1) {
              const f = (w, O) => O === 0 ? w : f(O, w % O), A = ((w, O) => w * O / f(w, O))(y, d);
              if (A > Math.max(y, d) && A <= 100) {
                const w = A * e.zoom, O = A * e.zoom, L = D.x, te = D.y + p - O, we = A / y, be = A / d, ze = [];
                for (let fe = 0; fe < be; fe++)
                  for (let I = 0; I < we; I++) {
                    const B = L + I * (y * e.zoom), _ = te + fe * (d * e.zoom);
                    ze.push(
                      /* @__PURE__ */ t.jsx(
                        "rect",
                        {
                          x: B,
                          y: _,
                          width: y * e.zoom,
                          height: d * e.zoom,
                          fill: "rgba(245, 158, 11, 0.1)",
                          stroke: "#F59E0B",
                          strokeWidth: "1",
                          strokeDasharray: "2,2",
                          opacity: "0.6",
                          pointerEvents: "none"
                        },
                        `shadow-${fe}-${I}`
                      )
                    );
                  }
                M.push(
                  /* @__PURE__ */ t.jsxs("g", { children: [
                    /* @__PURE__ */ t.jsx(
                      "rect",
                      {
                        x: L,
                        y: te,
                        width: w,
                        height: O,
                        fill: "none",
                        stroke: "#F59E0B",
                        strokeWidth: "2",
                        strokeDasharray: "5,5",
                        opacity: "0.8",
                        pointerEvents: "none"
                      }
                    ),
                    ze,
                    /* @__PURE__ */ t.jsxs(
                      "text",
                      {
                        x: L + w / 2,
                        y: te - 15,
                        fontSize: a(10),
                        fontWeight: "600",
                        fill: "#F59E0B",
                        textAnchor: "middle",
                        opacity: "0.9",
                        pointerEvents: "none",
                        children: [
                          "LCM(",
                          y,
                          ", ",
                          d,
                          ") = ",
                          A
                        ]
                      }
                    ),
                    /* @__PURE__ */ t.jsxs(
                      "text",
                      {
                        x: L + w / 2,
                        y: te - 2,
                        fontSize: a(8),
                        fontWeight: "500",
                        fill: "#F59E0B",
                        textAnchor: "middle",
                        opacity: "0.7",
                        pointerEvents: "none",
                        children: [
                          we,
                          " × ",
                          be,
                          " = ",
                          we * be,
                          " rectangles"
                        ]
                      }
                    )
                  ] }, "lcm")
                );
              }
            }
            if (c.showDistributiveProperty && y > 2 && d > 1) {
              const f = Math.floor(y / 2), v = f * e.zoom, A = (y - f) * e.zoom;
              M.push(
                /* @__PURE__ */ t.jsxs("g", { children: [
                  /* @__PURE__ */ t.jsx(
                    "line",
                    {
                      x1: D.x + v,
                      y1: D.y,
                      x2: D.x + v,
                      y2: D.y + p,
                      stroke: "#EF4444",
                      strokeWidth: "2",
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ t.jsxs(
                    "text",
                    {
                      x: D.x + v / 2,
                      y: D.y + p + 20,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: [
                        d,
                        " × ",
                        f,
                        " = ",
                        d * f
                      ]
                    }
                  ),
                  /* @__PURE__ */ t.jsxs(
                    "text",
                    {
                      x: D.x + v + A / 2,
                      y: D.y + p + 20,
                      fontSize: a(9),
                      fontWeight: "500",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.8",
                      children: [
                        d,
                        " × ",
                        y - f,
                        " = ",
                        d * (y - f)
                      ]
                    }
                  ),
                  /* @__PURE__ */ t.jsxs(
                    "text",
                    {
                      x: D.x + me / 2,
                      y: D.y + p + 40,
                      fontSize: a(10),
                      fontWeight: "600",
                      fill: "#EF4444",
                      textAnchor: "middle",
                      opacity: "0.9",
                      children: [
                        d,
                        " × (",
                        f,
                        " + ",
                        y - f,
                        ") = ",
                        d * f,
                        " + ",
                        d * (y - f),
                        " = ",
                        u
                      ]
                    }
                  )
                ] }, "distributive")
              );
            }
            return M;
          })()
        ] }, g.id);
      case "circle":
        const Q = n(g.properties.center), Ne = g.properties.radius * e.zoom, _e = c.showTangentLines && (N === g.id && R || l && l.circleId === g.id);
        let J = null;
        if (_e) {
          let y = null;
          if (l && l.circleId === g.id ? y = l.point : R && N === g.id && (y = {
            x: (R.x - i.width / 2) / e.zoom + e.center.x,
            y: -(R.y - i.height / 2) / e.zoom + e.center.y
          }), y) {
            const d = y.x - g.properties.center.x, u = y.y - g.properties.center.y, M = Math.atan2(u, d), f = {
              x: g.properties.center.x + g.properties.radius * Math.cos(M),
              y: g.properties.center.y + g.properties.radius * Math.sin(M)
            }, v = u / d, A = isFinite(v) && v !== 0 ? -1 / v : null, w = Math.max(i.width, i.height) / e.zoom, O = {
              x: f.x - w * Math.cos(M + Math.PI / 2),
              y: f.y - w * Math.sin(M + Math.PI / 2)
            }, L = {
              x: f.x + w * Math.cos(M + Math.PI / 2),
              y: f.y + w * Math.sin(M + Math.PI / 2)
            };
            J = {
              point: f,
              start: O,
              end: L,
              slope: A,
              angle: M
            };
          }
        }
        return /* @__PURE__ */ t.jsxs("g", { children: [
          j && /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: Q.x,
              cy: Q.y,
              r: Ne + 3,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 4,
              opacity: 0.5
            }
          ),
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: Q.x,
              cy: Q.y,
              r: Ne * 1.8,
              fill: "transparent",
              style: { cursor: "pointer" },
              onMouseEnter: () => {
                de.current && (clearTimeout(de.current), de.current = null), P(g.id);
              },
              onMouseLeave: () => {
                de.current = setTimeout(() => {
                  P(null), T(null);
                }, 100);
              },
              onMouseMove: (y) => {
                var d;
                if (c.showTangentLines && N === g.id) {
                  const u = (d = y.currentTarget.ownerSVGElement) == null ? void 0 : d.getBoundingClientRect();
                  u && T({
                    x: y.clientX - u.left,
                    y: y.clientY - u.top
                  });
                }
              },
              onTouchStart: (y) => {
                var d;
                if (c.showTangentLines) {
                  y.preventDefault();
                  const u = (d = y.currentTarget.ownerSVGElement) == null ? void 0 : d.getBoundingClientRect();
                  if (u && y.touches[0]) {
                    const M = {
                      x: y.touches[0].clientX - u.left,
                      y: y.touches[0].clientY - u.top
                    }, f = {
                      x: (M.x - i.width / 2) / e.zoom + e.center.x,
                      y: -(M.y - i.height / 2) / e.zoom + e.center.y
                    }, v = f.x - g.properties.center.x, w = (f.y - g.properties.center.y) / v, O = isFinite(w) ? -1 / w : null;
                    m({
                      circleId: g.id,
                      point: f,
                      slope: O
                    });
                  }
                }
              },
              onTouchEnd: () => {
                setTimeout(() => m(null), 100);
              }
            }
          ),
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: Q.x,
              cy: Q.y,
              r: Ne,
              fill: j ? "rgba(168, 85, 247, 0.15)" : "rgba(168, 85, 247, 0.1)",
              stroke: j ? "#7C3AED" : "#A855F7",
              strokeWidth: j ? 3 : 2,
              style: { cursor: "pointer", pointerEvents: "none" }
            }
          ),
          J && /* @__PURE__ */ t.jsxs("g", { children: [
            /* @__PURE__ */ t.jsx(
              "line",
              {
                x1: n(J.start).x,
                y1: n(J.start).y,
                x2: n(J.end).x,
                y2: n(J.end).y,
                stroke: "#EF4444",
                strokeWidth: "2",
                opacity: "0.7",
                strokeDasharray: "4,2"
              }
            ),
            /* @__PURE__ */ t.jsx(
              "circle",
              {
                cx: n(J.point).x,
                cy: n(J.point).y,
                r: "3",
                fill: "#EF4444",
                opacity: "0.8"
              }
            ),
            /* @__PURE__ */ t.jsx(
              "line",
              {
                x1: Q.x,
                y1: Q.y,
                x2: n(J.point).x,
                y2: n(J.point).y,
                stroke: "#EF4444",
                strokeWidth: "1",
                opacity: "0.5",
                strokeDasharray: "2,2"
              }
            ),
            J.slope !== null && isFinite(J.slope) && /* @__PURE__ */ t.jsxs(
              "text",
              {
                x: n(J.point).x + 15,
                y: n(J.point).y - 10,
                fontSize: a(10),
                fontWeight: "500",
                fill: "#EF4444",
                textAnchor: "start",
                opacity: "0.9",
                children: [
                  "slope = ",
                  J.slope.toFixed(2)
                ]
              }
            ),
            (J.slope === null || !isFinite(J.slope)) && /* @__PURE__ */ t.jsx(
              "text",
              {
                x: n(J.point).x + 15,
                y: n(J.point).y - 10,
                fontSize: a(10),
                fontWeight: "500",
                fill: "#EF4444",
                textAnchor: "start",
                opacity: "0.9",
                children: "slope = ∞"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: Q.x,
              cy: Q.y,
              r: s / 6,
              fill: j ? "#7C3AED" : "#A855F7",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "move" }
            }
          ),
          /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: Q.x + Ne,
              cy: Q.y,
              r: s / 6,
              fill: j ? "#7C3AED" : "#A855F7",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "ew-resize" }
            }
          ),
          /* @__PURE__ */ t.jsx(
            "line",
            {
              x1: Q.x,
              y1: Q.y,
              x2: Q.x + Ne,
              y2: Q.y,
              stroke: j ? "#7C3AED" : "#A855F7",
              strokeWidth: "1",
              opacity: "0.6",
              strokeDasharray: "2,2"
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: Q.x,
              y: Q.y - Ne - 25,
              fontSize: a(10),
              fontWeight: "500",
              fill: j ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "r = ",
                Ce(g.properties.radius)
              ]
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: Q.x,
              y: Q.y - Ne - 15,
              fontSize: a(9),
              fontWeight: "400",
              fill: j ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.7",
              children: [
                "A = ",
                Ce(g.properties.area)
              ]
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: Q.x,
              y: Q.y - Ne - 5,
              fontSize: a(9),
              fontWeight: "400",
              fill: j ? "#7C3AED" : "#A855F7",
              textAnchor: "middle",
              opacity: "0.7",
              children: [
                "C = ",
                Ce(g.properties.circumference)
              ]
            }
          )
        ] }, g.id);
      case "triangle":
        const Z = g.properties.vertices.map(n), [he, pe, ye] = Z, qe = g.properties.vertices, oe = (() => {
          const [y, d, u] = qe, M = Math.sqrt((d.x - u.x) ** 2 + (d.y - u.y) ** 2), f = Math.sqrt((y.x - u.x) ** 2 + (y.y - u.y) ** 2), v = Math.sqrt((y.x - d.x) ** 2 + (y.y - d.y) ** 2), A = Math.acos((f ** 2 + v ** 2 - M ** 2) / (2 * f * v)) * 180 / Math.PI, w = Math.acos((M ** 2 + v ** 2 - f ** 2) / (2 * M * v)) * 180 / Math.PI, O = 180 - A - w, L = 1;
          let te = "scalene", we = !1, be = !1, ze = "";
          Math.abs(A - 90) < L || Math.abs(w - 90) < L || Math.abs(O - 90) < L ? (we = !0, te = "right") : A > 90 || w > 90 || O > 90 ? te = "obtuse" : te = "acute", Math.abs(M - f) < 0.1 && Math.abs(f - v) < 0.1 ? te = "equilateral" : (Math.abs(M - f) < 0.1 || Math.abs(f - v) < 0.1 || Math.abs(M - v) < 0.1) && (te = "isosceles");
          const fe = [A, w, O].sort((I, B) => I - B);
          return Math.abs(fe[0] - 30) < L && Math.abs(fe[1] - 60) < L && Math.abs(fe[2] - 90) < L ? (be = !0, ze = "30-60-90") : Math.abs(fe[0] - 45) < L && Math.abs(fe[1] - 45) < L && Math.abs(fe[2] - 90) < L && (be = !0, ze = "45-45-90"), {
            sideA: M,
            sideB: f,
            sideC: v,
            angleA: A,
            angleB: w,
            angleC: O,
            classification: te,
            isRight: we,
            isSpecial: be,
            specialType: ze,
            area: g.properties.area
          };
        })(), se = (() => {
          if (!c.showSOHCAHTOA || !oe.isRight) return null;
          const y = [
            { index: 0, value: oe.angleA },
            { index: 1, value: oe.angleB },
            { index: 2, value: oe.angleC }
          ], d = y.find((w) => Math.abs(w.value - 90) < 1), u = y.filter((w) => w.value < 89);
          if (!d || u.length < 2) return null;
          const M = u.reduce((w, O) => O.value > w.value ? O : w), f = d.index, v = M.index, A = [0, 1, 2].find((w) => w !== f && w !== v);
          return {
            referenceAngle: M,
            rightVertex: f,
            refVertex: v,
            thirdVertex: A,
            // Hypotenuse is ALWAYS opposite the right angle
            hypotenuseStart: v,
            hypotenuseEnd: A,
            // Opposite side is opposite the reference angle
            oppositeStart: f,
            oppositeEnd: A,
            // Adjacent side touches reference angle but isn't hypotenuse
            adjacentStart: v,
            adjacentEnd: f
          };
        })();
        return /* @__PURE__ */ t.jsxs("g", { children: [
          c.showSpecialTriangles && oe.isSpecial && /* @__PURE__ */ t.jsx(
            "path",
            {
              d: `M ${he.x},${he.y} L ${pe.x},${pe.y} L ${ye.x},${ye.y} Z`,
              fill: "rgba(255, 215, 0, 0.15)",
              stroke: "none"
            }
          ),
          j && /* @__PURE__ */ t.jsx(
            "path",
            {
              d: `M ${he.x},${he.y} L ${pe.x},${pe.y} L ${ye.x},${ye.y} Z`,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: `M ${he.x},${he.y} L ${pe.x},${pe.y} L ${ye.x},${ye.y} Z`,
              fill: j ? "rgba(245, 101, 101, 0.15)" : "rgba(245, 101, 101, 0.1)",
              stroke: j ? "#DC2626" : "#F56565",
              strokeWidth: j ? 3 : 2,
              style: { cursor: "pointer" },
              onMouseEnter: () => {
                c.showTrigValues && E(g.id);
              },
              onMouseLeave: () => {
                E(null), z(null);
              },
              onMouseMove: (y) => {
                var d;
                if (c.showTrigValues && b === g.id) {
                  const u = (d = y.currentTarget.ownerSVGElement) == null ? void 0 : d.getBoundingClientRect();
                  u && z({
                    x: y.clientX - u.left,
                    y: y.clientY - u.top
                  });
                }
              }
            }
          ),
          se && /* @__PURE__ */ t.jsxs("g", { children: [
            /* @__PURE__ */ t.jsx(
              "circle",
              {
                cx: Z[se.referenceAngle.index].x,
                cy: Z[se.referenceAngle.index].y,
                r: "8",
                fill: "rgba(255, 215, 0, 0.3)",
                stroke: "#FFA500",
                strokeWidth: "2"
              }
            ),
            /* @__PURE__ */ t.jsxs("g", { children: [
              /* @__PURE__ */ t.jsx(
                "line",
                {
                  x1: Z[se.hypotenuseStart].x,
                  y1: Z[se.hypotenuseStart].y,
                  x2: Z[se.hypotenuseEnd].x,
                  y2: Z[se.hypotenuseEnd].y,
                  stroke: "#00AA00",
                  strokeWidth: "5",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ t.jsx(
                "text",
                {
                  x: (Z[se.hypotenuseStart].x + Z[se.hypotenuseEnd].x) / 2,
                  y: (Z[se.hypotenuseStart].y + Z[se.hypotenuseEnd].y) / 2 - 15,
                  fontSize: a(11),
                  fontWeight: "700",
                  fill: "#00AA00",
                  textAnchor: "middle",
                  children: "HYPOTENUSE"
                }
              ),
              /* @__PURE__ */ t.jsx(
                "line",
                {
                  x1: Z[se.oppositeStart].x,
                  y1: Z[se.oppositeStart].y,
                  x2: Z[se.oppositeEnd].x,
                  y2: Z[se.oppositeEnd].y,
                  stroke: "#FF0000",
                  strokeWidth: "4",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ t.jsx(
                "text",
                {
                  x: (Z[se.oppositeStart].x + Z[se.oppositeEnd].x) / 2 + 15,
                  y: (Z[se.oppositeStart].y + Z[se.oppositeEnd].y) / 2,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#FF0000",
                  textAnchor: "middle",
                  children: "OPPOSITE"
                }
              ),
              /* @__PURE__ */ t.jsx(
                "line",
                {
                  x1: Z[se.adjacentStart].x,
                  y1: Z[se.adjacentStart].y,
                  x2: Z[se.adjacentEnd].x,
                  y2: Z[se.adjacentEnd].y,
                  stroke: "#0000FF",
                  strokeWidth: "4",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ t.jsx(
                "text",
                {
                  x: (Z[se.adjacentStart].x + Z[se.adjacentEnd].x) / 2,
                  y: (Z[se.adjacentStart].y + Z[se.adjacentEnd].y) / 2 + 20,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#0000FF",
                  textAnchor: "middle",
                  children: "ADJACENT"
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "text",
                {
                  x: Z[se.refVertex].x,
                  y: Z[se.refVertex].y - 25,
                  fontSize: a(10),
                  fontWeight: "700",
                  fill: "#FFA500",
                  textAnchor: "middle",
                  children: [
                    "Reference Angle: ",
                    se.referenceAngle.value.toFixed(1),
                    "°"
                  ]
                }
              )
            ] })
          ] }),
          c.showPythagoreanSquares && oe.isRight && /* @__PURE__ */ t.jsx("g", { children: (() => {
            var gt;
            const y = (gt = [
              { index: 0, angle: oe.angleA },
              { index: 1, angle: oe.angleB },
              { index: 2, angle: oe.angleC }
            ].find((Ye) => Math.abs(Ye.angle - 90) < 1)) == null ? void 0 : gt.index;
            if (y === void 0) return null;
            const d = qe[y], u = qe[(y + 1) % 3], M = qe[(y + 2) % 3], f = Math.sqrt((d.x - u.x) ** 2 + (d.y - u.y) ** 2), v = Math.sqrt((d.x - M.x) ** 2 + (d.y - M.y) ** 2), A = Math.sqrt((u.x - M.x) ** 2 + (u.y - M.y) ** 2), w = {
              x: (u.x - d.x) / f,
              y: (u.y - d.y) / f
            }, O = {
              x: (M.x - d.x) / v,
              y: (M.y - d.y) / v
            }, L = {
              x: (M.x - u.x) / A,
              y: (M.y - u.y) / A
            }, te = (Ye, Xe, Ze, Ke) => {
              const He = (it, yt, dt) => (it.x - dt.x) * (yt.y - dt.y) - (yt.x - dt.x) * (it.y - dt.y), Je = He(Ye, Xe, Ze), rt = He(Ye, Ze, Ke), Be = He(Ye, Ke, Xe), lt = Je < 0 || rt < 0 || Be < 0, $e = Je > 0 || rt > 0 || Be > 0;
              return !(lt && $e);
            }, we = { x: -w.y, y: w.x }, be = { x: w.y, y: -w.x }, ze = { x: -O.y, y: O.x }, fe = { x: O.y, y: -O.x }, I = { x: -L.y, y: L.x }, B = { x: L.y, y: -L.x }, _ = { x: d.x + f * we.x * 0.1, y: d.y + f * we.y * 0.1 };
            d.x + f * be.x * 0.1, d.y + f * be.y * 0.1;
            const K = te(_, d, u, M) ? be : we, ge = { x: d.x + v * ze.x * 0.1, y: d.y + v * ze.y * 0.1 };
            d.x + v * fe.x * 0.1, d.y + v * fe.y * 0.1;
            const xe = te(ge, d, u, M) ? fe : ze, ue = { x: (u.x + M.x) / 2, y: (u.y + M.y) / 2 }, Te = { x: ue.x + A * I.x * 0.1, y: ue.y + A * I.y * 0.1 }, Fe = te(Te, d, u, M) ? B : I, De = [
              d,
              { x: d.x + f * w.x, y: d.y + f * w.y },
              { x: d.x + f * w.x + f * K.x, y: d.y + f * w.y + f * K.y },
              { x: d.x + f * K.x, y: d.y + f * K.y }
            ], Le = [
              d,
              { x: d.x + v * O.x, y: d.y + v * O.y },
              { x: d.x + v * O.x + v * xe.x, y: d.y + v * O.y + v * xe.y },
              { x: d.x + v * xe.x, y: d.y + v * xe.y }
            ], nt = [
              u,
              M,
              { x: M.x + A * Fe.x, y: M.y + A * Fe.y },
              { x: u.x + A * Fe.x, y: u.y + A * Fe.y }
            ], Me = De.map(n), Se = Le.map(n), ke = nt.map(n);
            return /* @__PURE__ */ t.jsxs("g", { children: [
              /* @__PURE__ */ t.jsx(
                "path",
                {
                  d: `M ${Me[0].x},${Me[0].y} L ${Me[1].x},${Me[1].y} L ${Me[2].x},${Me[2].y} L ${Me[3].x},${Me[3].y} Z`,
                  fill: "rgba(59, 130, 246, 0.3)",
                  stroke: "#3B82F6",
                  strokeWidth: "2",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "text",
                {
                  x: (Me[0].x + Me[1].x + Me[2].x + Me[3].x) / 4,
                  y: (Me[0].y + Me[1].y + Me[2].y + Me[3].y) / 4,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#1D4ED8",
                  textAnchor: "middle",
                  children: [
                    "a² = ",
                    (f ** 2).toFixed(1)
                  ]
                }
              ),
              /* @__PURE__ */ t.jsx(
                "path",
                {
                  d: `M ${Se[0].x},${Se[0].y} L ${Se[1].x},${Se[1].y} L ${Se[2].x},${Se[2].y} L ${Se[3].x},${Se[3].y} Z`,
                  fill: "rgba(239, 68, 68, 0.3)",
                  stroke: "#EF4444",
                  strokeWidth: "2",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "text",
                {
                  x: (Se[0].x + Se[1].x + Se[2].x + Se[3].x) / 4,
                  y: (Se[0].y + Se[1].y + Se[2].y + Se[3].y) / 4,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#DC2626",
                  textAnchor: "middle",
                  children: [
                    "b² = ",
                    (v ** 2).toFixed(1)
                  ]
                }
              ),
              /* @__PURE__ */ t.jsx(
                "path",
                {
                  d: `M ${ke[0].x},${ke[0].y} L ${ke[1].x},${ke[1].y} L ${ke[2].x},${ke[2].y} L ${ke[3].x},${ke[3].y} Z`,
                  fill: "rgba(34, 197, 94, 0.3)",
                  stroke: "#22C55E",
                  strokeWidth: "2",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "text",
                {
                  x: (ke[0].x + ke[1].x + ke[2].x + ke[3].x) / 4,
                  y: (ke[0].y + ke[1].y + ke[2].y + ke[3].y) / 4,
                  fontSize: a(10),
                  fontWeight: "600",
                  fill: "#16A34A",
                  textAnchor: "middle",
                  children: [
                    "c² = ",
                    (A ** 2).toFixed(1)
                  ]
                }
              ),
              (() => {
                const Ye = {
                  x: (he.x + pe.x + ye.x) / 3,
                  y: (he.y + pe.y + ye.y) / 3
                }, Xe = [...Me, ...Se, ...ke], Ze = Math.min(...Xe.map(($e) => $e.x)), Ke = Math.max(...Xe.map(($e) => $e.x)), He = Math.min(...Xe.map(($e) => $e.y)), Je = Math.max(...Xe.map(($e) => $e.y)), rt = [
                  { x: (Ze + Ke) / 2, y: Je + 40, label: "below" },
                  { x: (Ze + Ke) / 2, y: He - 40, label: "above" },
                  { x: Ze - 80, y: (He + Je) / 2, label: "left" },
                  { x: Ke + 80, y: (He + Je) / 2, label: "right" }
                ];
                let Be = rt[0], lt = 1 / 0;
                return rt.forEach(($e) => {
                  const it = Math.sqrt(
                    ($e.x - Ye.x) ** 2 + ($e.y - Ye.y) ** 2
                  );
                  it < lt && (lt = it, Be = $e);
                }), /* @__PURE__ */ t.jsxs("g", { children: [
                  /* @__PURE__ */ t.jsx(
                    "rect",
                    {
                      x: Be.x - 85,
                      y: Be.y - 20,
                      width: "170",
                      height: "35",
                      fill: "rgba(255, 255, 255, 0.9)",
                      stroke: "#374151",
                      strokeWidth: "1",
                      rx: "6",
                      opacity: "0.95"
                    }
                  ),
                  /* @__PURE__ */ t.jsxs(
                    "text",
                    {
                      x: Be.x,
                      y: Be.y - 5,
                      fontSize: a(11),
                      fontWeight: "700",
                      fill: "#374151",
                      textAnchor: "middle",
                      opacity: "1",
                      children: [
                        (f ** 2).toFixed(1),
                        " + ",
                        (v ** 2).toFixed(1),
                        " = ",
                        (A ** 2).toFixed(1)
                      ]
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    "text",
                    {
                      x: Be.x,
                      y: Be.y + 10,
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
          c.showTriangleAltitudes && /* @__PURE__ */ t.jsx("g", { children: qe.map((y, d) => {
            const u = qe[(d + 1) % 3], M = qe[(d + 2) % 3], f = M.x - u.x, v = M.y - u.y, A = Math.sqrt(f * f + v * v);
            if (A === 0) return null;
            const w = ((y.x - u.x) * f + (y.y - u.y) * v) / (A * A), O = {
              x: u.x + w * f,
              y: u.y + w * v
            }, L = n(y), te = n(O);
            return /* @__PURE__ */ t.jsxs("g", { children: [
              /* @__PURE__ */ t.jsx(
                "line",
                {
                  x1: L.x,
                  y1: L.y,
                  x2: te.x,
                  y2: te.y,
                  stroke: "#9CA3AF",
                  strokeWidth: "1",
                  strokeDasharray: "3,3",
                  opacity: "0.7"
                }
              ),
              /* @__PURE__ */ t.jsx(
                "circle",
                {
                  cx: te.x,
                  cy: te.y,
                  r: "2",
                  fill: "#9CA3AF",
                  opacity: "0.7"
                }
              )
            ] }, `altitude-${d}`);
          }) }),
          Z.map((y, d) => /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: y.x,
              cy: y.y,
              r: s / 6,
              fill: j ? "#DC2626" : "#F56565",
              stroke: j ? "#60A5FA" : "none",
              strokeWidth: j ? 2 : 0,
              style: { cursor: "move" }
            },
            `vertex-${d}`
          )),
          c.showTriangleAngles && /* @__PURE__ */ t.jsxs("g", { children: [
            [
              { vertex: he, angle: oe.angleA, label: "A" },
              { vertex: pe, angle: oe.angleB, label: "B" },
              { vertex: ye, angle: oe.angleC, label: "C" }
            ].map((y, d) => /* @__PURE__ */ t.jsxs(
              "text",
              {
                x: y.vertex.x + (d === 0 ? -25 : d === 1 ? 25 : 0),
                y: y.vertex.y + (d === 2 ? 25 : -15),
                fontSize: a(9),
                fontWeight: "600",
                fill: j ? "#DC2626" : "#F56565",
                textAnchor: "middle",
                opacity: "0.9",
                children: [
                  y.label,
                  ": ",
                  y.angle.toFixed(1),
                  "°"
                ]
              },
              `angle-${d}`
            )),
            /* @__PURE__ */ t.jsxs(
              "text",
              {
                x: (he.x + pe.x + ye.x) / 3,
                y: (he.y + pe.y + ye.y) / 3 + 20,
                fontSize: a(8),
                fontWeight: "400",
                fill: j ? "#DC2626" : "#F56565",
                textAnchor: "middle",
                opacity: "0.6",
                children: [
                  "Sum: ",
                  (oe.angleA + oe.angleB + oe.angleC).toFixed(1),
                  "°"
                ]
              }
            )
          ] }),
          c.showTriangleClassification && /* @__PURE__ */ t.jsxs("g", { children: [
            /* @__PURE__ */ t.jsx(
              "text",
              {
                x: (he.x + pe.x + ye.x) / 3,
                y: (he.y + pe.y + ye.y) / 3 - 15,
                fontSize: a(11),
                fontWeight: "600",
                fill: oe.isSpecial ? "#FFA500" : j ? "#DC2626" : "#F56565",
                textAnchor: "middle",
                opacity: "0.9",
                children: oe.isSpecial ? oe.specialType : oe.classification
              }
            ),
            oe.isSpecial && /* @__PURE__ */ t.jsx(
              "text",
              {
                x: (he.x + pe.x + ye.x) / 3,
                y: (he.y + pe.y + ye.y) / 3 - 2,
                fontSize: a(9),
                fontWeight: "500",
                fill: "#FFA500",
                textAnchor: "middle",
                opacity: "0.8",
                children: "Special Triangle!"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs(
            "text",
            {
              x: (he.x + pe.x + ye.x) / 3,
              y: (he.y + pe.y + ye.y) / 3 + (c.showTriangleAngles ? 35 : 8),
              fontSize: a(10),
              fontWeight: "500",
              fill: j ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.8",
              children: [
                "Area = ",
                Ce(oe.area)
              ]
            }
          ),
          c.showTrigValues && b === g.id && F && /* @__PURE__ */ t.jsx("g", { children: (() => {
            const y = [
              { label: "A", value: oe.angleA, index: 0 },
              { label: "B", value: oe.angleB, index: 1 },
              { label: "C", value: oe.angleC, index: 2 }
            ];
            let d = y[0], u = 1 / 0;
            y.forEach((w) => {
              const O = Z[w.index], L = Math.sqrt(
                (F.x - O.x) ** 2 + (F.y - O.y) ** 2
              );
              L < u && (u = L, d = w);
            });
            const M = d.value * Math.PI / 180, f = Math.sin(M), v = Math.cos(M), A = Math.tan(M);
            return /* @__PURE__ */ t.jsxs("g", { children: [
              /* @__PURE__ */ t.jsx(
                "rect",
                {
                  x: F.x + 10,
                  y: F.y - 55,
                  width: "140",
                  height: "60",
                  fill: "rgba(255, 255, 255, 0.95)",
                  stroke: "#374151",
                  strokeWidth: "1",
                  rx: "4"
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "text",
                {
                  x: F.x + 80,
                  y: F.y - 40,
                  fontSize: a(9),
                  fontWeight: "600",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "Angle ",
                    d.label,
                    ": ",
                    d.value.toFixed(1),
                    "°"
                  ]
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "text",
                {
                  x: F.x + 80,
                  y: F.y - 28,
                  fontSize: a(8),
                  fontWeight: "500",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "sin = ",
                    f.toFixed(3)
                  ]
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "text",
                {
                  x: F.x + 80,
                  y: F.y - 16,
                  fontSize: a(8),
                  fontWeight: "500",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "cos = ",
                    v.toFixed(3)
                  ]
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "text",
                {
                  x: F.x + 80,
                  y: F.y - 4,
                  fontSize: a(8),
                  fontWeight: "500",
                  fill: "#374151",
                  textAnchor: "middle",
                  children: [
                    "tan = ",
                    isFinite(A) ? A.toFixed(3) : "∞"
                  ]
                }
              )
            ] });
          })() }),
          /* @__PURE__ */ t.jsx(
            "text",
            {
              x: (he.x + pe.x) / 2,
              y: (he.y + pe.y) / 2 - 10,
              fontSize: a(8),
              fontWeight: "400",
              fill: j ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: Ce(oe.sideC)
            }
          ),
          /* @__PURE__ */ t.jsx(
            "text",
            {
              x: (pe.x + ye.x) / 2 + 10,
              y: (pe.y + ye.y) / 2,
              fontSize: a(8),
              fontWeight: "400",
              fill: j ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: Ce(oe.sideA)
            }
          ),
          /* @__PURE__ */ t.jsx(
            "text",
            {
              x: (he.x + ye.x) / 2 - 10,
              y: (he.y + ye.y) / 2,
              fontSize: a(8),
              fontWeight: "400",
              fill: j ? "#DC2626" : "#F56565",
              textAnchor: "middle",
              opacity: "0.6",
              children: Ce(oe.sideB)
            }
          )
        ] }, g.id);
      case "function":
        const S = g, ie = S.properties.points;
        if (!ie || ie.length < 2) return null;
        const Y = ie.map(n).reduce((y, d, u) => u === 0 ? `M ${d.x} ${d.y}` : `${y} L ${d.x} ${d.y}`, ""), $ = n({ x: S.properties.domain.min, y: ((X = ie[0]) == null ? void 0 : X.y) || 0 }), ee = n({ x: S.properties.domain.max, y: ((ce = ie[ie.length - 1]) == null ? void 0 : ce.y) || 0 });
        return /* @__PURE__ */ t.jsxs("g", { children: [
          c.showFunctionExtensions && (() => {
            const y = (f, v) => {
              try {
                const A = f.replace(/\bx\b/g, `(${v})`).replace(/\^/g, "**").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/log/g, "Math.log").replace(/ln/g, "Math.log").replace(/exp/g, "Math.exp").replace(/sqrt/g, "Math.sqrt").replace(/abs/g, "Math.abs").replace(/pi/g, "Math.PI").replace(/e\b/g, "Math.E"), O = new Function("x", `return ${A}`)(v);
                return typeof O == "number" && !isNaN(O) && isFinite(O) ? O : null;
              } catch {
                return null;
              }
            }, d = {
              left: e.center.x - i.width / 2 / e.zoom,
              right: e.center.x + i.width / 2 / e.zoom
            }, u = S.properties.equation, M = [];
            if (S.properties.domain.min > d.left) {
              const f = [], v = Math.max(d.left, S.properties.domain.min - 6), A = (S.properties.domain.min - v) / 15;
              for (let w = v; w <= S.properties.domain.min; w += A) {
                const O = y(u, w);
                O !== null && f.push(n({ x: w, y: O }));
              }
              if (f.length > 1) {
                const w = f.reduce((O, L, te) => O + (te === 0 ? `M ${L.x} ${L.y}` : ` L ${L.x} ${L.y}`), "");
                M.push(w);
              }
            }
            if (S.properties.domain.max < d.right) {
              const f = [], v = Math.min(d.right, S.properties.domain.max + 6), A = (v - S.properties.domain.max) / 15;
              for (let w = S.properties.domain.max; w <= v; w += A) {
                const O = y(u, w);
                O !== null && f.push(n({ x: w, y: O }));
              }
              if (f.length > 1) {
                const w = f.reduce((O, L, te) => O + (te === 0 ? `M ${L.x} ${L.y}` : ` L ${L.x} ${L.y}`), "");
                M.push(w);
              }
            }
            return /* @__PURE__ */ t.jsx("g", { children: M.map((f, v) => /* @__PURE__ */ t.jsx(
              "path",
              {
                d: f,
                fill: "none",
                stroke: S.properties.color || "#2563eb",
                strokeWidth: 1,
                strokeDasharray: "4,4",
                opacity: 0.5,
                strokeLinecap: "round"
              },
              `ext-${v}`
            )) });
          })(),
          j && /* @__PURE__ */ t.jsx(
            "path",
            {
              d: Y,
              fill: "none",
              stroke: "#60A5FA",
              strokeWidth: 6,
              opacity: 0.4
            }
          ),
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: Y,
              fill: "none",
              stroke: "transparent",
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: { pointerEvents: "stroke" },
              onMouseEnter: () => G(g.id),
              onMouseLeave: () => {
                G(null), le(null);
              },
              onMouseMove: (y) => {
                var d;
                if (V === g.id) {
                  const u = (d = y.currentTarget.ownerSVGElement) == null ? void 0 : d.getBoundingClientRect();
                  if (u) {
                    const M = y.clientX - u.left, f = y.clientY - u.top;
                    e.center.x + (M - i.width / 2) / e.zoom, e.center.y - (f - i.height / 2) / e.zoom;
                    let v = null, A = 1 / 0;
                    for (const w of ie) {
                      const O = n(w), L = Math.sqrt(
                        (M - O.x) ** 2 + (f - O.y) ** 2
                      );
                      L < A && (A = L, v = w);
                    }
                    v && le(v);
                  }
                }
              }
            }
          ),
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: Y,
              fill: "none",
              stroke: j ? "#1D4ED8" : S.properties.color || "#2563eb",
              strokeWidth: j ? 3 : S.properties.strokeWidth || 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: { pointerEvents: "none" }
            }
          ),
          j && /* @__PURE__ */ t.jsxs("g", { children: [
            /* @__PURE__ */ t.jsx(
              "circle",
              {
                cx: $.x,
                cy: $.y,
                r: "6",
                fill: "#1D4ED8",
                stroke: "white",
                strokeWidth: "2",
                opacity: 0.8
              }
            ),
            /* @__PURE__ */ t.jsx(
              "circle",
              {
                cx: ee.x,
                cy: ee.y,
                r: "6",
                fill: "#1D4ED8",
                stroke: "white",
                strokeWidth: "2",
                opacity: 0.8
              }
            )
          ] }),
          V === g.id && U && /* @__PURE__ */ t.jsxs("g", { children: [
            /* @__PURE__ */ t.jsx(
              "circle",
              {
                cx: n(U).x,
                cy: n(U).y,
                r: "4",
                fill: S.properties.color || "#2563eb",
                stroke: "white",
                strokeWidth: "2"
              }
            ),
            /* @__PURE__ */ t.jsx(
              "rect",
              {
                x: n(U).x - 70,
                y: n(U).y - 55,
                width: "140",
                height: "45",
                fill: "rgba(255, 255, 255, 0.95)",
                stroke: "#374151",
                strokeWidth: "1",
                rx: "4"
              }
            ),
            /* @__PURE__ */ t.jsxs(
              "text",
              {
                x: n(U).x,
                y: n(U).y - 40,
                fontSize: a(9),
                fontWeight: "600",
                fill: "#374151",
                textAnchor: "middle",
                children: [
                  "(",
                  q(U.x, x),
                  ", ",
                  q(U.y, x),
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ t.jsxs(
              "text",
              {
                x: n(U).x,
                y: n(U).y - 28,
                fontSize: a(8),
                fontWeight: "500",
                fill: "#374151",
                textAnchor: "middle",
                children: [
                  "f(",
                  q(U.x, x),
                  ") = ",
                  q(U.y, x)
                ]
              }
            ),
            /* @__PURE__ */ t.jsxs(
              "text",
              {
                x: n(U).x,
                y: n(U).y - 16,
                fontSize: a(8),
                fontWeight: "400",
                fill: "#666",
                textAnchor: "middle",
                children: [
                  "f(x) = ",
                  S.properties.equation
                ]
              }
            )
          ] }),
          (j || C === g.id) && /* @__PURE__ */ t.jsxs("g", { children: [
            /* @__PURE__ */ t.jsx(
              "rect",
              {
                x: $.x - 40,
                y: $.y - 35,
                width: "80",
                height: "25",
                fill: "rgba(255, 255, 255, 0.95)",
                stroke: "#374151",
                strokeWidth: "1",
                rx: "4"
              }
            ),
            /* @__PURE__ */ t.jsxs(
              "text",
              {
                x: $.x,
                y: $.y - 20,
                fontSize: a(10),
                fontWeight: "600",
                fill: "#374151",
                textAnchor: "middle",
                children: [
                  "f(x) = ",
                  S.properties.equation
                ]
              }
            )
          ] })
        ] }, g.id);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx(
      "marker",
      {
        id: "arrowhead",
        markerWidth: "10",
        markerHeight: "7",
        refX: "9",
        refY: "3.5",
        orient: "auto",
        children: /* @__PURE__ */ t.jsx(
          "polygon",
          {
            points: "0 0, 10 3.5, 0 7",
            fill: "#3B82F6",
            opacity: "0.6"
          }
        )
      }
    ) }),
    /* @__PURE__ */ t.jsx("g", { className: "objects", children: r.map(Ae) })
  ] });
}
function es({ capabilities: r, viewport: e, activeTool: s, selectedObjectsCount: n }) {
  return r ? /* @__PURE__ */ t.jsxs("div", { className: "absolute top-2 left-2 text-xs text-gray-500 bg-white/80 p-2 rounded shadow-sm", children: [
    /* @__PURE__ */ t.jsxs("div", { children: [
      "Input: ",
      r.hasTouch ? "👆" : "🖱️",
      " ",
      r.hasPencil ? "✏️" : ""
    ] }),
    /* @__PURE__ */ t.jsxs("div", { children: [
      "Zoom: ",
      e.zoom >= 1 ? e.zoom.toFixed(1) : e.zoom.toFixed(2),
      "×"
    ] }),
    /* @__PURE__ */ t.jsxs("div", { children: [
      "Center: (",
      e.center.x.toFixed(1),
      ", ",
      e.center.y.toFixed(1),
      ")"
    ] }),
    /* @__PURE__ */ t.jsxs("div", { children: [
      "Tool: ",
      s || "Pan Mode"
    ] }),
    n > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
      "Selected: ",
      n,
      " object",
      n !== 1 ? "s" : ""
    ] })
  ] }) : null;
}
function ts({ selectedObject: r, onDelete: e, onUpdate: s, onClose: n }) {
  if (!r) return null;
  const o = () => {
    e(), n();
  }, i = (a, h) => {
    try {
      const x = (P, l) => {
        try {
          const m = P.replace(/\bx\b/g, `(${l})`).replace(/\^/g, "**").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/log/g, "Math.log").replace(/ln/g, "Math.log").replace(/exp/g, "Math.exp").replace(/sqrt/g, "Math.sqrt").replace(/abs/g, "Math.abs").replace(/pi/g, "Math.PI").replace(/e\b/g, "Math.E"), E = new Function("x", `return ${m}`)(l);
          return typeof E == "number" && !isNaN(E) && isFinite(E) ? E : null;
        } catch {
          return null;
        }
      }, C = (P) => P.includes("sin") || P.includes("cos") || P.includes("tan") ? "trigonometric" : P.includes("exp") || P.includes("e^") ? "exponential" : P.includes("log") || P.includes("ln") ? "logarithmic" : /x\^\d+|x\*\*\d+/.test(P) ? "polynomial" : "custom", k = a.properties.domain, R = a.properties.resolution || 20, T = [], N = (k.max - k.min) / (R * (k.max - k.min));
      for (let P = k.min; P <= k.max; P += N) {
        const l = x(h, P);
        l !== null && T.push({ x: P, y: l });
      }
      return {
        properties: {
          ...a.properties,
          equation: h,
          functionType: C(h),
          points: T
        }
      };
    } catch (x) {
      return console.error("Failed to update function equation:", x), null;
    }
  }, c = () => {
    switch (r.type) {
      case "ray":
        const { startPoint: a, endPoint: h, slope: x } = r.properties, C = Math.abs(a.x) < 1e-3 && Math.abs(a.y) < 1e-3;
        return /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Line Details" }),
          /* @__PURE__ */ t.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Start: (",
              q(a.x, 1),
              ", ",
              q(a.y, 1),
              ")"
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "End: (",
              q(h.x, 1),
              ", ",
              q(h.y, 1),
              ")"
            ] }),
            C && /* @__PURE__ */ t.jsxs("div", { children: [
              "Fraction: ",
              Math.round(h.y),
              "/",
              Math.round(h.x)
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Slope: ",
              isFinite(x) ? x.toFixed(3) : "undefined"
            ] })
          ] })
        ] });
      case "rectangle":
        const { x: k, y: R, width: T, height: N, area: P } = r.properties;
        return /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Rectangle Details" }),
          /* @__PURE__ */ t.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Position: (",
              q(k, 1),
              ", ",
              q(R, 1),
              ")"
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Size: ",
              q(T, 1),
              " × ",
              q(N, 1)
            ] })
          ] })
        ] });
      case "circle":
        const { center: l, radius: m, diameter: b, circumference: E, area: F } = r.properties;
        return /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Circle Details" }),
          /* @__PURE__ */ t.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Center: (",
              q(l.x, 1),
              ", ",
              q(l.y, 1),
              ")"
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Radius: ",
              Ce(m)
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Diameter: ",
              Ce(b)
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Circumference: ",
              Ce(E)
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Area: ",
              Ce(F)
            ] })
          ] })
        ] });
      case "triangle":
        const { vertices: z, sideA: V, sideB: G, sideC: U, angleA: le, angleB: de, angleC: Ae, area: g, perimeter: j, type: X } = r.properties;
        return /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Triangle Details" }),
          /* @__PURE__ */ t.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Type: ",
              X
            ] }),
            /* @__PURE__ */ t.jsx("div", { children: "Vertices:" }),
            /* @__PURE__ */ t.jsxs("div", { className: "ml-2", children: [
              /* @__PURE__ */ t.jsxs("div", { children: [
                "A: (",
                q(z[0].x, 1),
                ", ",
                q(z[0].y, 1),
                ")"
              ] }),
              /* @__PURE__ */ t.jsxs("div", { children: [
                "B: (",
                q(z[1].x, 1),
                ", ",
                q(z[1].y, 1),
                ")"
              ] }),
              /* @__PURE__ */ t.jsxs("div", { children: [
                "C: (",
                q(z[2].x, 1),
                ", ",
                q(z[2].y, 1),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Sides: ",
              Ce(V),
              ", ",
              Ce(G),
              ", ",
              Ce(U)
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Angles: ",
              Ce(le),
              "°, ",
              Ce(de),
              "°, ",
              Ce(Ae),
              "°"
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Area: ",
              Ce(g)
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Perimeter: ",
              Ce(j)
            ] })
          ] })
        ] });
      case "function":
        const ce = r, { equation: Pe, functionType: ve, domain: D, points: me } = ce.properties;
        return /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Function Details" }),
          /* @__PURE__ */ t.jsxs("div", { className: "space-y-1 text-xs text-gray-600", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Equation: f(x) = ",
              Pe
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Type: ",
              ve
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Domain: [",
              q(D.min, 1),
              ", ",
              q(D.max, 1),
              "]"
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              "Points: ",
              me.length
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "mt-2 pt-2 border-t border-gray-100", children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-xs font-medium text-gray-700 mb-1", children: "Edit Equation:" }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                defaultValue: Pe,
                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500",
                placeholder: "e.g., x^2, sin(x), 2*x + 1",
                onKeyDown: (p) => {
                  if (p.stopPropagation(), p.key === "Enter") {
                    const W = p.target.value.trim();
                    if (W && W !== Pe) {
                      const re = i(ce, W);
                      re && s(r.id, { properties: re.properties });
                    }
                    p.target.blur();
                  } else p.key === "Escape" && p.target.blur();
                },
                onKeyUp: (p) => {
                  p.stopPropagation();
                },
                onKeyPress: (p) => {
                  p.stopPropagation();
                },
                onFocus: (p) => {
                  p.target.select();
                }
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "text-xs text-gray-500 mt-1", children: "Press Enter to apply. Examples: x^2, sin(x), cos(x), log(x), exp(x)" })
          ] })
        ] });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "fixed top-20 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 min-w-48",
      onKeyDown: (a) => {
        a.stopPropagation();
      },
      onKeyUp: (a) => {
        a.stopPropagation();
      },
      onKeyPress: (a) => {
        a.stopPropagation();
      },
      children: [
        c(),
        /* @__PURE__ */ t.jsxs("div", { className: "mt-3 pt-2 border-t border-gray-100 flex gap-2", children: [
          /* @__PURE__ */ t.jsxs(
            "button",
            {
              onClick: o,
              className: "flex items-center gap-1 px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded transition-colors",
              children: [
                /* @__PURE__ */ t.jsx("span", { children: "🗑️" }),
                "Delete"
              ]
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "button",
            {
              onClick: n,
              className: "flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded transition-colors",
              children: [
                /* @__PURE__ */ t.jsx("span", { children: "✕" }),
                "Close"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ss() {
  const [r, e] = ne(!1), [s, n] = ne("all"), o = We(null), i = Ge(), { toggleSetting: c, setFontScale: a, setGridScale: h, setSnapPrecision: x, setCoordinateSystem: C, resetToDefaults: k } = i;
  Oe(() => {
    function P(l) {
      o.current && !o.current.contains(l.target) && e(!1);
    }
    if (r)
      return document.addEventListener("mousedown", P, !0), document.addEventListener("click", P, !0), () => {
        document.removeEventListener("mousedown", P, !0), document.removeEventListener("click", P, !0);
      };
  }, [r]);
  const R = [
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
          key: "showDivisionMultiples",
          label: "Division Multiples",
          description: "Horizontal lines showing division answer multiples"
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
      title: "Circle Concepts",
      subtitle: "Visual features for circles and curves",
      settings: [
        {
          key: "showTangentLines",
          label: "Tangent Lines",
          description: "Show tangent line and slope on hover"
        }
      ]
    },
    {
      title: "Function Concepts",
      subtitle: "Mathematical function visualization features",
      settings: [
        {
          key: "showFunctionExtensions",
          label: "Function Extensions",
          description: "Show subtle curve extensions beyond domain endpoints"
        }
      ]
    },
    {
      title: "Triangle Concepts",
      subtitle: "Trigonometry and geometry learning features",
      settings: [
        {
          key: "showTriangleAngles",
          label: "Angle Measurements",
          description: "Show all three angles with degree values"
        },
        {
          key: "showTriangleClassification",
          label: "Triangle Classification",
          description: "Label triangle type (scalene, isosceles, etc.)"
        },
        {
          key: "showSpecialTriangles",
          label: "Special Triangles",
          description: "Highlight 30-60-90 and 45-45-90 triangles"
        },
        {
          key: "showSOHCAHTOA",
          label: "SOH-CAH-TOA Visualization",
          description: "Highlight opposite, adjacent, hypotenuse sides"
        },
        {
          key: "showTrigValues",
          label: "Trigonometric Values",
          description: "Show sin, cos, tan values on hover"
        },
        {
          key: "showTriangleAltitudes",
          label: "Altitude Lines",
          description: "Show perpendicular height lines"
        },
        {
          key: "showPythagoreanSquares",
          label: "Pythagorean Squares",
          description: "Show a² + b² = c² with actual squares (right triangles)"
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
  ], T = s === "all" ? R : R.filter((P) => P.title.toLowerCase().replace(/[^a-z0-9]/g, "-") === s), N = [
    { id: "all", name: "All Settings" },
    ...R.map((P) => ({
      id: P.title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      name: P.title
    }))
  ];
  return /* @__PURE__ */ t.jsxs("div", { ref: o, className: "fixed bottom-4 left-4 z-50", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => e(!r),
        className: "flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors",
        title: "Visualization Settings",
        children: [
          /* @__PURE__ */ t.jsx("span", { className: "text-lg", children: "⚙️" }),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Settings" }),
          /* @__PURE__ */ t.jsx("span", { className: `text-xs transition-transform ${r ? "" : "rotate-180"}`, children: "▼" })
        ]
      }
    ),
    r && /* @__PURE__ */ t.jsxs("div", { className: "settings-panel absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[28rem] overflow-y-auto", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ t.jsx("h3", { className: "text-sm font-semibold text-gray-800", children: "Visualization Settings" }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: k,
              className: "text-xs text-blue-600 hover:text-blue-800 font-medium",
              children: "Reset All"
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "px-4 pt-2", children: /* @__PURE__ */ t.jsx(
          "select",
          {
            value: s,
            onChange: (P) => n(P.target.value),
            className: "w-full text-xs border border-gray-200 rounded px-2 py-1 bg-white",
            children: N.map((P) => /* @__PURE__ */ t.jsx("option", { value: P.id, children: P.name }, P.id))
          }
        ) })
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "settings-scrollable p-4 space-y-5", children: T.map((P, l) => /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsxs("div", { className: `${l > 0 ? "border-t border-gray-100 pt-4" : ""} mb-3`, children: [
          /* @__PURE__ */ t.jsx("h4", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wide", children: P.title }),
          P.subtitle && /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: P.subtitle })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "space-y-2.5", children: [
          P.settings.map((m) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "checkbox",
                checked: i[m.key],
                onChange: () => c(m.key),
                className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              }
            ),
            /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ t.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: m.label }),
              /* @__PURE__ */ t.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: m.description })
            ] })
          ] }, m.key)),
          P.title === "Display" && /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Font Size" }),
              /* @__PURE__ */ t.jsxs("span", { className: "text-xs text-gray-500 font-mono", children: [
                Math.round(i.fontScale * 100),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-xs text-gray-400", children: "A" }),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "range",
                  min: "0.8",
                  max: "2.0",
                  step: "0.1",
                  value: i.fontScale,
                  onChange: (m) => a(parseFloat(m.target.value)),
                  className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-600", children: "A" })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: "Increase font size for better visibility on TVs and projectors" }),
            /* @__PURE__ */ t.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Grid Density" }),
                /* @__PURE__ */ t.jsxs("span", { className: "text-xs text-gray-500 font-mono", children: [
                  Math.round(i.gridScale * 100),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-xs text-gray-400", children: "Sparse" }),
                /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "range",
                    min: "0.2",
                    max: "5.0",
                    step: "0.1",
                    value: i.gridScale,
                    onChange: (m) => h(parseFloat(m.target.value)),
                    className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  }
                ),
                /* @__PURE__ */ t.jsx("span", { className: "text-xs text-gray-600", children: "Dense" })
              ] }),
              /* @__PURE__ */ t.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: "Adjust grid line spacing for different zoom levels and detail needs" })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Coordinate System" }),
              /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: [
                { value: "cartesian", label: "Cartesian Only", desc: "Standard x-y grid" },
                { value: "polar", label: "Polar Only", desc: "Circular coordinate system" },
                { value: "both", label: "Both Systems", desc: "Overlay polar on Cartesian" }
              ].map((m) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "coordinateSystem",
                    value: m.value,
                    checked: i.coordinateSystem === m.value,
                    onChange: (b) => C(b.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: m.label }),
                  /* @__PURE__ */ t.jsx("div", { className: "text-xs text-gray-500", children: m.desc })
                ] })
              ] }, m.value)) })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Snap Precision" }),
              /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: [
                { value: "adaptive", label: "Adaptive", desc: "Automatically adjusts based on zoom level" },
                { value: "whole", label: "Whole Numbers", desc: "Snap to 1, 2, 3, etc." },
                { value: "half", label: "Half Units", desc: "Snap to 0.5, 1.0, 1.5, etc." },
                { value: "quarter", label: "Quarter Units", desc: "Snap to 0.25, 0.5, 0.75, etc." },
                { value: "tenth", label: "Tenth Units", desc: "Snap to 0.1, 0.2, 0.3, etc." }
              ].map((m) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "snapPrecision",
                    value: m.value,
                    checked: i.snapPrecision === m.value,
                    onChange: (b) => x(b.target.value),
                    className: "mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t.jsx("div", { className: "text-sm font-medium text-gray-700 group-hover:text-gray-900", children: m.label }),
                  /* @__PURE__ */ t.jsx("div", { className: "text-xs text-gray-500", children: m.desc })
                ] })
              ] }, m.value)) }),
              /* @__PURE__ */ t.jsx("div", { className: "text-xs text-gray-500 leading-relaxed", children: "Controls where objects can be placed when snap-to-grid is enabled" })
            ] })
          ] })
        ] })
      ] }, P.title)) }),
      /* @__PURE__ */ t.jsx("div", { className: "sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg", children: /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Toggle features to explore different mathematical concepts" }) })
    ] })
  ] });
}
const Ue = class Ue {
  constructor() {
    ae(this, "examplesData", null);
    ae(this, "isLoading", !1);
  }
  static getInstance() {
    return Ue.instance || (Ue.instance = new Ue()), Ue.instance;
  }
  async loadExamples() {
    if (this.examplesData)
      return this.examplesData;
    if (this.isLoading)
      return await new Promise((e) => {
        const s = () => {
          this.isLoading ? setTimeout(s, 50) : e(void 0);
        };
        s();
      }), this.examplesData;
    this.isLoading = !0;
    try {
      const e = await fetch("/examples.json");
      if (!e.ok)
        throw new Error(`Failed to load examples: ${e.status}`);
      const s = await e.json();
      if (!s.examples || !Array.isArray(s.examples))
        throw new Error("Invalid examples data: missing examples array");
      if (!s.categories || !Array.isArray(s.categories))
        throw new Error("Invalid examples data: missing categories array");
      for (const n of s.examples)
        if (!n.id || !n.title || !n.objects || !Array.isArray(n.objects))
          throw new Error(`Invalid example: ${n.id || "unknown"}`);
      return this.examplesData = s, this.examplesData;
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
    const s = {
      id: this.generateObjectId(),
      type: e.type,
      visible: !0,
      selected: !1,
      zIndex: 0
    };
    switch (e.type) {
      case "ray":
        return {
          ...s,
          type: "ray",
          properties: {
            startPoint: e.properties.startPoint,
            endPoint: e.properties.endPoint,
            slope: (e.properties.endPoint.y - e.properties.startPoint.y) / (e.properties.endPoint.x - e.properties.startPoint.x)
          }
        };
      case "rectangle":
        return {
          ...s,
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
          ...s,
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
          ...s,
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
    const s = await this.getExampleById(e);
    if (!s)
      throw new Error(`Example not found: ${e}`);
    const n = Re.getState(), o = Ge.getState();
    try {
      n.getAllObjects().forEach((c) => {
        n.removeObject(c.id);
      }), n.clearSelection(), s.viewport && n.setViewport(s.viewport), Object.entries(s.settings).forEach(([c, a]) => {
        c in o && typeof a == "boolean" ? (o.toggleSetting(c), o[c] !== a && o.toggleSetting(c)) : c === "snapPrecision" && typeof a == "string" ? o.setSnapPrecision(a) : c === "coordinateSystem" && typeof a == "string" ? o.setCoordinateSystem(a) : c === "fontScale" && typeof a == "number" ? o.setFontScale(a) : c === "gridScale" && typeof a == "number" && o.setGridScale(a);
      }), s.objects.forEach((c) => {
        const a = this.convertExampleObjectToMathObject(c);
        n.addObject(a);
      }), console.log(`Applied example: ${s.title}`);
    } catch (i) {
      throw console.error("Failed to apply example:", i), new Error(`Failed to apply example "${s.title}": ${i.message}`);
    }
  }
  async clearCanvas() {
    const e = Re.getState(), s = Ge.getState();
    e.getAllObjects().forEach((o) => {
      e.removeObject(o.id);
    }), e.clearSelection(), e.setViewport({
      zoom: 20,
      center: { x: 0, y: 0 }
    }), s.resetToDefaults(), console.log("Canvas cleared and reset to defaults");
  }
  // Get examples suitable for first-time users
  async getBeginnerExamples() {
    return (await this.getExamples()).filter((s) => s.difficulty === "beginner");
  }
  // Get a random example from a specific category
  async getRandomExampleFromCategory(e) {
    const s = await this.getExamplesByCategory(e);
    if (s.length === 0) return null;
    const n = Math.floor(Math.random() * s.length);
    return s[n];
  }
};
ae(Ue, "instance");
let ut = Ue;
const tt = ut.getInstance();
function ns() {
  const [r, e] = ne(!1), [s, n] = ne([]), [o, i] = ne([]), [c, a] = ne("all"), [h, x] = ne(!1), [C, k] = ne(null), R = We(null);
  Oe(() => {
    function b(E) {
      R.current && !R.current.contains(E.target) && e(!1);
    }
    if (r)
      return document.addEventListener("mousedown", b, !0), document.addEventListener("click", b, !0), () => {
        document.removeEventListener("mousedown", b, !0), document.removeEventListener("click", b, !0);
      };
  }, [r]), Oe(() => {
    (async () => {
      try {
        x(!0), k(null);
        const [E, F] = await Promise.all([
          tt.getExamples(),
          tt.getCategories()
        ]);
        n(E), i(F);
      } catch (E) {
        console.error("Failed to load examples:", E), k("Failed to load examples");
      } finally {
        x(!1);
      }
    })();
  }, []);
  const T = async (b) => {
    try {
      x(!0), k(null), await tt.applyExample(b.id), e(!1);
    } catch (E) {
      console.error("Failed to apply example:", E), k(`Failed to load "${b.title}"`);
    } finally {
      x(!1);
    }
  }, N = async () => {
    try {
      x(!0), k(null), await tt.clearCanvas(), e(!1);
    } catch (b) {
      console.error("Failed to clear canvas:", b), k("Failed to clear canvas");
    } finally {
      x(!1);
    }
  }, P = c === "all" ? s : s.filter((b) => b.category === c), l = (b) => {
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
  }, m = (b) => {
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
  };
  return /* @__PURE__ */ t.jsxs("div", { ref: R, className: "fixed top-4 right-4 z-50", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => e(!r),
        className: "flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors",
        title: "Mathematical Examples",
        disabled: h,
        children: [
          /* @__PURE__ */ t.jsx("span", { className: "text-lg", children: "📚" }),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Examples" }),
          /* @__PURE__ */ t.jsx("span", { className: `text-xs transition-transform ${r ? "rotate-180" : ""}`, children: "▼" })
        ]
      }
    ),
    r && /* @__PURE__ */ t.jsxs("div", { className: "absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[32rem] overflow-hidden", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ t.jsx("h3", { className: "text-sm font-semibold text-gray-800", children: "Mathematical Examples" }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: N,
              className: "text-xs text-red-600 hover:text-red-800 font-medium",
              disabled: h,
              children: "Clear All"
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "mt-2", children: /* @__PURE__ */ t.jsxs(
          "select",
          {
            value: c,
            onChange: (b) => a(b.target.value),
            className: "w-full text-xs border border-gray-200 rounded px-2 py-1 bg-white",
            disabled: h,
            children: [
              /* @__PURE__ */ t.jsx("option", { value: "all", children: "All Categories" }),
              o.map((b) => /* @__PURE__ */ t.jsx("option", { value: b.id, children: b.name }, b.id))
            ]
          }
        ) })
      ] }),
      C && /* @__PURE__ */ t.jsx("div", { className: "px-4 py-2 bg-red-50 border-b border-red-100", children: /* @__PURE__ */ t.jsx("p", { className: "text-xs text-red-600", children: C }) }),
      /* @__PURE__ */ t.jsx("div", { className: "overflow-y-auto max-h-80 examples-scrollable", children: h ? /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ t.jsx("div", { className: "text-sm text-gray-500", children: "Loading examples..." }) }) : P.length === 0 ? /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ t.jsx("div", { className: "text-sm text-gray-500", children: "No examples available" }) }) : /* @__PURE__ */ t.jsx("div", { className: "p-2 space-y-1", children: P.map((b) => {
        var E;
        return /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: () => T(b),
            className: "w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors group",
            disabled: h,
            children: /* @__PURE__ */ t.jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ t.jsx("h4", { className: "text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate", children: b.title }),
                /* @__PURE__ */ t.jsx(
                  "span",
                  {
                    className: `text-xs px-1.5 py-0.5 rounded font-medium ${l(b.difficulty)}`,
                    title: `${b.difficulty} difficulty`,
                    children: m(b.difficulty)
                  }
                )
              ] }),
              /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500 mt-1 line-clamp-2", children: b.description }),
              o.find((F) => F.id === b.category) && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-xs text-gray-400", children: (E = o.find((F) => F.id === b.category)) == null ? void 0 : E.name }),
                /* @__PURE__ */ t.jsx("span", { className: "text-xs text-gray-300", children: "•" }),
                /* @__PURE__ */ t.jsxs("span", { className: "text-xs text-gray-400", children: [
                  b.objects.length,
                  " object",
                  b.objects.length !== 1 ? "s" : ""
                ] })
              ] })
            ] }) })
          },
          b.id
        );
      }) }) }),
      /* @__PURE__ */ t.jsx("div", { className: "sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg", children: /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Click an example to explore mathematical concepts" }) })
    ] })
  ] });
}
const St = "grix-tutorial-completed";
function rs() {
  const [r, e] = ne(!1), [s, n] = ne(0), [o, i] = ne(!1);
  Oe(() => {
    localStorage.getItem(St) || e(!0);
  }, []);
  const c = [
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
  ], a = () => {
    s < c.length - 1 ? n(s + 1) : x();
  }, h = () => {
    x();
  }, x = () => {
    localStorage.setItem(St, "true"), e(!1);
  }, C = async () => {
    try {
      i(!0);
      const T = await tt.getBeginnerExamples();
      T.length > 0 && await tt.applyExample(T[0].id), x();
    } catch (T) {
      console.error("Failed to load example:", T), x();
    } finally {
      i(!1);
    }
  };
  if (!r) return null;
  const k = c[s], R = s === c.length - 1;
  return /* @__PURE__ */ t.jsxs("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-md mx-4 p-6 relative", children: [
      /* @__PURE__ */ t.jsx("div", { className: "flex gap-2 mb-4", children: c.map((T, N) => /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `h-2 flex-1 rounded-full ${N <= s ? "bg-blue-500" : "bg-gray-200"}`
        },
        N
      )) }),
      /* @__PURE__ */ t.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-3", children: k.title }),
        /* @__PURE__ */ t.jsx("p", { className: "text-gray-600 leading-relaxed mb-6", children: k.content })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: h,
            className: "flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors",
            disabled: o,
            children: "Skip Tutorial"
          }
        ),
        R ? /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: C,
            className: "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50",
            disabled: o,
            children: o ? "Loading..." : "Try an Example!"
          }
        ) : /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: a,
            className: "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors",
            children: "Next"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "text-center mt-4 text-sm text-gray-500", children: [
        "Step ",
        s + 1,
        " of ",
        c.length
      ] }),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: h,
          className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100",
          title: "Close tutorial",
          children: "×"
        }
      )
    ] }),
    k.highlight && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      k.highlight === "examples" && /* @__PURE__ */ t.jsx("div", { className: "fixed top-4 right-4 z-[10000] pointer-events-none", children: /* @__PURE__ */ t.jsx("div", { className: "w-24 h-12 border-4 border-yellow-400 rounded-lg animate-pulse" }) }),
      k.highlight === "settings" && /* @__PURE__ */ t.jsx("div", { className: "fixed bottom-4 left-4 z-[10000] pointer-events-none", children: /* @__PURE__ */ t.jsx("div", { className: "w-24 h-12 border-4 border-yellow-400 rounded-lg animate-pulse" }) }),
      k.highlight === "toolbar" && /* @__PURE__ */ t.jsx("div", { className: "fixed top-4 left-4 z-[10000] pointer-events-none", children: /* @__PURE__ */ t.jsx("div", { className: "w-48 h-12 border-4 border-yellow-400 rounded-lg animate-pulse" }) })
    ] })
  ] });
}
function is() {
  const [r, e] = ne(!1), s = We(null);
  Oe(() => {
    function i(c) {
      s.current && !s.current.contains(c.target) && e(!1);
    }
    if (r)
      return document.addEventListener("mousedown", i, !0), document.addEventListener("click", i, !0), document.body.style.overflow = "hidden", () => {
        document.removeEventListener("mousedown", i, !0), document.removeEventListener("click", i, !0), document.body.style.overflow = "unset";
      };
  }, [r]), Oe(() => {
    const i = (c) => {
      c.key === "Escape" && e(!1);
    };
    if (r)
      return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [r]);
  const o = ["GetGrix", "@", "gmail", ".", "com"].join("");
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => e(!0),
        className: "fixed bottom-20 right-4 z-40 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl flex items-center justify-center",
        title: "About Grix",
        children: /* @__PURE__ */ t.jsx("span", { className: "text-sm font-bold text-blue-600", children: "ℹ️" })
      }
    ),
    r && /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ t.jsxs(
      "div",
      {
        ref: s,
        className: "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ t.jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", className: "flex-shrink-0", children: [
                /* @__PURE__ */ t.jsx("rect", { width: "32", height: "32", fill: "#2563eb", rx: "6" }),
                /* @__PURE__ */ t.jsxs("g", { stroke: "#60A5FA", strokeWidth: "0.5", opacity: "0.6", children: [
                  /* @__PURE__ */ t.jsx("line", { x1: "8", y1: "4", x2: "8", y2: "28" }),
                  /* @__PURE__ */ t.jsx("line", { x1: "16", y1: "4", x2: "16", y2: "28" }),
                  /* @__PURE__ */ t.jsx("line", { x1: "24", y1: "4", x2: "24", y2: "28" }),
                  /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "8", x2: "28", y2: "8" }),
                  /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "16", x2: "28", y2: "16" }),
                  /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "24", x2: "28", y2: "24" })
                ] }),
                /* @__PURE__ */ t.jsxs("g", { stroke: "#FFFFFF", strokeWidth: "1", children: [
                  /* @__PURE__ */ t.jsx("line", { x1: "16", y1: "4", x2: "16", y2: "28" }),
                  /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "16", x2: "28", y2: "16" })
                ] }),
                /* @__PURE__ */ t.jsx("line", { x1: "16", y1: "16", x2: "24", y2: "8", stroke: "#22C55E", strokeWidth: "2" }),
                /* @__PURE__ */ t.jsx("circle", { cx: "16", cy: "16", r: "2", fill: "#FFFFFF" }),
                /* @__PURE__ */ t.jsx("circle", { cx: "24", cy: "8", r: "1.5", fill: "#22C55E" })
              ] }),
              /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-bold text-gray-900", children: "About Grix" })
            ] }),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: () => e(!1),
                className: "text-gray-400 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ t.jsx("span", { className: "text-xl", children: "✕" })
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Mathematical Visualization Playground" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-gray-600 leading-relaxed", children: "Grix is a playground-first mathematical grid system that scales from 3rd-grade fractions to professional linear algebra. Explore slopes, areas, trigonometry, functions, and more through interactive visual learning." })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("h4", { className: "text-md font-semibold text-gray-800 mb-2", children: "Key Features" }),
              /* @__PURE__ */ t.jsxs("ul", { className: "text-gray-600 space-y-1 text-sm", children: [
                /* @__PURE__ */ t.jsx("li", { children: "• Interactive mathematical shapes and functions" }),
                /* @__PURE__ */ t.jsx("li", { children: "• Real-time visualization of mathematical concepts" }),
                /* @__PURE__ */ t.jsx("li", { children: "• Educational features for fractions, geometry, and algebra" }),
                /* @__PURE__ */ t.jsx("li", { children: "• Touch-friendly interface for tablets and mobile devices" }),
                /* @__PURE__ */ t.jsx("li", { children: "• Progressive complexity from elementary to advanced math" })
              ] })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: [
              /* @__PURE__ */ t.jsx("h4", { className: "text-md font-semibold text-green-800 mb-2", children: "🌟 Free & Open Source" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-green-700 text-sm mb-3", children: "Grix is completely free to use and open source under the MIT License. Anyone can contribute, modify, or use it for educational purposes." }),
              /* @__PURE__ */ t.jsxs(
                "a",
                {
                  href: "https://github.com/getgrix/grix",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium text-sm underline",
                  children: [
                    /* @__PURE__ */ t.jsx("span", { children: "📁" }),
                    "View on GitHub"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("h4", { className: "text-md font-semibold text-gray-800 mb-2", children: "Get in Touch" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-gray-600 text-sm mb-2", children: "Have questions, suggestions, or want to contribute? We'd love to hear from you!" }),
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-500", children: "📧" }),
                /* @__PURE__ */ t.jsx(
                  "span",
                  {
                    className: "text-sm text-blue-600 cursor-pointer hover:text-blue-800",
                    onClick: () => {
                      const i = o;
                      window.location.href = `mailto:${i}?subject=Grix Feedback`;
                    },
                    title: "Click to send email",
                    children: o
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "pt-4 border-t border-gray-200", children: /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Made with ❤️ for mathematical learning" }) })
          ] })
        ]
      }
    ) })
  ] });
}
const Et = (r, e) => {
  const s = e * Math.PI / 180, n = Math.cos(s), o = Math.sin(s);
  return {
    x: r.x * n - r.y * o,
    y: r.x * o + r.y * n
  };
}, os = (r, e) => ({
  x: r.x * e,
  y: r.y * e
}), At = (r, e) => {
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
}, as = pt((r, e) => ({
  isTransforming: !1,
  activeTransform: null,
  selectedObject: null,
  rotateObject: (s, n, o) => {
    if (!o) {
      console.log(`No canvas API provided for rotation of ${s}`);
      return;
    }
    const i = o.getObject(s);
    if (i) {
      if (i.type === "ray") {
        if (Math.abs(i.properties.startPoint.x) < 1e-3 && Math.abs(i.properties.startPoint.y) < 1e-3) {
          const a = Et(i.properties.endPoint, n);
          o.updateObject(s, {
            properties: {
              ...i.properties,
              endPoint: a
            }
          });
        }
      } else if (i.type === "rectangle") {
        const c = i.properties.x + i.properties.width / 2, a = i.properties.y + i.properties.height / 2, h = {
          x: i.properties.x - c,
          y: i.properties.y - a
        }, x = Et(h, n);
        o.updateObject(s, {
          properties: {
            ...i.properties,
            x: x.x + c,
            y: x.y + a
          }
        });
      }
    }
  },
  scaleObject: (s, n, o) => {
    if (!o) {
      console.log(`No canvas API provided for scaling of ${s}`);
      return;
    }
    const i = o.getObject(s);
    if (i)
      if (i.type === "ray") {
        if (Math.abs(i.properties.startPoint.x) < 1e-3 && Math.abs(i.properties.startPoint.y) < 1e-3) {
          const a = os(i.properties.endPoint, n);
          o.updateObject(s, {
            properties: {
              ...i.properties,
              endPoint: a
            }
          });
        }
      } else i.type === "rectangle" && o.updateObject(s, {
        properties: {
          ...i.properties,
          width: i.properties.width * n,
          height: i.properties.height * n,
          area: i.properties.width * n * i.properties.height * n
        }
      });
  },
  reflectObject: (s, n, o) => {
    if (!o) {
      console.log(`No canvas API provided for reflection of ${s}`);
      return;
    }
    const i = o.getObject(s);
    if (i) {
      if (i.type === "ray") {
        if (Math.abs(i.properties.startPoint.x) < 1e-3 && Math.abs(i.properties.startPoint.y) < 1e-3) {
          const a = At(i.properties.endPoint, n);
          o.updateObject(s, {
            properties: {
              ...i.properties,
              endPoint: a
            }
          });
        }
      } else if (i.type === "rectangle") {
        const c = At({ x: i.properties.x, y: i.properties.y }, n);
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
  rotate90: (s, n) => {
    e().rotateObject(s, 90, n);
  },
  rotate180: (s, n) => {
    e().rotateObject(s, 180, n);
  },
  rotate270: (s, n) => {
    e().rotateObject(s, 270, n);
  },
  setActiveTransform: (s) => {
    r({
      activeTransform: s,
      isTransforming: s !== null
    });
  },
  setSelectedObject: (s) => {
    r({ selectedObject: s });
  },
  clearTransform: () => {
    r({
      isTransforming: !1,
      activeTransform: null,
      selectedObject: null
    });
  }
}));
function cs({
  width: r = 800,
  height: e = 600,
  className: s = "",
  onObjectInteraction: n
}) {
  const o = We(null), {
    viewport: i,
    setViewport: c,
    objects: a,
    selectedObjects: h,
    snapToGrid: x,
    gridDensity: C,
    canvasSize: k,
    setCanvasSize: R,
    removeObject: T,
    clearSelection: N,
    selectObject: P,
    screenToWorld: l,
    worldToScreen: m,
    getObject: b,
    updateObject: E
  } = Re(), F = Ht(), { activeTool: z, setActiveTool: V, eventBus: G } = xt(), { rotate90: U, rotate180: le, rotate270: de, scaleObject: Ae, setSelectedObject: g } = as();
  Oe(() => {
    R({ width: r, height: e });
  }, [r, e, R]);
  const j = We({
    isPanning: !1,
    startPoint: { x: 0, y: 0 },
    startCenter: { x: 0, y: 0 }
  }), X = We({
    isDown: !1,
    startPoint: { x: 0, y: 0 },
    hasMoved: !1,
    dragThreshold: 5,
    // pixels
    pendingSelection: null
  }), [ce, Pe] = ne(null), [ve, D] = ne(!1), [me, p] = ne(!1), W = We({
    worldPoint: { x: 0, y: 0 },
    timestamp: 0,
    overlappingObjects: [],
    currentIndex: 0
  }), re = Ee((S, ie = 0.5) => {
    const H = [];
    for (const Y of a) {
      let $ = 0, ee = 1 / 0, y = !1;
      switch (Y.type) {
        case "ray":
          const d = ct(
            S,
            Y.properties.startPoint,
            Y.properties.endPoint
          );
          d <= ie && ($ = 100, ee = d, y = !0);
          break;
        case "rectangle":
          const { x: u, y: M, width: f, height: v } = Y.properties, A = [
            { start: { x: u, y: M }, end: { x: u + f, y: M } },
            // bottom
            { start: { x: u + f, y: M }, end: { x: u + f, y: M + v } },
            // right
            { start: { x: u + f, y: M + v }, end: { x: u, y: M + v } },
            // top
            { start: { x: u, y: M + v }, end: { x: u, y: M } }
            // left
          ];
          let w = 1 / 0;
          for (const _ of A) {
            const K = ct(S, _.start, _.end);
            w = Math.min(w, K);
          }
          w <= ie ? ($ = 100, ee = w, y = !0) : S.x >= u && S.x <= u + f && S.y >= M && S.y <= M + v && ($ = 50, ee = 0, y = !0);
          break;
        case "circle":
          const { center: O, radius: L } = Y.properties, te = Math.sqrt(
            (S.x - O.x) ** 2 + (S.y - O.y) ** 2
          ), we = Ct(S, O, L);
          we <= ie ? ($ = 100, ee = we, y = !0) : te <= L && ($ = 50, ee = L - te, y = !0);
          break;
        case "triangle":
          const { vertices: be } = Y.properties, ze = [
            [be[0], be[1]],
            [be[1], be[2]],
            [be[2], be[0]]
          ];
          let fe = 1 / 0;
          for (const [_, K] of ze) {
            const ge = ct(S, _, K);
            fe = Math.min(fe, ge);
          }
          fe <= ie ? ($ = 100, ee = fe, y = !0) : Mt(S, be) && ($ = 50, ee = 0, y = !0);
          break;
        case "function":
          const B = Y.properties.points;
          if (B && B.length > 1) {
            let _ = 1 / 0;
            for (let K = 0; K < B.length - 1; K++) {
              const ge = B[K], xe = B[K + 1], ue = ct(S, ge, xe);
              _ = Math.min(_, ue);
            }
            _ <= ie && ($ = 100, ee = _, y = !0);
          }
          break;
      }
      y && H.push({ object: Y, priority: $, distance: ee });
    }
    return H.sort((Y, $) => Y.priority !== $.priority ? $.priority - Y.priority : Y.distance !== $.distance ? Y.distance - $.distance : ($.object.zIndex || 0) - (Y.object.zIndex || 0)), H.map((Y) => Y.object);
  }, [a, ct, Mt, Ct]), je = Ee((S) => {
    const ie = { x: S.x, y: S.y };
    X.current = {
      isDown: !0,
      startPoint: ie,
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    };
    const H = l(ie), $ = re(H, 0.5);
    let ee = !1, y = null;
    if ($.length > 0) {
      ee = !0;
      const d = Date.now(), u = W.current, M = Math.abs(H.x - u.worldPoint.x) < 0.1 && Math.abs(H.y - u.worldPoint.y) < 0.1, f = d - u.timestamp < 500;
      if (M && f && u.overlappingObjects.length > 1) {
        const v = (u.currentIndex + 1) % u.overlappingObjects.length, A = u.overlappingObjects[v];
        y = $.find((w) => w.id === A) || $[0], W.current = {
          worldPoint: H,
          timestamp: d,
          overlappingObjects: u.overlappingObjects,
          currentIndex: v
        };
      } else
        y = $[0], W.current = {
          worldPoint: H,
          timestamp: d,
          overlappingObjects: $.map((v) => v.id),
          currentIndex: 0
        };
      X.current.pendingSelection = {
        objectId: y.id,
        type: y.type
      }, P(y.id);
    } else
      W.current = {
        worldPoint: { x: 0, y: 0 },
        timestamp: 0,
        overlappingObjects: [],
        currentIndex: 0
      };
    (!ee && !z || !ee && z) && N(), (z || ee) && F.handlePointerDown(S), !ee && !z && (S.type === "touch" || S.type === "mouse") && (j.current = {
      isPanning: !0,
      startPoint: { x: S.x, y: S.y },
      startCenter: { ...i.center }
    });
  }, [i.center, F, z, V, a, l, m, i.zoom]), Ie = Ee((S) => {
    const ie = { x: S.x, y: S.y };
    if (S.type === "mouse" && z ? Pe(ie) : z || Pe(null), X.current.isDown && !X.current.hasMoved) {
      const H = Math.abs(S.x - X.current.startPoint.x), Y = Math.abs(S.y - X.current.startPoint.y);
      Math.sqrt(H * H + Y * Y) >= X.current.dragThreshold && (X.current.hasMoved = !0, p(!0), X.current.pendingSelection = null);
    }
    if (F.handlePointerMove(S), !z && j.current.isPanning) {
      const H = (S.x - j.current.startPoint.x) / i.zoom, Y = (S.y - j.current.startPoint.y) / i.zoom;
      c({
        center: {
          x: j.current.startCenter.x - H,
          y: j.current.startCenter.y + Y
          // Flip Y for mathematical coordinates
        }
      });
    }
  }, [i.zoom, c, F, z, Pe]), Q = Ee((S) => {
    p(!1), X.current = {
      isDown: !1,
      startPoint: { x: 0, y: 0 },
      hasMoved: !1,
      dragThreshold: 5,
      pendingSelection: null
    }, F.handlePointerUp(S), j.current.isPanning = !1;
  }, [F, V]), Ne = Ee((S) => {
    switch (S.type) {
      case "pinch":
        if (S.scale && S.center) {
          const ie = a.length;
          let H = S.scale;
          if (S.touches && S.touches > 1) {
            const d = /iPad|iPhone|iPod/.test(navigator.userAgent) ? 0.3 : 0.4;
            H = 1 + (S.scale - 1) * d;
          }
          const Y = ie > 50 ? 100 : ie > 20 ? 200 : 500, ee = Math.max(0.1, Math.min(Y, i.zoom * H));
          if (Math.abs(ee - i.zoom) > 1e-3) {
            const y = ee / i.zoom, d = l(S.center), u = {
              x: d.x + (i.center.x - d.x) / y,
              y: d.y + (i.center.y - d.y) / y
            };
            c({
              zoom: ee,
              center: u
            });
          }
        }
        break;
    }
  }, [i.zoom, i.center, c, a.length, l]), { capabilities: _e, touchTargetSize: J } = Ut(
    o,
    {
      onPointerDown: je,
      onPointerMove: Ie,
      onPointerUp: Q,
      onGesture: Ne
    },
    {
      enableGestures: !0,
      preventScrolling: !0
    }
  );
  Oe(() => {
    const S = (H) => {
      switch (H.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
          if (h.length > 0) {
            H.preventDefault();
            const Y = H.shiftKey ? 0.1 : 1;
            let $ = 0, ee = 0;
            switch (H.key) {
              case "ArrowUp":
                ee = Y;
                break;
              case "ArrowDown":
                ee = -Y;
                break;
              case "ArrowLeft":
                $ = -Y;
                break;
              case "ArrowRight":
                $ = Y;
                break;
            }
            h.forEach((y) => {
              const d = b(y);
              if (d)
                switch (d.type) {
                  case "ray":
                    E(y, {
                      properties: {
                        ...d.properties,
                        startPoint: {
                          x: d.properties.startPoint.x + $,
                          y: d.properties.startPoint.y + ee
                        },
                        endPoint: {
                          x: d.properties.endPoint.x + $,
                          y: d.properties.endPoint.y + ee
                        }
                      }
                    });
                    break;
                  case "rectangle":
                    E(y, {
                      properties: {
                        ...d.properties,
                        x: d.properties.x + $,
                        y: d.properties.y + ee
                      }
                    });
                    break;
                  case "circle":
                    E(y, {
                      properties: {
                        ...d.properties,
                        center: {
                          x: d.properties.center.x + $,
                          y: d.properties.center.y + ee
                        }
                      }
                    });
                    break;
                  case "triangle":
                    const u = d.properties.vertices.map((v) => ({
                      x: v.x + $,
                      y: v.y + ee
                    }));
                    E(y, {
                      properties: {
                        ...d.properties,
                        vertices: u
                      }
                    });
                    break;
                  case "function":
                    const M = {
                      min: d.properties.domain.min + $,
                      max: d.properties.domain.max + $
                    }, f = d.properties.points.map((v) => ({
                      x: v.x + $,
                      y: v.y + ee
                    }));
                    E(y, {
                      properties: {
                        ...d.properties,
                        domain: M,
                        points: f
                      }
                    });
                    break;
                }
            });
          }
          break;
        case "Escape":
          z && (G.emit("tool:cancel", { toolId: z }), V(null));
          break;
        case "Delete":
        case "Backspace":
          h.length > 0 && (console.log("Deleting objects:", h), h.forEach((Y) => {
            G.emit("object:removed", { objectId: Y }), T(Y);
          }), N(), V(null));
          break;
        case "r":
        case "R":
          if (h.length > 0 && !H.ctrlKey) {
            H.preventDefault();
            const Y = { getObject: b, updateObject: E };
            h.forEach(($) => {
              H.shiftKey ? de($, Y) : U($, Y);
            });
          }
          break;
        case "f":
        case "F":
          if (h.length > 0 && !H.ctrlKey) {
            H.preventDefault();
            const Y = { getObject: b, updateObject: E };
            h.forEach(($) => {
              le($, Y);
            });
          }
          break;
        case "=":
        case "+":
          if (h.length > 0 && !H.ctrlKey) {
            H.preventDefault();
            const Y = { getObject: b, updateObject: E };
            h.forEach(($) => {
              Ae($, 2, Y);
            });
          }
          break;
        case "-":
        case "_":
          if (h.length > 0 && !H.ctrlKey) {
            H.preventDefault();
            const Y = { getObject: b, updateObject: E };
            h.forEach(($) => {
              Ae($, 0.5, Y);
            });
          }
          break;
      }
    }, ie = (H) => {
      N(), V(null);
    };
    return document.addEventListener("keydown", S), G.on("tool:creation-complete", ie), () => {
      document.removeEventListener("keydown", S), G.off("tool:creation-complete", ie);
    };
  }, [z, V, G, h, T, N]), Oe(() => {
    h.length === 1 && !me ? D(!0) : D(!1);
  }, [h, me]);
  const Z = Ee(() => {
    D(!1);
  }, []), he = Ee(() => {
    h.length > 0 && (h.forEach((S) => {
      G.emit("object:removed", { objectId: S }), T(S);
    }), N());
  }, [h, T, N, G]), pe = Ee((S, ie) => {
    E(S, ie);
  }, [E]), ye = Ee(() => {
    const S = Math.min(1e3, i.zoom * 1.4);
    c({ zoom: S });
  }, [i.zoom, c]), qe = Ee(() => {
    const S = Math.max(0.01, i.zoom / 1.4);
    c({ zoom: S });
  }, [i.zoom, c]), oe = Ee(() => {
    c({ zoom: 20, center: { x: 0, y: 0 } });
  }, [c]), se = Ee(() => {
    c({ center: { x: 0, y: 0 } });
  }, [c]);
  return Oe(() => {
    const S = (H) => {
      H.preventDefault();
      const $ = Re.getState().viewport;
      if (H.ctrlKey || H.metaKey) {
        const ee = H.deltaY > 0 ? 0.9 : 1.1, y = Math.max(0.01, Math.min(1e3, $.zoom * ee));
        c({ zoom: y });
      } else {
        const y = H.shiftKey ? H.deltaY : 0, d = H.shiftKey ? 0 : H.deltaY, u = y * 1 / $.zoom, M = d * 1 / $.zoom;
        c({
          center: {
            x: $.center.x + u,
            y: $.center.y - M
            // subtract because scroll down should move view down
          }
        });
      }
    }, ie = o.current;
    if (ie)
      return ie.addEventListener("wheel", S, { passive: !1 }), () => {
        ie.removeEventListener("wheel", S);
      };
  }, [c]), /* @__PURE__ */ t.jsxs("div", { className: `relative ${s}`, style: { width: r, height: e }, children: [
    /* @__PURE__ */ t.jsxs(
      "svg",
      {
        ref: o,
        width: r,
        height: e,
        className: "absolute inset-0 bg-white",
        style: { touchAction: "none" },
        children: [
          /* @__PURE__ */ t.jsx(
            Kt,
            {
              viewport: i,
              canvasSize: { width: r, height: e },
              worldToScreen: m,
              objects: a
            }
          ),
          /* @__PURE__ */ t.jsx(
            Qt,
            {
              objects: a,
              viewport: i,
              touchTargetSize: J,
              worldToScreen: m,
              selectedObjects: h,
              canvasSize: { width: r, height: e }
            }
          ),
          z && ce && !X.current.isDown && /* @__PURE__ */ t.jsx(
            "circle",
            {
              cx: ce.x,
              cy: ce.y,
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
    /* @__PURE__ */ t.jsx(
      es,
      {
        capabilities: _e,
        viewport: i,
        activeTool: z,
        selectedObjectsCount: h.length
      }
    ),
    /* @__PURE__ */ t.jsx(
      Jt,
      {
        viewport: i,
        onZoomIn: ye,
        onZoomOut: qe,
        onZoomReset: oe,
        onCenterOnly: se
      }
    ),
    ve && h.length === 1 && /* @__PURE__ */ t.jsx(
      ts,
      {
        selectedObject: a.find((S) => S.id === h[0]) || null,
        onDelete: he,
        onUpdate: pe,
        onClose: Z
      }
    ),
    /* @__PURE__ */ t.jsx(ss, {}),
    /* @__PURE__ */ t.jsx(ns, {}),
    /* @__PURE__ */ t.jsx(rs, {}),
    /* @__PURE__ */ t.jsx(is, {})
  ] });
}
const kt = [
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
  },
  {
    id: "function-tool",
    name: "Function Grapher",
    icon: "📈",
    description: "Create function graphs like parabolas, sine waves, and more"
  }
];
function ls({ className: r = "" }) {
  const { activeTool: e, setActiveTool: s } = xt(), [n, o] = ne(!1), i = We(null), c = (C) => {
    s(C), o(!1);
  }, a = () => {
    s(null), o(!1);
  }, h = () => {
    o(!n);
  }, x = kt.find((C) => C.id === e);
  return Oe(() => {
    const C = (k) => {
      i.current && !i.current.contains(k.target) && o(!1);
    };
    if (n)
      return document.addEventListener("mousedown", C, !0), document.addEventListener("touchstart", C, !0), document.addEventListener("click", C, !0), () => {
        document.removeEventListener("mousedown", C, !0), document.removeEventListener("touchstart", C, !0), document.removeEventListener("click", C, !0);
      };
  }, [n]), /* @__PURE__ */ t.jsxs("div", { className: `flex items-center gap-2 p-2 bg-white border-b border-gray-200 ${r}`, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
      /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 32 32", className: "flex-shrink-0", children: [
        /* @__PURE__ */ t.jsx("rect", { width: "32", height: "32", fill: "#2563eb", rx: "6" }),
        /* @__PURE__ */ t.jsxs("g", { stroke: "#60A5FA", strokeWidth: "0.5", opacity: "0.6", children: [
          /* @__PURE__ */ t.jsx("line", { x1: "8", y1: "4", x2: "8", y2: "28" }),
          /* @__PURE__ */ t.jsx("line", { x1: "16", y1: "4", x2: "16", y2: "28" }),
          /* @__PURE__ */ t.jsx("line", { x1: "24", y1: "4", x2: "24", y2: "28" }),
          /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "8", x2: "28", y2: "8" }),
          /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "16", x2: "28", y2: "16" }),
          /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "24", x2: "28", y2: "24" })
        ] }),
        /* @__PURE__ */ t.jsxs("g", { stroke: "#FFFFFF", strokeWidth: "1", children: [
          /* @__PURE__ */ t.jsx("line", { x1: "16", y1: "4", x2: "16", y2: "28" }),
          /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "16", x2: "28", y2: "16" })
        ] }),
        /* @__PURE__ */ t.jsx("line", { x1: "16", y1: "16", x2: "24", y2: "8", stroke: "#22C55E", strokeWidth: "2" }),
        /* @__PURE__ */ t.jsx("circle", { cx: "16", cy: "16", r: "2", fill: "#FFFFFF" }),
        /* @__PURE__ */ t.jsx("circle", { cx: "24", cy: "8", r: "1.5", fill: "#22C55E" })
      ] }),
      /* @__PURE__ */ t.jsx("h1", { className: "text-lg font-semibold text-gray-800", children: "Grix" })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative", ref: i, children: [
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          onClick: h,
          className: `
            flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
            ${e ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}
          `,
          children: [
            /* @__PURE__ */ t.jsx("span", { className: "text-lg", children: "🏗️" }),
            /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium", children: x ? x.name : "Build" }),
            /* @__PURE__ */ t.jsx("span", { className: `text-xs transition-transform ${n ? "rotate-180" : ""}`, children: "▼" })
          ]
        }
      ),
      n && /* @__PURE__ */ t.jsx("div", { className: "build-dropdown absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48 max-h-80 overflow-y-auto", children: /* @__PURE__ */ t.jsxs("div", { className: "build-dropdown-scrollable", children: [
        kt.map((C) => /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: () => c(C.id),
            className: `
                    w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg transition-colors
                    ${e === C.id ? "bg-blue-50 text-blue-700" : "text-gray-700"}
                  `,
            title: C.description,
            children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-lg", children: C.icon }),
              /* @__PURE__ */ t.jsxs("div", { children: [
                /* @__PURE__ */ t.jsx("div", { className: "text-sm font-medium", children: C.name }),
                /* @__PURE__ */ t.jsx("div", { className: "text-xs text-gray-500", children: C.description })
              ] })
            ]
          },
          C.id
        )),
        e && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-100" }),
          /* @__PURE__ */ t.jsxs(
            "button",
            {
              onClick: a,
              className: "w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg transition-colors text-gray-600",
              children: [
                /* @__PURE__ */ t.jsx("span", { className: "text-lg", children: "✕" }),
                /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: "Clear selection" })
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] });
}
class Tt extends Ve.Component {
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
      const n = this.props.fallback;
      return n ? /* @__PURE__ */ t.jsx(n, { error: this.state.error }) : /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-center h-full bg-red-50 text-red-700 p-8", children: /* @__PURE__ */ t.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Something went wrong with the Canvas" }),
        /* @__PURE__ */ t.jsxs("details", { className: "text-sm", children: [
          /* @__PURE__ */ t.jsx("summary", { className: "cursor-pointer mb-2", children: "Error Details" }),
          /* @__PURE__ */ t.jsxs("pre", { className: "whitespace-pre-wrap text-left bg-red-100 p-4 rounded", children: [
            (e = this.state.error) == null ? void 0 : e.toString(),
            (s = this.state.errorInfo) == null ? void 0 : s.componentStack
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
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
class ds {
  constructor() {
    ae(this, "id", "ray-tool");
    ae(this, "name", "Line Builder");
    ae(this, "context");
    ae(this, "state", {
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
      const i = Ge.getState(), c = st(
        s.viewport,
        i.gridScale,
        i.snapPrecision
      );
      return this.context.math.snapToGrid(e, c);
    }
    return e;
  }
  findNearestHandle(e, s = 20) {
    this.context.canvas.screenToWorld(e);
    const n = this.context.canvas.getAllObjects();
    for (const o of n)
      if (o.type === "ray") {
        const i = o, c = this.context.canvas.worldToScreen(i.properties.startPoint), a = this.context.canvas.worldToScreen(i.properties.endPoint), h = this.context.math.distance(e, c), x = this.context.math.distance(e, a);
        if (h <= s)
          return { rayId: i.id, handle: "start" };
        if (x <= s)
          return { rayId: i.id, handle: "end" };
        const C = 8, k = a.x - c.x, R = a.y - c.y, T = Math.sqrt(k * k + R * R);
        if (T > 0) {
          const N = Math.max(0, Math.min(1, ((e.x - c.x) * k + (e.y - c.y) * R) / (T * T))), P = {
            x: c.x + N * k,
            y: c.y + N * R
          };
          if (this.context.math.distance(e, P) <= C)
            return { rayId: i.id, handle: "move" };
        }
      }
    return null;
  }
  onPointerDown(e) {
    const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.findNearestHandle(s);
    if (o) {
      const i = this.context.canvas.getObject(o.rayId), c = this.context.state.getState().selectedObjects;
      if (i && c.includes(o.rayId)) {
        this.state.currentRay = i, this.state.dragTarget = o.handle, this.state.isCreating = !1, o.handle === "move" && (this.state.dragOffset = {
          x: n.x - i.properties.startPoint.x,
          y: n.y - i.properties.startPoint.y
        });
        return;
      }
    }
    if (!this.state.isCreating) {
      if (this.context.state.getState().selectedObjects.some((h) => {
        const x = this.context.canvas.getObject(h);
        return (x == null ? void 0 : x.type) === "ray";
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
  onPointerMove(e) {
    if (!this.state.currentRay) return;
    const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating) {
      const o = this.context.math.slope(this.state.currentRay.properties.startPoint, n), i = n.y - o * n.x;
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: {
          ...this.state.currentRay.properties,
          endPoint: n,
          slope: o,
          yIntercept: isFinite(o) ? i : this.state.currentRay.properties.startPoint.y
        }
      });
    } else if (this.state.dragTarget) {
      const o = this.context.canvas.getObject(this.state.currentRay.id);
      if (!o) return;
      const i = { ...o.properties };
      if (this.state.dragTarget === "start")
        i.startPoint = n;
      else if (this.state.dragTarget === "end")
        i.endPoint = n;
      else if (this.state.dragTarget === "move" && this.state.dragOffset) {
        const c = n.x - this.state.dragOffset.x - o.properties.startPoint.x, a = n.y - this.state.dragOffset.y - o.properties.startPoint.y;
        i.startPoint = {
          x: o.properties.startPoint.x + c,
          y: o.properties.startPoint.y + a
        }, i.endPoint = {
          x: o.properties.endPoint.x + c,
          y: o.properties.endPoint.y + a
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
      const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.state.currentRay.properties.startPoint;
      this.context.math.distance(o, n) < 0.1 ? this.context.canvas.removeObject(this.state.currentRay.id) : (this.context.events.emit("ray:created", {
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
function hs() {
  return new ds();
}
class xs {
  constructor() {
    ae(this, "id", "rectangle-tool");
    ae(this, "name", "Rectangle Builder");
    ae(this, "context");
    ae(this, "state", {
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
      const i = Ge.getState(), c = st(
        s.viewport,
        i.gridScale,
        i.snapPrecision
      );
      return this.context.math.snapToGrid(e, c);
    }
    return e;
  }
  findRectangleAtPoint(e) {
    const s = this.context.canvas.getAllObjects();
    for (const n of s)
      if (n.type === "rectangle") {
        const o = n, { x: i, y: c, width: a, height: h } = o.properties;
        if (e.x >= i && e.x <= i + a && e.y >= c && e.y <= c + h)
          return o;
      }
    return null;
  }
  findNearestCorner(e, s, n = 0.5) {
    const { x: o, y: i, width: c, height: a } = s.properties, h = [
      { point: { x: o, y: i }, type: "corner-bl" },
      // bottom-left
      { point: { x: o + c, y: i }, type: "corner-br" },
      // bottom-right
      { point: { x: o, y: i + a }, type: "corner-tl" },
      // top-left
      { point: { x: o + c, y: i + a }, type: "corner-tr" }
      // top-right
    ];
    for (const x of h)
      if (this.context.math.distance(e, x.point) <= n)
        return x.type;
    return null;
  }
  onPointerDown(e) {
    const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.findRectangleAtPoint(n);
    if (o && this.context.state.getState().selectedObjects.includes(o.id)) {
      const x = this.findNearestCorner(n, o);
      if (x) {
        this.state.currentRectangle = o, this.state.dragTarget = x, this.state.isCreating = !1;
        const { x: C, y: k, width: R, height: T } = o.properties;
        switch (x) {
          case "corner-tl":
            this.state.lockedCorner = { x: C + R, y: k };
            break;
          case "corner-tr":
            this.state.lockedCorner = { x: C, y: k };
            break;
          case "corner-bl":
            this.state.lockedCorner = { x: C + R, y: k + T };
            break;
          case "corner-br":
            this.state.lockedCorner = { x: C, y: k + T };
            break;
        }
        return;
      } else {
        this.state.currentRectangle = o, this.state.dragTarget = "move", this.state.dragOffset = {
          x: n.x - o.properties.x,
          y: n.y - o.properties.y
        }, this.state.isCreating = !1;
        return;
      }
    }
    if (this.context.state.getState().selectedObjects.some((h) => {
      const x = this.context.canvas.getObject(h);
      return (x == null ? void 0 : x.type) === "rectangle";
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
  onPointerMove(e) {
    if (!this.state.currentRectangle) return;
    const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.startPoint) {
      const o = Math.min(this.state.startPoint.x, n.x), i = Math.min(this.state.startPoint.y, n.y), c = Math.abs(n.x - this.state.startPoint.x), a = Math.abs(n.y - this.state.startPoint.y), h = c * a;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: o,
          y: i,
          width: c,
          height: a,
          area: h
        }
      });
    } else if (this.state.dragTarget === "move" && this.state.dragOffset) {
      const o = n.x - this.state.dragOffset.x, i = n.y - this.state.dragOffset.y;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          ...this.state.currentRectangle.properties,
          x: o,
          y: i
        }
      });
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith("corner-") && this.state.lockedCorner) {
      const o = this.state.lockedCorner, i = Math.min(n.x, o.x), c = Math.max(n.x, o.x), a = Math.min(n.y, o.y), h = Math.max(n.y, o.y), x = i, C = a, k = c - i, R = h - a, T = Math.max(0.1, k), N = Math.max(0.1, R), P = T * N;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x,
          y: C,
          width: T,
          height: N,
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
function us() {
  return new xs();
}
class ps {
  constructor() {
    ae(this, "id", "circle-tool");
    ae(this, "name", "Circle Builder");
    ae(this, "context");
    ae(this, "state", {
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
    const s = this.context.state.getState();
    if (s.snapToGrid) {
      if (Math.sqrt(e.x * e.x + e.y * e.y) <= 0.75)
        return { x: 0, y: 0 };
      const i = Ge.getState(), c = st(
        s.viewport,
        i.gridScale,
        i.snapPrecision
      );
      return this.context.math.snapToGrid(e, c);
    }
    return e;
  }
  calculateCircleProperties(e, s) {
    const n = this.context.math.distance(e, s), o = n * 2, i = 2 * Math.PI * n, c = Math.PI * n * n;
    return { radius: n, diameter: o, circumference: i, area: c };
  }
  findCircleAtPoint(e) {
    const s = this.context.canvas.getAllObjects();
    for (const n of s)
      if (n.type === "circle") {
        const o = n;
        if (this.context.math.distance(e, o.properties.center) <= o.properties.radius + 0.5)
          return o;
      }
    return null;
  }
  findNearestHandle(e, s, n = 0.5) {
    const { center: o, radius: i } = s.properties;
    if (this.context.math.distance(e, o) <= n)
      return "center";
    const c = { x: o.x + i, y: o.y };
    return this.context.math.distance(e, c) <= n ? "radius" : null;
  }
  onPointerDown(e) {
    const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.findCircleAtPoint(n);
    if (o && !this.context.state.getState().selectedObjects.includes(o.id))
      return;
    if (o && this.context.state.getState().selectedObjects.includes(o.id)) {
      const x = this.findNearestHandle(n, o);
      if (x) {
        this.state.currentCircle = o, this.state.dragTarget = x, this.state.isCreating = !1, x === "center" && (this.state.dragOffset = {
          x: n.x - o.properties.center.x,
          y: n.y - o.properties.center.y
        });
        return;
      } else {
        this.state.currentCircle = o, this.state.dragTarget = "center", this.state.isCreating = !1, this.state.dragOffset = {
          x: n.x - o.properties.center.x,
          y: n.y - o.properties.center.y
        };
        return;
      }
    }
    if (this.context.state.getState().selectedObjects.some((h) => {
      const x = this.context.canvas.getObject(h);
      return (x == null ? void 0 : x.type) === "circle";
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
  onPointerMove(e) {
    if (!this.state.currentCircle) return;
    const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.center) {
      const o = this.calculateCircleProperties(this.state.center, n);
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          center: this.state.center,
          ...o
        }
      });
    } else if (this.state.dragTarget === "center" && this.state.dragOffset) {
      const o = {
        x: n.x - this.state.dragOffset.x,
        y: n.y - this.state.dragOffset.y
      };
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          ...this.state.currentCircle.properties,
          center: o
        }
      });
    } else if (this.state.dragTarget === "radius") {
      const o = this.state.currentCircle.properties.center, i = this.calculateCircleProperties(o, n);
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          center: o,
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
function gs() {
  return new ps();
}
class ys {
  constructor() {
    ae(this, "id", "triangle-tool");
    ae(this, "name", "Triangle Builder");
    ae(this, "context");
    ae(this, "state", {
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
    const s = this.context.state.getState();
    if (s.snapToGrid) {
      if (Math.sqrt(e.x * e.x + e.y * e.y) <= 0.75)
        return { x: 0, y: 0 };
      const i = Ge.getState(), c = st(
        s.viewport,
        i.gridScale,
        i.snapPrecision
      );
      return this.context.math.snapToGrid(e, c);
    }
    return e;
  }
  calculateTriangleProperties(e) {
    const [s, n, o] = e, i = this.context.math.distance(n, o), c = this.context.math.distance(s, o), a = this.context.math.distance(s, n), h = Math.acos((c * c + a * a - i * i) / (2 * c * a)) * 180 / Math.PI, x = Math.acos((i * i + a * a - c * c) / (2 * i * a)) * 180 / Math.PI, C = 180 - h - x, k = Math.abs((n.x - s.x) * (o.y - s.y) - (o.x - s.x) * (n.y - s.y)) / 2, R = i + c + a;
    let T = "scalene";
    const N = 0.1;
    return Math.abs(h - 90) < N || Math.abs(x - 90) < N || Math.abs(C - 90) < N ? T = "right" : h > 90 || x > 90 || C > 90 ? T = "obtuse" : h < 90 && x < 90 && C < 90 && (T = "acute"), Math.abs(i - c) < N && Math.abs(c - a) < N ? T = "equilateral" : (Math.abs(i - c) < N || Math.abs(c - a) < N || Math.abs(i - a) < N) && (T = "isosceles"), {
      sideA: i,
      sideB: c,
      sideC: a,
      angleA: h,
      angleB: x,
      angleC: C,
      area: k,
      perimeter: R,
      type: T
    };
  }
  findTriangleAtPoint(e) {
    const s = this.context.canvas.getAllObjects();
    for (const n of s)
      if (n.type === "triangle") {
        const o = n, [i, c, a] = o.properties.vertices, h = (c.y - a.y) * (i.x - a.x) + (a.x - c.x) * (i.y - a.y), x = ((c.y - a.y) * (e.x - a.x) + (a.x - c.x) * (e.y - a.y)) / h, C = ((a.y - i.y) * (e.x - a.x) + (i.x - a.x) * (e.y - a.y)) / h, k = 1 - x - C;
        if (x >= 0 && C >= 0 && k >= 0)
          return o;
      }
    return null;
  }
  findNearestVertex(e, s, n = 0.5) {
    const o = s.properties.vertices;
    for (let i = 0; i < o.length; i++)
      if (this.context.math.distance(e, o[i]) <= n)
        return `vertex${i}`;
    return null;
  }
  onPointerDown(e) {
    const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.findTriangleAtPoint(n);
    if (o && this.context.state.getState().selectedObjects.includes(o.id)) {
      const c = this.findNearestVertex(n, o);
      if (c) {
        this.state.currentTriangle = o, this.state.dragTarget = c, this.state.isCreating = !1;
        return;
      } else {
        this.state.currentTriangle = o, this.state.dragTarget = "move";
        const a = {
          x: (o.properties.vertices[0].x + o.properties.vertices[1].x + o.properties.vertices[2].x) / 3,
          y: (o.properties.vertices[0].y + o.properties.vertices[1].y + o.properties.vertices[2].y) / 3
        };
        this.state.dragOffset = {
          x: n.x - a.x,
          y: n.y - a.y
        }, this.state.isCreating = !1;
        return;
      }
    }
    if (!this.state.isCreating) {
      if (this.context.state.getState().selectedObjects.some((x) => {
        const C = this.context.canvas.getObject(x);
        return (C == null ? void 0 : C.type) === "triangle";
      }))
        return;
      this.state.isCreating = !0, this.state.creationStep = 0, this.state.vertices = [n, null, null];
      const a = { x: n.x + 3, y: n.y };
      this.state.vertices[1] = a, this.state.creationStep = 1;
      const h = {
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
      this.state.currentTriangle = h, this.context.canvas.addObject(h);
    }
  }
  onPointerMove(e) {
    if (!this.state.currentTriangle) return;
    const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.isCreating && this.state.creationStep === 1) {
      const [o, i] = this.state.vertices;
      if (o && i) {
        const c = { x: i.x, y: n.y }, a = [o, i, c], h = this.calculateTriangleProperties(a);
        this.context.canvas.updateObject(this.state.currentTriangle.id, {
          properties: {
            vertices: a,
            ...h
          }
        });
      }
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith("vertex")) {
      const o = parseInt(this.state.dragTarget.replace("vertex", "")), i = [...this.state.currentTriangle.properties.vertices];
      i[o] = n;
      const c = this.calculateTriangleProperties(i);
      this.context.canvas.updateObject(this.state.currentTriangle.id, {
        properties: {
          vertices: i,
          ...c
        }
      });
    } else if (this.state.dragTarget === "move" && this.state.dragOffset) {
      const o = {
        x: n.x - this.state.dragOffset.x,
        y: n.y - this.state.dragOffset.y
      }, i = {
        x: (this.state.currentTriangle.properties.vertices[0].x + this.state.currentTriangle.properties.vertices[1].x + this.state.currentTriangle.properties.vertices[2].x) / 3,
        y: (this.state.currentTriangle.properties.vertices[0].y + this.state.currentTriangle.properties.vertices[1].y + this.state.currentTriangle.properties.vertices[2].y) / 3
      }, c = {
        x: o.x - i.x,
        y: o.y - i.y
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
  onPointerUp(e) {
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
function fs() {
  return new ys();
}
class ms {
  constructor() {
    ae(this, "id", "function-tool");
    ae(this, "name", "Function Grapher");
    ae(this, "context");
    ae(this, "state", {
      isCreating: !1,
      currentFunction: null,
      dragTarget: null,
      dragOffset: null,
      equation: "x^2",
      functionType: "polynomial"
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
  snapPoint(e) {
    const s = this.context.state.getState();
    if (s.snapToGrid) {
      const n = Ge.getState(), o = st(
        s.viewport,
        n.gridScale,
        n.snapPrecision
      );
      return this.context.math.snapToGrid(e, o);
    }
    return e;
  }
  evaluateFunction(e, s) {
    try {
      const n = e.replace(/\bx\b/g, `(${s})`).replace(/\^/g, "**").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/log/g, "Math.log").replace(/ln/g, "Math.log").replace(/exp/g, "Math.exp").replace(/sqrt/g, "Math.sqrt").replace(/abs/g, "Math.abs").replace(/pi/g, "Math.PI").replace(/e\b/g, "Math.E"), i = new Function("x", `return ${n}`)(s);
      if (typeof i == "number" && !isNaN(i) && isFinite(i))
        return i;
    } catch {
    }
    return null;
  }
  generateFunctionPoints(e, s, n) {
    const o = [], i = (s.max - s.min) / (n * (s.max - s.min));
    for (let c = s.min; c <= s.max; c += i) {
      const a = this.evaluateFunction(e, c);
      a !== null && o.push({ x: c, y: a });
    }
    return o;
  }
  detectFunctionType(e) {
    return e.includes("sin") || e.includes("cos") || e.includes("tan") ? "trigonometric" : e.includes("exp") || e.includes("e^") ? "exponential" : e.includes("log") || e.includes("ln") ? "logarithmic" : /x\^\d+|x\*\*\d+/.test(e) ? "polynomial" : "custom";
  }
  getDefaultEquation(e) {
    switch (e) {
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
  findFunctionAtPoint(e) {
    const s = this.context.canvas.getAllObjects(), n = 0.3;
    for (const o of s)
      if (o.type === "function") {
        const i = o;
        for (let c = 0; c < i.properties.points.length - 1; c++) {
          const a = i.properties.points[c], h = i.properties.points[c + 1];
          if (!a || !h) continue;
          const x = h.x - a.x, C = h.y - a.y, k = Math.sqrt(x * x + C * C);
          if (k === 0) continue;
          const R = Math.max(0, Math.min(1, ((e.x - a.x) * x + (e.y - a.y) * C) / (k * k))), T = {
            x: a.x + R * x,
            y: a.y + R * C
          };
          if (Math.sqrt(
            (e.x - T.x) ** 2 + (e.y - T.y) ** 2
          ) <= n)
            return i;
        }
      }
    return null;
  }
  onPointerDown(e) {
    const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s)), o = this.findFunctionAtPoint(n);
    if (o && this.context.state.getState().selectedObjects.includes(o.id)) {
      const c = o.properties.domain, a = this.evaluateFunction(o.properties.equation, c.min), h = this.evaluateFunction(o.properties.equation, c.max);
      if (a !== null && Math.abs(n.x - c.min) < 0.5 && Math.abs(n.y - a) < 0.5) {
        this.state.currentFunction = o, this.state.dragTarget = "domain-start", this.state.isCreating = !1;
        return;
      } else if (h !== null && Math.abs(n.x - c.max) < 0.5 && Math.abs(n.y - h) < 0.5) {
        this.state.currentFunction = o, this.state.dragTarget = "domain-end", this.state.isCreating = !1;
        return;
      } else {
        this.state.currentFunction = o, this.state.dragTarget = "move", this.state.dragOffset = { x: 0, y: 0 }, this.state.isCreating = !1;
        return;
      }
    }
    if (!this.state.isCreating) {
      if (this.context.state.getState().selectedObjects.some((k) => {
        const R = this.context.canvas.getObject(k);
        return (R == null ? void 0 : R.type) === "function";
      }))
        return;
      this.state.isCreating = !0, this.state.equation = this.getDefaultEquation(this.state.functionType);
      const a = 8, h = {
        min: n.x - a / 2,
        max: n.x + a / 2
      }, x = this.generateFunctionPoints(this.state.equation, h, 20), C = {
        id: this.generateId(),
        type: "function",
        properties: {
          equation: this.state.equation,
          functionType: this.detectFunctionType(this.state.equation),
          domain: h,
          points: x,
          resolution: 20,
          color: "#2563eb",
          strokeWidth: 2
        },
        visible: !0,
        selected: !1,
        zIndex: 0
      };
      this.state.currentFunction = C, this.context.canvas.addObject(C);
    }
  }
  onPointerMove(e) {
    if (!this.state.currentFunction) return;
    const s = { x: e.x, y: e.y }, n = this.snapPoint(this.context.canvas.screenToWorld(s));
    if (this.state.dragTarget === "domain-start") {
      const o = {
        min: Math.min(n.x, this.state.currentFunction.properties.domain.max - 0.1),
        max: this.state.currentFunction.properties.domain.max
      }, i = this.generateFunctionPoints(
        this.state.currentFunction.properties.equation,
        o,
        this.state.currentFunction.properties.resolution
      );
      this.context.canvas.updateObject(this.state.currentFunction.id, {
        properties: {
          ...this.state.currentFunction.properties,
          domain: o,
          points: i
        }
      });
    } else if (this.state.dragTarget === "domain-end") {
      const o = {
        min: this.state.currentFunction.properties.domain.min,
        max: Math.max(n.x, this.state.currentFunction.properties.domain.min + 0.1)
      }, i = this.generateFunctionPoints(
        this.state.currentFunction.properties.equation,
        o,
        this.state.currentFunction.properties.resolution
      );
      this.context.canvas.updateObject(this.state.currentFunction.id, {
        properties: {
          ...this.state.currentFunction.properties,
          domain: o,
          points: i
        }
      });
    } else if (this.state.dragTarget === "move") {
      if (!this.state.dragOffset) {
        const h = (this.state.currentFunction.properties.domain.min + this.state.currentFunction.properties.domain.max) / 2;
        this.state.dragOffset = { x: n.x - h, y: 0 };
      }
      (this.state.currentFunction.properties.domain.min + this.state.currentFunction.properties.domain.max) / 2;
      const o = n.x - this.state.dragOffset.x, i = this.state.currentFunction.properties.domain.max - this.state.currentFunction.properties.domain.min, c = {
        min: o - i / 2,
        max: o + i / 2
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
  onPointerUp(e) {
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
function bs() {
  return new ms();
}
class vs {
  constructor() {
    ae(this, "id", "area-counter");
    ae(this, "name", "Area Counter");
    ae(this, "context");
    ae(this, "badges", /* @__PURE__ */ new Map());
    ae(this, "badgeElements", /* @__PURE__ */ new Map());
  }
  init(e) {
    this.context = e, e.events.on("rectangle:created", this.handleRectangleCreated.bind(this)), e.events.on("rectangle:update", this.handleRectangleUpdated.bind(this)), e.events.on("object:removed", this.handleObjectRemoved.bind(this)), this.createBadgesForExistingRectangles();
    const s = e.state.subscribe((n) => {
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
    const n = e.x + e.width / 2, o = e.y + e.height / 2, i = this.context.canvas.worldToScreen({ x: n, y: o }), c = this.formatArea(e.area, e.width, e.height);
    s.textContent = c;
    const a = s.getBoundingClientRect();
    s.style.left = `${i.x - a.width / 2}px`, s.style.top = `${i.y - a.height / 2}px`, s.style.display = "none";
  }
  formatArea(e, s, n) {
    return "";
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
      const n = this.badgeElements.get(e);
      n && (n.style.display = "none");
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
function js() {
  return new vs();
}
function ws() {
  const { registerPlugin: r } = xt(), e = We(!1);
  return Oe(() => {
    if (e.current) return;
    const s = hs(), n = us(), o = gs(), i = fs(), c = bs(), a = js();
    return r(s), r(n), r(o), r(i), r(c), r(a), e.current = !0, () => {
    };
  }, [r]), /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col h-screen bg-gray-50", children: [
    /* @__PURE__ */ t.jsx(ls, {}),
    /* @__PURE__ */ t.jsx("div", { className: "flex-1 relative", "data-grix-canvas": !0, children: /* @__PURE__ */ t.jsx(
      cs,
      {
        width: window.innerWidth,
        height: window.innerHeight - 60,
        className: "absolute inset-0"
      }
    ) })
  ] });
}
function Ps() {
  return /* @__PURE__ */ t.jsx(Tt, { children: /* @__PURE__ */ t.jsx(Xt, { children: /* @__PURE__ */ t.jsx(Tt, { children: /* @__PURE__ */ t.jsx(ws, {}) }) }) });
}
const Ss = "0.1.0";
export {
  cs as Canvas,
  Ps as GrixApp,
  Xt as PluginManagerProvider,
  ls as ToolBar,
  js as createAreaCounter,
  hs as createRayTool,
  us as createRectangleTool,
  Re as useCanvasStore,
  Ut as useInputSystem,
  xt as usePluginManager,
  Ss as version
};
