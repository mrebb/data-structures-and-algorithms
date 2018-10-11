/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 * @param {string} s 
 */
var longestPalindrome = function(s) {
  // all characters are palendromes
  if (s.length <= 1) {
    return s;
  }
    
  let dp = [];
  let maxi = 0;
  let maxj = 0;

  for (let i = 0; i < s.length; i += 1) {
    // every individual character is a palendrome
    dp[i] = [true];
    // avoid accessing -1
    if (i >= 1) {
      // store isPalendrome status
      dp[i][1] = (s[i] == s[i-1]);
      if (dp[i][1] && maxj < 1) {
        maxi = i;
        maxj = 1;
      }
    }
    // iterate 
    for (let j = 2; j <= i; j += 1) {
      // const isP = s[i] == s[i-j];
      // const wasP = dp[i-1][j-2];
      dp[i][j] = s[i] == s[i-j] && dp[i-1][j-2];
      if (dp[i][j] && maxj < j) {
        maxi = i;
        maxj = j;
      }
    }
  }
  return s.substr(maxi - maxj, maxj + 1);
};