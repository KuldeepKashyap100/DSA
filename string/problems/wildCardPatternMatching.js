/**
 * https://www.youtube.com/watch?v=3ZDZ-N0EPV0
 * time -> O(nm) | space -> O(nm)
 */
const wildCardPatternMatching = (text, pattern) => {
    // remove multiple consecutive *'s from pattern
    let isFirst = true, writeIndex = 0;
    for(let i = 0; i < pattern.length; i++) {
        if(pattern[i] === '*') {
            if(isFirst) {
                pattern[writeIndex++] = pattern[i];
                isFirst = false;
            }
        }
        else {
            pattern[writeIndex++] = pattern[i];
            isFirst = true;
        }
    }
    pattern = pattern.splice(0, writeIndex);

    const matchTable = Array.from({ length: text.length + 1}, _ => new Array(pattern.length + 1));

    // initailze lookup table to false
    for(let i = 0; i < matchTable.length; i++) {
        matchTable[0][i] = false;
    }

    // empty pattern can match with empty string
    matchTable[0][0] = true;

    // only if first character in pattern is *
    if(writeIndex > 0 && pattern[0] === '*') {
        matchTable[0][1] = true;
    }

    for(let i = 1; i <= text.length; i++) {
        for(let  j = 1; j <= pattern.length; j++) {
            // Two cases if we see a '*'
            // a) We ignore '*'' character and move
            //    to next  character in the pattern,
            //     i.e., '*' indicates an empty
            //     sequence.
            // b) '*' character matches with ith
            //     character in input
            if(pattern[j - 1] === "?" || text[i - 1] === pattern[j - 1]) {
                matchTable[i][j] = matchTable[i - 1][j - 1];
            }
            // Current characters are considered as
            // matching in two cases
            // (a) current character of pattern is '?'
            // (b) characters actually match
            else if(pattern[j - 1] === "*") {
                matchTable[i][j] = matchTable[i - 1][j] || matchTable[i][j - 1];
            }
            // If characters don't match
            else {
                matchTable[i][j] = false
            }
        }
    }
    console.log(matchTable[text.length][pattern.length]);
}

// time -> O(nm)
const recursiveAprroach = (text, pattern, textIndex, patternIndex) => {
    if(patternIndex === pattern.length - 1) return true;
    if(textIndex === text.length - 1) return false;

    if(pattern[patternIndex] === "?") 
        return recursiveAprroach(text, pattern, textIndex + 1, patternIndex + 1);
    if(pattern[patternIndex] === "*")
        return recursiveAprroach(text, pattern, textIndex + 1, patternIndex) || recursiveAprroach(text, pattern, textIndex, patternIndex + 1);
    if(text[textIndex] === pattern[patternIndex])
        return recursiveAprroach(text, pattern, textIndex + 1, patternIndex + 1);

    return false;
}

let text = "xaylmz";
let  pattern = "x?y*z";
// text = "baaabab";
// pattern = "*****ba*****ab";
// pattern = "baaa?ab";
// pattern = "ba*a?";
// pattern = "a*ab";

wildCardPatternMatching(text.split(""), pattern.split(""));
console.log(recursiveAprroach(text, pattern, 0, 0));