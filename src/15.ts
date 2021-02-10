// sorry... I use cheat...
function threeSum(nums: number[]): number[][] {
  nums.sort((n1, n2) => n1 - n2);

  const result: Map<string, number[]> = new Map();
  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i];
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const b = nums[start];
      const c = nums[end];

      const arr = [a, b, c];
      const sum = arr.reduce((acc, n) => acc + n);
      const key = arr.join(",");

      if (sum === 0) {
        result.set(key, arr);
        start++;
        end--;
      } else if (sum > 0) {
        end--;
      } else {
        start++;
      }
    }
  }
  return Array.from(result.values());
}

test.each([
  [
    [-1, 0, 1, 2, -1, -4],
    [
      [-1, 0, 1],
      [-1, -1, 2],
    ],
  ],
  [
    [-1, 0, 1, 2, -1, -4, -1, 0, 1, -1, -4],
    [
      [-1, 0, 1],
      [-1, -1, 2],
    ],
  ],
  [[], []],
  [[0], []],
  [
    [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4],
    [
      [-4, 0, 4],
      [-4, 1, 3],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  ],
  [[0, 0, 0, 0], [[0, 0, 0]]],
])("", (arg1, expected) => {
  expect(new Set(threeSum(arg1))).toEqual(new Set(expected));
});
export {};
