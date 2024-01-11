

const prevButton = document.getElementById("button-1");
const nextButton = document.getElementById("button-2");
const carousel = document.querySelector(".carousel");


let index = 0;

prevButton.addEventListener("click", () => {
  if(index === 0) return;
  index -= 1;

  carousel.style.transform = `translateX(-${600 * index}px)`;
});

nextButton.addEventListener("click", () => {
  if(index === 4) return;
  index += 1;

  carousel.style.transform = `translateX(-${600 * index}px)`;
});