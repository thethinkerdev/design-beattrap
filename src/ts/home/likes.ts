let likes = document.querySelectorAll(".like") as NodeListOf<HTMLDivElement>;

likes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.add("add-like");
  });
});
