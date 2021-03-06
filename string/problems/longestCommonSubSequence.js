// time -> O(nm) | space -> O(m)
const longestCommonSubsequenceBruteForce = (a, b) => {
    let max = 0, currentCount = 0;
    const alreadyFound = new Array(b.length).fill(false);
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < b.length; j++) {
            if(a[i] === b[j] && !alreadyFound[j]) {
                alreadyFound[j] = true;
                currentCount++;
            }
            if(max < currentCount) {
                max = currentCount;
            }
        }
    }
    console.log(max);
}

// time -> O(nm) | space -> O(nm)
const longestCommonSubsequenceDynamicProg = (a, b) => {
    const matchTable = Array.from({ length: a.length + 1}, _ => new Array(b.length + 1).fill(0));
    for(let i = 1; i <= a.length; i++) {
        for(let j = 1; j <= b.length; j++) {
            if(a[i - 1] === b[j - 1]) {
                matchTable[i][j] = matchTable[i - 1][j - 1] + 1;
            }
            else {
                matchTable[i][j] = Math.max(matchTable[i -1][j], matchTable[i][j - 1]);
            }
        }
    }

    let matchedSequence = "";
    let i = a.length, j = b.length;
    let i = a.length, j = a.length, subSeq = "";
    while(i > 0 && j > 0) {
        if(a[i - 1] === b[j - 1]) {
            matchedSequence = a[i - 1] + matchedSequence;
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
    console.log(matchTable);
    console.log(matchedSequence);

}


let a = "abcdefghijklmno";
let b = "abdsefg";
a = "abcdaf";
b = "acbcf";
// longestCommonSubsequenceBruteForce(a, b);
longestCommonSubsequenceDynamicProg(a, b);