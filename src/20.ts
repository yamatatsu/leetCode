const dict: Record<string, string> = {
  "}": "{",
  "]": "[",
  ")": "(",
};
function isValid(s: string): boolean {
  const stack = [];
  for (let c of s.split("")) {
    const opener = dict[c];
    if (!opener) {
      stack.push(c);
      continue;
    }
    const last = stack.pop();
    if (last !== opener) {
      return false;
    }
  }
  return stack.length === 0;
}

test.each([
  ["()", true],
  ["()[]{}", true],
  ["(]", false],
  ["([)]", false],
  ["{[]}", true],
])("", (arg1, expected) => {
  expect(isValid(arg1)).toEqual(expected);
});
export {};
