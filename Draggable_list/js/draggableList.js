let boxes;
let presentsBox;
let chosenBox;
let presents;
let wrapperLink;

function main() {
  getElements();
  addListeners();
};

function getElements() {
  boxes = document.querySelectorAll(".wrapper__container");
  presentsBox = document.querySelector(".wrapper__container--ready");
  chosenBox = document.querySelector(".wrapper__container--dropbox");
  presents = document.querySelectorAll(".wrapper__list-item");
  wrapperLink = document.querySelector(".wrapper__link");
};

function addListeners() {
  presents.forEach((present) => present.addEventListener("dragstart", () => startDragging(present)));
  presents.forEach((present) => present.addEventListener("dragend", () => stopDragging(present)));
  boxes.forEach((box) => box.addEventListener("dragover", (event) => moveItem(box, event)));
};

const startDragging = (present) => {
  present.classList.add("wrapper__present--dragging");
}

const stopDragging = (present) => {
  present.classList.remove("wrapper__present--dragging");
}

const moveItem = (box, event) => {
  event.preventDefault();

  const draggedPresent = document.querySelector(".wrapper__present--dragging");
  box.appendChild(draggedPresent);

  handlePresents();
}

const handlePresents = () => {
  const presentsReady = presentsBox.querySelectorAll(".wrapper__list-item");

  if (chosenBox.childElementCount === 3) {
    presentsReady.forEach((presentReady) => {
      presentReady.setAttribute("draggable", "false");
      presentReady.firstElementChild.classList.add("wrapper__present--disabled");
    });

    wrapperLink.classList.remove("wrapper__link--disabled");
    wrapperLink.setAttribute("aria-diabled", "false");
  } else {
    presentsReady.forEach((presentReady) => {
      presentReady.setAttribute("draggable", "true");
      presentReady.firstElementChild.classList.remove("wrapper__present--disabled");
    });

    wrapperLink.classList.add("wrapper__link--disabled");
    wrapperLink.setAttribute("aria-diabled", "true");
  }
}

document.addEventListener("DOMContentLoaded", main);