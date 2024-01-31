function checkArr(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
let array = [8, 10, 20, 45, 5];
let result = checkArr(array);
console.log(result);
