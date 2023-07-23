// Array is a collection of homogenious as well as heterogenious data types

//homogenious - same data types
let a = ["Hii", "hello", "test", "data", `Hey`]; //Array of strings
let b = [1, 4, 7, 1, 3, 45, 77]; // Array of Numbers
let c = [true, false, false, true]; //Array of boolean

//heterogenious - different data types

let d = ["Hii", 50, true, false, 45, "hey", "text"];

var e = [3, 5, 6, 7];
console.log(typeof e); //object

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];

//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"] => element
//   0         1          2          3        4           => index, position
console.log(city[0]); //Delhi
console.log(city[4]); //Amsterdam

// push => add at the end of array

console.log(city.push("Boston")); //6
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam","Boston"]
console.log(city);
city.push("Venice");
console.log(city); //['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

//pop => remove last element in array

var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];

console.log(city.pop()); //Venice
console.log(city); //['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston']

console.log(city.pop()); //Boston
console.log(city); //['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']

//unshift => add an element to the start of array

var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];

console.log(city.unshift("Dubai")); //8
console.log(city); //['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

var train = ["🚃", "🚃", "🚃"];

console.log(train.unshift("🚂", "🔗")); //5
console.log(train); //['🚂', '🔗', '🚃', '🚃', '🚃']

//shift => remove element at start of array

console.log(train.shift()); //🚂
console.log(train); //(4) ['🔗', '🚃', '🚃', '🚃']

//Slice => slice(startIndex)
var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
//    0       1           2         3           4          5           6
//   -7       -6          -5       -4          -3         -2           -1

console.log(city.slice(2)); //['Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

//Slice => slice(startIndex, endIndex)  🍪 -> 🍕

console.log(city.slice(2, 5)); //['Helsinki', 'London', 'Amsterdam']
console.log(city.slice(0, -2)); //['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']
console.log(city.slice(-2, -1)); //['Boston']

//splice
// splice(startIndex, DeleteCount, values);

var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
//    0       1           2         3           4          5           6

console.log(city.splice(2, 2)); //['Helsinki', 'London']
console.log(city); //['Delhi', 'Mumbai', 'Amsterdam', 'Boston', 'Venice']

console.log(city.splice(3, 0, "Pune", "Paris")); //[]
console.log(city); //['Delhi', 'Mumbai', 'Amsterdam', 'Pune', 'Paris', 'Boston', 'Venice']

//['Delhi', 'Mumbai', 'Amsterdam', 'Pune', 'Paris', 'Boston', 'Venice']
console.log(city.splice(1, 1, "Innsburg", "France")); //['Mumbai']
console.log(city); //['Delhi', 'Innsburg', 'France', 'Amsterdam', 'Pune', 'Paris', 'Boston', 'Venice']

console.log(city.indexOf("Amsterdam")); //3

var x = ["a", "b", "c", 1];
var y = [2, "d", "e", "f"];
console.log(x + y); //[("a", "b", "c", 12, "d", "e", "f")];
// ["a", "b", "c", 1] + [2, "d", "e", "f"];

var name = "Peter";

var students = ["jack", "john"];

console.log(Array.isArray(name)); //false
console.log(Array.isArray(students)); //true

var city = [
  "Dubai",
  "Innsburg",
  "France",
  ["Red", [1, 2, 3], "Yellow", "Orange"],
  "London",
  "Pune",
];

console.log(city[3]); //[ 'Red', [ 1, 2, 3 ], 'Yellow', 'Orange' ]

console.log(city[3][1]); //[ 1, 2, 3 ]

console.log(city[3][1][1]); //2
console.log(city[3][1][2]); //3
