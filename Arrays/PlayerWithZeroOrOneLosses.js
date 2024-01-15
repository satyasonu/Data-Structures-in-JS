/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
// we can simply do tis question with the help of a graph
// we use indegree in this

var findWinners = function (matches) {
  let max = 1 << 31;
  for (let match of matches) {
    max = Math.max(max, Math.max(match[0], match[1]));
  }
  let indegree = new Array(max + 1).fill(-1);
};
