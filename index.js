// index.js
document.addEventListener("DOMContentLoaded", () => {
  const scrollWrappers = document.querySelectorAll(".image-scroll-wrapper");

  scrollWrappers.forEach(wrapper => {
    const scrollContainer = wrapper.querySelector(".image-scroll");
    const leftBtn = wrapper.querySelector(".scroll-btn.left");
    const rightBtn = wrapper.querySelector(".scroll-btn.right");
    const imgWidth = scrollContainer.querySelector("img").offsetWidth + 10; // image width + gap

    // Scroll left
    leftBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: -imgWidth,
        behavior: "smooth"
      });
    });

    // Scroll right
    rightBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: imgWidth,
        behavior: "smooth"
      });
    });
  });
});
