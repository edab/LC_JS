/**
 * #21 - Merge Two Sorted Lists
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Difficulty: Easy
 * Time Submitted: 02/13/2022 21:41
 *
 * Notes
 * The solution is based on the _Recursion_ technique.
 *
 * Submission details
 *   - Runtime: 100 ms, faster than 53.65% of other JS submissions
 *   - Memory: 44.3 MB, less than 18.36% of other JS submissions
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
