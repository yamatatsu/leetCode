// out of memory...
function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.sort((n1, n2) => n1 - n2);
  const dict = new Dict();
  const results: Map<string, number[]> = new Map();
  const pastNums: number[] = [];
  sortedNums.forEach((n) => {
    dict.get3Sum(n).forEach((tupl) => results.set(tupl.join(","), tupl));
    pastNums.forEach((_n) => dict.addPair(_n, n));
    pastNums.push(n);
  });
  return Array.from(results.values());
}

class Dict {
  private dict: Map<number, Map<string, number[]>> = new Map();
  private latest: number = -(10 ** 5);
  get3Sum(num: number): number[][] {
    this.latest = num;
    const pairs = this.dict.get(num)?.values();
    if (!pairs) return [];
    this.dict.delete(num);
    return Array.from(pairs).map((pair) => pair.concat(num));
  }
  addPair(num1: number, num2: number): void {
    const key = -(num1 + num2);
    if (this.latest > key) return;
    let pairs = this.dict.get(key);
    if (!pairs) {
      pairs = new Map();
      this.dict.set(key, pairs);
    }
    const pair = [num1, num2];
    pairs.set(pair.join(","), pair);
  }
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
