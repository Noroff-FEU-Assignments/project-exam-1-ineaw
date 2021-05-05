const openImage = document.querySelectorAll("[data-open]");
const closeImage = document.querySelectorAll("[data-close]");
const visible = "is-visible";

for (const el of openImage) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(visible);
  });
}

for (let el of closeImage) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.classList.remove(visible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".post-modal.is-visible")) {
    document.querySelector(".post-modal.is-visible").classList.remove(visible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && document.querySelector(".post-modal.visible")) {
    document.querySelector(".post-modal.is-visible").classList.remove(visible);
  }
});
