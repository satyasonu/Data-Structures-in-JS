/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const ch = {};

  for (const c of chars) {
    ch[c] = 1 + (ch[c] || 0);
  }
  let result = 0;
  for (const w of words) {
    const copy = { ...ch };
    for (const c of w) {
      if (c in copy && copy[c] !== 0) {
        copy[c] -= 1;
      } else {
        res -= w.length;
        break;
      }
    }

    res += word.length;
  }

  return res;
};
