const max = 2 ** 31 - 1;
const min = -(2 ** 31);

function myAtoi(s: string): number {
  const result = s.match(/^ *([-+]?\d+)/);
  const match = result?.[1];
  if (!match) return 0;
  const num = parseInt(match);
  if (max < num) return max;
  if (num < min) return min;
  return num;
}

test.each([
  ["42", 42],
  ["   -42", -42],
  ["4193 with words", 4193],
  ["words and 987", 0],
  ["-91283472332", -2147483648],
  ["", 0],
  ["   - 1", 0],
  ["   0000", 0],
  ["   000012", 12],
])("", (arg1, expected) => {
  expect(myAtoi(arg1)).toEqual(expected);
});
