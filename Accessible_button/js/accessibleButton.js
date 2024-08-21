let button;

const main = () => {
  prepareDOMElements();
  addListeners();
}

const prepareDOMElements = () => {
  button = document.querySelector(".button");
}

const addListeners = () => {
  button.addEventListener("click", runAnimation);
}

const runAnimation = (event) => {
  // Position of the cursor on the viewport
  const horizontalPosition = event.clientY;
  const verticalPosition = event.clientX;
  // Position of the button on the viewport
  const buttonTopPosition = event.target.offsetTop;
  const buttonLeftPosition = event.target.offsetLeft;

  const insideButtonTop = horizontalPosition - buttonTopPosition;
  const insideButtonLeft = verticalPosition - buttonLeftPosition;

  const buttonCircle = document.createElement("span");
  buttonCircle.classList.add("button__circle");
  buttonCircle.style.top = `${insideButtonTop}px`;
  buttonCircle.style.left = `${insideButtonLeft}px`;
  buttonCircle.style.animationDuration = "300ms";
  buttonCircle.style.animationDelay = "100ms";

  event.target.appendChild(buttonCircle);

  const indexOfMsForDelay = buttonCircle.style.animationDelay.indexOf("ms");
  const animationDelay = Number(buttonCircle.style.animationDelay.slice(0, indexOfMsForDelay));

  const indexOfMsForDuration = buttonCircle.style.animationDuration.indexOf("ms");
  const animationDuration = Number(buttonCircle.style.animationDuration.slice(0, indexOfMsForDuration));

  setTimeout(() => buttonCircle.remove(), animationDelay + animationDuration);
}

window.addEventListener("DOMContentLoaded", main);