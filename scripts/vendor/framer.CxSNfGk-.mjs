import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  T as p,
  _ as m,
  a as h,
  b as g,
  c as _,
  d as v,
  f as y,
  g as b,
  h as x,
  i as S,
  j as C,
  k as w,
  l as T,
  m as E,
  o as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as M,
  z as N,
} from "./react.DwDJOhmk.mjs";
import {
  $ as ee,
  A as P,
  B as te,
  C as ne,
  D as F,
  E as I,
  F as re,
  G as ie,
  H as ae,
  I as oe,
  J as se,
  K as ce,
  L as le,
  M as ue,
  N as de,
  O as fe,
  P as pe,
  Q as me,
  R as L,
  S as he,
  U as ge,
  V as _e,
  W as ve,
  X as ye,
  Y as R,
  Z as be,
  _ as xe,
  a as Se,
  at as Ce,
  b as we,
  c as Te,
  ct as Ee,
  d as De,
  dt as Oe,
  et as ke,
  f as Ae,
  ft as je,
  g as Me,
  h as Ne,
  i as Pe,
  it as Fe,
  j as Ie,
  k as Le,
  l as Re,
  lt as ze,
  m as Be,
  nt as Ve,
  o as He,
  ot as Ue,
  p as We,
  q as Ge,
  rt as Ke,
  s as qe,
  st as Je,
  tt as Ye,
  u as Xe,
  ut as Ze,
  v as Qe,
  w as $e,
  x as et,
  y as tt,
  z as nt,
} from "./motion.C18vkCAc.mjs";
function rt(e) {
  return typeof e == `function`;
}
function it(e) {
  return typeof e == `boolean`;
}
function z(e) {
  return typeof e == `string`;
}
function B(e) {
  return Number.isFinite(e);
}
function at(e) {
  return Array.isArray(e);
}
function V(e) {
  return typeof e == `object` && !!e && !at(e);
}
function ot(e) {
  for (let t in e) return !1;
  return !0;
}
function st(e) {
  return e === void 0;
}
function ct(e) {
  return e === null;
}
function lt(e) {
  return e == null;
}
function ut(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function dt(e) {
  return V(e) && rt(e.return);
}
function ft(e) {
  return V(e) && rt(e.then);
}
function pt(e) {
  return e instanceof Promise;
}
function mt(e) {
  return `url('${ht(e)}')`;
}
function ht(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function gt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function _t(e, t, n) {
  if (k_.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (k_.set(e, t), t))
    .catch((t) => {
      throw (k_.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(x_), k_.set(e, r));
}
function vt(e, t) {
  S_ && (A_.set(e, t), j_.has(e) && _t(e, t, `registered loader ${e}`));
}
function yt() {
  if (!S_) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(M_),
      i = r ? e.slice(M_.length) : e;
    if (!i) continue;
    j_.add(i);
    let a = A_.get(i);
    a ? _t(i, a, `registered loader ${i}`) : r && _t(i, () => import(n), n);
  }
}
function bt(e) {
  return typeof e == `object` && !!e && !y(e) && P_ in e;
}
function xt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function St(e, t = `default`, n) {
  n && vt(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !k_.has(n)) return;
      let e = k_.get(n);
      pt(e) ? s(() => e) : (i = xt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = xt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = b(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && N_ !== void 0 && N_.add(n), !i)) throw s(e);
      return _(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function Ct(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function wt(e) {
  return e === null || !(I_ in e) ? !1 : typeof e.equals == `function`;
}
function Tt(e, t) {
  return e === t || (e !== e && t !== t);
}
function Et(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Tt(e[r], t[r])) return !1;
  return !0;
}
function Dt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Nt(e[r], t[r], !0)) return !1;
  return !0;
}
function Ot(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Tt(r, t.get(n))) return !1;
  return !0;
}
function kt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Nt(r, t.get(n), !0)) return !1;
  return !0;
}
function At(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function jt(e, t) {
  let n = F_(e);
  if (n.length !== F_(t).length) return !1;
  for (let r of n)
    if (!Ct(t, r) || (!(r === `_owner` && Ct(e, `$$typeof`) && e.$$typeof) && !Tt(e[r], t[r])))
      return !1;
  return !0;
}
function Mt(e, t) {
  let n = F_(e);
  if (n.length !== F_(t).length) return !1;
  for (let r of n)
    if (!Ct(t, r) || (!(r === `_owner` && Ct(e, `$$typeof`) && e.$$typeof) && !Nt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Nt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? Dt(e, t) : Et(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? kt(e, t) : Ot(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return At(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? wt(e) && wt(t)
        ? e.equals(t)
        : n
          ? Mt(e, t)
          : jt(e, t)
      : !1;
}
function Pt(e, t, n = !0) {
  try {
    return Nt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Ft(e) {
  return M.useCallback((t) => e[t], [e]);
}
function It({ api: e, children: t }) {
  return _(L_.Provider, { value: e, children: t });
}
function Lt() {
  return M.useContext(L_);
}
function Rt({ routes: e, children: t }) {
  let n = Ft(e),
    r = C(() => ({ getRoute: n }), [n]);
  return _(L_.Provider, { value: r, children: t });
}
function zt() {
  let e = Lt(),
    n = t(R_),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = r ? e.getRoute?.(r) : void 0;
  return C(() => {
    if (!(!r || !a)) return { ...a, id: r, pathVariables: i };
  }, [r, i, a]);
}
function Bt() {
  let e = zt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Vt(e) {
  let t = zt(),
    n = M.useRef(t);
  Pt(n.current, t) || !t || ((n.current = t), e(t));
}
function Ht(e) {
  let t = Lt();
  if (e) return t.getRoute?.(e);
}
function Ut(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Wt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Gt(e, t) {
  let n = zt(),
    r = Ht(t) ?? n;
  return M.useMemo(() => (r ? Ut(r, e) : e), [e, r]);
}
function H(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function U(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function Kt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function qt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === $_
  );
}
function Jt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Yt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Xt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Yt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Zt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Qt(e) {
  return ev.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function $t(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Z_);
}
function en(e) {
  return !(!Number.isInteger(e) || e < 0 || e > X_);
}
function tn(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return $t(+e);
}
function nn(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !tn(t[n]); n--);
  return ((t.length = n + 1), t);
}
function rn(e) {
  return new Uint8Array(e).toBase64();
}
function an(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function on(e) {
  return Buffer.from(e).toString(`base64`);
}
function sn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function cn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function ln(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function un(e, t) {
  return dn(JSON.parse(e), t);
}
function dn(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === U_) return;
    if (e === G_) return NaN;
    if (e === K_) return 1 / 0;
    if (e === q_) return -1 / 0;
    if (e === J_) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = iv(t);
            r[e] = n;
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === Y_) {
        let t = s[1];
        if (!en(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[Z_] = void 0), delete n[Z_]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!$t(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== W_ && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function fn(e, t) {
  let n = pn(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function pn(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return U_;
    if (Number.isNaN(n)) return G_;
    if (n === 1 / 0) return K_;
    if (n === -1 / 0) return q_;
    if (n === 0 && 1 / n < 0) return J_;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new Q_(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new Q_(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (Kt(n)) u = mn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new Q_(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = Jt(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${Xt(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${Xt(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${Xt(r)},"${i}"]` : `["RegExp",${Xt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += W_;
            else {
              let t = nn(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + Y_ + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += W_));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${Kt(e) ? mn(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${rv(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${Xt(n.toString())}]`;
          break;
        default:
          if (!qt(n)) throw new Q_(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Zt(n).length > 0) throw new Q_(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new Q_(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(Qt(e)), (u += `,${Xt(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new Q_(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(Qt(r)), (u += `${Xt(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function mn(e) {
  let t = typeof e;
  return t === `string`
    ? Xt(e)
    : e === void 0
      ? U_.toString()
      : e === 0 && 1 / e < 0
        ? J_.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function hn(e, t, n = `lazy`) {
  switch ((av.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function gn(e) {
  return z(e) && (e === `` || sv.test(e));
}
function _n() {
  return { [cv.QueryCache]: new Map(), [cv.CollectionUtilsCache]: new Map() };
}
function vn() {
  if (!S_) return;
  if (lv !== void 0) return lv;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      lv = un(e.text) ?? _n();
    } catch (e) {
      ((lv = _n()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      T_(() => {
        (e?.remove(), (e = null));
      }),
      lv
    );
  }
}
function yn(e, t) {
  let n = vn();
  return n ? n[e].has(t) : !1;
}
function bn(e, t) {
  let n = vn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function xn(e) {
  return e?.id ?? B_;
}
function Sn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function Cn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (pv.has(n)) return pv.get(n);
    let r = new hv(n, t);
    return (pv.set(n, r), r);
  };
}
function wn({ children: e, collectionUtils: t }) {
  let n = C(() => ({ get: Cn(t) }), [t]);
  return _(mv.Provider, { value: n, children: e });
}
function Tn() {
  return t(mv);
}
function En(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Dn() {
  return d === void 0 ? void 0 : d;
}
function On() {
  let e = Dn();
  return e ? gv.test(e.platform) : !1;
}
function kn() {
  let e = Dn();
  return e
    ? _v.test(e.platform)
      ? !0
      : vv.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function An() {
  return On() || kn();
}
function jn() {
  let e = Dn();
  return e ? yv.test(e.userAgent) : !1;
}
function Mn() {
  let e = Dn();
  return e ? bv.test(e.userAgent) && xv.test(e.vendor) && !jn() : !1;
}
function Nn() {
  let e = Dn();
  return e ? Sv.test(e.userAgent) && Cv.test(e.vendor) : !1;
}
function Pn() {
  let e = Dn();
  return e ? wv.test(e.userAgent) : !1;
}
function Fn() {
  return typeof document == `object`;
}
function In() {
  let e = Dn();
  if (!e) return -1;
  let t = Tv.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Ln() {
  let e = Dn();
  return e ? Ev.test(e.userAgent) : !1;
}
function Rn() {
  return !1;
}
function zn() {
  let e = Dn();
  return e && Dv.test(e.userAgent) ? `tablet` : e && Ov.test(e.userAgent) ? `phone` : `desktop`;
}
function Bn() {
  return zn() === `desktop`;
}
function Vn(e) {
  return An() ? e.metaKey : e.ctrlKey;
}
function Hn() {}
function Un(e) {
  return typeof e == `function` ? e() : e;
}
function Wn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Gn(e, t) {
  let n = e?.priority,
    r = Wn();
  return n === `background`
    ? (t?.() ?? En(1))
    : r?.yield
      ? r.yield(e).catch(Hn)
      : r?.postTask
        ? r.postTask(Hn, e).catch(Hn)
        : t
          ? t()
          : n === `user-blocking`
            ? Mv
            : En(0);
}
function Kn(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    Fn() && (document.addEventListener(`visibilitychange`, s), N.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, Nv),
        e(() => {
          Gn(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return Fn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Gn(a, t);
    return i ? u(o) : o;
  }
  function f(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function p(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? kv : Av),
        s = Fn() && document.hidden ? jv : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return f(a, e, o);
  }
  function m(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !Fn() && !t ? (n ? void 0 : Mv) : n ? p(i, r) : d(i);
  }
  return m;
}
function qn() {
  let e = Tn(),
    { getRoute: t } = Lt();
  return s(
    (n, r, i = !0, a = !0) => {
      if (!n || !t) return;
      let o = t(n),
        { pathVariables: s, locale: c } = r;
      return Yn(o, { routeId: n, pathVariables: s, locale: c, collectionUtils: e }, i, a);
    },
    [t, e]
  );
}
function Jn(e, t = !0) {
  let n = qn();
  c(() => {
    if (!(!t || !Iv)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Yn(e, t, n = !0, r = !0) {
  if (!Iv || !e) return;
  let i = e.page;
  if (!(!i || !bt(i))) {
    n && (await Fv());
    try {
      let e = await i.preload();
      r && t && e && (await Xn(e, t));
    } catch {}
  }
}
async function Xn(e, t) {
  let n = e.loader;
  if (!n?.load) return;
  let r = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    collectionUtils: t.collectionUtils,
  };
  try {
    await n.load({}, r);
  } catch {}
}
function Zn(e, t) {
  return e.replace(Bv, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Qn(e, t = !1) {
  let n = ``;
  if (N !== void 0)
    if (t) n = N.location.search;
    else {
      let e = N.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? N.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? $n(n, e) : e;
}
function $n(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Vv && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function er(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Bv)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !z(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = pt(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = pt(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = pt(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function tr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function nr({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await er(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = tr(u.path, t.slug)),
    o && u.path && (u.path = Qn(u.path, !0)),
    u
  );
}
function rr() {
  if (Hv) return;
  Hv = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (N.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((N.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), hn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function ir({ children: e, value: t }) {
  return _(Uv.Provider, { value: t, children: e });
}
function ar() {
  return M.useContext(Uv);
}
function or(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function sr(e) {
  let t = Wv,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Gv;) ((n = e.next(t)), r.push(n.value), (t += Wv));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Wv }
  );
}
function cr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function lr(e) {
  let { innerWidth: t, innerHeight: n } = N,
    [r, i] = cr(e.x),
    [a, o] = cr(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function ur(e) {
  let [t, n] = cr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function dr(e) {
  let { x: t, y: n } = lr(e);
  return Math.hypot(Math.max(t, N.innerWidth - t), Math.max(n, N.innerHeight - n));
}
function fr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function pr(e) {
  return e ? Jv[e] : void 0;
}
function mr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (hr(t)) {
    let { easing: e, duration: n } = sr(
      de({ keyframes: [0, 1], ...gr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = pr(n?.mask?.type),
    o = fr(n, `start`, e, a),
    s = fr({ ...Yv, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function hr(e) {
  return e.type === `spring`;
}
function gr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function _r({ exit: e = Zv, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Xv;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += mr(`exit`, e)),
    (r += mr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function vr() {
  T_(() => {
    Qe.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Xv);
      e && document.head.removeChild(e);
    });
  });
}
function yr() {
  return !!document.startViewTransition;
}
function br(e) {
  return new Promise((t) => {
    Qe.render(() => {
      (performance.mark(`framer-vt-style`), _r(e), t());
    });
  });
}
async function xr(e, t, n) {
  if (!yr()) {
    e();
    return;
  }
  if ((await br(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Qv),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), vr());
      })
      .catch(Qv),
    r
  );
}
function Sr() {
  let e = ar(),
    t = l(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    s(
      (n, r, i, a) => {
        let o = or(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return xr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Cr(e, t) {
  T_(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function wr(e, t, n, r = f) {
  r(() => {
    let t = async (e) => (await Fv({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Tr(e) {
  let t = l(new Set());
  return (
    wr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    s(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function Er(e) {
  return V(e) && `routeId` in e;
}
function Dr(e = N.history.state) {
  return Er(e) ? e : void 0;
}
function Or(e) {
  return e?.entryId;
}
function kr(e) {
  ty = e;
}
function Ar() {
  return ty;
}
function jr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Mr(e, t) {
  return Nr(e, Or(e) ?? Or(t));
}
function Nr(e, t = jr()) {
  return { ...e, entryId: t };
}
function Pr(e, t, n = !1) {
  (performance.mark(`framer-history-replace`), kr(Mr(e, Dr())), t && Cr(t, N.location.href));
  let r;
  r = Rv().privateRouterReplaceState
    ? !t || t === N.location.href
      ? N.History.prototype.replaceState
      : N.history.replaceState
    : n
      ? N.History.prototype.replaceState
      : N.history.replaceState;
  try {
    r.call(N.history, ty, ``, t);
  } catch {}
}
function Fr(e) {
  (performance.mark(`framer-history-replace`),
    kr(Nr(e)),
    History.prototype.replaceState.call(N.history, ty, ``, void 0));
}
function Ir(e, t) {
  (performance.mark(`framer-history-push`), kr(Nr(e)), Cr(t, N.location.href), rr());
  try {
    N.history.pushState(ty, ``, t);
  } catch {}
}
function Lr({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  f(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = N.location.hash ? N.location.hash.slice(1) : void 0;
    Pr({ ...Dr(), routeId: t, hash: i, pathVariables: n, localeId: r }, void 0, !0);
  }, []);
}
function Rr(e, t, n) {
  let r = Sr(),
    i = Tr(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    u = o ? `manual` : `after-transition`,
    d = l(void 0),
    f = s(() => {
      (d.current?.resolve(), (d.current = void 0));
    }, []),
    p = s(
      async ({ state: e }) => {
        if (!Er(e)) return;
        let o = i({ popstate: !0 }),
          s = Wt();
        (o.promise.finally(s), Or(Ar()) !== (Or(e) ?? Or(Dr())) && a(), kr(e));
        let { routeId: c, hash: l, pathVariables: d, localeId: p } = e,
          m = z(l) ? l : N.location.hash ? N.location.hash.slice(1) : void 0,
          h = !1,
          g = () => {
            h ||=
              (n(
                c,
                z(p) ? p : void 0,
                m,
                N.location.pathname + N.location.search + N.location.hash,
                V(d) ? d : void 0,
                !0,
                o,
                !1
              ),
              !0);
          },
          _ = u === `after-transition`;
        (await Promise.resolve(r(t.current, c, g))
          .then((e) => e?.updateCallbackDone)
          .catch(g)
          .finally(() => {
            _ || f();
          }),
          await o.promise,
          _ && f(),
          await N.navigation?.transition?.finished.catch(x_),
          ey(),
          Cr(N.location.href));
      },
      [t, i, a, f, n, r, u]
    ),
    m = s(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Er(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                d.current = { resolve: e, reject: t };
              }),
                (d.current = void 0));
            },
            scroll: u,
          });
      },
      [u]
    );
  c(
    () => (
      N.addEventListener(`popstate`, p),
      ny && N.navigation.addEventListener(`navigate`, m),
      () => {
        (N.removeEventListener(`popstate`, p),
          ny && N.navigation.removeEventListener(`navigate`, m));
      }
    ),
    [p, m]
  );
}
async function zr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = tr(Zn(e.path, t), n.slug);
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((N.location.href = N.location.origin + r), !0)
    : !1;
}
function Br() {
  let e = Tn();
  return s((t) => Vr({ ...t, collectionUtils: e }), [e]);
}
async function Vr(e) {
  let t = await nr(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!z(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await zr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function Hr(e) {
  let t = l(Promise.resolve()),
    n = l(),
    r = s(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return s(
    (e, i, a) => {
      if (!ny) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = i),
        N.navigation.addEventListener(`navigate`, r),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), N.navigation.removeEventListener(`navigate`, r));
        }));
    },
    [r]
  );
}
function Ur(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Wr(e) {
  return Ur(e.trim().toLowerCase().replace(ry, `-`));
}
function Gr({ children: e, value: t }) {
  return _(ay.Provider, { value: t, children: e });
}
function Kr() {
  return t(ay);
}
function qr(e, t) {
  let n = i(() => ({ inputs: t, result: e() }))[0],
    r = l(!0),
    a = l(n),
    o =
      r.current || (t && a.current.inputs && Pt(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((r.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function Jr(e, t) {
  return qr(() => e, t);
}
function Yr() {
  return M.useContext(ly);
}
function Xr() {
  return Yr().activeLocale?.code ?? `en-US`;
}
function Zr() {
  return M.useContext(uy);
}
function Qr() {
  return N.location.search;
}
function $r() {
  return ``;
}
function ei(e) {
  return (
    dy.add(e),
    N.addEventListener(`popstate`, e),
    () => {
      (dy.delete(e), N.removeEventListener(`popstate`, e));
    }
  );
}
function ti() {
  for (let e of dy) e();
}
function ni({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let a = Kr() === `preview`,
    [o, c] = i(``),
    u = l(t);
  oy(() => {
    u.current = t;
  }, [t]);
  let d = g(ei, Qr, $r),
    f = r(d),
    p = t !== r(t),
    h = a ? o : p ? d : f,
    v = s(
      async (e) => {
        if (a) {
          m(() => {
            c((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let r = n(),
          i = t;
        if ((await Fv({ continueAfter: `paint` }), r || n() || u.current !== i)) return;
        let o = Dr();
        if (!o) return;
        let s = new URL(N.location.href),
          l = e(s.searchParams).toString();
        s.search = l;
        let d = o.queryParamBackAnchorSearch,
          f = N.location.search.slice(1),
          p = d === void 0 && l !== f,
          h = d !== void 0 && l === d,
          g = { ...o, queryParamBackAnchorSearch: h ? void 0 : (d ?? (p ? f : void 0)) },
          _ = s.toString();
        (p || h ? Ir(g, _) : Pr(g, _), ti());
      },
      [n, a, t]
    ),
    y = qr(() => ({ urlSearchParams: new URLSearchParams(h), replaceSearchParams: v }), [h, v]);
  return _(fy.Provider, { value: y, children: e });
}
function ri(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = ii(e),
    [r, i] = ii(t),
    a = ai(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function ii(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function ai(e, t) {
  if (e === t || ((e = `/` + oi(e)), (t = `/` + oi(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = hy(e, 1 + s);
    if (n !== hy(t, 1 + s)) break;
    n === my && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (hy(t, 1 + s) === my) return _y(t, 1 + s + 1);
      if (s === 0) return _y(t, 1 + s);
    } else r > a && (hy(e, 1 + s) === my ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || hy(e, s) === my) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${_y(t, 1 + o)}`;
}
function oi(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = hy(e, o);
    else if (by(a)) break;
    else a = my;
    if (by(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || hy(t, t.length - 1) !== py || hy(t, t.length - 2) !== py) {
            if (t.length > 2) {
              let e = gy(t, yy);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = _y(t, 0, e)), (n = t.length - 1 - gy(t, yy))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          vy && ((t += t.length > 0 ? `${yy}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${yy}${_y(e, r + 1, o)}`) : (t = _y(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === py && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function si(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || N.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function ci(e, t, n) {
  let r = Ut(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Bv, (e, t) => i[t] ?? e);
}
function li(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: f,
  }
) {
  let p = ci(i, e, o);
  if (l) return p ?? ``;
  let m = t ?? `/`;
  (n && d && (m = n[d] ?? m), r && (m = m.replace(Bv, (e, t) => String(r[t] || e))));
  let h = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(Bv, (e, t) => String(a[t] || e)));
  let g = !!(m === h && p),
    _ = !g && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && m !== h;
  if (s)
    if (xy.has(m) && N !== void 0) {
      let e = si(u);
      h = ri(N.location.pathname, e + h);
    } else h = ri(m, h);
  else h = tr(h, f);
  let v = g || _;
  return ((c || v) && (h = Qn(h, v)), p && (h = `${h}#${p}`), h);
}
function ui() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Sy] = 1), e);
}
function di() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Sy] = 1), e);
}
function fi(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function pi(e) {
  return Sy in e && e[Sy] === 1;
}
function mi(e) {
  return Cy in e.nativeEvent && e.nativeEvent[Cy] === 1;
}
function hi(e) {
  let t = l(!1),
    n = l(null),
    r = g(E_, O_, wy);
  return (
    c(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = fi(i),
        o = i[a];
      if (o === e) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(di()));
        return;
      }
      if (a === `checked`) {
        let e = di();
        ((e[Cy] = 1), i.dispatchEvent(e), i.dispatchEvent(di()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(ui());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = ui();
      ((c[Cy] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(ui()));
        }));
    }, [r]),
    n
  );
}
function gi() {
  if (!Ty) return;
  ((Dy = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Ty.forEach((n) => t.addEventListener(n, Ey, e));
}
function _i() {
  return (
    c(() => {
      if (!Dy || !Ty) return;
      let e = { capture: !0 },
        t = document.body;
      (Ty.forEach((n) => t.removeEventListener(n, Ey, e)),
        (Ty = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function vi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function yi(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function bi() {
  ((qy = new Ky()), qy.render.markStart());
}
function xi() {
  (n(() => {
    qy?.useInsertionEffects.markRouterStart();
  }, []),
    f(() => {
      qy?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      qy?.useEffects.markRouterStart();
    }, []));
}
function Si() {
  (n(() => {
    (qy?.render.markEnd(), qy?.useInsertionEffects.markStart());
  }, []),
    f(() => {
      if ((qy?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Jy = !0;
        return;
      }
      Qe.read(() => {
        (qy?.browserRendering.requestAnimationFrame.markStart(),
          qy?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (qy?.useEffects.markStart(),
        qy?.browserRendering.hasStarted ||
          (qy?.mutationEffects.measure(), qy?.useEffects.markAreSynchronous()));
    }, []));
}
function Ci() {
  (n(() => {
    qy?.useInsertionEffects.markEnd();
  }, []),
    f(() => {
      (qy?.useLayoutEffects.markEnd(),
        !(Jy || document.visibilityState !== `visible`) &&
          Qe.read(() => {
            (qy?.browserRendering.requestAnimationFrame.markEnd(),
              Fv().then(() => {
                qy?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      qy?.useEffects.markEnd();
    }, []));
}
function wi() {
  return (Si(), null);
}
function Ti() {
  return (Ci(), null);
}
function Ei(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return M.isValidElement(e) ? M.cloneElement(e, n) : _(e, { ...n });
}
function Di() {
  return Qy;
}
function Oi(e) {
  if ($y?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      H(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: ji(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          H(t, `localizedPath must be defined`);
          let i = ji(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    $y = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: $y.pathRoutes,
    paths: $y.paths,
    pathRoutesLocalized: $y.pathRoutesLocalized,
    pathsLocalized: $y.pathsLocalized,
  };
}
function ki(e, t, n = !0, r = Di()) {
  return Ai(e, t, r, n);
}
function Ai(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Oi(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Mi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Mi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Mi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Mi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function ji(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Mi(e, t) {
  let n = [],
    r = Ni(t).replace(Bv, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Ni(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Pi() {
  if (`PerformanceServerTiming` in N) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Fi(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Ii(e, t) {
  for (let [n, r] of t) Fi(e, n, r);
}
function Li(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ri(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function zi(e, t) {
  if (N === void 0) return t;
  let n = t;
  if (t) {
    Ri(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Ii(e, Pi()), Li(e), n);
}
function Bi(e) {
  (c(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    n(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Vi(e, ...t) {
  eb.has(e) || (eb.add(e), console.warn(e, ...t));
}
function Hi(e, t, n) {
  Vi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Ui(e) {
  return (
    typeof e == `object` &&
    !!e &&
    rb in e &&
    e[rb] instanceof Function &&
    ib in e &&
    e[ib] instanceof Function
  );
}
function Wi(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = nb(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Gi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Ki(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function qi(e) {
  return Math.round(e * 2) / 2;
}
function Ji(e, t) {
  return { x: e, y: t };
}
function Yi(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function Xi(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Zi(e) {
  let t = Qi(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Qi(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function $i(e, t, n) {
  return (
    (sb.rgb_r = e / 255),
    (sb.rgb_g = t / 255),
    (sb.rgb_b = n / 255),
    sb.rgbToHsluv(),
    { h: sb.hsluv_h, s: sb.hsluv_s, l: sb.hsluv_l }
  );
}
function ea(e, t, n, r = 1) {
  return (
    (sb.hsluv_h = e),
    (sb.hsluv_s = t),
    (sb.hsluv_l = n),
    sb.hsluvToRgb(),
    { r: sb.rgb_r * 255, g: sb.rgb_g * 255, b: sb.rgb_b * 255, a: r }
  );
}
function ta(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function na(e, t, n) {
  return {
    r: Xi(e) ? la(e, 255) * 255 : 0,
    g: Xi(t) ? la(t, 255) * 255 : 0,
    b: Xi(n) ? la(n, 255) * 255 : 0,
  };
}
function ra(e, t, n, r) {
  let i = [
    fa(Math.round(e).toString(16)),
    fa(Math.round(t).toString(16)),
    fa(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ia(e, t, n) {
  let r,
    i,
    a = la(e, 255),
    o = la(t, 255),
    s = la(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function aa(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function oa(e, t, n) {
  let r, i, a;
  if (((e = la(e, 360)), (t = la(t * 100, 100)), (n = la(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = aa(s, o, e + 1 / 3)), (i = aa(s, o, e)), (a = aa(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function sa(e, t, n) {
  ((e = la(e, 255)), (t = la(t, 255)), (n = la(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function ca(e, t, n) {
  ((e = la(e, 360) * 6), (t = la(t * 100, 100)), (n = la(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function la(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    ua(e) && (e = `100%`);
    let t = da(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function ua(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function da(e) {
  return typeof e == `string` && e.includes(`%`);
}
function fa(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function pa(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = ob[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = cb.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = cb.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = cb.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Zi(r[2] ?? ``), l: Zi(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = cb.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Zi(r[2] ?? ``),
              l: Zi(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = cb.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Zi(r[2] ?? ``), v: Zi(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = cb.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Zi(r[2] ?? ``),
                  v: Zi(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = cb.hex8.exec(t))
                ? {
                    r: ma(r[1] ?? ``),
                    g: ma(r[2] ?? ``),
                    b: ma(r[3] ?? ``),
                    a: ha(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = cb.hex6.exec(t))
                  ? {
                      r: ma(r[1] ?? ``),
                      g: ma(r[2] ?? ``),
                      b: ma(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = cb.hex4.exec(t))
                    ? {
                        r: ma(`${r[1]}${r[1]}`),
                        g: ma(`${r[2]}${r[2]}`),
                        b: ma(`${r[3]}${r[3]}`),
                        a: ha(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = cb.hex3.exec(t))
                      ? {
                          r: ma(`${r[1]}${r[1]}`),
                          g: ma(`${r[2]}${r[2]}`),
                          b: ma(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function ma(e) {
  return parseInt(e, 16);
}
function ha(e) {
  return ma(e) / 255;
}
function ga(e) {
  let t = lb.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function _a(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function va({ r: e, g: t, b: n, a: r }) {
  return { r: _a(e), g: _a(t), b: _a(n), a: r };
}
function ya(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function ba({ r: e, g: t, b: n, a: r }) {
  return { r: ya(e), g: ya(t), b: ya(n), a: r };
}
function xa({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Sa(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Ca({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Sa(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function wa(e) {
  return pb(fb(e));
}
function Ta(e) {
  return db(ub(e));
}
function Ea(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = ka({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Da(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? ka(e)
              : Aa(e)),
    i
  );
}
function Da(e) {
  let t = pa(e);
  if (t) return t.format === `hsl` ? Aa(t) : t.format === `hsv` ? Oa(t) : ka(t);
}
function Oa(e) {
  let t = ca(e.h, e.s, e.v);
  return { ...ia(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ja(e.a) };
}
function ka(e) {
  let t = na(e.r, e.g, e.b);
  return { ...ia(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ja(e.a) };
}
function Aa(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Xi(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Xi(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Qi(e.s)),
    (r = Xi(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Qi(e.l)),
    (i = oa(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function ja(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ma() {
  return av.location.origin === `https://screenshot.framer.invalid`;
}
function Na({ children: e }) {
  if (t(Db).top) return _(O, { children: e });
  let n = l({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = l({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = l(new Set()).current,
    a = l({
      getLayoutId: s(({ id: e, name: t, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            H(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !i.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !i.has(u) && (!t || p))
              return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
          }
        let u = n.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
        let f = a?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = Pa(p, (n.current.count[o][p] ?? -1) + 1, i);
        if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
          let e = a[a.length - 1];
          if ((e && (r.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: s(() => {
        ((n.current = {
          byId: { ...n.current.byId, ...r.current.byId },
          byLastId: { ...n.current.byLastId, ...r.current.byLastId },
          byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
          byName: { ...n.current.byName, ...r.current.byName },
          byLastName: { ...n.current.byLastName, ...r.current.byLastName },
          byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
          count: { ...n.current.count, byName: {} },
        }),
          (r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return _(Db.Provider, { value: a, children: e });
}
function Pa(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Fa({ enabled: e = !0, ...n }) {
  let r = t(Db),
    i = C(() => ({ ...r, enabled: e }), [e]);
  return _(Db.Provider, { ...n, value: i });
}
function Ia(e) {
  let t = l(null);
  return (t.current === null && (t.current = e()), t.current);
}
function La(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ra(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return T(`div`, {
    style: kb,
    children: [
      _(`div`, { className: `text`, style: jb, children: r }),
      i && _(`div`, { className: `text`, style: Mb, children: i }),
    ],
  });
}
function Ra(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function W(e) {
  return Number.isFinite(e);
}
function za(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Ba(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Va(e) {
  return e != null && typeof e != `boolean` && !za(e);
}
function Ha(e) {
  return (Math.PI / 180) * e;
}
function Ua(e) {
  return st(e) ? !1 : e === 2 || e === 5;
}
function Wa(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Ga(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return Ka(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function Ka(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      U(e, `unknown constraint key`);
  }
}
function qa(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Ga(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Ga(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Ja(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Ga(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Ga(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Ya(e, t, n, r, i) {
  let a = Ja(W(e) ? e : Lb, n, r, i),
    o = qa(W(t) ? t : Rb, n, r, i);
  return (
    W(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (W(n.left) && W(n.right)
        ? (o = a / n.aspectRatio)
        : (W(n.top) && W(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Xa(e, t) {
  return !W(e) || !W(t) ? null : e + t;
}
function Za(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Qa(e) {
  return !e._constraints || Za(e) ? !1 : e._constraints.enabled;
}
function $a(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    W(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    W(n) && W(r) ? { width: n, height: r } : null
  );
}
function eo(e) {
  let t = $a(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return W(n) && W(r) ? { x: n, y: r, ...t } : null;
}
function to(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Qa(e) || r) return eo(e);
  let i = no(e),
    a = ro(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Ib.toRect(i, o, null, n, null);
}
function no(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Fb.quickfix({
      left: W(t),
      right: W(n),
      top: W(r),
      bottom: W(i),
      widthType: Wa(c),
      heightType: Wa(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function ro(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function io() {
  return M.useContext(zb).parentSize;
}
function ao(e) {
  return typeof e == `object`;
}
function oo(e) {
  return ao(e) ? e.width : e;
}
function so(e) {
  return ao(e) ? e.height : e;
}
function co(e, t) {
  return _(Bb, { parentSize: t, children: e });
}
function lo(e) {
  return to(e, io(), !0);
}
function uo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function fo(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function po(e, t, n = Ub) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Wb) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Wb = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Wb;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function mo() {
  return Ma() ? J.preview : J.current();
}
function ho(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Z.variable(e) : e === `` ? `""` : e;
}
function go(e) {
  return e !== sx && e !== cx;
}
function _o(e) {
  for (let t in e) if (go(t) && e?.[t] === !0) return !0;
  return !1;
}
function vo(e, t, n, r, i) {
  let a = M.useRef(null),
    o = M.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = M.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !_o(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = M.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (_o(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return M.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function yo(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return bo(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return xo(r);
    case `lower-roman`:
    case `upper-roman`:
      return Co(r);
    default:
      return bo(r);
  }
}
function bo(e) {
  return String(e).length;
}
function xo(e) {
  let t = 1;
  for (; So(t) < e;) t++;
  return t;
}
function So(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function Co(e) {
  let t = 0;
  for (let n of gx) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function wo(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function To(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Eo() {
  return J.current() === J.preview ? Fx.value : Px.value;
}
function Do(e) {
  return Jb(e, Eo, `framer-lib-combinedCSSRules`);
}
function Oo(e) {
  return V(e) || rt(e);
}
function ko(e) {
  return !!e && Ix in e && e[Ix] === !0;
}
function Ao(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return it(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return st(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return at(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return at(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = V(e.defaultValue) ? e.defaultValue : {};
        return (V(e.controls) && jo(t, e.controls), t);
      }
      case `array`:
        return at(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function jo(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!st(i) || ko(r)) continue;
    let a = Ao(r);
    st(a) || (e[n] = a);
  }
}
function Mo(e) {
  if (V(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function No(e, t) {
  Oo(e) && jo(Mo(e), t);
}
function Po(e, t) {
  (Object.assign(e, { propertyControls: t }), No(e, t));
}
function Fo(e) {
  return e.propertyControls;
}
function Io() {
  let e = J.current();
  return e === J.canvas || e === J.export;
}
function Lo() {
  let [e] = i(() => Io());
  return e;
}
function Ro(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function zo(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of qx) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Bo(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Vo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Jx) continue;
    let n = Bo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Bo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Ho(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Kx) {
    let n = Bo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Uo(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Ho(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Vo(n, t, zo(t.pixelWidth, t.pixelHeight)) };
}
function Wo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: mt(Wx.imagePlaceholderSvg),
  };
}
function Go(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Ko(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function qo(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...Gx,
    objectPosition: Ko(e.positionX, e.positionY),
    objectFit: Go(e.fit),
  };
}
function Jo(e) {
  let t = M.useRef(e ? `auto` : `async`),
    n = s((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = s(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = s(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Yo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = Wx.useImageSource(e, t, n),
    s = qo(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Jo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Uo(e.nodeFixedSize, e, o);
  return _(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Xo({ image: e, containerSize: t, nodeId: n }) {
  let r = M.useRef(null),
    i = Wx.useImageElement(e, t, n),
    a = qo(e);
  return (
    M.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    _(`div`, { ref: r, style: { display: `contents`, ...Gx } })
  );
}
function Zo({ nodeId: e, image: t, containerSize: n }) {
  let r = M.useRef(null),
    i = Wx.useImageSource(t, n, e);
  return (
    M.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = qo(t);
      Wx.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    _(`div`, { ref: r, style: { display: `contents`, ...Gx } })
  );
}
function Qo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (z(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = B(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = qi(e * (t.pixelWidth / 2)),
        s = Wx.useImageSource(t, n);
      ((r = {
        ...Yx,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Ko(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        J.current() === J.canvas
          ? Wx.canRenderOptimizedCanvasImage(Wx.useImageSource(t))
            ? _(Zo, { image: t, ...n })
            : _(Xo, { image: t, ...n })
          : _(Yo, { image: t, avoidAsyncDecoding: J.current() === J.export, ...n });
  let o = a ? Yx : (r ?? { ...Yx, ...Wo() });
  return i
    ? _(I.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : _(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function $o(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function es(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Gx,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), _(I.div, { style: n }))
    : ($o(e, n, !1), _(I.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function ts(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function ns(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Zx.isImageObject(t)) return;
  let r = null;
  if (((r = z(n) ? { alt: ``, src: n } : nb.get(t, null)), Zx.isImageObject(r))) return ts(r, e);
}
function rs(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function is(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? I[e] : I.div;
}
function as(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function os(e) {
  let t = {};
  return (!e || !Qx || J.current() !== J.canvas || as(t, e), t);
}
function ss(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function cs(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = M.Children.map(t, (e) =>
        M.isValidElement(e) ? M.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function ls(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function us(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = t(Db);
  return C(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function ds() {
  let [e, t] = M.useState(0);
  return M.useCallback(() => t((e) => e + 1), []);
}
function fs(e) {
  let t = ds();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        tS?.observeElementWithCallback(e.current, t),
        () => {
          tS?.unobserve(n);
        }
      );
  }, [e, t]);
}
function ps(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(nS)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(ms)
    .map(hs);
}
function ms(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function hs(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(ms);
  return t ? hs(t) : e;
}
function gs(e, n, r = () => [], i = {}) {
  let { id: a, visible: o, _needsMeasure: s } = e,
    { skipHook: c = !1 } = i,
    l = t($x),
    u = J.current() === J.canvas;
  oy(() => {
    !u ||
      l ||
      c ||
      (n.current && a && o && s && Wx.queueMeasureRequest(ss(a), n.current, r(n.current)));
  });
}
function _s(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && Wx.queueMeasureRequest(ss(t.id), t, ps(t));
}
function vs(e) {
  e.willChange = `transform`;
  let t = J.current() === J.canvas;
  aS && t && (e.translateZ = rS);
}
function ys(e) {
  ((e.willChange = `transform`), bs(e, !0));
}
function bs(e, t) {
  let n = J.current() === J.canvas;
  if (!aS || !n) return;
  let r = (z(e.transform) && e.transform) || ``;
  t ? r.includes(iS) || (e.transform = r + iS) : (e.transform = r.replace(iS, ``));
}
function xs(e, t, n, r = !0) {
  if (!e) return;
  let i = Lx(e.style),
    a = n || i[t],
    o = () => {
      Ss(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Ss(e) {
  return z(e) || B(e) || ct(e);
}
function Cs(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function ws(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Cs(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Ts(e, t) {
  let n = [e, t];
  return lS.test(e) ? e : ws(1e3, uS, n, () => cS.multiplyAlpha(e, t));
}
function Es(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Ts(e.value, t) }))
  );
}
function Ds(e, t) {
  let n = 0;
  return (
    Es(e, t).forEach((e) => {
      n ^= sS(e.value) ^ e.position;
    }),
    n
  );
}
function Os(e) {
  return e && dS.every((t) => t in e);
}
function ks(e) {
  return e && fS.every((t) => t in e);
}
function As({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || gb(t)
      ? (n.backgroundColor = t)
      : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e))
    : e &&
      ((e = nb.get(e, null)),
      typeof e == `string` || gb(e)
        ? (n.background = e)
        : mS.isLinearGradient(e)
          ? (n.background = mS.toCSS(e))
          : gS.isRadialGradient(e)
            ? (n.background = gS.toCSS(e))
            : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e)));
}
function G(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function js(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Ms(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Ns(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    ne(n)
      ? (t.cornerShape = oe(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    G(e, `size`, t),
    G(e, `width`, t),
    G(e, `height`, t),
    G(e, `minWidth`, t),
    G(e, `minHeight`, t),
    G(e, `top`, t),
    G(e, `right`, t),
    G(e, `bottom`, t),
    G(e, `left`, t),
    G(e, `position`, t),
    G(e, `overflow`, t),
    G(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && G(e, `border`, t),
    G(e, `borderRadius`, t),
    G(e, `radius`, t, `borderRadius`),
    G(e, `color`, t),
    G(e, `shadow`, t, `boxShadow`),
    G(e, `x`, t),
    G(e, `y`, t),
    G(e, `z`, t),
    G(e, `rotate`, t),
    G(e, `rotateX`, t),
    G(e, `rotateY`, t),
    G(e, `rotateZ`, t),
    G(e, `scale`, t),
    G(e, `scaleX`, t),
    G(e, `scaleY`, t),
    G(e, `skew`, t),
    G(e, `skewX`, t),
    G(e, `skewY`, t),
    G(e, `originX`, t),
    G(e, `originY`, t),
    G(e, `originZ`, t),
    As(e, t),
    t
  );
}
function Ps(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Lx(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Fs(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (vS.has(t)) return `pointer`;
}
function Is(e) {
  return Ls(e) ? !0 : e.style ? !!Ls(e.style) : !1;
}
function Ls(e) {
  return yS in e && (e[yS] === `scroll` || e[yS] === `auto`);
}
function Rs(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = Ie(e.minWidth),
    h = Ie(e.minHeight),
    g = Ie(e.maxWidth),
    _ = Ie(e.maxHeight);
  return {
    top: Ie(n),
    left: Ie(t),
    bottom: Ie(r),
    right: Ie(i),
    width: Ie(a),
    height: Ie(o),
    size: Ie(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function zs(e) {
  let n = t($x),
    { style: r, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = Rs(e),
    c = lo(s),
    l = {
      display: `block`,
      flex: r?.flex ?? `0 0 auto`,
      userSelect: J.current() === J.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !Ps(e) && !e.__fromCanvasComponent && !Is(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (l.pointerEvents = `none`);
  let f = M.Children.count(e.children) > 0 &&
      M.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = Ns(e);
  (o === void 0 && !a && (js(p) || (l.width = bS.width), Ms(p) || (l.height = bS.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let m = {};
  (Qa(s) &&
    c &&
    !uo(e) &&
    (m = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, i, p, m, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    oS.applyWillChange(e, l, !0));
  let h = l;
  l.transform || (h = { x: 0, y: 0, ...l });
  let g = Io();
  return (
    e.positionSticky
      ? (!g || Wx.isOnPageCanvas || n) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = Wx.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, c]
  );
}
function Bs(e) {
  let t = {};
  for (let n in e)
    ($e(n) || zx(n)) && !xS.has(n)
      ? (t[n] = Lx(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Lx(e)[n] != `boolean` && !e.transition && (t.transition = Lx(e)[n]));
  return t;
}
function Vs(e) {
  return `data-framer-name` in e;
}
function Hs(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Us(e) {
  return _(I.div, { layoutId: wS, style: DS, children: e.children });
}
function Ws(e, t) {
  rt(e) ? e(t) : Gs(e) && (e.current = t);
}
function Gs(e) {
  return V(e) && `current` in e;
}
function Ks() {
  let e = Ia(() => new Set()),
    t = Ia(() => new Map());
  return Ia(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function qs(e) {
  let t = l(null),
    n = Ks();
  return Ia(() => (Gs(e) ? n(e) : rt(e) ? n(t, e) : n(t)));
}
function Js(e, t, n) {
  let r = l(),
    i = l();
  (qr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Ys(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new OS({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Xs(e, n, r) {
  let i = Ia(() => `${r.rootMargin}`),
    a = t(kS),
    { enabled: o, root: s, rootMargin: c, threshold: l } = r;
  Js(
    e,
    (e) => {
      if (o && e !== null) return Ys(a, i, e, s, n, c, l);
    },
    [o, n, s, c, l]
  );
}
function Zs(e, t, n) {
  let r = M.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  AS(
    e,
    M.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = $s(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: jS, rootMargin: s, enabled: i ?? !0 }
  );
}
function Qs(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, av.innerHeight);
}
function $s({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Qs(t, e) >= r;
}
function ec() {
  return t(FS);
}
function tc() {
  return new Map();
}
function nc() {
  return Ia(tc);
}
function rc(e, n = []) {
  let { register: r, deregister: i } = t(IS);
  c(() => {
    if (e) return (r(e), () => i(e));
  }, [r, i, ...n]);
}
function ic(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function ac(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (W(t.originX) && (r.originX = t.originX),
      W(t.originY) && (r.originY = t.originY),
      W(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (W(n.originX) && (r.originX = n.originX),
      W(n.originY) && (r.originY = n.originY),
      W(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function oc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function sc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return HS.PushLeft;
    case `left`:
      return HS.PushRight;
    case `bottom`:
      return HS.PushUp;
    case `top`:
      return HS.PushDown;
  }
}
function cc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return HS.OverlayLeft;
    case `left`:
      return HS.OverlayRight;
    case `bottom`:
      return HS.OverlayUp;
    case `top`:
      return HS.OverlayDown;
  }
}
function lc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return HS.FlipLeft;
    case `left`:
      return HS.FlipRight;
    case `bottom`:
      return HS.FlipUp;
    case `top`:
      return HS.FlipDown;
  }
}
function uc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return fc(e, t.transition, t.component);
    case `removeOverlay`:
      return pc(e);
    case `add`:
      return mc(e, t.key, t.transition, t.component);
    case `remove`:
      return _c(e);
    case `update`:
      return dc(e, t.key, t.component);
    case `back`:
      return hc(e);
    case `forward`:
      return gc(e);
    default:
      return;
  }
}
function dc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function fc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function pc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function mc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i && i.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? Sc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = bc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = vc(e, t, c),
    p = xc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function hc(e) {
  let t = { ...e.containers },
    n = _c(e);
  if (n) return ((n.containers = t), n);
}
function gc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = mc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function _c(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (H(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = yc(e, r, n),
    u = xc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function vc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function yc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function bc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function xc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Cc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Sc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Cc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return wc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return wc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return wc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return wc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function wc(e, t, n) {
  let r = {},
    i = {};
  return (
    WS.forEach((e) => {
      ((r[e] = zS[e]), (i[e] = { ...n, from: zS[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Lx(zS)[a]}%` : Lx(zS)[a];
        ((Lx(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Tc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Ec({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function Dc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : JS;
}
function Oc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function kc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Ac(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else if (e < n) {
    let t = r[e + 1];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  }
}
function jc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Mc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Nc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t && t.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t && t.transition) return t.transition.enter;
    }
}
function Pc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t && t.transition.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t && t.transition.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return JS;
}
function Fc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Ic(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Lc(e) {
  return M.Children.map(e.component, (t) => {
    if (!Va(t) || !Ba(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? V(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      M.cloneElement(t, n)
    );
  });
}
function Rc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function zc(e, t) {
  let n = be(),
    r = ae();
  return _(qS, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Bc(e) {
  return tC in e;
}
function Vc(e, t) {
  if (!Bc(e)) return;
  let n = nb.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Hc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Uc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Wc(e, t) {
  let n = [];
  (W(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    W(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    W(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    W(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    W(e.invert) && n.push(`invert(${e.invert / 100})`),
    W(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    W(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    W(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Hc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Gc(e, t) {
  W(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Kc(e, t) {
  (Gc(e, t), Wc(e, t));
}
function qc(e, t) {
  let n,
    r = (...r) => {
      (av.clearTimeout(n), (n = av.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      av.clearTimeout(n);
    }),
    r
  );
}
function Jc(...e) {
  return e.filter(Boolean).join(` `);
}
function Yc(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Xc(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Xc(e) {
  if (e.startsWith(oC)) return e.substr(sC);
}
function Zc(e, t, n) {
  let r = p.map(e, (e) => (y(e) ? w(e, t) : e));
  return n ? r : _(O, { children: r });
}
function Qc(e) {
  let t = Ia(() => $c(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function $c(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = el(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = el(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      p.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      p.map(i, (e) => {
        if (y(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = rt(a) ? a(e.props) : a;
          return w(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return _(O, { children: i(e, t) });
  };
  return (
    (a.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: a,
    }
  );
}
function el(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Ws(n, e), Ws(t, e));
  };
}
function tl(e, t, n, r, i, a, o, s) {
  let c = M.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !M.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !al(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = il([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = il([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = _(
        lC.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = rl(e, a, r);
    (f.length
      ? (H(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = _(
          `div`,
          { className: `${uC} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : H(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    H(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, _(`div`, { className: dC }, `property-overrides-separator`)]
  );
}
function nl(e) {
  return e.split(`-`)[2];
}
function rl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${nl(a)}`);
  }
  return r;
}
function il(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function al(e, t) {
  for (let n of Object.keys(t)) if (!Pt(e[n], t[n], !0)) return !0;
  return !1;
}
function ol(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function sl(e) {
  return M.forwardRef(({ optimized: t, ...n }, r) => {
    let i = M.useContext(cC),
      a = M.useContext(lC)?.variants,
      o = n[yC];
    o && !Fn() && _C.setAll(o, a, t ? n : null, i);
    let s = xC(n);
    return _(e, { ref: r, ...n, ...s });
  });
}
function cl(e) {
  return z(e) || Array.isArray(e);
}
function ll(e) {
  return e in wC;
}
function ul(e, t) {
  let n = Ia(() => ({ values: CC(t ? e : void 0) }));
  return (
    M.useEffect(() => {
      if (!t)
        for (let e of SC) {
          let t = wC[e];
          st(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function dl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: a,
    loopPauseOffscreen: o,
  },
  u
) {
  let d = ye(),
    f = Ia(CC),
    p = l(!1),
    h = OC(),
    g = l(null),
    _ = s(async () => {
      if (!a) return;
      let e = n || void 0,
        t = p.current && r === `mirror`,
        i = t ? wC : a,
        o = t ? a : wC;
      return (
        (p.current = !p.current),
        (g.current = Promise.all(
          SC.map((t) => {
            if (!(d && t !== `opacity`))
              return (
                f[t].jump(o[t] ?? wC[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    a = i[t] ?? o[t];
                  typeof a == `number` && Be(f[t], a, r);
                })
              );
          })
        )),
        g.current
      );
    }, [a, r, n, d]),
    [v, y] = i(!1),
    b = l(!1),
    x = s(async () => {
      !e || !b.current || (await _(), await h(t ?? 0), x());
    }, [_, h, e, t]),
    S = s(() => {
      b.current || ((b.current = !0), m(() => y(!0)), x());
    }, [x]),
    w = s((e = !0) => {
      (SC.forEach((e) => {
        f[e].stop();
      }),
        SC.forEach((e) => {
          f[e].set(wC[e]);
        }),
        (p.current = !1),
        e && ((b.current = !1), m(() => y(!1))));
    }, []),
    T = e && a,
    E = s(() => {
      document.hidden ? w(!1) : b.current && ((b.current = !1), S());
    }, [S, w]);
  (c(() => {
    if (T)
      return (
        document.addEventListener(`visibilitychange`, E),
        () => {
          document.removeEventListener(`visibilitychange`, E);
        }
      );
  }, [T, E]),
    c(() => {
      (T && o) || (T ? S() : w());
    }, [S, w, o, T]),
    c(() => () => w(), [w]));
  let D = l(!1),
    O = s(async () => {
      g.current && (await g.current, !D.current && w());
    }, [w]);
  AS(
    u,
    s(
      (e) => {
        e.isIntersecting ? ((D.current = !0), S()) : ((D.current = !1), O());
      },
      [S, O]
    ),
    { enabled: T && o }
  );
  let k = v || !o;
  return C(() => ({ values: f, style: T && k ? TC : EC }), [T, k]);
}
function fl(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function pl(e, n, r) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = M.useRef(null),
    l = ye(),
    u = M.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : fl(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: d } = me(),
    f = ke(d, u),
    p = ie(o && c.current === null ? `hidden` : r),
    m = ie(0),
    h = t(kS);
  return (
    Js(
      n,
      (e) => {
        if (e === null || !s) return;
        let t = Ys(h, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            Qe.update(() => {
              (f.set(u(d.get())), o && p.set(r ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Vt(() => {
      s && f.set(0);
    }),
    { values: { y: l || !s ? m : f }, style: s ? { ...TC, visibility: p } : EC }
  );
}
function ml(e) {
  return typeof e == `object` && !!e;
}
function hl(e) {
  if (ml(e)) return e?.transition;
}
function gl(e, t, n, r, i, a) {
  let o = hl(e);
  return Promise.all(
    SC.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = ml(e) ? (e?.[s] ?? wC[s]) : wC[s];
          if ((ne(u) && (u = u.get()), !B(u))) return c();
          let d = Ye.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (z(i) && !l?.hasAnimated && av.MotionHandoffAnimation) {
            let e = av.MotionHandoffAnimation(i, s, Qe);
            e && (f = e);
          }
          a ? l.set(u) : Be(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function _l(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = se(),
    g = l({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Ia(() => {
      let e = d ?? c;
      if (!V(e)) return { values: CC() };
      let t = {};
      for (let n in e) {
        let r = V(e) ? e[n] : void 0;
        B(r) && (t[n] = r);
      }
      return { values: CC(t) };
    });
  Js(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = Ye.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!ll(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, B(t) ? t : wC[e]);
        }
      }
    },
    [f]
  );
  let v = ye();
  Js(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            gl(f, _, v, o, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              gl(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Pt(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      gl(f, _, v, o, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && f;
  return C(() => ({ values: _.values, style: y ? TC : EC }), [y]);
}
function vl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function yl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = vl(o.current, document.documentElement) - jC - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function bl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function xl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Bt();
  M.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return ue((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = bl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < MC) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Sl(e, t, n) {
  let r = yl(e, t),
    i = [...PC],
    a = r[0];
  if (!B(a)) return FC;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!B(e)) return FC;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Cl(e) {
  return {
    x: e?.x ?? wC.x,
    y: e?.y ?? wC.y,
    scale: e?.scale ?? wC.scale,
    opacity: e?.opacity ?? wC.opacity,
    transformPerspective: e?.transformPerspective ?? wC.transformPerspective,
    rotate: e?.rotate ?? wC.rotate,
    rotateX: e?.rotateX ?? wC.rotateX,
    rotateY: e?.rotateY ?? wC.rotateY,
    skewX: e?.skewX ?? wC.skewX,
    skewY: e?.skewY ?? wC.skewY,
    transition: e?.transition ?? void 0,
  };
}
function wl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return M.useMemo(
    () => ({
      initial: r ?? Cl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Cl({ opacity: t }),
      exit: i ?? Cl(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Tl(e, t) {
  let n = ye(),
    r = wl(e),
    i = e.styleAppearEffectEnabled,
    a = ul(i ? r.initial : r.animate, i),
    o = M.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Bt(),
    c = M.useRef(),
    l = M.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = Ye.get(t.current);
      c.current = Promise.all(
        SC.map((e) => {
          s && a.values[e].set(r.initial[e] ?? wC[e]);
          let t = o[e] ?? wC[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (B(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Be(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  Zs(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let d = e.targets && i && !e.scrollDirection;
  return (
    M.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return ue((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Sl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = re(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = Lx(r)[u];
        d && l(d);
      });
    }, [s, d]),
    xl(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Vt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of SC) a.values[e].set(r.initial?.[e] ?? wC[e]);
    }),
    C(() => ({ values: a.values, style: i ? TC : EC }), [i])
  );
}
function El(e, t) {
  let n = M.useRef({});
  M.useEffect(() => {
    if (t !== void 0)
      for (let r of F_(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Ne({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), Qe.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Dl(e, t) {
  let n = RC();
  return {
    inputRange: yl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of SC) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Ol(e) {
  let t = RC();
  for (let { target: n } of e) for (let e of SC) t[e]?.push(n[e]);
  return t;
}
function kl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = ye(),
    s = ul(LC(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Bt();
  return (
    f(() => {
      if (!(c || !l))
        return ue((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = Dl(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of SC)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(re(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    Js(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = Ol(n);
        return ue(
          (e, { y: t }) => {
            for (let e of SC)
              (o && e !== `opacity`) ||
                (zC.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(re(t.progress, zC, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    El(s.values, r),
    Vt(() => {
      if (c) return;
      let e = LC(n, o);
      for (let t of SC) s.values[t].set(e?.[t] ?? wC[t]);
    }),
    M.useMemo(() => ({ values: s.values, style: t ? TC : EC }), [t])
  );
}
function Al(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function jl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Xc(n);
    if (r) {
      for (let i of VC)
        if (BC[i]?.has(r)) {
          t[i][r] = Lx(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Lx(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Al(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Al(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Ml(e) {
  return V(e) && WC in e;
}
function Nl(e, t) {
  if (!e || !V(e)) return t;
  for (let n in e) {
    let r = e[n];
    !ne(r) || !ll(n) || (B(r.get()) && t[n].push(r));
  }
}
function Pl(e) {
  return z(e) || Array.isArray(e);
}
function Fl() {
  return M.useContext(KC);
}
function Il(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Ll() {
  if (N === void 0 || YC)
    return _(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw ZC;
}
function Rl({ children: e }) {
  return t($C) ? _(O, { children: e }) : _(E, { fallback: QC, children: e });
}
function zl() {
  return _(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Bl(e, t) {
  if (!S_ || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  hn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Vl(...e) {
  console.error(...e);
}
function Hl() {
  return J.current() !== J.canvas;
}
function Ul({ getErrorMessage: e, fallback: t, children: n }) {
  return Hl()
    ? _(Wl, { fallback: t, children: _(tw, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Wl({ children: e, fallback: t = ew }) {
  return N === void 0 ? _(E, { fallback: t, children: e }) : _(Rl, { children: e });
}
function Gl() {
  return M.useContext(rw);
}
function Kl() {
  let e = Gl();
  return M.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function ql({ children: e, scopeId: t, nodeId: n }) {
  let r = Gl(),
    i = M.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return _(rw.Provider, { value: i, children: e });
}
function Jl(e, t) {
  return `${iw}${e}:${t}`;
}
function Yl(e, t) {
  return Zl(`component`, e, t);
}
function Xl(e, t) {
  return Zl(`override`, e, t);
}
function Zl(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Jl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Ql(e, t, n, r, i, a) {
  let o = eu(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function $l(e, t, n, r) {
  return eu(e, t, n, r);
}
function eu(e, t, n, r) {
  return !!(st(n) || (n === 1 && r && e === t));
}
function tu(e, t, n, r, i, a) {
  let o = Gl();
  if (st(t) || st(n)) return _(nw, { children: e });
  let { disableCustomCode: s } = Rv();
  return s && r
    ? _(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (Ql(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = _(Ul, { getErrorMessage: Yl.bind(null, t, n), fallback: null, children: e })),
      i && (e = _(ql, { scopeId: t, nodeId: n, children: e })),
      e);
}
function nu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function ru(e) {
  return !(!e || e.placement || e.alignment);
}
function iu(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      U(e);
  }
}
function au(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${iu(t)}, -100%`;
    case `right`:
      return `0%, ${iu(t)}`;
    case `bottom`:
      return `${iu(t)}, 0%`;
    case `left`:
      return `-100%, ${iu(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function ou(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(pw)) {
      let e = n.getAttribute(pw);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function su(e) {
  let { registerCursors: n } = t(sw),
    r = Ia(() => e),
    i = A();
  f(() => n(r, i), [n, i]);
}
function cu(e) {
  return !!(e && typeof e == `object` && hw in e);
}
function lu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function uu() {
  return J.current() === J.canvas;
}
function du(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function fu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function pu(e, t, n, r) {
  if (z(e)) {
    let i = du(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = ki(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function mu(e) {
  return z(e) && e.startsWith(`data:${Sw}`);
}
function hu(e) {
  if (mu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Sw.length),
        r = t.searchParams,
        i = r.has(vw) ? r.get(vw) : void 0,
        a,
        o = r.get(yw),
        s = r.get(bw),
        c = r.get(xw);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function gu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = hu(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function _u(e) {
  if (!mu(e)) return e;
  let t = hu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: vu(i) };
}
function vu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function yu({ children: e }) {
  return _(Cw.Provider, { value: void 0, children: e });
}
function bu(e, n, r, i, a, o) {
  let c = t(Cw),
    l = Kl(),
    u = C(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: l }), [n, r, l]),
    d = Lt(),
    f = zt(),
    { locales: m } = Yr(),
    h = C(() => {
      let e = cu(i) ? i : _u(i);
      if (e) return pu(e, d, f, m);
    }, [f, i, d, m]),
    g = !!(!uu() && c?.nodeId && u.nodeId),
    v = s(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Vn(e))) {
            Cu(a.href, ``, `_blank`);
            return;
          }
          h ? a.navigate?.() : Cu(a.href, a.rel, a.target);
        }
      },
      [a, h]
    ),
    y = s(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Cu(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = s(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? a.navigate?.() : Cu(a.href, a.rel, a.target));
      },
      [a, h]
    );
  Js(
    o,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let x = e;
  return (
    g &&
      (p.forEach(e, (e) => {
        Su(e) &&
          (H(
            xu(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          H(
            xu(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          _w.collectNestedLink(c, u));
      }),
      (x = p.map(e, (e) => {
        if (!Su(e)) return e;
        let t = wu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: v,
            onAuxClick: y,
            onKeyDown: b,
            as: r.as && wu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return k(t, { ...i, ref: a }, n);
      }))),
    _(Cw.Provider, { value: u, children: x })
  );
}
function xu(e) {
  return !st(e?.nodeId);
}
function Su(e) {
  return y(e) && (wu(e.type) !== e.type || wu(e.props.as) !== e.props.as);
}
function Cu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function wu(e) {
  return e === `a` ? `span` : he(e) && le(e) === `a` ? I.span : e;
}
function Tu(e) {
  e &&
    Qe.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      Qe.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(ww, r)),
          i && t.forEach((e) => e.style.setProperty(Tw, i)));
      });
    });
}
function Eu(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${ww});
    background-color: var(${Tw});
}`,
  ];
}
function Du({ triggerId: e, children: t }) {
  return (
    M.useLayoutEffect(() => {
      e && Tu(e);
    }, [e]),
    t
  );
}
function Ou(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Ou(e.parentElement, t)
      : null;
}
function ku({ children: e }) {
  return _(Rl, { children: e });
}
function Au(e) {
  return b(function (t, n) {
    return _(ku, { children: _(e, { ...t, ref: n }) });
  });
}
function ju(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Nu(e, t, o, s, a, c, l, i, r);
}
function Mu(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && du(t))
    try {
      let [i, a] = t.split(`#`, 2);
      H(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      H(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = ki(e.routes, o, void 0, r),
        u = e.getRoute(s);
      if (u)
        return {
          routeId: s,
          route: u,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
          locale: l ? r?.find(({ id: e }) => e === l) : void 0,
        };
    } catch {}
}
function Nu(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = li(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Pu() {
  let e = t(jw),
    n = zt()?.pathVariables;
  return e || n;
}
function Fu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(Aw)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Iu() {
  let e = d.connection || d.mozConnection || d.webkitConnection || {},
    t = d.deviceMemory && d.deviceMemory > Pw,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? Fw : Iw));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: Nw }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = zw.get(n);
    if (!a?.size || Rw.has(n)) return;
    (++s, Rw.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), Lw.delete(t));
    for (let e of a) (o.unobserve(e), Lw.delete(e));
    (a.clear(), zw.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = Lw.get(e);
      if (!n || Rw.has(n.id)) {
        (o.unobserve(e), Lw.delete(e));
        continue;
      }
      let r = n.id,
        a = zw.get(r),
        l = zw.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : zw.set(r, new Set([e])), setTimeout(c, Mw, n, e));
      } else (a && a.delete(e), l <= 1 && zw.delete(r));
    }
  }
  return (e, t, n) => {
    if (!Rw.has(n))
      return (
        Lw.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (Lw.delete(e), o.unobserve(e));
        }
      );
  };
}
function Lu(e, t) {
  let n = du(e),
    r = {
      href: e === `` || fu(e, n) ? e : `https://${e}`,
      target: Ru(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Qn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Ru(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function zu(e, t) {
  console.warn(
    gt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Bu(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return zu(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return pt(i) ? i.catch(zu) : i;
  } catch (e) {
    zu(e);
  }
}
async function Vu(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      H(a, `unresolvedSlug should be defined`);
      let o = Bu(a, r, n),
        s = pt(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Hu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Bu(o, r, n);
      pt(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Uu() {
  let e = Tn();
  return s((t, n, r, i = []) => Hu(t, n, r, e, i), [e]);
}
function Wu({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = Tn();
  return s(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = cu(r) ? r : _u(r);
      if (!cu(c))
        return hn(
          `published_site_click`,
          {
            ...s,
            href: o ? Gu(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (z(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (pt(n) ? await n : n) ?? null;
        }
      }
      return hn(
        `published_site_click`,
        {
          ...s,
          href: o ? Gu(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Gu(e) {
  try {
    let t = new URL(e, av.document.baseURI);
    return t.origin === av.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Ku(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function qu(e, t, n) {
  return async (r) => {
    let i = Vn(r),
      a = Ou(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Fv({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Ju(e, t, n, r, i, a, o, s) {
  if (!n) return Lu(e, r);
  let c = Mu(t, e, s, o);
  if (!c) return Lu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Lu(e, r);
  let m = li(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !C_,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Ru(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => Ku(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: qu(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && Fu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Yu(e, t, n) {
  let r = Xu(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (rt(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (rt(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Xu(e, t) {
  let n = V(e) ? e : void 0,
    r = n && !ot(n),
    i = t && !ot(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Zu(e, t, n) {
  if (!(t && kn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Qu } : { ...i, onTap: r }) : e;
}
function Qu(e) {
  let t = Ou(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function $u(e, t, n, r, i, a) {
  let o = cu(e) ? e : _u(e);
  if (!cu(o)) return z(e) ? Lu(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (pt(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return li(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function ed() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function td() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, ed(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: Hw, difficulty: Uw, tokenLength: Ww, maxTime: Gw }));
  });
}
function nd(e) {
  let t = new Set();
  for (let n of e.elements)
    !rd(n) || n.disabled || !n.name || n.name.startsWith(Kw) || t.add(n.name);
  return Array.from(t);
}
function rd(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function id(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function ad(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function od() {
  let e = M.useContext(aT),
    t = M.useMemo(
      () =>
        Jw.map((e) => ({
          inputRef: M.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: M.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${Kw}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: M.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [Xw.name]: e.originalName,
                [Xw.value]: o,
                [Xw.setAttribute]: e.methodsUsed.setAttribute,
                [Xw.valueProperty]: e.methodsUsed.valueProperty,
                [Xw.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [Xw.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [Xw.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${Kw}_${Zw.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${Kw}_${Zw.fieldCount}`, r.toString()),
          n.append(`${Kw}_${Zw.fieldFilledCount}`, i.toString()),
          n.append(`${Kw}_${Zw.hpVersion}`, qw),
          n.append(`${Kw}_${Zw.siteId}`, e || ``),
          n.append(`${Kw}_${Zw.timeToSubmissionSinceModuleLoad}`, Qw()));
      },
      [t, e]
    ),
  };
}
function sd({ states: e }) {
  return _(O, { children: e.map((e) => _($w, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function cd({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          ld(e, t, n);
        })
      : ld(e.pageviewEventData.current, t, n));
}
function ld(e, t, n) {
  return hn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function ud({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? iT : rT;
    case `incomplete`:
      return e === `error` ? iT : nT;
    case `submit`:
      return eT;
    case `success`:
      return tT;
    case `error`:
      return iT;
    default:
      U(t);
  }
}
function dd({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function fd(e) {
  e.preventDefault();
}
function pd(e, t) {
  let n = fu(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t && t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function md(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (md(t)) return !0;
  return !1;
}
async function hd(e, t, n, r) {
  let i = await td();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": id(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw gd(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function gd(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    V(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function _d({ EditorBar: e, fast: n = !1 }) {
  let r = t(aT),
    i = g(E_, n ? lT : uT, O_),
    a = Rv(),
    o = C(() => {
      let e = {},
        t;
      for (t in a)
        a.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = a[t]);
      return e;
    }, [a]);
  return !e || !r || !i
    ? null
    : _(cT, { children: _(E, { children: _(e, { framerSiteId: r, features: o }) }) });
}
function vd({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = l(),
    a = l(),
    o = l(t),
    s = l(null);
  ((o.current = t),
    c(() => {
      e && ((r.current ??= new Set()), r.current.add(e), a.current?.(e));
    }, [e]));
  let [u] = i(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current ? bd(o.current, o.current.currentRouteId, o.current.currentPathVariables) : ``,
      resolveRoute: (e) => (o.current ? bd(o.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && yd(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return _(dT.Provider, { value: u, children: n });
}
async function yd(e, t) {
  if (!gn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    hn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function bd(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? Zn(r.path, n) : r.path;
}
function xd({ children: e, loadSnippetsModule: t }) {
  return _(ST.Provider, { value: t, children: e });
}
function Sd() {
  return M.useContext(ST);
}
function Cd(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function wd(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (H(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (H(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      U(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Td(a.createContextualFragment(e), r, i));
}
async function Td(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Ed(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Td(r, e, null)));
  }
}
function Ed(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Dd(r, t, n);
}
function Dd(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Od(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = vT), (n = yT));
      break;
    case `bodyEnd`:
      ((t = bT), (n = xT));
      break;
    case `headStart`:
      ((t = mT), (n = hT));
      break;
    case `headEnd`:
      ((t = gT), (n = _T));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function kd(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Cd(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function Ad(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Od(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = kd(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((jd(t, o), s)) {
      await wd(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Cd(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Nd(e.id, n, r, i);
    d ? await wd(u, d, `afterend`) : await wd(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function jd(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Md(n) && n.remove(), (n = e));
  }
}
function Md(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Nd(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = kd(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Pd() {
  let e = Sd();
  return s(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(fT),
        o = a && a.dataset[pT] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await Ad(t, n, r);
      }
    },
    [e]
  );
}
function Fd(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Id() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((CT = e.timeZone), (wT = e.locale));
}
function Ld({ routeId: e, url: t, pathVariables: n, localeId: r }) {
  Ir({ routeId: e, pathVariables: n, localeId: r, paginationInfo: Dr()?.paginationInfo }, t);
}
function Rd(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let { historyPath: i, hash: a, pathVariables: o, localeId: s, currentRoutePath: c } = n,
    l = c !== void 0 && c === r,
    u = Dr();
  Ir(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      localeId: s,
      queryParamBackAnchorSearch: l ? u?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function zd(e, t, n, r) {
  let i = Dr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Ir(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
      },
      li(t, n)
    ));
}
function Bd() {
  return In() >= 17 ? OT : DT;
}
function Vd(e = qd) {
  let t = (e) => {
    e.persisted && Xd();
  };
  Nn() && (N.addEventListener(`pageshow`, t), (ET = Date.now() - Bd()));
  let n = Hd(),
    r = Jd(e);
  return function () {
    (N.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Hd() {
  let e = N.history.scrollRestoration;
  return (
    (N.history.scrollRestoration = `manual`),
    function () {
      N.history.scrollRestoration = e;
    }
  );
}
function Ud(e) {
  return V(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Wd() {
  return { x: N.scrollX, y: N.scrollY };
}
function Gd() {
  let e = Dr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Ud(t)) return t;
}
function Kd(e) {
  let t = Dr();
  t && (Pr({ ...t, scrollPosition: e }, void 0, !0), Nn() && (ET = Date.now()));
}
function qd(e, t = !1) {
  let n = Gd();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (Nn() && !t) {
      let e = Bd();
      if (Date.now() - ET < e) return;
    }
    Kd(e);
  }
}
function Jd(e) {
  let t = () => {
      e(Wd());
    },
    n = () => {
      e(Wd(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), N.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), N.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in N)) {
    let e = Yd(t);
    return function () {
      (i(), e());
    };
  }
  return (
    N.addEventListener(`scrollend`, t),
    function () {
      (i(), N.removeEventListener(`scrollend`, t));
    }
  );
}
function Yd(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || Or(Dr()) !== t) && e());
    },
    a = () => {
      let e = Or(Dr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = Nn() ? Bd() : 100;
      t = N.setTimeout(i, a);
    };
  return (
    N.addEventListener(`scroll`, a),
    function () {
      (N.removeEventListener(`scroll`, a), r());
    }
  );
}
function Xd() {
  let e = Gd();
  return e ? (N.scrollTo(e.x, e.y), !0) : !1;
}
function Zd(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Qd(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Zd(n, t), !0);
}
function $d(e, t, n) {
  n !== `preserve-scroll-position` &&
    Qe.render(
      () => {
        (n === `restore-scroll-position` && Xd()) || Qd(e, t) || N.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function ef(e, t) {
  Qe.read(() => {
    N.scrollY !== 0 ||
      N.scrollX !== 0 ||
      Qe.render(
        () => {
          Xd() || Qd(e, t);
        },
        !1,
        !0
      );
  });
}
function tf(e) {
  let t = Rv().scrollRestoration,
    n = l(void 0),
    r = l(!1),
    i = !!(t && !e),
    a = s(
      (e) => {
        ((n.current = e), i && (r.current = !0));
      },
      [i]
    ),
    o = s((e, t = !1) => {
      r.current || qd(e, t);
    }, []),
    c = s(() => {
      i && (r.current = !0);
    }, [i]),
    u = s(() => n.current !== void 0 || r.current, []),
    d = s((e, t) => {
      let i = n.current;
      !i ||
        i.routeId !== e ||
        i.remountKey !== t ||
        ((n.current = void 0), (r.current = !1), $d(i.hash, i.shouldSmoothScroll, i.behavior));
    }, []);
  return (
    f(() => {
      if (i) return Vd(o);
    }, [i, o]),
    {
      usesCustomScrollRestoration: i,
      isNavigationCommitPending: u,
      onHistoryTraversal: c,
      scheduleScroll: a,
      commitNavigationScroll: d,
    }
  );
}
function nf({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: i } = n;
  return (
    f(() => {
      r(e, t);
    }),
    c(() => {
      i && ef(N.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function rf() {
  let [e, t] = M.useState(0);
  return [e, M.useCallback(() => t((e) => e + 1), [])];
}
function af(e) {
  if (!e) return x_;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function of(e) {
  let t = Hr(e),
    n = l(void 0),
    r = s(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: s(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Wt(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(x_);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let f = N.navigation?.transition;
        u();
        try {
          await f?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || ey();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function sf({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: a,
  routes: o,
  initialLocaleId: d,
  initialCollectionItemId: p,
  locales: h = z_,
  preserveQueryParams: g = !1,
  LayoutTemplate: v,
  EditorBar: y,
  siteCanonicalURL: b,
  adaptLayoutToTextDirection: x,
}) {
  (xi(), Lr({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: d }));
  let S = Sr(),
    [w, E] = rf(),
    D = Tr(`framer-route-change`),
    O = C(() => (!Rv().synchronousNavigationOnDesktop || !Bn() ? m : (e) => e()), []),
    k = Pd(),
    A = l(!0),
    j = l(),
    M = l(r),
    ee = l(n),
    P = l(d),
    te = tf(t),
    { isNavigationCommitPending: ne, usesCustomScrollRestoration: F } = te,
    { startNavigation: I, cancelPendingNavigation: re } = of(F),
    ie = te.scheduleScroll,
    ae = P.current,
    oe = C(() => h.find(({ id: e }) => (ae ? e === ae : e === B_)) ?? null, [ae, h]),
    se = oe?.textDirection ?? `ltr`,
    ce = x ? se : `ltr`;
  f(() => {
    x && document.documentElement.setAttribute(`dir`, se);
  }, [se, x]);
  let le = Br(),
    ue = C(
      () => ({
        activeLocale: oe,
        locales: h,
        setLocale: async (e) => {
          let n = D({ localized: !0 });
          await Fv({ priority: `user-blocking`, continueAfter: `paint` });
          let r;
          z(e) ? (r = e) : V(e) && (r = e.id);
          let i = h.find(({ id: e }) => e === B_),
            a = h.find(({ id: e }) => e === r);
          if (!a) return;
          let s = M.current,
            c = o[s];
          if (c)
            try {
              let e = await le({
                currentLocale: oe,
                nextLocale: a,
                route: c,
                routeId: s,
                defaultLocale: i,
                pathVariables: ee.current,
                preserveQueryParams: g,
              });
              if (!e) return;
              let r = e.path;
              ((A.current = !1),
                (ee.current = e.pathVariables),
                (P.current = a.id),
                (j.current = r));
              let o = c.path && e.pathVariables ? Zn(c.path, e.pathVariables) : c.path;
              (ie({
                routeId: s,
                remountKey: `${a.id}${o}`,
                hash: void 0,
                shouldSmoothScroll: !1,
                behavior: `preserve-scroll-position`,
              }),
                I(
                  () => {
                    S(s, s, () => O(E));
                  },
                  n,
                  t
                    ? void 0
                    : r
                      ? () => {
                          Ld({
                            routeId: s,
                            url: r,
                            pathVariables: e.pathVariables,
                            localeId: a.id,
                          });
                        }
                      : void 0,
                  !1
                ));
            } catch {}
        },
      }),
      [oe, t, E, h, g, o, ie, I, S, D, O, le]
    ),
    de = s(
      (e, t, n, r, i, a, s, c, l) => {
        A.current = !1;
        let u = M.current,
          d = o[e],
          f = Ut(d, n),
          p = d?.path && i ? Zn(d.path, i) : d?.path;
        if (
          ((M.current = e),
          (ee.current = i),
          (P.current = t),
          (j.current = r),
          ie({
            routeId: e,
            remountKey: `${t}${p}`,
            hash: f,
            shouldSmoothScroll: c ?? !1,
            behavior: a
              ? F
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          a)
        ) {
          (re(), O(E));
          return;
        }
        I(
          (t) => {
            S(u, e, () => O(E), t);
          },
          s,
          l,
          !0
        );
      },
      [E, o, F, ie, I, S, O, re]
    );
  (Rr(te, M, de),
    c(() => {
      if (t) return;
      let e = () => {
        let e = Dr(),
          t = N.location.hash === `` ? void 0 : N.location.hash.slice(1);
        (e && Ut(o[e.routeId], e.hash) === t) ||
          Fr({
            ...(e ||
              (Ar() ?? { routeId: M.current, pathVariables: ee.current, localeId: P.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (N.addEventListener(`hashchange`, e), () => N.removeEventListener(`hashchange`, e));
    }, [t, o]));
  let fe = s(
      async (e, n, r, i, a) => {
        let s = o[e],
          c = bt(s?.page) ? s.page.getStatus() : void 0,
          l = c?.hasRendered,
          u = D({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          d = af(a);
        if (
          (Fv({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await Fv({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = s?.path ?? `/`;
          for (let n of t.matchAll(Bv)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Ut(s, n),
          p = ee.current,
          m = P.current;
        if (Fd({ routeId: M.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          let a = ne();
          if (a) {
            let t = s?.path && r ? Zn(s.path, r) : s?.path;
            ie({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else re();
          (u.ignore?.(), !a && F && $d(f, i, `scroll-to-hash-or-top`));
          let c = o[e];
          (!t &&
            c &&
            zd(
              e,
              c,
              {
                currentRoutePath: c.path,
                currentRoutePathLocalized: c.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: m,
                preserveQueryParams: g,
                siteCanonicalURL: b,
              },
              d
            ),
            !a && !F && $d(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!s) return;
        let _ = o[M.current],
          v =
            si(b) +
            li(s, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              localeSlug: h.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: g,
              relative: !1,
              siteCanonicalURL: b,
            });
        de(
          e,
          m,
          n,
          v,
          r,
          !1,
          u,
          i,
          t
            ? void 0
            : () => {
                (d(),
                  Rd(e, s, {
                    historyPath: v,
                    currentRoutePath: _?.path,
                    hash: n,
                    pathVariables: r,
                    localeId: m,
                  }));
              }
        );
      },
      [re, o, h, de, t, g, b, D, F, ne, ie]
    ),
    pe = Ft(o),
    me = M.current,
    L = j.current,
    he = ee.current,
    ge = o[me],
    _e = ge?.path,
    ve = TT(ge, me, L, he, oe, p),
    ye = A.current;
  c(() => {
    k(me, he ?? {}, ue.activeLocale, ye);
  }, [k, me, he, ue, ye]);
  let R = C(
    () => ({
      navigate: fe,
      getRoute: pe,
      currentRouteId: me,
      currentPathVariables: he,
      routes: o,
      collectionUtils: a,
      preserveQueryParams: g,
      pageviewEventData: ve,
      siteCanonicalURL: b,
      isInitialNavigation: ye,
    }),
    [fe, pe, me, he, o, a, g, b, ve, ye]
  );
  if (!ge) throw Error(`Router cannot find route for ${me}`);
  let be = !oe || !ge.includedLocales || ge.includedLocales.includes(oe.id),
    xe = _e && he ? Zn(_e, he) : _e,
    Se = `${ae}${xe}`,
    Ce = Ia(() => ({ ...e, display: `contents` }));
  return _(It, {
    api: R,
    children: _(ly.Provider, {
      value: ue,
      children: _(uy.Provider, {
        value: ce,
        children: _(dw, {
          children: _(ni, {
            routerRenderKey: w,
            isNavigationCommitPending: te.isNavigationCommitPending,
            children: T(vd, {
              currentRoutePath: xe,
              routerAPI: R,
              children: [
                y && _(_d, { EditorBar: y, fast: !0 }),
                _(XC, {
                  children: T(Rl, {
                    children: [
                      _(Yy.Start, {}),
                      _(nf, { currentRouteId: me, remountKey: Se, scrollRestoration: te }),
                      _(Zy, {
                        notFoundPage: i,
                        defaultPageStyle: e,
                        routerRenderKey: w,
                        children: _(cf, {
                          LayoutTemplate: v,
                          webPageId: ge?.abTestingVariantId ?? me,
                          style: e,
                          children: (t) =>
                            _(u, { children: be ? Ei(ge.page, t ? Ce : e) : i && Ei(i, e) }, Se),
                        }),
                      }),
                      y && _(_d, { EditorBar: y }),
                      _(_i, {}),
                      _(Yy.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function cf({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? _(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function lf(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function uf(e) {
  return typeof e == `object` && !!e;
}
function df(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!uf(r)) return;
    r = r[e];
  }
  return r;
}
function ff(e) {
  return `${e.credentials}:${e.url}`;
}
function pf(e) {
  return z(e) && !Number.isNaN(Number(e));
}
function mf(e, t) {
  switch (e) {
    case `string`:
      return z(t) || B(t);
    case `color`:
      return z(t);
    case `boolean`:
      return it(t);
    case `number`:
      return B(t) || pf(t);
    case `link`:
    case `image`:
      return z(t) && fu(t, !1);
    default:
      return !1;
  }
}
function hf(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = df(e.data, t.resultKeyPath);
  if (st(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!mf(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function gf(e, t) {
  if (J.current() === J.canvas) return !1;
  let n = Math.max(t * 1e3, AT);
  return Date.now() >= e + n;
}
function _f(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    routes: s,
    collectionUtils: c,
    notFoundPage: l,
    isReducedMotion: u = !1,
    skipAnimations: d = !1,
    includeDataObserver: f = !1,
    localeId: p,
    locales: m,
    preserveQueryParams: h,
    EditorBar: g,
    defaultPageStyle: v,
    disableHistory: y,
    LayoutTemplate: b,
    siteCanonicalURL: x,
    adaptLayoutToTextDirection: S,
    loadSnippetsModule: C,
    initialCollectionItemId: w,
  } = e;
  return (
    M.useEffect(() => {
      n || wb.start();
    }, []),
    n
      ? _(Gr, {
          value: r ?? `preview`,
          children: _(He, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: _(wn, {
              collectionUtils: c,
              children: _(FT, {
                children: _(aT.Provider, {
                  value: a,
                  children: _(xd, {
                    loadSnippetsModule: C,
                    children: _(sf, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: p,
                      initialCollectionItemId: w,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: m,
                      defaultPageStyle: v ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: h,
                      EditorBar: g,
                      disableHistory: y,
                      LayoutTemplate: b,
                      siteCanonicalURL: x,
                      adaptLayoutToTextDirection: S,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : _(f ? aC : M.Fragment, {
          children: _(Rt, {
            routes: s,
            children: _(YS, { children: M.isValidElement(t) ? t : M.createElement(t, { key: i }) }),
          }),
        })
  );
}
function vf(e, t) {
  let n = Lt(),
    { activeLocale: r } = Yr(),
    i = Uu();
  return qr(() => {
    let t = [],
      a = (e) => {
        if (e)
          return z(e) || cu(e)
            ? $u(e, n, void 0, void 0, r, o)
            : $u(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function yf(e) {
  return {
    trace(...t) {
      return Wx.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return Wx.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return Wx.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return Wx.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return Wx.getLogger(e)?.error(...t);
    },
    get enabled() {
      return Wx.getLogger(e) !== void 0;
    },
  };
}
function bf() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function xf() {
  return LT.priority;
}
function Sf(e) {
  let t = LT;
  return (
    (LT = e),
    {
      [bf()]() {
        LT = t;
      },
    }
  );
}
function Cf(e = LT.priority, t = LT.canYield) {
  if (!(!t || e === void 0)) return Fv({ batch: !0, priority: Un(e) });
}
function wf(e) {
  var t = [];
  try {
    Oe(t, Sf({ priority: LT.priority, canYield: !1 }));
    let n = e.next();
    return (H(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    Ke(t, n, r);
  }
}
async function Tf(e, t, n = LT.priority, r = LT.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (Oe(o, Sf(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      Ke(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = Cf(n, r);
      (o && (await o), Oe(l, Sf(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      Ke(l, u, d);
    }
  }
  return a.value;
}
function Ef(e, t = LT.priority, n = LT.canYield) {
  var r = [];
  try {
    Oe(r, Sf({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Tf(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    Ke(r, i, a);
  }
}
function* Df(e, t = LT.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (dt(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Tf(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Of(e, t = LT.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Cf(t);
    r && (yield r);
    let o = e[a];
    if (dt(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Tf(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function kf(e) {
  return Mf(e) || Ff(e);
}
function Af(e) {
  return at(e) && e.every(V);
}
function jf(e) {
  return V(e) && rt(e.read) && rt(e.preload);
}
function Mf(e) {
  return Af(e) || jf(e);
}
function Nf(e) {
  return V(e) && V(e.schema);
}
function Pf(e) {
  return V(e) && V(e.collectionByLocaleId);
}
function Ff(e) {
  return Nf(e) || Pf(e);
}
function If(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = dp(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Lf(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => RT.cast(e, t.definition)) };
  }
  return null;
}
function Rf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function zf(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Bf(e) {
  return zf(e)?.value ?? !1;
}
function Vf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Hf(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Uf(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Wf(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return ut(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Gf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Kf(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function qf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Jf(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function Yf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Xf(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Zf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Qf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function $f(e) {
  return Qf(e)?.value ?? null;
}
function ep(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = dp(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function tp(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = RT.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function np(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function rp(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function ip(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function ap(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function op(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function sp(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function cp(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function lp(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function up(e) {
  return lp(e)?.value ?? null;
}
function dp(e, t, n) {
  if (ct(e) || ct(t)) return (H(e === t), 0);
  switch (e.type) {
    case `array`:
      return (H(e.type === t.type), If(e, t, n));
    case `boolean`:
      return (H(e.type === t.type), Rf(e, t));
    case `color`:
      return (H(e.type === t.type), Vf(e, t));
    case `date`:
      return (H(e.type === t.type), Uf(e, t));
    case `enum`:
      return (H(e.type === t.type), Gf(e, t));
    case `file`:
      return (H(e.type === t.type), qf(e, t));
    case `link`:
      return (H(e.type === t.type), Yf(e, t));
    case `number`:
      return (H(e.type === t.type), Zf(e, t));
    case `object`:
      return (H(e.type === t.type), ep(e, t, n));
    case `responsiveimage`:
      return (H(e.type === t.type), np(e, t));
    case `richtext`:
      return (H(e.type === t.type), ip(e, t));
    case `vectorsetitem`:
      return (H(e.type === t.type), op(e, t));
    case `string`:
      return (H(e.type === t.type), cp(e, t, n));
    default:
      U(e);
  }
}
async function fp(e, t) {
  return jf(e) ? (await e.preload(t), e.read(t)) : e;
}
function pp(e) {
  if (!Ff(e) || !e.id) return;
  let t = VT.get(e.id);
  if (!t) return (VT.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function mp(e) {
  let t = pp(e);
  if (t) return t;
  let n = HT.get(e);
  if (n) return n;
  let r = `${UT}${Math.random().toString(16).slice(2)}`;
  return (HT.set(e, r), r);
}
function hp(e, t) {
  if (Mf(e)) {
    let n = mp(e) + (t?.id ?? B_),
      r = WT.get(n);
    if (r) return r;
    let i = new BT(e, t);
    return (WT.set(n, i), i);
  }
  if (Nf(e)) return e;
  if (Pf(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  U(e, `Unsupported collection type`);
}
function gp(e) {
  return e;
}
function _p(e) {
  return rt(e.getHash);
}
function K(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (V(r) && _p(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return gp(`${n})`);
}
function vp(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function yp(e, t) {
  return { collectionId: mp(e), pointer: t };
}
function bp(e) {
  return V(e) && z(e.collectionId);
}
function xp(e, t) {
  return { collectionId: mp(e), pointer: t };
}
function Sp(e) {
  return V(e) && z(e.collectionId);
}
function Cp(e, t) {
  let n = new Map();
  function r(e) {
    if (V(e))
      if (e.type === `Collection` && kf(e.data)) {
        let r = hp(e.data, t),
          i = mp(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (at(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function wp(e) {
  return e;
}
function Tp(e) {
  return e;
}
function Ep(e) {
  return e;
}
function Dp() {
  return 25;
}
function Op() {
  return 12500;
}
function kp(e) {
  return Array(e).fill({ type: `All` });
}
function Ap(e) {
  return e;
}
function jp(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new ZE(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Mp(e) {
  let t = new Set();
  if (!e) return t;
  jp(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (jp(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Np(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Np(n, t);
      return;
    case `object`:
      for (let n in e.value) Np(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Pp(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Fp(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Ip(e) {
  return `${e.functionName}(${e.arguments.map((e) => Vp(e)).join(`, `)})`;
}
function Lp(e) {
  let t = `CASE`;
  e.value && (t += ` ${Vp(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Vp(n.when)} THEN ${Vp(n.then)}`;
  return (e.else && (t += ` ELSE ${Vp(e.else)}`), (t += ` END`), t);
}
function Rp(e) {
  let t = Vp(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function zp(e) {
  let t = Vp(e.left),
    n = Vp(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Bp(e) {
  return `CAST(${Vp(e.value)} as ${e.dataType})`;
}
function Vp(e) {
  switch (e.type) {
    case `Identifier`:
      return Pp(e);
    case `LiteralValue`:
      return Fp(e);
    case `FunctionCall`:
      return Ip(e);
    case `Case`:
      return Lp(e);
    case `UnaryOperation`:
      return Rp(e);
    case `BinaryOperation`:
      return zp(e);
    case `TypeCast`:
      return Bp(e);
    case `Select`:
      return `${Kp(e)}`;
    default:
      U(e);
  }
}
function Hp(e) {
  return Nf(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Up(e) {
  let t = `${Wp(e.left)} LEFT JOIN ${Wp(e.right)}`;
  return (e.constraint && (t += ` ON ${Vp(e.constraint)}`), t);
}
function Wp(e) {
  switch (e.type) {
    case `Collection`:
      return Hp(e);
    case `LeftJoin`:
      return Up(e);
    default:
      U(e);
  }
}
function Gp(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Kp(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Vp(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Wp(e.from)}`),
    e.where && (t += ` WHERE ${Vp(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Vp(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Vp(e.limit)}`),
    e.offset && (t += ` OFFSET ${Vp(e.offset)}`),
    Gp(t)
  );
}
function qp(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(st(e) || V(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Jp(e) {
  let t = l(e);
  return (
    n(() => {
      t.current = e;
    }, [e]),
    Jr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function Yp(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Xp() {
  return new Set();
}
function Zp(e) {
  let t = Ia(Xp),
    n = Ia(Xp);
  return (
    rc(() => () => Yp(n, t)),
    c(() => () => Yp(n, t), []),
    c(() => {
      Yp(n, t);
    }, [e]),
    l({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Qp(e, t, n) {
  return M.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function $p(e) {
  for (let [t, n] of Object.entries(e)) if (av.matchMedia(n).matches) return t;
}
function em(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && av.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function tm(e, n, r = !0) {
  let i = t(KS),
    a = Lo(),
    o = Ma(),
    u = Fn() && (!a || o),
    d = l(u ? ($p(n) ?? e) : e),
    f = l(r && i ? e : d.current),
    p = ds(),
    h = ge(),
    g = s(
      (e) => {
        if (e !== d.current || e !== f.current) {
          let t = function () {
            ((d.current = f.current = e),
              m(() => {
                p();
              }));
          };
          a
            ? t()
            : h(() => {
                t();
              });
        }
      },
      [h, p, a]
    );
  return (
    oy(() => {
      if (a) {
        if (o) {
          g($p(n) ?? e);
          return;
        }
        g(e);
      }
    }, [e, o, a, n, g]),
    oy(() => {
      !r || i !== !0 || g(d.current);
    }, []),
    c(() => {
      if (!u || o) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = av.matchMedia(r),
          i = (e) => {
            e.matches && g(t);
          };
        (nm(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => rm(e, t));
    }, [o, n, g, u]),
    [d.current, f.current]
  );
}
function nm(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function rm(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function im(e) {
  setTimeout(e, 1);
}
function am(e) {
  let t = new Set(),
    n = em(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (om(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (w_ ? av.requestIdleCallback : im)(() => {
    document.querySelector(fD)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (om(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    sm(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function om(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function sm(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function cm(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function lm(e, t) {
  if (Io()) return;
  let n = M.useRef(!0),
    r = M.useRef(t);
  (rc((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = cm(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    M.useEffect(() => {
      if (n.current) {
        let t = cm(r.current, e);
        t && t();
      }
    }, [e]));
}
function um(e, t) {
  e !== !1 &&
    Qe.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function dm({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, r] = M.useState(!1),
    i = M.useCallback(
      async (t) => {
        (await Fv({ priority: `user-blocking`, continueAfter: `paint` }), m(() => r(t)), um(e, t));
      },
      [e]
    );
  return (
    M.useEffect(
      () => () => {
        Fv({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          um(e, !1);
        });
      },
      [e]
    ),
    M.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), i(!1));
      };
      return (av.addEventListener(`keydown`, e), () => av.removeEventListener(`keydown`, e));
    }, [t, i]),
    [n, i]
  );
}
function fm(e) {
  return V(e) && pD in e && e.page !== void 0;
}
function pm(e, t) {
  return `${e}-${t}`;
}
function mm(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (H(r !== void 0, `nextVariant should be defined`), r);
}
function hm(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function gm(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function _m(e, t) {
  return t[e] || `framer-v-${e}`;
}
function vm(e, t, n) {
  return e && n.has(e) ? e : t;
}
function ym() {
  let e = l(),
    t = l(),
    n = s(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
      () => () => {
        n();
      },
      [n]
    ),
    s(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function bm() {
  let e = l(),
    n = l(!1),
    r = l(),
    i = t(kS);
  return (
    c(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    s(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = Ys(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function xm(e) {
  let t = ym(),
    n = bm();
  return s(
    (r, i = !1) => {
      if (C_) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Sm() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (gD = () => {
        (e(), (t = void 0));
      }));
  });
}
function Cm(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (hD = Sm()));
}
function wm() {
  (performance.mark(`click-received-listener`), (hD = void 0), gD?.(), (gD = void 0));
}
function Tm(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, Cm, !0),
      document.__proto__.addEventListener.call(document, `click`, wm, !0));
  }, [e]);
}
function Em({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let u = ds(),
    d = uu(),
    f = Ia(() => new Set(i));
  Tm(Rv().yieldOnTap);
  let p = xm(c),
    h = l({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: vm(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    g = s((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = vm(e, a, f),
        s = gm(i?.[o], t, n, !1, r);
      return [o, s ? pm(o, s) : void 0];
    }, []),
    _ = s(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = Rv().yieldOnTap && h.current.isPressedHasUpdated;
        (c &&
          hD &&
          (performance.mark(`wait-for-tap-start`),
          await hD,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await Fv({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: _,
        } = h.current;
        if (l || f || d || _) {
          m(u);
          return;
        }
        p(() => m(u), i);
      },
      [g, u, p]
    ),
    v = s(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_]
    ),
    y = s(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === mD ? mm(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = s(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), p(() => m(u), !0));
    }, [u, p]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = h.current,
    A = Qp(h.current.baseVariant, h.current.gestureVariant, a);
  return C(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !k[x],
      r = n ? pm(x, `loading`) : S;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: hm(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: Jc(_m(x, o), gm(i, E, D, n, O)),
      }
    );
  }, [x, S, E, D, k, A, y, w, T, v, b, o]);
}
function Dm(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Hl()) return r(e);
  let a = Om(e, r),
    o = !1;
  function s(r, s) {
    let c = Gl(),
      { disableCustomCode: l } = Rv();
    if (l) return _(e, { ...r, ref: s });
    if ($l(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? _(iy.Provider, {
            value: n,
            children: _(Ul, {
              getErrorMessage: Xl.bind(null, t, n),
              fallback: _(e, { ...r, ref: s }),
              children: _(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Vl(a.error), Vl(Xl(t, n)), Bl(a.error), !0)), _(e, { ...r, ref: s }));
    if (a.status === `success`)
      return _(iy.Provider, { value: n, children: _(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return M.forwardRef(s);
}
function Om(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function km(e) {
  let t = [];
  return (
    p.forEach(e, (e) => {
      y(e) && e.type === u ? t.push(...km(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function Am(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function jm(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = Am(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[Ve(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Mm(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = Am(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[Ve(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function Nm() {
  let e = t(_D);
  return (qm(!!e, `useTicker must be used within a Ticker component`), e);
}
function Pm() {
  let e = t(vD);
  return (qm(!!e, `useTickerItem must be used within a TickerItem`), e);
}
function Fm(e, t) {
  return (t?.offsetWidth ?? N.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function Im(e, t) {
  return e === `y` ? xD : t === `ltr` ? bD : SD;
}
function Lm({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i = 0,
  itemIndex: a,
  cloneIndex: o,
  bounds: s,
  alignItems: c,
  reproject: l = !0,
  size: u = `auto`,
  safeMargin: d,
}) {
  let { start: f, end: p } = s,
    { visibleLength: m, direction: h, inset: g } = Nm(),
    { sign: v } = Im(n, h),
    y = ke(() => {
      if (!l) return 0;
      let e = t.get();
      if ((!f && !p) || !r) return 0;
      if (e * v + s.end <= -g - d) return r * v;
      if (d > 0) {
        let t = m - d - g;
        if (e * v + s.start >= t) return -r * v;
      }
      return 0;
    }),
    b = ke(() => {
      let e = t.get(),
        n = y.get();
      return (!f && !p) || !r ? 0 : e * v + f + n * v;
    }),
    x =
      o === void 0
        ? { "aria-hidden": !1, "aria-posinset": a + 1, "aria-setsize": i }
        : { "aria-hidden": !0 },
    S = u === `fill`,
    C = c === `stretch` ? `100%` : `fit-content`,
    w = {
      className: o === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: u === `fill` ? `100%` : void 0,
        display: S ? `grid` : void 0,
        gridTemplateColumns: S ? `1fr` : void 0,
        gridTemplateRows: S ? `1fr` : void 0,
        minWidth: S ? 0 : void 0,
        minHeight: S ? 0 : void 0,
        height: n === `x` ? C : void 0,
        width: n === `y` ? C : void 0,
        x: n === `x` ? y : 0,
        y: n === `y` ? y : 0,
      },
      ...x,
    };
  return _(vD.Provider, {
    value: { start: f, end: p, offset: b, projection: y, itemIndex: a, cloneIndex: o, props: w },
    children: u === `manual` ? e : _(Rm, { children: e }),
  });
}
function Rm({ children: e }) {
  let { props: t } = Pm();
  return _(I.li, { ...t, children: e });
}
function zm(e, t, n, r, i) {
  let a = l(!1);
  c(() => {
    let o = e.current;
    if (!o) return;
    let s = !1,
      c = new AbortController(),
      l = { signal: c.signal },
      u = { ...l, capture: !0 },
      d = t === `x` ? `scrollLeft` : `scrollTop`,
      f = t === `x` ? `offsetLeft` : `offsetTop`,
      p = t === `x` ? `ArrowLeft` : `ArrowUp`,
      m = t === `x` ? `ArrowRight` : `ArrowDown`,
      h = [],
      g = 0,
      _ = () => {
        let e = h[g];
        e &&
          (e.focus({ preventScroll: !0 }),
          n.set(-e[f]),
          (o[d] = 0),
          Qe.render(() => {
            o[d] = 0;
          }));
      },
      v = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), x());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(Vm);
          t.sort(Bm);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (o.contains(n)) {
            t[r].focus();
            return;
          } else {
            let n = t.indexOf(h[g]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!o.contains(n)) {
                n.focus();
                return;
              }
            }
          }
          return;
        } else e.key === p ? g-- : e.key === m && g++;
        ((g = Ve(0, h.length, g)), _());
      },
      y = () => {
        a.current ||
          ((h = Array.from(
            o.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(Vm)),
          (g = 0),
          h.length &&
            (i(!0),
            (a.current = !0),
            _(),
            N.addEventListener(`focus`, b, u),
            N.addEventListener(`blur`, b, u),
            o.addEventListener(`keydown`, v, l)));
      },
      b = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !o.contains(e.target)) && x();
      },
      x = () => {
        a.current &&
          ((a.current = !1),
          i(!1),
          r.set(n.get()),
          N.removeEventListener(`focus`, b),
          N.removeEventListener(`blur`, b),
          o.removeEventListener(`keydown`, v));
      },
      S = (e) => {
        let { target: t } = e;
        Vm(t) && (a.current || y());
      },
      C = () => {
        s || ((s = !0), o.addEventListener(`focus`, S, u), N.addEventListener(`pointermove`, w, l));
      },
      w = () => {
        s &&
          ((s = !1),
          o.removeEventListener(`focus`, S, !0),
          N.removeEventListener(`pointermove`, w, l));
      };
    return (
      N.addEventListener(`keydown`, C, l),
      o.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        l
      ),
      o.addEventListener(
        `scroll`,
        () => {
          ((o.scrollLeft = 0), (o.scrollTop = 0));
        },
        l
      ),
      () => {
        (c.abort(), x());
      }
    );
  }, []);
}
function Bm(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function Vm(e) {
  return e instanceof HTMLElement;
}
function Hm(e) {
  return e.end - e.start;
}
function Um(e) {
  return e[e.length - 1].end - e[0].start;
}
function Wm(e, t, n) {
  let r = Um(t),
    i = Math.max(...t.map(Hm)),
    a = 0,
    o = 0;
  for (; o < e;) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function Gm(
  {
    items: e,
    velocity: t = 50,
    hoverFactor: n = 1,
    gap: r = 10,
    axis: a = `x`,
    align: o = `center`,
    offset: c,
    isStatic: u = !1,
    itemSize: d = `auto`,
    overflow: f = !1,
    loop: p = !0,
    children: m,
    as: h = `div`,
    snap: g,
    safeMargin: v = 0,
    fade: y = 0,
    fadeTransition: b,
    pageTransition: x,
    ...S
  },
  w
) {
  let T = l(null),
    E = te(w, T),
    D = l(null),
    [O, k] = i({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    A = CD[o] || o,
    { sign: j } = Im(a, O.direction);
  if (u) {
    let t = ie(0);
    return _(_D.Provider, {
      value: { ...O, gap: r, clampOffset: fe, offset: t, renderedOffset: t },
      children: _(Km, {
        containerProps: S,
        containerRef: E,
        children: m,
        gap: r,
        axis: a,
        alignItems: A,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: d,
        state: O,
        overflow: f,
        safeMargin: v,
        isStatic: !0,
        as: h,
        fade: y,
        sign: j,
      }),
    });
  }
  let [M, ee] = i(!1),
    ne = ie(1),
    F = ie(0);
  c ??= F;
  let I = ke(() =>
      O.direction === `rtl` && a === `x`
        ? Ve(O.totalItemLength + r + O.inset, O.inset, c.get())
        : Ve(-O.totalItemLength - r - O.inset, -O.inset, c.get())
    ),
    re = ie(0),
    ae = M ? re : p ? I : c,
    oe = _e(T, { margin: `100px` }),
    se = Ge(),
    ce = oe && se,
    le = R(),
    ue = () => {
      if (!T.current || !D.current) return;
      let e = N.getComputedStyle(T.current).direction,
        { measureItem: t, lengthProp: n, viewportLengthProp: r, getCumulativeInset: i } = Im(a, e),
        o = a === `x` ? `paddingLeft` : `paddingTop`,
        s = a === `x` ? `paddingRight` : `paddingBottom`,
        c = T.current,
        l = D.current.querySelectorAll(`.ticker-item`);
      if (!l.length) return;
      let u = !1,
        d = [];
      for (let e = 0; e < l.length; e++) {
        let n = t(l[e], c);
        d.push(n);
        let r = O.itemPositions[e];
        (!r || n.start !== r.start || n.end !== r.end) && (u = !0);
      }
      let m = Math.min(c[n], N[r]),
        h = f ? N[r] : m;
      v > 0 && (h += v * 2);
      let g = Um(d),
        _ = N.getComputedStyle(c),
        y = parseInt(_[o] ?? 0),
        b = parseInt(_[s] ?? 0),
        x = f ? i(l[0]) : y,
        S = p === !1 ? Math.max(0, g - m + y + b) : null;
      (h !== O.visibleLength ||
        g !== O.totalItemLength ||
        x !== O.inset ||
        O.itemPositions.length !== d.length ||
        u) &&
        k({
          direction: e,
          visibleLength: h,
          itemPositions: d,
          totalItemLength: g,
          inset: x,
          containerLength: m,
          maxInset: S,
          isMeasured: !0,
        });
    };
  ve(() => {
    if (!ce || !T.current) return;
    ue();
    let e = f ? P(ue) : void 0,
      t = P(T.current, ue);
    return () => {
      (e?.(), t());
    };
  }, [e, ce, f]);
  let de = O.totalItemLength > 0;
  nt(
    de && ce && c === F && !le
      ? (e, n) => {
          let r = (n / 1e3) * (t * j * ne.get());
          c.set(c.get() - r);
        }
      : fe
  );
  let pe = C(
      () => (!de || !O.visibleLength ? 0 : Wm(O.visibleLength, O.itemPositions, r)),
      [de, O]
    ),
    me = O.totalItemLength === 0 ? 0 : (O.totalItemLength + r) * (pe + 1),
    L = [];
  if (p)
    for (let t = 0; t < pe; t++) {
      let n = [];
      e.forEach((i, o) => {
        let s = O.itemPositions[o],
          c = (O.totalItemLength + r) * (t + 1),
          l = s ? { start: s.start + c, end: s.end + c } : TD;
        n.push(
          _(
            Lm,
            {
              offset: ae,
              axis: a,
              listSize: me,
              itemIndex: o,
              cloneIndex: o,
              bounds: l,
              alignItems: A,
              size: d,
              safeMargin: v,
              numItems: e.length,
              children: i,
            },
            `clone-${t}-${o}`
          )
        );
      });
      let i = `ticker-group-${t}`;
      L.push(_(Se, { id: i, children: n }, i));
    }
  zm(T, a, re, c, ee);
  let he = s((e) => (O.maxInset === null ? e : xe(-O.maxInset, 0, e)), [O.maxInset]);
  return _(_D.Provider, {
    value: { ...O, gap: r, clampOffset: he, offset: c, renderedOffset: ae },
    children: _(Km, {
      containerProps: S,
      children: m,
      containerRef: E,
      listRef: D,
      gap: r,
      axis: a,
      alignItems: A,
      isMeasured: de,
      isInView: ce,
      offset: c,
      renderedOffset: ae,
      items: e,
      itemSize: d,
      clonedItems: L,
      clampOffset: he,
      snap: g,
      safeMargin: v,
      onPointerEnter: () => {
        Be(ne, n);
      },
      onPointerLeave: () => {
        Be(ne, 1);
      },
      totalListSize: me,
      state: O,
      overflow: f,
      loop: p,
      as: h,
      fade: y,
      sign: j,
      fadeTransition: b,
      pageTransition: x,
    }),
  });
}
function Km({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: o,
  isMeasured: s,
  isInView: c,
  isStatic: u,
  items: d,
  offset: f,
  clonedItems: p,
  clampOffset: m,
  renderedOffset: h,
  onPointerEnter: g,
  onPointerLeave: v,
  totalListSize: y,
  itemSize: b,
  overflow: x,
  state: S,
  safeMargin: w,
  snap: E,
  loop: D,
  as: k,
  fade: A,
  sign: j,
  fadeTransition: M = OD,
  pageTransition: N,
}) {
  let ee = C(() => I.create(k), [k]),
    P = {},
    { maxInset: te } = S;
  te !== null &&
    (P =
      a === `x`
        ? j > 0
          ? { left: te * -1, right: 0 }
          : { right: te, left: 0 }
        : { top: te * -1, bottom: 0 });
  let {
      drag: ne,
      _dragX: F,
      _dragY: re,
      dragMomentum: ae = !1,
      onDragEnd: oe,
      onPointerDown: se,
      ...le
    } = t,
    ue = a === `x` ? F : re,
    de = l(null),
    fe = () => {
      de.current &&= (de.current.stop(), null);
    };
  !oe &&
    ne &&
    ue &&
    ((se = () => {
      (ue.jump(f.get()), fe());
    }),
    (oe = (e, { velocity: t }) => {
      let n = f.get();
      (fe(),
        Qe.postRender(() => {
          let e = n + t[a] * (E ? 0.3 : 0.8);
          if (E)
            if (t[a] < 0) e = -jm(-n, S.itemPositions, i, -e);
            else if (t[a] > 0) e = -Mm(-n, S.itemPositions, i, -e, S.containerLength);
            else {
              let t = -jm(-n, S.itemPositions, i, -n),
                r = -Mm(-n, S.itemPositions, i, -n, S.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          let r = D
            ? {}
            : j > 0
              ? { max: 0, min: P[a === `x` ? `left` : `top`] }
              : { min: 0, max: P.right };
          de.current = Be(
            ue,
            m(e * j) * j,
            E
              ? N
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let pe = ie(+!D),
    me = ie(0),
    L = Im(a, S.direction),
    he = typeof A == `number` ? `px` : ``,
    ge = ke(
      () =>
        `linear-gradient(to ${L.direction}, rgba(0,0,0,${pe.get()}) 0px, black ${A}${he}, black calc(100% - ${A}${he}), rgba(0,0,0,${me.get()}) 100%)`
    ),
    _e = A ? { maskImage: ge, WebkitMaskImage: ge } : {},
    ve = l({ start: !0, end: !1 });
  return (
    ce(h, `change`, (e) => {
      if (te === null) return;
      let t = te * -1;
      ((e *= j),
        e < 0
          ? ve.current.start && (Be(pe, 0, M), (ve.current.start = !1))
          : ve.current.start || (Be(pe, 1, M), (ve.current.start = !0)),
        e > t
          ? ve.current.end && (Be(me, 0, M), (ve.current.end = !1))
          : ve.current.end || (Be(me, 1, M), (ve.current.end = !0)));
    }),
    T(O, {
      children: [
        _(ee, {
          ...le,
          ref: n,
          style: {
            overflowX: !x && a === `x` ? `clip` : void 0,
            overflowY: !x && a === `y` ? `clip` : void 0,
            ...ED,
            ...t.style,
            ..._e,
          },
          onPointerEnter: g,
          onPointerLeave: v,
          drag: ne,
          _dragX: F,
          _dragY: re,
          dragConstraints: P,
          dragMomentum: ae,
          onPointerDown: se,
          onDragEnd: oe,
          children: T(I.ul, {
            ref: r,
            style: {
              ...DD,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? h : 0,
              y: a === `y` ? h : 0,
              opacity: s || u ? 1 : 0,
              alignItems: o,
              willChange: s && c ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              d.map((e, t) =>
                _(
                  Lm,
                  {
                    axis: a,
                    offset: h,
                    listSize: y,
                    itemIndex: t,
                    bounds: S.itemPositions[t] ?? TD,
                    alignItems: o,
                    size: b,
                    reproject: D,
                    safeMargin: w,
                    numItems: d.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              p || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function qm(e, t) {
  if (!e) throw Error(t);
}
function Jm(e, t) {
  if (W(e)) return e;
  if (!z(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return Ym(parseInt(i));
  if (t === `y` && r) return Ym(parseInt(r));
}
function Ym(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function Xm(e, t, n) {
  let r = [],
    i = yl(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!B(e)) return ID;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return B(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : ID;
}
function Zm(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Qm(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${GD[e]}` : `${GD[e]} ${n}`;
}
function $m() {
  return N === void 0 ? (qD ?? {}) : qD || ((qD = eh()), qD);
}
function eh() {
  let e = N.location,
    t = N?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = N.top.location.origin), (t = N.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function th(e) {
  return e.key + e.extension;
}
function nh(e) {
  return `${$m().userContent}/assets/${e}`;
}
function rh(e) {
  return nh(th(e));
}
function ih(e, t) {
  return t ? `${e} ${JD}` : e;
}
function ah(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return ih(e.name, e.isVariable);
  }
}
function oh(e) {
  return !!(e && Array.isArray(e));
}
function sh(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    lh(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function ch(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function lh(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function uh(e) {
  return ZD[fh(e)];
}
function dh(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? uh(`variable`) ?? 500);
}
function fh(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function ph(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function mh(e, t) {
  return { ...hh(e, t), ...gh(e, t) };
}
function hh(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function gh(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function _h(e) {
  return !!e.variationAxes;
}
function vh(e) {
  return yh(e) || bh(e);
}
function yh(e) {
  return e.startsWith(eO);
}
function bh(e) {
  return e.startsWith($D);
}
function xh(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function Sh(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? JD : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function Ch({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = sh(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function wh(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: _h(e), selector: e.selector };
}
function Th(e) {
  let t = e.fonts.map((e) => wh(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = wh(n);
    if (!e) continue;
    let r = mh(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function Eh(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function Dh(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function Oh(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function kh(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-YSYBFRE6.BZ57zP5h.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-TIA7QUPT.CjCmvCKY.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function Ah(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-H6SFY4F5.5HW9yzMR.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-PZLWRK4B.CuFl42Lb.mjs`)).default;
    case `framer`:
      return (await import(`./framer-font-RD2SUPQH.BV4yRwNx.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function jh(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(Mh);
}
function Mh(e) {
  return nO.includes(e);
}
function Nh(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = jh(e)[0];
  return n && t[n];
}
function Ph(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function Fh(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function Ih(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function Lh(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function Rh(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = Ih(r, c, s, i);
  if (!vO.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: z(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), bO.set(l, { fontFace: u, doc: t }), zh(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < gO) return Rh(e, t, n + 1);
          throw new _O(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    vO.set(l, d);
  }
  await vO.get(l);
}
async function zh(e, t, n) {
  let r = Lh(e, t, n);
  if (!yO.has(r)) {
    let i = new mO.default(e, { style: t, weight: n }).load(null, hO);
    yO.set(r, i);
  }
  try {
    await yO.get(r);
  } catch {
    throw new _O(
      `Failed to check if font is ready (${hO}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function Bh(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = Ih(n, t, i, r),
    o = bO.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), bO.delete(a)), vO.delete(a), yO.delete(Lh(n, t, i)));
}
function Vh(e) {
  try {
    if (e === `framer`) return Hh(SO) ? SO : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-EGNT223R.4Zga1324.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-SXU5BGFE.DwUZJPwH.mjs`)).default;
          default:
            U(e);
        }
      })();
      return Hh(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Hh(e) {
  return V(e) && Object.values(e).every(Wh);
}
function Uh(e) {
  return V(e) && z(e.tag);
}
function Wh(e) {
  return Array.isArray(e) && e.every(Uh);
}
function Gh(e, t, n, r = TO) {
  let [i, a] = M.useState(e),
    [o, s] = M.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      M.useCallback(
        (e) => {
          mi(e) ||
            (t && a(r(e)),
            n &&
              M.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function Kh(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function qh() {
  return _(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: _(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function Jh(e) {
  return e === void 0 ? `__undefined__` : B(e) ? String(e) : e === `` ? `__empty__` : e;
}
function Yh(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (N.addEventListener(`keyup`, n), () => N.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function Xh(e, t, n, r) {
  let i = N.innerHeight - r,
    a = Math.min(N.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Zh(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new N.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Qh() {
  return document.getElementById(Ow) ?? document.getElementById(Dw) ?? document.body;
}
function $h(e, t) {
  return B(e) ? e : (t ?? 0);
}
function eg(e) {
  return $h(e?.paddingTop, e?.padding) + $h(e?.paddingBottom, e?.padding);
}
function tg(e) {
  return $h(e?.paddingLeft, e?.padding) + $h(e?.paddingRight, e?.padding);
}
function ng(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - tg(e)}px)`,
      srcSet: Uo(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function rg(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in HO)) continue;
    let n = HO[t],
      r = e[t];
    if (!(!B(n) || !B(r)) && n !== r) return !0;
  }
  return !1;
}
function ig(e) {
  let t = Ye.get(e.current);
  if (!t) return !1;
  if (rg(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (rg(e.latestValues)) return !0;
  return !1;
}
function ag(e) {
  return b(function ({ lightbox: n, lightboxClassName: r, onClick: a, ...o }, d) {
    let f = t(qe),
      p = t(jD),
      h = !!p,
      g = l(null),
      v = d ?? g,
      y = l(),
      b = C(() => ng(n, o.background), [n, o.background]),
      [x, w] = i(!1),
      [E, D] = i(),
      k = s(() => {
        if (n) {
          if (x) {
            m(() => {
              w(!0);
            });
            return;
          }
          Qe.read(() => {
            if (!v.current) return;
            let e = getComputedStyle(v.current),
              t =
                v.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(v.current, `::after`)
                  : void 0,
              r = v.current.offsetWidth ?? 1,
              i = v.current.offsetHeight ?? 1,
              a = ig(v) || h ? { duration: 0 } : n.transition;
            m(() => {
              (D({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                w(!0),
                p?.stop());
            });
          });
        }
      }, [n, x, v, p?.stop, h]),
      j = E?.aspectRatio ?? 1,
      M = Jp(() => {
        if (!n || !b || !b.src) return;
        let e = y.current?.[b.src];
        if (e) return e;
        let t = Xh(j, n.maxWidth, tg(n), eg(n)),
          r = Zh(b, { width: t, height: t * j });
        return ((y.current = { [b.src]: r }), r);
      }),
      N = s(
        async (e) => {
          (a?.(e), !(x || !n || !b) && (await M(), k()));
        },
        [a, k, x, b, n, M]
      ),
      ee = s((e) => {
        (e?.stopPropagation(),
          m(() => {
            w(!1);
          }));
      }, []);
    (Yh(x, ee),
      c(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            M();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = v.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, M),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, M));
          }
        );
      }, [M, v, n]));
    let P = A(),
      te = E?.transition ?? o.transition ?? f.transition,
      ne = E?.borderRadius,
      F = E?.imageRendering,
      re = E?.filter,
      ie = E?.borderTop,
      ae = E?.borderRight,
      oe = E?.borderBottom,
      se = E?.borderLeft,
      ce = E?.borderStyle,
      le = E?.borderColor,
      ue = !!(ie || ae || oe || se || ce || le),
      de = ue
        ? {
            "--border-top-width": ie,
            "--border-right-width": ae,
            "--border-bottom-width": oe,
            "--border-left-width": se,
            "--border-style": ce,
            "--border-color": le,
          }
        : void 0,
      fe = { [pw]: o.id },
      pe = $h(n?.paddingTop, n?.padding),
      me = $h(n?.paddingBottom, n?.padding),
      L = $h(n?.paddingLeft, n?.padding),
      he = $h(n?.paddingRight, n?.padding),
      ge = E?.borderRadius ? { ...o.style, borderRadius: E.borderRadius } : o.style,
      _e = x ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      ve = h && x ? void 0 : (o.layoutId ?? (n ? P : void 0));
    return T(O, {
      children: [
        _(e, {
          ...o,
          style: ge,
          onClick: N,
          layoutId: ve,
          ref: v,
          layoutDependency: _e,
          transition: te,
        }),
        _(Pe, {
          onExitComplete: () => {
            m(() => {
              (D(void 0), p?.start());
            });
          },
          children:
            x &&
            n &&
            b &&
            _(
              u,
              {
                children: S(
                  T(O, {
                    children: [
                      _(I.div, {
                        ...fe,
                        className: r,
                        onClick: ee,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: te,
                        initial: UO,
                        animate: WO,
                        exit: UO,
                      }),
                      _(I.div, {
                        ...fe,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${pe}px ${he}px ${me}px ${L}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: _(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: j,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: _(I.div, {
                            layoutId: ve,
                            transition: te,
                            onClick: k,
                            className: `framer-lightbox-container`,
                            "data-border": ue,
                            style: {
                              aspectRatio: j,
                              borderRadius: ne,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: F,
                              filter: re,
                              ...de,
                            },
                            children: _(Qo, { image: b, alt: b.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Qh()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function og(e, t) {
  return qO && !t
    ? Document.parseHTMLUnsafe(e)
    : ((KO ??= new DOMParser()), KO.parseFromString(e, t ?? `text/html`));
}
function sg(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function cg(e, t, n, r) {
  return e.replace(JO, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = hu(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!fm(f) || !fm(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Ut(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = _u(u);
    if (!_ || z(_)) return e;
    Fu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(Aw, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = ri(m, v)), i + o + `"${sg(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function lg(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function ug(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function dg(e, t, n) {
  let r = l([]);
  lg(r.current, e) ||
    ((r.current = e),
    wO.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || J.current() !== J.canvas || (e > 0 && _s(n.current));
    }));
}
function fg() {
  return { current: null };
}
async function pg(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function mg(e) {
  return e in QO;
}
function hg(e, t) {
  let n = {};
  for (let r in e) {
    if (!mg(r)) continue;
    let i = e[r],
      a = QO[r];
    st(i) || st(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function gg(e, t = `character`, n, r, i) {
  if (r) {
    let t = fg();
    return (n.add(t), _(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return T(
          u,
          {
            children: [
              _(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match($O)?.map((e, t) => {
                  let r = fg();
                  return (n.add(r), _(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = fg();
        return (
          n.add(o),
          T(
            u,
            { children: [_(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function _g(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      U(t);
  }
}
function vg(e) {
  let t = [];
  return (
    B(e.x) && t.push(`translateX(${e.x}px)`),
    B(e.y) && t.push(`translateY(${e.y}px)`),
    B(e.scale) && t.push(`scale(${e.scale})`),
    B(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    B(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    B(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    B(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    B(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function yg(e, t, n, r) {
  if (!n || !n.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : vg(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : vg(n.effect),
              };
      }
    default:
      U(i);
  }
}
function bg(e, t, n) {
  let r = Ia(() => new Set()),
    i = Io(),
    a = n || !i,
    o = ye(),
    s = l({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let u = e?.trigger ?? `onMount`,
    d = e?.target,
    f = e?.threshold;
  c(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            Sg(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          U(t);
      }
    }
    switch (u) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? tt(n, e, { amount: f ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = d?.ref?.current;
        return t
          ? tt(t, e, {
              amount: f ?? 0,
              root: document,
              margin: d?.offset ? `${d.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        U(u);
    }
  }, [a, r, n, t, d, f, u]);
  let p = !!e,
    m = e ? _g(e) : void 0;
  return C(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = yg(a, n || xg(e, t, i), s.current.effect, o);
        return {
          text: (e) => gg(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = fg();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Sg(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            U(t);
        }
      },
    }),
    [a, p, r, n, m]
  );
}
function xg(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Sg(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = hg(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await Cg(n, u);
      if (
        e === null ||
        (Be(e, l, { ...r, restDelta: 0.001, delay: pe(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Be(e, n, { ...r, restDelta: 0.001, delay: pe(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await pg(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Qe.read(() => {
          ((e = wg(n)),
            e.length !== 0 &&
              Qe.update(() => {
                let t = e.map((e, t) =>
                  Be(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Be(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      U(e);
  }
}
async function Cg(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await pg(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function wg(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function Tg(e) {
  let t = {};
  for (let n in e) ($e(n) || zx(n)) && (t[n] = e[n]);
  return t;
}
function Eg(e) {
  return e.type === u;
}
function Dg(e) {
  return e.type === `br`;
}
function Og(e, t, n, r, i = {}, a, o = Eg(e) ? -1 : 0) {
  let s = p.toArray(e.props.children);
  st(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!y(e) || !Dg(e)) && (c = !1), y(e))) return Og(e, t, n, r, i, a, o + 1);
    let s = st(n) ? e : n;
    return z(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...u } = e.props;
  if (z(e.type) || he(e.type)) {
    let n = le(e.type) || e.type,
      d = l || n,
      f = z(d) ? t?.[d] : void 0;
    ((u.className = Jc(`framer-text`, u.className, f)),
      a && o === 0 && !c && Object.assign(u, a.props(u.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = kg(s, i);
      u.id = e;
      let t = Jc(`framer-text`, h),
        n = _(`a`, { href: `#${e}`, className: t, children: s });
      ((u.style = { ...(u.style ?? {}), scrollMarginTop: r }), (s = [n]));
    }
    d === `ol` &&
      (u.style = {
        ...(u.style ?? {}),
        [hx]: jg(u.start ?? 1, p.count(u.children), u.style?.[mx] ?? ``),
      });
  }
  return w(e, u, ...s);
}
function kg(e, t) {
  let n = Wr(e.map(Ag).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function Ag(e) {
  return z(e) || B(e)
    ? e.toString()
    : y(e)
      ? Ag(e.props.children)
      : Array.isArray(e)
        ? e.map(Ag).join(``)
        : ``;
}
function jg(e, t, n) {
  return yo(Number(e) || 1, t, n);
}
function Mg(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Ji(n.x, n.y),
    i = Nb(Ji(0.5, 0.5), r),
    a = Y.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Ji.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  H(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Ji.isEqual(e, s) && !Ji.isEqual(e, c));
  H(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Nb.intersection(i, Nb(s, c)),
    f = Nb.intersection(i, Nb(l, u));
  return (H(d && f, `linearGradientLine: Must have a start and end point.`), Nb(d, f));
}
function Ng(e, t) {
  let n = Mg(e.angle),
    r = Es(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Nb.pointAtPercentDistance(n, i),
    s = Nb.pointAtPercentDistance(n, a),
    c = et([i, a], [0, 1]);
  return {
    id: `id${t}g${mS.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: cS.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function Pg(e, t) {
  return {
    id: `id${t}g${gS.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Es(e).map((t) => ({
      color: t.value,
      alpha: cS.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function Fg(e) {
  if (!z(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return B(parseFloat(t));
}
function Ig(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return B(n) ? n : 50;
}
function Lg(e) {
  return Fg(e) ? Ig(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Rg(e) {
  return Fg(e) ? Ig(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function zg(e, t, n, r) {
  if (((e = nb.get(e, `#09F`)), !Zx.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * Lg(e.positionX) + f),
        (d = (t.height - l) * Rg(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Rg(e.positionY)))
        : ((n = g), (u = (1 - g) * Lg(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function Bg(e) {
  return e.startsWith(`data:${sk}`);
}
function Vg(e, t) {
  if (/^\w+:/u.test(e) && !Bg(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = J.current() === J.export;
  return Wx.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Hg(e) {
  try {
    let t = og(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function Ug(e, t) {
  Gg(e, Wg(t));
}
function Wg(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Gg(e, t) {
  (Kg(e, t),
    Array.from(e.children).forEach((e) => {
      Gg(e, t);
    }));
}
function Kg(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function qg(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (mk[t[2]] || 1));
}
function Jg(e) {
  let t = qg(e.getAttribute(`width`)),
    n = qg(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Yg(e) {
  return e.indexOf(`image`) >= 0;
}
function Xg(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Zg(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Qg(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? av,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = pk.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Qa(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    W(s) &&
    W(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function $g({ height: e, width: t, children: n }) {
  let r = e_();
  if (!r || !n) return n;
  let { props: i } = r;
  return _(I.li, {
    ...i,
    style: { ...i.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: n,
  });
}
function e_() {
  try {
    return Pm();
  } catch {
    return;
  }
}
function t_(e) {
  return e > yk ? `lazy` : void 0;
}
function n_(e, t, n) {
  let r = a_(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function r_(e) {
  return e ? (e.fonts ?? Di()) : Di();
}
function i_(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : a_(e);
}
function a_(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    o_(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(s_) })
      : t.fonts.push(s_(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function o_(e) {
  return bk in e;
}
function s_(e) {
  let t = c_(e) || l_(e) ? e : u_(e);
  return l_(t) ? t : d_(t);
}
function c_(e) {
  return `source` in e;
}
function l_(e) {
  return `cssFamilyName` in e;
}
function u_(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function d_(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${JD}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function f_(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function p_(e) {
  return e.loader;
}
function m_(e, t, n) {
  let r = p_(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  q,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  J,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Y,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  X,
  $b,
  ex,
  tx,
  nx,
  Z,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  Q,
  QT,
  $T,
  eE,
  tE,
  nE,
  $,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  xO,
  SO,
  CO,
  wO,
  TO,
  EO,
  DO,
  OO,
  kO,
  AO,
  jO,
  MO,
  NO,
  PO,
  FO,
  IO,
  LO,
  RO,
  zO,
  BO,
  VO,
  HO,
  UO,
  WO,
  GO,
  KO,
  qO,
  JO,
  YO,
  XO,
  ZO,
  QO,
  $O,
  ek,
  tk,
  nk,
  rk,
  ik,
  ak,
  ok,
  sk,
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk,
  hk,
  gk,
  _k,
  vk,
  yk,
  bk,
  xk = e(() => {
    (o(),
      we(),
      je(),
      j(),
      D(),
      h(),
      (h_ = Fe({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
                (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
                (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
            }
            luvToLch() {
              if (
                ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8)
              )
                this.lch_h = 0;
              else {
                let e = Math.atan2(this.luv_v, this.luv_u);
                ((this.lch_h = (e * 180) / Math.PI),
                  this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
              }
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
                let e = this.calcMaxChromaHsluv(this.hsluv_h);
                this.lch_c = (e / 100) * this.hsluv_s;
              }
              this.lch_h = this.hsluv_h;
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
                let e = this.calcMaxChromaHpluv();
                this.lch_c = (e / 100) * this.hpluv_p;
              }
              this.lch_h = this.hpluv_h;
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (g_ = Fe({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (__ = Fe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (v_ = Fe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = __();
        },
      })),
      (y_ = Fe({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = v_(),
            r = {
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
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (b_ = Fe({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= N),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (p(e) && /Apple/.test(N.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        N.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function p(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function m(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (p(a.context) && !f(a.context)) {
                  var h = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(m(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    g = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([g, h]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (_ != -1 && v != -1) || (_ != -1 && y != -1) || (v != -1 && y != -1)) &&
                        ((t = _ != v && _ != y && v != y) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              N.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((_ == b && v == b && y == b) ||
                              (_ == x && v == x && y == x) ||
                              (_ == S && v == S && y == S)))),
                        (t = !t)),
                        t &&
                          (C.parentNode !== null && C.parentNode.removeChild(C),
                          clearTimeout(l),
                          e(a)));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        (C.parentNode !== null && C.parentNode.removeChild(C),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((_ = p.g.offsetWidth),
                          (v = h.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50)));
                      }
                    }
                    var p = new r(s),
                      h = new r(s),
                      g = new r(s),
                      _ = -1,
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = document.createElement(`div`);
                    ((C.dir = `ltr`),
                      i(p, m(a, `sans-serif`)),
                      i(h, m(a, `serif`)),
                      i(g, m(a, `monospace`)),
                      C.appendChild(p.g),
                      C.appendChild(h.g),
                      C.appendChild(g.g),
                      a.context.document.body.appendChild(C),
                      (b = p.g.offsetWidth),
                      (x = h.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      f(),
                      o(p, function (e) {
                        ((_ = e), n());
                      }),
                      i(p, m(a, `"` + a.family + `",sans-serif`)),
                      o(h, function (e) {
                        ((v = e), n());
                      }),
                      i(h, m(a, `"` + a.family + `",serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, m(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((N.FontFaceObserver = s),
                  (N.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (x_ = () => {}),
      (S_ = N !== void 0),
      (C_ =
        S_ &&
        (d.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(d.userAgent))),
      (w_ = S_ && typeof N.requestIdleCallback == `function`),
      (T_ = w_ ? N.requestIdleCallback : setTimeout),
      (E_ = () => x_),
      (D_ = () => !0),
      (O_ = () => !1),
      (k_ = new Map()),
      (A_ = new Map()),
      (j_ = new Set()),
      (M_ = `:`),
      (N_ = S_ ? void 0 : new Set()),
      (P_ = `preload`),
      (F_ = Object.keys),
      (I_ = `equals`),
      (L_ = M.createContext({})),
      (R_ = M.createContext({})),
      (z_ = []),
      (B_ = `default`),
      (V_ = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (H_ = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && vt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = V_.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === V_.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === V_.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== V_.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && N_ !== void 0 && N_.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = V_.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = V_.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && k_.has(this.cacheHash) ? k_.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!pt(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === V_.Fulfilled) return this.value;
          throw this.promiseState === V_.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (U_ = -1),
      (W_ = -2),
      (G_ = -3),
      (K_ = -4),
      (q_ = -5),
      (J_ = -6),
      (Y_ = -7),
      (X_ = 2 ** 32 - 1),
      (Z_ = X_ - 1),
      (Q_ = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      ($_ = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (ev = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (tv = typeof Uint8Array.fromBase64 == `function`),
      (nv = typeof process == `object` && process.versions?.node !== void 0),
      (rv = tv ? rn : nv ? on : cn),
      (iv = tv ? an : nv ? sn : ln),
      (av = S_
        ? N
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (ov = 2),
      (sv = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (cv = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (uv = class {
        payload = _n();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return fn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (dv = S_ ? void 0 : new uv()),
      (fv = cv.CollectionUtilsCache),
      (pv = new WeakMap()),
      (mv = a(void 0)),
      (hv = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new H_(async () => {
              try {
                let t = await e();
                return (H(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(gt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = xn(n),
            i = Sn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (dv !== void 0) {
              if (pt(e)) return e.then((e) => (dv.set(fv, i, e), e));
              dv.set(fv, i, e);
            }
            return e;
          }
          if (yn(fv, i)) {
            let e = bn(fv, i);
            return (this.cacheMap.set(i, new H_(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = pt(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(gt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (dv !== void 0 && dv.set(fv, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new H_(() =>
            s
              .then((e) => (dv !== void 0 && dv.set(fv, i, e), e))
              .catch((e) => {
                console.error(gt(`Failed to call CollectionUtils method.`, e));
              })
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (gv = /Mac/u),
      (_v = /iPhone|iPod|iPad/iu),
      (vv = /MacIntel/iu),
      (yv = /Edg\//u),
      (bv = /Chrome/u),
      (xv = /Google Inc/u),
      (Sv = /Safari/u),
      (Cv = /Apple Computer/u),
      (wv = /Firefox\/\d+\.\d+$/u),
      (Tv = /Version\/([\d.]+)/u),
      (Ev = /FramerX/u),
      (Dv = /tablet|iPad|Nexus 9/iu),
      (Ov = /mobi/iu),
      (kv = 1e3 / 60),
      (Av = 1e3 / 25),
      (jv = 500),
      (Mv = Promise.resolve()),
      (Nv = 100),
      (Pv = (e) => {
        Qe.read(e, !1, !0);
      }),
      (Fv = Kn(Pv)),
      (Iv = !C_),
      (Lv = {}),
      (Rv = () => Lv),
      (zv = (e) => {
        Lv = e;
      }),
      (Bv = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Vv = `framer_variant`),
      (Hv = !1),
      (Uv = M.createContext({ global: void 0, routes: {} })),
      (Wv = 10),
      (Gv = 1e4),
      (Kv = (e) => `--view-transition-${e}`),
      (qv = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Kv(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Kv(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${Kv(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Jv = {
        circle: {
          makeKeyframe: (e, t) => `${Kv(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Kv(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${dr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Kv(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: qv,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${ur(e.x)} ${ur(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = cr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Kv(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Kv(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Kv(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Kv(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Kv(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Kv(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (Yv = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Xv = `view-transition-styles`),
      (Zv = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Qv = () => {}),
      (ey = () => {
        ($v ||
          (($v = document.createElement(`div`)),
          $v.setAttribute(`aria-live`, `assertive`),
          $v.setAttribute(`aria-atomic`, `true`),
          ($v.style.position = `absolute`),
          ($v.style.transform = `scale(0)`),
          document.body.append($v)),
          setTimeout(() => {
            $v.textContent = document.title;
          }, 60));
      }),
      (ny =
        S_ &&
        typeof N.navigation?.back == `function` &&
        !(() => {
          if (d === void 0) return !1;
          let e = d.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !Nn()),
      (ry = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (iy = M.createContext(null)),
      (ay = (() => {
        let e = a(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (oy = typeof document < `u` ? f : c),
      (sy = async () => {}),
      (cy = { activeLocale: null, locales: [], setLocale: sy }),
      (ly = (() => {
        let e = M.createContext(cy);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (uy = (() => {
        let e = M.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (dy = new Set()),
      (fy = (() => {
        let e = a({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (py = 46),
      (my = 47),
      (hy = (e, t) => e.charCodeAt(t)),
      (gy = (e, t) => e.lastIndexOf(t)),
      (_y = (e, t, n) => e.slice(t, n)),
      (vy = !1),
      (yy = `/`),
      (by = (e) => e === my),
      (xy = new Set([`/404.html`, `/404`, `/404/`])),
      (Sy = `__f_replay`),
      (Cy = `__f_replay_ignore`),
      (wy = () => S_),
      (Ty =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Ey = (e) => {
        e.target?.closest?.(`#main`) &&
          (pi(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Dy = !1),
      (Wy = [vi]),
      (Uy = [vi]),
      (Hy = [vi]),
      (Vy = [vi]),
      (By = [vi]),
      (zy = [vi]),
      (Ry = [vi]),
      (Ly = [vi]),
      (Iy = [vi]),
      (Fy = [vi]),
      (Py = [vi]),
      (Ny = [vi]),
      (My = [vi]),
      (jy = [vi]),
      (Ay = [vi]),
      (ky = [vi]),
      (Oy = [vi]),
      (Ky = class {
        constructor() {
          (ze(Gy, 5, this),
            Ee(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            Ee(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            Ee(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            Ee(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            Ee(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            Ee(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            Ee(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            yi(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            yi(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            yi(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            yi(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            yi(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            yi(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            yi(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          yi(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          yi(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (Gy = Je(null)),
      Ce(Gy, 1, `markRenderStart`, Wy, Ky),
      Ce(Gy, 1, `markRenderEnd`, Uy, Ky),
      Ce(Gy, 1, `markUseInsertionEffectsStart`, Hy, Ky),
      Ce(Gy, 1, `markUseInsertionEffectRouterStart`, Vy, Ky),
      Ce(Gy, 1, `markUseInsertionEffectsEnd`, By, Ky),
      Ce(Gy, 1, `markUseLayoutEffectsStart`, zy, Ky),
      Ce(Gy, 1, `markRouterUseLayoutEffectStart`, Ry, Ky),
      Ce(Gy, 1, `markUseLayoutEffectsEnd`, Ly, Ky),
      Ce(Gy, 1, `markUseEffectsStart`, Iy, Ky),
      Ce(Gy, 1, `markUseEffectsRouterStart`, Fy, Ky),
      Ce(Gy, 1, `markUseEffectsAreSynchronous`, Py, Ky),
      Ce(Gy, 1, `markUseEffectsEnd`, Ny, Ky),
      Ce(Gy, 1, `markRafStart`, My, Ky),
      Ce(Gy, 1, `markRafEnd`, jy, Ky),
      Ce(Gy, 1, `markLayoutStylePaintEnd`, Ay, Ky),
      Ce(Gy, 1, `measureMutationEffects`, ky, Ky),
      Ce(Gy, 1, `measureUnattributedHydrationOverhead`, Oy, Ky),
      Ue(Gy, Ky),
      (Jy = !1),
      (Yy = { Start: wi, End: Ti }),
      (Xy = class extends Error {}),
      (Zy = class extends v {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof Xy)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Ei(e, t);
        }
      }),
      (Qy = Object.freeze([])),
      (eb = new Set()),
      (tb = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (nb = (() => {
        function e(e) {
          return (
            Hi(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Ui(e) ? e : new ab(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Ui(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Ui(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (rb = `onUpdate`),
      (ib = `finishTransaction`),
      (ab = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new tb();
        static interpolationFor(e, t) {
          if (Ui(e)) return Wi(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Ui(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Ki(e.x, t.x), y: Ki(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Ji ||= {})),
      (ob = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (sb = new (h_().Hsluv)()),
      (cb = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (lb =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (ub = (e) => {
        let { r: t, g: n, b: r, a: i } = va(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (db = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ba({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (fb = (e) => {
        let { r: t, g: n, b: r, a: i } = va(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (pb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ba({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (mb = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return xa(this);
        }
        rgb() {
          return Ta(this);
        }
        hsl() {
          return ia(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Ca(t));
            case `srgb`:
              return new e(wa(Ca(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            wa({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = q(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = ga(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!z(t) || !q.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (hb = new Map()),
      (q = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = hb.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (hb.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Ea(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && pa(e) !== !1),
          (e.isColorObject = (e) =>
            V(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => ra(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && mb.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...$i(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = sa(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = sa(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = ra(e.r, e.g, e.b, !0);
            for (let e of Object.keys(ob)) if (ob[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Yi(i, [0, 1], [t.r, r.r], a),
                g: Yi(i, [0, 1], [t.g, r.g], a),
                b: Yi(i, [0, 1], [t.b, r.b], a),
                a: Yi(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Yi(i, [0, 1], [u, u + f], a),
                s: Yi(i, [0, 1], [c.s, l.s], a),
                l: Yi(i, [0, 1], [c.l, l.l], a),
                a: Yi(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(ea(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => ia(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (gb = (e) => e instanceof Re),
      (_b = g_().EventEmitter),
      (vb = class {
        _emitter = new _b();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (yb = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (bb = av.requestAnimationFrame || yb),
      (xb = (e) => bb(e)),
      (Sb = 1 / 60),
      (Cb = class extends vb {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Sb = e;
        }
        static get TimeStep() {
          return Sb;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), xb(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Sb;
        }
        tick = () => {
          this._started &&
            (xb(this.tick),
            this.emit(`update`, this._frame, Sb),
            this.emit(`render`, this._frame, Sb),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (wb = new Cb()),
      (Tb = { target: Ma() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (J = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Tb.target,
        hasRestrictions: () => {
          let e = Tb.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Eb = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      We({
        borderTopWidth: Eb(`y`),
        borderLeftWidth: Eb(`x`),
        borderRightWidth: Eb(`x`),
        borderBottomWidth: Eb(`y`),
      }),
      (Db = M.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Ob = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (kb = {
        ...Ob,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Ab = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (jb = { ...Ab, fontWeight: 500 }),
      (Mb = {
        ...Ab,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Nb = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Ha(Ji.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Ji(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Ji.distance(e.a, e.b)),
          e
        );
      })()),
      (Y = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => Y.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Gi(e.x, t),
          y: Gi(e.y, t),
          width: Gi(e.width, t),
          height: Gi(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Y.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Y.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Ji.distance(t, n), height: Ji.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Y.minX)), y: Math.min(...e.map(Y.minY)) },
            n = { x: Math.max(...e.map(Y.maxX)), y: Math.max(...e.map(Y.maxY)) };
          return Y.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Y.minX(e), y: Y.minY(e) },
          { x: Y.minX(e), y: Y.maxY(e) },
          { x: Y.maxX(e), y: Y.minY(e) },
          { x: Y.maxX(e), y: Y.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Y.minX(e) ||
            t.x > Y.maxX(e) ||
            t.y < Y.minY(e) ||
            t.y > Y.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Y.points(t)) if (!Y.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= Y.maxX(e) || Y.maxX(t) <= e.x || t.y >= Y.maxY(e) || Y.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Y.maxX(e),
            r = Y.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Y.maxY(e),
            r = Y.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => Y.intersects(t, e)) === void 0,
        isEqual: (e, t) => Y.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
            Ji.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Y.minX(e), y: Y.minY(e) },
            r = { x: Y.minX(t), y: Y.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Y.minX(e),
            r = Y.minY(e),
            i = Y.maxX(e),
            a = Y.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Y.cornerPoints(e);
          return [Nb(t, n), Nb(n, r), Nb(r, i), Nb(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  U(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              U(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  U(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              U(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Nb(t, Y.center(e)),
            r = Y.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Nb.intersection(n, t, !0)) {
              let n = Pb[e];
              return (H(n, () => `Invalid edge name: ${JSON.stringify(Pb)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          H(r, `Rect array is empty`);
          let i = Y.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            H(o);
            let s = Y.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Pb = [`top`, `right`, `bottom`, `left`]),
      (Fb = {
        quickfix: (e) => (
          (Ua(e.widthType) || Ua(e.heightType)) && (e.aspectRatio = null),
          W(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Ua(e.widthType) || W(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Ua(e.heightType) || W(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Ib = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Fb.quickfix({
              left: W(t) || Ui(t),
              right: W(n) || Ui(n),
              top: W(r) || Ui(r),
              bottom: W(i) || Ui(i),
              widthType: Wa(a),
              heightType: Wa(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = nb.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = nb.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? nb.getNumber(t) : null,
              right: d.right ? nb.getNumber(n) : null,
              top: d.top ? nb.getNumber(r) : null,
              bottom: d.bottom ? nb.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? nb.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? nb.getNumber(t?.sizing.height) : null,
            c = Xa(e.left, e.right);
          if (o && W(c)) i = o - c;
          else if (n && Ua(e.widthType)) i = n.width;
          else if (W(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.widthType);
            }
          let l = Xa(e.top, e.bottom);
          if (s && W(l)) a = s - l;
          else if (n && Ua(e.heightType)) a = n.height;
          else if (W(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.heightType);
            }
          return Ya(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Ib.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? nb.getNumber(l.width) : null,
            d = l ? nb.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Y.pixelAligned(f) : f;
        },
      }),
      (Lb = 200),
      (Rb = 200),
      (zb = M.createContext({ parentSize: 0 })),
      (Bb = (e) => {
        let t = io(),
          { parentSize: n, children: r } = e,
          i = M.useMemo(() => ({ parentSize: n }), [oo(n), so(n)]);
        return t === 1
          ? r
            ? _(O, { children: r })
            : null
          : _(zb.Provider, { value: i, children: r });
      }),
      (Vb = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(Vb || {})),
      (Hb = M.createContext(void 0)),
      (Ub = new Set()),
      (Gb = `style[data-framer-css-ssr-minified]`),
      (Kb = (() => {
        if (!Fn()) return new Set();
        let e = document.querySelector(Gb)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (qb = `data-framer-css-ssr`),
      (Jb = (e, t, r) =>
        M.forwardRef((i, a) => {
          let { sheet: o, cache: s } = M.useContext(Hb) ?? {},
            c = r;
          if (!Fn()) {
            rt(t) && (t = t(mo(), i));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Xb.add(e, c);
          }
          return (
            n(() => {
              (c && Kb.has(c)) ||
                (rt(t)
                  ? t(mo(), i)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && po(e, o, s));
            }, []),
            _(e, { ...i, ref: a })
          );
        })),
      (Yb = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Xb = new Yb()),
      (Zb = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (Qb = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(Qb || {})),
      (X = Qb),
      ($b = `framer-form-input`),
      (ex = `framer-form-input-wrapper`),
      (tx = `framer-form-input-empty`),
      (nx = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (H(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${ho(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            H(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (rx = [
        Z(`.${$b}`, {
          padding: Z.variable(X.Padding),
          background: `transparent`,
          fontFamily: Z.variable(X.FontFamily),
          fontWeight: Z.variable(X.FontWeight),
          fontSize: Z.variable(X.FontSize),
          fontStyle: Z.variable(X.FontStyle),
          color: Z.variable(X.FontColor),
          fontFeatureSettings: Z.variable(X.FontOpenType),
          fontVariationSettings: Z.variable(X.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(X.WrapperHeight, `100%`),
          letterSpacing: Z.variable(X.FontLetterSpacing),
          textAlign: Z.variable(X.FontTextAlignment),
          lineHeight: Z.variable(X.FontLineHeight),
        }),
        Z(`.${$b}:focus-visible`, { outline: `none` }),
      ]),
      (ix = [Z(`.${ex}`, { overflow: `hidden` })]),
      (ax = `var(${X.BorderTopWidth}) var(${X.BorderRightWidth}) var(${X.BorderBottomWidth}) var(${X.BorderLeftWidth})`),
      (ox = [
        `.${ex}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${X.BorderRadiusTopLeft});
        border-top-right-radius: var(${X.BorderRadiusTopRight});
        border-bottom-right-radius: var(${X.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${X.BorderRadiusBottomLeft});
        corner-shape: var(${X.CornerShape});
        border-color: var(${X.BorderColor});
        border-top-width: var(${X.BorderTopWidth});
        border-right-width: var(${X.BorderRightWidth});
        border-bottom-width: var(${X.BorderBottomWidth});
        border-left-width: var(${X.BorderLeftWidth});
        border-style: var(${X.BorderStyle});
        transition: var(${X.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (sx = `customError`),
      (cx = `valid`),
      (lx = 10),
      (ux = 8),
      (dx = 16),
      (fx = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${dx}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${dx}px`,
        backgroundColor: Z.variable(X.IconColor),
      }),
      (px = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${dx}px`,
        boxSizing: `content-box`,
        padding: Z.variable(X.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...fx,
      }),
      (mx = `--list-style-type`),
      (hx = `--max-list-digits`),
      (gx = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (_x = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (vx = { display: `inline-block` }),
      (yx = { display: `block` }),
      (bx = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${_x.display};
            flex-direction: ${_x.flexDirection};
            justify-content: ${_x.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${wo([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${wo([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${wo([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${vx.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${wo([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${wo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${wo([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${wo([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${wo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${wo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${wo([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${wo([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${wo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${wo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${wo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${wo([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${wo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${wo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${wo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${wo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${wo([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${wo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${wo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${yx.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${hx}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${To(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (xx = `--text-truncation-display-inline-for-safari-16`),
      (Sx = `--text-truncation-display-none-for-safari-16`),
      (Cx = `--text-truncation-line-break-for-safari-16`),
      (wx = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (Tx = `(background: -webkit-named-image(i))`),
      (Ex = `(contain-intrinsic-size: inherit)`),
      (Dx = [
        `@supports ${Tx} and (not ${Ex}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${wx.join(`, `)} { display: var(${xx}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${wx.map((e) => `${e}::after`).join(`, `)} { content: var(${Cx}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Sx}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${xx}, ${vx.display}) }
    }`,
      ]),
      (Ox = `--framer-will-change-override`),
      (kx = `--framer-will-change-effect-override`),
      (Ax = `--framer-will-change-filter-override`),
      (jx = `--overflow-clip-fallback`),
      (Mx = `--one-if-corner-shape-supported`),
      (Nx = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${Ox}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${Ox}: transform; } }`,
                ]
              : [`body { ${Ox}: none; ${kx}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${Ax}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${Ax}: filter; } }`,
                ]
              : [`body { ${Ax}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${jx}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${Mx}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...bx,
          ...Zb,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...Dx,
          f,
        ];
      }),
      (Px = fo(() => Nx(!1))),
      (Fx = fo(() => Nx(!0))),
      (Ix = `optional`),
      (Lx = (e) => e),
      (Rx =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (zx = Ro(
        (e) =>
          Rx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Bx = (e) => () => {
        Vi(e);
      }),
      (Vx = () => () => {}),
      (Hx = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = Wx.useImageSource(e, t, n);
          return C(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (Ux = !1),
      (Wx = new Proxy(Hx, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Vx()
              : Bx(
                  Ux
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (Gx = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Kx = [1, 2, 2.2]),
      (qx = [512, 1024, 2048, 4096]),
      (Jx = 512),
      (Yx = { position: `absolute`, ...Gx, top: 0, right: 0, bottom: 0, left: 0 }),
      (Xx = `src`),
      (Zx = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Xx in e;
        },
      }),
      (Qx = Mn()),
      ($x = M.createContext(!1)),
      (eS = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (tS = Fn() ? new eS() : void 0),
      (nS = `data-framer-size-compatibility-wrapper`),
      (rS = `0.000001px`),
      (iS = ` translateZ(${rS})`),
      (aS = Ln() || Nn() || Rn()),
      (oS = (() => {
        class e extends v {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? vs(t) : ys(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Pt(this.props, e);
          }
          componentDidUpdate(e) {
            Lx(this.props).clip &&
              Lx(this.props).radius === 0 &&
              Lx(e).radius !== 0 &&
              xs(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (sS = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (cS = {
        hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
        setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
        getAlpha: (e) => {
          let t = pa(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => q.toRgbString(q.multiplyAlpha(q(e), t)),
        toHexValue: (e) => q.toHex(q(e)).toUpperCase(),
        toHex: (e) => q.toHexString(q(e)).toUpperCase(),
        toRgb: (e) => q.toRgb(q(e)),
        toRgbString: (e) => q.toRgbString(q(e)),
        toHSV: (e) => q.toHsv(q(e)),
        toHSL: (e) => q.toHsl(q(e)),
        toHslString: (e) => q.toHslString(q(e)),
        toHsvString: (e) => q.toHsvString(q(e)),
        hsvToHSLString: (e) => q.toHslString(q(ta(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => q.toHex(q(ta(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => q.toHexString(q(ta(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => q.toRgbString(q(ta(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => ta(e.h, e.s, e.v),
        rgbaToString: (e) => q.toRgbString(q(e)),
        rgbToHexValue: (e) => q.toHex(q(e)),
        rgbToHexString: (e) => q.toHexString(q(e)),
        hslToString: (e) => q.toHslString(q(e)),
        hslToRgbString: (e) => q.toRgbString(q(e)),
        toColorPickerSquare: (e) => q.toRgbString(q({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => q(e).isValid !== !1,
        equals: (e, t) =>
          q.isP3String(e) || q.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = q(e)),
              typeof t == `string` && (t = q(t)),
              q.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = q(e);
          return t.a === 1 ? q.toHexString(t) : q.toRgbString(t);
        },
        toFormatString: (e) => (q.isP3String(e) ? e : q.toRgbString(q(e))),
      }),
      (lS = /var\(.+\)/u),
      (uS = new Map()),
      (dS = [`stops`]),
      (fS = [`start`, `end`]),
      (pS = [`angle`, `alpha`]),
      (mS = {
        isLinearGradient: (e) => V(e) && pS.every((t) => t in e) && (ks(e) || Os(e)),
        hash: (e) => e.angle ^ Ds(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Es(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (hS = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (gS = {
        isRadialGradient: (e) => V(e) && hS.every((t) => t in e) && (ks(e) || Os(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Ds(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Es(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (_S = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (vS = new Set([..._S, ..._S.map((e) => `${e}Capture`)])),
      (yS = `overflow`),
      (bS = { x: 0, y: 0, width: 200, height: 200 }),
      (xS = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (SS = b(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: u } = cs(e),
          d = Bs(c),
          f = us(e),
          p = Fs(e),
          m = l(null),
          h = n ?? m,
          g = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` || void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": Lx(e)[`data-framer-offset-parent-id`],
          };
        !Vs(e) && r && (Lx(g)[`data-framer-name`] = r);
        let [v, y] = zs(c),
          b = Rs(c),
          x = uo(b);
        (i && !(y && !x && Qa(b))
          ? ((d.transformTemplate ||= ls(i)), Object.assign(g, os(i)))
          : (d.transformTemplate ||= void 0),
          gs(e, h));
        let S = ns(e),
          C = Hs(c, b, y, t($x)),
          w = co(
            T(O, {
              children: [
                S
                  ? _(Qo, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: y ?? void 0,
                      nodeId: e.id && ss(e.id),
                      layoutId: f,
                    })
                  : null,
                u,
                _(es, { ...o, border: a, layoutId: f }),
              ],
            }),
            C
          ),
          E = is(e.as),
          D = rs(S);
        return (
          e.fitImageDimension &&
            D &&
            ((v[e.fitImageDimension] = `auto`), (v.aspectRatio = D.width / D.height)),
          T(E, { ...g, ...d, layoutId: f, style: v, ref: h, children: [w, s] })
        );
      })),
      (CS = Do(
        b(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? _(SS, { ...e, ref: t }) : null;
        })
      )),
      (wS = `__LAYOUT_TREE_ROOT`),
      (TS = M.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (ES = class extends v {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === wS && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return _(TS.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (DS = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (OS = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (kS = a(new Map())),
      (AS = typeof IntersectionObserver > `u` ? x_ : Xs),
      (jS = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (MS = M.createContext(null)),
      (NS = class extends v {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === wS && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return _(De.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (PS = (e) => {
        let t = M.useContext(TS);
        return _(NS, { ...e, sharedLayoutContext: t });
      }),
      (FS = M.createContext(!0)),
      (IS = a({ register: () => {}, deregister: () => {} })),
      (LS = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = nc(),
          i = l({
            register: s(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: s(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          c(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, rt(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          _(IS.Provider, { value: i, children: n })
        );
      }),
      (RS = M.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: u,
        onTapBackdrop: d,
        backfaceVisible: f,
        exitBackfaceVisible: p,
        animation: m,
        exitAnimation: h,
        instant: g,
        initialProps: v,
        exitProps: y,
        position: b = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: x,
        index: S,
        areMagicMotionLayersPresent: C,
        id: w,
        isInitial: E,
      }) {
        let D = L(),
          O = t(Xe),
          { persistLayoutIdCache: k } = t(Db),
          A = l({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: ac({}, v, o),
          }),
          j = l(null),
          M = O !== null && !O.isPresent;
        (n && A.current.wasCurrent === void 0 && k(),
          c(() => {
            if (e || !D) return;
            if (M) {
              A.current = { ...A.current, wasBeingRemoved: M };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = A.current,
              a = (n && !i) || (!M && A.current.wasBeingRemoved && n),
              s = r && !t,
              c = ac(A.current.origins, v, o),
              l = A.current.wasReset;
            (a || s
              ? (D.stop(), D.start({ zIndex: S, ...c, ...o }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: S, ...zS, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, M]));
        let N = g ? { type: !1 } : `velocity` in m ? { ...m, velocity: 0 } : m,
          ee = g ? { type: !1 } : h || m,
          P = { ...b };
        ((P.left === void 0 || P.right === void 0) && (P.width = `auto`),
          (P.top === void 0 || P.bottom === void 0) && (P.height = `auto`));
        let te = (oc(o) || oc(v)) && (e || n || r) ? 1200 : void 0,
          ne = { ...zS, ...A.current.origins },
          F = e
            ? {
                initial: { ...ne, ...v },
                animate: { ...ne, ...o, transition: N },
                exit: { ...ne, ...y, transition: m },
              }
            : { animate: D, exit: { ...ne, ...y, transition: ee } },
          I = !(M || C === !1),
          re = !!n && I,
          ie = n && E;
        return T(CS, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || M || (n && x) ? S : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: te,
          },
          children: [
            e &&
              _(CS, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: m,
                initial: { opacity: g && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: u || `transparent`,
                onTap: M ? void 0 : d,
              }),
            _(CS, {
              ...P,
              ...F,
              transition: {
                default: N,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: M ? p : f,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: ie || e || (n && x) ? 1 : 0 },
              "data-is-present": I ? void 0 : !1,
              ref: j,
              children: _(MS.Provider, {
                value: j,
                children: _(FS.Provider, {
                  value: re,
                  children: _(LS, {
                    isCurrent: re,
                    isOverlayed: i,
                    children: _(PS, {
                      isLead: n,
                      animatesLayout: !!x,
                      transition: N,
                      isExiting: !I,
                      isOverlayed: i,
                      id: w,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, ic)),
      (zS = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (BS = class {
        warning = () => {
          Vi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (VS = a(new BS())),
      (HS = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (US = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (WS = F_(zS)),
      (GS = M.createContext(void 0)),
      (KS = M.createContext(void 0)),
      (qS = (() => {
        class e extends v {
          #e = null;
          state = US();
          static defaultProps = { enabled: !0 };
          static contextType = GS;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !Va(t) || !Ba(t)) return;
            let n = { ...HS.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = uc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!Va(t) || !Ba(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, HS.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = uc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !Va(e) || !Ba(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, HS.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, HS.Fade, t);
          }
          push(e, t) {
            this.#i(e, sc(t), t);
          }
          modal(e, t) {
            this.#i(e, HS.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, cc(t), t);
          }
          flip(e, t) {
            this.#i(e, lc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, HS.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = Tc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              H(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              H(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                _(
                  RS,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: Fc(o, e),
                    transitionProps: u,
                    animation: Pc(o, e),
                    backfaceVisible: Mc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: _(Us, { children: Lc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              _(
                RS,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: jc(n, t),
                  transitionProps: Nc(n, t),
                  instant: Fc(n, t, !0),
                  animation: Pc(n, t),
                  exitProps: e.transition.enter,
                  visible: Ic(n, t),
                  backdropColor: kc(e.transition),
                  backfaceVisible: Ac(n, t),
                  onTapBackdrop: Rc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Lc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return _(CS, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: _(VS.Provider, {
                value: this,
                children: T(KS.Provider, {
                  value: i,
                  children: [
                    _(RS, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Ec(n),
                      animation: Dc(n),
                      backfaceVisible: Oc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: _(Na, {
                        children: _(ES, {
                          children: _(Pe, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    _(Pe, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (JS = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (YS = Do(M.forwardRef(zc))),
      Ze(y_(), 1),
      Ze(y_(), 1),
      Ze(y_(), 1),
      (XS = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (ZS = Symbol(`private`)),
      (QS = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [ZS]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new tb(),
                reset() {
                  for (let t in i)
                    if (XS(i, t)) {
                      let n = XS(e, t) ? Lx(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, eC);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[ZS].reset()),
          (e.addObserver = (e, t) => e[ZS].observers.add(t)),
          e
        );
      })()),
      ($S = class {
        set = (e, t, n, r) => {
          if (t === ZS) return !1;
          let i = e[ZS],
            a,
            o;
          if (
            (Ui(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = nb(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = Lx(e)[t];
          if (l !== void 0) {
            Ui(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Lx(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === ZS) return Lx(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[ZS].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(ZS);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== ZS) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (eC = new $S()),
      (tC = `opacity`),
      (nC = (() => {
        function e(t = {}) {
          let n = QS(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => QS.resetObject(e));
          }),
          (e.addObserver = (e, t) => QS.addObserver(e, t)),
          e
        );
      })()),
      (rC = { update: 0 }),
      (iC = M.createContext({ update: NaN })),
      (aC = class extends v {
        observers = [];
        state = rC;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), wb.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), nC.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            nC._stores.forEach((e) => {
              let t = nC.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            _(iC.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Ze(y_(), 1),
      (oC = `__framer__`),
      (sC = oC.length),
      (cC = M.createContext(void 0)),
      (lC = M.createContext(void 0)),
      (uC = `ssr-variant`),
      (dC = `ssr-variant-group-separator`),
      (fC = M.forwardRef(function (e, t) {
        let n = Qc(t),
          r = M.useContext(lC),
          i = M.useSyncExternalStore(E_, O_, D_),
          a = Ia(() => (i ? (Fn() ? 1 : 2) : 0)),
          o = M.useContext(cC);
        return qr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, ol(t, c, i));
            case 1:
              return tl(i, s, c, u, l, d, n, t);
            case 2:
              return tl(i, s, c, u, l, d, Zc, void 0);
            default:
              U(a);
          }
        }, [o, r, n, e]);
      })),
      (pC = Jb(fC, `.${uC} { display: contents }`, `PropertyOverrides`)),
      (mC = `default`),
      (hC = new Set([mC])),
      (gC = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (H(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (H(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = mC, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return mC;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = nl(r)) : mC;
        }
        setAll(e, t = hC, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = rt(n.transformTemplate) ? n.transformTemplate?.({}, vC) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: V(a) ? a : void 0,
              animate: V(o) ? o : void 0,
              transformTemplate: z(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (_C = new gC()),
      (vC = `__Appear_Animation_Transform__`),
      (yC = `data-framer-appear-id`),
      (bC = `data-framer-appear-animation`),
      (xC = (e) => {
        if (Io())
          return {
            animate: cl(e.animate) ? e.animate : void 0,
            initial: cl(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (SC = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (CC = (e) => ({
        x: F(e?.x ?? 0),
        y: F(e?.y ?? 0),
        opacity: F(e?.opacity ?? 1),
        scale: F(e?.scale ?? 1),
        rotate: F(e?.rotate ?? 0),
        rotateX: F(e?.rotateX ?? 0),
        rotateY: F(e?.rotateY ?? 0),
        skewX: F(e?.skewX ?? 0),
        skewY: F(e?.skewY ?? 0),
        transformPerspective: F(e?.transformPerspective ?? 0),
      })),
      (wC = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (TC = { willChange: `transform` }),
      Object.freeze(TC),
      (EC = {}),
      Object.freeze(EC),
      (DC = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (OC = () => {
        let e = l();
        return (
          c(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (kC = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (AC = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (jC = 1),
      (MC = 4),
      (NC = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (PC = [`animate`, `animate`]),
      (FC = { inputRange: [], outputRange: [] }),
      (IC = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (LC = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (RC = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (zC = [0, 1]),
      (BC = { parallax: kC, styleAppear: NC, styleTransform: IC, loop: DC, presence: AC }),
      (VC = F_(BC)),
      (HC = (e) => e.reduce((e, t) => (e += t), 0)),
      (UC = (e) => e.reduce((e, t) => (e *= t), 1)),
      (WC = `current`),
      (GC = (e) =>
        M.forwardRef((t, n) => {
          if (t.__withFX)
            return _(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = xC(t);
          if (r) return _(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = jl(t),
            p = qs(n),
            { values: m, style: h } = _l(s, p, f, t.style, t[Le]),
            { values: g, style: v } = pl(i, p, t.style?.visibility),
            { values: y, style: b } = kl(o, p),
            { values: x, style: S } = Tl(a, p),
            { values: C, style: w } = dl(c, p),
            T = M.useMemo(() => {
              let e = new Re(u ?? 1);
              return {
                scale: [x.scale, C.scale, m.scale, y.scale],
                opacity: [x.opacity, C.opacity, m.opacity, e, y.opacity],
                x: [x.x, C.x, m.x, y.x],
                y: [x.y, C.y, g.y, m.y, y.y],
                rotate: [x.rotate, C.rotate, m.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, m.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, m.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, m.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, m.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [u, y, g, x, C, m]);
          Nl(t.style, T);
          let E = ke(T.scale, UC),
            D = ke(T.opacity, UC),
            O = ke(T.x, HC),
            k = ke(T.y, HC),
            A = ke(T.rotate, HC),
            j = ke(T.rotateX, HC),
            N = ke(T.rotateY, HC),
            ee = ke(T.skewX, HC),
            P = ke(T.skewY, HC),
            te = ke(T.transformPerspective, HC),
            { drag: ne, dragConstraints: F } = l;
          fs(ne && Ml(F) ? F : void 0);
          let I = {
            opacity: D,
            scale: E,
            x: O,
            y: k,
            rotate: A,
            rotateX: j,
            rotateY: N,
            skewX: ee,
            skewY: P,
          };
          st(d) && (I.transformPerspective = te);
          let re = Pl(t.animate) ? t.animate : void 0,
            ie = Pl(t.initial) ? t.initial : void 0,
            ae = Pl(t.exit) ? t.exit : void 0,
            oe = f && !s.presenceInitial ? { initial: ie, animate: re, exit: ae } : {};
          return _(e, {
            ...l,
            ...oe,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...w, ...I, ...S, ...h },
            values: m,
            ref: p,
          });
        })),
      (KC = M.createContext({})),
      (qC = M.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = M.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Qc(a);
        return _(KC.Provider, { value: o, children: s(r, i) });
      })),
      (JC = (e) =>
        M.forwardRef((t, n) =>
          _(e, { layoutId: us(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (YC = !1),
      (XC = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Il(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              gt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          hn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Il(e)) throw e;
          return ((YC = !0), this.props.children);
        }
      }),
      (ZC = N === void 0 ? null : new Promise(() => {})),
      (QC = _(Ll, {})),
      ($C = a(!1)),
      ($C.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (ew = _(zl, {})),
      (tw = class extends v {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Vl(this.props.getErrorMessage(), t?.componentStack), Bl(e, t));
        }
        render() {
          let { children: e, fallback: t = ew } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (nw = class extends v {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Bl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (rw = M.createContext(void 0)),
      (iw = `code-crash:`),
      (aw = JC(
        M.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = Ia(() => (t ? `${t}-container` : void 0)),
            d = is(n),
            f = tu(
              M.Children.map(e, (e) =>
                M.isValidElement(e) ? M.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return _(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: _($x.Provider, {
              value: !0,
              children: _(iy.Provider, {
                value: i ?? null,
                children: _(Fa, {
                  enabled: !1,
                  children: _(Se, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (ow = M.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = tu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = is(f);
          return _(iy.Provider, {
            value: a ?? null,
            children: _(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return _(iy.Provider, {
            value: a ?? null,
            children: _(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (sw = a({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (cw = `framer-cursor-none`),
      (lw = `framer-pointer-events-none`),
      (uw = x(function ({ children: e }) {
        let t = Ia(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = nu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ye();
        return T(sw.Provider, { value: t, children: [e, !n && _(mw, {})] });
      })),
      (dw = Jb(
        uw,
        [
          `.${cw}, .${cw} * { cursor: none !important; }`,
          `.${lw}, .${lw} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (fw = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (pw = `data-framer-portal-id`),
      (mw = x(function () {
        let { onRegisterCursors: e } = t(sw),
          [n, r] = i(!1),
          a = ie(0),
          o = ie(0),
          u = ie(0),
          d = l(null),
          p = l({ cursors: {}, cursorHash: void 0 }),
          h = ds();
        (f(() => {
          let e = av.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? m(() => r(!1)) : r(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || r(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!n) return;
            let e = 0,
              t = 0;
            function r() {
              (a.set(e), o.set(t), Be(u, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if (ot(p.current.cursors)) return;
              let n = ou(e, t);
              n !== p.current.cursorHash && ((p.current.cursorHash = n), Qe.update(() => h()));
            };
            function s(n) {
              if (n.pointerType === `touch`) {
                Me(i);
                return;
              }
              (Qe.read(i, !0), (e = n.clientX), (t = n.clientY), Qe.update(r));
            }
            function c(e) {
              if (e.target === d.current || !d.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              Qe.update(() => {
                d.current?.dispatchEvent(t);
              });
            }
            return (
              av.addEventListener(`pointermove`, s),
              document.addEventListener(`pointerdown`, c),
              document.addEventListener(`pointerup`, c),
              Qe.read(i, !0),
              () => {
                (av.removeEventListener(`pointermove`, s),
                  document.removeEventListener(`pointerdown`, c),
                  document.removeEventListener(`pointerup`, c),
                  Me(i));
              }
            );
          }, [u, a, o, h, n]),
          c(() => {
            if (!n) return;
            function e() {
              Be(u, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              av.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), av.removeEventListener(`blur`, e));
              }
            );
          }, [u, n]),
          f(() => {
            function t(e) {
              ((p.current.cursors = e),
                (p.current.cursorHash = ot(e) ? null : ou(a.get(), o.get())),
                h());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(cw, !1));
            };
          }, [a, o, e, h]));
        let { cursors: g, cursorHash: v } = p.current,
          y = v ? g[v] : null,
          b = ru(y);
        f(() => {
          n && document.body.classList.toggle(cw, b);
        }, [b, n]);
        let x = y?.component,
          S = y?.transition ?? { duration: 0 },
          C = S.duration === void 0 ? S : { ...S, duration: S.duration * 1e3 },
          w = ee(a, C),
          T = ee(o, C),
          D = ke(() => w.get() + (y?.offset?.x ?? 0)),
          O = ke(() => T.get() + (y?.offset?.y ?? 0)),
          k = y?.alignment,
          A = y?.placement,
          j = s((e, t) => `translate(${au(A, k)}) ${t}`, [k, A]);
        return !n || !y || !x
          ? null
          : _(E, {
              children: _(x, {
                transformTemplate: j,
                style: { ...fw, x: D, y: O, opacity: u },
                globalTapTarget: !0,
                variant: y?.variant,
                ref: d,
                className: lw,
              }),
            });
      })),
      (hw = `webPageId`),
      (gw = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            H(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (H(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((S_ && !Rn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(lu(e), e), this.collectedLinks.set(lu(t), t));
          let n = this.nestingInfo.get(lu(e)) ?? new Set();
          (n.add(lu(t)), this.nestingInfo.set(lu(e), n));
        }
      }),
      (_w = new gw()),
      (vw = `element`),
      (yw = `collection`),
      (bw = `collectionItemId`),
      (xw = `pathVariables`),
      (Sw = `framer/page-link,`),
      (Cw = a(void 0)),
      (ww = `--text-selection-color`),
      (Tw = `--text-selection-background-color`),
      (Ew = Jb(Du, (e, t) => Eu(t?.triggerId), `InjectSelectionStyle`)),
      (Dw = `overlay`),
      (Ow = `template-overlay`),
      (kw = class extends v {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((N.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(gt(C_ ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          hn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (C_ && document.getElementById(`main`)?.innerHTML) || ``;
          return _(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${gt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (Aw = /:([a-z]\w*)/gi),
      (jw = a(void 0)),
      (Mw = 500),
      (Nw = 0.9),
      (Pw = 1.7),
      (Fw = 4),
      (Iw = 1 / 0),
      (Lw = new WeakMap()),
      (Rw = new Set()),
      (zw = new Map()),
      (Bw = !Iv || typeof IntersectionObserver > `u` ? null : Iu()),
      (Vw = Au(
        b(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let f = Lt(),
            p = zt(),
            m = Pu(),
            { activeLocale: h, locales: g } = Yr(),
            _ = Uu(),
            v = qn(),
            b = uu(),
            x = Wu({ nodeId: s, clickTrackingId: i, router: f, href: t, activeLocale: h }),
            S = C(() => {
              if (!t) return {};
              let e = cu(t) ? t : _u(t);
              if (!e) return {};
              if (z(e))
                return Ju(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  v,
                  h?.id,
                  g,
                  m
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if (pt(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: y,
                  locale: b,
                } = ju(f, p, e, h, c, m),
                S = Ru(n, !0),
                C = S === `_blank`,
                w = { pathVariables: y, locale: b },
                T = (e) => Ku(f, l, () => v(l, w, !1, !C), d, y, r, e);
              return {
                href: u,
                target: S,
                onClick: qu(u, x, T),
                "data-framer-page-link-current": (p && Fu(p, e, m)) || void 0,
                navigate: T,
                preload: () => v(l, w, !0, !C),
                _routeId: l,
                _pathVariables: y,
                _locale: b,
              };
            }, [t, f, h, m, n, p, r, x, a, g, o, _, v]),
            w = qs(y(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: k, ...A } = S;
          Js(
            w,
            (e) => {
              if (!(e === null || !D || !E || b))
                return Bw?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, k, b]
          );
          let j = !!T;
          return bu(
            Qc(d).cloneAsArray(e, (e) => Yu(e, { ...u, ...Zu(A, l, j) }, w)),
            c,
            s,
            t,
            S,
            w
          );
        })
      )),
      (Hw = `framer`),
      (Uw = 3),
      (Ww = 30),
      (Gw = 1e4),
      (Kw = `__framer`),
      (qw = `3`),
      (Jw = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (Yw = Date.now()),
      (Xw = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (Zw = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (Qw = () => ((Date.now() - Yw) / 1e3).toFixed(2)),
      ($w = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          M.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          M.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = Qw())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = Qw()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = Qw()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          _(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (eT = { state: `pending` }),
      (tT = { state: `success` }),
      (nT = { state: `incomplete` }),
      (rT = { state: `complete` }),
      (iT = { state: `error` }),
      (aT = M.createContext(void 0)),
      (oT = M.forwardRef(function (
        {
          action: e,
          children: n,
          redirectUrl: r,
          onSuccess: i,
          onError: a,
          onLoading: o,
          submitTrackingId: s,
          nodeId: c,
          ...l
        },
        u
      ) {
        let d = M.useRef(null),
          f = u ?? d,
          {
            states: p,
            convertHoneypotFieldsForSubmission: h,
            replaceHoneypotWithMetadata: g,
          } = od(),
          v = Lt(),
          y = zt(),
          b = Pu(),
          x = Tn(),
          [S, C] = M.useReducer(ud, nT),
          { activeLocale: w, locales: E } = Yr(),
          D = t(aT),
          O = M.useRef({ onSuccess: i, onError: a, onLoading: o });
        O.current = { onSuccess: i, onError: a, onLoading: o };
        let k = M.useRef(!1);
        async function A(e) {
          if (z(e)) {
            let t = Mu(v, e, b, E);
            if (!t) {
              pd(e, f);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            v.navigate?.(n, r, i);
            return;
          }
          H(
            cu(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await Vu(e.unresolvedPathSlugs, e.unresolvedHashSlugs, w, x),
            { routeId: n, elementId: r, pathVariables: i } = ju(v, y, e, w, t, b);
          v.navigate?.(n, r, i);
        }
        let j = async (t) => {
            if ((t.preventDefault(), !e || !D || k.current)) return;
            ((k.current = !0), h());
            let n = new FormData(t.currentTarget),
              i = nd(t.currentTarget);
            (await Fv({ priority: `user-visible`, continueAfter: `paint` }),
              g(n),
              m(() => C({ type: `submit` })),
              ad(n, av.document));
            for (let [e, t] of n) t instanceof File && n.delete(e);
            try {
              (O.current.onLoading?.(),
                cd({ router: v, nodeId: c, submitTrackingId: s, activeLocale: w }),
                await hd(e, n, i, D),
                m(() => C({ type: `success` })),
                O.current.onSuccess?.(),
                r && (await A(r)));
            } catch (e) {
              (m(() => C({ type: `error` })), O.current.onError?.(), console.error(e));
            }
            k.current = !1;
          },
          N = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), j(e)));
          },
          ee = async (e) => {
            let t = e.currentTarget;
            (await Fv({ priority: `background`, continueAfter: `paint` }),
              m(() => C({ type: md(t) ? `incomplete` : `complete` })));
          };
        return T(I.form, {
          ...l,
          onSubmit: dd(S) ? j : fd,
          onKeyDown: N,
          onChange: ee,
          ref: f,
          children: [n(S), _(sd, { states: p })],
        });
      })),
      (sT = `__framer_force_showing_editorbar_since`),
      (cT = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (lT = () => {
        try {
          return !!localStorage[sT];
        } catch {
          return !1;
        }
      }),
      (uT = () => !lT()),
      (dT = (() => {
        let e = a(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (fT = `main`),
      (pT = `framerGeneratedPage`),
      (mT = `<!-- Start of headStart -->`),
      (hT = `<!-- End of headStart -->`),
      (gT = `<!-- Start of headEnd -->`),
      (_T = `<!-- End of headEnd -->`),
      (vT = `<!-- Start of bodyStart -->`),
      (yT = `<!-- End of bodyStart -->`),
      (bT = `<!-- Start of bodyEnd -->`),
      (xT = `<!-- End of bodyEnd -->`),
      (ST = M.createContext(void 0)),
      (CT = null),
      (wT = null),
      T_(Id),
      (TT = (e, n, r, i, a, o) => {
        let s = t(aT),
          u = l(),
          d = Tn(),
          f = l(!0);
        return (
          c(() => {
            function t() {
              (!CT || !wT) && Id();
              let t = r ? new URL(r, av.location.href) : av.location,
                c = {
                  version: ov,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: CT,
                  locale: wT,
                },
                l = f.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && d?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && z(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (pt(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (u.current = t()),
                n = e instanceof Promise ? await e : e;
              ((u.current = n),
                f.current ? (f.current = !1) : hn(`published_site_pageview`, n, `eager`));
            })();
            let c = async (e) => {
              if (e.persisted) {
                let e = (u.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((u.current = n), hn(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              N.addEventListener(`pageshow`, c),
              () => {
                N.removeEventListener(`pageshow`, c);
              }
            );
          }, [e, n, r, i, a, s, d, o]),
          u
        );
      }),
      (ET = 0),
      (DT = 500),
      (OT = 200),
      (kT = { status: `loading`, data: void 0 }),
      (AT = 5e3),
      (jT = () => {}),
      (MT = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = ff(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = ff(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = av.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              gf(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = qc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && gf(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Fn() || !fu(e.url, !1)) return;
          let t = ff(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = hf(n, e);
          return (e.resultOutputType === `image` && z(i) && (await lf(i).catch(jT)), i);
        }
        async fetchWithCache(e) {
          if (!Fn()) return;
          let t = ff(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && gf(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, kT);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!fu(r, !1)) return jT;
          let a = ff(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (NT = a(void 0)),
      (PT = a(!0)),
      (FT = ({ children: e, client: t }) => {
        let [n] = i(() => t ?? new MT()),
          [r, a] = i(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              m(() => {
                a(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          _(PT.Provider, { value: r, children: _(NT.Provider, { value: n, children: e }) })
        );
      }),
      (Te.WillChange = Ae),
      (IT = Au(
        b(function ({ links: e, children: t, ...n }, r) {
          return Qc(r)(t(vf((t) => e.map(t), [e])), n);
        })
      )),
      (LT = { priority: void 0, canYield: !0 }),
      (RT = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Lf(e, t);
            case `boolean`:
              return zf(e);
            case `color`:
              return Hf(e);
            case `date`:
              return Wf(e);
            case `enum`:
              return Kf(e);
            case `file`:
              return Jf(e);
            case `link`:
              return Xf(e);
            case `number`:
              return Qf(e);
            case `object`:
              return tp(e, t);
            case `responsiveimage`:
              return rp(e);
            case `richtext`:
              return ap(e);
            case `string`:
              return lp(e);
            case `vectorsetitem`:
              return sp(e);
            case `unknown`:
              return e;
            default:
              U(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return it(e)
            ? { type: `boolean`, value: e }
            : ut(e)
              ? { type: `date`, value: e.toISOString() }
              : B(e)
                ? { type: `number`, value: e }
                : z(e)
                  ? { type: `string`, value: e }
                  : at(e)
                    ? { type: `array`, value: e.map(RT.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && dp(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && dp(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && dp(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && dp(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && dp(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => RT.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => RT.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = up(e),
            i = up(t);
          return ct(r) || ct(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = up(e),
            i = up(t);
          return ct(r) || ct(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = up(e),
            i = up(t);
          return ct(r) || ct(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(RT.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return z(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              U(e);
          }
        },
      }),
      (zT = { type: `unknown`, isNullable: !0 }),
      (BT = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Fo(e);
          H(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (H(n !== `array`, `Array properties are not supported`),
              H(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (lt(i)) continue;
            let a = this.schema[t];
            if (!st(a)) {
              if ((H(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await fp(this.collection, this.locale))[t]?.[n];
          return H_.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await fp(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Cf(e);
            i && (await i);
            let a = t[r];
            H(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await fp(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Cf(t);
            e && (await e);
            let a = n[Number(i)];
            (H(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (VT = new Map()),
      (HT = new WeakMap()),
      (UT = `$r_`),
      (WT = new Map()),
      (GT = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Cp(e, t)), (this.priority = vp(n)));
        }
        *resolveArrayValue(e) {
          return yield* Of(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* Df(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          H(bp(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          H(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return ft(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          H(Sp(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (H(n, `Can't find collection for vector set item pointer`),
            H(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return ft(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (KT = `index`),
      (qT = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), K(this.name, ...e));
        }
      }),
      (JT = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new XT();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (YT = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
      }),
      (XT = class extends qT {
        name = `Indexes`;
      }),
      (ZT = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          H(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                H(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: yp(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                H(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: xp(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends qT {
        name = `Fields`;
      }),
      (QT = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return K(`OrderingField`, this.field.id, this.direction);
        }
      }),
      ($T = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return K(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== KT) return !1;
          return !0;
        }
      }),
      (eE = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return K(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (tE = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (H(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (H(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new $T();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new eE(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          H(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (H(e, `Field must exist`), e.field);
        }
      }),
      (nE = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = Dp(),
            i = Op(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (rE = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (iE = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (aE = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (oE = class extends aE {
        group;
        getGroup() {
          return (H(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (H(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return wf(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Tf(this.evaluate(void 0), void 0, e);
        }
      }),
      (sE = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return K(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (cE = class e extends oE {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return K(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new eE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new sE(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Of(
              n.tuples.map((t) =>
                Of(
                  this.projections.map((n) => Df({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new rE();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            H(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (lE = { type: 0 }),
      (uE = class extends aE {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return wf(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Tf(this.evaluate(void 0, void 0));
        }
      }),
      (dE = { type: 0 }),
      (fE = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return K(`CaseCondition`, this.when, this.then);
        }
      }),
      (pE = class e extends uE {
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return K(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new fE(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* Df({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Of(
              this.conditions.map((n) =>
                Df({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (RT.equal(n, e, dE)) return t;
          } else for (let { when: e, then: t } of r) if (Bf(e)) return t;
          return i;
        }
      }),
      (mE = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new tE();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new $T();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (st(t)) continue;
                a.add(t.field);
                let r = new QT(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new ZT(Ep(this.fieldId++), void 0, t.definition, void 0),
                  a = new sE(t, r);
                i.push(a);
                let s = new QT(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (st(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              H(n.alias, `Subqueries should have an alias`);
              let r = Ep(this.fieldId++),
                a = n.alias,
                s = new ZT(r, a, t.definition, void 0),
                c = new sE(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              U(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = hp(t.data, this.locale),
            i = t.alias,
            a = new JT(wp(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new ZT(Ep(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new ZT(Ep(this.fieldId++), KT, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: KT, collectionName: i });
            let t = new $T(),
              r = new QT(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new $T(),
              o = new YT(Tp(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new $T(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              U(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              U(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(zT, null);
        }
        buildLiteralValue(e) {
          let t = RT.parse(e.value);
          return this.normalizer.newScalarConstant(zT, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (H(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              U(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new hE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new hE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new fE(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              U(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              U(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (hE = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (gE = class e extends oE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return K(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new eE(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Of(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Bf(n[t] ?? null));
        }
      }),
      (_E = class e extends oE {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return K(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * nE : 50 * nE);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, xf()),
            i = xf(),
            a = [];
          for (let n of r) {
            let r = Cf(i);
            r && (yield r);
            let o = new rE();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new iE(n, a);
        }
      }),
      (vE = class e extends oE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return K(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new eE(new $T(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Df({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (yE = class e extends oE {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return K(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return $.estimate(1, 200 * nE);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(xf()),
            r = xf(),
            i = [];
          for (let a of n) {
            let n = Cf(r);
            n && (yield n);
            let o = new rE();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new iE(t, i);
        }
      }),
      (bE = class e extends oE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return K(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new eE(new $T(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Df({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (xE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Bf(n) && Bf(r) };
        }
      }),
      (SE = class extends uE {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return K(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (CE = { type: 0 }),
      (wE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Df({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: RT.contains(n, r, CE) };
        }
      }),
      (TE = { type: 0 }),
      (EE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Df({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: RT.endsWith(n, r, TE) };
        }
      }),
      (DE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: RT.equal(n, r, lE) };
        }
      }),
      (OE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: RT.greaterThan(n, r, lE) };
        }
      }),
      (kE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: RT.greaterThanOrEqual(n, r, lE) };
        }
      }),
      (AE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: RT.lessThan(n, r, lE) };
        }
      }),
      (jE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: RT.lessThanOrEqual(n, r, lE) };
        }
      }),
      (ME = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !RT.equal(n, r, lE) };
        }
      }),
      (NE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Bf(n) || Bf(r) };
        }
      }),
      (PE = { type: 0 }),
      (FE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Df({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: RT.startsWith(n, r, PE) };
        }
      }),
      (IE = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof gE) {
            if (e.predicate instanceof xE) {
              let n = new vE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof NE) {
              let n = new bE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof yE)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new _E(n, kp(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof gE) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof yE)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof DE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof SE &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = kp(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new _E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ME &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof SE &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = kp(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new _E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof AE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof SE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = kp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new _E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof jE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof SE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = kp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new _E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof OE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof SE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = kp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new _E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof kE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof SE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = kp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new _E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof wE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof SE &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = kp(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new _E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof FE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof SE &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = kp(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new _E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof EE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof SE &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = kp(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new _E(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (LE = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new RE();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          H(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (RE = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (zE = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (BE = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new LE(Ap(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new zE(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            H(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (VE = class e extends oE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return K(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new eE(new $T(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new iE(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new rE();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Df({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof DE) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new iE(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new rE();
              (n.merge(i),
                n.merge(a),
                Bf(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (HE = class e extends oE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return K(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new eE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* Df({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = $f(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (UE = class e extends oE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return K(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new eE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* Df({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = $f(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (WE = class e extends uE {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return K(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) st(n.collection) || e.add(n);
          return new eE(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new rE();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (GE = class e extends uE {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            H(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return K(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return RT.cast(n, this.definition);
        }
      }),
      (KE = class e extends uE {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return K(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (st(this.field.collection) || e.add(this.field), new eE(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new rE();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (qE = { type: 0 }),
      (JE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: RT.in(n, r, qE) };
        }
      }),
      (YE = { type: 1 }),
      (XE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return K(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Df({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: RT.indexOf(n, r, YE) };
        }
      }),
      (ZE = class extends Error {}),
      (QE = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return K(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Mp(n),
            a = Mp(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      ($E = class e extends uE {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return K(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: RT.length(n) };
        }
      }),
      (eD = class e extends uE {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Bf(yield* this.input.evaluate(e, t)) };
        }
      }),
      (tD = { type: 0 }),
      (nD = class e extends uE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Df({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !RT.in(n, r, tD) };
        }
      }),
      (rD = class extends uE {
        constructor(e, t) {
          H(e.name !== KT, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return K(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (H(e, `Context must exist`), e.getValue(this.field))
            : (H(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (iD = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new yE(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new _E(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new VE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof SE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof VE && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new gE(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new cE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof cE &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new HE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new UE(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof SE) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new rD(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new SE(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof eD)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof DE) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof ME) return this.newScalarEquals(e.left, e.right);
          if (e instanceof AE) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof jE) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof OE) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof kE) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof xE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof NE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new eD(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof SE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof SE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof SE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof SE && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new xE(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof SE && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof SE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof SE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof SE && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new NE(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof rD;
          if (t instanceof rD && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new DE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof rD;
          if (t instanceof rD && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ME(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof rD;
          if (t instanceof rD && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new AE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof rD;
          if (t instanceof rD && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new jE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof rD;
          if (t instanceof rD && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new OE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof rD;
          if (t instanceof rD && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new kE(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new JE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new nD(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new fE(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new pE(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new wE(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new FE(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new EE(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new $E(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new XE(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new WE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new KE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new QE(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new GE(e, t);
          return this.finishScalar(n);
        }
      }),
      (aD = class extends oE {}),
      (oD = class e extends aD {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return K(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new eE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * nE).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          H(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            H(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Np(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                H(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new rE();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (H(s, `Item not found`), H(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (sD = { type: 0 }),
      (cD = class e extends aD {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return K(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== KT && (st(e.collection) || t.add(e));
          return new eE(new $T(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === KT) {
                let r = n.collection;
                H(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                H(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                H(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!RT.equal(a, o, sD)) {
                if (ct(a) || RT.lessThan(a, o, sD)) return i ? -1 : 1;
                if (ct(o) || RT.greaterThan(a, o, sD)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (lD = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new BE();
        normalizer = new iD(this.memo);
        explorer = new IE(this.normalizer);
        optimize(e) {
          let t = new mE(this.normalizer, this.query, this.locale).build(),
            n = Cf(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (H(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new oD(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new cD(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (uD = yf(`query-engine`)),
      (dD = class {
        async evalQuery(e, t, n, r) {
          uD.enabled &&
            uD.debug(`Query:
${Kp(e)}`);
          let i = new GT(e, t, r),
            a = new lD(e, t, i),
            o = Cf(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = pt(s) ? await s : s,
            u = Cf(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Cf(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(Df(a, r)));
          }
          let h = Ef(Of(m, r), r);
          return n ? [pt(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new GT(t, n, r);
          return Ef(
            Of(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return Df(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (fD = `style[data-framer-breakpoint-css]`),
      (pD = `page`),
      (mD = Symbol(`cycle`)),
      (_D = (() => {
        let e = a(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (vD = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (yD = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r;) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (bD = yD(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (xD = yD(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (SD = {
        ...bD,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = Fm(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n;) ((t += Fm(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (CD = { start: `flex-start`, end: `flex-end` }),
      (wD = b(Gm)),
      (TD = { start: 0, end: 0 }),
      (ED = { display: `flex`, position: `relative` }),
      (DD = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (OD = { duration: 0.2, ease: `linear` }),
      (kD = b(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? I.div,
          m = Lo(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return _(wD, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (AD = b(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: u,
            gap: d,
            overflow: f,
            playState: p,
            ...m
          } = e,
          h = r ?? I.div,
          g = Zr() === `rtl` && o === `x` ? -1 : 1,
          v = (p === `paused` ? 0 : (i ?? 100)) * s * g,
          y = ie(0),
          b = l(0),
          x = l(!1),
          S = l(!1),
          C = l(!1),
          w = (e) => {
            C.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          nt((e, t) => {
            let n = Math.abs(y.getVelocity()),
              r = S.current ? v * u : v;
            if (performance.now() > b.current && (!x.current || n < Math.abs(r))) {
              let e = (t / 1e3) * r,
                n = y.get() - e;
              ((x.current &&= (y.stop(), !1)), y.set(n));
            }
          }),
          c(() => {
            p === `paused` && y.stop();
          }, [p, y]),
          _(wD, {
            ref: t,
            as: h,
            ...m,
            gap: d,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: f,
            _dragX: o === `x` ? y : void 0,
            _dragY: o === `y` ? y : void 0,
            offset: y,
            drag: o,
            dragMomentum: !0,
            onClickCapture: w,
            onDragStart: () => {
              C.current = !0;
            },
            onDragEnd: () => {
              ((b.current = performance.now()),
                (x.current = !0),
                setTimeout(() => {
                  C.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              S.current = !0;
            },
            onMouseLeave: () => {
              S.current = !1;
            },
          })
        );
      })),
      (jD = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (MD = ({ onPlayStateChange: e, children: t }) => {
        let n = C(
          () => ({ start: () => m(() => e(`running`)), stop: () => m(() => e(`paused`)) }),
          [e]
        );
        return _(jD.Provider, { value: n, children: t });
      }),
      (ND = b(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: a,
            tickerEffectXOverflow: o,
            tickerEffectYOverflow: s,
            tickerEffectOverflow: c,
            tickerEffectGap: l,
            tickerEffectDirectionModifier: u,
            tickerEffectHoverModifier: d,
            tickerEffectPosition: f,
            tickerEffectIsDataRepeater: p,
            style: m,
            ...h
          } = e,
          g = Lo(),
          [v, y] = i(`running`),
          b = a?.startsWith(`column`) ? `y` : `x`,
          x = u === `reverse` ? -1 : 1,
          S = W(d) ? d / 100 : 1,
          C = (b === `x` ? (o ?? c ?? `visible`) : (s ?? c ?? `visible`)) === `visible`,
          w = Jm(l, b),
          T = km(n),
          E = { ...m, "--ticker-cms-total-children": p ? T.length : void 0, position: f };
        return g || !r
          ? _(MD, {
              onPlayStateChange: y,
              children: _(kD, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: v,
              }),
            })
          : _(MD, {
              onPlayStateChange: y,
              children: _(AD, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: v,
              }),
            });
      })),
      (PD = (e) => (t) => (t.tickerEffectEnabled ? _(ND, { ...t, as: e }) : _(e, { ...t }))),
      (FD = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (ID = { inputRange: [], outputRange: [] }),
      (LD = (e) =>
        M.forwardRef((t, n) => {
          if (J.current() === J.canvas) return _(e, { ...t, ref: n });
          let [r, i] = Yc(t, FD),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: f,
            } = r,
            [p, m] = M.useState(o),
            h = M.useRef(!1),
            g = qs(n);
          Zs(
            g,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && h.current === !0) ||
                (h.current !== e &&
                  ((h.current = e),
                  M.startTransition(() => {
                    m(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let v = Bt(),
            y = M.useRef(v);
          return (
            M.useEffect(() => {
              if (f || !u) return;
              y.current !== v && ((y.current = v), M.startTransition(() => m(o)));
              let e = {},
                t;
              return ue((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = Xm(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(re(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  M.startTransition(() => {
                    m(l);
                  }));
              });
            }, [v, s, c, u, t.variant, f, d]),
            xl(f, (e) => M.startTransition(() => m(e)), { enabled: l, repeat: !s }),
            Vt(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              M.startTransition(() => m(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? _(e, { ...i, variant: p ?? t.variant, ref: g })
              : _(e, { ...i })
          );
        })),
      (RD = M.createContext(void 0)),
      (zD = () => M.useContext(RD)),
      (BD = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (VD = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (HD = BD),
      (UD = `System Default`),
      (WD = class {
        name = `local`;
        fontFamilies = [];
        byFamilyName = new Map();
        fontAliasBySelector = new Map();
        fontAliases = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(HD)) {
            let n = HD[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(VD)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: UD, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Qm(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (GD = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (KD = class extends Map {
        _hash = 0;
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (JD = `Variable`),
      (YD = `BI;`),
      (XD = class {
        name = `builtIn`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetByKey = new Map();
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = rh(n),
              u = sh(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: oh(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? dh(u, e.font.faceDescriptors?.weight) : uh(c),
                style: ph(c),
                cssFamilyName: ih(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = uh(e.variant),
                r = uh(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = fh(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : ZD[t],
            style: ph(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          H(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return oh(t)
            ? t?.map((e) => {
                if (ch(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${YD}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(YD)) return null;
          let [t, n] = e.split(YD);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (ZD = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (QD = yf(`custom-font-source`)),
      ($D = `CUSTOM;`),
      (eO = `CUSTOMV2;`),
      (tO = class e {
        name = `custom`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetsByKey = new Map();
        debugByFamily = new Map();
        debugFamilies;
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = Ch(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = rh(i),
              f = Eh(i),
              p = Sh(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: oh(u),
                variationAxes: sh(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = xh(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              QD.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              Dh(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && Th(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = Oh(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${eO}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${$D}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            H(vh(e), `Selector must be a custom font selector`),
            bh(e) ? e.slice($D.length) : e.slice(eO.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          H(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return oh(t)
            ? t?.map((e) => {
                if (ch(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (nO = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (rO = `FS;`),
      (iO = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (aO = Object.keys(iO)),
      (oO = RegExp(`^(?:${[...aO, `italic`, `variable`].join(`|`)})`, `u`)),
      (sO = class e {
        name = `fontshare`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = aO.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && iO[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(rO)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(rO, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${rO}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${rO}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await kh(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!oO.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = mh(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: Nh(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: ih(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await Ah(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (cO = `Inter`),
      (lO = `FR;`),
      (uO = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (dO = class e {
        name = `framer`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(lO) && !e.startsWith(cO)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && uO[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${lO}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await Ah(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (fO = `GF;`),
      (pO = class e {
        name = `google`;
        fontFamilies = [];
        byFamilyName = new Map();
        supportedSubsetsByFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        getSupportedSubsetsByFamilyName(e) {
          return this.supportedSubsetsByFamilyName.get(e) ?? [];
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(fO)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(fO, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${fO}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${fO}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.supportedSubsetsByFamilyName.clear());
          let i = await kh(`google`),
            a = [],
            o = Fh(t, (e) => e.family),
            s = Fh(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            this.supportedSubsetsByFamilyName.set(n.family, n.subsets ?? []);
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(Zm),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (Zm(e) ? mh(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: Ph(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: ih(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await Ah(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (mO = Ze(b_(), 1)),
      (hO = 5e3),
      (gO = 3),
      (_O = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (vO = new Map()),
      (yO = new Map()),
      (bO = new Map()),
      (xO = (e, t) => Rh(e, t)),
      (SO = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (CO = class {
        enabled = !1;
        bySelector = new KD();
        loadedSelectors = new Set();
        getGoogleFontsListPromise;
        getFontshareFontsListPromise;
        getBuiltInFontsListPromise;
        customFontsImportPromise = new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        });
        constructor() {
          ((this.local = new WD()),
            (this.google = new pO()),
            (this.fontshare = new sO()),
            (this.framer = new dO()),
            (this.custom = new tO()),
            (this.builtIn = new XD()),
            this.importLocalFonts());
        }
        local;
        google;
        fontshare;
        builtIn;
        framer;
        custom;
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        bySelectorValuesCache;
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await Wx.fetchGoogleFontsList(),
                n = await Vh(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = Wx.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Vh(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = Wx.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Vh(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!vh(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            vh(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                Bh({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = pO.parseVariant(n.variant);
            if (Zm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: ah(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = sO.parseVariant(r.variant);
            if (Zm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: ah(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = XD.parseVariant(i.variant);
            if (Zm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: ah(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return dO.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = _h(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Rn() || (await zh(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await xO({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await xO({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (Bh({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              U(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(rO)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Vi(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(fO)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Vi(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(YD)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Vi(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(vh) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Vi(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !wO.loadedSelectors.has(e));
          n.length !== 0 &&
            (await wO.loadWebFontsFromSelectors(n),
            n.every((e) => wO.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (H(e, `Can’t find Inter font`), e);
        }
        testing = { addFont: this.addFont.bind(this) };
      }),
      (wO = new CO()),
      (TO = (e) => e.target.value),
      (EO = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (DO = b(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            max: a,
            min: o,
            placeholder: c,
            required: l,
            step: u,
            style: d,
            type: f,
            maxLength: p,
            value: h,
            defaultValue: g,
            autofillEnabled: v,
            onChange: y,
            onBlur: b,
            onInvalid: x,
            onFocus: S,
            onValid: C,
            onClear: w,
            ...E
          } = e,
          D = Kh(h ?? g, f),
          [O, k, A] = Gh(D ?? ``, !0, y),
          j = hi(D),
          M = s(() => {
            (k(``), w && m(() => w()));
          }, [w, k]),
          N = vo(C, x, A, b, S),
          ee = s(
            (e) => {
              e.target === e.currentTarget && j.current?.focus();
            },
            [j]
          );
        if (f === `hidden`) return _(I.input, { type: `hidden`, name: i, defaultValue: g });
        let P = v === !1 ? EO : void 0,
          te = !!O,
          ne = !!w && te,
          F = Jc(OO, ex, r, f === `text` && kO, f === `textarea` && AO);
        return T(I.div, {
          ref: t,
          onClick: ee,
          style: d,
          className: F,
          ...E,
          children: [
            f === `textarea`
              ? _(I.textarea, {
                  ref: j,
                  ...P,
                  ...N,
                  required: l,
                  autoFocus: n,
                  name: i,
                  placeholder: c,
                  className: $b,
                  value: O,
                  maxLength: p,
                })
              : _(I.input, {
                  ref: j,
                  ...P,
                  ...N,
                  type: f,
                  required: l,
                  autoFocus: n,
                  name: i,
                  placeholder: c,
                  className: Jc($b, !te && tx),
                  value: O,
                  min: o,
                  max: a,
                  step: u,
                  maxLength: p,
                }),
            ne &&
              _(`button`, {
                type: `button`,
                className: jO,
                onClick: M,
                "aria-label": `Clear`,
                children: _(qh, {}),
              }),
          ],
        });
      })),
      (OO = `framer-form-text-input`),
      (kO = `framer-form-text-input-type`),
      (AO = `framer-form-textarea-input-type`),
      (jO = `framer-form-text-input-clear`),
      (MO = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (NO = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (PO = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (FO = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (IO = Jb(
        DO,
        [
          ...rx,
          ...ox,
          ...ix,
          Z(`.${ex}`, {
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: Z.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: Z.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: Z.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: Z.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            background: Z.variable(`--framer-input-background`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${OO} .${$b}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${OO}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${OO} .${$b}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          Z(`.${OO}.${AO}`, { padding: 0 }),
          Z(`.${OO}.${AO} textarea.${$b}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${OO} .${$b}[type="date"], .${OO} .${$b}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${OO} .${$b}::-webkit-date-and-time-value`, { textAlign: `start` }),
          Z(`.${OO} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${OO} textarea::-webkit-resizer`, { background: `no-repeat ${mt(MO)}` }),
          Z(`.${OO}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${mt(NO)}` }),
          Z(`.${OO} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          Z(`.${OO} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          Z(`.${OO} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${OO} .${$b}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${OO} .${$b}.${tx}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          Z(`.${OO}.${kO}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${dx}px`,
            height: `${dx}px`,
            marginRight: `${ux}px`,
            ...fx,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${OO} .${$b}[type="date"]::before, .${OO} .${$b}[type="time"]::before`, {
            ...px,
            paddingLeft: `${lx}px`,
            maskPosition: `${lx}px center`,
            backgroundPosition: `${lx}px center`,
          }),
          Z(`.${OO} .${$b}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, mt(PO)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${OO} .${$b}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, mt(FO)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${OO} .${$b}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${dx}px`,
            height: `100%`,
          }),
          Z(`.${OO}:focus-within, .${OO}.${nx}`, {
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          Z(`.${OO}:focus-within::after, .${OO}.${nx}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, ax),
          }),
          Z(`.${jO}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${dx}px`,
            height: `${dx}px`,
            marginLeft: `${ux}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${jO}:hover, .${jO}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (LO = M.forwardRef(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            required: a,
            hidden: o,
            defaultValue: s,
            value: c,
            selectOptions: l,
            style: u,
            onValid: d,
            onChange: f,
            onBlur: p,
            onInvalid: m,
            onFocus: h,
            ...g
          } = e,
          v = uu(),
          y = !v && c !== void 0,
          b = c ?? ``,
          [x, , S] = Gh(b, y, f),
          C = hi(y ? b : s),
          w = vo(d, m, S, p, h);
        return o
          ? _(I.input, { type: `hidden`, name: i, defaultValue: s })
          : _(I.div, {
              ref: t,
              style: u,
              className: Jc(ex, RO, r),
              ...g,
              children: _(
                I.select,
                {
                  ref: C,
                  name: i,
                  autoFocus: n,
                  required: a,
                  className: $b,
                  defaultValue: s,
                  value: y ? x : void 0,
                  ...w,
                  children: l?.map((e, t) => {
                    switch (e.type) {
                      case `divider`:
                        return _(`hr`, {}, t);
                      case `option`:
                        return _(
                          `option`,
                          {
                            value: e.value ?? e.title,
                            disabled: e.disabled,
                            children: e.title ?? e.value,
                          },
                          t
                        );
                      default:
                        return U(e);
                    }
                  }),
                },
                v ? Jh(s) : void 0
              ),
            });
      })),
      (RO = `framer-form-select-wrapper`),
      (zO = 16),
      (BO = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${zO}" height="${zO}"><path d="M 3.5 6 L 8 10.5 L 12.5 6" fill="transparent" stroke-width="1.5" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`),
      (VO = Jb(
        LO,
        [
          ...rx,
          ...ox,
          ...ix,
          Z(`.${RO}`, {
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            background: Z.variable(`--framer-input-background`),
            borderTopLeftRadius: Z.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: Z.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: Z.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: Z.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${RO} select`, {
            appearance: `none`,
            "-webkit-appearance": `none`,
            padding: Z.variable(`--framer-input-padding`),
            background: `transparent`,
          }),
          Z(`.${RO}::before`, {
            ...px,
            paddingLeft: `${lx}px`,
            backgroundPosition: `${lx}px center`,
            maskPosition: `${lx}px center`,
            backgroundImage: Z.variable(`--framer-input-icon-image`),
            maskImage: Z.variable(`--framer-input-icon-mask-image`, `url('${BO}')`),
          }),
          Z(`.${RO} select:required:invalid`, {
            color: Z.variable(`--framer-input-invalid-text-color`),
          }),
          Z(`.${RO}:focus-within, .${RO}.${nx}`, {
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
          }),
          Z(`.${RO}:focus-within::after, .${RO}.${nx}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, ax),
          }),
          Z(`.${RO} select option`, { color: `#000` }),
          Z(`.${RO} select option:disabled`, { color: `rgba(0, 0, 0, 0.4)` }),
        ],
        `framer-lib-form-select`
      )),
      (HO = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (UO = { opacity: 0 }),
      (WO = { opacity: 1 }),
      (GO = ag(
        M.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            u = { ...c },
            d = C(() => rs(n), [n]),
            [f, p] = i();
          M.useEffect(() => {
            if (!n?.src || !s || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                m(() => p({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, s, d]);
          let h = d ?? f;
          return (
            s && h && ((u[s] = `auto`), (u.aspectRatio = h.width / h.height)),
            n && delete u.background,
            T(is(e.as), {
              ...l,
              style: u,
              ref: t,
              draggable: o,
              children: [n && _(Qo, { image: n, alt: a, draggable: o }), r],
            })
          );
        })
      )),
      (qO = !Pn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (JO =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (YO = `{{ text-placeholder }}`),
      (XO = `rich-text-wrapper`),
      (ZO = Do(
        b(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: u,
              fonts: d = [],
              width: f,
              height: p,
              left: m,
              right: h,
              top: g,
              bottom: v,
              center: y,
              className: b,
              stylesPresetsClassName: x,
              visible: S = !0,
              opacity: w,
              rotation: T = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = J.current,
              withExternalLayout: k = !1,
              positionSticky: A,
              positionStickyTop: j,
              positionStickyRight: M,
              positionStickyBottom: N,
              positionStickyLeft: ee,
              __htmlStructure: P,
              __fromCanvasComponent: te = !1,
              _forwardedOverrideId: ne,
              _forwardedOverrides: F,
              _usesDOMRect: re,
              children: ie,
              ...ae
            } = e,
            oe = io(),
            se = us(e),
            ce = l(null),
            le = n ?? ce,
            { navigate: ue, getRoute: de } = Lt(),
            fe = zt();
          (Jn(e.preload ?? []), gs(e, le));
          let pe = t($x),
            me = uu(),
            L = s,
            he = ne ?? r;
          if (he && F) {
            let e = F[he];
            typeof e == `string` && (L = e);
          }
          let ge = ``;
          if (L) {
            let e = sg(L);
            ge = P ? P.replace(YO, e) : `<p>${e}</p>`;
          } else if (a) ge = a;
          else if (u) {
            let e = sg(u);
            ge = P ? P.replace(YO, e) : `<p>${e}</p>`;
          } else o && (ge = o);
          let _e = Pu(),
            ve = C(() => (me || !de || !fe ? ge : cg(ge, de, fe, _e)), [ge, de, fe, _e]);
          if (
            (c(() => {
              let e = le.current;
              if (e === null) return;
              function t(e) {
                let t = Ou(e.target, le.current);
                Vn(e) ||
                  !ue ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (gu(ue, t, _e) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [ue, _e]),
            dg(d, te, le),
            !S)
          )
            return null;
          let ye = D && O() === J.canvas,
            R = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: ug(E),
              opacity: ye ? 0 : w,
              flexShrink: 0,
            },
            be = J.hasRestrictions(),
            xe = to(e, oe || 0, !1),
            Se = re && (f === `auto` || p === `auto`),
            Ce =
              e.transformTemplate || !xe || !be || te || Se
                ? (e.transformTemplate ?? ls(y))
                : void 0;
          if (!k) {
            if (xe && be && !Se) {
              let e = nb.getNumber(T).toFixed(4);
              ((R.transform = `translate(${xe.x}px, ${xe.y}px) rotate(${e}deg)`),
                (R.width = xe.width),
                (R.minWidth = xe.width),
                (R.height = xe.height));
            } else
              ((R.left = m),
                (R.right = h),
                (R.top = g),
                (R.bottom = v),
                (R.width = f),
                (R.height = p),
                (R.rotate = T));
            A
              ? (!me || pe) &&
                ((R.position = `sticky`),
                (R.willChange = `transform`),
                (R.top = j),
                (R.right = M),
                (R.bottom = N),
                (R.left = ee))
              : me && (e.positionFixed || e.positionAbsolute) && (R.position = `absolute`);
          }
          return (
            Kc(e, R),
            Uc(e, R),
            Object.assign(R, e.style),
            _(I.div, {
              id: r,
              ref: le,
              ...ae,
              style: R,
              layoutId: se,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": y,
              className: Jc(b, x, XO),
              transformTemplate: Ce,
              dangerouslySetInnerHTML: { __html: ve },
            })
          );
        })
      )),
      (QO = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      ($O = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (ek = b(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (tk = I.create(ek)),
      (nk = b(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return _(tk, {
          ...r,
          ref: i,
          viewBox: t,
          children: _(I.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (rk = []),
      (ik = `RichTextContainer`),
      (ak = b(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: u,
            center: d,
            children: f,
            environment: p = J.current,
            fonts: m = rk,
            height: h,
            isEditable: g = !1,
            left: v,
            name: y,
            opacity: b,
            positionSticky: x,
            positionStickyBottom: S,
            positionStickyLeft: w,
            positionStickyRight: T,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: ee = `top`,
            visible: P = !0,
            width: te,
            withExternalLayout: ne = !1,
            viewBox: F,
            viewBoxScale: I = 1,
            effect: re,
            ...ie
          } = e,
          ae = io(),
          oe = p(),
          se = oe === J.canvas,
          ce = se || oe === J.export,
          le = t($x),
          ue = us(e),
          de = l(null),
          fe = n ?? de;
        (gs(e, fe), dg(m, r, fe));
        let pe = bg(re, fe),
          me = C(() => {
            if (f) return Og(f, j, M, s, void 0, pe.getTokenizer());
          }, [f, j, M, s, pe]);
        if (!P) return null;
        let L = { opacity: g && se ? 0 : b },
          he = ug(ee);
        he !== _x.justifyContent && (L.justifyContent = he);
        let ge = {},
          _e = J.hasRestrictions(),
          ve = to(e, ae || 0, !1),
          ye = o && (te === `auto` || h === `auto`),
          R =
            e.transformTemplate || !ve || !_e || r || ye ? (e.transformTemplate ?? ls(d)) : void 0;
        (ne ||
          (ve && _e && !ye
            ? ((ge.x = ve.x + (B(k?.x) ? k.x : 0)),
              (ge.y = ve.y + (B(k?.y) ? k.y : 0)),
              (ge.left = 0),
              (ge.top = 0),
              (L.rotate = nb.getNumber(O)),
              (L.width = ve.width),
              (L.minWidth = ve.width),
              (L.height = ve.height))
            : ((L.left = v),
              (L.right = D),
              (L.top = N),
              (L.bottom = u),
              (L.width = te),
              (L.height = h),
              (L.rotate = O)),
          x
            ? (!ce || le) &&
              ((L.position = `sticky`),
              (L.willChange = `transform`),
              (L.top = E),
              (L.right = T),
              (L.bottom = S),
              (L.left = w))
            : se && (e.positionFixed || e.positionAbsolute) && (L.position = `absolute`)),
          Kc(e, L),
          Uc(e, L),
          Object.assign(L, A, k, ge),
          ue && (ie.layout = `preserve-aspect`));
        let be = is(e.as),
          xe = ie[`data-framer-name`] ?? y,
          Se = se ? Tg(Lx(ie)) : ie;
        return z(e.viewBox)
          ? e.as === void 0
            ? _(nk, {
                ...Se,
                ref: fe,
                style: L,
                layoutId: ue,
                viewBox: F,
                viewBoxScale: I,
                transformTemplate: R,
                "data-framer-name": xe,
                "data-framer-component-type": ik,
                children: me,
              })
            : _(be, {
                ...Se,
                ref: fe,
                style: L,
                layoutId: ue,
                transformTemplate: R,
                "data-framer-name": xe,
                "data-framer-component-type": ik,
                children: _(nk, {
                  viewBox: F,
                  viewBoxScale: I,
                  style: { width: `100%`, height: `100%` },
                  children: me,
                }),
              })
          : _(be, {
              ...Se,
              ref: fe,
              style: L,
              layoutId: ue,
              transformTemplate: R,
              "data-framer-name": xe,
              "data-framer-component-type": ik,
              children: me,
            });
      })),
      (ok = Do(
        b(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (z(a)) {
            !r.stylesPresetsClassName &&
              V(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [z(t) ? `html` : `htmlFromDesign`]: a };
            return _(ZO, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && z(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return _(ak, { ...r, ref: i, children: y(a) ? a : void 0 });
        })
      )),
      (sk = `framer/asset-reference,`),
      (ck = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = Vg(t);
        return _(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: _(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (lk = Fn()),
      (uk = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (dk = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (fk = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(sS(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Hg(e);
            (s &&
              (t && Ug(s, n),
              (s.id = n),
              (o = Jg(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          lk && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = dk),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          lk && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new uk(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !lk) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        lk && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${dk}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (pk = new fk()),
      (mk = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (hk = b(function (e, t) {
        let n = io(),
          r = us(e),
          i = M.useRef(null),
          a = t ?? i,
          o = zD();
        return (
          gs(e, i),
          _(_k, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (gk = 5e4),
      (_k = class e extends oS {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...oS.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return to(e, e.parentSize || 0);
        }
        container = M.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return to(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (pk.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || Qg(this.container, this.props);
        }
        componentWillUnmount() {
          (pk.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (Zx.isImageObject(t) &&
            Zx.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            xs(this.svgElement, `fill`, null, !1),
            Qg(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = nb.getNumber(r);
          if (
            ((e.opacity = W(this.props.opacity) ? this.props.opacity : 1), J.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              Qa(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = Tb;
            if (l === J.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: g,
            width: v,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            E = {};
          (this.collectLayout(w, E),
            Vc(this.props, w),
            Kc(this.props, w),
            oS.applyWillChange(this.props, w, !1));
          let D = null;
          if (typeof r == `string` || q.isColorObject(r)) {
            let e = q.isColorObject(r) ? r.initialValue || q.toRgbString(r) : r;
            ((w.fill = e), (w.color = e));
          } else if (mS.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${mS.hash(t)}`;
            w.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = Ng(t, x);
            D = _(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: _(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (gS.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${gS.hash(t)}`;
            w.fill = `url(#${n})`;
            let i = Pg(t, x);
            D = _(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: _(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (Zx.isImageObject(r)) {
            let e = zg(r, C, x);
            e &&
              ((w.fill = `url(#${e.id})`),
              (D = _(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: _(`defs`, { children: _(ck, { ...e }) }),
              })));
          }
          let k = { "data-framer-component-type": `SVG` },
            A = !S;
          A && Object.assign(k, os(this.props.center));
          let j =
              !y &&
              !D &&
              !w.fill &&
              !w.background &&
              !w.backgroundImage &&
              i.length < gk &&
              !Yg(i) &&
              !Xg(i),
            M = null;
          if (j)
            ((w.backgroundSize = `100% 100%`),
              (w.backgroundImage = mt(i)),
              pk.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = pk.subscribe(i, !m, e, y);
            (pk.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              Zg(w) && (w.overflow = `hidden`),
              (M = T(O, {
                children: [
                  D,
                  _(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: E,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    Zx.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let N = is(this.props.as),
            { href: ee, target: P, rel: te, onClick: ne, onTap: F } = this.props,
            I = s || c;
          return _(N, {
            ...k,
            ...b,
            layoutId: l,
            transformTemplate: A ? ls(this.props.center) : void 0,
            id: e,
            ref: p,
            style: w,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: I ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": I ? void 0 : `true`,
            onTap: F,
            onClick: ne,
            href: ee,
            target: P,
            rel: te,
            children: M,
          });
        }
      }),
      (vk = Do(hk)),
      (yk = 1e3),
      (bk = `explicitInter`),
      (Re.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = F(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  pk as $,
  wO as A,
  Fo as B,
  ow as C,
  LD as Ct,
  Fx as D,
  Po as E,
  vC as F,
  xk as G,
  dv as H,
  qb as I,
  bi as J,
  St as K,
  r_ as L,
  bC as M,
  _C as N,
  Xb as O,
  yC as P,
  zv as Q,
  i_ as R,
  vk as S,
  PD as St,
  n_ as T,
  ki as U,
  qp as V,
  yt as W,
  zi as X,
  _w as Y,
  am as Z,
  dD as _,
  Jb as _t,
  oT as a,
  tm as at,
  IT as b,
  sl as bt,
  cC as c,
  Lo as ct,
  Ew as d,
  Bi as dt,
  gi as et,
  H_ as f,
  lm as ft,
  pC as g,
  Em as gt,
  _f as h,
  Lt as ht,
  La as i,
  su as it,
  m_ as j,
  Jc as k,
  kw as l,
  Xr as lt,
  ir as m,
  Gt as mt,
  aw as n,
  Fl as nt,
  IO as o,
  ec as ot,
  Vw as p,
  dm as pt,
  N_ as q,
  Vb as r,
  zt as rt,
  VO as s,
  uu as st,
  qC as t,
  Zp as tt,
  GO as u,
  Yr as ut,
  J as v,
  Dm as vt,
  $g as w,
  Fv as wt,
  ok as x,
  f_ as xt,
  yu as y,
  GC as yt,
  t_ as z,
};
//# sourceMappingURL=framer.CxSNfGk-.mjs.map
