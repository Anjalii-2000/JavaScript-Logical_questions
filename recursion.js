// task is by for loop 
function result(x){
  let resultt = 1;
  for(let i=1; i<= x; i++){
    resultt = resultt * i;
  }
  return resultt
}

console.log(result(5));  // factorial - 120 


// now task is done by recursion
function result(x){
  if(x==0) return 1;
  return x * result(x-1);
}

console.log(result(3)); // 6 we have to return otherwise it will give  type error 