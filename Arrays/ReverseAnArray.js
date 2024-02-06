function reverseAnArr(array) {
  let low = 0;
  let high = array.length - 1;
  while (low < high) {
    let temp = array[low];
    array[low] = array[high];
    array[high] = temp;
    low++;
    high--;
  }
}
let array = [2, 5, 34, 6, 8];
reverseAnArr(array);
console.log(array);
