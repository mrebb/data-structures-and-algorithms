
function repeated_word_map(str){

  let arr = str.toLowerCase().split(' ');
  let map = new Map();
  for(let word of arr){
    let eachWord = word.replace(/[^a-zA-Z\d]/i,'');
    let mapWord = map.get(eachWord);
      
    map.get(eachWord)? map.set(eachWord,mapWord+1) : map.set(eachWord,1);
  }
  let max =['',0];
  for(let [key,val] of map){
    max = val>max[1]?[key,val]:max;
  }
  return max[0];
}

module.exports = repeated_word_map;