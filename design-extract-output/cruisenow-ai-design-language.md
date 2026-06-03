# Design Language: Cruise AI | AI-Powered Medical Scribe & Coding Solution for Clinicians

> Extracted from `https://cruisenow.ai` on June 3, 2026
> 1327 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#2251f9` | rgb(34, 81, 249) | hsl(227, 95%, 55%) | 24 |
| Secondary | `#1e1e2e` | rgb(30, 30, 46) | hsl(240, 21%, 15%) | 158 |
| Accent | `#518bff` | rgb(81, 139, 255) | hsl(220, 100%, 66%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 2225 |
| `#f4f5f7` | hsl(220, 16%, 96%) | 70 |
| `#ffffff` | hsl(0, 0%, 100%) | 69 |
| `#4d4f5c` | hsl(232, 9%, 33%) | 24 |
| `#2b2e3b` | hsl(229, 16%, 20%) | 15 |

### Background Colors

Used on large-area elements: `#1e1e2e`, `#f4f5f7`, `#ffffff`, `#2251f9`, `#2e90fa`, `#9d76ed`, `#030301`

### Text Colors

Text color palette: `#000000`, `#0000ee`, `#f4f5f7`, `#eeeeee`, `#2251f9`, `#1e1e2e`, `#0f1728`, `#2b2e3b`, `#1d2838`, `#ffffff`

### Gradients

```css
background-image: linear-gradient(26.565deg, rgb(150, 172, 194) 0%, rgb(167, 190, 213) 100%);
```

```css
background-image: linear-gradient(26.565deg, rgb(251, 252, 252) 0%, rgb(211, 223, 237) 100%);
```

```css
background-image: linear-gradient(26.565deg, rgb(29, 40, 56) 0%, rgb(52, 64, 83) 100%);
```

```css
background-image: linear-gradient(161.93deg, rgb(84, 109, 228) 0%, rgb(48, 59, 118) 39.5%, rgb(30, 34, 64) 77.5%);
```

```css
background-image: linear-gradient(274deg, rgb(0, 217, 255) 0%, rgb(255, 255, 255) 100%);
```

```css
background-image: linear-gradient(6825deg, rgb(249, 254, 255) 0%, rgb(0, 217, 255) 100%);
```

```css
background-image: linear-gradient(274deg, rgb(255, 168, 0) 0%, rgb(255, 255, 255) 100%);
```

```css
background-image: linear-gradient(6825deg, rgb(249, 254, 255) 0%, rgb(255, 168, 0) 100%);
```

```css
background-image: linear-gradient(180deg, rgb(244, 245, 247) 0%, rgb(244, 245, 247) 100%);
```

```css
background-image: linear-gradient(180deg, rgb(236, 239, 242) 0%, rgb(212, 219, 226) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 2225 |
| `#0000ee` | text, border | 160 |
| `#1e1e2e` | background, text, border | 158 |
| `#f4f5f7` | text, border, background | 70 |
| `#ffffff` | background, text, border | 69 |
| `#2251f9` | background, text, border | 24 |
| `#4d4f5c` | text, border | 24 |
| `#2b2e3b` | background, text, border | 15 |
| `#0f1728` | text, border | 6 |
| `#2e90fa` | background | 2 |
| `#9d76ed` | background | 1 |
| `#edaafc` | background | 1 |
| `#518bff` | background | 1 |

## Typography

### Font Families

- **TT Interfaces Medium** — used for all (47 elements)
- **Times** — used for body (29 elements)
- **TT Interfaces Regular** — used for all (27 elements)
- **Cirka Variable** — used for all (19 elements)
- **TT Interfaces** — used for all (13 elements)
- **Cirka Bold** — used for body (4 elements)
- **Inter** — used for all (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 200px | 12.5rem | 300 | 200px | -5.5px | div, span |
| 72px | 4.5rem | 400 | 86.4px | -2.6px | h1, p |
| 64px | 4rem | 400 | 76.8px | -3px | p, span |
| 40px | 2.5rem | 400 | 48px | -2px | p, span |
| 24px | 1.5rem | 400 | 36px | -0.5px | h2, h4, span, p |
| 20px | 1.25rem | 400 | 20px | -0.4px | p |
| 16px | 1rem | 400 | normal | normal | html, head, meta, title |
| 14px | 0.875rem | 500 | 20px | normal | p |
| 12px | 0.75rem | 400 | normal | normal | body, script, div, style |
| 10px | 0.625rem | 400 | 16px | normal | p |

### Heading Scale

```css
h1 { font-size: 72px; font-weight: 400; line-height: 86.4px; }
h2 { font-size: 24px; font-weight: 400; line-height: 36px; }
```

### Body Text

```css
body { font-size: 12px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (1316x), `500` (6x), `300` (4x), `600` (1x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-4 | 4px | 0.25rem |
| spacing-27 | 27px | 1.6875rem |
| spacing-32 | 32px | 2rem |
| spacing-36 | 36px | 2.25rem |
| spacing-46 | 46px | 2.875rem |
| spacing-50 | 50px | 3.125rem |
| spacing-64 | 64px | 4rem |
| spacing-72 | 72px | 4.5rem |
| spacing-80 | 80px | 5rem |
| spacing-87 | 87px | 5.4375rem |
| spacing-120 | 120px | 7.5rem |
| spacing-140 | 140px | 8.75rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 4px | 1 |
| md | 8px | 16 |
| lg | 16px | 14 |
| xl | 24px | 1 |
| full | 40px | 2 |
| full | 100px | 23 |
| full | 200px | 44 |

## Box Shadows

**xs** — blur: 2px
```css
box-shadow: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;
```

## CSS Custom Properties

### Other

```css
--ticker-offset: 0px;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| md | 809px | max-width |
| md | 810px | min-width |
| 1199px | 1199px | max-width |
| 1200px | 1200px | min-width |
| 1439px | 1439px | max-width |
| 1440px | 1440px | min-width |
| 1699px | 1699px | max-width |

## Transitions & Animations

### Common Transitions

```css
transition: all;
```

### Keyframe Animations

**Typewriter-cursor**
```css
@keyframes Typewriter-cursor {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
```

**Typewriter-cursor**
```css
@keyframes Typewriter-cursor {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
```

**__framer-loading-spin**
```css
@keyframes __framer-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (2 instances)

```css
.button {
  background-color: rgb(30, 30, 46);
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 40px;
}
```

### Cards (3 instances)

```css
.card {
  background-color: rgb(244, 245, 247);
  border-radius: 8px;
  box-shadow: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;
  padding-top: 6px;
  padding-right: 10px;
}
```

### Links (28 instances)

```css
.link {
  color: rgb(0, 0, 238);
  font-size: 12px;
  font-weight: 400;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgb(30, 30, 46);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 40px;
  border: 0px none rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

## Layout System

**0 grid containers** and **247 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 0px |
| 80% | 0px |
| 1700px | 0px |
| 60% | 0px |

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 174x |
| row/nowrap | 73x |

**Gap values:** `10px`, `12px`, `16px`, `24px`, `27px`, `29px`, `32px`, `36px`, `46px`, `4px`, `50px`, `64px`, `6px`, `72px`, `80px`, `87px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 80/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance

**Issues:**
- 7 font families — consider limiting to 2 (heading + body)
- 13 !important rules — prefer specificity over overrides
- 59% of CSS is unused — consider purging
- 2717 duplicate CSS declarations

## Gradients

**10 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 26.565deg | 2 | brand |
| linear | 26.565deg | 2 | brand |
| linear | 26.565deg | 2 | brand |
| linear | 161.93deg | 3 | bold |
| linear | 274deg | 2 | brand |
| linear | 6825deg | 2 | brand |
| linear | 274deg | 2 | brand |
| linear | 6825deg | 2 | brand |
| linear | 180deg | 2 | brand |
| linear | 180deg | 2 | brand |

```css
background: linear-gradient(26.565deg, rgb(150, 172, 194) 0%, rgb(167, 190, 213) 100%);
background: linear-gradient(26.565deg, rgb(251, 252, 252) 0%, rgb(211, 223, 237) 100%);
background: linear-gradient(26.565deg, rgb(29, 40, 56) 0%, rgb(52, 64, 83) 100%);
background: linear-gradient(161.93deg, rgb(84, 109, 228) 0%, rgb(48, 59, 118) 39.5%, rgb(30, 34, 64) 77.5%);
background: linear-gradient(274deg, rgb(0, 217, 255) 0%, rgb(255, 255, 255) 100%);
```

## Z-Index Map

**4 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483647,2147483647 | iframe.s.t.a.t.u.s._.h.i.d.d.e.n |
| sticky | 10,10 | div.f.r.a.m.e.r.-.2.9.f.u.f.s.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.1.x.m.f.p.6.4 |
| base | 0,1 | div, section.f.r.a.m.e.r.-.e.0.0.6.b.9, div.f.r.a.m.e.r.-.1.v.o.a.q.8.0 |

**Issues:**
- [object Object]

## SVG Icons

**36 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 15 |
| sm | 3 |
| xl | 18 |

**Icon colors:** `rgb(0, 0, 0)`, `rgb(30, 30, 46)`, `white`, `#0046FF`, `url(#svg-1511399164_2875_paint0_linear_726_1043)`, `url(#svg-1511399164_2875_paint1_linear_726_1043)`, `url(#svg-1511399164_2875_paint2_linear_726_1043)`, `url(#svg-1511399164_2875_paint3_linear_726_1043)`, `url(#svg-1511399164_2875_paint4_linear_726_1043)`, `url(#svg-1511399164_2875_paint5_linear_726_1043)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Fragment Mono | cdn | 400 | normal |
| Cirka Variable | self-hosted | 400, normal | normal |
| TT Interfaces Regular | self-hosted | 400, normal | normal |
| TT Interfaces Medium | self-hosted | 400, normal | normal |
| TT Interfaces DemiBold | self-hosted | 400, normal | normal |
| Cirka Bold | self-hosted | 400, normal | normal |
| Inter | self-hosted | 400, 500, 600, 700, 900 | normal, italic |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 38 | objectFit: fill, borderRadius: 0px, shape: square |
| avatar | 11 | objectFit: fill, borderRadius: 200px, shape: circular |
| general | 7 | objectFit: contain, borderRadius: 0px, shape: square |
| hero | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (30x), 4.17:1 (7x), 3.26:1 (7x), 16:9 (4x), 3.98:1 (3x), 4.95:1 (3x), 2.13:1 (1x), 2.1:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `Typewriter-cursor` | fade | opacity | 1 |
| `Typewriter-cursor` | fade | opacity | 1 |

## Component Anatomy

### button — 2 instances

**Slots:** label, icon

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Sentence case (balanced)

### Sample Headings

> Journey
> Cruise is with you through the whole patient journey
> What sets Cruise apart
> Integration
> Cruise knows how to use your tools
> Sync with 100+ popular apps to connect your digital medtech in one place.
> Products
> Co-pilots built for everyone on  your team

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** Save time and improve accuracy with Cruise AI, the AI-powered medical scribe that automates clinical documentation and coding. Reduce administrative burden, increase note accuracy, and focus on patien

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): content → nav → nav → nav → content → content → nav → content

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | content | — | 0.3 |
| 1 | nav | Journey | 0.4 |
| 2 | nav | What sets Cruise apart | 0.4 |
| 3 | nav | Integration | 0.4 |
| 4 | content | — | 0.3 |
| 5 | content | — | 0.3 |
| 6 | nav | Products | 0.4 |
| 7 | content | — | 0.3 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.431 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 200px |
| backdrop-filter in use | no |
| Gradients | 10 |

## Imagery Style

**Label:** `photography` (confidence 0.023)
**Counts:** total 57, svg 2, icon 6, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** rounded

## Component Library

**Detected:** `vuetify` (confidence 0.66)

Evidence:
- 18 v-* classes

## Component Screenshots

1 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| button--default | 0 | 40 × 40 | `screenshots/button-default-0.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `TT Interfaces Medium` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
