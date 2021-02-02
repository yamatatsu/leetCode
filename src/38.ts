function countAndSay(n: number): string {
  if (n === 1) return "1";
  const result = countAndSay(n - 1)
    .toString()
    .split("")
    .reduce<{ char: string; count: number }[]>((acc, c) => {
      const last = acc[acc.length - 1];
      if (!last) return [{ char: c, count: 1 }];
      if (last.char !== c) {
        return [...acc, { char: c, count: 1 }];
      }
      last.count++;
      return acc;
    }, []);
  console.log(result);
  return result.reduce<string>((acc, counter) => {
    return acc + counter.count + counter.char;
  }, "");
}

test.each([
  [1, "1"],
  [2, "11"],
  [3, "21"],
  [4, "1211"],
])("", (arg1, expected1) => {
  expect(countAndSay(arg1)).toEqual(expected1);
});
export {};
