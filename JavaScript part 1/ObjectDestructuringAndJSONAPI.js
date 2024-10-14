let obj = {
  name: "afsal",
  age: 18,
};
// destructuring objects
// to access a property directly, without referencing object name:
const { name } = obj;
console.log(name);
// you can also create an alias of the property
const { age: a } = obj; // a is the alias
console.log(a);
