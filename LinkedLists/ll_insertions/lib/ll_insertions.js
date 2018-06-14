class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.length = 0;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

SinglyLinkedList.append = (value)=>{
  let node = new Node(value);
  if(!this.head){
    this.head = node;
    return node;
  }
  let currentNode = this.head;
  while(currentNode.next){
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  return node;
};
SinglyLinkedList.insertBefore = (value,newValue)=>{
  let node = new Node(newValue);
  let currentNode = this.head;
  if(currentNode.value === value){
    this.head = node;
    this.head.next = currentNode;
    return node;
  }
  while(currentNode.next){
    if(currentNode.next.value === value){
      break;
    }
    else{
      currentNode = currentNode.next;
    
      if(currentNode.next === null){
        return 'invalid search key';
      }
    }
  }
  node.next = currentNode.next;
  currentNode.next = node;
  return this.head;
};
SinglyLinkedList.insertAfter = (value,newValue)=>{
  let node = new Node(newValue);
  let currentNode = this.head;
  while(currentNode){
    if(currentNode.value === value){
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
};
SinglyLinkedList.delete = (value)=>{
  if(!this.head){
    return 'list is empty';
  }
  let currentNode = this.head;
  while(currentNode){
    if(this.head.value === value){
      this.head = null;
      return;
    }
    if(currentNode.next.value === value){
      let deletedValue = currentNode.next.value;
      currentNode.next = currentNode.next.next;
      return deletedValue;
    }
    currentNode = currentNode.next;
  }
};
module.exports = SinglyLinkedList;