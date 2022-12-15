/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            lato: ["Lato", "sans-serif"],
        },
        screens: {
            "2xl": { max: "1535px" },
            xl: { max: "1279px" },
            minixl: { max: "1150px" },
            lg: { max: "1023px" },
            xxl: { max: "900px" },
            md: { max: "767px" },
            sm: { max: "639px" },
            tab: { max: "480px" },
            mobile: { max: "400px" },
            xs: { max: "340px" },
            xxs: { max: "310px" },
        },
        extend: {
            colors: {
                primary: "#4653F6",
                "primary-dark": "#757CF9",
                "primary-text": "#212121",
                secondary: "#27AE60",
                "secondary-dark": "#7AF294",
                "light-text": "#767676",
                "secondary-focus": "#238839",
                "border-clr": "#D1D5DA",
                "grey-bg": "#E1E4E8",
                "minimal-bg": "#F8F6F0",
                "minimal-bg-light": "#FAFAFA",
                "red-bg": "#D93535",
            },
        },
    },
    plugins: [],
};
