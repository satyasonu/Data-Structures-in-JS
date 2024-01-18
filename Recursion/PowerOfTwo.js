/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 0 || n == 1) {
    return true;
  }
  let x = 0;
  while (2 ** x < n) {
    x++;
  }
  return 2 ** x === n;
};
