/**
 * replace all the spaces with %20 and assume string has enough spaces at the end;
 */

const replaceSpace = (str) => {
    let numberOfSpaces = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " " || str['\t']) 
            numberOfSpaces++;
    }
    // assume newStr is old str because js does not store strings in char arrays
    let newStr = [];
    let newLength = str.length + 2 * numberOfSpaces;
    for(let i = str.length - 1; i >=0; i--) {
        if(str[i] === " " || str[i] === "\t") {
            newStr[newLength--] = "%";
            newStr[newLength--] = "2";
            newStr[newLength--] = "0";
        }
        else
            newStr[newLength--] = str[i];
    }
    console.log(newStr.join(""));
}

replaceSpace("this is js code");