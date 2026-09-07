# PreLoad Splash (Frontend)

Short-lived cinematic preloader before the storefront is assessed. Overlay only — **not** a maintenance gate. The app renders underneath immediately; the splash fades out when ready.

Use this file as the implementation brief in any Cursor project that needs the same pattern.

---

## Goal

- Full-screen splash on first storefront paint
- Floating image cards + brand logo + left→right progress bar
- Staged progress tied to real readiness signals (shell, fonts, images, first data prefetch)
- Cap total time so a slow network never traps the user
- Skip when it would annoy (admin, reduced motion)

---

## Architecture

```
BrowserRouter
  └─ PreLoadGate          ← mounts splash over children
       ├─ {children}      ← app renders immediately underneath
       └─ PreLoadSplash   ← fixed overlay, fades out when ready
            └─ PreLoadShowcase + logo + progress bar
```

| Piece | Responsibility |
|-------|----------------|
| `PreLoadGate` | Overlay lifecycle, skip rules, fade-out |
| `PreLoadSplash` | Visual UI only |
| `usePreLoadProgress` | Staged % + ready / timeout |
| `PreLoadShowcase` | Floating cards + marquee backdrop (preload-owned — **do not** depend on a Maintenance page) |

Mount `PreLoadGate` inside `BrowserRouter` (needs `useLocation`), typically wrapping the main app tree in `App.tsx`.

---

## Timing rules

| Constant | Default | Why |
|----------|---------|-----|
| `PRELOAD_MIN_MS` | `700` | Avoid a flash on fast networks |
| `PRELOAD_MAX_MS` | `2800` | Hard dismiss even if a stage is still pending |

Dismiss when: **min time elapsed** AND (**all stages done** OR **max timeout**).

---

## Staged progress

| Stage | Weight | Signal |
|-------|--------|--------|
| Shell | 12% | Double `requestAnimationFrame` (first React paint) |
| Fonts | 23% | `document.fonts.ready` |
| Assets | 25% | Logo + first few hero/card images (`new Image()` preload) |
| Data | 40% | Prefetch first React Query payloads (e.g. featured products; shop list if route is `/shop`) |

Progress bar width = sum of completed stage weights (0–100). Add a light shimmer while `progress < 100`.

Adapt the **Data** stage to the host project’s queries — same idea, different `queryKey` / `queryFn`.

---

## Skip rules

Skip splash (render children only) when any of:

- Path starts with `/admin` (or project-equivalent private shell)
- `prefers-reduced-motion: reduce`
- Optional: already seen this session (`sessionStorage`) if you want once-per-tab

Do **not** couple this to maintenance mode. Preload and maintenance are separate layers.

---

## UI spec

- Full-bleed black canvas (`fixed inset-0`, high z-index e.g. `z-[200]`)
- Behind chrome: floating image cards (varied size, rotate, grayscale, opacity, slow float) + optional slow marquee rows
- Foreground (bottom center): brand logo + thin progress track
- Progress fill animates left→right with width = staged `%`
- Optional uppercase “Loading” label under the bar
- Exit: fade opacity ~0.55s with an elegant ease (`cubic-bezier(0.22, 1, 0.36, 1)`)
- `role="status"` + `aria-live="polite"` + `aria-label` for a11y

### Card presets (example)

Vary per card: `width`, `grayscale`, `opacity`, position (`top`/`left`/`right`/`bottom`), `rotate`, `floatDuration`, `floatDelay`, `zIndex`. Advance slides every ~5s or keep a single layered composition.

Use project product/hero images — not stock placeholders if real assets exist.

---

## Dependencies

- `framer-motion` — overlay exit, card float, progress width, shimmer
- `@tanstack/react-query` — optional but preferred for the Data stage
- `react-router-dom` — pathname for skip + route-aware prefetch

---

## File map (suggested)

```
src/
  components/preload/
    PreLoadGate.tsx
    PreLoadSplash.tsx
    PreLoadShowcase.tsx      ← card/marquee visuals (self-contained)
    preloadConfig.ts         ← slide presets, auto-advance ms
  hooks/
    usePreLoadProgress.ts
```

Wire in `App.tsx`:

```tsx
<BrowserRouter>
  <PreLoadGate>
    {/* routes / providers that need QueryClient above the hook */}
  </PreLoadGate>
</BrowserRouter>
```

`usePreLoadProgress` needs `QueryClientProvider` **above** `PreLoadGate` if the Data stage uses React Query.

---

## Do / Don’t

**Do**

- Render the app under the splash so paint/prefetch can happen
- Cap at ~2–3s
- Honor reduced motion (skip or static cards)
- Prefetch only critical first-view assets/data

**Don’t**

- Block routing until every image on the site loads
- Reuse or require a Maintenance page/route
- Show slide dots on the splash (progress bar replaces them)
- Put long marketing copy on the splash

---

## Acceptance checks

1. Hard-refresh home → splash appears, progress moves, fades out within ~3s
2. Fast network → still visible ≥ ~700ms (no blink)
3. Slow / failing prefetch → still dismisses by max timeout
4. `/admin` → no splash
5. Reduced motion → no splash (or static, no float/shimmer)
6. `/shop` first load → shop list included in data prefetch when applicable

---

## Prompt snippet (paste into a new Cursor chat)

```
Implement a PreLoad splash from docs/PreLoad.md.

- Overlay gate (PreLoadGate) — app renders underneath; splash fades out
- Self-contained card showcase (not maintenance)
- Staged progress: shell / fonts / assets / first data prefetch
- Min ~700ms, max ~2.8s
- Skip admin + prefers-reduced-motion
- Mount inside BrowserRouter under QueryClientProvider
```
