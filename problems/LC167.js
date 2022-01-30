/**
 * #167 - Two Sum II - Input Array Is Sorted
 *
 * Given a 1-indexed array of integers numbers that is already sorted in
 * non-decreasing order, find two numbers such that they add up to a specific
 * target number. Let these two numbers be numbers[index1] and numbers[index2]
 * where 1 <= index1 < index2 <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as
 * an integer array [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may
 * not use the same element twice.
 *
 * Difficulty: Easy
 * Time Submitted: 01/26/2022 12:30
 *
 * Notes
 * The solution is based on the _Two Pointers_ technique,
 * one for left (smallest) values and another for rigth (greatest) values.
 *
 * Submission details
 *   - Runtime: 121 ms, faster than 32.92% of other JS submissions
 *   - Memory Usage: 41.9 MB, less than 7.19% of other JS submissions
 *
 * Complexity analysis
 *   - O(N) time | where N is the number of array elements
 *   - O(1) space
 *
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left+1, right+1];
    else if (sum > target) right--;
    else left++;
  }
  return [];
}
