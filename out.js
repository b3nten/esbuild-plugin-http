var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// http-url:https://esm.sh/stable/react@18.2.0/esnext/react.mjs
var react_exports = {};
__export(react_exports, {
  Children: () => le,
  Component: () => ae,
  Fragment: () => pe,
  Profiler: () => ye,
  PureComponent: () => de,
  StrictMode: () => _e,
  Suspense: () => me,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => he,
  cloneElement: () => ve,
  createContext: () => Se,
  createElement: () => Ee,
  createFactory: () => Re,
  createRef: () => Ce,
  default: () => We,
  forwardRef: () => ke,
  isValidElement: () => we,
  lazy: () => be,
  memo: () => $e,
  startTransition: () => xe,
  unstable_act: () => Oe,
  useCallback: () => je,
  useContext: () => Ie,
  useDebugValue: () => ge,
  useDeferredValue: () => Pe,
  useEffect: () => Te,
  useId: () => De,
  useImperativeHandle: () => Ve,
  useInsertionEffect: () => Le,
  useLayoutEffect: () => Ne,
  useMemo: () => Fe,
  useReducer: () => Ue,
  useRef: () => qe,
  useState: () => Ae,
  useSyncExternalStore: () => Me,
  useTransition: () => ze,
  version: () => Be
});
var z = Object.create;
var E = Object.defineProperty;
var B = Object.getOwnPropertyDescriptor;
var H = Object.getOwnPropertyNames;
var W = Object.getPrototypeOf;
var Y = Object.prototype.hasOwnProperty;
var x = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var G = (e, t) => {
  for (var r2 in t)
    E(e, r2, { get: t[r2], enumerable: true });
};
var S = (e, t, r2, u2) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of H(t))
      !Y.call(e, o) && o !== r2 && E(e, o, { get: () => t[o], enumerable: !(u2 = B(t, o)) || u2.enumerable });
  return e;
};
var y = (e, t, r2) => (S(e, t, "default"), r2 && S(r2, t, "default"));
var O = (e, t, r2) => (r2 = e != null ? z(W(e)) : {}, S(t || !e || !e.__esModule ? E(r2, "default", { value: e, enumerable: true }) : r2, e));
var U = x((n2) => {
  "use strict";
  var _ = Symbol.for("react.element"), J = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), Z2 = Symbol.for("react.provider"), ee2 = Symbol.for("react.context"), te2 = Symbol.for("react.forward_ref"), re2 = Symbol.for("react.suspense"), ne2 = Symbol.for("react.memo"), oe2 = Symbol.for("react.lazy"), j = Symbol.iterator;
  function ue(e) {
    return e === null || typeof e != "object" ? null : (e = j && e[j] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var P2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T2 = Object.assign, D = {};
  function d3(e, t, r2) {
    this.props = e, this.context = t, this.refs = D, this.updater = r2 || P2;
  }
  d3.prototype.isReactComponent = {};
  d3.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  d3.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function V() {
  }
  V.prototype = d3.prototype;
  function C2(e, t, r2) {
    this.props = e, this.context = t, this.refs = D, this.updater = r2 || P2;
  }
  var k = C2.prototype = new V();
  k.constructor = C2;
  T2(k, d3.prototype);
  k.isPureReactComponent = true;
  var I = Array.isArray, L = Object.prototype.hasOwnProperty, w = { current: null }, N2 = { key: true, ref: true, __self: true, __source: true };
  function F(e, t, r2) {
    var u2, o = {}, c = null, f3 = null;
    if (t != null)
      for (u2 in t.ref !== void 0 && (f3 = t.ref), t.key !== void 0 && (c = "" + t.key), t)
        L.call(t, u2) && !N2.hasOwnProperty(u2) && (o[u2] = t[u2]);
    var i = arguments.length - 2;
    if (i === 1)
      o.children = r2;
    else if (1 < i) {
      for (var s2 = Array(i), a2 = 0; a2 < i; a2++)
        s2[a2] = arguments[a2 + 2];
      o.children = s2;
    }
    if (e && e.defaultProps)
      for (u2 in i = e.defaultProps, i)
        o[u2] === void 0 && (o[u2] = i[u2]);
    return { $$typeof: _, type: e, key: c, ref: f3, props: o, _owner: w.current };
  }
  function se2(e, t) {
    return { $$typeof: _, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function b(e) {
    return typeof e == "object" && e !== null && e.$$typeof === _;
  }
  function ce2(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(r2) {
      return t[r2];
    });
  }
  var g2 = /\/+/g;
  function R(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ce2("" + e.key) : t.toString(36);
  }
  function h2(e, t, r2, u2, o) {
    var c = typeof e;
    (c === "undefined" || c === "boolean") && (e = null);
    var f3 = false;
    if (e === null)
      f3 = true;
    else
      switch (c) {
        case "string":
        case "number":
          f3 = true;
          break;
        case "object":
          switch (e.$$typeof) {
            case _:
            case J:
              f3 = true;
          }
      }
    if (f3)
      return f3 = e, o = o(f3), e = u2 === "" ? "." + R(f3, 0) : u2, I(o) ? (r2 = "", e != null && (r2 = e.replace(g2, "$&/") + "/"), h2(o, t, r2, "", function(a2) {
        return a2;
      })) : o != null && (b(o) && (o = se2(o, r2 + (!o.key || f3 && f3.key === o.key ? "" : ("" + o.key).replace(g2, "$&/") + "/") + e)), t.push(o)), 1;
    if (f3 = 0, u2 = u2 === "" ? "." : u2 + ":", I(e))
      for (var i = 0; i < e.length; i++) {
        c = e[i];
        var s2 = u2 + R(c, i);
        f3 += h2(c, t, r2, s2, o);
      }
    else if (s2 = ue(e), typeof s2 == "function")
      for (e = s2.call(e), i = 0; !(c = e.next()).done; )
        c = c.value, s2 = u2 + R(c, i++), f3 += h2(c, t, r2, s2, o);
    else if (c === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return f3;
  }
  function m2(e, t, r2) {
    if (e == null)
      return e;
    var u2 = [], o = 0;
    return h2(e, u2, "", "", function(c) {
      return t.call(r2, c, o++);
    }), u2;
  }
  function ie2(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(r2) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r2);
      }, function(r2) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r2);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1)
      return e._result.default;
    throw e._result;
  }
  var l2 = { current: null }, v2 = { transition: null }, fe2 = { ReactCurrentDispatcher: l2, ReactCurrentBatchConfig: v2, ReactCurrentOwner: w };
  n2.Children = { map: m2, forEach: function(e, t, r2) {
    m2(e, function() {
      t.apply(this, arguments);
    }, r2);
  }, count: function(e) {
    var t = 0;
    return m2(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return m2(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!b(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  n2.Component = d3;
  n2.Fragment = K;
  n2.Profiler = X;
  n2.PureComponent = C2;
  n2.StrictMode = Q;
  n2.Suspense = re2;
  n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fe2;
  n2.cloneElement = function(e, t, r2) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var u2 = T2({}, e.props), o = e.key, c = e.ref, f3 = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (c = t.ref, f3 = w.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var i = e.type.defaultProps;
      for (s2 in t)
        L.call(t, s2) && !N2.hasOwnProperty(s2) && (u2[s2] = t[s2] === void 0 && i !== void 0 ? i[s2] : t[s2]);
    }
    var s2 = arguments.length - 2;
    if (s2 === 1)
      u2.children = r2;
    else if (1 < s2) {
      i = Array(s2);
      for (var a2 = 0; a2 < s2; a2++)
        i[a2] = arguments[a2 + 2];
      u2.children = i;
    }
    return { $$typeof: _, type: e.type, key: o, ref: c, props: u2, _owner: f3 };
  };
  n2.createContext = function(e) {
    return e = { $$typeof: ee2, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Z2, _context: e }, e.Consumer = e;
  };
  n2.createElement = F;
  n2.createFactory = function(e) {
    var t = F.bind(null, e);
    return t.type = e, t;
  };
  n2.createRef = function() {
    return { current: null };
  };
  n2.forwardRef = function(e) {
    return { $$typeof: te2, render: e };
  };
  n2.isValidElement = b;
  n2.lazy = function(e) {
    return { $$typeof: oe2, _payload: { _status: -1, _result: e }, _init: ie2 };
  };
  n2.memo = function(e, t) {
    return { $$typeof: ne2, type: e, compare: t === void 0 ? null : t };
  };
  n2.startTransition = function(e) {
    var t = v2.transition;
    v2.transition = {};
    try {
      e();
    } finally {
      v2.transition = t;
    }
  };
  n2.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  n2.useCallback = function(e, t) {
    return l2.current.useCallback(e, t);
  };
  n2.useContext = function(e) {
    return l2.current.useContext(e);
  };
  n2.useDebugValue = function() {
  };
  n2.useDeferredValue = function(e) {
    return l2.current.useDeferredValue(e);
  };
  n2.useEffect = function(e, t) {
    return l2.current.useEffect(e, t);
  };
  n2.useId = function() {
    return l2.current.useId();
  };
  n2.useImperativeHandle = function(e, t, r2) {
    return l2.current.useImperativeHandle(e, t, r2);
  };
  n2.useInsertionEffect = function(e, t) {
    return l2.current.useInsertionEffect(e, t);
  };
  n2.useLayoutEffect = function(e, t) {
    return l2.current.useLayoutEffect(e, t);
  };
  n2.useMemo = function(e, t) {
    return l2.current.useMemo(e, t);
  };
  n2.useReducer = function(e, t, r2) {
    return l2.current.useReducer(e, t, r2);
  };
  n2.useRef = function(e) {
    return l2.current.useRef(e);
  };
  n2.useState = function(e) {
    return l2.current.useState(e);
  };
  n2.useSyncExternalStore = function(e, t, r2) {
    return l2.current.useSyncExternalStore(e, t, r2);
  };
  n2.useTransition = function() {
    return l2.current.useTransition();
  };
  n2.version = "18.2.0";
});
var $ = x((Je, q) => {
  "use strict";
  q.exports = U();
});
var p = {};
G(p, { Children: () => le, Component: () => ae, Fragment: () => pe, Profiler: () => ye, PureComponent: () => de, StrictMode: () => _e, Suspense: () => me, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => he, cloneElement: () => ve, createContext: () => Se, createElement: () => Ee, createFactory: () => Re, createRef: () => Ce, default: () => We, forwardRef: () => ke, isValidElement: () => we, lazy: () => be, memo: () => $e, startTransition: () => xe, unstable_act: () => Oe, useCallback: () => je, useContext: () => Ie, useDebugValue: () => ge, useDeferredValue: () => Pe, useEffect: () => Te, useId: () => De, useImperativeHandle: () => Ve, useInsertionEffect: () => Le, useLayoutEffect: () => Ne, useMemo: () => Fe, useReducer: () => Ue, useRef: () => qe, useState: () => Ae, useSyncExternalStore: () => Me, useTransition: () => ze, version: () => Be });
var M = O($());
y(p, O($()));
var { Children: le, Component: ae, Fragment: pe, Profiler: ye, PureComponent: de, StrictMode: _e, Suspense: me, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: he, cloneElement: ve, createContext: Se, createElement: Ee, createFactory: Re, createRef: Ce, forwardRef: ke, isValidElement: we, lazy: be, memo: $e, startTransition: xe, unstable_act: Oe, useCallback: je, useContext: Ie, useDebugValue: ge, useDeferredValue: Pe, useEffect: Te, useId: De, useImperativeHandle: Ve, useInsertionEffect: Le, useLayoutEffect: Ne, useMemo: Fe, useReducer: Ue, useRef: qe, useState: Ae, useSyncExternalStore: Me, useTransition: ze, version: Be } = M;
var { default: A, ...He } = M;
var We = A !== void 0 ? A : He;

// http-url:https://esm.sh/v130/react-dom@18.2.0/esnext/react-dom.mjs
var react_dom_exports = {};
__export(react_dom_exports, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Tf,
  createPortal: () => Mf,
  createRoot: () => Df,
  default: () => Wf,
  findDOMNode: () => Of,
  flushSync: () => Rf,
  hydrate: () => Ff,
  hydrateRoot: () => If,
  render: () => Uf,
  unmountComponentAtNode: () => jf,
  unstable_batchedUpdates: () => Vf,
  unstable_renderSubtreeIntoContainer: () => Af,
  version: () => Bf
});

// http-url:https://esm.sh/v130/scheduler@0.23.0/esnext/scheduler.mjs
var scheduler_exports = {};
__export(scheduler_exports, {
  default: () => Ee2,
  unstable_IdlePriority: () => oe,
  unstable_ImmediatePriority: () => se,
  unstable_LowPriority: () => ce,
  unstable_NormalPriority: () => fe,
  unstable_Profiling: () => be2,
  unstable_UserBlockingPriority: () => _e2,
  unstable_cancelCallback: () => de2,
  unstable_continueExecution: () => pe2,
  unstable_forceFrameRate: () => ve2,
  unstable_getCurrentPriorityLevel: () => ye2,
  unstable_getFirstCallbackNode: () => me2,
  unstable_next: () => ge2,
  unstable_now: () => ae2,
  unstable_pauseExecution: () => he2,
  unstable_requestPaint: () => ke2,
  unstable_runWithPriority: () => Pe2,
  unstable_scheduleCallback: () => we2,
  unstable_shouldYield: () => xe2,
  unstable_wrapCallback: () => Ie2
});
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);
var ee = Object.create;
var T = Object.defineProperty;
var ne = Object.getOwnPropertyDescriptor;
var te = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf;
var le2 = Object.prototype.hasOwnProperty;
var W2 = (e, n2) => () => (n2 || e((n2 = { exports: {} }).exports, n2), n2.exports);
var ie = (e, n2) => {
  for (var t in n2)
    T(e, t, { get: n2[t], enumerable: true });
};
var E2 = (e, n2, t, l2) => {
  if (n2 && typeof n2 == "object" || typeof n2 == "function")
    for (let i of te(n2))
      !le2.call(e, i) && i !== t && T(e, i, { get: () => n2[i], enumerable: !(l2 = ne(n2, i)) || l2.enumerable });
  return e;
};
var d = (e, n2, t) => (E2(e, n2, "default"), t && E2(t, n2, "default"));
var Y2 = (e, n2, t) => (t = e != null ? ee(re(e)) : {}, E2(n2 || !e || !e.__esModule ? T(t, "default", { value: e, enumerable: true }) : t, e));
var U2 = W2((r2) => {
  "use strict";
  function M2(e, n2) {
    var t = e.length;
    e.push(n2);
    e:
      for (; 0 < t; ) {
        var l2 = t - 1 >>> 1, i = e[l2];
        if (0 < k(i, n2))
          e[l2] = n2, e[t] = i, t = l2;
        else
          break e;
      }
  }
  function o(e) {
    return e.length === 0 ? null : e[0];
  }
  function w(e) {
    if (e.length === 0)
      return null;
    var n2 = e[0], t = e.pop();
    if (t !== n2) {
      e[0] = t;
      e:
        for (var l2 = 0, i = e.length, g2 = i >>> 1; l2 < g2; ) {
          var b = 2 * (l2 + 1) - 1, C2 = e[b], _ = b + 1, h2 = e[_];
          if (0 > k(C2, t))
            _ < i && 0 > k(h2, C2) ? (e[l2] = h2, e[_] = t, l2 = _) : (e[l2] = C2, e[b] = t, l2 = b);
          else if (_ < i && 0 > k(h2, t))
            e[l2] = h2, e[_] = t, l2 = _;
          else
            break e;
        }
    }
    return n2;
  }
  function k(e, n2) {
    var t = e.sortIndex - n2.sortIndex;
    return t !== 0 ? t : e.id - n2.id;
  }
  typeof performance == "object" && typeof performance.now == "function" ? (z2 = performance, r2.unstable_now = function() {
    return z2.now();
  }) : (L = Date, A2 = L.now(), r2.unstable_now = function() {
    return L.now() - A2;
  });
  var z2, L, A2, s2 = [], c = [], ue = 1, a2 = null, u2 = 3, x3 = false, p3 = false, y3 = false, J = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, G2 = typeof __setImmediate$ < "u" ? __setImmediate$ : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function j(e) {
    for (var n2 = o(c); n2 !== null; ) {
      if (n2.callback === null)
        w(c);
      else if (n2.startTime <= e)
        w(c), n2.sortIndex = n2.expirationTime, M2(s2, n2);
      else
        break;
      n2 = o(c);
    }
  }
  function R(e) {
    if (y3 = false, j(e), !p3)
      if (o(s2) !== null)
        p3 = true, D(B2);
      else {
        var n2 = o(c);
        n2 !== null && q(R, n2.startTime - e);
      }
  }
  function B2(e, n2) {
    p3 = false, y3 && (y3 = false, K(m2), m2 = -1), x3 = true;
    var t = u2;
    try {
      for (j(n2), a2 = o(s2); a2 !== null && (!(a2.expirationTime > n2) || e && !V()); ) {
        var l2 = a2.callback;
        if (typeof l2 == "function") {
          a2.callback = null, u2 = a2.priorityLevel;
          var i = l2(a2.expirationTime <= n2);
          n2 = r2.unstable_now(), typeof i == "function" ? a2.callback = i : a2 === o(s2) && w(s2), j(n2);
        } else
          w(s2);
        a2 = o(s2);
      }
      if (a2 !== null)
        var g2 = true;
      else {
        var b = o(c);
        b !== null && q(R, b.startTime - n2), g2 = false;
      }
      return g2;
    } finally {
      a2 = null, u2 = t, x3 = false;
    }
  }
  var I = false, P2 = null, m2 = -1, Q = 5, S2 = -1;
  function V() {
    return !(r2.unstable_now() - S2 < Q);
  }
  function N2() {
    if (P2 !== null) {
      var e = r2.unstable_now();
      S2 = e;
      var n2 = true;
      try {
        n2 = P2(true, e);
      } finally {
        n2 ? v2() : (I = false, P2 = null);
      }
    } else
      I = false;
  }
  var v2;
  typeof G2 == "function" ? v2 = function() {
    G2(N2);
  } : typeof MessageChannel < "u" ? (F = new MessageChannel(), H2 = F.port2, F.port1.onmessage = N2, v2 = function() {
    H2.postMessage(null);
  }) : v2 = function() {
    J(N2, 0);
  };
  var F, H2;
  function D(e) {
    P2 = e, I || (I = true, v2());
  }
  function q(e, n2) {
    m2 = J(function() {
      e(r2.unstable_now());
    }, n2);
  }
  r2.unstable_IdlePriority = 5;
  r2.unstable_ImmediatePriority = 1;
  r2.unstable_LowPriority = 4;
  r2.unstable_NormalPriority = 3;
  r2.unstable_Profiling = null;
  r2.unstable_UserBlockingPriority = 2;
  r2.unstable_cancelCallback = function(e) {
    e.callback = null;
  };
  r2.unstable_continueExecution = function() {
    p3 || x3 || (p3 = true, D(B2));
  };
  r2.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < e ? Math.floor(1e3 / e) : 5;
  };
  r2.unstable_getCurrentPriorityLevel = function() {
    return u2;
  };
  r2.unstable_getFirstCallbackNode = function() {
    return o(s2);
  };
  r2.unstable_next = function(e) {
    switch (u2) {
      case 1:
      case 2:
      case 3:
        var n2 = 3;
        break;
      default:
        n2 = u2;
    }
    var t = u2;
    u2 = n2;
    try {
      return e();
    } finally {
      u2 = t;
    }
  };
  r2.unstable_pauseExecution = function() {
  };
  r2.unstable_requestPaint = function() {
  };
  r2.unstable_runWithPriority = function(e, n2) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var t = u2;
    u2 = e;
    try {
      return n2();
    } finally {
      u2 = t;
    }
  };
  r2.unstable_scheduleCallback = function(e, n2, t) {
    var l2 = r2.unstable_now();
    switch (typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l2 + t : l2) : t = l2, e) {
      case 1:
        var i = -1;
        break;
      case 2:
        i = 250;
        break;
      case 5:
        i = 1073741823;
        break;
      case 4:
        i = 1e4;
        break;
      default:
        i = 5e3;
    }
    return i = t + i, e = { id: ue++, callback: n2, priorityLevel: e, startTime: t, expirationTime: i, sortIndex: -1 }, t > l2 ? (e.sortIndex = t, M2(c, e), o(s2) === null && e === o(c) && (y3 ? (K(m2), m2 = -1) : y3 = true, q(R, t - l2))) : (e.sortIndex = i, M2(s2, e), p3 || x3 || (p3 = true, D(B2))), e;
  };
  r2.unstable_shouldYield = V;
  r2.unstable_wrapCallback = function(e) {
    var n2 = u2;
    return function() {
      var t = u2;
      u2 = n2;
      try {
        return e.apply(this, arguments);
      } finally {
        u2 = t;
      }
    };
  };
});
var O2 = W2((Ne2, X) => {
  "use strict";
  X.exports = U2();
});
var f = {};
ie(f, { default: () => Ee2, unstable_IdlePriority: () => oe, unstable_ImmediatePriority: () => se, unstable_LowPriority: () => ce, unstable_NormalPriority: () => fe, unstable_Profiling: () => be2, unstable_UserBlockingPriority: () => _e2, unstable_cancelCallback: () => de2, unstable_continueExecution: () => pe2, unstable_forceFrameRate: () => ve2, unstable_getCurrentPriorityLevel: () => ye2, unstable_getFirstCallbackNode: () => me2, unstable_next: () => ge2, unstable_now: () => ae2, unstable_pauseExecution: () => he2, unstable_requestPaint: () => ke2, unstable_runWithPriority: () => Pe2, unstable_scheduleCallback: () => we2, unstable_shouldYield: () => xe2, unstable_wrapCallback: () => Ie2 });
var $2 = Y2(O2());
d(f, Y2(O2()));
var { unstable_now: ae2, unstable_IdlePriority: oe, unstable_ImmediatePriority: se, unstable_LowPriority: ce, unstable_NormalPriority: fe, unstable_Profiling: be2, unstable_UserBlockingPriority: _e2, unstable_cancelCallback: de2, unstable_continueExecution: pe2, unstable_forceFrameRate: ve2, unstable_getCurrentPriorityLevel: ye2, unstable_getFirstCallbackNode: me2, unstable_next: ge2, unstable_pauseExecution: he2, unstable_requestPaint: ke2, unstable_runWithPriority: Pe2, unstable_scheduleCallback: we2, unstable_shouldYield: xe2, unstable_wrapCallback: Ie2 } = $2;
var { default: Z, ...Ce2 } = $2;
var Ee2 = Z !== void 0 ? Z : Ce2;

// http-url:https://esm.sh/v130/react-dom@18.2.0/esnext/react-dom.mjs
var require2 = (n2) => {
  const e = (m2) => typeof m2.default < "u" ? m2.default : m2, c = (m2) => Object.assign({}, m2);
  switch (n2) {
    case "scheduler":
      return e(scheduler_exports);
    case "react":
      return e(react_exports);
    default:
      throw new Error('module "' + n2 + '" not found');
  }
};
var Ca = Object.create;
var tl = Object.defineProperty;
var xa = Object.getOwnPropertyDescriptor;
var Na = Object.getOwnPropertyNames;
var _a = Object.getPrototypeOf;
var za = Object.prototype.hasOwnProperty;
var su = ((e) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e, { get: (n2, t) => (typeof require2 < "u" ? require2 : n2)[t] }) : e)(function(e) {
  if (typeof require2 < "u")
    return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var au = (e, n2) => () => (n2 || e((n2 = { exports: {} }).exports, n2), n2.exports);
var Pa = (e, n2) => {
  for (var t in n2)
    tl(e, t, { get: n2[t], enumerable: true });
};
var nl = (e, n2, t, r2) => {
  if (n2 && typeof n2 == "object" || typeof n2 == "function")
    for (let l2 of Na(n2))
      !za.call(e, l2) && l2 !== t && tl(e, l2, { get: () => n2[l2], enumerable: !(r2 = xa(n2, l2)) || r2.enumerable });
  return e;
};
var an = (e, n2, t) => (nl(e, n2, "default"), t && nl(t, n2, "default"));
var cu = (e, n2, t) => (t = e != null ? Ca(_a(e)) : {}, nl(n2 || !e || !e.__esModule ? tl(t, "default", { value: e, enumerable: true }) : t, e));
var ya = au((fe2) => {
  "use strict";
  var go = su("react"), ae3 = su("scheduler");
  function v2(e) {
    for (var n2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n2 += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var wo = /* @__PURE__ */ new Set(), St = {};
  function En(e, n2) {
    Qn(e, n2), Qn(e + "Capture", n2);
  }
  function Qn(e, n2) {
    for (St[e] = n2, e = 0; e < n2.length; e++)
      wo.add(n2[e]);
  }
  var Fe2 = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nl = Object.prototype.hasOwnProperty, La = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fu = {}, du = {};
  function Ta(e) {
    return Nl.call(du, e) ? true : Nl.call(fu, e) ? false : La.test(e) ? du[e] = true : (fu[e] = true, false);
  }
  function Ma(e, n2, t, r2) {
    if (t !== null && t.type === 0)
      return false;
    switch (typeof n2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r2 ? false : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function Da(e, n2, t, r2) {
    if (n2 === null || typeof n2 > "u" || Ma(e, n2, t, r2))
      return true;
    if (r2)
      return false;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n2;
        case 4:
          return n2 === false;
        case 5:
          return isNaN(n2);
        case 6:
          return isNaN(n2) || 1 > n2;
      }
    return false;
  }
  function ee2(e, n2, t, r2, l2, i, u2) {
    this.acceptsBooleans = n2 === 2 || n2 === 3 || n2 === 4, this.attributeName = r2, this.attributeNamespace = l2, this.mustUseProperty = t, this.propertyName = e, this.type = n2, this.sanitizeURL = i, this.removeEmptyString = u2;
  }
  var Y3 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Y3[e] = new ee2(e, 0, false, e, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n2 = e[0];
    Y3[n2] = new ee2(n2, 1, false, e[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Y3[e] = new ee2(e, 2, false, e.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Y3[e] = new ee2(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Y3[e] = new ee2(e, 3, false, e.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Y3[e] = new ee2(e, 3, true, e, null, false, false);
  });
  ["capture", "download"].forEach(function(e) {
    Y3[e] = new ee2(e, 4, false, e, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    Y3[e] = new ee2(e, 6, false, e, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(e) {
    Y3[e] = new ee2(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var yi = /[\-:]([a-z])/g;
  function gi(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n2 = e.replace(yi, gi);
    Y3[n2] = new ee2(n2, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n2 = e.replace(yi, gi);
    Y3[n2] = new ee2(n2, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n2 = e.replace(yi, gi);
    Y3[n2] = new ee2(n2, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    Y3[e] = new ee2(e, 1, false, e.toLowerCase(), null, false, false);
  });
  Y3.xlinkHref = new ee2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    Y3[e] = new ee2(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function wi(e, n2, t, r2) {
    var l2 = Y3.hasOwnProperty(n2) ? Y3[n2] : null;
    (l2 !== null ? l2.type !== 0 : r2 || !(2 < n2.length) || n2[0] !== "o" && n2[0] !== "O" || n2[1] !== "n" && n2[1] !== "N") && (Da(n2, t, l2, r2) && (t = null), r2 || l2 === null ? Ta(n2) && (t === null ? e.removeAttribute(n2) : e.setAttribute(n2, "" + t)) : l2.mustUseProperty ? e[l2.propertyName] = t === null ? l2.type === 3 ? false : "" : t : (n2 = l2.attributeName, r2 = l2.attributeNamespace, t === null ? e.removeAttribute(n2) : (l2 = l2.type, t = l2 === 3 || l2 === 4 && t === true ? "" : "" + t, r2 ? e.setAttributeNS(r2, n2, t) : e.setAttribute(n2, t))));
  }
  var Ve2 = go.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Bt = Symbol.for("react.element"), _n = Symbol.for("react.portal"), zn = Symbol.for("react.fragment"), Si = Symbol.for("react.strict_mode"), _l = Symbol.for("react.profiler"), So = Symbol.for("react.provider"), ko = Symbol.for("react.context"), ki = Symbol.for("react.forward_ref"), zl = Symbol.for("react.suspense"), Pl = Symbol.for("react.suspense_list"), Ei = Symbol.for("react.memo"), He2 = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  Symbol.for("react.debug_trace_mode");
  var Eo = Symbol.for("react.offscreen");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.cache");
  Symbol.for("react.tracing_marker");
  var pu = Symbol.iterator;
  function bn(e) {
    return e === null || typeof e != "object" ? null : (e = pu && e[pu] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F = Object.assign, rl;
  function ot(e) {
    if (rl === void 0)
      try {
        throw Error();
      } catch (t) {
        var n2 = t.stack.trim().match(/\n( *(at )?)/);
        rl = n2 && n2[1] || "";
      }
    return `
` + rl + e;
  }
  var ll = false;
  function il(e, n2) {
    if (!e || ll)
      return "";
    ll = true;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n2)
        if (n2 = function() {
          throw Error();
        }, Object.defineProperty(n2.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n2, []);
          } catch (d3) {
            var r2 = d3;
          }
          Reflect.construct(e, [], n2);
        } else {
          try {
            n2.call();
          } catch (d3) {
            r2 = d3;
          }
          e.call(n2.prototype);
        }
      else {
        try {
          throw Error();
        } catch (d3) {
          r2 = d3;
        }
        e();
      }
    } catch (d3) {
      if (d3 && r2 && typeof d3.stack == "string") {
        for (var l2 = d3.stack.split(`
`), i = r2.stack.split(`
`), u2 = l2.length - 1, o = i.length - 1; 1 <= u2 && 0 <= o && l2[u2] !== i[o]; )
          o--;
        for (; 1 <= u2 && 0 <= o; u2--, o--)
          if (l2[u2] !== i[o]) {
            if (u2 !== 1 || o !== 1)
              do
                if (u2--, o--, 0 > o || l2[u2] !== i[o]) {
                  var s2 = `
` + l2[u2].replace(" at new ", " at ");
                  return e.displayName && s2.includes("<anonymous>") && (s2 = s2.replace("<anonymous>", e.displayName)), s2;
                }
              while (1 <= u2 && 0 <= o);
            break;
          }
      }
    } finally {
      ll = false, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? ot(e) : "";
  }
  function Oa(e) {
    switch (e.tag) {
      case 5:
        return ot(e.type);
      case 16:
        return ot("Lazy");
      case 13:
        return ot("Suspense");
      case 19:
        return ot("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = il(e.type, false), e;
      case 11:
        return e = il(e.type.render, false), e;
      case 1:
        return e = il(e.type, true), e;
      default:
        return "";
    }
  }
  function Ll(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case zn:
        return "Fragment";
      case _n:
        return "Portal";
      case _l:
        return "Profiler";
      case Si:
        return "StrictMode";
      case zl:
        return "Suspense";
      case Pl:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ko:
          return (e.displayName || "Context") + ".Consumer";
        case So:
          return (e._context.displayName || "Context") + ".Provider";
        case ki:
          var n2 = e.render;
          return e = e.displayName, e || (e = n2.displayName || n2.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ei:
          return n2 = e.displayName || null, n2 !== null ? n2 : Ll(e.type) || "Memo";
        case He2:
          n2 = e._payload, e = e._init;
          try {
            return Ll(e(n2));
          } catch {
          }
      }
    return null;
  }
  function Ra(e) {
    var n2 = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n2.displayName || "Context") + ".Consumer";
      case 10:
        return (n2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n2.render, e = e.displayName || e.name || "", n2.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ll(n2);
      case 8:
        return n2 === Si ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n2 == "function")
          return n2.displayName || n2.name || null;
        if (typeof n2 == "string")
          return n2;
    }
    return null;
  }
  function tn(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Co(e) {
    var n2 = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n2 === "checkbox" || n2 === "radio");
  }
  function Fa(e) {
    var n2 = Co(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n2), r2 = "" + e[n2];
    if (!e.hasOwnProperty(n2) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l2 = t.get, i = t.set;
      return Object.defineProperty(e, n2, { configurable: true, get: function() {
        return l2.call(this);
      }, set: function(u2) {
        r2 = "" + u2, i.call(this, u2);
      } }), Object.defineProperty(e, n2, { enumerable: t.enumerable }), { getValue: function() {
        return r2;
      }, setValue: function(u2) {
        r2 = "" + u2;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n2];
      } };
    }
  }
  function Ht(e) {
    e._valueTracker || (e._valueTracker = Fa(e));
  }
  function xo(e) {
    if (!e)
      return false;
    var n2 = e._valueTracker;
    if (!n2)
      return true;
    var t = n2.getValue(), r2 = "";
    return e && (r2 = Co(e) ? e.checked ? "true" : "false" : e.value), e = r2, e !== t ? (n2.setValue(e), true) : false;
  }
  function vr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, n2) {
    var t = n2.checked;
    return F({}, n2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function mu(e, n2) {
    var t = n2.defaultValue == null ? "" : n2.defaultValue, r2 = n2.checked != null ? n2.checked : n2.defaultChecked;
    t = tn(n2.value != null ? n2.value : t), e._wrapperState = { initialChecked: r2, initialValue: t, controlled: n2.type === "checkbox" || n2.type === "radio" ? n2.checked != null : n2.value != null };
  }
  function No(e, n2) {
    n2 = n2.checked, n2 != null && wi(e, "checked", n2, false);
  }
  function Ml(e, n2) {
    No(e, n2);
    var t = tn(n2.value), r2 = n2.type;
    if (t != null)
      r2 === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r2 === "submit" || r2 === "reset") {
      e.removeAttribute("value");
      return;
    }
    n2.hasOwnProperty("value") ? Dl(e, n2.type, t) : n2.hasOwnProperty("defaultValue") && Dl(e, n2.type, tn(n2.defaultValue)), n2.checked == null && n2.defaultChecked != null && (e.defaultChecked = !!n2.defaultChecked);
  }
  function hu(e, n2, t) {
    if (n2.hasOwnProperty("value") || n2.hasOwnProperty("defaultValue")) {
      var r2 = n2.type;
      if (!(r2 !== "submit" && r2 !== "reset" || n2.value !== void 0 && n2.value !== null))
        return;
      n2 = "" + e._wrapperState.initialValue, t || n2 === e.value || (e.value = n2), e.defaultValue = n2;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Dl(e, n2, t) {
    (n2 !== "number" || vr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var st = Array.isArray;
  function jn(e, n2, t, r2) {
    if (e = e.options, n2) {
      n2 = {};
      for (var l2 = 0; l2 < t.length; l2++)
        n2["$" + t[l2]] = true;
      for (t = 0; t < e.length; t++)
        l2 = n2.hasOwnProperty("$" + e[t].value), e[t].selected !== l2 && (e[t].selected = l2), l2 && r2 && (e[t].defaultSelected = true);
    } else {
      for (t = "" + tn(t), n2 = null, l2 = 0; l2 < e.length; l2++) {
        if (e[l2].value === t) {
          e[l2].selected = true, r2 && (e[l2].defaultSelected = true);
          return;
        }
        n2 !== null || e[l2].disabled || (n2 = e[l2]);
      }
      n2 !== null && (n2.selected = true);
    }
  }
  function Ol(e, n2) {
    if (n2.dangerouslySetInnerHTML != null)
      throw Error(v2(91));
    return F({}, n2, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function vu(e, n2) {
    var t = n2.value;
    if (t == null) {
      if (t = n2.children, n2 = n2.defaultValue, t != null) {
        if (n2 != null)
          throw Error(v2(92));
        if (st(t)) {
          if (1 < t.length)
            throw Error(v2(93));
          t = t[0];
        }
        n2 = t;
      }
      n2 == null && (n2 = ""), t = n2;
    }
    e._wrapperState = { initialValue: tn(t) };
  }
  function _o(e, n2) {
    var t = tn(n2.value), r2 = tn(n2.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n2.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r2 != null && (e.defaultValue = "" + r2);
  }
  function yu(e) {
    var n2 = e.textContent;
    n2 === e._wrapperState.initialValue && n2 !== "" && n2 !== null && (e.value = n2);
  }
  function zo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rl(e, n2) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? zo(n2) : e === "http://www.w3.org/2000/svg" && n2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Wt, Po = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n2, t, r2, l2) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n2, t, r2, l2);
      });
    } : e;
  }(function(e, n2) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n2;
    else {
      for (Wt = Wt || document.createElement("div"), Wt.innerHTML = "<svg>" + n2.valueOf().toString() + "</svg>", n2 = Wt.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n2.firstChild; )
        e.appendChild(n2.firstChild);
    }
  });
  function kt(e, n2) {
    if (n2) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n2;
        return;
      }
    }
    e.textContent = n2;
  }
  var ft = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Ia = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ft).forEach(function(e) {
    Ia.forEach(function(n2) {
      n2 = n2 + e.charAt(0).toUpperCase() + e.substring(1), ft[n2] = ft[e];
    });
  });
  function Lo(e, n2, t) {
    return n2 == null || typeof n2 == "boolean" || n2 === "" ? "" : t || typeof n2 != "number" || n2 === 0 || ft.hasOwnProperty(e) && ft[e] ? ("" + n2).trim() : n2 + "px";
  }
  function To(e, n2) {
    e = e.style;
    for (var t in n2)
      if (n2.hasOwnProperty(t)) {
        var r2 = t.indexOf("--") === 0, l2 = Lo(t, n2[t], r2);
        t === "float" && (t = "cssFloat"), r2 ? e.setProperty(t, l2) : e[t] = l2;
      }
  }
  var Ua = F({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function Fl(e, n2) {
    if (n2) {
      if (Ua[e] && (n2.children != null || n2.dangerouslySetInnerHTML != null))
        throw Error(v2(137, e));
      if (n2.dangerouslySetInnerHTML != null) {
        if (n2.children != null)
          throw Error(v2(60));
        if (typeof n2.dangerouslySetInnerHTML != "object" || !("__html" in n2.dangerouslySetInnerHTML))
          throw Error(v2(61));
      }
      if (n2.style != null && typeof n2.style != "object")
        throw Error(v2(62));
    }
  }
  function Il(e, n2) {
    if (e.indexOf("-") === -1)
      return typeof n2.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Ul = null;
  function Ci(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var jl = null, Vn = null, An = null;
  function gu(e) {
    if (e = Vt(e)) {
      if (typeof jl != "function")
        throw Error(v2(280));
      var n2 = e.stateNode;
      n2 && (n2 = Qr(n2), jl(e.stateNode, e.type, n2));
    }
  }
  function Mo(e) {
    Vn ? An ? An.push(e) : An = [e] : Vn = e;
  }
  function Do() {
    if (Vn) {
      var e = Vn, n2 = An;
      if (An = Vn = null, gu(e), n2)
        for (e = 0; e < n2.length; e++)
          gu(n2[e]);
    }
  }
  function Oo(e, n2) {
    return e(n2);
  }
  function Ro() {
  }
  var ul = false;
  function Fo(e, n2, t) {
    if (ul)
      return e(n2, t);
    ul = true;
    try {
      return Oo(e, n2, t);
    } finally {
      ul = false, (Vn !== null || An !== null) && (Ro(), Do());
    }
  }
  function Et(e, n2) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r2 = Qr(t);
    if (r2 === null)
      return null;
    t = r2[n2];
    e:
      switch (n2) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r2 = !r2.disabled) || (e = e.type, r2 = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r2;
          break e;
        default:
          e = false;
      }
    if (e)
      return null;
    if (t && typeof t != "function")
      throw Error(v2(231, n2, typeof t));
    return t;
  }
  var Vl = false;
  if (Fe2)
    try {
      xn = {}, Object.defineProperty(xn, "passive", { get: function() {
        Vl = true;
      } }), window.addEventListener("test", xn, xn), window.removeEventListener("test", xn, xn);
    } catch {
      Vl = false;
    }
  var xn;
  function ja(e, n2, t, r2, l2, i, u2, o, s2) {
    var d3 = Array.prototype.slice.call(arguments, 3);
    try {
      n2.apply(t, d3);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var dt = false, yr = null, gr = false, Al = null, Va = { onError: function(e) {
    dt = true, yr = e;
  } };
  function Aa(e, n2, t, r2, l2, i, u2, o, s2) {
    dt = false, yr = null, ja.apply(Va, arguments);
  }
  function Ba(e, n2, t, r2, l2, i, u2, o, s2) {
    if (Aa.apply(this, arguments), dt) {
      if (dt) {
        var d3 = yr;
        dt = false, yr = null;
      } else
        throw Error(v2(198));
      gr || (gr = true, Al = d3);
    }
  }
  function Cn(e) {
    var n2 = e, t = e;
    if (e.alternate)
      for (; n2.return; )
        n2 = n2.return;
    else {
      e = n2;
      do
        n2 = e, n2.flags & 4098 && (t = n2.return), e = n2.return;
      while (e);
    }
    return n2.tag === 3 ? t : null;
  }
  function Io(e) {
    if (e.tag === 13) {
      var n2 = e.memoizedState;
      if (n2 === null && (e = e.alternate, e !== null && (n2 = e.memoizedState)), n2 !== null)
        return n2.dehydrated;
    }
    return null;
  }
  function wu(e) {
    if (Cn(e) !== e)
      throw Error(v2(188));
  }
  function Ha(e) {
    var n2 = e.alternate;
    if (!n2) {
      if (n2 = Cn(e), n2 === null)
        throw Error(v2(188));
      return n2 !== e ? null : e;
    }
    for (var t = e, r2 = n2; ; ) {
      var l2 = t.return;
      if (l2 === null)
        break;
      var i = l2.alternate;
      if (i === null) {
        if (r2 = l2.return, r2 !== null) {
          t = r2;
          continue;
        }
        break;
      }
      if (l2.child === i.child) {
        for (i = l2.child; i; ) {
          if (i === t)
            return wu(l2), e;
          if (i === r2)
            return wu(l2), n2;
          i = i.sibling;
        }
        throw Error(v2(188));
      }
      if (t.return !== r2.return)
        t = l2, r2 = i;
      else {
        for (var u2 = false, o = l2.child; o; ) {
          if (o === t) {
            u2 = true, t = l2, r2 = i;
            break;
          }
          if (o === r2) {
            u2 = true, r2 = l2, t = i;
            break;
          }
          o = o.sibling;
        }
        if (!u2) {
          for (o = i.child; o; ) {
            if (o === t) {
              u2 = true, t = i, r2 = l2;
              break;
            }
            if (o === r2) {
              u2 = true, r2 = i, t = l2;
              break;
            }
            o = o.sibling;
          }
          if (!u2)
            throw Error(v2(189));
        }
      }
      if (t.alternate !== r2)
        throw Error(v2(190));
    }
    if (t.tag !== 3)
      throw Error(v2(188));
    return t.stateNode.current === t ? e : n2;
  }
  function Uo(e) {
    return e = Ha(e), e !== null ? jo(e) : null;
  }
  function jo(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n2 = jo(e);
      if (n2 !== null)
        return n2;
      e = e.sibling;
    }
    return null;
  }
  var Vo = ae3.unstable_scheduleCallback, Su = ae3.unstable_cancelCallback, Wa = ae3.unstable_shouldYield, Qa = ae3.unstable_requestPaint, j = ae3.unstable_now, $a = ae3.unstable_getCurrentPriorityLevel, xi = ae3.unstable_ImmediatePriority, Ao = ae3.unstable_UserBlockingPriority, wr = ae3.unstable_NormalPriority, Ka = ae3.unstable_LowPriority, Bo = ae3.unstable_IdlePriority, Ar = null, Pe3 = null;
  function Ya(e) {
    if (Pe3 && typeof Pe3.onCommitFiberRoot == "function")
      try {
        Pe3.onCommitFiberRoot(Ar, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var Ee3 = Math.clz32 ? Math.clz32 : Za, Xa = Math.log, Ga = Math.LN2;
  function Za(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Xa(e) / Ga | 0) | 0;
  }
  var Qt = 64, $t = 4194304;
  function at(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Sr(e, n2) {
    var t = e.pendingLanes;
    if (t === 0)
      return 0;
    var r2 = 0, l2 = e.suspendedLanes, i = e.pingedLanes, u2 = t & 268435455;
    if (u2 !== 0) {
      var o = u2 & ~l2;
      o !== 0 ? r2 = at(o) : (i &= u2, i !== 0 && (r2 = at(i)));
    } else
      u2 = t & ~l2, u2 !== 0 ? r2 = at(u2) : i !== 0 && (r2 = at(i));
    if (r2 === 0)
      return 0;
    if (n2 !== 0 && n2 !== r2 && !(n2 & l2) && (l2 = r2 & -r2, i = n2 & -n2, l2 >= i || l2 === 16 && (i & 4194240) !== 0))
      return n2;
    if (r2 & 4 && (r2 |= t & 16), n2 = e.entangledLanes, n2 !== 0)
      for (e = e.entanglements, n2 &= r2; 0 < n2; )
        t = 31 - Ee3(n2), l2 = 1 << t, r2 |= e[t], n2 &= ~l2;
    return r2;
  }
  function Ja(e, n2) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qa(e, n2) {
    for (var t = e.suspendedLanes, r2 = e.pingedLanes, l2 = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var u2 = 31 - Ee3(i), o = 1 << u2, s2 = l2[u2];
      s2 === -1 ? (!(o & t) || o & r2) && (l2[u2] = Ja(o, n2)) : s2 <= n2 && (e.expiredLanes |= o), i &= ~o;
    }
  }
  function Bl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ho() {
    var e = Qt;
    return Qt <<= 1, !(Qt & 4194240) && (Qt = 64), e;
  }
  function ol(e) {
    for (var n2 = [], t = 0; 31 > t; t++)
      n2.push(e);
    return n2;
  }
  function Ut(e, n2, t) {
    e.pendingLanes |= n2, n2 !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n2 = 31 - Ee3(n2), e[n2] = t;
  }
  function ba(e, n2) {
    var t = e.pendingLanes & ~n2;
    e.pendingLanes = n2, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n2, e.mutableReadLanes &= n2, e.entangledLanes &= n2, n2 = e.entanglements;
    var r2 = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l2 = 31 - Ee3(t), i = 1 << l2;
      n2[l2] = 0, r2[l2] = -1, e[l2] = -1, t &= ~i;
    }
  }
  function Ni(e, n2) {
    var t = e.entangledLanes |= n2;
    for (e = e.entanglements; t; ) {
      var r2 = 31 - Ee3(t), l2 = 1 << r2;
      l2 & n2 | e[r2] & n2 && (e[r2] |= n2), t &= ~l2;
    }
  }
  var P2 = 0;
  function Wo(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Qo, _i, $o, Ko, Yo, Hl = false, Kt = [], Xe = null, Ge = null, Ze = null, Ct = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), Qe = [], ec = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ku(e, n2) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xe = null;
        break;
      case "dragenter":
      case "dragleave":
        Ge = null;
        break;
      case "mouseover":
      case "mouseout":
        Ze = null;
        break;
      case "pointerover":
      case "pointerout":
        Ct.delete(n2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xt.delete(n2.pointerId);
    }
  }
  function et(e, n2, t, r2, l2, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: n2, domEventName: t, eventSystemFlags: r2, nativeEvent: i, targetContainers: [l2] }, n2 !== null && (n2 = Vt(n2), n2 !== null && _i(n2)), e) : (e.eventSystemFlags |= r2, n2 = e.targetContainers, l2 !== null && n2.indexOf(l2) === -1 && n2.push(l2), e);
  }
  function nc(e, n2, t, r2, l2) {
    switch (n2) {
      case "focusin":
        return Xe = et(Xe, e, n2, t, r2, l2), true;
      case "dragenter":
        return Ge = et(Ge, e, n2, t, r2, l2), true;
      case "mouseover":
        return Ze = et(Ze, e, n2, t, r2, l2), true;
      case "pointerover":
        var i = l2.pointerId;
        return Ct.set(i, et(Ct.get(i) || null, e, n2, t, r2, l2)), true;
      case "gotpointercapture":
        return i = l2.pointerId, xt.set(i, et(xt.get(i) || null, e, n2, t, r2, l2)), true;
    }
    return false;
  }
  function Xo(e) {
    var n2 = dn(e.target);
    if (n2 !== null) {
      var t = Cn(n2);
      if (t !== null) {
        if (n2 = t.tag, n2 === 13) {
          if (n2 = Io(t), n2 !== null) {
            e.blockedOn = n2, Yo(e.priority, function() {
              $o(t);
            });
            return;
          }
        } else if (n2 === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ur(e) {
    if (e.blockedOn !== null)
      return false;
    for (var n2 = e.targetContainers; 0 < n2.length; ) {
      var t = Wl(e.domEventName, e.eventSystemFlags, n2[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r2 = new t.constructor(t.type, t);
        Ul = r2, t.target.dispatchEvent(r2), Ul = null;
      } else
        return n2 = Vt(t), n2 !== null && _i(n2), e.blockedOn = t, false;
      n2.shift();
    }
    return true;
  }
  function Eu(e, n2, t) {
    ur(e) && t.delete(n2);
  }
  function tc() {
    Hl = false, Xe !== null && ur(Xe) && (Xe = null), Ge !== null && ur(Ge) && (Ge = null), Ze !== null && ur(Ze) && (Ze = null), Ct.forEach(Eu), xt.forEach(Eu);
  }
  function nt(e, n2) {
    e.blockedOn === n2 && (e.blockedOn = null, Hl || (Hl = true, ae3.unstable_scheduleCallback(ae3.unstable_NormalPriority, tc)));
  }
  function Nt(e) {
    function n2(l2) {
      return nt(l2, e);
    }
    if (0 < Kt.length) {
      nt(Kt[0], e);
      for (var t = 1; t < Kt.length; t++) {
        var r2 = Kt[t];
        r2.blockedOn === e && (r2.blockedOn = null);
      }
    }
    for (Xe !== null && nt(Xe, e), Ge !== null && nt(Ge, e), Ze !== null && nt(Ze, e), Ct.forEach(n2), xt.forEach(n2), t = 0; t < Qe.length; t++)
      r2 = Qe[t], r2.blockedOn === e && (r2.blockedOn = null);
    for (; 0 < Qe.length && (t = Qe[0], t.blockedOn === null); )
      Xo(t), t.blockedOn === null && Qe.shift();
  }
  var Bn = Ve2.ReactCurrentBatchConfig, kr = true;
  function rc(e, n2, t, r2) {
    var l2 = P2, i = Bn.transition;
    Bn.transition = null;
    try {
      P2 = 1, zi(e, n2, t, r2);
    } finally {
      P2 = l2, Bn.transition = i;
    }
  }
  function lc(e, n2, t, r2) {
    var l2 = P2, i = Bn.transition;
    Bn.transition = null;
    try {
      P2 = 4, zi(e, n2, t, r2);
    } finally {
      P2 = l2, Bn.transition = i;
    }
  }
  function zi(e, n2, t, r2) {
    if (kr) {
      var l2 = Wl(e, n2, t, r2);
      if (l2 === null)
        ml(e, n2, r2, Er, t), ku(e, r2);
      else if (nc(l2, e, n2, t, r2))
        r2.stopPropagation();
      else if (ku(e, r2), n2 & 4 && -1 < ec.indexOf(e)) {
        for (; l2 !== null; ) {
          var i = Vt(l2);
          if (i !== null && Qo(i), i = Wl(e, n2, t, r2), i === null && ml(e, n2, r2, Er, t), i === l2)
            break;
          l2 = i;
        }
        l2 !== null && r2.stopPropagation();
      } else
        ml(e, n2, r2, null, t);
    }
  }
  var Er = null;
  function Wl(e, n2, t, r2) {
    if (Er = null, e = Ci(r2), e = dn(e), e !== null)
      if (n2 = Cn(e), n2 === null)
        e = null;
      else if (t = n2.tag, t === 13) {
        if (e = Io(n2), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n2.stateNode.current.memoizedState.isDehydrated)
          return n2.tag === 3 ? n2.stateNode.containerInfo : null;
        e = null;
      } else
        n2 !== e && (e = null);
    return Er = e, null;
  }
  function Go(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch ($a()) {
          case xi:
            return 1;
          case Ao:
            return 4;
          case wr:
          case Ka:
            return 16;
          case Bo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ke = null, Pi = null, or = null;
  function Zo() {
    if (or)
      return or;
    var e, n2 = Pi, t = n2.length, r2, l2 = "value" in Ke ? Ke.value : Ke.textContent, i = l2.length;
    for (e = 0; e < t && n2[e] === l2[e]; e++)
      ;
    var u2 = t - e;
    for (r2 = 1; r2 <= u2 && n2[t - r2] === l2[i - r2]; r2++)
      ;
    return or = l2.slice(e, 1 < r2 ? 1 - r2 : void 0);
  }
  function sr(e) {
    var n2 = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n2 === 13 && (e = 13)) : e = n2, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Yt() {
    return true;
  }
  function Cu() {
    return false;
  }
  function ce2(e) {
    function n2(t, r2, l2, i, u2) {
      this._reactName = t, this._targetInst = l2, this.type = r2, this.nativeEvent = i, this.target = u2, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Yt : Cu, this.isPropagationStopped = Cu, this;
    }
    return F(n2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = false), this.isDefaultPrevented = Yt);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = true), this.isPropagationStopped = Yt);
    }, persist: function() {
    }, isPersistent: Yt }), n2;
  }
  var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Li = ce2(Jn), jt = F({}, Jn, { view: 0, detail: 0 }), ic = ce2(jt), sl, al, tt, Br = F({}, jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ti, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== tt && (tt && e.type === "mousemove" ? (sl = e.screenX - tt.screenX, al = e.screenY - tt.screenY) : al = sl = 0, tt = e), sl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : al;
  } }), xu = ce2(Br), uc = F({}, Br, { dataTransfer: 0 }), oc = ce2(uc), sc = F({}, jt, { relatedTarget: 0 }), cl = ce2(sc), ac = F({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cc = ce2(ac), fc = F({}, Jn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), dc = ce2(fc), pc = F({}, Jn, { data: 0 }), Nu = ce2(pc), mc = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, hc = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, vc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function yc(e) {
    var n2 = this.nativeEvent;
    return n2.getModifierState ? n2.getModifierState(e) : (e = vc[e]) ? !!n2[e] : false;
  }
  function Ti() {
    return yc;
  }
  var gc = F({}, jt, { key: function(e) {
    if (e.key) {
      var n2 = mc[e.key] || e.key;
      if (n2 !== "Unidentified")
        return n2;
    }
    return e.type === "keypress" ? (e = sr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ti, charCode: function(e) {
    return e.type === "keypress" ? sr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? sr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), wc = ce2(gc), Sc = F({}, Br, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _u = ce2(Sc), kc = F({}, jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ti }), Ec = ce2(kc), Cc = F({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), xc = ce2(Cc), Nc = F({}, Br, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), _c = ce2(Nc), zc = [9, 13, 27, 32], Mi = Fe2 && "CompositionEvent" in window, pt = null;
  Fe2 && "documentMode" in document && (pt = document.documentMode);
  var Pc = Fe2 && "TextEvent" in window && !pt, Jo = Fe2 && (!Mi || pt && 8 < pt && 11 >= pt), zu = String.fromCharCode(32), Pu = false;
  function qo(e, n2) {
    switch (e) {
      case "keyup":
        return zc.indexOf(n2.keyCode) !== -1;
      case "keydown":
        return n2.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function bo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pn = false;
  function Lc(e, n2) {
    switch (e) {
      case "compositionend":
        return bo(n2);
      case "keypress":
        return n2.which !== 32 ? null : (Pu = true, zu);
      case "textInput":
        return e = n2.data, e === zu && Pu ? null : e;
      default:
        return null;
    }
  }
  function Tc(e, n2) {
    if (Pn)
      return e === "compositionend" || !Mi && qo(e, n2) ? (e = Zo(), or = Pi = Ke = null, Pn = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n2.ctrlKey || n2.altKey || n2.metaKey) || n2.ctrlKey && n2.altKey) {
          if (n2.char && 1 < n2.char.length)
            return n2.char;
          if (n2.which)
            return String.fromCharCode(n2.which);
        }
        return null;
      case "compositionend":
        return Jo && n2.locale !== "ko" ? null : n2.data;
      default:
        return null;
    }
  }
  var Mc = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Lu(e) {
    var n2 = e && e.nodeName && e.nodeName.toLowerCase();
    return n2 === "input" ? !!Mc[e.type] : n2 === "textarea";
  }
  function es(e, n2, t, r2) {
    Mo(r2), n2 = Cr(n2, "onChange"), 0 < n2.length && (t = new Li("onChange", "change", null, t, r2), e.push({ event: t, listeners: n2 }));
  }
  var mt = null, _t = null;
  function Dc(e) {
    fs(e, 0);
  }
  function Hr(e) {
    var n2 = Mn(e);
    if (xo(n2))
      return e;
  }
  function Oc(e, n2) {
    if (e === "change")
      return n2;
  }
  var ns = false;
  Fe2 && (Fe2 ? (Gt = "oninput" in document, Gt || (fl = document.createElement("div"), fl.setAttribute("oninput", "return;"), Gt = typeof fl.oninput == "function"), Xt = Gt) : Xt = false, ns = Xt && (!document.documentMode || 9 < document.documentMode));
  var Xt, Gt, fl;
  function Tu() {
    mt && (mt.detachEvent("onpropertychange", ts), _t = mt = null);
  }
  function ts(e) {
    if (e.propertyName === "value" && Hr(_t)) {
      var n2 = [];
      es(n2, _t, e, Ci(e)), Fo(Dc, n2);
    }
  }
  function Rc(e, n2, t) {
    e === "focusin" ? (Tu(), mt = n2, _t = t, mt.attachEvent("onpropertychange", ts)) : e === "focusout" && Tu();
  }
  function Fc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Hr(_t);
  }
  function Ic(e, n2) {
    if (e === "click")
      return Hr(n2);
  }
  function Uc(e, n2) {
    if (e === "input" || e === "change")
      return Hr(n2);
  }
  function jc(e, n2) {
    return e === n2 && (e !== 0 || 1 / e === 1 / n2) || e !== e && n2 !== n2;
  }
  var xe3 = typeof Object.is == "function" ? Object.is : jc;
  function zt(e, n2) {
    if (xe3(e, n2))
      return true;
    if (typeof e != "object" || e === null || typeof n2 != "object" || n2 === null)
      return false;
    var t = Object.keys(e), r2 = Object.keys(n2);
    if (t.length !== r2.length)
      return false;
    for (r2 = 0; r2 < t.length; r2++) {
      var l2 = t[r2];
      if (!Nl.call(n2, l2) || !xe3(e[l2], n2[l2]))
        return false;
    }
    return true;
  }
  function Mu(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Du(e, n2) {
    var t = Mu(e);
    e = 0;
    for (var r2; t; ) {
      if (t.nodeType === 3) {
        if (r2 = e + t.textContent.length, e <= n2 && r2 >= n2)
          return { node: t, offset: n2 - e };
        e = r2;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Mu(t);
    }
  }
  function rs(e, n2) {
    return e && n2 ? e === n2 ? true : e && e.nodeType === 3 ? false : n2 && n2.nodeType === 3 ? rs(e, n2.parentNode) : "contains" in e ? e.contains(n2) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n2) & 16) : false : false;
  }
  function ls() {
    for (var e = window, n2 = vr(); n2 instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n2.contentWindow.location.href == "string";
      } catch {
        t = false;
      }
      if (t)
        e = n2.contentWindow;
      else
        break;
      n2 = vr(e.document);
    }
    return n2;
  }
  function Di(e) {
    var n2 = e && e.nodeName && e.nodeName.toLowerCase();
    return n2 && (n2 === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n2 === "textarea" || e.contentEditable === "true");
  }
  function Vc(e) {
    var n2 = ls(), t = e.focusedElem, r2 = e.selectionRange;
    if (n2 !== t && t && t.ownerDocument && rs(t.ownerDocument.documentElement, t)) {
      if (r2 !== null && Di(t)) {
        if (n2 = r2.start, e = r2.end, e === void 0 && (e = n2), "selectionStart" in t)
          t.selectionStart = n2, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n2 = t.ownerDocument || document) && n2.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l2 = t.textContent.length, i = Math.min(r2.start, l2);
          r2 = r2.end === void 0 ? i : Math.min(r2.end, l2), !e.extend && i > r2 && (l2 = r2, r2 = i, i = l2), l2 = Du(t, i);
          var u2 = Du(t, r2);
          l2 && u2 && (e.rangeCount !== 1 || e.anchorNode !== l2.node || e.anchorOffset !== l2.offset || e.focusNode !== u2.node || e.focusOffset !== u2.offset) && (n2 = n2.createRange(), n2.setStart(l2.node, l2.offset), e.removeAllRanges(), i > r2 ? (e.addRange(n2), e.extend(u2.node, u2.offset)) : (n2.setEnd(u2.node, u2.offset), e.addRange(n2)));
        }
      }
      for (n2 = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n2.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n2.length; t++)
        e = n2[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ac = Fe2 && "documentMode" in document && 11 >= document.documentMode, Ln = null, Ql = null, ht = null, $l = false;
  function Ou(e, n2, t) {
    var r2 = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    $l || Ln == null || Ln !== vr(r2) || (r2 = Ln, "selectionStart" in r2 && Di(r2) ? r2 = { start: r2.selectionStart, end: r2.selectionEnd } : (r2 = (r2.ownerDocument && r2.ownerDocument.defaultView || window).getSelection(), r2 = { anchorNode: r2.anchorNode, anchorOffset: r2.anchorOffset, focusNode: r2.focusNode, focusOffset: r2.focusOffset }), ht && zt(ht, r2) || (ht = r2, r2 = Cr(Ql, "onSelect"), 0 < r2.length && (n2 = new Li("onSelect", "select", null, n2, t), e.push({ event: n2, listeners: r2 }), n2.target = Ln)));
  }
  function Zt(e, n2) {
    var t = {};
    return t[e.toLowerCase()] = n2.toLowerCase(), t["Webkit" + e] = "webkit" + n2, t["Moz" + e] = "moz" + n2, t;
  }
  var Tn = { animationend: Zt("Animation", "AnimationEnd"), animationiteration: Zt("Animation", "AnimationIteration"), animationstart: Zt("Animation", "AnimationStart"), transitionend: Zt("Transition", "TransitionEnd") }, dl = {}, is = {};
  Fe2 && (is = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
  function Wr(e) {
    if (dl[e])
      return dl[e];
    if (!Tn[e])
      return e;
    var n2 = Tn[e], t;
    for (t in n2)
      if (n2.hasOwnProperty(t) && t in is)
        return dl[e] = n2[t];
    return e;
  }
  var us = Wr("animationend"), os = Wr("animationiteration"), ss = Wr("animationstart"), as = Wr("transitionend"), cs = /* @__PURE__ */ new Map(), Ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ln(e, n2) {
    cs.set(e, n2), En(n2, [e]);
  }
  for (Jt = 0; Jt < Ru.length; Jt++)
    qt = Ru[Jt], Fu = qt.toLowerCase(), Iu = qt[0].toUpperCase() + qt.slice(1), ln(Fu, "on" + Iu);
  var qt, Fu, Iu, Jt;
  ln(us, "onAnimationEnd");
  ln(os, "onAnimationIteration");
  ln(ss, "onAnimationStart");
  ln("dblclick", "onDoubleClick");
  ln("focusin", "onFocus");
  ln("focusout", "onBlur");
  ln(as, "onTransitionEnd");
  Qn("onMouseEnter", ["mouseout", "mouseover"]);
  Qn("onMouseLeave", ["mouseout", "mouseover"]);
  Qn("onPointerEnter", ["pointerout", "pointerover"]);
  Qn("onPointerLeave", ["pointerout", "pointerover"]);
  En("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  En("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  En("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  En("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  En("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ct = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bc = new Set("cancel close invalid load scroll toggle".split(" ").concat(ct));
  function Uu(e, n2, t) {
    var r2 = e.type || "unknown-event";
    e.currentTarget = t, Ba(r2, n2, void 0, e), e.currentTarget = null;
  }
  function fs(e, n2) {
    n2 = (n2 & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r2 = e[t], l2 = r2.event;
      r2 = r2.listeners;
      e: {
        var i = void 0;
        if (n2)
          for (var u2 = r2.length - 1; 0 <= u2; u2--) {
            var o = r2[u2], s2 = o.instance, d3 = o.currentTarget;
            if (o = o.listener, s2 !== i && l2.isPropagationStopped())
              break e;
            Uu(l2, o, d3), i = s2;
          }
        else
          for (u2 = 0; u2 < r2.length; u2++) {
            if (o = r2[u2], s2 = o.instance, d3 = o.currentTarget, o = o.listener, s2 !== i && l2.isPropagationStopped())
              break e;
            Uu(l2, o, d3), i = s2;
          }
      }
    }
    if (gr)
      throw e = Al, gr = false, Al = null, e;
  }
  function T2(e, n2) {
    var t = n2[Zl];
    t === void 0 && (t = n2[Zl] = /* @__PURE__ */ new Set());
    var r2 = e + "__bubble";
    t.has(r2) || (ds(n2, e, 2, false), t.add(r2));
  }
  function pl(e, n2, t) {
    var r2 = 0;
    n2 && (r2 |= 4), ds(t, e, r2, n2);
  }
  var bt = "_reactListening" + Math.random().toString(36).slice(2);
  function Pt(e) {
    if (!e[bt]) {
      e[bt] = true, wo.forEach(function(t) {
        t !== "selectionchange" && (Bc.has(t) || pl(t, false, e), pl(t, true, e));
      });
      var n2 = e.nodeType === 9 ? e : e.ownerDocument;
      n2 === null || n2[bt] || (n2[bt] = true, pl("selectionchange", false, n2));
    }
  }
  function ds(e, n2, t, r2) {
    switch (Go(n2)) {
      case 1:
        var l2 = rc;
        break;
      case 4:
        l2 = lc;
        break;
      default:
        l2 = zi;
    }
    t = l2.bind(null, n2, t, e), l2 = void 0, !Vl || n2 !== "touchstart" && n2 !== "touchmove" && n2 !== "wheel" || (l2 = true), r2 ? l2 !== void 0 ? e.addEventListener(n2, t, { capture: true, passive: l2 }) : e.addEventListener(n2, t, true) : l2 !== void 0 ? e.addEventListener(n2, t, { passive: l2 }) : e.addEventListener(n2, t, false);
  }
  function ml(e, n2, t, r2, l2) {
    var i = r2;
    if (!(n2 & 1) && !(n2 & 2) && r2 !== null)
      e:
        for (; ; ) {
          if (r2 === null)
            return;
          var u2 = r2.tag;
          if (u2 === 3 || u2 === 4) {
            var o = r2.stateNode.containerInfo;
            if (o === l2 || o.nodeType === 8 && o.parentNode === l2)
              break;
            if (u2 === 4)
              for (u2 = r2.return; u2 !== null; ) {
                var s2 = u2.tag;
                if ((s2 === 3 || s2 === 4) && (s2 = u2.stateNode.containerInfo, s2 === l2 || s2.nodeType === 8 && s2.parentNode === l2))
                  return;
                u2 = u2.return;
              }
            for (; o !== null; ) {
              if (u2 = dn(o), u2 === null)
                return;
              if (s2 = u2.tag, s2 === 5 || s2 === 6) {
                r2 = i = u2;
                continue e;
              }
              o = o.parentNode;
            }
          }
          r2 = r2.return;
        }
    Fo(function() {
      var d3 = i, m2 = Ci(t), h2 = [];
      e: {
        var p3 = cs.get(e);
        if (p3 !== void 0) {
          var g2 = Li, S2 = e;
          switch (e) {
            case "keypress":
              if (sr(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              g2 = wc;
              break;
            case "focusin":
              S2 = "focus", g2 = cl;
              break;
            case "focusout":
              S2 = "blur", g2 = cl;
              break;
            case "beforeblur":
            case "afterblur":
              g2 = cl;
              break;
            case "click":
              if (t.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g2 = xu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g2 = oc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g2 = Ec;
              break;
            case us:
            case os:
            case ss:
              g2 = cc;
              break;
            case as:
              g2 = xc;
              break;
            case "scroll":
              g2 = ic;
              break;
            case "wheel":
              g2 = _c;
              break;
            case "copy":
            case "cut":
            case "paste":
              g2 = dc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g2 = _u;
          }
          var k = (n2 & 4) !== 0, U3 = !k && e === "scroll", c = k ? p3 !== null ? p3 + "Capture" : null : p3;
          k = [];
          for (var a2 = d3, f3; a2 !== null; ) {
            f3 = a2;
            var y3 = f3.stateNode;
            if (f3.tag === 5 && y3 !== null && (f3 = y3, c !== null && (y3 = Et(a2, c), y3 != null && k.push(Lt(a2, y3, f3)))), U3)
              break;
            a2 = a2.return;
          }
          0 < k.length && (p3 = new g2(p3, S2, null, t, m2), h2.push({ event: p3, listeners: k }));
        }
      }
      if (!(n2 & 7)) {
        e: {
          if (p3 = e === "mouseover" || e === "pointerover", g2 = e === "mouseout" || e === "pointerout", p3 && t !== Ul && (S2 = t.relatedTarget || t.fromElement) && (dn(S2) || S2[Ie3]))
            break e;
          if ((g2 || p3) && (p3 = m2.window === m2 ? m2 : (p3 = m2.ownerDocument) ? p3.defaultView || p3.parentWindow : window, g2 ? (S2 = t.relatedTarget || t.toElement, g2 = d3, S2 = S2 ? dn(S2) : null, S2 !== null && (U3 = Cn(S2), S2 !== U3 || S2.tag !== 5 && S2.tag !== 6) && (S2 = null)) : (g2 = null, S2 = d3), g2 !== S2)) {
            if (k = xu, y3 = "onMouseLeave", c = "onMouseEnter", a2 = "mouse", (e === "pointerout" || e === "pointerover") && (k = _u, y3 = "onPointerLeave", c = "onPointerEnter", a2 = "pointer"), U3 = g2 == null ? p3 : Mn(g2), f3 = S2 == null ? p3 : Mn(S2), p3 = new k(y3, a2 + "leave", g2, t, m2), p3.target = U3, p3.relatedTarget = f3, y3 = null, dn(m2) === d3 && (k = new k(c, a2 + "enter", S2, t, m2), k.target = f3, k.relatedTarget = U3, y3 = k), U3 = y3, g2 && S2)
              n: {
                for (k = g2, c = S2, a2 = 0, f3 = k; f3; f3 = Nn(f3))
                  a2++;
                for (f3 = 0, y3 = c; y3; y3 = Nn(y3))
                  f3++;
                for (; 0 < a2 - f3; )
                  k = Nn(k), a2--;
                for (; 0 < f3 - a2; )
                  c = Nn(c), f3--;
                for (; a2--; ) {
                  if (k === c || c !== null && k === c.alternate)
                    break n;
                  k = Nn(k), c = Nn(c);
                }
                k = null;
              }
            else
              k = null;
            g2 !== null && ju(h2, p3, g2, k, false), S2 !== null && U3 !== null && ju(h2, U3, S2, k, true);
          }
        }
        e: {
          if (p3 = d3 ? Mn(d3) : window, g2 = p3.nodeName && p3.nodeName.toLowerCase(), g2 === "select" || g2 === "input" && p3.type === "file")
            var E4 = Oc;
          else if (Lu(p3))
            if (ns)
              E4 = Uc;
            else {
              E4 = Fc;
              var C2 = Rc;
            }
          else
            (g2 = p3.nodeName) && g2.toLowerCase() === "input" && (p3.type === "checkbox" || p3.type === "radio") && (E4 = Ic);
          if (E4 && (E4 = E4(e, d3))) {
            es(h2, E4, t, m2);
            break e;
          }
          C2 && C2(e, p3, d3), e === "focusout" && (C2 = p3._wrapperState) && C2.controlled && p3.type === "number" && Dl(p3, "number", p3.value);
        }
        switch (C2 = d3 ? Mn(d3) : window, e) {
          case "focusin":
            (Lu(C2) || C2.contentEditable === "true") && (Ln = C2, Ql = d3, ht = null);
            break;
          case "focusout":
            ht = Ql = Ln = null;
            break;
          case "mousedown":
            $l = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            $l = false, Ou(h2, t, m2);
            break;
          case "selectionchange":
            if (Ac)
              break;
          case "keydown":
          case "keyup":
            Ou(h2, t, m2);
        }
        var x3;
        if (Mi)
          e: {
            switch (e) {
              case "compositionstart":
                var N2 = "onCompositionStart";
                break e;
              case "compositionend":
                N2 = "onCompositionEnd";
                break e;
              case "compositionupdate":
                N2 = "onCompositionUpdate";
                break e;
            }
            N2 = void 0;
          }
        else
          Pn ? qo(e, t) && (N2 = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (N2 = "onCompositionStart");
        N2 && (Jo && t.locale !== "ko" && (Pn || N2 !== "onCompositionStart" ? N2 === "onCompositionEnd" && Pn && (x3 = Zo()) : (Ke = m2, Pi = "value" in Ke ? Ke.value : Ke.textContent, Pn = true)), C2 = Cr(d3, N2), 0 < C2.length && (N2 = new Nu(N2, e, null, t, m2), h2.push({ event: N2, listeners: C2 }), x3 ? N2.data = x3 : (x3 = bo(t), x3 !== null && (N2.data = x3)))), (x3 = Pc ? Lc(e, t) : Tc(e, t)) && (d3 = Cr(d3, "onBeforeInput"), 0 < d3.length && (m2 = new Nu("onBeforeInput", "beforeinput", null, t, m2), h2.push({ event: m2, listeners: d3 }), m2.data = x3));
      }
      fs(h2, n2);
    });
  }
  function Lt(e, n2, t) {
    return { instance: e, listener: n2, currentTarget: t };
  }
  function Cr(e, n2) {
    for (var t = n2 + "Capture", r2 = []; e !== null; ) {
      var l2 = e, i = l2.stateNode;
      l2.tag === 5 && i !== null && (l2 = i, i = Et(e, t), i != null && r2.unshift(Lt(e, i, l2)), i = Et(e, n2), i != null && r2.push(Lt(e, i, l2))), e = e.return;
    }
    return r2;
  }
  function Nn(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ju(e, n2, t, r2, l2) {
    for (var i = n2._reactName, u2 = []; t !== null && t !== r2; ) {
      var o = t, s2 = o.alternate, d3 = o.stateNode;
      if (s2 !== null && s2 === r2)
        break;
      o.tag === 5 && d3 !== null && (o = d3, l2 ? (s2 = Et(t, i), s2 != null && u2.unshift(Lt(t, s2, o))) : l2 || (s2 = Et(t, i), s2 != null && u2.push(Lt(t, s2, o)))), t = t.return;
    }
    u2.length !== 0 && e.push({ event: n2, listeners: u2 });
  }
  var Hc = /\r\n?/g, Wc = /\u0000|\uFFFD/g;
  function Vu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Hc, `
`).replace(Wc, "");
  }
  function er(e, n2, t) {
    if (n2 = Vu(n2), Vu(e) !== n2 && t)
      throw Error(v2(425));
  }
  function xr() {
  }
  var Kl = null, Yl = null;
  function Xl(e, n2) {
    return e === "textarea" || e === "noscript" || typeof n2.children == "string" || typeof n2.children == "number" || typeof n2.dangerouslySetInnerHTML == "object" && n2.dangerouslySetInnerHTML !== null && n2.dangerouslySetInnerHTML.__html != null;
  }
  var Gl = typeof setTimeout == "function" ? setTimeout : void 0, Qc = typeof clearTimeout == "function" ? clearTimeout : void 0, Au = typeof Promise == "function" ? Promise : void 0, $c = typeof queueMicrotask == "function" ? queueMicrotask : typeof Au < "u" ? function(e) {
    return Au.resolve(null).then(e).catch(Kc);
  } : Gl;
  function Kc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function hl(e, n2) {
    var t = n2, r2 = 0;
    do {
      var l2 = t.nextSibling;
      if (e.removeChild(t), l2 && l2.nodeType === 8)
        if (t = l2.data, t === "/$") {
          if (r2 === 0) {
            e.removeChild(l2), Nt(n2);
            return;
          }
          r2--;
        } else
          t !== "$" && t !== "$?" && t !== "$!" || r2++;
      t = l2;
    } while (t);
    Nt(n2);
  }
  function Je(e) {
    for (; e != null; e = e.nextSibling) {
      var n2 = e.nodeType;
      if (n2 === 1 || n2 === 3)
        break;
      if (n2 === 8) {
        if (n2 = e.data, n2 === "$" || n2 === "$!" || n2 === "$?")
          break;
        if (n2 === "/$")
          return null;
      }
    }
    return e;
  }
  function Bu(e) {
    e = e.previousSibling;
    for (var n2 = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n2 === 0)
            return e;
          n2--;
        } else
          t === "/$" && n2++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var qn = Math.random().toString(36).slice(2), ze2 = "__reactFiber$" + qn, Tt = "__reactProps$" + qn, Ie3 = "__reactContainer$" + qn, Zl = "__reactEvents$" + qn, Yc = "__reactListeners$" + qn, Xc = "__reactHandles$" + qn;
  function dn(e) {
    var n2 = e[ze2];
    if (n2)
      return n2;
    for (var t = e.parentNode; t; ) {
      if (n2 = t[Ie3] || t[ze2]) {
        if (t = n2.alternate, n2.child !== null || t !== null && t.child !== null)
          for (e = Bu(e); e !== null; ) {
            if (t = e[ze2])
              return t;
            e = Bu(e);
          }
        return n2;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Vt(e) {
    return e = e[ze2] || e[Ie3], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Mn(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(v2(33));
  }
  function Qr(e) {
    return e[Tt] || null;
  }
  var Jl = [], Dn = -1;
  function un(e) {
    return { current: e };
  }
  function M2(e) {
    0 > Dn || (e.current = Jl[Dn], Jl[Dn] = null, Dn--);
  }
  function L(e, n2) {
    Dn++, Jl[Dn] = e.current, e.current = n2;
  }
  var rn = {}, J = un(rn), re2 = un(false), yn = rn;
  function $n(e, n2) {
    var t = e.type.contextTypes;
    if (!t)
      return rn;
    var r2 = e.stateNode;
    if (r2 && r2.__reactInternalMemoizedUnmaskedChildContext === n2)
      return r2.__reactInternalMemoizedMaskedChildContext;
    var l2 = {}, i;
    for (i in t)
      l2[i] = n2[i];
    return r2 && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n2, e.__reactInternalMemoizedMaskedChildContext = l2), l2;
  }
  function le3(e) {
    return e = e.childContextTypes, e != null;
  }
  function Nr() {
    M2(re2), M2(J);
  }
  function Hu(e, n2, t) {
    if (J.current !== rn)
      throw Error(v2(168));
    L(J, n2), L(re2, t);
  }
  function ps(e, n2, t) {
    var r2 = e.stateNode;
    if (n2 = n2.childContextTypes, typeof r2.getChildContext != "function")
      return t;
    r2 = r2.getChildContext();
    for (var l2 in r2)
      if (!(l2 in n2))
        throw Error(v2(108, Ra(e) || "Unknown", l2));
    return F({}, t, r2);
  }
  function _r(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rn, yn = J.current, L(J, e), L(re2, re2.current), true;
  }
  function Wu(e, n2, t) {
    var r2 = e.stateNode;
    if (!r2)
      throw Error(v2(169));
    t ? (e = ps(e, n2, yn), r2.__reactInternalMemoizedMergedChildContext = e, M2(re2), M2(J), L(J, e)) : M2(re2), L(re2, t);
  }
  var Me2 = null, $r = false, vl = false;
  function ms(e) {
    Me2 === null ? Me2 = [e] : Me2.push(e);
  }
  function Gc(e) {
    $r = true, ms(e);
  }
  function on() {
    if (!vl && Me2 !== null) {
      vl = true;
      var e = 0, n2 = P2;
      try {
        var t = Me2;
        for (P2 = 1; e < t.length; e++) {
          var r2 = t[e];
          do
            r2 = r2(true);
          while (r2 !== null);
        }
        Me2 = null, $r = false;
      } catch (l2) {
        throw Me2 !== null && (Me2 = Me2.slice(e + 1)), Vo(xi, on), l2;
      } finally {
        P2 = n2, vl = false;
      }
    }
    return null;
  }
  var On = [], Rn = 0, zr = null, Pr = 0, de3 = [], pe3 = 0, gn = null, De2 = 1, Oe2 = "";
  function cn(e, n2) {
    On[Rn++] = Pr, On[Rn++] = zr, zr = e, Pr = n2;
  }
  function hs(e, n2, t) {
    de3[pe3++] = De2, de3[pe3++] = Oe2, de3[pe3++] = gn, gn = e;
    var r2 = De2;
    e = Oe2;
    var l2 = 32 - Ee3(r2) - 1;
    r2 &= ~(1 << l2), t += 1;
    var i = 32 - Ee3(n2) + l2;
    if (30 < i) {
      var u2 = l2 - l2 % 5;
      i = (r2 & (1 << u2) - 1).toString(32), r2 >>= u2, l2 -= u2, De2 = 1 << 32 - Ee3(n2) + l2 | t << l2 | r2, Oe2 = i + e;
    } else
      De2 = 1 << i | t << l2 | r2, Oe2 = e;
  }
  function Oi(e) {
    e.return !== null && (cn(e, 1), hs(e, 1, 0));
  }
  function Ri(e) {
    for (; e === zr; )
      zr = On[--Rn], On[Rn] = null, Pr = On[--Rn], On[Rn] = null;
    for (; e === gn; )
      gn = de3[--pe3], de3[pe3] = null, Oe2 = de3[--pe3], de3[pe3] = null, De2 = de3[--pe3], de3[pe3] = null;
  }
  var se2 = null, oe2 = null, D = false, ke3 = null;
  function vs(e, n2) {
    var t = me3(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n2, t.return = e, n2 = e.deletions, n2 === null ? (e.deletions = [t], e.flags |= 16) : n2.push(t);
  }
  function Qu(e, n2) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n2 = n2.nodeType !== 1 || t.toLowerCase() !== n2.nodeName.toLowerCase() ? null : n2, n2 !== null ? (e.stateNode = n2, se2 = e, oe2 = Je(n2.firstChild), true) : false;
      case 6:
        return n2 = e.pendingProps === "" || n2.nodeType !== 3 ? null : n2, n2 !== null ? (e.stateNode = n2, se2 = e, oe2 = null, true) : false;
      case 13:
        return n2 = n2.nodeType !== 8 ? null : n2, n2 !== null ? (t = gn !== null ? { id: De2, overflow: Oe2 } : null, e.memoizedState = { dehydrated: n2, treeContext: t, retryLane: 1073741824 }, t = me3(18, null, null, 0), t.stateNode = n2, t.return = e, e.child = t, se2 = e, oe2 = null, true) : false;
      default:
        return false;
    }
  }
  function ql(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function bl(e) {
    if (D) {
      var n2 = oe2;
      if (n2) {
        var t = n2;
        if (!Qu(e, n2)) {
          if (ql(e))
            throw Error(v2(418));
          n2 = Je(t.nextSibling);
          var r2 = se2;
          n2 && Qu(e, n2) ? vs(r2, t) : (e.flags = e.flags & -4097 | 2, D = false, se2 = e);
        }
      } else {
        if (ql(e))
          throw Error(v2(418));
        e.flags = e.flags & -4097 | 2, D = false, se2 = e;
      }
    }
  }
  function $u(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    se2 = e;
  }
  function nr(e) {
    if (e !== se2)
      return false;
    if (!D)
      return $u(e), D = true, false;
    var n2;
    if ((n2 = e.tag !== 3) && !(n2 = e.tag !== 5) && (n2 = e.type, n2 = n2 !== "head" && n2 !== "body" && !Xl(e.type, e.memoizedProps)), n2 && (n2 = oe2)) {
      if (ql(e))
        throw ys(), Error(v2(418));
      for (; n2; )
        vs(e, n2), n2 = Je(n2.nextSibling);
    }
    if ($u(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(v2(317));
      e: {
        for (e = e.nextSibling, n2 = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n2 === 0) {
                oe2 = Je(e.nextSibling);
                break e;
              }
              n2--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || n2++;
          }
          e = e.nextSibling;
        }
        oe2 = null;
      }
    } else
      oe2 = se2 ? Je(e.stateNode.nextSibling) : null;
    return true;
  }
  function ys() {
    for (var e = oe2; e; )
      e = Je(e.nextSibling);
  }
  function Kn() {
    oe2 = se2 = null, D = false;
  }
  function Fi(e) {
    ke3 === null ? ke3 = [e] : ke3.push(e);
  }
  var Zc = Ve2.ReactCurrentBatchConfig;
  function we3(e, n2) {
    if (e && e.defaultProps) {
      n2 = F({}, n2), e = e.defaultProps;
      for (var t in e)
        n2[t] === void 0 && (n2[t] = e[t]);
      return n2;
    }
    return n2;
  }
  var Lr = un(null), Tr = null, Fn = null, Ii = null;
  function Ui() {
    Ii = Fn = Tr = null;
  }
  function ji(e) {
    var n2 = Lr.current;
    M2(Lr), e._currentValue = n2;
  }
  function ei(e, n2, t) {
    for (; e !== null; ) {
      var r2 = e.alternate;
      if ((e.childLanes & n2) !== n2 ? (e.childLanes |= n2, r2 !== null && (r2.childLanes |= n2)) : r2 !== null && (r2.childLanes & n2) !== n2 && (r2.childLanes |= n2), e === t)
        break;
      e = e.return;
    }
  }
  function Hn(e, n2) {
    Tr = e, Ii = Fn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n2 && (te2 = true), e.firstContext = null);
  }
  function ve3(e) {
    var n2 = e._currentValue;
    if (Ii !== e)
      if (e = { context: e, memoizedValue: n2, next: null }, Fn === null) {
        if (Tr === null)
          throw Error(v2(308));
        Fn = e, Tr.dependencies = { lanes: 0, firstContext: e };
      } else
        Fn = Fn.next = e;
    return n2;
  }
  var pn = null;
  function Vi(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  function gs(e, n2, t, r2) {
    var l2 = n2.interleaved;
    return l2 === null ? (t.next = t, Vi(n2)) : (t.next = l2.next, l2.next = t), n2.interleaved = t, Ue2(e, r2);
  }
  function Ue2(e, n2) {
    e.lanes |= n2;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n2), t = e, e = e.return; e !== null; )
      e.childLanes |= n2, t = e.alternate, t !== null && (t.childLanes |= n2), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var We2 = false;
  function Ai(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ws(e, n2) {
    e = e.updateQueue, n2.updateQueue === e && (n2.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Re2(e, n2) {
    return { eventTime: e, lane: n2, tag: 0, payload: null, callback: null, next: null };
  }
  function qe2(e, n2, t) {
    var r2 = e.updateQueue;
    if (r2 === null)
      return null;
    if (r2 = r2.shared, _ & 2) {
      var l2 = r2.pending;
      return l2 === null ? n2.next = n2 : (n2.next = l2.next, l2.next = n2), r2.pending = n2, Ue2(e, t);
    }
    return l2 = r2.interleaved, l2 === null ? (n2.next = n2, Vi(r2)) : (n2.next = l2.next, l2.next = n2), r2.interleaved = n2, Ue2(e, t);
  }
  function ar(e, n2, t) {
    if (n2 = n2.updateQueue, n2 !== null && (n2 = n2.shared, (t & 4194240) !== 0)) {
      var r2 = n2.lanes;
      r2 &= e.pendingLanes, t |= r2, n2.lanes = t, Ni(e, t);
    }
  }
  function Ku(e, n2) {
    var t = e.updateQueue, r2 = e.alternate;
    if (r2 !== null && (r2 = r2.updateQueue, t === r2)) {
      var l2 = null, i = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var u2 = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          i === null ? l2 = i = u2 : i = i.next = u2, t = t.next;
        } while (t !== null);
        i === null ? l2 = i = n2 : i = i.next = n2;
      } else
        l2 = i = n2;
      t = { baseState: r2.baseState, firstBaseUpdate: l2, lastBaseUpdate: i, shared: r2.shared, effects: r2.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n2 : e.next = n2, t.lastBaseUpdate = n2;
  }
  function Mr(e, n2, t, r2) {
    var l2 = e.updateQueue;
    We2 = false;
    var i = l2.firstBaseUpdate, u2 = l2.lastBaseUpdate, o = l2.shared.pending;
    if (o !== null) {
      l2.shared.pending = null;
      var s2 = o, d3 = s2.next;
      s2.next = null, u2 === null ? i = d3 : u2.next = d3, u2 = s2;
      var m2 = e.alternate;
      m2 !== null && (m2 = m2.updateQueue, o = m2.lastBaseUpdate, o !== u2 && (o === null ? m2.firstBaseUpdate = d3 : o.next = d3, m2.lastBaseUpdate = s2));
    }
    if (i !== null) {
      var h2 = l2.baseState;
      u2 = 0, m2 = d3 = s2 = null, o = i;
      do {
        var p3 = o.lane, g2 = o.eventTime;
        if ((r2 & p3) === p3) {
          m2 !== null && (m2 = m2.next = { eventTime: g2, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
          e: {
            var S2 = e, k = o;
            switch (p3 = n2, g2 = t, k.tag) {
              case 1:
                if (S2 = k.payload, typeof S2 == "function") {
                  h2 = S2.call(g2, h2, p3);
                  break e;
                }
                h2 = S2;
                break e;
              case 3:
                S2.flags = S2.flags & -65537 | 128;
              case 0:
                if (S2 = k.payload, p3 = typeof S2 == "function" ? S2.call(g2, h2, p3) : S2, p3 == null)
                  break e;
                h2 = F({}, h2, p3);
                break e;
              case 2:
                We2 = true;
            }
          }
          o.callback !== null && o.lane !== 0 && (e.flags |= 64, p3 = l2.effects, p3 === null ? l2.effects = [o] : p3.push(o));
        } else
          g2 = { eventTime: g2, lane: p3, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, m2 === null ? (d3 = m2 = g2, s2 = h2) : m2 = m2.next = g2, u2 |= p3;
        if (o = o.next, o === null) {
          if (o = l2.shared.pending, o === null)
            break;
          p3 = o, o = p3.next, p3.next = null, l2.lastBaseUpdate = p3, l2.shared.pending = null;
        }
      } while (1);
      if (m2 === null && (s2 = h2), l2.baseState = s2, l2.firstBaseUpdate = d3, l2.lastBaseUpdate = m2, n2 = l2.shared.interleaved, n2 !== null) {
        l2 = n2;
        do
          u2 |= l2.lane, l2 = l2.next;
        while (l2 !== n2);
      } else
        i === null && (l2.shared.lanes = 0);
      Sn |= u2, e.lanes = u2, e.memoizedState = h2;
    }
  }
  function Yu(e, n2, t) {
    if (e = n2.effects, n2.effects = null, e !== null)
      for (n2 = 0; n2 < e.length; n2++) {
        var r2 = e[n2], l2 = r2.callback;
        if (l2 !== null) {
          if (r2.callback = null, r2 = t, typeof l2 != "function")
            throw Error(v2(191, l2));
          l2.call(r2);
        }
      }
  }
  var Ss = new go.Component().refs;
  function ni(e, n2, t, r2) {
    n2 = e.memoizedState, t = t(r2, n2), t = t == null ? n2 : F({}, n2, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Kr = { isMounted: function(e) {
    return (e = e._reactInternals) ? Cn(e) === e : false;
  }, enqueueSetState: function(e, n2, t) {
    e = e._reactInternals;
    var r2 = b(), l2 = en(e), i = Re2(r2, l2);
    i.payload = n2, t != null && (i.callback = t), n2 = qe2(e, i, l2), n2 !== null && (Ce3(n2, e, l2, r2), ar(n2, e, l2));
  }, enqueueReplaceState: function(e, n2, t) {
    e = e._reactInternals;
    var r2 = b(), l2 = en(e), i = Re2(r2, l2);
    i.tag = 1, i.payload = n2, t != null && (i.callback = t), n2 = qe2(e, i, l2), n2 !== null && (Ce3(n2, e, l2, r2), ar(n2, e, l2));
  }, enqueueForceUpdate: function(e, n2) {
    e = e._reactInternals;
    var t = b(), r2 = en(e), l2 = Re2(t, r2);
    l2.tag = 2, n2 != null && (l2.callback = n2), n2 = qe2(e, l2, r2), n2 !== null && (Ce3(n2, e, r2, t), ar(n2, e, r2));
  } };
  function Xu(e, n2, t, r2, l2, i, u2) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r2, i, u2) : n2.prototype && n2.prototype.isPureReactComponent ? !zt(t, r2) || !zt(l2, i) : true;
  }
  function ks(e, n2, t) {
    var r2 = false, l2 = rn, i = n2.contextType;
    return typeof i == "object" && i !== null ? i = ve3(i) : (l2 = le3(n2) ? yn : J.current, r2 = n2.contextTypes, i = (r2 = r2 != null) ? $n(e, l2) : rn), n2 = new n2(t, i), e.memoizedState = n2.state !== null && n2.state !== void 0 ? n2.state : null, n2.updater = Kr, e.stateNode = n2, n2._reactInternals = e, r2 && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l2, e.__reactInternalMemoizedMaskedChildContext = i), n2;
  }
  function Gu(e, n2, t, r2) {
    e = n2.state, typeof n2.componentWillReceiveProps == "function" && n2.componentWillReceiveProps(t, r2), typeof n2.UNSAFE_componentWillReceiveProps == "function" && n2.UNSAFE_componentWillReceiveProps(t, r2), n2.state !== e && Kr.enqueueReplaceState(n2, n2.state, null);
  }
  function ti(e, n2, t, r2) {
    var l2 = e.stateNode;
    l2.props = t, l2.state = e.memoizedState, l2.refs = Ss, Ai(e);
    var i = n2.contextType;
    typeof i == "object" && i !== null ? l2.context = ve3(i) : (i = le3(n2) ? yn : J.current, l2.context = $n(e, i)), l2.state = e.memoizedState, i = n2.getDerivedStateFromProps, typeof i == "function" && (ni(e, n2, i, t), l2.state = e.memoizedState), typeof n2.getDerivedStateFromProps == "function" || typeof l2.getSnapshotBeforeUpdate == "function" || typeof l2.UNSAFE_componentWillMount != "function" && typeof l2.componentWillMount != "function" || (n2 = l2.state, typeof l2.componentWillMount == "function" && l2.componentWillMount(), typeof l2.UNSAFE_componentWillMount == "function" && l2.UNSAFE_componentWillMount(), n2 !== l2.state && Kr.enqueueReplaceState(l2, l2.state, null), Mr(e, t, l2, r2), l2.state = e.memoizedState), typeof l2.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function rt(e, n2, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(v2(309));
          var r2 = t.stateNode;
        }
        if (!r2)
          throw Error(v2(147, e));
        var l2 = r2, i = "" + e;
        return n2 !== null && n2.ref !== null && typeof n2.ref == "function" && n2.ref._stringRef === i ? n2.ref : (n2 = function(u2) {
          var o = l2.refs;
          o === Ss && (o = l2.refs = {}), u2 === null ? delete o[i] : o[i] = u2;
        }, n2._stringRef = i, n2);
      }
      if (typeof e != "string")
        throw Error(v2(284));
      if (!t._owner)
        throw Error(v2(290, e));
    }
    return e;
  }
  function tr(e, n2) {
    throw e = Object.prototype.toString.call(n2), Error(v2(31, e === "[object Object]" ? "object with keys {" + Object.keys(n2).join(", ") + "}" : e));
  }
  function Zu(e) {
    var n2 = e._init;
    return n2(e._payload);
  }
  function Es(e) {
    function n2(c, a2) {
      if (e) {
        var f3 = c.deletions;
        f3 === null ? (c.deletions = [a2], c.flags |= 16) : f3.push(a2);
      }
    }
    function t(c, a2) {
      if (!e)
        return null;
      for (; a2 !== null; )
        n2(c, a2), a2 = a2.sibling;
      return null;
    }
    function r2(c, a2) {
      for (c = /* @__PURE__ */ new Map(); a2 !== null; )
        a2.key !== null ? c.set(a2.key, a2) : c.set(a2.index, a2), a2 = a2.sibling;
      return c;
    }
    function l2(c, a2) {
      return c = nn(c, a2), c.index = 0, c.sibling = null, c;
    }
    function i(c, a2, f3) {
      return c.index = f3, e ? (f3 = c.alternate, f3 !== null ? (f3 = f3.index, f3 < a2 ? (c.flags |= 2, a2) : f3) : (c.flags |= 2, a2)) : (c.flags |= 1048576, a2);
    }
    function u2(c) {
      return e && c.alternate === null && (c.flags |= 2), c;
    }
    function o(c, a2, f3, y3) {
      return a2 === null || a2.tag !== 6 ? (a2 = Cl(f3, c.mode, y3), a2.return = c, a2) : (a2 = l2(a2, f3), a2.return = c, a2);
    }
    function s2(c, a2, f3, y3) {
      var E4 = f3.type;
      return E4 === zn ? m2(c, a2, f3.props.children, y3, f3.key) : a2 !== null && (a2.elementType === E4 || typeof E4 == "object" && E4 !== null && E4.$$typeof === He2 && Zu(E4) === a2.type) ? (y3 = l2(a2, f3.props), y3.ref = rt(c, a2, f3), y3.return = c, y3) : (y3 = hr(f3.type, f3.key, f3.props, null, c.mode, y3), y3.ref = rt(c, a2, f3), y3.return = c, y3);
    }
    function d3(c, a2, f3, y3) {
      return a2 === null || a2.tag !== 4 || a2.stateNode.containerInfo !== f3.containerInfo || a2.stateNode.implementation !== f3.implementation ? (a2 = xl(f3, c.mode, y3), a2.return = c, a2) : (a2 = l2(a2, f3.children || []), a2.return = c, a2);
    }
    function m2(c, a2, f3, y3, E4) {
      return a2 === null || a2.tag !== 7 ? (a2 = vn(f3, c.mode, y3, E4), a2.return = c, a2) : (a2 = l2(a2, f3), a2.return = c, a2);
    }
    function h2(c, a2, f3) {
      if (typeof a2 == "string" && a2 !== "" || typeof a2 == "number")
        return a2 = Cl("" + a2, c.mode, f3), a2.return = c, a2;
      if (typeof a2 == "object" && a2 !== null) {
        switch (a2.$$typeof) {
          case Bt:
            return f3 = hr(a2.type, a2.key, a2.props, null, c.mode, f3), f3.ref = rt(c, null, a2), f3.return = c, f3;
          case _n:
            return a2 = xl(a2, c.mode, f3), a2.return = c, a2;
          case He2:
            var y3 = a2._init;
            return h2(c, y3(a2._payload), f3);
        }
        if (st(a2) || bn(a2))
          return a2 = vn(a2, c.mode, f3, null), a2.return = c, a2;
        tr(c, a2);
      }
      return null;
    }
    function p3(c, a2, f3, y3) {
      var E4 = a2 !== null ? a2.key : null;
      if (typeof f3 == "string" && f3 !== "" || typeof f3 == "number")
        return E4 !== null ? null : o(c, a2, "" + f3, y3);
      if (typeof f3 == "object" && f3 !== null) {
        switch (f3.$$typeof) {
          case Bt:
            return f3.key === E4 ? s2(c, a2, f3, y3) : null;
          case _n:
            return f3.key === E4 ? d3(c, a2, f3, y3) : null;
          case He2:
            return E4 = f3._init, p3(c, a2, E4(f3._payload), y3);
        }
        if (st(f3) || bn(f3))
          return E4 !== null ? null : m2(c, a2, f3, y3, null);
        tr(c, f3);
      }
      return null;
    }
    function g2(c, a2, f3, y3, E4) {
      if (typeof y3 == "string" && y3 !== "" || typeof y3 == "number")
        return c = c.get(f3) || null, o(a2, c, "" + y3, E4);
      if (typeof y3 == "object" && y3 !== null) {
        switch (y3.$$typeof) {
          case Bt:
            return c = c.get(y3.key === null ? f3 : y3.key) || null, s2(a2, c, y3, E4);
          case _n:
            return c = c.get(y3.key === null ? f3 : y3.key) || null, d3(a2, c, y3, E4);
          case He2:
            var C2 = y3._init;
            return g2(c, a2, f3, C2(y3._payload), E4);
        }
        if (st(y3) || bn(y3))
          return c = c.get(f3) || null, m2(a2, c, y3, E4, null);
        tr(a2, y3);
      }
      return null;
    }
    function S2(c, a2, f3, y3) {
      for (var E4 = null, C2 = null, x3 = a2, N2 = a2 = 0, H2 = null; x3 !== null && N2 < f3.length; N2++) {
        x3.index > N2 ? (H2 = x3, x3 = null) : H2 = x3.sibling;
        var z2 = p3(c, x3, f3[N2], y3);
        if (z2 === null) {
          x3 === null && (x3 = H2);
          break;
        }
        e && x3 && z2.alternate === null && n2(c, x3), a2 = i(z2, a2, N2), C2 === null ? E4 = z2 : C2.sibling = z2, C2 = z2, x3 = H2;
      }
      if (N2 === f3.length)
        return t(c, x3), D && cn(c, N2), E4;
      if (x3 === null) {
        for (; N2 < f3.length; N2++)
          x3 = h2(c, f3[N2], y3), x3 !== null && (a2 = i(x3, a2, N2), C2 === null ? E4 = x3 : C2.sibling = x3, C2 = x3);
        return D && cn(c, N2), E4;
      }
      for (x3 = r2(c, x3); N2 < f3.length; N2++)
        H2 = g2(x3, c, N2, f3[N2], y3), H2 !== null && (e && H2.alternate !== null && x3.delete(H2.key === null ? N2 : H2.key), a2 = i(H2, a2, N2), C2 === null ? E4 = H2 : C2.sibling = H2, C2 = H2);
      return e && x3.forEach(function(Ae2) {
        return n2(c, Ae2);
      }), D && cn(c, N2), E4;
    }
    function k(c, a2, f3, y3) {
      var E4 = bn(f3);
      if (typeof E4 != "function")
        throw Error(v2(150));
      if (f3 = E4.call(f3), f3 == null)
        throw Error(v2(151));
      for (var C2 = E4 = null, x3 = a2, N2 = a2 = 0, H2 = null, z2 = f3.next(); x3 !== null && !z2.done; N2++, z2 = f3.next()) {
        x3.index > N2 ? (H2 = x3, x3 = null) : H2 = x3.sibling;
        var Ae2 = p3(c, x3, z2.value, y3);
        if (Ae2 === null) {
          x3 === null && (x3 = H2);
          break;
        }
        e && x3 && Ae2.alternate === null && n2(c, x3), a2 = i(Ae2, a2, N2), C2 === null ? E4 = Ae2 : C2.sibling = Ae2, C2 = Ae2, x3 = H2;
      }
      if (z2.done)
        return t(c, x3), D && cn(c, N2), E4;
      if (x3 === null) {
        for (; !z2.done; N2++, z2 = f3.next())
          z2 = h2(c, z2.value, y3), z2 !== null && (a2 = i(z2, a2, N2), C2 === null ? E4 = z2 : C2.sibling = z2, C2 = z2);
        return D && cn(c, N2), E4;
      }
      for (x3 = r2(c, x3); !z2.done; N2++, z2 = f3.next())
        z2 = g2(x3, c, N2, z2.value, y3), z2 !== null && (e && z2.alternate !== null && x3.delete(z2.key === null ? N2 : z2.key), a2 = i(z2, a2, N2), C2 === null ? E4 = z2 : C2.sibling = z2, C2 = z2);
      return e && x3.forEach(function(Ea) {
        return n2(c, Ea);
      }), D && cn(c, N2), E4;
    }
    function U3(c, a2, f3, y3) {
      if (typeof f3 == "object" && f3 !== null && f3.type === zn && f3.key === null && (f3 = f3.props.children), typeof f3 == "object" && f3 !== null) {
        switch (f3.$$typeof) {
          case Bt:
            e: {
              for (var E4 = f3.key, C2 = a2; C2 !== null; ) {
                if (C2.key === E4) {
                  if (E4 = f3.type, E4 === zn) {
                    if (C2.tag === 7) {
                      t(c, C2.sibling), a2 = l2(C2, f3.props.children), a2.return = c, c = a2;
                      break e;
                    }
                  } else if (C2.elementType === E4 || typeof E4 == "object" && E4 !== null && E4.$$typeof === He2 && Zu(E4) === C2.type) {
                    t(c, C2.sibling), a2 = l2(C2, f3.props), a2.ref = rt(c, C2, f3), a2.return = c, c = a2;
                    break e;
                  }
                  t(c, C2);
                  break;
                } else
                  n2(c, C2);
                C2 = C2.sibling;
              }
              f3.type === zn ? (a2 = vn(f3.props.children, c.mode, y3, f3.key), a2.return = c, c = a2) : (y3 = hr(f3.type, f3.key, f3.props, null, c.mode, y3), y3.ref = rt(c, a2, f3), y3.return = c, c = y3);
            }
            return u2(c);
          case _n:
            e: {
              for (C2 = f3.key; a2 !== null; ) {
                if (a2.key === C2)
                  if (a2.tag === 4 && a2.stateNode.containerInfo === f3.containerInfo && a2.stateNode.implementation === f3.implementation) {
                    t(c, a2.sibling), a2 = l2(a2, f3.children || []), a2.return = c, c = a2;
                    break e;
                  } else {
                    t(c, a2);
                    break;
                  }
                else
                  n2(c, a2);
                a2 = a2.sibling;
              }
              a2 = xl(f3, c.mode, y3), a2.return = c, c = a2;
            }
            return u2(c);
          case He2:
            return C2 = f3._init, U3(c, a2, C2(f3._payload), y3);
        }
        if (st(f3))
          return S2(c, a2, f3, y3);
        if (bn(f3))
          return k(c, a2, f3, y3);
        tr(c, f3);
      }
      return typeof f3 == "string" && f3 !== "" || typeof f3 == "number" ? (f3 = "" + f3, a2 !== null && a2.tag === 6 ? (t(c, a2.sibling), a2 = l2(a2, f3), a2.return = c, c = a2) : (t(c, a2), a2 = Cl(f3, c.mode, y3), a2.return = c, c = a2), u2(c)) : t(c, a2);
    }
    return U3;
  }
  var Yn = Es(true), Cs = Es(false), At = {}, Le2 = un(At), Mt = un(At), Dt = un(At);
  function mn(e) {
    if (e === At)
      throw Error(v2(174));
    return e;
  }
  function Bi(e, n2) {
    switch (L(Dt, n2), L(Mt, e), L(Le2, At), e = n2.nodeType, e) {
      case 9:
      case 11:
        n2 = (n2 = n2.documentElement) ? n2.namespaceURI : Rl(null, "");
        break;
      default:
        e = e === 8 ? n2.parentNode : n2, n2 = e.namespaceURI || null, e = e.tagName, n2 = Rl(n2, e);
    }
    M2(Le2), L(Le2, n2);
  }
  function Xn() {
    M2(Le2), M2(Mt), M2(Dt);
  }
  function xs(e) {
    mn(Dt.current);
    var n2 = mn(Le2.current), t = Rl(n2, e.type);
    n2 !== t && (L(Mt, e), L(Le2, t));
  }
  function Hi(e) {
    Mt.current === e && (M2(Le2), M2(Mt));
  }
  var O4 = un(0);
  function Dr(e) {
    for (var n2 = e; n2 !== null; ) {
      if (n2.tag === 13) {
        var t = n2.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
          return n2;
      } else if (n2.tag === 19 && n2.memoizedProps.revealOrder !== void 0) {
        if (n2.flags & 128)
          return n2;
      } else if (n2.child !== null) {
        n2.child.return = n2, n2 = n2.child;
        continue;
      }
      if (n2 === e)
        break;
      for (; n2.sibling === null; ) {
        if (n2.return === null || n2.return === e)
          return null;
        n2 = n2.return;
      }
      n2.sibling.return = n2.return, n2 = n2.sibling;
    }
    return null;
  }
  var yl = [];
  function Wi() {
    for (var e = 0; e < yl.length; e++)
      yl[e]._workInProgressVersionPrimary = null;
    yl.length = 0;
  }
  var cr = Ve2.ReactCurrentDispatcher, gl = Ve2.ReactCurrentBatchConfig, wn = 0, R = null, A2 = null, W3 = null, Or = false, vt = false, Ot = 0, Jc = 0;
  function X() {
    throw Error(v2(321));
  }
  function Qi(e, n2) {
    if (n2 === null)
      return false;
    for (var t = 0; t < n2.length && t < e.length; t++)
      if (!xe3(e[t], n2[t]))
        return false;
    return true;
  }
  function $i(e, n2, t, r2, l2, i) {
    if (wn = i, R = n2, n2.memoizedState = null, n2.updateQueue = null, n2.lanes = 0, cr.current = e === null || e.memoizedState === null ? nf : tf, e = t(r2, l2), vt) {
      i = 0;
      do {
        if (vt = false, Ot = 0, 25 <= i)
          throw Error(v2(301));
        i += 1, W3 = A2 = null, n2.updateQueue = null, cr.current = rf, e = t(r2, l2);
      } while (vt);
    }
    if (cr.current = Rr, n2 = A2 !== null && A2.next !== null, wn = 0, W3 = A2 = R = null, Or = false, n2)
      throw Error(v2(300));
    return e;
  }
  function Ki() {
    var e = Ot !== 0;
    return Ot = 0, e;
  }
  function _e3() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return W3 === null ? R.memoizedState = W3 = e : W3 = W3.next = e, W3;
  }
  function ye3() {
    if (A2 === null) {
      var e = R.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = A2.next;
    var n2 = W3 === null ? R.memoizedState : W3.next;
    if (n2 !== null)
      W3 = n2, A2 = e;
    else {
      if (e === null)
        throw Error(v2(310));
      A2 = e, e = { memoizedState: A2.memoizedState, baseState: A2.baseState, baseQueue: A2.baseQueue, queue: A2.queue, next: null }, W3 === null ? R.memoizedState = W3 = e : W3 = W3.next = e;
    }
    return W3;
  }
  function Rt(e, n2) {
    return typeof n2 == "function" ? n2(e) : n2;
  }
  function wl(e) {
    var n2 = ye3(), t = n2.queue;
    if (t === null)
      throw Error(v2(311));
    t.lastRenderedReducer = e;
    var r2 = A2, l2 = r2.baseQueue, i = t.pending;
    if (i !== null) {
      if (l2 !== null) {
        var u2 = l2.next;
        l2.next = i.next, i.next = u2;
      }
      r2.baseQueue = l2 = i, t.pending = null;
    }
    if (l2 !== null) {
      i = l2.next, r2 = r2.baseState;
      var o = u2 = null, s2 = null, d3 = i;
      do {
        var m2 = d3.lane;
        if ((wn & m2) === m2)
          s2 !== null && (s2 = s2.next = { lane: 0, action: d3.action, hasEagerState: d3.hasEagerState, eagerState: d3.eagerState, next: null }), r2 = d3.hasEagerState ? d3.eagerState : e(r2, d3.action);
        else {
          var h2 = { lane: m2, action: d3.action, hasEagerState: d3.hasEagerState, eagerState: d3.eagerState, next: null };
          s2 === null ? (o = s2 = h2, u2 = r2) : s2 = s2.next = h2, R.lanes |= m2, Sn |= m2;
        }
        d3 = d3.next;
      } while (d3 !== null && d3 !== i);
      s2 === null ? u2 = r2 : s2.next = o, xe3(r2, n2.memoizedState) || (te2 = true), n2.memoizedState = r2, n2.baseState = u2, n2.baseQueue = s2, t.lastRenderedState = r2;
    }
    if (e = t.interleaved, e !== null) {
      l2 = e;
      do
        i = l2.lane, R.lanes |= i, Sn |= i, l2 = l2.next;
      while (l2 !== e);
    } else
      l2 === null && (t.lanes = 0);
    return [n2.memoizedState, t.dispatch];
  }
  function Sl(e) {
    var n2 = ye3(), t = n2.queue;
    if (t === null)
      throw Error(v2(311));
    t.lastRenderedReducer = e;
    var r2 = t.dispatch, l2 = t.pending, i = n2.memoizedState;
    if (l2 !== null) {
      t.pending = null;
      var u2 = l2 = l2.next;
      do
        i = e(i, u2.action), u2 = u2.next;
      while (u2 !== l2);
      xe3(i, n2.memoizedState) || (te2 = true), n2.memoizedState = i, n2.baseQueue === null && (n2.baseState = i), t.lastRenderedState = i;
    }
    return [i, r2];
  }
  function Ns() {
  }
  function _s(e, n2) {
    var t = R, r2 = ye3(), l2 = n2(), i = !xe3(r2.memoizedState, l2);
    if (i && (r2.memoizedState = l2, te2 = true), r2 = r2.queue, Yi(Ls.bind(null, t, r2, e), [e]), r2.getSnapshot !== n2 || i || W3 !== null && W3.memoizedState.tag & 1) {
      if (t.flags |= 2048, Ft(9, Ps.bind(null, t, r2, l2, n2), void 0, null), Q === null)
        throw Error(v2(349));
      wn & 30 || zs(t, n2, l2);
    }
    return l2;
  }
  function zs(e, n2, t) {
    e.flags |= 16384, e = { getSnapshot: n2, value: t }, n2 = R.updateQueue, n2 === null ? (n2 = { lastEffect: null, stores: null }, R.updateQueue = n2, n2.stores = [e]) : (t = n2.stores, t === null ? n2.stores = [e] : t.push(e));
  }
  function Ps(e, n2, t, r2) {
    n2.value = t, n2.getSnapshot = r2, Ts(n2) && Ms(e);
  }
  function Ls(e, n2, t) {
    return t(function() {
      Ts(n2) && Ms(e);
    });
  }
  function Ts(e) {
    var n2 = e.getSnapshot;
    e = e.value;
    try {
      var t = n2();
      return !xe3(e, t);
    } catch {
      return true;
    }
  }
  function Ms(e) {
    var n2 = Ue2(e, 1);
    n2 !== null && Ce3(n2, e, 1, -1);
  }
  function Ju(e) {
    var n2 = _e3();
    return typeof e == "function" && (e = e()), n2.memoizedState = n2.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Rt, lastRenderedState: e }, n2.queue = e, e = e.dispatch = ef.bind(null, R, e), [n2.memoizedState, e];
  }
  function Ft(e, n2, t, r2) {
    return e = { tag: e, create: n2, destroy: t, deps: r2, next: null }, n2 = R.updateQueue, n2 === null ? (n2 = { lastEffect: null, stores: null }, R.updateQueue = n2, n2.lastEffect = e.next = e) : (t = n2.lastEffect, t === null ? n2.lastEffect = e.next = e : (r2 = t.next, t.next = e, e.next = r2, n2.lastEffect = e)), e;
  }
  function Ds() {
    return ye3().memoizedState;
  }
  function fr(e, n2, t, r2) {
    var l2 = _e3();
    R.flags |= e, l2.memoizedState = Ft(1 | n2, t, void 0, r2 === void 0 ? null : r2);
  }
  function Yr(e, n2, t, r2) {
    var l2 = ye3();
    r2 = r2 === void 0 ? null : r2;
    var i = void 0;
    if (A2 !== null) {
      var u2 = A2.memoizedState;
      if (i = u2.destroy, r2 !== null && Qi(r2, u2.deps)) {
        l2.memoizedState = Ft(n2, t, i, r2);
        return;
      }
    }
    R.flags |= e, l2.memoizedState = Ft(1 | n2, t, i, r2);
  }
  function qu(e, n2) {
    return fr(8390656, 8, e, n2);
  }
  function Yi(e, n2) {
    return Yr(2048, 8, e, n2);
  }
  function Os(e, n2) {
    return Yr(4, 2, e, n2);
  }
  function Rs(e, n2) {
    return Yr(4, 4, e, n2);
  }
  function Fs(e, n2) {
    if (typeof n2 == "function")
      return e = e(), n2(e), function() {
        n2(null);
      };
    if (n2 != null)
      return e = e(), n2.current = e, function() {
        n2.current = null;
      };
  }
  function Is(e, n2, t) {
    return t = t != null ? t.concat([e]) : null, Yr(4, 4, Fs.bind(null, n2, e), t);
  }
  function Xi() {
  }
  function Us(e, n2) {
    var t = ye3();
    n2 = n2 === void 0 ? null : n2;
    var r2 = t.memoizedState;
    return r2 !== null && n2 !== null && Qi(n2, r2[1]) ? r2[0] : (t.memoizedState = [e, n2], e);
  }
  function js(e, n2) {
    var t = ye3();
    n2 = n2 === void 0 ? null : n2;
    var r2 = t.memoizedState;
    return r2 !== null && n2 !== null && Qi(n2, r2[1]) ? r2[0] : (e = e(), t.memoizedState = [e, n2], e);
  }
  function Vs(e, n2, t) {
    return wn & 21 ? (xe3(t, n2) || (t = Ho(), R.lanes |= t, Sn |= t, e.baseState = true), n2) : (e.baseState && (e.baseState = false, te2 = true), e.memoizedState = t);
  }
  function qc(e, n2) {
    var t = P2;
    P2 = t !== 0 && 4 > t ? t : 4, e(true);
    var r2 = gl.transition;
    gl.transition = {};
    try {
      e(false), n2();
    } finally {
      P2 = t, gl.transition = r2;
    }
  }
  function As() {
    return ye3().memoizedState;
  }
  function bc(e, n2, t) {
    var r2 = en(e);
    if (t = { lane: r2, action: t, hasEagerState: false, eagerState: null, next: null }, Bs(e))
      Hs(n2, t);
    else if (t = gs(e, n2, t, r2), t !== null) {
      var l2 = b();
      Ce3(t, e, r2, l2), Ws(t, n2, r2);
    }
  }
  function ef(e, n2, t) {
    var r2 = en(e), l2 = { lane: r2, action: t, hasEagerState: false, eagerState: null, next: null };
    if (Bs(e))
      Hs(n2, l2);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = n2.lastRenderedReducer, i !== null))
        try {
          var u2 = n2.lastRenderedState, o = i(u2, t);
          if (l2.hasEagerState = true, l2.eagerState = o, xe3(o, u2)) {
            var s2 = n2.interleaved;
            s2 === null ? (l2.next = l2, Vi(n2)) : (l2.next = s2.next, s2.next = l2), n2.interleaved = l2;
            return;
          }
        } catch {
        } finally {
        }
      t = gs(e, n2, l2, r2), t !== null && (l2 = b(), Ce3(t, e, r2, l2), Ws(t, n2, r2));
    }
  }
  function Bs(e) {
    var n2 = e.alternate;
    return e === R || n2 !== null && n2 === R;
  }
  function Hs(e, n2) {
    vt = Or = true;
    var t = e.pending;
    t === null ? n2.next = n2 : (n2.next = t.next, t.next = n2), e.pending = n2;
  }
  function Ws(e, n2, t) {
    if (t & 4194240) {
      var r2 = n2.lanes;
      r2 &= e.pendingLanes, t |= r2, n2.lanes = t, Ni(e, t);
    }
  }
  var Rr = { readContext: ve3, useCallback: X, useContext: X, useEffect: X, useImperativeHandle: X, useInsertionEffect: X, useLayoutEffect: X, useMemo: X, useReducer: X, useRef: X, useState: X, useDebugValue: X, useDeferredValue: X, useTransition: X, useMutableSource: X, useSyncExternalStore: X, useId: X, unstable_isNewReconciler: false }, nf = { readContext: ve3, useCallback: function(e, n2) {
    return _e3().memoizedState = [e, n2 === void 0 ? null : n2], e;
  }, useContext: ve3, useEffect: qu, useImperativeHandle: function(e, n2, t) {
    return t = t != null ? t.concat([e]) : null, fr(4194308, 4, Fs.bind(null, n2, e), t);
  }, useLayoutEffect: function(e, n2) {
    return fr(4194308, 4, e, n2);
  }, useInsertionEffect: function(e, n2) {
    return fr(4, 2, e, n2);
  }, useMemo: function(e, n2) {
    var t = _e3();
    return n2 = n2 === void 0 ? null : n2, e = e(), t.memoizedState = [e, n2], e;
  }, useReducer: function(e, n2, t) {
    var r2 = _e3();
    return n2 = t !== void 0 ? t(n2) : n2, r2.memoizedState = r2.baseState = n2, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n2 }, r2.queue = e, e = e.dispatch = bc.bind(null, R, e), [r2.memoizedState, e];
  }, useRef: function(e) {
    var n2 = _e3();
    return e = { current: e }, n2.memoizedState = e;
  }, useState: Ju, useDebugValue: Xi, useDeferredValue: function(e) {
    return _e3().memoizedState = e;
  }, useTransition: function() {
    var e = Ju(false), n2 = e[0];
    return e = qc.bind(null, e[1]), _e3().memoizedState = e, [n2, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n2, t) {
    var r2 = R, l2 = _e3();
    if (D) {
      if (t === void 0)
        throw Error(v2(407));
      t = t();
    } else {
      if (t = n2(), Q === null)
        throw Error(v2(349));
      wn & 30 || zs(r2, n2, t);
    }
    l2.memoizedState = t;
    var i = { value: t, getSnapshot: n2 };
    return l2.queue = i, qu(Ls.bind(null, r2, i, e), [e]), r2.flags |= 2048, Ft(9, Ps.bind(null, r2, i, t, n2), void 0, null), t;
  }, useId: function() {
    var e = _e3(), n2 = Q.identifierPrefix;
    if (D) {
      var t = Oe2, r2 = De2;
      t = (r2 & ~(1 << 32 - Ee3(r2) - 1)).toString(32) + t, n2 = ":" + n2 + "R" + t, t = Ot++, 0 < t && (n2 += "H" + t.toString(32)), n2 += ":";
    } else
      t = Jc++, n2 = ":" + n2 + "r" + t.toString(32) + ":";
    return e.memoizedState = n2;
  }, unstable_isNewReconciler: false }, tf = { readContext: ve3, useCallback: Us, useContext: ve3, useEffect: Yi, useImperativeHandle: Is, useInsertionEffect: Os, useLayoutEffect: Rs, useMemo: js, useReducer: wl, useRef: Ds, useState: function() {
    return wl(Rt);
  }, useDebugValue: Xi, useDeferredValue: function(e) {
    var n2 = ye3();
    return Vs(n2, A2.memoizedState, e);
  }, useTransition: function() {
    var e = wl(Rt)[0], n2 = ye3().memoizedState;
    return [e, n2];
  }, useMutableSource: Ns, useSyncExternalStore: _s, useId: As, unstable_isNewReconciler: false }, rf = { readContext: ve3, useCallback: Us, useContext: ve3, useEffect: Yi, useImperativeHandle: Is, useInsertionEffect: Os, useLayoutEffect: Rs, useMemo: js, useReducer: Sl, useRef: Ds, useState: function() {
    return Sl(Rt);
  }, useDebugValue: Xi, useDeferredValue: function(e) {
    var n2 = ye3();
    return A2 === null ? n2.memoizedState = e : Vs(n2, A2.memoizedState, e);
  }, useTransition: function() {
    var e = Sl(Rt)[0], n2 = ye3().memoizedState;
    return [e, n2];
  }, useMutableSource: Ns, useSyncExternalStore: _s, useId: As, unstable_isNewReconciler: false };
  function Gn(e, n2) {
    try {
      var t = "", r2 = n2;
      do
        t += Oa(r2), r2 = r2.return;
      while (r2);
      var l2 = t;
    } catch (i) {
      l2 = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: n2, stack: l2, digest: null };
  }
  function kl(e, n2, t) {
    return { value: e, source: null, stack: t ?? null, digest: n2 ?? null };
  }
  function ri(e, n2) {
    try {
      console.error(n2.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var lf = typeof WeakMap == "function" ? WeakMap : Map;
  function Qs(e, n2, t) {
    t = Re2(-1, t), t.tag = 3, t.payload = { element: null };
    var r2 = n2.value;
    return t.callback = function() {
      Ir || (Ir = true, pi = r2), ri(e, n2);
    }, t;
  }
  function $s(e, n2, t) {
    t = Re2(-1, t), t.tag = 3;
    var r2 = e.type.getDerivedStateFromError;
    if (typeof r2 == "function") {
      var l2 = n2.value;
      t.payload = function() {
        return r2(l2);
      }, t.callback = function() {
        ri(e, n2);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      ri(e, n2), typeof r2 != "function" && (be3 === null ? be3 = /* @__PURE__ */ new Set([this]) : be3.add(this));
      var u2 = n2.stack;
      this.componentDidCatch(n2.value, { componentStack: u2 !== null ? u2 : "" });
    }), t;
  }
  function bu(e, n2, t) {
    var r2 = e.pingCache;
    if (r2 === null) {
      r2 = e.pingCache = new lf();
      var l2 = /* @__PURE__ */ new Set();
      r2.set(n2, l2);
    } else
      l2 = r2.get(n2), l2 === void 0 && (l2 = /* @__PURE__ */ new Set(), r2.set(n2, l2));
    l2.has(t) || (l2.add(t), e = wf.bind(null, e, n2, t), n2.then(e, e));
  }
  function eo(e) {
    do {
      var n2;
      if ((n2 = e.tag === 13) && (n2 = e.memoizedState, n2 = n2 !== null ? n2.dehydrated !== null : true), n2)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function no(e, n2, t, r2, l2) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l2, e) : (e === n2 ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n2 = Re2(-1, 1), n2.tag = 2, qe2(t, n2, 1))), t.lanes |= 1), e);
  }
  var uf = Ve2.ReactCurrentOwner, te2 = false;
  function q(e, n2, t, r2) {
    n2.child = e === null ? Cs(n2, null, t, r2) : Yn(n2, e.child, t, r2);
  }
  function to(e, n2, t, r2, l2) {
    t = t.render;
    var i = n2.ref;
    return Hn(n2, l2), r2 = $i(e, n2, t, r2, i, l2), t = Ki(), e !== null && !te2 ? (n2.updateQueue = e.updateQueue, n2.flags &= -2053, e.lanes &= ~l2, je2(e, n2, l2)) : (D && t && Oi(n2), n2.flags |= 1, q(e, n2, r2, l2), n2.child);
  }
  function ro(e, n2, t, r2, l2) {
    if (e === null) {
      var i = t.type;
      return typeof i == "function" && !tu(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n2.tag = 15, n2.type = i, Ks(e, n2, i, r2, l2)) : (e = hr(t.type, null, r2, n2, n2.mode, l2), e.ref = n2.ref, e.return = n2, n2.child = e);
    }
    if (i = e.child, !(e.lanes & l2)) {
      var u2 = i.memoizedProps;
      if (t = t.compare, t = t !== null ? t : zt, t(u2, r2) && e.ref === n2.ref)
        return je2(e, n2, l2);
    }
    return n2.flags |= 1, e = nn(i, r2), e.ref = n2.ref, e.return = n2, n2.child = e;
  }
  function Ks(e, n2, t, r2, l2) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (zt(i, r2) && e.ref === n2.ref)
        if (te2 = false, n2.pendingProps = r2 = i, (e.lanes & l2) !== 0)
          e.flags & 131072 && (te2 = true);
        else
          return n2.lanes = e.lanes, je2(e, n2, l2);
    }
    return li(e, n2, t, r2, l2);
  }
  function Ys(e, n2, t) {
    var r2 = n2.pendingProps, l2 = r2.children, i = e !== null ? e.memoizedState : null;
    if (r2.mode === "hidden")
      if (!(n2.mode & 1))
        n2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, L(Un, ue), ue |= t;
      else {
        if (!(t & 1073741824))
          return e = i !== null ? i.baseLanes | t : t, n2.lanes = n2.childLanes = 1073741824, n2.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n2.updateQueue = null, L(Un, ue), ue |= e, null;
        n2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r2 = i !== null ? i.baseLanes : t, L(Un, ue), ue |= r2;
      }
    else
      i !== null ? (r2 = i.baseLanes | t, n2.memoizedState = null) : r2 = t, L(Un, ue), ue |= r2;
    return q(e, n2, l2, t), n2.child;
  }
  function Xs(e, n2) {
    var t = n2.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n2.flags |= 512, n2.flags |= 2097152);
  }
  function li(e, n2, t, r2, l2) {
    var i = le3(t) ? yn : J.current;
    return i = $n(n2, i), Hn(n2, l2), t = $i(e, n2, t, r2, i, l2), r2 = Ki(), e !== null && !te2 ? (n2.updateQueue = e.updateQueue, n2.flags &= -2053, e.lanes &= ~l2, je2(e, n2, l2)) : (D && r2 && Oi(n2), n2.flags |= 1, q(e, n2, t, l2), n2.child);
  }
  function lo(e, n2, t, r2, l2) {
    if (le3(t)) {
      var i = true;
      _r(n2);
    } else
      i = false;
    if (Hn(n2, l2), n2.stateNode === null)
      dr(e, n2), ks(n2, t, r2), ti(n2, t, r2, l2), r2 = true;
    else if (e === null) {
      var u2 = n2.stateNode, o = n2.memoizedProps;
      u2.props = o;
      var s2 = u2.context, d3 = t.contextType;
      typeof d3 == "object" && d3 !== null ? d3 = ve3(d3) : (d3 = le3(t) ? yn : J.current, d3 = $n(n2, d3));
      var m2 = t.getDerivedStateFromProps, h2 = typeof m2 == "function" || typeof u2.getSnapshotBeforeUpdate == "function";
      h2 || typeof u2.UNSAFE_componentWillReceiveProps != "function" && typeof u2.componentWillReceiveProps != "function" || (o !== r2 || s2 !== d3) && Gu(n2, u2, r2, d3), We2 = false;
      var p3 = n2.memoizedState;
      u2.state = p3, Mr(n2, r2, u2, l2), s2 = n2.memoizedState, o !== r2 || p3 !== s2 || re2.current || We2 ? (typeof m2 == "function" && (ni(n2, t, m2, r2), s2 = n2.memoizedState), (o = We2 || Xu(n2, t, o, r2, p3, s2, d3)) ? (h2 || typeof u2.UNSAFE_componentWillMount != "function" && typeof u2.componentWillMount != "function" || (typeof u2.componentWillMount == "function" && u2.componentWillMount(), typeof u2.UNSAFE_componentWillMount == "function" && u2.UNSAFE_componentWillMount()), typeof u2.componentDidMount == "function" && (n2.flags |= 4194308)) : (typeof u2.componentDidMount == "function" && (n2.flags |= 4194308), n2.memoizedProps = r2, n2.memoizedState = s2), u2.props = r2, u2.state = s2, u2.context = d3, r2 = o) : (typeof u2.componentDidMount == "function" && (n2.flags |= 4194308), r2 = false);
    } else {
      u2 = n2.stateNode, ws(e, n2), o = n2.memoizedProps, d3 = n2.type === n2.elementType ? o : we3(n2.type, o), u2.props = d3, h2 = n2.pendingProps, p3 = u2.context, s2 = t.contextType, typeof s2 == "object" && s2 !== null ? s2 = ve3(s2) : (s2 = le3(t) ? yn : J.current, s2 = $n(n2, s2));
      var g2 = t.getDerivedStateFromProps;
      (m2 = typeof g2 == "function" || typeof u2.getSnapshotBeforeUpdate == "function") || typeof u2.UNSAFE_componentWillReceiveProps != "function" && typeof u2.componentWillReceiveProps != "function" || (o !== h2 || p3 !== s2) && Gu(n2, u2, r2, s2), We2 = false, p3 = n2.memoizedState, u2.state = p3, Mr(n2, r2, u2, l2);
      var S2 = n2.memoizedState;
      o !== h2 || p3 !== S2 || re2.current || We2 ? (typeof g2 == "function" && (ni(n2, t, g2, r2), S2 = n2.memoizedState), (d3 = We2 || Xu(n2, t, d3, r2, p3, S2, s2) || false) ? (m2 || typeof u2.UNSAFE_componentWillUpdate != "function" && typeof u2.componentWillUpdate != "function" || (typeof u2.componentWillUpdate == "function" && u2.componentWillUpdate(r2, S2, s2), typeof u2.UNSAFE_componentWillUpdate == "function" && u2.UNSAFE_componentWillUpdate(r2, S2, s2)), typeof u2.componentDidUpdate == "function" && (n2.flags |= 4), typeof u2.getSnapshotBeforeUpdate == "function" && (n2.flags |= 1024)) : (typeof u2.componentDidUpdate != "function" || o === e.memoizedProps && p3 === e.memoizedState || (n2.flags |= 4), typeof u2.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p3 === e.memoizedState || (n2.flags |= 1024), n2.memoizedProps = r2, n2.memoizedState = S2), u2.props = r2, u2.state = S2, u2.context = s2, r2 = d3) : (typeof u2.componentDidUpdate != "function" || o === e.memoizedProps && p3 === e.memoizedState || (n2.flags |= 4), typeof u2.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p3 === e.memoizedState || (n2.flags |= 1024), r2 = false);
    }
    return ii(e, n2, t, r2, i, l2);
  }
  function ii(e, n2, t, r2, l2, i) {
    Xs(e, n2);
    var u2 = (n2.flags & 128) !== 0;
    if (!r2 && !u2)
      return l2 && Wu(n2, t, false), je2(e, n2, i);
    r2 = n2.stateNode, uf.current = n2;
    var o = u2 && typeof t.getDerivedStateFromError != "function" ? null : r2.render();
    return n2.flags |= 1, e !== null && u2 ? (n2.child = Yn(n2, e.child, null, i), n2.child = Yn(n2, null, o, i)) : q(e, n2, o, i), n2.memoizedState = r2.state, l2 && Wu(n2, t, true), n2.child;
  }
  function Gs(e) {
    var n2 = e.stateNode;
    n2.pendingContext ? Hu(e, n2.pendingContext, n2.pendingContext !== n2.context) : n2.context && Hu(e, n2.context, false), Bi(e, n2.containerInfo);
  }
  function io(e, n2, t, r2, l2) {
    return Kn(), Fi(l2), n2.flags |= 256, q(e, n2, t, r2), n2.child;
  }
  var ui = { dehydrated: null, treeContext: null, retryLane: 0 };
  function oi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, n2, t) {
    var r2 = n2.pendingProps, l2 = O4.current, i = false, u2 = (n2.flags & 128) !== 0, o;
    if ((o = u2) || (o = e !== null && e.memoizedState === null ? false : (l2 & 2) !== 0), o ? (i = true, n2.flags &= -129) : (e === null || e.memoizedState !== null) && (l2 |= 1), L(O4, l2 & 1), e === null)
      return bl(n2), e = n2.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n2.mode & 1 ? e.data === "$!" ? n2.lanes = 8 : n2.lanes = 1073741824 : n2.lanes = 1, null) : (u2 = r2.children, e = r2.fallback, i ? (r2 = n2.mode, i = n2.child, u2 = { mode: "hidden", children: u2 }, !(r2 & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = u2) : i = Zr(u2, r2, 0, null), e = vn(e, r2, t, null), i.return = n2, e.return = n2, i.sibling = e, n2.child = i, n2.child.memoizedState = oi(t), n2.memoizedState = ui, e) : Gi(n2, u2));
    if (l2 = e.memoizedState, l2 !== null && (o = l2.dehydrated, o !== null))
      return of(e, n2, u2, r2, o, l2, t);
    if (i) {
      i = r2.fallback, u2 = n2.mode, l2 = e.child, o = l2.sibling;
      var s2 = { mode: "hidden", children: r2.children };
      return !(u2 & 1) && n2.child !== l2 ? (r2 = n2.child, r2.childLanes = 0, r2.pendingProps = s2, n2.deletions = null) : (r2 = nn(l2, s2), r2.subtreeFlags = l2.subtreeFlags & 14680064), o !== null ? i = nn(o, i) : (i = vn(i, u2, t, null), i.flags |= 2), i.return = n2, r2.return = n2, r2.sibling = i, n2.child = r2, r2 = i, i = n2.child, u2 = e.child.memoizedState, u2 = u2 === null ? oi(t) : { baseLanes: u2.baseLanes | t, cachePool: null, transitions: u2.transitions }, i.memoizedState = u2, i.childLanes = e.childLanes & ~t, n2.memoizedState = ui, r2;
    }
    return i = e.child, e = i.sibling, r2 = nn(i, { mode: "visible", children: r2.children }), !(n2.mode & 1) && (r2.lanes = t), r2.return = n2, r2.sibling = null, e !== null && (t = n2.deletions, t === null ? (n2.deletions = [e], n2.flags |= 16) : t.push(e)), n2.child = r2, n2.memoizedState = null, r2;
  }
  function Gi(e, n2) {
    return n2 = Zr({ mode: "visible", children: n2 }, e.mode, 0, null), n2.return = e, e.child = n2;
  }
  function rr(e, n2, t, r2) {
    return r2 !== null && Fi(r2), Yn(n2, e.child, null, t), e = Gi(n2, n2.pendingProps.children), e.flags |= 2, n2.memoizedState = null, e;
  }
  function of(e, n2, t, r2, l2, i, u2) {
    if (t)
      return n2.flags & 256 ? (n2.flags &= -257, r2 = kl(Error(v2(422))), rr(e, n2, u2, r2)) : n2.memoizedState !== null ? (n2.child = e.child, n2.flags |= 128, null) : (i = r2.fallback, l2 = n2.mode, r2 = Zr({ mode: "visible", children: r2.children }, l2, 0, null), i = vn(i, l2, u2, null), i.flags |= 2, r2.return = n2, i.return = n2, r2.sibling = i, n2.child = r2, n2.mode & 1 && Yn(n2, e.child, null, u2), n2.child.memoizedState = oi(u2), n2.memoizedState = ui, i);
    if (!(n2.mode & 1))
      return rr(e, n2, u2, null);
    if (l2.data === "$!") {
      if (r2 = l2.nextSibling && l2.nextSibling.dataset, r2)
        var o = r2.dgst;
      return r2 = o, i = Error(v2(419)), r2 = kl(i, r2, void 0), rr(e, n2, u2, r2);
    }
    if (o = (u2 & e.childLanes) !== 0, te2 || o) {
      if (r2 = Q, r2 !== null) {
        switch (u2 & -u2) {
          case 4:
            l2 = 2;
            break;
          case 16:
            l2 = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l2 = 32;
            break;
          case 536870912:
            l2 = 268435456;
            break;
          default:
            l2 = 0;
        }
        l2 = l2 & (r2.suspendedLanes | u2) ? 0 : l2, l2 !== 0 && l2 !== i.retryLane && (i.retryLane = l2, Ue2(e, l2), Ce3(r2, e, l2, -1));
      }
      return nu(), r2 = kl(Error(v2(421))), rr(e, n2, u2, r2);
    }
    return l2.data === "$?" ? (n2.flags |= 128, n2.child = e.child, n2 = Sf.bind(null, e), l2._reactRetry = n2, null) : (e = i.treeContext, oe2 = Je(l2.nextSibling), se2 = n2, D = true, ke3 = null, e !== null && (de3[pe3++] = De2, de3[pe3++] = Oe2, de3[pe3++] = gn, De2 = e.id, Oe2 = e.overflow, gn = n2), n2 = Gi(n2, r2.children), n2.flags |= 4096, n2);
  }
  function uo(e, n2, t) {
    e.lanes |= n2;
    var r2 = e.alternate;
    r2 !== null && (r2.lanes |= n2), ei(e.return, n2, t);
  }
  function El(e, n2, t, r2, l2) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: n2, rendering: null, renderingStartTime: 0, last: r2, tail: t, tailMode: l2 } : (i.isBackwards = n2, i.rendering = null, i.renderingStartTime = 0, i.last = r2, i.tail = t, i.tailMode = l2);
  }
  function Js(e, n2, t) {
    var r2 = n2.pendingProps, l2 = r2.revealOrder, i = r2.tail;
    if (q(e, n2, r2.children, t), r2 = O4.current, r2 & 2)
      r2 = r2 & 1 | 2, n2.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n2.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && uo(e, t, n2);
            else if (e.tag === 19)
              uo(e, t, n2);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === n2)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === n2)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r2 &= 1;
    }
    if (L(O4, r2), !(n2.mode & 1))
      n2.memoizedState = null;
    else
      switch (l2) {
        case "forwards":
          for (t = n2.child, l2 = null; t !== null; )
            e = t.alternate, e !== null && Dr(e) === null && (l2 = t), t = t.sibling;
          t = l2, t === null ? (l2 = n2.child, n2.child = null) : (l2 = t.sibling, t.sibling = null), El(n2, false, l2, t, i);
          break;
        case "backwards":
          for (t = null, l2 = n2.child, n2.child = null; l2 !== null; ) {
            if (e = l2.alternate, e !== null && Dr(e) === null) {
              n2.child = l2;
              break;
            }
            e = l2.sibling, l2.sibling = t, t = l2, l2 = e;
          }
          El(n2, true, t, null, i);
          break;
        case "together":
          El(n2, false, null, null, void 0);
          break;
        default:
          n2.memoizedState = null;
      }
    return n2.child;
  }
  function dr(e, n2) {
    !(n2.mode & 1) && e !== null && (e.alternate = null, n2.alternate = null, n2.flags |= 2);
  }
  function je2(e, n2, t) {
    if (e !== null && (n2.dependencies = e.dependencies), Sn |= n2.lanes, !(t & n2.childLanes))
      return null;
    if (e !== null && n2.child !== e.child)
      throw Error(v2(153));
    if (n2.child !== null) {
      for (e = n2.child, t = nn(e, e.pendingProps), n2.child = t, t.return = n2; e.sibling !== null; )
        e = e.sibling, t = t.sibling = nn(e, e.pendingProps), t.return = n2;
      t.sibling = null;
    }
    return n2.child;
  }
  function sf(e, n2, t) {
    switch (n2.tag) {
      case 3:
        Gs(n2), Kn();
        break;
      case 5:
        xs(n2);
        break;
      case 1:
        le3(n2.type) && _r(n2);
        break;
      case 4:
        Bi(n2, n2.stateNode.containerInfo);
        break;
      case 10:
        var r2 = n2.type._context, l2 = n2.memoizedProps.value;
        L(Lr, r2._currentValue), r2._currentValue = l2;
        break;
      case 13:
        if (r2 = n2.memoizedState, r2 !== null)
          return r2.dehydrated !== null ? (L(O4, O4.current & 1), n2.flags |= 128, null) : t & n2.child.childLanes ? Zs(e, n2, t) : (L(O4, O4.current & 1), e = je2(e, n2, t), e !== null ? e.sibling : null);
        L(O4, O4.current & 1);
        break;
      case 19:
        if (r2 = (t & n2.childLanes) !== 0, e.flags & 128) {
          if (r2)
            return Js(e, n2, t);
          n2.flags |= 128;
        }
        if (l2 = n2.memoizedState, l2 !== null && (l2.rendering = null, l2.tail = null, l2.lastEffect = null), L(O4, O4.current), r2)
          break;
        return null;
      case 22:
      case 23:
        return n2.lanes = 0, Ys(e, n2, t);
    }
    return je2(e, n2, t);
  }
  var qs, si, bs, ea;
  qs = function(e, n2) {
    for (var t = n2.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6)
        e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n2)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n2)
          return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  };
  si = function() {
  };
  bs = function(e, n2, t, r2) {
    var l2 = e.memoizedProps;
    if (l2 !== r2) {
      e = n2.stateNode, mn(Le2.current);
      var i = null;
      switch (t) {
        case "input":
          l2 = Tl(e, l2), r2 = Tl(e, r2), i = [];
          break;
        case "select":
          l2 = F({}, l2, { value: void 0 }), r2 = F({}, r2, { value: void 0 }), i = [];
          break;
        case "textarea":
          l2 = Ol(e, l2), r2 = Ol(e, r2), i = [];
          break;
        default:
          typeof l2.onClick != "function" && typeof r2.onClick == "function" && (e.onclick = xr);
      }
      Fl(t, r2);
      var u2;
      t = null;
      for (d3 in l2)
        if (!r2.hasOwnProperty(d3) && l2.hasOwnProperty(d3) && l2[d3] != null)
          if (d3 === "style") {
            var o = l2[d3];
            for (u2 in o)
              o.hasOwnProperty(u2) && (t || (t = {}), t[u2] = "");
          } else
            d3 !== "dangerouslySetInnerHTML" && d3 !== "children" && d3 !== "suppressContentEditableWarning" && d3 !== "suppressHydrationWarning" && d3 !== "autoFocus" && (St.hasOwnProperty(d3) ? i || (i = []) : (i = i || []).push(d3, null));
      for (d3 in r2) {
        var s2 = r2[d3];
        if (o = l2?.[d3], r2.hasOwnProperty(d3) && s2 !== o && (s2 != null || o != null))
          if (d3 === "style")
            if (o) {
              for (u2 in o)
                !o.hasOwnProperty(u2) || s2 && s2.hasOwnProperty(u2) || (t || (t = {}), t[u2] = "");
              for (u2 in s2)
                s2.hasOwnProperty(u2) && o[u2] !== s2[u2] && (t || (t = {}), t[u2] = s2[u2]);
            } else
              t || (i || (i = []), i.push(d3, t)), t = s2;
          else
            d3 === "dangerouslySetInnerHTML" ? (s2 = s2 ? s2.__html : void 0, o = o ? o.__html : void 0, s2 != null && o !== s2 && (i = i || []).push(d3, s2)) : d3 === "children" ? typeof s2 != "string" && typeof s2 != "number" || (i = i || []).push(d3, "" + s2) : d3 !== "suppressContentEditableWarning" && d3 !== "suppressHydrationWarning" && (St.hasOwnProperty(d3) ? (s2 != null && d3 === "onScroll" && T2("scroll", e), i || o === s2 || (i = [])) : (i = i || []).push(d3, s2));
      }
      t && (i = i || []).push("style", t);
      var d3 = i;
      (n2.updateQueue = d3) && (n2.flags |= 4);
    }
  };
  ea = function(e, n2, t, r2) {
    t !== r2 && (n2.flags |= 4);
  };
  function lt(e, n2) {
    if (!D)
      switch (e.tailMode) {
        case "hidden":
          n2 = e.tail;
          for (var t = null; n2 !== null; )
            n2.alternate !== null && (t = n2), n2 = n2.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var r2 = null; t !== null; )
            t.alternate !== null && (r2 = t), t = t.sibling;
          r2 === null ? n2 || e.tail === null ? e.tail = null : e.tail.sibling = null : r2.sibling = null;
      }
  }
  function G2(e) {
    var n2 = e.alternate !== null && e.alternate.child === e.child, t = 0, r2 = 0;
    if (n2)
      for (var l2 = e.child; l2 !== null; )
        t |= l2.lanes | l2.childLanes, r2 |= l2.subtreeFlags & 14680064, r2 |= l2.flags & 14680064, l2.return = e, l2 = l2.sibling;
    else
      for (l2 = e.child; l2 !== null; )
        t |= l2.lanes | l2.childLanes, r2 |= l2.subtreeFlags, r2 |= l2.flags, l2.return = e, l2 = l2.sibling;
    return e.subtreeFlags |= r2, e.childLanes = t, n2;
  }
  function af(e, n2, t) {
    var r2 = n2.pendingProps;
    switch (Ri(n2), n2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return G2(n2), null;
      case 1:
        return le3(n2.type) && Nr(), G2(n2), null;
      case 3:
        return r2 = n2.stateNode, Xn(), M2(re2), M2(J), Wi(), r2.pendingContext && (r2.context = r2.pendingContext, r2.pendingContext = null), (e === null || e.child === null) && (nr(n2) ? n2.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n2.flags & 256) || (n2.flags |= 1024, ke3 !== null && (vi(ke3), ke3 = null))), si(e, n2), G2(n2), null;
      case 5:
        Hi(n2);
        var l2 = mn(Dt.current);
        if (t = n2.type, e !== null && n2.stateNode != null)
          bs(e, n2, t, r2, l2), e.ref !== n2.ref && (n2.flags |= 512, n2.flags |= 2097152);
        else {
          if (!r2) {
            if (n2.stateNode === null)
              throw Error(v2(166));
            return G2(n2), null;
          }
          if (e = mn(Le2.current), nr(n2)) {
            r2 = n2.stateNode, t = n2.type;
            var i = n2.memoizedProps;
            switch (r2[ze2] = n2, r2[Tt] = i, e = (n2.mode & 1) !== 0, t) {
              case "dialog":
                T2("cancel", r2), T2("close", r2);
                break;
              case "iframe":
              case "object":
              case "embed":
                T2("load", r2);
                break;
              case "video":
              case "audio":
                for (l2 = 0; l2 < ct.length; l2++)
                  T2(ct[l2], r2);
                break;
              case "source":
                T2("error", r2);
                break;
              case "img":
              case "image":
              case "link":
                T2("error", r2), T2("load", r2);
                break;
              case "details":
                T2("toggle", r2);
                break;
              case "input":
                mu(r2, i), T2("invalid", r2);
                break;
              case "select":
                r2._wrapperState = { wasMultiple: !!i.multiple }, T2("invalid", r2);
                break;
              case "textarea":
                vu(r2, i), T2("invalid", r2);
            }
            Fl(t, i), l2 = null;
            for (var u2 in i)
              if (i.hasOwnProperty(u2)) {
                var o = i[u2];
                u2 === "children" ? typeof o == "string" ? r2.textContent !== o && (i.suppressHydrationWarning !== true && er(r2.textContent, o, e), l2 = ["children", o]) : typeof o == "number" && r2.textContent !== "" + o && (i.suppressHydrationWarning !== true && er(r2.textContent, o, e), l2 = ["children", "" + o]) : St.hasOwnProperty(u2) && o != null && u2 === "onScroll" && T2("scroll", r2);
              }
            switch (t) {
              case "input":
                Ht(r2), hu(r2, i, true);
                break;
              case "textarea":
                Ht(r2), yu(r2);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r2.onclick = xr);
            }
            r2 = l2, n2.updateQueue = r2, r2 !== null && (n2.flags |= 4);
          } else {
            u2 = l2.nodeType === 9 ? l2 : l2.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zo(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u2.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r2.is == "string" ? e = u2.createElement(t, { is: r2.is }) : (e = u2.createElement(t), t === "select" && (u2 = e, r2.multiple ? u2.multiple = true : r2.size && (u2.size = r2.size))) : e = u2.createElementNS(e, t), e[ze2] = n2, e[Tt] = r2, qs(e, n2, false, false), n2.stateNode = e;
            e: {
              switch (u2 = Il(t, r2), t) {
                case "dialog":
                  T2("cancel", e), T2("close", e), l2 = r2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  T2("load", e), l2 = r2;
                  break;
                case "video":
                case "audio":
                  for (l2 = 0; l2 < ct.length; l2++)
                    T2(ct[l2], e);
                  l2 = r2;
                  break;
                case "source":
                  T2("error", e), l2 = r2;
                  break;
                case "img":
                case "image":
                case "link":
                  T2("error", e), T2("load", e), l2 = r2;
                  break;
                case "details":
                  T2("toggle", e), l2 = r2;
                  break;
                case "input":
                  mu(e, r2), l2 = Tl(e, r2), T2("invalid", e);
                  break;
                case "option":
                  l2 = r2;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r2.multiple }, l2 = F({}, r2, { value: void 0 }), T2("invalid", e);
                  break;
                case "textarea":
                  vu(e, r2), l2 = Ol(e, r2), T2("invalid", e);
                  break;
                default:
                  l2 = r2;
              }
              Fl(t, l2), o = l2;
              for (i in o)
                if (o.hasOwnProperty(i)) {
                  var s2 = o[i];
                  i === "style" ? To(e, s2) : i === "dangerouslySetInnerHTML" ? (s2 = s2 ? s2.__html : void 0, s2 != null && Po(e, s2)) : i === "children" ? typeof s2 == "string" ? (t !== "textarea" || s2 !== "") && kt(e, s2) : typeof s2 == "number" && kt(e, "" + s2) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (St.hasOwnProperty(i) ? s2 != null && i === "onScroll" && T2("scroll", e) : s2 != null && wi(e, i, s2, u2));
                }
              switch (t) {
                case "input":
                  Ht(e), hu(e, r2, false);
                  break;
                case "textarea":
                  Ht(e), yu(e);
                  break;
                case "option":
                  r2.value != null && e.setAttribute("value", "" + tn(r2.value));
                  break;
                case "select":
                  e.multiple = !!r2.multiple, i = r2.value, i != null ? jn(e, !!r2.multiple, i, false) : r2.defaultValue != null && jn(e, !!r2.multiple, r2.defaultValue, true);
                  break;
                default:
                  typeof l2.onClick == "function" && (e.onclick = xr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r2 = !!r2.autoFocus;
                  break e;
                case "img":
                  r2 = true;
                  break e;
                default:
                  r2 = false;
              }
            }
            r2 && (n2.flags |= 4);
          }
          n2.ref !== null && (n2.flags |= 512, n2.flags |= 2097152);
        }
        return G2(n2), null;
      case 6:
        if (e && n2.stateNode != null)
          ea(e, n2, e.memoizedProps, r2);
        else {
          if (typeof r2 != "string" && n2.stateNode === null)
            throw Error(v2(166));
          if (t = mn(Dt.current), mn(Le2.current), nr(n2)) {
            if (r2 = n2.stateNode, t = n2.memoizedProps, r2[ze2] = n2, (i = r2.nodeValue !== t) && (e = se2, e !== null))
              switch (e.tag) {
                case 3:
                  er(r2.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== true && er(r2.nodeValue, t, (e.mode & 1) !== 0);
              }
            i && (n2.flags |= 4);
          } else
            r2 = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r2), r2[ze2] = n2, n2.stateNode = r2;
        }
        return G2(n2), null;
      case 13:
        if (M2(O4), r2 = n2.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (D && oe2 !== null && n2.mode & 1 && !(n2.flags & 128))
            ys(), Kn(), n2.flags |= 98560, i = false;
          else if (i = nr(n2), r2 !== null && r2.dehydrated !== null) {
            if (e === null) {
              if (!i)
                throw Error(v2(318));
              if (i = n2.memoizedState, i = i !== null ? i.dehydrated : null, !i)
                throw Error(v2(317));
              i[ze2] = n2;
            } else
              Kn(), !(n2.flags & 128) && (n2.memoizedState = null), n2.flags |= 4;
            G2(n2), i = false;
          } else
            ke3 !== null && (vi(ke3), ke3 = null), i = true;
          if (!i)
            return n2.flags & 65536 ? n2 : null;
        }
        return n2.flags & 128 ? (n2.lanes = t, n2) : (r2 = r2 !== null, r2 !== (e !== null && e.memoizedState !== null) && r2 && (n2.child.flags |= 8192, n2.mode & 1 && (e === null || O4.current & 1 ? B2 === 0 && (B2 = 3) : nu())), n2.updateQueue !== null && (n2.flags |= 4), G2(n2), null);
      case 4:
        return Xn(), si(e, n2), e === null && Pt(n2.stateNode.containerInfo), G2(n2), null;
      case 10:
        return ji(n2.type._context), G2(n2), null;
      case 17:
        return le3(n2.type) && Nr(), G2(n2), null;
      case 19:
        if (M2(O4), i = n2.memoizedState, i === null)
          return G2(n2), null;
        if (r2 = (n2.flags & 128) !== 0, u2 = i.rendering, u2 === null)
          if (r2)
            lt(i, false);
          else {
            if (B2 !== 0 || e !== null && e.flags & 128)
              for (e = n2.child; e !== null; ) {
                if (u2 = Dr(e), u2 !== null) {
                  for (n2.flags |= 128, lt(i, false), r2 = u2.updateQueue, r2 !== null && (n2.updateQueue = r2, n2.flags |= 4), n2.subtreeFlags = 0, r2 = t, t = n2.child; t !== null; )
                    i = t, e = r2, i.flags &= 14680066, u2 = i.alternate, u2 === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u2.childLanes, i.lanes = u2.lanes, i.child = u2.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u2.memoizedProps, i.memoizedState = u2.memoizedState, i.updateQueue = u2.updateQueue, i.type = u2.type, e = u2.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return L(O4, O4.current & 1 | 2), n2.child;
                }
                e = e.sibling;
              }
            i.tail !== null && j() > Zn && (n2.flags |= 128, r2 = true, lt(i, false), n2.lanes = 4194304);
          }
        else {
          if (!r2)
            if (e = Dr(u2), e !== null) {
              if (n2.flags |= 128, r2 = true, t = e.updateQueue, t !== null && (n2.updateQueue = t, n2.flags |= 4), lt(i, true), i.tail === null && i.tailMode === "hidden" && !u2.alternate && !D)
                return G2(n2), null;
            } else
              2 * j() - i.renderingStartTime > Zn && t !== 1073741824 && (n2.flags |= 128, r2 = true, lt(i, false), n2.lanes = 4194304);
          i.isBackwards ? (u2.sibling = n2.child, n2.child = u2) : (t = i.last, t !== null ? t.sibling = u2 : n2.child = u2, i.last = u2);
        }
        return i.tail !== null ? (n2 = i.tail, i.rendering = n2, i.tail = n2.sibling, i.renderingStartTime = j(), n2.sibling = null, t = O4.current, L(O4, r2 ? t & 1 | 2 : t & 1), n2) : (G2(n2), null);
      case 22:
      case 23:
        return eu(), r2 = n2.memoizedState !== null, e !== null && e.memoizedState !== null !== r2 && (n2.flags |= 8192), r2 && n2.mode & 1 ? ue & 1073741824 && (G2(n2), n2.subtreeFlags & 6 && (n2.flags |= 8192)) : G2(n2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(v2(156, n2.tag));
  }
  function cf(e, n2) {
    switch (Ri(n2), n2.tag) {
      case 1:
        return le3(n2.type) && Nr(), e = n2.flags, e & 65536 ? (n2.flags = e & -65537 | 128, n2) : null;
      case 3:
        return Xn(), M2(re2), M2(J), Wi(), e = n2.flags, e & 65536 && !(e & 128) ? (n2.flags = e & -65537 | 128, n2) : null;
      case 5:
        return Hi(n2), null;
      case 13:
        if (M2(O4), e = n2.memoizedState, e !== null && e.dehydrated !== null) {
          if (n2.alternate === null)
            throw Error(v2(340));
          Kn();
        }
        return e = n2.flags, e & 65536 ? (n2.flags = e & -65537 | 128, n2) : null;
      case 19:
        return M2(O4), null;
      case 4:
        return Xn(), null;
      case 10:
        return ji(n2.type._context), null;
      case 22:
      case 23:
        return eu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var lr = false, Z2 = false, ff = typeof WeakSet == "function" ? WeakSet : Set, w = null;
  function In(e, n2) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r2) {
          I(e, n2, r2);
        }
      else
        t.current = null;
  }
  function ai(e, n2, t) {
    try {
      t();
    } catch (r2) {
      I(e, n2, r2);
    }
  }
  var oo = false;
  function df(e, n2) {
    if (Kl = kr, e = ls(), Di(e)) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var r2 = t.getSelection && t.getSelection();
          if (r2 && r2.rangeCount !== 0) {
            t = r2.anchorNode;
            var l2 = r2.anchorOffset, i = r2.focusNode;
            r2 = r2.focusOffset;
            try {
              t.nodeType, i.nodeType;
            } catch {
              t = null;
              break e;
            }
            var u2 = 0, o = -1, s2 = -1, d3 = 0, m2 = 0, h2 = e, p3 = null;
            n:
              for (; ; ) {
                for (var g2; h2 !== t || l2 !== 0 && h2.nodeType !== 3 || (o = u2 + l2), h2 !== i || r2 !== 0 && h2.nodeType !== 3 || (s2 = u2 + r2), h2.nodeType === 3 && (u2 += h2.nodeValue.length), (g2 = h2.firstChild) !== null; )
                  p3 = h2, h2 = g2;
                for (; ; ) {
                  if (h2 === e)
                    break n;
                  if (p3 === t && ++d3 === l2 && (o = u2), p3 === i && ++m2 === r2 && (s2 = u2), (g2 = h2.nextSibling) !== null)
                    break;
                  h2 = p3, p3 = h2.parentNode;
                }
                h2 = g2;
              }
            t = o === -1 || s2 === -1 ? null : { start: o, end: s2 };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (Yl = { focusedElem: e, selectionRange: t }, kr = false, w = n2; w !== null; )
      if (n2 = w, e = n2.child, (n2.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n2, w = e;
      else
        for (; w !== null; ) {
          n2 = w;
          try {
            var S2 = n2.alternate;
            if (n2.flags & 1024)
              switch (n2.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (S2 !== null) {
                    var k = S2.memoizedProps, U3 = S2.memoizedState, c = n2.stateNode, a2 = c.getSnapshotBeforeUpdate(n2.elementType === n2.type ? k : we3(n2.type, k), U3);
                    c.__reactInternalSnapshotBeforeUpdate = a2;
                  }
                  break;
                case 3:
                  var f3 = n2.stateNode.containerInfo;
                  f3.nodeType === 1 ? f3.textContent = "" : f3.nodeType === 9 && f3.documentElement && f3.removeChild(f3.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(v2(163));
              }
          } catch (y3) {
            I(n2, n2.return, y3);
          }
          if (e = n2.sibling, e !== null) {
            e.return = n2.return, w = e;
            break;
          }
          w = n2.return;
        }
    return S2 = oo, oo = false, S2;
  }
  function yt(e, n2, t) {
    var r2 = n2.updateQueue;
    if (r2 = r2 !== null ? r2.lastEffect : null, r2 !== null) {
      var l2 = r2 = r2.next;
      do {
        if ((l2.tag & e) === e) {
          var i = l2.destroy;
          l2.destroy = void 0, i !== void 0 && ai(n2, t, i);
        }
        l2 = l2.next;
      } while (l2 !== r2);
    }
  }
  function Xr(e, n2) {
    if (n2 = n2.updateQueue, n2 = n2 !== null ? n2.lastEffect : null, n2 !== null) {
      var t = n2 = n2.next;
      do {
        if ((t.tag & e) === e) {
          var r2 = t.create;
          t.destroy = r2();
        }
        t = t.next;
      } while (t !== n2);
    }
  }
  function ci(e) {
    var n2 = e.ref;
    if (n2 !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n2 == "function" ? n2(e) : n2.current = e;
    }
  }
  function na(e) {
    var n2 = e.alternate;
    n2 !== null && (e.alternate = null, na(n2)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n2 = e.stateNode, n2 !== null && (delete n2[ze2], delete n2[Tt], delete n2[Zl], delete n2[Yc], delete n2[Xc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ta(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function so(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || ta(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function fi(e, n2, t) {
    var r2 = e.tag;
    if (r2 === 5 || r2 === 6)
      e = e.stateNode, n2 ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n2) : t.insertBefore(e, n2) : (t.nodeType === 8 ? (n2 = t.parentNode, n2.insertBefore(e, t)) : (n2 = t, n2.appendChild(e)), t = t._reactRootContainer, t != null || n2.onclick !== null || (n2.onclick = xr));
    else if (r2 !== 4 && (e = e.child, e !== null))
      for (fi(e, n2, t), e = e.sibling; e !== null; )
        fi(e, n2, t), e = e.sibling;
  }
  function di(e, n2, t) {
    var r2 = e.tag;
    if (r2 === 5 || r2 === 6)
      e = e.stateNode, n2 ? t.insertBefore(e, n2) : t.appendChild(e);
    else if (r2 !== 4 && (e = e.child, e !== null))
      for (di(e, n2, t), e = e.sibling; e !== null; )
        di(e, n2, t), e = e.sibling;
  }
  var $3 = null, Se2 = false;
  function Be2(e, n2, t) {
    for (t = t.child; t !== null; )
      ra(e, n2, t), t = t.sibling;
  }
  function ra(e, n2, t) {
    if (Pe3 && typeof Pe3.onCommitFiberUnmount == "function")
      try {
        Pe3.onCommitFiberUnmount(Ar, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        Z2 || In(t, n2);
      case 6:
        var r2 = $3, l2 = Se2;
        $3 = null, Be2(e, n2, t), $3 = r2, Se2 = l2, $3 !== null && (Se2 ? (e = $3, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : $3.removeChild(t.stateNode));
        break;
      case 18:
        $3 !== null && (Se2 ? (e = $3, t = t.stateNode, e.nodeType === 8 ? hl(e.parentNode, t) : e.nodeType === 1 && hl(e, t), Nt(e)) : hl($3, t.stateNode));
        break;
      case 4:
        r2 = $3, l2 = Se2, $3 = t.stateNode.containerInfo, Se2 = true, Be2(e, n2, t), $3 = r2, Se2 = l2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Z2 && (r2 = t.updateQueue, r2 !== null && (r2 = r2.lastEffect, r2 !== null))) {
          l2 = r2 = r2.next;
          do {
            var i = l2, u2 = i.destroy;
            i = i.tag, u2 !== void 0 && (i & 2 || i & 4) && ai(t, n2, u2), l2 = l2.next;
          } while (l2 !== r2);
        }
        Be2(e, n2, t);
        break;
      case 1:
        if (!Z2 && (In(t, n2), r2 = t.stateNode, typeof r2.componentWillUnmount == "function"))
          try {
            r2.props = t.memoizedProps, r2.state = t.memoizedState, r2.componentWillUnmount();
          } catch (o) {
            I(t, n2, o);
          }
        Be2(e, n2, t);
        break;
      case 21:
        Be2(e, n2, t);
        break;
      case 22:
        t.mode & 1 ? (Z2 = (r2 = Z2) || t.memoizedState !== null, Be2(e, n2, t), Z2 = r2) : Be2(e, n2, t);
        break;
      default:
        Be2(e, n2, t);
    }
  }
  function ao(e) {
    var n2 = e.updateQueue;
    if (n2 !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new ff()), n2.forEach(function(r2) {
        var l2 = kf.bind(null, e, r2);
        t.has(r2) || (t.add(r2), r2.then(l2, l2));
      });
    }
  }
  function ge3(e, n2) {
    var t = n2.deletions;
    if (t !== null)
      for (var r2 = 0; r2 < t.length; r2++) {
        var l2 = t[r2];
        try {
          var i = e, u2 = n2, o = u2;
          e:
            for (; o !== null; ) {
              switch (o.tag) {
                case 5:
                  $3 = o.stateNode, Se2 = false;
                  break e;
                case 3:
                  $3 = o.stateNode.containerInfo, Se2 = true;
                  break e;
                case 4:
                  $3 = o.stateNode.containerInfo, Se2 = true;
                  break e;
              }
              o = o.return;
            }
          if ($3 === null)
            throw Error(v2(160));
          ra(i, u2, l2), $3 = null, Se2 = false;
          var s2 = l2.alternate;
          s2 !== null && (s2.return = null), l2.return = null;
        } catch (d3) {
          I(l2, n2, d3);
        }
      }
    if (n2.subtreeFlags & 12854)
      for (n2 = n2.child; n2 !== null; )
        la(n2, e), n2 = n2.sibling;
  }
  function la(e, n2) {
    var t = e.alternate, r2 = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ge3(n2, e), Ne2(e), r2 & 4) {
          try {
            yt(3, e, e.return), Xr(3, e);
          } catch (k) {
            I(e, e.return, k);
          }
          try {
            yt(5, e, e.return);
          } catch (k) {
            I(e, e.return, k);
          }
        }
        break;
      case 1:
        ge3(n2, e), Ne2(e), r2 & 512 && t !== null && In(t, t.return);
        break;
      case 5:
        if (ge3(n2, e), Ne2(e), r2 & 512 && t !== null && In(t, t.return), e.flags & 32) {
          var l2 = e.stateNode;
          try {
            kt(l2, "");
          } catch (k) {
            I(e, e.return, k);
          }
        }
        if (r2 & 4 && (l2 = e.stateNode, l2 != null)) {
          var i = e.memoizedProps, u2 = t !== null ? t.memoizedProps : i, o = e.type, s2 = e.updateQueue;
          if (e.updateQueue = null, s2 !== null)
            try {
              o === "input" && i.type === "radio" && i.name != null && No(l2, i), Il(o, u2);
              var d3 = Il(o, i);
              for (u2 = 0; u2 < s2.length; u2 += 2) {
                var m2 = s2[u2], h2 = s2[u2 + 1];
                m2 === "style" ? To(l2, h2) : m2 === "dangerouslySetInnerHTML" ? Po(l2, h2) : m2 === "children" ? kt(l2, h2) : wi(l2, m2, h2, d3);
              }
              switch (o) {
                case "input":
                  Ml(l2, i);
                  break;
                case "textarea":
                  _o(l2, i);
                  break;
                case "select":
                  var p3 = l2._wrapperState.wasMultiple;
                  l2._wrapperState.wasMultiple = !!i.multiple;
                  var g2 = i.value;
                  g2 != null ? jn(l2, !!i.multiple, g2, false) : p3 !== !!i.multiple && (i.defaultValue != null ? jn(l2, !!i.multiple, i.defaultValue, true) : jn(l2, !!i.multiple, i.multiple ? [] : "", false));
              }
              l2[Tt] = i;
            } catch (k) {
              I(e, e.return, k);
            }
        }
        break;
      case 6:
        if (ge3(n2, e), Ne2(e), r2 & 4) {
          if (e.stateNode === null)
            throw Error(v2(162));
          l2 = e.stateNode, i = e.memoizedProps;
          try {
            l2.nodeValue = i;
          } catch (k) {
            I(e, e.return, k);
          }
        }
        break;
      case 3:
        if (ge3(n2, e), Ne2(e), r2 & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Nt(n2.containerInfo);
          } catch (k) {
            I(e, e.return, k);
          }
        break;
      case 4:
        ge3(n2, e), Ne2(e);
        break;
      case 13:
        ge3(n2, e), Ne2(e), l2 = e.child, l2.flags & 8192 && (i = l2.memoizedState !== null, l2.stateNode.isHidden = i, !i || l2.alternate !== null && l2.alternate.memoizedState !== null || (qi = j())), r2 & 4 && ao(e);
        break;
      case 22:
        if (m2 = t !== null && t.memoizedState !== null, e.mode & 1 ? (Z2 = (d3 = Z2) || m2, ge3(n2, e), Z2 = d3) : ge3(n2, e), Ne2(e), r2 & 8192) {
          if (d3 = e.memoizedState !== null, (e.stateNode.isHidden = d3) && !m2 && e.mode & 1)
            for (w = e, m2 = e.child; m2 !== null; ) {
              for (h2 = w = m2; w !== null; ) {
                switch (p3 = w, g2 = p3.child, p3.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    yt(4, p3, p3.return);
                    break;
                  case 1:
                    In(p3, p3.return);
                    var S2 = p3.stateNode;
                    if (typeof S2.componentWillUnmount == "function") {
                      r2 = p3, t = p3.return;
                      try {
                        n2 = r2, S2.props = n2.memoizedProps, S2.state = n2.memoizedState, S2.componentWillUnmount();
                      } catch (k) {
                        I(r2, t, k);
                      }
                    }
                    break;
                  case 5:
                    In(p3, p3.return);
                    break;
                  case 22:
                    if (p3.memoizedState !== null) {
                      fo(h2);
                      continue;
                    }
                }
                g2 !== null ? (g2.return = p3, w = g2) : fo(h2);
              }
              m2 = m2.sibling;
            }
          e:
            for (m2 = null, h2 = e; ; ) {
              if (h2.tag === 5) {
                if (m2 === null) {
                  m2 = h2;
                  try {
                    l2 = h2.stateNode, d3 ? (i = l2.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = h2.stateNode, s2 = h2.memoizedProps.style, u2 = s2 != null && s2.hasOwnProperty("display") ? s2.display : null, o.style.display = Lo("display", u2));
                  } catch (k) {
                    I(e, e.return, k);
                  }
                }
              } else if (h2.tag === 6) {
                if (m2 === null)
                  try {
                    h2.stateNode.nodeValue = d3 ? "" : h2.memoizedProps;
                  } catch (k) {
                    I(e, e.return, k);
                  }
              } else if ((h2.tag !== 22 && h2.tag !== 23 || h2.memoizedState === null || h2 === e) && h2.child !== null) {
                h2.child.return = h2, h2 = h2.child;
                continue;
              }
              if (h2 === e)
                break e;
              for (; h2.sibling === null; ) {
                if (h2.return === null || h2.return === e)
                  break e;
                m2 === h2 && (m2 = null), h2 = h2.return;
              }
              m2 === h2 && (m2 = null), h2.sibling.return = h2.return, h2 = h2.sibling;
            }
        }
        break;
      case 19:
        ge3(n2, e), Ne2(e), r2 & 4 && ao(e);
        break;
      case 21:
        break;
      default:
        ge3(n2, e), Ne2(e);
    }
  }
  function Ne2(e) {
    var n2 = e.flags;
    if (n2 & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ta(t)) {
              var r2 = t;
              break e;
            }
            t = t.return;
          }
          throw Error(v2(160));
        }
        switch (r2.tag) {
          case 5:
            var l2 = r2.stateNode;
            r2.flags & 32 && (kt(l2, ""), r2.flags &= -33);
            var i = so(e);
            di(e, i, l2);
            break;
          case 3:
          case 4:
            var u2 = r2.stateNode.containerInfo, o = so(e);
            fi(e, o, u2);
            break;
          default:
            throw Error(v2(161));
        }
      } catch (s2) {
        I(e, e.return, s2);
      }
      e.flags &= -3;
    }
    n2 & 4096 && (e.flags &= -4097);
  }
  function pf(e, n2, t) {
    w = e, ia(e, n2, t);
  }
  function ia(e, n2, t) {
    for (var r2 = (e.mode & 1) !== 0; w !== null; ) {
      var l2 = w, i = l2.child;
      if (l2.tag === 22 && r2) {
        var u2 = l2.memoizedState !== null || lr;
        if (!u2) {
          var o = l2.alternate, s2 = o !== null && o.memoizedState !== null || Z2;
          o = lr;
          var d3 = Z2;
          if (lr = u2, (Z2 = s2) && !d3)
            for (w = l2; w !== null; )
              u2 = w, s2 = u2.child, u2.tag === 22 && u2.memoizedState !== null ? po(l2) : s2 !== null ? (s2.return = u2, w = s2) : po(l2);
          for (; i !== null; )
            w = i, ia(i, n2, t), i = i.sibling;
          w = l2, lr = o, Z2 = d3;
        }
        co(e, n2, t);
      } else
        l2.subtreeFlags & 8772 && i !== null ? (i.return = l2, w = i) : co(e, n2, t);
    }
  }
  function co(e) {
    for (; w !== null; ) {
      var n2 = w;
      if (n2.flags & 8772) {
        var t = n2.alternate;
        try {
          if (n2.flags & 8772)
            switch (n2.tag) {
              case 0:
              case 11:
              case 15:
                Z2 || Xr(5, n2);
                break;
              case 1:
                var r2 = n2.stateNode;
                if (n2.flags & 4 && !Z2)
                  if (t === null)
                    r2.componentDidMount();
                  else {
                    var l2 = n2.elementType === n2.type ? t.memoizedProps : we3(n2.type, t.memoizedProps);
                    r2.componentDidUpdate(l2, t.memoizedState, r2.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = n2.updateQueue;
                i !== null && Yu(n2, i, r2);
                break;
              case 3:
                var u2 = n2.updateQueue;
                if (u2 !== null) {
                  if (t = null, n2.child !== null)
                    switch (n2.child.tag) {
                      case 5:
                        t = n2.child.stateNode;
                        break;
                      case 1:
                        t = n2.child.stateNode;
                    }
                  Yu(n2, u2, t);
                }
                break;
              case 5:
                var o = n2.stateNode;
                if (t === null && n2.flags & 4) {
                  t = o;
                  var s2 = n2.memoizedProps;
                  switch (n2.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s2.autoFocus && t.focus();
                      break;
                    case "img":
                      s2.src && (t.src = s2.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n2.memoizedState === null) {
                  var d3 = n2.alternate;
                  if (d3 !== null) {
                    var m2 = d3.memoizedState;
                    if (m2 !== null) {
                      var h2 = m2.dehydrated;
                      h2 !== null && Nt(h2);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(v2(163));
            }
          Z2 || n2.flags & 512 && ci(n2);
        } catch (p3) {
          I(n2, n2.return, p3);
        }
      }
      if (n2 === e) {
        w = null;
        break;
      }
      if (t = n2.sibling, t !== null) {
        t.return = n2.return, w = t;
        break;
      }
      w = n2.return;
    }
  }
  function fo(e) {
    for (; w !== null; ) {
      var n2 = w;
      if (n2 === e) {
        w = null;
        break;
      }
      var t = n2.sibling;
      if (t !== null) {
        t.return = n2.return, w = t;
        break;
      }
      w = n2.return;
    }
  }
  function po(e) {
    for (; w !== null; ) {
      var n2 = w;
      try {
        switch (n2.tag) {
          case 0:
          case 11:
          case 15:
            var t = n2.return;
            try {
              Xr(4, n2);
            } catch (s2) {
              I(n2, t, s2);
            }
            break;
          case 1:
            var r2 = n2.stateNode;
            if (typeof r2.componentDidMount == "function") {
              var l2 = n2.return;
              try {
                r2.componentDidMount();
              } catch (s2) {
                I(n2, l2, s2);
              }
            }
            var i = n2.return;
            try {
              ci(n2);
            } catch (s2) {
              I(n2, i, s2);
            }
            break;
          case 5:
            var u2 = n2.return;
            try {
              ci(n2);
            } catch (s2) {
              I(n2, u2, s2);
            }
        }
      } catch (s2) {
        I(n2, n2.return, s2);
      }
      if (n2 === e) {
        w = null;
        break;
      }
      var o = n2.sibling;
      if (o !== null) {
        o.return = n2.return, w = o;
        break;
      }
      w = n2.return;
    }
  }
  var mf = Math.ceil, Fr = Ve2.ReactCurrentDispatcher, Zi = Ve2.ReactCurrentOwner, he3 = Ve2.ReactCurrentBatchConfig, _ = 0, Q = null, V = null, K = 0, ue = 0, Un = un(0), B2 = 0, It = null, Sn = 0, Gr = 0, Ji = 0, gt = null, ne2 = null, qi = 0, Zn = 1 / 0, Te2 = null, Ir = false, pi = null, be3 = null, ir = false, Ye = null, Ur = 0, wt = 0, mi = null, pr = -1, mr = 0;
  function b() {
    return _ & 6 ? j() : pr !== -1 ? pr : pr = j();
  }
  function en(e) {
    return e.mode & 1 ? _ & 2 && K !== 0 ? K & -K : Zc.transition !== null ? (mr === 0 && (mr = Ho()), mr) : (e = P2, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Go(e.type)), e) : 1;
  }
  function Ce3(e, n2, t, r2) {
    if (50 < wt)
      throw wt = 0, mi = null, Error(v2(185));
    Ut(e, t, r2), (!(_ & 2) || e !== Q) && (e === Q && (!(_ & 2) && (Gr |= t), B2 === 4 && $e2(e, K)), ie2(e, r2), t === 1 && _ === 0 && !(n2.mode & 1) && (Zn = j() + 500, $r && on()));
  }
  function ie2(e, n2) {
    var t = e.callbackNode;
    qa(e, n2);
    var r2 = Sr(e, e === Q ? K : 0);
    if (r2 === 0)
      t !== null && Su(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n2 = r2 & -r2, e.callbackPriority !== n2) {
      if (t != null && Su(t), n2 === 1)
        e.tag === 0 ? Gc(mo.bind(null, e)) : ms(mo.bind(null, e)), $c(function() {
          !(_ & 6) && on();
        }), t = null;
      else {
        switch (Wo(r2)) {
          case 1:
            t = xi;
            break;
          case 4:
            t = Ao;
            break;
          case 16:
            t = wr;
            break;
          case 536870912:
            t = Bo;
            break;
          default:
            t = wr;
        }
        t = pa(t, ua.bind(null, e));
      }
      e.callbackPriority = n2, e.callbackNode = t;
    }
  }
  function ua(e, n2) {
    if (pr = -1, mr = 0, _ & 6)
      throw Error(v2(327));
    var t = e.callbackNode;
    if (Wn() && e.callbackNode !== t)
      return null;
    var r2 = Sr(e, e === Q ? K : 0);
    if (r2 === 0)
      return null;
    if (r2 & 30 || r2 & e.expiredLanes || n2)
      n2 = jr(e, r2);
    else {
      n2 = r2;
      var l2 = _;
      _ |= 2;
      var i = sa();
      (Q !== e || K !== n2) && (Te2 = null, Zn = j() + 500, hn(e, n2));
      do
        try {
          yf();
          break;
        } catch (o) {
          oa(e, o);
        }
      while (1);
      Ui(), Fr.current = i, _ = l2, V !== null ? n2 = 0 : (Q = null, K = 0, n2 = B2);
    }
    if (n2 !== 0) {
      if (n2 === 2 && (l2 = Bl(e), l2 !== 0 && (r2 = l2, n2 = hi(e, l2))), n2 === 1)
        throw t = It, hn(e, 0), $e2(e, r2), ie2(e, j()), t;
      if (n2 === 6)
        $e2(e, r2);
      else {
        if (l2 = e.current.alternate, !(r2 & 30) && !hf(l2) && (n2 = jr(e, r2), n2 === 2 && (i = Bl(e), i !== 0 && (r2 = i, n2 = hi(e, i))), n2 === 1))
          throw t = It, hn(e, 0), $e2(e, r2), ie2(e, j()), t;
        switch (e.finishedWork = l2, e.finishedLanes = r2, n2) {
          case 0:
          case 1:
            throw Error(v2(345));
          case 2:
            fn(e, ne2, Te2);
            break;
          case 3:
            if ($e2(e, r2), (r2 & 130023424) === r2 && (n2 = qi + 500 - j(), 10 < n2)) {
              if (Sr(e, 0) !== 0)
                break;
              if (l2 = e.suspendedLanes, (l2 & r2) !== r2) {
                b(), e.pingedLanes |= e.suspendedLanes & l2;
                break;
              }
              e.timeoutHandle = Gl(fn.bind(null, e, ne2, Te2), n2);
              break;
            }
            fn(e, ne2, Te2);
            break;
          case 4:
            if ($e2(e, r2), (r2 & 4194240) === r2)
              break;
            for (n2 = e.eventTimes, l2 = -1; 0 < r2; ) {
              var u2 = 31 - Ee3(r2);
              i = 1 << u2, u2 = n2[u2], u2 > l2 && (l2 = u2), r2 &= ~i;
            }
            if (r2 = l2, r2 = j() - r2, r2 = (120 > r2 ? 120 : 480 > r2 ? 480 : 1080 > r2 ? 1080 : 1920 > r2 ? 1920 : 3e3 > r2 ? 3e3 : 4320 > r2 ? 4320 : 1960 * mf(r2 / 1960)) - r2, 10 < r2) {
              e.timeoutHandle = Gl(fn.bind(null, e, ne2, Te2), r2);
              break;
            }
            fn(e, ne2, Te2);
            break;
          case 5:
            fn(e, ne2, Te2);
            break;
          default:
            throw Error(v2(329));
        }
      }
    }
    return ie2(e, j()), e.callbackNode === t ? ua.bind(null, e) : null;
  }
  function hi(e, n2) {
    var t = gt;
    return e.current.memoizedState.isDehydrated && (hn(e, n2).flags |= 256), e = jr(e, n2), e !== 2 && (n2 = ne2, ne2 = t, n2 !== null && vi(n2)), e;
  }
  function vi(e) {
    ne2 === null ? ne2 = e : ne2.push.apply(ne2, e);
  }
  function hf(e) {
    for (var n2 = e; ; ) {
      if (n2.flags & 16384) {
        var t = n2.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r2 = 0; r2 < t.length; r2++) {
            var l2 = t[r2], i = l2.getSnapshot;
            l2 = l2.value;
            try {
              if (!xe3(i(), l2))
                return false;
            } catch {
              return false;
            }
          }
      }
      if (t = n2.child, n2.subtreeFlags & 16384 && t !== null)
        t.return = n2, n2 = t;
      else {
        if (n2 === e)
          break;
        for (; n2.sibling === null; ) {
          if (n2.return === null || n2.return === e)
            return true;
          n2 = n2.return;
        }
        n2.sibling.return = n2.return, n2 = n2.sibling;
      }
    }
    return true;
  }
  function $e2(e, n2) {
    for (n2 &= ~Ji, n2 &= ~Gr, e.suspendedLanes |= n2, e.pingedLanes &= ~n2, e = e.expirationTimes; 0 < n2; ) {
      var t = 31 - Ee3(n2), r2 = 1 << t;
      e[t] = -1, n2 &= ~r2;
    }
  }
  function mo(e) {
    if (_ & 6)
      throw Error(v2(327));
    Wn();
    var n2 = Sr(e, 0);
    if (!(n2 & 1))
      return ie2(e, j()), null;
    var t = jr(e, n2);
    if (e.tag !== 0 && t === 2) {
      var r2 = Bl(e);
      r2 !== 0 && (n2 = r2, t = hi(e, r2));
    }
    if (t === 1)
      throw t = It, hn(e, 0), $e2(e, n2), ie2(e, j()), t;
    if (t === 6)
      throw Error(v2(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n2, fn(e, ne2, Te2), ie2(e, j()), null;
  }
  function bi(e, n2) {
    var t = _;
    _ |= 1;
    try {
      return e(n2);
    } finally {
      _ = t, _ === 0 && (Zn = j() + 500, $r && on());
    }
  }
  function kn(e) {
    Ye !== null && Ye.tag === 0 && !(_ & 6) && Wn();
    var n2 = _;
    _ |= 1;
    var t = he3.transition, r2 = P2;
    try {
      if (he3.transition = null, P2 = 1, e)
        return e();
    } finally {
      P2 = r2, he3.transition = t, _ = n2, !(_ & 6) && on();
    }
  }
  function eu() {
    ue = Un.current, M2(Un);
  }
  function hn(e, n2) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Qc(t)), V !== null)
      for (t = V.return; t !== null; ) {
        var r2 = t;
        switch (Ri(r2), r2.tag) {
          case 1:
            r2 = r2.type.childContextTypes, r2 != null && Nr();
            break;
          case 3:
            Xn(), M2(re2), M2(J), Wi();
            break;
          case 5:
            Hi(r2);
            break;
          case 4:
            Xn();
            break;
          case 13:
            M2(O4);
            break;
          case 19:
            M2(O4);
            break;
          case 10:
            ji(r2.type._context);
            break;
          case 22:
          case 23:
            eu();
        }
        t = t.return;
      }
    if (Q = e, V = e = nn(e.current, null), K = ue = n2, B2 = 0, It = null, Ji = Gr = Sn = 0, ne2 = gt = null, pn !== null) {
      for (n2 = 0; n2 < pn.length; n2++)
        if (t = pn[n2], r2 = t.interleaved, r2 !== null) {
          t.interleaved = null;
          var l2 = r2.next, i = t.pending;
          if (i !== null) {
            var u2 = i.next;
            i.next = l2, r2.next = u2;
          }
          t.pending = r2;
        }
      pn = null;
    }
    return e;
  }
  function oa(e, n2) {
    do {
      var t = V;
      try {
        if (Ui(), cr.current = Rr, Or) {
          for (var r2 = R.memoizedState; r2 !== null; ) {
            var l2 = r2.queue;
            l2 !== null && (l2.pending = null), r2 = r2.next;
          }
          Or = false;
        }
        if (wn = 0, W3 = A2 = R = null, vt = false, Ot = 0, Zi.current = null, t === null || t.return === null) {
          B2 = 1, It = n2, V = null;
          break;
        }
        e: {
          var i = e, u2 = t.return, o = t, s2 = n2;
          if (n2 = K, o.flags |= 32768, s2 !== null && typeof s2 == "object" && typeof s2.then == "function") {
            var d3 = s2, m2 = o, h2 = m2.tag;
            if (!(m2.mode & 1) && (h2 === 0 || h2 === 11 || h2 === 15)) {
              var p3 = m2.alternate;
              p3 ? (m2.updateQueue = p3.updateQueue, m2.memoizedState = p3.memoizedState, m2.lanes = p3.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var g2 = eo(u2);
            if (g2 !== null) {
              g2.flags &= -257, no(g2, u2, o, i, n2), g2.mode & 1 && bu(i, d3, n2), n2 = g2, s2 = d3;
              var S2 = n2.updateQueue;
              if (S2 === null) {
                var k = /* @__PURE__ */ new Set();
                k.add(s2), n2.updateQueue = k;
              } else
                S2.add(s2);
              break e;
            } else {
              if (!(n2 & 1)) {
                bu(i, d3, n2), nu();
                break e;
              }
              s2 = Error(v2(426));
            }
          } else if (D && o.mode & 1) {
            var U3 = eo(u2);
            if (U3 !== null) {
              !(U3.flags & 65536) && (U3.flags |= 256), no(U3, u2, o, i, n2), Fi(Gn(s2, o));
              break e;
            }
          }
          i = s2 = Gn(s2, o), B2 !== 4 && (B2 = 2), gt === null ? gt = [i] : gt.push(i), i = u2;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, n2 &= -n2, i.lanes |= n2;
                var c = Qs(i, s2, n2);
                Ku(i, c);
                break e;
              case 1:
                o = s2;
                var a2 = i.type, f3 = i.stateNode;
                if (!(i.flags & 128) && (typeof a2.getDerivedStateFromError == "function" || f3 !== null && typeof f3.componentDidCatch == "function" && (be3 === null || !be3.has(f3)))) {
                  i.flags |= 65536, n2 &= -n2, i.lanes |= n2;
                  var y3 = $s(i, o, n2);
                  Ku(i, y3);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ca(t);
      } catch (E4) {
        n2 = E4, V === t && t !== null && (V = t = t.return);
        continue;
      }
      break;
    } while (1);
  }
  function sa() {
    var e = Fr.current;
    return Fr.current = Rr, e === null ? Rr : e;
  }
  function nu() {
    (B2 === 0 || B2 === 3 || B2 === 2) && (B2 = 4), Q === null || !(Sn & 268435455) && !(Gr & 268435455) || $e2(Q, K);
  }
  function jr(e, n2) {
    var t = _;
    _ |= 2;
    var r2 = sa();
    (Q !== e || K !== n2) && (Te2 = null, hn(e, n2));
    do
      try {
        vf();
        break;
      } catch (l2) {
        oa(e, l2);
      }
    while (1);
    if (Ui(), _ = t, Fr.current = r2, V !== null)
      throw Error(v2(261));
    return Q = null, K = 0, B2;
  }
  function vf() {
    for (; V !== null; )
      aa(V);
  }
  function yf() {
    for (; V !== null && !Wa(); )
      aa(V);
  }
  function aa(e) {
    var n2 = da(e.alternate, e, ue);
    e.memoizedProps = e.pendingProps, n2 === null ? ca(e) : V = n2, Zi.current = null;
  }
  function ca(e) {
    var n2 = e;
    do {
      var t = n2.alternate;
      if (e = n2.return, n2.flags & 32768) {
        if (t = cf(t, n2), t !== null) {
          t.flags &= 32767, V = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          B2 = 6, V = null;
          return;
        }
      } else if (t = af(t, n2, ue), t !== null) {
        V = t;
        return;
      }
      if (n2 = n2.sibling, n2 !== null) {
        V = n2;
        return;
      }
      V = n2 = e;
    } while (n2 !== null);
    B2 === 0 && (B2 = 5);
  }
  function fn(e, n2, t) {
    var r2 = P2, l2 = he3.transition;
    try {
      he3.transition = null, P2 = 1, gf(e, n2, t, r2);
    } finally {
      he3.transition = l2, P2 = r2;
    }
    return null;
  }
  function gf(e, n2, t, r2) {
    do
      Wn();
    while (Ye !== null);
    if (_ & 6)
      throw Error(v2(327));
    t = e.finishedWork;
    var l2 = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(v2(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = t.lanes | t.childLanes;
    if (ba(e, i), e === Q && (V = Q = null, K = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || ir || (ir = true, pa(wr, function() {
      return Wn(), null;
    })), i = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || i) {
      i = he3.transition, he3.transition = null;
      var u2 = P2;
      P2 = 1;
      var o = _;
      _ |= 4, Zi.current = null, df(e, t), la(t, e), Vc(Yl), kr = !!Kl, Yl = Kl = null, e.current = t, pf(t, e, l2), Qa(), _ = o, P2 = u2, he3.transition = i;
    } else
      e.current = t;
    if (ir && (ir = false, Ye = e, Ur = l2), i = e.pendingLanes, i === 0 && (be3 = null), Ya(t.stateNode, r2), ie2(e, j()), n2 !== null)
      for (r2 = e.onRecoverableError, t = 0; t < n2.length; t++)
        l2 = n2[t], r2(l2.value, { componentStack: l2.stack, digest: l2.digest });
    if (Ir)
      throw Ir = false, e = pi, pi = null, e;
    return Ur & 1 && e.tag !== 0 && Wn(), i = e.pendingLanes, i & 1 ? e === mi ? wt++ : (wt = 0, mi = e) : wt = 0, on(), null;
  }
  function Wn() {
    if (Ye !== null) {
      var e = Wo(Ur), n2 = he3.transition, t = P2;
      try {
        if (he3.transition = null, P2 = 16 > e ? 16 : e, Ye === null)
          var r2 = false;
        else {
          if (e = Ye, Ye = null, Ur = 0, _ & 6)
            throw Error(v2(331));
          var l2 = _;
          for (_ |= 4, w = e.current; w !== null; ) {
            var i = w, u2 = i.child;
            if (w.flags & 16) {
              var o = i.deletions;
              if (o !== null) {
                for (var s2 = 0; s2 < o.length; s2++) {
                  var d3 = o[s2];
                  for (w = d3; w !== null; ) {
                    var m2 = w;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yt(8, m2, i);
                    }
                    var h2 = m2.child;
                    if (h2 !== null)
                      h2.return = m2, w = h2;
                    else
                      for (; w !== null; ) {
                        m2 = w;
                        var p3 = m2.sibling, g2 = m2.return;
                        if (na(m2), m2 === d3) {
                          w = null;
                          break;
                        }
                        if (p3 !== null) {
                          p3.return = g2, w = p3;
                          break;
                        }
                        w = g2;
                      }
                  }
                }
                var S2 = i.alternate;
                if (S2 !== null) {
                  var k = S2.child;
                  if (k !== null) {
                    S2.child = null;
                    do {
                      var U3 = k.sibling;
                      k.sibling = null, k = U3;
                    } while (k !== null);
                  }
                }
                w = i;
              }
            }
            if (i.subtreeFlags & 2064 && u2 !== null)
              u2.return = i, w = u2;
            else
              e:
                for (; w !== null; ) {
                  if (i = w, i.flags & 2048)
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yt(9, i, i.return);
                    }
                  var c = i.sibling;
                  if (c !== null) {
                    c.return = i.return, w = c;
                    break e;
                  }
                  w = i.return;
                }
          }
          var a2 = e.current;
          for (w = a2; w !== null; ) {
            u2 = w;
            var f3 = u2.child;
            if (u2.subtreeFlags & 2064 && f3 !== null)
              f3.return = u2, w = f3;
            else
              e:
                for (u2 = a2; w !== null; ) {
                  if (o = w, o.flags & 2048)
                    try {
                      switch (o.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Xr(9, o);
                      }
                    } catch (E4) {
                      I(o, o.return, E4);
                    }
                  if (o === u2) {
                    w = null;
                    break e;
                  }
                  var y3 = o.sibling;
                  if (y3 !== null) {
                    y3.return = o.return, w = y3;
                    break e;
                  }
                  w = o.return;
                }
          }
          if (_ = l2, on(), Pe3 && typeof Pe3.onPostCommitFiberRoot == "function")
            try {
              Pe3.onPostCommitFiberRoot(Ar, e);
            } catch {
            }
          r2 = true;
        }
        return r2;
      } finally {
        P2 = t, he3.transition = n2;
      }
    }
    return false;
  }
  function ho(e, n2, t) {
    n2 = Gn(t, n2), n2 = Qs(e, n2, 1), e = qe2(e, n2, 1), n2 = b(), e !== null && (Ut(e, 1, n2), ie2(e, n2));
  }
  function I(e, n2, t) {
    if (e.tag === 3)
      ho(e, e, t);
    else
      for (; n2 !== null; ) {
        if (n2.tag === 3) {
          ho(n2, e, t);
          break;
        } else if (n2.tag === 1) {
          var r2 = n2.stateNode;
          if (typeof n2.type.getDerivedStateFromError == "function" || typeof r2.componentDidCatch == "function" && (be3 === null || !be3.has(r2))) {
            e = Gn(t, e), e = $s(n2, e, 1), n2 = qe2(n2, e, 1), e = b(), n2 !== null && (Ut(n2, 1, e), ie2(n2, e));
            break;
          }
        }
        n2 = n2.return;
      }
  }
  function wf(e, n2, t) {
    var r2 = e.pingCache;
    r2 !== null && r2.delete(n2), n2 = b(), e.pingedLanes |= e.suspendedLanes & t, Q === e && (K & t) === t && (B2 === 4 || B2 === 3 && (K & 130023424) === K && 500 > j() - qi ? hn(e, 0) : Ji |= t), ie2(e, n2);
  }
  function fa(e, n2) {
    n2 === 0 && (e.mode & 1 ? (n2 = $t, $t <<= 1, !($t & 130023424) && ($t = 4194304)) : n2 = 1);
    var t = b();
    e = Ue2(e, n2), e !== null && (Ut(e, n2, t), ie2(e, t));
  }
  function Sf(e) {
    var n2 = e.memoizedState, t = 0;
    n2 !== null && (t = n2.retryLane), fa(e, t);
  }
  function kf(e, n2) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r2 = e.stateNode, l2 = e.memoizedState;
        l2 !== null && (t = l2.retryLane);
        break;
      case 19:
        r2 = e.stateNode;
        break;
      default:
        throw Error(v2(314));
    }
    r2 !== null && r2.delete(n2), fa(e, t);
  }
  var da;
  da = function(e, n2, t) {
    if (e !== null)
      if (e.memoizedProps !== n2.pendingProps || re2.current)
        te2 = true;
      else {
        if (!(e.lanes & t) && !(n2.flags & 128))
          return te2 = false, sf(e, n2, t);
        te2 = !!(e.flags & 131072);
      }
    else
      te2 = false, D && n2.flags & 1048576 && hs(n2, Pr, n2.index);
    switch (n2.lanes = 0, n2.tag) {
      case 2:
        var r2 = n2.type;
        dr(e, n2), e = n2.pendingProps;
        var l2 = $n(n2, J.current);
        Hn(n2, t), l2 = $i(null, n2, r2, e, l2, t);
        var i = Ki();
        return n2.flags |= 1, typeof l2 == "object" && l2 !== null && typeof l2.render == "function" && l2.$$typeof === void 0 ? (n2.tag = 1, n2.memoizedState = null, n2.updateQueue = null, le3(r2) ? (i = true, _r(n2)) : i = false, n2.memoizedState = l2.state !== null && l2.state !== void 0 ? l2.state : null, Ai(n2), l2.updater = Kr, n2.stateNode = l2, l2._reactInternals = n2, ti(n2, r2, e, t), n2 = ii(null, n2, r2, true, i, t)) : (n2.tag = 0, D && i && Oi(n2), q(null, n2, l2, t), n2 = n2.child), n2;
      case 16:
        r2 = n2.elementType;
        e: {
          switch (dr(e, n2), e = n2.pendingProps, l2 = r2._init, r2 = l2(r2._payload), n2.type = r2, l2 = n2.tag = Cf(r2), e = we3(r2, e), l2) {
            case 0:
              n2 = li(null, n2, r2, e, t);
              break e;
            case 1:
              n2 = lo(null, n2, r2, e, t);
              break e;
            case 11:
              n2 = to(null, n2, r2, e, t);
              break e;
            case 14:
              n2 = ro(null, n2, r2, we3(r2.type, e), t);
              break e;
          }
          throw Error(v2(306, r2, ""));
        }
        return n2;
      case 0:
        return r2 = n2.type, l2 = n2.pendingProps, l2 = n2.elementType === r2 ? l2 : we3(r2, l2), li(e, n2, r2, l2, t);
      case 1:
        return r2 = n2.type, l2 = n2.pendingProps, l2 = n2.elementType === r2 ? l2 : we3(r2, l2), lo(e, n2, r2, l2, t);
      case 3:
        e: {
          if (Gs(n2), e === null)
            throw Error(v2(387));
          r2 = n2.pendingProps, i = n2.memoizedState, l2 = i.element, ws(e, n2), Mr(n2, r2, null, t);
          var u2 = n2.memoizedState;
          if (r2 = u2.element, i.isDehydrated)
            if (i = { element: r2, isDehydrated: false, cache: u2.cache, pendingSuspenseBoundaries: u2.pendingSuspenseBoundaries, transitions: u2.transitions }, n2.updateQueue.baseState = i, n2.memoizedState = i, n2.flags & 256) {
              l2 = Gn(Error(v2(423)), n2), n2 = io(e, n2, r2, t, l2);
              break e;
            } else if (r2 !== l2) {
              l2 = Gn(Error(v2(424)), n2), n2 = io(e, n2, r2, t, l2);
              break e;
            } else
              for (oe2 = Je(n2.stateNode.containerInfo.firstChild), se2 = n2, D = true, ke3 = null, t = Cs(n2, null, r2, t), n2.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Kn(), r2 === l2) {
              n2 = je2(e, n2, t);
              break e;
            }
            q(e, n2, r2, t);
          }
          n2 = n2.child;
        }
        return n2;
      case 5:
        return xs(n2), e === null && bl(n2), r2 = n2.type, l2 = n2.pendingProps, i = e !== null ? e.memoizedProps : null, u2 = l2.children, Xl(r2, l2) ? u2 = null : i !== null && Xl(r2, i) && (n2.flags |= 32), Xs(e, n2), q(e, n2, u2, t), n2.child;
      case 6:
        return e === null && bl(n2), null;
      case 13:
        return Zs(e, n2, t);
      case 4:
        return Bi(n2, n2.stateNode.containerInfo), r2 = n2.pendingProps, e === null ? n2.child = Yn(n2, null, r2, t) : q(e, n2, r2, t), n2.child;
      case 11:
        return r2 = n2.type, l2 = n2.pendingProps, l2 = n2.elementType === r2 ? l2 : we3(r2, l2), to(e, n2, r2, l2, t);
      case 7:
        return q(e, n2, n2.pendingProps, t), n2.child;
      case 8:
        return q(e, n2, n2.pendingProps.children, t), n2.child;
      case 12:
        return q(e, n2, n2.pendingProps.children, t), n2.child;
      case 10:
        e: {
          if (r2 = n2.type._context, l2 = n2.pendingProps, i = n2.memoizedProps, u2 = l2.value, L(Lr, r2._currentValue), r2._currentValue = u2, i !== null)
            if (xe3(i.value, u2)) {
              if (i.children === l2.children && !re2.current) {
                n2 = je2(e, n2, t);
                break e;
              }
            } else
              for (i = n2.child, i !== null && (i.return = n2); i !== null; ) {
                var o = i.dependencies;
                if (o !== null) {
                  u2 = i.child;
                  for (var s2 = o.firstContext; s2 !== null; ) {
                    if (s2.context === r2) {
                      if (i.tag === 1) {
                        s2 = Re2(-1, t & -t), s2.tag = 2;
                        var d3 = i.updateQueue;
                        if (d3 !== null) {
                          d3 = d3.shared;
                          var m2 = d3.pending;
                          m2 === null ? s2.next = s2 : (s2.next = m2.next, m2.next = s2), d3.pending = s2;
                        }
                      }
                      i.lanes |= t, s2 = i.alternate, s2 !== null && (s2.lanes |= t), ei(i.return, t, n2), o.lanes |= t;
                      break;
                    }
                    s2 = s2.next;
                  }
                } else if (i.tag === 10)
                  u2 = i.type === n2.type ? null : i.child;
                else if (i.tag === 18) {
                  if (u2 = i.return, u2 === null)
                    throw Error(v2(341));
                  u2.lanes |= t, o = u2.alternate, o !== null && (o.lanes |= t), ei(u2, t, n2), u2 = i.sibling;
                } else
                  u2 = i.child;
                if (u2 !== null)
                  u2.return = i;
                else
                  for (u2 = i; u2 !== null; ) {
                    if (u2 === n2) {
                      u2 = null;
                      break;
                    }
                    if (i = u2.sibling, i !== null) {
                      i.return = u2.return, u2 = i;
                      break;
                    }
                    u2 = u2.return;
                  }
                i = u2;
              }
          q(e, n2, l2.children, t), n2 = n2.child;
        }
        return n2;
      case 9:
        return l2 = n2.type, r2 = n2.pendingProps.children, Hn(n2, t), l2 = ve3(l2), r2 = r2(l2), n2.flags |= 1, q(e, n2, r2, t), n2.child;
      case 14:
        return r2 = n2.type, l2 = we3(r2, n2.pendingProps), l2 = we3(r2.type, l2), ro(e, n2, r2, l2, t);
      case 15:
        return Ks(e, n2, n2.type, n2.pendingProps, t);
      case 17:
        return r2 = n2.type, l2 = n2.pendingProps, l2 = n2.elementType === r2 ? l2 : we3(r2, l2), dr(e, n2), n2.tag = 1, le3(r2) ? (e = true, _r(n2)) : e = false, Hn(n2, t), ks(n2, r2, l2), ti(n2, r2, l2, t), ii(null, n2, r2, true, e, t);
      case 19:
        return Js(e, n2, t);
      case 22:
        return Ys(e, n2, t);
    }
    throw Error(v2(156, n2.tag));
  };
  function pa(e, n2) {
    return Vo(e, n2);
  }
  function Ef(e, n2, t, r2) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n2, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r2, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function me3(e, n2, t, r2) {
    return new Ef(e, n2, t, r2);
  }
  function tu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Cf(e) {
    if (typeof e == "function")
      return tu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ki)
        return 11;
      if (e === Ei)
        return 14;
    }
    return 2;
  }
  function nn(e, n2) {
    var t = e.alternate;
    return t === null ? (t = me3(e.tag, n2, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n2, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n2 = e.dependencies, t.dependencies = n2 === null ? null : { lanes: n2.lanes, firstContext: n2.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function hr(e, n2, t, r2, l2, i) {
    var u2 = 2;
    if (r2 = e, typeof e == "function")
      tu(e) && (u2 = 1);
    else if (typeof e == "string")
      u2 = 5;
    else
      e:
        switch (e) {
          case zn:
            return vn(t.children, l2, i, n2);
          case Si:
            u2 = 8, l2 |= 8;
            break;
          case _l:
            return e = me3(12, t, n2, l2 | 2), e.elementType = _l, e.lanes = i, e;
          case zl:
            return e = me3(13, t, n2, l2), e.elementType = zl, e.lanes = i, e;
          case Pl:
            return e = me3(19, t, n2, l2), e.elementType = Pl, e.lanes = i, e;
          case Eo:
            return Zr(t, l2, i, n2);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case So:
                  u2 = 10;
                  break e;
                case ko:
                  u2 = 9;
                  break e;
                case ki:
                  u2 = 11;
                  break e;
                case Ei:
                  u2 = 14;
                  break e;
                case He2:
                  u2 = 16, r2 = null;
                  break e;
              }
            throw Error(v2(130, e == null ? e : typeof e, ""));
        }
    return n2 = me3(u2, t, n2, l2), n2.elementType = e, n2.type = r2, n2.lanes = i, n2;
  }
  function vn(e, n2, t, r2) {
    return e = me3(7, e, r2, n2), e.lanes = t, e;
  }
  function Zr(e, n2, t, r2) {
    return e = me3(22, e, r2, n2), e.elementType = Eo, e.lanes = t, e.stateNode = { isHidden: false }, e;
  }
  function Cl(e, n2, t) {
    return e = me3(6, e, null, n2), e.lanes = t, e;
  }
  function xl(e, n2, t) {
    return n2 = me3(4, e.children !== null ? e.children : [], e.key, n2), n2.lanes = t, n2.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n2;
  }
  function xf(e, n2, t, r2, l2) {
    this.tag = n2, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ol(0), this.expirationTimes = ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ol(0), this.identifierPrefix = r2, this.onRecoverableError = l2, this.mutableSourceEagerHydrationData = null;
  }
  function ru(e, n2, t, r2, l2, i, u2, o, s2) {
    return e = new xf(e, n2, t, o, s2), n2 === 1 ? (n2 = 1, i === true && (n2 |= 8)) : n2 = 0, i = me3(3, null, null, n2), e.current = i, i.stateNode = e, i.memoizedState = { element: r2, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ai(i), e;
  }
  function Nf(e, n2, t) {
    var r2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _n, key: r2 == null ? null : "" + r2, children: e, containerInfo: n2, implementation: t };
  }
  function ma(e) {
    if (!e)
      return rn;
    e = e._reactInternals;
    e: {
      if (Cn(e) !== e || e.tag !== 1)
        throw Error(v2(170));
      var n2 = e;
      do {
        switch (n2.tag) {
          case 3:
            n2 = n2.stateNode.context;
            break e;
          case 1:
            if (le3(n2.type)) {
              n2 = n2.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n2 = n2.return;
      } while (n2 !== null);
      throw Error(v2(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (le3(t))
        return ps(e, t, n2);
    }
    return n2;
  }
  function ha(e, n2, t, r2, l2, i, u2, o, s2) {
    return e = ru(t, r2, true, e, l2, i, u2, o, s2), e.context = ma(null), t = e.current, r2 = b(), l2 = en(t), i = Re2(r2, l2), i.callback = n2 ?? null, qe2(t, i, l2), e.current.lanes = l2, Ut(e, l2, r2), ie2(e, r2), e;
  }
  function Jr(e, n2, t, r2) {
    var l2 = n2.current, i = b(), u2 = en(l2);
    return t = ma(t), n2.context === null ? n2.context = t : n2.pendingContext = t, n2 = Re2(i, u2), n2.payload = { element: e }, r2 = r2 === void 0 ? null : r2, r2 !== null && (n2.callback = r2), e = qe2(l2, n2, u2), e !== null && (Ce3(e, l2, u2, i), ar(e, l2, u2)), u2;
  }
  function Vr(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function vo(e, n2) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n2 ? t : n2;
    }
  }
  function lu(e, n2) {
    vo(e, n2), (e = e.alternate) && vo(e, n2);
  }
  function _f() {
    return null;
  }
  var va = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function iu(e) {
    this._internalRoot = e;
  }
  qr.prototype.render = iu.prototype.render = function(e) {
    var n2 = this._internalRoot;
    if (n2 === null)
      throw Error(v2(409));
    Jr(e, n2, null, null);
  };
  qr.prototype.unmount = iu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n2 = e.containerInfo;
      kn(function() {
        Jr(null, e, null, null);
      }), n2[Ie3] = null;
    }
  };
  function qr(e) {
    this._internalRoot = e;
  }
  qr.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n2 = Ko();
      e = { blockedOn: null, target: e, priority: n2 };
      for (var t = 0; t < Qe.length && n2 !== 0 && n2 < Qe[t].priority; t++)
        ;
      Qe.splice(t, 0, e), t === 0 && Xo(e);
    }
  };
  function uu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function br(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function yo() {
  }
  function zf(e, n2, t, r2, l2) {
    if (l2) {
      if (typeof r2 == "function") {
        var i = r2;
        r2 = function() {
          var d3 = Vr(u2);
          i.call(d3);
        };
      }
      var u2 = ha(n2, r2, e, 0, null, false, false, "", yo);
      return e._reactRootContainer = u2, e[Ie3] = u2.current, Pt(e.nodeType === 8 ? e.parentNode : e), kn(), u2;
    }
    for (; l2 = e.lastChild; )
      e.removeChild(l2);
    if (typeof r2 == "function") {
      var o = r2;
      r2 = function() {
        var d3 = Vr(s2);
        o.call(d3);
      };
    }
    var s2 = ru(e, 0, false, null, null, false, false, "", yo);
    return e._reactRootContainer = s2, e[Ie3] = s2.current, Pt(e.nodeType === 8 ? e.parentNode : e), kn(function() {
      Jr(n2, s2, t, r2);
    }), s2;
  }
  function el(e, n2, t, r2, l2) {
    var i = t._reactRootContainer;
    if (i) {
      var u2 = i;
      if (typeof l2 == "function") {
        var o = l2;
        l2 = function() {
          var s2 = Vr(u2);
          o.call(s2);
        };
      }
      Jr(n2, u2, e, l2);
    } else
      u2 = zf(t, n2, e, l2, r2);
    return Vr(u2);
  }
  Qo = function(e) {
    switch (e.tag) {
      case 3:
        var n2 = e.stateNode;
        if (n2.current.memoizedState.isDehydrated) {
          var t = at(n2.pendingLanes);
          t !== 0 && (Ni(n2, t | 1), ie2(n2, j()), !(_ & 6) && (Zn = j() + 500, on()));
        }
        break;
      case 13:
        kn(function() {
          var r2 = Ue2(e, 1);
          if (r2 !== null) {
            var l2 = b();
            Ce3(r2, e, 1, l2);
          }
        }), lu(e, 1);
    }
  };
  _i = function(e) {
    if (e.tag === 13) {
      var n2 = Ue2(e, 134217728);
      if (n2 !== null) {
        var t = b();
        Ce3(n2, e, 134217728, t);
      }
      lu(e, 134217728);
    }
  };
  $o = function(e) {
    if (e.tag === 13) {
      var n2 = en(e), t = Ue2(e, n2);
      if (t !== null) {
        var r2 = b();
        Ce3(t, e, n2, r2);
      }
      lu(e, n2);
    }
  };
  Ko = function() {
    return P2;
  };
  Yo = function(e, n2) {
    var t = P2;
    try {
      return P2 = e, n2();
    } finally {
      P2 = t;
    }
  };
  jl = function(e, n2, t) {
    switch (n2) {
      case "input":
        if (Ml(e, t), n2 = t.name, t.type === "radio" && n2 != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n2) + '][type="radio"]'), n2 = 0; n2 < t.length; n2++) {
            var r2 = t[n2];
            if (r2 !== e && r2.form === e.form) {
              var l2 = Qr(r2);
              if (!l2)
                throw Error(v2(90));
              xo(r2), Ml(r2, l2);
            }
          }
        }
        break;
      case "textarea":
        _o(e, t);
        break;
      case "select":
        n2 = t.value, n2 != null && jn(e, !!t.multiple, n2, false);
    }
  };
  Oo = bi;
  Ro = kn;
  var Pf = { usingClientEntryPoint: false, Events: [Vt, Mn, Qr, Mo, Do, bi] }, it = { findFiberByHostInstance: dn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Lf = { bundleType: it.bundleType, version: it.version, rendererPackageName: it.rendererPackageName, rendererConfig: it.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ve2.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Uo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: it.findFiberByHostInstance || _f, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (ut = __REACT_DEVTOOLS_GLOBAL_HOOK__, !ut.isDisabled && ut.supportsFiber))
    try {
      Ar = ut.inject(Lf), Pe3 = ut;
    } catch {
    }
  var ut;
  fe2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf;
  fe2.createPortal = function(e, n2) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!uu(n2))
      throw Error(v2(200));
    return Nf(e, n2, null, t);
  };
  fe2.createRoot = function(e, n2) {
    if (!uu(e))
      throw Error(v2(299));
    var t = false, r2 = "", l2 = va;
    return n2 != null && (n2.unstable_strictMode === true && (t = true), n2.identifierPrefix !== void 0 && (r2 = n2.identifierPrefix), n2.onRecoverableError !== void 0 && (l2 = n2.onRecoverableError)), n2 = ru(e, 1, false, null, null, t, false, r2, l2), e[Ie3] = n2.current, Pt(e.nodeType === 8 ? e.parentNode : e), new iu(n2);
  };
  fe2.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n2 = e._reactInternals;
    if (n2 === void 0)
      throw typeof e.render == "function" ? Error(v2(188)) : (e = Object.keys(e).join(","), Error(v2(268, e)));
    return e = Uo(n2), e = e === null ? null : e.stateNode, e;
  };
  fe2.flushSync = function(e) {
    return kn(e);
  };
  fe2.hydrate = function(e, n2, t) {
    if (!br(n2))
      throw Error(v2(200));
    return el(null, e, n2, true, t);
  };
  fe2.hydrateRoot = function(e, n2, t) {
    if (!uu(e))
      throw Error(v2(405));
    var r2 = t != null && t.hydratedSources || null, l2 = false, i = "", u2 = va;
    if (t != null && (t.unstable_strictMode === true && (l2 = true), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (u2 = t.onRecoverableError)), n2 = ha(n2, null, e, 1, t ?? null, l2, false, i, u2), e[Ie3] = n2.current, Pt(e), r2)
      for (e = 0; e < r2.length; e++)
        t = r2[e], l2 = t._getVersion, l2 = l2(t._source), n2.mutableSourceEagerHydrationData == null ? n2.mutableSourceEagerHydrationData = [t, l2] : n2.mutableSourceEagerHydrationData.push(t, l2);
    return new qr(n2);
  };
  fe2.render = function(e, n2, t) {
    if (!br(n2))
      throw Error(v2(200));
    return el(null, e, n2, false, t);
  };
  fe2.unmountComponentAtNode = function(e) {
    if (!br(e))
      throw Error(v2(40));
    return e._reactRootContainer ? (kn(function() {
      el(null, null, e, false, function() {
        e._reactRootContainer = null, e[Ie3] = null;
      });
    }), true) : false;
  };
  fe2.unstable_batchedUpdates = bi;
  fe2.unstable_renderSubtreeIntoContainer = function(e, n2, t, r2) {
    if (!br(t))
      throw Error(v2(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(v2(38));
    return el(e, n2, t, false, r2);
  };
  fe2.version = "18.2.0-next-9e3b772b8-20220608";
});
var ou = au((Kf, wa) => {
  "use strict";
  function ga() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ga);
      } catch (e) {
        console.error(e);
      }
  }
  ga(), wa.exports = ya();
});
var sn = {};
Pa(sn, { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Tf, createPortal: () => Mf, createRoot: () => Df, default: () => Wf, findDOMNode: () => Of, flushSync: () => Rf, hydrate: () => Ff, hydrateRoot: () => If, render: () => Uf, unmountComponentAtNode: () => jf, unstable_batchedUpdates: () => Vf, unstable_renderSubtreeIntoContainer: () => Af, version: () => Bf });
var ka = cu(ou());
an(sn, cu(ou()));
var { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Tf, createPortal: Mf, createRoot: Df, findDOMNode: Of, flushSync: Rf, hydrate: Ff, hydrateRoot: If, render: Uf, unmountComponentAtNode: jf, unstable_batchedUpdates: Vf, unstable_renderSubtreeIntoContainer: Af, version: Bf } = ka;
var { default: Sa, ...Hf } = ka;
var Wf = Sa !== void 0 ? Sa : Hf;

// http-url:https://esm.sh/v130/react-dom@18.2.0/esnext/client.js
var require3 = (n2) => {
  const e = (m2) => typeof m2.default < "u" ? m2.default : m2, c = (m2) => Object.assign({}, m2);
  switch (n2) {
    case "react-dom":
      return e(react_dom_exports);
    default:
      throw new Error('module "' + n2 + '" not found');
  }
};
var d2 = Object.create;
var u = Object.defineProperty;
var E3 = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var p2 = Object.getPrototypeOf;
var h = Object.prototype.hasOwnProperty;
var x2 = ((t) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(t, { get: (e, o) => (typeof require3 < "u" ? require3 : e)[o] }) : t)(function(t) {
  if (typeof require3 < "u")
    return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var C = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var N = (t, e) => {
  for (var o in e)
    u(t, o, { get: e[o], enumerable: true });
};
var a = (t, e, o, c) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of m(e))
      !h.call(t, i) && i !== o && u(t, i, { get: () => e[i], enumerable: !(c = E3(e, i)) || c.enumerable });
  return t;
};
var n = (t, e, o) => (a(t, e, "default"), o && a(o, e, "default"));
var l = (t, e, o) => (o = t != null ? d2(p2(t)) : {}, a(e || !t || !t.__esModule ? u(o, "default", { value: t, enumerable: true }) : o, t));
var s = C((_) => {
  "use strict";
  var R = x2("react-dom");
  _.createRoot = R.createRoot, _.hydrateRoot = R.hydrateRoot;
  var I;
});
var r = {};
N(r, { createRoot: () => O3, default: () => v, hydrateRoot: () => g });
var y2 = l(s());
n(r, l(s()));
var { createRoot: O3, hydrateRoot: g } = y2;
var { default: f2, ...P } = y2;
var v = f2 !== void 0 ? f2 : P;

// index.ts
console.log(We, v);
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
