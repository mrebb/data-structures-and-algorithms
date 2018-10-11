/**All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]

 * @param {string} s
 * @return {string[]}
 */
function findRepeatedDnaSequences(str){
  let hash,obj={},result =[];
  for(let i=0;i+10<=str.length;i++){
    let word = str.slice(i,10+i);
    hash = sumHash(word)
    if(!obj[hash]){
      obj[hash]=word;
    }
    else{
      if(!result.includes(word)) result.push(word);
    }
  }
  return result;
}
    
function sumHash(str) {
  let obj = {A:1,C:2,G:3,T:4}
  return str.split('').reduce((a,b,index)=>a + obj[b]*Math.pow(4,(10-index)),0);
}
    