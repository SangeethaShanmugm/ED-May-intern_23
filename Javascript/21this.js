//this => access property of an object

let firstName = "Adeyemi";
let lastName = "Kayode";

let SayHi = {
  firstName: "Afifa",
  lastName: "Inamdar",
  greet: function () {
    return `Say hi to ${this.firstName} ${this.lastName}`;
  },
};

console.log(SayHi.greet());
console.log(SayHi.firstName);
