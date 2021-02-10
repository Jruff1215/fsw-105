const readlineSync = require("readline-sync");
var playerName = readlineSync.question("Player, Please Enter Your Name: ");
var welcomeMessage = `Hello ${playerName}, Welcome to THE ESCAPE ROOM!`;
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;
while(isAlive == true){
    const menuOptions = readlineSync.keyIn("Enter 1 to Put your hand in the hole \n Enter 2 to Find the key \n Enter 3 to Open the door ", {limit: `$<1-3>`});
console.log(menuOptions);
if(menuOptions == 1){
    console.log(`${playerName}, Oh nooo, YOU ARE DEAD...GAMEOVER!!`);
    isAlive = false;
}
else if(menuOptions == 2 && hasKey == false) {    
    console.log(`${playerName}, you have found the key successfully!`);
    hasKey = true;
}
else if(menuOptions == 2 && hasKey == true) {
    console.log(`${playerName}, Hey!! You have already found the key, stop messing around and click Option 3`);
}
else if(menuOptions == 3 && hasKey == false) {
    console.log(`${playerName}, Sorry, You don't have the key, please find the key to proceed.`);
}
else if(menuOptions == 3 && hasKey == true) {
    console.log(`${playerName}, Congratulations!! You've escaped the room successfully by finding the key and opening the door.`);
    isAlive = false;
}
}