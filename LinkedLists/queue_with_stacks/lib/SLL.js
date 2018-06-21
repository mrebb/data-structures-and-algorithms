class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //Big(O) = O(n)
  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    return this;
  }
  //Big(O) = O(1)
  prepend(val){
    let node = new Node(val);
    let currentNode = this.head;
    if(!this.head){
      this.head = node;
      return;
    }
    this.head.next = currentNode;
    this.head = node;
    return;
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
  deleteTail(){
    if(!this.head){
      return null;
    }
    if(this.head === this.tail){
      let deletedTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return deletedTail;
    }
    let deletedTail = this.tail;
    let currentNode = this.head;
    while(currentNode.next){
      if(!currentNode.next.next){
        currentNode.next = null;
      }
      else{
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    this.length--;
    return deletedTail;
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