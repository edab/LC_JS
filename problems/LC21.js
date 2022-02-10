/**
 * #21 - Merge Two Sorted Lists
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Difficulty: Easy
 * Time Submitted: 02/13/2022 21:41
 *
 * Notes
 * The solution is based on the _Recursion_ technique.
 *
 * Submission details
 *   - Runtime: 100 ms, faster than 53.65% of other JS submissions
 *   - Memory: 44.3 MB, less than 18.36% of other JS submissions
 *
 * Complexity analysis
 *   - O(N+M) time | where N and M are the length of the two input lists.
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
  * @param {ListNode} list1
  * @param {ListNode} list2
  * @return {ListNode}
  */
 var mergeTwoLists = function(list1, list2) {
   if (list1 == null) return list2;
   if (list2 == null) return list1;

   if (list1.val < list2.val) {
     list1.next = mergeTwoLists(list1.next, list2);
     return list1;
   } else {
     list2.next = mergeTwoLists(list1, list2.next);
     return list2;
   }

 };
