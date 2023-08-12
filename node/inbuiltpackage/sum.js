console.log("Hello");

const double = (n) => {
  return n * 2;
};
console.log(double(10));

// console.log(window)//❌
// console.log(document)//❌
console.log(global); //✅

console.log(process.argv);

const [, , n] = process.argv;
const double1 = (n) => {
  return n * 2;
};
console.log(double1(n));
