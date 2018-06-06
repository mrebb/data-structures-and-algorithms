'use strict';
const ll = require('../lib/ll_kth_from_end');
describe('Singly linked list module', () => {
  it('kThElement() method should return kth node value from back of LL', ()=>{
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
    let nodeValue = ll.kthElement(0);
    expect(nodeValue).toEqual(2);
  });
  it('kThElement() method should return kth node value from back of LL', ()=>{
    let nodeValue = ll.kthElement(2);
    expect(nodeValue).toEqual(3);
  });
  it('kThElement() method should return kth node value from back of LL', ()=>{
    let nodeValue = ll.kthElement(6);
    expect(nodeValue).toEqual(`linked list length is shorter than provided input`);
  });
}); 