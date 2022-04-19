// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  let arr = [];
  let result = 0;
  let x = 0;
    
  while(x < s.length) {
    if(!arr.includes(s[x])) {
      arr.push(s[x]);
      result = Math.max(result, arr.length);
      x++;
    } else {
      arr.shift();
    }
  }
  return result;
};