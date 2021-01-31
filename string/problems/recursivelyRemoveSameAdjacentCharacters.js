// time -> O(n * l) where l is max no. of consecutive characters
const recursivelyRemoveSameAdjacentCharacters = (str) => {
    let sameAdjacentPresent = false, count = 0;
    str = str.split("");
    str = str.filter((item, index) => {
        if((item === str[index - 1] || item === str[index + 1])) {
            sameAdjacentPresent = true;
            return false;
        }
        return true;
    });
    str = str.slice(0, str.length - count).join("");
    return sameAdjacentPresent ? recursivelyRemoveSameAdjacentCharacters(str): str;
}


console.log(recursivelyRemoveSameAdjacentCharacters("acaaabbbacdddd"));



