'use strict';
const {
  Tree,
} = require('../lib/fizzBuzzTree');

describe('fizzbuzztree module', () => {
  it('should replace the node values with fizz for value% 3 ===0 condition', ()=>{
    let fizzbuzzTree = new Tree(27);
    fizzbuzzTree.add(6);
    fizzbuzzTree.add(3);
    fizzbuzzTree.add(31);
    fizzbuzzTree.fizzbuzz(fizzbuzzTree.root);
    expect(fizzbuzzTree.root.val).toEqual('fizz');
    expect(fizzbuzzTree.root.left.val).toEqual('fizz');
    expect(fizzbuzzTree.root.right.val).toEqual(31);
  });
  it('should replace the node values with buzz for value % 5===0 condition', ()=>{
    let fizzbuzzTree = new Tree(10);
    fizzbuzzTree.add(5);
    fizzbuzzTree.add(3);
    fizzbuzzTree.add(32);
    fizzbuzzTree.fizzbuzz(fizzbuzzTree.root);
    expect(fizzbuzzTree.root.val).toEqual('buzz');
    expect(fizzbuzzTree.root.left.val).toEqual('buzz');
    expect(fizzbuzzTree.root.right.val).toEqual(32);
  });
  it('should replace the node values with fizzbuzz for value % 5 & %3 ===0 condition', ()=>{
    let fizzbuzzTree = new Tree(30);
    fizzbuzzTree.add(45);
    fizzbuzzTree.add(15);
    fizzbuzzTree.fizzbuzz(fizzbuzzTree.root);
    expect(fizzbuzzTree.root.val).toEqual('fizzbuzz');
    expect(fizzbuzzTree.root.left.val).toEqual('fizzbuzz');
    expect(fizzbuzzTree.root.right.val).toEqual('fizzbuzz');
  });
  it('should replace the node values with fizz or buzz or fizzbuzz depending on node value', ()=>{
    let fizzbuzzTree = new Tree(5);
    fizzbuzzTree.add(15);
    fizzbuzzTree.add(3);
    fizzbuzzTree.add(1);
    fizzbuzzTree.fizzbuzz(fizzbuzzTree.root);
    expect(fizzbuzzTree.root.val).toEqual('buzz');
    expect(fizzbuzzTree.root.left.val).toEqual('fizz');
    expect(fizzbuzzTree.root.right.val).toEqual('fizzbuzz');
  });
});
