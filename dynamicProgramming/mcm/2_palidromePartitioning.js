/**
 * Given a string, Find the minimum number of partitions required to
 * such that every partition is palindrome.
 * 
 * For example, “aba|b|bbabb|a|b|aba” is a palindrome partitioning of “ababbbabbababa”. 
 * Determine the fewest cuts needed for a palindrome partitioning of a given string. 
 * For example, minimum of 3 cuts are needed for “ababbbabbababa”. The three cuts are “a|babbbab|b|ababa”. 
 * 
 * If a string is a palindrome, then minimum 0 cuts are needed. 
 * If a string of length n containing all different characters, 
 * then minimum n-1 cuts are needed. 
 */


const palindromePartitioning = (str) => {
    const minCuts = palindromePartitioningRecursive(str, 0, str.length - 1);
    console.log(minCuts);
    const table = new Array(str.length).fill().map(_ => new Array(str.length).fill(-1));
    palindromePartitioningMemoized(str, 0, str.length - 1, table);
    console.log(table);
}

const palindromePartitioningRecursive = (str, startIdx, endIdx) => {
    // if string length is one then zero partition required
    if(startIdx >= endIdx) return 0;

    // if string is already a palindrome then zero partition required
    if(checkPalindrome(str, startIdx, endIdx)) return 0;

    let minCuts = Infinity;
    for(let k = startIdx; k < endIdx; k++) {
        const cutsInLeftPartiton = palindromePartitioningRecursive(str, startIdx, k);
        const cutsInRightPartiton = palindromePartitioningRecursive(str, k + 1, endIdx);

        // adding one current cut ie from startIdx to k and k + 1 to endIdx
        const currentCuts = cutsInLeftPartiton + cutsInRightPartiton + 1; 
        minCuts = Math.min(currentCuts, minCuts);
    }
    return minCuts;
}

const checkPalindrome = (str, startIdx, endIdx) => {
    while(startIdx < endIdx) {
        if(str[startIdx] !== str[endIdx]) return false;
        startIdx++;
        endIdx--
    }
    return true;
}

const palindromePartitioningMemoized = (str, startIdx, endIdx, table) => {
    if(startIdx >= endIdx) return 0;
    if(checkPalindrome(str, startIdx, endIdx)) return 0;

    if(table[startIdx][endIdx] !== -1) return table[startIdx][endIdx];
    let minCuts = Infinity;
    for(let k = startIdx; k < endIdx; k++) {
        const cutsInLeftPartiton = palindromePartitioningMemoized(str, startIdx, k, table);
        const cutsInRightPartiton = palindromePartitioningMemoized(str, k + 1, endIdx, table);

        // optimisation
        // const cutsInLeftPartiton = table[startIdx][k] !== -1 ? table[startIdx][k] : palindromePartitioningMemoized(str, startIdx, k, table);
        // const cutsInRightPartiton = table[k + 1][endIdx] !== -1 ? table[k + 1][endIdx] : palindromePartitioningMemoized(str, k + 1, endIdx, table);

        const currentCuts = cutsInLeftPartiton + cutsInRightPartiton + 1;
        minCuts = Math.min(minCuts, currentCuts);
    }
    return table[startIdx][endIdx] = minCuts;
}


// not working need to modify it
const palindromePartitioningBottomUp = (str) => {
    const table = new Array(str.length).fill().map(_ => Array(str.length).fill(-1));
    
    // when the str length is one number of partitions required is 0
    for(let i = 0; i < str.length; i++) table[i][i] = 0;

    for(let palindromeLength = 2; palindromeLength < str.length; palindromeLength++) {
        for(let startIdx = 0; startIdx < str.length - palindromeLength + 1; startIdx++) {
            const endIdx = startIdx + (palindromeLength - 1);

            table[startIdx][endIdx] = Infinity;
            for(let k = startIdx; k < endIdx; k++) {
                const leftPartition = checkPalindrome(str, startIdx, k) ? 0: table[startIdx][k];
                const rightPartition = checkPalindrome(str, k+1, endIdx) ? 0: table[k+ 1][endIdx];

                const cost = leftPartition + rightPartition+ 1;
                table[startIdx][endIdx] = Math.min(table[startIdx][endIdx], cost);
            }
        }
    }
    console.log(table);
}

let str = "nitin";
str = "ababbbabbababa";
str = "geek";
// str = "aaaa";
// str = "abcde";
// str = "abbac";
// palindromePartitioning(str);
palindromePartitioningBottomUp(str);