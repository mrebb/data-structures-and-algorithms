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
    return false;
  }
  let p1 = LL.head;
  let p2 = LL.head;
  while(p1.next.next){
    p1 = p1.next.next;
    p2 = p2.next;

    if(p1===p2){
      var isCircular = true;
      break;
    }
  }

  if(isCircular){
    return isCircular;
  }
  else {
    return false;
  }
};
SinglyLinkedList.test = ()=>{
  SinglyLinkedList.append(1);
  SinglyLinkedList.append(3);
  SinglyLinkedList.append(2);
  let LL = SinglyLinkedList.append(5);
  LL.head.next.next.next = LL.head.next.next;
  console.log(LL);
  let result=SinglyLinkedList.hasLoop(LL);
  console.log(result);
  return result;
};
console.log(SinglyLinkedList.test());
module.exports = SinglyLinkedList;