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
  const cursorY = event.pageY; // `event.pageY` to odległość kursora od górnej krawędzi strony
  const cursorX = event.pageX; // `event.pageX` to odległość kursora od lewej krawędzi strony

  const btnOffsetTop = event.target.offsetTop; // `event.target.offsetTop` to odległość górnej krawędzi elementu od górnej krawędzi strony
  const btnOffsetLeft = event.target.offsetLeft; // `event.target.offsetLeft` to odległość lewej krawędzi elementu od lewej krawędzi strony

  const top = cursorY - btnOffsetTop;
  const left = cursorX - btnOffsetLeft;

  const circle = document.createElement("span");
  circle.classList.add("button__circle");
  circle.style.setProperty("--top", `${top}px`);
  circle.style.setProperty("--left", `${left}px`);
  // Dodaj do DOM-u
  event.target.appendChild(circle);
  // Usuń z DOM-u po zakończeniu animacji
  event.target.addEventListener("animationend", () => circle.remove());
}

window.addEventListener("DOMContentLoaded", main);