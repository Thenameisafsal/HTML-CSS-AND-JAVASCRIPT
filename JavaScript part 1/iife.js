// immediately invoked function expression
(function some(n1) {
  console.log(n1, "is the number");
})(); // this is an iife

// arrow function as iife
(() => {
  console.log("hello world");
})();
