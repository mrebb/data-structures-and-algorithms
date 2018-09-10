'use strict';
const
  {isPalindromeRecursive}
 = require('../lib/isPalindromeRecursive');

describe('Palindrome function returns true or false', () => {
  it('check for palindrome when string has special characters and empty spaces', ()=>{

    let actual = isPalindromeRecursive('Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.');
    expect(actual).toEqual(true);
  });

  it('check for palindrome when string does not have special characters and empty spaces', ()=>{

    let str = 'tacocat';
    let repeatedWord = isPalindromeRecursive(str);
    expect(repeatedWord).toEqual(true);
  });

  it('check for palindrome when string is mix of uppercase letters', ()=>{
    
    let str = 'UFO tofu?';
    let repeatedWord = isPalindromeRecursive(str);
    expect(repeatedWord).toEqual(true);
  });
  
  it('check for false when string is not apalindrome ', ()=>{
    let str = 'racecars';
    let repeatedWord = isPalindromeRecursive(str);
    expect(repeatedWord).toEqual(false);
  });
  
});
