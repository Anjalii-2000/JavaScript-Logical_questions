let a = [2, 34, 55, 1, 0, 78];
function minNumber(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minNumber(a));