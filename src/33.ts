function search(nums: number[], target: number): number {
  return nums.indexOf(target);
}

test.each([
  [[4, 5, 6, 7, 0, 1, 2], 0, 4],
  [[4, 5, 6, 7, 0, 1, 2], 3, -1],
  [[1], 0, -1],
])("", (arg1, arg2, expected1) => {
  expect(search(arg1, arg2)).toEqual(expected1);
});
export {};
