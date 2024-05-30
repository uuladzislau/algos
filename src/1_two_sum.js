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