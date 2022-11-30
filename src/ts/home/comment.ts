document
  .querySelectorAll(".product__comments__comment__reply")
  .forEach((reply) => {
    reply.addEventListener("click", (e) => {
      const replySpanElement = e.currentTarget as HTMLSpanElement;

      console.log(replySpanElement);
      
      replySpanElement.parentElement
        ?.querySelector(".product__comments__comment__reply-this-comment")
        ?.classList.toggle("product__comments__comment__reply-this-comment--active");
    });
  });
