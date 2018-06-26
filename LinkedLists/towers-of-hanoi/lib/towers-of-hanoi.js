
/** 
 * Step 1 − Move n-1 disks from source to aux
 * Step 2 − Move nth disk from source to dest
 * Step 3 − Move n-1 disks from aux to dest
*/

let arr =[];
function towersOfHanoi(n,source,destination,aux){
  if(n===1){
    arr.push(`Disk ${n} moved from ${source} to ${destination}`);
  }
  else{
    towersOfHanoi(n-1,source,aux,destination);
    arr.push(`Disk ${n} moved from ${source} to ${destination}`);
    towersOfHanoi(n-1,aux,destination,source);
  }
  return arr;
}

module.exports = towersOfHanoi;