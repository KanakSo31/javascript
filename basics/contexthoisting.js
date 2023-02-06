tipper("5")

function tipper(a){
    let bill = parseInt(a);
    console.log((bill + 5));
}

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
// So Be careful while calling and declearing a function

let bigTipper = function (a){
    let bill = parseInt(a);
    console.log(bill + 5);
}

bigTipper("480")
