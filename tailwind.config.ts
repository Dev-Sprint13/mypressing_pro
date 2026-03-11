import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            light: '#75939b',
                            DEFAULT: '#5a7880',
                            dark: '#4d646d',
                            50: '#f0f4f6',
                            100: '#dee7e9',
                        },
                        gray: {
                            50: '#f8fafb',
                            100: '#f1f4f5',
                            200: '#e3e8eb',
                            800: '#2d373a',
                            900: '#1a2022',
                        }
                    },
                    boxShadow: {
                        'glass': '0 4px 24px -6px rgba(90, 120, 128, 0.08)',
                        'card': '0 2px 12px -2px rgba(0, 0, 0, 0.03), 0 1px 4px -1px rgba(0, 0, 0, 0.02)',
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.5s ease-out forwards',
                        'slide-up': 'slideUp 0.6s ease-out forwards',
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                        slideUp: {
                            '0%': { opacity: '0', transform: 'translateY(16px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        }
                    }
                }
            },
  plugins: [],
};
export default config;
