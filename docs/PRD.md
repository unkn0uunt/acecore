# Acecore Website Redesign

## Product Requirements Document

**Project:** Acecore Website Redesign  
**Application Type:** Public marketing / product website  
**Frontend:** React  
**Architecture:** Frontend + reserved backend monorepo  
**Delivery Model:** Rapid frontend sprint  
**Design Source:** Approved Figma desktop screens  
**Status:** Active Development

---

## 1. Product Overview

Acecore is a renewable energy technology company providing energy generation, storage and management solutions.

The website redesign is intended to communicate Acecore's:

- products
- energy ecosystem
- technology
- pricing
- company story
- support information
- services
- future sales offering

The initial release is primarily an informational and product-marketing website.

The frontend must be structured so that future functionality such as:

- product purchasing
- customer enquiries
- lead capture
- pricing data
- backend-managed content
- account functionality
- product availability
- sales integrations

can later be integrated without rebuilding the frontend architecture.

---

## 2. Primary Objective

Deliver a polished, responsive React implementation of the approved Acecore website design within the agreed sprint.

The website should:

1. reproduce the desktop designs accurately;
2. provide an intentional mobile experience;
3. communicate Acecore's product offering clearly;
4. drive users towards enquiries and product acquisition;
5. provide reusable frontend architecture;
6. remain lightweight;
7. be easy for another developer to connect to a backend later.

---

## 3. Non-Goals for Current Sprint

The following are outside the initial frontend scope unless explicitly added:

- customer authentication
- dashboards
- e-commerce checkout
- payment processing
- inventory
- backend APIs
- databases
- CMS implementation
- administrator portal
- order tracking
- customer account management

Frontend UI may prepare for future features, but it must not pretend these systems already exist.

---

## 4. Target Users

Primary audiences include:

### Residential Customers

Users seeking reliable alternative or backup energy solutions for homes.

### Business Customers

Businesses seeking dependable energy systems and reduced grid dependence.

### Renewable Energy Buyers

Users comparing solar, battery, energy storage and intelligent energy management products.

### Existing Customers

Users looking for support, warranty, product information or application resources.

### Potential Partners

Businesses or organisations evaluating Acecore's technology and company positioning.

---

## 5. User Experience Principles

The website should feel:

- premium
- technological
- reliable
- modern
- clean
- sustainable
- engineering-driven

The interface should avoid looking like a generic SaaS template.

Product imagery should remain a major part of the visual identity.

The dark interface and high-contrast imagery are intentional parts of the brand presentation.

---

## 6. Site Map

Initial routes:

| Route      | Page       |
| ---------- | ---------- |
| `/`        | Home       |
| `/product` | Product    |
| `/pricing` | Pricing    |
| `/about`   | About Us   |
| `/support` | Support    |
| `/contact` | Contact Us |

Potential future routes may include:

- `/services`
- `/solar`
- `/powercell`
- `/financing`
- `/warranty`
- `/terms`
- `/privacy`

These are not required unless supplied or explicitly requested.

---

## 7. Global Navigation

Desktop navigation should contain:

- Acecore logo
- Product
- Pricing
- Our services
- About us
- Contact Us CTA

"Our services" may act as a dropdown if required by the final information architecture.

Mobile navigation must use a clean responsive menu.

Requirements:

- keyboard accessible
- clear active links
- no horizontal overflow
- prominent contact CTA
- menu closes after navigation

---

## 8. Shared Footer

Footer appears across major pages.

Expected link groups include:

### Company

- About
- Terms
- Privacy

### Explore

- Products
- Solutions
- Solar panels
- The powercore
- The powercell

### Sitemap

- Homepage
- Product
- Pricing
- Our services
- About us

### Support

- Help Center
- Warranty
- Financing

### Download

- Apple Store
- Google Play Store

Footer also contains:

- Acecore logo
- privacy/trademark links
- copyright information
- social media links

Footer content should be data-driven where practical.

---

## 9. Shared Ecosystem CTA

Several pages contain a large promotional block:

> Discover the Acecore Ecosystem.

The section promotes:

- Acecore energy ecosystem
- PowerCell
- mobile application
- product acquisition
- application download

This must be implemented as a reusable section.

Mobile layout should preserve the product and phone imagery while allowing text and CTAs to remain readable.

---

## 10. Home Page

### Route

`/`

### Purpose

Introduce the Acecore ecosystem, communicate the value proposition, demonstrate product capability, and guide visitors toward product discovery or purchase.

### Primary sections

#### 10.1 Hero

Key message approximately communicates:

> Power Every Moment. Built for Every Tomorrow.

Hero contains:

- major residential/solar imagery
- primary headline
- supporting copy
- primary CTA
- secondary CTA
- supporting feature indicators

The hero must preserve the strong visual appearance of the desktop design.

Mobile should prioritise:

1. headline
2. value proposition
3. CTA
4. visual product context

#### 10.2 Company / Energy Introduction

Section introduces Acecore's intelligent energy offering.

Includes numerical metrics/statistics visible in the design.

Statistics should use reusable stat components.

#### 10.3 Lifestyle Energy Image

Large interior/residential visual.

Image presentation must retain the premium photographic feel of the design.

#### 10.4 Quick Wins / Product Benefits

Communicates key Acecore benefits through a structured sequence.

Use reusable rows/cards where appropriate.

#### 10.5 Modern Living / Product Overview

Introduces major product capabilities and ecosystem components.

Contains supporting imagery including:

- Acecore energy hardware
- mobile application

#### 10.6 PowerCell Product Focus

Large product-focused visual section.

The 5KVA messaging is a major visual element.

Product imagery should not be reduced to a minor card.

#### 10.7 Monitoring / Application

Showcases intelligent monitoring via the Acecore app.

Includes:

- phone/app imagery
- usage/performance capabilities
- monitoring messaging
- supporting features

#### 10.8 Solar / Energy Generation

Large solar-panel visual.

Supporting feature cards communicate renewable generation capabilities.

#### 10.9 Why Choose Acecore

Feature/value proposition section.

Cards should remain readable and visually consistent at tablet/mobile widths.

#### 10.10 Residential Lifestyle

Large house/product visual demonstrating Acecore in a residential setting.

#### 10.11 Global Reach / Recognition

Contains location/market indicators visible in the design.

Implementation should be data-driven if repeated items are present.

#### 10.12 FAQ

Homepage FAQ section.

Reuse shared FAQ accordion.

#### 10.13 Ecosystem CTA

Reuse shared EcosystemBanner.

#### 10.14 Footer

Reuse global Footer.

---

## 11. Product Page

### Route

`/product`

### Purpose

Present the PowerCell as Acecore's flagship energy storage product and explain its technical capabilities.

### 11.1 Product Hero

Major product-focused hero.

Includes prominent:

- `5KVA` typography
- PowerCell imagery
- value proposition
- navigation/header

Product itself should remain visually dominant.

### 11.2 Product Introduction

Introduce the Acecore PowerCell as an energy storage solution.

The copy explains combination of:

- battery technology
- intelligent energy management
- clean energy
- flexibility
- residential/business use

### 11.3 Engineering / Product Construction

Exploded technical product visual.

Section communicates:

- engineering quality
- product architecture
- internal construction
- technical features

Labels should remain readable.

On mobile, technical diagrams may require controlled scaling or horizontally safe layout rather than illegibly shrinking text.

### 11.4 Energy Usage / Whole-Home Diagram

Technical house diagram showing energy distribution and product capability.

Preserve this section as a major visual presentation.

Supporting statistics/features appear below or around the diagram.

Mobile implementation may stack supporting statistics beneath the visual.

### 11.5 Powercore Application

Application section featuring the mobile application UI.

Includes central phone visual with supporting features positioned around it on desktop.

Mobile should stack supporting descriptions around/below the phone rather than forcing desktop positioning.

### 11.6 FAQ

Product FAQ.

Reuse FAQ component.

### 11.7 Ecosystem CTA

Reuse shared EcosystemBanner.

### 11.8 Footer

Reuse global Footer.

---

## 12. Pricing Page

### Route

`/pricing`

### Purpose

Allow visitors to understand PowerCell models, pricing options and differences between models.

### 12.1 Pricing Introduction

Heading approximately:

> Choose the Right PowerCell for You.

Supporting copy should explain comparison of available PowerCell models.

### 12.2 Pricing Mode Toggle

Desktop design contains options such as:

- Solar Included
- PowerCell Only

This should function as an interactive segmented control.

Current frontend can use local state.

Future backend data may replace static pricing.

### 12.3 Pricing Cards

Current designs show product tiers including:

- PowerCell Prime
- PowerCell Prime+
- PowerCell Ultra

Cards contain:

- product name
- price
- power capacity
- battery/storage capacity
- instalment options
- CTA

Pricing data should live in:

`src/data/pricing.js`

rather than being duplicated inside card markup.

### 12.4 Model Comparison

Large specification comparison table.

Desktop should reproduce the supplied comparison layout.

Mobile must remain usable.

Preferred mobile strategy:

- preserve feature labels
- provide horizontally scrollable table where necessary

OR

- convert models into selectable comparison views

Do not compress the entire table until text becomes unreadable.

A horizontal scroll solution is acceptable for technical comparison data provided it is clearly intentional.

### 12.5 Pricing Notes

Supporting pricing disclaimers/technical notes appear beneath the comparison table.

### 12.6 FAQ

Pricing FAQ.

Reuse shared FAQ component.

### 12.7 Pricing Contact CTA

Section:

> Have Questions About Pricing?

Includes explanatory copy and Contact Us CTA.

### 12.8 Ecosystem CTA

Reuse shared EcosystemBanner.

### 12.9 Footer

Reuse global Footer.

---

## 13. About Us Page

### Route

`/about`

### Purpose

Explain Acecore's history, mission, identity and company values.

### 13.1 Story Header

Heading:

> The Acecore story

Supporting copy communicates company origin and purpose.

### 13.2 Renewable Energy Hero Image

Large solar-panel image.

Desktop image width, aspect ratio and border radius should closely match reference.

### 13.3 Company Pillars

Three items visible in the reference:

1. Innovation
2. Sustainability
3. Energy Procurement Strategy

Implement as reusable/data-driven items.

Mobile should stack these vertically.

### 13.4 Who is Acecore?

Two-column section:

- company description
- supporting image

Mobile should stack copy and image with sensible ordering.

### 13.5 Vision and Mission

Dark surface/card containing:

- Acecore brand visual
- mission/vision content

Desktop uses side-by-side content.

Mobile becomes stacked.

### 13.6 Core Values Introduction

Prominent statement:

> We're on a mission to transform renewable energy, guided by our core values.

Highlighted words retain brand accent treatment.

### 13.7 Core Values

Values currently include:

- Quality
- Innovation
- Creativity
- Family

Desktop uses large rows with headings and descriptions.

Mobile should stack heading and copy while preserving separation.

### 13.8 Ecosystem CTA

Reuse shared EcosystemBanner.

### 13.9 Footer

Reuse global Footer.

---

## 14. Support Page

### Route

`/support`

### Current Design Status

The currently supplied Support Page image appears identical to the About Us reference.

Do not treat the duplicated design as final support-page specification.

The route may be scaffolded.

Final sections must be based on:

- corrected Figma screen
- supplied support requirements
- or explicit developer instruction

Likely future responsibilities may include:

- FAQs
- warranty information
- help centre links
- technical support
- financing support
- contact escalation

These are not confirmed requirements yet.

---

## 15. Contact Page

### Route

`/contact`

### Current Design Status

The supplied Contact Us Page image currently appears identical to the About Us design.

Do not duplicate About Us as the finished Contact page.

The route may be scaffolded while awaiting correct design/content.

Expected future requirements may include:

- contact information
- contact form
- enquiry category
- customer support
- sales enquiry
- business enquiry
- location information

These remain provisional until confirmed.

---

## 16. Responsive Requirements

The project only has approved desktop layouts at this stage.

Responsive design therefore forms part of frontend implementation.

### Desktop

Desktop must remain highly faithful to Figma.

### Tablet

Layouts should progressively adapt:

- 3 columns → 2 or 1
- oversized images scale naturally
- text widths remain controlled
- navigation remains usable

### Mobile

Mobile design should be intentionally composed.

Requirements:

- single-column flow where appropriate
- no horizontal page overflow
- readable font sizes
- appropriately sized CTAs
- accessible navigation
- meaningful spacing
- strong product imagery
- correct visual hierarchy
- technical tables handled intentionally
- FAQ remains easy to interact with
- footer collapses sensibly

Mobile should prioritize communication and conversion over reproducing desktop whitespace exactly.

---

## 17. Breakpoint Validation

Pages should be manually validated approximately at:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px
- 360px

Do not design solely around one browser width.

---

## 18. Interaction Requirements

Initial interactions include:

### Navbar

- desktop navigation
- mobile menu
- possible services dropdown

### Buttons

Buttons should provide hover/focus/active states.

### FAQ

Expandable/collapsible accordion.

### Pricing

Pricing configuration toggle.

### Links

React Router navigation for internal routes.

No complex application state is currently required.

---

## 19. Content Strategy

Current approved text should match supplied designs wherever legible.

Do not replace real content with generic lorem ipsum.

Repeated content should be extracted into structured data when appropriate.

Future CMS/backend integration should be possible without rewriting the entire component hierarchy.

---

## 20. Asset Requirements

Developer/designer should provide exports where possible for:

- Acecore logo
- PowerCell renders
- phone/app renders
- solar photography
- house photography
- technical diagrams
- product exploded views
- icons
- App Store badges
- Google Play badges
- social icons

Do not use screenshots of complete Figma sections as production implementation.

---

## 21. Accessibility Requirements

Minimum:

- correct heading hierarchy
- semantic `nav`
- semantic `main`
- semantic `footer`
- descriptive image alt text
- keyboard-accessible menu
- keyboard-accessible accordion
- visible focus state
- properly labelled controls
- sufficient contrast
- buttons used for actions
- anchors used for navigation

---

## 22. Performance Requirements

The site contains numerous high-resolution visuals.

Performance should therefore be treated intentionally.

Requirements:

- optimize imagery
- lazy-load below-the-fold images
- avoid unnecessary third-party libraries
- prevent avoidable layout shift
- avoid shipping full-resolution assets unnecessarily
- minimize unnecessary JavaScript
- load fonts efficiently

---

## 23. Backend Readiness

The frontend is intentionally independent from the future backend.

Future backend may provide:

- product data
- pricing
- contact submission
- sales enquiries
- support enquiries
- CMS content
- product availability

Frontend architecture should keep these integration points replaceable.

Do not implement the backend during the frontend sprint.

---

## 24. Repository Architecture

```text
acecore/
├── frontend/
└── backend/
```

The implementation should feel like a carefully engineered reproduction of the Acecore brand experience, not an AI-generated approximation of the screenshots.

Accuracy first.

Reuse where useful.

Responsive behaviour must be intentional.

Do not overengineer.
