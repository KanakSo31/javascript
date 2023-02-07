function isEven(element) {
    // we can make it a arrow function by adding the => symbol as follows
// function isEven(element) {
    if (element % 2 === 0) {
        return true;
    }
    return false;
// we can write it like this as a short form
// return element % 2 === 0;
}

console.log(isEven(8));