class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const hits = [];

    for (let i = 0; i < nums.length; i++) {
      if (hits[nums[i]] !== undefined) {
        return true;
      }
      hits[nums[i]] = 1;
    }

    return false;
  }
}
