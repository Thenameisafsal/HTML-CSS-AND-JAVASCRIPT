let val = "33";
console.log(typeof Number(val)); // converted the vlaue
let val2 = "33abc";
let converted = Number(val2); // will result in NaN
console.log(typeof converted, converted);
