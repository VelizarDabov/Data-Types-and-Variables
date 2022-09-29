function calculator(first, operator, second) {
  switch (operator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "/":
      result = first / second;
      break;
    case "*":
      result = first * second;
      break;
  }
  console.log(result.toFixed(2));
}
calculator(5, "+", 10);
