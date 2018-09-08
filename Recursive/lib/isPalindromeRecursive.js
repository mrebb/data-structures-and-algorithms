function isPalindromeRecursive(str){
  let slicedStr = str.toLowerCase().replace(/[^a-z0-9]/gi,'');
  let first = slicedStr.slice(0,1);
  let last = slicedStr.slice(slicedStr.length-1, slicedStr.length) ;
  if(first===last){
    if(slicedStr.length>1){
      return isPalindromeRecursive(slicedStr.slice(1,slicedStr.length-1))
    }
    else{
      return true;
    }
  }
  else{
    return false;
  }
}
    

    
module.exports = { isPalindromeRecursive };