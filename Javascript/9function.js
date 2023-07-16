var a = 20;
var b = 20;
console.log(a + b); //40
//40
10, 50;

var a = 10;
var b = 50;
console.log(a + b); //60

// keyword nameofFunction(parameters){
//     return output
// }

// nameofFunction(arguments)

//function definition/declaration

function addition(a, b) {
  //parameters
  return a + b;
}
console.log(addition(10, 100)); //function call, arguments

console.log(addition(200, 100));

console.log(addition(20, 10));

//camelCase => isEvenOdd
function isEven(input) {
  let out;
  if (input % 2 == 0) {
    out = `Number ${input} is Even`;
  } else {
    out = `Number ${input} is Odd`;
  }
  return out;
}

console.log(isEven(50)); //Number 50 is Even
console.log(isEven(35)); //Number 35 is Odd

//es6 - arrow function

const isEvenOdd = (input) => {
  let out;
  if (input % 2 == 0) {
    out = `Number ${input} is Even`;
  } else {
    out = `Number ${input} is Odd`;
  }
  return out;
};

console.log(isEvenOdd(20)); //Number 20 is Even

let welcome = () => console.log("Welcome Everyone🥳🥳🥳");

welcome(); //Welcome Everyone🥳🥳🥳

let age = 40;
let greet = age < 25 ? () => console.log("Adult") : () => console.log("Tenage");
//40 < 25 ❌
greet(); //Tenage

let sum = (a, b) => {
  let result = a + b;
  return result;
};

let output = sum(5, 5);
console.log(output);

let sum1 = (a, b) => a + b;

console.log(sum1(5, 5));
