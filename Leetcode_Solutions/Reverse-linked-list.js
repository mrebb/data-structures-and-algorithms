/**
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
//Method 1
var reverseList = function(head) {
  let nodes = [];
  let current = head;
  while(current){
    nodes.push(current);
    current = current.next;
  }
  head = nodes[nodes.length-1];
  head.next = null;
  let result = head;
  for(let i=nodes.length-2;i>=0;i--){

    result.next = nodes[i];
    result.next.next = null;
    result = result.next;
        
  }
  return head; 
};

//Method 2
var reverseList = function(head) {
  let currentNode = head;
  let prevNode = null;
  let nextNode = null;
  while(currentNode){
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
};