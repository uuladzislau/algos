/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const wordLength = words[0].length;
  const windowSize = words.length * wordLength;

  // Create and init map
  const wordsMap = new Map();

  for (const word of words) {
    const inMap = wordsMap.get(word);
    if (inMap === undefined) {
      wordsMap.set(word, 1);
    } else {
      wordsMap.set(word, inMap + 1);
    }
  }

  /**
   * @param {string} window - Current window.
   * @param {number} wordLength - Length of the words in the map.
   * @param {Map} wordsMap - Map of words with number of their occurences.
   * @return {boolean} - `true` if current window contains all words, otherwise `false`.
   */
  const windowHasAllPermutations = function(window, wordLength, wordsMap) {
    // we don't need to interate 1-by-1, we can skip the N characters
    // where N = length of the word.
    for (let start = 0; start <= window.length - words[0].length; start += wordLength) {
      const part = window.slice(start, start + wordLength);
      const inMap = wordsMap.get(part);
      if (inMap === undefined || inMap === 0) {
        // If current part of the window is not found in the map
        // Or the number of remaining occurrences of this word is already '0'
        // Then we can assume that current window is not a match.
        return false;
      } else {
        wordsMap.set(part, inMap - 1);
      }
    }
    // If we reached this point, that we can assume that
    // we have found all words in the given window.
    return true;
  };

  const hits = [];

  for (let start = 0; start <= s.length - windowSize; start++) {
    const window = s.slice(start, start + windowSize);

    if (windowHasAllPermutations(window, wordLength, new Map(wordsMap))) {
      hits.push(start);
    }
  }

  return hits;
};


describe('30. Substring with Concatenation of All Words', () => {

  it('Case #1', () => {
    expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toStrictEqual([0, 9]);
  });

  it('Case #2', () => {
    expect(findSubstring('wordgoodgoodgoodbestword', ['word','good','best','word'])).toStrictEqual([]);
  });

  it('Case #3', () => {
    expect(findSubstring('barfoofoobarthefoobarman', ['bar','foo','the'])).toStrictEqual([6, 9, 12]);
  });
});