function maxArea(bars: number[]): number {
  let left = 0;
  let right = bars.length - 1;
  let max = 0;
  while (left !== right) {
    const isRightHigher = bars[left] < bars[right];
    const s = (isRightHigher ? bars[left] : bars[right]) * (right - left);
    if (max < s) max = s;

    if (isRightHigher) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

test.each([
  [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
  [[1, 1], 1],
  [[4, 3, 2, 1, 4], 16],
  [[1, 2, 1], 2],
  [[0, 2], 0],
])("", (arg1, expected) => {
  expect(maxArea(arg1)).toEqual(expected);
});
