let a = [1, 2, 3, 4, 5, 4, 3, 2, 1];

function countElement(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        console.log("ele", ele);
        if (obj[ele]) {
            obj[ele] = obj[ele] + 1;
        } else {
            obj[ele] = 1;
        }
    }
    
    return obj;
}

console.log(countElement(a));