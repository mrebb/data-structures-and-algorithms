'use strict';
const ll = require('../lib/ll_detect_loop');

describe('Singly linked list module', () => {
  xit('hasLoop() method returns true if linked list has circular reference', ()=>{
    ll.append(1);
    ll.append(3);
    ll.append(2);
    let list = ll.append(5);
    list.head.next.next = list.head.next;
    expect(ll.hasLoop(list)).toEqual(true);
  });
  it('hasLoop() method returns false if linked list has circular reference', ()=>{
    ll.append(1);
    ll.append(3);
    ll.append(2);
    let list = ll.append(5);
    expect(ll.hasLoop(list)).toEqual(false);
  });
  xit('test() method returns false if linked list has circular reference', ()=>{
    expect(ll.test()).toEqual(true);
  });
});