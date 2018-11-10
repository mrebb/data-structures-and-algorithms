/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  let obj = { 1: [], 2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'], 6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'], 8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z'] };
  if (digits.length < 2) {
    return obj[digits[0]];
  }
  let arr = [];
  for (let i = 0; i < digits.length; i++) {
    if (obj[digits[i]]) {
      arr.push(obj[digits[i]]);
    }
  }
  
  let result = arr.splice(0, 1)[0];
  while (arr.length > 0) {
    result = helper(arr.splice(0, 1)[0], result);
  }
  return result.sort();

};
function helper(temp, total) {
  let result = [];
  for (let j = 0; j < total.length; j++) {
    for (let k = 0; k < temp.length; k++) {
      result.push(total[j] + temp[k]);
    }
  }
  return result;
}

letterCombinations('234');