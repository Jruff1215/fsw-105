var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]
if ("Mike" >= 18){
    console.log("Mike is old enough to see Mad Max")
}
else if ("Mike" >= 18 + "male"){
    console.log("Mike is not old enough to see Mad Max, dont let HIM in")
}
else {
    console.log("Mike is not old enough to see Mad Max")
}
var i
for (i =0; i < 101; i++){
    console.log(i)
    i %  2 == 0 ? $Result = "Even" : $Result = "Odd";
    console.log($Result)
}
