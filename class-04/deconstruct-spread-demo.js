let numbers = [2, 4, 6, 8, 10];

// add the number 12 to the end of the array
numbers.push(12);
console.log(numbers);

// add number 0 to the front of the array
numbers.unshift(0);
console.log(numbers);

console.log("==========================");

// add the number 100 to the end of the array, directly
let newNumbers = [...numbers, 100];
console.log(newNumbers);

// add the number -100 to the front of the array, directly
let newNumbers2 = [-100, ...newNumbers];
console.log(newNumbers2);

console.log("==========================");

let person = { name: "John" };
let newPerson = { ...person, age: 30 };
console.log(newPerson);

console.log("==========================");

console.log("person", person);

let copyOfPerson = { ...person };

copyOfPerson.name = "Fred";
console.log("copyOfPerson", copyOfPerson);

console.log("person", person);

