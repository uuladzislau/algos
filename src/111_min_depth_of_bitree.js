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
var minDepth = function(root) {
  if (root === null) return 0;

  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);

  if (root.left !== null && root.right !== null) {
    return 1 + Math.min(leftDepth, rightDepth);
  }

  return 1 + Math.max(leftDepth, rightDepth);
};

describe('111. Minimum Depth of Binary Tree', () => {

  it('Case #1', () => {
    //
    //        3
    //   +----+----+
    //   |         |
    //   9         20
    //        +----+----+
    //        |         |
    //       15         7
    //
    const node_9 = new TreeNode(9);
    const node_7 = new TreeNode(7);
    const node_15 = new TreeNode(15);
    const node_20 = new TreeNode(20, node_15, node_7);
    const root = new TreeNode(3, node_9, node_20);

    expect(minDepth(root)).toStrictEqual(2);
  });

  it('Case #2', () => {
    //
    //   2 -> 3 -> 4 -> 5 -> 6
    //
    const node_6 = new TreeNode(6);
    const node_5 = new TreeNode(5, null, node_6);
    const node_4 = new TreeNode(4, null, node_5);
    const node_3 = new TreeNode(3, null, node_4);
    const root = new TreeNode(2, null, node_3);

    expect(minDepth(root)).toStrictEqual(5);
  });

  it('Case #3', () => {
    //
    //              1
    //         +----+----+
    //         |         |
    //         2         3
    //    +----+----+
    //    |         |
    //   4          5
    //
    const node_5 = new TreeNode(5);
    const node_4 = new TreeNode(4);
    const node_3 = new TreeNode(3);
    const node_2 = new TreeNode(2, node_4, node_5);
    const root = new TreeNode(1, node_2, node_3);

    expect(minDepth(root)).toStrictEqual(2);
  });

});