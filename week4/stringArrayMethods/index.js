function capitalizeAndLowercase(b, c){
    return b + c
}
var a ="Hello"
var b = a.toUpperCase();
var c = a.toLowerCase();
console.log(b + " " + c);
capitalizeAndLowercase(b, c)

function findMiddleIndex(i){
    return Math.floor(i)
}
var i = 10.5
console.log(Math.floor(i));
findMiddleIndex(i);

function slice(d, l) {
    return l
}
var d = "Hello World";
var l = (d.slice(0, 5));
console.log(l);
slice(l);

function capitalAndLowercase(g, i){
    return g + i
}
var e = "Hello World"
var f = e.slice(0, 5);
var g = f.toUpperCase();
var h = e.slice(5, 11);
var i = h.toLowerCase();

console.log(g + i);
capitalAndLowercase(g, i)