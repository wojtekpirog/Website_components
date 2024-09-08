let slider;
let sliderImages;
let sliderBox;
let prevSlideBtn;
let nextSlideBtn;

let sliderWidth;
let carouselSpeed = 3000;
let imgIndex = 0;

const main = () => {
  prepareDOMElements();
  addListeners();
  getSliderWidth();
  handleCarousel();
}

const prepareDOMElements = () => {
  slider = document.querySelector(".app__slider");
  sliderImages = document.querySelectorAll(".app__slider-image");
  sliderBox = document.querySelector(".app__slider-box");
  prevSlideBtn = document.querySelector(".app__button--prev");
  nextSlideBtn = document.querySelector(".app__button--next");
}

const addListeners = () => {
  prevSlideBtn.addEventListener("click", handlePrevSlideBtn);
  nextSlideBtn.addEventListener("click", handleNextSlideBtn);
}

const getSliderWidth = () => {
  sliderWidth = window.getComputedStyle(slider).width;
  sliderWidth = Number(sliderWidth.slice(0, sliderWidth.length - 2));
  console.log(sliderWidth);
}

const handleCarousel = () => {
  imgIndex += 1;
  changeImage();
}

const changeImage = () => {
  if (imgIndex > sliderImages.length - 1) {
    imgIndex = 0;
  } else if (imgIndex < 0) {
    imgIndex = sliderImages.length - 1;
  }

  sliderBox.style.transform = `translateX(-${sliderWidth * imgIndex}px)`;
}

const resetInterval = () => {
  clearInterval(startCarousel);
  startCarousel = setInterval(handleCarousel, carouselSpeed);
}

const handlePrevSlideBtn = () => {
  imgIndex -= 1;
  changeImage();
  resetInterval();
}

const handleNextSlideBtn = () => {
  imgIndex += 1;
  changeImage();
  resetInterval();
}

let startCarousel = setInterval(handleCarousel, carouselSpeed);

document.addEventListener("DOMContentLoaded", main);