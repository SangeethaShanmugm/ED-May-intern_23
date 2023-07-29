var a = {}; //object
var a = []; //array

var moviename = "The Avengers";
var movieRating = 5;
var movieType = "Action";

console.log(moviename);

var moviename1 = "Harry Potter";
var movieRating1 = 8;
var movieType1 = "Action";

console.log(moviename1);

//object = {key: value}

var movie = {
  name: "The Avengers",
  rating: 5,
  type: "Action",
};
//object.keyname => dot notation
console.log(movie.name);
console.log(movie.type);

//bracket notation => []

console.log(movie);
console.log(movie["name"]);
console.log(movie["rating"]);

for (key in movie) {
  console.log(key);
}

for (key in movie) {
  console.log(movie[key]);
}

const students = {
  name: "John",
  age: 20,
  marks: {
    science: 50,
    math: 90,
  },
};

console.log(students);
console.log(students.marks);
console.log(students.marks.science);
console.log(students.marks.math);

//Array of objects
var movie = [
  {
    name: "The Avengers",
    rating: 5,
    type: "Action",
  },
  {
    name: "Harry potter",
    rating: 9,
    type: "Action",
  },
  {
    name: "Frozen",
    rating: 9,
    type: "Fantasy",
  },
];

console.log(movie);
console.log(movie[0].name);



