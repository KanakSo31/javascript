let temperature;

// getting temperature from google

temperature = 31;

if (temperature <= 20){
    // hardcore the value 
// if (true){
    console.log("it's very cool Outside")
}
if (temperature <= 30){
    console.log("it's Moderate Outside")
}else{
    console.log("it's Really Hot Outside")
}




// LogIn conditions
// Allow user to access course if he is::
// logged in from email
// loged in from google
// logged in from facebook

let email = false;
let facebook = true;
let google = false;


// write the block of code with if-else statement to pass the aggument passed by the user


if(email || facebook || google){

    console.log("Login succesfull");
}
else{
    console.log("!!Opps Sorry Please Login");
}

// show user a signout button if he is authenticated
// otherwise show him option to Login/SignUp

let authenticate = true;

if(authenticate){
    console.log("Show signout button");
}
else{
    console.log("Show login Option");
}


// if the conditions false
let authenticatee = false;

if(authenticatee){
    console.log("Show signout button");
}
else{
    console.log("Show login Option");
}

// now the shorthand way of write
let authenticated = false;
// if else in shorthand methode
authenticated ? console.log("signout Button") : console.log("LogIn");