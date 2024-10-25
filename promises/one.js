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

// access return value from promise through another then() => can be chained as per requirement
// also add catch() ar end to handle any rejections etc.

new Promise(function (resolve, reject) {
  let error = false;
  if (!error) {
    resolve({ user: "afsal", isCoder: true });
  } else {
    reject("something went wrong dude!");
  }
})
  .then(function (user) {
    console.log(user);
    return user.user;
    // accept the value in then()
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  });
