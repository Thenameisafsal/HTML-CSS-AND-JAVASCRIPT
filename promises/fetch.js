fetch("https://api.github.com/users/Thenameisafsal")
  .then(function (user) {
    console.log("received the user");
    return user.json();
  })
  .then(function (response) {
    console.log(response);
  })
  .catch((e) => {
    cohnsole.log("error occurred", e);
  });
