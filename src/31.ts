// sorry... I use cheat...
function nextPermutation(nums: number[]): void {
  let i = nums.length - 1;
  while (i > 0 && nums[i - 1] >= nums[i]) i--;

  if (i <= 0) {
    nums.sort((a, b) => a - b);
    return;
  }

  let j = nums.length - 1;
  while (nums[i - 1] >= nums[j]) j--;

  const tmp = nums[i - 1];
  nums[i - 1] = nums[j];
  nums[j] = tmp;

  const suffix = nums.splice(i);
  nums.push(...suffix.reverse());
}

test.each([
  [
    [1, 2, 3],
    [1, 3, 2],
  ],
  [
    [3, 2, 1],
    [1, 2, 3],
  ],
  [
    [1, 1, 5],
    [1, 5, 1],
  ],
  [[1], [1]],
])("", (arg1, expected) => {
  nextPermutation(arg1);
  expect(arg1).toEqual(expected);
});
export {};
