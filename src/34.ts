function searchRange(nums: number[], target: number): number[] {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
}

test.each([
  [[5, 7, 7, 8, 8, 10], 8, [3, 4]],
  [[5, 7, 7, 8, 8, 10], 6, [-1, -1]],
  [[], 0, [-1, -1]],
])("", (arg1, arg2, expected1) => {
  expect(searchRange(arg1, arg2)).toEqual(expected1);
});
export {};
