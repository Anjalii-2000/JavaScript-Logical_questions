let arr = [1, 2, 2, 3, 4, 4, 5];

function findDuplicate(duplicate) {
    let even = [];
    let dup = {};

    for (let i = 0; i < duplicate.length; i++) {
        if (!dup[duplicate[i]] ) {
            even.push(duplicate[i]);  
            dup[duplicate[i]] = true; 
        }
    }

    return even;
}

console.log(findDuplicate(arr));