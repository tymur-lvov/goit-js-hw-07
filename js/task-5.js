function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");

colorButton.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = body.style.backgroundColor;
});
