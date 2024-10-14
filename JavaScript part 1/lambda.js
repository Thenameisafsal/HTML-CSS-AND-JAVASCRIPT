let arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function (g, ind, arr) {
  arr[ind] = g * 10;
});
console.log(arr);
