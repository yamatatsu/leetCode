const MAX = 2 ** 31 - 1;
const MIN = -(2 ** 31);
function divide(dividend: number, divisor: number): number {
  if (divisor === 1) {
    if (dividend > MAX) return MAX;
    if (dividend < MIN) return MIN;
    return dividend;
  }
  if (divisor === -1) {
    if (-dividend > MAX) return MAX;
    if (-dividend < MIN) return MIN;
    return -dividend;
  }
  const dividendSign = dividend < 0 ? -1 : 1;
  const divisorSign = divisor < 0 ? -1 : 1;
  const sign = dividendSign * divisorSign;
  let _dividend = dividendSign * dividend;
  const _divisor = divisorSign * divisor;

  let answer = 0;
  while (true) {
    _dividend = _dividend - _divisor;
    if (_dividend < 0) return answer;
    answer += sign;
    if (answer > MAX) return MAX;
    if (answer < MIN) return MIN;
  }
}

test.each([
  [10, 3, 3],
  [7, -3, -2],
  [0, 1, 0],
  [1, 1, 1],
  [-1, 1, -1],
  [-2147483648, -1, 2147483647],
  [-2147483648, 1, -2147483648],
])("", (arg1, arg2, expected1) => {
  expect(divide(arg1, arg2)).toEqual(expected1);
});
export {};
