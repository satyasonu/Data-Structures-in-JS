let array = [3, 2, 1, 5, 2];
let largest = array[0];
for (let i = 1; i < array.length; i++) {
  if (largest > array[i]) {
    continue;
  } else {
    largest = array[i];
  }
  console.log(largest);
}
// Time complexity is O(n);
