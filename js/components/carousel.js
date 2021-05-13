const next = document.querySelector("#next-btn");
const previous = document.querySelector("#prev-btn");

function prevPage() {
  if (page === 1) {
    page = 6;
  } else {
    page--;
  }
  getCarouselPosts();
}

function nextPage() {
  if (page === 5) {
    page = 1;
  } else {
    page++;
  }
  getCarouselPosts();
}

previous.addEventListener("click", prevPage);
next.addEventListener("click", nextPage);
