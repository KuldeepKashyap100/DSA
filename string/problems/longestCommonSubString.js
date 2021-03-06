/**
 * longest common subsquence ->  does not care about the order it just find the character common in both strings.
 * longest common substring -> finds the max consequtive characters in both strings.
 * time -> O(n * m * l) where l is the length of the longest sub string.
 * space -> O(1)
 */
const longestCommonSubStringBruteForce = (a, b) => {
    let maxCount = 0, currentCount = 0;
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < b.length; j++) {
            currentCount = 0;
            let p = i, q = j;
            if(a[i] === b[j]) {
                currentCount++;
                while(a[p] === b[q]) {
                    p++;
                    q++;
                    currentCount++;
                }
            }
            if(maxCount < currentCount) {
                maxCount++;
            }
        }
    }
    console.log(maxCount);
}

/**
 * Using dynamic programming.
 * time -> O(mn) | space -> O(nm)
 */

const longestCommonSubStringDynamicProgramming = (a, b) => {
    const matchTable = Array.from({ length: a.length }, _ => new Array(b.length));
    let p = 0, max = 0;

    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < b.length; j++) {
            if(a[i] === b[j]) {
                if(i > 0 && j > 0)
                    matchTable[i][j] = matchTable[i - 1][j - 1] + 1;
                else
                    matchTable[i][j] = 1;

                // find the longest common string and its index;
                if(max < matchTable[i][j]) {
                    max = matchTable[i][j];
                    p = i;
                }
            }
            else {
                matchTable[i][j] = 0;
            }
        }
    }
    let matchedString = [];

    while(max > 0) {
        matchedString[max] = a[p];
        max--;
        p--;
    }

    console.log(matchedString.join(""));

}

/**
 * we can also use suffix tree approach.
 */

let a = "abcdefghijklmno";
let b = "abdsefg";
// a = "abcdaf";
// b = "zbcdf";
// longestCommonSubStringBruteForce(a, b);
longestCommonSubStringDynamicProgramming(a, b);