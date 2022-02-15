/**
 * #191 - Number of 1 Bits
 *
 * Write a function that takes an unsigned integer and returns the number of '1'
 * bits it has (also known as the Hamming weight).
 * Note:
 *   - Note that in some languages, such as Java, there is no unsigned integer
 *     type. In this case, the input will be given as a signed integer type.
 *     It should not affect your implementation, as the integer's internal
 *     binary representation is the same, whether it is signed or unsigned.
 *   - In Java, the compiler represents the signed integers using 2's
 *     complement notation. Therefore, in Example 3, the input represents the
 *     signed integer. -3.
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
 *   - O(N) time | where N is the number of bit of the given number
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
