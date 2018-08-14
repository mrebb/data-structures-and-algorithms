'use strict';
export default function repeatedWord(str){
  let arr=str.toLowerCase().split(' ');
  let temp = arr;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<temp.length;j++){
      if(j!==i){
        if(arr[i]===temp[j]){
          return arr[i].replace(',','');
        }
      }  
    }
  }
  return 'no repetition';
}