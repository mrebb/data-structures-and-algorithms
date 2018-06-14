class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    let node = new Node(value);
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
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
module.exports = {
  SinglyLinkedList,
  Node,
};