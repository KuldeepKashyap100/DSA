// time -> O(3^(m + n)) | space -> O(m + n)
const longestCommonSubstring = (a, b) => {
    const lcsLength = lcsRecursive(a, b, a.length, b.length, 0);
    // result is also a variable we have to consider beacuse we can get the same result multiple times for different lengths of strings. 
    const table = new Array(a.length + 1).fill().map(_ => new Array(b.length + 1).fill().map(_ => new Array(Math.max(a.length, b.length) + 1).fill(0)));
    lcsMemoized(a, b, a.length, b.length, 0, table);
    console.log(lcsLength, table);
    lcsBottomUp(a, b);
}

const lcsRecursive = (a, b, aLength, bLength, res) => {
    if(aLength === 0 || bLength === 0) return res;

    if(a[aLength - 1] === b[bLength - 1]) {
        res = lcsRecursive(a, b, aLength - 1, bLength - 1, res + 1);
    }

    const chooseSmallerA = lcsRecursive(a, b, aLength - 1, bLength, 0);
    const chooseSmallerB = lcsRecursive(a, b, aLength, bLength - 1, 0);

    return Math.max(res, chooseSmallerA, chooseSmallerB);
}

const lcsMemoized = (a, b, aLength, bLength, res, table) => {
    if(aLength === 0 || bLength === 0) return res;

    if(table[aLength][bLength][res]) return table[aLength][bLength][res];

    if(a[aLength - 1] === b[bLength - 1]) {
        table[aLength][bLength][res] = lcsMemoized(a, b, aLength - 1, bLength - 1, res + 1, table);
    }

    const chooseSmallerA = lcsMemoized(a, b, aLength - 1, bLength, 0, table);
    const chooseSmallerB = lcsMemoized(a, b, aLength, bLength - 1, 0, table);

    return table[aLength][bLength][res] = Math.max(table[aLength][bLength][res], chooseSmallerA, chooseSmallerB);
}

const lcsBottomUp = (a, b) => {
    const table = new Array(a.length + 1).fill().map(_ => new Array(b.length + 1).fill(0));
    let result = 0;
    for(let i = 1; i <= a.length; i++) {
        for(let j = 1; j <= b.length; j++) {
            if(a[i] === b[j]) {
                table[i][j] = 1 + table[i - 1][j - 1];
                result = Math.max(result, table[i][j]);
            }
            else {
                table[i][j] = 0;
            }
        }
    }
    console.log(result, table);

}

let a = "abcdefghijklmno";
let b = "abdsefg";
a = "abc";
b = "abzc";
longestCommonSubstring(a, b);