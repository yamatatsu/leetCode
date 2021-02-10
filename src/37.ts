function solveSudoku(board: string[][]): void {
  const solver = new Solver(new Board(board));

  // while (!solver.complete()) {
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      const result = solver.try(rowIndex, colIndex);
    }
  }
  // }
}

class Board {
  constructor(private board: string[][]) {}
  complete(): boolean {
    return this.board.every((row) => row.every((cell) => cell !== "."));
  }
  row(rowIndex: number): string[] {
    return this.rawRow(rowIndex).filter((c) => c !== ".");
  }
  private rawRow(rowIndex: number): string[] {
    return this.board[rowIndex];
  }
  col(colIndex: number): string[] {
    return this.rawCol(colIndex).filter((c) => c !== ".");
  }
  private rawCol(colIndex: number): string[] {
    return this.board.map((row) => row[colIndex]);
  }
  block(rowIndex: number, colIndex: number): string[] {
    return this.rawBlock(rowIndex, colIndex).filter((c) => c !== ".");
  }
  private rawBlock(rowIndex: number, colIndex: number): string[] {
    return this.board
      .slice(...this.blockRange(rowIndex))
      .reduce(
        (acc, row) => acc.concat(row.slice(...this.blockRange(colIndex))),
        []
      );
  }
  private blockRange(index: number): [number, number] {
    const start = Math.floor(index / 3) * 3;
    return [start, start + 3];
  }
  cell(rowIndex: number, colIndex: number): string {
    return this.board[rowIndex][colIndex];
  }
  set(rowIndex: number, colIndex: number, val: string): string {
    return (this.board[rowIndex][colIndex] = val);
  }
}
class Solver {
  constructor(private board: Board) {}
  complete(): boolean {
    return this.board.complete();
  }
  try(rowIndex: number, colIndex: number): boolean {
    const val = this.board.cell(rowIndex, colIndex);
    if (val !== ".") return false;

    const candidate = [
      ...this.board.row(rowIndex),
      ...this.board.col(colIndex),
      ...this.board.block(rowIndex, colIndex),
    ].reduce((acc, c) => {
      remove(acc, c);
      return acc;
    }, this.candidate());

    if (candidate.length === 1) {
      this.board.set(rowIndex, colIndex, candidate[0]);
      console.log(rowIndex + 1, colIndex + 1, candidate[0]);
      return true;
    }
    return false;
  }
  private candidate() {
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }
}
function remove(arr: string[], c: string) {
  const i = arr.indexOf(c);
  if (i === -1) return;
  arr.splice(i, 1);
}

// ------------------
// test
// describe("solveSudoku", () => {
//   const testBoard = () => [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ];
//   const testSolvedBoard = () => [
//     ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
//     ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
//     ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
//     ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
//     ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
//     ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
//     ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
//     ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
//     ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
//   ];

//   test("remove", () => {
//     const arr = ["1", "2", "3"];
//     remove(arr, "2");
//     expect(arr).toEqual(["1", "3"]);
//   });

//   test("Board.row", () => {
//     expect(new Board(testBoard()).row(0)).toEqual(["5", "3", "7"]);
//   });
//   test("Board.col", () => {
//     expect(new Board(testBoard()).col(0)).toEqual(["5", "6", "8", "4", "7"]);
//   });
//   test("Board.block", () => {
//     expect(new Board(testBoard()).block(2, 2)).toEqual([
//       "5",
//       "3",
//       "6",
//       "9",
//       "8",
//     ]);
//     expect(new Board(testBoard()).block(3, 2)).toEqual(["8", "4", "7"]);
//     expect(new Board(testBoard()).block(2, 3)).toEqual(["7", "1", "9", "5"]);
//     expect(new Board(testBoard()).block(3, 3)).toEqual(["6", "8", "3", "2"]);
//   });
//   test("Board.cell", () => {
//     expect(new Board(testBoard()).cell(8, 8)).toEqual("9");
//   });
//   test("Board.set", () => {
//     const _testBoard = testBoard();
//     expect(new Board(_testBoard).set(8, 0, "2")).toEqual("2");
//     expect(_testBoard[8][0]).toEqual("2");
//   });
//   test("Board.complete return false", () => {
//     expect(new Board(testBoard()).complete()).toEqual(false);
//   });
//   test("Board.complete return true", () => {
//     expect(new Board(testSolvedBoard()).complete()).toEqual(true);
//   });

//   test("Solver.complete return true", () => {
//     const solver = new Solver(new Board(testSolvedBoard()));
//     expect(solver.complete()).toEqual(true);
//   });
//   test("Solver.complete return false", () => {
//     const solver = new Solver(new Board(testBoard()));
//     expect(solver.complete()).toEqual(false);
//   });
//   test("Solver.try return true", () => {
//     const _testBoard = testBoard();
//     const solver = new Solver(new Board(_testBoard));
//     expect(solver.try(6, 8)).toEqual(true);
//     expect(_testBoard[6][8]).toEqual("4");
//   });
//   test("Solver.try return false", () => {
//     const _testBoard = testBoard();
//     const solver = new Solver(new Board(_testBoard));
//     expect(solver.try(0, 2)).toEqual(false);
//     expect(_testBoard).toEqual(testBoard());
//   });

//   test.each([
//     // [testBoard(), testSolvedBoard()],
//     [
//       [
//         [".", ".", "9", "7", "4", "8", ".", ".", "."],
//         ["7", ".", ".", ".", ".", ".", ".", ".", "."],
//         [".", "2", ".", "1", ".", "9", ".", ".", "."],
//         [".", ".", "7", ".", ".", ".", "2", "4", "."],
//         [".", "6", "4", ".", "1", ".", "5", "9", "."],
//         [".", "9", "8", ".", ".", ".", "3", ".", "."],
//         [".", ".", ".", "8", ".", "3", ".", "2", "."],
//         [".", ".", ".", ".", ".", ".", ".", ".", "6"],
//         [".", ".", ".", "2", "7", "5", "9", ".", "."],
//       ],
//       [],
//     ],
//   ])("", (arg1, expected1) => {
//     solveSudoku(arg1);
//     expect(arg1).toEqual(expected1);
//   });
// });
export {};

const b = [
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."],
];
solveSudoku(b);
solveSudoku(b);
solveSudoku(b);
solveSudoku(b);
solveSudoku(b);
solveSudoku(b);
solveSudoku(b);
solveSudoku(b);
console.log(b.map((r) => r.join(",")));

// ,,9,7,4,8,,,
// 7,,,6,,2,,,
// ,2,,1,,9,,,
// ,,7,9,8,6,2,4,1
// 2,6,4,3,1,7,5,9,8
// 1,9,8,5,2,4,3,6,7
// ,,,8,6,3,,2,
// ,,,4,9,1,,,6
// ,,,2,7,5,9,,
