/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) return '';

  const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = expandAroundCenter(s, i, i);
    const evenPalindrome = expandAroundCenter(s, i, i + 1);

    const palindromeLen = Math.max(oddPalindrome, evenPalindrome);

    if (palindromeLen > end - start) {
      start = i - Math.floor((palindromeLen - 1) / 2);
      end = i + Math.floor(palindromeLen / 2);
    }

  }

  return s.substring(start, end + 1);
};


describe('5. Longest Palindromic Substring', () => {

  it('Case #1', () => {
    expect(longestPalindrome('babad')).toStrictEqual('aba');
  });

  it('Case #2', () => {
    expect(longestPalindrome('cbbd')).toStrictEqual('bb');
  });

  it('Case #3', () => {
    expect(longestPalindrome('a')).toStrictEqual('a');
  });

  it('Case #4', () => {
    expect(longestPalindrome('bb')).toStrictEqual('bb');
  });

  it('Case #5', () => {
    expect(longestPalindrome('ac')).toStrictEqual('c');
  });

  it('Case #5', () => {
    expect(longestPalindrome('jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx')).toStrictEqual('qosoq');
  });

});
