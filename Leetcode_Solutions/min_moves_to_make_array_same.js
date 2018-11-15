const minMoves = nums => {
  let smallest = Math.min(...nums); 
  return nums.reduce((acc, v) => (acc + (v - smallest)), 0);
};

minMoves([3,4,6,6,3]);