class SinglyLinkedList {
  constructor() {
    this.head = null;
    // this.length = 0;
  }
  //Big(O) = O(n)
  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      return node;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  //Big(O) = O(1)
  prepend(val){
    let node = new Node(val);
    if(!this.head){
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
    return;
  }
  //Big(O) = O(1)
  insertAfter(val,newValue){
    let node = new Node(newValue);
    if(!this.head){
      return;
    }
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.val === val){
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
      currentNode = currentNode.next;
      if(currentNode === null){
        return 'invalid search key';
      }
    }
    return this.head;
  }
  //Big(O) = O(1)
  remove(val){
    if(!this.head){
      return 'list is empty';
    }
    let currentNode = this.head;
    while(currentNode){
      if(this.head.val === val){
        this.head = null;
        return;
      }
      if(currentNode.next.val === val){
        let deletedValue = currentNode.next.val;
        currentNode.next = currentNode.next.next;
        return deletedValue;
      }
      currentNode = currentNode.next;
    }
  }
  //Big(O) = O(n)
  serialize(obj){
    if (this.head === null) {
      return '{'+'""'+':'+'""'+'}';
    }
    let arr = [];
    if(obj instanceof Object){
      let objKeys = Object.keys(obj);
      objKeys.forEach((key)=>{
        let keyOut = '"'+key+'":';
        let keyValue = obj[key];
        if(typeof keyValue === 'string'){
          arr.push(keyOut + '"'+keyValue+'"');
        }
        else if(typeof keyValue === 'number' || typeof keyValue === 'boolean' ||  keyValue === null){
          arr.push(keyOut + keyValue);
        }
        else if(keyValue instanceof Object){
          arr.push(keyOut + this.serialize(keyValue));
        }
      });
    }
    return '{'+arr+'}';
  }
  //Big(O) = O(n)
  deserialize(str){
    let temp = str.split(': ').join('');
    //work in progress
    return temp;
  }
  //Big(O) = O(n);
  reverse () {
    if (!this.head) {
      return undefined;
    }
    let currentNode = this.head;
    let nextNode = null;
    let prevNode = null;
    
    while(currentNode) {
      nextNode = currentNode.next;
      
      currentNode.next = prevNode;
      
      prevNode = currentNode;
    
      currentNode = nextNode;
    }
    this.head = prevNode;
    return this;
  }
  
  hasLoop(){
    if (this.head === null) {
      return false;
    }
    let p1 = this.head;
    let p2 = this.head;
    while (p1.next && p1.next.next) {
      p1 = p1.next.next;
      p2 = p2.next;
  
      if (p1 === p2) {
        return true;
      }
    }
    return false;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
module.exports = {
  SinglyLinkedList,
  Node,
};