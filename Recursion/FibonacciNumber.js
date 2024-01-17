/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  var a = [];
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  a[n] = fib(n - 1) + fib(n - 2);
  return a[n];
};
