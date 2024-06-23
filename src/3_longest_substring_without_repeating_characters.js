/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let leftBoundary = 0;
  let rightBoundary = 0;
  let result = 0;

  const met = new Set();

  while (rightBoundary < s.length) {
    const currentChar = s[rightBoundary];

    if (met.has(currentChar)) {
      result = Math.max(met.size, result);
      met.delete(s[leftBoundary]);
      leftBoundary++;
    } else {
      met.add(currentChar);
      rightBoundary++;
    }
  }

  return Math.max(met.size, result);
};

describe('3. Longest Substring Without Repeating Characters', () => {

  it('Case #1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toStrictEqual(3);
  });

  it('Case #2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toStrictEqual(1);
  });

  it('Case #3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toStrictEqual(3);
  });

});