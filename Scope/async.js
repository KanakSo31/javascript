const uno = () =>{
    console.log("I am One");
};
const dos = () =>{
    setTimeout(()=>{
        console.log("Wooohowwwww");
    }, 3000);
    console.log("I am Two");
};
const tres = () =>{
    console.log("I am three");
};
uno();
dos();
tres();