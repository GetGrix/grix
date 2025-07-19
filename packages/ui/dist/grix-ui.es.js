var pe = Object.defineProperty;
var fe = (n, e, t) =>
  e in n
    ? pe(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var _ = (n, e, t) => fe(n, typeof e != "symbol" ? e + "" : e, t);
import se, {
  createContext as xe,
  useState as I,
  useEffect as X,
  useContext as ye,
  useCallback as D,
  useRef as ie,
} from "react";
var ee = { exports: {} },
  V = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function me() {
  if (ae) return V;
  ae = 1;
  var n = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.fragment");
  function t(r, i, o) {
    var a = null;
    if (
      (o !== void 0 && (a = "" + o),
      i.key !== void 0 && (a = "" + i.key),
      "key" in i)
    ) {
      o = {};
      for (var u in i) u !== "key" && (o[u] = i[u]);
    } else o = i;
    return (
      (i = o.ref),
      {
        $$typeof: n,
        type: r,
        key: a,
        ref: i !== void 0 ? i : null,
        props: o,
      }
    );
  }
  return (V.Fragment = e), (V.jsx = t), (V.jsxs = t), V;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function be() {
  return (
    ce ||
      ((ce = 1),
      process.env.NODE_ENV !== "production" &&
        (function () {
          function n(s) {
            if (s == null) return null;
            if (typeof s == "function")
              return s.$$typeof === q ? null : s.displayName || s.name || null;
            if (typeof s == "string") return s;
            switch (s) {
              case S:
                return "Fragment";
              case v:
                return "Profiler";
              case d:
                return "StrictMode";
              case O:
                return "Suspense";
              case y:
                return "SuspenseList";
              case k:
                return "Activity";
            }
            if (typeof s == "object")
              switch (
                (typeof s.tag == "number" &&
                  console.error(
                    "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
                  ),
                s.$$typeof)
              ) {
                case x:
                  return "Portal";
                case m:
                  return (s.displayName || "Context") + ".Provider";
                case T:
                  return (s._context.displayName || "Context") + ".Consumer";
                case f:
                  var g = s.render;
                  return (
                    (s = s.displayName),
                    s ||
                      ((s = g.displayName || g.name || ""),
                      (s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef")),
                    s
                  );
                case z:
                  return (
                    (g = s.displayName || null),
                    g !== null ? g : n(s.type) || "Memo"
                  );
                case G:
                  (g = s._payload), (s = s._init);
                  try {
                    return n(s(g));
                  } catch {}
              }
            return null;
          }
          function e(s) {
            return "" + s;
          }
          function t(s) {
            try {
              e(s);
              var g = !1;
            } catch {
              g = !0;
            }
            if (g) {
              g = console;
              var w = g.error,
                A =
                  (typeof Symbol == "function" &&
                    Symbol.toStringTag &&
                    s[Symbol.toStringTag]) ||
                  s.constructor.name ||
                  "Object";
              return (
                w.call(
                  g,
                  "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
                  A
                ),
                e(s)
              );
            }
          }
          function r(s) {
            if (s === S) return "<>";
            if (typeof s == "object" && s !== null && s.$$typeof === G)
              return "<...>";
            try {
              var g = n(s);
              return g ? "<" + g + ">" : "<...>";
            } catch {
              return "<...>";
            }
          }
          function i() {
            var s = $.A;
            return s === null ? null : s.getOwner();
          }
          function o() {
            return Error("react-stack-top-frame");
          }
          function a(s) {
            if (Y.call(s, "key")) {
              var g = Object.getOwnPropertyDescriptor(s, "key").get;
              if (g && g.isReactWarning) return !1;
            }
            return s.key !== void 0;
          }
          function u(s, g) {
            function w() {
              H ||
                ((H = !0),
                console.error(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
                  g
                ));
            }
            (w.isReactWarning = !0),
              Object.defineProperty(s, "key", {
                get: w,
                configurable: !0,
              });
          }
          function p() {
            var s = n(this.type);
            return (
              K[s] ||
                ((K[s] = !0),
                console.error(
                  "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
                )),
              (s = this.props.ref),
              s !== void 0 ? s : null
            );
          }
          function b(s, g, w, A, B, N, te, ne) {
            return (
              (w = N.ref),
              (s = {
                $$typeof: c,
                type: s,
                key: g,
                props: N,
                _owner: B,
              }),
              (w !== void 0 ? w : null) !== null
                ? Object.defineProperty(s, "ref", {
                    enumerable: !1,
                    get: p,
                  })
                : Object.defineProperty(s, "ref", {
                    enumerable: !1,
                    value: null,
                  }),
              (s._store = {}),
              Object.defineProperty(s._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(s, "_debugInfo", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(s, "_debugStack", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: te,
              }),
              Object.defineProperty(s, "_debugTask", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: ne,
              }),
              Object.freeze && (Object.freeze(s.props), Object.freeze(s)),
              s
            );
          }
          function E(s, g, w, A, B, N, te, ne) {
            var M = g.children;
            if (M !== void 0)
              if (A)
                if (Q(M)) {
                  for (A = 0; A < M.length; A++) P(M[A]);
                  Object.freeze && Object.freeze(M);
                } else
                  console.error(
                    "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                  );
              else P(M);
            if (Y.call(g, "key")) {
              M = n(s);
              var F = Object.keys(g).filter(function (ge) {
                return ge !== "key";
              });
              (A =
                0 < F.length
                  ? "{key: someKey, " + F.join(": ..., ") + ": ...}"
                  : "{key: someKey}"),
                j[M + A] ||
                  ((F =
                    0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}"),
                  console.error(
                    `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                    A,
                    M,
                    F,
                    M
                  ),
                  (j[M + A] = !0));
            }
            if (
              ((M = null),
              w !== void 0 && (t(w), (M = "" + w)),
              a(g) && (t(g.key), (M = "" + g.key)),
              "key" in g)
            ) {
              w = {};
              for (var re in g) re !== "key" && (w[re] = g[re]);
            } else w = g;
            return (
              M &&
                u(
                  w,
                  typeof s == "function"
                    ? s.displayName || s.name || "Unknown"
                    : s
                ),
              b(s, M, N, B, i(), w, te, ne)
            );
          }
          function P(s) {
            typeof s == "object" &&
              s !== null &&
              s.$$typeof === c &&
              s._store &&
              (s._store.validated = 1);
          }
          var C = se,
            c = Symbol.for("react.transitional.element"),
            x = Symbol.for("react.portal"),
            S = Symbol.for("react.fragment"),
            d = Symbol.for("react.strict_mode"),
            v = Symbol.for("react.profiler"),
            T = Symbol.for("react.consumer"),
            m = Symbol.for("react.context"),
            f = Symbol.for("react.forward_ref"),
            O = Symbol.for("react.suspense"),
            y = Symbol.for("react.suspense_list"),
            z = Symbol.for("react.memo"),
            G = Symbol.for("react.lazy"),
            k = Symbol.for("react.activity"),
            q = Symbol.for("react.client.reference"),
            $ =
              C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            Y = Object.prototype.hasOwnProperty,
            Q = Array.isArray,
            W = console.createTask
              ? console.createTask
              : function () {
                  return null;
                };
          C = {
            "react-stack-bottom-frame": function (s) {
              return s();
            },
          };
          var H,
            K = {},
            h = C["react-stack-bottom-frame"].bind(C, o)(),
            R = W(r(o)),
            j = {};
          (J.Fragment = S),
            (J.jsx = function (s, g, w, A, B) {
              var N = 1e4 > $.recentlyCreatedOwnerStacks++;
              return E(
                s,
                g,
                w,
                !1,
                A,
                B,
                N ? Error("react-stack-top-frame") : h,
                N ? W(r(s)) : R
              );
            }),
            (J.jsxs = function (s, g, w, A, B) {
              var N = 1e4 > $.recentlyCreatedOwnerStacks++;
              return E(
                s,
                g,
                w,
                !0,
                A,
                B,
                N ? Error("react-stack-top-frame") : h,
                N ? W(r(s)) : R
              );
            });
        })()),
    J
  );
}
var le;
function ve() {
  return (
    le ||
      ((le = 1),
      process.env.NODE_ENV === "production"
        ? (ee.exports = me())
        : (ee.exports = be())),
    ee.exports
  );
}
var l = ve();
const L = {
    // Vector operations
    distance(n, e) {
      const t = e.x - n.x,
        r = e.y - n.y;
      return Math.sqrt(t * t + r * r);
    },
    slope(n, e) {
      const t = e.x - n.x,
        r = e.y - n.y;
      return Math.abs(t) < Number.EPSILON
        ? t === 0 || t > 0
          ? 1 / 0
          : -1 / 0
        : r / t;
    },
    angle(n, e) {
      const t = e.x - n.x,
        r = e.y - n.y;
      return Math.atan2(r, t);
    },
    magnitude(n) {
      return Math.sqrt(n.x * n.x + n.y * n.y);
    },
    normalize(n) {
      const e = this.magnitude(n);
      return e === 0 ? { x: 0, y: 0 } : { x: n.x / e, y: n.y / e };
    },
    // Grid operations
    snapToGrid(n, e) {
      return {
        x: Math.round(n.x / e) * e,
        y: Math.round(n.y / e) * e,
      };
    },
    // Rectangle operations
    calculateArea(n) {
      return Math.abs(n.properties.width * n.properties.height);
    },
    boundsContainPoint(n, e) {
      return (
        e.x >= n.x &&
        e.x <= n.x + n.width &&
        e.y >= n.y &&
        e.y <= n.y + n.height
      );
    },
    boundsIntersect(n, e) {
      return !(
        n.x + n.width < e.x ||
        e.x + e.width < n.x ||
        n.y + n.height < e.y ||
        e.y + e.height < n.y
      );
    },
    // Fraction utilities for educational features
    gcd(n, e) {
      for (n = Math.abs(n), e = Math.abs(e); e !== 0; ) {
        const t = e;
        (e = n % e), (n = t);
      }
      return n;
    },
    simplifyFraction(n, e) {
      if (e === 0) return [n, 1];
      const t = this.gcd(n, e);
      return [n / t, e / t];
    },
    // Coordinate transformations
    worldToScreen(n, e, t) {
      const r = t.width / 2,
        i = t.height / 2,
        o = (n.x - e.center.x) * e.zoom,
        a = (n.y - e.center.y) * e.zoom;
      return {
        x: r + o,
        y: i - a,
        // Flip Y axis for mathematical coordinates
      };
    },
    screenToWorld(n, e, t) {
      const r = t.width / 2,
        i = t.height / 2,
        o = (n.x - r) / e.zoom,
        a = (i - n.y) / e.zoom;
      return {
        x: e.center.x + o,
        y: e.center.y + a,
      };
    },
  },
  U = {
    // Detect device capabilities
    detectCapabilities() {
      const n = "ontouchstart" in window || navigator.maxTouchPoints > 0,
        e = n && navigator.maxTouchPoints > 1,
        t = !0,
        r = window.matchMedia("(hover: hover)").matches;
      return {
        hasTouch: n,
        hasPencil: e,
        hasKeyboard: t,
        hasHover: r,
        maxTouchPoints: navigator.maxTouchPoints || 0,
        supportsPressure: "force" in Touch.prototype,
        supportsTilt: "altitudeAngle" in Touch.prototype,
      };
    },
    // Normalize pointer events across input types
    normalizePointerEvent(n) {
      let e = "mouse";
      return (
        n.pointerType === "touch"
          ? (e = "touch")
          : n.pointerType === "pen" && (e = "pen"),
        {
          type: e,
          pressure: n.pressure || 0,
          tiltX: n.tiltX || 0,
          tiltY: n.tiltY || 0,
          x: n.clientX,
          y: n.clientY,
          timestamp: n.timeStamp,
          isPrimary: n.isPrimary,
          pointerId: n.pointerId,
        }
      );
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
    },
  };
class Pe {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
  }
  on(e, t) {
    this.listeners.has(e) || this.listeners.set(e, []),
      this.listeners.get(e).push(t);
  }
  off(e, t) {
    const r = this.listeners.get(e);
    if (r) {
      const i = r.indexOf(t);
      i > -1 && r.splice(i, 1);
    }
  }
  emit(e, t) {
    const r = this.listeners.get(e);
    r &&
      r.forEach((i) => {
        try {
          i(t);
        } catch (o) {
          console.error(`Error in event handler for ${e}:`, o);
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
const ue = (n) => {
    let e;
    const t = /* @__PURE__ */ new Set(),
      r = (b, E) => {
        const P = typeof b == "function" ? b(e) : b;
        if (!Object.is(P, e)) {
          const C = e;
          (e =
            E ?? (typeof P != "object" || P === null)
              ? P
              : Object.assign({}, e, P)),
            t.forEach((c) => c(e, C));
        }
      },
      i = () => e,
      u = {
        setState: r,
        getState: i,
        getInitialState: () => p,
        subscribe: (b) => (t.add(b), () => t.delete(b)),
      },
      p = (e = n(r, i, u));
    return u;
  },
  Te = (n) => (n ? ue(n) : ue),
  je = (n) => n;
function we(n, e = je) {
  const t = se.useSyncExternalStore(
    n.subscribe,
    () => e(n.getState()),
    () => e(n.getInitialState())
  );
  return se.useDebugValue(t), t;
}
const Se = (n) => {
    const e = Te(n),
      t = (r) => we(e, r);
    return Object.assign(t, e), t;
  },
  Ee = (n) => Se,
  Re = (n) => (e, t, r) => {
    const i = r.subscribe;
    return (
      (r.subscribe = (a, u, p) => {
        let b = a;
        if (u) {
          const E = (p == null ? void 0 : p.equalityFn) || Object.is;
          let P = a(r.getState());
          (b = (C) => {
            const c = a(C);
            if (!E(P, c)) {
              const x = P;
              u((P = c), x);
            }
          }),
            p != null && p.fireImmediately && u(P, P);
        }
        return i(b);
      }),
      n(e, t, r)
    );
  },
  Oe = Re,
  Z = Ee()(
    Oe((n, e) => ({
      // Initial state
      viewport: {
        center: { x: 0, y: 0 },
        zoom: 20,
        // Start zoomed in so grid is visible
        bounds: { x: -10, y: -10, width: 20, height: 20 },
      },
      objects: [],
      selectedObjects: [],
      snapToGrid: !0,
      gridDensity: "fine",
      canvasSize: { width: 800, height: 600 },
      // Viewport actions
      setViewport: (t) => {
        n((r) => ({
          viewport: { ...r.viewport, ...t },
        }));
      },
      // Object management
      addObject: (t) => {
        n((r) => ({
          objects: [...r.objects, t],
        }));
      },
      removeObject: (t) => {
        n((r) => ({
          objects: r.objects.filter((i) => i.id !== t),
          selectedObjects: r.selectedObjects.filter((i) => i !== t),
        }));
      },
      updateObject: (t, r) => {
        n((i) => ({
          objects: i.objects.map((o) => (o.id === t ? { ...o, ...r } : o)),
        }));
      },
      // Selection management
      selectObject: (t, r = !1) => {
        n((i) =>
          r
            ? {
                selectedObjects: i.selectedObjects.includes(t)
                  ? i.selectedObjects.filter((a) => a !== t)
                  : [...i.selectedObjects, t],
              }
            : { selectedObjects: [t] }
        );
      },
      clearSelection: () => {
        n({ selectedObjects: [] });
      },
      // Grid settings
      setSnapToGrid: (t) => {
        n({ snapToGrid: t });
      },
      setGridDensity: (t) => {
        n({ gridDensity: t });
      },
      // Canvas size
      setCanvasSize: (t) => {
        n({ canvasSize: t });
      },
      // Helper methods
      getObject: (t) => e().objects.find((r) => r.id === t),
      getAllObjects: () => e().objects,
      getSelectedObjects: () => {
        const t = e();
        return t.objects.filter((r) => t.selectedObjects.includes(r.id));
      },
      screenToWorld: (t) => {
        const { viewport: r, canvasSize: i } = e();
        return L.screenToWorld(t, r, i);
      },
      worldToScreen: (t) => {
        const { viewport: r, canvasSize: i } = e();
        return L.worldToScreen(t, r, i);
      },
    }))
  ),
  Ce = () => {
    const n = Z.getState();
    return {
      addObject: n.addObject,
      removeObject: n.removeObject,
      updateObject: n.updateObject,
      getObject: n.getObject,
      getAllObjects: n.getAllObjects,
      screenToWorld: n.screenToWorld,
      worldToScreen: n.worldToScreen,
    };
  },
  Ae = () => ({
    getState: () => {
      const n = Z.getState();
      return {
        viewport: n.viewport,
        objects: n.objects,
        selectedObjects: n.selectedObjects,
        snapToGrid: n.snapToGrid,
        gridDensity: n.gridDensity,
      };
    },
    setState: (n) => {
      Z.setState(n);
    },
    subscribe: (n) =>
      Z.subscribe(
        (e) => ({
          viewport: e.viewport,
          objects: e.objects,
          selectedObjects: e.selectedObjects,
          snapToGrid: e.snapToGrid,
          gridDensity: e.gridDensity,
        }),
        n
      ),
  }),
  he = xe(null);
function oe() {
  const n = ye(he);
  if (!n)
    throw new Error(
      "usePluginManager must be used within PluginManagerProvider"
    );
  return n;
}
function Me({ children: n }) {
  const [e] = I(() => new Pe()),
    [t] = I(() => /* @__PURE__ */ new Map()),
    [r] = I(() => /* @__PURE__ */ new Map()),
    [i, o] = I(null),
    [a] = I(() => Ce()),
    [u] = I(() => Ae()),
    [p] = I(() => ({
      distance: L.distance,
      slope: L.slope,
      snapToGrid: L.snapToGrid,
      calculateArea: L.calculateArea,
    })),
    b = (c) => {
      if (t.has(c.id)) {
        console.warn(`Plugin ${c.id} is already registered`);
        return;
      }
      const x = {
        canvas: a,
        events: e,
        state: u,
        math: p,
      };
      t.set(c.id, c), r.set(c.id, x);
      try {
        c.init(x), console.log(`Plugin ${c.id} initialized successfully`);
      } catch (S) {
        console.error(`Failed to initialize plugin ${c.id}:`, S),
          t.delete(c.id),
          r.delete(c.id);
      }
    },
    E = (c) => {
      var S;
      const x = t.get(c);
      if (x) {
        try {
          (S = x.destroy) == null || S.call(x);
        } catch (d) {
          console.error(`Error destroying plugin ${c}:`, d);
        }
        t.delete(c), r.delete(c), i === c && o(null);
      }
    },
    P = () => Array.from(t.values());
  X(() => {
    e.emit("tool:changed", { previous: null, current: i });
  }, [i, e]),
    X(() => {
      const c = (v) => (T) => {
          var f, O, y;
          const m = i ? t.get(i) : null;
          if (m)
            try {
              switch (v) {
                case "pointer:down":
                  (f = m.onPointerDown) == null || f.call(m, T);
                  break;
                case "pointer:move":
                  (O = m.onPointerMove) == null || O.call(m, T);
                  break;
                case "pointer:up":
                  (y = m.onPointerUp) == null || y.call(m, T);
                  break;
              }
            } catch (z) {
              console.error(`Error in plugin ${i} handling ${v}:`, z);
            }
        },
        x = c("pointer:down"),
        S = c("pointer:move"),
        d = c("pointer:up");
      return (
        e.on("pointer:down", x),
        e.on("pointer:move", S),
        e.on("pointer:up", d),
        () => {
          e.off("pointer:down", x),
            e.off("pointer:move", S),
            e.off("pointer:up", d);
        }
      );
    }, [i, t, e]);
  const C = {
    eventBus: e,
    registerPlugin: b,
    unregisterPlugin: E,
    getActivePlugins: P,
    activeTool: i,
    setActiveTool: o,
  };
  return /* @__PURE__ */ l.jsx(he.Provider, { value: C, children: n });
}
function ke() {
  const { eventBus: n } = oe();
  return {
    handlePointerDown: (i) => {
      n.emit("pointer:down", i);
    },
    handlePointerMove: (i) => {
      n.emit("pointer:move", i);
    },
    handlePointerUp: (i) => {
      n.emit("pointer:up", i);
    },
  };
}
function _e(n, e, t = {}) {
  const [r, i] = I(null),
    [o, a] = I(/* @__PURE__ */ new Map()),
    u = {
      enableGestures: !0,
      touchTargetSize: 44,
      preventScrolling: !0,
      ...t,
    };
  X(() => {
    const d = U.detectCapabilities();
    i(d);
  }, []);
  const [p, b] = I({
      isGesturing: !1,
      startTime: 0,
      startDistance: 0,
      lastTapTime: 0,
      tapCount: 0,
    }),
    E = D((d) => {
      const v = Array.from(d.values());
      if (v.length < 2) return 0;
      const T = v[0],
        m = v[1];
      if (!T || !m) return 0;
      const f = T.x - m.x,
        O = T.y - m.y;
      return Math.sqrt(f * f + O * O);
    }, []),
    P = D((d) => {
      const v = Array.from(d.values());
      if (v.length === 0) return { x: 0, y: 0 };
      const T = v.reduce((m, f) => ({ x: m.x + f.x, y: m.y + f.y }), {
        x: 0,
        y: 0,
      });
      return { x: T.x / v.length, y: T.y / v.length };
    }, []),
    C = D(
      (d) => {
        var T;
        if (!n.current) return;
        u.preventScrolling && d.preventDefault();
        const v = U.normalizePointerEvent(d);
        a((m) => {
          const f = new Map(m);
          if ((f.set(d.pointerId, v), u.enableGestures && f.size >= 2)) {
            const O = E(f);
            b((y) => ({
              ...y,
              isGesturing: !0,
              startTime: d.timeStamp,
              startDistance: O,
            }));
          }
          return f;
        }),
          n.current.setPointerCapture(d.pointerId),
          (T = e.onPointerDown) == null || T.call(e, v);
      },
      [n, e, u, E]
    ),
    c = D(
      (d) => {
        var T;
        const v = U.normalizePointerEvent(d);
        a((m) => {
          var O, y;
          const f = new Map(m);
          if ((f.set(d.pointerId, v), u.enableGestures && f.size >= 2)) {
            const z = E(f),
              G = P(f);
            if (p.isGesturing && p.startDistance > 0) {
              const k = z / p.startDistance;
              (O = e.onGesture) == null ||
                O.call(e, {
                  type: "pinch",
                  center: G,
                  scale: k,
                  touches: f.size,
                });
            }
          } else if (f.size === 1 && p.isGesturing) {
            const z = P(f);
            (y = e.onGesture) == null ||
              y.call(e, {
                type: "pan",
                center: z,
                touches: f.size,
              });
          }
          return f;
        }),
          (T = e.onPointerMove) == null || T.call(e, v);
      },
      [e, u, E, P, p]
    ),
    x = D(
      (d) => {
        var T;
        const v = U.normalizePointerEvent(d);
        a((m) => {
          var O;
          const f = new Map(m);
          if ((f.delete(d.pointerId), u.enableGestures && f.size === 0)) {
            const z = d.timeStamp - p.startTime < 200,
              G = d.timeStamp - p.lastTapTime;
            z &&
              !p.isGesturing &&
              (G < 300
                ? b((k) => ({ ...k, tapCount: k.tapCount + 1 }))
                : ((O = e.onGesture) == null ||
                    O.call(e, {
                      type: "tap",
                      center: { x: v.x, y: v.y },
                      touches: 1,
                    }),
                  b((k) => ({
                    ...k,
                    tapCount: 1,
                    lastTapTime: d.timeStamp,
                  })))),
              b((k) => ({ ...k, isGesturing: !1 }));
          }
          return f;
        }),
          n.current && n.current.releasePointerCapture(d.pointerId),
          (T = e.onPointerUp) == null || T.call(e, v);
      },
      [n, e, u, p]
    ),
    S = D(
      (d) => {
        var T;
        const v = U.normalizePointerEvent(d);
        a((m) => {
          const f = new Map(m);
          return f.delete(d.pointerId), f;
        }),
          b((m) => ({ ...m, isGesturing: !1 })),
          (T = e.onPointerCancel) == null || T.call(e, v);
      },
      [e]
    );
  return (
    X(() => {
      const d = n.current;
      if (!d) return;
      d.addEventListener("pointerdown", C),
        d.addEventListener("pointermove", c),
        d.addEventListener("pointerup", x),
        d.addEventListener("pointercancel", S);
      const v = (T) => T.preventDefault();
      return (
        d.addEventListener("contextmenu", v),
        () => {
          d.removeEventListener("pointerdown", C),
            d.removeEventListener("pointermove", c),
            d.removeEventListener("pointerup", x),
            d.removeEventListener("pointercancel", S),
            d.removeEventListener("contextmenu", v);
        }
      );
    }, [n, C, c, x, S]),
    {
      capabilities: r,
      activePointers: Array.from(o.values()),
      isGesturing: p.isGesturing,
      touchTargetSize: r
        ? U.getTouchTargetSize(r.hasTouch ? "touch" : "mouse")
        : u.touchTargetSize,
    }
  );
}
function ze({
  width: n = 800,
  height: e = 600,
  className: t = "",
  onObjectInteraction: r,
}) {
  const i = ie(null),
    {
      viewport: o,
      setViewport: a,
      objects: u,
      snapToGrid: p,
      gridDensity: b,
      canvasSize: E,
      setCanvasSize: P,
      screenToWorld: C,
      worldToScreen: c,
    } = Z(),
    x = ke();
  X(() => {
    P({ width: n, height: e });
  }, [n, e, P]);
  const S = ie({
      isPanning: !1,
      startPoint: { x: 0, y: 0 },
      startCenter: { x: 0, y: 0 },
    }),
    d = D(
      (h) => {
        x.handlePointerDown(h),
          (h.type === "touch" || h.type === "mouse") &&
            (S.current = {
              isPanning: !0,
              startPoint: { x: h.x, y: h.y },
              startCenter: { ...o.center },
            });
      },
      [o.center, x]
    ),
    v = D(
      (h) => {
        if ((x.handlePointerMove(h), S.current.isPanning)) {
          const R = (h.x - S.current.startPoint.x) / o.zoom,
            j = (h.y - S.current.startPoint.y) / o.zoom;
          a({
            center: {
              x: S.current.startCenter.x - R,
              y: S.current.startCenter.y + j,
              // Flip Y for mathematical coordinates
            },
          });
        }
      },
      [o.zoom, a, x]
    ),
    T = D(
      (h) => {
        x.handlePointerUp(h), (S.current.isPanning = !1);
      },
      [x]
    ),
    m = D(
      (h) => {
        switch (h.type) {
          case "pinch":
            if (h.scale) {
              const R = Math.max(0.1, Math.min(10, o.zoom * h.scale));
              a({ zoom: R });
            }
            break;
        }
      },
      [o.zoom, a]
    ),
    { capabilities: f, touchTargetSize: O } = _e(
      i,
      {
        onPointerDown: d,
        onPointerMove: v,
        onPointerUp: T,
        onGesture: m,
      },
      {
        enableGestures: !0,
        preventScrolling: !0,
      }
    ),
    y = b === "fine" ? 1 : 10,
    G = y * o.zoom >= 8,
    k = {
      left: o.center.x - n / 2 / o.zoom,
      right: o.center.x + n / 2 / o.zoom,
      top: o.center.y + e / 2 / o.zoom,
      bottom: o.center.y - e / 2 / o.zoom,
    },
    q = Math.floor(k.left / y) * y,
    $ = Math.ceil(k.right / y) * y,
    Y = Math.floor(k.bottom / y) * y,
    Q = Math.ceil(k.top / y) * y,
    W = [],
    H = [];
  if (G) {
    for (let h = q; h <= $; h += y) {
      const R = c({ x: h, y: 0 }).x,
        j = Math.abs(h) < y / 2,
        s = h % (y * 5) === 0;
      W.push(
        /* @__PURE__ */ l.jsx(
          "line",
          {
            x1: R,
            y1: 0,
            x2: R,
            y2: e,
            stroke: j ? "#374151" : s ? "#9CA3AF" : "#E5E7EB",
            strokeWidth: j ? 2 : s ? 1 : 0.5,
            opacity: j ? 1 : s ? 0.6 : 0.3,
          },
          `v${h}`
        )
      );
    }
    for (let h = Y; h <= Q; h += y) {
      const R = c({ x: 0, y: h }).y,
        j = Math.abs(h) < y / 2,
        s = h % (y * 5) === 0;
      H.push(
        /* @__PURE__ */ l.jsx(
          "line",
          {
            x1: 0,
            y1: R,
            x2: n,
            y2: R,
            stroke: j ? "#374151" : s ? "#9CA3AF" : "#E5E7EB",
            strokeWidth: j ? 2 : s ? 1 : 0.5,
            opacity: j ? 1 : s ? 0.6 : 0.3,
          },
          `h${h}`
        )
      );
    }
  }
  const K = (h) => {
    switch (h.type) {
      case "ray":
        const R = c(h.properties.startPoint),
          j = c(h.properties.endPoint);
        return /* @__PURE__ */ l.jsxs(
          "g",
          {
            children: [
              /* @__PURE__ */ l.jsx("line", {
                x1: R.x,
                y1: R.y,
                x2: j.x,
                y2: j.y,
                stroke: "#2563eb",
                strokeWidth: 2,
                markerEnd: "url(#arrowhead)",
              }),
              /* @__PURE__ */ l.jsx("circle", {
                cx: R.x,
                cy: R.y,
                r: O / 4,
                fill: "#2563eb",
                style: { cursor: "pointer" },
              }),
              /* @__PURE__ */ l.jsx("circle", {
                cx: j.x,
                cy: j.y,
                r: O / 4,
                fill: "#2563eb",
                style: { cursor: "pointer" },
              }),
            ],
          },
          h.id
        );
      case "rectangle":
        const s = c({
            x: h.properties.x,
            y: h.properties.y + h.properties.height,
          }),
          g = h.properties.width * o.zoom,
          w = h.properties.height * o.zoom;
        return /* @__PURE__ */ l.jsxs(
          "g",
          {
            children: [
              /* @__PURE__ */ l.jsx("rect", {
                x: s.x,
                y: s.y,
                width: g,
                height: w,
                fill: "rgba(34, 197, 94, 0.2)",
                stroke: "#22c55e",
                strokeWidth: 2,
                style: { cursor: "pointer" },
              }),
              /* @__PURE__ */ l.jsx("circle", {
                cx: s.x,
                cy: s.y,
                r: O / 6,
                fill: "#22c55e",
                style: { cursor: "nw-resize" },
              }),
              /* @__PURE__ */ l.jsx("circle", {
                cx: s.x + g,
                cy: s.y + w,
                r: O / 6,
                fill: "#22c55e",
                style: { cursor: "se-resize" },
              }),
            ],
          },
          h.id
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ l.jsxs("div", {
    className: `relative ${t}`,
    style: { width: n, height: e },
    children: [
      /* @__PURE__ */ l.jsxs("svg", {
        ref: i,
        width: n,
        height: e,
        className: "absolute inset-0 bg-white",
        style: { touchAction: "none" },
        children: [
          /* @__PURE__ */ l.jsx("defs", {
            children: /* @__PURE__ */ l.jsx("marker", {
              id: "arrowhead",
              markerWidth: "10",
              markerHeight: "7",
              refX: "9",
              refY: "3.5",
              orient: "auto",
              children: /* @__PURE__ */ l.jsx("polygon", {
                points: "0 0, 10 3.5, 0 7",
                fill: "#2563eb",
              }),
            }),
          }),
          /* @__PURE__ */ l.jsxs("g", { className: "grid", children: [W, H] }),
          /* @__PURE__ */ l.jsx("g", {
            className: "objects",
            children: u.map(K),
          }),
          G &&
            /* @__PURE__ */ l.jsxs("g", {
              className: "labels",
              fontSize: "12",
              fill: "#6B7280",
              children: [
                Array.from({ length: Math.floor(($ - q) / y) + 1 }, (h, R) => {
                  const j = q + R * y;
                  if (Math.abs(j) < y / 2) return null;
                  const s = c({ x: j, y: 0 });
                  return /* @__PURE__ */ l.jsx(
                    "text",
                    {
                      x: s.x,
                      y: s.y + 20,
                      textAnchor: "middle",
                      fontSize: "10",
                      children: j,
                    },
                    `xlabel${j}`
                  );
                }),
                Array.from({ length: Math.floor((Q - Y) / y) + 1 }, (h, R) => {
                  const j = Y + R * y;
                  if (Math.abs(j) < y / 2) return null;
                  const s = c({ x: 0, y: j });
                  return /* @__PURE__ */ l.jsx(
                    "text",
                    {
                      x: s.x - 15,
                      y: s.y + 4,
                      textAnchor: "middle",
                      fontSize: "10",
                      children: j,
                    },
                    `ylabel${j}`
                  );
                }),
                /* @__PURE__ */ l.jsx("text", {
                  x: c({ x: 0, y: 0 }).x + 10,
                  y: c({ x: 0, y: 0 }).y - 10,
                  fontSize: "10",
                  fill: "#374151",
                  children: "(0,0)",
                }),
              ],
            }),
        ],
      }),
      f &&
        /* @__PURE__ */ l.jsxs("div", {
          className:
            "absolute top-2 left-2 text-xs text-gray-500 bg-white/80 p-2 rounded",
          children: [
            /* @__PURE__ */ l.jsxs("div", {
              children: [
                "Input: ",
                f.hasTouch ? "👆" : "🖱️",
                " ",
                f.hasPencil ? "✏️" : "",
              ],
            }),
            /* @__PURE__ */ l.jsxs("div", {
              children: ["Zoom: ", o.zoom.toFixed(2), "x"],
            }),
            /* @__PURE__ */ l.jsxs("div", {
              children: [
                "Center: (",
                o.center.x.toFixed(1),
                ", ",
                o.center.y.toFixed(1),
                ")",
              ],
            }),
          ],
        }),
    ],
  });
}
const de = [
  {
    id: "ray-tool",
    name: "Ray Builder",
    icon: "📏",
    description: "Create and edit rays to explore slopes and fractions",
  },
  {
    id: "rectangle-tool",
    name: "Rectangle Selector",
    icon: "⬜",
    description: "Create rectangles to explore area and multiplication",
  },
];
function Ne({ className: n = "" }) {
  var o;
  const { activeTool: e, setActiveTool: t } = oe(),
    r = (a) => {
      t(e === a ? null : a);
    },
    i = () => {
      t(null);
    };
  return /* @__PURE__ */ l.jsxs("div", {
    className: `flex items-center gap-2 p-2 bg-white border-b border-gray-200 ${n}`,
    children: [
      /* @__PURE__ */ l.jsxs("div", {
        className: "flex items-center gap-2 mr-4",
        children: [
          /* @__PURE__ */ l.jsx("div", {
            className: "text-2xl",
            children: "🟦",
          }),
          /* @__PURE__ */ l.jsx("h1", {
            className: "text-lg font-semibold text-gray-800",
            children: "Grix",
          }),
        ],
      }),
      /* @__PURE__ */ l.jsxs("div", {
        className: "flex items-center gap-1",
        children: [
          de.map((a) =>
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                onClick: () => r(a.id),
                className: `
              flex items-center gap-2 px-3 py-2 rounded-lg border transition-all
              ${
                e === a.id
                  ? "bg-blue-100 border-blue-300 text-blue-700"
                  : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
              }
            `,
                title: a.description,
                children: [
                  /* @__PURE__ */ l.jsx("span", {
                    className: "text-lg",
                    children: a.icon,
                  }),
                  /* @__PURE__ */ l.jsx("span", {
                    className: "text-sm font-medium",
                    children: a.name,
                  }),
                ],
              },
              a.id
            )
          ),
          e &&
            /* @__PURE__ */ l.jsx("button", {
              onClick: i,
              className:
                "ml-2 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all",
              title: "Clear tool selection",
              children: /* @__PURE__ */ l.jsx("span", {
                className: "text-sm",
                children: "✕ Clear",
              }),
            }),
        ],
      }),
      /* @__PURE__ */ l.jsx("div", {
        className: "ml-auto flex items-center gap-4 text-sm text-gray-500",
        children: e
          ? /* @__PURE__ */ l.jsxs("span", {
              className: "flex items-center gap-1",
              children: [
                /* @__PURE__ */ l.jsx("div", {
                  className: "w-2 h-2 bg-green-400 rounded-full",
                }),
                ((o = de.find((a) => a.id === e)) == null ? void 0 : o.name) ||
                  "Active Tool",
              ],
            })
          : /* @__PURE__ */ l.jsxs("span", {
              className: "flex items-center gap-1",
              children: [
                /* @__PURE__ */ l.jsx("div", {
                  className: "w-2 h-2 bg-gray-300 rounded-full",
                }),
                "Select a tool to begin",
              ],
            }),
      }),
    ],
  });
}
class Ie {
  constructor() {
    _(this, "id", "ray-tool");
    _(this, "name", "Ray Builder");
    _(this, "context");
    _(this, "state", {
      isCreating: !1,
      startPoint: null,
      currentRay: null,
      dragTarget: null,
    });
  }
  init(e) {
    (this.context = e),
      e.events.on("tool:changed", this.handleToolChange.bind(this));
  }
  destroy() {
    this.context.events.off("tool:changed", this.handleToolChange.bind(this));
  }
  handleToolChange(e) {
    e.current !== this.id && this.cancelCreation();
  }
  cancelCreation() {
    this.state.currentRay &&
      this.state.isCreating &&
      this.context.canvas.removeObject(this.state.currentRay.id),
      (this.state = {
        isCreating: !1,
        startPoint: null,
        currentRay: null,
        dragTarget: null,
      });
  }
  generateId() {
    return `ray_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  snapPoint(e) {
    const t = this.context.state.getState();
    if (t.snapToGrid) {
      const r = t.gridDensity === "fine" ? 1 : 10;
      return this.context.math.snapToGrid(e, r);
    }
    return e;
  }
  findNearestHandle(e, t = 20) {
    const r = this.context.canvas.screenToWorld(e),
      i = this.context.canvas.getAllObjects();
    for (const o of i)
      if (o.type === "ray") {
        const a = o;
        this.context.math.distance(r, a.properties.startPoint),
          this.context.math.distance(r, a.properties.endPoint);
        const u = this.context.canvas.worldToScreen(a.properties.startPoint),
          p = this.context.canvas.worldToScreen(a.properties.endPoint),
          b = this.context.math.distance(e, u),
          E = this.context.math.distance(e, p);
        if (b <= t) return { rayId: a.id, handle: "start" };
        if (E <= t) return { rayId: a.id, handle: "end" };
      }
    return null;
  }
  onPointerDown(e) {
    const t = { x: e.x, y: e.y },
      r = this.snapPoint(this.context.canvas.screenToWorld(t)),
      i = this.findNearestHandle(t);
    if (i) {
      const o = this.context.canvas.getObject(i.rayId);
      if (o) {
        (this.state.currentRay = o),
          (this.state.dragTarget = i.handle),
          (this.state.isCreating = !1);
        return;
      }
    }
    if (!this.state.isCreating) {
      (this.state.isCreating = !0), (this.state.startPoint = r);
      const o = {
        id: this.generateId(),
        type: "ray",
        properties: {
          startPoint: r,
          endPoint: { ...r },
          // Start with same point
          slope: 0,
          yIntercept: r.y,
        },
        visible: !0,
        selected: !1,
      };
      (this.state.currentRay = o), this.context.canvas.addObject(o);
    }
  }
  onPointerMove(e) {
    if (!this.state.currentRay) return;
    const t = { x: e.x, y: e.y },
      r = this.snapPoint(this.context.canvas.screenToWorld(t));
    if (this.state.isCreating) {
      const i = this.context.math.slope(
          this.state.currentRay.properties.startPoint,
          r
        ),
        o = r.y - i * r.x;
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: {
          ...this.state.currentRay.properties,
          endPoint: r,
          slope: i,
          yIntercept: isFinite(i)
            ? o
            : this.state.currentRay.properties.startPoint.y,
        },
      });
    } else if (this.state.dragTarget) {
      const i = this.context.canvas.getObject(this.state.currentRay.id);
      if (!i) return;
      const o = { ...i.properties };
      this.state.dragTarget === "start" ? (o.startPoint = r) : (o.endPoint = r);
      const a = this.context.math.slope(o.startPoint, o.endPoint);
      (o.slope = a),
        (o.yIntercept = isFinite(a)
          ? o.startPoint.y - a * o.startPoint.x
          : o.startPoint.y),
        this.context.canvas.updateObject(this.state.currentRay.id, {
          properties: o,
        });
    }
    this.context.events.emit("ray:update", {
      rayId: this.state.currentRay.id,
      ray: this.context.canvas.getObject(this.state.currentRay.id),
    });
  }
  onPointerUp(e) {
    if (this.state.isCreating && this.state.currentRay) {
      const t = { x: e.x, y: e.y },
        r = this.snapPoint(this.context.canvas.screenToWorld(t)),
        i = this.state.currentRay.properties.startPoint;
      this.context.math.distance(i, r) < 0.1
        ? this.context.canvas.removeObject(this.state.currentRay.id)
        : this.context.events.emit("ray:created", {
            rayId: this.state.currentRay.id,
            ray: this.state.currentRay,
          });
    }
    this.state = {
      isCreating: !1,
      startPoint: null,
      currentRay: null,
      dragTarget: null,
    };
  }
}
function De() {
  return new Ie();
}
class Ge {
  constructor() {
    _(this, "id", "rectangle-tool");
    _(this, "name", "Rectangle Selector");
    _(this, "context");
    _(this, "state", {
      isCreating: !1,
      startPoint: null,
      currentRectangle: null,
      dragTarget: null,
      dragOffset: null,
    });
  }
  init(e) {
    (this.context = e),
      e.events.on("tool:changed", this.handleToolChange.bind(this));
  }
  destroy() {
    this.context.events.off("tool:changed", this.handleToolChange.bind(this));
  }
  handleToolChange(e) {
    e.current !== this.id && this.cancelCreation();
  }
  cancelCreation() {
    this.state.currentRectangle &&
      this.state.isCreating &&
      this.context.canvas.removeObject(this.state.currentRectangle.id),
      (this.state = {
        isCreating: !1,
        startPoint: null,
        currentRectangle: null,
        dragTarget: null,
        dragOffset: null,
      });
  }
  generateId() {
    return `rect_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  snapPoint(e) {
    const t = this.context.state.getState();
    if (t.snapToGrid) {
      const r = t.gridDensity === "fine" ? 1 : 10;
      return this.context.math.snapToGrid(e, r);
    }
    return e;
  }
  findRectangleAtPoint(e) {
    const t = this.context.canvas.getAllObjects();
    for (const r of t)
      if (r.type === "rectangle") {
        const i = r,
          { x: o, y: a, width: u, height: p } = i.properties;
        if (e.x >= o && e.x <= o + u && e.y >= a && e.y <= a + p) return i;
      }
    return null;
  }
  isNearCorner(e, t, r = 0.5) {
    const { x: i, y: o, width: a, height: u } = t.properties;
    return [
      { x: i, y: o },
      // bottom-left
      { x: i + a, y: o },
      // bottom-right
      { x: i, y: o + u },
      // top-left
      { x: i + a, y: o + u },
      // top-right
    ].some((b) => this.context.math.distance(e, b) <= r);
  }
  onPointerDown(e) {
    const t = { x: e.x, y: e.y },
      r = this.snapPoint(this.context.canvas.screenToWorld(t)),
      i = this.findRectangleAtPoint(r);
    if (i)
      if (this.isNearCorner(r, i)) {
        (this.state.currentRectangle = i),
          (this.state.dragTarget = "corner"),
          (this.state.isCreating = !1);
        return;
      } else {
        (this.state.currentRectangle = i),
          (this.state.dragTarget = "move"),
          (this.state.dragOffset = {
            x: r.x - i.properties.x,
            y: r.y - i.properties.y,
          }),
          (this.state.isCreating = !1);
        return;
      }
    (this.state.isCreating = !0), (this.state.startPoint = r);
    const o = {
      id: this.generateId(),
      type: "rectangle",
      properties: {
        x: r.x,
        y: r.y,
        width: 0,
        height: 0,
        area: 0,
      },
      visible: !0,
      selected: !1,
    };
    (this.state.currentRectangle = o), this.context.canvas.addObject(o);
  }
  onPointerMove(e) {
    if (!this.state.currentRectangle) return;
    const t = { x: e.x, y: e.y },
      r = this.snapPoint(this.context.canvas.screenToWorld(t));
    if (this.state.isCreating && this.state.startPoint) {
      const i = Math.min(this.state.startPoint.x, r.x),
        o = Math.min(this.state.startPoint.y, r.y),
        a = Math.abs(r.x - this.state.startPoint.x),
        u = Math.abs(r.y - this.state.startPoint.y),
        p = a * u;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: i,
          y: o,
          width: a,
          height: u,
          area: p,
        },
      });
    } else if (this.state.dragTarget === "move" && this.state.dragOffset) {
      const i = r.x - this.state.dragOffset.x,
        o = r.y - this.state.dragOffset.y;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          ...this.state.currentRectangle.properties,
          x: i,
          y: o,
        },
      });
    } else if (this.state.dragTarget === "corner") {
      const i = this.context.canvas.getObject(this.state.currentRectangle.id);
      if (!i) return;
      const { x: o, y: a, width: u, height: p } = i.properties,
        b = o + u / 2,
        E = a + p / 2;
      let P = o,
        C = a,
        c = u,
        x = p;
      r.x > b ? (c = r.x - o) : ((P = r.x), (c = o + u - r.x)),
        r.y > E ? (x = r.y - a) : ((C = r.y), (x = a + p - r.y)),
        (c = Math.max(0.1, c)),
        (x = Math.max(0.1, x));
      const S = c * x;
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: P,
          y: C,
          width: c,
          height: x,
          area: S,
        },
      });
    }
    this.context.events.emit("rectangle:update", {
      rectangleId: this.state.currentRectangle.id,
      rectangle: this.context.canvas.getObject(this.state.currentRectangle.id),
    });
  }
  onPointerUp(e) {
    if (this.state.isCreating && this.state.currentRectangle) {
      const t = this.context.canvas.getObject(this.state.currentRectangle.id);
      t &&
        (t.properties.width < 0.1 || t.properties.height < 0.1
          ? this.context.canvas.removeObject(this.state.currentRectangle.id)
          : this.context.events.emit("rectangle:created", {
              rectangleId: this.state.currentRectangle.id,
              rectangle: t,
            }));
    }
    this.state = {
      isCreating: !1,
      startPoint: null,
      currentRectangle: null,
      dragTarget: null,
      dragOffset: null,
    };
  }
}
function Be() {
  return new Ge();
}
class $e {
  constructor() {
    _(this, "id", "area-counter");
    _(this, "name", "Area Counter");
    _(this, "context");
    _(this, "badges", /* @__PURE__ */ new Map());
    _(this, "badgeElements", /* @__PURE__ */ new Map());
  }
  init(e) {
    (this.context = e),
      e.events.on("rectangle:created", this.handleRectangleCreated.bind(this)),
      e.events.on("rectangle:update", this.handleRectangleUpdated.bind(this)),
      e.events.on("object:removed", this.handleObjectRemoved.bind(this)),
      this.createBadgesForExistingRectangles();
    const t = e.state.subscribe((r) => {
      this.updateBadgePositions();
    });
    this.unsubscribeFromState = t;
  }
  destroy() {
    this.context.events.off(
      "rectangle:created",
      this.handleRectangleCreated.bind(this)
    ),
      this.context.events.off(
        "rectangle:update",
        this.handleRectangleUpdated.bind(this)
      ),
      this.context.events.off(
        "object:removed",
        this.handleObjectRemoved.bind(this)
      ),
      this.unsubscribeFromState && this.unsubscribeFromState(),
      this.badgeElements.forEach((e) => {
        e.remove();
      }),
      this.badgeElements.clear(),
      this.badges.clear();
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
      visible: !0,
    };
    this.badges.set(e.id, t), this.createBadgeElement(t);
  }
  updateBadge(e) {
    const t = this.badges.get(e.id);
    t &&
      ((t.x = e.properties.x),
      (t.y = e.properties.y),
      (t.width = e.properties.width),
      (t.height = e.properties.height),
      (t.area = e.properties.area),
      this.updateBadgeElement(t));
  }
  removeBadge(e) {
    const t = this.badgeElements.get(e);
    t && (t.remove(), this.badgeElements.delete(e)), this.badges.delete(e);
  }
  createBadgeElement(e) {
    const t = document.createElement("div");
    (t.className = "area-badge"),
      (t.style.cssText = `
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
    `),
      (
        document.querySelector("[data-grix-canvas]") || document.body
      ).appendChild(t),
      this.badgeElements.set(e.rectangleId, t),
      this.updateBadgeElement(e);
  }
  updateBadgeElement(e) {
    const t = this.badgeElements.get(e.rectangleId);
    if (!t) return;
    const r = e.x + e.width / 2,
      i = e.y + e.height / 2,
      o = this.context.canvas.worldToScreen({ x: r, y: i }),
      a = this.formatArea(e.area, e.width, e.height);
    t.textContent = a;
    const u = t.getBoundingClientRect();
    (t.style.left = `${o.x - u.width / 2}px`),
      (t.style.top = `${o.y - u.height / 2}px`);
    const p = this.context.state.getState(),
      b = 30,
      E = e.width * p.viewport.zoom,
      P = e.height * p.viewport.zoom;
    t.style.display = E >= b && P >= b ? "block" : "none";
  }
  formatArea(e, t, r) {
    const i = Math.abs(t - Math.round(t)) < 1e-3,
      o = Math.abs(r - Math.round(r)) < 1e-3;
    if (i && o) {
      const a = Math.round(t),
        u = Math.round(r);
      return `${a} × ${u} = ${a * u}`;
    }
    return e >= 1e3
      ? `${e.toFixed(0)} sq units`
      : e >= 10
      ? `${e.toFixed(1)} sq units`
      : `${e.toFixed(2)} sq units`;
  }
  updateBadgePositions() {
    this.badges.forEach((e) => {
      this.updateBadgeElement(e);
    });
  }
  // Additional public methods for external control
  showBadge(e) {
    const t = this.badges.get(e);
    t && ((t.visible = !0), this.updateBadgeElement(t));
  }
  hideBadge(e) {
    const t = this.badges.get(e);
    if (t) {
      t.visible = !1;
      const r = this.badgeElements.get(e);
      r && (r.style.display = "none");
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
function Ye() {
  return new $e();
}
function We() {
  const { registerPlugin: n } = oe(),
    e = ie(!1);
  return (
    X(() => {
      if (e.current) return;
      const t = De(),
        r = Be(),
        i = Ye();
      return n(t), n(r), n(i), (e.current = !0), () => {};
    }, [n]),
    /* @__PURE__ */ l.jsxs("div", {
      className: "flex flex-col h-screen bg-gray-50",
      children: [
        /* @__PURE__ */ l.jsx(Ne, {}),
        /* @__PURE__ */ l.jsx("div", {
          className: "flex-1 relative",
          "data-grix-canvas": !0,
          children: /* @__PURE__ */ l.jsx(ze, {
            width: window.innerWidth,
            height: window.innerHeight - 60,
            className: "absolute inset-0",
          }),
        }),
      ],
    })
  );
}
function Le() {
  return /* @__PURE__ */ l.jsx(Me, { children: /* @__PURE__ */ l.jsx(We, {}) });
}
const Xe = "0.1.0";
export {
  ze as Canvas,
  Le as GrixApp,
  Me as PluginManagerProvider,
  Ne as ToolBar,
  Ye as createAreaCounter,
  De as createRayTool,
  Be as createRectangleTool,
  Z as useCanvasStore,
  _e as useInputSystem,
  oe as usePluginManager,
  Xe as version,
};
