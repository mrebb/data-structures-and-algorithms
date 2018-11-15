const threeSum = function(nums) {
  let result = [];
  if (nums.length < 3) return result;
  nums = nums.sort((a, b) => a - b);
  for(let i=0; i<nums.length;i++){
    if(i == 0 || nums[i] > nums[i-1]){
      let start = i + 1;
      let end = nums.length - 1;
      while(start<end){
        if(nums[i]+nums[start]+nums[end]===0){
          result.push([nums[i],nums[start],nums[end]]);
        }
        if(nums[i]+nums[start]+nums[end]<0){
          let currentStart = start;
          while((nums[currentStart] == nums[start]) && start < end) start++;
        }
        else {
          let currentEnd = end;
          while((nums[currentEnd] == nums[end]) && start < end) end--;
        }
          
      }
    }
  }
     
  return result;
   
};