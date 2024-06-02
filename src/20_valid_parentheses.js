/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  console.log('start');

  if (!s) return true;

  /** @type {string[]} */
  const stack = [];

  const pair = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  for (const token of s.split('')) {
    const last = stack[stack.length - 1];

    if (last && pair[last] === token) {
      stack.pop();
    } else {
      stack.push(token);
    }
  }

  return stack.length === 0;
};


describe('20. Valid Parentheses', () => {

  it('\'()\' is valid', () => {
    expect(isValid('()')).toStrictEqual(true);
  });

  it('\'()[]{}\' is valid', () => {
    expect(isValid('()[]{}')).toStrictEqual(true);
  });

  it('\'(]\' is not valid', () => {
    expect(isValid('(]')).toStrictEqual(false);
  });

  it('\'\' is valid', () => {
    expect(isValid('')).toStrictEqual(true);
  });
});