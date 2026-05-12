let a = [1, 3, 4, 2, 2];

function findDuplicate(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] === data[j]) {
        return data[i];
      }
    }
  }
}

console.log(findDuplicate(a));