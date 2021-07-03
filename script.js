// Selecting all the DOM elements
const containerDiv = document.querySelector(".container");
const btnAdd = document.querySelector(".btn-add");
const btnSubstract = document.querySelector(".btn-substract");
const count = document.querySelector(".count");

// Variables
let countValue = 0;

// Event listeners
btnAdd.addEventListener("click", () => {
  countValue++;
  count.innerHTML = countValue;
});

btnSubstract.addEventListener("click", () => {
  countValue--;
  count.innerHTML = countValue;
});

const init = () => {
  count.innerText = "0";
};

init();
