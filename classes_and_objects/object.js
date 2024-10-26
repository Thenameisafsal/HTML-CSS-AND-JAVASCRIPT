// function is also an object
function multiply(num) {
  return num * 5;
}

// access object
multiply.power = 2;

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);

function createUser(user, age) {
  this.user = user;
  this.age = age;
}
// inject your function using prototype
createUser.prototype.increment = function () {
  this.age++;
};

const obj = new createUser("afsal", 19);
obj.increment();
console.log(obj);
