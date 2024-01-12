/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let vowelCount = 0;
  let midIndex = s.length / 2;
  for (var i = 0; i < midIndex; i++) {
    let firstHalf = s[i];
    let secondHalf = s[midIndex + i];
    if (vowels.has(firstHalf)) vowelCount++;
    if (vowels.has(secondHalf)) vowelCount--;
  }
  return vowelCount === 0;
};
