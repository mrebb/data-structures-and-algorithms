'use strict';
const {
  Tree,
} = require('../lib/find-maximum-value-binary-tree');

describe('Find maximum value of binary tree', () => {
  it('should traverse level by level', ()=>{
    let bst = new Tree();
    bst.add(8);
    bst.add(3);
    bst.add(10);
    bst.add(1);
    bst.add(6);
    bst.add(14);
    bst.add(4);
    bst.add(7);
    bst.add(13);
    let actual = bst.findMaximumValue(bst.root);
    expect(actual).toEqual(14);
  });
  it('should return undefined if tree is empty', ()=>{
    let bst = new Tree();
    let actual = bst.findMaximumValue(bst.root);
    expect(actual).toBeUndefined;
  });
  it('should return root if tree has only root', ()=>{
    let bst = new Tree();
    bst.add(8);
    let actual = bst.findMaximumValue(bst.root);
    expect(actual).toEqual(8);
  });
  
});
