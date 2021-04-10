
const getLongestSubStr = (input, k) => {
    let left = 0, right = 0, maxSubStringLength = 0;
    const characterMap = {};
    while(right < input.length) {
        const currentChar = input[right];
        // store character count in map
        characterMap[currentChar] = characterMap[currentChar] ? ++characterMap[currentChar] : 1;
        // if length of map exceeds expecteds the expected unique characters length
        // then it's time to remove some characters
        if(Object.keys(characterMap).length > k) {
            // remove from left end of window until number of unique characters
            // becomes smaller than or equal to k
            while(Object.keys(characterMap).length > k) {
                const eliminateChar = input[left];
                // reduce count
                characterMap[eliminateChar]--;
                // remove character is count reaches to zero
                if(!characterMap[eliminateChar]) delete characterMap[eliminateChar];
                left++;
            }
        }
        // if map length is equal to k we have found the possibel candidate which 
        // could be the answer
        if(Object.keys(characterMap).length === k) {
            maxSubStringLength = Math.max(maxSubStringLength, right - left + 1);
        }
        right++;
    }
    console.log(maxSubStringLength);
}
const input = "aabacbebebe";
const uniqueCharacters = 3;
getLongestSubStr(input, uniqueCharacters);