"use strict";

function $(selector) {
    return document.querySelector(`${selector}`);
}
function $All(selector) {
    return document.querySelectorAll(`${selector}`);
}

const LOADER = $(".loader");

// prettier-ignore
export { 
    $, 
    $All, 
    LOADER,
};
