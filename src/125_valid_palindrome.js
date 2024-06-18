/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  // 0 = 48, 9 = 57
  const isNumber = (charCode) => 48 <= charCode && charCode <= 57;

  // a = 97, z = 122
  const isLowerAlpha = (charCode) => 65 <= charCode && charCode <= 90;

  // A = 65, Z = 90
  const isUpperAlpha = (charCode) => 97 <= charCode && charCode <= 122;

  for (let left = 0, right = s.length - 1; left < right;) {
    const leftCharCode = s.charCodeAt(left);
    const rightCharCode = s.charCodeAt(right);

    if (!(isNumber(leftCharCode) || isLowerAlpha(leftCharCode) || isUpperAlpha(leftCharCode))) {
      left++;
      continue;
    }

    if (!(isNumber(rightCharCode) || isLowerAlpha(rightCharCode) || isUpperAlpha(rightCharCode))) {
      right--;
      continue;
    }

    const normalizedLeft = isLowerAlpha(leftCharCode) ? leftCharCode : leftCharCode - 32;
    const normalizedRight = isLowerAlpha(rightCharCode) ? rightCharCode : rightCharCode - 32;

    if (normalizedLeft !== normalizedRight) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

describe('125. Valid Palindrome', () => {

  it('Case #1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toStrictEqual(true);
  });

  it('Case #2', () => {
    expect(isPalindrome('race a car')).toStrictEqual(false);
  });

  it('Case #3', () => {
    expect(isPalindrome('.,')).toStrictEqual(true);
  });
});