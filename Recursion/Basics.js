// print from n to 1

function printRecursively(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  printRecursively(n - 1);
}
printRecursively(5);

//print from 1 to n
function print(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);
  print(i + 1, n);
}
print(1, 7);

// print 1 to n. with the help of Backtracking
function backtrackingPrint(i, n) {
  if (i < 1) {
    return;
  }
  backtrackingPrint(i - 1, n);
  console.log(i);
}
backtrackingPrint(7, 7);

// print n to 1 wth of backtracking
function reversePrint(i, n) {
  if (i > n) {
    return;
  }
  reversePrint(i + 1, n);
  console.log(i);
}
reversePrint(1, 5);

// factorial
function f(n) {
  if (n == 1) {
    return 1;
  }
  return n * f(n - 1);
}

n = 4;
console.log(f(n));
