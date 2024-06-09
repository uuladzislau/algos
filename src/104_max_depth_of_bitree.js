/**
 * Definition for a binary tree node.
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
};

describe('104. Maximum Depth of Binary Tree', () => {

  it('Case #1', () => {
    const root = new TreeNode(
      3,
      new TreeNode(9, null),
      new TreeNode(
        20,
        new TreeNode(15, null),
        new TreeNode(7, null)
      )
    );

    expect(maxDepth(root)).toStrictEqual(3);
  });

  it('Case #2', () => {
    const root = new TreeNode(1, null, new TreeNode(2, null, null));

    expect(maxDepth(root)).toStrictEqual(2);
  });

});