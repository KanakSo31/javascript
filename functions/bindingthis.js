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
// dj.getInfo()// this wil throw error but 
//we can use the binding methode to get the referance from the older methode that is kanak
kanak.getInfo.bind(dj)();//we can use this or we can use below methode
//by storing into a referance

let djInfo = kanak.getInfo.bind(dj);
djInfo();