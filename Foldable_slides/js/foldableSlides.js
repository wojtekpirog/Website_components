const body = document.body;
const allCards = document.querySelectorAll(".app__card");

function handleCardClick() {
  allCards.forEach((card) => {
    if (card.classList.contains("app__card--active")) card.classList.remove("app__card--active");
    this.classList.add("app__card--active");
    handleBgColor(this);
  });
}

const handleBgColor = (card) => {
  const season = card.dataset.season;
  body.dataset.bg = season;
}

allCards.forEach((card) => card.addEventListener("click", handleCardClick));