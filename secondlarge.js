let arr = [10, 5, 20, 8, 20, 3];
function secondLargestNum(data) {
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < data.length; i++) {
        if (data[i] > first) {
            second = first;
            first = data[i];
        } else if (data[i] !== first && data[i] > second) {
            second = data[i];
        }
    }
    return second;
}
console.log(secondLargestNum(arr));