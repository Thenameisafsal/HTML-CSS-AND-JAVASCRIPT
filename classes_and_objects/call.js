function setUserName(name) {
  this.name = name;
  //   console.log("called");
}

function create(name, email, password) {
  setUserName(name); // changes will not be present in current context
  // to make sure the reference is held and changes are shown here as well:
  setUserName.call(this, name); // now the changes are held - we'll pass the current context as well to make this possible
  this.email = email;
  this.password = password;
}

const obj = new create("afsal", "afsal", "123");
console.log(obj);
