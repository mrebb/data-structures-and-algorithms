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

SinglyLinkedList.kthElement = (kTh)=>{
  let currentNode = this.head;
  let counter = 0; 
  while(currentNode.next !== null){
    counter ++;
    currentNode = currentNode.next;
  }
  console.log(currentNode.value, counter);
  currentNode = this.head;
  kTh = counter-kTh;
  console.log(kTh);
  counter = 0;
  if(kTh>=0){

  
    while(counter<kTh){
      currentNode = currentNode.next;
      console.log(currentNode.value, counter);
      counter ++;
    
    }
    console.log(currentNode.value, counter);
    return currentNode.value;
  }
  else{
    return `linked list length is shorter than provided input`;
  }
};


module.exports = SinglyLinkedList;