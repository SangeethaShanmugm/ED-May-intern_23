var uname = "John";
uname.toUpperCase(); //JOHN

var uname = "John";
uname.toLowerCase(); //john

var city = "Bangalore";
//B  a  n  g  a  l  o  r   e
//0  1   2   3    4    5    6     7     8 => position, index value
//-9 -8  -7  -6   -5   -4  -3    -2    -1
console.log(city.length); // 9

city[4]; // a
city[1]; //a

city.charAt(4); //a
city.charAt(1); //a
city.charAt(6); //0

console.log(city.charAt(-1)); // ""
console.log(city.charAt(-2)); //""

console.log(city.at(0)); //B
console.log(city.at(-1)); //e
console.log(city.at(-2)); //r

var a = "John";
var b = "john";

a == b;
// John == john // false
a.toLowerCase() == b.toLowerCase();
//john == john // true

//slice(startIndex) => extract the string characters

var city = "amsTerdam";
//a   m   s   T   e    r    d    a    m
//0   1   2   3    4    5   6    7    8
//                         -3      -2   -1

city.slice(1);
("msTerdam");

city.slice(2);
("sTerdam");

// slice(startIndex, endIndex)
console.log(city.slice(2, 6));
("sTer");
console.log(city.slice(0, -1));
("amsTerda");
console.log(city.slice(0, -2));
("amsTerd");
console.log(city.slice(-2, 2));
("");
console.log(city.slice(-3, -1));
("da");
console.log(city.slice(-1, -3));
("");

var city = "amsTerdam";

city.charAt(0).toUpperCase();
("A");
city.slice(1).toLowerCase();
("msterdam");

city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
"A" + "msterdam";
("Amsterdam");

city = "paRIs";
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
"P" + "aris";
("Paris");

var uname = "Abdulkalam";
uname.length;
10;

var uname = "  Abdulkalam .  ";
console.log(uname.length); //16
console.log(uname.trim()); //Abdulkalam .

var a = "I am learning Javascript";
a.replace("Javascript", "JS");
("I am learning JS");

var a = "JavaScript I am learning Javascript";
a.replace("Javascript", "JS");
("JavaScript I am learning JS");

a.replace("JavaScript", "JS");
("JS I am learning Javascript");

var a = "Javascript I am learning JavaScript";
console.log(a.replace(/JavaScript/g, "JS")); //JS I am learning JS

var name = "  Abdulkalam .  ";
console.log(name.replaceAll(" ", "/"));
("//Abdulkalam/.//");

//replaceAll(pattern,replacement )

const string = "Hello Everyone Hi hi";
let pattern = "hi";
let replacement = "hey";
let new_string = string.replaceAll(pattern, replacement);
console.log(new_string); //new_string

const a1 = "Hello Everyone good good day";
console.log(a1.replace(/good/g, "?"));
("Hello Everyone ? ? day");

var a = "https://github.com/SangeethaShanmugm/ED-May-intern_23";
console.log(a.split("/"));
["https:", "", "github.com", "SangeethaShanmugm", "ED-May-intern_23"];

var b = "https://github.com/SangeethaShanmugm?tab=repositories";
console.log(b.split("?"));
("['https://github.com/SangeethaShanmugm', 'tab=repositories']");

var a = "JavaScript";
console.log(a.split(""));
(10)[("J", "a", "v", "a", "S", "c", "r", "i", "p", "t")];

var b = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
console.log(b.toString());
("J, a, v, a, S, c, r, i, p, t;");

console.log(b.toString().replaceAll(",", ""));
("JavaScript");
