function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const result = strs.reduce<null | string | false>((acc, s) => {
      if (acc === false) return false;
      const char = s.slice(i, i + 1);
      if (acc === null) return char;
      return acc === char ? acc : false;
    }, null);
    if (!result) {
      break;
    }
    prefix += result;
  }
  return prefix;
}

// following make out of memory...😅

function longestCommonPrefix_slow(strs: string[]): string {
  const minLength = Math.min(...strs.map((s) => s.length));
  let prefix = "";
  for (let i = 0; 0 < minLength; i++) {
    const chars = strs.map((s) => s.slice(i, i + 1));
    if (!chars.every((c) => chars[0] === c)) {
      break;
    }
    prefix += chars[0];
  }
  return prefix;
}

test.each([
  [["flower", "flow", "flight"], "fl"],
  [["dog", "racecar", "car"], ""],
  [[], ""],
])("", (arg1, expected) => {
  expect(longestCommonPrefix(arg1)).toEqual(expected);
});
export {};
