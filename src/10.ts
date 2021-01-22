function isMatch(s: string, p: string): boolean {
  return new RegExp(`^${p}$`).test(s);
}

test.each([
  ["aa", "a", false],
  ["aa", "a*", true],
  ["ab", ".*", true],
  ["aab", "c*a*b", true],
  ["mississippi", "mis*is*p*.", false],
  ["ab", ".*.*ab", true],
  ["ab", ".*.*.ab", false],
])("", (arg1, arg2, expected) => {
  expect(isMatch(arg1, arg2)).toEqual(expected);
});
