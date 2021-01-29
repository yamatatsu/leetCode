// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type T = { minVal: number; minIndex: number | null };
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;

  const { minIndex } = lists.reduce<T>(
    (acc, list, i) => {
      if (!list) return acc;
      if (acc.minVal > list.val) {
        return { minVal: list.val, minIndex: i };
      }
      return acc;
    },
    { minVal: 10 ** 4, minIndex: null }
  );
  if (minIndex === null) return null;

  const { val, next } = lists[minIndex]!;
  lists[minIndex] = next;
  return new ListNode(val, mergeKLists(lists));
}

test.each([
  [
    [
      [1, 4, 5],
      [1, 3, 4],
      [2, 6],
    ],
    [1, 1, 2, 3, 4, 4, 5, 6],
  ],
  [[], []],
  [[[]], []],
])("", (arg1, expected) => {
  expect(toArray(mergeKLists(arg1.map((a) => toListNode(a))))).toEqual(
    expected
  );
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
