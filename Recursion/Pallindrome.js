function f(i) {
  const s = "MADAM";
  const n = s.length;

  if (i >= n / 2) {
    return true;
  }

  if (s[i] !== s[n - i - 1]) {
    return false;
  }

  return f(i + 1);
}

console.log(f(0));
