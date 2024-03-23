function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let inputValue = null;

input.addEventListener("change", (event) => {
  inputValue = event.currentTarget.value;
});

createButton.addEventListener("click", (event) => {
  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
    input.value = "";
    inputValue = null;
  }
});

destroyButton.addEventListener("click", (event) => {
  destroyBoxes();
});

function createBoxes(amount) {
  boxes.innerHTML = "";

  let boxWidth = 30;
  let boxHeight = 30;

  for (let i = 0; i < amount; i++) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color: ${getRandomHexColor()}; width: ${boxWidth}px; height: ${boxHeight}px"></div>`
    );
    boxWidth += 10;
    boxHeight += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
