//Type of conversion
//COnvert from number to string
let a = 123;
console.log(a);     // 123
console.log(typeof a);      //number

// now chnage the type of a value where we have store a value  in variable
let b = String(a);
console.log(b);         //123
console.log(typeof b);          //string


//convert from boolean to string
let b1 = false;
console.log(b1);        // false
console.log(typeof b1);         //boolean

let b2 = String(b1);
console.log(b2);            //false
console.log(typeof b2);         //string


//Convert from String to number
let c1 = "123";
console.log(c1);        //123
console.log(typeof c1);             //string

let c2 = Number(c1);            //123
console.log(c2);
console.log(typeof c2);     //number

// if we have
let d = "123ANjali";
console.log(d);         // 123ANjali
console.log(typeof d);          // string

let d1 = Number(d);
console.log(d1);        //NaN
console.log(typeof d1);         //number


// to avoid we have to write 
let d11 = "1kj23n23"
let d2 = parseInt(d11);
console.log(d2);        //1
console.log(typeof d2);         //number

// if we have alphabet firstly like anjal1234
let e1 = "anjal1234";
let e2 = parseInt(e1);
console.log(e2);        //NaN
console.log(typeof e2);         // number

// iff have space in it at the startng _21
let f1 = " 99";
let f2 = parseInt(f1);
console.log(f2);        //99
console.log(typeof f2);         //number


//Now convert boolean to number 
let i = false;
console.log(i);         //true
console.log(typeof i);          //boolean

let i1 = Number(i);
console.log(i1);        // boolean
console.log(typeof i1);     //number


// how can we convert number and string to boolean
let j = 8;
console.log(Boolean(j));        // true
// 0 is always false
let k = 0;
console.log(Boolean(k));        //false
// -123 is true
let k1 = -887;
console.log(Boolean(k1));       //true
// -infinty
let k2 = -Infinity;
console.log(Boolean(k2));           // true
//infinty
let k3 = Infinity;
console.log(Boolean(k3));           //true

// lets talk about false now 
let k4 = "anjl"/2;
console.log(Boolean(k4));       // false

let k5 = null;
console.log(Boolean(k5));           // false
// empty "" is always false and we have space inside the quaotation like " " will be true