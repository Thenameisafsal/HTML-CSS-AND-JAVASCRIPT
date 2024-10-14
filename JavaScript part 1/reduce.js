let nums = [1, 2, 3];
let initial = 0;
let res = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initial
);
console.log(res);

// another example to add total price using reduce
let test = [
  {
    name: "some1",
    price: 2999,
  },
  {
    name: "some2",
    price: 1999,
  },
  {
    name: "hello",
    price: 500,
  },
];

let resf = test.reduce((total, currVal) => total + currVal.price, 0); // the 0 here is the initial value of the total
console.log(resf);
