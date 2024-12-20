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

const promiseFour = new Promise(function (resolve, reject) {
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
  })
  .finally(function () {
    console.log("promise ends here");
  });
//   finally is executed in the end

// async-await syntax of same above code

async function promise4() {
  try {
    const promise = await promiseFour; // get the promise
    console.log(promise);
  } catch (err) {
    console.log(err);
  }
}

promise4();

async function promise5() {
  try {
    const response = await fetch("https://api.github.com/users/Thenameisafsal");
    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log("error", e);
  }
}
promise5();

// fetch in try catch syntax
fetch("https://api.github.com/users/Thenameisafsal")
  .then((response) => {
    console.log("result parsing to json");
    return response.json();
  })
  .then((response) => {
    console.log("response parse complete", response);
  })
  .catch((err) => {
    console.log("an error occurred", err);
  });
