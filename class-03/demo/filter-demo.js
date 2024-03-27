let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map always returns an array the same size as the original array
// That array contains whatever was returned from the callback function
let result = numbers.map((value, index) => {
  return value * 2;
});

// console.log(result.length, result);

// Filter always returns an array
// Each element in the returned array will be the element from the original
// array if the callback returns true;

let subset = numbers.filter((value, index) => {
  return value % 2;
});

console.log(subset.length, subset);

let people = ["John", "Jack", "Cathy", "Zach", "Josie"];
let peopleWithJ = people.filter((value, index) => {
  return value.startsWith("J");
});

console.log(peopleWithJ);

