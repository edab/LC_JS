/**
 * #542 - Rotate Array
 *
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for
 * each cell.
 *
 * The distance between two adjacent cells is 1.
 *
 * Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
 * Output: [[0,0,0],[0,1,0],[1,2,1]]
 *
 * Difficulty: Medium
 * Time Submitted: 02/08/2022 22:45
 *
 * Notes
 * Exploring using DFS or BFS lead to a complexity of O(N) both time and space.
 * This is a DP based solution, with better performance.
 *
 * Submission details
 *   - Runtime: 144 ms, faster than 94.28% of other JS submissions
 *   - Memory: 49.9 MB, less than 58.23% of other JS submissions
 *
 * Complexity analysis
 *   - O(N) time | where N is the number of elements in the input matrix
 *   - O(1) space
 *
 */

 /**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {

  const rows = mat.length;
  if (rows === 0)
    return mat;
  const cols = mat[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++ ) {
      if (mat[r][c] > 0) {
        mat[r][c] = 100001;
        if (r > 0)
          mat[r][c] = Math.min(mat[r][c], mat[r - 1][c] + 1);
        if (c > 0)
          mat[r][c] = Math.min(mat[r][c], mat[r][c - 1] + 1);
      }
    }
  }


  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c-- ) {
      if (r < rows - 1)
        mat[r][c] = Math.min(mat[r][c], mat[r + 1][c] + 1);
      if (c < cols - 1)
        mat[r][c] = Math.min(mat[r][c], mat[r][c + 1] + 1);
    }
  }


  return mat;

};
