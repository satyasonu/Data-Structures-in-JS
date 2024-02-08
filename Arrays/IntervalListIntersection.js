/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let result = [];
  var i = 0;
  var j = 0;
  while (i < firstList.length && j < secondList.length) {
    let first = firstList[i];
    let second = secondList[j];

    let start = Math.max(first[0], second[0]);
    let end = Math.min(first[1], second[1]);
    if (start <= end) {
      result.push([start, end]);
    }
    if (first[1] < second[1]) {
      i++;
    } else if (first[1] > second[1]) {
      j++;
    } else {
      i++;
      j++;
    }
  }
  return result;
};
