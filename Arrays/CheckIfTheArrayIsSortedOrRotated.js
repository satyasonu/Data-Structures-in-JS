/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= nums[i - 1]) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
};
