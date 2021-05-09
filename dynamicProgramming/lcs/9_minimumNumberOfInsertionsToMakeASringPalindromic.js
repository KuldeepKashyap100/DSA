/**
 * Minimum number of insertions required to make a string palindromic.
 * 
 * number of deletions is inversely proportional to length of the palindromic substring.
 * 
 * basically if we are not deleting we can still make that string palindromic by inserting
 * charaters on both end.
 * 
 * ex - a e bcb d a
 * we can either delete e and d to make it palindromic or
 * we can inset new e and d to make it palindromic
 * a ed bcb de a
 */

const minimiseInsertions = (a) => {
    const reverseA = a.split("").reverse().join("");
    const longestPalindromicSubsequence = findLcs(a, reverseA, a.length, reverseA.length);
    const minimumNuberOfInsertions = a.length - longestPalindromicSubsequence;
    console.log(minimumNuberOfInsertions);
}

const findLcs = (a, b, aLength, bLength) => {
    if(aLength === 0 || bLength === 0) return 0;

    if(a[aLength - 1] === b[bLength - 1])
        return 1 + findLcs(a, b, aLength - 1, bLength - 1);
    return Math.max(findLcs(a, b, aLength - 1, bLength), findLcs(a, b, aLength, bLength - 1));
}

const a = "arbcbda";
minimiseInsertions(a);