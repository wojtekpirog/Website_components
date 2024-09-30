const cookieBox = document.querySelector(".cookie-box");
const cookieButton = document.querySelector(".cookie-box__button");

const showCookieAlert = () => {
  const cookieEaten = localStorage.getItem("cookie");
  console.log(cookieEaten);

  if (cookieEaten) {
    cookieBox.classList.add("cookie-box--hidden");
  }
}

const handleCookieBox = () => {
  localStorage.setItem("cookie", "true");
  cookieBox.classList.add("cookie-box--hidden");
}

cookieButton.addEventListener("click", handleCookieBox);

showCookieAlert();