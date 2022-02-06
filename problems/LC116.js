/**
 * #116. Populating Next Right Pointers in Each Node
 *
 * You are given a perfect binary tree where all leaves are on the same level,
 * and every parent has two children. The binary tree has the following
 * definition:
 *
 * struct Node {
 *  int val;
 *  Node *left;
 *  Node *right;
 *  Node *next;
 * }
 *
 * Populate each next pointer to point to its next right node. If there is no
 * next right node, the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 *
 * Notes:
 *   - The number of nodes in the tree is in the range [0, 212 - 1].
 *   - -1000 <= Node.val <= 1000
 *
 * Difficulty: Medium
 * Time Submitted: 02/06/2022 18:40
 *
 * Notes
 * The solution is based on the _DFS_ recursive algorithm.
 *
 * Submission details
 *   - Runtime: 93 ms, faster than 71.89% of other JS submissions
 *   - Memory Usage: 48.6 MB, less than 9.17% of other JS submissions
 *
 * Complexity analysis
 *   - O(|V|) time | where V is the number of nodes
 *   - O(d) space | where d is the maximum depth of the tree
 *
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {

  let head = root;

  function buildConnectedTree(node) {
    if (node == null) return;
    if (node.left !== null) node.left.next = node.right;
    if (node.right !== null && node.next !== null) node.right.next = node.next.left;
    buildConnectedTree(node.left);
    buildConnectedTree(node.right);
  }

  buildConnectedTree(head);

  return head;

};
