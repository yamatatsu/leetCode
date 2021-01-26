type Result = { val: number; closeness: number };
type T = { result?: Result; twoSum: Set<number>; old: Set<number> };
function threeSumClosest(nums: number[], target: number): number {
  const { result } = nums.reduce<T>(
    (acc, n) => {
      acc.result = Array.from(acc.twoSum).reduce((acc, _n) => {
        const threeSum = n + _n;
        const result = { val: threeSum, closeness: (target - threeSum) ** 2 };
        if (!acc) return result;
        if (acc.closeness > result.closeness) return result;
        return acc;
      }, acc.result);
      acc.old.forEach((_n) => {
        acc.twoSum.add(n + _n);
      });
      acc.old.add(n);
      return acc;
    },
    { twoSum: new Set(), old: new Set() }
  );
  return result!.val;
}

test.each([[[-1, 2, 1, -4], 1, 2]])("", (arg1, arg2, expected) => {
  expect(threeSumClosest(arg1, arg2)).toEqual(expected);
});
export {};
