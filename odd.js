let b = [6, 9, 78, 98, 34, 98765, 45];
function oddArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}

console.log(oddArray(b));