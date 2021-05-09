/**
 * delete the character from the string to make it palindromic.
 * 
 * number of deletions is inversely proportional to length of the palindromic substring.
 */

const minimiseDeletionsToMakePalindromic = (a) => {
    const reversedA = a.split("").reverse().join("");
    const longestPalindromicSubsequence = findLcs(a, reversedA, a.length, reversedA.length);
    const minimumNumberOfDeletions = a.length - longestPalindromicSubsequence;
    console.log(minimumNumberOfDeletions);
}

const findLcs = (a, b, aLength, bLength) => {
    if(aLength === 0 || bLength === 0) return 0;

    if(a[aLength - 1] === b[bLength - 1])
        return 1 + findLcs(a, b, aLength - 1, bLength - 1);
    return Math.max(findLcs(a, b, aLength - 1, bLength), findLcs(a, b, aLength, bLength - 1));
}

const str = "AGBCBA";
minimiseDeletionsToMakePalindromic(str);