---
name: motion-framer
description: Expert in writing fluid, high-performance UI animations and interactive components using Framer Motion (motion/react). Use when building or animating React components, scroll reveals, hover/tap gestures, staggered lists, or page transitions for the Solace landing page. Honors the exact motion values extracted from the cruisenow.ai reference.
---

# Framer Motion (Motion) Expert

## Description
Expert in writing fluid, high-performance UI animations and interactive components using Framer Motion. Tuned to reproduce the motion feel of the cruisenow.ai reference, remapped to the Solace brand.

## Rules & Principles
1. **Performance:** Only animate GPU-accelerated properties (`transform`, `opacity`). Never animate layout-shifting CSS (`width`, `height`, `top`, `left`, `margin`).
2. **Variants & Gestures:** Use `motion` components with explicit `initial`, `animate`/`whileInView`, `whileHover`, and `whileTap`. Reveal-on-scroll uses `whileInView` with `viewport={{ once: true, amount: 0.3 }}`.
3. **Accessibility:** Honor `prefers-reduced-motion` via the `useReducedMotion()` hook — disable transforms and fall back to instant/opacity-only when reduced.
4. **Clean Syntax:** Keep animations declarative and tie them to standard Tailwind classes. Prefer shared `variants` objects over inline literals for anything repeated.
5. **Import path:** Use `import { motion } from 'framer-motion'` (or `motion/react` if the project is on Motion v11+). Match whatever is already installed — check `package.json` first.

## Extracted motion tokens (cruisenow.ai — match these exactly)
These are the real values pulled from the reference site. Use them so the Solace page feels identical.

```ts
// Easing — easeOutQuart, the single curve the reference uses everywhere
export const EASE = [0.25, 1, 0.5, 1] as const;

// Durations (seconds)
export const DURATION = { fast: 0.15, base: 0.3, slow: 0.54 } as const;

// Spring for playful/interactive elements
export const SPRING = { type: 'spring', stiffness: 320, damping: 30 } as const;

export const transitions = {
  base: { duration: DURATION.base, ease: EASE },
  fast: { duration: DURATION.fast, ease: EASE },
  slow: { duration: DURATION.slow, ease: EASE },
  spring: SPRING,
};

export const variants = {
  fade:    { hidden: { opacity: 0 },            show: { opacity: 1, transition: transitions.base } },
  slideUp: { hidden: { opacity: 0, y: 16 },     show: { opacity: 1, y: 0, transition: transitions.base } },
  scaleIn: { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1, transition: transitions.base } },
  stagger: { hidden: {}, show: { transition: { staggerChildren: 0.075 } } },
};
```

## Example (fade-in card with hover scale)
Input: "Create an animated fade-in card with a hover scale effect."
Output:
```tsx
import { motion, useReducedMotion } from 'framer-motion';

export const AnimatedCard = () => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={reduce ? undefined : { scale: 1.03, y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-solace-green-soft"
    >
      <h3 className="text-ink">Animated Card</h3>
    </motion.div>
  );
};
```

## Example (staggered scroll-reveal list)
```tsx
import { motion } from 'framer-motion';
import { variants } from './motion';

export const RevealList = ({ items }: { items: string[] }) => (
  <motion.ul variants={variants.stagger} initial="hidden" whileInView="show"
             viewport={{ once: true, amount: 0.2 }} className="grid gap-6">
    {items.map((item) => (
      <motion.li key={item} variants={variants.slideUp}>{item}</motion.li>
    ))}
  </motion.ul>
);
```
