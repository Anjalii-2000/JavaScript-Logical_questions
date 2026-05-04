const data = [1, 2, [3, 4], [5, [6, 7]]];
let Collect = [];
function flatten(data) {

    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {
            flatten(data[i])
        } else {
            Collect.push(data[i]);
           
        }
    }
}

flatten(data);
console.log(Collect);