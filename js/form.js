const form = document.getElementById("myForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  messageDiv.style.display = "block";
  messageDiv.textContent =
    "Дякуємо за ваше повідомлення. В найближчий час ми його переглянемо.";

  setTimeout(function () {
    messageDiv.style.display = "none";
  }, 5000); // 5000 мілісекунд = 5 секунд
});
const rangeInput = document.getElementById("range");
const rangeValue = document.getElementById("range-value");

rangeInput.addEventListener("input", function () {
  rangeValue.textContent = rangeInput.value;
});

const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("input", function () {
  let enteredName = this.value.trim();
  let transformedName =
    enteredName.charAt(0).toUpperCase() + enteredName.slice(1).toLowerCase();
  this.value = transformedName;
});
