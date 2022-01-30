/**
 * #283 - Move Zeroes
 *
 * Given an integer array nums, move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * Difficulty: Easy
 * Time Submitted: 01/31/2022 10:21
 *
 * Notes
 * The solution is based on the _Two Pointers_ technique,
 * one for zero values and another for traversing the array and search
 * for digits.
 *
 * Submission details
 *   - Runtime: 171 ms, faster than 25.52% of other JS submissions
 *   - Memory Usage: 46.5 MB, less than 5.25% of other JS submissions
 *
 * Complexity analysis
 *   - O(N) time | where N is the number of array elements
 *   - O(1) space
 *
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  const N = nums.length;

  if (N === 1)
    return;

  let zero;

  for (let i=0; i < N; i++) {

    if (zero === undefined) {
      if (nums[i] === 0) {
        zero = i;
      }
    } else if (nums[i] !== 0) {
      nums[zero] = nums[i];
      nums[i] = 0;
      zero++;
    }

  }

};
