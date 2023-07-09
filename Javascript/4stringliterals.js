// string Literals  / Template Literals

//"An Avengers is an Action movie with rating of 4.5 and from the category Hollywood"

var mname = "Avengers";
var type = "Action";
var category = "Hollywood";
var rating = 4.5;

//es5

var output =
  "An " +
  mname +
  " is an " +
  type +
  " movie with rating of " +
  rating +
  " and from the category " +
  category +
  ".";

console.log("ES5 output => ", output);

//es6
// ``  => backtick
// ${} => interpolation => substitute the value

var output = `An ${mname} is an ${type} movie with rating of ${rating} and from the category ${category}`;

console.log("ES6 output =>", output);
