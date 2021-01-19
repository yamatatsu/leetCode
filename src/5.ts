function longestPalindrome(s: string): string {
  let result = "";
  for (let center = 0; center < s.length; center++) {
    let p1: number = center;
    let p2: number = getEndPointOfCenter(s, center);
    do {
      const _s = s.slice(p1, p2);
      if (result.length < _s.length) {
        result = _s;
      }
      p1--;
      p2++;
    } while (
      0 <= p1 &&
      p2 <= s.length &&
      s.slice(p1, p1 + 1) === s.slice(p2 - 1, p2)
    );
  }
  return result;
}

function getEndPointOfCenter(
  s: string,
  p1: number,
  p2: number = p1 + 1
): number {
  if (s.slice(p1, p1 + 1) === s.slice(p2, p2 + 1)) {
    return getEndPointOfCenter(s, p1, p2 + 1);
  } else {
    return p2;
  }
}

test.each([
  ["babad", "bab"],
  ["cbbd", "bb"],
  ["a", "a"],
  ["ac", "a"],
  ["ccc", "ccc"],
])("", (arg1, expected) => {
  expect(longestPalindrome(arg1)).toEqual(expected);
});
