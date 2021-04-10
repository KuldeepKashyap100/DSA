
const getLongestSubstr = (input) => {
    const characterMap = {};
    let left = 0, right = 0, maxSubStringLength = 0;
    while(right < input.length) {
        const currentChar = input[right];
        // chaarcter count map
        characterMap[currentChar] = characterMap[currentChar] ? ++characterMap[currentChar] : 1;
        // if there are more characters in window than
        // the length of map 
        let mapLength = Object.keys(characterMap).length;
        let windowSize = right - left + 1
        if(mapLength < windowSize) {
            while(mapLength < windowSize) {
                const eliminateChar = input[left];
                characterMap[eliminateChar]--;
                // remove charcter from map
                if(!characterMap[eliminateChar]) delete characterMap[eliminateChar];
                left++;
                // update lengths
                mapLength = Object.keys(characterMap).length;
                windowSize = right - left + 1;
            }
        }
        // if length of map is equal to window size then window has all
        // the unique characters now it could be a possible candidate
        if(mapLength === windowSize) {
            maxSubStringLength = Math.max(maxSubStringLength, windowSize);
        }
        right++;
    }
    console.log(maxSubStringLength);
}

const input = "pwwkew";
getLongestSubstr(input);