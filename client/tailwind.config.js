/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#006194',
                secondary: '#CAEDFF',
                tertiary: '#40474A'
              },
        },
    },
    plugins: [],
};
