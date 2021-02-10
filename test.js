var readlineSync = require("readline-sync");
var firstNumber = readlineSync.questionInt("Please enter your first number: ");
var secondNumber = readlineSync.questionInt("Please enter your second number: ");
var enteredOperator = readlineSync.question("Please enter the operation to perform? Enter add, subtract, multiply, divide: ")

if (enteredOperator === "+") {
    return firstNumber + secondNumber;
}
else if (enteredOperator === "-") {
   return firstNumber - secondNumber;
}
else if (enteredOperator === "*") {
   return firstNumber * secondNumber;
}
else if (enteredOperator === "/") {
   return firstNumber / secondNumber;
}
else {
   return "Error!"
}