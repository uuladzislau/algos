/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;

  let right = nums.length - 1;
  
  // finding target with binary search

  while (left <= right) {
    const split = Math.trunc((left + right) / 2);

    if (target === nums[split]) {
      return split;
    }

    if (target < nums[split]) {
      right = split - 1;
    } else {
      left = split + 1;
    }
  }

  // target not found; return left as insert position

  return left;
};

describe('35. Search Insert Position', () => {

  it('Case #1', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toStrictEqual(2);
  });

  it('Case #2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toStrictEqual(1);
  });

  it('Case #3', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toStrictEqual(4);
  });

  it('Case #4', () => {
    expect(searchInsert([1, 3, 4, 5, 6, 7, 8], 4)).toStrictEqual(2);
  });

}); 