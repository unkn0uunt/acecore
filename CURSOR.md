# Acecore Frontend — Cursor Engineering Instructions

## 1. Project Context

This repository contains the redesign of the Acecore public-facing website.

The project is being developed as a rapid frontend sprint.

Current scope is primarily a React frontend implementation based on approved desktop Figma designs.

The application must reproduce the supplied designs with very high visual accuracy while also introducing a professionally designed responsive/mobile experience.

The repository is structured as a monorepo:

```text
acecore/
├── frontend/
└── backend/
```

The `frontend` directory contains the active React application.

The `backend` directory intentionally remains empty during the frontend phase and exists as a boundary for future backend/API development.

Do not introduce backend implementation unless explicitly requested.

---

## 2. Engineering Role

Act as a senior frontend engineer working under developer direction.

Priorities, in order:

1. Visual fidelity to the supplied designs.
2. Correct responsive behaviour.
3. Reusable components.
4. Maintainable React architecture.
5. Accessibility.
6. Performance.
7. Clean readable code.
8. Fast delivery without unnecessary abstraction.

Do not overengineer this project.

Prefer the simplest implementation that is reusable, readable, responsive, and production-ready.

---

## 3. Technology

Frontend:

- React
- Vite
- React Router
- Modern JavaScript
- CSS
- Semantic HTML
- Framer Motion for animations and transitions

Do not introduce:

- Next.js
- Redux
- Zustand
- GraphQL
- backend frameworks
- database libraries
- authentication systems
- unnecessary state-management libraries
- large UI libraries

unless explicitly requested.

The frontend is currently mostly informational/static.

Local component state should be enough for:

- navigation
- mobile menus
- FAQ accordions
- pricing toggles
- interactive UI elements

---

## 4. Design Source of Truth

The supplied Figma designs/screenshots are the primary visual source of truth.

Desktop implementation should closely reproduce:

- layout
- spacing
- section height
- typography hierarchy
- image sizing
- card dimensions
- border radius
- borders
- alignment
- positioning
- background treatment
- visual hierarchy
- content density

Do not redesign desktop sections unless explicitly instructed.

Do not arbitrarily change layouts because another implementation appears simpler.

When exact measurements are unavailable, infer them consistently from the supplied design.

---

## 5. Responsive Philosophy

Only desktop designs currently exist.

Mobile and tablet layouts therefore require thoughtful adaptation.

Desktop must remain faithful to the design.

Mobile must NOT simply be a compressed desktop page.

For smaller screens:

- preserve information hierarchy
- preserve important visual impact
- reduce excessive empty space
- stack multi-column layouts appropriately
- convert large comparison layouts when required
- maintain readable text sizes
- keep CTAs prominent
- preserve product imagery
- prevent horizontal scrolling
- maintain adequate touch target sizes
- simplify navigation into a mobile menu
- avoid microscopic typography
- avoid overcrowding

Responsive layouts should look intentionally designed rather than automatically collapsed.

Primary validation widths:

- 1440px desktop
- 1280px laptop
- 1024px tablet landscape
- 768px tablet
- 430px mobile
- 390px mobile
- 360px small mobile

The application must remain usable from approximately 320px upward.

---

## 6. Layout Rules

Use a reusable `Container` component for major content alignment.

Do not independently invent different page widths for every section.

A page may contain full-width visual sections, but inner content should generally align to the shared site container.

Spacing should follow a consistent rhythm.

Prefer responsive CSS such as:

- `clamp()`
- CSS Grid
- Flexbox
- `min()`
- `max()`
- `minmax()`

Avoid excessive JavaScript-based layout logic.

Do not hardcode page positioning with absolute values when normal layout systems can reproduce the design.

Absolute positioning is acceptable for intentional visual compositions.

---

## 7. Design Tokens

Centralize repeated visual values in:

`src/styles/tokens.css`

Tokens should include, where appropriate:

- page background
- surface background
- secondary surface
- primary text
- muted text
- brand green
- accent orange
- border colour
- maximum content width
- section spacing
- common radii
- typography scales

Do not scatter repeated hex values throughout dozens of components.

The current design direction is:

- dark / near-black primary background
- white primary typography
- muted grey secondary typography
- green/teal brand accents
- occasional orange emphasis
- minimal borders
- restrained surfaces
- large energy/product imagery

Extract precise colours from supplied assets/Figma whenever available.

---

## 8. Component Philosophy

Before creating a component, determine whether it is:

1. site-wide
2. reused on multiple pages
3. unique to one page

### Site-wide

Examples:

- Navbar
- Footer
- Container
- Button
- SectionHeader
- FAQ accordion
- Ecosystem CTA/banner

These belong in shared component directories.

### Repeated page patterns

Create reusable section components when the same layout appears multiple times.

Do not duplicate identical sections across pages.

### Page-specific sections

If a section exists only once and is unlikely to be reused, keeping it within the page implementation is acceptable.

Do not create unnecessary abstraction such as a component for every paragraph or wrapper.

---

## 9. Component API Rules

Components should:

- have clear responsibilities
- use descriptive prop names
- avoid giant prop interfaces
- avoid unnecessary prop drilling
- accept `className` where useful
- favour composition when practical

Repeated content such as:

- FAQs
- navigation items
- pricing plans
- specification rows
- statistics
- footer links

should preferably come from structured data rather than repeated markup.

---

## 10. Routing

Expected public routes:

- `/`
- `/product`
- `/pricing`
- `/about`
- `/support`
- `/contact`

Use React Router.

Navigation must work without full page reloads.

Unknown routes may display a simple Not Found page.

---

## 11. Shared Site Elements

The following components appear across the design system and should be reusable where applicable.

### Navbar

Desktop:

- Acecore logo
- Product
- Pricing
- Our services
- About us
- Contact Us button

Mobile:

- logo
- menu trigger
- accessible expandable navigation
- Contact CTA available within menu

If "Our services" contains nested links, implement an accessible dropdown/menu.

### Footer

Reusable footer containing grouped links such as:

- Company
- Explore
- Sitemap
- Support
- Download

Also accommodate:

- privacy
- trademark
- copyright
- social links

Do not duplicate footer markup across pages.

### Ecosystem Banner

The large "Discover the Acecore Ecosystem" promotional banner is shared across multiple pages.

Implement once and reuse.

It should support:

- heading
- supporting copy
- CTA
- app download action
- product/app imagery

It must adapt gracefully to mobile.

### FAQ

Several screens use similar FAQ patterns.

Implement one accessible Accordion / FAQ component.

Requirements:

- keyboard accessible
- semantic buttons
- `aria-expanded`
- smooth but subtle interaction
- only required local state
- no heavy dependencies

---

## 12. Page Implementation Strategy

Pages should be assembled from sections.

Example:

```jsx
<PageLayout>
  <HeroSection />
  <IntroSection />
  <FeatureSection />
  <FAQSection />
  <EcosystemBanner />
</PageLayout>
```

---

## 13. Images and Assets

Never recreate supplied photography or product imagery using CSS if the original asset exists.

Use exported assets from Figma where available.

Store images by page/category under:

`src/assets/images/`

Use descriptive filenames.

Example:

`home-solar-house.webp`

instead of:

`image23.png`

Rules:

- preserve aspect ratio
- use `object-fit` deliberately
- specify useful alt text
- lazy-load below-the-fold imagery
- avoid massive source images when smaller optimized files are available
- prefer WebP/AVIF where practical

Do not embed complete Figma screenshots as webpage sections.

The site must be rebuilt with actual HTML/CSS/components.

---

## 14. Typography

Typography should closely follow Figma. Inter medium, bold, regular, etc.

Use supplied font files or approved web fonts when available.

Maintain clear hierarchy between:

- eyebrow labels
- H1
- H2
- H3
- body copy
- metadata
- captions

Avoid random font-size values.

Use responsive sizing where appropriate.

Text should remain readable on mobile.

---

## 15. Accessibility

Minimum requirements:

- semantic headings
- semantic navigation
- semantic buttons
- meaningful alt text
- keyboard usable navigation
- keyboard usable accordions
- visible focus states
- sufficient colour contrast
- labels for form controls
- proper link/button distinction

Do not sacrifice accessibility for pixel matching.

---

## 16. Performance

Keep the frontend lightweight.

Requirements:

- avoid unnecessary npm dependencies
- lazy-load large below-the-fold images
- avoid layout shift
- avoid unnecessarily large JavaScript bundles
- optimize images
- reuse assets
- avoid unnecessary re-renders
- use CSS for visual behaviour whenever appropriate

Animations must be subtle.

Do not introduce complex animation libraries unless specifically requested.

Framer Motion is approved for animations and transitions when needed.

---

## 17. Future Backend Integration

The frontend is currently being implemented independently from the backend.

Future backend technology may use Node.js with an HTTP framework/API layer.

Do not bind UI components directly to assumptions about a future backend.

Where future dynamic data is expected, keep a clean boundary between:

- UI
- local/mock data
- eventual API/service calls

For now, static content can live in:

`src/data/`

Do not create fake production API integrations.

---

## 18. Code Quality

Code must be:

- readable
- consistently formatted
- clearly named
- modular
- easy for another developer to continue

Avoid:

- giant files when sections can logically be separated
- premature abstraction
- duplicated components
- magic numbers everywhere
- inline CSS for normal styling
- unnecessary comments
- commented-out dead code

Comments should explain WHY something unusual exists.

Do not write comments that merely translate obvious code into English.

Bad:

```js
// Set menu open to true
setMenuOpen(true);
```

Good:

```js
// Lock page scrolling while the full-screen mobile navigation is active.
```

---

## 19. Development Behaviour

Before implementing a page:

1. Inspect the complete design.
2. Identify reusable sections.
3. Check whether a matching component already exists.
4. Identify required assets.
5. Implement semantic structure.
6. Match desktop layout.
7. Implement tablet behaviour.
8. Implement mobile behaviour.
9. Verify spacing and typography.
10. Test interactions.
11. Remove duplication.
12. Verify no horizontal overflow.

Do not immediately start coding from the first section without understanding the full screen.

---

## 20. Visual QA

Every completed page must be checked against its reference.

Check:

- header dimensions
- container alignment
- hero height
- typography
- spacing
- image crops
- card dimensions
- borders
- button size
- footer alignment
- section spacing
- mobile flow

Desktop fidelity is a key acceptance requirement.

Responsive/mobile quality is equally important even though no mobile Figma exists yet.

---

## 21. Current Design References

Approved/available reference screens currently include:

- Home
- Product
- Pricing
- About Us

Screens labelled:

- Support Page
- Contact Us Page

currently appear to duplicate the About Us reference.

Do NOT assume that duplicated About design is the intended final Support or Contact design.

Scaffold those routes if necessary, but do not invent major final page designs without developer direction or correct references.

---

## 22. Do Not Overengineer

This project has a short delivery window.

Do not create:

- enterprise architecture
- excessive hooks
- unnecessary contexts
- generic design-system frameworks
- dozens of tiny components
- premature API layers
- global state stores
- complicated animation infrastructure
- unnecessary testing infrastructure

unless the developer specifically requests them.

The objective is a polished production-quality frontend delivered quickly.

---

## 23. Developer Control

The developer has final authority over:

- visual decisions
- responsive decisions
- architecture
- dependencies
- page behaviour
- content interpretation

When a supplied design is ambiguous:

1. make the smallest reasonable assumption;
2. preserve consistency with existing pages;
3. clearly identify the assumption.

Do not silently redesign major UI.

---

## 24. Definition of Done

A page is not complete merely because it renders.

A page is complete when:

- content matches supplied reference
- desktop design closely matches Figma
- mobile layout is intentional
- tablet layout works
- navigation works
- interactive UI works
- no horizontal overflow exists
- repeated components are reused
- images are optimized reasonably
- accessibility basics are covered
- code contains no obvious duplication
- browser console contains no avoidable errors
- implementation is ready for integration with future backend work

---

## Final Standard

The implementation should feel like a carefully engineered reproduction of the Acecore brand experience, not an AI-generated approximation of the screenshots.

Accuracy first.

Reuse where useful.

Responsive behaviour must be intentional.

Do not overengineer.
# Acecore Frontend — Cursor Engineering Instructions

## 1. Project Context

This repository contains the redesign of the Acecore public-facing website.

The project is being developed as a rapid frontend sprint.

Current scope is primarily a React frontend implementation based on approved desktop Figma designs.

The application must reproduce the supplied designs with very high visual accuracy while also introducing a professionally designed responsive/mobile experience.

The repository is structured as a monorepo:

```text
acecore/
├── frontend/
└── backend/
```

The `frontend` directory contains the active React application.

The `backend` directory intentionally remains empty during the frontend phase and exists as a boundary for future backend/API development.

Do not introduce backend implementation unless explicitly requested.

---

## 2. Engineering Role

Act as a senior frontend engineer working under developer direction.

Priorities, in order:

1. Visual fidelity to the supplied designs.
2. Correct responsive behaviour.
3. Reusable components.
4. Maintainable React architecture.
5. Accessibility.
6. Performance.
7. Clean readable code.
8. Fast delivery without unnecessary abstraction.

Do not overengineer this project.

Prefer the simplest implementation that is reusable, readable, responsive, and production-ready.

---

## 3. Technology

Frontend:

- React
- Vite
- React Router
- Modern JavaScript
- CSS
- Semantic HTML
- Framer Motion for animations and transitions

Do not introduce:

- Next.js
- Redux
- Zustand
- GraphQL
- backend frameworks
- database libraries
- authentication systems
- unnecessary state-management libraries
- large UI libraries

unless explicitly requested.

The frontend is currently mostly informational/static.

Local component state should be enough for:

- navigation
- mobile menus
- FAQ accordions
- pricing toggles
- interactive UI elements

---

## 4. Design Source of Truth

The supplied Figma designs/screenshots are the primary visual source of truth.

Desktop implementation should closely reproduce:

- layout
- spacing
- section height
- typography hierarchy
- image sizing
- card dimensions
- border radius
- borders
- alignment
- positioning
- background treatment
- visual hierarchy
- content density

Do not redesign desktop sections unless explicitly instructed.

Do not arbitrarily change layouts because another implementation appears simpler.

When exact measurements are unavailable, infer them consistently from the supplied design.

---

## 5. Responsive Philosophy

Only desktop designs currently exist.

Mobile and tablet layouts therefore require thoughtful adaptation.

Desktop must remain faithful to the design.

Mobile must NOT simply be a compressed desktop page.

For smaller screens:

- preserve information hierarchy
- preserve important visual impact
- reduce excessive empty space
- stack multi-column layouts appropriately
- convert large comparison layouts when required
- maintain readable text sizes
- keep CTAs prominent
- preserve product imagery
- prevent horizontal scrolling
- maintain adequate touch target sizes
- simplify navigation into a mobile menu
- avoid microscopic typography
- avoid overcrowding

Responsive layouts should look intentionally designed rather than automatically collapsed.

Primary validation widths:

- 1440px desktop
- 1280px laptop
- 1024px tablet landscape
- 768px tablet
- 430px mobile
- 390px mobile
- 360px small mobile

The application must remain usable from approximately 320px upward.

---

## 6. Layout Rules

Use a reusable `Container` component for major content alignment.

Do not independently invent different page widths for every section.

A page may contain full-width visual sections, but inner content should generally align to the shared site container.

Spacing should follow a consistent rhythm.

Prefer responsive CSS such as:

- `clamp()`
- CSS Grid
- Flexbox
- `min()`
- `max()`
- `minmax()`

Avoid excessive JavaScript-based layout logic.

Do not hardcode page positioning with absolute values when normal layout systems can reproduce the design.

Absolute positioning is acceptable for intentional visual compositions.

---

## 7. Design Tokens

Centralize repeated visual values in:

`src/styles/tokens.css`

Tokens should include, where appropriate:

- page background
- surface background
- secondary surface
- primary text
- muted text
- brand green
- accent orange
- border colour
- maximum content width
- section spacing
- common radii
- typography scales

Do not scatter repeated hex values throughout dozens of components.

The current design direction is:

- dark / near-black primary background
- white primary typography
- muted grey secondary typography
- green/teal brand accents
- occasional orange emphasis
- minimal borders
- restrained surfaces
- large energy/product imagery

Extract precise colours from supplied assets/Figma whenever available.

---

## 8. Component Philosophy

Before creating a component, determine whether it is:

1. site-wide
2. reused on multiple pages
3. unique to one page

### Site-wide

Examples:

- Navbar
- Footer
- Container
- Button
- SectionHeader
- FAQ accordion
- Ecosystem CTA/banner

These belong in shared component directories.

### Repeated page patterns

Create reusable section components when the same layout appears multiple times.

Do not duplicate identical sections across pages.

### Page-specific sections

If a section exists only once and is unlikely to be reused, keeping it within the page implementation is acceptable.

Do not create unnecessary abstraction such as a component for every paragraph or wrapper.

---

## 9. Component API Rules

Components should:

- have clear responsibilities
- use descriptive prop names
- avoid giant prop interfaces
- avoid unnecessary prop drilling
- accept `className` where useful
- favour composition when practical

Repeated content such as:

- FAQs
- navigation items
- pricing plans
- specification rows
- statistics
- footer links

should preferably come from structured data rather than repeated markup.

---

## 10. Routing

Expected public routes:

- `/`
- `/product`
- `/pricing`
- `/about`
- `/support`
- `/contact`

Use React Router.

Navigation must work without full page reloads.

Unknown routes may display a simple Not Found page.

---

## 11. Shared Site Elements

The following components appear across the design system and should be reusable where applicable.

### Navbar

Desktop:

- Acecore logo
- Product
- Pricing
- Our services
- About us
- Contact Us button

Mobile:

- logo
- menu trigger
- accessible expandable navigation
- Contact CTA available within menu

If "Our services" contains nested links, implement an accessible dropdown/menu.

### Footer

Reusable footer containing grouped links such as:

- Company
- Explore
- Sitemap
- Support
- Download

Also accommodate:

- privacy
- trademark
- copyright
- social links

Do not duplicate footer markup across pages.

### Ecosystem Banner

The large "Discover the Acecore Ecosystem" promotional banner is shared across multiple pages.

Implement once and reuse.

It should support:

- heading
- supporting copy
- CTA
- app download action
- product/app imagery

It must adapt gracefully to mobile.

### FAQ

Several screens use similar FAQ patterns.

Implement one accessible Accordion / FAQ component.

Requirements:

- keyboard accessible
- semantic buttons
- `aria-expanded`
- smooth but subtle interaction
- only required local state
- no heavy dependencies

---

## 12. Page Implementation Strategy

Pages should be assembled from sections.

Example:

```jsx
<PageLayout>
  <HeroSection />
  <IntroSection />
  <FeatureSection />
  <FAQSection />
  <EcosystemBanner />
</PageLayout>
```

---

## 13. Images and Assets

Never recreate supplied photography or product imagery using CSS if the original asset exists.

Use exported assets from Figma where available.

Store images by page/category under:

`src/assets/images/`

Use descriptive filenames.

Example:

`home-solar-house.webp`

instead of:

`image23.png`

Rules:

- preserve aspect ratio
- use `object-fit` deliberately
- specify useful alt text
- lazy-load below-the-fold imagery
- avoid massive source images when smaller optimized files are available
- prefer WebP/AVIF where practical

Do not embed complete Figma screenshots as webpage sections.

The site must be rebuilt with actual HTML/CSS/components.

---

## 14. Typography

Typography should closely follow Figma. Inter medium, bold, regular, etc.

Use supplied font files or approved web fonts when available.

Maintain clear hierarchy between:

- eyebrow labels
- H1
- H2
- H3
- body copy
- metadata
- captions

Avoid random font-size values.

Use responsive sizing where appropriate.

Text should remain readable on mobile.

---

## 15. Accessibility

Minimum requirements:

- semantic headings
- semantic navigation
- semantic buttons
- meaningful alt text
- keyboard usable navigation
- keyboard usable accordions
- visible focus states
- sufficient colour contrast
- labels for form controls
- proper link/button distinction

Do not sacrifice accessibility for pixel matching.

---

## 16. Performance

Keep the frontend lightweight.

Requirements:

- avoid unnecessary npm dependencies
- lazy-load large below-the-fold images
- avoid layout shift
- avoid unnecessarily large JavaScript bundles
- optimize images
- reuse assets
- avoid unnecessary re-renders
- use CSS for visual behaviour whenever appropriate

Animations must be subtle.

Do not introduce complex animation libraries unless specifically requested.

Framer Motion is approved for animations and transitions when needed.

---

## 17. Future Backend Integration

The frontend is currently being implemented independently from the backend.

Future backend technology may use Node.js with an HTTP framework/API layer.

Do not bind UI components directly to assumptions about a future backend.

Where future dynamic data is expected, keep a clean boundary between:

- UI
- local/mock data
- eventual API/service calls

For now, static content can live in:

`src/data/`

Do not create fake production API integrations.

---

## 18. Code Quality

Code must be:

- readable
- consistently formatted
- clearly named
- modular
- easy for another developer to continue

Avoid:

- giant files when sections can logically be separated
- premature abstraction
- duplicated components
- magic numbers everywhere
- inline CSS for normal styling
- unnecessary comments
- commented-out dead code

Comments should explain WHY something unusual exists.

Do not write comments that merely translate obvious code into English.

Bad:

```js
// Set menu open to true
setMenuOpen(true);
```

Good:

```js
// Lock page scrolling while the full-screen mobile navigation is active.
```

---

## 19. Development Behaviour

Before implementing a page:

1. Inspect the complete design.
2. Identify reusable sections.
3. Check whether a matching component already exists.
4. Identify required assets.
5. Implement semantic structure.
6. Match desktop layout.
7. Implement tablet behaviour.
8. Implement mobile behaviour.
9. Verify spacing and typography.
10. Test interactions.
11. Remove duplication.
12. Verify no horizontal overflow.

Do not immediately start coding from the first section without understanding the full screen.

---

## 20. Visual QA

Every completed page must be checked against its reference.

Check:

- header dimensions
- container alignment
- hero height
- typography
- spacing
- image crops
- card dimensions
- borders
- button size
- footer alignment
- section spacing
- mobile flow

Desktop fidelity is a key acceptance requirement.

Responsive/mobile quality is equally important even though no mobile Figma exists yet.

---

## 21. Current Design References

Approved/available reference screens currently include:

- Home
- Product
- Pricing
- About Us

Screens labelled:

- Support Page
- Contact Us Page

currently appear to duplicate the About Us reference.

Do NOT assume that duplicated About design is the intended final Support or Contact design.

Scaffold those routes if necessary, but do not invent major final page designs without developer direction or correct references.

---

## 22. Do Not Overengineer

This project has a short delivery window.

Do not create:

- enterprise architecture
- excessive hooks
- unnecessary contexts
- generic design-system frameworks
- dozens of tiny components
- premature API layers
- global state stores
- complicated animation infrastructure
- unnecessary testing infrastructure

unless the developer specifically requests them.

The objective is a polished production-quality frontend delivered quickly.

---

## 23. Developer Control

The developer has final authority over:

- visual decisions
- responsive decisions
- architecture
- dependencies
- page behaviour
- content interpretation

When a supplied design is ambiguous:

1. make the smallest reasonable assumption;
2. preserve consistency with existing pages;
3. clearly identify the assumption.

Do not silently redesign major UI.

---

## 24. Definition of Done

A page is not complete merely because it renders.

A page is complete when:

- content matches supplied reference
- desktop design closely matches Figma
- mobile layout is intentional
- tablet layout works
- navigation works
- interactive UI works
- no horizontal overflow exists
- repeated components are reused
- images are optimized reasonably
- accessibility basics are covered
- code contains no obvious duplication
- browser console contains no avoidable errors
- implementation is ready for integration with future backend work

---

## Final Standard

The implementation should feel like a carefully engineered reproduction of the Acecore brand experience, not an AI-generated approximation of the screenshots.

Accuracy first.

Reuse where useful.

Responsive behaviour must be intentional.

Do not overengineer.



# FIGMA IMPLEMENTATION CONTRACT

This project is a Figma-to-React implementation.

The supplied Figma designs are the visual source of truth.

The goal is not to create a similar design.
The goal is to reproduce the supplied desktop design as accurately as possible while creating a deliberate, production-quality responsive mobile interpretation.

---

## PRIORITY ORDER

When implementing a section, prioritize:

1. Layout geometry
2. Container dimensions
3. Section height
4. Asset scale
5. Asset positioning
6. Typography
7. Spacing
8. Borders / radii
9. Colors / gradients
10. Responsive behavior
11. Micro-interactions

Do not focus on tiny font differences while the geometry is still incorrect.

---

# DESKTOP SOURCE OF TRUTH

The desktop Figma is authoritative.

For every desktop section:

- reproduce the Figma hierarchy
- reproduce the section width
- reproduce the section height
- reproduce container width
- reproduce alignment
- reproduce spacing
- reproduce image scale
- reproduce image cropping
- reproduce visual overlap
- reproduce typography
- reproduce border radius
- reproduce colors
- reproduce gradients
- reproduce separators
- reproduce positioning

Do not redesign or reinterpret the desktop layout.

If the Figma contains overlapping artwork, do not force it into flexbox or grid.

Use absolute positioning when the design clearly requires independent visual layers.

---

# BEFORE CODING ANY SECTION

Before changing code:

1. Inspect the supplied Figma reference.
2. Inspect all supplied assets.
3. Inspect intrinsic image dimensions and aspect ratios.
4. Inspect existing reusable components.
5. Inspect existing design tokens.
6. Identify the layout model:
   - normal document flow
   - flex
   - grid
   - layered composition
   - absolute-positioned decorative artwork
7. Identify desktop measurements.
8. Identify which values can be fluid and which must remain fixed.

Do not start by writing JSX immediately.

First understand the geometry.

---

# DESKTOP IMPLEMENTATION WIDTH

Use the Figma frame width as the main calibration viewport.

Primary desktop validation viewport:

1440px wide

Also verify:

1280px
1536px
1920px

The layout should preserve the Figma proportions rather than simply stretch horizontally.

Use a shared max-width container where the Figma indicates constrained content.

---

# MOBILE STRATEGY

No mobile Figma exists.

Therefore mobile should NOT be a miniature desktop layout.

Build a deliberate mobile interpretation based on the desktop design.

Primary mobile validation viewport:

390px wide

Also verify:

360px
375px
414px
430px

Responsive order should preserve:

- content hierarchy
- branding
- readability
- calls to action
- important product imagery
- visual intent

Do not preserve desktop absolute coordinates on mobile.

---

# BREAKPOINT STRATEGY

Prefer approximately:

mobile:
< 640px

tablet:
640px – 1023px

desktop:
>= 1024px

Do not create many arbitrary breakpoint hacks.

Use:

clamp()
min()
max()
percentage sizing
max-width
aspect-ratio

where appropriate.

---

# RESPONSIVE RULES

Desktop:
match Figma as closely as possible.

Tablet:
preserve desktop visual intent while reducing scale.

Mobile:
recompose layout vertically when required.

Examples:

desktop:
text + product artwork horizontally

mobile:
text
buttons
product artwork

desktop:
4-column footer

mobile:
stacked or accordion-based footer

desktop:
wide comparison table

mobile:
horizontal scroll or mobile-specific comparison cards

Choose the responsive solution based on usability, not blind shrinking.

---

# IMAGE RULES

Never distort assets.

Always preserve intrinsic aspect ratio.

Use:

object-fit: contain

or:

object-fit: cover

depending on the Figma.

If Figma intentionally crops artwork:

- use overflow: hidden
- allow images to exceed the section boundary
- position them deliberately

Do not resize images merely to make flexbox easier.

---

# TYPOGRAPHY RULES

Match:

- font family
- weight
- font size
- line-height
- letter spacing
- text width
- line wrapping

Heading wrapping is part of the design.

Do not allow a heading to wrap differently from Figma on the target desktop viewport unless technically unavoidable.

Use clamp() where useful for responsive typography.

---

# SPACING RULES

Do not guess every margin independently.

Identify repeated spacing values and convert them into consistent tokens.

Examples:

--space-xs
--space-sm
--space-md
--space-lg
--space-xl
--section-spacing

However, visual fidelity takes priority over forcing every Figma value into a generic token.

---

# COMPONENT RULES

Reuse components when they are genuinely repeated.

Likely reusable components include:

Header
Footer
Button
SectionHeading
FAQAccordion
EcosystemCTA
ProductCard
FeatureCard
PageIntro

Do not over-componentize tiny pieces used only once.

Do not create abstractions that slow down the sprint.

---

# CSS RULE

Use the existing styling approach.

Do not introduce another UI framework.

Do not add dependencies simply for layout.

Prefer clean CSS / CSS modules / existing project styling.

---

# IMPLEMENTATION SAFETY

When implementing one section:

DO NOT modify unrelated sections.

DO NOT change global styles unless necessary.

DO NOT refactor approved components unless explicitly requested.

If a component has been marked:

VISUALLY APPROVED

treat it as locked.

---

# VISUAL APPROVAL WORKFLOW

Every section goes through:

IMPLEMENT
→ COMPARE
→ CALIBRATE
→ APPROVE
→ LOCK

Do not treat the first implementation as final.

Calibration should normally adjust:

width
height
top
right
bottom
left
gap
padding
margin
font-size
line-height

before rewriting component architecture.

---

# DEFINITION OF DONE

A desktop section is complete only when:

- overall silhouette matches Figma
- vertical height matches
- content starts and ends in the correct region
- images have correct visual scale
- overlaps match
- text wraps similarly
- padding matches
- section transitions match
- no horizontal overflow exists
- responsive behavior is stable

A mobile section is complete only when:

- hierarchy remains clear
- text is readable
- tap targets are usable
- important imagery remains visible
- no horizontal overflow exists
- spacing remains intentional
- layout works from 360px to 430px