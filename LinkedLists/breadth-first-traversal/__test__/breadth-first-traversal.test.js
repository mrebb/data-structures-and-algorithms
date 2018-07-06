'use strict';
const {
  Tree,
} = require('../lib/breadth-first-traversal');

describe('BFS module on binary tree', () => {
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
    let actual = bst.breadthFirstTraversal();
    let expected = [8,3,10,1,6,14,4,7,13];
    expect(actual).toEqual(expected);
  });
  it('should return null if tree is empty', ()=>{
    let bst = new Tree();
    let actual = bst.breadthFirstTraversal();
    expect(actual).toBeNull;
  });
  it('should return root if tree has only root', ()=>{
    let bst = new Tree();
    bst.add(8);
    let actual = bst.breadthFirstTraversal();
    expect(actual).toEqual([8]);
  });
  
});
