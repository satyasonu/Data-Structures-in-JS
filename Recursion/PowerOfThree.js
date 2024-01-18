/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let x = 0;
  while (3 ** x < n) {
    x++;
  }
  return 3 ** x == n;
};
