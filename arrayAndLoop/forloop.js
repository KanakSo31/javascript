// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

let myStates = [
    "Assam",
    "Rajasthan",
    "Maharastra",
    1947,
    "taminadu",
    "delhi"
];
// once i put <= to this loop it will throw an undefined error
// for (let i = 0; i <= myStates.length; i++) {
for (let i = 0; i < myStates.length; i++) {
    console.log(myStates[i]);
}
//  to findout all the string
for (let i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] !== 'string') continue;
    console.log(myStates[i]);
}
console.log("break this is different");
//  to findout all the numbers
for (let i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] === 'string') continue;
    console.log(myStates[i]);
}
//  to break all the process once not matched with string
for (let i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] !== 'string') continue;
    console.log(myStates[i]);
}

console.log("while loop from here");
// WHILE LOOP
// let i = 0;

// while(i< myStates.length){
//     console.log(myStates[i]);
//     i++;
// }
// Do While Loop
let j = 0;
do
    {
    console.log(myStates[j]);
    j++;
    }   
    while(j< myStates.length);

    // Even if the condition gets false this loop will run once and it will print the i value once
let k = 200;
do
    {
    console.log(k);
    k++;
    }   
    while(k< 10);