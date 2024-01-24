// with the help of parameterized
function printSum(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  printSum(i - 1, sum + i);
}
printSum(5, 0);

// with the help of function
function f(n) {
  if (n == 0) {
    return 0;
  }
  return n + f(n - 1);
}
n = 9;
console.log(f(n));
