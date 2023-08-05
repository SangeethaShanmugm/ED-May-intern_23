console.log(a); //undefined
var a = 10;
var b = 20;

//JIT process -> Just In Time Compilation

//1. Compilation Phase - console.log - skip
//2. Execution Phase -> Js, context

//Example 1

//Compilation Phase
console.log(x); // skip
var x = 50; // JS -> Do you know x? No | What is the value? -> context - undefined
console.log(x); // skip

// Execution Phase

console.log(y); // JS -> Do you know y? Yes | What is the value? -> context - undefined
var y = 50; //JS -> Do you know y? Yes | What is the value? -> context ->Note down the value of y =50
console.log(y); //JS -> Do you know y? Yes | What is the value? -> context -> 50

//Example 2

//Compilation Phase
console.log(z); // skip
let z = 50; // JS -> Do you know z? No | What is the value? -> context - don't initialize
console.log(z); // skip

// Execution Phase

console.log(d); // JS -> Do you know y? Yes | What is the value? -> context - error //Uncaught ReferenceError: Cannot access 'z' before initialization
let d = 50;
console.log(d);
