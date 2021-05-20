const next = document.getElementById("next-btn");
const prev = document.getElementById("prev-btn");

/* Move the carousel 300px ahead */

next.onclick = function () {
  document.querySelector(`.carousel`).scrollLeft += 260;
};

/* Move the carousel 300px backwards */

prev.onclick = function () {
  document.querySelector(`.carousel`).scrollLeft += -260;
};
