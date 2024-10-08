let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(typeof myDate); // date is an object

let myCreatedDate = new Date(2023, 0, 27, 7, 36);
// month starts from 0
// 7 and 36 denote hour and minutes respectively
console.log(myCreatedDate.toString());

let date1 = new Date("2024-01-3"); // month starts from 1 in this syntax
console.log(date1.toString());

let someDate = Date.now(); // returns number ofmilliseconds from 1 jan 1970
console.log(someDate);
let date1timeSeconds = Math.floor(date1.getTime() / 1000); // get milliseconds of a date
let seconds = Math.floor(Date.now() / 1000); // convert to seconds
console.log(seconds - date1timeSeconds); // seconds difference

let date = Date.now().toLocaleString("default", {
  // you can give your configurations here
  weekday: "long", // specifies the full name of the day
});
