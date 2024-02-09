/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (const i of tokens) {
    const j = i.charAt(0);
    if (j === "+") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a + b);
    } else if (j === "-" && i.length === 1) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a - b);
    } else if (j === "*") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a * b);
    } else if (j === "/") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push((a / b) | 0);
    } else {
      stack.push(parseInt(i));
    }
  }
  return stack[0];
};
