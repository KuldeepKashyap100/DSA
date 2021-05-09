/**
 * Quest. find that subsequence must be present 2 times. and should be longest.
 * 
 * Ans.
 * Given a string, find the length of the longest 
 * repeating subsequence such that the two subsequences 
 * don’t have same string character at the same position, 
 * i.e., any i’th character in the two subsequences shouldn’t 
 * have the same index in the original string.
 * 
 * This problem is just the modification of Longest Common Subsequence problem. 
 * The idea is to find the LCS(str, str) where str is the input string with the 
 * restriction that when both the characters are same, 
 * they shouldn’t be on the same index in the two strings. 
 */

const longestRepeatingSubsequence = (a) => {
    const lrs = longestRepeatingSubsequenceUtil(a, a, a.length, a.length);
    console.log(lrs);
}

const longestRepeatingSubsequenceUtil = (a, b, aLength, bLength) => {
    if(aLength === 0 || bLength === 0) return 0;

    if(a[aLength - 1] === b[bLength - 1] && aLength !== bLength)
        return 1 + longestRepeatingSubsequenceUtil(a, b, aLength - 1, bLength - 1);
    return Math.max(longestRepeatingSubsequenceUtil(a, b, aLength -1, bLength), longestRepeatingSubsequenceUtil(a, b, aLength, bLength - 1));
}

let a = "AABEBCDD";
longestRepeatingSubsequence(a);