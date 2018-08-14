'use strict';
const {
  repeatedWord,
} = require('../lib/repeated_word');

describe('repeated word', () => {
  it('check for repetition', ()=>{
  let repeated = repeatedWord('summer');
  expect(repeated).toEqual('');
  });
  
});
