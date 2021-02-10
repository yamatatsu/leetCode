function fourSum(nums: number[], target: number): number[][] {
  nums.sort((n1, n2) => n1 - n2);

  const result: Map<string, number[]> = new Map();
  for (let i = 0; i < nums.length - 3; i++) {
    const a = nums[i];
    for (let j = i + 1; j < nums.length - 2; j++) {
      const b = nums[j];
      let start = j + 1;
      let end = nums.length - 1;
      while (start < end) {
        const c = nums[start];
        const d = nums[end];

        const arr = [a, b, c, d];
        const sum = arr.reduce((acc, n) => acc + n);
        const key = arr.join(",");

        if (sum === target) {
          result.set(key, arr);
          start++;
          end--;
        } else if (sum > target) {
          end--;
        } else {
          start++;
        }
      }
    }
  }
  return Array.from(result.values());
}

test.each([
  [
    [1, 0, -1, 0, -2, 2],
    0,
    [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ],
  ],
  [[-3, -1, 0, 2, 4, 5], 0, [[-3, -1, 0, 4]]],
])("", (arg1, arg2, expected) => {
  expect(new Set(fourSum(arg1, arg2))).toEqual(new Set(expected));
});
export {};
