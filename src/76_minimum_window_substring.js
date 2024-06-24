/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s === t) return s;

  const map = new Map();

  for (const token of t.split('')) {
    map.has(token) ? map.set(token, map.get(token) + 1) : map.set(token, 1);
  }

  const tokens = new Set(map.keys());

  const containsAllTokens = (window, tokens) => {

    const visited = new Map();

    for (let i = 0; i < window.length; i++) {
      const token = window[i];

      visited.has(token) ? visited.set(token, visited.get(token) + 1) : visited.set(token, 1);
    }


    for (const [token, occurences] of tokens) {
      if (!visited.has(token) || visited.get(token) < occurences) {
        return false;
      }
    }

    return true;
  };

  let best = null;

  for (let left = 0; left < s.length; left++) {
    const currentToken = s[left];

    if (!tokens.has(currentToken)) continue;

    let right = left + t.length;

    while (right <= s.length) {
      const window = s.substring(left, right);

      if (containsAllTokens(window, map)) {
        if (best === null || window.length < best.length) {
          best = window;
        }
        break;
      }

      right++;
    }
  }

  return best;
};
