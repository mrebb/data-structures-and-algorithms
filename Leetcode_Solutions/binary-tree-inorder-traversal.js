/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?

 * @param {TreeNode} root
 * @return {number[]}
 */
// Recursive
// const inorderTraversal = function(root,result = []) {
//     if(!root) return result;
//     root.left && inorderTraversal(root.left,result)
//     result.push(root.val)
//     root.right && inorderTraversal(root.right,result)
//     return result;
// };

// Iterative
const inorderTraversal = function(root) {
  let stack = [], result = [];
  let currentNode = root;
  while(currentNode!==null || stack.length>0){
    while(currentNode!==null){
      stack.push(currentNode);
      currentNode = currentNode.left;
    }  
    currentNode = stack.pop();
    result.push(currentNode.val);
    currentNode = currentNode.right;
  }
  return result;
};


