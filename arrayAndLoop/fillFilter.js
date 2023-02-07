let testArray = [2, 4, 6, 7, 9, 3, 5, 8];

// The value from where the value will be fill is the first element(3) and the second Element(6) is the postion from where it will fill and the 3re element is the end number upto where it will fill.
// IMPORTAT Is that the starting position is inclusive and the end point is exclusive //it is depends on the language as the array starts from index-0

console.log(testArray.fill("kanak", 3, 6));


// My Numbers
// Filtering Numbers
let myNumber = [25, 26, 59, 46, 78, 89, 98, 76, 65, 62, 63, 65, 64, 68,];

const result = myNumber.filter((num) => num != 65);

console.log(result);

// SLICE AND SPLICE