/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNumbers = s.split('');

  const integers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let answer = 0;
  let number = 0;
  let previousNumber = 0;

  for (let i = romanNumbers.length - 1; i >= 0; i--) {
    number = integers[romanNumbers[i]];

    if (number < previousNumber) {
      answer = answer - number;
    } else {
      answer = answer + number;
    }

    previousNumber = number;
  }

  return answer;
};


describe('13. Roman to Integer', () => {

  it('III should be 3', () => {
    expect(romanToInt('III')).toStrictEqual(3);
  });

  it('LVIII should be 58', () => {
    expect(romanToInt('LVIII')).toStrictEqual(58);
  });

  it('MCMXCIV should be 1994', () => {
    expect(romanToInt('MCMXCIV')).toStrictEqual(1994);
  });

  it('DCXXI should be 621', () => {
    expect(romanToInt('DCXXI')).toStrictEqual(621);
  });

});