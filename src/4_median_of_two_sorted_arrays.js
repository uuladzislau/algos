/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const merged = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length || j < nums2.length) {
    const left = nums1[i];
    const right = nums2[j];

    if (left === undefined) {
      merged.push(right);
      j++;
    }
    else if (right === undefined) {
      merged.push(left);
      i++;
    }
    else if (left < right) {
      merged.push(left);
      i++;
    }
    else {
      merged.push(right);
      j++;
    }
  }

  const middle = Math.trunc(merged.length / 2);


  if (merged.length % 2 === 0) {
    return (merged[middle] + merged[middle - 1]) / 2;
  }

  return merged[middle];
};


describe('4. Median of Two Sorted Arrays', () => {

  it('Case #1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toStrictEqual(2);
  });

  it('Case #2', () => {
    expect(findMedianSortedArrays([1, 2], [3,4])).toStrictEqual(2.5);
  });
});
