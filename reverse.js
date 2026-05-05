let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reverseArray(data) {
    let mid = Math.floor(data.length / 2);
    for (let i = 0; i < mid; i++) {
        let temp = data[i];
        data[i] = data[data.length - 1 - i];
        data[data.length - 1 - i] = temp;
    }
    return data;
}

console.log(reverseArray(arr));