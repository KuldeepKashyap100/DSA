/**
 * Given a sequence, find the length of the longest palindromic subsequence in it.
 * As another example, if the given sequence is “BBABCBCAB”, 
 * then the output should be 7 as “BABCBAB” is the longest palindromic subsequence in it. 
 * “BBBBB” and “BBCBB” are also palindromic subsequences of the given sequence, 
 * but not the longest ones.
 * 
 */

const longestPalindromicSequence = (str) => {
    const reversedStr = str.split("").reverse().join("");
    const lps = findLcs(str, reversedStr, str.length, reversedStr.length);
    console.log(lps);
    minimumNumberOfDeletionRequiredToMakeAStringLps(str, lps);
}

const minimumNumberOfDeletionRequiredToMakeAStringLps = (str, lpsLength) => {
    // length of Lps is inverserly proportional to number of deletions
    console.log("Deletion required: ", str.length - lpsLength);
}

const findLcs = (a, b, aLength, bLength) => {
    if(aLength === 0 || bLength === 0) return 0;

    if(a[aLength - 1] === b[bLength - 1])
        return 1 + findLcs(a, b, aLength - 1, bLength - 1);
    return Math.max(findLcs(a, b, aLength, bLength - 1), findLcs(a, b, aLength - 1, bLength));
};

const str = "BBABCBCAB";
longestPalindromicSequence(str);