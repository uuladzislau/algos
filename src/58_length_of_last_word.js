/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

  let wordFound = false;

  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {

    if (s[i] === ' ') {

      if (!wordFound) {
        continue;
      }
      else {
        return count;
      }

    }

    if (!wordFound) {
      wordFound = true;
    }

    count++;
  }

  return count;

};


describe('58. Legnth of Last Word', () => {

  it('Case #1', () => {
    expect(lengthOfLastWord('Hello World')).toStrictEqual(5);
  });

  it('Case #2', () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toStrictEqual(4);
  });

  it('Case #3', () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toStrictEqual(6);
  });

  it('Case #4', () => {
    expect(lengthOfLastWord('a')).toStrictEqual(1);
  });

}); 