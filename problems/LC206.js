/**
 * #206 - Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the
 * reversed list.
 *
 * Difficulty: Easy
 * Time Submitted: 02/13/2022 21:48
 *
 * Notes
 * The solution is based on the _Iterative_ technique.
 *
 * Submission details
 *   - Runtime: 100 ms, faster than 53.65% of other JS submissions
 *   - Memory: 44.3 MB, less than 18.36% of other JS submissions
 *
 * Complexity analysis
 *   - O(N) time | where N is the length of the input list
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
var reverseList = function(head) {

  const prev = new ListNode();
  let node = prev;

  while (head) {
    const tmp = head.next;
    head.next = node.next;
    node.next = head;
    head = tmp;
  }

  return prev.next;

};
