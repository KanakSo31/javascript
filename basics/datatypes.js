"use strict"; // used to make inform the browser to treat codes as a new version //

//alert( 3 + 3 ); //here we are using nodejs, not a browser so this will not work now

//We can use it as 

console.log( 3 + 3);

console.log("kanak")



let Name = "kanak"
let Age = 26
let isLoggedIn = false

// console.log(isLoggedIn, Age, Name)

// data types in Js

//number => 2 to the power 53//Range from to
//bigint => used when you hav a large number like for trading and all
//string => "string here"
//boolean => True/False.
//Null    => standalone value
//undefined => undefined value
// symboles =>unique
            // used to identify the uniqueness
//type of
console.log(typeof "kanak")
console.log(typeof undefined)//undefined
console.log(typeof null)//object



//********************************** OPERATIONS **************

let a = 3
let nega = -a
console.log(nega);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(5%2);
// console.log(2/5);

let s1 = "kanak"
let s2 = " is a front-end engineer"
let s3 = s1+s2;
console.log (s3);

// complex situation
// this operation follows some ecmascript rules to print the output
console.log("1" + 2);
console.log("1" + "2");
console.log(1 + "3");
console.log("1" + 2 + 2);
console.log("1" + 2 + "2");
console.log(1 + 2 + "2");

//console.log(3 + 8 % 5 * 9); //bad way to write code
// best practices of writing code is using parenthesis
console.log((3 + 8) % 5 * 9);


// should not try to write code like this
console.log(+true);
console.log(+"");
// isted of write like this
console.log(true);
console.log(false);


let num1, num2, num3

num1 = num2 = num3 = 2 + 8
console.log(num1);