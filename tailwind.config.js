/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    black: "#000000",
                    dark: "#050505",
                    gray: "#1d1d1f",
                    light: "#f5f5f7",
                    white: "#ffffff",
                },
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                heading: ['Inter', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
