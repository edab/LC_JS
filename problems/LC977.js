/**
 * #977 - Squares of a Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in
 * non-decreasing order.
 *
 * Difficulty: Easy
 * Time Submitted: 01/30/2022 11:05
 *
 * Notes
 * The solution is based on the _Two Pointers_ technique,
 * one for positive values and one for negative ones.
 *
 * Submission details
 *   - Runtime: 76 ms, faster than 100.00% of other JS submissions
 *   - Memory: 48.9 MB, less than 5.25% of other JS submissions
 *
 * Complexity analysis
 *   - O(N) time | where N is the number of array elements
 *   - O(N) space | where N is the number of array elements
 *
 */

 /**
  * @param {number[]} nums
  * @return {number[]}
  */
 var sortedSquares = function(nums) {

     let left = 0, right = nums.length - 1;
     const ret = new Array(nums.length);

     for (let pos = right; pos >= 0; pos-- ) {
         if (Math.abs(nums[left]) > Math.abs(nums[right])) {
             ret[pos] = (nums[left] * nums[left]);
             left++;
         } else {
             ret[pos] = (nums[right] * nums[right]);
             right--;
         }
     }

     return ret;

 };
