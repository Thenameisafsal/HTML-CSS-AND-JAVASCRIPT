// primitive data types - 7 types
// 1. String
// 2. BigInt
// 3. null
// 4. undefined
// 5. Number
// 6. Boolean
// 7. Symbol
// for these data types, reference to memory location is not provided, so modifications will not modify the original value -> deep copy

// reference(non-primitive dataa types)
// Array
// Objects
// Functions
// for these data types reference to the memory location is given, so the changes will modify the original value

// JavaScript is dynamically typed language

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId); // results in false although values look similar

// bigInt has a range upto 2^53

const number = 34542445667567345n; // n to convert as a number

const num = 100.3; // typeof will tell this is a number
const name = null; // typeof will tell this is an object
// arrays are classified as objects
// this is an object function - typeof will take this as function
const myFunction = function () {
  console.log("hello world");
};
