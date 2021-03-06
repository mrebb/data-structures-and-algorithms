/**
 * constructor to create Tree with default root
 */
class Tree{
  constructor(){
    this.root = null;
  }
  /**
   * method to push new values on tree recursively
   * @param {Node} node 
   */
  insertNew(data)
  {
    // Creating a node and initailising 
    // with data 
    var newNode = new Node(data);
                     
    // root is null then node will
    // be added to the tree and made root.
    if(this.root === null)
      this.root = newNode;
    else
 
    // find the correct position in the 
    // tree and add the node
      this.insertNode(this.root, newNode);
  }
 
  insertNode(root,node){
    if(node.val<root.val){
      root.left = this.insertNode(root.left,node.val);
    }
    else if(node.val>root.val){
      root.right = this.insertNode(root.right,node.val);
    }
    return root;
  }

  //non-recursive
  insert(val){
    let node = new Node(val);
    if(this.root === null){
      this.root = node;
      return;
    }
    let current = this.root;
    while(current){
      if(node.val>current.val){
        if(!current.right){
          current.right = node;
          break;
        }
        current = current.right;
      }
      else if(node.val<current.val){
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
  
  // Method to remove node with a 
  // given data
  // it recurrs over the tree to find the
  // data and removes it
  removeNode(node, key)
  {   
    // if the root is null then tree is 
    // empty
    if(node === null)
      return null;
 
    // if data to be delete is less than 
    // roots data then move to left subtree
    else if(key < node.val)
    {
      node.left = this.removeNode(node.left, key);
      return node;
    }
 
    // if data to be delete is greater than 
    // roots data then move to right subtree
    else if(key > node.val)
    {
      node.right = this.removeNode(node.right, key);
      return node;
    }
 
    // if data is same as the root's data 
    // then delete this node
    else
    {
      // deleting node with no children
      if(node.left === null && node.right === null)
      {
        node = null;
        return node;
      }
 
      // deleting node with one children
      if(node.left === null)
      {
        node = node.right;
        return node;
      }
         
      else if(node.right === null)
      {
        node = node.left;
        return node;
      }
 
      // Deleting node with two children
      // minumum node of the rigt subtree
      // is stored in aux
      var aux = this.findMinNode(node.right);
      node.val = aux.val;
 
      node.right = this.removeNode(node.right, aux.val);
      return node;
    }
 
  }
  //  finds the minimum node in tree
  // searching starts from given node
  findMinNode(node)
  {
    // if left of a node is null
    // then it must be minimum node
    if(node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  /**
   * breadth-first approach
   * @param {Node} node 
   */
  find(node){
    if(this.root === null){
      return null;
    }
    let currentNode, queue=[];
    queue.push(this.root);
    while(queue.length){
      currentNode = queue.splice(0,1)[0];
      if(currentNode.val === node.val){
        break;
      }
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return currentNode.val === node.val;

  }
  /**
   * Recursive in-order traversal gives a default sorted list
   * @param {Tree.root} root 
   */
  inOrderTraverse(root)
  {
    if(root===null){
      return;
    }
    if(root.left){
      this.inOrderTraverse(root.left);
    }
    console.log(root.val);
    if(root.right){
      this.inOrderTraverse(root.right);
    }
  }
  /**
   * non-recursive depth first search in-order
   */
  dfs(root){
    if(root===null){
      return;
    }
    let stack = [];
    let node = root;
    while(node!==null){
      stack.push(node);
      node=node.left;
    }
    while(stack.length>0){
      node = stack.pop();
      console.log(node.val);
      if(node.right){
        node = node.right;
        while(node!==null){
          stack.push(node);
          node = node.left;
        }
      }
    }
    
  }
  /**
 * Complex Util method
 * @param {recursive tree current node} node 
 * @param {left node} l 
 * @param {right node} r 
 */
  isTreeBSTUtil(node,l=null,r=null){
    if(node===null){
      return true;
    }
    if(l!==null && node.val<l.val){
      return false;
    }
    if(r!==null && node.val>r.val){
      return false;
    }
    if(!this.isTreeBSTUtil(node.left,l,node) || !this.isTreeBSTUtil(node.right,node,r)){
      return false;
    }
    return true;
  }
  /** 
   * Simple util method
   * @param {current tree node passing recursively} node 
   */
  isBSTUtil(node){
    if(node===null){
      return true;
    }
    if(node.left!==null && node.val<node.left.val){
      return false;
    }
    if(node.right!==null && node.val>node.right.val){
      return false;
    }
    if(!this.isBSTUtil(node.left) || !this.isBSTUtil(node.right)){
      return false;
    }
    return true;
  }

  /**
   * actual method that talks to Util method
   */
  isTreeBST(){
    return this.isBSTUtil(this.root);
  }
  /**
   * Serialize function
   * @param {tree root node} root 
   */
  serialize(root){
    if(!root){
      return null;
    }
    let result = [];
    this.seriazerHelper(root,result);
    return result.join('->');
  }
  /**
   * serializer helper
   * @param {current node} node 
   * @param {result} output 
   */
  seriazerHelper(node,output){
    if(!node){
      output.push('#');
      return;
    }
    if(node.left){this.seriazerHelper(node.left,output);}
    output.push(node.val);
    if(node.right){this.seriazerHelper(node.right,output);}
  }
  /**
   * deserialize to construct the tree back to form
   * @param {serialized data} data 
   */
  deserialize(data){
    data = data.split('->');
    console.log(data);
    for(let i=0;i<data.length;i++){
      this.insert(data[i]);
    }
    return this;
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
