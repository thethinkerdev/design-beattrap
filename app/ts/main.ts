let ElShadow = document.querySelector(".shadow") as HTMLDivElement;
let EltoggleBar = document.querySelector<HTMLDivElement>("#toggle-bar");
let ElMainNavAccountProfile = document.querySelector("#main-nav-profile") as HTMLDivElement;
let likes= document.querySelectorAll<HTMLElement>(".like") 
let ELSideBarClose = document.querySelector("#sidebar-close") as HTMLDivElement
let ElSidebar = document.querySelector("#sidebar") as HTMLDivElement
let ElMainNavAccountProfileList = document.querySelector("#main-nav-profile ul") as HTMLUListElement;


const ActiveShadow = () => ElShadow.classList.add("active")

const DeActiveShadow = () => ElShadow.classList.remove("active")

ELSideBarClose.addEventListener("click", () => {
    ElSidebar.classList.toggle("active");
    DeActiveShadow();
});

EltoggleBar?.addEventListener("click", () => {
    ElSidebar.classList.toggle("active");
    ActiveShadow();
});

interface SyntheticEvent<T> {
    currentTarget: EventTarget & T;
}

document.addEventListener("click", ({target}:MouseEvent) => {


    if ((target as Element).closest("#main-nav-profile")) {

        ElMainNavAccountProfileList.classList.toggle("active");
        ActiveShadow();
    } else {
        ElMainNavAccountProfileList.classList.remove("active");
    }

    if ((target as Element).closest(".shadow")) {
        ElSidebar.classList.remove("active");
        DeActiveShadow();
    }
});

likes.forEach(like => {
    like.addEventListener("click", () => {
        like.classList.add("add-like")
    })
})