/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  // A = 65
  // Z = 90
  // a = 97
  // z = 122
  // 0 = 48
  // 9 = 57

  const isNumber = (charCode) => 48 <= charCode && charCode <= 57;

  const isLowerAlpha = (charCode) => 65 <= charCode && charCode <= 90;

  const isUpperAlpha = (charCode) => 97 <= charCode && charCode <= 122;

  const isAlphanumeric = (charCode) => isNumber(charCode) || isLowerAlpha(charCode) || isUpperAlpha(charCode);

  const equalIgnoreCase = (leftCharCode, rightCharCode) => {
    if (isNumber(leftCharCode) && isNumber(rightCharCode)) return leftCharCode === rightCharCode;

    const normalizedLeft = isLowerAlpha(leftCharCode) ? leftCharCode : leftCharCode - 32;
    const normalizedRight = isLowerAlpha(rightCharCode) ? rightCharCode : rightCharCode - 32;

    return normalizedLeft === normalizedRight;
  };

  let left = 0;
  let right = s.length - 1;

  while (right - left > 0) {

    let leftCharCode = s.charCodeAt(left);
    let rightCharCode = s.charCodeAt(right);

    while (!isAlphanumeric(leftCharCode) && left <= s.length) {
      leftCharCode = s.charCodeAt(++left);
    }

    while (!isAlphanumeric(rightCharCode) && right >= 0) {
      rightCharCode = s.charCodeAt(--right);
    }

    if (!leftCharCode && !rightCharCode) return true;

    if (!equalIgnoreCase(leftCharCode, rightCharCode)) {
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