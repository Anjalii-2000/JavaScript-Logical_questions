// Question- What is Shallow copy?
// Answer- A shallow copy is a copy of an object or array where only the top-level values are duplicated, but any nested objects or arrays are still referenced from the original. This means changes to nested data affect both the original and the copy.
let ar1 = [[10, 20], [30, 40]];
console.log(ar1); 	//[[10, 20], [30, 40]]
let ar2 = ar1.slice();  //  or    let ar2 = […ar1];
console.log(ar2);	//[[10, 20], [30, 40]]
ar1[1].push(99);
console.log(ar1);	//[[10, 20], [30, 40,99]]
console.log(ar2);	//[[10, 20], [30, 40,99]]
