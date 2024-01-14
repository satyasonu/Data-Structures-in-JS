/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let freqArr1 = new Array(26).fill(0);
  let freqArr2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    freqArr1[word1.charCodeAt(i) - "a".charCodeAt(0)]++;
    freqArr2[word2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; i++) {
    if (
      (freqArr1[i] === 0 && freqArr2[i] !== 0) ||
      (freqArr1[i] !== 0 && freqArr2[i] === 0)
    ) {
      return false;
    }
  }

  freqArr1.sort((a, b) => a - b);
  freqArr2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (freqArr1[i] !== freqArr2[i]) {
      return false;
    }
  }

  return true;
};
