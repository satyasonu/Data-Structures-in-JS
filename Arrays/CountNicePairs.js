let mod = 1000000007;
var countNicePairs = function (nums) {
  let reverseArray = [];
  for (let num of nums) {
    let revNum = reverse(num);
    reverseArray.push(revNum);
  }
  let map = new Map();
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i] - reverseArray[i];
    if (map.has(current)) {
      result = (result + map.get(current)) % mod;
    }
    map.set(current, (map.get(current) || 0) + 1);
  }
  return result;
};
let reverse = (n) => {
  let result = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    result = result * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return result;
};
