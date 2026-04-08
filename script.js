let photos = [
  "img/rome2026/1.jpg",
  "img/rome2026/2.jpg",
  "img/rome2026/3.jpg"
];

let index = 0;

function nextPhoto() {
  index = (index + 1) % photos.length;
  document.getElementById("mainPhoto").src = photos[index];
}

function prevPhoto() {
  index = (index - 1 + photos.length) % photos.length;
  document.getElementById("mainPhoto").src = photos[index];
}

/* Бургер */
function toggleMenu() {
  let menu = document.getElementById("sideMenu");
  menu.style.left = menu.style.left === "0px" ? "-260px" : "0px";
}

/* Открытие темы */
function openTopic(topicName) {
  window.location.href = topicName + ".html";
}
