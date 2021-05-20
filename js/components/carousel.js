const next = document.getElementById("next-btn");
const prev = document.getElementById("prev-btn");

const carouselWidth = carouselContainer.offsetWidth;

/* Move the carousel 300px backwards 
change to if carousel is equal to deskpot size use offsetwidth
and if carousel is equal to mobile use px*/

next.onclick = function () {
  carouselContainer.scrollLeft += carouselWidth;
};

/* Move the carousel 300px backwards 
change to if carousel is equal to deskpot size use offsetwidth
and if carousel is equal to mobile use px*/

prev.onclick = function () {
  carouselContainer.scrollLeft -= carouselWidth;
};
