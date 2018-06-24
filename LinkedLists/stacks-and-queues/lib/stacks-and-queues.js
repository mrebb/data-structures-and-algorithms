
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
  size(){
    return this.list.length;
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
  serialize(){
    if(!this.list.head){
      return null;
    }
    let arr = [];
    let currentNode = this.list.head;
    while(currentNode){
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr.join('->');
  }
  deserialize(str){
    let arr = str.split('->');
    let list = this.list;
    list.head = null;
    list.tail = null;
    let node = new Node(arr[0]);
    list.head = node;
    list.tail = node;
    list.length++;
    for(let i = 1; i<arr.length;i++){
      let node = new Node(arr[i]);
      list.tail.next = node;
      list.tail = node;
      list.length++;
    }
    return this.list;
  }
}
class Queue{
  constructor(){
    this.list = new SinglyLinkedList();
  }
  enqueue(val){
    this.list.append(val);
    return this.list.tail;
  }
  dequeue(){
    return this.list.deleteHead();
  }
  size(){
    return this.list.length;
  }
  peek(){
    if(!this.list.head){
      return null;
    }
    return this.list.head.val;
  }
  isEmpty(){
    return this.list.length === 0;
  }
  serialize(){
    if(!this.list.head){
      return null;
    }
    let arr = [];
    let currentNode = this.list.head;
    while(currentNode){
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr.join('<-');
  }
  deserialize(str){
    let arr = str.split('<-');
    let list = this.list;
    list.head = null;
    list.tail = null;
    let node = new Node(arr[0]);
    list.head = node;
    list.tail = node;
    list.length++;
    for(let i = 1; i<arr.length;i++){
      let node = new Node(arr[i]);
      list.tail.next = node;
      list.tail = node;
      list.length++;
    }
    return this.list;
  }
}
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}


module.exports = {
  Node,Stack,Queue,
};