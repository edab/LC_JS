/**
 * #35 - Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found. If not, return the
 * index where it would be if it were inserted in order.
 * You must write an algorithm with `O(log n)` runtime complexity.
 *
 * Difficulty: Easy
 * Time Submitted: 01/28/2022 16:09
 *
 * Notes
 * The solution is based on the _Binary Search_ algorithm,
 * paying attention to the exit condition, since two different
 * cases should be taken into consideration.
 *
 * Submission details
 *   - Runtime: 62 ms, faster than 97.77% of other JS submissions
 *   - Memory: 42.3 MB, less than 5.05% of other JS submissions
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
var searchInsert = function(nums, target) {

    let first = 0, last = nums.length - 1;

    if (target <= nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;

    while (first < last) {
        const middle = (first + last) >> 1;
        if (target < nums[middle]) {
            last = middle - 1
        } else if (target > nums[middle]) {
            first = middle + 1
        } else {
            return middle;
        }
    }

    return nums[first] >= target? first : first + 1;
};
