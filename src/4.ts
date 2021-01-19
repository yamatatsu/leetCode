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

// Following is more slow.
// js's Array.prototype.sort() is smart.... 😅

function findMedianSortedArrays_slow(nums1: number[], nums2: number[]): number {
  const bt = new BT();
  nums1.forEach((n) => bt.add(n));
  nums2.forEach((n) => bt.add(n));
  const arr = bt.toArray();
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

class BT {
  private val?: number;
  private large?: BT;
  private small?: BT;
  constructor() {}

  public add(val: number): void {
    if (this.val === undefined) {
      this.val = val;
      return;
    }
    if (this.val < val) {
      if (this.large === undefined) {
        this.large = new BT();
      }
      this.large.add(val);
    } else {
      if (this.small === undefined) {
        this.small = new BT();
      }
      this.small.add(val);
    }
  }

  public toArray(): number[] {
    if (this.val === undefined) {
      return [];
    }
    return [
      ...(this.small?.toArray() ?? []),
      this.val,
      ...(this.large?.toArray() ?? []),
    ];
  }
}
