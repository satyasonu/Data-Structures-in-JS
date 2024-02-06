// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   let count = 1; // Initialize the count of unique elements to 1
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[count - 1]) {
//       nums[count] = nums[i];
//       count++;
//     }
//   }
//   return count;
// };
// nums = [10, 20, 20, 30, 30, 30];
// console.log(removeDuplicates(nums));

function removeDuplicatesArr(array) {
  let temp = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      temp.push(array[i]);
    }
  }
  temp.push(array[array.length - 1]); // Add the last element
  return temp;
}

let array = [10, 20, 40, 40, 50, 50];
let resultArray = removeDuplicatesArr(array);
console.log(resultArray);
