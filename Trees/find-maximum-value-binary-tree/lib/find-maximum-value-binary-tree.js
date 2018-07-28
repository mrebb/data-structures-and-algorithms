/**
 * constructor to create Tree with default root
 */
class Tree{
  constructor(){
    this.root = null;
    this.arr =[];
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
  /**
   * Recursive in-order traversal gives a default sorted list
   * @param {Tree.root} root 
   */
  findMaximumValue(root)
  {
    if(root===null){
      return;
    }
    if(root.left){
      this.findMaximumValue(root.left);
    }
    console.log(root.val);
    this.arr.push(root.val);
    if(root.right){
      this.findMaximumValue(root.right);
    }
    return this.arr[this.arr.length-1];
  }
  /**
   * non-recursive depth first search in-order
   */
  dfs(root){
    if(root===null){
      return;
    }
    let stack = [];
    var result = [];
    let node = root;
    while(node!==null){
      stack.push(node);
      node=node.left;
    }
    while(stack.length>0){
      node = stack.pop();
      console.log(node.val);
      result.push(node.val);
      if(node.right){
        node = node.right;
        while(node!==null){
          stack.push(node);
          node = node.left;
        }
      }
    }
    return result[result.length-1];
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