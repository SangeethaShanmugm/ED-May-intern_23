// = => Assignment
// == => compare the data/value
// === => compare data and datatype

var a = 5;
var b = "5";
var c = 20;

console.log(a == b); // 5 == "5" // true
console.log(a === b); //5 === "5" // true +  false => false

var a = "hii";
var b = "Hii";

console.log(a == b); //false
console.log(a === b); //false

// "hii" ==  "Hii" = false
// "hii" ===  "Hii" = false + true =>  false

a == c; // 5 ==  20 => false

var a = true;
var b = 1;
a == b; //true == 1 => 1 == 1 =>true
a === b; //true === 1 => true + false => false

var a = 10;
var b = 20;

a > b; //  10 > 20 = false
b > a; // 20 > 10 = true

// ! = negation

a != b; // 10 != 20 => true

// true =  true
// false = false
// !true = false
// !false = true

a !== b; // 10 !== 20 => data => !false =>  true

// a !=== b; ❌ //Uncaught SyntaxError: Unexpected token '='

var a = true;
!a; // !true = false

var b = false;
!b; // !false = true

var a = 1;
var b = 0;
!a; //!true = false
!b; // !false = true

var a = -1;
!a; // false
a; // true

// truthy =>  Any number except 0, +ve -ve, true, any string
//falsy => 0, false, null, undefined

var a = "Hii";
a; // true
!a; // false

console.log(typeof null); //object
console.log(typeof undefined); //undefined

console.log(z);
var z = 5;
