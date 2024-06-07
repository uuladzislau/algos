/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length < b.length) {
    a = '0'.repeat(b.length - a.length) + a;
  } else {
    b = '0'.repeat(a.length - b.length) + b;
  }

  let answer = '';
  let carry = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    answer = (sum % 2) + answer;
    carry = (sum >= 2) ? 1 : 0;
  }

  if (carry) {
    answer = '1' + answer;
  }

  return answer;
};


describe('67. Add Binary', () => {

  it('Case #1', () => {
    expect(addBinary('11', '1')).toStrictEqual('100');
  });

  it('Case #2', () => {
    expect(addBinary('1010', '1011')).toStrictEqual('10101');
  });

  it('Case #3', () => {
    expect(addBinary('1111', '1111')).toStrictEqual('11110');
  });

});