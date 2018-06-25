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
module.exports = multiBracketValidation;