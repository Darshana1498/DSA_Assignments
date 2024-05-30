function isSubset(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    // Check if every element in set2 has a corresponding element in set1
    for (const elem of set2) {
      if (!set1.has(elem)) {
        return false;
      }
    }
  
    return true;
  }
  
  const arr1 = [11, 1, 13, 21, 3, 7];
  const arr2 = [11, 3, 7, 1];
  
  const isSubsetResult = isSubset(arr1, arr2);
  console.log(`Is arr2 a subset of arr1? ${isSubsetResult}`);
  // Output: Is arr2 a subset of arr1? true

  