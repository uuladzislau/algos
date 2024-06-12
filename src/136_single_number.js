/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];

  const numbers = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numbers.has(nums[i])) {
      numbers.delete(nums[i]);
    } else {
      numbers.set(nums[i], 0);
    }
  }

  return numbers.keys().next().value;
};

describe('136. Single Number', () => {

  it('Case #1', () => {
    expect(singleNumber([2, 2, 1])).toStrictEqual(1);
  });

  it('Case #2', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toStrictEqual(4);
  });

  it('Case #3', () => {
    expect(singleNumber([1])).toStrictEqual(1);
  });

});