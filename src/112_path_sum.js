/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let targetFound = false;

  const traverse = function(node, currentSum) {
    if (node === null) return;

    currentSum += node.val;

    // If current node is a leaf...
    if (node.left === null && node.right === null) {
      if (currentSum === targetSum) {
        targetFound = true;
      }
    }

    traverse(node.left, currentSum);
    traverse(node.right, currentSum);
  };

  traverse(root, 0);

  return targetFound;
};