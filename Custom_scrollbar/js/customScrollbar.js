let root;
let scrollToTopButton;

function main() {
  getElements();
  addListeners();
};

function getElements() {
  root = document.documentElement;
  scrollToTopButton = document.querySelector(".scroll-to-top");
};

function addListeners() {
  scrollToTopButton.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", handleScroll);
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  const maxScrollY = root.scrollHeight - root.clientHeight;
  const scrollPercentage = Math.round((currentScrollY / maxScrollY) * 100);

  if (scrollPercentage >= 25) {
    scrollToTopButton.classList.add("active");
  } else {
    scrollToTopButton.classList.remove("active");
  }

  root.style.setProperty("--scroll-width", `${scrollPercentage}%`);
}

const scrollToTop = () => {
  window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", main);