let names = ["youtube", "facebook","instagram","Netflix","amazon"]

// for(const n of names){
//     console.log(n);
// }

let symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    lco: "Learncodeonline",
    amz: "amazone"
}

for(const n in symbols ){

    // $symbols[n] is the way of reading the values from an object
    // console.log(symbols[n]);
    console.log(`keys in symbols are: ${n} and values is: ${symbols[n]}`);
}