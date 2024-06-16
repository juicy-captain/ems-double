document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal-overlay") as HTMLDivElement;
  const closeButton = document.querySelector(
    ".modal__close",
  ) as HTMLButtonElement;
  const modalButton = document.querySelector(
    ".modal__button",
  ) as HTMLButtonElement;
  const openButton = document.querySelector("._openModal") as HTMLButtonElement;

  function openModal(): void {
    modal.classList.add("_show");

    setTimeout(() => {
      modal.style.opacity = "1";
      modal.style.visibility = "visible";
    }, 300);
  }

  function closeModal(): void {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";

    setTimeout(() => {
      modal.classList.remove("_show");
    }, 300);
  }

  function clickOutside({ target }: MouseEvent): void {
    const targetElement: HTMLElement = target as HTMLElement;
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
