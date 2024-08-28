let formPages;
let steps;
let progressBar;
let prevFormBtn;
let nextFormBtn;

// Zmienna globalna przechowująca numer aktualnego formularza
let currentForm = 1;

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

const handlePrevFormBtn = () => {
  currentForm -= 1;
  currentForm < 1 ? currentForm = 1 : false;
  handleProgressBar();
}

const handleNextFormBtn = () => {
  currentForm += 1; // Zwiększ numer aktualnego formularza o 1
  currentForm > formPages.length ? currentForm = formPages.length : false;
  handleProgressBar();
}

const handleBtnDisabled = () => {
  if (currentForm === 1) {
    prevFormBtn.disabled = true;
  } else if (currentForm === formPages.length) {
    nextFormBtn.disabled = true;
  } else {
    prevFormBtn.disabled = false;
    nextFormBtn.disabled = false;
  }
}

const handleForm = () => {
  formPages.forEach((page) => {
    const formNumber = parseInt(page.dataset.number);
    
    if (formNumber === currentForm) {
      page.classList.add(".app__page--active");
    } else {
      page.classList.remove(".app__page--active");
    }
  });
}

const handleProgressBar = () => {
  steps.forEach((step, index) => {
    const currentStep = index + 1;
    currentStep <= currentForm ? step.classList.add("app__step--active") : step.classList.remove("app__step--active");
  });

  const activeSteps = document.querySelectorAll(".app__step--active");
  progressBar.style.width = (activeSteps.length - 1) / (steps.length - 1) * 100 + "%";
  handleBtnDisabled();
  handleForm();
}

document.addEventListener("DOMContentLoaded", main);