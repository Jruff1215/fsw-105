const readlineSync = require("readline-sync");

const name = readlineSync.question("Please Enter Your Name ");

const enterGame = readlineSync.question(`Hello ${name}, Welcome to Rosaura Island! Here you'll find treasure and fend off foes. Will You Survive? Press Enter to begin if you dare. `);

const enemies = ["Cheetah", "Panther", "Jaguar", "Anaconda"];
const treasure = ["First Aid", "Food", "Coins", "Water"];
var prize = [];
let hp = 50;
const options = ["Walk", "Exit", "Print"];
let obtained = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (7 - 3 + 2) + 1);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemiesHP = 50;
    const enemyPower = Math.floor(Math.random() * (6 - 5 + 2) + 3);
    
    const index = readlineSync.keyInSelect(options, "How would you like to proceed?");

    if (options[index] == "Exit") {
        return hp = 0;
    }
    else if (options[index] == "Print"){
        console.log(name + "\n HP: " + hp + "\nTreasure: " + obtained);
    }
    else if (options[index] == "Walk"){
        let key = Math.random();
        if (key <= .3) {
            console.log("Walking.....");
        }
        else if (key >= .3){
            console.log("Watch Ouuuut!! " + enemy + " has appeared.");

            while(enemiesHP > 0 && hp > 0) {

            
                
            var player = readlineSync.question("What would you like to do? Enter 'f' to flee or 'a' to attack: ");
               // var player = readlineSync.question("What would you like to do? Enter 'f' to flee or 'a' to attack: ");
                    console.log(player);

                switch (player){
                    case "f":
                        let run = Math.random();
                        if(run < .5){
                            console.log("Before you can flee" + enemy + " attacks you with: " + enemyPower);
                        }
                        else{
                            console.log("You have successfully gotten away");
                            enemiesHP = 0;
                            break;
                        }
                        break;
                    case "a":
                        enemiesHP -= attackPower;
                        console.log("You attacked" + enemy + " with " + attackPower + " attack power" );

                        hp -= enemyPower;
                        console.log("The enemy just attacked you with: " + enemyPower + " attack power");
                    
                        if (enemiesHP <= 0){
                            console.log("You have successfully killed " + enemy + "\n" + enemy + " left " + obtained);
                            let loot = Math.random();
                            if (loot <= .3){
                                prize.push(obtained);
                            }
                        }
                        else if (hp <= 0){
                            console.log(`${enemy} has mauled you. YOU ARE DEAD.`);
                        }
                        break;
                    
                }
            }
        }
    }
}

while(hp > 0){
    hpRestore = function(){
        playerActive = true;
        hp = 40;
  };
  game()
}
