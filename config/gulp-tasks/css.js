import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import environments from "gulp-environments";
import changed from "gulp-changed"; // визначає чи змінилися файли в потоці
import plumber from "gulp-plumber"; // запобігайте розриву каналу через помилки плагінів gulp
import sassGlob from "gulp-sass-glob"; // плагін для gulp-sass для використання глобального імпорту
import { plumberNotify } from "./../gulp-plugins.js";
// import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso"; // Minify CSS
import webpCss from "gulp-webp-css-fixed";
import postcss from "gulp-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const sass = gulpSass(dartSass);
const { development, production } = environments;

const SOURCE = ["./src/scss/**/*.scss", "./src/scss/**/*.css"];
let destination = development() ? "dev/css" : "dist/css";

function css() {
    return (
        gulp
            .src(SOURCE)
            .pipe(changed(destination))
            .pipe(plumber(plumberNotify("SCSS")))
            .pipe(development(sourcemaps.init()))
            .pipe(sassGlob())
            .pipe(sass().on("error", sass.logError))
            // .pipe(production(autoprefixer()))
            .pipe(postcss([tailwindcss("./tailwind.config.js"), autoprefixer]))
            .pipe(webpCss())
            .pipe(production(csso()))
            .pipe(development(sourcemaps.write()))
            .pipe(gulp.dest(destination))
    );
}

export { css };
