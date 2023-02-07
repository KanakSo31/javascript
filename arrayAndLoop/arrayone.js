

function isEven(element) {

    // we can convert this function to a arrow function by adding the => symbol as follows

// let isEven = (element) => {

    if (element % 2 === 0) {
        return true;
    }
    return false;
// we can write it like this as a short form
// return element % 2 === 0;
}

// console.log(isEven(8));

let result = [2, 6, 8, 4].every(isEven)
console.log(result);