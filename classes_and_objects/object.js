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
// without new keyword you won't be able to access the injected method
const obj = new createUser("afsal", 19);
obj.increment();
console.log(obj);

// // example:
// const obj1 = createUser("afsal", 19);
// obj1.increment(); // you will not be able to read the property as obj1.increment() will evaluate to undefined
// console.log(obj1);
