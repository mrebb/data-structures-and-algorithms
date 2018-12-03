/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function(logs) {
  let obj={digitLog:[],letterLog:[]};
  let arr =[];
  for(let val of logs){
    let splitWord = val.split(' ');
    if(/\d/gm.test(splitWord[1])){
      obj['digitLog'].push(val);
    }
    else{
      splitWord.push(splitWord.shift());
      arr.push(splitWord);
    }
  }
  arr.sort();
    
  arr.forEach(val=>{
    val.splice(0,0,val.pop());
    obj['letterLog'].push(val.join(' '));
  });

  return [...obj['letterLog'],...obj['digitLog']];
};
