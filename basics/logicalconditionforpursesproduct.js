// allow user to buy product when the user is 
// logged in
// email is verified
// card info is verified
// if anything missing then stop to purchase

let isLoggedIn = true;
let isEmailVerified = false;
let cardInfo = true;

// if (isLoggedIn) {
//     console.log("Logged in Success");
//     if (isEmailVerified) {
//         console.log("Email is verified");
//         if (cardInfo) {
//             console.log("You can Make Purchase");
//         }
//     }
// }

// in one line of code
if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("You'r Allow To do Your Task");
}else{
    console.log("Sorry please Fill the Requirement");
}