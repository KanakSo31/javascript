function init() {
    var firstName= "kanak is a good boy";
    console.log("This is init");

    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}
var value = init();

value();


function doAddition(x) {
    return function (y){
        return x + y;
    };
}

var add5 = doAddition(4);
console.log("The Number Is:", + add5(5));

console.log(doAddition(5)(7)); //capability of printing using parenthesis

//doAddition()()()//curring methode