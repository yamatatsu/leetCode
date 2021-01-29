function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;
  for (let p = 0; p < haystack.length; p++) {
    if (haystack.slice(p, p + needle.length) === needle) {
      return p;
    }
  }
  return -1;
}

test.each([
  ["hello", "ll", 2],
  ["aaaaa", "bba", -1],
  ["", "", 0],
])("", (arg1, arg2, expected1) => {
  expect(strStr(arg1, arg2)).toEqual(expected1);
});
export {};
