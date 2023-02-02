function sayHello(){
    console.log("Hey There, Kanak Here");
}

sayHello()
sayHello()

// another way
function sayHello(name){
    console.log("Hey There, Kanak Here");
    console.log("Hey There", name);
}

sayHello("kanak")
sayHello("himanta")

// best practice
function sayHello(name){
    console.log("Hey There, Kanak Here");
    console.log(`hello there, ${name}. How do you doing ?`);
}

sayHello("kanak");
sayHello("himanta");

function nomoskar(){
    return "Hello in Assam";
}
let welcome = nomoskar();

console.log(welcome);
// also
console.log(nomoskar());