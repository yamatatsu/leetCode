function findSubstring(s: string, words: string[]): number[] {
  const step = words[0].length;
  const uniqued = Array.from(new Set(words));
  const regex = new RegExp(`(${uniqued.join("|")}){${words.length}}`);

  function recursive(_index: number): number[] {
    const rest = s.slice(_index);
    const matched = rest.match(regex);
    if (!matched) return [];
    const [substring] = matched;
    const index = rest.indexOf(substring) + _index;
    const match = isMatch(substring, words, step);

    return [...(match ? [index] : []), ...recursive(index + 1)];
  }
  return recursive(0);
}
function isMatch(substring: string, words: string[], step: number): boolean {
  let _words = [...words];
  let point = 0;
  while (point < substring.length) {
    const w = substring.slice(point, point + step);
    const _index = removeByIndex(_words, w);
    if (_index < 0) break;
    point += step;
  }
  return _words.length === 0;
}
const removeByIndex = (words: string[], word: string) => {
  const _index = words.indexOf(word);
  if (_index >= 0) {
    words.splice(_index, 1);
  }
  return _index;
};

test.each([
  ["barfoothefoobarman", ["foo", "bar"], [0, 9]],
  ["wordgoodgoodgoodbestword", ["word", "good", "best", "word"], []],
  ["barfoofoobarthefoobarman", ["bar", "foo", "the"], [6, 9, 12]],
  ["a", ["a"], [0]],
  ["a", ["a", "a"], []],
  ["wordgoodgoodgoodbestword", ["word", "good", "best", "good"], [8]],
  ["foobarfoobar", ["foo", "bar"], [0, 3, 6]],
  ["ababaab", ["ab", "ba", "ba"], [1]],
  ["a".repeat(5000), "a".repeat(5000).split(""), [0]],
])("", (arg1, arg2, expected1) => {
  expect(findSubstring(arg1, arg2)).toEqual(expected1);
});
export {};
