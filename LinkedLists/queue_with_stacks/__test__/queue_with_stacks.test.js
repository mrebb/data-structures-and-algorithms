'use strict';
const {
  Queue,
} = require('../lib/queue_with_stacks');
describe('Queue with two stacks', () => {
  it('enqueue() method should add new element to the end of linked list', ()=>{
    let queue = new Queue();
    queue.inboxStack.push(3);
    queue.inboxStack.push(5);
    queue.inboxStack.push(8);
    queue.outboxStack.push(9);
    queue.outboxStack.push(11);
    queue.outboxStack.push(13);
    queue.enqueue(22);
    let actual = queue.inboxStack.list.tail.val;
    expect(actual).toEqual(22);
    expect(queue.outboxStack.list.head).toBeNull;
  });
  it('enqueue() method moves elements from outbox to inbox stack', ()=>{
    let queue = new Queue();
    queue.inboxStack.push(3);
    queue.inboxStack.push(5);
    queue.inboxStack.push(8);
    queue.outboxStack.push(9);
    queue.outboxStack.push(11);
    queue.outboxStack.push(13);
    queue.enqueue(22);
    let actual = queue.outboxStack.list.length;
    expect(actual).toEqual(0);
  });
  it('dequeue() method moves elements from inbox to outbox stack', ()=>{
    let queue = new Queue();
    queue.inboxStack.push(3);
    queue.inboxStack.push(5);
    queue.inboxStack.push(8);
    queue.outboxStack.push(9);
    queue.outboxStack.push(11);
    queue.outboxStack.push(13);
    queue.dequeue();
    let actual =queue.inboxStack.list.length;
    expect(actual).toEqual(0);
  });
  it('dequeue() method returns first element of the queue and clears inbox stack', ()=>{
    let queue = new Queue();
    queue.inboxStack.push(3);
    queue.inboxStack.push(5);
    queue.inboxStack.push(8);
    queue.outboxStack.push(9);
    queue.outboxStack.push(11);
    queue.outboxStack.push(13);
    let actual = queue.dequeue();
    expect(actual).toEqual(3);
  });
});