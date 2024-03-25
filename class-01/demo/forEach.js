let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// iterate the array with a for loop, and print out the square of each element.
for (let i = 0; i < numbers.length; i++) {
  // i is the "index" of the array
  // numbers[i] is the value of the element in the array at that index
  let square = numbers[i] * numbers[i];
  console.log(i, numbers[i], square);
}

console.log("-------------------------------");

// for each element in the array, print out the square of the element
// .forEach() takes a "callback function" as it's parameter
// The callback function receives "value" and "index" as parameters
// .forEach ALWAYS runs the callback function for EACH element in the array
// .forEach does NOT return anything

let output = numbers.forEach(function (value, index) {
  // console.log(index, value, value * value);
  return value * value;
});

console.log(output);

console.log("-------------------------------");

numbers.forEach((val, idx) => {
  console.log(idx, val, val * val);
});

console.log("-------------------------------");

numbers.forEach((val) => console.log(val, val * val));

console.log("-------------------------------");

numbers.forEach(square);

function square(val, idx) {
  console.log(idx, val, val * val);
}

