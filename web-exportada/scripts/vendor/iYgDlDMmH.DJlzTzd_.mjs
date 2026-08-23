import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  c as i,
  g as a,
  j as o,
  o as s,
  v as c,
  w as l,
} from "./react.DwDJOhmk.mjs";
import { E as u, a as d, r as f, s as p } from "./motion.C18vkCAc.mjs";
import {
  E as m,
  G as h,
  T as g,
  _t as _,
  gt as v,
  k as y,
  nt as b,
  r as x,
  tt as S,
  ut as C,
} from "./framer.CxSNfGk-.mjs";
function w(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F = e(() => {
    (s(),
      h(),
      f(),
      l(),
      (T = [`LpQtxKlgK`, `JRQBKysd7`, `oMPSlIJ5z`, `MjcRs9F91`]),
      (E = `framer-UAzZa`),
      (D = {
        JRQBKysd7: `framer-v-1jtpg32`,
        LpQtxKlgK: `framer-v-12mm8nu`,
        MjcRs9F91: `framer-v-1pdc5si`,
        oMPSlIJ5z: `framer-v-8z3im5`,
      }),
      (O = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (k = ({ value: e, children: n }) => {
        let r = t(p),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(p.Provider, { value: s, children: n });
      }),
      (A = {
        "Desktop-Animated dot": `LpQtxKlgK`,
        "Desktop-Casual dot": `JRQBKysd7`,
        "Mobile- Animated Dot": `oMPSlIJ5z`,
        "Mobile- Casual Dot": `MjcRs9F91`,
      }),
      (j = u.create(r)),
      (M = ({ border: e, click: t, fill: n, fill2: r, height: i, id: a, width: o, ...s }) => ({
        ...s,
        biL5G1yhC: t ?? s.biL5G1yhC,
        f9k6Mip7I: n ?? s.f9k6Mip7I ?? `rgb(255, 255, 255)`,
        GSXD7mfz1: e ??
          s.GSXD7mfz1 ?? {
            borderColor: `var(--token-870e7f39-08be-4348-8a6b-f17e572ddd1b, rgba(255, 255, 255, 0.32)) /* {"name":"32"} */`,
            borderStyle: `solid`,
            borderWidth: 0,
          },
        variant: A[s.variant] ?? s.variant ?? `LpQtxKlgK`,
        VFuVAcShb: r ?? s.VFuVAcShb ?? `rgb(255, 255, 255)`,
      })),
      (N = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (P = _(
        a(function (e, t) {
          let r = n(null),
            a = t ?? r,
            o = c(),
            { activeLocale: s, setLocale: l } = C();
          b();
          let {
              style: f,
              className: p,
              layoutId: m,
              variant: h,
              f9k6Mip7I: g,
              VFuVAcShb: _,
              GSXD7mfz1: x,
              biL5G1yhC: A,
              ...P
            } = M(e),
            {
              baseVariant: F,
              classNames: I,
              clearLoadingGesture: L,
              gestureHandlers: R,
              gestureVariant: z,
              isLoading: B,
              setGestureState: V,
              setVariant: H,
              variants: U,
            } = v({
              cycleOrder: T,
              defaultVariant: `LpQtxKlgK`,
              ref: a,
              variant: h,
              variantClassNames: D,
            }),
            W = N(e, U),
            { activeVariantCallback: G, delay: K } = S(F),
            q = G(async (...e) => {
              if ((V({ isPressed: !1 }), A && (await A(...e)) === !1)) return !1;
            }),
            J = y(E);
          return i(d, {
            id: m ?? o,
            children: i(j, {
              animate: U,
              initial: !1,
              children: i(k, {
                value: O,
                children: i(u.div, {
                  ...P,
                  ...R,
                  className: y(J, `framer-12mm8nu`, p, I),
                  "data-framer-name": `Desktop-Animated dot`,
                  "data-highlight": !0,
                  layoutDependency: W,
                  layoutId: `LpQtxKlgK`,
                  onTap: q,
                  ref: a,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgb(255, 255, 255)`,
                    borderBottomLeftRadius: `100%`,
                    borderBottomRightRadius: `100%`,
                    borderTopLeftRadius: `100%`,
                    borderTopRightRadius: `100%`,
                    boxShadow: `0px 0.12072530715522589px 0.6036265357761295px 0px rgba(89, 111, 46, 0.12), 0px 1px 5px 0px rgb(89, 111, 46), 0.3010936508871964px 0px 1.505468254435982px 0px rgba(7, 196, 44, 0.06), 1.1442666516217286px 0px 5.7213332581086425px 0px rgba(7, 196, 44, 0.23), 5px 0px 25px 0px rgb(7, 196, 44)`,
                    ...f,
                  },
                  variants: {
                    JRQBKysd7: { boxShadow: `none` },
                    MjcRs9F91: {
                      "--border-bottom-width": (x?.borderBottomWidth ?? x?.borderWidth) + `px`,
                      "--border-color": x?.borderColor,
                      "--border-left-width": (x?.borderLeftWidth ?? x?.borderWidth) + `px`,
                      "--border-right-width": (x?.borderRightWidth ?? x?.borderWidth) + `px`,
                      "--border-style": x?.borderStyle,
                      "--border-top-width": (x?.borderTopWidth ?? x?.borderWidth) + `px`,
                      backgroundColor: _,
                      boxShadow: `none`,
                    },
                    oMPSlIJ5z: { backgroundColor: g },
                  },
                  ...w(
                    {
                      JRQBKysd7: { "data-framer-name": `Desktop-Casual dot` },
                      MjcRs9F91: { "data-border": !0, "data-framer-name": `Mobile- Casual Dot` },
                      oMPSlIJ5z: { "data-framer-name": `Mobile- Animated Dot` },
                    },
                    F,
                    z
                  ),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-UAzZa.framer-ztbdkl, .framer-UAzZa .framer-ztbdkl { display: block; }`,
          `.framer-UAzZa.framer-12mm8nu { cursor: pointer; height: 12px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 12px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-UAzZa.framer-v-1jtpg32.framer-12mm8nu, .framer-UAzZa.framer-v-8z3im5.framer-12mm8nu { height: 8px; width: 8px; }`,
          `.framer-UAzZa.framer-v-1pdc5si.framer-12mm8nu { height: 5px; width: 5px; }`,
          `.framer-UAzZa[data-border="true"]::after, .framer-UAzZa [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-UAzZa`
      )),
      (P.displayName = `Animated dot`),
      (P.defaultProps = { height: 12, width: 12 }),
      m(P, {
        variant: {
          options: [`LpQtxKlgK`, `JRQBKysd7`, `oMPSlIJ5z`, `MjcRs9F91`],
          optionTitles: [
            `Desktop-Animated dot`,
            `Desktop-Casual dot`,
            `Mobile- Animated Dot`,
            `Mobile- Casual Dot`,
          ],
          title: `Variant`,
          type: x.Enum,
        },
        f9k6Mip7I: { defaultValue: `rgb(255, 255, 255)`, title: `Fill`, type: x.Color },
        VFuVAcShb: { defaultValue: `rgb(255, 255, 255)`, title: `Fill 2`, type: x.Color },
        GSXD7mfz1: {
          defaultValue: {
            borderColor: `var(--token-870e7f39-08be-4348-8a6b-f17e572ddd1b, rgba(255, 255, 255, 0.32)) /* {"name":"32"} */`,
            borderStyle: `solid`,
            borderWidth: 0,
          },
          title: `Border`,
          type: x.Border,
        },
        biL5G1yhC: { title: `Click`, type: x.EventHandler },
      }),
      g(P, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
export { F as n, P as t };
//# sourceMappingURL=iYgDlDMmH.DJlzTzd_.mjs.map
