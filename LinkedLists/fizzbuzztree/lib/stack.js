
class Stack{
  constructor(){
    this.arr = [];
  }
  push(val){
    this.arr.push(val);
    return this.arr;
  }
  isEmpty(){
    return this.arr.length === 0;
  }
  pop(){
    if(this.arr === 0){
      return null;
    }
    return this.arr.pop();
  }
  peek(){
    if(this.arr.length === 0){
      return null;
    }
    return this.arr[this.arr.length-1];
  }
}

module.exports = Stack;