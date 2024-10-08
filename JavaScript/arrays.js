const arr = [0, 1, 2, 3, 4];

arr.unshift(6, 7, 8, 9); // unshift will simply add all elements given to the beginning of the array, but it will have to shift all other elements one place, resulting in complexity

console.log(arr);
arr.shift(); // shift will remove the first element, and move all elements
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.indexOf(7)); // returns -1 if value is absent

const newArr = arr.join(); // joins with ',' by default
console.log(newArr);
console.log(typeof newArr); // string

// slice vs splice
let slice = arr.slice(1, 3); // 3 not included
console.log(arr);
console.log(slice);

let splice = arr.splice(1, 3); // 3 is included
console.log(splice);
console.log(arr);
// primary difference is that slice will not remove the elements from array, it remains unchanged
// splcie will remove the subarray -> manipulates the original array
