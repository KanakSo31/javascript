let User = function (firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course enrolled in: ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function () {
    console.log(`Your Name is: ${this.firstName}`);
};

let kanak = new User("Kanak", 2);

if (kanak.hasOwnProperty("firstName")) {
    kanak.getFirstname()
}
kanak.getCourseCount();
// console.log(kanak);

let Ukanak = new User("Kanak1", 3);
Ukanak.getFirstname()
Ukanak.getCourseCount();
// console.log(Ukanak);