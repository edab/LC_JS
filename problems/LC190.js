/**
 * #190 - Reverse Bits
 *
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * Difficulty: Easy
 * Time Submitted: 02/17/2022 15:57
 *
 * Notes
 * The solution is based on the _Bit Manipulation_ technique.
 *
 * Submission details
 *   - Runtime: 88 ms, faster than 67.54% of other JS submissions
 *   - Memory: 44 MB, less than 26.31% of other JS submissions
 *
 * Complexity analysis
 *   - O(1) time
 *   - O(1) space
 *
 */

/**
  * @param {number} n - a positive integer
  * @return {number} - a positive integer
  */
 var reverseBits = function(n) {

   let result = 0;

   for(let i = 0; i < 32; i++) {
     result = (result * 2) + (n & 1);
     n = n >>> 1;
   }

   return result;
 };
