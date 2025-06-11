const inputName = document.querySelector(`#name-input`);
const spanOutput = document.querySelector(`#name-output`);
console.log(inputName);
console.log(spanOutput);
inputName.addEventListener(`input`, (event) => {
  const trimmed = event.currentTarget.value.trim();
  console.log("", trimmed);
  spanOutput.textContent = trimmed === `` ? `Anonymous` : trimmed;
});
