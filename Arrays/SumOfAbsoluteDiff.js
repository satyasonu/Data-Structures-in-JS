/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  let result = [];
  let n = nums.length;
  let pre_Sum = 0;
  let sum = 0;
  for (var j = 0; j < nums.length; j++) {
    sum += nums[j];
  }
  total_Sum = sum;
  for (var i = 0; i < nums.length; i++) {
    total_Sum -= nums[i];
    let left = i * nums[i] - pre_Sum;
    let right = total_Sum - (n - i - 1) * nums[i];
    pre_Sum += nums[i];
    result[i] = left + right;
  }
  return result;
};
