/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let answer = 0;

  const len = columnTitle.length;

  for (let i = 0; i < len; i++) {
    const numericValue = columnTitle.charCodeAt(i) - 64;

    answer += numericValue * Math.pow(26, len - (i + 1));
  }

  return answer;
};

describe('171. Excel Sheet Column Number', () => {
  it('Case #1', () => {
    expect(titleToNumber('A')).toStrictEqual(1);
  });

  it('Case #2', () => {
    expect(titleToNumber('AB')).toStrictEqual(28);
  });

  it('Case #3', () => {
    expect(titleToNumber('ZY')).toStrictEqual(701);
  });

  it('Case #4', () => {
    expect(titleToNumber('AAA')).toStrictEqual(703);
  });

  it('Case #5', () => {
    expect(titleToNumber('FXSHRXW')).toStrictEqual(2147483647);
  });
});