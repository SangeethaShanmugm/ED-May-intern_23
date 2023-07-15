// check one condition
// if(condition){}

// check two condition
// if(condition){

// }else{

// }

// check three condition
// if(condition){
// }else if(condition){
// }else{
// }

let a = 20;
if (a % 2 == 0) {
  console.log(`Number ${a} is even`);
} else {
  console.log(`Number ${a} is odd`);
}

let uname = "Peter";
if (uname == "jack") {
  // "jack" ==  "jack" ✅
  console.log(`Hi ${uname} you are admin`); //Hi jack you are admin
} else if (uname == "john") {
  console.log(`Hi ${uname} you are super admin`);
} else {
  console.log(`Hi ${uname} you are unknown`);
}

let name = "Jack";
let role = "Admin1";
if (role == "Admin") {
  //"Admin" ==   "Admin" ✅
  if (name == "John") {
    //"Jack" == "John" ❌
    console.log(`Hi ${name} you are admin`);
  } else {
    console.log(`Hi ${name} you are unknown`);
  }
} else {
  if (name == "Jack") {
    //"Jack" == "Jack"
    console.log(`Hi ${name} you are super admin`);
  } else {
    console.log(`Hi ${name} you are unknown`);
  }
}

//ternary operator (single line if else)
// condition ? if condition is true : if condition is false

var b = 10;
b > 10 ? "Hii" : "Bye";
10 > 10; //=> false => "Bye"

var b = 10;
b == 10 ? b + 1 : b - 1;
10 == 10; //=> b+1=> 10 +1 => 11
