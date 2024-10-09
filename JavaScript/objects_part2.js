// let obj1 = new Object();
// let obj2 = new Object();
// let obj3 = {};
// let obj4 = {};
// obj3.name = "afsal";
// obj3.age = 19;
// obj4.name = "some";
// obj4.age = 100;
// console.log(obj1 == obj2);
// console.log(obj3 == obj4);
// // both are false -> not singleton

let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "a", 2: "b" };
let obj3 = Object.assign(obj1, obj2); // shallow copy -> obj1 is target so, obj1 is modified as well
console.log(obj3);
console.log(obj1); // obj1 is also modified, obj3(result) and obj1(target) refer to the same modified object
// use this syntax in case you don't want the other objects to be modified
let obj4 = Object.assign({}, obj1, obj2); // {} is the target, so other objects not modified
console.log(obj4);
