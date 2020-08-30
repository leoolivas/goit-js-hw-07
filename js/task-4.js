const buttonIncrement = document.querySelector("[data-action='increment']");
const buttonDecrement = document.querySelector("[data-action='decrement']");

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById("value").textContent = counterValue;
};
buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);
