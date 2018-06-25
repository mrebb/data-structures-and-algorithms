'use strict';
const {
  AnimalShelter,
} = require('../lib/fifo_animal_shelter');

describe('Animal Shelter', () => {
  it('enqueue(cat) method should add new cat to the end of shelter', ()=>{
    let shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    let actual = shelter.cat.list.tail.val;
    expect(actual).toEqual('cat');
  });
  it('enqueue() method should add new animal to the respective queue of shelter', ()=>{
    let shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    expect(shelter.dog.list.tail.val).toEqual('dog');
    expect(shelter.cat.list.tail.val).toEqual('cat');
  });
  it('enqueue() method should accept only dogs or cats', ()=>{
    let shelter = new AnimalShelter();
    expect(shelter.enqueue('bird')).toEqual('only cats and dogs in this shelter');
  });
  it('dequeue(cat) method kicks out cat and dequeue(dog) method kicks out dogs out', ()=>{
    let shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.dequeue('dog');
    expect(shelter.dequeue('dog').val).toEqual('dog');
    expect(shelter.dequeue('cat').val).toEqual('cat');
  });
  it('dequeue(anything) method kicks out cat or dog', ()=>{
    let shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.dequeue('dog');
    shelter.dequeue('dog');
    shelter.dequeue('cat');
    //last cat to go out
    expect(shelter.dequeue('anything').val).toEqual('cat'); 
    //new dog came in
    shelter.enqueue('dog'); 
    //now returns dog since there are no more cats
    expect(shelter.dequeue('anything').val).toEqual('dog');
  });
 
  it('dequeue() method returns null when the shelter is empty', ()=>{
    let shelter = new AnimalShelter();
    expect(shelter.dequeue()).toBeNull;
  });
});
