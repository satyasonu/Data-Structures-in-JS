/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  var res = [];
  var sum = 0;
  for (var i = 0; i < boxes.length; i++) {
    sum = 0;
    for (var j = 0; j < boxes.length; j++) {
      if (j != i && boxes[j] == 1) {
        sum += Math.abs(i - j);
      }
    }
    res[i] = sum;
  }
  return res;
};
