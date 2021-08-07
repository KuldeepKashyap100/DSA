// time -> O(nm) but if hashing function takes constant time then -> o(n) [complexity totally depends upon hashing function]
// space -> O(1)
const robinKarp = (text, pattern) => {
    const textHash = calculateHash(text, 0, pattern.length - 1);
    const patternHash = calculateHash(pattern, 0, pattern.length - 1);
    if(textHash === patternHash) {
        console.log("found");
        return;
    }

    let newHash = textHash;
    for(let i = 1; i <= text.length - pattern.length; i++) {
        newHash = reCalculateHash(text, i - 1, i + pattern.length - 1, newHash,pattern.length);
        if(patternHash === newHash) {
            let j = 0;
            while(j < pattern.length && text[i + j] === pattern[j])
            j++;
            if(pattern.length === j) {
                console.log("found");
                return;
            }
        }
    }
    console.log("not found");
}

const calculateHash = (input, start, end) => {
    let hash = 0;
    for(let i = start; i <= end; i++) {
        hash *= 10;
        hash += input.charCodeAt(i);
        // hash += map[input[i]];
    }
    return hash;
}

const reCalculateHash = (input, oldStart, newEnd, currentHash, patternLength) => {
    const removedOldChar = (currentHash - (Math.pow(10, patternLength - 1) * input.charCodeAt(oldStart)))
    const newHash = (currentHash - (Math.pow(10, patternLength - 1) * input.charCodeAt(oldStart))) * 10 + input.charCodeAt(newEnd);
    // const newHash = (currentHash - (Math.pow(10, patternLength - 1) * map[input[oldStart]])) * 10 + map[input[newEnd]];
    return newHash;
}

// const map = {
//     a: 1,
//     b: 2,
//     c: 3
// }

const text = "acabdc";
const pattern = "aca";

robinKarp(text, pattern);