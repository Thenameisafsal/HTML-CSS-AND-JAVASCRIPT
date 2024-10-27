class user {
  constructor(name) {
    this.name = name;
  }
}
// extends works same as setprototypeof()
class teacher extends user {
  constructor(name, email) {
    super(name); // will assign name to current context
    this.email = email;
  }
}

const obj = new teacher("afsal", "afsal@google.com");
console.log(obj);
