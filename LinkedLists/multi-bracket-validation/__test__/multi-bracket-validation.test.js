'use strict';
const multiBracketValidation = require ('../lib/multi-bracket-validation');


describe('multiBracketValidation', () => {
  it('should return true when square brackets are balanced', ()=>{
    expect(multiBracketValidation('[hello[test]]')).toBeTruthy;
    expect(multiBracketValidation('[h')).toBeFalsy;
  });
  it('should return true when curly brackets are balanced', ()=>{
    expect(multiBracketValidation('{{object literals}}')).toBeTruthy;
    expect(multiBracketValidation('{{')).toBeFalsy;
  });
  it('should return true when round brackets are balanced', ()=>{
    expect(multiBracketValidation('()function()')).toBeTruthy;
    expect(multiBracketValidation('()(')).toBeFalsy;
  });
  it('should return true when all brackets are balanced', ()=>{
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy;
  });
  it('should return false when all brackets are not balanced', ()=>{
    expect(multiBracketValidation('[({}]')).toBeFalsy;
    expect(multiBracketValidation('[({codefellow{)}]')).toBeFalsy;
  });
});
