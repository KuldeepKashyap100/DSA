// time -> O(2^n)
const longestCommonSubsequence = (a, b) => {
    const lcsLength = longestCommonSubsequenceRecursive(a, b, a.length, b.length);
    const table = new Array(a.length + 1).fill().map(_ => new Array(b.length + 1).fill(0));
    longestCommonSubsequenceMemoized(a, b, a.length, b.length, table);
    console.log(lcsLength, table);
    lcsBottomUp(a, b);
}

const longestCommonSubsequenceRecursive = (a, b, aLength, bLength) => {
    if(aLength === 0 || bLength === 0) return 0;

    if(a[aLength - 1] === b[bLength - 1]) {
        return 1 + longestCommonSubsequenceRecursive(a, b, aLength - 1, bLength - 1);
    }
    
    const chooseSmallerA = longestCommonSubsequenceRecursive(a, b, aLength - 1, bLength);
    const chooseSmallerB = longestCommonSubsequenceRecursive(a, b, aLength, bLength - 1);

    return Math.max(chooseSmallerA, chooseSmallerB);
}

const longestCommonSubsequenceMemoized = (a, b, aLength, bLength, table) => {
    if(aLength === 0 || bLength === 0) return 0;

    if(table[aLength][bLength]) return table[aLength][bLength];

    if(a[aLength - 1] === b[bLength - 1]) {
        return table[aLength][bLength] = 1 + longestCommonSubsequenceMemoized(a, b, aLength - 1, bLength - 1, table);
    }

    const chooseSmallerA = longestCommonSubsequenceMemoized(a, b, aLength - 1, bLength, table);
    const chooseSmallerB = longestCommonSubsequenceMemoized(a, b, aLength, bLength - 1, table);

    return table[aLength][bLength] = Math.max(chooseSmallerA, chooseSmallerB);
}

const lcsBottomUp = (a, b) => {
    const table = new Array(a.length + 1).fill().map(_ => new Array(b.length + 1).fill(0));

    for(let i = 1; i <= a.length; i++) {
        for(let j = 1; j <= b.length; j++) {
            if(a[i - 1] === b[j - 1]) {
                table[i][j] = 1 + table[i - 1][j - 1];
            }
            else {
                table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
            }
        }
    }

    let i = a.length, j = a.length, subSeq = "";
    while(i > 0 && j > 0) {
        if(a[i - 1] === b[j - 1]) {
            subSeq = a[i - 1] + subSeq;
            i--;
            j--;
        }
        else {
            if(table[i - 1][j] > table[i][j - 1]) {
                i--;
            }
            else {
                j--;
            }
        }
    }
    console.log(table, subSeq);
}

let a = "abcdefghijklmno";
let b = "abdsefg";
a = "abcdaf";
b = "acbcf";
longestCommonSubsequence(a, b);