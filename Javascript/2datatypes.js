// true  = 1
// false = 0

true + true;
// 1 + 1 => 2

true + false;
//1 + 0 => 1

10 + true;
//11

var a = "Hii" + true;
console.log(a); //Hiitrue

"true" + "true";
("truetrue");

"true" - "true"; //NaN

var a = "10";
var b = "20";
a + b;
("1020");

// type casting  => convert from one datatype to another datatype
parseInt(a); // 10
parseInt(b); //20
parseInt(a) + parseInt(b);
//10 +  20 => 30

var a = "10.34";
var b = "20.11";
parseInt(a) + parseInt(b);
//10 + 20 => 30;
parseFloat(a) + parseFloat(b);
// 10.34 + 20.11 => 30.45

var a = "hii";
parseInt(a); //NaN

//es6

var a = "10.34";
var b = "20.11";
Number(a) + Number(b);
// 10.34 + 20.11 => 30.45
var c = +a + +b;
console.log(c);

var a = "123Delhi";
var b = "Delhi123";
var c = "123Delhi123";

console.log(parseInt(a)); //123
console.log(parseInt(b)); //NaN
console.log(parseInt(c)); //123

console.log(Number(a)); //NaN
console.log(Number(b)); //NaN
console.log(Number(c)); //NaN
