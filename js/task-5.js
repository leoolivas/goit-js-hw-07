const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", function (e) {
  outputName.textContent = e.target.value;
});
