// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(
  head: ListNode | null,
  k: number,
  originalK: number = k
): ListNode | null {
  const node = getByIndex(head, k);
  if (!node) return head;
  const { val } = node;
  if (k === 1) {
    const rest = getByIndex(head, originalK);
    return new ListNode(
      val,
      reverseKGroup(rest?.next ?? null, originalK, originalK)
    );
  }
  return new ListNode(val, reverseKGroup(head, k - 1, originalK));
}
function getByIndex(head: ListNode | null, index: number): ListNode | null {
  if (!head) return head;
  if (index === 1) return head;
  return getByIndex(head.next, index - 1);
}

test.each([
  [[1, 2, 3, 4, 5], 2, [2, 1, 4, 3, 5]],
  [[1, 2, 3, 4, 5], 3, [3, 2, 1, 4, 5]],
  [[1, 2, 3, 4, 5], 1, [1, 2, 3, 4, 5]],
  [[1], 1, [1]],
  [[1, 2, 3, 4, 5, 6, 7], 3, [3, 2, 1, 6, 5, 4, 7]],
])("", (arg1, arg2, expected) => {
  expect(toArray(reverseKGroup(toListNode(arg1), arg2))).toEqual(expected);
});
export {};

function toListNode(vals: number[]): ListNode | null {
  if (vals.length === 0) return null;
  const [head, ...tail] = vals;
  if (head === undefined) return null;
  return new ListNode(head, toListNode(tail));
}
function toArray(listNode: ListNode | null): number[] {
  if (!listNode) return [];
  const { val, next } = listNode;
  return [val, ...toArray(next)];
}
