let returnedValue = Math.max(2, 2, 5, 7, 4, 2,8);
// console.log(returnedValue);

let myObj = {};

Object.assign(myObj,{a:1, b:2, c:3}, {z:9, y:6, x:8});
// console.log(myObj);

function sumOne(a, b) {
    return a+b;
}

let myA = [5, 4] 
// console.log(sumOne(myA));
console.log(sumOne(...myA));//SPREAD operator..this break the array and try to separate them indivisual 

function sumTwo(a, b, ...args) {//REST operator  ..convert indivisual value into an array.
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        // sum = sum + arg; //long hand notation
        sum += arg;   //shorthand notation
    }
    return [sum, multi];
}

console.log(sumTwo(2, 3, 1, 1, 1));