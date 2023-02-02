// Creating an application with role including:
// admin - gets full access
// subadmin - gets access to vreate/delet courses
// testprep - get acces to create / delet test 
// user - gets access to consume content

let user = "testprep";

switch (user) {
    case admin:
        console.log("Gets full access");
        break;
    case subadmin:
        console.log("Gets access to vreate/delet courses");
        break;
    case testprep:
        console.log("Get acces to create / delet test");
        break;
    case user:
        console.log("Gets access to consume content");
        break;
        

    default:
        console.log("Tria user trying to LogIn");
        break;
}