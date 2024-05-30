function transposeMatrix(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const transpose = Array.from({ length: n }, () => Array(m).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        transpose[j][i] = matrix[i][j];
      }
    }
  
    return transpose;
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transposedMatrix = transposeMatrix(matrix);
  console.log(transposedMatrix);
  // Output: [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
  