"use strict";

import "webp-in-css/polyfill.js";

import "./modules/_preloader.js";
import "./modules/_i18n.js";
import "@material/web/all.js";

// prettier-ignore
import { 
    _,
    Mustache
} from "./constants/_libs.js";

import ScrollAnimator from "./classes/ScrollAnimator.js";

const scrollAnimator = new ScrollAnimator();
scrollAnimator.init();

// prettier-ignore
export {  };
