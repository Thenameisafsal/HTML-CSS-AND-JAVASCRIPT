const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("timeout function");
    resolve(); // notify that the promise is settled
  }, 1000);
});
// if promise is resolved, then then() is executed
promiseOne.then(function () {
  console.log("the promise was excuted");
});

// if you do not want to store the promise:
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("in the promise now");
  }, 1000);
  resolve();
}).then(function () {
  console.log("promise has been settled");
});

// to pass arguments to the promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("let's pass some args to the promise");
    // you pass args through the resolve function
    resolve({ name: "afsal", course: "aiml" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});
