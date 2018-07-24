'use strict';
const {
  Tree,Node,
} = require('../lib/trees');
describe('Tree module', () => {
  it('Tree constructor should exist',()=>{
    let tree = new Tree();
    expect (tree).toBeDefined();
  });
  it('insert() method should insert new element as root', ()=>{
    let tree = new Tree();
    tree.insert(8);
    let actual = tree.root.val;
    expect(actual).toEqual(8);
  });
  it('insert() method should insert new element at left of root', ()=>{
    let tree = new Tree();
    tree.insert(8);
    tree.insert(3);
    let actual = tree.root.left.val;
    expect(actual).toEqual(3);
  });
  it('remove() method should remove leaf', ()=>{
    let tree = new Tree();
    tree.insert(8);
    tree.insert(3);
    tree.insert(9);
    tree.insert(1);
    tree.removeNode(tree.root,1);
    let actual = tree.root.left.left;
    expect(actual).toEqual(null);
  });
  it('remove() method should remove node having one child', ()=>{
    let tree = new Tree();
    tree.insert(8);
    tree.insert(3);
    tree.insert(9);
    tree.insert(1);
    tree.removeNode(tree.root,3);
    let actual = tree.root.left.val;
    expect(actual).toEqual(1);
  });
  it('remove() method should remove node having two children', ()=>{
    let BST = new Tree();
    BST.insert(15);
    BST.insert(25);
    BST.insert(10);
    BST.insert(7);
    BST.insert(22);
    BST.insert(17);
    BST.insert(13);
    BST.insert(5);
    BST.insert(9);
    BST.insert(27);
    BST.removeNode(BST.root,5);
    BST.removeNode(BST.root,7);
    BST.removeNode(BST.root,15);
    let replacement = BST.root.val;
    expect(replacement).toEqual(17);
  });
  it('find() method should find a node', ()=>{
    let BST = new Tree();
    let node = new Node(7);
    BST.insert(15);
    BST.insert(25);
    BST.insert(10);
    BST.insert(7);
    BST.insert(22);
    BST.insert(17);
    BST.insert(13);
    BST.insert(5);
    BST.insert(9);
    BST.insert(27);
    let found = BST.find(node);
    expect(found).toEqual(true);
  });
  it('find() method should return undefined when node is not found', ()=>{
    let BST = new Tree();
    let node = new Node(1);
    BST.insert(15);
    BST.insert(25);
    BST.insert(10);
    BST.insert(7);
    BST.insert(22);
    BST.insert(17);
    BST.insert(13);
    BST.insert(5);
    BST.insert(9);
    BST.insert(27);
    let found = BST.find(node);
    expect(found).toEqual(false);
  });
  it('serialize() method of tree returns string form of the tree', ()=>{
    let tree = new Tree();
    tree.insert(3);
    tree.insert(5);
    tree.insert(8);
    expect(tree.serialize(tree.root)).toEqual('3->5->8');
  });
  it('deserialize() method of tree parses the string back to original tree', ()=>{
    let tree = new Tree();
    tree.insert(15);
    tree.insert(25);
    tree.insert(10);
    tree.insert(7);
    tree.insert(22);
    tree.insert(17);
    tree.insert(13);
    tree.insert(5);
    tree.insert(9);
    tree.insert(27);
    let actualTree = tree.root;
    let serializedData = tree.serialize(actualTree);
    let deserializedTree = tree.deserialize(serializedData);
    expect(deserializedTree.root).toEqual(actualTree);
  });
});

