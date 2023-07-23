// for, while, do while, for of, for in (objects)

// it helps us to iterate over the array as well as print the series

// for(variable; condition; increment/decrement)

for (let i = 0; i < 5; i++) {
  console.log(i);
}

var city = [
  "Delhi",
  "Mumbai",
  "Amsterdam",
  "Pune",
  "Paris",
  "Boston",
  "Venice",
];

for (let i = 0; i < city.length; i++) {
  console.log(city[i]);
}

// Delhi
// Mumbai
// Amsterdam
// Pune
// Paris
// Boston
// Venice

var city = [
  "Delhi",
  "Mumbai",
  "Amsterdam",
  "Pune",
  "Paris",
  "Boston",
  "Venice",
];

for (let i = 0; i < city.length; i++) {
  console.log(`<p>${city[i]}</p>`);
}

{
  /* <p>Delhi</p>
<p>Mumbai</p>
<p>Amsterdam</p>
<p>Pune</p>
<p>Paris</p>
<p>Boston</p>
<p>Venice</p> */
}

var city = [
  "Dubai",
  "Innsburg",
  "France",
  ["Red", "Yellow", "Orange"],
  "London",
  "Pune",
];

for (i = 0; i < city.length; i++) {
  if (Array.isArray(city[i])) {
    for (j = 0; j < city[i].length; j++) {
      console.log(city[i][j]);
    }
  } else {
    console.log(city[i]);
  }
}

// Dubai
// Innsburg
// France
// Red
// Yellow
// Orange
// London
// Pune

var i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
0;
1;
2;
3;
4;
5;

var i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

//for of loop

var city = [
  "Delhi",
  "Mumbai",
  "Amsterdam",
  "Pune",
  "Paris",
  "Boston",
  "Venice",
];

for (mycity of city) {
  console.log(mycity);
}

// Delhi
// Mumbai
// Amsterdam
// Pune
// Paris
// Boston
// Venice

var city = [
  "Dubai",
  "Innsburg",
  "France",
  ["Red", "Yellow", "Orange"],
  "London",
  "Pune",
];

for (mycity of city) {
  if (Array.isArray(mycity)) {
    for (mycolors of mycity) {
      console.log(mycolors);
    }
  } else {
    console.log(mycity);
  }
}

// Dubai
// Innsburg
// France
// Red
// Yellow
// Orange
// London
// Pune

//forEach
var colors = ["Red", "Yellow", "Orange"];
colors.forEach(myFunction);

function myFunction(item) {
  console.log(item);
  return item;
}

// Red
// Yellow
// Orange
