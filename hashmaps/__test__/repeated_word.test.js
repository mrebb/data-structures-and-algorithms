'use strict';
const
  lib
 = require('../lib/repeated_word');

describe('find first repeated word', () => {
  it('check for repetition with simple sentence', ()=>{
    let repeatedWord = lib.repeatedWord('Once upon a time, there was a brave princess who...');
    expect(repeatedWord).toEqual('a');
  });
  it('check for repetition with more combinations', ()=>{
    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    let repeatedWord = lib.repeatedWord(str);
    expect(repeatedWord).toEqual('summer');
  });
  it('check for no repetition', ()=>{
    let str = 'abc hello world';
    let repeatedWord = lib.repeatedWord(str);
    expect(repeatedWord).toEqual('no repetition');
  });
  
});
