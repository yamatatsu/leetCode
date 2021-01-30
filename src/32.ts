type T = { open: number; count: number; longest: number };
function longestValidParentheses(s: string): number {
  const replaced = s.replace(/\(((\d+,)*)\)/g, (sub, digits) => {
    if (sub === "()") return "2,";
    return digits + "2,";
  });

  if (replaced !== s) {
    return longestValidParentheses(replaced);
  }
  const diditsList = replaced.match(/(\d+,)+/g);

  if (!diditsList) return 0;
  return Math.max(
    ...diditsList.map((str) => {
      return str.split(",").reduce((acc, d) => {
        if (!d) return acc;
        return acc + parseInt(d);
      }, 0);
    })
  );
}

test.each([
  // ["(()", 2],
  // [")()())", 4],
  // ["", 0],
  // ["()(()", 2],
  ["(()())", 6],
])("", (arg1, expected1) => {
  expect(longestValidParentheses(arg1)).toEqual(expected1);
});
export {};
