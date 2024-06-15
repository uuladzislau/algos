/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let isBalanced = true;

  const maxDepth = function(root) {
    if (root === null) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    if (Math.abs(leftDepth - rightDepth) > 1) {
      isBalanced = false;
    }

    return 1 + Math.max(leftDepth, rightDepth);
  };

  maxDepth(root);

  return isBalanced;
};