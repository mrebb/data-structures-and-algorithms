'use strict';
const ll = require('../lib/ll_merge');
describe('Singly linked list module', () => {
  it('merge() method should merge two linked lists', ()=>{
    // create first linked list: 1 -> 3 -> 2
    var node3 = new ll(2, null);
    var node2 = new ll(3, node3);
    var node1 = new ll(1, node2);
    var L1 = node1;

    // create second linked list: 5 -> 9 -> 4
    var node6 = new ll(4, null);
    var node5 = new ll(9, node6);
    var node4 = new ll(5, node5);
    var L2 = node4;

    let actual = ll.mergeLists(L1, L2);
    expect(actual.value).toEqual(1);
    expect(actual.next.value).toEqual(5);
  });
  it('merge() method should merge two linked lists that are not same size', ()=>{
    // create first linked list: 1 -> 3
    var node2 = new ll(3, null);
    var node1 = new ll(1, node2);
    var L1 = node1;

    // create second linked list: 5 -> 9 -> 4
    var node6 = new ll(4, null);
    var node5 = new ll(9, node6);
    var node4 = new ll(5, node5);
    var L2 = node4;
    let actual = ll.mergeLists(L1, L2);
    expect(actual.next.next.next.next.value).toEqual(4);
    expect(actual.next.value).toEqual(5);
  });
  it('merge() method should merge two linked lists that are not same size', ()=>{
    // create first linked list: 1 -> 3
    var node3 = new ll(2, null);
    var node2 = new ll(3, node3);
    var node1 = new ll(1, node2);
    var L1 = node1;

    // create second linked list: 5 -> 9 -> 4
    var node5 = new ll(9, null);
    var node4 = new ll(5, node5);
    var L2 = node4;
    let actual = ll.mergeLists(L1, L2);
    expect(actual.next.next.next.next.value).toEqual(2);
    expect(actual.value).toEqual(1);
  });
  
}); 