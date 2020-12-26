// time -> o(n) space -> o(n)
const removeDuplicates = (inputStr) => {
    let result = [];
    let stackPointer = -1;
    for(let i=0;i<inputStr.length;i++) {
        if(stackPointer === -1 || result[stackPointer] !== inputStr[i]) {
            stackPointer++;
            result[stackPointer] = inputStr[i];
        }
        else {
            while(i < inputStr.length && result[stackPointer] === inputStr[i]) {
                stackPointer--;
            }
        }
    }
    return result.join("");
}

console.log(removeDuplicates("careermonk"));