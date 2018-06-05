'use strict';
const ll = require('../lib/ll_insertions');
describe('Singly linked list module', () => {
  it('append() method should add last element to the end of linked lists', ()=>{
    ll.append(1);
    ll.append(3);
    ll.append(2);
    let node1 = ll.append(5);
    expect(node1.value).toEqual(5);
  });
  it('append() method should add value to head node if list is empty', ()=>{
    let node2 = ll.append(1);
    expect(node2.value).toEqual(1);
    expect(node2.next).toEqual(null);
  });
  it('insertBefore() method should add the new value just before the value passed', ()=>{
    let node3 = ll.insertBefore(3,5);
    expect(node3.next.value).toEqual(5);
  });
  it('insertBefore() method should add the new value just before the value passed', ()=>{
    let node4 = ll.insertBefore(1,5);
    expect(node4.value).toEqual(5);
  });
  it('insertBefore() method should throw exception when invalid value is searched', ()=>{
    let exception = ll.insertBefore(4,5);
    expect(exception).toEqual('invalid search key');
  });
  it('insertAfter() method should add the new value just after the value passed', ()=>{
    let node6 = ll.insertAfter(3,5);
    expect(node6.value).toEqual(5);
  });
  it('insertAfter() method should add the new value just after the value passed', ()=>{
    let node7 = ll.insertAfter(2,5);
    expect(node7.value).toEqual(5);
  });
  it('insertAfter() method should throw exception when invalid value is searched', ()=>{
    let exception = ll.insertAfter(4,5);
    expect(exception).toEqual('invalid search key');
  });  
  it('insertAfter() method should add the new value just after the value passed', ()=>{
    let deletedValue = ll.delete(2);
    expect(deletedValue).toEqual(2);
  });
}); 