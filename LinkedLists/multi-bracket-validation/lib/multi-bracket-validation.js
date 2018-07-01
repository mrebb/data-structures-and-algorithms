let multiBracketValidation = (input)=>{
  const stack = [];
  const closures = {
    '}':'{',
    ']':'[',
    ')':'(',
  } ;
  const openers = ['{','[','('];
  for(let char of input){
    if(openers.includes(char)){
      stack.push(char);
    }
    else if(Object.keys(closures).includes(char)){
      if(stack.length ===  0){
        return false;
      }
      else if(stack[stack.length-1] !== closures[char]){
        return false;
      }
      else{
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};
module.exports = multiBracketValidation;
/**
 * previous solution not covering all scenarios 
  let multiBracketValidation = (input)=>{
  let arr = input.split('');
  let roundBracketsOpen = 0, squareBracketsOpen = 0, curlyBracketsOpen = 0;
  let roundBracketsClose = 0, squareBracketsClose = 0, curlyBracketsClose = 0;
  for(var value of arr){
    if(value === '('){ roundBracketsOpen++;}
    if(value === ')'){ roundBracketsClose++;}
    if(value === '{'){ curlyBracketsOpen++;}
    if(value === '}'){ curlyBracketsClose++;}
    if(value === '['){ squareBracketsOpen++;}
    if(value === ']'){ squareBracketsClose++;}
  }
  return roundBracketsOpen === roundBracketsClose && curlyBracketsOpen === curlyBracketsClose && squareBracketsOpen === squareBracketsClose;
};
 */
