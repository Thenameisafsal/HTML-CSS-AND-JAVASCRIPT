let myName = "afsal ";

String.prototype.truelength = function () {
  return this.trim().length;
};
// will work with any string now - no need to define for each and every string

console.log(myName.truelength());

// similarly for any given data type, let's specify a method using prototype
Object.prototype.afsal = function () {
  console.log("hi i am afsal brotha!");
};

const d = 5;
d.afsal();

arr = [1, 2, 3, 4, 5];
arr.afsal();

// prototype inheritance
// this is implemented using __proto__

const teacher = {
  name: "afsal",
};
const tech = {
  language: "golang",
};
// tech is inherited by teacher now. so you can access the properties
teacher.__proto__ = tech;
console.log(`my tech stack is ${teacher.language}`);
