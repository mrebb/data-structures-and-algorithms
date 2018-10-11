/**Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
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
var deleteDuplicates = function(head) {
  let currentNode = head;
  while(currentNode!=null){
    while(currentNode.next && currentNode.val===currentNode.next.val){
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
  }
    
  return head;
};

//Recursive
var deleteDuplicatesRecursive = function(head) {
  if(!head) return head;
  if(head && !head.next) return head;
  let currentNode = head; 
  deleteDuplicates(currentNode.next);
  if(currentNode.val === currentNode.next.val){
    currentNode.next = currentNode.next.next;
  }
  return currentNode;
};
