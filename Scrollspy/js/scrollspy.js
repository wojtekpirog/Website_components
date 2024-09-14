const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar__link");
const scrollSpySections = document.querySelectorAll(".section");

const linkToLastSection = navbarLinks[navbarLinks.length - 1];
const navbarHeight = navbar.offsetHeight;

console.log(linkToLastSection);

const handleScrollSpy = () => {
  // Zabezpieczenie: chcemy, aby scrollspy był aktywny tylko wtedy, gdy jestesmy na stronie głównej
  if (document.body.classList.contains("main-page")) {
    const sections = [];

    scrollSpySections.forEach((scrollSpySection) => {      
      if (window.scrollY <= scrollSpySection.offsetTop + scrollSpySection.offsetHeight - navbarHeight) {
        sections.push(scrollSpySection);

        const linkToActiveSection = document.querySelector(`a[href*="${sections[0].id}"]`);

        navbarLinks.forEach((navbarLink) => navbarLink.classList.remove("navbar__link--active"));
        linkToActiveSection.classList.add("navbar__link--active");
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        navbarLinks.forEach((navbarLink) => navbarLink.classList.remove("navbar__link--active"));
        linkToLastSection.classList.add("navbar__link--active");
      }
    });
  }
}

// `clientHeight` zwraca wysokość elementu w px, wraz z paddingiem, ale bez obramowania (border) ani marginesu.
// `offsetHeight` zwraca wysokość elementu w px, wraz z paddingiem, obramowaniem (border), ale bez marginesu.

window.addEventListener("scroll", handleScrollSpy); 