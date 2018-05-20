'use strict';
module.exports = exports = {};
exports.binarySearch= (arr,searchValue)=>{
  let minIndex = 0, maxIndex = arr.length-1, currIndex, currElement;
  while(minIndex<=maxIndex){
    currIndex = Math.round((minIndex + maxIndex)/2);
    currElement = arr[currIndex];
    if(currElement<searchValue){
      minIndex = currIndex + 1;
    }
    else if(currElement>searchValue){
      maxIndex=currIndex-1;
    }
    else{
      return currIndex;
    }
  }
  return -1;
};