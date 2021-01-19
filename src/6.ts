function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const rows: string[][] = range(numRows).map(() => []);
  const halfUnitSize = numRows - 1;
  const unitSize = halfUnitSize * 2;
  Array.from(s).forEach((c, i) => {
    const index = i % unitSize;
    if (index < halfUnitSize) {
      rows[index].push(c);
    } else {
      rows[unitSize - index].push(c);
    }
  });
  return rows.reduce((acc, row) => acc + row.join(""), "");
}

const range = (num: number) => [...Array(num).keys()];

test.each([
  ["PAYPALISHIRING", 3, "PAHNAPLSIIGYIR"],
  ["PAYPALISHIRING", 4, "PINALSIGYAHRPI"],
  ["A", 1, "A"],
  ["ABC", 1, "ABC"],
  ["ABCDABCD", 2, "ACACBDBD"],
])("", (arg1, arg2, expected) => {
  expect(convert(arg1, arg2)).toEqual(expected);
});
