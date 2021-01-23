/*
switch (expression)
{
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    ...
    ...
    case valueN:
         statementN;
         break;
    default:
        statementDefault;

}
*/
var i = 9;
switch(i)
{
    case 0:
        console.log("Value of i is zero");
        break;
    case 1:
        console.log("Value of i is one");
        break;
    case 2:
        console.log("Value of i is two");
        break;
    default:
        console.log("Value of i is greater than 2")
}
var day = 3;
var dayName;
switch (day){
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    default:
        dayName = "Invalid Day!";
}
console.log(dayName);

var year = 2017;
var month = 2;
var dayCount;

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
    case 2:
        if ( ((year % 4 ==0) && !(year % 100 == 0)) || (year % 400 == 0) )
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1
}

console.log(dayCount);