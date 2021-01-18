const robinKarp = (text, pattern) => {
    const textHash = calculateHash(text, 0, pattern.length - 1);
    const patternHash = calculateHash(pattern, 0, pattern.length - 1);
    if(textHash === patternHash) {
        console.log("found");
        return;
    }

    let newHash = textHash;
    for(let i = 1; i <= text.length - pattern.length; i++) {
        if(patternHash === newHash) {
            let j = i - (pattern.length - 1);
            while(j < pattern.length && text[i + j] === pattern[j])
            j++;
            if(pattern.length === j) {
                console.log("found");
                return;
            }
        }
        newHash = reCalculateHash(text, i - 1, i + pattern.length - 1, newHash,pattern.length);
    }
    console.log("not found");
}

const calculateHash = (input, start, end) => {
    let hash = 0;
    for(let i = start; i <= end; i++) {
        hash *= 10;
        // hash += input.charCodeAt(i);
        hash += map[input[i]];
    }
    return hash;
}

const reCalculateHash = (input, start, newEnd, currentHash, patternLength) => {
    // const newHash = (currentHash - (Math.pow(10, patternLength - 1) * input.charCodeAt(start))) * 10 + input.charCodeAt(newEnd);
    const newHash = (currentHash - (Math.pow(10, patternLength - 1) * map[input[start]])) * 10 + map[input[newEnd]];
    return newHash;
}

const map = {
    a: 1,
    b: 2,
    c: 3
}

const text = "abcaabbab";
const pattern = "bb";

robinKarp(text, pattern);