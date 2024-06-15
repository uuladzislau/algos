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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;

  if (nums.length === 1) return new TreeNode(nums[0]);

  const mid = Math.trunc(nums.length / 2);

  const leftSubTree = sortedArrayToBST(nums.slice(0, mid));
  const rightSubTree = sortedArrayToBST(nums.slice(mid + 1, nums.length));

  return new TreeNode(nums[mid], leftSubTree, rightSubTree);
};


describe('108. Convert Sorted Array to Binary Search Tree', () => {

  it('Case #1', () => {
    const root = new TreeNode(
      0,
      new TreeNode(-3, new TreeNode(-10)),
      new TreeNode(9, new TreeNode(5))
    );

    expect(sortedArrayToBST([-10,-3,0,5,9])).toStrictEqual(root);
  });

  it('Case #2', () => {
    const root = new TreeNode(3,new TreeNode(1));

    expect(sortedArrayToBST([1, 3])).toStrictEqual(root);
  });

  it('Case #3', () => {
    expect(sortedArrayToBST([])).toStrictEqual(null);
  });

  it('Case #4', () => {
    expect(sortedArrayToBST([100])).toStrictEqual(new TreeNode(100));
  });
});