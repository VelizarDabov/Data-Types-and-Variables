//1 Sum digits
function solve(number) {
  let numberAsString = number.toString();
  let sum = 0;
  let numberOfDigits = numberAsString.length;

  for (let i = 0; i < numberOfDigits; i++) {
    let currentNumber = Number(numberAsString[i]);
    sum += currentNumber;
  }
  console.log(sum);
}
solve(245678);

//02.Chars to String
function solve(first, second, last) {
  console.log(first + second + last);
}
solve("a", "b", "c");

//03.Town Info
function solve(name, population, area) {
  console.log(
    `Town ${name} has population of ${population} and area ${area} square km.`
  );
}
solve("Sofia", 1286383, 492);

//04. Convert Meters to Kilometres
function solve(meters) {
  let result = meters / 1000;
  console.log(result.toFixed(2));
}
solve(1852);

//05. Pounds to Dollars
function solve(pounds) {
  const poundsToDolars = 1.31;
  let result = pounds * poundsToDolars;
  console.log(result.toFixed(3));
}
solve(80);

//06.Reversed Chars
function solve(first, second, last) {
  console.log(`${last} ${second} ${first}`);
}
solve("A", "B", "C");

//07. Lower or Upper
function solve(char) {
  let asciiValue = char.charCodeAt();
  if (asciiValue >= 65 && asciiValue <= 90) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}
solve("L");
