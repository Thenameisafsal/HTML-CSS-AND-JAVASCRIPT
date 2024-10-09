let c = (num1, num2) => num1 + num2; // implicit return using arrow function -> no return keyword required as no paranthses
let x = (num1, num2) => {
  return num1 + num2; // return keyword required
};
// to return objects, wrap with ()
let y = (num1, num2) => ({ username: "afsal", n1: num1, n2: num2 });
console.log(c(4, 5));
