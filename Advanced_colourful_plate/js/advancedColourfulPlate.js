let appBoard;
let speedButtons;
let colorButtons;
let saturationInput;
let saturationPercentage;
let brightnessInput;
let brightnessPercentage;

// A variable holding the number of squares to be created
const squares = 560;
let range = 360;
let speed = 3;
let saturationValue = 70;
let brightnessValue = 50;

const main = () => {
  prepareDOMElements();
  addListeners();
  createSquares();
}

const prepareDOMElements = () => {
  appBoard = document.querySelector(".app__board");
  speedButtons = document.querySelectorAll(".app__button[data-setting='speed']");
  colorButtons = document.querySelectorAll(".app__button[data-setting='color']");
  saturationInput = document.querySelector(".app__slider-input--saturation");
  saturationPercentage = document.querySelector(".app__slider-percentage-saturation");
  brightnessInput = document.querySelector(".app__slider-input--brightness");
  brightnessPercentage = document.querySelector(".app__slider-percentage-brightness");
}

const addListeners = () => {
  colorButtons.forEach((colorButton) => {
    colorButton.addEventListener("click", () => handleSetColor(colorButton));
  });

  speedButtons.forEach((speedButton) => {
    speedButton.addEventListener("click", () => handleSetSpeed(speedButton));
  });

  saturationInput.addEventListener("mousemove", () => {
    saturationValue = saturationInput.value;
    saturationPercentage.textContent = saturationValue;
  });

  brightnessInput.addEventListener("mousemove", () => {
    brightnessValue = brightnessInput.value;
    brightnessPercentage.textContent = brightnessValue;
  });
}

const handleSetColor = (colorButton) => {
  range = parseInt(colorButton.dataset.colorRange);

  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mouseover", () => setColor(square));  
  });
}

const handleSetSpeed = (speedButton) => {
  speed = parseFloat(speedButton.dataset.speed);

  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mouseover", () => setSpeed(square));
  });
}

const createSquares = () => {
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));
    appBoard.appendChild(square);
  }
}

const setColor = (square) => {
  let hue = undefined;

  if (range === 360) { // `normal` mode will generate a random color
    hue = Math.floor(Math.random() * 360);
  } else { // other that `normal` will generate a color in the specified range, for example for `range = 120 (green color)` the hue will be a number between 120 and 179
    hue = Math.floor(Math.random() * 60) + range;
  }

  let saturation = `${saturationValue}%`;
  let brightness = `${brightnessValue}%`;

  square.style.backgroundColor = `hsl(${hue}, ${saturation}, ${brightness})`;
}

const removeColor = (square) => {
  square.style.backgroundColor = "transparent";
}

const setSpeed = (square) => {
  square.style.transitionDuration = `${speed}s`;
}

document.addEventListener("DOMContentLoaded", main);