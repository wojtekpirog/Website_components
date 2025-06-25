let input;
let button;

function main() {
  getElements();
  addListeners();
};

function getElements() {
  input = document.querySelector(".navbar__search-input");
  button = document.querySelector(".navbar__button");
};

function addListeners() {
  button.addEventListener("click", toggleSearch);
};

const toggleSearch = () => {
  input.classList.toggle("navbar__search-input--inactive");
  // Czy input jest aktywny?
  const isExpanded = !input.classList.contains("navbar__search-input--inactive");
  // Jeśli tak, to udostępnij go czytnikom ekranowym
  if (isExpanded) {
    input.setAttribute("aria-hidden", "false");
    button.setAttribute("aria-expanded", "true");
  } else {
    input.setAttribute("aria-hidden", "true");
    button.setAttribute("aria-expanded", "false");
  }
}

document.addEventListener("DOMContentLoaded", main);