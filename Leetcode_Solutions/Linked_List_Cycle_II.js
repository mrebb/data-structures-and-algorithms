/** Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
Note: Do not modify the linked list.
Follow up:
Can you solve it without using extra space?

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head || !head.next || !head.next.next) return null;
  let p1 = head;
  let p2 = head;
  p1=p1.next;
  p2=p2.next.next;
  while(p1!==p2){
    p1=p1.next;
    if(!p2 || !p2.next || !p2.next.next) return null;
    p2=p2.next.next;
  }
  p1=head;
    
  while(p1!==p2){
    p1=p1.next;
    p2 = p2.next;
  }
  return p1;
};