/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0f172a', /* slate-900 */
                secondary: '#111827', /* gray-900 */
                card: 'rgba(255, 255, 255, 0.05)',
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-hero': 'linear-gradient(to right bottom, rgba(15, 23, 42, 0.8), rgba(17, 24, 39, 0.9))',
                'purple-blue': 'linear-gradient(to right, #8b5cf6, #3b82f6)',
            }
        },
    },
    plugins: [],
}
