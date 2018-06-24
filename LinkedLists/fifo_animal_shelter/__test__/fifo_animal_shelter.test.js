'use strict';
const {
  Queue,Stack,
} = require('../lib/fifo_animal_shelter');

describe('Queue module', () => {
  it('enqueue() method should add new element to the end of queue', ()=>{
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(5);
    queue.enqueue(8);
    queue.enqueue(9);
    queue.enqueue(22);
    let actual = queue.list.tail.val;
    expect(actual).toEqual(22);
  });
  it('size() method should return the length of the queue', ()=>{
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(5);
    queue.enqueue(8);
    queue.enqueue(9);
    let actual = queue.size();
    expect(actual).toEqual(4);
    queue.enqueue(22);
    expect(queue.size()).toEqual(5);
  });
  it('size() method should return length of zero when queue is empty', ()=>{
    let queue = new Queue();
    let actual = queue.size();
    expect(actual).toEqual(0);
  });
  it('peek() method should return a node value that is next in line to get out', ()=>{
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(5);
    queue.enqueue(8);
    let actual = queue.peek();
    expect(actual).toEqual(3);
  });
  it('isEmpty() method should return true when queue is empty', ()=>{
    let queue = new Queue();
    let actual = queue.isEmpty();
    expect(actual).toEqual(true);
    queue.enqueue(3);
    expect(queue.isEmpty()).toEqual(false);
  });

  it('dequeue() method returns first element of the queue and head pointer moves to next node', ()=>{
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(5);
    queue.enqueue(8);
    queue.enqueue(9);
    queue.enqueue(22);
    expect(queue.dequeue().val).toEqual(3);
    let actual =queue.list.head.val;
    expect(actual).toEqual(5);
  });
  it('dequeue() method reduces the length of the queue', ()=>{
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(5);
    queue.enqueue(8);
    queue.enqueue(9);
    queue.enqueue(22);
    queue.dequeue();
    let actual =queue.size();
    expect(actual).toEqual(4);
  });
  it('dequeue() method returns null when the queue is empty', ()=>{
    let queue = new Queue();
    queue.dequeue();
    expect(queue.dequeue()).toBeNull;
  });
  it('serialize() method of queue returns string form of the queue', ()=>{
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(5);
    queue.enqueue(8);
    expect(queue.serialize()).toEqual('3<-5<-8');
  });
  it('deserialize() method of queue parses the string back to original queue', ()=>{
    let seraializedQueue = new Queue();
    let originalQueue = new Queue();
    originalQueue.enqueue('3');
    originalQueue.enqueue('5');
    originalQueue.enqueue('8');
    expect(seraializedQueue.deserialize('3<-5<-8')).toEqual(originalQueue.list);
  });
});
describe('Stack module', () => {
  it('push() method should add new element to the end of stack', ()=>{
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    let actual = stack.list.tail.val;
    expect(actual).toEqual('b');
    stack.push('c');
    expect(stack.list.tail.val).toEqual('c');
  });
  it('pop() method returns last element of the stack that was most recently added (LIFO)', ()=>{
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.pop()).toEqual('c');
    let actual =stack.list.tail.val;
    expect(actual).toEqual('b');
  });
  it('pop() method reduces the length of the stack', ()=>{
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    let actual = stack.size();
    expect(actual).toEqual(2);
  });
  it('pop() method returns null when the stack is empty', ()=>{
    let stack = new Stack();
    expect(stack.pop()).toBeNull;
  });
  it('size() method should return the length of the stack', ()=>{
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let actual = stack.size();
    expect(actual).toEqual(3);
  });
  it('size() method should return length of zero when stack is empty', ()=>{
    let stack = new Stack();
    let actual = stack.size();
    expect(actual).toEqual(0);
  });
  it('peek() method should return a node value that is next in line to get out', ()=>{
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let actual = stack.peek();
    expect(actual).toEqual('c');
  });
  it('isEmpty() method should return true when stack is empty', ()=>{
    let stack = new Stack();
    let actual = stack.isEmpty();
    expect(actual).toEqual(true);
    stack.push(3);
    expect(stack.isEmpty()).toEqual(false);
  });

  it('serialize() method of stack returns string form of the list', ()=>{
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.serialize()).toEqual('a->b->c');
  });
  it('deserialize() method of stack parses the string back to original stack', ()=>{
    let seraializedStack = new Stack();
    let originalStack = new Stack();
    originalStack.push('a');
    originalStack.push('b');
    originalStack.push('c');
    expect(seraializedStack.deserialize('a->b->c')).toEqual(originalStack.list);
  });
});