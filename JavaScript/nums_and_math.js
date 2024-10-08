const num = 100;

console.log(num.toFixed(2)); // sets 2 decimal places
console.log(num.toString().length);

const num1 = 23.9866;
// toPrecision determines how many significant digits to consider and rounds the number based on this
console.log(num1.toPrecision(2)); // rounds of number to 24 based on 2 digits
console.log(num1.toPrecision(3)); // rounds of number to 24.0
console.log(typeof num1.toPrecision(4)); // rounds of number to 23.99
// note that a string representation is returned by toPrecision()

const num2 = 1000000;
console.log(num2.toLocaleString("en-IN")); // converts to a string based on locality specified

console.log(Math); // prints a math object
console.log(Math.ceil(4));
console.log(Math.ceil(4.3));
console.log(Math.floor(4));
console.log(Math.floor(4.99));
console.log(Math.random(100)); // by default between 0 and 1
