const uno = () =>{
    return "I am One";
};
// const dos = async() =>{ Uncomment to see the effect
// const dos = () =>{
//     setTimeout(()=>{
//         return "I am Two"
//     }, 3000);

// rewriting the methode
const dos = () =>{
   return new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Did You got The Moncy");
    }, 3000);
   });
};
const tres = () =>{
   return "I am three";
};

const callMe = async() =>{
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}
callMe();