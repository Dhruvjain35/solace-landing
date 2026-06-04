// React Theme — extracted from https://app.forhims.com/?ref=godly
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '24': string;
    '72': string;
    '248.889': string;
    '195.556': string;
    '125.333': string;
    '75.5556': string;
    '74.6666': string;
    '39.1112': string;
    '34.6666': string;
    '32.8888': string;
    '31.1112': string;
    '28.4444': string;
 *   };
 *   space: {
    '2': string;
    '60': string;
    '80': string;
    '100': string;
    '120': string;
    '133': string;
    '178': string;
    '210': string;
    '234': string;
    '285': string;
    '320': string;
    '360': string;
    '390': string;
    '428': string;
    '475': string;
 *   };
 *   radii: {
    xl: string;
    full: string;
 *   };
 *   shadows: {
    xl: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#5d48db",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff",
    "neutral200": "#f0f0f0"
  },
  "fonts": {
    "body": "'Times', sans-serif"
  },
  "fontSizes": {
    "24": "24px",
    "72": "72px",
    "248.889": "248.889px",
    "195.556": "195.556px",
    "125.333": "125.333px",
    "75.5556": "75.5556px",
    "74.6666": "74.6666px",
    "39.1112": "39.1112px",
    "34.6666": "34.6666px",
    "32.8888": "32.8888px",
    "31.1112": "31.1112px",
    "28.4444": "28.4444px"
  },
  "space": {
    "2": "2px",
    "60": "60px",
    "80": "80px",
    "100": "100px",
    "120": "120px",
    "133": "133px",
    "178": "178px",
    "210": "210px",
    "234": "234px",
    "285": "285px",
    "320": "320px",
    "360": "360px",
    "390": "390px",
    "428": "428px",
    "475": "475px"
  },
  "radii": {
    "xl": "20px",
    "full": "100px"
  },
  "shadows": {
    "xl": "rgba(0, 0, 0, 0.11) 0px 8px 127px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#5d48db",
      "light": "hsl(249, 67%, 72%)",
      "dark": "hsl(249, 67%, 42%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#000000"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#5d48db"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "h1": {
      "fontSize": "72px",
      "fontWeight": "500",
      "lineHeight": "74.88px"
    }
  },
  "shape": {
    "borderRadius": 20
  },
  "shadows": [
    "rgba(0, 0, 0, 0.06) 0px 8px 30px 0px",
    "rgba(0, 0, 0, 0.25) 0px 9px 46px 0px",
    "rgba(0, 0, 0, 0.12) 0px 27px 104px 0px",
    "rgba(0, 0, 0, 0.11) 0px 8px 127px 0px"
  ]
};

export default theme;
