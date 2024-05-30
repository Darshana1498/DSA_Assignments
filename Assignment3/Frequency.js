function countFrequency(arr) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
      if (freq[arr[i]]) {
        freq[arr[i]]++;
      } else {
        freq[arr[i]] = 1;
      }
    }
    return freq;
  }
  
  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  console.log(countFrequency(arr));
  // Output: { '1': 1, '2': 2, '3': 3, '4': 4 }
  