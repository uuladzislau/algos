/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

describe('27. Remove Element', () => {

  it('Case #1', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const expected = [2, 2];

    judge(nums, val, expected);
  });

  function judge(nums, val, expected) {
    const k = removeElement(nums, val);

    expect(k).toStrictEqual(expected.length);

    expect(nums.slice(0, k)).toStrictEqual(expected);
  }
});