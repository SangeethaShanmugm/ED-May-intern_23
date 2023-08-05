class geo {
  constructor() {
    this.lat = 43.22;
    this.long = 32.98;
  }
}

class language extends geo {
  constructor(name, country) {
    super();
    this.name = name;
    this.country = country;
  }
  greet = () => {
    return `Say hi to ${this.name}`;
  };
}

//Creating object
var France = new language("French", "France");
var Germany = new language("German", "Germany");

console.log(France);
//language {lat: 43.22, long: 32.98, name: 'French', country: 'France', greet: ƒ}

console.log(France.name); //French
console.log(France.country); //France
console.log(France.greet()); //Say hi to French

console.log(Germany);
