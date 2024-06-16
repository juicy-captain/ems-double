document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal-overlay");
  const closeButton = document.querySelector(".modal__close");
  const modalButton = document.querySelector(".modal__button");
  const openButton = document.querySelector("._openModal");

  function openModal() {
    modal.classList.add("_show");

    setTimeout(() => {
      modal.style.opacity = "1";
      modal.style.visibility = "visible";
    }, 300);
  }

  function closeModal() {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";

    setTimeout(() => {
      modal.classList.remove("_show");
    }, 300);
  }

  function clickOutside({ target }) {
    const targetElement = target;
    if (!targetElement.closest(".modal")) {
      closeModal();
    }
  }

  openButton.addEventListener("click", openModal);
  [closeButton, modalButton].forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  modal.addEventListener("click", (event) => clickOutside(event));
});
