/**
 * #2 - Remove Nth Node From End of List
 *
 * Given a string s, find the length of the longest substring without
 * repeating characters.
 *
 * Difficulty: Medium
 * Time Submitted: 02/01/2022 09:35
 *
 * Notes
 * The solution is based on the _sliding window_ method.
 *
 * Submission details
 *   - Runtime: 152 ms, faster than 53.90% of other JS submissions
 *   - Memory: 49.4 MB, less than 10.21% of other JS submissions
 *
 * Complexity analysis
 *   - O(N) time | where N is the length of the string
 *   - O(min(N,M)) space | where N is the length of the string and M is the
 *                         size of the substrings.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {

  const hash = {};
  const n = s.length;
  let maxLength = 0;
  let start = 0, end = 0;

  while (end < n) {

    if (hash[s[end]] === undefined) {
      hash[s[end]] = 1;
    } else {
      hash[s[end]]++;
    }

    while (hash[s[end]] > 1) {
      hash[s[start]]--;
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);

    end++;

  }

  return maxLength;

};
