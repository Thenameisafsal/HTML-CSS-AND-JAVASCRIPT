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
