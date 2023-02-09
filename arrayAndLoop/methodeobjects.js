let user = {
    firstName : "kanak",
    lastName : "Sonowal",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(this.courseName);

    },
    getCourseCount: function() {
        return `${this.firstName}is enrolled in total od ${this.courseList.length} course`
        
    },

};
let courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("react Js course");
user.buyCourse("react Js course");
console.log(user.getCourseCount());