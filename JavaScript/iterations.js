let name = ["hi", "hello"];
for (let i = 0; i < name.length; i++) {
  const element = name[i];
  console.log(element);
}

// for of loop
for (const element of name) {
  console.log(element);
}

let g = "hello";
for (const i of g) {
  console.log(i); // char by char
}

let m = new Map();
// remembers order of insertion
m.set(1, "hello");
m.set(2, "world");
console.log(m.get(1));
console.log(m);
for (const [key, val] of m) {
  // note that objects can't be iterated this way
  // destructuring the map
  console.log(key, ":", val);
}

// for in loop
let obj = {
  cpp: "cpp",
  go: "golang",
  swift: "swift by apple",
};

for (const k in obj) {
  console.log(k); // prints keys
  console.log(obj[k]); // values
}
