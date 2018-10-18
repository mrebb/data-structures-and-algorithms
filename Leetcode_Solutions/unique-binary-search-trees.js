/**
 * Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
  if (n === 1) {
    return 1; 
  }
  //when n = 0 or 1 there is only oneway tree can be built
  let memo = [1,1]; // size of bst trees for each number acting as root 

  //Start from second node
  for (let nodePosition = 2; nodePosition<= n; nodePosition++){
    let result = 0;
    // Iterate from first node in the list to the current node position
    //ex: For (2,3) left & right can have 0,2 or 1, 1 or 2, 0 
    // memo = [1,1,2] after nodePosition = 2 iteration done
    // 2 + 1 + 2
    // [1,1,2, 5]
    for (let j = 1; j <= nodePosition; j++){
      let numLeft = j-1; // number of nodes to the left 
      let numRight = nodePosition - j; // number of stuff to the right 
      result = result + (memo[numLeft] * memo[numRight]);
    }
    memo[nodePosition] = result;
  }
  return memo[n];
};