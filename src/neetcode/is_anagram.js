class Solution {
  /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const tokensS = {};
    const tokensT = {};

    for (let i = 0; i < s.length; i++) {
      tokensS[s[i]] = 1 + (tokensS[s[i]] || 0);
      tokensT[t[i]] = 1 + (tokensT[t[i]] || 0);
    }

    for (const key in tokensS) {
      if (tokensS[key] !== tokensT[key]) {
        return false;
      }
    }

    return true;
  }
}
