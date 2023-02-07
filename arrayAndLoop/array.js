let countries = ["india", "USA", "Japan", "France", "Russia"];

let states = ["Rajasthan", "Delhi", "Assam", "Mumbai"]

console.log(states[2]);


// check the length of an array
console.log("The array Length is:" + states.length);

// replace an array element
states[0] = "Punjab"
console.log(states);

// store the multiple valeus inside arry
let user = ["kanak", "kanak@gmail.com", 3, 34, true]
console.log(user);

// deleting one or two value at the end
user.pop();
user.pop();
console.log(user);
// adding a value to an array at the begining and shift the other value to next position
user.unshift("NEW VALUE")
console.log(user);

// Deleting Value From the begining
user.shift();
console.log(user);

// finding the index or position of an element
console.log(user.indexOf("hello"));