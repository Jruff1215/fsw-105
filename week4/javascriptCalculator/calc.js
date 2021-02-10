var readlineSync = require("readline-sync");
var firstNumber = readlineSync.questionInt("Please enter your first number: ");
var secondNumber = readlineSync.questionInt("Please enter your second number: ");
var enteredOperator = readlineSync.question("Please enter the operation to perform? Enter add, subtract, multiply, divide: ")

function addTwoNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

 function subtractTwoNumbers(firstNumber, secondNumber){
     return firstNumber - secondNumber;
 }

 function multiplyTwoNumbers(firstNumber, secondNumber){
     return firstNumber * secondNumber;
 }

 function divideTwoNumbers(firstNumber, secondNumber){
     return firstNumber / secondNumber;
 }
function myCalculator(firstNumber, secondNumber, enteredOperator){
if (enteredOperator == "add") {
    console.log(" Addition of Number-1: " + firstNumber + " with Number-2: " + secondNumber + " gives you a result of: " + addTwoNumbers(firstNumber, secondNumber));
    }
else if (enteredOperator == "subtract"){
    console.log(" Subtraction of Number-1: " + firstNumber + " with Number-2: " + secondNumber + " gives you a result of: " + subtractTwoNumbers(firstNumber, secondNumber));
}
else if (enteredOperator == "multiply"){
    console.log(" Multiplication of Number-1: " + firstNumber + " with Number-2: " + secondNumber + " gives you a result of: " + multiplyTwoNumbers(firstNumber, secondNumber));
}
else if (enteredOperator == "divide"){
    console.log(" Division of Number-1: " + firstNumber + " with Number-2: " + secondNumber + " gives you a result of: " + divideTwoNumbers(firstNumber, secondNumber));
}
else {
    console.log(" Error!! Operation not recognized. Please try again!");
}
}
myCalculator(firstNumber, secondNumber, enteredOperator);
