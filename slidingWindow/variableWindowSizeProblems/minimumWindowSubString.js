/**
 * Given two string find the minimum substring in first
 * string that has atleast all the characters present in 
 * second string.
 */

const getMinimumSubString = (input, target) => {
    const targetMap = {};
    let targetUniqueCharacterCount = 0, left = 0, right = 0, minSubStringLength = Infinity;

    // create count map for target string
    for(let char of target) {
        targetMap[char] = targetMap[char] ? ++targetMap[char] : 1;
    }
    // count total number of distinct character in target string
    targetUniqueCharacterCount = Object.keys(targetMap).length;
    // untile entrire input string is scanned
    while(right < input.length) {
        const currentChar = input[right];
        // if current character is present in target string
        if(targetMap[currentChar] !== undefined) {
            // we have found one target charcter decrement it's count
            targetMap[currentChar]--;
            // if count becomes zero for any character of target string
            // then it means we have the required count for this character in current window
            // we don't need this charcter any more
            // now redcuce total unique character count 
            if(targetMap[currentChar] === 0) targetUniqueCharacterCount--;
        }

        // if total unique character count reaches zero that means 
        // we have all the target string characters in current
        // window
        if(targetUniqueCharacterCount === 0) {
            // now we try to reduce the size of window and check
            // if after reducing it, we still have all the required characters
            // if we don't then that means we can store the current candidate
            // and look for the new one
            while(targetUniqueCharacterCount === 0) {
                minSubStringLength = Math.min(minSubStringLength, right - left + 1);
                const eliminateChar = input[left];
                if(targetMap[eliminateChar] !== undefined) {
                    targetMap[eliminateChar]++;
                    if(targetMap[eliminateChar]) targetUniqueCharacterCount++;
                }
                left++;
            }
        }
        right++;
    }
    console.log(minSubStringLength);
}

const input = "abcbcaad";
const target = "abca";
getMinimumSubString(input, target);