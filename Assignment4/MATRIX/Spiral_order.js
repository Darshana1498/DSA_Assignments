function spiralOrder(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const spiral = [];
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = m - 1;
  
    while (left <= right && top <= bottom) {
      // Traverse the top row from left to right
      for (let i = left; i <= right; i++) {
        spiral.push(matrix[top][i]);
      }
      top++;
  
      // Traverse the right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        spiral.push(matrix[i][right]);
      }
      right--;
  
      // Traverse the bottom row from right to left
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          spiral.push(matrix[bottom][i]);
        }
        bottom--;
      }
  
      // Traverse the left column from bottom to top
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          spiral.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return spiral;
  }
  
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  const spiralTraversal = spiralOrder(matrix);
  console.log(spiralTraversal); // Output: [ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ]
  