/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {

    let match = true;

    // Inner loop can be replaced with substring function
    // but as we are doing algos here, let's do it by hands.
    // (To be fair, the whole problem can be solved using indexOf...)

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }

    if (match) return i;
  }

  return -1;
};

describe('28. Find the Index of the First Occurrence in a String', () => {

  it('Case #1', () => {
    expect(strStr('sadbutsad', 'sad')).toStrictEqual(0);
  });

  it('Case #2', () => {
    expect(strStr('a', 'a')).toStrictEqual(0);
  });

});