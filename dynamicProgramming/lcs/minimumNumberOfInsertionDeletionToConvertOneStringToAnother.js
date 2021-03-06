/**
 * Given two strings ‘str1’ and ‘str2’ of size m and n respectively. 
 * The task is to remove/delete and insert the minimum number of characters 
 * from/in str1 to transform it into str2. 
 * It could be possible that the same character needs to be removed/deleted 
 * from one point of str1 and inserted to some another point.
 * 
 */

const minimiseOperations = (a, b) => {
    const lcsLength = findLcs(a, b, a.length, b.length);
    // remove those characters which are not needed to make str1 to str2
    const deletions = a.length - lcsLength;
    // insert those character which are present in str2
    const insertions = b.length - lcsLength;
    console.log(insertions + deletions);
}

const findLcs = (a, b, aLength, bLength) => {
    if(aLength === 0 || bLength === 0) return 0;

    if(a[aLength - 1] === b[bLength - 1])
        return 1 + findLcs(a, b, aLength - 1, bLength - 1);
    return Math.max(findLcs(a, b, aLength - 1, bLength), findLcs(a, b, aLength, bLength - 1));
}

let a = "heap";
let b = "pea";
a = "geeksforgeeks";
b = "geeks";
minimiseOperations(a, b);