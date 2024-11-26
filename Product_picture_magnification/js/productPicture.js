let productImage;

function main() {
  getElements();
  addListeners();
};

function getElements() {
  productImage = document.querySelector(".image-box__image");
};

function addListeners() {
  productImage.addEventListener("mouseover", zoomProductImage);
  productImage.addEventListener("mousemove", handleMouseMove);
  productImage.addEventListener("mouseout", unzoomProductImage);
};

const handleMouseMove = (event) => {
  const newX = event.clientX - productImage.offsetLeft;
  const newY = event.clientY - productImage.offsetTop;

  productImage.style.setProperty("--transform-origin-x", `${newX}px`);
  productImage.style.setProperty("--transform-origin-y", `${newY}px`);
}

const zoomProductImage = () => {
  productImage.classList.add("image-box__image--zoom");
}

const unzoomProductImage = () => {
  productImage.classList.remove("image-box__image--zoom");
}

document.addEventListener("DOMContentLoaded", main);
// `clientX` i `clientY` pobierają pozycję kursora względem widocznego obszaru przeglądarki (viewport)
// `pageX` i `pageY` pobierają pozycję kursora względem całego dokumentu, a nie tylko widocznego obszaru, a więc uwzględniają wartość przewinięcia strony