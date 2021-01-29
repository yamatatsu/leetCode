function removeDuplicates(nums: number[]): number {
  return nums.reduceRight((set, n, i) => {
    if (set.has(n)) {
      nums.splice(i, 1);
    } else {
      set.add(n);
    }
    return set;
  }, new Set()).size;
}

test.each([
  [[1, 1, 2], 2, [1, 2]],
  [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5, [0, 1, 2, 3, 4]],
  [[], 0, []],
])("", (arg1, expected1, expected2) => {
  expect(removeDuplicates(arg1)).toEqual(expected1);
  expect(arg1).toEqual(expected2);
});
export {};
