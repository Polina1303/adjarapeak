/*! For license information please see main.c1ca44b3.js.LICENSE.txt */
!(function () {
  var e = {
      694: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var o = typeof n;
                if ("string" === o || "number" === o) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var l = a.apply(null, n);
                    l && e.push(l);
                  }
                } else if ("object" === o)
                  if (n.toString === Object.prototype.toString)
                    for (var i in n) r.call(n, i) && n[i] && e.push(i);
                  else e.push(n.toString());
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (n = function () {
                  return a;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      110: function (e, t, n) {
        "use strict";
        var r = n(309),
          a = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          l = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          i = {};
        function u(e) {
          return r.isMemo(e) ? l : i[e.$$typeof] || a;
        }
        (i[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (i[r.Memo] = l);
        var c = Object.defineProperty,
          s = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          m = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (m) {
              var a = p(n);
              a && a !== m && e(t, a, r);
            }
            var l = s(n);
            f && (l = l.concat(f(n)));
            for (var i = u(t), h = u(n), g = 0; g < l.length; ++g) {
              var y = l[g];
              if (!o[y] && (!r || !r[y]) && (!h || !h[y]) && (!i || !i[y])) {
                var v = d(n, y);
                try {
                  c(t, y, v);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      746: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          a = n ? Symbol.for("react.portal") : 60106,
          o = n ? Symbol.for("react.fragment") : 60107,
          l = n ? Symbol.for("react.strict_mode") : 60108,
          i = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          c = n ? Symbol.for("react.context") : 60110,
          s = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          m = n ? Symbol.for("react.suspense_list") : 60120,
          h = n ? Symbol.for("react.memo") : 60115,
          g = n ? Symbol.for("react.lazy") : 60116,
          y = n ? Symbol.for("react.block") : 60121,
          v = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          w = n ? Symbol.for("react.scope") : 60119;
        function S(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case s:
                  case f:
                  case o:
                  case i:
                  case l:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case d:
                      case g:
                      case h:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        function k(e) {
          return S(e) === f;
        }
        (t.AsyncMode = s),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = c),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = o),
          (t.Lazy = g),
          (t.Memo = h),
          (t.Portal = a),
          (t.Profiler = i),
          (t.StrictMode = l),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return k(e) || S(e) === s;
          }),
          (t.isConcurrentMode = k),
          (t.isContextConsumer = function (e) {
            return S(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return S(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return S(e) === d;
          }),
          (t.isFragment = function (e) {
            return S(e) === o;
          }),
          (t.isLazy = function (e) {
            return S(e) === g;
          }),
          (t.isMemo = function (e) {
            return S(e) === h;
          }),
          (t.isPortal = function (e) {
            return S(e) === a;
          }),
          (t.isProfiler = function (e) {
            return S(e) === i;
          }),
          (t.isStrictMode = function (e) {
            return S(e) === l;
          }),
          (t.isSuspense = function (e) {
            return S(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === o ||
              e === f ||
              e === i ||
              e === l ||
              e === p ||
              e === m ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === h ||
                  e.$$typeof === u ||
                  e.$$typeof === c ||
                  e.$$typeof === d ||
                  e.$$typeof === v ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = S);
      },
      309: function (e, t, n) {
        "use strict";
        e.exports = n(746);
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var s = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(m, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          E = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          _ = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          j = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var z = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (z && e[z]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          I = Object.assign;
        function M(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var F = !1;
        function U(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var u = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case k:
              return "Portal";
            case _:
              return "Profiler";
            case x:
              return "StrictMode";
            case j:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === x ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          G(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function oe(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          se,
          fe =
            ((se = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return se(e, t);
                  });
                }
              : se);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Ee = null,
          xe = null;
        function _e(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = Sa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Ee ? (xe ? xe.push(e) : (xe = [e])) : (Ee = e);
        }
        function Pe() {
          if (Ee) {
            var e = Ee,
              t = xe;
            if (((xe = Ee = null), _e(e), t))
              for (e = 0; e < t.length; e++) _e(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function je() {}
        var Oe = !1;
        function Te(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Oe = !1), (null !== Ee || null !== xe) && (je(), Pe());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Sa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (s)
          try {
            var ze = {};
            Object.defineProperty(ze, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", ze, ze),
              window.removeEventListener("test", ze, ze);
          } catch (se) {
            Le = !1;
          }
        function Ae(e, t, n, r, a, o, l, i, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (s) {
            this.onError(s);
          }
        }
        var De = !1,
          Ie = null,
          Me = !1,
          Fe = null,
          Ue = {
            onError: function (e) {
              (De = !0), (Ie = e);
            },
          };
        function He(e, t, n, r, a, o, l, i, u) {
          (De = !1), (Ie = null), Ae.apply(Ue, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (Be(e) !== e) throw Error(o(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return Ve(a), e;
                    if (l === r) return Ve(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Xe = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var ct = 64,
          st = 4194304;
        function ft(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = ft(i)) : 0 !== (o &= l) && (r = ft(o));
          } else 0 !== (l = n & ~a) ? (r = ft(l)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          kt,
          Et,
          xt,
          _t,
          Ct = !1,
          Pt = [],
          Nt = null,
          jt = null,
          Ot = null,
          Tt = new Map(),
          Rt = new Map(),
          Lt = [],
          zt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              jt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function It(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void _t(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function Ut() {
          (Ct = !1),
            null !== Nt && Mt(Nt) && (Nt = null),
            null !== jt && Mt(jt) && (jt = null),
            null !== Ot && Mt(Ot) && (Ot = null),
            Tt.forEach(Ft),
            Rt.forEach(Ft);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function Bt(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Pt.length) {
            Ht(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Ht(Nt, e),
              null !== jt && Ht(jt, e),
              null !== Ot && Ht(Ot, e),
              Tt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            It(n), null === n.blockedOn && Lt.shift();
        }
        var $t = w.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            o = $t.transition;
          $t.transition = null;
          try {
            (bt = 1), Kt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            o = $t.transition;
          $t.transition = null;
          try {
            (bt = 4), Kt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          if (Vt) {
            var a = Xt(e, t, n, r);
            if (null === a) Vr(e, t, r, qt, n), At(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Nt = Dt(Nt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (jt = Dt(jt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = Dt(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Tt.set(o, Dt(Tt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Rt.set(o, Dt(Rt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < zt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && St(o),
                  null === (o = Xt(e, t, n, r)) && Vr(e, t, r, qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Xt(e, t, n, r) {
          if (((qt = null), null !== (e = va((e = Se(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Yt(e) {
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
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sn = an(cn),
          fn = I({}, cn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = I({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: _n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          mn = an(pn),
          hn = an(I({}, pn, { dataTransfer: 0 })),
          gn = an(I({}, fn, { relatedTarget: 0 })),
          yn = an(
            I({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = I({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(vn),
          wn = an(I({}, cn, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function _n() {
          return xn;
        }
        var Cn = I({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: _n,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = an(Cn),
          Nn = an(
            I({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          jn = an(
            I({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _n,
            })
          ),
          On = an(
            I({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = I({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(Tn),
          Ln = [9, 13, 27, 32],
          zn = s && "CompositionEvent" in window,
          An = null;
        s && "documentMode" in document && (An = document.documentMode);
        var Dn = s && "TextEvent" in window && !An,
          In = s && (!zn || (An && 8 < An && 11 >= An)),
          Mn = String.fromCharCode(32),
          Fn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!$n[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Kn = null;
        function qn(e) {
          Mr(e, 0);
        }
        function Xn(e) {
          if (K(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (s) {
          var Zn;
          if (s) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Gn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (Kn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Xn(Kn)) {
            var t = [];
            Wn(t, Kn, e, Se(e)), Te(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Kn);
        }
        function or(e, t) {
          if ("click" === e) return Xn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = sr(n, o));
                var l = sr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = s && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== q(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && ur(vr, r)) ||
              ((vr = r),
              0 < (r = Qr(yr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          Er = {},
          xr = {};
        function _r(e) {
          if (Er[e]) return Er[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (Er[e] = n[t]);
          return e;
        }
        s &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Cr = _r("animationend"),
          Pr = _r("animationiteration"),
          Nr = _r("animationstart"),
          jr = _r("transitionend"),
          Or = new Map(),
          Tr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, t) {
          Or.set(e, t), u(t, [e]);
        }
        for (var Lr = 0; Lr < Tr.length; Lr++) {
          var zr = Tr[Lr];
          Rr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
        }
        Rr(Cr, "onAnimationEnd"),
          Rr(Pr, "onAnimationIteration"),
          Rr(Nr, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(jr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar)
          );
        function Ir(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, u, c) {
              if ((He.apply(this, arguments), De)) {
                if (!De) throw Error(o(198));
                var s = Ie;
                (De = !1), (Ie = null), Me || ((Me = !0), (Fe = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Ir(a, i, c), (o = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Ir(a, i, c), (o = u);
                }
            }
          }
          if (Me) throw ((e = Fe), (Me = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || ($r(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), $r(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Ur("selectionchange", !1, t));
          }
        }
        function $r(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = Kt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = va(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = o,
              a = Se(n),
              l = [];
            e: {
              var i = Or.get(e);
              if (void 0 !== i) {
                var u = sn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Pn;
                    break;
                  case "focusin":
                    (c = "focus"), (u = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (u = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = jn;
                    break;
                  case Cr:
                  case Pr:
                  case Nr:
                    u = yn;
                    break;
                  case jr:
                    u = On;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Nn;
                }
                var s = 0 !== (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== i ? i + "Capture" : null) : i;
                s = [];
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== d &&
                        null != (h = Re(m, d)) &&
                        s.push(Wr(m, h, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < s.length &&
                  ((i = new u(i, c, null, n, a)),
                  l.push({ event: i, listeners: s }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!va(c) && !c[ma])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? va(c)
                          : null) &&
                        (c !== (f = Be(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = mn),
                  (h = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = Nn),
                    (h = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == u ? i : wa(u)),
                  (p = null == c ? i : wa(c)),
                  ((i = new s(h, m + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (h = null),
                  va(a) === r &&
                    (((s = new s(d, m + "enter", c, n, a)).target = p),
                    (s.relatedTarget = f),
                    (h = s)),
                  (f = h),
                  u && c)
                )
                  e: {
                    for (d = c, m = 0, p = s = u; p; p = Kr(p)) m++;
                    for (p = 0, h = d; h; h = Kr(h)) p++;
                    for (; 0 < m - p; ) (s = Kr(s)), m--;
                    for (; 0 < p - m; ) (d = Kr(d)), p--;
                    for (; m--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = Kr(s)), (d = Kr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && qr(l, i, u, s, !1),
                  null !== c && null !== f && qr(l, f, c, s, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var g = Yn;
              else if (Vn(i))
                if (Gn) g = lr;
                else {
                  g = ar;
                  var y = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? Wn(l, g, n, a)
                  : (y && y(e, i, r),
                    "focusout" === e &&
                      (y = i._wrapperState) &&
                      y.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(y) || "true" === y.contentEditable) &&
                    ((gr = y), (yr = r), (vr = null));
                  break;
                case "focusout":
                  vr = yr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(l, n, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  wr(l, n, a);
              }
              var v;
              if (zn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (In &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (v = en())
                    : ((Zt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Bn = !0))),
                0 < (y = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  l.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Hn(n)) && (b.data = v))),
                (v = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!zn && Un(e, t))
                          ? ((e = en()), (Jt = Zt = Gt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return In && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = v));
            }
            Mr(l, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Re(e, n)) && r.unshift(Wr(e, o, a)),
              null != (o = Re(e, t)) && r.push(Wr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              c = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== c &&
              ((i = c),
              a
                ? null != (u = Re(n, o)) && l.unshift(Wr(n, u, i))
                : a || (null != (u = Re(n, o)) && l.push(Wr(n, u, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Xr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xr, "\n")
            .replace(Yr, "");
        }
        function Zr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(o(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sa(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ma = "__reactContainer$" + fa,
          ha = "__reactEvents$" + fa,
          ga = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function va(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sa(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = sa(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function Sa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Ea = -1;
        function xa(e) {
          return { current: e };
        }
        function _a(e) {
          0 > Ea || ((e.current = ka[Ea]), (ka[Ea] = null), Ea--);
        }
        function Ca(e, t) {
          Ea++, (ka[Ea] = e.current), (e.current = t);
        }
        var Pa = {},
          Na = xa(Pa),
          ja = xa(!1),
          Oa = Pa;
        function Ta(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          _a(ja), _a(Na);
        }
        function za(e, t, n) {
          if (Na.current !== Pa) throw Error(o(168));
          Ca(Na, t), Ca(ja, n);
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, $(e) || "Unknown", a));
          return I({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Pa),
            (Oa = Na.current),
            Ca(Na, e),
            Ca(ja, ja.current),
            !0
          );
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Aa(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              _a(ja),
              _a(Na),
              Ca(Na, e))
            : _a(ja),
            Ca(ja, n);
        }
        var Ma = null,
          Fa = !1,
          Ua = !1;
        function Ha(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function Ba() {
          if (!Ua && null !== Ma) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ma;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ma = null), (Fa = !1);
            } catch (a) {
              throw (null !== Ma && (Ma = Ma.slice(e + 1)), Ke(Je, Ba), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var $a = [],
          Va = 0,
          Wa = null,
          Qa = 0,
          Ka = [],
          qa = 0,
          Xa = null,
          Ya = 1,
          Ga = "";
        function Za(e, t) {
          ($a[Va++] = Qa), ($a[Va++] = Wa), (Wa = e), (Qa = t);
        }
        function Ja(e, t, n) {
          (Ka[qa++] = Ya), (Ka[qa++] = Ga), (Ka[qa++] = Xa), (Xa = e);
          var r = Ya;
          e = Ga;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ya = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Ga = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Ga = e);
        }
        function eo(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function to(e) {
          for (; e === Wa; )
            (Wa = $a[--Va]), ($a[Va] = null), (Qa = $a[--Va]), ($a[Va] = null);
          for (; e === Xa; )
            (Xa = Ka[--qa]),
              (Ka[qa] = null),
              (Ga = Ka[--qa]),
              (Ka[qa] = null),
              (Ya = Ka[--qa]),
              (Ka[qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var n = Tc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xa ? { id: Ya, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Tc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!io(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = no;
                t && io(e, t)
                  ? lo(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function so(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return so(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = ca(t.nextSibling));
          }
          if ((so(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ca(e.nextSibling);
        }
        function mo() {
          (ro = no = null), (ao = !1);
        }
        function ho(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = w.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vo = xa(null),
          bo = null,
          wo = null,
          So = null;
        function ko() {
          So = wo = bo = null;
        }
        function Eo(e) {
          var t = vo.current;
          _a(vo), (e._currentValue = t);
        }
        function xo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function _o(e, t) {
          (bo = e),
            (So = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wi = !0), (e.firstContext = null));
        }
        function Co(e) {
          var t = e._currentValue;
          if (So !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var Po = null;
        function No(e) {
          null === Po ? (Po = [e]) : Po.push(e);
        }
        function jo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), No(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Oo(e, r)
          );
        }
        function Oo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var To = !1;
        function Ro(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Lo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function zo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ao(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Nu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Oo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), No(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Oo(e, n)
          );
        }
        function Do(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Io(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Mo(e, t, n, r) {
          var a = e.updateQueue;
          To = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              c = u.next;
            (u.next = null), null === l ? (o = c) : (l.next = c), (l = u);
            var s = e.alternate;
            null !== s &&
              (i = (s = s.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (s.firstBaseUpdate = c) : (i.next = c),
              (s.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (l = 0, s = c = u = null, i = o; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== s &&
                  (s = s.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = i;
                  switch (((d = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        f = m.call(p, f, d);
                        break e;
                      }
                      f = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (m = h.payload)
                              ? m.call(p, f, d)
                              : m) ||
                        void 0 === d
                      )
                        break e;
                      f = I({}, f, d);
                      break e;
                    case 2:
                      To = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === s ? ((c = s = p), (u = f)) : (s = s.next = p),
                  (l |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === s && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = s),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Du |= l), (e.lanes = l), (e.memoizedState = f);
          }
        }
        function Fo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Uo = new r.Component().refs;
        function Ho(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = zo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Ao(e, o, a)) && (nc(t, e, a, r), Do(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = zo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Ao(e, o, a)) && (nc(t, e, a, r), Do(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              a = zo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ao(e, a, r)) && (nc(t, e, r, n), Do(t, e, r));
          },
        };
        function $o(e, t, n, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function Vo(e, t, n) {
          var r = !1,
            a = Pa,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Co(o))
              : ((a = Ra(t) ? Oa : Na.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ta(e, a)
                  : Pa)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Wo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
        }
        function Qo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Uo), Ro(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Co(o))
            : ((o = Ra(t) ? Oa : Na.current), (a.context = Ta(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Ho(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Bo.enqueueReplaceState(a, a.state, null),
              Mo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ko(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Uo && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Xo(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lc(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ic(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === E
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === R &&
                    Xo(o) === t.type))
              ? (((r = a(t, n.props)).ref = Ko(e, t, n)), (r.return = e), r)
              : (((r = zc(n.type, n.key, n.props, null, e.mode, r)).ref = Ko(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Mc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Ac(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ic("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = zc(t.type, t.key, t.props, null, e.mode, n)).ref = Ko(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Mc(t, e.mode, n)).return = e), t;
                case R:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Ac(t, e.mode, n, null)).return = e), t;
              qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case k:
                  return n.key === a ? s(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== a ? null : f(e, t, n, r, null);
              qo(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return m(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || A(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              qo(t, r);
            }
            return null;
          }
          function h(a, o, i, u) {
            for (
              var c = null, s = null, f = o, h = (o = 0), g = null;
              null !== f && h < i.length;
              h++
            ) {
              f.index > h ? ((g = f), (f = null)) : (g = f.sibling);
              var y = p(a, f, i[h], u);
              if (null === y) {
                null === f && (f = g);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = l(y, o, h)),
                null === s ? (c = y) : (s.sibling = y),
                (s = y),
                (f = g);
            }
            if (h === i.length) return n(a, f), ao && Za(a, h), c;
            if (null === f) {
              for (; h < i.length; h++)
                null !== (f = d(a, i[h], u)) &&
                  ((o = l(f, o, h)),
                  null === s ? (c = f) : (s.sibling = f),
                  (s = f));
              return ao && Za(a, h), c;
            }
            for (f = r(a, f); h < i.length; h++)
              null !== (g = m(f, a, h, i[h], u)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? h : g.key),
                (o = l(g, o, h)),
                null === s ? (c = g) : (s.sibling = g),
                (s = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Za(a, h),
              c
            );
          }
          function g(a, i, u, c) {
            var s = A(u);
            if ("function" !== typeof s) throw Error(o(150));
            if (null == (u = s.call(u))) throw Error(o(151));
            for (
              var f = (s = null), h = i, g = (i = 0), y = null, v = u.next();
              null !== h && !v.done;
              g++, v = u.next()
            ) {
              h.index > g ? ((y = h), (h = null)) : (y = h.sibling);
              var b = p(a, h, v.value, c);
              if (null === b) {
                null === h && (h = y);
                break;
              }
              e && h && null === b.alternate && t(a, h),
                (i = l(b, i, g)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (h = y);
            }
            if (v.done) return n(a, h), ao && Za(a, g), s;
            if (null === h) {
              for (; !v.done; g++, v = u.next())
                null !== (v = d(a, v.value, c)) &&
                  ((i = l(v, i, g)),
                  null === f ? (s = v) : (f.sibling = v),
                  (f = v));
              return ao && Za(a, g), s;
            }
            for (h = r(a, h); !v.done; g++, v = u.next())
              null !== (v = m(h, a, g, v.value, c)) &&
                (e &&
                  null !== v.alternate &&
                  h.delete(null === v.key ? g : v.key),
                (i = l(v, i, g)),
                null === f ? (s = v) : (f.sibling = v),
                (f = v));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Za(a, g),
              s
            );
          }
          return function e(r, o, l, u) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === E &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case S:
                  e: {
                    for (var c = l.key, s = o; null !== s; ) {
                      if (s.key === c) {
                        if ((c = l.type) === E) {
                          if (7 === s.tag) {
                            n(r, s.sibling),
                              ((o = a(s, l.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          s.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === R &&
                            Xo(c) === s.type)
                        ) {
                          n(r, s.sibling),
                            ((o = a(s, l.props)).ref = Ko(r, s, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, s);
                        break;
                      }
                      t(r, s), (s = s.sibling);
                    }
                    l.type === E
                      ? (((o = Ac(l.props.children, r.mode, u, l.key)).return =
                          r),
                        (r = o))
                      : (((u = zc(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          u
                        )).ref = Ko(r, o, l)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case k:
                  e: {
                    for (s = l.key; null !== o; ) {
                      if (o.key === s) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Mc(l, r.mode, u)).return = r), (r = o);
                  }
                  return i(r);
                case R:
                  return e(r, o, (s = l._init)(l._payload), u);
              }
              if (te(l)) return h(r, o, l, u);
              if (A(l)) return g(r, o, l, u);
              qo(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Ic(l, r.mode, u)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var Go = Yo(!0),
          Zo = Yo(!1),
          Jo = {},
          el = xa(Jo),
          tl = xa(Jo),
          nl = xa(Jo);
        function rl(e) {
          if (e === Jo) throw Error(o(174));
          return e;
        }
        function al(e, t) {
          switch ((Ca(nl, t), Ca(tl, e), Ca(el, Jo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          _a(el), Ca(el, t);
        }
        function ol() {
          _a(el), _a(tl), _a(nl);
        }
        function ll(e) {
          rl(nl.current);
          var t = rl(el.current),
            n = ue(t, e.type);
          t !== n && (Ca(tl, e), Ca(el, n));
        }
        function il(e) {
          tl.current === e && (_a(el), _a(tl));
        }
        var ul = xa(0);
        function cl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var sl = [];
        function fl() {
          for (var e = 0; e < sl.length; e++)
            sl[e]._workInProgressVersionPrimary = null;
          sl.length = 0;
        }
        var dl = w.ReactCurrentDispatcher,
          pl = w.ReactCurrentBatchConfig,
          ml = 0,
          hl = null,
          gl = null,
          yl = null,
          vl = !1,
          bl = !1,
          wl = 0,
          Sl = 0;
        function kl() {
          throw Error(o(321));
        }
        function El(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function xl(e, t, n, r, a, l) {
          if (
            ((ml = l),
            (hl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (dl.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bl)
          ) {
            l = 0;
            do {
              if (((bl = !1), (wl = 0), 25 <= l)) throw Error(o(301));
              (l += 1),
                (yl = gl = null),
                (t.updateQueue = null),
                (dl.current = ci),
                (e = n(r, a));
            } while (bl);
          }
          if (
            ((dl.current = li),
            (t = null !== gl && null !== gl.next),
            (ml = 0),
            (yl = gl = hl = null),
            (vl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function _l() {
          var e = 0 !== wl;
          return (wl = 0), e;
        }
        function Cl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yl ? (hl.memoizedState = yl = e) : (yl = yl.next = e), yl
          );
        }
        function Pl() {
          if (null === gl) {
            var e = hl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = gl.next;
          var t = null === yl ? hl.memoizedState : yl.next;
          if (null !== t) (yl = t), (gl = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (gl = e).memoizedState,
              baseState: gl.baseState,
              baseQueue: gl.baseQueue,
              queue: gl.queue,
              next: null,
            }),
              null === yl ? (hl.memoizedState = yl = e) : (yl = yl.next = e);
          }
          return yl;
        }
        function Nl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function jl(e) {
          var t = Pl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = gl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var u = (i = null),
              c = null,
              s = l;
            do {
              var f = s.lane;
              if ((ml & f) === f)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action));
              else {
                var d = {
                  lane: f,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === c ? ((u = c = d), (i = r)) : (c = c.next = d),
                  (hl.lanes |= f),
                  (Du |= f);
              }
              s = s.next;
            } while (null !== s && s !== l);
            null === c ? (i = r) : (c.next = u),
              ir(r, t.memoizedState) || (wi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (hl.lanes |= l), (Du |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ol(e) {
          var t = Pl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (wi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Tl() {}
        function Rl(e, t) {
          var n = hl,
            r = Pl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (wi = !0)),
            (r = r.queue),
            Vl(Al.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== yl && 1 & yl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fl(9, zl.bind(null, n, r, a, t), void 0, null),
              null === ju)
            )
              throw Error(o(349));
            0 !== (30 & ml) || Ll(n, t, a);
          }
          return a;
        }
        function Ll(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function zl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Dl(t) && Il(e);
        }
        function Al(e, t, n) {
          return n(function () {
            Dl(t) && Il(e);
          });
        }
        function Dl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Il(e) {
          var t = Oo(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Ml(e) {
          var t = Cl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Nl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, hl, e)),
            [t.memoizedState, e]
          );
        }
        function Fl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ul() {
          return Pl().memoizedState;
        }
        function Hl(e, t, n, r) {
          var a = Cl();
          (hl.flags |= e),
            (a.memoizedState = Fl(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bl(e, t, n, r) {
          var a = Pl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== gl) {
            var l = gl.memoizedState;
            if (((o = l.destroy), null !== r && El(r, l.deps)))
              return void (a.memoizedState = Fl(t, n, o, r));
          }
          (hl.flags |= e), (a.memoizedState = Fl(1 | t, n, o, r));
        }
        function $l(e, t) {
          return Hl(8390656, 8, e, t);
        }
        function Vl(e, t) {
          return Bl(2048, 8, e, t);
        }
        function Wl(e, t) {
          return Bl(4, 2, e, t);
        }
        function Ql(e, t) {
          return Bl(4, 4, e, t);
        }
        function Kl(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function ql(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bl(4, 4, Kl.bind(null, t, e), n)
          );
        }
        function Xl() {}
        function Yl(e, t) {
          var n = Pl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && El(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Gl(e, t) {
          var n = Pl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && El(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zl(e, t, n) {
          return 0 === (21 & ml)
            ? (e.baseState && ((e.baseState = !1), (wi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = ht()), (hl.lanes |= n), (Du |= n), (e.baseState = !0)),
              t);
        }
        function Jl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pl.transition;
          pl.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pl.transition = r);
          }
        }
        function ei() {
          return Pl().memoizedState;
        }
        function ti(e, t, n) {
          var r = tc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n);
          else if (null !== (n = jo(e, t, n, r))) {
            nc(n, e, r, ec()), oi(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = tc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), No(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = jo(e, t, a, r)) &&
              (nc(n, e, r, (a = ec())), oi(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === hl || (null !== t && t === hl);
        }
        function ai(e, t) {
          bl = vl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function oi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var li = {
            readContext: Co,
            useCallback: kl,
            useContext: kl,
            useEffect: kl,
            useImperativeHandle: kl,
            useInsertionEffect: kl,
            useLayoutEffect: kl,
            useMemo: kl,
            useReducer: kl,
            useRef: kl,
            useState: kl,
            useDebugValue: kl,
            useDeferredValue: kl,
            useTransition: kl,
            useMutableSource: kl,
            useSyncExternalStore: kl,
            useId: kl,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Co,
            useCallback: function (e, t) {
              return (Cl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Co,
            useEffect: $l,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Hl(4194308, 4, Kl.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Hl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Hl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Cl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Cl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, hl, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Cl().memoizedState = e);
            },
            useState: Ml,
            useDebugValue: Xl,
            useDeferredValue: function (e) {
              return (Cl().memoizedState = e);
            },
            useTransition: function () {
              var e = Ml(!1),
                t = e[0];
              return (
                (e = Jl.bind(null, e[1])), (Cl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = hl,
                a = Cl();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === ju)) throw Error(o(349));
                0 !== (30 & ml) || Ll(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                $l(Al.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Fl(9, zl.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Cl(),
                t = ju.identifierPrefix;
              if (ao) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - lt(Ya) - 1))).toString(32) + n)),
                  0 < (n = wl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = Sl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Co,
            useCallback: Yl,
            useContext: Co,
            useEffect: Vl,
            useImperativeHandle: ql,
            useInsertionEffect: Wl,
            useLayoutEffect: Ql,
            useMemo: Gl,
            useReducer: jl,
            useRef: Ul,
            useState: function () {
              return jl(Nl);
            },
            useDebugValue: Xl,
            useDeferredValue: function (e) {
              return Zl(Pl(), gl.memoizedState, e);
            },
            useTransition: function () {
              return [jl(Nl)[0], Pl().memoizedState];
            },
            useMutableSource: Tl,
            useSyncExternalStore: Rl,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          ci = {
            readContext: Co,
            useCallback: Yl,
            useContext: Co,
            useEffect: Vl,
            useImperativeHandle: ql,
            useInsertionEffect: Wl,
            useLayoutEffect: Ql,
            useMemo: Gl,
            useReducer: Ol,
            useRef: Ul,
            useState: function () {
              return Ol(Nl);
            },
            useDebugValue: Xl,
            useDeferredValue: function (e) {
              var t = Pl();
              return null === gl
                ? (t.memoizedState = e)
                : Zl(t, gl.memoizedState, e);
            },
            useTransition: function () {
              return [Ol(Nl)[0], Pl().memoizedState];
            },
            useMutableSource: Tl,
            useSyncExternalStore: Rl,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function si(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fi(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function mi(e, t, n) {
          ((n = zo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vu || ((Vu = !0), (Wu = r)), di(0, t);
            }),
            n
          );
        }
        function hi(e, t, n) {
          (n = zo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof r &&
                    (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = _c.bind(null, e, t, n)), t.then(e, e));
        }
        function yi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = zo(-1, 1)).tag = 2), Ao(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = w.ReactCurrentOwner,
          wi = !1;
        function Si(e, t, n, r) {
          t.child = null === e ? Zo(t, null, n, r) : Go(t, e.child, n, r);
        }
        function ki(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            _o(t, a),
            (r = xl(e, t, n, r, o, a)),
            (n = _l()),
            null === e || wi
              ? (ao && n && eo(t), (t.flags |= 1), Si(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vi(e, t, a))
          );
        }
        function Ei(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Rc(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), xi(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(l, r) &&
              e.ref === t.ref
            )
              return Vi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Lc(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function xi(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Vi(e, t, a);
              0 !== (131072 & e.flags) && (wi = !0);
            }
          }
          return Pi(e, t, n, r, a);
        }
        function _i(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Lu, Ru),
                (Ru |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Lu, Ru),
                  (Ru |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ca(Lu, Ru),
                (Ru |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Lu, Ru),
              (Ru |= r);
          return Si(e, t, a, n), t.child;
        }
        function Ci(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pi(e, t, n, r, a) {
          var o = Ra(n) ? Oa : Na.current;
          return (
            (o = Ta(t, o)),
            _o(t, a),
            (n = xl(e, t, n, r, o, a)),
            (r = _l()),
            null === e || wi
              ? (ao && r && eo(t), (t.flags |= 1), Si(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vi(e, t, a))
          );
        }
        function Ni(e, t, n, r, a) {
          if (Ra(n)) {
            var o = !0;
            Da(t);
          } else o = !1;
          if ((_o(t, a), null === t.stateNode))
            $i(e, t), Vo(t, n, r), Qo(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Co(c))
              : (c = Ta(t, (c = Ra(n) ? Oa : Na.current)));
            var s = n.getDerivedStateFromProps,
              f =
                "function" === typeof s ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== c) && Wo(t, l, r, c)),
              (To = !1);
            var d = t.memoizedState;
            (l.state = d),
              Mo(t, r, l, a),
              (u = t.memoizedState),
              i !== r || d !== u || ja.current || To
                ? ("function" === typeof s &&
                    (Ho(t, n, s, r), (u = t.memoizedState)),
                  (i = To || $o(t, n, i, r, d, u, c))
                    ? (f ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = c),
                  (r = i))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              Lo(e, t),
              (i = t.memoizedProps),
              (c = t.type === t.elementType ? i : yo(t.type, i)),
              (l.props = c),
              (f = t.pendingProps),
              (d = l.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Co(u))
                : (u = Ta(t, (u = Ra(n) ? Oa : Na.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== f || d !== u) && Wo(t, l, r, u)),
              (To = !1),
              (d = t.memoizedState),
              (l.state = d),
              Mo(t, r, l, a);
            var m = t.memoizedState;
            i !== f || d !== m || ja.current || To
              ? ("function" === typeof p &&
                  (Ho(t, n, p, r), (m = t.memoizedState)),
                (c = To || $o(t, n, c, r, d, m, u) || !1)
                  ? (s ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, m, u),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, m, u)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (l.props = r),
                (l.state = m),
                (l.context = u),
                (r = c))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return ji(e, t, n, r, o, a);
        }
        function ji(e, t, n, r, a, o) {
          Ci(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Ia(t, n, !1), Vi(e, t, o);
          (r = t.stateNode), (bi.current = t);
          var i =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Go(t, e.child, null, o)),
                (t.child = Go(t, null, i, o)))
              : Si(e, t, i, o),
            (t.memoizedState = r.state),
            a && Ia(t, n, !0),
            t.child
          );
        }
        function Oi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? za(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && za(0, t.context, !1),
            al(e, t.containerInfo);
        }
        function Ti(e, t, n, r, a) {
          return mo(), ho(a), (t.flags |= 256), Si(e, t, n, r), t.child;
        }
        var Ri,
          Li,
          zi,
          Ai = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Di(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ii(e, t, n) {
          var r,
            a = t.pendingProps,
            l = ul.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Ca(ul, 1 & l),
            null === e)
          )
            return (
              co(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Dc(u, a, 0, null)),
                      (e = Ac(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Di(n)),
                      (t.memoizedState = Ai),
                      e)
                    : Mi(t, u))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fi(e, t, i, (r = fi(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = Dc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((l = Ac(l, a, i, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && Go(t, e.child, null, i),
                    (t.child.memoizedState = Di(i)),
                    (t.memoizedState = Ai),
                    l);
              if (0 === (1 & t.mode)) return Fi(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Fi(e, t, i, (r = fi((l = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), wi || u)) {
                if (null !== (r = ju)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Oo(e, a), nc(r, e, a, -1));
                }
                return hc(), Fi(e, t, i, (r = fi(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = ca(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Ka[qa++] = Ya),
                    (Ka[qa++] = Ga),
                    (Ka[qa++] = Xa),
                    (Ya = e.id),
                    (Ga = e.overflow),
                    (Xa = t)),
                  ((t = Mi(t, r.children)).flags |= 4096),
                  t);
            })(e, t, u, a, r, l, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (l = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Lc(l, c)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = Lc(r, i))
                : ((i = Ac(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Di(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ai),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Lc(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Mi(e, t) {
          return (
            ((t = Dc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fi(e, t, n, r) {
          return (
            null !== r && ho(r),
            Go(t, e.child, null, n),
            ((e = Mi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ui(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), xo(e.return, t, n);
        }
        function Hi(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Bi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((Si(e, t, r.children, n), 0 !== (2 & (r = ul.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ui(e, n, t);
                else if (19 === e.tag) Ui(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(ul, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === cl(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Hi(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === cl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Hi(t, !0, n, null, o);
                break;
              case "together":
                Hi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $i(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Du |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Lc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wi(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ki(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
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
              return Qi(t), null;
            case 1:
            case 17:
              return Ra(t.type) && La(), Qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ol(),
                _a(ja),
                _a(Na),
                fl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (lc(oo), (oo = null)))),
                Qi(t),
                null
              );
            case 5:
              il(t);
              var a = rl(nl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Li(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Qi(t), null;
                }
                if (((e = rl(el.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ar.length; a++) Fr(Ar[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      Y(r, l), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Fr("invalid", r);
                  }
                  for (var u in (ve(n, l), (a = null), l))
                    if (l.hasOwnProperty(u)) {
                      var c = l[u];
                      "children" === u
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Zr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Zr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : i.hasOwnProperty(u) &&
                          null != c &&
                          "onScroll" === u &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), J(r, l, !0);
                      break;
                    case "textarea":
                      Q(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Ri(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ar.length; a++) Fr(Ar[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = X(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = I({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (l in (ve(n, a), (c = a)))
                      if (c.hasOwnProperty(l)) {
                        var s = c[l];
                        "style" === l
                          ? ge(e, s)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (s = s ? s.__html : void 0) && fe(e, s)
                          : "children" === l
                          ? "string" === typeof s
                            ? ("textarea" !== n || "" !== s) && de(e, s)
                            : "number" === typeof s && de(e, "" + s)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != s && "onScroll" === l && Fr("scroll", e)
                              : null != s && b(e, l, s, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qi(t), null;
            case 6:
              if (e && null != t.stateNode) zi(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = rl(nl.current)), rl(el.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Qi(t), null;
            case 13:
              if (
                (_a(ul),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), mo(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[da] = t;
                  } else
                    mo(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qi(t), (l = !1);
                } else null !== oo && (lc(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ul.current)
                        ? 0 === zu && (zu = 3)
                        : hc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qi(t),
                  null);
            case 4:
              return (
                ol(), null === e && Br(t.stateNode.containerInfo), Qi(t), null
              );
            case 10:
              return Eo(t.type._context), Qi(t), null;
            case 19:
              if ((_a(ul), null === (l = t.memoizedState))) return Qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = l.rendering)))
                if (r) Wi(l, !1);
                else {
                  if (0 !== zu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = cl(e))) {
                        for (
                          t.flags |= 128,
                            Wi(l, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(ul, (1 & ul.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Ge() > Bu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wi(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = cl(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wi(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return Qi(t), null;
                  } else
                    2 * Ge() - l.renderingStartTime > Bu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wi(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = l.last) ? (n.sibling = u) : (t.child = u),
                    (l.last = u));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = ul.current),
                  Ca(ul, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qi(t), null);
            case 22:
            case 23:
              return (
                fc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ru) &&
                    (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function qi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ol(),
                _a(ja),
                _a(Na),
                fl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return il(t), null;
            case 13:
              if (
                (_a(ul),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                mo();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return _a(ul), null;
            case 4:
              return ol(), null;
            case 10:
              return Eo(t.type._context), null;
            case 22:
            case 23:
              return fc(), null;
            default:
              return null;
          }
        }
        (Ri = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Li = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), rl(el.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = X(e, a)), (r = X(e, r)), (l = []);
                  break;
                case "select":
                  (a = I({}, a, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (s in (ve(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                  if ("style" === s) {
                    var u = a[s];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (i.hasOwnProperty(s)
                        ? l || (l = [])
                        : (l = l || []).push(s, null));
              for (s in r) {
                var c = r[s];
                if (
                  ((u = null != a ? a[s] : void 0),
                  r.hasOwnProperty(s) && c !== u && (null != c || null != u))
                )
                  if ("style" === s)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          u[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (l || (l = []), l.push(s, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (l = l || []).push(s, c))
                      : "children" === s
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(s, "" + c)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (i.hasOwnProperty(s)
                          ? (null != c && "onScroll" === s && Fr("scroll", e),
                            l || u === c || (l = []))
                          : (l = l || []).push(s, c));
              }
              n && (l = l || []).push("style", n);
              var s = l;
              (t.updateQueue = s) && (t.flags |= 4);
            }
          }),
          (zi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xi = !1,
          Yi = !1,
          Gi = "function" === typeof WeakSet ? WeakSet : Set,
          Zi = null;
        function Ji(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                xc(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            xc(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && eu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ou(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ou(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ha],
              delete t[ga],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function iu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var su = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Yi || Ji(n, t);
            case 6:
              var r = su,
                a = fu;
              (su = null),
                du(e, t, n),
                (fu = a),
                null !== (su = r) &&
                  (fu
                    ? ((e = su),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : su.removeChild(n.stateNode));
              break;
            case 18:
              null !== su &&
                (fu
                  ? ((e = su),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Bt(e))
                  : ua(su, n.stateNode));
              break;
            case 4:
              (r = su),
                (a = fu),
                (su = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (su = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      eu(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !Yi &&
                (Ji(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  xc(n, t, i);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yi = (r = Yi) || null !== n.memoizedState),
                  du(e, t, n),
                  (Yi = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function mu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gi()),
              t.forEach(function (t) {
                var r = Nc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function hu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (su = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (su = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === su) throw Error(o(160));
                pu(l, i, a), (su = null), (fu = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (s) {
                xc(a, t, s);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gu(t, e), (t = t.sibling);
        }
        function gu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hu(t, e), yu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (g) {
                  xc(e, e.return, g);
                }
                try {
                  nu(5, e, e.return);
                } catch (g) {
                  xc(e, e.return, g);
                }
              }
              break;
            case 1:
              hu(t, e), yu(e), 512 & r && null !== n && Ji(n, n.return);
              break;
            case 5:
              if (
                (hu(t, e),
                yu(e),
                512 & r && null !== n && Ji(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (g) {
                  xc(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === u &&
                      "radio" === l.type &&
                      null != l.name &&
                      G(a, l),
                      be(u, i);
                    var s = be(u, l);
                    for (i = 0; i < c.length; i += 2) {
                      var f = c[i],
                        d = c[i + 1];
                      "style" === f
                        ? ge(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, s);
                    }
                    switch (u) {
                      case "input":
                        Z(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var m = l.value;
                        null != m
                          ? ne(a, !!l.multiple, m, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (g) {
                    xc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((hu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (g) {
                  xc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (hu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (g) {
                  xc(e, e.return, g);
                }
              break;
            case 4:
            default:
              hu(t, e), yu(e);
              break;
            case 13:
              hu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hu = Ge())),
                4 & r && mu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yi = (s = Yi) || f), hu(t, e), (Yi = s))
                  : hu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((s = null !== e.memoizedState),
                  (e.stateNode.isHidden = s) && !f && 0 !== (1 & e.mode))
                )
                  for (Zi = e, f = e.child; null !== f; ) {
                    for (d = Zi = f; null !== Zi; ) {
                      switch (((m = (p = Zi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Ji(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (g) {
                              xc(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Ji(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Su(d);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Zi = m)) : Su(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          s
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (c = d.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (u.style.display = he("display", i)));
                      } catch (g) {
                        xc(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = s ? "" : d.memoizedProps;
                      } catch (g) {
                        xc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              hu(t, e), yu(e), 4 & r && mu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cu(e, iu(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  uu(e, iu(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              xc(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vu(e, t, n) {
          (Zi = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zi; ) {
            var a = Zi,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Xi;
              if (!l) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Yi;
                i = Xi;
                var c = Yi;
                if (((Xi = l), (Yi = u) && !c))
                  for (Zi = a; null !== Zi; )
                    (u = (l = Zi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? ku(a)
                        : null !== u
                        ? ((u.return = l), (Zi = u))
                        : ku(a);
                for (; null !== o; ) (Zi = o), bu(o, t, n), (o = o.sibling);
                (Zi = a), (Xi = i), (Yi = c);
              }
              wu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zi = o))
                : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yi || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Fo(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fo(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var s = t.alternate;
                        if (null !== s) {
                          var f = s.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Yi || (512 & t.flags && au(t));
              } catch (p) {
                xc(t, t.return, p);
              }
            }
            if (t === e) {
              Zi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function Su(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (t === e) {
              Zi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function ku(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    xc(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      xc(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    xc(t, o, u);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    xc(t, l, u);
                  }
              }
            } catch (u) {
              xc(t, t.return, u);
            }
            if (t === e) {
              Zi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Zi = i);
              break;
            }
            Zi = t.return;
          }
        }
        var Eu,
          xu = Math.ceil,
          _u = w.ReactCurrentDispatcher,
          Cu = w.ReactCurrentOwner,
          Pu = w.ReactCurrentBatchConfig,
          Nu = 0,
          ju = null,
          Ou = null,
          Tu = 0,
          Ru = 0,
          Lu = xa(0),
          zu = 0,
          Au = null,
          Du = 0,
          Iu = 0,
          Mu = 0,
          Fu = null,
          Uu = null,
          Hu = 0,
          Bu = 1 / 0,
          $u = null,
          Vu = !1,
          Wu = null,
          Qu = null,
          Ku = !1,
          qu = null,
          Xu = 0,
          Yu = 0,
          Gu = null,
          Zu = -1,
          Ju = 0;
        function ec() {
          return 0 !== (6 & Nu) ? Ge() : -1 !== Zu ? Zu : (Zu = Ge());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Nu) && 0 !== Tu
            ? Tu & -Tu
            : null !== go.transition
            ? (0 === Ju && (Ju = ht()), Ju)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Yu) throw ((Yu = 0), (Gu = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Nu) && e === ju) ||
              (e === ju && (0 === (2 & Nu) && (Iu |= n), 4 === zu && ic(e, Tu)),
              rc(e, r),
              1 === n &&
                0 === Nu &&
                0 === (1 & t.mode) &&
                ((Bu = Ge() + 500), Fa && Ba()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                u = a[l];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = dt(e, e === ju ? Tu : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ha(e);
                  })(uc.bind(null, e))
                : Ha(uc.bind(null, e)),
                la(function () {
                  0 === (6 & Nu) && Ba();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = jc(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Zu = -1), (Ju = 0), 0 !== (6 & Nu))) throw Error(o(327));
          var n = e.callbackNode;
          if (kc() && e.callbackNode !== n) return null;
          var r = dt(e, e === ju ? Tu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
          else {
            t = r;
            var a = Nu;
            Nu |= 2;
            var l = mc();
            for (
              (ju === e && Tu === t) ||
              (($u = null), (Bu = Ge() + 500), dc(e, t));
              ;

            )
              try {
                vc();
                break;
              } catch (u) {
                pc(e, u);
              }
            ko(),
              (_u.current = l),
              (Nu = a),
              null !== Ou ? (t = 0) : ((ju = null), (Tu = 0), (t = zu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = oc(e, a))),
              1 === t)
            )
              throw ((n = Au), dc(e, 0), ic(e, r), rc(e, Ge()), n);
            if (6 === t) ic(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gc(e, r)) &&
                    0 !== (l = mt(e)) &&
                    ((r = l), (t = oc(e, l))),
                  1 === t))
              )
                throw ((n = Au), dc(e, 0), ic(e, r), rc(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  Sc(e, Uu, $u);
                  break;
                case 3:
                  if (
                    (ic(e, r),
                    (130023424 & r) === r && 10 < (t = Hu + 500 - Ge()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(Sc.bind(null, e, Uu, $u), t);
                    break;
                  }
                  Sc(e, Uu, $u);
                  break;
                case 4:
                  if ((ic(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * xu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Sc.bind(null, e, Uu, $u), r);
                    break;
                  }
                  Sc(e, Uu, $u);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return rc(e, Ge()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function oc(e, t) {
          var n = Fu;
          return (
            e.current.memoizedState.isDehydrated && (dc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = Uu), (Uu = n), null !== t && lc(t)),
            e
          );
        }
        function lc(e) {
          null === Uu ? (Uu = e) : Uu.push.apply(Uu, e);
        }
        function ic(e, t) {
          for (
            t &= ~Mu,
              t &= ~Iu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uc(e) {
          if (0 !== (6 & Nu)) throw Error(o(327));
          kc();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rc(e, Ge()), null;
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = oc(e, r)));
          }
          if (1 === n) throw ((n = Au), dc(e, 0), ic(e, t), rc(e, Ge()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Sc(e, Uu, $u),
            rc(e, Ge()),
            null
          );
        }
        function cc(e, t) {
          var n = Nu;
          Nu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nu = n) && ((Bu = Ge() + 500), Fa && Ba());
          }
        }
        function sc(e) {
          null !== qu && 0 === qu.tag && 0 === (6 & Nu) && kc();
          var t = Nu;
          Nu |= 1;
          var n = Pu.transition,
            r = bt;
          try {
            if (((Pu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Pu.transition = n), 0 === (6 & (Nu = t)) && Ba();
          }
        }
        function fc() {
          (Ru = Lu.current), _a(Lu);
        }
        function dc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ou))
            for (n = Ou.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  ol(), _a(ja), _a(Na), fl();
                  break;
                case 5:
                  il(r);
                  break;
                case 4:
                  ol();
                  break;
                case 13:
                case 19:
                  _a(ul);
                  break;
                case 10:
                  Eo(r.type._context);
                  break;
                case 22:
                case 23:
                  fc();
              }
              n = n.return;
            }
          if (
            ((ju = e),
            (Ou = e = Lc(e.current, null)),
            (Tu = Ru = t),
            (zu = 0),
            (Au = null),
            (Mu = Iu = Du = 0),
            (Uu = Fu = null),
            null !== Po)
          ) {
            for (t = 0; t < Po.length; t++)
              if (null !== (r = (n = Po[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            Po = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Ou;
            try {
              if ((ko(), (dl.current = li), vl)) {
                for (var r = hl.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vl = !1;
              }
              if (
                ((ml = 0),
                (yl = gl = hl = null),
                (bl = !1),
                (wl = 0),
                (Cu.current = null),
                null === n || null === n.return)
              ) {
                (zu = 1), (Au = t), (Ou = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  u = n,
                  c = t;
                if (
                  ((t = Tu),
                  (u.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var s = c,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var m = yi(i);
                  if (null !== m) {
                    (m.flags &= -257),
                      vi(m, i, u, 0, t),
                      1 & m.mode && gi(l, s, t),
                      (c = s);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gi(l, s, t), hc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var y = yi(i);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      vi(y, i, u, 0, t),
                      ho(si(c, u));
                    break e;
                  }
                }
                (l = c = si(c, u)),
                  4 !== zu && (zu = 2),
                  null === Fu ? (Fu = [l]) : Fu.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Io(l, mi(0, c, t));
                      break e;
                    case 1:
                      u = c;
                      var v = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qu || !Qu.has(b))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Io(l, hi(l, u, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              wc(n);
            } catch (w) {
              (t = w), Ou === n && null !== n && (Ou = n = n.return);
              continue;
            }
            break;
          }
        }
        function mc() {
          var e = _u.current;
          return (_u.current = li), null === e ? li : e;
        }
        function hc() {
          (0 !== zu && 3 !== zu && 2 !== zu) || (zu = 4),
            null === ju ||
              (0 === (268435455 & Du) && 0 === (268435455 & Iu)) ||
              ic(ju, Tu);
        }
        function gc(e, t) {
          var n = Nu;
          Nu |= 2;
          var r = mc();
          for ((ju === e && Tu === t) || (($u = null), dc(e, t)); ; )
            try {
              yc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((ko(), (Nu = n), (_u.current = r), null !== Ou))
            throw Error(o(261));
          return (ju = null), (Tu = 0), zu;
        }
        function yc() {
          for (; null !== Ou; ) bc(Ou);
        }
        function vc() {
          for (; null !== Ou && !Xe(); ) bc(Ou);
        }
        function bc(e) {
          var t = Eu(e.alternate, e, Ru);
          (e.memoizedProps = e.pendingProps),
            null === t ? wc(e) : (Ou = t),
            (Cu.current = null);
        }
        function wc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ki(n, t, Ru))) return void (Ou = n);
            } else {
              if (null !== (n = qi(n, t)))
                return (n.flags &= 32767), void (Ou = n);
              if (null === e) return (zu = 6), void (Ou = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ou = t);
            Ou = t = e;
          } while (null !== t);
          0 === zu && (zu = 5);
        }
        function Sc(e, t, n) {
          var r = bt,
            a = Pu.transition;
          try {
            (Pu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  kc();
                } while (null !== qu);
                if (0 !== (6 & Nu)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === ju && ((Ou = ju = null), (Tu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ku ||
                    ((Ku = !0),
                    jc(tt, function () {
                      return kc(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Pu.transition), (Pu.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = Nu;
                  (Nu |= 4),
                    (Cu.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                c = -1,
                                s = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== l ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (c = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (m = d.firstChild);

                                )
                                  (p = d), (d = m);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++s === a && (u = i),
                                    p === l && ++f === r && (c = i),
                                    null !== (m = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = m;
                              }
                              n =
                                -1 === u || -1 === c
                                  ? null
                                  : { start: u, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Zi = t;
                        null !== Zi;

                      )
                        if (
                          ((e = (t = Zi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zi = e);
                        else
                          for (; null !== Zi; ) {
                            t = Zi;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        y = h.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : yo(t.type, g),
                                          y
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (S) {
                              xc(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zi = e);
                              break;
                            }
                            Zi = t.return;
                          }
                      (h = tu), (tu = !1);
                    })(e, n),
                    gu(n, e),
                    mr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    vu(n, e, a),
                    Ye(),
                    (Nu = u),
                    (bt = i),
                    (Pu.transition = l);
                } else e.current = n;
                if (
                  (Ku && ((Ku = !1), (qu = e), (Xu = a)),
                  0 === (l = e.pendingLanes) && (Qu = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Vu) throw ((Vu = !1), (e = Wu), (Wu = null), e);
                0 !== (1 & Xu) && 0 !== e.tag && kc(),
                  0 !== (1 & (l = e.pendingLanes))
                    ? e === Gu
                      ? Yu++
                      : ((Yu = 0), (Gu = e))
                    : (Yu = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Pu.transition = a), (bt = r);
          }
          return null;
        }
        function kc() {
          if (null !== qu) {
            var e = wt(Xu),
              t = Pu.transition,
              n = bt;
            try {
              if (((Pu.transition = null), (bt = 16 > e ? 16 : e), null === qu))
                var r = !1;
              else {
                if (((e = qu), (qu = null), (Xu = 0), 0 !== (6 & Nu)))
                  throw Error(o(331));
                var a = Nu;
                for (Nu |= 4, Zi = e.current; null !== Zi; ) {
                  var l = Zi,
                    i = l.child;
                  if (0 !== (16 & Zi.flags)) {
                    var u = l.deletions;
                    if (null !== u) {
                      for (var c = 0; c < u.length; c++) {
                        var s = u[c];
                        for (Zi = s; null !== Zi; ) {
                          var f = Zi;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, l);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zi = d);
                          else
                            for (; null !== Zi; ) {
                              var p = (f = Zi).sibling,
                                m = f.return;
                              if ((ou(f), f === s)) {
                                Zi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Zi = p);
                                break;
                              }
                              Zi = m;
                            }
                        }
                      }
                      var h = l.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Zi = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Zi = i);
                  else
                    e: for (; null !== Zi; ) {
                      if (0 !== (2048 & (l = Zi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, l, l.return);
                        }
                      var v = l.sibling;
                      if (null !== v) {
                        (v.return = l.return), (Zi = v);
                        break e;
                      }
                      Zi = l.return;
                    }
                }
                var b = e.current;
                for (Zi = b; null !== Zi; ) {
                  var w = (i = Zi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (Zi = w);
                  else
                    e: for (i = b; null !== Zi; ) {
                      if (0 !== (2048 & (u = Zi).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (k) {
                          xc(u, u.return, k);
                        }
                      if (u === i) {
                        Zi = null;
                        break e;
                      }
                      var S = u.sibling;
                      if (null !== S) {
                        (S.return = u.return), (Zi = S);
                        break e;
                      }
                      Zi = u.return;
                    }
                }
                if (
                  ((Nu = a),
                  Ba(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Pu.transition = t);
            }
          }
          return !1;
        }
        function Ec(e, t, n) {
          (e = Ao(e, (t = mi(0, (t = si(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (yt(e, 1, t), rc(e, t));
        }
        function xc(e, t, n) {
          if (3 === e.tag) Ec(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ec(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qu || !Qu.has(r)))
                ) {
                  (t = Ao(t, (e = hi(t, (e = si(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (yt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function _c(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            ju === e &&
              (Tu & n) === n &&
              (4 === zu ||
              (3 === zu && (130023424 & Tu) === Tu && 500 > Ge() - Hu)
                ? dc(e, 0)
                : (Mu |= n)),
            rc(e, t);
        }
        function Cc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = st), 0 === (130023424 & (st <<= 1)) && (st = 4194304)));
          var n = ec();
          null !== (e = Oo(e, t)) && (yt(e, t, n), rc(e, n));
        }
        function Pc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cc(e, n);
        }
        function Nc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Cc(e, n);
        }
        function jc(e, t) {
          return Ke(e, t);
        }
        function Oc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Tc(e, t, n, r) {
          return new Oc(e, t, n, r);
        }
        function Rc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Tc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zc(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Rc(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case E:
                return Ac(n.children, a, l, t);
              case x:
                (i = 8), (a |= 8);
                break;
              case _:
                return (
                  ((e = Tc(12, n, t, 2 | a)).elementType = _), (e.lanes = l), e
                );
              case j:
                return (
                  ((e = Tc(13, n, t, a)).elementType = j), (e.lanes = l), e
                );
              case O:
                return (
                  ((e = Tc(19, n, t, a)).elementType = O), (e.lanes = l), e
                );
              case L:
                return Dc(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case P:
                      i = 9;
                      break e;
                    case N:
                      i = 11;
                      break e;
                    case T:
                      i = 14;
                      break e;
                    case R:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Tc(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Ac(e, t, n, r) {
          return ((e = Tc(7, e, r, t)).lanes = n), e;
        }
        function Dc(e, t, n, r) {
          return (
            ((e = Tc(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ic(e, t, n) {
          return ((e = Tc(6, e, null, t)).lanes = n), e;
        }
        function Mc(e, t, n) {
          return (
            ((t = Tc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uc(e, t, n, r, a, o, l, i, u) {
          return (
            (e = new Fc(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Tc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ro(o),
            e
          );
        }
        function Hc(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Bc(e) {
          if (!e) return Pa;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return Aa(e, n, t);
          }
          return t;
        }
        function $c(e, t, n, r, a, o, l, i, u) {
          return (
            ((e = Uc(n, r, !0, e, 0, o, 0, i, u)).context = Bc(null)),
            (n = e.current),
            ((o = zo((r = ec()), (a = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ao(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            rc(e, r),
            e
          );
        }
        function Vc(e, t, n, r) {
          var a = t.current,
            o = ec(),
            l = tc(a);
          return (
            (n = Bc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = zo(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ao(a, t, l)) && (nc(e, a, l, o), Do(e, a, l)),
            l
          );
        }
        function Wc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Kc(e, t) {
          Qc(e, t), (e = e.alternate) && Qc(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ja.current) wi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Oi(t), mo();
                        break;
                      case 5:
                        ll(t);
                        break;
                      case 1:
                        Ra(t.type) && Da(t);
                        break;
                      case 4:
                        al(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(vo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(ul, 1 & ul.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ii(e, t, n)
                            : (Ca(ul, 1 & ul.current),
                              null !== (e = Vi(e, t, n)) ? e.sibling : null);
                        Ca(ul, 1 & ul.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(ul, ul.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), _i(e, t, n);
                    }
                    return Vi(e, t, n);
                  })(e, t, n)
                );
              wi = 0 !== (131072 & e.flags);
            }
          else (wi = !1), ao && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $i(e, t), (e = t.pendingProps);
              var a = Ta(t, Na.current);
              _o(t, n), (a = xl(null, t, r, e, a, n));
              var l = _l();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((l = !0), Da(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ro(t),
                    (a.updater = Bo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Qo(t, r, e, n),
                    (t = ji(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ao && l && eo(t),
                    Si(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($i(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Rc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Pi(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ni(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ki(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ei(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ni(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Oi(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Lo(e, t),
                  Mo(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Ti(e, t, r, n, (a = si(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ti(e, t, r, n, (a = si(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ca(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Zo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((mo(), r === a)) {
                    t = Vi(e, t, n);
                    break e;
                  }
                  Si(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ll(t),
                null === e && co(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                Ci(e, t),
                Si(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return Ii(e, t, n);
            case 4:
              return (
                al(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Go(t, null, r, n)) : Si(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ki(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return Si(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Si(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  Ca(vo, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !ja.current) {
                      t = Vi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var u = l.dependencies;
                      if (null !== u) {
                        i = l.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === l.tag) {
                              (c = zo(-1, n & -n)).tag = 2;
                              var s = l.updateQueue;
                              if (null !== s) {
                                var f = (s = s.shared).pending;
                                null === f
                                  ? (c.next = c)
                                  : ((c.next = f.next), (f.next = c)),
                                  (s.pending = c);
                              }
                            }
                            (l.lanes |= n),
                              null !== (c = l.alternate) && (c.lanes |= n),
                              xo(l.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          xo(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                Si(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                _o(t, n),
                (r = r((a = Co(a)))),
                (t.flags |= 1),
                Si(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                Ei(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return xi(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                $i(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Da(t)) : (e = !1),
                _o(t, n),
                Vo(t, r, a),
                Qo(t, r, a, n),
                ji(null, t, r, !0, e, n)
              );
            case 19:
              return Bi(e, t, n);
            case 22:
              return _i(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var qc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xc(e) {
          this._internalRoot = e;
        }
        function Yc(e) {
          this._internalRoot = e;
        }
        function Gc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jc() {}
        function es(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Wc(l);
                i.call(e);
              };
            }
            Vc(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Wc(l);
                    o.call(e);
                  };
                }
                var l = $c(t, r, e, 0, null, !1, 0, "", Jc);
                return (
                  (e._reactRootContainer = l),
                  (e[ma] = l.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  sc(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Wc(u);
                  i.call(e);
                };
              }
              var u = Uc(e, 0, !1, null, 0, !1, 0, "", Jc);
              return (
                (e._reactRootContainer = u),
                (e[ma] = u.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                sc(function () {
                  Vc(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Wc(l);
        }
        (Yc.prototype.render = Xc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Vc(e, t, null, null);
          }),
          (Yc.prototype.unmount = Xc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                sc(function () {
                  Vc(null, e, null, null);
                }),
                  (t[ma] = null);
              }
            }),
          (Yc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && It(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    rc(t, Ge()),
                    0 === (6 & Nu) && ((Bu = Ge() + 500), Ba()));
                }
                break;
              case 13:
                sc(function () {
                  var t = Oo(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  Kc(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Oo(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              Kc(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = Oo(e, t);
              if (null !== n) nc(n, e, t, ec());
              Kc(e, t);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (_t = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Sa(r);
                      if (!a) throw Error(o(90));
                      K(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = cc),
          (je = sc);
        var ts = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, Sa, Ce, Pe, cc],
          },
          ns = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rs = {
            bundleType: ns.bundleType,
            version: ns.version,
            rendererPackageName: ns.rendererPackageName,
            rendererConfig: ns.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ns.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!as.isDisabled && as.supportsFiber)
            try {
              (at = as.inject(rs)), (ot = as);
            } catch (se) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gc(t)) throw Error(o(200));
            return Hc(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = qc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Xc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return sc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zc(t)) throw Error(o(200));
            return es(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              i = qc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = $c(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ma] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zc(t)) throw Error(o(200));
            return es(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (sc(function () {
                es(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ma] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return es(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      459: function (e, t) {
        "use strict";
        var n,
          r = Symbol.for("react.element"),
          a = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          s = Symbol.for("react.server_context"),
          f = Symbol.for("react.forward_ref"),
          d = Symbol.for("react.suspense"),
          p = Symbol.for("react.suspense_list"),
          m = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          g = Symbol.for("react.offscreen");
        function y(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case o:
                  case i:
                  case l:
                  case d:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case c:
                      case f:
                      case h:
                      case m:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        n = Symbol.for("react.module.reference");
      },
      900: function (e, t, n) {
        "use strict";
        n(459);
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            s = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (s = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: s,
            props: o,
            _owner: i.current,
          };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), h(w, y.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          E = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              k.call(t, a) && !x.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: E.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = "" === o ? "." + N(u, 0) : o),
              S(l)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  j(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (C(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ""
                          : ("" + l.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), S(e)))
            for (var c = 0; c < e.length; c++) {
              var s = o + N((i = e[c]), c);
              u += j(i, t, a, s, l);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), c = 0; !(i = e.next()).done; )
              u += j((i = i.value), t, a, (s = o + N(i, c++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            j(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          L = { transition: null },
          z = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: E,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = E.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !x.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              u = Array(c);
              for (var s = 0; s < c; s++) u[s] = arguments[s + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                c = i + 1,
                s = e[c];
              if (0 > o(u, n))
                c < a && 0 > o(s, u)
                  ? ((e[r] = s), (e[c] = n), (r = c))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(c < a && 0 > o(s, n))) break e;
                (e[r] = s), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var c = [],
          s = [],
          f = 1,
          d = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(s); null !== t; ) {
            if (null === t.callback) a(s);
            else {
              if (!(t.startTime <= e)) break;
              a(s), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(s);
          }
        }
        function S(e) {
          if (((g = !1), w(e), !h))
            if (null !== r(c)) (h = !0), L(k);
            else {
              var t = r(s);
              null !== t && z(S, t.startTime - e);
            }
        }
        function k(e, n) {
          (h = !1), g && ((g = !1), v(C), (C = -1)), (m = !0);
          var o = p;
          try {
            for (
              w(n), d = r(c);
              null !== d && (!(d.expirationTime > n) || (e && !j()));

            ) {
              var l = d.callback;
              if ("function" === typeof l) {
                (d.callback = null), (p = d.priorityLevel);
                var i = l(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(c) && a(c),
                  w(n);
              } else a(c);
              d = r(c);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(s);
              null !== f && z(S, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          x = !1,
          _ = null,
          C = -1,
          P = 5,
          N = -1;
        function j() {
          return !(t.unstable_now() - N < P);
        }
        function O() {
          if (null !== _) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = _(!0, e);
            } finally {
              n ? E() : ((x = !1), (_ = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          E = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            R = T.port2;
          (T.port1.onmessage = O),
            (E = function () {
              R.postMessage(null);
            });
        } else
          E = function () {
            y(O, 0);
          };
        function L(e) {
          (_ = e), x || ((x = !0), E());
        }
        function z(e, n) {
          C = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
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
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
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
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(s, e),
                  null === r(c) &&
                    e === r(s) &&
                    (g ? (v(C), (C = -1)) : (g = !0), z(S, o - l)))
                : ((e.sortIndex = i), n(c, e), h || m || ((h = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      561: function (e, t, n) {
        "use strict";
        var r = n(791);
        var a =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          o = r.useState,
          l = r.useEffect,
          i = r.useLayoutEffect,
          u = r.useDebugValue;
        function c(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !a(e, n);
          } catch (r) {
            return !0;
          }
        }
        var s =
          "undefined" === typeof window ||
          "undefined" === typeof window.document ||
          "undefined" === typeof window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var n = t(),
                  r = o({ inst: { value: n, getSnapshot: t } }),
                  a = r[0].inst,
                  s = r[1];
                return (
                  i(
                    function () {
                      (a.value = n),
                        (a.getSnapshot = t),
                        c(a) && s({ inst: a });
                    },
                    [e, n, t]
                  ),
                  l(
                    function () {
                      return (
                        c(a) && s({ inst: a }),
                        e(function () {
                          c(a) && s({ inst: a });
                        })
                      );
                    },
                    [e]
                  ),
                  u(n),
                  n
                );
              };
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : s;
      },
      595: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(248);
        var o =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          l = a.useSyncExternalStore,
          i = r.useRef,
          u = r.useEffect,
          c = r.useMemo,
          s = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
          var f = i(null);
          if (null === f.current) {
            var d = { hasValue: !1, value: null };
            f.current = d;
          } else d = f.current;
          f = c(
            function () {
              function e(e) {
                if (!u) {
                  if (
                    ((u = !0), (l = e), (e = r(e)), void 0 !== a && d.hasValue)
                  ) {
                    var t = d.value;
                    if (a(t, e)) return (i = t);
                  }
                  return (i = e);
                }
                if (((t = i), o(l, e))) return t;
                var n = r(e);
                return void 0 !== a && a(t, n) ? t : ((l = e), (i = n));
              }
              var l,
                i,
                u = !1,
                c = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === c
                  ? void 0
                  : function () {
                      return e(c());
                    },
              ];
            },
            [t, n, r, a]
          );
          var p = l(e, f[0], f[1]);
          return (
            u(
              function () {
                (d.hasValue = !0), (d.value = p);
              },
              [p]
            ),
            s(p),
            p
          );
        };
      },
      248: function (e, t, n) {
        "use strict";
        e.exports = n(561);
      },
      327: function (e, t, n) {
        "use strict";
        e.exports = n(595);
      },
      483: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), h(w, y.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          E = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              k.call(t, a) && !x.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: E.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = "" === o ? "." + N(u, 0) : o),
              S(l)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  j(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (C(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ""
                          : ("" + l.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), S(e)))
            for (var c = 0; c < e.length; c++) {
              var s = o + N((i = e[c]), c);
              u += j(i, t, a, s, l);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), c = 0; !(i = e.next()).done; )
              u += j((i = i.value), t, a, (s = o + N(i, c++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            j(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          L = { transition: null },
          z = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: E,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = E.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !x.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              u = Array(c);
              for (var s = 0; s < c; s++) u[s] = arguments[s + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      653: function (e, t, n) {
        "use strict";
        e.exports = n(483);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/adjarapeak/"),
    (function () {
      "use strict";
      function e(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function t(t, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(t) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o = [],
                l = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  l = !0
                );
              } catch (u) {
                (i = !0), (a = u);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (i) throw a;
                }
              }
              return o;
            }
          })(t, n) ||
          (function (t, n) {
            if (t) {
              if ("string" === typeof t) return e(t, n);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? e(t, n)
                  : void 0
              );
            }
          })(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          r.apply(this, arguments)
        );
      }
      var a;
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(a || (a = {}));
      var o = function (e) {
        return e;
      };
      var l = "beforeunload",
        i = "popstate";
      function u(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function c() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function s() {
        return Math.random().toString(36).substr(2, 8);
      }
      function f(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          l = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          l && "#" !== l && (n += "#" === l.charAt(0) ? l : "#" + l),
          n
        );
      }
      function d(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      var p = n(791),
        m = (0, p.createContext)(null);
      var h = (0, p.createContext)(null);
      var g = (0, p.createContext)({ outlet: null, matches: [] });
      function y(e, t) {
        if (!e) throw new Error(t);
      }
      function v(e, t, n) {
        void 0 === n && (n = "/");
        var r = C(("string" === typeof t ? d(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = b(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var o = null, l = 0; null == o && l < a.length; ++l)
          o = E(a[l], r);
        return o;
      }
      function b(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var o = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            o.relativePath.startsWith("/") &&
              (o.relativePath.startsWith(r) || y(!1),
              (o.relativePath = o.relativePath.slice(r.length)));
            var l = P([r, o.relativePath]),
              i = n.concat(o);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && y(!1), b(e.children, t, i, l)),
              (null != e.path || e.index) &&
                t.push({ path: l, score: k(l, e.index), routesMeta: i });
          }),
          t
        );
      }
      var w = /^:\w+$/,
        S = function (e) {
          return "*" === e;
        };
      function k(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(S) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !S(e);
            })
            .reduce(function (e, t) {
              return e + (w.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function E(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], l = 0;
          l < n.length;
          ++l
        ) {
          var i = n[l],
            u = l === n.length - 1,
            c = "/" === a ? t : t.slice(a.length) || "/",
            s = x(
              { path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
              c
            );
          if (!s) return null;
          Object.assign(r, s.params);
          var f = i.route;
          o.push({
            params: r,
            pathname: P([a, s.pathname]),
            pathnameBase: N(P([a, s.pathnameBase])),
            route: f,
          }),
            "/" !== s.pathnameBase && (a = P([a, s.pathnameBase]));
        }
        return o;
      }
      function x(e, n) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var r = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : (a += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
            return [new RegExp(a, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          a = t(r, 2),
          o = a[0],
          l = a[1],
          i = n.match(o);
        if (!i) return null;
        var u = i[0],
          c = u.replace(/(.)\/+$/, "$1"),
          s = i.slice(1);
        return {
          params: l.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = s[n] || "";
              c = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return e;
                }
              })(s[n] || "")),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: c,
          pattern: e,
        };
      }
      function _(e, t, n) {
        var r,
          a = "string" === typeof e ? d(e) : e,
          o = "" === e || "" === a.pathname ? "/" : a.pathname;
        if (null == o) r = n;
        else {
          var l = t.length - 1;
          if (o.startsWith("..")) {
            for (var i = o.split("/"); ".." === i[0]; ) i.shift(), (l -= 1);
            a.pathname = i.join("/");
          }
          r = l >= 0 ? t[l] : "/";
        }
        var u = (function (e, t) {
          void 0 === t && (t = "/");
          var n = "string" === typeof e ? d(e) : e,
            r = n.pathname,
            a = n.search,
            o = void 0 === a ? "" : a,
            l = n.hash,
            i = void 0 === l ? "" : l,
            u = r
              ? r.startsWith("/")
                ? r
                : (function (e, t) {
                    var n = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach(function (e) {
                        ".." === e
                          ? n.length > 1 && n.pop()
                          : "." !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join("/") : "/"
                    );
                  })(r, t)
              : t;
          return { pathname: u, search: j(o), hash: O(i) };
        })(a, r);
        return (
          o &&
            "/" !== o &&
            o.endsWith("/") &&
            !u.pathname.endsWith("/") &&
            (u.pathname += "/"),
          u
        );
      }
      function C(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/";
      }
      var P = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        N = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        j = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        O = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        };
      function T(e) {
        R() || y(!1);
        var t = (0, p.useContext)(m),
          n = t.basename,
          r = t.navigator,
          a = A(e),
          o = a.hash,
          l = a.pathname,
          i = a.search,
          u = l;
        if ("/" !== n) {
          var c = (function (e) {
              return "" === e || "" === e.pathname
                ? "/"
                : "string" === typeof e
                ? d(e).pathname
                : e.pathname;
            })(e),
            s = null != c && c.endsWith("/");
          u = "/" === l ? n + (s ? "/" : "") : P([n, l]);
        }
        return r.createHref({ pathname: u, search: i, hash: o });
      }
      function R() {
        return null != (0, p.useContext)(h);
      }
      function L() {
        return R() || y(!1), (0, p.useContext)(h).location;
      }
      function z() {
        R() || y(!1);
        var e = (0, p.useContext)(m),
          t = e.basename,
          n = e.navigator,
          r = (0, p.useContext)(g).matches,
          a = L().pathname,
          o = JSON.stringify(
            r.map(function (e) {
              return e.pathnameBase;
            })
          ),
          l = (0, p.useRef)(!1);
        return (
          (0, p.useEffect)(function () {
            l.current = !0;
          }),
          (0, p.useCallback)(
            function (e, r) {
              if ((void 0 === r && (r = {}), l.current))
                if ("number" !== typeof e) {
                  var i = _(e, JSON.parse(o), a);
                  "/" !== t && (i.pathname = P([t, i.pathname])),
                    (r.replace ? n.replace : n.push)(i, r.state);
                } else n.go(e);
            },
            [t, n, o, a]
          )
        );
      }
      function A(e) {
        var t = (0, p.useContext)(g).matches,
          n = L().pathname,
          r = JSON.stringify(
            t.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, p.useMemo)(
          function () {
            return _(e, JSON.parse(r), n);
          },
          [e, r, n]
        );
      }
      function D(e, t) {
        return (
          void 0 === t && (t = []),
          null == e
            ? null
            : e.reduceRight(function (n, r, a) {
                return (0,
                p.createElement)(g.Provider, { children: void 0 !== r.route.element ? r.route.element : n, value: { outlet: n, matches: t.concat(e.slice(0, a + 1)) } });
              }, null)
        );
      }
      function I(e) {
        y(!1);
      }
      function M(e) {
        var t = e.basename,
          n = void 0 === t ? "/" : t,
          r = e.children,
          o = void 0 === r ? null : r,
          l = e.location,
          i = e.navigationType,
          u = void 0 === i ? a.Pop : i,
          c = e.navigator,
          s = e.static,
          f = void 0 !== s && s;
        R() && y(!1);
        var g = N(n),
          v = (0, p.useMemo)(
            function () {
              return { basename: g, navigator: c, static: f };
            },
            [g, c, f]
          );
        "string" === typeof l && (l = d(l));
        var b = l,
          w = b.pathname,
          S = void 0 === w ? "/" : w,
          k = b.search,
          E = void 0 === k ? "" : k,
          x = b.hash,
          _ = void 0 === x ? "" : x,
          P = b.state,
          j = void 0 === P ? null : P,
          O = b.key,
          T = void 0 === O ? "default" : O,
          L = (0, p.useMemo)(
            function () {
              var e = C(S, g);
              return null == e
                ? null
                : { pathname: e, search: E, hash: _, state: j, key: T };
            },
            [g, S, E, _, j, T]
          );
        return null == L
          ? null
          : (0, p.createElement)(
              m.Provider,
              { value: v },
              (0, p.createElement)(h.Provider, {
                children: o,
                value: { location: L, navigationType: u },
              })
            );
      }
      function F(e) {
        var t = e.children,
          n = e.location;
        return (function (e, t) {
          R() || y(!1);
          var n,
            r = (0, p.useContext)(g).matches,
            a = r[r.length - 1],
            o = a ? a.params : {},
            l = (a && a.pathname, a ? a.pathnameBase : "/"),
            i = (a && a.route, L());
          if (t) {
            var u,
              c = "string" === typeof t ? d(t) : t;
            "/" === l ||
              (null == (u = c.pathname) ? void 0 : u.startsWith(l)) ||
              y(!1),
              (n = c);
          } else n = i;
          var s = n.pathname || "/",
            f = v(e, { pathname: "/" === l ? s : s.slice(l.length) || "/" });
          return D(
            f &&
              f.map(function (e) {
                return Object.assign({}, e, {
                  params: Object.assign({}, o, e.params),
                  pathname: P([l, e.pathname]),
                  pathnameBase:
                    "/" === e.pathnameBase ? l : P([l, e.pathnameBase]),
                });
              }),
            r
          );
        })(U(t), n);
      }
      function U(e) {
        var t = [];
        return (
          p.Children.forEach(e, function (e) {
            if ((0, p.isValidElement)(e))
              if (e.type !== p.Fragment) {
                e.type !== I && y(!1);
                var n = {
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  index: e.props.index,
                  path: e.props.path,
                };
                e.props.children && (n.children = U(e.props.children)),
                  t.push(n);
              } else t.push.apply(t, U(e.props.children));
          }),
          t
        );
      }
      var H = n(248),
        B = n(327),
        $ = n(164);
      var V = function (e) {
          e();
        },
        W = function () {
          return V;
        },
        Q = p.createContext(null);
      function K() {
        return (0, p.useContext)(Q);
      }
      var q = function () {
          throw new Error("uSES not initialized!");
        },
        X = q,
        Y = function (e, t) {
          return e === t;
        };
      function G() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
          t =
            e === Q
              ? K
              : function () {
                  return (0, p.useContext)(e);
                };
        return function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y;
          var r = t(),
            a = r.store,
            o = r.subscription,
            l = r.getServerState,
            i = X(o.addNestedSub, a.getState, l || a.getState, e, n);
          return (0, p.useDebugValue)(i), i;
        };
      }
      var Z = G();
      n(110), n(900);
      var J = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function ee(e, t) {
        var n,
          r = J;
        function a() {
          l.onStateChange && l.onStateChange();
        }
        function o() {
          n ||
            ((n = t ? t.addNestedSub(a) : e.subscribe(a)),
            (r = (function () {
              var e = W(),
                t = null,
                n = null;
              return {
                clear: function () {
                  (t = null), (n = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe: function (e) {
                  var r = !0,
                    a = (n = { callback: e, next: null, prev: n });
                  return (
                    a.prev ? (a.prev.next = a) : (t = a),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        a.next ? (a.next.prev = a.prev) : (n = a.prev),
                        a.prev ? (a.prev.next = a.next) : (t = a.next));
                    }
                  );
                },
              };
            })()));
        }
        var l = {
          addNestedSub: function (e) {
            return o(), r.subscribe(e);
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: a,
          isSubscribed: function () {
            return Boolean(n);
          },
          trySubscribe: o,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), r.clear(), (r = J));
          },
          getListeners: function () {
            return r;
          },
        };
        return l;
      }
      var te = !(
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
      )
        ? p.useLayoutEffect
        : p.useEffect;
      var ne = function (e) {
        var t = e.store,
          n = e.context,
          r = e.children,
          a = e.serverState,
          o = (0, p.useMemo)(
            function () {
              var e = ee(t);
              return {
                store: t,
                subscription: e,
                getServerState: a
                  ? function () {
                      return a;
                    }
                  : void 0,
              };
            },
            [t, a]
          ),
          l = (0, p.useMemo)(
            function () {
              return t.getState();
            },
            [t]
          );
        te(
          function () {
            var e = o.subscription;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              l !== t.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = void 0);
              }
            );
          },
          [o, l]
        );
        var i = n || Q;
        return p.createElement(i.Provider, { value: o }, r);
      };
      function re() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
          t =
            e === Q
              ? K
              : function () {
                  return (0, p.useContext)(e);
                };
        return function () {
          return t().store;
        };
      }
      var ae = re();
      function oe() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
          t = e === Q ? ae : re(e);
        return function () {
          return t().dispatch;
        };
      }
      var le,
        ie = oe();
      function ue(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (n.length
              ? " " +
                n
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
        );
      }
      function ce(e) {
        return !!e && !!e[Ze];
      }
      function se(e) {
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              n === Object ||
              ("function" == typeof n && Function.toString.call(n) === Je)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[Ge] ||
            !!e.constructor[Ge] ||
            ye(e) ||
            ve(e))
        );
      }
      function fe(e, t, n) {
        void 0 === n && (n = !1),
          0 === de(e)
            ? (n ? Object.keys : et)(e).forEach(function (r) {
                (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function de(e) {
        var t = e[Ze];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
          ? 1
          : ye(e)
          ? 2
          : ve(e)
          ? 3
          : 0;
      }
      function pe(e, t) {
        return 2 === de(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function me(e, t) {
        return 2 === de(e) ? e.get(t) : e[t];
      }
      function he(e, t, n) {
        var r = de(e);
        2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : (e[t] = n);
      }
      function ge(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function ye(e) {
        return Ke && e instanceof Map;
      }
      function ve(e) {
        return qe && e instanceof Set;
      }
      function be(e) {
        return e.o || e.t;
      }
      function we(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = tt(e);
        delete t[Ze];
        for (var n = et(t), r = 0; r < n.length; r++) {
          var a = n[r],
            o = t[a];
          !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
            (o.get || o.set) &&
              (t[a] = {
                configurable: !0,
                writable: !0,
                enumerable: o.enumerable,
                value: e[a],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function Se(e, t) {
        return (
          void 0 === t && (t = !1),
          Ee(e) ||
            ce(e) ||
            !se(e) ||
            (de(e) > 1 && (e.set = e.add = e.clear = e.delete = ke),
            Object.freeze(e),
            t &&
              fe(
                e,
                function (e, t) {
                  return Se(t, !0);
                },
                !0
              )),
          e
        );
      }
      function ke() {
        ue(2);
      }
      function Ee(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function xe(e) {
        var t = nt[e];
        return t || ue(18, e), t;
      }
      function _e(e, t) {
        nt[e] || (nt[e] = t);
      }
      function Ce() {
        return We;
      }
      function Pe(e, t) {
        t && (xe("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function Ne(e) {
        je(e), e.p.forEach(Te), (e.p = null);
      }
      function je(e) {
        e === We && (We = e.l);
      }
      function Oe(e) {
        return (We = { p: [], l: We, h: e, m: !0, _: 0 });
      }
      function Te(e) {
        var t = e[Ze];
        0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
      }
      function Re(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          r = void 0 !== e && e !== n;
        return (
          t.h.g || xe("ES5").S(t, e, r),
          r
            ? (n[Ze].P && (Ne(t), ue(4)),
              se(e) && ((e = Le(t, e)), t.l || Ae(t, e)),
              t.u && xe("Patches").M(n[Ze].t, e, t.u, t.s))
            : (e = Le(t, n, [])),
          Ne(t),
          t.u && t.v(t.u, t.s),
          e !== Ye ? e : void 0
        );
      }
      function Le(e, t, n) {
        if (Ee(t)) return t;
        var r = t[Ze];
        if (!r)
          return (
            fe(
              t,
              function (a, o) {
                return ze(e, r, t, a, o, n);
              },
              !0
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return Ae(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var a = 4 === r.i || 5 === r.i ? (r.o = we(r.k)) : r.o;
          fe(3 === r.i ? new Set(a) : a, function (t, o) {
            return ze(e, r, a, t, o, n);
          }),
            Ae(e, a, !1),
            n && e.u && xe("Patches").R(r, n, e.u, e.s);
        }
        return r.o;
      }
      function ze(e, t, n, r, a, o) {
        if (ce(a)) {
          var l = Le(
            e,
            a,
            o && t && 3 !== t.i && !pe(t.D, r) ? o.concat(r) : void 0
          );
          if ((he(n, r, l), !ce(l))) return;
          e.m = !1;
        }
        if (se(a) && !Ee(a)) {
          if (!e.h.F && e._ < 1) return;
          Le(e, a), (t && t.A.l) || Ae(e, a);
        }
      }
      function Ae(e, t, n) {
        void 0 === n && (n = !1), e.h.F && e.m && Se(t, n);
      }
      function De(e, t) {
        var n = e[Ze];
        return (n ? be(n) : e)[t];
      }
      function Ie(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function Me(e) {
        e.P || ((e.P = !0), e.l && Me(e.l));
      }
      function Fe(e) {
        e.o || (e.o = we(e.t));
      }
      function Ue(e, t, n) {
        var r = ye(t)
          ? xe("MapSet").N(t, n)
          : ve(t)
          ? xe("MapSet").T(t, n)
          : e.g
          ? (function (e, t) {
              var n = Array.isArray(e),
                r = {
                  i: n ? 1 : 0,
                  A: t ? t.A : Ce(),
                  P: !1,
                  I: !1,
                  D: {},
                  l: t,
                  t: e,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                a = r,
                o = rt;
              n && ((a = [r]), (o = at));
              var l = Proxy.revocable(a, o),
                i = l.revoke,
                u = l.proxy;
              return (r.k = u), (r.j = i), u;
            })(t, n)
          : xe("ES5").J(t, n);
        return (n ? n.A : Ce()).p.push(r), r;
      }
      function He(e) {
        return (
          ce(e) || ue(22, e),
          (function e(t) {
            if (!se(t)) return t;
            var n,
              r = t[Ze],
              a = de(t);
            if (r) {
              if (!r.P && (r.i < 4 || !xe("ES5").K(r))) return r.t;
              (r.I = !0), (n = Be(t, a)), (r.I = !1);
            } else n = Be(t, a);
            return (
              fe(n, function (t, a) {
                (r && me(r.t, t) === a) || he(n, t, e(a));
              }),
              3 === a ? new Set(n) : n
            );
          })(e)
        );
      }
      function Be(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return we(e);
      }
      function $e() {
        function e(e, t) {
          var n = a[e];
          return (
            n
              ? (n.enumerable = t)
              : (a[e] = n =
                  {
                    configurable: !0,
                    enumerable: t,
                    get: function () {
                      var t = this[Ze];
                      return rt.get(t, e);
                    },
                    set: function (t) {
                      var n = this[Ze];
                      rt.set(n, e, t);
                    },
                  }),
            n
          );
        }
        function t(e) {
          for (var t = e.length - 1; t >= 0; t--) {
            var a = e[t][Ze];
            if (!a.P)
              switch (a.i) {
                case 5:
                  r(a) && Me(a);
                  break;
                case 4:
                  n(a) && Me(a);
              }
          }
        }
        function n(e) {
          for (var t = e.t, n = e.k, r = et(n), a = r.length - 1; a >= 0; a--) {
            var o = r[a];
            if (o !== Ze) {
              var l = t[o];
              if (void 0 === l && !pe(t, o)) return !0;
              var i = n[o],
                u = i && i[Ze];
              if (u ? u.t !== l : !ge(i, l)) return !0;
            }
          }
          var c = !!t[Ze];
          return r.length !== et(t).length + (c ? 0 : 1);
        }
        function r(e) {
          var t = e.k;
          if (t.length !== e.t.length) return !0;
          var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
          if (n && !n.get) return !0;
          for (var r = 0; r < t.length; r++)
            if (!t.hasOwnProperty(r)) return !0;
          return !1;
        }
        var a = {};
        _e("ES5", {
          J: function (t, n) {
            var r = Array.isArray(t),
              a = (function (t, n) {
                if (t) {
                  for (var r = Array(n.length), a = 0; a < n.length; a++)
                    Object.defineProperty(r, "" + a, e(a, !0));
                  return r;
                }
                var o = tt(n);
                delete o[Ze];
                for (var l = et(o), i = 0; i < l.length; i++) {
                  var u = l[i];
                  o[u] = e(u, t || !!o[u].enumerable);
                }
                return Object.create(Object.getPrototypeOf(n), o);
              })(r, t),
              o = {
                i: r ? 5 : 4,
                A: n ? n.A : Ce(),
                P: !1,
                I: !1,
                D: {},
                l: n,
                t: t,
                k: a,
                o: null,
                O: !1,
                C: !1,
              };
            return Object.defineProperty(a, Ze, { value: o, writable: !0 }), a;
          },
          S: function (e, n, a) {
            a
              ? ce(n) && n[Ze].A === e && t(e.p)
              : (e.u &&
                  (function e(t) {
                    if (t && "object" == typeof t) {
                      var n = t[Ze];
                      if (n) {
                        var a = n.t,
                          o = n.k,
                          l = n.D,
                          i = n.i;
                        if (4 === i)
                          fe(o, function (t) {
                            t !== Ze &&
                              (void 0 !== a[t] || pe(a, t)
                                ? l[t] || e(o[t])
                                : ((l[t] = !0), Me(n)));
                          }),
                            fe(a, function (e) {
                              void 0 !== o[e] ||
                                pe(o, e) ||
                                ((l[e] = !1), Me(n));
                            });
                        else if (5 === i) {
                          if (
                            (r(n) && (Me(n), (l.length = !0)),
                            o.length < a.length)
                          )
                            for (var u = o.length; u < a.length; u++) l[u] = !1;
                          else
                            for (var c = a.length; c < o.length; c++) l[c] = !0;
                          for (
                            var s = Math.min(o.length, a.length), f = 0;
                            f < s;
                            f++
                          )
                            o.hasOwnProperty(f) || (l[f] = !0),
                              void 0 === l[f] && e(o[f]);
                        }
                      }
                    }
                  })(e.p[0]),
                t(e.p));
          },
          K: function (e) {
            return 4 === e.i ? n(e) : r(e);
          },
        });
      }
      !(function (e) {
        X = e;
      })(B.useSyncExternalStoreWithSelector),
        (function (e) {
          e;
        })(H.useSyncExternalStore),
        (le = $.unstable_batchedUpdates),
        (V = le);
      var Ve,
        We,
        Qe = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        Ke = "undefined" != typeof Map,
        qe = "undefined" != typeof Set,
        Xe =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        Ye = Qe
          ? Symbol.for("immer-nothing")
          : (((Ve = {})["immer-nothing"] = !0), Ve),
        Ge = Qe ? Symbol.for("immer-draftable") : "__$immer_draftable",
        Ze = Qe ? Symbol.for("immer-state") : "__$immer_state",
        Je =
          ("undefined" != typeof Symbol && Symbol.iterator,
          "" + Object.prototype.constructor),
        et =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        tt =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              et(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        nt = {},
        rt = {
          get: function (e, t) {
            if (t === Ze) return e;
            var n = be(e);
            if (!pe(n, t))
              return (function (e, t, n) {
                var r,
                  a = Ie(t, n);
                return a
                  ? "value" in a
                    ? a.value
                    : null === (r = a.get) || void 0 === r
                    ? void 0
                    : r.call(e.k)
                  : void 0;
              })(e, n, t);
            var r = n[t];
            return e.I || !se(r)
              ? r
              : r === De(e.t, t)
              ? (Fe(e), (e.o[t] = Ue(e.A.h, r, e)))
              : r;
          },
          has: function (e, t) {
            return t in be(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(be(e));
          },
          set: function (e, t, n) {
            var r = Ie(be(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var a = De(be(e), t),
                o = null == a ? void 0 : a[Ze];
              if (o && o.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
              if (ge(n, a) && (void 0 !== n || pe(e.t, t))) return !0;
              Fe(e), Me(e);
            }
            return (
              (e.o[t] === n &&
                "number" != typeof n &&
                (void 0 !== n || t in e.o)) ||
              ((e.o[t] = n), (e.D[t] = !0), !0)
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== De(e.t, t) || t in e.t
                ? ((e.D[t] = !1), Fe(e), Me(e))
                : delete e.D[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = be(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r;
          },
          defineProperty: function () {
            ue(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            ue(12);
          },
        },
        at = {};
      fe(rt, function (e, t) {
        at[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (at.deleteProperty = function (e, t) {
          return at.set.call(this, e, t, void 0);
        }),
        (at.set = function (e, t, n) {
          return rt.set.call(this, e[0], t, n, e[0]);
        });
      var ot = (function () {
          function e(e) {
            var t = this;
            (this.g = Xe),
              (this.F = !0),
              (this.produce = function (e, n, r) {
                if ("function" == typeof e && "function" != typeof n) {
                  var a = n;
                  n = e;
                  var o = t;
                  return function (e) {
                    var t = this;
                    void 0 === e && (e = a);
                    for (
                      var r = arguments.length,
                        l = Array(r > 1 ? r - 1 : 0),
                        i = 1;
                      i < r;
                      i++
                    )
                      l[i - 1] = arguments[i];
                    return o.produce(e, function (e) {
                      var r;
                      return (r = n).call.apply(r, [t, e].concat(l));
                    });
                  };
                }
                var l;
                if (
                  ("function" != typeof n && ue(6),
                  void 0 !== r && "function" != typeof r && ue(7),
                  se(e))
                ) {
                  var i = Oe(t),
                    u = Ue(t, e, void 0),
                    c = !0;
                  try {
                    (l = n(u)), (c = !1);
                  } finally {
                    c ? Ne(i) : je(i);
                  }
                  return "undefined" != typeof Promise && l instanceof Promise
                    ? l.then(
                        function (e) {
                          return Pe(i, r), Re(e, i);
                        },
                        function (e) {
                          throw (Ne(i), e);
                        }
                      )
                    : (Pe(i, r), Re(l, i));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (l = n(e)) && (l = e),
                    l === Ye && (l = void 0),
                    t.F && Se(l, !0),
                    r)
                  ) {
                    var s = [],
                      f = [];
                    xe("Patches").M(e, l, s, f), r(s, f);
                  }
                  return l;
                }
                ue(21, e);
              }),
              (this.produceWithPatches = function (e, n) {
                if ("function" == typeof e)
                  return function (n) {
                    for (
                      var r = arguments.length,
                        a = Array(r > 1 ? r - 1 : 0),
                        o = 1;
                      o < r;
                      o++
                    )
                      a[o - 1] = arguments[o];
                    return t.produceWithPatches(n, function (t) {
                      return e.apply(void 0, [t].concat(a));
                    });
                  };
                var r,
                  a,
                  o = t.produce(e, n, function (e, t) {
                    (r = e), (a = t);
                  });
                return "undefined" != typeof Promise && o instanceof Promise
                  ? o.then(function (e) {
                      return [e, r, a];
                    })
                  : [o, r, a];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              se(e) || ue(8), ce(e) && (e = He(e));
              var t = Oe(this),
                n = Ue(this, e, void 0);
              return (n[Ze].C = !0), je(t), n;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[Ze]).A;
              return Pe(n, t), Re(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.F = e;
            }),
            (t.setUseProxies = function (e) {
              e && !Xe && ue(20), (this.g = e);
            }),
            (t.applyPatches = function (e, t) {
              var n;
              for (n = t.length - 1; n >= 0; n--) {
                var r = t[n];
                if (0 === r.path.length && "replace" === r.op) {
                  e = r.value;
                  break;
                }
              }
              n > -1 && (t = t.slice(n + 1));
              var a = xe("Patches").$;
              return ce(e)
                ? a(e, t)
                : this.produce(e, function (e) {
                    return a(e, t);
                  });
            }),
            e
          );
        })(),
        lt = new ot(),
        it = lt.produce,
        ut =
          (lt.produceWithPatches.bind(lt),
          lt.setAutoFreeze.bind(lt),
          lt.setUseProxies.bind(lt),
          lt.applyPatches.bind(lt),
          lt.createDraft.bind(lt),
          lt.finishDraft.bind(lt),
          it);
      function ct(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function st(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? st(Object(n), !0).forEach(function (t) {
                ct(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : st(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function dt(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var pt =
          ("function" === typeof Symbol && Symbol.observable) || "@@observable",
        mt = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        ht = {
          INIT: "@@redux/INIT" + mt(),
          REPLACE: "@@redux/REPLACE" + mt(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + mt();
          },
        };
      function gt(e) {
        if ("object" !== typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function yt(e, t, n) {
        var r;
        if (
          ("function" === typeof t && "function" === typeof n) ||
          ("function" === typeof n && "function" === typeof arguments[3])
        )
          throw new Error(dt(0));
        if (
          ("function" === typeof t &&
            "undefined" === typeof n &&
            ((n = t), (t = void 0)),
          "undefined" !== typeof n)
        ) {
          if ("function" !== typeof n) throw new Error(dt(1));
          return n(yt)(e, t);
        }
        if ("function" !== typeof e) throw new Error(dt(2));
        var a = e,
          o = t,
          l = [],
          i = l,
          u = !1;
        function c() {
          i === l && (i = l.slice());
        }
        function s() {
          if (u) throw new Error(dt(3));
          return o;
        }
        function f(e) {
          if ("function" !== typeof e) throw new Error(dt(4));
          if (u) throw new Error(dt(5));
          var t = !0;
          return (
            c(),
            i.push(e),
            function () {
              if (t) {
                if (u) throw new Error(dt(6));
                (t = !1), c();
                var n = i.indexOf(e);
                i.splice(n, 1), (l = null);
              }
            }
          );
        }
        function d(e) {
          if (!gt(e)) throw new Error(dt(7));
          if ("undefined" === typeof e.type) throw new Error(dt(8));
          if (u) throw new Error(dt(9));
          try {
            (u = !0), (o = a(o, e));
          } finally {
            u = !1;
          }
          for (var t = (l = i), n = 0; n < t.length; n++) {
            (0, t[n])();
          }
          return e;
        }
        function p(e) {
          if ("function" !== typeof e) throw new Error(dt(10));
          (a = e), d({ type: ht.REPLACE });
        }
        function m() {
          var e,
            t = f;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" !== typeof e || null === e)
                  throw new Error(dt(11));
                function n() {
                  e.next && e.next(s());
                }
                return n(), { unsubscribe: t(n) };
              },
            })[pt] = function () {
              return this;
            }),
            e
          );
        }
        return (
          d({ type: ht.INIT }),
          ((r = { dispatch: d, subscribe: f, getState: s, replaceReducer: p })[
            pt
          ] = m),
          r
        );
      }
      function vt(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
          var a = t[r];
          0, "function" === typeof e[a] && (n[a] = e[a]);
        }
        var o,
          l = Object.keys(n);
        try {
          !(function (e) {
            Object.keys(e).forEach(function (t) {
              var n = e[t];
              if ("undefined" === typeof n(void 0, { type: ht.INIT }))
                throw new Error(dt(12));
              if (
                "undefined" ===
                typeof n(void 0, { type: ht.PROBE_UNKNOWN_ACTION() })
              )
                throw new Error(dt(13));
            });
          })(n);
        } catch (i) {
          o = i;
        }
        return function (e, t) {
          if ((void 0 === e && (e = {}), o)) throw o;
          for (var r = !1, a = {}, i = 0; i < l.length; i++) {
            var u = l[i],
              c = n[u],
              s = e[u],
              f = c(s, t);
            if ("undefined" === typeof f) {
              t && t.type;
              throw new Error(dt(14));
            }
            (a[u] = f), (r = r || f !== s);
          }
          return (r = r || l.length !== Object.keys(e).length) ? a : e;
        };
      }
      function bt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      function wt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          return function () {
            var n = e.apply(void 0, arguments),
              r = function () {
                throw new Error(dt(15));
              },
              a = {
                getState: n.getState,
                dispatch: function () {
                  return r.apply(void 0, arguments);
                },
              },
              o = t.map(function (e) {
                return e(a);
              });
            return (
              (r = bt.apply(void 0, o)(n.dispatch)),
              ft(ft({}, n), {}, { dispatch: r })
            );
          };
        };
      }
      function St(e) {
        return function (t) {
          var n = t.dispatch,
            r = t.getState;
          return function (t) {
            return function (a) {
              return "function" === typeof a ? a(n, r, e) : t(a);
            };
          };
        };
      }
      var kt = St();
      kt.withExtraArgument = St;
      var Et = kt,
        xt = (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        _t = function (e, t) {
          for (var n = 0, r = t.length, a = e.length; n < r; n++, a++)
            e[a] = t[n];
          return e;
        },
        Ct = Object.defineProperty,
        Pt =
          (Object.defineProperties,
          Object.getOwnPropertyDescriptors,
          Object.getOwnPropertySymbols),
        Nt = Object.prototype.hasOwnProperty,
        jt = Object.prototype.propertyIsEnumerable,
        Ot = function (e, t, n) {
          return t in e
            ? Ct(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        },
        Tt = function (e, t) {
          for (var n in t || (t = {})) Nt.call(t, n) && Ot(e, n, t[n]);
          if (Pt)
            for (var r = 0, a = Pt(t); r < a.length; r++) {
              n = a[r];
              jt.call(t, n) && Ot(e, n, t[n]);
            }
          return e;
        },
        Rt =
          "undefined" !== typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 !== arguments.length)
                  return "object" === typeof arguments[0]
                    ? bt
                    : bt.apply(null, arguments);
              };
      "undefined" !== typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      function Lt(e) {
        if ("object" !== typeof e || null === e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        for (var n = t; null !== Object.getPrototypeOf(n); )
          n = Object.getPrototypeOf(n);
        return t === n;
      }
      var zt = (function (e) {
        function t() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          var a = e.apply(this, n) || this;
          return Object.setPrototypeOf(a, t.prototype), a;
        }
        return (
          xt(t, e),
          Object.defineProperty(t, Symbol.species, {
            get: function () {
              return t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.concat = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return e.prototype.concat.apply(this, t);
          }),
          (t.prototype.prepend = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return 1 === e.length && Array.isArray(e[0])
              ? new (t.bind.apply(t, _t([void 0], e[0].concat(this))))()
              : new (t.bind.apply(t, _t([void 0], e.concat(this))))();
          }),
          t
        );
      })(Array);
      function At(e) {
        return se(e) ? ut(e, function () {}) : e;
      }
      function Dt() {
        return function (e) {
          return (function (e) {
            void 0 === e && (e = {});
            var t = e.thunk,
              n = void 0 === t || t,
              r = (e.immutableCheck, e.serializableCheck, new zt());
            n &&
              (!(function (e) {
                return "boolean" === typeof e;
              })(n)
                ? r.push(Et.withExtraArgument(n.extraArgument))
                : r.push(Et));
            0;
            return r;
          })(e);
        };
      }
      function It(e, t) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          if (t) {
            var a = t.apply(void 0, n);
            if (!a) throw new Error("prepareAction did not return an object");
            return Tt(
              Tt(
                { type: e, payload: a.payload },
                "meta" in a && { meta: a.meta }
              ),
              "error" in a && { error: a.error }
            );
          }
          return { type: e, payload: n[0] };
        }
        return (
          (n.toString = function () {
            return "" + e;
          }),
          (n.type = e),
          (n.match = function (t) {
            return t.type === e;
          }),
          n
        );
      }
      function Mt(e) {
        var t,
          n = {},
          r = [],
          a = {
            addCase: function (e, t) {
              var r = "string" === typeof e ? e : e.type;
              if (r in n)
                throw new Error(
                  "addCase cannot be called with two reducers for the same action type"
                );
              return (n[r] = t), a;
            },
            addMatcher: function (e, t) {
              return r.push({ matcher: e, reducer: t }), a;
            },
            addDefaultCase: function (e) {
              return (t = e), a;
            },
          };
        return e(a), [n, r, t];
      }
      function Ft(e) {
        var t = e.name;
        if (!t) throw new Error("`name` is a required option for createSlice");
        var n,
          r =
            "function" == typeof e.initialState
              ? e.initialState
              : At(e.initialState),
          a = e.reducers || {},
          o = Object.keys(a),
          l = {},
          i = {},
          u = {};
        function c() {
          var t =
              "function" === typeof e.extraReducers
                ? Mt(e.extraReducers)
                : [e.extraReducers],
            n = t[0],
            a = void 0 === n ? {} : n,
            o = t[1],
            l = void 0 === o ? [] : o,
            u = t[2],
            c = void 0 === u ? void 0 : u,
            s = Tt(Tt({}, a), i);
          return (function (e, t, n, r) {
            void 0 === n && (n = []);
            var a,
              o = "function" === typeof t ? Mt(t) : [t, n, r],
              l = o[0],
              i = o[1],
              u = o[2];
            if (
              (function (e) {
                return "function" === typeof e;
              })(e)
            )
              a = function () {
                return At(e());
              };
            else {
              var c = At(e);
              a = function () {
                return c;
              };
            }
            function s(e, t) {
              void 0 === e && (e = a());
              var n = _t(
                [l[t.type]],
                i
                  .filter(function (e) {
                    return (0, e.matcher)(t);
                  })
                  .map(function (e) {
                    return e.reducer;
                  })
              );
              return (
                0 ===
                  n.filter(function (e) {
                    return !!e;
                  }).length && (n = [u]),
                n.reduce(function (e, n) {
                  if (n) {
                    var r;
                    if (ce(e)) return void 0 === (r = n(e, t)) ? e : r;
                    if (se(e))
                      return ut(e, function (e) {
                        return n(e, t);
                      });
                    if (void 0 === (r = n(e, t))) {
                      if (null === e) return e;
                      throw Error(
                        "A case reducer on a non-draftable value must not return undefined"
                      );
                    }
                    return r;
                  }
                  return e;
                }, e)
              );
            }
            return (s.getInitialState = a), s;
          })(r, s, l, c);
        }
        return (
          o.forEach(function (e) {
            var n,
              r,
              o = a[e],
              c = t + "/" + e;
            "reducer" in o ? ((n = o.reducer), (r = o.prepare)) : (n = o),
              (l[e] = n),
              (i[c] = n),
              (u[e] = r ? It(c, r) : It(c));
          }),
          {
            name: t,
            reducer: function (e, t) {
              return n || (n = c()), n(e, t);
            },
            actions: u,
            caseReducers: l,
            getInitialState: function () {
              return n || (n = c()), n.getInitialState();
            },
          }
        );
      }
      Object.assign;
      var Ut = "listenerMiddleware";
      It(Ut + "/add"), It(Ut + "/removeAll"), It(Ut + "/remove");
      $e();
      var Ht = Ft({
          name: "product",
          initialState: { currentProduct: null },
          reducers: {
            setCurrentProduct: function (e, t) {
              e.currentProduct = t.payload;
            },
          },
        }),
        Bt = Ht.actions.setCurrentProduct,
        $t = Ht.reducer,
        Vt = Ft({
          name: "cart",
          initialState: { itemsInCart: [] },
          reducers: {
            setItemInCart: function (e, t) {
              var n = e.itemsInCart.find(function (e) {
                return e.id === t.payload.id;
              });
              n
                ? n.count++
                : e.itemsInCart.push(ft(ft({}, t.payload), {}, { count: 1 }));
            },
            deletItemFromCart: function (e, t) {
              e.itemsInCart = e.itemsInCart.filter(function (e) {
                return e.id !== t.payload;
              });
            },
            plusItem: function (e, t) {
              var n = e.itemsInCart.find(function (e) {
                return e.id === t.payload.id;
              });
              n && n.count++;
            },
            minusItem: function (e, t) {
              var n = e.itemsInCart.find(function (e) {
                return e.id === t.payload.id;
              });
              n && n.count--;
            },
          },
        }),
        Wt = Vt.actions,
        Qt = Wt.setItemInCart,
        Kt = Wt.deletItemFromCart,
        qt = Wt.minusItem,
        Xt = Wt.plusItem,
        Yt = Vt.reducer,
        Gt = n(653),
        Zt = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        Jt = Gt.createContext && Gt.createContext(Zt),
        en = function () {
          return (
            (en =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            en.apply(this, arguments)
          );
        },
        tn = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function nn(e) {
        return (
          e &&
          e.map(function (e, t) {
            return Gt.createElement(e.tag, en({ key: t }, e.attr), nn(e.child));
          })
        );
      }
      function rn(e) {
        return function (t) {
          return Gt.createElement(
            an,
            en({ attr: en({}, e.attr) }, t),
            nn(e.child)
          );
        };
      }
      function an(e) {
        var t = function (t) {
          var n,
            r = e.attr,
            a = e.size,
            o = e.title,
            l = tn(e, ["attr", "size", "title"]),
            i = a || t.size || "1em";
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            Gt.createElement(
              "svg",
              en(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                r,
                l,
                {
                  className: n,
                  style: en(
                    en({ color: e.color || t.color }, t.style),
                    e.style
                  ),
                  height: i,
                  width: i,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && Gt.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== Jt
          ? Gt.createElement(Jt.Consumer, null, function (e) {
              return t(e);
            })
          : t(Zt);
      }
      function on(e) {
        return rn({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: { fill: "none", d: "M0 0h24v24H0zm18.31 6l-2.76 5z" },
            },
            {
              tag: "path",
              attr: {
                d: "M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z",
              },
            },
          ],
        })(e);
      }
      function ln(e) {
        return rn({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
              },
            },
          ],
        })(e);
      }
      var un,
        cn = n(694),
        sn = n.n(cn),
        fn = n(184),
        dn = function (e) {
          var t = e.onClick,
            n = e.type,
            r = e.children,
            a =
              (e.size,
              sn()({
                btn: !0,
                "btn-secondary": "secondary" === n,
                "btn-primary": "primary" === n,
                "btn-small": "s" === n,
                "btn-medium": "m" === n,
              }));
          return (0, fn.jsx)("button", {
            className: a,
            onClick: t,
            children: r,
          });
        },
        pn = function (e) {
          var t = e.product,
            n = (e.rent, ie()),
            r = Z(function (e) {
              return e.cart.itemsInCart.find(function (e) {
                return e.id === t.id;
              });
            }),
            a = r ? r.count : 0;
          return (0, fn.jsxs)("div", {
            children: [
              (0, fn.jsxs)("b", {
                className: "product-items__price",
                children: [t.price, "\u20be"],
              }),
              (0, fn.jsx)("div", {
                className: "add-to-cart",
                children: (0, fn.jsxs)(dn, {
                  onClick: function (e) {
                    e.stopPropagation(), n(Qt(t));
                  },
                  type: "primary",
                  children: [
                    (0, fn.jsx)(on, { size: "25px" }),
                    a > 0 &&
                      (0, fn.jsx)("i", {
                        className: "product-items__count",
                        children: a,
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        mn = function (e) {
          var t = e.product,
            n = ie(),
            r = z();
          return (0, fn.jsx)("div", {
            className: "product-items",
            children: (0, fn.jsxs)("div", {
              className: "product-items__details",
              children: [
                (0, fn.jsx)("img", {
                  onClick: function () {
                    n(Bt(t)), r("/app/".concat(t.title));
                  },
                  className: "product-items__img",
                  src: "/adjarapeak/img/" + t.img,
                  alt: t.title,
                }),
                (0, fn.jsx)("span", {
                  className: "product-items__title",
                  children: t.title,
                }),
                (0, fn.jsx)("p", { children: t.desc }),
                (0, fn.jsx)(pn, { product: t }),
              ],
            }),
          });
        },
        hn = function (e) {
          var t = e.rent,
            n = ie(),
            r = Z(function (e) {
              return e.cart.itemsInCart.find(function (e) {
                return e.id === t.id;
              });
            }),
            a = r ? r.count : 0;
          return (0, fn.jsxs)("div", {
            children: [
              (0, fn.jsxs)("b", {
                className: "rent-items-price",
                children: [t.price, "\u20be-\u0441\u0443\u0442\u043a\u0438"],
              }),
              (0, fn.jsx)("span", {
                className: "rent-items__button",
                children: (0, fn.jsxs)(dn, {
                  onClick: function (e) {
                    e.stopPropagation(), n(Qt(t));
                  },
                  type: "primary",
                  children: [
                    t.day,
                    (0, fn.jsx)(on, { className: "md", size: "25px" }),
                    a > 0 &&
                      (0, fn.jsx)("i", {
                        className: "rent-items__count",
                        children: a,
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        gn = function (e) {
          var t = e.rent,
            n = ie(),
            r = z();
          return (0, fn.jsx)("div", {
            className: "rent-items",
            children: (0, fn.jsxs)("div", {
              className: "rent-items__details",
              children: [
                (0, fn.jsx)("img", {
                  onClick: function () {
                    n(Bt(t)), r("/app/".concat(t.title));
                  },
                  className: "rent-items__img",
                  src: "/adjarapeak/img/" + t.img,
                  alt: t.title,
                }),
                (0, fn.jsx)("span", {
                  className: "rent-items__title",
                  children: t.title,
                }),
                (0, fn.jsx)("p", { children: t.desc }),
                (0, fn.jsx)(hn, { rent: t }),
              ],
            }),
          });
        },
        yn = new Uint8Array(16);
      function vn() {
        if (
          !un &&
          !(un =
            ("undefined" !== typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" !== typeof msCrypto &&
              "function" === typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return un(yn);
      }
      var bn =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      for (
        var wn = function (e) {
            return "string" === typeof e && bn.test(e);
          },
          Sn = [],
          kn = 0;
        kn < 256;
        ++kn
      )
        Sn.push((kn + 256).toString(16).substr(1));
      var En = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (
            Sn[e[t + 0]] +
            Sn[e[t + 1]] +
            Sn[e[t + 2]] +
            Sn[e[t + 3]] +
            "-" +
            Sn[e[t + 4]] +
            Sn[e[t + 5]] +
            "-" +
            Sn[e[t + 6]] +
            Sn[e[t + 7]] +
            "-" +
            Sn[e[t + 8]] +
            Sn[e[t + 9]] +
            "-" +
            Sn[e[t + 10]] +
            Sn[e[t + 11]] +
            Sn[e[t + 12]] +
            Sn[e[t + 13]] +
            Sn[e[t + 14]] +
            Sn[e[t + 15]]
          ).toLowerCase();
        if (!wn(n)) throw TypeError("Stringified UUID is invalid");
        return n;
      };
      var xn = function (e, t, n) {
          var r = (e = e || {}).random || (e.rng || vn)();
          if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
            n = n || 0;
            for (var a = 0; a < 16; ++a) t[n + a] = r[a];
            return t;
          }
          return En(r);
        },
        _n = [
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 NATUREHIKE CLOUD UP 2 210T",
            img: "cloudup2-green-210T.jpg",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 150*275*110",
            category: "tent",
            price: 690,
            shortly:
              "\u0423\u043b\u044c\u0442\u0440\u0430\u043b\u0435\u0433\u043a\u0430\u044f \u0434\u0432\u0443\u0445\u043c\u0435\u0441\u0442\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0434\u043b\u044f \u043f\u0435\u0448\u0438\u0445, \u0432\u043e\u0434\u043d\u044b\u0445 \u0438 \u0432\u0435\u043b\u043e-\u043f\u043e\u0445\u043e\u0434\u043e\u0432. \u0412 \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u043d\u044b\u0439 \u0442\u0430\u043c\u0431\u0443\u0440 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043f\u0430\u0440\u0443 \u0440\u044e\u043a\u0437\u0430\u043a\u043e\u0432 \u0432\u043d\u0443\u0448\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432.",
            column: [
              "\u041a\u0430\u0440\u043a\u0430\u0441 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d \u0438\u0437 \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0447\u043d\u043e\u0433\u043e, \u043d\u043e \u0433\u0438\u0431\u043a\u043e\u0433\u043e \u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f \u043c\u0430\u0440\u043a\u0438 7001",
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430 210*125 \u0441\u043c",
              "\u0412\u044b\u0441\u043e\u0442\u0430: 100 \u0441\u043c",
              "\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0442\u0435\u043d\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0438\u0437 \u0442\u043e\u043d\u043a\u043e\u0433\u043e \u0438 \u043b\u0435\u0433\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440\u0430 210T \u0441 \u043f\u043b\u0435\u0442\u0435\u043d\u0438\u0435\u043c RipStop \u0438 PU \u043f\u0440\u043e\u043f\u0438\u0442\u043a\u043e\u0439",
              "\u0422\u043a\u0430\u043d\u044c \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u0430 \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u0443, \u043d\u0435 \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043d\u0430\u043c\u043e\u043a\u0430\u043d\u0438\u0438",
              "\u0412 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442 \u0432\u0445\u043e\u0434\u0438\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u043b (\u0444\u0443\u0442\u043f\u0440\u0438\u043d\u0442), \u0437\u0430\u0449\u0438\u0449\u0430\u044e\u0449\u0438\u0439 \u0434\u043d\u043e \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u043e\u0442 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439 \u0438 \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u044f",
              "\u0412\u0435\u0441: 1,83 \u043a\u0433",
              "\u041f\u0430\u043b\u0430\u0442\u043a\u0430 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u0435\u0442\u0441\u044f \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043b\u044b\u0448\u043a\u0430\u043c\u0438 Y-\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0441\u0435\u0447\u0435\u043d\u0438\u044f. \u0412\u0435\u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0441\u0435\u0433\u043e 9 \u0433\u0440\u0430\u043c\u043c. \u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437 \u043d\u0438\u0445 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b \u0432\u044b\u0435\u043c\u043a\u0438 \u0434\u043b\u044f \u0444\u0438\u043a\u0441\u0430\u0446\u0438\u0438 \u043e\u0442\u0442\u044f\u0436\u043a\u0438 \u0438 \u043f\u0435\u0442\u0435\u043b\u044c\u043a\u0430 \u0438\u0437 \u0448\u043d\u0443\u0440\u0430 \u0434\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u0433\u0440\u0443\u043d\u0442\u0430",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): >3000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): >3000",
              "\u0427\u0435\u0445\u043e\u043b \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 NATUREHIKE CLOUD UP 3 210T",
            img: "CloudUp3-orange-210T.jpg",
            desc: "3-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 180*300*110",
            category: "tent",
            price: 810,
            shortly:
              "\u0423\u043b\u044c\u0442\u0440\u0430\u043b\u0435\u0433\u043a\u0430\u044f \u0434\u0432\u0443\u0445\u043c\u0435\u0441\u0442\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0434\u043b\u044f \u043f\u0435\u0448\u0438\u0445, \u0432\u043e\u0434\u043d\u044b\u0445 \u0438 \u0432\u0435\u043b\u043e-\u043f\u043e\u0445\u043e\u0434\u043e\u0432. \u0412 \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u043d\u044b\u0439 \u0442\u0430\u043c\u0431\u0443\u0440 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043f\u0430\u0440\u0443 \u0440\u044e\u043a\u0437\u0430\u043a\u043e\u0432 \u0432\u043d\u0443\u0448\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432.",
            column: [
              "\u041a\u0430\u0440\u043a\u0430\u0441 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d \u0438\u0437 \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0447\u043d\u043e\u0433\u043e, \u043d\u043e \u0433\u0438\u0431\u043a\u043e\u0433\u043e \u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f \u043c\u0430\u0440\u043a\u0438 7001",
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430 215*180 \u0441\u043c",
              "\u0412\u044b\u0441\u043e\u0442\u0430: 100 \u0441\u043c",
              "\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0442\u0435\u043d\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0438\u0437 \u0442\u043e\u043d\u043a\u043e\u0433\u043e \u0438 \u043b\u0435\u0433\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440\u0430 210T \u0441 \u043f\u043b\u0435\u0442\u0435\u043d\u0438\u0435\u043c RipStop \u0438 PU \u043f\u0440\u043e\u043f\u0438\u0442\u043a\u043e\u0439",
              "\u0422\u043a\u0430\u043d\u044c \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u0430 \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u0443, \u043d\u0435 \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043d\u0430\u043c\u043e\u043a\u0430\u043d\u0438\u0438",
              "\u0412 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442 \u0432\u0445\u043e\u0434\u0438\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u043b (\u0444\u0443\u0442\u043f\u0440\u0438\u043d\u0442), \u0437\u0430\u0449\u0438\u0449\u0430\u044e\u0449\u0438\u0439 \u0434\u043d\u043e \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u043e\u0442 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439 \u0438 \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u044f",
              "\u0412\u0435\u0441: 2,4 \u043a\u0433",
              "\u041f\u0430\u043b\u0430\u0442\u043a\u0430 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u0435\u0442\u0441\u044f \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043b\u044b\u0448\u043a\u0430\u043c\u0438 Y-\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0441\u0435\u0447\u0435\u043d\u0438\u044f. \u0412\u0435\u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0441\u0435\u0433\u043e 9 \u0433\u0440\u0430\u043c\u043c. \u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437 \u043d\u0438\u0445 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b \u0432\u044b\u0435\u043c\u043a\u0438 \u0434\u043b\u044f \u0444\u0438\u043a\u0441\u0430\u0446\u0438\u0438 \u043e\u0442\u0442\u044f\u0436\u043a\u0438 \u0438 \u043f\u0435\u0442\u0435\u043b\u044c\u043a\u0430 \u0438\u0437 \u0448\u043d\u0443\u0440\u0430 \u0434\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u0433\u0440\u0443\u043d\u0442\u0430",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): >3000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): >3000",
              "\u0427\u0435\u0445\u043e\u043b \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 NATUREHIKE CLOUD UP 2 20D SNOW SKIRT",
            img: "naturehike_show_skirt.jpg",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 150*275*110",
            category: "tent",
            price: 799,
            shortly:
              "\u0423\u043b\u044c\u0442\u0440\u0430\u043b\u0451\u0433\u043a\u0430\u044f \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0441 \u044e\u0431\u043a\u043e\u0439, \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u043d\u0430\u044f \u043d\u0430 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0435 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 2 \u0447\u0435\u043b\u043e\u0432\u0435\u043a.",
            column: [
              "\u0422\u0435\u043d\u0442 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d \u0438\u0437 \u0441\u0438\u043b\u0438\u043a\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0435\u0439\u043b\u043e\u043d\u0430 20D",
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430 210*125 \u0441\u043c",
              "\u0412\u044b\u0441\u043e\u0442\u0430: 110 \u0441\u043c",
              "\u042e\u0431\u043a\u0430 \u043f\u043e \u043a\u0440\u0430\u044e \u0442\u0435\u043d\u0442\u0430 \u0437\u0430\u0449\u0438\u0442\u0438\u0442 \u043e\u0442 \u0441\u043d\u0435\u0433\u0430, \u0434\u043e\u0436\u0434\u044f \u0438 \u0441\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0435\u0442\u0440\u0430",
              "\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0430\u043b\u0430\u0442\u043a\u0438, \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0430\u044f \u0438\u0437 \u0441\u0435\u0442\u043a\u0438 B3, \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043e\u0442 \u043d\u0430\u0441\u0435\u043a\u043e\u043c\u044b\u0445 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0446\u0438\u0440\u043a\u0443\u043b\u044f\u0446\u0438\u044e \u0432\u043e\u0437\u0434\u0443\u0445\u0430",
              "\u0422\u043a\u0430\u043d\u044c \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u0430 \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u0443, \u043d\u0435 \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043d\u0430\u043c\u043e\u043a\u0430\u043d\u0438\u0438",
              "\u0412 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442 \u0432\u0445\u043e\u0434\u0438\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u043b (\u0444\u0443\u0442\u043f\u0440\u0438\u043d\u0442), \u0437\u0430\u0449\u0438\u0449\u0430\u044e\u0449\u0438\u0439 \u0434\u043d\u043e \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u043e\u0442 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439 \u0438 \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u044f",
              "\u0412\u0435\u0441: 1,7 \u043a\u0433",
              "\u041f\u0430\u043b\u0430\u0442\u043a\u0430 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u0435\u0442\u0441\u044f \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043b\u044b\u0448\u043a\u0430\u043c\u0438 Y-\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0441\u0435\u0447\u0435\u043d\u0438\u044f. \u0412\u0435\u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0441\u0435\u0433\u043e 9 \u0433\u0440\u0430\u043c\u043c. \u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437 \u043d\u0438\u0445 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b \u0432\u044b\u0435\u043c\u043a\u0438 \u0434\u043b\u044f \u0444\u0438\u043a\u0441\u0430\u0446\u0438\u0438 \u043e\u0442\u0442\u044f\u0436\u043a\u0438 \u0438 \u043f\u0435\u0442\u0435\u043b\u044c\u043a\u0430 \u0438\u0437 \u0448\u043d\u0443\u0440\u0430 \u0434\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u0433\u0440\u0443\u043d\u0442\u0430",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): >4000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): >4000",
              "\u0427\u0435\u0445\u043e\u043b \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 NATUREHIKE CLOUD UP 3 20D SNOW SKIRT",
            img: "20DGREYWITHSKIRT.webp",
            desc: "3-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 180*300*110",
            category: "tent",
            price: 891,
            shortly:
              "\u0423\u043b\u044c\u0442\u0440\u0430\u043b\u0451\u0433\u043a\u0430\u044f \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0441 \u044e\u0431\u043a\u043e\u0439.",
            column: [
              "\u0422\u0435\u043d\u0442 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d \u0438\u0437 \u0441\u0438\u043b\u0438\u043a\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0435\u0439\u043b\u043e\u043d\u0430 20D",
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430 215*180 \u0441\u043c",
              "\u0412\u044b\u0441\u043e\u0442\u0430: 110 \u0441\u043c",
              "\u042e\u0431\u043a\u0430 \u043f\u043e \u043a\u0440\u0430\u044e \u0442\u0435\u043d\u0442\u0430 \u0437\u0430\u0449\u0438\u0442\u0438\u0442 \u043e\u0442 \u0441\u043d\u0435\u0433\u0430, \u0434\u043e\u0436\u0434\u044f \u0438 \u0441\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0435\u0442\u0440\u0430",
              "\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0430\u043b\u0430\u0442\u043a\u0438, \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0430\u044f \u0438\u0437 \u0441\u0435\u0442\u043a\u0438 B3, \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043e\u0442 \u043d\u0430\u0441\u0435\u043a\u043e\u043c\u044b\u0445 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0446\u0438\u0440\u043a\u0443\u043b\u044f\u0446\u0438\u044e \u0432\u043e\u0437\u0434\u0443\u0445\u0430",
              "\u0422\u043a\u0430\u043d\u044c \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u0430 \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u0443, \u043d\u0435 \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043d\u0430\u043c\u043e\u043a\u0430\u043d\u0438\u0438",
              "\u0412 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442 \u0432\u0445\u043e\u0434\u0438\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u043b (\u0444\u0443\u0442\u043f\u0440\u0438\u043d\u0442), \u0437\u0430\u0449\u0438\u0449\u0430\u044e\u0449\u0438\u0439 \u0434\u043d\u043e \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u043e\u0442 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439 \u0438 \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u044f",
              "\u0412\u0435\u0441: 2,05 \u043a\u0433",
              "\u041f\u0430\u043b\u0430\u0442\u043a\u0430 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u0435\u0442\u0441\u044f \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043b\u044b\u0448\u043a\u0430\u043c\u0438 Y-\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0441\u0435\u0447\u0435\u043d\u0438\u044f. \u0412\u0435\u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0441\u0435\u0433\u043e 9 \u0433\u0440\u0430\u043c\u043c. \u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437 \u043d\u0438\u0445 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b \u0432\u044b\u0435\u043c\u043a\u0438 \u0434\u043b\u044f \u0444\u0438\u043a\u0441\u0430\u0446\u0438\u0438 \u043e\u0442\u0442\u044f\u0436\u043a\u0438 \u0438 \u043f\u0435\u0442\u0435\u043b\u044c\u043a\u0430 \u0438\u0437 \u0448\u043d\u0443\u0440\u0430 \u0434\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u0433\u0440\u0443\u043d\u0442\u0430",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): >4000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): >4000",
              "\u0427\u0435\u0445\u043e\u043b \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 QUECHUA MH-100",
            img: "DECATHLON2\u0443\u0445.jpg",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 130*210*107",
            category: "tent",
            price: 249,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0438 \u043b\u0435\u0433\u043a\u0430\u044f \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435, \u044d\u0442\u0430 \u044d\u043a\u043e-\u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u043b\u0430\u0433\u0435\u0440\u0435\u0439 \u043d\u0430 2 \u0447\u0435\u043b\u043e\u0432\u0435\u043a. \u042d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u043d\u0430\u044f \u0438 \u043d\u0435\u0434\u043e\u0440\u043e\u0433\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u043a\u0443\u043f\u043e\u043b\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u043f\u0430\u043b\u0430\u0442\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u043c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u043a\u0435\u043c\u043f\u0438\u043d\u0433\u0430.",
            column: [
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430: 130*210 \u0441\u043c",
              "\u0420\u043e\u0441\u0442: 107\u0441\u043c",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u0440\u043f\u0443\u0441\u0430: 58*16*16 \u0441\u043c / 12 \u043b",
              "\u0412\u0435\u0441: 2.6 \u043a\u0433 ",
              "\u0422\u043a\u0430\u043d\u044c \u0441 \u0437\u0430\u0449\u0438\u0442\u043e\u0439 SPF 30: \u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0441\u0432\u0435\u0442, \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0423\u0424-\u043b\u0443\u0447\u0438",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): 2000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 2400",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 QUECHUA MH-100",
            img: "DECATHLON2\u0443\u0445.jpg",
            desc: "3-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 130*210*107",
            category: "tent",
            price: 299,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0438 \u043b\u0435\u0433\u043a\u0430\u044f \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435, \u044d\u0442\u0430 \u044d\u043a\u043e-\u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u043b\u0430\u0433\u0435\u0440\u0435\u0439 \u043d\u0430 3 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u043a\u0443\u043f\u043e\u043b\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u043f\u0430\u043b\u0430\u0442\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u043c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u043a\u0435\u043c\u043f\u0438\u043d\u0433\u0430.",
            column: [
              "\u0417\u0430\u0434\u043d\u044f\u044f \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u044f",
              "\u0412\u044b\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0435\u0442\u0435\u0440 \u0441\u0438\u043b\u043e\u0439 5 \u0431\u0430\u043b\u043b\u043e\u0432 (40 \u043a\u043c/\u0447)",
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430 195*210 \u0441\u043c",
              "\u0412\u044b\u0441\u043e\u0442\u0430: 120 \u0441\u043c",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u0440\u043f\u0443\u0441\u0430: 59*17*17 \u0441\u043c / 13 \u043b",
              "\u0412\u0435\u0441: 3.4 \u043a\u0433",
              "\u0422\u043a\u0430\u043d\u044c \u0441 \u0437\u0430\u0449\u0438\u0442\u043e\u0439 SPF 30: \u041f\u0440\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0441\u0432\u0435\u0442, \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0423\u0424-\u043b\u0443\u0447\u0438",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): 2000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 2400",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 QUECHUA MH-100 FRESH&BLACK",
            img: "camping-tent-mh100-2-person-fresh-and-black.jpg",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 130*210*106",
            category: "tent",
            price: 330,
            shortly:
              "\u0414\u0432\u0443\u0445\u043c\u0435\u0441\u0442\u043d\u0443\u044e \u043f\u0430\u043b\u0430\u0442\u043a\u0443 Fresh&Black, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043b\u0435\u0433\u043a\u043e \u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u043a\u0443\u043f\u043e\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0435\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432 \u043b\u0443\u0447\u0448\u0435\u0435 \u043c\u0435\u0441\u0442\u043e \u043f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438.",
            column: [
              "\u0417\u0430\u0434\u043d\u044f\u044f \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u044f",
              "\u0412\u044b\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0435\u0442\u0435\u0440 \u0441\u0438\u043b\u043e\u0439 5 \u0431\u0430\u043b\u043b\u043e\u0432 (40 \u043a\u043c/\u0447)",
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430 130*210 \u0441\u043c",
              "\u0412\u044b\u0441\u043e\u0442\u0430: 106 \u0441\u043c",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u0443\u043c\u043a\u0438: 58*15*14 \u0441\u043c / 10 \u043b",
              "\u0412\u0435\u0441: 3 \u043a\u0433",
              "\u0422\u043a\u0430\u043d\u044c \u0441 \u0437\u0430\u0449\u0438\u0442\u043e\u0439 SPF 30: \u041f\u0440\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0441\u0432\u0435\u0442, \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0423\u0424-\u043b\u0443\u0447\u0438",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): 2000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 2400",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 BTRACE VANG 3",
            img: "BTRACE-VANG3.png",
            desc: "3-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0441 \u0434\u0432\u0443\u043c\u044f \u0432\u0445\u043e\u0434\u0430\u043c\u0438 340*220*120",
            category: "tent",
            price: 687,
            shortly:
              "\u0414\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0441 \u0434\u0432\u0443\u043c\u044f \u0432\u0445\u043e\u0434\u0430\u043c\u0438.\u0412\u0445\u043e\u0434 \u0441\u043f\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d \u043c\u043e\u0441\u043a\u0438\u0442\u043d\u043e\u0439 \u0441\u0435\u0442\u043a\u043e\u0439.\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u044b\u0439 \u0442\u0430\u043c\u0431\u0443\u0440, \u0434\u0432\u0430 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u043f\u0430\u043d\u0430, \u0432\u0441\u0435 \u0448\u0432\u044b \u043f\u0440\u043e\u043a\u043b\u0435\u0435\u043d\u044b. \u0418\u0434\u0435\u0430\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u043e\u0445\u043e\u0434\u043e\u0432 \u0432 \u0432\u0435\u0441\u0435\u043d\u043d\u0435\u0435, \u043b\u0435\u0442\u043d\u0435\u0435 \u0438 \u043e\u0441\u0435\u043d\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: BTRACE",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0430\u0440\u043a\u0430\u0441\u0430: \u0424\u0438\u0431\u0435\u0440\u0433\u043b\u0430\u0441\u0441 8,5 \u043c\u043c",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190T PU W/R",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0442\u0435\u043d\u0442\u0430 (\u043c\u043c \u0432. \u0441\u0442): 4000",
              " \u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0430\u043b\u0430\u0442\u043a\u0438: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440",
              "\u0426\u0432\u0435\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0430\u043b\u0430\u0442\u043a\u0438: \u0416\u0435\u043b\u0442\u044b\u0439",
              "\u0412\u0435\u0441 (\u0433): 3400",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432: 2",
              "\u0423\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u043c\u0443 \u0438\u0437\u043b\u0443\u0447\u0435\u043d\u0438\u044e:\u0414\u0430",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442: 3",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0445\u043e\u0434\u043e\u0432: 2",
              "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0438\u044f: \u041a\u043e\u043b\u044b\u0448\u043a\u0438, \u043e\u0442\u0442\u044f\u0436\u043a\u0438, \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 (\u0441\u043c): 63*16*14",
              "\u0412\u044b\u0441\u043e\u0442\u0430 (\u0441\u043c): 120",
              "\u041d\u0430\u0440\u0443\u0436\u043d\u0438\u0439 \u0433\u0430\u0431\u0430\u0440\u0438\u0442 (\u0441\u043c): 340*220",
              "\u0422\u0430\u043c\u0431\u0443\u0440 (\u0441\u043c): 2*80",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u0430\u044f \u0441\u0443\u043c\u043aa",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 BTRACE TRAVEL 2",
            img: "BTRACE_TRAVEL2.jpg",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0441 \u0434\u0432\u0443\u043c\u044f \u0432\u0445\u043e\u0434\u0430\u043c\u0438 250*220*120",
            category: "tent",
            price: 841,
            shortly:
              "\u0414\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0441 \u0434\u0432\u0443\u043c\u044f \u0432\u0445\u043e\u0434\u0430\u043c\u0438. \u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0442\u0435\u043d\u0442 \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432 \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u043c\u0443 \u0438\u0437\u043b\u0443\u0447\u0435\u043d\u0438\u044e .\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0442\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u043e\u043f\u0438\u0442\u043a\u0443, \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0443\u044e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043e\u0433\u043d\u044f. \u0414\u0432\u0430 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u043f\u0430\u043d\u0430. \u0421\u0432\u0435\u0442\u043e\u043e\u0442\u0440\u0430\u0436\u0430\u044e\u0449\u0438\u0435 \u043e\u0442\u0442\u044f\u0436\u043a\u0438 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u0438. \u0412\u0441\u0435 \u0448\u0432\u044b \u043f\u0440\u043e\u043a\u043b\u0435\u0435\u043d\u044b. \u0418\u0434\u0435\u0430\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u043e\u0445\u043e\u0434\u043e\u0432 \u0432 \u0432\u0435\u0441\u0435\u043d\u043d\u0435\u0435, \u043b\u0435\u0442\u043d\u0435\u0435 \u0438 \u043e\u0441\u0435\u043d\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: BTRACE",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0430\u0440\u043a\u0430\u0441\u0430: Durapol 8,5 \u043c\u043c",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190\u0422 RipStop",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0442\u0435\u043d\u0442\u0430 (\u043c\u043c \u0432. \u0441\u0442): 6000",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u043d\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190\u0422",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 8000",
              " \u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0430\u043b\u0430\u0442\u043a\u0438: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440",
              "\u0426\u0432\u0435\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0430\u043b\u0430\u0442\u043a\u0438: \u0416\u0435\u043b\u0442\u044b\u0439",
              "\u0412\u0435\u0441 (\u0433): 3750",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432: 2",
              "\u0423\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u043c\u0443 \u0438\u0437\u043b\u0443\u0447\u0435\u043d\u0438\u044e:\u0414\u0430",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442: 2",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0445\u043e\u0434\u043e\u0432: 2",
              "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0438\u044f: \u041a\u043e\u043b\u044b\u0448\u043a\u0438, \u043e\u0442\u0442\u044f\u0436\u043a\u0438, \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 (\u0441\u043c): 57*17*14,5",
              "\u0412\u044b\u0441\u043e\u0442\u0430 (\u0441\u043c): 120",
              "\u041d\u0430\u0440\u0443\u0436\u043d\u0438\u0439 \u0433\u0430\u0431\u0430\u0440\u0438\u0442 (\u0441\u043c): 250*220",
              "\u0422\u0430\u043c\u0431\u0443\u0440 (\u0441\u043c): 2*50",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430:\u0422\u043a\u0430\u043d\u0435\u0432\u0430\u044f \u0441\u0443\u043c\u043a\u0430",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 BTRACE TRAVEL 3",
            img: "BTRACE_TRAVEL3.jpg",
            desc: "3-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0441 \u0434\u0432\u0443\u043c\u044f \u0432\u0445\u043e\u0434\u0430\u043c\u0438 320*220*120",
            category: "tent",
            price: 939,
            shortly:
              "\u0414\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0441 \u0434\u0432\u0443\u043c\u044f \u0432\u0445\u043e\u0434\u0430\u043c\u0438. \u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0442\u0435\u043d\u0442 \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432 \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u043c\u0443 \u0438\u0437\u043b\u0443\u0447\u0435\u043d\u0438\u044e. \u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0442\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u043e\u043f\u0438\u0442\u043a\u0443, \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0443\u044e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043e\u0433\u043d\u044f. \u0414\u0432\u0430 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u043f\u0430\u043d\u0430. \u0421\u0432\u0435\u0442\u043e\u043e\u0442\u0440\u0430\u0436\u0430\u044e\u0449\u0438\u0435 \u043e\u0442\u0442\u044f\u0436\u043a\u0438 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u0438. \u0412\u0441\u0435 \u0448\u0432\u044b \u043f\u0440\u043e\u043a\u043b\u0435\u0435\u043d\u044b. \u0418\u0434\u0435\u0430\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u043e\u0445\u043e\u0434\u043e\u0432 \u0432 \u0432\u0435\u0441\u0435\u043d\u043d\u0435\u0435, \u043b\u0435\u0442\u043d\u0435\u0435 \u0438 \u043e\u0441\u0435\u043d\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: BTRACE",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0430\u0440\u043a\u0430\u0441\u0430: Durapol 8,5 \u043c\u043c",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190\u0422 RipStop",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0442\u0435\u043d\u0442\u0430 (\u043c\u043c \u0432. \u0441\u0442): 6000",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u043d\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190\u0422",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 8000",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0430\u043b\u0430\u0442\u043a\u0438: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440",
              "\u0426\u0432\u0435\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0430\u043b\u0430\u0442\u043a\u0438: \u0416\u0435\u043b\u0442\u044b\u0439",
              "\u0412\u0435\u0441 (\u0433): 3900",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432: 2",
              "\u0423\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u043c\u0443 \u0438\u0437\u043b\u0443\u0447\u0435\u043d\u0438\u044e: \u0414\u0430",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442: 3",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0445\u043e\u0434\u043e\u0432: 2",
              "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0438\u044f: \u041a\u043e\u043b\u044b\u0448\u043a\u0438, \u043e\u0442\u0442\u044f\u0436\u043a\u0438, \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 (\u0441\u043c): 57*17*14,5",
              "\u0412\u044b\u0441\u043e\u0442\u0430 (\u0441\u043c):120",
              "\u041d\u0430\u0440\u0443\u0436\u043d\u0438\u0439 \u0433\u0430\u0431\u0430\u0440\u0438\u0442 (\u0441\u043c):320*220",
              "\u0422\u0430\u043c\u0431\u0443\u0440 (\u0441\u043c): 2*70",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u0430\u044f \u0441\u0443\u043c\u043a\u0430",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 BTRACE CHALLENGE 2",
            img: "BTRACE_CHALLENGE2.webp",
            desc: "3-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0441 \u0434\u0432\u0443\u043c\u044f \u0432\u0445\u043e\u0434\u0430\u043c\u0438 300*210*120",
            category: "tent",
            price: 1021,
            shortly:
              "\u0414\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0441 \u0434\u0432\u0443\u043c\u044f \u0432\u0445\u043e\u0434\u0430\u043c\u0438. \u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0442\u0435\u043d\u0442 \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432 \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u043c\u0443 \u0438\u0437\u043b\u0443\u0447\u0435\u043d\u0438\u044e. \u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0442\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u043e\u043f\u0438\u0442\u043a\u0443, \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0443\u044e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043e\u0433\u043d\u044f. \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u043c\u0435\u0441\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u0430\u043c\u0431\u0443\u0440. \u0414\u0432\u0430 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u043f\u0430\u043d\u0430. \u0421\u0432\u0435\u0442\u043e\u043e\u0442\u0440\u0430\u0436\u0430\u044e\u0449\u0438\u0435 \u043e\u0442\u0442\u044f\u0436\u043a\u0438 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u0438. \u0412\u0441\u0435 \u0448\u0432\u044b \u043f\u0440\u043e\u043a\u043b\u0435\u0435\u043d\u044b. \u0418\u0434\u0435\u0430\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u043e\u0445\u043e\u0434\u043e\u0432 \u0432 \u0432\u0435\u0441\u0435\u043d\u043d\u0435\u0435, \u043b\u0435\u0442\u043d\u0435\u0435 \u0438 \u043e\u0441\u0435\u043d\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: BTRACE",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0430\u0440\u043a\u0430\u0441\u0430: Durapol 8,5 \u043c\u043c",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190\u0422 RipStop",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0442\u0435\u043d\u0442\u0430 (\u043c\u043c \u0432. \u0441\u0442): 6000",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u043d\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190\u0422",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 8000",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0430\u043b\u0430\u0442\u043a\u0438: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440",
              "\u0426\u0432\u0435\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0430\u043b\u0430\u0442\u043a\u0438: \u0416\u0435\u043b\u0442\u044b\u0439",
              "\u0412\u0435\u0441 (\u0433): 4000",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432: 2",
              "\u0423\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c \u043a \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u043c\u0443 \u0438\u0437\u043b\u0443\u0447\u0435\u043d\u0438\u044e: \u0414\u0430",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442: 2",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0445\u043e\u0434\u043e\u0432: 2",
              "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0438\u044f: \u041a\u043e\u043b\u044b\u0448\u043a\u0438, \u043e\u0442\u0442\u044f\u0436\u043a\u0438, \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 (\u0441\u043c): 57*17,5*15,5",
              "\u0412\u044b\u0441\u043e\u0442\u0430 (\u0441\u043c): 120",
              "\u041d\u0430\u0440\u0443\u0436\u043d\u0438\u0439 \u0433\u0430\u0431\u0430\u0440\u0438\u0442 (\u0441\u043c): 300*210",
              "\u0422\u0430\u043c\u0431\u0443\u0440 (\u0441\u043c): 1*100, 1*50",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u0430\u044f \u0441\u0443\u043c\u043a\u0430",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a",
            img: "sleeping_bag_green.jpg",
            desc: "195*60\u0441\u043c \u043e\u0442 +15 \u0434\u043e 0",
            category: "sleeping bag",
            price: 90,
            column: [
              "\u0412\u0435\u0441: 960\u0433\u0440",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0435\u0448\u043d\u0438\u0439: 35*26\u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a QUECHUA ARPENAZ",
            img: "DECATHLON_slipping_bag.avif",
            desc: "190*72\u0441\u043c \u043e\u0442 +20 \u0434\u043e +15",
            category: "sleeping bag",
            price: 102,
            shortly:
              "\u042d\u0442\u043e\u0442 \u044d\u043a\u043e-\u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0442\u044f\u0442 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e \u0441\u043f\u0430\u0442\u044c \u043f\u0440\u0438 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u0434\u043e 20\xb0C \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0435\u043c\u043f\u0438\u043d\u0433\u0430.",
            column: [
              "\u0412\u0435\u0441: 755\u0433\u0440",
              "\u0420\u0430\u0437\u043c\u0435\u0440: 190*72 \u0441\u043c | \u041c\u043e\u043b\u043d\u0438\u044f \u043e\u0442 \u0448\u0435\u0438",
              "\u041e\u0431\u044a\u0435\u043c: 9 \u043b",
              "\u041d\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a CAMPSOR",
            img: "sleeping_bag_red.jpg",
            desc: "210*66\u0441\u043c \u043e\u0442 +10 \u0434\u043e 0",
            category: "sleeping bag",
            price: 160,
            column: [
              "\u0412\u0435\u0441: 1300\u0433\u0440",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0435\u0448\u043d\u0438\u0439: 33*24\u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a DESERT FOX",
            img: "desert-fox-sleeping.webp",
            desc: "180+20*70\u0441\u043c \u043e\u0442 +15 \u0434\u043e -5",
            category: "sleeping bag",
            price: 170,
            column: [
              "\u0412\u0435\u0441: 1370\u0433\u0440",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440\u043d, \u043f\u043e\u043b\u0438\u044d\u0444\u0440\u043d\u043e\u0435 \u0432\u043e\u043b\u043e\u043a\u043d\u043e",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a \u0414\u0415\u041c\u0418\u0421\u0415\u0417\u041e\u041d\u041d\u042b\u0419",
            img: "sleeping_bag_blie.jpg",
            desc: "195*60\u0441\u043c \u043e\u0442 +10",
            category: "sleeping bag",
            price: 125,
            column: [
              "\u0412\u0435\u0441: 1060\u0433\u0440",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0435\u0448\u043d\u0438\u0439: 40*25\u0441\u043c",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440\u043d, \u0421\u0418\u041d\u0422\u0415\u041f\u041e\u041d",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a BTRACE MEGA \u041b\u0415\u0412\u042b\u0419",
            img: "sleeping_bag_BTRACE_MEGA.webp",
            desc: "\u0423\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044c 195(+35)*100 \u043e\u0442 0 \u0434\u043e -21",
            category: "sleeping bag",
            price: 659,
            shortly:
              "\u0423\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044c.\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0443\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f lzoShell 40.\u0420\u0430\u0437\u043d\u043e\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u0443\u043f\u0435\u0440\u0442\u043e\u043d\u043a\u0438\u0435 \u043f\u043e\u043b\u044b\u0435 \u0432\u043e\u043b\u043e\u043a\u043d\u0430 \u0443\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044f lzoShell 4D \u0441\u043e\u0437\u0434\u0430\u044e\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043a\u0440\u043e\u043f\u043e\u043b\u043e\u0441\u0442\u0435\u0439, \u0433\u0434\u0435 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u0435\u043f\u043b\u044b\u0439 \u0432\u043e\u0437\u0434\u0443\u0445. \u0412\u043e\u043b\u043e\u043a\u043d\u0430 \u0443\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u0441\u0438\u043d\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u043c\u043e\u043b\u043e\u0439, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0443\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044c lzoShell 4D \u0431\u043e\u043b\u0435\u0435 \u0432\u043e\u0437\u0434\u0443\u0448\u043d\u044b\u043c, \u0434\u043e\u043b\u0433\u043e\u0432\u0435\u0447\u043d\u044b\u043c \u0438 \u043d\u0435\u043f\u0440\u0438\u0445\u043e\u0442\u043b\u0438\u0432\u044b\u043c \u0432 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438. \u041d\u0438\u0437\u043a\u0438\u0439 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0442\u0435\u043f\u043b\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u043e\u0441\u0442\u0438, \u0432\u044b\u0441\u043e\u043a\u0438\u0435 \u0433\u0438\u0434\u0440\u043e\u0444\u043e\u0431\u043d\u044b\u0435 \u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u0435\u043b\u0430\u044e\u0442 \u0443\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044c lzoShell 4D \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u043b\u0443\u0447\u0448\u0438\u0445 \u0443\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u0435\u0439 \u0434\u043b\u044f \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0445 \u043c\u0435\u0448\u043a\u043e\u0432. \u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441\u043f\u0430\u043b\u044c\u043d\u0438\u043a\u0430 Polyester 190\u0422 \u0441 \u043f\u043b\u0435\u0442\u0435\u043d\u0438\u0435\u043c Rip Stop, \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0430\u0440\u043e\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u0430\u044f \u0442\u043a\u0430\u043d\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0430\u0440 \u043d\u0435 \u043a\u043e\u043d\u0434\u0435\u043d\u0441\u0438\u0440\u0443\u044f \u0432\u043b\u0430\u0433\u0443 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u043f\u0430\u043b\u044c\u043d\u0438\u043a\u0430. \u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043d\u0438\u0436\u043d\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441\u043f\u0430\u043b\u044c\u043d\u0438\u043a\u0430 Polyester 190\u0422 \u0441 \u043f\u043b\u0435\u0442\u0435\u043d\u0438\u0435\u043c Diamond Rip Stop \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0432\u043e\u0434\u043e\u043d\u0435\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u044b\u043c \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435\u043c PU 250 \u043c\u043c \u0432\u043e\u0434\u044f\u043d\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0430, \u043d\u0430\u0434\u0451\u0436\u043d\u043e \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0441\u043f\u0430\u043b\u044c\u043d\u0438\u043a \u043e\u0442 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f \u0438 \u0432\u043b\u0430\u0433\u0438. \u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0424\u043b\u0430\u043d\u0435\u043b\u044c 100% Cotton - \u0448\u0435\u043b\u043a\u043e\u0432\u0438\u0441\u0442\u0430\u044f, \u043c\u044f\u0433\u043a\u0430\u044f \u0438 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u0430\u044f \u0442\u043a\u0430\u043d\u044c.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: BTRACE",
              "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u044d\u043a\u0441\u0442\u0440\u0438\u043c\u0430: -21",
              "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430: 0",
              "\u0412\u0435\u0441 (\u0433):3210",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u043d\u0435\u0448\u043d\u0438\u0439: \u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 190\u0422 RipStop/\u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 190\u0422 Diamond RipStop WR",
              "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: 100% \u0445\u043b\u043e\u043f\u043e\u043a (\u0444\u043b\u0430\u043d\u0435\u043b\u044c)",
              "\u0423\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044c: Izoshell 4D 2*150 \u0433/\u043c2",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 (\u0441\u043c): 56*25*25",
              "\u0420\u0430\u0437\u043c\u0435\u0440 (\u0441\u043c): (195+35)\u0445100",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a BTRACE ZERO L SIZE \u041f\u0420\u0410\u0412\u042b\u0419",
            img: "BTRACE_ZERO_L.png",
            desc: "\u0421\u0443\u043f\u0435\u0440 \u043b\u0451\u0433\u043a\u0438\u0439 220*90(55) \u043e\u0442 +15 \u0434\u043e 0 ",
            category: "sleeping bag",
            price: 449,
            shortly:
              "\u041d\u043e\u0432\u0438\u043d\u043a\u0430 \u0441\u0435\u0437\u043e\u043d\u0430 2021 - \u0441\u0443\u043f\u0435\u0440 \u043b\u0451\u0433\u043a\u0438\u0439 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a-\u043a\u043e\u043a\u043e\u043d BTrace Zero. \u041e\u043d \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u0434\u043b\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u0432 \u0442\u0435\u043f\u043b\u0443\u044e \u043f\u043e\u0433\u043e\u0434\u0443. \u0417\u0430\u043d\u0438\u043c\u0430\u044f \u0441\u043e\u0432\u0441\u0435\u043c \u043c\u0430\u043b\u043e \u043c\u0435\u0441\u0442\u0430, \u044d\u0442\u043e\u0442 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0441 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043e\u043c \u043f\u0435\u0440\u0435\u043d\u043e\u0447\u0435\u0432\u0430\u0442\u044c \u0432 \u043f\u043e\u0445\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445. \u041a\u0430\u043a \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0448\u043a\u0438-\u043a\u043e\u043a\u043e\u043d\u044b \u044d\u0442\u043e\u0439 \u0441\u0435\u0440\u0438\u0438, BTrace Zero \u0438\u043c\u0435\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0441\u0442\u0451\u0433\u0438\u0432\u0430\u0442\u044c\u0441\u044f. \u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u0437 2\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432, \u0447\u0442\u043e\u0431 \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c \u0435\u0449\u0451 \u043c\u0435\u0441\u0442\u0430 \u0438 \u0432\u0435\u0441\u0430, \u0435\u0441\u043b\u0438 \u0440\u043e\u0441\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u043c \u043c\u0435\u0448\u043a\u043e\u043c \u043c\u0435\u043d\u044c\u0448\u0435\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c:BTRACE",
              "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u044d\u043a\u0441\u0442\u0440\u0438\u043c\u0430:0",
              "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430:+5",
              "\u0412\u0435\u0441 (\u0433):800",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u043d\u0435\u0448\u043d\u0438\u0439: \u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 20D 380\u0422 Nylon RipStop WR",
              "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 210T Soft Nylon",
              "\u0423\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044c: Izoshell Pro 2*80 \u0433/\u043c2",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 (\u0441\u043c): 52*25*25",
              "\u0420\u0430\u0437\u043c\u0435\u0440 (\u0441\u043c): 220*90(55)",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a BTRACE ZERO S SIZE \u041f\u0420\u0410\u0412\u042b\u0419",
            img: "BTRACE_ZERO_S.png",
            desc: "\u0421\u0443\u043f\u0435\u0440 \u043b\u0451\u0433\u043a\u0438\u0439 190*80(50) \u043e\u0442 +15 \u0434\u043e 0 ",
            category: "sleeping bag",
            price: 399,
            shortly:
              "\u041d\u043e\u0432\u0438\u043d\u043a\u0430 \u0441\u0435\u0437\u043e\u043d\u0430 2021 - \u0441\u0443\u043f\u0435\u0440 \u043b\u0451\u0433\u043a\u0438\u0439 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a-\u043a\u043e\u043a\u043e\u043d BTrace Zero. \u041e\u043d \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u0434\u043b\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u0432 \u0442\u0435\u043f\u043b\u0443\u044e \u043f\u043e\u0433\u043e\u0434\u0443. \u0417\u0430\u043d\u0438\u043c\u0430\u044f \u0441\u043e\u0432\u0441\u0435\u043c \u043c\u0430\u043b\u043e \u043c\u0435\u0441\u0442\u0430, \u044d\u0442\u043e\u0442 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0441 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043e\u043c \u043f\u0435\u0440\u0435\u043d\u043e\u0447\u0435\u0432\u0430\u0442\u044c \u0432 \u043f\u043e\u0445\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445. \u041a\u0430\u043a \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0448\u043a\u0438-\u043a\u043e\u043a\u043e\u043d\u044b \u044d\u0442\u043e\u0439 \u0441\u0435\u0440\u0438\u0438, BTrace Zero \u0438\u043c\u0435\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0441\u0442\u0451\u0433\u0438\u0432\u0430\u0442\u044c\u0441\u044f. \u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u0437 2\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432, \u0447\u0442\u043e\u0431 \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c \u0435\u0449\u0451 \u043c\u0435\u0441\u0442\u0430 \u0438 \u0432\u0435\u0441\u0430, \u0435\u0441\u043b\u0438 \u0440\u043e\u0441\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u043c \u043c\u0435\u0448\u043a\u043e\u043c \u043c\u0435\u043d\u044c\u0448\u0435\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c:BTRACE",
              "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u044d\u043a\u0441\u0442\u0440\u0438\u043c\u0430:0",
              "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430:+15",
              "\u0412\u0435\u0441 (\u0433):600",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u043d\u0435\u0448\u043d\u0438\u0439: \u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 20D 380\u0422 Nylon RipStop WR",
              "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 210T Soft Nylon",
              "\u0423\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044c: Izoshell Pro 2*80 \u0433/\u043c2",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 (\u0441\u043c): 52\u044525\u044525",
              "\u0420\u0430\u0437\u043c\u0435\u0440 (\u0441\u043c): 190*80(50)",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419 ",
            img: "DECATHLON_pinc.jpg",
            desc: "50L Forclaz",
            category: "backpack",
            price: 192,
            shortly:
              "\u042d\u0442\u043e\u0442 \u0440\u044e\u043a\u0437\u0430\u043a \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u043f\u043e\u0445\u043e\u0434 \u043f\u043e \u0433\u043e\u0440\u0438\u0441\u0442\u043e\u0439 \u043c\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u0438\u043b\u0438 \u0445\u043e\u0442\u044f\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u043a\u043e\u043d\u0435\u0446 \u0441\u0432\u0435\u0442\u0430 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u0432\u043e\u0435 \u043f\u0435\u0440\u0432\u043e\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u044e\u043a\u0437\u0430\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u0435\u043d \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0441\u0432\u043e\u0438\u043c \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u043c \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u0441\u043f\u0435\u0440\u0435\u0434\u0438, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u0431\u044a\u0435\u043c\u0443 50 \u043b\u0438\u0442\u0440\u043e\u0432 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0445\u043e\u0431\u0431\u0438-\u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 50 \u043b",
              "\u0412\u0435\u0441: 1.4 \u043a\u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b: 62*32*24",
              "\u0418\u0437\u043d\u043e\u0441\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c: \u0422\u043a\u0430\u043d\u044c \u0441 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435\u043c P600 \u0434\u043b\u044f \u0443\u0441\u0438\u043b\u0435\u043d\u0438\u044f \u0441 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b",
              "\u041e\u0442\u0441\u0435\u043a\u0438: 3 \u0441\u043d\u0430\u0440\u0443\u0436\u0438, 1 \u0432\u043d\u0443\u0442\u0440\u0438",
              "\u041c\u0430\u0441\u0441\u0430: 1,4 \u043a\u0433",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419 CAMPSOR",
            img: "\u0421ampsor_blue.jpg",
            desc: " 75+10L \u0412 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0435 \u0434\u043e\u0436\u0434\u0435\u0432\u0438\u043a. \u0416\u0435\u0441\u0442\u043a\u0430\u044f, \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u043c\u0430\u044f \u0441\u043f\u0438\u043d\u043a\u0430\u044e",
            category: "backpack",
            price: 348,
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 75+10 \u043b",
              "\u0426\u0432\u0435\u0442: \u0421\u0438\u043d\u0438\u0439",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: \u041d\u0435\u0439\u043b\u043e\u043d",
              "\u0412\u0435\u0441:1,55\u043a\u0433",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "Cakard_black_backpack.jpg",
            desc: "95+10L \u0421akard ",
            category: "backpack",
            price: 210,
            column: ["\u041e\u0431\u044a\u0435\u043c: 95+10 \u043b"],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "thenorth\u0441_grin.webp",
            desc: "60L THE NORTH FACE(REPLICA) ",
            category: "backpack",
            price: 199,
            shortly:
              "\u0422\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u044e\u043a\u0437\u0430\u043a North Face 60L \u043e\u0442\u043b\u0438\u0447\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0431\u044e\u0434\u0436\u0435\u0442\u043d\u043e\u0433\u043e \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0440\u044e\u043a\u0437\u0430\u043a\u0430. \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u0444\u043e\u0440\u0442 \u0432 \u043b\u044e\u0431\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445. \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043b\u0435\u0433\u043a\u043e \u0438 \u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043f\u0435\u0440\u0435\u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0435\u0441. \u0414\u044b\u0448\u0430\u0449\u0430\u044f \u0441\u043f\u0438\u043d\u0430 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u043e\u0442\u0432\u043e\u0434\u043e\u043c \u0432\u043b\u0430\u0433\u0438. \u0411\u043e\u043a\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u043f\u044b, \u0441\u0442\u0430\u0431\u0438\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442 \u0433\u0440\u0443\u0437 \u043f\u0440\u0438 \u043d\u0435\u043f\u043e\u043b\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u044e\u043a\u0437\u0430\u043a\u0430 \u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u044e\u0442 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0433\u0440\u0443\u0437\u0430.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 60 \u043b",
              "\u0414\u043b\u0438\u043d\u0430: 70 \u0441\u043c",
              "\u0413\u043b\u0443\u0431\u0438\u043d\u0430: 25 \u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "THENORTHFACE_red.jpg",
            desc: "55L THE NORTH FACE(REPLICA) ",
            category: "backpack",
            price: 182,
            shortly:
              "\u0422\u0440\u0435\u043a\u043a\u0438\u043d\u0433\u043e\u0432\u044b\u0439 \u0440\u044e\u043a\u0437\u0430\u043a \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u043e\u0431\u044a\u0435\u043c\u0430 TNF Terra 55 \u043e\u0442\u043b\u0438\u0447\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439. \u041b\u044f\u043c\u043a\u0430\u043c \u0440\u044e\u043a\u0437\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043e\u0434 \u0441\u0432\u043e\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b.",
            column: [
              "\u0412\u0435\u0441: 1.8 \u043a\u0433",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: \u041d\u0435\u0439\u043b\u043e\u043d",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "THENORTHFACE_blue.jpg",
            desc: "50L THE NORTH FACE(REPLICA) ",
            category: "backpack",
            price: 172,
            shortly:
              "\u041b\u0435\u0433\u043a\u0438\u0439, \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u0439 \u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0440\u044e\u043a\u0437\u0430\u043a \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u043e\u0434\u043d\u0435\u0432\u043d\u044b\u0445 \u0432\u044b\u0445\u043e\u0434\u043e\u0432 \u0438 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u043d\u0430\u043b\u0435\u0433\u043a\u0435. \u0420\u044e\u043a\u0437\u0430\u043a NorthFace \u043e\u0431\u043b\u0430\u0434\u0430\u044f \u043e\u0431\u044a\u0435\u043c\u043e\u043c 50\u043b, \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442 \u0434\u043b\u044f \u0441\u043a\u0430\u043b\u043e\u043b\u0430\u0437\u0430\u043d\u0438\u044f, \u043f\u043e\u0445\u043e\u0434\u043e\u0432 \u0438 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 50\u043b",
              "\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f: \u041c\u044f\u0433\u043a\u0438\u0439 (\u0431\u0435\u0437 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0436\u0435\u0441\u0442\u043a\u043e\u0441\u0442\u0438)",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419 DEUTER FUTURA PRO",
            img: "backpack_65.jpg",
            desc: "65L (REPLICA). \u0412 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0435 \u0434\u043e\u0436\u0434\u0435\u0432\u0438\u043a.",
            category: "backpack",
            price: 310,
            shortly:
              "\u041b\u0435\u0433\u043a\u0438\u0439, \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u0439 \u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0440\u044e\u043a\u0437\u0430\u043a \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u043e\u0434\u043d\u0435\u0432\u043d\u044b\u0445 \u0432\u044b\u0445\u043e\u0434\u043e\u0432 \u0438 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u043d\u0430\u043b\u0435\u0433\u043a\u0435.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 65\u043b",
              "\u0412\u0435\u0441:1,7\u043a\u0433",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419 QUECHUA NH-100",
            img: "backpack30L.jpg",
            desc: "30L \u044d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u0440\u044e\u043a\u0437\u0430\u043a, \u0438\u0437\u043d\u043e\u0441\u043e\u0441\u0442\u043e\u0439\u043a\u0438\u0439 ",
            category: "backpack",
            price: 98,
            shortly:
              "\u0421\u043f\u0438\u043d\u043a\u0430 \u0438 \u043b\u044f\u043c\u043a\u0438 \u0441 \u043d\u0430\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438, 2 \u043e\u043f\u043e\u0440\u043d\u044b\u0435 \u043f\u0435\u0442\u043b\u0438 \u043d\u0430 \u0440\u0435\u043c\u043d\u044f\u0445, \u043d\u0430\u0433\u0440\u0443\u0434\u043d\u0430\u044f \u043b\u044f\u043c\u043a\u0430. \u0411\u043e\u043a\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u044b\u0435 \u0440\u0435\u043c\u043d\u0438 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 30\u043b",
              "\u0412\u0435\u0441:0,62\u043a\u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b:50*26*20",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419 FORCLAZ",
            img: "quechuaforclaz40+10.jpg",
            desc: "40+10L \u0420\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u043c\u0430\u044f \u0441\u043f\u0438\u043a\u0430 140/150/160/170/\u0441\u043c",
            category: "backpack",
            price: 319,
            shortly:
              "\u0418\u0437\u043d\u043e\u0441\u043e\u0441\u0442\u043e\u0439\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u0443\u0441\u0438\u043b\u0435\u043d\u043d\u043e\u0435 \u0434\u043d\u0438\u0449\u0435. \u0421\u043f\u0438\u043d\u043a\u0430 \u0438 \u043b\u044f\u043c\u043a\u0438 \u0441 \u043d\u0430\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438, 2 \u043e\u043f\u043e\u0440\u043d\u044b\u0435 \u043f\u0435\u0442\u043b\u0438 \u043d\u0430 \u0440\u0435\u043c\u043d\u044f\u0445, \u043d\u0430\u0433\u0440\u0443\u0434\u043d\u0430\u044f \u043b\u044f\u043c\u043a\u0430. \u0411\u043e\u043a\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u044b\u0435 \u0440\u0435\u043c\u043d\u0438 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 40+10\u043b",
              "\u0412\u0435\u0441:1,4\u043a\u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b:64*26*30",
            ],
          },
          {
            id: xn(),
            title: "\u0420\u042e\u041a\u0417\u0410\u041a QUECHUA",
            img: "backpack10.webp",
            desc: "10L \u041c\u044f\u0433\u043a\u0430\u044f \u0441\u043f\u0438\u043d\u043a\u0430 \u0438 \u043b\u044f\u043c\u043a\u0438. \u041f\u0440\u043e\u0447\u043d\u044b\u0435, \u0441\u0442\u043e\u0439\u043a\u0438\u0435 \u043a \u0438\u0441\u0442\u0438\u0440\u0430\u043d\u0438\u044e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b.",
            category: "backpack",
            price: 39,
            shortly:
              "\u0420\u044e\u043a\u0437\u0430\u043a \u043e\u0431\u044a\u0435\u043c\u043e\u043c 10 \u043b\u0438\u0442\u0440\u043e\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0432\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043f\u0435\u0440\u0432\u043e\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043d\u0430 \u0432\u0441\u0435\u0445 \u0442\u0440\u043e\u043f\u0430\u0445 \u0441 \u043f\u043e\u043b\u043e\u0433\u0438\u043c\u0438 \u0441\u043a\u043b\u043e\u043d\u0430\u043c\u0438.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 10\u043b",
              "\u0412\u0435\u0441: 0,145\u043a\u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b:39*21*12",
            ],
          },
          {
            id: xn(),
            title:
              "\u0424\u041e\u041d\u0410\u0420\u042c \u041d\u0410\u041b\u041e\u0411\u041d\u042b\u0419",
            img: "lantern_blue.jpg",
            desc: "X-BALOG BL-539 ",
            category: "lantern",
            price: 16,
            column: [
              "\u041f\u0438\u0442\u0430\u043d\u0438\u0435:3 \u0448\u0442 \u0410\u0410\u0410",
              "\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044b:55*45*43 ",
              "\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438 \u0440\u0435\u043c\u0435\u0448\u043e\u043a \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0424\u041e\u041d\u0410\u0420\u042c \u041d\u0410\u041b\u041e\u0411\u041d\u042b\u0419 TREKKING ONNIGHT 100",
            img: "lantern_onnight.jpg",
            desc: "\u0414\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c  \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f: 25\u043c (80 \u043b\u044e\u043c\u0435\u043d). 3 \u0440\u0435\u0436\u0438\u043c\u0430 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f: \u043a\u0440\u0430\u0441\u043d\u044b\u0439, \u044d\u043a\u043e-\u0431\u0435\u043b\u044b\u0439, \u044f\u0440\u043a\u0438\u0439 \u0431\u0435\u043b\u044b\u0439.",
            category: "lantern",
            price: 46,
            column: [
              "\u041f\u0438\u0442\u0430\u043d\u0438\u0435:3 \u0448\u0442 \u0410\u0410\u0410(\u0432 \u043d\u0430\u0431\u043e\u0440\u0435)",
              "\u0410\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0441\u0442\u044c: 30 \u0447 \u0432 \u044d\u043a\u043e \u0440\u0435\u0436\u0438\u043c\u0435.10 \u0447 \u0432 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435",
              "\u0412\u0435\u0441: 80\u0433",
              "\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0431\u0440\u044b\u0437\u0433 \u0438 \u0443\u0434\u0430\u0440\u043e\u0432",
            ],
          },
          {
            id: xn(),
            title:
              "\u0424\u041e\u041d\u0410\u0420\u042c \u041d\u0410\u041b\u041e\u0411\u041d\u042b\u0419 30 LUMEN ONNIGHT 50",
            img: "lantern_black.jpg",
            desc: "\u0414\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c  \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f: 15\u043c (30 \u043b\u044e\u043c\u0435\u043d). 1 \u0440\u0435\u0436\u0438\u043c\u0430 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f.",
            category: "lantern",
            price: 35,
            column: [
              "\u041f\u0438\u0442\u0430\u043d\u0438\u0435:2 \u0448\u0442 \u0410\u0410\u0410(\u0432 \u043d\u0430\u0431\u043e\u0440\u0435)",
              "\u0410\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0441\u0442\u044c: 25 \u0447\u0430\u0441\u043e\u0432",
              "\u0412\u0435\u0441: 65\u0433",
              "\u041e\u0434\u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0430 ON/OFF \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043f\u0435\u0440\u0447\u0430\u0442\u043a\u0430\u0445 \u0438\u043b\u0438 \u0440\u0443\u043a\u0430\u0432\u0438\u0446\u0430\u0445",
              "\u0420\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0440\u0435\u043c\u0435\u0448\u043e\u043a",
              "\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0431\u0440\u044b\u0437\u0433 \u0438 \u0443\u0434\u0430\u0440\u043e\u0432",
            ],
          },
          {
            id: xn(),
            title:
              "USB-\u0424\u041e\u041d\u0410\u0420\u042c \u041d\u0410\u041b\u041e\u0411\u041d\u042b\u0419 FORCLAZ HL100",
            img: "lantern-usb.jpg",
            desc: "\u0414\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c  \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f: 25\u043c (120 \u043b\u044e\u043c\u0435\u043d). 3 \u0440\u0435\u0436\u0438\u043c\u0430 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f: \u043a\u0440\u0430\u0441\u043d\u044b\u0439, \u044d\u043a\u043e-\u0431\u0435\u043b\u044b\u0439, \u044f\u0440\u043a\u0438\u0439 \u0431\u0435\u043b\u044b\u0439..",
            category: "lantern",
            price: 35,
            column: [
              "\u041f\u0438\u0442\u0430\u043d\u0438\u0435: \u0437\u0430\u0440\u044f\u0434\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0438\u043a\u0440\u043e-USB",
              "\u0412\u0440\u0435\u043c\u044f \u0437\u0430\u0440\u044f\u0434\u043a\u0438: \u043e\u043a\u043e\u043b\u043e 2,5 - 3 \u0447",
              "\u0410\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0441\u0442\u044c: 17 \u0447 \u0432 \u044d\u043a\u043e \u0440\u0435\u0436\u0438\u043c\u0435. 4 \u0447 \u0432 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435",
              "\u0412\u0435\u0441: 72\u0433",
              "\u0420\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0440\u0435\u043c\u0435\u0448\u043e\u043a",
              "\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0431\u0440\u044b\u0437\u0433 \u0438 \u0443\u0434\u0430\u0440\u043e\u0432",
            ],
          },
          {
            id: xn(),
            title:
              "\u0424\u041e\u041d\u0410\u0420\u0418\u041a \u041d\u0410\u041b\u041e\u0411\u041d\u042b\u0419",
            img: "lantern_green.jpg",
            desc: "\u0423\u0417-918 ",
            category: "lantern",
            price: 24,
            column: [
              "2 \u0440\u0435\u0436\u0438\u043c\u0430 \u0440\u0430\u0431\u043e\u0442\u044b",
              "\u041f\u0438\u0442\u0430\u043d\u0438\u0435 \u043e\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0439 \u0431\u0430\u0442\u0430\u0440\u0435\u0438",
              "USB-\u043a\u0430\u0431\u0435\u043b\u044c \u0432 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0435",
              "\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0413\u0410\u0417 \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "gas450.jpg",
            desc: "Nurgaz 450GR ",
            category: "gas/burner",
            price: 52,
            column: [
              "\u0420\u0435\u0437\u044c\u0431\u043e\u0432\u043e\u0439",
              "\u041a\u043b\u0430\u043f\u0430\u043d \u043c\u0438\u0440\u043e\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441 7/16",
              "\u0414\u0432\u043e\u0439\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u043f\u043b\u043e\u0442\u043d\u0435\u043d\u0438\u0439",
              "30% \u043f\u0440\u043e\u043f\u0430\u043d/70% \u0431\u0443\u0442\u0430\u043d",
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e: \u0422\u0443\u0440\u0446\u0438\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0413\u0410\u0417 \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "gas230.jpg",
            desc: "Nurgaz 230GR ",
            category: "gas/burner",
            price: 36,
            column: [
              "\u0420\u0435\u0437\u044c\u0431\u043e\u0432\u043e\u0439",
              "\u041a\u043b\u0430\u043f\u0430\u043d \u043c\u0438\u0440\u043e\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441 7/16",
              "\u0414\u0432\u043e\u0439\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u043f\u043b\u043e\u0442\u043d\u0435\u043d\u0438\u0439",
              "30% \u043f\u0440\u043e\u043f\u0430\u043d/70% \u0431\u0443\u0442\u0430\u043d",
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e: \u0422\u0443\u0440\u0446\u0438\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0413\u0410\u0417 \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "gas80.jpg",
            desc: "Nurgaz 80GR ",
            category: "gas/burner",
            price: 28,
            column: [
              "\u0420\u0435\u0437\u044c\u0431\u043e\u0432\u043e\u0439",
              "\u041a\u043b\u0430\u043f\u0430\u043d \u043c\u0438\u0440\u043e\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441 7/16",
              "\u0414\u0432\u043e\u0439\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u043f\u043b\u043e\u0442\u043d\u0435\u043d\u0438\u0439",
              "30% \u043f\u0440\u043e\u043f\u0430\u043d/70% \u0431\u0443\u0442\u0430\u043d",
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e: \u0422\u0443\u0440\u0446\u0438\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0413\u041e\u0420\u0415\u041b\u041a\u0410 \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "burner32.jpg",
            desc: "Nurgaz TS-5310 ",
            category: "gas/burner",
            price: 32,
            column: [
              "\u041c\u043e\u0449\u043d\u0430\u044f \u043d\u0435\u0440\u0436\u0430\u0432\u0435\u044e\u0449\u0430\u044f \u0433\u043e\u0440\u0435\u043b\u043a\u0430",
              "\u041a\u043b\u0430\u043f\u0430\u043d \u043c\u0438\u0440\u043e\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441 7/16",
              "\u0414\u043e\u043b\u0433\u043e\u0432\u0435\u0447\u043d\u044b\u0439 \u043b\u0430\u0442\u0443\u043d\u043d\u044b\u0439 \u043a\u0440\u0430\u043d",
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e: \u0422\u0443\u0440\u0446\u0438\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0413\u041e\u0420\u0415\u041b\u041a\u0410 \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "Campsor_folding.jpg",
            desc: "Campsor (\u0441\u043a\u043b\u0430\u0434\u043d\u0430\u044f) ",
            category: "gas/burner",
            price: 49,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: \u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439",
              "\u0412\u0435\u0441:150 \u0433\u0440",
              "\u041f\u044c\u0435\u0437\u043e\u043f\u043e\u0434\u0436\u0438\u0433",
            ],
          },
          {
            id: xn(),
            title:
              "\u041a\u041e\u0412\u0420\u0418\u041a \u041f\u0415\u041d\u041a\u0410",
            img: "mat_with_case.jpg",
            desc: "173*61*1\u0441\u043c ",
            category: "mat",
            price: 55,
            column: [
              "\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u0437\u044f\u0449\u0438\u0439",
            ],
          },
          {
            id: xn(),
            title:
              "\u041a\u041e\u0412\u0420\u0418\u041a \u0414\u041b\u042f \u041f\u041e\u0425\u041e\u0414\u041e\u0412 \u0418 \u0421\u041f\u041e\u0420\u0422\u0410",
            img: "mat40.jpg",
            desc: "173*61*1\u0441\u043c ",
            category: "mat",
            price: 47,
            column: [
              "\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u0437\u044f\u0449\u0438\u0439",
            ],
          },
          {
            id: xn(),
            title:
              "\u041a\u041e\u0412\u0420\u0418\u041a \u0421 \u0410\u041b\u042e\u041c\u0418\u041d\u0418\u0415\u0412\u041e\u0419 \u0424\u041e\u041b\u042c\u0413\u041e\u0419 FORA",
            img: "mat_aluminum_foil_FORA.jpg",
            desc: "180*60*0,6\u0441\u043c ",
            category: "mat",
            price: 35,
            column: [
              "\u041e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u044b\u0439",
            ],
          },
          {
            id: xn(),
            title:
              "C\u0418\u0414\u0415\u041d\u042c\u0415 \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u041e\u0415 DECATHLON",
            img: "sitting_DECATHLON.png",
            desc: "\u0418\u0437 \u043f\u0435\u043d\u043e\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430 \u0441 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0441\u043b\u043e\u0435\u043c",
            category: "mat",
            price: 16,
            shortly:
              "\u0421\u0438\u0434\u0435\u043d\u044c\u0435 \u0441 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043a\u0430\u0440\u043a\u0430\u0441\u043e\u043c \u0438\u0437 \u043f\u0435\u043d\u043e\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430, \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0434\u043b\u044f \u0442\u0440\u0435\u043a\u043a\u0438\u043d\u0433\u0430.",
            column: [
              "\u0412\u0435\u0441: 60 \u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b: 34*23,7*1,5 \u0441\u043c",
              "\u042d\u043b\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f \u043b\u0435\u043d\u0442\u0430 \u0441 \u043a\u043b\u0438\u043f\u0441\u043e\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",
            ],
          },
          {
            id: xn(),
            title:
              "\u041a\u041e\u0412\u0420\u0418\u041a \u0421\u041a\u041b\u0410\u0414\u041d\u041e\u0419",
            img: "mat_portable.jpg",
            desc: "180*55*1\u0441\u043c ",
            category: "mat",
            price: 65,
            column: ["\u0412\u0435\u0441:370\u0433"],
          },
          {
            id: xn(),
            title:
              "\u0421\u041a\u041b\u0410\u0414\u041d\u0410\u042f \u0421\u0418\u0414\u0423\u0428\u041a\u0410 (\u041f\u0415\u041d\u041a\u0410)",
            img: "folding_mat.jpg",
            desc: "29*9.5*4.5\u0441\u043c, \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 4 \u0440\u0430\u0437\u0430 ",
            category: "mat",
            price: 24,
            column: ["\u0412\u0435\u0441:60\u0433"],
          },
          {
            id: xn(),
            title:
              "\u0422\u0420\u0415\u041a\u0418\u041d\u0413\u041e\u0412\u042b\u0415 \u041f\u0410\u041b\u041a\u0418",
            img: "trekking_poles_DECATHLON.avif",
            desc: "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0442 \u0438\u0437 2\u0448\u0442, \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 ",
            category: "trekking sticks",
            price: 80,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0438 push-pin (\u0441 \u043a\u043d\u043e\u043f\u043a\u0430\u043c\u0438) 110/115/120/125/130 \u0441\u043c.",
            column: [
              "3 \u0442\u0435\u043b\u0435\u0441\u043a\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0447\u0430\u0441\u0442\u0438",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u044f\u0440\u0443\u0441\u0430: 55 \u0441\u043c",
              "\u0428\u0438\u0440\u0438\u043d\u0430 \u0432 \u0440\u0430\u0441\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u0438\u0434\u0435: ~5\u0441\u043c",
              "\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 \u0441\u0442\u0435\u0440\u0436\u043d\u0438 6061-T6",
              "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0441\u0442\u0435\u0440\u0436\u043d\u044f 20/18/16 \u043c\u043c",
              "\u0421\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a",
              "\u0412\u0435\u0441: 200 \u0433\u0440.",
            ],
          },
          {
            id: xn(),
            title:
              "\u0422\u0420\u0415\u041a\u0418\u041d\u0413\u041e\u0412\u042b\u0415 \u041f\u0410\u041b\u041a\u0418",
            img: "trekking_sticks_black.jpg",
            desc: "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0442 \u0438\u0437 2\u0448\u0442, \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 c \u0432\u043e\u043b\u044c\u0444\u0440\u0430\u043c\u043e\u0432\u044b\u0439 \u043d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a ",
            category: "trekking sticks",
            price: 108,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0438 push-pin(\u0441 \u043a\u043d\u043e\u043f\u043a\u0430\u043c\u0438) 110/115/120/125/130 \u0441\u043c.",
            column: [
              "3 \u0442\u0435\u043b\u0435\u0441\u043a\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0447\u0430\u0441\u0442\u0438",
              "\u0414\u043b\u0438\u043d\u043d\u0430\u044f 2D-\u0440\u0443\u043a\u043e\u044f\u0442\u043a\u0430, \u043f\u043e\u043a\u0440\u044b\u0442\u0430\u044f \u043f\u0435\u043d\u043e\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u043c",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u044f\u0440\u0443\u0441\u0430: 55 \u0441\u043c",
              "\u0428\u0438\u0440\u0438\u043d\u0430 \u0432 \u0440\u0430\u0441\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u0438\u0434\u0435: ~5\u0441\u043c",
              "\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 \u0441\u0442\u0435\u0440\u0436\u043d\u0438 6061-T6",
              "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0441\u0442\u0435\u0440\u0436\u043d\u044f 20/18/16 \u043c\u043c",
              "\u0421\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a",
              "\u0412\u0435\u0441: 230 \u0433\u0440.",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u041a\u0418 \u0414\u041b\u042f \u0421\u041a\u0410\u041d\u0414\u0418\u041d\u0410\u0412\u0421\u041a\u041e\u0419 \u0425\u041e\u0414\u042c\u0411\u042b",
            img: "nordic_walking_sticks.jpg",
            desc: "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0442 \u0438\u0437 2\u0448\u0442, \u0434\u044e\u0440\u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0439",
            category: "trekking sticks",
            price: 110,
            shortly:
              "\u0422\u0435\u043b\u0435\u0441\u043a\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0432 \u0442\u0440\u0438 \u0441\u043b\u043e\u0436\u0435\u043d\u0438\u044f , \u043d\u0430 \u0440\u043e\u0441\u0442 \u043e\u0442 100 \u0441\u043c \u0434\u043e 220 \u0441\u043c.",
            column: [
              "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u043b\u043a\u0438: 63\u0441\u043c",
              "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u043b\u043a\u0438: 135\u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u0427\u0410\u0419\u041d\u0418\u041a \u041f\u041e\u0425\u041e\u0414\u041d\u042b\u0419 BTRACE 1,1\u041b",
            img: "teapot_BTRACE1.jpg",
            desc: "\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439 \u0430\u043d\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439",
            category: "dishes",
            price: 114,
            column: [
              "\u0412\u0435\u0441 (\u0433): 215",
              "\u041e\u0431\u044a\u0435\u043c (\u043c\u043b): 1100",
            ],
          },
          {
            id: xn(),
            title:
              "\u041c\u041d\u041e\u0413\u041e\u0424\u0423\u041d\u041a\u0426\u0418\u041e\u041d\u0410\u041b\u042c\u041d\u0410\u042f \u0412\u0418\u041b\u041a\u0410-\u041b\u041e\u0416\u041a\u0410 (8 \u0412 1)",
            img: "fork-spoon.webp",
            desc: "\u0418\u0437 \u043d\u0435\u0440\u0436\u0430\u0432\u0435\u044e\u0449\u0438\u0439 \u0441\u0442\u0430\u043b\u0438 (\u0446\u0435\u043d\u0430 \u0437\u0430 1 \u0435\u0434\u0438\u043d\u0438\u0446\u0443)",
            category: "dishes",
            price: 27,
            column: [
              "P\u0430\u0437\u043c\u0435\u0440:\t18*4 \u0441\u043c",
              "\u0422\u043e\u043b\u0449\u0438\u043d\u0430:\t1.5 \u043c\u043c",
              "\u0412\u0435\u0441:\t44 \u0433\u0440",
              "\u0424\u0443\u043d\u043a\u0446\u0438\u0438: \u043b\u043e\u0436\u043a\u0430, \u0432\u0438\u043b\u043a\u0430, \u0437\u0443\u0431\u0447\u0430\u0442\u043e\u0435 \u043b\u0435\u0437\u0432\u0438\u0435, \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u043b\u043a\u0430 \u0434\u043b\u044f \u0431\u0443\u0442\u044b\u043b\u043e\u043a, \u0433\u0430\u0440\u043f\u0443\u043d (\u0432\u0435\u0440\u0435\u0432\u043a\u0430-\u043e\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u0435), \u043a\u043e\u043d\u0441\u0435\u0440\u0432\u043d\u044b\u0439 \u043d\u043e\u0436, 5 \u0433\u0430\u0435\u0447\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439 (\u043c2, \u043c3, \u043c3.5, \u043c4, \u043c5), \u043f\u043e\u0434\u0432\u0435\u0441\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u041a\u0415\u041c\u041f\u0418\u041d\u0413\u041e\u0412\u042b\u0419 \u041e\u0411\u0415\u0414\u0415\u041d\u041d\u042b\u0419 \u041d\u0410\u0411\u041e\u0420 QUECHUA \u0414\u041b\u042f 2 \u0427\u0415\u041b\u041e\u0412\u0415\u041a",
            img: "setForCamping.jpg",
            desc: "1 \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044f \u0441\u043e \u0441\u043a\u043b\u043e\u0434\u043d\u043e\u0439 \u0440\u0443\u0447\u043a\u043e\u0439 2 \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0435 \u0442\u0430\u0440\u0435\u043b\u043a\u0438 2 \u0441\u0442\u043e\u043b\u043e\u0432\u044b\u0445 \u043d\u0430\u0431\u043e\u0440\u0430",
            category: "dishes",
            price: 109,
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 1,6 \u043b",
              "\u0412\u0435\u0441:560 \u0433",
              "\u041f\u043e\u0441\u0443\u0434\u0430 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0432\u0438\u0434\u043e\u0432 \u043e\u0433\u043d\u044f (\u0434\u0440\u043e\u0432\u0430, \u0433\u043b\u0430\u0437, \u0438\u043d\u0434\u0443\u043a\u0446\u0438\u044f)",
            ],
          },
          {
            id: xn(),
            title:
              "\u0427\u0410\u0419\u041d\u0418\u041a QUECHUA \u041d\u0410 1 \u041b",
            img: "teapotDecatlon.jpg",
            desc: "\u0418\u0437 \u043d\u0435\u0440\u0436\u0430\u0432\u0435\u044e\u0449\u0435\u0439 \u0441\u0442\u0430\u043b\u0438",
            category: "dishes",
            price: 94,
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 1 \u043b",
              "\u0412\u0435\u0441: 340 \u0433.",
              "\u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0432\u0438\u0434\u043e\u0432 \u043a\u043e\u0441\u0442\u0440\u043e\u0432 \u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u043a\u043e\u0441\u0442\u0440\u043e\u0432 \u043d\u0430 \u0434\u0440\u043e\u0432\u0430\u0445",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u041b\u0410\u0421\u0422\u0418\u041a\u041e\u0412\u0410\u042f \u0422\u0410\u0420\u0415\u041b\u041a\u0410 QUECHUA \u041d\u0410 1 \u041b",
            img: "plasticPlate.webp",
            desc: "\u0414\u043b\u044f \u043f\u043e\u0445\u043e\u0434\u0430 \u0438 \u043f\u0438\u043a\u043d\u0438\u043a\u0430",
            category: "dishes",
            price: 13,
            column: [
              "\u0412\u0435\u0441: 69 \u0433.",
              "\u0420\u0430\u0437\u043c\u0435\u0440: \xd8 19 \u0441\u043c x 3 \u0441\u043c",
              "\u0420\u0435\u043b\u044c\u0435\u0444\u043d\u043e\u0435 \u0434\u043d\u043e \u043d\u0435 \u0434\u0430\u0435\u0442 \u0442\u0430\u0440\u0435\u043b\u043a\u0435 \u043f\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430\u0442\u044c\u0441\u044f",
              "\u0418\u0437 \u0443\u0434\u0430\u0440\u043e\u043f\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u0438 \u0436\u0430\u0440\u043e\u043f\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0438\u043f\u0440\u043e\u043f\u0438\u043b\u0435\u043d\u0430 (100\xb0C)",
            ],
          },
          {
            id: xn(),
            title:
              "\u041d\u0410\u0411\u041e\u0420 \u041f\u041e\u0425\u041e\u0414\u041d\u042b\u0419 \u041f\u041b\u0410\u0421\u0422\u0418\u041a\u041e\u0412\u042b\u0419 - \u041d\u041e\u0416, \u0412\u0418\u041b\u041a\u0410 \u0418 \u041b\u041e\u0416\u041a\u0410 QUECHUA",
            img: "PLASTICCAMPING.jpg",
            desc: "3 \u0441\u0442\u043e\u043b\u043e\u0432\u044b\u0445 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 (\u043d\u043e\u0436, \u0432\u0438\u043b\u043a\u0430, \u043b\u043e\u0436\u043a\u0430), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u044b \u0432\u043c\u0435\u0441\u0442\u0435",
            category: "dishes",
            price: 12.5,
            column: [
              "\u0412\u0435\u0441: 21 \u0433.",
              "\u0420\u0430\u0437\u043c\u0435\u0440: 15,5 x 2 x 3 \u0441\u043c",
              "\u042d\u0442\u0438 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0435 (\u0438\u0437 \u043f\u043e\u043b\u0438\u0430\u043c\u0438\u0434\u0430) \u0441\u0442\u043e\u043b\u043e\u0432\u044b\u0435 \u043f\u0440\u0438\u0431\u043e\u0440\u044b \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043f\u0440\u0438\u0433\u043e\u0434\u043d\u044b \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0441 \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043f\u043e\u0441\u0443\u0434\u044b \u0441 \u0430\u043d\u0442\u0438\u043f\u0440\u0438\u0433\u0430\u0440\u043d\u044b\u043c \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435\u043c, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d\u0438 \u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0430\u044e\u0442",
            ],
          },
          {
            id: xn(),
            title: "\u041c\u0418\u0421\u041a\u0410 (0,5 \u041b.) QUECHUA",
            img: "dish.jpg",
            desc: "\u041b\u0435\u0433\u043a\u0443\u044e \u0438 \u043f\u0440\u043e\u0447\u043d\u0443\u044e \u043c\u0438\u0441\u043a\u0430",
            category: "dishes",
            price: 15,
            column: [
              "\u0412\u0435\u0441: 71 \u0433.",
              "16 \u0441\u043c \u0432 \u0434\u0438\u0430\u043c\u0435\u0442\u0440\u0435 x 4,5 \u0441\u043c",
              "\u041e\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u0435 \u0441\u0431\u043e\u043a\u0443 \u0442\u0430\u0440\u0435\u043b\u043a\u0438 \u0434\u043b\u044f \u043b\u0435\u0433\u043a\u043e\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u043a\u0438 \u0441\u043d\u0430\u0440\u0443\u0436\u0438 \u0440\u044e\u043a\u0437\u0430\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u0430\u0440\u0430\u0431\u0438\u043d\u0430",
              "\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u043d\u0430 \u0442\u0430\u0440\u0435\u043b\u043a\u0438, \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0439 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0442\u0435\u043f\u043b\u0430 \u043e\u0442 \u0433\u043e\u0440\u044f\u0447\u0438\u0445 \u0436\u0438\u0434\u043a\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0437\u0430\u0445\u0432\u0430\u0442\u0430",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u0422\u041e\u041b\u041e\u0412\u042b\u0419 \u041f\u0420\u0418\u0411\u041e\u0420 \u041f\u041b\u0410\u0421\u0422\u0418\u041a\u041e\u0412\u042b\u0419 \u0421\u041a\u041b\u0410\u0414\u041d\u041e\u0419",
            img: "forkspoon.jpg",
            desc: "\u0412\u0438\u043b\u043a\u0430/\u043b\u043e\u0436\u043a\u0430",
            category: "dishes",
            price: 16.5,
            column: [
              "\u0412\u0435\u0441: 11 \u0433.",
              "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0434\u043b\u0438\u043d\u0430 (18,5 \u0441\u043c)",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0432 \u0440\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435: 18,5 x 3,5 x 2 \u0441\u043c",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0432 \u0441\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435: 10 x 3,5 x 3 \u0441\u043c",
              "\u0417\u0430\u043d\u0438\u043c\u0430\u044f \u043c\u0430\u043b\u043e \u043c\u0435\u0441\u0442\u0430 \u0432 \u0440\u044e\u043a\u0437\u0430\u043a\u0435 (10 \u0441\u043c \u0432 \u0441\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435)",
              "\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u043d\u0430 \u0442\u0430\u0440\u0435\u043b\u043a\u0438, \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0439 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0442\u0435\u043f\u043b\u0430 \u043e\u0442 \u0433\u043e\u0440\u044f\u0447\u0438\u0445 \u0436\u0438\u0434\u043a\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0437\u0430\u0445\u0432\u0430\u0442\u0430",
            ],
          },
          {
            id: xn(),
            title:
              "\u0414\u041e\u0416\u0414\u0415\u0412\u0418\u041a EVA RAINCOAT",
            img: "raincoat.jpg",
            desc: "\u0421 \u043a\u0430\u043f\u044e\u0448\u043e\u043d\u043e\u043c 150\u0441\u043c",
            category: "raincoat",
            price: 19,
            column: [
              "\u0418\u043c\u0435\u0435\u0442 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440",
              "\u0411\u044b\u0441\u0442\u0440\u043e \u0441\u043e\u0445\u043d\u0435\u0442",
              "\u0421\u0442\u043e\u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430\u044f \u0432\u043e\u0434\u043e\u043d\u0435\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u043e\u0441\u0442\u044c, \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043e\u0442 \u0434\u043e\u0436\u0434\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0427\u0415\u0425\u041e\u041b \u041e\u0422 \u0414\u041e\u0416\u0414\u042f \u0414\u041b\u042f \u0420\u042e\u041a\u0417\u0410\u041a\u0410 40-60 \u041b",
            img: "backpackcase.jpg",
            desc: "\u041a\u0440\u0435\u043f\u0438\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0435\u0437\u0438\u043d\u043a\u0438, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0435\u0439 \u0412\u0430\u0448 \u0440\u044e\u043a\u0437\u0430\u043a",
            category: "raincoat",
            price: 32,
            column: [
              "\u0412\u0435\u0441: 71 \u0433.",
              "\u0412\u043e\u0434\u043e\u043d\u0435\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u044b\u0435 \u0447\u0435\u0445\u043b\u044b \u0438\u0437 \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440\u0430 \u0438 \u043d\u0435\u043f\u0440\u043e\u043c\u043e\u043a\u0430\u0435\u043c\u044b\u0435 \u0448\u0432\u044b",
              "\u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0440\u044e\u043a\u0437\u0430\u043a\u043e\u0432 \u043e\u0431\u044a\u0435\u043c\u043e\u043c \u043e\u0442 40 \u0434\u043e 60 \u043b\u0438\u0442\u0440\u043e\u0432",
            ],
          },
          {
            id: xn(),
            title:
              "\u0427\u0415\u0425\u041e\u041b \u041e\u0422 \u0414\u041e\u0416\u0414\u042f \u0414\u041b\u042f \u0420\u042e\u041a\u0417\u0410\u041a\u0410 70-100 \u041b",
            img: "backpackcase70-100.jpg",
            desc: "\u041a\u0440\u0435\u043f\u0438\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0435\u0437\u0438\u043d\u043a\u0438, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0435\u0439 \u0412\u0430\u0448 \u0440\u044e\u043a\u0437\u0430\u043a",
            category: "raincoat",
            price: 36,
            column: [
              "\u0412\u0435\u0441: 71 \u0433.",
              "\u0412\u043e\u0434\u043e\u043d\u0435\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u044b\u0435 \u0447\u0435\u0445\u043b\u044b \u0438\u0437 \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440\u0430 \u0438 \u043d\u0435\u043f\u0440\u043e\u043c\u043e\u043a\u0430\u0435\u043c\u044b\u0435 \u0448\u0432\u044b",
              "\u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0440\u044e\u043a\u0437\u0430\u043a\u043e\u0432 \u043e\u0431\u044a\u0435\u043c\u043e\u043c \u043e\u0442 70 \u0434\u043e 100 \u043b\u0438\u0442\u0440\u043e\u0432",
            ],
          },
          {
            id: xn(),
            title:
              "\u0427\u0415\u0425\u041e\u041b \u041e\u0422 \u0414\u041e\u0416\u0414\u042f \u0414\u041b\u042f \u0420\u042e\u041a\u0417\u0410\u041a\u0410 70-100 \u041b",
            img: "backpackcase70-100.jpg",
            desc: "\u041a\u0440\u0435\u043f\u0438\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0435\u0437\u0438\u043d\u043a\u0438, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0435\u0439 \u0412\u0430\u0448 \u0440\u044e\u043a\u0437\u0430\u043a",
            category: "raincoat",
            price: 36,
            column: [
              "\u0412\u0435\u0441: 71 \u0433.",
              "\u0412\u043e\u0434\u043e\u043d\u0435\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u044b\u0435 \u0447\u0435\u0445\u043b\u044b \u0438\u0437 \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440\u0430 \u0438 \u043d\u0435\u043f\u0440\u043e\u043c\u043e\u043a\u0430\u0435\u043c\u044b\u0435 \u0448\u0432\u044b",
              "\u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0440\u044e\u043a\u0437\u0430\u043a\u043e\u0432 \u043e\u0431\u044a\u0435\u043c\u043e\u043c \u043e\u0442 70 \u0434\u043e 100 \u043b\u0438\u0442\u0440\u043e\u0432",
            ],
          },
          {
            id: xn(),
            title:
              "\u0413\u0415\u0420\u041c\u041e\u041f\u0410\u041a\u0415\u0422 BTRACE",
            img: "packageBTRACE.jpg",
            desc: "\u041f\u041b\u041e\u0421\u041a\u0418\u0419 \u041f\u0412\u0425 20X13\u0441\u043c",
            category: "accessories",
            price: 27,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: \u041f\u0412\u0425",
            ],
          },
          {
            id: xn(),
            title:
              "\u041e\u0413\u041d\u0418\u0412\u041e BTRACE \xd8 8 \u041c\u041c",
            img: "flintBTRACE8.png",
            desc: "10\u04452,4\u04451,7\u0441\u043c",
            category: "accessories",
            price: 39,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: \u0420\u0435\u0434\u043a\u043e\u0437\u0435\u043c\u0435\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0442\u0430\u043b\u043b",
              "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 (\u043c\u043c): 8",
            ],
          },
          {
            id: xn(),
            title:
              "\u041a\u041e\u041b\u042b\u0428\u041a\u0418 BTRACE \u0410\u041b\u042e\u041c\u0418\u041d\u0418\u0419 (\u041a\u041e\u041c\u041f\u041b\u0415\u041a\u0422 10 \u0428\u0422.)",
            img: "aluminum_pegs_btrace.png",
            desc: "2\u0448\u0442-12\u20be",
            category: "accessories",
            price: 57,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: \u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u041e\u0414\u0423\u0428\u041a\u0410 \u041d\u0410\u0414\u0423\u0412\u041d\u0410\u042f INTEX",
            img: "inflatable_pillow_INTEX.webp",
            desc: "43*28*9\u0441\u043c",
            category: "accessories",
            price: 20,
            column: [
              "\u0421\u0442\u0440\u0430\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430: \u041a\u0438\u0442\u0430\u0439",
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: Intex",
              "\u0412\u0435\u0441 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0438 (\u043a\u0433): 0.164",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u041e\u0414\u0423\u0428\u041a\u0410-\u041f\u041e\u0414\u0413\u041e\u041b\u041e\u0412\u041d\u0418\u041a INTEX",
            img: "pillow_headrest.webp",
            desc: "36*30*10\u0441\u043c",
            category: "accessories",
            price: 22,
            shortly:
              "\u041d\u0430\u0434\u0443\u0432\u043d\u0430\u044f \u043f\u043e\u0434\u0443\u0448\u043a\u0430 \u0434\u043b\u044f \u0448\u0435\u0438. \u0425\u043e\u0440\u043e\u0448\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u0442\u0434\u044b\u0445\u0430 \u043f\u0440\u0438 \u0434\u0430\u043b\u044c\u043d\u0438\u0445 \u043f\u043e\u0435\u0437\u0434\u043a\u0430\u0445 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u043b\u0435\u0442\u0430\u0445",
            column: [
              "\u0421\u0442\u0440\u0430\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430: \u041a\u0438\u0442\u0430\u0439",
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: Intex",
              "\u0412\u0435\u0441 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0438 (\u043a\u0433): 0.106",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u0422\u0423\u041b \u0421\u041a\u041b\u0410\u0414\u041d\u041e\u0419 \u041f\u041e\u0425\u041e\u0414\u041d\u042b\u0419",
            img: "folding_chair.jpg",
            desc: "35*26 \u0441\u043c \u0432\u0435\u0441 0,510 \u043a\u0433",
            category: "accessories",
            price: 22,
            column: [
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0441\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435: 47*33 \u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041e\u041b\u041d\u0426\u0415\u0417\u0410\u0429\u0418\u0422\u041d\u042b\u0415 \u041e\u0427\u041a\u0418 QUECHUA MH140",
            img: "sunglasses.jpg",
            desc: "\u0410\u043d\u0442\u0438-\u0423\u0424-\u043b\u0438\u043d\u0437\u044b \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0442 100% \u0432\u0440\u0435\u0434\u043d\u044b\u0445 \u043b\u0443\u0447\u0435\u0439",
            category: "accessories",
            price: 79,
            column: [
              "\u0412\u0435\u0441: 26\u0433",
              "\u041b\u0438\u043d\u0437\u044b \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 3",
              "\u041e\u0441\u043e\u0431\u0430\u044f \u0444\u043e\u0440\u043c\u0430: \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0433\u043b\u0430\u0437\u0430 \u043e\u0442 \u0432\u0435\u0442\u0440\u0430, \u0431\u0440\u044b\u0437\u0433, \u043f\u043b\u043e\u0445\u043e\u0439 \u043f\u043e\u0433\u043e\u0434\u044b",
              "\u0420\u0435\u0437\u0438\u043d\u043e\u0432\u044b\u0435 \u043d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a\u0438 \u0434\u0443\u0436\u0435\u043a: \u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u043e\u0441\u043a\u0430\u043b\u044c\u0437\u044b\u0432\u0430\u043d\u0438\u044e \u043e\u0447\u043a\u043e\u0432",
            ],
          },
          {
            id: xn(),
            title: "\u0411\u0418\u041d\u041e\u041a\u041b\u042c SOLOGNAC",
            img: "binoculars.jpg",
            desc: "8-\u043a\u0440\u0430\u0442\u043d\u043e\u0435 \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0435\u043d\u0438\u0435",
            category: "accessories",
            price: 89,
            column: [
              "\u0412\u0435\u0441: 202\u0433",
              "\u0412\u0435\u0440\u0445\u043d\u0435\u0435 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435 : 100% \u0421\u0438\u043b\u0438\u043a\u043e\u043d",
            ],
          },
          {
            id: xn(),
            title: "\u0411\u0418\u041d\u041e\u041a\u041b\u042c QUECHUA MH B560",
            img: "quechuabinoculars.jpg",
            desc: "12-\u043a\u0440\u0430\u0442\u043d\u043e\u0435 \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0435\u043d\u0438\u0435",
            category: "accessories",
            price: 182,
            shortly:
              "\u041a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u044b\u0439 \u0438 \u043b\u0435\u0433\u043a\u0438\u0439 \u0431\u0438\u043d\u043e\u043a\u043b\u044c \u0441 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u043e\u0439. \u0418\u0434\u0435\u0430\u043b\u0435\u043d \u0434\u043b\u044f \u043e\u0431\u0437\u043e\u0440\u0430 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u044b \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0445\u043e\u0434\u043e\u0432. \u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0438\u0432\u044b (32 \u043c\u043c) \u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435 \u043e\u043f\u0442\u0438\u043a\u0438 \u0434\u043b\u044f \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0447\u0435\u0442\u043a\u043e\u0441\u0442\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0442\u0435\u0445, \u043a\u0442\u043e \u043d\u043e\u0441\u0438\u0442 \u043e\u0447\u043a\u0438, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0432\u044b\u0434\u0432\u0438\u0436\u043d\u043e\u043c\u0443 \u0433\u043b\u0430\u0437\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0438\u043d\u0443\u0442\u044c \u043d\u0430\u0437\u0430\u0434.",
            column: [
              "\u0412\u0435\u0441: 333\u0433",
              "\u041e\u043f\u0440\u0430\u0432\u0430 : 100% \u041f\u043e\u043b\u0438\u043a\u0430\u0440\u0431\u043e\u043d\u0430\u0442",
              "\u0412 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0435 \u0448\u043d\u0443\u0440\u043e\u043a \u043d\u0430 \u0448\u0435\u044e \u0438 \u0444\u0443\u0442\u043b\u044f\u0440 \u0438\u0437 \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440\u0430 \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u0443\u0434\u0430\u0440\u043e\u0432 \u0438 \u043f\u044b\u043b\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u043b\u0435\u0433\u043a\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u043a\u0438.",
            ],
          },
          {
            id: xn(),
            title:
              "\u041a\u041e\u0412\u0420\u0418\u041a \u0413\u0415\u0420\u041c\u0415\u0422\u0418\u0427\u041d\u042b\u0419 \u0414\u041b\u042f \u041f\u0410\u041b\u0410\u0422\u041a\u0418 \u0418 \u0422\u0410\u041c\u0411\u0423\u0420\u0410 \u0414\u041b\u042f \u041a\u0415\u041c\u041f\u0418\u041d\u0413\u0410",
            img: "kovrik.jpg",
            desc: "2 x 2,5 \u043c\u0435\u0442\u0440\u0430",
            category: "accessories",
            price: 69,
            column: [
              "\u0412\u0435\u0441:593\u0433",
              "\u0422\u0435\u043d\u0442 \u043b\u0435\u0433\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c \u043a\u043e\u043b\u044c\u0446\u0430\u043c",
              "\u0423\u0441\u0442\u043e\u0439\u0447\u0438\u0432 \u043a \u0438\u0441\u0442\u0438\u0440\u0430\u043d\u0438\u044e \u0438 \u043f\u0435\u0440\u0444\u043e\u0440\u0430\u0446\u0438\u0438",
              "\u0421\u043e\u0441\u0442\u0430\u0432 : 100% \u0432\u043e\u0434\u043e\u043d\u0435\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u044b\u0439 \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d",
            ],
          },
        ],
        Cn = [
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 ARTEN LIGHT 2",
            img: "arten_light2.png",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f c\u0430\u043c\u043e\u0440\u0430\u0441\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f\u0441\u044f \u043e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 230*110*90",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 15,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0438 \u043b\u0451\u0433\u043a\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0434\u043b\u044f \u043a\u043e\u043d\u0446\u0435\u0440\u0442\u043e\u0432, \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u043d\u043e\u0447\u0451\u0432\u043e\u043a \u0432 \u043b\u0435\u0442\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0438\u043b\u0438 \u043a\u0430\u043a \u0434\u043e\u043c \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439. \u041d\u043e \u043d\u0435 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0438\u0433\u0440\u0443\u0448\u0435\u0447\u043d\u044b\u0439 \u0434\u043e\u043c\u0438\u043a, \u0430 \u0442\u0430\u043a\u043e\u0439, \u0433\u0434\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u043f\u0430\u0442\u044c \u0441 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043e\u043c! \u0425\u043e\u0440\u043e\u0448\u0430\u044f \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u044f \u0438 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u043d\u0438\u0435, \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0435\u0441 \u0438 \u043a\u043e\u043c\u0444\u043e\u0440\u0442, \u0437\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u043b\u0451\u0433\u043a\u043e\u0439 \u043d\u0435\u043f\u043e\u0433\u043e\u0434\u044b - \u0447\u0442\u043e \u0435\u0449\u0451 \u043d\u0443\u0436\u043d\u043e?",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: ARTEN",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0430\u0440\u043a\u0430\u0441\u0430: \u0424\u0438\u0431\u0435\u0440\u0433\u043b\u0430\u0441\u0441 7,9 \u043c\u043c",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190T PU W/R",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0442\u0435\u043d\u0442\u0430 (\u043c\u043c \u0432. \u0441\u0442): 2000",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u043d\u0430: \u0422\u0435\u0440\u043f\u0430\u0443\u043b\u0438\u043d\u0433 (\u0430\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d)",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 10000",
              "\u0412\u0435\u0441 (\u0433): 1800",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432: 1",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442: 2",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0445\u043e\u0434\u043e\u0432: 1",
              "\u0412\u044b\u0441\u043e\u0442\u0430 (\u0441\u043c): 90",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 ARTEN LIGHT 2",
            img: "arten_light2.png",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f c\u0430\u043c\u043e\u0440\u0430\u0441\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f\u0441\u044f \u043e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 230*110*90",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 25,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0438 \u043b\u0451\u0433\u043a\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0434\u043b\u044f \u043a\u043e\u043d\u0446\u0435\u0440\u0442\u043e\u0432, \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u043d\u043e\u0447\u0451\u0432\u043e\u043a \u0432 \u043b\u0435\u0442\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0438\u043b\u0438 \u043a\u0430\u043a \u0434\u043e\u043c \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439. \u041d\u043e \u043d\u0435 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0438\u0433\u0440\u0443\u0448\u0435\u0447\u043d\u044b\u0439 \u0434\u043e\u043c\u0438\u043a, \u0430 \u0442\u0430\u043a\u043e\u0439, \u0433\u0434\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u043f\u0430\u0442\u044c \u0441 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043e\u043c! \u0425\u043e\u0440\u043e\u0448\u0430\u044f \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u044f \u0438 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u043d\u0438\u0435, \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0435\u0441 \u0438 \u043a\u043e\u043c\u0444\u043e\u0440\u0442, \u0437\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u043b\u0451\u0433\u043a\u043e\u0439 \u043d\u0435\u043f\u043e\u0433\u043e\u0434\u044b - \u0447\u0442\u043e \u0435\u0449\u0451 \u043d\u0443\u0436\u043d\u043e?",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: ARTEN",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0430\u0440\u043a\u0430\u0441\u0430: \u0424\u0438\u0431\u0435\u0440\u0433\u043b\u0430\u0441\u0441 7,9 \u043c\u043c",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190T PU W/R",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0442\u0435\u043d\u0442\u0430 (\u043c\u043c \u0432. \u0441\u0442): 2000",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u043d\u0430: \u0422\u0435\u0440\u043f\u0430\u0443\u043b\u0438\u043d\u0433 (\u0430\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d)",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 10000",
              "\u0412\u0435\u0441 (\u0433): 1800",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432: 1",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442: 2",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0445\u043e\u0434\u043e\u0432: 1",
              "\u0412\u044b\u0441\u043e\u0442\u0430 (\u0441\u043c): 90",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 ARTEN SPACE",
            img: "ARTEN_SPACE.webp",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u043b\u0435\u0433\u043a\u0430\u044f \u043e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 210*150*120",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 15,
            shortly:
              "\u041b\u0435\u0433\u043a\u0430\u044f \u043e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430. \u0412\u0445\u043e\u0434 \u0441\u043f\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d \u043c\u043e\u0441\u043a\u0438\u0442\u043d\u043e\u0439 \u0441\u0435\u0442\u043a\u043e\u0439. \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043a\u043b\u0430\u043f\u0430\u043d. \u0412\u0441\u0435 \u0448\u0432\u044b \u043f\u0440\u043e\u043a\u043b\u0435\u0435\u043d\u044b. \u0418\u0434\u0435\u0430\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u043f\u043e\u0445\u043e\u0434\u043e\u0432 \u0432 \u0432\u0435\u0441\u0435\u043d\u043d\u0435\u0435, \u043b\u0435\u0442\u043d\u0435\u0435 \u0438 \u043e\u0441\u0435\u043d\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: ARTEN",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0430\u0440\u043a\u0430\u0441\u0430: \u0424\u0438\u0431\u0435\u0440\u0433\u043b\u0430\u0441\u0441 7,9 \u043c\u043c",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190T PU W/R",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0442\u0435\u043d\u0442\u0430 (\u043c\u043c \u0432. \u0441\u0442): 2000",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u043d\u0430: \u0410\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d (\u0442\u0435\u0440\u043f\u0430\u0443\u043b\u0438\u043d\u0433)",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 10000",
              "\u0412\u0435\u0441 (\u0433): 1800",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432: 1",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442: 2",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0445\u043e\u0434\u043e\u0432: 1",
              "\u0412\u044b\u0441\u043e\u0442\u0430 (\u0441\u043c): 120",
              "\u041d\u0430\u0440\u0443\u0436\u043d\u0438\u0439 \u0433\u0430\u0431\u0430\u0440\u0438\u0442 (\u0441\u043c): 210*150",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 ARTEN SPACE",
            img: "ARTEN_SPACE.webp",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u043b\u0435\u0433\u043a\u0430\u044f \u043e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 210*150*120",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 25,
            shortly:
              "\u041b\u0435\u0433\u043a\u0430\u044f \u043e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430. \u0412\u0445\u043e\u0434 \u0441\u043f\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d \u043c\u043e\u0441\u043a\u0438\u0442\u043d\u043e\u0439 \u0441\u0435\u0442\u043a\u043e\u0439. \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043a\u043b\u0430\u043f\u0430\u043d. \u0412\u0441\u0435 \u0448\u0432\u044b \u043f\u0440\u043e\u043a\u043b\u0435\u0435\u043d\u044b. \u0418\u0434\u0435\u0430\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u043f\u043e\u0445\u043e\u0434\u043e\u0432 \u0432 \u0432\u0435\u0441\u0435\u043d\u043d\u0435\u0435, \u043b\u0435\u0442\u043d\u0435\u0435 \u0438 \u043e\u0441\u0435\u043d\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c:ARTEN",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0430\u0440\u043a\u0430\u0441\u0430: \u0424\u0438\u0431\u0435\u0440\u0433\u043b\u0430\u0441\u0441 7,9 \u043c\u043c",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 75D/190T PU W/R",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0442\u0435\u043d\u0442\u0430 (\u043c\u043c \u0432. \u0441\u0442): 2000",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u043d\u0430: \u0410\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d (\u0442\u0435\u0440\u043f\u0430\u0443\u043b\u0438\u043d\u0433)",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 10000",
              "\u0412\u0435\u0441 (\u0433): 1800",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432: 1",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442: 2",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0445\u043e\u0434\u043e\u0432: 1",
              "\u0412\u044b\u0441\u043e\u0442\u0430 (\u0441\u043c): 120",
              "\u041d\u0430\u0440\u0443\u0436\u043d\u0438\u0439 \u0433\u0430\u0431\u0430\u0440\u0438\u0442 (\u0441\u043c): 210*150",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 QUECHUA MH-100",
            img: "DECATHLON2\u0443\u0445.jpg",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 130*210*107",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 20,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0438 \u043b\u0435\u0433\u043a\u0430\u044f \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435, \u044d\u0442\u0430 \u044d\u043a\u043e-\u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u043b\u0430\u0433\u0435\u0440\u0435\u0439 \u043d\u0430 2 \u0447\u0435\u043b\u043e\u0432\u0435\u043a. \u042d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u043d\u0430\u044f \u0438 \u043d\u0435\u0434\u043e\u0440\u043e\u0433\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u043a\u0443\u043f\u043e\u043b\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u043f\u0430\u043b\u0430\u0442\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u043c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u043a\u0435\u043c\u043f\u0438\u043d\u0433\u0430.",
            column: [
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430: 130*210 \u0441\u043c",
              "\u0420\u043e\u0441\u0442: 107\u0441\u043c",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u0440\u043f\u0443\u0441\u0430: 58*16*16 \u0441\u043c / 12 \u043b",
              "\u0412\u0435\u0441: 2.6 \u043a\u0433 ",
              "\u0422\u043a\u0430\u043d\u044c \u0441 \u0437\u0430\u0449\u0438\u0442\u043e\u0439 SPF 30: \u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0441\u0432\u0435\u0442, \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0423\u0424-\u043b\u0443\u0447\u0438",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): 2000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 2400",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 QUECHUA MH-100",
            img: "DECATHLON2\u0443\u0445.jpg",
            desc: "2-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 130*210*107",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 25,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0438 \u043b\u0435\u0433\u043a\u0430\u044f \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435, \u044d\u0442\u0430 \u044d\u043a\u043e-\u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u043b\u0430\u0433\u0435\u0440\u0435\u0439 \u043d\u0430 2 \u0447\u0435\u043b\u043e\u0432\u0435\u043a. \u042d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u043d\u0430\u044f \u0438 \u043d\u0435\u0434\u043e\u0440\u043e\u0433\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u043a\u0443\u043f\u043e\u043b\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u043f\u0430\u043b\u0430\u0442\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u043c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u043a\u0435\u043c\u043f\u0438\u043d\u0433\u0430.",
            column: [
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430: 130*210 \u0441\u043c",
              "\u0420\u043e\u0441\u0442: 107\u0441\u043c",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u0440\u043f\u0443\u0441\u0430: 58*16*16 \u0441\u043c / 12 \u043b",
              "\u0412\u0435\u0441: 2.6 \u043a\u0433 ",
              "\u0422\u043a\u0430\u043d\u044c \u0441 \u0437\u0430\u0449\u0438\u0442\u043e\u0439 SPF 30: \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0441\u0432\u0435\u0442, \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0423\u0424-\u043b\u0443\u0447\u0438",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): 2000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 2400",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 QUECHUA MH-100",
            img: "DECATHLON2\u0443\u0445.jpg",
            desc: "3-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 130*210*107",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 20,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0438 \u043b\u0435\u0433\u043a\u0430\u044f \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435, \u044d\u0442\u0430 \u044d\u043a\u043e-\u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u043b\u0430\u0433\u0435\u0440\u0435\u0439 \u043d\u0430 3 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u043a\u0443\u043f\u043e\u043b\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u043f\u0430\u043b\u0430\u0442\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u043c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u043a\u0435\u043c\u043f\u0438\u043d\u0433\u0430.",
            column: [
              "\u0417\u0430\u0434\u043d\u044f\u044f \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u044f",
              "\u0412\u044b\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0435\u0442\u0435\u0440 \u0441\u0438\u043b\u043e\u0439 5 \u0431\u0430\u043b\u043b\u043e\u0432 (40 \u043a\u043c/\u0447)",
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430 195*210 \u0441\u043c",
              "\u0412\u044b\u0441\u043e\u0442\u0430: 120 \u0441\u043c",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u0440\u043f\u0443\u0441\u0430: 59*17*17 \u0441\u043c / 13 \u043b",
              "\u0412\u0435\u0441: 3.4 \u043a\u0433",
              "\u0422\u043a\u0430\u043d\u044c \u0441 \u0437\u0430\u0449\u0438\u0442\u043e\u0439 SPF 30: \u041f\u0440\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0441\u0432\u0435\u0442, \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0423\u0424-\u043b\u0443\u0447\u0438",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): 2000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 2400",
            ],
          },
          {
            id: xn(),
            title: "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 QUECHUA MH-100",
            img: "DECATHLON2\u0443\u0445.jpg",
            desc: "3-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 130*210*107",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 30,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0438 \u043b\u0435\u0433\u043a\u0430\u044f \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435, \u044d\u0442\u0430 \u044d\u043a\u043e-\u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u043b\u0430\u0433\u0435\u0440\u0435\u0439 \u043d\u0430 3 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u043a\u0443\u043f\u043e\u043b\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u043f\u0430\u043b\u0430\u0442\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u043c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u043a\u0435\u043c\u043f\u0438\u043d\u0433\u0430.",
            column: [
              "\u0417\u0430\u0434\u043d\u044f\u044f \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u044f",
              "\u0412\u044b\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0435\u0442\u0435\u0440 \u0441\u0438\u043b\u043e\u0439 5 \u0431\u0430\u043b\u043b\u043e\u0432 (40 \u043a\u043c/\u0447)",
              "\u041a\u043e\u043c\u043d\u0430\u0442\u0430 195*210 \u0441\u043c",
              "\u0412\u044b\u0441\u043e\u0442\u0430: 120 \u0441\u043c",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u0440\u043f\u0443\u0441\u0430: 59*17*17 \u0441\u043c / 13 \u043b",
              "\u0412\u0435\u0441: 3,4 \u043a\u0433",
              "\u0422\u043a\u0430\u043d\u044c \u0441 \u0437\u0430\u0449\u0438\u0442\u043e\u0439 SPF 30: \u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0441\u0432\u0435\u0442, \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0423\u0424-\u043b\u0443\u0447\u0438",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0432\u0435\u0441 (\u043c\u043c \u0432. \u0441\u0442.): 2000",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430 (\u043c\u043c \u0432. \u0441\u0442.): 2400",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 BESTWAY PAVILLO COOLDOME",
            img: "bestwat_pavillo.jpg",
            desc: "3-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 210*210*130",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 15,
            shortly:
              "\u041f\u0430\u043b\u0430\u0442\u043a\u0430 Pavillo Activemount 3 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0442\u0443\u0440\u0438\u0441\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0447\u0435\u0442 \u043d\u0430\u0447\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0434\u0435\u043d\u044c \u043d\u0430 \u0441\u0432\u0435\u0436\u0435\u043c \u0432\u043e\u0437\u0434\u0443\u0445\u0435. \u042d\u0442\u0430 \u043f\u0440\u043e\u0447\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0430 \u0438\u0437 \u043e\u0433\u043d\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430 \u0441 \u0432\u043e\u0434\u043e\u043d\u0435\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u044b\u043c\u0438 \u0448\u0432\u0430\u043c\u0438. \u0422\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043b\u044e\u0431\u044b\u0445 \u043f\u043e\u0433\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445. \u041f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0437\u044b\u0440\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043b\u0443\u0436\u0438\u0442 \u043a\u0430\u043a \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0432\u0435\u0449\u0435\u0439. \u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043f\u0430\u043b\u0430\u0442\u043a\u0438 - \u0432\u044b\u0441\u043e\u043a\u043e\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u043e\u0434\u043e\u043d\u0435\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u044b\u0439 \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440. \u041f\u043e\u043b \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0438\u0437 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d\u0430. \u0418\u043c\u0435\u0435\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043a\u0430\u0440\u043c\u0430\u043d \u0434\u043b\u044f \u043b\u0438\u0447\u043d\u044b\u0445 \u0432\u0435\u0449\u0435\u0439. \u0428\u0432\u044b \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u0433\u0435\u0440\u043c\u0435\u0442\u0438\u0447\u043d\u044b \u0438 \u043f\u0440\u043e\u043a\u043b\u0435\u0435\u043d\u044b. \u0415\u0441\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043c\u043e\u0441\u043a\u0438\u0442\u043d\u0430\u044f \u0441\u0435\u0442\u043a\u0430.",
            column: [
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0442\u0435\u043d\u0442\u0430: 300.00 \u043c\u043c \u0432\u043e\u0434. \u0441\u0442",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430: 300.00 \u043c\u043c \u0432\u043e\u0434. \u0441\u0442",
              "\u0412\u0435\u0441: 2.20 \u043a\u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u0440\u043f\u0443\u0441\u0430: 210*210*130",
              "\u0412\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043e\u043a\u043d\u0430",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: \u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043f\u043e\u043b\u0430: \u0410\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u0438\u044d\u0442\u0435\u043b\u0435\u043d",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u0443\u0433: C\u0442\u0435\u043a\u043b\u043e\u043f\u043b\u0430\u0441\u0442\u0438\u043a",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u043e\u043b\u044b\u0448\u043a\u043e\u0432: C\u0442\u0430\u043b\u044c",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442: 3 \u0447\u0435\u043b",
              "\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044b \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u0439 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0438: 14*60*14\u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 BESTWAY PAVILLO COOLDOME",
            img: "bestwat_pavillo.jpg",
            desc: "3-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 210*210*130",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 25,
            shortly:
              "\u041f\u0430\u043b\u0430\u0442\u043a\u0430 Pavillo Activemount 3 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0442\u0443\u0440\u0438\u0441\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0447\u0435\u0442 \u043d\u0430\u0447\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0434\u0435\u043d\u044c \u043d\u0430 \u0441\u0432\u0435\u0436\u0435\u043c \u0432\u043e\u0437\u0434\u0443\u0445\u0435. \u042d\u0442\u0430 \u043f\u0440\u043e\u0447\u043d\u0430\u044f \u0434\u0432\u0443\u0445\u0441\u043b\u043e\u0439\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0430 \u0438\u0437 \u043e\u0433\u043d\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430 \u0441 \u0432\u043e\u0434\u043e\u043d\u0435\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u044b\u043c\u0438 \u0448\u0432\u0430\u043c\u0438. \u0422\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u043a\u0430 \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043b\u044e\u0431\u044b\u0445 \u043f\u043e\u0433\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445. \u041f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0437\u044b\u0440\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043b\u0443\u0436\u0438\u0442 \u043a\u0430\u043a \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0432\u0435\u0449\u0435\u0439. \u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043f\u0430\u043b\u0430\u0442\u043a\u0438 - \u0432\u044b\u0441\u043e\u043a\u043e\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u043e\u0434\u043e\u043d\u0435\u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0435\u043c\u044b\u0439 \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440. \u041f\u043e\u043b \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0438\u0437 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d\u0430. \u0418\u043c\u0435\u0435\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043a\u0430\u0440\u043c\u0430\u043d \u0434\u043b\u044f \u043b\u0438\u0447\u043d\u044b\u0445 \u0432\u0435\u0449\u0435\u0439. \u0428\u0432\u044b \u043f\u0430\u043b\u0430\u0442\u043a\u0438 \u0433\u0435\u0440\u043c\u0435\u0442\u0438\u0447\u043d\u044b \u0438 \u043f\u0440\u043e\u043a\u043b\u0435\u0435\u043d\u044b. \u0415\u0441\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043c\u043e\u0441\u043a\u0438\u0442\u043d\u0430\u044f \u0441\u0435\u0442\u043a\u0430.",
            column: [
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0442\u0435\u043d\u0442\u0430: 300.00 \u043c\u043c \u0432\u043e\u0434. \u0441\u0442",
              "\u0412\u043e\u0434\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c \u0434\u043d\u0430: 300.00 \u043c\u043c \u0432\u043e\u0434. \u0441\u0442",
              "\u0412\u0435\u0441: 2.20 \u043a\u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u0440\u043f\u0443\u0441\u0430: 210*210*130",
              "\u0412\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043e\u043a\u043d\u0430",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: \u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043f\u043e\u043b\u0430: \u0410\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u0438\u044d\u0442\u0435\u043b\u0435\u043d",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0434\u0443\u0433: C\u0442\u0435\u043a\u043b\u043e\u043f\u043b\u0430\u0441\u0442\u0438\u043a",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u043e\u043b\u044b\u0448\u043a\u043e\u0432: C\u0442\u0430\u043b\u044c",
              "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442: 3 \u0447\u0435\u043b",
              "\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044b \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u0439 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0438:14\u044560\u044514\u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 BESTWAY COOLMOUNT4",
            img: "COOLMOUNT4.jpg",
            desc: "4-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f c\u0430\u043c\u043e\u0440\u0430\u0441\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f\u0441\u044f \u043e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u0430\u044f 240*210*100 \u0441\u043c",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 15,
            shortly:
              "\u0412\u0430\u043c \u043d\u0435 \u043d\u0430\u0434\u043e \u0435\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c, \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435 \u0435\u0435 \u043d\u0430 \u043c\u0435\u0441\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u043e\u043d\u0430 \u0440\u0430\u0437\u043b\u043e\u0436\u0438\u0442\u0441\u044f \u0441\u0430\u043c\u0430. \u0412 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0430 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u044f \u0437\u0430 \u0441\u0447\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u043a\u043e\u043d \u043f\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u0430\u043c.\u0414\u043b\u044f \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u043a\u0438 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0435\u0441\u0442\u044c \u0441\u0443\u043c\u043a\u0430 \u0447\u0435\u0445\u043e\u043b. \u0421\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0434\u0438\u0441\u043a\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u0443\u044e \u0441\u0443\u043c\u043a\u0443.",
            column: [
              "\u0411\u0440\u0435\u043d\u0434: Pavillo",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0430\u043b\u0430\u0442\u043a\u0438: 240*210*100 \u0441\u043c.",
              "\u0412\u0435\u0441: 2.3 \u043a\u0433.",
              "\u0412\u043e\u0434\u043e\u043e\u0442\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u044e\u0449\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0442\u0435\u043d\u0442\u0430: 2000 \u043c\u043c.",
              "\u0412\u043e\u0434\u043e\u043e\u0442\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u044e\u0449\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u043e\u043b\u0430: 20000 \u043c\u043c.",
              "\u041a\u043e\u043b. \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0445 \u043c\u0435\u0441\u0442: 4",
              "\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044b \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u0439 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0438: 90*90*3 \u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u041f\u0410\u041b\u0410\u0422\u041a\u0410 BESTWAY COOLMOUNT4",
            img: "COOLMOUNT4.jpg",
            desc: "4-\u0445 \u043c\u0435\u0441\u0442\u043d\u0430\u044f c\u0430\u043c\u043e\u0440\u0430\u0441\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f\u0441\u044f",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 25,
            shortly:
              "\u0412\u0430\u043c \u043d\u0435 \u043d\u0430\u0434\u043e \u0435\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c, \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435 \u0435\u0435 \u043d\u0430 \u043c\u0435\u0441\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u043e\u043d\u0430 \u0440\u0430\u0437\u043b\u043e\u0436\u0438\u0442\u0441\u044f \u0441\u0430\u043c\u0430. \u0412 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0430 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u044f \u0437\u0430 \u0441\u0447\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u043a\u043e\u043d \u043f\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u0430\u043c.\u0414\u043b\u044f \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u043a\u0438 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0435\u0441\u0442\u044c \u0441\u0443\u043c\u043a\u0430 \u0447\u0435\u0445\u043e\u043b. \u0421\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0434\u0438\u0441\u043a\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u0443\u044e \u0441\u0443\u043c\u043a\u0443.",
            column: [
              "\u0411\u0440\u0435\u043d\u0434: Pavillo",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0430\u043b\u0430\u0442\u043a\u0438: 240*210*100 \u0441\u043c.",
              "\u0412\u0435\u0441: 2.3 \u043a\u0433.",
              "\u0412\u043e\u0434\u043e\u043e\u0442\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u044e\u0449\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0442\u0435\u043d\u0442\u0430: 2000 \u043c\u043c.",
              "\u0412\u043e\u0434\u043e\u043e\u0442\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u044e\u0449\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u043e\u043b\u0430: 20000 \u043c\u043c.",
              "\u041a\u043e\u043b. \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0445 \u043c\u0435\u0441\u0442: 4",
              "\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044b \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u0439 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0438: 90*90*3 \u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a BTRACE ZERO L SIZE \u041f\u0420\u0410\u0412\u042b\u0419",
            img: "BTRACE_ZERO_L.png",
            desc: "\u0421\u0443\u043f\u0435\u0440 \u043b\u0451\u0433\u043a\u0438\u0439 220*90(55) \u043e\u0442 +15 \u0434\u043e 0 ",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 15,
            shortly:
              "\u041d\u043e\u0432\u0438\u043d\u043a\u0430 \u0441\u0435\u0437\u043e\u043d\u0430 2021 - \u0441\u0443\u043f\u0435\u0440 \u043b\u0451\u0433\u043a\u0438\u0439 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a-\u043a\u043e\u043a\u043e\u043d BTrace Zero. \u041e\u043d \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u0434\u043b\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u0432 \u0442\u0435\u043f\u043b\u0443\u044e \u043f\u043e\u0433\u043e\u0434\u0443. \u0417\u0430\u043d\u0438\u043c\u0430\u044f \u0441\u043e\u0432\u0441\u0435\u043c \u043c\u0430\u043b\u043e \u043c\u0435\u0441\u0442\u0430, \u044d\u0442\u043e\u0442 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0441 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043e\u043c \u043f\u0435\u0440\u0435\u043d\u043e\u0447\u0435\u0432\u0430\u0442\u044c \u0432 \u043f\u043e\u0445\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445. \u041a\u0430\u043a \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0448\u043a\u0438-\u043a\u043e\u043a\u043e\u043d\u044b \u044d\u0442\u043e\u0439 \u0441\u0435\u0440\u0438\u0438, BTrace Zero \u0438\u043c\u0435\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0441\u0442\u0451\u0433\u0438\u0432\u0430\u0442\u044c\u0441\u044f. \u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u0437 2\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432, \u0447\u0442\u043e\u0431 \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c \u0435\u0449\u0451 \u043c\u0435\u0441\u0442\u0430 \u0438 \u0432\u0435\u0441\u0430, \u0435\u0441\u043b\u0438 \u0440\u043e\u0441\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u043c \u043c\u0435\u0448\u043a\u043e\u043c \u043c\u0435\u043d\u044c\u0448\u0435\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: BTRACE",
              "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u044d\u043a\u0441\u0442\u0440\u0438\u043c\u0430: 0",
              "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430: +5",
              "\u0412\u0435\u0441 (\u0433): 800",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u043d\u0435\u0448\u043d\u0438\u0439: \u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 20D 380\u0422 Nylon RipStop WR",
              "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 210T Soft Nylon",
              "\u0423\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044c: Izoshell Pro 2*80 \u0433/\u043c2",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 (\u0441\u043c): 52*25*25",
              "\u0420\u0430\u0437\u043c\u0435\u0440 (\u0441\u043c): 220*90(55)",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a BTRACE ZERO L SIZE \u041f\u0420\u0410\u0412\u042b\u0419",
            img: "BTRACE_ZERO_L.png",
            desc: "\u0421\u0443\u043f\u0435\u0440 \u043b\u0451\u0433\u043a\u0438\u0439 220*90(55) \u043e\u0442 +15 \u0434\u043e 0 ",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 25,
            shortly:
              "\u041d\u043e\u0432\u0438\u043d\u043a\u0430 \u0441\u0435\u0437\u043e\u043d\u0430 2021 - \u0441\u0443\u043f\u0435\u0440 \u043b\u0451\u0433\u043a\u0438\u0439 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a-\u043a\u043e\u043a\u043e\u043d BTrace Zero. \u041e\u043d \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u0434\u043b\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u0432 \u0442\u0435\u043f\u043b\u0443\u044e \u043f\u043e\u0433\u043e\u0434\u0443. \u0417\u0430\u043d\u0438\u043c\u0430\u044f \u0441\u043e\u0432\u0441\u0435\u043c \u043c\u0430\u043b\u043e \u043c\u0435\u0441\u0442\u0430, \u044d\u0442\u043e\u0442 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0441 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043e\u043c \u043f\u0435\u0440\u0435\u043d\u043e\u0447\u0435\u0432\u0430\u0442\u044c \u0432 \u043f\u043e\u0445\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445. \u041a\u0430\u043a \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0448\u043a\u0438-\u043a\u043e\u043a\u043e\u043d\u044b \u044d\u0442\u043e\u0439 \u0441\u0435\u0440\u0438\u0438, BTrace Zero \u0438\u043c\u0435\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0441\u0442\u0451\u0433\u0438\u0432\u0430\u0442\u044c\u0441\u044f. \u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u0437 2\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432, \u0447\u0442\u043e\u0431 \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c \u0435\u0449\u0451 \u043c\u0435\u0441\u0442\u0430 \u0438 \u0432\u0435\u0441\u0430, \u0435\u0441\u043b\u0438 \u0440\u043e\u0441\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u043c \u043c\u0435\u0448\u043a\u043e\u043c \u043c\u0435\u043d\u044c\u0448\u0435\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430.",
            column: [
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: BTRACE",
              "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u044d\u043a\u0441\u0442\u0440\u0438\u043c\u0430: 0",
              "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430: +5",
              "\u0412\u0435\u0441 (\u0433): 800",
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u043d\u0435\u0448\u043d\u0438\u0439: \u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 20D 380\u0422 Nylon RipStop WR",
              "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: 100% \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 210T Soft Nylon",
              "\u0423\u0442\u0435\u043f\u043b\u0438\u0442\u0435\u043b\u044c: Izoshell Pro 2*80 \u0433/\u043c2",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 (\u0441\u043c): 52*25*25",
              "\u0420\u0430\u0437\u043c\u0435\u0440 (\u0441\u043c): 220*90(55)",
              "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430: \u0422\u043a\u0430\u043d\u0435\u0432\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a",
            img: "sleeping_bag_green.jpg",
            desc: "195*60\u0441\u043c \u043e\u0442 +15 \u0434\u043e 0",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438/\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 10,
            column: [
              "\u0412\u0435\u0441: 960\u0433\u0440",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0435\u0448\u043d\u0438\u0439: 35*26\u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u041f\u0410\u041b\u042c\u041d\u042b\u0419 \u041c\u0415\u0428\u041e\u041a",
            img: "sleeping_bag_red.jpg",
            desc: "\u0421ampsor 210*66\u0441\u043c \u043e\u0442 +10 \u0434\u043e 0",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438/\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 10,
            column: [
              "\u0412\u0435\u0441: 1300\u0433\u0440",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0435\u0448\u043d\u0438\u0439: 33*24\u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419 ",
            img: "DECATHLON_pinc.avif",
            desc: "50L Forclaz",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 15,
            shortly:
              "\u042d\u0442\u043e\u0442 \u0440\u044e\u043a\u0437\u0430\u043a \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u043f\u043e\u0445\u043e\u0434 \u043f\u043e \u0433\u043e\u0440\u0438\u0441\u0442\u043e\u0439 \u043c\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u0438\u043b\u0438 \u0445\u043e\u0442\u044f\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u043a\u043e\u043d\u0435\u0446 \u0441\u0432\u0435\u0442\u0430 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u0432\u043e\u0435 \u043f\u0435\u0440\u0432\u043e\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u044e\u043a\u0437\u0430\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u0435\u043d \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0441\u0432\u043e\u0438\u043c \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u043c \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u0441\u043f\u0435\u0440\u0435\u0434\u0438, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u0431\u044a\u0435\u043c\u0443 50 \u043b\u0438\u0442\u0440\u043e\u0432 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0445\u043e\u0431\u0431\u0438-\u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 50 \u043b",
              "\u0412\u0435\u0441: 1,4 \u043a\u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b: 62*32*24",
              "\u0418\u0437\u043d\u043e\u0441\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c:\u0422\u043a\u0430\u043d\u044c \u0441 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435\u043c P600 \u0434\u043b\u044f \u0443\u0441\u0438\u043b\u0435\u043d\u0438\u044f \u0441 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b",
              "\u041e\u0442\u0441\u0435\u043a\u0438: 3 \u0441\u043d\u0430\u0440\u0443\u0436\u0438, 1 \u0432\u043d\u0443\u0442\u0440\u0438",
              "\u041c\u0430\u0441\u0441\u0430: 1,4 \u043a\u0433",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419 ",
            img: "DECATHLON_pinc.avif",
            desc: "50L Forclaz",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 17,
            shortly:
              "\u042d\u0442\u043e\u0442 \u0440\u044e\u043a\u0437\u0430\u043a \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u043f\u043e\u0445\u043e\u0434 \u043f\u043e \u0433\u043e\u0440\u0438\u0441\u0442\u043e\u0439 \u043c\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u0438\u043b\u0438 \u0445\u043e\u0442\u044f\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u043a\u043e\u043d\u0435\u0446 \u0441\u0432\u0435\u0442\u0430 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u0432\u043e\u0435 \u043f\u0435\u0440\u0432\u043e\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u044e\u043a\u0437\u0430\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u0435\u043d \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0441\u0432\u043e\u0438\u043c \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u043c \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u0441\u043f\u0435\u0440\u0435\u0434\u0438, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u0431\u044a\u0435\u043c\u0443 50 \u043b\u0438\u0442\u0440\u043e\u0432 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0445\u043e\u0431\u0431\u0438-\u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 50 \u043b",
              "\u0412\u0435\u0441: 1,4 \u043a\u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b: 62*32*24",
              "\u0418\u0437\u043d\u043e\u0441\u043e\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u044c: \u0422\u043a\u0430\u043d\u044c \u0441 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435\u043c P600 \u0434\u043b\u044f \u0443\u0441\u0438\u043b\u0435\u043d\u0438\u044f \u0441 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b",
              "\u041e\u0442\u0441\u0435\u043a\u0438: 3 \u0441\u043d\u0430\u0440\u0443\u0436\u0438, 1 \u0432\u043d\u0443\u0442\u0440\u0438",
              "\u041c\u0430\u0441\u0441\u0430: 1,4 \u043a\u0433",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "THENORTHFACE_blue.jpg",
            desc: "50L THE NORTH FACE(REPLICA) ",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 15,
            shortly:
              "\u041b\u0435\u0433\u043a\u0438\u0439, \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u0439 \u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0440\u044e\u043a\u0437\u0430\u043a \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u043e\u0434\u043d\u0435\u0432\u043d\u044b\u0445 \u0432\u044b\u0445\u043e\u0434\u043e\u0432 \u0438 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u043d\u0430\u043b\u0435\u0433\u043a\u0435. \u0420\u044e\u043a\u0437\u0430\u043a NorthFace \u043e\u0431\u043b\u0430\u0434\u0430\u044f \u043e\u0431\u044a\u0435\u043c\u043e\u043c 50\u043b, \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442 \u0434\u043b\u044f \u0441\u043a\u0430\u043b\u043e\u043b\u0430\u0437\u0430\u043d\u0438\u044f, \u043f\u043e\u0445\u043e\u0434\u043e\u0432 \u0438 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 50\u043b",
              "\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f: \u041c\u044f\u0433\u043a\u0438\u0439 (\u0431\u0435\u0437 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0436\u0435\u0441\u0442\u043a\u043e\u0441\u0442\u0438)",
            ],
          },
          {
            id: xn(),
            title:
              "\u0420\u042e\u041a\u0417\u0410\u041a \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "THENORTHFACE_blue.jpg",
            desc: "50L THE NORTH FACE(REPLICA) ",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 17,
            shortly:
              "\u041b\u0435\u0433\u043a\u0438\u0439, \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u0439 \u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0440\u044e\u043a\u0437\u0430\u043a \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u043e\u0434\u043d\u0435\u0432\u043d\u044b\u0445 \u0432\u044b\u0445\u043e\u0434\u043e\u0432 \u0438 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u043d\u0430\u043b\u0435\u0433\u043a\u0435. \u0420\u044e\u043a\u0437\u0430\u043a NorthFace \u043e\u0431\u043b\u0430\u0434\u0430\u044f \u043e\u0431\u044a\u0435\u043c\u043e\u043c 50\u043b, \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442 \u0434\u043b\u044f \u0441\u043a\u0430\u043b\u043e\u043b\u0430\u0437\u0430\u043d\u0438\u044f, \u043f\u043e\u0445\u043e\u0434\u043e\u0432 \u0438 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439.",
            column: [
              "\u041e\u0431\u044a\u0435\u043c: 50\u043b",
              "\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f: \u041c\u044f\u0433\u043a\u0438\u0439 (\u0431\u0435\u0437 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0436\u0435\u0441\u0442\u043a\u043e\u0441\u0442\u0438)",
            ],
          },
          {
            id: xn(),
            title:
              "\u0422\u0420\u0415\u041a\u0418\u041d\u0413\u041e\u0412\u042b\u0415 \u041f\u0410\u041b\u041a\u0418 DECATHLON",
            img: "trekking_poles_DECATHLON.avif",
            desc: "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0442 \u0438\u0437 2\u0448\u0442, \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 ",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 5,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f, \u043d\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0438 Push-pin. \u041e\u043d \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043d\u0430 \u043a\u043d\u043e\u043f\u043e\u0447\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435.",
            column: [
              "3 \u0442\u0435\u043b\u0435\u0441\u043a\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0447\u0430\u0441\u0442\u0438",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u044f\u0440\u0443\u0441\u0430: 55 \u0441\u043c",
              "\u0428\u0438\u0440\u0438\u043d\u0430 \u0432 \u0440\u0430\u0441\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u0438\u0434\u0435: ~5\u0441\u043c",
              "\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 \u0441\u0442\u0435\u0440\u0436\u043d\u0438 6061-T6",
              "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0441\u0442\u0435\u0440\u0436\u043d\u044f 20/18/16 \u043c\u043c",
              "\u0421\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a",
              "\u0412\u0435\u0441: 200 \u0433\u0440.",
            ],
          },
          {
            id: xn(),
            title:
              "\u0422\u0420\u0415\u041a\u0418\u041d\u0413\u041e\u0412\u042b\u0415 \u041f\u0410\u041b\u041a\u0418 DECATHLON",
            img: "trekking_poles_DECATHLON.avif",
            desc: "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0442 \u0438\u0437 2\u0448\u0442, \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 ",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 6,
            shortly:
              "\u041f\u0440\u043e\u0441\u0442\u0430\u044f, \u043d\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0438 Push-pin. \u041e\u043d \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043d\u0430 \u043a\u043d\u043e\u043f\u043e\u0447\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435.",
            column: [
              "3 \u0442\u0435\u043b\u0435\u0441\u043a\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0447\u0430\u0441\u0442\u0438",
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u044f\u0440\u0443\u0441\u0430: 55 \u0441\u043c",
              "\u0428\u0438\u0440\u0438\u043d\u0430 \u0432 \u0440\u0430\u0441\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u0438\u0434\u0435: ~5\u0441\u043c",
              "\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 \u0441\u0442\u0435\u0440\u0436\u043d\u0438 6061-T6",
              "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0441\u0442\u0435\u0440\u0436\u043d\u044f 20/18/16 \u043c\u043c",
              "\u0421\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a",
              "\u0412\u0435\u0441: 200 \u0433\u0440.",
            ],
          },
          {
            id: xn(),
            title:
              "C\u0418\u0414\u0415\u041d\u042c\u0415 \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u041e\u0415 DECATHLON",
            img: "sitting_DECATHLON.png",
            desc: "\u0418\u0437 \u043f\u0435\u043d\u043e\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430 \u0441 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0441\u043b\u043e\u0435\u043c",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 2,
            shortly:
              "\u0421\u0438\u0434\u0435\u043d\u044c\u0435 \u0441 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043a\u0430\u0440\u043a\u0430\u0441\u043e\u043c \u0438\u0437 \u043f\u0435\u043d\u043e\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430, \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0434\u043b\u044f \u0442\u0440\u0435\u043a\u043a\u0438\u043d\u0433\u0430.",
            column: [
              "\u0412\u0435\u0441: 60 \u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b: 34*23,7*1,5 \u0441\u043c",
              "\u042d\u043b\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f \u043b\u0435\u043d\u0442\u0430 \u0441 \u043a\u043b\u0438\u043f\u0441\u043e\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",
            ],
          },
          {
            id: xn(),
            title:
              "C\u0418\u0414\u0415\u041d\u042c\u0415 \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u041e\u0415 DECATHLON",
            img: "sitting_DECATHLON.png",
            desc: "\u0418\u0437 \u043f\u0435\u043d\u043e\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430 \u0441 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0441\u043b\u043e\u0435\u043c",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 3,
            shortly:
              "\u0421\u0438\u0434\u0435\u043d\u044c\u0435 \u0441 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043a\u0430\u0440\u043a\u0430\u0441\u043e\u043c \u0438\u0437 \u043f\u0435\u043d\u043e\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430, \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0434\u043b\u044f \u0442\u0440\u0435\u043a\u043a\u0438\u043d\u0433\u0430.",
            column: [
              "\u0412\u0435\u0441: 60 \u0433",
              "\u0420\u0430\u0437\u043c\u0435\u0440\u044b: 34*23,7*1,5 \u0441\u043c",
              "\u042d\u043b\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f \u043b\u0435\u043d\u0442\u0430 \u0441 \u043a\u043b\u0438\u043f\u0441\u043e\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",
            ],
          },
          {
            id: xn(),
            title:
              "\u041a\u041e\u0412\u0420\u0418\u041a \u0414\u041b\u042f \u041f\u041e\u0425\u041e\u0414\u041e\u0412 \u0418 \u0421\u041f\u041e\u0420\u0422\u0410",
            img: "mat40.jpg",
            desc: "173*61*0,7\u0441\u043c ",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438/\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 4,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: \u042d\u0412\u0410",
            ],
          },
          {
            id: xn(),
            title:
              "\u041a\u041e\u0412\u0420\u0418\u041a \u0421 \u0410\u041b\u042e\u041c\u0418\u041d\u0418\u0415\u0412\u041e\u0419 \u0424\u041e\u041b\u042c\u0413\u041e\u0419 FORA",
            img: "mat_aluminum_foil_FORA.jpg",
            desc: "180*60*0,6\u0441\u043c ",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438/\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 4,
            column: [
              "\u041e\u0434\u043d\u043e\u0441\u043b\u043e\u0439\u043d\u044b\u0439",
            ],
          },
          {
            id: xn(),
            title:
              "\u0413\u041e\u0420\u0415\u041b\u041a\u0410 \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "burner32.jpg",
            desc: "Nurgaz TS-5310 ",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 3,
            column: [
              "\u041c\u043e\u0449\u043d\u0430\u044f \u043d\u0435\u0440\u0436\u0430\u0432\u0435\u044e\u0449\u0430\u044f \u0433\u043e\u0440\u0435\u043b\u043a\u0430",
              "\u041a\u043b\u0430\u043f\u0430\u043d \u043c\u0438\u0440\u043e\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441 7/16",
              "\u0414\u043e\u043b\u0433\u043e\u0432\u0435\u0447\u043d\u044b\u0439 \u043b\u0430\u0442\u0443\u043d\u043d\u044b\u0439 \u043a\u0440\u0430\u043d",
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e: \u0422\u0443\u0440\u0446\u0438\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0413\u041e\u0420\u0415\u041b\u041a\u0410 \u0422\u0423\u0420\u0418\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u0418\u0419",
            img: "burner32.jpg",
            desc: "Nurgaz TS-5310 ",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 4,
            column: [
              "\u041c\u043e\u0449\u043d\u0430\u044f \u043d\u0435\u0440\u0436\u0430\u0432\u0435\u044e\u0449\u0430\u044f \u0433\u043e\u0440\u0435\u043b\u043a\u0430",
              "\u041a\u043b\u0430\u043f\u0430\u043d \u043c\u0438\u0440\u043e\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441 7/16",
              "\u0414\u043e\u043b\u0433\u043e\u0432\u0435\u0447\u043d\u044b\u0439 \u043b\u0430\u0442\u0443\u043d\u043d\u044b\u0439 \u043a\u0440\u0430\u043d",
              "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e: \u0422\u0443\u0440\u0446\u0438\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0413\u0415\u0420\u041c\u041e\u041f\u0410\u041a\u0415\u0422 BTRACE",
            img: "packageBTRACE.jpg",
            desc: "\u041f\u041b\u041e\u0421\u041a\u0418\u0419 \u041f\u0412\u0425 20X13\u0441\u043c",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 3,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: \u041f\u0412\u0425",
            ],
          },
          {
            id: xn(),
            title:
              "\u0413\u0415\u0420\u041c\u041e\u041f\u0410\u041a\u0415\u0422 BTRACE",
            img: "packageBTRACE.jpg",
            desc: "\u041f\u041b\u041e\u0421\u041a\u0418\u0419 \u041f\u0412\u0425 20X13\u0441\u043c",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 4,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: \u041f\u0412\u0425",
            ],
          },
          {
            id: xn(),
            title:
              "\u0427\u0410\u0419\u041d\u0418\u041a \u041f\u041e\u0425\u041e\u0414\u041d\u042b\u0419 BTRACE 1,1\u041b",
            img: "teapot_BTRACE1.jpg",
            desc: "\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439 \u0430\u043d\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 7,
            column: [
              "\u0412\u0435\u0441 (\u0433): 215",
              "\u041e\u0431\u044a\u0435\u043c (\u043c\u043b): 1100",
            ],
          },
          {
            id: xn(),
            title:
              "\u0427\u0410\u0419\u041d\u0418\u041a \u041f\u041e\u0425\u041e\u0414\u041d\u042b\u0419 BTRACE 1,1\u041b",
            img: "teapot_BTRACE1.jpg",
            desc: "\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439 \u0430\u043d\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 8,
            column: [
              "\u0412\u0435\u0441 (\u0433): 215",
              "\u041e\u0431\u044a\u0435\u043c (\u043c\u043b): 1100",
            ],
          },
          {
            id: xn(),
            title:
              "\u0424\u041e\u041d\u0410\u0420\u0418\u041a \u041d\u0410\u041b\u041e\u0411\u041d\u042b\u0419",
            img: "lantern_blue.jpg",
            desc: "X-BALOG BL-539 ",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 2,
            column: [
              "\u041f\u0438\u0442\u0430\u043d\u0438\u0435: 3 \u0448\u0442 \u0410\u0410\u0410",
              "\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044b: 55*45*43",
              "\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438 \u0440\u0435\u043c\u0435\u0448\u043e\u043a \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0424\u041e\u041d\u0410\u0420\u0418\u041a \u041d\u0410\u041b\u041e\u0411\u041d\u042b\u0419",
            img: "lantern_blue.jpg",
            desc: "X-BALOG BL-539 ",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 2.5,
            column: [
              "\u041f\u0438\u0442\u0430\u043d\u0438\u0435: 3 \u0448\u0442 \u0410\u0410\u0410",
              "\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044b: 55*45*43",
              "\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438 \u0440\u0435\u043c\u0435\u0448\u043e\u043a \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u0422\u0423\u041b \u0421\u041a\u041b\u0410\u0414\u041d\u041e\u0419 \u041f\u041e\u0425\u041e\u0414\u041d\u042b\u0419",
            img: "folding_chair.jpg",
            desc: "35*26\u0441\u043c \u0432\u0435\u0441 0,510\u043a\u0433",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 3,
            column: [
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0441\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435: 47*33 \u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u0421\u0422\u0423\u041b \u0421\u041a\u041b\u0410\u0414\u041d\u041e\u0419 \u041f\u041e\u0425\u041e\u0414\u041d\u042b\u0419",
            img: "folding_chair.jpg",
            desc: "35*26\u0441\u043c \u0432\u0435\u0441 0,510\u043a\u0433",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 4,
            column: [
              "\u0420\u0430\u0437\u043c\u0435\u0440 \u0432 \u0441\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435: 47*33 \u0441\u043c",
            ],
          },
          {
            id: xn(),
            title:
              "\u0417\u041e\u041d\u0422 \u041f\u041b\u042f\u0416\u041d\u042b\u0419 (\u0421\u041a\u041b\u0410\u0414\u041d\u041e\u0419)",
            img: "umbrella.jpg",
            desc: "35*26\u0441\u043c \u0432\u0435\u0441 0,510\u043a\u0433",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 3,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0443\u043f\u043e\u043b\u0430: \u041d\u0435\u0439\u043b\u043e\u043d",
              "\u0420\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0430 \u0432\u044b\u0441\u043e\u0442\u044b: \u0415\u0441\u0442\u044c",
              "\u0412\u0435\u0441: 600\u0433\u0440",
            ],
          },
          {
            id: xn(),
            title:
              "\u0417\u041e\u041d\u0422 \u041f\u041b\u042f\u0416\u041d\u042b\u0419 (\u0421\u041a\u041b\u0410\u0414\u041d\u041e\u0419)",
            img: "umbrella.jpg",
            desc: "35*26\u0441\u043c \u0432\u0435\u0441 0,510\u043a\u0433",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 4,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0443\u043f\u043e\u043b\u0430: \u041d\u0435\u0439\u043b\u043e\u043d",
              "\u0420\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0430 \u0432\u044b\u0441\u043e\u0442\u044b: \u0415\u0441\u0442\u044c",
              "\u0412\u0435\u0441: 600\u0433\u0440",
            ],
          },
          {
            id: xn(),
            title:
              "\u0422\u0415\u041d\u0422 \u041f\u041e\u041b\u0418\u042d\u0421\u0422\u0415\u0420 4*4\u043c",
            img: "awning.jpg",
            desc: "35*26\u0441\u043c \u0432\u0435\u0441 0,510\u043a\u0433",
            category: "rent",
            day: "\u0431\u0443\u0434\u043d\u0438",
            price: 5,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: \u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 \u0441 \u041f\u0423 \u043f\u0440\u043e\u043f\u0438\u0442\u043a\u043e\u0439",
            ],
          },
          {
            id: xn(),
            title:
              "\u0422\u0415\u041d\u0422 \u041f\u041e\u041b\u0418\u042d\u0421\u0422\u0415\u0420 4*4\u043c",
            img: "awning.jpg",
            desc: "35*26\u0441\u043c \u0432\u0435\u0441 0,510\u043a\u0433",
            category: "rent",
            day: "\u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435",
            price: 6,
            column: [
              "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0442\u0435\u043d\u0442\u0430: \u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440 \u0441 \u041f\u0423 \u043f\u0440\u043e\u043f\u0438\u0442\u043a\u043e\u0439",
            ],
          },
        ],
        Pn = function () {
          return (0, fn.jsxs)("div", {
            className: "home-page__container",
            children: [
              (0, fn.jsx)("div", { className: "home-page" }),
              (0, fn.jsx)("div", {
                className: "title",
                children: "\u041f\u0420\u041e\u0414\u0410\u0416\u0410",
              }),
              (0, fn.jsx)("div", {
                className: "home-page-product",
                children: _n.map(function (e) {
                  return (0, fn.jsx)(mn, { product: e }, e.id);
                }),
              }),
              (0, fn.jsx)("div", {
                className: "title",
                children: "\u0410\u0420\u0415\u041d\u0414\u0410",
              }),
              (0, fn.jsx)("div", {
                className: "home-page-product",
                children: Cn.map(function (e) {
                  return (0, fn.jsx)(gn, { rent: e }, e.id);
                }),
              }),
            ],
          });
        };
      function Nn() {
        return (
          (Nn =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Nn.apply(this, arguments)
        );
      }
      function jn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var On = [
        "onClick",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
      ];
      function Tn(e) {
        var n = e.basename,
          m = e.children,
          h = e.window,
          g = (0, p.useRef)();
        null == g.current &&
          (g.current = (function (e) {
            void 0 === e && (e = {});
            var t = e.window,
              n = void 0 === t ? document.defaultView : t,
              p = n.history;
            function m() {
              var e = n.location,
                t = e.pathname,
                r = e.search,
                a = e.hash,
                l = p.state || {};
              return [
                l.idx,
                o({
                  pathname: t,
                  search: r,
                  hash: a,
                  state: l.usr || null,
                  key: l.key || "default",
                }),
              ];
            }
            var h = null;
            n.addEventListener(i, function () {
              if (h) S.call(h), (h = null);
              else {
                var e = a.Pop,
                  t = m(),
                  n = t[0],
                  r = t[1];
                if (S.length) {
                  if (null != n) {
                    var o = v - n;
                    o &&
                      ((h = {
                        action: e,
                        location: r,
                        retry: function () {
                          P(-1 * o);
                        },
                      }),
                      P(o));
                  }
                } else C(e);
              }
            });
            var g = a.Pop,
              y = m(),
              v = y[0],
              b = y[1],
              w = c(),
              S = c();
            function k(e) {
              return "string" === typeof e ? e : f(e);
            }
            function E(e, t) {
              return (
                void 0 === t && (t = null),
                o(
                  r(
                    { pathname: b.pathname, hash: "", search: "" },
                    "string" === typeof e ? d(e) : e,
                    { state: t, key: s() }
                  )
                )
              );
            }
            function x(e, t) {
              return [{ usr: e.state, key: e.key, idx: t }, k(e)];
            }
            function _(e, t, n) {
              return (
                !S.length || (S.call({ action: e, location: t, retry: n }), !1)
              );
            }
            function C(e) {
              g = e;
              var t = m();
              (v = t[0]), (b = t[1]), w.call({ action: g, location: b });
            }
            function P(e) {
              p.go(e);
            }
            null == v &&
              ((v = 0), p.replaceState(r({}, p.state, { idx: v }), ""));
            var N = {
              get action() {
                return g;
              },
              get location() {
                return b;
              },
              createHref: k,
              push: function e(t, r) {
                var o = a.Push,
                  l = E(t, r);
                if (
                  _(o, l, function () {
                    e(t, r);
                  })
                ) {
                  var i = x(l, v + 1),
                    u = i[0],
                    c = i[1];
                  try {
                    p.pushState(u, "", c);
                  } catch (s) {
                    n.location.assign(c);
                  }
                  C(o);
                }
              },
              replace: function e(t, n) {
                var r = a.Replace,
                  o = E(t, n);
                if (
                  _(r, o, function () {
                    e(t, n);
                  })
                ) {
                  var l = x(o, v),
                    i = l[0],
                    u = l[1];
                  p.replaceState(i, "", u), C(r);
                }
              },
              go: P,
              back: function () {
                P(-1);
              },
              forward: function () {
                P(1);
              },
              listen: function (e) {
                return w.push(e);
              },
              block: function (e) {
                var t = S.push(e);
                return (
                  1 === S.length && n.addEventListener(l, u),
                  function () {
                    t(), S.length || n.removeEventListener(l, u);
                  }
                );
              },
            };
            return N;
          })({ window: h }));
        var y = g.current,
          v = t((0, p.useState)({ action: y.action, location: y.location }), 2),
          b = v[0],
          w = v[1];
        return (
          (0, p.useLayoutEffect)(
            function () {
              return y.listen(w);
            },
            [y]
          ),
          (0, p.createElement)(M, {
            basename: n,
            children: m,
            location: b.location,
            navigationType: b.action,
            navigator: y,
          })
        );
      }
      var Rn = (0, p.forwardRef)(function (e, t) {
        var n = e.onClick,
          r = e.reloadDocument,
          a = e.replace,
          o = void 0 !== a && a,
          l = e.state,
          i = e.target,
          u = e.to,
          c = jn(e, On),
          s = T(u),
          d = (function (e, t) {
            var n = void 0 === t ? {} : t,
              r = n.target,
              a = n.replace,
              o = n.state,
              l = z(),
              i = L(),
              u = A(e);
            return (0, p.useCallback)(
              function (t) {
                if (
                  0 === t.button &&
                  (!r || "_self" === r) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(t)
                ) {
                  t.preventDefault();
                  var n = !!a || f(i) === f(u);
                  l(e, { replace: n, state: o });
                }
              },
              [i, l, u, a, o, r, e]
            );
          })(u, { replace: o, state: l, target: i });
        return (0, p.createElement)(
          "a",
          Nn({}, c, {
            href: s,
            onClick: function (e) {
              n && n(e), e.defaultPrevented || r || d(e);
            },
            ref: t,
            target: i,
          })
        );
      });
      function Ln(e) {
        return rn({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
              },
            },
          ],
        })(e);
      }
      function zn(e) {
        return rn({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
              },
            },
          ],
        })(e);
      }
      function An(e) {
        return rn({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z",
              },
            },
          ],
        })(e);
      }
      function Dn(e) {
        return rn({
          tag: "svg",
          attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z",
              },
            },
          ],
        })(e);
      }
      function In(e) {
        return rn({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
              },
            },
          ],
        })(e);
      }
      function Mn(e) {
        return rn({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
              },
            },
          ],
        })(e);
      }
      function Fn(e) {
        return rn({
          tag: "svg",
          attr: {
            t: "1569683925316",
            viewBox: "0 0 1024 1024",
            version: "1.1",
          },
          child: [
            { tag: "defs", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z",
              },
            },
          ],
        })(e);
      }
      var Un = function (e) {
          var t = e.img,
            n = e.title,
            r = e.price,
            a = e.id,
            o = e.count,
            l = ie(),
            i = function () {
              l(Kt(a));
            };
          return (0, fn.jsx)("div", {
            className: "cover",
            children: (0, fn.jsxs)("div", {
              className: "cart-item",
              children: [
                (0, fn.jsx)("img", {
                  className: "cart-item__img",
                  src: "/adjarapeak/img/" + t,
                  alt: n,
                }),
                (0, fn.jsx)("div", {
                  className: "cart-item__title",
                  children: (0, fn.jsx)("span", { children: n }),
                }),
                o >= 0
                  ? (0, fn.jsxs)("div", {
                      className: "cart-item__count_but",
                      children: [
                        (0, fn.jsx)(dn, {
                          onClick: function () {
                            l(qt({ id: a }));
                          },
                          children: (0, fn.jsx)(In, {
                            className: "cart-item__count",
                            size: 20,
                          }),
                        }),
                        o,
                        (0, fn.jsx)(dn, {
                          onClick: function () {
                            l(Xt({ id: a }));
                          },
                          children: (0, fn.jsx)(Mn, {
                            className: "cart-item__count",
                            size: 20,
                          }),
                        }),
                      ],
                    })
                  : i(),
                (0, fn.jsx)("div", {
                  children: (0, fn.jsxs)("span", {
                    className: "cart-item__price",
                    children: [r * o, "\u20be"],
                  }),
                }),
                (0, fn.jsx)("div", {
                  children: (0, fn.jsx)(Dn, {
                    size: 25,
                    className: "cart-item__delete",
                    onClick: i,
                  }),
                }),
              ],
            }),
          });
        },
        Hn = function (e) {
          return e.reduce(function (e, t) {
            return e + t.price * t.count;
          }, 0);
        },
        Bn = function (e) {
          var t = e.items,
            n = e.onClick;
          return (0, fn.jsxs)("div", {
            className: "cart-menu",
            children: [
              (0, fn.jsx)("div", {
                className: "cart-menu__list",
                children:
                  t.length > 0
                    ? t.map(function (e) {
                        return (0,
                        fn.jsx)(Un, { img: e.img, price: e.price, title: e.title, id: e.id, count: e.count }, e.id);
                      })
                    : "\u041a\u0430\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430",
              }),
              t.length > 0
                ? (0, fn.jsxs)("div", {
                    className: "cart-menu__arranged",
                    children: [
                      (0, fn.jsxs)("div", {
                        className: "cart-menu__total-price",
                        children: [
                          (0, fn.jsx)("span", {
                            children: "\u0418\u0442\u043e\u0433\u043e:",
                          }),
                          " ",
                          (0, fn.jsxs)("span", { children: [Hn(t), "\u20be"] }),
                        ],
                      }),
                      (0, fn.jsx)(dn, {
                        type: "primary",
                        size: "m",
                        onClick: n,
                        children:
                          "\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",
                      }),
                    ],
                  })
                : null,
            ],
          });
        },
        $n = function (e) {
          var t = e.quantity,
            n = void 0 === t ? 0 : t;
          return n > 0
            ? (0, fn.jsx)("div", { className: "items-in-cart", children: n })
            : null;
        },
        Vn = function () {
          var e = t((0, p.useState)(!1), 2),
            n = e[0],
            r = e[1],
            a = Z(function (e) {
              return e.cart.itemsInCart;
            }),
            o = z(),
            l = (0, p.useCallback)(
              function () {
                r(!1), o("/order");
              },
              [o]
            ),
            i = Hn(a),
            u = a.reduce(function (e, t) {
              return e + t.count;
            }, 0);
          return (0, fn.jsxs)("div", {
            className: "cart-block",
            children: [
              (0, fn.jsx)($n, { quantity: u }),
              (0, fn.jsx)(dn, {
                children: (0, fn.jsx)(Ln, {
                  size: "25",
                  className: "cart-icon",
                  onClick: function () {
                    return r(!n);
                  },
                }),
              }),
              i > 0
                ? (0, fn.jsxs)("div", {
                    className: "cart-price",
                    children: [i, "\u20be"],
                  })
                : null,
              n && (0, fn.jsx)(Bn, { items: a, onClick: l }),
            ],
          });
        },
        Wn = n.p + "static/media/adjara.443bef245fde3156441e.jpg",
        Qn = function () {
          return (0, fn.jsxs)("div", {
            className: "header",
            children: [
              (0, fn.jsx)("div", {
                className: "wrapper",
                children: (0, fn.jsx)(Rn, {
                  to: "/adjarapeak",
                  children: (0, fn.jsx)("img", {
                    src: Wn,
                    alt: "adjara peak",
                    width: "130px",
                  }),
                }),
              }),
              (0, fn.jsxs)("div", {
                className: "location",
                children: [
                  (0, fn.jsx)(ln, { size: 25, color: "#de682d" }),
                  (0, fn.jsx)("span", {
                    children:
                      "\u0411\u0430\u0442\u0443\u043c\u0438 \u0443\u043b.\u0422\u0431\u0435\u043b-\u0410\u0431\u0443\u0441\u0435\u0440\u0438\u0434\u0437\u0435,38 (10:00-18:00)",
                  }),
                ],
              }),
              (0, fn.jsx)("div", {
                className: "number",
                children: "+995 511 147 586",
              }),
              (0, fn.jsx)("a", {
                href: "https://www.instagram.com/adjarapeak/?igshid=YmMyMTA2M2Y%3D",
                children: (0, fn.jsx)(zn, { className: "instagram" }),
              }),
              (0, fn.jsx)("a", {
                href: "https://t.me/shpaksn",
                children: (0, fn.jsx)(An, { className: "icon-telegram" }),
              }),
              (0, fn.jsx)("a", {
                href: "https://wa.me/995511147586",
                children: (0, fn.jsx)(Fn, { className: "icon-whatsApp" }),
              }),
              (0, fn.jsx)("div", {
                className: "cart",
                children: (0, fn.jsx)(Vn, {}),
              }),
            ],
          });
        },
        Kn = function () {
          var e = Z(function (e) {
              return e.products.currentProduct;
            }),
            t = Z(function (e) {
              return e.products.currentProduct.column;
            });
          return e
            ? (0, fn.jsxs)("div", {
                className: "product-page",
                children: [
                  (0, fn.jsx)("h1", {
                    className: "product-page__title",
                    children: e.title,
                  }),
                  (0, fn.jsxs)("div", {
                    className: "product-page__content",
                    children: [
                      (0, fn.jsxs)("div", {
                        className: "product-page__left",
                        children: [
                          (0, fn.jsx)("p", { children: e.desc }),
                          (0, fn.jsx)("p", { children: e.shortly }),
                          (0, fn.jsx)("img", {
                            className: "product-page__img",
                            src: "/adjarapeak/img/" + e.img,
                            alt: e.title,
                          }),
                        ],
                      }),
                      (0, fn.jsxs)("div", {
                        className: "product-page__right",
                        children: [
                          (0, fn.jsx)("ul", {
                            className: "column",
                            children: t.map(function (e) {
                              return (0,
                              fn.jsx)("li", { className: "column__list", children: e }, e);
                            }),
                          }),
                          (0, fn.jsxs)("div", {
                            className: "product-page__price__buy",
                            children: [
                              (0, fn.jsx)("div", {
                                className: "product-page__day",
                                children: e.day,
                              }),
                              (0, fn.jsx)("div", {
                                children: (0, fn.jsx)(pn, { product: e }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : null;
        },
        qn = function (e) {
          var t = e.item,
            n = ie();
          return (0, fn.jsxs)("div", {
            className: "order-item",
            children: [
              (0, fn.jsx)("div", {
                className: "order-item__cover",
                children: (0, fn.jsx)("img", {
                  className: "order-items__img",
                  src: "/adjarapeak/img/" + t.img,
                  alt: t.title,
                }),
              }),
              (0, fn.jsx)("div", {
                className: "order-item__title",
                children: t.title,
              }),
              (0, fn.jsxs)("div", {
                className: "order-item__price",
                children: [
                  (0, fn.jsxs)("span", {
                    children: [t.price * t.count, "\u20be"],
                  }),
                  (0, fn.jsx)(dn, {
                    children: (0, fn.jsx)(Dn, {
                      size: 25,
                      className: "order-item__delete",
                      onClick: function () {
                        n(Kt(t.id));
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Xn = function () {
          var e,
            t,
            n = Z(function (e) {
              return e.cart.itemsInCart;
            });
          return n.length < 1
            ? (0, fn.jsx)("h1", {
                children:
                  "\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430!",
              })
            : (0, fn.jsxs)("div", {
                className: "order-page",
                children: [
                  (0, fn.jsx)("div", {
                    className: "order-page__left",
                    children: n.map(function (e) {
                      return (0, fn.jsx)(qn, { item: e }, e.id);
                    }),
                  }),
                  (0, fn.jsx)("div", {
                    className: "order-page__right",
                    children: (0, fn.jsxs)("div", {
                      className: "order-page__totalprice",
                      children: [
                        (0, fn.jsxs)("h4", {
                          children: [
                            n.length,
                            ((e = n.length),
                            (t = [
                              "\u0442\u043e\u0432\u0430\u0440",
                              "\u0442\u043e\u0432\u0430\u0440\u0430",
                              "\u0442\u043e\u0432\u0430\u0440\u043e\u0432",
                            ]),
                            e > 100 && (e %= 100),
                            e <= 20 && e >= 10
                              ? t[2]
                              : (e > 20 && (e %= 10),
                                1 === e ? t[0] : e > 1 && e < 5 ? t[1] : t[2])),
                            " \u043d\u0430 \u0441\u0443\u043c\u043c\u0443",
                            " ",
                            Hn(n),
                            "\u20be",
                          ],
                        }),
                        (0, fn.jsx)("h3", {
                          children:
                            "\u0414\u043b\u044f \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430 \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443 +995 511 147 586. \u0421 \u0443\u0432\u0430\u0436\u0435\u043d\u0438\u0435\u043c Adjara Peak.",
                        }),
                      ],
                    }),
                  }),
                ],
              });
        },
        Yn = n.p + "static/media/certificate.28c932b10cd698e1e4aa.jpg",
        Gn = function () {
          return (0, fn.jsxs)("div", {
            className: "footer-container",
            children: [
              (0, fn.jsxs)("ul", {
                children: [
                  (0, fn.jsx)("li", {
                    children:
                      "\u041f\u0435\u0440\u0432\u044b\u0439 \u0432 \u0410\u0434\u0436\u0430\u0440\u0438\u0438",
                  }),
                  (0, fn.jsx)("li", {
                    children:
                      '\u041f\u0440\u043e\u0434\u0430\u0436\u0430, \u043f\u0440\u043e\u043a\u0430\u0442 \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 "\u043f\u043e\u0434 \u0437\u0430\u043a\u0430\u0437"',
                  }),
                  (0, fn.jsx)("li", {
                    children:
                      "\u0422\u043e\u043b\u044c\u043a\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043d\u0430\u0440\u044f\u0436\u0435\u043d\u0438\u0435",
                  }),
                  (0, fn.jsx)("li", {
                    children:
                      "\u0411\u0430\u0442\u0443\u043c\u0438 \u0443\u043b.\u0422\u0431\u0435\u043b-\u0410\u0431\u0443\u0441\u0435\u0440\u0438\u0434\u0437\u0435,38 (10:00-18:00)",
                  }),
                  (0, fn.jsx)("li", { children: "+995 511 147 586" }),
                ],
              }),
              (0, fn.jsxs)("div", {
                className: "certificate-container",
                children: [
                  (0, fn.jsx)("div", {
                    className: "certificate-title",
                    children:
                      "\u0412 ADJARA PEAK \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0441\u0443\u043c\u043c\u0443",
                  }),
                  (0, fn.jsx)("img", {
                    className: "image",
                    src: Yn,
                    alt: "certificate",
                    width: 350,
                  }),
                ],
              }),
            ],
          });
        };
      var Zn = function () {
          return (0, fn.jsxs)("div", {
            className: "App",
            children: [
              (0, fn.jsx)(Qn, {}),
              (0, fn.jsxs)(F, {
                children: [
                  (0, fn.jsx)(I, {
                    exact: !0,
                    path: "/adjarapeak",
                    element: (0, fn.jsx)(Pn, {}),
                  }),
                  (0, fn.jsx)(I, {
                    exact: !0,
                    path: "app/:title",
                    element: (0, fn.jsx)(Kn, {}),
                  }),
                  (0, fn.jsx)(I, {
                    exact: !0,
                    path: "/order",
                    element: (0, fn.jsx)(Xn, {}),
                  }),
                ],
              }),
              (0, fn.jsx)(Gn, {}),
            ],
          });
        },
        Jn = n(250),
        er = (function (e) {
          var t,
            n = Dt(),
            r = e || {},
            a = r.reducer,
            o = void 0 === a ? void 0 : a,
            l = r.middleware,
            i = void 0 === l ? n() : l,
            u = r.devTools,
            c = void 0 === u || u,
            s = r.preloadedState,
            f = void 0 === s ? void 0 : s,
            d = r.enhancers,
            p = void 0 === d ? void 0 : d;
          if ("function" === typeof o) t = o;
          else {
            if (!Lt(o))
              throw new Error(
                '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
              );
            t = vt(o);
          }
          var m = i;
          "function" === typeof m && (m = m(n));
          var h = wt.apply(void 0, m),
            g = bt;
          c && (g = Rt(Tt({ trace: !1 }, "object" === typeof c && c)));
          var y = [h];
          return (
            Array.isArray(p)
              ? (y = _t([h], p))
              : "function" === typeof p && (y = p(y)),
            yt(t, f, g.apply(void 0, y))
          );
        })({ reducer: { cart: Yt, products: $t } });
      Jn.createRoot(document.getElementById("root")).render(
        (0, fn.jsx)(ne, {
          store: er,
          children: (0, fn.jsx)(Tn, { children: (0, fn.jsx)(Zn, {}) }),
        })
      );
    })();
})();
//# sourceMappingURL=main.c1ca44b3.js.map
