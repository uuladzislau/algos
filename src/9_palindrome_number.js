/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const str = x.toString();

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) {
      return false;
    }
  }

  return true;
};


describe('9. Palindrome Numbers', () => {

  it('121 is a palindrome', () => {
    expect(isPalindrome(121)).toStrictEqual(true);
  });

  it('1221 is a palindrome', () => {
    expect(isPalindrome(2332)).toStrictEqual(true);
  });

  it('-121 is not a palindrome', () => {
    expect(isPalindrome(-121)).toStrictEqual(false);
  });

  it('1220 is not a palindrome', () => {
    expect(isPalindrome(2332)).toStrictEqual(true);
  });

});