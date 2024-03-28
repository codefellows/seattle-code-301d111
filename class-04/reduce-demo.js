let numbers = [1, 2, 3, 4, 5];

// 1. Use .forEach() to print the squares
// .forEach returns nothing even if we tell it to.
let squares = numbers.forEach((num, i) => {
  console.log(`Square of ${num} is: `, num * num);
  return num * num;
});

console.log(".forEach Returned:", squares);

console.log("-------------------");

// 2. Use .map() to print the number + 1
// .map() returns a new array, it will always be the same length as the original array, but with any values you choose
let plusOne = numbers.map((num, i) => {
  return `${num} plus 1 is: ${num + 1}`;
});

console.log(".map Returned:", plusOne);

console.log("-------------------");

// 3. Use .filter() to print the even numbers
// filter returns a new array containing the elements from the original
// that match the condition
let evenNumbers = numbers.filter((num, i) => {
  return num % 2 === 0; // true or false if dividing by 2 has no remainder
});

console.log(".filter Returned:", evenNumbers);

console.log("-------------------");

// .reduce() iterates an array and returns a completely new thing ...
// it's going to run a callback function on each element of the array
// it's going to return something and keep track of that thing.
// Reduce takes 2 params: Callback function and starting value

// Every time reduce runs over the array, it will receive "current state"
// and it will return the "next state"

// In our example, I'm using "currentState" to keep track
// In JS docs, you will see that called an "accumulator"

// Starting value is 0
let sum = numbers.reduce((currentState, value, index) => {
  // 1st time: currentState = 0, value = 1, index = 0
  // 2nd time: currentState = 1, value = 2, index = 1
  // 3rd time: currentState = 3, value = 3, index = 2
  // 4th time: currentState = 6, value = 4, index = 3
  // 5th time: currentState = 10, value = 5, index = 4
  return currentState + value;
}, 0);
console.log(".reduce Returned:", sum);

// use reduce to do the squares ...

let squares2 = numbers.reduce((currentState, value, index) => {
  currentState.push(value * value);
  return currentState;
}, []);

console.log("squares2:", squares2);

// 1: []
// 2: [2]
// 3: [2],
// 4: [2, 4]
// 5: [2, 4]
let evensFromReduce = numbers.reduce((currentState, value, index) => {
  if (value % 2 === 0) {
    currentState.push(value);
  }
  return currentState;
}, []);

console.log("Evens from .reduce:", evensFromReduce);

