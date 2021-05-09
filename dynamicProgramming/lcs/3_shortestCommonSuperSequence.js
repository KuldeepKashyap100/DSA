/**
 * Given two strings str1 and str2, 
 * the task is to find the length of the shortest string that has 
 * both str1 and str2 as subsequences.
 */

const shortestCommonSuperSequence = (a, b) => {
    const superSeqLength = shortestCommonSuperSequenceRecursive(a, b, a.length, b.length);
    console.log(superSeqLength);

    const table = new Array(a.length + 1).fill().map(_ => new Array(b.length + 1).fill(0));
    shortestCommonSuperSequenceMemoized(a, b, a.length, b.length, table)
    console.log(table);
    
    const scs = printShortestCommonSequence(a, b);
    console.log(scs, scs.length);
}

const printShortestCommonSequence = (a, b) => {
    const table = findLcs(a, b);

    let scs = "";
    let i = a.length, j = b.length;
    while(i > 0 && j > 0) {
        if(a[i - 1] === b[j - 1]) {
            scs += a[i -1];
            i--; j--;
        }
        else {
            if(table[i - 1][j] > table[i][j - 1]) {
                scs += a[i - 1];
                i--;
            }
            else {
                scs += b[j - 1];
                j--;
            }
        }
    }

    // if either of them still have characters we have to append them too
    while(i > 0) {
        scs += a[i - 1];
        i--;
    }
    while(j > 0) {
        scs += b[j - 1];
        j--;
    }
    return scs.split("").reverse().join("");
}

const findLcs = (a, b) => {
    const table = new Array(a.length + 1).fill().map(_ => new Array(b.length + 1).fill(0));

    for(let i = 1; i <= a.length; i++) {
        for(let j = 1; j <= b.length; j++) {
            if(a[i -1] === b[j - 1]) {
                table[i][j] = 1 + table[i - 1][j - 1];
            }
            else {
                table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
            }
        }
    }
    return table;
}

// only to get the length of the super sequence
const shortestCommonSuperSequenceRecursive = (a, b, aLength, bLength) => {
    if(aLength === 0) return bLength;
    if(bLength === 0) return aLength;


    if(a[aLength - 1] === b[bLength - 1]) {
        const selectedOneOfthem = 1;
        const removeThatCharacterFromBothOfThem = shortestCommonSuperSequenceRecursive(a, b, aLength - 1, bLength - 1);
        return selectedOneOfthem + removeThatCharacterFromBothOfThem;
    }

    const selectedOneOfMisMatched = 1;
    const findTheMinFromRemainingStrings =  Math.min(shortestCommonSuperSequenceRecursive(a, b, aLength, bLength - 1), shortestCommonSuperSequenceRecursive(a, b, aLength - 1, bLength));

    return selectedOneOfMisMatched + findTheMinFromRemainingStrings;

}
const shortestCommonSuperSequenceMemoized = (a, b, aLength, bLength, table) => {
    if(aLength === 0) return bLength;
    if(bLength === 0) return aLength;

    if(table[aLength][bLength]) return table[aLength][bLength];

    if(a[aLength - 1] === b[bLength - 1]) {
        return table[aLength][bLength] = 1 + shortestCommonSuperSequenceMemoized(a, b, aLength - 1, bLength - 1, table);
    }

    return table[aLength][bLength] = 1 + Math.min(shortestCommonSuperSequenceMemoized(a, b, aLength, bLength - 1, table), shortestCommonSuperSequenceMemoized(a, b, aLength - 1, bLength, table));
}

let a = "AGGTAB";
let b = "GXTXAYB";
// a = "dba";
// b = "ca";

shortestCommonSuperSequence(a, b);