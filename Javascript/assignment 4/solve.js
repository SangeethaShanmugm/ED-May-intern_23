var ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];

//distinct restaurant
let distinct = [];
for (i = 0; i < ratingData.length; i++) {
  if (distinct.indexOf(ratingData[i].restaurant) === -1) {
    distinct.push(ratingData[i].restaurant);
  }
}

console.log(distinct); //['KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut']

//avg for all rest

let unique = ["KFC", "Burger King", "Domino", "Subway", "Pizza Hut"];
//              0         1              2          3         4
let avgRating = [];
let outRating = 0;
let count = 0;

for (let i = 0; i < unique.length; i++) {
  for (let j = 0; j < ratingData.length; j++) {
    if (unique[i] == ratingData[j].restaurant) {
      outRating += ratingData[j].rating;
      count = count + 1;
    }
    // console.log(ratingData[j].restaurant);
    // console.log(ratingData[j].rating);
  }
  var output = outRating / count;
  let myObj = {};
  myObj.restaurant = unique[i];
  myObj.avgRating = output;
  avgRating.push(myObj);
  count = 0;
  outRating = 0;
}
console.log("outRating =>", outRating, "count=>", count);
// console.log(output);//3.75
console.log(avgRating);

[
  { restaurant: "KFC", avgRating: 4 },

  { restaurant: "Burger King", avgRating: 4 },

  { restaurant: "Domino", avgRating: 1.5 },

  { restaurant: "Subway", avgRating: 3.5 },

  { restaurant: "Pizza Hut", avgRating: 5 },
];
