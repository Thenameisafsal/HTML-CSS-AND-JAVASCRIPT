class o {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  what() {
    console.log(this.name, this.age);
  }
}

let guy = new o("afsal", 23);
guy.what();
console.log(guy.constructor);
