const User = {
  _email: "afsal@google.com",
  _password: "something",

  get email() {
    return this._email;
  },

  set email(value) {
    this._email = value;
  },
};

const obj = Object.create(User);
console.log(obj.email);
