let User = {
    name : "",
    getUserName: function(){
        console.log(`user name is: ${this.name}`);
    }
}

let kanak = Object.create(User);
console.log(kanak);

kanak.name = "Kanak Sonowal"
kanak.getUserName();

let user1 = Object.create(User,{
    name: {value: "Kanak Sunuwal"}
});

user1.getUserName();