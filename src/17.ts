const dict = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
} as Record<string, string[]>;

function letterCombinations(digits: string): string[] {
  return digits.split("").reduce<string[]>((acc, numChar) => {
    const newChars = dict[numChar];
    if (acc.length === 0) return newChars;
    return acc.reduce<string[]>(
      (acc, str) => acc.concat(newChars.map((c) => str + c)),
      []
    );
  }, []);
}

test.each([
  ["23", ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]],
  ["", []],
  ["2", ["a", "b", "c"]],
])("", (arg1, expected) => {
  expect(letterCombinations(arg1)).toEqual(expected);
});
export {};
