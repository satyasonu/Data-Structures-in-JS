/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let start = 1,
    end = 1,
    k = 1;
  while (end <= nums.length) {
    if (nums[start - 1] == nums[end]) {
      k++;
      start = start + 2;
      end = end + 2;
    } else {
      start++;
      end++;
    }
    return k;
  }
};
