// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;
  return new ListNode(
    head.next.val,
    new ListNode(head.val, swapPairs(head.next.next))
  );
}

test.each([
  [
    [1, 2, 3, 4],
    [2, 1, 4, 3],
  ],
  [[], []],
  [[1], [1]],
  [
    [1, 2, 3],
    [2, 1, 3],
  ],
])("", (arg1, expected) => {
  expect(toArray(swapPairs(toListNode(arg1)))).toEqual(expected);
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
