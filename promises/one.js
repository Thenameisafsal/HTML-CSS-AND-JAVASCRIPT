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
