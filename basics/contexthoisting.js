tipper("5")

function tipper(a){
    let bill = parseInt(a);
    console.log((bill + 5));
}



// UNDERSTANDING of function and a variable function



// this function will work fine

// function bigTipper(a){
//     let bill = parseInt(a);
//     console.log(bill + 5);
// }

// bigTipper("480")



// this will throw undefined error

// bigTipper("480")

// let bigTipper = function (a){
//     let bill = parseInt(a);
//     console.log(bill + 5);
// }



// But this will not through any error
// So Be careful while calling and declearing a function keep in mind that there is a term called hoisting

let bigTipper = function (a){
    let bill = parseInt(a);
    console.log(bill + 5);
}

bigTipper("480")

// code hoisting: variable declerations are scanned and made undefined


// this will work
let name = "kanak"
console.log(name);
// but once you try to log the file before declearing it this will throw an undefined messsgae
// console.log(name1);
// let name1 = "kanak"



// this will throw an error due to global context
// console.log(name2);
// let name2 = "kanak";

function sayName() {
    let name2 = "MR. K";
    console.log(name2);
}
sayName();

console.log(name);