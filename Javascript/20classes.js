//class -> blueprint of the object

//constructor function
function Person() {
  (this.name = "John"), (this.age = 20);
}

//create an object
const person1 = new Person();

console.log(person1.name); //John
console.log(person1.age); //20

//create a class
//this => access property of an object
class PersonData {
  constructor(name) {
    this.name = name;
  }
}
//create an object
const person2 = new PersonData("Peter");
console.log(person2.name); //Peter

const person3 = new PersonData("Mickenzie");
console.log(person3.name); //Mickenzie
