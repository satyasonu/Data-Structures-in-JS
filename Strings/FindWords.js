/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const ch = {};

  for (var c of chars) {
    ch[c] = 1 + (ch[c] || 0);
  }
  let result = 0;
  for (var w of words) {
    var copy = { ...ch };
    for (const c of w) {
      if (c in copy && copy[c] !== 0) {
        copy[c] -= 1;
      } else {
        result -= w.length;
        break;
      }
    }

    result += w.length;
  }

  return result;
};
