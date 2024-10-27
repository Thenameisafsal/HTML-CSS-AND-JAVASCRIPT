// let's try to override value of math.pi to 4, which is a constant and connot be overriden, but actually we can override it through object property

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI"); // from math, get the pi
// console.log(descriptor);
// // override the property
// Object.defineProperty(Math, "PI", {
//   writable: true,
// });
// Math.PI = 4;
// console.log(Math.PI);

const user = {
  name: "chai",
  price: 250,
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);
Object.defineProperty(user, "name", { writable: false });
descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);
