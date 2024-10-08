// string interpolation - use ``

let name = "Afsal";
let age = 20;
console.log(`hello, i am ${name} and i am ${age} years old`); // advantage : use string methods within {} interpolation and more readable

let myName = new String("Afsal"); // stack -> primitive
console.log(myName.__proto__);
// __proto__ denotes the superclass or an object which the current object inherits from - here, myName's prototype is String
// now myName can access methods of superclass also.

const newString = myName.substring(0, 4); // 4 not included
console.log(newString);
const subs = newString.substring(0, 4); // does not take -ve indexing, will take it as 0
const slic = newString.slice(-8, 3); // since -8 is longer than string, it will start only from 0
console.log(subs);
console.log(slic);
console.log(newString.includes("a")); // contains a string?
console.log(newString.replace("a", "b")); // replace a substring
console.log(newString.trim()); // remove spaces
console.log(newString.split(""));
