// String - "Hii" "Hello" "4646" "4536jfkdnk"  "true"
// Number - 58437 56 549368.57836 .5456
// Boolean - true false

//es5

var a = "Hii";

//var a => declaration
// a = "Hii" => assignment

var b = 10;
var c = true;

console.log("Hello"); //Hello

console.log(typeof a); //String
console.log(typeof b); //Number
console.log(typeof c); //Boolean

var e = 10.5;
console.log(typeof e); //number

var a = 10;
var b = 20;
a + b; //(addition)
console.log(a + b); // 10 + 20 => 30
console.log(b % a); // 20 /10 = 0

5 % 2; //1
5 % 3; //2
5 % 4; //1
5 % 5; //0

2 % 4; //2
3 % 4; //3

var a = "Hii";
var b = "Javascript";
a + b; //concat
"Hii" + "Javascript";
("HiiJavascript");
var c = a + b;
console.log(c);

console.log(a - b); //NaN - Not a Number
console.log(a * b); //NaN - Not a Number
console.log(a / b); //NaN - Not a Number

// string + string = string
// string + number = string
// number + string = string
// number + number = number

"10" + 20 + 30;
"1020" + 30;
("102030");

10 + "20" + 30;
"1020" + 30;
("102030");

var a = 10 + 20 + "30";
30 + "30";
("3030");
console.log(typeof a);

var a = "10" + 20 + 30 - 1;
"1020" + 29;
("102029");

"10a" - 1; //NaN - Not a Number
"10" - 1; //9
10 - "1"; // 9
10 - "1a"; //NaN - Not a Number

// "fdhskjg"-  "fdhfksjg" = NaN
// "20" - 2 =  18
// "20" + 2 = "202"
