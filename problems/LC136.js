/**
 * #136 - Single Number
 *
 * Given a non-empty array of integers nums, every element appears twice except
 * for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only
 * constant extra space.
 *
 * Difficulty: Easy
 * Time Submitted: 02/17/2022 16:26
 *
 * Notes
 * The solution is based on the _XOR_ property.
 *
 * Submission details
 *   - Runtime: 89 ms, faster than 69.94% of other JS submissions
 *   - Memory: 44.8 MB, less than 33.98% of other JS submissions
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
