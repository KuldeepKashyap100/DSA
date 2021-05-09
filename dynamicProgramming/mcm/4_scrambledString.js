/**
 * https://www.youtube.com/watch?v=SqA0o-DGmEw&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=41
 * Given two strings S1 and S2 of equal length, the task is to determine 
 * if S2 is a scrambled form of S1.
 * Scrambled string: 
 * Given string str, we can represent it as a binary tree by 
 * partitioning it to two non-empty substringings recursively.
 * Note: Srambled string is not same as an Anagram
 */

const checkScrambledString = (a, b) => {
    // Strings of non-equal length cant' be scramble strings
    if(a.length !== b.length) return false;

    // Empty strings are scramble strings
    if(a.length === 0) return true;

    // Equal strings are scramble strings
    if(a === b) return true;

    const n = a.length;
    for(let k = 1; k < n; k++) {
        // Check if S2[0...i] is a scrambled
        // string of S1[0...i] and if S2[i+1...n]
        // is a scrambled string of S1[i+1...n]
        const notSwapped = checkScrambledString(a.substring(0, k), b.substring(0, k)) && 
                           checkScrambledString(a.substring(k, n), b.substring(k, n));

        // Check if S2[0...i] is a scrambled
        // string of S1[n-i...n] and S2[i+1...n]
        // is a scramble string of S1[0...n-i-1]
        const swapped = checkScrambledString(a.substring(0, k), b.substring(n- k, n));
                    && checkScrambledString(a.substring(n - k, n), b.substring(0, k))
        
        if(swapped || notSwapped) {
            return true
        }
    }
    return false;
}

let a = "coder", b = "ocder";
// a = "abcde", b = "caebd";
const result = checkScrambledString(a, b);
console.log(result);