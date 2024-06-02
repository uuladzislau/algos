/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return '';

  let shortest = strs[0];

  for (const str of strs) {
    if (str.length < shortest.length) {
      shortest = str;
    }
  }

  let prefix = shortest;

  for (const str of strs) {
    while(!str.startsWith(prefix)) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
};


describe('14. Longest Common Prefix', () => {

  it('Test case #1', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toStrictEqual('fl');
  });

  it('Test case #2', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toStrictEqual('');
  });

  it('Test case #3', () => {
    expect(longestCommonPrefix([''])).toStrictEqual('');
  });

  it('Test case #4', () => {
    expect(longestCommonPrefix(['flower'])).toStrictEqual('flower');
  });

  it('Test case #5', () => {
    expect(longestCommonPrefix([])).toStrictEqual('');
  });

  it('Test case #6', () => {
    expect(longestCommonPrefix(['', ''])).toStrictEqual('');
  });

});