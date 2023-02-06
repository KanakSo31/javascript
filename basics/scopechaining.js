// IMPORTANT:- Child can ask values from the parent but the parents cannot request the value from the child
let name = "Kanak"

console.log("Line number 3", name);

function sayKanak() {
    let name = "Mr. Kanak"
    console.log("Line Number 7", name);
    sayKanakTwo();

    function sayKanakTwo(){
        let name = "MR. KS"
        console.log("Line number 11", name);
    }
}
sayKanak();