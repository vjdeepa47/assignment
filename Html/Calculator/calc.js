function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  let expression = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(expression);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (/[0-9\+\-\*\/]/.test(key)) {
    addToDisplay(key);
  } else if (key === "Enter") {
    calculateResult();
  }
});