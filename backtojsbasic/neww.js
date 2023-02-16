let User = function (firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(('Course count is: ${this.courseCount}'));
    };
};


let kanak = new User("Kanak", 2);

console.log(kanak);

let Ukanak = new User("Kanak1", 3);

console.log(Ukanak);