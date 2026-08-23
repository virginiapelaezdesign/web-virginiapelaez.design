import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  N as a,
  O as o,
  P as s,
  R as c,
  S as l,
  T as u,
  _ as d,
  a as f,
  c as p,
  g as m,
  h as ee,
  i as h,
  j as g,
  k as te,
  l as _,
  m as v,
  n as y,
  o as b,
  p as ne,
  r as x,
  s as re,
  t as S,
  u as C,
  v as ie,
  w,
  y as T,
  z as E,
} from "./react.DwDJOhmk.mjs";
import {
  E as D,
  G as ae,
  V as oe,
  Y as se,
  a as ce,
  et as le,
  i as ue,
  r as de,
  s as fe,
  v as pe,
} from "./motion.C18vkCAc.mjs";
import {
  A as me,
  C as O,
  E as k,
  G as A,
  J as he,
  K as j,
  L as M,
  Q as ge,
  R as N,
  T as P,
  U as _e,
  W as F,
  X as I,
  Z as ve,
  _t as ye,
  at as be,
  b as L,
  c as xe,
  d as Se,
  et as Ce,
  f as we,
  g as R,
  gt as Te,
  h as Ee,
  ht as De,
  i as z,
  it as Oe,
  j as B,
  k as V,
  l as ke,
  lt as Ae,
  m as je,
  n as H,
  nt as Me,
  p as Ne,
  pt as Pe,
  r as U,
  rt as Fe,
  st as Ie,
  t as W,
  tt as Le,
  u as Re,
  ut as ze,
  v as Be,
  wt as Ve,
  x as G,
  xt as He,
  y as Ue,
  yt as We,
  z as Ge,
} from "./framer.CxSNfGk-.mjs";
import { n as Ke, t as qe } from "./AKS68MnlV.C11wAe7P.mjs";
import {
  C as Je,
  E as Ye,
  F as Xe,
  I as Ze,
  L as Qe,
  M as $e,
  N as et,
  P as tt,
  R as nt,
  S as rt,
  T as K,
  b as it,
  j as at,
  l as ot,
  u as st,
  w as ct,
  x as lt,
  y as ut,
} from "./shared-lib.D0roSlvA.mjs";
import { n as dt, t as ft } from "./iYgDlDMmH.DJlzTzd_.mjs";
function pt(
  e,
  { showYear: t, showMonth: n, showWeekday: r, showMinutes: i, showSeconds: a },
  o,
  s,
  c
) {
  let l = new Date(),
    u = !r && !n && t;
  switch (e) {
    case `date`:
      return new Intl.DateTimeFormat(c, {
        weekday: r ? `long` : void 0,
        day: u ? void 0 : `numeric`,
        month: n ? s : void 0,
        year: t ? `numeric` : void 0,
      }).format(l);
    case `time`:
      return new Intl.DateTimeFormat(c, {
        hour: `numeric`,
        minute: i ? `numeric` : void 0,
        second: a && i ? `numeric` : void 0,
        hour12: o === `12h`,
      }).format(l);
    default:
      return new Intl.DateTimeFormat(c).format(l);
  }
}
function mt(e) {
  let {
      outputType: t,
      timeFormat: r,
      showYear: s,
      showMonth: c,
      showWeekday: l,
      showMinutes: u,
      showSeconds: f,
      monthFormat: m,
      color: ee,
      font: h,
      tabularFont: g,
    } = { ...q, ...e },
    te = Ae(),
    _ = i(
      () =>
        pt(
          t,
          { showYear: s, showMonth: c, showWeekday: l, showMinutes: u, showSeconds: f },
          r,
          m,
          te
        ),
      [te, m, t, u, c, f, l, s, r]
    ),
    v = o(),
    y = i(
      (e) => {
        if (e === null) {
          clearTimeout(v.current);
          return;
        }
        let t,
          n = () => {
            let r = new Date(),
              i = new Date().setSeconds(r.getSeconds() + 1, 0) - +r;
            v.current = setTimeout(n, i);
            let a = _();
            t !== a && ((e.textContent = a), (t = a));
          };
        n();
      },
      [_]
    ),
    [b, ne] = n(!1),
    x = Be.current() === Be.canvas;
  return (
    a(() => {
      d(() => ne(!0));
    }, [x]),
    p(`p`, {
      suppressHydrationWarning: !0,
      style: {
        margin: 0,
        padding: 0,
        color: ee,
        fontFamily: ht,
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1,
        visibility: b ? `visible` : `hidden`,
        ...h,
        fontVariantNumeric: g ? `tabular-nums` : `normal`,
        whiteSpace: `nowrap`,
      },
      ref: x ? void 0 : y,
      children: _(),
    })
  );
}
var ht,
  q,
  gt = e(() => {
    (b(),
      A(),
      w(),
      (ht = `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`),
      (q = {
        height: 20,
        width: 140,
        outputType: `time`,
        color: `#999`,
        timeFormat: `24h`,
        showYear: !0,
        showMonth: !0,
        showWeekday: !0,
        showMinutes: !0,
        showSeconds: !0,
        monthFormat: `long`,
        alignment: `center`,
      }),
      (mt.displayName = `Time & Date`),
      k(mt, {
        outputType: {
          title: `Type`,
          type: U.Enum,
          displaySegmentedControl: !0,
          options: [`date`, `time`],
          optionTitles: [`Date`, `Time`],
          defaultValue: q.outputType,
        },
        showWeekday: {
          title: `Day`,
          type: U.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: q.showWeekday,
          hidden: (e) => e.outputType !== `date`,
        },
        showMonth: {
          title: `Month`,
          type: U.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: q.showMonth,
          hidden: (e) => e.outputType !== `date`,
        },
        monthFormat: {
          title: `Format`,
          type: U.Enum,
          options: [`short`, `long`, `numeric`],
          optionTitles: [`Short`, `Long`, `Numeric`],
          defaultValue: q.monthFormat,
          hidden: (e) => e.outputType !== `date` || !e.showMonth,
        },
        showYear: {
          title: `Year`,
          type: U.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: q.showYear,
          hidden: (e) => e.outputType !== `date`,
        },
        timeFormat: {
          title: `Format`,
          type: U.Enum,
          options: [`12h`, `24h`],
          optionTitles: [`12h`, `24h`],
          displaySegmentedControl: !0,
          defaultValue: q.timeFormat,
          hidden: (e) => e.outputType !== `time`,
        },
        showMinutes: {
          title: `Minutes`,
          type: U.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: q.showMinutes,
          hidden: (e) => e.outputType !== `time`,
        },
        showSeconds: {
          title: `Seconds`,
          type: U.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: q.showSeconds,
          hidden: (e) => e.outputType !== `time` || !e.showMinutes,
        },
        font: { type: U.Font, controls: `extended` },
        tabularFont: { title: `Tabular`, type: U.Boolean, defaultValue: !0 },
        color: { type: U.Color, defaultValue: q.color },
      }));
  });
function _t(e) {
  let {
      slots: t = [],
      gap: r,
      padding: s,
      paddingPerSide: c,
      paddingTop: f,
      paddingRight: m,
      paddingBottom: ee,
      paddingLeft: h,
      speed: v,
      hoverFactor: y,
      direction: b,
      alignment: ne,
      sizingOptions: x,
      fadeOptions: re,
      style: S,
    } = e,
    { fadeContent: C, overflow: ie, fadeWidth: w, fadeInset: T, fadeAlpha: E } = re,
    { widthType: ue, heightType: de } = x,
    fe = c ? `${f}px ${m}px ${ee}px ${h}px` : `${s}px`,
    me = Be.current(),
    O = me === Be.canvas || me === Be.export,
    k = vt(),
    A = t.filter(Boolean),
    he = u.count(A),
    j = he > 0,
    M = ae(0),
    ge = yt(b === !0 ? `left` : b, k),
    N = ge === `left` || ge === `right`,
    P = xt[ge];
  le(M, P);
  let _e = o(null),
    F = g(() => [{ current: null }, { current: null }], []),
    [I, ve] = n({ parent: null, children: null }),
    ye = null,
    be = [],
    L = 0,
    xe = 0;
  (O && ((L = he ? Math.floor(10 / he) : 0), (xe = 1)),
    !O &&
      j &&
      I.parent &&
      ((L = Math.round((I.parent / I.children) * 2) + 1), (L = Math.min(L, bt)), (xe = 1)));
  let Se = i(() => {
      if (j && _e.current) {
        let e = N ? _e.current.offsetWidth : _e.current.offsetHeight,
          t = F[0].current ? (N ? F[0].current.offsetLeft : F[0].current.offsetTop) : 0,
          n =
            (F[1].current
              ? N
                ? F[1].current.offsetLeft + F[1].current.offsetWidth
                : F[1].current.offsetTop + F[1].current.offsetHeight
              : 0) -
            t +
            r;
        d(() => {
          ve({ parent: e, children: n });
        });
      }
    }, []),
    Ce = O ? { contentVisibility: `auto` } : {};
  if (j) {
    if (!O) {
      let e = o(!0);
      l(
        () => (
          pe.read(Se, !1, !0),
          ct(_e.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && pe.read(Se, !1, !0), (e.current = !1));
          })
        ),
        []
      );
    }
    ye = u.map(A, (e, t) => {
      let n;
      (t === 0 && (n = F[k === `rtl` && N ? 1 : 0]),
        t === A.length - 1 && (n = F[k === `rtl` && N ? 0 : 1]));
      let r = { width: ue ? e.props?.width : `100%`, height: de ? e.props?.height : `100%` };
      return p(ce, {
        inherit: `id`,
        children: p(St, {
          ref: n,
          style: r,
          children: te(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...Ce },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let we = O ? !0 : oe(_e);
  if (!O)
    for (let e = 0; e < L; e++)
      be = be.concat(
        u.map(A, (t, n) => {
          let r = {
            width: ue ? t.props?.width : `100%`,
            height: de ? t.props?.height : `100%`,
            willChange: we ? `transform` : void 0,
          };
          return p(
            ce,
            {
              inherit: `id`,
              children: p(
                St,
                {
                  style: r,
                  children: te(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: ue ? t.props?.width : `100%`,
                        height: de ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...Ce,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          );
        })
      );
  let R = I.children + I.children * Math.round(I.parent / I.children);
  (o(null), o(null), o(0));
  let Te = o(!1),
    Ee = se(),
    De = o(null),
    z = o(null);
  if (!O) {
    a(() => {
      if (!(Ee || !R || !v))
        return (
          (z.current = De.current.animate(
            { transform: [P(0), P(R)] },
            {
              duration: (Math.abs(R) / v) * 1e3,
              iterations: 1 / 0,
              iterationStart: +(k === `rtl`),
              easing: `linear`,
            }
          )),
          () => z.current.cancel()
        );
    }, [y, R, v, k]);
    let e = i(() => {
      if (!z.current) return;
      let e = document.hidden;
      we && !e && z.current.playState === `paused`
        ? z.current.play()
        : (!we || e) && z.current.playState === `running` && z.current.pause();
    }, [we]);
    (a(() => {
      e();
    }, [we, y, R, v]),
      a(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      ));
  }
  let Oe = N ? `to right` : `to bottom`,
    B = w / 2,
    V = 100 - w / 2,
    ke = `linear-gradient(${Oe}, rgba(0, 0, 0, ${E}) ${Ot(T, 0, B)}%, rgba(0, 0, 0, 1) ${B}%, rgba(0, 0, 0, 1) ${V}%, rgba(0, 0, 0, ${E}) ${100 - T}%)`;
  return j
    ? p(`section`, {
        style: {
          ...Ct,
          opacity: xe,
          WebkitMaskImage: C ? ke : void 0,
          maskImage: C ? ke : void 0,
          overflow: ie ? `visible` : `hidden`,
          padding: fe,
        },
        ref: _e,
        children: _(D.ul, {
          ref: De,
          style: {
            ...Ct,
            gap: r,
            top: b === `bottom` && kt(R) ? -R : void 0,
            left: b === `right` && kt(R) ? R * (k === `rtl` ? 1 : -1) : void 0,
            placeItems: ne,
            position: `relative`,
            flexDirection: N ? `row` : `column`,
            ...S,
            willChange: O || !we ? `auto` : `transform`,
            transform: P(0),
          },
          onMouseEnter: () => {
            ((Te.current = !0), z.current && (z.current.playbackRate = y));
          },
          onMouseLeave: () => {
            ((Te.current = !1), z.current && (z.current.playbackRate = 1));
          },
          children: [ye, be],
        }),
      })
    : _(`section`, {
        style: wt,
        children: [
          p(`div`, { style: Tt, children: `✨` }),
          p(`p`, { style: Et, children: `Connect to Content` }),
          p(`p`, {
            style: Dt,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
function vt() {
  return !E || !E.document || !E.document.documentElement
    ? `ltr`
    : E.document.documentElement.dir === `rtl`
      ? `rtl`
      : `ltr`;
}
function yt(e, t) {
  return t === `rtl` ? (e === `left` ? `right` : e === `right` ? `left` : e) : e;
}
var bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At = e(() => {
    (r(),
      b(),
      w(),
      A(),
      de(),
      Je(),
      (bt = 100),
      (xt = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (St = m(({ children: e, ...t }, n) => {
        let r = o(),
          i = oe(r);
        return (
          T(n, () => r.current),
          a(() => {
            let e = r.current;
            e &&
              (i
                ? e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                  })
                : e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }));
          }, [i]),
          p(`li`, { ...t, "aria-hidden": !i, ref: r, children: e })
        );
      })),
      (_t.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      k(_t, {
        slots: { type: U.Array, title: `Children`, control: { type: U.ComponentInstance } },
        speed: {
          type: U.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: U.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: U.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: U.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: U.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: U.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: U.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: U.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: U.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: U.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: U.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: U.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: U.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: U.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: U.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Ct = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (wt = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Tt = { fontSize: 32, marginBottom: 10 }),
      (Et = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Dt = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (Ot = (e, t, n) => Math.min(Math.max(e, t), n)),
      (kt = (e) => typeof e == `number` && !isNaN(e)));
  });
function jt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  J,
  Ut = e(() => {
    (b(),
      A(),
      de(),
      w(),
      At(),
      nt(),
      rt(),
      (Mt = M(_t)),
      (Nt = { qACXbXKOA: { hover: !0 } }),
      (Pt = [`qACXbXKOA`, `YLzCJK4id`, `YRFCbqxwY`]),
      (Ft = `framer-Z9Mmf`),
      (It = {
        qACXbXKOA: `framer-v-vo2bya`,
        YLzCJK4id: `framer-v-1kn43e9`,
        YRFCbqxwY: `framer-v-agxi1p`,
      }),
      (Lt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rt = ({ value: e, children: n }) => {
        let r = t(fe),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(fe.Provider, { value: a, children: n });
      }),
      (zt = { Desktop: `qACXbXKOA`, Mobile: `YLzCJK4id`, Tablet: `YRFCbqxwY` }),
      (Bt = D.create(s)),
      (Vt = ({
        click: e,
        dropDownMenu: t,
        height: n,
        id: r,
        link: i,
        tickerMenu: a,
        width: o,
        ...s
      }) => ({
        ...s,
        b1z4ar8kI: e ?? s.b1z4ar8kI,
        D8BzjX7jx: t ?? s.D8BzjX7jx ?? `Works`,
        fWAvbfvR3: i ?? s.fWAvbfvR3,
        variant: zt[s.variant] ?? s.variant ?? `qACXbXKOA`,
        vqVYpOGmw: a ?? s.vqVYpOGmw ?? `View About`,
      })),
      (Ht = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = ye(
        m(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ie(),
            { activeLocale: a, setLocale: c } = ze();
          Me();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              vqVYpOGmw: m,
              D8BzjX7jx: ee,
              fWAvbfvR3: h,
              b1z4ar8kI: g,
              ...te
            } = Vt(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: ne,
              gestureVariant: x,
              isLoading: re,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = Te({
              cycleOrder: Pt,
              defaultVariant: `qACXbXKOA`,
              enabledGestures: Nt,
              ref: r,
              variant: f,
              variantClassNames: It,
            }),
            T = Ht(e, w),
            { activeVariantCallback: E, delay: ae } = Le(v),
            oe = E(async (...e) => {
              if ((S({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            se = V(Ft, ut, Xe),
            le = () => x === `qACXbXKOA-hover`;
          return p(ce, {
            id: d ?? i,
            children: p(Bt, {
              animate: w,
              initial: !1,
              children: p(Rt, {
                value: Lt,
                children: p(Ne, {
                  href: h,
                  motionChild: !0,
                  nodeId: `qACXbXKOA`,
                  openInNewTab: !1,
                  scopeId: `FczRnZtS9`,
                  smoothScroll: !0,
                  children: _(D.a, {
                    ...te,
                    ...ne,
                    className: `${V(se, `framer-vo2bya`, u, y)} framer-1nnjh1y`,
                    "data-framer-name": `Desktop`,
                    "data-highlight": !0,
                    layoutDependency: T,
                    layoutId: `qACXbXKOA`,
                    onTap: oe,
                    ref: r,
                    style: { ...l },
                    ...jt(
                      {
                        "qACXbXKOA-hover": { "data-framer-name": void 0 },
                        YLzCJK4id: { "data-framer-name": `Mobile` },
                        YRFCbqxwY: { "data-framer-name": `Tablet` },
                      },
                      v,
                      x
                    ),
                    children: [
                      p(G, {
                        __fromCanvasComponent: !0,
                        children: p(s, {
                          children: p(D.h3, {
                            className: `framer-styles-preset-1mjp4nd`,
                            "data-styles-preset": `jHC2myFmY`,
                            style: { "--framer-text-alignment": `right` },
                            children: `Works`,
                          }),
                        }),
                        className: `framer-1gtkr58`,
                        fonts: [`Inter`],
                        layoutDependency: T,
                        layoutId: `dge776c2i`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          filter: `none`,
                          WebkitFilter: `none`,
                        },
                        text: ee,
                        variants: {
                          "qACXbXKOA-hover": { filter: `blur(9px)`, WebkitFilter: `blur(9px)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      le() &&
                        p(D.div, {
                          className: `framer-cjejfm`,
                          "data-framer-name": `Works Ticker`,
                          layoutDependency: T,
                          layoutId: `RUN0mdplm`,
                          children: p(W, {
                            children: p(O, {
                              className: `framer-1yg3cuk-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: T,
                              layoutId: `M_ucec3Wc-container`,
                              nodeId: `M_ucec3Wc`,
                              rendersWithMotion: !0,
                              scopeId: `FczRnZtS9`,
                              children: p(_t, {
                                alignment: `center`,
                                direction: `left`,
                                fadeOptions: {
                                  fadeAlpha: 0,
                                  fadeContent: !0,
                                  fadeInset: 0,
                                  fadeWidth: 25,
                                  overflow: !1,
                                },
                                gap: 48,
                                height: `100%`,
                                hoverFactor: 1,
                                id: `M_ucec3Wc`,
                                layoutId: `M_ucec3Wc`,
                                padding: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingPerSide: !1,
                                paddingRight: 0,
                                paddingTop: 0,
                                sizingOptions: { heightType: !0, widthType: !0 },
                                slots: [
                                  _(D.div, {
                                    className: `framer-537ne1`,
                                    "data-framer-name": `About`,
                                    layoutDependency: T,
                                    layoutId: `nj8u2Uwsq`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            style: {
                                              "--font-selector": `R0Y7RmlndHJlZS01MDA=`,
                                              "--framer-font-family": `"Figtree", "Figtree Placeholder", sans-serif`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.16px`,
                                              "--framer-line-height": `24px`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                            },
                                            children: `// `,
                                          }),
                                        }),
                                        className: `framer-8q0kui`,
                                        fonts: [`GF;Figtree-500`],
                                        layoutDependency: T,
                                        layoutId: `noLMGWbx3`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-lp4swc`,
                                            "data-styles-preset": `g7I6RCRnx`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                            },
                                            children: `View About`,
                                          }),
                                        }),
                                        className: `framer-1wg1ckl`,
                                        fonts: [`Inter`],
                                        layoutDependency: T,
                                        layoutId: `HIN5pk8II`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: m,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  _(D.div, {
                                    className: `framer-at0h9j`,
                                    "data-framer-name": `About`,
                                    layoutDependency: T,
                                    layoutId: `xDPpzDxd5`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            style: {
                                              "--font-selector": `R0Y7RmlndHJlZS01MDA=`,
                                              "--framer-font-family": `"Figtree", "Figtree Placeholder", sans-serif`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.16px`,
                                              "--framer-line-height": `24px`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                            },
                                            children: `// `,
                                          }),
                                        }),
                                        className: `framer-vdqlle`,
                                        fonts: [`GF;Figtree-500`],
                                        layoutDependency: T,
                                        layoutId: `iAwTKP8C7`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-lp4swc`,
                                            "data-styles-preset": `g7I6RCRnx`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                            },
                                            children: `View About`,
                                          }),
                                        }),
                                        className: `framer-mwd2w2`,
                                        fonts: [`Inter`],
                                        layoutDependency: T,
                                        layoutId: `wmmS69ieG`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: m,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  _(D.div, {
                                    className: `framer-3n5l6l`,
                                    "data-framer-name": `About`,
                                    layoutDependency: T,
                                    layoutId: `aBDw9_mmy`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            style: {
                                              "--font-selector": `R0Y7RmlndHJlZS01MDA=`,
                                              "--framer-font-family": `"Figtree", "Figtree Placeholder", sans-serif`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.16px`,
                                              "--framer-line-height": `24px`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                            },
                                            children: `// `,
                                          }),
                                        }),
                                        className: `framer-1kilong`,
                                        fonts: [`GF;Figtree-500`],
                                        layoutDependency: T,
                                        layoutId: `yHRs3tI0n`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-lp4swc`,
                                            "data-styles-preset": `g7I6RCRnx`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                            },
                                            children: `View About`,
                                          }),
                                        }),
                                        className: `framer-4mfmr7`,
                                        fonts: [`Inter`],
                                        layoutDependency: T,
                                        layoutId: `cojVOj3oD`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: m,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  _(D.div, {
                                    className: `framer-i4xi9t`,
                                    "data-framer-name": `About`,
                                    layoutDependency: T,
                                    layoutId: `DnkpvTaIM`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            style: {
                                              "--font-selector": `R0Y7RmlndHJlZS01MDA=`,
                                              "--framer-font-family": `"Figtree", "Figtree Placeholder", sans-serif`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.16px`,
                                              "--framer-line-height": `24px`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                            },
                                            children: `// `,
                                          }),
                                        }),
                                        className: `framer-123h9wq`,
                                        fonts: [`GF;Figtree-500`],
                                        layoutDependency: T,
                                        layoutId: `a0hPpF38I`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-lp4swc`,
                                            "data-styles-preset": `g7I6RCRnx`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                            },
                                            children: `View About`,
                                          }),
                                        }),
                                        className: `framer-e8i4ci`,
                                        fonts: [`Inter`],
                                        layoutDependency: T,
                                        layoutId: `Uv4QU8K_Y`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: m,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  _(D.div, {
                                    className: `framer-1dh1kjz`,
                                    "data-framer-name": `About`,
                                    layoutDependency: T,
                                    layoutId: `y72sdXQMN`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            style: {
                                              "--font-selector": `R0Y7RmlndHJlZS01MDA=`,
                                              "--framer-font-family": `"Figtree", "Figtree Placeholder", sans-serif`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.16px`,
                                              "--framer-line-height": `24px`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                            },
                                            children: `// `,
                                          }),
                                        }),
                                        className: `framer-1aj9e55`,
                                        fonts: [`GF;Figtree-500`],
                                        layoutDependency: T,
                                        layoutId: `XStJ20GxL`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-lp4swc`,
                                            "data-styles-preset": `g7I6RCRnx`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                            },
                                            children: `View About`,
                                          }),
                                        }),
                                        className: `framer-wgb9h3`,
                                        fonts: [`Inter`],
                                        layoutDependency: T,
                                        layoutId: `ANZeqlly4`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: m,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  _(D.div, {
                                    className: `framer-3vewly`,
                                    "data-framer-name": `About`,
                                    layoutDependency: T,
                                    layoutId: `s2hMc9EEB`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            style: {
                                              "--font-selector": `R0Y7RmlndHJlZS01MDA=`,
                                              "--framer-font-family": `"Figtree", "Figtree Placeholder", sans-serif`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.16px`,
                                              "--framer-line-height": `24px`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                            },
                                            children: `// `,
                                          }),
                                        }),
                                        className: `framer-1b83ogc`,
                                        fonts: [`GF;Figtree-500`],
                                        layoutDependency: T,
                                        layoutId: `dSJnjFu5D`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-lp4swc`,
                                            "data-styles-preset": `g7I6RCRnx`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                            },
                                            children: `View About`,
                                          }),
                                        }),
                                        className: `framer-eq302h`,
                                        fonts: [`Inter`],
                                        layoutDependency: T,
                                        layoutId: `n5FVsDaBx`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: m,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  _(D.div, {
                                    className: `framer-lr1840`,
                                    "data-framer-name": `About`,
                                    layoutDependency: T,
                                    layoutId: `p9e66k6I9`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            style: {
                                              "--font-selector": `R0Y7RmlndHJlZS01MDA=`,
                                              "--framer-font-family": `"Figtree", "Figtree Placeholder", sans-serif`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.16px`,
                                              "--framer-line-height": `24px`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                            },
                                            children: `// `,
                                          }),
                                        }),
                                        className: `framer-1qod3am`,
                                        fonts: [`GF;Figtree-500`],
                                        layoutDependency: T,
                                        layoutId: `pbGb7p6c0`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-lp4swc`,
                                            "data-styles-preset": `g7I6RCRnx`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                            },
                                            children: `View About`,
                                          }),
                                        }),
                                        className: `framer-1j5htl9`,
                                        fonts: [`Inter`],
                                        layoutDependency: T,
                                        layoutId: `baD0Zs_Ed`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: m,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  _(D.div, {
                                    className: `framer-1u45c35`,
                                    "data-framer-name": `About`,
                                    layoutDependency: T,
                                    layoutId: `MfNOorKhd`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            style: {
                                              "--font-selector": `R0Y7RmlndHJlZS01MDA=`,
                                              "--framer-font-family": `"Figtree", "Figtree Placeholder", sans-serif`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.16px`,
                                              "--framer-line-height": `24px`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                            },
                                            children: `// `,
                                          }),
                                        }),
                                        className: `framer-160zxb5`,
                                        fonts: [`GF;Figtree-500`],
                                        layoutDependency: T,
                                        layoutId: `IUhgeOglg`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-lp4swc`,
                                            "data-styles-preset": `g7I6RCRnx`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                            },
                                            children: `View About`,
                                          }),
                                        }),
                                        className: `framer-1nksjtw`,
                                        fonts: [`Inter`],
                                        layoutDependency: T,
                                        layoutId: `M0tOnGF5c`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: m,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                                speed: 100,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Z9Mmf.framer-1nnjh1y, .framer-Z9Mmf .framer-1nnjh1y { display: block; }`,
          `.framer-Z9Mmf.framer-vo2bya { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 1170px; }`,
          `.framer-Z9Mmf .framer-1gtkr58 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Z9Mmf .framer-cjejfm { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; z-index: 2; }`,
          `.framer-Z9Mmf .framer-1yg3cuk-container { flex: 1 0 0px; height: 96px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-Z9Mmf .framer-537ne1, .framer-Z9Mmf .framer-at0h9j, .framer-Z9Mmf .framer-3n5l6l, .framer-Z9Mmf .framer-i4xi9t, .framer-Z9Mmf .framer-1dh1kjz, .framer-Z9Mmf .framer-3vewly, .framer-Z9Mmf .framer-lr1840, .framer-Z9Mmf .framer-1u45c35 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 24px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Z9Mmf .framer-8q0kui, .framer-Z9Mmf .framer-1wg1ckl, .framer-Z9Mmf .framer-vdqlle, .framer-Z9Mmf .framer-mwd2w2, .framer-Z9Mmf .framer-1kilong, .framer-Z9Mmf .framer-4mfmr7, .framer-Z9Mmf .framer-123h9wq, .framer-Z9Mmf .framer-e8i4ci, .framer-Z9Mmf .framer-1aj9e55, .framer-Z9Mmf .framer-wgb9h3, .framer-Z9Mmf .framer-1b83ogc, .framer-Z9Mmf .framer-eq302h, .framer-Z9Mmf .framer-1qod3am, .framer-Z9Mmf .framer-1j5htl9, .framer-Z9Mmf .framer-160zxb5, .framer-Z9Mmf .framer-1nksjtw { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Z9Mmf.framer-v-1kn43e9.framer-vo2bya { overflow: visible; width: 360px; }`,
          `.framer-Z9Mmf.framer-v-1kn43e9 .framer-1gtkr58 { height: 60px; }`,
          `.framer-Z9Mmf.framer-v-agxi1p.framer-vo2bya { overflow: visible; width: 780px; }`,
          `.framer-Z9Mmf.framer-v-agxi1p .framer-1gtkr58 { height: 65px; }`,
          ...it,
          ...Ze,
        ],
        `framer-Z9Mmf`
      )),
      (J.displayName = `Drop Down Menu-Ticker`),
      (J.defaultProps = { height: 108, width: 1170 }),
      k(J, {
        variant: {
          options: [`qACXbXKOA`, `YLzCJK4id`, `YRFCbqxwY`],
          optionTitles: [`Desktop`, `Mobile`, `Tablet`],
          title: `Variant`,
          type: U.Enum,
        },
        vqVYpOGmw: {
          defaultValue: `View About`,
          displayTextArea: !1,
          title: `Ticker Menu`,
          type: U.String,
        },
        onvqVYpOGmwChange: { changes: `vqVYpOGmw`, type: U.ChangeHandler },
        D8BzjX7jx: {
          defaultValue: `Works`,
          displayTextArea: !1,
          title: `DropDown Menu`,
          type: U.String,
        },
        onD8BzjX7jxChange: { changes: `D8BzjX7jx`, type: U.ChangeHandler },
        fWAvbfvR3: { title: `Link`, type: U.Link },
        b1z4ar8kI: { title: `Click`, type: U.EventHandler },
      }),
      P(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Figtree`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Figtree`,
                url: `https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_dNQF5bwkEU4HTy.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Mt,
          ...N(lt),
          ...N(Qe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wt,
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
  X,
  cn = e(() => {
    (b(),
      A(),
      de(),
      w(),
      tt(),
      dt(),
      st(),
      (Wt = M(ft)),
      (Gt = M(ot)),
      (Kt = We(Re)),
      (qt = We(D.div)),
      (Jt = [`MQsGojDe3`, `GhhJX46ap`, `L9WA5OWEK`]),
      (Yt = `framer-BKW6W`),
      (Xt = {
        GhhJX46ap: `framer-v-1n9qh6`,
        L9WA5OWEK: `framer-v-88upq5`,
        MQsGojDe3: `framer-v-5gugik`,
      }),
      (Zt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Qt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      ($t = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (en = { damping: 40, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
      (tn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        transition: en,
        x: 0,
        y: 0,
      }),
      (nn = ({ value: e, children: n }) => {
        let r = t(fe),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(fe.Provider, { value: a, children: n });
      }),
      (rn = { Desktop: `MQsGojDe3`, Phone: `L9WA5OWEK`, Tablet: `GhhJX46ap` }),
      (an = D.create(s)),
      (on = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: rn[r.variant] ?? r.variant ?? `MQsGojDe3`,
      })),
      (sn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = ye(
        m(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ie(),
            { activeLocale: a, setLocale: c } = ze(),
            l = Me(),
            { style: u, className: d, layoutId: f, variant: m, ...ee } = on(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: te,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: ne,
              setVariant: x,
              variants: re,
            } = Te({
              cycleOrder: Jt,
              defaultVariant: `MQsGojDe3`,
              ref: r,
              variant: m,
              variantClassNames: Xt,
            }),
            S = sn(e, re),
            { activeVariantCallback: C, delay: w } = Le(h),
            T = C(async (...e) => {
              x(`MQsGojDe3`);
            }),
            E = V(Yt, at);
          return (
            De(),
            p(ce, {
              id: f ?? i,
              children: p(an, {
                animate: re,
                initial: !1,
                children: p(nn, {
                  value: Zt,
                  children: p(D.footer, {
                    ...ee,
                    ...v,
                    className: V(E, `framer-5gugik`, d, g),
                    "data-framer-name": `Desktop`,
                    layoutDependency: S,
                    layoutId: `MQsGojDe3`,
                    ref: r,
                    style: { ...u },
                    ...Y(
                      {
                        GhhJX46ap: { "data-framer-name": `Tablet` },
                        L9WA5OWEK: { "data-framer-name": `Phone` },
                      },
                      h,
                      y
                    ),
                    children: _(qt, {
                      __framer__spring: {
                        damping: 60,
                        delay: 0,
                        duration: 0.3,
                        ease: [0.44, 0, 0.56, 1],
                        mass: 1,
                        stagger: 0,
                        stiffness: 350,
                        type: `spring`,
                      },
                      __framer__styleTransformEffectEnabled: !0,
                      __framer__transformTargets: [
                        {
                          target: {
                            opacity: 0,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 85,
                          },
                        },
                        {
                          target: {
                            opacity: 1,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 0,
                          },
                        },
                      ],
                      __framer__transformTrigger: `onInView`,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-1kwh97h`,
                      "data-border": !0,
                      "data-framer-name": `Container`,
                      layoutDependency: S,
                      layoutId: `wbCvl5VXW`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-32152519-cfa7-426d-a4e2-5734eaab0f3f, rgba(255, 255, 255, 0.16))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                      },
                      children: [
                        _(D.div, {
                          className: `framer-1xc5gae`,
                          "data-framer-name": `Footer`,
                          layoutDependency: S,
                          layoutId: `bn24lnk5w`,
                          children: [
                            _(D.div, {
                              className: `framer-1wxyiud`,
                              "data-framer-name": `Working Globally`,
                              layoutDependency: S,
                              layoutId: `L9nMnUiI4`,
                              children: [
                                p(W, {
                                  height: 8,
                                  width: `8px`,
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    (((l?.height || 584) - 0 - 612) / 2 + 0 + 0) +
                                    40 +
                                    0 +
                                    0 +
                                    36,
                                  ...Y(
                                    {
                                      GhhJX46ap: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 497) - 0 - 612) / 2 + 0 + 0) +
                                          40 +
                                          0 +
                                          0 +
                                          36,
                                      },
                                      L9WA5OWEK: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 564) - 0 - 812) / 2 + 0 + 0) +
                                          40 +
                                          0 +
                                          0 +
                                          0 +
                                          36,
                                      },
                                    },
                                    h,
                                    y
                                  ),
                                  children: p(O, {
                                    className: `framer-fyflwu-container`,
                                    layoutDependency: S,
                                    layoutId: `mKXK6g8Ne-container`,
                                    nodeId: `mKXK6g8Ne`,
                                    rendersWithMotion: !0,
                                    scopeId: `qzGR0UWWN`,
                                    children: p(ft, {
                                      biL5G1yhC: T,
                                      f9k6Mip7I: `var(--token-1b8a7884-54ba-4999-8dea-81e11d59bd07, rgb(83, 112, 33))`,
                                      GSXD7mfz1: {
                                        borderColor: `var(--token-870e7f39-08be-4348-8a6b-f17e572ddd1b, rgba(255, 255, 255, 0.32))`,
                                        borderStyle: `solid`,
                                        borderWidth: 0,
                                      },
                                      height: `100%`,
                                      id: `mKXK6g8Ne`,
                                      layoutId: `mKXK6g8Ne`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Qt(`oMPSlIJ5z`),
                                      VFuVAcShb: `rgb(255, 255, 255)`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                p(G, {
                                  __fromCanvasComponent: !0,
                                  children: p(s, {
                                    children: p(D.p, {
                                      className: `framer-styles-preset-mmirif`,
                                      "data-styles-preset": `snRA7OcdZ`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                      },
                                      children: `ESPAÑA / TRABAJO REMOTO E HÍBRIDO`,
                                    }),
                                  }),
                                  className: `framer-1qi33q`,
                                  fonts: [`Inter`],
                                  layoutDependency: S,
                                  layoutId: `r38Xy_Nq0`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            _(D.div, {
                              className: `framer-a97gzb`,
                              "data-framer-name": `Sitemap & Quick Menu`,
                              layoutDependency: S,
                              layoutId: `PFD2ZjA5s`,
                              children: [
                                p(G, {
                                  __fromCanvasComponent: !0,
                                  children: p(s, {
                                    children: p(D.p, {
                                      className: `framer-styles-preset-mmirif`,
                                      "data-styles-preset": `snRA7OcdZ`,
                                      children: `Sitemap`,
                                    }),
                                  }),
                                  className: `framer-vsapmg`,
                                  fonts: [`Inter`],
                                  layoutDependency: S,
                                  layoutId: `V8HI2JeDg`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                _(D.div, {
                                  className: `framer-qf1cki`,
                                  "data-framer-name": `Quick Menu`,
                                  layoutDependency: S,
                                  layoutId: `SmGzcPq0q`,
                                  children: [
                                    p(L, {
                                      links: [
                                        {
                                          href: { hash: `:xnI90NXBR`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:xnI90NXBR`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:xnI90NXBR`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        p(W, {
                                          height: 28,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 584) - 0 - 612) / 2 + 0 + 0) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          ...Y(
                                            {
                                              GhhJX46ap: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 497) - 0 - 612) / 2 + 0 + 0) +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                              L9WA5OWEK: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 564) - 0 - 812) / 2 + 0 + 0) +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  110 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            h,
                                            y
                                          ),
                                          children: p(O, {
                                            className: `framer-1ns7uk2-container`,
                                            "data-framer-name": `Footer Menus`,
                                            layoutDependency: S,
                                            layoutId: `FaFQY1q4k-container`,
                                            name: `Footer Menus`,
                                            nodeId: `FaFQY1q4k`,
                                            rendersWithMotion: !0,
                                            scopeId: `qzGR0UWWN`,
                                            children: p(ot, {
                                              height: `100%`,
                                              id: `FaFQY1q4k`,
                                              layoutId: `FaFQY1q4k`,
                                              mv8dA2jdy: e[0],
                                              mXXClOADH: `Estrategia y Proceso`,
                                              name: `Footer Menus`,
                                              tOs9JlKvR: `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                              variant: Qt(`fcnvBbZ51`),
                                              width: `100%`,
                                              ZYZxy3Th5: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                              ...Y(
                                                {
                                                  GhhJX46ap: {
                                                    mv8dA2jdy: e[1],
                                                    mXXClOADH: `Proceso`,
                                                  },
                                                  L9WA5OWEK: { mv8dA2jdy: e[2] },
                                                },
                                                h,
                                                y
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    p(L, {
                                      links: [
                                        {
                                          href: { hash: `:BE7xH9Hfv`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:BE7xH9Hfv`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:BE7xH9Hfv`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        p(W, {
                                          height: 28,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 584) - 0 - 612) / 2 + 0 + 0) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            32,
                                          ...Y(
                                            {
                                              GhhJX46ap: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 497) - 0 - 612) / 2 + 0 + 0) +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  32,
                                              },
                                              L9WA5OWEK: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 564) - 0 - 812) / 2 + 0 + 0) +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  110 +
                                                  0 +
                                                  0 +
                                                  32,
                                              },
                                            },
                                            h,
                                            y
                                          ),
                                          children: p(O, {
                                            className: `framer-yww8xq-container`,
                                            "data-framer-name": `Footer Menus`,
                                            layoutDependency: S,
                                            layoutId: `MUrmGXAP7-container`,
                                            name: `Footer Menus`,
                                            nodeId: `MUrmGXAP7`,
                                            rendersWithMotion: !0,
                                            scopeId: `qzGR0UWWN`,
                                            children: p(ot, {
                                              height: `100%`,
                                              id: `MUrmGXAP7`,
                                              layoutId: `MUrmGXAP7`,
                                              mv8dA2jdy: e[0],
                                              mXXClOADH: `Alcance`,
                                              name: `Footer Menus`,
                                              tOs9JlKvR: `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                              variant: Qt(`fcnvBbZ51`),
                                              width: `100%`,
                                              ZYZxy3Th5: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                              ...Y(
                                                {
                                                  GhhJX46ap: { mv8dA2jdy: e[1] },
                                                  L9WA5OWEK: { mv8dA2jdy: e[2] },
                                                },
                                                h,
                                                y
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    p(L, {
                                      links: [
                                        {
                                          href: { hash: `:ItOIo3mWl`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:ItOIo3mWl`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:ItOIo3mWl`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        p(W, {
                                          height: 28,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 584) - 0 - 612) / 2 + 0 + 0) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            64,
                                          ...Y(
                                            {
                                              GhhJX46ap: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 497) - 0 - 612) / 2 + 0 + 0) +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  64,
                                              },
                                              L9WA5OWEK: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 564) - 0 - 812) / 2 + 0 + 0) +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  110 +
                                                  0 +
                                                  0 +
                                                  64,
                                              },
                                            },
                                            h,
                                            y
                                          ),
                                          children: p(O, {
                                            className: `framer-hz7mq5-container`,
                                            "data-framer-name": `Footer Menus`,
                                            layoutDependency: S,
                                            layoutId: `Ba7P9R8q1-container`,
                                            name: `Footer Menus`,
                                            nodeId: `Ba7P9R8q1`,
                                            rendersWithMotion: !0,
                                            scopeId: `qzGR0UWWN`,
                                            children: p(ot, {
                                              height: `100%`,
                                              id: `Ba7P9R8q1`,
                                              layoutId: `Ba7P9R8q1`,
                                              mv8dA2jdy: e[0],
                                              mXXClOADH: `Contacto`,
                                              name: `Footer Menus`,
                                              tOs9JlKvR: `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                              variant: Qt(`fcnvBbZ51`),
                                              width: `100%`,
                                              ZYZxy3Th5: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                              ...Y(
                                                {
                                                  GhhJX46ap: { mv8dA2jdy: e[1] },
                                                  L9WA5OWEK: { mv8dA2jdy: e[2] },
                                                },
                                                h,
                                                y
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            _(D.div, {
                              className: `framer-dzuck2`,
                              "data-framer-name": `Social Link`,
                              layoutDependency: S,
                              layoutId: `JJI5O56FR`,
                              children: [
                                p(G, {
                                  __fromCanvasComponent: !0,
                                  children: p(s, {
                                    children: p(D.p, {
                                      className: `framer-styles-preset-mmirif`,
                                      "data-styles-preset": `snRA7OcdZ`,
                                      children: `ENCUÉNTRAME EN RRSS`,
                                    }),
                                  }),
                                  className: `framer-1btfr13`,
                                  fonts: [`Inter`],
                                  layoutDependency: S,
                                  layoutId: `vabV53aCy`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Y(
                                    {
                                      GhhJX46ap: {
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-mmirif`,
                                            "data-styles-preset": `snRA7OcdZ`,
                                            children: `RRSS`,
                                          }),
                                        }),
                                      },
                                    },
                                    h,
                                    y
                                  ),
                                }),
                                _(D.div, {
                                  className: `framer-1xqddmz`,
                                  "data-framer-name": `Quick Menu`,
                                  layoutDependency: S,
                                  layoutId: `e9KDS21lN`,
                                  children: [
                                    p(W, {
                                      height: 28,
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        (((l?.height || 584) - 0 - 612) / 2 + 0 + 0) +
                                        40 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                      ...Y(
                                        {
                                          GhhJX46ap: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              (((l?.height || 497) - 0 - 612) / 2 + 0 + 0) +
                                              40 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          L9WA5OWEK: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              (((l?.height || 564) - 0 - 812) / 2 + 0 + 0) +
                                              40 +
                                              0 +
                                              0 +
                                              232 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        h,
                                        y
                                      ),
                                      children: p(O, {
                                        className: `framer-b1hiw0-container`,
                                        "data-framer-name": `SocialMedia`,
                                        layoutDependency: S,
                                        layoutId: `omjNVhCyq-container`,
                                        name: `SocialMedia`,
                                        nodeId: `omjNVhCyq`,
                                        rendersWithMotion: !0,
                                        scopeId: `qzGR0UWWN`,
                                        children: p(ot, {
                                          height: `100%`,
                                          id: `omjNVhCyq`,
                                          layoutId: `omjNVhCyq`,
                                          mv8dA2jdy: `https://www.linkedin.com/`,
                                          mXXClOADH: `LinkedIn`,
                                          name: `SocialMedia`,
                                          tOs9JlKvR: `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                          variant: Qt(`fcnvBbZ51`),
                                          width: `100%`,
                                          ZYZxy3Th5: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                        }),
                                      }),
                                    }),
                                    p(W, {
                                      height: 28,
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        (((l?.height || 584) - 0 - 612) / 2 + 0 + 0) +
                                        40 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        32,
                                      ...Y(
                                        {
                                          GhhJX46ap: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              (((l?.height || 497) - 0 - 612) / 2 + 0 + 0) +
                                              40 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              32,
                                          },
                                          L9WA5OWEK: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              (((l?.height || 564) - 0 - 812) / 2 + 0 + 0) +
                                              40 +
                                              0 +
                                              0 +
                                              232 +
                                              0 +
                                              0 +
                                              32,
                                          },
                                        },
                                        h,
                                        y
                                      ),
                                      children: p(O, {
                                        className: `framer-1o0fdbj-container`,
                                        "data-framer-name": `SocialMedia`,
                                        layoutDependency: S,
                                        layoutId: `bdCVqIHTI-container`,
                                        name: `SocialMedia`,
                                        nodeId: `bdCVqIHTI`,
                                        rendersWithMotion: !0,
                                        scopeId: `qzGR0UWWN`,
                                        children: p(ot, {
                                          height: `100%`,
                                          id: `bdCVqIHTI`,
                                          layoutId: `bdCVqIHTI`,
                                          mv8dA2jdy: `https://www.instagram.com/virginiapelaez.design/`,
                                          mXXClOADH: `Instagram`,
                                          name: `SocialMedia`,
                                          tOs9JlKvR: `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                          variant: Qt(`fcnvBbZ51`),
                                          width: `100%`,
                                          ZYZxy3Th5: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        p(Kt, {
                          __framer__animate: { transition: en },
                          __framer__animateOnce: !0,
                          __framer__enter: $t,
                          __framer__exit: tn,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          background: {
                            alt: ``,
                            fit: `fit`,
                            intrinsicHeight: 360,
                            intrinsicWidth: 2150,
                            loading: Ge(
                              (l?.y || 0) +
                                0 +
                                (((l?.height || 584) - 0 - 612) / 2 + 0 + 0) +
                                40 +
                                132
                            ),
                            pixelHeight: 360,
                            pixelWidth: 2150,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: `calc(min(${l?.width || `100vw`}, 1340px) - 30px)`,
                            src: `../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?width=2150&height=360`,
                            srcSet: `../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?scale-down-to=512&width=2150&height=360 512w,../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?scale-down-to=1024&width=2150&height=360 1024w,../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png 2048w,../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?width=2150&height=360 2150w`,
                          },
                          className: `framer-1j2f680`,
                          "data-framer-name": `Davies WordMark`,
                          layoutDependency: S,
                          layoutId: `XrBCwS1tJ`,
                          ...Y(
                            {
                              GhhJX46ap: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 360,
                                  intrinsicWidth: 2150,
                                  loading: Ge(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 497) - 0 - 612) / 2 + 0 + 0) +
                                      40 +
                                      132
                                  ),
                                  pixelHeight: 360,
                                  pixelWidth: 2150,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `calc(min(${l?.width || `100vw`}, 1340px) - 30px)`,
                                  src: `../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?width=2150&height=360`,
                                  srcSet: `../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?scale-down-to=512&width=2150&height=360 512w,../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?scale-down-to=1024&width=2150&height=360 1024w,../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png 2048w,../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?width=2150&height=360 2150w`,
                                },
                              },
                              L9WA5OWEK: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 360,
                                  intrinsicWidth: 2150,
                                  loading: Ge(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 564) - 0 - 812) / 2 + 0 + 0) +
                                      40 +
                                      332
                                  ),
                                  pixelHeight: 360,
                                  pixelWidth: 2150,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `calc(min(${l?.width || `100vw`}, 1340px) - 30px)`,
                                  src: `../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?width=2150&height=360`,
                                  srcSet: `../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?scale-down-to=512&width=2150&height=360 512w,../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?scale-down-to=1024&width=2150&height=360 1024w,../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png 2048w,../../assets/images/r2mJ6A9N815MgQl43xwDqMnG7I.png?width=2150&height=360 2150w`,
                                },
                              },
                            },
                            h,
                            y
                          ),
                        }),
                        _(D.div, {
                          className: `framer-tw3zmz`,
                          "data-framer-name": `Bottom`,
                          layoutDependency: S,
                          layoutId: `FGSOYng_Q`,
                          children: [
                            p(D.div, {
                              className: `framer-kk5oze`,
                              "data-framer-name": `Copyrights`,
                              layoutDependency: S,
                              layoutId: `fidosnJMF`,
                              children: p(G, {
                                __fromCanvasComponent: !0,
                                children: p(s, {
                                  children: p(D.p, {
                                    className: `framer-styles-preset-mmirif`,
                                    "data-styles-preset": `snRA7OcdZ`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                    },
                                    children: `© VIRGINIA PELÁEZ 2026`,
                                  }),
                                }),
                                className: `framer-tgm54r`,
                                fonts: [`Inter`],
                                layoutDependency: S,
                                layoutId: `dKulod6om`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            p(L, {
                              links: [
                                {
                                  href: { hash: `:YrdNURlPA`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:YrdNURlPA`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:YrdNURlPA`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                p(W, {
                                  height: 28,
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    (((l?.height || 584) - 0 - 612) / 2 + 0 + 0) +
                                    40 +
                                    432 +
                                    26,
                                  ...Y(
                                    {
                                      GhhJX46ap: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 497) - 0 - 612) / 2 + 0 + 0) +
                                          40 +
                                          432 +
                                          26,
                                      },
                                      L9WA5OWEK: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 564) - 0 - 812) / 2 + 0 + 0) +
                                          40 +
                                          632 +
                                          26,
                                      },
                                    },
                                    h,
                                    y
                                  ),
                                  children: p(O, {
                                    className: `framer-ngcgyf-container`,
                                    "data-framer-name": `Back to Home Interaction`,
                                    layoutDependency: S,
                                    layoutId: `qvj0GrEDo-container`,
                                    name: `Back to Home Interaction`,
                                    nodeId: `qvj0GrEDo`,
                                    rendersWithMotion: !0,
                                    scopeId: `qzGR0UWWN`,
                                    children: p(ot, {
                                      height: `100%`,
                                      id: `qvj0GrEDo`,
                                      layoutId: `qvj0GrEDo`,
                                      mv8dA2jdy: e[0],
                                      mXXClOADH: `Back to Home`,
                                      name: `Back to Home Interaction`,
                                      tOs9JlKvR: `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                      variant: Qt(`CROoNTL0T`),
                                      width: `100%`,
                                      ZYZxy3Th5: `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                      ...Y(
                                        {
                                          GhhJX46ap: { mv8dA2jdy: e[1] },
                                          L9WA5OWEK: { mv8dA2jdy: e[2] },
                                        },
                                        h,
                                        y
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-BKW6W.framer-rh6s8m, .framer-BKW6W .framer-rh6s8m { display: block; }`,
          `.framer-BKW6W.framer-5gugik { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-BKW6W .framer-1kwh97h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1340px; overflow: var(--overflow-clip-fallback, clip); padding: 40px 15px 60px 15px; position: relative; width: 100%; }`,
          `.framer-BKW6W .framer-1xc5gae { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-BKW6W .framer-1wxyiud { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-BKW6W .framer-fyflwu-container { flex: none; height: 8px; position: relative; width: 8px; }`,
          `.framer-BKW6W .framer-1qi33q, .framer-BKW6W .framer-tgm54r { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-BKW6W .framer-a97gzb, .framer-BKW6W .framer-dzuck2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 49.5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-BKW6W .framer-vsapmg, .framer-BKW6W .framer-1btfr13 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-BKW6W .framer-qf1cki, .framer-BKW6W .framer-1xqddmz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-BKW6W .framer-1ns7uk2-container, .framer-BKW6W .framer-yww8xq-container, .framer-BKW6W .framer-hz7mq5-container, .framer-BKW6W .framer-b1hiw0-container, .framer-BKW6W .framer-1o0fdbj-container, .framer-BKW6W .framer-ngcgyf-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-BKW6W .framer-1j2f680 { aspect-ratio: 4.5 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-BKW6W .framer-tw3zmz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-BKW6W .framer-kk5oze { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-BKW6W.framer-v-1n9qh6.framer-5gugik { width: 810px; }`,
          `.framer-BKW6W.framer-v-88upq5.framer-5gugik { width: 390px; }`,
          `.framer-BKW6W.framer-v-88upq5 .framer-1xc5gae { flex-direction: column; gap: 30px; }`,
          `.framer-BKW6W.framer-v-88upq5 .framer-1wxyiud, .framer-BKW6W.framer-v-88upq5 .framer-a97gzb, .framer-BKW6W.framer-v-88upq5 .framer-dzuck2 { flex: none; width: 100%; }`,
          ...$e,
          `.framer-BKW6W[data-border="true"]::after, .framer-BKW6W [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-BKW6W`
      )),
      (X.displayName = `Footer`),
      (X.defaultProps = { height: 584, width: 1200 }),
      k(X, {
        variant: {
          options: [`MQsGojDe3`, `GhhJX46ap`, `L9WA5OWEK`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      P(
        X,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Wt,
          ...Gt,
          ...N(et),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([B(ft, {}, t), B(ot, {}, t)])),
      }));
  }),
  ln,
  un,
  dn,
  fn = e(() => {
    (A(),
      me.loadFonts([`Inter-Medium`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-MediumItalic`]),
      (ln = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/Bo5CNzBv77CafbxOtKIkpw9egw.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (un = [
        `.framer-v1Ad3 .framer-styles-preset-194px51:not(.rich-text-wrapper), .framer-v1Ad3 .framer-styles-preset-194px51.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 8px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.08px; --framer-line-height: 12px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (dn = `framer-v1Ad3`));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Q,
  Tn = e(() => {
    (b(),
      A(),
      de(),
      w(),
      gt(),
      tt(),
      fn(),
      Ye(),
      (pn = M(K)),
      (mn = M(mt)),
      (hn = [`JIiJNElzM`, `CHRzbgpPN`, `v7HVaqoQz`]),
      (gn = `framer-Jr9WN`),
      (_n = {
        CHRzbgpPN: `framer-v-1007ihi`,
        JIiJNElzM: `framer-v-1lwq849`,
        v7HVaqoQz: `framer-v-q2hrbx`,
      }),
      (vn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (yn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (bn = ({ value: e, children: n }) => {
        let r = t(fe),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(fe.Provider, { value: a, children: n });
      }),
      (xn = { Desktop: `JIiJNElzM`, Phone: `v7HVaqoQz`, Tablet: `CHRzbgpPN` }),
      (Sn = D.create(s)),
      (Cn = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        omB6XGoin: e ?? i.omB6XGoin,
        variant: xn[i.variant] ?? i.variant ?? `JIiJNElzM`,
      })),
      (wn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = ye(
        m(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ie(),
            { activeLocale: a, setLocale: c } = ze(),
            l = Me(),
            { style: u, className: d, layoutId: f, variant: m, omB6XGoin: ee, ...h } = Cn(e),
            {
              baseVariant: g,
              classNames: te,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: ne,
              setGestureState: x,
              setVariant: re,
              variants: S,
            } = Te({
              cycleOrder: hn,
              defaultVariant: `JIiJNElzM`,
              ref: r,
              variant: m,
              variantClassNames: _n,
            }),
            C = wn(e, S),
            { activeVariantCallback: w, delay: T } = Le(g),
            E = w(async (...e) => {
              if (ee && (await ee(...e)) === !1) return !1;
            }),
            ae = V(gn, dn, at),
            oe = () => g !== `v7HVaqoQz`;
          return (
            De(),
            p(ce, {
              id: f ?? i,
              children: p(Sn, {
                animate: S,
                initial: !1,
                children: p(bn, {
                  value: vn,
                  children: p(D.nav, {
                    ...h,
                    ...y,
                    className: V(ae, `framer-1lwq849`, d, te),
                    "data-framer-name": `Desktop`,
                    layoutDependency: C,
                    layoutId: `JIiJNElzM`,
                    ref: r,
                    style: { ...u },
                    ...Z(
                      {
                        CHRzbgpPN: { "data-framer-name": `Tablet` },
                        v7HVaqoQz: { "data-framer-name": `Phone` },
                      },
                      g,
                      b
                    ),
                    children: _(D.div, {
                      className: `framer-1eqxl03`,
                      "data-framer-name": `Navigation`,
                      layoutDependency: C,
                      layoutId: `jOy6NysAY`,
                      children: [
                        _(D.div, {
                          className: `framer-5upl7i`,
                          "data-framer-name": `Logo & Menu`,
                          layoutDependency: C,
                          layoutId: `EgPkEJzD7`,
                          children: [
                            p(Ne, {
                              href: { hash: `:YrdNURlPA`, webPageId: `augiA20Il` },
                              motionChild: !0,
                              nodeId: `CI3Q9BRCH`,
                              openInNewTab: !1,
                              scopeId: `yZ8h4fLe9`,
                              smoothScroll: !0,
                              children: p(Re, {
                                as: `a`,
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 77,
                                  intrinsicWidth: 125,
                                  loading: Ge((l?.y || 0) + 36 + 0 + 0 + 0),
                                  pixelHeight: 77,
                                  pixelWidth: 125,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `45px`,
                                  src: `../../assets/images/6k1cqM1EnQOg9tsf0xfbCmNJg4.png`,
                                },
                                className: `framer-oj24y9 framer-6u552z`,
                                "data-framer-name": `LOGO`,
                                layoutDependency: C,
                                layoutId: `CI3Q9BRCH`,
                                ...Z(
                                  {
                                    CHRzbgpPN: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 77,
                                        intrinsicWidth: 125,
                                        loading: Ge((l?.y || 0) + 15 + 0 + 0 + 0),
                                        pixelHeight: 77,
                                        pixelWidth: 125,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `45px`,
                                        src: `../../assets/images/6k1cqM1EnQOg9tsf0xfbCmNJg4.png`,
                                      },
                                    },
                                    v7HVaqoQz: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 77,
                                        intrinsicWidth: 125,
                                        loading: Ge((l?.y || 0) + 15 + 0 + 0 + 0),
                                        pixelHeight: 77,
                                        pixelWidth: 125,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `45px`,
                                        src: `../../assets/images/6k1cqM1EnQOg9tsf0xfbCmNJg4.png`,
                                      },
                                    },
                                  },
                                  g,
                                  b
                                ),
                              }),
                            }),
                            oe() &&
                              _(D.div, {
                                className: `framer-1lxt421`,
                                "data-framer-name": `Navigation Menu`,
                                layoutDependency: C,
                                layoutId: `uaChC8EGq`,
                                children: [
                                  _(D.div, {
                                    className: `framer-1ngfq56`,
                                    "data-framer-name": `Services`,
                                    layoutDependency: C,
                                    layoutId: `Qxs4zjxcf`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-194px51`,
                                            "data-styles-preset": `uHppIfBuz`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `01 /`,
                                          }),
                                        }),
                                        className: `framer-1v9qyjc`,
                                        fonts: [`Inter`],
                                        layoutDependency: C,
                                        layoutId: `BkJ3PMJih`,
                                        style: {
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(L, {
                                        links: [
                                          {
                                            href: { hash: `:BE7xH9Hfv`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:BE7xH9Hfv`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          p(W, {
                                            height: 16,
                                            y: (l?.y || 0) + 36 + 0 + 0 + 0 + 17 + 0,
                                            ...Z(
                                              {
                                                CHRzbgpPN: {
                                                  y: (l?.y || 0) + 15 + 0 + 0 + 0 + 17 + 0,
                                                },
                                              },
                                              g,
                                              b
                                            ),
                                            children: p(O, {
                                              className: `framer-1n1ldvi-container`,
                                              "data-framer-name": `Services`,
                                              layoutDependency: C,
                                              layoutId: `feqAplvc2-container`,
                                              name: `Services`,
                                              nodeId: `feqAplvc2`,
                                              rendersWithMotion: !0,
                                              scopeId: `yZ8h4fLe9`,
                                              children: p(K, {
                                                fOE0gANyU: `ALCANCE`,
                                                height: `100%`,
                                                hRmU6ct39: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                                id: `feqAplvc2`,
                                                layoutId: `feqAplvc2`,
                                                name: `Services`,
                                                variant: yn(`lJky06XSb`),
                                                width: `100%`,
                                                Y1_pVXz9X: e[0],
                                                ...Z({ CHRzbgpPN: { Y1_pVXz9X: e[1] } }, g, b),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                  _(D.div, {
                                    className: `framer-1kq4vp6`,
                                    "data-framer-name": `About`,
                                    layoutDependency: C,
                                    layoutId: `Bo9UBQUL3`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-194px51`,
                                            "data-styles-preset": `uHppIfBuz`,
                                            children: `02 /`,
                                          }),
                                        }),
                                        className: `framer-qfwkj1`,
                                        fonts: [`Inter`],
                                        layoutDependency: C,
                                        layoutId: `zAAbBEXzP`,
                                        style: {
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(L, {
                                        links: [
                                          {
                                            href: { hash: `:XEa5ly2id`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:XEa5ly2id`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          p(W, {
                                            height: 16,
                                            y: (l?.y || 0) + 36 + 0 + 0 + 0 + 17 + 0,
                                            ...Z(
                                              {
                                                CHRzbgpPN: {
                                                  y: (l?.y || 0) + 15 + 0 + 0 + 0 + 17 + 0,
                                                },
                                              },
                                              g,
                                              b
                                            ),
                                            children: p(O, {
                                              className: `framer-wonsou-container`,
                                              "data-framer-name": `About`,
                                              layoutDependency: C,
                                              layoutId: `pkg5rw7UW-container`,
                                              name: `About`,
                                              nodeId: `pkg5rw7UW`,
                                              rendersWithMotion: !0,
                                              scopeId: `yZ8h4fLe9`,
                                              children: p(K, {
                                                fOE0gANyU: `SOBRE MÍ`,
                                                height: `100%`,
                                                hRmU6ct39: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                                id: `pkg5rw7UW`,
                                                layoutId: `pkg5rw7UW`,
                                                name: `About`,
                                                variant: yn(`lJky06XSb`),
                                                width: `100%`,
                                                Y1_pVXz9X: e[0],
                                                ...Z({ CHRzbgpPN: { Y1_pVXz9X: e[1] } }, g, b),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                  _(D.div, {
                                    className: `framer-1i3xobb`,
                                    "data-framer-name": `Contact`,
                                    layoutDependency: C,
                                    layoutId: `TaLv3JfEM`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-194px51`,
                                            "data-styles-preset": `uHppIfBuz`,
                                            children: `03 /`,
                                          }),
                                        }),
                                        className: `framer-rrjhxs`,
                                        fonts: [`Inter`],
                                        layoutDependency: C,
                                        layoutId: `LnxpsPSif`,
                                        style: {
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(L, {
                                        links: [
                                          {
                                            href: { hash: `:ItOIo3mWl`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:ItOIo3mWl`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          p(W, {
                                            height: 16,
                                            y: (l?.y || 0) + 36 + 0 + 0 + 0 + 17 + 0,
                                            ...Z(
                                              {
                                                CHRzbgpPN: {
                                                  y: (l?.y || 0) + 15 + 0 + 0 + 0 + 17 + 0,
                                                },
                                              },
                                              g,
                                              b
                                            ),
                                            children: p(O, {
                                              className: `framer-7p1ctb-container`,
                                              "data-framer-name": `Contact`,
                                              layoutDependency: C,
                                              layoutId: `MU24yB9zR-container`,
                                              name: `Contact`,
                                              nodeId: `MU24yB9zR`,
                                              rendersWithMotion: !0,
                                              scopeId: `yZ8h4fLe9`,
                                              children: p(K, {
                                                fOE0gANyU: `CONTACTO`,
                                                height: `100%`,
                                                hRmU6ct39: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                                id: `MU24yB9zR`,
                                                layoutId: `MU24yB9zR`,
                                                name: `Contact`,
                                                variant: yn(`lJky06XSb`),
                                                width: `100%`,
                                                Y1_pVXz9X: e[0],
                                                ...Z({ CHRzbgpPN: { Y1_pVXz9X: e[1] } }, g, b),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        _(D.div, {
                          className: `framer-a6scji`,
                          "data-framer-name": `Controls`,
                          layoutDependency: C,
                          layoutId: `MJhEXV29s`,
                          children: [
                            oe() &&
                              _(D.div, {
                                className: `framer-kwmw6d`,
                                "data-framer-name": `Mail & Time-Date`,
                                layoutDependency: C,
                                layoutId: `Jop0o1pDI`,
                                children: [
                                  p(W, {
                                    height: 16,
                                    y: (l?.y || 0) + 36 + 0 + 0 + 0 + 10 + 0,
                                    ...Z(
                                      { CHRzbgpPN: { y: (l?.y || 0) + 15 + 0 + 0 + 0 + 10 + 0 } },
                                      g,
                                      b
                                    ),
                                    children: p(O, {
                                      className: `framer-oyqywb-container`,
                                      layoutDependency: C,
                                      layoutId: `ifikBVJgu-container`,
                                      nodeId: `ifikBVJgu`,
                                      rendersWithMotion: !0,
                                      scopeId: `yZ8h4fLe9`,
                                      children: p(K, {
                                        fOE0gANyU: `HÍBRIDO Y REMOTO`,
                                        height: `100%`,
                                        hRmU6ct39: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                        id: `ifikBVJgu`,
                                        layoutId: `ifikBVJgu`,
                                        variant: yn(`W9yI75dJE`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  p(W, {
                                    height: 16,
                                    y: (l?.y || 0) + 36 + 0 + 0 + 0 + 10 + 20,
                                    ...Z(
                                      { CHRzbgpPN: { y: (l?.y || 0) + 15 + 0 + 0 + 0 + 10 + 20 } },
                                      g,
                                      b
                                    ),
                                    children: p(O, {
                                      className: `framer-18wegt2-container`,
                                      layoutDependency: C,
                                      layoutId: `Y3BHie0km-container`,
                                      nodeId: `Y3BHie0km`,
                                      rendersWithMotion: !0,
                                      scopeId: `yZ8h4fLe9`,
                                      children: p(K, {
                                        fOE0gANyU: `hola@virginiapelaez.design`,
                                        height: `100%`,
                                        hRmU6ct39: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                        id: `Y3BHie0km`,
                                        layoutId: `Y3BHie0km`,
                                        variant: yn(`W9yI75dJE`),
                                        width: `100%`,
                                        Y1_pVXz9X: `hola@virginia.design`,
                                      }),
                                    }),
                                  }),
                                  _(D.div, {
                                    className: `framer-1qpq78v`,
                                    "data-framer-name": `Time & Date`,
                                    layoutDependency: C,
                                    layoutId: `KBhO77dJD`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(D.p, {
                                            className: `framer-styles-preset-mmirif`,
                                            "data-styles-preset": `snRA7OcdZ`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                            },
                                            children: `ESP`,
                                          }),
                                        }),
                                        className: `framer-143mq20`,
                                        fonts: [`Inter`],
                                        layoutDependency: C,
                                        layoutId: `q9Qp70DIs`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(W, {
                                        children: p(O, {
                                          className: `framer-10r2p9a-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          layoutDependency: C,
                                          layoutId: `fkx1cNtf9-container`,
                                          nodeId: `fkx1cNtf9`,
                                          rendersWithMotion: !0,
                                          scopeId: `yZ8h4fLe9`,
                                          children: p(mt, {
                                            color: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                            font: {
                                              fontFamily: `"Figtree", "Figtree Placeholder", sans-serif`,
                                              fontSize: `12px`,
                                              fontStyle: `normal`,
                                              fontWeight: 500,
                                              letterSpacing: `-0.12px`,
                                              lineHeight: `16px`,
                                            },
                                            height: `100%`,
                                            id: `fkx1cNtf9`,
                                            layoutId: `fkx1cNtf9`,
                                            monthFormat: `long`,
                                            outputType: `time`,
                                            showMinutes: !0,
                                            showMonth: !0,
                                            showSeconds: !0,
                                            showWeekday: !0,
                                            showYear: !0,
                                            tabularFont: !0,
                                            timeFormat: `24h`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            p(W, {
                              height: 16,
                              y: (l?.y || 0) + 36 + 0 + 0 + 32,
                              ...Z(
                                {
                                  CHRzbgpPN: { y: (l?.y || 0) + 15 + 0 + 0 + 0 },
                                  v7HVaqoQz: { y: (l?.y || 0) + 15 + 0 + 0 + 0 },
                                },
                                g,
                                b
                              ),
                              children: p(O, {
                                className: `framer-h7k30g-container`,
                                layoutDependency: C,
                                layoutId: `OgmtdTJ8W-container`,
                                nodeId: `OgmtdTJ8W`,
                                rendersWithMotion: !0,
                                scopeId: `yZ8h4fLe9`,
                                children: p(K, {
                                  fOE0gANyU: `DAVIES@GMAIL.COM`,
                                  height: `100%`,
                                  hRmU6ct39: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                  id: `OgmtdTJ8W`,
                                  layoutId: `OgmtdTJ8W`,
                                  variant: yn(`os_5MWbt_`),
                                  width: `100%`,
                                  yRSP2Ieu5: E,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-Jr9WN.framer-6u552z, .framer-Jr9WN .framer-6u552z { display: block; }`,
          `.framer-Jr9WN.framer-1lwq849 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 36px 15px 36px 15px; position: relative; width: 1200px; }`,
          `.framer-Jr9WN .framer-1eqxl03 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1340px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-Jr9WN .framer-5upl7i { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 77px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 6px; position: relative; width: 1px; }`,
          `.framer-Jr9WN .framer-oj24y9 { align-content: center; align-items: center; aspect-ratio: 0.825 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 45px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-Jr9WN .framer-1lxt421 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 17px 0px 17px 0px; position: relative; width: 1px; }`,
          `.framer-Jr9WN .framer-1ngfq56 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Jr9WN .framer-1v9qyjc, .framer-Jr9WN .framer-qfwkj1, .framer-Jr9WN .framer-rrjhxs, .framer-Jr9WN .framer-143mq20 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Jr9WN .framer-1n1ldvi-container, .framer-Jr9WN .framer-wonsou-container, .framer-Jr9WN .framer-7p1ctb-container, .framer-Jr9WN .framer-oyqywb-container, .framer-Jr9WN .framer-18wegt2-container, .framer-Jr9WN .framer-10r2p9a-container, .framer-Jr9WN .framer-h7k30g-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-Jr9WN .framer-1kq4vp6, .framer-Jr9WN .framer-1i3xobb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Jr9WN .framer-a6scji { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px 6px 31px 0px; position: relative; width: 1px; }`,
          `.framer-Jr9WN .framer-kwmw6d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 10px 0px 10px 0px; position: relative; width: 1px; }`,
          `.framer-Jr9WN .framer-1qpq78v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Jr9WN.framer-v-1007ihi.framer-1lwq849 { padding: 15px; width: 810px; }`,
          `.framer-Jr9WN.framer-v-1007ihi .framer-5upl7i { gap: 39px; }`,
          `.framer-Jr9WN.framer-v-1007ihi .framer-a6scji { align-content: flex-start; align-items: flex-start; gap: 0px; }`,
          `.framer-Jr9WN.framer-v-q2hrbx.framer-1lwq849 { padding: 15px; width: 390px; }`,
          ...un,
          ...$e,
        ],
        `framer-Jr9WN`
      )),
      (Q.displayName = `Header`),
      (Q.defaultProps = { height: 179, width: 1200 }),
      k(Q, {
        variant: {
          options: [`JIiJNElzM`, `CHRzbgpPN`, `v7HVaqoQz`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: U.Enum,
        },
        omB6XGoin: { title: `Click`, type: U.EventHandler },
      }),
      P(
        Q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Figtree`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Figtree`,
                url: `https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_dNQF5bwkEU4HTy.woff2`,
                weight: `500`,
              },
            ],
          },
          ...pn,
          ...mn,
          ...N(ln),
          ...N(et),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([B(K, {}, t)])) }));
  }),
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  $,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n = e(() => {
    (b(),
      A(),
      de(),
      w(),
      f(),
      gt(),
      Ke(),
      Ye(),
      Ut(),
      cn(),
      Tn(),
      (En = M(Q)),
      (Dn = M(K)),
      (On = M(J)),
      (kn = We(H)),
      (An = M(mt)),
      (jn = M(X)),
      (Mn = M(qe)),
      (Nn = {
        CTmkwQEhZ: `(max-width: 809.98px)`,
        mFrve3U7E: `(min-width: 1200px)`,
        vnvCwpWSx: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Pn = `framer-8WXET`),
      (Fn = {
        CTmkwQEhZ: `framer-v-1vqgkdy`,
        mFrve3U7E: `framer-v-1wtq3gj`,
        vnvCwpWSx: `framer-v-d9jhyv`,
      }),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (In = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (Ln = { damping: 30, delay: 0.01, mass: 1, stiffness: 220, type: `spring` }),
      (Rn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ln,
        x: 0,
        y: 40,
      }),
      (zn = () =>
        document.querySelector(`#template-overlay`) ??
        document.querySelector(`#overlay`) ??
        document.body),
      (Bn = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = Pe({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (Vn = {
        CTmkwQEhZ: [`.framer-8WXET.framer-1qvwdzw { padding: 15px 21px 60px 21px; }`],
        vnvCwpWSx: [`.framer-8WXET.framer-1qvwdzw { padding: 15px 21px 60px 21px; }`],
      }),
      (Hn = Object.keys(Vn)),
      (Un = { CTmkwQEhZ: `.framer-1vqgkdy-override`, vnvCwpWSx: `.framer-d9jhyv-override` }),
      (Wn = [
        `.framer-8WXET.framer-88d1or, .framer-8WXET .framer-88d1or { display: block; }`,
        `.framer-8WXET.framer-1wtq3gj { align-content: center; align-items: center; background-color: var(--token-4b341338-949e-448c-99a3-d0281ee083a2, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-8WXET .framer-bepwkx-container { flex: none; height: auto; max-width: 1340px; order: -1000; position: relative; width: 100%; z-index: 4; }`,
        `.framer-8WXET.framer-1skhvws { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 9; }`,
        `.framer-8WXET.framer-1qvwdzw { -webkit-backdrop-filter: blur(9px); align-content: flex-start; align-items: flex-start; backdrop-filter: blur(9px); cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-between; left: calc(50.00000000000002% - min(1340px, 100%) / 2); max-width: 1340px; overflow: var(--overflow-clip-fallback, clip); padding: 36px 21px 60px 21px; position: fixed; top: 0px; width: 100%; z-index: 9; }`,
        `.framer-8WXET .framer-1jrkibg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-8WXET .framer-1djjuis { flex: none; height: 40px; overflow: var(--overflow-clip-fallback, clip); position: relative; text-decoration: none; width: 33px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-8WXET .framer-1xpmscg-container, .framer-8WXET .framer-a1fzj6-container, .framer-8WXET .framer-iilnb-container, .framer-8WXET .framer-1uldxw3-container, .framer-8WXET .framer-g1a4ji-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-8WXET .framer-1y8girt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-8WXET .framer-cxu4t6-container, .framer-8WXET .framer-53fa74-container, .framer-8WXET .framer-1xzfj6y-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-8WXET .framer-15n6med { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-8WXET .framer-obqmn5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-8WXET .framer-1uxlgca { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-8WXET .framer-1w0h02o { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-8WXET .framer-10j7tfa { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-8WXET .framer-l66z7l { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-8WXET .framer-m9zk2l-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (Gn = {
        CTmkwQEhZ: `(max-width: 809.98px)`,
        mFrve3U7E: `(min-width: 1200px)`,
        vnvCwpWSx: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Kn = { Desktop: `mFrve3U7E`, Phone: `CTmkwQEhZ`, Tablet: `vnvCwpWSx` }),
      (qn = ({ value: e }) =>
        Ie()
          ? null
          : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Jn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Kn[r.variant] ?? r.variant ?? `mFrve3U7E`,
      })),
      (Yn = {
        alignment: `start`,
        component: qe,
        offset: { x: 24, y: 24 },
        placement: `bottom`,
        transition: { bounce: 0.2, delay: 0, duration: 0.3, type: `spring` },
        variant: `CaDKjwpbo`,
      }),
      (Xn = m(function (e, t) {
        let n = o(null),
          r = t ?? n,
          i = ie(),
          { activeLocale: a, setLocale: c } = ze(),
          { style: l, className: u, layoutId: d, variant: f, children: m, ...ee } = Jn(e),
          [g, te] = be(f, Nn, !1),
          { activeVariantCallback: v, delay: y } = Le(void 0),
          b = ({ overlay: e }) =>
            v(async (...t) => {
              e.toggle();
            }),
          ne = ({ overlay: e }) =>
            v(async (...t) => {
              e.hide();
            }),
          x = ({ overlay: e }) =>
            v(async (...t) => {
              e.hide();
            }),
          S = V(Pn);
        return (
          De(),
          Oe({ "3mma1p": Yn }),
          p(xe.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: Kn,
              isLayoutTemplate: !0,
              primaryVariantId: `mFrve3U7E`,
              variantClassNames: Fn,
            },
            children: _(ce, {
              id: d ?? i,
              children: [
                p(qn, {
                  value: `:root body { background: var(--token-4b341338-949e-448c-99a3-d0281ee083a2, rgb(0, 0, 0)); }`,
                }),
                _(D.div, {
                  ...ee,
                  className: V(S, `framer-1wtq3gj`, u),
                  "data-framer-cursor": `3mma1p`,
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...l },
                  children: [
                    p(Bn, {
                      dismissWithEsc: !0,
                      children: (e) =>
                        p(re, {
                          children: p(W, {
                            height: 179,
                            width: `min(100vw, 1340px)`,
                            y: 0,
                            children: _(H, {
                              className: `framer-bepwkx-container`,
                              nodeId: `xhmo4GF0o`,
                              scopeId: `IC67AC0Y7`,
                              children: [
                                p(R, {
                                  breakpoint: g,
                                  overrides: {
                                    CTmkwQEhZ: { variant: $(`v7HVaqoQz`) },
                                    vnvCwpWSx: { variant: $(`CHRzbgpPN`) },
                                  },
                                  children: p(Q, {
                                    height: `100%`,
                                    id: `xhmo4GF0o`,
                                    layoutId: `xhmo4GF0o`,
                                    omB6XGoin: b({ overlay: e }),
                                    style: { maxWidth: `100%`, width: `100%` },
                                    variant: $(`JIiJNElzM`),
                                    width: `100%`,
                                  }),
                                }),
                                p(ue, {
                                  children:
                                    e.visible &&
                                    p(re, {
                                      children: h(
                                        p(Se, {
                                          children: _(Ue, {
                                            children: [
                                              p(
                                                D.div,
                                                {
                                                  animate: {
                                                    opacity: 1,
                                                    transition: {
                                                      delay: 0,
                                                      duration: 0,
                                                      ease: [0.5, 0, 0.88, 0.77],
                                                      type: `tween`,
                                                    },
                                                  },
                                                  className: V(S, `framer-1skhvws`),
                                                  exit: {
                                                    opacity: 0,
                                                    transition: {
                                                      delay: 0,
                                                      duration: 0,
                                                      ease: [0.12, 0.23, 0.5, 1],
                                                      type: `tween`,
                                                    },
                                                  },
                                                  initial: { opacity: 0 },
                                                  onTap: () => e.hide(),
                                                },
                                                `jfD6I8MYg`
                                              ),
                                              _(D.div, {
                                                className: V(S, `framer-1qvwdzw`),
                                                "data-framer-name": `Container`,
                                                "data-highlight": !0,
                                                onTap: ne({ overlay: e }),
                                                children: [
                                                  _(D.div, {
                                                    className: `framer-1jrkibg`,
                                                    "data-framer-name": `Top`,
                                                    children: [
                                                      p(Ne, {
                                                        href: {
                                                          hash: `:YrdNURlPA`,
                                                          webPageId: `augiA20Il`,
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `ND5V3scUH`,
                                                        openInNewTab: !1,
                                                        scopeId: `IC67AC0Y7`,
                                                        smoothScroll: !0,
                                                        children: p(Re, {
                                                          as: `a`,
                                                          background: {
                                                            alt: ``,
                                                            fit: `fit`,
                                                            intrinsicHeight: 185,
                                                            intrinsicWidth: 300,
                                                            pixelHeight: 185,
                                                            pixelWidth: 300,
                                                            positionX: `center`,
                                                            positionY: `center`,
                                                            sizes: `33px`,
                                                            src: `../../assets/images/GsXSg4EkunBdyI4uFmWTPJBEnR0.png`,
                                                          },
                                                          className: `framer-1djjuis framer-88d1or`,
                                                          "data-framer-name": `Logo`,
                                                        }),
                                                      }),
                                                      p(W, {
                                                        children: p(H, {
                                                          className: `framer-1xpmscg-container`,
                                                          inComponentSlot: !0,
                                                          nodeId: `Ro8fPZdZp`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `IC67AC0Y7`,
                                                          children: p(K, {
                                                            fOE0gANyU: `HOLA@VIRGINIAPELAEZ.DESIGN`,
                                                            height: `100%`,
                                                            hRmU6ct39: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                                            id: `Ro8fPZdZp`,
                                                            layoutId: `Ro8fPZdZp`,
                                                            variant: $(`HzazZHx36`),
                                                            width: `100%`,
                                                            yRSP2Ieu5: x({ overlay: e }),
                                                          }),
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                  _(D.div, {
                                                    className: `framer-1y8girt`,
                                                    "data-framer-name": `Menu`,
                                                    children: [
                                                      p(L, {
                                                        links: [
                                                          {
                                                            href: {
                                                              hash: `:XEa5ly2id`,
                                                              webPageId: `augiA20Il`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              hash: `:XEa5ly2id`,
                                                              webPageId: `augiA20Il`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              hash: `:XEa5ly2id`,
                                                              webPageId: `augiA20Il`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (e) =>
                                                          p(W, {
                                                            width: `calc(min(100vw, 1340px) - 42px)`,
                                                            children: p(kn, {
                                                              __framer__animate: { transition: Ln },
                                                              __framer__animateOnce: !0,
                                                              __framer__enter: In,
                                                              __framer__exit: Rn,
                                                              __framer__styleAppearEffectEnabled:
                                                                !0,
                                                              __framer__threshold: 0.5,
                                                              __perspectiveFX: !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-cxu4t6-container`,
                                                              inComponentSlot: !0,
                                                              nodeId: `ymzgAU1rS`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `IC67AC0Y7`,
                                                              children: p(R, {
                                                                breakpoint: g,
                                                                overrides: {
                                                                  CTmkwQEhZ: {
                                                                    fWAvbfvR3: e[2],
                                                                    variant: $(`YRFCbqxwY`),
                                                                  },
                                                                  vnvCwpWSx: {
                                                                    fWAvbfvR3: e[1],
                                                                    variant: $(`YRFCbqxwY`),
                                                                  },
                                                                },
                                                                children: p(J, {
                                                                  D8BzjX7jx: `Sobre Mí`,
                                                                  fWAvbfvR3: e[0],
                                                                  height: `100%`,
                                                                  id: `ymzgAU1rS`,
                                                                  layoutId: `ymzgAU1rS`,
                                                                  style: { width: `100%` },
                                                                  variant: $(`qACXbXKOA`),
                                                                  vqVYpOGmw: `Ver sobre mí`,
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                      }),
                                                      p(L, {
                                                        links: [
                                                          {
                                                            href: {
                                                              hash: `:BE7xH9Hfv`,
                                                              webPageId: `augiA20Il`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              hash: `:BE7xH9Hfv`,
                                                              webPageId: `augiA20Il`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              hash: `:BE7xH9Hfv`,
                                                              webPageId: `augiA20Il`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (e) =>
                                                          p(W, {
                                                            width: `calc(min(100vw, 1340px) - 42px)`,
                                                            children: p(kn, {
                                                              __framer__animate: { transition: Ln },
                                                              __framer__animateOnce: !0,
                                                              __framer__enter: In,
                                                              __framer__exit: Rn,
                                                              __framer__styleAppearEffectEnabled:
                                                                !0,
                                                              __framer__threshold: 0.5,
                                                              __perspectiveFX: !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-53fa74-container`,
                                                              inComponentSlot: !0,
                                                              nodeId: `MsrGEBY35`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `IC67AC0Y7`,
                                                              children: p(R, {
                                                                breakpoint: g,
                                                                overrides: {
                                                                  CTmkwQEhZ: {
                                                                    fWAvbfvR3: e[2],
                                                                    variant: $(`YRFCbqxwY`),
                                                                  },
                                                                  vnvCwpWSx: {
                                                                    fWAvbfvR3: e[1],
                                                                    variant: $(`YRFCbqxwY`),
                                                                  },
                                                                },
                                                                children: p(J, {
                                                                  D8BzjX7jx: `Alcance`,
                                                                  fWAvbfvR3: e[0],
                                                                  height: `100%`,
                                                                  id: `MsrGEBY35`,
                                                                  layoutId: `MsrGEBY35`,
                                                                  style: { width: `100%` },
                                                                  variant: $(`qACXbXKOA`),
                                                                  vqVYpOGmw: `Ver alcance`,
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                      }),
                                                      p(L, {
                                                        links: [
                                                          {
                                                            href: {
                                                              hash: `:ItOIo3mWl`,
                                                              webPageId: `augiA20Il`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              hash: `:ItOIo3mWl`,
                                                              webPageId: `augiA20Il`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              hash: `:ItOIo3mWl`,
                                                              webPageId: `augiA20Il`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (e) =>
                                                          p(W, {
                                                            width: `calc(min(100vw, 1340px) - 42px)`,
                                                            children: p(kn, {
                                                              __framer__animate: { transition: Ln },
                                                              __framer__animateOnce: !0,
                                                              __framer__enter: In,
                                                              __framer__exit: Rn,
                                                              __framer__styleAppearEffectEnabled:
                                                                !0,
                                                              __framer__threshold: 0.5,
                                                              __perspectiveFX: !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-1xzfj6y-container`,
                                                              inComponentSlot: !0,
                                                              nodeId: `PKuXJSCt3`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `IC67AC0Y7`,
                                                              children: p(R, {
                                                                breakpoint: g,
                                                                overrides: {
                                                                  CTmkwQEhZ: {
                                                                    fWAvbfvR3: e[2],
                                                                    variant: $(`YRFCbqxwY`),
                                                                  },
                                                                  vnvCwpWSx: {
                                                                    fWAvbfvR3: e[1],
                                                                    variant: $(`YRFCbqxwY`),
                                                                  },
                                                                },
                                                                children: p(J, {
                                                                  D8BzjX7jx: `Contacto`,
                                                                  fWAvbfvR3: e[0],
                                                                  height: `100%`,
                                                                  id: `PKuXJSCt3`,
                                                                  layoutId: `PKuXJSCt3`,
                                                                  style: { width: `100%` },
                                                                  variant: $(`qACXbXKOA`),
                                                                  vqVYpOGmw: `Ver contacto`,
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                      }),
                                                    ],
                                                  }),
                                                  _(D.div, {
                                                    className: `framer-15n6med`,
                                                    "data-framer-name": `Bottom`,
                                                    children: [
                                                      _(D.div, {
                                                        className: `framer-obqmn5`,
                                                        "data-framer-name": `Mail & Time-Date`,
                                                        children: [
                                                          p(W, {
                                                            children: p(H, {
                                                              className: `framer-a1fzj6-container`,
                                                              inComponentSlot: !0,
                                                              nodeId: `IeTQg2bPf`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `IC67AC0Y7`,
                                                              children: p(K, {
                                                                fOE0gANyU: `HOLA@VIRGINIAPELAEZ.DESIGN`,
                                                                height: `100%`,
                                                                hRmU6ct39: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                                                id: `IeTQg2bPf`,
                                                                layoutId: `IeTQg2bPf`,
                                                                variant: $(`W9yI75dJE`),
                                                                width: `100%`,
                                                                Y1_pVXz9X: `mailto:help@davies@gmail.com`,
                                                              }),
                                                            }),
                                                          }),
                                                          _(D.div, {
                                                            className: `framer-1uxlgca`,
                                                            "data-framer-name": `Time & Date`,
                                                            children: [
                                                              p(G, {
                                                                __fromCanvasComponent: !0,
                                                                children: p(s, {
                                                                  children: p(`p`, {
                                                                    style: {
                                                                      "--font-selector": `R0Y7RmlndHJlZS01MDA=`,
                                                                      "--framer-font-family": `"Figtree", "Figtree Placeholder", sans-serif`,
                                                                      "--framer-font-size": `12px`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-letter-spacing": `-0.12px`,
                                                                      "--framer-line-height": `16px`,
                                                                      "--framer-text-color": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                                                      "--framer-text-transform": `uppercase`,
                                                                    },
                                                                    children: `ESP`,
                                                                  }),
                                                                }),
                                                                className: `framer-1w0h02o`,
                                                                fonts: [`GF;Figtree-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              p(W, {
                                                                children: p(H, {
                                                                  className: `framer-iilnb-container`,
                                                                  inComponentSlot: !0,
                                                                  isAuthoredByUser: !0,
                                                                  isModuleExternal: !0,
                                                                  nodeId: `RpzDsuEaT`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `IC67AC0Y7`,
                                                                  children: p(mt, {
                                                                    color: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                                                    font: {
                                                                      fontFamily: `"Figtree", "Figtree Placeholder", sans-serif`,
                                                                      fontSize: `12px`,
                                                                      fontStyle: `normal`,
                                                                      fontWeight: 500,
                                                                      letterSpacing: `-0.12px`,
                                                                      lineHeight: `16px`,
                                                                    },
                                                                    height: `100%`,
                                                                    id: `RpzDsuEaT`,
                                                                    layoutId: `RpzDsuEaT`,
                                                                    monthFormat: `long`,
                                                                    outputType: `time`,
                                                                    showMinutes: !0,
                                                                    showMonth: !0,
                                                                    showSeconds: !0,
                                                                    showWeekday: !0,
                                                                    showYear: !0,
                                                                    tabularFont: !0,
                                                                    timeFormat: `24h`,
                                                                    width: `100%`,
                                                                  }),
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      _(D.div, {
                                                        className: `framer-10j7tfa`,
                                                        "data-framer-name": `Social Media Link`,
                                                        children: [
                                                          p(W, {
                                                            children: p(H, {
                                                              className: `framer-1uldxw3-container`,
                                                              inComponentSlot: !0,
                                                              nodeId: `KNAyuE7lo`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `IC67AC0Y7`,
                                                              children: p(K, {
                                                                fOE0gANyU: `Instagram`,
                                                                height: `100%`,
                                                                hRmU6ct39: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                                                id: `KNAyuE7lo`,
                                                                layoutId: `KNAyuE7lo`,
                                                                variant: $(`EUzW4JK0V`),
                                                                width: `100%`,
                                                                Y1_pVXz9X: `https://www.instagram.com/virginiapelaez.design/`,
                                                              }),
                                                            }),
                                                          }),
                                                          p(W, {
                                                            children: p(H, {
                                                              className: `framer-g1a4ji-container`,
                                                              inComponentSlot: !0,
                                                              nodeId: `JTdSFGwHd`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `IC67AC0Y7`,
                                                              children: p(K, {
                                                                fOE0gANyU: `LinkedIn`,
                                                                height: `100%`,
                                                                hRmU6ct39: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                                                id: `JTdSFGwHd`,
                                                                layoutId: `JTdSFGwHd`,
                                                                variant: $(`EUzW4JK0V`),
                                                                width: `100%`,
                                                                Y1_pVXz9X: `www.linkedin.com/in/virginia-pelaez`,
                                                              }),
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        zn()
                                      ),
                                    }),
                                }),
                              ],
                            }),
                          }),
                        }),
                    }),
                    m,
                    p(`div`, { className: `framer-l66z7l` }),
                    p(W, {
                      height: 628,
                      width: `100vw`,
                      y: 1179,
                      children: p(H, {
                        className: `framer-m9zk2l-container`,
                        nodeId: `K47szkEig`,
                        scopeId: `IC67AC0Y7`,
                        children: p(R, {
                          breakpoint: g,
                          overrides: {
                            CTmkwQEhZ: { variant: $(`L9WA5OWEK`) },
                            vnvCwpWSx: { variant: $(`GhhJX46ap`) },
                          },
                          children: p(X, {
                            height: `100%`,
                            id: `K47szkEig`,
                            layoutId: `K47szkEig`,
                            style: { width: `100%` },
                            variant: $(`MQsGojDe3`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                p(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Zn = (e) =>
        e === Be.canvas || e === Be.export
          ? [
              ...Wn,
              ...Hn.flatMap((e) => {
                let t = Un[e];
                return Vn[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Wn, ...Hn.map((e) => `@media ${Gn[e]} { ${Vn[e].join(` `)} }`)]),
      (Qn = ye(Xn, Zn, `framer-8WXET`)),
      (Qn.displayName = `Default`),
      (Qn.defaultProps = { height: 1e3, width: 1200 }),
      P(
        Qn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Figtree`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Figtree`,
                url: `https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_dNQF5bwkEU4HTy.woff2`,
                weight: `500`,
              },
            ],
          },
          ...En,
          ...Dn,
          ...On,
          ...An,
          ...jn,
          ...Mn,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Qn.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([B(Q, {}, t), B(K, {}, t), B(J, {}, t), B(X, {}, t)])
        ),
      }));
  });
function er({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `DN8WxwIDS`:
    case `A0fezkTrF`:
    case `C3o16C7T9`:
      return C(Qn, { ...i, key: `Default`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function tr(e) {
  switch (e) {
    case `augiA20Il`:
    case `DN8WxwIDS`:
    case `A0fezkTrF`:
    case `C3o16C7T9`:
      return [
        { hash: `1wtq3gj`, mediaQuery: `(min-width: 1200px)` },
        { hash: `d9jhyv`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1vqgkdy`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function nr({ routeId: e, pathVariables: t, localeId: r, collectionItemId: c }) {
  let u = ar[e].page.preload();
  ge({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    privateRouterReplaceState: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let d = C(je, {
    children: C(ke, {
      children: C(Ee, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        routes: ar,
        collectionUtils: sr,
        framerSiteId: cr,
        notFoundPage: j(() => import(`./2EP7lRLrxGh2TWDSJcBRxacrcxX5JXEMTCw--TJVCCk.Cg-2bpyt.mjs`)),
        isReducedMotion: void 0,
        localeId: r,
        locales: or,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://virginiapelaez.framer.website`,
        EditorBar:
          E === void 0
            ? void 0
            : (() => {
                if (ur) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return j(async () => {
                  E.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: Fe, useLocaleInfo: ze, useRouter: De },
                    react: {
                      createElement: C,
                      Fragment: s,
                      memo: ee,
                      useCallback: i,
                      useEffect: a,
                      useRef: o,
                      useState: n,
                      useLayoutEffect: l,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: er,
        loadSnippetsModule: new we(
          () => import(`./l3P3267XZUsfSAA1ORuIcpG3U1DHa0dMywNn2X3WJl0.dObCGW41.mjs`)
        ),
        initialCollectionItemId: c,
      }),
    }),
    value: { routes: {} },
  });
  return (await u, d);
}
function rr() {
  lr && E.__framer_events.push(arguments);
}
async function ir(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || E.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    rr(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = I(ar, r)));
    else {
      I(ar, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = _e(ar, decodeURIComponent(location.pathname), !0, or);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = nr({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    E !== void 0 &&
      (async () => {
        let e = ar[r],
          t = or.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && sr) {
          let r = await sr[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          E.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: cr,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: E.location.href,
              hostname: E.location.hostname || null,
              pathname: E.location.pathname || null,
              hash: E.location.hash || null,
              search: E.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await Ve({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let l = await c;
    e
      ? (He(`framer-rewrite-breakpoints`, () => {
          (ve(o), E.__framer_onRewriteBreakpoints?.(o));
        }),
        (ur ? (e) => e() : d)(() => {
          (he(), Ce(), S(t, l, { onRecoverableError: n }));
        }))
      : x(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var ar, or, sr, cr, lr, ur;
e(() => {
  if (
    (r(),
    A(),
    w(),
    f(),
    y(),
    $n(),
    (ar = {
      augiA20Il: {
        elements: {
          BE7xH9Hfv: `services`,
          D8s93T2iy: `faq`,
          eA0bCtUU9: `sticky-trigger-03`,
          fLHx1bF6c: `testimonial`,
          ItOIo3mWl: `contact`,
          MYQJsuXLb: `sticky-trigger-02`,
          QkH1szL3_: `featured-templates`,
          XEa5ly2id: `about`,
          xnI90NXBR: `process`,
          XotzNvm40: `sticky-trigger 01`,
          YrdNURlPA: `home`,
          zJjAe3p9R: `works`,
        },
        page: j(() => import(`./70QkLoE1QvPadGxTse9yR7LHoZokHQS1S3318tZgY94.DgF9hrr8.mjs`)),
        path: `/`,
      },
      DN8WxwIDS: {
        elements: {
          aF8gtpTGc: `awards`,
          amrQ6YAQJ: `process`,
          azhDcW_ro: `about`,
          E_zPE9hcC: `home`,
          guW5DpYKw: `pricing`,
          h0OxfzBE6: `sticky-trigger-02`,
          ieKSjDxkY: `featured-templates`,
          lQSboK3ao: `sticky-trigger-03`,
          Lxg4L7uS8: `contact`,
          mop4zgZ3Y: `works`,
          mYcgiJy2V: `services`,
          npqBC4tLR: `sticky-trigger 01`,
          OZoBp90iT: `faq`,
          s6ZQyGfya: `animation`,
          SOGdjPPxN: `popular-brands`,
          UFrFec0uw: `testimonial`,
        },
        page: j(() => import(`./bwCBf3sRDiFWeWcefj8iswTcYFOpmCsowCa0KxyGnaQ.DytQYiNB.mjs`)),
        path: `/home-tunnel`,
      },
      A0fezkTrF: {
        elements: {
          BReQDLywC: `home`,
          CnL5KXUil: `animation`,
          DqcdAAdE1: `pricing`,
          FszEqkZgI: `sticky-trigger-03`,
          JGCEie37Z: `testimonial`,
          jHM8p9n1t: `faq`,
          K2QOGua03: `sticky-trigger 01`,
          McErFSXUe: `services`,
          O4Y3uXUT1: `contact`,
          On6889iYO: `awards`,
          QOVJcw7Jw: `popular-brands`,
          RfUoLA_9Y: `process`,
          sFmV3pDqZ: `sticky-trigger-02`,
          th56Wo1bg: `featured-templates`,
          vvSmZcp6p: `about`,
          vyDpyeUBr: `works`,
        },
        page: j(() => import(`./XgyvcMCnnbuMlm-a_Soznr-Zs3YS3BlLoHn_izXeKX8.CPEaOBqa.mjs`)),
        path: `/home-gridwave`,
      },
      C3o16C7T9: {
        elements: {},
        page: j(() => import(`./2EP7lRLrxGh2TWDSJcBRxacrcxX5JXEMTCw--TJVCCk.Cg-2bpyt.mjs`)),
        path: `/404`,
      },
    }),
    (or = [{ code: `es-ES`, id: `default`, name: `Spanish`, slug: ``, textDirection: `ltr` }]),
    (sr = {}),
    (cr = `4a9e673d3c9479255989c254a4be1a390d80e1bce3e5836473dce0f26bea8ce2`),
    (lr = typeof document < `u`),
    (ur = lr && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(c.userAgent)),
    lr)
  ) {
    ((E.__framer_importFromPackage = (e, t) => () =>
      C(z, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (E.__framer_events = E.__framer_events || []),
      F());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? ir(!0, e) : ir(!1, e);
  }
  (function () {
    lr &&
      d(() => {
        S(
          document.getElementById(`__framer-badge-container`),
          C(v, {}, C(ne(() => import(`./PX9hIOIVM.Cz5Fn8rU.mjs`))))
        );
      });
  })();
})();
export { tr as getLayoutTemplateBreakpoints, nr as getPageRoot };
//# sourceMappingURL=script_main.BD6UhLY-.mjs.map
