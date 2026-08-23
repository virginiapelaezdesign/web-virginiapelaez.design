import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  L as r,
  N as i,
  O as a,
  P as o,
  a as s,
  c,
  g as l,
  i as u,
  j as d,
  o as f,
  v as p,
  w as m,
  z as h,
} from "./react.DwDJOhmk.mjs";
import { E as g, a as _, r as v, s as y } from "./motion.C18vkCAc.mjs";
import {
  C as b,
  E as x,
  G as S,
  L as C,
  T as w,
  _t as T,
  gt as E,
  k as D,
  nt as ee,
  r as O,
  t as te,
  ut as k,
  v as ne,
} from "./framer.CxSNfGk-.mjs";
function A(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function re(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t));
}
var ie,
  j,
  M,
  N,
  P,
  ae,
  oe,
  se,
  ce,
  le,
  ue,
  F,
  de,
  fe,
  I,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  L,
  R,
  ye,
  be,
  xe,
  z,
  Se,
  Ce,
  we,
  B,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  V,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  H,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  U,
  W,
  G,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  K,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  q,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  J,
  gn,
  Y,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  X,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Z,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  Q,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr = e(() => {
    /*!
     * GSAP 3.11.3
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    (r(),
      (F = { autoSleep: 120, force3D: `auto`, nullTargetWarn: 1, units: { lineHeight: `` } }),
      (de = { duration: 0.5, overwrite: !1, delay: 0 }),
      (fe = 1e8),
      (I = 1 / fe),
      (pe = 2 * Math.PI),
      (me = pe / 4),
      (he = 0),
      (ge = Math.sqrt),
      (_e = Math.cos),
      (ve = Math.sin),
      (L = function (e) {
        return typeof e == `string`;
      }),
      (R = function (e) {
        return typeof e == `function`;
      }),
      (ye = function (e) {
        return typeof e == `number`;
      }),
      (be = function (e) {
        return e === void 0;
      }),
      (xe = function (e) {
        return typeof e == `object`;
      }),
      (z = function (e) {
        return !1 !== e;
      }),
      (Se = function () {
        return h !== void 0;
      }),
      (Ce = function (e) {
        return R(e) || L(e);
      }),
      (we = (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () {}),
      (B = Array.isArray),
      (Te = /(?:-?\.?\d|\.)+/gi),
      (Ee = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g),
      (De = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g),
      (Oe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi),
      (ke = /[+-]=-?[.\d]+/),
      (Ae = /[^,'"\[\]\s]+/gi),
      (je = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i),
      (V = {}),
      (Me = {}),
      (Ne = function (e) {
        return (Me = at(e, V)) && hr;
      }),
      (Pe = function (e, t) {
        return console.warn(
          `Invalid property`,
          e,
          `set to`,
          t,
          `Missing plugin? gsap.registerPlugin()`
        );
      }),
      (Fe = function (e, t) {
        return !t && console.warn(e);
      }),
      (Ie = function (e, t) {
        return (e && (V[e] = t) && Me && (Me[e] = t)) || V;
      }),
      (Le = function () {
        return 0;
      }),
      (Re = { suppressEvents: !0, isStart: !0, kill: !1 }),
      (ze = { suppressEvents: !0, kill: !1 }),
      (Be = { suppressEvents: !0 }),
      (Ve = {}),
      (He = []),
      (Ue = {}),
      (H = {}),
      (We = {}),
      (Ge = 30),
      (Ke = []),
      (qe = ``),
      (Je = function (e) {
        var t,
          n,
          r = e[0];
        if ((xe(r) || R(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
          for (n = Ke.length; n-- && !Ke[n].targetTest(r););
          t = Ke[n];
        }
        for (n = e.length; n--;)
          (e[n] && (e[n]._gsap || (e[n]._gsap = new kn(e[n], t)))) || e.splice(n, 1);
        return e;
      }),
      (Ye = function (e) {
        return e._gsap || Je(Vt(e))[0]._gsap;
      }),
      (Xe = function (e, t, n) {
        return (n = e[t]) && R(n) ? e[t]() : (be(n) && e.getAttribute && e.getAttribute(t)) || n;
      }),
      (U = function (e, t) {
        return (e = e.split(`,`)).forEach(t) || e;
      }),
      (W = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      }),
      (G = function (e) {
        return Math.round(1e7 * e) / 1e7 || 0;
      }),
      (Ze = function (e, t) {
        var n = t.charAt(0),
          r = parseFloat(t.substr(2));
        return (
          (e = parseFloat(e)),
          n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
        );
      }),
      (Qe = function (e, t) {
        for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
        return r < n;
      }),
      ($e = function () {
        var e,
          t,
          n = He.length,
          r = He.slice(0);
        for (Ue = {}, He.length = 0, e = 0; e < n; e++)
          ((t = r[e]), t && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0));
      }),
      (et = function (e, t, n, r) {
        (He.length && $e(),
          e.render(t, n, r || (j && t < 0 && (e._initted || e._startAt))),
          He.length && $e());
      }),
      (tt = function (e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + ``).match(Ae).length < 2 ? t : L(e) ? e.trim() : e;
      }),
      (nt = function (e) {
        return e;
      }),
      (rt = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      }),
      (it = function (e) {
        return function (t, n) {
          for (var r in n) r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
        };
      }),
      (at = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }),
      (ot = function e(t, n) {
        for (var r in n)
          r !== `__proto__` &&
            r !== `constructor` &&
            r !== `prototype` &&
            (t[r] = xe(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
        return t;
      }),
      (st = function (e, t) {
        var n,
          r = {};
        for (n in e) n in t || (r[n] = e[n]);
        return r;
      }),
      (ct = function (e) {
        var t = e.parent || N,
          n = e.keyframes ? it(B(e.keyframes)) : rt;
        if (z(e.inherit)) for (; t;) (n(e, t.vars.defaults), (t = t.parent || t._dp));
        return e;
      }),
      (lt = function (e, t) {
        for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
        return n < 0;
      }),
      (ut = function (e, t, n, r, i) {
        (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
        var a,
          o = e[r];
        if (i) for (a = t[i]; o && o[i] > a;) o = o._prev;
        return (
          o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[n]), (e[n] = t)),
          t._next ? (t._next._prev = t) : (e[r] = t),
          (t._prev = o),
          (t.parent = t._dp = e),
          t
        );
      }),
      (dt = function (e, t, n, r) {
        (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
        var i = t._prev,
          a = t._next;
        (i ? (i._next = a) : e[n] === t && (e[n] = a),
          a ? (a._prev = i) : e[r] === t && (e[r] = i),
          (t._next = t._prev = t.parent = null));
      }),
      (ft = function (e, t) {
        (e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), (e._act = 0));
      }),
      (pt = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
          for (var n = e; n;) ((n._dirty = 1), (n = n.parent));
        return e;
      }),
      (mt = function (e) {
        for (var t = e.parent; t && t.parent;) ((t._dirty = 1), t.totalDuration(), (t = t.parent));
        return e;
      }),
      (ht = function (e, t, n, r) {
        return (
          e._startAt &&
          (j
            ? e._startAt.revert(ze)
            : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(t, !0, r))
        );
      }),
      (gt = function e(t) {
        return !t || (t._ts && e(t.parent));
      }),
      (_t = function (e) {
        return e._repeat ? vt(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
      }),
      (vt = function (e, t) {
        var n = Math.floor((e /= t));
        return e && n === e ? n - 1 : n;
      }),
      (yt = function (e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
      }),
      (bt = function (e) {
        return (e._end = G(e._start + (e._tDur / Math.abs(e._ts || e._rts || I) || 0)));
      }),
      (xt = function (e, t) {
        var n = e._dp;
        return (
          n &&
            n.smoothChildTiming &&
            e._ts &&
            ((e._start = G(
              n._time -
                (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
            )),
            bt(e),
            n._dirty || pt(n, e)),
          e
        );
      }),
      (St = function (e, t) {
        var n;
        if (
          ((t._time || (t._initted && !t._dur)) &&
            ((n = yt(e.rawTime(), t)),
            (!t._dur || It(0, t.totalDuration(), n) - t._tTime > I) && t.render(n, !0)),
          pt(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
          if (e._dur < e.duration())
            for (n = e; n._dp;) (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
          e._zTime = -I;
        }
      }),
      (Ct = function (e, t, n, r) {
        return (
          t.parent && ft(t),
          (t._start = G((ye(n) ? n : n || e !== N ? Nt(e, n, t) : e._time) + t._delay)),
          (t._end = G(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
          ut(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
          Dt(t) || (e._recent = t),
          r || St(e, t),
          e._ts < 0 && xt(e, e._tTime),
          e
        );
      }),
      (wt = function (e, t) {
        return (V.ScrollTrigger || Pe(`scrollTrigger`, t)) && V.ScrollTrigger.create(t, e);
      }),
      (Tt = function (e, t, n, r, i) {
        if ((Ln(e, t, i), !e._initted)) return 1;
        if (
          !n &&
          e._pt &&
          !j &&
          ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
          ce !== J.frame
        )
          return (He.push(e), (e._lazy = [i, r]), 1);
      }),
      (Et = function e(t) {
        var n = t.parent;
        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
      }),
      (Dt = function (e) {
        var t = e.data;
        return t === `isFromStart` || t === `isStart`;
      }),
      (Ot = function (e, t, n, r) {
        var i,
          a,
          o,
          s = e.ratio,
          c =
            t < 0 ||
            (!t &&
              ((!e._start && Et(e) && !(!e._initted && Dt(e))) ||
                ((e._ts < 0 || e._dp._ts < 0) && !Dt(e))))
              ? 0
              : 1,
          l = e._rDelay,
          u = 0;
        if (
          (l &&
            e._repeat &&
            ((u = It(0, e._tDur, t)),
            (a = vt(u, l)),
            e._yoyo && 1 & a && (c = 1 - c),
            a !== vt(e._tTime, l) &&
              ((s = 1 - c), e.vars.repeatRefresh && e._initted && e.invalidate())),
          c !== s || j || r || e._zTime === I || (!t && e._zTime))
        ) {
          if (!e._initted && Tt(e, t, r, n, u)) return;
          for (
            o = e._zTime,
              e._zTime = t || (n ? I : 0),
              n ||= t && !o,
              e.ratio = c,
              e._from && (c = 1 - c),
              e._time = 0,
              e._tTime = u,
              i = e._pt;
            i;
          )
            (i.r(c, i.d), (i = i._next));
          (t < 0 && ht(e, t, n, !0),
            e._onUpdate && !n && an(e, `onUpdate`),
            u && e._repeat && !n && e.parent && an(e, `onRepeat`),
            (t >= e._tDur || t < 0) &&
              e.ratio === c &&
              (c && ft(e, 1),
              !n &&
                !j &&
                (an(e, c ? `onComplete` : `onReverseComplete`, !0), e._prom && e._prom())));
        } else e._zTime ||= t;
      }),
      (kt = function (e, t, n) {
        var r;
        if (n > t)
          for (r = e._first; r && r._start <= n;) {
            if (r.data === `isPause` && r._start > t) return r;
            r = r._next;
          }
        else
          for (r = e._last; r && r._start >= n;) {
            if (r.data === `isPause` && r._start < t) return r;
            r = r._prev;
          }
      }),
      (At = function (e, t, n, r) {
        var i = e._repeat,
          a = G(t) || 0,
          o = e._tTime / e._tDur;
        return (
          o && !r && (e._time *= a / e._dur),
          (e._dur = a),
          (e._tDur = i ? (i < 0 ? 1e10 : G(a * (i + 1) + e._rDelay * i)) : a),
          o > 0 && !r && xt(e, (e._tTime = e._tDur * o)),
          e.parent && bt(e),
          n || pt(e.parent, e),
          e
        );
      }),
      (jt = function (e) {
        return e instanceof X ? pt(e) : At(e, e._dur);
      }),
      (Mt = { _start: 0, endTime: Le, totalDuration: Le }),
      (Nt = function e(t, n, r) {
        var i,
          a,
          o,
          s = t.labels,
          c = t._recent || Mt,
          l = t.duration() >= fe ? c.endTime(!1) : t._dur;
        return L(n) && (isNaN(n) || n in s)
          ? ((a = n.charAt(0)),
            (o = n.substr(-1) === `%`),
            (i = n.indexOf(`=`)),
            a === `<` || a === `>`
              ? (i >= 0 && (n = n.replace(/=/, ``)),
                (a === `<` ? c._start : c.endTime(c._repeat >= 0)) +
                  (parseFloat(n.substr(1)) || 0) * (o ? (i < 0 ? c : r).totalDuration() / 100 : 1))
              : i < 0
                ? (n in s || (s[n] = l), s[n])
                : ((a = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                  o && r && (a = (a / 100) * (B(r) ? r[0] : r).totalDuration()),
                  i > 1 ? e(t, n.substr(0, i - 1), r) + a : l + a))
          : n == null
            ? l
            : +n;
      }),
      (Pt = function (e, t, n) {
        var r,
          i,
          a = ye(t[1]),
          o = (a ? 2 : 1) + (e < 2 ? 0 : 1),
          s = t[o];
        if ((a && (s.duration = t[1]), (s.parent = n), e)) {
          for (r = s, i = n; i && !(`immediateRender` in r);)
            ((r = i.vars.defaults || {}), (i = z(i.vars.inherit) && i.parent));
          ((s.immediateRender = z(r.immediateRender)),
            e < 2 ? (s.runBackwards = 1) : (s.startAt = t[o - 1]));
        }
        return new Z(t[0], s, t[o + 1]);
      }),
      (Ft = function (e, t) {
        return e || e === 0 ? t(e) : t;
      }),
      (It = function (e, t, n) {
        return n < e ? e : n > t ? t : n;
      }),
      (K = function (e, t) {
        return L(e) && (t = je.exec(e)) ? t[1] : ``;
      }),
      (Lt = function (e, t, n) {
        return Ft(n, function (n) {
          return It(e, t, n);
        });
      }),
      (Rt = [].slice),
      (zt = function (e, t) {
        return (
          e &&
          xe(e) &&
          `length` in e &&
          ((!t && !e.length) || (e.length - 1 in e && xe(e[0]))) &&
          !e.nodeType &&
          e !== P
        );
      }),
      (Bt = function (e, t, n) {
        return (
          n === void 0 && (n = []),
          e.forEach(function (e) {
            var r;
            return (L(e) && !t) || zt(e, 1) ? (r = n).push.apply(r, Vt(e)) : n.push(e);
          }) || n
        );
      }),
      (Vt = function (e, t, n) {
        return M && !t && M.selector
          ? M.selector(e)
          : !L(e) || n || (!ae && gn())
            ? B(e)
              ? Bt(e, n)
              : zt(e)
                ? Rt.call(e, 0)
                : e
                  ? [e]
                  : []
            : Rt.call((t || oe).querySelectorAll(e), 0);
      }),
      (Ht = function (e) {
        return (
          (e = Vt(e)[0] || Fe(`Invalid scope`) || {}),
          function (t) {
            var n = e.current || e.nativeElement || e;
            return Vt(
              t,
              n.querySelectorAll ? n : n === e ? Fe(`Invalid scope`) || oe.createElement(`div`) : e
            );
          }
        );
      }),
      (Ut = function (e) {
        return e.sort(function () {
          return 0.5 - Math.random();
        });
      }),
      (Wt = function (e) {
        if (R(e)) return e;
        var t = xe(e) ? e : { each: e },
          n = wn(t.ease),
          r = t.from || 0,
          i = parseFloat(t.base) || 0,
          a = {},
          o = r > 0 && r < 1,
          s = isNaN(r) || o,
          c = t.axis,
          l = r,
          u = r;
        return (
          L(r)
            ? (l = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
            : !o && s && ((l = r[0]), (u = r[1])),
          function (e, o, d) {
            var f,
              p,
              m,
              h,
              g,
              _,
              v,
              y,
              b,
              x = (d || t).length,
              S = a[x];
            if (!S) {
              if (((b = t.grid === `auto` ? 0 : (t.grid || [1, fe])[1]), !b)) {
                for (v = -fe; v < (v = d[b++].getBoundingClientRect().left) && b < x;);
                b--;
              }
              for (
                S = a[x] = [],
                  f = s ? Math.min(b, x) * l - 0.5 : r % b,
                  p = b === fe ? 0 : s ? (x * u) / b - 0.5 : (r / b) | 0,
                  v = 0,
                  y = fe,
                  _ = 0;
                _ < x;
                _++
              )
                ((m = (_ % b) - f),
                  (h = p - ((_ / b) | 0)),
                  (S[_] = g = c ? Math.abs(c === `y` ? h : m) : ge(m * m + h * h)),
                  g > v && (v = g),
                  g < y && (y = g));
              (r === `random` && Ut(S),
                (S.max = v - y),
                (S.min = y),
                (S.v = x =
                  (parseFloat(t.amount) ||
                    parseFloat(t.each) *
                      (b > x ? x - 1 : c ? (c === `y` ? x / b : b) : Math.max(b, x / b)) ||
                    0) * (r === `edges` ? -1 : 1)),
                (S.b = x < 0 ? i - x : i),
                (S.u = K(t.amount || t.each) || 0),
                (n = n && x < 0 ? Sn(n) : n));
            }
            return ((x = (S[e] - S.min) / S.max || 0), G(S.b + (n ? n(x) : x) * S.v) + S.u);
          }
        );
      }),
      (Gt = function (e) {
        var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
        return function (n) {
          var r = G(Math.round(parseFloat(n) / e) * e * t);
          return (r - (r % 1)) / t + (ye(n) ? 0 : K(n));
        };
      }),
      (Kt = function (e, t) {
        var n,
          r,
          i = B(e);
        return (
          !i &&
            xe(e) &&
            ((n = i = e.radius || fe),
            e.values ? ((e = Vt(e.values)), (r = !ye(e[0])) && (n *= n)) : (e = Gt(e.increment))),
          Ft(
            t,
            i
              ? R(e)
                ? function (t) {
                    return ((r = e(t)), Math.abs(r - t) <= n ? r : t);
                  }
                : function (t) {
                    for (
                      var i,
                        a,
                        o = parseFloat(r ? t.x : t),
                        s = parseFloat(r ? t.y : 0),
                        c = fe,
                        l = 0,
                        u = e.length;
                      u--;
                    )
                      (r
                        ? ((i = e[u].x - o), (a = e[u].y - s), (i = i * i + a * a))
                        : (i = Math.abs(e[u] - o)),
                        i < c && ((c = i), (l = u)));
                    return ((l = !n || c <= n ? e[l] : t), r || l === t || ye(t) ? l : l + K(t));
                  }
              : Gt(e)
          )
        );
      }),
      (qt = function (e, t, n, r) {
        return Ft(B(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
          return B(e)
            ? e[~~(Math.random() * e.length)]
            : (n ||= 1e-5) &&
                (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
                Math.floor(
                  Math.round((e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n) * n * r
                ) / r;
        });
      }),
      (Jt = function () {
        var e = [...arguments];
        return function (t) {
          return e.reduce(function (e, t) {
            return t(e);
          }, t);
        };
      }),
      (Yt = function (e, t) {
        return function (n) {
          return e(parseFloat(n)) + (t || K(n));
        };
      }),
      (Xt = function (e, t, n) {
        return tn(e, t, 0, 1, n);
      }),
      (Zt = function (e, t, n) {
        return Ft(n, function (n) {
          return e[~~t(n)];
        });
      }),
      (Qt = function e(t, n, r) {
        var i = n - t;
        return B(t)
          ? Zt(t, e(0, t.length), n)
          : Ft(r, function (e) {
              return ((i + ((e - t) % i)) % i) + t;
            });
      }),
      ($t = function e(t, n, r) {
        var i = n - t,
          a = 2 * i;
        return B(t)
          ? Zt(t, e(0, t.length - 1), n)
          : Ft(r, function (e) {
              return ((e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e));
            });
      }),
      (en = function (e) {
        for (var t, n, r, i, a = 0, o = ``; ~(t = e.indexOf(`random(`, a));)
          ((r = e.indexOf(`)`, t)),
            (i = e.charAt(t + 7) === `[`),
            (n = e.substr(t + 7, r - t - 7).match(i ? Ae : Te)),
            (o += e.substr(a, t - a) + qt(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
            (a = r + 1));
        return o + e.substr(a, e.length - a);
      }),
      (tn = function (e, t, n, r, i) {
        var a = t - e,
          o = r - n;
        return Ft(i, function (t) {
          return n + (((t - e) / a) * o || 0);
        });
      }),
      (nn = function e(t, n, r, i) {
        var a = isNaN(t + n)
          ? 0
          : function (e) {
              return (1 - e) * t + e * n;
            };
        if (!a) {
          var o,
            s,
            c,
            l,
            u,
            d = L(t),
            f = {};
          if ((!0 === r && (i = 1) && (r = null), d)) ((t = { p: t }), (n = { p: n }));
          else if (B(t) && !B(n)) {
            for (c = [], l = t.length, u = l - 2, s = 1; s < l; s++) c.push(e(t[s - 1], t[s]));
            (l--,
              (a = function (e) {
                e *= l;
                var t = Math.min(u, ~~e);
                return c[t](e - t);
              }),
              (r = n));
          } else i || (t = at(B(t) ? [] : {}, t));
          if (!c) {
            for (o in n) Pn.call(f, t, o, `get`, n[o]);
            a = function (e) {
              return Qn(e, f) || (d ? t.p : t);
            };
          }
        }
        return Ft(r, a);
      }),
      (rn = function (e, t, n) {
        var r,
          i,
          a,
          o = e.labels,
          s = fe;
        for (r in o)
          ((i = o[r] - t), i < 0 == !!n && i && s > (i = Math.abs(i)) && ((a = r), (s = i)));
        return a;
      }),
      (an = function (e, t, n) {
        var r,
          i,
          a,
          o = e.vars,
          s = o[t],
          c = M,
          l = e._ctx;
        if (s)
          return (
            (r = o[t + `Params`]),
            (i = o.callbackScope || e),
            n && He.length && $e(),
            l && (M = l),
            (a = r ? s.apply(i, r) : s.call(i)),
            (M = c),
            a
          );
      }),
      (on = function (e) {
        return (
          ft(e),
          e.scrollTrigger && e.scrollTrigger.kill(!!j),
          e.progress() < 1 && an(e, `onInterrupt`),
          e
        );
      }),
      (sn = function (e) {
        e = (!e.name && e.default) || e;
        var t = e.name,
          n = R(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          i = { init: Le, render: Qn, add: Pn, kill: er, modifier: $n, rawVars: 0 },
          a = { targetTest: 0, get: 0, getSetter: Jn, aliases: {}, register: 0 };
        if ((gn(), e !== r)) {
          if (H[t]) return;
          (rt(r, rt(st(e, i), a)),
            at(r.prototype, at(i, st(e, a))),
            (H[(r.prop = t)] = r),
            e.targetTest && (Ke.push(r), (Ve[t] = 1)),
            (t = (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) + `Plugin`));
        }
        (Ie(t, r), e.register && e.register(hr, r, Q));
      }),
      (q = 255),
      (cn = {
        aqua: [0, q, q],
        lime: [0, q, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, q],
        navy: [0, 0, 128],
        white: [q, q, q],
        olive: [128, 128, 0],
        yellow: [q, q, 0],
        orange: [q, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [q, 0, 0],
        pink: [q, 192, 203],
        cyan: [0, q, q],
        transparent: [q, q, q, 0],
      }),
      (ln = function (e, t, n) {
        return (
          (e += e < 0 ? 1 : e > 1 ? -1 : 0),
          ((6 * e < 1
            ? t + (n - t) * e * 6
            : e < 0.5
              ? n
              : 3 * e < 2
                ? t + (n - t) * (2 / 3 - e) * 6
                : t) *
            q +
            0.5) |
            0
        );
      }),
      (un = function (e, t, n) {
        var r,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p = e ? (ye(e) ? [e >> 16, (e >> 8) & q, e & q] : 0) : cn.black;
        if (!p) {
          if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), cn[e])) p = cn[e];
          else if (e.charAt(0) === `#`) {
            if (
              (e.length < 6 &&
                ((r = e.charAt(1)),
                (i = e.charAt(2)),
                (a = e.charAt(3)),
                (e =
                  `#` + r + r + i + i + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
              e.length === 9)
            )
              return (
                (p = parseInt(e.substr(1, 6), 16)),
                [p >> 16, (p >> 8) & q, p & q, parseInt(e.substr(7), 16) / 255]
              );
            ((e = parseInt(e.substr(1), 16)), (p = [e >> 16, (e >> 8) & q, e & q]));
          } else if (e.substr(0, 3) === `hsl`)
            if (((p = f = e.match(Te)), t)) {
              if (~e.indexOf(`=`)) return ((p = e.match(Ee)), n && p.length < 4 && (p[3] = 1), p);
            } else
              ((o = (p[0] % 360) / 360),
                (s = p[1] / 100),
                (c = p[2] / 100),
                (i = c <= 0.5 ? c * (s + 1) : c + s - c * s),
                (r = 2 * c - i),
                p.length > 3 && (p[3] *= 1),
                (p[0] = ln(o + 1 / 3, r, i)),
                (p[1] = ln(o, r, i)),
                (p[2] = ln(o - 1 / 3, r, i)));
          else p = e.match(Te) || cn.transparent;
          p = p.map(Number);
        }
        return (
          t &&
            !f &&
            ((r = p[0] / q),
            (i = p[1] / q),
            (a = p[2] / q),
            (l = Math.max(r, i, a)),
            (u = Math.min(r, i, a)),
            (c = (l + u) / 2),
            l === u
              ? (o = s = 0)
              : ((d = l - u),
                (s = c > 0.5 ? d / (2 - l - u) : d / (l + u)),
                (o =
                  l === r
                    ? (i - a) / d + (i < a ? 6 : 0)
                    : l === i
                      ? (a - r) / d + 2
                      : (r - i) / d + 4),
                (o *= 60)),
            (p[0] = ~~(o + 0.5)),
            (p[1] = ~~(100 * s + 0.5)),
            (p[2] = ~~(100 * c + 0.5))),
          n && p.length < 4 && (p[3] = 1),
          p
        );
      }),
      (dn = function (e) {
        var t = [],
          n = [],
          r = -1;
        return (
          e.split(pn).forEach(function (e) {
            var i = e.match(De) || [];
            (t.push.apply(t, i), n.push((r += i.length + 1)));
          }),
          (t.c = n),
          t
        );
      }),
      (fn = function (e, t, n) {
        var r,
          i,
          a,
          o,
          s = ``,
          c = (e + s).match(pn),
          l = t ? `hsla(` : `rgba(`,
          u = 0;
        if (!c) return e;
        if (
          ((c = c.map(function (e) {
            return (
              (e = un(e, t, 1)) &&
              l + (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) + `)`
            );
          })),
          n && ((a = dn(e)), (r = n.c), r.join(s) !== a.c.join(s)))
        )
          for (i = e.replace(pn, `1`).split(De), o = i.length - 1; u < o; u++)
            s +=
              i[u] +
              (~r.indexOf(u)
                ? c.shift() || l + `0,0,0,0)`
                : (a.length ? a : c.length ? c : n).shift());
        if (!i) for (i = e.split(pn), o = i.length - 1; u < o; u++) s += i[u] + c[u];
        return s + i[o];
      }),
      (pn = (function () {
        var e,
          t = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`;
        for (e in cn) t += `|` + e + `\\b`;
        return RegExp(t + `)`, `gi`);
      })()),
      (mn = /hsl[a]?\(/),
      (hn = function (e) {
        var t,
          n = e.join(` `);
        if (((pn.lastIndex = 0), pn.test(n)))
          return ((t = mn.test(n)), (e[1] = fn(e[1], t)), (e[0] = fn(e[0], t, dn(e[1]))), !0);
      }),
      (J = (function () {
        var e,
          t,
          n,
          r,
          i,
          a,
          o = Date.now,
          s = 500,
          c = 33,
          l = o(),
          u = l,
          d = 1e3 / 240,
          f = d,
          p = [],
          m = function n(m) {
            var h,
              g,
              _,
              v,
              y = o() - u,
              b = !0 === m;
            if (
              (y > s && (l += y - c),
              (u += y),
              (_ = u - l),
              (h = _ - f),
              (h > 0 || b) &&
                ((v = ++r.frame),
                (i = _ - 1e3 * r.time),
                (r.time = _ /= 1e3),
                (f += h + (h >= d ? 4 : d - h)),
                (g = 1)),
              b || (e = t(n)),
              g)
            )
              for (a = 0; a < p.length; a++) p[a](_, i, v, m);
          };
        return (
          (r = {
            time: 0,
            frame: 0,
            tick: function () {
              m(!0);
            },
            deltaRatio: function (e) {
              return i / (1e3 / (e || 60));
            },
            wake: function () {
              se &&
                (!ae &&
                  Se() &&
                  ((P = ae = h),
                  (oe = P.document || {}),
                  (V.gsap = hr),
                  (P.gsapVersions ||= []).push(hr.version),
                  Ne(Me || P.GreenSockGlobals || (!P.gsap && P) || {}),
                  (n = P.requestAnimationFrame)),
                e && r.sleep(),
                (t =
                  n ||
                  function (e) {
                    return setTimeout(e, (f - 1e3 * r.time + 1) | 0);
                  }),
                (ue = 1),
                m(2));
            },
            sleep: function () {
              ((n ? P.cancelAnimationFrame : clearTimeout)(e), (ue = 0), (t = Le));
            },
            lagSmoothing: function (e, t) {
              ((s = e || 1 / I), (c = Math.min(t, s, 0)));
            },
            fps: function (e) {
              ((d = 1e3 / (e || 240)), (f = 1e3 * r.time + d));
            },
            add: function (e, t, n) {
              var i = t
                ? function (t, n, a, o) {
                    (e(t, n, a, o), r.remove(i));
                  }
                : e;
              return (r.remove(e), p[n ? `unshift` : `push`](i), gn(), i);
            },
            remove: function (e, t) {
              ~(t = p.indexOf(e)) && p.splice(t, 1) && a >= t && a--;
            },
            _listeners: p,
          }),
          r
        );
      })()),
      (gn = function () {
        return !ue && J.wake();
      }),
      (Y = {}),
      (_n = /^[\d.\-M][\d.\-,\s]/),
      (vn = /["']/g),
      (yn = function (e) {
        for (
          var t,
            n,
            r,
            i = {},
            a = e.substr(1, e.length - 3).split(`:`),
            o = a[0],
            s = 1,
            c = a.length;
          s < c;
          s++
        )
          ((n = a[s]),
            (t = s === c - 1 ? n.length : n.lastIndexOf(`,`)),
            (r = n.substr(0, t)),
            (i[o] = isNaN(r) ? r.replace(vn, ``).trim() : +r),
            (o = n.substr(t + 1).trim()));
        return i;
      }),
      (bn = function (e) {
        var t = e.indexOf(`(`) + 1,
          n = e.indexOf(`)`),
          r = e.indexOf(`(`, t);
        return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
      }),
      (xn = function (e) {
        var t = (e + ``).split(`(`),
          n = Y[t[0]];
        return n && t.length > 1 && n.config
          ? n.config.apply(null, ~e.indexOf(`{`) ? [yn(t[1])] : bn(e).split(`,`).map(tt))
          : Y._CE && _n.test(e)
            ? Y._CE(``, e)
            : n;
      }),
      (Sn = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      }),
      (Cn = function e(t, n) {
        for (var r, i = t._first; i;)
          (i instanceof X
            ? e(i, n)
            : i.vars.yoyoEase &&
              (!i._yoyo || !i._repeat) &&
              i._yoyo !== n &&
              (i.timeline
                ? e(i.timeline, n)
                : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = n))),
            (i = i._next));
      }),
      (wn = function (e, t) {
        return (e && (R(e) ? e : Y[e] || xn(e))) || t;
      }),
      (Tn = function (e, t, n, r) {
        (n === void 0 &&
          (n = function (e) {
            return 1 - t(1 - e);
          }),
          r === void 0 &&
            (r = function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
            }));
        var i,
          a = { easeIn: t, easeOut: n, easeInOut: r };
        return (
          U(e, function (e) {
            for (var t in ((Y[e] = V[e] = a), (Y[(i = e.toLowerCase())] = n), a))
              Y[i + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)] = Y[
                e + `.` + t
              ] = a[t];
          }),
          a
        );
      }),
      (En = function (e) {
        return function (t) {
          return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
        };
      }),
      (Dn = function e(t, n, r) {
        var i = n >= 1 ? n : 1,
          a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          o = (a / pe) * (Math.asin(1 / i) || 0),
          s = function (e) {
            return e === 1 ? 1 : i * 2 ** (-10 * e) * ve((e - o) * a) + 1;
          },
          c =
            t === `out`
              ? s
              : t === `in`
                ? function (e) {
                    return 1 - s(1 - e);
                  }
                : En(s);
        return (
          (a = pe / a),
          (c.config = function (n, r) {
            return e(t, n, r);
          }),
          c
        );
      }),
      (On = function e(t, n) {
        n === void 0 && (n = 1.70158);
        var r = function (e) {
            return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
          },
          i =
            t === `out`
              ? r
              : t === `in`
                ? function (e) {
                    return 1 - r(1 - e);
                  }
                : En(r);
        return (
          (i.config = function (n) {
            return e(t, n);
          }),
          i
        );
      }),
      U(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
        var n = t < 5 ? t + 1 : t;
        Tn(
          e + `,Power` + (n - 1),
          t
            ? function (e) {
                return e ** +n;
              }
            : function (e) {
                return e;
              },
          function (e) {
            return 1 - (1 - e) ** n;
          },
          function (e) {
            return e < 0.5 ? (2 * e) ** n / 2 : 1 - (2 * (1 - e)) ** n / 2;
          }
        );
      }),
      (Y.Linear.easeNone = Y.none = Y.Linear.easeIn),
      Tn(`Elastic`, Dn(`in`), Dn(`out`), Dn()),
      (function (e, t) {
        var n = 1 / t,
          r = 2 * n,
          i = 2.5 * n,
          a = function (a) {
            return a < n
              ? e * a * a
              : a < r
                ? e * (a - 1.5 / t) ** 2 + 0.75
                : a < i
                  ? e * (a -= 2.25 / t) * a + 0.9375
                  : e * (a - 2.625 / t) ** 2 + 0.984375;
          };
        Tn(
          `Bounce`,
          function (e) {
            return 1 - a(1 - e);
          },
          a
        );
      })(7.5625, 2.75),
      Tn(`Expo`, function (e) {
        return e ? 2 ** (10 * (e - 1)) : 0;
      }),
      Tn(`Circ`, function (e) {
        return -(ge(1 - e * e) - 1);
      }),
      Tn(`Sine`, function (e) {
        return e === 1 ? 1 : 1 - _e(e * me);
      }),
      Tn(`Back`, On(`in`), On(`out`), On()),
      (Y.SteppedEase =
        Y.steps =
        V.SteppedEase =
          {
            config: function (e, t) {
              e === void 0 && (e = 1);
              var n = 1 / e,
                r = e + +!t,
                i = +!!t,
                a = 1 - I;
              return function (e) {
                return (((r * It(0, a, e)) | 0) + i) * n;
              };
            },
          }),
      (de.ease = Y[`quad.out`]),
      U(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`, function (e) {
        return (qe += e + `,` + e + `Params,`);
      }),
      (kn = function (e, t) {
        ((this.id = he++),
          (e._gsap = this),
          (this.target = e),
          (this.harness = t),
          (this.get = t ? t.get : Xe),
          (this.set = t ? t.getSetter : Jn));
      }),
      (An = (function () {
        function e(e) {
          ((this.vars = e),
            (this._delay = +e.delay || 0),
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
              ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
            (this._ts = 1),
            At(this, +e.duration, 1, 1),
            (this.data = e.data),
            M && ((this._ctx = M), M.data.push(this)),
            ue || J.wake());
        }
        var t = e.prototype;
        return (
          (t.delay = function (e) {
            return e || e === 0
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + e - this._delay),
                (this._delay = e),
                this)
              : this._delay;
          }),
          (t.duration = function (e) {
            return arguments.length
              ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e)
              : this.totalDuration() && this._dur;
          }),
          (t.totalDuration = function (e) {
            return arguments.length
              ? ((this._dirty = 0),
                At(
                  this,
                  this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (t.totalTime = function (e, t) {
            if ((gn(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (xt(this, e), !n._dp || n.parent || St(n, this); n && n.parent;)
                (n.parent._time !==
                  n._start +
                    (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) &&
                  n.totalTime(n._tTime, !0),
                  (n = n.parent));
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && e < this._tDur) ||
                  (this._ts < 0 && e > 0) ||
                  (!this._tDur && !e)) &&
                Ct(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== e ||
                (!this._dur && !t) ||
                (this._initted && Math.abs(this._zTime) === I) ||
                (!e && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = e), et(this, e, t)),
              this
            );
          }),
          (t.time = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), e + _t(this)) % (this._dur + this._rDelay) ||
                    (e ? this._dur : 0),
                  t
                )
              : this._time;
          }),
          (t.totalProgress = function (e, t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * e, t)
              : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
          }),
          (t.progress = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + _t(this),
                  t
                )
              : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
          }),
          (t.iteration = function (e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (e - 1) * n, t)
              : this._repeat
                ? vt(this._tTime, n) + 1
                : 1;
          }),
          (t.timeScale = function (e) {
            if (!arguments.length) return this._rts === -I ? 0 : this._rts;
            if (this._rts === e) return this;
            var t = this.parent && this._ts ? yt(this.parent._time, this) : this._tTime;
            return (
              (this._rts = +e || 0),
              (this._ts = this._ps || e === -I ? 0 : this._rts),
              this.totalTime(It(-this._delay, this._tDur, t), !0),
              bt(this),
              mt(this)
            );
          }),
          (t.paused = function (e) {
            return arguments.length
              ? (this._ps !== e &&
                  ((this._ps = e),
                  e
                    ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (gn(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        this.progress() === 1 && Math.abs(this._zTime) !== I && (this._tTime -= I)
                      ))),
                this)
              : this._ps;
          }),
          (t.startTime = function (e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return (t && (t._sort || !this.parent) && Ct(t, this, e - this._delay), this);
            }
            return this._start;
          }),
          (t.endTime = function (e) {
            return (
              this._start +
              (z(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            );
          }),
          (t.rawTime = function (e) {
            var t = this.parent || this._dp;
            return t
              ? e && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                  ? yt(t.rawTime(e), this)
                  : this._tTime
              : this._tTime;
          }),
          (t.revert = function (e) {
            e === void 0 && (e = Be);
            var t = j;
            return (
              (j = e),
              (this._initted || this._startAt) &&
                (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)),
              this.data !== `nested` && !1 !== e.kill && this.kill(),
              (j = t),
              this
            );
          }),
          (t.globalTime = function (e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t;)
              ((n = t._start + n / (t._ts || 1)), (t = t._dp));
            return !this.parent && this.vars.immediateRender ? -1 : n;
          }),
          (t.repeat = function (e) {
            return arguments.length
              ? ((this._repeat = e === 1 / 0 ? -2 : e), jt(this))
              : this._repeat === -2
                ? 1 / 0
                : this._repeat;
          }),
          (t.repeatDelay = function (e) {
            if (arguments.length) {
              var t = this._time;
              return ((this._rDelay = e), jt(this), t ? this.time(t) : this);
            }
            return this._rDelay;
          }),
          (t.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (t.seek = function (e, t) {
            return this.totalTime(Nt(this, e), z(t));
          }),
          (t.restart = function (e, t) {
            return this.play().totalTime(e ? -this._delay : 0, z(t));
          }),
          (t.play = function (e, t) {
            return (e != null && this.seek(e, t), this.reversed(!1).paused(!1));
          }),
          (t.reverse = function (e, t) {
            return (
              e != null && this.seek(e || this.totalDuration(), t),
              this.reversed(!0).paused(!1)
            );
          }),
          (t.pause = function (e, t) {
            return (e != null && this.seek(e, t), this.paused(!0));
          }),
          (t.resume = function () {
            return this.paused(!1);
          }),
          (t.reversed = function (e) {
            return arguments.length
              ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -I : 0)), this)
              : this._rts < 0;
          }),
          (t.invalidate = function () {
            return ((this._initted = this._act = 0), (this._zTime = -I), this);
          }),
          (t.isActive = function () {
            var e,
              t = this.parent || this._dp,
              n = this._start;
            return !!(
              !t ||
              (this._ts &&
                this._initted &&
                t.isActive() &&
                (e = t.rawTime(!0)) >= n &&
                e < this.endTime(!0) - I)
            );
          }),
          (t.eventCallback = function (e, t, n) {
            var r = this.vars;
            return arguments.length > 1
              ? (t
                  ? ((r[e] = t),
                    n && (r[e + `Params`] = n),
                    e === `onUpdate` && (this._onUpdate = t))
                  : delete r[e],
                this)
              : r[e];
          }),
          (t.then = function (e) {
            var t = this;
            return new Promise(function (n) {
              var r = R(e) ? e : nt,
                i = function () {
                  var e = t.then;
                  ((t.then = null),
                    R(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                    n(r),
                    (t.then = e));
                };
              (t._initted && t.totalProgress() === 1 && t._ts >= 0) || (!t._tTime && t._ts < 0)
                ? i()
                : (t._prom = i);
            });
          }),
          (t.kill = function () {
            on(this);
          }),
          e
        );
      })()),
      rt(An.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -I,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      }),
      (X = (function (e) {
        re(t, e);
        function t(t, n) {
          var r;
          return (
            t === void 0 && (t = {}),
            (r = e.call(this, t) || this),
            (r.labels = {}),
            (r.smoothChildTiming = !!t.smoothChildTiming),
            (r.autoRemoveChildren = !!t.autoRemoveChildren),
            (r._sort = z(t.sortChildren)),
            N && Ct(t.parent || N, A(r), n),
            t.reversed && r.reverse(),
            t.paused && r.paused(!0),
            t.scrollTrigger && wt(A(r), t.scrollTrigger),
            r
          );
        }
        var n = t.prototype;
        return (
          (n.to = function (e, t, n) {
            return (Pt(0, arguments, this), this);
          }),
          (n.from = function (e, t, n) {
            return (Pt(1, arguments, this), this);
          }),
          (n.fromTo = function (e, t, n, r) {
            return (Pt(2, arguments, this), this);
          }),
          (n.set = function (e, t, n) {
            return (
              (t.duration = 0),
              (t.parent = this),
              ct(t).repeatDelay || (t.repeat = 0),
              (t.immediateRender = !!t.immediateRender),
              new Z(e, t, Nt(this, n), 1),
              this
            );
          }),
          (n.call = function (e, t, n) {
            return Ct(this, Z.delayedCall(0, e, t), n);
          }),
          (n.staggerTo = function (e, t, n, r, i, a, o) {
            return (
              (n.duration = t),
              (n.stagger = n.stagger || r),
              (n.onComplete = a),
              (n.onCompleteParams = o),
              (n.parent = this),
              new Z(e, n, Nt(this, i)),
              this
            );
          }),
          (n.staggerFrom = function (e, t, n, r, i, a, o) {
            return (
              (n.runBackwards = 1),
              (ct(n).immediateRender = z(n.immediateRender)),
              this.staggerTo(e, t, n, r, i, a, o)
            );
          }),
          (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
            return (
              (r.startAt = n),
              (ct(r).immediateRender = z(r.immediateRender)),
              this.staggerTo(e, t, r, i, a, o, s)
            );
          }),
          (n.render = function (e, t, n) {
            var r,
              i,
              a,
              o,
              s,
              c,
              l,
              u,
              d,
              f,
              p,
              m,
              h = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              _ = this._dur,
              v = e <= 0 ? 0 : G(e),
              y = this._zTime < 0 != e < 0 && (this._initted || !_);
            if ((this !== N && v > g && e >= 0 && (v = g), v !== this._tTime || n || y)) {
              if (
                (h !== this._time && _ && ((v += this._time - h), (e += this._time - h)),
                (r = v),
                (d = this._start),
                (u = this._ts),
                (c = !u),
                y && (_ || (h = this._zTime), (e || !t) && (this._zTime = e)),
                this._repeat)
              ) {
                if (((p = this._yoyo), (s = _ + this._rDelay), this._repeat < -1 && e < 0))
                  return this.totalTime(100 * s + e, t, n);
                if (
                  ((r = G(v % s)),
                  v === g
                    ? ((o = this._repeat), (r = _))
                    : ((o = ~~(v / s)), o && o === v / s && ((r = _), o--), r > _ && (r = _)),
                  (f = vt(this._tTime, s)),
                  !h && this._tTime && f !== o && (f = o),
                  p && 1 & o && ((r = _ - r), (m = 1)),
                  o !== f && !this._lock)
                ) {
                  var b = p && 1 & f,
                    x = b === (p && 1 & o);
                  if (
                    (o < f && (b = !b),
                    (h = b ? 0 : _),
                    (this._lock = 1),
                    (this.render(h || (m ? 0 : G(o * s)), t, !_)._lock = 0),
                    (this._tTime = v),
                    !t && this.parent && an(this, `onRepeat`),
                    this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                    (h && h !== this._time) ||
                      c !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act) ||
                      ((_ = this._dur),
                      (g = this._tDur),
                      x &&
                        ((this._lock = 2),
                        (h = b ? _ : -1e-4),
                        this.render(h, !0),
                        this.vars.repeatRefresh && !m && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !c))
                  )
                    return this;
                  Cn(this, m);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((l = kt(this, G(h), G(r))), l && (v -= r - (r = l._start))),
                (this._tTime = v),
                (this._time = r),
                (this._act = !u),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = e),
                  (h = 0)),
                !h && r && !t && (an(this, `onStart`), this._tTime !== v))
              )
                return this;
              if (r >= h && e >= 0)
                for (i = this._first; i;) {
                  if (((a = i._next), (i._act || r >= i._start) && i._ts && l !== i)) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (r - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts,
                        t,
                        n
                      ),
                      r !== this._time || (!this._ts && !c))
                    ) {
                      ((l = 0), a && (v += this._zTime = -I));
                      break;
                    }
                  }
                  i = a;
                }
              else {
                i = this._last;
                for (var S = e < 0 ? e : r; i;) {
                  if (((a = i._prev), (i._act || S <= i._end) && i._ts && l !== i)) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (S - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) + (S - i._start) * i._ts,
                        t,
                        n || (j && (i._initted || i._startAt))
                      ),
                      r !== this._time || (!this._ts && !c))
                    ) {
                      ((l = 0), a && (v += this._zTime = S ? -I : I));
                      break;
                    }
                  }
                  i = a;
                }
              }
              if (
                l &&
                !t &&
                (this.pause(), (l.render(r >= h ? 0 : -I)._zTime = r >= h ? 1 : -1), this._ts)
              )
                return ((this._start = d), bt(this), this.render(e, t, n));
              (this._onUpdate && !t && an(this, `onUpdate`, !0),
                ((v === g && this._tTime >= this.totalDuration()) || (!v && h)) &&
                  (d === this._start || Math.abs(u) !== Math.abs(this._ts)) &&
                  !this._lock &&
                  ((e || !_) && ((v === g && this._ts > 0) || (!v && this._ts < 0)) && ft(this, 1),
                  !t &&
                    !(e < 0 && !h) &&
                    (v || h || !g) &&
                    (an(this, v === g && e >= 0 ? `onComplete` : `onReverseComplete`, !0),
                    this._prom && !(v < g && this.timeScale() > 0) && this._prom())));
            }
            return this;
          }),
          (n.add = function (e, t) {
            var n = this;
            if ((ye(t) || (t = Nt(this, t, e)), !(e instanceof An))) {
              if (B(e))
                return (
                  e.forEach(function (e) {
                    return n.add(e, t);
                  }),
                  this
                );
              if (L(e)) return this.addLabel(e, t);
              if (!R(e)) return this;
              e = Z.delayedCall(0, e);
            }
            return this === e ? this : Ct(this, e, t);
          }),
          (n.getChildren = function (e, t, n, r) {
            (e === void 0 && (e = !0),
              t === void 0 && (t = !0),
              n === void 0 && (n = !0),
              r === void 0 && (r = -fe));
            for (var i = [], a = this._first; a;)
              (a._start >= r &&
                (a instanceof Z
                  ? t && i.push(a)
                  : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
                (a = a._next));
            return i;
          }),
          (n.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
              if (t[n].vars.id === e) return t[n];
          }),
          (n.remove = function (e) {
            return L(e)
              ? this.removeLabel(e)
              : R(e)
                ? this.killTweensOf(e)
                : (dt(this, e), e === this._recent && (this._recent = this._last), pt(this));
          }),
          (n.totalTime = function (t, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = G(
                    J.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts)
                  )),
                e.prototype.totalTime.call(this, t, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (e, t) {
            return ((this.labels[e] = Nt(this, t)), this);
          }),
          (n.removeLabel = function (e) {
            return (delete this.labels[e], this);
          }),
          (n.addPause = function (e, t, n) {
            var r = Z.delayedCall(0, t || Le, n);
            return ((r.data = `isPause`), (this._hasPause = 1), Ct(this, r, Nt(this, e)));
          }),
          (n.removePause = function (e) {
            var t = this._first;
            for (e = Nt(this, e); t;)
              (t._start === e && t.data === `isPause` && ft(t), (t = t._next));
          }),
          (n.killTweensOf = function (e, t, n) {
            for (var r = this.getTweensOf(e, n), i = r.length; i--;) jn !== r[i] && r[i].kill(e, t);
            return this;
          }),
          (n.getTweensOf = function (e, t) {
            for (var n, r = [], i = Vt(e), a = this._first, o = ye(t); a;)
              (a instanceof Z
                ? Qe(a._targets, i) &&
                  (o
                    ? (!jn || (a._initted && a._ts)) &&
                      a.globalTime(0) <= t &&
                      a.globalTime(a.totalDuration()) > t
                    : !t || a.isActive()) &&
                  r.push(a)
                : (n = a.getTweensOf(i, t)).length && r.push.apply(r, n),
                (a = a._next));
            return r;
          }),
          (n.tweenTo = function (e, t) {
            t ||= {};
            var n,
              r = this,
              i = Nt(r, e),
              a = t,
              o = a.startAt,
              s = a.onStart,
              c = a.onStartParams,
              l = a.immediateRender,
              u = Z.to(
                r,
                rt(
                  {
                    ease: t.ease || `none`,
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: `auto`,
                    duration:
                      t.duration ||
                      Math.abs((i - (o && `time` in o ? o.time : r._time)) / r.timeScale()) ||
                      I,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var e =
                          t.duration ||
                          Math.abs((i - (o && `time` in o ? o.time : r._time)) / r.timeScale());
                        (u._dur !== e && At(u, e, 0, 1).render(u._time, !0, !0), (n = 1));
                      }
                      s && s.apply(u, c || []);
                    },
                  },
                  t
                )
              );
            return l ? u.render(0) : u;
          }),
          (n.tweenFromTo = function (e, t, n) {
            return this.tweenTo(t, rt({ startAt: { time: Nt(this, e) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (e) {
            return (e === void 0 && (e = this._time), rn(this, Nt(this, e)));
          }),
          (n.previousLabel = function (e) {
            return (e === void 0 && (e = this._time), rn(this, Nt(this, e), 1));
          }),
          (n.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + I);
          }),
          (n.shiftChildren = function (e, t, n) {
            n === void 0 && (n = 0);
            for (var r, i = this._first, a = this.labels; i;)
              (i._start >= n && ((i._start += e), (i._end += e)), (i = i._next));
            if (t) for (r in a) a[r] >= n && (a[r] += e);
            return pt(this);
          }),
          (n.invalidate = function (t) {
            var n = this._first;
            for (this._lock = 0; n;) (n.invalidate(t), (n = n._next));
            return e.prototype.invalidate.call(this, t);
          }),
          (n.clear = function (e) {
            e === void 0 && (e = !0);
            for (var t, n = this._first; n;) ((t = n._next), this.remove(n), (n = t));
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              e && (this.labels = {}),
              pt(this)
            );
          }),
          (n.totalDuration = function (e) {
            var t,
              n,
              r,
              i = 0,
              a = this,
              o = a._last,
              s = fe;
            if (arguments.length)
              return a.timeScale(
                (a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -e : e)
              );
            if (a._dirty) {
              for (r = a.parent; o;)
                ((t = o._prev),
                  o._dirty && o.totalDuration(),
                  (n = o._start),
                  n > s && a._sort && o._ts && !a._lock
                    ? ((a._lock = 1), (Ct(a, o, n - o._delay, 1)._lock = 0))
                    : (s = n),
                  n < 0 &&
                    o._ts &&
                    ((i -= n),
                    ((!r && !a._dp) || (r && r.smoothChildTiming)) &&
                      ((a._start += n / a._ts), (a._time -= n), (a._tTime -= n)),
                    a.shiftChildren(-n, !1, -1 / 0),
                    (s = 0)),
                  o._end > i && o._ts && (i = o._end),
                  (o = t));
              (At(a, a === N && a._time > i ? a._time : i, 1, 1), (a._dirty = 0));
            }
            return a._tDur;
          }),
          (t.updateRoot = function (e) {
            if ((N._ts && (et(N, yt(e, N)), (ce = J.frame)), J.frame >= Ge)) {
              Ge += F.autoSleep || 120;
              var t = N._first;
              if ((!t || !t._ts) && F.autoSleep && J._listeners.length < 2) {
                for (; t && !t._ts;) t = t._next;
                t || J.sleep();
              }
            }
          }),
          t
        );
      })(An)),
      rt(X.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 }),
      (Nn = function (e, t, n, r, i, a, o) {
        var s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h = new Q(this._pt, e, t, 0, 1, Zn, null, i),
          g = 0,
          _ = 0;
        for (
          h.b = n,
            h.e = r,
            n += ``,
            r += ``,
            (p = ~r.indexOf(`random(`)) && (r = en(r)),
            a && ((m = [n, r]), a(m, e, t), (n = m[0]), (r = m[1])),
            c = n.match(Oe) || [];
          (s = Oe.exec(r));
        )
          ((u = s[0]),
            (d = r.substring(g, s.index)),
            l ? (l = (l + 1) % 5) : d.substr(-5) === `rgba(` && (l = 1),
            u !== c[_++] &&
              ((f = parseFloat(c[_ - 1]) || 0),
              (h._pt = {
                _next: h._pt,
                p: d || _ === 1 ? d : `,`,
                s: f,
                c: u.charAt(1) === `=` ? Ze(f, u) - f : parseFloat(u) - f,
                m: l && l < 4 ? Math.round : 0,
              }),
              (g = Oe.lastIndex)));
        return (
          (h.c = g < r.length ? r.substring(g, r.length) : ``),
          (h.fp = o),
          (ke.test(r) || p) && (h.e = 0),
          (this._pt = h),
          h
        );
      }),
      (Pn = function (e, t, n, r, i, a, o, s, c, l) {
        R(r) && (r = r(i || 0, e, a));
        var u,
          d = e[t],
          f =
            n === `get`
              ? R(d)
                ? c
                  ? e[t.indexOf(`set`) || !R(e[`get` + t.substr(3)]) ? t : `get` + t.substr(3)](c)
                  : e[t]()
                : d
              : n,
          p = R(d) ? (c ? Kn : Gn) : Wn;
        if (
          (L(r) &&
            (~r.indexOf(`random(`) && (r = en(r)),
            r.charAt(1) === `=` && ((u = Ze(f, r) + (K(f) || 0)), (u || u === 0) && (r = u))),
          !l || f !== r || Mn)
        )
          return !isNaN(f * r) && r !== ``
            ? ((u = new Q(
                this._pt,
                e,
                t,
                +f || 0,
                r - (f || 0),
                typeof d == `boolean` ? Xn : Yn,
                0,
                p
              )),
              c && (u.fp = c),
              o && u.modifier(o, this, e),
              (this._pt = u))
            : (!d && !(t in e) && Pe(t, r), Nn.call(this, e, t, f, r, p, s || F.stringFilter, c));
      }),
      (Fn = function (e, t, n, r, i) {
        if ((R(e) && (e = Vn(e, i, t, n, r)), !xe(e) || (e.style && e.nodeType) || B(e) || we(e)))
          return L(e) ? Vn(e, i, t, n, r) : e;
        var a,
          o = {};
        for (a in e) o[a] = Vn(e[a], i, t, n, r);
        return o;
      }),
      (In = function (e, t, n, r, i, a) {
        var o, s, c, l;
        if (
          H[e] &&
          !1 !== (o = new H[e]()).init(i, o.rawVars ? t[e] : Fn(t[e], r, i, a, n), n, r, a) &&
          ((n._pt = s = new Q(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)), n !== le)
        )
          for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;)
            c[o._props[l]] = s;
        return o;
      }),
      (Ln = function e(t, n, r) {
        var i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _ = t.vars,
          v = _.ease,
          y = _.startAt,
          b = _.immediateRender,
          x = _.lazy,
          S = _.onUpdate,
          C = _.onUpdateParams,
          w = _.callbackScope,
          T = _.runBackwards,
          E = _.yoyoEase,
          D = _.keyframes,
          ee = _.autoRevert,
          O = t._dur,
          te = t._startAt,
          k = t._targets,
          ne = t.parent,
          A = ne && ne.data === `nested` ? ne.vars.targets : k,
          re = t._overwrite === `auto` && !ie,
          M = t.timeline;
        if (
          (M && (!D || !v) && (v = `none`),
          (t._ease = wn(v, de.ease)),
          (t._yEase = E ? Sn(wn(!0 === E ? v : E, de.ease)) : 0),
          E && t._yoyo && !t._repeat && ((E = t._yEase), (t._yEase = t._ease), (t._ease = E)),
          (t._from = !M && !!_.runBackwards),
          !M || (D && !_.stagger))
        ) {
          if (
            ((d = k[0] ? Ye(k[0]).harness : 0),
            (h = d && _[d.prop]),
            (i = st(_, Ve)),
            te &&
              (te._zTime < 0 && te.progress(1),
              n < 0 && T && b && !ee ? te.render(-1, !0) : te.revert(T && O ? ze : Re),
              (te._lazy = 0)),
            y)
          ) {
            if (
              (ft(
                (t._startAt = Z.set(
                  k,
                  rt(
                    {
                      data: `isStart`,
                      overwrite: !1,
                      parent: ne,
                      immediateRender: !0,
                      lazy: z(x),
                      startAt: null,
                      delay: 0,
                      onUpdate: S,
                      onUpdateParams: C,
                      callbackScope: w,
                      stagger: 0,
                    },
                    y
                  )
                ))
              ),
              (t._startAt._dp = 0),
              n < 0 && (j || (!b && !ee)) && t._startAt.revert(ze),
              b && O && n <= 0 && r <= 0)
            ) {
              n && (t._zTime = n);
              return;
            }
          } else if (T && O && !te)
            if (
              (n && (b = !1),
              (o = rt(
                {
                  overwrite: !1,
                  data: `isFromStart`,
                  lazy: b && z(x),
                  immediateRender: b,
                  stagger: 0,
                  parent: ne,
                },
                i
              )),
              h && (o[d.prop] = h),
              ft((t._startAt = Z.set(k, o))),
              (t._startAt._dp = 0),
              n < 0 && (j ? t._startAt.revert(ze) : t._startAt.render(-1, !0)),
              (t._zTime = n),
              b)
            ) {
              if (!n) return;
            } else e(t._startAt, I, I);
          for (t._pt = t._ptCache = 0, x = (O && z(x)) || (x && !O), a = 0; a < k.length; a++) {
            if (
              ((c = k[a]),
              (u = c._gsap || Je(k)[a]._gsap),
              (t._ptLookup[a] = p = {}),
              Ue[u.id] && He.length && $e(),
              (m = A === k ? a : A.indexOf(c)),
              d &&
                !1 !== (f = new d()).init(c, h || i, t, m, A) &&
                ((t._pt = s = new Q(t._pt, c, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (e) {
                  p[e] = s;
                }),
                f.priority && (l = 1)),
              !d || h)
            )
              for (o in i)
                H[o] && (f = In(o, i, t, m, c, A))
                  ? f.priority && (l = 1)
                  : (p[o] = s = Pn.call(t, c, o, `get`, i[o], m, A, 0, _.stringFilter));
            (t._op && t._op[a] && t.kill(c, t._op[a]),
              re &&
                t._pt &&
                ((jn = t), N.killTweensOf(c, p, t.globalTime(n)), (g = !t.parent), (jn = 0)),
              t._pt && x && (Ue[u.id] = 1));
          }
          (l && nr(t), t._onInit && t._onInit(t));
        }
        ((t._onUpdate = S),
          (t._initted = (!t._op || t._pt) && !g),
          D && n <= 0 && M.render(fe, !0, !0));
      }),
      (Rn = function (e, t, n, r, i, a, o) {
        var s,
          c,
          l,
          u,
          d = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
        if (!d)
          for (d = e._ptCache[t] = [], l = e._ptLookup, u = e._targets.length; u--;) {
            if (((s = l[u][t]), s && s.d && s.d._pt))
              for (s = s.d._pt; s && s.p !== t && s.fp !== t;) s = s._next;
            if (!s) return ((Mn = 1), (e.vars[t] = `+=0`), Ln(e, o), (Mn = 0), 1);
            d.push(s);
          }
        for (u = d.length; u--;)
          ((c = d[u]),
            (s = c._pt || c),
            (s.s = (!r && r !== 0) || i ? s.s + (r || 0) + a * s.c : r),
            (s.c = n - s.s),
            (c.e &&= W(n) + K(c.e)),
            (c.b &&= s.s + K(c.b)));
      }),
      (zn = function (e, t) {
        var n,
          r,
          i,
          a,
          o = e[0] ? Ye(e[0]).harness : 0,
          s = o && o.aliases;
        if (!s) return t;
        for (r in ((n = at({}, t)), s))
          if (r in n) for (a = s[r].split(`,`), i = a.length; i--;) n[a[i]] = n[r];
        return n;
      }),
      (Bn = function (e, t, n, r) {
        var i,
          a,
          o = t.ease || r || `power1.inOut`;
        if (B(t))
          ((a = n[e] || (n[e] = [])),
            t.forEach(function (e, n) {
              return a.push({ t: (n / (t.length - 1)) * 100, v: e, e: o });
            }));
        else
          for (i in t)
            ((a = n[i] || (n[i] = [])),
              i === `ease` || a.push({ t: parseFloat(e), v: t[i], e: o }));
      }),
      (Vn = function (e, t, n, r, i) {
        return R(e) ? e.call(t, n, r, i) : L(e) && ~e.indexOf(`random(`) ? en(e) : e;
      }),
      (Hn = qe + `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert`),
      (Un = {}),
      U(Hn + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
        return (Un[e] = 1);
      }),
      (Z = (function (e) {
        re(t, e);
        function t(t, n, r, i) {
          var a;
          (typeof n == `number` && ((r.duration = n), (n = r), (r = null)),
            (a = e.call(this, i ? n : ct(n)) || this));
          var o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            m = a.vars,
            h = m.duration,
            g = m.delay,
            _ = m.immediateRender,
            v = m.stagger,
            y = m.overwrite,
            b = m.keyframes,
            x = m.defaults,
            S = m.scrollTrigger,
            C = m.yoyoEase,
            w = n.parent || N,
            T = (B(t) || we(t) ? ye(t[0]) : `length` in n) ? [t] : Vt(t);
          if (
            ((a._targets = T.length
              ? Je(T)
              : Fe(`GSAP target ` + t + ` not found. https://greensock.com`, !F.nullTargetWarn) ||
                []),
            (a._ptLookup = []),
            (a._overwrite = y),
            b || v || Ce(h) || Ce(g))
          ) {
            if (
              ((n = a.vars),
              (o = a.timeline =
                new X({
                  data: `nested`,
                  defaults: x || {},
                  targets: w && w.data === `nested` ? w.vars.targets : T,
                })),
              o.kill(),
              (o.parent = o._dp = A(a)),
              (o._start = 0),
              v || Ce(h) || Ce(g))
            ) {
              if (((l = T.length), (f = v && Wt(v)), xe(v)))
                for (u in v) ~Hn.indexOf(u) && ((p ||= {}), (p[u] = v[u]));
              for (s = 0; s < l; s++)
                ((c = st(n, Un)),
                  (c.stagger = 0),
                  C && (c.yoyoEase = C),
                  p && at(c, p),
                  (d = T[s]),
                  (c.duration = +Vn(h, A(a), s, d, T)),
                  (c.delay = (+Vn(g, A(a), s, d, T) || 0) - a._delay),
                  !v &&
                    l === 1 &&
                    c.delay &&
                    ((a._delay = g = c.delay), (a._start += g), (c.delay = 0)),
                  o.to(d, c, f ? f(s, d, T) : 0),
                  (o._ease = Y.none));
              o.duration() ? (h = g = 0) : (a.timeline = 0);
            } else if (b) {
              (ct(rt(o.vars.defaults, { ease: `none` })),
                (o._ease = wn(b.ease || n.ease || `none`)));
              var E,
                D,
                ee,
                O = 0;
              if (B(b))
                (b.forEach(function (e) {
                  return o.to(T, e, `>`);
                }),
                  o.duration());
              else {
                for (u in ((c = {}), b))
                  u === `ease` || u === `easeEach` || Bn(u, b[u], c, b.easeEach);
                for (u in c)
                  for (
                    E = c[u].sort(function (e, t) {
                      return e.t - t.t;
                    }),
                      O = 0,
                      s = 0;
                    s < E.length;
                    s++
                  )
                    ((D = E[s]),
                      (ee = { ease: D.e, duration: ((D.t - (s ? E[s - 1].t : 0)) / 100) * h }),
                      (ee[u] = D.v),
                      o.to(T, ee, O),
                      (O += ee.duration));
                o.duration() < h && o.to({}, { duration: h - o.duration() });
              }
            }
            h || a.duration((h = o.duration()));
          } else a.timeline = 0;
          return (
            !0 === y && !ie && ((jn = A(a)), N.killTweensOf(T), (jn = 0)),
            Ct(w, A(a), r),
            n.reversed && a.reverse(),
            n.paused && a.paused(!0),
            (_ ||
              (!h && !b && a._start === G(w._time) && z(_) && gt(A(a)) && w.data !== `nested`)) &&
              ((a._tTime = -I), a.render(Math.max(0, -g) || 0)),
            S && wt(A(a), S),
            a
          );
        }
        var n = t.prototype;
        return (
          (n.render = function (e, t, n) {
            var r,
              i,
              a,
              o,
              s,
              c,
              l,
              u,
              d,
              f = this._time,
              p = this._tDur,
              m = this._dur,
              h = e < 0,
              g = e > p - I && !h ? p : e < I ? 0 : e;
            if (m) {
              if (
                g !== this._tTime ||
                !e ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== h)
              ) {
                if (((r = g), (u = this.timeline), this._repeat)) {
                  if (((o = m + this._rDelay), this._repeat < -1 && h))
                    return this.totalTime(100 * o + e, t, n);
                  if (
                    ((r = G(g % o)),
                    g === p
                      ? ((a = this._repeat), (r = m))
                      : ((a = ~~(g / o)), a && a === g / o && ((r = m), a--), r > m && (r = m)),
                    (c = this._yoyo && 1 & a),
                    c && ((d = this._yEase), (r = m - r)),
                    (s = vt(this._tTime, o)),
                    r === f && !n && this._initted)
                  )
                    return ((this._tTime = g), this);
                  a !== s &&
                    (u && this._yEase && Cn(u, c),
                    this.vars.repeatRefresh &&
                      !c &&
                      !this._lock &&
                      ((this._lock = n = 1), (this.render(G(o * a), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Tt(this, h ? e : r, n, t, g)) return ((this._tTime = 0), this);
                  if (f !== this._time) return this;
                  if (m !== this._dur) return this.render(e, t, n);
                }
                if (
                  ((this._tTime = g),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (d || this._ease)(r / m)),
                  this._from && (this.ratio = l = 1 - l),
                  r && !f && !t && (an(this, `onStart`), this._tTime !== g))
                )
                  return this;
                for (i = this._pt; i;) (i.r(l, i.d), (i = i._next));
                ((u &&
                  u.render(e < 0 ? e : !r && c ? -I : u._dur * u._ease(r / this._dur), t, n)) ||
                  (this._startAt && (this._zTime = e)),
                  this._onUpdate && !t && (h && ht(this, e, t, n), an(this, `onUpdate`)),
                  this._repeat &&
                    a !== s &&
                    this.vars.onRepeat &&
                    !t &&
                    this.parent &&
                    an(this, `onRepeat`),
                  (g === this._tDur || !g) &&
                    this._tTime === g &&
                    (h && !this._onUpdate && ht(this, e, !0, !0),
                    (e || !m) &&
                      ((g === this._tDur && this._ts > 0) || (!g && this._ts < 0)) &&
                      ft(this, 1),
                    !t &&
                      !(h && !f) &&
                      (g || f || c) &&
                      (an(this, g === p ? `onComplete` : `onReverseComplete`, !0),
                      this._prom && !(g < p && this.timeScale() > 0) && this._prom())));
              }
            } else Ot(this, e, t, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function (t) {
            return (
              (!t || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(t),
              e.prototype.invalidate.call(this, t)
            );
          }),
          (n.resetTo = function (e, t, n, r) {
            (ue || J.wake(), this._ts || this.play());
            var i,
              a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return (
              this._initted || Ln(this, a),
              (i = this._ease(a / this._dur)),
              Rn(this, e, t, n, r, i, a)
                ? this.resetTo(e, t, n, r)
                : (xt(this, 0),
                  this.parent ||
                    ut(this._dp, this, `_first`, `_last`, this._dp._sort ? `_start` : 0),
                  this.render(0))
            );
          }),
          (n.kill = function (e, t) {
            if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
              return ((this._lazy = this._pt = 0), this.parent ? on(this) : this);
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(e, t, jn && !0 !== jn.vars.overwrite)._first || on(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  At(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              a,
              o,
              s,
              c,
              l,
              u = this._targets,
              d = e ? Vt(e) : u,
              f = this._ptLookup,
              p = this._pt;
            if ((!t || t === `all`) && lt(u, d)) return (t === `all` && (this._pt = 0), on(this));
            for (
              r = this._op = this._op || [],
                t !== `all` &&
                  (L(t) &&
                    ((s = {}),
                    U(t, function (e) {
                      return (s[e] = 1);
                    }),
                    (t = s)),
                  (t = zn(u, t))),
                l = u.length;
              l--;
            )
              if (~d.indexOf(u[l]))
                for (s in ((i = f[l]),
                t === `all` ? ((r[l] = t), (o = i), (a = {})) : ((a = r[l] = r[l] || {}), (o = t)),
                o))
                  ((c = i && i[s]),
                    c && ((`kill` in c.d && !0 !== c.d.kill(s)) || dt(this, c, `_pt`), delete i[s]),
                    a !== `all` && (a[s] = 1));
            return (this._initted && !this._pt && p && on(this), this);
          }),
          (t.to = function (e, n) {
            return new t(e, n, arguments[2]);
          }),
          (t.from = function (e, t) {
            return Pt(1, arguments);
          }),
          (t.delayedCall = function (e, n, r, i) {
            return new t(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: e,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i,
            });
          }),
          (t.fromTo = function (e, t, n) {
            return Pt(2, arguments);
          }),
          (t.set = function (e, n) {
            return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n));
          }),
          (t.killTweensOf = function (e, t, n) {
            return N.killTweensOf(e, t, n);
          }),
          t
        );
      })(An)),
      rt(Z.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
      U(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
        Z[e] = function () {
          var t = new X(),
            n = Rt.call(arguments, 0);
          return (n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n));
        };
      }),
      (Wn = function (e, t, n) {
        return (e[t] = n);
      }),
      (Gn = function (e, t, n) {
        return e[t](n);
      }),
      (Kn = function (e, t, n, r) {
        return e[t](r.fp, n);
      }),
      (qn = function (e, t, n) {
        return e.setAttribute(t, n);
      }),
      (Jn = function (e, t) {
        return R(e[t]) ? Gn : be(e[t]) && e.setAttribute ? qn : Wn;
      }),
      (Yn = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
      }),
      (Xn = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      }),
      (Zn = function (e, t) {
        var n = t._pt,
          r = ``;
        if (!e && t.b) r = t.b;
        else if (e === 1 && t.e) r = t.e;
        else {
          for (; n;)
            ((r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r),
              (n = n._next));
          r += t.c;
        }
        t.set(t.t, t.p, r, t);
      }),
      (Qn = function (e, t) {
        for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
      }),
      ($n = function (e, t, n, r) {
        for (var i, a = this._pt; a;) ((i = a._next), a.p === r && a.modifier(e, t, n), (a = i));
      }),
      (er = function (e) {
        for (var t, n, r = this._pt; r;)
          ((n = r._next),
            (r.p === e && !r.op) || r.op === e ? dt(this, r, `_pt`) : r.dep || (t = 1),
            (r = n));
        return !t;
      }),
      (tr = function (e, t, n, r) {
        r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
      }),
      (nr = function (e) {
        for (var t, n, r, i, a = e._pt; a;) {
          for (t = a._next, n = r; n && n.pr > a.pr;) n = n._next;
          ((a._prev = n ? n._prev : i) ? (a._prev._next = a) : (r = a),
            (a._next = n) ? (n._prev = a) : (i = a),
            (a = t));
        }
        e._pt = r;
      }),
      (Q = (function () {
        function e(e, t, n, r, i, a, o, s, c) {
          ((this.t = t),
            (this.s = r),
            (this.c = i),
            (this.p = n),
            (this.r = a || Yn),
            (this.d = o || this),
            (this.set = s || Wn),
            (this.pr = c || 0),
            (this._next = e),
            e && (e._prev = this));
        }
        var t = e.prototype;
        return (
          (t.modifier = function (e, t, n) {
            ((this.mSet = this.mSet || this.set),
              (this.set = tr),
              (this.m = e),
              (this.mt = n),
              (this.tween = t));
          }),
          e
        );
      })()),
      U(
        qe +
          `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,
        function (e) {
          return (Ve[e] = 1);
        }
      ),
      (V.TweenMax = V.TweenLite = Z),
      (V.TimelineLite = V.TimelineMax = X),
      (N = new X({
        sortChildren: !1,
        defaults: de,
        autoRemoveChildren: !0,
        id: `root`,
        smoothChildTiming: !0,
      })),
      (F.stringFilter = hn),
      (rr = []),
      (ir = {}),
      (ar = []),
      (or = 0),
      (sr = function (e) {
        return (ir[e] || ar).map(function (e) {
          return e();
        });
      }),
      (cr = function () {
        var e = Date.now(),
          t = [];
        e - or > 2 &&
          (sr(`matchMediaInit`),
          rr.forEach(function (e) {
            var n,
              r,
              i,
              a,
              o = e.queries,
              s = e.conditions;
            for (r in o)
              ((n = P.matchMedia(o[r]).matches), n && (i = 1), n !== s[r] && ((s[r] = n), (a = 1)));
            a && (e.revert(), i && t.push(e));
          }),
          sr(`matchMediaRevert`),
          t.forEach(function (e) {
            return e.onMatch(e);
          }),
          (or = e),
          sr(`matchMedia`));
      }),
      (lr = (function () {
        function e(e, t) {
          ((this.selector = t && Ht(t)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            e && this.add(e));
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, n) {
            R(e) && ((n = t), (t = e), (e = R));
            var r = this,
              i = function () {
                var e,
                  i = M,
                  a = r.selector;
                return (
                  i && i !== r && i.data.push(r),
                  n && (r.selector = Ht(n)),
                  (M = r),
                  (e = t.apply(r, arguments)),
                  R(e) && r._r.push(e),
                  (M = i),
                  (r.selector = a),
                  (r.isReverted = !1),
                  e
                );
              };
            return ((r.last = i), e === R ? i(r) : e ? (r[e] = i) : i);
          }),
          (t.ignore = function (e) {
            var t = M;
            ((M = null), e(this), (M = t));
          }),
          (t.getTweens = function () {
            var t = [];
            return (
              this.data.forEach(function (n) {
                return n instanceof e
                  ? t.push.apply(t, n.getTweens())
                  : n instanceof Z && !(n.parent && n.parent.data === `nested`) && t.push(n);
              }),
              t
            );
          }),
          (t.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (t.kill = function (e, t) {
            var n = this;
            if (e) {
              var r = this.getTweens();
              (this.data.forEach(function (e) {
                e.data === `isFlip` &&
                  (e.revert(),
                  e.getChildren(!0, !0, !1).forEach(function (e) {
                    return r.splice(r.indexOf(e), 1);
                  }));
              }),
                r
                  .map(function (e) {
                    return { g: e.globalTime(0), t: e };
                  })
                  .sort(function (e, t) {
                    return t.g - e.g || -1;
                  })
                  .forEach(function (t) {
                    return t.t.revert(e);
                  }),
                this.data.forEach(function (t) {
                  return !(t instanceof An) && t.revert && t.revert(e);
                }),
                this._r.forEach(function (t) {
                  return t(e, n);
                }),
                (this.isReverted = !0));
            } else
              this.data.forEach(function (e) {
                return e.kill && e.kill();
              });
            if ((this.clear(), t)) {
              var i = rr.indexOf(this);
              ~i && rr.splice(i, 1);
            }
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          e
        );
      })()),
      (ur = (function () {
        function e(e) {
          ((this.contexts = []), (this.scope = e));
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, n) {
            xe(e) || (e = { matches: e });
            var r,
              i,
              a,
              o = new lr(0, n || this.scope),
              s = (o.conditions = {});
            for (i in (this.contexts.push(o), (t = o.add(`onMatch`, t)), (o.queries = e), e))
              i === `all`
                ? (a = 1)
                : ((r = P.matchMedia(e[i])),
                  r &&
                    (rr.indexOf(o) < 0 && rr.push(o),
                    (s[i] = r.matches) && (a = 1),
                    r.addListener ? r.addListener(cr) : r.addEventListener(`change`, cr)));
            return (a && t(o), this);
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          (t.kill = function (e) {
            this.contexts.forEach(function (t) {
              return t.kill(e, !0);
            });
          }),
          e
        );
      })()),
      (dr = {
        registerPlugin: function () {
          [...arguments].forEach(function (e) {
            return sn(e);
          });
        },
        timeline: function (e) {
          return new X(e);
        },
        getTweensOf: function (e, t) {
          return N.getTweensOf(e, t);
        },
        getProperty: function (e, t, n, r) {
          L(e) && (e = Vt(e)[0]);
          var i = Ye(e || {}).get,
            a = n ? nt : tt;
          return (
            n === `native` && (n = ``),
            e &&
              (t
                ? a(((H[t] && H[t].get) || i)(e, t, n, r))
                : function (t, n, r) {
                    return a(((H[t] && H[t].get) || i)(e, t, n, r));
                  })
          );
        },
        quickSetter: function (e, t, n) {
          if (((e = Vt(e)), e.length > 1)) {
            var r = e.map(function (e) {
                return hr.quickSetter(e, t, n);
              }),
              i = r.length;
            return function (e) {
              for (var t = i; t--;) r[t](e);
            };
          }
          e = e[0] || {};
          var a = H[t],
            o = Ye(e),
            s = (o.harness && (o.harness.aliases || {})[t]) || t,
            c = a
              ? function (t) {
                  var r = new a();
                  ((le._pt = 0),
                    r.init(e, n ? t + n : t, le, 0, [e]),
                    r.render(1, r),
                    le._pt && Qn(1, le));
                }
              : o.set(e, s);
          return a
            ? c
            : function (t) {
                return c(e, s, n ? t + n : t, o, 1);
              };
        },
        quickTo: function (e, t, n) {
          var r,
            i = hr.to(e, at(((r = {}), (r[t] = `+=0.1`), (r.paused = !0), r), n || {})),
            a = function (e, n, r) {
              return i.resetTo(t, e, n, r);
            };
          return ((a.tween = i), a);
        },
        isTweening: function (e) {
          return N.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return (e && e.ease && (e.ease = wn(e.ease, de.ease)), ot(de, e || {}));
        },
        config: function (e) {
          return ot(F, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            n = e.effect,
            r = e.plugins,
            i = e.defaults,
            a = e.extendTimeline;
          ((r || ``).split(`,`).forEach(function (e) {
            return e && !H[e] && !V[e] && Fe(t + ` effect requires ` + e + ` plugin.`);
          }),
            (We[t] = function (e, t, r) {
              return n(Vt(e), rt(t || {}, i), r);
            }),
            a &&
              (X.prototype[t] = function (e, n, r) {
                return this.add(We[t](e, xe(n) ? n : (r = n) && {}, this), r);
              }));
        },
        registerEase: function (e, t) {
          Y[e] = wn(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? wn(e, t) : Y;
        },
        getById: function (e) {
          return N.getById(e);
        },
        exportRoot: function (e, t) {
          e === void 0 && (e = {});
          var n,
            r,
            i = new X(e);
          for (
            i.smoothChildTiming = z(e.smoothChildTiming),
              N.remove(i),
              i._dp = 0,
              i._time = i._tTime = N._time,
              n = N._first;
            n;
          )
            ((r = n._next),
              (!t && !n._dur && n instanceof Z && n.vars.onComplete === n._targets[0]) ||
                Ct(i, n, n._start - n._delay),
              (n = r));
          return (Ct(N, i, 0), i);
        },
        context: function (e, t) {
          return e ? new lr(e, t) : M;
        },
        matchMedia: function (e) {
          return new ur(e);
        },
        matchMediaRefresh: function () {
          return (
            rr.forEach(function (e) {
              var t,
                n,
                r = e.conditions;
              for (n in r) r[n] && ((r[n] = !1), (t = 1));
              t && e.revert();
            }) || cr()
          );
        },
        addEventListener: function (e, t) {
          var n = ir[e] || (ir[e] = []);
          ~n.indexOf(t) || n.push(t);
        },
        removeEventListener: function (e, t) {
          var n = ir[e],
            r = n && n.indexOf(t);
          r >= 0 && n.splice(r, 1);
        },
        utils: {
          wrap: Qt,
          wrapYoyo: $t,
          distribute: Wt,
          random: qt,
          snap: Kt,
          normalize: Xt,
          getUnit: K,
          clamp: Lt,
          splitColor: un,
          toArray: Vt,
          selector: Ht,
          mapRange: tn,
          pipe: Jt,
          unitize: Yt,
          interpolate: nn,
          shuffle: Ut,
        },
        install: Ne,
        effects: We,
        ticker: J,
        updateRoot: X.updateRoot,
        plugins: H,
        globalTimeline: N,
        core: {
          PropTween: Q,
          globals: Ie,
          Tween: Z,
          Timeline: X,
          Animation: An,
          getCache: Ye,
          _removeLinkedListItem: dt,
          reverting: function () {
            return j;
          },
          context: function (e) {
            return (e && M && (M.data.push(e), (e._ctx = M)), M);
          },
          suppressOverwrites: function (e) {
            return (ie = e);
          },
        },
      }),
      U(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
        return (dr[e] = Z[e]);
      }),
      J.add(X.updateRoot),
      (le = dr.to({}, { duration: 0 })),
      (fr = function (e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
        return n;
      }),
      (pr = function (e, t) {
        var n,
          r,
          i,
          a = e._targets;
        for (n in t)
          for (r = a.length; r--;)
            ((i = e._ptLookup[r][n]),
              (i &&= i.d) &&
                (i._pt && (i = fr(i, n)), i && i.modifier && i.modifier(t[n], e, a[r], n)));
      }),
      (mr = function (e, t) {
        return {
          name: e,
          rawVars: 1,
          init: function (e, n, r) {
            r._onInit = function (e) {
              var r, i;
              if (
                (L(n) &&
                  ((r = {}),
                  U(n, function (e) {
                    return (r[e] = 1);
                  }),
                  (n = r)),
                t)
              ) {
                for (i in ((r = {}), n)) r[i] = t(n[i]);
                n = r;
              }
              pr(e, n);
            };
          },
        };
      }),
      (hr =
        dr.registerPlugin(
          {
            name: `attr`,
            init: function (e, t, n, r, i) {
              var a, o, s;
              for (a in ((this.tween = n), t))
                ((s = e.getAttribute(a) || ``),
                  (o = this.add(e, `setAttribute`, (s || 0) + ``, t[a], r, i, 0, 0, a)),
                  (o.op = a),
                  (o.b = s),
                  this._props.push(a));
            },
            render: function (e, t) {
              for (var n = t._pt; n;) (j ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
            },
          },
          {
            name: `endArray`,
            init: function (e, t) {
              for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
            },
          },
          mr(`roundProps`, Gt),
          mr(`modifiers`),
          mr(`snap`, Kt)
        ) || dr),
      (Z.version = X.version = hr.version = `3.11.3`),
      (se = 1),
      Se() && gn(),
      Y.Power0,
      Y.Power1,
      Y.Power2,
      Y.Power3,
      Y.Power4,
      Y.Linear,
      Y.Quad,
      Y.Cubic,
      Y.Quart,
      Y.Quint,
      Y.Strong,
      Y.Elastic,
      Y.Back,
      Y.SteppedEase,
      Y.Bounce,
      Y.Sine,
      Y.Expo,
      Y.Circ);
  }),
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  $,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li = e(() => {
    (r(),
      gr(),
      (Tr = function () {
        return h !== void 0;
      }),
      (Er = {}),
      (Dr = 180 / Math.PI),
      (Or = Math.PI / 180),
      (kr = Math.atan2),
      (Ar = 1e8),
      (jr = /([A-Z])/g),
      (Mr = /(left|right|width|margin|padding|x)/i),
      (Nr = /[\s,\(]\S/),
      (Pr = { autoAlpha: `opacity,visibility`, scale: `scaleX,scaleY`, alpha: `opacity` }),
      (Fr = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
      }),
      (Ir = function (e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
      }),
      (Lr = function (e, t) {
        return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t);
      }),
      (Rr = function (e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
      }),
      (zr = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
      }),
      (Br = function (e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
      }),
      (Vr = function (e, t, n) {
        return (e.style[t] = n);
      }),
      (Hr = function (e, t, n) {
        return e.style.setProperty(t, n);
      }),
      (Ur = function (e, t, n) {
        return (e._gsap[t] = n);
      }),
      (Wr = function (e, t, n) {
        return (e._gsap.scaleX = e._gsap.scaleY = n);
      }),
      (Gr = function (e, t, n, r, i) {
        var a = e._gsap;
        ((a.scaleX = a.scaleY = n), a.renderTransform(i, a));
      }),
      (Kr = function (e, t, n, r, i) {
        var a = e._gsap;
        ((a[t] = n), a.renderTransform(i, a));
      }),
      ($ = `transform`),
      (qr = $ + `Origin`),
      (Jr = function (e, t) {
        var n = this,
          r = this.target,
          i = r.style;
        if (e in Er) {
          if (
            ((this.tfm = this.tfm || {}),
            e !== `transform` &&
              ((e = Pr[e] || e),
              ~e.indexOf(`,`)
                ? e.split(`,`).forEach(function (e) {
                    return (n.tfm[e] = fi(r, e));
                  })
                : (this.tfm[e] = r._gsap.x ? r._gsap[e] : fi(r, e))),
            this.props.indexOf($) >= 0)
          )
            return;
          (r._gsap.svg &&
            ((this.svgo = r.getAttribute(`data-svg-origin`)), this.props.push(qr, t, ``)),
            (e = $));
        }
        (i || t) && this.props.push(e, t, i[e]);
      }),
      (Yr = function (e) {
        e.translate &&
          (e.removeProperty(`translate`), e.removeProperty(`scale`), e.removeProperty(`rotate`));
      }),
      (Xr = function () {
        var e,
          t,
          n = this.props,
          r = this.target,
          i = r.style,
          a = r._gsap;
        for (e = 0; e < n.length; e += 3)
          n[e + 1]
            ? (r[n[e]] = n[e + 2])
            : n[e + 2]
              ? (i[n[e]] = n[e + 2])
              : i.removeProperty(n[e].replace(jr, `-$1`).toLowerCase());
        if (this.tfm) {
          for (t in this.tfm) a[t] = this.tfm[t];
          (a.svg && (a.renderTransform(), r.setAttribute(`data-svg-origin`, this.svgo || ``)),
            (e = Cr()),
            e && !e.isStart && !i[$] && (Yr(i), (a.uncache = 1)));
        }
      }),
      (Zr = function (e, t) {
        var n = { target: e, props: [], revert: Xr, save: Jr };
        return (
          t &&
            t.split(`,`).forEach(function (e) {
              return n.save(e);
            }),
          n
        );
      }),
      (Qr = function (e, t) {
        var n = vr.createElementNS
          ? vr.createElementNS((t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`), e)
          : vr.createElement(e);
        return n.style ? n : vr.createElement(e);
      }),
      ($r = function e(t, n, r) {
        var i = getComputedStyle(t);
        return (
          i[n] ||
          i.getPropertyValue(n.replace(jr, `-$1`).toLowerCase()) ||
          i.getPropertyValue(n) ||
          (!r && e(t, ti(n) || n, 1)) ||
          ``
        );
      }),
      (ei = `O,Moz,ms,Ms,Webkit`.split(`,`)),
      (ti = function (e, t, n) {
        var r = (t || xr).style,
          i = 5;
        if (e in r && !n) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(ei[i] + e in r););
        return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? ei[i] : ``) + e;
      }),
      (ni = function () {
        Tr() &&
          h.document &&
          ((_r = h),
          (vr = _r.document),
          (yr = vr.documentElement),
          (xr = Qr(`div`) || { style: {} }),
          Qr(`div`),
          ($ = ti($)),
          (qr = $ + `Origin`),
          (xr.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
          (wr = !!ti(`perspective`)),
          (Cr = hr.core.reverting),
          (br = 1));
      }),
      (ri = function e(t) {
        var n,
          r = Qr(
            `svg`,
            (this.ownerSVGElement && this.ownerSVGElement.getAttribute(`xmlns`)) ||
              `http://www.w3.org/2000/svg`
          ),
          i = this.parentNode,
          a = this.nextSibling,
          o = this.style.cssText;
        if ((yr.appendChild(r), r.appendChild(this), (this.style.display = `block`), t))
          try {
            ((n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = e));
          } catch {}
        else this._gsapBBox && (n = this._gsapBBox());
        return (
          i && (a ? i.insertBefore(this, a) : i.appendChild(this)),
          yr.removeChild(r),
          (this.style.cssText = o),
          n
        );
      }),
      (ii = function (e, t) {
        for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
      }),
      (ai = function (e) {
        var t;
        try {
          t = e.getBBox();
        } catch {
          t = ri.call(e, !0);
        }
        return (
          (t && (t.width || t.height)) || e.getBBox === ri || (t = ri.call(e, !0)),
          !t || t.width || t.x || t.y
            ? t
            : {
                x: +ii(e, [`x`, `cx`, `x1`]) || 0,
                y: +ii(e, [`y`, `cy`, `y1`]) || 0,
                width: 0,
                height: 0,
              }
        );
      }),
      (oi = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ai(e));
      }),
      (si = function (e, t) {
        if (t) {
          var n = e.style;
          (t in Er && t !== qr && (t = $),
            n.removeProperty
              ? ((t.substr(0, 2) !== `ms` && t.substr(0, 6) !== `webkit`) || (t = `-` + t),
                n.removeProperty(t.replace(jr, `-$1`).toLowerCase()))
              : n.removeAttribute(t));
        }
      }),
      (ci = function (e, t, n, r, i, a) {
        var o = new Q(e._pt, t, n, 0, 1, a ? Br : zr);
        return ((e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o);
      }),
      (li = { deg: 1, rad: 1, turn: 1 }),
      (ui = { grid: 1, flex: 1 }),
      (di = function e(t, n, r, i) {
        var a,
          o,
          s,
          c,
          l = parseFloat(r) || 0,
          u = (r + ``).trim().substr((l + ``).length) || `px`,
          d = xr.style,
          f = Mr.test(n),
          p = t.tagName.toLowerCase() === `svg`,
          m = (p ? `client` : `offset`) + (f ? `Width` : `Height`),
          h = 100,
          g = i === `px`,
          _ = i === `%`;
        return i === u || !l || li[i] || li[u]
          ? l
          : (u !== `px` && !g && (l = e(t, n, r, `px`)),
            (c = t.getCTM && oi(t)),
            (_ || u === `%`) && (Er[n] || ~n.indexOf(`adius`))
              ? ((a = c ? t.getBBox()[f ? `width` : `height`] : t[m]),
                W(_ ? (l / a) * h : (l / 100) * a))
              : ((d[f ? `width` : `height`] = h + (g ? u : i)),
                (o = ~n.indexOf(`adius`) || (i === `em` && t.appendChild && !p) ? t : t.parentNode),
                c && (o = (t.ownerSVGElement || {}).parentNode),
                (o && o !== vr && o.appendChild) || (o = vr.body),
                (s = o._gsap),
                s && _ && s.width && f && s.time === J.time && !s.uncache
                  ? W((l / s.width) * h)
                  : ((_ || u === `%`) && !ui[$r(o, `display`)] && (d.position = $r(t, `position`)),
                    o === t && (d.position = `static`),
                    o.appendChild(xr),
                    (a = xr[m]),
                    o.removeChild(xr),
                    (d.position = `absolute`),
                    f && _ && ((s = Ye(o)), (s.time = J.time), (s.width = o[m])),
                    W(g ? (a * l) / h : a && l ? (h / a) * l : 0))));
      }),
      (fi = function (e, t, n, r) {
        var i;
        return (
          br || ni(),
          t in Pr && t !== `transform` && ((t = Pr[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
          Er[t] && t !== `transform`
            ? ((i = wi(e, r)),
              (i =
                t === `transformOrigin`
                  ? i.svg
                    ? i.origin
                    : Ti($r(e, qr)) + ` ` + i.zOrigin + `px`
                  : i[t]))
            : ((i = e.style[t]),
              (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
                (i = (_i[t] && _i[t](e, t, n)) || $r(e, t) || Xe(e, t) || +(t === `opacity`))),
          n && !~(i + ``).trim().indexOf(` `) ? di(e, t, i, n) + n : i
        );
      }),
      (pi = function (e, t, n, r) {
        if (!n || n === `none`) {
          var i = ti(t, e, 1),
            a = i && $r(e, i, 1);
          a && a !== n ? ((t = i), (n = a)) : t === `borderColor` && (n = $r(e, `borderTopColor`));
        }
        var o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _,
          v = new Q(this._pt, e.style, t, 0, 1, Zn),
          y = 0,
          b = 0;
        if (
          ((v.b = n),
          (v.e = r),
          (n += ``),
          (r += ``),
          r === `auto` && ((e.style[t] = r), (r = $r(e, t) || r), (e.style[t] = n)),
          (o = [n, r]),
          hn(o),
          (n = o[0]),
          (r = o[1]),
          (c = n.match(De) || []),
          (_ = r.match(De) || []),
          _.length)
        ) {
          for (; (s = De.exec(r));)
            ((f = s[0]),
              (m = r.substring(y, s.index)),
              u
                ? (u = (u + 1) % 5)
                : (m.substr(-5) !== `rgba(` && m.substr(-5) !== `hsla(`) || (u = 1),
              f !== (d = c[b++] || ``) &&
                ((l = parseFloat(d) || 0),
                (g = d.substr((l + ``).length)),
                f.charAt(1) === `=` && (f = Ze(l, f) + g),
                (p = parseFloat(f)),
                (h = f.substr((p + ``).length)),
                (y = De.lastIndex - h.length),
                h || ((h = h || F.units[t] || g), y === r.length && ((r += h), (v.e += h))),
                g !== h && (l = di(e, t, d, h) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: m || b === 1 ? m : `,`,
                  s: l,
                  c: p - l,
                  m: (u && u < 4) || t === `zIndex` ? Math.round : 0,
                })));
          v.c = y < r.length ? r.substring(y, r.length) : ``;
        } else v.r = t === `display` && r === `none` ? Br : zr;
        return (ke.test(r) && (v.e = 0), (this._pt = v), v);
      }),
      (mi = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` }),
      (hi = function (e) {
        var t = e.split(` `),
          n = t[0],
          r = t[1] || `50%`;
        return (
          (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
            ((e = n), (n = r), (r = e)),
          (t[0] = mi[n] || n),
          (t[1] = mi[r] || r),
          t.join(` `)
        );
      }),
      (gi = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
          var n,
            r,
            i,
            a = t.t,
            o = a.style,
            s = t.u,
            c = a._gsap;
          if (s === `all` || !0 === s) ((o.cssText = ``), (r = 1));
          else
            for (s = s.split(`,`), i = s.length; --i > -1;)
              ((n = s[i]), Er[n] && ((r = 1), (n = n === `transformOrigin` ? qr : $)), si(a, n));
          r &&
            (si(a, $),
            c && (c.svg && a.removeAttribute(`transform`), wi(a, 1), (c.uncache = 1), Yr(o)));
        }
      }),
      (_i = {
        clearProps: function (e, t, n, r, i) {
          if (i.data !== `isFromStart`) {
            var a = (e._pt = new Q(e._pt, t, n, 0, 0, gi));
            return ((a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1);
          }
        },
      }),
      (vi = [1, 0, 0, 1, 0, 0]),
      (yi = {}),
      (bi = function (e) {
        return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
      }),
      (xi = function (e) {
        var t = $r(e, $);
        return bi(t) ? vi : t.substr(7).match(Ee).map(W);
      }),
      (Si = function (e, t) {
        var n,
          r,
          i,
          a,
          o = e._gsap || Ye(e),
          s = e.style,
          c = xi(e);
        return o.svg && e.getAttribute(`transform`)
          ? ((i = e.transform.baseVal.consolidate().matrix),
            (c = [i.a, i.b, i.c, i.d, i.e, i.f]),
            c.join(`,`) === `1,0,0,1,0,0` ? vi : c)
          : (c === vi &&
              !e.offsetParent &&
              e !== yr &&
              !o.svg &&
              ((i = s.display),
              (s.display = `block`),
              (n = e.parentNode),
              (!n || !e.offsetParent) && ((a = 1), (r = e.nextElementSibling), yr.appendChild(e)),
              (c = xi(e)),
              i ? (s.display = i) : si(e, `display`),
              a && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : yr.removeChild(e))),
            t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
      }),
      (Ci = function (e, t, n, r, i, a) {
        var o,
          s,
          c,
          l,
          u = e._gsap,
          d = i || Si(e, !0),
          f = u.xOrigin || 0,
          p = u.yOrigin || 0,
          m = u.xOffset || 0,
          h = u.yOffset || 0,
          g = d[0],
          _ = d[1],
          v = d[2],
          y = d[3],
          b = d[4],
          x = d[5],
          S = t.split(` `),
          C = parseFloat(S[0]) || 0,
          w = parseFloat(S[1]) || 0;
        (n
          ? d !== vi &&
            (s = g * y - _ * v) &&
            ((c = (y / s) * C + w * (-v / s) + (v * x - y * b) / s),
            (l = C * (-_ / s) + (g / s) * w - (g * x - _ * b) / s),
            (C = c),
            (w = l))
          : ((o = ai(e)),
            (C = o.x + (~S[0].indexOf(`%`) ? (C / 100) * o.width : C)),
            (w = o.y + (~(S[1] || S[0]).indexOf(`%`) ? (w / 100) * o.height : w))),
          r || (!1 !== r && u.smooth)
            ? ((b = C - f),
              (x = w - p),
              (u.xOffset = m + (b * g + x * v) - b),
              (u.yOffset = h + (b * _ + x * y) - x))
            : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = C),
          (u.yOrigin = w),
          (u.smooth = !!r),
          (u.origin = t),
          (u.originIsAbsolute = !!n),
          (e.style[qr] = `0px 0px`),
          a &&
            (ci(a, u, `xOrigin`, f, C),
            ci(a, u, `yOrigin`, p, w),
            ci(a, u, `xOffset`, m, u.xOffset),
            ci(a, u, `yOffset`, h, u.yOffset)),
          e.setAttribute(`data-svg-origin`, C + ` ` + w));
      }),
      (wi = function (e, t) {
        var n = e._gsap || new kn(e);
        if (`x` in n && !t && !n.uncache) return n;
        var r,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S,
          C,
          w,
          T,
          E,
          D,
          ee,
          O,
          te,
          k,
          ne,
          A,
          re,
          ie = e.style,
          j = n.scaleX < 0,
          M = `px`,
          N = `deg`,
          P = getComputedStyle(e),
          ae = $r(e, qr) || `0`;
        return (
          (r = i = a = c = l = u = d = f = p = 0),
          (o = s = 1),
          (n.svg = !!(e.getCTM && oi(e))),
          P.translate &&
            ((P.translate === `none` && P.scale === `none` && P.rotate === `none`) ||
              (ie[$] =
                (P.translate === `none`
                  ? ``
                  : `translate3d(` +
                    (P.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) +
                    `) `) +
                (P.rotate === `none` ? `` : `rotate(` + P.rotate + `) `) +
                (P.scale === `none` ? `` : `scale(` + P.scale.split(` `).join(`,`) + `) `) +
                (P[$] === `none` ? `` : P[$])),
            (ie.scale = ie.rotate = ie.translate = `none`)),
          (g = Si(e, n.svg)),
          n.svg &&
            (n.uncache
              ? ((D = e.getBBox()),
                (ae = n.xOrigin - D.x + `px ` + (n.yOrigin - D.y) + `px`),
                (E = ``))
              : (E = !t && e.getAttribute(`data-svg-origin`)),
            Ci(e, E || ae, !!E || n.originIsAbsolute, !1 !== n.smooth, g)),
          (m = n.xOrigin || 0),
          (h = n.yOrigin || 0),
          g !== vi &&
            ((b = g[0]),
            (x = g[1]),
            (S = g[2]),
            (C = g[3]),
            (r = w = g[4]),
            (i = T = g[5]),
            g.length === 6
              ? ((o = Math.sqrt(b * b + x * x)),
                (s = Math.sqrt(C * C + S * S)),
                (c = b || x ? kr(x, b) * Dr : 0),
                (d = S || C ? kr(S, C) * Dr + c : 0),
                d && (s *= Math.abs(Math.cos(d * Or))),
                n.svg && ((r -= m - (m * b + h * S)), (i -= h - (m * x + h * C))))
              : ((re = g[6]),
                (ne = g[7]),
                (O = g[8]),
                (te = g[9]),
                (k = g[10]),
                (A = g[11]),
                (r = g[12]),
                (i = g[13]),
                (a = g[14]),
                (_ = kr(re, k)),
                (l = _ * Dr),
                _ &&
                  ((v = Math.cos(-_)),
                  (y = Math.sin(-_)),
                  (E = w * v + O * y),
                  (D = T * v + te * y),
                  (ee = re * v + k * y),
                  (O = w * -y + O * v),
                  (te = T * -y + te * v),
                  (k = re * -y + k * v),
                  (A = ne * -y + A * v),
                  (w = E),
                  (T = D),
                  (re = ee)),
                (_ = kr(-S, k)),
                (u = _ * Dr),
                _ &&
                  ((v = Math.cos(-_)),
                  (y = Math.sin(-_)),
                  (E = b * v - O * y),
                  (D = x * v - te * y),
                  (ee = S * v - k * y),
                  (A = C * y + A * v),
                  (b = E),
                  (x = D),
                  (S = ee)),
                (_ = kr(x, b)),
                (c = _ * Dr),
                _ &&
                  ((v = Math.cos(_)),
                  (y = Math.sin(_)),
                  (E = b * v + x * y),
                  (D = w * v + T * y),
                  (x = x * v - b * y),
                  (T = T * v - w * y),
                  (b = E),
                  (w = D)),
                l && Math.abs(l) + Math.abs(c) > 359.9 && ((l = c = 0), (u = 180 - u)),
                (o = W(Math.sqrt(b * b + x * x + S * S))),
                (s = W(Math.sqrt(T * T + re * re))),
                (_ = kr(w, T)),
                (d = Math.abs(_) > 2e-4 ? _ * Dr : 0),
                (p = A ? 1 / (A < 0 ? -A : A) : 0)),
            n.svg &&
              ((E = e.getAttribute(`transform`)),
              (n.forceCSS = e.setAttribute(`transform`, ``) || !bi($r(e, $))),
              E && e.setAttribute(`transform`, E))),
          Math.abs(d) > 90 &&
            Math.abs(d) < 270 &&
            (j
              ? ((o *= -1), (d += c <= 0 ? 180 : -180), (c += c <= 0 ? 180 : -180))
              : ((s *= -1), (d += d <= 0 ? 180 : -180))),
          (t ||= n.uncache),
          (n.x =
            r -
            ((n.xPercent =
              r &&
              ((!t && n.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
              ? (e.offsetWidth * n.xPercent) / 100
              : 0) +
            M),
          (n.y =
            i -
            ((n.yPercent =
              i &&
              ((!t && n.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
              ? (e.offsetHeight * n.yPercent) / 100
              : 0) +
            M),
          (n.z = a + M),
          (n.scaleX = W(o)),
          (n.scaleY = W(s)),
          (n.rotation = W(c) + N),
          (n.rotationX = W(l) + N),
          (n.rotationY = W(u) + N),
          (n.skewX = d + N),
          (n.skewY = f + N),
          (n.transformPerspective = p + M),
          (n.zOrigin = parseFloat(ae.split(` `)[2]) || 0) && (ie[qr] = Ti(ae)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = F.force3D),
          (n.renderTransform = n.svg ? Mi : wr ? ji : Di),
          (n.uncache = 0),
          n
        );
      }),
      (Ti = function (e) {
        return (e = e.split(` `))[0] + ` ` + e[1];
      }),
      (Ei = function (e, t, n) {
        var r = K(t);
        return W(parseFloat(t) + parseFloat(di(e, `x`, n + `px`, r))) + r;
      }),
      (Di = function (e, t) {
        ((t.z = `0px`), (t.rotationY = t.rotationX = `0deg`), (t.force3D = 0), ji(e, t));
      }),
      (Oi = `0deg`),
      (ki = `0px`),
      (Ai = `) `),
      (ji = function (e, t) {
        var n = t || this,
          r = n.xPercent,
          i = n.yPercent,
          a = n.x,
          o = n.y,
          s = n.z,
          c = n.rotation,
          l = n.rotationY,
          u = n.rotationX,
          d = n.skewX,
          f = n.skewY,
          p = n.scaleX,
          m = n.scaleY,
          h = n.transformPerspective,
          g = n.force3D,
          _ = n.target,
          v = n.zOrigin,
          y = ``,
          b = (g === `auto` && e && e !== 1) || !0 === g;
        if (v && (u !== Oi || l !== Oi)) {
          var x,
            S = parseFloat(l) * Or,
            C = Math.sin(S),
            w = Math.cos(S);
          ((S = parseFloat(u) * Or),
            (x = Math.cos(S)),
            (a = Ei(_, a, C * x * -v)),
            (o = Ei(_, o, -Math.sin(S) * -v)),
            (s = Ei(_, s, w * x * -v + v)));
        }
        (h !== ki && (y += `perspective(` + h + Ai),
          (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
          (b || a !== ki || o !== ki || s !== ki) &&
            (y +=
              s !== ki || b
                ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
                : `translate(` + a + `, ` + o + Ai),
          c !== Oi && (y += `rotate(` + c + Ai),
          l !== Oi && (y += `rotateY(` + l + Ai),
          u !== Oi && (y += `rotateX(` + u + Ai),
          (d === Oi && f === Oi) || (y += `skew(` + d + `, ` + f + Ai),
          (p === 1 && m === 1) || (y += `scale(` + p + `, ` + m + Ai),
          (_.style[$] = y || `translate(0, 0)`));
      }),
      (Mi = function (e, t) {
        var n,
          r,
          i,
          a,
          o,
          s = t || this,
          c = s.xPercent,
          l = s.yPercent,
          u = s.x,
          d = s.y,
          f = s.rotation,
          p = s.skewX,
          m = s.skewY,
          h = s.scaleX,
          g = s.scaleY,
          _ = s.target,
          v = s.xOrigin,
          y = s.yOrigin,
          b = s.xOffset,
          x = s.yOffset,
          S = s.forceCSS,
          C = parseFloat(u),
          w = parseFloat(d);
        ((f = parseFloat(f)),
          (p = parseFloat(p)),
          (m = parseFloat(m)),
          m && ((m = parseFloat(m)), (p += m), (f += m)),
          f || p
            ? ((f *= Or),
              (p *= Or),
              (n = Math.cos(f) * h),
              (r = Math.sin(f) * h),
              (i = Math.sin(f - p) * -g),
              (a = Math.cos(f - p) * g),
              p &&
                ((m *= Or),
                (o = Math.tan(p - m)),
                (o = Math.sqrt(1 + o * o)),
                (i *= o),
                (a *= o),
                m && ((o = Math.tan(m)), (o = Math.sqrt(1 + o * o)), (n *= o), (r *= o))),
              (n = W(n)),
              (r = W(r)),
              (i = W(i)),
              (a = W(a)))
            : ((n = h), (a = g), (r = i = 0)),
          ((C && !~(u + ``).indexOf(`px`)) || (w && !~(d + ``).indexOf(`px`))) &&
            ((C = di(_, `x`, u, `px`)), (w = di(_, `y`, d, `px`))),
          (v || y || b || x) &&
            ((C = W(C + v - (v * n + y * i) + b)), (w = W(w + y - (v * r + y * a) + x))),
          (c || l) &&
            ((o = _.getBBox()),
            (C = W(C + (c / 100) * o.width)),
            (w = W(w + (l / 100) * o.height))),
          (o = `matrix(` + n + `,` + r + `,` + i + `,` + a + `,` + C + `,` + w + `)`),
          _.setAttribute(`transform`, o),
          S && (_.style[$] = o));
      }),
      (Ni = function (e, t, n, r, i) {
        var a,
          o,
          s = 360,
          c = L(i),
          l = parseFloat(i) * (c && ~i.indexOf(`rad`) ? Dr : 1) - r,
          u = r + l + `deg`;
        return (
          c &&
            ((a = i.split(`_`)[1]),
            a === `short` && ((l %= s), l !== l % (s / 2) && (l += l < 0 ? s : -s)),
            a === `cw` && l < 0
              ? (l = ((l + s * Ar) % s) - ~~(l / s) * s)
              : a === `ccw` && l > 0 && (l = ((l - s * Ar) % s) - ~~(l / s) * s)),
          (e._pt = o = new Q(e._pt, t, n, r, l, Ir)),
          (o.e = u),
          (o.u = `deg`),
          e._props.push(n),
          o
        );
      }),
      (Pi = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }),
      (Fi = function (e, t, n) {
        var r,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d = Pi({}, n._gsap),
          f = `perspective,force3D,transformOrigin,svgOrigin`,
          p = n.style;
        for (i in (d.svg
          ? ((a = n.getAttribute(`transform`)),
            n.setAttribute(`transform`, ``),
            (p[$] = t),
            (r = wi(n, 1)),
            si(n, $),
            n.setAttribute(`transform`, a))
          : ((a = getComputedStyle(n)[$]), (p[$] = t), (r = wi(n, 1)), (p[$] = a)),
        Er))
          ((a = d[i]),
            (o = r[i]),
            a !== o &&
              f.indexOf(i) < 0 &&
              ((l = K(a)),
              (u = K(o)),
              (s = l === u ? parseFloat(a) : di(n, i, a, u)),
              (c = parseFloat(o)),
              (e._pt = new Q(e._pt, r, i, s, c - s, Fr)),
              (e._pt.u = u || 0),
              e._props.push(i)));
        Pi(r, d);
      }),
      U(`padding,margin,Width,Radius`, function (e, t) {
        var n = `Top`,
          r = `Right`,
          i = `Bottom`,
          a = `Left`,
          o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
            return t < 2 ? e + n : `border` + n + e;
          });
        _i[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
          var a, s;
          if (arguments.length < 4)
            return (
              (a = o.map(function (t) {
                return fi(e, t, n);
              })),
              (s = a.join(` `)),
              s.split(a[0]).length === 5 ? a[0] : s
            );
          ((a = (r + ``).split(` `)),
            (s = {}),
            o.forEach(function (e, t) {
              return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
            }),
            e.init(t, s, i));
        };
      }),
      (Ii = {
        name: `css`,
        register: ni,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, n, r, i) {
          var a,
            o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            h,
            g,
            _,
            v,
            y,
            b,
            x = this._props,
            S = e.style,
            C = n.vars.startAt;
          for (d in (br || ni(),
          (this.styles = this.styles || Zr(e)),
          (b = this.styles.props),
          (this.tween = n),
          t))
            if (d !== `autoRound` && ((o = t[d]), !H[d] || !In(d, t, n, r, e, i))) {
              if (
                ((l = typeof o),
                (u = _i[d]),
                l === `function` && ((o = o.call(n, r, e, i)), (l = typeof o)),
                l === `string` && ~o.indexOf(`random(`) && (o = en(o)),
                u)
              )
                u(this, e, d, o, n) && (y = 1);
              else if (d.substr(0, 2) === `--`)
                ((a = (getComputedStyle(e).getPropertyValue(d) + ``).trim()),
                  (o += ``),
                  (pn.lastIndex = 0),
                  pn.test(a) || ((f = K(a)), (p = K(o))),
                  p ? f !== p && (a = di(e, d, a, p) + p) : f && (o += f),
                  this.add(S, `setProperty`, a, o, r, i, 0, 0, d),
                  x.push(d),
                  b.push(d, 0, S[d]));
              else if (l !== `undefined`) {
                if (
                  (C && d in C
                    ? ((a = typeof C[d] == `function` ? C[d].call(n, r, e, i) : C[d]),
                      L(a) && ~a.indexOf(`random(`) && (a = en(a)),
                      K(a + ``) || (a += F.units[d] || K(fi(e, d)) || ``),
                      (a + ``).charAt(1) === `=` && (a = fi(e, d)))
                    : (a = fi(e, d)),
                  (c = parseFloat(a)),
                  (m = l === `string` && o.charAt(1) === `=` && o.substr(0, 2)),
                  m && (o = o.substr(2)),
                  (s = parseFloat(o)),
                  d in Pr &&
                    (d === `autoAlpha` &&
                      (c === 1 && fi(e, `visibility`) === `hidden` && s && (c = 0),
                      b.push(`visibility`, 0, S.visibility),
                      ci(
                        this,
                        S,
                        `visibility`,
                        c ? `inherit` : `hidden`,
                        s ? `inherit` : `hidden`,
                        !s
                      )),
                    d !== `scale` &&
                      d !== `transform` &&
                      ((d = Pr[d]), ~d.indexOf(`,`) && (d = d.split(`,`)[0]))),
                  (h = d in Er),
                  h)
                )
                  if (
                    (this.styles.save(d),
                    g ||
                      ((_ = e._gsap),
                      (_.renderTransform && !t.parseTransform) || wi(e, t.parseTransform),
                      (v = !1 !== t.smoothOrigin && _.smooth),
                      (g = this._pt = new Q(this._pt, S, $, 0, 1, _.renderTransform, _, 0, -1)),
                      (g.dep = 1)),
                    d === `scale`)
                  )
                    ((this._pt = new Q(
                      this._pt,
                      _,
                      `scaleY`,
                      c,
                      (m ? Ze(c, m + s) : s) - c || 0,
                      Fr
                    )),
                      (this._pt.u = 0),
                      x.push(`scaleY`, d),
                      (d += `X`));
                  else {
                    if (d === `transformOrigin`) {
                      (b.push(qr, 0, S[qr]),
                        (o = hi(o)),
                        _.svg
                          ? Ci(e, o, 0, v, 0, this)
                          : ((p = parseFloat(o.split(` `)[2]) || 0),
                            p !== _.zOrigin && ci(this, _, `zOrigin`, _.zOrigin, p),
                            ci(this, S, d, Ti(a), Ti(o))));
                      continue;
                    }
                    if (d === `svgOrigin`) {
                      Ci(e, o, 1, v, 0, this);
                      continue;
                    }
                    if (d in yi) {
                      Ni(this, _, d, c, m ? Ze(c, m + o) : o);
                      continue;
                    }
                    if (d === `smoothOrigin`) {
                      ci(this, _, `smooth`, _.smooth, o);
                      continue;
                    }
                    if (d === `force3D`) {
                      _[d] = o;
                      continue;
                    }
                    if (d === `transform`) {
                      Fi(this, o, e);
                      continue;
                    }
                  }
                else d in S || (d = ti(d) || d);
                if (h || ((s || s === 0) && (c || c === 0) && !Nr.test(o) && d in S))
                  ((f = (a + ``).substr((c + ``).length)),
                    (s ||= 0),
                    (p = K(o) || (d in F.units ? F.units[d] : f)),
                    f !== p && (c = di(e, d, a, p)),
                    (this._pt = new Q(
                      this._pt,
                      h ? _ : S,
                      d,
                      c,
                      (m ? Ze(c, m + s) : s) - c,
                      h || (p !== `px` && d !== `zIndex`) || !1 === t.autoRound ? Fr : Rr
                    )),
                    (this._pt.u = p || 0),
                    f !== p && p !== `%` && ((this._pt.b = a), (this._pt.r = Lr)));
                else if (d in S) pi.call(this, e, d, a, m ? m + o : o);
                else {
                  if (!(d in e)) {
                    Pe(d, o);
                    continue;
                  }
                  this.add(e, d, a || e[d], m ? m + o : o, r, i);
                }
                (h || (d in S ? b.push(d, 0, S[d]) : b.push(d, 1, a || e[d])), x.push(d));
              }
            }
          y && nr(this);
        },
        render: function (e, t) {
          if (t.tween._time || !Cr()) for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
          else t.styles.revert();
        },
        get: fi,
        aliases: Pr,
        getSetter: function (e, t, n) {
          var r = Pr[t];
          return (
            r && r.indexOf(`,`) < 0 && (t = r),
            t in Er && t !== qr && (e._gsap.x || fi(e, `x`))
              ? n && Sr === n
                ? t === `scale`
                  ? Wr
                  : Ur
                : (Sr = n || {}) && (t === `scale` ? Gr : Kr)
              : e.style && !be(e.style[t])
                ? Vr
                : ~t.indexOf(`-`)
                  ? Hr
                  : Jn(e, t)
          );
        },
        core: { _removeProperty: si, _getMatrix: Si },
      }),
      (hr.utils.checkPrefix = ti),
      (hr.core.getStyleSaver = Zr),
      (function (e, t, n, r) {
        var i = U(e + `,` + t + `,` + n, function (e) {
          Er[e] = 1;
        });
        (U(t, function (e) {
          ((F.units[e] = `deg`), (yi[e] = 1));
        }),
          (Pr[i[13]] = e + `,` + t),
          U(r, function (e) {
            var t = e.split(`:`);
            Pr[t[1]] = i[t[0]];
          }));
      })(
        `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
        `rotation,rotationX,rotationY,skewX,skewY`,
        `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
        `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`
      ),
      U(
        `x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,
        function (e) {
          F.units[e] = `px`;
        }
      ),
      hr.registerPlugin(Ii));
  }),
  Ri,
  zi = e(() => {
    (gr(), Li(), (Ri = hr.registerPlugin(Ii) || hr), Ri.core.Tween);
  });
function Bi({ colors: e, lineWidth: t, length: r, smoothing: o, style: s }) {
  let l = ne.current() === ne.canvas,
    d = a([]),
    f = a(null),
    [p, m] = n(!1),
    g = a(!1),
    _ = a(null),
    v = a(null),
    y = [];
  switch (e.type) {
    case `single`:
      y = [e.color];
      break;
    case `multi`:
      y = e.colors ? [...e.colors].reverse() : [];
      break;
  }
  return (
    i(() => {
      let e,
        t = (t) => {
          (g.current ||
            ((v.current = { x: t.clientX, y: t.clientY }),
            (_.current = { x: t.clientX, y: t.clientY }),
            m(!0),
            (g.current = !0),
            (e = requestAnimationFrame(n))),
            (v.current = { x: t.clientX, y: t.clientY }));
        },
        n = () => {
          l ||
            !_.current ||
            !v.current ||
            (Ri.to(_.current, {
              x: v.current.x,
              y: v.current.y,
              duration: o / 100,
              ease: `power2.out`,
            }),
            (e = requestAnimationFrame(n)));
        };
      return (
        h.addEventListener(`mousemove`, t),
        () => {
          (h.removeEventListener(`mousemove`, t), e && cancelAnimationFrame(e));
        }
      );
    }, [o]),
    i(() => {
      let e = () => {
        (d.current.forEach((e, t) => {
          if (!e) return;
          let n = Math.floor((r / y.length) * (y.length - t)),
            i = e.points || [];
          for (i.unshift({ ..._.current }); i.length > n;) i.pop();
          if (((e.points = i), i.length > 1)) {
            let t = `M ${i[0].x} ${i[0].y}`;
            for (let e = 1; e < i.length; e++) t += ` L ${i[e].x} ${i[e].y}`;
            e.setAttribute(`d`, t);
          }
        }),
          requestAnimationFrame(e));
      };
      e();
    }, [f, o]),
    c(`div`, {
      ref: f,
      style: { ...s, width: t, height: t, pointerEvents: `none` },
      children: l
        ? c(`div`, {
            style: { backgroundColor: y[y.length - 1], width: t, height: t, borderRadius: t / 2 },
          })
        : p
          ? u(
              c(`div`, {
                style: {
                  position: `fixed`,
                  top: 0,
                  left: 0,
                  width: `100vw`,
                  height: `100vh`,
                  pointerEvents: `none`,
                  zIndex: 9999,
                  userSelect: `none`,
                  overflow: `hidden`,
                },
                children: y.map((e, n) =>
                  c(
                    `svg`,
                    {
                      style: {
                        position: `absolute`,
                        top: 0,
                        left: 0,
                        height: `100%`,
                        width: `100%`,
                      },
                      children: c(`path`, {
                        ref: (e) => (d.current[n] = e),
                        className: `trail`,
                        fill: `none`,
                        stroke: e,
                        strokeWidth: t,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                      }),
                    },
                    e
                  )
                ),
              }),
              document.body
            )
          : null,
    })
  );
}
var Vi = e(() => {
    (r(),
      f(),
      S(),
      m(),
      s(),
      zi(),
      (Bi.displayName = `Cursor Trail`),
      x(Bi, {
        colors: {
          type: O.Object,
          controls: {
            type: {
              type: O.Enum,
              defaultValue: `single`,
              options: [`single`, `multi`],
              optionTitles: [`Single`, `Multi`],
              displaySegmentedControl: !0,
            },
            color: { type: O.Color, defaultValue: `#0099ff`, hidden: (e) => e.type !== `single` },
            colors: {
              type: O.Array,
              defaultValue: [`#0099FF`, `#52BAFF`, `#ADE0FF`, `#FFFFFF`],
              control: { type: O.Color },
              hidden: (e) => e.type !== `multi`,
            },
          },
        },
        lineWidth: { type: O.Number, defaultValue: 20, min: 1, step: 1, max: 200, title: `Width` },
        length: { type: O.Number, defaultValue: 40, min: 1, max: 100, step: 1 },
        smoothing: {
          type: O.Number,
          defaultValue: 50,
          min: 0,
          max: 100,
          step: 1,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi = e(() => {
    (f(),
      S(),
      v(),
      m(),
      Vi(),
      (Hi = C(Bi)),
      (Ui = `framer-UcELx`),
      (Wi = { CaDKjwpbo: `framer-v-1wldf4r` }),
      (Gi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ki = ({ value: e, children: n }) => {
        let r = t(y),
          i = e ?? r.transition,
          a = d(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(y.Provider, { value: a, children: n });
      }),
      (qi = g.create(o)),
      (Ji = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Yi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Xi = T(
        l(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = p(),
            { activeLocale: o, setLocale: s } = k();
          ee();
          let { style: l, className: u, layoutId: d, variant: f, ...m } = Ji(e),
            {
              baseVariant: h,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: O,
            } = E({ defaultVariant: `CaDKjwpbo`, ref: r, variant: f, variantClassNames: Wi }),
            ne = Yi(e, O),
            A = D(Ui);
          return c(_, {
            id: d ?? i,
            children: c(qi, {
              animate: O,
              initial: !1,
              children: c(Ki, {
                value: Gi,
                children: c(g.div, {
                  ...m,
                  ...x,
                  className: D(A, `framer-1wldf4r`, u, v),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: ne,
                  layoutId: `CaDKjwpbo`,
                  ref: r,
                  style: { ...l },
                  children: c(te, {
                    children: c(b, {
                      className: `framer-1qd3vij-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: ne,
                      layoutId: `PVUPlqfCO-container`,
                      nodeId: `PVUPlqfCO`,
                      rendersWithMotion: !0,
                      scopeId: `AKS68MnlV`,
                      children: c(Bi, {
                        colors: {
                          color: `var(--token-32152519-cfa7-426d-a4e2-5734eaab0f3f, rgba(255, 255, 255, 0.16))`,
                          colors: [
                            `var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64))`,
                            `var(--token-261f765c-6813-4c51-bff4-2919c1bc9f56, rgba(255, 255, 255, 0.52))`,
                            `var(--token-870e7f39-08be-4348-8a6b-f17e572ddd1b, rgba(255, 255, 255, 0.32))`,
                            `var(--token-32152519-cfa7-426d-a4e2-5734eaab0f3f, rgba(255, 255, 255, 0.16))`,
                            `var(--token-4b341338-949e-448c-99a3-d0281ee083a2, rgb(0, 0, 0))`,
                          ],
                          type: `multi`,
                        },
                        height: `100%`,
                        id: `PVUPlqfCO`,
                        layoutId: `PVUPlqfCO`,
                        length: 40,
                        lineWidth: 2,
                        smoothing: 38,
                        width: `100%`,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-UcELx.framer-c7ey7m, .framer-UcELx .framer-c7ey7m { display: block; }`,
          `.framer-UcELx.framer-1wldf4r { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
          `.framer-UcELx .framer-1qd3vij-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-UcELx`
      )),
      (Xi.displayName = `Trial Cursor`),
      (Xi.defaultProps = { height: 2, width: 2 }),
      w(Xi, [{ explicitInter: !0, fonts: [] }, ...Hi], { supportsExplicitInterCodegen: !0 }));
  });
export { Zi as n, Xi as t };
//# sourceMappingURL=AKS68MnlV.C11wAe7P.mjs.map
