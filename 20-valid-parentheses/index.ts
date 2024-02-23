export function isValid(s: string): boolean {
  const stack: string[] = [];

  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  } as const;

  let i = 0;

  while (i < s.length) {
    if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
      if (stack[stack.length - 1] == map[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }

    i++;
  }

  return stack.length === 0;
};
