const letters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

  if (columnNumber === 0) {
    return '';
  }

  const letter = letters[(columnNumber - 1) % 26];

  return convertToTitle(Math.trunc((columnNumber - 1) / 26)) + letter;
};

describe('168. Excel Sheet Column Title', () => {

  it('Case #1', () => {
    console.log('Case 1');
    expect(convertToTitle(1)).toStrictEqual('A');
  });

  it('Case #2', () => {
    console.log('Case 2');
    expect(convertToTitle(28)).toStrictEqual('AB');
  });

  it('Case #3', () => {
    console.log('Case 3');
    expect(convertToTitle(701)).toStrictEqual('ZY');
  });

  it('Case #4', () => {
    console.log('Case 4');
    expect(convertToTitle(2147483647)).toStrictEqual('FXSHRXW');
  });

  it('Case #5', () => {
    console.log('Case 5');
    expect(convertToTitle(52)).toStrictEqual('AZ');
  });

});