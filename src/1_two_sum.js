/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const currentNumber = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const testNumber = nums[j];

      if (currentNumber + testNumber === target) {
        return [i, j];
      }
    }
  }

  throw new Error('Solution not found :(');
};

describe('1. Two Sum', () => {

  it('Test case #1', () => {
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
  });

});