function removeElement(nums: number[], val: number): number {
  return nums.reduceRight<number[]>((acc, n, i) => {
    if (n === val) {
      nums.splice(i, 1);
      return acc;
    }
    return [...acc, n];
  }, []).length;
}

test.each([
  [[3, 2, 2, 3], 3, 2, [2, 2]],
  [[0, 1, 2, 2, 3, 0, 4, 2], 2, 5, [0, 1, 4, 0, 3]],
])("", (arg1, arg2, expected1, expected2) => {
  expect(removeElement(arg1, arg2)).toEqual(expected1);
  expect(new Set(arg1)).toEqual(new Set(expected2));
});
export {};
