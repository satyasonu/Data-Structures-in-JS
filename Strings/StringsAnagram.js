/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  var freqArr = new Array(26).fill(0);
  for (var i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt(0) - 97;
    freqArr[index]++;
  }
  for (var i = 0; i < s.length; i++) {
    let index = t[i].charCodeAt(0) - 97;
    freqArr[index]--;
  }
  let sum = 0;
  for (let i of freqArr) {
    if (i > 0) {
      sum += i;
    }
  }
  return sum;
};
