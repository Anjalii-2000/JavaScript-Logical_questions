let a = [12, 45, 7, 34, 23, 89, 2];
function maxNumber(data){
let max = data[0];
for(let i = 0; i< data.length; i++){
    if(data[i]> max){
        max = data[i];
    }
}
return max;

}
console.log(maxNumber(a));