class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(this.username);
  }

  createId() {
    return `123`;
  }

  static createnewid() {
    return "456";
  }
}

const afsal = new User("afsal");
afsal.logMe();
console.log(afsal.createId());
console.log(User.createnewid()); // static methods don't need objects, and objects cannot access static methods
