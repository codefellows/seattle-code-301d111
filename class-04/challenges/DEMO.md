# Code Challenge Demo

Remember that simply assigning a new variable to an existing object creates a reference, not a real copy. As you can see here in the demo, changing the copy changes the original.

But, when we use `...` to deconstruct the original, we get a unique clone that is it's own entity and can be managed as such.

```javascript

const obj = {'name': 'bunnies'};
console.log('Obj is', obj);

const copy = obj;
console.log('Copy is', copy);

copy.name = "rabbit";
console.log('Copy is', copy);
console.log('Obj is also changed to', obj); // what???

// use deconstruction to create a new clone, disconnected from the original
const clone = {...obj};

clone.name = "foofoo";

console.log('Clone is', clone);
console.log('Obj is still', obj);
```

We can also assign values using deconstruction

```javascript
let obj = {name: "John"};

// Update ours object with whatever it was (...obj) and add a new property to it
obj = {...obj, age: 55}

// Note: we had to use let above, any idea why?

// You can also do this with clones and keep them disconnected
const clone = {...obj, age: 77}

console.log(obj);
console.log(clone);
```

Arrays work the same way

let family = ["Me", "You", "Kid"];
family = [...family, "Pet"];

// You'll see here that we took whatever family was (...family) and added a value to it!
console.log(family);
