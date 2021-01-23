function intToRoman(num: number): string {
  return num
    .toString()
    .split("")
    .reverse()
    .reduce((acc, s, index) => dic[index][s] + acc, "");
}
const dic: Record<string, string>[] = [
  {
    "0": "",
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII",
    "8": "VIII",
    "9": "IX",
  },
  {
    "0": "",
    "1": "X",
    "2": "XX",
    "3": "XXX",
    "4": "XL",
    "5": "L",
    "6": "LX",
    "7": "LXX",
    "8": "LXXX",
    "9": "XC",
  },
  {
    "0": "",
    "1": "C",
    "2": "CC",
    "3": "CCC",
    "4": "CD",
    "5": "D",
    "6": "DC",
    "7": "DCC",
    "8": "DCCC",
    "9": "CM",
  },
  {
    "1": "M",
    "2": "MM",
    "3": "MMM",
  },
];

test.each([
  [3, "III"],
  [4, "IV"],
  [9, "IX"],
  [58, "LVIII"],
  [1994, "MCMXCIV"],
])("", (arg1, expected) => {
  expect(intToRoman(arg1)).toEqual(expected);
});
