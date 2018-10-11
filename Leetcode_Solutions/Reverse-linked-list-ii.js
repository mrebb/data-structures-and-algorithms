/** Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if(head === null) return head;
  if(m===n) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy;
  let i =0;
  while(i<m-1){
    cur= cur.next;
    i++;
  }
  let start = cur.next;
  let last = start.next;
  i=0;
  while(i<n-m){
    start.next = last.next;
    last.next = cur.next;
    cur.next = last;
    last = start.next;
    i++;
  }
  return dummy.next;
};

    