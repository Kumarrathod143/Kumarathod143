let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function clearLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
