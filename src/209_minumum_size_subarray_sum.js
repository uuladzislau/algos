/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

  let left = 0;
  let minLen = Infinity;
  let currentSum = 0;

  for (let right = 0; right < nums.length; right++) {

    currentSum += nums[right];

    while (currentSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};


describe('209. Minimum Size Subarray Sum', () => {

  it('Case #1', () => {
    expect(minSubArrayLen(7, [2,3,1,2,4,3])).toStrictEqual(2);
  });

  it('Case #2', () => {
    expect(minSubArrayLen(4, [1,4,4])).toStrictEqual(1);
  });

  it('Case #3', () => {
    expect(minSubArrayLen(11, [1,1,1,1,1,1,1,1])).toStrictEqual(0);
  });

  it('Case #4', () => {
    expect(minSubArrayLen(11, [1,2,3,4,5])).toStrictEqual(3);
  });

});