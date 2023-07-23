//Map
// used to iterate over the array
// It always return the same length of output array as input array
// It is basically used to apply logics(add, sub, mul,div)

var a = [3, 4, 7, 2, 24, 1, 78, 56, 90, 98];
var b = a.map((data) => {
  return data * 2;
});
console.log(b); //(10) [6, 8, 14, 4, 48, 2, 156, 112, 180, 196]

var a = [4, 8, 5, 23];
var b = a.map((item) => {
  return `<p>${item[0]}</p>`;
});
console.log(b);
//['<p>4</p>', '<p>8</p>', '<p>5</p>', '<p>23</p>']

// a.map((abc) => {
//   console.log(a[1]);
// });

//filter
//it is used to filter out the value
//It may or may not return the same length of output array as input array
//only return those data which output or condition is true

var a = [3, 4, 7, 2, 24, 1, 78, 56, 90, 98];

var b = a.filter((data) => {
  return data > 20;
});
console.log(b); //[24, 78, 56, 90, 98]

var b = a.filter((data) => {
  return data * 5;
});
console.log(b); //(10) [3, 4, 7, 2, 24, 1, 78, 56, 90, 98]

//CallBack => when you call function inside another function
a.map(() => {});
