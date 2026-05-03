let a = [1, 2, 3, 4, 5, 6];
function evenArray(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    return even;
}
console.log(evenArray(a));