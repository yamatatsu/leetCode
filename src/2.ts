class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  static fromArray(arr: number[]): ListNode | null {
    if (arr.length === 0) {
      return null;
    }
    const [val, ...rest] = arr;
    return new ListNode(val, ListNode.fromArray(rest));
  }
  toArray(): number[] {
    return [this.val, ...(this.next?.toArray() ?? [])];
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  kuriage: boolean = false
): ListNode | null {
  if (!l1 && !l2 && !kuriage) {
    return kuriage ? new ListNode(1, null) : null;
  }
  const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + (kuriage ? 1 : 0);
  const val = sum % 10;
  const nextKuriage = sum >= 10;
  return new ListNode(
    val,
    addTwoNumbers(l1?.next ?? null, l2?.next ?? null, nextKuriage)
  );
}

test.each([
  [
    [2, 4, 3],
    [5, 6, 4],
    [7, 0, 8],
  ],
  [[0], [0], [0]],
  [
    [9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9],
    [8, 9, 9, 9, 0, 0, 0, 1],
  ],
])("", (arg1, arg2, expected) => {
  expect(
    addTwoNumbers(ListNode.fromArray(arg1), ListNode.fromArray(arg2))?.toArray()
  ).toEqual(expected);
});
