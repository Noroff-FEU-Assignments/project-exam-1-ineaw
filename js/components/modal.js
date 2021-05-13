const openImage = document.querySelectorAll("[data-open");
const closeImage = document.querySelectorAll("[data-close");
const visible = "is-visible";

/* Open modal image */

for (const el of openImage) {
  el.addEventListener("click", function () {
    const modal = this.dataset.open;
    document.getElementById(modal).classList.add(visible);
  });
}

/* Close with Button */

for (const el of closeImage) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.parentElement.classList.remove(visible);
  });
}

/* Close by clicking outside image */

document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".post-modal.is-visible")) {
    document.querySelector(".post-modal.is-visible").classList.remove(visible);
  }
});

/* Close with escape button */

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".post-modal.is-visible")) {
    document.querySelector(".post-modal.is-visible").classList.remove(visible);
  }
});
