let val = "33";
console.log(typeof Number(val)); // converted the vlaue
let val2 = "33abc";
let converted = Number(val2); // will result in NaN
console.log(typeof converted, converted);

let test = null;
console.log(Number(test)); // null to number results in 0

let test2 = undefined;
console.log(Number(test2)); // undefined to number results in NaN

// convert boolean to number -> 1 for true and 0 for false
let test3 = true;
console.log(Number(test3));
// integer to boolean
console.log(Boolean(1));
console.log(Boolean(2));

// "" -> false
// "something" -> true
