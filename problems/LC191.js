/**
 * #191 - Number of 1 Bits
 *
 * Write a function that takes an unsigned integer and returns the number of '1'
 * bits it has (also known as the Hamming weight).
 *
 * Difficulty: Easy
 * Time Submitted: 02/17/2022 14:40
 *
 * Notes
 * The solution is based on the _Bit Manipulation_ technique.
 *
 * Submission details
 *   - Runtime: 79 ms, faster than 82.06% of other JS submissions
 *   - Memory: 42.4 MB, less than 25.56% of other JS submissions
 *
 * Complexity analysis
 *   - O(1) time
 *   - O(1) space
 *
 */

/**
  * @param {number} n - a positive integer
  * @return {number}
  */
 var hammingWeight = function(n) {
   let result = 0;
   while (n) {
     if (n & 1) result++;
     n = n >>> 1;
   }
   return result;
 };
