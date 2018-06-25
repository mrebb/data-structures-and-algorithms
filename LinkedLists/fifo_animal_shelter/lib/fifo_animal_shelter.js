
const {
  SinglyLinkedList,
} = require('./SLL');

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
}
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class AnimalShelter{
  constructor(){
    this.cat = new Queue();
    this.dog = new Queue();
  }
  enqueue(animal){
    if(animal === 'cat'){ 
      return this.cat.enqueue(animal);
    }
    else if(animal === 'dog'){
      return this.dog.enqueue(animal);
    }
    else{ return 'only cats and dogs in this shelter';}
  }
  dequeue(pref){
    if(pref === 'cat'){ 
      return this.cat.dequeue();
      
    }
    else if(pref === 'dog'){
      return this.dog.dequeue();
    }
    else{ 
      if(!this.cat.isEmpty()){return this.cat.dequeue();}
      else if(!this.dog.isEmpty()){return this.dog.dequeue();}
      else{ return 'all animals are adopted';}
    }
  }
}

module.exports = {
  Node,Queue,AnimalShelter,
};