let x = [1, 2, 3, 4, 5];
let newx = x.map((item) => item + 10);
console.log(x);
console.log(newx);

// method chaining
let xx = [1, 2, 3, 4, 5];
let rx = xx.map((num) => num + 1).map((num) => num * 10);
console.log(rx); // map + map(you can do more)
let yy = [1, 3, 5, 7, 9];
let ry = yy.filter((num) => num >= 2).map((num) => num * 10);
console.log(ry);
