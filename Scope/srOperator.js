let returnedValue = Math.max(2, 2, 5, 7, 4, 2,8);
// console.log(returnedValue);

let myObj = {};

Object.assign(myObj,{a:1, b:2, c:3}, {z:9, y:6, x:8});
// console.log(myObj);

function sumOne(a, b) {
    return a+b;
}

let myA = [5, 4]
console.log(sumOne(...myA));//SPREAD operator..