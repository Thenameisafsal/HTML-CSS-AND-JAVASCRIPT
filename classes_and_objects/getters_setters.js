class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  get name() {
    return `${this._name} is the name`;
  }

  set name(value) {
    this._name = value; // add _ before data to avoid race condition
  }

  get email() {
    return `${this._email} is the email`;
  }

  set email(value) {
    this._email = value;
  }
}

const obj = new user("afsal", "afsal@google.com");
console.log(obj.name);
console.log(obj.email);
