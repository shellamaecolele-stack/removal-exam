function isValidParentheses(str) {

  let stack = [];

  let pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < str.length; i++) {

    let char = str[i];

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {

      let top = stack.pop();

      if (top !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}