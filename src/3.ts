type T3 = { max: number; s: string };
function lengthOfLongestSubstring(s: string): number {
  const { max } = Array.from(s).reduce<T3>(
    (acc, c) => {
      const indexOf = acc.s.indexOf(c);
      if (indexOf !== -1) {
        return { max: acc.max, s: acc.s.slice(indexOf + 1) + c };
      }
      const _s = acc.s + c;
      return { max: Math.max(_s.length, acc.max), s: _s };
    },
    { max: 0, s: "" }
  );
  return max;
}

test.each([
  ["abcabcbb", 3],
  ["bbbbb", 1],
  ["pwwkew", 3],
  ["", 0],
  ["aab", 2],
  ["ckilbkd", 5],
  ["dvdf", 3],
  ["aabaab!bb", 3],
])("", (args, expected) => {
  expect(lengthOfLongestSubstring(args)).toEqual(expected);
});
