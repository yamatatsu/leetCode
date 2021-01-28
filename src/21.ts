// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val <= l2.val) {
    return new ListNode(l1.val, mergeTwoLists(l1.next, l2));
  }
  return new ListNode(l2.val, mergeTwoLists(l1, l2.next));
}

test.each([
  [
    [1, 2, 4],
    [1, 3, 4],
    [1, 1, 2, 3, 4, 4],
  ],
  [[], [], []],
  [[], [0], [0]],
])("", (arg1, arg2, expected) => {
  expect(toArray(mergeTwoLists(toListNode(arg1), toListNode(arg2)))).toEqual(
    expected
  );
});
export {};

function toListNode(vals: number[]): ListNode | null {
  if (vals.length === 0) return null;
  const [head, ...tail] = vals;
  return new ListNode(head, toListNode(tail));
}
function toArray(listNode: ListNode | null): number[] {
  if (!listNode) return [];
  const { val, next } = listNode;
  return [val, ...toArray(next)];
}
