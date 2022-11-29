const navMainItems = document.querySelectorAll("#main-nav-items ul > li");

navMainItems.forEach((item) => {
  let timer: number;

  item.addEventListener("mouseenter", (e) => {
    clearTimeout(timer);

    const liElement = e.currentTarget as HTMLLIElement;
    const ulOfLiElement = liElement.querySelector("ul") as HTMLUListElement;

    if (ulOfLiElement) {
      ulOfLiElement.style.display = "block";
    }
  });

  item.addEventListener("mouseleave", (e) => {
    const liElement = e.currentTarget as HTMLLIElement;
    const ulOfLiElement = liElement.querySelector("ul") as HTMLUListElement;

    if (ulOfLiElement) {
      timer = setTimeout(() => {
        ulOfLiElement.style.display = "none";
      }, 250);
    }
  });
});

const ELSideBarClose = document.querySelector(
  "#sidebar-close"
) as HTMLDivElement;

const ElSidebar = document.querySelector("#sidebar") as HTMLDivElement;
const EltoggleBar = document.querySelector("#toggle-bar") as HTMLDivElement;

ELSideBarClose.addEventListener("click", () => {
  ElSidebar.classList.toggle("active");
  DeActiveShadow();
});

EltoggleBar.addEventListener("click", () => {
  ElSidebar.classList.toggle("active");
  ActiveShadow();
});
