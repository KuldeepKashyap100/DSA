// time -> O(n) | space -> O(n + m)
const getWindow = (str, pattern) => {
    const hashStr = new Array(256).fill(0);
    const hashPtr = new Array(256).fill(0);

    // Store occurrences of characters of pattern
    for(let i = 0; i < pattern.length; i++) {
        hashPtr[pattern.charCodeAt(i)]++;
    }

    let count = 0, minimumWindowLength = Infinity, minStart, minEnd, start = 0;;
    for(let i = 0; i < str.length; i++) {
        if(!hashPtr[str.charCodeAt(i)]) continue;

        // Count occurrence of characters of string
        hashStr[str.charCodeAt(i)]++;

        // If string's char matches with pattern's char then increment count
        if(hashPtr[str.charCodeAt(i)] >= hashStr[str.charCodeAt(i)]) count++;
        // If all the characters are matched
        if(count === pattern.length) {
            // Try to minimize the window
            // i.e if character is not part of the pattern -->hashPtr[str.charCodeAt(start)] === 0 
            // or for a paritcular character, current window has more than required number of characters
            while(hashPtr[str.charCodeAt(start)] === 0 || hashStr[str.charCodeAt(start)] > hashPtr[str.charCodeAt(start)]) {
                if(hashStr[str.charCodeAt(start)] > hashPtr[str.charCodeAt(start)]) 
                    hashStr[str.charCodeAt(start)]--;
                start++;
            }
            // update window size
            let windowSize = i - start + 1;
            if(minimumWindowLength > windowSize) {
                minimumWindowLength = windowSize;
                minStart = start;
                minEnd = i;
            } 
        }
    }
    console.log(str.slice(minStart, minEnd + 1), minStart, minEnd);
}

// same approach but more optimized code
const getWindow = (str, pattern) => {
    const strHash = {}, patternHash = {};
    for(let i = 0; i < pattern.length; i++) {
        patternHash[pattern[i]] ? patternHash[pattern[i]]++ : patternHash[pattern[i]] = 1;
    }

    let count = 0, start = 0, minWindow = Infinity, minStart;
    for(let i = 0; i < str.length; i++) {
        if(!patternHash[str[i]]) continue;
        strHash[str[i]] ? strHash[str[i]]++ : strHash[str[i]] = 1;
        if(patternHash[str[i]] >= strHash[str[i]]) count++;
        if(count === pattern.length) {
            while(!patternHash[str[start]] || strHash[str[start]] > patternHash[str[start]]) {
                if(strHash[str[start]] > patternHash[str[start]]) {
                    strHash[str[start]]--;
                }
                start++;
            }
            let currentWindow = i - start + 1;
            if(minWindow > currentWindow) {
                minWindow = currentWindow;
                minStart = start;
            }
        }
        
    }
    console.log(strHash, minStart, minWindow);

    console.log(str.slice(minStart, minStart + minWindow));
}



getWindow("ABBACBAA", "AAB");