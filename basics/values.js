// :::FALSY VALUES:::::
// Undefined
// Null
// 0 Zero
// '' Empty String 
// NaN not a number

// eg

let user = "0"

if (user){
    console.log("condition is true");
}

// hard Check
let user1 = "2"
if ("2" === user1){
    console.log("Number Matched");
}