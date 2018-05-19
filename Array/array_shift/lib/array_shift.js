'use strict';
module.exports = exports = {};
exports.insertShiftArray = (arr,val)=>{
  if(val === undefined){
    return 'value is required as a second argument';
  }
  let result = [];
  var index = arr.length/2;
  index= Math.round(index);
   
  for(let i=0; i<index; i++){
    result[i] = arr[i];
  }
  result[index]=val;
  for(let j=index+1; j<=arr.length; j++){
    result[j] = arr[j-1];
  }
  return result;
};