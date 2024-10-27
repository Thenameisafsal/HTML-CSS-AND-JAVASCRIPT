let d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = d.filter((item) => item > 4); // returns an iterable,list, of values that satisfy the given condition

let resx = d.filter((item) => {
  return item > 4; // return required if you use {}
});
console.log(res);
console.log(resx);
