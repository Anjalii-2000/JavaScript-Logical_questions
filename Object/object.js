// Using new Object
let user = new Object();
user.name = "Anjali";
user.city = "kullu";
console.log(user);

// object literal and properties 
let user1 = {
    name: "Anjali",
    city: "kullu",
    isAdmin: true
};

console.log(user1.name);
console.log(user1.city);
console.log(user1.isAdmin);

delete user1.isAdmin;
console.log(user1);

// Using Contructor Function 
function User(name, city) {
    this.name = name;
    this.city = city;
}

const user2 = new User("ANjali", "kullu-manali");
console.log(user2);

//ES6 Class
class User6 {
    constructor(name) {
        this.name = name;
    }
}
const user9 = new User6("Anjaliiika");
console.log(user9);

//Property value shorthand
function makeUser(name, city) {
    return {
        name: name,
        city: city
    }
}

let user8 = makeUser("Anjali", 22);
console.log(user.name);
