/**
 * #617. Merge Two Binary Trees
 *
 * You are given two binary trees root1 and root2.
 * Imagine that when you put one of them to cover the other, some nodes of the
 * two trees are overlapped while the others are not. You need to merge the two
 * trees into a new binary tree. The merge rule is that if two nodes overlap,
 * then sum node values up as the new value of the merged node. Otherwise, the
 * NOT null node will be used as the node of the new tree.
 *
 * Return the merged tree.
 *
 * Note: The merging process must start from the root nodes of both trees.
 *
 * Notes:
 *   - The number of nodes in both trees is in the range [0, 2000].
 *   - -104 <= Node.val <= 104
 *
 * Difficulty: Easy
 * Time Submitted: 02/06/2022 10:00
 *
 * Notes
 * The solution is based on the _BFS_ algorithm.
 *
 * Submission details
 *   - Runtime: 96 ms, faster than 98.02%  of other JS submissions
 *   - Memory Usage: 49.5 MB, less than 16.44% of other JS submissions
 *
 * Complexity analysis
 *   - O(max(N,M)) time | where N is the number of nodes of the first tree,
 *                        and M is the number of nodes of the second tree
 *   - O(1) space
 *
 */

/**
  * Definition for a binary tree node.
  * function TreeNode(val, left, right) {
  *     this.val = (val===undefined ? 0 : val)
  *     this.left = (left===undefined ? null : left)
  *     this.right = (right===undefined ? null : right)
  * }
  */
/**
  * @param {TreeNode} root1
  * @param {TreeNode} root2
  * @return {TreeNode}
  */
 var mergeTrees = function(root1, root2) {

   if (root1 === null && root2 === null) return null;

   const node = new TreeNode((root1 !== null? root1.val : 0) + (root2 !== null? root2.val : 0));

   node.left = mergeTrees( root1 && root1.left, root2 && root2.left);
   node.right = mergeTrees( root1 && root1.right, root2 && root2.right);

   return node;
 };
