# Floating navbar — portable reference

Copy this pattern into other projects to get the same **transparent-at-top → floating glass bar on scroll** header used on this site.

## Behavior

| State | When | Look |
|-------|------|------|
| **Top** | `scrollY ≤ 12px`, menu closed | Full-width, **transparent** header over hero |
| **Floating** | `scrollY > 12px`, menu closed | Centered **max-width** bar, `rounded-xl`, navy glass + blur + shadow, top inset (`pt-2` → `md:pt-4`) |
| **Menu open** | Mobile drawer open | Solid navy bar; floating disabled while open |

All transitions use **`duration-500 ease-out`** on the wrapper, header, logo, and nav height.

Desktop nav shows at **`xl` (1280px)+**. Below that: phone icon + animated hamburger + full-screen panel.

---

## Files to copy

| File | Role |
|------|------|
| `src/components/site/Navbar.tsx` | Main header + mobile panel |
| `src/hooks/use-scroll.ts` | `useScroll(threshold)` → boolean |
| `src/components/ui/menu-toggle-icon.tsx` | 22px bars → X animation |
| `src/components/ui/site/SiteButton.tsx` | Gold CTA (`variant="gold"`) |
| `src/lib/site-config.ts` | `site`, `primaryNav` (or your config) |
| `src/lib/utils.ts` | `cn()` helper |

Also needs **shadcn `Button`** (`src/components/ui/button.tsx`) for ghost/outline variants on nav links and Call button.

---

## CSS variables (add to global CSS)

```css
:root {
  --navy: #0f172a;
  --gold: #c8a34d;
}
```

Fonts: serif for logo/name (`font-serif`), sans for nav (`font-sans`). This repo uses Playfair + Inter.

---

## Core animation logic

```ts
const [open, setOpen] = useState(false);
const scrolled = useScroll(12);
const floating = scrolled && !open;
```

**Fixed wrapper** (centers the bar, adds top padding when floating):

```tsx
<div
  className={cn(
    "pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 transition-[padding] duration-500 ease-out sm:px-4",
    floating && "pt-2 sm:pt-3 md:pt-4",
  )}
>
```

**Header** (transparent → glass card):

```tsx
<header
  className={cn(
    "pointer-events-auto w-full border-b border-transparent transition-all duration-500 ease-out",
    floating
      ? "max-w-[min(100%,80rem)] rounded-xl border border-white/10 bg-[color:var(--navy)]/92 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl supports-[backdrop-filter]:bg-[color:var(--navy)]/78"
      : "max-w-full bg-transparent",
    open && "border-white/10 bg-[color:var(--navy)]/95 backdrop-blur-lg",
  )}
>
```

Logo shrinks slightly when floating (`h-10` → `h-9`, wordmark may hide at `lg` when floating, returns at `xl`).

---

## `use-scroll.ts` (framework-agnostic)

```ts
import { useEffect, useState } from "react";

export function useScroll(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
```

---

## Porting to another router

This repo uses **TanStack Router** `Link` with `activeProps` / `activeOptions`.

| TanStack Router | Next.js App Router | React Router |
|-----------------|-------------------|--------------|
| `<Link to="/about">` | `<Link href="/about">` | `<Link to="/about">` |
| `activeProps={{ className: "..." }}` | `usePathname()` + manual `className` | `NavLink` `className={({ isActive }) => ...}` |

Replace `primaryNav` `to` with `href` as needed. Keep the same **class names** on links for identical styling.

---

## Layout placement

Navbar is **`fixed`** — it does not consume document flow. Page content should use top padding on the first section (e.g. hero `pt-28`) so content isn’t hidden under the bar.

In this repo:

```tsx
// SiteLayout.tsx
<Navbar />
<main id="main-content" className="flex-1">
  {children}
</main>
```

---

## Mobile panel

- Fixed below header; `top` tracks header height + `safe-area-inset-top`
- `opacity-0 pointer-events-none` when closed; `animate-in fade-in zoom-in-95` when open
- Body scroll locked: `document.body.style.overflow = "hidden"` while open

---

## Breakpoints cheat sheet

| Breakpoint | Behavior |
|------------|----------|
| `< xl` | Hamburger + phone icons; desktop link row hidden |
| `≥ xl` | Full horizontal nav + Call + Book Consultation |
| `≥ 2xl` | Call button shows full phone number instead of "Call" |

---

## Optional tweaks

- **More pill-shaped bar:** change `rounded-xl` → `rounded-full` on floating header
- **Earlier float:** lower `useScroll(12)` threshold
- **Always floating:** set `const floating = true` (or `scrolled \|\| true`) — not recommended over hero

---

## Source of truth

Latest implementation: `src/components/site/Navbar.tsx` (≈200 lines). Copy that file directly when in doubt; this doc describes the contract.
