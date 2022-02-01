/**
 * #876 - Middle of the Linked List
 *
 * Given the head of a singly linked list, return the middle node of the
 * linked list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 * Difficulty: Easy
 * Time Submitted: 01/31/2022 21:58
 *
 * Notes
 * The solution is based on the _two runners_ method.
 *
 * Submission details
 *   - Runtime: 54 ms, faster than 99.84% of other JS submissions
 *   - Memory Usage: 42.3 MB, less than 5.26% of other JS submissions
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
 * @return {ListNode}
 */
const middleNode = function(head) {
  let slow = fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
};
