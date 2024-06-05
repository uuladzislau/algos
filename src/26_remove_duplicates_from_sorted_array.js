/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let lastSwapped = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[lastSwapped]) {
      nums[++lastSwapped] = nums[i];
    }
  }

  return lastSwapped + 1;
};

describe('26. Remove Duplicates from Sorted Array', () => {

  it('Case #1', () => {
    const nums = [1, 1, 2];
    const expected = [1, 2];

    judge(nums, expected);
  });

  it('Case #2', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expected = [0, 1, 2, 3, 4];

    judge(nums, expected);
  });

  it('Case #3', () => {
    const nums = [];
    const expected = [];

    judge(nums, expected);
  });

  function judge(nums, expected) {
    const k = removeDuplicates(nums);

    expect(k).toStrictEqual(expected.length);

    expect(nums.slice(0, k)).toStrictEqual(expected);
  }
});