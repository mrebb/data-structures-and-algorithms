'use strict';
const ll = require('../lib/ll_detect_loop');
ll.append(1);
ll.append(3);
ll.append(2);
let list = ll.append(5);
describe('Singly linked list module', () => {
  it('hasLoop() method returns true if linked list has circular reference', ()=>{
    list.head.next.next = list.head.next;
    expect(ll.hasLoop(list)).toEqual(true);
  });
  it('hasLoop() method returns false if linked list is not circular linked list', ()=>{
    list.head.next.next = null;
    expect(ll.hasLoop(list)).toEqual(false);
  });
  it('hasLoop() method returns false if linked list is not passed as an argument', ()=>{
    expect(ll.hasLoop()).toEqual(undefined);
  });
});