let a = [12, 45, 87, 90, 89, 89, 34, 56];

let target = 89;
function getTarget() {
    let found = false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === target) {
            found = true;
            return i;
        } 
    }

    return -1; // if not found
}
console.log(getTarget(a));