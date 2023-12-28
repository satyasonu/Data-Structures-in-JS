let array = [1, 2, 4, 7, 7, 5];
// if we are doing this with brute force ie with the help of sorting then it will take n log n + N;
// better approach by using two loops TC:- O(2N)
let largest = array[0];
for (let i = 1; i < array.length; i++) {
  if (largest < array[i]) {
    largest = array[i];
  }
}
let secondLargest = -1;
for (let i = 0; i < array.length; i++) {
  if (array[i] > secondLargest && array[i] != largest) {
    secondLargest = array[i];
  }
}
console.log(secondLargest);
