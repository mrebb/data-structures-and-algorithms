/**
 * constructor to create Tree with default root
 */
class Tree{
  constructor(){
    this.root = null;
  }
  /**
   * method to push new values on tree
   * @param {Node.val} val 
   */
  add(val){
    let node = new Node(val);
    if(this.root === null){
      this.root = node;
      return;
    }
    let current = this.root;
    while(current){
      if(val>current.val){
        if(!current.right){
          current.right = node;
          break;
        }
        current = current.right;
      }
      else if(val<current.val){
        if(!current.left){
          current.left = node;
          break;
        }
        current = current.left;
      }
      else{
        break;
      }
    }
  }

  breadthFirstTraversal(){
    if(this.root === null){
      return null;
    }
    let currentNode, queue=[];
    let result = [];
    queue.push(this.root);
    while(queue.length){
      currentNode = queue.splice(0,1)[0];
      console.log(currentNode.val);
      result.push(currentNode.val);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }
}
class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
module.exports = {
  Node,Tree,
};
