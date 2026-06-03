/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(227, 95%, 97%)',
            '100': 'hsl(227, 95%, 94%)',
            '200': 'hsl(227, 95%, 86%)',
            '300': 'hsl(227, 95%, 76%)',
            '400': 'hsl(227, 95%, 64%)',
            '500': 'hsl(227, 95%, 50%)',
            '600': 'hsl(227, 95%, 40%)',
            '700': 'hsl(227, 95%, 32%)',
            '800': 'hsl(227, 95%, 24%)',
            '900': 'hsl(227, 95%, 16%)',
            '950': 'hsl(227, 95%, 10%)',
            DEFAULT: '#2251f9'
        },
        secondary: {
            '50': 'hsl(240, 21%, 97%)',
            '100': 'hsl(240, 21%, 94%)',
            '200': 'hsl(240, 21%, 86%)',
            '300': 'hsl(240, 21%, 76%)',
            '400': 'hsl(240, 21%, 64%)',
            '500': 'hsl(240, 21%, 50%)',
            '600': 'hsl(240, 21%, 40%)',
            '700': 'hsl(240, 21%, 32%)',
            '800': 'hsl(240, 21%, 24%)',
            '900': 'hsl(240, 21%, 16%)',
            '950': 'hsl(240, 21%, 10%)',
            DEFAULT: '#1e1e2e'
        },
        accent: {
            '50': 'hsl(220, 100%, 97%)',
            '100': 'hsl(220, 100%, 94%)',
            '200': 'hsl(220, 100%, 86%)',
            '300': 'hsl(220, 100%, 76%)',
            '400': 'hsl(220, 100%, 64%)',
            '500': 'hsl(220, 100%, 50%)',
            '600': 'hsl(220, 100%, 40%)',
            '700': 'hsl(220, 100%, 32%)',
            '800': 'hsl(220, 100%, 24%)',
            '900': 'hsl(220, 100%, 16%)',
            '950': 'hsl(220, 100%, 10%)',
            DEFAULT: '#518bff'
        },
        'neutral-50': '#000000',
        'neutral-100': '#f4f5f7',
        'neutral-200': '#ffffff',
        'neutral-300': '#4d4f5c',
        'neutral-400': '#2b2e3b',
        background: '#1e1e2e',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'TT Interfaces Medium',
            'sans-serif'
        ],
        body: [
            'Cirka Bold',
            'sans-serif'
        ],
        font2: [
            'TT Interfaces Regular',
            'sans-serif'
        ],
        font3: [
            'Cirka Variable',
            'sans-serif'
        ],
        font4: [
            'TT Interfaces',
            'sans-serif'
        ],
        font6: [
            'Inter',
            'sans-serif'
        ]
    },
    fontSize: {
        '10': [
            '10px',
            {
                lineHeight: '16px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: 'normal'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '20px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '20px',
                letterSpacing: '-0.4px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '36px',
                letterSpacing: '-0.5px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '48px',
                letterSpacing: '-2px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '76.8px',
                letterSpacing: '-3px'
            }
        ],
        '72': [
            '72px',
            {
                lineHeight: '86.4px',
                letterSpacing: '-2.6px'
            }
        ],
        '200': [
            '200px',
            {
                lineHeight: '200px',
                letterSpacing: '-5.5px'
            }
        ]
    },
    spacing: {
        '2': '4px',
        '16': '32px',
        '18': '36px',
        '23': '46px',
        '25': '50px',
        '32': '64px',
        '36': '72px',
        '40': '80px',
        '60': '120px',
        '70': '140px',
        '1px': '1px',
        '27px': '27px',
        '87px': '87px'
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        full: '200px'
    },
    boxShadow: {
        xs: 'rgba(16, 24, 40, 0.05) 0px 1px 2px 0px'
    },
    screens: {
        md: '810px',
        '1200px': '1200px',
        '1440px': '1440px'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
