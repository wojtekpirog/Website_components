let carouselList;
let firstCard;
let arrowButtons;
let allCarouselCards;

let cardWidth = undefined;

let isDragging = false, cursorPosition, startScrollLeft;

function main() {
  getElements();
  addListeners();
  handleAutoplay();
};

function getElements() {
  carouselList = document.querySelector(".wrapper__list");
  firstCard = document.querySelector(".wrapper__carrousel-card");
  arrowButtons = document.querySelectorAll(".wrapper__button");
  allCarouselCards = [...carouselList.firstElementChild.children];

  cardWidth = firstCard.offsetWidth + 16;
};

function addListeners() {
  carouselList.addEventListener("mousemove", dragSlider);
  carouselList.addEventListener("mousedown", startDragging);
  arrowButtons.forEach((button) => button.addEventListener("click", handleArrowButton));
  document.addEventListener("mouseup", stopDragging);
}

const startDragging = (event) => {
  isDragging = true;
  carouselList.classList.add("wrapper__list--dragging");
  // Record the initial cursor and scroll position of the carouselList
  cursorPosition = event.pageX; // Ustawiam pozycję kursora, w której przewijanie się rozpoczęło
  startScrollLeft = carouselList.scrollLeft; // Ustawiam wstępną pozycję przewijania
}

const dragSlider = (event) => {
  if (!isDragging) return;
  // Update the scroll position of the carouselList based on the cursor movement
  carouselList.scrollLeft = startScrollLeft - (event.pageX - cursorPosition);
}

const stopDragging = () => {
  isDragging = false;
  carouselList.classList.remove("wrapper__list--dragging");
}

const handleArrowButton = (event) => {
  const arrowButton = event.currentTarget;

  carouselList.scrollLeft = arrowButton.classList[1] === "wrapper__button--left"
    ? carouselList.scrollLeft - cardWidth
    : carouselList.scrollLeft + cardWidth;
}

const handleAutoplay = () => {
  let cardsPerView = Math.round(carouselList.offsetWidth / cardWidth);
  
  allCarouselCards.slice(0, -cardsPerView).reverse().forEach((card) => {
    carouselList.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

  allCarouselCards.slice(0, cardsPerView).reverse().forEach((card) => {
    carouselList.insertAdjacentHTML("beforeend", card.outerHTML);
  });
}

document.addEventListener("DOMContentLoaded", main);