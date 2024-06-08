/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0, right = x, answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else {
      answer = mid;
      left = mid + 1;
    }

  }

  return answer;
};


describe('68. Sqrt(x)', () => {

  it('Case #1', () => {
    expect(mySqrt(4)).toStrictEqual(2);
  });

  it('Case #2', () => {
    expect(mySqrt(8)).toStrictEqual(2);
  });

  it('Case #3', () => {
    expect(mySqrt(121)).toStrictEqual(11);
  });

  it('Case #4', () => {
    expect(mySqrt(0)).toStrictEqual(0);
  });

});