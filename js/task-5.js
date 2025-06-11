function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector(`.change-color`);
console.log(btnColor);
const spanColor = document.querySelector(`.color`);
console.log(spanColor);
btnColor.addEventListener("click", (handleClick) => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
});
