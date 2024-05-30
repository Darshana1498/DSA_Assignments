function printBoundaryElements(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
  
    // Print the first row
    for (let i = 0; i < m; i++) {
      console.log(matrix[0][i]);
    }
  
    // Print the last row
    for (let i = 0; i < m; i++) {
      console.log(matrix[n - 1][i]);
    }
  
    // Print the first column
    for (let i = 0; i < n; i++) {
      console.log(matrix[i][0]);
    }
  
    // Print the last column
    for (let i = 0; i < n; i++) {
      console.log(matrix[i][m - 1]);
    }
  }
  
  const matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [1, 2, 3]
  ];
  
  printBoundaryElements(matrix);
  // Output:
  // 123
  // 567
  // 123