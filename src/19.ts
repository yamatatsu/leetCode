// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(
  head: ListNode | null,
  n: number,
  restCount: number = getLength(head)
): ListNode | null {
  if (!head) return head;
  if (restCount === n) {
    return head.next;
  }
  head.next = removeNthFromEnd(head.next, n, restCount - 1);
  return head;
}
function getLength(listNode: ListNode | null): number {
  let res = 0;
  let node = listNode;
  while (node) {
    res++;
    node = node.next;
  }
  return res;
}

test.each([
  [[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]],
  [[1], 1, []],
  [[1, 2], 1, [1]],
])("", (arg1, arg2, expected) => {
  expect(toArray(removeNthFromEnd(toListNode(arg1), arg2))).toEqual(expected);
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
