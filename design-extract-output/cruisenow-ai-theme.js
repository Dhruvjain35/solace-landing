// React Theme — extracted from https://cruisenow.ai
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '10': string;
    '12': string;
    '14': string;
    '16': string;
    '20': string;
    '24': string;
    '40': string;
    '64': string;
    '72': string;
    '200': string;
 *   };
 *   space: {
    '1': string;
    '4': string;
    '27': string;
    '32': string;
    '36': string;
    '46': string;
    '50': string;
    '64': string;
    '72': string;
    '80': string;
    '87': string;
    '120': string;
    '140': string;
 *   };
 *   radii: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    xs: string;
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
    "primary": "#2251f9",
    "secondary": "#1e1e2e",
    "accent": "#518bff",
    "background": "#1e1e2e",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#f4f5f7",
    "neutral200": "#ffffff",
    "neutral300": "#4d4f5c",
    "neutral400": "#2b2e3b"
  },
  "fonts": {
    "body": "'Inter', sans-serif"
  },
  "fontSizes": {
    "10": "10px",
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "20": "20px",
    "24": "24px",
    "40": "40px",
    "64": "64px",
    "72": "72px",
    "200": "200px"
  },
  "space": {
    "1": "1px",
    "4": "4px",
    "27": "27px",
    "32": "32px",
    "36": "36px",
    "46": "46px",
    "50": "50px",
    "64": "64px",
    "72": "72px",
    "80": "80px",
    "87": "87px",
    "120": "120px",
    "140": "140px"
  },
  "radii": {
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "xl": "24px",
    "full": "200px"
  },
  "shadows": {
    "xs": "rgba(16, 24, 40, 0.05) 0px 1px 2px 0px"
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
      "main": "#2251f9",
      "light": "hsl(227, 95%, 70%)",
      "dark": "hsl(227, 95%, 40%)"
    },
    "secondary": {
      "main": "#1e1e2e",
      "light": "hsl(240, 21%, 30%)",
      "dark": "hsl(240, 21%, 10%)"
    },
    "background": {
      "default": "#1e1e2e",
      "paper": "#f4f5f7"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#0000ee"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "h1": {
      "fontSize": "40px",
      "fontWeight": "400",
      "lineHeight": "48px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "400",
      "lineHeight": "36px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "400",
      "lineHeight": "20px"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgba(16, 24, 40, 0.05) 0px 1px 2px 0px"
  ]
};

export default theme;
