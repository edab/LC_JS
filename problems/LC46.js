/**
 * #46 - Permutations
 *
 * Given an array nums of distinct integers, return all the possible
 * permutations. You can return the answer in any order.
 *
 * Constraints:
 *   - 1 <= nums.length <= 6
 *   - -10 <= nums[i] <= 10
 *   - All the integers of nums are unique.
 *
 * Difficulty: Medium
 * Time Submitted: 02/17/2022 20:04
 *
 * Notes
 * The solution is based on the _Backtracking_ and _Recursion_, and the
 * idea to keep two different sets of numbers, one with the digits already
 * choosen and one with the remaining digits.
 *
 * Submission details
 *   - Runtime: 88 ms, faster than 80.99% of other JS submissions
 *   - Memory: 44.9 MB, less than 24.27% of other JS submissions
 *
 * Complexity analysis
 *   - O(N!) time | where N is the number of array elements
 *   - O(N * N!) space | where N is the number of array elements
 *
 */

/**
  * @param {number[]} nums
  * @return {number[][]}
  */
 var permute = function(nums, combination = [], result = []) {

   if (nums.length == 1) result.push([...combination, ...nums]);

   for (let i = 0; i < nums.length; i++) {
     const newNums = nums.filter((n, index) => index !== i);
     combination.push(nums[i]);
     permute(newNums, combination, result);
     combination.pop();
   }

   return result;
 };
