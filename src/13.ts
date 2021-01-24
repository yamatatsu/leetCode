function romanToInt(s: string): number {
  const matched = s.match(
    /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
  );
  if (!matched) return 0;

  return (
    (dic[0][matched[1]] ?? 0) +
    (dic[1][matched[2]] ?? 0) +
    (dic[2][matched[3]] ?? 0) +
    (dic[3][matched[4]] ?? 0)
  );
}
const dic: Record<string, number>[] = [
  {
    M: 1000,
    MM: 2000,
    MMM: 3000,
  },
  {
    C: 100,
    CC: 200,
    CCC: 300,
    CD: 400,
    D: 500,
    DC: 600,
    DCC: 700,
    DCCC: 800,
    CM: 900,
  },
  {
    X: 10,
    XX: 20,
    XXX: 30,
    XL: 40,
    L: 50,
    LX: 60,
    LXX: 70,
    LXXX: 80,
    XC: 90,
  },
  {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
  },
];

test.each([
  ["III", 3],
  ["IV", 4],
  ["IX", 9],
  ["LVIII", 58],
  ["MCMXCIV", 1994],
])("", (arg1, expected) => {
  expect(romanToInt(arg1)).toEqual(expected);
});
export {};
