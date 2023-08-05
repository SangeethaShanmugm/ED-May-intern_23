//closure => own scope + lexical scope

//child  => own scope + fathers lexical scope(father) => child closure
//father => own scope + father lexical scope(grandpa) => father closure

function outer() {
  var a = 20;
  function inner() {
    console.log(a);
  }
  return inner;
}
var close = outer();
close();

let price = 1000;
//hoisting  + lexical scope

function getPrice() {
  console.log("The old price is " + price); //The old price is undefined
  let price = 500;
  console.log("The new price is " + price); //The new price is 500
}
getPrice();
