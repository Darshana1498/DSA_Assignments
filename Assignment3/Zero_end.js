function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
        nonZeroIndex++;
      }
    }
  
    return arr;
  }
  
  const arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
  console.log(moveZerosToEnd(arr)); // Output: [ 1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0 ]
