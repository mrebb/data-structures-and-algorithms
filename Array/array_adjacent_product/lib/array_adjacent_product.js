'use strict';
module.exports = exports = {};
exports.largestProduct= (arr) => {
  let largestProduct=0,topLeftProduct,topProduct,topRightProduct,leftProduct,rightProduct,bottomLeftProduct,bottomProduct,bottomRightProduct;

  for(let i=0; i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      let currentValue = arr[i][j];
      if(typeof currentValue === 'string' && currentValue!= ''){
        return 'wrong input';
      }
      if(i-1 != -1 && j-1!== -1){
        topLeftProduct = arr[i-1][j-1] * currentValue;
        topProduct = arr[i-1][j] * currentValue;
        leftProduct = arr[i][j-1] * currentValue;
        largestProduct = Math.max(topLeftProduct,topProduct,leftProduct,largestProduct);
      }
      if(i+1 <arr.length && j+1 <arr[i].length){
        rightProduct = arr[i][j+1] * currentValue;
        bottomProduct = arr[i+1][j] * currentValue;
        bottomRightProduct = arr[i+1][j+1] * currentValue;
        largestProduct = Math.max(rightProduct,bottomProduct,bottomRightProduct,largestProduct);
      }
      if(i-1 != -1 && j-1!== -1 && i+1 <arr.length && j+1 <arr[i].length){
        topRightProduct = arr[i-1][j+1] * currentValue;
        bottomLeftProduct = arr[i+1][j-1] * currentValue; 
        largestProduct = Math.max(topRightProduct,bottomLeftProduct,largestProduct);
      }
      if(j===arr[i].length-1 && i+1 <arr.length){
        leftProduct = arr[i][j-1] * currentValue;
        bottomLeftProduct = arr[i+1][j-1] * currentValue; 
        bottomProduct = arr[i+1][j] * currentValue;
        largestProduct = Math.max(leftProduct,bottomLeftProduct,bottomProduct,largestProduct);
      }
    }
  }
  return largestProduct;

};
