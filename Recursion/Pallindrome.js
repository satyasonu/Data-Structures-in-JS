function f(i, s, n) {
  if (i >= n / 2) {
    return true;
  }

  if (s[i] !== s[n - i - 1]) {
    return false;
  }

  return f(i + 1, s, n);
}

const s = "MADAM";
const n = s.length;
console.log(f(0, s, n));
