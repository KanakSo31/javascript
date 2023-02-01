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
let google = true;


// write the block of code with if-else statement to pass the aggument passed by the user


if(email || facebook || google){

    console.log("Login succesfull");
}