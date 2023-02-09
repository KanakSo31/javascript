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
