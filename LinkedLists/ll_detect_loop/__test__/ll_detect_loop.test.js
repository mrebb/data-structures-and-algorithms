'use strict';
const {
  SinglyLinkedList,
} = require('../lib/ll_detect_loop');
//let node = new Node();
describe('Singly linked list module', () => {
  it('hasLoop() method returns true if linked list has circular reference', () => {
    let ll = new SinglyLinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.append(5);
    ll.head.next.next = ll.head.next;
    expect(ll.hasLoop()).toEqual(true);
  });
  it('hasLoop() method returns false if linked list is not circular linked list', () => {
    let ll = new SinglyLinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    expect(ll.hasLoop()).toEqual(false);
  });
  it('hasLoop() method returns false if linked list is not passed as an argument', () => {
    let ll = new SinglyLinkedList();
    expect(ll.hasLoop()).toEqual(false);
  });
});