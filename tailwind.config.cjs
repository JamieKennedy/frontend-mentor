/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#080906',
                secondary: '#f1f3ed',
                primarybtn: '#587684',
                secondarybtn: "#f8f9f6",
                accent: '#462f3f'
            },
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
