let carousel;
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
  carousel = document.querySelector(".wrapper__list");
  firstCard = document.querySelector(".wrapper__carrousel-card");
  arrowButtons = document.querySelectorAll(".wrapper__button");
  allCarouselCards = [...carousel.firstElementChild.children];

  cardWidth = firstCard.offsetWidth + 16;
};

function addListeners() {
  carousel.addEventListener("mousemove", dragSlider);
  carousel.addEventListener("mousedown", startDragging);
  arrowButtons.forEach((button) => button.addEventListener("click", handleArrowButton));
  document.addEventListener("mouseup", stopDragging);
}

const startDragging = (event) => {
  isDragging = true;
  carousel.classList.add("wrapper__list--dragging");
  // Record the initial cursor and scroll position of the carousel
  cursorPosition = event.pageX; // Ustawiam pozycję kursora, w której przewijanie się rozpoczęło
  startScrollLeft = carousel.scrollLeft; // Ustawiam wstępną pozycję przewijania
}

const dragSlider = (event) => {
  if (!isDragging) return;
  // Update the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (event.pageX - cursorPosition);
}

const stopDragging = () => {
  isDragging = false;
  carousel.classList.remove("wrapper__list--dragging");
}

const handleArrowButton = (event) => {
  const arrowButton = event.currentTarget;

  carousel.scrollLeft = arrowButton.classList[1] === "wrapper__button--left"
    ? carousel.scrollLeft - cardWidth
    : carousel.scrollLeft + cardWidth;
}

const handleAutoplay = () => {
  let cardsPerView = Math.round(carousel.offsetWidth / cardWidth);
  
  allCarouselCards.slice(0, -cardsPerView).reverse().forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

  allCarouselCards.slice(0, cardsPerView).reverse().forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });
}

document.addEventListener("DOMContentLoaded", main);