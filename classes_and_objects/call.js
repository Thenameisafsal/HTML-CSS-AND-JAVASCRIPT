function setUserName(username) {
  this.username = username;
}

function create(name, email, password) {
  setUserName(name); // changes will not be present in current context
  // to make sure the reference is held and changes are shown here as well:
  setUserName.call(this, name); // now the changes are held - we'll pass the current context as well to make this possible
  this.email = email;
  this.password = password;
}
