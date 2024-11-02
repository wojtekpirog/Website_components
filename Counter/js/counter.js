let counters;
let counterBox;

const observerOptions = {
  rootMargin: "-250px"
}

function main() {
  getElements();
  handleObserver();
};

function getElements() {
  counters = document.querySelectorAll(".box__counter-item-value");
  counterBox = document.querySelector(".box__counter");
};


function runCounter(entries) {
  if (entries[0].isIntersecting) {
    counters.forEach((counter) => updateCounter(counter));
  }
}

function updateCounter(counter) {
  const finalNumber = parseInt(counter.dataset.finalNumber);
  let currentNumber = parseInt(counter.textContent);

  if (currentNumber < finalNumber) {
    counter.textContent = `${currentNumber += (parseInt(finalNumber / 300))}`;
    setTimeout(() => updateCounter(counter), 2);
  }
}

function handleObserver() {
  const observer = new IntersectionObserver(runCounter, observerOptions);
  observer.observe(counterBox);
}

document.addEventListener("DOMContentLoaded", main);