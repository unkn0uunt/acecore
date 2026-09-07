# Animated impact counter (Rentigram home page)

Reusable notes for the **“Our Impact”** counters on the guest home footer. There are two layers:

1. **`ImpactAnimatedStat`** — viewport-triggered count-up (0 → target)
2. **`AnimateNumber`** — digit-by-digit blur/slide as the value changes

No `framer-motion` required for this counter. Pure React + injected CSS.

---

## Where it lives in this repo

| File | Role |
|------|------|
| `src/components/ui/animated-blur-number.tsx` | Digit transition (`AnimateNumber`) |
| `src/components/guest/layout/ImpactAnimatedStat.tsx` | Scroll-into-view count-up wrapper |
| `src/components/guest/layout/Footer.tsx` | Stats config + grid usage |

---

## Behavior

1. Stat starts at `0`.
2. When ~20% of the card is visible (`IntersectionObserver`), count-up starts.
3. Value eases to `target` over **2000ms** (`easeOutCubic`).
4. Each intermediate value is rendered by `AnimateNumber`, so only **changed digits** blur/slide.
5. If `prefers-reduced-motion: reduce`, jump straight to `target` (no count-up / no digit animation).

---

## Usage

```tsx
import ImpactAnimatedStat, {
  type ImpactStatConfig,
} from "./ImpactAnimatedStat";

const STATS: ImpactStatConfig[] = [
  {
    target: 1.6,
    decimal: true,
    prefix: "$",
    suffix: "k+",
    label: "in transaction volume processed",
  },
  { target: 100, suffix: "+", label: "active guests" },
  { target: 5, label: "cities" },
];

export function ImpactGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10">
      {STATS.map((stat) => (
        <ImpactAnimatedStat key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
```

### `ImpactStatConfig`

| Field | Type | Notes |
|-------|------|--------|
| `target` | `number` | Final value |
| `label` | `string` | Caption under the number |
| `prefix?` | `string` | e.g. `"$"` |
| `suffix?` | `string` | e.g. `"k+"`, `"+"` |
| `decimal?` | `boolean` | Animate with 1 decimal place |
| `format?` | `Intl.NumberFormatOptions` | Overrides default formatting |

---

## Direct use of `AnimateNumber` only

Use this when you already have the number and only want digit transitions:

```tsx
import { AnimateNumber } from "./animated-blur-number";

<AnimateNumber
  value={1240}
  prefix="$"
  suffix="+"
  format={{ maximumFractionDigits: 0 }}
  duration={400}
  blur={14}
  className="text-[28px] font-black tabular-nums"
/>
```

### `AnimateNumber` props

| Prop | Default | Notes |
|------|---------|--------|
| `value` | required | Number to display |
| `format` | — | Passed to `Intl.NumberFormat` |
| `locale` | `"en-US"` | Format locale |
| `prefix` / `suffix` | — | Rendered before/after digits |
| `duration` | `450` | Digit transition ms |
| `blur` | `21` | Max blur px while digit moves |
| `className` | — | Applied to root |

---

## Porting to another project

### 1. Copy these two files

- `animated-blur-number.tsx` (UI primitive)
- `ImpactAnimatedStat.tsx` (count-up + a11y)

Adjust import paths. Keep `"use client"` if the target is Next.js App Router.

### 2. Dependencies

- React 18+ (uses `useSyncExternalStore`, `requestAnimationFrame`)
- No Motion / Framer dependency for this feature

### 3. Styling notes

- Impact values use grey (`#717680`) + cream section background in Rentigram.
- `AnimateNumber` injects a `<style id="animate-number-styles">` once into `document.head`.
- Digits use `font-variant-numeric: tabular-nums` so width stays stable.

### 4. Tuning knobs

In `ImpactAnimatedStat.tsx`:

```ts
const COUNT_DURATION_MS = 2000; // count-up length
```

In `AnimateNumber` usage:

```ts
duration={400} // digit swap length
blur={14}      // digit blur strength
```

Observer threshold:

```ts
{ threshold: 0.2 } // start when 20% visible
```

---

## Full source — `animated-blur-number.tsx`

```tsx
"use client";

/**
 * <AnimateNumber> - digit-by-digit transition.
 * Only digits that change blur/slide. Unchanged digits stay still.
 */

import * as React from "react";

const STYLES = `
.an-root {
  --an-spring: linear(
    0, 0.028 2.5%, 0.0995 5%, 0.198 7.5%, 0.3106 10%, 0.4272 12.5%, 0.5405 15%,
    0.6454 17.5%, 0.7387 20%, 0.819 22.5%, 0.8856 25%, 0.9391 27.5%, 0.9803 30%,
    1.0107 32.5%, 1.0317 35%, 1.045 37.5%, 1.052 40%, 1.0543 42.5%, 1.053 45%,
    1.0493 47.5%, 1.044 50%, 1.0379 52.5%, 1.0316 55%, 1.0254 57.5%, 1.0197 60%,
    1.0146 62.5%, 1.0102 65%, 1.0065 67.5%, 1.0035 70%, 1.0012 72.5%, 0.9995 75%,
    0.9984 77.5%, 0.9976 80%, 0.9972 82.5%, 0.9971 85%, 0.9971 87.5%, 0.9973 90%,
    0.9976 92.5%, 0.9979 95%, 0.9983 97.5%, 1
  );
  --an-dist: 0.55em;
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.an-slot { position: relative; display: inline-block; }
.an-layer { display: inline-block; will-change: transform, opacity, filter; }
.an-out { position: absolute; inset: 0; }
.an-in {
  animation:
    an-slide-in var(--an-dur, 450ms) var(--an-spring) both,
    an-resolve var(--an-dur, 450ms) cubic-bezier(0.22, 1, 0.36, 1) both;
}
.an-out {
  animation:
    an-slide-out var(--an-dur, 450ms) cubic-bezier(0.4, 0, 1, 1) both,
    an-dissolve var(--an-dur, 450ms) cubic-bezier(0.4, 0, 1, 1) both;
}
@keyframes an-slide-in {
  from { transform: translateY(calc(var(--an-dir, 1) * var(--an-dist))); }
  to { transform: translateY(0); }
}
@keyframes an-slide-out {
  from { transform: translateY(0); }
  to { transform: translateY(calc(var(--an-dir, 1) * var(--an-dist) * -1)); }
}
@keyframes an-resolve {
  from { opacity: 0; filter: blur(var(--an-blur, 21px)); }
  to { opacity: 1; filter: blur(0); }
}
@keyframes an-dissolve {
  from { opacity: 1; filter: blur(0); }
  to { opacity: 0; filter: blur(var(--an-blur, 21px)); }
}
@media (prefers-reduced-motion: reduce) {
  .an-in { animation: none; }
  .an-out { animation: none; display: none; }
}
.an-sr {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
}
`;

let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected || typeof document === "undefined") return;
  stylesInjected = true;
  if (document.getElementById("animate-number-styles")) return;
  const el = document.createElement("style");
  el.id = "animate-number-styles";
  el.textContent = STYLES;
  document.head.prepend(el);
}
ensureStyles();

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const ZWSP = "​";

export type AnimateNumberProps = {
  value: number;
  format?: Intl.NumberFormatOptions;
  locale?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  duration?: number;
  blur?: number;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLSpanElement>, "prefix" | "children">;

function formatValue(
  value: number,
  locale: string,
  opts?: Intl.NumberFormatOptions,
) {
  try {
    return new Intl.NumberFormat(locale, opts).format(value);
  } catch {
    return String(value);
  }
}

type CharSlotProps = {
  char: string;
  direction: number;
  durationMs: number;
  blur: number;
};

function CharSlot({ char, direction, durationMs, blur }: CharSlotProps) {
  const prev = React.useRef(char);
  const genRef = React.useRef(0);
  const [state, setState] = React.useState(() => ({
    cur: char,
    out: null as string | null,
    gen: 0,
  }));

  React.useEffect(() => {
    if (char === prev.current) return;
    genRef.current += 1;
    setState({ cur: char, out: prev.current, gen: genRef.current });
    prev.current = char;
  }, [char]);

  const animating = state.out !== null;

  const style = {
    "--an-dur": `${durationMs}ms`,
    "--an-blur": `${blur}px`,
    "--an-dir": direction,
  } as React.CSSProperties;

  return (
    <span className="an-slot" style={style} aria-hidden>
      <span
        key={`in-${state.gen}`}
        className={cn("an-layer", animating && "an-in")}
        onAnimationEnd={
          animating ? () => setState((s) => ({ ...s, out: null })) : undefined
        }
      >
        {state.cur === "" ? ZWSP : state.cur}
      </span>
      {animating ? (
        <span key={`out-${state.gen}`} className="an-layer an-out">
          {state.out === "" ? ZWSP : state.out}
        </span>
      ) : null}
    </span>
  );
}

export function AnimateNumber({
  value,
  format,
  locale = "en-US",
  prefix,
  suffix,
  duration = 450,
  blur = 21,
  className,
  ...rest
}: AnimateNumberProps) {
  ensureStyles();

  const formatted = formatValue(value, locale, format);

  const [prev, setPrev] = React.useState(value);
  const [direction, setDirection] = React.useState(1);
  if (prev !== value) {
    setDirection(value < prev ? -1 : 1);
    setPrev(value);
  }

  const chars = formatted.split("");
  const len = chars.length;

  const label = [
    typeof prefix === "string" ? prefix : "",
    formatted,
    typeof suffix === "string" ? suffix : "",
  ].join("");

  return (
    <span {...rest} className={cn("an-root", className)}>
      <span className="an-sr">{label}</span>
      {prefix != null ? <span aria-hidden>{prefix}</span> : null}
      {chars.map((ch, i) => (
        <CharSlot
          key={len - 1 - i}
          char={ch}
          direction={direction}
          durationMs={duration}
          blur={blur}
        />
      ))}
      {suffix != null ? <span aria-hidden>{suffix}</span> : null}
    </span>
  );
}

export default AnimateNumber;
```

---

## Full source — `ImpactAnimatedStat.tsx`

```tsx
"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimateNumber } from "./animated-blur-number";

export type ImpactStatConfig = {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  format?: Intl.NumberFormatOptions;
  /** When true, animates with one decimal place (e.g. 1.6k). */
  decimal?: boolean;
};

const STAT_VALUE_CLASS =
  "text-[28px] font-black leading-none text-[#717680] drop-shadow-[0_2px_0_rgba(0,0,0,0.08)] md:text-[34px]";

const COUNT_DURATION_MS = 2000;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

export default function ImpactAnimatedStat({
  stat,
}: {
  stat: ImpactStatConfig;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;

    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / COUNT_DURATION_MS, 1);
      const eased = easeOutCubic(progress);
      const raw = stat.target * eased;

      setAnimatedValue(
        stat.decimal ? Math.round(raw * 10) / 10 : Math.round(raw),
      );

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setAnimatedValue(stat.target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hasStarted, prefersReducedMotion, stat.decimal, stat.target]);

  const displayValue = !hasStarted
    ? 0
    : prefersReducedMotion
      ? stat.target
      : animatedValue;

  return (
    <div ref={ref} className="text-center">
      <AnimateNumber
        value={displayValue}
        prefix={stat.prefix}
        suffix={stat.suffix}
        format={
          stat.format ??
          (stat.decimal
            ? { minimumFractionDigits: 1, maximumFractionDigits: 1 }
            : { maximumFractionDigits: 0 })
        }
        duration={400}
        blur={14}
        className={STAT_VALUE_CLASS}
      />
      <span className="mt-2 block text-[12px] font-bold leading-snug text-[#1e1e1e] md:text-[13px]">
        {stat.label}
      </span>
    </div>
  );
}
```

---

## Rentigram sample stats (from footer)

```ts
const IMPACT_STATS = [
  { target: 1.6, decimal: true, prefix: "$", suffix: "k+", label: "in transaction volume processed" },
  { target: 1.3, decimal: true, prefix: "$", suffix: "k+", label: "paid out to hosts" },
  { target: 100, suffix: "+", label: "active guests" },
  { target: 50, suffix: "+", label: "active vehicles" },
  { target: 5, label: "cities" },
  { target: 1, label: "African country" },
  { target: 10, suffix: "+", label: "verified hosts" },
  { target: 10, label: "jobs created" },
];
```

---

## Checklist for another project

- [ ] Copy `animated-blur-number.tsx` + `ImpactAnimatedStat.tsx`
- [ ] Fix imports / `"use client"` if needed
- [ ] Define your `STATS` array
- [ ] Place in a grid / section that scrolls into view
- [ ] Restyle `STAT_VALUE_CLASS` to match your brand
- [ ] Smoke-test with reduced motion enabled
