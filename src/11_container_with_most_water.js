/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;

    const h = Math.min(height[left], height[right]);

    const currentArea = width * h;

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

describe('11. Container With Most Water', () => {

  it('Case 1', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toStrictEqual(49);
  });

});