'use strict';
const adjacentProduct = require('../lib/array_adjacent_product.js');

describe('Array adjacent product module', () => {
  it('Array adjacent product module returns largest product of 2 adjacent values within the 2D array', ()=>{
    expect(adjacentProduct.largestProduct( [ 
      [ 1, 2, 1 ], 
      [ 2, 4, 2 ], 
      [ 3, 6, 8 ], 
      [ 7, 8, 1 ]])).toEqual(64);
  });
  it('Array adjacent product module returns largest product of 2 adjacent values when array has bigger number in last column', ()=>{
    expect(adjacentProduct.largestProduct( [ 
      [ 1, 2, 276 ], 
      [ 2, 4, 2 ], 
      [ 3, 2, 8 ], 
      [ 7, 8, 1 ]])).toEqual(1104);
  });
  it('Array adjacent product module returns largest product of 2 adjacent values when array has bigger number at last row last column positions', ()=>{
    expect(adjacentProduct.largestProduct( [ 
      [ 1, 2, 3 ], 
      [ 2, 4, 2 ], 
      [ 3, 2, 8 ], 
      [ 7, 8, 13 ]])).toEqual(104);
  });
  it('Array adjacent product module returns largest product of 2 adjacent values when array has negative numbers', ()=>{
    expect(adjacentProduct.largestProduct( [ 
      [ 1, -2, 3 ], 
      [ 2, 4, 2 ], 
      [ 3, 2, 8 ], 
      [ 7, 8, -13 ]])).toEqual(64);
  });
  it('Array adjacent product module returns largest product of 2 adjacent values when array has empty values', ()=>{
    expect(adjacentProduct.largestProduct( [ 
      [ 1,'', 3 ], 
      [ 2, 4, 2 ], 
      [ 3, 2, 8 ], 
      [ 7, 8, 3 ]])).toEqual(64);
  });
  it('Array adjacent product module returns largest product of 2 adjacent values when array has string values', ()=>{
    expect(adjacentProduct.largestProduct( [ 
      [ 1,'tes', 3 ], 
      [ 2, 4, 2 ], 
      [ 3, 2, 8 ], 
      [ 7, 8, 3 ]])).toEqual('wrong input');
  });
} );