function login(input){
let username = input[0]
let index = 1;
index++;
let password = username.split('').reverse().join('');
let failCounter = 0;
let currentPassword = input[index]

while(currentPassword !== password && failCounter < 3){
    failCounter++;
    console.log(`Incorrect password. Try again.`);
    currentPassword = input[index]
    index++;
}
if(currentPassword === password ){
    console.log(`User ${username} logged in.`);
}else{
    console.log(`User ${username} blocked!`);
}
}
login(['Acer','login','go','let me in','rcA'])

