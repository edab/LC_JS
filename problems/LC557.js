/**
 * #557 - Reverse Words in a String III
 *
 * Given a string s, reverse the order of characters in each word within a
 * sentence while still preserving whitespace and initial word order.
 *
 * Notes:
 * - s contains printable ASCII characters.
 * - s does not contain any leading or trailing spaces.
 * - There is at least one word in s.
 * - All the words in s are separated by a single space.
 *
 * Difficulty: Easy
 * Time Submitted: 01/31/2022 10:58
 *
 * Notes
 * The solution is based on the _map(), reverse() and join()_ builtin JS
 * methods.
 *
 * Submission details
 *   - Runtime: 68 ms, faster than 99.83% of other JS submissions
 *   - Memory Usage: 48.3 MB, less than 6.39% of other JS submissions
 *
 * Complexity analysis
 *   - O(N) time | where N is the number of array elements
 *   - O(1) space
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  return s.split(' ').map(word => word.split("").reverse().join("")).join(" ");
};
