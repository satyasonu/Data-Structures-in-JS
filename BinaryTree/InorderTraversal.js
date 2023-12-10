/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Recursive Solution
var inorderTraversal = function (root) {
   result = [];
  inOrder(root);
  return result;
}
  let inOrder =  (root) => {
    if (!root) {
      return;
    }
    inOrder(root.left);
    result.push(root.val);
    inOrder(root.right);
  
};
console.log(inorderTraversal(1, null, 2, 3));
