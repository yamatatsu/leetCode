function reverse(x: number): number {
  const s = x.toString();
  const minus = s.startsWith("-");
  const num = Number(
    (minus ? s.slice(1, s.length) : s).split("").reverse().join("")
  );
  if (2 ** 31 <= num) return 0;
  return minus ? -num : num;
}

test.each([
  [123, 321],
  [-123, -321],
  [120, 21],
  [0, 0],
  [1534236469, 0],
])("", (arg1, expected) => {
  expect(reverse(arg1)).toEqual(expected);
});
