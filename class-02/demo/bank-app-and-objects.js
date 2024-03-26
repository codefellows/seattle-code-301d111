// A bank account that a balance and a function to withdraw money
function bankAccountApp() {
  // PRIVATE VARIABLE: Only visible or accessible within the function
  let balance = 400;

  let withdrawals = {
    zachary: 4,
    allie: 0,
  };

  // PRIVATE FUNCTION: Only visible or accessible within the function
  function withdraw(amount, name) {
    if (withdrawals[name] < 5) {
      balance = balance - amount;
      withdrawals[name]++;
    } else {
      console.log(name, "Denied!");
    }
  }

  // Passing a function as a parameter
  // Functions in JavaScript are first class citizens
  zachary(balance, withdraw);
  zachary(balance, withdraw);
  zachary(balance, withdraw);
  zachary(balance, withdraw);
  zachary(balance, withdraw);
  zachary(balance, withdraw);

  console.log("New Bank Balance Is: ", balance);
  console.log(withdrawals);
}

function zachary(money, withdraw) {
  console.log("ZACHARY'S STUFF");
  console.log("Current Balance Is:", money);
  withdraw(100, "zachary");

  allie(money, withdraw);
}

function allie(money, withdraw) {
  withdraw(50, "allie");
}

bankAccountApp();

// Object destructuring
let person = { name: "john", age: 55 };
console.log(person);

person = { ...person, name: "Fred" };
console.log(person);

person = { ...person, hair: false };
console.log(person);

