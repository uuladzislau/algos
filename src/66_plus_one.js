/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let lastIndex = digits.length - 1;

  if (digits[lastIndex] < 9) {
    digits[lastIndex] = digits[lastIndex] + 1;
    return digits;
  }

  digits[lastIndex] = 0;
  let accum = 1;

  while (accum > 0) {
    lastIndex--;
    accum--;

    if (lastIndex < 0) {
      digits.unshift(1);
      return digits;
    }

    if (digits[lastIndex] < 9) {
      digits[lastIndex] = digits[lastIndex] + 1;
    } else {
      digits[lastIndex] = 0;
      accum++;
    }
  }

  return digits;
};


describe('66. Plus One', () => {

  it('Case #1', () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4]);
  });

  it('Case #2', () => {
    expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
  });

  it('Case #3', () => {
    expect(plusOne([9])).toStrictEqual([1, 0]);
  });

  it('Case #4', () => {
    expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toStrictEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  });

});
