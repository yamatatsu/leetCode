function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = nums1.concat(nums2).sort((n1, n2) => (n1 > n2 ? 1 : -1));
  if (arr.length % 2 === 0) {
    return (
      arr
        .slice(arr.length / 2 - 1, arr.length / 2 + 1)
        .reduce((acc, n) => acc + n) / 2
    );
  } else {
    return arr[(arr.length - 1) / 2];
  }
}

test.each([
  [[1, 3], [2], 2.0],
  [[1, 2], [3, 4], 2.5],
  [[0, 0], [0, 0], 0.0],
  [[], [1], 1.0],
  [[2], [], 2.0],
  [[3], [-2, -1], -1.0],
])("", (arg1, arg2, expected) => {
  expect(findMedianSortedArrays(arg1, arg2)).toEqual(expected);
});
