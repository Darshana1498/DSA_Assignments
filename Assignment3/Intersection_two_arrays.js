function findIntersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let intersection = [];
  
    for (let element of set1) {
      if (set2.has(element)) {
        intersection.push(element);
      }
    }
  
    return intersection;
  }
  
  const arr1 = [1, 2, 2, 1];
  const arr2 = [2, 2];
  console.log(findIntersection(arr1, arr2)); // Output: [ 2 ]
  