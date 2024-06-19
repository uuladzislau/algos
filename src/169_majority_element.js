/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) return nums[0];

  const hitMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNumberHits = hitMap.get(nums[i]);

    if (currentNumberHits === undefined) {
      hitMap.set(nums[i], 1);
    } else if ((currentNumberHits + 1) > (nums.length / 2)) {
      return nums[i];
    } else {
      hitMap.set(nums[i], currentNumberHits + 1);
    }
  }
};

describe('169. Majority Element', () => {

  it('Case #1', () => {
    expect(majorityElement([3, 2, 3])).toStrictEqual(3);
  });

  it('Case #2', () => {
    expect(majorityElement([2,2,1,1,1,2,2])).toStrictEqual(2);
  });

  it('Case #3', () => {
    expect(majorityElement([2,2,1,1,1,2,2])).toStrictEqual(2);
  });

});