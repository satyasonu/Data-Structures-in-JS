/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let sortedArr = arr1.sort((a, b) => a - b);

  let resultArr = [];
  for (let num of arr2) {
    let firstIndex = sortedArr.indexOf(num);
    let lastIndex = sortedArr.lastIndexOf(num);
    let copy = sortedArr.splice(firstIndex, lastIndex - firstIndex + 1);
    resultArr.push(...copy);
  }
  resultArr.push(...sortedArr);
  return resultArr;
};
