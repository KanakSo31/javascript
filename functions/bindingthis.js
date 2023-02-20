let kanak = {
    firstName : "kanak",
    lastName : "sonowal",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
        first name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        And he is studying ${this.courseCount}
        `);
    },

};

let dj = {
    firstName :  "Rock",
    lastName : "DJ",
    role : "sub-Admin",
    courseCount: 4,
};

kanak.getInfo()