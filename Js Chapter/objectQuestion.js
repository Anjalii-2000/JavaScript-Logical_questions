const obj = [
    { Book1: ["auth1", "auth2"] },
    { Book2: ["auth3", "auth4", "auth5"] },
    { Book3: ["auth6", "auth1", "auth7"] }
];

let result = [];
for (let i = 0; i < obj.length; i++) {
let bookName = Object.keys(obj[i])[0];
console.log(bookName);
}

const obj = [
    { Book1: ["auth1", "auth2"] },
    { Book2: ["auth3", "auth4", "auth5"] },
    { Book3: ["auth6", "auth1", "auth7"] }
];

let result = [];

for (let i = 0; i < obj.length; i++) {

    let key = Object.keys(obj[i])[0];

    let value = Object.values(obj[i])[0];

    if (value.includes("auth1")) {
        result.push(key);
    }
}

console.log(result);