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
];

function generateLIST() {
    const ul = document.querySelector(".list-group");
    courses.forEach((course) => {
        
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    }); 
}

// generateLIST();
window.addEventListener("load", generateLIST);
