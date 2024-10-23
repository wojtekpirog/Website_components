let slider;
let sliderImages;
let sliderBox;
let prevSlideBtn;
let nextSlideBtn;
let pauseAutoplayBtn;
let resumeAutoplayBtn;

let sliderWidth;
let imgIndex = 0;
let carouselSpeed = 3000;

const main = () => {
  prepareDOMElements();
  addListeners();
  handleCarousel();
}

const prepareDOMElements = () => {
  slider = document.querySelector(".app__slider");
  sliderImages = document.querySelectorAll(".app__slider-image");
  sliderBox = document.querySelector(".app__slider-box");
  prevSlideBtn = document.querySelector(".app__button--prev");
  nextSlideBtn = document.querySelector(".app__button--next");
  pauseAutoplayBtn = document.querySelector(".app__button--stop");
  resumeAutoplayBtn = document.querySelector(".app__button--play");
}

const addListeners = () => {
  prevSlideBtn.addEventListener("click", handlePrevSlideBtn);
  nextSlideBtn.addEventListener("click", handleNextSlideBtn);
  pauseAutoplayBtn.addEventListener("click", pauseAutoplay);
  resumeAutoplayBtn.addEventListener("click", resumeAutoplay);
}

const pauseAutoplay = () => {
  clearInterval(startCarousel);
  pauseAutoplayBtn.style.display = "none";
  resumeAutoplayBtn.style.display = "block";
}

const resumeAutoplay = () => {
  startCarousel = setInterval(handleCarousel, carouselSpeed);
  resumeAutoplayBtn.style.display = "none";
  pauseAutoplayBtn.style.display = "block";
}

const handleCarousel = () => {
  sliderWidth = slider.offsetWidth;
  imgIndex += 1;
  changeImage();
}

const changeImage = () => {
  if (imgIndex > sliderImages.length - 1) {
    imgIndex = 0;
  } else if (imgIndex < 0) {
    imgIndex = sliderImages.length - 1;
  }

  sliderBox.style.setProperty("--offset", `-${sliderWidth * imgIndex}px`);
}

let startCarousel = setInterval(handleCarousel, carouselSpeed);

const handlePrevSlideBtn = () => {
  imgIndex -= 1;
  resetInterval();
}

const handleNextSlideBtn = () => {
  imgIndex += 1;
  resetInterval();
}

const resetInterval = () => {
  changeImage();
  clearInterval(startCarousel);
  startCarousel = setInterval(handleCarousel, carouselSpeed);
}

document.addEventListener("DOMContentLoaded", main);