'use strict';
const {
  SinglyLinkedList,
} = require('../lib/SLL');
//let node = new Node();
describe('Singly linked list module', () => {
  it('append() method should add last element to the end of linked lists', ()=>{
    let ll = new SinglyLinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.append(5);
    expect(ll.head.next.next.next.value).toEqual(5);
  });
  it('append() method should add value to head node if list is empty', ()=>{
    let ll = new SinglyLinkedList();
    ll.append(1);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next).toEqual(null);
  });
  it('prepend() method should add the new node before head', ()=>{
    let ll = new SinglyLinkedList();
    ll.append(1);
    ll.append(2);
    ll.prepend(5);
    expect(ll.head.value).toEqual(5);
  });
  it('prepend() method should add node to head if list is empty', ()=>{
    let ll = new SinglyLinkedList();
    ll.prepend(5);
    expect(ll.head.value).toEqual(5);
  });
  
  it('insertAfter() method should add the new value just after the value mentioned', ()=>{
    let ll = new SinglyLinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.append(5);
    ll.insertAfter(3,7);
    expect(ll.head.next.next.value).toEqual(7);
  });
  it('insertAfter() method should throw exception when invalid value is searched', ()=>{
    let ll = new SinglyLinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.append(5);
    expect(ll.insertAfter(4,5)).toEqual('invalid search key');
  });  
  it('remove() method should throw an exception if list is empty', ()=>{
    let ll = new SinglyLinkedList();
    let deletedValue = ll.remove(2);
    expect(deletedValue).toEqual('list is empty');
  });
  it('remove() method should remove the new value just after the value passed', ()=>{
    let ll = new SinglyLinkedList();
    ll.append(30);
    ll.append(2);
    ll.append(3);
    ll.remove(2);
    expect(ll.head.next.value).toEqual(3);
  });
  it('serialize() method converts object to string form when linked list object is passed', ()=>{
    let ll = new SinglyLinkedList();
    ll.append('hello');
    ll.append(3);
    ll.append(2);
    ll.append(5);
    expect(ll.serialize(ll)).toEqual(JSON.stringify(ll));
  });
  it('serialize() method converts object to string form when an empty object is passed', ()=>{
    let ll = new SinglyLinkedList();
    expect(ll.serialize()).toEqual(JSON.stringify({'':''}));
  });
  it('deserialize() method converts string to object form when a string is passed', ()=>{
    let ll = new SinglyLinkedList();
    ll.append(1);
    ll.append(3);
    expect(ll.deserialize(ll.serialize(ll))).toEqual(expect.stringContaining('head'));
  });
  it('reverse() method reverses linked list', ()=>{
    let ll = new SinglyLinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.append(5);
    expect(ll.reverse()).toEqual(ll);
  });
  it('reverse() method should handle when an empty linked list is passed', ()=>{
    let ll = new SinglyLinkedList();
    expect(ll.reverse()).toEqual(undefined);
  });
});