let personsName = "John";

// the argument "name" is copy of personsName. It's unique, not a reference
// PASS BY VALUE
function capitalizeName(name) {
  name = name.toUpperCase();
  return name;
}

let capName = capitalizeName(personsName);

console.log("personsName", personsName);
console.log("capName", capName);

let numbers = [2, 4, 6, 8];

// argument "nums" is not a copy of the array, it's a reference to it.
// In JS, Arrays and Objects are passed by reference.
// PASS BY REFERENCE
function doubleNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2;
  }
}

doubleNumbers(numbers);

console.log("Numbers Doubled?", numbers);

let evens = [2, 4, 6, 8];

function doubleEvens(...nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2;
  }
}

doubleEvens(evens);
console.log("Evens Doubled?", evens);

let person = { name: "John" };

function changePerson(p) {
  p.name = "Jane";
}

changePerson(person);
console.log("Person", person);

