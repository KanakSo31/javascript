class User{
    constructor(name, email){
        this.name =name;
        this.email =email;
    }
    courseList = []
    getInfo(){
        return{name: this.name, email: this.email};
    }
    enrollCourse(name){
        this.courseList.push(name);
    }
    getCourseList(){
        return this.courseList;
    }
}

module.exports = User;

const rabon = new User ("User", "User@usr.com");
console.log(rabon.getInfo());
rabon.enrollCourse("Angular Course");
console.log(rabon.getCourseList());
console.log(rabon.CourseList);