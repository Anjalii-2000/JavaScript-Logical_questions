// Number can store both integer as well as real number.
// 1. integer   2. real number

let a = 34;
console.log(a);
console.log(" a type ", typeof a);

let a1 = "-1/0";
console.log(a1);
console.log(" a1 type ", typeof a1);

let b = "hello " / 9;
console.log(b);
console.log(" b type ", typeof b);


// BigInt 
// range already decided from -9007199254740991 to 9007199254740991 if we increase any of side then it will print end of number 
// which is declared

// we use to find that we have using BigInt so for that we will use suffix at the end of number (n)
let b1 = 9007199254740991n;
console.log(b1);
console.log("type of b1", typeof b1);

