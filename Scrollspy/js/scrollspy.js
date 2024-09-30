// `clientHeight` zwraca wysokość elementu w px, wraz z paddingiem, ale bez obramowania (border) ani marginesu.
// `offsetHeight` zwraca wysokość elementu w px, wraz z paddingiem, obramowaniem (border), ale bez marginesu.
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar__link");
const scrollSpySections = document.querySelectorAll("section");

const handleScrollSpy = () => {
  // Zabezpieczenie: chcemy, aby scrollspy był aktywny tylko wtedy, gdy jestesmy na stronie głównej
  if (document.body.dataset.mainPage === "true") {

    const matchingSections = []; // tablica zawierająca wszystkie sekcje

    scrollSpySections.forEach((section) => {     
      if (window.scrollY <= section.offsetTop + section.offsetHeight - navbar.offsetHeight) {
        matchingSections.push(section);

        const linkToActiveSection = document.querySelector(`a[href*="${matchingSections[0].id}"]`);

        navbarLinks.forEach((navbarLink) => navbarLink.classList.remove("navbar__link--active"));
        linkToActiveSection.classList.add("navbar__link--active");
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - navbar.offsetHeight) {
        navbarLinks.forEach((navbarLink) => navbarLink.classList.remove("navbar__link--active"));
        navbarLinks[navbarLinks.length - 1].classList.add("navbar__link--active");
      }
    });
  }
}

window.addEventListener("scroll", handleScrollSpy);