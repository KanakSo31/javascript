
const User = require("./javascript/Scope/moduleClassimport.js")
const kanak = new User("kanak", "kanak@gmail.com")

console.log(kanak.getInfo());
kanak.cnrollCourse("React Bootcamp");
kanak.cnrollCourse("Angular Bootcamp");


console.log(kanak.getCourseList());

let courses = kanak.getCourseList();

courses.forEach((c) => console.log(c));