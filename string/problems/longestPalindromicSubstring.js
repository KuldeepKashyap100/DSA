// time -> O(n * n/2) | space -> O(1)
const longestPalindromicSubString = (str) => {
    let maxLength = 0, evenLength, start;
    for(let i = 0; i < str.length; i++) {
        // find the longest even length palindrome
        // with center points as i-1 and i. 
        let p = i - 1;
        let q = i;

        while(p >= 0 && q < str.length && str[p] === str[q]) {
            if(maxLength < q - p + 1) {
                maxLength = q - p + 1;
                start = p;
            }
            p--;
            q++;
        }
        
        // find the longest odd length palindrome
        // with center point as i 
        p = i - 1;
        q = i + 1;
        while(p >= 0 && q < str.length && str[p] === str[q]) {
            if(maxLength < q - p + 1) {
                maxLength = q - p + 1;
                start = p;
            }
            p--;
            q++;
        }
    }
    console.log(maxLength, str.slice(start, start + maxLength));
}


/**
 * learn Manacher’s Algorithm
 * https://www.youtube.com/watch?v=V-sEwsca1ak
 * https://www.youtube.com/watch?v=V-sEwsca1ak
 */

let str = "abaxabaxabb";
str = "abaaba";
longestPalindromicSubString(str);