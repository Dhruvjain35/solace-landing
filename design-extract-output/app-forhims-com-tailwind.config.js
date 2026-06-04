/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(249, 67%, 97%)',
            '100': 'hsl(249, 67%, 94%)',
            '200': 'hsl(249, 67%, 86%)',
            '300': 'hsl(249, 67%, 76%)',
            '400': 'hsl(249, 67%, 64%)',
            '500': 'hsl(249, 67%, 50%)',
            '600': 'hsl(249, 67%, 40%)',
            '700': 'hsl(249, 67%, 32%)',
            '800': 'hsl(249, 67%, 24%)',
            '900': 'hsl(249, 67%, 16%)',
            '950': 'hsl(249, 67%, 10%)',
            DEFAULT: '#5d48db'
        },
        'neutral-50': '#000000',
        'neutral-100': '#ffffff',
        'neutral-200': '#f0f0f0',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'sofia',
            'sans-serif'
        ],
        body: [
            'Times',
            'sans-serif'
        ]
    },
    fontSize: {
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '50px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '60px'
            }
        ],
        '72': [
            '72px',
            {
                lineHeight: '74.88px',
                letterSpacing: '-4.14px'
            }
        ],
        '248.889': [
            '248.889px',
            {
                lineHeight: '248.889px',
                letterSpacing: '-14.3111px'
            }
        ],
        '195.556': [
            '195.556px',
            {
                lineHeight: '195.556px',
                letterSpacing: '-11.2444px'
            }
        ],
        '125.333': [
            '125.333px',
            {
                lineHeight: '137.867px',
                letterSpacing: '-7.20667px'
            }
        ],
        '75.5556': [
            '75.5556px',
            {
                lineHeight: '87.1112px',
                letterSpacing: '-3.58889px'
            }
        ],
        '74.6666': [
            '74.6666px',
            {
                lineHeight: '182.222px',
                letterSpacing: '-4.29333px'
            }
        ],
        '39.1112': [
            '39.1112px',
            {
                lineHeight: '46.2222px',
                letterSpacing: '-1.85778px'
            }
        ],
        '34.6666': [
            '34.6666px',
            {
                lineHeight: '40.9066px',
                letterSpacing: '-1.64666px'
            }
        ],
        '32.8888': [
            '32.8888px',
            {
                lineHeight: 'normal'
            }
        ],
        '31.1112': [
            '31.1112px',
            {
                lineHeight: '36.7112px',
                letterSpacing: '-1.47778px'
            }
        ],
        '28.4444': [
            '28.4444px',
            {
                lineHeight: '35.5556px'
            }
        ],
        '17.7778': [
            '17.7778px',
            {
                lineHeight: '20.4445px',
                letterSpacing: '-0.222222px'
            }
        ]
    },
    spacing: {
        '1': '2px',
        '30': '60px',
        '40': '80px',
        '50': '100px',
        '60': '120px',
        '89': '178px',
        '105': '210px',
        '117': '234px',
        '160': '320px',
        '180': '360px',
        '195': '390px',
        '214': '428px',
        '133px': '133px',
        '285px': '285px',
        '475px': '475px'
    },
    borderRadius: {
        xl: '20px',
        full: '100px'
    },
    boxShadow: {
        xl: 'rgba(0, 0, 0, 0.11) 0px 8px 127px 0px'
    },
    transitionDuration: {
        '200': '0.2s',
        '600': '0.6s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.19, 1, 0.22, 1)'
    }
},
  },
};
