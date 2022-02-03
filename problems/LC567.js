/**
 * #567. Permutation in String
 *
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1,
 * or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 *
 * Notes:
 * - 1 <= s1.length, s2.length <= 104
 * - s1 and s2 consist of lowercase English letters.
 *
 * Difficulty: Medium
 * Time Submitted: 02/03/2022 20:56
 *
 * Notes
 * The solution is based on the _Sliding Window_ technique.
 *
 * Submission details
 *   - Runtime: 116 ms, faster than 74.17% of other JS submissions
 *   - Memory Usage: 49.2 MB, less than 11.03% of other JS submissions
 *
 * Complexity analysis
 *   - O(N+M) time | where N is the number of array elements
 *   - O(1) space
 *
 */

/**
* @param {string} s1
* @param {string} s2
* @return {boolean}
*/
const checkInclusion = function(s1, s2) {

 if (s1.length > s2.length)
   return false;
 if (s2.length == 0)
   return true;

 const s1Chars = new Array(26).fill(0);
 const s2Chars = new Array(26).fill(0);
 let matches = 0;

 function getIndex(c) {
   return c.charCodeAt(0) - 'a'.charCodeAt(0);
 }

 for (let c of s1)
   s1Chars[getIndex(c)]++;

 for (let i = 0; i < s1.length; i++)
   s2Chars[getIndex(s2[i])]++;

 for (let i = 0; i < s1Chars.length; i++)
   if (s1Chars[i] === s2Chars[i])
     matches++;
     if (matches === 26)
       return true;

 for (let left = 0, right = s1.length; right < s2.length; left++, right++) {

   if (s2Chars[getIndex(s2[left])] === s1Chars[getIndex(s2[left])]) {
     matches--;
   } else if (s2Chars[getIndex(s2[left])] === s1Chars[getIndex(s2[left])] + 1) {
     matches++;
   }
   s2Chars[getIndex(s2[left])]--;

   if (s2Chars[getIndex(s2[right])] === s1Chars[getIndex(s2[right])]) {
     matches--;
   } else if (s2Chars[getIndex(s2[right])] === s1Chars[getIndex(s2[right])] - 1) {
     matches++;
   }
   s2Chars[getIndex(s2[right])]++;

   if (matches === 26)
     return true;
 }

 return false;

};
