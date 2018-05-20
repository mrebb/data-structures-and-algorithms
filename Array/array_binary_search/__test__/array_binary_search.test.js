'use strict';
const search = require('../lib/array_binary_search.js');

describe('Array binary search module', () => {
  it('Array binary search module returns index of search value passed in', ()=>{
    expect(search.binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });
  
  it('Array binary search module returns index of search value passed for ascending sorted array', ()=>{
    expect(search.binarySearch([42,23,17,15,9,7,6], 15)).toEqual(3);
  });

  it('Array binary search module returns -1 if search value passed is not found', ()=>{
    expect(search.binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
  });

  it('Array binary search module returns index of search string passed in', ()=>{
    expect(search.binarySearch(['apple','banana','coco','donut','eggs'], 'banana')).toEqual(1);
  });
  it('Array binary search module returns -1 if search string passed is not found', ()=>{
    expect(search.binarySearch(['apple','banana','coco','donut','eggs'], 'orange')).toEqual(-1);
  });
} );