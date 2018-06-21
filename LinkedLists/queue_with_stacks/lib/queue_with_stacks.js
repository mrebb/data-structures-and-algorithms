
const {
  SinglyLinkedList,
} = require('./SLL');

class Stack{
  constructor(){
    this.list = new SinglyLinkedList();
  }
  push(val){
    this.list.append(val);
    return this.list.tail;
  }
  isEmpty(){
    return !this.list.tail;
  }
  pop(){
    let removedTail = this.list.deleteTail();
    return removedTail?removedTail.val : null;
  }
  peek(){
    if(!this.list.tail){
      return null;
    }
    return this.list.tail.val;
  }
}
class Queue{
  constructor(){
    this.inboxStack = new Stack();
    this.outboxStack = new Stack();
  }
  enqueue(val){
    if(!this.outboxStack.isEmpty()){
      while(!(this.outboxStack.isEmpty())){
        this.inboxStack.push(this.outboxStack.pop());
      }
    }
    let lastValue = this.inboxStack.push(val);
    return lastValue;
  }
  dequeue(){
    if(this.outboxStack.isEmpty()){
      while(!(this.inboxStack.isEmpty())){
        this.outboxStack.push(this.inboxStack.pop());
      }
    }
    if(!this.outboxStack.isEmpty()){
      while(!(this.inboxStack.isEmpty())){
        this.outboxStack.push(this.inboxStack.pop());
      }
      let firstValue = this.outboxStack.pop();
      return firstValue;
    }
  }
  size(){
    return this.list.length;
  }
}
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}


module.exports = {
  Node,Stack,Queue,
};