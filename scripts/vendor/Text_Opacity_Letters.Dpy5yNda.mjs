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
  c as f,
  g as p,
  h as m,
  j as h,
  k as g,
  l as _,
  o as v,
  s as y,
  v as b,
  w as x,
  x as S,
  z as C,
} from "./react.DwDJOhmk.mjs";
import {
  C as w,
  E as T,
  G as E,
  Q as D,
  T as O,
  V as ee,
  a as k,
  et as A,
  m as te,
  nt as j,
  q as M,
  r as N,
  s as P,
  v as F,
} from "./motion.C18vkCAc.mjs";
import {
  A as ne,
  C as re,
  E as I,
  G as L,
  L as R,
  R as z,
  T as B,
  _t as V,
  bt as ie,
  gt as ae,
  j as oe,
  k as H,
  nt as se,
  o as ce,
  ot as le,
  r as U,
  s as ue,
  t as W,
  tt as de,
  u as fe,
  ut as pe,
  v as me,
  x as G,
  yt as he,
  z as ge,
} from "./framer.CxSNfGk-.mjs";
import {
  A as K,
  C as _e,
  D as ve,
  M as ye,
  N as be,
  O as xe,
  P as Se,
  _ as Ce,
  a as we,
  c as Te,
  d as Ee,
  f as De,
  g as Oe,
  h as ke,
  i as Ae,
  j as je,
  k as Me,
  m as Ne,
  o as Pe,
  p as q,
  r as Fe,
  s as Ie,
  v as Le,
  w as Re,
} from "./shared-lib.D0roSlvA.mjs";
var ze,
  Be,
  J = e(() => {
    (L(),
      (ze = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...ze },
      (Be = {
        onClick: { type: U.EventHandler },
        onMouseEnter: { type: U.EventHandler },
        onMouseLeave: { type: U.EventHandler },
      }),
      U.Number,
      U.Boolean,
      U.String,
      U.Enum);
  });
function Ve(e, t) {
  return He(!0, e, t);
}
function Y(e, t) {
  return He(!1, e, t);
}
function He(e, t, n = !0) {
  let r = le();
  a(() => {
    n && r === e && t();
  }, [r]);
}
var Ue = e(() => {
    (L(), x());
  }),
  We = e(() => {
    x();
  }),
  Ge = e(() => {
    L();
  }),
  Ke = e(() => {
    L();
  }),
  qe = e(() => {
    x();
  }),
  Je = e(() => {
    L();
  }),
  Ye,
  X,
  Xe = e(() => {
    (r(),
      x(),
      (Ye = () => {
        if (c !== void 0) {
          let e = c.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (X = () => h(() => Ye(), [])));
  }),
  Ze = e(() => {
    (x(), Ke());
  }),
  Qe = e(() => {
    (x(), L(), Ke(), We());
  }),
  $e = e(() => {
    (L(), x(), J());
  });
function et() {
  return h(() => me.current(), []);
}
function tt() {
  return h(() => me.current() === me.canvas, []);
}
var nt = e(() => {
    (x(), L());
  }),
  rt = e(() => {
    x();
  });
function it(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: o,
  } = e;
  return h(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
}
var at,
  ot = e(() => {
    (x(),
      L(),
      (at = {
        borderRadius: {
          title: `Radius`,
          type: U.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      U.FusedNumber);
  }),
  st = e(() => {
    (J(), Ue(), We(), Ge(), Ke(), qe(), Je(), Xe(), Ze(), Qe(), $e(), nt(), rt(), ot());
  });
function ct(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function lt(e) {
  let t = ct(e);
  return f(_t, { ...t });
}
function ut(e) {
  let t = le(),
    n = o(!1),
    r = o(!1),
    a = i((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: i(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: i(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []),
    setProgress: a,
    isPlaying: r,
  };
}
function dt({ playingProp: e, muted: t, loop: r, playsinline: i, controls: a }) {
  let [o] = n(() => e),
    [s, c] = n(!1);
  e !== o && !s && c(!0);
  let l = o && t && r && i && !a && !s,
    u;
  return ((u = l ? `on-viewport` : o ? `on-mount` : `no-autoplay`), u);
}
function ft(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function pt(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(ft).join(` `);
}
var mt,
  ht,
  gt,
  _t,
  vt,
  yt = e(() => {
    (v(),
      L(),
      N(),
      st(),
      x(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((mt ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((ht ||= {})),
      (gt = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (_t = m(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: i = !1,
            controls: s = !1,
            playing: c = !0,
            loop: l = !0,
            muted: u = !0,
            playsinline: d = !0,
            restartOnEnter: p = !1,
            objectFit: m = `cover`,
            backgroundColor: g = `rgba(0,0,0,0)`,
            radius: _ = 0,
            volume: v = 25,
            startTime: y = 0,
            poster: b,
            playing: x,
            progress: S,
            onSeeked: C,
            onPause: T,
            onPlay: E,
            onEnd: D,
            onClick: O,
            onMouseEnter: k,
            onMouseLeave: A,
            onMouseDown: te,
            onMouseUp: j,
          } = e,
          M = o(),
          N = X(),
          P = o(null),
          F = o(null),
          ne = tt(),
          re = et(),
          I = ne || re === me.export,
          L = it(e),
          R = I
            ? `no-autoplay`
            : dt({ playingProp: x, muted: u, loop: l, playsinline: d, controls: s }),
          z = I ? !0 : ee(M),
          B = !I && ee(M, { margin: `10%`, once: !0 }),
          V = y === 100 ? 99.9 : y,
          { play: ie, pause: ae, setProgress: oe, isPlaying: H } = ut(M);
        (a(() => {
          I || (R !== `on-viewport` && (x ? ie() : ae()));
        }, [R, x]),
          a(() => {
            I || (z && x && R !== `no-autoplay` && ie(), R === `on-viewport` && ae());
          }, [R, z, x]),
          a(() => {
            !ne || b || i || V || !M.current || (M.current.currentTime = 0.01);
          }, [i, b, V]));
        let se = o(!1);
        (a(() => {
          if (!se.current) {
            se.current = !0;
            return;
          }
          let e = w(S) ? S.get() : (S ?? 0) * 0.01;
          oe((e ?? 0) || (V ?? 0) / 100);
        }, [V, r, n, S]),
          a(() => {
            if (w(S)) return S.on(`change`, (e) => oe(e));
          }, [S]),
          Ve(() => {
            P.current !== null && M.current && ((!F && l) || !P.current) && ie();
          }),
          Y(() => {
            M.current && ((F.current = M.current.ended), (P.current = M.current.paused), ae());
          }));
        let ce = h(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, V]);
        return (
          a(() => {
            N && M.current && R === `on-mount` && setTimeout(() => ie(), 50);
          }, []),
          a(() => {
            M.current && !u && (M.current.volume = (v ?? 0) / 100);
          }, [v]),
          f(`video`, {
            onClick: O,
            onMouseEnter: k,
            onMouseLeave: A,
            onMouseDown: te,
            onMouseUp: j,
            src: ce,
            loop: l,
            ref: M,
            onSeeked: (e) => C?.(e),
            onPause: (e) => T?.(e),
            onPlay: (e) => E?.(e),
            onEnded: (e) => D?.(e),
            autoPlay: H.current || R === `on-mount` || (x && R === `on-viewport` && z),
            preload: H.current
              ? `auto`
              : I && !b
                ? `metadata`
                : R !== `on-mount` && !B
                  ? `none`
                  : `metadata`,
            poster:
              i && !r && n === gt
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : i && b
                  ? b
                  : void 0,
            onLoadedData: () => {
              let e = M.current;
              e &&
                (e.currentTime < 0.3 && V > 0 && oe((V ?? 0) * 0.01),
                (H.current || R === `on-mount` || (x && R === `on-viewport` && z)) && ie());
            },
            controls: s,
            muted: I ? !0 : u,
            playsInline: d,
            style: {
              cursor: O ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: L,
              display: `block`,
              objectFit: m,
              backgroundColor: g,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (lt.displayName = `Video`),
      (vt = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      I(lt, {
        srcType: {
          type: U.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: U.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: U.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: U.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...at,
        posterEnabled: {
          type: U.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: U.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: U.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: U.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: U.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: U.Enum, title: `Fit`, options: vt, optionTitles: vt.map(pt) },
        controls: {
          type: U.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: U.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: U.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: U.EventHandler },
        onSeeked: { type: U.EventHandler },
        onPause: { type: U.EventHandler },
        onPlay: { type: U.EventHandler },
        ...Be,
      }));
  });
function bt(e) {
  let { mode: t, start: r, end: i, value: s, decimals: c, commas: l, color: u, animation: d } = e,
    f = me.current() === me.canvas,
    p = e.tag,
    m = T[e.tag],
    h = t == "default",
    g = h ? r : s,
    v = h ? d.transition : e.transition,
    b = (e) => {
      let t = e.toFixed(c);
      return (l && (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, `,`)), t);
    },
    [x, S] = n(g),
    [C, w] = n(x),
    [D, O] = n(null),
    k = o(null),
    A = ee(k, { once: !e.animation.replay, amount: `some` });
  E(s);
  let j = (e, t) => {
    f ||
      (D && D.stop(),
      w(t),
      O(
        te(e, t, {
          ...v,
          onUpdate: (e) => {
            S(e);
          },
        })
      ));
  };
  return (
    a(() => {
      h && d.trigger == `appear` && j(r, i);
    }, []),
    a(() => {
      h && d.trigger == `layerInView` && (A ? j(r, i) : (D && D.stop(), S(r)));
    }, [A]),
    a(() => {
      h || j(x, s);
    }, [s]),
    _(y, {
      children: [
        _(p, {
          style: {
            ...e.style,
            margin: 0,
            opacity: 0,
            pointerEvents: `none`,
            userSelect: `none`,
            textWrap: e.balance ? `balance` : void 0,
            fontVariantNumeric: e.monospace ? `tabular-nums` : void 0,
            textAlign: `center`,
            ...e.font,
          },
          children: [e.prefix, b(f ? g : C), e.suffix],
        }),
        _(m, {
          ref: k,
          style: {
            position: `absolute`,
            inset: 0,
            userSelect: e.userSelect ? `auto` : `none`,
            fontVariantNumeric: e.monospace ? `tabular-nums` : void 0,
            margin: 0,
            ...(u.mode == `solid`
              ? { color: u.color }
              : {
                  WebkitBackgroundClip: `text`,
                  WebkitTextFillColor: `transparent`,
                  backgroundImage: `linear-gradient(${u.angle}deg, ${u.startColor}, ${u.endColor})`,
                }),
            textDecoration: e.decoration,
            textWrap: e.balance ? `balance` : void 0,
            textAlign: `center`,
            ...e.font,
            ...e.style,
          },
          children: [e.prefix, b(f ? g : x), e.suffix],
        }),
      ],
    })
  );
}
var xt = e(() => {
  (v(),
    L(),
    x(),
    N(),
    (bt.displayName = `Animated Number Counter`),
    I(bt, {
      mode: {
        type: U.Enum,
        options: [`default`, `variants`],
        optionTitles: [`Default`, `Variants`],
        displaySegmentedControl: !0,
      },
      value: { type: U.Number, defaultValue: 0, hidden: (e) => e.mode !== `variants` },
      start: { type: U.Number, defaultValue: 0, hidden: (e) => e.mode !== "default" },
      end: { type: U.Number, defaultValue: 100, hidden: (e) => e.mode !== "default" },
      animation: {
        type: U.Object,
        icon: `effect`,
        hidden: (e) => e.mode !== "default",
        controls: {
          trigger: {
            type: U.Enum,
            defaultValue: `layerInView`,
            options: [`appear`, `layerInView`],
            optionTitles: [`Appear`, `Layer in View`],
            displaySegmentedControl: !0,
            segmentedControlDirection: `vertical`,
          },
          replay: {
            type: U.Boolean,
            defaultValue: !0,
            hidden(e) {
              return e.trigger !== `layerInView`;
            },
          },
          transition: {
            type: U.Transition,
            defaultValue: { type: `spring`, duration: 1, bounce: 0 },
          },
        },
      },
      transition: {
        type: U.Transition,
        defaultValue: { type: `spring`, duration: 1, bounce: 0 },
        hidden: (e) => e.mode !== `variants`,
      },
      decimals: {
        type: U.Enum,
        defaultValue: 0,
        options: [0, 1, 2, 3],
        optionTitles: [`Off`, `1`, `2`, `3`],
        displaySegmentedControl: !0,
      },
      commas: { type: U.Boolean, defaultValue: !0 },
      font: {
        type: `font`,
        controls: `extended`,
        defaultFontType: `sans-serif`,
        defaultValue: { fontSize: 16, lineHeight: 1 },
      },
      color: {
        type: U.Object,
        controls: {
          mode: {
            type: U.Enum,
            defaultValue: `solid`,
            options: [`solid`, `gradient`],
            optionTitles: [`Solid`, `Gradient`],
            displaySegmentedControl: !0,
          },
          color: { type: U.Color, defaultValue: `#000`, hidden: (e) => e.mode !== `solid` },
          startColor: { type: U.Color, defaultValue: `#000`, hidden: (e) => e.mode !== `gradient` },
          endColor: { type: U.Color, defaultValue: `#FFF`, hidden: (e) => e.mode !== `gradient` },
          angle: {
            type: U.Number,
            defaultValue: 180,
            min: -360,
            max: 360,
            unit: `°`,
            hidden: (e) => e.mode !== `gradient`,
          },
        },
      },
      prefix: { type: U.String, placeholder: `Prefix` },
      suffix: { type: U.String, placeholder: `Suffix` },
      decoration: {
        type: U.Enum,
        defaultValue: `none`,
        options: [`none`, `underline`, `line-through`],
        optionTitles: [`None`, `Underline`, `Strikethrough`],
      },
      balance: { type: U.Boolean, defaultValue: !1 },
      userSelect: { type: U.Boolean, defaultValue: !0 },
      tag: {
        type: U.Enum,
        defaultValue: `p`,
        displaySegmentedControl: !0,
        options: [`h1`, `h2`, `h3`, `p`],
        optionTitles: [`H1`, `H2`, `H3`, `P`],
      },
      monospace: {
        type: U.Boolean,
        defaultValue: !1,
        description: `More components at [Framer University](https://frameruni.link/cc).`,
      },
    }));
});
function St(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt = e(() => {
    (r(),
      (Ct = class {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.lerp)
            ((this.value = (function (e, t, n, r) {
              return (function (e, t, n) {
                return (1 - n) * e + n * t;
              })(e, t, 1 - Math.exp(-n * r));
            })(this.value, this.to, 60 * this.lerp, e)),
              Math.round(this.value) === this.to && ((this.value = this.to), (t = !0)));
          else {
            this.currentTime += e;
            let n = St(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          }
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: n = 0.1, duration: r = 1, easing: i = (e) => e, onStart: a, onUpdate: o }
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (wt = class {
        constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === C
                ? C.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            C.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper === C
            ? ((this.width = C.innerWidth), (this.height = C.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === C
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (Tt = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (Et = 100 / 6),
      (Dt = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new Tt()),
            C.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            C.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
            r = -(t - this.touchStart.x) * this.touchMultiplier,
            i = -(n - this.touchStart.y) * this.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e;
          ((t *= r === 1 ? Et : r === 2 ? this.windowWidth : 1),
            (n *= r === 1 ? Et : r === 2 ? this.windowHeight : 1),
            (t *= this.wheelMultiplier),
            (n *= this.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          ((this.windowWidth = C.innerWidth), (this.windowHeight = C.innerHeight));
        };
      }),
      (Ot = class {
        constructor({
          wrapper: e = C,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: s = 35,
          duration: c,
          easing: l = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: u = !c && 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = `vertical`,
          touchMultiplier: m = 1,
          wheelMultiplier: h = 1,
          autoResize: g = !0,
          prevent: _ = !1,
          __experimental__naiveDimensions: v = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => {
              if (n.ctrlKey) return;
              let r = n.type.includes(`touch`),
                i = n.type.includes(`wheel`);
              if (
                ((this.isTouching = n.type === `touchstart` || n.type === `touchmove`),
                this.options.syncTouch &&
                  r &&
                  n.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let a = e === 0 && t === 0,
                o =
                  (this.options.gestureOrientation === `vertical` && t === 0) ||
                  (this.options.gestureOrientation === `horizontal` && e === 0);
              if (a || o) return;
              let s = n.composedPath();
              s = s.slice(0, s.indexOf(this.rootElement));
              let c = this.options.prevent;
              if (
                s.find(
                  (e) =>
                    (typeof c == `function` ? c?.(e) : c) ||
                    e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                    (r && e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                    (i && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                    (e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`))
                )
              )
                return;
              if (this.isStopped || this.isLocked) return void n.preventDefault();
              if (!((this.options.syncTouch && r) || (this.options.smoothWheel && i)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              n.preventDefault();
              let l = t;
              this.options.gestureOrientation === `both`
                ? (l = Math.abs(t) > Math.abs(e) ? t : e)
                : this.options.gestureOrientation === `horizontal` && (l = e);
              let u = r && this.options.syncTouch,
                d = r && n.type === `touchend` && Math.abs(l) > 5;
              (d && (l = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + l,
                  Object.assign(
                    { programmatic: !1 },
                    u
                      ? { lerp: d ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (C.lenisVersion = `1.1.2`),
            (e !== document.documentElement && e !== document.body) || (e = C),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: s,
              duration: c,
              easing: l,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: h,
              autoResize: g,
              prevent: _,
              __experimental__naiveDimensions: v,
            }),
            (this.animate = new Ct()),
            (this.emitter = new Tt()),
            (this.dimensions = new wt({ wrapper: e, content: t, autoResize: g })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            (this.virtualScroll = new Dt(r, { touchMultiplier: m, wheelMultiplier: h })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit({ userData: e = {} } = {}) {
          ((this.userData = e), this.emitter.emit(`scroll`, this), (this.userData = {}));
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = !i && this.options.lerp,
            onStart: s,
            onComplete: c,
            force: l = !1,
            programmatic: u = !0,
            userData: d = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || l) {
            if ([`top`, `left`, `start`].includes(e)) e = 0;
            else if ([`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== C) {
                  let e = this.options.wrapper.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (typeof e == `number`) {
              if (
                ((e += t),
                (e = Math.round(e)),
                this.options.infinite
                  ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (e = St(0, e, this.limit)),
                n)
              )
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (c == null || c(this))
                );
              e !== this.targetScroll &&
                (u || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), s?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      u && (this.targetScroll = e),
                      t || this.emit({ userData: d }),
                      t &&
                        (this.reset(),
                        this.emit({ userData: d }),
                        c?.(this),
                        (this.__preventNextNativeScrollEvent = !0)));
                  },
                }));
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === C ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function At(e) {
  let { intensity: t } = e,
    n = o(null);
  return (
    a(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    a(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        ((t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), r && r.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    a(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = C.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    a(() => {
      try {
        if (typeof Ot != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new Ot({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                (n.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              (n.current.destroy(), (n.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [t]),
    a(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(C.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  i = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = C.getComputedStyle(e).scrollMarginTop;
                      i = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: i, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n)
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [n]),
    f(`div`, { style: e.style })
  );
}
var jt,
  Mt = e(() => {
    (r(),
      v(),
      L(),
      kt(),
      x(),
      (jt = V(
        At,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``
      )),
      (jt.displayName = `Smooth Scroll`),
      I(jt, {
        intensity: {
          title: `Intensity`,
          type: U.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  });
function Nt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Z,
  Ut = e(() => {
    (v(),
      L(),
      N(),
      x(),
      Ne(),
      K(),
      Te(),
      (Pt = [`LSgPmOROw`, `jI4pxkrrn`, `CwSbBJfLF`, `FgpeUYhex`, `adcGpAWOY`, `aq2LOCqjc`]),
      (Ft = `framer-lKCcA`),
      (It = {
        adcGpAWOY: `framer-v-xtttfg`,
        aq2LOCqjc: `framer-v-1rvpfmq`,
        CwSbBJfLF: `framer-v-pjfw65`,
        FgpeUYhex: `framer-v-r3c1yi`,
        jI4pxkrrn: `framer-v-q9be3r`,
        LSgPmOROw: `framer-v-4s09fe`,
      }),
      (Lt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rt = ({ value: e, children: n }) => {
        let r = t(P),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(P.Provider, { value: a, children: n });
      }),
      (zt = {
        "Desktop Default": `FgpeUYhex`,
        "Desktop-Active": `jI4pxkrrn`,
        "Desktop-Inactive": `LSgPmOROw`,
        "Tablet Active": `adcGpAWOY`,
        "Tablet Default": `aq2LOCqjc`,
        Mobile: `CwSbBJfLF`,
      }),
      (Bt = T.create(s)),
      (Vt = ({
        fullTitle: e,
        halfTitle: t,
        height: n,
        hover: r,
        id: i,
        mouseEnter: a,
        sn: o,
        snDescription: s,
        width: c,
        ...l
      }) => ({
        ...l,
        b4a_jpvaD: o ?? l.b4a_jpvaD ?? `01`,
        gmmWh2_j4: r ?? l.gmmWh2_j4,
        hSI8WpjYa: t ?? l.hSI8WpjYa ?? `Análisis y Estrategia`,
        HwIzu6A0L:
          s ??
          l.HwIzu6A0L ??
          `Analizo los objetivos de negocio, el mercado y los datos clave para definir la ruta visual y estratégica idónea.`,
        m53PDvlEP: a ?? l.m53PDvlEP,
        pPqtNvse5: e ?? l.pPqtNvse5 ?? `Análisis y                        Estrategia`,
        variant: zt[l.variant] ?? l.variant ?? `LSgPmOROw`,
      })),
      (Ht = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = V(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: c } = pe();
          se();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              hSI8WpjYa: m,
              pPqtNvse5: h,
              b4a_jpvaD: g,
              HwIzu6A0L: v,
              m53PDvlEP: y,
              gmmWh2_j4: x,
              ...S
            } = Vt(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: ee,
              setGestureState: A,
              setVariant: te,
              variants: j,
            } = ae({
              cycleOrder: Pt,
              defaultVariant: `LSgPmOROw`,
              ref: r,
              variant: p,
              variantClassNames: It,
            }),
            M = Ht(e, j),
            { activeVariantCallback: N, delay: P } = de(C),
            F = N(async (...e) => {
              if (
                (A({ isHovered: !0 }),
                (y && (await y(...e)) === !1) || (x && (await x(...e)) === !1))
              )
                return !1;
            }),
            ne = N(async (...e) => {
              if ((A({ isHovered: !0 }), x && (await x(...e)) === !1)) return !1;
            }),
            re = H(Ft, Ee, we, ve),
            I = () => ![`FgpeUYhex`, `aq2LOCqjc`].includes(C);
          return f(k, {
            id: d ?? i,
            children: f(Bt, {
              animate: j,
              initial: !1,
              children: f(Rt, {
                value: Lt,
                children: f(T.div, {
                  ...S,
                  ...D,
                  className: H(re, `framer-4s09fe`, u, w),
                  "data-border": !0,
                  "data-framer-name": `Desktop-Inactive`,
                  "data-highlight": !0,
                  layoutDependency: M,
                  layoutId: `LSgPmOROw`,
                  onMouseEnter: F,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(255, 255, 255, 0.16)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    background: `radial-gradient(50% 50% at 50% 50%, var(--token-4b341338-949e-448c-99a3-d0281ee083a2, rgb(0, 0, 0)) 0%, var(--token-4b341338-949e-448c-99a3-d0281ee083a2, rgb(0, 0, 0)) 100%)`,
                    backgroundColor: `var(--token-4b341338-949e-448c-99a3-d0281ee083a2, rgb(0, 0, 0))`,
                    ...l,
                  },
                  variants: {
                    adcGpAWOY: {
                      "--border-color": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                      background: `radial-gradient(50% 50% at 50% 50%, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(255, 103, 70)) 0%, rgba(255, 103, 70, 0) 100%)`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    },
                    jI4pxkrrn: {
                      "--border-color": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                      background: `radial-gradient(50% 50% at 50% 50%, rgb(237, 113, 81) 0%, rgba(237, 113, 81, 0) 100%)`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    },
                  },
                  ...Nt(
                    {
                      adcGpAWOY: { "data-framer-name": `Tablet Active` },
                      aq2LOCqjc: { "data-framer-name": `Tablet Default` },
                      CwSbBJfLF: { "data-framer-name": `Mobile`, onMouseEnter: ne },
                      FgpeUYhex: { "data-framer-name": `Desktop Default` },
                      jI4pxkrrn: { "data-framer-name": `Desktop-Active` },
                    },
                    C,
                    O
                  ),
                  children: _(T.div, {
                    className: `framer-i63sg8`,
                    "data-framer-name": `Description`,
                    layoutDependency: M,
                    layoutId: `rSRUyYp6d`,
                    children: [
                      f(G, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(T.p, {
                            className: `framer-styles-preset-1a34byj`,
                            "data-styles-preset": `JiqkWq2rH`,
                            children: `Discover the Essence that drives your brand`,
                          }),
                        }),
                        className: `framer-1vzo8g3`,
                        fonts: [`Inter`],
                        layoutDependency: M,
                        layoutId: `yLAQySo3J`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: h,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Nt(
                          {
                            aq2LOCqjc: {
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-1a34byj`,
                                  "data-styles-preset": `JiqkWq2rH`,
                                  children: `Discover the Essence `,
                                }),
                              }),
                              text: m,
                            },
                            FgpeUYhex: {
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-1a34byj`,
                                  "data-styles-preset": `JiqkWq2rH`,
                                  children: `Discover the Essence `,
                                }),
                              }),
                              text: m,
                            },
                          },
                          C,
                          O
                        ),
                      }),
                      f(T.div, {
                        className: `framer-1nflpdl`,
                        "data-framer-name": `Divider`,
                        layoutDependency: M,
                        layoutId: `SazHxiQ0w`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0.16)` },
                      }),
                      _(T.div, {
                        className: `framer-1q5lp5k`,
                        "data-framer-name": `S1`,
                        layoutDependency: M,
                        layoutId: `c2Hz8g7D9`,
                        children: [
                          f(G, {
                            __fromCanvasComponent: !0,
                            children: f(s, {
                              children: f(T.h1, {
                                className: `framer-styles-preset-169y6ng`,
                                "data-styles-preset": `uY1e5Bpwh`,
                                children: `S1`,
                              }),
                            }),
                            className: `framer-q56cq5`,
                            fonts: [`Inter`],
                            layoutDependency: M,
                            layoutId: `Msju_85lE`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: g,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Nt(
                              {
                                CwSbBJfLF: {
                                  children: f(s, {
                                    children: f(T.h1, {
                                      className: `framer-styles-preset-169y6ng`,
                                      "data-styles-preset": `uY1e5Bpwh`,
                                      dir: `auto`,
                                      children: `01`,
                                    }),
                                  }),
                                },
                                jI4pxkrrn: {
                                  children: f(s, {
                                    children: f(T.h1, {
                                      className: `framer-styles-preset-169y6ng`,
                                      "data-styles-preset": `uY1e5Bpwh`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `justify` },
                                      children: `01`,
                                    }),
                                  }),
                                },
                              },
                              C,
                              O
                            ),
                          }),
                          I() &&
                            f(G, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-vnfa5n`,
                                  "data-styles-preset": `ucZbjkXsj`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `end` },
                                  children: `Analizo los objetivos de negocio, el mercado y los datos clave para definir la ruta visual y estratégica idónea.`,
                                }),
                              }),
                              className: `framer-1il5tdv`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `kZlfdku7x`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-lKCcA.framer-6swcpp, .framer-lKCcA .framer-6swcpp { display: block; }`,
          `.framer-lKCcA.framer-4s09fe { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 137px; height: min-content; justify-content: flex-start; max-width: 450px; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 450px; }`,
          `.framer-lKCcA .framer-i63sg8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 23px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-lKCcA .framer-1vzo8g3 { flex: none; height: auto; max-width: 358px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-lKCcA .framer-1nflpdl { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; z-index: 2; }`,
          `.framer-lKCcA .framer-1q5lp5k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-lKCcA .framer-q56cq5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-lKCcA .framer-1il5tdv { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
          `.framer-lKCcA.framer-v-q9be3r.framer-4s09fe { max-width: unset; }`,
          `.framer-lKCcA.framer-v-q9be3r .framer-1il5tdv { flex: none; width: 80%; }`,
          `.framer-lKCcA.framer-v-pjfw65.framer-4s09fe { gap: 24px; padding: 20px 15px 20px 15px; width: 359px; }`,
          `.framer-lKCcA.framer-v-pjfw65 .framer-i63sg8 { gap: 24px; }`,
          `.framer-lKCcA.framer-v-r3c1yi.framer-4s09fe { width: 340px; }`,
          `.framer-lKCcA.framer-v-r3c1yi .framer-1vzo8g3, .framer-lKCcA.framer-v-1rvpfmq .framer-1vzo8g3 { height: 80px; }`,
          `.framer-lKCcA.framer-v-r3c1yi .framer-1q5lp5k, .framer-lKCcA.framer-v-1rvpfmq .framer-1q5lp5k { justify-content: flex-start; }`,
          `.framer-lKCcA.framer-v-xtttfg.framer-4s09fe { gap: 98px; max-width: unset; padding: 12px; width: 286px; }`,
          `.framer-lKCcA.framer-v-1rvpfmq.framer-4s09fe { gap: 98px; height: 469px; padding: 12px; width: 212px; }`,
          ...De,
          ...Pe,
          ...xe,
          `.framer-lKCcA[data-border="true"]::after, .framer-lKCcA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-lKCcA`
      )),
      (Z.displayName = `Process Item`),
      (Z.defaultProps = { height: 263, width: 450 }),
      I(Z, {
        variant: {
          options: [`LSgPmOROw`, `jI4pxkrrn`, `CwSbBJfLF`, `FgpeUYhex`, `adcGpAWOY`, `aq2LOCqjc`],
          optionTitles: [
            `Desktop-Inactive`,
            `Desktop-Active`,
            `Mobile`,
            `Desktop Default`,
            `Tablet Active`,
            `Tablet Default`,
          ],
          title: `Variant`,
          type: U.Enum,
        },
        hSI8WpjYa: {
          defaultValue: `Análisis y Estrategia`,
          displayTextArea: !1,
          title: `Half Title`,
          type: U.String,
        },
        onhSI8WpjYaChange: { changes: `hSI8WpjYa`, type: U.ChangeHandler },
        pPqtNvse5: {
          defaultValue: `Análisis y                        Estrategia`,
          displayTextArea: !1,
          title: `Full Title`,
          type: U.String,
        },
        onpPqtNvse5Change: { changes: `pPqtNvse5`, type: U.ChangeHandler },
        b4a_jpvaD: { defaultValue: `01`, displayTextArea: !1, title: `Sn`, type: U.String },
        onb4a_jpvaDChange: { changes: `b4a_jpvaD`, type: U.ChangeHandler },
        HwIzu6A0L: {
          defaultValue: `Analizo los objetivos de negocio, el mercado y los datos clave para definir la ruta visual y estratégica idónea.`,
          displayTextArea: !1,
          title: `Sn description`,
          type: U.String,
        },
        onHwIzu6A0LChange: { changes: `HwIzu6A0L`, type: U.ChangeHandler },
        m53PDvlEP: { title: `Mouse Enter`, type: U.EventHandler },
        gmmWh2_j4: { title: `Hover`, type: U.EventHandler },
      }),
      B(
        Z,
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
          ...z(q),
          ...z(Ie),
          ...z(Me),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Wt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  Q,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn = e(() => {
    (v(),
      L(),
      N(),
      x(),
      Ut(),
      (Gt = R(Z)),
      (Kt = he(re)),
      (qt = [`Jsf9NlMWD`, `ACtBsjVGX`, `FS3zd3l2O`, `CAydu6v9q`, `EASDIN8Sb`, `Gw6kM3AVf`]),
      (Jt = `framer-HCpgK`),
      (Yt = {
        ACtBsjVGX: `framer-v-1rhqak5`,
        CAydu6v9q: `framer-v-1stv3qw`,
        EASDIN8Sb: `framer-v-ab4bma`,
        FS3zd3l2O: `framer-v-oyjv8i`,
        Gw6kM3AVf: `framer-v-l82ru3`,
        Jsf9NlMWD: `framer-v-1ndxwet`,
      }),
      (Xt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Zt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 25,
      }),
      (Qt = { damping: 30, delay: 0, mass: 1, stiffness: 220, type: `spring` }),
      ($t = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Qt,
        x: 0,
        y: 25,
      }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (en = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 35,
      }),
      (tn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Qt,
        x: 0,
        y: 35,
      }),
      (nn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 45,
      }),
      (rn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Qt,
        x: 0,
        y: 45,
      }),
      (an = ({ value: e, children: n }) => {
        let r = t(P),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(P.Provider, { value: a, children: n });
      }),
      (on = {
        "Item 2 Hightlight": `ACtBsjVGX`,
        "Item 3 Hightlight": `FS3zd3l2O`,
        "Tablet Highlight 01": `CAydu6v9q`,
        "Tablet Highlight 02": `EASDIN8Sb`,
        "Tablet Highlight 03": `Gw6kM3AVf`,
        Default: `Jsf9NlMWD`,
      }),
      (sn = T.create(s)),
      (cn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: on[r.variant] ?? r.variant ?? `Jsf9NlMWD`,
      })),
      (ln = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (un = V(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: s } = pe(),
            c = se(),
            { style: l, className: u, layoutId: d, variant: p, ...m } = cn(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = ae({
              cycleOrder: qt,
              defaultVariant: `Jsf9NlMWD`,
              ref: r,
              variant: p,
              variantClassNames: Yt,
            }),
            D = ln(e, E),
            { activeVariantCallback: O, delay: ee } = de(h),
            A = O(async (...e) => {
              w(`Jsf9NlMWD`);
            }),
            te = O(async (...e) => {
              w(`CAydu6v9q`);
            }),
            j = O(async (...e) => {
              w(`ACtBsjVGX`);
            }),
            M = O(async (...e) => {
              w(`EASDIN8Sb`);
            }),
            N = O(async (...e) => {
              w(`FS3zd3l2O`);
            }),
            P = O(async (...e) => {
              w(`Gw6kM3AVf`);
            }),
            F = H(Jt);
          return f(k, {
            id: d ?? i,
            children: f(sn, {
              animate: E,
              initial: !1,
              children: f(an, {
                value: Xt,
                children: _(T.div, {
                  ...m,
                  ...y,
                  className: H(F, `framer-1ndxwet`, u, g),
                  "data-framer-name": `Default`,
                  layoutDependency: D,
                  layoutId: `Jsf9NlMWD`,
                  ref: r,
                  style: { ...l },
                  ...Wt(
                    {
                      ACtBsjVGX: { "data-framer-name": `Item 2 Hightlight` },
                      CAydu6v9q: { "data-framer-name": `Tablet Highlight 01` },
                      EASDIN8Sb: { "data-framer-name": `Tablet Highlight 02` },
                      FS3zd3l2O: { "data-framer-name": `Item 3 Hightlight` },
                      Gw6kM3AVf: { "data-framer-name": `Tablet Highlight 03` },
                    },
                    h,
                    x
                  ),
                  children: [
                    f(W, {
                      height: ((c?.height || 263) - 0) * 1,
                      width: `calc(${c?.width || `100vw`} * 0.38)`,
                      y: (c?.y || 0) + 0,
                      ...Wt(
                        {
                          ACtBsjVGX: { width: `calc(${c?.width || `100vw`} * 0.29)` },
                          CAydu6v9q: {
                            height: ((c?.height || 251) - 0) * 1,
                            y:
                              (c?.y || 0) +
                              (0 + ((c?.height || 251) - 0 - ((c?.height || 251) - 0) * 1) / 2),
                          },
                          EASDIN8Sb: {
                            height: 248,
                            width: `calc(${c?.width || `100vw`} * 0.2905)`,
                          },
                          FS3zd3l2O: {
                            height: ((c?.height || 200) - 0) * 1,
                            width: `calc(${c?.width || `100vw`} * 0.29)`,
                          },
                          Gw6kM3AVf: {
                            height: ((c?.height || 251) - 0) * 1,
                            width: `calc(${c?.width || `100vw`} * 0.29)`,
                          },
                        },
                        h,
                        x
                      ),
                      children: f(Kt, {
                        __framer__animate: { transition: Qt },
                        __framer__animateOnce: !0,
                        __framer__enter: Zt,
                        __framer__exit: $t,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1l8jnsz-container`,
                        layoutDependency: D,
                        layoutId: `gTbsV4SGM-container`,
                        nodeId: `gTbsV4SGM`,
                        rendersWithMotion: !0,
                        scopeId: `BHhpmRNpa`,
                        style: { scale: 1 },
                        variants: { EASDIN8Sb: { scale: 1.02 }, Gw6kM3AVf: { scale: 1.02 } },
                        children: f(Z, {
                          b4a_jpvaD: `01`,
                          height: `100%`,
                          hSI8WpjYa: `Análisis y Estrategia`,
                          HwIzu6A0L: `Analizo los objetivos de negocio, el mercado y los datos clave para definir la ruta visual y estratégica idónea.`,
                          id: `gTbsV4SGM`,
                          layoutId: `gTbsV4SGM`,
                          m53PDvlEP: A,
                          pPqtNvse5: `Análisis y                        Estrategia`,
                          style: { height: `100%`, width: `100%` },
                          variant: Q(`jI4pxkrrn`),
                          width: `100%`,
                          ...Wt(
                            {
                              ACtBsjVGX: { variant: Q(`FgpeUYhex`) },
                              CAydu6v9q: { m53PDvlEP: te, variant: Q(`adcGpAWOY`) },
                              EASDIN8Sb: { m53PDvlEP: te, variant: Q(`aq2LOCqjc`) },
                              FS3zd3l2O: { variant: Q(`FgpeUYhex`) },
                              Gw6kM3AVf: { m53PDvlEP: te, variant: Q(`aq2LOCqjc`) },
                            },
                            h,
                            x
                          ),
                        }),
                      }),
                    }),
                    f(W, {
                      height: 263,
                      width: `calc(${c?.width || `100vw`} * 0.2932)`,
                      y: (c?.y || 0) + 0,
                      ...Wt(
                        {
                          ACtBsjVGX: { width: `calc(${c?.width || `100vw`} * 0.38)` },
                          CAydu6v9q: {
                            height: ((c?.height || 251) - 0) * 1,
                            y:
                              (c?.y || 0) +
                              (0 + ((c?.height || 251) - 0 - ((c?.height || 251) - 0) * 1) / 2),
                          },
                          EASDIN8Sb: { width: `calc(${c?.width || `100vw`} * 0.38)` },
                          Gw6kM3AVf: { height: ((c?.height || 251) - 0) * 1 },
                        },
                        h,
                        x
                      ),
                      children: f(Kt, {
                        __framer__animate: { transition: Qt },
                        __framer__animateOnce: !0,
                        __framer__enter: en,
                        __framer__exit: tn,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-794o87-container`,
                        layoutDependency: D,
                        layoutId: `pXTCWsrnQ-container`,
                        nodeId: `pXTCWsrnQ`,
                        rendersWithMotion: !0,
                        scopeId: `BHhpmRNpa`,
                        children: f(Z, {
                          b4a_jpvaD: `02`,
                          height: `100%`,
                          hSI8WpjYa: `Diseño de Alto Impacto`,
                          HwIzu6A0L: `I translate strategy into visual identity and page structure. Every element serves a purpose—clean, accessible, and ready for growth.`,
                          id: `pXTCWsrnQ`,
                          layoutId: `pXTCWsrnQ`,
                          m53PDvlEP: j,
                          pPqtNvse5: `Diseño de Alto         Impacto`,
                          style: { width: `100%` },
                          variant: Q(`FgpeUYhex`),
                          width: `100%`,
                          ...Wt(
                            {
                              ACtBsjVGX: {
                                HwIzu6A0L: `Traduzco la estrategia en activos visuales potentes, interfaces web intuitivas o identidades corporativas sólidas.`,
                                variant: Q(`jI4pxkrrn`),
                              },
                              CAydu6v9q: {
                                HwIzu6A0L: `Traduzco la estrategia en activos visuales potentes, interfaces web intuitivas o identidades corporativas sólidas.`,
                                m53PDvlEP: M,
                                style: { height: `100%`, width: `100%` },
                                variant: Q(`aq2LOCqjc`),
                              },
                              EASDIN8Sb: {
                                HwIzu6A0L: `Traduzco la estrategia en activos visuales potentes, interfaces web intuitivas o identidades corporativas sólidas.`,
                                m53PDvlEP: M,
                                variant: Q(`adcGpAWOY`),
                              },
                              FS3zd3l2O: { HwIzu6A0L: `` },
                              Gw6kM3AVf: {
                                m53PDvlEP: M,
                                style: { height: `100%`, width: `100%` },
                                variant: Q(`aq2LOCqjc`),
                              },
                            },
                            h,
                            x
                          ),
                        }),
                      }),
                    }),
                    f(W, {
                      height: 263,
                      width: `calc(${c?.width || `100vw`} * 0.2927)`,
                      y: (c?.y || 0) + 0,
                      ...Wt(
                        {
                          CAydu6v9q: {
                            height: ((c?.height || 251) - 0) * 1,
                            y:
                              (c?.y || 0) +
                              (0 + ((c?.height || 251) - 0 - ((c?.height || 251) - 0) * 1) / 2),
                          },
                          EASDIN8Sb: {
                            height: 253,
                            width: `calc(${c?.width || `100vw`} * 0.2932)`,
                          },
                          FS3zd3l2O: { width: `calc(${c?.width || `100vw`} * 0.38)` },
                          Gw6kM3AVf: { width: `calc(${c?.width || `100vw`} * 0.38)` },
                        },
                        h,
                        x
                      ),
                      children: f(Kt, {
                        __framer__animate: { transition: Qt },
                        __framer__animateOnce: !0,
                        __framer__enter: nn,
                        __framer__exit: rn,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1jnzl0k-container`,
                        layoutDependency: D,
                        layoutId: `rwGECMI0h-container`,
                        nodeId: `rwGECMI0h`,
                        rendersWithMotion: !0,
                        scopeId: `BHhpmRNpa`,
                        children: f(Z, {
                          b4a_jpvaD: `03`,
                          height: `100%`,
                          hSI8WpjYa: `Ejecución y Crecimiento`,
                          HwIzu6A0L: `I build and launch your site in Framer or Webflow, then hand over an easy editor. You stay in control, with fast performance to scale.`,
                          id: `rwGECMI0h`,
                          layoutId: `rwGECMI0h`,
                          m53PDvlEP: N,
                          pPqtNvse5: `Ejecución y Crecimiento`,
                          style: { width: `100%` },
                          variant: Q(`FgpeUYhex`),
                          width: `100%`,
                          ...Wt(
                            {
                              CAydu6v9q: {
                                m53PDvlEP: P,
                                style: { height: `100%`, width: `100%` },
                                variant: Q(`aq2LOCqjc`),
                              },
                              EASDIN8Sb: {
                                HwIzu6A0L: ``,
                                m53PDvlEP: P,
                                style: { height: `100%`, width: `100%` },
                                variant: Q(`aq2LOCqjc`),
                              },
                              FS3zd3l2O: {
                                HwIzu6A0L: `Despliego las soluciones optimizadas para captar leads, impulsar el engagement y generar valor medible`,
                                pPqtNvse5: `Ejecución y                Crecimiento`,
                                variant: Q(`jI4pxkrrn`),
                              },
                              Gw6kM3AVf: {
                                HwIzu6A0L: `Despliego las soluciones optimizadas para captar leads, impulsar el engagement y generar valor medible`,
                                m53PDvlEP: P,
                                variant: Q(`adcGpAWOY`),
                              },
                            },
                            h,
                            x
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-HCpgK.framer-19tthj6, .framer-HCpgK .framer-19tthj6 { display: block; }`,
          `.framer-HCpgK.framer-1ndxwet { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1170px; }`,
          `.framer-HCpgK .framer-1l8jnsz-container { align-self: stretch; flex: none; height: auto; position: relative; width: 38%; z-index: 3; }`,
          `.framer-HCpgK .framer-794o87-container { flex: none; height: auto; position: relative; width: 29%; z-index: 2; }`,
          `.framer-HCpgK .framer-1jnzl0k-container { flex: none; height: auto; position: relative; width: 29%; z-index: 1; }`,
          `.framer-HCpgK.framer-v-1rhqak5 .framer-1l8jnsz-container, .framer-HCpgK.framer-v-oyjv8i .framer-1l8jnsz-container, .framer-HCpgK.framer-v-l82ru3 .framer-1l8jnsz-container { width: 29%; }`,
          `.framer-HCpgK.framer-v-1rhqak5 .framer-794o87-container, .framer-HCpgK.framer-v-ab4bma .framer-794o87-container, .framer-HCpgK.framer-v-l82ru3 .framer-1jnzl0k-container { width: 38%; }`,
          `.framer-HCpgK.framer-v-oyjv8i .framer-1jnzl0k-container { width: 38%; z-index: 3; }`,
          `.framer-HCpgK.framer-v-1stv3qw.framer-1ndxwet { align-content: center; align-items: center; gap: 12px; justify-content: center; width: 740px; }`,
          `.framer-HCpgK.framer-v-1stv3qw .framer-794o87-container, .framer-HCpgK.framer-v-1stv3qw .framer-1jnzl0k-container, .framer-HCpgK.framer-v-l82ru3 .framer-794o87-container { align-self: stretch; }`,
          `.framer-HCpgK.framer-v-ab4bma.framer-1ndxwet { gap: 16px; height: 469px; width: 740px; }`,
          `.framer-HCpgK.framer-v-ab4bma .framer-1l8jnsz-container { align-self: unset; height: 248px; width: 29%; }`,
          `.framer-HCpgK.framer-v-ab4bma .framer-1jnzl0k-container { height: 253px; width: 29%; }`,
          `.framer-HCpgK.framer-v-l82ru3.framer-1ndxwet { gap: 16px; width: 740px; }`,
        ],
        `framer-HCpgK`
      )),
      (un.displayName = `Process Item Cards`),
      (un.defaultProps = { height: 263, width: 1170 }),
      I(un, {
        variant: {
          options: [`Jsf9NlMWD`, `ACtBsjVGX`, `FS3zd3l2O`, `CAydu6v9q`, `EASDIN8Sb`, `Gw6kM3AVf`],
          optionTitles: [
            `Default`,
            `Item 2 Hightlight`,
            `Item 3 Hightlight`,
            `Tablet Highlight 01`,
            `Tablet Highlight 02`,
            `Tablet Highlight 03`,
          ],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      B(un, [{ explicitInter: !0, fonts: [] }, ...Gt], { supportsExplicitInterCodegen: !0 }),
      (un.loader = { load: (e, t) => (t.locale, Promise.allSettled([oe(Z, {}, t)])) }));
  }),
  fn,
  pn,
  mn,
  hn = e(() => {
    (L(),
      ne.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (fn = [
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
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (pn = [
        `.framer-cgCJR .framer-styles-preset-o817ld:not(.rich-text-wrapper), .framer-cgCJR .framer-styles-preset-o817ld.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.16px; --framer-line-height: 24px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (mn = `framer-cgCJR`));
  });
function gn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _n,
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
  jn,
  Mn = e(() => {
    (v(),
      L(),
      N(),
      x(),
      hn(),
      Se(),
      (_n = he(T.div)),
      (vn = { XvJgZcDBe: { hover: !0, pressed: !0 } }),
      (yn = [`XvJgZcDBe`, `ZmRzmxrfH`, `v34EyY65f`, `JwgTYg2Pf`, `spJUikMWo`]),
      (bn = `framer-jSo3S`),
      (xn = {
        JwgTYg2Pf: `framer-v-1ujzr75`,
        spJUikMWo: `framer-v-1d1son8`,
        v34EyY65f: `framer-v-viww6r`,
        XvJgZcDBe: `framer-v-14bvek7`,
        ZmRzmxrfH: `framer-v-14x2el7`,
      }),
      (Sn = { bounce: 0.2, delay: 0, duration: 0.2, type: `spring` }),
      (Cn = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (wn = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Tn = (e, t) => `translateX(-50%) ${t}`),
      (En = ({ value: e, children: n }) => {
        let r = t(P),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(P.Provider, { value: a, children: n });
      }),
      (Dn = {
        Default: `XvJgZcDBe`,
        Disabled: `v34EyY65f`,
        Error: `spJUikMWo`,
        Loading: `ZmRzmxrfH`,
        Success: `JwgTYg2Pf`,
      }),
      (On = T.create(s)),
      (kn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Dn[r.variant] ?? r.variant ?? `XvJgZcDBe`,
      })),
      (An = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (jn = V(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: c } = pe();
          se();
          let { style: l, className: u, layoutId: d, variant: p, ...m } = kn(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = ae({
              cycleOrder: yn,
              defaultVariant: `XvJgZcDBe`,
              enabledGestures: vn,
              ref: r,
              variant: p,
              variantClassNames: xn,
            }),
            D = An(e, E),
            O = H(bn, je, mn),
            ee = () => h !== `ZmRzmxrfH`,
            A = () => h === `ZmRzmxrfH`;
          return f(k, {
            id: d ?? i,
            children: f(On, {
              animate: E,
              initial: !1,
              children: f(En, {
                value: Sn,
                children: _(T.button, {
                  ...m,
                  ...y,
                  className: H(O, `framer-14bvek7`, u, g),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: D,
                  layoutId: `XvJgZcDBe`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    opacity: 1,
                    ...l,
                  },
                  variants: {
                    "XvJgZcDBe-hover": { opacity: 1 },
                    "XvJgZcDBe-pressed": { opacity: 1 },
                    JwgTYg2Pf: { opacity: 1 },
                    spJUikMWo: {
                      "--border-color": `var(--token-ade625ba-6148-4388-be20-c24061375fa9, rgb(207, 19, 19))`,
                      opacity: 1,
                    },
                    v34EyY65f: { opacity: 0.5 },
                  },
                  ...gn(
                    {
                      "XvJgZcDBe-hover": { "data-framer-name": void 0 },
                      "XvJgZcDBe-pressed": { "data-framer-name": void 0 },
                      JwgTYg2Pf: { "data-framer-name": `Success` },
                      spJUikMWo: { "data-framer-name": `Error` },
                      v34EyY65f: { "data-framer-name": `Disabled` },
                      ZmRzmxrfH: { "data-framer-name": `Loading` },
                    },
                    h,
                    x
                  ),
                  children: [
                    ee() &&
                      f(G, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(T.p, {
                            className: `framer-styles-preset-mmirif`,
                            "data-styles-preset": `snRA7OcdZ`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                            },
                            children: `Enviar`,
                          }),
                        }),
                        className: `framer-sxgv4y`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `ajlIXJtlM`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          "XvJgZcDBe-hover": {
                            "--extracted-r6o4lv": `var(--token-4b341338-949e-448c-99a3-d0281ee083a2, rgb(0, 0, 0))`,
                          },
                          spJUikMWo: {
                            "--extracted-r6o4lv": `var(--token-ade625ba-6148-4388-be20-c24061375fa9, rgb(207, 19, 19))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...gn(
                          {
                            "XvJgZcDBe-hover": {
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-mmirif`,
                                  "data-styles-preset": `snRA7OcdZ`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4b341338-949e-448c-99a3-d0281ee083a2, rgb(0, 0, 0)))`,
                                  },
                                  children: `Enviar`,
                                }),
                              }),
                            },
                            JwgTYg2Pf: {
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-mmirif`,
                                  "data-styles-preset": `snRA7OcdZ`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `Thank you`,
                                }),
                              }),
                            },
                            spJUikMWo: {
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-o817ld`,
                                  "data-styles-preset": `Mf_880LWY`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ade625ba-6148-4388-be20-c24061375fa9, rgb(207, 19, 19)))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                            },
                          },
                          h,
                          x
                        ),
                      }),
                    A() &&
                      f(T.div, {
                        className: `framer-v68srv`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: D,
                        layoutId: `XO84Vs4Nl`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: f(_n, {
                          __framer__loop: wn,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: Cn,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-oewhq4`,
                          "data-framer-name": `Conic`,
                          layoutDependency: D,
                          layoutId: `Y5wT0sfSw`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, var(--token-1b8a7884-54ba-4999-8dea-81e11d59bd07, rgb(68, 204, 255)) 0deg, var(--token-1b8a7884-54ba-4999-8dea-81e11d59bd07, rgb(68, 204, 255)) 360deg)`,
                            backgroundColor: `var(--token-1b8a7884-54ba-4999-8dea-81e11d59bd07, rgb(68, 204, 255))`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            ZmRzmxrfH: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: f(T.div, {
                            className: `framer-5mx25j`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: D,
                            layoutId: `oqS1bAsWN`,
                            style: {
                              backgroundColor: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: Tn,
                          }),
                        }),
                      }),
                    f(T.div, {
                      className: `framer-iybj62`,
                      "data-framer-name": `Overlay`,
                      layoutDependency: D,
                      layoutId: `dbyslefAm`,
                      style: {
                        backgroundColor: `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-jSo3S.framer-1sq79dp, .framer-jSo3S .framer-1sq79dp { display: block; }`,
          `.framer-jSo3S.framer-14bvek7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 12px 24px 12px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jSo3S .framer-sxgv4y { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-jSo3S .framer-v68srv { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: auto; overflow: hidden; position: relative; width: 20px; }`,
          `.framer-jSo3S .framer-oewhq4 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-jSo3S .framer-5mx25j { aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-jSo3S .framer-iybj62 { bottom: -50px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 50px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jSo3S.framer-v-14x2el7.framer-14bvek7 { cursor: unset; height: 54px; justify-content: center; }`,
          `.framer-jSo3S.framer-v-14x2el7 .framer-v68srv { order: 1; }`,
          `.framer-jSo3S.framer-v-14x2el7 .framer-oewhq4 { overflow: hidden; }`,
          `.framer-jSo3S.framer-v-14x2el7 .framer-iybj62 { bottom: -60px; order: 2; top: 60px; }`,
          `.framer-jSo3S.framer-v-viww6r.framer-14bvek7, .framer-jSo3S.framer-v-1ujzr75.framer-14bvek7 { cursor: unset; }`,
          `.framer-jSo3S.framer-v-1ujzr75 .framer-iybj62, .framer-jSo3S.framer-v-1d1son8 .framer-iybj62 { bottom: -60px; top: 60px; }`,
          `.framer-jSo3S.framer-v-1d1son8.framer-14bvek7 { cursor: unset; height: 54px; }`,
          `.framer-jSo3S.framer-v-14bvek7.hover .framer-sxgv4y { z-index: 2; }`,
          `.framer-jSo3S.framer-v-14bvek7.hover .framer-iybj62 { bottom: 0px; top: 0px; }`,
          ...ye,
          ...pn,
          `.framer-jSo3S[data-border="true"]::after, .framer-jSo3S [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-jSo3S`
      )),
      (jn.displayName = `Submit Form Button`),
      (jn.defaultProps = { height: 40, width: 92 }),
      I(jn, {
        variant: {
          options: [`XvJgZcDBe`, `ZmRzmxrfH`, `v34EyY65f`, `JwgTYg2Pf`, `spJUikMWo`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      B(
        jn,
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
          ...z(be),
          ...z(fn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Nn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pn,
  Fn,
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
  Xn = e(() => {
    (v(),
      L(),
      N(),
      x(),
      Ne(),
      hn(),
      Ae(),
      (Pn = ie(he(fe))),
      (Fn = ie(he(T.div))),
      (In = [`XLblmTDen`, `ejBpwbohb`, `Z2JKCYtU6`]),
      (Ln = `framer-EdMcC`),
      (Rn = {
        ejBpwbohb: `framer-v-1r5i7cz`,
        XLblmTDen: `framer-v-pu3gr`,
        Z2JKCYtU6: `framer-v-1loy66a`,
      }),
      (zn = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Bn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Vn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Hn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Un = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 30, delay: 0.05, mass: 1, stiffness: 200, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Wn = ({ value: e, children: n }) => {
        let r = t(P),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(P.Provider, { value: a, children: n });
      }),
      (Gn = {
        "Desktop Service": `XLblmTDen`,
        "Phone Services": `Z2JKCYtU6`,
        "Tablet Service": `ejBpwbohb`,
      }),
      (Kn = T.create(s)),
      (qn = ({
        description: e,
        height: t,
        id: n,
        leftImage: r,
        service1Pt: i,
        service2Pt: a,
        service3Pt: o,
        service4Pt: s,
        service5Pt: c,
        serviceHeading: l,
        width: u,
        ...d
      }) => ({
        ...d,
        BGD8Sdm_i: a ?? d.BGD8Sdm_i ?? `Posicionamiento SEO & GEO`,
        CaNLWgiqh: c ?? d.CaNLWgiqh ?? `Presentaciones Ejecutivas e Informes Técnicos`,
        ELDp9TJM5: i ?? d.ELDp9TJM5 ?? `Estrategia Digital y Captación de Leads`,
        mHBz1B8Ja: l ?? d.mHBz1B8Ja ?? `Marketing Digital & Estrategia`,
        ojzyCBv8x: r ??
          d.ojzyCBv8x ?? {
            alt: ``,
            pixelHeight: 530,
            pixelWidth: 424,
            src: `https://framerusercontent.com/images/sJ3qHg5xUuXQX7Fc0FnewXNGr6k.jpg?width=424&height=530`,
            srcSet: `https://framerusercontent.com/images/sJ3qHg5xUuXQX7Fc0FnewXNGr6k.jpg?width=424&height=530 424w`,
          },
        variant: Gn[d.variant] ?? d.variant ?? `XLblmTDen`,
        VDzIS7qj4:
          e ??
          d.VDzIS7qj4 ??
          `Lidero planes de comunicación e implementación digital orientados al crecimiento comercial, captación de leads cualificados y optimización de tráfico.`,
        VWQ7lt9T2: o ?? d.VWQ7lt9T2 ?? `Email Marketing & Automatización de BBDD`,
        XdCWIZVR_: s ?? d.XdCWIZVR_ ?? `Estrategia en Redes Sociales & Engagement`,
      })),
      (Jn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Yn = V(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: c } = pe(),
            l = se(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              ojzyCBv8x: h,
              mHBz1B8Ja: g,
              VDzIS7qj4: v,
              ELDp9TJM5: y,
              BGD8Sdm_i: x,
              VWQ7lt9T2: S,
              XdCWIZVR_: C,
              CaNLWgiqh: w,
              ...E
            } = qn(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: ee,
              gestureHandlers: A,
              gestureVariant: te,
              isLoading: j,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = ae({
              cycleOrder: In,
              defaultVariant: `XLblmTDen`,
              ref: r,
              variant: m,
              variantClassNames: Rn,
            }),
            F = Jn(e, P),
            ne = H(Ln, Ee, mn);
          return f(k, {
            id: p ?? i,
            children: f(Kn, {
              animate: P,
              initial: !1,
              children: f(Wn, {
                value: zn,
                children: _(T.div, {
                  ...E,
                  ...A,
                  className: H(ne, `framer-pu3gr`, d, O),
                  "data-framer-name": `Desktop Service`,
                  layoutDependency: F,
                  layoutId: `XLblmTDen`,
                  ref: r,
                  style: { ...u },
                  ...Nn(
                    {
                      ejBpwbohb: { "data-framer-name": `Tablet Service` },
                      Z2JKCYtU6: { "data-framer-name": `Phone Services` },
                    },
                    D,
                    te
                  ),
                  children: [
                    f(Pn, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Vn,
                      background: {
                        alt: ``,
                        fit: `fit`,
                        loading: ge((l?.y || 0) + (0 + ((l?.height || 734) - 0 - 734) / 2)),
                        pixelHeight: 530,
                        pixelWidth: 424,
                        sizes: `calc(${l?.width || `100vw`} / 2)`,
                        ...Bn(h),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-1kvg7p3`,
                      "data-framer-appear-id": `1kvg7p3`,
                      "data-framer-name": `left img`,
                      fitImageDimension: `height`,
                      initial: Hn,
                      layoutDependency: F,
                      layoutId: `Hg47Ws228`,
                      optimized: !0,
                      style: {
                        borderBottomLeftRadius: 11,
                        borderBottomRightRadius: 11,
                        borderTopLeftRadius: 11,
                        borderTopRightRadius: 11,
                      },
                      ...Nn(
                        {
                          ejBpwbohb: {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              loading: ge((l?.y || 0) + (0 + ((l?.height || 637) - 0 - 506) / 2)),
                              pixelHeight: 530,
                              pixelWidth: 424,
                              sizes: `calc(${l?.width || `100vw`} / 2)`,
                              ...Bn(h),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                          Z2JKCYtU6: {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              loading: ge(
                                (l?.y || 0) +
                                  0 +
                                  (((l?.height || 745) - 2 - 1431) / 2 / 2 +
                                    0 +
                                    (((l?.height || 745) - 2 - 1431) / 2) * 0)
                              ),
                              pixelHeight: 530,
                              pixelWidth: 424,
                              sizes: l?.width || `100vw`,
                              ...Bn(h),
                              positionX: `center`,
                              positionY: `center`,
                            },
                            fitImageDimension: void 0,
                          },
                        },
                        D,
                        te
                      ),
                    }),
                    _(T.div, {
                      className: `framer-1y2qrvu`,
                      "data-framer-name": `Service Container`,
                      layoutDependency: F,
                      layoutId: `z3ghcF2lr`,
                      children: [
                        _(T.div, {
                          className: `framer-1r7z21v`,
                          "data-framer-name": `Service Content`,
                          layoutDependency: F,
                          layoutId: `DYSXuqGSF`,
                          children: [
                            f(G, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-1a34byj`,
                                  "data-styles-preset": `JiqkWq2rH`,
                                  children: `Branding`,
                                }),
                              }),
                              className: `framer-dls4il`,
                              fonts: [`Inter`],
                              layoutDependency: F,
                              layoutId: `ZkUHS_Iby`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: g,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(G, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-o817ld`,
                                  "data-styles-preset": `Mf_880LWY`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                  },
                                  children: `I create distinctive brand identities through strategy and visual design, helping businesses stand out, connect with audiences, and leave a lasting impression.`,
                                }),
                              }),
                              className: `framer-1qrgvmq`,
                              fonts: [`Inter`],
                              layoutDependency: F,
                              layoutId: `wbGKyrV7x`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        f(T.div, {
                          className: `framer-ri00u0`,
                          "data-framer-name": `Divider`,
                          layoutDependency: F,
                          layoutId: `dRuI2k6RD`,
                          style: { backgroundColor: `rgba(255, 255, 255, 0.16)` },
                        }),
                        _(T.div, {
                          className: `framer-1srf3jr`,
                          "data-framer-name": `Services Offered`,
                          layoutDependency: F,
                          layoutId: `yfdjKZ3Vz`,
                          children: [
                            _(Fn, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: Un,
                              className: `framer-1gke07t`,
                              "data-framer-appear-id": `1gke07t`,
                              "data-framer-name": `Service 1`,
                              initial: Hn,
                              layoutDependency: F,
                              layoutId: `CbLncNAF7`,
                              optimized: !0,
                              children: [
                                f(G, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o817ld`,
                                      "data-styles-preset": `Mf_880LWY`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                      },
                                      children: `//`,
                                    }),
                                  }),
                                  className: `framer-kaunyp`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `a8Nf_4BCh`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(G, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o817ld`,
                                      "data-styles-preset": `Mf_880LWY`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                      },
                                      children: `Brand Strategy`,
                                    }),
                                  }),
                                  className: `framer-1bky694`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `sRQPAZJaG`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: y,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            _(Fn, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: Un,
                              className: `framer-1nz7nd1`,
                              "data-framer-appear-id": `1nz7nd1`,
                              "data-framer-name": `Service 2`,
                              initial: Hn,
                              layoutDependency: F,
                              layoutId: `xC9ffNqvJ`,
                              optimized: !0,
                              children: [
                                f(G, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o817ld`,
                                      "data-styles-preset": `Mf_880LWY`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                      },
                                      children: `//`,
                                    }),
                                  }),
                                  className: `framer-1csqdbu`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `XdlREXHiy`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(G, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o817ld`,
                                      "data-styles-preset": `Mf_880LWY`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                      },
                                      children: `// Visual Identity Design`,
                                    }),
                                  }),
                                  className: `framer-1idszbf`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `Gak1jxLA3`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: x,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            _(Fn, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: Un,
                              className: `framer-1aezhog`,
                              "data-framer-appear-id": `1aezhog`,
                              "data-framer-name": `Service 3`,
                              initial: Hn,
                              layoutDependency: F,
                              layoutId: `oZgxbADDB`,
                              optimized: !0,
                              children: [
                                f(G, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o817ld`,
                                      "data-styles-preset": `Mf_880LWY`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                      },
                                      children: `//`,
                                    }),
                                  }),
                                  className: `framer-1ghgqu1`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `EyJGJKynV`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(G, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o817ld`,
                                      "data-styles-preset": `Mf_880LWY`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                      },
                                      children: `Logo & Typography`,
                                    }),
                                  }),
                                  className: `framer-1lcmu9i`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `VM3Vfkq4L`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: S,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            _(Fn, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: Un,
                              className: `framer-ac6fwg`,
                              "data-framer-appear-id": `ac6fwg`,
                              "data-framer-name": `Service 4`,
                              initial: Hn,
                              layoutDependency: F,
                              layoutId: `JApaDNTSn`,
                              optimized: !0,
                              children: [
                                f(G, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o817ld`,
                                      "data-styles-preset": `Mf_880LWY`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                      },
                                      children: `//`,
                                    }),
                                  }),
                                  className: `framer-r1rrhj`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `IuFRAlbof`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(G, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o817ld`,
                                      "data-styles-preset": `Mf_880LWY`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                      },
                                      children: `Color Palette Creation`,
                                    }),
                                  }),
                                  className: `framer-1cq5s52`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `DSo0papQO`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: C,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            _(Fn, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: Un,
                              className: `framer-se856j`,
                              "data-framer-appear-id": `se856j`,
                              "data-framer-name": `Service 5`,
                              initial: Hn,
                              layoutDependency: F,
                              layoutId: `VY2ytB6Ha`,
                              optimized: !0,
                              children: [
                                f(G, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o817ld`,
                                      "data-styles-preset": `Mf_880LWY`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                      },
                                      children: `//`,
                                    }),
                                  }),
                                  className: `framer-1qs46i3`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `pYMobq53N`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(G, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o817ld`,
                                      "data-styles-preset": `Mf_880LWY`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255)))`,
                                      },
                                      children: `Brand Guidelines`,
                                    }),
                                  }),
                                  className: `framer-1vxbvbu`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `WNixbv6gm`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: w,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
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
            }),
          });
        }),
        [
          `.framer-EdMcC.framer-ii1anh, .framer-EdMcC .framer-ii1anh { display: block; }`,
          `.framer-EdMcC.framer-pu3gr { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-around; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1175px; }`,
          `.framer-EdMcC .framer-1kvg7p3 { display: grid; flex: none; gap: 0px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(0, min-content); height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 50%; will-change: var(--framer-will-change-override, transform); z-index: 3; }`,
          `.framer-EdMcC .framer-1y2qrvu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 424px; overflow: var(--overflow-clip-fallback, clip); padding: 117px 0px 117px 0px; position: relative; width: 36%; z-index: 1; }`,
          `.framer-EdMcC .framer-1r7z21v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 424px; }`,
          `.framer-EdMcC .framer-dls4il, .framer-EdMcC .framer-1qrgvmq { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
          `.framer-EdMcC .framer-ri00u0 { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 424px; z-index: 2; }`,
          `.framer-EdMcC .framer-1srf3jr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 10px 0px; position: relative; width: 424px; }`,
          `.framer-EdMcC .framer-1gke07t, .framer-EdMcC .framer-1nz7nd1, .framer-EdMcC .framer-1aezhog, .framer-EdMcC .framer-ac6fwg, .framer-EdMcC .framer-se856j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-EdMcC .framer-kaunyp, .framer-EdMcC .framer-1csqdbu, .framer-EdMcC .framer-1ghgqu1, .framer-EdMcC .framer-r1rrhj, .framer-EdMcC .framer-1qs46i3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-EdMcC .framer-1bky694, .framer-EdMcC .framer-1idszbf, .framer-EdMcC .framer-1lcmu9i, .framer-EdMcC .framer-1cq5s52, .framer-EdMcC .framer-1vxbvbu { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
          `.framer-EdMcC.framer-v-1r5i7cz.framer-pu3gr { width: 810px; }`,
          `.framer-EdMcC.framer-v-1r5i7cz .framer-1y2qrvu { flex: 1 0 0px; max-width: 360px; width: 1px; }`,
          `.framer-EdMcC.framer-v-1loy66a.framer-pu3gr { flex-direction: column; padding: 0px 0px 2px 0px; width: 360px; }`,
          `.framer-EdMcC.framer-v-1loy66a .framer-1kvg7p3 { height: 330px; width: 100%; }`,
          `.framer-EdMcC.framer-v-1loy66a .framer-1y2qrvu { gap: 16px; padding: 45px 0px 45px 0px; width: 100%; }`,
          `.framer-EdMcC.framer-v-1loy66a .framer-1srf3jr { gap: 8px; }`,
          ...De,
          ...pn,
        ],
        `framer-EdMcC`
      )),
      (Yn.displayName = `Service Description`),
      (Yn.defaultProps = { height: 734, width: 1175 }),
      I(Yn, {
        variant: {
          options: [`XLblmTDen`, `ejBpwbohb`, `Z2JKCYtU6`],
          optionTitles: [`Desktop Service`, `Tablet Service`, `Phone Services`],
          title: `Variant`,
          type: U.Enum,
        },
        ojzyCBv8x: {
          __defaultAssetReference: `data:framer/asset-reference,sJ3qHg5xUuXQX7Fc0FnewXNGr6k.jpg?originalFilename=Service+Image.jpg&width=424&height=530`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,sJ3qHg5xUuXQX7Fc0FnewXNGr6k.jpg?originalFilename=Service+Image.jpg&width=424&height=530`,
          },
          title: `Left-Image`,
          type: U.ResponsiveImage,
        },
        mHBz1B8Ja: {
          defaultValue: `Marketing Digital & Estrategia`,
          displayTextArea: !1,
          title: `Service Heading`,
          type: U.String,
        },
        onmHBz1B8JaChange: { changes: `mHBz1B8Ja`, type: U.ChangeHandler },
        VDzIS7qj4: {
          defaultValue: `Lidero planes de comunicación e implementación digital orientados al crecimiento comercial, captación de leads cualificados y optimización de tráfico.`,
          displayTextArea: !1,
          title: `Description`,
          type: U.String,
        },
        onVDzIS7qj4Change: { changes: `VDzIS7qj4`, type: U.ChangeHandler },
        ELDp9TJM5: {
          defaultValue: `Estrategia Digital y Captación de Leads`,
          displayTextArea: !1,
          title: `Service 1 pt.`,
          type: U.String,
        },
        onELDp9TJM5Change: { changes: `ELDp9TJM5`, type: U.ChangeHandler },
        BGD8Sdm_i: {
          defaultValue: `Posicionamiento SEO & GEO`,
          displayTextArea: !1,
          title: `Service 2 pt.`,
          type: U.String,
        },
        onBGD8Sdm_iChange: { changes: `BGD8Sdm_i`, type: U.ChangeHandler },
        VWQ7lt9T2: {
          defaultValue: `Email Marketing & Automatización de BBDD`,
          displayTextArea: !1,
          title: `Service 3 pt.`,
          type: U.String,
        },
        onVWQ7lt9T2Change: { changes: `VWQ7lt9T2`, type: U.ChangeHandler },
        XdCWIZVR_: {
          defaultValue: `Estrategia en Redes Sociales & Engagement`,
          displayTextArea: !1,
          title: `Service 4 pt.`,
          type: U.String,
        },
        onXdCWIZVR_Change: { changes: `XdCWIZVR_`, type: U.ChangeHandler },
        CaNLWgiqh: {
          defaultValue: `Presentaciones Ejecutivas e Informes Técnicos`,
          displayTextArea: !1,
          title: `Service 5 pt.`,
          type: U.String,
        },
        onCaNLWgiqhChange: { changes: `CaNLWgiqh`, type: U.ChangeHandler },
      }),
      B(
        Yn,
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
          ...z(q),
          ...z(fn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Yn.loader = { load: (e, t) => (t.locale, Promise.allSettled([oe(Fe, {}, t)])) }));
  });
function Zn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr = e(() => {
    (v(),
      L(),
      N(),
      x(),
      Xn(),
      (Qn = R(Yn)),
      ($n = [`UgYR5Tsdv`, `l7UVYKbB6`, `IAyFNxym5`]),
      (er = `framer-cpP83`),
      (tr = {
        IAyFNxym5: `framer-v-hzoxv0`,
        l7UVYKbB6: `framer-v-bsdpg4`,
        UgYR5Tsdv: `framer-v-1hsrlml`,
      }),
      (nr = { duration: 0, type: `tween` }),
      (rr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ir = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ar = ({ value: e, children: n }) => {
        let r = t(P),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(P.Provider, { value: a, children: n });
      }),
      (or = { Desktop: `UgYR5Tsdv`, Phone: `IAyFNxym5`, Tablet: `l7UVYKbB6` }),
      (sr = T.create(s)),
      (cr = (e, t) => {
        let [r, i] = n(e),
          [a, o] = n(e);
        return t ? [e, t] : (e !== a && (i(e), o(e)), [r, i]);
      }),
      (lr = ({
        bGImage: e,
        description: t,
        height: n,
        id: r,
        leftImage: i,
        service1Pt: a,
        service2Pt: o,
        service3Pt: s,
        service4Pt: c,
        service5Pt: l,
        serviceHeading: u,
        width: d,
        ...f
      }) => ({
        ...f,
        c7oY_GqyG: a ?? f.c7oY_GqyG ?? `Brand Strategy`,
        KdEt9rwMZ: u ?? f.KdEt9rwMZ ?? `Branding`,
        KeSXg4BB3: o ?? f.KeSXg4BB3 ?? `Visual Identity Design`,
        nulvNAc6E: l ?? f.nulvNAc6E ?? `Brand Guidelines`,
        P4IDf7GB0: c ?? f.P4IDf7GB0 ?? `Color Palette Creation`,
        QWmhemMv4:
          t ??
          f.QWmhemMv4 ??
          `I create distinctive brand identities through strategy and visual design, helping businesses stand out, connect with audiences, and leave a impression.`,
        variant: or[f.variant] ?? f.variant ?? `UgYR5Tsdv`,
        vbt5Xz742: i ??
          f.vbt5Xz742 ?? {
            pixelHeight: 530,
            pixelWidth: 424,
            src: `https://framerusercontent.com/images/sJ3qHg5xUuXQX7Fc0FnewXNGr6k.jpg?width=424&height=530`,
            srcSet: `https://framerusercontent.com/images/sJ3qHg5xUuXQX7Fc0FnewXNGr6k.jpg?width=424&height=530 424w`,
          },
        xNfSZUFiF: e ??
          f.xNfSZUFiF ?? {
            alt: ``,
            pixelHeight: 795,
            pixelWidth: 636,
            src: `https://framerusercontent.com/images/eWa04F2j6oGTilP5VjUHFI9x3xc.jpg?width=636&height=795`,
            srcSet: `https://framerusercontent.com/images/eWa04F2j6oGTilP5VjUHFI9x3xc.jpg?width=636&height=795 636w`,
          },
        zN6LkXPzw: s ?? f.zN6LkXPzw ?? `Logo & Typography`,
      })),
      (ur = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (dr = V(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: s } = pe(),
            c = se(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              vbt5Xz742: m,
              xNfSZUFiF: h,
              KdEt9rwMZ: g,
              onKdEt9rwMZChange: v,
              QWmhemMv4: y,
              onQWmhemMv4Change: x,
              c7oY_GqyG: S,
              onc7oY_GqyGChange: C,
              KeSXg4BB3: w,
              onKeSXg4BB3Change: E,
              zN6LkXPzw: D,
              onzN6LkXPzwChange: O,
              P4IDf7GB0: ee,
              onP4IDf7GB0Change: A,
              nulvNAc6E: te,
              onnulvNAc6EChange: j,
              ...M
            } = lr(e),
            [N, P] = cr(g, v),
            [F, ne] = cr(y, x),
            [I, L] = cr(S, C),
            [R, z] = cr(w, E),
            [B, V] = cr(D, O),
            [ie, oe] = cr(ee, A),
            [ce, le] = cr(te, j),
            {
              baseVariant: U,
              classNames: ue,
              clearLoadingGesture: de,
              gestureHandlers: me,
              gestureVariant: G,
              isLoading: he,
              setGestureState: K,
              setVariant: _e,
              variants: ve,
            } = ae({
              cycleOrder: $n,
              defaultVariant: `UgYR5Tsdv`,
              ref: r,
              variant: p,
              variantClassNames: tr,
            }),
            ye = ur(e, ve),
            be = H(er);
          return f(k, {
            id: d ?? i,
            children: f(sr, {
              animate: ve,
              initial: !1,
              children: f(ar, {
                value: nr,
                children: _(T.div, {
                  ...M,
                  ...me,
                  className: H(be, `framer-1hsrlml`, u, ue),
                  "data-framer-name": `Desktop`,
                  layoutDependency: ye,
                  layoutId: `UgYR5Tsdv`,
                  ref: r,
                  style: { ...l },
                  ...Zn(
                    {
                      IAyFNxym5: { "data-framer-name": `Phone` },
                      l7UVYKbB6: { "data-framer-name": `Tablet` },
                    },
                    U,
                    G
                  ),
                  children: [
                    f(T.div, {
                      className: `framer-3228ye`,
                      "data-framer-name": `BG Blur`,
                      layoutDependency: ye,
                      layoutId: `Rb9VL_nO3`,
                      style: {
                        backdropFilter: `blur(15px)`,
                        background: `linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(84, 84, 84, 0.3) 100%)`,
                        WebkitBackdropFilter: `blur(15px)`,
                      },
                    }),
                    f(fe, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: ge((c?.y || 0) + 0),
                        pixelHeight: 795,
                        pixelWidth: 636,
                        sizes: c?.width || `100vw`,
                        ...rr(h),
                      },
                      className: `framer-dclpw6`,
                      "data-framer-name": `BG Image`,
                      layoutDependency: ye,
                      layoutId: `Whs4847GC`,
                    }),
                    f(T.div, {
                      className: `framer-5bf3z3`,
                      "data-framer-name": `Service Scroll`,
                      layoutDependency: ye,
                      layoutId: `nDajAdbLq`,
                      children: f(T.div, {
                        className: `framer-ms8ll0`,
                        "data-framer-name": `2`,
                        layoutDependency: ye,
                        layoutId: `CIO2XFsRA`,
                        children: f(W, {
                          height: 734,
                          width: `min(1170px, max(min(${c?.width || `100vw`} - 30px, 1340px), 1px))`,
                          y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0,
                          ...Zn(
                            {
                              IAyFNxym5: {
                                width: `max(min(${c?.width || `100vw`} - 30px, 1340px), 1px)`,
                                y: (c?.y || 0) + 60 + 0 + 0 + 0 + 0,
                              },
                            },
                            U,
                            G
                          ),
                          children: f(re, {
                            className: `framer-4hdfe2-container`,
                            layoutDependency: ye,
                            layoutId: `EyJ8IVJSV-container`,
                            nodeId: `EyJ8IVJSV`,
                            rendersWithMotion: !0,
                            scopeId: `oZxHdCcEq`,
                            children: f(Yn, {
                              BGD8Sdm_i: R,
                              CaNLWgiqh: ce,
                              ELDp9TJM5: I,
                              height: `100%`,
                              id: `EyJ8IVJSV`,
                              layoutId: `EyJ8IVJSV`,
                              mHBz1B8Ja: N,
                              ojzyCBv8x: rr(m),
                              onBGD8Sdm_iChange: z,
                              onCaNLWgiqhChange: le,
                              onELDp9TJM5Change: L,
                              onmHBz1B8JaChange: P,
                              onVDzIS7qj4Change: ne,
                              onVWQ7lt9T2Change: V,
                              onXdCWIZVR_Change: oe,
                              style: { maxWidth: `100%`, width: `100%` },
                              variant: ir(`XLblmTDen`),
                              VDzIS7qj4: F,
                              VWQ7lt9T2: B,
                              width: `100%`,
                              XdCWIZVR_: ie,
                              ...Zn(
                                {
                                  IAyFNxym5: { variant: ir(`Z2JKCYtU6`) },
                                  l7UVYKbB6: { variant: ir(`ejBpwbohb`) },
                                },
                                U,
                                G
                              ),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-cpP83.framer-d4dzvi, .framer-cpP83 .framer-d4dzvi { display: block; }`,
          `.framer-cpP83.framer-1hsrlml { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 88px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 15px 0px 15px; position: relative; width: 1200px; }`,
          `.framer-cpP83 .framer-3228ye { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 2; }`,
          `.framer-cpP83 .framer-dclpw6 { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-cpP83 .framer-5bf3z3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1340px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-cpP83 .framer-ms8ll0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-cpP83 .framer-4hdfe2-container { flex: none; height: auto; max-width: 100%; position: relative; width: 1170px; z-index: 1; }`,
          `.framer-cpP83.framer-v-bsdpg4.framer-1hsrlml { width: 810px; }`,
          `.framer-cpP83.framer-v-hzoxv0.framer-1hsrlml { gap: 40px; padding: 60px 15px 69px 15px; width: 390px; }`,
          `.framer-cpP83.framer-v-hzoxv0 .framer-4hdfe2-container { width: 100%; }`,
        ],
        `framer-cpP83`
      )),
      (dr.displayName = `Service Card`),
      (dr.defaultProps = { height: 731, width: 1200 }),
      I(dr, {
        variant: {
          options: [`UgYR5Tsdv`, `l7UVYKbB6`, `IAyFNxym5`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: U.Enum,
        },
        vbt5Xz742: {
          __defaultAssetReference: `data:framer/asset-reference,sJ3qHg5xUuXQX7Fc0FnewXNGr6k.jpg?originalFilename=Service+Image.jpg&width=424&height=530`,
          title: `Left Image`,
          type: U.ResponsiveImage,
        },
        xNfSZUFiF: {
          __defaultAssetReference: `data:framer/asset-reference,eWa04F2j6oGTilP5VjUHFI9x3xc.jpg?originalFilename=service-1.jpg&width=636&height=795`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,eWa04F2j6oGTilP5VjUHFI9x3xc.jpg?originalFilename=service-1.jpg&width=636&height=795`,
          },
          title: `BG Image`,
          type: U.ResponsiveImage,
        },
        KdEt9rwMZ: {
          defaultValue: `Branding`,
          displayTextArea: !1,
          title: `Service Heading`,
          type: U.String,
        },
        onKdEt9rwMZChange: { changes: `KdEt9rwMZ`, type: U.ChangeHandler },
        QWmhemMv4: {
          defaultValue: `I create distinctive brand identities through strategy and visual design, helping businesses stand out, connect with audiences, and leave a impression.`,
          displayTextArea: !1,
          title: `Description`,
          type: U.String,
        },
        onQWmhemMv4Change: { changes: `QWmhemMv4`, type: U.ChangeHandler },
        c7oY_GqyG: {
          defaultValue: `Brand Strategy`,
          displayTextArea: !1,
          title: `Service 1 Pt`,
          type: U.String,
        },
        onc7oY_GqyGChange: { changes: `c7oY_GqyG`, type: U.ChangeHandler },
        KeSXg4BB3: {
          defaultValue: `Visual Identity Design`,
          displayTextArea: !1,
          title: `Service 2 Pt`,
          type: U.String,
        },
        onKeSXg4BB3Change: { changes: `KeSXg4BB3`, type: U.ChangeHandler },
        zN6LkXPzw: {
          defaultValue: `Logo & Typography`,
          displayTextArea: !1,
          title: `Service 3 Pt`,
          type: U.String,
        },
        onzN6LkXPzwChange: { changes: `zN6LkXPzw`, type: U.ChangeHandler },
        P4IDf7GB0: {
          defaultValue: `Color Palette Creation`,
          displayTextArea: !1,
          title: `Service 4 Pt`,
          type: U.String,
        },
        onP4IDf7GB0Change: { changes: `P4IDf7GB0`, type: U.ChangeHandler },
        nulvNAc6E: {
          defaultValue: `Brand Guidelines`,
          displayTextArea: !1,
          title: `Service 5 Pt`,
          type: U.String,
        },
        onnulvNAc6EChange: { changes: `nulvNAc6E`, type: U.ChangeHandler },
      }),
      B(dr, [{ explicitInter: !0, fonts: [] }, ...Qn], { supportsExplicitInterCodegen: !0 }),
      (dr.loader = { load: (e, t) => (t.locale, Promise.allSettled([oe(Yn, {}, t)])) }));
  });
function pr() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function mr(e) {
  let t = S.useRef(pr);
  return (
    S.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      gr() && pr();
      let n = t.current;
      return n(...e);
    }
  );
}
var hr,
  gr,
  _r = e(() => {
    (x(),
      (hr = S.createContext(!0)),
      (gr =
        `use` in S
          ? () => {
              try {
                return S.use(hr);
              } catch {
                return !1;
              }
            }
          : () => !1));
  });
function vr(e) {
  let {
      slots: t = [],
      startFrom: r,
      direction: s,
      effectsOptions: c,
      autoPlayControl: p,
      dragControl: m,
      widthSizing: h,
      heightSizing: g,
      alignment: v,
      gap: y,
      padding: b,
      paddingPerSide: x,
      paddingTop: S,
      paddingRight: w,
      paddingBottom: D,
      paddingLeft: O,
      itemAmount: k,
      fadeOptions: N,
      intervalControl: P,
      transitionControl: ne,
      arrowOptions: re,
      borderRadius: I,
      progressOptions: L,
      style: R,
    } = e,
    {
      effectsOpacity: z,
      effectsScale: B,
      effectsRotate: V,
      effectsPerspective: ie,
      effectsHover: ae,
      playOffscreen: oe,
    } = c,
    { fadeContent: H, overflow: se, fadeWidth: ce, fadeInset: le, fadeAlpha: U } = N,
    {
      showMouseControls: ue,
      arrowSize: W,
      arrowRadius: de,
      arrowFill: fe,
      leftArrow: pe,
      rightArrow: G,
      arrowShouldSpace: he = !0,
      arrowShouldFadeIn: ge = !1,
      arrowPosition: K,
      arrowPadding: _e,
      arrowGap: ve,
      arrowPaddingTop: ye,
      arrowPaddingRight: be,
      arrowPaddingBottom: xe,
      arrowPaddingLeft: Se,
    } = re,
    {
      showProgressDots: Ce,
      dotSize: we,
      dotsInset: Te,
      dotsRadius: Ee,
      dotsPadding: De,
      dotsGap: Oe,
      dotsFill: ke,
      dotsBackground: Ae,
      dotsActiveOpacity: je,
      dotsOpacity: Me,
      dotsBlur: Ne,
    } = L,
    Pe = x ? `${S}px ${w}px ${D}px ${O}px` : `${b}px`,
    q = me.current() === me.canvas,
    Fe = t.filter(Boolean),
    Ie = u.count(Fe);
  if (!(Ie > 0))
    return _(`section`, {
      style: Or,
      children: [
        f(`div`, { style: kr, children: `⭐️` }),
        f(`p`, { style: Ar, children: `Connect to Content` }),
        f(`p`, {
          style: jr,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let Le = o(null),
    ze = o(null),
    Be = i((e) => {
      ((Le.current = e), Le.current && nt());
    }, []),
    [J, Ve] = n({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    Y = s === `left` || s === `right`,
    He = br(),
    Ue = Y && He === `rtl` ? -1 : 1,
    [We, Ge] = n(!1),
    [Ke, qe] = n(p),
    [Je, Ye] = n(!1),
    X = J?.item !== null && J?.parent !== null && He !== null,
    Xe = Math.ceil((r + k) / Ie),
    Ze = [],
    Qe = Xe * 4;
  (q || !X) && (Qe = Xe);
  let [$e, et] = n(r + Ie);
  a(() => {
    if (!J.item || !He) return;
    let e = -1 * $e * ((J.item ?? 0) + y) * (He === `rtl` ? -1 : 1);
    lt.get() !== e && te(lt, e, ne);
  }, [$e, J.item, y, He]);
  let tt = () => {
      let e = ze.current;
      if (!e) return;
      let t = e.width,
        n = e.height,
        r = Y ? t : n,
        i = Math.max(1, k),
        a = Math.max(0, (r - y * (i - 1)) / i),
        o = Ie * (a + y),
        s = Y ? a : t,
        c = Y ? n : a,
        l = Y
          ? Math.max(document.documentElement.clientWidth || 0, C.innerWidth || 0, t)
          : Math.max(document.documentElement.clientHeight || 0, C.innerHeight || 0, n);
      Ve({ parent: r, children: o, item: a, itemWidth: s, itemHeight: c, viewportLength: l });
    },
    nt = mr(() => {
      F.read(tt, !1, !0);
    });
  (l(() => {
    nt();
  }, [Fe.length, k, y, s, b, x, S, w, D, O]),
    a(() => {
      let e = Le.current;
      if (e)
        return Re(e, ({ size: e }) => {
          ((ze.current = e), !(!e.width || !e.height) && nt());
        });
    }, []));
  let rt = q ? 0 : J?.children,
    [it, at] = n(!1),
    ot = o(null),
    st = ee(ot),
    ct = M() && st,
    lt = E(rt),
    ut = q
      ? E(0)
      : A(lt, (e) => {
          let t = rt ?? 0,
            n = e ?? 0,
            r = j(-t * Ue, -t * Ue * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    dt = j(0, Ie, $e),
    ft = (e) => {
      d(() => et((t) => t + e));
    },
    pt = (e) => {
      let t = e - j(0, Ie, $e);
      d(() => et((e) => e + t));
    },
    mt = (s === `right` || s === `bottom` ? -1 : 1) * Ue,
    ht = p && Ke && (oe || ct) && !q && Ie > 1 && !it && X;
  a(() => {
    if (!ht) return;
    let e = setTimeout(() => {
      ft(mt);
    }, P * 1e3);
    return () => clearTimeout(e);
  }, [ht, mt, P, $e]);
  let gt = () => {
      d(() => at(!0));
    },
    _t = (e, { offset: t, velocity: n }) => {
      d(() => at(!1));
      let r = Y ? t.x : t.y,
        i = Y ? n.x : n.y,
        a = r < -J.item / 2,
        o = r > J.item / 2,
        s = Math.round(Math.abs(r) / J.item),
        c = s === 0 ? 1 : s;
      i > 200 ? ft(-c * Ue) : i < -200 ? ft(c * Ue) : (a && ft(s * Ue), o && ft(-s * Ue));
    },
    vt = Math.max(0, Math.min(r ?? 0, Math.max(0, Ie - 1))),
    yt = (vt * 100) / k,
    bt = (vt * y) / k,
    xt = 0,
    St = `calc(${100 / k}% - ${y}px + ${y / k}px)`,
    Ct = Y ? g : h;
  for (let e = 0; e < Qe; e++)
    Ze = Ze.concat(
      u.map(Fe, (t, n) => {
        let r = t,
          i = Ct === `fit` ? (Y ? r.props?.height : r.props?.width) : `100%`;
        return f(
          Fr,
          {
            slideKey: e + n + `lg`,
            index: e,
            width: Y ? (k > 1 ? St : `100%`) : i,
            height: Y ? i : k > 1 ? St : `100%`,
            size: J,
            child: t,
            numChildren: Fe?.length,
            wrappedXOrY: ut,
            childCounter: xt++,
            gap: y,
            isCanvas: q,
            isInitialized: X,
            isHorizontal: Y,
            effectsOpacity: z,
            effectsScale: B,
            effectsRotate: V,
            writingDirection: He,
            rtlDirectionModifier: Ue,
            children: e + n,
          },
          e + n + `lg`
        );
      })
    );
  let wt = Y ? `to right` : `to bottom`,
    Tt = ce / 2,
    Et = 100 - ce / 2,
    Dt = `linear-gradient(${wt}, rgba(0, 0, 0, ${U}) ${Pr(le, 0, Tt)}%, rgba(0, 0, 0, 1) ${Tt}%, rgba(0, 0, 0, 1) ${Et}%, rgba(0, 0, 0, ${U}) ${100 - le}%)`,
    Ot = [],
    kt = {};
  if (Ce) {
    for (let e = 0; e < Fe?.length; e++)
      Ot.push(
        f(
          Ir,
          {
            dotStyle: { ...Rr, width: we, height: we, backgroundColor: ke },
            buttonStyle: Mr,
            selectedOpacity: je,
            opacity: Me,
            disabled: !q && !X,
            onClick: () => pt(e),
            wrappedIndex: q || !X ? vt : dt,
            total: Ie,
            index: e,
            gap: Oe,
            padding: De,
            isHorizontal: Y,
          },
          e
        )
      );
    Ne > 0 && (kt.backdropFilter = kt.WebkitBackdropFilter = `blur(${Ne}px)`);
  }
  let At =
      X && m
        ? {
            drag: Y ? `x` : `y`,
            onDragStart: gt,
            onDragEnd: _t,
            dragDirectionLock: !0,
            values: { x: lt, y: lt },
            dragMomentum: !1,
          }
        : {},
    jt = K === `top-left` || K === `top-mid` || K === `top-right`,
    Mt = K === `bottom-left` || K === `bottom-mid` || K === `bottom-right`,
    Nt = K === `top-left` || K === `bottom-left`,
    Pt = K === `top-right` || K === `bottom-right`,
    Ft = K === `top-mid` || K === `bottom-mid` || K === `auto`,
    It = pe || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
    Lt = G || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`;
  return _(`section`, {
    className: `${Sr} ${Y ? Cr : wr}`,
    style: {
      ...Dr,
      padding: Pe,
      WebkitMaskImage: H ? Dt : void 0,
      maskImage: H ? Dt : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (Ge(!0), ae || qe(!1));
    },
    onMouseLeave: () => {
      (Ge(!1), ae || qe(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), d(() => Ye(!0)));
    },
    onMouseUp: () => d(() => Ye(!1)),
    ref: ot,
    children: [
      f(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: se ? `visible` : `hidden`,
          borderRadius: I,
          userSelect: `none`,
          perspective: q ? `none` : ie,
        },
        children: f(T.ul, {
          ref: Be,
          ...At,
          style: {
            ...Dr,
            gap: y,
            placeItems: v,
            ...(q || !X
              ? {
                  transform: Y
                    ? `translateX(calc(${Er} * (${yt}% + ${bt}px)))`
                    : `translateY(calc(${Er} * (${yt}% + ${bt}px)))`,
                }
              : { x: Y ? ut : 0, y: Y ? 0 : ut }),
            flexDirection: Y ? `row` : `column`,
            transformStyle: V !== 0 && !q ? `preserve-3d` : void 0,
            cursor: (q || X) && m ? (Je ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...R,
          },
          children: Ze,
        }),
      }),
      _(`fieldset`, {
        style: { ...Nr },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          _(T.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: Y ? `row` : `column`,
              justifyContent: he ? `space-between` : `center`,
              gap: he ? `unset` : ve,
              opacity: ge || (!q && !X) ? 0 : 1,
              alignItems: `center`,
              inset: _e,
              top: he ? _e : jt ? ye : `unset`,
              left: he ? _e : Nt ? Se : Ft ? 0 : `unset`,
              right: he ? _e : Pt ? be : Ft ? 0 : `unset`,
              bottom: he ? _e : Mt ? xe : `unset`,
            },
            animate: q || X ? (ge ? { opacity: +!!We } : { opacity: 1 }) : { opacity: 0 },
            transition: ne,
            children: [
              f(T.button, {
                type: `button`,
                style: {
                  ...Mr,
                  backgroundColor: fe,
                  width: W,
                  height: W,
                  borderRadius: de,
                  rotate: Y ? 0 : 90,
                  display: ue ? `block` : `none`,
                  pointerEvents: q || X ? `auto` : `none`,
                  cursor: q || X ? `pointer` : `default`,
                },
                disabled: !(q || X),
                onClick: () => ft(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: f(`img`, {
                  decoding: `async`,
                  width: W,
                  height: W,
                  src: Y && He === `rtl` ? Lt : It,
                  alt: `Back Arrow`,
                }),
              }),
              f(T.button, {
                type: `button`,
                style: {
                  ...Mr,
                  backgroundColor: fe,
                  width: W,
                  height: W,
                  borderRadius: de,
                  rotate: Y ? 0 : 90,
                  display: ue ? `block` : `none`,
                  pointerEvents: q || X ? `auto` : `none`,
                  cursor: q || X ? `pointer` : `default`,
                },
                disabled: !(q || X),
                onClick: () => ft(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: f(`img`, {
                  decoding: `async`,
                  width: W,
                  height: W,
                  src: Y && He === `rtl` ? It : Lt,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Ot.length > 1
            ? f(T.div, {
                style: {
                  ...Lr,
                  left: Y ? `50%` : Te,
                  top: Y ? `unset` : `50%`,
                  transform: Y ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: Y ? `row` : `column`,
                  bottom: Y ? Te : `unset`,
                  borderRadius: Ee,
                  backgroundColor: Ae,
                  userSelect: `none`,
                  ...kt,
                  opacity: +!!q,
                  pointerEvents: q || X ? `auto` : `none`,
                },
                animate: { opacity: +!!X },
                transition: { duration: 0.35, ease: `easeOut` },
                children: Ot,
              })
            : null,
        ],
      }),
    ],
  });
}
function yr() {
  return C?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function br() {
  let [e, t] = n(null);
  return (
    a(
      () => (
        t(yr()),
        xr(() => {
          t(yr());
        })
      ),
      []
    ),
    e
  );
}
function xr(e) {
  return (
    Br.push(e),
    zr ||
      ((zr = new MutationObserver(() => Br.forEach((e) => e()))),
      zr.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (Br.splice(Br.indexOf(e), 1), Br.length === 0 && (zr?.disconnect(), (zr = null)));
    }
  );
}
var Sr,
  Cr,
  wr,
  Tr,
  Er,
  $,
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
  Vr = e(() => {
    (r(),
      v(),
      _e(),
      L(),
      N(),
      x(),
      _r(),
      (Sr = `framer-slideshow`),
      (Cr = `framer-slideshow-axis-x`),
      (wr = `framer-slideshow-axis-y`),
      (Tr = `--framer-dir-multiplier`),
      (Er = `var(${Tr}, -1)`),
      ($ = V(
        vr,
        [`.${Cr} { ${Tr}: -1; }`, `html[dir="rtl"] .${Cr} { ${Tr}: 1; }`, `.${wr} { ${Tr}: -1; }`],
        `framer-slideshow-component`
      )),
      ($.defaultProps = {
        direction: `left`,
        widthSizing: `fill`,
        heightSizing: `fill`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      I($, {
        slots: { type: U.Array, title: `Content`, control: { type: U.ComponentInstance } },
        direction: {
          type: U.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: $.defaultProps.direction,
        },
        autoPlayControl: { type: U.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: U.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: U.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: U.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: $.defaultProps.startFrom,
        },
        effectsOptions: {
          type: U.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: U.Number,
              title: `Opacity`,
              defaultValue: $.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: U.Number,
              title: `Scale`,
              defaultValue: $.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: U.Number,
              title: `Perspective`,
              defaultValue: $.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: U.Number,
              title: `Rotate`,
              defaultValue: $.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: U.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: $.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: U.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: $.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        widthSizing: {
          type: U.Enum,
          title: `Width`,
          options: [`fill`, `fit`],
          optionTitles: [`Fill`, `Fit`],
          defaultValue: $.defaultProps.widthSizing,
          displaySegmentedControl: !0,
          hidden: (e) => e.direction === `left` || e.direction === `right`,
        },
        heightSizing: {
          type: U.Enum,
          title: `Height`,
          options: [`fill`, `fit`],
          optionTitles: [`Fill`, `Fit`],
          defaultValue: $.defaultProps.heightSizing,
          displaySegmentedControl: !0,
          hidden: (e) => e.direction === `top` || e.direction === `bottom`,
        },
        alignment: {
          type: U.Enum,
          title: `Align`,
          hidden: (e) =>
            (e.direction === `left` || e.direction === `right` ? e.heightSizing : e.widthSizing) !==
            `fit`,
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
        itemAmount: {
          type: U.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: $.defaultProps.itemAmount,
        },
        gap: { type: U.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: U.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: U.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: U.Transition,
          defaultValue: $.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: U.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: U.Boolean, title: `Fade`, defaultValue: !1 },
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
        arrowOptions: {
          type: U.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: U.Boolean,
              title: `Show`,
              defaultValue: $.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: U.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: $.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: U.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: U.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: U.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: $.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: U.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: U.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: U.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: $.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: U.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: U.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: U.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: U.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: U.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: U.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: U.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: U.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: U.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: U.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: U.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: U.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: U.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: U.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: U.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: U.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: U.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: U.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: U.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (Dr = {
        display: `flex`,
        flexDirection: `row`,
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
      (Or = {
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
      (kr = { fontSize: 32, marginBottom: 10 }),
      (Ar = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (jr = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (Mr = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (Nr = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Pr = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Fr = m(function (e) {
        let {
            slideKey: t,
            width: n,
            height: r,
            child: i,
            size: s,
            gap: c,
            wrappedXOrY: l,
            numChildren: u,
            childCounter: d,
            isCanvas: p,
            isInitialized: m,
            effectsOpacity: h,
            effectsScale: _,
            effectsRotate: v,
            isHorizontal: y,
            index: b,
            writingDirection: x,
            rtlDirectionModifier: S,
          } = e,
          C = o(null),
          w = s?.item ?? 0,
          T = s?.parent ?? 0,
          E = (w + c) * d,
          D = (y && x === `rtl` ? [w - c, 0, -T + w - c, -T - c] : [-w, 0, T - w + c, T]).map(
            (e) => e - E * S
          ),
          ee = !p && A(l, D, y && x === `rtl` ? [v, 0, 0, -v] : [-v, 0, 0, v]),
          te = !p && A(l, D, [v, 0, 0, -v]),
          j = !p && A(l, D, [h, 1, 1, h]),
          M = !p && A(l, D, [_, 1, 1, _]),
          N = !p && A(l, D, y && x === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
          P =
            !p &&
            A(l, (e) => {
              let t = Math.min(D[1], D[2]),
                n = Math.max(D[1], D[2]);
              return e >= t && e <= n;
            });
        a(() => {
          if (!P || !m) return;
          function e(e) {
            let t = C?.current;
            t &&
              (e
                ? t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = Number(t)) : e.removeAttribute(`tabIndex`);
                  })
                : t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }),
              t.setAttribute(`aria-hidden`, String(!e)));
          }
          return (
            e(P.get()),
            P.on(`change`, (t) => {
              e(t);
            })
          );
        }, [m]);
        let F = p
            ? `visible`
            : A(
                l,
                [D[0] - s.viewportLength * S, O(D[1], D[2], 0.5), D[3] + s.viewportLength * S],
                [`hidden`, `visible`, `hidden`]
              ),
          ne = t + `child`;
        return f(k, {
          inherit: `id`,
          id: ne,
          children: f(`li`, {
            style: { display: `contents` },
            children: g(i, {
              ref: C,
              key: ne,
              style: {
                ...i.props?.style,
                flexShrink: 0,
                userSelect: `none`,
                width: n,
                height: r,
                ...(m
                  ? {
                      opacity: j,
                      scale: M,
                      originX: y ? N : 0.5,
                      originY: y ? 0.5 : N,
                      rotateY: y ? ee : 0,
                      rotateX: y ? 0 : te,
                      visibility: F,
                    }
                  : {}),
              },
              layoutId: i.props.layoutId ? i.props.layoutId + `-original-` + b : void 0,
            }),
          }),
        });
      })),
      (Ir = m(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        ...u
      }) {
        let d = i === r,
          p = s / 2,
          m = !l && r !== 0 ? p : c,
          h = !l && r !== n - 1 ? p : c,
          g = l ? (r === 0 ? c : p) : c,
          _ = l ? (r === n - 1 ? c : p) : c;
        return f(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...u,
          style: {
            ...o,
            paddingTop: m,
            paddingBottom: h,
            paddingInlineStart: g,
            paddingInlineEnd: _,
          },
          children: f(T.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: d ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (Lr = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (Rr = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (zr = null),
      (Br = []));
  }),
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r = e(() => {
    (v(),
      L(),
      N(),
      x(),
      Vr(),
      Ut(),
      (Hr = R(Z)),
      (Ur = R($)),
      (Wr = `framer-DvsZu`),
      (Gr = { lN7kH0ppT: `framer-v-bo2l3g` }),
      (Kr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Jr = ({ value: e, children: n }) => {
        let r = t(P),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(P.Provider, { value: a, children: n });
      }),
      (Yr = T.create(s)),
      (Xr = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Zr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qr = V(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: s } = pe();
          se();
          let { style: c, className: l, layoutId: u, variant: d, ...p } = Xr(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: y,
              setGestureState: x,
              setVariant: S,
              variants: C,
            } = ae({ defaultVariant: `lN7kH0ppT`, ref: r, variant: d, variantClassNames: Gr }),
            w = Zr(e, C),
            E = H(Wr);
          return f(k, {
            id: u ?? i,
            children: f(Yr, {
              animate: C,
              initial: !1,
              children: f(Jr, {
                value: Kr,
                children: f(T.div, {
                  ...p,
                  ..._,
                  className: H(E, `framer-bo2l3g`, l, h),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: w,
                  layoutId: `lN7kH0ppT`,
                  ref: r,
                  style: { ...c },
                  children: f(W, {
                    children: f(re, {
                      className: `framer-20v618-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: w,
                      layoutId: `UVQbwSDnG-container`,
                      nodeId: `UVQbwSDnG`,
                      rendersWithMotion: !0,
                      scopeId: `RLkOEN7OU`,
                      children: f($, {
                        alignment: `center`,
                        arrowOptions: {
                          arrowFill: `rgba(0, 0, 0, 0.2)`,
                          arrowGap: 10,
                          arrowPadding: 20,
                          arrowPaddingBottom: 0,
                          arrowPaddingLeft: 0,
                          arrowPaddingRight: 0,
                          arrowPaddingTop: 0,
                          arrowPosition: `auto`,
                          arrowRadius: 40,
                          arrowShouldFadeIn: !1,
                          arrowShouldSpace: !0,
                          arrowSize: 40,
                          showMouseControls: !1,
                        },
                        autoPlayControl: !0,
                        borderRadius: 0,
                        direction: `left`,
                        dragControl: !1,
                        effectsOptions: {
                          effectsHover: !0,
                          effectsOpacity: 1,
                          effectsPerspective: 1200,
                          effectsRotate: 0,
                          effectsScale: 1,
                          playOffscreen: !1,
                        },
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !1,
                          fadeInset: 0,
                          fadeWidth: 25,
                          overflow: !1,
                        },
                        gap: 10,
                        height: `100%`,
                        heightSizing: `fit`,
                        id: `UVQbwSDnG`,
                        intervalControl: 1.5,
                        itemAmount: 1,
                        layoutId: `UVQbwSDnG`,
                        padding: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingPerSide: !1,
                        paddingRight: 0,
                        paddingTop: 0,
                        progressOptions: {
                          dotsActiveOpacity: 1,
                          dotsBackground: `rgba(0, 0, 0, 0)`,
                          dotsBlur: 0,
                          dotsFill: `rgb(255, 255, 255)`,
                          dotsGap: 8,
                          dotsInset: -24,
                          dotSize: 8,
                          dotsOpacity: 0.5,
                          dotsPadding: 0,
                          dotsRadius: 50,
                          showProgressDots: !0,
                        },
                        slots: [
                          f(W, {
                            height: 263,
                            width: `359px`,
                            children: f(re, {
                              className: `framer-108duxj-container`,
                              inComponentSlot: !0,
                              layoutDependency: w,
                              layoutId: `VX4N_vME0-container`,
                              nodeId: `VX4N_vME0`,
                              rendersWithMotion: !0,
                              scopeId: `RLkOEN7OU`,
                              children: f(Z, {
                                b4a_jpvaD: `01`,
                                height: `100%`,
                                hSI8WpjYa: `Análisis y Estrategia`,
                                HwIzu6A0L: `Analizo los objetivos de negocio, el mercado y los datos clave para definir la ruta visual y estratégica idónea.`,
                                id: `VX4N_vME0`,
                                layoutId: `VX4N_vME0`,
                                pPqtNvse5: `Análisis y Estrategia`,
                                variant: qr(`CwSbBJfLF`),
                                width: `100%`,
                              }),
                            }),
                          }),
                          f(W, {
                            height: 263,
                            width: `359px`,
                            children: f(re, {
                              className: `framer-g6j307-container`,
                              inComponentSlot: !0,
                              layoutDependency: w,
                              layoutId: `iuFI92xYu-container`,
                              nodeId: `iuFI92xYu`,
                              rendersWithMotion: !0,
                              scopeId: `RLkOEN7OU`,
                              children: f(Z, {
                                b4a_jpvaD: `02`,
                                height: `100%`,
                                hSI8WpjYa: `Análisis y Estrategia`,
                                HwIzu6A0L: `Traduzco la estrategia en activos visuales potentes, interfaces web intuitivas o identidades corporativas sólidas.`,
                                id: `iuFI92xYu`,
                                layoutId: `iuFI92xYu`,
                                pPqtNvse5: `Diseño de Alto Impacto`,
                                variant: qr(`CwSbBJfLF`),
                                width: `100%`,
                              }),
                            }),
                          }),
                          f(W, {
                            height: 263,
                            width: `359px`,
                            children: f(re, {
                              className: `framer-1ymr7qh-container`,
                              inComponentSlot: !0,
                              layoutDependency: w,
                              layoutId: `KXDEBfzV2-container`,
                              nodeId: `KXDEBfzV2`,
                              rendersWithMotion: !0,
                              scopeId: `RLkOEN7OU`,
                              children: f(Z, {
                                b4a_jpvaD: `03`,
                                height: `100%`,
                                hSI8WpjYa: `Análisis y Estrategia`,
                                HwIzu6A0L: `Despliego las soluciones optimizadas para captar leads, impulsar el engagement y generar valor medible`,
                                id: `KXDEBfzV2`,
                                layoutId: `KXDEBfzV2`,
                                pPqtNvse5: `Ejecución`,
                                variant: qr(`CwSbBJfLF`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        startFrom: 0,
                        style: { height: `100%`, width: `100%` },
                        transitionControl: {
                          damping: 40,
                          delay: 0,
                          mass: 1,
                          stiffness: 200,
                          type: `spring`,
                        },
                        width: `100%`,
                        widthSizing: `fill`,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-DvsZu.framer-nsbhng, .framer-DvsZu .framer-nsbhng { display: block; }`,
          `.framer-DvsZu.framer-bo2l3g { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 356px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 360px; }`,
          `.framer-DvsZu .framer-20v618-container { aspect-ratio: 1.0169491525423728 / 1; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-DvsZu .framer-108duxj-container, .framer-DvsZu .framer-g6j307-container, .framer-DvsZu .framer-1ymr7qh-container { height: auto; position: relative; width: auto; }`,
        ],
        `framer-DvsZu`
      )),
      (Qr.displayName = `Mobile Process`),
      (Qr.defaultProps = { height: 356, width: 360 }),
      B(Qr, [{ explicitInter: !0, fonts: [] }, ...Hr, ...Ur], { supportsExplicitInterCodegen: !0 }),
      (Qr.loader = { load: (e, t) => (t.locale, Promise.allSettled([oe(Z, {}, t)])) }));
  }),
  ei,
  ti,
  ni,
  ri = e(() => {
    (L(),
      ne.loadFonts([
        `GF;Figtree-500`,
        `GF;Figtree-700`,
        `GF;Figtree-700italic`,
        `GF;Figtree-500italic`,
      ]),
      (ei = [
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
            {
              cssFamilyName: `Figtree`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Figtree`,
              url: `https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR15bwkEU4HTy.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Figtree`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Figtree`,
              url: `https://fonts.gstatic.com/s/figtree/v9/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A1EayEA25WTybO8.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Figtree`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Figtree`,
              url: `https://fonts.gstatic.com/s/figtree/v9/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A4QdyEA25WTybO8.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (ti = [
        `.framer-40jtM .framer-styles-preset-10kghzv:not(.rich-text-wrapper), .framer-40jtM .framer-styles-preset-10kghzv.rich-text-wrapper p { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.12px; --framer-line-height: 16px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (ni = `framer-40jtM`));
  });
function ii(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi = e(() => {
    (v(),
      L(),
      N(),
      x(),
      ri(),
      Le(),
      (ai = [
        `BWi1JkRsn`,
        `bNJ5EC4eu`,
        `nVLa4W5RQ`,
        `A2exH4kT3`,
        `POfI4SX1v`,
        `luiOopXeX`,
        `nLWomQhNp`,
        `VKyM0PZHa`,
        `yK4CGQhv9`,
        `YOqFJ8XCS`,
      ]),
      (oi = `framer-P1AA3`),
      (si = {
        A2exH4kT3: `framer-v-7l24zx`,
        bNJ5EC4eu: `framer-v-5jv3c`,
        BWi1JkRsn: `framer-v-zc9i30`,
        luiOopXeX: `framer-v-14afjyi`,
        nLWomQhNp: `framer-v-fl863g`,
        nVLa4W5RQ: `framer-v-jdw7qk`,
        POfI4SX1v: `framer-v-k1r0ng`,
        VKyM0PZHa: `framer-v-1ymstds`,
        yK4CGQhv9: `framer-v-17sjzp8`,
        YOqFJ8XCS: `framer-v-1ashlkd`,
      }),
      (ci = { delay: 0.01, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (li = ({ value: e, children: n }) => {
        let r = t(P),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(P.Provider, { value: a, children: n });
      }),
      (ui = {
        "Budget ( On -click)": `VKyM0PZHa`,
        "Field ( On-Click)": `luiOopXeX`,
        "Form Mail": `nVLa4W5RQ`,
        "Form Static": `BWi1JkRsn`,
        "Mail( On-Click)": `A2exH4kT3`,
        "On- Click": `bNJ5EC4eu`,
        "Project ( On- click)": `YOqFJ8XCS`,
        "Project Deatils": `yK4CGQhv9`,
        Budget: `nLWomQhNp`,
        Field: `POfI4SX1v`,
      }),
      (di = T.create(s)),
      (fi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ui[r.variant] ?? r.variant ?? `BWi1JkRsn`,
      })),
      (pi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (mi = V(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: c } = pe();
          se();
          let { style: l, className: u, layoutId: d, variant: p, ...m } = fi(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = ae({
              cycleOrder: ai,
              defaultVariant: `BWi1JkRsn`,
              ref: r,
              variant: p,
              variantClassNames: si,
            }),
            D = pi(e, E),
            { activeVariantCallback: O, delay: ee } = de(h),
            A = O(async (...e) => {
              (C({ isPressed: !1 }), w(`bNJ5EC4eu`));
            }),
            te = O(async (...e) => {
              (C({ isHovered: !1 }), w(`BWi1JkRsn`));
            }),
            j = O(async (...e) => {
              (C({ isPressed: !1 }), w(`A2exH4kT3`));
            }),
            M = O(async (...e) => {
              (C({ isHovered: !1 }), w(`nVLa4W5RQ`));
            }),
            N = O(async (...e) => {
              (C({ isPressed: !1 }), w(`luiOopXeX`));
            }),
            P = O(async (...e) => {
              (C({ isHovered: !1 }), w(`POfI4SX1v`));
            }),
            F = O(async (...e) => {
              (C({ isPressed: !1 }), w(`YOqFJ8XCS`));
            }),
            ne = O(async (...e) => {
              (C({ isHovered: !1 }), w(`yK4CGQhv9`));
            }),
            re = [ke, ni],
            I = () => ![`nLWomQhNp`, `VKyM0PZHa`].includes(h),
            L = H(oi, ...re),
            R = () => ![`luiOopXeX`, `YOqFJ8XCS`].includes(h),
            z = () => ![`POfI4SX1v`, `luiOopXeX`, `yK4CGQhv9`, `YOqFJ8XCS`].includes(h),
            B = () => !![`POfI4SX1v`, `luiOopXeX`].includes(h),
            V = () => !![`yK4CGQhv9`, `YOqFJ8XCS`].includes(h),
            ie = () => h !== `yK4CGQhv9`;
          return f(k, {
            id: d ?? i,
            children: f(di, {
              animate: E,
              initial: !1,
              children:
                I() &&
                f(li, {
                  value: ci,
                  children: _(T.label, {
                    ...m,
                    ...y,
                    className: H(L, `framer-zc9i30`, u, g),
                    "data-framer-name": `Form Static`,
                    "data-highlight": !0,
                    layoutDependency: D,
                    layoutId: `BWi1JkRsn`,
                    onTap: A,
                    ref: r,
                    style: { ...l },
                    ...ii(
                      {
                        A2exH4kT3: {
                          "data-framer-name": `Mail( On-Click)`,
                          onMouseLeave: M,
                          onTap: void 0,
                        },
                        bNJ5EC4eu: {
                          "data-framer-name": `On- Click`,
                          onMouseLeave: te,
                          onTap: void 0,
                        },
                        luiOopXeX: {
                          "data-framer-name": `Field ( On-Click)`,
                          onMouseLeave: P,
                          onTap: void 0,
                        },
                        nVLa4W5RQ: { "data-framer-name": `Form Mail`, onTap: j },
                        POfI4SX1v: { "data-framer-name": `Field`, onTap: N },
                        yK4CGQhv9: { "data-framer-name": `Project Deatils`, onTap: F },
                        YOqFJ8XCS: {
                          "data-framer-name": `Project ( On- click)`,
                          onMouseLeave: ne,
                          onTap: void 0,
                        },
                      },
                      h,
                      x
                    ),
                    children: [
                      R() &&
                        f(G, {
                          __fromCanvasComponent: !0,
                          children: f(s, {
                            children: f(T.p, {
                              className: `framer-styles-preset-12ur3uc`,
                              "data-styles-preset": `Ileaa1HU0`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64)))`,
                              },
                              children: `Nombre*`,
                            }),
                          }),
                          className: `framer-vgbenz`,
                          fonts: [`Inter`],
                          layoutDependency: D,
                          layoutId: `GxnO9JViB`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64))`,
                          },
                          variants: {
                            nVLa4W5RQ: {
                              "--extracted-1w3ko1f": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...ii(
                            {
                              A2exH4kT3: {
                                children: f(s, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-10kghzv`,
                                    "data-styles-preset": `bDNeP8HIX`,
                                    children: `Email*`,
                                  }),
                                }),
                              },
                              bNJ5EC4eu: {
                                children: f(s, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-10kghzv`,
                                    "data-styles-preset": `bDNeP8HIX`,
                                    children: `Nombre*`,
                                  }),
                                }),
                              },
                              nVLa4W5RQ: {
                                children: f(s, {
                                  children: _(T.p, {
                                    className: `framer-styles-preset-12ur3uc`,
                                    "data-styles-preset": `Ileaa1HU0`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64)))`,
                                    },
                                    children: [
                                      `Email`,
                                      f(T.span, {
                                        style: {
                                          "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44)))`,
                                        },
                                        children: `*`,
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              POfI4SX1v: {
                                children: f(s, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-12ur3uc`,
                                    "data-styles-preset": `Ileaa1HU0`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64)))`,
                                    },
                                    children: `¿En qué te puedo ayudar?`,
                                  }),
                                }),
                              },
                              yK4CGQhv9: {
                                children: f(s, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-12ur3uc`,
                                    "data-styles-preset": `Ileaa1HU0`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64)))`,
                                    },
                                    children: `Cuéntame qué tienes en mente`,
                                  }),
                                }),
                              },
                            },
                            h,
                            x
                          ),
                        }),
                      z() &&
                        f(ce, {
                          className: `framer-14tbuyt`,
                          inputName: `Name`,
                          layoutDependency: D,
                          layoutId: `I9Bskq8Us`,
                          placeholder: `Michael Scott`,
                          required: !0,
                          style: {
                            "--framer-input-border-bottom-width": `1px`,
                            "--framer-input-border-color": `var(--token-32152519-cfa7-426d-a4e2-5734eaab0f3f, rgba(255, 255, 255, 0.16))`,
                            "--framer-input-border-left-width": `0px`,
                            "--framer-input-border-right-width": `0px`,
                            "--framer-input-border-style": `solid`,
                            "--framer-input-border-top-width": `0px`,
                            "--framer-input-font-color": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                            "--framer-input-placeholder-color": `var(--token-713d2d06-f926-4978-bdcd-4b0ed3b79221, rgba(255, 255, 255, 0.3))`,
                          },
                          type: `text`,
                          variants: {
                            A2exH4kT3: {
                              "--framer-input-border-color": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                            },
                            bNJ5EC4eu: {
                              "--framer-input-border-color": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                            },
                          },
                          ...ii(
                            {
                              A2exH4kT3: { placeholder: `michael@email.com` },
                              nVLa4W5RQ: {
                                inputName: `Email`,
                                placeholder: `michael@email.com`,
                                type: `email`,
                              },
                            },
                            h,
                            x
                          ),
                        }),
                      B() &&
                        f(T.label, {
                          className: `framer-uawxgi`,
                          "data-framer-name": `Field`,
                          layoutDependency: D,
                          layoutId: `aCImn7JnT`,
                          children:
                            B() &&
                            f(ue, {
                              className: `framer-jk33ew`,
                              defaultValue: ``,
                              inputName: `You are interested in`,
                              layoutDependency: D,
                              layoutId: `NdQg0HRQv`,
                              required: !0,
                              selectOptions: [
                                { title: `Elegir Opción`, type: `option`, value: `` },
                                { title: `Empleo`, type: `option`, value: `Empleo` },
                                { title: `Marketing`, type: `option`, value: `Marketing` },
                                { title: `UX/UI`, type: `option`, value: `UX/UI` },
                                { title: `Branding`, type: `option`, value: `Branding` },
                              ],
                              style: {
                                "--framer-input-border-radius-bottom-left": `10px`,
                                "--framer-input-border-radius-bottom-right": `10px`,
                                "--framer-input-border-radius-top-left": `10px`,
                                "--framer-input-border-radius-top-right": `10px`,
                                "--framer-input-font-color": `rgba(153, 153, 153, 0)`,
                                "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                "--framer-input-invalid-text-color": `rgb(153, 153, 153)`,
                              },
                              variants: {
                                luiOopXeX: {
                                  "--framer-input-border-bottom-width": `1px`,
                                  "--framer-input-border-color": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                  "--framer-input-border-left-width": `0px`,
                                  "--framer-input-border-radius-bottom-left": void 0,
                                  "--framer-input-border-radius-bottom-right": void 0,
                                  "--framer-input-border-radius-top-left": void 0,
                                  "--framer-input-border-radius-top-right": void 0,
                                  "--framer-input-border-right-width": `0px`,
                                  "--framer-input-border-style": `solid`,
                                  "--framer-input-border-top-width": `0px`,
                                  "--framer-input-font-color": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                  "--framer-input-invalid-text-color": `var(--token-0e21e451-5984-4a7d-9294-210041b33744, rgb(153, 153, 153))`,
                                },
                                POfI4SX1v: {
                                  "--framer-input-border-bottom-width": `1px`,
                                  "--framer-input-border-color": `var(--token-32152519-cfa7-426d-a4e2-5734eaab0f3f, rgba(255, 255, 255, 0.16))`,
                                  "--framer-input-border-left-width": `0px`,
                                  "--framer-input-border-radius-bottom-left": void 0,
                                  "--framer-input-border-radius-bottom-right": void 0,
                                  "--framer-input-border-radius-top-left": void 0,
                                  "--framer-input-border-radius-top-right": void 0,
                                  "--framer-input-border-right-width": `0px`,
                                  "--framer-input-border-style": `solid`,
                                  "--framer-input-border-top-width": `0px`,
                                  "--framer-input-font-color": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                  "--framer-input-invalid-text-color": `var(--token-0e21e451-5984-4a7d-9294-210041b33744, rgb(153, 153, 153))`,
                                },
                              },
                              ...ii(
                                {
                                  luiOopXeX: { required: !1 },
                                  POfI4SX1v: {
                                    inputName: `¿En qué te puedo ayudar?`,
                                    required: !1,
                                  },
                                },
                                h,
                                x
                              ),
                            }),
                        }),
                      V() &&
                        _(T.label, {
                          className: `framer-1hohw8r`,
                          "data-framer-name": `Project details`,
                          layoutDependency: D,
                          layoutId: `btebDfwIv`,
                          children: [
                            V() &&
                              f(T.div, {
                                className: `framer-170m37h`,
                                "data-framer-name": `Text`,
                                layoutDependency: D,
                                layoutId: `Zv0ZPijeY`,
                                children:
                                  ie() &&
                                  f(G, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(T.p, {
                                        className: `framer-styles-preset-10kghzv`,
                                        "data-styles-preset": `bDNeP8HIX`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64)))`,
                                        },
                                        children: `Cuéntame qué tienes en mente`,
                                      }),
                                    }),
                                    className: `framer-197e579`,
                                    fonts: [`Inter`],
                                    layoutDependency: D,
                                    layoutId: `HzzJGH3Fx`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-0dcc97c9-1533-42ae-a4e1-d5aaadcb877c, rgba(255, 255, 255, 0.64))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                              }),
                            f(ce, {
                              className: `framer-1yd0le9`,
                              inputName: `Email`,
                              layoutDependency: D,
                              layoutId: `TlbEFSarK`,
                              placeholder: ``,
                              required: !0,
                              style: {
                                "--framer-input-border-bottom-width": `1px`,
                                "--framer-input-border-color": `var(--token-efa5b662-ebdd-4979-a600-5a3d5b77f6de, rgba(255, 255, 255, 0.15))`,
                                "--framer-input-border-left-width": `0px`,
                                "--framer-input-border-right-width": `0px`,
                                "--framer-input-border-style": `solid`,
                                "--framer-input-border-top-width": `0px`,
                                "--framer-input-font-color": `var(--token-291537f3-737c-43d1-939d-4c00dcf19a2a, rgb(255, 255, 255))`,
                                "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                "--framer-input-placeholder-color": `var(--token-713d2d06-f926-4978-bdcd-4b0ed3b79221, rgba(255, 255, 255, 0.3))`,
                              },
                              type: `textarea`,
                              variants: {
                                yK4CGQhv9: {
                                  "--framer-input-border-color": `var(--token-32152519-cfa7-426d-a4e2-5734eaab0f3f, rgba(255, 255, 255, 0.16))`,
                                },
                                YOqFJ8XCS: {
                                  "--framer-input-border-color": `var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, rgb(7, 196, 44))`,
                                },
                              },
                              ...ii(
                                {
                                  yK4CGQhv9: {
                                    placeholder: `Hola Virginia, estaría interesado en desarrollar...`,
                                  },
                                  YOqFJ8XCS: { placeholder: `Hola Virginia, ...`, required: !1 },
                                },
                                h,
                                x
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
            }),
          });
        }),
        [
          `.framer-P1AA3.framer-9s4tqt, .framer-P1AA3 .framer-9s4tqt { display: block; }`,
          `.framer-P1AA3.framer-zc9i30 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 368px; }`,
          `.framer-P1AA3 .framer-vgbenz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-P1AA3 .framer-14tbuyt { --framer-input-font-family: "Figtree"; --framer-input-font-letter-spacing: -0.18px; --framer-input-font-line-height: 28px; --framer-input-font-size: 18px; --framer-input-font-weight: 400; --framer-input-padding: 0px 0px 4px 0px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-P1AA3 .framer-uawxgi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 40px; padding: 0px; position: relative; width: 100%; }`,
          `.framer-P1AA3 .framer-jk33ew { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Figtree"; --framer-input-font-letter-spacing: -0.18px; --framer-input-font-line-height: 28px; --framer-input-font-size: 18px; --framer-input-font-weight: 400; --framer-input-padding: 0px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-P1AA3 .framer-1hohw8r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-P1AA3 .framer-170m37h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-P1AA3 .framer-197e579 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-P1AA3 .framer-1yd0le9 { --framer-input-font-family: "Figtree"; --framer-input-font-letter-spacing: -0.18px; --framer-input-font-line-height: 28px; --framer-input-font-size: 18px; --framer-input-font-weight: 400; --framer-input-padding: 0px 0px 4px 0px; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 0px; position: relative; width: 100%; }`,
          `.framer-P1AA3.framer-v-5jv3c.framer-zc9i30, .framer-P1AA3.framer-v-7l24zx.framer-zc9i30 { cursor: unset; gap: 12px; }`,
          `.framer-P1AA3.framer-v-k1r0ng .framer-uawxgi, .framer-P1AA3.framer-v-14afjyi .framer-uawxgi { min-height: unset; }`,
          `.framer-P1AA3.framer-v-k1r0ng .framer-jk33ew { --framer-input-focused-border-color: unset; --framer-input-focused-border-style: unset; --framer-input-focused-border-width: unset; --framer-input-padding: 0px 0px 16px 0px; }`,
          `.framer-P1AA3.framer-v-14afjyi.framer-zc9i30, .framer-P1AA3.framer-v-1ashlkd.framer-zc9i30 { cursor: unset; }`,
          `.framer-P1AA3.framer-v-14afjyi .framer-jk33ew { --framer-input-focused-border-color: var(--token-b755dd03-f6c6-4b4f-b40a-7409b3707a27, #07c42c); --framer-input-focused-border-width: 0px 0px 1px 0px; --framer-input-padding: 0px 0px 16px 0px; }`,
          `.framer-P1AA3.framer-v-17sjzp8 .framer-170m37h { min-height: 28px; }`,
          `.framer-P1AA3.framer-v-1ashlkd .framer-170m37h { padding: 0px 0px 12px 0px; }`,
          ...Oe,
          ...ti,
        ],
        `framer-P1AA3`
      )),
      (mi.displayName = `Form-Name`),
      (mi.defaultProps = { height: 60, width: 368 }),
      I(mi, {
        variant: {
          options: [
            `BWi1JkRsn`,
            `bNJ5EC4eu`,
            `nVLa4W5RQ`,
            `A2exH4kT3`,
            `POfI4SX1v`,
            `luiOopXeX`,
            `nLWomQhNp`,
            `VKyM0PZHa`,
            `yK4CGQhv9`,
            `YOqFJ8XCS`,
          ],
          optionTitles: [
            `Form Static`,
            `On- Click`,
            `Form Mail`,
            `Mail( On-Click)`,
            `Field`,
            `Field ( On-Click)`,
            `Budget`,
            `Budget ( On -click)`,
            `Project Deatils`,
            `Project ( On- click)`,
          ],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      B(
        mi,
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
                url: `https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_d_QF5bwkEU4HTy.woff2`,
                weight: `400`,
              },
            ],
          },
          ...z(Ce),
          ...z(ei),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function gi(e) {
  let { borderColor: t, arrowImage: r, footerSelector: i } = e,
    [s, c] = n(0),
    [l, u] = n(!1),
    d = o(null);
  return (
    a(() => {
      `scrollRestoration` in history && (history.scrollRestoration = `manual`);
    }, []),
    a(() => {
      let e = () => {
        let e = C.scrollY,
          t = document.documentElement.scrollHeight - C.innerHeight;
        if (t <= 0) return;
        let n = e / t;
        c(n * 360);
        let r = e > 80,
          a = document.querySelector(i);
        (a && a.getBoundingClientRect().top < C.innerHeight - 100 && (r = !1), u(r));
      };
      return (
        e(),
        C.addEventListener(`scroll`, e, { passive: !0 }),
        () => C.removeEventListener(`scroll`, e)
      );
    }, [i]),
    l
      ? _(`div`, {
          ref: d,
          style: _i,
          onClick: () => {
            (C.scrollTo({ top: 0, behavior: `smooth` }),
              setTimeout(() => {
                try {
                  C.history.replaceState({ ...C.history.state, scrollTop: 0 }, ``);
                } catch {}
              }, 300));
          },
          children: [
            f(`div`, {
              style: { ...vi, background: `conic-gradient(${t} ${s}deg, transparent ${s}deg)` },
            }),
            f(`div`, { style: yi, children: r && f(`img`, { src: r, style: bi, alt: `arrow` }) }),
          ],
        })
      : null
  );
}
var _i,
  vi,
  yi,
  bi,
  xi = e(() => {
    (r(),
      v(),
      x(),
      L(),
      (_i = {
        position: `fixed`,
        bottom: `80px`,
        right: `40px`,
        width: `44px`,
        height: `44px`,
        cursor: `pointer`,
        zIndex: 9999,
      }),
      (vi = {
        position: `absolute`,
        width: `44px`,
        height: `44px`,
        borderRadius: `4px`,
        WebkitMask: `linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)`,
        WebkitMaskComposite: `xor`,
        maskComposite: `exclude`,
        padding: `2px`,
        boxSizing: `border-box`,
      }),
      (yi = {
        position: `absolute`,
        top: `2px`,
        left: `2px`,
        width: `40px`,
        height: `40px`,
        background: `#000`,
        borderRadius: `2px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }),
      (bi = { width: `12px`, height: `12px`, objectFit: `contain` }),
      I(gi, {
        borderColor: { type: U.Color, title: `Border Color`, defaultValue: `#22c55e` },
        arrowImage: { type: U.Image, title: `Arrow Image` },
        footerSelector: { type: U.String, title: `Footer Selector`, defaultValue: `footer` },
      }));
  });
function Si(e) {
  let {
      text: t,
      duration: n,
      easing: r,
      fontSize: i,
      lineHeight: s,
      letterSpacing: c,
      textAlign: l,
      transitionStartIndex: u,
      delay: d,
    } = e,
    p = h(() => t.split(` `), [t]),
    m = p.length,
    g = o(null),
    { scrollYProgress: _ } = D({ target: g, offset: [`start 0.9`, `start 0.35`] });
  a(() => {
    if (typeof document > `u`) return;
    let e = document.createElement(`style`);
    return (
      e.appendChild(
        document.createTextNode(`
                @import url('../../assets/fonts/css2-a17a86');
            `)
      ),
      document.head.appendChild(e),
      () => {
        document.head.removeChild(e);
      }
    );
  }, []);
  let v = 0;
  return f(`p`, {
    ref: g,
    style: {
      position: `relative`,
      fontFamily: `'Figtree', sans-serif`,
      fontWeight: 500,
      fontSize: `${i}px`,
      color: `#FFFFFF`,
      display: `flex`,
      flexWrap: `wrap`,
      lineHeight: `${s}px`,
      letterSpacing: `${c}px`,
      textAlign: l || `left`,
      margin: 0,
    },
    children: p.map((e, t) => {
      let i = t / m,
        a = (t + 1) / m,
        o = e.length,
        s = v;
      return (
        (v += o + 1),
        f(
          wi,
          {
            word: e,
            progress: _,
            starting: i,
            ending: a,
            duration: n,
            easing: r,
            transitionStartIndex: u,
            currentCharacterIndex: s,
            delay: d,
          },
          t
        )
      );
    }),
  });
}
var Ci,
  wi,
  Ti = e(() => {
    (v(),
      L(),
      N(),
      x(),
      (Ci = ({
        char: e,
        start: t,
        end: n,
        progress: r,
        duration: i,
        easing: a,
        index: o,
        transitionStartIndex: s,
        delay: c,
      }) => {
        let l = A(r, [t, n], [`#666666`, `#FFFFFF`]),
          u = o < s ? `#FFFFFF` : `#666666`;
        return f(T.span, {
          style: { color: o < s ? u : l },
          transition: { duration: i, ease: a, delay: o * c },
          children: e,
        });
      }),
      (wi = ({
        word: e,
        progress: t,
        starting: n,
        ending: r,
        duration: i,
        easing: a,
        transitionStartIndex: o,
        currentCharacterIndex: s,
        delay: c,
      }) => {
        let l = e.split(``),
          u = e.length,
          d = (r - n) / u;
        return _(T.span, {
          children: [
            l.map((e, r) => {
              let l = n + d * r,
                u = n + d * (r + 1);
              return f(
                Ci,
                {
                  char: e,
                  start: l,
                  end: u,
                  progress: t,
                  duration: i,
                  easing: a,
                  index: s + r,
                  transitionStartIndex: o,
                  delay: c,
                },
                r
              );
            }),
            `\xA0`,
          ],
        });
      }),
      I(Si, {
        text: { title: `Text`, type: U.String, defaultValue: `Hello Text` },
        fontSize: { title: `Font Size`, type: U.Number, defaultValue: 36, min: 10, max: 100 },
        lineHeight: { title: `Line Height`, type: U.Number, defaultValue: 44, min: 10, max: 100 },
        letterSpacing: {
          title: `Letter Spacing`,
          type: U.Number,
          defaultValue: -0.8,
          min: -10,
          max: 10,
        },
        textAlign: {
          title: `Text Align`,
          type: U.Enum,
          options: [`left`, `center`, `right`],
          optionTitles: [`Left`, `Center`, `Right`],
          defaultValue: `left`,
        },
        duration: {
          title: `Duration`,
          type: U.Number,
          defaultValue: 0.3,
          min: 0.1,
          max: 3,
          step: 0.1,
        },
        delay: {
          title: `Delay Per Character`,
          type: U.Number,
          defaultValue: 0,
          min: 0,
          max: 1,
          step: 0.01,
        },
        easing: {
          title: `Easing`,
          type: U.Enum,
          options: [`easeInOut`, `easeIn`, `easeOut`, `linear`],
          optionTitles: [`Ease In Out`, `Ease In`, `Ease Out`, `Linear`],
          defaultValue: `easeInOut`,
        },
        transitionStartIndex: {
          title: `Transition Start Index`,
          type: U.Number,
          defaultValue: 22,
          min: 0,
          max: 1e3,
        },
      }));
  });
export {
  it as A,
  J as B,
  bt as C,
  st as D,
  yt as E,
  X as F,
  Ue as I,
  Ve as L,
  tt as M,
  et as N,
  at as O,
  Xe as P,
  Y as R,
  Mt as S,
  lt as T,
  fn as _,
  mi as a,
  dn as b,
  $r as c,
  dr as d,
  fr as f,
  pn as g,
  mn as h,
  xi as i,
  nt as j,
  ot as k,
  $ as l,
  Mn as m,
  Ti as n,
  hi as o,
  jn as p,
  gi as r,
  Qr as s,
  Si as t,
  Vr as u,
  hn as v,
  xt as w,
  jt as x,
  un as y,
  Be as z,
};
//# sourceMappingURL=Text_Opacity_Letters.Dpy5yNda.mjs.map
