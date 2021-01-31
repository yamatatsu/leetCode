function search(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
  // return nums.indexOf(target);
}

test.each([
  [[4, 5, 6, 7, 0, 1, 2], 0, 4],
  [[4, 5, 6, 7, 0, 1, 2], 3, -1],
  [[1], 0, -1],
])("", (arg1, arg2, expected1) => {
  expect(search(arg1, arg2)).toEqual(expected1);
});
export {};
