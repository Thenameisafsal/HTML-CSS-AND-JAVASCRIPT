// function is also an object
function multiply(num) {
  return num * 5;
}

// access object
multiply.power = 2;

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);
