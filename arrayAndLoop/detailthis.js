console.log(this);


let user = {
    firstName: "kanak",
    courseCount: 5,
    getCourseCount: function(){
        console.log("line no 8", this);
    },
    
};

// calling a function through a function
user.getCourseCount();

