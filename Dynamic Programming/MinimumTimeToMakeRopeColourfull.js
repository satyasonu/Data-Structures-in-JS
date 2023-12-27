/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let time = 0;
  for (var i = 0; i < colors.length - 1; i++) {
    if (colors[i] != colors[i + 1]) {
      continue;
    } else {
      let ballonColor = colors[i];
      let maxBallon = 1 << 31;
      let totalTime = 0;
      while (i < colors.length && colors[i] == ballonColor) {
        totalTime += neededTime[i];
        maxBallon = Math.max(maxBallon, neededTime[i]);
        i++;
      }
      time = time + (totalTime - maxBallon);
    }
  }
  return time;
};
