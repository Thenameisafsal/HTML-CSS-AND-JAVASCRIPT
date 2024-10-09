const c = () => {
  //   console.log(this); // prints empty object
  return "hello world";
};

console.log(c());

let obj = {
  name: "afsal",
  some: function () {
    console.log(`hey ${this.name} bro!`); // you can use this keyword here because we refer to the object, but above we can't
  },
};
// console.log(obj.some());
obj.some();
