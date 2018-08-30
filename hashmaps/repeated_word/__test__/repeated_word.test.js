'use strict';
const
  {repeated_word}
 = require('../lib/repeated_word');

describe('find first repeated word', () => {
  it('check for repetition with simple sentence', ()=>{

    let repeatedWord = repeated_word('Once upon a time, there was a brave princess who...');
    expect(repeatedWord).toEqual('a');
  });

  it('check for repetition with more combinations', ()=>{

    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    let repeatedWord = repeated_word(str);
    expect(repeatedWord).toEqual('summer');
  });

  it('check for repetition with more combinations', ()=>{
    
    let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    let repeatedWord = repeated_word(str);
    expect(repeatedWord).toEqual('it');
  });
  
  it('check for no repetition', ()=>{
    let str = 'abc hello world';
    let repeatedWord = repeated_word(str);
    expect(repeatedWord).toEqual('no repetition');
  });
  
});
