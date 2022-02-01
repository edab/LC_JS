/**
 * #189 - Rotate Array
 *
 * Given an array, rotate the array to the right by k steps,
 * where k is non-negative.
 *
 * Difficulty: Medium
 * Time Submitted: 01/30/2022 19:57
 *
 * Notes
 * The idea is to rotate the array three times: the first the
 * enteire array, the second only the first half, the third the
 * remaining part.
 * [1,2,3,4,5,6,7], k=3
 * Step 1: [7,6,5,4,3,2,1]
 * Step 2: [5,6,7 - 4,3,2,1]
 * Step 3: [5,6,7 - 1,2,3,4]
 * Result -> [5,6,7,1,2,3,4]
 *
 * Submission details
 *   - Runtime: 96 ms, faster than 97.51% of other JS submissions
 *   - Memory: 53.4 MB, less than 5.06% of other JS submissions
 *
 * Complexity analysis
 *   - O(N) time | where N is the number of array elements
 *   - O(1) space | where N is the number of array elements
 *
 */

 /**
  * @param {number[]} nums
  * @param {number} k
  * @return {void} Do not return anything, modify nums in-place instead.
  */
 var rotate = function(nums, k) {
   const n = nums.length;
   k = k % n;

   function reverse_array(array, start, end) {
     while(start < end) {
       let temp = array[start];
       array[start] = array[end];
       array[end] = temp;
       start++;
       end--;
     }
   }

   reverse_array(nums, 0, n - 1);
   reverse_array(nums, 0, k - 1);
   reverse_array(nums, k, n - 1);

 };
