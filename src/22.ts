function generateParenthesis(n: number): string[] {
  return recursive("", n, 0);
}
function recursive(str: string, open: number, close: number): string[] {
  if (open === 0 && close === 0) return [str];
  const arr = [];
  if (open !== 0) arr.push(...recursive(str + "(", open - 1, close + 1));
  if (close !== 0) arr.push(...recursive(str + ")", open, close - 1));
  return arr;
}

test.each([
  [3, ["((()))", "(()())", "(())()", "()(())", "()()()"]],
  [1, ["()"]],
])("", (arg1, expected) => {
  expect(generateParenthesis(arg1)).toEqual(expected);
});
export {};
