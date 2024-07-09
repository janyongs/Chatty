import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            fontFamily: {
                sans: ['var(--font-pretendard)', 'sans-serif']
            },
            fontSize: {
                title: ['32px', { lineHeight: 'normal', fontWeight: '700' }],
                h1: ['28px', { lineHeight: 'normal', letterSpacing: '0.56px', fontWeight: '700' }],
                h2: ['24px', { lineHeight: '29px', letterSpacing: '0.48px', fontWeight: '700' }],
                'h3-regular': ['20px', { lineHeight: 'normal', fontWeight: '400' }],
                'h3-bold': ['20px', { lineHeight: 'normal', fontWeight: '700' }],
                'h4-regular': ['18px', { lineHeight: 'normal', fontWeight: '400' }],
                'h4-bold': ['18px', { lineHeight: 'normal', fontWeight: '700' }],
                'body1-regular': ['16px', { lineHeight: '26px', fontWeight: '400' }],
                'body1-bold': ['16px', { lineHeight: '20px', fontWeight: '700' }],
                'body1-medium': ['16px', { lineHeight: '26px', fontWeight: '600' }],
                'body2-regular': ['14px', { lineHeight: '22px', fontWeight: '400' }],
                'body2-bold': ['14px', { lineHeight: 'normal', fontWeight: '700' }],
                caption: ['12px', { lineHeight: '16px', fontWeight: '400' }]
            }
        }
    },
    plugins: []
};
export default config;
