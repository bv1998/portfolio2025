/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./views/**/*.{vue,js,ts,jsx,tsx}", // Add this line if views is outside src
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
