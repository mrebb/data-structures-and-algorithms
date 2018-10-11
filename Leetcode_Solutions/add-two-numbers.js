/** You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let arr1 =[], arr2=[];
  while(l1!=null){
    arr1.push(l1.val);
    l1=l1.next;
  }
  while(l2!=null){
    arr2.push(l2.val);
    l2=l2.next;
  }
  let a= arr1.reverse();
  let b= arr2.reverse();
  let res = '', c = 0;
  while (a.length || b.length || c) {
    console.log(~~a.pop());
    c += ~~a.pop() + ~~b.pop();
      
    res = c % 10 + res;
    c = c > 9;
  }
  return res.split('').reverse().map(e=>parseInt(e));
};