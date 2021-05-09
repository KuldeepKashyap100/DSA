/**
 * one of the sequence must be susequence of the other one.
 * i.e one of them is smaller and the entire string must be subsequence of the other one.
 */
const sequencePatternMatching = (a, b) => {
    const lcs = findLcs(a, b, a.length, b.length);
    const checkIfLcsIsEqualToLengthOfSmallerString = lcs === Math.min(a.length, b.length) ? true : false;
    console.log(checkIfLcsIsEqualToLengthOfSmallerString);
}

const findLcs = (a, b, aLength, bLength) => {
    if(aLength === 0 || bLength === 0) return 0;

    if(a[aLength - 1] === b[bLength - 1])
        return 1 + findLcs(a, b, aLength - 1, bLength - 1);
    return Math.max(findLcs(a, b, aLength - 1, bLength), findLcs(a, b, aLength, bLength - 1));
}

let a = "AXY";
let b = "ADXCPY";
// a = "AXYz";
sequencePatternMatching(a, b);