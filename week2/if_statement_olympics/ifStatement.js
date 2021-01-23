var i = 5;

if (i > 3) {
    console.log("is greater than");
}
var cat = 3
var dog = 4
if (cat = 3){
    console.log("is the length");
}
if (cat == dog) {
    console.log("is the same")
}
else {
    console.log("not the same");
}
var person = {
    name: "Bobby",
    age: "12",
}
if (person.age >= 18) {
    console.log("Bobby is allowed to go");
}
else {
    console.log("Bobby is not allowed to go");
}
var value = person.name.startsWith('B');
{
    console.log("Allowed to go because name starts with B");
}
if (person.name.startsWith("B") && (person.age >=18)) {
    console.log("Allowed to go");
}
else {
    console.log("Not allowed to go")
}
var one = 1
if (one == 1) {
    console.log("Strict")
}
one == 1 ? $Result = ("loose or abstract") : $Result = "not equal at all";
console.log($Result);

var one = (1 <= 2 && 2 == 4)
if (one <= 2 , 4) {
    console.log("Yes")
}
dog == "string" ? $Result = "Dog is a string" : $Result = "Dog is not a string";
console.log($Result);

true == "boolean" ? $Result = "True is a Boolean" : $Result = "True is not a Boolean";
console.log($Result);

i !== "defined" ? $Result = "Defined" : $Result = "Undefined";
console.log($Result)

var s = 19
s > 12 ? $Result = "Greater" : $Result = "Not Greater";
console.log($Result)

var myNum = 10
myNum %  2 == 0 ? $Result = "Even" : $Result = "Odd";
console.log($Result)