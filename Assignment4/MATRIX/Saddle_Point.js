function findSaddlePoint(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let saddlePoint = -1;
  
    for (let i = 0; i < m; i++) {
      let minRow = matrix[i][0];
      let minCol = 0;
  
      // Find the minimum element in the current row
      for (let j = 1; j < n; j++) {
        if (matrix[i][j] < minRow) {
          minRow = matrix[i][j];
          minCol = j;
        }
      }
  
      // Check if the minimum element is also the maximum in its column
      let isMaxCol = true;
      for (let k = 0; k < m; k++) {
        if (matrix[k][minCol] > minRow) {
          isMaxCol = false;
          break;
        }
      }
  
      if (isMaxCol) {
        saddlePoint = minRow;
        break;
      }
    }
  
    return saddlePoint;
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const saddlePoint = findSaddlePoint(matrix);
  if (saddlePoint === -1) {
    console.log("No saddle point");
  } else {
    console.log(`Saddle point: ${saddlePoint}`);
  }
  // Output: No saddle point

  