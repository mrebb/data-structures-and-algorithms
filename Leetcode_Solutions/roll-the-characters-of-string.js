
//Roll the characters of string
const caesarShift = function(str, arr) {
  let word = str;
  for(let item of arr){
    // Wrap the amount
    let val = item.split('');
    let start = val[0];
    let end = val[1];
    let direction = val[2];
    
    // Make an output letiable
    if(end>str.length-1){
      throw new Error('invalid index');
    }
    // Go through each character
    for (let i = start; i <= end; i ++) {

      // Get the character we'll be appending
      let c = str[i];

      // If it's a letter...
      if (c.match(/[a-z]/i)) {

        // Get its code
        let code = word.charCodeAt(i);
        console.log('code', c);
        // Uppercase letters
        // if ((code >= 65) && (code <= 90))
        // 	c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

        // Lowercase letters
        if ((code >= 97) && (code <= 122)){
          // console.log(code )
          if(direction==='R'){
            c = String.fromCharCode(((code - 97 + 1) % 26) + 97);
          }
          else{
            c = String.fromCharCode(((code - 122 - 1) % 26) + 122);
          }
          // c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }

      }
      // Append
      word = replacer(word,c,i);
    }
  }
  // All done!
  return word;

};
//Return the new string by replacing with new character in place of old character 
function replacer(s,val,pos){
  var out = '';

  for(var i = 0;i < s.length; i++){
    if(i==pos){
      out += val;
    } else {
      out += s[i];
    }
  }
  return out;
}
caesarShift('test',['04R']);

