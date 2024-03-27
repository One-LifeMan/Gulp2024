/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");

// import withMT from '@material-tailwind/html/utils/withMT';

export default withMT({
    content: ["./src/html/**/*.html"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                thbl: {
                    darkPrimaryColor: "#303F9F",
                    lightPrimaryColor: "#C5CAE9",
                    primaryColor: "#3F51B5",
                    textIcons: "#FFF",
                    accentColor: "#FF5722",
                    primaryText: "#212121",
                    secondaryText: "#757575",
                    dividerColor: "#BDBDBD",
                },
                thdr: {
                    darkPrimaryColor: "#1a1a1a",
                    lightPrimaryColor: "#3a3a3a",
                    primaryColor: "#262626",
                    textIcons: "#FFF",
                    accentColor: "#FF5722",
                    primaryText: "#ccc",
                    secondaryText: "#fff",
                    dividerColor: "#BDBDBD",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
});

// const withMT = require("@material-tailwind/html/utils/withMT");

// module.exports = withMT({
//     content: ["./src/**/*.{html,js,php}"],
//     darkMode: "class",
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// });
