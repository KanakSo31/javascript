// define function that can answer the role of user 
// a user can be on the following role
// admin - with all available access
// sub-admin  - with access to create/ delet course 
// testprep - access to create/ delet tests 
// user - consume all content 
// other - trail user. 

// input: getUserRole(name, role)


function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all available access`
            break;
    
        case "subadmin":
            return `${name} is subadmin acces with create and delet course`
            break;
        case "testprep":
            return `${name} is testprep acces with create and delet tests`
            break;
        case "user":
            return `${name} is user to consume course content`
            break;
            
            default:
            return `${name} is a trial user`
            break;
    }
    
}

console.log(getUserRole("kanak", "testprep"));