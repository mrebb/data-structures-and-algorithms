'use strict';
const multiBracketValidation = require ('../lib/multi-bracket-validation');


describe('multiBracketValidation', () => {
  it('should return true when square brackets are balanced', ()=>{
    expect(multiBracketValidation('[hello[test]]')).toEqual(true);
    expect(multiBracketValidation('[h')).toEqual(false);
  });
  it('should return true when curly brackets are balanced', ()=>{
    expect(multiBracketValidation('{{object literals}}')).toEqual(true);
    expect(multiBracketValidation('{{')).toEqual(false);
  });
  it('should return true when round brackets are balanced', ()=>{
    expect(multiBracketValidation('()function()')).toEqual(true);
    expect(multiBracketValidation('()(')).toEqual(false);
  });
  it('should return true when all brackets are balanced', ()=>{
    expect(multiBracketValidation('()[[Extra Characters]]')).toEqual(true);
  });
  it('should return false when all brackets are not balanced', ()=>{
    expect(multiBracketValidation('[({}]')).toEqual(false);
    expect(multiBracketValidation('[}({codefellow}){]')).toEqual(false);
  });
});
