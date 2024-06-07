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
    const key = a[i] + b[i];

    if (carry > 0) {
      if (key === '00') {
        answer = '1' + answer;
        carry--;
      }
      else if (key === '01' || key === '10') {
        answer = '0' + answer;
      }
      else {
        answer = '1' + answer;
      }
    }
    else {
      if (key === '00') {
        answer = '0' + answer;
      }
      else if (key === '01' || key === '10') {
        answer = '1' + answer;
      }
      else {
        answer = '0' + answer;
        carry++;
      }
    }
  }

  if (carry > 0) {
    return '1'.repeat(carry) + answer;
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