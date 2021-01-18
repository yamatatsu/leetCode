type T1 = { result: null | [number, number]; dic: Record<string, number> };
function twoSum(nums: number[], target: number): number[] {
  const { result } = nums.reduce<T1>(
    (acc, n, index) => {
      console.log(acc);
      if (acc.result) return acc;
      const seikai = acc.dic[target - n];
      if (seikai !== undefined) {
        return { result: [seikai, index], dic: acc.dic };
      }
      return { result: null, dic: { ...acc.dic, [n]: index } };
    },
    { result: null, dic: {} }
  );
  return result!;
}

test.each([
  [[3, 3], 6, [0, 1]],
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 2, 3], 6, [0, 2]],
])("", (arg1, arg2, expected) => {
  expect(twoSum(arg1, arg2)).toEqual(expected);
});
