//01. Digits with Words
function solve(word) {
  switch (word) {
    case "zero":
      result = 0;

      break;
    case "one":
      result = 1;

      break;
    case "two":
      result = 2;

      break;
    case "three":
      result = 3;

      break;
    case "four":
      result = 4;

      break;
    case "five":
      result = 5;

      break;
    case "six":
      result = 6;

      break;
    case "seven":
      result = 7;

      break;
    case "eight":
      result = 8;

      break;
    case "nine":
      result = 9;

      break;
  }
  console.log(result);
}
solve("nine");

//02. Prime Number Checker
function primeNumber(number) {
  let checkedNumber = number;

  if (checkedNumber % 2 != 1 && checkedNumber % checkedNumber != 1) {
    console.log("false");
  } else {
    console.log("true");
  }
}
primeNumber(7);

//03. Cone
function cone(radius, height) {
  let coneRadius = radius;
  let coneHeight = height;

  let volume = (Math.PI * (coneRadius * coneRadius) * coneHeight) / 3;
  let s = Math.sqrt(coneRadius * coneRadius + coneHeight * coneHeight);
  let totalArea =
    Math.PI *
    coneRadius *
    (coneRadius + Math.sqrt(coneRadius * coneRadius + coneHeight * coneHeight));
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${totalArea.toFixed(4)}`);
}
cone(3, 5);

//4. Biggest of 3 Numbers

function biggestNumber(first, second, last) {
  if (first > second && first > last) {
    console.log(first);
  } else if (second > first && second > last) {
    console.log(second);
  } else if (last > second && last > first) {
    console.log(last);
  }else if (first === second && second === last && first === last){
    console.log(first);
  }
}
biggestNumber(-2, 7, 3);
//5. Binary to Decimal
function binaryToDecimals(number) {
    let numberAsString = number.split("");
    let decimal = 0;
    let power = numberAsString.length - 1;  
    for (let i = 0; i < numberAsString.length; i++) {    
        decimal += Number(numberAsString[i]) * Math.pow(2, power); 
        power--;} 
    console.log(decimal);
}
binaryToDecimals(11110000)