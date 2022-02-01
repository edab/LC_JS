/**
 * #19 - Remove Nth Node From End of List
 *
 * Given the head of a linked list, remove the nth node from the end of the
 * list and return its head.
 *
 * Difficulty: Medium
 * Time Submitted: 02/01/2022 07:54
 *
 * Notes
 * The solution is based on the _two runners_ method. The edge case ([3], 1)
 * can be simply handled inserting a node at the beginning.
 *
 * Submission details
 *   - Runtime: 64 ms, faster than 98.89% of other JS submissions
 *   - Memory: 42.9 MB, less than 5.70% of other JS submissions
 *
 * Complexity analysis
 *   - O(N) time | where N is the number of nodes in the linked list
 *   - O(1) space
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {

  const start = new ListNode()
  let fast = head;
  let slow = start;
  start.next = head;

  for (let i = 0; i < n; i++ ) {
    fast = fast.next
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next;
  return start.next;

};
