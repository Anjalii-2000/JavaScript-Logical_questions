let a = [1, 2, 2, 3, 3, 4];
function nonRepeat(data) {
    let obj = {};
    for (let i = 0; i < data.length; i++) {
        let ele = data[i]
        obj[ele] = (obj[ele] || 0) + 1;
    }
    for (let i = 0; i < data.length; i++) {
        if (obj[data[i]] === 1) {
            return data[i];
        }
    }
    return -1;
}
console.log(nonRepeat(a));