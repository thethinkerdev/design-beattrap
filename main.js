let ElShadow = document.querySelector(".shadow");
let EltoggleBar = document.querySelector("#toggle-bar");
let ElMainNavAccountProfile = document.querySelector("#main-nav-profile");
let likes = document.querySelectorAll(".like")

const ActiveShadow = () => {
    ElShadow.classList.add("active");
};
const DeActiveShadow = () => {
    ElShadow.classList.remove("active");
};

document.querySelector("#sidebar-close").addEventListener("click", () => {
    document.querySelector("#sidebar").classList.toggle("active");
    DeActiveShadow();
});

EltoggleBar.addEventListener("click", () => {
    document.querySelector("#sidebar").classList.toggle("active");
    ActiveShadow();
});

document.addEventListener("click", e => {
    if (e.target.closest("#main-nav-profile")) {
        ElMainNavAccountProfile.querySelector("ul").classList.toggle("active");
        ActiveShadow();
    } else {
        ElMainNavAccountProfile.querySelector("ul").classList.remove("active");
    }

    if (e.target.closest(".shadow")) {
        document.querySelector("#sidebar").classList.remove("active");
        DeActiveShadow();
    }
});

likes.forEach(like => {
    like.addEventListener("click", () => {
        like.classList.add("add-like")
    })
})