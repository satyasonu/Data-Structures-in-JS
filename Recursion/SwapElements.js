function reverseArray(arr, start, end) {
  if (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(arr, start + 1, end - 1);
    return arr;
  }
}
var arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr, 0, arr.length - 1));
