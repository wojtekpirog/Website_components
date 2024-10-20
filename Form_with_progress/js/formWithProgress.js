let formPages;
let steps;
let progressBar;
let prevFormBtn;
let nextFormBtn;

// Zmienna globalna przechowująca numer aktualnego formularza
let currentStep = 1;

const main = () => {
  prepareDomElements();
  addListeners();
}

const prepareDomElements = () => {
  formPages = document.querySelectorAll(".app__page");
  steps = document.querySelectorAll(".app__step");
  progressBar = document.querySelector(".app__progress-bar");
  prevFormBtn = document.querySelector(".app__button--prev");
  nextFormBtn = document.querySelector(".app__button--next");
}

const addListeners = () => {
  prevFormBtn.addEventListener("click", handlePrevFormBtn);
  nextFormBtn.addEventListener("click", handleNextFormBtn);
}

const handleNextFormBtn = () => {
  currentStep += 1;
  currentStep > formPages.length && (currentStep = formPages.length);
  handleProgress();
}

const handlePrevFormBtn = () => {
  currentStep -= 1;
  currentStep < 1 && (currentStep = 1);
  handleProgress();
}

const handleProgress = () => {
  handleForm();
  handleProgressBar();
  handleBtnDisabled();
}

const handleForm = () => {
  formPages.forEach((page, index) => {
    if (currentStep === index + 1) {
      page.classList.add("app__page--active");
      page.setAttribute("aria-current", "page");
    } else {
      page.classList.remove("app__page--active");
      page.removeAttribute("aria-current");
    }
  });
}

const handleProgressBar = () => {
  steps.forEach((step, index) => { 
    currentStep === index + 1
      ? step.setAttribute("aria-current", "step")
      : step.removeAttribute("aria-current"); 

    currentStep >= index + 1
      ? step.classList.add("app__step--active")
      : step.classList.remove("app__step--active"); 
      
    progressBar.style.setProperty("--progress", `${(currentStep - 1) / (steps.length - 1) * 100}%`);
  });
}

const handleBtnDisabled = () => {
  if (currentStep === 1) {
    prevFormBtn.disabled = true;
  } else if (currentStep === formPages.length) {
    nextFormBtn.disabled = true;
  } else {
    prevFormBtn.disabled = false;
    nextFormBtn.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", main);