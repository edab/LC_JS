/**
 * #278 - First Bad Version
 *
 * You are a product manager and currently leading a team to develop
 * a new product. Unfortunately, the latest version of your product
 * fails the quality check. Since each version is developed based
 * on the previous version, all the versions after a bad version
 * are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find
 * out the first bad one, which causes all the following ones to
 * be bad.
 *
 * You are given an API bool isBadVersion(version) which returns
 * whether version is bad. Implement a function to find the first
 * bad version. You should minimize the number of calls to the API.
 *
 * Difficulty: Easy
 * Time Submitted: 01/28/2022 15:22
 *
 * Notes
 * The solution is based on the _Binary Search_ algorithm,
 * paying attention to the exit condition, where the border of
 * bad versions can appear in two different places.
 *
 * Submission details
 *   - Runtime: 73 ms, faster than 65.74% of other JS submissions
 *   - Memory Usage: 42.2 MB, less than 5.49% of other JS submissions
 *
 * Complexity analysis
 *   - O(log N) time | where N is the number of array elements
 *   - O(1) space
 *
 */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        let first = 0, last = n;

        while (first < last) {
            const middle = Math.floor((first + last) / 2);
            if (isBadVersion(middle)) {
                last = middle;
            } else {
                first = middle + 1;
            }
        }

        return last;

    };
};
