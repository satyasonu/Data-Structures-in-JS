/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = new Array(n + 1).fill(Integer.Max_Value);
  dp[0] = 0;
  let ans = Integer.Max_Value;
  for (var i = 1; i * i <= n; i++) {
    ans = Math.min(ans, 1 + dp[n - i * i]);
  }
  return dp[ans];
};
