/*!
 * Bootstrap v4.1.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, e, c) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }

  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t
  }

  function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(s);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t) {
        return Object.getOwnPropertyDescriptor(s, t).enumerable
      }))), e.forEach(function (t) {
        var e, n, i;
        e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i
      })
    }
    return r
  }
  e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c;
  var r, n, s, a, l, u, f, d, _, g, m, p, v, E, y, T, C, I, A, D, b, S, w, N, O, k, P, L, j, R, H, W, M, x, U, K, F, V, Q, B, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, st, ot, at, lt, ht, ct, ut, ft, dt, _t, gt, mt, pt, vt, Et, yt, Tt, Ct, It, At, Dt, bt, St, wt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, Mt, xt, Ut, Kt, Ft, Vt, Qt, Bt, Yt, Gt, qt, zt, Xt, Jt, Zt, $t, te, ee, ne, ie, re, se, oe, ae, le, he, ce, ue, fe, de, _e, ge, me, pe, ve, Ee, ye, Te, Ce, Ie, Ae, De, be, Se, we, Ne, Oe, ke, Pe, Le, je, Re, He, We, Me, xe, Ue, Ke, Fe, Ve, Qe, Be, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, sn, on, an, ln, hn, cn, un, fn, dn, _n, gn, mn, pn, vn, En, yn, Tn, Cn = function (i) {
      var e = "transitionend";

      function t(t) {
        var e = this,
          n = !1;
        return i(this).one(l.TRANSITION_END, function () {
          n = !0
        }), setTimeout(function () {
          n || l.triggerTransitionEnd(e)
        }, t), this
      }
      var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
          return t
        },
        getSelectorFromElement: function (t) {
          var e = t.getAttribute("data-target");
          e && "#" !== e || (e = t.getAttribute("href") || "");
          try {
            return 0 < i(document).find(e).length ? e : null
          } catch (t) {
            return null
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var e = i(t).css("transition-duration");
          return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0
        },
        reflow: function (t) {
          return t.offsetHeight
        },
        triggerTransitionEnd: function (t) {
          i(t).trigger(e)
        },
        supportsTransitionEnd: function () {
          return Boolean(e)
        },
        isElement: function (t) {
          return (t[0] || t).nodeType
        },
        typeCheckConfig: function (t, e, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var r = n[i],
                s = e[i],
                o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
              if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
            } var a
        }
      };
      return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function (t) {
          if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
      }, l
    }(e),
    Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0
    }, x = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
    }, U = "next", K = "prev", F = "left", V = "right", Q = {
      SLIDE: "slide" + R,
      SLID: "slid" + R,
      KEYDOWN: "keydown" + R,
      MOUSEENTER: "mouseenter" + R,
      MOUSELEAVE: "mouseleave" + R,
      TOUCHEND: "touchend" + R,
      LOAD_DATA_API: "load" + R + H,
      CLICK_DATA_API: "click" + R + H
    }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = {
      ACTIVE: ".active",
      ACTIVE_ITEM: ".active.carousel-item",
      ITEM: ".carousel-item",
      NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
      INDICATORS: ".carousel-indicators",
      DATA_SLIDE: "[data-slide], [data-slide-to]",
      DATA_RIDE: '[data-ride="carousel"]'
    }, $ = function () {
      function s(t, e) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners()
      }
      var t = s.prototype;
      return t.next = function () {
        this._isSliding || this._slide(U)
      }, t.nextWhenVisible = function () {
        !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
      }, t.prev = function () {
        this._isSliding || this._slide(K)
      }, t.pause = function (t) {
        t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, t.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, t.to = function (t) {
        var e = this;
        this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
        var n = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0))
          if (this._isSliding) P(this._element).one(Q.SLID, function () {
            return e.to(t)
          });
          else {
            if (n === t) return this.pause(), void this.cycle();
            var i = n < t ? U : K;
            this._slide(i, this._items[t])
          }
      }, t.dispose = function () {
        P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, t._getConfig = function (t) {
        return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t
      }, t._addEventListeners = function () {
        var e = this;
        this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
          return e._keydown(t)
        }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) {
          return e.pause(t)
        }).on(Q.MOUSELEAVE, function (t) {
          return e.cycle(t)
        }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t)
          }, 500 + e._config.interval)
        }))
      }, t._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;
          case 39:
            t.preventDefault(), this.next()
        }
      }, t._getItemIndex = function (t) {
        return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t)
      }, t._getItemByDirection = function (t, e) {
        var n = t === U,
          i = t === K,
          r = this._getItemIndex(e),
          s = this._items.length - 1;
        if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
        var o = (r + (t === K ? -1 : 1)) % this._items.length;
        return -1 === o ? this._items[this._items.length - 1] : this._items[o]
      }, t._triggerSlideEvent = function (t, e) {
        var n = this._getItemIndex(t),
          i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
          r = P.Event(Q.SLIDE, {
            relatedTarget: t,
            direction: e,
            from: i,
            to: n
          });
        return P(this._element).trigger(r), r
      }, t._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
          var e = this._indicatorsElement.children[this._getItemIndex(t)];
          e && P(e).addClass(Y)
        }
      }, t._slide = function (t, e) {
        var n, i, r, s = this,
          o = P(this._element).find(Z.ACTIVE_ITEM)[0],
          a = this._getItemIndex(o),
          l = e || o && this._getItemByDirection(t, o),
          h = this._getItemIndex(l),
          c = Boolean(this._interval);
        if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1;
        else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
          this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
          var u = P.Event(Q.SLID, {
            relatedTarget: l,
            direction: r,
            from: a,
            to: h
          });
          if (P(this._element).hasClass(G)) {
            P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
            var f = Cn.getTransitionDurationFromElement(o);
            P(o).one(Cn.TRANSITION_END, function () {
              P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function () {
                return P(s._element).trigger(u)
              }, 0)
            }).emulateTransitionEnd(f)
          } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);
          c && this.cycle()
        }
      }, s._jQueryInterface = function (i) {
        return this.each(function () {
          var t = P(this).data(j),
            e = h({}, M, P(this).data());
          "object" == typeof i && (e = h({}, e, i));
          var n = "string" == typeof i ? i : e.slide;
          if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i);
          else if ("string" == typeof n) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]()
          } else e.interval && (t.pause(), t.cycle())
        })
      }, s._dataApiClickHandler = function (t) {
        var e = Cn.getSelectorFromElement(this);
        if (e) {
          var n = P(e)[0];
          if (n && P(n).hasClass(B)) {
            var i = h({}, P(n).data(), P(this).data()),
              r = this.getAttribute("data-slide-to");
            r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault()
          }
        }
      }, o(s, null, [{
        key: "VERSION",
        get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default",
        get: function () {
          return M
        }
      }]), s
    }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
      P(Z.DATA_RIDE).each(function () {
        var t = P(this);
        $._jQueryInterface.call(t, t.data())
      })
    }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function () {
      return P.fn[L] = W, $._jQueryInterface
    }, $);
});
//# sourceMappingURL=bootstrap.min.js.map