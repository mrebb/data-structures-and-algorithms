
// Invoke the main function
findNumber_Of_N_Digit_Numbers(10);

function findNumber_Of_N_Digit_Numbers(n) {
  // Assuming that n is always atleast of two digits otherwise return a valid message. Return 1 for n=1 as we can form '0' with one digit as input. 
  if (n === 1) return 1;
  if (n < 1) return 'invalid input';

  // Starting with minimum of two digits to call recursive function
  let min = 2;

  //Output array to hold return value from recursive call
  let output = [];
  while (min <= n) {
    output = helper(min, output);
    min++;
  }
  //Return output array length. If original numbers are required as output then return output array itself. 
  // console.log(Math.pow(2,n))
  console.log(output.length);
  return output.length;
}

/**
 * Recursive helper function
 * @ n number of digits
 * @ temp result set at any given point
 */
function helper(n, temp) {
  let direction,end;
  let result = [];
  //Object to hold mapping for next direction based on current value
  const obj = {
    0:{'tall':['4'],'short':['7','9']},
    1:{'tall':['6','8'],'short':['5']},
    2:{'tall':['7','9'],'short':['4','6']},
    3:{'tall':['4','8'],'short':['5']},
    4:{'tall':['3','9'],'short':['2','8']},
    5:{'tall':[],'short':['1','3','7','9']},
    6:{'tall':['7','1'],'short':['2','8']},
    7:{'tall':['6','2'],'short':['0','5']},
    8:{'tall':['1','3'],'short':['4','6']},
    9:{'tall':['2','4'],'short':['0','5']},
  };
  if (n === 2) {
    return ['04', '06'];
  }
  //determine tall or short 'L'
  if(n-1<=3){
    direction = 'short';
  }
  else{
    if((n-1)%3===1){
      direction = 'tall';
    }
    else{
      direction = 'short';
    }
  }
  //Find result set for given n value and temp array
  temp.map(str => {
    end = str[str.length-1];
    let target = obj[end];
    let arr = target[direction];
    arr.length>0 && arr.map(number=>result.push(str + number));
  });
  
 
  //return intermediate result set to main function
  return result;
}

