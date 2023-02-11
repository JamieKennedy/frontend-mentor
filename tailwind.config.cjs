/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                mona: ["Mona Sans"],
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
