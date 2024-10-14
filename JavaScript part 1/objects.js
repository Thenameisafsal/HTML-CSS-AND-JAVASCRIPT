let mySym = Symbol("Key1");

let myObj = {
  name: "Afsal",
  mySym: "Something", // does not refer to the above symbol, it is a string instead
  [mySym]: "Key2", // [] use this to refer to the above symbol as the key
};

console.log(myObj);
console.log(myObj[mySym]);

// myObj["name"] = "Ahamad";
// Object.freeze(myObj); // no more changes are made to the object
// console.log(myObj);
// myObj["name"] = "Afsal"; // change will not be made
// console.log(myObj);

myObj.greeting = function () {
  console.log("hello world"); // define anonymous function
};

myObj.greetName = function () {
  console.log(`hello ${myObj["name"]}`); // based on string interpolation
  console.log(`hello ${this.name}`); // based on string interpolation
};

myObj.greeting(); // call the function variable
myObj.greetName();

let myobj = {
  name: "afsal",
};
console.log(Object.keys(myobj)); // print the keys

// null coalescing operator(??)
let v = null ?? undefined ?? 10; // 10 will be assigned
// ternary operator
let val = v == 10 ? "yes" : "no";
console.log(val);

if (true) console.log("yo!"), console.log("bro!"); // multiple statements in one line
