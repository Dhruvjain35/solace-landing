# Design Language: Hims App

> Extracted from `https://app.forhims.com/?ref=godly` on June 4, 2026
> 263 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#5d48db` | rgb(93, 72, 219) | hsl(249, 67%, 57%) | 4 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 363 |
| `#ffffff` | hsl(0, 0%, 100%) | 171 |
| `#f0f0f0` | hsl(0, 0%, 94%) | 8 |

### Background Colors

Used on large-area elements: `#ffffff`, `#000000`

### Text Colors

Text color palette: `#000000`, `#5d48db`, `#f0f0f0`, `#ffffff`

### Gradients

```css
background-image: linear-gradient(166.14deg, rgb(192, 227, 216) 0px, rgb(186, 225, 220) 100%);
```

```css
background-image: linear-gradient(166.14deg, rgb(232, 244, 247) 0px, rgb(175, 205, 222) 100%);
```

```css
background-image: linear-gradient(166.14deg, rgb(106, 180, 165) 0px, rgb(134, 183, 212) 100%);
```

```css
background-image: linear-gradient(166.14deg, rgb(83, 170, 255) 1.38%, rgb(53, 119, 191) 38.84%, rgb(0, 0, 0) 74.76%);
```

```css
background-image: linear-gradient(243.63deg, rgb(63, 209, 148) 16.96%, rgb(47, 165, 158) 60.78%);
```

```css
background-image: linear-gradient(123.97deg, rgb(79, 216, 171) 10.62%, rgb(94, 161, 231) 43.12%, rgb(131, 117, 208) 89.61%);
```

```css
background-image: linear-gradient(90deg, rgb(53, 47, 51) 0px, rgb(41, 37, 38) 100%);
```

```css
background-image: linear-gradient(90deg, rgb(49, 44, 48) 0px, rgb(53, 47, 51) 50%, rgb(41, 37, 38) 100%);
```

```css
background-image: linear-gradient(93.37deg, rgb(150, 133, 255) -1.4%, rgb(209, 178, 202) 34.29%, rgb(181, 173, 225) 85.34%);
```

```css
background-image: linear-gradient(0deg, rgba(245, 240, 242, 0) 50%, rgba(180, 205, 196, 0.7) 100%);
```

```css
background-image: linear-gradient(123.97deg, rgb(127, 191, 188) 10.62%, rgb(85, 107, 113) 49.7%, rgb(0, 0, 0) 89.61%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 363 |
| `#ffffff` | background, text, border | 171 |
| `#f0f0f0` | text, border | 8 |
| `#5d48db` | text, border | 4 |

## Typography

### Font Families

- **sofia** — used for all (235 elements)
- **Times** — used for body (28 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 248.889px | 15.5556rem | 500 | 248.889px | -14.3111px | div |
| 195.556px | 12.2223rem | 500 | 195.556px | -11.2444px | h2, br |
| 125.333px | 7.8333rem | 500 | 137.867px | -7.20667px | ul, li |
| 75.5556px | 4.7222rem | 500 | 87.1112px | -3.58889px | p, br |
| 74.6666px | 4.6667rem | 500 | 182.222px | -4.29333px | div |
| 72px | 4.5rem | 500 | 74.88px | -4.14px | h1, br |
| 39.1112px | 2.4444rem | 500 | 46.2222px | -1.85778px | p, br, span |
| 34.6666px | 2.1667rem | 500 | 40.9066px | -1.64666px | p |
| 32.8888px | 2.0556rem | 500 | normal | normal | div |
| 31.1112px | 1.9445rem | 500 | 36.7112px | -1.47778px | p |
| 28.4444px | 1.7778rem | 500 | 35.5556px | normal | h2 |
| 24px | 1.5rem | 400 | 60px | normal | ul, li, a, svg |
| 18px | 1.125rem | 400 | 50px | normal | li, a, div, p |
| 17.7778px | 1.1111rem | 500 | 20.4445px | -0.222222px | div, svg, path |
| 16px | 1rem | 400 | normal | normal | html, head, meta, style |

### Heading Scale

```css
h2 { font-size: 195.556px; font-weight: 500; line-height: 195.556px; }
h1 { font-size: 72px; font-weight: 500; line-height: 74.88px; }
h2 { font-size: 28.4444px; font-weight: 500; line-height: 35.5556px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`500` (214x), `400` (49x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-60 | 60px | 3.75rem |
| spacing-80 | 80px | 5rem |
| spacing-100 | 100px | 6.25rem |
| spacing-120 | 120px | 7.5rem |
| spacing-133 | 133px | 8.3125rem |
| spacing-178 | 178px | 11.125rem |
| spacing-210 | 210px | 13.125rem |
| spacing-234 | 234px | 14.625rem |
| spacing-285 | 285px | 17.8125rem |
| spacing-320 | 320px | 20rem |
| spacing-360 | 360px | 22.5rem |
| spacing-390 | 390px | 24.375rem |
| spacing-428 | 428px | 26.75rem |
| spacing-475 | 475px | 29.6875rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xl | 20px | 3 |
| full | 27px | 4 |
| full | 45px | 6 |
| full | 52px | 1 |
| full | 100px | 3 |

## Box Shadows

**xl** — blur: 30px
```css
box-shadow: rgba(0, 0, 0, 0.06) 0px 8px 30px 0px;
```

**xl** — blur: 46px
```css
box-shadow: rgba(0, 0, 0, 0.25) 0px 9px 46px 0px;
```

**xl** — blur: 104px
```css
box-shadow: rgba(0, 0, 0, 0.12) 0px 27px 104px 0px;
```

**xl** — blur: 127px
```css
box-shadow: rgba(0, 0, 0, 0.11) 0px 8px 127px 0px;
```

## CSS Custom Properties

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
| md | 750px | max-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`

**Durations:** `0.2s`, `0.6s`

### Common Transitions

```css
transition: all;
transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Cards (42 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 27px 104px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (7 instances)

```css
.link {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (1 instances)

```css
.navigatio {
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: fixed;
}
```

### Footer (1 instances)

```css
.foote {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  padding-top: 0px;
  padding-bottom: 64px;
  font-size: 16px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Card — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

### Card — 9 instances, 2 variants

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 45px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 45px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

### Card — 4 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 26.6666px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

### Card — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 26.6666px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

### Card — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Card — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Card — 6 instances, 2 variants

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Card — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 26.6666px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 26.6666px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

## Layout System

**0 grid containers** and **14 flex containers** detected.

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 14x |

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 91/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 82/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance

**Issues:**
- 328 duplicate CSS declarations

## Gradients

**11 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 166.14deg | 2 | brand |
| linear | 166.14deg | 2 | brand |
| linear | 166.14deg | 2 | brand |
| linear | 166.14deg | 3 | bold |
| linear | 243.63deg | 2 | brand |
| linear | 123.97deg | 3 | bold |
| linear | 90deg | 2 | brand |
| linear | 90deg | 3 | bold |
| linear | 93.37deg | 3 | bold |
| linear | 0deg | 2 | brand |
| linear | 123.97deg | 3 | bold |

```css
background: linear-gradient(166.14deg, rgb(192, 227, 216) 0px, rgb(186, 225, 220) 100%);
background: linear-gradient(166.14deg, rgb(232, 244, 247) 0px, rgb(175, 205, 222) 100%);
background: linear-gradient(166.14deg, rgb(106, 180, 165) 0px, rgb(134, 183, 212) 100%);
background: linear-gradient(166.14deg, rgb(83, 170, 255) 1.38%, rgb(53, 119, 191) 38.84%, rgb(0, 0, 0) 74.76%);
background: linear-gradient(243.63deg, rgb(63, 209, 148) 16.96%, rgb(47, 165, 158) 60.78%);
```

## Z-Index Map

**4 unique z-index values** across 1 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| base | -1,4 | div, img, div |

## SVG Icons

**12 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| md | 2 |
| lg | 3 |
| xl | 7 |

**Icon colors:** `rgb(0, 0, 0)`, `#e0e0e0`, `url(#linear)`, `rgb(255, 255, 255)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| sofia | self-hosted | 400, 500 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| gallery | 7 | objectFit: fill, borderRadius: 0px, shape: square |
| general | 5 | objectFit: fill, borderRadius: 0px, shape: square |
| thumbnail | 1 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 9:16 (6x), 4:3 (5x), 4.49:1 (1x), 3:4 (1x)

## Motion Language

**Feel:** responsive · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `200ms` | 200 |
| `lg` | `600ms` | 600 |

### Easing Families

- **ease-out** (5 uses) — `cubic-bezier(0.215, 0.61, 0.355, 1)`, `cubic-bezier(0.19, 1, 0.22, 1)`

## Component Anatomy

### card — 37 instances

**Slots:** media

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Title Case (tight)

### Sample Headings

> Total care.
Totally different.
> Programs
> Care
> Member
Shop
> Hims App FAQs

## Page Intent

**Type:** `landing` (confidence 0.59)
**Description:** Best-in-class treatment, and beyond. Explore Programs curated to your treatment, contact Care for support anytime from anywhere, and Shop the entire collection of products—all in the app.

Alternates: legal (0.4)

## Section Roles

Reading order (top→bottom): nav → steps → testimonial → testimonial → pricing → faq → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | steps | Total care.
Totally different. | 0.75 |
| 2 | testimonial | Programs | 0.8 |
| 3 | testimonial | Care | 0.8 |
| 4 | pricing | Member
Shop | 0.4 |
| 5 | faq | Hims App FAQs | 0.85 |
| 6 | footer | — | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.168 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 100px |
| backdrop-filter in use | no |
| Gradients | 11 |

## Imagery Style

**Label:** `photography` (confidence 0.038)
**Counts:** total 13, svg 0, icon 0, screenshot-like 0, photo-like 1
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Screenshots

3 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| card--default | 0 | 1280 × 135 | `screenshots/card-default-0.png` |
| card--default | 1 | 1280 × 800 | `screenshots/card-default-1.png` |
| card--default | 2 | 1280 × 1070 | `screenshots/card-default-2.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `sofia` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
