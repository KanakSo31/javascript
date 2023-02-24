const courses = [
    {
        name: "Complete JS Course",
        price: "400",
    },
    {
        name: "Complete NODE Course",
        price: "430",
    },
    {
        name: "Complete REACT Course",
        price: "420",
    },
    {
        name: "Complete C++ Course",
        price: "440",
    },
    {
        name: "Complete MERN Course",
        price: "450",
    },
];

function CourseList() {
    const ul = document.querySelector(".list-grup");
    courses.forEach((course) => {
        
        const li = document.createElement("li")
        li.classList.add("list-grup-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")
    }); 
}

CourseList();
