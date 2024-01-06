// // if we want to rotate an array by one
// let arr = new Array(1, 2, 3, 4, 5);
// let temp = arr[0];
// for (var i = 1; i < arr.length; i++) {
//   arr[i - 1] = arr[i];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);

//if we want to rotate an array by k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  var temp = new Array(k);
  for (var i = 0; i < k; i++) {
    temp[i] = nums[i];
  }
  for (var i = k; i < nums.length; i++) {
    nums[i - k] = nums[i];
  }
  for (var i = nums.length - k; i < nums.length; i++) {
    nums[i] = temp[i - (nums.length - k)];
  }
};
