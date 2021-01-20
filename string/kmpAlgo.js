// https://www.youtube.com/watch?v=GTJr8OvyEVQ
// https://www.youtube.com/watch?v=KG44VoDtsAA&t=2s
//https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
// time -> O(n + m) | space -> O(m)

// We are trying to find the longest suffix which is also prefix.
const generatePrefixTable = (pattern) => {
    // it stores the longest length of suffix which is also a prefix.
    const prefixTable = new Array(pattern.length);
    let j = 0; i = 1;
    prefixTable[0] = 0;
    while(i < pattern.length) {
        if(pattern[i] === pattern[j]) {
            prefixTable[i] = j + 1;
            j++;
            i++;
        }
        else if(j > 0) {
            j = prefixTable[j - 1];   
        }
        else {
            prefixTable[i] = 0;
            i++;
        }
    }
    // console.log(prefixTable);
    return prefixTable;
}


// generatePrefixTable("abcdabca");
// generatePrefixTable("aabaabaaa");

const kmpAlgo = (text, pattern) => {
    const prefixTable = generatePrefixTable(pattern);
    let i = 0, j = 0;
    while(i < text.length) {
        if(text[i] === pattern[j]) {
            if(j === pattern.length - 1) {
                console.log("found");
                return;
            }
            i++;
            j++;
        }
        else if(j > 0) {
            j = prefixTable[j - 1];
        }
        else {
            i++;
        }
    }   
    console.log("not found");
}

const text = "abxabcabcaby";
const pattern = "abcaby";
kmpAlgo(text, pattern);