let a = [1, 4, 34, 2, 9, 90, 1, 4, 2];
function removeDuplicate(data) {
    let obj = {};
    let unique = [];
    for (let i = 0; i < data.length; i++) {
        if (!obj[data[i]]) {
            obj[data[i]] = true;
            unique.push(data[i]);
        }
    }
    return unique;
}

console.log(removeDuplicate(a));