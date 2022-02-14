/**
 * #231 - Power of Two
 *
 * Given an integer n, return true if it is a power of two. Otherwise, return
 * false. An integer n is a power of two, if there exists an integer x such
 * that n == 2x.
 *
 * Difficulty: Easy
 * Time Submitted: 02/17/2022 14:24
 *
 * Notes
 * The solution is based on the _Iterative_ technique.
 *
 * Submission details
 *   - Runtime: 64 ms, faster than 99.57% of other JS submissions
 *   - Memory: 42.7 MB, less than 19.94% of other JS submissions
 *
 * Complexity analysis
 *   - O(1) time
 *   - O(1) space
 *
 */

/**
  * @param {number} n
  * @return {boolean}
  */
 var isPowerOfTwo = function(n) {
     return n < 1 ?  false  :  (n & (n - 1)) === 0;
 };
