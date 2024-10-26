let myName = "afsal ";

String.prototype.truelength = function () {
  return this.trim().length;
};
// will work with any string now - no need to define for each and every string

console.log(myName.truelength());
