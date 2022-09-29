function spiceMustFlow(spices) {
    let startingYeld = spices;
    let dayCount = 0;
    let produced = 0;
    
    if (startingYeld < 100) {
        console.log(dayCount);
        console.log(produced);
    }else{
    while (spices >= 100) {
        produced += startingYeld - 26;
        startingYeld -= 10;
        dayCount++;
        if(startingYeld < 100){
            break;
        }
    }
    produced -= 26;
    console.log(dayCount);
    console.log(produced);
}
}
spiceMustFlow(100);
