'use strict';
describe('towersOfHanoi puzzle', () => {

  beforeEach(()=>{
    jest.resetModules();
  });

  it('towersOfHanoi() method should return output when there is only one disk ', ()=>{
    const towersOfHanoi= require('../lib/towers-of-hanoi');
    let actual = towersOfHanoi(1,'A','C','B');
    expect(actual[0]).toEqual('Disk 1 moved from A to C');
  });

  it('towersOfHanoi() method involves 2^n-1 operations', ()=>{
    const towersOfHanoi= require('../lib/towers-of-hanoi');
    let arr = towersOfHanoi(3,'A','C','B');
    expect(arr.length).toEqual(7);
  });

  it('towersOfHanoi() method involves 15 operations for 4 disks', ()=>{
    const towersOfHanoi= require('../lib/towers-of-hanoi');
    let arr = towersOfHanoi(4,'A','C','B');
    expect(arr.length).toEqual(15);
  });

});