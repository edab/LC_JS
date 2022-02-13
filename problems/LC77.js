/**
 * #77 - Combinations
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of the range [1, n].
 *
 * You may return the answer in any order.
 *
 * Difficulty: Medium
 * Time Submitted: 02/14/2022 09:06
 *
 * Notes
 * The solution is based on the _Backtracking_ technique.
 *
 * Submission details
 *   - Runtime: 133 ms, faster than 75.53% of other JS submissions
 *   - Memory: 48.2 MB, less than 30.84% of other JS submissions
 *
 * Complexity analysis
 *   - O(log N) time | where N is the number of array elements
 *   - O(1) space
 *
 */

/**
  * @param {number} n
  * @param {number} k
  * @return {number[][]}
  */
 var combine = function(n, k) {
   const result = [];

   function backtrack(start, combination) {
     if (combination.length === k) {
       result.push([...combination]);
       return;
     }
     for (let i=start; i <= n; i++) {
       combination.push(i);
       backtrack(i + 1, combination);
       combination.pop();
     }
   }

   backtrack(1, []);
   return result;

 };
