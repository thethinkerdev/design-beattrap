"use strict";
let ElShadow = document.querySelector(".shadow");
let EltoggleBar = document.querySelector("#toggle-bar");
let ElMainNavAccountProfile = document.querySelector("#main-nav-profile");
let likes = document.querySelectorAll(".like");
let ELSideBarClose = document.querySelector("#sidebar-close");
let ElSidebar = document.querySelector("#sidebar");
let ElMainNavAccountProfileList = document.querySelector("#main-nav-profile ul");
const ActiveShadow = () => ElShadow.classList.add("active");
const DeActiveShadow = () => ElShadow.classList.remove("active");
ELSideBarClose.addEventListener("click", () => {
    ElSidebar.classList.toggle("active");
    DeActiveShadow();
});
EltoggleBar === null || EltoggleBar === void 0 ? void 0 : EltoggleBar.addEventListener("click", () => {
    ElSidebar.classList.toggle("active");
    ActiveShadow();
});
document.addEventListener("click", ({ target }) => {
    if (target.closest("#main-nav-profile")) {
        ElMainNavAccountProfileList.classList.toggle("active");
        ActiveShadow();
    }
    else {
        ElMainNavAccountProfileList.classList.remove("active");
    }
    if (target.closest(".shadow")) {
        ElSidebar.classList.remove("active");
        DeActiveShadow();
    }
});
likes.forEach(like => {
    like.addEventListener("click", () => {
        like.classList.add("add-like");
    });
});
