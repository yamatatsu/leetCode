function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === target) {
      return i;
    }
    if (num > target) {
      return i;
    }
  }
  return nums.length;
}

test.each([
  [[1, 3, 5, 6], 5, 2],
  [[1, 3, 5, 6], 2, 1],
  [[1, 3, 5, 6], 7, 4],
  [[1, 3, 5, 6], 0, 0],
  [[1], 0, 0],
])("", (arg1, arg2, expected1) => {
  expect(searchInsert(arg1, arg2)).toEqual(expected1);
});
export {};
