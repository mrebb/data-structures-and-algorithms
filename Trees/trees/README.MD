<img src="https://travis-ci.com/mrebb/data-structures-and-algorithms.svg?branch=trees">

* Travis Build: https://travis-ci.com/mrebb/data-structures-and-algorithms 

# Tree Data Structure

* implement a Tree Constructor
    ```
  class Tree{
    constructor(){
    this.root = null;
  }
    ```
* implement insert(node) and remove(node) methods on the class
```
    let tree = new Tree();
    tree.insert(15);//{ root: Node { val: 15, left: null, right: null } }​​​​​
  ```
* implement find(node) methods on the class
```
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
    tree.find(22); //true
    tree.find(1); //false
```
* implement serialize() and deserialize() methods on the class
```
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
    console.log(actualTree);//Node { val: 15,​​​​​
    ​​​​​  left: ​​​​​
    ​​​​​   Node { val: 10,​​​​​
    ​​​​​     left: Node { val: 7, left: [Object], right: [Object] },​​​​​
    ​​​​​     right: Node { val: 13, left: null, right: null } },​​​​​
    ​​​​​  right: ​​​​​
    ​​​​​   Node { val: 25,​​​​​
    ​​​​​     left: Node { val: 22, left: [Object], right: null },​​​​​
    ​​​​​     right: Node { val: 27, left: null, right: null } } }​​​​​

    console.log(serializedData);//5->7->9->10->13->15->17->22->25->27​​​​​
    let deserializedTree = tree.deserialize(serializedData);
    console.log(deserializedTree.root); //Node { val: 15,​​​​​
    ​​​​​  left: ​​​​​
    ​​​​​   Node { val: 10,​​​​​
    ​​​​​     left: Node { val: 7, left: [Object], right: [Object] },​​​​​
    ​​​​​     right: Node { val: 13, left: null, right: null } },​​​​​
    ​​​​​  right: ​​​​​
    ​​​​​   Node { val: 25,​​​​​
    ​​​​​     left: Node { val: 22, left: [Object], right: null },​​​​​
    ​​​​​     right: Node { val: 27, left: null, right: null } } }​​​​​
```
