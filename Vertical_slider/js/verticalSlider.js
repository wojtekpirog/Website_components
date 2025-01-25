let sliderContainer;
let leftSlider;
let rightSlider;
let upButton;
let downButton;
let numberOfSlides;

// Active slide's index
let activeSlideIndex = 0;

function main() {
  getElements();
  addListeners();
};

function getElements() {
  sliderContainer = document.querySelector(".slider-container");
  leftSlider = sliderContainer.querySelector(".left-slide");
  rightSlider = sliderContainer.querySelector(".right-slide");
  upButton = sliderContainer.querySelector(".up-button");
  downButton = sliderContainer.querySelector(".down-button");
  numberOfSlides = leftSlider.querySelectorAll(".left-slide-content").length;
};

function addListeners() {
  upButton.addEventListener("click", changeSlide);
  downButton.addEventListener("click", changeSlide);
};

const changeSlide = (event) => {
  const direction = event.target.classList[0];
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === "up-button") {

    activeSlideIndex += 1;

    if (activeSlideIndex > numberOfSlides - 1) {
      activeSlideIndex = 0;
    }

  } else if (direction === "down-button") {

    activeSlideIndex -= 1;

    if (activeSlideIndex < 0) {
      activeSlideIndex = numberOfSlides - 1;
    }

  }

  rightSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  leftSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
}

document.addEventListener("DOMContentLoaded", main);