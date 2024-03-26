let numbers = [1, 2, 3, 4];

// ForEach runs a function for each element in an array, returns nothing
// Like on halloween. Kids come by, I give them candy, they bring back nothing
// I serve an array of kids, iterating through all of them, the function
// is literally: Give them candy
let newNumbersFromForEach = numbers.forEach(function (value, index) {
  return value * 2;
});

console.log(newNumbersFromForEach);

// newNumbers will be an array
// newNumbers will have the same number of elements as the original
// Each element in newNumbers will be whatever that function returned
// Like on halloween, I iterate the array of kids, giving them candy
// and they return with the wrappers, so I have as many wrappers as kids served
let newNumbers = numbers.map(function (value, index) {
  return value * 2;
});

console.log(newNumbers);

// SIDE NOTE: React likes to render whatever gets returned by something ...
// When you have an array of stuff, you can "map" in React and it will
// render the resulting array becuase it was "returned"

// <Header />;

// function Header() {
//   return (
//     <header>
//       <h1>Hello World</h1>
//     </header>
//   );
// }

