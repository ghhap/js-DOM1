function calculate(operation) {
  const num1 = document.getElementById("num1").value.trim();
  const num2 = document.getElementById("num2").value.trim();
  const result = document.getElementById("result");
  const error = document.getElementById("error");

  error.textContent = ""; 

  if (num1 === "" || num2 === "") {
    error.textContent = "Будь ласка, введіть обидва числа.";
    result.textContent = "Результат: —";
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    error.textContent = "Введено некоректні дані. Потрібно вводити тільки цифри.";
    result.textContent = "Результат: —";
    return;
  }

  let a = Number(num1);
  let b = Number(num2);
  let res;

  switch (operation) {
    case "+":
      res = a + b;
      break;

    case "-":
      res = a - b;
      break;

    case "*":
      res = a * b;
      break;

    case "/":
      if (b === 0) {
        error.textContent = "Ділити на нуль неможливо!";
        result.textContent = "Результат: —";
        return;
      }

      res = a / b;

      if (!Number.isInteger(res)) {
        res = res.toFixed(2);
      }
      break;
  }

  result.textContent = "Результат: " + res;
}
