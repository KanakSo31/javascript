let user = {
    firstName : "kanak",
    lastName : "Sonowal",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true
};
console.log(user);

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
console.table(user);


// HW
// Write some object for A mobile and print them in a table