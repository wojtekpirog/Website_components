let searchInput;
let searchButton;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
}

const prepareDOMElements = () => {
  searchInput = document.querySelector(".navbar__input");
  searchButton = document.querySelector(".navbar__button");
}

const prepareDOMEvents = () => {
  searchButton.addEventListener("click", toggleSearchInput);
}

const toggleSearchInput = () => {
  searchInput.classList.toggle("navbar__input--active");
}

document.addEventListener("DOMContentLoaded", main);