/**
 * #704 - First Bad Version
 *
 * Given an array of integers `nums` which is sorted in ascending
 * order, and an integer target, write a function to search
 * target in nums. If target exists, then return its index.
 * Otherwise, return -1.
 *
 * You must write an algorithm with `O(log n)` runtime complexity.
 *
 * Difficulty: Easy
 * Time Submitted: 01/21/2022 16:26
 *
 * Notes
 * The solution is based on the _Binary Search_ algorithm,
 * paying attention to the exit condition, where the boundary of
 * bad versions can appear in two different places.
 *
 * Submission details
 *   - Runtime: 68 ms, faster than 97.94% of other JS submissions
 *   - Memory Usage: 45.3 MB, less than 5.62% of other JS submissions
 *
 * Complexity analysis
 *   - O(log N) time | where N is the number of array elements
 *   - O(1) space
 *
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function(nums, target) {

   let left = 0, right = nums.length - 1;

   while (left <= right) {
       const middle = (left + right) >> 1;
       if (target > nums[middle]) {
           left = middle + 1;
       } else if (target < nums[middle]) {
           right = middle - 1;
       } else {
           return middle;
       }
   }

   return -1;
};
