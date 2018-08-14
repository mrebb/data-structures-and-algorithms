'use strict';
module.exports = exports = {};
exports.repeatedWord= (str)=>{
  let arr=str.toLowerCase().split(' ');
  let wordsSet=[];
  let copyOfArray = arr;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<copyOfArray.length;j++){
      if(j!==i){
        if(arr[i].replace(',','').trim()===copyOfArray[j].replace(',','').trim()){
          let key = copyOfArray[j].replace(',','').trim();
          wordsSet.push({word:key,start:i,end:j});
        }
      }  
    }
  }
  var gapBetweenMatchedWords,raceConditionWordGap=0,result,wordFoundAtIndex = null;
  wordsSet.forEach((obj)=>{
    gapBetweenMatchedWords=obj.end-obj.start;
    if(raceConditionWordGap==0){
      raceConditionWordGap=gapBetweenMatchedWords;
      result = obj.word;
    }
    else if(raceConditionWordGap!==0 && gapBetweenMatchedWords<raceConditionWordGap && gapBetweenMatchedWords>0){
      raceConditionWordGap=Math.min(gapBetweenMatchedWords,raceConditionWordGap);
      var wordStartedIndex= obj.start;
      if(wordFoundAtIndex===null){
        wordFoundAtIndex = wordStartedIndex;
        result = obj.word;
      }
      else{
        if (wordStartedIndex>wordFoundAtIndex || wordStartedIndex===wordFoundAtIndex){
          result = obj.word;
        }
      }
    }   
  });
  return result || 'no repetition' ;
  
}