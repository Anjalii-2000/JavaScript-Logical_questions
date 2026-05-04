// function coding(num) {
//     if (num === 0) {
//         console.log("coding has been done");
//         return;
//     } else {
//         console.log(" i am doing coding");
//         coding(num - 1);
//     }
// }
// coding(6);


function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        let fact = n * factorial(n - 1);
        return fact;
    
}

console.log(factorial(3));

