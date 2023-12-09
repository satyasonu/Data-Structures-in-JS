/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  var ans = [2 * nums.length];
  for (let i = 0; i < 2 * nums.length; i++) {
    if (i < nums.length) {
      ans[i] = nums[i];
    } else {
      ans[i] = nums[i - nums.length];
    }
  }
  return ans;
};
console.log(getConcatenation([1, 2, 1]));
