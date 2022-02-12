/**
 * #994 - Rotting Oranges
 *
 * You are given an m x n grid where each cell can have one of three values:
 *
 *  - 0 representing an empty cell
 *  - 1 representing a fresh orange
 *  - 2 representing a rotten orange
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten
 * orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a
 * fresh orange. If this is impossible, return -1.
 *
 * Difficulty: Medium
 * Time Submitted: 02/13/2022 21:30
 *
 * Notes
 * The solution is based on the _Multiple Head BFS_ technique,
 *
 * Submission details
 *   - Runtime: 73 ms, faster than 96.20% of other JS submissions
 *   - Memory: 44.3 MB, less than 36.01% of other JS submissions
 *
 * Complexity analysis
 *   - O(M*N) time | where M and N are the input grid dimensions
 *   - O(1) space
 *
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

  let minute = 0;
  let freshOranges = 0;
  let queue = [];
  const rows = grid.length;
  if (rows === 0)
    return grid;
  const cols = grid[0].length;
  const dir = [[-1, 0], [1, 0], [0, 1], [0, -1]];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++ ) {
      if (grid[r][c] === 1) freshOranges++;
      if (grid[r][c] === 2) queue.push([r, c]);
    }
  }

  while (queue.length > 0 && freshOranges > 0) {

    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {

      const [r,c] = queue.shift();

      for ( let i = 0; i < dir.length; i++ ) {

        let newR = r + dir[i][0];
        let newC = c + dir[i][1];

        if (( newR < 0 ) || ( newR >= rows )) continue;
        if (( newC < 0 ) || ( newC >= cols )) continue;
        if ( grid[newR][newC] !== 1 ) continue;

        grid[newR][newC] = 2;
        queue.push([newR, newC]);
        freshOranges--;

      }

    }

    minute++;

  }

  return freshOranges === 0? minute : -1;


};
