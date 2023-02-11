console.log(this);


let user = {
    firstName: "kanak",
    courseCount: 5,
    getCourseCount: function(){
        console.log("line no 8", this);

        function sayHello() {
            console.log("Hello");
            // most confusing part
            // because "For all regular function calls, this points to a window object"

            console.log("Line No 13 is saying hello", this);
            
        }
        sayHello();
    },
    
};

// calling a function through a function
user.getCourseCount();



function sayHello() {
    console.log("Hello");
    
}

// True function call
sayHello();