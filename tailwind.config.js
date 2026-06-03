/** @type {import('tailwindcss').Config} */
// Tokens remapped from cruisenow.ai (extracted via designlang) onto the Solace
// green/white/black brand. Spacing, radii and easing match the reference 1:1.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Solace brand — green axis replaces Cruise's blue (#2251f9 -> #0B6B53)
        solace: {
          green: {
            DEFAULT: '#0B6B53',
            50: '#E7F4EF',
            100: '#CDE9DF',
            300: '#7CCBB2',
            500: '#1FBF8F', // mint accent (was Cruise accent #518bff)
            600: '#0F8A68',
            700: '#0B6B53',
            900: '#063B2E',
          },
          mint: '#1FBF8F',
          soft: '#E7F4EF',
        },
        ink: '#0A0F0D', // near-black (was Cruise #1e1e2e)
        offwhite: '#F6FAF8', // section bg (was Cruise #f4f5f7)
        muted: '#5B6B64', // secondary text (was Cruise #4d4f5c)
        slate: '#3C5560', // the real Solace logo color, kept as an optional accent
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'], // free lookalike for Cruise's Cirka
      },
      // Cruise spacing scale (2px base) — exact values extracted from the site
      spacing: {
        27: '27px',
        46: '46px',
        87: '87px',
        120: '120px',
        140: '140px',
      },
      borderRadius: {
        // Cruise radii scale: 4 · 8 · 16 · 24 · 40 · 100 · 200
        pill: '100px',
        blob: '200px',
      },
      boxShadow: {
        // Cruise's single soft elevation
        card: 'rgba(16, 24, 40, 0.05) 0px 1px 2px 0px',
        lift: '0 20px 50px -20px rgba(11, 107, 83, 0.25)',
        glow: '0 0 80px 0 rgba(31, 191, 143, 0.35)',
      },
      letterSpacing: {
        // Cruise headings run very tight (~ -2.6px on 72px)
        tightest: '-0.04em',
      },
      transitionTimingFunction: {
        // easeOutQuart — the single curve Cruise uses everywhere
        standard: 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '0' }, '50%': { opacity: '1' } },
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(20px,-30px) scale(1.05)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        drift: 'drift 14s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
