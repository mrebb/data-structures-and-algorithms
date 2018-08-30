'use strict';

//using object
function repeated_word(str){

  let arr = str.toLowerCase().split(' ');
  let obj = {};
  for(let val of arr){
    let eachWord = val.replace(/[^a-zA-Z\d]/i,'');
    if(obj[eachWord]){
      return eachWord;
    }
    else{
      obj[eachWord]=1;
    }
  }
  return 'no repetition';
}

//using map
function repeated_word_map(str){

  let arr = str.toLowerCase().split(' ');
  let obj = new Map();
  for(let val of arr){
    let eachWord = val.replace(/[^a-zA-Z\d]/i,'');
    if(obj.get(eachWord)){
      return eachWord;
    }
    else{
      obj.set(eachWord,1);
    }
  }
}
module.exports = {repeated_word,repeated_word_map};