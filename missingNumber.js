let a = [1, 2, 4, 5];

function findMissing(data) {
  let n = data.length + 1; // because one number is missing

  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < data.length; i++) {
    actualSum = actualSum + data[i];
  }

  return expectedSum - actualSum;
}

console.log(findMissing(a));