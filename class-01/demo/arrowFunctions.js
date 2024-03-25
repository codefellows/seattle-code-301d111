function sayHello(name) {
  console.log(`Hello, ${name}`);
}

let sayHi = function (name) {
  console.log(`Hi, ${name}`);
};

// In an arrow function (some languages call these "lambda")
// What's to the left of the => is the param(s)
// What's to the right of the => is the return value (code block or not)

let greet = (name) => `Yo, ${name}`;

// If your arrow function has {} then you must use "return"
let add = (a, b) => {
  return a + b;
};

// Implicit return
// Arrow function whatever comes after the => is returned if there
// are no {}
let addAgain = (a, b) => a + b;

sayHello("John");
sayHi("Cathy");
let greeting = greet("Jane");
console.log(greeting);

let sum = add(1, 2);
console.log(sum);

let sum2 = addAgain(3, 4);
console.log(sum2);

