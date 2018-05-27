'use strict';
module.exports = exports = {};
exports.largestProduct= (arr) => {
  let largestProduct=0,topLeftProduct,topProduct,topRightProduct,leftProduct,rightProduct,bottomLeftProduct,bottomProduct,bottomRightProduct;

  for(let i=0; i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      if(typeof arr[i][j] === 'string' && arr[i][j]!= ''){
        return 'wrong input';
      }
      if(i-1 != -1 && j-1!== -1){
        topLeftProduct = arr[i-1][j-1] * arr[i][j];
        topProduct = arr[i-1][j] * arr[i][j];
        leftProduct = arr[i][j-1] * arr[i][j];
        largestProduct = Math.max(topLeftProduct,topProduct,leftProduct,largestProduct);
      }
      if(i+1 <arr.length && j+1 <arr[i].length){
        rightProduct = arr[i][j+1] * arr[i][j];
        bottomProduct = arr[i+1][j] * arr[i][j];
        bottomRightProduct = arr[i+1][j+1] * arr[i][j];
        largestProduct = Math.max(rightProduct,bottomProduct,bottomRightProduct,largestProduct);
      }
      if(i-1 != -1 && j-1!== -1 && i+1 <arr.length && j+1 <arr[i].length){
        topRightProduct = arr[i-1][j+1] * arr[i][j];
        bottomLeftProduct = arr[i+1][j-1] * arr[i][j]; 
        largestProduct = Math.max(topRightProduct,bottomLeftProduct,largestProduct);
      }
      if(j===arr[i].length-1 && i+1 <arr.length){
        leftProduct = arr[i][j-1] * arr[i][j];
        bottomLeftProduct = arr[i+1][j-1] * arr[i][j]; 
        bottomProduct = arr[i+1][j] * arr[i][j];
        largestProduct = Math.max(leftProduct,bottomLeftProduct,bottomProduct,largestProduct);
      }
    }
  }
  return largestProduct;

};
