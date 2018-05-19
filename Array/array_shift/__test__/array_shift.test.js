'use strict';
const arrayShift = require('../lib/array_shift.js');

describe('Array Shift module', () => {
  it('Array Shift module returns array with new number inserted at middle of index', ()=>{
    expect(arrayShift.insertShiftArray([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
  });

  it('Array Shift module handles if value is not passed', ()=>{
    expect(arrayShift.insertShiftArray([2,4,6,8])).toEqual('value is required as a second argument');
  });

  it('Array Shift module returns array with new string inserted at middle of index', ()=>{
    expect(arrayShift.insertShiftArray([2,'hello',6,8],'world')).toEqual([2,'hello','world',6,8]);
  });
  it('Array Shift module handles if array is empty', ()=>{
    expect(arrayShift.insertShiftArray([],'i am alone')).toEqual(['i am alone']);
  });
} );