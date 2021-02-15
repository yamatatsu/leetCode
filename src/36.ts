type T = { cols: string[][]; blocks: string[][]; valid: boolean };
function isValidSudoku(board: string[][]): boolean {
  const result = board.reduce<T>(
    (acc, row, rowIndex) => {
      if (acc.valid === false) return acc;
      let cell;
      let colIndex = 0;
      while (row.length > 0) {
        cell = row.shift()!;
        if (cell === ".") {
          colIndex++;
          continue;
        }

        const col = acc.cols[colIndex];
        const blockIndex = getBlockIndex(rowIndex, colIndex);
        const block = acc.blocks[blockIndex];

        if (row.includes(cell) || col.includes(cell) || block.includes(cell)) {
          acc.valid = false;
          break;
        }
        col.push(cell);
        block.push(cell);
        colIndex++;
      }
      return acc;
    },
    {
      cols: [[], [], [], [], [], [], [], [], []],
      blocks: [[], [], [], [], [], [], [], [], []],
      valid: true,
    }
  );
  return result.valid;
}
function getBlockIndex(rowIndex: number, colIndex: number) {
  return Math.floor(colIndex / 3) + Math.floor(rowIndex / 3) * 3;
}

test.each([
  [
    [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ],
    true,
  ],
  [
    [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", "9", ".", "8", ".", ".", "7", "9"],
    ],
    false,
  ],
  [
    [
      ["5", "3", ".", ".", "7", ".", ".", ".", "9"],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ],
    false,
  ],
  [
    [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "9", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ],
    false,
  ],
])("", (arg1, expected1) => {
  expect(isValidSudoku(arg1)).toEqual(expected1);
});
export {};