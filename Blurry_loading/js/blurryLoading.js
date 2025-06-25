let background;
let loadingText;

let interval;
let loadingPercentage = 0;

function main() {
  getElements();
  handleBlurring();
};

function getElements() {
  background = document.querySelector(".background");
  loadingText = document.querySelector(".loading-text");
};

function handleBlurring() {
  interval = setInterval(count, 40);
}

function count() {
  loadingPercentage += 1;
  loadingText.textContent = `${loadingPercentage}%`;
  background.style.filter = `blur(${100 - loadingPercentage}px)`;
  loadingText.style.opacity = 1 - (loadingPercentage / 100); /* musi iść od 1 do 0 */

  if (loadingPercentage > 99) clearInterval(interval);
}

document.addEventListener("DOMContentLoaded", main);