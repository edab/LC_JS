/**
 * #695. Max Area of Island
 *
 * You are given an m x n binary matrix grid. An island is a group of 1's
 * (representing land) connected 4-directionally (horizontal or vertical.)
 * You may assume all four edges of the grid are surrounded by water.
 *
 * The area of an island is the number of cells with a value 1 in the island.
 *
 * Return the maximum area of an island in grid. If there is no island,
 * return 0.
 *
 * Notes:
 *   - m == grid.length
 *   - n == grid[i].length
 *   - 1 <= m, n <= 50
 *   - grid[i][j] is either 0 or 1.
 *
 * Difficulty: Medium
 * Time Submitted: 02/06/2022 10:00
 *
 * Notes
 * The solution is based on the _BFS_ algorithm.
 *
 * Submission details
 *   - Runtime: 103 ms, faster than 70.24% of other JS submissions
 *   - Memory Usage: 45.1 MB, less than 32.83% of other JS submissions
 *
 * Complexity analysis
 *   - O(M*N) time | where M and N are the dimensions of the input matrix
 *   - O(1) space
 *
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

  const rows = grid.length;
  const cols = grid[0].length;
  const dir = [[-1, 0], [1, 0], [0, 1], [0, -1]];

  function getIslandArea(r, c) {

    let area = 1;
    grid[r][c] = -1;

    for ( let i = 0; i < dir.length; i++ ) {

      let newR = r + dir[i][0];
      let newC = c + dir[i][1];

      if (( newR < 0 ) || ( newR >= rows )) continue;
      if (( newC < 0 ) || ( newC >= cols )) continue;
      if ( grid[newR][newC] <= 0 ) continue;

      area += getIslandArea(newR, newC);

    }

    return area;

  }

  let result = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++ ) {
      if (grid[r][c] > 0) {
        result = Math.max(result, getIslandArea(r, c));
      }
    }
  }

  return result;

};
