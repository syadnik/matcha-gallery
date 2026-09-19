const cafes = [
  {
    name: "Rok Tea and Coffee",
    drink: "Matcha Duo",
    location: "Koreatown"
  },
  {
    name: "Archives of Us",
    drink: "Matcha Einspanner",
    location: "Downtown LA"
  },
  {
    name: "MemoryLook",
    drink: "Matcha Einspanner",
    location: "Koreatown"
  },
  {
    name: "Stagger",
    drink: "Matcha Duo",
    location: "Koreatown"
  },
  {
    name: "Stereoscope",
    drink: "Matcha Einspanner",
    location: "West Hollywood"
  },
  {
    name: "Cafe Dulce",
    drink: "Matcha Latte",
    location: "USC Village"
  },
  {
    name: "Saero",
    drink: "Matcha Latte",
    location: "Downtown LA"
  },
  {
    name: "Bonsai",
    drink: "Matcha Latte",
    location: "Sawtelle"
  },
  {
    name: "DAMO",
    drink: "Matcha Einspanner",
    location: "Koreatown"
  },
  {
    name: "Maruwu Seicha",
    drink: "Matcha Creamtop Latte",
    location: "Culver City"
  }
];

const matchaButton = document.getElementById("matcha-button");
const recommendationText = document.getElementById("recommendation");

function recommendCafe() {
  const randomNumber = Math.floor(Math.random() * cafes.length);
  const cafe = cafes[randomNumber];

  recommendationText.textContent =
    `Try the ${cafe.drink} at ${cafe.name} in ${cafe.location}!`;

  confetti({
    particleCount: 70,
    spread: 65,
    origin: { y: 0.7 },
    colors: ["#769763", "#355536", "#a8bd83", "#efb6b2"]
  });
}

matchaButton.addEventListener("click", recommendCafe);

