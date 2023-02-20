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