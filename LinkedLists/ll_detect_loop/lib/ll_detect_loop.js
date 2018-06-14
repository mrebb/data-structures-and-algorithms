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
  return this;
};

SinglyLinkedList.hasLoop = (LL)=>{
  console.log(LL);
  if(LL===undefined){
    return undefined;
  }
  let p1 = LL.head;
  let p2 = LL.head;
  while(p1.next.next){
    p1 = p1.next.next;
    p2 = p2.next;

    if(p1===p2){
      return true;
    }
  }
  return false;
  
};

module.exports = SinglyLinkedList;