// A deep copy is a copy of an object or array where all levels of data are fully duplicated, including nested objects and arrays.
//  This means the copy is completely independent, and changes in it do not affect the original.

let ar1 = [[10, 20], [30, 40]];
console.log(ar1);

let ar2 = structuredClone(ar1);
console.log(ar2);

ar1[0].push(23);
console.log(ar1);
console.log(ar2);


let arr1 = [{ name: "ann" }, { name: "'benn" }];
console.log(arr1);

let arr2 =structuredClone(arr1);
console.log(arr2);
arr1[1].name = "anjali";
console.log(arr1);
console.log(arr2);