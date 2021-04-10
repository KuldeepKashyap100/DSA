// anagram -> Two Strings are said to be anagram if both of them are of same length 
// and count of each distinct character

const countAnagrams = (inputStr, targetStr) => {
    const targetStrCountHashMap = {};
    // prepare character count hashmap for target string
    for(let i = 0; i < targetStr.length; i++) {
        const currentChar = targetStr[i]
        targetStrCountHashMap[currentChar] = targetStrCountHashMap[currentChar] ? ++targetStrCountHashMap[currentChar] : 1;
    }

    // when totalCharacterCount reaches 0 it means we have found one anagram
    let totalCharacterCount = Object.keys(targetStrCountHashMap).length, totalAnagrams = 0;
    const windowSize = targetStr.length;
    // 
    for(let left = 0, right = 0; right < inputStr.length; right++) {
        const currentChar = inputStr[right];
        // check if character is part of target string
        if(targetStrCountHashMap[currentChar] !== undefined) {
            // decrement count in hash map
            targetStrCountHashMap[currentChar]--;
            // if count becomes 0 we can remove that character from total count
            if(targetStrCountHashMap[currentChar] === 0) 
                totalCharacterCount--;
        }
        // skip until window size is reached
        if(right - left + 1 < windowSize) {
            continue;
        }

        // if total character count reached to 0, then we have found the anagram
        if(!totalCharacterCount) totalAnagrams++;

        // now we are sliding window, we have to increment that character count in hashmap
        // so that it becomes initial value
        targetStrCountHashMap[inputStr[left]]++;
        if(targetStrCountHashMap[inputStr[left]] !== 0) 
                totalCharacterCount++;
        left++;
    }
    console.log(totalAnagrams);
}

const inputStr = "aabaabaa";
const targetStr = "aaba";
countAnagrams(inputStr, targetStr);