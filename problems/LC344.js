/**
 * #344 - Reverse String
 *
 * Write a function that reverses a string. The input string is given as an
 * array of characters s.
 *
 * You must do this by modifying the input array in-place with O(1) extra
 * memory.
 *
 * Difficulty: Easy
 * Time Submitted: 01/31/2022 10:45
 *
 * Notes
 * The solution is based on the _Two Pointers_ technique,
 * one for left character and another for right character.
 *
 * Submission details
 *   - Runtime: 162 ms, faster than 31.43% of other JS submissions
 *   - Memory Usage: 49.9 MB, less than 5.59% of other JS submissions
 *
 * Complexity analysis
 *   - O(N) time | where N is the number of array elements
 *   - O(1) space
 *
 */

 /**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

  const N = s.length;
  let left = 0, right = N - 1;

  if (N < 2) {
    return;
  }

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }

};
