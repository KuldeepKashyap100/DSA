
const wildCardPatternMatching = (text, pattern) => {
    let i = 0, j = 0;
    while(i < text.length && j < pattern.length) {
        if(pattern[j] === "*") {
            while(pattern[j] === "*") {
                j++;
            } 
            while(pattern[j] !== text[i]) {
                i++;
            }
        }
        if(text[i] !== pattern[j] && pattern[i] !== "?") {
            console.log("Not matched");
            return;
        }
        
        i++;
        j++;
    }
}

let text = "baaabab";
let pattern = "*****ba*****ab";

wildCardPatternMatching(text, pattern);