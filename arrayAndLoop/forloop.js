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
