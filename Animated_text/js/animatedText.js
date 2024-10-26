const openModalButton = document.querySelector(".modal-button");
const modal = document.querySelector(".modal");
const modalInput = modal.querySelector(".modal-input");
const modalError = modal.querySelector(".error-message");
const closeModalButton = modal.querySelector(".modal-save-button");
const text = document.querySelector(".text");

inputValue = undefined;
let timeout = undefined;
let index = 1;
let speed = 100; // 100 milliseconds of animation speed

function printText(inputValue) {
  text.textContent = inputValue.slice(0, index);
  index += 1;
  
  if (index > inputValue.length) return;
  timeout = setTimeout(() => printText(inputValue), speed);
}

function openModal() {
  modal.classList.add("modal--active");
}

function runAnimation() {
  index = 1;
  inputValue = modalInput.value;
  
  if (!inputValue) {
    modalError.textContent = "Wprowadź tekst";
  } else {
    clearModal();
    printText(inputValue);
    modal.classList.remove("modal--active");
  }
}

function clearModal() {
  modalError.textContent = "";
  modalInput.value = "";
}

function closeModal() {
  clearTimeout(timeout);
  runAnimation();
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);