/*
//1 
function echoType(value){
    console.log(typeof value);
    if (typeof value == 'string' || typeof value == 'number') {
        console.log(value);
    }else{
        console.log('Parameter is not suitable for printing');
    }
}
echoType(0)

//2
function concatenateName(firstName, lastName, symbol){
let solve = firstName + symbol + lastName;
console.log(solve);
}
concatenateName('John', 'Smith', '->')

//3
function solve(string, char, result){
    let res = string.replace("_", char);
    if(res === result){
console.log('Matche');
    }else{
        console.log("Not Matched");
    }
}
solve('Str_ng', 'I',

'Strong')

//4
function solve(first, second, third){
    let sum = first + second + third;
    let type = "";
    if(Number.isInteger(sum)){
        type = 'Integer'
    }else{
        type = 'Float'
    }
    console.log(`${sum} - ${type}`);
}
solve(9, 100, 1.1)

function magicNumber(num){
  num = num.toString();
  let sum = 0;

  for(let i = 0; i < num.length; i++){
    sum += Number(num[i]);
  }
  let result = sum.toString().includes('9');
  console.log(result ? `${num} Amazing? True`: `${num} Amazing False`);
}
magicNumber(1233)

//6
function gramophone(bandName, albumName, songName){
let time = (albumName.length * bandName.length) * songName.length / 2;
let rotate = Math.ceil(time / 2.5)
console.log(`The plate was rotated ${rotate} times.`);
}
gramophone('Black Sabbath', 'Paranoid',

'War Pigs')


//7
function requireReading(numPages, readPagesPerHour, numOfDays){
    let timeReading = numPages / readPagesPerHour;
    let totalTime = timeReading / numOfDays; 
console.log(totalTime);
}
requireReading(212,

    20 ,
    
    2)
    

    //8
    function centuriesToMinutes(centuries){
       let years = centuries * 100;
       let days = Math.trunc(years * 365.2422);
       let hours = days * 24;
       let minutes = hours * 60;
       console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes` );
    }
    centuriesToMinutes(5)
    

//9

function solve(num) {
    let sum = 0;
    let result = '';
    for (let i = 1; i <= num; i++) {
        i = i.toString();
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        result =
            sum === 5 ||
            sum === 7 ||
            sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }
}
*/
//10
function trippleLetters(n) {
    for(let i = 0; i < n; i++){
        let firstLetter = String.fromCharCode(i + 97);
        for(let j = 0; j < n; j++){
            let secondLetter = String.fromCharCode(j + 97);
            for(let k = 0; k < n; k++){
                let thirdLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
//   for (let i = 97; i < 97 + n; i++) {
//       let firstLetter = String.fromCharCode(i);
//     for (let j = 97; j < 97 + n; j++) {
//         let secondLetter = String.fromCharCode(j);
//       for (let k = 97; k < 97 + n; k++) {
//         let thirdLetter = String.fromCharCode(k);
//         console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
//       }
//     }
//   }
}
 
trippleLetters(3);