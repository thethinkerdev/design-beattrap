const ElMainNavAccountProfileList = document.querySelector(
  "#main-nav-profile ul"
) as HTMLUListElement;

document.addEventListener("click", ({ target }: MouseEvent) => {
  const clickedElement = target as HTMLDivElement;

  if (clickedElement.closest("#main-nav-profile-img")) {
    ElMainNavAccountProfileList.classList.toggle("active");
    ActiveShadow();
  } else {
    ElMainNavAccountProfileList.classList.remove("active");
  }

  if (clickedElement.closest(".shadow")) {
    ElSidebar.classList.remove("active");
    DeActiveShadow();
  }
});
