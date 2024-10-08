marvel = ["wolverine", "ironman", "spiderman"];
dc = ["batman", "superman", "flash"];
// console.log(marvel + dc);
// // alternatively we can use concat() to concatenate the arrays
// let newArr = marvel.concat(dc); // returns a new array
// console.log(newArr);
// marvel.push(dc);
// console.log(marvel);

const allHeros = [...marvel, ...dc]; // ... is the spread operator, which will spread out all the elements separately as a 1D array
console.log(allHeros);

let temp = [1, 2, 3, 4, [4, 5, 6], [6, 7, [7, 8, 9]]];
let newArray = temp.flat(Infinity); // flattens the array upto a specified depth recursively - default depth is 1
console.log(newArray);

console.log(Array.isArray(temp)); // check if something is an array
console.log(Array.from("Afsal")); // convert to array
console.log(Array.from({ name: "Afsal" })); // you've specify from which  array has to be created(key or value), otherwise you get empty array

let a = 10;
let b = 5;
let c = 9;
console.log(Array.of(a, b, c)); // creates a nwe array
