// Constructor Function - defines a class
// Old School
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Prototype methods add functionality to an object created
// by a constructor
Person.prototype.talk = function () {
  console.log("Hi, I'm " + this.name);
};

let john = new Person("John", 55);
console.log(john);
john.talk();

// -------------------------------
// Classes are the same as constructor functions ... but ...
// They're basically "Syntactic Sugar"
// The beggining of "Object orientation"
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log("Hi, I'm " + this.name);
  }
}

class Dog extends Animal {
  constructor(name, age, legs) {
    // Whenever we "ext"
    super(name, age);
    this.legs = legs;
  }

  speak() {
    console.log("WOOF!");
  }
}

let rosie = new Dog("Rosie", 9, 4);
console.log(rosie);
rosie.speak();

