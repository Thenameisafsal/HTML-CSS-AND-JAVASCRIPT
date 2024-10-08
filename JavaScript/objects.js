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
};

myObj.greeting(); // call the function variable
myObj.greetName();
