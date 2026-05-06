let a = [12, 45, 87, 90, 89, 34, 56];

let target = 89;

let found = false;

for (let i = 0; i < a.length; i++) {
    if (a[i] === target) {
        found = true;
        console.log("Element found at index:", i);
        break;
    }
}

if (!found) {
    console.log("Element not found");
}