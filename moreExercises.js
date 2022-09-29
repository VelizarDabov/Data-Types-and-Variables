function nextDay(year, month, day) {
    let nextDay = new Date(year, month - 1, day + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2016, 9, 30)
/*
function nextDay(day){
    let today = new Date(day);
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000))
    console.log(tomorrow);
}
nextDay(2016, 9, 30)

/*
function solve(num) {
 
    let lastDigit = num % 10;
 
    if (lastDigit < 0) {
        lastDigit = Math.abs(lastDigit);
    }
 
    let englishName = '';
 
    switch (lastDigit) {
        case 0:
            englishName = 'zero';
            break;
 
        case 1:
            englishName = 'one';
            break;
 
        case 2:
            englishName = 'two';
            break;
 
        case 3:
            englishName = 'three';
            break;
 
        case 4:
            englishName = 'four';
            break;
 
        case 5:
            englishName = 'five';
            break;
 
        case 6:
            englishName = 'six';
            break;
 
        case 7:
            englishName = 'seven';
            break;
        case 8:
            englishName = 'eight';
            break;
 
        case 9:
            englishName = 'nine';
            break;
    }
 
    console.log(englishName);
}
solve()

/*
function sortNumbers(firstNum, secondNum, thirdNum) {
    let arrayNumbers = [];
    arrayNumbers.push(firstNum, secondNum, thirdNum);
    let sorted = arrayNumbers.sort((a, b) => b - a);
    console.log(sorted.join('\n'));
}
sortNumbers(2, 1, 3)
*/