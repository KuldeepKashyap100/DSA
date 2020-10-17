
//time o(n) space o(n/2)
// const checkPalindrome = (inputStr) => {
//     const stack = [];
//     let i=0
//     while(inputStr[i]!=='X') {
//         stack.push(inputStr[i]);
//         i++;
//     }
//     i++;
//     while(stack.length) {
//         if(stack.pop()!==inputStr[i])
//             return false
//         i++;
//     }
//     return true;
// }

const checkPalindrome = (inputStr) => {
    let i=0, j = inputStr.length-1;
    while(i<j && inputStr[i] === inputStr[j]) {
        i++;
        j--;
    }
    if(i < j)
        return false;
    return true;
}

console.log(checkPalindrome("abaaXaba"));