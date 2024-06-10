/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }

  // didn't find better solution (yet)
  nums1.sort((a, b) => a - b);
};

describe('88. Merge Sorted Arrays', () => {

  it('Case #1', () => {
    const nums1 = [1,2,3,0,0,0];
    merge(nums1, 3, [2,5,6], 3);
    expect(nums1).toStrictEqual([1,2,2,3,5,6]);
  });

  it('Case #2', () => {
    const nums1 = [1];
    merge(nums1, 1, [], 0);
    expect(nums1).toStrictEqual([1]);
  });

  it('Case #3', () => {
    const nums1 = [1];
    merge(nums1, 0, [1], 1);
    expect(nums1).toStrictEqual([1]);
  });

});
