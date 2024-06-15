/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true;

  /**
   * @param {TreeNode} left
   * @param {TreeNode} right
   * @return {boolean}
   */
  const isSymmetricSub = function(left, right) {
    if (left === null && right === null) return true;

    if (left === null || right === null) return false;

    if (left.val !== right.val) return false;

    return isSymmetricSub(left.left, right.right) && isSymmetricSub(left.right, right.left);
  };

  return isSymmetricSub(root.left, root.right);
};