// var => we can redeclare and reassign ✅
// let => we cannot redeclare but can reassign ✅
// const => we cannot redeclare nor reassign ✅

var a = 10;

var a; // declaration
a = 10; // assignment

//var => reassign
var a = 10;
a = 11;
console.log(a); // 11

//redeclare
var a = 11;
var a = 12;
console.log(a); //12

//let  => reassign
let b = 10;
b = 11;
console.log(b); // 11

//let  => redeclare
// let c = 11;
// let c = 12;
// console.log(c); //Uncaught SyntaxError: Identifier 'c' has already been declared

//const => reassign
// const x = 10;
// x = 11;
// console.log(x); //Uncaught TypeError: Assignment to constant variable.

//const => redeclare
// const z = 10;
// const z = 11;
// console.log(z); //Uncaught SyntaxError: Identifier 'z' has already been declared

console.log(g);
//1000 lines
var g = 5; //undefined

console.log(f); //Uncaught ReferenceError: Cannot access 'f' before initialization
let f = 5;

// var  => global scope
// let , const  => block scope = {}

var a = 10;
a = 11;
console.log(a);
