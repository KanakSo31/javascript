class User{
    constructor(name, email){
        this.name =name;
        this.email =email;
    }
    #courseList = []
    getInfo(){
        return{name: this.name, email: this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){    //getter helps to grab some information from a private class
        return this.#courseList;
    }
// privacy using static //put "static" key to see the result "static login()"
 login(){
    return "you're Signed In";
}
}

class SubAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am subadmin"
    }
    login(){
        return "login for admin Only"
        //super keyword H/W inheritance video
    }
}

module.exports = User;

const rabon = new User ("User", "User@usr.com");
console.log(rabon.getInfo());
rabon.enrollCourse("Angular Course");
console.log(rabon.getCourseList());
console.log(rabon.CourseList);

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());