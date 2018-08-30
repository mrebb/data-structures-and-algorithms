function hasUniqueChars(str){
  str = str.toLowerCase().replace(/[^a-zA-Z\d]/gm,'');
  console.log(str);
  let map = new Map();
  for(let i=0; i<str.length;i++){
    if(map.get(str[i])){
      return false;
    }
    else{
      map.set(str[i],1);
    }
  }
    
  return true;
}
module.exports = hasUniqueChars;