let allSections;
let navbarLinks;

const options = {
  threshold: [0.75, 0.9]
}

const main = () => {
  prepareDOMElements();
  handleScrollSpy();
}

const prepareDOMElements = () => {
  allSections = document.querySelectorAll(".section");
  navbarLinks = document.querySelectorAll(".navbar__link");
}

const handleScrollSpy = () => {
  // Check if 'IntersectionObserver' is supported
  if ('IntersectionObserver' in window) {
    // Create an 'IntersectionObserver' instance
    const observer = new IntersectionObserver(inView, options);
    // Observe each section
    allSections.forEach((section) => observer.observe(section));
  }
}

const inView = (entries) => {
  entries.forEach((entry) => {
    const activeNavLink = document.querySelector(`a[href="#${entry.target.id}"]`);

    if (entry.isIntersecting) {
      navbarLinks.forEach((navbarLink) => navbarLink.classList.remove("navbar__link--active"));
      activeNavLink.classList.add("navbar__link--active");
    }
  });
}

document.addEventListener("DOMContentLoaded", main);