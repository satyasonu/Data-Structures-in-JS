var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    const bitComparison = n & 1;
    if (bitComparison === 1) {
      count++;
    }
    n >>>= 1;
  }
  return count;
};
