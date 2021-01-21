function isPalindrome(x: number): boolean {
  const asc = String(x);
  const desc = asc.split("").reduce((acc, c) => c + acc);
  return asc === desc;
}

test.each([
  [121, true],
  [-121, false],
  [10, false],
  [-101, false],
])("", (arg1, expected) => {
  expect(isPalindrome(arg1)).toEqual(expected);
});
