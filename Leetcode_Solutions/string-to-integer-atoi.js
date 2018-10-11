/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = str.trim();
  if (isNaN(str[0]) && str[0] !== '+' && str[0] !== '-') {
    return 0;
  }
  if (str[0] === '+' || str[0] === '-') {
    if (str.length > 1) {
      if (!isNaN(str[1]) && str[1] !== ' ') {
        let result = '' + str[0];
        for (let i = 1; i < str.length; i++) {
          if (!isNaN(str[i]) && str[i] !== ' ') {
            result = result + str[i];
          }
          else {
            let plusMinus = str[0];
            if (plusMinus === '-') {
              return Math.abs(Number(result)) >= (2147483648) ? Number(plusMinus + 2147483648) : Number(result);
            }
            return Math.abs(Number(result)) >= (2147483648) ? Number(plusMinus + 2147483647) : Number(result);
          }
        }
        let plusMinus = str[0];
        if (plusMinus === '-') {
          return Math.abs(Number(result)) >= (2147483648) ? Number(plusMinus + 2147483648) : Number(result);
        }
        return Math.abs(Number(result)) >= (2147483648) ? Number(plusMinus + 2147483647) : Number(result);
      }
      else if (typeof str[1] === 'string') {
        return 0;
      }
    }
    else {
      return 0;
    }
  }
  if (!isNaN(str[0])) {
  
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== '.' && str[i] !== ' ') {
        result = result + str[i];
      }
      else {
        return Number(result) >= 2147483648 ? 2147483647 : Number(result);
      }
  
    }
    return Number(result) >= 2147483648 ? 2147483647 : Number(result);
  }
};